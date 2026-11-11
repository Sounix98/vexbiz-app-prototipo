// M4 · Servicios: servicios, servicio técnico, quién presta el servicio, perfiles, seguros, aseguradora,
// auxilio vial y empresa de auxilio. Todo lo que contrata se hace por WhatsApp: aquí avisa y no abre nada real.
import { register } from './registry.js';
import { h, icon, btn, iconBtn, topbar, stateBlock, toast, $, $$ } from '../ui.js';
import { avatar, stars, page, statusTag, row, whatsappBtn, switchHtml, wireControls } from '../market.js';
import { state, set } from '../store.js';
import { stagger } from '../motion.js';
import { oficios, prestadores, aseguradoras, otrosSeguros, auxilioTipos, auxilioEmpresas, auxilioEmpresa, cuentales, HORARIO } from '../data2.js';
import { num, esc, plural } from '../format.js';

const WA = (txt) => `data-toast="Abre WhatsApp de VexBiz${txt ? ': ' + esc(txt) : ''}"`;
const horario = `<p class="md-body-medium vx-muted vx-pad-h vx-hours">${HORARIO}</p>`;
const usd = (n) => `$ ${num(n, Number.isInteger(n) ? 0 : 2)} USD`;
const tarifa = (base, km) => `${usd(base)} + $ ${num(km, 2)} USD/km`;

// Totales de catálogo (6 empresas, 48 técnicos y empresas, 3 aseguradoras): son datos de entrada de Figma, no se calculan.
// ── M4.01 · Servicios ───────────────────────────────────────────────────────
register('M4.01', {
  render() {
    const card = (ic, title, line1, line2, to) => `<li><button type="button" class="vx-svc md-sl vx-press" data-go="${to}"><span class="vx-svc-ico">${icon(ic, 28)}</span>
      <span class="vx-svc-text"><span class="md-title-medium">${title}</span><span class="md-body-medium">${line1}</span><span class="md-body-medium vx-muted">${line2}</span></span><span class="vx-muted">${icon('chevron')}</span></button></li>`;
    return h(`<div>${topbar('Servicios', { back: false, trailing: iconBtn('bell', 'Avisos', 'data-go="M6.17"') })}
      <ul class="vx-svclist vx-pad-h" role="list" data-stagger>
        ${card('car', 'Auxilio vial', '¿Te quedaste en la vía?', '6 empresas · 24/7', 'M4.08')}
        ${card('wrench', 'Servicio técnico', 'Reparación e instalación por oficio', '48 técnicos y empresas', 'M4.02')}
        ${card('umbrella', 'Seguros', 'Pólizas y cotizaciones', '3 aseguradoras', 'M4.06')}</ul>
      <ul class="vx-list" role="list">${row({ ic: 'receipt', title: 'Servicios que pedí', go: 'M6.12' })}</ul>
      <p class="md-body-medium vx-muted vx-pad-h vx-hours">VexBiz atiende por WhatsApp de lunes a sábado, 8:00 a 18:00.</p></div>`);
  },
  mount(el, ctx) { if (ctx.first) $$('[data-stagger]', el).forEach(stagger); },
});

// ── M4.02 · Servicio técnico ────────────────────────────────────────────────
register('M4.02', {
  render() {
    return h(`<div>${topbar('Servicio técnico')}<p class="md-body-large vx-pad-h">Elige qué necesitas reparar o instalar.</p>
      <ul class="vx-list" role="list">${oficios.map((o) => o.n
        ? row({ ic: 'wrench', title: o.nombre, sup: `${o.n} disponibles`, go: `M4.03?id=${o.id}` })
        : row({ ic: 'chat', title: o.nombre, sup: 'Escríbenos por WhatsApp', attrs: WA(`necesito un técnico de ${o.nombre.toLowerCase()}`) })).join('')}</ul>
      ${horario}<div class="vx-pad-h">${whatsappBtn('Escríbenos por WhatsApp', WA())}</div></div>`);
  },
});

