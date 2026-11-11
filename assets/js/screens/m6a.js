// M6 · Cuenta y postventa (1/2): cuenta, datos personales, pedidos, detalle, ayuda, calificar, devolver,
// reclamar, hilo del reclamo, garantías y servicios que pedí.
import { register } from './registry.js';
import { h, icon, btn, iconBtn, topbar, stateBlock, toast, $, $$ } from '../ui.js';
import { avatar, stars, page, area, field, fieldError, statusTag, row, wireControls, stepper } from '../market.js';
import { go, back } from '../router.js';
import { state, set } from '../store.js';
import { stagger, play } from '../motion.js';
import { usuario, pedidos as pedidosCanon, detallePedidos, garantias, serviciosPedidos, HOY, IMPUESTO_INCLUIDO } from '../data.js';
import { money, num, esc, plural, round2, date } from '../format.js';
import { MODE_NAME } from './catalog.js';

const KIND = { 'Falta pagar': 'warning', 'Pago reportado': 'info', 'En camino': 'info', Entregado: 'success', Pagado: 'success', 'En mediación': 'info', Resuelto: 'success', 'En revisión': 'info' };
const tag = (estado, extra = '') => statusTag(KIND[estado] || 'neutral', estado + extra);
const thumb = (n = 24) => `<span class="vx-thumb-ph vx-thumb-ph--sm" aria-hidden="true">${icon('box', n)}</span>`;
const sec = (title) => `<h2 class="md-label-large vx-sub vx-sub--list">${title}</h2>`;

/** Pedidos de la cuenta: los creados en la demo primero; la fila de Figma de una compra ya pagada se omite. */
const listaPedidos = () => [...state.orders, ...pedidosCanon.filter((c) => !state.orders.some((o) => o.id === c.id))];
const buscarPedido = (id, t) => listaPedidos().find((o) => o.id === id && (!t || o.tienda === t)) || listaPedidos().find((o) => o.id === id) || pedidosCanon.find((o) => o.id === '#VX-20211');
const detalleDe = (o) => detallePedidos[`${o.id}|${o.tienda}`] || { emitido: o.fecha, lineas: [{ n: 'Artículos del pedido', q: 1, p: o.total }] };
const qs = (o) => `id=${encodeURIComponent(o.id)}&t=${encodeURIComponent(o.tienda)}`;

