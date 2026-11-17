# Informe · Prototipo web de VEXBIZ

Fuente visual: las 82 exportaciones de Figma de `web marketplace/web/` (archivo de Aníbal). Plan por fases en [PLAN-WEB.md](PLAN-WEB.md). Cómo abrirlo: `web/index.html` servido por http (módulos ES); el índice de páginas está en `#/indice`.

## Estado

| Fase | Páginas | Estado |
|---|---|---|
| 1 · Base, portada, catálogo y compra | 13 | Hecha |
| 2 · Acceso y Mi cuenta | 26 | Hecha |
| 3 · Servicios y Academia | 12 | Hecha |
| 4 · Técnico y empresa de servicio | 15 | Hecha |
| 5 · Tienda | 16 | Hecha |
| 6 · Web móvil y pulido | 82 | Hecha |

## Fase 6 · Web móvil y pulido (82 páginas)

**Cómo se abre.** `web-movil/index.html` enseña la web dentro de un marco de teléfono de 390 px, con accesos a las 8 pantallas del Figma móvil y botón de modo oscuro; en un teléfono abre la web directamente. Es el mismo código que `web/`: por debajo de 1024 px la web toma la composición móvil (`web/css/movil.css`). La PWA anterior de esta carpeta (v1.9.13) se retiró y su service worker se da de baja al abrir el visor.

**Lo que sale del Figma móvil, aplicado a las 82 páginas.**
- **Cabecera compacta:** avatar (con la inicial al entrar), logo, avisos y carrito; buscador a lo ancho con botón de cámara; «Enviar a Valencia, Venezuela» debajo.
- **Barra inferior de 5 pestañas:** Inicio, Categorías, Ofertas (búsqueda con los productos rebajados), Mis pedidos y Más. «Más» abre una hoja con las demás secciones (cuenta, servicios, comunidad, Academia, técnico, empresa de servicios, tienda, importadora, índice) y el cambio a modo oscuro; se cierra con Escape.
- **Menú lateral → desplegable:** en Mi cuenta, Mi trabajo, Empresa de servicios y Mi tienda el menú pasa a una fila «Sección › Página · Ir a otra sección» que se despliega.
- **Pie en acordeón:** Ayuda, Legal, Servicios y Únete a VexBiz se abren y cierran.
- **Barras de acción fijas:** en la ficha de producto, precio y «Añadir»; en el carrito, «Continuar compra · total», que se actualiza al cambiar el carrito.

**Pulido.**
- Rejillas que en móvil crecían con su contenido (`1fr` sin mínimo 0): catálogo, búsqueda, ficha, carrito, checkout, curso, tablero, pedido (06.05, que quedaba pendiente desde la fase 4), comunidad, bandejas y paginadores. Los avisos con botón parten la línea en móvil.
- Choques de nombres corregidos: la línea de pasos de la ficha de solicitud (08.02) usaba `.w-steps`, la clase del paso a paso del checkout; las páginas de columna estrecha de las fases 4 y 5 cambiaban `.w-narrow` de Mi cuenta; la hoja «Más» se llama `w-sheet` porque la búsqueda ya usa `data-more` para «Cargar más productos».

**Comprobado.** Las 82 páginas pasan el barrido de calidad con 0 fallos a 1440 px y a 390 px, en claro y en oscuro (desbordes, texto de menos de 13 px, objetivos de menos de 44 px, un h1 por página, contraste AA y errores de JavaScript). Ninguna página se desborda a 360 px. Recorrido de la barra inferior, la hoja «Más» (abrir, Escape, modo oscuro), el menú desplegable, el pie en acordeón y las barras fijas (añadir al carrito desde la barra suma la unidad). Capturas en `capturas/web-fase-6/`.

**Diferencias con el Figma (para revisar).**
1. **Portada móvil:** el Figma usa fotos en el carrusel, los servicios y el banner; aquí siguen las ilustraciones (lo mismo que en escritorio).
2. **Panel de la tienda móvil:** el Figma quita los carritos abiertos y las unidades apartadas; aquí se mantienen debajo, para no esconder información que en escritorio sí está.
3. **Pie:** el Figma móvil añade «Binance Pay» a los medios de pago; no se añadió porque escritorio no lo muestra (hay que decidir si se acepta).

