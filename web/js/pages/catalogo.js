// 02 · Catálogo: directorio de nichos, categoría, portada del nicho (con filtros), búsqueda, ficha de producto,
// directorio de tiendas y tienda. Datos: dataweb.js (los de la app más los del Figma web).
import { productos, producto, tienda, nichos, ofertas, directorioWeb, nichoInfo, categoriaComp, fichaTecnica, tiendasDe, desdeDe } from '../dataweb.js';
import { icon, esc, money, bsRef, productCard, crumbs, badge, stars, stockDot, stockInfo, pctOff, qty, notice, productArt, TASA_DIA, toast } from '../kit.js';

const grid = (list, cls = 'w-grid') => `<div class="${cls} w-stagger">${list.map((p, i) => productCard(p, { i })).join('')}</div>`;
const fold = (s) => String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/(\d)\.(\d)/g, '$1$2');
const nichoDe = (id) => nichos.find((n) => n.id === id);

// ── 02.01 · Directorio de nichos ────────────────────────────────────────────
const NICHO_ART = { clima: 'aa12', refri: 'nev14', electro: 'nev14', elec: 'tal', solar: 'llav', plom: 'buj' };
const NICHO_TONO = { clima: 'brand', refri: 'info', electro: 'ink', elec: 'brand', solar: 'info', plom: 'bad' };
export const nichosPage = {
  code: '02.01', label: 'MARKETPLACE', title: 'Explora por nichos',
  render() {
    const cards = nichos.map((n, i) => `<article class="w-niche w-niche--${NICHO_TONO[n.id]}" style="--i:${i}">
        <span class="w-niche__img" aria-hidden="true">${productArt(producto(NICHO_ART[n.id]))}</span>
        <h2>${esc(n.nombre)}</h2><p>${esc(n.texto)}</p>
        <p class="w-niche__n">${n.productos ? `${n.productos.toLocaleString('es-VE')} productos` : 'Todavía sin catálogo'}</p>
        <div class="w-niche__foot">${n.servicio || ['refri', 'electro', 'solar'].includes(n.id) ? badge('Servicio técnico disponible', 'info', 'users') : badge('Repuestos y suministros', 'neutral', 'box')}
          <a class="w-link" href="${n.id === 'clima' ? '#/nicho?id=clima' : '#/buscar?q=&n=' + n.id}" aria-label="Explorar ${esc(n.nombre)}">Explorar →</a></div></article>`).join('');
    return `<div class="w-wrap">${crumbs([['Inicio', '#/'], ['Categorías']])}
      <div class="w-pagehead"><div>${badge('Directorio Especializado', 'brand', 'store')}<h1 class="w-title">Explora por Nichos</h1>
        <p class="w-lede">El catálogo está organizado por vertical de negocio: entra en la tuya y encuentra repuestos, equipos y técnicos.</p></div>
        <label class="w-filter">${icon('search', 22)}<span class="w-sr">Filtrar categoría</span><input type="search" placeholder="Filtrar categoría…" data-filter></label></div>
      <div class="w-grid w-grid--3 w-stagger" data-list>${cards}</div>
      <p class="w-empty" data-empty hidden>No hay un nicho con ese nombre.</p>
      <section class="w-panel w-benefits"><h2>Beneficios del Ecosistema VexBiz</h2><ul>
        <li><span>${icon('check', 24)}</span><div><b>Tiendas Verificadas</b><p>Cada tienda pasa una revisión de documentos antes de vender.</p></div></li>
        <li><span>${icon('users', 24)}</span><div><b>Técnicos Certificados</b><p>Profesionales con oficios y documentos validados.</p></div></li>
        <li><span>${icon('shield', 24)}</span><div><b>Garantía Protegida</b><p>VexBiz media si algo sale mal con tu compra o tu servicio.</p></div></li></ul></section></div>`;
  },
  mount(root) { filtro(root, '.w-niche'); },
};
/** Filtro en vivo de tarjetas por su título. */
function filtro(root, sel) {
  const inp = root.querySelector('[data-filter]'), empty = root.querySelector('[data-empty]');
  inp.addEventListener('input', () => {
    const q = fold(inp.value.trim()); let n = 0;
    root.querySelectorAll(sel).forEach((c) => { const ok = !q || fold(c.querySelector('h2,h3').textContent).includes(q); c.hidden = !ok; n += ok; });
    empty.hidden = n > 0;
  });
}

