// Formato es-VE: punto para miles, coma para decimales, fechas dd/mm/aaaa.
// Ningún importe se escribe a mano en las pantallas: todo pasa por estas funciones.
import { TASA } from './data.js';

const nf = (min, max) => new Intl.NumberFormat('es-VE', { minimumFractionDigits: min, maximumFractionDigits: max, useGrouping: 'always' });
const nf2 = nf(2, 2);
const nf0 = nf(0, 0);

/** Redondeo a centavos sin errores de coma flotante. */
export const round2 = (n) => Math.round((n + Number.EPSILON) * 100) / 100;

/** $ 1.284,50 */
export const money = (usd) => `$ ${nf2.format(usd)}`;
/** Sin símbolo: 1.284,50 */
export const num = (n, decimals = 2) => (decimals === 0 ? nf0 : nf2).format(n);
/** Bs 14.352,10 (equivalente a la tasa vigente). */
export const bs = (usd, { decimals = 2, tasa = TASA } = {}) =>
  `Bs ${(decimals === 0 ? nf0 : nf2).format(usd * tasa)}`;
/** ≈ Bs 14.352,10 · tasa del 15/10 */
export const bsRef = (usd, tasaDia = '15/10', opts) => `≈ ${bs(usd, opts)} · tasa del ${tasaDia}`;

/** Porcentaje del importe, redondeado a centavos: pct(568.8, 3) → 17.06 */
export const pct = (base, p) => round2((base * p) / 100);

/** dd/mm/aaaa */
export const date = (d) => {
  const x = d instanceof Date ? d : new Date(d);
  const p = (n) => String(n).padStart(2, '0');
  return `${p(x.getDate())}/${p(x.getMonth() + 1)}/${x.getFullYear()}`;
};

/** 1 artículo / 3 artículos */
export const plural = (n, uno, varios) => `${n} ${n === 1 ? uno : varios}`;

/** 3:42 — o 02:14:36 si pasa de una hora */
export const clock = (ms, { pad = false } = {}) => {
  const s = Math.max(0, Math.ceil(ms / 1000));
  const h = Math.floor(s / 3600), m = Math.floor((s % 3600) / 60), r = s % 60;
  const two = (n) => String(n).padStart(2, '0');
  if (h) return `${two(h)}:${two(m)}:${two(r)}`;
  return `${pad ? two(m) : m}:${two(r)}`;
};

/** Escapa texto para meterlo en HTML. */
export const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