## Fase 5 · Tienda (16 páginas)

**Páginas.** Con el menú «Mi tienda» (12 apartados): panel (09.01), ficha de un pedido (09.02), documentos (09.03), mis productos (09.04), datos de la tienda (09.06), envíos (09.07), cupones (09.08), cuentas bancarias (09.09), liquidaciones (09.10), ventas (09.11), reseñas (09.12), cómo se te ve (09.13) y reclamos (09.14). Sin menú, como en el Figma: editar una oferta (09.05) y las dos de la importadora, mis fichas (09.15) y editar ficha (09.16).

**Qué funciona.**
- **Panel:** cuenta atrás real en «clientes quieren comprarte»; «Sí, la tengo», «Puedo, pero…» (propone una alternativa) y «No la tengo» (con confirmación); al acabarse el tiempo la venta pasa a otra tienda. Confirmar precio y stock de un carrito, horario desplegable y filtro de la bandeja.
- **Pedido:** la liquidación se calcula (comisión por artículo, IVA de la comisión, envío del delivery) y da los $ 375,58 del Figma. Despachar exige la factura adjunta, el número de factura y de control con su formato y que el total facturado coincida con el del pedido.
- **Documentos:** subir o fotografiar; «Enviar a verificación» se activa cuando no falta ningún obligatorio.
- **Productos y oferta:** buscar, filtrar (stock bajo, pausados…), publicar una oferta nueva; en la oferta, guardar, quitar y poner precios por cantidad o programados (no deja fechas pasadas ni quedarse sin precio vigente) y anotar ajustes de inventario con signo (no deja bajar de 0).
- **Datos:** el botón Guardar solo se activa con cambios; logo, quitar logo y añadir figura (Importadora lleva a Mis fichas, Empresa de servicios a su agenda).
- **Envíos:** el reparto debe sumar 100 %; los preajustes rellenan los tres campos y la suma se ve en vivo (con 50 + 30 + 0 sale «80% de 100%», como en el Figma). Pausar y quitar reglas.
- **Cupones:** el código se pone en mayúsculas, vista previa en vivo, validaciones (1–90 %, código único, descuento fijo menor que el mínimo); pausar y reactivar.
- **Cuentas:** el número de cuenta se comprueba (20 dígitos y que empiece por el código del banco), confirmación en vivo antes de añadir, hacer principal y retirar (no deja retirar la principal).
- **Reclamos:** aceptar una devolución, rechazarla con motivo, y responder en la mediación (no deja compartir teléfonos ni correos).
- **Importadora:** cargar una ficha nueva, editarla (valida el dígito de control del código de barras y que la descripción no lleve precios ni contactos) y añadir o quitar compatibilidades.
- **Cómo se te ve:** las oportunidades de mejora salen del estado de las demás páginas (documentos, stock, reglas de envío activas).

**Conexiones.** «Vender en VexBiz» del pie lleva al panel de la tienda; «Ir a Mi tienda» de Datos de empresa (06.08) también. «Preparar y despachar», las reseñas y los reclamos enlazan a la ficha del pedido.

**Comprobado.** Las 82 páginas pasan el barrido a 1440 px en claro y en oscuro con 0 fallos (se corrigió que los selectores segmentados, hechos con `fieldset`, no encogían por su ancho mínimo). Ninguna página de la fase 5 se desborda a 390 px. Recorrido de todos los flujos de arriba sin errores de JavaScript. Capturas en `capturas/web-fase-5/`.

**Diferencias con el Figma (para revisar).**
1. **«Te quedan» de la bandeja:** el Figma dice $ 380,88 para #VX-20431 y la ficha del mismo pedido da $ 375,58; aquí los dos usan el mismo cálculo y muestran $ 375,58.
2. **Ficha de un pedido:** solo #VX-20431 tiene datos en el Figma; los artículos y direcciones de #VX-20425 y #VX-20398 se inventaron (marcados en el código).
3. **Código de barras:** el de la tarjeta Midea del Figma (6909876543210) no pasa el dígito de control; se cambió a 6909876543212.
4. **Liquidaciones pasadas:** el Figma solo desglosa el período programado; el desglose de los dos transferidos se inventó para que «Ver desglose» abra algo.
5. **Editar en cuentas y cupones:** «Editar» una cuenta avisa que hay que retirarla y añadirla de nuevo; «Modificar» un cupón lo pausa o reactiva (el Figma no muestra su formulario).

