// M7 · Modo Tienda (2/2): ventas, liquidaciones (y su detalle), cuentas, «Más», carritos y apartadas,
// reclamos y devoluciones, reseñas, ajustes, cupones, envíos, documentos, cómo se ve mi tienda e importadora.
import { register } from './registry.js';
import { h, icon, btn, iconBtn, topbar, stateBlock, toast, $, $$ } from '../ui.js';
import { avatar, stars, page, field, fieldError, area, select, statusTag, row, banner, switchHtml, wireControls } from '../market.js';
import { go, back, closeOverlay } from '../router.js';
import { state, set, subscribe } from '../store.js';
import { COMISION, MIN_TRANSFERENCIA, ventas, liquidaciones, abonos, resenas } from '../data4.js';
import { S, existencias, modoLbl, avisosBtn } from './m7a.js';
import { money, num, esc, plural, pct, round2 } from '../format.js';

const sec = (t) => `<h2 class="md-label-large vx-sub vx-sub--list">${t}</h2>`;
const segHtml = (name, items, cur) => `<div class="md-seg" role="tablist" aria-label="${name}">${items.map(([k, t]) => `<button type="button" role="tab" class="md-seg-item md-sl md-label-large${k === cur ? ' md-seg-item--on' : ''}" data-seg="${k}" aria-selected="${k === cur}">${t}</button>`).join('')}</div>`;
const wireSeg = (el, cb) => el.addEventListener('click', (e) => { const b = e.target.closest('[data-seg]'); if (!b) return; $$('[data-seg]', el).forEach((x) => { const on = x === b; x.classList.toggle('md-seg-item--on', on); x.setAttribute('aria-selected', on); }); cb(b.dataset.seg); });
/** Selector Ventas · Liquidaciones · Cuentas de la pestaña Dinero. */
const dineroSeg = (cur) => `<div class="vx-pad-h"><div class="md-seg" role="tablist" aria-label="Dinero">${[['M7.11', 'Ventas'], ['M7.12', 'Liquidaciones'], ['M7.13', 'Cuentas']].map(([to, t]) => `<button type="button" role="tab" class="md-seg-item md-sl md-label-large${to === cur ? ' md-seg-item--on' : ''}" data-go="${to}" data-kind="swap" aria-selected="${to === cur}">${t}</button>`).join('')}</div></div>`;
const kv = (k, v) => `<div class="vx-kv"><dt class="md-body-medium vx-muted">${k}</dt><dd class="md-body-large vx-tab-num">${v}</dd></div>`;

// ── Cuentas por liquidación ─────────────────────────────────────────────────
// Neto de una liquidación con detalle: ventas brutas − comisión (12 %) − retenciones ± ajustes. Todo calculado.
const comisionLiq = (l) => pct(l.brutas, COMISION);
const ajustesLiq = (l) => round2(l.ajustes.reduce((s, a) => s + a[2], 0));
export const netoLiq = (l) => (l.brutas != null ? round2(l.brutas - comisionLiq(l) - l.retenciones + ajustesLiq(l)) : l.neto);

// ── M7.11 · Ventas ──────────────────────────────────────────────────────────
register('M7.11', {
  render() {
    const max = Math.max(...ventas.meses.map((m) => m[2])), com = round2(ventas.bruto - ventas.neto), p = Math.round((com / ventas.bruto) * 100);
    return h(`<div>${topbar('Dinero', { back: false, trailing: avisosBtn() })}${modoLbl()}${dineroSeg('M7.11')}
      <section class="vx-pad-h vx-levelbox"><p class="md-body-medium vx-muted">Ingreso neto acumulado</p><p class="md-display-small vx-tab-num">${money(ventas.neto)}</p><p class="md-body-medium vx-tab-num">USD · ${plural(ventas.pedidos, 'pedido pagado', 'pedidos pagados')}</p></section>
      <dl class="vx-pad-h vx-dl">${kv('Total bruto vendido', money(ventas.bruto))}${kv(`Comisión media de VexBiz (${p} %)`, `− ${money(com)}`)}</dl>
      <p class="md-body-small vx-muted vx-pad-h">Cuenta los últimos doce meses y sólo pedidos pagados. La comisión se fija el día de cada venta.</p>
      <section class="vx-pad-h"><h2 class="md-title-medium">Evolución mensual</h2><ul class="vx-months" role="list">${ventas.meses.map(([m, n, v]) => `<li class="vx-month"><div class="vx-month-h"><span class="md-body-large">${m}</span><span class="md-body-medium vx-muted vx-tab-num">${plural(n, 'pedido', 'pedidos')}</span><b class="md-body-large vx-tab-num">$ ${num(v, 0)}</b></div>
        <span class="vx-bar-track" aria-hidden="true"><span class="vx-bar-fill" style="transform: scaleX(${(v / max).toFixed(3)}); transform-origin: left"></span></span></li>`).join('')}</ul></section>
      <div class="vx-pad-h vx-pad-v">${btn('Ver liquidaciones', { kind: 'text', block: true, go: 'M7.12', kindNav: 'swap' })}</div></div>`);
  },
});

// ── M7.12 · Liquidaciones ───────────────────────────────────────────────────
register('M7.12', {
  render() {
    return h(`<div>${topbar('Dinero', { back: false, trailing: avisosBtn() })}${modoLbl()}${dineroSeg('M7.12')}
      <ul class="vx-orders vx-pad-h" role="list">${liquidaciones.map((l) => { const n = netoLiq(l);
        return `<li class="vx-order"><button type="button" class="vx-order-main md-sl vx-press" data-liq="${l.id}" data-go="O.DET" aria-label="Detalle del período ${l.periodo}"><span class="vx-order-text"><span class="md-body-medium vx-muted">Período: ${l.periodo}</span><b class="md-headline-small vx-tab-num">${money(n)}</b><span class="md-body-medium vx-muted">USD</span>
          <span>${l.estado === 'transferida' ? statusTag('success', 'Transferida') : statusTag('neutral', 'Acumulada')}</span><span class="md-body-medium">${l.estado === 'acumulada' ? `${l.cuando} (mínimo ${money(MIN_TRANSFERENCIA)})` : l.cuando}</span></span><span class="vx-muted">${icon('chevron')}</span></button></li>`; }).join('')}</ul></div>`);
  },
  mount(el) { el.addEventListener('click', (e) => { const b = e.target.closest('[data-liq]'); if (b) state.flow.liq = b.dataset.liq; }); },
});

