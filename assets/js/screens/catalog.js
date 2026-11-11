// Catálogo de las 138 pantallas de la página App (Apéndice A del contexto).
// Cada fila: [id de ruta, código que se muestra, título, módulo, opciones].
//   opciones.tab    → la pantalla muestra la barra inferior de su modo con esa pestaña activa.
//   opciones.type   → 'sheet' (hoja inferior), 'dialog' (superposición de fundido), 'flow' (pantalla de flujo desde abajo).
//   opciones.alias  → es la misma hoja que otra superposición (se construye una sola vez).
// Sin `tab` la pantalla no lleva barra inferior (como en Figma).

const M = {
  M0: ['Transversales', null, 0], M1: ['Acceso', null, 1], M2: ['Descubrir', 'comprador', 1], M3: ['Compra', 'comprador', 1],
  M4: ['Servicios', 'comprador', 3], M5: ['Academia', 'comprador', 3], M6: ['Cuenta', 'comprador', 2],
  M7: ['Modo Tienda', 'tienda', 5], M8: ['Modo Técnico', 'tecnico', 4], M9: ['Modo Empresa de servicio', 'empresa', 6],
  OV: ['Superposiciones', null, 0],
};
export const MODULES = Object.entries(M).map(([id, [name, mode, phase]]) => ({ id, name, mode, phase }));