// ── 02.02 · Categoría ───────────────────────────────────────────────────────
export const categoriaPage = {
  code: '02.02', label: 'MARKETPLACE', title: 'Compresores',
  render() {
    const c = categoriaComp, list = c.ids.map(producto);
    return `<div class="w-wrap">${crumbs([['Categorías', '#/nichos'], ['Climatización', '#/nicho?id=clima'], [c.padre]])}
      <h1 class="w-title">${esc(c.nombre)}</h1><p class="w-lede">${esc(c.texto)}</p>
      <div class="w-chips" role="group" aria-label="Tipo de compresor">${c.subtipos.map(([t, n, k]) => `<button type="button" class="w-chip" aria-pressed="false" data-sub="${k}">${esc(t)} <span>${n}</span></button>`).join('')}</div>
      <div data-list>${grid(list)}</div>
      <p class="w-empty" data-empty hidden>No hay compresores de ese tipo en la demo. Quita el filtro para ver todos.</p></div>`;
  },
  mount(root) {
    const list = root.querySelector('[data-list]'), empty = root.querySelector('[data-empty]');
    root.addEventListener('click', (e) => {
      const b = e.target.closest('[data-sub]'); if (!b) return;
      const on = b.getAttribute('aria-pressed') !== 'true';
      root.querySelectorAll('[data-sub]').forEach((x) => x.setAttribute('aria-pressed', 'false'));
      b.setAttribute('aria-pressed', String(on));
      const ps = categoriaComp.ids.map(producto).filter((p) => !on || p.sub === b.dataset.sub);
      list.innerHTML = grid(ps); empty.hidden = ps.length > 0;
    });
  },
};

// ── Filtros compartidos (02.03 y 02.04) ─────────────────────────────────────
/** Columna de filtros: categorías y marcas con los conteos del Figma; precio máximo y «sólo disponibles». */
function filtrosHtml({ marca = '', max = 900 } = {}) {
  const info = nichoInfo.clima;
  const cats = info.categorias.map(([t, c], i) => `<label class="w-check"><input type="checkbox" name="cat" value="${i}"> ${esc(t)} <small>${c}</small></label>`).join('');
  const marcas = info.marcas.map(([m, c]) => `<label class="w-check"><input type="checkbox" name="marca" value="${esc(m)}"${m === marca ? ' checked' : ''}> ${esc(m)} <small>${c}</small></label>`).join('');
  return `<form class="w-panel w-filters" data-filters aria-label="Filtros"><div class="w-filters__head"><h2>Filtros</h2><button type="button" class="w-btn w-btn--text" data-clear>Limpiar</button></div>
    <div class="w-filters__chips" data-chips></div>
    <fieldset><legend>Categorías</legend>${cats}</fieldset>
    <fieldset><legend>Marca</legend>${marcas}</fieldset>
    <fieldset><legend>Precio</legend><input class="w-range" type="range" name="max" min="0" max="900" step="10" value="${max}" aria-label="Precio máximo">
      <div class="w-filters__range"><span class="w-input">$ 0</span><span class="w-input" data-maxout>$ ${max}</span></div></fieldset>
    <label class="w-filters__switch">Sólo disponibles <input class="w-switch" type="checkbox" name="disp" checked></label></form>`;
}
/** Conecta la columna de filtros con una lista. `base()` da los productos de partida; `onPaint(total, filtros)` recibe los totales. */
function wireFiltros(root, base, { sort, perPage = 0, onPaint } = {}) {
  const f = root.querySelector('[data-filters]'), list = root.querySelector('[data-list]'), cats = nichoInfo.clima.categorias;
  let shown = perPage;
  const paint = () => {
    const c = [...f.querySelectorAll('[name=cat]:checked')].map((i) => cats[i.value][2]), m = [...f.querySelectorAll('[name=marca]:checked')].map((i) => i.value);
    const max = Number(f.max.value), disp = f.disp.checked, s = sort ? sort.value : 'rel';
    const ps = base().filter((p) => (!c.length || c.some((re) => re.test(p.categoria))) && (!m.length || m.includes(p.marca)) && p.precio <= max && (!disp || p.stock > 0))
      .sort((a, b) => (s === 'asc' ? a.precio - b.precio : s === 'desc' ? b.precio - a.precio : 0));
    list.innerHTML = grid(perPage ? ps.slice(0, shown) : ps, 'w-grid w-grid--3');
    root.querySelector('[data-empty]').hidden = ps.length > 0;
    const more = root.querySelector('[data-more]'); if (more) more.hidden = !perPage || shown >= ps.length;
    root.querySelector('[data-maxout]').textContent = `$ ${max}`;
    root.querySelector('[data-chips]').innerHTML = [...m.map((x) => [x, `marca:${x}`]), ...(max < 900 ? [[`Hasta $ ${max}`, 'max']] : [])].map(([t, k]) => `<button type="button" class="w-chip w-chip--x" data-x="${esc(k)}" aria-label="Quitar ${esc(t)}">${esc(t)} ${icon('close', 14)}</button>`).join('');
    if (onPaint) onPaint(ps.length, m.length + (max < 900 ? 1 : 0) + c.length);
  };
  f.addEventListener('input', paint);
  if (sort) sort.addEventListener('change', paint);
  root.addEventListener('click', (e) => {
    const x = e.target.closest('[data-x]');
    if (x) { const k = x.dataset.x; if (k === 'max') f.max.value = 900; else f.querySelector(`[name=marca][value="${k.slice(6)}"]`).checked = false; paint(); }
    if (e.target.closest('[data-clear]')) { f.querySelectorAll('input[name=cat], input[name=marca]').forEach((i) => { i.checked = false; }); f.max.value = 900; paint(); }
    if (e.target.closest('[data-more]')) { shown += perPage; paint(); }
  });
  paint();
}

