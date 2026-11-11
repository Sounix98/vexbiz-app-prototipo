# INFORME · Prototipo de la app VEXBIZ

Última actualización: 11/11/2026 · **Fase 5 terminada** (Modo Tienda, M7). Solo falta la Fase 6 (Modo Empresa y pulido).

## Cómo abrirlo

- Por http (módulos ES): `python -m http.server 5173` dentro de `prototipo/` y abrir `http://localhost:5173/index.html`. Si editas un `.js` y no ves el cambio, recarga forzada (Ctrl + F5): el navegador guarda en caché los módulos.
- Con doble clic (`file://`): `index.local.html`, que carga `prototipo.local.js` (todo en un solo script). Se regenera con `python tools/build_local.py` después de tocar cualquier `.js`.
- En el panel hay dos interruptores del Modo Técnico: **Sin conexión** (arranca encendido, con «2 cambios guardados en el teléfono») y **País sin membresía** (cambia M8.12).
- El panel de la derecha tiene el **Índice** (las 138 pantallas, «hecha» o «pendiente»), el modo, el tema, «Reducir movimiento», **Resultado del próximo pago** y «Reiniciar datos de la demo». Para recorrer todo desde el principio: Índice → M1.01.

## Cobertura (138 pantallas)

| Módulo | Pantallas | Hechas | Estado |
|---|---|---|---|
| M0 Transversales | 5 | 5 | Fase 0 |
| M1 Acceso | 10 | 10 | Fases 0 y 1 |
| M2 Descubrir | 12 | 12 | Fase 1 |
| M3 Compra | 12 | 12 | Fase 1 |
| **M4 Servicios** | 9 | **9** | **Fase 3** |
| **M5 Academia** | 10 | **10** | **Fase 3** (incluye la pantalla de flujo M5.09) |
| **M6 Cuenta** | 27 | **27** | **Fase 2** (incluye la hoja «Acciones de la dirección» y las pantallas de flujo M6.14 y M6.16) |
| **M7 Modo Tienda** | 23 | **23** | **Fase 5** (incluye «Más», las pantallas de flujo M7.07 y M7.21 y la hoja «Detalle del período») |
| **M8 Modo Técnico** | 13 | **13** | **Fase 4** (incluye las dos variantes de Membresía) |
| M9 Modo Empresa | 8 | 0 | Fase 6 |
| Superposiciones | 9 | 9 | Completas |

El Índice muestra **130 de 138 entradas «hechas»**: cuenta por separado las hojas duplicadas de Figma (por ejemplo M3.07 y «Resumen de la compra»). Las pendientes abren una pantalla con su título y la fase en que se construye.

## Recorridos de la Fase 2 (con clics reales)

- **Postventa:** Cuenta → Pedidos → Detalle → Ayuda con el pedido → Calificar (estrellas con medios puntos y teclado) / Pedir devolución (cantidades por artículo, validación, aparece en «Devoluciones») / Abrir reclamo → Hilo del reclamo (se pueden enviar mensajes).
- **Direcciones:** lista → hoja de acciones (editar, predeterminada, quitar con «Deshacer») → pantalla de flujo con validación. La dirección predeterminada la usa el pago (M3.02).
- **Formas de pago:** agregar (con el estado «Falta: documento, banco, teléfono» → «Todo listo») y quitar con «Deshacer».
- **Seguridad:** cambio de contraseña con requisitos en vivo; verificación en dos pasos (clave, QR, código, códigos de respaldo, desactivar) que se refleja en Datos personales y Seguridad; sesiones abiertas (cerrar las otras); Eliminar cuenta con el botón apagado mientras haya bloqueos.
- **Registrar mi empresa** → M9.01 con la barra del modo Empresa; desde ahí «Cambiar de modo» ofrece «Empresa de servicio».
- **Cómo se ve VexBiz, de verdad:** el tamaño del texto (100 a 150 %) escala todo el contenido de la app, «Más contraste» refuerza bordes y textos secundarios, y «Menos movimiento» es el mismo interruptor del panel. Se guardan en este teléfono y, si no se toca nada, siguen los ajustes del sistema.
- **Ayuda:** Ayuda e información → documentos (Términos, Privacidad, Aviso legal, Trabaja como técnico…) → Contacto; WhatsApp y redes avisan «Abre el sitio de VexBiz».
- **Avisos:** «Marcar como leídos» apaga el punto de la pestaña Cuenta; cada aviso lleva a su pantalla.

## Recorridos de la Fase 5 (con clics reales)

