// Datos de la web. Parte de los datos de la app (assets/js/data.js) y suma lo que el Figma web muestra
// y la app no tiene: más productos del catálogo, tiendas del directorio, categorías con sus conteos y
// la ficha técnica. Lo que no viene del Figma lleva la marca  // INVENTADO.
import { productos, producto, tiendas, tienda, directorio as dirApp, nichos, ofertas } from '../../assets/js/data.js';

/** Productos que solo aparecen en el Figma web (catálogo, ficha, carrito y portada). */
const extra = [
  { id: 'mot18', nombre: 'Motor ventilador evaporador 18 W', marca: 'Welling', ref: 'YDK-18-4', categoria: 'Climatización › Repuestos', tienda: 'rs', precio: 32.0, stock: 0, art: 'motor' },
  { id: 'txv', nombre: 'Válvula de expansión termostática TX2', marca: 'Danfoss', ref: '068Z3206', categoria: 'Climatización › Repuestos', tienda: 'cr', precio: 48.0, stock: 10, art: 'valve' },
  { id: 'kit3', nombre: 'Kit de instalación split 3 m con tubería', marca: 'Samsung', ref: 'KIT-3M-12K', categoria: 'Climatización › Herramientas de instalación', tienda: 'ha', precio: 48.0, stock: 15, art: 'coil' },
  { id: 'sop12', nombre: 'Soporte de pared para condensadora 12K', marca: 'Universal', ref: 'SOP-12K', categoria: 'Climatización › Herramientas de instalación', tienda: 'et', precio: 22.0, stock: 30, art: 'bracket' },
  { id: 'gas', nombre: 'Gas refrigerante R410A 11,3 kg', marca: 'Genetron', ref: 'R410A-11', categoria: 'Climatización › Gas refrigerante', tienda: 'rf', precio: 119.0, stock: 6, art: 'gas' },
  { id: 'ter', nombre: 'Termostato digital para nevera', marca: 'Supco', ref: 'ST-200', categoria: 'Refrigeración comercial › Controles', tienda: 'ft', precio: 22.0, stock: 9, art: 'remote' },
  { id: 'wv09', nombre: 'Aire de ventana 9.000 BTU 110V', marca: 'Samsung', ref: 'AW09', categoria: 'Climatización › Aires de ventana', tienda: 'cy', precio: 279.0, stock: 7, art: 'windowac' },
  { id: 'sa24', nombre: 'Aire split inverter 24.000 BTU 220V', marca: 'Samsung', ref: 'AR24TVHZ', categoria: 'Climatización › Aires split', tienda: 'ft', precio: 829.0, stock: 4 },
  { id: 'wf18', nombre: 'Aire split WindFree 18.000 BTU 220V', marca: 'Samsung', ref: 'AR18WF', categoria: 'Climatización › Aires split', tienda: 'cy', precio: 612.0, stock: 5, tiendasN: 3 },
  { id: 'pt12', nombre: 'Aire portátil 12.000 BTU con control', marca: 'Samsung', ref: 'AP12', categoria: 'Climatización › Aires split', tienda: 'cy', precio: 459.0, stock: 3, art: 'portable' },
  { id: 'brocas', nombre: 'Juego de brocas para concreto 7 piezas', marca: 'Bosch', ref: '2607017035', categoria: 'Herramientas', tienda: 'ha', precio: 18.4, stock: 22, art: 'wrenches' },
  { id: 'buj', nombre: 'Bujía iridium para motor 1.6', marca: 'NGK', ref: 'ILZKR7B11', categoria: 'Automotriz › Encendido', tienda: 're', precio: 11.4, stock: 40, art: 'plug' },
  { id: 'ace', nombre: 'Aceite sintético 5W-30 · 4 litros', marca: 'Mobil', ref: 'M1-5W30', categoria: 'Automotriz › Lubricantes', tienda: 'lc', precio: 42.5, stock: 25, art: 'bottle' },
  { id: 'nev14', nombre: 'Nevera no frost 14 pies plateada', marca: 'LG', ref: 'GT39WPP', categoria: 'Electrodomésticos › Neveras', tienda: 'ft', precio: 649.0, stock: 3, art: 'fridge' },
  { id: 'led', nombre: 'Bombillo LED 12W luz fría · pack x4', marca: 'Philips', ref: 'LED12W-4', categoria: 'Electricidad › Iluminación', tienda: 'eh', precio: 9.8, stock: 60, art: 'bulb' },
  { id: 'cinta', nombre: 'Cinta aislante 3/4" × 20 m', marca: '3M', ref: 'TEMFLEX-1700', categoria: 'Electricidad › Cableado', tienda: 'eh', precio: 3.2, stock: 120, art: 'tape' },
];
/** Tiendas que solo aparecen en el Figma web. */
const tiendasExtra = [
  { id: 'cy', sigla: 'CY', nombre: 'Climatiza Ya', nicho: 'Climatización', ciudad: 'Maracay', rating: 4.8, productos: 64, verificada: true },
  { id: 'lc', sigla: 'LC', nombre: 'Lubricantes del Centro', nicho: 'Automotriz', ciudad: 'Valencia', rating: 4.8, productos: 52 },
  { id: 'sv', sigla: '', nombre: 'SolarVen', nicho: 'Energía solar', ciudad: 'Maracaibo', rating: null, productos: 18 },
  { id: 'fi', sigla: 'FI', nombre: 'Ferre Industrial Los Andes', nicho: 'Ferretería', ciudad: 'Mérida', rating: 4.4, productos: 890 },
  { id: 'tr', sigla: '', nombre: 'Todo Repuestos Oriente', nicho: 'Electrodomésticos', ciudad: 'Puerto La Cruz', rating: 4.5, productos: 76 },
];

