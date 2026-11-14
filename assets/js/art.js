// Imagen de producto limpia: ilustraciones propias en SVG, sin fotos ni librerías.
// Cada pieza se dibuja en 200 × 200 con cuatro capas de color que salen de tokens (ver «art» en piel.css):
//   .art-b cuerpo · .art-s sombra del cuerpo · .art-d detalle oscuro · .art-a acento · .art-g sombra de apoyo.
// Es el relleno de las fotos reales: cuando haya fotografía de estudio, solo cambia productArt().
import { producto } from './data.js';

const G = (rx = 62) => `<ellipse class="art-g" cx="100" cy="158" rx="${rx}" ry="7"/>`;

/** Piezas dibujadas. Cada una devuelve el contenido interno del SVG. */
const DIBUJOS = {
  // Unidad interior de aire split (pared)
  split: () => `<ellipse class="art-g" cx="100" cy="124" rx="66" ry="4.5"/>
    <rect class="art-b" x="24" y="54" width="152" height="62" rx="16"/>
    <path class="art-s" d="M24 98h152v2a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16z"/>
    <rect class="art-d" x="38" y="96" width="124" height="9" rx="4.5"/>
    <path class="art-s" d="M44 110h112l-6 12H50z"/>
    <rect class="art-d" x="40" y="72" width="34" height="5" rx="2.5"/>
    <circle class="art-a" cx="152" cy="76" r="3.4"/>`,
  // Control remoto
  remote: () => `${G(34)}
    <rect class="art-b" x="74" y="30" width="52" height="128" rx="18"/>
    <rect class="art-d" x="84" y="42" width="32" height="24" rx="6"/>
    <circle class="art-a" cx="100" cy="82" r="7.5"/>
    <circle class="art-s" cx="86" cy="104" r="6.5"/><circle class="art-s" cx="114" cy="104" r="6.5"/>
    <circle class="art-s" cx="86" cy="124" r="6.5"/><circle class="art-s" cx="114" cy="124" r="6.5"/>
    <rect class="art-s" x="84" y="138" width="32" height="9" rx="4.5"/>`,
  // Capacitor de marcha
  capacitor: () => `${G(46)}
    <rect class="art-d" x="80" y="30" width="10" height="20" rx="3"/><rect class="art-d" x="110" y="30" width="10" height="20" rx="3"/>
    <rect class="art-b" x="66" y="46" width="68" height="108" rx="14"/>
    <path class="art-s" d="M118 46h2a14 14 0 0 1 14 14v80a14 14 0 0 1-14 14h-2a14 14 0 0 0 14-14V60a14 14 0 0 0-14-14z"/>
    <rect class="art-d" x="66" y="78" width="68" height="40"/>
    <rect class="art-a" x="78" y="90" width="30" height="5" rx="2.5"/><rect class="art-s" x="78" y="101" width="44" height="4" rx="2"/>`,
  // Compresor (cápsula con tubos). `h` cambia la altura según el tipo.
  compressor: (v = {}) => { const h = v.h || 104, top = 154 - h; return `${G(54)}
    <rect class="art-d" x="52" y="150" width="96" height="9" rx="4.5"/>
    <rect class="art-d" x="80" y="${top - 22}" width="9" height="30" rx="3"/><rect class="art-d" x="112" y="${top - 14}" width="9" height="22" rx="3"/>
    <rect class="art-b" x="58" y="${top}" width="84" height="${h}" rx="40"/>
    <path class="art-s" d="M112 ${top + 1}a40 40 0 0 1 30 39v${h - 80}a40 40 0 0 1-40 40a40 40 0 0 0 28-38V${top + 40}a40 40 0 0 0-18-41z"/>
    ${v.band ? `<rect class="art-a" x="58" y="${top + h * 0.46}" width="84" height="7"/>` : ''}
    <circle class="art-d" cx="100" cy="${top + h * 0.7}" r="9"/>`; },
  // Tarjeta electrónica
  board: () => `${G(66)}
    <rect class="art-b" x="32" y="52" width="136" height="96" rx="12"/>
    <rect class="art-s" x="32" y="136" width="136" height="12" rx="6"/>
    <rect class="art-d" x="50" y="68" width="38" height="38" rx="5"/>
    <path class="art-line" d="M58 68v-6M68 68v-6M78 68v-6M58 106v6M68 106v6M78 106v6" fill="none" stroke-width="3" stroke-linecap="round"/>
    <circle class="art-s" cx="108" cy="78" r="9"/><circle class="art-s" cx="132" cy="78" r="9"/>
    <rect class="art-d" x="132" y="96" width="26" height="30" rx="4"/>
    <circle class="art-a" cx="104" cy="112" r="3.4"/>
    <path class="art-line" d="M88 90h12M108 120h18M50 122h60" fill="none" stroke-width="2.5" stroke-linecap="round"/>`,
  // Taladro percutor inalámbrico
  drill: () => `${G(60)}
    <rect class="art-d" x="130" y="70" width="22" height="22" rx="5"/><rect class="art-s" x="150" y="78" width="30" height="7" rx="3.5"/>
    <rect class="art-b" x="40" y="58" width="96" height="42" rx="16"/>
    <rect class="art-a" x="52" y="70" width="44" height="7" rx="3.5"/>
    <path class="art-b" d="M84 92h34l6 52a8 8 0 0 1-8 9h-18a8 8 0 0 1-8-9z"/>
    <path class="art-s" d="M104 92h14l6 52a8 8 0 0 1-8 9h-10z"/>
    <rect class="art-d" x="74" y="146" width="56" height="16" rx="6"/>
    <rect class="art-d" x="92" y="100" width="12" height="18" rx="5"/>`,
  // Juego de llaves (tres llaves en abanico)
  wrenches: () => { const llave = (a, w) => `<g transform="translate(100 156) rotate(${a})"><rect class="art-b" x="-8" y="-104" width="16" height="104" rx="8"/><circle class="art-b" cx="0" cy="-108" r="${w}"/><circle class="art-d" cx="0" cy="-108" r="${w * 0.44}"/></g>`; return `${G(50)}${llave(-24, 19)}${llave(24, 19)}${llave(0, 21)}`; },
  // Caja genérica
  caja: () => `${G(52)}
    <path class="art-b" d="M100 40l58 28v62l-58 28-58-28V68z"/>
    <path class="art-s" d="M100 96l58-28v62l-58 28z"/>
    <path class="art-d" d="M100 40l58 28-58 28-58-28z" opacity=".35"/>
    <rect class="art-a" x="92" y="104" width="16" height="6" rx="3" transform="rotate(-24 100 107)"/>`,
};

