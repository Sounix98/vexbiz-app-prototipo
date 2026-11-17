// 08 · Empresa de servicios: agenda, ficha de la solicitud (cotizar → aceptada → cierre con garantía), catálogo,
// membresía y ficha pública. Datos de la app (data5.js) y lo que solo trae el Figma web.
import { solicitudesEmpIni, catalogoEmpIni, perfilEmpIni, membresiaEmp, TERMINADAS_BASE } from '../../../assets/js/data5.js';
import { icon, esc, money, badge, notice, toast } from '../kit.js';
import { sidePanel, head, card, pager, area, wireCounts, parseMoney, garantiaHasta, HOY } from './tecnico.js';

const ag = (d) => `${d.toLocaleDateString('es-VE', { day: '2-digit', month: '2-digit', year: 'numeric' })} · ${d.toTimeString().slice(0, 5)}`;
const S = (globalThis.__vxEmp ||= {
  sols: [
    ...solicitudesEmpIni.map((s) => ({ ...s, titulo: s.titulo || s.servicio, paso: { porResponder: 'cotizar', aceptada: 'aceptada', enCurso: 'cierre' }[s.estado] })),
    { id: '#S-2011', servicio: 'Carga de gas refrigerante R410A', titulo: 'Carga de gas refrigerante R410A', cliente: 'Clínica Santa Ana', donde: 'Calle 137, Valencia', direccion: 'Calle 137, Valencia', para: new Date(2026, 9, 2, 10, 0), estado: 'terminada', total: 60, recibida: '29/09/2026 · 16:40', notas: 'Equipo central del consultorio 3.', paso: 'hecho', garantia: '02/01/2027' },
  ],
  catalogo: catalogoEmpIni.map((c) => ({ ...c, titulo: c.id === 'cs3' ? 'Carga de gas refrigerante R410A' : c.titulo })),
  terminadas: TERMINADAS_BASE, filtro: 'todos', q: '', meses: 3,
});
const MENU = [['empresa-agenda', 'Agenda', 'calendar'], ['empresa-catalogo', 'Catálogo de servicios', 'toolbox'], ['empresa-ficha', 'Ficha pública', 'store'], ['empresa-membresia', 'Membresía', 'star']];
const panel = (activo, body) => sidePanel('Empresa de servicios', MENU, activo, body);
const page = (code, title, render, mount) => ({ code, label: 'EMPRESA DE SERVICIOS', title, sesion: 'login', render, mount });
const rerender = () => window.dispatchEvent(new HashChangeEvent('hashchange'));
const vencida = (s) => s.para && s.para < HOY && ['aceptada', 'enCurso'].includes(s.estado);
const ESTADO = { porResponder: ['Sin responder', 'warn'], cotizada: ['Cotizada', 'neutral'], aceptada: ['Aceptada', 'neutral'], enCurso: ['En curso', 'info'], terminada: ['Terminada', 'neutral'] };
const FILTROS = [['todos', 'Todos', () => true, 54], ['responder', 'Por responder', (s) => s.estado === 'porResponder', 3], ['curso', 'En curso', (s) => ['aceptada', 'enCurso', 'cotizada'].includes(s.estado), 3], ['terminados', 'Terminados', (s) => s.estado === 'terminada', 48], ['retrasadas', 'Retrasadas', vencida, 1]];
const verFicha = `<a class="w-btn w-btn--ghost" href="#/empresa-ficha">${icon('store', 18)}Ver ficha pública</a>`;

