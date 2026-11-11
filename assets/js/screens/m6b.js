// M6 · Cuenta y postventa (2/2): direcciones, formas de pago, avisos, seguridad, dos pasos, sesiones,
// eliminar cuenta, registrar empresa, cómo se ve VexBiz, ayuda, documento y contacto.
import { register } from './registry.js';
import { h, icon, btn, iconBtn, topbar, stateBlock, toast, $, $$ } from '../ui.js';
import { avatar, page, field, fieldError, select, switchHtml, statusTag, row, whatsappBtn, reqsHtml, paintReqs, radioOpt, wireControls, closeOnGo, banner } from '../market.js';
import { go, back, closeOverlay, openOverlay } from '../router.js';
import { state, set, subscribe, removeLine } from '../store.js';
import { play } from '../motion.js';
import { estadosVE, bancosVE } from '../data.js';
import { esc, plural } from '../format.js';
import { prefs, setScale, setContrast, setReduce } from '../prefs.js';

const sec = (title) => `<h2 class="md-label-large vx-sub vx-sub--list">${title}</h2>`;
const mask = (doc) => { const d = doc.replace(/\D/g, ''); return d.length >= 5 ? `${d.slice(0, 2)}.***.${d.slice(-3)}` : doc; };
const copiar = async (txt, ok = 'Copiado') => { try { await navigator.clipboard.writeText(txt); toast(ok); } catch { toast('Selecciona el texto para copiarlo'); } };

// ── M6.13 · Direcciones ─────────────────────────────────────────────────────
register('M6.13', {
  render() {
    const el = h(`<div>${topbar('Direcciones', { trailing: iconBtn('add', 'Añadir dirección', 'data-go="M6.14"') })}<ul class="vx-orders vx-pad-h" role="list" id="dirList"></ul></div>`);
    const paint = () => { el.querySelector('#dirList').innerHTML = state.dirs.map((d) => `<li class="vx-order"><div class="vx-order-main vx-static"><span class="vx-order-text">
      <span class="md-title-small">${esc(d.nombre)} ${d.predeterminada ? '<span class="vx-tag md-label-small">Predeterminada</span>' : ''}</span><span class="md-body-large">${esc(d.linea)}</span>${d.ref ? `<span class="md-body-medium vx-muted">${esc(d.ref)}</span>` : ''}
      <span class="md-body-medium vx-muted vx-tab-num">${esc(d.ciudad)} · CP ${esc(d.cp)}</span><span class="md-body-medium vx-muted vx-tab-num">${esc(d.tel)}</span>${d.sinMapa ? `<span>${statusTag('warning', 'Falta el punto en el mapa')}</span>` : ''}</span>
      ${iconBtn('more2', `Acciones de ${d.nombre}`, `data-adir="${d.id}" data-go="O.ACC"`)}</div></li>`).join(''); };
    el.addEventListener('click', (e) => { const b = e.target.closest('[data-adir]'); if (b) state.flow.accDir = b.dataset.adir; });
    paint(); el.__un = subscribe(paint); return el;
  },
  mount(el) { return el.__un; },
});

// ── Hoja «Acciones de la dirección» ─────────────────────────────────────────
register('O.ACC', {
  render() {
    const d = state.dirs.find((x) => x.id === state.flow.accDir) || state.dirs[0];
    const el = h(`<div><div class="vx-sheet-head"><h2 id="sheet-title" class="md-title-large md-sheet-title" tabindex="-1">${esc(d.nombre)}</h2>${iconBtn('close', 'Cerrar', 'data-close')}</div>
      <ul class="vx-list" role="list">${row({ ic: 'edit', title: 'Editar', attrs: 'data-a="edit"' })}${d.predeterminada ? '' : row({ ic: 'check', title: 'Usar como predeterminada', attrs: 'data-a="def"' })}${row({ ic: 'trash', title: 'Quitar', attrs: 'data-a="del"', danger: true })}</ul></div>`);
    el.addEventListener('click', async (e) => {
      const a = e.target.closest('[data-a]'); if (!a) return;
      const k = a.dataset.a;
      if (k === 'edit') { await closeOverlay({ silent: true }); go('M6.14', { kind: 'push', params: { id: d.id } }); return; }
      if (k === 'def') { state.dirs.forEach((x) => { x.predeterminada = x.id === d.id; }); state.flow.direccion = d.id; set({ dirs: state.dirs }); toast(`${d.nombre} es tu dirección predeterminada`); }
      if (k === 'del') { const i = state.dirs.findIndex((x) => x.id === d.id), [gone] = state.dirs.splice(i, 1);
        if (gone.predeterminada && state.dirs[0]) state.dirs[0].predeterminada = true;
        if (state.flow.direccion === gone.id) state.flow.direccion = state.dirs[0]?.id;
        set({ dirs: state.dirs });
        toast(`Quitaste ${gone.nombre}`, { action: 'Deshacer', onAction: () => { state.dirs.splice(i, 0, gone); set({ dirs: state.dirs }); } }); }
      closeOverlay();
    });
    return el;
  },
});

