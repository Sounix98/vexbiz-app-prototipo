// 09 · Mi tienda (1/2): panel, ficha de pedido, documentos, productos, editar oferta, datos, envíos y cupones.
// Lo que trae el Figma web va aquí; reglas de la app (comisión congelada, stock que se descuenta al pagar) en data4.js.
import { icon, esc, money, badge, notice, toast, productArt } from '../kit.js';
import { sidePanel, head, card, pager, area, wireCounts, parseMoney, HOY } from './tecnico.js';

export const MENU_T = [['mi-tienda', 'Panel de control', 'explore'], ['mis-productos', 'Mis productos', 'box'], ['ventas', 'Ventas', 'list'], ['liquidaciones', 'Liquidaciones', 'wallet'], ['cuentas-banco', 'Cuentas bancarias', 'store'], ['tienda-reclamos', 'Reclamos', 'flag'], ['resenas', 'Reseñas', 'star'], ['cupones', 'Cupones', 'tag'], ['envios', 'Envíos', 'truck'], ['tienda-documentos', 'Documentos', 'doc'], ['vitrina', 'Cómo se te ve', 'eye'], ['datos-tienda', 'Datos de la tienda', 'sliders']];
export const panelT = (activo, body) => sidePanel('Mi tienda', MENU_T, activo, body);
export const pageT = (code, title, render, mount, label = 'MI TIENDA') => ({ code, label, title, sesion: 'login', render, mount });
export const rerender = () => window.dispatchEvent(new HashChangeEvent('hashchange'));
export const errBox = (f, m) => { const e = f.querySelector('[data-err]'); e.hidden = !m; e.innerHTML = m ? `${icon('error', 16)}${m}` : ''; return !!m; };
export const seg = (name, opts, val) => `<fieldset class="w-seg" data-seg="${name}"><legend class="w-sr">${name}</legend>${opts.map(([v, t]) => `<label><input type="radio" name="${name}" value="${v}"${String(v) === String(val) ? ' checked' : ''}><span>${String(v) === String(val) ? icon('check', 16) : ''}${t}</span></label>`).join('')}</fieldset>`;
export const wireSeg = (root) => root.addEventListener('change', (e) => { const fs = e.target.closest('[data-seg]'); if (!fs) return; fs.querySelectorAll('label').forEach((l) => { const i = l.querySelector('input'); l.querySelector('span').innerHTML = `${i.checked ? icon('check', 16) : ''}${l.textContent}`; }); });
const t0 = Date.now();

const S = (globalThis.__vxTienda ||= {
  quieren: [
    { id: 'q1', t: 'Aire acondicionado split inverter 12.000 BTU', d: '1 × $ 389,00 USD · María González', tag: ['Te la ofrecen: otra tienda no pudo', 'warn', 'swap'], fin: t0 + (12 * 60 + 48) * 1000 },
    { id: 'q2', t: 'Control remoto universal para aire split', d: '2 × $ 12,50 USD · José Ramírez', tag: ['Te quedan 1 y te piden 2', 'bad', 'warning'], fin: t0 + (3 * 60 + 15) * 1000 },
  ],
  carritos: [
    { id: 'c1', t: 'Aire split inverter 12.000 BTU', d: '1 en el carrito · te quedan 6', s: 'Con sesión · hace 20 min', ok: true },
    { id: 'c2', t: 'Kit de instalación split 3 m', d: '3 en el carrito · te quedan 2', s: 'Sin sesión · hace 1 h', falta: true },
    { id: 'c3', t: 'Gas refrigerante R410A', d: '1 en el carrito · te quedan 9', s: 'Con sesión · hace 3 h' },
  ],
  pedidos: [
    { id: 'VX-20431', cliente: 'María González', ciudad: 'Valencia', fecha: '15/10/2026', hora: '11:42', n: 2, total: 414, neto: 380.88, estado: 'pagado' },
    { id: 'VX-20425', cliente: 'Luis Pérez', ciudad: 'Naguanagua', fecha: '14/10/2026', hora: '16:05', n: 1, total: 389, neto: 357.88, estado: 'pagado' },
    { id: 'VX-20398', cliente: 'Ana Torres', ciudad: 'Valencia', fecha: '10/10/2026', hora: '09:30', n: 3, total: 97.5, neto: 89.7, estado: 'despachado' },
  ],
  filtroP: 'todos',
  docs: [
    { id: 'rif', n: 'RIF de la empresa', ob: true, estado: 'verificado', meta: 'Subido el 02/10/2026 · Válido hasta: 02/10/2027' },
    { id: 'rm', n: 'Registro Mercantil', ob: true, estado: 'rechazado', ayuda: 'Acta constitutiva con sello del registro.', meta: 'Subido el 05/10/2026', motivo: 'La imagen está cortada y no se lee el sello del registro.' },
    { id: 'sen', n: 'Solvencia SENIAT', ob: true, estado: 'pendiente', ayuda: 'Constancia de solvencia del último ejercicio.' },
    { id: 'lic', n: 'Licencia de actividades económicas', ob: false, estado: 'pendiente', ayuda: 'Ayuda a mostrar tu tienda como más confiable.' },
  ], enviada: false,
  productos: [
    { id: 'p1', t: 'Aire acondicionado split inverter 12.000 BTU', marca: 'Samsung', sku: 'AR12TVHZ', stock: 6, precio: 389, on: true },
    { id: 'p2', t: 'Kit de instalación split 3 m con tubería', marca: 'Universal', sku: 'KIT-3M', stock: 2, precio: 48, on: true },
    { id: 'p3', t: 'Aire de ventana 9.000 BTU 110V', marca: 'Midea', sku: 'MWF09', stock: 0, precio: 279, on: false },
  ], filtroQ: 'todos', q: '', alta: true,
  oferta: { sku: 'AR12TVHZ', cond: 'Nuevo', pub: true, precios: [{ desde: 1, imp: 389 }, { desde: 3, imp: 372 }, { desde: 1, imp: 359, prog: '01/11/2026' }],
    movs: [[5, '10/10/2026', 'Llegó mercancía del proveedor'], [-1, '08/10/2026', 'Unidad dañada en exhibición'], [2, '01/10/2026', 'Conteo de inventario']] },
  datos: { comercial: 'Frío Total Caracas', razon: 'Frío Total Servicios C.A.', email: 'ventas@friototal.com', web: 'www.friototal.com', dir: 'Av. Principal de Boleíta Norte, Galpón 12, Caracas' }, logo: true, figuras: { vende: true, importa: false, servicios: false },
  reglas: [{ id: 'r1', n: 'Envío Caracas', costo: 5, c: 50, t: 50, v: 0, on: true }, { id: 'r2', n: 'Envío nacional', costo: 12, c: 100, t: 0, v: 0, on: true }, { id: 'r3', n: 'Promo envío gratis', costo: 5, c: 0, t: 100, v: 0, on: false }],
  cupones: [
    { code: 'VERANO10', tipo: 'pct', val: 10, min: 50, usados: 18, tope: 100, persona: 1, estado: 'activo' },
    { code: 'BIENVENIDA5', tipo: 'fijo', val: 5, primera: true, usados: 42, estado: 'pausado' },
    { code: 'BLACKFRIDAY', tipo: 'pct', val: 15, usados: 200, tope: 200, estado: 'caducado' },
  ],
});
export const ST = S;

