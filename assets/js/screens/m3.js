// M3 · Compra: carrito, pagar (entrega, envío, forma de pago), resumen, sala de espera, pago de la compra,
// pasarela, resultado del pago, reportar una transferencia.
// Cadena (Huecos, punto 3): M3.01 → M3.02 → M3.04 → M3.06 → ▣ Resumen → M3.08 → M3.09 → M3.10 | M3.12 → M3.11.
import { register } from './registry.js';
import { h, icon, btn, iconBtn, topbar, stateBlock, toast, $, $$ } from '../ui.js';
import { avatar, stars, page, banner, stepper, field, fieldError, radioOpt, switchHtml, wireControls, checkoutSteps, fillSteps, otpHtml, wireOtp, closeOnGo, stock } from '../market.js';
import { go, closeOverlay } from '../router.js';
import { state, set, subscribe, cartLines, cartSubtotal, cartCount, setQty, removeLine, lineKey } from '../store.js';
import { play, countdown } from '../motion.js';
import { compra, producto, tienda, TASA } from '../data.js';
import { money, bs, bsRef, num, esc, plural, pct, round2 } from '../format.js';

// ── Reglas de la compra (todo calculado, nada escrito a mano) ───────────────
// Envío por tienda. INVENTADO: tienda sin dato (ClimaRepuestos, ElectroHogar…) cobra $ 6,00 y tarda 2–4 días.
const ENVIO = { ft: { costo: 8.4, km: 14, kg: 9, dias: '1–2 días' }, ha: { costo: 0, dias: '1–3 días', gratis: true } };
const envioDe = (id) => ENVIO[id] || { costo: 6, km: 20, kg: 5, dias: '2–4 días' };
const IMPUESTO = { debito: 3, binance: 0, transferencia: 0 }; // % del pago por método (M3.06). Binance: el Figma no dice impuesto.
const METODO = { debito: 'Débito bancario', binance: 'Binance Pay', transferencia: 'Transferencia a VexBiz' };
const dirActual = () => state.dirs.find((d) => d.id === state.flow.direccion) || state.dirs[0];
const dirCorta = (d) => `${d.linea.split(',')[0]}, ${d.ciudad.split(',')[0]}`;

/** Agrupa el carrito por tienda y calcula envío, impuesto y total según las elecciones del flujo. */
export function compraActual() {
  const lines = cartLines();
  const grupos = [...new Set(lines.map((l) => l.t.id))].map((id) => {
    const ls = lines.filter((l) => l.t.id === id), env = envioDe(id), retiro = !!state.flow.retiro[id];
    return { t: tienda(id), ls, units: ls.reduce((n, l) => n + l.qty, 0), env, retiro, envio: retiro ? 0 : env.costo, subtotal: round2(ls.reduce((s, l) => s + l.precio * l.qty, 0)) };
  });
  const subtotal = cartSubtotal(), envio = round2(grupos.reduce((s, g) => s + g.envio, 0));
  const impPct = IMPUESTO[state.flow.metodo] ?? 0, impuesto = pct(subtotal + envio, impPct);
  return { lines, grupos, subtotal, envio, impPct, impuesto, total: round2(subtotal + envio + impuesto) };
}
const compraPasarela = () => {
  const sub = round2(compra.pedidos.reduce((s, p) => s + p.total, 0)), imp = pct(sub, compra.pasarela.impuestoPct);
  return { sub, imp, total: round2(sub + imp) };
};
const thumb = (n = 24) => `<span class="vx-thumb-ph vx-thumb-ph--sm" aria-hidden="true">${icon('box', n)}</span>`;
const acciones = (left, right) => `${left}${right}`;