// Se suman a los arreglos de la app (mismo módulo): así el carrito, los precios y las tiendas de store.js los conocen.
if (!productos.some((p) => p.id === 'mot18')) { productos.push(...extra.map((p) => ({ condicion: 'Nuevo', ...p }))); tiendas.push(...tiendasExtra); }
export { productos, producto, tiendas, tienda };
/** Directorio de tiendas (02.06), en el orden del Figma. */
export const directorioWeb = [
  { ...dirApp.find((t) => t.id === 'ft'), logo: true, verificada: true },
  { ...dirApp.find((t) => t.id === 'cr'), sigla: 'C', logo: true },
  { ...dirApp.find((t) => t.id === 'rs'), nicho: 'Refrigeración comercial' },
  { ...dirApp.find((t) => t.id === 'eh'), sigla: 'EE', logo: true },
  { ...dirApp.find((t) => t.id === 'vc'), logo: true },
  tiendasExtra[2], { ...tiendasExtra[3], logo: true }, tiendasExtra[4],
];
export { nichos, ofertas };

/** Cuántas tiendas venden un producto (para «Desde $ …» y «N tiendas»). */
export const tiendasDe = (p) => (ofertas[p.id] ? ofertas[p.id].length : p.tiendasN || 1);
export const desdeDe = (p) => (ofertas[p.id] ? Math.min(...ofertas[p.id].filter((o) => o.stock > 0).map((o) => o.precio)) : p.precio);

/** Nicho y categorías (02.03 y 02.02). Los conteos son los del Figma; el filtrado se hace sobre los productos de la demo. */
export const nichoInfo = {
  clima: {
    texto: 'Aires acondicionados, repuestos, gases refrigerantes y accesorios para instalación residencial y comercial.',
    categorias: [['Aires split', 128, /Aires split/], ['Aires de ventana', 42, /Aires de ventana/], ['Repuestos y tarjetas', 96, /Repuestos|Tarjetas|Compresores|Controles/], ['Gas refrigerante', 31, /Gas/], ['Herramientas de instalación', 57, /instalación/]],
    marcas: [['Samsung', 64], ['LG', 51], ['Midea', 38], ['Daikin', 22]],
  },
};
/** Categoría «Compresores» (02.02) con sus subtipos y conteos del Figma. */
export const categoriaComp = {
  id: 'comp', nombre: 'Compresores', nicho: 'clima', padre: 'Repuestos de A/A',
  texto: 'Compresores rotativos y scroll para equipos split y de ventana, con su refrigerante y capacidad.',
  subtipos: [['Rotativos', 86, 'rotativo'], ['Scroll', 24, 'scroll'], ['Reciprocantes', 18, 'recip'], ['Inverter', 41, 'inverter'], ['Para nevera', 57, 'nevera']],
  // El Figma mezcla en esta grilla repuestos que no son compresores (aire, tarjeta, control): se respeta.
  ids: ['aa12', 'comp', 'tarj', 'ctrl', 'cap', 'mot18', 'lg18', 'txv'],
};