// ── 09.01 · Panel de la tienda ──────────────────────────────────────────────
const mmss = (ms) => { const s = Math.max(0, Math.round(ms / 1000)); return `${String(Math.floor(s / 60)).padStart(2, '0')}:${String(s % 60).padStart(2, '0')}`; };
const ESTP = { pagado: ['Pagado · por despachar', 'warn', 'receipt'], despachado: ['Despachado', 'info', 'truck'] };
const pedRow = (p) => { const [t, k, ic] = ESTP[p.estado]; return `<li class="w-ord"><div><p class="w-chiprow"><a class="w-link w-link--id" href="#/pedido-tienda?id=${p.id}">#${p.id}</a>${badge(t, k, ic)}</p><p class="w-muted w-sm">${esc(p.cliente)} · ${esc(p.ciudad)} · ${p.fecha} · ${p.n} ${p.n === 1 ? 'artículo' : 'artículos'}${p.estado === 'despachado' ? ' · Despachado' : ''}</p><p class="w-muted w-sm">Comisión VexBiz congelada al momento de la compra</p></div>
  <div class="w-ord__m"><b>${money(p.total)}</b><small>Te quedan: ${money(liq(p).neto)}</small></div>${p.estado === 'pagado' ? `<a class="w-btn w-btn--primary" href="#/pedido-tienda?id=${p.id}">${icon('box', 18)}Preparar y despachar</a>` : `<a class="w-btn w-btn--ghost" href="#/pedido-tienda?id=${p.id}">${icon('eye', 18)}Ver detalle</a>`}</li>`; };
const HORARIO = [['Lunes a viernes', '8:00 – 12:00'], ['Lunes a viernes', '13:30 – 17:30'], ['Sábado', '9:00 – 13:00']];
const panel = pageT('09.01', 'Panel de la tienda', () => {
  const porDesp = S.pedidos.filter((p) => p.estado === 'pagado'), lista = S.filtroP === 'todos' ? S.pedidos : porDesp;
  return panelT('mi-tienda', `${head([['Mi tienda', '#/mi-tienda'], ['Panel de control']], `Frío Total C.A. ${badge('Tienda Verificada', 'info', 'check')}`, '', `<a class="w-btn w-btn--ghost" href="#/vitrina">${icon('store', 18)}Ver mi tienda</a>`)}
  ${S.quieren.length ? `<section class="w-panel w-card2 w-urgent"><div class="w-rowinfo">${icon('clock', 24)}<div><h2>${S.quieren.length} ${S.quieren.length === 1 ? 'cliente quiere' : 'clientes quieren'} comprarte</h2><p class="w-muted w-sm">Si no contestas antes de que acabe el tiempo, la venta pasa a otra tienda.</p></div></div>
    <ul class="w-want">${S.quieren.map((q) => `<li data-q="${q.id}"><div><b>${esc(q.t)}</b><small>${esc(q.d)}</small>${badge(...q.tag)}</div><p class="w-want__t"><b data-tt="${q.id}">${mmss(q.fin - Date.now())}</b><small>para contestar</small></p>
      <span class="w-btnrow" data-acts><button class="w-btn w-btn--primary" type="button" data-si="${q.id}">Sí, la tengo</button><button class="w-btn w-btn--ghost" type="button" data-pero="${q.id}">Puedo, pero…</button><button class="w-btn w-btn--text" type="button" data-nola="${q.id}">No la tengo</button></span></li>`).join('')}</ul></section>`
    : notice('info', 'check', 'No tienes clientes esperando respuesta.')}
  <div class="w-grid2 w-grid2--top">
    ${card(`<div class="w-rowinfo">${icon('cart', 24)}<div><h2>${S.carritos.length} carritos abiertos con algo tuyo</h2><p class="w-muted w-sm">Aún no han pagado. Confirma precio y stock para que no haga falta preguntarte al comprar.</p></div></div>
      ${S.carritos.some((c) => c.falta) ? notice('bad', 'warning', 'En 1 no te alcanza el stock: esa venta se caerá salvo que repongas.') : ''}
      <ul class="w-carts">${S.carritos.map((c) => `<li><span><b>${esc(c.t)}</b><small class="${c.falta ? 'w-bad' : ''}">${esc(c.d)}${c.falta ? ' · no alcanza' : ''}</small><small>${esc(c.s)}</small></span>${c.ok ? badge('Precio y stock confirmados', 'info', 'check') : c.falta ? `<a class="w-link w-link--bad" href="#/editar-oferta">Repón para poder confirmar</a>` : `<button class="w-btn w-btn--soft" type="button" data-conf="${c.id}">Precio y stock al día</button>`}</li>`).join('')}</ul>`)}
    ${card(`<div class="w-rowinfo">${icon('clock', 24)}<div><h2>2 unidades apartadas esperando pago</h2><p class="w-muted w-sm">Ya no se pueden vender a nadie más. Si el pago no llega, vuelven solas al stock.</p></div></div>
      <ul class="w-carts"><li><span><b>Aire split inverter 12.000 BTU</b><small>1 × $ 389,00 USD · pedido VX-20431 · Luis Pérez</small></span><span class="w-muted w-sm">${icon('clock', 16)}5 h 20 min</span></li>
      <li><span><b>Control remoto universal</b><small>1 × $ 12,50 USD · pedido VX-20440 · Ana Torres</small>${badge('Un intento de pago falló; aún puede reintentar', 'warn')}</span><span class="w-muted w-sm">${icon('clock', 16)}42 min</span></li></ul>`)}
  </div>
  <details class="w-panel w-paused"><summary><span>${icon('clock', 20)} Tu horario ${badge('6 tramos', 'neutral')}</span></summary><ul>${HORARIO.map(([d, h]) => `<li><span>${d}</span><b>${h}</b></li>`).join('')}<li><span>Domingo</span><span class="w-muted">Cerrado</span></li></ul><p class="w-muted w-sm">Fuera de horario las solicitudes esperan hasta que abras. Se cambia en Datos de la tienda.</p></details>
  <ul class="w-kpis"><li>${icon('box', 22)}<b>${porDesp.length}</b><span>Por despachar</span></li><li>${icon('list', 22)}<b>${money(12480.6)}</b><span>Ventas brutas acumuladas</span></li><li>${icon('wallet', 22)}<b>${money(11481.15)}</b><span>Ingreso neto a liquidar</span></li></ul>
  ${card(`<h2>Bandeja de Pedidos</h2><p class="w-muted w-sm">Pedidos pagados que tienes que preparar y despachar.</p>
    <div class="w-req__bar w-req__bar--split"><div class="w-filterchips" role="group" aria-label="Filtrar pedidos"><button type="button" class="w-fchip" data-fp="todos" aria-pressed="${S.filtroP === 'todos'}">${S.filtroP === 'todos' ? icon('check', 16) : ''}Todos (24)</button><button type="button" class="w-fchip" data-fp="desp" aria-pressed="${S.filtroP === 'desp'}">${S.filtroP === 'desp' ? icon('check', 16) : ''}Por despachar (${porDesp.length})</button></div>${pager()}</div>
    <ul class="w-ords">${lista.length ? lista.map(pedRow).join('') : `<li class="w-empty">No tienes pedidos por despachar.</li>`}</ul><p class="w-muted w-sm">«Te quedan» es lo que recibes de cada venta después de la comisión y las retenciones.</p>`)}`); },
(root) => {
  const tick = setInterval(() => S.quieren.forEach((q) => { const el = root.querySelector(`[data-tt="${q.id}"]`); if (!el) return; const left = q.fin - Date.now(); el.textContent = mmss(left); if (left <= 0) { S.quieren = S.quieren.filter((x) => x !== q); toast('Se acabó el tiempo: esa venta pasó a otra tienda'); rerender(); } }), 1000);
  root.addEventListener('click', (e) => {
    const si = e.target.closest('[data-si]'), pero = e.target.closest('[data-pero]'), no = e.target.closest('[data-nola]'), yes = e.target.closest('[data-nolayes]'), back = e.target.closest('[data-back]'), conf = e.target.closest('[data-conf]'), fp = e.target.closest('[data-fp]'), prop = e.target.closest('[data-prop]');
    const quitar = (id, msg) => { S.quieren = S.quieren.filter((x) => x.id !== id); toast(msg); rerender(); };
    if (si) quitar(si.dataset.si, 'Confirmaste la venta: el cliente ya puede pagar');
    if (pero) { const box = pero.closest('[data-acts]'); box.innerHTML = `<form class="w-inline" novalidate data-prop="${pero.dataset.pero}"><div class="w-field"><label for="pp-${pero.dataset.pero}">Lo que le ofreces</label><select class="w-input" id="pp-${pero.dataset.pero}"><option>Solo tengo 1 unidad</option><option>Llega en 3 días</option><option>Otro modelo equivalente</option></select></div><button class="w-btn w-btn--primary" type="submit">Enviar</button><button class="w-btn w-btn--text" type="button" data-back>Cancelar</button></form>`; box.querySelector('select').focus(); }
    if (no) { const box = no.closest('[data-acts]'); box.innerHTML = `<span class="w-sm">¿Seguro? La venta pasa a otra tienda.</span><button class="w-btn w-btn--danger" type="button" data-nolayes="${no.dataset.nola}">Sí, no la tengo</button><button class="w-btn w-btn--text" type="button" data-back>Cancelar</button>`; }
    if (yes) quitar(yes.dataset.nolayes, 'Le avisamos al cliente: la venta pasa a otra tienda');
    if (back) rerender();
    if (conf) { S.carritos.find((c) => c.id === conf.dataset.conf).ok = true; toast('Precio y stock confirmados'); rerender(); }
    if (fp) { S.filtroP = fp.dataset.fp; rerender(); }
    void prop;
  });
  root.addEventListener('submit', (e) => { const f = e.target.closest('[data-prop]'); if (!f) return; e.preventDefault(); const q = S.quieren.find((x) => x.id === f.dataset.prop); S.quieren = S.quieren.filter((x) => x !== q); toast(`Le propusiste a ${q.d.split('· ').pop()}: «${f.querySelector('select').value}»`); rerender(); });
  return () => clearInterval(tick);
});

