// Arranque: tema, panel del prototipo (modo, tema, reducir movimiento, reinicio, Índice) y router.
import './screens/index.js';
import { start, go, goHome, currentCode } from './router.js';
import { INDEX, MODULES, MODE_NAME, META } from './screens/catalog.js';
import { defs } from './screens/registry.js';
import { state, set, subscribe, reset, loadPrefs, savePrefs } from './store.js';
import { $, $$ } from './ui.js';
import { esc } from './format.js';
import { wireAdd } from './market.js';
import { initPrefs, setReduce } from './prefs.js';

const root = document.documentElement;
const prefs = loadPrefs();

// ── Tema y reducir movimiento ───────────────────────────────────────────────
const setTheme = (t) => { root.setAttribute('data-theme', t); savePrefs({ theme: t }); paintSegs(); };

function seg(host, items, current, onPick) {
  host.innerHTML = items.map(([v, l]) => `<button type="button" class="md-seg-item md-sl md-label-large${v === current ? ' md-seg-item--on' : ''}" data-v="${v}" aria-pressed="${v === current}">${l}</button>`).join('');
  host.onclick = (e) => { const b = e.target.closest('[data-v]'); if (b) onPick(b.dataset.v); };
}
function paintSegs() {
  seg($('#segModo'), Object.entries(MODE_NAME).map(([k, v]) => [k, v === 'Empresa de servicio' ? 'Empresa' : v]), state.mode, (m) => { set({ mode: m }); goHome(m, 'mode'); });
  seg($('#segPago'), [['aprobado', 'Aprobado'], ['rechazado', 'Rechazado'], ['pendiente', 'Pendiente']], state.flow.demoPago, (v) => { state.flow.demoPago = v; set({ flow: state.flow }); });
  seg($('#segTema'), [['light', 'Claro'], ['dark', 'Oscuro']], root.getAttribute('data-theme'), setTheme);
}

// ── Índice: las 138 pantallas por módulo ────────────────────────────────────
function paintIndex() {
  const cur = currentCode();
  const built = (id) => defs.has(id);
  let done = 0;
  const html = MODULES.map((m) => {
    const rows = INDEX.filter((r) => r.mod === m.id);
    const n = rows.filter((r) => built(r.id)).length; done += n;
    return `<details${rows.some((r) => r.id === cur) || m.id === 'M0' ? ' open' : ''}><summary><span>${m.id === 'OV' ? 'Superposiciones' : m.id + ' · ' + m.name}</span><span class="panel-meta">${n}/${rows.length}</span></summary>
      <ul class="idx">${rows.map((r) => `<li><a href="#/${r.id}" data-idx="${r.id}"${r.id === cur ? ' aria-current="page"' : ''}>
        <span class="${built(r.id) ? 'ok' : ''}">${esc(r.label)} · ${esc(r.title)}</span><span class="tag">${built(r.id) ? 'hecha' : 'pendiente'}</span></a></li>`).join('')}</ul></details>`;
  }).join('');
  $('#index').innerHTML = html;
  $('#idxCount').textContent = `· ${INDEX.length} pantallas, ${done} hechas`;
}

// ── Escala del marco en pantallas bajas ─────────────────────────────────────
function fit() {
  const wide = innerWidth > 520;
  const s = wide ? Math.min(1, (innerHeight - 32) / 892) : 1;
  $('#fit').style.setProperty('--fit', s.toFixed(3));
}

// ── Inicio ──────────────────────────────────────────────────────────────────
if (prefs.theme) root.setAttribute('data-theme', prefs.theme);
initPrefs();
$('#swReduce').addEventListener('change', (e) => setReduce(e.target.checked));
$('#btnReset').addEventListener('click', () => { reset(); go('M1.01', { kind: 'none' }); });
$('#index').addEventListener('click', (e) => {
  const a = e.target.closest('[data-idx]');
  if (!a) return;
  e.preventDefault();
  go(a.dataset.idx, { kind: 'swap' });
});
subscribe(() => paintSegs());
window.addEventListener('hashchange', () => setTimeout(paintIndex, 400));
document.addEventListener('click', (e) => { if (e.target.closest('#phone,#index')) setTimeout(paintIndex, 450); });
addEventListener('resize', fit);
paintSegs(); paintIndex(); fit();
wireAdd();
start();
