// 03 · Compra: carrito agrupado por tienda, pago en tres pasos (entrega, envío, pago) y sala de espera.
// El carrito es el mismo de la app (store.js): 4 artículos de 2 tiendas, subtotal $ 568,80.
import { state, set, cartLines, cartSubtotal, setQty, removeLine, subscribe } from '../../../assets/js/store.js';
import { direcciones, compra } from '../../../assets/js/data.js';
import { round2, clock } from '../../../assets/js/format.js';
import { producto, tienda, envios, RETIRO, espera, fichaTecnica } from '../dataweb.js';
import { icon, esc, money, bsRef, productCard, crumbs, badge, notice, qty, productArt, TASA_DIA, toast, reduce } from '../kit.js';

const groups = () => {
  const g = new Map();
  cartLines().forEach((l) => { if (!g.has(l.t.id)) g.set(l.t.id, { t: l.t, ls: [] }); g.get(l.t.id).ls.push(l); });
  return [...g.values()];
};
const units = () => cartLines().reduce((n, l) => n + l.qty, 0);
const flow = () => (state.flow.web ||= { dir: 'casa', retiro: {}, metodo: 'debito', banco: 'banesco', paso: 1, cupon: 'VEXBIZ10' });
const envioDe = (tid) => { const f = flow(); if (f.retiro[tid]) return RETIRO[tid] ?? 0; return (envios[tid] || { costo: 0 }).costo; };
const totales = () => {
  const sub = cartSubtotal(), env = round2(groups().reduce((s, g) => s + envioDe(g.t.id), 0));
  const imp = flow().metodo === 'debito' ? round2((sub + env) * compra.debitoPct / 100) : 0;
  return { sub, env, imp, total: round2(sub + env + imp) };
};

