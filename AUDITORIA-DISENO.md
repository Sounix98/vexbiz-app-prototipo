# Auditoría de diseño · de "wireframe fiel" a producto con presencia

Prototipo VEXBIZ App, 138 pantallas, 4 modos. Fecha: 12/11/2026.

## 0 · Qué se leyó y con qué límites

- **Leído:** `ds/tokens.css`, `ds/motion.css`, `assets/css/prototipo.css`, el prompt original, `INFORME.md` y 6 capturas representativas (ficha, pago aprobado, inicio de tienda, y otras).
- **No auditado pantalla por pantalla.** Los hallazgos de abajo salen de patrones repetidos en el sistema y en esas capturas. Antes de ejecutar cada fase conviene un barrido visual de las 138 en claro y oscuro.
- **Stack:** HTML + CSS + ES modules, sin dependencias. Todo lo propuesto se resuelve con CSS moderno y JS nativo. Cero librerías.
- **Dials:** `DESIGN_VARIANCE 4`, `VISUAL_DENSITY 5`, `MOTION_INTENSITY 6`. Sube de 4 a 6 por tu pedido: animación como feedback en el 90 % de la app y 4 o 5 momentos firma donde se permite más.
- **Modo:** rediseño que preserva. Se mantiene la arquitectura de información (138 pantallas, rutas, modos), el ámbar como acento único de acción, Host Grotesk + Inter y las decisiones cerradas. Cambia la piel, la jerarquía, la profundidad y el movimiento.

## 1 · Diagnóstico

### Lo que ya está bien (no tocar)

1. **Sistema de movimiento disciplinado.** Solo `transform` y `opacity`, movimiento y fundido en curvas separadas, `--vx-shift` en 0 con reducir movimiento. Es mejor base que la de la mayoría de apps. Se extiende, no se rehace.
2. **Tokens semánticos M3 en claro y oscuro**, estados con color propio, ámbar nunca como estado.
3. **Accesibilidad real:** `h1` por pantalla, foco, zonas táctiles de 44 px, 130 % de texto.
4. **Jerarquía de precio en la ficha** (tachado, descuento, precio grande, equivalente en Bs): clara y útil.

### Lo que hoy se siente "wireframe pulido" y no producto de mercado

| # | Hallazgo | Evidencia | Impacto |
|---|---|---|---|
| H1 | **No hay imagen.** La ficha muestra un cuadro gris con un cubo. Tarjetas, categorías y tiendas igual. | Captura de la ficha | Crítico. En un marketplace, la imagen es el 70 % de la decisión. |
| H2 | **Todo es plano y de contorno.** Tarjetas de borde fino sobre fondo blanco o beige, casi sin profundidad ni capas. | Inicio de tienda, aprobado | Alto. Se lee como formulario, no como marca. |
| H3 | **Un solo peso tipográfico (600) y casi sin escala.** Los números clave (`$ 18.420`) son del mismo orden que los títulos. La escala `--vx-fs-display…h2` existe y no se usa en la app. | Inicio de tienda | Alto. Sin contraste tipográfico no hay jerarquía ni personalidad. |
| H4 | **El ámbar solo aparece en el botón principal.** El resto es beige y blanco. La marca no se siente fuera del CTA. | Todas | Medio. Falta un segundo recurso de marca (tinta oscura, bloques tonales). |
| H5 | **Cabeceras sin voz.** "Frío Total / Modo Tienda / Contestar ahora" son tres líneas pequeñas del mismo tamaño. | Inicio de tienda | Medio. El contexto (modo, quién eres) no se distingue de una etiqueta. |
| H6 | **Momentos de éxito mudos.** El pago aprobado es un check centrado, tabla de líneas y 40 % del alto vacío. Existe `vx-draw` y casi no luce. | Aprobado | Alto. Es el momento emocional más importante del flujo de compra. |
| H7 | **Datos sin visualización.** "Ventas brutas $18.420 · 12 meses" son dos números en baldosas. No hay tendencia, ni sparkline, ni comparación. | Inicio de tienda | Medio en Tienda y Empresa, donde el dinero es el producto. |
| H8 | **Navegación inferior de bajo contraste.** Pastilla beige sobre barra beige, etiquetas de 13 px. | Inicio de tienda | Medio. El estado activo debería ser inconfundible. |
| H9 | **Chips y etiquetas de color inconsistentes.** "La mejor oferta" azul, "−20 %" cian, "Retiro en tienda" azul grisáceo, sin una regla visible. | Ficha, tienda | Bajo, pero se acumula en 138 pantallas. |
| H10 | **El movimiento es correcto pero no memorable.** Los 24 patrones son feedback. No hay una transición que alguien recuerde ni gesto físico. | `motion.css` | Medio. Es justo lo que pides: "innovadoras". |

