// 07 · Mi trabajo (Modo Técnico): bandeja, ejecutar, cerrar con firma, oficios, servicios y tarifas, cobertura y agenda,
// documentos, perfil profesional, compras de trabajo y membresía. Datos de la app (data3.js) y lo que solo trae el Figma web.
import { solicitudesIni, horarioIni } from '../../../assets/js/data3.js';
import { icon, esc, money, badge, notice, crumbs, toast } from '../kit.js';

// ── Datos del Figma web ─────────────────────────────────────────────────────
const H = 3600000;
export const HOY = new Date(2026, 9, 16); // la demo vive el jueves 16/10/2026, como el Figma
const ORDENES = [
  { id: 'o1', cliente: 'Luis Pérez', servicio: 'Instalación de aire split 12.000 BTU', tag: 'Instalación de Compra en Marketplace', donde: 'Res. Las Acacias, Torre 2, Apto 8-B · Naguanagua', estado: 'asignado' },
  { id: 'o2', cliente: 'Ana Torres', servicio: 'Mantenimiento preventivo de aire acondicionado', donde: 'C.C. Sambil, Local N-24 · Valencia', estado: 'agendado', cuando: 'Vie 17/10 · 10:00' }, // INVENTADO: servicio
  { id: 'o3', cliente: 'Pedro Silva', servicio: 'Instalación de una compra', donde: 'Calle Páez 45 · San Diego', estado: 'curso', cuando: 'Jue 16/10 · 8:30' },
];
const OFICIOS = [
  { id: 'cl', n: 'Climatización', ic: 'wrench', estado: 'certificado' },
  { id: 'rc', n: 'Refrigeración comercial', ic: 'box', estado: 'revision' },
  { id: 'er', n: 'Electricidad residencial', ic: 'key', estado: 'revision' },
];
const DISPONIBLES = [['Plomería', 'wrench'], ['Automotriz', 'car'], ['Línea blanca', 'home'], ['Seguridad electrónica', 'shield'], ['Redes y cableado', 'globe'], ['Energía solar', 'star']];
const SERVICIOS = [
  { id: 'sv1', t: 'Instalación de aire split hasta 18.000 BTU', oficio: 'Climatización', min: 180, d: 'Incluye montaje de evaporadora y condensadora, vacío y prueba. Kit de instalación aparte.', precio: 60, on: true },
  { id: 'sv2', t: 'Mantenimiento preventivo de aire acondicionado', oficio: 'Climatización', min: 90, d: 'Limpieza de filtros, serpentines y drenaje, revisión de presiones.', precio: 25, on: true },
  { id: 'sv3', t: 'Carga de gas refrigerante', oficio: 'Climatización', min: 60, d: 'Detección de fuga básica y recarga. El gas se cobra aparte.', precio: 20, on: false },
];
const DOCS = [
  { id: 'ced', n: 'Cédula de identidad', ob: true, estado: 'verificado', meta: 'Subido el 02/10/2026 · Válido hasta: 05/2031' },
  { id: 'cer', n: 'Certificado de oficio (Climatización)', ob: true, estado: 'rechazado', ayuda: 'Título, curso o constancia de un instituto reconocido.', meta: 'Subido el 10/10/2026', motivo: 'La imagen está borrosa y no se lee el nombre del instituto. Sube una foto más nítida.' },
  { id: 'ant', n: 'Antecedentes penales', ob: true, estado: 'pendiente', ayuda: 'Emitido hace menos de 6 meses.' },
  { id: 'pol', n: 'Póliza de responsabilidad civil', ob: false, estado: 'pendiente', ayuda: 'Te da prioridad en trabajos de empresas.' },
];
const COMPRAS = [
  { donde: 'Calle Páez 45, San Diego', ot: '#OT-3307', items: [['#VX-20501', 'Repuestos Frío', '15/10/2026', 21.5, 'Entregado'], ['#VX-20512', 'Ferretería El Tornillo', '15/10/2026', 6.5, 'En camino']] },
  { donde: 'Urb. El Viñedo, Calle 4, Casa 12 · Valencia', ot: '#OT-3311', items: [['#VX-20530', 'Herramientas Andina', '16/10/2026', 48, 'Pago reportado']] },
  { donde: 'Compra técnica general', items: [['#VX-20377', 'Repuestos Express', '02/10/2026', 45.6, 'Entregado']] },
];
const PLANES = [
  { id: 'basico', n: 'Técnico Básico', precio: 9.9, lista: ['Apareces en el directorio de tu zona', 'Hasta 20 solicitudes al mes', 'Perfil profesional verificado', 'Soporte por correo'] },
  { id: 'pro', n: 'Técnico Pro', precio: 24.9, rec: true, lista: ['Todo lo del plan Básico', 'Solicitudes ilimitadas', 'Prioridad en trabajos de instalación de compras', 'Insignia «Técnico Pro» en tu perfil', 'Soporte por WhatsApp'] },
];

// Estado de la demo (en memoria; se pierde al recargar).
const t0 = Date.now();
export const S = (globalThis.__vxTec ||= {
  sols: solicitudesIni.filter((s) => s.estado === 'pendiente').map((s) => ({ ...s, venceAt: t0 + s.venceEn })),
  ords: ORDENES.map((o) => ({ ...o })), oficios: OFICIOS.map((o) => ({ ...o })), servicios: SERVICIOS.map((s) => ({ ...s })),
  horario: horarioIni.map((h) => ({ ...h })), radio: 25, docs: DOCS.map((d) => ({ ...d })),
  perfil: { desc: 'Técnico en climatización con 9 años instalando y reparando aires split y de ventana en Valencia y San Diego. Trabajo limpio, garantía en mano de obra y precios claros.', anios: 9 },
  parte: { encontraste: 'Fuga en la tuerca flare de la condensadora. El equipo había perdido carga y no enfriaba. Se cambió la tuerca.', repuestos: 'Tuerca flare 1/4", 1 kg de gas R410A', costo: '28,00' },
  pendientes: 2, cerrado: false,
});

