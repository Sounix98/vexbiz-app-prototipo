// M9 · Modo Empresa de servicio: solicitudes, solicitud, cotizar, cerrar con garantía, catálogo, servicio (flujo), perfil público y membresía.
import { register } from './registry.js';
import { h, icon, btn, iconBtn, topbar, stateBlock, toast, $, $$ } from '../ui.js';
import { avatar, page, field, fieldError, area, select, statusTag, row, switchHtml, wireControls, banner } from '../market.js';
import { go, back, closeOverlay } from '../router.js';
import { state, set, subscribe } from '../store.js';
import { stagger } from '../motion.js';
import { TERMINADAS_BASE, membresiaEmp } from '../data5.js';
import { HOY } from '../data.js';
import { quedan } from './m8.js';
import { money, num, esc, plural, date, round2 } from '../format.js';

const E = () => state.emp;
const avisosBtn = () => iconBtn('bell', 'Avisos en vivo', 'data-go="O.AVI"');
const sec = (title) => `<h2 class="md-label-large vx-sub vx-sub--list">${title}</h2>`;
const sumaMeses = (d, n) => new Date(d.getFullYear(), d.getMonth() + n, d.getDate());
const GAR = [['Sin garantía', 0], ['1 mes', 1], ['3 meses', 3], ['6 meses', 6]];
const num0 = (el, id) => Number(String(el.querySelector('#' + id).value).replace(/\./g, '').replace(',', '.')) || 0;
const solId = (ctx) => decodeURIComponent(ctx.params.id || '#S-2041');
const buscar = (id) => E().solicitudes.find((x) => x.id === id) || E().solicitudes[0];

// ── Grupos de solicitudes: todo se calcula a partir del estado y de HOY ─────
const pasada = (s) => (s.estado === 'aceptada' || s.estado === 'enCurso') && s.para && s.para < HOY;
const grupo = {
  sin: (s) => s.estado === 'porResponder',
  pasada,
  curso: (s) => ['cotizada', 'aceptada', 'enCurso'].includes(s.estado) && !pasada(s),
  term: (s) => s.estado === 'terminada',
};
const terminadas = () => TERMINADAS_BASE + E().cerradas;
const conteo = (k) => (k === 'term' ? terminadas() : E().solicitudes.filter(grupo[k]).length);
const CHIPS = [['sin', 'Sin responder'], ['pasada', 'Fecha pasada'], ['curso', 'En curso'], ['term', 'Terminadas']];

// ── M9.01 · Solicitudes ─────────────────────────────────────────────────────
register('M9.01', {
  render() {
    const el = h(`<div>${topbar('Solicitudes', { back: false, trailing: avisosBtn() })}
      <div class="vx-chipwrap vx-pad-h" role="group" aria-label="Filtrar solicitudes" id="sChips"></div>
      <ul class="vx-orders vx-pad-h" role="list" id="sList" data-stagger></ul></div>`);
    let f = 'sin';
    const tag = (s) => {
      if (s.estado === 'porResponder') { const ms = s.venceAt - Date.now(); return statusTag(ms < 3600000 ? 'error' : 'warning', ms > 0 ? `Caduca en ${quedan(ms)}` : 'Caducó sin responder'); }
      if (pasada(s)) return statusTag('error', `Fecha pasada · era el ${date(s.para)}`);
      return statusTag(s.estado === 'cotizada' ? 'info' : s.estado === 'enCurso' ? 'info' : 'success', { cotizada: 'Cotización enviada', aceptada: 'Aceptada', enCurso: 'En curso', terminada: 'Terminado' }[s.estado]);
    };
    const card = (s, i) => `<li class="vx-order" style="--i:${i}"><button type="button" class="vx-order-main md-sl vx-press" data-go="M9.02?id=${encodeURIComponent(s.id)}"><span class="vx-order-text">
      <span class="md-body-medium vx-muted vx-tab-num">${s.id}</span><span class="md-title-small">${esc(s.servicio)}</span><span class="md-body-medium">${esc(s.cliente)} · ${esc(s.donde)}</span>
      <span class="md-body-medium vx-tab-num vx-muted">${s.estado === 'porResponder' ? `Pedida ${s.pedida} · ${esc(s.pref)}` : s.para ? date(s.para) : ''}</span><span>${tag(s)}</span></span></button>
      ${s.estado === 'porResponder' ? `<div class="vx-order-act">${btn('Cotizar', { kind: 'filled', go: `M9.03?id=${encodeURIComponent(s.id)}` })}</div>` : ''}</li>`;
    const paint = () => {
      $('#sChips', el).innerHTML = CHIPS.map(([k, t]) => `<span class="md-chip-wrap"><button type="button" class="md-chip md-sl md-label-large${f === k ? ' md-chip--selected' : ''}" data-f="${k}" aria-pressed="${f === k}">${t} <span class="vx-tab-num">${conteo(k)}</span></button></span>`).join('');
      const l = E().solicitudes.filter(grupo[f]);
      $('#sList', el).innerHTML = (l.map(card).join('')
        + (f === 'term' ? `<li class="md-body-large vx-tab-num">${plural(terminadas(), 'trabajo terminado', 'trabajos terminados')} en los últimos meses.</li>` : '')) || `<li>${stateBlock({ icon: 'inbox', title: 'Nada por aquí', text: 'Cuando entre una solicitud nueva te avisamos.' })}</li>`;
    };
    el.addEventListener('click', (e) => { const c = e.target.closest('[data-f]'); if (c) { f = c.dataset.f; paint(); const b = el.querySelector(`[data-f="${f}"]`); if (b) b.focus(); } });
    paint(); el.__un = subscribe(paint); el.__tick = setInterval(paint, 30000); return el;
  },
  mount(el, ctx) { if (ctx.first) $$('[data-stagger]', el).forEach(stagger); return () => { el.__un(); clearInterval(el.__tick); }; },
});