// ── M6.01 · Cuenta ──────────────────────────────────────────────────────────
register('M6.01', {
  render() {
    const u = usuario, canonPagado = state.orders.some((o) => o.id === '#VX-20431') ? 1 : 0;
    const resumen = { sinPagar: u.resumen.sinPagar - canonPagado, enCamino: u.resumen.enCamino + state.orders.length, entregados: u.resumen.entregados };
    const total = resumen.sinPagar + resumen.enCamino + resumen.entregados, max = Math.max(...u.gastoMensual.map(([, v]) => v));
    const tile = (n, l) => `<button type="button" class="vx-tile md-sl vx-press" data-go="M6.03" data-kind="swap"><b class="md-headline-small vx-tab-num">${n}</b><span class="md-body-small">${l}</span></button>`;
    const nuevos = state.avisosCuenta.some((a) => a.nuevo);
    return h(`<div>${topbar('Cuenta', { back: false })}
      <section class="vx-profile vx-pad-h">${avatar(u.iniciales, true)}<div><p class="md-title-medium">${esc(u.nombre)}</p><p class="md-body-medium vx-muted">${esc(u.correo)}</p>${u.verificado ? statusTag('success', 'Verificado') : ''}</div></section>
      <div class="vx-pad-h vx-modebox"><p class="md-body-medium">Estás en modo ${MODE_NAME[state.mode]}</p>${btn('Cambiar', { kind: 'text', go: 'O.MOD' })}</div>
      <div class="vx-tiles vx-pad-h">${tile(resumen.sinPagar, 'Sin pagar')}${tile(resumen.enCamino, 'En camino')}${tile(resumen.entregados, 'Entregados')}</div>
      <section class="vx-pad-h"><h2 class="md-title-medium">Gasto por mes (USD)</h2>
        <div class="vx-chart" role="img" aria-label="Gasto por mes en USD: ${u.gastoMensual.map(([m, v]) => `${m} ${v}`).join(', ')}">${u.gastoMensual.map(([m, v]) => `<div class="vx-bar-col"><span class="md-label-medium vx-tab-num">${v}</span><i style="height:${Math.round((v / max) * 100)}%"></i><span class="md-label-medium vx-muted">${m}</span></div>`).join('')}</div>
        <p class="md-body-small vx-muted">Calculado sobre tus últimos ${total} pedidos.</p></section>
      ${sec('Mis compras')}<ul class="vx-list" role="list">${row({ ic: 'receipt', title: 'Pedidos', go: 'M6.03', kind: 'swap' })}${row({ ic: 'error', title: 'Reclamos y devoluciones', go: 'M6.09' })}${row({ ic: 'shield', title: 'Garantías', go: 'M6.11' })}${row({ ic: 'wrench', title: 'Servicios que pedí', go: 'M6.12' })}</ul>
      ${sec('Mi cuenta')}<ul class="vx-list" role="list">${row({ ic: 'person', title: 'Datos personales', go: 'M6.02' })}${row({ ic: 'map', title: 'Direcciones', go: 'M6.13' })}${row({ ic: 'wallet', title: 'Formas de pago', go: 'M6.15' })}${row({ ic: 'bell', title: 'Avisos', go: 'M6.17', dot: nuevos })}${row({ ic: 'lock', title: 'Seguridad y contraseña', go: 'M6.18' })}${row({ ic: 'eye', title: 'Cómo se ve VexBiz', go: 'M6.23' })}</ul>
      ${sec('Aprender')}<ul class="vx-list" role="list">${row({ ic: 'school', title: 'Academia', go: 'M5.01' })}</ul>
      ${sec('Ayuda')}<ul class="vx-list" role="list">${row({ ic: 'info', title: 'Ayuda e información', go: 'M6.24' })}</ul>
      <div class="vx-pad">${btn(`${icon('logout', 20)}Cerrar sesión`, { kind: 'text', block: true, id: 'btnSalir' })}</div></div>`);
  },
  mount(el) {
    el.querySelector('#btnSalir').addEventListener('click', () => { set({ sesion: false }); toast('Cerraste sesión'); go('M1.02', { kind: 'mode' }); });
    // Patrón 8: el gráfico y las listas largas aparecen una sola vez al llegar
  },
});

// ── M6.02 · Datos personales ────────────────────────────────────────────────
register('M6.02', {
  render() {
    const u = usuario, kv = (k, v) => `<div class="vx-kv"><dt class="md-body-medium vx-muted">${k}</dt><dd class="md-body-large">${v}</dd></div>`;
    return h(`<div>${topbar('Datos personales')}<div class="vx-center vx-pad">${avatar(u.iniciales, true)}</div>
      <dl class="vx-pad-h vx-dl">${kv('Nombre', esc(u.nombre))}${kv('Correo', esc(u.correo))}${kv('País activo', 'Venezuela')}${kv('Verificación en dos pasos', state.dosPasos ? statusTag('success', 'Activa') : 'Sin activar')}</dl>
      <div class="vx-pad-h vx-stack">${btn(state.dosPasos ? 'Ver verificación en dos pasos' : 'Activar verificación en dos pasos', { kind: 'tonal', block: true, go: 'M6.19' })}
        <p class="md-body-medium vx-muted">Un archivo con tu cuenta, compras y servicios.</p>
        ${btn(`${icon('upload', 20)}Descargar mis datos`, { kind: 'outlined', block: true, attrs: 'data-toast="Preparando tu archivo. Te avisamos cuando esté listo."' })}</div></div>`);
  },
});

