// M8 · Modo Técnico: trabajos, solicitud entrante, trabajo en curso (con cambios guardados en el teléfono),
// cerrar, firma del cliente, servicios, oficios, cobertura y horario, documentos, perfil, compras y membresía.
import { register } from './registry.js';
import { productArt } from '../art.js';
import { h, icon, btn, iconBtn, topbar, stateBlock, toast, $, $$ } from '../ui.js';
import { avatar, stars, page, field, fieldError, area, select, statusTag, row, switchHtml, wireControls, banner, radioOpt } from '../market.js';
import { go, back } from '../router.js';
import { state, set, subscribe, tecCambio, tecSenal } from '../store.js';
import { stagger, play } from '../motion.js';
import { comprasTrabajo, dias, oficiosDisponibles, perfilTecnico, planes } from '../data3.js';
import { HOY } from '../data.js';
import { money, num, esc, plural, date, round2 } from '../format.js';

const T = () => state.tec;
const thumb = (n = 24, p = null) => `<span class="vx-thumb-ph vx-thumb-ph--sm vx-photo" aria-hidden="true">${productArt(p)}</span>`; // imagen limpia: la del producto si se conoce, si no, una caja
const sec = (title) => `<h2 class="md-label-large vx-sub vx-sub--list">${title}</h2>`;
const avisosBtn = () => iconBtn('bell', 'Avisos en vivo', 'data-go="O.AVI"');

// ── Tiempos que corren ──────────────────────────────────────────────────────
/** «5 h», «5 h 12 min» o «42 min» a partir de los milisegundos que quedan. */
export function quedan(ms, { min = false } = {}) {
  const m = Math.max(0, Math.floor(ms / 60000)), hh = Math.floor(m / 60), mm = m % 60;
  if (hh === 0) return `${mm} min`;
  return min && mm ? `${hh} h ${mm} min` : `${hh} h`;
}
const restante = (s) => (s.venceAt ? s.venceAt - Date.now() : -1);
const urgente = (ms) => ms > 0 && ms < 3600000;

// ── Aviso «cambios guardados en el teléfono» (Patrón 21) ────────────────────
// Entra bajando 12 px y aclarándose (`vx-drop`, solo transform y opacity); al sincronizar cambia el texto SIN movimiento.
const bandaHtml = () => `<div class="vx-offline vx-drop" id="banda" role="status" aria-live="polite"></div>`;
function paintBanda(root) {
  const b = $('#banda', root); if (!b) return;
  const t = T(), n = t.cambios;
  let ic = 'phone', main, sub = '', act = '', cls = 'info';
  if (t.offline) { main = n ? `${plural(n, 'cambio guardado', 'cambios guardados')} en el teléfono` : 'Sin señal'; sub = n ? 'Se envían solos cuando vuelva la señal' : 'Lo que hagas queda guardado en el teléfono.'; act = btn('Probar conexión', { kind: 'text', attrs: 'data-senal' }); }
  else if (t.enviando) { main = `Enviando ${plural(n, 'cambio', 'cambios')}…`; ic = 'upload'; }
  else { main = 'Todo está al día'; ic = 'check'; cls = 'success'; }
  b.className = `vx-offline vx-offline--${cls}${b.dataset.in ? '' : ' vx-drop'}`; b.dataset.in = '1';
  b.innerHTML = `${icon(ic, 20)}<div class="vx-offline-txt"><p class="md-body-large">${main}</p>${sub ? `<p class="md-body-medium">${sub}</p>` : ''}</div>${act}`;
}
function wireBanda(el) {
  paintBanda(el);
  el.addEventListener('click', (e) => { if (e.target.closest('[data-senal]')) { tecSenal(false); toast('Volvió la señal: enviando tus cambios'); } });
  return subscribe(() => paintBanda(el));
}

