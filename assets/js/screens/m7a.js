// M7 · Modo Tienda (1/2): inicio, confirmación pendiente, pedidos, preparar, despachar y facturar,
// productos, poner un artículo a la venta y oferta.
import { register } from './registry.js';
import { h, icon, btn, iconBtn, topbar, stateBlock, skeleton, toast, $, $$ } from '../ui.js';
import { avatar, page, field, fieldError, area, select, statusTag, row, banner, switchHtml, wireControls } from '../market.js';
import { go, back, closeOverlay } from '../router.js';
import { state, set, subscribe } from '../store.js';
import { stagger, play, reveal } from '../motion.js';
import { COMISION } from '../data4.js';
import { catalogoLibre, ventas } from '../data4.js';
import { money, num, esc, plural, pct, round2, clock, date } from '../format.js';
import { HOY } from '../data.js';

export const S = () => state.shop;
// ── Cálculos de la tienda (nada escrito a mano) ─────────────────────────────
export const subtotalPedido = (o) => round2(o.lineas.reduce((s, l) => s + l[2] * l[3], 0));
export const totalPedido = (o) => round2(subtotalPedido(o) + o.envio);
export const comisionDe = (t) => pct(t, COMISION);              // la comisión se fija el día de la compra
export const netoPedido = (o) => round2(totalPedido(o) - comisionDe(totalPedido(o)));
export const unidades = (o) => o.lineas.reduce((s, l) => s + l[2], 0);
export const existencias = (p) => p.inicial + p.mov.reduce((s, m) => s + m[0], 0);
export const porDespachar = () => S().pedidos.filter((o) => o.status === 'pagado');
export const buscarPedido = (id) => [...S().pedidos, ...S().mas].find((o) => o.id === id) || S().pedidos[0];
export const modoLbl = () => '<p class="md-label-medium vx-muted vx-pad-h vx-modolbl">Modo Tienda</p>';
export const avisosBtn = () => iconBtn('bell', 'Avisos en vivo', 'data-go="O.AVI"');
const thumb = (n = 24) => `<span class="vx-thumb-ph vx-thumb-ph--sm" aria-hidden="true">${icon('box', n)}</span>`;
const sec = (t) => `<h2 class="md-label-large vx-sub vx-sub--list">${t}</h2>`;
const retiroTag = () => `<span class="vx-tag md-label-small">${icon('store', 14)}Retiro en tienda</span>`;
export const cuenta = (ms) => clock(ms, { pad: true });