// ── Armazón compartido ──────────────────────────────────────────────────────
const MENU = [['mi-trabajo', 'Mi trabajo', 'briefcase'], ['oficios', 'Mis oficios', 'wrench'], ['mis-servicios', 'Mis servicios', 'toolbox'], ['agenda', 'Cobertura y agenda', 'map'], ['documentos', 'Mis documentos', 'doc'], ['perfil-profesional', 'Mi perfil profesional', 'idcard'], ['compras-trabajo', 'Compras de trabajo', 'bag'], ['membresia', 'Membresía', 'desktop']];
export const sidePanel = (titulo, items, activo, body) => `<div class="w-wrap w-acc"><nav class="w-panel w-side" aria-label="${titulo}"><button class="w-side__m" type="button" aria-expanded="false">${icon('menu', 22)}<span><b>${titulo} › ${(items.find(([k]) => k === activo) || items[0])[1]}</b><small>Ir a otra sección</small></span>${icon('chevron', 20)}</button><p class="w-side__t">${titulo}</p><ul>${items.map(([k, n, ic]) => `<li><a href="#/${k}"${k === activo ? ' aria-current="page"' : ''}>${icon(ic, 22)}<span>${n}</span>${k === activo ? '<small>Aquí</small>' : ''}</a></li>`).join('')}</ul></nav><div class="w-acc__main">${body}</div></div>`;
const panel = (activo, body) => sidePanel('Mi trabajo', MENU, activo, body);
export const head = (list, title, sub = '', action = '') => `${crumbs(list)}<div class="w-acc__head"><div><h1 class="w-title">${title}</h1>${sub ? `<p class="w-lede">${sub}</p>` : ''}</div>${action}</div>`;
export const card = (inner, cls = '') => `<section class="w-panel w-card2 ${cls}">${inner}</section>`;
export const pager = (extra = '') => `<nav class="w-pager" aria-label="Páginas">${extra}<button type="button" class="w-btn w-btn--text" disabled>${icon('back', 18)}Anterior</button><span>Página 1</span><button type="button" class="w-btn w-btn--text" disabled>Siguiente${icon('chevron', 18)}</button></nav>`;
export const area = (id, label, val, max, { min = 0, help = '', ph = '' } = {}) => `<div class="w-field"><label for="${id}">${label}</label><textarea class="w-input w-input--area" id="${id}" maxlength="${max}" placeholder="${esc(ph)}" data-count="${id}"${min ? ` data-min="${min}"` : ''}>${esc(val)}</textarea><span class="w-field__meta"><small>${help}</small><small data-countout="${id}">${val.length} / ${max}</small></span></div>`;
export const wireCounts = (root) => root.querySelectorAll('[data-count]').forEach((ta) => ta.addEventListener('input', () => { root.querySelector(`[data-countout="${ta.id}"]`).textContent = `${ta.value.length} / ${ta.maxLength}`; }));
const page = (code, title, render, mount) => ({ code, label: 'MI TRABAJO', title, sesion: 'login', render, mount });
const ms = (n) => { const h = Math.floor(n / H), m = Math.floor((n % H) / 60000); return h ? `${h} h${m ? ` ${m} min` : ''}` : `${m} min`; };
export const parseMoney = (v) => Number(String(v).replace(/\./g, '').replace(',', '.').replace(/[^\d.]/g, '')) || 0;
const fecha = (d) => d.toLocaleDateString('es-VE', { day: '2-digit', month: '2-digit', year: 'numeric' });
/** Fecha en que termina una garantía de `meses` meses contada desde hoy (16/10/2026). */
export const garantiaHasta = (meses) => { const d = new Date(HOY); d.setMonth(d.getMonth() + meses); return fecha(d); };

