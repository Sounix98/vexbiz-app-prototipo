// 04 · Servicios y Academia: perfil de técnico, ficha de empresa, servicio técnico, quién presta el servicio,
// seguros, ficha de aseguradora, auxilio vial, ficha de empresa de auxilio, academia, portada del curso,
// foro público y pregunta resuelta. Datos de la app (data2.js) más lo que solo trae el Figma web.
import { oficios as oficiosApp, prestadores as prestApp, aseguradoras as asegApp, otrosSeguros, auxilioEmpresa, cuentales, HORARIO, preguntasIni } from '../../../assets/js/data2.js';
import { icon, esc, money, badge, crumbs, toast, productArt, num } from '../kit.js';
import { producto } from '../dataweb.js';

// ── Datos del Figma web ─────────────────────────────────────────────────────
const OFICIOS = [...oficiosApp.slice(0, 6).map((o) => ({ ...o })), { id: 'sol', nombre: 'Energía solar', n: 3 }, { id: 'plo', nombre: 'Plomería' }, { id: 'cer', nombre: 'Cerrajería', n: 4 }];
const PREST = [
  { ...prestApp[0], texto: 'Instalación y mantenimiento con equipo propio y garantía por escrito.', donde: 'Carabobo' },
  { id: 'fm', sigla: 'FM', nombre: 'FríoMax Soluciones', tipo: 'empresa', rol: 'Empresa de servicio', texto: 'Contratos de mantenimiento para comercios y oficinas.', donde: 'Distrito Capital', tags: ['Mantenimiento', 'Ductos'], rating: 4.6, ok: true },
  { ...prestApp[1], texto: 'Técnico en refrigeración con 12 años de experiencia en split e inverter.', donde: '25 km alrededor de Valencia · 12 años de experiencia', tags: ['Instalación', 'Reparación', 'Inverter'] },
  { ...prestApp[2], donde: '15 km alrededor de Maracay · 6 años de experiencia', tags: ['Reparación', 'Tarjetas'], rating: 4.5, ok: false },
  { id: 'ap', sigla: 'AP', nombre: 'Ana Lucía Pérez', tipo: 'tecnico', rol: 'Técnico independiente', texto: 'Mantenimiento preventivo a domicilio.', donde: '20 km alrededor de Caracas · 8 años de experiencia', tags: ['Mantenimiento', 'Limpieza'], rating: null, ok: true, desde: 18 },
  { id: 'ps', sigla: 'PS', nombre: 'Pedro Salas', tipo: 'tecnico', rol: 'Técnico independiente', texto: 'Instalaciones residenciales.', donde: '10 km alrededor de Barquisimeto · 4 años de experiencia', tags: ['Instalación'], rating: 4.3, ok: false },
];
const ASEG = [
  { ...asegApp[1], lista: [{ t: 'Vehículo', sub: 'Responsabilidad civil', p: 85, d: 'Daños a terceros, defensa legal y grúa hasta 50 km.' }, { t: 'Hogar básico', p: 120, d: 'Incendio, robo y daños por agua en vivienda principal.' }] },
  { ...asegApp[0], lista: [asegApp[0].lista[0], { t: 'Vehículo', sub: 'Responsabilidad civil', p: 95, d: 'Daños a terceros y defensa legal.' }, asegApp[0].lista[1], { t: 'Hogar', p: 150, d: 'Incendio, robo, daños por agua y responsabilidad civil familiar.' }] },
];
const AUX = [
  { id: 'gr', nombre: 'Grúas El Rápido', ciudad: 'Caracas', ok: true, ofrece: [['Remolque liviano', 30, 1.2, 80], ['Cambio de caucho', 15, 0.8, 30]] },
  { id: 'avc', nombre: 'Auxilio Vial Centro', ciudad: 'Valencia', ok: true, ofrece: [['Remolque liviano', 25, 1.0, 120], ['Paso de corriente', 12, 0.6, 40]] },
  { id: 'ra', nombre: 'Rescate Andino Grúas y Servicios Técnicos 24 horas', ciudad: 'Mérida', ofrece: [['Remolque pesado', 80, 2.5, 200]] },
];
const AVC = { ...auxilioEmpresa, flota: 6, hace: ['Remolque liviano', 'Paso de corriente', 'Cambio de caucho', 'Suministro de gasolina'], ofrece: [...auxilioEmpresa.ofrece, { servicio: 'Cambio de caucho', base: 15, km: 0.6, hasta: 40, flota: 2 }] };
const CURSOS = [
  { id: 'split', area: 'Climatización', nivel: 'Básico', t: 'Instalación de aires split paso a paso', d: 'Desde la elección del sitio hasta el vacío y la prueba final.', clases: 12, dur: '3 h 20 min', r: 4.8, p: 0, art: 'aa12' },
  { id: 'inv', area: 'Climatización', nivel: 'Intermedio', t: 'Diagnóstico de equipos inverter', d: 'Lee códigos de error y mide sensores sin cambiar piezas de más.', clases: 9, dur: '2 h 45 min', r: 4.9, p: 25, art: 'tarj' },
  { id: 'gas', area: 'Refrigeración', nivel: 'Básico', t: 'Carga de gas refrigerante sin riesgos', d: 'Presiones, temperaturas y seguridad con R410A y R32.', clases: 8, dur: '1 h 50 min', r: 0, p: 0, art: 'gas' },
  { id: 'tab', area: 'Electricidad', nivel: 'Intermedio', t: 'Tableros residenciales y protecciones', d: 'Dimensiona breakers y cableado según la carga.', clases: 10, dur: '2 h 30 min', r: 4.6, p: 18, art: 'led' },
  { id: 'fv', area: 'Energía solar', nivel: 'Básico', t: 'Primeros pasos en sistemas fotovoltaicos', d: 'Paneles, inversores y baterías para hogares.', clases: 7, dur: '1 h 40 min', r: 4.7, p: 0, art: 'bulb' },
  { id: 'cav', area: 'Refrigeración', nivel: 'Avanzado', t: 'Cavas y refrigeración comercial', d: 'Ciclos, controles y mantenimiento preventivo.', clases: 14, dur: '4 h 10 min', r: 4.9, p: 40, art: 'nev14' },
];
const AREAS = [['Todos', 18], ['Climatización', 7], ['Refrigeración', 4], ['Electricidad', 5], ['Energía solar', 2]];
const INV = {
  dominaras: ['Interpretar códigos de error de las marcas más comunes', 'Medir termistores y compararlos con su tabla', 'Probar el módulo IPM sin desmontarlo', 'Diferenciar falla de placa y falla de compresor', 'Revisar la comunicación entre unidades', 'Documentar el diagnóstico para el cliente'],
  sobre: 'Un curso práctico grabado en taller, con equipos reales de 9.000 a 24.000 BTU. Cada clase termina con un caso para resolver.',
  dirigido: 'Técnicos que ya instalan equipos split y quieren reparar inverter.', requisitos: 'Manejo básico del multímetro y del manómetro.',
  temario: [['Cómo piensa un equipo inverter', [['Del on/off al inverter', 12, true], ['Partes de la placa', 18]]], ['Medir sin adivinar', [['Termistores y su tabla', 20, true], ['Probar el IPM', 22], ['Sensor de presión', 15]]],
    ['Casos reales', [['Caso 1: no enfría', 28], ['Caso 2: apaga a los 30 segundos', 20], ['Caso 3: ruido en la condensadora', 18], ['Caso 4: error de comunicación', 12]]]], // INVENTADO: casos 3 y 4 (el Figma solo dice 3 módulos y 9 clases)
  opiniones: [['Luis P.', '03/10/2026', 5, 'Por fin entendí cómo probar el IPM. Me ahorré un compresor.'], ['María T.', '21/09/2026', 4, 'Muy práctico. Faltan ejemplos de Daikin.']],
};
const FOROS = { aa: { n: 'Foro de aire acondicionado', area: 'Climatización', d: 'Técnicos que se ayudan a resolver averías de equipos split, inverter y de ventana.', resueltas: 214, tecnicos: 1380 } };
const PREGS = [
  { id: 'q1', t: 'Split inverter LG da error CH05 al arrancar', d: 'El equipo enciende pero a los 30 segundos muestra CH05. Ya revisé el cable de comunicación entre unidades y tiene continuidad. La unidad exterior no arranca. Adjunto fotos de la placa.', autor: 'Carlos Mendoza', meta: 'Fundador', n: 6, fecha: '12/10/2026', fotos: 3 },
  { id: 'q2', t: 'Compresor rotativo hace ruido metálico al apagar', d: 'Equipo de ventana de 12.000 BTU, el ruido aparece sólo al apagar y dura dos segundos.', autor: 'Ana L. Pérez', n: 4, fecha: '08/10/2026' },
  { id: 'q3', t: '¿Cómo medir el termistor de descarga sin tabla?', d: 'No consigo la tabla del fabricante para un Midea viejo, ¿hay un rango típico?', autor: 'José Rodríguez', n: 9, fecha: '01/10/2026' },
];
const S = (globalThis.__vxServ ||= { inscrito: false, utiles: new Set() });

