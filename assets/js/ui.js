// Piezas compartidas: íconos, barra superior, botones, esqueleto, estados comunes, aviso breve y barras por modo.
import { esc } from './format.js';
import { BARS, MODE_NAME } from './screens/catalog.js';
import { state, cartCount, subscribe } from './store.js';
import { play } from './motion.js';

// ── Íconos ──────────────────────────────────────────────────────────────────
// Trazo de 2 px, 24 × 24, hereda currentColor. Juego provisional dibujado a mano con el estilo
// Material Symbols Rounded (el kit del Figma trae sus propios SVG; ver INFORME.md).
const I = {
  back: 'M19 12H5M11 6l-6 6 6 6', close: 'M6 6l12 12M18 6L6 18', check: 'M5 12.5l4.5 4.5L19 7.5',
  home: 'M4 11l8-7 8 7M6 10v9h12v-9M10 19v-5h4v5', explore: 'M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z',
  search: '<circle cx="11" cy="11" r="6"/><path d="M21 21l-5-5"/>',
  cart: '<path d="M3 4h2l2.2 10.5a1 1 0 001 .8h8.6a1 1 0 001-.8L19 8H6"/><circle cx="9" cy="19" r="1.2"/><circle cx="17" cy="19" r="1.2"/>',
  receipt: 'M6 3h12v18l-3-2-3 2-3-2-3 2zM9 8h6M9 12h6',
  person: '<circle cx="12" cy="8" r="3.5"/><path d="M5 20c0-4 3-6 7-6s7 2 7 6"/>',
  briefcase: 'M4 8h16v11H4zM9 8V6h6v2M4 13h16',
  sliders: '<path d="M4 7h10M18 7h2M4 17h2M10 17h10"/><circle cx="16" cy="7" r="2"/><circle cx="8" cy="17" r="2"/>',
  bag: 'M5 8h14l-1 12H6zM9 8a3 3 0 016 0',
  idcard: '<path d="M4 5h16v14H4zM13 10h4M13 14h4"/><circle cx="8.5" cy="10.5" r="1.8"/><path d="M6 16c0-1.6 1.2-2.5 2.5-2.5S11 14.4 11 16"/>',
  box: 'M4 8l8-4 8 4v8l-8 4-8-4zM4 8l8 4 8-4M12 12v8',
  tag: '<path d="M3 12V4h8l10 10-8 8z"/><circle cx="7.5" cy="8.5" r="1"/>',
  wallet: 'M4 7h14a2 2 0 012 2v9a2 2 0 01-2 2H4zM4 7V6a2 2 0 012-2h10M16 14h2',
  more: '<circle cx="6" cy="12" r="1.3"/><circle cx="12" cy="12" r="1.3"/><circle cx="18" cy="12" r="1.3"/>',
  list: 'M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01',
  book: 'M5 4h10a3 3 0 013 3v13H8a3 3 0 01-3-3zM5 17a3 3 0 013-3h10',
  store: 'M4 9l1-5h14l1 5M4 9a2 2 0 004 0 2 2 0 004 0 2 2 0 004 0 2 2 0 004 0M5 11v9h14v-9M10 20v-5h4v5',
  swap: 'M7 7h12l-3-3M17 17H5l3 3', bell: 'M6 17V11a6 6 0 0112 0v6l2 2H4zM10 21h4',
  info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.01"/>',
  error: '<circle cx="12" cy="12" r="9"/><path d="M12 7v6M12 16.5v.01"/>',
  warning: 'M12 4l9 16H3zM12 10v4M12 17v.01',
  wifioff: 'M3 3l18 18M2 9a15 15 0 015-3M22 9a15 15 0 00-9-4.5M5.5 12.5a10 10 0 014-2.5M18.5 12.5a10 10 0 00-3-2M9 16a5 5 0 016 0M12 20v.01',
  searchoff: '<circle cx="11" cy="11" r="6"/><path d="M21 21l-5-5M4 4l16 16"/>',
  lock: 'M6 11h12v9H6zM8 11V8a4 4 0 018 0v3', school: 'M2 9l10-5 10 5-10 5zM6 11.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-4.5',
  chevron: 'M9 6l6 6-6 6', add: 'M12 5v14M5 12h14', inbox: 'M4 13l3-8h10l3 8v6H4zM4 13h5l1 2h4l1-2h5',
  sound: 'M4 10v4h4l5 4V6L8 10zM16 9a4 4 0 010 6', shield: 'M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z',
  wrench: 'M14.5 6.5a4 4 0 005 5L10 21a2.1 2.1 0 01-3-3z', toolbox: 'M4 9h16v10H4zM9 9V6h6v3M4 14h16',
  minus: 'M6 12h12', heart: 'M12 20s-7-4.6-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.4-7 10-7 10z',
  share: '<circle cx="6" cy="12" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="M8 11l8-4M8 13l8 4"/>',
  copy: 'M9 9h11v11H9zM5 15V5h10', upload: 'M12 16V5M7 9l5-5 5 5M5 19h14', map: 'M9 4l6 2 5-2v14l-5 2-6-2-5 2V6zM9 4v14M15 6v14',
  trash: 'M5 7h14M10 7V5h4v2M7 7l1 13h8l1-13', edit: 'M4 20h4L19 9l-4-4L4 16zM13 7l4 4', truck: 'M3 7h11v9H3zM14 10h4l3 3v3h-7',
  eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  chat: 'M4 5h16v11H9l-5 4zM8 10h8M8 13h5', phone: 'M8 3h8v18H8zM11 18h2', desktop: 'M3 5h18v11H3zM8 20h8M12 16v4', more2: '<circle cx="12" cy="5" r="1.4"/><circle cx="12" cy="12" r="1.4"/><circle cx="12" cy="19" r="1.4"/>',
  star: 'M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z', logout: 'M10 5H5v14h5M14 8l4 4-4 4M18 12H9', globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>', doc: 'M7 3h7l4 4v14H7zM14 3v4h4M10 12h5M10 16h5', key: '<circle cx="8" cy="15" r="3.5"/><path d="M10.5 12.5L20 3M16 7l3 3"/>', gift: 'M4 9h16v4H4zM6 13v7h12v-7M12 9v11M12 9c-2 0-4-1-4-3s3-2 4 3zM12 9c2 0 4-1 4-3s-3-2-4 3z',
  menu: 'M4 6h16M4 12h16M4 18h16', clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
};
export const icon = (name, size = 24) => {
  const d = I[name] || I.info;
  const inner = d.startsWith('<') ? d : `<path d="${d}"/>`;
  return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${inner}</svg>`;
};

// ── DOM ─────────────────────────────────────────────────────────────────────
export const h = (html) => { const t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstElementChild; };
export const $ = (sel, root = document) => root.querySelector(sel);
export const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];

// ── Piezas ──────────────────────────────────────────────────────────────────
/** Barra superior con flecha «Volver» y título en <h1>. */
export const topbar = (title, { back = true, trailing = '', close = false } = {}) => `
  <header class="md-topbar"><div class="md-topbar-row">
    ${back ? `<button type="button" class="md-iconbtn md-iconbtn--standard md-sl" ${close ? 'data-close' : 'data-back'} aria-label="${close ? 'Cerrar' : 'Volver'}">${icon(close ? 'close' : 'back')}</button>` : ''}
    <h1 class="md-topbar-title md-title-large" tabindex="-1">${esc(title)}</h1>${trailing}
  </div></header>`;

export const btn = (label, { kind = 'filled', go, kindNav, attrs = '', block = false, id } = {}) =>
  `<button type="button" class="md-btn md-btn--${kind} md-sl vx-press${block ? ' md-btn--block' : ''}"${id ? ` id="${id}"` : ''}${go ? ` data-go="${go}"` : ''}${kindNav ? ` data-kind="${kindNav}"` : ''} ${attrs}>${label}</button>`;

export const iconBtn = (name, label, attrs = '') =>
  `<button type="button" class="md-iconbtn md-iconbtn--standard md-sl" aria-label="${esc(label)}" ${attrs}>${icon(name)}</button>`;

/** Bloque de estado: ícono + título + texto + acción. El ámbar no se usa: es neutro, con ícono y texto. */
export const stateBlock = ({ icon: ic = 'info', title, text = '', action = '' }) => `
  <section class="vx-state-block" aria-label="${esc(title)}">
    <span class="vx-state-ico">${icon(ic, 32)}</span>
    <h2 class="md-title-medium">${esc(title)}</h2>${text ? `<p class="md-body-medium">${esc(text)}</p>` : ''}${action}
  </section>`;

/** Esqueleto genérico (Patrón 14): barra superior + bloques grises con brillo. */
export const skeleton = () => `
  <div class="vx-skeleton" aria-busy="true" aria-label="Cargando">
    <div class="vx-skel vx-skel-bar"></div>
    <div class="vx-skel vx-skel-hero"></div>
    <div class="vx-skel vx-skel-line"></div><div class="vx-skel vx-skel-line vx-skel-short"></div>
    <div class="vx-skel-grid"><div class="vx-skel vx-skel-card"></div><div class="vx-skel vx-skel-card"></div></div>
  </div>`;

// ── Aviso breve (Snackbar, Patrón 20) ───────────────────────────────────────
let toastTimer;
export function toast(text, { action, onAction, ms = 4000 } = {}) {
  const host = $('#toast');
  clearTimeout(toastTimer);
  host.innerHTML = `<div class="md-snack vx-toast${action ? ' md-snack--act' : ''}" role="status"><span class="md-snack-text md-body-medium">${esc(text)}</span>${action ? `<button type="button" class="md-snack-action md-sl md-label-large">${esc(action)}</button>` : ''}</div>`;
  const el = host.firstElementChild;
  requestAnimationFrame(() => el.classList.add('is-open'));
  if (action) $('button', el).addEventListener('click', () => { onAction && onAction(); hide(); });
  const hide = () => {
    el.classList.remove('is-open'); el.classList.add('is-closing');
    el.addEventListener('animationend', () => { if (el.isConnected) el.remove(); }, { once: true });
  };
  toastTimer = setTimeout(hide, ms);
}

// ── Barras inferiores por modo ──────────────────────────────────────────────
let barMode = null;
/** Construye la barra del modo (solo cuando cambia el modo) y mueve la píldora a la pestaña activa. */
export function setBar({ mode, tab, hidden }) {
  const bar = $('#bar');
  bar.hidden = hidden || !mode || !BARS[mode];
  if (bar.hidden) return;
  if (barMode !== mode) {
    barMode = mode;
    bar.innerHTML = `<nav class="md-navbar vx-bar" aria-label="Navegación · modo ${MODE_NAME[mode]}"><span class="vx-pill" aria-hidden="true"></span>${
      BARS[mode].map(([id, label, ic, to]) => `
        <a class="md-navitem" href="#/${to}" data-go="${to}" data-kind="swap" data-tab="${id}">
          <span class="md-navitem-ind md-sl">${icon(ic)}${id === 'carrito' ? `<span class="md-badge md-badge--large md-navitem-badge" id="cartBadge" aria-label="artículos en el carrito"></span>` : ''}</span>
          <span class="md-navitem-label md-label-medium">${label}</span>
        </a>`).join('')}</nav>`;
    paintCart();
  }
  const items = $$('.md-navitem', bar);
  items.forEach((a) => {
    const on = a.dataset.tab === tab;
    a.classList.toggle('md-navitem--on', on);
    on ? a.setAttribute('aria-current', 'page') : a.removeAttribute('aria-current');
  });
  const on = items.find((a) => a.dataset.tab === tab);
  const pill = $('.vx-pill', bar);
  if (on) {
    const wasHidden = pill.hidden || !pill.style.transform;
    if (wasHidden) pill.style.transition = 'none'; // la primera vez aparece en su sitio, sin deslizarse
    pill.hidden = false;
    pill.style.transform = `translateX(${on.offsetLeft + on.offsetWidth / 2 - 32}px)`;
    if (wasHidden) { void pill.offsetWidth; pill.style.transition = ''; }
  } else pill.hidden = true;
}

let lastCount = -1;
export function paintCart() {
  const b = $('#cartBadge');
  if (!b) return;
  const n = cartCount();
  b.hidden = n === 0;
  b.textContent = n;
  if (lastCount !== -1 && n !== lastCount) {
    play($('.md-navitem[data-tab="carrito"] .md-navitem-ind svg'), 'vx-pop'); // Patrón 11: pop del ícono
    play(b, 'vx-tick');                                                       // Patrón 12: la cifra se renueva
  }
  lastCount = n;
}
subscribe(paintCart);