// ── 08.01 · Agenda de servicios ─────────────────────────────────────────────
const solItem = (s) => { const [t, k] = ESTADO[s.estado]; const id = s.id.slice(1);
  return `<li class="w-panel w-req"><div><p class="w-chiprow"><a class="w-link w-link--id" href="#/solicitud?id=${id}">${s.id}</a>${badge(t, k)}${vencida(s) ? badge('Fecha pasada', 'bad', 'calendar') : ''}${s.garantia ? badge('Con garantía', 'info', 'shield') : ''}</p>
    <h3>${esc(s.titulo)}</h3><p class="w-muted">${esc(s.cliente)} · ${esc(s.donde)}</p><p class="w-muted w-sm">${icon('clock', 16)}${s.para ? `Para el ${ag(s.para)}` : `Pedido ${esc(s.pedida)}`}${s.total ? ` <b class="w-req__m">${money(s.total)}</b>` : ''}</p></div>
    ${s.estado === 'porResponder' ? `<a class="w-btn w-btn--primary" href="#/solicitud?id=${id}">${icon('receipt', 18)}Responder cotización</a>` : `<a class="w-btn w-btn--ghost" href="#/solicitud?id=${id}">${icon('chevron', 18)}Ver trabajo</a>`}</li>`; };
const agenda = page('08.01', 'Agenda de servicios', () => {
  const [, , fn] = FILTROS.find(([k]) => k === S.filtro), q = S.q.toLowerCase();
  const lista = S.sols.filter(fn).filter((s) => !q || `${s.titulo} ${s.cliente} ${s.direccion}`.toLowerCase().includes(q));
  const por = S.sols.filter((s) => s.estado === 'porResponder').length, ven = S.sols.filter(vencida).length, cur = S.sols.filter((s) => s.estado === 'enCurso' || s.estado === 'aceptada').length;
  return panel('empresa-agenda', `${head([['Empresa de servicios', '#/empresa-agenda'], ['Tu agenda']], 'Agenda de Servicios', 'Cotiza, ejecuta y cierra con garantía las solicitudes de tus clientes.', verFicha)}
  ${notice('warn', 'clock', 'Empresa en verificación: revisamos tus documentos en 24 a 48 horas hábiles. Mientras tanto no recibes solicitudes nuevas.', '<a class="w-btn w-btn--text" href="#/empresa-ficha">Documentos y solicitud</a>')}
  <ul class="w-kpis w-kpis--4"><li>${icon('inbox', 22)}<b>${por}</b><span>Sin responder</span></li><li class="is-bad">${icon('calendar', 22)}<b>${ven}</b><span>Fecha pasada</span></li><li>${icon('users', 22)}<b>${cur}</b><span>En ejecución</span></li><li>${icon('check', 22)}<b>${S.terminadas}</b><span>Completados</span></li></ul>
  ${por ? notice('neutral', 'clock', `Tienes ${por} ${por === 1 ? 'solicitud esperando' : 'solicitudes esperando'} tu cotización con precio y fecha.`, '<button class="w-btn w-btn--text" type="button" data-f="responder">Filtrar pendientes</button>') : ''}
  ${ven ? notice('bad', 'warning', `${ven} ${ven === 1 ? 'trabajo tiene' : 'trabajos tienen'} la fecha acordada vencida sin registrar cierre.`, '<button class="w-btn w-btn--text" type="button" data-f="retrasadas">Ver retrasadas</button>') : ''}
  <form class="w-findbar" role="search" data-buscar><label class="w-sr" for="ea-q">Buscar por servicio, cliente o dirección</label>${icon('search', 22)}<input id="ea-q" type="search" placeholder="Buscar por servicio, cliente o dirección…" value="${esc(S.q)}"></form>
  <div class="w-filterchips" role="group" aria-label="Filtrar solicitudes">${FILTROS.slice(0, 4).map(([k, n, f]) => `<button type="button" class="w-fchip" data-f="${k}" aria-pressed="${S.filtro === k}">${S.filtro === k ? icon('check', 16) : ''}${n} (${k === 'terminados' ? S.terminadas : k === 'todos' ? S.sols.filter((s) => s.estado !== 'terminada').length + S.terminadas : S.sols.filter(f).length})</button>`).join('')}${S.filtro === 'retrasadas' ? `<button type="button" class="w-fchip" data-f="retrasadas" aria-pressed="true">${icon('check', 16)}Retrasadas (${ven})</button>` : ''}</div>
  <div class="w-req__bar"><span class="w-muted w-sm">${lista.length} en esta página</span>${pager()}</div>
  <ul class="w-reqs">${lista.length ? lista.map(solItem).join('') : `<li class="w-panel w-empty-card">${icon('searchoff', 32)}<h2>No hay solicitudes con ese filtro</h2><p>Prueba con otro filtro o borra la búsqueda.</p><button class="w-btn w-btn--ghost" type="button" data-f="todos">Ver todas</button></li>`}</ul>`); },
(root) => {
  root.addEventListener('click', (e) => { const b = e.target.closest('[data-f]'); if (!b) return; S.filtro = b.dataset.f; rerender(); });
  const inp = root.querySelector('#ea-q'); let t;
  root.querySelector('[data-buscar]').addEventListener('submit', (e) => { e.preventDefault(); S.q = inp.value.trim(); rerender(); });
  inp.addEventListener('input', () => { clearTimeout(t); t = setTimeout(() => { S.q = inp.value.trim(); rerender(); setTimeout(() => { const i = document.querySelector('#ea-q'); i?.focus(); i?.setSelectionRange(i.value.length, i.value.length); }); }, 350); });
  return () => clearTimeout(t);
});