// ── Piezas ──────────────────────────────────────────────────────────────────
const stars = (r) => (r ? `<span class="w-stars5" aria-label="${num(r, 1)} de 5">${[1, 2, 3, 4, 5].map((i) => `<i class="${i <= Math.round(r) ? 'is-on' : ''}">${icon('star', 14)}</i>`).join('')}<b>${num(r, 1)}</b></span>` : '<span class="w-muted w-sm">Sin valoraciones</span>');
const wa = (label, msg) => `<button class="w-btn w-btn--wa" type="button" data-toast="${esc(msg)}">${icon('chat', 18)}${esc(label)}</button>`;
const perfilHead = ({ ic, nombre, rol, rating, ciudad, ok = true, ahora = true }) => `<section class="w-panel w-prof"><span class="w-prof__ico">${icon(ic, 32)}</span>
  <div><h1 class="w-title w-title--md">${esc(nombre)} ${ok ? badge('Verificado por VexBiz', 'info', 'check') : ''}</h1><p class="w-lede w-lede--sm">${esc(rol)}</p><p class="w-chiprow">${stars(rating)}<span class="w-muted w-sm">· ${esc(ciudad)}</span></p></div>
  ${ahora ? badge('Disponible ahora', 'info', 'clock') : badge('Responde en el día', 'neutral', 'clock')}</section>`;
