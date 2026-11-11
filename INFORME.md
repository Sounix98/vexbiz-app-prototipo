# INFORME · Prototipo de la app VEXBIZ

Última actualización: 11/11/2026 · **Fase 0 terminada** (base y transversales). Las fases 1 a 6 siguen pendientes.

## Cómo abrirlo

- Por http (módulos ES): `python -m http.server 5173` dentro de `prototipo/` y abrir `http://localhost:5173/index.html`.
- Con doble clic (`file://`): `index.local.html`, que carga `prototipo.local.js` (todo en un solo script). Se regenera con `python tools/build_local.py` después de tocar cualquier `.js`.

## Cobertura (138 pantallas)

| Módulo | Pantallas | Hechas | Estado |
|---|---|---|---|
| M0 Transversales | 5 | 5 | M0.03, M0.04, M0.05, M0.06, M0.07 |
| M1 Acceso | 10 | 1 | M1.01 Arranque. El resto, Fase 1 |
| M2 Descubrir | 12 | 0 | Fase 1 |
| M3 Compra | 12 | 0 | Fase 1 |
| M4 Servicios | 9 | 0 | Fase 3 |
| M5 Academia | 10 | 0 | Fase 3 |
| M6 Cuenta | 27 | 0 | Fase 2 |
| M7 Modo Tienda | 23 | 0 | Fase 5 |
| M8 Modo Técnico | 13 | 0 | Fase 4 |
| M9 Modo Empresa | 8 | 0 | Fase 6 |
| Superposiciones | 9 | 4 | Cambiar de modo, Avisos en vivo, Añadido al carrito, Consentimiento (las otras 5 llegan con su fase) |

El Índice del panel lista las 138 entradas (cuenta las hojas duplicadas por separado, como Figma) y marca cada una «hecha» o «pendiente». Las pendientes ya tienen ruta y abren una pantalla con su título y la fase en que se construye. Con las hojas duplicadas contadas dos veces, el Índice muestra 10 entradas «hechas».

## Lo que se construyó en la Fase 0

- **Casco:** marco de teléfono de 412 × 892 (escala si la ventana es baja; sin marco por debajo de 520 px) y panel del prototipo con modo, tema claro/oscuro, «Reducir movimiento», reinicio de datos e Índice.
- **Router** por hash con pila, «Volver» con scroll restaurado, esqueleto en la primera visita (≈520 ms), hojas, pantallas de flujo y diálogo, foco al título tras navegar, foco atrapado en hojas y Escape para cerrar. Delegación por `data-go`, `data-back`, `data-close`, `data-toast`.
- **`motion.js`** tal como lo pide el prompt, más `motion.css` sin tocar.
- **Datos, formato y estado:** `data.js` (sección 7), `format.js` (es-VE, tasa 36,89486, porcentajes redondeados a centavos), `store.js` (modo, carrito con contador, pedidos, flujo, preferencias en `localStorage` con `try/catch`).
- **Barras inferiores** de los 4 modos con la píldora que se desliza, y contador del carrito que reacciona al añadir (pop del ícono + cifra que se renueva).
- **M0:** Cambiar de modo (lleva al inicio del modo con fundido de 350 ms y reinicia la pila), Avisos en vivo (cuenta regresiva lineal; bajo 60 s cambia a error con ícono y texto, y se anuncia una sola vez), Añadido al carrito (valores calculados del carrito), Estados comunes y Consentimiento (vista principal y «Personalizar»).
- **M1.01 Arranque** → consentimiento automático a 1,6 s → M1.02.

## QA de la Fase 0 (412 × 892, navegador del IDE, http)

| Comprobación | Resultado |
|---|---|
| Consola | 0 errores y 0 avisos en las 8 rutas probadas |
| Desborde horizontal | `scrollWidth` = 412 en las 8 rutas |
| Texto < 13 px | Ninguno |
| Objetivos táctiles | Todo ≥ 44 px, salvo los botones de ícono, que dibujan 40 × 40 y llegan a 44 con el `::before` del kit (`ds/m3.css`) |
| Push | Exactamente 2 animaciones: `vx-move-fwd` 350 ms y `vx-fade-in` 200 ms; solo `transform` y `opacity` |
| Atrás | `vx-move-back` 350 ms + `vx-fade-in` 200 ms |
| Hoja | `vx-sheet-in` 400 ms; velo al 100 % de su opacidad (32 % de negro) |
| Reducir movimiento | `--vx-shift` = 0; el `transform` de la pantalla entrante pasa de `translateX(0px)` a `none` (no se mueve) |
| Cambio de modo | Tienda → M7.01 con barra de 5 pestañas y píldora en «Inicio» |
| Capturas | `capturas/fase-0/` (4 en claro, 3 en oscuro) |