// ── M8.01 · Trabajos ────────────────────────────────────────────────────────
register('M8.01', {
  render(ctx) {
    const el = h(`<div>${topbar('Trabajos', { back: false, trailing: avisosBtn() })}
      <div class="vx-pad-h vx-stack"><p>${statusTag('success', 'Habilitado para recibir trabajos')}</p>${bandaHtml()}
        <div class="md-seg" role="tablist" aria-label="Ver">${[['sol', 'Solicitudes'], ['trab', 'Mi trabajo']].map(([k, t], i) => `<button type="button" role="tab" class="md-seg-item md-sl md-label-large${i === 0 ? ' md-seg-item--on' : ''}" data-seg="${k}" aria-selected="${i === 0}">${t}</button>`).join('')}</div></div>
      <ul class="vx-orders vx-pad-h" role="list" id="trList" data-stagger></ul></div>`);
    let seg = 'sol';
    const card = (s, i) => { const ms = restante(s), vivo = s.estado === 'pendiente' && ms > 0, venc = vivo && urgente(ms);
      return `<li class="vx-order" style="--i:${i}" data-sid="${s.id}"><div class="vx-order-main vx-static"><span class="vx-order-text"><span class="md-title-small">${esc(s.servicio)}</span>
        <span class="md-body-medium">${esc(s.cliente)}</span><span class="md-body-medium vx-muted">${esc(s.direccion)}</span><span class="md-body-medium vx-tab-num">${s.cuando}</span>
        ${vivo ? `<span>${statusTag(venc ? 'error' : 'warning', `Caduca ${s.venceTxt} · quedan ${quedan(ms)}`)}</span>` : s.estado === 'aceptada' ? `<span>${statusTag('success', 'Aceptada')}</span>` : s.estado === 'rechazada' ? `<span>${statusTag('neutral', 'Rechazada')}</span>` : `<span>${statusTag('neutral', 'Caducó sin responder')}</span>`}</span></div>
        <div class="vx-order-act">${vivo ? `${btn('Rechazar', { kind: 'outlined', attrs: `data-rej="${s.id}"` })}${btn('Ver solicitud', { kind: 'filled', go: `M8.02?id=${encodeURIComponent(s.id)}` })}` : btn('Quitar de la lista', { kind: 'text', attrs: `data-quit="${s.id}"` })}</div></li>`; };
    const paint = () => {
      const t = T(), host = el.querySelector('#trList');
      if (seg === 'sol') { const l = t.solicitudes.filter((s) => !s.oculta); host.innerHTML = l.map(card).join('') || `<li>${stateBlock({ icon: 'inbox', title: 'No tienes solicitudes' })}</li>`; return; }
      const tr = t.trabajo, enCurso = tr && tr.estado === 'ejecucion';
      host.innerHTML = (enCurso ? `<li class="vx-order"><div class="vx-order-main vx-static"><span class="vx-order-text"><span class="md-title-small">${esc(tr.titulo)}</span><span class="md-body-medium">${esc(tr.cliente)}</span><span class="md-body-medium vx-muted">${esc(tr.direccion)}</span><span>${statusTag('info', `En ejecución · Empezó ${tr.empezo}`)}</span></span></div>
        <div class="vx-order-act">${btn('Continuar', { kind: 'filled', go: 'M8.03' })}</div></li>` : '')
        + t.cerrados.map((c) => `<li class="vx-order"><div class="vx-order-main vx-static"><span class="vx-order-text"><span class="md-title-small">${esc(c.titulo)}</span><span class="md-body-medium">${esc(c.cliente)}</span><span class="md-body-medium vx-tab-num">${money(c.total)} · garantía hasta ${c.garantiaHasta}</span><span>${statusTag('success', 'Trabajo cerrado')}</span></span></div></li>`).join('')
        || (enCurso ? '' : `<li>${stateBlock({ icon: 'briefcase', title: 'No tienes un trabajo en curso' })}</li>`); };
    el.addEventListener('click', (e) => {
      const sg = e.target.closest('[data-seg]'), rej = e.target.closest('[data-rej]'), q = e.target.closest('[data-quit]');
      if (sg) { seg = sg.dataset.seg; $$('[data-seg]', el).forEach((x) => { const on = x === sg; x.classList.toggle('md-seg-item--on', on); x.setAttribute('aria-selected', on); }); paint(); }
      if (rej) { const s = T().solicitudes.find((x) => x.id === rej.dataset.rej), prev = s.estado; s.estado = 'rechazada'; tecCambio(1); set({ tec: T() }); toast(`Rechazaste ${s.id}`, { action: 'Deshacer', onAction: () => { s.estado = prev; set({ tec: T() }); } }); }
      if (q) { T().solicitudes.find((x) => x.id === q.dataset.quit).oculta = true; set({ tec: T() }); }
    });
    paint(); el.__un = [wireBanda(el), subscribe(paint)];
    el.__tick = setInterval(paint, 30000); // los «quedan N h» avanzan solos
    return el;
  },
  mount(el, ctx) {
    if (ctx.first) $$('[data-stagger]', el).forEach(stagger); // Patrón 7
    return () => { el.__un.forEach((f) => f()); clearInterval(el.__tick); };
  },
});

// ── M8.02 · Solicitud entrante ──────────────────────────────────────────────
register('M8.02', {
  render(ctx) {
    const s = T().solicitudes.find((x) => x.id === decodeURIComponent(ctx.params.id || '#S-1082')) || T().solicitudes[0];
    const bloque = (k, v) => `<section class="vx-pad-h"><h2 class="md-label-medium vx-eyebrow">${k}</h2>${v}</section>`;
    const el = h(page(topbar(`Solicitud ${s.id}`), `
      <section class="vx-pad-h" id="venceBox"></section>
      ${bloque('SERVICIO PEDIDO', `<p class="md-title-small">${esc(s.servicio)}</p><p class="md-body-large vx-tab-num">Importe acordado: ${money(s.total)}</p>`)}
      ${bloque('CLIENTE Y LUGAR', `<p class="md-title-small">${esc(s.cliente)}</p><p class="md-body-large">${esc(s.direccion)}, ${esc(s.ciudad)}</p>`)}
      ${bloque('CUÁNDO', `<p class="md-body-large vx-tab-num">${s.cuandoLargo}</p><p class="md-body-medium vx-muted vx-tab-num">Recibida el ${s.recibida}</p>`)}
      ${s.notas ? bloque('NOTAS DEL CLIENTE', `<p class="md-body-large">«${esc(s.notas)}»</p>`) : ''}`,
      `${btn('Rechazar', { kind: 'outlined', id: 'sRej' })}${btn('Contactar', { kind: 'outlined', attrs: 'data-toast="Abre WhatsApp con el cliente"' })}${btn('Aceptar', { kind: 'filled', id: 'sOk' })}`));
    const paint = () => {
      const ms = restante(s), vivo = s.estado === 'pendiente' && ms > 0, u = urgente(ms);
      el.querySelector('#venceBox').innerHTML = vivo
        ? `<p class="md-body-large">${statusTag(u ? 'error' : 'warning', `Caduca ${s.venceTxt}`)}</p><p class="md-title-medium vx-tab-num ${u ? 'vx-is-urgent' : ''}">Quedan ${quedan(ms, { min: true })} para responder</p>
           <span class="vx-bar-track" aria-hidden="true"><span class="vx-bar-fill vx-countbar" id="sBar"></span></span>${u ? `<p class="vx-urgent">${icon('warning', 18)} Queda menos de una hora</p>` : ''}`
        : `<p>${statusTag(s.estado === 'aceptada' ? 'success' : 'neutral', s.estado === 'aceptada' ? 'Aceptada' : s.estado === 'rechazada' ? 'Rechazada' : 'Caducó sin responder')}</p>`;
      const bar = el.querySelector('#sBar'); if (bar && !bar.dataset.on) { bar.dataset.on = '1'; bar.style.setProperty('--vx-count', ms + 'ms'); } // Patrón 15: barra lineal, velocidad constante
      ['sRej', 'sOk'].forEach((i) => { el.querySelector('#' + i).disabled = !vivo; });
    };
    el.querySelector('#sRej').addEventListener('click', () => { s.estado = 'rechazada'; tecCambio(1); set({ tec: T() }); toast(`Rechazaste ${s.id}`); back(); });
    el.querySelector('#sOk').addEventListener('click', () => { s.estado = 'aceptada'; tecCambio(1); set({ tec: T() }); toast(`Aceptaste ${s.id}. Quedó en tu agenda.`); go('M8.03', { kind: 'push' }); }); // Figma: M8.02 → M8.03
    paint(); el.__tick = setInterval(paint, 20000); return el;
  },
  mount(el) { return () => clearInterval(el.__tick); },
});