// ── M7.01 · Inicio de la tienda ─────────────────────────────────────────────
register('M7.01', {
  render(ctx) {
    const tile = (k, v, sub, to) => `<button type="button" class="vx-kpi md-sl vx-press" data-go="${to}" data-kind="swap"><span class="md-body-medium vx-muted">${k}</span><b class="md-headline-small vx-tab-num">${v}</b><span class="md-body-small vx-muted">${sub}</span></button>`;
    const el = h(`<div>${topbar('Frío Total', { back: false, trailing: avisosBtn() })}${modoLbl()}
      <section class="vx-pad-h" id="ahora"></section>
      <section class="vx-sec vx-reveal"><div class="vx-sechead"><h2 class="md-title-large" id="pdTit"></h2>${btn('Ver todos', { kind: 'text', go: 'M7.03', kindNav: 'swap' })}</div><ul class="vx-orders vx-pad-h" role="list" id="pdList" data-stagger></ul></section>
      <section class="vx-sec vx-reveal vx-pad-h"><div class="vx-kpis">${tile('Ventas brutas', `$ ${num(Math.floor(ventas.bruto), 0)}`, 'USD · 12 meses', 'M7.11')}${tile('Ingreso neto', `$ ${num(Math.floor(ventas.neto), 0)}`, 'USD · 12 meses', 'M7.11')}</div></section>
      <ul class="vx-list vx-reveal" role="list" id="inList"></ul>
      <div class="vx-pad-h vx-pad-v vx-reveal">${btn(`${icon('eye', 20)}Cómo se ve mi tienda`, { kind: 'tonal', block: true, go: 'M7.19' })}</div></div>`);
    const paint = () => {
      const s = S(), pend = s.pendientes, pd = porDespachar();
      el.querySelector('#ahora').innerHTML = pend.length
        ? `<h2 class="md-label-large vx-eyebrow">Contestar ahora</h2><div class="vx-card vx-nowcard"><p class="md-title-medium">${plural(pend.length, 'cliente quiere', 'clientes quieren')} comprarte</p>
           <p class="md-headline-small vx-tab-num" id="ahoraT" aria-live="off"></p><span class="vx-bar-track" aria-hidden="true"><span class="vx-bar-fill" id="ahoraB"></span></span><p class="vx-urgent" id="ahoraU" hidden>${icon('warning', 18)} Queda menos de un minuto</p>${btn('Contestar', { kind: 'filled', block: true, go: 'M7.02' })}</div>`
        : `<div class="vx-card vx-nowcard"><p class="md-title-medium">No hay ventas por contestar</p><p class="md-body-medium vx-muted">Cuando un cliente quiera comprarte, aparece aquí.</p></div>`;
      el.querySelector('#pdTit').textContent = `Por despachar · ${plural(pd.length, 'pedido', 'pedidos')}`;
      el.querySelector('#pdList').innerHTML = pd.slice(0, 3).map((o, i) => `<li class="vx-order" style="--i:${i}"><button type="button" class="vx-order-main md-sl vx-press" data-go="M7.04?id=${encodeURIComponent(o.id)}"><span class="vx-order-text"><span class="md-title-small vx-tab-num">${o.id}</span>
        <span class="md-body-medium">${esc(o.cliente)}</span>${o.retiro ? `<span>${retiroTag()}</span>` : ''}</span><b class="md-title-small vx-tab-num">${money(totalPedido(o))}</b></button></li>`).join('') || `<li>${stateBlock({ icon: 'check', title: 'No tienes pedidos por despachar' })}</li>`;
      const cart = s.carritos.length ? 7 : 0, apart = s.apartadas.reduce((n, a) => n + a.qty, 0); // 7 carritos abiertos: dato de catálogo (Figma)
      el.querySelector('#inList').innerHTML = row({ ic: 'cart', title: 'Carritos abiertos', end: `<b class="vx-tab-num">${cart}</b>`, go: 'M7.09' }) + row({ ic: 'box', title: 'Unidades apartadas', end: `<b class="vx-tab-num">${apart}</b>`, go: 'M7.09' });
    };
    paint(); el.__un = subscribe(paint);
    // Patrón 15: cuenta regresiva real de la primera venta por contestar (tabular, barra lineal; pasa a error con ícono y texto bajo 60 s)
    el.__tick = setInterval(() => { const p = S().pendientes[0], t = el.querySelector('#ahoraT'); if (!p || !t) return; const ms = p.venceAt - Date.now();
      t.textContent = cuenta(ms); const bar = el.querySelector('#ahoraB'); if (bar && !bar.dataset.on) { bar.dataset.on = '1'; bar.classList.add('vx-countbar'); bar.style.setProperty('--vx-count', Math.max(ms, 0) + 'ms'); }
      const urg = ms < 60000; t.classList.toggle('vx-is-urgent', urg); el.querySelector('#ahoraU').hidden = !urg;
      if (ms <= 0) { S().pendientes.shift(); S().resueltas += 1; set({ shop: S() }); toast('Una venta pasó a otra tienda porque no se contestó a tiempo'); } }, 500);
    return el;
  },
  mount(el, ctx) {
    if (ctx.first) $$('[data-stagger]', el).forEach(stagger); // Patrón 7
    reveal(el);                                                // Patrón 8: las secciones largas aparecen una sola vez al llegar
    return () => { el.__un(); clearInterval(el.__tick); };
  },
});

