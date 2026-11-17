// 06 · Mi cuenta: tablero, datos, sesiones, seguridad, avisos, direcciones, formas de pago, empresa, compras,
// detalle del pedido, pago del grupo, postventa, reclamos, garantías, servicios pedidos y aprender (cursos,
// lección, eventos, comunidad, nivel). Datos de la app (data.js, data2.js) y lo que solo trae el Figma web.
import { usuario, direcciones as dirApp, pedidos, detallePedidos, reclamosIni, pagosIni, serviciosPedidos, compra, bancosVE, producto as productoApp } from '../../../assets/js/data.js';
import { cursosAcademia, avanceIni, materiales, PUNTOS_INI } from '../../../assets/js/data2.js';
import { round2 } from '../../../assets/js/format.js';
import { icon, esc, money, badge, notice, crumbs, toast, sesion, productArt } from '../kit.js';
import { producto } from '../dataweb.js';
import { REGLAS, reglasHtml, wireReglas, wirePeek } from './acceso.js';

// ── Datos que solo muestra el Figma web ─────────────────────────────────────
const W = {
  sesiones: [{ id: 's1', equipo: 'Chrome · Windows 11', ip: '190.205.33.18', desde: '16/10/2026 · 01:12', actual: true }, { id: 's2', equipo: 'Safari · iPhone (iOS 19)', ip: '190.205.33.18', desde: '12/10/2026 · 20:40' }, { id: 's3', equipo: 'App VexBiz · Android 15', ip: '200.84.12.6', desde: '02/10/2026 · 09:05' }],
  avisos: [
    { id: 'a1', ic: 'error', tono: 'bad', t: 'La compra #VX-20430 vence en 2 horas', d: 'Transfiere el pago antes de las 18:00 o la compra se cancela y el stock se libera.', cuando: 'hace 10 min', nuevo: true, tag: ['Urgente', 'bad'], to: '#/pago-grupo' },
    { id: 'a2', ic: 'truck', tono: 'ink', t: 'Tu pedido #VX-20412 va en camino', d: 'MRW · guía 4019-882-113.', cuando: 'hace 2 h', nuevo: true, to: '#/compras' },
    { id: 'a3', ic: 'receipt', tono: 'brand', t: 'ClimaPro te mandó una cotización', d: 'Instalación de aire split 12.000 BTU · $ 85,00 para el sábado 18/10.', cuando: 'hace 5 h', nuevo: true, tag: ['Por responder', 'brand'], to: '#/servicios-pedidos' },
    { id: 'a4', ic: 'shield', tono: 'info', t: 'Tu reclamo #R-0091 se resolvió a tu favor', d: 'VexBiz aprobó el reembolso de $ 12,50.', cuando: 'hace 3 días', to: '#/reclamos' },
    { id: 'a5', ic: 'lock', tono: 'neutral', t: 'Nuevo inicio de sesión en Safari · iPhone', d: '', cuando: 'hace 4 días', to: '#/sesiones' },
  ],
  refs: { oficina: 'Al lado del banco', taller: 'Galpón 7' },
  bancoDe: { nomina: ['Banco de Venezuela · 0102', 'Cuenta', '····4567'], banesco: ['Banesco · 0134', 'Teléfono', '0414 ···1234'] },
  garantias: [
    { producto: 'Aire acondicionado split inverter 12.000 BTU', responde: 'Samsung (fabricante) a través de Frío Total C.A.', hasta: '16/10/2027', meses: 11, orden: '#VX-20412', terminos: 'Cubre fallas de fábrica del compresor y la tarjeta. No cubre daños por mala instalación.', cert: true },
    { producto: 'Servicio técnico especializado', responde: 'ClimaPro Servicios', hasta: '18/01/2027', meses: 3, terminos: 'Cubre fugas en las uniones y mano de obra. No cubre daños eléctricos.' },
    { producto: 'Capacitor de marcha 35+5 µF', responde: 'Frío Total C.A.', hasta: '17/10/2026', manana: true, orden: '#VX-19870', cert: true },
  ],
  expiradas: [{ producto: 'Regleta con protector 6 tomas (garantía de tienda)', hasta: '18/09/2026' }, { producto: 'Juego de llaves combinadas', hasta: '02/08/2026' }], // INVENTADO: el Figma solo dice «2 garantías con plazo expirado»
  servicioExtra: { id: '#S-2050', estado: 'En espera de respuesta', servicio: 'Reparación de nevera que no enfría', quien: 'José Rodríguez', rating: 4.5, cuando: 'A convenir', donde: 'Av. Bolívar Norte, Edif. Sol, Apto 4B, Valencia' },
  niveles: [['Aprendiz', 0], ['Ayudante', 100], ['Técnico', 400], ['Técnico Avanzado', 1000], ['Especialista', 1700], ['Experto', 2800], ['Maestro', 4500], ['Referente VexBiz', 7000]],
  historial: [['Lección vista: Probar el IPM', '16/10/2026', 10], ['Respuesta marcada como solución', '12/10/2026', 50], ['Curso completado: Instalación de split', '08/10/2026', 100], ['Respuesta retirada por la moderación', '01/10/2026', -20]],
  foros: [['Foro de aire acondicionado', 'Climatización', 214, 'aa12'], ['Refrigeración comercial', 'Refrigeración comercial', 96, 'nev14'], ['Línea blanca', 'Electrodomésticos', 158, 'nev14'], ['Electricidad residencial', 'Electricidad', 301, 'led'], ['Energía solar', 'Energía solar', 42, 'bulb']],
  eventos: [
    { id: 'vivo', vivo: true, t: 'Directo: errores comunes al instalar inverter', cuando: 'Hoy · 19:00 · Ramón Márquez', d: 'Preguntas en vivo con casos de la comunidad.', quedan: 12, cupo: 100 },
    { id: 'solar', t: 'Charla: energía solar para el hogar', cuando: 'Jue 23/10/2026 · 18:30 · SolarVen', d: 'Cómo dimensionar un sistema de respaldo.', quedan: 40, cupo: 80 },
    { id: 'tab', t: 'Taller: tableros residenciales', cuando: 'Sáb 01/11/2026 · 10:00 · Voltio Center', quedan: 0, cupo: 50 },
  ],
  pasados: ['Seguridad con refrigerantes inflamables · 02/10/2026', 'Mantenimiento de cavas · 18/09/2026'],
  codigos: ['7F3K-92LD', 'Q8MZ-4RTW', '2HNP-6VXA', 'L9CE-1JQU', 'W5BT-8KSN', 'M3YG-0PDF'],
};
// Estado de la demo (en memoria; se pierde al recargar, como el resto del prototipo).
const S = (globalThis.__vxCuenta ||= {
  leidos: new Set(), dirs: dirApp.map((d) => ({ ...d, ref: d.ref || W.refs[d.id] || '' })), pagos: pagosIni.map((p) => ({ ...p })), sesiones: [...W.sesiones],
  dfa: false, foto: false, puntos: PUNTOS_INI, vista: false, apuntado: new Set(), reclamos: reclamosIni.map((r) => ({ ...r, mensajes: [...(r.mensajes || [])] })), pagado: false,
});

// ── Panel lateral ───────────────────────────────────────────────────────────
const MENUS = {
  tablero: ['Tu cuenta', [['tablero', 'Mi tablero', 'explore'], ['cuenta', 'Mi cuenta', 'person'], ['compras', 'Mis compras', 'bag'], ['trabajos', 'Trabajos', 'wrench', '#/mi-trabajo']]],
  cuenta: ['Mi cuenta', [['cuenta', 'Mi cuenta', 'person'], ['direcciones', 'Mis direcciones', 'pin'], ['pagos', 'Mis formas de pago', 'wallet'], ['avisos', 'Avisos y alertas', 'bell'], ['seguridad', 'Seguridad y 2FA', 'lock']]],
  compras: ['Mis compras', [['compras', 'Mis compras', 'bag'], ['reclamos', 'Reclamos', 'flag'], ['garantias', 'Garantías', 'shield'], ['servicios-pedidos', 'Servicios pedidos', 'briefcase']]],
};
const panel = (menu, activo, body) => { const [t, items] = MENUS[menu]; return `<div class="w-wrap w-acc"><nav class="w-panel w-side" aria-label="${t}"><button class="w-side__m" type="button" aria-expanded="false">${icon('menu', 22)}<span><b>${t} › ${(items.find(([k]) => k === activo) || items[0])[1]}</b><small>Ir a otra sección</small></span>${icon('chevron', 20)}</button><p class="w-side__t">${t}</p><ul>${items.map(([k, n, ic, href]) => `<li><a href="${href || `#/${k}`}"${k === activo ? ' aria-current="page"' : ''}>${icon(ic, 22)}<span>${n}</span>${k === activo ? '<small>Aquí</small>' : ''}</a></li>`).join('')}</ul></nav><div class="w-acc__main">${body}</div></div>`; };
const head = (crumbsList, title, sub = '', action = '') => `${crumbs(crumbsList)}<div class="w-acc__head"><div><h1 class="w-title">${title}</h1>${sub ? `<p class="w-lede">${sub}</p>` : ''}</div>${action}</div>`;
const pager = () => `<nav class="w-pager" aria-label="Páginas"><button type="button" class="w-btn w-btn--text" disabled>${icon('back', 18)}Anterior</button><span>Página 1</span><button type="button" class="w-btn w-btn--text" disabled>Siguiente${icon('chevron', 18)}</button></nav>`;
const card = (inner, cls = '') => `<section class="w-panel w-card2 ${cls}">${inner}</section>`;
const pageOf = (code, label, title, render, mount) => ({ code, label, title, sesion: 'login', render, mount });
const orderKey = (o) => `${o.id}|${o.tienda}`;
const ESTADO = { 'Falta pagar': ['bad', 'wallet', 'Falta pagar'], 'Pago reportado': ['warn', 'clock', 'Pago reportado · En comprobación'], 'En camino': ['info', 'truck', 'En camino'], Entregado: ['ok', 'check', 'Entregado'], Pagado: ['info', 'check', 'Pagado'] };
const estadoBadge = (e, extra = '') => { const [k, ic, t] = ESTADO[e] || ['neutral', 'info', e]; return badge(t + extra, k, ic); };
const k2 = (t) => String(t).toLowerCase().split(' ').slice(0, 2).join(' ');
const thumbOf = (nombre) => { const p = productosByName().find((x) => k2(x.nombre) === k2(nombre)) || null; return `<span class="w-thumb">${productArt(p)}</span>`; };
let _pn; const productosByName = () => (_pn ||= ['aa12', 'ctrl', 'tal', 'llav', 'tarj', 'led', 'cap'].map(producto).filter(Boolean));

