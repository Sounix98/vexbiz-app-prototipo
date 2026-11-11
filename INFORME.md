# INFORME · Prototipo de la app VEXBIZ

Última actualización: 11/11/2026 · **Fase 1 terminada** (Acceso, Descubrir y Compra). Esperando la revisión de Sounix antes de la Fase 2.

## Cómo abrirlo

- Por http (módulos ES): `python -m http.server 5173` dentro de `prototipo/` y abrir `http://localhost:5173/index.html`.
- Con doble clic (`file://`): `index.local.html`, que carga `prototipo.local.js` (todo en un solo script). Se regenera con `python tools/build_local.py` después de tocar cualquier `.js`.
- El panel de la derecha tiene el **Índice** (las 138 pantallas, «hecha» o «pendiente»), el modo, el tema, «Reducir movimiento», **Resultado del próximo pago** (Aprobado, Rechazado o Pendiente) y «Reiniciar datos de la demo». Para recorrer el flujo desde el principio: Índice → M1.01.

## Cobertura (138 pantallas)

| Módulo | Pantallas | Hechas | Estado |
|---|---|---|---|
| M0 Transversales | 5 | 5 | Fase 0 |
| M1 Acceso | 10 | 10 | Fase 0 (arranque) y Fase 1 (el resto) |
| M2 Descubrir | 12 | 12 | Incluye las hojas M2.04 Filtros y M2.10 Otras tiendas |
| M3 Compra | 12 | 12 | Incluye la hoja M3.07 Resumen y la pantalla de flujo M3.03 |
| M4 Servicios | 9 | 0 | Fase 3 |
| M5 Academia | 10 | 0 | Fase 3 |
| M6 Cuenta | 27 | 0 | Fase 2 |
| M7 Modo Tienda | 23 | 0 | Fase 5 |
| M8 Modo Técnico | 13 | 0 | Fase 4 |
| M9 Modo Empresa | 8 | 0 | Fase 6 |
| Superposiciones | 9 | 7 | Faltan «Acciones de la dirección» (Fase 2) y «Detalle del período» (Fase 5) |

En el Índice aparecen **46 de 138 entradas «hechas»**, porque cuenta por separado las hojas duplicadas de Figma (por ejemplo M3.07 y «Resumen de la compra»). En pantallas únicas son 39 más 7 superposiciones. Las pendientes abren una pantalla con su título y la fase en que se construye.

## Recorridos que funcionan de punta a punta (con clics reales)

- **Acceso:** Arranque → consentimiento → Entrar → Segundo factor → Inicio. Variantes: Crear cuenta (hoja) → Revisa tu correo → Unirse al país (comprar, técnico o empresa); Recuperar contraseña → Contraseña nueva → Entrar; correo `…+sinconfirmar` → M1.04.
- **Comprar:** Inicio → Nicho → Ficha → Añadir al carrito (hoja) → Carrito → Entrega → Envío → Forma de pago → Resumen (hoja) → Sala de espera → Pago de la compra → Pasarela → Resultado.
  - **Débito bancario** (paso 1 datos, paso 2 clave de 8 dígitos): aprobado, rechazado y pendiente.
  - **Binance Pay:** M3.09 → M3.10 (variante con USDT) → M3.11.
  - **Transferencia:** M3.09 → M3.12 → M3.11 («Transferencia reportada», en revisión).
- **Descubrir:** Buscar con sugerencias → Resultados → Filtros y orden (conteos y resultados calculados) → Ficha → Otras tiendas → Galería; Nichos, Nicho, Categoría, Tiendas y Tienda.
- **Carrito vivo:** cantidades, quitar con «Deshacer», total del carrito, envío, impuesto del pago y total a pagar se recalculan desde los datos.

## QA de la Fase 1 (412 × 892, navegador del IDE, http)

| Comprobación | Resultado |
|---|---|
| Consola | 0 errores y 0 avisos en las 39 rutas y en los recorridos (se capturó `error` y `unhandledrejection` durante todo el recorrido) |
| Desborde horizontal | 0 en 39 rutas (se mide `scrollWidth` del contenedor de cada pantalla u hoja, no solo del documento) |
| Texto menor a 13 px | Ninguno |
| Objetivos táctiles | Todo ≥ 44 px; los botones de ícono dibujan 40 × 40 y llegan a 44 con el `::before` del kit |
| Contraste calculado con los tokens | **0 fallos en 44 pares** (22 en claro, 22 en oscuro): texto 4,5:1 (mínimo medido 5,39) y componentes 3:1 (mínimo 3,76) |
| Primer cuadro | `opacity` es exactamente `0` en push, atrás, intercambio y cambio de modo |
| Estructura del push | Exactamente 2 animaciones: `vx-move-fwd` 350 ms y `vx-fade-in` 200 ms; durante una navegación solo se animan `transform` y `opacity` |
| Reducir movimiento | `--vx-shift` = 0 y el `transform` de la entrada no cambia (comprobado en la Fase 0, sin cambios) |
| Datos calculados | Subtotal $ 568,80 → +1 taladro → $ 698,70; envío $ 8,40; 3 % del débito = $ 17,32 → total $ 594,52 (coincide con Figma); pasarela $ 457,00 + 2 % = $ 466,14 |
| Flujos | Débito (aprobado, rechazado, pendiente), Binance Pay y Transferencia, de punta a punta |
| Capturas | `capturas/fase-1/` (11 en claro y 2 en oscuro) |