// ── M6.03 · Pedidos ─────────────────────────────────────────────────────────
register('M6.03', {
  render() {
    const lista = listaPedidos();
    return h(`<div>${topbar('Pedidos', { back: false })}
      <ul class="vx-list" role="list">${row({ ic: 'error', title: 'Reclamos y devoluciones', go: 'M6.09' })}${row({ ic: 'shield', title: 'Garantías', go: 'M6.11' })}
        <li><button type="button" class="md-li md-sl vx-press vx-row" data-go="M6.12"><span class="md-li-icon">${icon('wrench')}</span><span class="md-li-text"><span class="md-li-title md-body-large">Servicios que pedí</span></span><span class="md-li-end"><span class="md-badge md-badge--large" aria-label="2 servicios">${serviciosPedidos.length}</span>${icon('chevron')}</span></button></li></ul>
      <ul class="vx-orders vx-pad-h" role="list" data-stagger>${lista.map((o, i) => `<li class="vx-order" style="--i:${i}">
        <button type="button" class="vx-order-main md-sl vx-press" data-go="M6.04?${qs(o)}" aria-label="Pedido ${o.id}, ${esc(o.tienda)}, ${o.estado}">${thumb()}
          <span class="vx-order-text"><span class="md-title-small">${esc(o.tienda)}</span><span class="md-body-medium vx-muted vx-tab-num">${o.id} · ${o.fecha}</span>${tag(o.estado, o.estado === 'Pago reportado' ? ' · en comprobación' : '')}</span>
          <b class="md-title-medium vx-tab-num">${money(o.total)}</b></button>
        ${o.estado === 'Falta pagar' ? `<div class="vx-order-act">${btn(`Pagar ${money(o.total)}`, { kind: 'filled', go: 'M3.09' })}</div>` : ''}</li>`).join('')}</ul></div>`);
  },
  mount(el, ctx) { if (ctx.first) $$('[data-stagger]', el).forEach(stagger); },
});

// ── M6.04 · Detalle del pedido ──────────────────────────────────────────────
register('M6.04', {
  render(ctx) {
    const o = buscarPedido(ctx.params.id, ctx.params.t), d = detalleDe(o);
    const suma = round2(d.lineas.reduce((s, l) => s + l.q * l.p, 0)), envio = round2(Math.max(0, o.total - suma));
    const subtotal = round2(o.total / (1 + IMPUESTO_INCLUIDO / 100)), imp = round2(o.total - subtotal);
    const r = (k, v, strong) => `<div class="vx-sumrow${strong ? ' is-strong' : ''}"><dt class="md-body-large">${k}</dt><dd class="md-body-large vx-tab-num">${v}</dd></div>`;
    return h(page(topbar(esc(o.tienda), { trailing: iconBtn('receipt', 'Ayuda con el pedido', `data-go="M6.05?${qs(o)}"`) }), `
      <section class="vx-pad-h vx-stack"><p class="md-body-medium vx-muted">Emitido el ${d.emitido}</p><p>${tag(o.estado)}</p>
        ${d.envio ? `<p class="md-body-medium">${esc(d.envio.empresa)} · despachado el ${d.envio.despachado}<br><span class="vx-tab-num">Guía ${d.envio.guia}</span></p>` : ''}
        ${d.factura ? `<p class="md-body-medium vx-tab-num">Factura N.º ${d.factura.n} · ${d.factura.fecha}</p>` : ''}</section>
      <section class="vx-pad-h"><h2 class="md-title-medium">Artículos (${d.lineas.length})</h2><ul class="vx-list" role="list">${d.lineas.map((l) => `<li class="vx-detline"><button type="button" class="vx-detline-main md-sl vx-press" data-go="M2.08?id=aa12">${thumb(20)}
        <span class="vx-order-text"><span class="md-body-large">${esc(l.n)}</span><span class="md-body-medium vx-muted vx-tab-num">${l.q} × ${money(l.p)}</span>${l.garantia ? `<span class="md-body-small vx-muted">Garantía hasta ${l.garantia}</span>` : ''}${l.devolucion ? `<span>${statusTag('info', l.devolucion + ' · En revisión')}</span>` : ''}</span><b class="md-body-large vx-tab-num">${money(l.q * l.p)}</b></button></li>`).join('')}</ul></section>
      <dl class="vx-pad-h vx-dl">${r('Subtotal', money(subtotal))}${r('Envío', envio ? money(envio) : 'Gratis')}${r('Impuestos (incluidos)', money(imp))}${r('Total', money(o.total), true)}</dl>
      <div class="vx-pad-h vx-stack">${d.factura ? btn('Ver factura', { kind: 'text', attrs: 'data-toast="Abre la factura en tu visor de PDF"' }) : ''}${d.envio ? btn('Seguir el envío', { kind: 'text', attrs: 'data-toast="Abre el seguimiento de la guía"' }) : ''}
        ${btn('Ayuda con el pedido', { kind: 'text', go: `M6.05?${qs(o)}` })}${o.estado === 'Entregado' ? btn('Pedir devolución', { kind: 'outlined', block: true, go: `M6.07?${qs(o)}` }) : ''}</div>`,
      `<span class="md-body-medium vx-muted">Pedido ${o.id}</span>`));
  },
});

