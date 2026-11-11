// Fase 5 · datos del Modo Tienda (M7). Lo que no está en el Figma y se inventó lleva la marca  // INVENTADO.
export const COMISION = 12; // % de VexBiz fijado el día de la compra
export const MIN_TRANSFERENCIA = 50; // INVENTADO: Figma dice «No llega al mínimo de transferencia» sin cifra

/** Pedidos de la tienda. `lineas`: [nombre, código, cantidad, precio]. El total = artículos + envío; «Te quedan» = total − comisión. */
export const pedidosTiendaIni = [
  { id: '#VX-20412', cliente: 'María González', tel: '+58 412 555 1234', dir: 'Urb. El Viñedo, Calle 4, Casa 12', ciudad: 'Caracas', estado: 'Distrito Capital', fecha: '16/10', hora: '10:42', envio: 15, retiro: false, status: 'pagado',
    lineas: [['Capacitor de marcha 35+5 µF', 'FT-CAP-355', 2, 9.5], ['Control remoto universal A/A', 'FT-CTR-UNI', 1, 14]] },
  { id: '#VX-20409', cliente: 'José Rodríguez', tel: '+58 414 555 8801', dir: 'Retiro en la tienda', ciudad: 'Caracas', estado: 'Distrito Capital', fecha: '16/10', hora: '09:15', envio: 0, retiro: true, status: 'pagado', // INVENTADO: teléfono y hora
    lineas: [['Regleta con protector de voltaje 6 tomas', 'FT-REG-06', 1, 19.6]] },
  { id: '#VX-20405', cliente: 'Carmen Díaz', tel: '+58 424 555 3302', dir: 'Calle Montes de Oca 18', ciudad: 'Valencia', estado: 'Carabobo', fecha: '15/10', hora: '16:20', envio: 18, retiro: false, status: 'pagado', // INVENTADO: teléfono, hora, líneas
    lineas: [['Capacitor de marcha 35+5 µF', 'FT-CAP-355', 2, 9.5], ['Control remoto universal A/A', 'FT-CTR-UNI', 1, 14], ['Kit de soldadura', 'FT-SOL-02', 1, 61.5]] },
  { id: '#VX-20398', cliente: 'Luis Pérez', tel: '+58 416 555 7745', dir: 'Av. 5 de Julio 120', ciudad: 'Maracay', estado: 'Aragua', fecha: '15/10', hora: '11:05', envio: 8, retiro: false, status: 'pagado', // INVENTADO
    lineas: [['Control remoto universal A/A', 'FT-CTR-UNI', 2, 14]] },
  { id: '#VX-20391', cliente: 'Ana Torres', tel: '+58 412 555 2290', dir: 'Calle Sucre 33', ciudad: 'Caracas', estado: 'Distrito Capital', fecha: '14/10', hora: '17:48', envio: 5, retiro: false, status: 'pagado', // INVENTADO
    lineas: [['Capacitor de marcha 35+5 µF', 'FT-CAP-355', 1, 9.5], ['Control remoto universal A/A', 'FT-CTR-UNI', 1, 14]] },
  { id: '#VX-20377', cliente: 'Pedro Silva', tel: '+58 414 555 6120', dir: 'Calle Páez 45', ciudad: 'San Diego', estado: 'Carabobo', fecha: '12/10', hora: '12:30', envio: 8, retiro: false, status: 'despachado', // INVENTADO
    lineas: [['Motor ventilador evaporador 18W', 'FT-MOT-18W', 1, 32]] },
];
/** Pedidos que aparecen al llegar al final de la lista («Cargando más pedidos…»). */
export const pedidosMasIni = [ // INVENTADO
  { id: '#VX-20360', cliente: 'Rosa Mejías', tel: '+58 412 555 9911', dir: 'Av. Bolívar 77', ciudad: 'Valencia', estado: 'Carabobo', fecha: '10/10', hora: '15:10', envio: 8, retiro: false, status: 'despachado', lineas: [['Capacitor de marcha 35+5 µF', 'FT-CAP-355', 3, 9.5]] },
  { id: '#VX-20344', cliente: 'Miguel Ortega', tel: '+58 414 555 1020', dir: 'Calle 8, Los Ruices', ciudad: 'Caracas', estado: 'Distrito Capital', fecha: '08/10', hora: '10:00', envio: 5, retiro: false, status: 'despachado', lineas: [['Control remoto universal A/A', 'FT-CTR-UNI', 3, 14]] },
];