**No verificado todavía:** rendimiento con la CPU reducida 4×; lector de pantalla; `index.local.html` por `file://` (se regenera, pero el panel del IDE lo abre como imagen estática); tema oscuro en todas las pantallas (solo 2 capturas; se completa en la Fase 6); escalonado y «revelar» en el primer cuadro con CPU lenta.

## Errores encontrados y corregidos durante la fase

- El router descartaba un clic si otra navegación seguía en curso y dejaba pantallas viejas en el DOM. Ahora la última navegación gana y se limpia al terminar.
- `mount()` recibía el contenedor y no el nodo que devuelve `render()`; fallaban el contador de cantidad de la ficha y otros ganchos.
- En una pestaña oculta las animaciones no corren y la navegación esperaba para siempre; la espera de animaciones tiene ahora un tope de 700 ms.
- Ids duplicados entre una hoja y la pantalla de debajo (`correo`, `clave` en M1.02 y M1.05) hacían que `aria-describedby` apuntara al campo equivocado; renombrados.
- Rejillas que crecían con su contenido y desbordaban (Carrito, Ficha, M1.10); enlaces en línea de M1.05 con zona táctil de 16 px.

## Conexiones añadidas respecto al Figma (para confirmar)

- **Acceso:** Entrar → M1.03 (o M1.04 con `+sinconfirmar`); M1.05 → M1.06; M1.06 «Ya abrí el enlace» → M1.07; M1.07 «Continuar» → M2.01, M8.01 o M6.22 según lo elegido; M1.03 y M1.04 «Usar otra cuenta» → M1.02.
- **Compra** (cadena de «Huecos», punto 3): M3.01 → M3.02 → M3.04 → M3.06 → Resumen → M3.08 → M3.09 → M3.10 / M3.12 → M3.11.
- M3.01: el aviso «Compra sin pagar» lleva a M3.09 con el botón «Pagar». M3.09: el botón de cerrar lleva a M2.01 (fundido) y «Pagar con transferencia» a M3.12.
- M3.08: «Seguir sin esperar» → M3.09 (push) y la salida automática a M3.09 (fundido) cuando todas las tiendas contestan o se acaba el tiempo.
- M3.02: «Editar» abre M6.14 (pendiente, Fase 2). M3.03: «Añadir otra dirección» y los lápices abren M6.14.
- M2.08: el ícono de carrito del encabezado lleva a M3.01; M2.01: la campana lleva a M6.17.
- M2.10: «Añadir al carrito» de otra tienda añade esa oferta (precio y tienda propios) y abre la hoja M0.05.
- Las barras de búsqueda y el ícono de carrito de la ficha apilan la pantalla con un fundido de 200 ms (tipo `smart`), para que «Volver» regrese; la galería usa tipo `fade` (350 ms).

## Textos y datos inventados

- **Etiquetas de botón y avisos** que el anexo no escribe: «Buscar en VexBiz», «Escríbenos por WhatsApp», «Ver todos», «Ver todas», «Ver técnicos» (M2.06); «Pagar» (en el aviso del carrito, M3.01); «Continuar», «Editar», «Cambiar»; «Usar esta dirección» (M3.03); «Aceptar la propuesta», «Quitar esa línea», «Seguir sin esperar» (M3.08); «Confirmar y pagar» (Resumen); «Ver mis pedidos», «Seguir comprando», «Descargar comprobante», «Compartir» (M3.11); «Reintentar el pago», «Cambiar forma de pago»; «Subir foto», «Reportar la transferencia»; «Verificar», «No me llega el código», «Usar otra cuenta», «Ya abrí el enlace», «Enviar enlace», «Guardar contraseña», «Suscribirme», «Ir al inicio».
- **Títulos de estado** de M3.11: «Pago rechazado», «Pago pendiente», «Transferencia reportada», y los textos «Estamos esperando la confirmación de tu banco» y «Tu banco rechazó el pago: «Fondos insuficientes»».
- **Etiquetas de campo:** Correo, Contraseña, Nombre completo, País, Repite la contraseña, Código de invitación (opcional), Cupón (opcional), Número de referencia del banco, Monto transferido (USD), Buscar tienda; requisitos de contraseña («8 caracteres o más», «Una letra mayúscula», «Un número»); mensajes de validación («Escribe tu correo», «Escribe un correo válido», etc.).
- **Variante Binance Pay de M3.10:** «Abre Binance, entra a Binance Pay y paga … USDT» y el botón «Ya pagué en Binance».
- **Datos:** 10 productos más (aires de LG, Midea, Daikin, Carrier y Samsung 9K; compresores scroll, inverter y de nevera) y tres precios anteriores para las «Ofertas relámpago»; envío de $ 6,00 y 2–4 días para tiendas sin dato; ciudad y conteo de varias tiendas.
- Cifras de catálogo fijas, como en Figma (no se calculan): 1.284, 642, 938… productos por nicho; 312, 86, 54, 41 por categoría; 86, 24, 41, 57 en los tipos de compresor.