// ── 07.01 · Bandeja del técnico ─────────────────────────────────────────────
const solCard = (s) => {
  const quedan = s.venceAt - Date.now();
  return `<li class="w-job" data-sol="${s.id}"><div class="w-job__top"><div><h3>${esc(s.servicio)}</h3><p class="w-muted">${icon('person', 18)}${esc(s.cliente)} · ${esc(s.direccion)} · ${esc(s.ciudad)}</p></div>${badge(s.cuando, 'neutral', 'calendar')}</div>
    ${s.notas ? `<p class="w-job__note">${esc(s.notas.split('. ')[0])}.</p>` : ''}
    <p class="w-job__due${quedan < 6 * H ? ' is-hot' : ''}">${icon('clock', 18)}<span>Caduca ${esc(s.venceTxt)} · <b data-left="${s.id}">quedan ${ms(Math.max(0, quedan))}</b></span></p>
    <div class="w-btnrow" data-act><button class="w-btn w-btn--primary" type="button" data-ok="${s.id}">${icon('check', 18)}Aceptar solicitud</button><button class="w-btn w-btn--ghost" type="button" data-no="${s.id}">${icon('close', 18)}Rechazar</button></div></li>`;
};
const ESTADO_O = { asignado: ['Asignado · sin fecha', 'warn', 'calendar'], agendado: ['Agendado', 'info', 'calendar'], curso: ['En curso', 'ok', 'play'], hecho: ['Terminado', 'neutral', 'check'] };
const ordCard = (o) => {
  const [txt, k, ic] = ESTADO_O[o.estado];
  const act = { asignado: `<form class="w-inline w-job__date" novalidate data-fecha="${o.id}"><div class="w-field"><label for="f-${o.id}">Fecha y hora acordadas</label><input class="w-input" id="f-${o.id}" type="datetime-local" min="2026-10-16T07:00" value="2026-10-18T09:00"></div><button class="w-btn w-btn--primary" type="submit">${icon('calendar', 18)}Ponerle fecha al trabajo</button></form>`,
    agendado: `<button class="w-btn w-btn--primary" type="button" data-iniciar="${o.id}">${icon('play', 18)}Iniciar trabajo en sitio</button>`,
    curso: `<a class="w-btn w-btn--primary" href="#/trabajo">${icon('edit', 18)}Completar parte de trabajo</a>`,
    hecho: `<span class="w-muted">${icon('check', 18)}Cerrado con firma del cliente</span>` }[o.estado];
  return `<li class="w-job"><div class="w-job__top"><div><h3>${esc(o.cliente)} ${o.tag ? badge(o.tag, 'brand', 'bag') : ''}</h3><p class="w-muted">${esc(o.servicio)}</p><p class="w-muted">${icon('pin', 18)}${esc(o.donde)}</p></div>${badge(o.cuando ? `${txt} ${o.cuando}` : txt, k, ic)}</div>
    <div class="w-job__foot">${act}<span class="w-btnrow"><button class="w-btn w-btn--ghost" type="button" data-toast="Llamando a ${esc(o.cliente)}…">${icon('phone', 18)}Llamar</button><button class="w-btn w-btn--ghost" type="button" data-toast="Abrimos la ruta en tu app de mapas">${icon('map', 18)}Mapa</button></span></div></li>`;
};
const bandeja = page('07.01', 'Mi trabajo y servicios', () => panel('mi-trabajo', `${head([['Mi trabajo']], 'Mi Trabajo y Servicios', 'Lo que te piden los clientes y lo que tienes que hacer hoy.', badge('Habilitado para recibir trabajos', 'ok', 'check'))}
  ${card(`<div class="w-card2__head"><h2>Solicitudes por responder <span class="w-num" data-nsol>${S.sols.length}</span></h2><p class="w-muted w-sm">${icon('clock', 16)}Caducan si no se contestan</p></div>
    <ul class="w-jobs" data-sols>${S.sols.length ? S.sols.map(solCard).join('') : `<li class="w-empty">${icon('inbox', 28)}<b>No tienes solicitudes por responder</b><span>Cuando un cliente te pida un servicio aparece aquí.</span></li>`}</ul>${pager()}`)}
  ${card(`<div class="w-card2__head"><h2>Órdenes de Trabajo Activas <span class="w-num">${S.ords.filter((o) => o.estado !== 'hecho').length}</span></h2></div><ul class="w-jobs" data-ords>${S.ords.map(ordCard).join('')}</ul>${pager()}`)}`),
(root) => {
  const tick = setInterval(() => S.sols.forEach((s) => { const el = root.querySelector(`[data-left="${s.id}"]`); if (el) el.textContent = `quedan ${ms(Math.max(0, s.venceAt - Date.now()))}`; }), 30000);
  const rerender = () => window.dispatchEvent(new HashChangeEvent('hashchange'));
  root.addEventListener('click', (e) => {
    const ok = e.target.closest('[data-ok]'), no = e.target.closest('[data-no]'), yes = e.target.closest('[data-yesno]'), keep = e.target.closest('[data-keep]'), ini = e.target.closest('[data-iniciar]');
    if (ok) { const s = S.sols.find((x) => x.id === ok.dataset.ok); S.sols = S.sols.filter((x) => x !== s); S.ords.unshift({ id: `n${Date.now()}`, cliente: s.cliente, servicio: s.servicio, donde: `${s.direccion} · ${s.ciudad}`, estado: 'agendado', cuando: s.cuando }); toast(`Aceptaste la solicitud de ${s.cliente}: ya está en tus órdenes`); rerender(); }
    if (no) { const box = no.closest('[data-act]'); box.innerHTML = `${notice('warn', 'warning', '<b>¿Rechazar esta solicitud?</b>El cliente la verá rechazada y podrá pedírsela a otro técnico.')}<p class="w-btnrow"><button class="w-btn w-btn--danger" type="button" data-yesno="${no.dataset.no}">Sí, rechazar</button><button class="w-btn w-btn--text" type="button" data-keep>Cancelar</button></p>`; box.querySelector('[data-yesno]').focus(); }
    if (yes) { S.sols = S.sols.filter((x) => x.id !== yes.dataset.yesno); toast('Rechazaste la solicitud'); rerender(); }
    if (keep) rerender();
    if (ini) { const o = S.ords.find((x) => x.id === ini.dataset.iniciar); o.estado = 'curso'; o.cuando = 'Hoy · ' + new Date().toTimeString().slice(0, 5); toast(`Empezaste el trabajo de ${o.cliente}`); rerender(); }
  });
  root.addEventListener('submit', (e) => {
    const f = e.target.closest('[data-fecha]'); if (!f) return; e.preventDefault();
    const v = f.querySelector('input').value; if (!v) { toast('Elige la fecha y la hora'); return; }
    const d = new Date(v); if (d < HOY) { toast('No puedes elegir una fecha pasada'); return; }
    const o = S.ords.find((x) => x.id === f.dataset.fecha); o.estado = 'agendado'; o.cuando = `${d.toLocaleDateString('es-VE', { day: '2-digit', month: '2-digit' })} · ${v.slice(11, 16)}`;
    toast(`Trabajo de ${o.cliente} agendado`); rerender();
  });
  return () => clearInterval(tick);
});

