# INFORME · Prototipo de la app VEXBIZ

Última actualización: 11/11/2026 · **Fase 2 terminada** (Cuenta y postventa, M6). Las fases 3 a 6 siguen pendientes.

## Cómo abrirlo

- Por http (módulos ES): `python -m http.server 5173` dentro de `prototipo/` y abrir `http://localhost:5173/index.html`. Si editas un `.js` y no ves el cambio, recarga forzada (Ctrl + F5): el navegador guarda en caché los módulos.
- Con doble clic (`file://`): `index.local.html`, que carga `prototipo.local.js` (todo en un solo script). Se regenera con `python tools/build_local.py` después de tocar cualquier `.js`.
- El panel de la derecha tiene el **Índice** (las 138 pantallas, «hecha» o «pendiente»), el modo, el tema, «Reducir movimiento», **Resultado del próximo pago** y «Reiniciar datos de la demo». Para recorrer todo desde el principio: Índice → M1.01.

## Cobertura (138 pantallas)

| Módulo | Pantallas | Hechas | Estado |
|---|---|---|---|
| M0 Transversales | 5 | 5 | Fase 0 |
| M1 Acceso | 10 | 10 | Fases 0 y 1 |
| M2 Descubrir | 12 | 12 | Fase 1 |
| M3 Compra | 12 | 12 | Fase 1 |
| M4 Servicios | 9 | 0 | Fase 3 |
| M5 Academia | 10 | 0 | Fase 3 |
| **M6 Cuenta** | 27 | **27** | **Fase 2** (incluye la hoja «Acciones de la dirección» y las pantallas de flujo M6.14 y M6.16) |
| M7 Modo Tienda | 23 | 0 | Fase 5 |
| M8 Modo Técnico | 13 | 0 | Fase 4 |
| M9 Modo Empresa | 8 | 0 | Fase 6 |
| Superposiciones | 9 | 8 | Falta «Detalle del período» (Fase 5) |

El Índice muestra **74 de 138 entradas «hechas»**: cuenta por separado las hojas duplicadas de Figma (por ejemplo M3.07 y «Resumen de la compra»). Las pendientes abren una pantalla con su título y la fase en que se construye.

## Recorridos de la Fase 2 (con clics reales)

- **Postventa:** Cuenta → Pedidos → Detalle → Ayuda con el pedido → Calificar (estrellas con medios puntos y teclado) / Pedir devolución (cantidades por artículo, validación, aparece en «Devoluciones») / Abrir reclamo → Hilo del reclamo (se pueden enviar mensajes).
- **Direcciones:** lista → hoja de acciones (editar, predeterminada, quitar con «Deshacer») → pantalla de flujo con validación. La dirección predeterminada la usa el pago (M3.02).
- **Formas de pago:** agregar (con el estado «Falta: documento, banco, teléfono» → «Todo listo») y quitar con «Deshacer».
- **Seguridad:** cambio de contraseña con requisitos en vivo; verificación en dos pasos (clave, QR, código, códigos de respaldo, desactivar) que se refleja en Datos personales y Seguridad; sesiones abiertas (cerrar las otras); Eliminar cuenta con el botón apagado mientras haya bloqueos.
- **Registrar mi empresa** → M9.01 con la barra del modo Empresa; desde ahí «Cambiar de modo» ofrece «Empresa de servicio».
- **Cómo se ve VexBiz, de verdad:** el tamaño del texto (100 a 150 %) escala todo el contenido de la app, «Más contraste» refuerza bordes y textos secundarios, y «Menos movimiento» es el mismo interruptor del panel. Se guardan en este teléfono y, si no se toca nada, siguen los ajustes del sistema.
- **Ayuda:** Ayuda e información → documentos (Términos, Privacidad, Aviso legal, Trabaja como técnico…) → Contacto; WhatsApp y redes avisan «Abre el sitio de VexBiz».
- **Avisos:** «Marcar como leídos» apaga el punto de la pestaña Cuenta; cada aviso lleva a su pantalla.

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

## Errores encontrados y corregidos durante la fase

- **Ruta de Direcciones:** la fila del Índice «M6.13 ▣» (la hoja) se registraba como alias del código `M6.13`, así que abrir Direcciones abría la hoja. Corregido (la misma causa habría pasado con M7.12).
- **Valoraciones con dos decimales** («★ 4,70») desde la Fase 1: `num(x, 1)` no respetaba un decimal. Ahora sale «★ 4,7».
- `fieldError` fallaba con áreas de texto (rompía «Pedir devolución» y «Abrir reclamo» al validar).

## Conexiones añadidas respecto al Figma (para confirmar)