// ── 08.02 · Ficha de la solicitud ───────────────────────────────────────────
const PASOS = [['cotizar', 'Sin responder'], ['cotizada', 'Cotizada'], ['aceptada', 'Aceptada'], ['cierre', 'En curso'], ['hecho', 'Terminada']];
const solicitud = page('08.02', 'Ficha de la solicitud', (q) => {
  const s = S.sols.find((x) => x.id === `#${q.id || 'S-2041'}`) || S.sols[0];
  const para = s.para ? ag(s.para) : `${s.pref}`, gar = S.meses ? garantiaHasta(S.meses) : '';
  const cuerpo = {
    cotizar: card(`<h2>Responder con Cotización Formal</h2><form class="w-grid2" novalidate data-cot>
      <div class="w-field"><label for="sq-m">Importe a cobrar (USD)</label><input class="w-input" id="sq-m" inputmode="decimal" value="85,00"></div>
      <div class="w-field"><label for="sq-f">Fecha y hora de visita</label><input class="w-input" id="sq-f" type="datetime-local" min="2026-10-16T07:00" value="2026-10-18T09:00"><small class="w-muted">No puedes elegir una fecha pasada.</small></div>
      <div class="w-span2">${area('sq-a', 'Alcance del servicio y qué incluye', 'Instalación de unidad split 12.000 BTU hasta 3 m de tubería, soporte de unidad exterior, vacío y prueba de funcionamiento. No incluye obra civil.', 1000, { min: 20, help: 'Detalla qué incluye y qué no.' })}</div>
      <p class="w-field__err w-span2" data-err hidden></p><button class="w-btn w-btn--primary" type="submit">${icon('share', 18)}Enviar presupuesto al cliente</button></form>`),
    cotizada: card(`<div class="w-rowinfo">${icon('clock', 26)}<div><h2>Presupuesto enviado · esperando al cliente</h2><p class="w-muted">${money(s.total)} para el ${esc(para)}. Te avisamos cuando lo acepte o lo rechace.</p></div></div>
      <p class="w-btnrow"><button class="w-btn w-btn--soft" type="button" data-acepta>${icon('thumb', 18)}Simular que el cliente acepta</button></p>`, 'w-card2--soft'),
    aceptada: card(`<div class="w-card2__head"><h2 class="w-h-ok">${icon('thumb', 24)}Presupuesto Aceptado</h2><b>Monto pactado ${money(s.total)}</b></div><p>El cliente aceptó tu cotización para el ${esc(para)}. Cuando llegues al sitio, marca el inicio del trabajo.</p>
      ${vencida(s) ? notice('bad', 'calendar', 'La fecha acordada ya pasó y el trabajo no tiene cierre. Empieza el trabajo o habla con el cliente para cambiar la fecha.') : ''}
      <button class="w-btn w-btn--primary" type="button" data-empezar>${icon('play', 18)}Empezar trabajo en sitio</button>`, 'w-card2--info'),
    cierre: card(`<h2>Cierre de Servicio y Emisión de Garantía</h2><form class="w-formcol" novalidate data-cierre>
      ${area('sq-i', 'Informe de trabajo realizado', 'Se instaló la unidad con 3 m de tubería, se hizo vacío durante 20 min y se comprobó presión y temperatura de salida.', 1000, { min: 20 })}
      <fieldset class="w-seg"><legend>Periodo de garantía otorgada</legend>${[[0, 'Sin garantía'], [3, '3 meses de garantía'], [6, '6 meses de garantía'], [12, '12 meses de garantía']].map(([m, t]) => `<label><input type="radio" name="gar" value="${m}"${S.meses === m ? ' checked' : ''}><span>${S.meses === m ? icon('check', 16) : ''}${t}</span></label>`).join('')}</fieldset>
      <div data-terms${S.meses ? '' : ' hidden'}>${area('sq-t', 'Términos y cobertura de la garantía', 'Cubre fugas en las uniones y mano de obra. No cubre daños eléctricos.', 200)}</div>
      <div data-vig>${S.meses ? notice('info', 'shield', `La garantía oficial VexBiz tendrá vigencia hasta el ${gar}.`) : notice('neutral', 'info', 'El servicio se cierra sin garantía. El cliente lo verá en su comprobante.')}</div>
      <p class="w-field__err" data-err hidden></p><button class="w-btn w-btn--primary" type="submit">${icon('check', 18)}Cerrar y certificar servicio</button></form>`),
    hecho: card(`<div class="w-rowinfo">${icon('shield', 26)}<div><h2>Servicio Terminado y Certificado</h2><p>${s.garantia ? `Con garantía activa hasta el ${esc(s.garantia)}.` : 'Cerrado sin garantía.'}</p></div></div>`, 'w-card2--info'),
  }[s.paso];
  const idx = PASOS.findIndex(([k]) => k === s.paso);
  return `<div class="w-wrap w-narrow"><p class="w-spread"><a class="w-link" href="#/empresa-agenda">${icon('back', 18)}Volver a la agenda</a><a class="w-link" href="#/empresa-catalogo">${icon('toolbox', 18)}Ver catálogo</a></p>
  ${card(`<p class="w-chiprow"><span class="w-req__id">${s.id}</span>${badge(PASOS[idx][1], s.paso === 'cotizar' ? 'warn' : s.paso === 'hecho' ? 'neutral' : 'info', s.paso === 'cotizar' ? 'inbox' : '')}</p><h1 class="w-title w-title--md">${esc(s.titulo)}</h1>
    <ol class="w-steps" aria-label="Estado de la solicitud">${PASOS.map(([k, t], i) => `<li class="${i < idx ? 'is-done' : i === idx ? 'is-now' : ''}"${i === idx ? ' aria-current="step"' : ''}>${i < idx ? icon('check', 14) : ''}${t}</li>`).join('')}</ol>`)}
  ${card(`<dl class="w-dl3"><div><dt>Cliente solicitante</dt><dd>${esc(s.cliente)}<br>${esc(s.direccion)}</dd></div><div><dt>${s.para ? 'Fecha acordada' : 'Fecha preferida por el cliente'}</dt><dd>${esc(para)}</dd></div><div><dt>Recibida el</dt><dd>${esc(s.recibida || '16/10/2026 · 08:14')}</dd></div></dl>
    <div class="w-notebox"><small>Notas del trabajo</small><p>${esc(s.notas || 'Sin notas.')}</p></div>
    ${notice('neutral', 'shield', 'El precio, la fecha y la garantía deben quedar en esta ficha: es lo que respalda cualquier mediación.')}`)}
  ${cuerpo}</div>`;
},
(root, q) => {
  const s = S.sols.find((x) => x.id === `#${q.id || 'S-2041'}`) || S.sols[0]; wireCounts(root);
  const err = (f, m) => { const e = f.querySelector('[data-err]'); e.hidden = !m; e.innerHTML = m ? `${icon('error', 16)}${m}` : ''; return !!m; };
  root.querySelector('[data-cot]')?.addEventListener('submit', (e) => {
    e.preventDefault(); const f = e.target, m = parseMoney(f.querySelector('#sq-m').value), v = f.querySelector('#sq-f').value, d = v ? new Date(v) : null;
    if (err(f, m <= 0 ? 'Pon un importe mayor que $ 0.' : !d ? 'Elige la fecha y hora de la visita.' : d < HOY ? 'No puedes elegir una fecha pasada.' : f.querySelector('#sq-a').value.trim().length < 20 ? 'Detalla el alcance en al menos 20 caracteres.' : '')) return;
    Object.assign(s, { total: m, para: d, estado: 'cotizada', paso: 'cotizada' }); toast(`Presupuesto de ${money(m)} enviado a ${s.cliente}`); rerender();
  });
  root.querySelector('[data-acepta]')?.addEventListener('click', () => { Object.assign(s, { estado: 'aceptada', paso: 'aceptada' }); toast(`${s.cliente} aceptó tu presupuesto`); rerender(); });
  root.querySelector('[data-empezar]')?.addEventListener('click', () => { Object.assign(s, { estado: 'enCurso', paso: 'cierre' }); toast('Trabajo empezado: al terminar, ciérralo con la garantía'); rerender(); });
  const fc = root.querySelector('[data-cierre]'); if (!fc) return;
  fc.addEventListener('change', (e) => { if (e.target.name !== 'gar') return; S.meses = Number(e.target.value);
    fc.querySelectorAll('.w-seg label').forEach((l) => { const i = l.querySelector('input'); l.querySelector('span').innerHTML = `${i.checked ? icon('check', 16) : ''}${l.textContent}`; });
    fc.querySelector('[data-terms]').hidden = !S.meses; fc.querySelector('[data-vig]').innerHTML = S.meses ? notice('info', 'shield', `La garantía oficial VexBiz tendrá vigencia hasta el ${garantiaHasta(S.meses)}.`) : notice('neutral', 'info', 'El servicio se cierra sin garantía. El cliente lo verá en su comprobante.'); });
  fc.addEventListener('submit', (e) => {
    e.preventDefault(); if (err(fc, fc.querySelector('#sq-i').value.trim().length < 20 ? 'Cuenta lo que hiciste en al menos 20 caracteres.' : S.meses && fc.querySelector('#sq-t').value.trim().length < 10 ? 'Escribe qué cubre la garantía.' : '')) return;
    Object.assign(s, { estado: 'terminada', paso: 'hecho', garantia: S.meses ? garantiaHasta(S.meses) : '' }); S.terminadas += 1; toast('Servicio cerrado y certificado'); rerender();
  });
});