// ── M3.01 · Carrito ─────────────────────────────────────────────────────────
register('M3.01', {
  render() {
    return h(page(topbar('Tu carrito', { back: false }), `<div id="cartBody"></div>`,
      `<div class="vx-actionsum"><span class="md-body-small vx-muted">Total</span><span class="md-title-large vx-tab-num" id="cTotal"></span></div>${btn('Continuar', { kind: 'filled', id: 'cGo', go: 'M3.02' })}`));
  },
  mount(el, ctx) {
    const body = el.querySelector('#cartBody');
    let first = true, lastTotal = null;
    const paint = () => {
      const act = document.activeElement, keep = act && (act.dataset.inc || act.dataset.dec || act.dataset.rm) ? ['inc', 'dec', 'rm'].map((k) => (act.dataset[k] ? [k, act.dataset[k]] : null)).find(Boolean) : null;
      const c = compraActual(), cambios = c.lines.filter((l) => l.cambioPrecio).length;
      if (!c.lines.length) {
        body.innerHTML = stateBlock({ icon: 'cart', title: 'Tu carrito está vacío', text: 'Cuando añadas algo aparecerá aquí.', action: btn('Explorar', { kind: 'outlined', go: 'M2.05', kindNav: 'swap' }) });
      } else {
        body.innerHTML = `
          <div class="vx-pad-h vx-stack">${banner('warning', `Compra #VX-20418 sin pagar · <b class="vx-tab-num">${money(129.9)}</b> · hasta hoy 18:30`, btn('Pagar', { kind: 'text', go: 'M3.09' }))}
            ${cambios ? banner('info', `El precio de ${plural(cambios, 'artículo', 'artículos')} cambió desde que lo añadiste.`) : ''}</div>
          <p class="md-body-medium vx-muted vx-pad-h">${plural(c.lines.length, 'artículo', 'artículos')} en ${plural(c.grupos.length, 'tienda', 'tiendas')}</p>
          ${c.grupos.map((g, gi) => `<section class="vx-cartgroup" aria-label="${esc(g.t.nombre)}"><h2 class="md-title-medium">${esc(g.t.nombre)}</h2>
            <ul class="vx-list" role="list">${g.ls.map((l) => `<li class="vx-cartline${l.cambioPrecio ? ' vx-priced' : ''}" data-line="${l.key}">${thumb()}
              <div class="vx-cartline-main"><p class="md-body-large">${esc(l.p.corto || l.p.nombre)}</p><p class="md-body-medium vx-muted vx-tab-num">${money(l.precio)} c/u</p>
                ${l.cambioPrecio ? `<p class="vx-tag md-label-small">${icon('info', 14)}Cambió de precio</p>` : ''}
                <div class="vx-cartline-row">${stepper(l.key, l.qty, l.p.stock)}<b class="md-title-medium vx-tab-num">${money(l.precio * l.qty)}</b></div></div>
              <button type="button" class="md-iconbtn md-iconbtn--standard md-sl" data-rm="${l.key}" aria-label="Quitar del carrito: ${esc(l.p.corto || l.p.nombre)}">${icon('trash')}</button></li>`).join('')}</ul>
            <p class="md-body-small vx-muted">La tienda confirmó precio y existencias hace ${[4, 12, 8][gi % 3]} min</p>
            <p class="vx-sub-row md-body-large vx-tab-num"><span>Subtotal de la tienda</span><b>${money(g.subtotal)}</b></p></section>`).join('')}`;
      }
      el.querySelector('#cTotal').textContent = money(c.subtotal);
      el.querySelector('#cGo').disabled = !c.lines.length;
      if (lastTotal !== null && lastTotal !== c.subtotal) play(el.querySelector('#cTotal'), 'vx-tick'); // Patrón 12
      lastTotal = c.subtotal;
      if (first) { first = false; $$('.vx-priced', body).forEach((n) => play(n, 'vx-flash')); } // Patrón 13: solo al montar
      if (keep) body.querySelector(`[data-${keep[0]}="${keep[1]}"]`)?.focus();
    };
    el.addEventListener('click', (e) => {
      const inc = e.target.closest('[data-inc]'), dec = e.target.closest('[data-dec]'), rm = e.target.closest('[data-rm]');
      const find = (k) => state.cart.find((l) => lineKey(l) === k);
      if (inc) setQty(inc.dataset.inc, find(inc.dataset.inc).qty + 1);
      if (dec) setQty(dec.dataset.dec, find(dec.dataset.dec).qty - 1);
      if (rm) { const undo = removeLine(rm.dataset.rm); toast('Quitado del carrito', { action: 'Deshacer', onAction: undo }); } // Patrón 20
    });
    paint();
    return subscribe(paint);
  },
});

// ── M3.02 · Pagar · Entrega ─────────────────────────────────────────────────
register('M3.02', {
  render() {
    const el = h(page(topbar('Pagar'), `${checkoutSteps(1)}<div id="dirCard"></div>
      <p class="md-title-small vx-pad-h">Aquí te llegará el pedido</p>
      <p class="md-body-medium vx-muted vx-pad-h">La dirección también va en la factura, aunque retires en la tienda.</p>`,
      btn('Continuar', { kind: 'filled', block: true, go: 'M3.04' })));
    const paint = () => {
      const d = dirActual();
      el.querySelector('#dirCard').innerHTML = `<section class="vx-card vx-addr"><div class="vx-map" aria-hidden="true">${icon('map', 40)}</div>
        <div class="vx-addr-body"><p class="md-title-medium">${esc(d.nombre)}${d.predeterminada ? ' <span class="vx-tag md-label-small">Predeterminada</span>' : ''}</p>
        <p class="md-body-large">${esc(d.linea)}</p>${d.ref ? `<p class="md-body-medium vx-muted">${esc(d.ref)}</p>` : ''}
        <p class="md-body-medium vx-muted vx-tab-num">${esc(d.ciudad)} · CP ${d.cp}</p><p class="md-body-medium vx-muted vx-tab-num">${d.tel}</p>
        <div class="vx-row-end">${btn('Editar', { kind: 'text', go: 'M6.14' })}${btn('Cambiar', { kind: 'text', go: 'M3.03' })}</div></div></section>`;
    };
    paint(); el.__un = subscribe(paint); return el;
  },
  mount(el) { fillSteps(el); return el.__un; },
});

// ── M3.03 · Elegir o crear dirección (pantalla de flujo) ────────────────────
register('M3.03', {
  render() {
    const sel = state.flow.direccion;
    const el = h(`<div class="vx-page"><header class="vx-sheet-head vx-flowhead"><h2 id="sheet-title" class="md-title-large md-sheet-title" tabindex="-1">¿Dónde lo recibes?</h2>${iconBtn('close', 'Cerrar', 'data-close')}</header>
      <div class="vx-body vx-pad-h"><div role="radiogroup" aria-label="Dirección de entrega" class="vx-options">${state.dirs.map((d) => radioOpt({
        name: 'dir', value: d.id, checked: sel === d.id, title: `${esc(d.nombre)}${d.predeterminada ? ' <span class="vx-tag md-label-small">Predeterminada</span>' : ''}`,
        text: `${esc(d.linea)}<br>${esc(d.ciudad)} ${d.cp}<br><span class="vx-tab-num">${d.tel.replace('-', ' ')}</span>`,
        extra: d.sinMapa ? `<span class="vx-tag md-label-small">${icon('warning', 14)}Sin punto en el mapa</span>` : '',
        end: iconBtn('edit', `Editar ${d.nombre}`, 'data-go="M6.14"') })).join('')}</div>
        ${btn(`${icon('add', 20)}Añadir otra dirección`, { kind: 'outlined', block: true, go: 'M6.14' })}</div>
      <footer class="vx-actionbar">${btn('Usar esta dirección', { kind: 'filled', block: true, id: 'dUsar' })}</footer></div>`);
    wireControls(el); closeOnGo(el);
    el.querySelector('#dUsar').addEventListener('click', () => { set({ flow: { ...state.flow, direccion: el.querySelector('input[name=dir]:checked').value } }); closeOverlay(); });
    return el;
  },
});

// ── M3.04 · Pagar · Envío ───────────────────────────────────────────────────
register('M3.04', {
  render() {
    const el = h(page(topbar('Pagar'), `${checkoutSteps(2)}<div id="envBody"></div>`,
      `<div class="vx-actionsum"><span class="md-body-small vx-muted">Subtotal y envío</span><span class="md-title-large vx-tab-num" id="eTotal"></span></div>${btn('Pagar', { kind: 'filled', go: 'M3.06' })}`));
    const paint = () => {
      const c = compraActual(), d = dirActual();
      el.querySelector('#envBody').innerHTML = `<div class="vx-pad-h"><p class="md-title-small">${esc(d.nombre)}</p><p class="md-body-medium vx-muted">${esc(dirCorta(d))} ${btn('Cambiar', { kind: 'text', go: 'M3.03' })}</p>
        <p class="md-body-medium">Cada tienda despacha su paquete por separado.</p></div>
        ${c.grupos.map((g) => `<section class="vx-cartgroup" aria-label="${esc(g.t.nombre)}"><h2 class="md-title-medium">${esc(g.t.nombre)} <span class="md-body-medium vx-muted">· ${plural(g.units, 'unidad', 'unidades')}</span></h2>
          <ul class="vx-list" role="list">${g.ls.map((l) => `<li class="vx-envline">${thumb(20)}<span class="md-body-medium">${esc(l.p.corto || l.p.nombre)}<br><span class="vx-muted vx-tab-num">${l.qty} × ${money(l.precio)}</span></span><b class="md-body-large vx-tab-num">${money(l.precio * l.qty)}</b></li>`).join('')}</ul>
          ${g.env.gratis ? `<p class="md-body-medium vx-env">${icon('check', 18)} Esta tienda no te cobra el envío · ${g.env.dias}</p>` : `
            <p class="md-body-medium vx-env vx-tab-num">${icon('truck', 18)} ${g.retiro ? 'Retiro en la tienda · $ 0,00' : `Envío ${money(g.env.costo)} · ${g.env.km} km · ${g.env.kg} kg · ${g.env.dias} · Aproximado`}</p>
            <div class="vx-row-end">${btn('Ver ruta', { kind: 'text', go: 'M3.05' })}</div>
            ${switchHtml('ret_' + g.t.id, 'Prefiero retirarlo en la tienda', g.retiro)}`}</section>`).join('')}`;
      el.querySelector('#eTotal').textContent = money(c.subtotal + c.envio);
    };
    el.addEventListener('change', (e) => { const t = e.target.closest('input[role=switch]'); if (!t) return;
      state.flow.retiro[t.id.slice(4)] = t.checked; set({ flow: state.flow }); play(el.querySelector('#eTotal'), 'vx-tick'); });
    paint(); el.__un = subscribe(paint); return el;
  },
  mount(el) { fillSteps(el); return el.__un; },
});

// ── M3.05 · Ruta del envío ──────────────────────────────────────────────────
register('M3.05', {
  render() {
    const R = { km: 168, recta: 142, base: 8, porKm: 0.05, ivaPct: 16 };
    const kmImp = round2(R.porKm * R.km), imp = pct(R.base + kmImp, R.ivaPct);
    const row = (k, v) => `<div class="vx-kv"><dt class="md-body-medium vx-muted">${k}</dt><dd class="md-body-large vx-tab-num">${v}</dd></div>`;
    return h(`<div>${topbar('Ruta desde Frío Total')}
      <div class="vx-map vx-map--big" aria-hidden="true">${icon('map', 56)}</div>
      <div class="vx-pad-h vx-routestats vx-tab-num"><p><b class="md-title-large">${R.km} km</b><br><span class="md-body-small vx-muted">por carretera</span></p><p><b class="md-title-large">${R.recta} km</b><br><span class="md-body-small vx-muted">en línea recta</span></p><p><b class="md-title-large">2 h 10 min</b><br><span class="md-body-small vx-muted">estimados</span></p></div>
      <h2 class="md-title-medium vx-pad-h">Cómo se calculó</h2>
      <dl class="vx-pad-h vx-dl">${row('Tramo', 'Caracas → Valencia')}${row('Vehículo', 'Camioneta de carga')}${row('Bultos · peso', '2 · 38 kg')}${row('Importe base', money(R.base))}${row('Por kilómetro', `${money(R.porKm)} × ${R.km} = ${money(kmImp)}`)}${row('Impuesto', money(imp))}</dl>
      <p class="md-body-small vx-muted vx-pad-h">El mapa es orientativo. El importe del envío es el que ves en el paso anterior.</p></div>`);
  },
});

// ── M3.06 · Pagar · Forma de pago ───────────────────────────────────────────
register('M3.06', {
  render() {
    const m = state.flow.metodo;
    const el = h(page(topbar('Pagar'), `${checkoutSteps(3)}
      <p class="md-body-large vx-pad-h">Un solo pago para toda la compra, aunque sean varias tiendas.</p>
      <div class="vx-options vx-pad-h" role="radiogroup" aria-label="Forma de pago">
        ${radioOpt({ name: 'metodo', value: 'debito', checked: m === 'debito', title: 'Débito bancario', text: 'Pagas con la clave que te envía tu banco.', extra: `<span class="md-label-medium vx-tab-num">USD · Impuesto del pago: ${IMPUESTO.debito} %</span>` })}
        ${radioOpt({ name: 'metodo', value: 'binance', checked: m === 'binance', title: 'Binance Pay', text: 'Pagas desde tu cuenta de Binance.', extra: '<span class="md-label-medium">USDT</span>' })}
        ${radioOpt({ name: 'metodo', value: 'transferencia', checked: m === 'transferencia', title: 'Transferencia a VexBiz', text: 'Transfieres y reportas el pago.', extra: '<span class="md-label-medium">USD · Sin impuesto</span>' })}</div>
      <section id="bancos" class="vx-pad-h" ${m === 'debito' ? '' : 'hidden'}><h2 class="md-title-medium">Tus datos para el débito</h2>
        <div class="vx-options" role="radiogroup" aria-label="Cuenta para el débito">${compra.bancos.map((b) => radioOpt({ name: 'banco', value: b.id, checked: state.flow.banco === b.id,
          title: `${esc(b.nombre)}${b.tipo ? ' · ' + esc(b.tipo) : ''}`, text: `<span class="vx-tab-num">${esc(b.doc)} · ${esc(b.tel)}</span>` })).join('')}</div>
        <p class="md-body-medium vx-muted">Tu banco te enviará una clave de 8 dígitos por SMS al pagar.</p></section>
      <div class="vx-pad-h"><form class="vx-form" novalidate onsubmit="return false">${field({ id: 'cupon', label: 'Cupón (opcional)', value: state.flow.cupon ?? 'VEXBIZ10' })}</form></div>`,
      `<div class="vx-actionsum"><span class="md-body-small vx-muted">Total a pagar</span><span class="md-title-large vx-tab-num" id="pTotal"></span></div>${btn('Pagar', { kind: 'filled', go: 'O.RES' })}`));
    wireControls(el);
    const paint = () => { const c = compraActual(); el.querySelector('#pTotal').textContent = money(c.total); };
    el.addEventListener('change', (e) => {
      if (e.target.name === 'metodo') { state.flow.metodo = e.target.value; el.querySelector('#bancos').hidden = e.target.value !== 'debito'; paint(); play(el.querySelector('#pTotal'), 'vx-tick'); }
      if (e.target.name === 'banco') state.flow.banco = e.target.value;
    });
    el.querySelector('#cupon').addEventListener('input', (e) => { state.flow.cupon = e.target.value; });
    paint(); return el;
  },
  mount(el) { fillSteps(el); },
});

// ── M3.07 · Resumen de la compra (hoja) ─────────────────────────────────────
register('O.RES', {
  render() {
    const c = compraActual(), d = dirActual(), b = compra.bancos.find((x) => x.id === state.flow.banco);
    const row = (k, v, strong = false) => `<div class="vx-sumrow${strong ? ' is-strong' : ''}"><dt class="md-body-large">${k}</dt><dd class="md-body-large vx-tab-num">${v}</dd></div>`;
    const el = h(`<div><div class="vx-sheet-head"><h2 id="sheet-title" class="md-title-large md-sheet-title" tabindex="-1">Resumen de la compra</h2>${iconBtn('close', 'Cerrar', 'data-close')}</div>
      <p class="md-body-medium vx-muted vx-pad-h">${plural(c.lines.length, 'artículo', 'artículos')}</p>
      <ul class="vx-list vx-pad-h" role="list"><li class="md-body-large">${esc(d.nombre)}<br><span class="md-body-medium vx-muted">${esc(dirCorta(d))}</span></li>
        <li class="md-body-large">${METODO[state.flow.metodo]}${state.flow.metodo === 'debito' && b ? `<br><span class="md-body-medium vx-muted">${esc(b.nombre)}${b.tipo ? ' · ' + esc(b.tipo) : ''}</span>` : ''}</li></ul>
      <dl class="vx-pad-h vx-dl">${row('Subtotal', money(c.subtotal))}
        ${c.grupos.map((g) => row(`Envío · ${esc(g.t.nombre)}`, g.retiro ? 'Retiro en tienda' : g.env.gratis ? 'No te lo cobran' : money(g.envio))).join('')}
        ${c.impPct ? row(`Impuesto del pago (${c.impPct} %)`, money(c.impuesto)) : ''}
        ${state.flow.cupon ? row(`Cupón: ${esc(state.flow.cupon)}`, '<span class="md-body-medium vx-muted">se aplica al confirmar</span>') : ''}
        ${row('Total a pagar', money(c.total), true)}</dl>
      <p class="md-body-small vx-muted vx-pad-h vx-tab-num">Precios y envío con impuestos incluidos · ≈ ${bs(c.total)} referencial</p>
      <p class="md-body-medium vx-pad-h">Se crean ${plural(c.grupos.length, 'pedido', 'pedidos')}, uno por tienda, con un solo pago.</p>
      <div class="md-sheet-foot">${btn('Confirmar y pagar', { kind: 'filled', go: 'M3.08', kindNav: 'push' })}</div></div>`);
    closeOnGo(el); return el;
  },
});

// ── M3.08 · Sala de espera ──────────────────────────────────────────────────
// Datos de la sala tal como están en Figma (la compra de la sala es la canónica, no el carrito).
register('M3.08', {
  render() {
    const prod = (n, q, p, s, st) => `<li class="vx-wait-line" data-st="${st}">${thumb(20)}<div><p class="md-body-large">${n}</p><p class="md-body-medium vx-muted vx-tab-num">${q} × ${money(p)} · ${s}</p></div><span class="vx-status" data-status></span></li>`;
    return h(`<div class="vx-wait"><header class="vx-backbar">${iconBtn('close', 'Salir de la sala de espera', 'data-go="M2.01" data-kind="mode"')}</header>
      <section class="vx-pad-h"><h1 class="md-headline-small" tabindex="-1">Confirmando tu compra</h1>
        <p class="vx-timer md-display-small vx-tab-num"><span class="md-title-large">Queda </span><span id="wLeft">3:42</span></p>
        <span class="vx-bar-track" aria-hidden="true"><span id="wBar" class="vx-bar-fill"></span></span>
        <p class="md-body-large" id="wWho">2 tiendas tienen que contestar</p>
        <p class="vx-urgent" id="wUrg" hidden>${icon('warning', 18)} Queda menos de un minuto</p><span class="md-sr-only" id="wLive" aria-live="polite"></span></section>
      <section class="vx-card vx-decide vx-pad-h" id="wDecide"><h2 class="md-title-medium">Hay algo que decidir</h2>
        <p class="md-body-large">Tarjeta electrónica condensadora split 12K</p><p class="md-body-medium vx-muted vx-tab-num">Pediste 2 × ${money(64)} a ClimaRepuestos</p>
        <p class="md-body-medium vx-tab-num">La tienda propone: 1 unidad a ${money(64)}</p><p class="md-body-medium vx-tab-num"><b>Pagarías ${money(64)} menos</b></p>
        <p class="md-body-medium vx-tab-num">Te quedan <b id="wLeft2">3:42</b></p><p class="md-body-small vx-muted">Si no contestas a tiempo, esa línea sale de la compra.</p>
        <div class="vx-stack">${btn('Aceptar la propuesta', { kind: 'filled', block: true, attrs: 'data-dec-ok' })}${btn('Quitar esa línea', { kind: 'outlined', block: true, attrs: 'data-dec-no' })}</div></section>
      <p class="md-body-medium vx-pad-h" id="wDone" hidden></p>
      <ul class="vx-list vx-pad-h" role="list">${prod('Aire split inverter 12.000 BTU', 1, 389, 'Frío Total C.A.', 'ok')}${prod('Capacitor de marcha 35+5 µF', 2, 9.5, 'Frío Total C.A.', 'wait')}${prod('Motor ventilador 18 W', 1, 32, 'Refrigeración El Sol', 'fail')}</ul>
      <p class="md-body-small vx-muted vx-pad-h" id="wAgo">Actualizado hace 8 s</p><p class="md-body-medium vx-pad-h">Te avisamos aquí en cuanto contesten. Puedes salir y volver.</p>
      <div class="vx-pad">${btn('Seguir sin esperar', { kind: 'text', block: true, go: 'M3.09', kindNav: 'push' })}</div></div>`);
  },
  mount(el) {
    const ST = { ok: ['check', 'Confirmada'], wait: ['clock', 'Esperando a que la tienda confirme'], fail: ['close', 'No se pudo conseguir'] };
    const paintSt = () => $$('[data-st]', el).forEach((li) => { const [ic, t] = ST[li.dataset.st]; li.querySelector('[data-status]').innerHTML = `${icon(ic, 16)}<span class="md-label-medium">${t}</span>`; });
    paintSt();
    let ago = 8, decided = false, ended = false, timers = [];
    const finish = () => { if (ended) return; ended = true; go('M3.09', { kind: 'mode' }); }; // Figma: fundido 350 (automática)
    const check = () => {
      if (decided && !$$('[data-st="wait"]', el).length) { el.querySelector('#wDone').hidden = false; el.querySelector('#wDone').textContent = 'Todas las tiendas contestaron. Pasamos al pago.'; timers.push(setTimeout(finish, 1400)); }
    };
    timers.push(setTimeout(() => { const li = el.querySelector('[data-st="wait"]'); if (li) { li.dataset.st = 'ok'; paintSt(); el.querySelector('#wWho').textContent = '1 tienda tiene que contestar'; ago = 0; check(); } }, 6000));
    const ageId = setInterval(() => { ago += 1; el.querySelector('#wAgo').textContent = `Actualizado hace ${ago} s`; }, 1000);
    el.querySelector('#wDecide').addEventListener('click', (e) => {
      const ok = e.target.closest('[data-dec-ok]'), no = e.target.closest('[data-dec-no]'); if (!ok && !no) return;
      decided = true; el.querySelector('#wDecide').hidden = true;
      toast(ok ? 'Aceptaste: 1 unidad a ' + money(64) : 'Quitaste esa línea de la compra');
      el.querySelector('#wWho').textContent = '1 tienda tiene que contestar'; check();
    });
    let said = false;
    const stop = countdown({ textEl: el.querySelector('#wLeft'), barEl: el.querySelector('#wBar'), ms: (3 * 60 + 42) * 1000, // Patrón 15: lineal
      onTick(left) { el.querySelector('#wLeft2').textContent = el.querySelector('#wLeft').textContent;
        if (left < 60000 && !said) { said = true; el.querySelector('#wUrg').hidden = false; el.querySelector('.vx-timer').classList.add('vx-is-urgent'); el.querySelector('#wLive').textContent = 'Queda menos de un minuto para contestar.'; } },
      onEnd: finish });
    return () => { stop(); clearInterval(ageId); timers.forEach(clearTimeout); ended = true; };
  },
});

// ── M3.09 · Pago de la compra ───────────────────────────────────────────────
register('M3.09', {
  render() {
    const t = compraPasarela(), met = state.flow.metodoPasarela || 'debito';
    const el = h(page(`<header class="vx-backbar">${iconBtn('close', 'Cerrar', 'data-go="M2.01" data-kind="mode"')}</header>`, `
      <h1 class="md-headline-small vx-pad-h" tabindex="-1">Finalizar pago</h1>
      <p class="vx-pad-h"><span class="vx-tag md-label-medium">${icon('clock', 14)}Falta pagar</span></p>
      <div class="vx-pad-h vx-stack">${banner('warning', 'Paga antes de las 18:00. Después se liberan las existencias.')}
        ${state.flow.rechazado ? banner('error', 'Tu banco rechazó el último intento: «Fondos insuficientes».', btn('Ver detalle', { kind: 'text', attrs: 'data-toast="Tu banco informó fondos insuficientes en el intento anterior"' })) : ''}</div>
      <div class="vx-options vx-pad-h" role="radiogroup" aria-label="Forma de pago">
        ${radioOpt({ name: 'mp', value: 'debito', checked: met === 'debito', title: 'Débito bancario', text: 'Clave de 8 dígitos por SMS de tu banco.' })}
        ${radioOpt({ name: 'mp', value: 'binance', checked: met === 'binance', title: 'Binance Pay', text: 'Paga con la app de Binance.' })}</div>
      <section class="vx-pad-h"><h2 class="md-title-medium">Tu compra · ${plural(compra.pedidos.length, 'pedido', 'pedidos')}</h2>
        <ul class="vx-list" role="list">${compra.pedidos.map((p) => `<li class="vx-sumrow"><span class="md-body-large">${esc(p.tienda)}<br><span class="md-body-medium vx-muted vx-tab-num">${p.id} · ${plural(p.articulos, 'artículo', 'artículos')}</span></span><b class="md-body-large vx-tab-num">${money(p.total)}</b></li>`).join('')}</ul>
        <dl class="vx-dl"><div class="vx-sumrow"><dt class="md-body-large">Pedidos</dt><dd class="md-body-large vx-tab-num">${money(t.sub)}</dd></div>
          <div class="vx-sumrow"><dt class="md-body-large">Impuesto del pago (${compra.pasarela.impuestoPct} %)</dt><dd class="md-body-large vx-tab-num">${money(t.imp)}</dd></div>
          <div class="vx-sumrow is-strong"><dt class="md-body-large">Total</dt><dd class="md-body-large vx-tab-num">${money(t.total)}</dd></div></dl></section>
      <div class="vx-pad-h">${btn('Pagar con transferencia', { kind: 'text', go: 'M3.12' })}</div>`,
      `<div class="vx-actionsum"><span class="md-body-small vx-muted">Total</span><span class="md-title-large vx-tab-num">${money(t.total)}</span></div>${btn('Pagar', { kind: 'filled', id: 'mpGo' })}`));
    wireControls(el);
    el.querySelector('#mpGo').addEventListener('click', () => { const m = el.querySelector('input[name=mp]:checked').value; state.flow.metodoPasarela = m; go('M3.10', { kind: 'push', params: { metodo: m } }); });
    return el;
  },
});

// ── M3.10 · Pagar con la pasarela ───────────────────────────────────────────
register('M3.10', {
  render(ctx) {
    const t = compraPasarela(), binance = ctx.params.metodo === 'binance';
    const head = `<div class="vx-pad-h vx-payhead"><p class="md-display-small vx-tab-num">${money(t.total)}</p>
      <p class="md-body-medium vx-muted vx-tab-num">${binance ? `${num(t.total)} USDT` : bsRef(t.total, compra.pasarela.tasaDia, { decimals: 0 })} · ${plural(compra.pedidos.length, 'pedido', 'pedidos')}</p></div>`;
    const body = binance ? `${head}<div class="vx-pad-h"><div class="vx-qr" aria-hidden="true">${icon('map', 56)}</div>
        <p class="md-body-large">Abre Binance, entra a Binance Pay y paga <b class="vx-tab-num">${num(t.total)} USDT</b>.</p>
        <p class="md-body-medium vx-muted vx-tab-num">Intento #${compra.pasarela.intento} en Binance Pay</p></div>`
      : `${head}<div class="vx-pad-h"><div class="md-seg" role="tablist" aria-label="Pasos de la pasarela"><button type="button" role="tab" class="md-seg-item md-seg-item--on md-sl md-label-large" data-p="1" aria-selected="true">Paso 1 · Datos</button><button type="button" role="tab" class="md-seg-item md-sl md-label-large" data-p="2" aria-selected="false">Paso 2 · Clave</button></div>
        <section id="p1"><dl class="vx-dl"><div class="vx-kv"><dt class="md-body-medium vx-muted">Banco</dt><dd class="md-body-large">Banesco · Personal</dd></div><div class="vx-kv"><dt class="md-body-medium vx-muted">Teléfono</dt><dd class="md-body-large vx-tab-num">0414 ···1234</dd></div></dl>${btn('Continuar', { kind: 'filled', block: true, attrs: 'data-p="2"' })}</section>
        <section id="p2" hidden><p class="md-body-large">Tu banco envió una clave de 8 dígitos al <span class="vx-tab-num">0414 ···1234</span></p>${otpHtml('clave', 8, '381072', 'Clave de 8 dígitos')}
          <div class="vx-stack">${btn('Pagar ' + money(t.total), { kind: 'filled', block: true, id: 'payGo' })}${btn('Reenviar la clave', { kind: 'text', block: true, attrs: 'data-toast="Te enviamos otra clave por SMS"' })}</div></section>
        <p class="md-body-small vx-muted vx-tab-num">Intento #${compra.pasarela.intento} en SPIDI · Pago procesado por SPIDI</p></div>`;
    const el = h(`<div class="vx-page">${topbar(binance ? `Pagar con Binance Pay` : `Pagar ${money(t.total)}`)}<div class="vx-body">${body}</div>
      ${binance ? `<footer class="vx-actionbar">${btn('Ya pagué en Binance', { kind: 'filled', block: true, id: 'payGo' })}</footer>` : ''}</div>`);
    el.__binance = binance; return el;
  },
  mount(el) {
    const binance = el.__binance, goPay = el.querySelector('#payGo');
    const step = (n) => { if (binance) return; $$('[data-p].md-seg-item', el).forEach((b) => { const on = b.dataset.p === String(n); b.classList.toggle('md-seg-item--on', on); b.setAttribute('aria-selected', on); });
      el.querySelector('#p1').hidden = n !== 1; el.querySelector('#p2').hidden = n !== 2; if (n === 2) ctl.focusFirstEmpty(); };
    let ctl = { focusFirstEmpty() {}, value: () => '12345678' };
    if (!binance) { ctl = wireOtp(el, 'clave', (v) => { goPay.disabled = v.length < 8; }); el.addEventListener('click', (e) => { const b = e.target.closest('[data-p]'); if (b) step(Number(b.dataset.p)); }); }
    goPay.addEventListener('click', () => {
      goPay.classList.add('md-btn--busy'); goPay.disabled = true; goPay.setAttribute('aria-busy', 'true');
      setTimeout(() => go('M3.11', { kind: 'mode', params: { estado: state.flow.demoPago, metodo: binance ? 'binance' : 'debito' } }), 900); // Figma: fundido 350
    });
  },
});

// ── M3.11 · Resultado del pago ──────────────────────────────────────────────
register('M3.11', {
  render(ctx) {
    const estado = ctx.params.estado || 'aprobado', metodo = ctx.params.metodo || 'debito', t = compraPasarela();
    const row = (k, v) => `<div class="vx-kv"><dt class="md-body-medium vx-muted">${k}</dt><dd class="md-body-large vx-tab-num">${v}</dd></div>`;
    const metTxt = { debito: 'Débito · 0414 ···1234', binance: 'Binance Pay · USDT', transferencia: 'Transferencia bancaria' }[metodo];
    const ico = {
      aprobado: `<svg class="vx-ring vx-resico vx-resico--ok" viewBox="0 0 72 72" width="72" height="72" aria-hidden="true"><circle cx="36" cy="36" r="32" fill="none" stroke="currentColor" stroke-width="4"/><path class="vx-check" pathLength="1" d="M22 37l10 10 18-20" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
      rechazado: `<span class="vx-resico vx-resico--bad" id="resIco">${icon('error', 56)}</span>`,
      pendiente: `<span class="vx-resico vx-resico--wait">${icon('clock', 56)}</span>`, revision: `<span class="vx-resico vx-resico--wait">${icon('clock', 56)}</span>` }[estado];
    const title = { aprobado: 'Pago aprobado', rechazado: 'Pago rechazado', pendiente: 'Pago pendiente', revision: 'Transferencia reportada' }[estado];
    const pedidos = `<h2 class="md-title-medium">Pedidos</h2><ul class="vx-list" role="list">${compra.pedidos.map((p) => `<li class="vx-sumrow"><span class="md-body-large">${p.id}<br><span class="md-body-medium vx-muted">${esc(p.tienda)}</span></span></li>`).join('')}</ul>`;
    const acts = { aprobado: `${btn('Ver mis pedidos', { kind: 'filled', block: true, go: 'M6.03', kindNav: 'swap' })}${btn('Seguir comprando', { kind: 'outlined', block: true, go: 'M2.01', kindNav: 'swap' })}<div class="vx-twin">${btn('Descargar comprobante', { kind: 'text', attrs: 'data-toast="Comprobante guardado en tu teléfono"' })}${btn('Compartir', { kind: 'text', attrs: 'data-toast="Enlace al comprobante copiado"' })}</div>`,
      rechazado: `${btn('Reintentar el pago', { kind: 'filled', block: true, go: 'M3.09', kindNav: 'mode' })}${btn('Cambiar forma de pago', { kind: 'outlined', block: true, go: 'M3.09', kindNav: 'mode' })}${btn('Ver mis pedidos', { kind: 'text', block: true, go: 'M6.03', kindNav: 'swap' })}`,
      pendiente: `${btn('Ver mis pedidos', { kind: 'filled', block: true, go: 'M6.03', kindNav: 'swap' })}${btn('Ir al inicio', { kind: 'text', block: true, go: 'M2.01', kindNav: 'swap' })}`,
      revision: `${btn('Ver mis pedidos', { kind: 'filled', block: true, go: 'M6.03', kindNav: 'swap' })}${btn('Ir al inicio', { kind: 'text', block: true, go: 'M2.01', kindNav: 'swap' })}` }[estado];
    const el = h(`<div class="vx-page"><div class="vx-body vx-result"><div class="vx-resbox">${ico}<h1 class="md-headline-small" tabindex="-1">${title}</h1>
      ${estado === 'rechazado' ? `<p class="md-body-large vx-reason">${icon('error', 18)} Tu banco rechazó el pago: «Fondos insuficientes»</p>` : ''}
      ${estado === 'pendiente' ? `<div class="md-progress md-progress--indet vx-resprog" role="progressbar" aria-label="Esperando a tu banco" style="--_pct:30%"><span class="md-progress-track"></span><span class="md-progress-active"></span></div><p class="md-body-large">Estamos esperando la confirmación de tu banco. Te avisamos aquí.</p>` : ''}
      ${estado === 'revision' ? '<p class="md-body-large">Reportar no es pagar: la compra queda en revisión hasta que se confirme el dinero.</p>' : ''}</div>
      <dl class="vx-dl vx-pad-h">${row('Importe', `${money(t.total)}<br><span class="md-body-small vx-muted">${bsRef(t.total, compra.pasarela.tasaDia, { decimals: 0 })}</span>`)}${row('Método', metTxt)}${metodo !== 'transferencia' ? row('Transacción', compra.pasarela.intento) : ''}</dl>
      <div class="vx-pad-h">${pedidos}</div><div class="vx-pad vx-stack">${acts}</div></div></div>`);
    return el;
  },
  mount(el, ctx) {
    const estado = ctx.params.estado || 'aprobado';
    if (estado === 'rechazado') { state.flow.rechazado = true; play(el.querySelector('#resIco'), 'vx-shake'); }
    if (estado === 'aprobado') { // el pago se registra una sola vez: pedidos creados y carrito vaciado
      state.flow.rechazado = false;
      if (!state.orders.some((o) => o.id === compra.pedidos[0].id)) { state.orders.unshift(...compra.pedidos.map((p) => ({ ...p, estado: 'Pagado', fecha: '16/10' }))); state.cart = []; set({ orders: state.orders }); }
    }
    el.querySelector('h1').focus({ preventScroll: true });
  },
});

// ── M3.12 · Reportar una transferencia ──────────────────────────────────────
register('M3.12', {
  render() {
    const sel = state.flow.transfPedido || compra.pedidos[0].id;
    const copy = (txt) => iconBtn('copy', `Copiar ${txt}`, `data-copy="${esc(txt)}"`);
    const dato = (k, v) => `<div class="vx-kv vx-kv--copy"><dt class="md-body-medium vx-muted">${k}</dt><dd class="md-body-large vx-tab-num">${v}</dd>${copy(v)}</div>`;
    const el = h(page(topbar('Reportar una transferencia'), `
      <section class="vx-pad-h"><h2 class="md-title-medium">A quién se paga</h2>
        <div class="vx-options" role="radiogroup" aria-label="Pedido a pagar">${compra.pedidos.map((p) => radioOpt({ name: 'ped', value: p.id, checked: sel === p.id, title: esc(p.tienda), text: `<span class="vx-tab-num">Pedido ${p.id} · ${money(p.total)}</span>` })).join('')}</div>
        <dl class="vx-dl" id="tDatos"></dl></section>
      <section class="vx-pad-h"><h2 class="md-title-medium">Ya transferí</h2>
        <form class="vx-form" novalidate onsubmit="return false">${field({ id: 'tRef', label: 'Número de referencia del banco', inputmode: 'numeric' })}${field({ id: 'tMonto', label: 'Monto transferido (USD)', inputmode: 'decimal' })}</form>
        <div class="vx-options" role="radiogroup" aria-label="Tipo de transferencia">${radioOpt({ name: 'tipo', value: 'banco', checked: true, title: 'Transferencia bancaria' })}${radioOpt({ name: 'tipo', value: 'movil', title: 'Pago móvil' })}</div>
        <p class="md-title-small">Foto del comprobante</p>
        <div class="vx-stack">${btn(`${icon('upload', 20)}Subir foto`, { kind: 'tonal', block: true, id: 'tFoto' })}<p class="md-body-medium vx-muted" id="tFotoOk" role="status"></p></div>
        <p class="md-body-medium vx-muted">Reportar no es pagar: la compra queda en revisión hasta que se confirme el dinero.</p></section>`,
      btn('Reportar la transferencia', { kind: 'filled', block: true, id: 'tGo' })));
    wireControls(el);
    const paint = () => { const p = compra.pedidos.find((x) => x.id === el.querySelector('input[name=ped]:checked').value);
      el.querySelector('#tDatos').innerHTML = `${dato('Banco', 'Banco de Venezuela')}${dato('Cuenta', '0102 0123 4500 0123 4567')}${dato('Titular', 'Frío Total Servicios C.A.')}${dato('Documento', 'J-41234567-8')}
        ${dato('Monto', money(p.total))}<p class="md-body-small vx-muted vx-tab-num vx-pad-h0">${bsRef(p.total, compra.pasarela.tasaDia, { decimals: 0 }).replace(' · tasa del ' + compra.pasarela.tasaDia, '')}</p>${dato('Referencia', p.id.replace('#', ''))}`; };
    el.addEventListener('change', (e) => { if (e.target.name === 'ped') { state.flow.transfPedido = e.target.value; paint(); } });
    el.addEventListener('click', async (e) => { const c = e.target.closest('[data-copy]'); if (!c) return;
      try { await navigator.clipboard.writeText(c.dataset.copy); toast('Copiado'); } catch { toast('Selecciona el dato para copiarlo'); } });
    let foto = false;
    el.querySelector('#tFoto').addEventListener('click', () => { foto = true; el.querySelector('#tFotoOk').textContent = 'comprobante.jpg · listo para enviar'; });
    el.querySelector('#tGo').addEventListener('click', () => {
      fieldError(el, 'tRef', !el.querySelector('#tRef').value.trim() ? 'Escribe la referencia' : '');
      fieldError(el, 'tMonto', !el.querySelector('#tMonto').value.trim() ? 'Escribe el monto' : '');
      if (!el.querySelector('#tRef').value.trim() || !el.querySelector('#tMonto').value.trim()) return;
      if (!foto) { toast('Añade la foto del comprobante'); return; }
      go('M3.11', { kind: 'mode', params: { estado: 'revision', metodo: 'transferencia' } }); // Figma: fundido 350
    });
    paint(); return el;
  },
});
