// M2 · Descubrir: inicio, buscar, resultados, filtros y orden, nichos, nicho, categoría, ficha, galería,
// otras tiendas, tiendas y tienda.
import { register } from './registry.js';
import { h, icon, btn, iconBtn, topbar, stateBlock, toast, $, $$ } from '../ui.js';
import { productCard, storeRow, nicheTile, avatar, stars, stockHtml, stock, pct, page, banner, stepper, field, closeOnGo, wireControls, teselaAttrs } from '../market.js';
import { productArt } from '../art.js';
import { go, closeOverlay } from '../router.js';
import { state, set, subscribe, cartCount } from '../store.js';
import { stagger, reveal, play, countdown } from '../motion.js';
import { productos, producto, tienda, tiendas, nichos, directorio, sugerencias, recientes, ofertas } from '../data.js';
import { money, bsRef, num, esc, clock, plural } from '../format.js';

const norm = (s) => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/\./g, '');
const grid = (items) => `<div class="vx-grid" data-stagger>${items.map((p, i) => productCard(p, { i })).join('')}</div>`;
const scroller = (items, stag = false) => `<div class="vx-scroller"${stag ? ' data-stagger' : ''}>${items.map((p, i) => productCard(p, { i })).join('')}</div>`;
const sectionHead = (title, link = '') => `<div class="vx-sechead"><h2 class="md-title-large">${title}</h2>${link}</div>`;
const AIRES = () => productos.filter((p) => p.categoria.endsWith('Aires split'));
const COMPRESORES = () => productos.filter((p) => p.categoria.endsWith('Compresores'));

/** Búsqueda simple por palabras sobre nombre, marca y categoría. */
export function buscar(q) {
  const t = norm(q).split(/\s+/).filter(Boolean);
  if (!t.length) return productos.slice();
  return productos.filter((p) => { const hay = norm(`${p.nombre} ${p.marca || ''} ${p.categoria} ${p.ref || ''}`); return t.every((w) => hay.includes(w)); });
}

// ── Filtros y orden (estado compartido por Resultados, Nicho, Categoría y Tienda) ──
export function aplicar(list) {
  const f = state.flow.filtros;
  let r = list.filter((p) => (!f.marcas.length || f.marcas.includes(p.marca)) && (!f.nuevo || p.condicion === 'Nuevo') && (!f.soloDisp || p.stock > 0)
    && (f.min === '' || p.precio >= Number(f.min)) && (f.max === '' || p.precio <= Number(f.max)));
  if (f.orden === 'menor') r = r.sort((a, b) => a.precio - b.precio); else if (f.orden === 'mayor') r = r.sort((a, b) => b.precio - a.precio);
  return r;
}
const hayFiltros = () => { const f = state.flow.filtros; return f.marcas.length || f.nuevo || f.soloDisp || f.min !== '' || f.max !== '' || f.orden !== 'relevantes'; };
const chipsAplicados = () => { const f = state.flow.filtros; const c = [...f.marcas.map((m) => ['marca:' + m, m])]; if (f.nuevo) c.push(['nuevo', 'Nuevo']); if (f.soloDisp) c.push(['disp', 'Sólo disponibles']); return c; };

/** Fila de filtros aplicados + botón «Filtros y orden» que abre la hoja. */
const filtroBar = () => `<div class="vx-filterbar"><div class="vx-chips" data-chips></div>${btn(`${icon('sliders', 18)}Filtros y orden`, { kind: 'tonal', go: 'O.FIL' })}</div>`;
function paintChips(root) {
  const host = $('[data-chips]', root); if (!host) return;
  host.innerHTML = chipsAplicados().map(([k, t]) => `<span class="md-chip-wrap"><button type="button" class="md-chip md-chip--selected md-chip--trail md-sl md-label-large" data-unf="${k}" aria-label="Quitar filtro ${esc(t)}">${esc(t)}${icon('close', 18)}</button></span>`).join('');
}
function wireFiltros(root, universe, paint) {
  state.flow.universe = universe;
  const sync = () => { paintChips(root); paint(aplicar(universe())); };
  root.addEventListener('click', (e) => {
    const b = e.target.closest('[data-unf]'); if (!b) return;
    const f = state.flow.filtros, k = b.dataset.unf;
    if (k.startsWith('marca:')) f.marcas = f.marcas.filter((m) => m !== k.slice(6)); else if (k === 'nuevo') f.nuevo = false; else if (k === 'disp') f.soloDisp = false;
    set({ flow: state.flow });
  });
  sync();
  return subscribe(sync);
}
const countText = (n) => plural(n, 'publicación', 'publicaciones');

