// Fase 3 · datos de Servicios (M4) y Academia (M5). Lo que no está en el Figma y se inventó lleva la marca  // INVENTADO.

export const HORARIO = 'Atendemos de lunes a sábado, 8:00 a 18:00.';

// ── M4 · Servicios ──────────────────────────────────────────────────────────
export const oficios = [
  { id: 'aa', nombre: 'Aire acondicionado', n: 14 }, { id: 'rc', nombre: 'Refrigeración comercial', n: 6 },
  { id: 'lav', nombre: 'Lavadoras y secadoras', n: 9 }, { id: 'nev', nombre: 'Neveras', n: 11 },
  { id: 'ele', nombre: 'Electricidad residencial', n: 22 }, { id: 'coc', nombre: 'Cocinas y hornos' }, { id: 'plo', nombre: 'Plomería' },
];

/** Quien presta el servicio de Aire acondicionado (M4.03). `tipo`: empresa | tecnico. */
export const prestadores = [
  { id: 'cp', sigla: 'CP', nombre: 'ClimaPro Servicios', tipo: 'empresa', rol: 'Empresa de servicio técnico', texto: 'Instalación y mantenimiento con equipo propio y garantía.', donde: 'Valencia, Carabobo',
    tags: ['Instalación', 'Mantenimiento', 'Carga de gas', '+2'], rating: 4.9, ok: true, servicios: ['Instalación de aire split', 'Mantenimiento preventivo', 'Carga de gas R410A', 'Reparación de tarjetas', 'Limpieza de ductos'], oficios: ['Climatización', 'Refrigeración comercial'], provincia: 'Carabobo', ciudad: 'Valencia' },
  { id: 'cm', sigla: 'CM', nombre: 'Carlos Mendoza', tipo: 'tecnico', rol: 'Técnico independiente', texto: 'Técnico en refrigeración con 12 años en split e inverter.', donde: '25 km alrededor de Valencia', anios: 12,
    tags: ['Reparación', 'Inverter'], rating: 4.8, ok: true, ahora: true, desde: 25, ciudad: 'Valencia', oficios: ['Aire acondicionado', 'Refrigeración comercial', 'Neveras'], nivel: 4, fundador: true, resueltas: 18,
    sobre: 'Trabajo con equipos split, inverter y de ventana desde 2014. Instalaciones limpias, con vacío y prueba.' },
  { id: 'jr', sigla: 'JR', nombre: 'José Rodríguez', tipo: 'tecnico', rol: 'Técnico independiente', texto: 'Reparo tarjetas electrónicas y fugas.', donde: '15 km alrededor de Maracay', anios: 6,
    tags: ['Tarjetas'], rating: null, ok: true, ahora: false, desde: 20, ciudad: 'Maracay', oficios: ['Aire acondicionado'], nivel: 1, fundador: false, resueltas: 0, // INVENTADO: nivel, resueltas
    sobre: 'Reparo tarjetas electrónicas y fugas.' },
];

export const aseguradoras = [
  { id: 'ms', sigla: 'MS', nombre: 'Mercantil Seguros', ciudad: 'Valencia', provincia: 'Carabobo', rating: 4.6, polizas: 4, lista: [
    { t: 'Vehículo', sub: 'Cobertura amplia', p: 340, d: 'Pérdida total y parcial, robo, responsabilidad civil y asistencia en carretera 24 h.' },
    { t: 'Salud individual', p: 410, d: 'Hospitalización, cirugía y emergencias hasta $ 15.000.' }] },
  { id: 'lp', sigla: 'LP', nombre: 'Seguros La Previsora', ciudad: 'Caracas', provincia: 'Distrito Capital', rating: 4.4, polizas: 2, lista: [ // INVENTADO: sigla, provincia, rating, descripciones
    { t: 'Vehículo', sub: 'Responsabilidad civil', p: 85, d: 'Cubre los daños que causes a terceros con tu vehículo.' },
    { t: 'Hogar básico', p: 120, d: 'Incendio y robo de tu vivienda y de lo que hay dentro.' }] },
];
export const otrosSeguros = ['Local comercial', 'Mercancía en tránsito', 'Accidentes personales'];

