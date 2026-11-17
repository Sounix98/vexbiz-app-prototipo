// 01.01 · Portada. Héroe con carrusel, carril de accesos que se monta sobre el héroe, ofertas relámpago con
// cuenta atrás, más vendidos, servicios, tiendas oficiales, marcas, por qué comprar.
import { producto, tienda, portada } from '../dataweb.js';
import { icon, esc, productCard, secHead, badge, stars, reduce, productArt } from '../kit.js';
import { clock } from '../../../assets/js/format.js';

// Héroe: tres láminas. Las fotos del Figma (técnico instalando, etc.) se sustituyen por la ilustración del producto
// sobre un fondo de tono, hasta tener las fotografías.
const HERO = [
  { tag: 'Climatización', titulo: 'Todo para instalar y reparar aires, en un solo lugar', sub: 'Equipos, repuestos y herramientas de tiendas verificadas, con pago protegido por custodia Escrow.', cta: 'Ver climatización', href: '#/nicho?id=clima', art: 'aa12', tono: 'ink' },
  { tag: 'Servicio técnico', titulo: 'Técnicos certificados cerca de ti', sub: 'Instalación, mantenimiento y reparación con garantía del trabajo.', cta: 'Buscar técnicos', href: '#/servicios', art: 'tal', tono: 'tertiary' },
  { tag: 'Repuestos', titulo: 'Compresores, capacitores y tarjetas', sub: 'De tiendas verificadas, con precio y existencias confirmados.', cta: 'Ver compresores', href: '#/categoria?id=comp', art: 'comp', tono: 'secondary' },
];

const rail = (id, items) => `<div class="w-rail" data-rail="${id}"><button class="w-rail__btn w-rail__btn--prev" type="button" data-dir="-1" aria-label="Ver los anteriores">${icon('back', 20)}</button>
  <div class="w-rail__track" tabindex="0" aria-label="Desliza para ver más">${items}</div>
  <button class="w-rail__btn w-rail__btn--next" type="button" data-dir="1" aria-label="Ver más">${icon('chevron', 20)}</button></div>`;

