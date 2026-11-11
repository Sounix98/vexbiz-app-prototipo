# VEXBIZ · App móvil — Detalle de pantallas (Figma, página App)

Anexo de `vexbiz-app-contexto.md`. Para cada una de las 138 pantallas: tamaño, los textos tal como están escritos en Figma (en orden de lectura, sin repetir), los componentes del sistema de diseño que usa (con cantidad y estado) y a dónde navega. Generado del archivo `WEB FLOW.fig` subido por Sounix (aprox. 4/11/2026), sin el conector de Figma en vivo.

Cómo leerlo:

- **Textos** son contenido real de Figma. Úsalos tal cual (ortografía, mayúsculas, formato es-VE). Los textos son completos; los «…» que veas son parte del texto (por ejemplo «Escribe un mensaje…»).
- **Componentes** muestran `Familia / Propiedad=Valor` con la cantidad de instancias. `Placeholder` es un espacio de imagen o foto.
- **Variantes** son pares de estado (por ejemplo Chip Seleccionado / No) que Figma intercambia al hacer clic o hover. El prototipo debe poder mostrar ambos.
- **Va a** repite el Apéndice B del contexto. `fundido`, `push`, `hoja` y `smart` son los tipos de transición con su duración en ms.

## M0 · Transversales

### M0.03 · Cambiar de modo (hoja)
412 × 724 px · 6 íconos

**Textos:** Cambiar de modo · Comprador · Compra productos y pide servicios. · Tienda · Pedidos, productos y dinero de Frío Total. · Técnico · Tus trabajos, servicios y compras de trabajo. · Haz más con VexBiz · Registrar mi empresa de servicios

**Componentes:** —

**Va a:** —

### M0.04 · Avisos en vivo (hoja)
412 × 655 px · 2 íconos

**Textos:** Nueva compra para contestar · ahora · Aire split 12.000 BTU · 1 × $ 389,00 · quedan 14:52 · Lo que acaba de pasar · en vivo · Aire split 12.000 BTU · quedan 14:52 · 03:24 · Pedido #VX-20412 pagado · Ya puedes despacharlo. · 03:10 · Nuevo reclamo #R-0091 · Carmen D. abrió un reclamo. · 02:58 · Sonido de avisos

**Componentes:** Switch / Seleccionado=Sí, Estado=Enabled; Button / Estilo=Text, Estado=Enabled

**Va a:** —

### M0.05 · Añadido al carrito (hoja)
412 × 761 px · 1 ícono

**Textos:** Añadido al carrito · Aire split inverter 12.000 BTU · Frío Total C.A. · $ 389,00 × 1 · 3 artículos en tu carrito · $ 432,90

**Componentes:** Icon Button / Estilo=Standard, Estado=Enabled; Button / Estilo=Filled, Estado=Enabled; Button / Estilo=Text, Estado=Enabled

**Va a:** —

### M0.06 · Estados comunes
412 × 1632 px · 6 íconos

**Textos:** Estados comunes · Cargando · Vacío · Todavía no tienes pedidos · Cuando compres algo aparecerá aquí. · Error · No pudimos cargar tus pedidos · Sin conexión · No encontrado · Esto ya no está disponible · Hace falta entrar · Entra para continuar · Sin acceso a un modo · Necesitas el modo Tienda · Fin de lista · No hay más · Aviso breve

**Componentes:** Button / Estilo=Outlined, Estado=Enabled×3; Button / Estilo=Tonal, Estado=Enabled×2; Button / Estilo=Filled, Estado=Enabled; Snackbar / Variante=Simple

**Va a:** —

### M0.07 · Consentimiento de privacidad
412 × 993 px · 1 ícono

**Textos:** Tu privacidad · Lo necesario para que la app funcione (sesión, carrito y país) no se pregunta. Te pedimos permiso para análisis y publicidad. · Vista «Personalizar» · Análisis · Para saber qué se busca y qué no se encuentra. · Publicidad · Para enseñarte anuncios de lo que miraste.

**Componentes:** Button / Estilo=Filled, Estado=Enabled×3; Button / Estilo=Text, Estado=Enabled×2; Switch / Seleccionado=Sí, Estado=Enabled; Switch / Seleccionado=No, Estado=Enabled

**Va a:** —

## M1 · Acceso

### M1.02 · Entrar
412 × 759 px

**Textos:** Entrar · Inicia sesión · Con tu cuenta de VexBiz en Venezuela · ¿Olvidaste tu contraseña? · ¿Todavía no tienes cuenta en Venezuela? · Crear cuenta

**Componentes:** Form / Campo / Estado=Enabled×2; Icon Button / Estilo=Standard, Estado=Enabled; Logo / Color=Oscuro; App / Barra de acción

**Va a:** M1.08 (push 350); M1.05 (hoja 400)

### M1.05 · Crear cuenta
412 × 1019 px

**Textos:** Regístrate gratis para comprar, vender o trabajar como técnico en Venezuela. · Al crear tu cuenta aceptas los Términos y condiciones y la Política de privacidad. · ¿Ya tienes cuenta? · Entrar · Crear cuenta

**Componentes:** Form / Campo / Estado=Enabled×5; Form / Requisito / Cumplido=Sí×2; Form / Requisito / Cumplido=No; Form / Selector; App / Barra de acción; Icon Button / Estilo=Standard, Estado=Enabled

**Va a:** —

### M1.01 · Arranque  ★ inicio
412 × 892 px

**Textos:** Productos, repuestos y servicios técnicos

**Componentes:** Logo / Color=Claro; Progress Indicator / Tipo=Linear

**Va a:** ▣ Consentimiento de privacidad (fundido 150)

### M1.03 · Segundo factor
412 × 892 px · 1 ícono

**Textos:** Verificación en dos pasos · Abre tu app de autenticación y escribe el código de 6 dígitos. Cambia cada 30 segundos. · 4 · 8 · 2 · 9 · 1

**Componentes:** Button / Estilo=Text, Estado=Enabled×3; Icon Button / Estilo=Standard, Estado=Enabled; Button / Estilo=Filled, Estado=Enabled

**Va a:** M2.01 (fundido 350)

### M1.04 · Correo sin confirmar
412 × 892 px · 2 íconos

**Textos:** Confirma tu correo · Aún no has confirmado tu correo · Te enviamos el enlace hace un momento a anibal@correo.com. Revisa también la carpeta de no deseados. · Podrás pedir otro en 4 min

**Componentes:** Icon Button / Estilo=Standard, Estado=Enabled; Button / Estilo=Outlined, Estado=Disabled; Button / Estilo=Tonal, Estado=Enabled; Button / Estilo=Text, Estado=Enabled; Button / Estilo=Filled, Estado=Enabled

**Va a:** M2.01 (fundido 350)

### M1.06 · Revisa tu correo
412 × 892 px · 2 íconos

**Textos:** Revisa tu correo · anibal.lejarazu@correo.com · 1 · Abre el enlace que te enviamos. · 2 · Elige qué vienes a hacer: comprar, trabajar como técnico o registrar tu empresa. · 3 · Hasta que no confirmes tu correo no podrás entrar. · Tu código de invitación quedó asociado.

**Componentes:** Icon Button / Estilo=Standard, Estado=Enabled; Button / Estilo=Text, Estado=Enabled; Button / Estilo=Filled, Estado=Enabled

**Va a:** M1.02 (fundido 350)

### M1.07 · Unirse al país
412 × 892 px · 3 íconos

**Textos:** ¿Qué vienes a hacer en VexBiz? · Comprar · Productos, repuestos y suministros de todo el catálogo. · Trabajar como técnico · Recibe solicitudes de instalación y reparación en tu zona. · Elegiste trabajar como técnico · Registrar mi empresa · Vende, ofrece servicios o da de alta a tu equipo.

**Componentes:** Radio Button / Seleccionado=No, Estado=Enabled×2; Icon Button / Estilo=Standard, Estado=Enabled; Radio Button / Seleccionado=Sí, Estado=Enabled; Button / Estilo=Filled, Estado=Enabled

**Va a:** M2.01 (fundido 350)

### M1.08 · Recuperar contraseña
412 × 892 px

**Textos:** Recuperar contraseña · ¿Olvidaste tu contraseña? · Escribe tu correo y te enviamos un enlace para crear una nueva.

**Componentes:** Icon Button / Estilo=Standard, Estado=Enabled; Form / Campo / Estado=Enabled; Button / Estilo=Filled, Estado=Enabled; Button / Estilo=Text, Estado=Enabled

**Va a:** M1.09 (push 350)

### M1.09 · Contraseña nueva
412 × 892 px · 1 ícono

**Textos:** Contraseña nueva · Crea tu contraseña nueva · Al guardarla se cerrarán tus sesiones abiertas en otros dispositivos.

**Componentes:** Form / Requisito / Cumplido=Sí×2; Icon Button / Estilo=Standard, Estado=Enabled; Form / Campo / Estado=Enabled; Form / Requisito / Cumplido=No; Button / Estilo=Filled, Estado=Disabled

**Va a:** M1.02 (fundido 350)

### M1.10 · Boletín
412 × 892 px · 1 ícono

**Textos:** Boletín · Ya estás suscrito al boletín · Te escribiremos con ofertas y novedades una vez por semana. · Si llegas desde Ayuda o el enlace falla: · Suscríbete al boletín · Ofertas, cupones y novedades. Una vez por semana, sin más. · Sin correo basura. Puedes darte de baja cuando quieras.

**Componentes:** Button / Estilo=Filled, Estado=Enabled×2; Icon Button / Estilo=Standard, Estado=Enabled; Form / Campo / Estado=Enabled

**Va a:** M2.01 (fundido 350)

## M2 · Descubrir

### M2.01 · Inicio  ★ inicio
412 × 2656 px · 7 íconos

**Textos:** Nichos · Ofertas relámpago · Termina en 02:14:36 · Más vendidos · Servicios · TÉCNICOS CERTIFICADOS · Instalación y reparación · AUXILIO VIAL 24/7 · Grúa, batería y cerrajería · SEGUROS · Protege tu vehículo · Tiendas destacadas · Frío Total C.A. · 4.8 · Herramientas Andina · 4.7 · Repuestos Express · 4.9 · ¿Te ayudamos?

**Componentes:** Product Card / Tamaño=Móvil, Estado=Normal×6; Placeholder×5; Niche Tile×5; Chip / Tipo=Assist, Estado=Enabled×4; Button / Estilo=Text, Estado=Enabled×4; Button / Estilo=Filled, Estado=Enabled×3; Avatar / Tipo=Iniciales, Tamaño=L×3; List Item / Inicio=Ícono, Líneas=1×3; App / Cabecera Inicio; App / Barra Comprador / Activa=Inicio

**Va a:** M2.06 (push 350); M2.05 (push 350); M2.03 (push 350); M2.08 (push 350); M4.03 (push 350); M4.08 (push 350); M4.06 (push 350); M2.11 (push 350); M2.12 (push 350)

### M2.03 · Resultados
412 × 1662 px

**Textos:** Resultados para «aire split» · en Climatización · 128 publicaciones · Quienes buscaron esto compraron

**Componentes:** Product Card / Tamaño=Móvil, Estado=Normal×7; Chip / Tipo=Input, Estado=Selected×2; Button / Estilo=Tonal, Estado=Enabled; Icon Button / Estilo=Standard, Estado=Enabled; Search Bar / Estado=Enabled; App / Barra Comprador / Activa=Explorar

**Va a:** ▣ Filtros y orden (fundido 150); M2.08 (push 350); M2.02 (smart 300)

### M2.08 · Ficha de producto
412 × 1813 px · 4 íconos

**Textos:** Climatización · Aires split · Aire acondicionado split inverter 12.000 BTU · 220V · Samsung · Ref. AR12TVHZ · GTIN 8801643562371 · La mejor oferta · Nuevo · $ 486,25 · -20 % · Oferta hasta el 20/10 · $ 389,00 · ≈ Bs 14.352,10 · tasa del 15/10 · Disponible · 12 unidades · Precio y existencias confirmados por la tienda · Cantidad · 1 · Otras 3 tiendas, desde $ 372,00 · Quienes lo vieron también compraron

**Componentes:** Icon Button / Estilo=Standard, Estado=Enabled×5; List Item / Inicio=Ícono, Líneas=1×3; Product Card / Tamaño=Móvil, Estado=Normal×3; Placeholder; Store Row; Badge / Tamaño=Large; App / Barra de acción

**Va a:** M2.09 (fundido 350); M2.12 (push 350); ▣ Otras tiendas que lo venden (fundido 150); M3.01 (push 350)

### M2.02 · Buscar
412 × 690 px · 10 íconos

**Textos:** compre · En Climatización · Compresor rotativo 12.000 BTU R410A · 7 tiendas · Compresor scroll 24.000 BTU · 3 tiendas · GMCC · 42 productos · compresor de nevera · 128 resultados · compresor 12000 btu · 86 resultados · Búsquedas recientes · aire split 12000 · capacitor 35 uf · Climatización · Refrigeración · Electricidad · Automotriz · Herramientas

**Componentes:** Icon Button / Estilo=Standard, Estado=Enabled; Button / Estilo=Text, Estado=Enabled

**Va a:** M2.06 (push 350); M2.03 (push 350)

### M2.04 · Filtros y orden (hoja)
412 × 1204 px · 6 íconos

**Textos:** Filtros y orden · Ordenar por · Más relevantes · Menor precio · Mayor precio · Aplicados · Samsung · Nuevo · Marca · 1 · 24 · LG · 18 · Midea · 15 · Daikin · 9 · Carrier · 7 · Condición · 1 · Sólo disponibles · Precio (USD)