// ── M8.03 · Trabajo en curso ────────────────────────────────────────────────
register('M8.03', {
  render() {
    const tr = T().trabajo;
    if (!tr || tr.estado !== 'ejecucion') return h(`<div>${topbar('Trabajo')}${stateBlock({ icon: 'briefcase', title: 'No tienes un trabajo en curso', action: btn('Ver solicitudes', { kind: 'filled', go: 'M8.01', kindNav: 'swap' }) })}</div>`);
    const p = tr.parte;
    const el = h(page(topbar('Trabajo', { trailing: iconBtn('phone', 'Llamar al cliente', 'data-toast="Abre el teléfono con el número del cliente"') }), `
      <section class="vx-pad-h"><h2 class="md-title-large">${esc(tr.titulo)}</h2><p class="md-title-small">${esc(tr.cliente)}</p><p class="md-body-medium vx-muted">${esc(tr.direccion)}</p><p>${statusTag('info', `En ejecución · Empezó ${tr.empezo}`)}</p></section>
      <div class="vx-pad-h">${bandaHtml()}</div>
      <ul class="vx-list" role="list">${row({ ic: 'map', title: 'Cómo llegar', sup: esc(tr.corta), attrs: 'data-toast="Abre el mapa con la dirección"' })}${row({ ic: 'bag', title: 'Compras de este trabajo', sup: 'Repuestos que compraste para esta obra', go: 'M8.11', kind: 'swap' })}</ul>
      <section class="vx-pad-h"><div class="vx-sechead vx-sechead--0"><h2 class="md-title-medium">El parte</h2><span class="md-body-medium vx-save" id="saveSt" role="status" aria-live="polite"></span></div>
        <form class="vx-form" novalidate onsubmit="return false">${field({ id: 'pDiag', label: 'Diagnóstico', value: p.diagnostico })}${field({ id: 'pMat', label: 'Materiales usados', value: p.materiales })}${field({ id: 'pHoras', label: 'Horas trabajadas', value: p.horas, inputmode: 'decimal' })}
          ${area({ id: 'pHecho', label: 'Lo que hiciste', value: p.hecho, rows: 4 })}${area({ id: 'pNotas', label: 'Notas para el cliente', value: p.notas, rows: 3 })}</form>
        <div class="vx-stack vx-pad-v">${btn(`${icon('camera', 20)}Añadir foto del trabajo`, { kind: 'tonal', block: true, attrs: 'data-toast="Foto guardada en el parte"' })}${btn('Compras de trabajo', { kind: 'tonal', block: true, go: 'M8.11', kindNav: 'swap' })}${btn('Llamar al cliente', { kind: 'tonal', block: true, attrs: 'data-toast="Abre el teléfono con el número del cliente"' })}</div></section>`,
      btn('Cerrar el trabajo', { kind: 'filled', block: true, go: 'M8.04' })));
    const st = el.querySelector('#saveSt'); let t = null, saving = false;
    const lbl = () => (T().offline ? 'Guardado en el teléfono' : 'Guardado');
    st.innerHTML = `${icon('check', 16)} ${lbl()}`;
    const map = { pDiag: 'diagnostico', pMat: 'materiales', pHoras: 'horas', pHecho: 'hecho', pNotas: 'notas' };
    el.addEventListener('input', (e) => { const k = map[e.target.id]; if (!k) return; p[k] = e.target.value; st.textContent = 'Guardando…'; saving = true; clearTimeout(t);
      t = setTimeout(() => { saving = false; st.innerHTML = `${icon('check', 16)} ${lbl()}`; tecCambio(1); }, 600); });
    const un = wireBanda(el), un2 = subscribe(() => { if (!saving) st.innerHTML = `${icon('check', 16)} ${lbl()}`; }); // al volver la señal, «Guardado en el teléfono» pasa a «Guardado»
    el.__un = () => { un(); un2(); }; return el;
  },
  mount(el) { return () => el.__un && el.__un(); },
});