// ── 08.03 · Catálogo de servicios ───────────────────────────────────────────
const dur = (m) => (m >= 60 ? `${Math.floor(m / 60)} h${m % 60 ? ` ${m % 60} min` : ''}` : `${m} min`);
const catalogo = page('08.03', 'Catálogo de servicios', () => { const act = S.catalogo.filter((c) => c.visible), pau = S.catalogo.filter((c) => !c.visible);
  return panel('empresa-catalogo', `${head([['Empresa de servicios', '#/empresa-agenda'], ['Lo que ofreces']], 'Catálogo de Servicios', 'Los servicios que tus clientes pueden pedirte, con su precio de referencia.', verFicha)}
  <h2 class="w-h2">Servicios en Oferta Pública (${act.length})</h2>
  <ul class="w-cat">${act.map((c) => `<li class="w-panel w-card2" data-c="${c.id}"><div class="w-card2__head"><div><h3>${esc(c.titulo)} ${badge('Activo', 'info')}</h3><p class="w-sm"><b>Desde ${money(c.desde)} USD</b> <span class="w-muted">${icon('clock', 16)}${dur(c.min)}</span></p><p class="w-muted w-sm">${esc(c.texto)}</p>${c.pedido ? `<p class="w-sm"><b>Solicitado ${c.pedido} veces por clientes</b></p>` : ''}</div>
    <span class="w-btnrow"><button class="w-btn w-btn--text" type="button" data-edit="${c.id}">${icon('edit', 18)}Editar</button><button class="w-btn w-btn--text" type="button" data-pause="${c.id}">${icon('pause', 18)}Pausar</button></span></div><div data-slot></div></li>`).join('')}</ul>
  ${pau.length ? `<details class="w-panel w-paused" open><summary>${pau.length} ${pau.length === 1 ? 'servicio pausado' : 'servicios pausados'}</summary><ul>${pau.map((c) => `<li><span>${esc(c.titulo)} <small class="w-muted">Desde ${money(c.desde)}</small></span><button class="w-btn w-btn--text" type="button" data-on="${c.id}">${icon('play', 18)}Reactivar servicio</button></li>`).join('')}</ul></details>` : ''}
  ${card(`<h2>Añadir Nueva Especialidad al Catálogo</h2><form class="w-grid2" novalidate data-alta>
    <div class="w-field w-span2"><label for="ec-n">Nombre del servicio</label><input class="w-input" id="ec-n" maxlength="80" placeholder="Instalación de aire split 18.000 a 24.000 BTU"></div>
    <div class="w-field"><label for="ec-p">Precio de referencia (USD)</label><input class="w-input" id="ec-p" inputmode="decimal" placeholder="120,00"></div>
    <div class="w-field"><label for="ec-m">Duración estimada (minutos)</label><input class="w-input" id="ec-m" type="number" min="15" step="15" placeholder="180"></div>
    <div class="w-span2">${area('ec-d', 'Descripción del alcance', '', 1000, { help: 'Qué incluye y qué no.', ph: 'Hasta 4 m de tubería, soporte reforzado y prueba de funcionamiento.' })}</div>
    <label class="w-check w-span2"><input type="checkbox" id="ec-pub" checked>Publicar y ofrecer este servicio en mi ficha</label>
    <p class="w-field__err w-span2" data-err hidden></p><button class="w-btn w-btn--primary" type="submit">${icon('add', 18)}Añadir servicio</button></form>`)}`); },
(root) => {
  wireCounts(root);
  root.addEventListener('click', (e) => {
    const p = e.target.closest('[data-pause]'), y = e.target.closest('[data-yes]'), no = e.target.closest('[data-cancel]'), on = e.target.closest('[data-on]'), ed = e.target.closest('[data-edit]');
    if (p) { const c = S.catalogo.find((x) => x.id === p.dataset.pause); if (!c.pedido) { c.visible = false; toast(`Pausaste ${c.titulo}`); rerender(); return; }
      const slot = p.closest('li').querySelector('[data-slot]'); slot.innerHTML = notice('bad', 'warning', 'Este servicio ya tiene pedidos. Si lo pausas, deja de verse en tu ficha, pero los pedidos en curso siguen.', `<span class="w-btnrow"><button class="w-btn w-btn--primary" type="button" data-yes="${c.id}">Pausar de todas formas</button><button class="w-btn w-btn--text" type="button" data-cancel>Cancelar</button></span>`); slot.querySelector('[data-yes]').focus(); }
    if (y) { const c = S.catalogo.find((x) => x.id === y.dataset.yes); c.visible = false; toast(`Pausaste ${c.titulo}: los pedidos en curso siguen`); rerender(); }
    if (no) no.closest('[data-slot]').innerHTML = '';
    if (on) { const c = S.catalogo.find((x) => x.id === on.dataset.on); c.visible = true; toast(`${c.titulo} vuelve a tu ficha`); rerender(); }
    if (ed) { const c = S.catalogo.find((x) => x.id === ed.dataset.edit), slot = ed.closest('li').querySelector('[data-slot]');
      slot.innerHTML = `<form class="w-inline" novalidate data-save="${c.id}"><div class="w-field"><label for="ed-${c.id}">Precio desde (USD)</label><input class="w-input" id="ed-${c.id}" inputmode="decimal" value="${String(c.desde.toFixed(2)).replace('.', ',')}"></div><button class="w-btn w-btn--primary" type="submit">Guardar</button><button class="w-btn w-btn--text" type="button" data-cancel>Cancelar</button></form>`; slot.querySelector('input').focus(); }
  });
  root.addEventListener('submit', (e) => {
    const sv = e.target.closest('[data-save]'), add = e.target.closest('[data-alta]'); e.preventDefault();
    if (sv) { const v = parseMoney(sv.querySelector('input').value); if (v <= 0) { toast('Pon un precio mayor que $ 0'); return; } S.catalogo.find((x) => x.id === sv.dataset.save).desde = v; toast('Precio actualizado'); rerender(); }
    if (add) { const n = add.querySelector('#ec-n').value.trim(), p = parseMoney(add.querySelector('#ec-p').value), m = Number(add.querySelector('#ec-m').value), d = add.querySelector('#ec-d').value.trim(), er = add.querySelector('[data-err]');
      const msg = n.length < 5 ? 'Escribe el nombre del servicio.' : p <= 0 ? 'Pon un precio de referencia mayor que $ 0.' : !(m >= 15) ? 'La duración mínima es de 15 minutos.' : d.length < 10 ? 'Describe el alcance en al menos 10 caracteres.' : '';
      er.hidden = !msg; er.innerHTML = msg ? `${icon('error', 16)}${msg}` : ''; if (msg) return;
      const pub = add.querySelector('#ec-pub').checked; S.catalogo.push({ id: `cs${Date.now()}`, titulo: n, desde: p, min: m, texto: d, pedido: 0, visible: pub }); toast(pub ? `${n} ya está en tu ficha` : `${n} guardado como pausado`); rerender(); }
  });
});

