// M5 · Academia: inicio, curso, mis cursos, lección, eventos, comunidad, foro, hilo, escribir pregunta y nivel.
import { register } from './registry.js';
import { h, icon, btn, iconBtn, topbar, stateBlock, toast, $, $$ } from '../ui.js';
import { stars, page, field, fieldError, area, statusTag, row, wireControls } from '../market.js';
import { go, closeOverlay, back } from '../router.js';
import { state, set, subscribe } from '../store.js';
import { stagger, play } from '../motion.js';
import { areas, cursosAcademia, materiales, eventos, forosAcademia, niveles } from '../data2.js';
import { num, esc, plural, date } from '../format.js';
import { HOY } from '../data.js';

const curso = (id) => cursosAcademia.find((c) => c.id === id) || cursosAcademia[1];
const horas = (min) => `${Math.floor(min / 60)} h${min % 60 ? ` ${min % 60} min` : ''}`;
const lecciones = (c) => (c.temario ? c.temario.flatMap((t, ti) => t.l.map(([n, m], i) => ({ n, m, modulo: t.n, ti, i }))) : []);
const avance = (id) => state.academia.avance[id] || { hechas: 0 };
const pctCurso = (c) => Math.round((avance(c.id).hechas / c.clases) * 100);
/** Nivel de la academia a partir de los puntos y los umbrales de M5.10. */
export function nivelDe(p) {
  let idx = 0; niveles.forEach(([, min], i) => { if (p >= min) idx = i; });
  const sig = niveles[idx + 1], min = niveles[idx][1];
  return { idx, nombre: niveles[idx][0], num: idx + 1, sig: sig?.[0], faltan: sig ? sig[1] - p : 0, pct: sig ? Math.round(((p - min) / (sig[1] - min)) * 100) : 100 };
}
const progress = (pct, label) => `<div class="md-progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${pct}" aria-label="${esc(label)}" style="--_pct:${pct}%"><span class="md-progress-track"></span><span class="md-progress-active"></span><span class="md-progress-stop"></span></div>`;
const precio = (c) => (c.precio ? `$ ${c.precio}` : 'Gratis');
const mmss = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
const meta = (c) => `${c.clases} clases · ${horas(c.min)} · <span class="vx-tab-num">${stars(c.rating)}</span>`;

// ── M5.01 · Academia ────────────────────────────────────────────────────────
register('M5.01', {
  render() {
    const el = h(`<div>${topbar('Academia', { back: false, trailing: iconBtn('bell', 'Avisos', 'data-go="M6.17"') })}
      <div class="vx-chipwrap vx-pad-h">${[['book', 'Mis cursos', 'M5.03'], ['calendar', 'Eventos', 'M5.05'], ['users', 'Comunidad', 'M5.06'], ['star', 'Mi nivel', 'M5.10']].map(([ic, t, to]) => `<span class="md-chip-wrap"><button type="button" class="md-chip md-chip--lead md-sl md-label-large" data-go="${to}">${icon(ic, 18)}${t}</button></span>`).join('')}</div>
      <div class="vx-chipwrap vx-pad-h" role="group" aria-label="Filtrar cursos">${[['todos', 'Todos'], ...areas.map(([a, n]) => [a, `${a} ${n}`]), ['gratis', 'Sólo gratis']].map(([k, t]) => `<span class="md-chip-wrap"><button type="button" class="md-chip md-sl md-label-large${k === 'todos' ? ' md-chip--selected' : ''}" data-f="${k}" aria-pressed="${k === 'todos'}">${t}</button></span>`).join('')}</div>
      <ul class="vx-courses vx-pad-h" role="list" id="cList" data-stagger></ul><p class="md-body-medium vx-muted vx-pad-h vx-center-t">Estos son todos los cursos.</p></div>`);
    let area = 'todos', gratis = false;
    const paint = () => { const l = cursosAcademia.filter((c) => (area === 'todos' || c.area === area) && (!gratis || !c.precio));
      el.querySelector('#cList').innerHTML = l.map((c, i) => `<li class="vx-course" style="--i:${i}"><button type="button" class="vx-course-main md-sl vx-press" data-go="M5.02?id=${c.id}"><span class="vx-pimg vx-course-img" aria-hidden="true">${icon('video', 32)}</span>
        <span class="vx-course-body"><span class="md-label-medium vx-muted">${c.area} · ${c.nivel}</span><span class="md-title-small">${esc(c.titulo)}</span><span class="md-body-medium">${esc(c.texto)}</span>
        <span class="md-body-medium vx-muted">${meta(c)}</span><b class="md-title-small vx-tab-num">${precio(c)}</b></span></button></li>`).join('') || `<li>${stateBlock({ icon: 'book', title: 'No hay cursos con ese filtro' })}</li>`; };
    el.addEventListener('click', (e) => { const c = e.target.closest('[data-f]'); if (!c) return; const k = c.dataset.f;
      if (k === 'gratis') gratis = !gratis; else area = k;
      $$('[data-f]', el).forEach((b) => { const on = b.dataset.f === 'gratis' ? gratis : b.dataset.f === area; b.classList.toggle('md-chip--selected', on); b.setAttribute('aria-pressed', on); }); paint(); });
    paint(); return el;
  },
  mount(el, ctx) { if (ctx.first) $$('[data-stagger]', el).forEach(stagger); },
});