const datos = (list) => `<ul class="w-facts">${list.map(([ic, k, v]) => `<li>${icon(ic, 24)}<span><small>${esc(k)}</small><b>${esc(v)}</b></span></li>`).join('')}</ul>`;
const chips = (list) => `<p class="w-chipsline">${list.map((t) => `<span>${esc(t)}</span>`).join('')}</p>`;
const col = (h) => `<div class="w-wrap w-narrow2">${h}</div>`;
const card = (inner, cls = '') => `<section class="w-panel w-card2 ${cls}">${inner}</section>`;

// ── 04.01 · Perfil de técnico ───────────────────────────────────────────────
export const tecnicoPage = { code: '04.01', label: 'MARKETPLACE', title: 'Perfil de técnico', render(q) {
  const p = PREST.find((x) => x.id === q.id && x.tipo === 'tecnico') || PREST[2], nombre = p.nombre.split(' ')[0];
  return col(`${perfilHead({ ic: 'wrench', nombre: p.nombre, rol: p.rol, rating: p.rating, ciudad: p.ciudad || p.donde.split(' · ')[0], ok: p.ok, ahora: p.ahora !== false })}
    ${datos([['star', 'Experiencia', `${p.anios || 4} años`], ['pin', 'Cobertura', p.donde.split(' · ')[0]], ['wrench', 'Oficios', `${(p.oficios || p.tags).length} oficios`], ['school', 'Academia', `Nivel ${p.nivel || 1}`], ['users', 'Comunidad técnica', p.fundador ? 'Técnico fundador' : 'Miembro'], ['check', 'Respuestas que resolvieron', `${p.resueltas || 0} averías`]])}
    ${card(`<h2>Qué hace</h2>${chips(p.oficios || p.tags)}`)}
    ${card(`<h2>Sobre ${esc(nombre)}</h2><p>${esc(p.sobre ? `${p.sobre} Explico al cliente cómo cuidar su equipo. Atiendo Valencia, Naguanagua y San Diego.` : p.texto)}</p>`)}
    ${wa('Solicitar este servicio', `Te escribimos por WhatsApp con ${p.nombre} para pedir el servicio`)}`);
} };

// ── 04.02 · Ficha de empresa de servicio ────────────────────────────────────
export const empresaServPage = { code: '04.02', label: 'MARKETPLACE', title: 'Empresa de servicio', render() {
  const p = PREST[0];
  return col(`${perfilHead({ ic: 'store', nombre: p.nombre, rol: 'Empresa de servicio técnico', rating: p.rating, ciudad: 'Valencia' })}
    ${datos([['map', 'Provincia', 'Carabobo'], ['wrench', 'Servicios', `${p.servicios.length} servicios`], ['explore', 'Verticales', p.oficios.join(' · ')]])}
    ${card(`<h2>Qué hace</h2>${chips(p.servicios)}`)}
    ${wa('Solicitar este servicio', 'Te escribimos por WhatsApp con ClimaPro Servicios para pedir el servicio')}`);
} };

