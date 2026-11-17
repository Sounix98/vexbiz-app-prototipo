// 09 · Mi tienda (2/2): cuentas bancarias, liquidaciones, ventas, reseñas, cómo se te ve, reclamos e importadora.
import { icon, esc, money, badge, notice, toast, productArt } from '../kit.js';
import { head, card, pager, area, wireCounts } from './tecnico.js';
import { panelT, pageT, rerender, errBox, seg, wireSeg, ST } from './tienda.js';

const BANCOS = [['0102', 'Banco de Venezuela'], ['0134', 'Banesco'], ['0105', 'Mercantil'], ['0108', 'Provincial'], ['0191', 'BNC']];
const S = (globalThis.__vxTienda2 ||= {
  cuentas: [{ id: 'b1', banco: 'Banco de Venezuela', num: '01020123450001234567', tipo: 'Cuenta Corriente', principal: true }, { id: 'b2', banco: 'Banesco', num: '01340987650000008890', tipo: 'Cuenta de Ahorros' }],
  retiradas: [{ banco: 'Provincial', num: '01080000000000002210', tipo: 'Cuenta Corriente', cuando: '12/08/2026' }], // INVENTADO: el Figma solo dice «1 cuenta retirada»
  devs: [
    { id: 'VX-20211', fecha: '16/10/2026', monto: 19.6, estado: 'Solicitada', motivo: 'La regleta no enciende al conectarla.', art: 'Regleta con protector de voltaje 6 tomas' },
    { id: 'VX-20188', fecha: '05/10/2026', monto: 64, estado: 'Aprobada', motivo: 'Me enviaron la tarjeta de un modelo distinto.', art: 'Tarjeta electrónica condensadora split 12K' },
  ],
  hilo: [['Comprador', '03/10/2026 · 10:12', 'Pedí el control para un LG y me llegó uno que no lo reconoce.'], ['Tu tienda', '03/10/2026 · 15:40', 'Hola Carmen, lamentamos el inconveniente. Podemos cambiarlo por el modelo correcto sin costo.'], ['Comprador', '04/10/2026 · 09:05', 'Prefiero el reembolso, por favor.']],
  fichas: [
    { id: 'f1', t: 'Compresor rotativo 12.000 BTU R410A', marca: 'GMCC', modelo: 'PA108X1C', cat: 'Repuestos de climatización', gtin: '6901234567892', tiendas: 7, art: 'compressor', desc: 'Compresor rotativo para equipos split de 12.000 BTU con refrigerante R410A. 220 V / 60 Hz. Incluye capacitor y gomas de montaje.', abierta: true,
      compat: [['LG', 'S4-Q12JA3AA', 'Split pared · Unidad exterior'], ['Samsung', 'AR12TVHZDWK', 'Split pared'], ['Daikin', '', 'Split pared · Sólo modelos 220 V'], ['Midea', 'MSAFB-12CRN8', 'Split pared']], ncompat: 14 },
    { id: 'f2', t: 'Tarjeta electrónica condensadora split 12K', marca: 'Midea', modelo: '17122000A', cat: 'Tarjetas y controles', gtin: '6909876543212', tiendas: 1, art: 'board', desc: 'Tarjeta de control de la unidad condensadora para equipos split de 12.000 BTU.', abierta: true, compat: [['Midea', 'MSAFB-12CRN8', 'Split pared']], ncompat: 6 },
    { id: 'f3', t: 'Motor ventilador evaporador 18W', marca: 'Welling', modelo: 'YDK18-6G', cat: 'Motores', gtin: '', tiendas: 0, art: 'motor', desc: 'Motor del ventilador de la evaporadora, 18 W.', abierta: false, compat: [], ncompat: 0 },
  ],
});
const mask = (n) => `${n.slice(0, 4)} •••• •••• ${n.slice(-4)}`;