// ── M9.02 · Solicitud ───────────────────────────────────────────────────────
register('M9.02', {
  render(ctx) {
    const s = buscar(solId(ctx)), q = encodeURIComponent(s.id);
    const bloque = (k, v) => `<section class="vx-pad-h"><h2 class="md-label-medium vx-eyebrow">${k}</h2>${v}</section>`;
    const ms = s.venceAt - Date.now();
    const acc = s.estado === 'porResponder' ? `${btn('Rechazar', { kind: 'outlined', id: 'sRej' })}${btn('Cotizar', { kind: 'filled', go: `M9.03?id=${q}` })}`
      : s.estado === 'terminada' ? btn('Volver a solicitudes', { kind: 'filled', go: 'M9.01', kindNav: 'swap' })
      : s.estado === 'cotizada' ? btn('Contactar', { kind: 'outlined', attrs: 'data-toast="Abre WhatsApp con el cliente"' })
      : `${btn('Contactar', { kind: 'outlined', attrs: 'data-toast="Abre WhatsApp con el cliente"' })}${btn('Cerrar con garantía', { kind: 'filled', go: `M9.04?id=${q}` })}`;
    const estado = s.estado === 'porResponder' ? (ms > 0 ? statusTag(ms < 3600000 ? 'error' : 'warning', `Caduca en ${quedan(ms, { min: true })}`) : statusTag('neutral', 'Caducó sin responder'))
      : pasada(s) ? statusTag('error', `Fecha pasada · era el ${date(s.para)}`) : statusTag({ cotizada: 'info', aceptada: 'success', enCurso: 'info', terminada: 'success' }[s.estado], { cotizada: 'Cotización enviada', aceptada: 'Aceptada', enCurso: 'En curso', terminada: 'Terminado' }[s.estado]);
    const el = h(page(topbar(`Solicitud ${s.id}`), `
      <section class="vx-pad-h"><p>${estado}</p></section>
      ${bloque('SERVICIO PEDIDO', `<p class="md-title-small">${esc(s.servicio)}</p>${s.total ? `<p class="md-body-large vx-tab-num">Importe: ${money(s.total)}</p>` : ''}`)}
      ${bloque('CLIENTE Y LUGAR', `<p class="md-title-small">${esc(s.cliente)}</p><p class="md-body-large">${esc(s.direccion)}</p><p class="md-body-medium vx-muted">El cliente no ve tu teléfono; hablan por WhatsApp desde VexBiz.</p>`)}
      ${bloque('CUÁNDO', `<p class="md-body-large vx-tab-num">${s.para ? date(s.para) : esc(s.pref)}</p><p class="md-body-medium vx-muted vx-tab-num">${s.recibida ? `Recibida el ${s.recibida}` : `Pedida ${s.pedida}`}</p>`)}
      ${s.notas ? bloque('NOTAS DEL CLIENTE', `<p class="md-body-large">«${esc(s.notas)}»</p>`) : ''}`, acc));
    const rej = el.querySelector('#sRej');
    if (rej) { rej.disabled = ms <= 0; rej.addEventListener('click', () => { const prev = s.estado; s.estado = 'rechazada'; set({ emp: E() }); toast(`Rechazaste ${s.id}`, { action: 'Deshacer', onAction: () => { s.estado = prev; set({ emp: E() }); } }); back(); }); }
    return el;
  },
});

