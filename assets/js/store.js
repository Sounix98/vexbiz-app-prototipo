// Estado en memoria del prototipo. localStorage solo guarda preferencias del panel (tema, reducir movimiento, modo).
import { carritoInicial, producto, tienda } from './data.js';
import { round2 } from './format.js';

const PREF_KEY = 'vx-proto-prefs';
const listeners = new Set();

const fresh = () => ({
  mode: 'comprador',        // comprador | tecnico | tienda | empresa
  consent: null,            // null | 'todo' | 'necesario' | {analisis, publicidad}
  sesion: false,            // sesión de demo iniciada
  cart: carritoInicial.map((l) => ({ ...l })),
  orders: [],               // pedidos creados en la demo
  flow: {},                 // paso actual de los flujos (checkout, pago…)
  sonidoAvisos: true,
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
export const cartCount = () => state.cart.length;
export const cartUnits = () => state.cart.reduce((n, l) => n + l.qty, 0);
export const cartLines = () => state.cart.map((l) => ({ ...l, p: producto(l.id), t: tienda(producto(l.id).tienda) }));
export const cartSubtotal = () => round2(state.cart.reduce((s, l) => s + producto(l.id).precio * l.qty, 0));

export function addToCart(id, qty = 1) {
  const line = state.cart.find((l) => l.id === id);
  if (line) { line.qty += qty; delete line.cambioPrecio; } else state.cart.push({ id, qty });
  emit();
  return state.cart.find((l) => l.id === id);
}
export function setQty(id, qty) {
  const line = state.cart.find((l) => l.id === id);
  if (!line) return;
  if (qty <= 0) state.cart = state.cart.filter((l) => l.id !== id); else line.qty = qty;
  emit();
}

// ── Preferencias del panel ──────────────────────────────────────────────────
export function loadPrefs() {
  try { return JSON.parse(localStorage.getItem(PREF_KEY)) || {}; } catch { return {}; }
}
export function savePrefs(patch) {
  try { localStorage.setItem(PREF_KEY, JSON.stringify({ ...loadPrefs(), ...patch })); } catch { /* sin almacenamiento: no pasa nada */ }
}