// ── 04.03 · Servicio técnico ────────────────────────────────────────────────
export const serviciosPage = { code: '04.03', label: 'MARKETPLACE', title: 'Servicio técnico', render() {
  return `<div class="w-wrap"><h1 class="w-title">Servicio técnico</h1><p class="w-lede">Elige qué necesitas reparar y te ponemos en contacto con quien lo hace.</p>
    <ul class="w-oficios">${OFICIOS.map((o) => `<li>${o.n ? `<a href="#/prestadores?oficio=${o.id}">` : `<button type="button" data-toast="Te escribimos por WhatsApp para buscar quien haga «${esc(o.nombre)}»">`}<span class="w-oficios__ico">${icon('wrench', 22)}</span><span><b>${esc(o.nombre)}</b><small class="${o.n ? 'w-good' : ''}">${o.n ? `${o.n} disponibles` : 'Escríbenos por WhatsApp'}</small></span>${icon(o.n ? 'chevron' : 'chat', 20)}${o.n ? '</a>' : '</button>'}</li>`).join('')}</ul>
    <p class="w-muted w-sm">${HORARIO}</p></div>`;
} };

// ── 04.04 · Quién presta el servicio ────────────────────────────────────────
export const prestadoresPage = { code: '04.04', label: 'MARKETPLACE', title: 'Quién presta el servicio', render(q) {
  const o = OFICIOS.find((x) => x.id === q.oficio) || OFICIOS[0];
  return `<div class="w-wrap"><a class="w-link" href="#/servicios">${icon('back', 18)}Servicio técnico</a><h1 class="w-title">${esc(o.nombre)}</h1>
    <p class="w-lede">Una empresa responde con respaldo formal y equipo; un técnico, con precio y trato directo. Elige tú.</p><p class="w-step-t">${o.n} disponibles en ${esc(o.nombre)}</p>
    <div class="w-grid w-grid--3">${PREST.map((p) => `<a class="w-panel w-pcard" href="${p.tipo === 'empresa' ? '#/empresa-servicio' : `#/tecnico?id=${p.id}`}">
      <span class="w-pcard__head"><span class="w-pcard__ico">${icon(p.tipo === 'empresa' ? 'store' : 'wrench', 20)}</span><span><b>${esc(p.nombre)} ${p.ok ? icon('check', 16) : ''}</b><small>${p.tipo === 'empresa' ? 'Empresa de servicio' : 'Técnico independiente'}</small></span></span>
      <span class="w-pcard__txt">${esc(p.texto)}</span><span class="w-muted w-sm">${icon('pin', 16)} ${esc(p.donde)}</span>${chips(p.tags.filter((t) => !t.startsWith('+')))}
      <span class="w-pcard__foot">${stars(p.rating)}${p.desde ? `<b>Desde ${money(p.desde)}</b>` : ''}</span></a>`).join('')}</div>
    <section class="w-help"><b>¿Prefieres que te ayudemos a elegir?</b>${wa('Escríbenos por WhatsApp', 'Te escribimos por WhatsApp para ayudarte a elegir')}</section></div>`;
} };

// ── 04.05 · Seguros ─────────────────────────────────────────────────────────
export const segurosPage = { code: '04.05', label: 'MARKETPLACE', title: 'Seguros', render() {
  return `<div class="w-wrap"><h1 class="w-title">Seguros</h1><p class="w-lede">Estas aseguradoras ofrecen pólizas en tu país. Pide cotización directo, por WhatsApp.</p>
    <div class="w-grid2 w-mt">${ASEG.map((a) => card(`<div class="w-aseg"><span class="w-prof__ico w-prof__ico--sm">${icon('shield', 22)}</span><div><a class="w-aseg__n" href="#/aseguradora?id=${a.id}">${esc(a.nombre)}</a> ${icon('check', 16)}<small class="w-muted">${esc(a.ciudad)}</small></div></div>
      <ul class="w-pol">${a.lista.slice(0, 2).map((l) => `<li><span><b>${esc(l.t)}${l.sub ? ` · ${esc(l.sub)}` : ''}</b><small>${esc(l.d)}</small></span><b>${money(l.p)} USD/año</b></li>`).join('')}</ul>
      ${wa('Pedir cotización', `Te escribimos por WhatsApp con ${a.nombre} para pedir la cotización`)}`)).join('')}</div>
    ${card(`<h2>¿Necesitas otro seguro?</h2><p class="w-lede w-lede--sm">Cuéntanos qué quieres asegurar y te preparamos una propuesta.</p>
      <ul class="w-otros">${otrosSeguros.map((t, i) => `<li><button type="button" data-toast="Te escribimos por WhatsApp para cotizar «${esc(t)}»"><span>${icon(['store', 'truck', 'person'][i], 20)}</span><span><b>${esc(t)}</b><small>Escríbenos por WhatsApp</small></span></button></li>`).join('')}</ul>
      <p class="w-muted w-sm">${HORARIO}</p>`, 'w-mt')}</div>`;
} };