// ── M7.12 · Hoja «Detalle del período» ──────────────────────────────────────
register('O.DET', {
  render() {
    const l = liquidaciones.find((x) => x.id === state.flow.liq) || liquidaciones[0], r = (k, v, sub, strong) => `<div class="vx-sumrow${strong ? ' is-strong' : ''}"><dt class="md-body-large">${k}${sub ? `<br><span class="md-body-medium vx-muted">${sub}</span>` : ''}</dt><dd class="md-body-large vx-tab-num">${v}</dd></div>`;
    const sg = (n) => `${n < 0 ? '−' : '+'} ${money(Math.abs(n))}`;
    return h(`<div><div class="vx-sheet-head"><h2 id="sheet-title" class="md-title-large md-sheet-title" tabindex="-1">Detalle del período</h2>${iconBtn('close', 'Cerrar', 'data-close')}</div><p class="md-body-medium vx-muted vx-pad-h vx-tab-num">${l.periodo}</p>
      ${l.brutas != null ? `<dl class="vx-pad-h vx-dl">${r('Total de ventas brutas', money(l.brutas))}${r('Comisión del marketplace', `− ${money(comisionLiq(l))}`)}${r('Retenciones tributarias', `− ${money(l.retenciones)}`)}
        <h3 class="md-title-small vx-sub0">Ajustes</h3>${l.ajustes.map(([t, s, n]) => r(t, sg(n), s)).join('')}${r('Total neto liquidado', money(netoLiq(l)), '', true)}</dl>`
        : `<dl class="vx-pad-h vx-dl">${r('Total neto liquidado', money(l.neto), '', true)}</dl><p class="md-body-medium vx-muted vx-pad-h">El desglose de este período no está en la demo.</p>`}</div>`);
  },
});

// ── M7.13 · Cuentas ─────────────────────────────────────────────────────────
register('M7.13', {
  render() {
    const E = { abonado: 'success', espera: 'info', error: 'error' };
    const el = h(`<div>${topbar('Dinero', { back: false, trailing: avisosBtn() })}${modoLbl()}${dineroSeg('M7.13')}
      <section class="vx-pad-h"><div class="vx-sechead vx-sechead--0"><h2 class="md-title-medium">Cobro inmediato</h2><span id="ciSt"></span></div>
        ${switchHtml('ci', 'Recibes tu venta cuando el cliente paga', S().cobroInmediato)}<p class="md-body-medium vx-muted" id="ciTxt"></p></section>
      <h2 class="md-label-large vx-sub vx-sub--list">Últimos abonos</h2><ul class="vx-orders vx-pad-h" role="list">${abonos.map((a) => `<li class="vx-order"><div class="vx-order-main vx-static"><span class="vx-order-text"><span class="md-title-small vx-tab-num">Pedido ${a.id} · ${a.fecha}</span>
        <span>${statusTag(E[a.estado], a.estado === 'abonado' ? 'Abonado' : a.estado === 'espera' ? 'Esperando al banco' : 'No se pudo abonar')}</span><span class="md-body-medium vx-muted">${esc(a.nota)} · ${esc(a.ref)}</span></span>${a.monto ? `<b class="md-title-small vx-tab-num">${a.monto}</b>` : ''}</div></li>`).join('')}</ul>
      <h2 class="md-label-large vx-sub vx-sub--list">Cuentas bancarias</h2><ul class="vx-orders vx-pad-h" role="list" id="ctaList"></ul><p class="md-body-medium vx-muted vx-pad-h">1 cuenta retirada</p>
      <div class="vx-pad-h" id="ctaForm" hidden><div class="vx-form">${select({ id: 'cBanco', label: 'Banco', options: ['Banesco', 'Mercantil', 'BBVA Provincial', 'Bancamiga'], value: 'Banesco' })}${field({ id: 'cNum', label: 'Número de cuenta (20 dígitos)', inputmode: 'numeric' })}${select({ id: 'cTipo', label: 'Tipo de cuenta', options: ['Corriente', 'Ahorros'], value: 'Corriente' })}</div>
        <div class="vx-twin vx-pad-v">${btn('Cancelar', { kind: 'text', id: 'cCan' })}${btn('Guardar cuenta', { kind: 'filled', id: 'cSave' })}</div></div>
      <div class="vx-pad-h vx-pad-v">${btn(`${icon('add', 20)}Añadir cuenta bancaria`, { kind: 'filled', block: true, id: 'cAdd' })}</div></div>`);
    wireControls(el);
    const paintCi = () => { el.querySelector('#ciSt').innerHTML = statusTag(S().cobroInmediato ? 'success' : 'neutral', S().cobroInmediato ? 'Activo' : 'Apagado'); el.querySelector('#ciTxt').textContent = S().cobroInmediato ? 'Cuando el cliente paga, recibes tu venta en ese momento.' : 'Recibes tus ventas en cada liquidación.'; };
    const paint = () => { el.querySelector('#ctaList').innerHTML = S().cuentas.map((c) => `<li class="vx-order"><div class="vx-order-main vx-static"><span class="vx-order-text"><span class="md-title-small">${esc(c.banco)} ${c.principal ? '<span class="vx-tag md-label-small">Principal</span>' : ''}</span><span class="md-body-large vx-tab-num">${esc(c.cuenta)}</span><span class="md-body-medium vx-muted">${esc(c.tipo)} · ${esc(c.titular)} · ${esc(c.doc)}</span></span></div>
      <div class="vx-order-act">${c.principal ? '' : `${btn('Quitar', { kind: 'text', attrs: `data-rq="${c.id}"` })}${btn('Hacer principal', { kind: 'outlined', attrs: `data-pr="${c.id}"` })}`}</div></li>`).join(''); };
    el.addEventListener('change', (e) => { if (e.target.id === 'ci') { S().cobroInmediato = e.target.checked; set({ shop: S() }); paintCi(); toast(`Cobro inmediato ${S().cobroInmediato ? 'activado' : 'apagado'}`); } });
    el.addEventListener('click', (e) => { const pr = e.target.closest('[data-pr]'), rq = e.target.closest('[data-rq]');
      if (pr) { S().cuentas.forEach((c) => { c.principal = c.id === pr.dataset.pr; }); set({ shop: S() }); paint(); toast('Cambiaste tu cuenta principal'); }
      if (rq) { const i = S().cuentas.findIndex((c) => c.id === rq.dataset.rq), [gone] = S().cuentas.splice(i, 1); set({ shop: S() }); paint(); toast(`Quitaste ${gone.banco}`, { action: 'Deshacer', onAction: () => { S().cuentas.splice(i, 0, gone); set({ shop: S() }); paint(); } }); } });
    el.querySelector('#cAdd').addEventListener('click', () => { el.querySelector('#ctaForm').hidden = false; el.querySelector('#cAdd').hidden = true; el.querySelector('#cNum').focus(); });
    el.querySelector('#cCan').addEventListener('click', () => { el.querySelector('#ctaForm').hidden = true; el.querySelector('#cAdd').hidden = false; });
    el.querySelector('#cSave').addEventListener('click', () => { const n = el.querySelector('#cNum').value.replace(/\D/g, ''); fieldError(el, 'cNum', n.length !== 20 ? 'Escribe los 20 dígitos de la cuenta' : ''); if (n.length !== 20) return;
      S().cuentas.push({ id: 'b' + Date.now(), banco: el.querySelector('#cBanco').value, cuenta: `${n.slice(0, 4)} •••• •••• ${n.slice(-4)}`, tipo: el.querySelector('#cTipo').value, titular: 'Frío Total Servicios C.A.', doc: 'J-41234567-8' });
      set({ shop: S() }); paint(); el.querySelector('#ctaForm').hidden = true; el.querySelector('#cAdd').hidden = false; el.querySelector('#cNum').value = ''; toast('Añadiste tu cuenta bancaria'); });
    paintCi(); paint(); return el;
  },
});