export const auxilioTipos = ['Remolque', 'Arranque de batería', 'Cambio de neumático', 'Combustible', 'Cerrajería'];
export const auxilioEmpresas = [
  { id: 'gr', empresa: 'Grúas El Rápido', ciudad: 'Caracas', servicio: 'Remolque liviano', base: 30, km: 1.2, hasta: 80, tipo: 'Remolque' },
  { id: 'avc1', empresa: 'Auxilio Vial Centro', ciudad: 'Valencia', servicio: 'Remolque liviano', base: 25, km: 1.0, hasta: 120, tipo: 'Remolque', ver: 'avc' },
  { id: 'avc2', empresa: 'Auxilio Vial Centro', ciudad: 'Valencia', servicio: 'Paso de corriente', base: 12, km: 0.6, hasta: 40, tipo: 'Arranque de batería', ver: 'avc' },
];
export const auxilioEmpresa = { id: 'avc', sigla: 'AV', nombre: 'Auxilio Vial Centro', rating: 4.7, ciudad: 'Valencia', provincia: 'Carabobo', radio: 120,
  ofrece: [{ servicio: 'Remolque liviano', base: 25, km: 1.0, hasta: 120, flota: 4 }, { servicio: 'Paso de corriente', base: 12, km: 0.6, hasta: 40, flota: 2 }] };
export const cuentales = ['Dónde estás', 'Qué le pasa al vehículo', 'Marca y modelo'];

// ── M5 · Academia ───────────────────────────────────────────────────────────
export const areas = [['Climatización', 7], ['Refrigeración', 4], ['Electricidad', 5]];
export const cursosAcademia = [
  { id: 'split', area: 'Climatización', nivel: 'Básico', titulo: 'Instalación de aires split paso a paso', texto: 'Desde el sitio hasta el vacío y la prueba final.', clases: 12, min: 200, rating: 4.8, precio: 0 },
  { id: 'inv', area: 'Climatización', nivel: 'Intermedio', titulo: 'Diagnóstico de equipos inverter', texto: 'Lee códigos de error y mide sensores.', clases: 9, min: 165, rating: 4.9, precio: 25,
    imparte: 'Ramón Márquez', inscritos: 312, sobre: 'Curso práctico grabado en taller con equipos reales de 9.000 a 24.000 BTU.', gratis: 2,
    resumen: 'Lee códigos de error, mide sensores y encuentra la falla real antes de cambiar piezas.',
    temario: [
      { n: 'Cómo piensa un inverter', l: [['Del on/off al inverter', 12], ['Partes de la placa', 18], ['Lectura de códigos de error', 15], ['Sensores de temperatura', 16]] },
      { n: 'Medir sin adivinar', l: [['Probar el IPM', 22], ['Ventilador y válvula', 14], ['Comunicación interior-exterior', 20]] }, // INVENTADO salvo «Probar el IPM» (22 min)
      { n: 'Casos reales', l: [['Caso 1: no enfría', 28], ['Caso 2: apaga a los 30 segundos', 20]] }] },
  { id: 'gas', area: 'Refrigeración', nivel: 'Intermedio', titulo: 'Carga de gas refrigerante sin riesgos', texto: 'Presiones, temperaturas y seguridad al cargar.', clases: 8, min: 140, rating: 4.7, precio: 18 }, // INVENTADO: texto, min, rating, precio
  { id: 'tab', area: 'Electricidad', nivel: 'Básico', titulo: 'Tableros residenciales', texto: 'Breakers, protecciones y cuadro de cargas.', clases: 10, min: 180, rating: 4.6, precio: 0 }, // INVENTADO
];
/** Avance de cada curso en la demo: lecciones hechas. */
export const avanceIni = { inv: { hechas: 4, sigue: 'Probar el IPM' }, gas: { hechas: 1, sigue: 'Presiones y temperaturas' }, split: { hechas: 12, completado: true } };

