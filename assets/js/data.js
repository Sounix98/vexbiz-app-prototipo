// Datos canónicos del prototipo (sección 7 del contexto). Misma forma que usaría una API.
// Lo que no está en el Figma y se inventó en el mismo estilo lleva la marca  // INVENTADO  (ver INFORME.md).

/** Bs por USD. Calibrada para que $ 389,00 → Bs 14.352,10 y $ 466,14 → Bs 17.198. */
export const TASA = 36.89486;

export const usuario = {
  nombre: 'Aníbal Lejarazu', iniciales: 'AL', correo: 'anibal@correo.com', verificado: true,
  ciudad: 'Valencia, Carabobo',
  resumen: { sinPagar: 1, enCamino: 2, entregados: 14 },
  gastoMensual: [['May', 48], ['Jun', 95], ['Jul', 31], ['Ago', 142], ['Sep', 77], ['Oct', 124]],
};

export const direcciones = [
  { id: 'casa', nombre: 'Casa', predeterminada: true, linea: 'Av. Bolívar Norte, Res. Los Samanes, Torre B, Apto 4-2', ref: 'Frente a la plaza', ciudad: 'Valencia, Carabobo', cp: '2001', tel: '0414-555 1234' },
  { id: 'oficina', nombre: 'Oficina', linea: 'C.C. Metrópolis, Nivel 2, Local 214', ciudad: 'Valencia, Carabobo', cp: '2003', tel: '0241-555 9876', sinMapa: true },
  { id: 'taller', nombre: 'Taller principal', linea: 'Zona Industrial Castillito, Calle 98', ciudad: 'San Diego, Carabobo', cp: '2006', tel: '0412-555 4422', sinMapa: true },
];

export const tiendas = [
  { id: 'ft', sigla: 'FT', nombre: 'Frío Total C.A.', nicho: 'Climatización', ciudad: 'Caracas', region: 'Distrito Capital', rating: 4.8, productos: 46, verificada: true },
  { id: 'cr', sigla: 'CR', nombre: 'ClimaRepuestos', nicho: 'Climatización', ciudad: 'Valencia', rating: 4.7, productos: 128 },
  { id: 'ha', sigla: 'HA', nombre: 'Herramientas Andina', nicho: 'Herramientas', ciudad: 'Mérida', rating: 4.7, productos: 301 }, // INVENTADO: ciudad y conteo
  { id: 're', sigla: 'RE', nombre: 'Repuestos Express', nicho: 'Refrigeración', ciudad: 'Caracas', rating: 4.9, productos: 87 }, // INVENTADO: ciudad y conteo
  { id: 'eh', sigla: 'EH', nombre: 'ElectroHogar', nicho: 'Electrodomésticos', ciudad: 'Maracay', rating: 4.4, productos: 212 },
  { id: 'et', sigla: 'ET', nombre: 'Ferretería El Tornillo', nicho: 'Herramientas', ciudad: 'Valencia', rating: 4.5, productos: 164 }, // INVENTADO
  { id: 'rf', sigla: 'RF', nombre: 'Repuestos Frío', nicho: 'Refrigeración', ciudad: 'Barquisimeto', rating: 4.6, productos: 95 }, // INVENTADO
  { id: 'rs', sigla: 'RS', nombre: 'Refrigeración El Sol', nicho: 'Refrigeración', ciudad: 'Mérida', rating: 4.2, productos: 37 },
];