**Componentes:** Checkbox / Valor=Unchecked, Estado=Enabled×4; Button / Estilo=Text, Estado=Enabled×2; Radio Button / Seleccionado=No, Estado=Enabled×2; Form / Campo / Estado=Enabled×2; Icon Button / Estilo=Standard, Estado=Enabled; Radio Button / Seleccionado=Sí, Estado=Enabled; Checkbox / Valor=Checked, Estado=Enabled; Switch / Seleccionado=Sí, Estado=Enabled; Button / Estilo=Filled, Estado=Enabled

**Va a:** —

### M2.05 · Nichos
412 × 1070 px · 2 íconos

**Textos:** Climatización · Aires, repuestos y herramientas de refrigeración. · 1.284 productos · Con servicio técnico · Refrigeración comercial · Neveras, cavas y equipos para negocios. · 642 productos · Electrodomésticos · Línea blanca y sus repuestos. · 938 productos · Electricidad · Cableado, breakers e iluminación. · 2.110 productos · Energía solar · Paneles, inversores y baterías. · 214 productos · Plomería · Tuberías, bombas y grifería. · Todavía sin catálogo · Ver todas las tiendas · Explorar

**Componentes:** Search Bar / Estado=Enabled; Form / Campo / Estado=Enabled; Icon Button / Estilo=Standard, Estado=Enabled; App / Barra Comprador / Activa=Explorar

**Va a:** M2.02 (smart 300); M2.06 (push 350); M2.11 (push 350); M6.17 (push 350)

### M2.06 · Nicho
412 × 1426 px · 1 ícono

**Textos:** Aires acondicionados, repuestos y herramientas de refrigeración. · Requiere instalación técnica · Aires split · 312 · Compresores · 86 · Tarjetas · 54 · Controles · 41 · Destacados · 1.284 productos · Climatización

**Componentes:** Product Card / Tamaño=Móvil, Estado=Normal×5; Icon Button / Estilo=Standard, Estado=Enabled×2; Placeholder; Button / Estilo=Text, Estado=Enabled; Button / Estilo=Tonal, Estado=Enabled; App / Barra Comprador / Activa=Explorar

**Va a:** M4.03 (push 350); M2.07 (push 350); M2.08 (push 350); ▣ Filtros y orden (fundido 150); M2.02 (smart 300)

### M2.07 · Categoría
412 × 1244 px · 4 íconos

**Textos:** Climatización › · Repuestos de A/A · Compresores rotativos y scroll para equipos split y de ventana, con su refrigerante y capacidad. Elige el que coincide con la placa de tu equipo… · Rotativos · 86 · Scroll · 24 · Inverter · 41 · Para nevera · 57 · Samsung · Nuevo · Compresores

**Componentes:** Product Card / Tamaño=Móvil, Estado=Normal×4; Button / Estilo=Text, Estado=Enabled; Button / Estilo=Tonal, Estado=Enabled; Icon Button / Estilo=Standard, Estado=Enabled; App / Barra Comprador / Activa=Explorar

**Va a:** ▣ Filtros y orden (fundido 150); M2.08 (push 350)

### M2.09 · Galería
412 × 892 px

**Textos:** 2 de 5

**Componentes:** Icon Button / Estilo=Standard, Estado=Enabled; Placeholder

**Va a:** —

### M2.10 · Otras tiendas que lo venden (hoja)
412 × 1038 px · 4 íconos

**Textos:** 7 tiendas lo venden · Aire split inverter 12.000 BTU · CR · ClimaRepuestos · ★ 4.7 · Valencia · Nuevo · Mejor precio · $ 372,00 · Disponible · 12 u. · FT · Frío Total C.A. · ★ 4.8 · Caracas · La que estás viendo · $ 389,00 · $ 486,25 · Disponible · 8 u. · EH · ElectroHogar · ★ 4.4 · Maracay · Caja abierta · $ 395,00 · Últimas 2 unidades · RS · Refrigeración El Sol · ★ 4.2 · Mérida · $ 410,00 · Agotado

**Componentes:** Button / Estilo=Outlined, Estado=Enabled×4; Button / Estilo=Filled, Estado=Enabled×3; Icon Button / Estilo=Standard, Estado=Enabled; Button / Estilo=Filled, Estado=Disabled

**Va a:** —

### M2.11 · Tiendas
412 × 782 px · 10 íconos

**Textos:** Tiendas · Todas · Climatización · Electrodomésticos · Electricidad · FT · Frío Total C.A. · Climatización · Caracas · ★ 4.8 · 46 productos · CR · ClimaRepuestos · Climatización · Valencia · ★ 4.7 · 128 productos · EH · ElectroHogar Express · Electrodomésticos · Barquisimeto · ★ 4.6 · 212 productos · VC · Voltio Center · Electricidad · Caracas · ★ 4.9 · 534 productos · RS · Refrigeración El Sol · Refrigeración · Maracay · ★ 4.2 · 37 productos

**Componentes:** Icon Button / Estilo=Standard, Estado=Enabled; Form / Campo / Estado=Enabled; App / Barra Comprador / Activa=Explorar

**Va a:** M2.12 (push 350)

### M2.12 · Tienda
412 × 1274 px · 1 ícono

**Textos:** FT · Frío Total C.A. · Verificada por VexBiz · Climatización · Caracas, D. Capital · ★ 4,8 · 46 productos publicados

**Componentes:** Product Card / Tamaño=Móvil, Estado=Normal×4; Icon Button / Estilo=Standard, Estado=Enabled×2; Placeholder; Button / Estilo=Tonal, Estado=Enabled; App / Barra Comprador / Activa=Explorar

**Va a:** ▣ Filtros y orden (fundido 150); M2.08 (push 350); M2.02 (smart 300)

## M3 · Compra

### M3.01 · Carrito
412 × 1303 px · 7 íconos

**Textos:** Compra #VX-20418 sin pagar · $ 129,90 · hasta hoy 18:30 · El precio de 1 artículo cambió desde que lo añadiste. · Frío Total C.A. · Aire split inverter 12.000 BTU · $ 389,00 c/u · 1 · $ 389,00 · Control remoto universal · $ 12,50 c/u · Cambió de precio · 2 · $ 25,00 · La tienda confirmó precio y existencias hace 4 min · Subtotal de la tienda · $ 414,00 · Herramientas Andina · Taladro percutor inalámbrico 18V · $ 129,90 c/u · $ 129,90 · Juego de llaves 12 piezas · $ 24,90 c/u · $ 24,90 · La tienda confirmó precio y existencias hace 12 min · $ 154,80 · Tu carrito · 4 artículos en 2 tiendas

**Componentes:** Icon Button / Estilo=Standard, Estado=Enabled×12; Divider / Orientación=Horizontal×6; Placeholder×4; Button / Estilo=Filled, Estado=Enabled; App / Barra de acción; App / Barra Comprador / Activa=Carrito

**Va a:** M3.09 (push 350)

### M3.02 · Pagar · Entrega
412 × 814 px · 2 íconos

**Textos:** Pagar · Casa · Predeterminada · Av. Bolívar Norte, Res. Los Samanes, Torre B, Apto 4-2 · Frente a la plaza · Valencia, Carabobo · CP 2001 · 0414-555 1234 · Aquí te llegará el pedido · La dirección también va en la factura, aunque retires en la tienda.

**Componentes:** Button / Estilo=Text, Estado=Enabled×2; Icon Button / Estilo=Standard, Estado=Enabled; Checkout Steps / Paso=1; Placeholder; App / Barra de acción

**Va a:** M3.03 (hoja 400)

### M3.04 · Pagar · Envío
412 × 1030 px · 6 íconos

**Textos:** Casa · Av. Bolívar Norte, Valencia · Cada tienda despacha su paquete por separado. · Frío Total C.A. · 3 unidades · Aire split inverter 12.000 BTU · 1 × $ 389,00 · $ 389,00 · Control remoto universal · 2 × $ 12,50 · $ 25,00 · Envío $ 8,40 · 14 km · 9 kg · 1–2 días · Aproximado · Prefiero retirarlo en la tienda · Herramientas Andina · 2 unidades · Taladro percutor 18V · 1 × $ 129,90 · $ 129,90 · Juego de llaves 12 piezas · 1 × $ 24,90 · $ 24,90 · Esta tienda no te cobra el envío · 1–3 días · Pagar

**Componentes:** Placeholder×4; Button / Estilo=Text, Estado=Enabled×3; Divider / Orientación=Horizontal×2; Checkout Steps / Paso=2; Switch / Seleccionado=No, Estado=Enabled; Icon Button / Estilo=Standard, Estado=Enabled; App / Barra de acción

**Va a:** M3.03 (hoja 400); M3.05 (push 350)

### M3.06 · Pagar · Forma de pago
412 × 946 px · 4 íconos

**Textos:** Un solo pago para toda la compra, aunque sean varias tiendas. · Débito bancario · Pagas con la clave que te envía tu banco. · USD · Impuesto del pago: 3 % · Binance Pay · Pagas desde tu cuenta de Binance. · USDT · Transferencia a VexBiz · Transfieres y reportas el pago. · USD · Sin impuesto · Tus datos para el débito · Banesco · Personal · V-12.***.678 · 0414-***-1234 · Mercantil · V-12.***.678 · 0412-***-9876 · Tu banco te enviará una clave de 8 dígitos por SMS al pagar. · Pagar

**Componentes:** Radio Button / Seleccionado=No, Estado=Enabled×3; Radio Button / Seleccionado=Sí, Estado=Enabled×2; Divider / Orientación=Horizontal×2; Checkout Steps / Paso=3; Button / Estilo=Text, Estado=Enabled; Form / Campo / Estado=Enabled; Icon Button / Estilo=Standard, Estado=Enabled; App / Barra de acción

**Va a:** —

### M3.07 · Resumen de la compra (hoja)
412 × 946 px · 7 íconos

**Textos:** Pagar · Un solo pago para toda la compra, aunque sean varias tiendas. · Débito bancario · Pagas con la clave que te envía tu banco. · USD · Impuesto del pago: 3 % · Binance Pay · Pagas desde tu cuenta de Binance. · USDT · Transferencia a VexBiz · Transfieres y reportas el pago. · USD · Sin impuesto · Tus datos para el débito · Banesco · Personal · V-12.***.678 · 0414-***-1234 · Mercantil · V-12.***.678 · 0412-***-9876 · Tu banco te enviará una clave de 8 dígitos por SMS al pagar. · Resumen de la compra · 4 artículos · Casa · Av. Bolívar Norte, Valencia · Débito bancario · Banesco · Personal · Subtotal · $ 568,80 · Envío · Frío Total C.A. · $ 8,40 · Envío · Herramientas Andina · No te lo cobran · Impuesto del pago (3 %) · $ 17,32 · Cupón: VEXBIZ10 · se aplica al confirmar · Total a pagar · $ 594,52 · Precios y envío con impuestos incluidos · ≈ Bs 21.937,79 referencial · Se crean 2 pedidos, uno por tienda, con un solo pago.

**Componentes:** Divider / Orientación=Horizontal×3; Radio Button / Seleccionado=No, Estado=Enabled×3; Icon Button / Estilo=Standard, Estado=Enabled×2; Radio Button / Seleccionado=Sí, Estado=Enabled×2; Checkout Steps / Paso=3; Button / Estilo=Text, Estado=Enabled; Form / Campo / Estado=Enabled; App / Barra de acción; Button / Estilo=Filled, Estado=Enabled

**Va a:** —

### M3.03 · Elegir o crear dirección
412 × 516 px · 2 íconos

**Textos:** ¿Dónde lo recibes? · Casa · Predeterminada · Av. Bolívar Norte, Res. Los Samanes, Torre B, Apto 4-2 · Valencia, Carabobo 2001 · 0414 555 1234 · Oficina · C.C. Metrópolis, Nivel 2, Local 214 · Valencia, Carabobo · 0241 555 0101 · Sin punto en el mapa · Añadir otra dirección

**Componentes:** Icon Button / Estilo=Standard, Estado=Enabled×3; Radio Button / Seleccionado=Sí, Estado=Enabled; Radio Button / Seleccionado=No, Estado=Enabled; Button / Estilo=Filled, Estado=Enabled

**Va a:** —

### M3.05 · Ruta del envío
412 × 867 px

**Textos:** Ruta desde Frío Total · 168 km · por carretera · 142 km · en línea recta · 2 h 10 min · estimados · Cómo se calculó · Tramo · Caracas → Valencia · Vehículo · Camioneta de carga · Bultos · peso · 2 · 38 kg · Importe base · $ 8,00 · Por kilómetro · $ 0,05 × 168 · Impuesto · $ 2,62 · El mapa es orientativo. El importe del envío es el que ves en el paso anterior.

**Componentes:** Icon Button / Estilo=Standard, Estado=Enabled; Placeholder

**Va a:** —

### M3.08 · Sala de espera
412 × 926 px · 4 íconos

**Textos:** Queda 3:42 · 2 tiendas tienen que contestar · Hay algo que decidir · Tarjeta electrónica condensadora split 12K · Pediste 2 × $ 64,00 a ClimaRepuestos · La tienda propone: 1 unidad a $ 64,00 · Pagarías $ 64,00 menos · Te quedan 3:42 · Si no contestas a tiempo, esa línea sale de la compra. · Aire split inverter 12.000 BTU · 1 × $ 389,00 · Frío Total C.A. · Confirmada · Capacitor de marcha 35+5 µF · 2 × $ 9,50 · Frío Total C.A. · Esperando a que la tienda confirme · Motor ventilador 18 W · 1 × $ 32,00 · Refrigeración El Sol · No se pudo conseguir · Actualizado hace 8 s · Te avisamos aquí en cuanto contesten. Puedes salir y volver. · Confirmando tu compra

**Componentes:** Button / Estilo=Filled, Estado=Enabled; Button / Estilo=Outlined, Estado=Enabled; Button / Estilo=Text, Estado=Enabled; Icon Button / Estilo=Standard, Estado=Enabled