// ── 09.09 · Cuentas bancarias ───────────────────────────────────────────────
const cuentas = pageT('09.09', 'Cuentas bancarias', () => panelT('cuentas-banco', `${head([['Mi tienda', '#/mi-tienda'], ['Cuentas bancarias']], 'Cuentas de Cobro y Depósito', 'Dónde recibes el dinero de tus ventas y tus liquidaciones.')}
  ${card(`<div class="w-card2__head"><h2 class="w-h-ico w-h-ico--plain">${icon('swap', 24)}Cobro inmediato</h2>${badge('Activo', 'info', 'check')}</div><p class="w-muted w-sm">Cuando el cliente paga, recibes tu venta en ese momento en tu banco, sin esperar al corte de la liquidación. Tus datos fueron revisados y el cobro inmediato está funcionando.</p>
    <form class="w-grid2" novalidate data-cobro><div class="w-field"><label for="ci-t">Titular (nombre o razón social)</label><input class="w-input" id="ci-t" value="Frío Total Servicios C.A."></div>
    <div class="w-field"><label for="ci-d">Documento del titular (RIF o cédula)</label><span class="w-pair"><select class="w-input" aria-label="Tipo de documento"><option>J</option><option>V</option><option>E</option><option>G</option></select><input class="w-input" id="ci-d" value="41234567-8"></span></div>
    <div class="w-field"><span class="w-label">El titular es</span>${seg('titular', [['comercio', 'Comercio'], ['persona', 'Persona']], 'comercio')}</div>
    <div class="w-field"><label for="ci-b">Banco</label><select class="w-input" id="ci-b">${BANCOS.map(([c, n]) => `<option value="${c}">${c} · ${n}</option>`).join('')}</select></div>
    <div class="w-field"><label for="ci-e">Correo de contacto</label><input class="w-input" id="ci-e" type="email" value="pagos@friototal.com"></div>
    <div class="w-field"><label for="ci-tel">Teléfono de contacto</label><input class="w-input" id="ci-tel" inputmode="tel" value="0412 555 1234"></div>
    <div class="w-field"><span class="w-label">Recibir en</span>${seg('recibir', [['cuenta', 'Cuenta bancaria'], ['movil', 'Pago móvil']], 'cuenta')}</div>
    <div class="w-field"><label for="ci-n">Número de cuenta (20 dígitos)</label><input class="w-input" id="ci-n" inputmode="numeric" value="0102 0123 45 0001234567"><small class="w-muted" data-coin>La cuenta coincide con el banco elegido</small></div>
    <div class="w-span2">${notice('neutral', 'info', 'Si cambias la cuenta, el cobro inmediato vuelve a revisión y mientras tanto cobrarás en la liquidación.')}</div>
    <p class="w-field__err w-span2" data-err hidden></p><button class="w-btn w-btn--primary" type="submit">${icon('check', 18)}Guardar datos de cobro</button></form>`)}
  ${card(`<h2>Últimos abonos</h2><ul class="w-abonos"><li>${icon('check', 20)}<span><b>Pedido #VX-20412 · 16/10/2026</b><small>Comisión del banco Bs 9,00 · Ref. 778812</small></span><b>Bs 4.512,30</b></li><li>${icon('clock', 20)}<span><b>Pedido #VX-20409 · 16/10/2026</b><small>esperando al banco</small></span><b>—</b></li><li class="is-bad">${icon('error', 20)}<span><b>Pedido #VX-20390 · 14/10/2026</b><small>No se pudo abonar · VexBiz lo está revisando</small></span><b>—</b></li></ul>`)}
  <h2 class="w-h2">Cuentas Bancarias Activas</h2>
  <ul class="w-cat">${S.cuentas.map((c) => `<li class="w-panel w-card2"><h3>${icon('store', 22)}${esc(c.banco)} ${c.principal ? badge('Principal en USD', 'brand', 'star') : ''}</h3><p>${mask(c.num)} · ${c.tipo}</p><p class="w-muted w-sm">Titular: Frío Total Servicios C.A. · J-41234567-8</p>
    <p class="w-btnrow">${c.principal ? '' : `<button class="w-btn w-btn--text" type="button" data-princ="${c.id}">${icon('star', 18)}Hacer principal</button>`}<button class="w-btn w-btn--text" type="button" data-toast="Para editar una cuenta, retírala y añádela de nuevo">${icon('edit', 18)}Editar</button><button class="w-btn w-btn--text" type="button" data-retirar="${c.id}">${icon('trash', 18)}Quitar</button></p></li>`).join('')}</ul>
  <details class="w-panel w-paused"><summary>${S.retiradas.length} ${S.retiradas.length === 1 ? 'cuenta retirada' : 'cuentas retiradas'}…</summary><ul>${S.retiradas.map((c) => `<li><span>${esc(c.banco)} · ${mask(c.num)} · ${c.tipo}</span><small class="w-muted">Retirada el ${c.cuando}</small></li>`).join('')}</ul></details>
  ${card(`<h2>Añadir Nueva Cuenta Bancaria</h2><form class="w-grid2" novalidate data-nueva>
    <div class="w-field"><label for="nb-b">Nombre de la entidad bancaria</label><select class="w-input" id="nb-b">${BANCOS.map(([c, n]) => `<option value="${c}"${c === '0105' ? ' selected' : ''}>${n}</option>`).join('')}</select></div>
    <div class="w-field"><label for="nb-n">Número de cuenta bancaria</label><input class="w-input" id="nb-n" inputmode="numeric" maxlength="24" placeholder="01050012345678901234"><small class="w-muted">Sólo dígitos.</small></div>
    <div class="w-field"><label for="nb-t">Tipo de cuenta</label><select class="w-input" id="nb-t"><option>Cuenta Corriente</option><option>Cuenta de Ahorros</option></select></div>
    <div class="w-field"><label for="nb-h">Nombre completo del titular</label><input class="w-input" id="nb-h" value="Frío Total Servicios C.A."></div>
    <div class="w-field"><label for="nb-i">Identificación fiscal / cédula del titular</label><input class="w-input" id="nb-i" value="J-41234567-8"></div>
    <label class="w-check w-span2"><input type="checkbox" id="nb-p">Marcar como cuenta principal en su moneda</label>
    <dl class="w-liq w-notebox w-span2" data-conf></dl><p class="w-field__err w-span2" data-err hidden></p><button class="w-btn w-btn--primary" type="submit">${icon('add', 18)}Añadir cuenta bancaria</button></form>`)}`),
(root) => {
  wireSeg(root); const fc = root.querySelector('[data-cobro]'), fn = root.querySelector('[data-nueva]'), dig = (s) => s.replace(/\D/g, '');
  const coin = () => { const n = dig(fc.querySelector('#ci-n').value), ok = n.length === 20 && n.startsWith(fc.querySelector('#ci-b').value), el = fc.querySelector('[data-coin]'); el.textContent = n.length !== 20 ? `Lleva ${n.length} de 20 dígitos` : ok ? 'La cuenta coincide con el banco elegido' : 'Los 4 primeros dígitos no son de ese banco'; el.classList.toggle('w-bad', !ok); return ok; };
  fc.addEventListener('input', coin); fc.addEventListener('change', coin);
  fc.addEventListener('submit', (e) => { e.preventDefault(); if (errBox(fc, !coin() ? 'Revisa el número de cuenta: 20 dígitos del banco elegido.' : !/^\S+@\S+\.\S+$/.test(fc.querySelector('#ci-e').value) ? 'El correo no es válido.' : '')) return; toast('Datos de cobro guardados: el cobro inmediato vuelve a revisión'); });
  const conf = () => { const b = fn.querySelector('#nb-b'), n = dig(fn.querySelector('#nb-n').value); fn.querySelector('[data-conf]').innerHTML = `<div><dt>Confirmación de datos a registrar</dt><dd></dd></div><div><dt>Banco</dt><dd>${b.options[b.selectedIndex].text}</dd></div><div><dt>Cuenta</dt><dd>${n ? `${n.replace(/(\d{4})(\d{4})?(\d{2})?(\d+)?/, (m, a, c, d, r) => [a, c, d, r].filter(Boolean).join(' '))} · ${fn.querySelector('#nb-t').value.replace('Cuenta ', '')}` : '—'}</dd></div><div><dt>Titular</dt><dd>${esc(fn.querySelector('#nb-h').value)} · ${esc(fn.querySelector('#nb-i').value)}</dd></div>`; };
  fn.addEventListener('input', conf); fn.addEventListener('change', conf); conf();
  fn.addEventListener('submit', (e) => { e.preventDefault(); const b = fn.querySelector('#nb-b'), n = dig(fn.querySelector('#nb-n').value);
    if (errBox(fn, n.length !== 20 ? 'El número de cuenta lleva 20 dígitos.' : !n.startsWith(b.value) ? 'Los 4 primeros dígitos no corresponden a ese banco.' : S.cuentas.some((c) => c.num === n) ? 'Esa cuenta ya está registrada.' : fn.querySelector('#nb-h').value.trim().length < 3 ? 'Escribe el titular.' : '')) return;
    const p = fn.querySelector('#nb-p').checked; if (p) S.cuentas.forEach((c) => { c.principal = false; }); S.cuentas.push({ id: `b${Date.now()}`, banco: b.options[b.selectedIndex].text, num: n, tipo: fn.querySelector('#nb-t').value, principal: p }); toast('Cuenta añadida'); rerender(); });
  root.addEventListener('click', (e) => {
    const p = e.target.closest('[data-princ]'), r = e.target.closest('[data-retirar]');
    if (p) { S.cuentas.forEach((c) => { c.principal = c.id === p.dataset.princ; }); toast('Cuenta principal cambiada'); rerender(); }
    if (r) { const c = S.cuentas.find((x) => x.id === r.dataset.retirar); if (c.principal) { toast('Elige otra cuenta principal antes de quitar ésta'); return; } S.cuentas = S.cuentas.filter((x) => x !== c); S.retiradas.unshift({ ...c, cuando: '16/10/2026' }); toast('Cuenta retirada'); rerender(); }
  });
});

// ── 09.10 · Liquidaciones ───────────────────────────────────────────────────
const LIQ = [
  { p: '01/10/2026 — 15/10/2026', neto: 1642.3, estado: 'Programada', filas: [['Total de ventas brutas', 1820], ['Comisión del marketplace', -145.6], ['Retenciones tributarias', -27.3], ['Ajuste · devolución #VX-20211 (reintegro de comisión)', -4.8]] },
  { p: '16/09/2026 — 30/09/2026', neto: 1388.75, estado: 'Transferida', cuando: '02/10/2026', filas: [['Total de ventas brutas', 1540], ['Comisión del marketplace', -123.2], ['Retenciones tributarias', -28.05]] }, // INVENTADO: desglose de los períodos pasados
  { p: '01/09/2026 — 15/09/2026', neto: 1205.1, estado: 'Transferida', cuando: '17/09/2026', filas: [['Total de ventas brutas', 1336], ['Comisión del marketplace', -106.88], ['Retenciones tributarias', -24.02]] },
];
const liquidaciones = pageT('09.10', 'Liquidaciones', () => panelT('liquidaciones', `${head([['Mi tienda', '#/mi-tienda'], ['Liquidaciones']], 'Liquidaciones y Pagos', 'Lo que VexBiz te transfiere por cada período, con su desglose contable.')}
  <div class="w-req__bar">${pager()}</div>
  ${LIQ.map((l, i) => `<details class="w-panel w-liqcard"${i === 0 ? ' open' : ''}><summary><span><b>Período: ${l.p}</b>${l.cuando ? `<small>Transferido el ${l.cuando} (Banesco ···· 4417)</small>` : ''}</span><b class="w-liqcard__m">${money(l.neto)}</b>${badge(l.estado, l.estado === 'Programada' ? 'warn' : 'info')}<span class="w-liqcard__t" aria-hidden="true">${icon('chevron', 18)}</span></summary>
    <div class="w-notebox"><b>Detalle contable del período</b><dl class="w-liq">${l.filas.map(([t, v]) => `<div><dt>${t}</dt><dd${v < 0 ? ' class="w-bad"' : ''}>${v < 0 ? '− ' : ''}${money(Math.abs(v))}</dd></div>`).join('')}<div class="w-liq__tot"><dt>Total neto liquidado</dt><dd>${money(l.neto)}</dd></div></dl></div></details>`).join('')}`));

// ── 09.11 · Ventas ──────────────────────────────────────────────────────────
const MESES = [['Octubre 2026', 1680.4, 24], ['Septiembre 2026', 1420.1, 21], ['Agosto 2026', 1210, 18], ['Julio 2026', 980.55, 15], ['Junio 2026', 1105.3, 17], ['Mayo 2026', 860, 13]];
const ventas = pageT('09.11', 'Ventas', () => { const max = Math.max(...MESES.map((m) => m[1]));
  return panelT('ventas', `${head([['Mi tienda', '#/mi-tienda'], ['Mis ventas']], 'Reporte de Ventas', 'Últimos doce meses. Sólo cuenta pedidos pagados.')}
  ${card(`<div class="w-sales"><div><p class="w-muted">Ingreso neto acumulado</p><p class="w-sales__big"><b>${money(11481.15)}</b> USD</p><p class="w-muted">en 186 pedidos</p></div><dl class="w-liq"><div><dt>Total bruto vendido</dt><dd><b>${money(12480.6)}</b></dd></div><div><dt>Comisión VexBiz media (8 %)</dt><dd class="w-bad"><b>− ${money(999.45)}</b></dd></div><p class="w-muted w-sm">Las comisiones se congelan el día de cada venta.</p><a class="w-link" href="#/liquidaciones">${icon('chevron', 18)}Ver liquidaciones transferidas</a></dl></div>`)}
  ${card(`<h2>Evolución Mensual</h2><ul class="w-hbars" aria-label="Ventas por mes">${MESES.map(([m, v, n], i) => `<li><span>${m}</span><i class="${i === 0 ? 'is-now' : ''}" style="--w:${(v / max) * 100}%"></i><b>${money(v)}</b><small>${n} pedidos</small></li>`).join('')}</ul>`)}`); });

// ── 09.12 · Reseñas ─────────────────────────────────────────────────────────
const DIST = [[5, 31], [4, 4], [3, 1], [2, 0], [1, 1]];
const RES = [['María G.', 5, '14/10/2026', 'VX-20398', 'Llegó al día siguiente, bien embalado. Me ayudaron a elegir el kit correcto.'], ['José R.', 4, '09/10/2026', 'VX-20377', 'Buen precio, pero tardaron un día más de lo que decía el envío.'], ['Carmen D.', 1, '02/10/2026', 'VX-20301', 'El control remoto no funcionaba con mi modelo.']];
const estrellas = (n) => `<span class="w-stars5" role="img" aria-label="${n} de 5 estrellas">${[1, 2, 3, 4, 5].map((i) => `<i class="${i <= n ? 'is-on' : ''}">${icon('star', 16)}</i>`).join('')}</span>`;
const resenas = pageT('09.12', 'Reseñas', () => panelT('resenas', `${head([['Mi tienda', '#/mi-tienda'], ['Reseñas y opiniones']], 'Opiniones y Reputación', 'Lo que dicen tus compradores después de recibir sus pedidos.')}
  ${card(`<div class="w-rate"><div class="w-rate__big"><b>4,8</b>${estrellas(5)}<small>Basado en 37 opiniones verificadas</small></div><div><p class="w-sm"><b>Distribución de estrellas:</b></p><ul class="w-dist">${DIST.map(([s, n]) => `<li><span>${s} ${icon('star', 14)}</span><i style="--w:${(n / 31) * 100}%"></i><b>${n}</b></li>`).join('')}</ul></div></div>`)}
  <h2 class="w-h2">Comentarios Recientes</h2>
  ${RES.map(([q, n, f, ped, t]) => card(`<div class="w-card2__head"><p class="w-chiprow"><b>${q}</b>${estrellas(n)}<span class="w-muted w-sm">${f}</span></p><a class="w-link w-link--id" href="#/pedido-tienda?id=${ped}">#${ped}</a></div><p class="w-quote">«${esc(t)}»</p><p class="w-chiprow"><span class="w-muted w-sm">¿Deseas gestionar un reclamo o mediación sobre este pedido?</span><a class="w-link" href="#/tienda-reclamos">${icon('chevron', 18)}Ir a reclamos</a></p>`)).join('')}`));

// ── 09.13 · Cómo se te ve ───────────────────────────────────────────────────
const vitrina = pageT('09.13', 'Cómo se te ve', () => { const sinRegla = !ST.reglas.some((r) => r.on), sinDocs = ST.docs.some((d) => d.ob && d.estado !== 'verificado'), agot = ST.productos.filter((p) => p.stock === 0).length + 2;
  const tips = [[sinDocs, 'shield', 'Tu tienda no está verificada: los compradores no ven el sello de confianza.', 'Subir documentos requeridos', '#/tienda-documentos'], [agot, 'box', `${agot} artículos se agotaron y ya no aparecen en las búsquedas.`, 'Actualizar stock', '#/mis-productos'], [sinRegla, 'truck', 'No tienes una regla de envío activa: sólo puedes vender con retiro en tienda.', 'Configurar envíos', '#/envios'], [true, 'phone', 'No tienes teléfono de contacto: los compradores no pueden llamarte.', 'Añadir teléfono', '#/datos-tienda']].filter((x) => x[0]);
  return panelT('vitrina', `${head([['Mi tienda', '#/mi-tienda'], ['Cómo se te ve']], 'Diagnóstico de Vitrina Pública', 'Lo que ve un comprador cuando entra en tu tienda y lo que te falta para verte completa.')}
  <section class="w-panel w-card2 w-card2--warn"><h2 class="w-h-ico w-h-ico--plain">${icon('star', 24)}Oportunidades de mejora detectadas en tu vitrina</h2><ul class="w-tips">${tips.map(([, ic, t, a, href]) => `<li>${icon(ic, 20)}<span>${t}</span><a class="w-link" href="${href}">${a} ${icon('chevron', 16)}</a></li>`).join('')}</ul></section>
  <h2 class="w-h2">Así te ve el comprador</h2>
  ${card(`<div class="w-who"><span class="w-who__av w-who__av--ink" aria-hidden="true">FT</span><div><h2>${esc(ST.datos.comercial)} ${badge('Verificada por VexBiz', 'info', 'check')}</h2><p class="w-sm">${icon('star', 16)}<b>4,8</b> <span class="w-muted">· 37 opiniones</span></p></div></div>
    <ul class="w-facts2 w-facts2--1"><li>${icon('pin', 20)}<span>${esc(ST.datos.dir)}</span></li><li>${icon('phone', 20)}<span>0212 555 0101</span></li></ul>
    <p class="w-notebox">${icon('box', 18)}<b>46 productos disponibles para compra inmediata</b> <span class="w-muted">(${agot} agotados)</span></p>
    <a class="w-btn w-btn--primary" href="#/mis-productos">${icon('box', 18)}Administrar catálogo</a>`)}`); });

// ── 09.14 · Reclamos ────────────────────────────────────────────────────────
const ESTDEV = { Solicitada: 'warn', Aprobada: 'info', Rechazada: 'bad' };
const reclamos = pageT('09.14', 'Reclamos', () => panelT('tienda-reclamos', `${head([['Mi tienda', '#/mi-tienda'], ['Devoluciones y reclamos']], 'Devoluciones y Reclamos', 'Contesta las devoluciones y los reclamos de tus compradores en un solo sitio.')}
  <div class="w-req__bar w-req__bar--split"><h2 class="w-h2">Solicitudes de Devolución <small class="w-muted w-sm">${S.devs.length} en esta página</small></h2>${pager()}</div>
  ${S.devs.map((d) => card(`<div class="w-card2__head"><p class="w-chiprow"><a class="w-link w-link--id" href="#/pedido-tienda?id=${d.id}">#${d.id}</a><span class="w-muted w-sm">${d.fecha}</span></p><p class="w-chiprow"><b>Reembolso ${money(d.monto)}</b>${badge(d.estado, ESTDEV[d.estado])}</p></div>
    <div class="w-notebox"><small>Motivo del comprador:</small><p>${esc(d.motivo)}</p></div><p class="w-chiprow w-spread">${icon('box', 18)}<span>${esc(d.art)}</span><small class="w-muted">×1 unidades</small></p>
    <div class="w-btnrow" data-dev="${d.id}">${d.estado === 'Solicitada' ? `<button class="w-btn w-btn--primary" type="button" data-acep>${icon('check', 18)}Aceptar devolución</button><button class="w-btn w-btn--ghost" type="button" data-rech>${icon('close', 18)}Rechazar</button><span class="w-muted w-sm">Aceptar autoriza a VexBiz a procesar el reembolso.</span>` : d.estado === 'Aprobada' ? `<button class="w-btn w-btn--ghost" type="button" data-rech>Cambiar a rechazada</button><span class="w-muted w-sm">VexBiz ya está procesando el reembolso al comprador.</span>` : `<span class="w-muted w-sm">Rechazada: el comprador puede pedir la mediación de VexBiz.</span>`}</div>`)).join('')}
  <div class="w-req__bar w-req__bar--split"><h2 class="w-h2">Reclamos y Mediaciones <small class="w-muted w-sm">1 en esta página</small></h2>${pager()}</div>
  ${card(`<div class="w-card2__head"><p class="w-chiprow"><b>Reclamo #R-0091</b><a class="w-link" href="#/pedido-tienda?id=VX-20301">(Pedido #VX-20301)</a></p><p class="w-chiprow"><b>Reclamado ${money(12.5)}</b>${badge('En mediación', 'warn', 'flag')}</p></div>
    <div class="w-notebox"><small>Motivo inicial:</small><p>El control remoto no es compatible con mi equipo y la tienda no me responde.</p></div>
    <h3>Historial de mensajes</h3><ul class="w-thread" data-hilo>${S.hilo.map(([q, f, t]) => `<li class="${q === 'Tu tienda' ? 'w-thread__me' : 'w-thread__shop'}"><small>${q} · ${f}</small><p>${esc(t)}</p></li>`).join('')}</ul>
    <form class="w-formcol" novalidate data-resp>${area('rc-r', 'Responder al comprador y a los mediadores de VexBiz:', '', 1000, { help: 'No se pueden adjuntar fotos.', ph: 'Escribe tu respuesta…' })}<p class="w-field__err" data-err hidden></p><button class="w-btn w-btn--primary" type="submit">${icon('share', 18)}Enviar respuesta</button></form>`)}`),
(root) => {
  wireCounts(root);
  root.addEventListener('click', (e) => {
    const box = e.target.closest('[data-dev]'); if (!box) return; const d = S.devs.find((x) => x.id === box.dataset.dev);
    if (e.target.closest('[data-acep]')) { d.estado = 'Aprobada'; toast(`Devolución #${d.id} aceptada: VexBiz procesa el reembolso`); rerender(); }
    if (e.target.closest('[data-rech]')) { box.innerHTML = `<form class="w-inline" novalidate data-motivo><div class="w-field"><label for="mr-${d.id}">Motivo del rechazo</label><input class="w-input" id="mr-${d.id}" placeholder="Ej. el producto llegó con el sello roto" maxlength="120"></div><button class="w-btn w-btn--danger" type="submit">Rechazar</button><button class="w-btn w-btn--text" type="button" data-cancel>Cancelar</button></form>`; box.querySelector('input').focus(); }
    if (e.target.closest('[data-cancel]')) rerender();
  });
  root.addEventListener('submit', (e) => {
    e.preventDefault(); const m = e.target.closest('[data-motivo]'), r = e.target.closest('[data-resp]');
    if (m) { const v = m.querySelector('input').value.trim(); if (v.length < 10) { toast('Explica el motivo del rechazo (10 caracteres o más)'); return; } const d = S.devs.find((x) => x.id === m.closest('[data-dev]').dataset.dev); d.estado = 'Rechazada'; toast(`Devolución #${d.id} rechazada`); rerender(); }
    if (r) { const v = r.querySelector('#rc-r').value.trim(); if (errBox(r, v.length < 5 ? 'Escribe tu respuesta.' : /\b\d{4}[-\s]?\d{3}[-\s]?\d{4}\b|@/.test(v) ? 'No compartas teléfonos ni correos: la mediación va por aquí.' : '')) return; S.hilo.push(['Tu tienda', `16/10/2026 · ${new Date().toTimeString().slice(0, 5)}`, v]); toast('Respuesta enviada'); rerender(); }
  });
});