- **Contestar ventas (Patrón 15):** Inicio («3 clientes quieren comprarte» con cuenta regresiva real, barra lineal y paso a error con ícono y texto bajo 60 s) → **Confirmación pendiente** (cola de 3, «1 de 3»): con «Te quedan 1 y te piden 2» el botón de confirmar las 2 unidades queda apagado y se ofrece «Ofrecer 1 unidad» (la misma propuesta que ve el comprador en la sala de espera, M3.08); al vencer el tiempo la venta «pasa a otra tienda».
- **Despachar:** Por despachar (5 pedidos, calculados) → **Pedido: preparar** (casillas por artículo, «Te deja $ 42,24» = total − comisión del 12 %) → **Despachar y facturar** (factura JPG, PNG, WebP o PDF hasta 10 MB; el botón se enciende solo cuando están el archivo, número, fecha, guía y el total facturado coincide con el del pedido; «Falta para despachar» se calcula) → Pedidos con el pedido «Despachado» y el contador de Inicio en 4. «Cargando más pedidos…» con esqueleto y carga al llegar al final de la lista.
- **Inventario:** Productos (filtros, búsqueda, existencias calculadas) → **Poner a la venta** (pantalla de flujo) → **Oferta** (publicar o pausar, estado del artículo, precio; «Anotar un ajuste» suma o resta existencias, no deja bajar de cero y el movimiento queda anotado sin poder editarse).
- **Dinero:** Ventas (comisión media y evolución mensual calculadas) → Liquidaciones → hoja **Detalle del período** (comisión del 12 % calculada) → Cuentas (cobro inmediato, abonos, agregar y quitar cuentas con validación de 20 dígitos y «Hacer principal»).
- **Más:** Reclamos y devoluciones (aceptar o rechazar el reembolso), Reseñas, Carritos y apartadas (confirmar precio y existencias; «no te alcanzan las existencias» se calcula contra el inventario), Cupones (crear, pausar, activar), Envíos (reglas con reparto comprador / tienda), Documentos (subir y enviar a verificación), Ajustes (datos de contacto y figuras), Cómo se ve mi tienda (las mejoras salen de lo que falta de verdad) e Importadora (fichas y compatibilidades, en pantalla de flujo).

## QA de la Fase 5 (412 × 892, navegador del IDE, http)

| Comprobación | Resultado |
|---|---|
| Consola | 0 errores y 0 avisos en las 24 rutas de la fase (23 pantallas y la hoja) y en los recorridos |
| Desborde horizontal | 0 en 24 rutas |
| Texto menor a 13 px | Ninguno |
| Objetivos táctiles | Todo ≥ 44 px |
| Un `<h1>` por pantalla | Cumplido (las hojas y pantallas de flujo llevan `<h2>` como título del diálogo) |
| Contraste calculado con los tokens | Sin pares nuevos (0 fallos en los pares en uso) |
| Datos calculados | «Te quedan» por pedido, artículos, «Por despachar», existencias a partir de los movimientos, comisión media y su porcentaje, neto de la liquidación, plazas, mejoras de la tienda, documentos que faltan, reparto del envío |
| Regresión | 15 rutas de las fases 0 a 4 sin errores, desbordes ni objetivos pequeños |
| Capturas | `capturas/fase-5/` (6 en claro, 1 en oscuro) |

**No verificado todavía:** rendimiento con CPU reducida 4×; lector de pantalla; `index.local.html` por `file://`; tema oscuro en todas las pantallas (Fase 6); la subida real de un archivo desde el selector del sistema (se probó asignando archivos al campo).

## Errores encontrados y corregidos durante la Fase 5

- En Inicio las secciones debajo de la primera tarjeta no se veían: tenían la clase de «revelar al hacer scroll» pero faltaba llamar a `reveal()`. Se vio en la captura, no en las pruebas de consola; corregido.
- El tamaño de un archivo pequeño se mostraba «0,0 MB»; ahora muestra KB.
- La promo «Envío gratis» mostraba un reparto de $ 0,00 / $ 0,00; ahora dice que la tienda paga el envío completo.

## Conexiones añadidas respecto al Figma, Fase 5 (para confirmar)

- M7.01: «Contestar» → M7.02; «Ver todos» → M7.03 (fundido 200); filas de pedidos → M7.04; tarjetas de ventas → M7.11; «Carritos abiertos» y «Unidades apartadas» → M7.09; «Cómo se ve mi tienda» → M7.19.
- M7.04 → M7.05 → M7.03 (fundido 350, como en Figma). M7.06 → M7.08 por producto y «Poner a la venta» → M7.07 (hoja).
- M7.11 «Ver liquidaciones» → M7.12; M7.12 → hoja de detalle; los tres segmentos de Dinero se mueven entre M7.11, M7.12 y M7.13 (Huecos, punto 1).
- «Más» → M7.10, M7.16, M7.09, M7.14, M7.15, M7.19, M7.17, M7.18, M7.20 (Figma) y «Cambiar de modo» abre la hoja.
- M7.09 «Reponer existencias» → M7.08; M7.19 «Configurar envíos» → M7.15 y «Actualizar existencias» → M7.06; M7.20 → M7.21 (ficha existente y «Nueva ficha», ambas como pantalla de flujo).