// ── M9.03 · Cotizar ─────────────────────────────────────────────────────────
const VIGENCIA = ['24 horas', '48 horas', '7 días'];
register('M9.03', {
  render(ctx) {
    const s = buscar(solId(ctx));
    const el = h(page(topbar('Cotizar'), `
      <section class="vx-pad-h"><p class="md-title-small">${esc(s.servicio)}</p><p class="md-body-medium vx-muted">${esc(s.cliente)} · ${esc(s.donde)}</p></section>
      <div class="vx-pad-h">${banner('info', 'El cliente verá el desglose. Si acepta, el trabajo queda en tu agenda.')}</div>
      <div class="vx-pad-h vx-form">${field({ id: 'qMano', label: 'Mano de obra (USD)', value: '', inputmode: 'decimal' })}${field({ id: 'qMat', label: 'Materiales (USD)', value: '', inputmode: 'decimal' })}${field({ id: 'qDesp', label: 'Desplazamiento (USD)', value: '', inputmode: 'decimal', help: 'Opcional' })}
        <p class="md-title-large vx-tab-num vx-totrow"><span>Total</span><b id="qTotal"></b></p>${select({ id: 'qVig', label: 'La cotización vale por', options: VIGENCIA, value: VIGENCIA[1] })}
        ${area({ id: 'qMsg', label: 'Mensaje para el cliente', rows: 3, help: 'Opcional' })}</div>`,
      btn('Enviar cotización', { kind: 'filled', block: true, id: 'qGo' })));
    const total = () => round2(num0(el, 'qMano') + num0(el, 'qMat') + num0(el, 'qDesp'));
    const paint = () => { el.querySelector('#qTotal').textContent = money(total()); };
    el.addEventListener('input', paint);
    el.querySelector('#qGo').addEventListener('click', () => {
      const t = total(); fieldError(el, 'qMano', num0(el, 'qMano') <= 0 ? 'Escribe lo que cobras por la mano de obra' : ''); if (num0(el, 'qMano') <= 0) return;
      s.estado = 'cotizada'; s.total = t; set({ emp: E() }); toast(`Cotización enviada a ${s.cliente}`); go('M9.01', { kind: 'swap' });
    });
    paint(); return el;
  },
});