// ── 09.15 · Importadora · Mis fichas ────────────────────────────────────────
const IMP = 'IMPORTADORA';
const fichas = pageT('09.15', 'Importadora · Mis fichas', () => `<div class="w-wrap w-col w-col--lg"><div><h1 class="w-title">Mis fichas</h1><p class="w-lede">Las tiendas del país publican sus ofertas sobre estas fichas: tú pones el producto, ellas el precio y el stock.</p></div>
  <div class="w-req__bar w-req__bar--split"><p class="w-chiprow">${icon('store', 20)}<span>${S.fichas.filter((f) => f.tiendas).length} de ${S.fichas.length} en esta página están en uso por alguna tienda</span></p>${pager()}</div>
  <ul class="w-reqs">${S.fichas.map((f) => `<li class="w-panel w-req w-ficha"><span class="w-thumb">${productArt({ art: f.art, nombre: f.t })}</span><div><h3>${esc(f.t)} ${f.abierta ? '' : badge('Oculta', 'neutral', 'eye')}</h3><p class="w-muted">${esc(f.marca)} · ${esc(f.modelo)} · ${esc(f.cat)}</p><p class="w-chiprow w-sm"><span class="${f.tiendas ? 'w-info' : 'w-muted'}">${icon('store', 16)}${f.tiendas ? `La ${f.tiendas === 1 ? 'usa 1 tienda' : `usan ${f.tiendas} tiendas`}` : 'Ninguna tienda la usa'}</span>${f.gtin ? `<span class="w-muted">${icon('list', 16)}${f.gtin}</span>` : ''}${f.ncompat ? `<span class="w-muted">${icon('share', 16)}${f.ncompat} compatibilidades</span>` : ''}</p></div><a class="w-btn w-btn--text" href="#/editar-ficha?id=${f.id}">${icon('chevron', 18)}Abrir</a></li>`).join('')}</ul>
  <button class="w-btn w-btn--primary" type="button" data-nueva>${icon('add', 18)}Cargar una ficha nueva</button>
  ${card(`<h2>Quién publica sobre tus fichas</h2><ul class="w-rows2">${[['Frío Total Caracas', 3, true], ['ClimaRepuestos Valencia', 2, true], ['Refrigeración El Sol', 1]].map(([n, c, v]) => `<li>${icon('store', 20)}<span>${n} ${v ? `<span class="w-info" title="Verificada">${icon('check', 16)}</span>` : ''}</span><small>${c} ${c === 1 ? 'ficha tuya' : 'fichas tuyas'}</small></li>`).join('')}</ul>`)}</div>`,
(root) => root.querySelector('[data-nueva]').addEventListener('click', () => { const id = `f${Date.now()}`; S.fichas.push({ id, t: 'Ficha nueva', marca: '', modelo: '', cat: 'Sin categoría', gtin: '', tiendas: 0, art: 'caja', desc: '', abierta: false, compat: [], ncompat: 0 }); location.hash = `#/editar-ficha?id=${id}`; }), IMP);