// ── Cálculos de «Más» y «Cómo se ve mi tienda» ──────────────────────────────
const agotados = () => S().productos.filter((p) => existencias(p) <= 0).length;
const reglasActivas = () => S().reglas.filter((r) => r.activa).length;
export const mejoras = () => { const l = [], s = S();
  if (agotados()) l.push({ t: `${plural(agotados(), 'artículo agotado ya no sale', 'artículos agotados ya no salen')} en las búsquedas.`, a: 'Actualizar existencias', to: 'M7.06', kind: 'swap' });
  if (!reglasActivas()) l.push({ t: 'Sin regla de envío sólo vendes con retiro en tienda.', a: 'Configurar envíos', to: 'M7.15' });
  if (!s.publica.telefonoPublico) l.push({ t: 'Sin teléfono, los compradores no pueden llamarte.', a: 'Añadir teléfono', tel: true }); return l; };
const docsFalta = () => S().docs.filter((d) => d.estado !== 'verificado' && d.estado !== 'revision').length;

// ── M7 · Más ────────────────────────────────────────────────────────────────
register('M7.M', {
  render() {
    const s = S(), recl = s.reclamos.filter((r) => r.estado === 'Solicitada').length, cup = s.cupones.filter((c) => c.estado === 'activo').length, apart = s.apartadas.reduce((n, a) => n + a.qty, 0), f = docsFalta();
    return h(`<div>${topbar('Más', { back: false, trailing: avisosBtn() })}${modoLbl()}
      ${sec('Atender')}<ul class="vx-list" role="list">${row({ ic: 'error', title: 'Reclamos y devoluciones', sup: recl ? `${plural(recl, 'pendiente', 'pendientes')}` : 'Nada pendiente', go: 'M7.10' })}${row({ ic: 'star', title: 'Reseñas', sup: `${num(resenas.rating, 1)} · ${resenas.total} opiniones`, go: 'M7.16' })}${row({ ic: 'cart', title: 'Carritos y apartadas', sup: `7 · ${apart}`, go: 'M7.09' })}</ul>
      ${sec('Vender')}<ul class="vx-list" role="list">${row({ ic: 'gift', title: 'Cupones', sup: `${plural(cup, 'activo', 'activos')}`, go: 'M7.14' })}${row({ ic: 'truck', title: 'Envíos', sup: plural(reglasActivas(), 'regla', 'reglas'), go: 'M7.15' })}${row({ ic: 'eye', title: 'Cómo se ve mi tienda', sup: plural(mejoras().length, 'mejora', 'mejoras'), go: 'M7.19' })}</ul>
      ${sec('Mi empresa')}<ul class="vx-list" role="list">${row({ ic: 'sliders', title: 'Ajustes de la tienda', go: 'M7.17' })}${row({ ic: 'doc', title: 'Documentos de verificación', sup: f ? `Falta${f > 1 ? 'n' : ''} ${f}` : 'Al día', go: 'M7.18' })}${row({ ic: 'box', title: 'Importadora: mis fichas', go: 'M7.20' })}${row({ ic: 'swap', title: 'Cambiar de modo', sup: 'Comprador · Tienda · Técnico', go: 'O.MOD' })}</ul></div>`);
  },
});

