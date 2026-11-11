// Estado en memoria del prototipo. localStorage solo guarda preferencias del panel (tema, reducir movimiento, modo).
import { carritoInicial, producto, precioDe, tiendaDe, direcciones, pagosIni, sesionesIni, reclamosIni, devolucionesIni, avisosCuenta } from './data.js';
import { round2 } from './format.js';
import { PUNTOS_INI, historialPuntos, avanceIni, preguntasIni } from './data2.js';

const PREF_KEY = 'vx-proto-prefs';
const listeners = new Set();

const fresh = () => ({
  mode: 'comprador',        // comprador | tecnico | tienda | empresa
  consent: null,            // null | 'todo' | 'necesario' | {analisis, publicidad}
  sesion: false,            // sesión de demo iniciada
  cart: carritoInicial.map((l) => ({ ...l })),
  orders: [],               // pedidos creados en la demo
  flow: { demoPago: 'aprobado', direccion: 'casa', metodo: 'debito', banco: 'banesco', retiro: {}, filtros: { orden: 'relevantes', marcas: [], nuevo: false, soloDisp: false, min: '', max: '' } }, // paso actual de los flujos
  sonidoAvisos: true,
  // Cuenta y postventa (Fase 2): todo editable en la demo y se reinicia con «Reiniciar datos»
  dirs: direcciones.map((d) => ({ ...d })),
  pagos: pagosIni.map((x) => ({ ...x })),
  sesiones: sesionesIni.map((x) => ({ ...x })),
  reclamos: reclamosIni.map((x) => ({ ...x, mensajes: x.mensajes ? x.mensajes.map((m) => ({ ...m })) : undefined })),
  devoluciones: devolucionesIni.map((x) => ({ ...x })),
  avisosCuenta: avisosCuenta.map((x) => ({ ...x })),
  dosPasos: false,          // verificación en dos pasos activa
  empresaRegistrada: false, // «Registrar mi empresa» completado
  calificaciones: {},       // pedido → { nota, texto }
  // Servicios y Academia (Fase 3)
  ubicacion: null,          // auxilio vial: null | 'lista' | 'error' (la ubicación solo se pide al activar el interruptor)
  academia: { puntos: PUNTOS_INI, historial: historialPuntos.map((h) => ({ ...h })), avance: JSON.parse(JSON.stringify(avanceIni)), inscritos: ['inv', 'gas', 'split'],
    eventos: { solar: false, tableros: true }, offline: {}, preguntasHoy: 2 },
  preguntas: preguntasIni.map((q) => ({ ...q, respuestas: q.respuestas.map((r) => ({ ...r })) })),
});

export const state = fresh();

export function set(patch) { Object.assign(state, patch); emit(); }
export function subscribe(fn) { listeners.add(fn); return () => listeners.delete(fn); }
function emit() { listeners.forEach((fn) => fn(state)); }

/** Reinicia los datos de la demo (no toca las preferencias del panel). */
export function reset() {
  const keepMode = state.mode;
  Object.assign(state, fresh(), { mode: keepMode });
  emit();
}

// ── Carrito ─────────────────────────────────────────────────────────────────
// Una línea = { id, qty, oferta? }. `oferta` es la tienda alternativa elegida en M2.10.
export const lineKey = (l) => l.id + (l.oferta ? '@' + l.oferta : '');
export const cartCount = () => state.cart.length;
export const cartUnits = () => state.cart.reduce((n, l) => n + l.qty, 0);
export const cartLines = () => state.cart.map((l) => ({ ...l, key: lineKey(l), p: producto(l.id), t: tiendaDe(l.id, l.oferta), precio: precioDe(l.id, l.oferta) }));
export const cartSubtotal = () => round2(state.cart.reduce((s, l) => s + precioDe(l.id, l.oferta) * l.qty, 0));

export function addToCart(id, qty = 1, oferta) {
  const line = state.cart.find((l) => l.id === id && l.oferta === oferta);
  if (line) { line.qty += qty; delete line.cambioPrecio; } else state.cart.push(oferta ? { id, qty, oferta } : { id, qty });
  emit();
}
export function setQty(key, qty) {
  const line = state.cart.find((l) => lineKey(l) === key);
  if (!line) return;
  if (qty <= 0) state.cart = state.cart.filter((l) => lineKey(l) !== key); else line.qty = qty;
  emit();
}
/** Quita una línea y devuelve una función que la restaura en su sitio (para «Deshacer»). */
export function removeLine(key) {
  const i = state.cart.findIndex((l) => lineKey(l) === key);
  if (i < 0) return () => {};
  const [line] = state.cart.splice(i, 1);
  emit();
  return () => { state.cart.splice(Math.min(i, state.cart.length), 0, line); emit(); };
}

// ── Preferencias del panel ──────────────────────────────────────────────────
export function loadPrefs() {
  try { return JSON.parse(localStorage.getItem(PREF_KEY)) || {}; } catch { return {}; }
}
export function savePrefs(patch) {
  try { localStorage.setItem(PREF_KEY, JSON.stringify({ ...loadPrefs(), ...patch })); } catch { /* sin almacenamiento: no pasa nada */ }
}
