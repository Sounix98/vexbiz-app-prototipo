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
  { id: 'oficina', nombre: 'Oficina', linea: 'C.C. Metrópolis, Nivel 2, Local 214', ciudad: 'Valencia, Carabobo', cp: '2003', tel: '0241-555 9876' },
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
];
export const producto = (id) => productos.find((p) => p.id === id);
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
  pedidos: [{ id: '#VX-20430', tienda: 'Frío Total C.A.', total: 389.0 }, { id: '#VX-20431', tienda: 'ClimaRepuestos', total: 68.0 }],
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