// ── M6.14 · Dirección (pantalla de flujo) ───────────────────────────────────
register('M6.14', {
  render(ctx) {
    const d = state.dirs.find((x) => x.id === ctx.params.id), edit = !!d;
    const [est, ciu] = d ? [d.ciudad.split(', ')[1] || 'Carabobo', d.ciudad.split(', ')[0]] : ['Carabobo', 'Valencia'];
    const el = h(`<div class="vx-page"><header class="vx-sheet-head vx-flowhead"><h2 id="sheet-title" class="md-title-large md-sheet-title" tabindex="-1">${edit ? 'Editar dirección' : 'Nueva dirección'}</h2>${iconBtn('close', 'Cerrar', 'data-close')}</header>
      <div class="vx-body vx-pad-h"><form class="vx-form" novalidate onsubmit="return false">
        ${field({ id: 'dNombre', label: 'Nombre de la dirección', value: d?.nombre || '' })}${field({ id: 'dLinea', label: 'Calle y número', value: d?.linea || '', autocomplete: 'street-address' })}${field({ id: 'dRef', label: 'Referencia (opcional)', value: d?.ref || '' })}
        ${select({ id: 'dEstado', label: 'Estado', options: Object.keys(estadosVE), value: est })}${select({ id: 'dCiudad', label: 'Ciudad', options: estadosVE[est] || [], value: ciu })}
        ${field({ id: 'dCp', label: 'Código postal', value: d?.cp || '', inputmode: 'numeric' })}${field({ id: 'dTel', label: 'Teléfono', value: d?.tel || '', inputmode: 'tel', autocomplete: 'tel' })}</form>
        <div class="vx-map" aria-hidden="true">${icon('map', 40)}</div><div class="vx-row-end">${btn('Marcar en el mapa', { kind: 'text', id: 'dMapa' })}</div>
        ${switchHtml('dDef', 'Usar como predeterminada', !!d?.predeterminada)}</div>
      <footer class="vx-actionbar">${btn('Guardar dirección', { kind: 'filled', block: true, id: 'dSave' })}</footer></div>`);
    wireControls(el);
    el.querySelector('#dEstado').addEventListener('change', (e) => { const c = el.querySelector('#dCiudad'); c.innerHTML = estadosVE[e.target.value].map((x) => `<option>${x}</option>`).join(''); });
    let mapa = d ? !d.sinMapa : false;
    el.querySelector('#dMapa').addEventListener('click', () => { mapa = true; toast('Punto marcado en el mapa'); });
    el.querySelector('#dSave').addEventListener('click', async () => {
      const v = (id) => el.querySelector('#' + id).value.trim();
      const bad = { dNombre: !v('dNombre') && 'Escribe un nombre', dLinea: !v('dLinea') && 'Escribe la calle y el número', dTel: !/^[\d\s+-]{7,}$/.test(v('dTel')) && 'Escribe un teléfono válido' };
      Object.entries(bad).forEach(([k, m]) => fieldError(el, k, m || '')); if (Object.values(bad).some(Boolean)) return;
      const def = el.querySelector('#dDef').checked, rec = { nombre: v('dNombre'), linea: v('dLinea'), ref: v('dRef'), ciudad: `${v('dCiudad')}, ${v('dEstado')}`, cp: v('dCp') || '—', tel: v('dTel'), sinMapa: !mapa };
      if (def) state.dirs.forEach((x) => { x.predeterminada = false; });
      if (edit) Object.assign(d, rec, { predeterminada: def || d.predeterminada }); else state.dirs.push({ id: 'd' + Date.now(), predeterminada: def || !state.dirs.length, ...rec });
      if (def) state.flow.direccion = (edit ? d : state.dirs[state.dirs.length - 1]).id;
      set({ dirs: state.dirs }); toast('Dirección guardada'); await closeOverlay();
    });
    return el;
  },
});