// ── M4.03 · Quién presta el servicio ────────────────────────────────────────
register('M4.03', {
  render(ctx) {
    const of = oficios.find((o) => o.id === ctx.params.id) || oficios[0];
    const el = h(`<div>${topbar(of.nombre)}<p class="md-body-medium vx-muted vx-pad-h">${of.n} disponibles</p>
      <p class="md-body-large vx-pad-h">Una empresa responde con su equipo. Un técnico trabaja por su cuenta.</p>
      <div class="vx-pad-h"><div class="md-seg" role="tablist" aria-label="Quién presta el servicio">${[['todos', 'Todos'], ['empresa', 'Empresas'], ['tecnico', 'Técnicos']].map(([k, t], i) => `<button type="button" role="tab" class="md-seg-item md-sl md-label-large${i === 0 ? ' md-seg-item--on' : ''}" data-seg="${k}" aria-selected="${i === 0}">${t}</button>`).join('')}</div></div>
      <ul class="vx-provlist vx-pad-h" role="list" id="provList"></ul>
      <p class="md-body-medium vx-muted vx-pad-h">Estos son todos los que hay hoy.</p><div class="vx-pad-h">${whatsappBtn('Escríbenos por WhatsApp', WA())}</div></div>`);
    let seg = 'todos';
    const card = (p) => `<li class="vx-prov"><button type="button" class="vx-prov-main md-sl vx-press" data-go="${p.tipo === 'empresa' ? 'M4.05' : 'M4.04?id=' + p.id}" aria-label="${esc(p.nombre)}, ${p.rol}">
      ${avatar(p.sigla, true)}<span class="vx-prov-text"><span class="md-title-small">${esc(p.nombre)}</span><span class="md-label-medium vx-muted">${p.rol}</span><span class="md-body-medium">${esc(p.texto)}</span>
      <span class="md-body-medium vx-muted">${icon('pin', 14)} ${esc(p.donde)}${p.anios ? ` · ${p.anios} años` : ''}</span>
      <span class="vx-tagrow">${p.tags.map((t) => `<span class="vx-tag md-label-small">${esc(t)}</span>`).join('')}</span>
      <span class="vx-provmeta md-body-medium vx-tab-num">${p.rating ? `<b>${stars(p.rating)}</b>` : '<span class="vx-muted">Todavía sin valoraciones</span>'}${p.tipo === 'tecnico' ? statusTag(p.ahora ? 'success' : 'neutral', p.ahora ? 'Disponible ahora' : 'No disponible ahora') : ''}${p.desde ? `<span>Desde $ ${p.desde}</span>` : ''}</span></span></button></li>`;
    const paint = () => { const l = prestadores.filter((p) => seg === 'todos' || p.tipo === seg);
      el.querySelector('#provList').innerHTML = l.map(card).join('') || `<li>${stateBlock({ icon: 'users', title: 'No hay nadie en esta lista hoy' })}</li>`; };
    el.addEventListener('click', (e) => { const b = e.target.closest('[data-seg]'); if (!b) return; seg = b.dataset.seg;
      $$('[data-seg]', el).forEach((x) => { const on = x === b; x.classList.toggle('md-seg-item--on', on); x.setAttribute('aria-selected', on); }); paint(); });
    paint(); return el;
  },
});

// ── M4.04 · Perfil de técnico ───────────────────────────────────────────────
register('M4.04', {
  render(ctx) {
    const p = prestadores.find((x) => x.id === ctx.params.id && x.tipo === 'tecnico') || prestadores[1];
    const kv = (k, v) => `<div class="vx-stat"><dt class="md-body-small vx-muted">${k}</dt><dd class="md-title-small vx-tab-num">${v}</dd></div>`;
    const primero = p.nombre.split(' ')[0];
    return h(page(topbar(p.nombre, { trailing: iconBtn('share', 'Compartir', 'data-toast="Enlace copiado"') }), `
      <section class="vx-profile vx-pad-h">${avatar(p.sigla, true)}<div><p class="md-label-medium vx-verified">${icon('check', 16)} Verificado por VexBiz</p><p class="md-body-medium">${p.rol}</p>
        <p class="md-body-medium vx-tab-num">${p.rating ? stars(p.rating) : 'Todavía sin valoraciones'} · ${esc(p.ciudad)}</p><p>${statusTag(p.ahora ? 'success' : 'neutral', p.ahora ? 'Disponible ahora' : 'No disponible ahora')}</p></div></section>
      <dl class="vx-stats vx-pad-h">${kv('Experiencia', `${p.anios} años`)}${kv('Cobertura', esc(p.donde))}${kv('Oficios', p.oficios.length)}${kv('Desde', `$ ${p.desde}`)}${kv('Nivel de academia', p.nivel)}${kv('Técnico fundador', p.fundador ? 'Sí' : 'No')}${kv('Respuestas que resolvieron', p.resueltas)}</dl>
      <section class="vx-pad-h"><h2 class="md-title-medium">Qué hace</h2><ul class="vx-tagrow">${p.oficios.map((o) => `<li class="vx-tag md-label-medium">${esc(o)}</li>`).join('')}</ul></section>
      <section class="vx-pad-h"><h2 class="md-title-medium">Sobre ${primero}</h2><p class="md-body-large">${esc(p.sobre)}</p></section>
      <section class="vx-pad-h"><h2 class="md-title-medium">Cómo se contrata</h2><p class="md-body-large">VexBiz recibe tu mensaje y coordina con el técnico.</p><p class="md-body-medium vx-muted">${HORARIO}</p></section>`,
      whatsappBtn(`Escribir por WhatsApp sobre ${primero}`, WA(`quiero contratar a ${p.nombre}`))));
  },
});

