// VEXBIZ web · arranque: router por hash, cabecera de dos filas, pie y acciones comunes (añadir al carrito).
// Cada página es un módulo { code, label, title, render(q) → html, mount(root, q) → limpieza }.
import { state, subscribe, addToCart, cartCount } from '../../assets/js/store.js';
import { nichos } from './dataweb.js';
import { icon, esc, toast, play, reduce, sesion } from './kit.js';
import { PAGINAS, MODULOS } from './paginas.js';
import inicio from './pages/inicio.js';
import * as cat from './pages/catalogo.js';
import * as compra from './pages/compra.js';
import * as acceso from './pages/acceso.js';
import * as cuenta from './pages/cuenta.js';
import { RUTAS_SERV } from './pages/servicios.js';
import { RUTAS_TEC } from './pages/tecnico.js';
import { RUTAS_EMP } from './pages/empresa.js';
import { RUTAS_TIENDA1 } from './pages/tienda.js';
import { RUTAS_TIENDA2 } from './pages/tienda2.js';


const ROUTES = {
  '': inicio, nichos: cat.nichosPage, nicho: cat.nichoPage, categoria: cat.categoriaPage, buscar: cat.buscarPage,
  producto: cat.productoPage, tiendas: cat.tiendasPage, tienda: cat.tiendaPage,
  carrito: compra.carritoPage, pagar: compra.pagarPage, espera: compra.esperaPage,
  entrar: acceso.entrarPage, registro: acceso.registroPage, verificar: acceso.verificarPage, pais: acceso.paisPage, recuperar: acceso.recuperarPage, boletin: acceso.boletinPage,
  ...cuenta.RUTAS, ...RUTAS_SERV, ...RUTAS_TEC, ...RUTAS_EMP, ...RUTAS_TIENDA1, ...RUTAS_TIENDA2,
  indice: { code: 'Índice', label: 'MARKETPLACE', title: 'Índice de páginas', render: indice },
};

const $ = (s, r = document) => r.querySelector(s);
const host = $('#page');
let cleanup = null, lastHash = null;