// ── M6.05 · Ayuda con un pedido ─────────────────────────────────────────────
register('M6.05', {
  render(ctx) {
    const o = buscarPedido(ctx.params.id, ctx.params.t), dev = state.devoluciones.some((x) => x.pedido === o.id);
    return h(`<div>${topbar('Ayuda con el pedido')}
      <section class="vx-card vx-pad-h"><div class="vx-order-main vx-static">${thumb()}<span class="vx-order-text"><span class="md-title-small">${esc(o.tienda)}</span><span class="md-body-medium vx-muted vx-tab-num">${o.id}</span>${tag(o.estado)}</span></div></section>
      <div class="vx-pad-h vx-stack vx-helpstack">
        <p class="md-body-large">Cuenta cómo te fue con ${esc(o.tienda)}.</p>${btn('Calificar a la tienda', { kind: 'tonal', block: true, go: `M6.06?${qs(o)}` })}
        ${dev ? `<button type="button" class="md-li md-sl vx-press vx-row vx-note" data-go="M6.09">${statusTag('info', 'En revisión')}<span class="md-body-large">Ya hay una devolución en curso</span></button>` : ''}
        ${btn('Pedir devolución', { kind: 'tonal', block: true, go: `M6.07?${qs(o)}` })}
        <p class="md-body-large">Si no llegas a un acuerdo con la tienda, VexBiz interviene como mediador.</p>${btn('Abrir reclamo', { kind: 'outlined', block: true, go: `M6.08?${qs(o)}` })}</div></div>`);
  },
});

// ── M6.06 · Calificar a la tienda ───────────────────────────────────────────
const LABEL = (n) => (n <= 1 ? 'Muy malo' : n <= 2 ? 'Malo' : n <= 3 ? 'Regular' : n <= 4 ? 'Bueno' : 'Muy bueno'); // INVENTADO salvo «Muy bueno»
const star = (fill) => `<svg viewBox="0 0 24 24" width="40" height="40" aria-hidden="true"><defs><clipPath id="cp${String(fill).replace('.', '')}"><rect width="${fill * 24}" height="24"/></clipPath></defs>
  <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z" fill="currentColor" clip-path="url(#cp${String(fill).replace('.', '')})"/></svg>`;