// ── Portada (hero): tres promociones con producto. El descuento sale del precio real, no está escrito a mano. ──
const heroSlides = () => { const o = producto('lg12'); return [
  { tono: 'ink', eyebrow: 'Ofertas relámpago', titulo: `Aires split con ${pct(o)}&nbsp;% menos`, sub: `Oferta hasta el ${o.oferta}`, cta: 'Ver ofertas', go: 'M2.03', art: 'aa12' },
  { tono: 'tertiary', eyebrow: 'Técnicos certificados', titulo: 'Técnicos en tu zona', sub: 'Instalación y reparación con técnicos verificados.', cta: 'Ver técnicos', go: 'M4.03', art: 'tal' },
  { tono: 'secondary', eyebrow: 'Repuestos', titulo: 'Compresores, capacitores y tarjetas', sub: 'De tiendas verificadas.', cta: 'Explorar', go: 'M2.06?id=clima', art: 'comp' },
]; };

// ── M2.01 · Inicio ──────────────────────────────────────────────────────────
register('M2.01', {
  render() {
    const ofertas6 = ['aa12', 'lg12', 'mi12', 'sa09', 'comp', 'da18'].map(producto);
    const vendidos = ['ctrl', 'cap', 'tal', 'tarj'].map(producto);
    const serv = (eyebrow, title, ic, to) => `<li><button type="button" class="md-li md-li--2 md-sl vx-press vx-row" data-go="${to}"><span class="md-li-icon">${icon(ic)}</span>
      <span class="md-li-text"><span class="md-label-small vx-eyebrow">${eyebrow}</span><span class="md-li-title md-body-large">${title}</span></span><span class="md-li-end">${icon('chevron')}</span></button></li>`;
    return h(`<div>
      <header class="vx-homehead">
        <div class="vx-homehead-row"><div class="vx-logo vx-logo--ink vx-logo--sm" role="img" aria-label="VexBiz">VE<span class="vx-logo-x">X</span>BIZ</div>${iconBtn('bell', 'Avisos', 'data-go="M6.17"')}</div>
        <button type="button" class="md-search md-sl vx-searchbtn" data-go="M2.02" data-kind="smart" aria-label="Buscar en VexBiz">${icon('search')}<span class="md-body-large vx-muted">Buscar en VexBiz</span></button>
        <h1 class="md-sr-only" tabindex="-1">Inicio</h1>
      </header>
      <section class="vx-hero" aria-label="Promociones"><div class="vx-carousel" tabindex="0" aria-label="Promociones, desliza para ver más">${heroSlides().map((c, i) => `<div class="vx-slide vx-hs vx-hs--${c.tono}" role="group" aria-label="Promoción ${i + 1} de 3"><div class="vx-hs-copy"><p class="vx-hs-eyebrow">${c.eyebrow}</p><h2 class="vx-hs-title">${c.titulo}</h2><p class="vx-hs-sub">${c.sub}</p>${btn(c.cta, { kind: 'filled', go: c.go })}</div><div class="vx-hs-art" aria-hidden="true">${productArt(c.art)}</div></div>`).join('')}</div>
        <div class="vx-dots" aria-hidden="true">${[0, 1, 2].map((i) => `<i class="vx-dot${i === 0 ? ' is-on' : ''}"></i>`).join('')}</div></section>
      <section class="vx-sec vx-reveal">${sectionHead('Nichos', btn('Ver todos', { kind: 'text', go: 'M2.05', kindNav: 'swap' }))}
        <ul class="vx-nichesq" role="list">${nichos.slice(0, 5).map((n) => `<li><button type="button" class="vx-nsq md-sl vx-press" data-go="M2.06?id=${n.id}"><span>${icon(n.id === 'clima' ? 'sliders' : 'box', 28)}</span><span class="md-label-medium">${esc(n.nombre)}</span></button></li>`).join('')}</ul></section>
      <section class="vx-sec vx-reveal">${sectionHead('Ofertas relámpago')}<p class="md-body-medium vx-count-row vx-tab-num" aria-live="off">${icon('clock', 18)} Termina en <b id="hRelo" class="md-title-small">02:14:36</b></p>
        ${scroller(ofertas6, true)}</section>
      <section class="vx-sec vx-reveal">${sectionHead('Más vendidos', btn('Ver todos', { kind: 'text', go: 'M2.03' }))}${grid(vendidos)}</section>
      <section class="vx-sec vx-reveal">${sectionHead('Servicios')}<ul class="vx-list" role="list">
        ${serv('TÉCNICOS CERTIFICADOS', 'Instalación y reparación', 'wrench', 'M4.03')}${serv('AUXILIO VIAL 24/7', 'Grúa, batería y cerrajería', 'truck', 'M4.08')}${serv('SEGUROS', 'Protege tu vehículo', 'shield', 'M4.06')}</ul></section>
      <section class="vx-sec vx-reveal">${sectionHead('Tiendas destacadas', btn('Ver todas', { kind: 'text', go: 'M2.11' }))}
        <ul class="vx-list" role="list">${[tienda('ft'), tienda('ha'), tienda('re')].map((t) => `<li><button type="button" class="md-li md-li--2 md-sl vx-press vx-row" data-go="M2.12?id=${t.id}">${avatar(t.sigla, true)}
          <span class="md-li-text"><span class="md-li-title md-body-large">${esc(t.nombre)}</span></span><span class="md-li-end md-body-small vx-tab-num">${stars(t.rating)}</span></button></li>`).join('')}</ul></section>
      <section class="vx-sec vx-help vx-reveal"><h2 class="md-title-large">¿Te ayudamos?</h2>${btn('Escríbenos por WhatsApp', { kind: 'filled', block: true, attrs: 'data-toast="Abre el WhatsApp de VexBiz: lunes a sábado, 8:00 a 18:00"' })}</section>
    </div>`);
  },
  mount(el, ctx) {
    if (ctx.first && ctx.kind !== 'back') $$('[data-stagger]', el).forEach(stagger); // Patrón 7: solo la primera carga
    reveal(el);                                                                      // Patrón 8
    // Patrón 15: cuenta regresiva real, tabular (02:14:36); no se anuncia cada segundo.
    const t0 = Date.now(), total = ((2 * 60 + 14) * 60 + 36) * 1000, out = el.querySelector('#hRelo');
    const id = setInterval(() => { out.textContent = clock(total - (Date.now() - t0)); }, 1000);
    // Patrón 23: carrusel con imán; el punto activo se ensancha con scaleX.
    const car = el.querySelector('.vx-carousel'), dots = $$('.vx-dot', el);
    const onScroll = () => { const i = Math.round(car.scrollLeft / car.clientWidth); dots.forEach((d, k) => d.classList.toggle('is-on', k === i)); };
    car.addEventListener('scroll', onScroll, { passive: true });
    return () => clearInterval(id);
  },
});

