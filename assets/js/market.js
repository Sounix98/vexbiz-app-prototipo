// Piezas del marketplace compartidas por las pantallas: tarjeta de producto, fila de tienda, mosaico de nicho,
// campos, requisitos de contraseña, pasos de pago, barra de acción, avisos con estado y opciones de radio.
// Todo se construye con tokens (--md-sys-*, --vx-*); ningún color ni medida suelta.
import { icon, h, $, $$, toast } from './ui.js';
import { money, num, esc, round2 } from './format.js';
import { producto, tienda } from './data.js';
import { state, set, addToCart, subscribe } from './store.js';
import { play } from './motion.js';
import { openOverlay, closeOverlay } from './router.js';

export const stars = (r) => `★ ${num(r, 1)}`;
export const avatar = (txt, big = false) => `<span class="md-avatar md-avatar--initials vx-av${big ? ' vx-av--l' : ''}" aria-hidden="true">${esc(txt)}</span>`;
export const pct = (p) => (p.antes ? Math.round((1 - p.precio / p.antes) * 100) : 0);

/** Existencias en tres niveles: se dicen con texto (y se marcan con ícono), nunca solo con color. */
export function stock(n) {
  if (n <= 0) return { label: 'Agotado', level: 'out', ic: 'close' };
  if (n <= 3) return { label: `Últimas ${n} ${n === 1 ? 'unidad' : 'unidades'}`, level: 'low', ic: 'warning' };
  return { label: 'Disponible', level: 'ok', ic: 'check' };
}
export const stockHtml = (n, extra = '') => { const s = stock(n); return `<span class="vx-stock vx-stock--${s.level} md-body-small">${icon(s.ic, 14)}${s.label}${extra}</span>`; };

/** Tarjeta de producto (tarjeta clara, precio sin píldora). Toda la tarjeta lleva a la ficha; el botón añade al carrito. */
export function productCard(p, { i } = {}) {
  const t = tienda(p.tienda), off = pct(p), out = p.stock <= 0;
  return `<article class="vx-pcard"${i != null ? ` style="--i:${i}"` : ''}>
    <a class="vx-pcard-link md-sl vx-press" href="#/M2.08?id=${p.id}" data-go="M2.08?id=${p.id}" aria-label="${esc(p.nombre)}, ${money(p.precio)}">
      <span class="vx-pimg" aria-hidden="true">${icon('box', 32)}</span>
      <span class="vx-pbody">
        ${p.marca ? `<span class="md-label-small vx-muted">${esc(p.marca)}</span>` : ''}
        <span class="md-body-medium vx-pname">${esc(p.corto || p.nombre)}</span>
        <span class="vx-pprice vx-tab-num"><b class="md-title-medium">${money(p.precio)}</b>${p.antes ? `<s class="md-body-small vx-muted">${money(p.antes)}</s><span class="vx-off md-label-small">−${off} %</span>` : ''}</span>
        <span class="md-body-small vx-muted">${esc(t.nombre)}</span>
        ${stockHtml(p.stock)}
      </span>
    </a>
    <button type="button" class="md-iconbtn md-iconbtn--tonal md-sl vx-padd" data-add="${p.id}" aria-label="Añadir al carrito: ${esc(p.corto || p.nombre)}"${out ? ' disabled' : ''}>${icon('cart')}</button>
  </article>`;
}

export const storeRow = (t) => `<li><button type="button" class="md-li md-li--2 md-sl vx-press vx-row" data-go="M2.12?id=${t.id}">
  ${avatar(t.sigla)}<span class="md-li-text"><span class="md-li-title md-body-large">${esc(t.nombre)}</span><span class="md-li-sup md-body-medium">${esc(t.nicho)} · ${esc(t.ciudad)}</span></span>
  <span class="md-li-end md-body-small vx-tab-num">${stars(t.rating)}${t.productos != null ? ` · ${t.productos} productos` : ''}</span></button></li>`;

export const nicheTile = (n) => {
  const off = !n.productos;
  return `<li><button type="button" class="vx-niche md-sl vx-press" ${off ? 'disabled' : `data-go="M2.06?id=${n.id}"`}>
    <span class="vx-niche-ico">${icon(n.id === 'clima' ? 'sliders' : n.id === 'elec' ? 'bell' : 'box', 28)}</span>
    <span class="vx-niche-text"><span class="md-title-small">${esc(n.nombre)}</span><span class="md-body-small vx-muted">${esc(n.texto)}</span>
      <span class="md-label-medium">${off ? 'Todavía sin catálogo' : `${num(n.productos, 0)} productos`}</span>
      ${n.servicio ? `<span class="md-chip-wrap"><span class="vx-tag md-label-small">${icon('wrench', 14)}Con servicio técnico</span></span>` : ''}</span>
    ${off ? '' : `<span class="vx-muted">${icon('chevron')}</span>`}</button></li>`;
};