export const productos = [
  { id: 'aa12', nombre: 'Aire split inverter 12.000 BTU', corto: 'Aire split 12.000 BTU', marca: 'Samsung', ref: 'AR12TVHZ', gtin: '8801643562371', categoria: 'Climatización › Aires split', tienda: 'ft', precio: 389.0, antes: 486.25, oferta: '20/10', stock: 12 },
  { id: 'ctrl', nombre: 'Control remoto universal A/A', corto: 'Control remoto universal', categoria: 'Climatización › Controles', tienda: 'ft', precio: 12.5, precioAnterior: 11.9, stock: 40 }, // INVENTADO: precioAnterior (la línea «Cambió de precio»)
  { id: 'cap', nombre: 'Capacitor de marcha 35+5 µF', corto: 'Capacitor de marcha', categoria: 'Climatización › Repuestos', tienda: 'ft', precio: 9.5, stock: 60 },
  { id: 'comp', nombre: 'Compresor rotativo 12.000 BTU R410A', corto: 'Compresor rotativo 12K', marca: 'GMCC', ref: 'FT-CMP-12K', categoria: 'Climatización › Compresores', tienda: 'ft', precio: 189.0, stock: 8 },
  { id: 'tarj', nombre: 'Tarjeta electrónica condensadora split 12K', corto: 'Tarjeta condensadora 12K', categoria: 'Climatización › Tarjetas', tienda: 'cr', precio: 64.0, stock: 15 },
  { id: 'tal', nombre: 'Taladro percutor inalámbrico 18V', corto: 'Taladro percutor 18V', categoria: 'Herramientas', tienda: 'ha', precio: 129.9, stock: 9 },
  { id: 'llav', nombre: 'Juego de llaves 12 piezas', corto: 'Juego de llaves 12 piezas', categoria: 'Herramientas', tienda: 'ha', precio: 24.9, stock: 30 },
  // INVENTADO: el resto del catálogo de demo (aires y compresores) para que Resultados, Nicho, Categoría y Filtros tengan qué filtrar
  { id: 'lg12', nombre: 'Aire split Dual Inverter 12.000 BTU', corto: 'Aire LG Dual 12K', marca: 'LG', ref: 'S4-Q12JA3WF', categoria: 'Climatización › Aires split', tienda: 'ft', precio: 412.0, stock: 6 },
  { id: 'mi12', nombre: 'Aire split Xtreme Save 12.000 BTU', corto: 'Aire Midea 12K', marca: 'Midea', ref: 'MSAGBU-12CRDN8', categoria: 'Climatización › Aires split', tienda: 'cr', precio: 356.0, stock: 14 },
  { id: 'da18', nombre: 'Aire split inverter 18.000 BTU', corto: 'Aire Daikin 18K', marca: 'Daikin', ref: 'FTKB50', categoria: 'Climatización › Aires split', tienda: 'ft', precio: 629.0, stock: 3 },
  { id: 'ca24', nombre: 'Aire split 24.000 BTU 220V', corto: 'Aire Carrier 24K', marca: 'Carrier', ref: '42QHC024', categoria: 'Climatización › Aires split', tienda: 'eh', precio: 780.0, stock: 0 },
  { id: 'sa09', nombre: 'Aire split inverter 9.000 BTU', corto: 'Aire Samsung 9K', marca: 'Samsung', ref: 'AR09TVHZ', categoria: 'Climatización › Aires split', tienda: 'cr', precio: 298.0, stock: 20 },
  { id: 'lg18', nombre: 'Aire split Dual Inverter 18.000 BTU', corto: 'Aire LG Dual 18K', marca: 'LG', ref: 'S4-Q18KL3QF', categoria: 'Climatización › Aires split', tienda: 'ft', precio: 540.0, stock: 9, condicion: 'Caja abierta' },
  { id: 'cs24', nombre: 'Compresor scroll 24.000 BTU', corto: 'Compresor scroll 24K', marca: 'GMCC', ref: 'FT-CMP-24S', categoria: 'Climatización › Compresores', sub: 'scroll', tienda: 'ft', precio: 320.0, stock: 5 },
  { id: 'ci12', nombre: 'Compresor inverter 12.000 BTU', corto: 'Compresor inverter 12K', marca: 'Samsung', ref: 'FT-CMP-12I', categoria: 'Climatización › Compresores', sub: 'inverter', tienda: 'ft', precio: 245.0, stock: 4 },
  { id: 'cn14', nombre: 'Compresor para nevera 1/4 HP', corto: 'Compresor nevera 1/4 HP', marca: 'GMCC', ref: 'FT-CMP-N14', categoria: 'Climatización › Compresores', sub: 'nevera', tienda: 'rs', precio: 78.0, stock: 11 },
];
// INVENTADO: precios anteriores de tres productos para que «Ofertas relámpago» tenga descuentos (−20 %)
Object.assign(producto_('lg12'), { antes: 515.0, oferta: '20/10' });
Object.assign(producto_('mi12'), { antes: 445.0, oferta: '20/10' });
Object.assign(producto_('sa09'), { antes: 372.5, oferta: '20/10' });
function producto_(id) { return productos.find((p) => p.id === id); }
productos.forEach((p) => { p.condicion = p.condicion || 'Nuevo'; if (!p.sub && p.id === 'comp') p.sub = 'rotativo'; });
export const producto = (id) => productos.find((p) => p.id === id);
/** Ofertas de otras tiendas para el mismo producto (M2.10). Solo el aire split de la ficha tiene varias. */
export const ofertas = {
  aa12: [
    { t: 'cr', precio: 372.0, stock: 12, nota: 'Mejor precio' },
    { t: 'ft', precio: 389.0, antes: 486.25, stock: 8, actual: true },
    { t: 'eh', precio: 395.0, stock: 2, nota: 'Caja abierta' },
    { t: 'rs', precio: 410.0, stock: 0 },
  ],
};
/** Precio y tienda de una línea del carrito (con oferta de otra tienda si la tiene). */
export const precioDe = (id, oferta) => (oferta ? ofertas[id].find((o) => o.t === oferta).precio : producto(id).precio);
export const tiendaDe = (id, oferta) => tienda(oferta || producto(id).tienda);
export const tienda = (id) => tiendas.find((t) => t.id === id);

