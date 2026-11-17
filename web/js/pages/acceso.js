// 05 · Acceso: iniciar sesión, crear cuenta, verificar el correo, unirse al país, recuperar la contraseña y
// confirmar el boletín. El Figma muestra cada pantalla como un tablero de estados; aquí cada una es un flujo
// real y además tiene una barra «Estados de la demo» para ver cualquier estado directamente.
import { usuario } from '../../../assets/js/data.js';
import { icon, esc, toast, sesion } from '../kit.js';

const CORREO = usuario.correo; // genérico de la empresa: tunombre@vexbiz.com
const logo = '<span class="w-logo w-logo--ink" aria-label="VEXBIZ">VE<span>X</span>BIZ</span>';
const card = (inner, cls = '') => `<div class="w-wrap w-auth"><section class="w-panel w-auth__card ${cls}">${inner}</section></div>`;
const demoBar = (route, estados, actual) => `<nav class="w-demo" aria-label="Estados de la demo"><span>Estados de la demo:</span>${estados.map(([k, t]) => `<a href="#/${route}?estado=${k}"${k === actual ? ' aria-current="true"' : ''}>${esc(t)}</a>`).join('')}</nav>`;
const ico = (name, tono = 'brand') => `<span class="w-auth__ico w-auth__ico--${tono}">${icon(name, 26)}</span>`;
const pass = (id, label, { help = '', autocomplete = 'current-password', top = '' } = {}) => `<div class="w-field">${top ? `<div class="w-field__top"><label for="${id}">${label}</label>${top}</div>` : `<label for="${id}">${label}</label>`}
  <span class="w-pass"><input class="w-input" id="${id}" name="${id}" type="password" autocomplete="${autocomplete}"${help ? ` aria-describedby="${id}-h"` : ''}><button type="button" class="w-pass__eye" data-peek="${id}" aria-label="Ver contraseña" aria-pressed="false">${icon('eye', 20)}</button></span>${help}</div>`;
const field = (id, label, { type = 'text', ph = '', ac = '', im = '', val = '' } = {}) => `<div class="w-field"><label for="${id}">${label}</label><input class="w-input" id="${id}" name="${id}" type="${type}"${ph ? ` placeholder="${esc(ph)}"` : ''}${ac ? ` autocomplete="${ac}"` : ''}${im ? ` inputmode="${im}"` : ''}${val ? ` value="${esc(val)}"` : ''}></div>`;
const errorOf = (form, id, msg) => {
  const inp = form.querySelector(`#${id}`), box = inp.closest('.w-field');
  let p = box.querySelector('.w-field__err'); if (!p) { p = document.createElement('p'); p.className = 'w-field__err'; p.id = `${id}-e`; box.append(p); }
  p.hidden = !msg; p.innerHTML = msg ? `${icon('error', 16)}${esc(msg)}` : '';
  if (msg) { inp.setAttribute('aria-invalid', 'true'); inp.setAttribute('aria-describedby', p.id); } else inp.removeAttribute('aria-invalid');
  return !msg;
};
/** Reglas de la contraseña del Figma: mínimo 10 caracteres, al menos una letra, al menos un número. */
export const REGLAS = [['Mínimo 10 caracteres', (v) => v.length >= 10], ['Al menos una letra', (v) => /[a-záéíóúñ]/i.test(v)], ['Al menos un número', (v) => /\d/.test(v)]];
export const reglasHtml = (id) => `<ul class="w-rules" id="${id}-h" aria-live="polite">${REGLAS.map(([t]) => `<li>${icon('check', 14)}${t}</li>`).join('')}</ul>`;
export function wireReglas(root, id) {
  const inp = root.querySelector(`#${id}`), lis = root.querySelectorAll(`#${id}-h li`);
  const paint = () => REGLAS.forEach(([, ok], i) => lis[i].classList.toggle('is-ok', ok(inp.value)));
  inp.addEventListener('input', paint); paint();
  return () => REGLAS.every(([, ok]) => ok(inp.value));
}
/** Ver/ocultar contraseña (delegado). */
export function wirePeek(root) {
  root.addEventListener('click', (e) => {
    const b = e.target.closest('[data-peek]'); if (!b) return;
    const inp = root.querySelector(`#${b.dataset.peek}`), on = inp.type === 'password';
    inp.type = on ? 'text' : 'password'; b.setAttribute('aria-pressed', String(on)); b.setAttribute('aria-label', on ? 'Ocultar contraseña' : 'Ver contraseña');
  });
}
const entrar = (next) => { sesion.on = true; window.dispatchEvent(new Event('vx-sesion')); location.hash = next || '#/tablero'; };