// ── M5.02 · Curso ───────────────────────────────────────────────────────────
register('M5.02', {
  render(ctx) {
    const c = curso(ctx.params.id), ls = lecciones(c), hechas = avance(c.id).hechas, ins = state.academia.inscritos.includes(c.id);
    const min = c.temario ? ls.reduce((s, l) => s + l.m, 0) : c.min, clases = c.temario ? ls.length : c.clases;
    const stat = (n, l) => `<div class="vx-stat vx-stat--c"><b class="md-title-medium vx-tab-num">${n}</b><span class="md-body-small vx-muted">${l}</span></div>`;
    let g = 0;
    const temario = c.temario ? c.temario.map((t, ti) => `<section class="vx-module"><h3 class="md-title-small">${ti + 1} · ${esc(t.n)}</h3><ul class="vx-list" role="list">${t.l.map(([n, m]) => { const i = g++, libre = i < (c.gratis || 0), hecho = i < hechas;
      return `<li><button type="button" class="md-li md-li--2 md-sl vx-press vx-row" data-les="${i}"><span class="md-li-icon">${icon(hecho ? 'check' : ins || libre ? 'play' : 'lock')}</span>
        <span class="md-li-text"><span class="md-li-title md-body-large">${esc(n)}</span><span class="md-li-sup md-body-medium vx-tab-num">${libre && !ins ? 'Muestra gratis · ' : hecho ? 'Completada · ' : ''}${m} min</span></span></button></li>`; }).join('')}</ul></section>`).join('')
      : stateBlock({ icon: 'clock', title: 'El temario llega pronto', text: 'Todavía no está publicado en la demo.' });
    const el = h(page(topbar('Curso', { trailing: iconBtn('share', 'Compartir', 'data-toast="Enlace copiado"') }), `
      <section class="vx-pad-h"><p class="md-label-medium vx-muted">${c.area} · ${c.nivel}</p><h2 class="md-headline-small vx-h1c">${esc(c.titulo)}</h2><p class="md-body-large">${esc(c.resumen || c.texto)}</p></section>
      <div class="vx-stats3 vx-pad-h">${stat(clases, 'clases')}${stat(min, 'min de vídeo')}${stat(c.inscritos ?? '—', 'inscritos')}${stat(num(c.rating, 1), '★')}</div>
      ${c.imparte ? `<p class="md-body-medium vx-pad-h">Imparte: <b>${esc(c.imparte)}</b></p>` : ''}
      ${c.sobre ? `<section class="vx-pad-h"><h2 class="md-title-medium">Sobre este curso</h2><p class="md-body-large">${esc(c.sobre)}</p>${c.gratis ? `<p>${statusTag('success', `${plural(c.gratis, 'clase', 'clases')} de muestra gratis`)}</p>` : ''}</section>` : ''}
      <section class="vx-pad-h"><h2 class="md-title-medium">Temario</h2>${temario}</section>`,
      `<div class="vx-actionsum"><span class="md-body-small vx-muted">${plural(clases, 'clase', 'clases')}</span><span class="md-title-large vx-tab-num">${precio(c)}</span></div>${btn(ins ? 'Seguir el curso' : c.precio ? `Inscribirme por ${precio(c)}` : 'Inscribirme gratis', { kind: 'filled', id: 'cGo' })}`));
    el.querySelector('#cGo').addEventListener('click', () => {
      if (!state.academia.inscritos.includes(c.id)) { state.academia.inscritos.push(c.id); state.academia.avance[c.id] = { hechas: 0, sigue: ls[0]?.n || '' }; set({ academia: state.academia }); toast(`Te inscribiste en «${c.titulo}»`); }
      go(c.temario ? `M5.04` : 'M5.03', { kind: 'push', params: c.temario ? { c: c.id, l: String(Math.min(avance(c.id).hechas, ls.length - 1)) } : {} });
    });
    el.addEventListener('click', (e) => { const b = e.target.closest('[data-les]'); if (!b) return; const i = Number(b.dataset.les), libre = i < (c.gratis || 0);
      if (state.academia.inscritos.includes(c.id) || libre) go('M5.04', { kind: 'push', params: { c: c.id, l: String(i) } }); else toast('Inscríbete para ver esta clase'); });
    return el;
  },
});