// ── 06.01 · Mi tablero ──────────────────────────────────────────────────────
const tablero = pageOf('06.01', 'MI CUENTA', 'Mi tablero', () => {
  const r = usuario.resumen, max = Math.max(...usuario.gastoMensual.map(([, v]) => v)), tot = r.sinPagar + r.enCamino + r.entregados;
  const pasos = [['Quién eres', 'Sube tu cédula: es lo que le dice al cliente quién entra en su casa.'], ['Datos profesionales', 'Cuenta quién eres y cuántos años llevas en el oficio.', true], ['Oficios', 'Apúntate a los oficios que dominas. Sin oficio no hay nada que certificar.'], ['Documentos', 'Faltan documentos obligatorios de este país.'], ['Servicios y tarifas', 'Publica al menos un servicio con su tarifa: es lo que el cliente contrata.'], ['Agenda', 'Carga tu horario para que se te pueda agendar.', true]];
  return panel('tablero', 'tablero', `<h1 class="w-title">¡Hola, ${esc(usuario.nombre.split(' ')[0])}! Bienvenido</h1><p class="w-lede">Lo que está pasando en tu cuenta ahora mismo.</p>
    ${card(`<div class="w-card2__head"><h2>${icon('bag', 24)}Mis compras</h2><a class="w-link" href="#/compras">${icon('chevron', 18)}Ver todas</a></div>
      <div class="w-stats"><a href="#/pago-grupo"><b>${r.sinPagar}</b><span>Sin pagar</span></a><a href="#/compras"><b>${r.enCamino}</b><span>En camino</span></a><a href="#/compras"><b>${r.entregados}</b><span>Entregadas</span></a></div>
      <div class="w-dash"><figure><figcaption>Lo que gastaste por mes</figcaption><div class="w-bars" role="img" aria-label="Gasto por mes: ${usuario.gastoMensual.map(([m, v]) => `${m} ${money(v)}`).join(', ')}">${usuario.gastoMensual.map(([m, v], i, a) => `<span class="w-bars__col${i === a.length - 1 ? ' is-now' : ''}"><i style="--h:${Math.round((v / max) * 100)}%"></i><small>${m}</small></span>`).join('')}</div>
        <p class="w-muted w-sm">De tus compras de los últimos seis meses. Los cancelados no suman gasto.</p></figure>
        <figure><figcaption>En qué estado están</figcaption><div class="w-stack" aria-hidden="true"><i class="is-ok" style="--w:${(r.entregados / tot) * 100}%"></i><i class="is-way" style="--w:${(r.enCamino / tot) * 100}%"></i><i class="is-bad" style="--w:${(r.sinPagar / tot) * 100}%"></i></div>
          <ul class="w-legend"><li><i class="is-ok"></i>Entregadas<b>${r.entregados}</b></li><li><i class="is-way"></i>En camino<b>${r.enCamino}</b></li><li><i class="is-bad"></i>Sin pagar<b>${r.sinPagar}</b></li></ul></figure></div>`)}
    ${card(`<div class="w-card2__head"><h2>${icon('wrench', 24)}Mis trabajos</h2><a class="w-link" href="#/mi-trabajo">${icon('chevron', 18)}Ver trabajos</a></div>
      ${notice('warn', 'info', '<b>Todavía no apareces en el directorio. Falta esto:</b>')}
      <ul class="w-checks">${pasos.map(([t, d, ok]) => `<li class="${ok ? 'is-ok' : ''}">${icon(ok ? 'check' : 'add', 18)}<div><b>${t}</b><span>${d}</span></div></li>`).join('')}</ul>
      <a class="w-btn w-btn--primary" href="#/documentos">${icon('chevron', 18)}Ir a completarlo</a>
      <a class="w-rowlink" href="#/comunidad">${icon('chat', 24)}<span><b>Comunidad técnica</b><small>Pregunta, responde y resuelve con otros técnicos de tu oficio.</small></span>${icon('chevron', 20)}</a>`)}`);
});

// ── 06.02 · Mi cuenta ───────────────────────────────────────────────────────
const cuentaP = pageOf('06.02', 'MI CUENTA', 'Mi cuenta', () => panel('cuenta', 'cuenta', `${crumbs([['Mi cuenta']])}
  ${card(`<div class="w-profile"><span class="w-profile__av" data-av>${S.foto ? icon('camera', 28) : esc(usuario.iniciales)}</span><div><h1 class="w-title w-title--md">${esc(usuario.nombre)} ${badge('Verificado', 'info', 'check')}</h1><p class="w-muted">${esc(usuario.correo)}</p></div>
      <p class="w-profile__tags">${badge('Venezuela', 'neutral', 'globe')}${badge(S.dfa ? '2FA activo' : '2FA apagado', S.dfa ? 'neutral' : 'warn', 'lock')}</p></div>
    <div class="w-photo"><span class="w-photo__ph">${icon('camera', 30)}</span><div><h2>Foto de perfil</h2><p class="w-muted w-sm">Se enseña en tu cuenta, en tus reseñas y en la comunidad. JPG, PNG o WebP · hasta 5 MB.</p>
      <p class="w-btnrow"><label class="w-btn w-btn--soft">${icon('upload', 18)}Elegir foto<input type="file" accept="image/jpeg,image/png,image/webp" class="w-sr" data-file></label><button class="w-btn w-btn--ghost" type="button" data-toast="La cámara se abre en el teléfono">${icon('camera', 18)}Tomar foto</button><button class="w-btn w-btn--text" type="button" data-quitar>${icon('trash', 18)}Quitar foto</button></p></div></div>`)}
  ${card(`<div class="w-rowinfo">${icon('globe', 26)}<div><h2>Entorno Regional Activo: Venezuela</h2><p class="w-muted">Tus compras, garantías y direcciones corresponden a Venezuela. Tienes cuenta en 2 países: cámbialo desde la ubicación de la cabecera.</p></div></div>`)}
  ${card(`<div class="w-rowinfo">${icon('download', 26)}<div><h2>Portabilidad y Descarga de Datos</h2><p class="w-muted">Descarga una copia de tus datos: perfil, direcciones, pedidos, reclamos y reseñas.</p>
      <p class="w-btnrow"><button class="w-btn w-btn--ghost" type="button" data-toast="Preparamos tu archivo: te avisamos por correo cuando esté listo">${icon('download', 18)}Descargar mis datos</button><a class="w-link" href="#/sesiones">Sesiones abiertas</a><a class="w-link" href="#/seguridad">Ajustes avanzados de seguridad</a></p></div></div>`)}
  ${card(`<div class="w-rowinfo w-rowinfo--end"><span class="w-danger-ico">${icon('logout', 24)}</span><div><h2>Cerrar sesión</h2><p class="w-muted w-sm">Se cierra sólo en este dispositivo. Tus otras sesiones seguirán activas.</p></div><button class="w-btn w-btn--ghost" type="button" data-salir>Cerrar sesión</button></div>`)}`),
(root) => {
  root.querySelector('[data-file]').addEventListener('change', (e) => { const f = e.target.files[0]; if (!f) return; if (f.size > 5e6) { toast('La foto pesa más de 5 MB: elige otra'); return; } S.foto = true; root.querySelector('[data-av]').innerHTML = icon('camera', 28); toast('Foto de perfil actualizada'); });
  root.querySelector('[data-quitar]').addEventListener('click', () => { S.foto = false; root.querySelector('[data-av]').textContent = usuario.iniciales; toast('Quitaste la foto de perfil'); });
  root.querySelector('[data-salir]').addEventListener('click', () => { sesion.on = false; window.dispatchEvent(new Event('vx-sesion')); toast('Cerraste la sesión en este dispositivo'); location.hash = '#/'; });
});

// ── 06.03 · Sesiones abiertas ───────────────────────────────────────────────
const sesionesP = pageOf('06.03', 'MI CUENTA', 'Sesiones abiertas', () => panel('cuenta', 'cuenta', `${head([['Mi cuenta', '#/cuenta'], ['Sesiones abiertas']], 'Sesiones abiertas', 'Dónde está iniciada tu cuenta ahora mismo. Si ves algo que no reconoces, ciérralas todas y cambia tu contraseña.')}
  ${card(`<ul class="w-sess">${S.sesiones.map((s) => `<li>${icon('shield', 22)}<div><b>${esc(s.equipo)} ${s.actual ? badge('Esta sesión', 'info') : ''}</b><small>${s.ip} · desde ${s.desde}</small></div></li>`).join('')}</ul>`)}
  <div data-close><button class="w-btn w-btn--danger" type="button" data-all>${icon('logout', 18)}Cerrar todas, incluida ésta</button><p class="w-muted w-sm">Tendrás que entrar otra vez.</p></div>`),
(root) => {
  const box = root.querySelector('[data-close]');
  box.addEventListener('click', (e) => {
    if (e.target.closest('[data-all]')) { box.innerHTML = `${notice('bad', 'warning', '<b>¿Cerrar las 3 sesiones?</b>También se cierra ésta y tendrás que entrar otra vez.')}<p class="w-btnrow"><button class="w-btn w-btn--danger" type="button" data-yes>Sí, cerrar todas</button><button class="w-btn w-btn--text" type="button" data-no>Cancelar</button></p>`; box.querySelector('[data-yes]').focus(); }
    if (e.target.closest('[data-no]')) location.reload();
    if (e.target.closest('[data-yes]')) { sesion.on = false; window.dispatchEvent(new Event('vx-sesion')); toast('Cerraste todas las sesiones'); location.hash = '#/entrar?next=%23%2Fsesiones'; }
  });
});

