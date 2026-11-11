// M1 · Acceso: arranque, entrar, segundo factor, correo sin confirmar, crear cuenta, revisar correo,
// unirse al país, recuperar y crear contraseña, boletín.
import { register } from './registry.js';
import { h, icon, btn, iconBtn, topbar, toast } from '../ui.js';
import { field, fieldError, reqsHtml, paintReqs, radioOpt, wireControls, page, otpHtml, wireOtp, closeOnGo } from '../market.js';
import { openOverlay, closeOverlay, go } from '../router.js';
import { set, state } from '../store.js';
import { reduce } from '../motion.js';
import { usuario } from '../data.js';
import { esc } from '../format.js';

const wordmark = (cls = '') => `<div class="vx-logo ${cls}" role="img" aria-label="VexBiz">VE<span class="vx-logo-x">X</span>BIZ</div>`;
const back = (close = false) => `<header class="vx-backbar">${iconBtn(close ? 'close' : 'back', close ? 'Cerrar' : 'Volver', close ? 'data-close' : 'data-back')}</header>`;
const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

// ── M1.01 · Arranque ────────────────────────────────────────────────────────
// Patrón 24. El paquete de splash de VEXBIZ Drive no está en esta carpeta, así que se usa el
// plan B del prompt: fundido del logo de 800 ms con la X en ámbar. Al terminar, abre el consentimiento.
register('M1.01', {
  skeleton: false,
  render() {
    return h(`<div class="vx-splash">
      <h1 class="vx-logo vx-splash-logo" tabindex="-1" aria-label="VexBiz">VE<span class="vx-logo-x">X</span>BIZ</h1>
      <p class="md-title-medium vx-splash-tag">Productos, repuestos y servicios técnicos</p>
      <div class="md-progress md-progress--indet vx-splash-prog" role="progressbar" aria-label="Cargando VexBiz" style="--_pct:30%">
        <span class="md-progress-track"></span><span class="md-progress-active"></span></div>
    </div>`);
  },
  mount() {
    const t = setTimeout(() => openOverlay('O.CON'), reduce() ? 300 : 1600);
    return () => clearTimeout(t);
  },
});

// ── M1.02 · Entrar ──────────────────────────────────────────────────────────
// Sin salida en Figma. Propuesta (Huecos, punto 4): Entrar → M1.03; correo «+sinconfirmar» → M1.04.
register('M1.02', {
  render() {
    const el = h(page(`<header class="vx-authhead">${wordmark('vx-logo--ink')}</header>`, `
      <h1 class="md-headline-small" tabindex="-1">Inicia sesión</h1>
      <p class="md-body-large vx-muted vx-lede">Con tu cuenta de VexBiz en Venezuela</p>
      <form class="vx-form" novalidate id="fEntrar">
        ${field({ id: 'correo', label: 'Correo', type: 'email', value: usuario.correo, autocomplete: 'username', inputmode: 'email' })}
        ${field({ id: 'clave', label: 'Contraseña', type: 'password', value: 'ClaveDemo1', autocomplete: 'current-password' })}
        <div class="vx-row-end">${btn('¿Olvidaste tu contraseña?', { kind: 'text', go: 'M1.08' })}</div>
      </form>
      <div class="vx-center"><p class="md-body-medium vx-muted">¿Todavía no tienes cuenta en Venezuela?</p>${btn('Crear cuenta', { kind: 'outlined', go: 'M1.05' })}</div>`,
      btn('Entrar', { kind: 'filled', block: true, id: 'btnEntrar' })));
    const submit = () => {
      const c = el.querySelector('#correo').value.trim(), k = el.querySelector('#clave').value;
      fieldError(el, 'correo', !c ? 'Escribe tu correo' : !emailOk(c) ? 'Escribe un correo válido' : '');
      fieldError(el, 'clave', !k ? 'Escribe tu contraseña' : '');
      if (!c || !emailOk(c) || !k) return;
      set({ flow: { ...state.flow, correo: c } });
      go(c.includes('+sinconfirmar') ? 'M1.04' : 'M1.03', { kind: 'push' });
    };
    el.querySelector('#btnEntrar').addEventListener('click', submit);
    el.querySelector('#fEntrar').addEventListener('submit', (e) => { e.preventDefault(); submit(); });
    el.querySelector('#fEntrar').addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); submit(); } });
    return el;
  },
});