// ── M6.15 · Formas de pago ──────────────────────────────────────────────────
register('M6.15', {
  render() {
    const el = h(`<div>${topbar('Formas de pago', { trailing: iconBtn('add', 'Añadir forma de pago', 'data-go="M6.16"') })}
      <p class="md-body-large vx-pad-h">Guarda tu cuenta para pagar más rápido. La clave del banco se pide siempre al pagar y no se guarda.</p>
      <ul class="vx-orders vx-pad-h" role="list" id="pagoList"></ul><div class="vx-pad-h">${btn('Añadir forma de pago', { kind: 'filled', block: true, go: 'M6.16' })}</div></div>`);
    const paint = () => { el.querySelector('#pagoList').innerHTML = state.pagos.map((p) => `<li class="vx-order"><div class="vx-order-main vx-static"><span class="vx-order-text">
      <span class="md-title-small">${esc(p.titulo)} ${p.preferida ? '<span class="vx-tag md-label-small">Preferida</span>' : ''}</span><span class="md-body-medium vx-muted">${esc(p.sub)}</span>
      <span class="md-body-medium vx-tab-num">${[p.doc, p.cuenta, p.tel, p.correo].filter(Boolean).map(esc).join(' · ')}</span>${p.ultimo ? `<span class="md-body-small vx-muted">Último uso: ${p.ultimo}</span>` : ''}
      ${p.falla ? `<span>${statusTag('warning', 'Falló varias veces seguidas. Revisa los datos.')}</span>` : ''}</span>${iconBtn('trash', `Quitar ${p.titulo}`, `data-rmpago="${p.id}"`)}</div></li>`).join('') || `<li>${stateBlock({ icon: 'wallet', title: 'Todavía no guardas formas de pago' })}</li>`; };
    el.addEventListener('click', (e) => { const b = e.target.closest('[data-rmpago]'); if (!b) return;
      const i = state.pagos.findIndex((x) => x.id === b.dataset.rmpago), [gone] = state.pagos.splice(i, 1); set({ pagos: state.pagos });
      toast(`Quitaste ${gone.titulo}`, { action: 'Deshacer', onAction: () => { state.pagos.splice(i, 0, gone); set({ pagos: state.pagos }); } }); });
    paint(); el.__un = subscribe(paint); return el;
  },
  mount(el) { return el.__un; },
});

// ── M6.16 · Forma de pago (pantalla de flujo) ───────────────────────────────
register('M6.16', {
  render() {
    const el = h(`<div class="vx-page"><header class="vx-sheet-head vx-flowhead"><h2 id="sheet-title" class="md-title-large md-sheet-title" tabindex="-1">Nueva forma de pago</h2>${iconBtn('close', 'Cerrar', 'data-close')}</header>
      <div class="vx-body vx-pad-h"><form class="vx-form" novalidate onsubmit="return false">
        ${select({ id: 'pTipoDoc', label: 'Tipo de documento', options: ['V', 'E', 'J', 'P'], value: 'V' })}${field({ id: 'pDoc', label: 'Número de documento', inputmode: 'numeric' })}
        ${select({ id: 'pBanco', label: 'Banco', options: ['Elige tu banco', ...bancosVE], value: 'Elige tu banco' })}${field({ id: 'pTel', label: 'Teléfono', inputmode: 'tel', autocomplete: 'tel' })}
        ${field({ id: 'pCuenta', label: 'Número de cuenta (opcional)', inputmode: 'numeric' })}${field({ id: 'pAlias', label: 'Alias (opcional)' })}</form>
        <p class="vx-ready md-body-large" id="pEstado" role="status"></p></div>
      <footer class="vx-actionbar">${btn('Guardar forma de pago', { kind: 'filled', block: true, id: 'pSave' })}</footer></div>`);
    const v = (id) => el.querySelector('#' + id).value.trim();
    const faltan = () => [!v('pDoc') && 'documento', v('pBanco') === 'Elige tu banco' && 'banco', !/^[\d\s+-]{7,}$/.test(v('pTel')) && 'teléfono'].filter(Boolean);
    const paint = () => { const f = faltan(); el.querySelector('#pEstado').innerHTML = f.length ? `${icon('info', 18)} Falta: ${f.join(', ')}.` : `${icon('check', 18)} Todo listo: documento, banco y teléfono completos.`; el.querySelector('#pEstado').classList.toggle('is-ok', !f.length); };
    el.addEventListener('input', paint); el.addEventListener('change', paint);
    el.querySelector('#pSave').addEventListener('click', async () => {
      fieldError(el, 'pDoc', !v('pDoc') ? 'Escribe tu documento' : ''); fieldError(el, 'pTel', !/^[\d\s+-]{7,}$/.test(v('pTel')) ? 'Escribe un teléfono válido' : '');
      if (faltan().length) { if (v('pBanco') === 'Elige tu banco') toast('Elige tu banco'); return; }
      const tel = v('pTel').replace(/\D/g, '');
      state.pagos.push({ id: 'p' + Date.now(), titulo: `${v('pBanco')} ····${tel.slice(-4)}`, sub: v('pAlias') || 'Teléfono y banco', doc: `${v('pTipoDoc')}-${mask(v('pDoc'))}`, tel: `${tel.slice(0, 4)} ···${tel.slice(-4)}` });
      set({ pagos: state.pagos }); toast('Guardaste tu forma de pago'); await closeOverlay();
    });
    paint(); return el;
  },
});