// ── Formularios ─────────────────────────────────────────────────────────────
/** Campo de texto M3 (contorno). 16 px para evitar el zoom de iOS. */
export const field = ({ id, label, type = 'text', value = '', help = '', error = '', autocomplete = '', inputmode = '', placeholder = '', trail = '', attrs = '' }) => `
  <div class="md-tf md-tf--outlined${error ? ' md-tf--error' : ''}" data-field="${id}">
    <label class="md-tf-box"><span class="md-tf-content"><span class="md-tf-label md-body-small">${esc(label)}</span>
      <input class="md-tf-input md-body-large" id="${id}" name="${id}" type="${type}" value="${esc(value)}"${autocomplete ? ` autocomplete="${autocomplete}"` : ''}${inputmode ? ` inputmode="${inputmode}"` : ''}${placeholder ? ` placeholder="${esc(placeholder)}"` : ''} aria-describedby="${id}-help"${error ? ' aria-invalid="true"' : ''} ${attrs}></span>${trail}</label>
    <span class="md-tf-help md-body-small" id="${id}-help">${esc(error || help)}</span></div>`;

/** Muestra u oculta el error de un campo (con texto e ícono de color de error; no solo color). */
export function fieldError(root, id, msg) {
  const wrap = $(`[data-field="${id}"]`, root); if (!wrap) return;
  const help = $(`#${id}-help`, wrap), input = $('input', wrap);
  wrap.classList.toggle('md-tf--error', !!msg);
  msg ? input.setAttribute('aria-invalid', 'true') : input.removeAttribute('aria-invalid');
  if (msg) { help.textContent = msg; play(wrap, 'vx-shake'); } else help.textContent = wrap.dataset.help || '';
}

/** Requisitos de contraseña: texto + ícono (Cumplido / Falta), no solo color. */
export const PWD_RULES = [['8 caracteres o más', (v) => v.length >= 8], ['Una letra mayúscula', (v) => /[A-ZÁÉÍÓÚÑ]/.test(v)], ['Un número', (v) => /\d/.test(v)]];
export const reqsHtml = () => `<ul class="vx-reqs" role="list" aria-label="Requisitos de la contraseña">${PWD_RULES.map(([t]) => `<li data-req>${icon('close', 18)}<span>${t}</span><span class="md-sr-only"> · falta</span></li>`).join('')}</ul>`;
export function paintReqs(ul, value) {
  let all = true;
  $$('[data-req]', ul).forEach((li, i) => {
    const ok = PWD_RULES[i][1](value); all = all && ok;
    li.classList.toggle('is-ok', ok);
    li.firstElementChild.outerHTML = icon(ok ? 'check' : 'close', 18);
    li.lastElementChild.textContent = ok ? ' · cumplido' : ' · falta';
  });
  return all;
}

/** Opción con radio (tarjeta). */
export const radioOpt = ({ name, value, title, text = '', checked = false, extra = '', end = '' }) => `
  <label class="vx-opt${checked ? ' is-on' : ''}"><span class="md-radio-hit md-sl vx-opt-radio"><input class="md-radio-input" type="radio" name="${name}" value="${value}"${checked ? ' checked' : ''}><span class="md-radio-ring"></span></span>
    <span class="vx-opt-text"><span class="md-body-large">${title}</span>${text ? `<span class="md-body-medium vx-muted">${text}</span>` : ''}${extra}</span>${end}</label>`;

/** Interruptor M3: la pieza se desliza (Patrón 10). */
export const switchHtml = (id, label, on = false) => `<label class="md-switch vx-switch-row"><span class="md-body-large">${label}</span>
  <input class="md-sr-only" type="checkbox" role="switch" id="${id}"${on ? ' checked' : ''}><span class="md-switch-track${on ? ' md-switch-track--on' : ''}" aria-hidden="true"><span class="md-switch-handle vx-thumb"></span></span></label>`;
/** Sincroniza el dibujo de los interruptores y las opciones de radio de un contenedor. */
export function wireControls(root) {
  root.addEventListener('change', (e) => {
    const t = e.target;
    if (t.matches('input[role=switch]')) t.nextElementSibling.classList.toggle('md-switch-track--on', t.checked);
    if (t.matches('input[type=radio]')) $$(`input[name="${t.name}"]`, root).forEach((r) => r.closest('.vx-opt')?.classList.toggle('is-on', r.checked));
  });
}

// ── Estructura de pantalla ──────────────────────────────────────────────────
/** Pantalla con barra de acción fija abajo (App / Barra de acción). */
export const page = (top, body, action = '') => `<div class="vx-page">${top}<div class="vx-body">${body}</div>${action ? `<footer class="vx-actionbar">${action}</footer>` : ''}</div>`;

/** Pasos del pago (Patrón 17): la línea se llena con scaleX, nunca con width. */
export const STEPS = ['Entrega', 'Envío', 'Forma de pago'];
export const checkoutSteps = (n) => `<ol class="vx-steps" aria-label="Paso ${n} de 3">${STEPS.map((s, i) => `
  <li class="vx-step${i + 1 < n ? ' is-done' : ''}${i + 1 === n ? ' is-on' : ''}"${i + 1 === n ? ' aria-current="step"' : ''}>
    <span class="vx-step-dot md-label-large">${i + 1 < n ? icon('check', 16) : i + 1}</span><span class="md-label-medium">${s}</span></li>
  ${i < 2 ? `<li class="vx-step-line" aria-hidden="true"><i data-full="${i + 1 < n ? 1 : 0}"></i></li>` : ''}`).join('')}</ol>`;