// ── M7.02 · Confirmación pendiente ──────────────────────────────────────────
register('M7.02', {
  render() {
    const el = h(`<div>${topbar('Confirmar venta')}<div id="cvBody" class="vx-pad-h vx-stack"></div></div>`);
    const paint = () => {
      const s = S(), p = s.pendientes[0], box = el.querySelector('#cvBody');
      if (!p) { box.innerHTML = stateBlock({ icon: 'check', title: 'No tienes ventas por contestar', action: btn('Volver al inicio', { kind: 'filled', go: 'M7.01', kindNav: 'swap' }) }); return; }
      const total = round2(p.qty * p.precio), pos = s.resueltas + 1, de = s.resueltas + s.pendientes.length, falta = p.stock < p.qty;
      box.innerHTML = `<p class="md-title-small vx-tab-num">${pos} de ${de}</p><p class="md-headline-small vx-tab-num" id="cvT"></p><p class="md-body-medium vx-muted">para contestar</p><span class="vx-bar-track" aria-hidden="true"><span class="vx-bar-fill vx-countbar" id="cvB"></span></span>
        <p class="vx-urgent" id="cvU" hidden>${icon('warning', 18)} Queda menos de un minuto</p><p class="md-body-medium">Si no contestas a tiempo, la venta pasa a otra tienda.</p>
        <p class="md-label-medium">Te la ofrecen: ${esc(p.motivo)}</p><div class="vx-card vx-card--p"><p class="md-title-small">${esc(p.producto)}</p><p class="md-body-medium vx-muted">Tu código: ${esc(p.codigo)}</p></div>
        <dl class="vx-dl"><div class="vx-kv"><dt class="md-body-medium vx-muted">Cantidad × precio</dt><dd class="md-body-large vx-tab-num">${p.qty} × ${money(p.precio)} USD</dd></div><div class="vx-kv"><dt class="md-body-medium vx-muted">Comprador</dt><dd class="md-body-large">${esc(p.comprador)}</dd></div>
          <div class="vx-kv"><dt class="md-body-medium vx-muted">Total</dt><dd class="md-title-medium vx-tab-num">${money(total)}</dd></div></dl>
        ${falta ? banner('warning', `Te quedan ${p.stock} y te piden ${p.qty}.`) : ''}
        <div class="vx-stack">${btn(falta ? `Confirmar las ${p.qty} unidades` : 'Confirmar la venta', { kind: 'filled', block: true, attrs: `data-ok${falta ? ' disabled' : ''}` })}${falta ? btn(`Ofrecer ${plural(p.stock, 'unidad', 'unidades')}`, { kind: 'outlined', block: true, attrs: 'data-oferta' }) : ''}${btn('No puedo venderla', { kind: 'text', block: true, attrs: 'data-no' })}</div>`;
      const bar = box.querySelector('#cvB'); bar.style.setProperty('--vx-count', Math.max(p.venceAt - Date.now(), 0) + 'ms');
    };
    const resolver = (msg) => { const s = S(); s.pendientes.shift(); s.resueltas += 1; set({ shop: s }); toast(msg); if (!s.pendientes.length) go('M7.01', { kind: 'swap' }); else paint(); };
    el.addEventListener('click', (e) => { const p = S().pendientes[0]; if (!p) return;
      if (e.target.closest('[data-ok]')) resolver(`Confirmaste la venta a ${p.comprador}`);
      if (e.target.closest('[data-oferta]')) resolver(`Ofreciste ${plural(p.stock, 'unidad', 'unidades')} a ${p.comprador} por ${money(round2(p.stock * p.precio))}`);
      if (e.target.closest('[data-no]')) resolver('La venta pasa a otra tienda'); });
    paint(); el.__tick = setInterval(() => { const p = S().pendientes[0], t = el.querySelector('#cvT'); if (!p || !t) return; const ms = p.venceAt - Date.now(); t.textContent = cuenta(ms);
      const urg = ms < 60000; t.classList.toggle('vx-is-urgent', urg); el.querySelector('#cvU').hidden = !urg; if (ms <= 0) resolver('La venta pasó a otra tienda porque no se contestó a tiempo'); }, 500);
    return el;
  },
  mount(el) { return () => clearInterval(el.__tick); },
});

// ── M7.03 · Pedidos de la tienda ────────────────────────────────────────────
register('M7.03', {
  render() {
    const el = h(`<div>${topbar('Pedidos', { back: false, trailing: avisosBtn() })}${modoLbl()}<div class="vx-pad-h vx-stack" id="pedAviso"></div>
      <div class="vx-pad-h"><div class="md-seg" role="tablist" aria-label="Ver pedidos">${[['pend', 'Por despachar'], ['todos', 'Todos']].map(([k, t], i) => `<button type="button" role="tab" class="md-seg-item md-sl md-label-large${i === 0 ? ' md-seg-item--on' : ''}" data-seg="${k}" aria-selected="${i === 0}">${t}</button>`).join('')}</div></div>
      <ul class="vx-orders vx-pad-h" role="list" id="pedList" data-stagger></ul><div id="pedMas" class="vx-pad-h" aria-live="polite"></div>
      <p class="md-body-small vx-muted vx-pad-h">«Te quedan» es el total menos la comisión de VexBiz fijada el día de la compra.</p></div>`);
    let seg = 'pend', cargando = false;
    const card = (o, i) => `<li class="vx-order" style="--i:${i}"><button type="button" class="vx-order-main md-sl vx-press" data-go="M7.04?id=${encodeURIComponent(o.id)}"><span class="vx-order-text"><span class="md-title-small vx-tab-num">${o.id}</span>
      <span>${o.status === 'pagado' ? statusTag('warning', 'Pagado: hay que despacharlo') : statusTag('success', 'Despachado')}</span><span class="md-body-medium">${esc(o.cliente)}</span><span class="md-body-medium vx-muted vx-tab-num">${esc(o.ciudad)} · ${o.fecha}</span>
      <span class="md-body-medium">${plural(unidades(o), 'artículo', 'artículos')}${o.retiro ? '' : ''}</span>${o.retiro ? `<span>${retiroTag()}</span>` : ''}</span>
      <span class="vx-order-end"><b class="md-title-small vx-tab-num">Total ${money(totalPedido(o))}</b><span class="md-body-small vx-muted vx-tab-num">Te quedan: ${money(netoPedido(o))}</span></span></button></li>`;
    const paint = () => {
      const s = S(), todos = [...s.pedidos, ...(s.masCargado ? s.mas : [])], l = seg === 'pend' ? todos.filter((o) => o.status === 'pagado') : todos, n = porDespachar().length;
      el.querySelector('#pedAviso').innerHTML = n ? banner('info', 'Hay pedidos nuevos') : '';
      el.querySelector('#pedList').innerHTML = l.map(card).join('') || `<li>${stateBlock({ icon: 'check', title: 'No tienes pedidos por despachar' })}</li>`;
      el.querySelector('#pedMas').innerHTML = cargando ? `<div class="vx-skeleton" aria-busy="true"><div class="vx-skel vx-skel-line"></div><div class="vx-skel vx-skel-hero"></div></div><p class="md-body-medium vx-muted vx-center-t">Cargando más pedidos…</p>` : s.masCargado ? '<p class="md-body-medium vx-muted vx-center-t">No hay más</p>' : '<span id="sent" aria-hidden="true"></span>';
    };
    el.addEventListener('click', (e) => { const b = e.target.closest('[data-seg]'); if (!b) return; seg = b.dataset.seg; $$('[data-seg]', el).forEach((x) => { const on = x === b; x.classList.toggle('md-seg-item--on', on); x.setAttribute('aria-selected', on); }); paint(); watch(); });
    let io = null;
    const watch = () => { io?.disconnect(); const sent = el.querySelector('#sent'); if (!sent || S().masCargado) return;
      io = new IntersectionObserver((es) => { if (!es[0].isIntersecting || cargando) return; cargando = true; paint(); setTimeout(() => { S().masCargado = true; cargando = false; paint(); }, 700); }, { root: el.closest('.screen') || null }); io.observe(sent); };
    paint(); el.__un = subscribe(() => { paint(); }); el.__watch = watch; el.__io = () => io?.disconnect();
    return el;
  },
  mount(el, ctx) { if (ctx.first) $$('[data-stagger]', el).forEach(stagger); setTimeout(() => el.__watch(), 400); return () => { el.__un(); el.__io(); }; },
});