// ── M2.02 · Buscar ──────────────────────────────────────────────────────────
// Patrón 18 simplificado: entra con fundido (la expansión de la barra se anota en INFORME.md).
register('M2.02', {
  skeleton: false,
  render() {
    const el = h(`<div class="vx-page">
      <header class="vx-searchhead">${iconBtn('back', 'Volver', 'data-back')}
        <form class="md-search vx-searchform" role="search" id="fBuscar">${icon('search')}<input class="md-search-input md-body-large" id="q" type="search" enterkeyhint="search" autocomplete="off" placeholder="Buscar en VexBiz" aria-label="Buscar en VexBiz" value="">
        <button type="button" class="md-iconbtn md-iconbtn--standard md-sl md-search-trail" id="qClear" aria-label="Borrar búsqueda" hidden>${icon('close')}</button></form></header>
      <h1 class="md-sr-only" tabindex="-1">Buscar</h1>
      <div class="vx-body" id="sugg" aria-live="polite"></div></div>`);
    const q = el.querySelector('#q'), box = el.querySelector('#sugg');
    const paint = () => {
      const t = norm(q.value.trim());
      el.querySelector('#qClear').hidden = !t;
      if (!t) {
        box.innerHTML = `<h2 class="md-label-large vx-sub">Búsquedas recientes</h2><ul class="vx-list" role="list">${recientes.map((r) => `<li><button type="button" class="md-li md-sl vx-press vx-row" data-q="${esc(r)}"><span class="md-li-icon">${icon('clock')}</span><span class="md-li-text"><span class="md-li-title md-body-large">${esc(r)}</span></span></button></li>`).join('')}</ul>
          <div class="vx-chipwrap">${['Climatización', 'Refrigeración', 'Electricidad', 'Automotriz', 'Herramientas'].map((n) => `<span class="md-chip-wrap"><button type="button" class="md-chip md-sl md-label-large" data-go="${n === 'Climatización' ? 'M2.06?id=clima' : 'M2.05'}">${n}</button></span>`).join('')}</div>`;
        return;
      }
      const hits = sugerencias.filter((s) => norm(s.t).includes(t));
      box.innerHTML = `${hits.length ? `<ul class="vx-list" role="list">${hits.map((s) => `<li><button type="button" class="md-li md-li--2 md-sl vx-press vx-row" data-q="${esc(s.t)}"><span class="md-li-icon">${icon('search')}</span>
        <span class="md-li-text"><span class="md-li-title md-body-large">${esc(s.t)}</span>${s.en ? `<span class="md-li-sup md-body-medium">${esc(s.en)}</span>` : ''}</span><span class="md-li-end md-body-small">${esc(s.n)}</span></button></li>`).join('')}</ul>` : ''}
        <ul class="vx-list" role="list"><li><button type="button" class="md-li md-sl vx-press vx-row" data-q="${esc(q.value.trim())}"><span class="md-li-icon">${icon('search')}</span><span class="md-li-text"><span class="md-li-title md-body-large">Buscar «${esc(q.value.trim())}»</span></span></button></li></ul>`;
    };
    const run = (term) => go('M2.03', { kind: 'push', params: { q: term } });
    q.addEventListener('input', paint);
    el.querySelector('#fBuscar').addEventListener('submit', (e) => { e.preventDefault(); if (q.value.trim()) run(q.value.trim()); });
    el.querySelector('#qClear').addEventListener('click', () => { q.value = ''; paint(); q.focus(); });
    box.addEventListener('click', (e) => { const b = e.target.closest('[data-q]'); if (b) run(b.dataset.q); });
    paint();
    return el;
  },
  mount(el) { el.querySelector('#q').focus(); },
});