// ── 07.02 · Ejecutar el trabajo ─────────────────────────────────────────────
const PARTE = [['encontraste', 'Qué encontraste', 1000, true], ['repuestos', 'Repuestos usados', 300, false], ['costo', 'Lo que costaron ($)', 12, false]];
const offline = () => S.pendientes ? notice('warn', 'wifioff', `<b>${S.pendientes} ${S.pendientes === 1 ? 'cambio guardado' : 'cambios guardados'} aquí</b>Se envían solos cuando haya señal.`, '<button class="w-btn w-btn--ghost" type="button" data-sync>Intentar ahora</button>') : notice('info', 'check', '<b>Todo enviado</b>Tu parte está al día en VexBiz.');
const ejecutar = page('07.02', 'Ejecutar el trabajo', () => panel('mi-trabajo', `<a class="w-link" href="#/mi-trabajo">${icon('back', 18)}Volver a mi trabajo</a>
  ${S.cerrado ? card(`${notice('info', 'check', '<b>Este trabajo ya está cerrado</b>Un trabajo cerrado no se reabre.')}<a class="w-btn w-btn--primary" href="#/mi-trabajo">Ir a mi trabajo</a>`) : `
  ${card(`<div class="w-card2__head"><div><h1 class="w-title w-title--md">Pedro Silva</h1><p class="w-muted">${icon('pin', 18)}Calle Páez 45, San Diego, Carabobo</p></div><span class="w-btnrow"><button class="w-btn w-btn--ghost" type="button" data-toast="Llamando a Pedro Silva…">${icon('phone', 18)}Llamar</button><button class="w-btn w-btn--ghost" type="button" data-toast="Abrimos la ruta en tu app de mapas">${icon('map', 18)}Cómo llegar</button></span></div>
    <div data-net>${offline()}</div>
    <p class="w-chiprow">${badge('En curso', 'ok', 'play')}<span class="w-muted w-sm">Empezado jue 16/10/2026 · 8:42</span></p>`)}
  ${card(`<div class="w-card2__head"><h2>El parte</h2><p class="w-muted w-sm">Se guarda solo, campo a campo.</p></div>
    <form class="w-formcol" novalidate data-parte>${PARTE.map(([k, l, max, big]) => `<div class="w-field"><span class="w-field__top"><label for="pt-${k}">${l}</label><small class="w-saved" data-st="${k}">${icon('check', 14)}Guardado</small></span>${big ? `<textarea class="w-input w-input--area" id="pt-${k}" maxlength="${max}" data-k="${k}">${esc(S.parte[k])}</textarea><small class="w-right" data-n>${S.parte[k].length} / ${max}</small>` : `<input class="w-input" id="pt-${k}" maxlength="${max}" data-k="${k}" value="${esc(S.parte[k])}"${k === 'costo' ? ' inputmode="decimal"' : ''}>`}</div>`).join('')}</form>
    <a class="w-btn w-btn--primary" href="#/cerrar-trabajo">${icon('check', 18)}Cerrar el trabajo</a>`)}`}`),
(root) => {
  const timers = {};
  root.addEventListener('input', (e) => {
    const el = e.target.closest('[data-k]'); if (!el) return; const k = el.dataset.k, st = root.querySelector(`[data-st="${k}"]`);
    S.parte[k] = el.value; if (el.tagName === 'TEXTAREA') el.parentElement.querySelector('[data-n]').textContent = `${el.value.length} / ${el.maxLength}`;
    st.innerHTML = `${icon('clock', 14)}Guardando…`; clearTimeout(timers[k]);
    timers[k] = setTimeout(() => { st.innerHTML = `${icon('check', 14)}Guardado en el teléfono`; S.pendientes += 1; root.querySelector('[data-net]').innerHTML = offline(); }, 700);
  });
  root.addEventListener('click', (e) => {
    if (!e.target.closest('[data-sync]')) return; const b = e.target.closest('[data-sync]'); b.disabled = true; b.textContent = 'Enviando…';
    setTimeout(() => { S.pendientes = 0; root.querySelector('[data-net]').innerHTML = offline(); toast('Cambios enviados a VexBiz'); }, 900);
  });
  return () => Object.values(timers).forEach(clearTimeout);
});