// ── 03.01 · Carrito ─────────────────────────────────────────────────────────
export const carritoPage = {
  code: '03.01', label: 'MARKETPLACE', title: 'Tu carrito',
  /** Barra fija de la web móvil: seguir con la compra sin bajar hasta el resumen. */
  barra() { return cartLines().length ? `<div class="w-mbar__in"><a class="w-btn w-btn--primary w-btn--block" href="#/pagar?paso=1">${icon('lock', 18)}Continuar compra · ${money(cartSubtotal())}</a></div>` : ''; },
  render() {
    return `<div class="w-wrap">${crumbs([['Inicio', '#/'], ['Carrito de compras']])}<div data-cart></div>
      <div class="w-sechead"><div><h2>Productos relacionados</h2></div></div>
      <div class="w-grid">${['kit3', 'sop12', 'brocas', 'gas'].map((id, i) => productCard(producto(id), { i })).join('')}</div></div>`;
  },
  mount(root) {
    const host = root.querySelector('[data-cart]');
    const paint = () => {
      const gs = groups();
      if (!gs.length) {
        host.innerHTML = `<h1 class="w-title">Tu Carrito de Compra</h1><div class="w-panel w-empty-card"><span class="w-pend__ico">${icon('cart', 30)}</span><h2>Tu carrito está vacío</h2><p>Explora el catálogo y añade lo que necesites. Cada tienda despacha su paquete.</p><a class="w-btn w-btn--primary" href="#/nichos">Explorar el catálogo</a></div>`;
        return;
      }
      const sub = cartSubtotal(), cambio = cartLines().filter((l) => l.cambioPrecio).length;
      host.innerHTML = `<div class="w-pagehead"><div><h1 class="w-title">Tu Carrito de Compra ${badge(`${units()} artículos · ${gs.length} tiendas`, 'brand')}</h1>
          <p class="w-lede w-lede--sm">Revisa cantidades y tiendas antes de pagar. Cada tienda despacha su paquete por separado.</p></div><a class="w-link" href="#/">${icon('back', 18)}Seguir comprando</a></div>
        ${notice('warn', 'clock', '<b>Tienes una compra sin pagar</b>Pedido #VX-20418 · $ 129,90 · aparta inventario hasta hoy a las 18:30.', '<a class="w-btn w-btn--primary" href="#/pagar?paso=3">Pagar o cancelar</a>')}
        ${cambio ? notice('info', 'info', `El precio de ${cambio} artículo se actualizó desde que lo añadiste. El total ya lo refleja.`) : ''}
        <div class="w-checkout"><div class="w-checkout__main">${gs.map((g) => `<section class="w-panel w-cartgroup" aria-label="${esc(g.t.nombre)}">
            <header><h2>${icon('store', 22)}${esc(g.t.nombre)} ${icon('check', 18)}</h2>${badge('Despacho directo de tienda', 'neutral', 'truck')}</header>
            ${g.ls.map((l) => `<article class="w-line" data-key="${l.key}"><span class="w-line__img">${productArt(l.p)}</span>
              <div class="w-line__main"><h3>${esc(l.p.nombre)}</h3><p class="w-muted w-sm">${money(l.precio)} c/u</p>
                ${l.cambioPrecio ? badge('Cambió de precio', 'bad', 'swap') : badge('Disponible para entrega', 'info', 'check')}
                <details class="w-line__spec"><summary>Ficha técnica y compatibilidad</summary>${specs(l.p)}</details></div>
              ${qty(l.key, l.qty, l.p.stock)}
              <div class="w-line__end"><b class="vx-tab-num">${money(l.precio * l.qty)}</b><button class="w-btn w-btn--text" type="button" data-rm="${l.key}">${icon('trash', 18)}Quitar</button></div></article>`).join('')}
            <footer><span>Subtotal de ${esc(g.t.nombre)}</span><b class="vx-tab-num">${money(round2(g.ls.reduce((s, l) => s + l.precio * l.qty, 0)))}</b></footer></section>`).join('')}</div>
          <aside class="w-panel w-summary" aria-label="Resumen del pedido"><h2>Resumen del pedido</h2><p>${badge(`${units()} ítems`, 'neutral')} ${badge('Artículos disponibles', 'info', 'check')}</p>
            <dl><div><dt>Subtotal productos</dt><dd>${money(sub)}</dd></div><div class="w-summary__bs"><dd>${bsRef(sub, TASA_DIA)}</dd></div>
              <div><dt>Garantía Escrow VEXBIZ</dt><dd>Incluida</dd></div><div><dt>Envío y flete</dt><dd>Calculado en el checkout</dd></div></dl>
            <p class="w-summary__total"><span>Total estimado</span><b class="vx-tab-num" data-total>${money(sub)}</b></p><p class="w-summary__bs">${bsRef(sub, TASA_DIA).split(' · ')[0]}</p>
            <a class="w-btn w-btn--primary w-btn--block w-btn--lg" href="#/pagar?paso=1">${icon('chevron', 18)}Continuar compra</a>
            <ul class="w-summary__trust"><li>${icon('shield', 20)}Custodia Escrow</li><li>${icon('truck', 20)}Despacho Oficial</li><li>${icon('receipt', 20)}Facturación Fiscal</li></ul></aside></div>`;
    };
    host.addEventListener('click', (e) => {
      const d = e.target.closest('[data-dec]'), i = e.target.closest('[data-inc]'), r = e.target.closest('[data-rm]');
      if (d || i) { const k = (d || i).dataset[d ? 'dec' : 'inc'], l = cartLines().find((x) => x.key === k); setQty(k, l.qty + (d ? -1 : 1)); }
      if (r) { const l = cartLines().find((x) => x.key === r.dataset.rm); removeLine(r.dataset.rm); toast(`Quitaste «${l.p.corto || l.p.nombre}» del carrito`); }
    });
    paint();
    return subscribe(paint);
  },
};
function specs(p) {
  const ft = fichaTecnica[p.id];
  const rows = ft ? ft.specs.slice(0, 4) : [['Marca', p.marca || 'Genérico'], ['Referencia', p.ref || p.id.toUpperCase()]];
  return `<table class="w-specs w-specs--sm"><tbody>${rows.map(([k, v]) => `<tr><th scope="row">${esc(k)}</th><td>${esc(v)}</td></tr>`).join('')}</tbody></table>`;
}

