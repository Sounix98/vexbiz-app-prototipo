// Preferencias de accesibilidad de la app («Cómo se ve VexBiz», M6.23) y del panel: tamaño del texto,
// más contraste y menos movimiento. Se guardan en localStorage (con try/catch) y se aplican sobre TODA la app.
import { loadPrefs, savePrefs } from './store.js';

const root = document.documentElement;
const sys = (q) => { try { return matchMedia(q).matches; } catch { return false; } };

export const prefs = { scale: 100, contrast: false, reduce: false };

/** Tamaño del texto en %. Escala el contenido de pantallas, hojas, diálogos y barras (CSS `zoom`, ver prototipo.css). */
export function setScale(pct) {
  prefs.scale = Math.min(150, Math.max(100, Math.round(pct)));
  root.setAttribute('data-text-scale', String(prefs.scale));
  root.style.setProperty('--vx-ts', String(prefs.scale / 100));
  savePrefs({ scale: prefs.scale });
}
/** Más contraste: bordes y textos secundarios suben a los roles más fuertes del mismo sistema. */
export function setContrast(on) {
  prefs.contrast = !!on;
  on ? root.setAttribute('data-contrast', 'more') : root.removeAttribute('data-contrast');
  savePrefs({ contrast: prefs.contrast });
}
/** Menos movimiento: el mismo comportamiento que la preferencia del sistema (ver motion.css). */
export function setReduce(on) {
  prefs.reduce = !!on;
  root.toggleAttribute('data-reduce-motion', prefs.reduce);
  savePrefs({ reduce: prefs.reduce });
  const sw = document.getElementById('swReduce');
  if (sw) { sw.checked = prefs.reduce; sw.nextElementSibling?.classList.toggle('md-switch-track--on', prefs.reduce); }
}
/** Estado inicial: lo guardado en este teléfono; si no hay nada, los ajustes de accesibilidad del sistema. */
export function initPrefs() {
  const p = loadPrefs();
  setScale(p.scale ?? 100);
  setContrast(p.contrast ?? sys('(prefers-contrast: more)'));
  setReduce(p.reduce ?? false);
  if (p.reduce === undefined) prefs.reduce = sys('(prefers-reduced-motion: reduce)'); // el interruptor refleja el sistema
  const sw = document.getElementById('swReduce');
  if (sw) { sw.checked = prefs.reduce; sw.nextElementSibling?.classList.toggle('md-switch-track--on', prefs.reduce); }
  return p;
}
export function resetPrefs() { setScale(100); setContrast(false); setReduce(false); }