## Textos y datos inventados, Fase 5

- **Etiquetas de botón y avisos:** «Contestar», «Confirmar la venta», «Confirmar las N unidades», «Ofrecer N unidades», «No puedo venderla»; «Marcar todo empacado», «Escribir al comprador», «Imprimir etiqueta», «Subir factura», «Cambiar archivo», «Quitar archivo»; «Poner a la venta», «Anotar ajuste», «Guardar oferta»; «Ver liquidaciones», «Añadir cuenta bancaria», «Hacer principal»; «Aceptar reembolso», «Rechazar»; «Crear cupón», «Pausar», «Activar»; «Nueva regla»; «Enviar a verificación»; «Guardar teléfono»; «Nueva ficha», «Guardar ficha», «Añadir compatibilidad»; los segmentos «Por despachar / Todos», «Carritos / Apartadas», «Por resolver / Resueltos» y los filtros de Productos.
- **Campos:** Número de guía, Número de factura, Fecha de la factura, Total facturado, Precio, Existencias, Tu código, Unidades del ajuste, Código y descuento del cupón, Banco y número de cuenta, Nombre, correo y teléfono de la tienda, Nombre, marca y referencia de la ficha, Marca y modelo del equipo; los motivos de ajuste «Compra / Dañada / Otro».
- **Datos:** líneas, teléfonos, direcciones y horas de los pedidos que Figma no detalla (los totales sí cuadran con Figma), dos pedidos más que cargan al final de la lista, las ventas pendientes 2 y 3 de la cola, las unidades apartadas, la regla «Envío regional» que crea «Nueva regla», tres fichas del catálogo libres para «Poner a la venta», las descripciones de las fichas de la importadora, y el mínimo de transferencia de $ 50,00 (Figma solo dice «No llega al mínimo»).

## Datos del Figma que se contradicen, Fase 5

1. **Total neto de la liquidación 01/10 a 15/10:** Figma dice $ 3.120,40, pero con sus propias líneas (3.546,00 − 425,52 − 38,28 + 38,20 − 64,00) el total es **$ 3.056,40**; $ 3.120,40 sale si no se resta el reembolso de $ 64,00. Se calcula (3.056,40) en la lista y en la hoja.
2. **Cuenta regresiva de la venta pendiente:** Inicio dice «04:32» y Confirmación pendiente dice «01:48» para la misma venta. Las dos pantallas comparten el mismo reloj (arranca en 04:32).
3. **Contadores de «Más» y de M7.19:** Figma dice «3 activos» (cupones), «2 pendientes» (reclamos), «Falta 1» (documentos) y «4 mejoras», pero las listas traen 1 cupón activo, 1 reclamo solicitado, 2 documentos por resolver y 3 sugerencias. Se calculan desde las listas (1, 1, 2 y 2 al principio).
4. **«46 productos disponibles (3 agotados)»:** la lista de Productos tiene 1 agotado; se calcula 1 y se mantiene «46» como total de catálogo.
5. **Sugerencia «Sin regla de envío»:** Figma la muestra aunque hay 2 reglas de envío activas; aparece cuando no queda ninguna activa (pausa las dos para verla).
6. **Reseñas:** 4,8 es el promedio de la tienda; con las cifras de la distribución (31, 3, 1, 2, 0) el promedio sería 4,7. Se mantiene 4,8 como dato.
7. **Carritos abiertos «7» y unidades apartadas «2»:** son totales de catálogo; la lista de carritos muestra 3.

## Diferencias respecto al Figma, Fase 5

- «Cargando más pedidos…» carga 2 pedidos de la demo y luego dice «No hay más».
- Las fotos de producto y de la factura son placeholders; la factura subida no se muestra, solo su nombre y tamaño.
- El botón «Despachar» queda apagado hasta cumplir lo que falta; Figma muestra ese estado tal cual.

## Recorridos de la Fase 4 (con clics reales)