export const materiales = ['Tabla de resistencias del IPM.pdf', 'Esquema de la placa exterior.pdf'];

export const eventos = {
  vivo: { titulo: 'Errores comunes al instalar inverter', por: 'Ramón Márquez' },
  proximos: [
    { id: 'solar', titulo: 'Charla: energía solar para el hogar', cuando: 'Jue 23/10', hora: '18:30', dur: '1 h', por: 'SolarVen', donde: 'En línea', cupo: 80, inscritos: 40 },
    { id: 'tableros', titulo: 'Taller: tableros residenciales', cuando: 'Sáb 01/11', hora: '10:00', dur: '2 h', por: 'Voltio Center', donde: 'Caracas', cupo: 50, inscritos: 46 }  // 46 más tú = «Quedan 3 de 50 plazas»,
  ],
  pasados: [{ titulo: 'Refrigerantes inflamables', fecha: '02/10' }, { titulo: 'Mantenimiento de cavas', fecha: '18/09' }],
};

export const forosAcademia = [
  { id: 'aa', nombre: 'Foro de aire acondicionado', area: 'Climatización', n: 214 }, { id: 'rc', nombre: 'Refrigeración comercial', area: 'Refrigeración', n: 96 },
  { id: 'lb', nombre: 'Línea blanca', area: 'Electrodomésticos', n: 158 }, { id: 'er', nombre: 'Electricidad residencial', area: 'Electricidad', n: 301 },
];
export const preguntasIni = [
  { id: 'q1', foro: 'aa', t: 'Split inverter LG da error CH05 al arrancar', estado: 'resuelta', autor: 'Carlos Mendoza', insignia: 'Fundador', cuando: 'hace 4 días', fotos: 3,
    cuerpo: 'Enciende pero a los 30 segundos muestra CH05. Ya revisé el cable de comunicación y tiene continuidad.',
    respuestas: [
      { id: 'r1', autor: 'Ramón Márquez', insignia: 'Verificado', resolvio: true, t: 'CH05 en LG es error de comunicación. Mide entre N y señal en la exterior: debe oscilar entre 0 y 24 V DC. Si queda fijo, revisa el optoacoplador.', utiles: 6 }, // INVENTADO: utiles
      { id: 'r2', autor: 'Ana L. Pérez', insignia: 'Certificada', t: 'Revisa también que el neutro llegue firme a la exterior.', utiles: 2 }] },
  { id: 'q2', foro: 'aa', t: 'Compresor rotativo hace ruido metálico al apagar', estado: 'respuestas', nResp: 4, autor: 'Ana L. Pérez', cuando: 'hace 1 semana', fotos: 0, cuerpo: 'Al apagar el equipo se escucha un golpe metálico en el compresor.', respuestas: [] },
  { id: 'q3', foro: 'aa', t: '¿Cómo medir el termistor de descarga sin tabla?', estado: 'sin', autor: 'José Rodríguez', cuando: 'hace 2 h', fotos: 1, cuerpo: 'No tengo la tabla de resistencias del fabricante. ¿Hay una forma de comprobarlo?', respuestas: [] },
];
/** Niveles de la academia (M5.10): puntos mínimos de cada uno. */
export const niveles = [['Aprendiz', 0], ['Ayudante', 100], ['Técnico', 400], ['Técnico Avanzado', 1000], ['Especialista', 1700]];
export const historialPuntos = [
  { t: 'Lección completada', fecha: '16/10', p: 10 }, { t: 'Tu respuesta resolvió una pregunta', fecha: '12/10', p: 50 }, { t: 'Respuesta retirada por la moderación', fecha: '01/10', p: -20 },
];
export const PUNTOS_INI = 1240;