// ── 07.03 · Cerrar el trabajo (firma) ───────────────────────────────────────
const cerrar = page('07.03', 'Cerrar el trabajo', () => panel('mi-trabajo', `<a class="w-link" href="#/trabajo">${icon('back', 18)}Volver al parte</a>
  ${S.cerrado ? card(`${notice('info', 'check', '<b>Trabajo cerrado</b>Pedro Silva recibió el resumen con la garantía. Un trabajo cerrado no se reabre.')}<a class="w-btn w-btn--primary" href="#/mi-trabajo">Ir a mi trabajo</a>`) : `
  <form class="w-close" novalidate data-cerrar>
  ${card(`<h1 class="w-title w-title--md">Cerrar el trabajo</h1><p class="w-muted">${icon('person', 18)}Pedro Silva · Calle Páez 45, San Diego</p>
    ${area('ct-hecho', 'Qué hiciste', 'Cambié la tuerca flare de la condensadora, hice vacío durante 20 minutos y recargué 1 kg de gas R410A. El equipo enfría normal y sin fugas.', 1000, { min: 15, help: 'Mínimo 15 caracteres' })}
    <div class="w-grid2"><div class="w-field"><label for="ct-mo">Mano de obra ($)</label><input class="w-input" id="ct-mo" inputmode="decimal" value="45,00" data-sum></div><div class="w-field"><label for="ct-rp">Repuestos ($)</label><input class="w-input" id="ct-rp" inputmode="decimal" value="${esc(S.parte.costo)}" data-sum></div></div>
    <p class="w-total">Total: <b data-total></b><span class="w-muted w-sm">VexBiz registra el importe pero no lo cobra</span></p>
    <div class="w-field"><label for="ct-gar">Garantía</label><select class="w-input" id="ct-gar">${[0, 1, 3, 6, 12].map((m) => `<option value="${m}"${m === 3 ? ' selected' : ''}>${m ? `${m} ${m === 1 ? 'mes' : 'meses'} · hasta el ${garantiaHasta(m)}` : 'Sin garantía'}</option>`).join('')}</select></div>`)}
  ${card(`<h2>La firma del cliente</h2><div class="w-field"><label for="ct-quien">Nombre de quien firma</label><input class="w-input" id="ct-quien" value="Pedro Silva" autocomplete="off"></div>
    <div class="w-sign"><canvas width="760" height="220" aria-label="Recuadro de firma: firma aquí con el dedo o el ratón" role="img" data-pad></canvas><span class="w-sign__ph" data-ph>Firma aquí con el dedo</span></div>
    <button class="w-btn w-btn--text" type="button" data-clear>${icon('trash', 18)}Borrar y repetir</button>
    ${notice('neutral', 'wifioff', 'Si no hay señal, el cierre se guarda en el teléfono y se envía solo cuando vuelva.')}
    <p class="w-field__err" data-err hidden></p>
    <button class="w-btn w-btn--primary w-btn--lg" type="submit">${icon('check', 18)}Cerrar el trabajo</button><p class="w-muted w-sm">${icon('lock', 16)}Un trabajo cerrado no se reabre.</p>`)}
  </form>`}`),
(root) => {
  const f = root.querySelector('[data-cerrar]'); if (!f) return null; wireCounts(root);
  const total = () => { root.querySelector('[data-total]').textContent = money(parseMoney(f.querySelector('#ct-mo').value) + parseMoney(f.querySelector('#ct-rp').value)); };
  total(); f.addEventListener('input', (e) => { if (e.target.matches('[data-sum]')) total(); });
  // Recuadro de firma: trazos con pointer events; `firmado` cuenta cuántos puntos se dibujaron.
  const cv = f.querySelector('[data-pad]'), ctx = cv.getContext('2d'), ph = f.querySelector('[data-ph]'); let drawing = false, firmado = 0;
  const pos = (e) => { const r = cv.getBoundingClientRect(); return [((e.clientX - r.left) / r.width) * cv.width, ((e.clientY - r.top) / r.height) * cv.height]; };
  ctx.lineWidth = 3; ctx.lineCap = 'round'; ctx.lineJoin = 'round'; ctx.strokeStyle = getComputedStyle(cv).color;
  cv.addEventListener('pointerdown', (e) => { drawing = true; cv.setPointerCapture(e.pointerId); ctx.beginPath(); ctx.moveTo(...pos(e)); ph.hidden = true; });
  cv.addEventListener('pointermove', (e) => { if (!drawing) return; ctx.lineTo(...pos(e)); ctx.stroke(); firmado += 1; });
  const up = () => { drawing = false; }; cv.addEventListener('pointerup', up); cv.addEventListener('pointercancel', up);
  f.querySelector('[data-clear]').addEventListener('click', () => { ctx.clearRect(0, 0, cv.width, cv.height); firmado = 0; ph.hidden = false; });
  f.addEventListener('submit', (e) => {
    e.preventDefault(); const err = f.querySelector('[data-err]');
    const m = f.querySelector('#ct-hecho').value.trim().length < 15 ? 'Cuenta qué hiciste en al menos 15 caracteres.' : !f.querySelector('#ct-quien').value.trim() ? 'Escribe el nombre de quien firma.' : firmado < 8 ? 'Falta la firma del cliente.' : '';
    err.hidden = !m; err.innerHTML = m ? `${icon('error', 16)}${m}` : ''; if (m) return;
    S.cerrado = true; const o = S.ords.find((x) => x.cliente === 'Pedro Silva'); if (o) o.estado = 'hecho';
    toast('Trabajo cerrado: le enviamos el resumen y la garantía a Pedro Silva'); location.hash = '#/mi-trabajo';
  });
});

// ── 07.04 · Mis oficios ─────────────────────────────────────────────────────
const oficios = page('07.04', 'Mis oficios', () => panel('oficios', `${head([['Mi trabajo', '#/mi-trabajo'], ['Mis oficios']], 'Mis Oficios y Especialidades', 'Apúntate a los oficios que dominas. VexBiz revisa tus documentos antes de darte el sello oficial.')}
  ${card(`<div class="w-card2__head"><h2>Oficios registrados</h2><span class="w-muted w-sm">${S.oficios.length} oficios</span></div><ul class="w-rows">${S.oficios.map((o) => `<li class="w-row"><span class="w-row__ico">${icon(o.ic, 24)}</span><div><b>${esc(o.n)}</b>${o.estado === 'certificado' ? `<small>Certificado Oficial · Recibes trabajos</small>` : '<small>Apuntado · En revisión de documentos</small>'}</div>${o.estado === 'certificado' ? badge('Sello oficial otorgado', 'ok', 'shield') : `<button class="w-btn w-btn--text" type="button" data-quitar="${o.id}">${icon('trash', 18)}Quitar</button>`}</li>`).join('')}</ul>`)}
  ${card(`<div class="w-card2__head"><h2>Oficios Disponibles</h2><span class="w-muted w-sm">${DISPONIBLES.filter(([n]) => !S.oficios.some((o) => o.n === n)).length} para apuntarte</span></div><ul class="w-tiles">${DISPONIBLES.filter(([n]) => !S.oficios.some((o) => o.n === n)).map(([n, ic]) => `<li><span class="w-row__ico">${icon(ic, 24)}</span><b>${n}</b><button class="w-btn w-btn--soft" type="button" data-apuntar="${n}">${icon('add', 18)}Apuntarme</button></li>`).join('')}</ul>`)}`),
(root) => root.addEventListener('click', (e) => {
  const q = e.target.closest('[data-quitar]'), a = e.target.closest('[data-apuntar]');
  if (q) { const o = S.oficios.find((x) => x.id === q.dataset.quitar); S.oficios = S.oficios.filter((x) => x !== o); toast(`Quitaste ${o.n}`); }
  if (a) { const n = a.dataset.apuntar, ic = DISPONIBLES.find(([x]) => x === n)[1]; S.oficios.push({ id: n, n, ic, estado: 'revision' }); toast(`Te apuntaste a ${n}: sube el certificado en Mis documentos`); }
  if (q || a) window.dispatchEvent(new HashChangeEvent('hashchange'));
}));