## 2 · Dirección de diseño: «Ámbar sobre tinta»

Una idea sola, para que 138 pantallas se sientan de una misma marca:

> **Superficies claras y calmadas, tinta oscura como segundo color de marca, ámbar reservado para la acción y el momento de victoria.**

- **Tinta (`--vx-ink`) sube de rango.** Ya existe y se usa poco. Se convierte en el fondo de los bloques de héroe (saldo, ventas, estado del pedido, nivel de Academia) con texto claro y un destello ámbar. Aparece una vez por pantalla como mucho, igual que ya está especificado en el marketplace web.
- **Bloques tonales en vez de contornos.** Las tarjetas pasan de `border: 1px` a relleno `--vx-surface-2` sin borde, con radio `--vx-r-lg` (20). El contorno se reserva para elementos seleccionables.
- **Escala tipográfica con contraste real.** Números de héroe en Host Grotesk 700 a `--vx-fs-h2` (hasta 40 px) con `tabular-nums` y tracking `-0.02em`. Títulos 600. Cuerpo Inter 400. Etiquetas 500 en mayúscula pequeña solo en `eyebrow`.
- **Imagen primero.** Fotos reales en producción. En el prototipo, un sistema de ilustración propio (ver 3.1).
- **Una regla de color de estado.** Éxito verde, advertencia naranja, error rojo, info azul. Los chips de promoción ("mejor oferta", "nuevo") van en tinta con texto claro, no en azules distintos. Ámbar solo en el descuento real (decisión cerrada de la guía del marketplace).

## 3 · Cambios por capa

### 3.1 Imagen y marca visual (resuelve H1, H4)

El prototipo no tiene fotos de producto, y no hay que inventar marcas ni modelos. Propuesta que no usa material con derechos:

1. **Teselas de producto generadas con SVG inline:** fondo con degradado suave por oficio (Climatización en azul hielo, Eléctrico en ámbar tenue, Plomería en verde agua, etc.) y la silueta lineal del producto, en el mismo estilo del sprite actual (trazo 1,7 a 1,9). Cada categoría tiene su paleta. Se ve intencional, no a "imagen rota".
2. **Galería de la ficha:** carrusel con `scroll-snap`, el indicador "1 de 5" pasa a puntos que se estiran (indicador activo con `transform: scaleX`), y arrastre con inercia nativa.
3. **Avatares de proveedores:** monograma sobre color de oficio, anillo ámbar solo si es tienda verificada. Sin ámbar de estado.
4. **Estados vacíos con ilustración lineal** (carrito, pedidos, mensajes) de 120 px, mismo trazo. Una sola frase y un solo botón.

### 3.2 Profundidad y superficie (resuelve H2)

Tres niveles, todos con tokens que ya existen:

- **Nivel 0:** `--vx-bg`.
- **Nivel 1:** tarjeta tonal `--vx-surface-2`, sin borde, sin sombra.
- **Nivel 2:** elementos flotantes (barra inferior, hoja, barra de compra de la ficha) con `--vx-shadow-2` y un borde interior de 1 px a 8 % de opacidad. En oscuro la elevación se marca con superficie más clara, no con sombra.
- **Material:** `backdrop-filter: blur()` solo en la barra superior pegada y la barra inferior, nunca como estilo general (señal de plantilla).

### 3.3 Tipografía (resuelve H3, H5)

- Cabecera de pantalla: título en `--vx-fs-h3` (22 a 30 px) y el modo como `eyebrow` encima, no como línea suelta.
- Cifras clave: nueva clase `.vx-figure` (Host Grotesk 700, `tabular-nums`, `--vx-fs-h2`).
- Cuerpo de 16 px en listas largas; 14 px solo en metadatos. Nada bajo 13 px (ya se cumple).

### 3.4 Navegación inferior (resuelve H8)

- Barra flotante: margen de 12 px a los lados y abajo, radio `--vx-r-xl`, `--vx-shadow-2`.
- Estado activo: **pastilla de tinta con icono y etiqueta en claro** que se desliza entre pestañas (un solo elemento que se mueve con `transform: translateX`, ver 4.3). Contraste mayor a 7:1.
- Insignias numéricas en tinta, no en ámbar.