// ── 04.06 · Ficha de aseguradora ────────────────────────────────────────────
export const aseguradoraPage = { code: '04.06', label: 'MARKETPLACE', title: 'Aseguradora', render(q) {
  const a = ASEG.find((x) => x.id === q.id) || ASEG[1];
  return col(`${perfilHead({ ic: 'shield', nombre: a.nombre, rol: 'Aseguradora', rating: a.rating, ciudad: a.ciudad })}
    ${datos([['map', 'Provincia', a.provincia], ['doc', 'Pólizas', `${a.lista.length} pólizas`]])}
    ${card(`<h2>Pólizas que ofrece</h2><ul class="w-pol">${a.lista.map((l) => `<li><span><b>${esc(l.t)}${l.sub ? ` · ${esc(l.sub)}` : ''}</b><small>${esc(l.d)}</small></span><b>${money(l.p)} USD al año</b></li>`).join('')}</ul>`)}
    ${wa('Pedir cotización', `Te escribimos por WhatsApp con ${a.nombre} para pedir la cotización`)}`);
} };

// ── 04.07 · Auxilio vial ────────────────────────────────────────────────────
export const auxilioPage = { code: '04.07', label: 'MARKETPLACE', title: 'Auxilio vial', render() {
  return `<div class="w-wrap"><div class="w-auxhead"><span class="w-auxhead__ico">${icon('truck', 30)}</span><div><h1 class="w-title">Auxilio vial</h1><p class="w-lede">Estas empresas salen a la carretera. Escríbeles directo: sin formularios.</p></div></div>
    <div class="w-grid w-grid--3 w-mt">${AUX.map((a) => card(`<div class="w-aux"><span class="w-pcard__ico">${icon('truck', 20)}</span><div><a class="w-aseg__n" href="#/auxilio-empresa?id=${a.id}">${esc(a.nombre)}</a><small class="w-muted">${esc(a.ciudad)}</small></div>${a.ok ? `<span class="w-good" aria-label="Verificada">${icon('check', 18)}</span>` : ''}</div>
      ${a.ofrece.map(([s, b, km, h]) => `<div class="w-box"><b>${esc(s)}</b><small>${money(b)} USD + ${money(km)}/km · hasta ${h} km</small></div>`).join('')}
      ${wa('Pedir auxilio por WhatsApp', `Te escribimos por WhatsApp con ${a.nombre}: cuéntales dónde estás`)}`)).join('')}</div>
    <div class="w-grid2 w-mt">${card(`<h2>Cuando escribas, cuéntales</h2><ul class="w-cuent">${cuentales.map((t, i) => `<li>${icon(['pin', 'car', 'car'][i], 20)}${esc(t)}</li>`).join('')}</ul>`)}
      ${card(`<h2>¿No sabes a quién llamar?</h2><p>Escríbenos y te mandamos ayuda. No hace falta que llenes nada.</p><button class="w-btn w-btn--waline" type="button" data-toast="Te escribimos por WhatsApp desde VexBiz">${icon('chat', 18)}Escribir a VexBiz</button><p class="w-muted w-sm">Atendemos todos los días, 24 horas.</p>`, 'w-card2--info')}</div></div>`;
} };

// ── 04.08 · Ficha de empresa de auxilio ─────────────────────────────────────
export const auxilioEmpresaPage = { code: '04.08', label: 'MARKETPLACE', title: 'Empresa de auxilio', render() {
  return col(`${perfilHead({ ic: 'truck', nombre: AVC.nombre, rol: 'Empresa de auxilio vial', rating: AVC.rating, ciudad: AVC.ciudad })}
    ${datos([['map', 'Provincia', AVC.provincia], ['pin', 'Radio de cobertura', `hasta ${AVC.radio} km`], ['truck', 'Flota', `${AVC.flota} vehículos`]])}
    ${card(`<h2>Qué hace</h2>${chips(AVC.hace)}`)}
    ${card(`<h2>Qué ofrece y cuánto cuesta</h2><ul class="w-pol">${AVC.ofrece.map((o) => `<li><span><b>${esc(o.servicio)}</b><small>Hasta ${o.hasta} km · flota de ${o.flota}</small></span><b>${money(o.base)} USD + ${money(o.km)} USD/km</b></li>`).join('')}</ul>`)}
    ${wa('Pedir auxilio por WhatsApp', 'Te escribimos por WhatsApp con Auxilio Vial Centro: cuéntales dónde estás')}`);
} };

