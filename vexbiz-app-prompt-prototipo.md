# Prompt · Prototipo de la app de marketplace de VEXBIZ (para Claude Code)

Versión 1.0 · 11/11/2026

## Cómo usarlo

1. Crea la carpeta de trabajo (propuesta: `VEXBIZ APP/prototipo/`) y copia ahí estos cuatro archivos: `vexbiz-app-contexto.md`, `vexbiz-app-pantallas-detalle.md`, `vexbiz-prototipo-base.zip` (descomprímelo en `prototipo/`) y este prompt.
2. Si tienes el conector de Figma de Claude Code activo (Dev Mode MCP), pega el enlace del archivo `WEB FLOW` en la variable `{{ENLACE_FIGMA}}` de abajo. Sirve para comparar visualmente cada pantalla. Si no, el prompt funciona igual con el anexo de pantallas.
3. Abre Claude Code dentro de la carpeta `prototipo/`, copia todo lo que está entre `INICIO DEL PROMPT` y `FIN DEL PROMPT` y pégalo.
4. Claude Code trabaja por fases. Se detiene al final de la Fase 1 para que lo revises; después sigue solo hasta la Fase 6.

---

INICIO DEL PROMPT

<rol>
Eres un desarrollador front-end senior con ojo de diseñador. Vas a construir el prototipo navegable de la app móvil del marketplace de VEXBIZ a partir del archivo de Figma y de los documentos que están en esta carpeta. Trabajas en español de Venezuela (es-VE). Cuando dudes entre inventar y preguntar, anota la duda en el informe y avanza con la opción más conservadora; solo te detienes ante un bloqueo real.
</rol>

<contexto>
Lee completos, en este orden, antes de escribir código:

1. `vexbiz-app-contexto.md`: qué es la app, los cuatro modos (Comprador, Técnico, Tienda, Empresa de servicio), el mapa de módulos M0 a M9, los flujos críticos, los datos de ejemplo canónicos, el sistema de movimiento (sección 9) y los huecos de navegación del Figma (Apéndice B).
2. `vexbiz-app-pantallas-detalle.md`: para cada una de las 138 pantallas de la página App, los textos exactos, los componentes y las conexiones. Es tu fuente de contenido.
3. `ds/` (del zip): `tokens.css`, `m3.css` y `motion.css`. Es el sistema de diseño. No lo reemplaces ni lo dupliques.

Enlace de Figma (opcional): {{ENLACE_FIGMA}}
Si el conector de Figma responde, usa `get_screenshot` por pantalla como verdad visual y `get_variable_defs` para confirmar tokens. Si no responde («enable Dev Mode MCP Server» u otro error), no insistas: trabaja con el anexo y deja constancia en el informe de que no hubo comparación visual.

La carpeta padre (`../`) contiene una PWA anterior de solo Comprador (v1.9.13). Es referencia de patrones (router por hash, esqueletos, hojas, avisos), no de estilos: sus `tokens.css` son de la primera generación (ámbar e índigo). No modifiques ningún archivo fuera de `prototipo/`.
</contexto>

<objetivo>
Un prototipo navegable, de alta fidelidad y con movimiento, de la página App del Figma: 138 pantallas de 412 px de ancho, los cuatro modos, con los flujos críticos de la sección 6 del contexto recorribles de principio a fin y todas las conexiones del Figma (Apéndice B) más el cableado propuesto en «Huecos del Figma». Debe verse y sentirse como el producto real, sin backend.
Éxito significa que Sounix puede abrir `index.html`, recorrer cada flujo con el dedo o el mouse, saltar a cualquier pantalla desde un índice, y que el movimiento sea simple, consistente y sin parpadeos.
</objetivo>

<restricciones>
- HTML, CSS y JavaScript sin frameworks y sin paso de compilación. Módulos ES cuando se sirve por http, y un único `prototipo.local.js` empaquetado para abrir con doble clic en `file://` (Chrome bloquea módulos y `fetch` en `file://`; replica el enfoque de `../tools/build_local.py` o escribe un script equivalente).
- Sin librerías externas. Solo las fuentes Host Grotesk e Inter (Google Fonts, con la pila de respaldo que ya trae `tokens.css`).
- Los estilos salen de `ds/tokens.css`, `ds/m3.css` y `ds/motion.css`. Ningún color, radio ni espaciado fuera de esas capas: no escribas hex en tus hojas. Si falta un token, anótalo en el informe; no lo inventes.
- Reglas de la casa, sin excepciones: ámbar solo para marca y acción (nunca para un estado); campos de texto a 16 px; texto nunca menor a 13 px; objetivos táctiles de 44 px; el color nunca es la única señal; cifras con `font-variant-numeric: tabular-nums`; una intención, una etiqueta; los valores calculados nunca se escriben a mano (totales, equivalente en bolívares y comisiones salen de los datos).
- Formato es-VE con `Intl.NumberFormat('es-VE')`: `$ 1.284,50`, `Bs 14.352,10`, fechas `dd/mm/aaaa`.
- Accesibilidad: HTML semántico, un `<h1>` por pantalla, foco visible, el foco pasa al título tras cada navegación, `aria-live="polite"` en avisos breves y cuentas regresivas (que no se anuncien cada segundo: solo al llegar a umbrales), hojas con `role="dialog"` y foco atrapado.
- Tema claro y oscuro (`data-theme`), y respeta `prefers-reduced-motion`.
- Estado en memoria. `localStorage` solo para preferencias del panel del prototipo (tema, modo) y siempre dentro de `try/catch`.
- No copies datos reales de personas. Todo dato sale de la sección 7 del contexto o se inventa en el mismo estilo (y se lista en el informe).
</restricciones>

