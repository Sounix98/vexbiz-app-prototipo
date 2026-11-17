# Informe · Prototipo web de VEXBIZ

Fuente visual: las 82 exportaciones de Figma de `web marketplace/web/` (archivo de Aníbal). Plan por fases en [PLAN-WEB.md](PLAN-WEB.md). Cómo abrirlo: `web/index.html` servido por http (módulos ES); el índice de páginas está en `#/indice`.

## Estado

| Fase | Páginas | Estado |
|---|---|---|
| 1 · Base, portada, catálogo y compra | 13 | Hecha |
| 2 · Acceso y Mi cuenta | 26 | Hecha |
| 3 · Servicios y Academia | 12 | Pendiente |
| 4 · Técnico y empresa de servicio | 15 | Pendiente |
| 5 · Tienda | 16 | Pendiente |
| 6 · Web móvil y pulido | 82 | Pendiente |

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