// ── M2.03 · Resultados ──────────────────────────────────────────────────────
register('M2.03', {
  render(ctx) {
    const q = ctx.params.q || 'aire split';
    const el = h(page(`<header class="vx-searchhead">${iconBtn('back', 'Volver', 'data-back')}
      <button type="button" class="md-search md-sl vx-searchbtn" data-go="M2.02" data-kind="smart" aria-label="Cambiar la búsqueda: ${esc(q)}">${icon('search')}<span class="md-body-large">${esc(q)}</span></button></header>`, `
      <h1 class="md-title-large vx-pad-h" tabindex="-1">Resultados para «${esc(q)}»</h1>
      <p class="md-body-medium vx-muted vx-pad-h" id="rInfo" aria-live="polite"></p>
      ${filtroBar()}<div id="rList"></div>
      <section class="vx-sec">${sectionHead('Quienes buscaron esto compraron')}${scroller(['ctrl', 'cap', 'tarj'].map(producto))}</section>`));
    el.__q = q; return el;
  },
  mount(el, ctx) {
    const q = el.__q, base = () => buscar(q);
    return wireFiltros(el, base, (list) => {
      el.querySelector('#rInfo').textContent = `${list[0] ? list[0].categoria.split(' › ')[0] : 'Climatización'} · ${countText(list.length)}`;
      const host = el.querySelector('#rList');
      host.innerHTML = list.length ? grid(list) : stateBlock({ icon: 'searchoff', title: 'No encontramos resultados', text: hayFiltros() ? 'Prueba quitando algún filtro.' : 'Prueba con otras palabras.' });
      if (ctx.first && !host.dataset.done) { host.dataset.done = 1; $$('[data-stagger]', host).forEach(stagger); }
    });
  },
});

// ── M2.04 · Filtros y orden (hoja) ──────────────────────────────────────────
register('O.FIL', {
  render() {
    const uni = state.flow.universe ? state.flow.universe() : AIRES();
    const marcas = [...new Set(uni.map((p) => p.marca).filter(Boolean))].map((m) => [m, uni.filter((p) => p.marca === m).length]);
    const f = JSON.parse(JSON.stringify(state.flow.filtros));
    const chk = (id, label, n, on) => `<label class="md-check vx-chk"><span class="md-check-hit md-sl"><input class="md-check-input" type="checkbox" id="${id}"${on ? ' checked' : ''}><span class="md-check-box${on ? ' md-check-box--on' : ''}">${on ? icon('check', 16) : ''}</span></span><span class="md-body-large">${label}</span>${n != null ? `<span class="md-body-small vx-muted vx-tab-num vx-chk-n">${n}</span>` : ''}</label>`;
    const ord = (v, t) => `<label class="md-radio vx-chk"><span class="md-radio-hit md-sl"><input class="md-radio-input" type="radio" name="ord" value="${v}"${f.orden === v ? ' checked' : ''}><span class="md-radio-ring"></span></span><span class="md-body-large">${t}</span></label>`;
    const el = h(`<div class="vx-filters"><div class="vx-sheet-head"><h2 id="sheet-title" class="md-title-large md-sheet-title" tabindex="-1">Filtros y orden</h2>${iconBtn('close', 'Cerrar', 'data-close')}</div>
      <h3 class="md-label-large vx-sub">Ordenar por</h3><div role="radiogroup" aria-label="Ordenar por">${ord('relevantes', 'Más relevantes')}${ord('menor', 'Menor precio')}${ord('mayor', 'Mayor precio')}</div>
      <h3 class="md-label-large vx-sub">Aplicados</h3><div class="vx-chips" id="fApl"></div>
      <h3 class="md-label-large vx-sub">Marca</h3>${marcas.map(([m, n]) => chk('m_' + m, esc(m), n, f.marcas.includes(m))).join('')}
      <h3 class="md-label-large vx-sub">Condición</h3>${chk('cNuevo', 'Nuevo', uni.filter((p) => p.condicion === 'Nuevo').length, f.nuevo)}
      <label class="md-switch vx-switch-row"><span class="md-body-large">Sólo disponibles</span><input class="md-sr-only" type="checkbox" role="switch" id="fDisp"${f.soloDisp ? ' checked' : ''}><span class="md-switch-track${f.soloDisp ? ' md-switch-track--on' : ''}" aria-hidden="true"><span class="md-switch-handle vx-thumb"></span></span></label>
      <h3 class="md-label-large vx-sub">Precio (USD)</h3><div class="vx-two">${field({ id: 'fMin', label: 'Mínimo', value: f.min, inputmode: 'decimal' })}${field({ id: 'fMax', label: 'Máximo', value: f.max, inputmode: 'decimal' })}</div>
      <div class="md-sheet-foot">${btn('Limpiar', { kind: 'text', id: 'fClear' })}${btn('Ver resultados', { kind: 'filled', id: 'fApply' })}</div></div>`);
    const read = () => ({ orden: el.querySelector('input[name=ord]:checked').value, marcas: marcas.map(([m]) => m).filter((m) => el.querySelector('[id="m_' + m + '"]').checked), nuevo: el.querySelector('#cNuevo').checked, soloDisp: el.querySelector('#fDisp').checked, min: el.querySelector('#fMin').value.trim(), max: el.querySelector('#fMax').value.trim() });
    const paint = () => {
      const d = read();
      const prev = state.flow.filtros; state.flow.filtros = d; const n = aplicar(uni).length; state.flow.filtros = prev;
      el.querySelector('#fApply').textContent = `Ver ${plural(n, 'resultado', 'resultados')}`;
      el.querySelector('#fApl').innerHTML = [...d.marcas, ...(d.nuevo ? ['Nuevo'] : []), ...(d.soloDisp ? ['Sólo disponibles'] : [])].map((t) => `<span class="md-chip md-chip--selected md-label-large">${esc(t)}</span>`).join('') || '<span class="md-body-medium vx-muted">Ninguno</span>';
    };
    el.addEventListener('change', (e) => {
      const t = e.target;
      if (t.matches('.md-check-input')) { const b = t.nextElementSibling; b.classList.toggle('md-check-box--on', t.checked); b.innerHTML = t.checked ? icon('check', 16) : ''; }
      if (t.matches('input[role=switch]')) t.nextElementSibling.classList.toggle('md-switch-track--on', t.checked);
      paint();
    });
    el.addEventListener('input', paint);
    el.querySelector('#fClear').addEventListener('click', () => { state.flow.filtros = { orden: 'relevantes', marcas: [], nuevo: false, soloDisp: false, min: '', max: '' }; set({ flow: state.flow }); closeOverlay(); });
    el.querySelector('#fApply').addEventListener('click', () => { state.flow.filtros = read(); set({ flow: state.flow }); closeOverlay(); });
    paint();
    return el;
  },
});