// ── M6.17 · Avisos ──────────────────────────────────────────────────────────
register('M6.17', {
  render() {
    const el = h(`<div>${topbar('Avisos', { trailing: btn('Marcar como leídos', { kind: 'text', id: 'avLeer' }) })}
      <div class="vx-pad-h"><div class="md-seg" role="tablist" aria-label="Ver">${[['todos', 'Todos'], ['nuevos', 'Sin leer']].map(([k, t], i) => `<button type="button" role="tab" class="md-seg-item md-sl md-label-large${i === 0 ? ' md-seg-item--on' : ''}" data-seg="${k}" aria-selected="${i === 0}">${t}</button>`).join('')}</div></div>
      <ul class="vx-list" role="list" id="avList"></ul></div>`);
    let seg = 'todos';
    const paint = () => { const l = state.avisosCuenta.filter((a) => seg === 'todos' || a.nuevo);
      el.querySelector('#avList').innerHTML = l.map((a) => `<li><button type="button" class="md-li md-li--3 md-sl vx-press vx-row" data-go="${a.to}"><span class="md-li-icon">${icon(a.ic)}</span>
        <span class="md-li-text"><span class="md-li-title md-body-large">${esc(a.t)} ${a.nuevo ? '<span class="vx-tag md-label-small">Nuevo</span>' : ''}</span><span class="md-li-sup md-body-medium">${esc(a.d)}</span></span><span class="md-li-end md-body-small">${a.cuando}</span></button></li>`).join('') || `<li>${stateBlock({ icon: 'bell', title: 'No tienes avisos sin leer' })}</li>`;
      el.querySelector('#avLeer').disabled = !state.avisosCuenta.some((a) => a.nuevo); };
    el.addEventListener('click', (e) => { const b = e.target.closest('[data-seg]'); if (b) { seg = b.dataset.seg; $$('[data-seg]', el).forEach((x) => { const on = x === b; x.classList.toggle('md-seg-item--on', on); x.setAttribute('aria-selected', on); }); paint(); } });
    el.querySelector('#avLeer').addEventListener('click', () => { state.avisosCuenta.forEach((a) => { a.nuevo = false; }); set({ avisosCuenta: state.avisosCuenta }); paint(); toast('Marcaste todo como leído'); });
    paint(); return el;
  },
});

// ── M6.18 · Seguridad y contraseña ──────────────────────────────────────────
register('M6.18', {
  render() {
    const el = h(`<div>${topbar('Seguridad y contraseña')}
      <section class="vx-pad-h"><h2 class="md-title-medium">Cambiar contraseña</h2><form class="vx-form" novalidate onsubmit="return false">
        ${field({ id: 'sActual', label: 'Contraseña actual', type: 'password', autocomplete: 'current-password' })}${field({ id: 'sNueva', label: 'Contraseña nueva', type: 'password', autocomplete: 'new-password' })}${reqsHtml()}
        ${field({ id: 'sRepite', label: 'Repite la contraseña nueva', type: 'password', autocomplete: 'new-password' })}</form>
        <div class="vx-pad-v">${btn('Guardar contraseña', { kind: 'filled', block: true, id: 'sSave', attrs: 'disabled' })}</div></section>
      <ul class="vx-list" role="list" id="segList"></ul></div>`);
    const reqs = el.querySelector('.vx-reqs'); paintReqs(reqs, '');
    const check = () => { const n = el.querySelector('#sNueva').value, ok = paintReqs(reqs, n); el.querySelector('#sSave').disabled = !(el.querySelector('#sActual').value && ok && n === el.querySelector('#sRepite').value); };
    el.addEventListener('input', check);
    el.querySelector('#sSave').addEventListener('click', () => { toast('Contraseña actualizada. Cerramos tus otras sesiones.'); state.sesiones = state.sesiones.filter((s) => s.actual); set({ sesiones: state.sesiones });
      ['sActual', 'sNueva', 'sRepite'].forEach((i) => { el.querySelector('#' + i).value = ''; }); check(); });
    const paint = () => { el.querySelector('#segList').innerHTML = row({ ic: 'shield', title: 'Verificación en dos pasos', end: `${state.dosPasos ? 'Activa' : 'Sin activar'}${'' }`, go: 'M6.19' }) + row({ ic: 'desktop', title: 'Sesiones abiertas', end: `<b class="vx-tab-num">${state.sesiones.length}</b>`, go: 'M6.20' }) + row({ ic: 'trash', title: 'Eliminar cuenta', go: 'M6.21', danger: true }); };
    paint(); el.__un = subscribe(paint); return el;
  },
  mount(el) { return el.__un; },
});