function parse() {
  const raw = location.hash.replace(/^#\/?/, '');
  const [path, qs] = raw.split('?');
  return { path: path || '', q: Object.fromEntries(new URLSearchParams(qs || '')) };
}

function render() {
  const { path, q } = parse();
  const page = ROUTES[path] || pendiente(path);
  if (cleanup) { try { cleanup(); } catch { /* sin limpieza */ } cleanup = null; }
  if (page.sesion === 'login' && !sesion.on) { location.replace(`#/entrar?next=${encodeURIComponent(location.hash)}`); return; }
  if (page.sesion === true) sesion.on = true;
  // Cada página se pinta en un elemento nuevo: así las escuchas que agrega su mount() mueren con ella
  // (antes se acumulaban en #page y las acciones se disparaban varias veces al volver a una página).
  const same = location.hash === lastHash; lastHash = location.hash;
  const view = document.createElement('div'); view.className = 'w-view'; view.innerHTML = page.render(q);
  const y = window.scrollY;
  host.replaceChildren(view);
  if (!same) { host.classList.remove('is-in'); void host.offsetWidth; host.classList.add('is-in'); }
  document.title = `VEXBIZ · ${page.title || 'Marketplace'}`;
  $('[data-page-label]').textContent = page.label || 'MARKETPLACE';
  paintAccount(); paintShell(page, path, q);
  if (!$('#w-sheet').hidden) toggleMore(false);
  cleanup = page.mount ? page.mount(view, q) || null : null;
  if (same) { window.scrollTo({ top: y, behavior: 'instant' }); return; } // volver a pintar la misma página (tras una acción) no la mueve
  window.scrollTo({ top: 0, behavior: 'instant' });
  const h1 = view.querySelector('h1'); if (h1) { h1.setAttribute('tabindex', '-1'); h1.focus({ preventScroll: true }); }
  // la búsqueda de la cabecera refleja la consulta actual
  const f = $('[data-search]'); f.q.value = path === 'buscar' ? q.q || '' : ''; f.n.value = path === 'buscar' ? q.n || '' : '';
}

/** Móvil: pestaña activa de la barra inferior y barra de acción fija de la página (page.barra). */
let barPage = null, barQ = {};
function paintShell(page, path, q) {
  barPage = page; barQ = q;
  const tab = path === 'buscar' && q.orden === 'ofertas' ? 'buscar' : ['', 'nichos', 'compras'].includes(path) ? path : path === 'buscar' ? '' : null;
  document.querySelectorAll('[data-tab]').forEach((a) => { const on = tab !== null && a.dataset.tab === tab && (path !== 'buscar' || q.orden === 'ofertas'); a.toggleAttribute('aria-current', on); if (on) a.setAttribute('aria-current', 'page'); });
  paintBar();
}
function paintBar() {
  const bar = $('#w-mbar'), html = barPage?.barra ? barPage.barra(barQ) : '';
  bar.innerHTML = html || ''; bar.hidden = !html; document.body.classList.toggle('has-mbar', !!html);
}
function toggleMore(open) {
  const m = $('#w-sheet'), b = $('[data-masmenu]'); m.hidden = !open; b.setAttribute('aria-expanded', String(open)); document.body.classList.toggle('is-locked', open);
  if (open) m.querySelector('a').focus(); else b.focus();
}
function paintTheme() { const dark = document.documentElement.getAttribute('data-theme') === 'dark'; $('[data-theme-toggle] span').textContent = dark ? 'Modo claro' : 'Modo oscuro'; }

/** Página aún no construida: dice qué es y en qué fase llega. */
function pendiente(path) {
  const p = PAGINAS.find((x) => x[2] === '#/' + path);
  return {
    label: 'MARKETPLACE', title: 'En construcción',
    render: () => `<div class="w-wrap w-pend"><div class="w-panel w-pend__card"><span class="w-pend__ico">${icon('toolbox', 32)}</span>
      <h1>Esta página llega en una próxima fase</h1><p>El prototipo web se construye por fases a partir del Figma. ${p ? `«${esc(p[1])}» (${p[0]}) está en la fase ${p[3]}.` : 'Revisa el índice para ver qué páginas ya están hechas.'}</p>
      <p class="w-pend__acts"><a class="w-btn w-btn--primary" href="#/">Ir a la portada</a><a class="w-btn w-btn--ghost" href="#/indice">Ver el índice de páginas</a></p></div></div>`,
  };
}

/** Índice de las 82 páginas, por módulo, con su estado. */
function indice() {
  const hechas = PAGINAS.filter((p) => p[2]).length;
  const grupos = Object.entries(MODULOS).map(([m, nombre]) => {
    const ps = PAGINAS.filter((p) => p[0].startsWith(m + '.'));
    return `<section class="w-panel w-idx__mod"><h2>${m} · ${esc(nombre)} <span>${ps.filter((p) => p[2]).length} de ${ps.length}</span></h2><ol>${ps.map((p) => `<li>${p[2]
      ? `<a href="${p[2]}"><b>${p[0]}</b> ${esc(p[1])}</a><span class="w-badge w-badge--ok">${icon('check', 14)}Hecha</span>`
      : `<span><b>${p[0]}</b> ${esc(p[1])}</span><span class="w-badge w-badge--neutral">Fase ${p[3]}</span>`}</li>`).join('')}</ol></section>`;
  }).join('');
  return `<div class="w-wrap"><h1 class="w-title">Índice de páginas</h1><p class="w-lede">${hechas} de ${PAGINAS.length} páginas del Figma web ya están en el prototipo.</p><div class="w-idx">${grupos}</div></div>`;
}

function paintAccount() {
  $('[data-hello]').textContent = sesion.on ? 'Hola, Aníbal' : 'Inicia sesión';
  $('[data-acct]').textContent = sesion.on ? 'Mi cuenta' : 'Entrar';
  $('.w-acct').setAttribute('href', sesion.on ? '#/tablero' : '#/entrar');
  $('.w-bell').setAttribute('href', sesion.on ? '#/avisos' : '#/entrar');
  $('.w-acct__av').dataset.ini = sesion.on ? 'A' : '';
}
window.addEventListener('vx-sesion', paintAccount);
function paintCart() {
  const b = $('[data-cart-badge]'), n = cartCount();
  b.hidden = !n; b.textContent = n;
}

// ── Cabecera: nichos en el alcance del buscador y búsqueda ─────────────────
const scope = $('[data-search] select');
scope.insertAdjacentHTML('beforeend', nichos.map((n) => `<option value="${n.id}">${esc(n.nombre)}</option>`).join(''));
$('[data-search]').addEventListener('submit', (e) => {
  e.preventDefault();
  const f = e.currentTarget, q = f.q.value.trim();
  location.hash = `#/buscar?q=${encodeURIComponent(q)}${f.n.value ? `&n=${f.n.value}` : ''}`;
});

// ── Acciones comunes por delegación ────────────────────────────────────────
document.addEventListener('click', (e) => {
  const add = e.target.closest('[data-add]');
  if (add && !add.disabled) {
    e.preventDefault();
    const qty = Number(add.dataset.qty || 1);
    addToCart(add.dataset.add, qty, add.dataset.oferta);
    toast(qty > 1 ? `${qty} unidades añadidas al carrito` : 'Añadido al carrito');
    play($('[data-cart]'), 'w-pop');
    return;
  }
  if (e.target.closest('[data-masmenu]')) { toggleMore($('#w-sheet').hidden); return; }
  if (e.target.closest('[data-sheet-close]') || e.target.matches('.w-sheet')) { toggleMore(false); return; }
  if (e.target.closest('[data-theme-toggle]')) { const d = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'; document.documentElement.setAttribute('data-theme', d); try { localStorage.setItem('vx-web-theme', d); } catch { /* sin almacenamiento */ } paintTheme(); return; }
  const ft = e.target.closest('.w-foot__tog'); if (ft) { ft.setAttribute('aria-expanded', String(ft.getAttribute('aria-expanded') !== 'true')); return; }
  const sm = e.target.closest('.w-side__m'); if (sm) { const open = sm.getAttribute('aria-expanded') !== 'true'; sm.setAttribute('aria-expanded', String(open)); sm.closest('.w-side').classList.toggle('is-open', open); return; }
  const t = e.target.closest('[data-toast]');
  if (t) { e.preventDefault(); toast(t.dataset.toast); }
});
document.addEventListener('submit', (e) => {
  const nl = e.target.closest('[data-nl]'); if (!nl) return;
  e.preventDefault();
  const i = nl.querySelector('input');
  if (!/^\S+@\S+\.\S+$/.test(i.value.trim())) { toast('Escribe un correo válido, por ejemplo tunombre@vexbiz.com'); i.focus(); return; }
  i.value = ''; toast('Listo: te enviamos un correo para confirmar la suscripción');
});

subscribe(paintCart); subscribe(() => { if (barPage?.barra) paintBar(); });
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !$('#w-sheet').hidden) toggleMore(false); });
paintTheme();
window.addEventListener('hashchange', render);
if (reduce()) document.documentElement.setAttribute('data-reduce-motion', '');
paintCart();
render();