// ── 04.09 · Academia ────────────────────────────────────────────────────────
const cursoCard = (c, i) => `<${c.id === 'inv' ? 'a href="#/curso?id=inv"' : `button type="button" data-toast="La portada de «${esc(c.t)}» usa el mismo diseño que la de Diagnóstico de equipos inverter"`} class="w-panel w-course" style="--i:${i}">
  <span class="w-course__img" aria-hidden="true">${productArt(producto(c.art))}</span>
  <span class="w-course__body"><small>${esc(c.area)} · ${esc(c.nivel)}</small><b>${esc(c.t)}</b><span class="w-muted w-sm">${esc(c.d)}</span>
  <span class="w-course__meta"><span>${icon('play', 16)}${c.clases} clases</span><span>${icon('clock', 16)}${c.dur}</span>${c.r ? `<span>${icon('star', 16)}${num(c.r, 1)}</span>` : ''}<b class="${c.p ? '' : 'w-good'}">${c.p ? money(c.p) : 'Gratis'}</b></span></span></${c.id === 'inv' ? 'a' : 'button'}>`;
export const academiaPage = { code: '04.09', label: 'MARKETPLACE', title: 'Academia VexBiz', render(q) {
  const a = AREAS.some(([t]) => t === q.area) ? q.area : 'Todos', list = CURSOS.filter((c) => a === 'Todos' || c.area === a);
  return `<div class="w-wrap"><h1 class="w-title">Academia VexBiz</h1><p class="w-lede">Cursos para tu oficio. Estudia a tu ritmo, gana puntos y súbelos a tu perfil.</p>
    <div class="w-chips" role="group" aria-label="Filtrar por área">${AREAS.map(([t, n]) => `<a class="w-chip" href="#/academia${t === 'Todos' ? '' : `?area=${encodeURIComponent(t)}`}" aria-pressed="${t === a}">${t === a ? icon('check', 16) : ''}${t} <span>${n}</span></a>`).join('')}</div>
    <div class="w-grid w-grid--3 w-stagger">${list.map(cursoCard).join('')}</div>
    <p class="w-muted w-sm">Se muestran ${list.length} de los cursos de la demo; el catálogo completo tiene ${AREAS.find(([t]) => t === a)[1]}.</p></div>`;
} };