<estructura>
```text
prototipo/
  index.html                 casco: marco de teléfono 412 × 892, panel del prototipo, hojas, aviso breve
  ds/                        tokens.css · m3.css · motion.css   (del zip, sin tocar)
  assets/
    css/prototipo.css        solo lo que el sistema de diseño no cubre (marco, panel, piezas de marketplace)
    js/
      main.js                arranque, tema, panel del prototipo
      router.js              router por hash con pila y transiciones (ver <navegacion>)
      motion.js              API de movimiento (ver <movimiento>)
      store.js               estado: modo activo, carrito, pedidos, sesión de demo
      data.js                datos canónicos (sección 7 del contexto)
      format.js              dinero, fechas, tasas, plural
      ui.js                  piezas compartidas: tarjeta de producto, fila de tienda, barras por modo, hojas, esqueleto, estados comunes
      screens/               un archivo por módulo: m0.js, m1.js … m9.js; cada pantalla se registra con su código (M2.08)
  tools/build_local.py       empaqueta todo en prototipo.local.js
  INFORME.md                 cobertura, supuestos, conexiones añadidas, datos inventados, dudas, resultados de QA
```
</estructura>

<navegacion>
- Una ruta por pantalla: `#/M2.08`, con parámetros en la consulta (`#/M3.10?metodo=debito`). Las superposiciones son rutas de hoja que se apilan sobre la pantalla actual (`#/M2.04` abre Filtros y orden sin cambiar de pantalla de fondo).
- Pila de navegación con «Volver» (flecha) que regresa a la pantalla anterior y restaura su posición de scroll. Cada pantalla se registra con `{ code, title, mode, tab, noBar, render, mount }`.
- Las conexiones del Apéndice B del contexto son la verdad. Respeta el tipo de cada una: `push` entra desde la derecha, `fundido` disuelve, `hoja` sube desde abajo, `▣` abre superposición. Añade el cableado de «Huecos del Figma» y lista cada conexión añadida en el informe.
- Barra inferior por modo (Comprador: Inicio, Explorar, Carrito, Pedidos, Cuenta; Técnico: Trabajos, Servicios, Compras, Perfil; Tienda: Inicio, Pedidos, Productos, Dinero, Más; Empresa: Solicitudes, Catálogo, Perfil). Se oculta en pantallas de flujo y hojas, como en Figma. La pestaña activa muestra su píldora; la píldora se desliza entre pestañas.
- Cambio de modo: la hoja «Cambiar de modo» lleva al inicio del modo elegido con fundido de 350 ms y reinicia la pila.
- Automáticas: tras el arranque (M1.01) aparece el consentimiento; la Sala de espera (M3.08) avanza sola a M3.09.
- Un botón principal de formulario sin conexión en Figma muestra un aviso breve de confirmación, vuelve a la pantalla anterior y actualiza el dato visible.
- **Panel del prototipo** fuera del marco del teléfono, a la derecha en pantallas anchas: selector de modo, tema claro/oscuro, interruptor «Reducir movimiento» (que añade `data-reduce-motion` y aplica el mismo comportamiento que la preferencia del sistema), reiniciar datos, y el **Índice**: las 138 pantallas agrupadas por módulo con enlace directo (`M2.08 · Ficha de producto`). El índice es obligatorio: es la herramienta de revisión de Sounix.
- En pantallas estrechas (teléfono real) el panel se oculta y la app ocupa todo el ancho.
</navegacion>

