// Fase 4 · datos del Modo Técnico (M8). Lo que no está en el Figma y se inventó lleva la marca  // INVENTADO.
const H = 3600000;

/** Solicitudes de la pestaña Trabajos. `venceEn` (ms desde que se abre la demo) se convierte en `venceAt` al crear el estado. */
export const solicitudesIni = [
  { id: '#S-1082', servicio: 'Instalación de aire split 12.000 BTU', cliente: 'María González', direccion: 'Urb. El Viñedo, Calle 4, Casa 12', ciudad: 'Valencia', cuando: 'Sáb 18/10 · 9:00', cuandoLargo: 'Sábado 18/10/2026 · 9:00',
    venceTxt: 'hoy 18:00', venceEn: 5 * H + 12 * 60000, total: 60, recibida: '16/10/2026 a las 12:48', notas: 'El equipo ya está comprado, hace falta el kit de instalación. Hay estacionamiento frente a la casa.', estado: 'pendiente' },
  { id: '#S-1091', servicio: 'Mantenimiento preventivo', cliente: 'José Ramírez', direccion: 'Av. Cedeño, Edif. Torre Norte, Piso 3', ciudad: 'Valencia', cuando: 'Lun 20/10 · 14:00', cuandoLargo: 'Lunes 20/10/2026 · 14:00', // INVENTADO: id, total, notas
    venceTxt: 'el 17/10 10:00', venceEn: 21 * H + 5 * 60000, total: 25, recibida: '16/10/2026 a las 13:05', notas: 'Dos equipos en la oficina; hay que avisar en recepción.', estado: 'pendiente' },
  { id: '#S-1066', servicio: 'Carga de gas refrigerante', cliente: 'Carmen Díaz', direccion: 'Calle Montes de Oca 18', ciudad: 'Valencia', cuando: 'Mar 14/10 · 11:00', cuandoLargo: 'Martes 14/10/2026 · 11:00', // INVENTADO: id, total
    venceTxt: '', venceEn: -1, total: 20, recibida: '12/10/2026 a las 09:20', notas: '', estado: 'caducada' },
];

/** Trabajo en curso (M8.03 a M8.05). */
export const trabajoIni = {
  id: '#T-0412', titulo: 'Instalación de una compra', cliente: 'Pedro Silva', direccion: 'Calle Páez 45, San Diego, Carabobo', corta: 'Calle Páez 45, San Diego', empezo: 'hoy a las 8:42', estado: 'ejecucion',
  parte: { diagnostico: 'Equipo split de 12.000 BTU instalado sin vacío previo', materiales: 'Tuerca flare, 1 kg de gas R410A', horas: '3', hecho: 'Cambié la tuerca flare de la condensadora, limpié el filtro y recargué 1 kg de gas R410A. El equipo enfría normal.', notas: 'Dejar el control remoto en la mesa de la sala.' }, // INVENTADO: diagnóstico, materiales, horas, notas
  manoDeObra: 45, otros: 0, garantiaMeses: 3,
};

/** Compras de trabajo (M8.11), agrupadas por el trabajo para el que se marcaron. */
export const comprasTrabajo = [
  { donde: 'Calle Páez 45, San Diego', trabajo: true, items: [{ id: '#VX-20501', tienda: 'Repuestos Frío', estado: 'Entregado', total: 21.5, fecha: '15/10' }, { id: '#VX-20512', tienda: 'Ferretería El Tornillo', estado: 'En camino', total: 6.5, fecha: '15/10' }] }, // INVENTADO: fecha de #VX-20512
  { donde: 'Urb. El Viñedo, Calle 4, Casa 12', items: [{ id: '#VX-20530', tienda: 'Herramientas Andina', estado: 'Pago reportado', total: 48, fecha: '16/10' }] },
];

export const serviciosIni = [
  { id: 'sv1', titulo: 'Instalación de aire split hasta 18.000 BTU', oficio: 'Climatización', min: 180, texto: 'Montaje de evaporadora y condensadora, vacío y prueba.', precio: 60, visible: true },
  { id: 'sv2', titulo: 'Mantenimiento preventivo', oficio: 'Climatización', min: 90, texto: 'Limpieza de filtros, serpentines y drenaje.', precio: 25, visible: true },
  { id: 'sv3', titulo: 'Carga de gas refrigerante', oficio: 'Climatización', min: 60, texto: 'Detección de fuga básica y recarga.', precio: 20, visible: false },
];

export const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
export const horarioIni = [
  { d: 'Lunes', on: true, de: '08:00', a: '18:00' }, { d: 'Martes', on: true, de: '08:00', a: '18:00' }, { d: 'Miércoles', on: true, de: '08:00', a: '18:00' }, { d: 'Jueves', on: true, de: '08:00', a: '18:00' },
  { d: 'Viernes', on: true, de: '08:00', a: '17:00' }, { d: 'Sábado', on: true, de: '09:00', a: '13:00' }, { d: 'Domingo', on: false, de: '', a: '' },
];

export const oficiosIni = [
  { id: 'aa', nombre: 'Aire acondicionado', estado: 'certificado', fecha: '12/05/2026' },
  { id: 'rc', nombre: 'Refrigeración comercial', estado: 'revision' },
];
export const oficiosDisponibles = ['Electrodomésticos', 'Electricidad residencial', 'Energía solar', 'Plomería'];

export const docsIni = [
  { id: 'ced', nombre: 'Cédula de identidad', obligatorio: true, estado: 'verificado', ayuda: 'Foto legible por ambas caras.', subido: '02/10', valido: '02/10/2031' },
  { id: 'ref', nombre: 'Certificado de refrigeración', obligatorio: true, estado: 'rechazado', ayuda: 'Emitido por un instituto reconocido.', subido: '05/10', motivo: 'La foto está borrosa; no se lee el número.' },
  { id: 'ant', nombre: 'Antecedentes penales', obligatorio: true, estado: 'falta', ayuda: 'Con menos de 6 meses.' },
  { id: 'seg', nombre: 'Seguro de responsabilidad', obligatorio: false, estado: 'vencido', ayuda: 'Recomendado para trabajos grandes.', vence: new Date(2026, 8, 30) },
];

export const perfilTecnico = { rating: 4.8, opiniones: 37, trabajos: 112, oficio: 'Aire acondicionado', anios: 12,
  presentacion: 'Trabajo con equipos split, inverter y de ventana desde 2014. Instalaciones limpias, con vacío y prueba.' };

export const planes = [
  { id: 'basico', nombre: 'Técnico Básico', precio: 9.9, lista: ['Apareces en el directorio de tu zona', 'Hasta 20 solicitudes al mes', 'Perfil verificado'] },
  { id: 'pro', nombre: 'Técnico Pro', recomendado: true, precio: 24.9, lista: ['Solicitudes ilimitadas', 'Prioridad en instalaciones de compras', 'Insignia «Técnico Pro»', 'Soporte por WhatsApp'] },
];