// ── M2.05 · Nichos ──────────────────────────────────────────────────────────
register('M2.05', {
  render() {
    return h(`<div>${topbar('Explorar', { back: false, trailing: iconBtn('bell', 'Avisos', 'data-go="M6.17"') })}
      <div class="vx-pad"><button type="button" class="md-search md-sl vx-searchbtn" data-go="M2.02" data-kind="smart" aria-label="Buscar en VexBiz">${icon('search')}<span class="md-body-large vx-muted">Buscar en VexBiz</span></button></div>
      <ul class="vx-niches" role="list" data-stagger>${nichos.map((n, i) => nicheTile(n).replace('<li>', `<li style="--i:${i}">`)).join('')}</ul>
      <div class="vx-pad">${btn('Ver todas las tiendas', { kind: 'outlined', block: true, go: 'M2.11' })}</div></div>`);
  },
  mount(el, ctx) { if (ctx.first) $$('[data-stagger]', el).forEach(stagger); },
});

// ── M2.06 · Nicho ───────────────────────────────────────────────────────────
register('M2.06', {
  render(ctx) {
    const n = nichos.find((x) => x.id === ctx.params.id) || nichos[0];
    const cats = [['Aires split', 312, 'aires'], ['Compresores', 86, 'compresores'], ['Tarjetas', 54, 'tarjetas'], ['Controles', 41, 'controles']];
    const el = h(page(topbar(n.nombre, { trailing: iconBtn('search', 'Buscar', 'data-go="M2.02" data-kind="smart"') }), `
      <p class="md-body-large vx-pad-h">${esc(n.id === 'clima' ? 'Aires acondicionados, repuestos y herramientas de refrigeración.' : n.texto)}</p>
      ${n.servicio ? `<div class="vx-pad-h">${banner('info', 'Requiere instalación técnica', btn('Ver técnicos', { kind: 'text', go: 'M4.03' }))}</div>` : ''}
      <div class="vx-cats">${cats.map(([t, c, id]) => `<button type="button" class="vx-cat md-sl vx-press" data-go="M2.07?cat=${id}"><span class="md-title-small">${t}</span><span class="md-body-small vx-muted vx-tab-num">${num(c, 0)}</span></button>`).join('')}</div>
      ${filtroBar()}
      <section class="vx-sec">${sectionHead('Destacados')}<p class="md-body-medium vx-muted vx-pad-h">${num(n.productos || 1284, 0)} productos</p><div id="nList"></div></section>`));
    return el;
  },
  mount(el, ctx) {
    const base = () => ['aa12', 'lg12', 'comp', 'mi12', 'ctrl'].map(producto);
    return wireFiltros(el, base, (list) => { el.querySelector('#nList').innerHTML = list.length ? grid(list) : stateBlock({ icon: 'searchoff', title: 'No encontramos resultados', text: 'Prueba quitando algún filtro.' }); });
  },
});