// ── 02.03 · Portada del nicho (con filtros) ─────────────────────────────────
export const nichoPage = {
  code: '02.03', label: 'MARKETPLACE', title: 'Climatización',
  render(q) {
    const n = nichoDe(q.id) || nichoDe('clima'), info = nichoInfo.clima;
    return `<div class="w-wrap">${crumbs([['Inicio', '#/'], ['Nichos', '#/nichos'], [n.nombre]])}
      <section class="w-nichehead"><div>${badge('Categoría Oficial', 'neutral', 'check')} ${badge('Requiere instalación técnica especializada', 'info', 'users')}
        <h1 class="w-title">${esc(n.nombre)}</h1><p class="w-lede">${esc(info.texto)}</p></div>
        <a class="w-nichehead__cta" href="#/prestadores?oficio=aa"><b>¿Necesitas instalarlo?</b><span>${icon('users', 20)}Buscar un técnico</span></a></section>
      <div class="w-shop">${filtrosHtml({ marca: 'Samsung', max: 500 })}
        <section aria-labelledby="w-res"><div class="w-res__head"><h2 id="w-res">Resultados filtrados</h2><span data-count></span></div>
          <div data-list></div><p class="w-empty" data-empty hidden>Ningún producto cumple estos filtros. Prueba quitando alguno.</p></section></div></div>`;
  },
  mount(root) {
    wireFiltros(root, () => productos.filter((p) => /^Climatización/.test(p.categoria)), { onPaint: (n) => { root.querySelector('[data-count]').textContent = `${n} ${n === 1 ? 'producto' : 'productos'}`; } });
  },
};