// ── 09.02 · Ficha de un pedido ──────────────────────────────────────────────
const ITEMS = { 'VX-20431': [['Aire acondicionado split inverter 12.000 BTU', 'AR12TVHZ', 1, 389, 31.12], ['Control remoto universal para aire split', 'CR-UNI-01', 2, 12.5, 2]], 'VX-20425': [['Aire acondicionado split inverter 12.000 BTU', 'AR12TVHZ', 1, 389, 31.12]], 'VX-20398': [['Kit de instalación split 3 m con tubería', 'KIT-3M', 1, 48, 3.84], ['Gas refrigerante R410A 1 kg', 'GAS-410', 2, 24.75, 3.96]] }; // INVENTADO: artículos de VX-20425 y VX-20398
const DEST = { 'VX-20431': ['María González', '0414-555 1234', 'Urb. El Viñedo, Calle 4, Casa 12', 'Valencia, Carabobo'], 'VX-20425': ['Luis Pérez', '0412-555 8890', 'Res. Las Acacias, Torre 2, Apto 8-B', 'Naguanagua, Carabobo'], 'VX-20398': ['Ana Torres', '0424-555 3321', 'C.C. Sambil, Local N-24', 'Valencia, Carabobo'] };
/** Liquidación de un pedido: comisión congelada por artículo, IVA (16 %) de la comisión y el envío que va al delivery. */
const liq = (p) => { const it = ITEMS[p.id], sub = it.reduce((a, i) => a + i[2] * i[3], 0), envio = 8.4, com = it.reduce((a, i) => a + i[4], 0), iva = Math.round(com * 0.16 * 100) / 100; return { it, sub, envio, com, iva, neto: sub - com - iva, total: sub + envio }; };
const pedido = pageT('09.02', 'Ficha de un pedido', (q) => {
  const p = S.pedidos.find((x) => x.id === q.id) || S.pedidos[0], [cli, tel, dir, ciu] = DEST[p.id], { it, sub, envio, com, iva, neto, total } = liq(p);
  const [t, k, ic] = ESTP[p.estado];
  return panelT('mi-tienda', `${head([['Mi tienda', '#/mi-tienda'], ['Pedidos', '#/mi-tienda'], [`#${p.id}`]], `#${p.id}`, `Recibido el ${p.fecha} a las ${p.hora}`, badge(t, k, ic))}
  ${card(`<h2>Destino del Despacho y Contacto del Comprador</h2><div class="w-grid2"><div class="w-box">${icon('person', 20)}<span><small>Comprador:</small><b>${esc(cli)}</b><a class="w-link w-link--inline" href="tel:${tel.replace(/\D/g, '')}">${tel}</a></span></div><div class="w-box">${icon('pin', 20)}<span><small>Dirección de entrega:</small><b>${esc(dir)}</b>${esc(ciu)}</span></div></div>`)}
  ${card(`<div class="w-card2__head"><h2>Artículos a Empacar</h2>${badge(`${it.reduce((a, i) => a + i[2], 0)} artículos`, 'neutral')}</div><ul class="w-items">${it.map(([n, sku, c, u, cm]) => `<li>${icon('box', 22)}<span><b>${esc(n)}</b><small>SKU ${sku} · ${c} × ${money(u)}</small></span><span class="w-items__m"><b>${money(c * u)}</b><small class="w-bad">− ${money(cm)} comisión</small></span></li>`).join('')}</ul>`)}
  ${card(`<h2>Liquidación Económica del Pedido</h2><dl class="w-liq"><div><dt>Subtotal de artículos</dt><dd>${money(sub)}</dd></div><div><dt>Costo de envío</dt><dd>${money(envio)}</dd></div><div><dt>Comisión VexBiz (8 %)</dt><dd class="w-bad">− ${money(com)}</dd></div><div><dt>IVA de la comisión</dt><dd class="w-bad">− ${money(iva)}</dd></div><div><dt>Parte del envío para el delivery</dt><dd class="w-bad">− ${money(envio)}</dd></div></dl>
    <p class="w-netbox"><span><b>Monto neto que ingresa a tu tienda</b><small>Va en la próxima liquidación</small></span><b>${money(neto)}</b></p>`)}
  ${p.estado === 'despachado' ? card(`${notice('info', 'truck', `<b>Pedido despachado</b>${p.guia ? `Guía ${esc(p.guia)} · ` : ''}la factura le llegó al comprador. Despachar no modifica el inventario.`)}<a class="w-btn w-btn--ghost" href="#/mi-tienda">${icon('back', 18)}Volver al panel</a>`) :
    card(`<h2>Marcar como Despachado</h2><form class="w-grid2" novalidate data-desp>
      <div class="w-field"><label for="dp-t">Empresa de transporte</label><select class="w-input" id="dp-t"><option>Zoom</option><option>MRW</option><option>Tealca</option><option>Delivery propio</option></select></div>
      <div class="w-field"><label for="dp-g">Número de guía de tracking (opcional)</label><input class="w-input" id="dp-g" placeholder="Ej. 1234567890" inputmode="numeric"></div>
      <label class="w-drop w-span2"><input type="file" class="w-sr" accept="application/pdf,image/jpeg,image/png,image/webp" data-fac>${icon('upload', 22)}<span><b>Factura al cliente ${badge('Obligatoria', 'bad')}</b><small data-facn>Toca para adjuntar · PDF o imagen (JPG, PNG, WebP) · hasta 10 MB</small></span></label>
      <label class="w-drop w-span2"><input type="file" class="w-sr" accept=".xml,text/xml,application/xml" data-xml>${icon('upload', 22)}<span><b>XML de la factura electrónica</b><small data-xmln>Opcional en este país</small></span></label>
      <div class="w-field"><label for="dp-n">Número de factura</label><input class="w-input" id="dp-n" placeholder="000-0459"></div>
      <div class="w-field"><label for="dp-c">Número de control</label><input class="w-input" id="dp-c" placeholder="00-0012459"></div>
      <div class="w-field"><label for="dp-f">Fecha de emisión</label><input class="w-input" id="dp-f" type="date" value="2026-10-16" max="2026-10-16"></div>
      <div class="w-field"><label for="dp-tt">Total facturado</label><input class="w-input" id="dp-tt" inputmode="decimal" value="${money(total).replace('$ ', '')}"><small class="w-muted" data-coin>Coincide con el total del pedido</small></div>
      <p class="w-field__err w-span2" data-err hidden></p><p class="w-btnrow w-span2"><button class="w-btn w-btn--primary" type="submit">${icon('truck', 18)}Despachar y enviar factura al cliente</button><span class="w-muted w-sm">No modifica inventario.</span></p></form>`)}`); },
(root, q) => {
  const f = root.querySelector('[data-desp]'); if (!f) return; const p = S.pedidos.find((x) => x.id === q.id) || S.pedidos[0]; const total = ITEMS[p.id].reduce((a, i) => a + i[2] * i[3], 0) + 8.4;
  let fac = null;
  f.querySelector('[data-fac]').addEventListener('change', (e) => { fac = e.target.files[0] || null; if (fac && fac.size > 10e6) { fac = null; toast('La factura pesa más de 10 MB'); } f.querySelector('[data-facn]').textContent = fac ? `${fac.name} · lista para enviar` : 'Toca para adjuntar · PDF o imagen (JPG, PNG, WebP) · hasta 10 MB'; f.querySelector('[data-facn]').closest('.w-drop').classList.toggle('is-ok', !!fac); });
  f.querySelector('[data-xml]').addEventListener('change', (e) => { const x = e.target.files[0]; f.querySelector('[data-xmln]').textContent = x ? x.name : 'Opcional en este país'; });
  const coin = () => { const ok = Math.abs(parseMoney(f.querySelector('#dp-tt').value) - total) < 0.01; const el = f.querySelector('[data-coin]'); el.textContent = ok ? 'Coincide con el total del pedido' : `No coincide: el pedido suma ${money(total)}`; el.classList.toggle('w-bad', !ok); return ok; };
  f.querySelector('#dp-tt').addEventListener('input', coin);
  f.addEventListener('submit', (e) => {
    e.preventDefault();
    if (errBox(f, !fac ? 'Adjunta la factura al cliente: es obligatoria.' : !/^\d{3}-\d{4}$/.test(f.querySelector('#dp-n').value.trim()) ? 'El número de factura va como 000-0459.' : !/^\d{2}-\d{7}$/.test(f.querySelector('#dp-c').value.trim()) ? 'El número de control va como 00-0012459.' : !coin() ? 'El total facturado tiene que coincidir con el del pedido.' : '')) return;
    p.estado = 'despachado'; p.guia = f.querySelector('#dp-g').value.trim(); toast(`Pedido #${p.id} despachado: le enviamos la factura a ${p.cliente}`); rerender();
  });
});