register('M6.06', {
  render(ctx) {
    const o = buscarPedido(ctx.params.id, ctx.params.t) , prev = state.calificaciones[o.id];
    const el = h(page(topbar('Calificar a la tienda'), `
      <section class="vx-pad-h"><p class="md-title-medium">${esc(o.tienda)}</p><p class="md-body-medium vx-muted vx-tab-num">Pedido ${o.id}</p></section>
      <p class="md-body-large vx-pad-h">Calificas a la tienda, no al producto</p>
      <div class="vx-rate vx-pad-h"><div class="vx-stars" role="slider" tabindex="0" aria-label="Calificación de la tienda" aria-valuemin="0.5" aria-valuemax="5" aria-valuenow="${prev?.nota ?? 4.5}" aria-valuetext="" id="rate"></div>
        <p class="md-title-large vx-tab-num"><span id="rateN">4,5</span> · <span id="rateT">Muy bueno</span></p></div>
      <div class="vx-pad-h">${area({ id: 'comentario', label: 'Cuéntanos más (opcional)', value: prev?.texto || '', rows: 4 })}</div>`,
      btn(prev ? 'Actualizar calificación' : 'Enviar calificación', { kind: 'filled', block: true, id: 'btnCalif' })));
    let nota = prev?.nota ?? 4.5;
    const paint = () => {
      const box = el.querySelector('#rate');
      box.innerHTML = [1, 2, 3, 4, 5].map((i) => `<span class="vx-star">${star(Math.max(0, Math.min(1, nota - (i - 1))))}</span>`).join('');
      box.setAttribute('aria-valuenow', nota); box.setAttribute('aria-valuetext', `${num(nota, 1)} de 5, ${LABEL(nota)}`);
      el.querySelector('#rateN').textContent = num(nota, 1); el.querySelector('#rateT').textContent = LABEL(nota);
    };
    const rect = () => el.querySelector('#rate').getBoundingClientRect();
    const fromX = (x) => { const r = rect(), p = Math.min(1, Math.max(0, (x - r.left) / r.width)); return Math.max(0.5, Math.ceil(p * 10) / 2); };
    el.querySelector('#rate').addEventListener('click', (e) => { nota = fromX(e.clientX); paint(); });
    el.querySelector('#rate').addEventListener('keydown', (e) => { const d = { ArrowRight: 0.5, ArrowUp: 0.5, ArrowLeft: -0.5, ArrowDown: -0.5 }[e.key]; if (!d) return; e.preventDefault(); nota = Math.min(5, Math.max(0.5, nota + d)); paint(); });
    el.querySelector('#btnCalif').addEventListener('click', () => {
      state.calificaciones[o.id] = { nota, texto: el.querySelector('#comentario').value.trim() }; set({ calificaciones: state.calificaciones });
      toast(`Gracias: calificaste a ${o.tienda} con ${num(nota, 1)}`); back();
    });
    paint(); return el;
  },
});

