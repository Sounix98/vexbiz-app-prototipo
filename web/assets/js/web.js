/* VEXBIZ WEB · Prototipo de escritorio (1440). Cabecera superior con buscador, cuenta y carrito,
   barra de nichos y pie de página. Reutiliza las mismas vistas de la app móvil; el diseño de
   escritorio vive en assets/css/web.css (desde 1024 px). */
import { cart, subscribe } from './store.js';
import { auth } from './auth.js';
import { esc } from './format.js';
import { CONFIG } from './config.js';
import { api } from './api.js';
import { prefs } from './store.js';
import { img, priceLabel } from './ui.js';

const ROUTE_OF = { pedidos: 'pedidos', pedido: 'pedidos', favoritos: 'favoritos', cuenta: 'cuenta', login: 'cuenta', registro: 'cuenta', carrito: 'carrito', pago: 'carrito', categorias: 'categorias', tiendas: 'tiendas', s: 'tiendas' };

const PAGE_LABEL = { cuenta: 'MI CUENTA', login: 'MI CUENTA', registro: 'MI CUENTA', pedidos: 'MIS COMPRAS', pedido: 'MIS COMPRAS', favoritos: 'FAVORITOS', carrito: 'MI CARRITO', pago: 'PAGO', categorias: 'CATEGORÍAS', tiendas: 'TIENDAS' };
const ext = (path, label) => `<a href="${CONFIG.siteUrl}${path}" target="_blank" rel="noopener">${label}</a>`;
const FOOTER = () => `<section class="nl" aria-label="Boletín"><div class="nl__in">
  <span class="nl__ico" aria-hidden="true"><svg class="ico"><use href="#i-mail"/></svg></span>
  <div class="nl__t"><h2>Suscríbete a nuestro boletín</h2><p>Ofertas, cupones y novedades. Una vez por semana, sin más.</p></div>
  <form class="nl__f" novalidate data-nl><div class="nl__row"><label class="sr" for="nl-mail">Correo electrónico</label><input id="nl-mail" type="email" inputmode="email" autocomplete="email" placeholder="tunombre@vexbiz.com"><button class="nl__go" type="submit">Suscribirme</button></div><small>Cero spam. Puedes darte de baja cuando quieras.</small></form>
</div></section>
<footer class="df" aria-label="Pie de página"><div class="df__in">
  <div class="df__brand"><img src="assets/img/logo-oscuro.webp" width="112" height="44" alt="VEXBIZ">
    <p>El marketplace de productos, repuestos y servicios técnicos. Compra con custodia Escrow en tiendas verificadas.</p>
    <p class="df__chips"><span class="df__chip"><svg class="ico ico--xs" aria-hidden="true"><use href="#i-shield"/></svg>Custodia Escrow</span><span class="df__chip"><svg class="ico ico--xs" aria-hidden="true"><use href="#i-check-circle"/></svg>Tiendas Verificadas</span></p>
    <p class="df__h">Redes Oficiales</p><p class="df__soc"><span>IG</span><span>FB</span><span>TT</span><span>YT</span></p></div>
  <nav class="df__col" aria-label="Ayuda"><b>AYUDA</b>${ext('/how-to-buy', 'Cómo comprar')}${ext('/shipping', 'Envíos')}${ext('/returns', 'Devoluciones y garantías')}${ext('/contact', 'Contacto')}<a href="#/inicio">Cómo se ve VexBiz</a></nav>
  <nav class="df__col" aria-label="Legal"><b>LEGAL</b>${ext('/terms', 'Términos y condiciones')}${ext('/privacy', 'Política de privacidad')}${ext('/legal', 'Aviso legal')}</nav>
  <nav class="df__col" aria-label="Servicios"><b>SERVICIOS</b>${ext('/technical-service', 'Servicio técnico')}${ext('/insurance', 'Seguros')}${ext('/roadside', 'Auxilio vial')}${ext('/academy', 'Academia')}</nav>
  <nav class="df__col" aria-label="Únete a VEXBIZ"><b>ÚNETE A VEXBIZ</b>${ext('/sell-on-vexbiz', 'Vender en VexBiz')}${ext('/technical-service', 'Trabajar como técnico')}${ext('/franchise', 'Franquicias')}${ext('/about', 'Quiénes somos')}<a href="#/categorias">Nichos</a></nav>
  <div class="df__pay"><span class="df__h">MEDIOS DE PAGO</span><span class="df__pill">SPIDI</span><span class="df__pill">Transferencia Bancaria</span><span class="df__pill">Pago Móvil</span></div>
  <div class="df__legal"><span>© 2026 Vexbiz Marketplace. Todos los derechos reservados.</span><span>Infraestructura Tecnológica Multipaís &amp; Multinicho</span></div>
</div></footer>`;