// ── M8.04 · Cerrar el trabajo ───────────────────────────────────────────────
const sumaMeses = (d, n) => new Date(d.getFullYear(), d.getMonth() + n, d.getDate());
const GAR = [['Sin garantía', 0], ['1 mes', 1], ['3 meses', 3], ['6 meses', 6]];
const compraGastada = () => round2(comprasTrabajo[0].items.reduce((s, i) => s + i.total, 0));
register('M8.04', {
  render() {
    const tr = T().trabajo;
    if (!tr || tr.estado !== 'ejecucion') return h(`<div>${topbar('Cerrar el trabajo')}${stateBlock({ icon: 'briefcase', title: 'No tienes un trabajo en curso' })}</div>`);
    const c = tr.cierre || { mano: tr.manoDeObra, mat: compraGastada(), otros: tr.otros, hecho: tr.parte.hecho, meses: tr.garantiaMeses };
    const el = h(page(topbar('Cerrar el trabajo'), `
      <section class="vx-pad-h"><p class="md-title-small">${esc(tr.cliente)}</p><p class="md-body-medium vx-muted">${esc(tr.corta)}</p></section>
      <div class="vx-pad-h">${banner('info', 'VexBiz no cobra este trabajo. Aquí sólo queda registrado lo que costó.')}</div>
      <div class="vx-pad-h vx-form">${field({ id: 'cMano', label: 'Mano de obra (USD)', value: num(c.mano), inputmode: 'decimal' })}${field({ id: 'cMat', label: 'Materiales (USD)', value: num(c.mat), inputmode: 'decimal', help: 'Sale de las compras de este trabajo' })}${field({ id: 'cOtros', label: 'Otros gastos (USD)', value: num(c.otros), inputmode: 'decimal' })}
        <p class="md-title-large vx-tab-num vx-totrow"><span>Total</span><b id="cTotal"></b></p>
        ${area({ id: 'cHecho', label: 'Lo que hiciste', value: c.hecho, rows: 4 })}${select({ id: 'cGar', label: 'Garantía', options: GAR.map(([t]) => t), value: GAR.find(([, m]) => m === c.meses)[0] })}
        <p class="md-body-large" id="cVig" role="status"></p></div>`,
      btn('Pedir la firma del cliente', { kind: 'filled', block: true, id: 'cGo' })));
    const val = (id) => Number(String(el.querySelector('#' + id).value).replace(/\./g, '').replace(',', '.')) || 0;
    const meses = () => GAR.find(([t]) => t === el.querySelector('#cGar').value)[1];
    const paint = () => { el.querySelector('#cTotal').textContent = money(round2(val('cMano') + val('cMat') + val('cOtros')));
      const m = meses(); el.querySelector('#cVig').textContent = m ? `Vigente hasta el ${date(sumaMeses(HOY, m))}` : 'Sin garantía'; };
    el.addEventListener('input', paint); el.addEventListener('change', paint);
    el.querySelector('#cGo').addEventListener('click', () => {
      const total = round2(val('cMano') + val('cMat') + val('cOtros')), hecho = el.querySelector('#cHecho').value.trim();
      fieldError(el, 'cMano', total <= 0 ? 'Escribe lo que costó el trabajo' : ''); fieldError(el, 'cHecho', !hecho ? 'Cuenta qué hiciste' : ''); if (total <= 0 || !hecho) return;
      tr.cierre = { mano: val('cMano'), mat: val('cMat'), otros: val('cOtros'), hecho, meses: meses() }; tecCambio(1); set({ tec: T() }); go('M8.05', { kind: 'push' });
    });
    paint(); return el;
  },
});