- **Trabajos:** lista de solicitudes con vencimiento real (`quedan 5 h`, `quedan 21 h` avanzan solos), «Rechazar» con «Deshacer», «Quitar de la lista» en la caducada, y la pestaña «Mi trabajo» (en ejecución y cerrados) → **Solicitud entrante** (barra que se vacía a velocidad constante, pasa a error con ícono y texto bajo una hora) → «Aceptar» → **Trabajo en curso**.
- **Sin conexión (Patrón 21):** el aviso «N cambios guardados en el teléfono · Se envían solos cuando vuelva la señal» entra bajando 12 px con un fundido de 300 ms (solo `transform` y `opacity`; con «Reducir movimiento» queda solo el fundido). Cada edición del parte suma un cambio; con señal pasa a «Enviando N cambios…» y luego a «Todo está al día» **sin movimiento**, y «Guardado en el teléfono» pasa a «Guardado».
- **Cerrar el trabajo:** Cerrar el trabajo (mano de obra $ 45,00 + materiales $ 28,00 que salen de las compras del trabajo = **$ 73,00**, garantía de 3 meses → «Vigente hasta el 16/01/2027», todo calculado) → **Firma del cliente** (canvas que sigue el dedo o el mouse, «Borrar firma», no deja cerrar sin firma y nombre) → Trabajos con «Trabajo cerrado» y el trabajo cerrado en «Mi trabajo».
- **Servicios:** cada servicio se pausa o se muestra con su interruptor; Mis oficios (apuntarse, quitar con «Deshacer», buscar); Cobertura y horario (radio de 5 a 100 km y un horario por día con validación de la hora final).
- **Documentos:** subir, subir de nuevo o renovar (acepta JPG, PNG, WebP y PDF hasta 10 MB; el archivo no sale del navegador); «Te faltan N documentos obligatorios» se calcula, y el sello «Verificado» del perfil exige los obligatorios verificados.
- **Perfil, Compras y Membresía:** presentación editable; «Gastado en este trabajo» suma las compras ($ 28,00 y $ 48,00); Membresía con Básico o Pro y la variante «País sin membresía».

## QA de la Fase 4 (412 × 892, navegador del IDE, http)

| Comprobación | Resultado |
|---|---|
| Consola | 0 errores y 0 avisos en las 13 rutas de la fase y en los recorridos |
| Desborde horizontal | 0 en 13 rutas |
| Texto menor a 13 px | Ninguno |
| Objetivos táctiles | Todo ≥ 44 px (también los campos de hora) |
| Un `<h1>` por pantalla | Cumplido en las 13 rutas |
| Contraste calculado con los tokens | Sin pares nuevos (0 fallos en los pares en uso) |
| Patrón 21 | El aviso usa 2 animaciones (`vx-drop-in` 300 ms: −12 px → ninguno, y `vx-fade-in` 300 ms); al sincronizar el texto cambia con 0 animaciones; con «Reducir movimiento» el desplazamiento es 0 |
| Datos calculados | Total del trabajo, vigencia de la garantía, «quedan N h», contador de cambios, documentos que faltan, gastado por trabajo |
| Regresión | 13 rutas de las fases 0 a 3 sin errores, desbordes ni objetivos pequeños |
| Capturas | `capturas/fase-4/` (5 en claro, 1 en oscuro) |

**No verificado todavía:** la firma con un dedo real en una pantalla táctil (se probó con eventos de puntero sintéticos y se comprobó que el canvas pinta); rendimiento con CPU reducida 4×; lector de pantalla; `index.local.html` por `file://`; tema oscuro en todas las pantallas (Fase 6). El primer cuadro del aviso se midió con la estructura de animaciones, no con una lectura de `opacity` en el cuadro cero.

## Errores encontrados y corregidos durante la Fase 4

- El sello «Verificado» del perfil aparecía con documentos solo «En revisión»; ahora exige que estén verificados.
- «Guardado en el teléfono» seguía igual después de volver la señal; ahora pasa a «Guardado».
- `setPointerCapture` falla con punteros sin captura; la firma sigue dibujando.

## Conexiones añadidas respecto al Figma, Fase 4 (para confirmar)

- M8.01: «Ver solicitud» → M8.02 con su id; «Continuar» (trabajo en curso) → M8.03; el ícono de campana abre la hoja «Avisos en vivo».
- M8.02 «Aceptar» → M8.03 (Figma). M8.03 «Cerrar el trabajo» → M8.04 → M8.05 → M8.01 (Huecos, punto 5) y «Compras de trabajo» → M8.11.
- M8.06 «Mis oficios» → M8.07 y «Cobertura y horario» → M8.08 (como en Figma, ahora con filas propias). M8.10 → M8.09, M8.07, M8.12, hoja de modo y «Ver mi perfil público» → M4.04 (el de Carlos Mendoza).
- M8.11: cada compra → M8.03; «Comprar repuestos» → M2.01 en modo Comprador.

## Textos y datos inventados, Fase 4

- **Estructura que el anexo no describe:** la pestaña «Mi trabajo» de M8.01 (segmentos «Solicitudes» y «Mi trabajo»), los botones «Rechazar», «Ver solicitud», «Continuar», «Quitar de la lista», «Contactar», «Aceptar», «Probar conexión» y los de M8.03 («Añadir foto del trabajo», «Compras de trabajo», «Llamar al cliente», «Cómo llegar»).
- **Campos y mensajes:** Diagnóstico, Materiales usados, Horas trabajadas, Lo que hiciste, Notas para el cliente (M8.03); Mano de obra, Materiales, Otros gastos, Garantía (M8.04); Nombre del cliente (M8.05); Radio de cobertura (M8.08); Buscar oficios; mensajes de validación; «Añadir servicio», «Apuntarme», «Quitar», «Subir», «Subir de nuevo», «Renovar», «Editar», «Ver mi perfil público», «Coordinar el pago con soporte», «Ver el trabajo», «Comprar repuestos».
- **Datos:** la solicitud #S-1091 (total $ 25,00 y notas), #S-1066, el contenido del parte de Pedro Silva, la fecha de #VX-20512, el número de trabajo #T-0412, el aviso «Sin señal» cuando no hay cambios, y el texto «VexBiz está revisando tus documentos».