- **Cuenta (M6.01):** «Seguridad y contraseña» → M6.18, «Cómo se ve VexBiz» → M6.23, «Academia» → M5.01 y «Ayuda e información» → M6.24 (Figma no los conecta); «Cambiar» abre la hoja de modo.
- M6.03: cada pedido → M6.04 (con su id) y «Pagar» → M3.09. M6.04: ícono y texto «Ayuda con el pedido» → M6.05 (Huecos, punto 6); «Pedir devolución» solo en pedidos entregados.
- M6.05: «Calificar» → M6.06, «Pedir devolución» → M6.07, «Abrir reclamo» → M6.08; la nota de devolución en curso → M6.09. M6.07 → M6.09 (pestaña Devoluciones). M6.08 → M6.10. M6.10 «Ver pedido» → M6.04.
- M6.11 «Condiciones» → M6.25. M6.13: ícono de acciones → hoja; hoja «Editar» → M6.14; «+» → M6.14.
- M6.17: cada aviso → M3.09, M6.04, M6.12 o M6.09 según su contenido.
- M6.21: «Ver mis compras» → M6.03 y «Ver trabajos» → M8.01.
- M6.24: todos los documentos → M6.25 con su `doc`; los enlaces a sitios externos muestran «Abre el sitio de VexBiz».
- M6.22 «Registrar» marca la empresa como registrada y cambia a modo Empresa (la hoja de modo lo refleja).

## Textos y datos inventados

- **Etiquetas de botón y avisos** que el anexo no trae: «Marcar como leídos», «Sin leer», «Enviar calificación», «Actualizar calificación», «Cuéntanos más (opcional)», «Pedir devolución» (botón), «Motivo», «Describe el problema», «Condiciones» (ya existe), «Ver detalle», «Contactar», «Calificar» (servicios), «Guardar dirección», «Marcar en el mapa», «Guardar forma de pago», «Activar», «Copiar clave», «Copiar códigos», «Ya los guardé», «Desactivar verificación en dos pasos», «Cerrar las otras sesiones», «Ver mis compras», «Ver trabajos», «Registrar mi empresa» (botón), «Volver a los valores del sistema», «Ir a mis pedidos», «Escríbenos por WhatsApp», «Abrir el sitio de VexBiz», «Ver factura», «Seguir el envío», «Cerrar sesión» (con ícono).
- **Etiquetas de la escala de la calificación** (solo «Muy bueno» está en Figma): Muy malo, Malo, Regular, Bueno.
- **Campos:** Nombre de la dirección, Calle y número, Referencia, Código postal, Teléfono, Estado, Ciudad, Tipo de documento, Número de documento, Banco, Número de cuenta, Alias, Contraseña actual, Contraseña nueva, Nombre de la empresa, RIF o documento, Teléfono de contacto, «Escribe ELIMINAR para confirmar».
- **Documentos legales:** solo «Trabaja como técnico» está escrito en Figma; los demás muestran el aviso «Esta es una vista resumida. El texto completo está en el sitio de VexBiz.»
- **Datos:** devoluciones (#D-0031 y las que se crean), líneas y envío de los pedidos que Figma no detalla, listas de estados y ciudades, bancos, y las 3 fechas de la demo.

## Datos del Figma que se contradicen (se respetó cada pantalla y se señala)

1. **Garantía:** M6.11 dice «quedan 335 días» hasta 16/10/2027; con la fecha de la demo (16/10/2026, la de la tasa) quedan 365. La otra garantía («94 días» hasta 18/01/2027) sí cuadra. Se calcula.
2. **Calificar:** M6.06 trae Frío Total y #VX-20412, pero se llega desde M6.05 (ElectroHogar, #VX-20211). Se usa el pedido desde el que se llega.
3. **Reclamo:** M6.08 trae #VX-20301 (Herramientas Andina); abierto desde un pedido usa ese pedido. El hilo es siempre el #R-0091.
4. **Impuestos incluidos:** $ 6,26 sobre $ 39,20 equivale a 19 %, no 16 %. Se usa 19 % para que cuadre con Figma.
5. **Dirección sin mapa:** Figma marca «Sin punto en el mapa» en Oficina (M3.03) y «Falta el punto en el mapa» en Taller (M6.13). Ambas la llevan marcada.
6. **Contadores de Cuenta:** 1, 2 y 14 son los de Figma y se ajustan con lo que pasa en la demo (al pagar, «Sin pagar» baja y «En camino» sube).
7. **Pedidos:** al aprobarse el pago de la compra canónica desaparece la fila «Falta pagar #VX-20431» de Frío Total (el id coincide con el pedido de ClimaRepuestos que crea el pago).

## Diferencias respecto al Figma

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