// ── 08.04 · Membresía de servicios ──────────────────────────────────────────
const membresia = page('08.04', 'Membresía de servicios', () => { const m = membresiaEmp, hasta = new Date(m.desde); hasta.setDate(hasta.getDate() + m.dias); const quedan = Math.round((hasta - HOY) / 864e5);
  return panel('empresa-membresia', `${head([['Empresa de servicios', '#/empresa-agenda'], ['Tu membresía']], 'Membresía de Servicios', 'El plan con el que tu empresa recibe solicitudes en VexBiz.')}
  ${notice('warn', 'calendar', `Tu plan vence en ${quedan} días.`)}
  ${card(`<div class="w-card2__head"><div><p class="w-muted">Plan suscrito</p><h2 class="w-title w-title--md">${m.plan}</h2></div>${badge('Activa', 'info', 'check')}</div>
    <ul class="w-kpis"><li>${icon('wallet', 22)}<small>Costo periódico</small><b>${money(m.costo)} USD</b><span>cada ${m.dias} días</span></li><li>${icon('calendar', 22)}<small>Válida hasta</small><b>${hasta.toLocaleDateString('es-VE', { day: '2-digit', month: '2-digit', year: 'numeric' })}</b><span>quedan ${quedan} días</span></li><li>${icon('swap', 22)}<small>Renovación automática</small><b>${m.renueva ? 'Habilitada' : 'Apagada'}</b><span>se cobra al vencer</span></li></ul>
    <p class="w-muted w-sm">El cobro de la membresía lo administra VexBiz. Desde aquí no se puede comprar ni renovar; para cambios, escribe a soporte.</p>
    <button class="w-btn w-btn--ghost" type="button" data-toast="Te escribimos por WhatsApp para gestionar tu plan">${icon('chat', 18)}Escribir a soporte</button>`)}
  <h2 class="w-h2 w-h2--sm">Otros estados de esta pantalla</h2>
  ${card(`<div class="w-rowinfo">${icon('shield', 26)}<div><h3>Tu membresía está activa sin costo en este país</h3><p class="w-muted">En Venezuela las empresas de servicios no pagan membresía por ahora.</p></div></div>`)}
  ${notice('bad', 'error', 'Membresía requerida no activada. Contacta a soporte para activar tu plan.')}`); });