/** Carrito inicial = el de M3.01: 4 líneas, 2 tiendas, subtotal $ 568,80. */
export const carritoInicial = [
  { id: 'aa12', qty: 1 }, { id: 'ctrl', qty: 2, cambioPrecio: true },
  { id: 'tal', qty: 1 }, { id: 'llav', qty: 1 },
];

export const pedidos = [
  { id: '#VX-20431', tienda: 'Frío Total C.A.', fecha: '15/10', total: 422.4, estado: 'Falta pagar' },
  { id: '#VX-20432', tienda: 'Herramientas Andina', fecha: '15/10', total: 154.8, estado: 'Pago reportado' },
  { id: '#VX-20377', tienda: 'Repuestos Express', fecha: '02/10', total: 45.6, estado: 'En camino' },
  { id: '#VX-20211', tienda: 'ElectroHogar', fecha: '18/09', total: 39.2, estado: 'Entregado' },
];

export const compra = {
  pasarela: { total: 466.14, impuestoPct: 2, tasaDia: '16/10', intento: 'SP-88123' },
  debitoPct: 3, // impuesto del débito bancario (M3.06 / M3.07)
  pedidos: [{ id: '#VX-20430', tienda: 'Frío Total C.A.', total: 389.0, articulos: 1 }, { id: '#VX-20431', tienda: 'ClimaRepuestos', total: 68.0, articulos: 2 }],
  bancos: [{ id: 'banesco', nombre: 'Banesco', tipo: 'Personal', doc: 'V-12.***.678', tel: '0414-***-1234' }, { id: 'mercantil', nombre: 'Mercantil', doc: 'V-12.***.678', tel: '0412-***-9876' }],
};

export const tecnico = {
  nombre: 'Carlos Mendoza', iniciales: 'CM', rating: 4.8, ciudad: 'Valencia',
  membresia: { basico: 9.9, pro: 24.9 },
};
export const solicitudes = [
  { id: '#S-1082', servicio: 'Instalación de aire split 12.000 BTU', total: 60.0, cliente: 'María González', direccion: 'Urb. El Viñedo, Calle 4, Casa 12, Valencia', cuando: 'sábado 18/10/2026 9:00', caducaMs: (5 * 60 + 12) * 60000 },
];
export const trabajos = [{ id: '#S-1082', cliente: 'Pedro Silva', direccion: 'Calle Páez 45, San Diego', inicio: '8:42', total: 73.0, garantiaHasta: '16/01/2027' }];
export const empresa = { nombre: 'ClimaPro Servicios', iniciales: 'CP', rating: 4.9, ciudad: 'Valencia', venceEnDias: 12 };