// ── M7.04 · Pedido: preparar ────────────────────────────────────────────────
register('M7.04', {
  render(ctx) {
    const o = buscarPedido(decodeURIComponent(ctx.params.id || '#VX-20412')), st = S().despacho[o.id] || (S().despacho[o.id] = { emp: o.lineas.map(() => false) });
    const total = totalPedido(o), com = comisionDe(total), neto = round2(total - com), ya = o.status === 'despachado';
    const r = (k, v, strong) => `<div class="vx-sumrow${strong ? ' is-strong' : ''}"><dt class="md-body-large">${k}</dt><dd class="md-body-large vx-tab-num">${v}</dd></div>`;
    const el = h(page(topbar(esc(o.id), { trailing: iconBtn('phone', 'Llamar al comprador', 'data-toast="Abre el teléfono con el número del comprador"') }), `
      <section class="vx-pad-h"><p>${ya ? statusTag('success', 'Despachado') : statusTag('warning', 'Pagado: hay que despacharlo')}</p><p class="md-body-medium vx-muted vx-tab-num">Recibido el ${o.fecha} · ${o.hora}</p></section>
      <section class="vx-pad-h"><h2 class="md-title-medium">Entrega y comprador</h2><div class="vx-buyer">${avatar(o.cliente.split(' ').map((w) => w[0]).join(''), true)}<div><p class="md-title-small">${esc(o.cliente)}</p><p class="md-body-medium vx-tab-num">${esc(o.tel)}</p><p class="md-body-medium">${esc(o.dir)}</p><p class="md-body-medium vx-muted">${esc(o.ciudad)} · ${esc(o.estado)}</p></div></div></section>
      <section class="vx-pad-h"><h2 class="md-title-medium">Artículos a empacar</h2><p class="md-body-medium vx-muted">${plural(unidades(o), 'artículo', 'artículos')} · <span class="vx-tab-num" id="empN"></span></p>
        <ul class="vx-list" role="list">${o.lineas.map((l, i) => `<li><label class="md-check vx-pack"><span class="md-check-hit md-sl"><input class="md-check-input" type="checkbox" data-emp="${i}"${st.emp[i] || ya ? ' checked' : ''}${ya ? ' disabled' : ''}><span class="md-check-box${st.emp[i] || ya ? ' md-check-box--on' : ''}">${st.emp[i] || ya ? icon('check', 16) : ''}</span></span>
          <span class="vx-packtxt"><span class="md-body-large">${esc(l[0])}</span><span class="md-body-medium vx-muted vx-tab-num">${esc(l[1])} · ${l[2]} × ${money(l[3])}</span></span><b class="md-body-large vx-tab-num">${money(round2(l[2] * l[3]))}</b></label></li>`).join('')}</ul></section>
      <section class="vx-pad-h vx-leaves"><p class="md-body-medium vx-muted">Te deja</p><p class="md-display-small vx-tab-num">${money(neto)}</p></section>
      <dl class="vx-pad-h vx-dl">${r('Subtotal de artículos', money(subtotalPedido(o)))}${r('Envío', money(o.envio))}${r(`Comisión VexBiz (${COMISION}%)`, `− ${money(com)}`)}${r('Monto neto que ingresa a tu tienda', money(neto), true)}</dl>
      <div class="vx-pad-h vx-stack vx-pad-v">${ya ? '' : btn('Marcar todo empacado', { kind: 'tonal', block: true, id: 'empAll' })}${btn('Escribir al comprador', { kind: 'outlined', block: true, attrs: 'data-toast="Abre WhatsApp con el comprador"' })}${btn(`${icon('box', 20)}Imprimir etiqueta`, { kind: 'text', block: true, attrs: 'data-toast="Etiqueta enviada a tu impresora"' })}</div>`,
      btn(ya ? 'Ya despachado' : 'Despachar y facturar', { kind: 'filled', block: true, id: 'empGo', attrs: 'disabled' })));
    const paint = () => { const n = st.emp.filter(Boolean).length; el.querySelector('#empN').textContent = ya ? 'todos empacados' : `${n} de ${st.emp.length} empacados`; el.querySelector('#empGo').disabled = ya || n < st.emp.length; };
    el.addEventListener('change', (e) => { const c = e.target.closest('[data-emp]'); if (!c) return; st.emp[Number(c.dataset.emp)] = c.checked; const b = c.nextElementSibling; b.classList.toggle('md-check-box--on', c.checked); b.innerHTML = c.checked ? icon('check', 16) : ''; paint(); });
    el.querySelector('#empAll')?.addEventListener('click', () => { st.emp = st.emp.map(() => true); $$('[data-emp]', el).forEach((c) => { c.checked = true; const b = c.nextElementSibling; b.classList.add('md-check-box--on'); b.innerHTML = icon('check', 16); }); paint(); });
    el.querySelector('#empGo').addEventListener('click', () => go('M7.05', { kind: 'push', params: { id: o.id } }));
    paint(); return el;
  },
});