// ── M6.19 · Verificación en dos pasos ───────────────────────────────────────
const CLAVE = 'JBSW Y3DP EHPK 3PXP', RESPALDO = ['7F3K-92LD', 'Q8MZ-4RTW', '2HNP-6VXA', 'L9CE-1JQU', 'W5BT-8KSN', 'M3YG-0PDF'];
register('M6.19', {
  render() {
    const el = h(`<div>${topbar('Verificación en dos pasos')}<div class="vx-pad-h vx-stack">
      <p id="dpEstado">${statusTag(state.dosPasos ? 'success' : 'neutral', state.dosPasos ? 'Activa' : 'Sin activar')}</p>
      <p class="md-body-large">Al entrar te pediremos además un código de tu app de autenticación.</p>
      <section id="dpPasos" ${state.dosPasos ? 'hidden' : ''} class="vx-stack"><h2 class="md-title-medium">Paso 1 · Vincula tu app de autenticación</h2>
        <p class="vx-key md-title-medium vx-tab-num" aria-label="Clave de configuración">${CLAVE}</p>
        <div class="vx-twin">${btn(`${icon('copy', 18)}Copiar clave`, { kind: 'outlined', id: 'dpCopy' })}${btn('Mostrar código QR', { kind: 'outlined', id: 'dpQr', attrs: 'aria-expanded="false"' })}</div>
        <div class="vx-qr" id="dpQrBox" hidden aria-label="Código QR de ejemplo">${icon('map', 56)}</div>
        <h2 class="md-title-medium">Paso 2 · Escribe el código</h2>${field({ id: 'dpCodigo', label: 'Código de 6 dígitos', inputmode: 'numeric', autocomplete: 'one-time-code', attrs: 'maxlength="6"' })}
        ${btn('Activar', { kind: 'filled', block: true, id: 'dpActivar' })}</section>
      <section id="dpResp" hidden class="vx-stack"><h2 class="md-title-medium">Códigos de respaldo</h2><p class="md-body-large">Guárdalos ahora. No se volverán a mostrar.</p>
        <ul class="vx-codes vx-tab-num" role="list">${RESPALDO.map((c) => `<li class="md-body-large">${c}</li>`).join('')}</ul>
        <div class="vx-twin">${btn(`${icon('copy', 18)}Copiar códigos`, { kind: 'tonal', id: 'dpCopyR' })}${btn('Ya los guardé', { kind: 'filled', id: 'dpListo' })}</div></section>
      <section id="dpOff" ${state.dosPasos ? '' : 'hidden'} class="vx-stack">${btn('Desactivar verificación en dos pasos', { kind: 'text', block: true, id: 'dpDes' })}</section></div></div>`);
    const q = (s) => el.querySelector(s);
    q('#dpCopy').addEventListener('click', () => copiar(CLAVE.replace(/\s/g, ''), 'Copiaste la clave'));
    q('#dpQr').addEventListener('click', (e) => { const box = q('#dpQrBox'), on = box.hidden; box.hidden = !on; e.currentTarget.textContent = on ? 'Ocultar código QR' : 'Mostrar código QR'; e.currentTarget.setAttribute('aria-expanded', on); });
    q('#dpActivar').addEventListener('click', () => { const c = q('#dpCodigo').value.trim();
      fieldError(el, 'dpCodigo', !/^\d{6}$/.test(c) ? 'Escribe los 6 dígitos' : c === '000000' ? 'El código no es correcto' : ''); if (!/^\d{6}$/.test(c) || c === '000000') return;
      state.dosPasos = true; set({ dosPasos: true }); q('#dpPasos').hidden = true; q('#dpResp').hidden = false; q('#dpEstado').innerHTML = statusTag('success', 'Activa'); toast('Activaste la verificación en dos pasos'); });
    q('#dpCopyR').addEventListener('click', () => copiar(RESPALDO.join('\n'), 'Copiaste los códigos'));
    q('#dpListo').addEventListener('click', () => { q('#dpResp').hidden = true; q('#dpOff').hidden = false; toast('Guardaste tus códigos de respaldo'); });
    q('#dpDes').addEventListener('click', () => { state.dosPasos = false; set({ dosPasos: false }); q('#dpOff').hidden = true; q('#dpPasos').hidden = false; q('#dpEstado').innerHTML = statusTag('neutral', 'Sin activar'); toast('Desactivaste la verificación en dos pasos'); });
    return el;
  },
});

// ── M6.20 · Sesiones abiertas ───────────────────────────────────────────────
register('M6.20', {
  render() {
    const el = h(`<div>${topbar('Sesiones abiertas')}<p class="md-body-large vx-pad-h">Aquí ves dónde está abierta tu cuenta.</p><ul class="vx-orders vx-pad-h" role="list" id="sesList"></ul>
      <div class="vx-pad-h">${btn('Cerrar las otras sesiones', { kind: 'filled', block: true, id: 'sesCerrar' })}</div></div>`);
    const paint = () => { el.querySelector('#sesList').innerHTML = state.sesiones.map((s) => `<li class="vx-order"><div class="vx-order-main vx-static"><span class="md-li-icon vx-sesico">${icon(s.ic, 28)}</span><span class="vx-order-text">
      <span class="md-title-small">${esc(s.equipo)} · ${esc(s.so)} ${s.actual ? '<span class="vx-tag md-label-small">Esta sesión</span>' : ''}</span><span class="md-body-medium vx-muted vx-tab-num">Venezuela · ${s.ip} · desde ${s.desde}</span></span></div></li>`).join('');
      el.querySelector('#sesCerrar').disabled = state.sesiones.length < 2; };
    el.querySelector('#sesCerrar').addEventListener('click', () => { const n = state.sesiones.filter((s) => !s.actual).length; state.sesiones = state.sesiones.filter((s) => s.actual); set({ sesiones: state.sesiones }); paint(); toast(`Cerraste ${plural(n, 'sesión', 'sesiones')}`); });
    paint(); return el;
  },
});

