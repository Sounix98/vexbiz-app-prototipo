# Informe · Prototipo web de VEXBIZ

Fuente visual: las 82 exportaciones de Figma de `web marketplace/web/` (archivo de Aníbal). Plan por fases en [PLAN-WEB.md](PLAN-WEB.md). Cómo abrirlo: `web/index.html` servido por http (módulos ES); el índice de páginas está en `#/indice`.

## Estado

| Fase | Páginas | Estado |
|---|---|---|
| 1 · Base, portada, catálogo y compra | 13 | Hecha |
| 2 · Acceso y Mi cuenta | 26 | Pendiente |
| 3 · Servicios y Academia | 12 | Pendiente |
| 4 · Técnico y empresa de servicio | 15 | Pendiente |
| 5 · Tienda | 16 | Pendiente |
| 6 · Web móvil y pulido | 82 | Pendiente |

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