// ── M7.05 · Despachar y facturar ────────────────────────────────────────────
const TIPOS = ['image/jpeg', 'image/png', 'image/webp', 'application/pdf'];
const mb = (b) => (b < 1048576 ? `${num(Math.max(1, Math.round(b / 1024)), 0)} KB` : `${num(b / 1048576, 1)} MB`);
register('M7.05', {
  render(ctx) {
    const o = buscarPedido(decodeURIComponent(ctx.params.id || '#VX-20412')), total = totalPedido(o);
    const st = S().despacho[o.id] || (S().despacho[o.id] = { emp: o.lineas.map(() => true) });
    st.fact = st.fact || { archivo: { nombre: 'factura-000842.jpg', size: 1.8 * 1048576 }, numero: '000842', fecha: '16/10/2026', total: '45,00', transporte: o.retiro ? 'Retiro en tienda' : 'MRW', guia: '' };
    const f = st.fact, trans = o.retiro ? ['Retiro en tienda'] : ['MRW', 'Zoom', 'Tealca', 'Delivery propio'];
    const el = h(page(topbar('Despachar y facturar'), `
      <section class="vx-pad-h"><p class="md-label-medium vx-eyebrow">Comprador</p><p class="md-title-small">${esc(o.cliente)}</p><p class="md-body-medium vx-tab-num">Total del pedido · <b>${money(total)}</b></p></section>
      <div class="vx-pad-h vx-form"><h2 class="md-title-medium">Transporte</h2>${select({ id: 'dTrans', label: 'Transporte', options: trans, value: f.transporte })}<div id="dGuiaBox">${field({ id: 'dGuia', label: 'Número de guía', value: f.guia, inputmode: 'numeric' })}</div></div>
      <section class="vx-pad-h"><h2 class="md-title-medium">Factura al cliente</h2><p>${statusTag('warning', 'Obligatoria')}</p><div id="dArch"></div><p class="md-body-small vx-muted">PDF o imagen (JPG, PNG, WebP) · hasta 10 MB</p>
        <input type="file" class="md-sr-only" id="dFile" accept="image/jpeg,image/png,image/webp,application/pdf" tabindex="-1"><div class="vx-twin vx-pad-v">${btn(`${icon('upload', 18)}Subir factura`, { kind: 'outlined', id: 'dSubir' })}${btn('Quitar archivo', { kind: 'outlined', id: 'dQuitar' })}</div></section>
      <div class="vx-pad-h vx-form"><h2 class="md-title-medium">Datos de la factura</h2>${field({ id: 'dNum', label: 'Número de factura', value: f.numero, inputmode: 'numeric' })}${field({ id: 'dFecha', label: 'Fecha (dd/mm/aaaa)', value: f.fecha, inputmode: 'numeric' })}
        ${field({ id: 'dTot', label: 'Total facturado (USD)', value: f.total, inputmode: 'decimal', help: 'No modifica el inventario' })}</div>
      <section class="vx-pad-h"><p class="md-title-small">Falta para despachar</p><ul class="vx-checklist vx-checklist--w" role="list" id="dFalta"></ul></section>`,
      btn(`Despachar ${esc(o.id)}`, { kind: 'filled', block: true, id: 'dGo', attrs: 'disabled' })));
    const v = (id) => el.querySelector('#' + id).value.trim();
    const num0 = (t) => Number(String(t).replace(/\./g, '').replace(',', '.'));
    const falta = () => { const m = [];
      if (!f.archivo) m.push('la factura (archivo)'); if (!v('dNum')) m.push('el número de factura'); if (!/^\d{2}\/\d{2}\/\d{4}$/.test(v('dFecha'))) m.push('la fecha de la factura');
      if (round2(num0(v('dTot'))) !== total) m.push('que el total facturado coincida con el del pedido'); if (!o.retiro && !v('dGuia')) m.push('el número de guía'); return m; };
    const paint = () => {
      el.querySelector('#dArch').innerHTML = f.archivo ? `<div class="vx-file">${icon('doc', 24)}<div><p class="md-body-large">${esc(f.archivo.nombre)}</p><p class="md-body-small vx-muted vx-tab-num">${mb(f.archivo.size)}</p></div></div>` : `<p class="md-body-medium vx-muted">Todavía no subiste la factura.</p>`;
      el.querySelector('#dQuitar').disabled = !f.archivo; el.querySelector('#dSubir').lastChild.textContent = f.archivo ? 'Cambiar archivo' : 'Subir factura';
      fieldError(el, 'dTot', round2(num0(v('dTot'))) !== total ? 'Corrige el total facturado' : '');
      const m = falta(); el.querySelector('#dFalta').innerHTML = m.length ? m.map((x) => `<li>${icon('close', 16)}<span class="md-body-medium">${x}</span></li>`).join('') : `<li class="is-ok">${icon('check', 16)}<span class="md-body-medium">Todo listo para despachar</span></li>`;
      el.querySelector('#dGo').disabled = m.length > 0; el.querySelector('#dGuiaBox').hidden = o.retiro; };
    el.addEventListener('input', () => { f.numero = v('dNum'); f.fecha = v('dFecha'); f.total = v('dTot'); f.guia = o.retiro ? '' : v('dGuia'); paint(); }); el.addEventListener('change', () => { f.transporte = el.querySelector('#dTrans').value; });
    el.querySelector('#dSubir').addEventListener('click', () => el.querySelector('#dFile').click());
    el.querySelector('#dFile').addEventListener('change', (e) => { const a = e.target.files[0]; if (!a) return;
      if (!TIPOS.includes(a.type)) { toast('Formato no válido: usa JPG, PNG, WebP o PDF'); return; } if (a.size > 10 * 1048576) { toast('El archivo pesa más de 10 MB'); return; }
      f.archivo = { nombre: a.name, size: a.size }; paint(); toast('Factura subida'); });
    el.querySelector('#dQuitar').addEventListener('click', () => { f.archivo = null; paint(); });
    el.querySelector('#dGo').addEventListener('click', () => { o.status = 'despachado'; set({ shop: S() }); toast(`Despachaste ${o.id}`); go('M7.03', { kind: 'mode' }); }); // Figma: fundido 350
    wireControls(el); paint(); return el;
  },
});