// ── 06.04 · Seguridad y 2FA ─────────────────────────────────────────────────
const field = (id, label) => `<div class="w-field"><label for="${id}">${label}</label><span class="w-pass"><input class="w-input" id="${id}" type="password" autocomplete="${id === 'sg-act' ? 'current-password' : 'new-password'}"><button type="button" class="w-pass__eye" data-peek="${id}" aria-label="Ver contraseña" aria-pressed="false">${icon('eye', 20)}</button></span></div>`;
const seguridadP = pageOf('06.04', 'MI CUENTA', 'Seguridad de la cuenta', () => panel('cuenta', 'seguridad', `${head([['Mi cuenta', '#/cuenta'], ['Seguridad y 2FA']], 'Seguridad de la Cuenta', 'Tu contraseña, la verificación en dos pasos y la eliminación de tu cuenta.')}
  ${card(`<h2>Cambiar Contraseña</h2>${notice('neutral', 'info', 'Al cambiarla se cerrará la sesión en tus demás dispositivos.')}
    <form class="w-form3" novalidate data-pw>${field('sg-act', 'Contraseña actual *')}${field('sg-new', 'Contraseña nueva')}${field('sg-rep', 'Confirmar contraseña nueva *')}<div class="w-form3__rules">${reglasHtml('sg-new')}</div>
    <p class="w-field__err" data-pwerr hidden></p><button class="w-btn w-btn--primary w-btn--block" type="submit">${icon('swap', 18)}Actualizar contraseña</button></form>`)}
  ${card(`<h2>Verificación en Dos Pasos (2FA)</h2><p class="w-muted">Al entrar te pediremos además un código de 6 dígitos de tu app autenticadora.</p><div data-2fa></div>`)}
  ${card(`<h2 class="w-h-ico">${icon('warning', 24)}Eliminación de Cuenta y Datos (ARCO)</h2><p class="w-muted">Borrar tu cuenta es permanente.</p>
    ${notice('bad', 'error', '<b>No es posible eliminar la cuenta en este momento</b>Termina antes: compra #VX-20412 en Venezuela (en camino) y trabajo técnico #T-1088 sin cerrar. Podrás borrar tu cuenta cuando terminen.')}
    <button class="w-btn w-btn--ghost" type="button" disabled>${icon('trash', 18)}Solicitar eliminación de mi cuenta</button>`)}`),
(root) => {
  wirePeek(root); const ok = wireReglas(root, 'sg-new'), f = root.querySelector('[data-pw]'), err = root.querySelector('[data-pwerr]');
  f.addEventListener('submit', (e) => {
    e.preventDefault(); const a = f.querySelector('#sg-act').value, n = f.querySelector('#sg-new').value, r = f.querySelector('#sg-rep').value;
    const m = !a ? 'Escribe tu contraseña actual.' : !ok() ? 'La contraseña nueva no cumple las tres reglas.' : n !== r ? 'Las dos contraseñas nuevas no coinciden.' : '';
    err.hidden = !m; err.innerHTML = m ? `${icon('error', 16)}${m}` : '';
    if (!m) { f.reset(); f.querySelector('#sg-new').dispatchEvent(new Event('input')); toast('Contraseña actualizada: cerramos tus otras sesiones'); }
  });
  const box = root.querySelector('[data-2fa]');
  const paint = (paso) => {
    if (S.dfa) { box.innerHTML = `${notice('info', 'check', '<b>La verificación en dos pasos está activa.</b>Te pediremos el código de tu app cada vez que entres.')}<button class="w-btn w-btn--ghost" type="button" data-off>Desactivar 2FA</button>`; return; }
    box.innerHTML = paso === 'codigos'
      ? `<div class="w-backup"><b>Guarda estos códigos de respaldo en un lugar seguro</b><p class="w-sm">No se volverán a mostrar. Si pierdes acceso a tu teléfono o aplicación, podrás utilizarlos para acceder.</p><ul>${W.codigos.map((c) => `<li>${c}</li>`).join('')}</ul><button class="w-btn w-btn--primary" type="button" data-saved>${icon('check', 18)}He guardado mis códigos de respaldo</button></div>`
      : `<p class="w-step-t">Paso 1: Vincula tu aplicación autenticadora</p><div class="w-2fa"><span class="w-qr" role="img" aria-label="Código QR para vincular la app"></span><div><p class="w-sm">Desde tu teléfono móvil: pulsa el botón de abajo para abrir tu app autenticadora.</p><button class="w-btn w-btn--soft" type="button" data-toast="Abre tu app autenticadora en el teléfono">${icon('share', 18)}Abrir en Google Authenticator</button>
          <p class="w-muted w-sm">O ingresa la key manualmente:</p><p class="w-key"><code>JBSW Y3DP EHPK 3PXP</code><button class="w-btn w-btn--text" type="button" data-copy>${icon('copy', 18)}Copiar</button></p></div></div>
        <p class="w-step-t">Paso 2: Confirma el código generado</p><form class="w-inline" novalidate data-code><div class="w-field"><label for="sg-code">Código de 6 dígitos que muestra tu app:</label><input class="w-input" id="sg-code" inputmode="numeric" autocomplete="one-time-code" maxlength="7" placeholder="482 913"></div><button class="w-btn w-btn--primary" type="submit">${icon('shield', 18)}Confirmar y activar 2FA</button></form><p class="w-field__err" data-cerr hidden></p>`;
  };
  box.addEventListener('click', async (e) => {
    if (e.target.closest('[data-copy]')) { try { await navigator.clipboard.writeText('JBSWY3DPEHPK3PXP'); toast('Key copiada'); } catch { toast('Selecciona la key para copiarla'); } }
    if (e.target.closest('[data-saved]')) { S.dfa = true; paint(); toast('Verificación en dos pasos activada'); }
    if (e.target.closest('[data-off]')) { S.dfa = false; paint(); toast('Desactivaste la verificación en dos pasos'); }
  });
  box.addEventListener('submit', (e) => { e.preventDefault(); const v = box.querySelector('#sg-code').value.replace(/\D/g, ''), er = box.querySelector('[data-cerr]'); if (v.length !== 6) { er.hidden = false; er.innerHTML = `${icon('error', 16)}Escribe los 6 dígitos que muestra tu app.`; return; } paint('codigos'); });
  paint();
});

// ── 06.05 · Avisos ──────────────────────────────────────────────────────────
const avisosP = pageOf('06.05', 'MI CUENTA', 'Avisos', (q) => {
  const sin = q.f === 'sin', lista = W.avisos.filter((a) => !sin || (a.nuevo && !S.leidos.has(a.id))), n = W.avisos.filter((a) => a.nuevo && !S.leidos.has(a.id)).length;
  return panel('cuenta', 'avisos', `${head([['Mi cuenta', '#/cuenta'], ['Avisos y alertas']], 'Avisos', 'Lo que pasó con tus pedidos, tus solicitudes y tu cuenta.', `<button class="w-btn w-btn--text" type="button" data-all>${icon('check', 18)}Marcar todo como leído</button>`)}
    <div class="w-toolbar"><div class="w-tabs" role="group" aria-label="Filtrar avisos"><a class="w-tab" href="#/avisos"${sin ? '' : ' aria-current="true"'}>${sin ? '' : icon('check', 16)}Todos</a><a class="w-tab" href="#/avisos?f=sin"${sin ? ' aria-current="true"' : ''}>Sin leer (${n})</a></div>${pager()}</div>
    <ul class="w-notes">${lista.map((a) => { const nuevo = a.nuevo && !S.leidos.has(a.id); return `<li class="${nuevo ? 'is-new' : ''}"><a href="${a.to}" data-read="${a.id}"><span class="w-notes__ico w-notes__ico--${a.tono}">${icon(a.ic, 24)}</span><div><b>${esc(a.t)} ${a.tag ? badge(...a.tag) : ''} ${nuevo ? badge('Nuevo', 'ink') : ''}</b>${a.d ? `<span>${esc(a.d)}</span>` : ''}<small>${a.cuando}</small></div>${icon('chevron', 20)}</a></li>`; }).join('') || `<li class="w-empty">No tienes avisos sin leer.</li>`}</ul>`);
}, (root) => {
  root.addEventListener('click', (e) => {
    const r = e.target.closest('[data-read]'); if (r) S.leidos.add(r.dataset.read);
    if (e.target.closest('[data-all]')) { W.avisos.forEach((a) => S.leidos.add(a.id)); toast('Marcaste todos los avisos como leídos'); window.dispatchEvent(new HashChangeEvent('hashchange')); }
  });
});