// ── 09.03 · Documentos ──────────────────────────────────────────────────────
const ESTD = { verificado: ['Verificado', 'info', 'check'], rechazado: ['Rechazado', 'bad', 'error'], pendiente: ['Pendiente', 'warn', 'clock'], revision: ['En revisión', 'neutral', 'clock'] };
const documentos = pageT('09.03', 'Documentos', () => {
  const faltan = S.docs.filter((d) => d.ob && ['rechazado', 'pendiente'].includes(d.estado)), listo = !faltan.length;
  return panelT('tienda-documentos', `${head([['Mi tienda', '#/mi-tienda'], ['Documentos']], 'Documentos de Homologación', 'Sube los documentos que pide tu país. Sin verificación, tus ofertas no se publican.')}
  ${card(`<div class="w-card2__head"><h2 class="w-h-ico w-h-ico--plain">${icon(S.enviada ? 'check' : 'clock', 24)}${S.enviada ? 'Solicitud enviada' : listo ? 'Lista para enviar' : 'Verificación incompleta'}</h2><button class="w-btn w-btn--primary" type="button" data-enviar${listo && !S.enviada ? '' : ' disabled'}>${icon('share', 18)}Enviar a verificación</button></div>
    <p class="w-muted">${S.enviada ? 'VexBiz revisa tus documentos en 24 a 48 horas hábiles. Te avisamos por correo.' : listo ? 'Tienes todos los documentos obligatorios. Envía la solicitud para que VexBiz los revise.' : `Faltan: ${faltan.map((d) => d.n).join(' y ')}. Cuando estén todos, podrás enviar la solicitud.`}</p>`)}
  ${faltan.length ? notice('warn', 'warning', faltan.length === 1 ? 'Falta 1 documento para completar la verificación' : `Faltan ${faltan.length} documentos para completar la verificación`) : ''}
  ${S.docs.map((d) => { const [t, k, ic] = ESTD[d.estado]; return card(`<div class="w-card2__head"><h2 class="w-doc__t">${icon('doc', 22)}${esc(d.n)} ${badge(d.ob ? 'Obligatorio' : 'Opcional', 'neutral')}</h2>${badge(t, k, ic)}</div>
    ${d.ayuda ? `<p class="w-muted">${esc(d.ayuda)}</p>` : ''}${d.meta ? `<p class="w-sm">${esc(d.meta)}</p>` : ''}${d.estado === 'rechazado' ? notice('bad', 'error', `<b>Motivo del rechazo:</b>${esc(d.motivo)}`) : ''}
    ${['verificado', 'revision'].includes(d.estado) ? '' : `<div class="w-doc__act w-doc__act--box"><span class="w-btnrow"><label class="w-btn w-btn--soft">${icon('upload', 18)}${d.estado === 'rechazado' ? 'Subir otra versión' : 'Subir archivo'}<input type="file" class="w-sr" accept="image/jpeg,image/png,application/pdf" data-up="${d.id}"></label><button class="w-btn w-btn--ghost" type="button" data-foto="${d.id}">${icon('camera', 18)}Tomar foto</button></span><small class="w-muted">Formatos: JPG, PNG o PDF</small></div>`}`); }).join('')}`); },
(root) => {
  const subir = (id) => { const d = S.docs.find((x) => x.id === id); d.estado = 'revision'; d.meta = 'Subido el 16/10/2026 · listo para enviar a verificación'; toast(`${d.n}: subido`); rerender(); };
  root.addEventListener('change', (e) => { const i = e.target.closest('[data-up]'); if (i?.files[0]) subir(i.dataset.up); });
  root.addEventListener('click', (e) => { const b = e.target.closest('[data-foto]'); if (b) subir(b.dataset.foto); if (e.target.closest('[data-enviar]')) { S.enviada = true; toast('Solicitud enviada a verificación'); rerender(); } });
});