## Datos del Figma que se contradicen, Fase 4

1. **«Habilitado para recibir trabajos» (M8.01)** frente a «Sin verificar» y «faltan 2 documentos obligatorios» (M8.09, M8.10) y a «Para recibir solicitudes hace falta una membresía activa» (M8.12): se mantiene cada texto en su pantalla.
2. **Aceptar la solicitud #S-1082 lleva a M8.03**, que es el trabajo de **Pedro Silva**, no el de María González (Figma conecta así las dos pantallas). La solicitud queda «Aceptada» y el trabajo en curso sigue siendo el de Pedro.
3. **Fechas:** M8.01 muestra una solicitud «Caducó sin responder» del 14/10 y la compra #VX-20512 de 15/10 con la fecha de hoy 16/10/2026; se calcula todo contra esa fecha.
4. **Horario:** Figma solo muestra la hora de Lunes, Viernes y Sábado; Martes a Jueves repiten Lunes (08:00 a 18:00) y Viernes cierra a las 17:00.

## Diferencias respecto al Figma, Fase 4

- Las horas se escriben con el selector de hora del navegador (muestra «08:00 a. m.» según el idioma del sistema).
- «Trabajo cerrado» se anuncia con un aviso breve; la confirmación grande del Patrón 16 (anillo y palomita) no se aplicó a esta pantalla.
- El archivo de un documento no se guarda ni se muestra después de subirlo; solo cambia su estado a «En revisión».

## Recorridos de la Fase 3 (con clics reales)

- **Servicios:** Servicios → Servicio técnico → Quién presta el servicio (filtro Todos / Empresas / Técnicos) → perfil de técnico o de empresa; Seguros → Aseguradora; **Auxilio vial** con filtro por necesidad, tarifas y **ubicación** (solo se pide al activar el interruptor y no se guarda ninguna coordenada; si el permiso se niega, avisa y deja el interruptor apagado) → Empresa de auxilio (la flota de 6 vehículos se suma de 4 + 2). Todo lo que se contrata «abre WhatsApp» con un aviso, porque no hay backend.
- **Academia:** Academia (filtros por área y «Sólo gratis») → Curso (temario real: 9 clases y 165 min calculados desde las lecciones; clases de muestra gratis y clases de pago bloqueadas) → Mis cursos (avance calculado: 4 de 9 = 44 %) → **Lección** (reproductor simulado que retoma en el minuto 9, materiales guardables «sin conexión», «Marcar como completada» suma +10 puntos y sube el avance a 56 %) → Mi nivel (puntos, nivel y barra recalculados).
- **Eventos:** apuntarse y cancelar el lugar recalcula las plazas («Quedan 40 de 80» pasa a 39; «Quedan 3 de 50» pasa a 4).
- **Comunidad:** búsqueda de averías en todos los foros → Foro (filtros Todas / Sin responder / Resueltas y búsqueda) → Hilo (responder y «Útil» con contador) → **Escribir pregunta** (pantalla de flujo con el límite diario, rechazo de enlaces y fotos simuladas); la pregunta publicada aparece en el foro.

## QA de la Fase 3 (412 × 892, navegador del IDE, http)

| Comprobación | Resultado |
|---|---|
| Consola | 0 errores y 0 avisos en las 22 rutas de la fase y en los recorridos |
| Desborde horizontal | 0 en 22 rutas |
| Texto menor a 13 px | Ninguno |
| Objetivos táctiles | Todo ≥ 44 px |
| Un `<h1>` por pantalla | Cumplido en las 22 rutas (los títulos internos de curso, lección, pregunta y nivel son `<h2>`) |
| Contraste calculado con los tokens | Sin pares nuevos: los estados usan los tokens ya medidos (0 fallos en los pares en uso) |
| Datos calculados | Duración y clases del curso desde las lecciones, avance por curso, plazas de eventos, nivel y porcentaje desde los puntos, flota total, tarifas de auxilio |
| Regresión | 14 rutas de las fases 0 a 2 sin errores, desbordes ni objetivos pequeños |
| Capturas | `capturas/fase-3/` (6 en claro, 1 en oscuro) |

**No verificado todavía:** el permiso de ubicación concedido en un navegador real (en el del IDE se niega: se probó el camino de error con la API real y el de éxito con la API simulada); rendimiento con CPU reducida 4×; lector de pantalla; `index.local.html` por `file://`; tema oscuro en todas las pantallas (Fase 6).

## Errores encontrados y corregidos durante la Fase 3