// ── 06.06 · Mis direcciones ─────────────────────────────────────────────────
const dirsP = pageOf('06.06', 'MI CUENTA', 'Mis direcciones', (q) => panel('cuenta', 'direcciones', `${head([['Mi cuenta', '#/cuenta'], ['Mis direcciones']], 'Mis Direcciones de Entrega', 'Donde recibes tus pedidos. La predeterminada se elige sola al pagar.', `<p class="w-btnrow"><button class="w-btn w-btn--ghost" type="button" data-toast="Tu navegador te pedirá permiso para usar la ubicación">${icon('pin', 18)}Usar mi ubicación</button><button class="w-btn w-btn--primary" type="button" data-add>${icon('add', 18)}Añadir dirección</button></p>`)}
  ${q.ok ? notice('info', 'check', 'Dirección guardada.') : ''}<div data-form></div>
  <div class="w-list">${S.dirs.map((d) => card(`<div class="w-addrrow">${icon(d.id === 'casa' ? 'home' : 'pin', 24)}<div><b>${esc(d.nombre)} ${d.predeterminada ? badge('Predeterminada', 'ink') : ''}</b><span>${esc(d.linea)}</span>${d.ref ? `<small>${esc(d.ref)}</small>` : ''}
      <p class="w-chiprow"><span>${esc(d.ciudad)}</span><span>CP: ${d.cp}</span><span>${d.tel}</span></p></div><button class="w-btn w-btn--ghost" type="button" data-toast="Editar «${esc(d.nombre)}» abre el mismo formulario de Añadir dirección">${icon('edit', 18)}Editar</button></div>
    <div class="w-card2__foot">${d.predeterminada ? `<span class="w-ok">${icon('check', 16)}Esta dirección se seleccionará al pagar</span>` : `<button class="w-btn w-btn--text" type="button" data-def="${d.id}">${icon('star', 18)}Establecer como predeterminada</button>`}</div>`, 'w-card2--flush')).join('')}</div>`),
(root) => {
  root.addEventListener('click', (e) => {
    const d = e.target.closest('[data-def]');
    if (d) { S.dirs.forEach((x) => { x.predeterminada = x.id === d.dataset.def; }); S.dirs.sort((a, b) => b.predeterminada - a.predeterminada); location.hash = '#/direcciones?ok=1'; }
    if (e.target.closest('[data-add]')) {
      const box = root.querySelector('[data-form]');
      box.innerHTML = card(`<h2>Nueva dirección</h2><form class="w-form2" novalidate data-nd><div class="w-field"><label for="nd-n">Nombre *</label><input class="w-input" id="nd-n" placeholder="Ej. Casa de mamá"></div><div class="w-field"><label for="nd-l">Dirección *</label><input class="w-input" id="nd-l" autocomplete="street-address" placeholder="Calle, edificio, apartamento"></div>
        <div class="w-field"><label for="nd-c">Ciudad *</label><input class="w-input" id="nd-c" value="Valencia, Carabobo"></div><div class="w-field"><label for="nd-t">Teléfono *</label><input class="w-input" id="nd-t" inputmode="tel" autocomplete="tel" placeholder="0414-555 1234"></div>
        <p class="w-field__err" data-nderr hidden></p><p class="w-btnrow"><button class="w-btn w-btn--primary" type="submit">Guardar dirección</button><button class="w-btn w-btn--text" type="button" data-cancel>Cancelar</button></p></form>`);
      box.querySelector('#nd-n').focus();
      box.querySelector('[data-cancel]').addEventListener('click', () => { box.innerHTML = ''; });
      box.querySelector('form').addEventListener('submit', (ev) => { ev.preventDefault(); const v = (id) => box.querySelector(id).value.trim(); const er = box.querySelector('[data-nderr]');
        if (!v('#nd-n') || !v('#nd-l') || !v('#nd-c') || !v('#nd-t')) { er.hidden = false; er.innerHTML = `${icon('error', 16)}Completa los cuatro campos.`; return; }
        S.dirs.push({ id: `d${Date.now()}`, nombre: v('#nd-n'), linea: v('#nd-l'), ciudad: v('#nd-c'), cp: '2001', tel: v('#nd-t'), ref: '' }); location.hash = '#/direcciones?ok=' + Date.now(); });
    }
  });
});

// ── 06.07 · Mis formas de pago ──────────────────────────────────────────────
const pagosP = pageOf('06.07', 'MI CUENTA', 'Mis formas de pago', () => panel('cuenta', 'pagos', `${head([['Mi cuenta', '#/cuenta'], ['Mis formas de pago']], 'Mis Formas de Pago', 'Guarda tus datos de cobro para que el pago salga relleno. Máximo 5.', `<button class="w-btn w-btn--primary" type="button" data-new${S.pagos.length >= 5 ? ' disabled' : ''}>${icon('add', 18)}Añadir forma de pago</button>`)}
  <div class="w-notice w-notice--neutral">${icon('shield', 22)}<div class="w-notice__t"><b>Seguridad C2P y Custodia Escrow</b>No guardamos claves ni tarjetas: sólo los datos para pedirle la clave a tu banco.</div>${badge('Tokenizado', 'ink', 'key')}</div>
  <div data-form></div>
  <div class="w-list">${S.pagos.map((p) => { const b = W.bancoDe[p.id]; return card(`<div class="w-payrow"><b>${icon(p.id === 'binance' ? 'swap' : 'wallet', 22)}${esc(p.titulo)} ${badge(p.sub, 'neutral')} ${p.preferida ? badge('Preferida', 'brand', 'star') : ''}</b>
      <dl>${p.correo ? `<div><dt>Identificador:</dt><dd>${esc(p.correo)}</dd></div>` : `<div><dt>Titular:</dt><dd>${p.doc}</dd></div><div><dt>Banco:</dt><dd>${b ? b[0] : esc(p.banco || '')}</dd></div><div><dt>${b ? b[1] : 'Teléfono'}:</dt><dd>${b ? b[2] : esc(p.tel || '')}</dd></div>`}</dl>
      ${p.ultimo ? `<small class="w-muted">Último uso: ${p.ultimo}</small>` : ''}${p.falla ? notice('bad', 'warning', 'Tu banco rechazó los dos últimos intentos con este teléfono. Revisa los datos.') : ''}
      <p class="w-btnrow"><button class="w-btn w-btn--text" type="button" data-toast="Renombrar «${esc(p.titulo)}»">${icon('edit', 18)}Renombrar</button><button class="w-btn w-btn--text" type="button" data-toast="Corregir los datos de «${esc(p.titulo)}»">${icon('sliders', 18)}Corregir</button><button class="w-btn w-btn--text" type="button" data-del="${p.id}">${icon('trash', 18)}Quitar</button></p></div>
    <div class="w-card2__foot">${p.preferida ? `<span class="w-ok">${icon('check', 16)}Esta forma de pago se usará por defecto al comprar</span>` : `<button class="w-btn w-btn--text" type="button" data-pref="${p.id}">${icon('star', 18)}Usar como preferida por defecto</button>`}</div>`, 'w-card2--flush'); }).join('')}</div>`),
(root) => {
  root.addEventListener('click', (e) => {
    const pr = e.target.closest('[data-pref]'); if (pr) { S.pagos.forEach((p) => { p.preferida = p.id === pr.dataset.pref; }); toast('Forma de pago preferida actualizada'); window.dispatchEvent(new HashChangeEvent('hashchange')); }
    const dl = e.target.closest('[data-del]'); if (dl) { const i = S.pagos.findIndex((p) => p.id === dl.dataset.del), [p] = S.pagos.splice(i, 1); if (p.preferida && S.pagos[0]) S.pagos[0].preferida = true; toast(`Quitaste «${p.titulo}»`); window.dispatchEvent(new HashChangeEvent('hashchange')); }
    if (e.target.closest('[data-new]')) {
      const box = root.querySelector('[data-form]');
      box.innerHTML = card(`<div class="w-card2__head"><h2>${icon('wallet', 24)}Nueva Forma de Pago</h2><button class="w-iconbtn" type="button" data-x aria-label="Cerrar">${icon('close', 20)}</button></div><p class="w-muted w-sm">Los datos con los que tu banco te manda la clave de pago.</p>
        ${notice('neutral', 'chat', 'Al pagar, tu banco te manda una clave por SMS. El número de cuenta sólo sirve para devolverte dinero si hace falta.')}
        <form class="w-form2" novalidate data-np><div class="w-field"><label for="np-doc">Documento de identidad *</label><span class="w-joined"><select class="w-input" aria-label="Tipo de documento"><option>V</option><option>E</option><option>J</option></select><input class="w-input" id="np-doc" inputmode="numeric" placeholder="18.456.789"></span><small class="w-muted">Cédula o RIF asociado a la cuenta o teléfono bancario.</small></div>
          <div class="w-field"><label for="np-bank">Banco *</label><select class="w-input" id="np-bank">${bancosVE.map((b) => `<option>${b}</option>`).join('')}</select></div>
          <div class="w-field"><label for="np-tel">Número de teléfono afiliado *</label><span class="w-joined"><select class="w-input" aria-label="Operadora"><option>0414</option><option>0424</option><option>0412</option><option>0416</option></select><input class="w-input" id="np-tel" inputmode="numeric" placeholder="555 1234"></span><small class="w-muted">El teléfono afiliado al pago móvil de tu banco.</small></div>
          <div class="w-field"><label for="np-cta">Número de cuenta bancaria (20 dígitos) · opcional</label><input class="w-input" id="np-cta" inputmode="numeric" maxlength="24" placeholder="0102 0123 45 0001234567"><small class="w-muted">Sólo para devolverte dinero.</small></div>
          <div class="w-field w-span2"><label for="np-nom">Nombre (opcional)</label><input class="w-input" id="np-nom" placeholder="Ej. Nómina"><small class="w-muted">Así la reconoces al pagar.</small></div>
          <p class="w-field__err w-span2" data-nperr hidden></p><p class="w-btnrow w-span2"><button class="w-btn w-btn--primary" type="submit">${icon('check', 18)}Guardar forma de pago</button><button class="w-btn w-btn--text" type="button" data-x>Cancelar</button></p></form>`);
      box.querySelector('#np-doc').focus();
      box.addEventListener('click', (ev) => { if (ev.target.closest('[data-x]')) box.innerHTML = ''; });
      box.querySelector('form').addEventListener('submit', (ev) => { ev.preventDefault(); const doc = box.querySelector('#np-doc').value.replace(/\D/g, ''), tel = box.querySelector('#np-tel').value.replace(/\D/g, ''), er = box.querySelector('[data-nperr]');
        if (doc.length < 6 || tel.length !== 7) { er.hidden = false; er.innerHTML = `${icon('error', 16)}Revisa el documento (6 dígitos o más) y el teléfono (7 dígitos).`; return; }
        const bank = box.querySelector('#np-bank').value; S.pagos.push({ id: `p${Date.now()}`, titulo: box.querySelector('#np-nom').value.trim() || `${bank} ····${tel.slice(-4)}`, sub: 'Teléfono y banco', doc: `V-${doc.slice(0, 2)}.***.${doc.slice(-3)}`, banco: bank, tel: `0414 ···${tel.slice(-4)}` });
        toast('Forma de pago guardada'); window.dispatchEvent(new HashChangeEvent('hashchange')); });
    }
  });
});

