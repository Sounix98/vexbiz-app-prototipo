// Piezas compartidas de la web: tarjeta de producto, migas, insignias, cantidad, estrellas y avisos.
// Todo sale de tokens (ver web/css/web.css). Los íconos son los de la app (assets/js/ui.js).
import { icon } from '../../assets/js/ui.js';
import { money, bsRef, esc, num } from '../../assets/js/format.js';
import { productArt } from '../../assets/js/art.js';
import { tienda, tiendasDe, desdeDe } from './dataweb.js';

export { icon, money, bsRef, esc, num, productArt };
export const TASA_DIA = '15/10';
/** Sesión de la demo (Aníbal). Las páginas de cuenta y el pago la exigen; «Cerrar sesión» la apaga. */
export const sesion = { on: false };

/** Disponibilidad en tres niveles: texto + punto, nunca solo color. */
export function stockInfo(n) {
  if (n <= 0) return { t: 'Agotado', k: 'out' };
  if (n <= 3) return { t: `Últimas ${n} ${n === 1 ? 'unidad' : 'unidades'}`, k: 'low' };
  return { t: 'Disponible', k: 'ok' };
}
export const stockDot = (n, extra = '') => { const s = stockInfo(n); return `<span class="w-stock w-stock--${s.k}"><i aria-hidden="true"></i>${s.t}${extra}</span>`; };
export const stars = (r) => (r == null ? '' : `<span class="w-stars">${icon('star', 16)}<span>${num(r, 1)}</span></span>`);
export const pctOff = (p) => (p.antes ? Math.round((1 - p.precio / p.antes) * 100) : 0);

/** Migas de pan: [['Inicio', '#/'], ['Categorías', '#/nichos'], ['Climatización']] */
export const crumbs = (list) => `<nav class="w-crumbs" aria-label="Estás en"><ol>${list.map(([t, href], i) => `<li>${href && i < list.length - 1 ? `<a href="${href}">${esc(t)}</a>` : `<span${i === list.length - 1 ? ' aria-current="page"' : ''}>${esc(t)}</span>`}</li>`).join('')}</ol></nav>`;

/** Insignia de estado o etiqueta. kind: info | ok | warn | bad | brand | neutral */
export const badge = (text, kind = 'neutral', ic = '') => `<span class="w-badge w-badge--${kind}">${ic ? icon(ic, 14) : ''}${esc(text)}</span>`;

/** Tarjeta de producto del Figma web: imagen, marca, nombre, ref., precio, bolívares, disponibilidad, tienda y valoración. */
export function productCard(p, { bs = true, i } = {}) {
  const n = tiendasDe(p), t = tienda(p.tienda), varias = n > 1;
  const precio = varias ? `Desde ${money(desdeDe(p))}` : money(p.precio);
  return `<article class="w-card"${i != null ? ` style="--i:${i}"` : ''}>
    <a class="w-card__link" href="#/producto?id=${p.id}" aria-label="${esc(p.nombre)}, ${precio}">
      <span class="w-card__img">${productArt(p)}</span>
      <span class="w-card__body">
        <span class="w-card__brand">${esc(p.marca || 'Genérico')}</span>
        <span class="w-card__name">${esc(p.nombre)}</span>
        <span class="w-card__ref">Ref. ${esc(p.ref || p.id.toUpperCase())}</span>
        <span class="w-card__price">${precio}</span>
        ${bs ? `<span class="w-card__bs">${bsRef(varias ? desdeDe(p) : p.precio, TASA_DIA, { decimals: 0 }).replace('≈ ', '≈ ')}</span>` : ''}
        ${stockDot(p.stock)}
        <span class="w-card__foot"><b>${varias ? `${n} tiendas` : esc(t ? t.nombre : '')}</b>${stars(t && t.rating)}</span>
      </span>
    </a>
    <button class="w-card__add" type="button" data-add="${p.id}" aria-label="Añadir al carrito: ${esc(p.nombre)}"${p.stock <= 0 ? ' disabled' : ''}>${icon('cart', 20)}</button>
  </article>`;
}

/** Selector de cantidad: − n + */
export const qty = (key, n, max = 99) => `<span class="w-qty" role="group" aria-label="Cantidad"><button type="button" data-dec="${key}" aria-label="Quitar una unidad"${n <= 1 ? ' disabled' : ''}>${icon('minus', 18)}</button><output aria-live="polite">${n}</output><button type="button" data-inc="${key}" aria-label="Añadir una unidad"${n >= max ? ' disabled' : ''}>${icon('add', 18)}</button></span>`;

/** Encabezado de sección: título, etiqueta opcional y acción a la derecha. */
export const secHead = (title, { tag = '', action = '', sub = '' } = {}) => `<div class="w-sechead"><div><h2>${esc(title)}${tag}</h2>${sub ? `<p>${esc(sub)}</p>` : ''}</div>${action}</div>`;

/** Aviso en franja (info, warn, bad, ok). */
export const notice = (kind, ic, html, extra = '') => `<div class="w-notice w-notice--${kind}" role="${kind === 'bad' ? 'alert' : 'status'}">${icon(ic, 20)}<div class="w-notice__t">${html}</div>${extra}</div>`;

/** Aviso breve abajo (patrón 11 del sistema de movimiento). */
let tId = 0;
export function toast(text) {
  const el = document.getElementById('w-toast'); if (!el) return;
  el.textContent = text; el.classList.remove('is-open'); void el.offsetWidth; el.classList.add('is-open');
  clearTimeout(tId); tId = setTimeout(() => el.classList.remove('is-open'), 3200);
}

/** Pulso de una pieza (carrito al añadir, cifra que cambia). */
export function play(el, cls) { if (!el) return; el.classList.remove(cls); void el.offsetWidth; el.classList.add(cls); }
export const reduce = () => matchMedia('(prefers-reduced-motion: reduce)').matches;
