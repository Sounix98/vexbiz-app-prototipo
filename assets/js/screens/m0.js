// M0 · Transversales: cambiar de modo, avisos en vivo, añadido al carrito, estados comunes, consentimiento.
import { register } from './registry.js';
import { h, icon, btn, iconBtn, topbar, stateBlock, skeleton, toast } from '../ui.js';
import { state, set, cartLines, cartCount, cartSubtotal } from '../store.js';
import { go, goHome, closeOverlay } from '../router.js';
import { money, plural, esc, clock } from '../format.js';
import { avisos, producto, tienda } from '../data.js';
import { countdown } from '../motion.js';
import { HOME, MODE_NAME } from './catalog.js';

const sheetHead = (title, trailing = '') => `<div class="vx-sheet-head"><h2 id="sheet-title" class="md-title-large md-sheet-title" tabindex="-1">${esc(title)}</h2>${trailing}</div>`;
const closeBtn = () => iconBtn('close', 'Cerrar', 'data-close');

// ── M0.03 · Cambiar de modo (hoja) ──────────────────────────────────────────
register('O.MOD', {
  render() {
    const row = (mode, ic, title, text) => `
      <li><button type="button" class="md-li md-li--2 md-sl vx-press vx-row" data-mode="${mode}"${state.mode === mode ? ' aria-current="true"' : ''}>
        <span class="md-li-icon">${icon(ic)}</span>
        <span class="md-li-text"><span class="md-li-title md-body-large">${title}</span><span class="md-li-sup md-body-medium">${text}</span></span>
        <span class="md-li-end">${state.mode === mode ? `${icon('check')}<span class="md-sr-only">Modo actual</span>` : ''}</span>
      </button></li>`;
    const el = h(`<div>${sheetHead('Cambiar de modo', closeBtn())}
      <ul class="vx-list" role="list">
        ${row('comprador', 'bag', 'Comprador', 'Compra productos y pide servicios.')}
        ${row('tienda', 'store', 'Tienda', 'Pedidos, productos y dinero de Frío Total.')}
        ${row('tecnico', 'wrench', 'Técnico', 'Tus trabajos, servicios y compras de trabajo.')}
      </ul>
      <p class="md-label-large vx-sub">Haz más con VexBiz</p>
      <ul class="vx-list" role="list"><li><button type="button" class="md-li md-li--2 md-sl vx-press vx-row" data-empresa>
        <span class="md-li-icon">${icon('toolbox')}</span>
        <span class="md-li-text"><span class="md-li-title md-body-large">Registrar mi empresa de servicios</span></span>
        <span class="md-li-end">${icon('chevron')}</span></button></li></ul></div>`);
    el.addEventListener('click', async (e) => {
      const m = e.target.closest('[data-mode]');
      if (m) { // Apéndice B: ▣ Cambiar de modo → M2.01 / M7.01 / M8.01 (fundido 350) y reinicia la pila
        set({ mode: m.dataset.mode });
        await closeOverlay({ silent: true });
        goHome(m.dataset.mode, 'mode');
      } else if (e.target.closest('[data-empresa]')) { // → M6.22 (push 350)
        await closeOverlay({ silent: true });
        go('M6.22', { kind: 'push' });
      }
    });
    return el;
  },
});