// ── 06.08 · Registrar mi empresa ────────────────────────────────────────────
const empresaP = pageOf('06.08', 'MI CUENTA', 'Registrar mi empresa', () => `<div class="w-wrap w-narrow">${card(`<p class="w-muted w-sm">Registrar mi empresa · Venezuela</p><h1 class="w-title w-title--md">Lo justo para que tu empresa exista</h1>
  <p class="w-lede">Tu empresa entra en modo preparación: puedes cargar tu catálogo y tus datos mientras VexBiz la verifica, en hasta 72 horas hábiles.</p>
  <form class="w-form2" novalidate data-emp><fieldset class="w-span2 w-radios"><legend>¿Cómo operas?</legend>
    <label class="w-opt"><input type="radio" name="tipo" value="natural"><span><b>Persona natural con actividad económica</b><small>Operas con tu nombre y tu RIF personal.</small></span></label>
    <label class="w-opt"><input type="radio" name="tipo" value="juridica" checked><span><b>Persona jurídica</b><small>Una sociedad con su razón social y su representante.</small></span></label></fieldset>
    <div class="w-field"><label for="em-rif">Identificación fiscal *</label><input class="w-input" id="em-rif" placeholder="J-41234567-8" autocapitalize="characters"><small class="w-muted">Para emitirte las liquidaciones. No se enseña a nadie.</small></div>
    <div class="w-field"><label for="em-razon">Razón social *</label><input class="w-input" id="em-razon" placeholder="Frío Total Servicios C.A."></div>
    <div class="w-field"><label for="em-com">Nombre comercial (opcional)</label><input class="w-input" id="em-com" placeholder="Frío Total Caracas"></div>
    <fieldset class="w-span2 w-checksbox"><legend>¿Qué hace tu empresa? Marca todo lo que aplique.</legend>
      ${[['vender', 'Vender productos', 'Publica ofertas sobre el catálogo del país.', 'store', true], ['importar', 'Importar', 'Carga fichas de producto para que otras tiendas vendan.', 'truck'], ['servicios', 'Prestar servicios técnicos', 'Recibe solicitudes de instalación y reparación.', 'wrench']].map(([v, t, d, ic, on]) => `<label class="w-opt w-opt--check"><input type="checkbox" name="hace" value="${v}"${on ? ' checked' : ''}>${icon(ic, 22)}<span><b>${t}</b><small>${d}</small></span></label>`).join('')}</fieldset>
    <p class="w-muted w-sm w-span2">Aseguradoras y auxilio vial entran por acuerdo con VexBiz; escríbenos desde Contacto.</p>
    <p class="w-field__err w-span2" data-emerr hidden></p>
    <button class="w-btn w-btn--primary w-btn--block w-btn--lg w-span2" type="submit">${icon('store', 18)}Crear mi empresa</button><p class="w-muted w-sm w-center w-span2">Sin cuota de entrada. Un solo precio para todos tus compradores.</p></form><div data-ok></div>`)}</div>`,
(root) => {
  const f = root.querySelector('[data-emp]');
  f.addEventListener('submit', (e) => { e.preventDefault(); const rif = f.querySelector('#em-rif').value.trim(), raz = f.querySelector('#em-razon').value.trim(), hace = f.querySelectorAll('[name=hace]:checked').length, er = f.querySelector('[data-emerr]');
    const m = !/^[VEJGP]-?\d{6,9}-?\d?$/i.test(rif) ? 'Escribe la identificación fiscal como J-41234567-8.' : !raz ? 'Escribe la razón social.' : !hace ? 'Marca al menos una cosa que hace tu empresa.' : '';
    er.hidden = !m; er.innerHTML = m ? `${icon('error', 16)}${m}` : ''; if (m) return;
    f.hidden = true; root.querySelector('[data-ok]').innerHTML = `${notice('info', 'check', `<b>${esc(raz)} está en modo preparación.</b>Ya puedes cargar tu catálogo; VexBiz revisa los documentos en hasta 72 horas hábiles.`)}<a class="w-btn w-btn--primary" href="#/mi-tienda">Ir a Mi tienda</a>`; });
});

// ── 06.09 · Mis compras ─────────────────────────────────────────────────────
const comprasP = pageOf('06.09', 'MIS COMPRAS', 'Mis compras', () => panel('compras', 'compras', `${head([['Mi cuenta', '#/cuenta'], ['Compras']], 'Mis compras', 'Tus pedidos, su estado y su detalle. Cada tienda despacha el suyo.', pager())}
  <ul class="w-orders">${pedidos.map((o) => { const d = detallePedidos[orderKey(o)] || { lineas: [] }, n = d.lineas.length; const e = o.estado === 'Falta pagar' && S.pagado ? 'Pagado' : o.estado; return `<li class="w-panel"><span class="w-orders__img">${thumbOf(d.lineas[0] ? d.lineas[0].n : '')}${n > 1 ? `<i>+${n - 1}</i>` : ''}</span>
    <div><b>${esc(o.tienda)}</b><small>${o.id} · ${o.fecha}/2026</small>${estadoBadge(e, e === 'Falta pagar' ? ` ${money(o.total)}` : '')}</div>
    <p class="w-orders__tot"><b>${money(o.total)}</b><small>Total de orden</small></p><a class="w-link" href="#/pedido?id=${encodeURIComponent(orderKey(o))}">${icon('chevron', 18)}Ver detalle</a></li>`; }).join('')}</ul>`));

// ── 06.10 · Detalle del pedido ──────────────────────────────────────────────
const pedidoP = pageOf('06.10', 'MIS COMPRAS', 'Detalle del pedido', (q) => {
  const key = q.id && detallePedidos[q.id] ? q.id : '#VX-20211|ElectroHogar', [id, tienda] = key.split('|'), d = detallePedidos[key], o = pedidos.find((x) => orderKey(x) === key) || { estado: 'Falta pagar', total: d.lineas.reduce((s, l) => s + l.q * l.p, 0) };
  const total = round2(d.lineas.reduce((s, l) => s + l.q * l.p, 0)), neto = round2(total / 1.19), entregado = o.estado === 'Entregado';
  return `<div class="w-wrap w-narrow2">${crumbs([['Mi cuenta', '#/cuenta'], ['Compras', '#/compras'], [id]])}
    ${card(`<div class="w-orderhead"><h1 class="w-title">${esc(id)}</h1><button class="w-btn w-btn--text" type="button" data-copy="${esc(id)}">${icon('copy', 18)}Copiar</button>${estadoBadge(o.estado)}</div><p class="w-muted">${esc(tienda)} · Emitido el ${d.emitido}</p>`)}
    <div class="w-grid2">${card(d.envio ? `<h2>${icon('truck', 24)}${entregado ? 'Entregado' : 'En camino'}</h2><p class="w-muted">Operador logístico: ${d.envio.empresa}</p><p class="w-muted">Despachado el ${d.envio.despachado}</p><p class="w-guide"><span><small>Número de Guía</small><b>${d.envio.guia}</b></span><button class="w-btn w-btn--text" type="button" data-copy="${d.envio.guia}">${icon('copy', 18)}Copiar</button></p>`
      : `<h2>${icon('wallet', 24)}Falta pagar</h2><p class="w-muted">La tienda despacha en cuanto se confirme el pago.</p><a class="w-btn w-btn--primary" href="#/pago-grupo">Pagar ahora</a>`)}
      ${card(d.factura ? `<h2>${icon('receipt', 24)}Tu factura</h2><p class="w-muted">N.º ${d.factura.n} · emitida el ${d.factura.fecha}</p><p class="w-muted">Total ${money(total)} · emite ${esc(tienda)} C.A.</p><button class="w-btn w-btn--ghost" type="button" data-toast="Factura ${d.factura.n} descargada">${icon('download', 18)}Descargar factura</button>`
        : `<h2>${icon('receipt', 24)}Tu factura</h2><p class="w-muted">La tienda la emite cuando despacha el pedido.</p>`)}</div>
    ${card(`<div class="w-card2__head"><h2>Artículos en esta orden (${d.lineas.length})</h2><small class="w-muted">Precios en USD</small></div>
      <ul class="w-items">${d.lineas.map((l, i) => `<li>${thumbOf(l.n)}<div><b>${esc(l.n)}</b><small>Cantidad: ${l.q} × ${money(l.p)}</small><p class="w-chiprow">${l.garantia ? badge(`Garantía hasta ${l.garantia}`, 'info', 'shield') : ''}${l.devolucion ? badge(`${l.devolucion} · En revisión`, 'warn', 'swap') : ''}</p>
        ${entregado ? `<p class="w-btnrow"><a class="w-btn w-btn--text" href="#/postventa?id=${encodeURIComponent(key)}">${icon('swap', 18)}Devolver este artículo</a><button class="w-btn w-btn--text" type="button" aria-expanded="false" data-spec="${i}">${icon('chevron', 18)}Ficha técnica</button></p><p class="w-muted w-sm" data-spec-box="${i}" hidden>Ficha técnica completa en la ficha del producto: referencia, compatibilidad y garantía del fabricante.</p>` : ''}</div><b class="vx-tab-num">${money(l.q * l.p)}</b></li>`).join('')}</ul>`)}
    ${card(`<dl class="w-totals"><div><dt>Subtotal neto</dt><dd>${money(neto)}</dd></div><div><dt>Costo de transporte y envío</dt><dd class="w-free">Gratis</dd></div><div><dt>IVA incluido en los precios</dt><dd>${money(round2(total - neto))}</dd></div><div class="w-totals__big"><dt>Total a pagar</dt><dd>${money(total)}</dd></div></dl>`)}
    <p class="w-actions"><a class="w-link" href="#/compras">${icon('back', 18)}Ver todas mis compras</a>${entregado ? `<a class="w-btn w-btn--primary" href="#/postventa?id=${encodeURIComponent(key)}">${icon('receipt', 18)}Calificar, devolver o reclamar</a>` : ''}</p></div>`;
}, (root) => {
  root.addEventListener('click', async (e) => {
    const c = e.target.closest('[data-copy]'); if (c) { try { await navigator.clipboard.writeText(c.dataset.copy); toast('Copiado'); } catch { toast('Selecciona el dato para copiarlo'); } }
    const s = e.target.closest('[data-spec]'); if (s) { const b = root.querySelector(`[data-spec-box="${s.dataset.spec}"]`), on = b.hidden; b.hidden = !on; s.setAttribute('aria-expanded', String(on)); }
  });
});