## Fase 4 · Técnico y empresa de servicio (15 páginas)

**Páginas.** Modo técnico con su menú «Mi trabajo»: bandeja con solicitudes y órdenes (07.01), ejecutar el trabajo (07.02), cerrar con firma (07.03), oficios (07.04), servicios y tarifas (07.05), cobertura y agenda (07.06), documentos (07.07), perfil profesional (07.08), compras de trabajo (07.09) y membresía (07.10). Modo empresa con su menú «Empresa de servicios»: agenda (08.01), ficha de la solicitud (08.02), catálogo (08.03), membresía (08.04) y ficha pública (08.05).

**Qué funciona.** Aceptar o rechazar (con confirmación) una solicitud, con cuenta atrás de caducidad; ponerle fecha a una orden (no deja fechas pasadas), iniciarla y completar el parte. El parte se guarda campo a campo y simula estar sin señal: cuenta los cambios guardados en el teléfono y «Intentar ahora» los envía. El cierre exige qué se hizo (15 caracteres), nombre y una firma real dibujada en el recuadro (ratón, dedo o lápiz); suma mano de obra y repuestos y calcula hasta cuándo dura la garantía. Apuntarse y quitar oficios, pausar y reactivar servicios, publicar uno nuevo, guardar el radio (0 a 200 km) y el horario (valida que la hora de fin sea posterior), subir o fotografiar documentos (pasan a «En revisión») y guardar el perfil. En la empresa: indicadores, filtros, búsqueda y «retrasadas» en la agenda; la ficha de la solicitud recorre todo el ciclo (cotizar → cotizada → aceptada → en curso → terminada con garantía) con validaciones; el catálogo avisa antes de pausar un servicio con pedidos, edita el precio, reactiva y añade servicios.

**Conexiones.** «Trabaja como técnico» de la cabecera y «Trabajar como técnico» del pie llevan a Mi trabajo (piden sesión). En Mi tablero, «Ver trabajos» y el menú «Trabajos» llevan a Mi trabajo e «Ir a completarlo» a Mis documentos. «Ver como cliente» del perfil abre el perfil público (04.01).

**Datos.** De la app (`data3.js`, `data5.js`): solicitudes, horario, solicitudes de la empresa, catálogo, perfil y membresía de ClimaPro. Del Figma web (en `pages/tecnico.js` y `pages/empresa.js`): las 3 órdenes activas, los oficios y documentos tal como salen en la web, los servicios del técnico, las compras de trabajo, los planes Básico y Pro y la solicitud #S-2011 terminada.

**Comprobado.** Las 66 páginas hechas pasan el barrido a 1440 px en claro y en oscuro (se subieron a 13 px los contadores de caracteres y a 44 px el enlace «lo que ofreces»). Ninguna página de la fase 4 se desborda a 390 px (se corrigió la rejilla del menú lateral, que en móvil crecía con su contenido; arregla también Mi cuenta). Recorrido de interacciones de todos los flujos de arriba sin errores de JavaScript. Capturas en `capturas/web-fase-4/`.

**Diferencias con el Figma (para revisar).**
1. **Ficha de la solicitud:** el Figma enseña los tres estados apilados («Estados siguientes de la misma ficha»); aquí la ficha muestra solo el estado actual con una línea de pasos, y se avanza con los botones (incluido «Simular que el cliente acepta»).
2. **Fechas:** el Figma pone «jue 16/10» y «sáb 18/10», pero en 2026 el 16/10 es viernes; las fechas que calcula la demo se muestran sin día de la semana.
3. **Contadores de la agenda:** el Figma dice 54 / 3 / 3 / 48; aquí se cuentan en vivo con las 4 solicitudes de la demo más las 48 terminadas.
4. **Membresías:** las variantes «país sin membresía» y «membresía no activada» se muestran debajo del estado principal, como en el Figma; el pago no se hace en la web (soporte).
5. **Pedido (06.05) a 390 px:** la tabla de importes se desborda; queda para la Fase 6 (web móvil).

## Fase 3 · Servicios y Academia (12 páginas)