**Va a:** M3.09 (fundido 350); M3.09 (push 350)

### M3.09 · Pago de la compra
412 × 855 px · 7 íconos

**Textos:** Finalizar pago · Falta pagar · Tu compra · 2 pedidos · Paga antes de las 18:00. Después se liberan las existencias. · Tu banco rechazó el último intento: «Fondos insuficientes». Ver detalle · Débito bancario · Clave de 8 dígitos por SMS de tu banco. · Binance Pay · Paga con la app de Binance. · Frío Total C.A. · #VX-20430 · 1 artículo · $ 389,00 · ClimaRepuestos · #VX-20431 · 2 artículos · $ 68,00 · Pedidos · $ 457,00 · Impuesto del pago (2 %) · $ 9,14 · Total · $ 466,14

**Componentes:** Icon Button / Estilo=Standard, Estado=Enabled; Button / Estilo=Text, Estado=Enabled; Button / Estilo=Filled, Estado=Enabled

**Va a:** M3.10 (push 350); M2.01 (fundido 350)

### M3.10 · Pagar con la pasarela
412 × 656 px · 1 ícono

**Textos:** Pagar $ 466,14 · $ 466,14 · ≈ Bs 17.198 · tasa del 16/10 · 2 pedidos · Paso 2 · Clave · Tu banco envió una clave de 8 dígitos al 0414 ···1234 · 3 · 8 · 1 · 0 · 7 · 2 · Intento #SP-88123 en SPIDI · Pago procesado por SPIDI

**Componentes:** Icon Button / Estilo=Standard, Estado=Enabled; Segmented Button / Segmento / Posición=Start, Seleccionado=Sí; Segmented Button / Segmento / Posición=End, Seleccionado=No; Button / Estilo=Text, Estado=Enabled; Button / Estilo=Filled, Estado=Enabled

**Va a:** M3.11 (fundido 350)

### M3.11 · Resultado del pago
412 × 735 px · 1 ícono

**Textos:** Pago aprobado · Importe · $ 466,14 · ≈ Bs 17.198 · tasa del 16/10 · Método · Débito · 0414 ···1234 · Transacción SP-88123 · #VX-20430 · Frío Total C.A. · #VX-20431 · ClimaRepuestos

**Componentes:** Button / Estilo=Text, Estado=Enabled×2; Button / Estilo=Outlined, Estado=Enabled; Button / Estilo=Filled, Estado=Enabled

**Va a:** M6.03 (fundido 200); M2.01 (fundido 200)

### M3.12 · Reportar una transferencia
412 × 1122 px · 1 ícono

**Textos:** A quién se paga · Frío Total C.A. · Pedido #VX-20430 · $ 389,00 · ClimaRepuestos · Pedido #VX-20431 · $ 68,00 · Banco · Banco de Venezuela · Cuenta · 0102 0123 4500 0123 4567 · Titular · Frío Total Servicios C.A. · Documento · J-41234567-8 · Monto · $ 389,00 · ≈ Bs 14.352 · Referencia · VX-20430 · Ya transferí · Foto del comprobante · Reportar no es pagar: la compra queda en revisión hasta que se confirme el dinero. · Transferencia bancaria

**Componentes:** Icon Button / Estilo=Standard, Estado=Enabled×7; Form / Campo / Estado=Enabled×2; Radio Button / Seleccionado=Sí, Estado=Enabled; Radio Button / Seleccionado=No, Estado=Enabled; Button / Estilo=Tonal, Estado=Enabled; Button / Estilo=Outlined, Estado=Enabled; Button / Estilo=Filled, Estado=Enabled

**Va a:** M3.11 (fundido 350)

## M4 · Servicios

### M4.01 · Servicios  ★ inicio
412 × 892 px · 10 íconos

**Textos:** Servicios · Auxilio vial · ¿Te quedaste en la vía? · 6 empresas · 24/7 · Servicio técnico · Reparación e instalación por oficio · 48 técnicos y empresas · Seguros · Pólizas y cotizaciones · 3 aseguradoras · Servicios que pedí · VexBiz atiende por WhatsApp de lunes a sábado, 8:00 a 18:00.

**Componentes:** Icon Button / Estilo=Standard, Estado=Enabled; App / Barra Comprador / Activa=Inicio

**Va a:** M4.08 (push 350); M4.02 (push 350); M4.06 (push 350); M6.12 (push 350)

### M4.02 · Servicio técnico
412 × 892 px · 14 íconos

**Textos:** Servicio técnico · Elige qué necesitas reparar o instalar. · Aire acondicionado · 14 disponibles · Refrigeración comercial · 6 disponibles · Lavadoras y secadoras · 9 disponibles · Neveras · 11 disponibles · Electricidad residencial · 22 disponibles · Cocinas y hornos · Escríbenos por WhatsApp · Plomería · Atendemos de lunes a sábado, 8:00 a 18:00.

**Componentes:** Icon Button / Estilo=Standard, Estado=Enabled; Botón WhatsApp / Estilo=Contorno

**Va a:** M4.03 (push 350)

### M4.03 · Quién presta el servicio
412 × 892 px · 3 íconos

**Textos:** Aire acondicionado · 14 disponibles · Una empresa responde con su equipo. Un técnico trabaja por su cuenta. · CP · ClimaPro Servicios · Empresa de servicio técnico · Instalación y mantenimiento con equipo propio y garantía. · Valencia, Carabobo · Instalación · Mantenimiento · Carga de gas · +2 · ★ 4,9 · CM · Carlos Mendoza · Técnico independiente · Técnico en refrigeración con 12 años en split e inverter. · 25 km alrededor de Valencia · 12 años · Reparación · Inverter · ★ 4,8 · Disponible ahora · Desde $ 25 · JR · José Rodríguez · Reparo tarjetas electrónicas y fugas. · 15 km alrededor de Maracay · 6 años · Tarjetas · Todavía sin valoraciones · No disponible ahora · Desde $ 20 · Estos son todos los que hay hoy.

**Componentes:** Icon Button / Estilo=Standard, Estado=Enabled; Segmented Button / Segmento / Posición=Start, Seleccionado=Sí; Segmented Button / Segmento / Posición=Middle, Seleccionado=No; Segmented Button / Segmento / Posición=End, Seleccionado=No; Botón WhatsApp / Estilo=Relleno

**Va a:** M4.05 (push 350); M4.04 (push 350)

### M4.04 · Perfil de técnico
412 × 892 px · 2 íconos

**Textos:** Carlos Mendoza · CM · Verificado por VexBiz · Técnico independiente · ★ 4,8 · Valencia · Disponible ahora · Experiencia · 12 años · Cobertura · 25 km alrededor de Valencia · Oficios · 3 · Desde · $ 25 · Nivel de academia · 4 · Técnico fundador · Sí · Respuestas que resolvieron · 18 · Qué hace · Aire acondicionado · Refrigeración comercial · Neveras · Sobre Carlos · Trabajo con equipos split, inverter y de ventana desde 2014. Instalaciones limpias, con vacío y prueba. · Cómo se contrata · VexBiz recibe tu mensaje y coordina con el técnico. · Atendemos de lunes a sábado, 8:00 a 18:00.

**Componentes:** Icon Button / Estilo=Standard, Estado=Enabled×2; Botón WhatsApp / Estilo=Relleno

**Va a:** —

### M4.05 · Perfil de empresa de servicio
412 × 892 px · 6 íconos

**Textos:** ClimaPro Servicios · CP · Verificado por VexBiz · Empresa de servicio técnico · ★ 4,9 · Valencia · Provincia · Carabobo · Servicios · 5 · Oficios · 2 · Servicios que presta · Instalación de aire split · Mantenimiento preventivo · Carga de gas R410A · Reparación de tarjetas · Limpieza de ductos · Climatización · Refrigeración comercial · Cómo se contrata · VexBiz recibe tu mensaje y coordina con la empresa. · Atendemos de lunes a sábado, 8:00 a 18:00.

**Componentes:** Icon Button / Estilo=Standard, Estado=Enabled×2; Botón WhatsApp / Estilo=Relleno

**Va a:** —

### M4.06 · Seguros
412 × 892 px · 10 íconos

**Textos:** Seguros · Estas aseguradoras cotizan directo contigo. · Mercantil Seguros · Valencia · Vehículo · Cobertura amplia · $ 340 USD al año · Salud individual · $ 410 USD al año · Seguros La Previsora · Caracas · Vehículo · Responsabilidad civil · $ 85 USD al año · Hogar básico · $ 120 USD al año · ¿Necesitas otro seguro? · Local comercial · Mercancía en tránsito · Accidentes personales · Atendemos de lunes a sábado, 8:00 a 18:00.

**Componentes:** Botón WhatsApp / Estilo=Relleno×2; Button / Estilo=Outlined, Estado=Enabled×2; Icon Button / Estilo=Standard, Estado=Enabled; Button / Estilo=Text, Estado=Enabled

**Va a:** M4.07 (push 350)

### M4.07 · Aseguradora
412 × 892 px · 1 ícono

**Textos:** Mercantil Seguros · MS · Verificado por VexBiz · Aseguradora · ★ 4,6 · Valencia · Provincia · Carabobo · Pólizas · 4 · Pólizas que ofrece · Vehículo · Cobertura amplia · $ 340 USD al año · Pérdida total y parcial, robo, responsabilidad civil y asistencia en carretera 24 h. · Salud individual · $ 410 USD al año · Hospitalización, cirugía y emergencias hasta $ 15.000.

**Componentes:** Button / Estilo=Text, Estado=Enabled×4; Icon Button / Estilo=Standard, Estado=Enabled×2; Botón WhatsApp / Estilo=Relleno; Button / Estilo=Outlined, Estado=Enabled

**Va a:** —

### M4.08 · Auxilio vial
412 × 892 px · 8 íconos

**Textos:** Auxilio vial · ¿Necesitas ayuda ahora? · Atendemos todos los días, 24 horas. · Añadir mi ubicación al mensaje · Envía un enlace al punto del mapa · ¿Qué necesitas? · Remolque · Arranque de batería · Cambio de neumático · Combustible · Cerrajería · Grúas El Rápido · Caracas · Remolque liviano · $ 30 USD + $ 1,20 USD/km · hasta 80 km · Auxilio Vial Centro · Valencia · $ 25 USD + $ 1,00 USD/km · hasta 120 km · Paso de corriente · $ 12 USD + $ 0,60 USD/km · hasta 40 km · Cuando escribas, cuéntales · Dónde estás · Qué le pasa al vehículo · Marca y modelo

**Componentes:** Botón WhatsApp / Estilo=Relleno×3; Button / Estilo=Outlined, Estado=Enabled×2; Icon Button / Estilo=Standard, Estado=Enabled; Switch / Seleccionado=Sí, Estado=Enabled

**Va a:** —

### M4.09 · Empresa de auxilio
412 × 892 px · 5 íconos

**Textos:** Auxilio Vial Centro · AV · Verificado por VexBiz · Empresa de auxilio vial · ★ 4,7 · Valencia · Provincia · Carabobo · Radio de cobertura · hasta 120 km · Flota · 6 vehículos · Qué ofrece y cuánto cuesta · Remolque liviano · $ 25 USD + $ 1,00 USD/km · Hasta 120 km · flota de 4 · Paso de corriente · $ 12 USD + $ 0,60 USD/km · Hasta 40 km · flota de 2 · Cuando escribas, cuéntales · Dónde estás · Qué le pasa al vehículo · Marca y modelo · Añadir mi ubicación al mensaje · Envía un enlace al punto del mapa

**Componentes:** Icon Button / Estilo=Standard, Estado=Enabled×2; Switch / Seleccionado=Sí, Estado=Enabled; Botón WhatsApp / Estilo=Relleno; Button / Estilo=Outlined, Estado=Enabled

**Va a:** —

## M5 · Academia

### M5.01 · Academia  ★ inicio
412 × 892 px · 5 íconos

**Textos:** Academia · Mis cursos · Eventos · Comunidad · Mi nivel · Todos · Climatización 7 · Refrigeración 4 · Electricidad 5 · Sólo gratis · Climatización · Básico · Instalación de aires split paso a paso · Desde el sitio hasta el vacío y la prueba final. · 12 clases · 3 h 20 min · ★ 4,8 · Gratis · Climatización · Intermedio · Diagnóstico de equipos inverter · Lee códigos de error y mide sensores. · 9 clases · 2 h 45 min · ★ 4,9 · $ 25 · Estos son todos los cursos.

**Componentes:** Placeholder×2; Icon Button / Estilo=Standard, Estado=Enabled

**Va a:** M5.03 (push 350); M5.05 (push 350); M5.06 (push 350); M5.10 (push 350); M5.02 (push 350)

### M5.02 · Curso
412 × 892 px · 6 íconos

**Textos:** Curso · Climatización · Intermedio · Diagnóstico de equipos inverter · Lee códigos de error, mide sensores y encuentra la falla real antes de cambiar piezas. · 9 · clases · 165 · min de vídeo · 312 · inscritos · 4,9 · ★ · Imparte: Ramón Márquez · Sobre este curso · Curso práctico grabado en taller con equipos reales de 9.000 a 24.000 BTU. · 2 clases de muestra gratis · Temario · 1 · Cómo piensa un inverter · Del on/off al inverter · Muestra gratis · 12 min · Partes de la placa · 18 min · 2 · Medir sin adivinar · $ 25 · · 9 clases

**Componentes:** Icon Button / Estilo=Standard, Estado=Enabled×2; Placeholder; Button / Estilo=Filled, Estado=Enabled

**Va a:** M5.04 (push 350); M5.03 (push 350)

### M5.03 · Mis cursos
412 × 892 px · 9 íconos

