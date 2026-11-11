# VEXBIZ · App de marketplace — Contexto para el prototipo

Versión 1.0 · 11/11/2026 · Autor del encargo: Sounix Romero (diseño, VEXBIZ)

Este documento reúne todo lo que hace falta saber para construir el prototipo navegable de la app móvil del marketplace de VEXBIZ: qué es, qué hay en el Figma, qué sistema de diseño usa, cómo se conectan las pantallas, qué datos de ejemplo usar y qué sistema de movimiento aplicar. Se lee junto con `vexbiz-app-prompt-prototipo.md`, que es la orden de trabajo para Claude Code.

**Archivos que acompañan a este documento**

| Archivo | Para qué sirve |
|---|---|
| `vexbiz-app-prompt-prototipo.md` | El prompt listo para pegar en Claude Code |
| `vexbiz-app-pantallas-detalle.md` | Textos, componentes y navegación de cada una de las 138 pantallas de la página App |
| `vexbiz-prototipo-base.zip` | Base de estilos: `tokens.css` (Material 3 con paleta VEXBIZ), `m3.css` (componentes `md-*`) y `motion.css` (sistema de movimiento) |

## Índice

1. Qué es la app
2. De dónde sale esta información y qué límites tiene
3. Inventario del archivo de Figma
4. Sistema de diseño
5. Mapa de la app: modos, módulos y barras de navegación
6. Flujos críticos
7. Datos de ejemplo canónicos
8. Lo que el prototipo de Figma ya anima
9. Sistema de movimiento (nuevo)
10. Lo que ya existe en la carpeta VEXBIZ APP
11. Decisiones, supuestos y preguntas abiertas
12. Apéndices A, B y C (pantallas, navegación y componentes)

---

## 1 · Qué es la app

VEXBIZ es un marketplace venezolano de productos, repuestos y servicios técnicos, con foco en climatización y refrigeración, y también ferretería, automotriz, farmacias y otros nichos. La app móvil reúne en una sola cuenta cuatro maneras de usarla. El usuario cambia entre ellas con la hoja «Cambiar de modo».

| Modo | Quién lo usa | Qué hace |
|---|---|---|
| Comprador | Cualquier persona con cuenta | Busca y compra productos, pide servicios técnicos, auxilio vial y seguros, estudia en la Academia |
| Técnico | Técnico independiente | Recibe solicitudes de instalación y reparación, ejecuta y cierra trabajos con firma del cliente, compra repuestos para el trabajo, paga membresía |
| Tienda | Vendedor con tienda verificada | Contesta ventas pendientes, prepara y despacha pedidos, factura, publica ofertas, cobra liquidaciones |
| Empresa de servicio | Empresa que presta servicios con su propio equipo | Recibe solicitudes, cotiza, cierra con garantía, gestiona catálogo de servicios, perfil público y membresía |

Datos del negocio que aparecen en las pantallas y que el prototipo debe respetar:

- Moneda principal USD, con equivalente en bolívares y la tasa del día: «≈ Bs 14.352,10 · tasa del 15/10».
- Un solo pago por toda la compra, aunque tenga varias tiendas. Cada tienda despacha su paquete por separado.
- Tres formas de pago: Débito bancario (impuesto del pago 3 %), Binance Pay (USDT) y Transferencia a VexBiz (se reporta con comprobante).
- Comisión media de VexBiz: 12 % sobre las ventas de la tienda.
- Membresía de técnico: Básico $ 9,90 y Pro $ 24,90, cada 30 días. En países sin membresía se muestra una variante sin cobro.
- Las tiendas tienen tiempo limitado para contestar una venta pendiente (cuenta regresiva); si no contestan, la venta pasa a otra tienda.
- El técnico trabaja sin conexión: los cambios quedan «guardados en el teléfono» y «se envían solos cuando vuelva la señal».
- Números en formato es-VE: punto para miles y coma para decimales (`$ 1.284,50`), fechas `dd/mm/aaaa`, pedidos `#VX-20412`, solicitudes `#S-1082`, reclamos `#R-0091`.

## 2 · De dónde sale esta información y qué límites tiene

- **Fuente principal:** el archivo de Figma `WEB FLOW.fig` subido por Sounix (aprox. 4/11/2026). Se decodificó el archivo completo y se leyeron todos sus nodos: marcos, textos, instancias de componentes, variables e interacciones de prototipo.
- **Conector de Figma en vivo:** estaba apagado («Dev Mode MCP Server» sin habilitar), así que no se consultó el archivo en línea. Si se hicieron cambios después del 4/11, no están aquí.
- **Segunda fuente:** la carpeta `VEXBIZ APP` (v1.9.13, 5/10/2026), la PWA de marketplace ya construida, con su README, CAMBIOS y auditoría. Ver sección 10.
- **Qué no se pudo verificar:** el aspecto visual pixel a pixel de cada pantalla (se trabajó con estructura, textos, componentes y enlaces, no con capturas de las 138 pantallas) y el contenido de los 122 fotogramas clave que existen en la página interna del archivo (ver sección 8).
- **Corrección a una premisa del encargo:** el Figma sí tiene un prototipo conectado (813 interacciones en la página App). Lo que no tiene es un sistema de movimiento: no hay variables de duración ni curva, y las transiciones están puestas a mano. Esta guía convierte lo que ya existe en un sistema y completa lo que falta.

## 3 · Inventario del archivo de Figma

| Página | Qué contiene | Cantidad |
|---|---|---|
| App | Pantallas móviles de 412 px de ancho | 138 marcos |
| Web | Pantallas de escritorio de 1440 px | 95 marcos |
| Web móvil | Versión móvil de las pantallas web clave (390 px) | 8 marcos |
| Landing | Landing en escritorio (1440) y móvil (412) | 2 marcos |
| Sistema de diseño | Componentes y variables | 216 variantes en 60 familias de componentes |
| Imágenes IA, Page 7 | Material de apoyo | No se revisaron |
| Internal Only Canvas | Página interna | 122 fotogramas clave en 60 pistas |

Variables: 3 conjuntos y 121 variables: `Vexbiz / Primitivos` (46: amarillo, slate, grises), `M3 / Esquemas` (56 roles de color, con modos Light y Dark) y `M3 / Dimensiones` (19: espaciado y radios).

**El prototipo es la página App.** Tiene 138 pantallas repartidas en módulos M0 a M9 y 9 superposiciones. Las pantallas Web y Web móvil quedan fuera de este prototipo; sirven como referencia de contenido y de reglas de negocio.

Puntos de inicio marcados en Figma (★): M1.01 Arranque, M2.01 Inicio (Comprador), M4.01 Servicios, M5.01 Academia, M7.01 Inicio de la tienda, M8.01 Trabajos (Técnico) y M9.01 Solicitudes (Empresa).

## 4 · Sistema de diseño

El prototipo usa el sistema de diseño VEXBIZ sobre Material 3, el mismo de las entregas anteriores. Para este prototipo se entrega en CSS puro (`tokens.css` + `m3.css`, dentro de `vexbiz-prototipo-base.zip`); no necesita React ni paso de compilación.