// ── M5.03 · Mis cursos ──────────────────────────────────────────────────────
register('M5.03', {
  render() {
    const ins = state.academia.inscritos.map(curso), enCurso = ins.filter((c) => !avance(c.id).completado && avance(c.id).hechas > 0), listos = ins.filter((c) => avance(c.id).completado);
    const lista = (c) => `<li class="vx-course"><button type="button" class="vx-course-main md-sl vx-press" data-go="${c.temario ? `M5.04?c=${c.id}&l=${Math.min(avance(c.id).hechas, lecciones(c).length - 1)}` : `M5.02?id=${c.id}`}">
      <span class="vx-pimg vx-course-img vx-course-img--s" aria-hidden="true">${icon('video', 24)}</span><span class="vx-course-body"><span class="md-title-small">${esc(c.titulo)}</span>
      ${avance(c.id).completado ? `<span>${statusTag('success', 'Completado')}</span>` : `<span class="md-body-medium vx-muted vx-tab-num">${avance(c.id).hechas} de ${plural(c.clases, 'lección', 'lecciones')} · ${pctCurso(c)}%</span>${progress(pctCurso(c), `Avance de ${c.titulo}`)}<span class="md-body-small vx-muted">Sigue en: ${esc(avance(c.id).sigue || '')}</span>`}</span></button></li>`;
    const sigue = enCurso[0];
    return h(`<div>${topbar('Mis cursos', { back: false })}
      ${sigue ? `<section class="vx-pad-h"><h2 class="md-label-large vx-muted">Sigue donde lo dejaste</h2><div class="vx-card vx-resume"><p class="md-title-small">${esc(sigue.titulo)}</p><p class="md-title-medium vx-tab-num">${pctCurso(sigue)}%</p>${progress(pctCurso(sigue), `Avance de ${sigue.titulo}`)}
        <p class="md-body-medium vx-muted">Sigue en: ${esc(avance(sigue.id).sigue || '')}</p>${btn('Continuar', { kind: 'filled', block: true, go: `M5.04?c=${sigue.id}&l=${Math.min(avance(sigue.id).hechas, lecciones(sigue).length - 1)}` })}</div></section>` : ''}
      ${enCurso.length ? `<h2 class="md-label-large vx-sub vx-sub--list">En curso</h2><ul class="vx-courses vx-pad-h" role="list">${enCurso.map(lista).join('')}</ul>` : ''}
      ${listos.length ? `<h2 class="md-label-large vx-sub vx-sub--list">Completados</h2><ul class="vx-courses vx-pad-h" role="list">${listos.map(lista).join('')}</ul>` : ''}
      ${ins.length ? '' : stateBlock({ icon: 'book', title: 'Todavía no sigues ningún curso' })}
      <ul class="vx-list" role="list">${row({ ic: 'calendar', title: 'Eventos', go: 'M5.05' })}${row({ ic: 'users', title: 'Comunidad', go: 'M5.06' })}${row({ ic: 'star', title: 'Mi nivel y mis puntos', go: 'M5.10' })}</ul>
      <div class="vx-pad-h vx-pad-v">${btn('Ver la academia', { kind: 'tonal', block: true, go: 'M5.01' })}</div></div>`);
  },
});