- Al responder una pregunta, la etiqueta de estado seguía diciendo «Sin respuesta»; ahora se actualiza.
- Antes de entregar se detectaron dos `<h1>` en cuatro pantallas de Academia (barra superior y título interno); el título interno pasó a `<h2>`.
- El temario se reordenó para que «Probar el IPM» sea la siguiente lección con 4 hechas (44 %), como en Figma.

## Conexiones añadidas respecto al Figma, Fase 3 (para confirmar)

- M4.01: «Servicios que pedí» → M6.12; M4.02: cada oficio con técnicos → M4.03 con su oficio; M4.03: empresa → M4.05 y técnico → M4.04 con su id; M4.06: «Ver aseguradora» → M4.07; M4.08: «Ver empresa» → M4.09 (Huecos, punto 6).
- M5.01 → M5.02 por curso; M5.02: lección → M5.04 y «Inscribirme» → M5.03 (o M5.04 si el curso tiene temario); M5.03 → M5.04 en la lección donde se quedó; M5.06 «Trabaja como técnico» → M6.25; M5.06 → M5.07 por foro; M5.07 → M5.08 por pregunta y «Preguntar» → M5.09; búsqueda de averías → M5.08.
- M5.04: «Lección anterior» y «Lección siguiente» (fundido de 200 ms, la pila no se rompe).

## Textos y datos inventados, Fase 3

- **Etiquetas de botón y avisos:** «Escríbenos por WhatsApp», «Escribir por WhatsApp sobre …», «Pedir ayuda», «Pedir ayuda por WhatsApp», «Cotizar», «Cotizar esta póliza», «Cotizar por WhatsApp», «Ver aseguradora», «Ver empresa», «Escríbenos si no está en la lista»; «Inscribirme», «Inscribirme gratis», «Inscribirme por $ 25», «Seguir el curso», «Continuar», «Marcar como completada», «Guardar para leer sin conexión», «Lección anterior», «Lección siguiente»; «Unirme ahora», «Apuntarme», «Cancelar mi lugar»; «Preguntar», «Publicar pregunta», «Añadir foto», «Escribir una respuesta», «Publicar respuesta», «Útil»; «Trabaja como técnico» (botón de M5.06).
- **Filtros y mensajes:** «Todos / Empresas / Técnicos», «Todas / Sin responder / Resueltas»; mensajes de validación («Todavía no puedes poner enlaces», «Escribe el título…»).
- **Datos:** las lecciones del curso salvo «Probar el IPM» (suman 165 min con 9 clases, como Figma); dos cursos más (Carga de gas, que aparece en M5.03 sin detalle en Figma, y Tableros residenciales); perfil de José Rodríguez (nivel de academia y respuestas que resolvieron); sigla, provincia y valoración de La Previsora y las descripciones de sus pólizas; contadores de «Útil». Los demás cursos no tienen temario («El temario llega pronto»).

## Datos del Figma que se contradicen, Fase 3

1. **Conteos de catálogo:** «14 disponibles» y «Climatización 7, Refrigeración 4, Electricidad 5» no coinciden con los 3 prestadores y los 4 cursos de la demo; se muestran como datos de entrada y la lista es la de la demo.
2. **Respuestas del hilo:** M5.08 dice «6 respuestas» pero muestra 2; se cuentan las que hay.
3. **Barra de nivel:** M5.10 dice 62 %, pero con los umbrales de la propia pantalla (Técnico Avanzado 1.000 y Especialista 1.700), 1.240 puntos es 34 %. «Te faltan 460» sí cuadra. Se calcula (34 %).
4. **«Nivel 4 de 8»:** la lista trae 5 niveles; se mantiene «de 8» como en Figma.
5. **Cocinas y hornos y Plomería** (M4.02) no traen conteo: se muestran con «Escríbenos por WhatsApp».

## Diferencias respecto al Figma, Fase 3

- Las fotos de curso y de técnico y el vídeo son placeholders; el reproductor simula el tiempo sin vídeo real.
- Las cámaras del foro (📷 en Figma) se muestran como ícono con «N fotos», sin emoji.
- Los horarios de los eventos dicen «hora de tu teléfono» como en Figma, pero no convierten zonas horarias.

## QA de la Fase 2 (412 × 892, navegador del IDE, http)