// ── 06.11 · Compra y pago del grupo ─────────────────────────────────────────
const grupoP = pageOf('06.11', 'MIS COMPRAS', 'Finalizar pago', () => {
  const tot = round2(compra.pedidos.reduce((s, p) => s + p.total, 0));
  if (S.pagado) return `<div class="w-wrap w-narrow2">${card(`<span class="w-auth__ico w-auth__ico--info">${icon('check', 26)}</span><h1 class="w-title w-title--md">Pago aprobado</h1><p class="w-muted">Pagaste ${money(tot)} por los ${compra.pedidos.length} pedidos. Cada tienda prepara su paquete.</p><a class="w-btn w-btn--primary" href="#/compras">Ver mis compras</a>`)}</div>`;
  const ops = [...S.pagos.filter((p) => p.id !== 'binance').map((p) => [p.id, p.titulo, W.bancoDe[p.id] ? `${W.bancoDe[p.id][0].split(' · ')[0]} · 0414 ···1234` : p.sub]), ['otros', 'Pagar con otros datos', '']];
  return `<div class="w-wrap"><p class="w-muted w-sm">Tu compra · ${compra.pedidos.length} pedidos</p><div class="w-acc__head"><h1 class="w-title">Finalizar pago</h1>${badge('Falta pagar', 'warn', 'clock')}</div>
    ${notice('warn', 'clock', 'Tienes plazo hasta el 16/10/2026 a las 18:00 para completar tu pago; después de esa hora el inventario se libera automáticamente.')}
    <div class="w-checkout"><div class="w-checkout__main">${card(`<div class="w-card2__head"><div><h2>Selecciona cómo pagar</h2><p class="w-muted">Importe a pagar: ${money(tot)}</p></div>${badge('SPIDI', 'ink', 'lock')}</div>
      <div class="w-tabs w-tabs--line" role="tablist"><button role="tab" aria-selected="true" type="button" data-m="debito">${icon('wallet', 18)}Débito</button><button role="tab" aria-selected="false" type="button" data-m="binance">${icon('swap', 18)}Binance Pay</button></div>
      <div data-mbox><p class="w-muted">Pagas con débito inmediato: tu banco te envía una clave de 8 dígitos por SMS.</p><p class="w-step-t">¿Con cuál pagas?</p>
        <div class="w-methods" role="radiogroup" aria-label="Datos de pago">${ops.map(([v, t, s], i) => `<label class="w-addr${i === 0 ? ' is-on' : ''}"><input type="radio" name="g-pago" value="${v}"${i === 0 ? ' checked' : ''}><span class="w-addr__t"><b>${esc(t)}</b>${s ? `<small>${esc(s)}</small>` : ''}</span></label>`).join('')}</div></div>
      <button class="w-btn w-btn--primary w-btn--block w-btn--lg" type="button" data-pay>${icon('lock', 18)}Pagar ${money(tot)}</button><p class="w-muted w-sm">Te mandamos la clave por SMS al 0414 ···1234</p><p class="w-center w-muted w-sm w-sep">Pago seguro con <b>SPIDI</b></p>`)}
      <p class="w-btnrow"><button class="w-btn w-btn--text" type="button" data-cancel>${icon('close', 18)}Cancelar esta compra</button><span class="w-muted w-sm">Libera el inventario al instante.</span></p><a class="w-link" href="#/compras">${icon('back', 18)}Ver todas mis compras</a></div>
      <aside class="w-summary-col">${card(`<div class="w-card2__head"><h2>Resumen del pedido</h2><small class="w-muted">${compra.pedidos.length} pedidos</small></div>
        <ul class="w-items w-items--sm">${compra.pedidos.map((p) => { const d = detallePedidos[`${p.id}|${p.tienda}`]; return `<li>${thumbOf(d ? d.lineas[0].n : '')}<div><b>${esc(p.tienda)}</b><small>${p.id} · Falta pagar · ${p.articulos} ${p.articulos === 1 ? 'artículo' : 'artículos'}</small><a class="w-link w-link--sm" href="#/pedido?id=${encodeURIComponent(`${p.id}|${p.tienda}`)}">Ver pedido</a></div><b>${money(p.total)}</b></li>`; }).join('')}</ul>
        <dl class="w-totals"><div><dt>Subtotal productos</dt><dd>${money(tot)}</dd></div><div class="w-totals__big"><dt>Total a pagar</dt><dd>${money(tot)}</dd></div></dl>`)}
        ${notice('info', 'shield', '<b>Compra 100% Protegida</b>Tu dinero queda en custodia hasta que recibas la compra conforme.')}</aside></div></div>`;
}, (root) => {
  root.addEventListener('change', (e) => { if (e.target.name === 'g-pago') root.querySelectorAll('.w-methods .w-addr').forEach((l) => l.classList.toggle('is-on', l.contains(e.target))); });
  root.addEventListener('click', (e) => {
    const m = e.target.closest('[data-m]');
    if (m) { root.querySelectorAll('[data-m]').forEach((b) => b.setAttribute('aria-selected', String(b === m))); if (m.dataset.m === 'binance') root.querySelector('[data-mbox]').innerHTML = '<p class="w-muted">Al pagar te mostramos el código de Binance Pay. Pagas en USDT desde tu cuenta, sin impuesto del pago.</p>'; else window.dispatchEvent(new HashChangeEvent('hashchange')); }
    if (e.target.closest('[data-pay]')) { S.pagado = true; toast('Pago aprobado'); window.dispatchEvent(new HashChangeEvent('hashchange')); }
    if (e.target.closest('[data-cancel]')) toast('Cancelar la compra libera el inventario: en la demo la compra sigue activa');
  });
});

// ── 06.12 · Calificar, devolver o reclamar ──────────────────────────────────
const postP = pageOf('06.12', 'MIS COMPRAS', 'Gestión post-venta', (q) => {
  const key = q.id && detallePedidos[q.id] ? q.id : '#VX-20211|ElectroHogar', [id, tienda] = key.split('|'), d = detallePedidos[key];
  return `<div class="w-wrap w-narrow2">${crumbs([['Mi cuenta', '#/cuenta'], ['Compras', '#/compras'], [id]])}<div class="w-acc__head"><div><h1 class="w-title">Gestión Post-Venta</h1><p class="w-lede">Califica tu experiencia, solicita una devolución o abre un reclamo con mediación oficial.</p></div><a class="w-link" href="#/pedido?id=${encodeURIComponent(key)}">${icon('back', 18)}Volver al pedido</a></div>
    <div data-ok></div>
    ${card(`<div class="w-rowinfo">${icon('star', 24)}<div><h2>Califica tu experiencia con ${esc(tienda)}</h2><p class="w-muted w-sm">Tu nota ayuda a otros compradores a elegir tienda.</p></div></div>
      <form novalidate data-rate class="w-stackform"><fieldset class="w-stars-in"><legend>Nivel de satisfacción</legend>${[1, 2, 3, 4, 5].map((n) => `<label><input type="radio" name="estrellas" value="${n}" class="w-sr"${n === 5 ? ' checked' : ''}><span aria-hidden="true">${icon('star', 30)}</span><span class="w-sr">${n} de 5</span></label>`).join('')}<output data-rateout>5 / 5 · Excelente</output></fieldset>
        <div class="w-field"><label for="pv-com">Comentario u opinión (opcional)</label><textarea class="w-input w-area" id="pv-com" maxlength="500" placeholder="Cuéntale a otros compradores cómo te fue…"></textarea><small class="w-muted w-count"><span>Opcional</span><span data-c="pv-com">0 / 500</span></small></div>
        <button class="w-btn w-btn--primary" type="submit">${icon('upload', 18)}Enviar calificación</button></form>`)}
    ${card(`<div class="w-rowinfo">${icon('swap', 24)}<div><h2>Devolución directa de artículos</h2><p class="w-muted w-sm">La tienda revisa tu solicitud y te indica cómo enviar el artículo.</p></div></div>
      <form novalidate data-dev class="w-stackform"><p class="w-step-t">Artículos disponibles para devolución:</p>${d.lineas.map((l, i) => `<div class="w-devrow"><span><b>${esc(l.n)}</b><small>Compraste: ${l.q} unidades</small></span><label>Cant. a devolver: <input class="w-input w-qtyin" type="number" min="0" max="${l.q}" value="${i === 1 ? 1 : 0}" data-devq></label></div>`).join('')}
        <div class="w-field"><label for="pv-mot">Motivo de la devolución *</label><textarea class="w-input w-area" id="pv-mot" maxlength="500" placeholder="Ej.: llegó dañado, no es el modelo que pedí, no funciona…"></textarea><small class="w-muted w-count"><span>Describe qué pasó con el artículo.</span><span data-c="pv-mot">0 / 500</span></small></div>
        <p class="w-field__err" data-deverr hidden></p><div class="w-acc__head"><b data-devn>Total de artículos seleccionados: 1</b><button class="w-btn w-btn--primary" type="submit">Solicitar devolución</button></div></form>`)}
    ${card(`<div class="w-rowinfo">${icon('shield', 24)}<div><h2>Abrir un reclamo con mediación VexBiz</h2><p class="w-sm">Utiliza esta vía si no pudiste llegar a un acuerdo directo con la tienda. VexBiz revisa el caso y media entre las partes.</p></div></div>
      <form novalidate data-rec class="w-stackform"><div class="w-field"><label for="pv-rec">Descripción detallada de la controversia *</label><textarea class="w-input w-area" id="pv-rec" maxlength="1000" placeholder="Explica qué pasó, qué acordaste con la tienda y qué solución esperas…"></textarea><small class="w-muted w-count"><span>Obligatorio para abrir el reclamo.</span><span data-c="pv-rec">0 / 1000</span></small></div>
        <div class="w-field w-half"><label for="pv-imp">Importe económico reclamado (opcional)</label><input class="w-input" id="pv-imp" inputmode="decimal" placeholder="$ 0,00"><small class="w-muted">Déjalo vacío si el reclamo no involucra devolución de dinero.</small></div>
        <p class="w-field__err" data-recerr hidden></p><button class="w-btn w-btn--primary" type="submit">${icon('flag', 18)}Abrir reclamo formal</button></form>`, 'w-card2--warn')}</div>`;
}, (root) => {
  const ok = (t, s) => { root.querySelector('[data-ok]').innerHTML = notice('info', 'check', `<b>${t}</b>${s}`); window.scrollTo({ top: 0, behavior: 'smooth' }); };
  const LBL = ['', 'Muy mala', 'Mala', 'Regular', 'Buena', 'Excelente'];
  const paintStars = () => { const v = Number(root.querySelector('[name=estrellas]:checked').value); root.querySelectorAll('.w-stars-in label').forEach((l, i) => l.classList.toggle('is-on', i < v)); root.querySelector('[data-rateout]').textContent = `${v} / 5 · ${LBL[v]}`; };
  root.addEventListener('change', (e) => { if (e.target.name === 'estrellas') paintStars(); });
  root.addEventListener('input', (e) => {
    const c = root.querySelector(`[data-c="${e.target.id}"]`); if (c) c.textContent = `${e.target.value.length} / ${e.target.maxLength}`;
    if (e.target.matches('[data-devq]')) root.querySelector('[data-devn]').textContent = `Total de artículos seleccionados: ${[...root.querySelectorAll('[data-devq]')].reduce((s, i) => s + (Number(i.value) || 0), 0)}`;
  });
  root.querySelector('[data-rate]').addEventListener('submit', (e) => { e.preventDefault(); ok('Acción registrada con éxito', 'Tu calificación quedó publicada en el perfil de la tienda.'); e.target.querySelector('button').disabled = true; });
  root.querySelector('[data-dev]').addEventListener('submit', (e) => { e.preventDefault(); const n = [...root.querySelectorAll('[data-devq]')].reduce((s, i) => s + (Number(i.value) || 0), 0), m = root.querySelector('#pv-mot').value.trim(), er = root.querySelector('[data-deverr]');
    const msg = !n ? 'Elige al menos un artículo para devolver.' : !m ? 'Escribe el motivo de la devolución.' : ''; er.hidden = !msg; er.innerHTML = msg ? `${icon('error', 16)}${msg}` : ''; if (!msg) ok('Devolución solicitada', `La tienda revisa ${n} ${n === 1 ? 'artículo' : 'artículos'} y te indica cómo enviarlos.`); });
  root.querySelector('[data-rec]').addEventListener('submit', (e) => { e.preventDefault(); const t = root.querySelector('#pv-rec').value.trim(), er = root.querySelector('[data-recerr]');
    er.hidden = t.length >= 20; er.innerHTML = t.length >= 20 ? '' : `${icon('error', 16)}Cuenta qué pasó con al menos 20 caracteres.`; if (t.length >= 20) ok('Reclamo abierto', 'VexBiz revisa el caso y te escribe en «Reclamos» en hasta 48 horas.'); });
  paintStars();
});