/** Qué dibujo corresponde a un producto: por id, por subtipo y por categoría. */
export function tipoDe(p) {
  if (!p) return { k: 'caja' };
  const cat = String(p.categoria || '');
  if (/Aires split/.test(cat)) return { k: 'split' };
  if (p.id === 'ctrl' || /Controles/.test(cat)) return { k: 'remote' };
  if (p.id === 'cap') return { k: 'capacitor' };
  if (/Compresores/.test(cat)) return { k: 'compressor', v: { rotativo: {}, scroll: { h: 118 }, inverter: { band: true }, nevera: { h: 88 } }[p.sub] || {} };
  if (/Tarjetas/.test(cat)) return { k: 'board' };
  if (p.id === 'tal') return { k: 'drill' };
  if (p.id === 'llav') return { k: 'wrenches' };
  return { k: 'caja' };
}

/**
 * SVG de producto. `vista` (0 a 4) cambia el encuadre en la galería: frente, detalle, espejo, giro y plano abierto.
 * Es decorativo (aria-hidden): el nombre y el precio ya están en el texto de la pantalla.
 */
export function productArt(p, { vista = 0, cls = '' } = {}) {
  const { k, v } = tipoDe(typeof p === 'string' ? producto(p) : p);
  const T = ['', 'translate(100 100) scale(1.45) translate(-100 -112)', 'translate(200 0) scale(-1 1)', 'rotate(-7 100 100)', 'translate(100 100) scale(.78) translate(-100 -100)'][vista] || '';
  return `<svg class="art ${cls}" viewBox="16 22 168 146" aria-hidden="true" focusable="false"><g${T ? ` transform="${T}"` : ''}>${DIBUJOS[k](v)}</g></svg>`;
}
