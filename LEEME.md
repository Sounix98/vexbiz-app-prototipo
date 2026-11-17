# Base de estilos para el prototipo de la app VEXBIZ

Tres archivos CSS, en este orden en el `<head>`:

1. `ds/tokens.css` — tokens del sistema de diseño VEXBIZ sobre Material 3: roles `--md-sys-color-*` (claro y oscuro con `data-theme="dark"`), formas, elevación, espaciado `--vx-space-*`, tipografía y las duraciones y curvas `--vx-dur-*` y `--vx-ease-*`. Generado con la plantilla de marca (`adaptar-sistema-de-diseno`) y con contraste validado.
2. `ds/m3.css` — componentes del kit «WEB FLOW · Sistema de diseño» (clases `md-*`: botón, chip, campo de texto, tarjeta, hoja, barra de navegación, etc.). Texto mínimo de 13 px y objetivos táctiles de 44 px.
3. `ds/motion.css` — sistema de movimiento v1 (documentado en la sección 9 de `vexbiz-app-contexto.md`). Se suma a `tokens.css`; no renombra nada.

Fuentes: Host Grotesk (títulos) e Inter (texto). Cárgalas desde Google Fonts o localmente; `tokens.css` ya declara `--font-display` y `--font-body`.

## Web y web móvil

Además de la app (raíz), el repositorio incluye:

- `web/`: prototipo web hecho a partir del Figma web (82 páginas, por fases; ver `PLAN-WEB.md` e `INFORME-WEB.md`). Reutiliza los datos de la app. Abrir `web/index.html` por http; el índice de páginas está en `#/indice`.
- `web-movil/`: visor de la web móvil. Enseña `web/` dentro de un marco de teléfono de 390 px con accesos a las 8 pantallas del Figma móvil; en un teléfono abre la web directamente. La PWA anterior (v1.9.13) se retiró en la fase 6 y queda en el historial de git.

Los correos de ejemplo de los formularios usan el genérico `tunombre@vexbiz.com`.