// ── 07.05 · Mis servicios y tarifas ─────────────────────────────────────────
const misServicios = page('07.05', 'Mis servicios y tarifas', () => panel('mis-servicios', `${head([['Mi trabajo', '#/mi-trabajo'], ['Mis servicios']], 'Mis Servicios y Tarifas', 'Lo que publicas aquí es lo que el cliente ve y contrata. Pausa un servicio cuando no puedas atenderlo.')}
  ${card(`<div class="w-card2__head"><h2>Servicios Publicados</h2><span class="w-muted w-sm">${S.servicios.length} servicios en tu catálogo</span></div>
    <ul class="w-svcs">${S.servicios.map((s) => `<li class="w-svc${s.on ? '' : ' is-off'}"><div><h3>${esc(s.t)} ${s.on ? badge('Visible en Búsquedas', 'info', 'eye') : badge('Pausado', 'neutral', 'pause')}</h3><p class="w-sm"><b>${esc(s.oficio)} · ${s.min} min</b></p><p class="w-muted w-sm">${esc(s.d)}</p></div><div class="w-svc__end"><b class="w-svc__p">${money(s.precio)}</b>${s.on ? `<button class="w-btn w-btn--ghost" type="button" data-pausa="${s.id}">${icon('pause', 18)}Pausar servicio</button>` : `<button class="w-btn w-btn--soft" type="button" data-pausa="${s.id}">${icon('play', 18)}Reactivar servicio</button>`}</div></li>`).join('')}</ul>`)}
  ${card(`<h2>Publicar un Nuevo Servicio</h2><form class="w-grid2" novalidate data-nuevo>
    <div class="w-field"><label for="ns-n">Nombre de la prestación</label><input class="w-input" id="ns-n" placeholder="Ej. Instalación de aire de ventana" maxlength="80"></div>
    <div class="w-field"><label for="ns-o">Oficio homologado</label><select class="w-input" id="ns-o">${S.oficios.filter((o) => o.estado === 'certificado').map((o) => `<option>${esc(o.n)}</option>`).join('')}</select></div>
    <div class="w-field"><label for="ns-p">Tarifa base (USD)</label><input class="w-input" id="ns-p" inputmode="decimal" placeholder="$ 0,00"></div>
    <div class="w-field"><label for="ns-m">Duración estimada (minutos)</label><input class="w-input" id="ns-m" type="number" min="15" step="15" value="60"></div>
    <p class="w-field__err w-span2" data-err hidden></p><button class="w-btn w-btn--primary" type="submit">${icon('upload', 18)}Publicar servicio</button></form>`)}`),
(root) => {
  root.addEventListener('click', (e) => { const b = e.target.closest('[data-pausa]'); if (!b) return; const s = S.servicios.find((x) => x.id === b.dataset.pausa); s.on = !s.on; toast(s.on ? `${s.t} vuelve a verse en búsquedas` : `Pausaste ${s.t}: no aparece en búsquedas`); window.dispatchEvent(new HashChangeEvent('hashchange')); });
  root.querySelector('[data-nuevo]').addEventListener('submit', (e) => {
    e.preventDefault(); const f = e.target, n = f.querySelector('#ns-n').value.trim(), p = parseMoney(f.querySelector('#ns-p').value), m = Number(f.querySelector('#ns-m').value), err = f.querySelector('[data-err]');
    const msg = n.length < 5 ? 'Escribe el nombre del servicio.' : p <= 0 ? 'Pon una tarifa mayor que $ 0.' : !(m >= 15) ? 'La duración mínima es de 15 minutos.' : '';
    err.hidden = !msg; err.innerHTML = msg ? `${icon('error', 16)}${msg}` : ''; if (msg) return;
    S.servicios.push({ id: `sv${Date.now()}`, t: n, oficio: f.querySelector('#ns-o').value, min: m, d: 'Recién publicado.', precio: p, on: true }); toast(`Publicaste ${n}`); window.dispatchEvent(new HashChangeEvent('hashchange'));
  });
});

// ── 07.06 · Cobertura y agenda ──────────────────────────────────────────────
const agenda = page('07.06', 'Cobertura y agenda', () => panel('agenda', `${head([['Mi trabajo', '#/mi-trabajo'], ['Cobertura y agenda']], 'Dónde y Cuándo Trabajo', 'Define hasta dónde te desplazas y en qué horario aceptas visitas.')}
  ${card(`<h2>Radio de Cobertura</h2><div data-radiomsg>${S.radio ? notice('info', 'pin', `Recibes solicitudes de clientes a menos de ${S.radio} km de Valencia.`) : notice('warn', 'pause', 'Radio de 0 km: no recibes solicitudes nuevas.')}</div>
    <form class="w-inline" novalidate data-radio><div class="w-field"><label for="ag-r">Radio en kilómetros (km)</label><input class="w-input" id="ag-r" type="number" min="0" max="200" value="${S.radio}"><small class="w-muted">Entre 0 y 200</small></div><button class="w-btn w-btn--primary" type="submit">${icon('check', 18)}Guardar radio</button></form>
    <p class="w-muted w-sm">Un radio de 0 km pausa temporalmente la recepción de nuevas solicitudes.</p>`)}
  ${card(`<h2>Agenda Semanal y Horarios</h2><form novalidate data-horario><ul class="w-sched">${S.horario.map((h, i) => `<li><label class="w-check"><input type="checkbox" data-on="${i}"${h.on ? ' checked' : ''}><b>${h.d}</b></label>
    <span class="w-sched__t" data-t="${i}"${h.on ? '' : ' hidden'}><label for="de-${i}">De</label><input class="w-input" type="time" id="de-${i}" value="${h.de || '08:00'}"><label for="a-${i}">a</label><input class="w-input" type="time" id="a-${i}" value="${h.a || '17:00'}"></span><span class="w-muted" data-no="${i}"${h.on ? ' hidden' : ''}>No disponible</span></li>`).join('')}</ul>
    <p class="w-field__err" data-err hidden></p><button class="w-btn w-btn--primary" type="submit">${icon('check', 18)}Guardar mi horario</button></form>`)}`),
(root) => {
  root.querySelector('[data-radio]').addEventListener('submit', (e) => {
    e.preventDefault(); const v = Number(e.target.querySelector('#ag-r').value);
    if (!(v >= 0 && v <= 200)) { toast('El radio tiene que estar entre 0 y 200 km'); return; }
    S.radio = v; root.querySelector('[data-radiomsg]').innerHTML = v ? notice('info', 'pin', `Recibes solicitudes de clientes a menos de ${v} km de Valencia.`) : notice('warn', 'pause', 'Radio de 0 km: no recibes solicitudes nuevas.'); toast('Radio guardado');
  });
  const f = root.querySelector('[data-horario]');
  f.addEventListener('change', (e) => { const c = e.target.closest('[data-on]'); if (!c) return; const i = c.dataset.on; f.querySelector(`[data-t="${i}"]`).hidden = !c.checked; f.querySelector(`[data-no="${i}"]`).hidden = c.checked; });
  f.addEventListener('submit', (e) => {
    e.preventDefault(); const err = f.querySelector('[data-err]'); let bad = '';
    const nuevo = S.horario.map((h, i) => { const on = f.querySelector(`[data-on="${i}"]`).checked, de = f.querySelector(`#de-${i}`).value, a = f.querySelector(`#a-${i}`).value; if (on && !(de && a && de < a)) bad ||= `${h.d}: la hora de fin tiene que ser después de la de inicio.`; return { ...h, on, de, a }; });
    if (!nuevo.some((h) => h.on)) bad ||= 'Marca al menos un día.';
    err.hidden = !bad; err.innerHTML = bad ? `${icon('error', 16)}${bad}` : ''; if (bad) return; S.horario = nuevo; toast('Horario guardado');
  });
});