**Textos:** Mis cursos · Sigue donde lo dejaste · Diagnóstico de equipos inverter · 44% · Sigue en: Probar el IPM · En curso · Carga de gas refrigerante sin riesgos · 1 de 8 lecciones · 13% · Sigue en: Presiones y temperaturas · Completados · Instalación de aires split paso a paso · Completado · Eventos · Comunidad · Mi nivel y mis puntos · Ver la academia

**Componentes:** Icon Button / Estilo=Standard, Estado=Enabled; Placeholder; Button / Estilo=Tonal, Estado=Enabled; Button / Estilo=Filled, Estado=Enabled

**Va a:** M5.04 (push 350); M5.05 (push 350); M5.06 (push 350); M5.10 (push 350); M5.01 (push 350)

### M5.04 · Lección
412 × 892 px · 4 íconos

**Textos:** Diagnóstico inverter · Medir sin adivinar · Probar el IPM · 22 min · Retomamos donde lo dejaste, en el minuto 9 · Materiales · Tabla de resistencias del IPM.pdf · Esquema de la placa exterior.pdf · Los materiales se pueden guardar para leerlos sin conexión. · Suma puntos a tu nivel

**Componentes:** Button / Estilo=Text, Estado=Enabled×2; Button / Estilo=Outlined, Estado=Enabled×2; Icon Button / Estilo=Standard, Estado=Enabled; Button / Estilo=Filled, Estado=Enabled

**Va a:** —

### M5.05 · Eventos
412 × 892 px · 2 íconos

**Textos:** Eventos · EN VIVO AHORA · Errores comunes al instalar inverter · Ramón Márquez · Próximos · Charla: energía solar para el hogar · Jue 23/10 · 18:30 (hora de tu teléfono) · 1 h · SolarVen · En línea · Quedan 40 de 80 plazas · Taller: tableros residenciales · Sáb 01/11 · 10:00 (hora de tu teléfono) · 2 h · Voltio Center · Caracas · Quedan 3 de 50 plazas · Apuntado · Ya pasaron · Refrigerantes inflamables · 02/10 · Mantenimiento de cavas · 18/09

**Componentes:** Button / Estilo=Text, Estado=Enabled×4; Icon Button / Estilo=Standard, Estado=Enabled; Button / Estilo=Filled, Estado=Enabled; Button / Estilo=Tonal, Estado=Enabled

**Va a:** —

### M5.06 · Comunidad: foros
412 × 892 px · 5 íconos

**Textos:** Comunidad técnica · Busca una avería en todos los foros · Foro de aire acondicionado · Climatización · 214 preguntas · Refrigeración comercial · Refrigeración · 96 preguntas · Línea blanca · Electrodomésticos · 158 preguntas · Electricidad residencial · Electricidad · 301 preguntas · Puedes leer todo. Preguntar y responder es para técnicos.

**Componentes:** Icon Button / Estilo=Standard, Estado=Enabled; Button / Estilo=Filled, Estado=Enabled

**Va a:** M5.07 (push 350)

### M5.07 · Foro: preguntas
412 × 892 px · 3 íconos

**Textos:** Foro de aire acondicionado · Climatización · 214 preguntas · Buscar en este foro · Split inverter LG da error CH05 al arrancar · Resuelta · Carlos Mendoza · Fundador · hace 4 días · 📷 3 · Compresor rotativo hace ruido metálico al apagar · 4 respuestas · Ana L. Pérez · hace 1 semana · ¿Cómo medir el termistor de descarga sin tabla? · Sin respuesta · José Rodríguez · hace 2 h · 📷 1

**Componentes:** Icon Button / Estilo=Standard, Estado=Enabled; Segmented Button / Segmento / Posición=Start, Seleccionado=Sí; Segmented Button / Segmento / Posición=Middle, Seleccionado=No; Segmented Button / Segmento / Posición=End, Seleccionado=No; Button / Estilo=Filled, Estado=Enabled

**Va a:** M5.09 (hoja 400)

### M5.08 · Hilo de una pregunta
412 × 892 px · 2 íconos

**Textos:** Pregunta · Resuelta · Split inverter LG da error CH05 al arrancar · Carlos Mendoza · Fundador · hace 4 días · Enciende pero a los 30 segundos muestra CH05. Ya revisé el cable de comunicación y tiene continuidad. · 6 respuestas · Le resolvió a quien preguntó · CH05 en LG es error de comunicación. Mide entre N y señal en la exterior: debe oscilar entre 0 y 24 V DC. Si queda fijo, revisa el optoacoplador. · Ramón Márquez · Verificado · Revisa también que el neutro llegue firme a la exterior. · Ana L. Pérez · Certificada

**Componentes:** Icon Button / Estilo=Standard, Estado=Enabled×4; Button / Estilo=Text, Estado=Enabled×2; Button / Estilo=Filled, Estado=Enabled

**Va a:** —

### M5.09 · Escribir pregunta
412 × 892 px · 1 ícono

**Textos:** Nueva pregunta · En Foro de aire acondicionado · Te quedan 2 preguntas hoy. · Todavía no puedes poner enlaces. Este límite se quita el 23/10.

**Componentes:** Icon Button / Estilo=Standard, Estado=Enabled; Form / Campo / Estado=Enabled; Form / Área de texto; Button / Estilo=Outlined, Estado=Enabled; Button / Estilo=Filled, Estado=Enabled

**Va a:** —

### M5.10 · Mi nivel y mis puntos
412 × 892 px · 3 íconos

**Textos:** Mi nivel · Nivel 4 de 8 · Técnico Avanzado · 1.240 puntos · 62% · Te faltan 460 para Especialista · Cómo sumar puntos · Seguir un curso · Responder en la comunidad · Ir a un evento · De dónde salieron · Lección completada · 16/10 · +10 · Tu respuesta resolvió una pregunta · 12/10 · +50 · Respuesta retirada por la moderación · 01/10 · −20 · Los niveles · Aprendiz · 0 pts · Ayudante · 100 pts · Técnico · 400 pts · Técnico Avanzado · estás aquí · 1.000 pts · Especialista · 1.700 pts

**Componentes:** Icon Button / Estilo=Standard, Estado=Enabled

**Va a:** —

## M6 · Cuenta

### M6.01 · Cuenta
412 × 1764 px · 4 íconos

**Textos:** Aníbal Lejarazu · anibal@correo.com · Verificado · Estás en modo Comprador · 1 · Sin pagar · 2 · En camino · 14 · Entregados · Gasto por mes (USD) · 48 · May · 95 · Jun · 31 · Jul · 142 · Ago · 77 · Sep · 124 · Oct · Calculado sobre tus últimos 17 pedidos. · Mis compras · Mi cuenta · Aprender · Ayuda · Cerrar sesión · Cuenta

**Componentes:** List Item / Inicio=Ícono, Líneas=1×13; Avatar / Tipo=Iniciales, Tamaño=L; Button / Estilo=Text, Estado=Enabled; Icon Button / Estilo=Standard, Estado=Enabled; Badge / Tamaño=Small; App / Barra Comprador / Activa=Cuenta

**Va a:** M6.02 (push 350); ▣ Cambiar de modo (fundido 150); M6.03 (fundido 200); M6.09 (push 350); M6.11 (push 350); M6.12 (push 350); M6.13 (push 350); M6.15 (push 350); M6.17 (push 350)

### M6.03 · Pedidos
412 × 1002 px · 10 íconos

**Textos:** Reclamos y devoluciones · Garantías · Servicios que pedí · 2 · Frío Total C.A. · #VX-20431 · 15/10 · $ 422,40 · Falta pagar $ 422,40 · Herramientas Andina · #VX-20432 · 15/10 · $ 154,80 · Pago reportado · en comprobación · Repuestos Express · #VX-20377 · 02/10 · $ 45,60 · En camino · ElectroHogar · #VX-20211 · 18/09 · $ 39,20 · Entregado · Pedidos

**Componentes:** Placeholder×4; Button / Estilo=Filled, Estado=Enabled; Button / Estilo=Text, Estado=Enabled; Icon Button / Estilo=Standard, Estado=Enabled; Badge / Tamaño=Small; App / Barra Comprador / Activa=Pedidos

**Va a:** M6.09 (push 350); M6.11 (push 350); M6.12 (push 350); M6.04 (push 350); M3.09 (push 350); M6.17 (push 350)

### M6.04 · Detalle del pedido
412 × 1300 px · 6 íconos

**Textos:** ElectroHogar · Emitido el 18/09/2026 · Entregado · Zoom · despachado el 19/09/2026 · Guía 1234 5678 90 · Factura N.º 000-0458 · 19/09/2026 · Total $ 39,20 · Artículos (2) · Bombillo LED 12W · pack x4 · 2 × $ 9,80 · $ 19,60 · Garantía hasta 18/03/2027 · Regleta con protector 6 tomas · Garantía hasta 18/09/2027 · 1 de 2 en devolución · En revisión · Subtotal · $ 32,94 · Envío · Gratis · Impuestos (incluidos) · $ 6,26 · Total · $ 39,20 · Pedido #VX-20211

**Componentes:** Button / Estilo=Text, Estado=Enabled×5; Divider / Orientación=Horizontal×3; Placeholder×2; Icon Button / Estilo=Standard, Estado=Enabled×2; Button / Estilo=Outlined, Estado=Enabled; App / Barra de acción

**Va a:** M2.08 (push 350); M6.07 (push 350)

### M6.05 · Ayuda con un pedido
412 × 838 px · 3 íconos

**Textos:** Ayuda con el pedido · ElectroHogar · #VX-20211 · Entregado · Calificar a la tienda · Cuenta cómo te fue con ElectroHogar. · Pedir devolución · Ya hay una devolución en curso · En revisión · Abrir reclamo · Si no llegas a un acuerdo con la tienda, VexBiz interviene como mediador.

**Componentes:** Button / Estilo=Tonal, Estado=Enabled×2; Icon Button / Estilo=Standard, Estado=Enabled; Placeholder; Button / Estilo=Outlined, Estado=Enabled; List Item / Inicio=Ícono, Líneas=1; App / Barra Comprador / Activa=Pedidos

**Va a:** M6.06 (push 350); M6.08 (push 350)

### M6.13 · Direcciones
412 × 679 px · 4 íconos

**Textos:** Direcciones · Casa · Predeterminada · Av. Bolívar Norte, Res. Los Samanes, Torre B, Apto 4-2 · Frente a la plaza · Valencia, Carabobo · CP 2001 · 0414-555 1234 · Oficina · C.C. Metrópolis, Nivel 2, Local 214 · Valencia, Carabobo · CP 2003 · 0241-555 9876 · Taller principal · Zona Industrial Castillito, Calle 98 · San Diego, Carabobo · CP 2006 · 0412-555 4422 · Falta el punto en el mapa

**Componentes:** Icon Button / Estilo=Standard, Estado=Enabled×4; App / Barra de acción

**Va a:** ▣ Acciones de la dirección (fundido 150)

### M6.13 · Direcciones · Hoja de acciones
412 × 679 px · 7 íconos

**Textos:** Direcciones · Casa · Predeterminada · Av. Bolívar Norte, Res. Los Samanes, Torre B, Apto 4-2 · Frente a la plaza · Valencia, Carabobo · CP 2001 · 0414-555 1234 · Oficina · C.C. Metrópolis, Nivel 2, Local 214 · Valencia, Carabobo · CP 2003 · 0241-555 9876 · Taller principal · Zona Industrial Castillito, Calle 98 · San Diego, Carabobo · CP 2006 · 0412-555 4422 · Falta el punto en el mapa · Editar · Usar como predeterminada · Quitar

**Componentes:** Icon Button / Estilo=Standard, Estado=Enabled×4; App / Barra de acción

**Va a:** —

### M6.02 · Datos personales
412 × 686 px · 3 íconos

**Textos:** Datos personales · AL · Nombre · Aníbal Lejarazu · Correo · anibal@correo.com · País activo · Venezuela · Verificación en dos pasos · Sin activar · Descargar mis datos · Un archivo con tu cuenta, compras y servicios.

**Componentes:** Icon Button / Estilo=Standard, Estado=Enabled; Button / Estilo=Tonal, Estado=Enabled; Button / Estilo=Outlined, Estado=Enabled

**Va a:** M6.19 (push 350)

### M6.06 · Calificar a la tienda
412 × 598 px · 5 íconos

**Textos:** Calificar a la tienda · Frío Total C.A. · Pedido #VX-20412 · Calificas a la tienda, no al producto · 4,5 · Muy bueno

**Componentes:** Icon Button / Estilo=Standard, Estado=Enabled; Form / Área de texto; Button / Estilo=Filled, Estado=Enabled

**Va a:** —

### M6.07 · Pedir devolución
412 × 834 px · 1 ícono

**Textos:** Pedir devolución · Capacitor de marcha 35+5 µF · Compraste 2 · 1 · Control remoto universal A/A · Compraste 1 · 0 · Aire split inverter 12.000 BTU · Ya devuelto · No se pueden adjuntar fotos. Describe el problema con detalle. · 1 unidad

**Componentes:** Icon Button / Estilo=Standard, Estado=Enabled×5; Form / Campo / Estado=Enabled; Form / Área de texto; Button / Estilo=Filled, Estado=Enabled

**Va a:** M6.09 (push 350)

### M6.08 · Abrir reclamo
412 × 764 px · 2 íconos

**Textos:** Abrir reclamo · VexBiz revisa el caso y decide. La tienda verá lo que escribas. · Pedido · #VX-20301 · Tienda · Herramientas Andina · Total · $ 24,90 · No se pueden adjuntar fotos. Describe el problema con detalle.

**Componentes:** Icon Button / Estilo=Standard, Estado=Enabled; Form / Área de texto; Form / Campo / Estado=Enabled; Button / Estilo=Filled, Estado=Enabled

**Va a:** M6.10 (push 350)