**No verificado todavía:** contraste calculado con los tokens (se hará con el script de QA de la Fase 1), `opacity` exactamente `0` en el primer cuadro (medí 0,07 a los 30 ms; la animación arranca en 0 con `fill-mode: both`), rendimiento con CPU reducida 4×, lector de pantalla, y que `index.local.html` ejecute bien por `file://` (se generó pero el panel lo abre como imagen estática).

## Decisiones y supuestos de la Fase 0

1. **Carpeta:** el prototipo vive en `VEXBIZ APP/prototipo/` y no toca nada fuera de ella. `CLAUDE.md` y `AGENTS.md` del padre describen un proyecto React + Vite que no aplica aquí (el prompt pide HTML/CSS/JS sin compilación).
2. **Carrito inicial = el de M3.01** (4 líneas, 2 tiendas, subtotal $ 568,80). Figma enseña la hoja M0.05 con «3 artículos · $ 432,90», que no coincide con ese carrito; la hoja calcula sus cifras del estado real.
3. **Un solo porcentaje por método de pago.** M3.06/M3.07 dicen 3 % (débito) y M3.09 dice 2 %. En `data.js` están separados (`debitoPct` 3 y `pasarela.impuestoPct` 2) a la espera de que Sounix decida.
4. **Arranque:** el splash de VEXBIZ Drive no está dentro de `prototipo/`, así que se usó el plan B del prompt (fundido del logo de 800 ms con la X en ámbar).
5. **Superposiciones duplicadas:** una sola hoja por diseño, con alias de ruta (`#/M0.03` abre la misma hoja que `#/O.MOD`).
6. **Saltar desde el Índice** a una pantalla de otro modo cambia el modo activo.

## Conexiones añadidas respecto al Figma (para confirmar)

- Barras inferiores de los 4 modos, hacia las pantallas raíz del Apéndice B, «Huecos» punto 1 (M7 Dinero → M7.11; M7 Más → ruta `M7.M`).
- ▣ Avisos en vivo: cada aviso y el botón «Ver avisos» llevan a M6.17 (Figma solo conecta la hoja entera).
- ▣ Añadido al carrito: «Ver carrito» → M3.01 (push), «Seguir comprando» cierra la hoja.
- Consentimiento → M1.02 con fundido de 350 ms tras cualquier elección.
- M0.06: «Explorar» → M2.05, «Ir al inicio» → M2.01, «Entrar» → M1.02, «Cambiar de modo» abre la hoja.

## Textos inventados (no están en el anexo)

- Etiquetas de botones que el anexo no escribe: «Ver avisos» (M0.04), «Ver carrito» y «Seguir comprando» (M0.05), «Aceptar todo», «Solo lo necesario», «Personalizar», «Guardar mi elección» y «Volver» (M0.07), «Reintentar», «Ir al inicio», «Entrar», «Cambiar de modo», «Mostrar aviso» y los avisos «Reintentando…», «Todavía sin señal», «Guardado en tu cuenta» (M0.06).
- Nombre de la hoja de aviso breve: «Guardado en tu cuenta».
- Datos: ciudad y conteo de productos de Herramientas Andina, Repuestos Express, Ferretería El Tornillo y Repuestos Frío; precio anterior $ 11,90 del control remoto (para la línea «Cambió de precio»).

## Diferencias respecto al Figma

- **Íconos:** juego provisional trazado a mano (24 px, trazo 2 px). El kit del Figma trae sus propios SVG de Material Symbols Rounded; hay que sustituirlos cuando se tengan.
- **Barra de estado del teléfono** (reloj, señal): no se dibuja; el marco no la necesita para el recorrido.
- **Aviso breve:** sube 16 px (el catálogo dice 16, `motion.css` solo trae `--vx-rise` de 12), así que `prototipo.css` define su propio fotograma `vx-toast-rise`. Solo `transform` y `opacity`.
- **Insignia del carrito:** usa `md-badge`, cuyo fondo es el rol `error` del kit.

## Tokens que faltaron

- Ninguno bloqueante. Se propone sumar al sistema un `--vx-toast-rise: 16px` y un `--vx-ease-emphasized`-equivalente para la píldora de la barra (hoy usa 200 ms con la enfática).

## Preguntas abiertas para Sounix

1. ¿Hay una versión del Figma posterior al 4/11? (conector en vivo sin autorizar)
2. ¿Nichos: 11 o 16? (se usará 11 hasta que digas otra cosa)
3. ¿«Reducir movimiento» también como ajuste dentro de la app (M6.23)?
4. ¿Los 122 fotogramas clave de «Internal Only Canvas» se conservan?
5. ¿Impuesto del pago: 3 % (M3.06/M3.07) o 2 % (M3.09)?
6. ¿El splash de Drive se copia a `prototipo/` para reutilizarlo en M1.01?
7. ¿Se confirman las etiquetas de botón inventadas de la lista de arriba?