// ── M7.09 · Carritos y apartadas ────────────────────────────────────────────
register('M7.09', {
  render() {
    const el = h(`<div>${topbar('Carritos y apartadas')}<div class="vx-pad-h vx-stack"><p class="md-body-large">Aún no han pagado. Si confirmas precio y existencias ahora, al comprar no tendrás que contestar.</p><div id="caAviso"></div>${segHtml('Ver', [['car', 'Carritos'], ['apa', 'Apartadas']], 'car')}</div><ul class="vx-orders vx-pad-h" role="list" id="caList"></ul></div>`);
    let seg = 'car';
    const paint = () => { const s = S(), prods = Object.fromEntries(s.productos.map((p) => [p.id, p]));
      const falla = s.carritos.filter((c) => c.qty > existencias(prods[c.prod])).length;
      el.querySelector('#caAviso').innerHTML = seg === 'car' && falla ? banner('warning', `En ${falla} no te alcanzan las existencias: esa venta se caerá salvo que repongas.`) : '';
      el.querySelector('#caList').innerHTML = seg === 'car' ? s.carritos.map((c) => { const p = prods[c.prod], ex = existencias(p), no = c.qty > ex, ok = s.confirmados[c.id];
        return `<li class="vx-order"><div class="vx-order-main vx-static"><span class="vx-order-text"><span class="md-title-small">${esc(c.nombre)}</span><span class="md-body-medium vx-tab-num">${c.qty} en el carrito · te quedan ${ex}${no ? ' · ' : ''}${no ? statusTag('error', 'no alcanza') : ''}</span>
          <span class="md-body-medium vx-muted">${c.sesion ? 'Cliente con sesión' : 'Cliente sin sesión'} · ${c.hace} · lo ha mirado ${plural(c.vistas, 'vez', 'veces')}</span>${ok ? `<span>${statusTag('success', 'Precio y existencias confirmados')}</span>` : ''}</span></div>
          <div class="vx-order-act">${no ? btn('Reponer existencias', { kind: 'outlined', go: `M7.08?id=${c.prod}` }) : ''}${ok ? '' : btn('Confirmar precio y existencias', { kind: 'tonal', attrs: `data-cf="${c.id}"${no ? ' disabled' : ''}` })}</div></li>`; }).join('') || `<li>${stateBlock({ icon: 'cart', title: 'No hay carritos abiertos' })}</li>`
        : s.apartadas.map((a) => `<li class="vx-order"><div class="vx-order-main vx-static"><span class="vx-order-text"><span class="md-title-small">${esc(a.nombre)}</span><span class="md-body-medium vx-tab-num">${plural(a.qty, 'unidad apartada', 'unidades apartadas')} · ${esc(a.cliente)}</span><span class="md-body-medium vx-muted">Hasta ${a.hasta}</span></span></div></li>`).join(''); };
    wireSeg(el, (k) => { seg = k; paint(); });
    el.addEventListener('click', (e) => { const b = e.target.closest('[data-cf]'); if (!b) return; S().confirmados[b.dataset.cf] = true; set({ shop: S() }); toast('Confirmaste precio y existencias'); });
    paint(); el.__un = subscribe(paint); return el;
  },
  mount(el) { return el.__un; },
});

// ── M7.10 · Reclamos y devoluciones ─────────────────────────────────────────
register('M7.10', {
  render() {
    const el = h(`<div>${topbar('Reclamos y devoluciones')}<div class="vx-pad-h">${segHtml('Ver', [['por', 'Por resolver'], ['res', 'Resueltos']], 'por')}</div><ul class="vx-orders vx-pad-h" role="list" id="rcList"></ul></div>`);
    let seg = 'por';
    const paint = () => { const l = S().reclamos.filter((r) => (seg === 'por') === (r.estado === 'Solicitada'));
      el.querySelector('#rcList').innerHTML = l.map((r) => `<li class="vx-order"><div class="vx-order-main vx-static"><span class="vx-order-text"><span class="md-title-small vx-tab-num">${r.id} · ${r.fecha}</span><span>${statusTag(r.estado === 'Solicitada' ? 'warning' : r.estado === 'Aprobada' ? 'success' : 'info', r.estado)}</span>
        <b class="md-title-medium vx-tab-num">Reembolso ${money(r.reembolso)}</b><span class="md-label-medium vx-muted">Motivo del comprador</span><span class="md-body-large">${esc(r.motivo)}</span><span class="md-body-medium vx-muted">${esc(r.producto)} · × ${r.qty}</span></span></div>
        ${r.estado === 'Solicitada' ? `<p class="md-body-small vx-muted vx-pad-h">Aceptar autoriza a VexBiz a procesar el reembolso.</p><div class="vx-order-act">${btn('Rechazar', { kind: 'outlined', attrs: `data-rz="${r.id}"` })}${btn('Aceptar reembolso', { kind: 'filled', attrs: `data-ac="${r.id}"` })}</div>` : ''}</li>`).join('') || `<li>${stateBlock({ icon: 'check', title: seg === 'por' ? 'No tienes reclamos por resolver' : 'Todavía no resolviste ninguno' })}</li>`; };
    wireSeg(el, (k) => { seg = k; paint(); });
    el.addEventListener('click', (e) => { const a = e.target.closest('[data-ac]'), z = e.target.closest('[data-rz]'); const r = S().reclamos.find((x) => x.id === (a || z)?.dataset[a ? 'ac' : 'rz']); if (!r) return;
      if (a) { r.estado = 'Aprobada'; toast(`Autorizaste el reembolso de ${money(r.reembolso)}`); } else { r.estado = 'En mediación'; toast('VexBiz revisa el caso y decide'); } set({ shop: S() }); });
    paint(); el.__un = subscribe(paint); return el;
  },
  mount(el) { return el.__un; },
});

// ── M7.16 · Reseñas ─────────────────────────────────────────────────────────
register('M7.16', {
  render() {
    const max = Math.max(...resenas.dist.map((d) => d[1]));
    return h(`<div>${topbar('Reseñas')}<section class="vx-pad-h vx-levelbox"><p class="md-display-small vx-tab-num">${num(resenas.rating, 1)}</p><p class="md-body-large">${stars(resenas.rating).replace('★ ', '★ ')} · ${resenas.total} opiniones verificadas</p></section>
      <ul class="vx-dist vx-pad-h" role="list" aria-label="Opiniones por estrellas">${resenas.dist.map(([n, c]) => `<li class="vx-distrow"><span class="md-body-medium vx-tab-num">${n} ★</span><span class="vx-bar-track" aria-hidden="true"><span class="vx-bar-fill" style="transform: scaleX(${(c / max).toFixed(3)}); transform-origin: left"></span></span><span class="md-body-medium vx-tab-num">${c}</span></li>`).join('')}</ul>
      <section class="vx-pad-h"><h2 class="md-title-medium">Comentarios recientes</h2><ul class="vx-orders vx-nopad" role="list">${resenas.recientes.map((r) => `<li class="vx-order"><div class="vx-order-main vx-static"><span class="vx-order-text"><span class="md-title-small">${esc(r.quien)}</span><span class="md-body-medium vx-muted vx-tab-num">${r.fecha} · Pedido ${r.pedido}</span><span class="md-body-large">«${esc(r.t)}»</span></span></div></li>`).join('')}</ul></section></div>`);
  },
});