### M6.09 · Reclamos y devoluciones
412 × 466 px

**Textos:** Reclamos y devoluciones · #R-0091 · Pedido #VX-20301 · 03/10 · En mediación · El control remoto no es compatible con mi equipo… · Último mensaje: VexBiz · #R-0074 · Pedido #VX-20188 · 18/09 · Resuelto · Me enviaron la tarjeta de un modelo distinto. · Resolución de VexBiz · Reembolso total de $ 64,00 al comprador.

**Componentes:** Icon Button / Estilo=Standard, Estado=Enabled; Segmented Button / Segmento / Posición=Start, Seleccionado=Sí; Segmented Button / Segmento / Posición=End, Seleccionado=No

**Va a:** —

### M6.10 · Hilo del reclamo
412 × 642 px · 1 ícono

**Textos:** Reclamo #R-0091 · En mediación · Abierto el 03/10/2026 · Motivo · El control remoto no es compatible con mi equipo y la tienda no me responde. · Tú · 10:12 · Pedí el control para un LG y me llegó uno que no lo reconoce. · La tienda · 15:40 · Podemos cambiarlo por el modelo correcto sin costo. · VexBiz · 09:00 · La tienda tiene hasta el 07/10 para enviar el cambio o aprobar el reembolso. · Escribe un mensaje…

**Componentes:** Icon Button / Estilo=Standard, Estado=Enabled; Button / Estilo=Text, Estado=Enabled; Icon Button / Estilo=Filled, Estado=Enabled

**Va a:** M6.04 (push 350)

### M6.11 · Garantías
412 × 620 px · 6 íconos

**Textos:** Garantías · Vigente · quedan 335 días · Aire split inverter 12.000 BTU · Responde: Samsung, por Frío Total C.A. · hasta 16/10/2027 · Pedido #VX-20412 · Condiciones · Vigente · quedan 94 días · Instalación de aire split · Responde: ClimaPro Servicios · hasta 18/01/2027 · Solicitud #S-2041 · Vencida · Capacitor de marcha 35+5 µF · Responde: Frío Total C.A. · hasta 02/09/2026 · Pedido #VX-19870

**Componentes:** Icon Button / Estilo=Standard, Estado=Enabled

**Va a:** —

### M6.12 · Servicios que pedí
412 × 610 px · 4 íconos

**Textos:** Servicios que pedí · #S-2041 · Aceptado · agendando · Instalación de aire split 12.000 BTU · ClimaPro Servicios · La empresa asignará al técnico · Sáb 18/10 · 09:00 · $ 85,00 · Urb. El Viñedo, Calle 4, Valencia · #S-1977 · Trabajo completado · Mantenimiento preventivo · Carlos Mendoza · ★ 4,8 · 02/10 · 14:00 · $ 35,00

**Componentes:** Button / Estilo=Text, Estado=Enabled×2; Icon Button / Estilo=Standard, Estado=Enabled; Button / Estilo=Tonal, Estado=Enabled

**Va a:** —

### M6.14 · Dirección
412 × 1034 px

**Textos:** Usar como predeterminada · Nueva dirección

**Componentes:** Form / Campo / Estado=Enabled×5; Form / Selector×2; Placeholder; Button / Estilo=Text, Estado=Enabled; Switch / Seleccionado=Sí, Estado=Enabled; Button / Estilo=Filled, Estado=Enabled; Icon Button / Estilo=Standard, Estado=Enabled

**Va a:** —

### M6.15 · Formas de pago
412 × 710 px · 5 íconos

**Textos:** Formas de pago · Guarda tu cuenta para pagar más rápido. La clave del banco se pide siempre al pagar y no se guarda. · Nómina · Cobro a tu cuenta · Preferida · V-18.***.789 · ····4567 · Último uso: 12/10/2026 · Banesco · ····1234 · Teléfono y banco · V-18.***.789 · 0414 ···1234 · Último uso: 28/09/2026 · Falló varias veces seguidas. Revisa los datos. · Binance · Binance Pay · an***@correo.com

**Componentes:** Icon Button / Estilo=Standard, Estado=Enabled×4; Button / Estilo=Filled, Estado=Enabled

**Va a:** M6.16 (hoja 400)

### M6.16 · Forma de pago
412 × 802 px · 1 ícono

**Textos:** Nueva forma de pago · Todo listo: documento, banco y teléfono completos.

**Componentes:** Form / Campo / Estado=Enabled×4; Form / Selector×2; Icon Button / Estilo=Standard, Estado=Enabled; Button / Estilo=Filled, Estado=Enabled

**Va a:** —

### M6.17 · Avisos
412 × 553 px · 4 íconos

**Textos:** Avisos · La compra #VX-20430 vence en 2 horas · Transfiere antes de las 18:00 o se cancela. · hace 10 min · Nuevo · Tu pedido #VX-20412 va en camino · MRW · guía 4019-882-113. · hace 2 h · ClimaPro te mandó una cotización · $ 85,00 para el sábado 18/10. · hace 5 h · Tu reclamo #R-0074 se resolvió a tu favor · Reembolso de $ 64,00. · hace 3 días

**Componentes:** Icon Button / Estilo=Standard, Estado=Enabled; Button / Estilo=Text, Estado=Enabled; Segmented Button / Segmento / Posición=Start, Seleccionado=Sí; Segmented Button / Segmento / Posición=End, Seleccionado=No

**Va a:** —

### M6.18 · Seguridad y contraseña
412 × 869 px · 6 íconos

**Textos:** Seguridad y contraseña · Cambiar contraseña · Verificación en dos pasos · Sin activar · Sesiones abiertas · 3 · Eliminar cuenta

**Componentes:** Form / Campo / Estado=Enabled×3; Form / Requisito / Cumplido=Sí×2; Icon Button / Estilo=Standard, Estado=Enabled; Form / Requisito / Cumplido=No; Button / Estilo=Filled, Estado=Disabled

**Va a:** M6.19 (push 350); M6.20 (push 350); M6.21 (push 350)

### M6.19 · Verificación en dos pasos
412 × 894 px · 2 íconos

**Textos:** Verificación en dos pasos · Sin activar · Al entrar te pediremos además un código de tu app de autenticación. · Paso 1 · Vincula tu app de autenticación · JBSW Y3DP EHPK 3PXP · Mostrar código QR · Paso 2 · Escribe el código · Guárdalos ahora. No se volverán a mostrar. · 7F3K-92LD · Q8MZ-4RTW · 2HNP-6VXA · L9CE-1JQU · W5BT-8KSN · M3YG-0PDF

**Componentes:** Button / Estilo=Filled, Estado=Enabled×2; Button / Estilo=Outlined, Estado=Enabled×2; Icon Button / Estilo=Standard, Estado=Enabled; Button / Estilo=Text, Estado=Enabled; Form / Campo / Estado=Enabled; Button / Estilo=Tonal, Estado=Enabled

**Va a:** —

### M6.20 · Sesiones abiertas
412 × 478 px · 3 íconos

**Textos:** Sesiones abiertas · Aquí ves dónde está abierta tu cuenta. · App VexBiz · Android 15 · Esta sesión · Venezuela · 200.84.12.6 · desde 02/10 · Chrome · Windows 11 · Venezuela · 190.205.33.18 · desde 16/10 · Safari · iPhone · Venezuela · 190.205.33.18 · desde 12/10

**Componentes:** Icon Button / Estilo=Standard, Estado=Enabled; Button / Estilo=Filled, Estado=Enabled

**Va a:** —

### M6.21 · Eliminar cuenta
412 × 584 px · 2 íconos

**Textos:** Eliminar cuenta · Se borra tu cuenta en todos los países donde la usas. No se puede deshacer. · Antes tienes que terminar: · 2 compras en curso en Venezuela · 1 trabajo técnico sin cerrar · Antes de irte puedes · Cuando no haya bloqueos:

**Componentes:** Icon Button / Estilo=Standard, Estado=Enabled; Button / Estilo=Text, Estado=Enabled; Form / Campo / Estado=Enabled; Button / Estilo=Filled, Estado=Disabled

**Va a:** —

### M6.22 · Registrar mi empresa
412 × 1002 px · 3 íconos

**Textos:** Lo justo para que tu empresa exista. La verificación tarda hasta 72 horas hábiles. · ¿Cómo operas? · Persona natural con actividad económica · Persona jurídica · ¿Qué hace tu empresa? · Vender productos · Importar · Prestar servicios técnicos · Aseguradoras y auxilio vial entran por acuerdo con VexBiz; escríbenos desde Contacto. · Sin cuota de entrada · Registrar mi empresa · Venezuela

**Componentes:** Form / Campo / Estado=Enabled×3; Checkbox / Valor=Unchecked, Estado=Enabled×2; Radio Button / Seleccionado=No, Estado=Enabled; Radio Button / Seleccionado=Sí, Estado=Enabled; Checkbox / Valor=Checked, Estado=Enabled; Button / Estilo=Filled, Estado=Enabled; Icon Button / Estilo=Standard, Estado=Enabled

**Va a:** M9.01 (fundido 350)

### M6.23 · Cómo se ve VexBiz
412 × 553 px

**Textos:** Cómo se ve VexBiz · Tamaño del texto · 120 % · Así se leerán los textos de la app. · Más contraste · Menos movimiento · Estas preferencias se guardan en este teléfono. Si no cambias nada, la app sigue los ajustes de accesibilidad del sistema.

**Componentes:** Icon Button / Estilo=Standard, Estado=Enabled; Slider / Estado=Enabled; Switch / Seleccionado=Sí, Estado=Enabled; Switch / Seleccionado=No, Estado=Enabled; Button / Estilo=Outlined, Estado=Enabled

**Va a:** —

### M6.24 · Ayuda e información
412 × 1211 px · 26 íconos

**Textos:** Lunes a sábado, 8:00 a 19:00 · Ayuda · Cómo comprar · Envíos · Devoluciones · Legal y políticas · Términos y condiciones · Política de privacidad · Aviso legal · VexBiz · Quiénes somos · Vender en VexBiz · Trabaja como técnico · Franquicias · Más · Contacto · Preferencias de accesibilidad · Boletín · ¿Tienes dudas con un pedido? · Ayuda e información

**Componentes:** Botón WhatsApp / Estilo=Relleno; Button / Estilo=Filled, Estado=Enabled; Icon Button / Estilo=Standard, Estado=Enabled

**Va a:** M6.25 (push 350); M6.26 (push 350); M6.23 (push 350); M1.10 (hoja 400); M6.03 (fundido 200)

### M6.25 · Documento
412 × 714 px

**Textos:** Trabaja como técnico · Versión 1.0 · actualizado el 15/08/2026 · Qué ganas · Solicitudes de clientes de tu zona, con el precio que tú pones y pagos protegidos por VexBiz. · Qué te pedimos · Tu cédula, tus oficios, la zona donde trabajas y los documentos que pida tu país. · Cuánto tarda · Revisamos tu perfil en hasta 72 horas hábiles. Mientras tanto ya puedes comprar repuestos. · ¿No encontraste lo que buscabas?

**Componentes:** Icon Button / Estilo=Standard, Estado=Enabled×2; Button / Estilo=Tonal, Estado=Enabled; Button / Estilo=Text, Estado=Enabled; Button / Estilo=Filled, Estado=Enabled

**Va a:** M1.05 (hoja 400); M6.26 (push 350)

### M6.26 · Contacto
412 × 658 px · 8 íconos

**Textos:** Contacto · Lunes a sábado, 8:00 a 19:00 · Redes sociales · Instagram · @vexbiz.ve · Facebook · VexBiz Venezuela · YouTube · VexBiz · ¿Es por un pedido? · Desde el pedido puedes calificar, devolver o abrir un reclamo. · Ver ayuda e información

**Componentes:** Icon Button / Estilo=Standard, Estado=Enabled; Botón WhatsApp / Estilo=Relleno; Button / Estilo=Filled, Estado=Enabled

**Va a:** M6.03 (fundido 200); M6.24 (push 350)

## M7 · Modo Tienda

### M7.01 · Inicio de la tienda  ★ inicio
412 × 955 px · 17 íconos

**Textos:** Contestar ahora · 3 clientes quieren comprarte · 04:32 · Por despachar · 5 pedidos · #VX-20412 · María González · $ 48,00 · #VX-20409 · Retiro en tienda · José Rodríguez · $ 19,60 · #VX-20405 · Carmen Díaz · $ 112,50 · Ventas brutas · $ 18.420 · USD · 12 meses · Ingreso neto · $ 16.210 · Carritos abiertos · 7 · Unidades apartadas · 2 · Cómo se ve mi tienda · Frío Total · Modo Tienda

**Componentes:** Button / Estilo=Text, Estado=Enabled; Icon Button / Estilo=Standard, Estado=Enabled; App / Barra Tienda / Activa=Inicio

**Va a:** M7.02 (push 350); M7.04 (push 350); M7.03 (fundido 200); M7.09 (push 350); M7.19 (push 350); ▣ Avisos en vivo (fundido 150)

### M7.02 · Confirmación pendiente
412 × 763 px · 3 íconos

**Textos:** Confirmar venta · 1 de 3 · 01:48 · para contestar · Si no contestas a tiempo, la venta pasa a otra tienda. · Te la ofrecen: otra tienda no pudo · Tarjeta electrónica condensadora split 12K · Tu código: FT-TAR-12K · Cantidad × precio · 2 × $ 64,00 USD · Comprador · José Rodríguez · Total · $ 128,00 · Te quedan 1 y te piden 2.

**Componentes:** Icon Button / Estilo=Standard, Estado=Enabled; Button / Estilo=Filled, Estado=Enabled; Button / Estilo=Outlined, Estado=Enabled; Button / Estilo=Text, Estado=Enabled

**Va a:** —

### M7.03 · Pedidos de la tienda
412 × 878 px · 4 íconos