// ── M8.05 · Firma del cliente ───────────────────────────────────────────────
register('M8.05', {
  render() {
    const tr = T().trabajo, c = tr?.cierre;
    if (!tr || !c) return h(`<div>${topbar('Firma del cliente')}${stateBlock({ icon: 'edit', title: 'Primero cierra el trabajo', action: btn('Ir a cerrar el trabajo', { kind: 'filled', go: 'M8.04' }) })}</div>`);
    const total = round2(c.mano + c.mat + c.otros), vig = c.meses ? date(sumaMeses(HOY, c.meses)) : null;
    const el = h(page(topbar('Firma del cliente'), `
      <section class="vx-pad-h"><p class="md-body-large">${esc(c.hecho)}</p><p class="md-title-large vx-tab-num">Total ${money(total)}</p><p class="md-body-medium vx-tab-num">${c.meses ? `Garantía ${plural(c.meses, 'mes', 'meses')} · hasta ${vig}` : 'Sin garantía'}</p></section>
      <div class="vx-pad-h"><div class="vx-sign"><canvas id="firma" class="vx-canvas" role="img" aria-label="Zona de firma: el cliente firma aquí con el dedo"></canvas><p class="vx-sign-hint md-body-medium vx-muted" id="fHint">Firma aquí con el dedo</p></div>
        <div class="vx-row-end">${btn('Borrar firma', { kind: 'text', id: 'fBorrar' })}</div>${field({ id: 'fNombre', label: 'Nombre del cliente', value: tr.cliente })}</div>`,
      `${btn('Volver', { kind: 'text', attrs: 'data-back' })}${btn('Cerrar el trabajo', { kind: 'filled', id: 'fOk', attrs: 'disabled' })}`));
    const cv = el.querySelector('#firma'), g = cv.getContext('2d'); let dibujando = false, trazos = 0, last = null;
    const medir = () => { const r = cv.getBoundingClientRect(), d = window.devicePixelRatio || 1; cv.width = Math.round(r.width * d) || 600; cv.height = Math.round(r.height * d) || 240; g.lineWidth = 3 * d; g.lineCap = 'round'; g.lineJoin = 'round'; g.strokeStyle = getComputedStyle(cv).color; };
    const pos = (e) => { const r = cv.getBoundingClientRect(); return [(e.clientX - r.left) * (cv.width / r.width), (e.clientY - r.top) * (cv.height / r.height)]; };
    const estado = () => { el.querySelector('#fOk').disabled = !(trazos > 0 && el.querySelector('#fNombre').value.trim()); el.querySelector('#fHint').hidden = trazos > 0; };
    cv.addEventListener('pointerdown', (e) => { try { cv.setPointerCapture(e.pointerId); } catch { /* puntero sin captura: sigue dibujando igual */ } dibujando = true; last = pos(e); g.beginPath(); g.moveTo(...last); g.lineTo(last[0] + 0.1, last[1] + 0.1); g.stroke(); trazos++; estado(); });
    cv.addEventListener('pointermove', (e) => { if (!dibujando) return; const p = pos(e); g.beginPath(); g.moveTo(...last); g.lineTo(...p); g.stroke(); last = p; });
    ['pointerup', 'pointercancel'].forEach((ev) => cv.addEventListener(ev, () => { dibujando = false; }));
    el.querySelector('#fBorrar').addEventListener('click', () => { g.clearRect(0, 0, cv.width, cv.height); trazos = 0; estado(); });
    el.querySelector('#fNombre').addEventListener('input', estado);
    el.querySelector('#fOk').addEventListener('click', () => {
      tr.estado = 'cerrado'; T().cerrados.unshift({ titulo: tr.titulo, cliente: tr.cliente, total, garantiaHasta: vig || '—' }); tecCambio(1); set({ tec: T() });
      toast('Trabajo cerrado'); go('M8.01', { kind: 'swap' }); // Huecos, punto 5: M8.05 → M8.01 con aviso «Trabajo cerrado»
    });
    el.__medir = medir; return el;
  },
  mount(el) { el.__medir && el.__medir(); },
});

// ── M8.06 · Servicios ───────────────────────────────────────────────────────
register('M8.06', {
  render() {
    const el = h(`<div>${topbar('Servicios', { back: false })}<ul class="vx-orders vx-pad-h" role="list" id="svList"></ul>
      <div class="vx-pad-h">${btn('Añadir servicio', { kind: 'tonal', block: true, attrs: 'data-toast="Los servicios nuevos los revisa VexBiz antes de mostrarlos"' })}</div>
      <ul class="vx-list" role="list">${row({ ic: 'wrench', title: 'Mis oficios', sup: 'Lo que sabes hacer y su certificación', go: 'M8.07' })}${row({ ic: 'clock', title: 'Cobertura y horario', sup: `${T().radio} km alrededor de Valencia · ${T().horario.filter((d) => d.on).length} días a la semana`, go: 'M8.08' })}</ul></div>`);
    const paint = () => { el.querySelector('#svList').innerHTML = T().servicios.map((s) => `<li class="vx-order"><div class="vx-order-main vx-static"><span class="vx-order-text"><span class="md-title-small">${esc(s.titulo)}</span>
      <span>${statusTag(s.visible ? 'success' : 'neutral', s.visible ? 'Visible' : 'Pausado')}</span><span class="md-body-medium vx-muted vx-tab-num">${s.oficio} · ${s.min} min</span><span class="md-body-medium">${esc(s.texto)}</span><b class="md-title-small vx-tab-num">${money(s.precio)}</b></span>
      ${switchHtml('vis_' + s.id, '<span class="md-sr-only">Visible en tu perfil</span>', s.visible)}</div></li>`).join(''); };
    wireControls(el);
    el.addEventListener('change', (e) => { const t = e.target.closest('input[role=switch]'); if (!t || !t.id.startsWith('vis_')) return; const s = T().servicios.find((x) => 'vis_' + x.id === t.id); s.visible = t.checked; tecCambio(1); set({ tec: T() }); paint(); toast(`${s.titulo}: ${s.visible ? 'visible' : 'pausado'}`); });
    paint(); return el;
  },
});