/** Ventas que esperan respuesta (cola de M7.02). `venceEn`: ms desde que se abre la demo. */
export const pendientesIni = [
  { id: 'p1', producto: 'Tarjeta electrónica condensadora split 12K', codigo: 'FT-TAR-12K', qty: 2, precio: 64, comprador: 'José Rodríguez', motivo: 'otra tienda no pudo', stock: 1, venceEn: (4 * 60 + 32) * 1000 },
  { id: 'p2', producto: 'Capacitor de marcha 35+5 µF', codigo: 'FT-CAP-355', qty: 1, precio: 9.5, comprador: 'Carmen Díaz', motivo: 'el comprador te eligió', stock: 2, venceEn: (6 * 60 + 10) * 1000 }, // INVENTADO
  { id: 'p3', producto: 'Control remoto universal A/A', codigo: 'FT-CTR-UNI', qty: 3, precio: 14, comprador: 'Luis Pérez', motivo: 'el comprador te eligió', stock: 24, venceEn: (8 * 60 + 45) * 1000 }, // INVENTADO
];

/** Productos de la tienda. `mov`: movimientos de existencias [delta, motivo, fecha]; las existencias = inicial + suma. */
export const productosTiendaIni = [
  { id: 'comp', nombre: 'Compresor rotativo 12.000 BTU R410A', marca: 'GMCC', codigo: 'FT-CMP-12K', precio: 189, publicado: true, inicial: 8, mov: [], condicion: 'Nuevo', tiendas: 7 },
  { id: 'cap', nombre: 'Capacitor de marcha 35+5 µF', marca: 'Genérico', codigo: 'FT-CAP-355', precio: 9.5, publicado: true, inicial: 1, condicion: 'Nuevo', tiendas: 7,
    mov: [[-1, 'Unidad dañada', '05/10/2026'], [4, 'Compra a proveedor', '10/10/2026'], [-2, 'Pedido #VX-20412', '16/10/2026']] },
  { id: 'ctr', nombre: 'Control remoto universal A/A', marca: 'Chunghop', codigo: 'FT-CTR-UNI', precio: 14, publicado: true, inicial: 24, mov: [], condicion: 'Nuevo', tiendas: 7 },
  { id: 'mot', nombre: 'Motor ventilador evaporador 18W', marca: 'Welling', codigo: 'FT-MOT-18W', precio: 32, publicado: false, inicial: 0, mov: [], condicion: 'Nuevo', tiendas: 1 },
];
/** Fichas del catálogo que la tienda aún no publica (M7.07). */
export const catalogoLibre = [ // INVENTADO
  { id: 'scr', nombre: 'Compresor scroll 24.000 BTU', marca: 'GMCC', codigo: 'FT-CMP-24S', tiendas: 3 },
  { id: 'tar', nombre: 'Tarjeta electrónica condensadora split 12K', marca: 'Midea', codigo: 'FT-TAR-12K', tiendas: 1 },
  { id: 'ter', nombre: 'Termostato digital para nevera', marca: 'Danfoss', codigo: 'FT-TER-01', tiendas: 5 },
];