**Textos:** Pedidos · Modo Tienda · Hay pedidos nuevos · #VX-20412 · Pagado: hay que despacharlo · María González · Caracas · 16/10 · 3 artículos · Total $ 48,00 · Te quedan: $ 42,24 · #VX-20409 · José Rodríguez · Caracas · 16/10 · 1 artículo · Retiro en tienda · Total $ 19,60 · Te quedan: $ 17,25 · #VX-20405 · Carmen Díaz · Valencia · 15/10 · 4 artículos · Total $ 112,50 · Te quedan: $ 99,00 · #VX-20398 · Luis Pérez · Maracay · 15/10 · 2 artículos · Total $ 36,00 · Te quedan: $ 31,68 · Cargando más pedidos… · «Te quedan» es el total menos la comisión de VexBiz fijada el día de la compra.

**Componentes:** Icon Button / Estilo=Standard, Estado=Enabled×2; Segmented Button / Segmento / Posición=Start, Seleccionado=Sí; Segmented Button / Segmento / Posición=End, Seleccionado=No; App / Barra Tienda / Activa=Pedidos

**Va a:** ▣ Avisos en vivo (fundido 150); M7.04 (push 350)

### M7.04 · Pedido: preparar
412 × 947 px · 5 íconos

**Textos:** Pagado: hay que despacharlo · Recibido el 16/10 · 10:42 · Entrega y comprador · MG · María González · +58 412 555 1234 · Urb. El Viñedo, Calle 4, Casa 12 · Caracas · Distrito Capital · Artículos a empacar · 3 artículos · Capacitor de marcha 35+5 µF · FT-CAP-355 · 2 × $ 9,50 · $ 19,00 · Control remoto universal A/A · FT-CTR-UNI · 1 × $ 14,00 · $ 14,00 · Te deja · $ 42,24 · Subtotal de artículos · $ 33,00 · Envío · $ 15,00 · Comisión VexBiz (12%) · − $ 5,76 · Monto neto que ingresa a tu tienda · #VX-20412

**Componentes:** Button / Estilo=Tonal, Estado=Enabled; Button / Estilo=Outlined, Estado=Enabled; Button / Estilo=Text, Estado=Enabled; Button / Estilo=Filled, Estado=Enabled; Icon Button / Estilo=Standard, Estado=Enabled

**Va a:** M7.05 (push 350)

### M7.05 · Despachar y facturar
412 × 1278 px · 1 ícono

**Textos:** Comprador · María González · Total del pedido · $ 48,00 · Transporte · Factura al cliente · Obligatoria · factura-000842.jpg · 1,8 MB · PDF o imagen (JPG, PNG, WebP) · hasta 10 MB · Datos de la factura · Falta para despachar · Corrige el total facturado · No modifica el inventario · Despachar #VX-20412

**Componentes:** Form / Campo / Estado=Enabled×4; Button / Estilo=Outlined, Estado=Enabled×3; Form / Selector; Button / Estilo=Text, Estado=Enabled; Form / Campo / Estado=Error; Button / Estilo=Filled, Estado=Disabled; Icon Button / Estilo=Standard, Estado=Enabled

**Va a:** M7.03 (fundido 350)

### M7.06 · Productos
412 × 900 px · 4 íconos

**Textos:** Productos · Modo Tienda · Compresor rotativo 12.000 BTU R410A · Publicado · GMCC · FT-CMP-12K · Existencias: 8 · $ 189,00 · Capacitor de marcha 35+5 µF · Genérico · FT-CAP-355 · Existencias: 2 · $ 9,50 · Control remoto universal A/A · Chunghop · FT-CTR-UNI · Existencias: 24 · $ 14,00 · Motor ventilador evaporador 18W · Pausado · Welling · FT-MOT-18W · Existencias: 0 · $ 32,00

**Componentes:** Chip / Tipo=Filter, Estado=Enabled×3; Icon Button / Estilo=Standard, Estado=Enabled; Search Bar / Estado=Enabled; Chip / Tipo=Filter, Estado=Selected; Button / Estilo=Filled, Estado=Enabled; App / Barra Tienda / Activa=Productos

**Va a:** ▣ Avisos en vivo (fundido 150); M7.08 (push 350); M7.07 (hoja 400)

### M7.07 · Poner un artículo a la venta
412 × 824 px · 1 ícono

**Textos:** Ponle precio · Compresor rotativo 12.000 BTU R410A · GMCC · Lo venden 7 tiendas

**Componentes:** Form / Campo / Estado=Enabled×4; Icon Button / Estilo=Standard, Estado=Enabled; Button / Estilo=Text, Estado=Enabled; Form / Selector; Button / Estilo=Filled, Estado=Enabled

**Va a:** —

### M7.08 · Oferta
412 × 1006 px

**Textos:** El nombre y la marca son de la ficha del catálogo, que comparten todas las tiendas. · 2 unidades · Ya descuenta los pedidos pagados. · Anotar un ajuste · Un ajuste anotado no se edita ni se borra. · Últimos movimientos · − 2 · Pedido #VX-20412 · 16/10/2026 · + 4 · Compra a proveedor · 10/10/2026 · − 1 · Unidad dañada · 05/10/2026 · Capacitor de marcha 35+5 µF · Genérico

**Componentes:** Form / Campo / Estado=Enabled×2; Segmented Button / Segmento / Posición=Start, Seleccionado=No; Segmented Button / Segmento / Posición=Middle, Seleccionado=No; Segmented Button / Segmento / Posición=End, Seleccionado=Sí; Segmented Button / Segmento / Posición=Start, Seleccionado=Sí; Segmented Button / Segmento / Posición=End, Seleccionado=No; Button / Estilo=Filled, Estado=Enabled; Icon Button / Estilo=Standard, Estado=Enabled

**Va a:** —

### M7.11 · Ventas
412 × 909 px · 1 ícono

**Textos:** Ingreso neto acumulado · $ 16.210,40 · USD · 312 pedidos pagados · Total bruto vendido · $ 18.420,90 · Comisión media de VexBiz (12 %) · − $ 2.210,50 · Cuenta los últimos doce meses y sólo pedidos pagados. La comisión se fija el día de cada venta. · Evolución mensual · Octubre · 34 pedidos · $ 1.840 · Septiembre · 41 pedidos · $ 2.360 · Agosto · 36 pedidos · $ 1.910 · Julio · 28 pedidos · $ 1.420 · Junio · 22 pedidos · $ 1.150 · Mayo · 19 pedidos · $ 980 · Dinero · Modo Tienda

**Componentes:** Segmented Button / Segmento / Posición=Start, Seleccionado=Sí; Segmented Button / Segmento / Posición=Middle, Seleccionado=No; Segmented Button / Segmento / Posición=End, Seleccionado=No; Button / Estilo=Text, Estado=Enabled; Icon Button / Estilo=Standard, Estado=Enabled; App / Barra Tienda / Activa=Dinero

**Va a:** M7.12 (push 350); ▣ Avisos en vivo (fundido 150)

### M7.12 · Liquidaciones
412 × 644 px · 7 íconos

**Textos:** Dinero · Modo Tienda · Período: 01/10 — 15/10/2026 · $ 3.120,40 · USD · Transferida · Transferido el 16/10 (Banco de Venezuela ••4567) · Período: 16/09 — 30/09/2026 · $ 2.870,15 · Transferido el 01/10 (Banco de Venezuela ••4567) · Período: 01/09 — 15/09/2026 · $ 38,20 · Acumulada · No llega al mínimo de transferencia

**Componentes:** Icon Button / Estilo=Standard, Estado=Enabled; Segmented Button / Segmento / Posición=Start, Seleccionado=No; Segmented Button / Segmento / Posición=Middle, Seleccionado=Sí; Segmented Button / Segmento / Posición=End, Seleccionado=No; App / Barra Tienda / Activa=Dinero

**Va a:** ▣ Avisos en vivo (fundido 150); ▣ Detalle del período (fundido 150)

### M7.12 · Hoja «Detalle del período»
412 × 677 px

**Textos:** Detalle del período · 01/10 — 15/10/2026 · Total de ventas brutas · $ 3.546,00 · Comisión del marketplace · − $ 425,52 · Retenciones tributarias · − $ 38,28 · Ajustes · Saldo arrastrado del período anterior · Corte del 30/09 bajo el mínimo · + $ 38,20 · Reembolso pedido #VX-20188 · Devolución aprobada · − $ 64,00 · Total neto liquidado · $ 3.120,40

**Componentes:** —

**Va a:** —

### M7.13 · Cuentas
412 × 1095 px · 12 íconos

**Textos:** Cobro inmediato · Activo · Cuando el cliente paga, recibes tu venta en ese momento. · Últimos abonos · Pedido #VX-20412 · 16/10 · Bs 9,00 de comisión · Ref. 778812 · Bs 4.512,30 · Pedido #VX-20409 · 16/10 · Esperando al banco · — · Pedido #VX-20390 · 14/10 · No se pudo abonar · VexBiz lo está revisando · Cuentas bancarias · Banco de Venezuela · Principal · 0102 •••• •••• 4567 · Corriente · Frío Total Servicios C.A. · J-41234567-8 · Banesco · 0134 •••• •••• 8890 · Ahorros · 1 cuenta retirada · Dinero · Modo Tienda

**Componentes:** Segmented Button / Segmento / Posición=Start, Seleccionado=No; Segmented Button / Segmento / Posición=Middle, Seleccionado=No; Segmented Button / Segmento / Posición=End, Seleccionado=Sí; Button / Estilo=Outlined, Estado=Enabled; Button / Estilo=Filled, Estado=Enabled; Icon Button / Estilo=Standard, Estado=Enabled; App / Barra Tienda / Activa=Dinero

**Va a:** ▣ Avisos en vivo (fundido 150)

### M7 · Más
412 × 902 px · 21 íconos

**Textos:** Atender · Reclamos y devoluciones · 2 pendientes · Reseñas · 4,8 · 37 opiniones · Carritos y apartadas · 7 · 2 · Vender · Cupones · 3 activos · Envíos · 2 reglas · Cómo se ve mi tienda · 4 mejoras · Mi empresa · Ajustes de la tienda · Documentos de verificación · Falta 1 · Importadora: mis fichas · Cambiar de modo · Comprador · Tienda · Técnico · Más · Modo Tienda

**Componentes:** Icon Button / Estilo=Standard, Estado=Enabled; App / Barra Tienda / Activa=Más

**Va a:** M7.10 (push 350); M7.16 (push 350); M7.09 (push 350); M7.14 (push 350); M7.15 (push 350); M7.19 (push 350); M7.17 (push 350); M7.18 (push 350); M7.20 (push 350)

### M7.09 · Carritos y apartadas
412 × 788 px · 2 íconos

**Textos:** Carritos y apartadas · Aún no han pagado. Si confirmas precio y existencias ahora, al comprar no tendrás que contestar. · En 1 no te alcanzan las existencias: esa venta se caerá salvo que repongas. · Capacitor de marcha 35+5 µF · 3 en el carrito · te quedan 2 · no alcanza · Cliente con sesión · hace 20 min · lo ha mirado 4 veces · Compresor rotativo 12.000 BTU R410A · 1 en el carrito · te quedan 8 · Cliente sin sesión · hace 1 h · lo ha mirado 2 veces · Control remoto universal A/A · 2 en el carrito · te quedan 24 · Cliente con sesión · hace 3 h · lo ha mirado 1 vez · Precio y existencias confirmados

**Componentes:** Icon Button / Estilo=Standard, Estado=Enabled; Segmented Button / Segmento / Posición=Start, Seleccionado=Sí; Segmented Button / Segmento / Posición=End, Seleccionado=No; Button / Estilo=Outlined, Estado=Enabled; Button / Estilo=Tonal, Estado=Enabled

**Va a:** —

### M7.10 · Reclamos y devoluciones
412 × 700 px · 2 íconos

**Textos:** Reclamos y devoluciones · #VX-20211 · 16/10 · Solicitada · Reembolso $ 19,60 · Motivo del comprador · La regleta no enciende al conectarla. · Regleta con protector de voltaje 6 tomas · × 1 · Aceptar autoriza a VexBiz a procesar el reembolso. · #VX-20188 · 05/10 · Aprobada · Reembolso $ 64,00 · Me enviaron la tarjeta de un modelo distinto. · Tarjeta electrónica condensadora split 12K

**Componentes:** Button / Estilo=Outlined, Estado=Enabled×2; Icon Button / Estilo=Standard, Estado=Enabled; Segmented Button / Segmento / Posición=Start, Seleccionado=Sí; Segmented Button / Segmento / Posición=End, Seleccionado=No; Button / Estilo=Filled, Estado=Enabled

**Va a:** —

### M7.16 · Reseñas
412 × 712 px · 23 íconos

**Textos:** Reseñas · 4,8 · 37 opiniones verificadas · 5 · 31 · 4 · 3 · 1 · 2 · 0 · Comentarios recientes · María G. · 14/10/2026 · Pedido #VX-20398 · «Llegó al día siguiente, bien embalado. Me ayudaron a elegir el kit correcto.» · José R. · 09/10/2026 · Pedido #VX-20377 · «Buen precio, pero tardaron un día más de lo que decía el envío.» · Carmen D. · 02/10/2026 · Pedido #VX-20301 · «El control remoto no funcionaba con mi modelo.»

**Componentes:** Icon Button / Estilo=Standard, Estado=Enabled

**Va a:** —

### M7.17 · Ajustes de la tienda
412 × 885 px · 7 íconos

**Textos:** Ajustes de la tienda · FT · Se ve en tu tienda pública y junto a tus ofertas. Tu foto personal es otra. · Identificador fiscal · J-41234567-8 · Empresa verificada · Figuras de la empresa · Ya tienes: Vender productos · Importar · Carga fichas para que otras tiendas vendan. · Prestar servicios · Recibe solicitudes de instalación y reparación. · Datos de contacto · Frío Total Caracas · ventas@friototal.com · 0212 555 0101 · Horario · 3 tramos · America/Caracas