// ── 09.04 · Mis productos ───────────────────────────────────────────────────
const FQ = [['todos', 'Todos', () => true, 42], ['pub', 'Publicados', (p) => p.on, 38], ['pau', 'Pausados', (p) => !p.on, 4], ['bajo', 'Stock bajo', (p) => p.stock <= 2, 2]];
const productos = pageT('09.04', 'Mis productos', () => {
  const [, , fn] = FQ.find(([k]) => k === S.filtroQ), q = S.q.toLowerCase(), lista = S.productos.filter(fn).filter((p) => !q || `${p.t} ${p.sku} ${p.marca}`.toLowerCase().includes(q)), crit = S.productos.filter((p) => p.stock <= 2).length;
  return panelT('mis-productos', `${head([['Mi tienda', '#/mi-tienda'], ['Mis productos']], 'Mis Productos y Ofertas', 'Tus ofertas sobre las fichas del catálogo del país.', `<button class="w-btn w-btn--primary" type="button" data-abrir>${icon('add', 18)}Poner artículo a la venta</button>`)}
  ${S.alta ? `<section class="w-panel w-card2 w-alta"><div class="w-card2__head"><div><h2>Ponle precio a Aire split WindFree 18.000 BTU</h2><p class="w-muted w-sm">Samsung · Climatización · lo venden 3 tiendas</p></div><button class="w-iconbtn" type="button" data-cerrar aria-label="Cerrar">${icon('close', 20)}</button></div>
    <form class="w-grid6" novalidate data-oferta><div class="w-field w-c3"><label for="of-sku">Tu código (SKU)</label><input class="w-input" id="of-sku" value="8801643562388"><small class="w-muted">Ya relleno con el código de barras</small></div>
    <div class="w-field w-c3"><label for="of-e">Estado</label><select class="w-input" id="of-e"><option>Nuevo</option><option>Reacondicionado</option><option>Usado</option></select></div>
    <div class="w-field w-c2"><label for="of-p">Precio al público</label><input class="w-input" id="of-p" inputmode="decimal" value="612,00"><small class="w-muted">Precio por unidad</small></div>
    <div class="w-field w-c2"><label for="of-m">Moneda</label><select class="w-input" id="of-m"><option>USD</option><option>VES</option></select></div>
    <div class="w-field w-c2"><label for="of-s">Existencias</label><input class="w-input" id="of-s" type="number" min="0" value="4"><small class="w-muted">Admite cero</small></div>
    <p class="w-field__err w-c6" data-err hidden></p><p class="w-btnrow w-c6 w-end"><button class="w-btn w-btn--ghost" type="button" data-toast="El buscador de fichas llega con la búsqueda del catálogo">${icon('back', 18)}Elegir otro</button><button class="w-btn w-btn--primary" type="submit">${icon('upload', 18)}Publicar oferta</button></p></form></section>` : ''}
  <form class="w-findbar" role="search" data-buscar><label class="w-sr" for="mp-q">Buscar producto por nombre, SKU o marca</label>${icon('search', 22)}<input id="mp-q" type="search" placeholder="Buscar producto por nombre, SKU o marca…" value="${esc(S.q)}"></form>
  <div class="w-req__bar w-req__bar--split"><div class="w-filterchips" role="group" aria-label="Filtrar productos">${FQ.map(([k, n, f]) => `<button type="button" class="w-fchip" data-fq="${k}" aria-pressed="${S.filtroQ === k}">${S.filtroQ === k ? icon('check', 16) : ''}${n} (${S.productos.filter(f).length})</button>`).join('')}</div><span class="w-muted w-sm">${lista.length} en esta página</span></div>
  ${crit ? notice('bad', 'warning', `${crit} ${crit === 1 ? 'producto tiene' : 'productos tienen'} stock crítico.`, '<button class="w-btn w-btn--text" type="button" data-fq="bajo">Filtrar críticos</button>') : ''}
  <div class="w-req__bar">${pager()}</div>
  <ul class="w-reqs">${lista.length ? lista.map((p) => `<li class="w-panel w-req"><div><h3>${esc(p.t)} ${badge(p.on ? 'Publicado' : 'Pausado', p.on ? 'info' : 'neutral')}</h3><p class="w-muted w-sm">${esc(p.marca)} · SKU: ${esc(p.sku)} · <b class="${p.stock <= 2 ? 'w-bad' : 'w-text'}">Stock: ${p.stock} ${p.stock === 1 ? 'unidad' : 'unidades'}</b></p></div><span class="w-btnrow"><b class="w-svc__p">${money(p.precio)}</b><a class="w-btn w-btn--ghost" href="#/editar-oferta?id=${p.id}">${icon('edit', 18)}Editar oferta</a></span></li>`).join('') : `<li class="w-panel w-empty-card">${icon('searchoff', 32)}<h2>Ningún producto coincide</h2><button class="w-btn w-btn--ghost" type="button" data-fq="todos">Ver todos</button></li>`}</ul>
  <p class="w-muted w-sm">El stock se descuenta cuando se confirma el pago de un pedido.</p>`); },
(root) => {
  root.addEventListener('click', (e) => { const b = e.target.closest('[data-fq]'); if (b) { S.filtroQ = b.dataset.fq; S.q = b.dataset.fq === 'todos' ? '' : S.q; rerender(); } if (e.target.closest('[data-cerrar]')) { S.alta = false; rerender(); } if (e.target.closest('[data-abrir]')) { S.alta = true; rerender(); setTimeout(() => document.querySelector('#of-sku')?.focus()); } });
  root.querySelector('[data-buscar]').addEventListener('submit', (e) => { e.preventDefault(); S.q = root.querySelector('#mp-q').value.trim(); rerender(); });
  root.querySelector('[data-oferta]')?.addEventListener('submit', (e) => {
    e.preventDefault(); const f = e.target, p = parseMoney(f.querySelector('#of-p').value), s = Number(f.querySelector('#of-s').value), sku = f.querySelector('#of-sku').value.trim();
    if (errBox(f, !sku ? 'Escribe tu código (SKU).' : p <= 0 ? 'Pon un precio mayor que 0.' : !(Number.isInteger(s) && s >= 0) ? 'Las existencias son un número entero, desde 0.' : '')) return;
    S.productos.unshift({ id: `p${Date.now()}`, t: 'Aire split WindFree 18.000 BTU', marca: 'Samsung', sku, stock: s, precio: p, on: true }); S.alta = false; toast('Oferta publicada'); rerender();
  });
});