// ── M5.04 · Lección ─────────────────────────────────────────────────────────
register('M5.04', {
  render(ctx) {
    const c = curso(ctx.params.c || 'inv'), ls = lecciones(c), i = Math.max(0, Math.min(ls.length - 1, Number(ctx.params.l ?? avance(c.id).hechas ?? 0)));
    const l = ls[i], hechas = avance(c.id).hechas, ins = state.academia.inscritos.includes(c.id), libre = i < (c.gratis || 0);
    if (!l || (!ins && !libre)) return h(`<div>${topbar(c.titulo)}${stateBlock({ icon: 'lock', title: 'Inscríbete para ver esta clase', action: btn('Ver el curso', { kind: 'filled', go: `M5.02?id=${c.id}` }) })}</div>`);
    const corto = c.id === 'inv' ? 'Diagnóstico inverter' : c.titulo, dur = l.m * 60, ini = l.n === 'Probar el IPM' && i >= hechas ? 9 * 60 : 0, hecho = i < hechas;
    const el = h(page(topbar(corto), `
      <section class="vx-pad-h"><p class="md-label-medium vx-muted">${esc(l.modulo)}</p><h2 class="md-headline-small vx-h1c">${esc(l.n)}</h2><p class="md-body-medium vx-muted vx-tab-num">${l.m} min</p></section>
      <div class="vx-player"><div class="vx-video" aria-hidden="true">${icon('video', 56)}</div>
        <div class="vx-pbar"><button type="button" class="md-iconbtn md-iconbtn--filled md-sl" id="pPlay" aria-label="Reproducir">${icon('play')}</button>
          <input type="range" class="vx-range vx-seek" id="pSeek" min="0" max="${dur}" step="1" value="${ini}" aria-label="Posición del vídeo"><span class="md-body-medium vx-tab-num" id="pTime"></span></div></div>
      ${ini ? '<p class="md-body-medium vx-pad-h">Retomamos donde lo dejaste, en el minuto 9</p>' : ''}
      <section class="vx-pad-h"><h2 class="md-title-medium">Materiales</h2><ul class="vx-orders vx-nopad" role="list">${materiales.map((m, k) => `<li class="vx-order"><div class="vx-order-main vx-static"><span class="md-li-icon">${icon('doc')}</span><span class="vx-order-text"><span class="md-body-large">${esc(m)}</span><span class="md-body-small vx-muted" id="matSt${k}"></span></span></div>
        <div class="vx-order-act">${btn('', { kind: 'outlined', id: `mat${k}` })}</div></li>`).join('')}</ul><p class="md-body-medium vx-muted">Los materiales se pueden guardar para leerlos sin conexión.</p></section>
      <div class="vx-pad-h vx-twin">${i > 0 ? btn('Lección anterior', { kind: 'text', id: 'lPrev' }) : '<span></span>'}${i < ls.length - 1 ? btn('Lección siguiente', { kind: 'text', id: 'lNext' }) : '<span></span>'}</div>`,
      `<div class="vx-actionsum"><span class="md-body-small vx-muted">Suma puntos a tu nivel</span><span class="md-title-small vx-tab-num">+10 puntos</span></div>${btn(hecho ? 'Completada' : 'Marcar como completada', { kind: 'filled', id: 'lDone', attrs: hecho ? 'disabled' : '' })}`));
    const seek = el.querySelector('#pSeek'), t = el.querySelector('#pTime'), play = el.querySelector('#pPlay');
    const paintT = () => { t.textContent = `${mmss(Number(seek.value))} / ${mmss(dur)}`; seek.setAttribute('aria-valuetext', t.textContent); };
    const matKey = (k) => `${c.id}:${k}`;
    const paintMat = () => materiales.forEach((m, k) => { const on = !!state.academia.offline[matKey(k)]; el.querySelector(`#mat${k}`).innerHTML = on ? `${icon('check', 18)}Guardado en el teléfono` : `${icon('download', 18)}Guardar para leer sin conexión`; el.querySelector(`#matSt${k}`).textContent = on ? 'Disponible sin conexión' : ''; });
    seek.addEventListener('input', paintT);
    let timer = null;
    const stop = () => { clearInterval(timer); timer = null; play.innerHTML = icon('play'); play.setAttribute('aria-label', 'Reproducir'); };
    play.addEventListener('click', () => { if (timer) { stop(); return; } play.innerHTML = icon('pause'); play.setAttribute('aria-label', 'Pausar');
      timer = setInterval(() => { seek.value = Number(seek.value) + 1; paintT(); if (Number(seek.value) >= dur) { stop(); if (!hecho) toast('Terminaste la clase: márcala como completada'); } }, 1000); });
    el.addEventListener('click', (e) => { const b = e.target.closest('[id^=mat]'); if (!b || !/^mat\d$/.test(b.id)) return; const k = Number(b.id.slice(3)); state.academia.offline[matKey(k)] = !state.academia.offline[matKey(k)]; paintMat();
      toast(state.academia.offline[matKey(k)] ? 'Guardado en el teléfono' : 'Quitaste el material del teléfono'); });
    const nav = (n) => go('M5.04', { kind: 'smart', params: { c: c.id, l: String(n) } });
    el.querySelector('#lPrev')?.addEventListener('click', () => nav(i - 1)); el.querySelector('#lNext')?.addEventListener('click', () => nav(i + 1));
    el.querySelector('#lDone').addEventListener('click', (e) => {
      const a = state.academia, av = a.avance[c.id] || (a.avance[c.id] = { hechas: 0 }); av.hechas = Math.max(av.hechas, i + 1);
      av.sigue = ls[i + 1]?.n || ''; if (av.hechas >= c.clases) av.completado = true;
      a.puntos += 10; a.historial.unshift({ t: 'Lección completada', fecha: date(HOY).slice(0, 5), p: 10 }); set({ academia: a });
      e.currentTarget.disabled = true; e.currentTarget.textContent = 'Completada'; toast('+10 puntos para tu nivel'); });
    paintT(); paintMat(); el.__stop = stop; return el;
  },
  mount(el) { return () => el.__stop && el.__stop(); },
});