| Comprobación | Resultado |
|---|---|
| Consola | 0 errores y 0 avisos en las 28 rutas de la fase y en los recorridos (se capturó `error` y `unhandledrejection`) |
| Desborde horizontal | 0 en 28 rutas, y 0 en M6.01, M6.03, M2.01, M3.01 y M6.24 con el texto al 150 % |
| Texto menor a 13 px | Ninguno |
| Objetivos táctiles | Todo ≥ 44 px (los botones de ícono llegan a 44 con el `::before` del kit) |
| Contraste calculado con los tokens | **0 fallos en los 49 pares en uso** (claro y oscuro). Un par del kit falla y se evitó (ver «Tokens que faltaron») |
| Datos calculados | Contadores de Cuenta (1, 2, 14 → «últimos 17 pedidos»), gráfico de gasto por mes, vigencia de garantías contra la fecha de la demo, impuestos incluidos del pedido ($ 39,20 = $ 32,94 + $ 6,26), unidades a devolver |
| Regresión | 14 rutas de las fases 0 y 1 sin errores, desbordes ni objetivos pequeños |
| Capturas | `capturas/fase-2/` (8 en claro, 1 en oscuro) |

**No verificado todavía:** rendimiento con la CPU reducida 4×; lector de pantalla; `index.local.html` por `file://`; tema oscuro en todas las pantallas (se completa en la Fase 6); primer cuadro y estructura de animaciones de las pantallas nuevas (solo usan los patrones ya medidos en la Fase 1: push, atrás, hoja, escalonada).

## Errores encontrados y corregidos durante la Fase 2

- **Ruta de Direcciones:** la fila del Índice «M6.13 ▣» (la hoja) se registraba como alias del código `M6.13`, así que abrir Direcciones abría la hoja. Corregido (la misma causa habría pasado con M7.12).
- **Valoraciones con dos decimales** («★ 4,70») desde la Fase 1: `num(x, 1)` no respetaba un decimal. Ahora sale «★ 4,7».
- `fieldError` fallaba con áreas de texto (rompía «Pedir devolución» y «Abrir reclamo» al validar).

## Conexiones añadidas respecto al Figma, Fase 2 (para confirmar)

- **Cuenta (M6.01):** «Seguridad y contraseña» → M6.18, «Cómo se ve VexBiz» → M6.23, «Academia» → M5.01 y «Ayuda e información» → M6.24 (Figma no los conecta); «Cambiar» abre la hoja de modo.
- M6.03: cada pedido → M6.04 (con su id) y «Pagar» → M3.09. M6.04: ícono y texto «Ayuda con el pedido» → M6.05 (Huecos, punto 6); «Pedir devolución» solo en pedidos entregados.
- M6.05: «Calificar» → M6.06, «Pedir devolución» → M6.07, «Abrir reclamo» → M6.08; la nota de devolución en curso → M6.09. M6.07 → M6.09 (pestaña Devoluciones). M6.08 → M6.10. M6.10 «Ver pedido» → M6.04.
- M6.11 «Condiciones» → M6.25. M6.13: ícono de acciones → hoja; hoja «Editar» → M6.14; «+» → M6.14.
- M6.17: cada aviso → M3.09, M6.04, M6.12 o M6.09 según su contenido.
- M6.21: «Ver mis compras» → M6.03 y «Ver trabajos» → M8.01.
- M6.24: todos los documentos → M6.25 con su `doc`; los enlaces a sitios externos muestran «Abre el sitio de VexBiz».
- M6.22 «Registrar» marca la empresa como registrada y cambia a modo Empresa (la hoja de modo lo refleja).

## Textos y datos inventados, Fase 2

