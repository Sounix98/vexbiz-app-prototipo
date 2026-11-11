// Router por hash con pila de navegación, esqueleto en la primera visita, hojas y diálogos.
//   #/M2.08            pantalla          #/M3.10?metodo=debito   con parámetros
//   #/M2.04            abre «Filtros y orden» sobre la pantalla de fondo (alias de O.FIL)
// Los elementos con data-go / data-back / data-close / data-toast se manejan por delegación en #phone.
import { enterScreen, openSheet, closeSheet, reduce } from './motion.js';
import { META, HOME, INDEX } from './screens/catalog.js';
import { defs } from './screens/registry.js';
import { state, set } from './store.js';
import { setBar, skeleton, h, $, icon, toast } from './ui.js';
import { esc } from './format.js';

const ALIAS = Object.fromEntries(INDEX.filter((r) => r.alias).map((r) => [r.label.replace(' ▣', ''), r.id]));
export const resolve = (code) => ALIAS[code] || code;

const stack = [];            // { code, params, scroll }
const visited = new Set();   // pantallas ya vistas (el esqueleto solo sale la primera vez)
let current = null;          // elemento .screen actual
let cleanup = null;          // limpieza del mount() de la pantalla actual
let overlay = null;          // { code, type, opener, cleanup }
let internal = false;        // true mientras el router mismo cambia el hash
let navId = 0;               // la última navegación gana: las anteriores que sigan en curso se abandonan