// ── M5.05 · Eventos ─────────────────────────────────────────────────────────
register('M5.05', {
  render() {
    const el = h(`<div>${topbar('Eventos')}
      <section class="vx-pad-h"><p class="md-label-large vx-live-tag"><span class="vx-live-dot vx-live" aria-hidden="true"></span> EN VIVO AHORA</p><div class="vx-card vx-livecard"><p class="md-title-small">${esc(eventos.vivo.titulo)}</p><p class="md-body-medium vx-muted">${esc(eventos.vivo.por)}</p>
        ${btn(`${icon('video', 20)}Unirme ahora`, { kind: 'filled', block: true, attrs: 'data-toast="Abre la transmisión en vivo"' })}</div></section>
      <h2 class="md-label-large vx-sub vx-sub--list">Próximos</h2><ul class="vx-orders vx-pad-h" role="list" id="evList"></ul>
      <h2 class="md-label-large vx-sub vx-sub--list">Ya pasaron</h2><ul class="vx-list" role="list">${eventos.pasados.map((p) => row({ ic: 'video', title: esc(p.titulo), end: `<span class="md-body-small vx-tab-num">${p.fecha}</span>`, attrs: 'data-toast="Abre el resumen del evento"' })).join('')}</ul></div>`);
    const paint = () => { el.querySelector('#evList').innerHTML = eventos.proximos.map((ev) => { const ap = state.academia.eventos[ev.id], quedan = ev.cupo - ev.inscritos - (ap ? 1 : 0), llenos = quedan <= 0 && !ap;
      return `<li class="vx-order"><div class="vx-order-main vx-static"><span class="vx-order-text"><span class="md-title-small">${esc(ev.titulo)}</span><span class="md-body-medium vx-tab-num">${ev.cuando} · ${ev.hora} (hora de tu teléfono) · ${ev.dur}</span>
        <span class="md-body-medium vx-muted">${esc(ev.por)} · ${esc(ev.donde)}</span><span class="md-body-medium vx-tab-num">Quedan ${quedan} de ${ev.cupo} plazas</span>${ap ? `<span>${statusTag('success', 'Apuntado')}</span>` : ''}</span></div>
        <div class="vx-order-act">${ap ? btn('Cancelar mi lugar', { kind: 'text', attrs: `data-ev="${ev.id}"` }) : btn(llenos ? 'Sin plazas' : 'Apuntarme', { kind: 'tonal', attrs: `data-ev="${ev.id}"${llenos ? ' disabled' : ''}` })}</div></li>`; }).join(''); };
    el.addEventListener('click', (e) => { const b = e.target.closest('[data-ev]'); if (!b) return; const id = b.dataset.ev; state.academia.eventos[id] = !state.academia.eventos[id]; set({ academia: state.academia }); paint();
      toast(state.academia.eventos[id] ? 'Te apuntaste. Te avisamos antes de que empiece.' : 'Cancelaste tu lugar'); });
    paint(); return el;
  },
});