<datos>
- `data.js` contiene los datos canónicos de la sección 7 del contexto, con la misma forma que usaría una API: `usuario`, `direcciones`, `productos`, `tiendas`, `pedidos`, `compra`, `tecnico`, `solicitudes`, `trabajos`, `empresa`, `servicios`, `cursos`, `foros`, `tasa` (36,89486 Bs por USD, calibrada para que `$ 389,00` dé `Bs 14.352,10` y `$ 466,14` dé `Bs 17.198`; el resto de equivalentes salen de ahí).
- Todo importe en pantalla se calcula con `format.js` a partir de estos datos (por ejemplo, el total del carrito es la suma de sus líneas más envío; el 3 % del débito bancario se calcula, no se escribe).
- `store.js` guarda: modo activo, carrito (con contador), pedidos creados en la demo, sesión de demo y el paso actual de los flujos. Añadir al carrito de verdad cambia el contador de la barra y el total de M3.01.
- Casos que deben poder mostrarse: pago aprobado, rechazado («Tu banco rechazó el último intento: «Fondos insuficientes»» del anexo) y pendiente; lista vacía, error, sin conexión, no encontrado y fin de lista (M0.06); técnico sin conexión («2 cambios guardados en el teléfono»); venta con cuenta regresiva a punto de vencer; precio que cambió en el carrito.
</datos>

<movimiento>
Aplica el sistema de movimiento de la sección 9 del contexto. Es lo que da carácter al prototipo, y lo que más fácil se echa a perder si se improvisa. Reglas que no se negocian:

1. Solo se animan `transform` y `opacity`.
2. Movimiento y opacidad en animaciones separadas: el movimiento con `--vx-ease-emphasized`, la opacidad siempre con `ease`. Con la misma curva de movimiento la opacidad «salta» y se ve un parpadeo.
3. Todo elemento que entra parte oculto (`animation-fill-mode: both`). Nunca debe verse un primer cuadro con el contenido completo.
4. Una cosa se mueve a la vez, máximo 400 ms en interfaz.
5. El ámbar no anima estados.
6. Con «reducir movimiento» (sistema o interruptor del panel) los desplazamientos desaparecen y quedan fundidos de 200 ms. Se logra con `--vx-shift: 0`, no apagando duraciones.

`ds/motion.css` ya implementa los fotogramas, las clases y las variables. Su contenido, para que lo tengas presente, es este:

```css
/* ═══════════════════════════════════════════════════════════════════════════
   VEXBIZ · Sistema de movimiento v1
   Se suma a tokens.css (que ya trae --vx-dur-fast / --vx-dur / --vx-dur-slow y
   --vx-ease-standard / enter / exit / bounce). No renombra nada de eso.

   Reglas:
   1. Solo se animan transform y opacity. Nunca width, height, top, left.
   2. Movimiento y opacidad van en animaciones separadas: el movimiento usa la
      curva enfática (arranca casi vertical) y la opacidad usa `ease`. Con la
      misma curva las piezas "saltan" en vez de aparecer y se ve un parpadeo.
   3. Todo elemento que entra parte oculto (animation-fill-mode: both). Así no
      hay un primer cuadro con el contenido ya visible.
   4. Una cosa se mueve a la vez. Máximo 400 ms en interfaz. Más largo solo en
      el arranque y en las confirmaciones (pago aprobado, trabajo cerrado).
   5. Con «reducir movimiento» no hay desplazamientos: queda un fundido de
      200 ms. Se logra poniendo --vx-shift en 0, no apagando las duraciones.
   6. El ámbar nunca anima un estado. Un estado se anuncia con texto + ícono.
   ═══════════════════════════════════════════════════════════════════════════ */
:root {
  /* Duraciones: son las que ya usa el prototipo de Figma (150 / 200 / 350 / 400). */
  --vx-dur-press: 100ms;   /* feedback de pulsación                              */
  --vx-dur-state: 150ms;   /* hover, foco, switch, radio, chip, fundido overlay  */
  --vx-dur-fade: 200ms;    /* fundido de pestañas y de opacidad que acompaña     */
  --vx-dur-nav: 350ms;     /* pantalla que entra o sale (push)                   */
  --vx-dur-sheet: 400ms;   /* hoja inferior y pantallas de flujo (checkout)      */
  --vx-dur-exit: 250ms;    /* toda salida es más corta que su entrada            */

  /* Curvas */
  --vx-ease-emphasized: cubic-bezier(0.05, 0.7, 0.1, 1);   /* entra con movimiento */
  --vx-ease-accelerate: cubic-bezier(0.3, 0, 0.8, 0.15);   /* sale con movimiento  */
  --vx-ease-fade: ease;                                    /* TODA opacidad        */

  /* Distancias */
  --vx-shift: 24px;        /* desplazamiento lateral de una pantalla que entra   */
  --vx-rise: 12px;         /* desplazamiento vertical de tarjetas y listas       */
  --vx-stagger: 40ms;      /* retardo entre elementos de una lista (máx. 6)      */
}

/* «Reducir movimiento»: lo pide el sistema operativo o el interruptor del panel
   (atributo data-reduce-motion en <html>). Sin desplazamientos: queda el fundido.
   La hoja inferior sí sigue subiendo, porque explica de dónde viene el contenido,
   pero en 200 ms. */
@media (prefers-reduced-motion: reduce) {
  :root { --vx-shift: 0px; --vx-rise: 0px; --vx-stagger: 0ms; --vx-dur-sheet: 200ms; }
}
:root[data-reduce-motion] { --vx-shift: 0px; --vx-rise: 0px; --vx-stagger: 0ms; --vx-dur-sheet: 200ms; }

/* ── Fotogramas base ─────────────────────────────────────────────────────── */
@keyframes vx-fade-in   { from { opacity: 0 } to { opacity: 1 } }
@keyframes vx-fade-out  { from { opacity: 1 } to { opacity: 0 } }
@keyframes vx-move-fwd  { from { transform: translateX(var(--vx-shift)) } to { transform: none } }
@keyframes vx-move-back { from { transform: translateX(calc(var(--vx-shift) * -0.6)) } to { transform: none } }
@keyframes vx-rise-in   { from { transform: translateY(var(--vx-rise)) } to { transform: none } }
@keyframes vx-sheet-in  { from { transform: translateY(100%) } to { transform: none } }
@keyframes vx-sheet-out { from { transform: none } to { transform: translateY(100%) } }
@keyframes vx-pop       { 0% { transform: scale(1) } 40% { transform: scale(1.18) } 100% { transform: scale(1) } }
@keyframes vx-tick      { from { transform: translateY(calc(var(--vx-rise) * -0.4)); opacity: 0 } to { transform: none; opacity: 1 } }
@keyframes vx-shake     { 0%, 100% { transform: none } 20%, 60% { transform: translateX(-4px) } 40%, 80% { transform: translateX(4px) } }
@keyframes vx-shimmer   { from { background-position: 150% 0 } to { background-position: -50% 0 } }
@keyframes vx-flash     { from { background-color: var(--md-sys-color-secondary-container) } to { background-color: transparent } }
@keyframes vx-draw      { to { stroke-dashoffset: 0 } }
@keyframes vx-live      { 0%, 100% { opacity: 1 } 50% { opacity: 0.45 } }
@keyframes vx-count     { from { transform: scaleX(1) } to { transform: scaleX(0) } }

/* ── 1 · Pantallas (router) ──────────────────────────────────────────────── */
/* Adelante (PUSH_FROM_RIGHT 350 ms en Figma). Movimiento y fundido separados. */
.screen.is-enter {
  animation: vx-move-fwd var(--vx-dur-nav) var(--vx-ease-emphasized) both,
             vx-fade-in  var(--vx-dur-fade) var(--vx-ease-fade) both;
}
/* Atrás: llega desde la izquierda, más corto y más suave. */
.screen.is-back {
  animation: vx-move-back var(--vx-dur-nav) var(--vx-ease-emphasized) both,
             vx-fade-in   var(--vx-dur-fade) var(--vx-ease-fade) both;
}
/* Cambio de pestaña (DISSOLVE 200 ms en Figma): solo fundido. */
.screen.is-swap { animation: vx-fade-in var(--vx-dur-fade) var(--vx-ease-fade) both; }
/* Cambio de modo y entrada a la app tras el acceso (DISSOLVE 350 ms en Figma). */
.screen.is-mode { animation: vx-fade-in var(--vx-dur-nav) var(--vx-ease-fade) both; }

/* ── 2 · Hojas y superposiciones ─────────────────────────────────────────── */
.vx-scrim {
  position: fixed; inset: 0; z-index: var(--vx-z-sheet, 80);
  background: color-mix(in srgb, var(--md-sys-color-scrim) 32%, transparent);   /* velo M3 al 32 % */
  opacity: 0; transition: opacity var(--vx-dur-fade) var(--vx-ease-fade);
}
.vx-scrim.is-open { opacity: 1; }

.vx-sheet { transform: translateY(100%); }
.vx-sheet.is-open {
  animation: vx-sheet-in var(--vx-dur-sheet) var(--vx-ease-emphasized) both;
  transform: none;
}
.vx-sheet.is-closing {
  animation: vx-sheet-out var(--vx-dur-exit) var(--vx-ease-accelerate) both;
}

/* Diálogo / aviso en vivo / consentimiento (DISSOLVE 150 ms en Figma). */
.vx-overlay.is-open {
  animation: vx-fade-in var(--vx-dur-state) var(--vx-ease-fade) both,
             vx-rise-in var(--vx-dur-fade) var(--vx-ease-emphasized) both;
}
.vx-overlay.is-closing { animation: vx-fade-out var(--vx-dur-state) var(--vx-ease-fade) both; }

/* ── 3 · Listas y tarjetas: entrada escalonada ───────────────────────────── */
/* Cada hijo define --i (0, 1, 2…). Del séptimo en adelante entran juntos. */
.vx-stagger > * {
  animation: vx-rise-in var(--vx-dur-sheet) var(--vx-ease-emphasized) both,
             vx-fade-in var(--vx-dur-fade) var(--vx-ease-fade) both;
  animation-delay: calc(min(var(--i, 0), 6) * var(--vx-stagger));
}
/* Elementos que entran al hacer scroll: se marca .is-in con IntersectionObserver. */
.vx-reveal:not(.is-in) { opacity: 0; transform: translateY(var(--vx-rise)); }
.vx-reveal.is-in {
  transition: opacity var(--vx-dur-fade) var(--vx-ease-fade),
              transform var(--vx-dur-sheet) var(--vx-ease-emphasized);
}

/* ── 4 · Pulsación y estados de control ──────────────────────────────────── */
.vx-press { transition: transform var(--vx-dur-press) var(--vx-ease-standard); }
.vx-press:active { transform: scale(0.97); }

/* Capa de estado M3: hover 8 %, foco 10 %, pulsado 10 %. */
.vx-state { position: relative; isolation: isolate; }
.vx-state::before {
  content: ""; position: absolute; inset: 0; border-radius: inherit; z-index: -1;
  background: currentColor; opacity: 0; pointer-events: none;
  transition: opacity var(--vx-dur-state) var(--vx-ease-fade);
}
@media (hover: hover) { .vx-state:hover::before { opacity: 0.08; } }
.vx-state:focus-visible::before, .vx-state:active::before { opacity: 0.10; }

/* Switch, radio, chip: la pieza se desliza en 150 ms. */
.vx-thumb { transition: transform var(--vx-dur-state) var(--vx-ease-standard),
                        background-color var(--vx-dur-state) var(--vx-ease-fade); }

/* ── 5 · Carrito y confirmaciones ────────────────────────────────────────── */
.vx-pop   { animation: vx-pop 300ms var(--vx-ease-bounce) both; }      /* ícono del carrito al añadir */
.vx-tick  { animation: vx-tick var(--vx-dur-state) var(--vx-ease-emphasized) both; }  /* cifra que cambia */
.vx-flash { animation: vx-flash 900ms var(--vx-ease-fade) both; }       /* línea cuyo precio cambió */
.vx-shake { animation: vx-shake 280ms var(--vx-ease-standard) both; }   /* campo o pago rechazado */

/* Palomita que se dibuja: <path class="vx-check" pathLength="1"> */
.vx-check { stroke-dasharray: 1; stroke-dashoffset: 1;
            animation: vx-draw 400ms var(--vx-ease-emphasized) 120ms both; }
.vx-ring  { animation: vx-pop 500ms var(--vx-ease-bounce) both; }

/* ── 6 · Carga y tiempo ──────────────────────────────────────────────────── */
.vx-skel {
  background: linear-gradient(100deg,
    var(--md-sys-color-surface-container) 30%,
    var(--md-sys-color-surface-container-high) 50%,
    var(--md-sys-color-surface-container) 70%);
  background-size: 200% 100%;
  animation: vx-shimmer 1.4s linear infinite;
}
/* Cuenta regresiva: una barra que se vacía a velocidad constante. */
.vx-countbar { transform-origin: left center; animation: vx-count var(--vx-count, 60s) linear both; }
/* Punto «en vivo». Además del latido, siempre lleva la palabra «en vivo». */
.vx-live { animation: vx-live 2s ease-in-out infinite; }

@media (prefers-reduced-motion: reduce) {
  .vx-skel, .vx-live { animation: none; }           /* sin ciclos infinitos */
  .vx-shake, .vx-pop, .vx-ring { animation: none; } /* el mensaje de error ya está en texto */
  .vx-check { animation-duration: 1ms; }
  .vx-press:active { transform: none; }
}
:root[data-reduce-motion] .vx-skel, :root[data-reduce-motion] .vx-live,
:root[data-reduce-motion] .vx-shake, :root[data-reduce-motion] .vx-pop,
:root[data-reduce-motion] .vx-ring { animation: none; }
:root[data-reduce-motion] .vx-check { animation-duration: 1ms; }
:root[data-reduce-motion] .vx-press:active { transform: none; }
```