// ── M8.07 · Mis oficios ─────────────────────────────────────────────────────
register('M8.07', {
  render() {
    const el = h(`<div>${topbar('Mis oficios')}<p class="md-body-large vx-pad-h">Tú te apuntas; la certificación la da VexBiz al revisar tus documentos.</p>
      <ul class="vx-orders vx-pad-h" role="list" id="ofMios"></ul>${sec('Oficios disponibles')}<div class="vx-pad-h">${field({ id: 'ofQ', label: 'Buscar oficios', type: 'search', autocomplete: 'off' })}</div><ul class="vx-orders vx-pad-h" role="list" id="ofDisp"></ul></div>`);
    let q = '';
    const paint = () => {
      const t = T(), mios = t.oficios, libres = oficiosDisponibles.filter((o) => !mios.some((m) => m.nombre === o) && o.toLowerCase().includes(q.toLowerCase()));
      el.querySelector('#ofMios').innerHTML = mios.map((o) => `<li class="vx-order"><div class="vx-order-main vx-static"><span class="vx-order-text"><span class="md-title-small">${esc(o.nombre)}</span><span>${o.estado === 'certificado' ? statusTag('success', `Certificado · ${o.fecha}`) : statusTag('info', 'Apuntado · en revisión')}</span></span>
        ${o.estado === 'revision' ? btn('Quitar', { kind: 'text', attrs: `data-qo="${o.id}"` }) : ''}</div></li>`).join('');
      el.querySelector('#ofDisp').innerHTML = libres.map((o) => `<li class="vx-order"><div class="vx-order-main vx-static"><span class="vx-order-text"><span class="md-title-small">${esc(o)}</span></span>${btn('Apuntarme', { kind: 'tonal', attrs: `data-ao="${esc(o)}"` })}</div></li>`).join('') || `<li>${stateBlock({ icon: 'searchoff', title: 'No hay más oficios para apuntarte' })}</li>`; };
    el.addEventListener('click', (e) => { const a = e.target.closest('[data-ao]'), r = e.target.closest('[data-qo]');
      if (a) { T().oficios.push({ id: 'o' + Date.now(), nombre: a.dataset.ao, estado: 'revision' }); tecCambio(1); set({ tec: T() }); toast(`Te apuntaste en ${a.dataset.ao}. VexBiz lo revisa con tus documentos.`); }
      if (r) { const i = T().oficios.findIndex((o) => o.id === r.dataset.qo), [gone] = T().oficios.splice(i, 1); tecCambio(1); set({ tec: T() }); toast(`Quitaste ${gone.nombre}`, { action: 'Deshacer', onAction: () => { T().oficios.splice(i, 0, gone); set({ tec: T() }); } }); } });
    el.querySelector('#ofQ').addEventListener('input', (e) => { q = e.target.value.trim(); paint(); });
    paint(); el.__un = subscribe(paint); return el;
  },
  mount(el) { return el.__un; },
});

// ── M8.08 · Cobertura y horario ─────────────────────────────────────────────
register('M8.08', {
  render() {
    const t = T(), hr = t.horario.map((d) => ({ ...d }));
    const el = h(page(topbar('Cobertura y horario'), `
      <section class="vx-pad-h"><h2 class="md-title-medium">Zona de cobertura</h2><p class="md-body-large" id="zTxt"></p><p class="md-body-medium vx-muted">${icon('pin', 14)} Punto base fijado en Valencia</p>${field({ id: 'zKm', label: 'Radio de cobertura (km)', value: String(t.radio), inputmode: 'numeric' })}</section>
      <section class="vx-pad-h"><h2 class="md-title-medium">Horario semanal</h2><ul class="vx-days" role="list">${hr.map((d, i) => `<li class="vx-day"><div class="vx-day-head"><span class="md-title-small">${d.d}</span>${switchHtml('dia' + i, `<span class="md-sr-only">${d.d} disponible</span>`, d.on)}</div>
        <div class="vx-day-body" id="db${i}"></div></li>`).join('')}</ul></section>`,
      btn('Guardar cambios', { kind: 'filled', block: true, id: 'hGo' })));
    wireControls(el);
    const body = (i) => { const d = hr[i], b = el.querySelector('#db' + i);
      b.innerHTML = d.on ? `<label class="vx-time"><span class="md-body-small vx-muted">De</span><input type="time" class="vx-timein" id="de${i}" value="${d.de}"></label><span class="md-body-medium">a</span><label class="vx-time"><span class="md-body-small vx-muted">Hasta</span><input type="time" class="vx-timein" id="a${i}" value="${d.a}"></label><p class="md-body-small vx-error-t" id="er${i}" role="alert"></p>` : '<p class="md-body-large vx-muted">No disponible</p>'; };
    hr.forEach((_, i) => body(i));
    el.addEventListener('change', (e) => { const t = e.target; const m = /^dia(\d)$/.exec(t.id); if (m) { const i = Number(m[1]); hr[i].on = t.checked; if (t.checked && !hr[i].de) { hr[i].de = '08:00'; hr[i].a = '17:00'; } body(i); return; }
      const n = /^(de|a)(\d)$/.exec(t.id); if (n) { hr[Number(n[2])][n[1]] = t.value; el.querySelector('#er' + n[2]).textContent = ''; } });
    const zona = () => { el.querySelector('#zTxt').textContent = `Recibes solicitudes a menos de ${el.querySelector('#zKm').value || '…'} km de Valencia.`; };
    el.querySelector('#zKm').addEventListener('input', zona); zona();
    el.querySelector('#hGo').addEventListener('click', () => {
      const km = Number(el.querySelector('#zKm').value); fieldError(el, 'zKm', !(km >= 5 && km <= 100) ? 'Escribe un radio entre 5 y 100 km' : ''); let bad = !(km >= 5 && km <= 100);
      hr.forEach((d, i) => { if (d.on && (!d.de || !d.a || d.a <= d.de)) { bad = true; el.querySelector('#er' + i).textContent = 'La hora final debe ser después de la inicial'; } });
      if (bad) return;
      t.radio = km; t.horario = hr; tecCambio(1); set({ tec: t }); toast('Guardaste tu cobertura y horario'); back();
    });
    return el;
  },
});