// ── M7.06 · Productos ───────────────────────────────────────────────────────
register('M7.06', {
  render() {
    const el = h(page(topbar('Productos', { back: false, trailing: avisosBtn() }), `${modoLbl()}<div class="vx-pad-h"><div class="md-search vx-searchform">${icon('search')}<input class="md-search-input md-body-large" id="prQ" type="search" placeholder="Buscar en tus productos" aria-label="Buscar en tus productos" autocomplete="off"></div></div>
      <div class="vx-chipwrap vx-pad-h" role="group" aria-label="Filtrar productos">${[['todos', 'Todos'], ['pub', 'Publicados'], ['pau', 'Pausados'], ['sin', 'Sin existencias']].map(([k, t], i) => `<span class="md-chip-wrap"><button type="button" class="md-chip md-sl md-label-large${i === 0 ? ' md-chip--selected' : ''}" data-f="${k}" aria-pressed="${i === 0}">${t}</button></span>`).join('')}</div>
      <ul class="vx-orders vx-pad-h" role="list" id="prList"></ul>`,
      btn(`${icon('add', 20)}Poner a la venta`, { kind: 'filled', block: true, go: 'M7.07' })));
    let f = 'todos', q = '';
    const paint = () => { const l = S().productos.filter((p) => (f === 'todos' || (f === 'pub' && p.publicado) || (f === 'pau' && !p.publicado) || (f === 'sin' && existencias(p) <= 0)) && (p.nombre + p.marca + p.codigo).toLowerCase().includes(q));
      el.querySelector('#prList').innerHTML = l.map((p) => { const ex = existencias(p);
        return `<li class="vx-order"><button type="button" class="vx-order-main md-sl vx-press" data-go="M7.08?id=${p.id}">${thumb()}<span class="vx-order-text"><span class="md-title-small">${esc(p.nombre)}</span>
          <span class="vx-tagrow">${statusTag(p.publicado ? 'success' : 'neutral', p.publicado ? 'Publicado' : 'Pausado')}${ex <= 0 ? statusTag('error', 'Sin existencias') : ''}</span><span class="md-body-medium vx-muted">${esc(p.marca)} · ${esc(p.codigo)}</span><span class="md-body-medium vx-tab-num">Existencias: ${ex}</span></span><b class="md-title-small vx-tab-num">${money(p.precio)}</b></button></li>`; }).join('') || `<li>${stateBlock({ icon: 'searchoff', title: 'No hay productos con ese filtro' })}</li>`; };
    el.addEventListener('click', (e) => { const c = e.target.closest('[data-f]'); if (!c) return; f = c.dataset.f; $$('[data-f]', el).forEach((b) => { const on = b === c; b.classList.toggle('md-chip--selected', on); b.setAttribute('aria-pressed', on); }); paint(); });
    el.querySelector('#prQ').addEventListener('input', (e) => { q = e.target.value.trim().toLowerCase(); paint(); });
    paint(); el.__un = subscribe(paint); return el;
  },
  mount(el) { return el.__un; },
});