// ── M9.04 · Cerrar con garantía ─────────────────────────────────────────────
register('M9.04', {
  render(ctx) {
    const s = buscar(solId(ctx));
    if (!['aceptada', 'enCurso'].includes(s.estado)) return h(`<div>${topbar('Cerrar con garantía')}${stateBlock({ icon: 'briefcase', title: 'Este trabajo no está en curso', action: btn('Ver solicitudes', { kind: 'filled', go: 'M9.01', kindNav: 'swap' }) })}</div>`);
    const el = h(page(topbar('Cerrar con garantía'), `
      <section class="vx-pad-h"><p class="md-title-small">${esc(s.cliente)}</p><p class="md-body-medium vx-muted">${esc(s.titulo || s.servicio)}</p></section>
      <div class="vx-pad-h">${banner('info', 'VexBiz no cobra este trabajo. Aquí sólo queda registrado lo que costó y hasta cuándo lo garantizas.')}</div>
      <div class="vx-pad-h vx-form">${field({ id: 'cMano', label: 'Mano de obra (USD)', value: num(s.total), inputmode: 'decimal' })}${field({ id: 'cMat', label: 'Materiales (USD)', value: num(0), inputmode: 'decimal' })}${field({ id: 'cOtros', label: 'Otros gastos (USD)', value: num(0), inputmode: 'decimal' })}
        <p class="md-title-large vx-tab-num vx-totrow"><span>Total</span><b id="cTotal"></b></p>${area({ id: 'cHecho', label: 'Lo que hiciste', rows: 4 })}${select({ id: 'cGar', label: 'Garantía', options: GAR.map(([t]) => t), value: '3 meses' })}
        <p class="md-body-large" id="cVig" role="status"></p></div>`, btn('Cerrar el trabajo', { kind: 'filled', block: true, id: 'cGo' })));
    const meses = () => GAR.find(([t]) => t === el.querySelector('#cGar').value)[1];
    const total = () => round2(num0(el, 'cMano') + num0(el, 'cMat') + num0(el, 'cOtros'));
    const paint = () => { el.querySelector('#cTotal').textContent = money(total()); const m = meses(); el.querySelector('#cVig').textContent = m ? `Vigente hasta el ${date(sumaMeses(HOY, m))}` : 'Sin garantía'; };
    el.addEventListener('input', paint); el.addEventListener('change', paint);
    el.querySelector('#cGo').addEventListener('click', () => {
      const hecho = el.querySelector('#cHecho').value.trim();
      fieldError(el, 'cMano', total() <= 0 ? 'Escribe lo que costó el trabajo' : ''); fieldError(el, 'cHecho', !hecho ? 'Cuenta qué hiciste' : ''); if (total() <= 0 || !hecho) return;
      const m = meses(); s.estado = 'terminada'; s.total = total(); s.garantiaHasta = m ? date(sumaMeses(HOY, m)) : null; E().cerradas += 1; set({ emp: E() });
      toast('Trabajo cerrado'); go('M9.01', { kind: 'fade' }); // Apéndice B: M9.04 → M9.01 fundido 350 con aviso «Trabajo cerrado»
    });
    paint(); return el;
  },
});

// ── M9.05 · Catálogo ────────────────────────────────────────────────────────
register('M9.05', {
  render() {
    const el = h(`<div>${topbar('Catálogo', { back: false, trailing: avisosBtn() })}<p class="md-body-large vx-pad-h" id="cSub"></p><ul class="vx-orders vx-pad-h" role="list" id="cList" data-stagger></ul>
      <div class="vx-pad-h">${btn(`${icon('add', 18)}Añadir servicio`, { kind: 'tonal', block: true, go: 'M9.06?id=nuevo' })}</div></div>`);
    const paint = () => {
      const l = E().catalogo, pau = l.filter((c) => !c.visible).length;
      $('#cSub', el).textContent = `${plural(l.length, 'servicio', 'servicios')}${pau ? ` · ${plural(pau, 'servicio pausado', 'servicios pausados')}` : ''}`;
      $('#cList', el).innerHTML = l.map((c, i) => `<li class="vx-order" style="--i:${i}"><div class="vx-order-main vx-static"><span class="vx-order-text"><span class="md-title-small">${esc(c.titulo)}</span>
        <span>${statusTag(c.visible ? 'success' : 'neutral', c.visible ? 'Visible' : 'Pausado')}</span><span class="md-body-medium vx-muted vx-tab-num">${c.oficio} · ${c.min} min · ${c.pedido ? `Pedido ${c.de ? `${c.pedido}/${c.de}` : c.pedido} ${c.pedido === 1 && !c.de ? 'vez' : 'veces'}` : 'Aún sin pedidos'}</span><b class="md-title-small vx-tab-num">Desde ${money(c.desde)}</b></span>
        ${switchHtml('vis_' + c.id, `<span class="md-sr-only">${esc(c.titulo)} visible en tu perfil</span>`, c.visible)}</div>
        <div class="vx-order-act">${btn('Editar', { kind: 'text', go: `M9.06?id=${c.id}` })}</div></li>`).join('') || `<li>${stateBlock({ icon: 'book', title: 'Aún no tienes servicios' })}</li>`;
    };
    wireControls(el);
    el.addEventListener('change', (e) => { const t = e.target.closest('input[role=switch]'); if (!t || !t.id.startsWith('vis_')) return; const c = E().catalogo.find((x) => 'vis_' + x.id === t.id); c.visible = t.checked; set({ emp: E() }); toast(`${c.titulo}: ${c.visible ? 'visible' : 'pausado'}`); });
    paint(); el.__un = subscribe(paint); return el;
  },
  mount(el, ctx) { if (ctx.first) $$('[data-stagger]', el).forEach(stagger); return el.__un; },
});