export const tienda_modo = {
  nombre: 'Frío Total', pendientes: 3, cuentaMs: (4 * 60 + 32) * 1000, comisionPct: 12,
  porDespachar: [
    { id: '#VX-20412', cliente: 'María González', total: 48.0 },
    { id: '#VX-20409', cliente: 'José Rodríguez', total: 19.6, retiro: true },
    { id: '#VX-20405', cliente: 'Carmen Díaz', total: 112.5 },
  ],
};
export const servicios = [
  { id: 'auxilio', nombre: 'Auxilio vial', detalle: '6 empresas · 24/7' },
  { id: 'tecnico', nombre: 'Servicio técnico', detalle: '48 técnicos y empresas' },
  { id: 'seguros', nombre: 'Seguros', detalle: '3 aseguradoras' },
];
export const cursos = [{ id: 'inv', nombre: 'Diagnóstico de equipos inverter', nivel: 'Intermedio', avance: 44 }];
export const foros = [{ id: 'aa', nombre: 'Foro de aire acondicionado', preguntas: 214 }];

/** Avisos en vivo (M0.04). */
export const avisos = {
  compra: { titulo: 'Nueva compra para contestar', detalle: 'Aire split 12.000 BTU · 1 × $ 389,00', ms: (14 * 60 + 52) * 1000 },
  recientes: [
    { titulo: 'Aire split 12.000 BTU', detalle: 'quedan 14:52', hora: '03:24' },
    { titulo: 'Pedido #VX-20412 pagado', detalle: 'Ya puedes despacharlo.', hora: '03:10' },
    { titulo: 'Nuevo reclamo #R-0091', detalle: 'Carmen D. abrió un reclamo.', hora: '02:58' },
  ],
};

/** Nichos (M2.05). Los conteos son totales del catálogo, no se calculan. */
export const nichos = [
  { id: 'clima', nombre: 'Climatización', texto: 'Aires, repuestos y herramientas de refrigeración.', productos: 1284, servicio: true },
  { id: 'refri', nombre: 'Refrigeración comercial', texto: 'Neveras, cavas y equipos para negocios.', productos: 642 },
  { id: 'electro', nombre: 'Electrodomésticos', texto: 'Línea blanca y sus repuestos.', productos: 938 },
  { id: 'elec', nombre: 'Electricidad', texto: 'Cableado, breakers e iluminación.', productos: 2110 },
  { id: 'solar', nombre: 'Energía solar', texto: 'Paneles, inversores y baterías.', productos: 214 },
  { id: 'plom', nombre: 'Plomería', texto: 'Tuberías, bombas y grifería.', productos: 0 },
];
/** Directorio de M2.11 tal como está en Figma (difiere en algunos datos de `tiendas`; ver INFORME). */
export const directorio = [
  { id: 'ft', sigla: 'FT', nombre: 'Frío Total C.A.', nicho: 'Climatización', ciudad: 'Caracas', rating: 4.8, productos: 46 },
  { id: 'cr', sigla: 'CR', nombre: 'ClimaRepuestos', nicho: 'Climatización', ciudad: 'Valencia', rating: 4.7, productos: 128 },
  { id: 'eh', sigla: 'EH', nombre: 'ElectroHogar Express', nicho: 'Electrodomésticos', ciudad: 'Barquisimeto', rating: 4.6, productos: 212 },
  { id: 'vc', sigla: 'VC', nombre: 'Voltio Center', nicho: 'Electricidad', ciudad: 'Caracas', rating: 4.9, productos: 534 },
  { id: 'rs', sigla: 'RS', nombre: 'Refrigeración El Sol', nicho: 'Refrigeración', ciudad: 'Maracay', rating: 4.2, productos: 37 },
];
/** Búsquedas (M2.02). */
export const sugerencias = [
  { t: 'Compresor rotativo 12.000 BTU R410A', n: '7 tiendas', en: 'En Climatización' },
  { t: 'Compresor scroll 24.000 BTU', n: '3 tiendas' },
  { t: 'GMCC', n: '42 productos' },
  { t: 'compresor de nevera', n: '128 resultados' },
  { t: 'compresor 12000 btu', n: '86 resultados' },
];
export const recientes = ['aire split 12000', 'capacitor 35 uf'];