**Páginas.** Perfil de técnico (04.01), ficha de empresa de servicio (04.02), servicio técnico con los 9 oficios (04.03), quién presta el servicio con 6 prestadores entre empresas y técnicos (04.04), seguros (04.05), ficha de aseguradora con 4 pólizas (04.06), auxilio vial con 3 empresas (04.07), ficha de empresa de auxilio (04.08), Academia con filtro por área (04.09), portada del curso con temario desplegable y muestras gratis (04.10), foro público de aire acondicionado (04.11) y pregunta resuelta (04.12).

**Conexiones.** La cabecera (Servicios, Comunidad técnica), el pie (Servicio técnico, Seguros, Auxilio vial, Academia), las tarjetas de servicios de la portada, «Buscar un técnico» de la portada del nicho, los foros de la Comunidad técnica (06.19) y «Explorar catálogo de servicios» de Servicios que pedí llevan ahora a estas páginas. «Inscribirme al curso» inscribe y después lleva a la lección (06.17); «lo marcaron útil» suma y resta.

**WhatsApp.** El Figma resuelve casi todo con «Solicitar», «Pedir cotización» o «Pedir auxilio por WhatsApp». En la demo esos botones verdes avisan que se abriría el chat; no abren WhatsApp.

**Datos.** De la app: oficios, prestadores (ClimaPro, Carlos Mendoza, José Rodríguez), aseguradoras, auxilio vial, cuéntales, horario y la pregunta CH05 con sus respuestas. Del Figma web (en `pages/servicios.js`): 3 oficios más, 3 prestadores más (FríoMax, Ana Lucía Pérez, Pedro Salas), las pólizas y precios de cada aseguradora, Rescate Andino, la flota y «qué hace» de Auxilio Vial Centro, los 6 cursos con sus duraciones y precios, el temario de 3 módulos, las valoraciones y las 3 preguntas del foro.

**Comprobado.** Las 51 páginas hechas pasan el barrido a 1440 px (se corrigieron los nombres de aseguradoras y grúas, que eran enlaces de 26 a 33 px, y los avatares de la pregunta, que perdían contraste por una regla de las fichas). Ninguna página de la fase 3 se desborda a 390 px. Recorrido de interacciones: filtro de Academia, oficio a prestadores, inscripción al curso, útil, enlaces de la portada. Capturas en `capturas/web-fase-3/`.

**Diferencias con el Figma (para revisar).**
1. **Fotos:** las tarjetas de cursos, el curso y la banda del foro usan ilustraciones sobre fondo de tinta en lugar de fotos de técnicos; las fotos de la placa de la pregunta usan la ilustración de la tarjeta.
2. **Cursos:** el Figma da otros valores que la app para «Carga de gas» (Básico, 1 h 50, gratis) y «Tableros» (Intermedio, 2 h 30, $ 18); se usa el Figma. Solo «Diagnóstico de equipos inverter» tiene portada en el Figma: las demás tarjetas avisan que usarían el mismo diseño.
3. **Temario:** el Figma dice 3 módulos y 9 clases pero muestra 5; las clases 3 y 4 del módulo «Casos reales» se inventaron (marcadas en el código).
4. **Quién presta:** el Figma muestra los prestadores de Aire acondicionado; los demás oficios enseñan la misma lista en la demo.
5. **Foros:** solo existe el foro de aire acondicionado; los demás foros de la Comunidad llevan a él.

## Fase 2 · Acceso y Mi cuenta (26 páginas)

**Acceso (05.01 a 05.06).** Iniciar sesión, crear cuenta, verificar el correo, unirse al país, recuperar la contraseña y confirmar el boletín. El Figma presenta cada una como un tablero con varios estados; aquí cada una es un flujo real (crear cuenta lleva a «Revisa tu correo», «Ya lo confirmé» pasa por «Confirmando…» a «Confirmado», etc.) y debajo hay una barra **«Estados de la demo»** para ver cualquier estado directamente. Validación junto al campo, reglas de contraseña del Figma (10 caracteres, una letra, un número) que se marcan al escribir, ver/ocultar contraseña y, tras dos intentos fallidos, el hueco de comprobación antirrobot. Demo: cualquier correo y contraseña entran; la contraseña «error» falla; «Entrar como Aníbal» entra en un toque.