// ── 09.05 · Editar una oferta ───────────────────────────────────────────────
const oferta = pageT('09.05', 'Editar una oferta', (q) => { const pr = S.productos.find((x) => x.id === q.id) || S.productos[0], o = S.oferta, ahora = o.precios.filter((x) => !x.prog), prog = o.precios.filter((x) => x.prog);
  const fila = (x) => `<li class="${x.prog ? 'is-prog' : ''}"><span>${x.prog ? `Precio programado · desde ${x.desde} · empieza el ${x.prog}` : `Precio · desde ${x.desde} ${x.desde === 1 ? 'unidad' : 'unidades'}`}</span><b>${money(x.imp)} USD</b><button class="w-btn w-btn--text" type="button" data-quitar="${o.precios.indexOf(x)}">Quitar</button></li>`;
  return `<div class="w-wrap w-col"><a class="w-link" href="#/mis-productos">${icon('close', 18)}Volver a mis productos</a>
  <div><h1 class="w-title w-title--md">${esc(pr.t)}</h1><p class="w-muted w-sm">${esc(pr.marca)} · El nombre y la marca son de la ficha del catálogo, que comparten todas las tiendas.</p></div>
  ${card(`<h2>Mi oferta</h2><form class="w-grid2" novalidate data-mia><div class="w-field"><label for="eo-c">Mi código</label><input class="w-input" id="eo-c" value="${esc(pr.sku)}"><small class="w-muted">Tu código interno para este artículo</small></div><div class="w-field"><label for="eo-k">Condición</label><select class="w-input" id="eo-k">${['Nuevo', 'Reacondicionado', 'Usado'].map((c) => `<option${c === o.cond ? ' selected' : ''}>${c}</option>`).join('')}</select></div>
    <label class="w-check w-span2"><input type="checkbox" id="eo-pub"${pr.on ? ' checked' : ''}><span><b>Publicada</b><br><small>Los compradores pueden verla y comprarla.</small></span></label>
    <p class="w-btnrow w-span2"><button class="w-btn w-btn--primary" type="submit">${icon('check', 18)}Guardar</button><span class="w-muted w-sm" data-ok aria-live="polite"></span></p></form>`)}
  ${card(`<h2>Precios</h2><p class="w-muted w-sm">Puedes poner precios por cantidad y programar cambios con fecha.</p><p class="w-eyebrow">Rigen ahora</p><ul class="w-prices">${ahora.map(fila).join('')}</ul>${prog.length ? `<p class="w-eyebrow">Programados</p><ul class="w-prices">${prog.map(fila).join('')}</ul>` : ''}
    <h3>Poner un precio</h3><form class="w-grid3" novalidate data-precio><div class="w-field"><label for="np-d">Desde cuántas</label><input class="w-input" id="np-d" type="number" min="1" value="5"></div><div class="w-field"><label for="np-i">Importe (USD)</label><input class="w-input" id="np-i" inputmode="decimal" placeholder="$ 0,00"></div><div class="w-field"><label for="np-f">Empieza el</label><input class="w-input" id="np-f" type="date" min="2026-10-16"><small class="w-muted">Vacío: desde ahora</small></div>
    <p class="w-field__err w-span3" data-err hidden></p><button class="w-btn w-btn--soft" type="submit">${icon('add', 18)}Poner el precio</button></form>`)}
  ${card(`<h2>Inventario</h2><p class="w-stockbig"><b>${pr.stock}</b> ${pr.stock === 1 ? 'unidad' : 'unidades'}</p><p class="w-muted w-sm">Ya descuenta los pedidos pagados.</p><hr class="w-hr">
    <h3>Anotar un ajuste</h3><form class="w-adj" novalidate data-ajuste><div class="w-field"><label for="aj-d">Diferencia</label><input class="w-input" id="aj-d" placeholder="+3" inputmode="numeric"><small class="w-muted">Número con signo: +3 o −3</small></div><div class="w-field"><label for="aj-m">Motivo</label><input class="w-input" id="aj-m" placeholder="Llegó mercancía del proveedor" maxlength="80"></div>
    <p class="w-field__err w-span2" data-err hidden></p><p class="w-btnrow w-span2"><button class="w-btn w-btn--soft" type="submit">${icon('edit', 18)}Anotar el ajuste</button><span class="w-muted w-sm">Un movimiento anotado no se edita ni se borra.</span></p></form>
    <p class="w-eyebrow">Últimos movimientos</p><ul class="w-movs">${o.movs.map(([d, f, m]) => `<li><b class="${d < 0 ? 'w-bad' : 'w-info'}">${d > 0 ? '+' : '−'}${Math.abs(d)}</b><small>${f}</small><span>${esc(m)}</span></li>`).join('')}</ul>`)}</div>`; },
(root, q) => {
  const pr = S.productos.find((x) => x.id === q.id) || S.productos[0], o = S.oferta;
  root.querySelector('[data-mia]').addEventListener('submit', (e) => { e.preventDefault(); const f = e.target; pr.sku = f.querySelector('#eo-c').value.trim() || pr.sku; o.cond = f.querySelector('#eo-k').value; pr.on = f.querySelector('#eo-pub').checked; f.querySelector('[data-ok]').textContent = 'Guardado.'; toast('Oferta guardada'); });
  root.addEventListener('click', (e) => { const b = e.target.closest('[data-quitar]'); if (!b) return; if (o.precios.filter((x) => !x.prog).length === 1 && !o.precios[b.dataset.quitar].prog) { toast('Tiene que quedar al menos un precio vigente'); return; } o.precios.splice(Number(b.dataset.quitar), 1); toast('Precio quitado'); rerender(); });
  root.querySelector('[data-precio]').addEventListener('submit', (e) => {
    e.preventDefault(); const f = e.target, d = Number(f.querySelector('#np-d').value), i = parseMoney(f.querySelector('#np-i').value), fe = f.querySelector('#np-f').value;
    if (errBox(f, !(Number.isInteger(d) && d >= 1) ? 'La cantidad mínima es 1.' : i <= 0 ? 'Pon un importe mayor que 0.' : fe && new Date(`${fe}T00:00`) < HOY ? 'La fecha no puede ser pasada.' : '')) return;
    o.precios.push({ desde: d, imp: i, ...(fe ? { prog: fe.split('-').reverse().join('/') } : {}) }); o.precios.sort((a, b) => !!a.prog - !!b.prog || a.desde - b.desde); toast('Precio puesto'); rerender();
  });
  root.querySelector('[data-ajuste]').addEventListener('submit', (e) => {
    e.preventDefault(); const f = e.target, raw = f.querySelector('#aj-d').value.trim().replace('−', '-'), m = f.querySelector('#aj-m').value.trim(), d = Number(raw);
    if (errBox(f, !/^[+-]\d+$/.test(raw) || d === 0 ? 'Escribe la diferencia con signo, por ejemplo +3 o -3.' : pr.stock + d < 0 ? `No puedes quitar más de ${pr.stock} unidades.` : m.length < 4 ? 'Escribe el motivo del ajuste.' : '')) return;
    pr.stock += d; o.movs.unshift([d, '16/10/2026', m]); toast(`Ajuste anotado: ahora hay ${pr.stock} unidades`); rerender();
  });
});

// ── 09.06 · Datos de la tienda ──────────────────────────────────────────────
const CAMPOS = [['comercial', 'Nombre comercial', 'Así te ven en la tienda pública.'], ['razon', 'Razón social legal', 'Tal como aparece en tu RIF.'], ['email', 'Correo corporativo', ''], ['web', 'Sitio web oficial', '']];
const datos = pageT('09.06', 'Datos de la tienda', () => panelT('datos-tienda', `${head([['Mi tienda', '#/mi-tienda'], ['Datos de la tienda']], 'Datos de la Empresa', 'Tu logo, tu identidad fiscal y los datos con los que te ven tus compradores.')}
  ${card(`<div class="w-card2__head"><h2>Logo de la tienda</h2>${S.logo ? `<button class="w-btn w-btn--text" type="button" data-quitarlogo>${icon('trash', 18)}Quitar logo</button>` : ''}</div><p class="w-muted w-sm">Tu logo se enseña en la tienda pública y junto a tus ofertas. Tu foto personal es otra y se cambia desde tu cuenta.</p>
    <div class="w-logo2"><span class="w-logo2__box${S.logo ? ' is-on' : ''}">${S.logo ? 'FT' : `${icon('camera', 24)}<b>LOGO</b><small>Cuadrado · 512 × 512</small>`}</span><div><p class="w-btnrow"><label class="w-btn w-btn--soft">${icon('upload', 18)}Cambiar<input type="file" class="w-sr" accept="image/png,image/jpeg,image/webp" data-logo></label><button class="w-btn w-btn--ghost" type="button" data-toast="La cámara se abre en el teléfono">${icon('camera', 18)}Tomar foto</button></p>${S.logo ? badge('Logo guardado.', 'info', 'check') : ''}</div></div>`)}
  ${card(`<div class="w-card2__head"><div><p class="w-muted w-sm">Identificador Fiscal / RIF</p><p class="w-rif">J-41234567-8</p></div>${badge('Sin verificar', 'bad', 'error')}</div><p class="w-muted w-sm">El RIF no se puede editar. Mientras la empresa no esté verificada, tus ofertas no se publican.</p><a class="w-link" href="#/tienda-documentos">Ver documentos pendientes ${icon('chevron', 18)}</a>
    <p class="w-chiprow"><span class="w-sm">Tipo de registro:</span>${badge('Vende', 'neutral', 'store')}${S.figuras.importa ? badge('Importadora', 'neutral', 'truck') : ''}${S.figuras.servicios ? badge('Empresa de servicios', 'neutral', 'wrench') : ''}</p>
    <h3>Añadir una figura</h3><ul class="w-figs">${[['importa', 'Importadora', 'truck', 'Publica fichas de producto y sus compatibilidades para que otras vendan.', '#/mis-fichas'], ['servicios', 'Empresa de servicios', 'users', 'Recibe solicitudes de instalación y reparación con tus técnicos.', '#/empresa-agenda']].map(([k, n, ic, d, href]) => `<li>${icon(ic, 24)}<b>${n}</b><small>${d}</small>${S.figuras[k] ? `<a class="w-btn w-btn--ghost" href="${href}">${icon('chevron', 18)}Abrir</a>` : `<button class="w-btn w-btn--ghost" type="button" data-fig="${k}">${icon('add', 18)}Añadir</button>`}</li>`).join('')}</ul>`)}
  ${card(`<h2>Configuración Comercial y Facturación</h2><form class="w-grid2" novalidate data-datos>${CAMPOS.map(([k, l, h]) => `<div class="w-field"><label for="dt-${k}">${l}</label><input class="w-input" id="dt-${k}" data-k="${k}" value="${esc(S.datos[k])}"${k === 'email' ? ' type="email"' : ''}>${h ? `<small class="w-muted">${h}</small>` : ''}</div>`).join('')}
    <div class="w-span2">${area('dt-dir', 'Dirección física de almacén / sucursal', S.datos.dir, 300)}</div><div class="w-span2" data-msg aria-live="polite"></div>
    <p class="w-btnrow w-span2"><button class="w-btn w-btn--primary" type="submit" disabled data-save>${icon('check', 18)}Guardar datos de la tienda</button><span class="w-muted w-sm" data-dirty>Sin modificaciones pendientes</span></p></form>`)}`),
(root) => {
  wireCounts(root); const f = root.querySelector('[data-datos]'), val = () => ({ ...Object.fromEntries(CAMPOS.map(([k]) => [k, f.querySelector(`#dt-${k}`).value.trim()])), dir: f.querySelector('#dt-dir').value.trim() });
  f.addEventListener('input', () => { const v = val(), dirty = Object.keys(v).some((k) => v[k] !== S.datos[k]); f.querySelector('[data-save]').disabled = !dirty; f.querySelector('[data-dirty]').textContent = dirty ? 'Tienes cambios sin guardar' : 'Sin modificaciones pendientes'; f.querySelector('[data-msg]').innerHTML = ''; });
  f.addEventListener('submit', (e) => { e.preventDefault(); const v = val(), box = f.querySelector('[data-msg]');
    const m = v.comercial.length < 3 ? 'Escribe el nombre comercial.' : !/^\S+@\S+\.\S+$/.test(v.email) ? 'El correo corporativo no es válido.' : v.dir.length < 10 ? 'Escribe la dirección completa del almacén.' : '';
    if (m) { box.innerHTML = notice('bad', 'error', m); return; } S.datos = v; box.innerHTML = notice('info', 'check', 'Datos actualizados correctamente'); f.querySelector('[data-save]').disabled = true; f.querySelector('[data-dirty]').textContent = 'Sin modificaciones pendientes'; });
  root.querySelector('[data-logo]').addEventListener('change', (e) => { const x = e.target.files[0]; if (!x) return; if (x.size > 5e6) { toast('El logo pesa más de 5 MB'); return; } S.logo = true; toast('Logo guardado'); rerender(); });
  root.addEventListener('click', (e) => { if (e.target.closest('[data-quitarlogo]')) { S.logo = false; toast('Quitaste el logo'); rerender(); } const b = e.target.closest('[data-fig]'); if (b) { S.figuras[b.dataset.fig] = true; toast('Figura añadida: VexBiz revisa la solicitud en 24 a 48 h'); rerender(); } });
});