/** Carritos abiertos (M7.09). */
export const carritosIni = [
  { id: 'c1', prod: 'cap', nombre: 'Capacitor de marcha 35+5 µF', qty: 3, sesion: true, hace: 'hace 20 min', vistas: 4 },
  { id: 'c2', prod: 'comp', nombre: 'Compresor rotativo 12.000 BTU R410A', qty: 1, sesion: false, hace: 'hace 1 h', vistas: 2 },
  { id: 'c3', prod: 'ctr', nombre: 'Control remoto universal A/A', qty: 2, sesion: true, hace: 'hace 3 h', vistas: 1 },
];
export const apartadasIni = [ // INVENTADO: lo que está apartado (2 unidades)
  { id: 'a1', nombre: 'Capacitor de marcha 35+5 µF', qty: 1, cliente: 'Carmen Díaz', hasta: 'hoy 18:00' }, { id: 'a2', nombre: 'Control remoto universal A/A', qty: 1, cliente: 'Luis Pérez', hasta: 'mañana 10:00' },
];

export const reclamosTiendaIni = [
  { id: '#VX-20211', fecha: '16/10', estado: 'Solicitada', reembolso: 19.6, motivo: 'La regleta no enciende al conectarla.', producto: 'Regleta con protector de voltaje 6 tomas', qty: 1 },
  { id: '#VX-20188', fecha: '05/10', estado: 'Aprobada', reembolso: 64, motivo: 'Me enviaron la tarjeta de un modelo distinto.', producto: 'Tarjeta electrónica condensadora split 12K', qty: 1 },
];
export const resenas = { rating: 4.8, total: 37, dist: [[5, 31], [4, 3], [3, 1], [2, 2], [1, 0]], recientes: [
  { quien: 'María G.', fecha: '14/10/2026', pedido: '#VX-20398', t: 'Llegó al día siguiente, bien embalado. Me ayudaron a elegir el kit correcto.' },
  { quien: 'José R.', fecha: '09/10/2026', pedido: '#VX-20377', t: 'Buen precio, pero tardaron un día más de lo que decía el envío.' },
  { quien: 'Carmen D.', fecha: '02/10/2026', pedido: '#VX-20301', t: 'El control remoto no funcionaba con mi modelo.' }] };

export const cuponesIni = [
  { id: 'k1', codigo: 'VERANO10', estado: 'activo', texto: '10% de descuento en compras desde $ 50', usos: 18, limite: 100, porPersona: 1 },
  { id: 'k2', codigo: 'BIENVENIDA5', estado: 'pausado', texto: '$ 5 de descuento en tu primera compra', usos: 42, limite: 0 },
  { id: 'k3', codigo: 'BLACKFRIDAY', estado: 'caducado', texto: '15% de descuento', usos: 200, limite: 200, agotado: true },
];
export const reglasEnvioIni = [
  { id: 'e1', nombre: 'Envío Caracas', monto: 5, comprador: 50, tienda: 50, activa: true, texto: 'El comprador paga el 50% y tu tienda el 50%.' },
  { id: 'e2', nombre: 'Envío nacional', monto: 12, comprador: 100, tienda: 0, activa: true, texto: 'El comprador paga el 100% del envío.' },
  { id: 'e3', nombre: 'Promo envío gratis', monto: 0, comprador: 0, tienda: 100, activa: false, texto: 'Tu tienda paga el 100%; para el cliente es gratis.' },
];
export const docsTiendaIni = [
  { id: 'rif', nombre: 'RIF de la empresa', estado: 'verificado', obligatorio: true, valido: '02/10/2027' },
  { id: 'rm', nombre: 'Registro Mercantil', estado: 'rechazado', obligatorio: true, motivo: 'La imagen está cortada y no se lee el sello del registro.', formatos: 'Formatos: JPG, PNG o PDF' },
  { id: 'sol', nombre: 'Solvencia SENIAT', estado: 'pendiente', obligatorio: true, ayuda: 'Constancia de solvencia del último ejercicio.' },
];
export const fichasIni = [
  { id: 'f1', nombre: 'Compresor rotativo 12.000 BTU R410A', marca: 'GMCC', ref: 'PA108X1C', tiendas: 7, compat: 14, visible: true,
    desc: 'Compresor rotativo para equipos split de 12.000 BTU con refrigerante R410A.', // INVENTADO
    lista: [{ marca: 'LG', modelo: 'S4-Q12JA3AA', tipo: 'Split pared' }, { marca: 'Samsung', modelo: 'AR12TVHZDWK', tipo: '' }, { marca: 'Daikin', modelo: 'toda la marca', tipo: '' }] },
  { id: 'f2', nombre: 'Tarjeta electrónica condensadora split 12K', marca: 'Midea', ref: '17122000A', tiendas: 1, compat: 6, visible: true, desc: 'Tarjeta de control para la unidad condensadora de equipos split de 12.000 BTU.', lista: [{ marca: 'Midea', modelo: 'MSAGBU-12CRDN8', tipo: 'Split pared' }] }, // INVENTADO
  { id: 'f3', nombre: 'Motor ventilador evaporador 18W', marca: 'Welling', ref: 'YDK18-6G', tiendas: 0, compat: 0, visible: false, desc: 'Motor de ventilador para evaporadora de 18 W.', lista: [] }, // INVENTADO
];
export const quienPublica = [['Frío Total Caracas', 3], ['ClimaRepuestos Valencia', 2], ['Refrigeración El Sol', 1]];

