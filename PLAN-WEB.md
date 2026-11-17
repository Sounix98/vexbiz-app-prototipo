# Plan · Prototipo web de VEXBIZ (escritorio y web móvil)

Fuente de verdad visual: las 82 exportaciones de Figma de `web marketplace/web/` (archivo de Aníbal). El conector de Figma no está disponible, así que las medidas se toman de esas capturas a 1440 px.

## Decisión de base

La web reutiliza los datos y la lógica del prototipo de la app (`assets/js/data*.js`, `store.js`, `format.js`, `market.js`, `art.js`). Las capturas de Figma usan los mismos datos que la app (Frío Total, pedido #VX-20431, aire split de $ 389,00, Aníbal, cuentas atrás de venta), así que app y web cuentan la misma historia.

- **Carpeta `web/`:** prototipo web nuevo con router propio por código de Figma (`01.01` a `09.16`) y páginas en `web/js/pages/`. Importa los módulos de datos de la app desde `../assets/js/`, sin copiarlos.
- **Estilos:** tokens de `ds/tokens.css`, más la capa de cabecera, boletín y pie ya hecha a partir del Figma (`figma.css`), más una hoja de páginas web.
- **Web móvil:** el mismo código, que por debajo de 1024 px pasa a una columna con cabecera compacta. `web-movil/` abre esa vista. No hay exportaciones de Figma móviles, así que se adapta la composición de escritorio.
- **La web v1.9.13 con catálogo real** queda en el historial de git y en la carpeta original VEXBIZ WEB. Se reemplaza en `web/` cuando la Fase 1 esté lista.
- **Imágenes:** las fotos de producto usan las ilustraciones de `art.js`. Las fotos de héroe y de servicios (técnico, grúa, taller, aula) quedan como bloques con tono hasta tener las imágenes.

## Patrones comunes (se construyen en la Fase 1)

1. Cabecera de dos filas, etiqueta de página al centro, boletín y pie de cinco columnas.
2. Panel con barra lateral (Mi cuenta, Mis compras, Mi tienda, técnico, empresa): menú a la izquierda con el ítem activo en ámbar y «Aquí», migas y título a la derecha.
3. Tarjeta blanca de radio grande sobre fondo crema, insignias de estado con su color propio y paginación «Anterior / Página N / Siguiente».
4. Tarjeta de producto, ficha y bloque de «tiendas que lo venden».

## Fases

| Fase | Módulos | Páginas | Qué incluye |
|---|---|---|---|
| 1 | Base, 01, 02, 03 | 13 | Router, cabecera, pie, panel lateral; portada, nichos, categoría, portada de nicho, búsqueda, ficha, tiendas, tienda, carrito, checkout en 3 pasos, sala de espera |
| 2 | 05, 06 | 26 | Acceso completo (entrar, crear cuenta, verificar, país, recuperar, boletín) y Mi cuenta (tablero, datos, sesiones, seguridad, avisos, direcciones, pagos, empresa, compras, detalle, grupo, calificar, reclamos, garantías, servicios, cursos, lección, eventos, comunidad, nivel) |
| 3 | 04 | 12 | Servicio técnico, perfiles, seguros, auxilio vial, Academia, curso, foro y pregunta resuelta |
| 4 | 07, 08 | 15 | Técnico (bandeja, ejecutar, firma, oficios, tarifas, cobertura, perfil, compras, membresía) y empresa de servicio |
| 5 | 09 | 16 | Tienda: panel, pedido, documentos, productos, oferta, datos, envíos, cupones, cuentas, liquidaciones, ventas, reseñas, cómo se te ve, reclamos, importadora |
| 6 | Web móvil y pulido | 82 | Composición móvil de todas las páginas, barrido de calidad en claro y oscuro, capturas, informe |

Cada fase termina con: barrido de calidad (contraste, tamaños, zonas táctiles, errores de consola) en claro y oscuro, capturas en `capturas/web-fase-N/`, notas en `INFORME-WEB.md` y un commit pequeño.

## Reglas que se mantienen

- Correo de ejemplo en formularios: `tunombre@vexbiz.com`.
- Ámbar solo para acción y marca; los estados usan sus colores (éxito, advertencia, error, info).
- Texto de 13 px como mínimo, campos de 16 px y zonas táctiles de 44 px.
- Animaciones con el sistema de `ds/motion.css`, respetando «reducir movimiento».
- Lo que no esté en el Figma ni en los datos de la app se marca como inventado en el código y en el informe.