// ── Fase 2 · Cuenta y postventa ─────────────────────────────────────────────
/** «Hoy» de la demo (la tasa de las pantallas es del 16/10): las vigencias de garantía se calculan contra esta fecha. */
export const HOY = new Date(2026, 9, 16);
/** Impuestos que van incluidos en el total de un pedido (Figma: $ 39,20 = $ 32,94 + $ 6,26). */
export const IMPUESTO_INCLUIDO = 19;

export const garantias = [
  { id: 'g1', producto: 'Aire split inverter 12.000 BTU', responde: 'Samsung, por Frío Total C.A.', hasta: new Date(2027, 9, 16), ref: 'Pedido #VX-20412' },
  { id: 'g2', producto: 'Instalación de aire split', responde: 'ClimaPro Servicios', hasta: new Date(2027, 0, 18), ref: 'Solicitud #S-2041' },
  { id: 'g3', producto: 'Capacitor de marcha 35+5 µF', responde: 'Frío Total C.A.', hasta: new Date(2026, 8, 2), ref: 'Pedido #VX-19870' },
];

/** Líneas de cada pedido (M6.04). El primero es el de Figma; los demás se inventaron para que cuadren con su total. */
export const detallePedidos = {
  '#VX-20211|ElectroHogar': { emitido: '18/09/2026', envio: { empresa: 'Zoom', despachado: '19/09/2026', guia: '1234 5678 90' }, factura: { n: '000-0458', fecha: '19/09/2026' }, lineas: [
    { n: 'Bombillo LED 12W · pack x4', q: 2, p: 9.8, garantia: '18/03/2027' },
    { n: 'Regleta con protector 6 tomas', q: 2, p: 9.8, garantia: '18/09/2027', devolucion: '1 de 2 en devolución' }] },
  '#VX-20431|Frío Total C.A.': { emitido: '15/10/2026', lineas: [{ n: 'Aire split inverter 12.000 BTU', q: 1, p: 389 }, { n: 'Control remoto universal', q: 2, p: 12.5 }] },
  '#VX-20432|Herramientas Andina': { emitido: '15/10/2026', lineas: [{ n: 'Taladro percutor inalámbrico 18V', q: 1, p: 129.9 }, { n: 'Juego de llaves 12 piezas', q: 1, p: 24.9 }] },
  '#VX-20377|Repuestos Express': { emitido: '02/10/2026', envio: { empresa: 'MRW', despachado: '03/10/2026', guia: '4019-882-113' }, lineas: [{ n: 'Kit de mantenimiento para aire acondicionado', q: 1, p: 45.6 }] }, // INVENTADO
  '#VX-20430|Frío Total C.A.': { emitido: '16/10/2026', lineas: [{ n: 'Aire split inverter 12.000 BTU', q: 1, p: 389 }] },
  '#VX-20431|ClimaRepuestos': { emitido: '16/10/2026', lineas: [{ n: 'Tarjeta electrónica condensadora split 12K', q: 1, p: 64 }] },
};