// ── M6.07 · Pedir devolución ────────────────────────────────────────────────
register('M6.07', {
  render(ctx) {
    const o = buscarPedido(ctx.params.id, ctx.params.t);
    const items = [{ k: 'cap', n: 'Capacitor de marcha 35+5 µF', max: 2 }, { k: 'ctrl', n: 'Control remoto universal A/A', max: 1 }, { k: 'aa', n: 'Aire split inverter 12.000 BTU', max: 0 }];
    const q = { cap: 1, ctrl: 0, aa: 0 };
    const el = h(page(topbar('Pedir devolución'), `
      <section class="vx-pad-h"><h2 class="md-title-medium">¿Qué devuelves?</h2><ul class="vx-list" role="list">${items.map((i) => `<li class="vx-detline vx-ret">${thumb(20)}<span class="vx-order-text"><span class="md-body-large">${i.n}</span><span class="md-body-medium vx-muted">${i.max ? `Compraste ${i.max}` : 'Ya devuelto'}</span></span>${i.max ? stepper(i.k, q[i.k], i.max) : ''}</li>`).join('')}</ul>
        <p class="md-title-small vx-tab-num" id="retTot" aria-live="polite"></p></section>
      <div class="vx-pad-h vx-form">${field({ id: 'motivo', label: 'Motivo' })}${area({ id: 'detalle', label: 'Describe el problema', help: 'No se pueden adjuntar fotos. Describe el problema con detalle.', rows: 4 })}</div>`,
      btn('Pedir devolución', { kind: 'filled', block: true, id: 'btnDev' })));
    const paint = () => { const n = Object.values(q).reduce((s, v) => s + v, 0);
      el.querySelector('#retTot').textContent = plural(n, 'unidad', 'unidades');
      items.forEach((i) => { if (!i.max) return; el.querySelector(`[data-qty="${i.k}"]`).textContent = q[i.k]; el.querySelector(`[data-dec="${i.k}"]`).disabled = q[i.k] <= 0; el.querySelector(`[data-inc="${i.k}"]`).disabled = q[i.k] >= i.max; }); };
    el.addEventListener('click', (e) => { const inc = e.target.closest('[data-inc]'), dec = e.target.closest('[data-dec]');
      if (inc) { q[inc.dataset.inc]++; paint(); play(el.querySelector('#retTot'), 'vx-tick'); } if (dec) { q[dec.dataset.dec]--; paint(); play(el.querySelector('#retTot'), 'vx-tick'); } });
    el.querySelector('#btnDev').addEventListener('click', () => {
      const n = Object.values(q).reduce((s, v) => s + v, 0), mot = el.querySelector('#motivo').value.trim(), det = el.querySelector('#detalle').value.trim();
      fieldError(el, 'motivo', !mot ? 'Escribe el motivo' : ''); fieldError(el, 'detalle', !det ? 'Describe el problema' : '');
      if (!n) { toast('Elige al menos una unidad'); return; } if (!mot || !det) return;
      const item = items.filter((i) => q[i.k] > 0).map((i) => i.n).join(', ');
      state.devoluciones.unshift({ id: `#D-00${31 + state.devoluciones.length}`, pedido: o.id, item, unidades: n, estado: 'En revisión', fecha: date(HOY).slice(0, 5) });
      state.flow.segReclamos = 'dev'; set({ devoluciones: state.devoluciones }); toast('Pedimos tu devolución'); go('M6.09', { kind: 'push' });
    });
    paint(); return el;
  },
});

// ── M6.08 · Abrir reclamo ───────────────────────────────────────────────────
register('M6.08', {
  render(ctx) {
    const o = ctx.params.id ? buscarPedido(ctx.params.id, ctx.params.t) : { id: '#VX-20301', tienda: 'Herramientas Andina', total: 24.9 };
    const kv = (k, v) => `<div class="vx-kv"><dt class="md-body-medium vx-muted">${k}</dt><dd class="md-body-large vx-tab-num">${v}</dd></div>`;
    const el = h(page(topbar('Abrir reclamo'), `
      <p class="md-body-large vx-pad-h">VexBiz revisa el caso y decide. La tienda verá lo que escribas.</p>
      <dl class="vx-pad-h vx-dl">${kv('Pedido', o.id)}${kv('Tienda', esc(o.tienda))}${kv('Total', money(o.total))}</dl>
      <div class="vx-pad-h vx-form">${field({ id: 'motivo', label: 'Motivo' })}${area({ id: 'detalle', label: 'Describe el problema', help: 'No se pueden adjuntar fotos. Describe el problema con detalle.', rows: 4 })}</div>`,
      btn('Abrir reclamo', { kind: 'filled', block: true, id: 'btnRec' })));
    el.querySelector('#btnRec').addEventListener('click', () => {
      const mot = el.querySelector('#motivo').value.trim(), det = el.querySelector('#detalle').value.trim();
      fieldError(el, 'motivo', !mot ? 'Escribe el motivo' : ''); fieldError(el, 'detalle', !det ? 'Describe el problema' : ''); if (!mot || !det) return;
      toast('Abrimos tu reclamo'); go('M6.10?id=%23R-0091', { kind: 'push' }); // Figma: M6.08 → M6.10 (el hilo es el canónico)
    });
    return el;
  },
});