// ── 06.13 · Mis reclamos ────────────────────────────────────────────────────
const reclamosP = pageOf('06.13', 'MIS COMPRAS', 'Mis reclamos', () => panel('compras', 'reclamos', `${head([['Mi cuenta', '#/cuenta'], ['Compras', '#/compras'], ['Reclamos']], 'Mis reclamos y disputas', 'Sigue tus reclamos, lee la resolución de VexBiz y conversa con la tienda y el mediador.', pager())}
  ${S.reclamos.map((r) => card(`<div class="w-claimhead"><b>Disputa ${r.id}</b><a class="w-link w-link--sm" href="#/compras">Orden ${r.pedido}</a><small class="w-muted">Iniciado el ${r.abierto || `${r.fecha}/2026`}</small>${r.estado === 'Resuelto' ? badge('Resuelto a favor', 'info', 'check') : badge('En mediación oficial VexBiz', 'brand', 'flag')}</div>
    ${r.resolucion ? `<div class="w-box w-box--info"><small>Resolución Oficial VexBiz:</small><p>Se aprueba el ${r.resolucion.toLowerCase().replace('.', '')}. La tienda envió un modelo distinto al publicado.</p></div>` : ''}
    <div class="w-box"><small>Motivo expuesto:</small><p>${esc(r.motivo || r.resumen)}</p></div>
    ${r.mensajes.length ? `<p class="w-step-t">Historial de mensajes (${r.mensajes.length})</p><ul class="w-thread">${r.mensajes.map((m) => `<li class="w-thread__${m.de === 'Tú' ? 'me' : m.de === 'VexBiz' ? 'med' : 'shop'}"><small>${m.de === 'La tienda' ? esc(r.tienda || 'La tienda') : m.de === 'VexBiz' ? 'Mediador VexBiz' : 'Tú'} · ${m.dia || (m.de === 'VexBiz' ? '05/10/2026' : '03/10/2026')} · ${m.hora}</small><p>${esc(m.t)}</p></li>`).join('')}</ul>
      <form novalidate data-msg="${r.id}" class="w-stackform"><div class="w-field"><label for="m-${r.id.slice(1)}">Responder en el hilo de mediación:</label><textarea class="w-input w-area" id="m-${r.id.slice(1)}" placeholder="Escribe tu mensaje o aclaración para la tienda y el mediador…"></textarea></div><div class="w-acc__head"><small class="w-muted">Todos los mensajes quedan registrados en auditoría.</small><button class="w-btn w-btn--primary" type="submit">${icon('inbox', 18)}Enviar mensaje</button></div></form>`
      : `<p class="w-btnrow"><small class="w-muted">${icon('lock', 16)}Este caso se cerró.</small><a class="w-link" href="#/compras">Ver pedido</a></p>`}`)).join('')}`),
(root) => {
  root.addEventListener('submit', (e) => {
    const f = e.target.closest('[data-msg]'); if (!f) return; e.preventDefault();
    const t = f.querySelector('textarea').value.trim(); if (!t) { toast('Escribe el mensaje antes de enviarlo'); return; }
    const r = S.reclamos.find((x) => x.id === f.dataset.msg), now = new Date();
    r.mensajes.push({ de: 'Tú', dia: '16/10/2026', hora: `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`, t }); toast('Mensaje enviado al hilo de mediación'); window.dispatchEvent(new HashChangeEvent('hashchange'));
  });
});

// ── 06.14 · Mis garantías ───────────────────────────────────────────────────
const garantiasP = pageOf('06.14', 'MIS COMPRAS', 'Mis garantías', () => panel('compras', 'garantias', `${head([['Mi cuenta', '#/cuenta'], ['Compras', '#/compras'], ['Garantías']], 'Mis garantías activas', 'Quién responde por cada producto o servicio, hasta cuándo y en qué condiciones.', pager())}
  ${W.garantias.map((g) => card(`<p class="w-chiprow">${g.manana ? badge('Vence mañana', 'warn', 'clock') : badge(`Vigente · ${g.meses} meses restantes`, 'info', 'shield')}${g.orden ? `<span class="w-muted">Orden ${g.orden}</span>` : ''}</p>
    <h2>${esc(g.producto)}</h2><p>Responde: ${esc(g.responde)} <span class="w-muted">Cobertura hasta el ${g.hasta}</span></p>
    ${g.terminos ? `<div class="w-box"><small>Términos de cobertura:</small><p>${esc(g.terminos)}</p></div>` : ''}
    ${g.orden ? `<p class="w-acc__head">${g.cert ? `<span class="w-ok">${icon('shield', 16)}Certificado digital registrado</span>` : '<span></span>'}<a class="w-link" href="#/compras">${icon('chevron', 18)}Ver pedido de origen</a></p>` : ''}`)).join('')}
  <details class="w-panel w-expired"><summary>${W.expiradas.length} garantías con plazo expirado</summary><ul>${W.expiradas.map((g) => `<li>${esc(g.producto)} <span class="w-muted">· venció el ${g.hasta}</span></li>`).join('')}</ul></details>`));

// ── 06.15 · Servicios que pedí ──────────────────────────────────────────────
const serviciosP = pageOf('06.15', 'MIS COMPRAS', 'Servicios que pedí', () => {
  const lista = [...serviciosPedidos, W.servicioExtra].map((s) => ({ ...s, donde: s.donde || 'Urb. El Viñedo, Calle 4, Casa 12, Valencia' }));
  const tono = (s) => (s.ok ? ['info', 'Trabajo completado'] : /espera/i.test(s.estado) ? ['brand', 'En espera de respuesta'] : ['neutral', 'Aceptado · Agendando visita']);
  return panel('compras', 'servicios-pedidos', `${head([['Mi cuenta', '#/cuenta'], ['Compras', '#/compras'], ['Servicios']], 'Servicios que pedí', 'El estado de cada servicio técnico que solicitaste, con su tarifa, fecha y garantía.', pager())}
    ${lista.map((s) => card(`<div class="w-acc__head"><p class="w-chiprow"><b>${s.id}</b>${badge(...tono(s))}</p>${s.total ? `<p class="w-orders__tot"><small>Tarifa acordada</small><b>${money(s.total)}</b></p>` : ''}</div>
      <h2>${esc(s.servicio)}</h2><p class="w-chiprow">${icon(s.rating ? 'wrench' : 'store', 18)}<span>${esc(s.quien)}</span>${s.rating ? `<span class="w-stars">${icon('star', 16)}${String(s.rating).replace('.', ',')}</span>` : `<small class="w-muted">· ${esc(s.nota || 'Empresa asignará técnico en turno')}</small>`}</p>
      <div class="w-grid2 w-grid2--tight"><div class="w-box w-box--row">${icon('calendar', 20)}<span><small>Fecha programada</small>${esc(s.cuando.replace('Sáb 18/10', 'Sáb 18/10/2026').replace('02/10 ·', '02/10/2026 ·'))}</span></div><div class="w-box w-box--row">${icon('pin', 20)}<span><small>Ubicación de visita</small>${esc(s.donde)}</span></div></div>
      ${s.id === '#S-2041' ? '<div class="w-box"><small>Detalle e indicaciones</small><p>El equipo ya está comprado. La unidad exterior va en el balcón, 3er piso.</p></div>' : ''}
      <p class="w-acc__head">${s.ok ? `<a class="w-link" href="#/garantias">${icon('shield', 18)}Garantía activa de servicio (1)</a>` : '<small class="w-muted">Sin garantía técnica adicional</small>'}<a class="w-link" href="#/servicios">${icon('chevron', 18)}Explorar catálogo de servicios</a></p>`)).join('')}`);
});