// prettier-ignore
const ROWS = [
  // M0 · Transversales
  ['O.MOD', 'M0.03', 'Cambiar de modo (hoja)', 'M0', { alias: 'O.MOD' }],
  ['O.AVI', 'M0.04', 'Avisos en vivo (hoja)', 'M0', { alias: 'O.AVI' }],
  ['O.CAR', 'M0.05', 'Añadido al carrito (hoja)', 'M0', { alias: 'O.CAR' }],
  ['M0.06', 'M0.06', 'Estados comunes', 'M0', {}],
  ['O.CON', 'M0.07', 'Consentimiento de privacidad', 'M0', { alias: 'O.CON' }],
  // M1 · Acceso
  ['M1.02', 'M1.02', 'Entrar', 'M1', {}],
  ['M1.05', 'M1.05', 'Crear cuenta', 'M1', { type: 'flow' }],
  ['M1.01', 'M1.01', 'Arranque', 'M1', { start: true }],
  ['M1.03', 'M1.03', 'Segundo factor', 'M1', {}],
  ['M1.04', 'M1.04', 'Correo sin confirmar', 'M1', {}],
  ['M1.06', 'M1.06', 'Revisa tu correo', 'M1', {}],
  ['M1.07', 'M1.07', 'Unirse al país', 'M1', {}],
  ['M1.08', 'M1.08', 'Recuperar contraseña', 'M1', {}],
  ['M1.09', 'M1.09', 'Contraseña nueva', 'M1', {}],
  ['M1.10', 'M1.10', 'Boletín', 'M1', {}],
  // M2 · Descubrir
  ['M2.01', 'M2.01', 'Inicio', 'M2', { tab: 'inicio', start: true }],
  ['M2.03', 'M2.03', 'Resultados', 'M2', { tab: 'explorar' }],
  ['M2.08', 'M2.08', 'Ficha de producto', 'M2', {}],
  ['M2.02', 'M2.02', 'Buscar', 'M2', {}],
  ['O.FIL', 'M2.04', 'Filtros y orden (hoja)', 'M2', { alias: 'O.FIL' }],
  ['M2.05', 'M2.05', 'Nichos', 'M2', { tab: 'explorar' }],
  ['M2.06', 'M2.06', 'Nicho', 'M2', { tab: 'explorar' }],
  ['M2.07', 'M2.07', 'Categoría', 'M2', { tab: 'explorar' }],
  ['M2.09', 'M2.09', 'Galería', 'M2', {}],
  ['O.OTR', 'M2.10', 'Otras tiendas que lo venden (hoja)', 'M2', { alias: 'O.OTR' }],
  ['M2.11', 'M2.11', 'Tiendas', 'M2', { tab: 'explorar' }],
  ['M2.12', 'M2.12', 'Tienda', 'M2', { tab: 'explorar' }],
  // M3 · Compra
  ['M3.01', 'M3.01', 'Carrito', 'M3', { tab: 'carrito' }],
  ['M3.02', 'M3.02', 'Pagar · Entrega', 'M3', {}],
  ['M3.04', 'M3.04', 'Pagar · Envío', 'M3', {}],
  ['M3.06', 'M3.06', 'Pagar · Forma de pago', 'M3', {}],
  ['O.RES', 'M3.07', 'Resumen de la compra (hoja)', 'M3', { alias: 'O.RES' }],
  ['M3.03', 'M3.03', 'Elegir o crear dirección', 'M3', { type: 'flow' }],
  ['M3.05', 'M3.05', 'Ruta del envío', 'M3', {}],
  ['M3.08', 'M3.08', 'Sala de espera', 'M3', {}],
  ['M3.09', 'M3.09', 'Pago de la compra', 'M3', {}],
  ['M3.10', 'M3.10', 'Pagar con la pasarela', 'M3', {}],
  ['M3.11', 'M3.11', 'Resultado del pago', 'M3', {}],
  ['M3.12', 'M3.12', 'Reportar una transferencia', 'M3', {}],
  // M4 · Servicios
  ['M4.01', 'M4.01', 'Servicios', 'M4', { tab: 'inicio', start: true }],
  ['M4.02', 'M4.02', 'Servicio técnico', 'M4', {}],
  ['M4.03', 'M4.03', 'Quién presta el servicio', 'M4', {}],
  ['M4.04', 'M4.04', 'Perfil de técnico', 'M4', {}],
  ['M4.05', 'M4.05', 'Perfil de empresa de servicio', 'M4', {}],
  ['M4.06', 'M4.06', 'Seguros', 'M4', {}],
  ['M4.07', 'M4.07', 'Aseguradora', 'M4', {}],
  ['M4.08', 'M4.08', 'Auxilio vial', 'M4', {}],
  ['M4.09', 'M4.09', 'Empresa de auxilio', 'M4', {}],
  // M5 · Academia
  ['M5.01', 'M5.01', 'Academia', 'M5', { start: true }],
  ['M5.02', 'M5.02', 'Curso', 'M5', {}],
  ['M5.03', 'M5.03', 'Mis cursos', 'M5', {}],
  ['M5.04', 'M5.04', 'Lección', 'M5', {}],
  ['M5.05', 'M5.05', 'Eventos', 'M5', {}],
  ['M5.06', 'M5.06', 'Comunidad: foros', 'M5', {}],
  ['M5.07', 'M5.07', 'Foro: preguntas', 'M5', {}],
  ['M5.08', 'M5.08', 'Hilo de una pregunta', 'M5', {}],
  ['M5.09', 'M5.09', 'Escribir pregunta', 'M5', { type: 'flow' }],
  ['M5.10', 'M5.10', 'Mi nivel y mis puntos', 'M5', {}],
  // M6 · Cuenta
  ['M6.01', 'M6.01', 'Cuenta', 'M6', { tab: 'cuenta' }],
  ['M6.03', 'M6.03', 'Pedidos', 'M6', { tab: 'pedidos' }],
  ['M6.04', 'M6.04', 'Detalle del pedido', 'M6', {}],
  ['M6.05', 'M6.05', 'Ayuda con un pedido', 'M6', { tab: 'pedidos' }],
  ['M6.13', 'M6.13', 'Direcciones', 'M6', {}],
  ['O.ACC', 'M6.13 ▣', 'Direcciones · Hoja de acciones', 'M6', { alias: 'O.ACC' }],
  ['M6.02', 'M6.02', 'Datos personales', 'M6', {}],
  ['M6.06', 'M6.06', 'Calificar a la tienda', 'M6', {}],
  ['M6.07', 'M6.07', 'Pedir devolución', 'M6', {}],
  ['M6.08', 'M6.08', 'Abrir reclamo', 'M6', {}],
  ['M6.09', 'M6.09', 'Reclamos y devoluciones', 'M6', {}],
  ['M6.10', 'M6.10', 'Hilo del reclamo', 'M6', {}],
  ['M6.11', 'M6.11', 'Garantías', 'M6', {}],
  ['M6.12', 'M6.12', 'Servicios que pedí', 'M6', {}],
  ['M6.14', 'M6.14', 'Dirección', 'M6', { type: 'flow' }],
  ['M6.15', 'M6.15', 'Formas de pago', 'M6', {}],
  ['M6.16', 'M6.16', 'Forma de pago', 'M6', { type: 'flow' }],
  ['M6.17', 'M6.17', 'Avisos', 'M6', {}],
  ['M6.18', 'M6.18', 'Seguridad y contraseña', 'M6', {}],
  ['M6.19', 'M6.19', 'Verificación en dos pasos', 'M6', {}],
  ['M6.20', 'M6.20', 'Sesiones abiertas', 'M6', {}],
  ['M6.21', 'M6.21', 'Eliminar cuenta', 'M6', {}],
  ['M6.22', 'M6.22', 'Registrar mi empresa', 'M6', {}],
  ['M6.23', 'M6.23', 'Cómo se ve VexBiz', 'M6', {}],
  ['M6.24', 'M6.24', 'Ayuda e información', 'M6', {}],
  ['M6.25', 'M6.25', 'Documento', 'M6', {}],
  ['M6.26', 'M6.26', 'Contacto', 'M6', {}],
  // M7 · Modo Tienda
  ['M7.01', 'M7.01', 'Inicio de la tienda', 'M7', { tab: 'inicio', start: true }],
  ['M7.02', 'M7.02', 'Confirmación pendiente', 'M7', {}],
  ['M7.03', 'M7.03', 'Pedidos de la tienda', 'M7', { tab: 'pedidos' }],
  ['M7.04', 'M7.04', 'Pedido: preparar', 'M7', {}],
  ['M7.05', 'M7.05', 'Despachar y facturar', 'M7', {}],
  ['M7.06', 'M7.06', 'Productos', 'M7', { tab: 'productos' }],
  ['M7.07', 'M7.07', 'Poner un artículo a la venta', 'M7', { type: 'flow' }],
  ['M7.08', 'M7.08', 'Oferta', 'M7', {}],
  ['M7.11', 'M7.11', 'Ventas', 'M7', { tab: 'dinero' }],
  ['M7.12', 'M7.12', 'Liquidaciones', 'M7', { tab: 'dinero' }],
  ['O.DET', 'M7.12 ▣', 'Hoja «Detalle del período»', 'M7', { alias: 'O.DET' }],
  ['M7.13', 'M7.13', 'Cuentas', 'M7', { tab: 'dinero' }],
  ['M7.M', 'M7', 'Más', 'M7', { tab: 'mas' }],
  ['M7.09', 'M7.09', 'Carritos y apartadas', 'M7', {}],
  ['M7.10', 'M7.10', 'Reclamos y devoluciones', 'M7', {}],
  ['M7.16', 'M7.16', 'Reseñas', 'M7', {}],
  ['M7.17', 'M7.17', 'Ajustes de la tienda', 'M7', {}],
  ['M7.14', 'M7.14', 'Cupones', 'M7', {}],
  ['M7.15', 'M7.15', 'Envíos', 'M7', {}],
  ['M7.18', 'M7.18', 'Documentos de verificación', 'M7', {}],
  ['M7.19', 'M7.19', 'Cómo se ve mi tienda', 'M7', {}],
  ['M7.20', 'M7.20', 'Importadora: mis fichas', 'M7', {}],
  ['M7.21', 'M7.21', 'Importadora: ficha y compatibilidades', 'M7', { type: 'flow' }],
  // M8 · Modo Técnico
  ['M8.01', 'M8.01', 'Trabajos', 'M8', { tab: 'trabajos', start: true }],
  ['M8.02', 'M8.02', 'Solicitud entrante', 'M8', {}],
  ['M8.03', 'M8.03', 'Trabajo en curso', 'M8', {}],
  ['M8.04', 'M8.04', 'Cerrar el trabajo', 'M8', {}],
  ['M8.05', 'M8.05', 'Firma del cliente', 'M8', {}],
  ['M8.06', 'M8.06', 'Servicios', 'M8', { tab: 'servicios' }],
  ['M8.08', 'M8.08', 'Cobertura y horario', 'M8', {}],
  ['M8.11', 'M8.11', 'Compras de trabajo', 'M8', { tab: 'compras' }],
  ['M8.12', 'M8.12', 'Membresía', 'M8', {}],
  ['M8.12S', 'M8.12 ▣', 'Membresía · País sin membresía', 'M8', {}],
  ['M8.07', 'M8.07', 'Mis oficios', 'M8', {}],
  ['M8.09', 'M8.09', 'Mis documentos', 'M8', {}],
  ['M8.10', 'M8.10', 'Mi perfil profesional', 'M8', { tab: 'perfil' }],
  // M9 · Modo Empresa
  ['M9.01', 'M9.01', 'Solicitudes', 'M9', { tab: 'solicitudes', start: true }],
  ['M9.02', 'M9.02', 'Solicitud', 'M9', {}],
  ['M9.03', 'M9.03', 'Cotizar', 'M9', {}],
  ['M9.04', 'M9.04', 'Cerrar con garantía', 'M9', {}],
  ['M9.05', 'M9.05', 'Catálogo', 'M9', { tab: 'catalogo' }],
  ['M9.06', 'M9.06', 'Servicio', 'M9', { type: 'flow' }],
  ['M9.07', 'M9.07', 'Perfil público', 'M9', { tab: 'perfil' }],
  ['M9.08', 'M9.08', 'Membresía', 'M9', {}],
  // Superposiciones (destinos de overlay)
  ['O.RES', '—', 'Resumen de la compra', 'OV', { type: 'sheet', dup: true }],
  ['O.ACC', '—', 'Acciones de la dirección', 'OV', { type: 'sheet', dup: true }],
  ['O.DET', '—', 'Detalle del período', 'OV', { type: 'sheet', dup: true }],
  ['O.FIL', '—', 'Filtros y orden', 'OV', { type: 'sheet', dup: true }],
  ['O.OTR', '—', 'Otras tiendas que lo venden', 'OV', { type: 'sheet', dup: true }],
  ['O.MOD', '—', 'Cambiar de modo', 'OV', { type: 'sheet', dup: true }],
  ['O.AVI', '—', 'Avisos en vivo', 'OV', { type: 'sheet', dup: true }],
  ['O.CAR', '—', 'Añadido al carrito', 'OV', { type: 'sheet', dup: true }],
  ['O.CON', '—', 'Consentimiento de privacidad', 'OV', { type: 'dialog', dup: true }],
];