// ── 05.01 · Iniciar sesión ──────────────────────────────────────────────────
export const entrarPage = {
  code: '05.01', label: 'MI CUENTA', title: 'Iniciar sesión',
  render(q) {
    if (sesion.on) return card(`<h1>Ya entraste</h1><p class="w-muted">Estás dentro como Aníbal Lejarazu.</p><a class="w-btn w-btn--primary w-btn--block w-btn--lg" href="#/tablero">Ir a mi tablero</a>`);
    return card(`<p class="w-auth__welcome">Bienvenido a ${logo}</p><h1>Iniciar sesión</h1><p class="w-muted">Ingresa con tu email y contraseña registrados en Venezuela.</p>
      <form class="w-auth__form" novalidate data-login>
        ${field('lg-mail', 'Correo electrónico', { type: 'email', ph: CORREO, ac: 'username', im: 'email' })}
        ${pass('lg-pass', 'Contraseña', { top: '<a class="w-link w-link--sm" href="#/recuperar">¿Olvidaste tu contraseña?</a>' })}
        <div class="w-robot" data-robot hidden>${icon('shield', 18)}Comprobación antirrobot: aparece tras varios intentos fallidos.</div>
        <button class="w-btn w-btn--primary w-btn--block w-btn--lg" type="submit">Entrar a mi cuenta</button>
        <p class="w-auth__demo">Demo: cualquier correo y contraseña entran; la contraseña «error» falla. <button type="button" class="w-btn w-btn--text" data-demo>Entrar como Aníbal</button></p>
      </form>
      <p class="w-auth__alt">¿Todavía no tienes cuenta en Venezuela? <a class="w-link" href="#/registro${q.next ? `?next=${encodeURIComponent(q.next)}` : ''}">Crear cuenta gratis</a></p>`);
  },
  mount(root, q) {
    const f = root.querySelector('[data-login]'); if (!f) return;
    wirePeek(root); let fallos = 0;
    root.querySelector('[data-demo]').addEventListener('click', () => entrar(q.next));
    f.addEventListener('submit', (e) => {
      e.preventDefault();
      const m = f['lg-mail'].value.trim(), p = f['lg-pass'].value;
      const ok1 = errorOf(f, 'lg-mail', /^\S+@\S+\.\S+$/.test(m) ? '' : `Escribe el correo con el que te registraste, por ejemplo ${CORREO}.`);
      const ok2 = errorOf(f, 'lg-pass', p ? '' : 'Escribe tu contraseña.');
      if (!ok1 || !ok2) { f.querySelector('[aria-invalid]').focus(); return; }
      if (p === 'error') { fallos += 1; errorOf(f, 'lg-pass', 'El correo o la contraseña no coinciden. Revísalos o usa «¿Olvidaste tu contraseña?».'); f['lg-pass'].value = ''; f['lg-pass'].focus(); root.querySelector('[data-robot]').hidden = fallos < 2; return; }
      entrar(q.next);
    });
  },
};