// ── M7.07 · Poner un artículo a la venta (pantalla de flujo) ────────────────
register('M7.07', {
  render() {
    const libres = catalogoLibre.filter((c) => !S().productos.some((p) => p.codigo === c.codigo));
    if (!libres.length) return h(`<div class="vx-page"><header class="vx-sheet-head vx-flowhead"><h2 id="sheet-title" class="md-title-large md-sheet-title" tabindex="-1">Ponle precio</h2>${iconBtn('close', 'Cerrar', 'data-close')}</header>${stateBlock({ icon: 'check', title: 'Ya publicaste todo lo del catálogo de la demo' })}</div>`);
    const el = h(`<div class="vx-page"><header class="vx-sheet-head vx-flowhead"><h2 id="sheet-title" class="md-title-large md-sheet-title" tabindex="-1">Ponle precio</h2>${iconBtn('close', 'Cerrar', 'data-close')}</header>
      <div class="vx-body vx-pad-h"><form class="vx-form" novalidate onsubmit="return false">${select({ id: 'vFicha', label: 'Artículo del catálogo', options: libres.map((c) => `${c.nombre} · ${c.marca}`), value: `${libres[0].nombre} · ${libres[0].marca}` })}
        <p class="md-body-medium vx-muted" id="vTiendas"></p>${field({ id: 'vPrecio', label: 'Precio (USD)', inputmode: 'decimal' })}${field({ id: 'vStock', label: 'Existencias', inputmode: 'numeric' })}${field({ id: 'vCodigo', label: 'Tu código', value: libres[0].codigo })}
        ${select({ id: 'vCond', label: 'Estado del artículo', options: ['Nuevo', 'Caja abierta', 'Usado'], value: 'Nuevo' })}</form>
        ${btn('Ver la ficha del catálogo', { kind: 'text', attrs: 'data-toast="La ficha es la misma para todas las tiendas"' })}</div>
      <footer class="vx-actionbar">${btn('Poner a la venta', { kind: 'filled', block: true, id: 'vGo' })}</footer></div>`);
    const ficha = () => libres.find((c) => `${c.nombre} · ${c.marca}` === el.querySelector('#vFicha').value);
    const paint = () => { const c = ficha(); el.querySelector('#vTiendas').textContent = `Lo venden ${plural(c.tiendas, 'tienda', 'tiendas')}`; el.querySelector('#vCodigo').value = c.codigo; };
    el.querySelector('#vFicha').addEventListener('change', paint);
    el.querySelector('#vGo').addEventListener('click', async () => {
      const pr = Number(String(el.querySelector('#vPrecio').value).replace(',', '.')), st = Number(el.querySelector('#vStock').value);
      fieldError(el, 'vPrecio', !(pr > 0) ? 'Escribe un precio mayor que cero' : ''); fieldError(el, 'vStock', !Number.isInteger(st) || st < 0 || el.querySelector('#vStock').value === '' ? 'Escribe las existencias (0 o más)' : ''); if (!(pr > 0) || !Number.isInteger(st) || st < 0 || el.querySelector('#vStock').value === '') return;
      const c = ficha(); S().productos.unshift({ id: 'n' + Date.now(), nombre: c.nombre, marca: c.marca, codigo: el.querySelector('#vCodigo').value.trim() || c.codigo, precio: pr, publicado: true, inicial: st, mov: [], condicion: el.querySelector('#vCond').value, tiendas: c.tiendas + 1 });
      set({ shop: S() }); toast(`Pusiste a la venta ${c.nombre}`); await closeOverlay(); });
    paint(); return el;
  },
});