// ── 03.02 · Pagar (tres pasos en una página) ────────────────────────────────
const STEPS = ['Entrega', 'Envío', 'Pago'];
const stepper = (n) => `<ol class="w-steps" aria-label="Paso ${n} de 3">${STEPS.map((s, i) => `<li class="${i + 1 < n ? 'is-done' : i + 1 === n ? 'is-on' : ''}"${i + 1 === n ? ' aria-current="step"' : ''}><span>${i + 1 < n ? icon('check', 16) : i + 1}</span>${s}</li>`).join('')}</ol>`;
const closed = (n, title, sub, done) => `<section class="w-panel w-step w-step--closed"><span class="w-step__n${done ? ' is-done' : ''}">${done ? icon('check', 18) : n}</span>
  <div><h2>${title}</h2><p>${sub}</p></div>${done ? `<a class="w-btn w-btn--text" href="#/pagar?paso=${n}">Cambiar</a>` : icon('lock', 20)}</section>`;

export const pagarPage = {
  code: '03.02', label: 'PAGAR', title: 'Finalizar compra', sesion: true,
  render(q) {
    const n = Math.min(3, Math.max(1, Number(q.paso) || 1)), f = flow(), gs = groups(), d = direcciones.find((x) => x.id === f.dir) || direcciones[0];
    if (!gs.length) return `<div class="w-wrap"><div class="w-panel w-empty-card"><h1>No hay nada que pagar</h1><p>Tu carrito está vacío.</p><a class="w-btn w-btn--primary" href="#/nichos">Explorar el catálogo</a></div></div>`;
    const t = totales();
    const paso1 = `<section class="w-panel w-step"><h2 class="w-step__h"><span class="w-step__n is-on">1</span>Dirección de Entrega</h2><p class="w-muted">Selecciona a dónde deseas recibir tus paquetes:</p>
        <div class="w-addrs" role="radiogroup" aria-label="Dirección de entrega">${direcciones.slice(0, 2).map((a) => `<label class="w-addr${a.id === f.dir ? ' is-on' : ''}"><input type="radio" name="dir" value="${a.id}"${a.id === f.dir ? ' checked' : ''}>
          <span class="w-addr__t"><b>${esc(a.nombre)} ${a.predeterminada ? badge('Predeterminada', 'ink') : ''}</b><span>${esc(a.linea)}</span><small>${a.ref ? `${esc(a.ref)} · ` : ''}${esc(a.ciudad)} · CP ${a.cp} · Tel ${a.tel}</small></span>
          <span class="w-addr__acts"><button type="button" class="w-btn w-btn--text" data-toast="Editar direcciones llega con Mi cuenta (fase 2)">${icon('edit', 18)}Editar</button><button type="button" class="w-btn w-btn--text" data-toast="Quitar direcciones llega con Mi cuenta (fase 2)">${icon('trash', 18)}Quitar</button></span></label>`).join('')}</div>
        <p class="w-sm"><b>Dónde te llegará el pedido.</b> Si el marcador no está en tu puerta, muévelo.</p>
        <div class="w-map" role="img" aria-label="Mapa de ${esc(d.linea)}, ${esc(d.ciudad)}"><span class="w-map__pin">${icon('pin', 30)}</span></div>
        <button class="w-btn w-btn--ghost" type="button" data-toast="Añadir direcciones llega con Mi cuenta (fase 2)">${icon('add', 18)}Añadir otra dirección</button>
        <fieldset class="w-pick"><legend>¿Prefieres ir a buscarlo?</legend>${gs.map((g) => `<label class="w-check"><input type="checkbox" name="retiro" value="${g.t.id}"${f.retiro[g.t.id] ? ' checked' : ''}> Retirar en ${esc(g.t.nombre)} <small>${RETIRO[g.t.id] ? `Envío ${money(RETIRO[g.t.id])}` : 'Sin costo'}</small></label>`).join('')}</fieldset>
        <p class="w-step__go"><a class="w-btn w-btn--primary w-btn--lg" href="#/pagar?paso=2">${icon('chevron', 18)}Continuar al envío</a></p></section>`;
    const paso2 = `<section class="w-panel w-step"><h2 class="w-step__h"><span class="w-step__n is-on">2</span>Envío y Tiendas</h2>
        ${notice('info', 'store', 'Cada tienda despacha su paquete por separado.')}
        ${gs.map((g) => { const e = envios[g.t.id] || { costo: 0, nota: '' }, ret = f.retiro[g.t.id]; return `<article class="w-pack"><header><h3>${icon('store', 20)}${esc(g.t.nombre)} ${icon('check', 16)}</h3><span class="w-muted w-sm">${g.ls.reduce((s, l) => s + l.qty, 0)} unidades</span></header>
          ${g.ls.map((l) => `<div class="w-pack__line"><span class="w-pack__img">${productArt(l.p)}</span><span>${esc(l.p.nombre)}<small>${l.qty} × ${money(l.precio)}</small></span><b class="vx-tab-num">${money(l.precio * l.qty)}</b></div>`).join('')}
          <div class="w-pack__ship">${ret ? `${icon('store', 22)}<span><b>Retiras en la tienda</b><small>${RETIRO[g.t.id] ? `Costo de preparación ${money(RETIRO[g.t.id])}` : 'Sin costo'}</small></span>`
            : e.gratis ? `${icon('gift', 22)}<span class="w-pack__free"><b>Esta tienda no te cobra el envío</b><small>${esc(e.nota)}</small></span>`
            : `${icon('truck', 22)}<span><b>Envío ${money(e.costo)} · IVA incluido</b><small>${esc(e.nota)}</small></span>${e.aprox ? badge('Aproximado', 'neutral') : ''}`}</div>
          <div class="w-pack__foot"><label class="w-filters__switch"><input class="w-switch" type="checkbox" data-ret="${g.t.id}"${ret ? ' checked' : ''}> Prefiero retirarlo en la tienda</label>
            <button class="w-btn w-btn--text" type="button" data-toast="La ruta en el mapa se ve en la app publicada">${icon('map', 18)}Ver la ruta en el mapa</button></div></article>`; }).join('')}
        <p class="w-step__go"><a class="w-btn w-btn--primary w-btn--lg" href="#/pagar?paso=3">${icon('chevron', 18)}Continuar al pago</a></p></section>`;
    const metodos = [['debito', 'Débito bancario', 'Pagas con la clave que te envía tu banco por SMS.', `USD · Impuesto del pago: ${compra.debitoPct} %`, 'wallet'], ['binance', 'Binance Pay', 'Pagas desde tu cuenta de Binance.', 'USDT · Sin impuesto', 'swap'], ['transferencia', 'Transferencia a VexBiz', 'Transfieres y reportas el pago con la referencia.', 'USD · Sin impuesto', 'swap']];
    const paso3 = `<section class="w-panel w-step"><h2 class="w-step__h"><span class="w-step__n is-on">3</span>Pago</h2><p class="w-muted">Un solo pago para toda la compra, aunque sean varias tiendas.</p>
        <div class="w-methods" role="radiogroup" aria-label="Forma de pago">${metodos.map(([v, t, s, tag, ic]) => `<label class="w-addr w-method${f.metodo === v ? ' is-on' : ''}"><input type="radio" name="metodo" value="${v}"${f.metodo === v ? ' checked' : ''}>${icon(ic, 24)}
          <span class="w-addr__t"><b>${t}</b><small>${s}</small></span><span class="w-method__tag">${tag}</span></label>`).join('')}</div>
        ${f.metodo === 'debito' ? `<fieldset class="w-bank"><legend>Tus datos para el débito</legend>${compra.bancos.map((b) => `<label class="w-check w-check--radio"><input type="radio" name="banco" value="${b.id}"${f.banco === b.id ? ' checked' : ''}><span><b>${esc(b.nombre)}${b.tipo ? ` · ${b.tipo}` : ''}</b><small>${b.doc} · ${b.tel}</small></span></label>`).join('')}
          <p class="w-bank__foot"><button type="button" class="w-btn w-btn--text" data-toast="Añadir datos de pago llega con Mi cuenta (fase 2)">${icon('add', 18)}Usar otros datos</button><span class="w-muted w-sm">${icon('chat', 16)}Tu banco te enviará una clave de 8 dígitos por SMS.</span></p></fieldset>`
          : notice('neutral', 'info', f.metodo === 'binance' ? 'Al confirmar te mostramos el código de Binance Pay para pagar desde tu cuenta.' : 'Al confirmar te damos los datos de VexBiz para transferir y reportar la referencia.')}
        <div class="w-field"><label for="w-cupon">¿Tienes un cupón?</label><input id="w-cupon" class="w-input" value="${esc(f.cupon)}" autocomplete="off" autocapitalize="characters"><small class="w-muted w-sm">Se aplica al confirmar la compra.</small></div></section>`;
    const body = n === 1 ? paso1 + closed(2, 'Envío y Tiendas', 'Un paquete por tienda con su costo de envío') + closed(3, 'Pago', 'Débito bancario, Binance Pay o transferencia')
      : n === 2 ? closed(1, 'Dirección de Entrega', `${esc(d.nombre)} · ${esc(d.linea.split(',').slice(0, 2).join(','))}, ${esc(d.ciudad.split(',')[0])}`, true) + paso2 + closed(3, 'Pago', 'Débito bancario, Binance Pay o transferencia')
      : closed(1, 'Dirección de Entrega', `${esc(d.nombre)} · ${esc(d.linea.split(',').slice(0, 2).join(','))}, ${esc(d.ciudad.split(',')[0])}`, true) + closed(2, 'Envío y Tiendas', `${gs.length} paquetes · envío total ${money(t.env)}`, true) + paso3;
    const resumen = n === 1
      ? `${gs.map((g) => `<h3>${esc(g.t.nombre)}</h3><dl>${g.ls.map((l) => `<div><dt>${esc(l.p.corto || l.p.nombre)}</dt><dd>${l.qty} × ${money(l.precio)}</dd></div>`).join('')}</dl>`).join('')}
         <dl class="w-summary__sep"><div><dt>Subtotal</dt><dd>${money(t.sub)}</dd></div><div><dt>Envío</dt><dd>Se calcula en el paso 2</dd></div></dl>`
      : `<dl><div><dt>Subtotal</dt><dd>${money(t.sub)}</dd></div>${n === 2 ? gs.map((g) => `<div><dt>Envío · ${esc(g.t.nombre)}</dt><dd${envioDe(g.t.id) ? '' : ' class="w-free"'}>${envioDe(g.t.id) ? money(envioDe(g.t.id)) : 'Gratis'}</dd></div>`).join('') : `<div><dt>Envío</dt><dd>${money(t.env)}</dd></div>`}
         ${n === 3 && t.imp ? `<div><dt>Impuesto del pago (${compra.debitoPct} %)</dt><dd>${money(t.imp)}</dd></div>` : ''}${n === 3 && f.cupon ? `<div><dt>Cupón ${esc(f.cupon)}</dt><dd class="w-sm">se aplica al confirmar</dd></div>` : ''}</dl>`;
    const totalN = n === 1 ? t.sub : n === 2 ? round2(t.sub + t.env) : t.total;
    return `<div class="w-wrap">${crumbs([['Carrito de compras', '#/carrito'], ['Pagar']])}
      <div class="w-pagehead"><div><h1 class="w-title">Finalizar Compra</h1><p class="w-lede w-lede--sm">Tres pasos: entrega, envío y pago. Un solo pago aunque compres en varias tiendas.</p></div>${stepper(n)}</div>
      <div class="w-checkout"><div class="w-checkout__main" data-step="${n}">${body}</div>
        <aside class="w-panel w-summary" aria-label="Resumen de compra"><h2>Resumen de Compra</h2>${resumen}
          <p class="w-summary__total"><span>Total a pagar</span><b class="vx-tab-num">${money(totalN)}</b></p><p class="w-summary__bs">${bsRef(totalN, TASA_DIA).split(' · ')[0]} · referencial</p>
          ${n === 3 ? `<p class="w-summary__recap">${icon('pin', 18)}${esc(d.nombre)} · ${esc(d.linea.split(',')[0])}, ${esc(d.ciudad.split(',')[0])}<br>${icon('wallet', 18)}${f.metodo === 'debito' ? `Débito bancario · ${esc(compra.bancos.find((b) => b.id === f.banco).nombre)}${f.banco === 'banesco' ? ' · Personal' : ''}` : f.metodo === 'binance' ? 'Binance Pay' : 'Transferencia a VexBiz'}</p>
            <a class="w-btn w-btn--primary w-btn--block w-btn--lg" href="#/espera">${icon('lock', 18)}Confirmar y pagar</a>` : ''}
          ${n !== 2 ? notice('neutral', 'info', `Se crean ${gs.length} pedidos, uno por tienda, con un solo pago.${n === 3 ? ' Precios y envío con impuestos incluidos.' : ''}`) : ''}</aside></div></div>`;
  },
  mount(root, q) {
    const f = flow(), rerender = () => { root.innerHTML = pagarPage.render(q); };
    root.addEventListener('change', (e) => {
      const el = e.target;
      if (el.name === 'dir') { f.dir = el.value; rerender(); }
      else if (el.name === 'retiro') { f.retiro[el.value] = el.checked; rerender(); }
      else if (el.dataset.ret) { f.retiro[el.dataset.ret] = el.checked; rerender(); }
      else if (el.name === 'metodo') { f.metodo = el.value; rerender(); }
      else if (el.name === 'banco') { f.banco = el.value; }
      else if (el.id === 'w-cupon') { f.cupon = el.value.trim().toUpperCase(); rerender(); }
    });
  },
};