// ── 05.02 · Crear cuenta ────────────────────────────────────────────────────
export const registroPage = {
  code: '05.02', label: 'MI CUENTA', title: 'Crear cuenta',
  render() {
    return card(`<h1>Crear cuenta</h1><p class="w-muted">Regístrate gratis para comprar, vender o trabajar como técnico en Venezuela.</p>
      <form class="w-auth__form" novalidate data-reg>
        <div class="w-row2">${field('rg-nom', 'Nombre *', { ph: 'Ej. Aníbal', ac: 'given-name' })}${field('rg-ape', 'Apellido *', { ph: 'Ej. Lejarazu', ac: 'family-name' })}</div>
        ${field('rg-mail', 'Correo electrónico *', { type: 'email', ph: CORREO, ac: 'email', im: 'email' })}
        ${pass('rg-pass', 'Contraseña de acceso *', { autocomplete: 'new-password', help: reglasHtml('rg-pass') })}
        <div class="w-field"><label for="rg-tipo">Tipo de cuenta</label><select class="w-input" id="rg-tipo"><option>Cliente</option><option>Técnico</option><option>Empresa</option></select></div>
        ${field('rg-ref', 'Código de invitación (opcional)', { ph: 'Ej. VEXBIZ2026' })}
        <button class="w-btn w-btn--primary w-btn--block w-btn--lg" type="submit">Registrar mi cuenta</button>
        <p class="w-auth__legal">Al registrarte, confirmas que aceptas nuestros Términos y Condiciones y la Política de Privacidad.</p></form>
      <p class="w-auth__alt">¿Ya tienes una cuenta registrada? <a class="w-link" href="#/entrar">Iniciar sesión</a></p>`, 'w-auth__card--wide');
  },
  mount(root) {
    const f = root.querySelector('[data-reg]'); wirePeek(root); const reglasOk = wireReglas(root, 'rg-pass');
    f.addEventListener('submit', (e) => {
      e.preventDefault();
      const oks = [errorOf(f, 'rg-nom', f['rg-nom'].value.trim() ? '' : 'Escribe tu nombre.'), errorOf(f, 'rg-ape', f['rg-ape'].value.trim() ? '' : 'Escribe tu apellido.'),
        errorOf(f, 'rg-mail', /^\S+@\S+\.\S+$/.test(f['rg-mail'].value.trim()) ? (/existe/i.test(f['rg-mail'].value) ? 'Ya hay una cuenta con ese correo. Inicia sesión o recupera la contraseña.' : '') : `Escribe un correo válido, por ejemplo ${CORREO}.`),
        errorOf(f, 'rg-pass', reglasOk() ? '' : 'La contraseña no cumple las tres reglas de abajo.')];
      if (oks.includes(false)) { f.querySelector('[aria-invalid="true"]').focus(); return; }
      location.hash = '#/verificar?estado=espera';
    });
  },
};