export default {
  code: '01.01', label: 'MARKETPLACE', title: 'Marketplace',
  render() {
    const hero = HERO.map((s, i) => `<div class="w-hero__slide w-hero__slide--${s.tono}${i === 0 ? ' is-on' : ''}" role="group" aria-roledescription="lámina" aria-label="${i + 1} de ${HERO.length}"${i ? ' hidden' : ''}>
        <div class="w-hero__copy">${badge(s.tag, 'brand')}<h2>${esc(s.titulo)}</h2><p>${esc(s.sub)}</p><a class="w-btn w-btn--primary" href="${s.href}">${esc(s.cta)}</a></div>
        <div class="w-hero__art" aria-hidden="true">${productArt(producto(s.art))}</div></div>`).join('');
    const nichos = portada.nichosRapidos.map(([t, ic, href]) => `<li><a href="${href}"><span>${icon(ic, 26)}</span>${esc(t)}</a></li>`).join('');
    const tiendasOf = portada.tiendas.map((id) => { const t = tienda(id); return `<article class="w-store">
        <span class="w-store__band" aria-hidden="true"></span><span class="w-store__av" aria-hidden="true">${esc(t.sigla)}</span>
        <h3>${esc(t.nombre)} ${icon('check', 16)}</h3><p>${esc(t.nicho)}</p><p class="w-store__meta">${stars(t.rating)}<span>${t.productos} productos</span></p>
        <a class="w-btn w-btn--ghost w-btn--block" href="#/tienda?id=${t.id}">Visitar tienda</a></article>`; }).join('');
    const marcas = portada.marcas.map(([s, n, c]) => `<li><b>${esc(s)}</b><span>${esc(n)}</span><small>${c} productos</small></li>`).join('');
    const servicios = [
      ['Técnicos certificados', 'Instalación y reparación a domicilio', 'Técnicos verificados por oficio y zona, con garantía del trabajo.', 'Buscar técnicos', 'wrench', 'tertiary'],
      ['Auxilio vial 24/7', 'Grúa, batería y cerrajería en carretera', 'Empresas de auxilio activas en tu ciudad, a cualquier hora.', 'Solicitar ayuda', 'car', 'secondary'],
      ['Seguros y pólizas', 'Protege tu vehículo, hogar y negocio', 'Compara aseguradoras y pide una propuesta sin compromiso.', 'Pedir propuesta', 'shield', 'neutral'],
    ].map(([eb, t, d, cta, ic, tono]) => `<article class="w-serv w-serv--${tono}"><span class="w-serv__art" aria-hidden="true">${icon(ic, 56)}</span>
        <div class="w-serv__body"><p class="w-serv__eb">${esc(eb)}</p><h3>${esc(t)}</h3><p>${esc(d)}</p><a class="w-btn w-btn--primary" href="${{ wrench: '#/servicios', car: '#/auxilio', shield: '#/seguros' }[ic]}">${icon('chevron', 18)}${esc(cta)}</a></div></article>`).join('');
    return `<section class="w-hero" aria-label="Destacados" data-hero>
        <div class="w-hero__stage">${hero}</div>
        <button class="w-hero__arrow w-hero__arrow--prev" type="button" data-hero-dir="-1" aria-label="Lámina anterior">${icon('back', 22)}</button>
        <button class="w-hero__arrow w-hero__arrow--next" type="button" data-hero-dir="1" aria-label="Lámina siguiente">${icon('chevron', 22)}</button>
        <div class="w-hero__dots" aria-hidden="true">${HERO.map((_, i) => `<i${i === 0 ? ' class="is-on"' : ''}></i>`).join('')}</div>
      </section>
      <div class="w-wrap w-home">
        <h1 class="w-sr">VEXBIZ, marketplace de repuestos, equipos y servicios técnicos</h1>
        <nav class="w-quick" aria-label="Accesos rápidos"><ul>${nichos}</ul></nav>

        ${secHead('Ofertas relámpago', { tag: badge('EN VIVO', 'live', 'flag'), sub: 'Precios especiales por tiempo limitado bajo custodia Escrow.', action: `<p class="w-timer" aria-live="off">Termina en: <b class="vx-tab-num" data-timer>02 : 14 : 36</b></p>` })}
        ${rail('ofertas', portada.ofertas.map((id, i) => productCard(producto(id), { i })).join(''))}
        <div class="w-home__under"><span>Actualizado con inventario en tiempo real</span><a class="w-link" href="#/buscar?q=">${icon('chevron', 18)}Ver todas las ofertas relámpago</a></div>

        ${secHead('Los más vendidos', { tag: badge('TOP VENTAS', 'brand'), action: '<a class="w-link" href="#/nichos">Ver catálogo completo</a>' })}
        ${rail('vendidos', portada.vendidos.map((id, i) => productCard(producto(id), { i })).join(''))}

        ${secHead('Servicios Especializados y Soluciones Técnicas', { action: '<a class="w-link" href="#/servicios">Ver todas</a>' })}
        <div class="w-grid w-grid--3">${servicios}</div>

        ${secHead('Tiendas oficiales y distribuidores', { tag: badge('VERIFICADAS', 'info', 'check'), sub: 'Vendedores con documentos revisados y catálogo activo.', action: '<a class="w-link" href="#/tiendas">Ver más</a>' })}
        <div class="w-grid">${tiendasOf}</div>

        ${secHead('Marcas oficiales y homologadas', { tag: badge('DIRECTO DE FÁBRICA', 'neutral'), action: '<a class="w-link" href="#/buscar?q=">Explorar todas las marcas</a>' })}
        <ul class="w-brands">${marcas}</ul>

        <section class="w-why" aria-labelledby="w-why-t"><h2 id="w-why-t">Por qué comprar en VexBiz ${badge('Custodia de compra activa', 'brand', 'shield')}</h2><p>Tu dinero queda protegido hasta que confirmas que lo recibiste.</p>
          <ul>${portada.cifras.map(([ic, n, t]) => `<li>${icon(ic, 26)}<b>${n}</b><span>${t}</span></li>`).join('')}</ul></section>
      </div>`;
  },
  mount(root) {
    // Héroe: cambia cada 6 s con fundido; se pausa al pasar el puntero o al enfocar; sin avance automático con «reducir movimiento».
    const hero = root.querySelector('[data-hero]'), slides = [...hero.querySelectorAll('.w-hero__slide')], dots = [...hero.querySelectorAll('.w-hero__dots i')];
    let i = 0, paused = false;
    const show = (n) => { slides[i].hidden = true; slides[i].classList.remove('is-on'); dots[i].classList.remove('is-on'); i = (n + slides.length) % slides.length; slides[i].hidden = false; slides[i].classList.add('is-on'); dots[i].classList.add('is-on'); };
    hero.addEventListener('click', (e) => { const b = e.target.closest('[data-hero-dir]'); if (b) show(i + Number(b.dataset.heroDir)); });
    hero.addEventListener('pointerenter', () => { paused = true; }); hero.addEventListener('pointerleave', () => { paused = false; });
    hero.addEventListener('focusin', () => { paused = true; }); hero.addEventListener('focusout', () => { paused = false; });
    const auto = reduce() ? 0 : setInterval(() => { if (!paused) show(i + 1); }, 6000);
    // Carriles con flechas
    root.querySelectorAll('[data-rail]').forEach((r) => {
      const tr = r.querySelector('.w-rail__track'), prev = r.querySelector('[data-dir="-1"]'), next = r.querySelector('[data-dir="1"]');
      const upd = () => { prev.disabled = tr.scrollLeft < 8; next.disabled = tr.scrollLeft + tr.clientWidth >= tr.scrollWidth - 8; };
      r.addEventListener('click', (e) => { const b = e.target.closest('[data-dir]'); if (b) tr.scrollBy({ left: Number(b.dataset.dir) * tr.clientWidth * 0.8, behavior: reduce() ? 'auto' : 'smooth' }); });
      tr.addEventListener('scroll', upd, { passive: true }); upd();
      tr.classList.add('w-stagger');
    });
    // Cuenta atrás de las ofertas (02:14:36 al abrir), en formato del Figma «02 : 14 : 36»
    const out = root.querySelector('[data-timer]'), t0 = Date.now(), total = ((2 * 60 + 14) * 60 + 36) * 1000;
    const tick = setInterval(() => { out.textContent = clock(total - (Date.now() - t0)).split(':').join(' : '); }, 1000);
    return () => { clearInterval(auto); clearInterval(tick); };
  },
};