// ── M7.17 · Ajustes de la tienda ────────────────────────────────────────────
register('M7.17', {
  render() {
    const el = h(`<div>${topbar('Ajustes de la tienda')}
      <section class="vx-profile vx-pad-h">${avatar('FT', true)}<div><p class="md-body-large">Se ve en tu tienda pública y junto a tus ofertas. Tu foto personal es otra.</p>${btn('Cambiar logo', { kind: 'text', attrs: 'data-toast="El logo nuevo lo revisa VexBiz antes de mostrarlo"' })}</div></section>
      <section class="vx-pad-h"><h2 class="md-title-medium">Identificador fiscal</h2><p class="md-body-large vx-tab-num">${S().ajustes.fiscal}</p><p>${statusTag('success', 'Empresa verificada')}</p></section>
      <section class="vx-pad-h"><h2 class="md-title-medium">Figuras de la empresa</h2><ul class="vx-list" role="list" id="figList"></ul></section>
      <section class="vx-pad-h"><div class="vx-sechead vx-sechead--0"><h2 class="md-title-medium">Datos de contacto</h2>${btn('Editar', { kind: 'text', id: 'ajEd' })}</div><div id="ajVer"></div>
        <div id="ajForm" hidden><div class="vx-form">${field({ id: 'ajNom', label: 'Nombre de la tienda' })}${field({ id: 'ajMail', label: 'Correo', type: 'email', inputmode: 'email' })}${field({ id: 'ajTel', label: 'Teléfono', inputmode: 'tel' })}</div><div class="vx-twin vx-pad-v">${btn('Cancelar', { kind: 'text', id: 'ajCan' })}${btn('Guardar', { kind: 'filled', id: 'ajSave' })}</div></div></section>
      <section class="vx-pad-h"><div class="vx-sechead vx-sechead--0"><h2 class="md-title-medium">Horario</h2>${btn('Editar horario', { kind: 'text', attrs: 'data-toast="El horario de la tienda se edita igual que el del técnico"' })}</div><p class="md-body-large">${S().ajustes.horario}</p></section></div>`);
    const paint = () => { const a = S().ajustes;
      el.querySelector('#ajVer').innerHTML = `<p class="md-body-large">${esc(a.nombre)}</p><p class="md-body-medium vx-muted">${esc(a.email)}</p><p class="md-body-medium vx-tab-num vx-muted">${esc(a.telefono)}</p>`;
      el.querySelector('#figList').innerHTML = [['vender', 'Vender productos', ''], ['importar', 'Importar', 'Carga fichas para que otras tiendas vendan.'], ['servicios', 'Prestar servicios', 'Recibe solicitudes de instalación y reparación.']].map(([k, t, d]) => `<li class="vx-fig"><div><p class="md-body-large">${t}</p>${d ? `<p class="md-body-medium vx-muted">${d}</p>` : ''}</div>${a.figuras[k] ? statusTag('success', 'Ya tienes') : btn('Activar', { kind: 'text', attrs: `data-fig="${k}"` })}</li>`).join(''); };
    el.addEventListener('click', (e) => { const f = e.target.closest('[data-fig]'); if (f) { S().ajustes.figuras[f.dataset.fig] = true; set({ shop: S() }); paint(); toast('Activaste la figura. VexBiz la revisa con tus documentos.'); } });
    el.querySelector('#ajEd').addEventListener('click', () => { const a = S().ajustes; el.querySelector('#ajNom').value = a.nombre; el.querySelector('#ajMail').value = a.email; el.querySelector('#ajTel').value = a.telefono; el.querySelector('#ajForm').hidden = false; el.querySelector('#ajVer').hidden = true; });
    el.querySelector('#ajCan').addEventListener('click', () => { el.querySelector('#ajForm').hidden = true; el.querySelector('#ajVer').hidden = false; });
    el.querySelector('#ajSave').addEventListener('click', () => { const n = el.querySelector('#ajNom').value.trim(), m = el.querySelector('#ajMail').value.trim(), t = el.querySelector('#ajTel').value.trim();
      fieldError(el, 'ajNom', !n ? 'Escribe el nombre de la tienda' : ''); fieldError(el, 'ajMail', !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m) ? 'Escribe un correo válido' : ''); fieldError(el, 'ajTel', !/^[\d\s+-]{7,}$/.test(t) ? 'Escribe un teléfono válido' : '');
      if (!n || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m) || !/^[\d\s+-]{7,}$/.test(t)) return; Object.assign(S().ajustes, { nombre: n, email: m, telefono: t }); set({ shop: S() }); el.querySelector('#ajForm').hidden = true; el.querySelector('#ajVer').hidden = false; paint(); toast('Guardaste los datos de contacto'); });
    paint(); return el;
  },
});