// ── 02.04 · Búsqueda ────────────────────────────────────────────────────────
/** Coincide si el producto contiene todas las palabras (sin tildes; «12000» encuentra «12.000»). */
function buscar(q) {
  const term = (q.q || '').trim(), n = nichoDe(q.n), words = fold(term).split(/\s+/).filter(Boolean);
  const enNicho = (p) => !n || fold(p.categoria).startsWith(fold(n.nombre).split(' ')[0]);
  let ps = productos.filter((p) => enNicho(p) && words.every((w) => fold(`${p.nombre} ${p.marca || ''} ${p.categoria}`).includes(w)));
  if (!ps.length && words.length) ps = productos.filter((p) => enNicho(p) && words.some((w) => w.length > 3 && fold(p.nombre).includes(w))); // sugiere por palabra suelta
  return { term, n, ps };
}
export const buscarPage = {
  code: '02.04', label: 'MARKETPLACE', title: 'Búsqueda',
  render(q) {
    const { term, n, ps } = buscar(q);
    const titulo = term ? `Resultados para «${esc(term)}»${n ? ` en ${esc(n.nombre)}` : ''}` : n ? esc(n.nombre) : 'Todo el catálogo';
    const tambien = ['cap', 'txv', 'ctrl'].map(producto);
    if (!ps.length) return `<div class="w-wrap"><h1 class="w-title w-title--md">${titulo}</h1>
      <div class="w-panel w-empty-card"><h2>No encontramos «${esc(term)}»</h2><p>Revisa cómo está escrito o busca con menos palabras. También puedes explorar por nicho.</p><a class="w-btn w-btn--primary" href="#/nichos">Explorar nichos</a></div></div>`;
    return `<div class="w-wrap"><div class="w-res__top"><div><h1 class="w-title w-title--md">${titulo}</h1><p class="w-lede w-lede--sm" data-count></p></div>
        <label class="w-sort"><span>Ordenar por:</span><select data-sort><option value="rel">Más relevantes</option><option value="asc">Menor precio</option><option value="desc">Mayor precio</option></select></label></div>
      <div class="w-shop">${filtrosHtml()}
        <div><div data-list></div><p class="w-empty" data-empty hidden>Ningún resultado cumple estos filtros. Prueba quitando alguno.</p>
          <p class="w-more"><button class="w-btn w-btn--ghost" type="button" data-more>${icon('chevron', 18)}Cargar más productos</button></p>
          ${term ? `<section class="w-panel w-also"><h2>Quienes buscaron «${esc(term)}» terminaron comprando</h2><p class="w-lede w-lede--sm">Compras de los últimos 6 meses.</p>${grid(tambien, 'w-grid w-grid--3')}</section>` : ''}</div></div></div>`;
  },
  mount(root, q) {
    if (!root.querySelector('[data-filters]')) return;
    const { ps, n } = buscar(q);
    wireFiltros(root, () => ps, { sort: root.querySelector('[data-sort]'), perPage: 6, onPaint: (tot, filtros) => {
      const k = filtros + (n ? 1 : 0);
      root.querySelector('[data-count]').textContent = `${tot} ${tot === 1 ? 'publicación' : 'publicaciones'}${k ? ` · ${k} ${k === 1 ? 'filtro' : 'filtros'}` : ''}`;
    } });
  },
};