// ── Dinero ──────────────────────────────────────────────────────────────────
export const ventas = { bruto: 18420.9, neto: 16210.4, pedidos: 312, meses: [['Octubre', 34, 1840], ['Septiembre', 41, 2360], ['Agosto', 36, 1910], ['Julio', 28, 1420], ['Junio', 22, 1150], ['Mayo', 19, 980]] };
/** Periodos de liquidación. El de Figma 01/10–15/10 trae el detalle (M7.12 hoja). */
export const liquidaciones = [
  { id: 'l1', periodo: '01/10 — 15/10/2026', brutas: 3546, comision: 425.52, retenciones: 38.28, ajustes: [['Saldo arrastrado del período anterior', 'Corte del 30/09 bajo el mínimo', 38.2], ['Reembolso pedido #VX-20188', 'Devolución aprobada', -64]], estado: 'transferida', cuando: 'Transferido el 16/10 (Banco de Venezuela ••4567)' },
  { id: 'l2', periodo: '16/09 — 30/09/2026', neto: 2870.15, estado: 'transferida', cuando: 'Transferido el 01/10 (Banco de Venezuela ••4567)' },
  { id: 'l3', periodo: '01/09 — 15/09/2026', neto: 38.2, estado: 'acumulada', cuando: 'No llega al mínimo de transferencia' },
];
export const abonos = [
  { id: '#VX-20412', fecha: '16/10', estado: 'abonado', nota: 'Bs 9,00 de comisión', ref: 'Ref. 778812', monto: 'Bs 4.512,30' },
  { id: '#VX-20409', fecha: '16/10', estado: 'espera', nota: 'Esperando al banco', ref: '—' },
  { id: '#VX-20390', fecha: '14/10', estado: 'error', nota: 'No se pudo abonar', ref: 'VexBiz lo está revisando' },
];
export const cuentasBanco = [
  { id: 'b1', banco: 'Banco de Venezuela', principal: true, cuenta: '0102 •••• •••• 4567', tipo: 'Corriente', titular: 'Frío Total Servicios C.A.', doc: 'J-41234567-8' },
  { id: 'b2', banco: 'Banesco', cuenta: '0134 •••• •••• 8890', tipo: 'Ahorros', titular: 'Frío Total Servicios C.A.', doc: 'J-41234567-8' }, // INVENTADO: titular y documento
];

export const ajustesIni = { nombre: 'Frío Total Caracas', email: 'ventas@friototal.com', telefono: '0212 555 0101', fiscal: 'J-41234567-8', horario: '3 tramos · America/Caracas', figuras: { vender: true, importar: false, servicios: false } };
export const tiendaPublica = { rating: 4.8, opiniones: 37, direccion: 'Av. Principal de Boleíta Norte, Galpón 12, Caracas', productos: 46, agotados: 3, telefonoPublico: '' };