// ── M4.05 · Perfil de empresa de servicio ───────────────────────────────────
register('M4.05', {
  render() {
    const p = prestadores[0], kv = (k, v) => `<div class="vx-stat"><dt class="md-body-small vx-muted">${k}</dt><dd class="md-title-small vx-tab-num">${v}</dd></div>`;
    return h(page(topbar(p.nombre, { trailing: iconBtn('share', 'Compartir', 'data-toast="Enlace copiado"') }), `
      <section class="vx-profile vx-pad-h">${avatar(p.sigla, true)}<div><p class="md-label-medium vx-verified">${icon('check', 16)} Verificado por VexBiz</p><p class="md-body-medium">${p.rol}</p>
        <p class="md-body-medium vx-tab-num">${stars(p.rating)} · ${esc(p.ciudad)}</p></div></section>
      <dl class="vx-stats vx-pad-h">${kv('Provincia', p.provincia)}${kv('Servicios', p.servicios.length)}${kv('Oficios', p.oficios.length)}</dl>
      <section class="vx-pad-h"><h2 class="md-title-medium">Servicios que presta</h2><ul class="vx-checklist" role="list">${p.servicios.map((s) => `<li>${icon('check', 18)}<span class="md-body-large">${esc(s)}</span></li>`).join('')}</ul></section>
      <section class="vx-pad-h"><h2 class="md-title-medium">Oficios</h2><ul class="vx-tagrow">${p.oficios.map((o) => `<li class="vx-tag md-label-medium">${esc(o)}</li>`).join('')}</ul></section>
      <section class="vx-pad-h"><h2 class="md-title-medium">Cómo se contrata</h2><p class="md-body-large">VexBiz recibe tu mensaje y coordina con la empresa.</p><p class="md-body-medium vx-muted">${HORARIO}</p></section>`,
      whatsappBtn('Escribir por WhatsApp', WA(`quiero contratar a ${p.nombre}`))));
  },
});

// ── M4.06 · Seguros ─────────────────────────────────────────────────────────
register('M4.06', {
  render() {
    const card = (a) => `<li class="vx-order"><div class="vx-order-main vx-static"><span class="vx-order-text"><span class="md-title-small">${esc(a.nombre)}</span><span class="md-body-medium vx-muted">${esc(a.ciudad)}</span>
      ${a.lista.map((p) => `<span class="vx-poliza"><span class="md-body-large">${esc(p.t)}${p.sub ? ' · ' + esc(p.sub) : ''}</span><b class="md-body-large vx-tab-num">${usd(p.p)} al año</b></span>`).join('')}</span></div>
      <div class="vx-order-act">${btn('Ver aseguradora', { kind: 'outlined', go: `M4.07?id=${a.id}` })}${whatsappBtn('Cotizar', WA(`quiero cotizar con ${a.nombre}`)).replace('md-btn--block', '')}</div></li>`;
    return h(`<div>${topbar('Seguros')}<p class="md-body-large vx-pad-h">Estas aseguradoras cotizan directo contigo.</p><ul class="vx-orders vx-pad-h" role="list">${aseguradoras.map(card).join('')}</ul>
      <section class="vx-pad-h"><h2 class="md-title-medium">¿Necesitas otro seguro?</h2><div class="vx-chipwrap">${otrosSeguros.map((s) => `<span class="md-chip-wrap"><button type="button" class="md-chip md-sl md-label-large" ${WA(`necesito cotizar: ${s.toLowerCase()}`)}>${esc(s)}</button></span>`).join('')}</div>
        ${btn('Escríbenos si no está en la lista', { kind: 'text', attrs: WA() })}</section>${horario}</div>`);
  },
});