// ── M6.21 · Eliminar cuenta ─────────────────────────────────────────────────
// Pantalla de seguridad: entra con el push normal y nada más (sin movimiento extra).
register('M6.21', {
  render() {
    const bloqueos = [['2 compras en curso en Venezuela', 'Ver mis compras', 'M6.03'], ['1 trabajo técnico sin cerrar', 'Ver trabajos', 'M8.01']];
    const el = h(`<div>${topbar('Eliminar cuenta')}<div class="vx-pad-h vx-stack"><p class="md-body-large">Se borra tu cuenta en todos los países donde la usas. No se puede deshacer.</p>
      <h2 class="md-title-medium">Antes tienes que terminar:</h2><ul class="vx-list" role="list">${bloqueos.map(([t, l, to]) => `<li class="vx-block">${statusTag('warning', t)}${btn(l, { kind: 'text', go: to })}</li>`).join('')}</ul>
      <h2 class="md-title-medium">Antes de irte puedes</h2>${btn(`${icon('upload', 20)}Descargar mis datos`, { kind: 'text', block: true, attrs: 'data-toast="Preparando tu archivo. Te avisamos cuando esté listo."' })}
      <h2 class="md-title-medium">Cuando no haya bloqueos:</h2>${field({ id: 'delConf', label: 'Escribe ELIMINAR para confirmar', autocomplete: 'off' })}
      <p class="md-body-medium vx-muted" id="delWhy">Todavía tienes ${bloqueos.length} pendientes, por eso este botón sigue apagado.</p>
      ${btn('Eliminar mi cuenta', { kind: 'filled', block: true, id: 'delGo', attrs: 'disabled aria-describedby="delWhy"' })}</div></div>`);
    return el; // con bloqueos el botón no se habilita nunca: es el estado de Figma
  },
});

// ── M6.22 · Registrar mi empresa ────────────────────────────────────────────
register('M6.22', {
  render() {
    const chk = (id, t) => `<label class="md-check vx-chk"><span class="md-check-hit md-sl"><input class="md-check-input" type="checkbox" id="${id}"><span class="md-check-box"></span></span><span class="md-body-large">${t}</span></label>`;
    const el = h(page(topbar('Registrar mi empresa'), `
      <p class="md-body-large vx-pad-h">Lo justo para que tu empresa exista. La verificación tarda hasta 72 horas hábiles.</p><p class="vx-pad-h"><span class="vx-tag md-label-medium">${icon('globe', 14)}Venezuela</span> <span class="vx-tag md-label-medium">Sin cuota de entrada</span></p>
      <section class="vx-pad-h"><h2 class="md-title-medium">¿Cómo operas?</h2><div class="vx-options" role="radiogroup" aria-label="¿Cómo operas?">${radioOpt({ name: 'opera', value: 'natural', checked: true, title: 'Persona natural con actividad económica' })}${radioOpt({ name: 'opera', value: 'juridica', title: 'Persona jurídica' })}</div></section>
      <section class="vx-pad-h"><h2 class="md-title-medium">¿Qué hace tu empresa?</h2><div role="group" aria-label="¿Qué hace tu empresa?">${chk('aVender', 'Vender productos')}${chk('aImportar', 'Importar')}${chk('aServicios', 'Prestar servicios técnicos')}</div>
        <p class="md-body-medium vx-muted" id="aErr" role="alert"></p>
        <p class="md-body-medium vx-muted">Aseguradoras y auxilio vial entran por acuerdo con VexBiz; escríbenos desde ${btn('Contacto', { kind: 'text', go: 'M6.26' })}.</p></section>
      <div class="vx-pad-h vx-form">${field({ id: 'eNombre', label: 'Nombre de la empresa' })}${field({ id: 'eDoc', label: 'RIF o documento' })}${field({ id: 'eTel', label: 'Teléfono de contacto', inputmode: 'tel' })}</div>`,
      btn('Registrar mi empresa', { kind: 'filled', block: true, id: 'eGo' })));
    wireControls(el);
    el.addEventListener('change', (e) => { const t = e.target.closest('.md-check-input'); if (t) { const b = t.nextElementSibling; b.classList.toggle('md-check-box--on', t.checked); b.innerHTML = t.checked ? icon('check', 16) : ''; el.querySelector('#aErr').textContent = ''; } });
    el.querySelector('#eGo').addEventListener('click', () => {
      const v = (id) => el.querySelector('#' + id).value.trim(), act = $$('.md-check-input', el).some((c) => c.checked);
      fieldError(el, 'eNombre', !v('eNombre') ? 'Escribe el nombre de la empresa' : ''); fieldError(el, 'eDoc', !v('eDoc') ? 'Escribe el RIF o documento' : ''); fieldError(el, 'eTel', !/^[\d\s+-]{7,}$/.test(v('eTel')) ? 'Escribe un teléfono válido' : '');
      el.querySelector('#aErr').textContent = act ? '' : 'Elige al menos una actividad';
      if (!act || !v('eNombre') || !v('eDoc') || !/^[\d\s+-]{7,}$/.test(v('eTel'))) return;
      state.empresaRegistrada = true; set({ empresaRegistrada: true, mode: 'empresa' }); toast('Registramos tu empresa. La verificación tarda hasta 72 horas hábiles.');
      go('M9.01', { kind: 'mode' }); // Figma: fundido 350
    });
    return el;
  },
});