// ── 09.07 · Envíos ──────────────────────────────────────────────────────────
const quien = (r) => (r.t === 100 ? 'Tu tienda paga el 100%; para el cliente es gratis.' : r.c === 100 ? 'El comprador paga el 100% del envío.' : `El comprador paga el ${r.c}%${r.t ? ` y tu tienda el ${r.t}%` : ''}${r.v ? ` y VexBiz el ${r.v}%` : ''}.`);
const PRESETS = [['gratis', 'Gratis para el cliente (100% tienda)', [0, 100, 0]], ['comprador', '100% comprador', [100, 0, 0]], ['mitad', '50% tienda / 50% cliente', [50, 50, 0]]];
const envios = pageT('09.07', 'Envíos', () => panelT('envios', `${head([['Mi tienda', '#/mi-tienda'], ['Reglas de envío']], 'Tarifas y Reparto de Envío', 'Decide cuánto cuesta el envío y quién lo paga: el comprador, tu tienda o VexBiz.')}
  <h2 class="w-h2">Tus Reglas Activas</h2>
  <ul class="w-cat">${S.reglas.map((r) => `<li class="w-panel w-card2" data-r="${r.id}"><div class="w-card2__head"><h3>${icon('truck', 22)}${esc(r.n)} ${r.on ? '' : badge('Pausada', 'neutral', 'pause')}</h3><b>${money(r.costo)} por envío</b></div><div class="w-card2__head"><p class="w-muted">${quien(r)}</p><span class="w-btnrow"><button class="w-btn w-btn--text" type="button" data-pausa="${r.id}">${icon(r.on ? 'pause' : 'play', 18)}${r.on ? 'Pausar' : 'Activar'}</button><button class="w-btn w-btn--text" type="button" data-quitar="${r.id}">${icon('trash', 18)}Quitar</button></span></div><div data-slot></div></li>`).join('')}</ul>
  ${card(`<h2>Crear Nueva Regla de Envío</h2><form class="w-grid2" novalidate data-regla><div class="w-field"><label for="rg-n">Nombre descriptivo</label><input class="w-input" id="rg-n" placeholder="Envío Valencia" maxlength="40"></div><div class="w-field"><label for="rg-flete">Costo fijo de flete</label><input class="w-input" id="rg-flete" inputmode="decimal" placeholder="$ 8,00"></div>
    <div class="w-span2"><p class="w-label">Reparto porcentual del flete (debe sumar exactamente 100%)</p>${seg('preset', PRESETS.map(([k, t]) => [k, t]), 'mitad')}</div>
    <div class="w-grid3 w-span2">${[['c', 'Quien compra (cliente)', 50], ['t', 'Mi tienda (vendedor)', 50], ['v', 'VexBiz (plataforma)', 0]].map(([k, l, v]) => `<div class="w-field"><label for="rg-${k}">${l}</label><input class="w-input" id="rg-${k}" type="number" min="0" max="100" value="${v}" data-pct></div>`).join('')}</div>
    <div class="w-span2" data-sum></div><p class="w-btnrow w-span2"><button class="w-btn w-btn--primary" type="submit" data-crear disabled>${icon('add', 18)}Crear regla</button><span class="w-muted w-sm">El botón se activa cuando la suma da 100% y la regla tiene nombre.</span></p></form>`)}`),
(root) => {
  const f = root.querySelector('[data-regla]'); wireSeg(root);
  const pct = () => ['c', 't', 'v'].map((k) => Number(f.querySelector(`#rg-${k}`).value) || 0);
  const check = () => { const s = pct().reduce((a, b) => a + b, 0), ok = s === 100; f.querySelector('[data-sum]').innerHTML = ok ? notice('info', 'check', `<b>Suma: 100%</b>${quien({ c: pct()[0], t: pct()[1], v: pct()[2] })}`) : notice('bad', 'error', `<b>Suma: ${s}% de 100%</b>(${s < 100 ? `Falta asignar el ${100 - s}%` : `Sobra el ${s - 100}%`})`); f.querySelector('[data-crear]').disabled = !(ok && f.querySelector('#rg-n').value.trim()); };
  f.addEventListener('change', (e) => { if (e.target.name !== 'preset') return; PRESETS.find(([k]) => k === e.target.value)[2].forEach((v, i) => { f.querySelector(`#rg-${'ctv'[i]}`).value = v; }); check(); });
  f.addEventListener('input', check); check();
  f.addEventListener('submit', (e) => { e.preventDefault(); const c = parseMoney(f.querySelector('#rg-flete').value); if (c < 0 || !f.querySelector('#rg-flete').value.trim()) { toast('Pon el costo del flete (puede ser 0)'); return; } const [pc, pt, pv] = pct(); S.reglas.push({ id: `r${Date.now()}`, n: f.querySelector('#rg-n').value.trim(), costo: c, c: pc, t: pt, v: pv, on: true }); toast('Regla de envío creada'); rerender(); });
  root.addEventListener('click', (e) => {
    const p = e.target.closest('[data-pausa]'), q = e.target.closest('[data-quitar]'), y = e.target.closest('[data-yes]'), n = e.target.closest('[data-no]');
    if (p) { const r = S.reglas.find((x) => x.id === p.dataset.pausa); r.on = !r.on; toast(r.on ? `${r.n} activa` : `${r.n} pausada`); rerender(); }
    if (q) { const slot = q.closest('li').querySelector('[data-slot]'); slot.innerHTML = notice('warn', 'warning', '¿Quitar esta regla? Los pedidos ya pagados mantienen su envío.', `<span class="w-btnrow"><button class="w-btn w-btn--danger" type="button" data-yes="${q.dataset.quitar}">Quitar</button><button class="w-btn w-btn--text" type="button" data-no>Cancelar</button></span>`); }
    if (y) { S.reglas = S.reglas.filter((x) => x.id !== y.dataset.yes); toast('Regla quitada'); rerender(); }
    if (n) n.closest('[data-slot]').innerHTML = '';
  });
});