// ── 02.05 · Ficha de producto ───────────────────────────────────────────────
export const productoPage = {
  code: '02.05', label: 'MARKETPLACE', title: 'Ficha de producto',
  render(q) {
    const p = producto(q.id) || producto('aa12'), t = tienda(p.tienda), ft = fichaTecnica[p.id], off = pctOff(p);
    const otras = (ofertas[p.id] || []).filter((o) => !o.actual);
    const desde = otras.length ? Math.min(...otras.filter((o) => o.stock > 0).map((o) => o.precio)) : 0;
    const cat = p.categoria.split(' › ');
    const specs = ft ? ft.specs : [['Marca', p.marca || 'Genérico'], ['Referencia', p.ref || p.id.toUpperCase()], ['Categoría', cat.join(' · ')], ['Condición', p.condicion || 'Nuevo']];
    const rel = (ft ? ft.relacionados : productos.filter((x) => x.id !== p.id && x.categoria.startsWith(cat[0])).slice(0, 4).map((x) => x.id)).map(producto);
    return `<div class="w-wrap">${crumbs([['Inicio', '#/'], ['Categorías', '#/nichos'], [cat[0], '#/nicho?id=clima'], [cat[1] || cat[0]]])}
      <section class="w-panel w-pd">
        <div class="w-pd__gal"><div class="w-pd__main" data-main>${productArt(p)}</div>
          <div class="w-pd__thumbs" role="group" aria-label="Fotos del producto">${[0, 1, 2, 3, 4].map((v) => `<button type="button" class="w-pd__th" aria-label="Foto ${v + 1} de 5" aria-pressed="${v === 0}" data-vista="${v}">${productArt(p, { vista: v })}</button>`).join('')}</div>
          ${notice('info', 'shield', '<b>Compra Protegida VEXBIZ</b>Tu dinero queda en custodia hasta que confirmas que recibiste el producto.')}</div>
        <div class="w-pd__info"><h1 class="w-pd__title">${esc(ft ? ft.titulo : p.nombre)}</h1>
          <p class="w-pd__tags">${p.marca ? `<span>Marca: ${esc(p.marca)}</span>` : ''}<span>Ref: ${esc(p.ref || p.id.toUpperCase())}</span>${p.gtin ? `<span>GTIN: ${p.gtin}</span>` : ''}</p>
          <div class="w-buy">
            <p class="w-buy__row">${off ? badge('La mejor oferta', 'brand', 'tag') : ''}<span class="w-muted">${esc(p.condicion || 'Nuevo')}</span></p>
            ${p.antes ? `<p class="w-buy__old"><s>${money(p.antes)}</s> ${badge(`−${off}%`, 'bad')}</p>` : ''}
            <p class="w-buy__price" data-price>${money(p.precio)}</p>
            <p class="w-muted w-sm">${bsRef(p.precio, TASA_DIA)}</p>
            ${p.oferta ? `<p class="w-buy__until">Oferta hasta el ${p.oferta}</p>` : ''}
            <p class="w-buy__row">${badge(`${stockInfo(p.stock).t}${p.stock > 0 ? ` · ${p.stock} unidades` : ''}`, p.stock > 3 ? 'info' : p.stock > 0 ? 'warn' : 'bad', p.stock > 0 ? 'check' : 'close')}<span class="w-muted w-sm">Precio y stock confirmados por la tienda</span></p>
            <div class="w-buy__act">${qty('pd', 1, Math.max(p.stock, 1))}<button class="w-btn w-btn--primary w-btn--lg" type="button" data-add="${p.id}" data-qty="1"${p.stock <= 0 ? ' disabled' : ''}>${icon('cart', 20)}Añadir al carrito</button></div>
            <a class="w-buy__store" href="#/tienda?id=${t.id}"><span class="w-av">${esc(t.sigla)}</span><span><b>${esc(t.nombre)} ${t.verificada ? icon('check', 16) : ''}</b><small>★ ${String(t.rating).replace('.', ',')} · ${esc(t.ciudad)}</small></span>${icon('chevron', 20)}</a>
          </div>
          ${otras.length ? `<a class="w-link" href="#otras">${icon('store', 18)}Otras ${otras.length} tiendas, desde ${money(desde)} ↓</a>` : ''}</div>
      </section>
      ${otras.length ? `<section id="otras"><div class="w-sechead"><div><h2>Otras tiendas que lo venden <small>${otras.length} ofertas · desde ${money(desde)}</small></h2></div></div>
        <div class="w-grid w-grid--3">${otras.map((o) => { const s = tienda(o.t); return `<article class="w-offer"><h3>${esc(s.nombre)} ${icon('check', 16)}</h3><p class="w-offer__price">${money(o.precio)}</p>
          <p class="w-muted w-sm">${stockInfo(o.stock).t}${o.stock > 0 ? ` · ${o.stock} unidades` : ''} · ${esc(s.ciudad)}</p>
          <button class="w-btn w-btn--ghost w-btn--block" type="button" ${o.stock > 0 ? `data-add="${p.id}" data-oferta="${o.t}"` : 'disabled'}>${o.stock > 0 ? 'Añadir esta oferta' : 'Agotado en esta tienda'}</button></article>`; }).join('')}</div></section>` : ''}
      <section class="w-panel w-pd__desc"><div><h2>Descripción del producto</h2><p>${esc(ft ? ft.descripcion : `${p.nombre}${p.marca ? ` de ${p.marca}` : ''}. Precio y existencias confirmados por ${t.nombre}.`)}</p></div>
        <div><h2>Ficha técnica y especificaciones</h2><table class="w-specs"><tbody>${specs.map(([k, v]) => `<tr><th scope="row">${esc(k)}</th><td>${esc(v)}</td></tr>`).join('')}</tbody></table>
          ${ft ? `<p class="w-pd__compat"><b>Compatible con</b>${ft.compatible.map((c) => `<span>${esc(c)}</span>`).join('')}</p>` : ''}</div></section>
      <div class="w-sechead"><div><h2>Productos relacionados</h2></div></div>${grid(rel)}
      <ul class="w-trust"><li>${icon('shield', 24)}<div><b>Custodia Escrow</b><p>Pagas y tu dinero queda protegido hasta recibir.</p></div></li>
        <li>${icon('truck', 24)}<div><b>Despacho Oficial</b><p>Cada tienda envía su paquete con seguimiento.</p></div></li>
        <li>${icon('chat', 24)}<div><b>Soporte y Garantía</b><p>Te acompañamos si algo no sale bien.</p></div></li></ul></div>`;
  },
  mount(root, q) {
    const p = producto(q.id) || producto('aa12');
    let n = 1;
    const out = root.querySelector('.w-buy .w-qty output'), add = root.querySelector('.w-buy [data-add]');
    root.addEventListener('click', (e) => {
      const th = e.target.closest('[data-vista]');
      if (th) { root.querySelectorAll('[data-vista]').forEach((b) => b.setAttribute('aria-pressed', String(b === th))); root.querySelector('[data-main]').innerHTML = productArt(p, { vista: Number(th.dataset.vista) }); }
      if (e.target.closest('[data-dec="pd"]')) n = Math.max(1, n - 1);
      else if (e.target.closest('[data-inc="pd"]')) n = Math.min(p.stock, n + 1);
      else return;
      out.textContent = n; add.dataset.qty = n;
      root.querySelector('[data-dec="pd"]').disabled = n <= 1; root.querySelector('[data-inc="pd"]').disabled = n >= p.stock;
    });
  },
};