// ── M0.04 · Avisos en vivo (hoja) ───────────────────────────────────────────
register('O.AVI', {
  render() {
    const a = avisos;
    const el = h(`<div>${sheetHead('Avisos en vivo', closeBtn())}
      <article class="vx-aviso vx-aviso--hero">
        <p class="md-label-large"><span class="vx-live-dot vx-live" aria-hidden="true"></span> ${esc(a.compra.titulo)} <span class="vx-muted">· ahora</span></p>
        <p class="md-body-large">${esc(a.compra.detalle)}</p>
        <p class="md-body-medium vx-count-row"><span id="avCount" class="vx-tab-num md-title-medium">${clock(a.compra.ms)}</span><span id="avUrgent" class="vx-urgent" hidden>${icon('warning', 18)} Queda menos de un minuto</span></p>
        <span class="vx-bar-track" aria-hidden="true"><span id="avBar" class="vx-bar-fill"></span></span>
        <span class="md-sr-only" id="avLive" aria-live="polite"></span>
      </article>
      <p class="md-label-large vx-sub">Lo que acaba de pasar <span class="vx-live-tag"><span class="vx-live-dot vx-live" aria-hidden="true"></span>en vivo</span></p>
      <ul class="vx-list" role="list">${a.recientes.map((r) => `
        <li><button type="button" class="md-li md-li--2 md-sl vx-press vx-row" data-go="M6.17" data-kind="push">
          <span class="md-li-text"><span class="md-li-title md-body-large">${esc(r.titulo)}</span><span class="md-li-sup md-body-medium">${esc(r.detalle)}</span></span>
          <span class="md-li-end md-li-meta md-body-small">${esc(r.hora)}</span></button></li>`).join('')}</ul>
      <label class="md-switch vx-switch-row"><span class="md-body-large">Sonido de avisos</span>
        <input class="md-sr-only" type="checkbox" role="switch" id="avSound" ${state.sonidoAvisos ? 'checked' : ''}>
        <span class="md-switch-track ${state.sonidoAvisos ? 'md-switch-track--on' : ''}" aria-hidden="true"><span class="md-switch-handle vx-thumb"></span></span></label>
      <div class="md-sheet-foot">${btn('Ver avisos', { kind: 'text', go: 'M6.17', kindNav: 'push' })}</div></div>`);
    // Cualquier salto desde la hoja la cierra primero.
    el.addEventListener('click', (e) => { if (e.target.closest('[data-go]')) closeOverlay({ silent: true }); });
    const sw = el.querySelector('#avSound');
    sw.addEventListener('change', () => {
      set({ sonidoAvisos: sw.checked });
      el.querySelector('.md-switch-track').classList.toggle('md-switch-track--on', sw.checked);
    });
    return el;
  },
  mount(el) {
    // Patrón 15: cuenta regresiva lineal; bajo 60 s cambia a error con ícono y texto, y se anuncia una sola vez.
    let said = false;
    return countdown({
      textEl: el.querySelector('#avCount'), barEl: el.querySelector('#avBar'), ms: avisos.compra.ms,
      onTick(left) {
        if (left < 60000 && !said) {
          said = true;
          el.querySelector('#avUrgent').hidden = false;
          el.querySelector('#avCount').classList.add('vx-is-urgent');
          el.querySelector('#avLive').textContent = 'Queda menos de un minuto para contestar la compra.';
        }
      },
    });
  },
});

// ── M0.05 · Añadido al carrito (hoja) ───────────────────────────────────────
register('O.CAR', {
  render() {
    const id = state.flow.lastAdded || 'aa12';
    const p = producto(id), t = tienda(p.tienda);
    const line = state.cart.find((l) => l.id === id);
    const qty = line ? line.qty : 1;
    return h(`<div>${sheetHead('Añadido al carrito', closeBtn())}
      <div class="vx-added">
        <span class="vx-thumb-ph" aria-hidden="true">${icon('bag', 28)}</span>
        <div><p class="md-body-large">${esc(p.nombre)}</p><p class="md-body-medium vx-muted">${esc(t.nombre)}</p>
          <p class="md-title-medium vx-tab-num">${money(p.precio)} × ${qty}</p></div>
      </div>
      <p class="md-body-medium vx-sub vx-tab-num">${plural(cartCount(), 'artículo', 'artículos')} en tu carrito · <strong>${money(cartSubtotal())}</strong></p>
      <div class="md-sheet-foot">${btn('Seguir comprando', { kind: 'text', attrs: 'data-close' })}${btn('Ver carrito', { kind: 'filled', go: 'M3.01', kindNav: 'push' })}</div></div>`);
  },
  mount(el) {
    el.addEventListener('click', (e) => { if (e.target.closest('[data-go]')) closeOverlay({ silent: true }); });
  },
});