// ── M4.07 · Aseguradora ─────────────────────────────────────────────────────
register('M4.07', {
  render(ctx) {
    const a = aseguradoras.find((x) => x.id === ctx.params.id) || aseguradoras[0], kv = (k, v) => `<div class="vx-stat"><dt class="md-body-small vx-muted">${k}</dt><dd class="md-title-small vx-tab-num">${v}</dd></div>`;
    return h(page(topbar(a.nombre, { trailing: iconBtn('share', 'Compartir', 'data-toast="Enlace copiado"') }), `
      <section class="vx-profile vx-pad-h">${avatar(a.sigla, true)}<div><p class="md-label-medium vx-verified">${icon('check', 16)} Verificado por VexBiz</p><p class="md-body-medium">Aseguradora</p>
        <p class="md-body-medium vx-tab-num">${stars(a.rating)} · ${esc(a.ciudad)}</p></div></section>
      <dl class="vx-stats vx-pad-h">${kv('Provincia', esc(a.provincia))}${kv('Pólizas', a.polizas)}</dl>
      <section class="vx-pad-h"><h2 class="md-title-medium">Pólizas que ofrece</h2><ul class="vx-orders vx-nopad" role="list">${a.lista.map((p) => `<li class="vx-order"><div class="vx-order-main vx-static"><span class="vx-order-text"><span class="md-title-small">${esc(p.t)}</span>${p.sub ? `<span class="md-body-medium vx-muted">${esc(p.sub)}</span>` : ''}
        <b class="md-body-large vx-tab-num">${usd(p.p)} al año</b><span class="md-body-medium">${esc(p.d)}</span></span></div><div class="vx-order-act">${btn('Cotizar esta póliza', { kind: 'text', attrs: WA(`quiero cotizar ${p.t.toLowerCase()} con ${a.nombre}`) })}</div></li>`).join('')}</ul></section>`,
      whatsappBtn('Cotizar por WhatsApp', WA(`quiero cotizar con ${a.nombre}`))));
  },
});

// ── Ubicación para el mensaje de auxilio (solo se pide al activar el interruptor) ──
function pedirUbicacion(done) {
  if (!navigator.geolocation) { done('error'); return; }
  try { navigator.geolocation.getCurrentPosition(() => done('lista'), () => done('error'), { timeout: 6000, maximumAge: 60000 }); } catch { done('error'); }
}
const ubicHtml = () => `<div class="vx-ubic">${switchHtml('ubic', 'Añadir mi ubicación al mensaje', state.ubicacion === 'lista')}<p class="md-body-medium vx-muted">Envía un enlace al punto del mapa</p><p class="md-body-medium vx-ubic-st" id="ubicSt" role="status" aria-live="polite"></p></div>`;
function wireUbic(el) {
  const sw = el.querySelector('#ubic'), st = el.querySelector('#ubicSt');
  const paint = () => { st.innerHTML = state.ubicacion === 'lista' ? `${icon('check', 16)} Ubicación lista: se envía un enlace al mapa.` : state.ubicacion === 'error' ? `${icon('warning', 16)} No pudimos obtener tu ubicación. Cuéntales dónde estás en el mensaje.` : ''; st.className = `md-body-medium vx-ubic-st ${state.ubicacion === 'lista' ? 'is-ok' : state.ubicacion === 'error' ? 'is-warn' : ''}`; };
  sw.addEventListener('change', () => {
    if (!sw.checked) { set({ ubicacion: null }); paint(); return; }
    st.textContent = 'Buscando tu ubicación…';
    pedirUbicacion((r) => { set({ ubicacion: r }); sw.checked = r === 'lista'; sw.nextElementSibling.classList.toggle('md-switch-track--on', r === 'lista'); paint(); });
  });
  paint();
}