// ── M2.07 · Categoría ───────────────────────────────────────────────────────
register('M2.07', {
  render(ctx) {
    const subs = [['rotativo', 'Rotativos', 86], ['scroll', 'Scroll', 24], ['inverter', 'Inverter', 41], ['nevera', 'Para nevera', 57]];
    return h(page(topbar('Compresores', { trailing: iconBtn('search', 'Buscar', 'data-go="M2.02" data-kind="smart"') }), `
      <p class="md-label-large vx-muted vx-pad-h">Climatización › Repuestos de A/A</p>
      <p class="md-body-large vx-pad-h">Compresores rotativos y scroll para equipos split y de ventana, con su refrigerante y capacidad. Elige el que coincide con la placa de tu equipo…</p>
      <div class="vx-chipwrap vx-pad-h" role="group" aria-label="Tipo de compresor">${subs.map(([id, t, n]) => `<span class="md-chip-wrap"><button type="button" class="md-chip md-sl md-label-large" data-sub="${id}" aria-pressed="false">${t} <span class="vx-tab-num">${n}</span></button></span>`).join('')}</div>
      ${filtroBar()}<div id="cList"></div>`));
  },
  mount(el) {
    let sub = null;
    const base = () => COMPRESORES().filter((p) => !sub || p.sub === sub);
    const un = wireFiltros(el, base, (list) => { el.querySelector('#cList').innerHTML = list.length ? grid(list) : stateBlock({ icon: 'searchoff', title: 'No encontramos resultados', text: 'Prueba quitando algún filtro.' }); });
    const repaint = () => set({ flow: state.flow });
    el.addEventListener('click', (e) => {
      const c = e.target.closest('[data-sub]'); if (!c) return;
      sub = sub === c.dataset.sub ? null : c.dataset.sub;
      $$('[data-sub]', el).forEach((b) => { const on = b.dataset.sub === sub; b.classList.toggle('md-chip--selected', on); b.setAttribute('aria-pressed', on); });
      repaint();
    });
    return un;
  },
});

// ── M2.08 · Ficha de producto ───────────────────────────────────────────────
register('M2.08', {
  render(ctx) {
    const p = producto(ctx.params.id) || producto('aa12'), t = tienda(p.tienda), off = pct(p);
    state.flow.viewing = p.id;
    const otras = (ofertas[p.id] || []).filter((o) => !o.actual);
    const desde = otras.length ? Math.min(...otras.map((o) => o.precio)) : 0;
    const el = h(page(`<header class="vx-fichahead">${iconBtn('back', 'Volver', 'data-back')}<span class="vx-spacer"></span>
        ${iconBtn('share', 'Compartir', 'data-toast="Enlace copiado"')}
        <button type="button" class="md-iconbtn md-iconbtn--standard md-sl" id="fav" aria-pressed="false" aria-label="Guardar en favoritos">${icon('heart')}</button>
        <button type="button" class="md-iconbtn md-iconbtn--standard md-sl vx-cartbtn" data-go="M3.01" data-kind="smart" data-cart-btn aria-label="Carrito, ${plural(cartCount(), 'artículo', 'artículos')}">${icon('cart')}<span class="md-badge md-badge--large vx-cartbadge" id="fCart"${cartCount() ? '' : ' hidden'}>${cartCount()}</span></button></header>`, `
      <button type="button" class="vx-gallery vx-photo md-sl" ${teselaAttrs(p)} data-go="M2.09?id=${p.id}" data-kind="fade" aria-label="Abrir la galería, 5 fotos">${productArt(p)}<span class="vx-gcount md-label-medium">1 de 5</span></button>
      <div class="vx-pad-h vx-ficha">
        <p class="md-body-small vx-muted">${esc(p.categoria)}</p>
        <h1 class="md-headline-small" tabindex="-1">${esc(p.nombre)}${p.id === 'aa12' ? ' · 220V' : ''}</h1>
        <p class="md-body-medium vx-muted">${p.marca ? esc(p.marca) + ' · ' : ''}Ref. ${esc(p.ref || p.id.toUpperCase())}${p.gtin ? ' · GTIN ' + p.gtin : ''}</p>
        <div class="vx-badges">${off ? '<span class="vx-tag md-label-medium">La mejor oferta</span>' : ''}<span class="vx-tag md-label-medium">${esc(p.condicion)}</span></div>
        <div class="vx-price vx-tab-num">${p.antes ? `<p class="md-body-medium"><s class="vx-muted">${money(p.antes)}</s> <span class="vx-off md-label-medium">−${off} %</span> <span class="vx-muted">Oferta hasta el ${p.oferta}</span></p>` : ''}
          <p class="vx-price-now" id="fPrice">${money(p.precio)}</p><p class="md-body-medium vx-muted">${bsRef(p.precio, '15/10')}</p></div>
        <p class="vx-stockline">${stockHtml(p.stock, ` · ${plural(p.stock, 'unidad', 'unidades')}`)}</p>
        <p class="md-body-small vx-muted">Precio y existencias confirmados por la tienda</p>
        <div class="vx-qtyrow"><span class="md-title-small">Cantidad</span>${stepper('q', 1, Math.max(p.stock, 1))}</div>
        <ul class="vx-list" role="list">
          <li><button type="button" class="md-li md-li--2 md-sl vx-press vx-row" data-go="M2.12?id=${t.id}">${avatar(t.sigla)}<span class="md-li-text"><span class="md-li-title md-body-large">${esc(t.nombre)}</span><span class="md-li-sup md-body-medium">${esc(t.ciudad)} · <span class="vx-tab-num">${stars(t.rating)}</span></span></span><span class="md-li-end">${icon('chevron')}</span></button></li>
          ${otras.length ? `<li><button type="button" class="md-li md-sl vx-press vx-row" data-go="O.OTR"><span class="md-li-icon">${icon('store')}</span><span class="md-li-text"><span class="md-li-title md-body-large">Otras ${otras.length} tiendas, desde ${money(desde)}</span></span><span class="md-li-end">${icon('chevron')}</span></button></li>` : ''}</ul>
        <section class="vx-sec vx-reveal">${sectionHead('Quienes lo vieron también compraron')}${scroller(['ctrl', 'cap', 'lg12'].map(producto))}</section>
      </div>`,
      `<div class="vx-actionsum"><span class="md-body-small vx-muted">Total</span><span class="md-title-large vx-tab-num" id="fTotal">${money(p.precio)}</span></div>${btn(`${icon('cart', 20)}Añadir al carrito`, { kind: 'filled', id: 'fAdd', attrs: `data-add="${p.id}" data-qty="1"${p.stock <= 0 ? ' disabled' : ''}` })}`));
    el.__p = p; return el;
  },
  mount(el) {
    const p = el.__p; let qty = 1;
    const out = el.querySelector('[data-qty]'), dec = el.querySelector('[data-dec]'), inc = el.querySelector('[data-inc]'), add = el.querySelector('#fAdd');
    const paint = () => { out.textContent = qty; dec.disabled = qty <= 1; inc.disabled = qty >= p.stock; add.dataset.qty = qty;
      el.querySelector('#fTotal').textContent = money(p.precio * qty); play(el.querySelector('#fTotal'), 'vx-tick'); play(out, 'vx-tick'); };
    dec.addEventListener('click', () => { qty = Math.max(1, qty - 1); paint(); });
    inc.addEventListener('click', () => { qty = Math.min(p.stock, qty + 1); paint(); });
    el.querySelector('#fav').addEventListener('click', (e) => { const b = e.currentTarget, on = b.getAttribute('aria-pressed') !== 'true'; b.setAttribute('aria-pressed', on); b.classList.toggle('is-fav', on); toast(on ? 'Guardado en favoritos' : 'Quitado de favoritos'); });
    const un = subscribe(() => { const b = el.querySelector('#fCart'); b.hidden = !cartCount(); b.textContent = cartCount(); });
    reveal(el);
    return un;
  },
});