**Sesión.** Las páginas de Mi cuenta piden haber entrado: sin sesión mandan a Iniciar sesión y vuelven a la página pedida. La cabecera pasa de «Inicia sesión / Entrar» a «Hola, Aníbal / Mi cuenta», el ícono de cuenta lleva al tablero y la campana a Avisos. «Cerrar sesión» y «Cerrar todas» la apagan.

**Mi cuenta (06.01 a 06.20).** Panel lateral compartido con los tres menús del Figma (Tu cuenta, Mi cuenta, Mis compras). Lo que funciona en la demo: gráfico de gasto por mes y estado de compras en el tablero; foto de perfil (elegir archivo de hasta 5 MB, quitar); cerrar todas las sesiones con confirmación; cambiar la contraseña con validación; activar la verificación en dos pasos (código de 6 dígitos, códigos de respaldo) y desactivarla; marcar avisos como leídos y filtrar «Sin leer»; añadir dirección y elegir la predeterminada; añadir, quitar y elegir la forma de pago preferida (máximo 5); registrar empresa con validación del RIF; ver el detalle de cualquier pedido (IVA 19 % incluido calculado: neto $ 32,94 + IVA $ 6,26 = $ 39,20, igual al Figma); pagar la compra del grupo ($ 457,00); calificar con estrellas, pedir devolución por unidades y abrir un reclamo; responder en el hilo de mediación; marcar la lección como vista (suma 10 puntos que se ven en Mi nivel); apuntarse y cancelar en eventos.