// ── M9.06 · Servicio (pantalla de flujo) ────────────────────────────────────
register('M9.06', {
  render(ctx) {
    const nuevo = ctx.params.id === 'nuevo', c0 = nuevo ? { id: 'cs' + Date.now(), titulo: '', desde: 0, min: 60, texto: '', oficio: 'Climatización', pedido: 0, visible: true } : E().catalogo.find((x) => x.id === ctx.params.id) || E().catalogo[0];
    const el = h(`<div class="vx-page"><header class="vx-sheet-head vx-flowhead"><h2 id="sheet-title" class="md-title-large md-sheet-title" tabindex="-1">${nuevo ? 'Nuevo servicio' : esc(c0.titulo)}</h2>${iconBtn('close', 'Cerrar', 'data-close')}</header>
      <div class="vx-body vx-pad-h">${nuevo ? '' : `<p class="md-body-large vx-tab-num">${c0.pedido ? `Lo han pedido ${plural(c0.pedido, 'vez', 'veces')}.` : 'Todavía nadie lo ha pedido.'}</p>`}${switchHtml('sVis', 'Visible en tu perfil', c0.visible)}
        <div class="vx-form">${field({ id: 'sTit', label: 'Nombre del servicio', value: c0.titulo })}${select({ id: 'sOfi', label: 'Oficio', options: ['Climatización', 'Electricidad', 'Plomería', 'Refrigeración'], value: c0.oficio })}
          ${field({ id: 'sPre', label: 'Precio desde (USD)', value: c0.desde ? num(c0.desde) : '', inputmode: 'decimal' })}${field({ id: 'sMin', label: 'Duración (minutos)', value: c0.min, inputmode: 'numeric' })}${area({ id: 'sTxt', label: 'Qué incluye', value: c0.texto, rows: 3 })}</div></div>
      <footer class="vx-actionbar">${btn('Guardar servicio', { kind: 'filled', block: true, id: 'sSave' })}</footer></div>`);
    wireControls(el);
    el.querySelector('#sSave').addEventListener('click', async () => {
      const t = el.querySelector('#sTit').value.trim(), pre = num0(el, 'sPre'), min = Math.round(num0(el, 'sMin')), txt = el.querySelector('#sTxt').value.trim();
      fieldError(el, 'sTit', !t ? 'Escribe el nombre del servicio' : ''); fieldError(el, 'sPre', pre <= 0 ? 'Escribe el precio' : ''); fieldError(el, 'sMin', min <= 0 ? 'Escribe cuántos minutos dura' : ''); if (!t || pre <= 0 || min <= 0) return;
      Object.assign(c0, { titulo: t, desde: pre, min, texto: txt, oficio: el.querySelector('#sOfi').value, visible: el.querySelector('#sVis').checked });
      if (nuevo) E().catalogo.push(c0); set({ emp: E() }); toast(nuevo ? 'Añadiste el servicio' : 'Guardaste el servicio'); await closeOverlay();
    });
    return el;
  },
});