// ── M7.14 · Cupones ─────────────────────────────────────────────────────────
register('M7.14', {
  render() {
    const el = h(page(topbar('Cupones'), `<ul class="vx-orders vx-pad-h" role="list" id="cpList"></ul>
      <div class="vx-pad-h" id="cpForm" hidden><div class="vx-form"><h2 class="md-title-medium">Nuevo cupón</h2>${field({ id: 'cpCod', label: 'Código' })}${field({ id: 'cpPct', label: 'Descuento (%)', inputmode: 'numeric' })}${field({ id: 'cpMin', label: 'Compra mínima (USD, opcional)', inputmode: 'decimal' })}${field({ id: 'cpLim', label: 'Usos máximos (vacío = sin límite)', inputmode: 'numeric' })}</div>
        <div class="vx-twin vx-pad-v">${btn('Cancelar', { kind: 'text', id: 'cpCan' })}${btn('Crear cupón', { kind: 'filled', id: 'cpSave' })}</div></div>`,
      btn('Crear cupón', { kind: 'filled', block: true, id: 'cpNuevo' })));
    const paint = () => { el.querySelector('#cpList').innerHTML = S().cupones.map((c) => { const k = c.estado === 'activo' ? 'success' : c.estado === 'pausado' ? 'neutral' : 'error';
      return `<li class="vx-order"><div class="vx-order-main vx-static"><span class="vx-order-text"><span class="md-title-small vx-tab-num">${esc(c.codigo)}</span><span class="vx-tagrow">${statusTag(k, c.estado === 'activo' ? 'Activo' : c.estado === 'pausado' ? 'Pausado' : 'Caducado')}${c.agotado ? statusTag('error', 'Usos agotados') : ''}</span>
        <span class="md-body-large">${esc(c.texto)}</span><span class="md-body-medium vx-muted vx-tab-num">${c.limite ? `Usado ${c.usos} de ${c.limite} veces` : `Usado ${c.usos} veces · sin límite`}${c.porPersona ? ` · ${c.porPersona} por persona` : ''}</span></span></div>
        ${c.estado !== 'caducado' ? `<div class="vx-order-act">${btn(c.estado === 'activo' ? 'Pausar' : 'Activar', { kind: 'text', attrs: `data-tg="${c.id}"` })}</div>` : ''}</li>`; }).join(''); };
    el.addEventListener('click', (e) => { const t = e.target.closest('[data-tg]'); if (!t) return; const c = S().cupones.find((x) => x.id === t.dataset.tg); c.estado = c.estado === 'activo' ? 'pausado' : 'activo'; set({ shop: S() }); toast(`${c.codigo}: ${c.estado}`); });
    el.querySelector('#cpNuevo').addEventListener('click', () => { el.querySelector('#cpForm').hidden = false; el.querySelector('#cpNuevo').hidden = true; el.querySelector('#cpCod').focus(); });
    el.querySelector('#cpCan').addEventListener('click', () => { el.querySelector('#cpForm').hidden = true; el.querySelector('#cpNuevo').hidden = false; });
    el.querySelector('#cpSave').addEventListener('click', () => { const cod = el.querySelector('#cpCod').value.trim().toUpperCase(), p = Number(el.querySelector('#cpPct').value), mn = Number(String(el.querySelector('#cpMin').value).replace(',', '.')) || 0, lim = Number(el.querySelector('#cpLim').value) || 0;
      fieldError(el, 'cpCod', !/^[A-Z0-9]{4,16}$/.test(cod) ? 'Usa de 4 a 16 letras o números' : S().cupones.some((c) => c.codigo === cod) ? 'Ese código ya existe' : ''); fieldError(el, 'cpPct', !(p >= 1 && p <= 90) ? 'Escribe un descuento entre 1 y 90' : '');
      if (!/^[A-Z0-9]{4,16}$/.test(cod) || S().cupones.some((c) => c.codigo === cod) || !(p >= 1 && p <= 90)) return;
      S().cupones.unshift({ id: 'k' + Date.now(), codigo: cod, estado: 'activo', texto: `${p}% de descuento${mn ? ` en compras desde ${money(mn)}` : ''}`, usos: 0, limite: lim });
      set({ shop: S() }); el.querySelector('#cpForm').hidden = true; el.querySelector('#cpNuevo').hidden = false; ['cpCod', 'cpPct', 'cpMin', 'cpLim'].forEach((i) => { el.querySelector('#' + i).value = ''; }); toast(`Creaste ${cod}`); });
    paint(); el.__un = subscribe(paint); return el;
  },
  mount(el) { return el.__un; },
});

// ── M7.15 · Envíos ──────────────────────────────────────────────────────────
register('M7.15', {
  render() {
    const el = h(page(topbar('Envíos'), `<p class="md-title-medium vx-pad-h">Tus reglas de envío</p><ul class="vx-orders vx-pad-h" role="list" id="rgList"></ul>
      <ul class="vx-legend vx-pad-h" role="list"><li><i class="vx-dot-c vx-dot-c--a"></i>Comprador</li><li><i class="vx-dot-c vx-dot-c--b"></i>Tu tienda</li><li><i class="vx-dot-c vx-dot-c--c"></i>VexBiz</li></ul>`,
      btn('Nueva regla', { kind: 'filled', block: true, id: 'rgNueva' })));
    const paint = () => { el.querySelector('#rgList').innerHTML = S().reglas.map((r) => { const c = round2(r.monto * r.comprador / 100), t = round2(r.monto - c);
      return `<li class="vx-order"><div class="vx-order-main vx-static"><span class="vx-order-text"><span class="md-title-small">${esc(r.nombre)}</span><span class="vx-tagrow">${r.activa ? statusTag('success', 'Activa') : statusTag('neutral', 'Pausada')}</span>
        ${r.monto ? `<b class="md-title-medium vx-tab-num">${money(r.monto)}</b>` : ''}<span class="md-body-medium">${esc(r.texto)}</span>
        <span class="vx-split" role="img" aria-label="Comprador paga ${r.comprador}%, tu tienda ${r.tienda}%"><i class="vx-split-a" style="flex:${r.comprador}"></i><i class="vx-split-b" style="flex:${r.tienda}"></i></span>
        ${r.monto ? `<span class="md-body-small vx-muted vx-tab-num">Comprador ${money(c)} · Tu tienda ${money(t)}</span>` : '<span class="md-body-small vx-muted">Tu tienda paga el envío completo</span>'}</span>${switchHtml('rg_' + r.id, `<span class="md-sr-only">${esc(r.nombre)} activa</span>`, r.activa)}</div></li>`; }).join(''); };
    wireControls(el);
    el.addEventListener('change', (e) => { const m = /^rg_(.+)$/.exec(e.target.id); if (!m) return; const r = S().reglas.find((x) => x.id === m[1]); r.activa = e.target.checked; set({ shop: S() }); toast(`${r.nombre}: ${r.activa ? 'activa' : 'pausada'}`); });
    el.querySelector('#rgNueva').addEventListener('click', () => { S().reglas.push({ id: 'e' + Date.now(), nombre: 'Envío regional', monto: 8, comprador: 100, tienda: 0, activa: true, texto: 'El comprador paga el 100% del envío.' }); set({ shop: S() }); toast('Añadiste una regla: Envío regional $ 8,00'); }); // INVENTADO: regla de ejemplo
    paint(); el.__un = subscribe(paint); return el;
  },
  mount(el) { return el.__un; },
});