// ── M6.09 · Reclamos y devoluciones ─────────────────────────────────────────
register('M6.09', {
  render() {
    const dev = state.flow.segReclamos === 'dev';
    const el = h(`<div>${topbar('Reclamos y devoluciones')}
      <div class="vx-pad-h"><div class="md-seg" role="tablist" aria-label="Ver">${[['rec', 'Reclamos'], ['dev', 'Devoluciones']].map(([k, t]) => `<button type="button" role="tab" class="md-seg-item md-sl md-label-large${(k === 'dev') === dev ? ' md-seg-item--on' : ''}" data-seg="${k}" aria-selected="${(k === 'dev') === dev}">${t}</button>`).join('')}</div></div>
      <ul class="vx-orders vx-pad-h" role="list" id="recList"></ul></div>`);
    const paint = () => {
      const isDev = state.flow.segReclamos === 'dev';
      $$('[data-seg]', el).forEach((b) => { const on = (b.dataset.seg === 'dev') === isDev; b.classList.toggle('md-seg-item--on', on); b.setAttribute('aria-selected', on); });
      el.querySelector('#recList').innerHTML = isDev
        ? (state.devoluciones.map((d) => `<li class="vx-order"><div class="vx-order-main vx-static"><span class="vx-order-text"><span class="md-title-small vx-tab-num">${d.id} · Pedido ${d.pedido}</span><span class="md-body-medium vx-muted">${d.fecha} · ${esc(d.item)}</span><span class="md-body-medium">${plural(d.unidades, 'unidad', 'unidades')}</span>${tag(d.estado)}</span></div></li>`).join('') || `<li>${stateBlock({ icon: 'inbox', title: 'No tienes devoluciones' })}</li>`)
        : state.reclamos.map((r) => `<li class="vx-order"><button type="button" class="vx-order-main md-sl vx-press" ${r.mensajes ? `data-go="M6.10?id=${encodeURIComponent(r.id)}"` : 'data-toast="Este reclamo ya está resuelto"'}>
            <span class="vx-order-text"><span class="md-title-small vx-tab-num">${r.id} · Pedido ${r.pedido}</span><span class="md-body-medium vx-muted">${r.fecha}</span>${tag(r.estado)}<span class="md-body-medium">${esc(r.resumen)}</span>
            ${r.ultimo ? `<span class="md-body-small vx-muted">Último mensaje: ${esc(r.ultimo)}</span>` : ''}${r.resolucion ? `<span class="md-body-medium"><b>Resolución de VexBiz</b><br>${esc(r.resolucion)}</span>` : ''}</span></button></li>`).join('');
    };
    el.addEventListener('click', (e) => { const b = e.target.closest('[data-seg]'); if (!b) return; state.flow.segReclamos = b.dataset.seg; paint(); });
    paint(); return el;
  },
});