// ── M9.07 · Perfil público ──────────────────────────────────────────────────
register('M9.07', {
  render() {
    const el = h(`<div>${topbar('Perfil', { back: false, trailing: avisosBtn() })}
      <section class="vx-profile vx-pad-h">${avatar('CP', true)}<div><p class="md-title-medium">${esc(E().perfil.nombre)}</p><p id="pfSello"></p></div></section>
      <dl class="vx-stats3 vx-pad-h vx-stats3--3" id="pfStats"></dl>
      <section class="vx-pad-h"><h2 class="md-title-medium">Zonas de servicio</h2><p>${E().perfil.zonas.map((z) => `<span class="vx-tag md-label-medium">${esc(z)}</span> `).join('')}</p>
        <h2 class="md-title-medium vx-block-t">Teléfono público</h2><div id="pfTelBox"></div><div class="vx-form">${field({ id: 'pfTel', label: 'Teléfono de la empresa', type: 'tel', inputmode: 'tel', value: E().perfil.telefono })}${btn('Guardar teléfono', { kind: 'tonal', id: 'pfSave' })}</div>
        ${btn('Ver mi perfil público', { kind: 'text', go: 'M4.05' })}</section>
      ${sec('Verificación')}<ul class="vx-list" role="list" id="pfDocs"></ul>
      <ul class="vx-list" role="list">${row({ ic: 'wallet', title: 'Membresía', go: 'M9.08' })}${row({ ic: 'bell', title: 'Avisos en vivo', go: 'O.AVI' })}${row({ ic: 'swap', title: 'Cambiar de modo', go: 'O.MOD' })}</ul></div>`);
    const paint = () => {
      const p = E().perfil, ok = p.docs.every((d) => d.estado === 'verificado');
      $('#pfSello', el).innerHTML = ok ? statusTag('success', 'Verificado') : statusTag('info', 'Verificación en curso');
      $('#pfStats', el).innerHTML = [[num(p.rating, 1), 'calificación'], [p.opiniones, 'opiniones'], [terminadas(), 'trabajos']].map(([n, l]) => `<div class="vx-stat vx-stat--c"><dd class="md-title-medium vx-tab-num">${n}</dd><dt class="md-body-small vx-muted">${l}</dt></div>`).join('');
      $('#pfTelBox', el).innerHTML = p.telefono ? `<p class="md-body-large vx-tab-num">Los clientes pueden llamarte al ${esc(p.telefono)}.</p>` : banner('info', 'Los clientes no pueden llamarte. Hablan contigo por WhatsApp desde VexBiz.');
      $('#pfDocs', el).innerHTML = p.docs.map((d) => `<li class="md-li md-li--2"><span class="md-li-text"><span class="md-li-title md-body-large">${esc(d.nombre)}</span></span><span class="md-li-end">${statusTag(d.estado === 'verificado' ? 'success' : 'info', d.estado === 'verificado' ? 'Verificado' : 'Pendiente')}</span></li>`).join('');
    };
    el.querySelector('#pfSave').addEventListener('click', () => { const v = el.querySelector('#pfTel').value.trim();
      fieldError(el, 'pfTel', v && !/^[+\d][\d\s-]{6,}$/.test(v) ? 'Revisa el teléfono: sólo números, espacios y guiones' : ''); if (v && !/^[+\d][\d\s-]{6,}$/.test(v)) return;
      E().perfil.telefono = v; set({ emp: E() }); toast(v ? 'Los clientes ya pueden llamarte' : 'Quitaste el teléfono público'); });
    paint(); el.__un = subscribe(paint); return el;
  },
  mount(el) { return el.__un; },
});

// ── M9.08 · Membresía ───────────────────────────────────────────────────────
register('M9.08', {
  render() {
    const m = membresiaEmp, hasta = new Date(m.desde.getFullYear(), m.desde.getMonth(), m.desde.getDate() + m.dias), dias = Math.round((hasta - HOY) / 86400000);
    const el = h(page(topbar('Membresía'), `
      <section class="vx-pad-h"><h2 class="md-title-large">${m.plan}</h2><p class="md-title-medium vx-tab-num">${money(m.costo)} USD · cada ${m.dias} días</p>
        <p>${statusTag(dias <= 14 ? 'warning' : 'success', `Vence en ${plural(dias, 'día', 'días')}`)}</p><p class="md-body-large vx-tab-num">Del ${date(m.desde)} al ${date(hasta)}</p></section>
      <div class="vx-pad-h">${switchHtml('mRen', 'Renovar sola al vencer', m.renueva)}</div>
      <ul class="vx-checklist vx-pad-h" role="list">${['Recibir solicitudes de clientes', 'Catálogo de servicios en tu perfil', 'Sello de empresa verificada'].map((l) => `<li>${icon('check', 18)}<span class="md-body-large">${l}</span></li>`).join('')}</ul>
      <p class="md-body-medium vx-muted vx-pad-h">El pago de la membresía se coordina con soporte.</p>`, btn('Coordinar la renovación con soporte', { kind: 'filled', block: true, id: 'mGo' })));
    wireControls(el);
    el.addEventListener('change', (e) => { if (e.target.id === 'mRen') { m.renueva = e.target.checked; toast(m.renueva ? 'Se renovará sola' : 'No se renovará sola'); } });
    el.querySelector('#mGo').addEventListener('click', () => toast('Soporte te escribe por WhatsApp para coordinar el pago'));
    return el;
  },
});