const view = () => $('#view');
const parse = (hash) => {
  const [path, qs = ''] = hash.replace(/^#\/?/, '').split('?');
  return { code: resolve(decodeURIComponent(path)), params: Object.fromEntries(new URLSearchParams(qs)) };
};
const hashOf = (code, params = {}) => {
  const qs = new URLSearchParams(params).toString();
  return `#/${code}${qs ? '?' + qs : ''}`;
};
function setHash(code, params) {
  internal = true; location.hash = hashOf(code, params);
  setTimeout(() => { internal = false; }, 0);
}

export const top = () => stack[stack.length - 1];
export const currentCode = () => (overlay ? overlay.code : top()?.code);

// ── Pantallas ───────────────────────────────────────────────────────────────
function pendingScreen(code) {
  const m = META[code] || { title: code, label: code, phase: '?' };
  return h(`<div class="vx-pending">
    <header class="md-topbar"><div class="md-topbar-row">${stack.length > 1 ? `<button type="button" class="md-iconbtn md-iconbtn--standard md-sl" data-back aria-label="Volver">${icon('back')}</button>` : ''}
    <h1 class="md-topbar-title md-title-large" tabindex="-1">${esc(m.title)}</h1></div></header>
    <section class="vx-state-block"><span class="vx-state-ico">${icon('clock', 32)}</span>
      <p class="md-label-large">${esc(m.label)} · pendiente</p>
      <p class="md-body-medium">Esta pantalla se construye en la Fase ${m.phase}. Mientras tanto, el Índice del panel la lista y esta ruta ya existe.</p></section>
  </div>`);
}

function build(code, params) {
  const def = defs.get(code);
  const el = h('<div class="screen" role="region"></div>');
  const meta = META[code];
  el.setAttribute('aria-label', meta.title);
  const ctx = { code, params, meta };
  const fill = () => {
    const node = def ? def.render(ctx) : pendingScreen(code);
    el.replaceChildren(node);
    ctx.root = node; // lo que devolvió render(): mount() trabaja sobre esto, no sobre el contenedor .screen
    return ctx;
  };
  return { el, ctx, fill, def };
}

/** Muestra una pantalla de la pila. kind: push | back | swap | mode | none */
async function show(entry, kind, id) {
  const meta = META[entry.code];
  const { el, ctx, fill, def } = build(entry.code, entry.params);
  const first = !visited.has(entry.code) && def?.skeleton !== false && kind !== 'none' && kind !== 'back';
  visited.add(entry.code);
  const old = current;
  ctx.kind = kind; ctx.first = first; // las pantallas deciden con esto si escalonan sus listas (solo en la primera carga)
  if (cleanup) { cleanup(); cleanup = null; }
  if (first) el.innerHTML = skeleton(); else fill();
  // La barra se mueve junto con la entrada: oculta o visible según la pantalla.
  setBar({ mode: meta.mode, tab: meta.tab, hidden: !meta.tab });
  view().append(el);
  current = el;
  const entering = enterScreen(el, kind);
  if (first) {
    await new Promise((r) => setTimeout(r, reduce() ? 150 : 520));
    if (id !== navId) return;
    fill();
    el.classList.add('vx-loaded');
    setTimeout(() => el.classList.remove('vx-loaded'), 220);
  }
  const m = def?.mount?.(ctx.root || el, ctx);
  cleanup = typeof m === 'function' ? m : null;
  await entering;
  if (id !== navId) return;
  [...view().children].forEach((c) => { if (c !== el) c.remove(); }); // deja solo la pantalla actual
  if (kind === 'back' && entry.scroll) el.scrollTop = entry.scroll;
  $('h1', el)?.focus({ preventScroll: true });
}

/** Navega a una pantalla. kind por defecto: push. */
export async function go(code, { kind = 'push', params = {} } = {}) {
  code = resolve(code);
  const meta = META[code];
  if (!meta) { toast('Esa pantalla no existe'); return; }
  if (meta.type === 'sheet' || meta.type === 'dialog' || meta.type === 'flow') return openOverlay(code, params);
  const id = ++navId;
  {
    if (meta.mode && meta.mode !== state.mode) set({ mode: meta.mode }); // saltar desde el Índice cambia el modo
    if (overlay) await closeOverlay({ silent: true });
    if (top() && current) top().scroll = current.scrollTop;
    const entry = { code, params, scroll: 0 };
    // 'fade' (fundido 350) y 'smart' (fundido 200, barras de búsqueda) apilan como un push pero sin desplazamiento.
    if (kind === 'push' || kind === 'fade' || kind === 'smart') stack.push(entry); else { stack.length = 0; stack.push(entry); }
    setHash(code, params);
    await show(entry, { fade: 'mode', smart: 'swap' }[kind] || kind, id);
  }
}

export async function back() {
  if (overlay) return closeOverlay();
  if (stack.length < 2) return;
  const id = ++navId;
  {
    stack.pop();
    const entry = top();
    setHash(entry.code, entry.params);
    await show(entry, 'back', id);
  }
}

/** Reinicia la pila y muestra el inicio de un modo con fundido de 350 ms. */
export const goHome = (mode, kind = 'mode') => go(HOME[mode], { kind });

// ── Hojas, pantallas de flujo y diálogos ────────────────────────────────────
const layers = () => ({ sheet: $('#sheet'), scrim: $('#scrim'), dialog: $('#dialog') });

export async function openOverlay(code, params = {}) {
  code = resolve(code);
  const meta = META[code];
  if (overlay) await closeOverlay({ silent: true });
  if (!current) await goHome(state.mode, 'none'); // enlace directo a una hoja: primero el fondo
  const def = defs.get(code);
  const { sheet, scrim, dialog } = layers();
  const type = meta.type;
  const ctx = { code, params, meta };
  const content = def
    ? def.render(ctx)
    : h(`<div class="vx-pending-sheet"><h2 id="sheet-title" class="md-title-large">${esc(meta.title)}</h2><p class="md-body-medium">${esc(meta.label)} · pendiente · Fase ${meta.phase}.</p></div>`);
  const opener = document.activeElement;
  overlay = { code, type, opener, cleanup: null };
  setHash(code, params);
  if (type === 'dialog') {
    dialog.replaceChildren(content);
    dialog.hidden = false; dialog.classList.add('vx-overlay', 'is-open');
    dialog.setAttribute('aria-labelledby', 'dlg-title');
  } else {
    sheet.classList.toggle('vx-sheet--full', type === 'flow');
    sheet.replaceChildren(h('<span class="md-sheet-handle" aria-hidden="true"></span>'), content);
    sheet.setAttribute('aria-labelledby', 'sheet-title');
    openSheet(sheet, scrim);
  }
  const m = def?.mount?.(content, ctx);
  overlay.cleanup = typeof m === 'function' ? m : null;
  // Foco al título de la hoja (o al primer control) y trampa de foco.
  requestAnimationFrame(() => (( $('[id="sheet-title"],[id="dlg-title"]', content.parentElement || content) || content).focus?.({ preventScroll: true })));
}

export async function closeOverlay({ silent = false } = {}) {
  if (!overlay) return;
  const o = overlay; overlay = null;
  o.cleanup?.();
  const { sheet, scrim, dialog } = layers();
  if (o.type === 'dialog') {
    dialog.classList.remove('is-open'); dialog.classList.add('is-closing');
    await new Promise((r) => dialog.addEventListener('animationend', r, { once: true }));
    dialog.classList.remove('is-closing', 'vx-overlay'); dialog.hidden = true; dialog.replaceChildren();
  } else {
    await closeSheet(sheet, scrim);
    sheet.classList.remove('vx-sheet--full'); sheet.replaceChildren();
  }
  if (!silent && top()) setHash(top().code, top().params);
  o.opener?.isConnected && o.opener.focus?.({ preventScroll: true });
}
export const hasOverlay = () => !!overlay;

// ── Arranque y eventos ──────────────────────────────────────────────────────
export function start() {
  const phone = $('#phone');
  phone.addEventListener('click', (e) => {
    const t = e.target.closest('[data-go],[data-back],[data-close],[data-toast]');
    if (e.target === $('#scrim')) { closeOverlay(); return; }
    if (!t) return;
    if (t.matches('a')) e.preventDefault();
    if (t.dataset.toast) toast(t.dataset.toast);
    if (t.hasAttribute('data-close')) closeOverlay();
    else if (t.hasAttribute('data-back')) back();
    else if (t.dataset.go) {
      const { code, params } = parse('#/' + t.dataset.go);
      go(code, { kind: t.dataset.kind || 'push', params });
    }
  });
  document.addEventListener('keydown', (e) => {
    if (!overlay) return;
    if (e.key === 'Escape' && overlay.type !== 'dialog') { e.preventDefault(); closeOverlay(); }
    if (e.key === 'Tab') { // foco atrapado dentro de la hoja o del diálogo
      const root = overlay.type === 'dialog' ? $('#dialog') : $('#sheet');
      const f = [...root.querySelectorAll('button,a[href],input,select,textarea,[tabindex]:not([tabindex="-1"])')].filter((n) => !n.disabled && n.offsetParent !== null);
      if (!f.length) return;
      const first = f[0], last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
      else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
    }
  });
  window.addEventListener('hashchange', () => {
    if (internal) return;
    const { code, params } = parse(location.hash);
    if (!META[code]) return;
    const meta = META[code];
    if (meta.type === 'sheet' || meta.type === 'dialog' || meta.type === 'flow') { openOverlay(code, params); return; }
    // Botón «atrás» del navegador: si coincide con la pantalla anterior de la pila, es un «Volver».
    if (stack.length > 1 && stack[stack.length - 2].code === code) { back(); return; }
    go(code, { kind: 'swap', params });
  });
  const first = location.hash ? parse(location.hash) : { code: 'M1.01', params: {} };
  const meta = META[first.code] || META['M1.01'];
  if (meta.type === 'sheet' || meta.type === 'dialog' || meta.type === 'flow') openOverlay(first.code, first.params);
  else go(META[first.code] ? first.code : 'M1.01', { kind: 'none', params: first.params });
}