**Datos.** De la app: usuario, resumen y gasto mensual, direcciones, pedidos y su detalle, reclamos, formas de pago, servicios pedidos, cursos, avance y materiales, puntos. Del Figma web (en `pages/cuenta.js`): las sesiones con fecha y hora, los cinco avisos, las garantías tal como las muestra, el tercer servicio pedido (#S-2050), los 8 niveles, el historial de puntos, los cinco foros, los tres eventos y los códigos de respaldo.

**Corrección importante en la base.** Cada página se pinta ahora en un elemento nuevo. Antes las escuchas de `mount()` se acumulaban en `#page` y, al volver a una página, sus acciones se disparaban varias veces (un mensaje se enviaba dos veces, «Apuntarme» se anulaba solo). Afectaba también a la Fase 1 (carrito, filtros, pago). Probado: tras ir y volver varias veces, enviar un mensaje suma 1, apuntarse resta 1 plaza y la cantidad del carrito sube de 1 en 1.

**Comprobado.** Las 39 páginas hechas (fases 1 y 2) pasan el barrido a 1440 px: sin errores de consola, un `h1`, texto de 13 px o más, contraste AA y zonas táctiles de 44 px (el barrido ahora exige 44; se subieron cantidades, enlaces pequeños y desplegables que medían 40). A 390 px ninguna página de la fase 2 se desborda. Recorrido automático de 15 interacciones (2FA, contraseña, direcciones, pagos, avisos, reclamos, lección, eventos, postventa, pago del grupo, registro, cerrar sesión y bloqueo sin sesión) con el resultado esperado. Capturas en `capturas/web-fase-2/`.

**Diferencias con el Figma (para revisar).**
1. **Mi nivel:** el Figma dice 62 % de avance con 1.240 puntos; con los umbrales del propio Figma (Técnico Avanzado 1.000, Especialista 1.700) el avance dentro del nivel es 34 %, que es lo que se muestra. «Te faltan 460» coincide.
2. **Garantías:** en la app el capacitor venció el 02/09/2026; en el Figma «vence mañana» (17/10/2026). Se usa el Figma. Las dos garantías expiradas no tienen nombre en el Figma: se inventaron (marcadas en el código).
3. **Reclamo #R-0091:** el Figma lo atribuye a Frío Total; los datos de la app dicen Herramientas Andina. Se usa el dato.
4. **Tablero:** la tarjeta «Mis trabajos» y «Ir a completarlo» llevan al índice hasta la fase 4 (Técnico).
5. **Pantallas que el Figma deja en un estado** (Avisos página 1, paginación de compras) muestran la paginación sin páginas siguientes.

## Fase 1

**Base.** Router por hash con una ruta por página del Figma (`#/`, `#/nichos`, `#/categoria`, `#/nicho`, `#/buscar`, `#/producto`, `#/tiendas`, `#/tienda`, `#/carrito`, `#/pagar?paso=1|2|3`, `#/espera`) e índice de las 82 páginas (`#/indice`) con su estado. Las páginas que faltan muestran «llega en una próxima fase». Cabecera de dos filas, boletín y pie de cinco columnas como en el Figma.

**Datos.** La web importa los datos de la app (`assets/js/data*.js`, `store.js`): mismo carrito (4 artículos de 2 tiendas, $ 568,80), mismas direcciones, bancos y débito al 3 %. `web/js/dataweb.js` suma lo que solo aparece en el Figma web: 16 productos (motor ventilador, válvula de expansión, kit de instalación, gas R410A, nevera, bujía, aceite, etc.), 5 tiendas (Climatiza Ya, SolarVen, Ferre Industrial Los Andes, Todo Repuestos Oriente, Lubricantes del Centro), los conteos de categorías y marcas, y la ficha técnica del aire split.

**Comprobado.** Barrido de calidad en las 13 páginas a 1440 px, claro: sin errores de consola, sin desborde horizontal, texto de 13 px o más, contraste AA, un `h1` por página y zonas táctiles de 44 px (se corrigieron los chips de filtro, que medían 36). A 390 px no hay desborde horizontal en ninguna. Totales del pago iguales al Figma: $ 568,80, $ 577,20 (envío $ 8,40) y $ 594,52 (impuesto del débito 3 %). Capturas en `capturas/web-fase-1/`.

**Interacciones.** Añadir al carrito desde cualquier tarjeta, la ficha (con cantidad) y las ofertas de otras tiendas; cambiar cantidades y quitar en el carrito; filtros en vivo (categoría, marca, precio, disponibles) en la portada del nicho y en la búsqueda; ordenar y «cargar más»; chips de subtipo en la categoría; filtro de nichos y tiendas; galería de 5 vistas en la ficha; dirección, retiro en tienda, forma de pago y banco en el pago; aceptar o rechazar la propuesta de la tienda y cuenta atrás en la sala de espera; héroe con avance cada 6 s que se pausa al pasar el puntero o enfocar y no avanza con «reducir movimiento»; cuenta atrás de ofertas relámpago; boletín con validación.

## Decisiones y diferencias con el Figma (para revisar)

1. **Imágenes.** No hay fotografías: los productos usan las ilustraciones SVG de `assets/js/art.js` (se agregaron 12 tipos nuevos). El héroe del Figma (técnico instalando un aire), las tres tarjetas de servicios y la franja de foto del taller usan ilustración o ícono sobre un fondo de tono hasta tener las fotos. La franja del taller se omitió.
2. **Ubicación.** El Figma dice «Quito, Ecuador»; la web muestra «Valencia, Venezuela», que es la ciudad de los datos (tasa en Bs, direcciones de Carabobo).
3. **Fuentes.** El Figma web parece usar Poppins; se mantuvieron Host Grotesk e Inter, que son las del sistema de diseño.
4. **Precios del Figma que no cuadran entre sí** (el compresor sale a $ 172 «desde», $ 189 en la tienda y $ 189 en la app; el control a $ 12,50 y a $ 14). Se usan los de la app.
5. **Conteos de catálogo** (64 productos, Rotativos 86, Samsung 64…) se muestran como en el Figma en los filtros, pero los resultados se calculan sobre los productos de la demo.
6. **«Ver 8 características más»** en la ficha no se incluye: el Figma no dice cuáles son.
7. **Enlaces sin destino todavía** (Servicios, Comunidad técnica, Trabaja como técnico, avisos, cuenta, enlaces del pie) llevan al índice o a «llega en una próxima fase».
8. **Sesión.** La cabecera muestra «Inicia sesión / Entrar» y pasa a «Hola, Aníbal / Mi cuenta» al entrar al pago, como en el Figma. El acceso real llega en la fase 2.
9. **Modo oscuro de la web** (el Figma tiene una hoja «Vista previa · Modo oscuro»): pendiente para la fase 6.
10. **Correo de ejemplo** del boletín: `tunombre@vexbiz.com` (el Figma dice `tu@correo.com`).

## No verificado

- Modo oscuro y lector de pantalla.
- Revisión página por página a 390 px más allá del desborde horizontal (se hace en la fase 6).
- Rendimiento con CPU lenta.