// ── M8.09 · Mis documentos ──────────────────────────────────────────────────
const DOC_TAG = { verificado: ['success', 'Verificado'], rechazado: ['error', 'Rechazado'], falta: ['warning', 'Falta subirlo'], vencido: ['error', 'Vencido'], revision: ['info', 'En revisión'] };
export const docsFaltan = () => T().docs.filter((d) => d.obligatorio && (d.estado === 'rechazado' || d.estado === 'falta')).length;
register('M8.09', {
  render() {
    const el = h(`<div>${topbar('Mis documentos')}<div class="vx-pad-h" id="docRes" role="status"></div><ul class="vx-orders vx-pad-h" role="list" id="docList"></ul></div>`);
    const paint = () => {
      const n = docsFaltan();
      el.querySelector('#docRes').innerHTML = n ? banner('warning', `Te faltan ${plural(n, 'documento obligatorio', 'documentos obligatorios')}`) : banner('success', 'Tus documentos obligatorios están al día');
      el.querySelector('#docList').innerHTML = T().docs.map((d) => { const vencido = d.vence && d.vence < HOY, est = vencido ? 'vencido' : d.estado, [k, l] = DOC_TAG[est];
        const accion = est === 'rechazado' ? 'Subir de nuevo' : est === 'falta' ? 'Subir' : est === 'vencido' ? 'Renovar' : null;
        return `<li class="vx-order"><div class="vx-order-main vx-static"><span class="vx-order-text"><span class="md-title-small">${esc(d.nombre)}</span><span class="vx-tagrow">${statusTag(k, l)}<span class="vx-tag md-label-small">${d.obligatorio ? 'Obligatorio' : 'Opcional'}</span></span>
          <span class="md-body-medium">${esc(d.ayuda)}</span>${d.subido ? `<span class="md-body-medium vx-muted vx-tab-num">Subido el ${d.subido}${d.valido ? ` · Válido hasta ${d.valido}` : ''}</span>` : ''}
          ${est === 'rechazado' ? `<span class="md-body-medium vx-reason">${icon('error', 16)} ${esc(d.motivo)}</span>` : ''}${vencido ? `<span class="md-body-medium vx-muted vx-tab-num">Venció el ${date(d.vence)}</span>` : ''}</span></div>
          ${accion ? `<div class="vx-order-act"><input type="file" class="md-sr-only" id="f_${d.id}" accept="image/jpeg,image/png,image/webp,application/pdf" data-doc="${d.id}" tabindex="-1">${btn(`${icon('upload', 18)}${accion}`, { kind: 'tonal', attrs: `data-sub="${d.id}"` })}</div>` : ''}</li>`; }).join('');
    };
    el.addEventListener('click', (e) => { const b = e.target.closest('[data-sub]'); if (b) el.querySelector('#f_' + b.dataset.sub).click(); });
    el.addEventListener('change', (e) => { const f = e.target.closest('input[type=file]'); if (!f || !f.files[0]) return; const file = f.files[0], d = T().docs.find((x) => x.id === f.dataset.doc);
      if (file.size > 10 * 1024 * 1024) { toast('El archivo pesa más de 10 MB'); return; }
      d.estado = 'revision'; d.subido = date(HOY).slice(0, 5); d.vence = null; d.motivo = ''; d.valido = ''; tecCambio(1); set({ tec: T() }); toast(`Subiste ${file.name}. VexBiz lo revisa en hasta 72 horas hábiles.`); });
    paint(); el.__un = subscribe(paint); return el;
  },
  mount(el) { return el.__un; },
});

// ── M8.10 · Mi perfil profesional ───────────────────────────────────────────
register('M8.10', {
  render() {
    const pf = perfilTecnico, el = h(`<div>${topbar('Perfil', { back: false, trailing: avisosBtn() })}
      <section class="vx-profile vx-pad-h">${avatar('CM', true)}<div><p class="md-title-medium">Carlos Mendoza</p><p id="pfSello"></p></div></section>
      <dl class="vx-stats3 vx-pad-h vx-stats3--3">${[[num(pf.rating, 1), 'calificación'], [pf.opiniones, 'opiniones'], [pf.trabajos, 'trabajos']].map(([n, l]) => `<div class="vx-stat vx-stat--c"><dd class="md-title-medium vx-tab-num">${n}</dd><dt class="md-body-small vx-muted">${l}</dt></div>`).join('')}</dl>
      <section class="vx-pad-h"><p><span class="vx-tag md-label-medium">${pf.oficio}</span></p><div class="vx-sechead vx-sechead--0"><h2 class="md-title-medium">Presentación pública</h2>${btn('Editar', { kind: 'text', id: 'pfEd' })}</div>
        <p class="md-body-large" id="pfTxt"></p><div id="pfForm" hidden>${area({ id: 'pfArea', label: 'Presentación pública', rows: 4 })}<div class="vx-row-end">${btn('Guardar', { kind: 'filled', id: 'pfSave' })}</div></div><p class="md-body-medium">${plural(pf.anios, 'año', 'años')} de experiencia</p>
        ${btn('Ver mi perfil público', { kind: 'text', go: 'M4.04?id=cm' })}</section>
      <ul class="vx-list" role="list">${row({ ic: 'doc', title: 'Mis documentos', go: 'M8.09' })}${row({ ic: 'wrench', title: 'Mis oficios', go: 'M8.07' })}${row({ ic: 'wallet', title: 'Membresía', go: 'M8.12' })}${row({ ic: 'swap', title: 'Cambiar de modo', go: 'O.MOD' })}</ul></div>`);
    const paint = () => { const oblig = T().docs.filter((d) => d.obligatorio), faltan = docsFaltan(), ok = oblig.every((d) => d.estado === 'verificado');
      el.querySelector('#pfSello').innerHTML = ok ? statusTag('success', 'Verificado') : `${statusTag(faltan ? 'warning' : 'info', 'Sin verificar')}<span class="md-body-medium vx-muted vx-block-t">${faltan ? 'Sube tus documentos para obtener el sello' : 'VexBiz está revisando tus documentos'}</span>${btn('Ir a mis documentos', { kind: 'text', go: 'M8.09' })}`;
      el.querySelector('#pfTxt').textContent = T().presentacion; };
    el.querySelector('#pfEd').addEventListener('click', () => { const f = el.querySelector('#pfForm'); f.hidden = !f.hidden; if (!f.hidden) { el.querySelector('#pfArea').value = T().presentacion; el.querySelector('#pfArea').focus(); } });
    el.querySelector('#pfSave').addEventListener('click', () => { const v = el.querySelector('#pfArea').value.trim(); fieldError(el, 'pfArea', !v ? 'Escribe tu presentación' : ''); if (!v) return; T().presentacion = v; tecCambio(1); set({ tec: T() }); el.querySelector('#pfForm').hidden = true; paint(); toast('Actualizaste tu presentación'); });
    paint(); el.__un = subscribe(paint); return el;
  },
  mount(el) { return el.__un; },
});