export function initWeb() {
  const dh = document.querySelector('[data-dh]');
  if (!dh) return () => {};
  const badge = dh.querySelector('[data-dh-badge]');
  const sync = () => { const n = cart.count(); badge.hidden = !n; badge.textContent = n > 99 ? '99+' : n; };
  subscribe((w) => { if (w === 'cart' || w === 'reset' || w === 'orders') sync(); }); sync();
  const user = () => { const n = auth.signedIn() ? auth.firstName() : ''; dh.querySelector('[data-dh-hello]').textContent = n ? 'Hola, ' + n : 'Inicia sesión'; dh.querySelector('[data-dh-username]').textContent = n ? 'Mi cuenta' : 'Entrar'; };
  auth.subscribe(user); user();
  const form = dh.querySelector('[data-dh-search]');
  initSearch(form);
  // al cambiar de vista: marca el enlace activo y agrega el pie de página
  return (r) => {
    const key = ROUTE_OF[r.view] || '', niche = r.view === 'n' ? r.param : '';
    dh.querySelectorAll('[data-dh-r]').forEach((a) => a.toggleAttribute('aria-current', a.dataset.dhR === key));
    dh.querySelectorAll('[data-dh-n]').forEach((a) => a.toggleAttribute('aria-current', a.dataset.dhN === niche));
    if (r.view === 'buscar') { form.q.value = r.query.q || ''; form.n.value = r.query.n || ''; form.dispatchEvent(new Event('input')); }
    else form.n.value = r.view === 'n' && r.param !== 'todo' && NAMES[r.param] ? r.param : '';
    dh.querySelector('[data-dh-page]').textContent = PAGE_LABEL[r.view] || 'MARKETPLACE';
    const scr = document.getElementById('screen-host').firstChild;
    // carrusel con flechas para los proveedores (una sola fila)
    const rail = scr && scr.querySelector('[data-providers]');
    if (rail && !rail.parentElement.classList.contains('wcar')) {
      const wrap = document.createElement('div'); wrap.className = 'wcar'; rail.before(wrap); wrap.append(rail);
      wrap.insertAdjacentHTML('beforeend', ['-1', '1'].map((d) => `<button class="wcar__btn" type="button" data-dir="${d}" aria-label="${d === '1' ? 'Ver más proveedores' : 'Volver a los anteriores'}"><svg class="ico" aria-hidden="true"><use href="#i-chev-${d === '1' ? 'r' : 'l'}"/></svg></button>`).join(''));
      const upd = () => { wrap.querySelector('[data-dir="-1"]').disabled = rail.scrollLeft < 8; wrap.querySelector('[data-dir="1"]').disabled = rail.scrollLeft + rail.clientWidth >= rail.scrollWidth - 8; };
      wrap.addEventListener('click', (e) => { const b = e.target.closest('[data-dir]'); if (b) rail.scrollBy({ left: Number(b.dataset.dir) * rail.clientWidth * 0.84 }); });
      rail.addEventListener('scroll', upd, { passive: true }); setTimeout(upd, 300); upd();
    }
    if (scr && !scr.querySelector(':scope > .df')) { scr.insertAdjacentHTML('beforeend', FOOTER()); const nl = scr.querySelector('[data-nl]'); if (nl) nl.addEventListener('submit', (e) => { e.preventDefault(); const i = nl.querySelector('input'); i.value = ''; i.placeholder = 'Listo, te escribiremos pronto'; }); }
  };
}
/* Buscador de la cabecera, al estilo de los marketplaces grandes (Mercado Libre, Amazon):
   alcance por nicho a la izquierda, campo amplio y botón de lupa pegado a la derecha.
   Al enfocar muestra recientes, populares y nichos; al escribir, productos con su precio. */