// ── 04.10 · Portada del curso ───────────────────────────────────────────────
export const cursoPage = { code: '04.10', label: 'MARKETPLACE', title: 'Diagnóstico de equipos inverter', render() {
  const c = CURSOS[1];
  return `<section class="w-coursehero"><div class="w-in">${crumbs([['Academia', '#/academia'], ['Climatización', '#/academia?area=Climatizaci%C3%B3n'], [c.t]])}
      <p class="w-chiprow">${badge('Academia VexBiz', 'brand', 'school')}${badge('Climatización', 'neutral')}${badge('Nivel Intermedio', 'neutral')}</p>
      <h1>${esc(c.t)}</h1><p class="w-coursehero__lede">Lee códigos de error, mide sensores y encuentra la falla real antes de cambiar piezas.</p>
      <ul class="w-coursehero__meta"><li>${icon('play', 16)}9 clases prácticas</li><li>${icon('clock', 16)}2 h 45 min en video</li><li>${icon('desktop', 16)}100% Online · A tu ritmo</li><li>${icon('users', 16)}312 técnicos inscritos</li><li>${icon('eye', 16)}2 clases gratis de muestra</li></ul>
      <p class="w-chiprow"><span class="w-av w-av--sm">RM</span><b>Impartido por Ramón Márquez</b>${badge('Especialista verificado', 'info', 'check')}</p></div></section>
    <div class="w-wrap"><div class="w-checkout"><div class="w-checkout__main">
      ${card(`<h2>Lo que dominarás en este curso</h2><ul class="w-learn">${INV.dominaras.map((t) => `<li>${icon('check', 18)}${esc(t)}</li>`).join('')}</ul>`)}
      ${card(`<h2>Sobre este programa</h2><p>${esc(INV.sobre)}</p><div class="w-grid2"><div class="w-box"><b>¿A quién está dirigido?</b><p class="w-muted">${esc(INV.dirigido)}</p></div><div class="w-box"><b>Requisitos previos</b><p class="w-muted">${esc(INV.requisitos)}</p></div></div>`)}
      ${card(`<h2>Temario del curso</h2><p class="w-muted w-sm">3 módulos · 9 clases · 2 h 45 min</p>${INV.temario.map(([n, ls], i) => `<details class="w-mod"${i < 2 ? ' open' : ''}><summary><span>Módulo ${i + 1}</span><b>${esc(n)}</b><small>${ls.length} clases</small>${icon('chevron', 18)}</summary>
        <ul>${ls.map(([t, m, gratis]) => `<li>${gratis ? `<button type="button" data-toast="Reproduciendo la muestra gratis: ${esc(t)}">${icon('play', 18)}${esc(t)}</button>${badge('Muestra gratis', 'info')}` : `<span>${icon('play', 18)}${esc(t)}</span>`}<small>${m} min</small></li>`).join('')}</ul></details>`).join('')}`)}
      ${card(`<h2>Valoraciones de los participantes</h2><ul class="w-reviews">${INV.opiniones.map(([n, f, r, t]) => `<li><p class="w-chiprow">${stars(r)}<small class="w-muted">${n} · ${f}</small></p><p>${esc(t)}</p></li>`).join('')}</ul>`)}
      <ul class="w-trust w-trust--white"><li>${icon('wrench', 24)}<div><b>Enfoque 100% Práctico</b><p>Todo se graba con equipos reales.</p></div></li><li>${icon('check', 24)}<div><b>Criterio Técnico Confiable</b><p>Contenido revisado por especialistas.</p></div></li><li>${icon('star', 24)}<div><b>Acreditación VexBiz</b><p>Súmalo a tu perfil profesional.</p></div></li></ul></div>
      <aside class="w-panel w-buycourse"><span class="w-buycourse__img" aria-hidden="true">${productArt(producto('tarj'))}</span><div><p class="w-buycourse__price">${money(c.p)}</p><p class="w-muted w-sm">Pago único con acceso ilimitado.</p>
        <button class="w-btn w-btn--primary w-btn--block" type="button" data-ins>${icon('school', 18)}${S.inscrito ? 'Ya estás inscrito: ir a la lección' : 'Inscribirme al curso'}</button>
        <p class="w-step-t">Este curso incluye:</p><ul class="w-incl"><li>${icon('play', 18)}9 clases</li><li>${icon('clock', 18)}2 h 45 min de video</li><li>${icon('swap', 18)}Acceso sin caducidad</li><li>${icon('download', 18)}Material descargable</li><li>${icon('star', 18)}Acreditación en tu perfil</li></ul>
        <a class="w-link" href="#/academia">${icon('back', 18)}Explorar todos los cursos</a></div></aside></div></div>`;
}, mount(root) {
  root.querySelector('[data-ins]').addEventListener('click', () => { if (S.inscrito) { location.hash = '#/leccion'; return; } S.inscrito = true; toast('Te inscribiste: el curso aparece en Mis cursos'); window.dispatchEvent(new HashChangeEvent('hashchange')); });
} };

// ── 04.11 · Foro público de una comunidad ───────────────────────────────────
export const foroPage = { code: '04.11', label: 'MARKETPLACE', title: 'Foro de aire acondicionado', render() {
  const f = FOROS.aa;
  return col(`<section class="w-panel w-forohead"><span class="w-forohead__band" aria-hidden="true">${['aa12', 'comp', 'tarj', 'ctrl'].map((id) => productArt(producto(id))).join('')}</span>
      <div class="w-forohead__body"><p class="w-muted w-sm">Comunidad técnica · ${esc(f.area)}</p><h1 class="w-title w-title--md">${esc(f.n)}</h1><p class="w-lede w-lede--sm">${esc(f.d)}</p><p><b>${f.resueltas} averías resueltas · ${num(f.tecnicos, 0)} técnicos</b></p>
      <p class="w-btnrow"><a class="w-btn w-btn--primary" href="#/comunidad">${icon('chat', 18)}Soy técnico: entrar al foro</a><a class="w-btn w-btn--ghost" href="#/prestadores?oficio=aa">${icon('wrench', 18)}Necesito que me lo reparen</a></p></div></section>
    ${card(`<h2>Preguntas resueltas</h2><ul class="w-qlist">${PREGS.map((p) => `<li><a href="#/pregunta?id=${p.id}"><b>${icon('check', 18)}${esc(p.t)}</b><span>${esc(p.d.length > 120 ? `${p.d.slice(0, 117)}…` : p.d)}</span><small>${esc(p.autor)}${p.meta ? ` · ${p.meta}` : ''} · ${p.n} respuestas · ${p.fecha}</small></a></li>`).join('')}</ul>`, 'w-mt')}`);
} };