### 3.5 Visualización de datos (resuelve H7)

Para Tienda y Empresa, sin librería:

- **Sparkline SVG** de 12 puntos junto a "Ventas brutas", con trazo que se dibuja (`stroke-dashoffset`, ya existe `vx-draw`), variación `▲ 8 %` con texto e icono, no solo color.
- **Barra de objetivo** de la oferta o del plan con relleno animado por `scaleX`.
- Regla de la skill `dataviz`: paleta categórica validada, etiquetas directas, nada de leyendas flotantes.

## 4 · Movimiento: de correcto a memorable

Se respeta el contrato actual: solo `transform`/`opacity`, `--vx-shift` y `--vx-rise` en 0 con reducir movimiento, ámbar nunca anima un estado, salidas más cortas que entradas. Lo que se agrega:

### 4.1 Momentos firma (máx. 5 en toda la app; pueden pasar de 400 ms)

| Momento | Qué pasa | Técnica nativa |
|---|---|---|
| **Pago aprobado** | El círculo se dibuja, el check se traza, el importe cuenta hasta su valor, las dos líneas de pedido caen en cascada y el botón principal "respira" una vez. Sin confeti. | `stroke-dashoffset`, `@property` para el contador, stagger existente. ~900 ms. |
| **Tarjeta de producto a ficha** | La imagen se expande desde su posición hasta la galería; el resto cae suavemente. | **View Transitions API** con `view-transition-name` por producto. Fallback: el push actual. |
| **Añadir al carrito** | La tesela vuela al icono del carrito y este hace `vx-pop` con el contador que cambia. | FLIP con `transform` y `getBoundingClientRect`. ~450 ms. |
| **Trabajo cerrado / venta despachada** | Sello de garantía que cae y rebota con curva de resorte. | `linear()` como easing de resorte, sin librería. |
| **Subida de nivel en Academia** | El anillo de progreso se completa y el nivel hace un giro corto en 3D. | `conic-gradient` animado con `@property`, `rotateY`. |

### 4.2 Gestos que dan sensación de app nativa

- **Atrás con borde izquierdo** (swipe desde el borde): arrastra la pantalla con el dedo y suelta con la misma curva de `back`. Hoy solo hay botón.
- **Hoja con detents:** media altura y altura completa, arrastrable con inercia y velo que sigue al gesto.
- **Deslizar para actuar** en carrito (quitar) y mensajes (archivar), con acción revelada y deshacer.
- **Pull to refresh** con el logo que se dibuja.
- **Háptica ligera** con `navigator.vibrate(8)` en confirmaciones, solo donde el dispositivo la soporte, y apagada con reducir movimiento.

### 4.3 Microinteracciones de sistema

- **Indicador de pestaña que se desliza** (barra inferior y chips de filtro): un elemento, `translateX` + `scaleX`.
- **Cabecera que se contrae con el scroll** usando `animation-timeline: scroll()` (CSS puro, sin listener). Fallback: cabecera fija.
- **Entrada de listas con `IntersectionObserver`** en vez de solo la primera visita: cada tarjeta entra una vez al aparecer.
- **Cuentas atrás y saldos con cifras que ruedan** (`tabular-nums`, cada dígito en su columna con `translateY`).
- **Esqueletos con brillo** (`vx-shimmer` ya existe) reemplazan cualquier espera visible mayor a 300 ms.
- **Botón con estados completos:** presionado, enviando, hecho (el texto se reemplaza por un check que se traza). La skill ya lo pide.
- **Interruptores y radios con resorte corto** (`linear()` de ~220 ms).

### 4.4 Reglas para que "innovador" no sea "cansador"

1. Un solo movimiento principal por vez; el resto es secundario y más corto.
2. Cada momento firma ocurre **una vez por sesión y flujo**, no en cada visita.
3. Todo JS de movimiento consulta `matchMedia('(prefers-reduced-motion: reduce)')` **y** `data-reduce-motion`. Hoy el CSS lo cubre; el JS nuevo (FLIP, vibración, gestos) debe cubrirlo a mano.
4. Presupuesto: probar con CPU 4× más lenta, que sigue sin verificarse desde la Fase 6.
5. `will-change` solo durante la animación.

## 5 · Usabilidad amigable

Lo observado y lo que se propone, sin tocar la arquitectura:

1. **Una acción principal por pantalla, siempre abajo y al alcance del pulgar.** Ya se cumple en la ficha. Revisar en Tienda y Empresa, donde hay filas y botones compitiendo.
2. **Lenguaje de la persona, no del sistema.** "3 clientes quieren comprarte" funciona. Revisar los rótulos técnicos restantes (por ejemplo, estados internos de pedido) en las 138 pantallas.
3. **Progreso visible en flujos largos** (checkout de 12 pasos, alta de técnico): barra de pasos con el nombre del paso actual y "Paso 2 de 5", no solo flecha atrás.
4. **Errores que ayudan:** campo, causa y siguiente paso en una frase, con foco devuelto al campo.
5. **Estados vacíos que invitan:** ilustración, frase de beneficio y un botón. Nunca una pantalla en blanco.
6. **Teclado correcto:** `inputmode` y `autocomplete` por campo (teléfono, cédula, importe). Revisar con teclado real.
7. **Confianza antes del pago:** resumen fijo con total y moneda, sello de "pago protegido" y tasa con fecha visibles. Ya hay base, solo falta jerarquía.
8. **Fricción cero en lo repetido:** "Volver a comprar", direcciones y métodos de pago recordados, atajos en Inicio.
9. **Búsqueda con sugerencias, historial y filtros en hoja** con conteo en vivo ("Ver 24 resultados").
10. **Modo oscuro de primera clase:** hoy es correcto; subirlo a premium con tinta más profunda y bordes de luz, no solo colores invertidos.

## 6 · Plan por fases (cada una con QA en claro y oscuro, commit pequeño y capturas)

| Fase | Contenido | Pantallas que más cambian | Esfuerzo |
|---|---|---|---|
| **A · Piel** | `.vx-figure`, tarjetas tonales, escala tipográfica, cabeceras con `eyebrow`, regla de chips, barra inferior flotante con indicador | Todas (CSS) | Medio. Mayormente en `prototipo.css` y `ui.js`. |
| **B · Imagen** | Teselas SVG por oficio, galería con snap, avatares, vacíos ilustrados | Mercado, ficha, carrito, tiendas | Medio-alto. Es el mayor salto visual. |
| **C · Datos** | Sparkline, barras de objetivo, héroes de tinta en Tienda, Empresa, Dinero, Academia | M7, M9, M5 | Medio |
| **D · Movimiento firma** | Pago aprobado, View Transitions, volar al carrito, sello, nivel | M2, M3, M8, M9, M5 | Medio. Cada uno ya está aislable. |
| **E · Gestos** | Atrás por borde, hoja con detents, deslizar para actuar, pull to refresh | Toda la app | Alto. Es lo más delicado en iOS y Android. |
| **F · Barrido y medición** | 138 pantallas, CPU 4×, lector de pantalla, `file://` real | Todas | Medio |

Orden recomendado: **A, B, D, C, E, F.** A y B cambian la percepción en un solo día de trabajo; D le da el carácter que pides; E es el más caro y el más arriesgado, por eso va casi al final.

## 7 · Decisiones que son tuyas

1. **Fidelidad a Figma.** Este prototipo se hizo fiel al Figma. Pasos A a D se alejan de él a propósito. ¿Se actualiza Figma en paralelo, o el prototipo pasa a ser la referencia?
2. **Imágenes reales.** ¿Hay fotos de producto con derechos para el prototipo, o seguimos con ilustración propia generada?
3. **Barra inferior flotante.** Cambia una pieza ya aprobada (el tab bar). ¿Se aprueba el cambio?
4. **Alcance de gestos (fase E).** ¿Vale el costo para una demo, o basta con A a D?
5. **Navegador objetivo.** View Transitions y `animation-timeline` van en Chrome, Edge y Safari recientes. Si la demo corre en navegadores antiguos, se usa el fallback.

## 8 · Qué NO se propone y por qué

- Glassmorphism general, gradientes morado-azul, ilustraciones de personas 3D y confeti masivo: señales de plantilla y ruido.
- Librerías de animación (GSAP, Framer, Lottie): no hacen falta y rompen el "sin dependencias".
- Cambiar rutas, nombres de modos o el orden de los flujos.
- Convertir el ámbar en color de estado.

## 9 · Qué no pude verificar

- Rendimiento de las animaciones nuevas en gama baja (hay que medirlo).
- Soporte real de View Transitions y scroll-driven animations en el navegador objetivo.
- Cómo se ven las propuestas en las 138 pantallas: son hipótesis hasta probarlas en un par de pantallas piloto (ficha, aprobado, inicio de tienda).