**Color.** Roles `--md-sys-color-*` con modos claro y oscuro. Primario amarillo (`Yellow/70` #e8b21e), neutros slate (de #0d1013 a blanco), secundario slate. El texto sobre el primario es slate 800 (#2b343b). Capas de estado M3: hover 8 %, foco 10 %, pulsado 10 %.

**Forma y espacio.** Radios `--md-sys-shape-corner-*` (ninguno, 4, 8… extra grande). Espaciado `--vx-space-0` a `--vx-space-64` en pasos de 0, 2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64. Elevación `--md-sys-elevation-*`.

**Tipografía.** Host Grotesk para títulos y Inter para texto. Íconos Material Symbols Rounded en SVG.

**Reglas de la casa** (no negociables, vienen de las entregas anteriores):

- El ámbar es marca y acción; nunca comunica un estado. Los estados se dicen con texto e ícono: Éxito, Atención, Error, Información, Neutro.
- Campos de texto a 16 px (evita el zoom de iOS). Texto nunca menor a 13 px.
- Objetivos táctiles de 44 px como mínimo.
- El color nunca es la única señal.
- Cifras con numerales tabulares.
- Glosario: una intención, una etiqueta (por ejemplo, siempre «Añadir al carrito», no «Agregar» en otra pantalla).
- Los valores calculados nunca se escriben a mano: el total, el equivalente en bolívares y las comisiones salen de los datos.

**Componentes que usan las pantallas App** (familias del Figma, con su estado y variantes):

| Grupo | Familias |
|---|---|
| Acciones | Button (Filled, Tonal, Outlined, Text × Enabled, Hovered, Focused, Pressed, Disabled), Icon Button, FAB, Chip (Assist, Input, Filter), Segmented Button |
| Formularios | Text Field, Search Bar, Checkbox, Radio Button, Switch, Slider, Form / Campo, Selector, Requisito, Área de texto |
| Navegación | Top App Bar, Navigation Bar, App / Barra Comprador, Técnico, Tienda, Empresa, Tabs, Menu, Bottom Sheet, App / Status Bar, App / Barra de acción |
| Contenido | Card, List Item, Avatar (iniciales), Badge, Divider, Tooltip, Dialog, Snackbar, Progress Indicator, Placeholder |
| Marketplace | Product Card (tamaño móvil, estado normal), Store Row, Niche Tile, Checkout Steps (paso 1 a 3), Account Type Card, Botón WhatsApp |

## 5 · Mapa de la app: modos, módulos y barras de navegación

Cada modo tiene su propia barra inferior (componentes `App / Barra …`):

| Modo | Pestañas de la barra inferior |
|---|---|
| Comprador | Inicio · Explorar · Carrito · Pedidos · Cuenta |
| Técnico | Trabajos · Servicios · Compras · Perfil |
| Tienda | Inicio · Pedidos · Productos · Dinero · Más |
| Empresa | Solicitudes · Catálogo · Perfil |

Los módulos de pantallas, con su contenido principal:

| Módulo | Qué resuelve | Pantallas | Inicio |
|---|---|---|---|
| M0 Transversales | Hojas de cambio de modo, avisos en vivo y «Añadido al carrito»; estados comunes (cargando, vacío, error, sin conexión, no encontrado, hace falta entrar); consentimiento de privacidad | 5 | |
| M1 Acceso | Arranque, entrar, segundo factor, correo sin confirmar, crear cuenta, revisar correo, unirse al país, recuperar y crear contraseña, boletín | 10 | M1.01 |
| M2 Descubrir | Inicio, buscar, resultados, filtros y orden, nichos, nicho, categoría, ficha de producto, galería, otras tiendas que lo venden, tiendas, tienda | 12 | M2.01 |
| M3 Compra | Carrito, entrega, dirección, envío, ruta, forma de pago, resumen, sala de espera, pago de la compra, pasarela, resultado, reportar transferencia | 12 | |
| M4 Servicios | Servicios, servicio técnico, quién lo presta, perfil de técnico y de empresa, seguros, aseguradora, auxilio vial, empresa de auxilio | 9 | M4.01 |
| M5 Academia | Inicio, curso, mis cursos, lección, eventos, comunidad (foros), preguntas, hilo, escribir pregunta, nivel y puntos | 10 | M5.01 |
| M6 Cuenta | Cuenta, datos, pedidos, detalle, ayuda con un pedido, calificar, devolver, reclamar, garantías, servicios pedidos, direcciones, formas de pago, avisos, seguridad, 2FA, sesiones, eliminar cuenta, registrar empresa, apariencia, ayuda, documentos legales, contacto | 27 | |
| M7 Modo Tienda | Inicio, confirmación pendiente, pedidos, preparar, despachar y facturar, productos, poner a la venta, oferta, ventas, liquidaciones, cuentas, «Más» (carritos y apartadas, reclamos, reseñas, ajustes, cupones, envíos, documentos, cómo se ve mi tienda, importadora: fichas y compatibilidades) | 23 | M7.01 |
| M8 Modo Técnico | Trabajos, solicitud entrante, trabajo en curso, cerrar, firma del cliente, servicios, oficios, cobertura y horario, documentos, perfil profesional, compras de trabajo, membresía (y variante «país sin membresía») | 13 | M8.01 |
| M9 Modo Empresa | Solicitudes, solicitud, cotizar, cerrar con garantía, catálogo, servicio, perfil público, membresía | 8 | M9.01 |
| Superposiciones | Resumen de la compra, acciones de la dirección, detalle del período, filtros y orden, otras tiendas, cambiar de modo, avisos en vivo, añadido al carrito, consentimiento | 9 | |

El listado completo de pantallas está en el Apéndice A y todas las conexiones de navegación en el Apéndice B.

## 6 · Flujos críticos

Estos recorridos deben poder hacerse de principio a fin en el prototipo. Son los que cuentan la historia del producto.

**Acceso.** Arranque (splash) → consentimiento de privacidad (aparece solo tras el arranque) → Entrar → Segundo factor → Inicio. Variantes: Crear cuenta → Revisa tu correo → Entrar; Correo sin confirmar; Recuperar contraseña → Contraseña nueva; Unirse al país elige el modo (Comprar, Trabajar como técnico, etc.).

**Comprar.** Inicio → Nicho → Categoría → Resultados → Ficha de producto → Añadido al carrito (hoja) → Carrito → Entrega → Envío → Forma de pago → Resumen (hoja) → Sala de espera (cuenta regresiva «Queda 3:42», 2 tiendas tienen que contestar; avanza sola) → Pago de la compra → Pasarela (paso 1 datos, paso 2 clave de 8 dígitos) → Resultado del pago (aprobado, rechazado, pendiente) → Pedidos. Rama de transferencia: Pago de la compra → Reportar una transferencia → Resultado.

**Postventa.** Pedidos → Detalle del pedido → Ayuda con un pedido → Calificar la tienda, Pedir devolución o Abrir reclamo → Hilo del reclamo (en mediación).

**Técnico.** Trabajos (lista con «Caduca hoy 18:00 · quedan 5 h») → Solicitud entrante → Trabajo en curso (con aviso de cambios guardados en el teléfono) → Cerrar el trabajo → Firma del cliente (firma con el dedo) → Trabajos. Aparte: Membresía (Básico/Pro y variante sin membresía), Documentos (obligatorios, verificados), Oficios, Cobertura y horario.

**Tienda.** Inicio de la tienda («3 clientes quieren comprarte», cuenta regresiva 04:32) → Confirmación pendiente (1 de 3) → Pedidos → Pedido: preparar (artículos a empacar) → Despachar y facturar (subir factura JPG/PNG/WebP/PDF hasta 10 MB, datos de la factura) → Ventas y Liquidaciones (detalle del período en hoja).

**Empresa de servicio.** Solicitudes → Solicitud → Cotizar → Cerrar con garantía → Solicitudes. Aparte: Catálogo → Servicio nuevo (publicado), Perfil público con «Lo que falta», Membresía (vence en 12 días).

**Cambio de modo.** Desde cualquier inicio de modo, la hoja «Cambiar de modo» lleva a M2.01 (Comprador), M7.01 (Tienda), M8.01 (Técnico) o a «Registrar mi empresa» (M6.22) si todavía no existe.

## 7 · Datos de ejemplo canónicos

El prototipo no usa un backend. Usa un conjunto fijo de datos, coherente entre pantallas, tomado de los textos del Figma. Cuando una pantalla necesite un dato que no está aquí, se inventa con el mismo estilo y se anota en el informe de entrega.

**Comprador**
- Aníbal Lejarazu · anibal@correo.com · verificado · Valencia, Carabobo.
- Direcciones: Casa (predeterminada, Av. Bolívar Norte, Res. Los Samanes, Torre B), Oficina (C.C. Metrópolis, Nivel 2, Local 214), Taller principal (Zona Industrial Castillito, Calle 98, San Diego).
- Cuenta: 1 sin pagar, 2 en camino, 14 entregados.

**Producto principal**
- Aire acondicionado split inverter 12.000 BTU · Samsung · Ref. AR12TVHZ · GTIN 8801643562371 · Climatización › Aires split.
- Antes $ 486,25, oferta −20 % hasta el 20/10, ahora $ 389,00 · ≈ Bs 14.352,10 (tasa del 15/10) · Disponible, 12 unidades · lo venden 7 tiendas.
- Otros: Control remoto universal A/A ($ 12,50), Capacitor de marcha 35+5 µF ($ 9,50), Compresor rotativo 12.000 BTU R410A ($ 189,00, GMCC · FT-CMP-12K), Tarjeta electrónica condensadora split 12K ($ 64,00).

**Tiendas**
- Frío Total C.A. (FT) · Caracas, Distrito Capital · verificada por VexBiz · ★ 4,8 · 46 productos publicados.
- ClimaRepuestos (★ 4,7, Valencia), Herramientas Andina (★ 4,7), Repuestos Express (★ 4,9), ElectroHogar, Ferretería El Tornillo, Repuestos Frío.

**Pedidos y pagos**
- #VX-20431 $ 422,40 (falta pagar) · #VX-20432 $ 154,80 (Herramientas Andina) · #VX-20418 sin pagar $ 129,90 hasta hoy 18:30 · #VX-20430 (transferir antes de las 18:00) · #VX-20211 entregado (ElectroHogar, Zoom, guía 1234 5678 90, factura N.º 000-0458).
- Compra de 4 artículos: subtotal $ 568,80. Pago con la pasarela: $ 466,14 ≈ Bs 17.198 (tasa del 16/10, 2 pedidos). Banco de ejemplo: Banesco · Personal, V-12.***.678 · 0414-***-1234.
- Reclamo #R-0091 en mediación (control remoto no compatible).

**Técnico**
- Carlos Mendoza (CM) · ★ 4,8 · Valencia · sin verificar en el perfil, con oficios certificados (Aire acondicionado, 12/05/2026) y documentos pendientes (faltan 2 obligatorios).
- Solicitud #S-1082: Instalación de aire split 12.000 BTU, $ 60,00, cliente María González, Urb. El Viñedo, Calle 4, Casa 12, Valencia, sábado 18/10/2026 9:00, caduca hoy a las 18:00 (quedan 5 h 12 min).
- Trabajo en curso: cliente Pedro Silva, Calle Páez 45, San Diego, empezó a las 8:42; total $ 73,00; garantía de 3 meses hasta el 16/01/2027.
- Membresía: Técnico Básico $ 9,90 (hasta 20 solicitudes al mes) y Técnico Pro $ 24,90 (solicitudes ilimitadas, prioridad en instalaciones), «Recomendado».
- Compras de trabajo: #VX-20501 Repuestos Frío $ 21,50 entregado; #VX-20512 Ferretería El Tornillo $ 6,50 en camino; gastado $ 28,00 USD.

**Tienda (Frío Total)**
- Contestar ahora: 3 clientes quieren comprarte, cuenta regresiva 04:32. Por despachar: 5 pedidos (#VX-20412 María González $ 48,00, te quedan $ 42,24; #VX-20409 José Rodríguez retiro en tienda $ 19,60; #VX-20405 Carmen Díaz $ 112,50).
- Ventas: ingreso neto acumulado $ 16.210,40 · bruto $ 18.420,90 · comisión media 12 % (− $ 2.210,50) · 312 pedidos pagados.
- Liquidación 01/10–15/10/2026: $ 3.120,40, ventas brutas $ 3.546,00, comisión − $ 425,52, retenciones − $ 38,28. Anterior 16/09–30/09: $ 2.870,15, transferida el 16/10 a Banco de Venezuela ••4567.
- Cupones VERANO10 (10 % desde $ 50, usado 18 de 100 veces) y BIENVENIDA5. Reseñas 4,8 · 37 opiniones. Envío Caracas $ 5,00.

**Empresa de servicio**
- ClimaPro Servicios (CP) · ★ 4,9 · Valencia · Empresa Pro activa, vence en 12 días.
- Solicitud #S-2041: Instalación de aire split 12.000 BTU, aceptada, agendando. Reparación de fuga en unidad condensadora, $ 85,00, cliente Luis Pérez, Naguanagua.

**Academia y comunidad**
- Curso «Diagnóstico de equipos inverter» (Climatización, Intermedio), avance 44 %, «Sigue en: Probar el IPM», lección de 22 min.
- Nivel 4 de 8 «Técnico Avanzado» · 1.240 puntos · barra de avance al 62 %. Foro de aire acondicionado, 214 preguntas; pregunta resuelta «Split inverter LG da error CH05 al arrancar».
- Evento en vivo: «Errores comunes al instalar inverter» (Ramón Márquez).

**Servicios**
- Auxilio vial 24/7 (Auxilio Vial Centro, ★ 4,7), Seguros (Mercantil Seguros, ★ 4,6), Servicio técnico (Aire acondicionado, 14 disponibles).

## 8 · Lo que el prototipo de Figma ya anima

Antes de definir nada nuevo, esto es lo que la página App ya hace (813 interacciones):

| Interacción | Cantidad | Transición en Figma |
|---|---|---|
| Hover de botón, chip o componente (cambio de estado) | 258 + 11 | Smart animate 150 ms (salida cúbica) y 100 ms en chips |
| Ir a una pantalla (clic) | 225 | Push desde la derecha 350 ms |
| Volver (ícono de flecha) | 122 | Atrás, sin transición propia |
| Chip seleccionado, radio, switch | 34 + 28 + 26 | Smart animate 200, 150 y 250 ms |
| Abrir superposición (filtros, hojas) | 26 | Fundido 150 ms |
| Cerrar tocando el velo | 19 | Cierra la superposición |
| Abrir la galería, cambiar de modo, entrar a la app tras el acceso | 20 | Fundido 350 ms |
| Abrir hoja o pantalla de flujo desde abajo | 13 | Move from bottom 400 ms |
| Saltos dentro de una misma sección (contadores de la cuenta a Pedidos, resultado del pago a Pedidos, contacto) | 7 | Fundido 200 ms |
| Buscar (barra de búsqueda a pantalla de búsqueda) | 4 | Smart animate 300 ms |
| Enlace externo | 14 | URL |
| Automáticas | 2 | Arranque → consentimiento (fundido 150 ms tras un tiempo) y Sala de espera → Pago (fundido 350 ms tras un tiempo) |

Lectura: el equipo ya pensó el movimiento en cuatro familias (estado 100–250 ms, fundido 150–200 ms, push 350 ms, hoja 400 ms) pero no lo dejó como sistema: no hay variables, las curvas son mixtas y la opacidad y el movimiento se animan juntos. Las 122 fotogramas clave del archivo viven en la página «Internal Only Canvas» (valores como 0 → 100 en 250 ms y 553 → 0 en 400 ms, con las curvas (0,5; 0; 0,5; 1) y (0,05; 0,7; 0,1; 1)). No están enlazadas a pantallas de la App y no se usaron como fuente.

## 9 · Sistema de movimiento (nuevo)

### 9.1 Idea rectora

El movimiento de VEXBIZ tiene un trabajo: **decir de dónde viene algo y a dónde va**, y confirmar que una acción ocurrió. No decora. Es corto, siempre hace lo mismo para lo mismo y se apaga limpio cuando el usuario pide menos movimiento. La personalidad sale de una sola curva, la enfática (arranca rápido y aterriza suave), que es la misma del splash de VEXBIZ Drive.

### 9.2 Principios

1. **Solo `transform` y `opacity`.** Nunca se anima `width`, `height`, `top`, `left` ni sombras grandes; salen caras en teléfonos de gama media.
2. **Movimiento y opacidad por separado.** El movimiento usa la curva enfática; la opacidad usa siempre `ease`. Aplicar la enfática a la opacidad hace que el elemento «salte» y se vea como parpadeo (aprendido en el splash).
3. **Todo lo que entra parte oculto.** Estado inicial con opacidad 0 y `animation-fill-mode: both`. Evita el primer cuadro con el contenido a la vista.
4. **Una cosa se mueve a la vez.** Si entra una pantalla, sus tarjetas no se escalonan encima de ese movimiento: se escalonan solo en la primera carga de una lista.
5. **Salir es más rápido que entrar.** La salida dura alrededor de 60 % de la entrada.
6. **Tope de 400 ms en interfaz.** Más largo solo en el arranque y en confirmaciones (pago aprobado, trabajo cerrado, hasta 600 ms).
7. **El ámbar no anima estados.** Un estado se anuncia con texto e ícono. Un aviso urgente no pulsa en ámbar.
8. **Sin ciclos infinitos, salvo tres.** El esqueleto de carga, el progreso indeterminado y el punto «en vivo» (que además lleva la palabra «en vivo»).
9. **Reducir movimiento = fundido de 200 ms.** No se apaga todo: se quitan los desplazamientos y quedan los fundidos, para que la interfaz siga diciendo que algo cambió.
10. **El tiempo real manda.** Las cuentas regresivas se mueven a velocidad constante (lineal) porque representan tiempo, no emoción.

### 9.3 Tokens

Se suman a los que ya trae `tokens.css` (`--vx-dur-fast` 150, `--vx-dur` 300, `--vx-dur-slow` 500, y las curvas `standard`, `enter`, `exit`, `bounce`; son los mismos en la PWA y en la versión Material 3). No se renombra nada de lo existente. Todo el sistema vive en `motion.css`.

| Token | Valor | Uso | Origen en Figma |
|---|---|---|---|
| `--vx-dur-press` | 100 ms | Pulsación de botón | Hover de chip 100 ms |
| `--vx-dur-state` | 150 ms | Hover, foco, switch, radio, fundido de superposición | Smart animate 150 ms |
| `--vx-dur-fade` | 200 ms | Fundido de pestañas y opacidad que acompaña un movimiento | Fundido 200 ms |
| `--vx-dur-nav` | 350 ms | Pantalla que entra (push) | Push 350 ms |
| `--vx-dur-sheet` | 400 ms | Hoja inferior, pantallas de flujo y entrada de listas | Move from bottom 400 ms |
| `--vx-dur-exit` | 250 ms | Cierre de hojas y salidas | Nuevo |
| `--vx-ease-emphasized` | `cubic-bezier(0.05, 0.7, 0.1, 1)` | Todo movimiento que entra | Misma curva del splash y de los fotogramas del archivo |
| `--vx-ease-accelerate` | `cubic-bezier(0.3, 0, 0.8, 0.15)` | Todo movimiento que sale | Nuevo |
| `--vx-ease-fade` | `ease` | Toda opacidad | Nuevo |
| `--vx-shift` | 24 px | Desplazamiento lateral de una pantalla | Nuevo |
| `--vx-rise` | 12 px | Desplazamiento vertical de tarjetas | Nuevo |
| `--vx-stagger` | 40 ms | Retardo entre elementos (tope 6) | Nuevo |

### 9.4 Catálogo de patrones

Cada patrón dice qué hace, con qué duración y curva, y en qué pantallas aplica.

| # | Patrón | Qué hace | Duración y curva | Dónde |
|---|---|---|---|---|
| 1 | **Push** | La pantalla nueva entra 24 px desde la derecha y se aclara. La anterior se queda quieta debajo. | Movimiento 350 ms enfática; opacidad 200 ms ease | Todas las conexiones «push» (225 en Figma) |
| 2 | **Atrás** | La pantalla vuelve desde la izquierda, 14 px, y se aclara. Recupera la posición de scroll. | Igual que Push | Flecha de volver (122) |
| 3 | **Intercambio** | Fundido sin desplazamiento. La barra inferior mueve su píldora indicadora. | 200 ms ease; 350 ms cuando cambia el modo o se entra a la app (como en Figma) | Cambio de pestaña; cambio de modo; acceso → inicio |
| 4 | **Hoja inferior** | Sube desde abajo; el velo aparece al 32 %. Al cerrar baja y el velo se va. Se cierra tocando el velo o arrastrando. | Entra 400 ms enfática; sale 250 ms acelerada; velo 200 ms ease | Cambiar de modo, Avisos en vivo, Añadido al carrito, Filtros y orden, Otras tiendas, Resumen de la compra, Acciones de dirección, Detalle del período |
| 5 | **Diálogo / aviso** | Fundido con un desplazamiento vertical de 12 px | 150 ms ease + 200 ms enfática | Consentimiento de privacidad, avisos puntuales |
| 6 | **Pantalla de flujo desde abajo** | Como la hoja, pero ocupa toda la pantalla | 400 ms enfática | Elegir dirección, Dirección, Forma de pago nueva, Escribir pregunta, Nuevo servicio, Ficha de importadora |
| 7 | **Entrada escalonada** | Las primeras 6 tarjetas de una lista suben 12 px y se aclaran con 40 ms de diferencia. El resto aparece junto. Solo en la primera carga, no al volver atrás. | 400 ms enfática + 200 ms ease | Inicio (ofertas, más vendidos), Resultados, Pedidos, Trabajos, Solicitudes |
| 8 | **Revelar al hacer scroll** | Un bloque que entra en la pantalla sube y se aclara una sola vez | 400 ms enfática + 200 ms ease | Secciones largas de Inicio, Ficha, Cuenta |
| 9 | **Pulsación** | El elemento se encoge a 97 %; la capa de estado sube a 8/10 % | 100 ms estándar; capa 150 ms | Botones, tarjetas, filas |
| 10 | **Selección** | La pieza del switch/radio se desliza; el chip cambia de contenedor; aparece la palomita | 150 ms estándar | Chips, radios de forma de pago, switches de ajustes |
| 11 | **Añadir al carrito** | El botón cambia a «Añadido» con palomita 1,2 s; el ícono del carrito en la barra hace un «pop» y la cifra del contador se renueva; sube la hoja «Añadido al carrito» | Pop 300 ms rebote; cifra 150 ms; hoja 400 ms | Ficha, tarjeta de producto, hoja |
| 12 | **Cifra que cambia** | El número nuevo entra 5 px desde arriba y se aclara | 150 ms enfática | Contador del carrito, totales, cantidades |
| 13 | **Precio cambió** | La línea afectada parte con el fondo del contenedor secundario y se aclara. Va con la etiqueta «Cambió de precio». | 900 ms ease | Carrito |
| 14 | **Esqueleto** | Barra de brillo que cruza los bloques grises, 1,4 s en bucle. Al llegar el contenido, fundido 200 ms | 1,4 s lineal; 200 ms ease | Estados comunes, listas, ficha |
| 15 | **Cuenta regresiva** | Dígitos tabulares sin salto de ancho; barra fina que se vacía a velocidad constante. Pasado el umbral se cambia a color de error **con** ícono y texto | Lineal, duración real | Sala de espera, venta pendiente de la tienda, solicitud que caduca |
| 16 | **Resultado de pago** | Aprobado: el aro hace pop y la palomita se dibuja. Rechazado: el ícono tiembla 2 veces 4 px y se muestra el motivo. Pendiente: progreso indeterminado | Aprobado 500 + 400 ms; rechazado 280 ms | Resultado del pago, Reportar transferencia |
| 17 | **Pasos del pago** | La línea de Checkout Steps se llena y el paso nuevo se rellena | 300 ms estándar, con escala (transform) no ancho | Entrega, Envío, Forma de pago |
| 18 | **Búsqueda** | La barra de búsqueda se expande hasta ocupar el ancho y los resultados se aclaran | 300 ms enfática | Inicio → Buscar |
| 19 | **Galería** | La foto de la ficha crece hasta pantalla completa; el contador «2 de 5» y los puntos se mueven al deslizar | 350 ms enfática; puntos 200 ms | Ficha → Galería |
| 20 | **Toast** | Sube 16 px y se aclara; se va en 4 s o con «Deshacer» | 200 ms entra, 150 ms sale | Avisos de acción (quitar del carrito, guardado) |
| 21 | **Aviso de conexión** | La banda «guardado en el teléfono» baja 12 px y se aclara; al sincronizar cambia el texto sin movimiento | 300 ms enfática | Trabajos en curso del técnico |
| 22 | **Punto «en vivo»** | Latido de opacidad 1 → 0,45 → 1 | 2 s en bucle; fijo con reducir movimiento | Avisos en vivo |
| 23 | **Carrusel** | Desplazamiento con imán al siguiente; el punto activo se ensancha | Nativo (scroll-snap); punto 200 ms | Hero de Inicio, galería |
| 24 | **Arranque** | El logo se arma como en el splash de VEXBIZ Drive, 1,6 s. Al terminar abre el consentimiento | 1,6 s (paquete de splash ya entregado) | M1.01 |

### 9.5 Qué no se anima

- Texto largo, párrafos y tablas.
- Cambios de tamaño de contenedores (acordeones usan `grid-template-rows` o se abren sin animar).
- Cualquier cosa mientras el usuario escribe en un campo.
- Pantallas de error legal o de seguridad (eliminar cuenta, sesiones abiertas): entran con el push normal y nada más.
- Fotos de producto al cargar: aparecen con fundido de 200 ms, sin movimiento.

### 9.6 «Reducir movimiento»

Con `prefers-reduced-motion: reduce`: `--vx-shift`, `--vx-rise` y `--vx-stagger` pasan a 0, así que push, atrás, hojas de diálogo y listas quedan en fundido de 200 ms. Se detienen el esqueleto en bucle, el latido «en vivo», el temblor y el pop. La palomita aparece ya dibujada. El splash pasa a un fundido de 300 ms. La hoja inferior sigue subiendo (es el único movimiento que explica de dónde viene el contenido) pero en 200 ms.

### 9.7 Cómo se verifica

- En el navegador: `document.getAnimations()` debe listar, para un push, exactamente dos animaciones (`vx-move-fwd` 350 ms y `vx-fade-in` 200 ms). Con reducir movimiento, `transform` no debe cambiar.
- Primer cuadro: ninguna pantalla ni tarjeta se ve completa antes de empezar su entrada.
- Rendimiento: grabar un push de la ficha de producto en un Android de gama media o con la CPU reducida 4× en DevTools; debe mantenerse a 60 fps o muy cerca.
- Accesibilidad: el foco pasa al título de la pantalla nueva después de la entrada, y los lectores de pantalla anuncian el cambio una sola vez.

## 10 · Lo que ya existe en la carpeta VEXBIZ APP

La carpeta contiene la PWA de marketplace v1.9.13 (5/10/2026): HTML, CSS y JavaScript sin frameworks ni paso de compilación, con catálogo real de `ve.vexbiz.com` (snapshot sin conexión o API en vivo), instalable y con service worker.

| Pieza | Qué es | Utilidad para el prototipo |
|---|---|---|
| `assets/css/tokens.css` | Tokens `--vx-*` de la primera generación (paleta ámbar e índigo, sin roles `--md-sys-*`). Trae una sección MOTION con tres duraciones y cuatro curvas | **No se reutiliza para el prototipo**: el Figma nuevo está en Material 3 con paleta amarillo y slate. Sí se conservan sus nombres de duración y curva, que el `tokens.css` nuevo repite |
| `assets/js/router.js` | Router por hash con pila de navegación, esqueleto mientras carga, restauración de scroll y clases `is-enter` / `is-back` ya previstas | Mismo patrón. Las clases son las del Patrón 1 y 2 |
| `assets/js/ui.js` | `reveal()`, `skeletonScreen()`, `toast()`, `openSheet()`, `success()` (botón con palomita 1,2 s), `empty()`, constante `reduce` | Los patrones 8, 11, 14 y 20 ya tienen su base |
| `assets/js/store.js` | Estado local (carrito, favoritos, pedidos) con suscripciones | Patrón de estado para el carrito del prototipo |
| `assets/js/views/*` | Vistas: inicio, catálogo, producto, checkout, cuenta, login | Referencia de estructura; no se copian porque el prototipo parte del Figma nuevo |
| `README.md`, `CAMBIOS.md`, auditoría v1.9.6 | Bases de diseño, decisiones cerradas, hallazgos | Reglas ya acordadas (ver sección 11) |

Diferencias importantes entre la PWA y el prototipo que se pide:

- La PWA cubre solo el modo Comprador y se basó en el Figma anterior (archivo MARKETPLACE, marco Home 292:800). El prototipo nuevo se basa en `WEB FLOW.fig` y cubre los cuatro modos.
- La PWA usa datos reales del catálogo. El prototipo usa los datos canónicos de la sección 7.
- La PWA tiene una barra inferior de 4 ítems (Inicio, Categorías, Carrito, Cuenta). El Figma nuevo tiene 5 para el comprador (Inicio, Explorar, Carrito, Pedidos, Cuenta).

## 11 · Decisiones, supuestos y preguntas abiertas

**Supuestos que se tomaron para poder avanzar** (confirmar o corregir):

1. El prototipo es la página **App** del Figma, móvil, marco de 412 × 892 px, sin las páginas Web.
2. Se construye por fases (sección 5 del prompt) y cada fase es navegable sola.
3. Tecnología: HTML, CSS y JavaScript sin paso de compilación, con el sistema de diseño VEXBIZ (CSS + bundle de componentes), igual que la PWA actual. Es un prototipo: sin backend, con estado en memoria y en `localStorage` solo para preferencias.
4. La barra inferior del comprador sigue el Figma nuevo (5 pestañas) y los estilos son los de Material 3 con paleta VEXBIZ, no los tokens de la PWA.
5. El sistema de movimiento de la sección 9 aplica a todo el prototipo y es candidato a pasar al sistema de diseño.

**Decisiones cerradas de la PWA que se mantienen** (README y auditoría): tarjeta de producto clara (B1), carrito agrupado por tienda, stock en tres niveles, ámbar solo para acción y marca, precio de la tarjeta sin píldora.

**Preguntas abiertas para Sounix:**

1. ¿Hay una versión del Figma posterior al 4/11? Esta guía se hizo con el archivo subido, sin el conector en vivo.
2. ¿El prototipo reemplaza a la PWA de la carpeta VEXBIZ APP o vive aparte (propuesta: subcarpeta `prototipo/`)?
3. ¿Nichos: 11 (decisión cerrada #4 de la PWA) o 16 (lo que el sitio en vivo publica desde el 30/09)? El Figma no fija una cifra.
4. ¿Se muestra el aviso «Reducir movimiento» como ajuste dentro de la app («Cómo se ve VexBiz», M6.23) además de seguir el sistema operativo? Hoy esa pantalla solo tiene tamaño de texto y contraste.
5. ¿Los 122 fotogramas clave de la página interna son animaciones que quieres conservar (por ejemplo del carrusel)? Si sí, hay que revisarlos antes de la fase 1.


---

## Apéndice A · Pantallas de la página App (138)

Código y nombre tal como están en Figma. «Alto» es la altura del marco en px (ancho fijo 412). «Variantes» es la cantidad de instancias con estados intercambiables que tiene la pantalla (chips, radios, switches, botones). ★ marca un punto de inicio del prototipo.

### M0 · Transversales (5)

| Código | Pantalla | Alto | Variantes | Inicio |
|---|---|---|---|---|
| M0.03 | Cambiar de modo (hoja) | 724 | 0 |  |
| M0.04 | Avisos en vivo (hoja) | 655 | 2 |  |
| M0.05 | Añadido al carrito (hoja) | 761 | 2 |  |
| M0.06 | Estados comunes | 1632 | 6 |  |
| M0.07 | Consentimiento de privacidad | 993 | 7 |  |

### M1 · Acceso (10)

| Código | Pantalla | Alto | Variantes | Inicio |
|---|---|---|---|---|
| M1.02 | Entrar | 759 | 0 |  |
| M1.05 | Crear cuenta | 1019 | 0 |  |
| M1.01 | Arranque | 892 | 0 | ★ |
| M1.03 | Segundo factor | 892 | 4 |  |
| M1.04 | Correo sin confirmar | 892 | 3 |  |
| M1.06 | Revisa tu correo | 892 | 2 |  |
| M1.07 | Unirse al país | 892 | 3 |  |
| M1.08 | Recuperar contraseña | 892 | 2 |  |
| M1.09 | Contraseña nueva | 892 | 0 |  |
| M1.10 | Boletín | 892 | 2 |  |

### M2 · Descubrir (12)

| Código | Pantalla | Alto | Variantes | Inicio |
|---|---|---|---|---|
| M2.01 | Inicio | 2656 | 11 | ★ |
| M2.03 | Resultados | 1662 | 3 |  |
| M2.08 | Ficha de producto | 1813 | 0 |  |
| M2.02 | Buscar | 690 | 1 |  |
| M2.04 | Filtros y orden (hoja) | 1204 | 11 |  |
| M2.05 | Nichos | 1070 | 0 |  |
| M2.06 | Nicho | 1426 | 2 |  |
| M2.07 | Categoría | 1244 | 2 |  |
| M2.09 | Galería | 892 | 0 |  |
| M2.10 | Otras tiendas que lo venden (hoja) | 1038 | 7 |  |
| M2.11 | Tiendas | 782 | 0 |  |
| M2.12 | Tienda | 1274 | 1 |  |

### M3 · Compra (12)

| Código | Pantalla | Alto | Variantes | Inicio |
|---|---|---|---|---|
| M3.01 | Carrito | 1303 | 1 |  |
| M3.02 | Pagar · Entrega | 814 | 2 |  |
| M3.04 | Pagar · Envío | 1030 | 4 |  |
| M3.06 | Pagar · Forma de pago | 946 | 4 |  |
| M3.07 | Resumen de la compra (hoja) | 946 | 5 |  |
| M3.03 | Elegir o crear dirección | 516 | 2 |  |
| M3.05 | Ruta del envío | 867 | 0 |  |
| M3.08 | Sala de espera | 926 | 3 |  |
| M3.09 | Pago de la compra | 855 | 2 |  |
| M3.10 | Pagar con la pasarela | 656 | 3 |  |
| M3.11 | Resultado del pago | 735 | 4 |  |
| M3.12 | Reportar una transferencia | 1122 | 4 |  |

### M4 · Servicios (9)

| Código | Pantalla | Alto | Variantes | Inicio |
|---|---|---|---|---|
| M4.01 | Servicios | 892 | 0 | ★ |
| M4.02 | Servicio técnico | 892 | 0 |  |
| M4.03 | Quién presta el servicio | 892 | 2 |  |
| M4.04 | Perfil de técnico | 892 | 0 |  |
| M4.05 | Perfil de empresa de servicio | 892 | 0 |  |
| M4.06 | Seguros | 892 | 3 |  |
| M4.07 | Aseguradora | 892 | 5 |  |
| M4.08 | Auxilio vial | 892 | 3 |  |
| M4.09 | Empresa de auxilio | 892 | 2 |  |

### M5 · Academia (10)

| Código | Pantalla | Alto | Variantes | Inicio |
|---|---|---|---|---|
| M5.01 | Academia | 892 | 0 | ★ |
| M5.02 | Curso | 892 | 1 |  |
| M5.03 | Mis cursos | 892 | 2 |  |
| M5.04 | Lección | 892 | 5 |  |
| M5.05 | Eventos | 892 | 6 |  |
| M5.06 | Comunidad: foros | 892 | 1 |  |
| M5.07 | Foro: preguntas | 892 | 3 |  |
| M5.08 | Hilo de una pregunta | 892 | 3 |  |
| M5.09 | Escribir pregunta | 892 | 2 |  |
| M5.10 | Mi nivel y mis puntos | 892 | 0 |  |

### M6 · Cuenta (27)

| Código | Pantalla | Alto | Variantes | Inicio |
|---|---|---|---|---|
| M6.01 | Cuenta | 1764 | 1 |  |
| M6.03 | Pedidos | 1002 | 2 |  |
| M6.04 | Detalle del pedido | 1300 | 6 |  |
| M6.05 | Ayuda con un pedido | 838 | 3 |  |
| M6.13 | Direcciones | 679 | 0 |  |
| M6.13 | Direcciones · Hoja de acciones | 679 | 0 |  |
| M6.02 | Datos personales | 686 | 2 |  |
| M6.06 | Calificar a la tienda | 598 | 1 |  |
| M6.07 | Pedir devolución | 834 | 1 |  |
| M6.08 | Abrir reclamo | 764 | 1 |  |
| M6.09 | Reclamos y devoluciones | 466 | 1 |  |
| M6.10 | Hilo del reclamo | 642 | 1 |  |
| M6.11 | Garantías | 620 | 0 |  |
| M6.12 | Servicios que pedí | 610 | 3 |  |
| M6.14 | Dirección | 1034 | 3 |  |
| M6.15 | Formas de pago | 710 | 1 |  |
| M6.16 | Forma de pago | 802 | 1 |  |
| M6.17 | Avisos | 553 | 2 |  |
| M6.18 | Seguridad y contraseña | 869 | 0 |  |
| M6.19 | Verificación en dos pasos | 894 | 6 |  |
| M6.20 | Sesiones abiertas | 478 | 1 |  |
| M6.21 | Eliminar cuenta | 584 | 1 |  |
| M6.22 | Registrar mi empresa | 1002 | 5 |  |
| M6.23 | Cómo se ve VexBiz | 553 | 3 |  |
| M6.24 | Ayuda e información | 1211 | 1 |  |
| M6.25 | Documento | 714 | 3 |  |
| M6.26 | Contacto | 658 | 1 |  |

### M7 · Modo Tienda (23)

| Código | Pantalla | Alto | Variantes | Inicio |
|---|---|---|---|---|
| M7.01 | Inicio de la tienda | 955 | 1 | ★ |
| M7.02 | Confirmación pendiente | 763 | 3 |  |
| M7.03 | Pedidos de la tienda | 878 | 1 |  |
| M7.04 | Pedido: preparar | 947 | 4 |  |
| M7.05 | Despachar y facturar | 1278 | 4 |  |
| M7.06 | Productos | 900 | 8 |  |
| M7.07 | Poner un artículo a la venta | 824 | 2 |  |
| M7.08 | Oferta | 1006 | 4 |  |
| M7.11 | Ventas | 909 | 3 |  |
| M7.12 | Liquidaciones | 644 | 2 |  |
| M7.12 | Hoja «Detalle del período» | 677 | 0 |  |
| M7.13 | Cuentas | 1095 | 4 |  |
| M7 | Más | 902 | 0 |  |
| M7.09 | Carritos y apartadas | 788 | 3 |  |
| M7.10 | Reclamos y devoluciones | 700 | 4 |  |
| M7.16 | Reseñas | 712 | 0 |  |
| M7.17 | Ajustes de la tienda | 885 | 5 |  |
| M7.14 | Cupones | 670 | 1 |  |
| M7.15 | Envíos | 582 | 1 |  |
| M7.18 | Documentos de verificación | 874 | 4 |  |
| M7.19 | Cómo se ve mi tienda | 720 | 1 |  |
| M7.20 | Importadora: mis fichas | 786 | 1 |  |
| M7.21 | Importadora: ficha y compatibilidades | 1327 | 3 |  |

### M8 · Modo Técnico (13)

| Código | Pantalla | Alto | Variantes | Inicio |
|---|---|---|---|---|
| M8.01 | Trabajos | 1030 | 7 | ★ |
| M8.02 | Solicitud entrante | 861 | 3 |  |
| M8.03 | Trabajo en curso | 1327 | 4 |  |
| M8.04 | Cerrar el trabajo | 889 | 0 |  |
| M8.05 | Firma del cliente | 799 | 2 |  |
| M8.06 | Servicios | 952 | 4 |  |
| M8.08 | Cobertura y horario | 994 | 7 |  |
| M8.11 | Compras de trabajo | 865 | 3 |  |
| M8.12 | Membresía | 865 | 0 |  |
| M8.12 | Membresía · País sin membresía | 536 | 0 |  |
| M8.07 | Mis oficios | 754 | 5 |  |
| M8.09 | Mis documentos | 876 | 3 |  |
| M8.10 | Mi perfil profesional | 929 | 2 |  |

### M9 · Modo Empresa de servicio (8)

| Código | Pantalla | Alto | Variantes | Inicio |
|---|---|---|---|---|
| M9.01 | Solicitudes | 1032 | 13 | ★ |
| M9.02 | Solicitud | 916 | 2 |  |
| M9.03 | Cotizar | 941 | 1 |  |
| M9.04 | Cerrar con garantía | 880 | 4 |  |
| M9.05 | Catálogo | 1000 | 9 |  |
| M9.06 | Servicio | 852 | 2 |  |
| M9.07 | Perfil público | 1202 | 3 |  |
| M9.08 | Membresía | 569 | 1 |  |

### Superposiciones (destinos de overlay) (9)

| Código | Pantalla | Alto | Variantes | Inicio |
|---|---|---|---|---|
| — | Resumen de la compra | 892 | 1 |  |
| — | Acciones de la dirección | 892 | 0 |  |
| — | Detalle del período | 892 | 0 |  |
| — | Filtros y orden | 892 | 11 |  |
| — | Otras tiendas que lo venden | 892 | 7 |  |
| — | Cambiar de modo | 892 | 0 |  |
| — | Avisos en vivo | 892 | 2 |  |
| — | Añadido al carrito | 892 | 2 |  |
| — | Consentimiento de privacidad | 892 | 7 |  |

---

## Apéndice B · Grafo de navegación

Una línea por pantalla de origen. Formato: `destino (tipo duración_ms)`. Tipos: `push` = entra desde la derecha; `fundido` = disolver; `hoja` = sube desde abajo; `smart` = smart animate; `▣` = superposición sobre la pantalla actual. Las superposiciones se cierran tocando el velo.

**Reglas generales que no se repiten abajo:**

- Toda pantalla con flecha «Volver» (122 en el archivo) regresa a la anterior de la pila, sin transición propia en Figma; en el prototipo usa el Patrón 2 (Atrás).
- Los ítems de la barra inferior de cada modo llevan al inicio de su sección (fundido 200 ms).
- Los enlaces externos (14 en el archivo, por ejemplo documentos legales o redes sociales) se muestran como aviso «Abre el sitio de VexBiz» en el prototipo.
- Automáticas: M1.01 muestra el consentimiento tras el arranque (▣ fundido 150 ms) y M3.08 pasa a M3.09 al terminar la espera (fundido 350 ms).
- Los chips, radios, switches y botones intercambian estado en 100 a 250 ms (hover, seleccionado); no cambian de pantalla.

```text
M1.02 Entrar
   → M1.08 (push 350); M1.05 (hoja 400)
M1.01 Arranque
   → ▣ Consentimiento de privacidad (fundido 150)
M1.03 Segundo factor
   → M2.01 (fundido 350)
M1.04 Correo sin confirmar
   → M2.01 (fundido 350)
M1.06 Revisa tu correo
   → M1.02 (fundido 350)
M1.07 Unirse al país
   → M2.01 (fundido 350)
M1.08 Recuperar contraseña
   → M1.09 (push 350)
M1.09 Contraseña nueva
   → M1.02 (fundido 350)
M1.10 Boletín
   → M2.01 (fundido 350)
M2.01 Inicio
   → M2.06 (push 350); M2.05 (push 350); M2.03 (push 350); M2.08 (push 350); M4.03 (push 350); M4.08 (push 350); M4.06 (push 350); M2.11 (push 350); M2.12 (push 350)
M2.03 Resultados
   → ▣ Filtros y orden (fundido 150); M2.08 (push 350); M2.02 (smart 300)
M2.08 Ficha de producto
   → M2.09 (fundido 350); M2.12 (push 350); ▣ Otras tiendas que lo venden (fundido 150); M3.01 (push 350)
M2.02 Buscar
   → M2.06 (push 350); M2.03 (push 350)
M2.05 Nichos
   → M2.02 (smart 300); M2.06 (push 350); M2.11 (push 350); M6.17 (push 350)
M2.06 Nicho
   → M4.03 (push 350); M2.07 (push 350); M2.08 (push 350); ▣ Filtros y orden (fundido 150); M2.02 (smart 300)
M2.07 Categoría
   → ▣ Filtros y orden (fundido 150); M2.08 (push 350)
M2.11 Tiendas
   → M2.12 (push 350)
M2.12 Tienda
   → ▣ Filtros y orden (fundido 150); M2.08 (push 350); M2.02 (smart 300)
M3.01 Carrito
   → M3.09 (push 350)
M3.02 Pagar · Entrega
   → M3.03 (hoja 400)
M3.04 Pagar · Envío
   → M3.03 (hoja 400); M3.05 (push 350)
M3.08 Sala de espera
   → M3.09 (fundido 350); M3.09 (push 350)
M3.09 Pago de la compra
   → M3.10 (push 350); M2.01 (fundido 350)
M3.10 Pagar con la pasarela
   → M3.11 (fundido 350)
M3.11 Resultado del pago
   → M6.03 (fundido 200); M2.01 (fundido 200)
M3.12 Reportar una transferencia
   → M3.11 (fundido 350)
M4.01 Servicios
   → M4.08 (push 350); M4.02 (push 350); M4.06 (push 350); M6.12 (push 350)
M4.02 Servicio técnico
   → M4.03 (push 350)
M4.03 Quién presta el servicio
   → M4.05 (push 350); M4.04 (push 350)
M4.06 Seguros
   → M4.07 (push 350)
M5.01 Academia
   → M5.03 (push 350); M5.05 (push 350); M5.06 (push 350); M5.10 (push 350); M5.02 (push 350)
M5.02 Curso
   → M5.04 (push 350); M5.03 (push 350)
M5.03 Mis cursos
   → M5.04 (push 350); M5.05 (push 350); M5.06 (push 350); M5.10 (push 350); M5.01 (push 350)
M5.06 Comunidad: foros
   → M5.07 (push 350)
M5.07 Foro: preguntas
   → M5.09 (hoja 400)
M6.01 Cuenta
   → M6.02 (push 350); ▣ Cambiar de modo (fundido 150); M6.03 (fundido 200); M6.09 (push 350); M6.11 (push 350); M6.12 (push 350); M6.13 (push 350); M6.15 (push 350); M6.17 (push 350)
M6.03 Pedidos
   → M6.09 (push 350); M6.11 (push 350); M6.12 (push 350); M6.04 (push 350); M3.09 (push 350); M6.17 (push 350)
M6.04 Detalle del pedido
   → M2.08 (push 350); M6.07 (push 350)
M6.05 Ayuda con un pedido
   → M6.06 (push 350); M6.08 (push 350)
M6.13 Direcciones
   → ▣ Acciones de la dirección (fundido 150)
M6.02 Datos personales
   → M6.19 (push 350)
M6.07 Pedir devolución
   → M6.09 (push 350)
M6.08 Abrir reclamo
   → M6.10 (push 350)
M6.10 Hilo del reclamo
   → M6.04 (push 350)
M6.15 Formas de pago
   → M6.16 (hoja 400)
M6.18 Seguridad y contraseña
   → M6.19 (push 350); M6.20 (push 350); M6.21 (push 350)
M6.22 Registrar mi empresa
   → M9.01 (fundido 350)
M6.24 Ayuda e información
   → M6.25 (push 350); M6.26 (push 350); M6.23 (push 350); M1.10 (hoja 400); M6.03 (fundido 200)
M6.25 Documento
   → M1.05 (hoja 400); M6.26 (push 350)
M6.26 Contacto
   → M6.03 (fundido 200); M6.24 (push 350)
M7.01 Inicio de la tienda
   → M7.02 (push 350); M7.04 (push 350); M7.03 (fundido 200); M7.09 (push 350); M7.19 (push 350); ▣ Avisos en vivo (fundido 150)
M7.03 Pedidos de la tienda
   → ▣ Avisos en vivo (fundido 150); M7.04 (push 350)
M7.04 Pedido: preparar
   → M7.05 (push 350)
M7.05 Despachar y facturar
   → M7.03 (fundido 350)
M7.06 Productos
   → ▣ Avisos en vivo (fundido 150); M7.08 (push 350); M7.07 (hoja 400)
M7.11 Ventas
   → M7.12 (push 350); ▣ Avisos en vivo (fundido 150)
M7.12 Liquidaciones
   → ▣ Avisos en vivo (fundido 150); ▣ Detalle del período (fundido 150)
M7.13 Cuentas
   → ▣ Avisos en vivo (fundido 150)
M7 Más
   → M7.10 (push 350); M7.16 (push 350); M7.09 (push 350); M7.14 (push 350); M7.15 (push 350); M7.19 (push 350); M7.17 (push 350); M7.18 (push 350); M7.20 (push 350)
M7.19 Cómo se ve mi tienda
   → M7.06 (fundido 200)
M7.20 Importadora: mis fichas
   → M7.21 (push 350); M7.21 (hoja 400)
M8.01 Trabajos
   → M8.02 (push 350); M8.03 (push 350); ▣ Avisos en vivo (fundido 150)
M8.02 Solicitud entrante
   → M8.03 (push 350)
M8.06 Servicios
   → M8.07 (push 350); M8.08 (push 350)
M8.11 Compras de trabajo
   → M8.03 (push 350)
M8.10 Mi perfil profesional
   → M8.09 (push 350); M8.07 (push 350); M8.12 (push 350); ▣ Cambiar de modo (fundido 150); ▣ Avisos en vivo (fundido 150)
M9.01 Solicitudes
   → M9.02 (push 350); M9.03 (push 350); ▣ Avisos en vivo (fundido 150)
M9.02 Solicitud
   → M9.04 (push 350)
M9.04 Cerrar con garantía
   → M9.01 (fundido 350)
M9.05 Catálogo
   → M9.06 (push 350); M9.06 (hoja 400)
M9.07 Perfil público
   → M9.08 (push 350); ▣ Cambiar de modo (fundido 150); ▣ Avisos en vivo (fundido 150)
▣ Resumen de la compra
   → M3.08 (push 350)
▣ Acciones de la dirección
   → M6.14 (hoja 400)
▣ Cambiar de modo
   → M2.01 (fundido 350); M7.01 (fundido 350); M8.01 (fundido 350); M6.22 (push 350)
▣ Avisos en vivo
   → M6.17 (push 350)
▣ Añadido al carrito
   → M3.01 (push 350)
▣ Consentimiento de privacidad
   → M1.02 (fundido 350)
```

### Huecos del Figma y cableado que el prototipo debe completar

El prototipo de Figma deja 33 pantallas sin ninguna entrada y 58 sin salida. No es un error del diseño: es lo que falta de cablear. Se resuelve así.

1. **Barras inferiores.** Ninguna pestaña de las barras de los cuatro modos está enlazada en Figma. En el prototipo cada pestaña va a la pantalla raíz de su sección (Patrón 3, fundido 200 ms): Comprador → M2.01, M2.05, M3.01, M6.03, M6.01; Técnico → M8.01, M8.06, M8.11, M8.10; Tienda → M7.01, M7.03, M7.06, M7.11 (Dinero, con selector Ventas, Liquidaciones y Cuentas hacia M7.12 y M7.13), M7 · Más; Empresa → M9.01, M9.05, M9.07.
2. **Hojas duplicadas.** Siete pantallas son el mismo diseño que una superposición conectada: M0.03 = Cambiar de modo, M0.04 = Avisos en vivo, M0.05 = Añadido al carrito, M0.07 = Consentimiento, M2.04 = Filtros y orden, M2.10 = Otras tiendas y M3.07 = Resumen de la compra. En el prototipo cada hoja existe una sola vez.
3. **Pasos de compra.** El checkout no está encadenado en Figma. Cadena propuesta: M3.01 → M3.02 (Entrega; «Cambiar» abre M3.03) → M3.04 (Envío; «Ver ruta» abre M3.05) → M3.06 (Forma de pago) → ▣ Resumen de la compra → M3.08 → M3.09 → M3.10 (Débito o Binance) o M3.12 (Transferencia) → M3.11.
4. **Acceso.** M1.02 Entrar no tiene salida en Figma. Propuesta: «Entrar» → M1.03 Segundo factor → M2.01; «¿Olvidaste tu contraseña?» → M1.08; «Crear cuenta» → M1.05 → M1.06 → M1.07 → M2.01. M1.04 (correo sin confirmar) se muestra cuando el correo de ejemplo termina en `+sinconfirmar`.
5. **Cierre del técnico.** M8.03 → M8.04 → M8.05 → M8.01 (con aviso «Trabajo cerrado»).
6. **Detalles y subpantallas sin entrada.** M6.05 se abre desde M6.04 («Ayuda con el pedido»); M6.18 desde M6.01; M4.09 desde M4.08; M5.08 desde M5.07; M7.13 y M7.12 desde Dinero.
7. **Botón principal de un formulario** (guardar, enviar, publicar) sin conexión en Figma: muestra el aviso de confirmación (Toast, Patrón 20), vuelve a la pantalla anterior y actualiza el dato visible. Los casos con flujo propio están en la sección 6.

Todas las conexiones añadidas aquí son **propuestas del equipo de prototipado**, no del Figma. Deben listarse en el informe de entrega para que Sounix las confirme.

---

## Apéndice C · Familias de componentes del sistema de diseño

60 familias y 216 variantes en el archivo. Las que empiezan con `App /` son las barras y piezas propias de la app móvil; `Web /` y `Web Móvil /` no se usan en este prototipo.

| Familia | Variantes |
|---|---|
| § Íconos | 1 |
| Button | 25 |
| Icon Button | 16 |
| FAB | 12 |
| Chip | 13 |
| Segmented Button / Segmento | 6 |
| Segmented Button | 1 |
| Text Field | 8 |
| Checkbox | 9 |
| Radio Button | 4 |
| Switch | 4 |
| Slider | 2 |
| Search Bar | 2 |
| Top App Bar | 4 |
| Navigation Item | 2 |
| Navigation Bar | 1 |
| Navigation Rail | 1 |
| Navigation Drawer / Ítem | 2 |
| Navigation Drawer | 1 |
| Tab | 4 |
| Tabs | 1 |
| Badge | 2 |
| Avatar | 6 |
| Divider | 2 |
| List Item | 9 |
| Card | 3 |
| Tooltip | 2 |
| Menu / Ítem | 4 |
| Menu | 1 |
| Dialog | 1 |
| Bottom Sheet | 1 |
| Snackbar | 2 |
| Progress Indicator | 2 |
| Logo | 2 |
| Placeholder | 1 |
| Product Card | 3 |
| Store Row | 1 |
| Checkout Steps | 3 |
| Account Type Card | 1 |
| App Store Button | 2 |
| Web / Header | 3 |
| Web / Footer | 1 |
| App / Piezas | 3 |
| App / Barra Comprador | 5 |
| Form / Campo | 4 |
| Form / Selector | 1 |
| Form / Requisito | 2 |
| Private Nav / Ítem | 2 |
| Navegación privada | 1 |
| Nichos | 1 |
| Form / Área de texto | 1 |
| App / Barra Técnico | 4 |
| App / Barra Tienda | 5 |
| App / Barra Empresa | 3 |
| Botón WhatsApp | 2 |
| Web Móvil / Cabecera | 1 |
| Web Móvil / Menú plegado | 1 |
| Web Móvil / Pie | 1 |
| Web Móvil / Barra inferior | 5 |
| Web / Hero carrusel | 3 |