// ── 05.03 · Verificar cuenta ────────────────────────────────────────────────
const VER = [['sin', 'Sin confirmar'], ['espera', 'En espera'], ['confirmando', 'Confirmando'], ['ok', 'Confirmado'], ['caducado', 'Enlace caducado']];
export const verificarPage = {
  code: '05.03', label: 'MARKETPLACE', title: 'Verificar cuenta',
  render(q) {
    const e = VER.some(([k]) => k === q.estado) ? q.estado : 'sin';
    const pasos = `<ol class="w-steps-n"><li>Abre el correo de VexBiz.</li><li>Toca «Confirmar mi correo».</li><li>Vuelve aquí y entra.</li></ol>`;
    const body = {
      sin: `${ico('inbox')}<h1>Aún no has confirmado tu correo</h1><p class="w-muted">Te registraste con ${esc(CORREO)} y todavía no abriste el enlace de confirmación. Te lo acabamos de enviar otra vez.</p>${pasos}
        <a class="w-btn w-btn--primary w-btn--block w-btn--lg" href="#/verificar?estado=confirmando">${icon('check', 18)}Ya lo confirmé</a>
        <p class="w-auth__pair"><a class="w-btn w-btn--ghost" href="#/verificar?estado=espera">${icon('inbox', 18)}Reenviar el enlace</a><a class="w-btn w-btn--text" href="#/registro">Usar otra cuenta</a></p>`,
      espera: `${ico('clock', 'neutral')}<h1>Revisa tu correo</h1><p class="w-muted">Te enviamos el enlace hace un momento a ${esc(CORREO)}. Revisa también la carpeta de no deseados.</p>
        <p class="w-auth__note" data-wait>${icon('clock', 18)}<b>Podrás pedir otro en 4 min</b></p>
        <a class="w-btn w-btn--primary w-btn--block w-btn--lg" href="#/verificar?estado=confirmando">${icon('check', 18)}Ya lo confirmé</a>
        <button class="w-btn w-btn--ghost w-btn--block" type="button" data-resend disabled>${icon('inbox', 18)}Reenviar el enlace</button>`,
      confirmando: `<span class="w-spin" aria-hidden="true"></span><h1>Confirmando tu correo…</h1><p class="w-muted" role="status">Esto tarda unos segundos. No cierres esta página.</p>`,
      ok: `${ico('check', 'info')}<h1>¡Tu correo está confirmado!</h1><p class="w-muted">Ya puedes entrar con tu email y tu contraseña y elegir con qué empiezas: comprar, trabajar como técnico o registrar tu empresa.</p>
        <a class="w-btn w-btn--primary w-btn--block w-btn--lg" href="#/pais?estado=elegir">${icon('logout', 18)}Entrar</a>`,
      caducado: `${ico('error', 'bad')}<h1>Este enlace ya no vale</h1><p class="w-muted">Caducó o se pidió uno más nuevo. Entra con tu email y tu contraseña y te mandamos otro al momento.</p>
        <a class="w-btn w-btn--primary w-btn--block w-btn--lg" href="#/entrar">${icon('logout', 18)}Ir a entrar</a><a class="w-btn w-btn--text w-btn--block" href="#/registro">Crear la cuenta otra vez</a>`,
    }[e];
    return `${card(body, 'w-auth__card--center')}<div class="w-wrap w-auth__foot">${demoBar('verificar', VER, e)}</div>`;
  },
  mount(root, q) {
    if (q.estado === 'confirmando') { const t = setTimeout(() => { location.hash = '#/verificar?estado=ok'; }, 1600); return () => clearTimeout(t); }
    const w = root.querySelector('[data-wait]'); if (!w) return;
    const end = Date.now() + 4 * 60000, btn = root.querySelector('[data-resend]');
    const tick = () => { const s = Math.max(0, Math.ceil((end - Date.now()) / 1000)); w.querySelector('b').textContent = s ? `Podrás pedir otro en ${Math.ceil(s / 60)} min` : 'Ya puedes pedir otro enlace'; btn.disabled = s > 0; };
    btn.addEventListener('click', () => toast(`Te enviamos otro enlace a ${CORREO}`));
    const id = setInterval(tick, 1000); tick(); return () => clearInterval(id);
  },
};

// ── 05.04 · Unirse al país ──────────────────────────────────────────────────
const PAIS = [['incompleto', 'Enlace incompleto'], ['elegir', 'Elegir'], ['listo', 'Listo']];
const QUE = [['comprar', 'Comprar', 'Productos, repuestos y suministros de todo el catálogo.', 'bag'], ['tecnico', 'Trabajar como técnico', 'Recibe solicitudes de instalación y reparación en tu zona.', 'wrench'], ['empresa', 'Registrar mi empresa', 'Vende, ofrece servicios o da de alta a tu equipo.', 'store']];
export const paisPage = {
  code: '05.04', label: 'MARKETPLACE', title: 'Unirse al país',
  render(q) {
    const e = PAIS.some(([k]) => k === q.estado) ? q.estado : 'elegir', sel = QUE.find(([k]) => k === q.que) || QUE[1];
    const LISTO = { comprar: 'Tu cuenta de comprador está lista. Ya puedes buscar, comprar y pagar con custodia Escrow.', tecnico: 'Tu perfil de técnico ya existe. Al entrar seguirás los primeros pasos en «Trabajos»: cédula, oficios, zona y documentos. VexBiz los revisa en hasta 72 horas hábiles; mientras, ya puedes comprar.', empresa: 'Tu empresa entra en modo preparación. Completa sus datos en «Registrar mi empresa» mientras VexBiz la verifica.' };
    const body = {
      incompleto: `${ico('error', 'bad')}<h1>Este enlace no está completo</h1><p class="w-muted">Para darte de alta hace falta el enlace que te mandamos por email. Ábrelo desde el mensaje, sin copiarlo a mano.</p><a class="w-link" href="#/verificar?estado=sin">${icon('chevron', 18)}Pedir un enlace nuevo</a>`,
      elegir: `<h1>¿Qué vienes a hacer en VexBiz?</h1><p class="w-muted">Puedes cambiarlo después: esto sólo decide con qué empiezas.</p>
        <div class="w-pick-on"><small>Elegiste</small><b>${sel[1]}</b><p>${sel[2]}</p><a class="w-btn w-btn--primary w-btn--block" href="#/pais?estado=listo&que=${sel[0]}">Confirmar y continuar</a></div>
        <p class="w-muted w-sm">O elige otra cosa</p><ul class="w-optlist">${QUE.map(([k, t, d, ic]) => `<li><a href="#/pais?estado=elegir&que=${k}"${k === sel[0] ? ' aria-current="true"' : ''}><span>${icon(ic, 22)}</span><span><b>${t}</b><small>${d}</small></span>${icon('chevron', 20)}</a></li>`).join('')}</ul>`,
      listo: `${ico('check', 'info')}<h1>Listo</h1><p class="w-muted">${LISTO[sel[0]]}</p><button class="w-btn w-btn--primary" type="button" data-entrar>${icon('logout', 18)}Entrar</button>`,
    }[e];
    return `${card(body)}<div class="w-wrap w-auth__foot">${demoBar('pais', PAIS, e)}</div>`;
  },
  mount(root, q) {
    const b = root.querySelector('[data-entrar]');
    if (b) b.addEventListener('click', () => entrar(q.que === 'empresa' ? '#/empresa' : '#/tablero'));
  },
};