// ── 03.03 · Sala de espera de la compra ─────────────────────────────────────
export const esperaPage = {
  code: '03.03', label: 'MARKETPLACE', title: 'Estamos confirmando tu compra',
  render() {
    return `<div class="w-wrap w-wait"><section class="w-panel"><h1 class="w-title w-title--md">Estamos confirmando tu compra</h1>
        <p class="w-wait__clock">${icon('clock', 22)}<b class="vx-tab-num" data-left>Queda 3:42</b><span class="w-muted" data-pend></span></p></section>
      <div data-decide></div>
      <section class="w-panel"><h2 class="w-wait__h">Tu compra</h2><ul class="w-wait__list" data-lines></ul></section>
      ${notice('neutral', 'info', 'En cuanto todas las tiendas contesten podrás pagar. Puedes dejar esta página abierta.')}
      <p class="w-wait__when">Cuando todo está confirmado</p>
      <button class="w-btn w-btn--primary w-btn--block w-btn--lg" type="button" data-pay disabled>${icon('lock', 18)}Pagar la compra</button>
      <p class="w-muted w-sm w-center">Al pagar se aparta el stock y empieza el plazo para transferir.</p></div>`;
  },
  mount(root) {
    const ls = espera.lineas.map((l) => ({ ...l })), end = Date.now() + espera.segundos * 1000;
    let decidido = false;
    const left = () => Math.max(0, end - Date.now());
    const paint = () => {
      const ms = left(), txt = clock(ms), pend = ls.filter((l) => l.estado === 'espera' || l.estado === 'propone').length;
      root.querySelector('[data-left]').textContent = `Queda ${txt}`;
      root.querySelector('[data-pend]').textContent = pend ? ` · ${pend} ${pend === 1 ? 'tienda tiene' : 'tiendas tienen'} que contestar` : ' · todas las tiendas contestaron';
      const prop = ls.find((l) => l.estado === 'propone');
      root.querySelector('[data-decide]').innerHTML = prop ? `<section class="w-panel w-decide"><h2>Hay algo que decidir</h2><p class="w-muted">Si no contestas antes de que acabe el tiempo, esa línea se cae de la compra.</p>
          <div class="w-decide__box"><h3>${esc(producto(prop.id).nombre)}</h3><p>Pediste ${prop.qty} × ${money(prop.precio)} a ${esc(prop.tienda)}</p><p class="w-decide__big">La tienda propone: ${prop.propuesta} unidad a ${money(prop.precio)} (sólo le queda una).</p>
            <div class="w-decide__row"><span>Pagarías ${money(prop.precio * (prop.qty - prop.propuesta))} menos · Te quedan ${txt}</span><button class="w-btn w-btn--primary" type="button" data-acc>${icon('check', 18)}Acepto</button><button class="w-btn w-btn--ghost" type="button" data-rej>No, gracias</button></div></div></section>` : '';
      const ICO = { ok: ['check', 'Confirmada', 'ok'], propone: ['swap', 'La tienda propone un cambio', 'warn'], espera: ['clock', 'Esperando a que la tienda confirme', 'neutral'], no: ['close', 'No se pudo conseguir', 'bad'], quitada: ['close', 'La quitaste de la compra', 'bad'] };
      root.querySelector('[data-lines]').innerHTML = ls.map((l) => { const [ic, t, k] = ICO[l.estado], p = producto(l.id); return `<li class="w-wait__line w-wait__line--${k}"><span class="w-wait__ico">${icon(ic, 22)}</span>
          <div><b>${esc(p.nombre)}</b><small>${l.qty} × ${money(l.precio)} · ${esc(l.tienda)}</small><span class="w-wait__st">${t}</span></div>${l.estado === 'propone' || l.estado === 'espera' ? `<span class="w-badge w-badge--neutral">${icon('clock', 14)}${txt}</span>` : ''}</li>`; }).join('');
      root.querySelector('[data-pay]').disabled = pend > 0;
      if (ms <= 0) { ls.forEach((l) => { if (l.estado === 'propone' || l.estado === 'espera') l.estado = 'no'; }); }
    };
    root.addEventListener('click', (e) => {
      const prop = ls.find((l) => l.estado === 'propone');
      if (e.target.closest('[data-acc]') && prop) { prop.qty = prop.propuesta; prop.estado = 'ok'; decidido = true; toast('Aceptaste 1 unidad de la tarjeta'); paint(); }
      if (e.target.closest('[data-rej]') && prop) { prop.estado = 'quitada'; decidido = true; toast('Quitaste la tarjeta de la compra'); paint(); }
      if (e.target.closest('[data-pay]')) { toast('Pago listo para confirmar: la pasarela llega con Mis compras (fase 2)'); }
    });
    // La tienda del capacitor confirma a los 6 s (demo); la cuenta atrás corre cada segundo.
    const conf = setTimeout(() => { const c = ls.find((l) => l.id === 'cap'); if (c && c.estado === 'espera') { c.estado = 'ok'; paint(); } }, 6000);
    const tick = setInterval(paint, 1000); paint();
    return () => { clearInterval(tick); clearTimeout(conf); void decidido; };
  },
};
export { set, reduce };