// ── M4.08 · Auxilio vial ────────────────────────────────────────────────────
register('M4.08', {
  render() {
    const el = h(`<div>${topbar('Auxilio vial')}<section class="vx-pad-h vx-stack"><h2 class="md-title-large">¿Necesitas ayuda ahora?</h2><p class="md-body-large">Atendemos todos los días, 24 horas.</p>
      ${ubicHtml()}
      <h2 class="md-title-medium">¿Qué necesitas?</h2><div class="vx-chipwrap" role="radiogroup" aria-label="¿Qué necesitas?">${auxilioTipos.map((t) => `<span class="md-chip-wrap"><button type="button" role="radio" aria-checked="false" class="md-chip md-sl md-label-large" data-tipo="${t}">${t}</button></span>`).join('')}</div></section>
      <ul class="vx-orders vx-pad-h" role="list" id="auxList"></ul>
      <section class="vx-pad-h"><h2 class="md-title-medium">Cuando escribas, cuéntales</h2><ul class="vx-checklist" role="list">${cuentales.map((c) => `<li>${icon('check', 18)}<span class="md-body-large">${c}</span></li>`).join('')}</ul></section></div>`);
    wireControls(el); wireUbic(el);
    let tipo = null;
    const paint = () => { const l = auxilioEmpresas.filter((e) => !tipo || e.tipo === tipo);
      el.querySelector('#auxList').innerHTML = l.map((e) => `<li class="vx-order"><div class="vx-order-main vx-static"><span class="vx-order-text"><span class="md-title-small">${esc(e.empresa)}</span><span class="md-body-medium vx-muted">${esc(e.ciudad)}</span>
        <span class="md-body-large">${e.servicio}</span><span class="md-body-medium vx-tab-num">${tarifa(e.base, e.km)} · hasta ${e.hasta} km</span></span></div>
        <div class="vx-order-act">${e.ver ? btn('Ver empresa', { kind: 'outlined', go: 'M4.09' }) : ''}${whatsappBtn('Pedir ayuda', WA(`necesito ${e.servicio.toLowerCase()}${state.ubicacion === 'lista' ? ' (con mi ubicación)' : ''}`)).replace('md-btn--block', '')}</div></li>`).join('')
        || `<li>${stateBlock({ icon: 'car', title: 'Hoy no hay empresas para eso en la lista', text: 'Escríbenos por WhatsApp y te ayudamos a conseguir una.', action: whatsappBtn('Escríbenos por WhatsApp', WA(`necesito ${tipo?.toLowerCase()}`)) })}</li>`; };
    el.addEventListener('click', (e) => { const c = e.target.closest('[data-tipo]'); if (!c) return; tipo = tipo === c.dataset.tipo ? null : c.dataset.tipo;
      $$('[data-tipo]', el).forEach((b) => { const on = b.dataset.tipo === tipo; b.classList.toggle('md-chip--selected', on); b.setAttribute('aria-checked', on); }); paint(); });
    paint(); return el;
  },
});

// ── M4.09 · Empresa de auxilio ──────────────────────────────────────────────
register('M4.09', {
  render() {
    const a = auxilioEmpresa, flota = a.ofrece.reduce((s, o) => s + o.flota, 0), kv = (k, v) => `<div class="vx-stat"><dt class="md-body-small vx-muted">${k}</dt><dd class="md-title-small vx-tab-num">${v}</dd></div>`;
    const el = h(page(topbar(a.nombre, { trailing: iconBtn('share', 'Compartir', 'data-toast="Enlace copiado"') }), `
      <section class="vx-profile vx-pad-h">${avatar(a.sigla, true)}<div><p class="md-label-medium vx-verified">${icon('check', 16)} Verificado por VexBiz</p><p class="md-body-medium">Empresa de auxilio vial</p>
        <p class="md-body-medium vx-tab-num">${stars(a.rating)} · ${esc(a.ciudad)}</p></div></section>
      <dl class="vx-stats vx-pad-h">${kv('Provincia', a.provincia)}${kv('Radio de cobertura', `hasta ${a.radio} km`)}${kv('Flota', plural(flota, 'vehículo', 'vehículos'))}</dl>
      <section class="vx-pad-h"><h2 class="md-title-medium">Qué ofrece y cuánto cuesta</h2><ul class="vx-orders vx-nopad" role="list">${a.ofrece.map((o) => `<li class="vx-order"><div class="vx-order-main vx-static"><span class="vx-order-text"><span class="md-title-small">${o.servicio}</span>
        <span class="md-body-large vx-tab-num">${tarifa(o.base, o.km)}</span><span class="md-body-medium vx-muted vx-tab-num">Hasta ${o.hasta} km · flota de ${o.flota}</span></span></div></li>`).join('')}</ul></section>
      <section class="vx-pad-h"><h2 class="md-title-medium">Cuando escribas, cuéntales</h2><ul class="vx-checklist" role="list">${cuentales.map((c) => `<li>${icon('check', 18)}<span class="md-body-large">${c}</span></li>`).join('')}</ul>${ubicHtml()}</section>`,
      whatsappBtn('Pedir ayuda por WhatsApp', WA('necesito auxilio vial'))));
    wireControls(el); wireUbic(el); return el;
  },
});