// ── M7.08 · Oferta ──────────────────────────────────────────────────────────
register('M7.08', {
  render(ctx) {
    const p = S().productos.find((x) => x.id === ctx.params.id) || S().productos[1];
    const seg = (name, items, cur) => `<div class="md-seg" role="radiogroup" aria-label="${name}">${items.map(([k, t]) => `<button type="button" role="radio" aria-checked="${k === cur}" class="md-seg-item md-sl md-label-large${k === cur ? ' md-seg-item--on' : ''}" data-${name}="${k}">${t}</button>`).join('')}</div>`;
    const el = h(page(topbar(esc(p.nombre)), `
      <p class="md-body-medium vx-muted vx-pad-h">${esc(p.marca)} · ${esc(p.codigo)}</p><p class="md-body-small vx-muted vx-pad-h">El nombre y la marca son de la ficha del catálogo, que comparten todas las tiendas.</p>
      <div class="vx-pad-h vx-form"><h2 class="md-title-medium">Tu oferta</h2>${seg('pub', [['1', 'Publicado'], ['0', 'Pausado']], p.publicado ? '1' : '0')}${seg('cond', [['Nuevo', 'Nuevo'], ['Caja abierta', 'Caja abierta'], ['Usado', 'Usado']], p.condicion)}${field({ id: 'oPrecio', label: 'Precio (USD)', value: num(p.precio), inputmode: 'decimal' })}</div>
      <section class="vx-pad-h"><h2 class="md-title-medium">Existencias</h2><p class="md-display-small vx-tab-num" id="oStock" aria-live="polite"></p><p class="md-body-medium vx-muted">Ya descuenta los pedidos pagados.</p></section>
      <div class="vx-pad-h vx-form"><h2 class="md-title-medium">Anotar un ajuste</h2>${field({ id: 'oDelta', label: 'Unidades (+ entran, − salen)', inputmode: 'numeric' })}${seg('mot', [['Compra a proveedor', 'Compra'], ['Unidad dañada', 'Dañada'], ['Otro', 'Otro']], 'Otro')}
        <div class="vx-row-end">${btn('Anotar ajuste', { kind: 'tonal', id: 'oAnotar' })}</div><p class="md-body-small vx-muted">Un ajuste anotado no se edita ni se borra.</p></div>
      <section class="vx-pad-h"><h2 class="md-title-medium">Últimos movimientos</h2><ul class="vx-list" role="list" id="oMov"></ul></section>`,
      btn('Guardar oferta', { kind: 'filled', block: true, id: 'oGo' })));
    let pub = p.publicado, cond = p.condicion, mot = 'Otro';
    const paint = () => { el.querySelector('#oStock').textContent = plural(existencias(p), 'unidad', 'unidades');
      el.querySelector('#oMov').innerHTML = [...p.mov].reverse().map(([d, m, f]) => `<li class="md-li md-li--2"><span class="md-li-text"><span class="md-li-title md-body-large">${esc(m)}</span><span class="md-li-sup md-body-medium vx-tab-num">${f}</span></span><span class="md-li-end"><b class="md-title-small vx-tab-num">${d < 0 ? '−' : '+'} ${Math.abs(d)}</b></span></li>`).join('') || '<li class="md-body-medium vx-muted">Todavía no hay movimientos.</li>'; };
    el.addEventListener('click', (e) => { const g = e.target.closest('[data-pub],[data-cond],[data-mot]'); if (!g) return; const grp = g.parentElement;
      if (g.dataset.pub !== undefined) pub = g.dataset.pub === '1'; if (g.dataset.cond !== undefined) cond = g.dataset.cond; if (g.dataset.mot !== undefined) mot = g.dataset.mot;
      $$('.md-seg-item', grp).forEach((b) => { const on = b === g; b.classList.toggle('md-seg-item--on', on); b.setAttribute('aria-checked', on); }); });
    el.querySelector('#oAnotar').addEventListener('click', () => { const d = Number(el.querySelector('#oDelta').value);
      const msg = !Number.isInteger(d) || d === 0 ? 'Escribe un número entero distinto de cero' : existencias(p) + d < 0 ? 'No puedes dejar las existencias en negativo' : ''; fieldError(el, 'oDelta', msg); if (msg) return;
      p.mov.push([d, mot, date(HOY)]); el.querySelector('#oDelta').value = ''; set({ shop: S() }); paint(); play(el.querySelector('#oStock'), 'vx-tick'); toast('Anotaste el ajuste'); });
    el.querySelector('#oGo').addEventListener('click', () => { const pr = Number(String(el.querySelector('#oPrecio').value).replace(/\./g, '').replace(',', '.'));
      fieldError(el, 'oPrecio', !(pr > 0) ? 'Escribe un precio mayor que cero' : ''); if (!(pr > 0)) return; Object.assign(p, { precio: pr, publicado: pub, condicion: cond }); set({ shop: S() }); toast('Guardaste tu oferta'); back(); });
    paint(); return el;
  },
});