**API de `motion.js`** (impleméntala tal cual; es la única forma en que las pantallas disparan movimiento):

```js
// assets/js/motion.js
export const reduce = () =>
  matchMedia('(prefers-reduced-motion: reduce)').matches ||
  document.documentElement.hasAttribute('data-reduce-motion');

const done = (el) =>
  Promise.all(el.getAnimations({ subtree: false }).map((a) => a.finished)).catch(() => {});

// kind: 'push' | 'back' | 'swap' | 'mode' | 'none'
export async function enterScreen(el, kind) {
  const cls = { push: 'is-enter', back: 'is-back', swap: 'is-swap', mode: 'is-mode' }[kind];
  if (!cls) return;
  el.classList.add(cls);
  await done(el);
  el.classList.remove(cls);
}

// Hojas: el scrim y la hoja existen en index.html con atributo hidden.
export function openSheet(sheet, scrim) {
  scrim.hidden = sheet.hidden = false;
  requestAnimationFrame(() => { scrim.classList.add('is-open'); sheet.classList.add('is-open'); });
}
export async function closeSheet(sheet, scrim) {
  sheet.classList.remove('is-open'); sheet.classList.add('is-closing');
  scrim.classList.remove('is-open');
  await done(sheet);
  sheet.classList.remove('is-closing'); scrim.hidden = sheet.hidden = true;
}

// Entrada escalonada: se llama solo en la primera carga de una lista, nunca al volver atrás.
export function stagger(list) {
  [...list.children].forEach((c, i) => c.style.setProperty('--i', i));
  list.classList.add('vx-stagger');
}

// Revelar al hacer scroll, una sola vez por bloque.
export function reveal(root) {
  const io = new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
  }), { threshold: 0.12 });
  root.querySelectorAll('.vx-reveal').forEach((n) => io.observe(n));
}

// Reinicia una animación de una sola vez (pop, tick, flash, shake).
export function play(el, cls) {
  el.classList.remove(cls); void el.offsetWidth; el.classList.add(cls);
  el.addEventListener('animationend', () => el.classList.remove(cls), { once: true });
}

// Cuenta regresiva: texto tabular + barra lineal. onTick(msRestantes) para umbrales.
export function countdown({ textEl, barEl, ms, onTick, onEnd }) {
  const end = Date.now() + ms;
  if (barEl) { barEl.style.setProperty('--vx-count', ms + 'ms'); barEl.classList.add('vx-countbar'); }
  const fmt = (t) => { const s = Math.max(0, Math.ceil(t / 1000)); return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`; };
  const id = setInterval(() => {
    const left = end - Date.now();
    textEl.textContent = fmt(left); onTick && onTick(left);
    if (left <= 0) { clearInterval(id); onEnd && onEnd(); }
  }, 250);
  textEl.textContent = fmt(ms);
  return () => clearInterval(id);
}
```

**Dónde se dispara cada patrón** (los números son los del catálogo de la sección 9.4 del contexto):

| Momento | Patrón | Llamada |
|---|---|---|
| Entrar a una pantalla desde un `push` del Apéndice B | 1 Push | `enterScreen(el, 'push')` |
| Flecha «Volver» | 2 Atrás | `enterScreen(el, 'back')` |
| Pestaña de la barra inferior | 3 Intercambio 200 ms | `enterScreen(el, 'swap')` |
| Cambio de modo, o entrada a la app tras el acceso | 3 Intercambio 350 ms | `enterScreen(el, 'mode')` |
| Hojas (Filtros, Otras tiendas, Resumen, Cambiar de modo, Avisos en vivo, Añadido al carrito, Acciones de dirección, Detalle del período) | 4 Hoja | `openSheet` / `closeSheet`; el velo y la flecha cierran |
| Consentimiento de privacidad, avisos puntuales | 5 Diálogo | clase `vx-overlay` con `is-open` / `is-closing` |
| Pantallas de flujo con `hoja` en el Apéndice B (Elegir dirección, Dirección, Forma de pago nueva, Escribir pregunta, Nuevo servicio, Ficha de importadora) | 6 Flujo desde abajo | `openSheet` a pantalla completa |
| Primera carga de Inicio, Resultados, Pedidos, Trabajos, Solicitudes | 7 Escalonada | `stagger(lista)` |
| Secciones largas de Inicio, Ficha, Cuenta | 8 Revelar | clase `vx-reveal` + `reveal(el)` |
| Cualquier botón, tarjeta o fila tocable | 9 Pulsación | clases `vx-press vx-state` |
| Chips, radios, switches | 10 Selección | clase `vx-thumb` en la pieza que se desliza |
| «Añadir al carrito» | 11 | botón → «Añadido» con palomita 1,2 s; `play(iconoCarrito, 'vx-pop')`; `play(cifra, 'vx-tick')`; abre la hoja M0.05 |
| Total, contador o cantidad que cambia | 12 Cifra | `play(cifra, 'vx-tick')` |
| Línea del carrito con «Cambió de precio» | 13 | `play(linea, 'vx-flash')` al montar |
| Pantallas que cargan | 14 Esqueleto | `.vx-skel` y fundido de 200 ms al llegar el contenido; simula 400–700 ms de carga solo en la primera visita |
| Sala de espera, venta pendiente, solicitud que caduca | 15 Cuenta regresiva | `countdown(...)`; al bajar del umbral (60 s) cambia a color de error con ícono y texto |
| Resultado del pago | 16 | aprobado: `vx-ring` + `vx-check` (SVG con `pathLength="1"`); rechazado: `play(icono, 'vx-shake')` |
| Checkout Steps | 17 | la línea se llena con `transform: scaleX`; nunca con `width` |
| Barra de búsqueda → Buscar | 18 | la barra se expande 300 ms y los resultados hacen fundido |
| Ficha → Galería | 19 | la foto crece a pantalla completa (técnica FLIP: mide, aplica `transform` inverso, anima a `none`); si es muy complejo, usa fundido de 350 ms y anótalo |
| Avisos breves (Snackbar) | 20 | entra 16 px + fundido 200 ms, sale 150 ms, dura 4 s |
| Técnico: aviso de cambios guardados | 21 | baja 12 px y se aclara; al sincronizar cambia el texto sin movimiento |
| Punto «en vivo» | 22 | `vx-live` junto a la palabra «en vivo» |
| Carrusel de Inicio y galería | 23 | `scroll-snap`; el punto activo se ensancha con `transform: scaleX` |
| Arranque M1.01 | 24 | reutiliza el splash de VEXBIZ Drive si está en la carpeta (`vexbiz-drive-splash-entrega.zip`); si no, fundido del logo de 800 ms con la X en ámbar |
</movimiento>

<fases>
Trabaja por fases. Al terminar cada una: la app abre y navega sin errores de consola, haces capturas de las pantallas nuevas a 412 × 892 (claro y oscuro), pasas la QA de `<calidad>` y actualizas `INFORME.md`. No avances con pantallas a medias.

**Fase 0 · Base.** Casco con marco de teléfono y panel del prototipo con Índice; router; `motion.js`; `store.js`, `data.js`, `format.js`; barras por modo; hoja de cambio de modo, avisos en vivo, añadido al carrito, estados comunes y consentimiento (M0); arranque M1.01. Criterio: cambiar de modo, abrir y cerrar cada hoja, ver el esqueleto y los estados comunes, y que el Índice liste las 138 pantallas (las no construidas aparecen como «pendiente»).

**Fase 1 · Acceso, Descubrir y Compra (M1, M2, M3).** 34 pantallas más sus hojas. Es el recorrido que cuenta la historia del producto: Arranque → consentimiento → Entrar → Segundo factor → Inicio → Nicho → Categoría → Resultados → Ficha → Añadido al carrito → Carrito → Entrega → Envío → Forma de pago → Resumen → Sala de espera → Pago → Pasarela → Resultado. Criterio: recorrer ese flujo completo con débito, con Binance Pay y con transferencia, y ver pago aprobado y rechazado. **Detente aquí**, deja el informe al día y espera la revisión de Sounix antes de la Fase 2.

**Fase 2 · Cuenta y postventa (M6).** 27 pantallas. Criterio: Pedidos → Detalle → Ayuda → Calificar, Devolver y Reclamar; direcciones y formas de pago con sus hojas; seguridad, 2FA, sesiones y eliminar cuenta; Registrar mi empresa; Cómo se ve VexBiz (tamaño de texto y contraste de verdad, sobre toda la app).

**Fase 3 · Servicios y Academia (M4, M5).** 19 pantallas. Criterio: Servicios → Servicio técnico → Quién presta el servicio → perfiles; Auxilio vial con ubicación; Seguros; Academia con curso, lección, eventos en vivo, foros y nivel.

**Fase 4 · Modo Técnico (M8).** 13 pantallas. Criterio: Trabajos → Solicitud entrante → Trabajo en curso (con aviso de cambios guardados y sincronización simulada) → Cerrar → Firma del cliente (canvas que sigue el dedo) → Trabajos; Membresía con y sin país sin membresía.

**Fase 5 · Modo Tienda (M7).** 23 pantallas. Criterio: venta pendiente con cuenta regresiva → Preparar → Despachar y facturar (subida de archivo simulada) → Ventas y Liquidaciones con sus cifras calculadas; productos y ofertas; todo «Más».

**Fase 6 · Modo Empresa y pulido (M9 + QA general).** 8 pantallas, más: pasada completa de movimiento (cada patrón del catálogo disparado al menos una vez), prueba con «reducir movimiento», tema oscuro en las 138 pantallas, revisión del Índice y del informe final.
</fases>

<fidelidad>
Para cada pantalla:
1. Abre su ficha en `vexbiz-app-pantallas-detalle.md` y usa los textos exactos, en el orden en que aparecen.
2. Construye con los componentes `md-*` de `m3.css` donde existan (botón, chip, campo, switch, radio, tarjeta, lista, hoja, barra de navegación, etc.) y con piezas propias del marketplace (tarjeta de producto, fila de tienda, mosaico de nicho, pasos de pago, tarjeta de tipo de cuenta) construidas solo con tokens.
3. Respeta el tamaño: 412 px de ancho, y el alto es la altura del marco de Figma como referencia de cuánto contenido lleva; la pantalla hace scroll si el contenido es más largo que el teléfono.
4. Implementa las variantes de estado que la ficha lista (Seleccionado/No, Hovered, Pressed, Disabled) de modo que reaccionen en vivo.
5. Cableado según el Apéndice B.
6. Si Figma tiene un estado que el anexo no describe (por ejemplo un error de validación), déjalo con un texto en el mismo estilo y anótalo en el informe.
Si el conector de Figma funciona, compara tu captura con `get_screenshot` y corrige diferencias de jerarquía, espaciado y alineación antes de dar la pantalla por terminada.
</fidelidad>

<calidad>
Pasa esta lista al final de cada fase y guarda el resultado en `INFORME.md`. Usa Playwright (o el navegador que tengas) a 412 × 892, claro y oscuro.

- **Consola:** cero errores y cero avisos en cada pantalla construida.
- **Desborde:** `document.documentElement.scrollWidth <= 412` en todas.
- **Texto:** ningún elemento con `font-size` computado menor a 13 px; campos de texto a 16 px.
- **Objetivos táctiles:** todo botón, enlace, chip, radio y switch mide al menos 44 × 44 px (el área táctil cuenta, no solo el dibujo).
- **Contraste:** texto 4,5:1 y componentes 3:1 en claro y oscuro (calcúlalo con los tokens, no a ojo).
- **Datos:** ningún importe escrito a mano; el total del carrito, el 3 % del débito y la comisión del 12 % se recalculan al cambiar la cantidad.
- **Movimiento, primer cuadro:** en cada tipo de entrada (push, atrás, hoja, escalonada, revelar) `getComputedStyle(el).opacity` es `0` en el instante en que empieza la animación.
- **Movimiento, estructura:** un push produce exactamente dos animaciones (`vx-move-fwd` 350 ms y `vx-fade-in` 200 ms) y no se anima ninguna propiedad fuera de `transform` y `opacity` (revisa con `getAnimations()`).
- **Reducir movimiento:** con `reducedMotion: 'reduce'` el `transform` de las pantallas entrantes no cambia, el esqueleto y el punto «en vivo» no animan, y el flujo sigue completo.
- **Rendimiento:** con la CPU reducida 4× en DevTools, el push de Inicio → Ficha no cae de 50 fps de forma sostenida.
- **Flujos:** un script de recorrido que ejecuta cada flujo de la sección 6 del contexto de punta a punta con clics reales, sin saltarse pantallas.
- **Índice:** cada enlace del Índice abre su pantalla y no hay códigos duplicados ni sueltos.
</calidad>

<entrega>
- La carpeta `prototipo/` completa, abre con doble clic en `index.html` (versión empaquetada) y también por http.
- `prototipo/INFORME.md` con: tabla de cobertura de las 138 pantallas (hecha, parcial, pendiente) con el motivo de lo no hecho; conexiones añadidas respecto al Figma; datos inventados; diferencias respecto al Figma y por qué; resultados de la QA por fase; tokens que faltaron; preguntas abiertas para Sounix (las de la sección 11 del contexto más las que aparezcan).
- Capturas en `prototipo/capturas/fase-N/` (claro y oscuro).
- Un resumen final de máximo 10 líneas: qué se construyó, qué falta, qué decidir.
</entrega>

<reglas_de_trabajo>
- No inventes funciones, pantallas ni textos que no estén en el Figma o en el contexto. Si algo falta, dilo en el informe.
- No cambies el sistema de diseño. Si un token o un componente no alcanza, propón el cambio en el informe y usa la mejor aproximación con los tokens existentes.
- No animes nada que no esté en el catálogo de patrones. Si una pantalla pide algo nuevo, elige el patrón más cercano.
- No uses el ámbar para comunicar un estado (error, éxito, aviso, urgencia): usa texto, ícono y los roles de color de estado.
- Commits pequeños por pantalla o por grupo de pantallas, con mensaje en español que diga qué pantalla y qué patrón de movimiento se aplicó.
- Si una pantalla ya existe en `prototipo/` de una sesión anterior, léela y mejórala; no la reescribas desde cero.
- Antes de empezar cada fase, di en una línea qué pantallas vas a hacer. Al terminar, di en una línea cómo quedó la QA.
</reglas_de_trabajo>

<mensaje_inicial>
En tu primera respuesta: confirma qué archivos leíste y si el conector de Figma responde; lista en 5 líneas como máximo los supuestos con los que vas a trabajar (carpeta, modos, tokens, barra de 5 pestañas, movimiento); y empieza la Fase 0 sin pedir confirmación.
</mensaje_inicial>

FIN DEL PROMPT