// ── M1.05 · Crear cuenta (pantalla de flujo desde abajo) ────────────────────
register('M1.05', {
  render() {
    const el = h(page(topbar('Crear cuenta', { close: true }), `
      <p class="md-body-large vx-lede">Regístrate gratis para comprar, vender o trabajar como técnico en Venezuela.</p>
      <form class="vx-form" novalidate id="fCrear">
        ${field({ id: 'rNombre', label: 'Nombre completo', autocomplete: 'name' })}
        ${field({ id: 'rCorreo', label: 'Correo', type: 'email', autocomplete: 'email', inputmode: 'email' })}
        <div class="md-tf md-tf--outlined"><label class="md-tf-box"><span class="md-tf-content"><span class="md-tf-label md-body-small">País</span>
          <select class="md-tf-input md-body-large" id="pais" aria-label="País"><option>Venezuela</option></select></span></label><span class="md-tf-help md-body-small"></span></div>
        ${field({ id: 'rClave', label: 'Contraseña', type: 'password', autocomplete: 'new-password' })}
        ${reqsHtml()}
        ${field({ id: 'rClave2', label: 'Repite la contraseña', type: 'password', autocomplete: 'new-password' })}
        ${field({ id: 'rCodigo', label: 'Código de invitación (opcional)' })}
      </form>
      <p class="md-body-small vx-muted vx-lede">Al crear tu cuenta aceptas los <a class="vx-link" href="#/M6.25?doc=terminos" data-go="M6.25?doc=terminos">Términos y condiciones</a> y la <a class="vx-link" href="#/M6.25?doc=privacidad" data-go="M6.25?doc=privacidad">Política de privacidad</a>.</p>
      <div class="vx-center"><p class="md-body-medium vx-muted">¿Ya tienes cuenta?</p>${btn('Entrar', { kind: 'text', attrs: 'data-close' })}</div>`,
      btn('Crear cuenta', { kind: 'filled', block: true, id: 'btnCrear' })));
    closeOnGo(el);
    const reqs = el.querySelector('.vx-reqs');
    paintReqs(reqs, '');
    el.querySelector('#rClave').addEventListener('input', (e) => paintReqs(reqs, e.target.value));
    el.querySelector('#btnCrear').addEventListener('click', async () => {
      const v = (id) => el.querySelector('#' + id).value.trim();
      const bad = {
        rNombre: !v('rNombre') && 'Escribe tu nombre',
        rCorreo: !v('rCorreo') ? 'Escribe tu correo' : !emailOk(v('rCorreo')) ? 'Escribe un correo válido' : '',
        rClave: !paintReqs(reqs, el.querySelector('#rClave').value) && 'La contraseña no cumple los requisitos',
        rClave2: el.querySelector('#rClave2').value !== el.querySelector('#rClave').value && 'Las contraseñas no coinciden',
      };
      Object.entries(bad).forEach(([k, m]) => fieldError(el, k, m || ''));
      if (Object.values(bad).some(Boolean)) return;
      set({ flow: { ...state.flow, correo: v('rCorreo'), codigo: v('rCodigo') } });
      await closeOverlay({ silent: true });
      go('M1.06', { kind: 'push' });
    });
    return el;
  },
});

// ── M1.03 · Segundo factor ──────────────────────────────────────────────────
register('M1.03', {
  render() {
    const el = h(page(back(), `
      <span class="vx-state-ico">${icon('shield', 32)}</span>
      <h1 class="md-headline-small" tabindex="-1">Verificación en dos pasos</h1>
      <p class="md-body-large vx-lede">Abre tu app de autenticación y escribe el código de 6 dígitos. Cambia cada 30 segundos.</p>
      ${otpHtml('otp', 6, '48291', 'Código de 6 dígitos')}
      <p class="md-body-medium vx-otp-err" id="otpErr" role="alert" hidden>${icon('error', 18)} El código no es correcto</p>
      <div class="vx-stack">${btn('No me llega el código', { kind: 'text', attrs: 'data-toast="El código cambia cada 30 segundos: revisa la hora de tu teléfono"' })}${btn('Usar otra cuenta', { kind: 'text', go: 'M1.02', kindNav: 'swap' })}</div>`,
      btn('Verificar', { kind: 'filled', block: true, id: 'btnVerif', attrs: 'disabled' })));
    const ctl = wireOtp(el, 'otp', (v) => { el.querySelector('#btnVerif').disabled = v.length < 6; el.querySelector('#otpErr').hidden = true; });
    el.querySelector('#btnVerif').addEventListener('click', () => {
      const v = ctl.value();
      if (v === '000000') { el.querySelector('#otpErr').hidden = false; return; }
      set({ sesion: true });
      go('M2.01', { kind: 'mode' }); // Figma: fundido 350
    });
    el.__ctl = ctl; el.__sync = () => { el.querySelector('#btnVerif').disabled = ctl.value().length < 6; };
    return el;
  },
  mount(el) { el.__sync(); el.__ctl.focusFirstEmpty(); },
});