// ── M8.11 · Compras de trabajo ──────────────────────────────────────────────
register('M8.11', {
  render() {
    const E = { Entregado: 'success', 'En camino': 'info', 'Pago reportado': 'info' };
    return h(`<div>${topbar('Compras de trabajo', { back: false })}
      ${comprasTrabajo.map((g) => { const gastado = round2(g.items.reduce((s, i) => s + i.total, 0));
        return `<section class="vx-pad-h vx-cartgroup-t"><h2 class="md-title-medium">${esc(g.donde)}</h2><ul class="vx-orders vx-nopad" role="list">${g.items.map((i) => `<li class="vx-order"><button type="button" class="vx-order-main md-sl vx-press" data-go="M8.03">${thumb()}
          <span class="vx-order-text"><span class="md-body-large vx-tab-num">${i.id}</span><span class="md-body-medium vx-muted">${esc(i.tienda)}</span><span>${statusTag(E[i.estado] || 'neutral', i.estado)}</span></span><span class="vx-order-end"><b class="md-title-small vx-tab-num">${money(i.total)}</b><span class="md-body-small vx-muted vx-tab-num">${i.fecha}</span></span></button></li>`).join('')}</ul>
          <p class="vx-sumrow md-title-small vx-tab-num"><span>Gastado en este trabajo</span><b>${money(gastado)} USD</b></p><div class="vx-row-end">${btn('Ver el trabajo', { kind: 'text', go: 'M8.03' })}</div></section>`; }).join('')}
      <div class="vx-pad-h vx-stack"><p class="md-body-medium vx-muted">Aquí sólo salen las compras que marcaste para un trabajo al comprar.</p>${btn('Comprar repuestos', { kind: 'text', go: 'M2.01', kindNav: 'mode' })}</div></div>`);
  },
});

// ── M8.12 · Membresía (con membresía y país sin membresía) ──────────────────
const membresia = (forzarSin) => ({
  render() {
    const sin = forzarSin ?? T().paisSinMembresia;
    if (sin) return h(`<div>${topbar('Membresía')}<div class="vx-pad-h vx-stack">${banner('info', 'En este país no hace falta membresía para recibir trabajos')}<p class="md-body-large">Mantén tus documentos y oficios al día para seguir apareciendo en el directorio.</p></div>
      <ul class="vx-list" role="list">${row({ ic: 'doc', title: 'Mis documentos', go: 'M8.09' })}${row({ ic: 'wrench', title: 'Mis oficios', go: 'M8.07' })}</ul></div>`);
    const sel = T().plan || 'pro';
    const el = h(page(topbar('Membresía'), `<p class="md-body-large vx-pad-h">Para recibir solicitudes hace falta una membresía activa.</p>
      <div class="vx-options vx-pad-h" role="radiogroup" aria-label="Plan de membresía">${planes.map((p) => radioOpt({ name: 'plan', value: p.id, checked: sel === p.id, title: `${p.nombre}${p.recomendado ? ' <span class="vx-tag md-label-small">Recomendado</span>' : ''}`,
        text: `<b class="md-title-medium vx-tab-num">${money(p.precio)}</b> USD · Se renueva cada 30 días`, extra: `<ul class="vx-checklist vx-checklist--s" role="list">${p.lista.map((l) => `<li>${icon('check', 16)}<span class="md-body-medium">${l}</span></li>`).join('')}</ul>` })).join('')}</div>
      <p class="md-body-medium vx-muted vx-pad-h">El pago de la membresía se coordina con soporte.</p>`,
      btn('Coordinar el pago con soporte', { kind: 'filled', block: true, id: 'mGo' })));
    wireControls(el);
    el.querySelector('#mGo').addEventListener('click', () => { const id = el.querySelector('input[name=plan]:checked').value; T().plan = id; tecCambio(1); set({ tec: T() }); toast(`Elegiste ${planes.find((p) => p.id === id).nombre}. Soporte te escribe por WhatsApp.`); });
    return el;
  },
});
register('M8.12', membresia(undefined));
register('M8.12S', membresia(true));