// ── M2.09 · Galería ─────────────────────────────────────────────────────────
// Patrón 19 simplificado: entra con fundido de 350 ms (la técnica FLIP se anota en INFORME.md).
register('M2.09', {
  skeleton: false,
  render() {
    const pg = producto(state.flow.viewing) || producto('aa12');
    const el = h(`<div class="vx-gal"><header class="vx-galhead">${iconBtn('close', 'Cerrar galería', 'data-back')}<h1 class="md-title-medium vx-tab-num" id="gCount" aria-live="polite" tabindex="-1">1 de 5</h1><span class="vx-spacer"></span></header>
      <div class="vx-carousel vx-galcar" tabindex="0" aria-label="Fotos del producto">${[1, 2, 3, 4, 5].map((n) => `<div class="vx-slide vx-gslide vx-photo" ${teselaAttrs(pg)} role="group" aria-label="Foto ${n} de 5">${productArt(pg, { vista: n - 1 })}</div>`).join('')}</div>
      <div class="vx-dots vx-galdots" aria-hidden="true">${[0, 1, 2, 3, 4].map((i) => `<i class="vx-dot${i === 0 ? ' is-on' : ''}"></i>`).join('')}</div></div>`);
    return el;
  },
  mount(el) {
    const car = el.querySelector('.vx-carousel'), dots = $$('.vx-dot', el), out = el.querySelector('#gCount');
    const on = () => { const i = Math.round(car.scrollLeft / car.clientWidth); dots.forEach((d, k) => d.classList.toggle('is-on', k === i)); out.textContent = `${i + 1} de 5`; };
    car.addEventListener('scroll', on, { passive: true });
    car.scrollLeft = car.clientWidth; on(); // Figma muestra «2 de 5»
  },
});

