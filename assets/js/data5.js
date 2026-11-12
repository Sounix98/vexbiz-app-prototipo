// Fase 6 · datos del Modo Empresa de servicio (M9). Lo que no está en el Figma y se inventó lleva la marca  // INVENTADO.

/** Solicitudes de la empresa. `para`: fecha del servicio; `estado`: porResponder | cotizada | aceptada | enCurso | terminada. */
export const solicitudesEmpIni = [
  { id: '#S-2041', servicio: 'Instalación de aire split 12.000 BTU', cliente: 'María González', donde: 'Urb. El Viñedo, Valencia', direccion: 'Urb. El Viñedo, Calle 4, Casa 12, Valencia', pedida: 'hace 2 h',
    pref: 'Sáb 18/10 · mañana', venceEn: (20 * 60 + 14) * 60000, /* INVENTADO: cuenta atrás de 20 h 14 min desde que se abre la demo */ notas: 'El equipo ya está comprado. La unidad exterior va en el balcón, 3er piso. Hay toma de 220 V cerca.', estado: 'porResponder', total: 0 },
  { id: '#S-2036', servicio: 'Mantenimiento preventivo de 3 equipos', titulo: 'Mantenimiento preventivo de 3 equipos', cliente: 'Panadería La Espiga', donde: 'Av. Bolívar Norte', direccion: 'Av. Bolívar Norte, Valencia', para: new Date(2026, 9, 14, 9, 0),
    estado: 'aceptada', total: 120, recibida: '10/10/2026 · 10:05', notas: 'Tres equipos de ventana en la cocina y el salón; avisar al encargado al llegar.', tel: false }, // INVENTADO: recibida, notas
  { id: '#S-2030', servicio: 'Reparación de fuga en condensadora', titulo: 'Reparación de fuga en unidad condensadora', cliente: 'Luis Pérez', donde: 'Res. Los Mangos, Naguanagua', direccion: 'Res. Los Mangos, Torre B, Apto 7-2, Naguanagua', para: new Date(2026, 9, 16, 14, 0),
    estado: 'enCurso', total: 85, recibida: '12/10/2026 · 19:20', notas: 'La condensadora gotea aceite por la válvula de servicio. Edificio con estacionamiento de visitantes.', tel: false },
];
/** Terminadas de los últimos meses (dato de catálogo de Figma; las que se cierren en la demo se suman). */
export const TERMINADAS_BASE = 48;

export const catalogoEmpIni = [
  { id: 'cs1', titulo: 'Instalación de aire split hasta 12.000 BTU', desde: 85, min: 120, texto: 'Hasta 3 m de tubería, soporte exterior, vacío y prueba.', oficio: 'Climatización', pedido: 23, de: 41, visible: true }, // Figma: «Pedido 23/41 veces»
  { id: 'cs2', titulo: 'Mantenimiento preventivo', desde: 35, min: 60, texto: 'Limpieza de filtros, serpentines y drenaje.', oficio: 'Climatización', pedido: 41, visible: true },
  { id: 'cs3', titulo: 'Carga de gas refrigerante R410A', desde: 60, min: 90, texto: 'Incluye detección de fugas básica.', oficio: 'Climatización', pedido: 12, visible: true }, // INVENTADO: pedido
  { id: 'cs4', titulo: 'Reparación de tarjeta electrónica', desde: 45, min: 90, texto: 'Diagnóstico y reparación de la tarjeta de control.', oficio: 'Climatización', pedido: 0, visible: false }, // INVENTADO: precio, duración, texto
];

export const perfilEmpIni = {
  nombre: 'ClimaPro Servicios', razon: 'ClimaPro Servicios C.A.', email: 'contacto@climapro.com', web: 'www.climapro.com', telefono: '', direccion: 'Zona industrial, Valencia', // INVENTADO: razón social, dirección; teléfono vacío (Figma: «Los clientes no pueden llamarte»)
  rating: 4.9, opiniones: 58, zonas: ['Valencia', 'Naguanagua', 'San Diego'], logo: true,
  docs: [{ id: 'rif', nombre: 'RIF de la empresa', estado: 'verificado' }, { id: 'rm', nombre: 'Registro Mercantil', estado: 'pendiente' }],
};
export const membresiaEmp = { plan: 'Empresa Pro', costo: 29, dias: 30, desde: new Date(2026, 8, 28), renueva: true };