// ── 08.05 · Ficha pública ───────────────────────────────────────────────────
const ficha = page('08.05', 'Tu ficha pública', () => { const p = perfilEmpIni, act = S.catalogo.filter((c) => c.visible);
  return panel('empresa-ficha', `${head([['Empresa de servicios', '#/empresa-agenda'], ['Tu ficha pública']], 'Tu Ficha Pública', 'Así te ven los clientes cuando buscan quién les preste un servicio.', `<a class="w-btn w-btn--ghost" href="#/empresa-catalogo">${icon('toolbox', 18)}Gestionar catálogo</a>`)}
  <section class="w-panel w-card2 w-card2--warn"><h2 class="w-h-ico w-h-ico--plain">${icon('star', 24)}Oportunidades de mejora detectadas en tu ficha</h2>
    <details class="w-tip"><summary>Sin teléfono, los clientes no pueden llamarte antes de pedir.</summary><p>Añade un teléfono de contacto en los datos de la empresa: las fichas con teléfono reciben más solicitudes.</p><button class="w-btn w-btn--soft" type="button" data-toast="Los datos de la empresa se editan en Mi cuenta · Empresa">${icon('phone', 18)}Añadir teléfono</button></details>
    <details class="w-tip"><summary>Tu empresa aún no está verificada: no sale el sello de confianza.</summary><p>Falta que VexBiz apruebe el Registro Mercantil. Lo revisamos en 24 a 48 horas hábiles.</p></details>
    <p class="w-sm">Revisa también <a class="w-link w-link--inline" href="#/empresa-catalogo">lo que ofreces</a></p></section>
  ${card(`<div class="w-who"><span class="w-who__av w-who__av--ink" aria-hidden="true">CP</span><div><h2>${esc(p.nombre)} ${badge('Verificada', 'info', 'check')}</h2><p class="w-muted">Empresa proveedora certificada de servicios técnicos</p><p class="w-sm">${icon('star', 16)}<b>${String(p.rating).replace('.', ',')}</b> <span class="w-muted">· ${p.opiniones} reseñas</span></p></div></div>
    <ul class="w-facts2"><li>${icon('pin', 20)}<span><small>Sede y cobertura</small>${p.zonas.join(' · ')}</span></li><li>${icon('globe', 20)}<span><small>Sitio web</small>${esc(p.web)}</span></li><li>${icon('inbox', 20)}<span><small>Correo electrónico</small>${esc(p.email)}</span></li></ul>
    <h3>Servicios Disponibles al Público (${act.length})</h3>
    <ul class="w-pubsvc">${act.map((c) => `<li><span><b>${esc(c.titulo)}</b><small>${esc(c.texto)}</small></span><b>Desde ${money(c.desde)}</b></li>`).join('')}</ul>`)}`); });

export const RUTAS_EMP = { 'empresa-agenda': agenda, solicitud, 'empresa-catalogo': catalogo, 'empresa-membresia': membresia, 'empresa-ficha': ficha };