- **Etiquetas de botón y avisos** que el anexo no trae: «Marcar como leídos», «Sin leer», «Enviar calificación», «Actualizar calificación», «Cuéntanos más (opcional)», «Pedir devolución» (botón), «Motivo», «Describe el problema», «Condiciones» (ya existe), «Ver detalle», «Contactar», «Calificar» (servicios), «Guardar dirección», «Marcar en el mapa», «Guardar forma de pago», «Activar», «Copiar clave», «Copiar códigos», «Ya los guardé», «Desactivar verificación en dos pasos», «Cerrar las otras sesiones», «Ver mis compras», «Ver trabajos», «Registrar mi empresa» (botón), «Volver a los valores del sistema», «Ir a mis pedidos», «Escríbenos por WhatsApp», «Abrir el sitio de VexBiz», «Ver factura», «Seguir el envío», «Cerrar sesión» (con ícono).
- **Etiquetas de la escala de la calificación** (solo «Muy bueno» está en Figma): Muy malo, Malo, Regular, Bueno.
- **Campos:** Nombre de la dirección, Calle y número, Referencia, Código postal, Teléfono, Estado, Ciudad, Tipo de documento, Número de documento, Banco, Número de cuenta, Alias, Contraseña actual, Contraseña nueva, Nombre de la empresa, RIF o documento, Teléfono de contacto, «Escribe ELIMINAR para confirmar».
- **Documentos legales:** solo «Trabaja como técnico» está escrito en Figma; los demás muestran el aviso «Esta es una vista resumida. El texto completo está en el sitio de VexBiz.»
- **Datos:** devoluciones (#D-0031 y las que se crean), líneas y envío de los pedidos que Figma no detalla, listas de estados y ciudades, bancos, y las 3 fechas de la demo.

## Datos del Figma que se contradicen, Fase 2 (se respetó cada pantalla y se señala)

1. **Garantía:** M6.11 dice «quedan 335 días» hasta 16/10/2027; con la fecha de la demo (16/10/2026, la de la tasa) quedan 365. La otra garantía («94 días» hasta 18/01/2027) sí cuadra. Se calcula.
2. **Calificar:** M6.06 trae Frío Total y #VX-20412, pero se llega desde M6.05 (ElectroHogar, #VX-20211). Se usa el pedido desde el que se llega.
3. **Reclamo:** M6.08 trae #VX-20301 (Herramientas Andina); abierto desde un pedido usa ese pedido. El hilo es siempre el #R-0091.
4. **Impuestos incluidos:** $ 6,26 sobre $ 39,20 equivale a 19 %, no 16 %. Se usa 19 % para que cuadre con Figma.
5. **Dirección sin mapa:** Figma marca «Sin punto en el mapa» en Oficina (M3.03) y «Falta el punto en el mapa» en Taller (M6.13). Ambas la llevan marcada.
6. **Contadores de Cuenta:** 1, 2 y 14 son los de Figma y se ajustan con lo que pasa en la demo (al pagar, «Sin pagar» baja y «En camino» sube).
7. **Pedidos:** al aprobarse el pago de la compra canónica desaparece la fila «Falta pagar #VX-20431» de Frío Total (el id coincide con el pedido de ClimaRepuestos que crea el pago).

## Diferencias respecto al Figma, Fase 2

- **Tamaño del texto:** se implementa con `zoom` CSS sobre el contenido (pantallas, hojas, diálogos y barra): escala el texto **y** los íconos y espacios, como cuando el sistema agranda la letra, y el contenido se reacomoda. El rango (100 a 150 %) no está en el anexo; Figma solo muestra «120 %».
- «Más contraste» reasigna en `prototipo.css` roles ya existentes (`outline`, `outline-variant`, `on-surface-variant`) y no crea colores.
- **M6.21 Eliminar cuenta:** con bloqueos el botón nunca se habilita (es el estado de Figma).
- **Íconos** provisionales (ver Fase 0) y fotos como placeholders.

## Tokens que faltaron

- **WhatsApp:** el par `whatsapp` / `on-whatsapp` del kit da **4,42:1 en claro** (el mínimo es 4,5). En claro se usa `whatsapp-container` con `on-surface` (10,96:1) y en oscuro el par del kit (6,62:1). Se propone corregir el tono de `whatsapp` en claro en `tokens.css`.
- Siguen las propuestas de la Fase 1: `--vx-toast-rise: 16px`, una duración para la píldora de la barra y un rol de «descuento».

## Preguntas abiertas para Sounix

1. ¿Hay una versión del Figma posterior al 4/11? (conector en vivo sin autorizar)
2. ¿Nichos: 11 o 16? (se usa 11)
3. ¿«Reducir movimiento» como ajuste dentro de la app? (ya está en M6.23; confirma que sea así)
4. ¿Los 122 fotogramas clave de «Internal Only Canvas» se conservan?
5. ¿Impuesto del pago: 3 % o 2 %? ¿Binance Pay lleva impuesto?
6. ¿Cuál es el envío correcto de Frío Total (M3.04 o M3.05)?
7. ¿La compra de la sala de espera debe salir del carrito?
8. ¿El splash de Drive se copia a `prototipo/` para reutilizarlo en M1.01?
9. ¿Se confirman las etiquetas de botón y los textos inventados de las listas de las fases 1 y 2?
10. ¿El rango del tamaño del texto es 100 a 150 %? ¿Hace falta un valor por debajo de 100 %?
11. ¿Se confirma tomar como «hoy» de la demo el 16/10/2026?
12. ¿Se corrige el color de WhatsApp del kit en modo claro?
13. ¿La barra de nivel de M5.10 debe seguir los umbrales de la lista (34 %) o el 62 % de Figma?
14. ¿Los cursos y foros de la demo (4 cursos, 3 preguntas) bastan, o el prototipo debe traer más contenido de Academia?
15. ¿Se confirma que contratar un servicio, un seguro o un auxilio solo «abre WhatsApp» en el prototipo?
16. ¿«Aceptar» una solicitud debe abrir el trabajo del mismo cliente (cambia M8.03) o se mantiene el de Pedro Silva como en Figma?
17. ¿«Trabajo cerrado» necesita la confirmación grande (anillo y palomita) o basta el aviso breve?
18. ¿El archivo de un documento debe poder verse después de subirlo?
19. ¿El neto de la liquidación se calcula restando el reembolso ($ 3.056,40) o se mantiene $ 3.120,40?
20. ¿Qué reloj manda para la venta pendiente: 04:32 (Inicio) o 01:48 (Confirmación pendiente)?
21. ¿Los contadores de «Más» se calculan desde las listas (como ahora) o se fijan a los de Figma?