export function fillSteps(root) { requestAnimationFrame(() => $$('.vx-step-line i', root).forEach((i) => i.classList.toggle('is-full', i.dataset.full === '1'))); }

/** Aviso con estado: ícono + texto (el ámbar no comunica estado). kind: info | warning | error | success | neutral */
export const banner = (kind, text, extra = '') => `<div class="vx-banner vx-banner--${kind}" role="${kind === 'error' ? 'alert' : 'status'}">${icon({ info: 'info', warning: 'warning', error: 'error', success: 'check', neutral: 'info' }[kind], 20)}<p class="md-body-medium">${text}</p>${extra}</div>`;

/** Botón de cantidad − 1 +. */
export const stepper = (key, qty, max = 99) => `<span class="vx-stepper" role="group" aria-label="Cantidad">
  <button type="button" class="md-iconbtn md-iconbtn--outlined md-sl" data-dec="${key}" aria-label="Quitar una unidad"${qty <= 1 ? ' disabled' : ''}>${icon('minus', 18)}</button>
  <output class="md-title-medium vx-tab-num" data-qty="${key}" aria-live="polite">${qty}</output>
  <button type="button" class="md-iconbtn md-iconbtn--outlined md-sl" data-inc="${key}" aria-label="Añadir una unidad"${qty >= max ? ' disabled' : ''}>${icon('add', 18)}</button></span>`;

/** Totales de la compra a partir del carrito y las opciones elegidas (nada escrito a mano). */
export function totales({ subtotal, envios, impuestoPct }) {
  const envio = round2(envios.reduce((s, e) => s + e, 0));
  const base = round2(subtotal + envio);
  const impuesto = round2((base * impuestoPct) / 100);
  return { subtotal, envio, impuesto, total: round2(base + impuesto) };
}

// ── «Añadir al carrito» (Patrón 11), por delegación ─────────────────────────
let wired = false;
export function wireAdd() {
  if (wired) return; wired = true;
  $('#phone').addEventListener('click', (e) => {
    const b = e.target.closest('[data-add]'); if (!b || b.disabled) return;
    const id = b.dataset.add, qty = Number(b.dataset.qty || 1), oferta = b.dataset.oferta || undefined;
    state.flow.lastAdded = id; state.flow.lastQty = qty;
    addToCart(id, qty, oferta);
    // El botón cambia a «Añadido» con palomita 1,2 s; el ícono del carrito hace pop y la cifra se renueva (en ui.paintCart).
    const was = b.innerHTML; b.disabled = true;
    b.innerHTML = b.classList.contains('md-btn') ? `${icon('check', 20)}Añadido` : icon('check');
    b.classList.add('vx-tick');
    setTimeout(() => { if (b.isConnected) { b.innerHTML = was; b.disabled = false; b.classList.remove('vx-tick'); } }, 1200);
    const head = $('#phone [data-cart-btn]'); head && play(head.querySelector('svg'), 'vx-pop');
    openOverlay('O.CAR');
  });
}

/** Las hojas y pantallas de flujo se cierran antes de saltar a otra pantalla. */
export const closeOnGo = (el) => el.addEventListener('click', (e) => { if (e.target.closest('[data-go]')) closeOverlay({ silent: true }); });

// ── Código de N dígitos (segundo factor, clave del banco) ───────────────────
export const otpHtml = (id, n, prefill = '', label = 'Código') => `<div class="vx-otp" id="${id}" role="group" aria-label="${label}" style="--n:${n}">${
  Array.from({ length: n }, (_, i) => `<input class="vx-otp-box md-title-large" inputmode="numeric" autocomplete="${i === 0 ? 'one-time-code' : 'off'}" maxlength="1" aria-label="Dígito ${i + 1} de ${n}" value="${prefill[i] || ''}">`).join('')}</div>`;
export function wireOtp(root, id, onChange) {
  const boxes = $$('input', $(`#${id}`, root));
  const value = () => boxes.map((b) => b.value).join('');
  boxes.forEach((b, i) => {
    b.addEventListener('input', () => { b.value = b.value.replace(/\D/g, '').slice(-1); if (b.value && boxes[i + 1]) boxes[i + 1].focus(); onChange(value()); });
    b.addEventListener('keydown', (e) => { if (e.key === 'Backspace' && !b.value && boxes[i - 1]) boxes[i - 1].focus(); });
    b.addEventListener('paste', (e) => {
      const d = (e.clipboardData?.getData('text') || '').replace(/\D/g, '').slice(0, boxes.length); if (!d) return;
      e.preventDefault(); [...d].forEach((c, k) => { boxes[k].value = c; }); boxes[Math.min(d.length, boxes.length - 1)].focus(); onChange(value());
    });
  });
  return { value, focusFirstEmpty: () => (boxes.find((b) => !b.value) || boxes[boxes.length - 1]).focus() };
}