// ── 07.07 · Mis documentos ──────────────────────────────────────────────────
const ESTADO_D = { verificado: ['Verificado', 'info', 'check'], rechazado: ['Rechazado', 'bad', 'error'], pendiente: ['Pendiente', 'neutral', 'more'], revision: ['En revisión', 'warn', 'clock'] };
const documentos = page('07.07', 'Mis documentos', () => { const faltan = S.docs.filter((d) => d.ob && ['rechazado', 'pendiente'].includes(d.estado)).length;
  return panel('documentos', `${head([['Mi trabajo', '#/mi-trabajo'], ['Mis documentos']], 'Documentación y Homologación', 'Sube lo que pide el país para homologarte. VexBiz revisa cada documento.')}
  ${faltan ? notice('warn', 'warning', faltan === 1 ? 'Te falta 1 documento requerido.' : `Te faltan ${faltan} documentos requeridos.`) : notice('info', 'check', 'Tienes todos los documentos requeridos.')}
  ${S.docs.map((d) => { const [t, k, ic] = ESTADO_D[d.estado]; return card(`<div class="w-card2__head"><h2 class="w-doc__t">${icon('doc', 22)}${esc(d.n)} ${badge(d.ob ? 'Obligatorio' : 'Opcional', 'neutral')}</h2>${badge(t, k, ic)}</div>
    ${d.ayuda ? `<p class="w-muted w-sm">${esc(d.ayuda)}</p>` : ''}${d.meta ? `<p class="w-sm">${esc(d.meta)}</p>` : ''}
    ${d.motivo && d.estado === 'rechazado' ? notice('bad', 'error', `<b>Motivo del rechazo:</b>${esc(d.motivo)}`) : ''}
    ${d.estado === 'verificado' || d.estado === 'revision' ? '' : `<div class="w-doc__act"><span class="w-btnrow"><label class="w-btn w-btn--soft">${icon('upload', 18)}${d.estado === 'rechazado' ? 'Subir otra versión' : 'Subir archivo'}<input type="file" class="w-sr" accept="image/jpeg,image/png,application/pdf" data-up="${d.id}"></label><button class="w-btn w-btn--ghost" type="button" data-foto="${d.id}">${icon('camera', 18)}Tomar foto</button></span><small class="w-muted">Formatos: JPG, PNG o PDF</small></div>`}`); }).join('')}`); },
(root) => {
  const subir = (id) => { const d = S.docs.find((x) => x.id === id); d.estado = 'revision'; d.meta = 'Subido el 16/10/2026 · VexBiz lo revisa en 24 a 48 h'; toast(`${d.n}: recibido, lo revisamos`); window.dispatchEvent(new HashChangeEvent('hashchange')); };
  root.addEventListener('change', (e) => { const i = e.target.closest('[data-up]'); if (!i || !i.files[0]) return; if (i.files[0].size > 10e6) { toast('El archivo pesa más de 10 MB'); return; } subir(i.dataset.up); });
  root.addEventListener('click', (e) => { const b = e.target.closest('[data-foto]'); if (b) subir(b.dataset.foto); });
});