// ── M1.04 · Correo sin confirmar ────────────────────────────────────────────
register('M1.04', {
  render() {
    const correo = state.flow.correo || usuario.correo;
    const el = h(page(back(), `
      <span class="vx-state-ico">${icon('info', 32)}</span>
      <h1 class="md-headline-small" tabindex="-1">Confirma tu correo</h1>
      <p class="md-title-medium">Aún no has confirmado tu correo</p>
      <p class="md-body-large vx-lede">Te enviamos el enlace hace un momento a ${esc(correo)}. Revisa también la carpeta de no deseados.</p>
      <div class="vx-stack">
        ${btn('Abrir mi app de correo', { kind: 'tonal', block: true, attrs: 'data-toast="Abre tu correo y toca el enlace de VexBiz"' })}
        ${btn('Reenviar enlace', { kind: 'outlined', block: true, id: 'btnReenviar', attrs: 'disabled' })}
        <p class="md-body-medium vx-muted vx-center" id="espera" aria-live="off"></p>
        ${btn('Usar otra cuenta', { kind: 'text', block: true, go: 'M1.02', kindNav: 'swap' })}
      </div>`, btn('Ya lo confirmé', { kind: 'filled', block: true, go: 'M2.01', kindNav: 'mode' })));
    return el;
  },
  mount(el) {
    // «Podrás pedir otro en 4 min»: cuenta atrás en minutos; al llegar a cero se habilita el botón.
    let left = 4 * 60;
    const paint = () => {
      const m = Math.ceil(left / 60);
      el.querySelector('#espera').textContent = left > 0 ? `Podrás pedir otro en ${m} min` : '';
      el.querySelector('#btnReenviar').disabled = left > 0;
    };
    paint();
    const id = setInterval(() => { left -= 1; paint(); if (left <= 0) clearInterval(id); }, 1000);
    return () => clearInterval(id);
  },
});

// ── M1.06 · Revisa tu correo ────────────────────────────────────────────────
register('M1.06', {
  render() {
    const step = (n, t) => `<li class="vx-step-item"><span class="vx-step-dot md-label-large">${n}</span><span class="md-body-large">${t}</span></li>`;
    return h(page(back(), `
      <span class="vx-state-ico">${icon('inbox', 32)}</span>
      <h1 class="md-headline-small" tabindex="-1">Revisa tu correo</h1>
      <p class="md-title-medium vx-tab-num">${esc(state.flow.correo || 'anibal.lejarazu@correo.com')}</p>
      <ol class="vx-steplist" role="list">
        ${step(1, 'Abre el enlace que te enviamos.')}
        ${step(2, 'Elige qué vienes a hacer: comprar, trabajar como técnico o registrar tu empresa.')}
        ${step(3, 'Hasta que no confirmes tu correo no podrás entrar.')}</ol>
      ${state.flow.codigo ? '<p class="md-body-medium vx-muted">Tu código de invitación quedó asociado.</p>' : '<p class="md-body-medium vx-muted">Tu código de invitación quedó asociado.</p>'}
      <div class="vx-stack">${btn('Volver a entrar', { kind: 'text', block: true, go: 'M1.02', kindNav: 'mode' })}</div>`,
      btn('Ya abrí el enlace', { kind: 'filled', block: true, go: 'M1.07', kindNav: 'push' })));
  },
});

// ── M1.07 · Unirse al país ──────────────────────────────────────────────────
register('M1.07', {
  render() {
    const sel = state.flow.uso || 'comprar';
    const opt = (v, title, text, ic) => radioOpt({ name: 'uso', value: v, title: `<span class="vx-opt-ico">${icon(ic)}</span>${title}`, text, checked: sel === v });
    const el = h(page(back(), `
      <h1 class="md-headline-small" tabindex="-1">¿Qué vienes a hacer en VexBiz?</h1>
      <div class="vx-options" role="radiogroup" aria-label="¿Qué vienes a hacer en VexBiz?">
        ${opt('comprar', 'Comprar', 'Productos, repuestos y suministros de todo el catálogo.', 'bag')}
        ${opt('tecnico', 'Trabajar como técnico', 'Recibe solicitudes de instalación y reparación en tu zona.', 'wrench')}
        ${opt('empresa', 'Registrar mi empresa', 'Vende, ofrece servicios o da de alta a tu equipo.', 'toolbox')}
      </div>
      <p class="md-body-medium vx-muted" id="eleg" aria-live="polite"></p>`,
      btn('Continuar', { kind: 'filled', block: true, id: 'btnCont' })));
    wireControls(el);
    const txt = { comprar: 'Elegiste comprar', tecnico: 'Elegiste trabajar como técnico', empresa: 'Elegiste registrar tu empresa' };
    const paint = () => { el.querySelector('#eleg').textContent = txt[el.querySelector('input[name=uso]:checked').value]; };
    el.addEventListener('change', paint); paint();
    el.querySelector('#btnCont').addEventListener('click', () => {
      const v = el.querySelector('input[name=uso]:checked').value;
      set({ flow: { ...state.flow, uso: v } });
      if (v === 'comprar') { set({ mode: 'comprador' }); go('M2.01', { kind: 'mode' }); }
      else if (v === 'tecnico') { set({ mode: 'tecnico' }); go('M8.01', { kind: 'mode' }); }
      else go('M6.22', { kind: 'push' });
    });
    return el;
  },
});

