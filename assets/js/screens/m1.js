// M1 · Acceso. En la Fase 0 solo existe el Arranque (M1.01); el resto llega en la Fase 1.
import { register } from './registry.js';
import { h } from '../ui.js';
import { openOverlay } from '../router.js';
import { reduce } from '../motion.js';

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