// ── M0.06 · Estados comunes ─────────────────────────────────────────────────
register('M0.06', {
  skeleton: false,
  render() {
    const el = h(`<div>${topbar('Estados comunes')}<div class="vx-states">
      <section><h2 class="md-label-large vx-sub">Cargando</h2>${skeleton()}</section>
      <section><h2 class="md-label-large vx-sub">Vacío</h2>${stateBlock({ icon: 'inbox', title: 'Todavía no tienes pedidos', text: 'Cuando compres algo aparecerá aquí.', action: btn('Explorar', { kind: 'outlined', go: 'M2.05', kindNav: 'swap' }) })}</section>
      <section><h2 class="md-label-large vx-sub">Error</h2>${stateBlock({ icon: 'error', title: 'No pudimos cargar tus pedidos', action: btn('Reintentar', { kind: 'outlined', attrs: 'data-toast="Reintentando…"' }) })}</section>
      <section><h2 class="md-label-large vx-sub">Sin conexión</h2>${stateBlock({ icon: 'wifioff', title: 'Sin conexión', action: btn('Reintentar', { kind: 'outlined', attrs: 'data-toast="Todavía sin señal"' }) })}</section>
      <section><h2 class="md-label-large vx-sub">No encontrado</h2>${stateBlock({ icon: 'searchoff', title: 'Esto ya no está disponible', action: btn('Ir al inicio', { kind: 'tonal', go: 'M2.01', kindNav: 'swap' }) })}</section>
      <section><h2 class="md-label-large vx-sub">Hace falta entrar</h2>${stateBlock({ icon: 'lock', title: 'Entra para continuar', action: btn('Entrar', { kind: 'filled', go: 'M1.02', kindNav: 'push' }) })}</section>
      <section><h2 class="md-label-large vx-sub">Sin acceso a un modo</h2>${stateBlock({ icon: 'store', title: 'Necesitas el modo Tienda', action: btn('Cambiar de modo', { kind: 'tonal', go: 'O.MOD' }) })}</section>
      <section><h2 class="md-label-large vx-sub">Fin de lista</h2><p class="vx-end md-body-medium">No hay más</p></section>
      <section><h2 class="md-label-large vx-sub">Aviso breve</h2><div class="vx-pad">${btn('Mostrar aviso', { kind: 'outlined', attrs: 'data-toast="Guardado en tu cuenta"' })}</div></section>
    </div></div>`);
    return el;
  },
});

// ── M0.07 · Consentimiento de privacidad (diálogo) ──────────────────────────
register('O.CON', {
  render() {
    const sw = (id, title, text) => `
      <label class="md-switch vx-switch-row vx-consent-opt"><span><span class="md-body-large">${title}</span><br><span class="md-body-medium vx-muted">${text}</span></span>
        <input class="md-sr-only" type="checkbox" role="switch" id="${id}">
        <span class="md-switch-track" aria-hidden="true"><span class="md-switch-handle vx-thumb"></span></span></label>`;
    const el = h(`<div class="vx-consent">
      <span class="vx-state-ico">${icon('shield', 32)}</span>
      <h2 id="dlg-title" class="md-headline-small" tabindex="-1">Tu privacidad</h2>
      <p class="md-body-large">Lo necesario para que la app funcione (sesión, carrito y país) no se pregunta. Te pedimos permiso para análisis y publicidad.</p>
      <div data-view="main" class="vx-consent-actions">
        ${btn('Aceptar todo', { kind: 'filled', block: true, attrs: 'data-accept="todo"' })}
        ${btn('Solo lo necesario', { kind: 'filled', block: true, attrs: 'data-accept="necesario"' })}
        ${btn('Personalizar', { kind: 'text', block: true, attrs: 'data-custom' })}
      </div>
      <div data-view="custom" hidden>
        <p class="md-label-large vx-sub">Personalizar</p>
        ${sw('cAnalisis', 'Análisis', 'Para saber qué se busca y qué no se encuentra.')}
        ${sw('cPublicidad', 'Publicidad', 'Para enseñarte anuncios de lo que miraste.')}
        <div class="vx-consent-actions">${btn('Guardar mi elección', { kind: 'filled', block: true, attrs: 'data-save' })}${btn('Volver', { kind: 'text', block: true, attrs: 'data-main' })}</div>
      </div></div>`);
    const view = (v) => { el.querySelector('[data-view=main]').hidden = v !== 'main'; el.querySelector('[data-view=custom]').hidden = v !== 'custom'; };
    const finish = async (value) => { // ▣ Consentimiento → M1.02 (fundido 350)
      set({ consent: value });
      await closeOverlay({ silent: true });
      go('M1.02', { kind: 'mode' });
    };
    el.addEventListener('click', (e) => {
      const a = e.target.closest('[data-accept]');
      if (a) finish(a.dataset.accept);
      else if (e.target.closest('[data-custom]')) { view('custom'); el.querySelector('#cAnalisis').focus(); }
      else if (e.target.closest('[data-main]')) view('main');
      else if (e.target.closest('[data-save]')) finish({ analisis: el.querySelector('#cAnalisis').checked, publicidad: el.querySelector('#cPublicidad').checked });
    });
    el.addEventListener('change', (e) => { // el interruptor se desliza (Patrón 10)
      const t = e.target.closest('input[role=switch]');
      if (t) t.nextElementSibling.classList.toggle('md-switch-track--on', t.checked);
    });
    return el;
  },
});