// ── 05.05 · Recuperar contraseña ────────────────────────────────────────────
const REC = [['pedir', 'Pedir enlace'], ['enviado', 'Enlace enviado'], ['nueva', 'Nueva contraseña'], ['caducado', 'Enlace caducado'], ['actualizada', 'Actualizada']];
export const recuperarPage = {
  code: '05.05', label: 'MARKETPLACE', title: 'Recuperar contraseña',
  render(q) {
    const e = REC.some(([k]) => k === q.estado) ? q.estado : 'pedir', dest = q.correo || CORREO;
    const nueva = (caduco) => `${ico('shield')}<h1>Crea tu nueva contraseña</h1><p class="w-muted">Al guardarla se cerrarán automáticamente las sesiones abiertas en otros dispositivos.</p>
        <form class="w-auth__form" novalidate data-nueva>${pass('rc-pass', 'Nueva contraseña', { autocomplete: 'new-password', help: reglasHtml('rc-pass') })}
        ${caduco ? `<div class="w-notice w-notice--bad" role="alert">${icon('error', 20)}<div class="w-notice__t">Ese enlace ya no vale: caducó o ya se usó. Pide uno nuevo desde «¿Olvidaste tu contraseña?».</div></div>` : ''}
        <button class="w-btn w-btn--primary w-btn--block w-btn--lg" type="submit"${caduco ? ' disabled' : ''}>Guardar contraseña y entrar</button></form>
        ${caduco ? `<a class="w-link" href="#/recuperar">${icon('chevron', 18)}Pedir un enlace nuevo</a>` : ''}`;
    const body = {
      pedir: `${ico('inbox')}<h1>¿Olvidaste tu contraseña?</h1><p class="w-muted">Escribe tu email registrado y te mandaremos un enlace seguro para crear una nueva.</p>
        <form class="w-auth__form" novalidate data-pedir>${field('rc-mail', 'Correo electrónico', { type: 'email', ph: CORREO, ac: 'email', im: 'email' })}
        <button class="w-btn w-btn--primary w-btn--block w-btn--lg" type="submit">${icon('upload', 18)}Enviar enlace de recuperación</button></form>
        <a class="w-link" href="#/entrar">${icon('back', 18)}Volver a Iniciar sesión</a>`,
      enviado: `${ico('inbox', 'info')}<h1>Revisa tu email</h1><p class="w-muted">Si existe una cuenta asociada a este email, recibirás un enlace para crear tu contraseña nueva.</p>
        <p class="w-auth__dest"><small>Dirección de destino:</small><b>${esc(dest)}</b></p>
        <p class="w-auth__note">${icon('clock', 18)}<span><b>Validez de 24 horas</b>Puede tardar un par de minutos. Mira también en la carpeta de correo no deseado.</span></p>
        <a class="w-btn w-btn--primary w-btn--block" href="#/recuperar?estado=nueva">Abrir el enlace del correo (demo)</a>
        <a class="w-btn w-btn--text w-btn--block" href="#/recuperar">¿Escribiste mal el correo? Volver a intentar</a><a class="w-link" href="#/entrar">${icon('back', 18)}Regresar al inicio de sesión</a>`,
      nueva: nueva(false), caducado: nueva(true),
      actualizada: `${ico('check', 'info')}<h1>¡Contraseña actualizada!</h1><p class="w-muted">Tu contraseña ha sido modificada con éxito y se cerraron las sesiones en otros dispositivos por seguridad.</p>
        <a class="w-btn w-btn--primary w-btn--block w-btn--lg" href="#/entrar">${icon('logout', 18)}Iniciar sesión ahora</a>`,
    }[e];
    return `${card(body, e === 'enviado' || e === 'actualizada' ? 'w-auth__card--center' : '')}<div class="w-wrap w-auth__foot">${demoBar('recuperar', REC, e)}</div>`;
  },
  mount(root) {
    const p = root.querySelector('[data-pedir]');
    if (p) p.addEventListener('submit', (e) => { e.preventDefault(); const m = p['rc-mail'].value.trim(); if (!errorOf(p, 'rc-mail', /^\S+@\S+\.\S+$/.test(m) ? '' : `Escribe tu correo, por ejemplo ${CORREO}.`)) { p['rc-mail'].focus(); return; } location.hash = `#/recuperar?estado=enviado&correo=${encodeURIComponent(m)}`; });
    const n = root.querySelector('[data-nueva]');
    if (n && n.querySelector('#rc-pass')) {
      wirePeek(root); const ok = wireReglas(root, 'rc-pass');
      n.addEventListener('submit', (e) => { e.preventDefault(); if (!errorOf(n, 'rc-pass', ok() ? '' : 'La contraseña no cumple las reglas de abajo.')) { n['rc-pass'].focus(); return; } location.hash = '#/recuperar?estado=actualizada'; });
    }
  },
};