// ── 09.16 · Importadora · Editar ficha ──────────────────────────────────────
const TIPOS = ['Split pared', 'Split piso techo', 'Ventana', 'Portátil', 'Central', 'Nevera', 'Cava'];
const editarFicha = pageT('09.16', 'Importadora · Editar ficha', (q) => { const f = S.fichas.find((x) => x.id === q.id) || S.fichas[0];
  return `<div class="w-wrap w-col"><a class="w-link" href="#/mis-fichas">${icon('close', 18)}Volver a mis fichas</a><h1 class="w-title w-title--md">${esc(f.t)}</h1>
  ${f.tiendas ? notice('warn', 'store', `Esta ficha la ${f.tiendas === 1 ? 'usa 1 tienda' : `usan ${f.tiendas} tiendas`}. Lo que cambies aquí lo verán en su catálogo.`) : notice('neutral', 'info', 'Ninguna tienda usa esta ficha todavía.')}
  ${card(`<form class="w-grid2" novalidate data-ficha><div class="w-field w-span2"><label for="ef-n">Nombre del artículo</label><input class="w-input" id="ef-n" value="${esc(f.t === 'Ficha nueva' ? '' : f.t)}" maxlength="90"><small class="w-muted">Tal como lo buscaría un técnico: tipo, capacidad y gas.</small></div>
    <div class="w-field"><label for="ef-m">Marca</label><input class="w-input" id="ef-m" value="${esc(f.marca)}"></div><div class="w-field"><label for="ef-o">Modelo</label><input class="w-input" id="ef-o" value="${esc(f.modelo)}"></div>
    <div class="w-field w-span2"><label for="ef-g">Código de barras</label><input class="w-input" id="ef-g" inputmode="numeric" value="${esc(f.gtin)}"><small class="w-muted">GTIN / EAN de 8, 12, 13 o 14 dígitos.</small></div>
    <div class="w-span2">${area('ef-d', 'Descripción', f.desc, 2000, { help: 'Sin precios ni datos de contacto.' })}</div>
    <label class="w-check w-span2"><input type="checkbox" id="ef-a"${f.abierta ? ' checked' : ''}>Que las tiendas puedan publicar sobre ella</label>
    <p class="w-field__err w-span2" data-err hidden></p><button class="w-btn w-btn--primary" type="submit">${icon('check', 18)}Guardar los cambios</button></form>`)}
  ${card(`<h2>Para qué sirve</h2><p class="w-muted w-sm">Marcas, modelos y tipos de equipo con los que este artículo es compatible. Así aparece cuando un técnico busca el repuesto de un equipo concreto.</p>
    <ul class="w-compat">${f.compat.length ? f.compat.map(([m, mo, t], i) => `<li>${icon('share', 18)}<span><b>${esc(m)} · ${mo ? esc(mo) : '(toda la marca)'}</b><small>${esc(t)}</small></span><button class="w-btn w-btn--text" type="button" data-qc="${i}">${icon('trash', 18)}Quitar</button></li>`).join('') : '<li class="w-muted">Todavía no tiene compatibilidades.</li>'}</ul>
    <h3>Añadir una compatibilidad</h3><form class="w-grid3" novalidate data-compat><div class="w-field"><label for="ac-m">Marca *</label><input class="w-input" id="ac-m" placeholder="Carrier"></div><div class="w-field"><label for="ac-o">Modelo</label><input class="w-input" id="ac-o"><small class="w-muted">Vacío: sirve para toda la marca.</small></div><div class="w-field"><label for="ac-t">Tipo de equipo</label><select class="w-input" id="ac-t">${TIPOS.map((t) => `<option>${t}</option>`).join('')}</select></div>
    <p class="w-field__err w-span3" data-err hidden></p><button class="w-btn w-btn--soft" type="submit">${icon('add', 18)}Añadir</button></form>`)}</div>`; },
(root, q) => {
  const f = S.fichas.find((x) => x.id === q.id) || S.fichas[0]; wireCounts(root);
  const gtinOk = (g) => { if (!/^(\d{8}|\d{12,14})$/.test(g)) return false; const d = g.split('').map(Number), chk = d.pop(); const s = d.reverse().reduce((a, n, i) => a + n * (i % 2 ? 1 : 3), 0); return (10 - (s % 10)) % 10 === chk; };
  root.querySelector('[data-ficha]').addEventListener('submit', (e) => { e.preventDefault(); const fm = e.target, n = fm.querySelector('#ef-n').value.trim(), g = fm.querySelector('#ef-g').value.trim(), d = fm.querySelector('#ef-d').value;
    if (errBox(fm, n.length < 8 ? 'Escribe el nombre completo del artículo.' : !fm.querySelector('#ef-m').value.trim() ? 'Escribe la marca.' : g && !gtinOk(g) ? 'El código de barras no es válido (revisa el dígito de control).' : /\$|\bbs\.?\s?\d|@|\b0\d{3}[-\s]?\d{7}\b/i.test(d) ? 'Quita los precios o datos de contacto de la descripción.' : '')) return;
    Object.assign(f, { t: n, marca: fm.querySelector('#ef-m').value.trim(), modelo: fm.querySelector('#ef-o').value.trim(), gtin: g, desc: d, abierta: fm.querySelector('#ef-a').checked }); toast(f.tiendas ? `Ficha guardada: las ${f.tiendas} tiendas verán el cambio` : 'Ficha guardada'); rerender(); });
  root.querySelector('[data-compat]').addEventListener('submit', (e) => { e.preventDefault(); const fm = e.target, m = fm.querySelector('#ac-m').value.trim(), o = fm.querySelector('#ac-o').value.trim(), t = fm.querySelector('#ac-t').value;
    if (errBox(fm, !m ? 'Escribe la marca.' : f.compat.some(([a, b]) => a.toLowerCase() === m.toLowerCase() && b.toLowerCase() === o.toLowerCase()) ? 'Esa compatibilidad ya está.' : '')) return;
    f.compat.push([m, o, t]); f.ncompat += 1; toast('Compatibilidad añadida'); rerender(); });
  root.addEventListener('click', (e) => { const b = e.target.closest('[data-qc]'); if (!b) return; f.compat.splice(Number(b.dataset.qc), 1); f.ncompat = Math.max(0, f.ncompat - 1); toast('Compatibilidad quitada'); rerender(); });
}, IMP);

export const RUTAS_TIENDA2 = { 'cuentas-banco': cuentas, liquidaciones, ventas, resenas, vitrina, 'tienda-reclamos': reclamos, 'mis-fichas': fichas, 'editar-ficha': editarFicha };