const POPULAR = ['compresor', 'termostato', 'contactor', 'capacitor', 'R134A', 'breaker'];
const NAMES = { ref: 'Refrigeración', aut: 'Automotriz', fer: 'Ferretería', far: 'Farmacias', res: 'Restaurantes', mot: 'Motos', ind: 'Industrial', sol: 'Paneles Solares', gps: 'GPS Trackers', sup: 'Supermercados', tlc: 'Telecomunicaciones' };
const fold = (t) => String(t).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
function mark(text, q) {
  const f = fold(text), i = q ? f.indexOf(fold(q)) : -1;
  return i < 0 ? esc(text) : esc(text.slice(0, i)) + '<mark>' + esc(text.slice(i, i + q.length)) + '</mark>' + esc(text.slice(i + q.length));
}
function initSearch(form) {
  const input = form.q, scope = form.n, box = form.querySelector('[data-dh-sug]'), clear = form.querySelector('[data-dh-clear]');
  let timer, seq = 0, act = -1;
  const go = (q, n) => {
    q = (q || '').trim(); close();
    if (q) prefs.pushRecent(q);
    location.hash = q ? '#/buscar?q=' + encodeURIComponent(q) + (n ? '&n=' + n : '') : n ? '#/n/' + n : '#/buscar';
    input.blur();
  };
  const opts = () => [...box.querySelectorAll('[role="option"]')];
  const setAct = (i) => { const o = opts(); act = o.length ? (i + o.length) % o.length : -1; o.forEach((x, k) => x.setAttribute('aria-selected', String(k === act))); if (act >= 0) { input.setAttribute('aria-activedescendant', o[act].id); o[act].scrollIntoView({ block: 'nearest' }); } else input.removeAttribute('aria-activedescendant'); };
  const open = (html) => { box.innerHTML = html; box.hidden = false; input.setAttribute('aria-expanded', 'true'); act = -1; input.removeAttribute('aria-activedescendant'); };
  function close() { box.hidden = true; input.setAttribute('aria-expanded', 'false'); input.removeAttribute('aria-activedescendant'); }
  const opt = (i, attrs, inner, cls = '') => `<a class="dh__opt${cls}" id="dh-o${i}" role="option" aria-selected="false" ${attrs}>${inner}</a>`;
  function idle() {
    let i = 0;
    const recent = prefs.recent().slice(0, 5);
    const n = scope.value;
    open((recent.length ? `<p class="dh__sughead">Búsquedas recientes</p>${recent.map((r) => opt(i++, `href="#/buscar?q=${encodeURIComponent(r)}" data-q="${esc(r)}"`, `<svg class="ico ico--xs" aria-hidden="true"><use href="#i-clock"/></svg><span>${esc(r)}</span>`)).join('')}` : '') +
      `<p class="dh__sughead">Lo más buscado</p><div class="dh__chips">${POPULAR.map((t) => opt(i++, `href="#/buscar?q=${encodeURIComponent(t)}" data-q="${t}"`, esc(t), ' dh__chip')).join('')}</div>` +
      `<p class="dh__sughead">${n ? 'Entrar al nicho' : 'Explora por nicho'}</p><div class="dh__niches">${(n ? [n] : ['ref', 'aut', 'fer', 'far', 'ind', 'sol']).map((k) => opt(i++, `href="#/n/${k}"`, `<img src="assets/img/nichos/${k}.webp" width="40" height="40" alt=""><span>${NAMES[k]}</span>`, ' dh__niche')).join('')}</div>`);
  }
  async function suggest() {
    const q = input.value.trim(), n = scope.value, my = ++seq;
    clear.hidden = !q;
    if (!q) { idle(); return; }
    const res = await api.search({ q, niche: n || undefined, cursor: 0 });
    if (my !== seq) return;
    let i = 0;
    const niches = Object.entries(NAMES).filter(([, v]) => fold(v).includes(fold(q))).slice(0, 2);
    open(opt(i++, `href="#/buscar?q=${encodeURIComponent(q)}${n ? '&n=' + n : ''}" data-q="${esc(q)}"`, `<svg class="ico ico--sm" aria-hidden="true"><use href="#i-search"/></svg><span>Buscar «<b>${esc(q)}</b>»${n ? ` en ${NAMES[n]}` : ''}</span><small>${res.total ? res.total.toLocaleString('es-VE') + (res.total === 1 ? ' resultado' : ' resultados') : 'Sin resultados exactos'}</small>`, ' dh__all') +
      niches.map(([k, v]) => opt(i++, `href="#/n/${k}"`, `<img src="assets/img/nichos/${k}.webp" width="32" height="32" alt=""><span>Nicho <b>${mark(v, q)}</b></span>`, ' dh__nrow')).join('') +
      (res.items.length ? `<p class="dh__sughead">Productos</p>` + res.items.slice(0, 6).map((p) => opt(i++, `href="#/p/${esc(p.id)}" data-pick="${esc(q)}"`, `<span class="dh__thumb">${p.images && p.images[0] ? img(p.images[0], '', '', 80) : ''}</span><span class="dh__pname">${mark(p.name, q)}</span><span class="dh__price">${priceLabel(p)}</span>`, ' dh__prod')).join('') : ''));
  }
  input.addEventListener('focus', () => { clearTimeout(timer); suggest(); });
  form.addEventListener('input', (e) => { if (e.target === scope) return; clearTimeout(timer); clear.hidden = !input.value.trim(); if (document.activeElement === input) timer = setTimeout(suggest, 140); });
  scope.addEventListener('change', () => { if (document.activeElement === input || !box.hidden) suggest(); });
  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { if (box.hidden) suggest(); e.preventDefault(); setAct(act + (e.key === 'ArrowDown' ? 1 : -1)); }
    else if (e.key === 'Escape') { if (!box.hidden) { e.preventDefault(); close(); } }
    else if (e.key === 'Enter' && act >= 0) { e.preventDefault(); opts()[act].click(); }
  });
  box.addEventListener('mousedown', (e) => e.preventDefault());   // no perder el foco al elegir
  box.addEventListener('click', (e) => {
    const o = e.target.closest('[role="option"]'); if (!o) return;
    if (o.dataset.q !== undefined) { e.preventDefault(); input.value = o.dataset.q; go(o.dataset.q, scope.value); return; }
    if (o.dataset.pick) prefs.pushRecent(o.dataset.pick);
    close(); input.blur();
  });
  clear.addEventListener('click', () => { input.value = ''; clear.hidden = true; input.focus(); suggest(); });
  form.addEventListener('submit', (e) => { e.preventDefault(); go(input.value, scope.value); });
  form.addEventListener('focusout', (e) => { if (!form.contains(e.relatedTarget)) setTimeout(() => { if (!form.contains(document.activeElement)) close(); }, 0); });
  document.addEventListener('pointerdown', (e) => { if (!form.contains(e.target)) close(); });
}
export { esc };