// ── 02.06 · Directorio de tiendas ───────────────────────────────────────────
export const tiendasPage = {
  code: '02.06', label: 'MARKETPLACE', title: 'Tiendas verificadas',
  render() {
    const cards = directorioWeb.map((t, i) => `<article class="w-shopcard" style="--i:${i}"><span class="w-shopcard__av${t.logo ? '' : ' w-shopcard__av--empty'}" aria-hidden="true">${t.logo ? esc(t.sigla) : icon('store', 26)}</span>
        <h3>${esc(t.nombre)}</h3><p>${esc(t.nicho)} · ${esc(t.ciudad)}</p>
        <p class="w-shopcard__meta">${t.rating != null ? stars(t.rating) : ''}<span>${t.productos} productos</span><a class="w-link" href="${t.id === 'ft' ? '#/tienda?id=ft' : `#/tienda?id=${t.id}`}" aria-label="Ver ${esc(t.nombre)}">Ver →</a></p></article>`).join('');
    return `<div class="w-wrap">${crumbs([['Inicio', '#/'], ['Tiendas']])}
      <div class="w-pagehead"><div>${badge('Directorio de Tiendas', 'brand', 'store')}<h1 class="w-title">Tiendas verificadas</h1><p class="w-lede">Comercios que pasaron la revisión de VexBiz y venden en todo el país.</p></div>
        <label class="w-filter">${icon('search', 22)}<span class="w-sr">Filtrar tienda</span><input type="search" placeholder="Filtrar tienda…" data-filter></label></div>
      <div class="w-grid w-stagger">${cards}</div><p class="w-empty" data-empty hidden>No hay una tienda con ese nombre.</p></div>`;
  },
  mount(root) { filtro(root, '.w-shopcard'); },
};

// ── 02.07 · Tienda ──────────────────────────────────────────────────────────
export const tiendaPage = {
  code: '02.07', label: 'MARKETPLACE', title: 'Tienda',
  render(q) {
    const t = tienda(q.id) || tienda('ft');
    const ps = productos.filter((p) => p.tienda === t.id);
    return `<div class="w-wrap">${crumbs([['Inicio', '#/'], ['Tiendas', '#/tiendas'], [t.nombre]])}
      <section class="w-panel w-storehead"><span class="w-storehead__logo" aria-hidden="true">${icon('store', 32)}</span>
        <div><h1 class="w-title w-title--md">${esc(t.nombre)} ${t.verificada || t.id === 'ft' ? badge('Verificada por VexBiz', 'info', 'check') : ''}</h1>
          <p class="w-lede w-lede--sm">${esc(t.nicho)} · ${esc(t.ciudad)}${t.region ? `, ${esc(t.region)}` : ''} ${stars(t.rating)}</p><p class="w-sm">${t.productos} productos publicados</p></div>
        <form class="w-storehead__search" data-in-store role="search"><label class="w-sr" for="w-st-q">Buscar en esta tienda</label><input id="w-st-q" class="w-input" type="search" placeholder="Buscar en esta tienda"><button class="w-btn w-btn--primary" type="submit">${icon('search', 18)}Buscar</button></form></section>
      <div class="w-sechead"><div><h2>Su catálogo</h2><p>${ps.length} de ${t.productos} productos en esta demo.</p></div></div>
      <div data-list>${ps.length ? grid(ps) : '<p class="w-empty">Esta tienda todavía no tiene productos en la demo.</p>'}</div></div>`;
  },
  mount(root, q) {
    const t = tienda(q.id) || tienda('ft'), list = root.querySelector('[data-list]');
    root.querySelector('[data-in-store]').addEventListener('submit', (e) => {
      e.preventDefault();
      const w = fold(e.currentTarget.querySelector('input').value.trim());
      const ps = productos.filter((p) => p.tienda === t.id && (!w || fold(p.nombre).includes(w)));
      list.innerHTML = ps.length ? grid(ps) : `<div class="w-panel w-empty-card"><h2>Sin resultados en ${esc(t.nombre)}</h2><p>Prueba con otra palabra o busca en todo VexBiz.</p></div>`;
    });
  },
};
export { toast, tiendasDe, desdeDe };