// ── M6.10 · Hilo del reclamo ────────────────────────────────────────────────
register('M6.10', {
  render(ctx) {
    const r = state.reclamos.find((x) => x.id === decodeURIComponent(ctx.params.id || '#R-0091')) || state.reclamos[0];
    const el = h(`<div class="vx-page">${topbar(`Reclamo ${r.id}`, { trailing: btn('Ver pedido', { kind: 'text', go: 'M6.04?id=%23VX-20211&t=ElectroHogar' }) })}
      <div class="vx-body"><section class="vx-pad-h"><p>${tag(r.estado)}</p><p class="md-body-medium vx-muted">Abierto el ${r.abierto}</p>
        <h2 class="md-title-small vx-sub0">Motivo</h2><p class="md-body-large">${esc(r.motivo)}</p></section>
        <ul class="vx-thread vx-pad-h" role="list" aria-live="polite" id="hilo"></ul></div>
      <form class="vx-composer" id="fMsg"><label class="md-sr-only" for="msg">Escribe un mensaje</label><input class="md-body-large vx-msg" id="msg" autocomplete="off" placeholder="Escribe un mensaje…">
        <button type="submit" class="md-iconbtn md-iconbtn--filled md-sl" aria-label="Enviar mensaje">${icon('chat')}</button></form></div>`);
    const paint = () => { el.querySelector('#hilo').innerHTML = r.mensajes.map((m) => `<li class="vx-msgrow${m.de === 'Tú' ? ' is-me' : ''}"><p class="md-label-medium vx-muted">${m.de} · ${m.hora}</p><p class="md-body-large vx-bubble">${esc(m.t)}</p></li>`).join(''); };
    el.querySelector('#fMsg').addEventListener('submit', (e) => { e.preventDefault(); const i = el.querySelector('#msg'), t = i.value.trim(); if (!t) return;
      const now = new Date(); r.mensajes.push({ de: 'Tú', hora: `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`, t }); i.value = ''; paint();
      const last = el.querySelector('#hilo').lastElementChild; play(last, 'vx-tick'); last.scrollIntoView({ block: 'nearest' }); });
    paint(); return el;
  },
});

// ── M6.11 · Garantías ───────────────────────────────────────────────────────
register('M6.11', {
  render() {
    const dias = (d) => Math.round((d - HOY) / 86400000);
    return h(`<div>${topbar('Garantías')}<ul class="vx-orders vx-pad-h" role="list">${garantias.map((g) => { const n = dias(g.hasta), ok = n > 0;
      return `<li class="vx-order"><div class="vx-order-main vx-static"><span class="vx-order-text">${statusTag(ok ? 'success' : 'error', ok ? `Vigente · quedan ${n} días` : 'Vencida')}
        <span class="md-title-small">${esc(g.producto)}</span><span class="md-body-medium">Responde: ${esc(g.responde)}</span><span class="md-body-medium vx-muted vx-tab-num">hasta ${date(g.hasta)}</span><span class="md-body-medium vx-muted vx-tab-num">${g.ref}</span></span></div>
        ${ok ? `<div class="vx-order-act">${btn('Condiciones', { kind: 'text', go: 'M6.25?doc=garantia' })}</div>` : ''}</li>`; }).join('')}</ul></div>`);
  },
});

// ── M6.12 · Servicios que pedí ──────────────────────────────────────────────
register('M6.12', {
  render() {
    return h(`<div>${topbar('Servicios que pedí')}<ul class="vx-orders vx-pad-h" role="list">${serviciosPedidos.map((s) => `<li class="vx-order"><div class="vx-order-main vx-static"><span class="vx-order-text">
        <span class="md-label-medium vx-tab-num vx-muted">${s.id}</span>${statusTag(s.ok ? 'success' : 'info', s.estado)}<span class="md-title-small">${esc(s.servicio)}</span><span class="md-body-medium">${esc(s.quien)}${s.rating ? ` · <span class="vx-tab-num">${stars(s.rating)}</span>` : ''}</span>
        ${s.nota ? `<span class="md-body-medium vx-muted">${esc(s.nota)}</span>` : ''}<span class="md-body-medium vx-muted vx-tab-num">${s.cuando} · ${money(s.total)}</span>${s.donde ? `<span class="md-body-medium vx-muted">${esc(s.donde)}</span>` : ''}</span></div>
        <div class="vx-order-act">${s.ok ? btn('Calificar', { kind: 'tonal', attrs: 'data-toast="Gracias: tu calificación llega al técnico"' }) : btn('Ver detalle', { kind: 'text', attrs: 'data-toast="La empresa te avisa cuando asigne al técnico"' })}${btn('Contactar', { kind: 'text', attrs: 'data-toast="Abre WhatsApp de VexBiz: lunes a sábado, 8:00 a 18:00"' })}</div></li>`).join('')}</ul></div>`);
  },
});