// ── 07.08 · Mi perfil profesional ───────────────────────────────────────────
const perfil = page('07.08', 'Mi perfil profesional', () => panel('perfil-profesional', `${head([['Mi trabajo', '#/mi-trabajo'], ['Mi perfil profesional']], 'Mi Perfil Profesional', 'Así te ven los clientes en el directorio de técnicos.', `<a class="w-btn w-btn--ghost" href="#/tecnico?id=cm">${icon('eye', 18)}Ver como cliente</a>`)}
  ${card(`<div class="w-card2__head"><div class="w-who"><span class="w-who__av" aria-hidden="true">A</span><div><h2>Aníbal Lejarazu</h2><p class="w-muted">Técnico Profesional Registrado</p></div></div>${badge('Verificado por VexBiz', 'info', 'check')}</div>
    <ul class="w-kpis"><li>${icon('star', 22)}<b>4,8</b><span>Calificación</span></li><li>${icon('chat', 22)}<b>37</b><span>Opiniones</span></li><li>${icon('check', 22)}<b>52</b><span>Trabajos</span></li></ul>
    <p class="w-sm"><b>Oficios homologados oficialmente:</b></p><p class="w-chiprow">${S.oficios.filter((o) => o.estado === 'certificado').map((o) => badge(o.n, 'brand', 'wrench')).join('')}</p>`)}
  ${card(`<h2>Tu Presentación Pública</h2><form class="w-formcol" novalidate data-perfil>${area('pf-d', 'Descripción del perfil', S.perfil.desc, 600, { help: 'Hasta 600 caracteres' })}
    <div class="w-field w-field--sm"><label for="pf-a">Años de experiencia</label><input class="w-input" id="pf-a" type="number" min="0" max="60" value="${S.perfil.anios}"></div><div data-msg aria-live="polite"></div>
    <button class="w-btn w-btn--primary" type="submit">${icon('check', 18)}Guardar perfil</button></form>`)}`),
(root) => { wireCounts(root); root.querySelector('[data-perfil]').addEventListener('submit', (e) => {
  e.preventDefault(); const d = e.target.querySelector('#pf-d').value.trim(), a = Number(e.target.querySelector('#pf-a').value), box = e.target.querySelector('[data-msg]');
  if (d.length < 30) { box.innerHTML = notice('bad', 'error', 'Cuenta un poco más de ti: al menos 30 caracteres.'); return; }
  if (!(a >= 0 && a <= 60)) { box.innerHTML = notice('bad', 'error', 'Los años de experiencia van de 0 a 60.'); return; }
  S.perfil = { desc: d, anios: a }; box.innerHTML = notice('info', 'check', 'Perfil actualizado correctamente');
}); });

// ── 07.09 · Compras de trabajo ──────────────────────────────────────────────
const ESTADO_C = { Entregado: ['info', 'check'], 'En camino': ['neutral', 'truck'], 'Pago reportado': ['warn', 'clock'] };
const compras = page('07.09', 'Compras de trabajo', () => panel('compras-trabajo', `${head([['Mi trabajo', '#/mi-trabajo'], ['Mis compras de trabajo']], 'Compras y Repuestos de Trabajo', 'Pedidos del marketplace que marcaste para un trabajo.', `<a class="w-link" href="#/compras">Tus compras personales están en Mis pedidos ${icon('chevron', 18)}</a>`)}
  ${pager()}
  ${COMPRAS.map((g) => card(`<div class="w-card2__head"><div class="w-rowinfo">${icon(g.ot ? 'pin' : 'box', 24)}<div><h2>${esc(g.donde)}</h2><p class="w-muted w-sm">${g.ot ? `Orden de trabajo ${g.ot}` : 'Sin orden de trabajo'}</p></div></div>${g.ot ? `<a class="w-btn w-btn--ghost" href="#/${g.ot === '#OT-3307' ? 'trabajo' : 'mi-trabajo'}">${icon('briefcase', 18)}Ver trabajo</a>` : ''}</div>
    <ul class="w-buys">${g.items.map(([id, t, f, m, e]) => `<li><a class="w-link" href="#/pedido?id=${id.slice(1)}">${id}</a><span><b>${esc(t)}</b><small>Comprado el ${f}</small></span><b>${money(m)}</b>${badge(e, ...ESTADO_C[e])}</li>`).join('')}</ul>
    <p class="w-sum"><span>Gasto total en este trabajo:</span><b>${money(g.items.reduce((a, i) => a + i[3], 0))} USD</b></p>`)).join('')}
  ${notice('neutral', 'info', 'Los importes son el costo de los repuestos. Lo que cobras al cliente se define en el parte de cierre de cada trabajo.')}`));

// ── 07.10 · Membresía del técnico ───────────────────────────────────────────
const membresia = page('07.10', 'Membresía del técnico', () => panel('membresia', `${head([['Mi trabajo', '#/mi-trabajo'], ['Mi membresía']], 'Membresía Profesional', 'Lo que necesitas para seguir recibiendo solicitudes de clientes en este país.')}
  ${notice('warn', 'warning', '<b>Este país exige membresía técnica activa</b>Sin una membresía al día no apareces en el directorio ni recibes solicitudes nuevas.')}
  <h2 class="w-h2">Planes Disponibles</h2>
  <div class="w-plans">${PLANES.map((p) => `<section class="w-panel w-plan${p.rec ? ' is-rec' : ''}"><div class="w-card2__head"><h3>${p.n}</h3>${p.rec ? badge('Recomendado', 'brand', 'star') : ''}</div><p class="w-plan__p"><b>${money(p.precio)}</b> USD</p><p class="w-muted w-sm">Renovación cada 30 días</p><ul class="w-ticks">${p.lista.map((l) => `<li>${icon('check', 18)}${l}</li>`).join('')}</ul></section>`).join('')}</div>
  ${card(`<div class="w-rowinfo w-rowinfo--end">${icon('chat', 26)}<div><h2>Gestión de Pago y Facturación</h2><p class="w-muted w-sm">El pago de la membresía no se hace aquí: se coordina con el equipo de soporte.</p></div><button class="w-btn w-btn--primary" type="button" data-toast="Te escribimos por WhatsApp para activar tu plan">${icon('chevron', 18)}Contactar soporte</button></div>`)}
  <section class="w-variant"><p>${badge('Variante: país sin membresía', 'neutral', 'info')}</p><div class="w-rowinfo">${icon('shield', 28)}<div><h2>En este país no se requiere membresía de pago</h2><p class="w-muted">Recibes trabajos con tus documentos y oficios al día. No tienes que pagar nada para aparecer en el directorio.</p></div></div>
    <p class="w-btnrow"><a class="w-btn w-btn--soft" href="#/documentos">${icon('doc', 18)}Mis documentos</a><a class="w-btn w-btn--ghost" href="#/oficios">${icon('wrench', 18)}Mis oficios</a></p></section>`));

export const RUTAS_TEC = { 'mi-trabajo': bandeja, trabajo: ejecutar, 'cerrar-trabajo': cerrar, oficios, 'mis-servicios': misServicios, agenda, documentos, 'perfil-profesional': perfil, 'compras-trabajo': compras, membresia };