// ── M2.10 · Otras tiendas que lo venden (hoja) ──────────────────────────────
register('O.OTR', {
  render() {
    const id = state.flow.viewing || 'aa12', p = producto(id), list = ofertas[id] || [];
    const disp = list.filter((o) => o.stock > 0), best = disp.length ? Math.min(...disp.map((o) => o.precio)) : null;
    const rows = list.map((o) => {
      const t = tienda(o.t), s = stock(o.stock);
      return `<li class="vx-offer"><div class="vx-offer-top">${avatar(t.sigla)}<div><p class="md-body-large">${esc(t.nombre)}</p><p class="md-body-small vx-muted vx-tab-num">${stars(t.rating)} · ${esc(t.ciudad)}</p></div>
        <div class="vx-offer-price vx-tab-num"><b class="md-title-medium">${money(o.precio)}</b>${o.antes ? `<s class="md-body-small vx-muted">${money(o.antes)}</s>` : ''}</div></div>
        <p class="vx-offer-tags md-body-small">${o.actual ? '<span class="vx-tag">La que estás viendo</span>' : ''}${o.precio === best ? '<span class="vx-tag">Mejor precio</span>' : ''}${o.nota && o.precio !== best ? `<span class="vx-tag">${esc(o.nota)}</span>` : ''}${o.stock > 0 ? `<span class="vx-tag">Nuevo</span>` : ''}
          ${stockHtml(o.stock, o.stock > 0 ? ` · ${o.stock} u.` : '')}</p>
        <div class="vx-offer-act">${btn('Ver tienda', { kind: 'outlined', go: `M2.12?id=${t.id}` })}${btn('Añadir al carrito', { kind: 'filled', attrs: `data-add="${id}" ${o.actual ? '' : `data-oferta="${o.t}"`}${o.stock <= 0 ? ' disabled' : ''}` })}</div></li>`;
    }).join('');
    const el = h(`<div><div class="vx-sheet-head"><h2 id="sheet-title" class="md-title-large md-sheet-title" tabindex="-1">${list.length} tiendas lo venden</h2>${iconBtn('close', 'Cerrar', 'data-close')}</div>
      <p class="md-body-medium vx-muted vx-pad-h">${esc(p.nombre)}</p><ul class="vx-offers" role="list">${rows}</ul></div>`);
    closeOnGo(el);
    return el;
  },
});

// ── M2.11 · Tiendas ─────────────────────────────────────────────────────────
register('M2.11', {
  render() {
    const el = h(`<div>${topbar('Tiendas')}
      <div class="vx-pad">${field({ id: 'tq', label: 'Buscar tienda', type: 'search', autocomplete: 'off' })}</div>
      <div class="vx-chipwrap vx-pad-h" role="group" aria-label="Filtrar por nicho">${['Todas', 'Climatización', 'Electrodomésticos', 'Electricidad'].map((n, i) => `<span class="md-chip-wrap"><button type="button" class="md-chip md-sl md-label-large${i === 0 ? ' md-chip--selected' : ''}" data-n="${n}" aria-pressed="${i === 0}">${n}</button></span>`).join('')}</div>
      <ul class="vx-list" role="list" id="tList"></ul></div>`);
    let n = 'Todas', q = '';
    const paint = () => {
      const l = directorio.filter((t) => (n === 'Todas' || t.nicho === n) && norm(t.nombre).includes(norm(q)));
      el.querySelector('#tList').innerHTML = l.length ? l.map(storeRow).join('') : `<li>${stateBlock({ icon: 'searchoff', title: 'No hay tiendas con ese nombre', text: 'Estas son todas las que hay hoy.' })}</li>`;
    };
    el.addEventListener('click', (e) => { const c = e.target.closest('[data-n]'); if (!c) return; n = c.dataset.n; $$('[data-n]', el).forEach((b) => { const on = b === c; b.classList.toggle('md-chip--selected', on); b.setAttribute('aria-pressed', on); }); paint(); });
    el.querySelector('#tq').addEventListener('input', (e) => { q = e.target.value; paint(); });
    paint(); return el;
  },
});

// ── M2.12 · Tienda ──────────────────────────────────────────────────────────
register('M2.12', {
  render(ctx) {
    const id = ctx.params.id || 'ft';
    const t = directorio.find((x) => x.id === id) || tienda(id) || tienda('ft');
    const full = tienda(t.id) || {};
    const el = h(page(topbar(t.nombre, { trailing: iconBtn('search', 'Buscar', 'data-go="M2.02" data-kind="smart"') }), `
      <section class="vx-storehead vx-pad-h">${avatar(t.sigla, true)}<div><p class="md-title-medium">${esc(t.nombre)}</p>
        ${full.verificada ? `<p class="md-label-medium vx-verified">${icon('check', 16)} Verificada por VexBiz</p>` : ''}
        <p class="md-body-medium vx-muted">${esc(t.nicho)} · ${esc(full.region ? `${t.ciudad}, ${full.region.replace('Distrito Capital', 'D. Capital')}` : t.ciudad)}</p>
        <p class="md-body-medium vx-tab-num">${stars(t.rating)} · ${t.productos} productos publicados</p></div></section>
      ${filtroBar()}<div id="sList"></div>`));
    el.__id = t.id; return el;
  },
  mount(el) {
    const base = () => productos.filter((p) => p.tienda === el.__id);
    return wireFiltros(el, base, (list) => { el.querySelector('#sList').innerHTML = list.length ? grid(list) : stateBlock({ icon: 'inbox', title: 'Esta tienda todavía no tiene productos en la demo', text: 'Prueba con Frío Total C.A.' }); });
  },
});