/** Ficha técnica (02.05). Solo el aire split de la ficha la tiene completa en el Figma. */
export const fichaTecnica = {
  aa12: {
    titulo: 'Aire acondicionado split inverter 12.000 BTU · 220V · Gas R410A',
    descripcion: 'Equipo split de pared con tecnología inverter que ajusta la velocidad del compresor para mantener la temperatura con menor consumo. Incluye control remoto, modo sueño y filtro antibacterial lavable. Recomendado para espacios de hasta 20 m².',
    specs: [['Capacidad', '12.000 BTU'], ['Voltaje', '220 V / 60 Hz'], ['Refrigerante', 'R410A'], ['Eficiencia (SEER)', '18'], ['Área recomendada', 'Hasta 20 m²'], ['Garantía', '1 año compresor']],
    compatible: ['Kit instalación 3 m', 'Soporte de pared 12K', 'Control universal'],
    relacionados: ['kit3', 'sop12', 'ctrl', 'gas'],
  },
};

/** Portada (01.01): listas del Figma. */
export const portada = {
  ofertas: ['tal', 'aa12', 'ace', 'llav'],
  vendidos: ['buj', 'nev14', 'led', 'cinta'],
  nichosRapidos: [['Soporte técnico', 'wrench', '#/servicios'], ['Climatización', 'sliders', '#/nicho?id=clima'], ['Automotriz', 'car', '#/nichos'], ['Herramientas', 'toolbox', '#/nichos'], ['Electricidad', 'sound', '#/nichos'], ['Plomería', 'wrench', '#/nichos'], ['Electrodomésticos', 'home', '#/nichos']],
  tiendas: ['ft', 'ha', 're', 'eh'],
  marcas: [['BO', 'Bosch', 412], ['SA', 'Samsung', 286], ['LG', 'LG', 198], ['TR', 'Truper', 540], ['NG', 'NGK', 122], ['3M', '3M', 354]],
  // Cifras del Figma (bloque «Por qué comprar en VexBiz»)
  cifras: [['store', '+350', 'tiendas verificadas'], ['box', '+48.000', 'productos publicados'], ['users', '+1.200', 'técnicos certificados'], ['thumb', '98%', 'compras sin reclamos']],
};

/** Sala de espera (03.03): la compra que el Figma usa de ejemplo. */
export const espera = {
  segundos: 3 * 60 + 42,
  lineas: [
    { id: 'aa12', qty: 1, precio: 389.0, tienda: 'Frío Total C.A.', estado: 'ok' },
    { id: 'tarj', qty: 2, precio: 64.0, tienda: 'ClimaRepuestos', estado: 'propone', propuesta: 1 },
    { id: 'cap', qty: 2, precio: 9.5, tienda: 'Frío Total C.A.', estado: 'espera' },
    { id: 'mot18', qty: 1, precio: 32.0, tienda: 'Refrigeración El Sol', estado: 'no' },
  ],
};

/** Envío por tienda en el paso 2 del pago (03.02). */
export const envios = {
  ft: { costo: 8.4, nota: '14 km por carretera · 9 kg · llega en 1–2 días', aprox: true },
  ha: { costo: 0, nota: 'Llega en 1–3 días', gratis: true },
};
export const RETIRO = { ft: 0, ha: 6.5 }; // Figma: «Retirar en Frío Total: sin costo · en Herramientas Andina: envío $ 6,50»