// ── M1.08 · Recuperar contraseña ────────────────────────────────────────────
register('M1.08', {
  render() {
    const el = h(page(back(), `
      <h1 class="md-headline-small" tabindex="-1">Recuperar contraseña</h1>
      <p class="md-title-medium">¿Olvidaste tu contraseña?</p>
      <p class="md-body-large vx-lede">Escribe tu correo y te enviamos un enlace para crear una nueva.</p>
      <form class="vx-form" novalidate>${field({ id: 'correo', label: 'Correo', type: 'email', value: state.flow.correo || '', autocomplete: 'email', inputmode: 'email' })}</form>
      <div class="vx-stack">${btn('Volver a entrar', { kind: 'text', block: true, go: 'M1.02', kindNav: 'swap' })}</div>`,
      btn('Enviar enlace', { kind: 'filled', block: true, id: 'btnEnviar' })));
    el.querySelector('#btnEnviar').addEventListener('click', () => {
      const c = el.querySelector('#correo').value.trim();
      fieldError(el, 'correo', !c ? 'Escribe tu correo' : !emailOk(c) ? 'Escribe un correo válido' : '');
      if (!c || !emailOk(c)) return;
      toast('Te enviamos el enlace. En esta demo lo abrimos por ti.');
      go('M1.09', { kind: 'push' }); // Figma: M1.08 → M1.09 (push 350)
    });
    return el;
  },
});

// ── M1.09 · Contraseña nueva ────────────────────────────────────────────────
register('M1.09', {
  render() {
    const el = h(page(back(), `
      <h1 class="md-headline-small" tabindex="-1">Contraseña nueva</h1>
      <p class="md-title-medium">Crea tu contraseña nueva</p>
      <p class="md-body-large vx-lede">Al guardarla se cerrarán tus sesiones abiertas en otros dispositivos.</p>
      <form class="vx-form" novalidate>${field({ id: 'clave', label: 'Contraseña nueva', type: 'password', autocomplete: 'new-password' })}${reqsHtml()}</form>`,
      btn('Guardar contraseña', { kind: 'filled', block: true, id: 'btnGuardar', attrs: 'disabled' })));
    const reqs = el.querySelector('.vx-reqs');
    paintReqs(reqs, '');
    el.querySelector('#clave').addEventListener('input', (e) => { el.querySelector('#btnGuardar').disabled = !paintReqs(reqs, e.target.value); });
    el.querySelector('#btnGuardar').addEventListener('click', () => {
      toast('Contraseña actualizada');
      go('M1.02', { kind: 'mode' }); // Figma: fundido 350
    });
    return el;
  },
});

// ── M1.10 · Boletín ─────────────────────────────────────────────────────────
register('M1.10', {
  render() {
    const el = h(page(back(), `
      <span class="vx-state-ico">${icon('check', 32)}</span>
      <h1 class="md-headline-small" tabindex="-1">Boletín</h1>
      <p class="md-title-medium">Ya estás suscrito al boletín</p>
      <p class="md-body-large vx-lede">Te escribiremos con ofertas y novedades una vez por semana.</p>
      ${btn('Ir al inicio', { kind: 'filled', block: true, go: 'M2.01', kindNav: 'mode' })}
      <hr class="md-divider vx-hr">
      <p class="md-body-medium vx-muted">Si llegas desde Ayuda o el enlace falla:</p>
      <h2 class="md-title-large">Suscríbete al boletín</h2>
      <p class="md-body-large vx-lede">Ofertas, cupones y novedades. Una vez por semana, sin más.</p>
      <form class="vx-form" novalidate>${field({ id: 'correo', label: 'Correo', type: 'email', value: state.flow.correo || usuario.correo, autocomplete: 'email', inputmode: 'email' })}</form>
      ${btn('Suscribirme', { kind: 'filled', block: true, id: 'btnSub' })}
      <p class="md-body-small vx-muted">Sin correo basura. Puedes darte de baja cuando quieras.</p>`));
    el.querySelector('#btnSub').addEventListener('click', () => {
      const c = el.querySelector('#correo').value.trim();
      fieldError(el, 'correo', !c ? 'Escribe tu correo' : !emailOk(c) ? 'Escribe un correo válido' : '');
      if (c && emailOk(c)) toast('Listo: te suscribimos al boletín');
    });
    return el;
  },
});