// ── 09.08 · Cupones ─────────────────────────────────────────────────────────
const descr = (c) => `${c.tipo === 'pct' ? `${c.val}% de descuento` : `${money(c.val)} de descuento`}${c.primera ? ' en tu primera compra' : c.min ? ` en compras desde ${money(c.min)}` : ''}`;
const cupones = pageT('09.08', 'Cupones', () => panelT('cupones', `${head([['Mi tienda', '#/mi-tienda'], ['Cupones']], 'Cupones de Descuento', 'Crea códigos de descuento para tus clientes. Un cupón no se borra: se pausa.')}
  <h2 class="w-h2">Cupones Activos e Históricos</h2>
  <ul class="w-cat">${S.cupones.map((c, i) => `<li class="w-panel w-card2"><div class="w-card2__head"><p class="w-chiprow"><span class="w-code">${icon('tag', 18)}${c.code}</span>${c.estado === 'pausado' ? badge('Pausado', 'neutral', 'pause') : c.estado === 'caducado' ? `${badge('Caducado', 'bad')}${badge('Usos agotados', 'bad')}` : ''}</p>${c.estado === 'caducado' ? '' : `<button class="w-btn w-btn--ghost" type="button" data-cup="${i}">${icon(c.estado === 'activo' ? 'pause' : 'play', 18)}${c.estado === 'activo' ? 'Pausar' : 'Reactivar'}</button>`}</div>
    <p>${descr(c)}</p><p class="w-muted w-sm">Usado ${c.usados}${c.tope ? ` de ${c.tope}` : ''} veces${c.persona ? ` · ${c.persona} por persona` : c.tope ? '' : ' · sin límite'}</p></li>`).join('')}</ul>
  ${card(`<h2>Crear Nuevo Cupón de Descuento</h2><form class="w-grid2" novalidate data-cupon>
    <div class="w-field"><label for="cp-c">Código promocional (en mayúsculas)</label><input class="w-input w-input--code" id="cp-c" maxlength="16" placeholder="NAVIDAD20" autocapitalize="characters"></div>
    <div class="w-field"><span class="w-label">Modalidad de descuento</span>${seg('tipo', [['pct', 'Porcentaje (%)'], ['fijo', 'Importe fijo ($)']], 'pct')}</div>
    <div class="w-field"><label for="cp-v">Valor del descuento</label><input class="w-input" id="cp-v" inputmode="decimal" placeholder="20"><small class="w-muted" data-vh>Entre 1% y 90%.</small></div>
    <div class="w-field"><label for="cp-m">Monto mínimo de compra</label><input class="w-input" id="cp-m" inputmode="decimal" placeholder="$ 40,00"><small class="w-muted">Opcional.</small></div>
    <div class="w-field"><label for="cp-t">Límite de usos totales</label><input class="w-input" id="cp-t" type="number" min="1" placeholder="150"><small class="w-muted">Opcional.</small></div>
    <div class="w-field"><label for="cp-p">Límite de usos por persona</label><input class="w-input" id="cp-p" type="number" min="1" placeholder="1"><small class="w-muted">Opcional.</small></div>
    <div class="w-field"><label for="cp-f">Fecha de vencimiento</label><input class="w-input" id="cp-f" type="date" min="2026-10-17"><small class="w-muted">Opcional.</small></div>
    <div class="w-field"><label for="cp-l">Leyenda / descripción interna</label><input class="w-input" id="cp-l" placeholder="Campaña de diciembre" maxlength="60"></div>
    <label class="w-check w-span2"><input type="checkbox" id="cp-on" checked>Cupón activo y habilitado para canje</label>
    <div class="w-notebox w-span2"><small>Vista previa de la regla:</small><p data-prev>Escribe el código y el valor para ver la regla.</p></div>
    <p class="w-field__err w-span2" data-err hidden></p><button class="w-btn w-btn--primary" type="submit">${icon('add', 18)}Crear cupón</button></form>`)}`),
(root) => {
  const f = root.querySelector('[data-cupon]'); wireSeg(root);
  const v = () => ({ code: f.querySelector('#cp-c').value.trim().toUpperCase(), tipo: f.querySelector('[name=tipo]:checked').value, val: parseMoney(f.querySelector('#cp-v').value), min: parseMoney(f.querySelector('#cp-m').value), tope: Number(f.querySelector('#cp-t').value) || 0, persona: Number(f.querySelector('#cp-p').value) || 0, fecha: f.querySelector('#cp-f').value });
  const prev = () => { const c = v(); f.querySelector('#cp-c').value = c.code; f.querySelector('[data-vh]').textContent = c.tipo === 'pct' ? 'Entre 1% y 90%.' : 'Mayor que $ 0.';
    f.querySelector('[data-prev]').textContent = c.code && c.val ? `Con ${c.code} el cliente se ahorra ${c.tipo === 'pct' ? `el ${c.val}%` : money(c.val)}${c.min ? ` en compras desde ${money(c.min)}` : ''}.${c.tope ? ` Se puede usar ${c.tope} veces` : ' Sin límite de usos'}${c.persona ? `, ${c.persona} por persona` : ''}${c.fecha ? `, hasta el ${c.fecha.split('-').reverse().join('/')}` : ''}.` : 'Escribe el código y el valor para ver la regla.'; };
  f.addEventListener('input', prev); f.addEventListener('change', prev);
  f.addEventListener('submit', (e) => { e.preventDefault(); const c = v();
    if (errBox(f, !/^[A-Z0-9]{4,16}$/.test(c.code) ? 'El código lleva de 4 a 16 letras o números, sin espacios.' : S.cupones.some((x) => x.code === c.code) ? 'Ya tienes un cupón con ese código.' : c.tipo === 'pct' && !(c.val >= 1 && c.val <= 90) ? 'El porcentaje va entre 1% y 90%.' : c.val <= 0 ? 'Pon un valor de descuento.' : c.tipo === 'fijo' && c.min && c.val >= c.min ? 'El descuento fijo tiene que ser menor que el mínimo de compra.' : '')) return;
    S.cupones.unshift({ ...c, usados: 0, estado: f.querySelector('#cp-on').checked ? 'activo' : 'pausado' }); toast(`Cupón ${c.code} creado`); rerender(); });
  root.addEventListener('click', (e) => { const b = e.target.closest('[data-cup]'); if (!b) return; const c = S.cupones[b.dataset.cup]; c.estado = c.estado === 'activo' ? 'pausado' : 'activo'; toast(`${c.code} ${c.estado === 'activo' ? 'reactivado' : 'pausado'}`); rerender(); });
});

export const RUTAS_TIENDA1 = { 'mi-tienda': panel, 'pedido-tienda': pedido, 'tienda-documentos': documentos, 'mis-productos': productos, 'editar-oferta': oferta, 'datos-tienda': datos, envios, cupones };
export { productArt };