## Datos del Figma que se contradicen (se respetó cada pantalla y se señala)

1. **Impuesto del pago:** M3.06 y M3.07 dicen 3 % (débito); M3.09 dice 2 %. En `data.js` están separados (`debitoPct` y `pasarela.impuestoPct`). Binance Pay: Figma no dice impuesto; se usa 0 %.
2. **Envío:** M3.04 dice «14 km · 9 kg» y $ 8,40; M3.05 dice «168 km · 38 kg» con base $ 8,00 + $ 0,05 × 168 = $ 8,40 + impuesto 16 % = $ 2,62 (suma $ 19,02, no $ 8,40). Se muestran ambos tal cual, con las líneas de M3.05 calculadas.
3. **La compra de la sala de espera** (M3.08 a M3.11) es la canónica del Figma (Frío Total y ClimaRepuestos, $ 466,14) y no el contenido del carrito de M3.01 (Frío Total y Herramientas Andina, $ 568,80). Al aprobarse el pago se crean los dos pedidos canónicos y se vacía el carrito.
4. **«7 tiendas lo venden»** (M2.10) con 4 filas; se calcula «4». Frío Total muestra 12 unidades en la ficha y 8 u. en la hoja; se respeta cada una.
5. **Conteos de resultados:** «128 publicaciones» y las marcas Samsung 24, LG 18… no suman; se calculan desde los 7 aires de la demo («7 publicaciones»).
6. **Equivalente en bolívares:** Figma muestra ≈ Bs 21.937,79 en el resumen; con la tasa 36,89486 que reproduce $ 389,00 → Bs 14.352,10 y $ 466,14 → Bs 17.198, el cálculo da Bs 21.934,73.
7. **Valoraciones** con punto (4.8) y con coma (4,8): se usa coma (es-VE). **Teléfono de Oficina** distinto en M3.03 y M6.13: se usa el de `direcciones`. **Correo** distinto en M1.04 y M1.06: se usa el escrito en Entrar o en Crear cuenta.

## Diferencias respecto al Figma

- **Íconos:** juego provisional trazado a mano (24 px, trazo 2 px); hay que sustituirlo por los SVG del kit.
- **M2.01 Inicio:** no se pusieron los 4 chips «Assist» de Figma (su texto no está en el anexo) ni texto en el carrusel (solo placeholders).
- **Patrón 18 (búsqueda):** la barra no se expande; la pantalla de búsqueda entra con fundido de 200 ms.
- **Patrón 19 (galería):** la foto no crece con FLIP; entra con fundido de 350 ms.
- **Aviso breve:** sube 16 px (como pide el catálogo) con un fotograma propio, `vx-toast-rise`; `motion.css` solo trae 12 px.
- **Insignia del carrito:** usa `md-badge`, cuyo fondo es el rol `error` del kit.
- **Fotos de producto:** todas son placeholders con ícono (el prompt no incluye imágenes).

## Tokens que faltaron

- Ninguno bloqueante. Se propone sumar al sistema `--vx-toast-rise: 16px`, una duración para el deslizamiento de la píldora de la barra y un rol de «descuento» (hoy se usa `tertiary-container`).

## Preguntas abiertas para Sounix

1. ¿Hay una versión del Figma posterior al 4/11? (conector en vivo sin autorizar)
2. ¿Nichos: 11 o 16? (se usa 11 hasta que digas otra cosa; Plomería aparece sin catálogo)
3. ¿«Reducir movimiento» también como ajuste dentro de la app (M6.23)?
4. ¿Los 122 fotogramas clave de «Internal Only Canvas» se conservan?
5. ¿Impuesto del pago: 3 % o 2 %? ¿Binance Pay lleva impuesto?
6. ¿Cuál es el envío correcto de Frío Total (M3.04 o M3.05)?
7. ¿La compra de la sala de espera debe salir del carrito (cambia los textos de M3.08 a M3.11)?
8. ¿El splash de Drive se copia a `prototipo/` para reutilizarlo en M1.01?
9. ¿Se confirman las etiquetas de botón inventadas de la lista de arriba?
10. ¿Los dos códigos de demo («código incorrecto» con `000000` en M1.03, y correo `…+sinconfirmar`) deben ir visibles en el panel?