// ── M5.06 · Comunidad: foros ────────────────────────────────────────────────
register('M5.06', {
  render() {
    const el = h(`<div>${topbar('Comunidad técnica')}<div class="vx-pad">${field({ id: 'fq', label: 'Busca una avería en todos los foros', type: 'search', autocomplete: 'off' })}</div>
      <div id="fqRes" class="vx-pad-h" aria-live="polite" hidden></div>
      <ul class="vx-list" role="list" id="foroList">${forosAcademia.map((f) => row({ ic: 'users', title: esc(f.nombre), sup: `${f.area} · ${f.n} preguntas`, go: `M5.07?id=${f.id}` })).join('')}</ul>
      <p class="md-body-medium vx-muted vx-pad-h">Puedes leer todo. Preguntar y responder es para técnicos.</p><div class="vx-pad-h">${btn('Trabaja como técnico', { kind: 'filled', block: true, go: 'M6.25?doc=tecnico' })}</div></div>`);
    el.querySelector('#fq').addEventListener('input', (e) => { const q = e.target.value.trim().toLowerCase(), box = el.querySelector('#fqRes'), lista = el.querySelector('#foroList');
      if (!q) { box.hidden = true; lista.hidden = false; return; }
      const r = state.preguntas.filter((p) => p.t.toLowerCase().includes(q) || p.cuerpo.toLowerCase().includes(q));
      box.hidden = false; lista.hidden = true;
      box.innerHTML = r.length ? `<ul class="vx-list" role="list">${r.map((p) => row({ ic: 'chat', title: esc(p.t), sup: `${forosAcademia.find((f) => f.id === p.foro).nombre} · ${p.cuando}`, go: `M5.08?id=${p.id}` })).join('')}</ul>` : stateBlock({ icon: 'searchoff', title: 'No encontramos esa avería', text: 'Prueba con el código de error o el síntoma.' }); });
    return el;
  },
});

// ── M5.07 · Foro: preguntas ─────────────────────────────────────────────────
register('M5.07', {
  render(ctx) {
    const f = forosAcademia.find((x) => x.id === ctx.params.id) || forosAcademia[0];
    const el = h(page(topbar(f.nombre), `
      <p class="md-body-medium vx-muted vx-pad-h">${f.area} · ${f.n} preguntas</p><div class="vx-pad-h">${field({ id: 'foroQ', label: 'Buscar en este foro', type: 'search', autocomplete: 'off' })}</div>
      <div class="vx-pad-h"><div class="md-seg" role="tablist" aria-label="Filtrar preguntas">${[['todas', 'Todas'], ['sin', 'Sin responder'], ['resuelta', 'Resueltas']].map(([k, t], i) => `<button type="button" role="tab" class="md-seg-item md-sl md-label-large${i === 0 ? ' md-seg-item--on' : ''}" data-seg="${k}" aria-selected="${i === 0}">${t}</button>`).join('')}</div></div>
      <ul class="vx-orders vx-pad-h" role="list" id="qList"></ul>`,
      btn(`${icon('add', 20)}Preguntar`, { kind: 'filled', block: true, go: `M5.09?foro=${f.id}` })));
    let seg = 'todas', q = '';
    const paint = () => { const l = state.preguntas.filter((p) => p.foro === f.id && (seg === 'todas' || (seg === 'sin' ? p.estado === 'sin' : p.estado === 'resuelta')) && p.t.toLowerCase().includes(q));
      el.querySelector('#qList').innerHTML = l.map((p) => { const n = p.respuestas.length || p.nResp || 0;
        return `<li class="vx-order"><button type="button" class="vx-order-main md-sl vx-press" data-go="M5.08?id=${p.id}"><span class="vx-order-text"><span>${p.estado === 'resuelta' ? statusTag('success', 'Resuelta') : p.estado === 'sin' ? statusTag('neutral', 'Sin respuesta') : statusTag('info', plural(n, 'respuesta', 'respuestas'))}</span>
          <span class="md-title-small">${esc(p.t)}</span><span class="md-body-medium vx-muted">${esc(p.autor)}${p.insignia ? ` · ${p.insignia}` : ''} · ${p.cuando}</span>${p.fotos ? `<span class="md-body-small vx-muted">${icon('camera', 14)} ${plural(p.fotos, 'foto', 'fotos')}</span>` : ''}</span></button></li>`; }).join('') || `<li>${stateBlock({ icon: 'chat', title: 'No hay preguntas con ese filtro' })}</li>`; };
    el.addEventListener('click', (e) => { const b = e.target.closest('[data-seg]'); if (!b) return; seg = b.dataset.seg; $$('[data-seg]', el).forEach((x) => { const on = x === b; x.classList.toggle('md-seg-item--on', on); x.setAttribute('aria-selected', on); }); paint(); });
    el.querySelector('#foroQ').addEventListener('input', (e) => { q = e.target.value.trim().toLowerCase(); paint(); });
    paint(); el.__un = subscribe(paint); return el;
  },
  mount(el) { return el.__un; },
});