// ── 06.16 a 06.20 · Aprender ────────────────────────────────────────────────
const col = (h) => `<div class="w-wrap w-narrow">${h}</div>`;
const cursosP = pageOf('06.16', 'APRENDER', 'Mis cursos', () => col(`<h1 class="w-title">Mis cursos</h1>
  ${['inv', 'split', 'gas'].map((id) => { const c = cursosAcademia.find((x) => x.id === id), a = avanceIni[id], hechas = id === 'inv' && S.vista ? a.hechas + 1 : a.hechas, pct = Math.round((hechas / c.clases) * 100); return card(`<h2>${esc(c.titulo)}</h2><p class="w-muted w-sm">${hechas} de ${c.clases} lecciones</p>
    <div class="w-progress"><span role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100" aria-label="Avance de ${esc(c.titulo)}"><i style="--p:${pct}%"></i></span><b>${pct}%</b></div>
    ${a.completado || pct === 100 ? badge('Completado', 'info', 'check') : `<p class="w-btnrow"><a class="w-btn w-btn--primary" href="${id === 'inv' ? '#/leccion' : '#/indice'}">${icon('play', 18)}Continuar</a><small class="w-muted">Sigue en: ${esc(a.sigue)}</small></p>`}`); }).join('')}
  <p class="w-btnrow w-center"><a class="w-link" href="#/nivel">${icon('star', 18)}Mi nivel y mis puntos</a><a class="w-link" href="#/eventos">${icon('calendar', 18)}Eventos</a><a class="w-link" href="#/comunidad">${icon('chat', 18)}Comunidad</a></p>`));

const leccionP = pageOf('06.17', 'APRENDER', 'Probar el IPM', () => {
  const c = cursosAcademia.find((x) => x.id === 'inv'), mod = c.temario[1], i = mod.l.findIndex(([n]) => n === 'Probar el IPM');
  return `<div class="w-wrap w-narrow2"><p class="w-muted w-sm"><a class="w-link w-link--sm" href="#/cursos">${esc(c.titulo)}</a> · ${esc(mod.n)}</p><h1 class="w-title w-title--md">Probar el IPM</h1><p class="w-muted">22 min</p>
    <div class="w-video" data-video><button class="w-video__play" type="button" aria-label="Reproducir la lección">${icon('play', 34)}</button><span class="w-video__bar"><i data-vbar></i></span></div>
    <p class="w-muted w-sm">${icon('clock', 16)} Retomamos donde lo dejaste, en el minuto 9.</p>
    <button class="w-btn w-btn--primary w-btn--block w-btn--lg" type="button" data-vista${S.vista ? ' disabled' : ''}>${icon('check', 18)}${S.vista ? 'Lección vista' : 'Marcar como vista'}</button><p class="w-center w-muted w-sm">${S.vista ? 'Sumaste 10 puntos a tu nivel.' : 'Suma 10 puntos a tu nivel.'}</p>
    ${card(`<h2>Materiales</h2><p class="w-muted w-sm">Descárgalos para tenerlos sin conexión.</p><ul class="w-files">${materiales.map((m, k) => `<li>${icon('doc', 20)}<a href="#/leccion" data-toast="${esc(m)} descargado">${esc(m)}</a><small>${k ? '1,2 MB' : '240 KB'}</small><button class="w-iconbtn" type="button" data-toast="${esc(m)} descargado" aria-label="Descargar ${esc(m)}">${icon('download', 20)}</button></li>`).join('')}</ul>`)}
    <p class="w-acc__head"><button class="w-btn w-btn--ghost" type="button" data-toast="Lección anterior: ${esc(c.temario[0].l[3][0])}">${icon('back', 18)}Anterior</button><button class="w-btn w-btn--soft" type="button" data-toast="Siguiente lección: ${esc(mod.l[i + 1][0])}">${icon('chevron', 18)}Siguiente</button></p></div>`;
}, (root) => {
  const v = root.querySelector('[data-video]'), bar = root.querySelector('[data-vbar]'); let t = 9 / 22, id = 0;
  bar.style.setProperty('--p', `${t * 100}%`);
  v.querySelector('button').addEventListener('click', () => { const on = !id; v.classList.toggle('is-play', on); v.querySelector('button').setAttribute('aria-label', on ? 'Pausar la lección' : 'Reproducir la lección'); v.querySelector('button').innerHTML = icon(on ? 'pause' : 'play', 34);
    if (on) id = setInterval(() => { t = Math.min(1, t + 0.01); bar.style.setProperty('--p', `${t * 100}%`); }, 400); else { clearInterval(id); id = 0; } });
  root.querySelector('[data-vista]').addEventListener('click', () => { S.vista = true; S.puntos += 10; toast('Lección vista: sumaste 10 puntos'); window.dispatchEvent(new HashChangeEvent('hashchange')); });
  return () => clearInterval(id);
});

const eventosP = pageOf('06.18', 'APRENDER', 'Eventos', () => col(`<h1 class="w-title">Eventos</h1>
  ${W.eventos.map((e) => { const yo = S.apuntado.has(e.id), quedan = e.quedan - (yo ? 1 : 0); return card(`${e.vivo ? badge('EN VIVO AHORA', 'live', 'clock') : ''}<h2>${esc(e.t)}</h2><p class="w-muted">${esc(e.cuando)}</p>${e.d ? `<p>${esc(e.d)}</p>` : ''}
    ${quedan > 0 ? `<p><b>Quedan ${quedan} de ${e.cupo} plazas</b></p>` : `<p class="w-bad">Aforo completo · ${e.cupo} de ${e.cupo}</p><p class="w-muted">No quedan plazas</p>`}
    ${e.vivo ? `<p class="w-btnrow"><button class="w-btn w-btn--primary" type="button" data-toast="El directo se abre en una ventana nueva">${icon('share', 18)}Entrar ahora</button>${yo ? `<button class="w-btn w-btn--text" type="button" data-ev="${e.id}">Cancelar</button>` : `<button class="w-btn w-btn--text" type="button" data-ev="${e.id}">Apuntarme</button>`}</p>`
      : quedan > 0 || yo ? `<button class="w-btn ${yo ? 'w-btn--ghost' : 'w-btn--soft'}" type="button" data-ev="${e.id}">${icon(yo ? 'close' : 'calendar', 18)}${yo ? 'Cancelar mi plaza' : 'Apuntarme'}</button>` : ''}`); }).join('')}
  ${card(`<h2 class="w-muted">Ya pasaron</h2>${W.pasados.map((p) => `<p class="w-muted">${esc(p)}</p>`).join('')}`, 'w-card2--soft')}`),
(root) => { root.addEventListener('click', (e) => { const b = e.target.closest('[data-ev]'); if (!b) return; const id = b.dataset.ev; if (S.apuntado.has(id)) { S.apuntado.delete(id); toast('Cancelaste tu plaza'); } else { S.apuntado.add(id); toast('Te apuntaste: te avisamos antes de empezar'); } window.dispatchEvent(new HashChangeEvent('hashchange')); }); });

const comunidadP = pageOf('06.19', 'APRENDER', 'Comunidad técnica', () => col(`<h1 class="w-title">Comunidad técnica</h1><p class="w-lede">Un foro por oficio. Pregunta, responde y resuelve con otros técnicos.</p>
  <form class="w-searchbar" role="search" data-cs><label class="w-filter">${icon('search', 22)}<span class="w-sr">Buscar una avería</span><input type="search" placeholder="Busca una avería: «nevera no enfría», «split gotea»…"></label><button class="w-btn w-btn--primary" type="submit">${icon('search', 18)}Buscar</button></form>
  ${card(`<ul class="w-forums">${W.foros.map(([n, a, c, art], i) => `<li><a href="${i ? '#/foro?id=aa' : '#/foro?id=aa'}"><span class="w-thumb">${productArt(producto(art))}</span><span><b>${esc(n)}</b><small>${esc(a)}</small></span><span class="w-muted">${c} preguntas</span>${icon('chevron', 20)}</a></li>`).join('')}</ul>`, 'w-card2--flush')}`),
(root) => { root.querySelector('[data-cs]').addEventListener('submit', (e) => { e.preventDefault(); const q = e.target.querySelector('input').value.trim(); if (!q) { toast('Escribe la avería que buscas'); return; } location.hash = '#/foro?id=aa'; }); });

const nivelP = pageOf('06.20', 'APRENDER', 'Mi nivel', () => {
  const p = S.puntos, i = W.niveles.findLastIndex(([, m]) => p >= m), [nom, min] = W.niveles[i], [sig, max] = W.niveles[i + 1] || [nom, min], pct = Math.round(((p - min) / (max - min)) * 100);
  const hist = S.vista ? [['Lección vista: Probar el IPM', '16/10/2026', 10], ...W.historial] : W.historial;
  return col(`<h1 class="w-title">Mi nivel</h1>
    <section class="w-level"><small>Nivel ${i + 1} de ${W.niveles.length}</small><h2>${esc(nom)}</h2><b>${p.toLocaleString('es-VE')} puntos</b>
      <div class="w-progress w-progress--ink"><span role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100" aria-label="Avance hacia ${esc(sig)}"><i style="--p:${pct}%"></i></span><b>${pct}%</b></div><p>Te faltan ${(max - p).toLocaleString('es-VE')} para ${esc(sig)}.</p></section>
    ${card(`<h2>De dónde salieron</h2><ul class="w-ledger">${hist.map(([t, f, n]) => `<li><span>${esc(t)}<small>${f}</small></span><b class="${n < 0 ? 'w-bad' : 'w-good'}">${n > 0 ? '+' : ''}${n}</b></li>`).join('')}</ul>`)}
    ${card(`<h2>Los niveles</h2><ul class="w-ledger">${W.niveles.map(([n, m], k) => `<li class="${k === i ? 'is-here' : ''}"><span>${esc(n)}${k === i ? ' · estás aquí' : ''}</span><small>${m.toLocaleString('es-VE')} pts</small></li>`).join('')}</ul>`)}`);
});

/** Rutas de Mi cuenta para el router. */
export const RUTAS = {
  tablero, cuenta: cuentaP, sesiones: sesionesP, seguridad: seguridadP, avisos: avisosP, direcciones: dirsP, pagos: pagosP, empresa: empresaP,
  compras: comprasP, pedido: pedidoP, 'pago-grupo': grupoP, postventa: postP, reclamos: reclamosP, garantias: garantiasP, 'servicios-pedidos': serviciosP,
  cursos: cursosP, leccion: leccionP, eventos: eventosP, comunidad: comunidadP, nivel: nivelP,
};
export { REGLAS, productoApp };