// ── M6.23 · Cómo se ve VexBiz ───────────────────────────────────────────────
// Efecto real sobre toda la app: el tamaño del texto escala todo el contenido, «más contraste» refuerza bordes y textos
// secundarios con roles del mismo sistema, y «menos movimiento» es el mismo interruptor del panel.
register('M6.23', {
  render() {
    const el = h(`<div>${topbar('Cómo se ve VexBiz')}<div class="vx-pad-h vx-stack">
      <section><h2 class="md-title-medium">Tamaño del texto</h2><p class="md-headline-small vx-tab-num" id="tsVal">${prefs.scale} %</p>
        <input type="range" class="vx-range" id="tsRange" min="100" max="150" step="10" value="${prefs.scale}" aria-label="Tamaño del texto" aria-valuetext="${prefs.scale} %"><div class="vx-rangelbl md-body-small vx-muted"><span>100 %</span><span>150 %</span></div>
        <p class="md-body-large">Así se leerán los textos de la app.</p></section>
      ${switchHtml('prContraste', 'Más contraste', prefs.contrast)}${switchHtml('prMov', 'Menos movimiento', prefs.reduce)}
      <p class="md-body-medium vx-muted">Estas preferencias se guardan en este teléfono. Si no cambias nada, la app sigue los ajustes de accesibilidad del sistema.</p>
      ${btn('Volver a los valores del sistema', { kind: 'outlined', block: true, id: 'prReset' })}</div></div>`);
    wireControls(el);
    const rng = el.querySelector('#tsRange');
    rng.addEventListener('input', () => { setScale(Number(rng.value)); el.querySelector('#tsVal').textContent = `${prefs.scale} %`; rng.setAttribute('aria-valuetext', `${prefs.scale} %`); });
    el.querySelector('#prContraste').addEventListener('change', (e) => setContrast(e.target.checked));
    el.querySelector('#prMov').addEventListener('change', (e) => setReduce(e.target.checked));
    el.querySelector('#prReset').addEventListener('click', () => { setScale(100); setContrast(matchMedia('(prefers-contrast: more)').matches); setReduce(matchMedia('(prefers-reduced-motion: reduce)').matches);
      rng.value = 100; el.querySelector('#tsVal').textContent = '100 %';
      [['prContraste', prefs.contrast], ['prMov', prefs.reduce]].forEach(([id, on]) => { const i = el.querySelector('#' + id); i.checked = on; i.nextElementSibling.classList.toggle('md-switch-track--on', on); }); toast('Volviste a los valores del sistema'); });
    return el;
  },
});