// Tipo real de las superposiciones (las filas M0.0x con alias lo heredan).
const OVERLAY_TYPE = { 'O.MOD': 'sheet', 'O.AVI': 'sheet', 'O.CAR': 'sheet', 'O.CON': 'dialog', 'O.FIL': 'sheet', 'O.OTR': 'sheet', 'O.RES': 'sheet', 'O.ACC': 'sheet', 'O.DET': 'sheet' };

/** Todas las filas del Índice: 138 entradas, una por pantalla de Figma. */
export const INDEX = ROWS.map(([id, label, title, mod, o], n) => ({
  n, id, label, title, mod, tab: o.tab || null, start: !!o.start, alias: !!o.alias, dup: !!o.dup,
  type: OVERLAY_TYPE[id] || o.type || 'screen',
}));

/** Metadatos de ruta, una por id (la primera fila gana; las filas de «—» y los alias comparten id). */
export const META = {};
for (const r of INDEX) {
  if (META[r.id]) continue;
  const m = MODULES.find((x) => x.id === r.mod);
  META[r.id] = { ...r, mode: m.mode, phase: r.mod === 'OV' ? 0 : m.phase };
}
// Las superposiciones heredan la fase de la pantalla desde la que se abren.
Object.assign(META['O.MOD'], { phase: 0 }); Object.assign(META['O.AVI'], { phase: 0 });
Object.assign(META['O.CAR'], { phase: 0 }); Object.assign(META['O.CON'], { phase: 0 });
Object.assign(META['O.FIL'], { phase: 1 }); Object.assign(META['O.OTR'], { phase: 1 });
Object.assign(META['O.RES'], { phase: 1 }); Object.assign(META['O.ACC'], { phase: 2 });
Object.assign(META['O.DET'], { phase: 5 });
// M5 e M6 pertenecen al modo Comprador pero M5/M4 no llevan barra (la lleva solo M4.01 como en Figma).
META['M7.M'].label = 'M7';