**Componentes:** Button / Estilo=Text, Estado=Enabled×5; Icon Button / Estilo=Standard, Estado=Enabled

**Va a:** —

### M7.14 · Cupones
412 × 670 px · 7 íconos

**Textos:** Cupones · VERANO10 · 10% de descuento en compras desde $ 50 · Usado 18 de 100 veces · 1 por persona · BIENVENIDA5 · Pausado · $ 5 de descuento en tu primera compra · Usado 42 veces · sin límite · BLACKFRIDAY · Caducado · Usos agotados · 15% de descuento · Usado 200 de 200 veces

**Componentes:** Icon Button / Estilo=Standard, Estado=Enabled; Button / Estilo=Filled, Estado=Enabled

**Va a:** —

### M7.15 · Envíos
412 × 582 px · 3 íconos

**Textos:** Envíos · Tus reglas de envío · Envío Caracas · $ 5,00 · El comprador paga el 50% y tu tienda el 50%. · Envío nacional · $ 12,00 · El comprador paga el 100% del envío. · Promo envío gratis · Pausada · Tu tienda paga el 100%; para el cliente es gratis. · Comprador · Tu tienda · VexBiz

**Componentes:** Icon Button / Estilo=Standard, Estado=Enabled; Button / Estilo=Filled, Estado=Enabled

**Va a:** —

### M7.18 · Documentos de verificación
412 × 874 px · 7 íconos

**Textos:** Documentos · Verificación incompleta · Faltan: Registro Mercantil y Solvencia SENIAT. · RIF de la empresa · Verificado · Obligatorio · Válido hasta: 02/10/2027 · Registro Mercantil · Rechazado · Motivo del rechazo · La imagen está cortada y no se lee el sello del registro. · Formatos: JPG, PNG o PDF · Solvencia SENIAT · Pendiente · Constancia de solvencia del último ejercicio.

**Componentes:** Button / Estilo=Tonal, Estado=Enabled×2; Button / Estilo=Outlined, Estado=Enabled×2; Icon Button / Estilo=Standard, Estado=Enabled; Button / Estilo=Filled, Estado=Disabled

**Va a:** —

### M7.19 · Cómo se ve mi tienda
412 × 720 px · 10 íconos

**Textos:** Cómo se ve mi tienda · FT · Frío Total Caracas · 4,8 · 37 opiniones · Verificada por VexBiz · Av. Principal de Boleíta Norte, Galpón 12, Caracas · 46 productos disponibles (3 agotados) · Para verte completa · 3 artículos agotados ya no salen en las búsquedas. · Actualizar existencias · Sin regla de envío sólo vendes con retiro en tienda. · Configurar envíos · Sin teléfono, los compradores no pueden llamarte. · Añadir teléfono

**Componentes:** Icon Button / Estilo=Standard, Estado=Enabled; Button / Estilo=Filled, Estado=Enabled

**Va a:** M7.06 (fundido 200)

### M7.20 · Importadora: mis fichas
412 × 786 px · 7 íconos

**Textos:** Mis fichas · Las tiendas del país publican sus ofertas sobre estas fichas. · 2 de 3 están en uso por alguna tienda · Compresor rotativo 12.000 BTU R410A · GMCC · PA108X1C · La usan 7 tiendas · 14 compatibilidades · Tarjeta electrónica condensadora split 12K · Midea · 17122000A · La usa 1 tienda · 6 compatibilidades · Motor ventilador evaporador 18W · Oculta · Welling · YDK18-6G · Ninguna tienda la usa · Quién publica sobre tus fichas · Frío Total Caracas · 3 fichas tuyas · ClimaRepuestos Valencia · 2 fichas tuyas · Refrigeración El Sol · 1 ficha tuya

**Componentes:** Icon Button / Estilo=Standard, Estado=Enabled; Button / Estilo=Filled, Estado=Enabled

**Va a:** M7.21 (push 350); M7.21 (hoja 400)

### M7.21 · Importadora: ficha y compatibilidades
412 × 1327 px · 1 ícono

**Textos:** Compresor rotativo 12.000 BTU R410A · La usan 7 tiendas. Lo que cambies aquí lo verán en su catálogo. · Que las tiendas puedan publicar sobre ella · Para qué sirve · Marcas, modelos y tipos de equipo con los que es compatible. · LG · S4-Q12JA3AA · Split pared · Samsung · AR12TVHZDWK · Daikin · toda la marca · Ficha

**Componentes:** Form / Campo / Estado=Enabled×4; Icon Button / Estilo=Standard, Estado=Enabled×4; Form / Área de texto; Switch / Seleccionado=Sí, Estado=Enabled; Button / Estilo=Tonal, Estado=Enabled; Button / Estilo=Filled, Estado=Enabled

**Va a:** —

## M8 · Modo Técnico

### M8.01 · Trabajos  ★ inicio
412 × 1030 px · 6 íconos

**Textos:** Habilitado para recibir trabajos · 2 cambios guardados en el teléfono · Instalación de aire split 12.000 BTU · María González · Urb. El Viñedo, Calle 4, Casa 12 · Sáb 18/10 · 9:00 · Caduca hoy 18:00 · quedan 5 h · Mantenimiento preventivo · José Ramírez · Av. Cedeño, Edif. Torre Norte, Piso 3 · Lun 20/10 · 14:00 · Caduca el 17/10 10:00 · quedan 21 h · Carga de gas refrigerante · Carmen Díaz · Calle Montes de Oca 18 · Mar 14/10 · 11:00 · Caducó sin responder · Trabajos · Modo Técnico

**Componentes:** Button / Estilo=Text, Estado=Enabled×2; Button / Estilo=Filled, Estado=Enabled×2; Button / Estilo=Outlined, Estado=Enabled×2; Segmented Button / Segmento / Posición=Start, Seleccionado=Sí; Segmented Button / Segmento / Posición=End, Seleccionado=No; Icon Button / Estilo=Standard, Estado=Enabled; App / Barra Técnico / Activa=Trabajos

**Va a:** M8.02 (push 350); M8.03 (push 350); ▣ Avisos en vivo (fundido 150)

### M8.02 · Solicitud entrante
412 × 861 px · 1 ícono

**Textos:** Solicitud #S-1082 · Caduca hoy a las 18:00 · Quedan 5 h 12 min para responder · SERVICIO PEDIDO · Instalación de aire split 12.000 BTU · Importe acordado: $ 60,00 · CLIENTE Y LUGAR · María González · Urb. El Viñedo, Calle 4, Casa 12, Valencia · CUÁNDO · Sábado 18/10/2026 · 9:00 · Recibida el 16/10/2026 a las 12:48 · NOTAS DEL CLIENTE · «El equipo ya está comprado, hace falta el kit de instalación. Hay estacionamiento frente a la casa.»

**Componentes:** Button / Estilo=Outlined, Estado=Enabled×2; Icon Button / Estilo=Standard, Estado=Enabled; Button / Estilo=Filled, Estado=Enabled

**Va a:** M8.03 (push 350)

### M8.03 · Trabajo en curso
412 × 1327 px · 6 íconos

**Textos:** Instalación de una compra · Pedro Silva · Calle Páez 45, San Diego, Carabobo · 2 cambios guardados en el teléfono · Se envían solos cuando vuelva la señal · En ejecución · Empezó hoy a las 8:42 · El parte · Guardado · Guardado en el teléfono · Trabajo

**Componentes:** Button / Estilo=Tonal, Estado=Enabled×3; Form / Campo / Estado=Enabled×3; Form / Área de texto×2; Icon Button / Estilo=Standard, Estado=Enabled×2; Button / Estilo=Text, Estado=Enabled; List Item / Inicio=Ícono, Líneas=2; App / Barra de acción

**Va a:** —

### M8.04 · Cerrar el trabajo
412 × 889 px · 1 ícono

**Textos:** Cerrar el trabajo · Pedro Silva · Calle Páez 45, San Diego · VexBiz no cobra este trabajo. Aquí sólo queda registrado lo que costó. · Vigente hasta el 16/01/2027

**Componentes:** Form / Campo / Estado=Enabled×3; Icon Button / Estilo=Standard, Estado=Enabled; Form / Área de texto; Form / Selector; App / Barra de acción

**Va a:** —

### M8.05 · Firma del cliente
412 × 799 px · 1 ícono

**Textos:** Firma del cliente · Cambié la tuerca flare de la condensadora, limpié el filtro y recargué 1 kg de gas R410A. El equipo enfría normal. · Total $ 73,00 · Garantía 3 meses · hasta 16/01/2027 · Firma aquí con el dedo

**Componentes:** Button / Estilo=Text, Estado=Enabled×2; Form / Campo / Estado=Enabled; App / Barra de acción

**Va a:** —

### M8.06 · Servicios
412 × 952 px · 3 íconos

**Textos:** Instalación de aire split hasta 18.000 BTU · Visible · Climatización · 180 min · Montaje de evaporadora y condensadora, vacío y prueba. · $ 60,00 · Mantenimiento preventivo · Climatización · 90 min · Limpieza de filtros, serpentines y drenaje. · $ 25,00 · Carga de gas refrigerante · Pausado · Climatización · 60 min · Detección de fuga básica y recarga. · $ 20,00 · Servicios

**Componentes:** List Item / Inicio=Ícono, Líneas=2×2; Switch / Seleccionado=Sí, Estado=Enabled×2; Switch / Seleccionado=No, Estado=Enabled; Button / Estilo=Tonal, Estado=Enabled; App / Barra Técnico / Activa=Servicios

**Va a:** M8.07 (push 350); M8.08 (push 350)

### M8.08 · Cobertura y horario
412 × 994 px · 3 íconos

**Textos:** Zona de cobertura · Recibes solicitudes a menos de 25 km de Valencia. · Punto base fijado en Valencia · Horario semanal · Lunes · 08:00 · a · 18:00 · Martes · Miércoles · Jueves · Viernes · 17:00 · Sábado · 09:00 · 13:00 · Domingo · No disponible · Cobertura y horario

**Componentes:** Divider / Orientación=Horizontal×7; Switch / Seleccionado=Sí, Estado=Enabled×6; Form / Campo / Estado=Enabled; Switch / Seleccionado=No, Estado=Enabled; Icon Button / Estilo=Standard, Estado=Enabled; App / Barra de acción

**Va a:** —

### M8.11 · Compras de trabajo
412 × 865 px · 2 íconos

**Textos:** Compras de trabajo · Calle Páez 45, San Diego · #VX-20501 · Repuestos Frío · Entregado · $ 21,50 · 15/10 · #VX-20512 · Ferretería El Tornillo · En camino · $ 6,50 · Gastado en este trabajo · $ 28,00 USD · Urb. El Viñedo, Calle 4, Casa 12 · #VX-20530 · Herramientas Andina · Pago reportado · $ 48,00 · 16/10 · $ 48,00 USD · Aquí sólo salen las compras que marcaste para un trabajo al comprar.

**Componentes:** Button / Estilo=Text, Estado=Enabled×3; Divider / Orientación=Horizontal×3; List Item / Inicio=Ícono, Líneas=1; App / Barra Técnico / Activa=Compras

**Va a:** M8.03 (push 350)

### M8.12 · Membresía
412 × 865 px · 9 íconos

**Textos:** Membresía · Para recibir solicitudes hace falta una membresía activa. · Técnico Básico · $ 9,90 · USD · Se renueva cada 30 días · Apareces en el directorio de tu zona · Hasta 20 solicitudes al mes · Perfil verificado · Técnico Pro · Recomendado · $ 24,90 · Solicitudes ilimitadas · Prioridad en instalaciones de compras · Insignia «Técnico Pro» · Soporte por WhatsApp · El pago de la membresía se coordina con soporte.

**Componentes:** Icon Button / Estilo=Standard, Estado=Enabled; App / Barra de acción

**Va a:** —

### M8.12 · Membresía · País sin membresía
412 × 536 px · 1 ícono

**Textos:** Membresía · En este país no hace falta membresía para recibir trabajos · Mantén tus documentos y oficios al día para seguir apareciendo en el directorio.

**Componentes:** List Item / Inicio=Ícono, Líneas=1×2; Icon Button / Estilo=Standard, Estado=Enabled

**Va a:** —

### M8.07 · Mis oficios
412 × 754 px · 5 íconos

**Textos:** Mis oficios · Tú te apuntas; la certificación la da VexBiz al revisar tus documentos. · Aire acondicionado · Certificado · 12/05/2026 · Refrigeración comercial · Apuntado · en revisión · Buscar oficios · Oficios disponibles · Electrodomésticos · Electricidad residencial · Energía solar · Plomería

**Componentes:** Button / Estilo=Tonal, Estado=Enabled×4; Icon Button / Estilo=Standard, Estado=Enabled; Button / Estilo=Text, Estado=Enabled

**Va a:** —

### M8.09 · Mis documentos
412 × 876 px · 9 íconos

**Textos:** Mis documentos · Te faltan 2 documentos obligatorios · Cédula de identidad · Verificado · Obligatorio · Foto legible por ambas caras. · Subido el 02/10 · Válido hasta 02/10/2031 · Certificado de refrigeración · Rechazado · Obligatorio · Emitido por un instituto reconocido. · Subido el 05/10 · La foto está borrosa; no se lee el número. · Antecedentes penales · Falta subirlo · Obligatorio · Con menos de 6 meses. · Seguro de responsabilidad · Vencido · Opcional · Recomendado para trabajos grandes. · Venció el 30/09/2026

**Componentes:** Button / Estilo=Tonal, Estado=Enabled×3; Icon Button / Estilo=Standard, Estado=Enabled