// ── M5.08 · Hilo de una pregunta ────────────────────────────────────────────
register('M5.08', {
  render(ctx) {
    const p = state.preguntas.find((x) => x.id === ctx.params.id) || state.preguntas[0];
    const el = h(page(topbar('Pregunta', { trailing: `${iconBtn('bookmark', 'Guardar pregunta', 'data-toast="Guardaste la pregunta"')}${iconBtn('share', 'Compartir', 'data-toast="Enlace copiado"')}` }), `
      <section class="vx-pad-h"><p id="rEstado"></p>
        <h2 class="md-headline-small vx-h1c">${esc(p.t)}</h2><p class="md-body-medium vx-muted">${esc(p.autor)}${p.insignia ? ` · ${p.insignia}` : ''} · ${p.cuando}</p><p class="md-body-large">${esc(p.cuerpo)}</p></section>
      <h2 class="md-title-medium vx-pad-h" id="rTit"></h2><ul class="vx-thread vx-answers vx-pad-h" role="list" id="rList"></ul>
      <div class="vx-pad-h" id="rComp" hidden>${area({ id: 'rTexto', label: 'Tu respuesta', rows: 4 })}<div class="vx-row-end">${btn('Publicar respuesta', { kind: 'filled', id: 'rPub' })}</div></div>`,
      btn('Escribir una respuesta', { kind: 'filled', block: true, id: 'rAbrir' })));
    const paint = () => { const l = [...p.respuestas].sort((a, b) => (b.resolvio ? 1 : 0) - (a.resolvio ? 1 : 0));
      el.querySelector('#rEstado').innerHTML = p.estado === 'resuelta' ? statusTag('success', 'Resuelta') : p.estado === 'sin' ? statusTag('neutral', 'Sin respuesta') : statusTag('info', 'Con respuestas');
      el.querySelector('#rTit').textContent = p.respuestas.length ? plural(p.respuestas.length, 'respuesta', 'respuestas') : 'Todavía sin respuestas';
      el.querySelector('#rList').innerHTML = l.map((r) => `<li class="vx-ans">${r.resolvio ? `<p>${statusTag('success', 'Le resolvió a quien preguntó')}</p>` : ''}<p class="md-body-large">${esc(r.t)}</p>
        <p class="md-body-medium vx-muted">${esc(r.autor)}${r.insignia ? ` · ${r.insignia}` : ''}</p>${btn(`${icon('thumb', 18)}Útil · <span class="vx-tab-num">${r.utiles || 0}</span>`, { kind: 'text', attrs: `data-util="${r.id}" aria-pressed="${!!r.miUtil}"` })}</li>`).join(''); };
    el.addEventListener('click', (e) => { const u = e.target.closest('[data-util]'); if (!u) return; const r = p.respuestas.find((x) => x.id === u.dataset.util); r.miUtil = !r.miUtil; r.utiles = (r.utiles || 0) + (r.miUtil ? 1 : -1); paint(); });
    el.querySelector('#rAbrir').addEventListener('click', () => { const c = el.querySelector('#rComp'); c.hidden = false; el.querySelector('#rTexto').focus(); });
    el.querySelector('#rPub').addEventListener('click', () => { const t = el.querySelector('#rTexto').value.trim(); fieldError(el, 'rTexto', !t ? 'Escribe tu respuesta' : ''); if (!t) return;
      p.respuestas.push({ id: 'r' + Date.now(), autor: 'Aníbal Lejarazu', t, utiles: 0 }); if (p.estado === 'sin') p.estado = 'respuestas'; el.querySelector('#rTexto').value = ''; el.querySelector('#rComp').hidden = true; paint(); toast('Publicaste tu respuesta'); });
    paint(); return el;
  },
});