// ── 04.12 · Pregunta resuelta ───────────────────────────────────────────────
export const preguntaPage = { code: '04.12', label: 'MARKETPLACE', title: 'Pregunta resuelta', render(q) {
  const p = PREGS.find((x) => x.id === q.id) || PREGS[0], base = preguntasIni.find((x) => x.id === 'q1');
  const r1 = base.respuestas[0], r2 = base.respuestas[1];
  const util = (id, n) => `<button class="w-btn w-btn--text" type="button" data-util="${id}" aria-pressed="${S.utiles.has(id)}">${icon('thumb', 16)}${n + (S.utiles.has(id) ? 1 : 0)} técnicos lo marcaron útil</button>`;
  return col(`<a class="w-link" href="#/foro?id=aa">${icon('back', 18)}Foro de aire acondicionado</a>
    ${card(`${badge('Resuelta', 'info', 'check')}<h1 class="w-title w-title--md">${esc(p.t)}</h1><p class="w-chiprow"><span class="w-av w-av--sm w-av--ink">CM</span><a class="w-link w-link--sm" href="#/tecnico?id=cm">${esc(p.autor)}</a>${p.meta ? badge(p.meta, 'brand') : ''}${badge('Certificado en Climatización', 'neutral')}<small class="w-muted">${p.fecha}</small></p>
      <p>${esc(p.d)}</p>${p.fotos ? `<div class="w-photos">${Array.from({ length: p.fotos }, (_, i) => `<span role="img" aria-label="Foto ${i + 1} de la placa">${productArt(producto('tarj'))}</span>`).join('')}</div>` : ''}`)}
    <h2 class="w-sub2">${p.n} respuestas</h2>
    ${card(`<p class="w-resolved">${icon('check', 18)}Le resolvió a quien preguntó</p><p>${esc(r1.t.replace('CH05 en LG es error de comunicación.', 'CH05 en LG es error de comunicación. Si el cable está bien,'))}</p>
      <div class="w-photos w-photos--2">${[1, 2].map((i) => `<span role="img" aria-label="Foto ${i} de la medición">${productArt(producto('tarj'))}</span>`).join('')}</div>
      <p class="w-acc__head"><span class="w-chiprow"><span class="w-av w-av--sm w-av--ink">RM</span><b>${esc(r1.autor)}</b>${badge('Verificado', 'neutral')}<small class="w-muted">12/10/2026</small></span>${util('r1', 14)}</p>`, 'w-card2--info')}
    ${card(`<p>${esc(r2.t)} Un neutro flojo da el mismo error.</p><p class="w-acc__head"><span class="w-chiprow"><span class="w-av w-av--sm w-av--ink">AP</span><b>${esc(r2.autor)}</b><small class="w-muted">Certificado en Climatización · 13/10/2026</small></span>${util('r2', 5)}</p>`)}
    <section class="w-help w-help--warm"><div><b>¿Necesitas que te lo reparen?</b><p>Técnicos de Climatización verificados por VexBiz, con el precio antes de contratar.</p></div><a class="w-btn w-btn--primary" href="#/prestadores?oficio=aa">${icon('wrench', 18)}Pide un técnico</a></section>
    <p class="w-muted w-sm">¿Eres técnico? Mira el hilo en el foro y pregunta o responde en tu oficio.</p>`);
}, mount(root) {
  root.addEventListener('click', (e) => { const b = e.target.closest('[data-util]'); if (!b) return; const id = b.dataset.util; if (S.utiles.has(id)) S.utiles.delete(id); else { S.utiles.add(id); toast('Marcaste la respuesta como útil'); } window.dispatchEvent(new HashChangeEvent('hashchange')); });
} };

export const RUTAS_SERV = {
  tecnico: tecnicoPage, 'empresa-servicio': empresaServPage, servicios: serviciosPage, prestadores: prestadoresPage, seguros: segurosPage, aseguradora: aseguradoraPage,
  auxilio: auxilioPage, 'auxilio-empresa': auxilioEmpresaPage, academia: academiaPage, curso: cursoPage, foro: foroPage, pregunta: preguntaPage,
};