**Va a:** —

### M8.10 · Mi perfil profesional
412 × 929 px · 12 íconos

**Textos:** CM · Carlos Mendoza · Sin verificar · 4,8 · calificación · 37 · opiniones · 112 · trabajos · Aire acondicionado · Sube tus documentos para obtener el sello · Presentación pública · Trabajo con equipos split, inverter y de ventana desde 2014. Instalaciones limpias, con vacío y prueba. · 12 años de experiencia · Mis documentos · Mis oficios · Membresía · Cambiar de modo · Perfil · Modo Técnico

**Componentes:** Button / Estilo=Text, Estado=Enabled×2; Icon Button / Estilo=Standard, Estado=Enabled; App / Barra Técnico / Activa=Perfil

**Va a:** M8.09 (push 350); M8.07 (push 350); M8.12 (push 350); ▣ Cambiar de modo (fundido 150); ▣ Avisos en vivo (fundido 150)

## M9 · Modo Empresa de servicio

### M9.01 · Solicitudes  ★ inicio
412 × 1032 px · 6 íconos

**Textos:** Enviada · en revisión. Revisamos en 24 a 48 h hábiles. · 3 · Sin responder · 1 · Fecha pasada · 2 · En curso · 48 · Terminadas · #S-2041 · Por responder · Instalación de aire split 12.000 BTU · María González · Urb. El Viñedo, Valencia · Pedida hace 2 h · #S-2036 · Aceptada · Mantenimiento preventivo de 3 equipos · Panadería La Espiga · Av. Bolívar Norte · Para el 14/10 · 9:00 · $ 120,00 · #S-2030 · Reparación de fuga en condensadora · Luis Pérez · Res. Los Mangos, Naguanagua · Para el 16/10 · 14:00 · $ 85,00 · Solicitudes · Modo Empresa

**Componentes:** Chip / Tipo=Filter, Estado=Enabled×4; Button / Estilo=Text, Estado=Enabled×3; Search Bar / Estado=Enabled; Chip / Tipo=Filter, Estado=Selected; Button / Estilo=Filled, Estado=Enabled; Icon Button / Estilo=Standard, Estado=Enabled; App / Barra Empresa / Activa=Solicitudes

**Va a:** M9.02 (push 350); M9.03 (push 350); ▣ Avisos en vivo (fundido 150)

### M9.02 · Solicitud
412 × 916 px · 4 íconos

**Textos:** En curso · Reparación de fuga en unidad condensadora · Monto pactado · $ 85,00 USD · Cliente y lugar · Luis Pérez · Res. Los Mangos, Torre B, Apto 7-2, Naguanagua · El teléfono del cliente no está disponible. · Cuándo · Fecha acordada · 16/10/2026 · 14:00 · Recibida el · 12/10/2026 · 19:20 · Notas · La condensadora gotea aceite por la válvula de servicio. Edificio con estacionamiento de visitantes. · Si hay un reclamo, VexBiz media con lo que quede registrado en esta solicitud. · Solicitud #S-2030

**Componentes:** Button / Estilo=Tonal, Estado=Enabled; Button / Estilo=Filled, Estado=Enabled; Icon Button / Estilo=Standard, Estado=Enabled

**Va a:** M9.04 (push 350)

### M9.03 · Cotizar
412 × 941 px

**Textos:** Instalación de aire split 12.000 BTU · María González · Urb. El Viñedo, Calle 4, Casa 12, Valencia · Fecha preferida · Sáb 18/10 · mañana · Caduca el · 17/10 · 08:14 · Notas del cliente · El equipo ya está comprado. La unidad exterior va en el balcón, 3er piso. Hay toma de 220 V cerca. · Total · $ 85,00 · Cotizar

**Componentes:** Form / Campo / Estado=Enabled×2; Form / Área de texto; Button / Estilo=Filled, Estado=Enabled; Icon Button / Estilo=Standard, Estado=Enabled

**Va a:** —

### M9.04 · Cerrar con garantía
412 × 880 px · 2 íconos

**Textos:** Cerrar el trabajo · Reparación de fuga en unidad condensadora · Luis Pérez · Naguanagua · Monto pactado · $ 85,00 · Garantía · Vigente hasta el 16/04/2027 · Para cerrar hace falta conexión. El informe queda guardado en este teléfono.

**Componentes:** Icon Button / Estilo=Standard, Estado=Enabled; Form / Área de texto; Segmented Button / Segmento / Posición=Start, Seleccionado=No; Segmented Button / Segmento / Posición=Middle, Seleccionado=No; Segmented Button / Segmento / Posición=Middle, Seleccionado=Sí; Segmented Button / Segmento / Posición=End, Seleccionado=No; Form / Campo / Estado=Enabled; Button / Estilo=Filled, Estado=Enabled

**Va a:** M9.01 (fundido 350)

### M9.05 · Catálogo
412 × 1000 px · 8 íconos

**Textos:** En oferta (3) · Instalación de aire split hasta 12.000 BTU · Desde $ 85,00 USD · 2 h · Hasta 3 m de tubería, soporte exterior, vacío y prueba. · Climatización · Pedido 23 veces · Mantenimiento preventivo · Desde $ 35,00 USD · 1 h · Limpieza de filtros, serpentines y drenaje. · Pedido 41 veces · Carga de gas refrigerante R410A · Desde $ 60,00 USD · 1 h 30 min · Incluye detección de fugas básica. · 1 servicio pausado · Reparación de tarjeta electrónica · Catálogo · Modo Empresa

**Componentes:** Button / Estilo=Text, Estado=Enabled×7; Button / Estilo=Tonal, Estado=Enabled×2; App / Barra Empresa / Activa=Catálogo

**Va a:** M9.06 (push 350); M9.06 (hoja 400)

### M9.06 · Servicio
412 × 852 px · 1 ícono

**Textos:** Nuevo servicio · Se publica en el oficio que tu empresa tiene asignado. · Publicado · Se ve en tu ficha y en las búsquedas.

**Componentes:** Form / Campo / Estado=Enabled×3; Icon Button / Estilo=Standard, Estado=Enabled; Form / Área de texto; Switch / Seleccionado=Sí, Estado=Enabled; Button / Estilo=Filled, Estado=Enabled

**Va a:** —

### M9.07 · Perfil público
412 × 1202 px · 16 íconos

**Textos:** Lo que falta · Los clientes no pueden llamarte. · Tu ficha no lleva el sello de VexBiz. · CP · ClimaPro Servicios · 4,9 · 58 opiniones · Valencia · Naguanagua · San Diego · contacto@climapro.com · www.climapro.com · Instalación de aire split hasta 12.000 BTU · Desde $ 85 · Mantenimiento preventivo · Desde $ 35 · Carga de gas R410A · Desde $ 60 · Verificación de la empresa · En preparación · RIF de la empresa · Obligatorio · Verificado · Registro Mercantil · Obligatorio · Pendiente · Faltan: Registro Mercantil · Datos de contacto · Nombre, razón social, correo, teléfono, web y dirección · Logo · Cambiar o quitar · Membresía · Empresa Pro · vence el 28/10 · Cambiar de modo · Perfil · Modo Empresa

**Componentes:** Button / Estilo=Text, Estado=Enabled×2; Button / Estilo=Tonal, Estado=Enabled; Icon Button / Estilo=Standard, Estado=Enabled; App / Barra Empresa / Activa=Perfil

**Va a:** M9.08 (push 350); ▣ Cambiar de modo (fundido 150); ▣ Avisos en vivo (fundido 150)

### M9.08 · Membresía
412 × 569 px · 3 íconos

**Textos:** Membresía · Vence en 12 días. · Empresa Pro · Activa · Costo · $ 29,00 USD cada 30 días · Válida desde · 28/09/2026 · Válida hasta · 28/10/2026 · Renovación automática · Sí · Cómo se renueva · La contratación y la renovación se coordinan con soporte.

**Componentes:** Icon Button / Estilo=Standard, Estado=Enabled; Button / Estilo=Outlined, Estado=Enabled

**Va a:** —

## Superposiciones

### Superposición · Resumen de la compra
412 × 892 px · 3 íconos

**Textos:** Resumen de la compra · 4 artículos · Casa · Av. Bolívar Norte, Valencia · Débito bancario · Banesco · Personal · Subtotal · $ 568,80 · Envío · Frío Total C.A. · $ 8,40 · Envío · Herramientas Andina · No te lo cobran · Impuesto del pago (3 %) · $ 17,32 · Cupón: VEXBIZ10 · se aplica al confirmar · Total a pagar · $ 594,52 · Precios y envío con impuestos incluidos · ≈ Bs 21.937,79 referencial · Se crean 2 pedidos, uno por tienda, con un solo pago.

**Componentes:** Icon Button / Estilo=Standard, Estado=Enabled; Divider / Orientación=Horizontal; Button / Estilo=Filled, Estado=Enabled

**Va a:** M3.08 (push 350)

### Superposición · Acciones de la dirección
412 × 892 px · 3 íconos

**Textos:** Oficina · Editar · Usar como predeterminada · Quitar

**Componentes:** —

**Va a:** M6.14 (hoja 400)

### Superposición · Detalle del período
412 × 892 px

**Textos:** Detalle del período · 01/10 — 15/10/2026 · Total de ventas brutas · $ 3.546,00 · Comisión del marketplace · − $ 425,52 · Retenciones tributarias · − $ 38,28 · Ajustes · Saldo arrastrado del período anterior · Corte del 30/09 bajo el mínimo · + $ 38,20 · Reembolso pedido #VX-20188 · Devolución aprobada · − $ 64,00 · Total neto liquidado · $ 3.120,40

**Componentes:** —

**Va a:** —

### Superposición · Filtros y orden
412 × 892 px · 6 íconos

**Textos:** Filtros y orden · Ordenar por · Más relevantes · Menor precio · Mayor precio · Aplicados · Samsung · Nuevo · Marca · 1 · 24 · LG · 18 · Midea · 15 · Daikin · 9 · Carrier · 7 · Condición · 1 · Sólo disponibles · Precio (USD)

**Componentes:** Checkbox / Valor=Unchecked, Estado=Enabled×4; Button / Estilo=Text, Estado=Enabled×2; Radio Button / Seleccionado=No, Estado=Enabled×2; Form / Campo / Estado=Enabled×2; Icon Button / Estilo=Standard, Estado=Enabled; Radio Button / Seleccionado=Sí, Estado=Enabled; Checkbox / Valor=Checked, Estado=Enabled; Switch / Seleccionado=Sí, Estado=Enabled; Button / Estilo=Filled, Estado=Enabled

**Va a:** —

### Superposición · Otras tiendas que lo venden
412 × 892 px · 4 íconos

**Textos:** 7 tiendas lo venden · Aire split inverter 12.000 BTU · CR · ClimaRepuestos · ★ 4.7 · Valencia · Nuevo · Mejor precio · $ 372,00 · Disponible · 12 u. · FT · Frío Total C.A. · ★ 4.8 · Caracas · La que estás viendo · $ 389,00 · $ 486,25 · Disponible · 8 u. · EH · ElectroHogar · ★ 4.4 · Maracay · Caja abierta · $ 395,00 · Últimas 2 unidades · RS · Refrigeración El Sol · ★ 4.2 · Mérida · $ 410,00 · Agotado

**Componentes:** Button / Estilo=Outlined, Estado=Enabled×4; Button / Estilo=Filled, Estado=Enabled×3; Icon Button / Estilo=Standard, Estado=Enabled; Button / Estilo=Filled, Estado=Disabled

**Va a:** —

### Superposición · Cambiar de modo
412 × 892 px · 6 íconos

**Textos:** Cambiar de modo · Comprador · Compra productos y pide servicios. · Tienda · Pedidos, productos y dinero de Frío Total. · Técnico · Tus trabajos, servicios y compras de trabajo. · Haz más con VexBiz · Registrar mi empresa de servicios

**Componentes:** —

**Va a:** M2.01 (fundido 350); M7.01 (fundido 350); M8.01 (fundido 350); M6.22 (push 350)

### Superposición · Avisos en vivo
412 × 892 px · 1 ícono

**Textos:** Lo que acaba de pasar · en vivo · Nueva compra para contestar · Aire split 12.000 BTU · quedan 14:52 · 03:24 · Pedido #VX-20412 pagado · Ya puedes despacharlo. · 03:10 · Nuevo reclamo #R-0091 · Carmen D. abrió un reclamo. · 02:58 · Sonido de avisos

**Componentes:** Switch / Seleccionado=Sí, Estado=Enabled; Button / Estilo=Text, Estado=Enabled

**Va a:** M6.17 (push 350)

### Superposición · Añadido al carrito
412 × 892 px · 1 ícono

**Textos:** Añadido al carrito · Aire split inverter 12.000 BTU · Frío Total C.A. · $ 389,00 × 1 · 3 artículos en tu carrito · $ 432,90

**Componentes:** Icon Button / Estilo=Standard, Estado=Enabled; Button / Estilo=Filled, Estado=Enabled; Button / Estilo=Text, Estado=Enabled

**Va a:** M3.01 (push 350)

### Superposición · Consentimiento de privacidad
412 × 892 px · 1 ícono

**Textos:** Tu privacidad · Lo necesario para que la app funcione (sesión, carrito y país) no se pregunta. Te pedimos permiso para análisis y publicidad. · Vista «Personalizar» · Análisis · Para saber qué se busca y qué no se encuentra. · Publicidad · Para enseñarte anuncios de lo que miraste.

**Componentes:** Button / Estilo=Filled, Estado=Enabled×3; Button / Estilo=Text, Estado=Enabled×2; Switch / Seleccionado=Sí, Estado=Enabled; Switch / Seleccionado=No, Estado=Enabled

**Va a:** M1.02 (fundido 350)
