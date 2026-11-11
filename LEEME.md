# Base de estilos para el prototipo de la app VEXBIZ

Tres archivos CSS, en este orden en el `<head>`:

1. `ds/tokens.css` — tokens del sistema de diseño VEXBIZ sobre Material 3: roles `--md-sys-color-*` (claro y oscuro con `data-theme="dark"`), formas, elevación, espaciado `--vx-space-*`, tipografía y las duraciones y curvas `--vx-dur-*` y `--vx-ease-*`. Generado con la plantilla de marca (`adaptar-sistema-de-diseno`) y con contraste validado.
2. `ds/m3.css` — componentes del kit «WEB FLOW · Sistema de diseño» (clases `md-*`: botón, chip, campo de texto, tarjeta, hoja, barra de navegación, etc.). Texto mínimo de 13 px y objetivos táctiles de 44 px.
3. `ds/motion.css` — sistema de movimiento v1 (documentado en la sección 9 de `vexbiz-app-contexto.md`). Se suma a `tokens.css`; no renombra nada.

Fuentes: Host Grotesk (títulos) e Inter (texto). Cárgalas desde Google Fonts o localmente; `tokens.css` ya declara `--font-display` y `--font-body`.