// ── M6.24 · Ayuda e información ─────────────────────────────────────────────
const SITIO = 'data-toast="Abre el sitio de VexBiz"';
register('M6.24', {
  render() {
    const doc = (ic, t, d) => row({ ic, title: t, go: `M6.25?doc=${d}` });
    const ext = (ic, t) => row({ ic, title: t, attrs: SITIO, end: icon('globe', 20) });
    return h(`<div>${topbar('Ayuda e información')}<p class="md-body-medium vx-muted vx-pad-h">Lunes a sábado, 8:00 a 19:00</p>
      ${sec('Ayuda')}<ul class="vx-list" role="list">${doc('info', 'Cómo comprar', 'comprar')}${doc('truck', 'Envíos', 'envios')}${doc('receipt', 'Devoluciones', 'devoluciones')}</ul>
      ${sec('Legal y políticas')}<ul class="vx-list" role="list">${doc('doc', 'Términos y condiciones', 'terminos')}${doc('lock', 'Política de privacidad', 'privacidad')}${doc('doc', 'Aviso legal', 'aviso')}</ul>
      ${sec('VexBiz')}<ul class="vx-list" role="list">${doc('store', 'Quiénes somos', 'quienes')}${doc('tag', 'Vender en VexBiz', 'vender')}${doc('wrench', 'Trabaja como técnico', 'tecnico')}${doc('gift', 'Franquicias', 'franquicias')}</ul>
      ${sec('Más')}<ul class="vx-list" role="list">${row({ ic: 'chat', title: 'Contacto', go: 'M6.26' })}${row({ ic: 'eye', title: 'Preferencias de accesibilidad', go: 'M6.23' })}${row({ ic: 'inbox', title: 'Boletín', go: 'M1.10' })}</ul>
      <section class="vx-pad-h vx-stack vx-pad-v"><h2 class="md-title-medium">¿Tienes dudas con un pedido?</h2>${btn('Ir a mis pedidos', { kind: 'filled', block: true, go: 'M6.03', kindNav: 'swap' })}${whatsappBtn('Escríbenos por WhatsApp', 'data-toast="Abre el WhatsApp de VexBiz: lunes a sábado, 8:00 a 19:00"')}</section></div>`);
  },
});

// ── M6.25 · Documento ───────────────────────────────────────────────────────
const DOCS = { terminos: 'Términos y condiciones', privacidad: 'Política de privacidad', aviso: 'Aviso legal', comprar: 'Cómo comprar', envios: 'Envíos', devoluciones: 'Devoluciones', quienes: 'Quiénes somos', vender: 'Vender en VexBiz', franquicias: 'Franquicias', garantia: 'Condiciones de la garantía', tecnico: 'Trabaja como técnico' };
register('M6.25', {
  render(ctx) {
    const k = ctx.params.doc in DOCS ? ctx.params.doc : 'tecnico', t = DOCS[k];
    const body = k === 'tecnico'
      ? `<section><h2 class="md-title-medium">Qué ganas</h2><p class="md-body-large">Solicitudes de clientes de tu zona, con el precio que tú pones y pagos protegidos por VexBiz.</p></section>
         <section><h2 class="md-title-medium">Qué te pedimos</h2><p class="md-body-large">Tu cédula, tus oficios, la zona donde trabajas y los documentos que pida tu país.</p></section>
         <section><h2 class="md-title-medium">Cuánto tarda</h2><p class="md-body-large">Revisamos tu perfil en hasta 72 horas hábiles. Mientras tanto ya puedes comprar repuestos.</p></section>
         <h2 class="md-title-medium">¿No encontraste lo que buscabas?</h2>
         <div class="vx-stack">${btn('Crear mi cuenta', { kind: 'filled', block: true, go: 'M1.05' })}${btn('Escribirnos', { kind: 'tonal', block: true, go: 'M6.26' })}${btn('Contacto', { kind: 'text', block: true, go: 'M6.26' })}</div>`
      : `${banner('info', 'Esta es una vista resumida. El texto completo está en el sitio de VexBiz.')}<div class="vx-stack">${btn('Abrir el sitio de VexBiz', { kind: 'filled', block: true, attrs: SITIO })}${btn('Contacto', { kind: 'text', block: true, go: 'M6.26' })}</div>`;
    return h(`<div>${topbar(t)}<div class="vx-pad-h vx-stack"><p class="md-body-medium vx-muted">Versión 1.0 · actualizado el 15/08/2026</p>${body}</div></div>`);
  },
});

// ── M6.26 · Contacto ────────────────────────────────────────────────────────
register('M6.26', {
  render() {
    const red = (ic, t, d) => row({ ic, title: t, sup: d, attrs: SITIO, end: icon('globe', 20) });
    return h(`<div>${topbar('Contacto')}<div class="vx-pad-h vx-stack"><p class="md-body-medium vx-muted">Lunes a sábado, 8:00 a 19:00</p>${whatsappBtn('Escríbenos por WhatsApp', 'data-toast="Abre el WhatsApp de VexBiz: lunes a sábado, 8:00 a 19:00"')}</div>
      ${sec('Redes sociales')}<ul class="vx-list" role="list">${red('globe', 'Instagram', '@vexbiz.ve')}${red('globe', 'Facebook', 'VexBiz Venezuela')}${red('globe', 'YouTube', 'VexBiz')}</ul>
      <section class="vx-pad-h vx-stack vx-pad-v"><h2 class="md-title-medium">¿Es por un pedido?</h2><p class="md-body-large">Desde el pedido puedes calificar, devolver o abrir un reclamo.</p>
        ${btn('Ir a mis pedidos', { kind: 'filled', block: true, go: 'M6.03', kindNav: 'swap' })}${btn('Ver ayuda e información', { kind: 'text', block: true, go: 'M6.24' })}</section></div>`);
  },
});