// ── M7.18 · Documentos de verificación ──────────────────────────────────────
register('M7.18', {
  render() {
    const el = h(page(topbar('Documentos'), `<div class="vx-pad-h" id="dvRes" role="status"></div><ul class="vx-orders vx-pad-h" role="list" id="dvList"></ul>`, btn('Enviar a verificación', { kind: 'filled', block: true, id: 'dvGo', attrs: 'disabled' })));
    const T = { verificado: ['success', 'Verificado'], rechazado: ['error', 'Rechazado'], pendiente: ['warning', 'Pendiente'], revision: ['info', 'En revisión'] };
    const paint = () => { const d = S().docs, falt = d.filter((x) => x.estado === 'rechazado' || x.estado === 'pendiente').map((x) => x.nombre);
      el.querySelector('#dvRes').innerHTML = falt.length ? banner('warning', `<b>Verificación incompleta</b><br>Faltan: ${falt.join(' y ')}.`) : S().docsEnviados ? banner('success', 'Enviaste tus documentos a verificación') : banner('info', 'Tus documentos están listos para enviarse');
      el.querySelector('#dvList').innerHTML = d.map((x) => { const [k, l] = T[x.estado], accion = x.estado === 'rechazado' ? 'Subir de nuevo' : x.estado === 'pendiente' ? 'Subir' : null;
        return `<li class="vx-order"><div class="vx-order-main vx-static"><span class="vx-order-text"><span class="md-title-small">${esc(x.nombre)}</span><span class="vx-tagrow">${statusTag(k, l)}<span class="vx-tag md-label-small">Obligatorio</span></span>
          ${x.valido ? `<span class="md-body-medium vx-muted vx-tab-num">Válido hasta: ${x.valido}</span>` : ''}${x.motivo ? `<span class="md-label-medium">Motivo del rechazo</span><span class="md-body-medium vx-reason">${icon('error', 16)} ${esc(x.motivo)}</span><span class="md-body-small vx-muted">${x.formatos}</span>` : ''}${x.ayuda ? `<span class="md-body-medium">${esc(x.ayuda)}</span>` : ''}</span></div>
          ${accion ? `<div class="vx-order-act"><input type="file" class="md-sr-only" id="df_${x.id}" data-doc="${x.id}" accept="image/jpeg,image/png,application/pdf" tabindex="-1">${btn(`${icon('upload', 18)}${accion}`, { kind: 'tonal', attrs: `data-up="${x.id}"` })}</div>` : ''}</li>`; }).join('');
      el.querySelector('#dvGo').disabled = falt.length > 0 || S().docsEnviados; };
    el.addEventListener('click', (e) => { const b = e.target.closest('[data-up]'); if (b) el.querySelector('#df_' + b.dataset.up).click(); });
    el.addEventListener('change', (e) => { const f = e.target.closest('input[type=file]'); if (!f || !f.files[0]) return; const d = S().docs.find((x) => x.id === f.dataset.doc);
      if (!['image/jpeg', 'image/png', 'application/pdf'].includes(f.files[0].type)) { toast('Formato no válido: usa JPG, PNG o PDF'); return; } d.estado = 'revision'; d.motivo = ''; set({ shop: S() }); toast(`Subiste ${f.files[0].name}`); });
    el.querySelector('#dvGo').addEventListener('click', () => { S().docsEnviados = true; set({ shop: S() }); toast('Enviaste tus documentos a verificación. Tarda hasta 72 horas hábiles.'); });
    paint(); el.__un = subscribe(paint); return el;
  },
  mount(el) { return el.__un; },
});

// ── M7.19 · Cómo se ve mi tienda ────────────────────────────────────────────
register('M7.19', {
  render() {
    const el = h(`<div>${topbar('Cómo se ve mi tienda')}<section class="vx-profile vx-pad-h">${avatar('FT', true)}<div><p class="md-title-medium" id="tvNom"></p><p class="md-body-medium vx-tab-num">${stars(resenas.rating)} · ${resenas.total} opiniones</p><p class="md-label-medium vx-verified">${icon('check', 16)} Verificada por VexBiz</p></div></section>
      <section class="vx-pad-h"><p class="md-body-large">${icon('pin', 16)} ${esc(S().publica.direccion)}</p><p class="md-body-large vx-tab-num" id="tvProd"></p></section>
      <section class="vx-pad-h"><h2 class="md-title-medium">Para verte completa</h2><ul class="vx-orders vx-nopad" role="list" id="tvMej"></ul><div id="tvTel" hidden class="vx-form">${field({ id: 'tvTelF', label: 'Teléfono para compradores', inputmode: 'tel' })}${btn('Guardar teléfono', { kind: 'filled', id: 'tvTelOk' })}</div></section></div>`);
    const paint = () => { const s = S(), ag = agotados(), m = mejoras();
      el.querySelector('#tvNom').textContent = s.ajustes.nombre; el.querySelector('#tvProd').textContent = `${s.publica.productos} productos disponibles (${plural(ag, 'agotado', 'agotados')})`;
      el.querySelector('#tvMej').innerHTML = m.map((x, i) => `<li class="vx-order"><div class="vx-order-main vx-static"><span class="vx-order-text"><span class="md-body-large">${x.t}</span></span></div><div class="vx-order-act">${btn(x.a, { kind: 'filled', attrs: x.tel ? 'data-tel' : `data-go="${x.to}" data-kind="${x.kind || 'push'}"` })}</div></li>`).join('') || `<li>${stateBlock({ icon: 'check', title: 'Tu tienda está completa' })}</li>`; };
    el.addEventListener('click', (e) => { if (e.target.closest('[data-tel]')) { el.querySelector('#tvTel').hidden = false; el.querySelector('#tvTelF').focus(); } });
    el.querySelector('#tvTelOk').addEventListener('click', () => { const t = el.querySelector('#tvTelF').value.trim(); fieldError(el, 'tvTelF', !/^[\d\s+-]{7,}$/.test(t) ? 'Escribe un teléfono válido' : ''); if (!/^[\d\s+-]{7,}$/.test(t)) return; S().publica.telefonoPublico = t; set({ shop: S() }); el.querySelector('#tvTel').hidden = true; toast('Los compradores ya pueden llamarte'); });
    paint(); el.__un = subscribe(paint); return el;
  },
  mount(el) { return el.__un; },
});

// ── M7.20 · Importadora: mis fichas ─────────────────────────────────────────
register('M7.20', {
  render() {
    const el = h(page(topbar('Mis fichas'), `<p class="md-body-large vx-pad-h">Las tiendas del país publican sus ofertas sobre estas fichas.</p><p class="md-title-small vx-pad-h" id="fiUso"></p><ul class="vx-orders vx-pad-h" role="list" id="fiList"></ul>
      <section class="vx-pad-h"><h2 class="md-title-medium">Quién publica sobre tus fichas</h2><ul class="vx-list" role="list">${[['Frío Total Caracas', 3], ['ClimaRepuestos Valencia', 2], ['Refrigeración El Sol', 1]].map(([n, c]) => `<li class="md-li md-li--2"><span class="md-li-text"><span class="md-li-title md-body-large">${n}</span><span class="md-li-sup md-body-medium vx-tab-num">${plural(c, 'ficha tuya', 'fichas tuyas')}</span></span></li>`).join('')}</ul></section>`,
      btn(`${icon('add', 20)}Nueva ficha`, { kind: 'filled', block: true, go: 'M7.21?id=nueva' })));
    const paint = () => { const f = S().fichas, uso = f.filter((x) => x.tiendas > 0).length; el.querySelector('#fiUso').textContent = `${uso} de ${f.length} están en uso por alguna tienda`;
      el.querySelector('#fiList').innerHTML = f.map((x) => `<li class="vx-order"><button type="button" class="vx-order-main md-sl vx-press" data-go="M7.21?id=${x.id}"><span class="vx-order-text"><span class="md-title-small">${esc(x.nombre)}</span><span class="vx-tagrow">${!x.visible ? statusTag('neutral', 'Oculta') : ''}</span>
        <span class="md-body-medium vx-muted">${esc(x.marca)} · ${esc(x.ref)}</span><span class="md-body-medium vx-tab-num">${x.tiendas ? `La ${x.tiendas > 1 ? 'usan' : 'usa'} ${plural(x.tiendas, 'tienda', 'tiendas')}` : 'Ninguna tienda la usa'}${x.compat ? ` · ${plural(x.compat, 'compatibilidad', 'compatibilidades')}` : ''}</span></span><span class="vx-muted">${icon('chevron')}</span></button></li>`).join(''); };
    paint(); el.__un = subscribe(paint); return el;
  },
  mount(el) { return el.__un; },
});