// ── M5.09 · Escribir pregunta (pantalla de flujo) ───────────────────────────
register('M5.09', {
  render(ctx) {
    const f = forosAcademia.find((x) => x.id === ctx.params.foro) || forosAcademia[0], a = state.academia;
    let fotos = 0;
    const el = h(`<div class="vx-page"><header class="vx-sheet-head vx-flowhead"><h2 id="sheet-title" class="md-title-large md-sheet-title" tabindex="-1">Nueva pregunta</h2>${iconBtn('close', 'Cerrar', 'data-close')}</header>
      <div class="vx-body vx-pad-h"><p class="md-body-large">En ${esc(f.nombre)}</p><p class="md-body-medium vx-tab-num" id="qLeft" role="status"></p><p class="md-body-medium vx-muted">Todavía no puedes poner enlaces. Este límite se quita el 23/10.</p>
        <form class="vx-form" novalidate onsubmit="return false">${field({ id: 'qTitulo', label: 'Título de tu pregunta' })}${area({ id: 'qDetalle', label: 'Cuéntanos qué pasa', rows: 5 })}</form>
        ${btn(`${icon('camera', 20)}Añadir foto`, { kind: 'outlined', id: 'qFoto' })}</div>
      <footer class="vx-actionbar">${btn('Publicar pregunta', { kind: 'filled', block: true, id: 'qPub' })}</footer></div>`);
    const left = () => { el.querySelector('#qLeft').textContent = a.preguntasHoy > 0 ? `Te quedan ${plural(a.preguntasHoy, 'pregunta', 'preguntas')} hoy.` : 'Ya hiciste tus preguntas de hoy. Vuelve mañana.'; el.querySelector('#qPub').disabled = a.preguntasHoy <= 0; };
    el.querySelector('#qFoto').addEventListener('click', (e) => { fotos = Math.min(3, fotos + 1); e.currentTarget.innerHTML = `${icon('camera', 20)}Añadir foto · ${plural(fotos, 'foto', 'fotos')}`; });
    el.querySelector('#qPub').addEventListener('click', async () => {
      const t = el.querySelector('#qTitulo').value.trim(), d = el.querySelector('#qDetalle').value.trim(), link = /(https?:\/\/|www\.)/i;
      fieldError(el, 'qTitulo', !t ? 'Escribe el título' : link.test(t) ? 'Todavía no puedes poner enlaces' : ''); fieldError(el, 'qDetalle', !d ? 'Cuéntanos qué pasa' : link.test(d) ? 'Todavía no puedes poner enlaces' : '');
      if (!t || !d || link.test(t) || link.test(d)) return;
      state.preguntas.unshift({ id: 'q' + Date.now(), foro: f.id, t, estado: 'sin', autor: 'Aníbal Lejarazu', cuando: 'ahora', fotos, cuerpo: d, respuestas: [] });
      a.preguntasHoy -= 1; set({ preguntas: state.preguntas, academia: a }); toast('Publicaste tu pregunta'); await closeOverlay(); });
    left(); return el;
  },
});

// ── M5.10 · Mi nivel y mis puntos ───────────────────────────────────────────
register('M5.10', {
  render() {
    const a = state.academia, n = nivelDe(a.puntos), sg = (v) => (v < 0 ? '−' : '+') + Math.abs(v);
    return h(`<div>${topbar('Mi nivel')}<section class="vx-pad-h vx-levelbox"><p class="md-label-medium vx-muted">Nivel ${n.num} de 8</p><h2 class="md-headline-small vx-h1c">${n.nombre}</h2>
        <p class="md-title-large vx-tab-num">${num(a.puntos, 0)} puntos</p>${progress(n.pct, `Avance hacia ${n.sig}`)}<p class="md-body-medium vx-tab-num">${n.pct}%${n.sig ? ` · Te faltan ${num(n.faltan, 0)} para ${n.sig}` : ''}</p></section>
      <h2 class="md-label-large vx-sub vx-sub--list">Cómo sumar puntos</h2><ul class="vx-list" role="list">${row({ ic: 'book', title: 'Seguir un curso', go: 'M5.03' })}${row({ ic: 'chat', title: 'Responder en la comunidad', go: 'M5.06' })}${row({ ic: 'calendar', title: 'Ir a un evento', go: 'M5.05' })}</ul>
      <h2 class="md-label-large vx-sub vx-sub--list">De dónde salieron</h2><ul class="vx-list" role="list">${a.historial.map((x) => `<li class="md-li md-li--2"><span class="md-li-text"><span class="md-li-title md-body-large">${esc(x.t)}</span><span class="md-li-sup md-body-medium vx-tab-num">${x.fecha}</span></span>
        <span class="md-li-end"><b class="md-title-small vx-tab-num ${x.p < 0 ? 'vx-neg' : ''}">${sg(x.p)}</b></span></li>`).join('')}</ul>
      <h2 class="md-label-large vx-sub vx-sub--list">Los niveles</h2><ul class="vx-list" role="list">${niveles.map(([nm, p], i) => `<li class="md-li md-li--2${i === n.idx ? ' vx-here' : ''}"><span class="md-li-text"><span class="md-li-title md-body-large">${nm}</span>${i === n.idx ? `<span class="md-li-sup md-body-medium">${statusTag('info', 'estás aquí')}</span>` : ''}</span><span class="md-li-end md-body-medium vx-tab-num">${num(p, 0)} pts</span></li>`).join('')}</ul></div>`);
  },
});