export const reclamosIni = [
  { id: '#R-0091', pedido: '#VX-20301', tienda: 'Herramientas Andina', total: 24.9, fecha: '03/10', abierto: '03/10/2026', estado: 'En mediación',
    resumen: 'El control remoto no es compatible con mi equipo…', motivo: 'El control remoto no es compatible con mi equipo y la tienda no me responde.', ultimo: 'VexBiz',
    mensajes: [{ de: 'Tú', hora: '10:12', t: 'Pedí el control para un LG y me llegó uno que no lo reconoce.' }, { de: 'La tienda', hora: '15:40', t: 'Podemos cambiarlo por el modelo correcto sin costo.' }, { de: 'VexBiz', hora: '09:00', t: 'La tienda tiene hasta el 07/10 para enviar el cambio o aprobar el reembolso.' }] },
  { id: '#R-0074', pedido: '#VX-20188', fecha: '18/09', estado: 'Resuelto', resumen: 'Me enviaron la tarjeta de un modelo distinto.', resolucion: 'Reembolso total de $ 64,00 al comprador.' },
];
export const devolucionesIni = [{ id: '#D-0031', pedido: '#VX-20211', item: 'Regleta con protector 6 tomas', unidades: 1, estado: 'En revisión', fecha: '20/09' }]; // INVENTADO

export const avisosCuenta = [
  { id: 'a1', t: 'La compra #VX-20430 vence en 2 horas', d: 'Transfiere antes de las 18:00 o se cancela.', cuando: 'hace 10 min', nuevo: true, to: 'M3.09', ic: 'clock' },
  { id: 'a2', t: 'Tu pedido #VX-20412 va en camino', d: 'MRW · guía 4019-882-113.', cuando: 'hace 2 h', to: 'M6.04', ic: 'truck' },
  { id: 'a3', t: 'ClimaPro te mandó una cotización', d: '$ 85,00 para el sábado 18/10.', cuando: 'hace 5 h', to: 'M6.12', ic: 'wrench' },
  { id: 'a4', t: 'Tu reclamo #R-0074 se resolvió a tu favor', d: 'Reembolso de $ 64,00.', cuando: 'hace 3 días', to: 'M6.09', ic: 'check' },
];

export const pagosIni = [
  { id: 'nomina', titulo: 'Nómina', sub: 'Cobro a tu cuenta', preferida: true, doc: 'V-18.***.789', cuenta: '····4567', ultimo: '12/10/2026' },
  { id: 'banesco', titulo: 'Banesco ····1234', sub: 'Teléfono y banco', doc: 'V-18.***.789', tel: '0414 ···1234', ultimo: '28/09/2026', falla: true },
  { id: 'binance', titulo: 'Binance', sub: 'Binance Pay', correo: 'an***@correo.com' },
];
export const sesionesIni = [
  { id: 's1', equipo: 'App VexBiz', so: 'Android 15', actual: true, ip: '200.84.12.6', desde: '02/10', ic: 'phone' },
  { id: 's2', equipo: 'Chrome', so: 'Windows 11', ip: '190.205.33.18', desde: '16/10', ic: 'desktop' },
  { id: 's3', equipo: 'Safari', so: 'iPhone', ip: '190.205.33.18', desde: '12/10', ic: 'phone' },
];
export const serviciosPedidos = [
  { id: '#S-2041', estado: 'Aceptado · agendando', ok: false, servicio: 'Instalación de aire split 12.000 BTU', quien: 'ClimaPro Servicios', nota: 'La empresa asignará al técnico', cuando: 'Sáb 18/10 · 09:00', total: 85, donde: 'Urb. El Viñedo, Calle 4, Valencia' },
  { id: '#S-1977', estado: 'Trabajo completado', ok: true, servicio: 'Mantenimiento preventivo', quien: 'Carlos Mendoza', rating: 4.8, cuando: '02/10 · 14:00', total: 35 },
];
export const estadosVE = { Carabobo: ['Valencia', 'San Diego', 'Naguanagua'], 'Distrito Capital': ['Caracas'], Aragua: ['Maracay', 'Turmero'], Lara: ['Barquisimeto'], Mérida: ['Mérida'] };
export const bancosVE = ['Banesco', 'Mercantil', 'Banco de Venezuela', 'BBVA Provincial', 'Bancamiga'];