/** Pantalla de inicio de cada modo (cambio de modo, M2.01 / M7.01 / M8.01 / M9.01). */
export const HOME = { comprador: 'M2.01', tienda: 'M7.01', tecnico: 'M8.01', empresa: 'M9.01' };

/** Barras inferiores por modo: [id de pestaña, etiqueta, ícono, pantalla raíz]. */
export const BARS = {
  comprador: [['inicio', 'Inicio', 'home', 'M2.01'], ['explorar', 'Explorar', 'explore', 'M2.05'], ['carrito', 'Carrito', 'cart', 'M3.01'], ['pedidos', 'Pedidos', 'receipt', 'M6.03'], ['cuenta', 'Cuenta', 'person', 'M6.01']],
  tecnico: [['trabajos', 'Trabajos', 'briefcase', 'M8.01'], ['servicios', 'Servicios', 'sliders', 'M8.06'], ['compras', 'Compras', 'bag', 'M8.11'], ['perfil', 'Perfil', 'idcard', 'M8.10']],
  tienda: [['inicio', 'Inicio', 'store', 'M7.01'], ['pedidos', 'Pedidos', 'box', 'M7.03'], ['productos', 'Productos', 'tag', 'M7.06'], ['dinero', 'Dinero', 'wallet', 'M7.11'], ['mas', 'Más', 'more', 'M7.M']],
  empresa: [['solicitudes', 'Solicitudes', 'list', 'M9.01'], ['catalogo', 'Catálogo', 'book', 'M9.05'], ['perfil', 'Perfil', 'idcard', 'M9.07']],
};
export const MODE_NAME = { comprador: 'Comprador', tecnico: 'Técnico', tienda: 'Tienda', empresa: 'Empresa de servicio' };