// ── M7.21 · Importadora: ficha y compatibilidades (pantalla de flujo) ───────
register('M7.21', {
  render(ctx) {
    const nueva = ctx.params.id === 'nueva', fi = nueva ? { id: 'f' + Date.now(), nombre: '', marca: '', ref: '', tiendas: 0, compat: 0, visible: true, desc: '', lista: [] } : S().fichas.find((x) => x.id === ctx.params.id) || S().fichas[0];
    const g = JSON.parse(JSON.stringify(fi));
    const el = h(`<div class="vx-page"><header class="vx-sheet-head vx-flowhead"><h2 id="sheet-title" class="md-title-large md-sheet-title" tabindex="-1">${nueva ? 'Nueva ficha' : esc(fi.nombre)}</h2>${iconBtn('close', 'Cerrar', 'data-close')}</header>
      <div class="vx-body vx-pad-h">${nueva ? '' : `<p class="md-body-large">${fi.tiendas ? `La ${fi.tiendas > 1 ? 'usan' : 'usa'} ${plural(fi.tiendas, 'tienda', 'tiendas')}. Lo que cambies aquí lo verán en su catálogo.` : 'Ninguna tienda la usa todavía.'}</p>`}
        ${switchHtml('fiVis', 'Que las tiendas puedan publicar sobre ella', g.visible)}
        <h2 class="md-title-medium">Ficha</h2><div class="vx-form">${field({ id: 'fiNom', label: 'Nombre del artículo', value: g.nombre })}${field({ id: 'fiMarca', label: 'Marca', value: g.marca })}${field({ id: 'fiRef', label: 'Referencia del fabricante', value: g.ref })}</div>
        <h2 class="md-title-medium">Para qué sirve</h2>${area({ id: 'fiDesc', label: 'Descripción', value: g.desc, rows: 3 })}
        <h2 class="md-title-medium">Compatibilidades</h2><p class="md-body-medium vx-muted">Marcas, modelos y tipos de equipo con los que es compatible.</p><ul class="vx-list" role="list" id="fiCompat"></ul>
        <div class="vx-form vx-pad-v">${field({ id: 'fcMarca', label: 'Marca del equipo' })}${field({ id: 'fcModelo', label: 'Modelo (o «toda la marca»)' })}${field({ id: 'fcTipo', label: 'Tipo de equipo (opcional)' })}${btn(`${icon('add', 18)}Añadir compatibilidad`, { kind: 'tonal', id: 'fcAdd' })}</div></div>
      <footer class="vx-actionbar">${btn('Guardar ficha', { kind: 'filled', block: true, id: 'fiSave' })}</footer></div>`);
    wireControls(el);
    const paint = () => { const mas = Math.max(0, g.compat - g.lista.length);
      el.querySelector('#fiCompat').innerHTML = g.lista.map((c, i) => `<li class="md-li md-li--2"><span class="md-li-text"><span class="md-li-title md-body-large">${esc(c.marca)}</span><span class="md-li-sup md-body-medium">${esc(c.modelo)}${c.tipo ? ' · ' + esc(c.tipo) : ''}</span></span><span class="md-li-end">${iconBtn('trash', `Quitar ${c.marca} ${c.modelo}`, `data-rc="${i}"`)}</span></li>`).join('')
        + (mas ? `<li class="md-body-medium vx-muted">… y ${plural(mas, 'compatibilidad más', 'compatibilidades más')}</li>` : ''); };
    el.addEventListener('click', (e) => { const r = e.target.closest('[data-rc]'); if (r) { g.lista.splice(Number(r.dataset.rc), 1); if (g.compat > 0) g.compat -= 1; paint(); } });
    el.querySelector('#fcAdd').addEventListener('click', () => { const m = el.querySelector('#fcMarca').value.trim(), mo = el.querySelector('#fcModelo').value.trim();
      fieldError(el, 'fcMarca', !m ? 'Escribe la marca' : ''); fieldError(el, 'fcModelo', !mo ? 'Escribe el modelo' : ''); if (!m || !mo) return; g.lista.push({ marca: m, modelo: mo, tipo: el.querySelector('#fcTipo').value.trim() }); g.compat += 1; ['fcMarca', 'fcModelo', 'fcTipo'].forEach((i) => { el.querySelector('#' + i).value = ''; }); paint(); });
    el.querySelector('#fiSave').addEventListener('click', async () => { const n = el.querySelector('#fiNom').value.trim(), mk = el.querySelector('#fiMarca').value.trim(), rf = el.querySelector('#fiRef').value.trim();
      fieldError(el, 'fiNom', !n ? 'Escribe el nombre' : ''); fieldError(el, 'fiMarca', !mk ? 'Escribe la marca' : ''); fieldError(el, 'fiRef', !rf ? 'Escribe la referencia' : ''); if (!n || !mk || !rf) return;
      Object.assign(g, { nombre: n, marca: mk, ref: rf, desc: el.querySelector('#fiDesc').value.trim(), visible: el.querySelector('#fiVis').checked });
      if (nueva) S().fichas.push(g); else Object.assign(fi, g); set({ shop: S() }); toast(nueva ? 'Creaste la ficha' : 'Guardaste la ficha'); await closeOverlay(); });
    paint(); return el;
  },
});