// ── 05.06 · Confirmar suscripción al boletín ────────────────────────────────
const BOL = [['confirmando', 'Confirmando'], ['ok', 'Confirmado'], ['no', 'No se pudo'], ['incompleto', 'Enlace incompleto']];
export const boletinPage = {
  code: '05.06', label: 'MARKETPLACE', title: 'Confirmar suscripción',
  render(q) {
    const e = BOL.some(([k]) => k === q.estado) ? q.estado : 'confirmando';
    const body = {
      confirmando: `<span class="w-spin" aria-hidden="true"></span><h1>Confirmando tu suscripción…</h1>`,
      ok: `${ico('check', 'info')}<h1>Ya estás suscrito al boletín</h1><p class="w-muted">Te escribiremos con ofertas y novedades una vez por semana.</p><a class="w-link" href="#/">${icon('chevron', 18)}Ir a la tienda</a>`,
      no: `${ico('error', 'bad')}<h1>No se pudo confirmar</h1><p>El enlace caducó.</p><p class="w-muted">Puedes suscribirte otra vez desde el pie de página y te mandamos un enlace nuevo.</p><a class="w-link" href="#/">${icon('chevron', 18)}Ir a la tienda</a>`,
      incompleto: `${ico('error', 'bad')}<h1>Este enlace no está completo</h1><p class="w-muted">Para confirmar la suscripción hace falta el enlace que te mandamos por email. Ábrelo desde el correo, sin copiarlo a mano.</p>`,
    }[e];
    return `${card(body)}<div class="w-wrap w-auth__foot">${demoBar('boletin', BOL, e)}</div>`;
  },
  mount(root, q) { if (!q.estado || q.estado === 'confirmando') { const t = setTimeout(() => { location.hash = '#/boletin?estado=ok'; }, 1500); return () => clearTimeout(t); } },
};
