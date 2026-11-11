/* VEXBIZ · prototipo empaquetado para file://. Generado por tools/build_local.py: no editar a mano. */
(() => {
  // assets/js/screens/registry.js
  var defs = /* @__PURE__ */ new Map();
  var register = (id, def) => {
    defs.set(id, def);
    return def;
  };

  // assets/js/data.js
  var TASA = 36.89486;
  var usuario = {
    nombre: "Aníbal Lejarazu",
    iniciales: "AL",
    correo: "anibal@correo.com",
    verificado: true,
    ciudad: "Valencia, Carabobo",
    resumen: { sinPagar: 1, enCamino: 2, entregados: 14 },
    gastoMensual: [["May", 48], ["Jun", 95], ["Jul", 31], ["Ago", 142], ["Sep", 77], ["Oct", 124]]
  };
  var direcciones = [
    { id: "casa", nombre: "Casa", predeterminada: true, linea: "Av. Bolívar Norte, Res. Los Samanes, Torre B, Apto 4-2", ref: "Frente a la plaza", ciudad: "Valencia, Carabobo", cp: "2001", tel: "0414-555 1234" },
    { id: "oficina", nombre: "Oficina", linea: "C.C. Metrópolis, Nivel 2, Local 214", ciudad: "Valencia, Carabobo", cp: "2003", tel: "0241-555 9876", sinMapa: true },
    { id: "taller", nombre: "Taller principal", linea: "Zona Industrial Castillito, Calle 98", ciudad: "San Diego, Carabobo", cp: "2006", tel: "0412-555 4422", sinMapa: true }
  ];
  var tiendas = [
    { id: "ft", sigla: "FT", nombre: "Frío Total C.A.", nicho: "Climatización", ciudad: "Caracas", region: "Distrito Capital", rating: 4.8, productos: 46, verificada: true },
    { id: "cr", sigla: "CR", nombre: "ClimaRepuestos", nicho: "Climatización", ciudad: "Valencia", rating: 4.7, productos: 128 },
    { id: "ha", sigla: "HA", nombre: "Herramientas Andina", nicho: "Herramientas", ciudad: "Mérida", rating: 4.7, productos: 301 },
    // INVENTADO: ciudad y conteo
    { id: "re", sigla: "RE", nombre: "Repuestos Express", nicho: "Refrigeración", ciudad: "Caracas", rating: 4.9, productos: 87 },
    // INVENTADO: ciudad y conteo
    { id: "eh", sigla: "EH", nombre: "ElectroHogar", nicho: "Electrodomésticos", ciudad: "Maracay", rating: 4.4, productos: 212 },
    { id: "et", sigla: "ET", nombre: "Ferretería El Tornillo", nicho: "Herramientas", ciudad: "Valencia", rating: 4.5, productos: 164 },
    // INVENTADO
    { id: "rf", sigla: "RF", nombre: "Repuestos Frío", nicho: "Refrigeración", ciudad: "Barquisimeto", rating: 4.6, productos: 95 },
    // INVENTADO
    { id: "rs", sigla: "RS", nombre: "Refrigeración El Sol", nicho: "Refrigeración", ciudad: "Mérida", rating: 4.2, productos: 37 }
  ];
  var productos = [
    { id: "aa12", nombre: "Aire split inverter 12.000 BTU", corto: "Aire split 12.000 BTU", marca: "Samsung", ref: "AR12TVHZ", gtin: "8801643562371", categoria: "Climatización › Aires split", tienda: "ft", precio: 389, antes: 486.25, oferta: "20/10", stock: 12 },
    { id: "ctrl", nombre: "Control remoto universal A/A", corto: "Control remoto universal", categoria: "Climatización › Controles", tienda: "ft", precio: 12.5, precioAnterior: 11.9, stock: 40 },
    // INVENTADO: precioAnterior (la línea «Cambió de precio»)
    { id: "cap", nombre: "Capacitor de marcha 35+5 µF", corto: "Capacitor de marcha", categoria: "Climatización › Repuestos", tienda: "ft", precio: 9.5, stock: 60 },
    { id: "comp", nombre: "Compresor rotativo 12.000 BTU R410A", corto: "Compresor rotativo 12K", marca: "GMCC", ref: "FT-CMP-12K", categoria: "Climatización › Compresores", tienda: "ft", precio: 189, stock: 8 },
    { id: "tarj", nombre: "Tarjeta electrónica condensadora split 12K", corto: "Tarjeta condensadora 12K", categoria: "Climatización › Tarjetas", tienda: "cr", precio: 64, stock: 15 },
    { id: "tal", nombre: "Taladro percutor inalámbrico 18V", corto: "Taladro percutor 18V", categoria: "Herramientas", tienda: "ha", precio: 129.9, stock: 9 },
    { id: "llav", nombre: "Juego de llaves 12 piezas", corto: "Juego de llaves 12 piezas", categoria: "Herramientas", tienda: "ha", precio: 24.9, stock: 30 },
    // INVENTADO: el resto del catálogo de demo (aires y compresores) para que Resultados, Nicho, Categoría y Filtros tengan qué filtrar
    { id: "lg12", nombre: "Aire split Dual Inverter 12.000 BTU", corto: "Aire LG Dual 12K", marca: "LG", ref: "S4-Q12JA3WF", categoria: "Climatización › Aires split", tienda: "ft", precio: 412, stock: 6 },
    { id: "mi12", nombre: "Aire split Xtreme Save 12.000 BTU", corto: "Aire Midea 12K", marca: "Midea", ref: "MSAGBU-12CRDN8", categoria: "Climatización › Aires split", tienda: "cr", precio: 356, stock: 14 },
    { id: "da18", nombre: "Aire split inverter 18.000 BTU", corto: "Aire Daikin 18K", marca: "Daikin", ref: "FTKB50", categoria: "Climatización › Aires split", tienda: "ft", precio: 629, stock: 3 },
    { id: "ca24", nombre: "Aire split 24.000 BTU 220V", corto: "Aire Carrier 24K", marca: "Carrier", ref: "42QHC024", categoria: "Climatización › Aires split", tienda: "eh", precio: 780, stock: 0 },
    { id: "sa09", nombre: "Aire split inverter 9.000 BTU", corto: "Aire Samsung 9K", marca: "Samsung", ref: "AR09TVHZ", categoria: "Climatización › Aires split", tienda: "cr", precio: 298, stock: 20 },
    { id: "lg18", nombre: "Aire split Dual Inverter 18.000 BTU", corto: "Aire LG Dual 18K", marca: "LG", ref: "S4-Q18KL3QF", categoria: "Climatización › Aires split", tienda: "ft", precio: 540, stock: 9, condicion: "Caja abierta" },
    { id: "cs24", nombre: "Compresor scroll 24.000 BTU", corto: "Compresor scroll 24K", marca: "GMCC", ref: "FT-CMP-24S", categoria: "Climatización › Compresores", sub: "scroll", tienda: "ft", precio: 320, stock: 5 },
    { id: "ci12", nombre: "Compresor inverter 12.000 BTU", corto: "Compresor inverter 12K", marca: "Samsung", ref: "FT-CMP-12I", categoria: "Climatización › Compresores", sub: "inverter", tienda: "ft", precio: 245, stock: 4 },
    { id: "cn14", nombre: "Compresor para nevera 1/4 HP", corto: "Compresor nevera 1/4 HP", marca: "GMCC", ref: "FT-CMP-N14", categoria: "Climatización › Compresores", sub: "nevera", tienda: "rs", precio: 78, stock: 11 }
  ];
  Object.assign(producto_("lg12"), { antes: 515, oferta: "20/10" });
  Object.assign(producto_("mi12"), { antes: 445, oferta: "20/10" });
  Object.assign(producto_("sa09"), { antes: 372.5, oferta: "20/10" });
  function producto_(id) {
    return productos.find((p) => p.id === id);
  }
  productos.forEach((p) => {
    p.condicion = p.condicion || "Nuevo";
    if (!p.sub && p.id === "comp") p.sub = "rotativo";
  });
  var producto = (id) => productos.find((p) => p.id === id);
  var ofertas = {
    aa12: [
      { t: "cr", precio: 372, stock: 12, nota: "Mejor precio" },
      { t: "ft", precio: 389, antes: 486.25, stock: 8, actual: true },
      { t: "eh", precio: 395, stock: 2, nota: "Caja abierta" },
      { t: "rs", precio: 410, stock: 0 }
    ]
  };
  var precioDe = (id, oferta) => oferta ? ofertas[id].find((o) => o.t === oferta).precio : producto(id).precio;
  var tiendaDe = (id, oferta) => tienda(oferta || producto(id).tienda);
  var tienda = (id) => tiendas.find((t) => t.id === id);
  var carritoInicial = [
    { id: "aa12", qty: 1 },
    { id: "ctrl", qty: 2, cambioPrecio: true },
    { id: "tal", qty: 1 },
    { id: "llav", qty: 1 }
  ];
  var pedidos = [
    { id: "#VX-20431", tienda: "Frío Total C.A.", fecha: "15/10", total: 422.4, estado: "Falta pagar" },
    { id: "#VX-20432", tienda: "Herramientas Andina", fecha: "15/10", total: 154.8, estado: "Pago reportado" },
    { id: "#VX-20377", tienda: "Repuestos Express", fecha: "02/10", total: 45.6, estado: "En camino" },
    { id: "#VX-20211", tienda: "ElectroHogar", fecha: "18/09", total: 39.2, estado: "Entregado" }
  ];
  var compra = {
    pasarela: { total: 466.14, impuestoPct: 2, tasaDia: "16/10", intento: "SP-88123" },
    debitoPct: 3,
    // impuesto del débito bancario (M3.06 / M3.07)
    pedidos: [{ id: "#VX-20430", tienda: "Frío Total C.A.", total: 389, articulos: 1 }, { id: "#VX-20431", tienda: "ClimaRepuestos", total: 68, articulos: 2 }],
    bancos: [{ id: "banesco", nombre: "Banesco", tipo: "Personal", doc: "V-12.***.678", tel: "0414-***-1234" }, { id: "mercantil", nombre: "Mercantil", doc: "V-12.***.678", tel: "0412-***-9876" }]
  };
  var solicitudes = [
    { id: "#S-1082", servicio: "Instalación de aire split 12.000 BTU", total: 60, cliente: "María González", direccion: "Urb. El Viñedo, Calle 4, Casa 12, Valencia", cuando: "sábado 18/10/2026 9:00", caducaMs: (5 * 60 + 12) * 6e4 }
  ];
  var tienda_modo = {
    nombre: "Frío Total",
    pendientes: 3,
    cuentaMs: (4 * 60 + 32) * 1e3,
    comisionPct: 12,
    porDespachar: [
      { id: "#VX-20412", cliente: "María González", total: 48 },
      { id: "#VX-20409", cliente: "José Rodríguez", total: 19.6, retiro: true },
      { id: "#VX-20405", cliente: "Carmen Díaz", total: 112.5 }
    ]
  };
  var avisos = {
    compra: { titulo: "Nueva compra para contestar", detalle: "Aire split 12.000 BTU · 1 × $ 389,00", ms: (14 * 60 + 52) * 1e3 },
    recientes: [
      { titulo: "Aire split 12.000 BTU", detalle: "quedan 14:52", hora: "03:24" },
      { titulo: "Pedido #VX-20412 pagado", detalle: "Ya puedes despacharlo.", hora: "03:10" },
      { titulo: "Nuevo reclamo #R-0091", detalle: "Carmen D. abrió un reclamo.", hora: "02:58" }
    ]
  };
  var nichos = [
    { id: "clima", nombre: "Climatización", texto: "Aires, repuestos y herramientas de refrigeración.", productos: 1284, servicio: true },
    { id: "refri", nombre: "Refrigeración comercial", texto: "Neveras, cavas y equipos para negocios.", productos: 642 },
    { id: "electro", nombre: "Electrodomésticos", texto: "Línea blanca y sus repuestos.", productos: 938 },
    { id: "elec", nombre: "Electricidad", texto: "Cableado, breakers e iluminación.", productos: 2110 },
    { id: "solar", nombre: "Energía solar", texto: "Paneles, inversores y baterías.", productos: 214 },
    { id: "plom", nombre: "Plomería", texto: "Tuberías, bombas y grifería.", productos: 0 }
  ];
  var directorio = [
    { id: "ft", sigla: "FT", nombre: "Frío Total C.A.", nicho: "Climatización", ciudad: "Caracas", rating: 4.8, productos: 46 },
    { id: "cr", sigla: "CR", nombre: "ClimaRepuestos", nicho: "Climatización", ciudad: "Valencia", rating: 4.7, productos: 128 },
    { id: "eh", sigla: "EH", nombre: "ElectroHogar Express", nicho: "Electrodomésticos", ciudad: "Barquisimeto", rating: 4.6, productos: 212 },
    { id: "vc", sigla: "VC", nombre: "Voltio Center", nicho: "Electricidad", ciudad: "Caracas", rating: 4.9, productos: 534 },
    { id: "rs", sigla: "RS", nombre: "Refrigeración El Sol", nicho: "Refrigeración", ciudad: "Maracay", rating: 4.2, productos: 37 }
  ];
  var sugerencias = [
    { t: "Compresor rotativo 12.000 BTU R410A", n: "7 tiendas", en: "En Climatización" },
    { t: "Compresor scroll 24.000 BTU", n: "3 tiendas" },
    { t: "GMCC", n: "42 productos" },
    { t: "compresor de nevera", n: "128 resultados" },
    { t: "compresor 12000 btu", n: "86 resultados" }
  ];
  var recientes = ["aire split 12000", "capacitor 35 uf"];
  var HOY = new Date(2026, 9, 16);
  var IMPUESTO_INCLUIDO = 19;
  var garantias = [
    { id: "g1", producto: "Aire split inverter 12.000 BTU", responde: "Samsung, por Frío Total C.A.", hasta: new Date(2027, 9, 16), ref: "Pedido #VX-20412" },
    { id: "g2", producto: "Instalación de aire split", responde: "ClimaPro Servicios", hasta: new Date(2027, 0, 18), ref: "Solicitud #S-2041" },
    { id: "g3", producto: "Capacitor de marcha 35+5 µF", responde: "Frío Total C.A.", hasta: new Date(2026, 8, 2), ref: "Pedido #VX-19870" }
  ];
  var detallePedidos = {
    "#VX-20211|ElectroHogar": { emitido: "18/09/2026", envio: { empresa: "Zoom", despachado: "19/09/2026", guia: "1234 5678 90" }, factura: { n: "000-0458", fecha: "19/09/2026" }, lineas: [
      { n: "Bombillo LED 12W · pack x4", q: 2, p: 9.8, garantia: "18/03/2027" },
      { n: "Regleta con protector 6 tomas", q: 2, p: 9.8, garantia: "18/09/2027", devolucion: "1 de 2 en devolución" }
    ] },
    "#VX-20431|Frío Total C.A.": { emitido: "15/10/2026", lineas: [{ n: "Aire split inverter 12.000 BTU", q: 1, p: 389 }, { n: "Control remoto universal", q: 2, p: 12.5 }] },
    "#VX-20432|Herramientas Andina": { emitido: "15/10/2026", lineas: [{ n: "Taladro percutor inalámbrico 18V", q: 1, p: 129.9 }, { n: "Juego de llaves 12 piezas", q: 1, p: 24.9 }] },
    "#VX-20377|Repuestos Express": { emitido: "02/10/2026", envio: { empresa: "MRW", despachado: "03/10/2026", guia: "4019-882-113" }, lineas: [{ n: "Kit de mantenimiento para aire acondicionado", q: 1, p: 45.6 }] },
    // INVENTADO
    "#VX-20430|Frío Total C.A.": { emitido: "16/10/2026", lineas: [{ n: "Aire split inverter 12.000 BTU", q: 1, p: 389 }] },
    "#VX-20431|ClimaRepuestos": { emitido: "16/10/2026", lineas: [{ n: "Tarjeta electrónica condensadora split 12K", q: 1, p: 64 }] }
  };
  var reclamosIni = [
    {
      id: "#R-0091",
      pedido: "#VX-20301",
      tienda: "Herramientas Andina",
      total: 24.9,
      fecha: "03/10",
      abierto: "03/10/2026",
      estado: "En mediación",
      resumen: "El control remoto no es compatible con mi equipo…",
      motivo: "El control remoto no es compatible con mi equipo y la tienda no me responde.",
      ultimo: "VexBiz",
      mensajes: [{ de: "Tú", hora: "10:12", t: "Pedí el control para un LG y me llegó uno que no lo reconoce." }, { de: "La tienda", hora: "15:40", t: "Podemos cambiarlo por el modelo correcto sin costo." }, { de: "VexBiz", hora: "09:00", t: "La tienda tiene hasta el 07/10 para enviar el cambio o aprobar el reembolso." }]
    },
    { id: "#R-0074", pedido: "#VX-20188", fecha: "18/09", estado: "Resuelto", resumen: "Me enviaron la tarjeta de un modelo distinto.", resolucion: "Reembolso total de $ 64,00 al comprador." }
  ];
  var devolucionesIni = [{ id: "#D-0031", pedido: "#VX-20211", item: "Regleta con protector 6 tomas", unidades: 1, estado: "En revisión", fecha: "20/09" }];
  var avisosCuenta = [
    { id: "a1", t: "La compra #VX-20430 vence en 2 horas", d: "Transfiere antes de las 18:00 o se cancela.", cuando: "hace 10 min", nuevo: true, to: "M3.09", ic: "clock" },
    { id: "a2", t: "Tu pedido #VX-20412 va en camino", d: "MRW · guía 4019-882-113.", cuando: "hace 2 h", to: "M6.04", ic: "truck" },
    { id: "a3", t: "ClimaPro te mandó una cotización", d: "$ 85,00 para el sábado 18/10.", cuando: "hace 5 h", to: "M6.12", ic: "wrench" },
    { id: "a4", t: "Tu reclamo #R-0074 se resolvió a tu favor", d: "Reembolso de $ 64,00.", cuando: "hace 3 días", to: "M6.09", ic: "check" }
  ];
  var pagosIni = [
    { id: "nomina", titulo: "Nómina", sub: "Cobro a tu cuenta", preferida: true, doc: "V-18.***.789", cuenta: "····4567", ultimo: "12/10/2026" },
    { id: "banesco", titulo: "Banesco ····1234", sub: "Teléfono y banco", doc: "V-18.***.789", tel: "0414 ···1234", ultimo: "28/09/2026", falla: true },
    { id: "binance", titulo: "Binance", sub: "Binance Pay", correo: "an***@correo.com" }
  ];
  var sesionesIni = [
    { id: "s1", equipo: "App VexBiz", so: "Android 15", actual: true, ip: "200.84.12.6", desde: "02/10", ic: "phone" },
    { id: "s2", equipo: "Chrome", so: "Windows 11", ip: "190.205.33.18", desde: "16/10", ic: "desktop" },
    { id: "s3", equipo: "Safari", so: "iPhone", ip: "190.205.33.18", desde: "12/10", ic: "phone" }
  ];
  var serviciosPedidos = [
    { id: "#S-2041", estado: "Aceptado · agendando", ok: false, servicio: "Instalación de aire split 12.000 BTU", quien: "ClimaPro Servicios", nota: "La empresa asignará al técnico", cuando: "Sáb 18/10 · 09:00", total: 85, donde: "Urb. El Viñedo, Calle 4, Valencia" },
    { id: "#S-1977", estado: "Trabajo completado", ok: true, servicio: "Mantenimiento preventivo", quien: "Carlos Mendoza", rating: 4.8, cuando: "02/10 · 14:00", total: 35 }
  ];
  var estadosVE = { Carabobo: ["Valencia", "San Diego", "Naguanagua"], "Distrito Capital": ["Caracas"], Aragua: ["Maracay", "Turmero"], Lara: ["Barquisimeto"], Mérida: ["Mérida"] };
  var bancosVE = ["Banesco", "Mercantil", "Banco de Venezuela", "BBVA Provincial", "Bancamiga"];

  // assets/js/format.js
  var nf = (min, max) => new Intl.NumberFormat("es-VE", { minimumFractionDigits: min, maximumFractionDigits: max, useGrouping: "always" });
  var nf2 = nf(2, 2);
  var nf0 = nf(0, 0);
  var nf1 = nf(1, 1);
  var round2 = (n) => Math.round((n + Number.EPSILON) * 100) / 100;
  var money = (usd) => `$ ${nf2.format(usd)}`;
  var num = (n, decimals = 2) => (decimals === 0 ? nf0 : decimals === 1 ? nf1 : nf2).format(n);
  var bs = (usd, { decimals = 2, tasa = TASA } = {}) => `Bs ${(decimals === 0 ? nf0 : nf2).format(usd * tasa)}`;
  var bsRef = (usd, tasaDia = "15/10", opts) => `≈ ${bs(usd, opts)} · tasa del ${tasaDia}`;
  var pct = (base, p) => round2(base * p / 100);
  var date = (d) => {
    const x = d instanceof Date ? d : new Date(d);
    const p = (n) => String(n).padStart(2, "0");
    return `${p(x.getDate())}/${p(x.getMonth() + 1)}/${x.getFullYear()}`;
  };
  var plural = (n, uno, varios) => `${n} ${n === 1 ? uno : varios}`;
  var clock = (ms, { pad = false } = {}) => {
    const s = Math.max(0, Math.ceil(ms / 1e3));
    const h2 = Math.floor(s / 3600), m = Math.floor(s % 3600 / 60), r = s % 60;
    const two = (n) => String(n).padStart(2, "0");
    if (h2) return `${two(h2)}:${two(m)}:${two(r)}`;
    return `${pad ? two(m) : m}:${two(r)}`;
  };
  var esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]);

  // assets/js/screens/catalog.js
  var M = {
    M0: ["Transversales", null, 0],
    M1: ["Acceso", null, 1],
    M2: ["Descubrir", "comprador", 1],
    M3: ["Compra", "comprador", 1],
    M4: ["Servicios", "comprador", 3],
    M5: ["Academia", "comprador", 3],
    M6: ["Cuenta", "comprador", 2],
    M7: ["Modo Tienda", "tienda", 5],
    M8: ["Modo Técnico", "tecnico", 4],
    M9: ["Modo Empresa de servicio", "empresa", 6],
    OV: ["Superposiciones", null, 0]
  };
  var MODULES = Object.entries(M).map(([id, [name, mode, phase]]) => ({ id, name, mode, phase }));
  var ROWS = [
    // M0 · Transversales
    ["O.MOD", "M0.03", "Cambiar de modo (hoja)", "M0", { alias: "O.MOD" }],
    ["O.AVI", "M0.04", "Avisos en vivo (hoja)", "M0", { alias: "O.AVI" }],
    ["O.CAR", "M0.05", "Añadido al carrito (hoja)", "M0", { alias: "O.CAR" }],
    ["M0.06", "M0.06", "Estados comunes", "M0", {}],
    ["O.CON", "M0.07", "Consentimiento de privacidad", "M0", { alias: "O.CON" }],
    // M1 · Acceso
    ["M1.02", "M1.02", "Entrar", "M1", {}],
    ["M1.05", "M1.05", "Crear cuenta", "M1", { type: "flow" }],
    ["M1.01", "M1.01", "Arranque", "M1", { start: true }],
    ["M1.03", "M1.03", "Segundo factor", "M1", {}],
    ["M1.04", "M1.04", "Correo sin confirmar", "M1", {}],
    ["M1.06", "M1.06", "Revisa tu correo", "M1", {}],
    ["M1.07", "M1.07", "Unirse al país", "M1", {}],
    ["M1.08", "M1.08", "Recuperar contraseña", "M1", {}],
    ["M1.09", "M1.09", "Contraseña nueva", "M1", {}],
    ["M1.10", "M1.10", "Boletín", "M1", {}],
    // M2 · Descubrir
    ["M2.01", "M2.01", "Inicio", "M2", { tab: "inicio", start: true }],
    ["M2.03", "M2.03", "Resultados", "M2", { tab: "explorar" }],
    ["M2.08", "M2.08", "Ficha de producto", "M2", {}],
    ["M2.02", "M2.02", "Buscar", "M2", {}],
    ["O.FIL", "M2.04", "Filtros y orden (hoja)", "M2", { alias: "O.FIL" }],
    ["M2.05", "M2.05", "Nichos", "M2", { tab: "explorar" }],
    ["M2.06", "M2.06", "Nicho", "M2", { tab: "explorar" }],
    ["M2.07", "M2.07", "Categoría", "M2", { tab: "explorar" }],
    ["M2.09", "M2.09", "Galería", "M2", {}],
    ["O.OTR", "M2.10", "Otras tiendas que lo venden (hoja)", "M2", { alias: "O.OTR" }],
    ["M2.11", "M2.11", "Tiendas", "M2", { tab: "explorar" }],
    ["M2.12", "M2.12", "Tienda", "M2", { tab: "explorar" }],
    // M3 · Compra
    ["M3.01", "M3.01", "Carrito", "M3", { tab: "carrito" }],
    ["M3.02", "M3.02", "Pagar · Entrega", "M3", {}],
    ["M3.04", "M3.04", "Pagar · Envío", "M3", {}],
    ["M3.06", "M3.06", "Pagar · Forma de pago", "M3", {}],
    ["O.RES", "M3.07", "Resumen de la compra (hoja)", "M3", { alias: "O.RES" }],
    ["M3.03", "M3.03", "Elegir o crear dirección", "M3", { type: "flow" }],
    ["M3.05", "M3.05", "Ruta del envío", "M3", {}],
    ["M3.08", "M3.08", "Sala de espera", "M3", {}],
    ["M3.09", "M3.09", "Pago de la compra", "M3", {}],
    ["M3.10", "M3.10", "Pagar con la pasarela", "M3", {}],
    ["M3.11", "M3.11", "Resultado del pago", "M3", {}],
    ["M3.12", "M3.12", "Reportar una transferencia", "M3", {}],
    // M4 · Servicios
    ["M4.01", "M4.01", "Servicios", "M4", { tab: "inicio", start: true }],
    ["M4.02", "M4.02", "Servicio técnico", "M4", {}],
    ["M4.03", "M4.03", "Quién presta el servicio", "M4", {}],
    ["M4.04", "M4.04", "Perfil de técnico", "M4", {}],
    ["M4.05", "M4.05", "Perfil de empresa de servicio", "M4", {}],
    ["M4.06", "M4.06", "Seguros", "M4", {}],
    ["M4.07", "M4.07", "Aseguradora", "M4", {}],
    ["M4.08", "M4.08", "Auxilio vial", "M4", {}],
    ["M4.09", "M4.09", "Empresa de auxilio", "M4", {}],
    // M5 · Academia
    ["M5.01", "M5.01", "Academia", "M5", { start: true }],
    ["M5.02", "M5.02", "Curso", "M5", {}],
    ["M5.03", "M5.03", "Mis cursos", "M5", {}],
    ["M5.04", "M5.04", "Lección", "M5", {}],
    ["M5.05", "M5.05", "Eventos", "M5", {}],
    ["M5.06", "M5.06", "Comunidad: foros", "M5", {}],
    ["M5.07", "M5.07", "Foro: preguntas", "M5", {}],
    ["M5.08", "M5.08", "Hilo de una pregunta", "M5", {}],
    ["M5.09", "M5.09", "Escribir pregunta", "M5", { type: "flow" }],
    ["M5.10", "M5.10", "Mi nivel y mis puntos", "M5", {}],
    // M6 · Cuenta
    ["M6.01", "M6.01", "Cuenta", "M6", { tab: "cuenta" }],
    ["M6.03", "M6.03", "Pedidos", "M6", { tab: "pedidos" }],
    ["M6.04", "M6.04", "Detalle del pedido", "M6", {}],
    ["M6.05", "M6.05", "Ayuda con un pedido", "M6", { tab: "pedidos" }],
    ["M6.13", "M6.13", "Direcciones", "M6", {}],
    ["O.ACC", "M6.13 ▣", "Direcciones · Hoja de acciones", "M6", { alias: "O.ACC" }],
    ["M6.02", "M6.02", "Datos personales", "M6", {}],
    ["M6.06", "M6.06", "Calificar a la tienda", "M6", {}],
    ["M6.07", "M6.07", "Pedir devolución", "M6", {}],
    ["M6.08", "M6.08", "Abrir reclamo", "M6", {}],
    ["M6.09", "M6.09", "Reclamos y devoluciones", "M6", {}],
    ["M6.10", "M6.10", "Hilo del reclamo", "M6", {}],
    ["M6.11", "M6.11", "Garantías", "M6", {}],
    ["M6.12", "M6.12", "Servicios que pedí", "M6", {}],
    ["M6.14", "M6.14", "Dirección", "M6", { type: "flow" }],
    ["M6.15", "M6.15", "Formas de pago", "M6", {}],
    ["M6.16", "M6.16", "Forma de pago", "M6", { type: "flow" }],
    ["M6.17", "M6.17", "Avisos", "M6", {}],
    ["M6.18", "M6.18", "Seguridad y contraseña", "M6", {}],
    ["M6.19", "M6.19", "Verificación en dos pasos", "M6", {}],
    ["M6.20", "M6.20", "Sesiones abiertas", "M6", {}],
    ["M6.21", "M6.21", "Eliminar cuenta", "M6", {}],
    ["M6.22", "M6.22", "Registrar mi empresa", "M6", {}],
    ["M6.23", "M6.23", "Cómo se ve VexBiz", "M6", {}],
    ["M6.24", "M6.24", "Ayuda e información", "M6", {}],
    ["M6.25", "M6.25", "Documento", "M6", {}],
    ["M6.26", "M6.26", "Contacto", "M6", {}],
    // M7 · Modo Tienda
    ["M7.01", "M7.01", "Inicio de la tienda", "M7", { tab: "inicio", start: true }],
    ["M7.02", "M7.02", "Confirmación pendiente", "M7", {}],
    ["M7.03", "M7.03", "Pedidos de la tienda", "M7", { tab: "pedidos" }],
    ["M7.04", "M7.04", "Pedido: preparar", "M7", {}],
    ["M7.05", "M7.05", "Despachar y facturar", "M7", {}],
    ["M7.06", "M7.06", "Productos", "M7", { tab: "productos" }],
    ["M7.07", "M7.07", "Poner un artículo a la venta", "M7", { type: "flow" }],
    ["M7.08", "M7.08", "Oferta", "M7", {}],
    ["M7.11", "M7.11", "Ventas", "M7", { tab: "dinero" }],
    ["M7.12", "M7.12", "Liquidaciones", "M7", { tab: "dinero" }],
    ["O.DET", "M7.12 ▣", "Hoja «Detalle del período»", "M7", { alias: "O.DET" }],
    ["M7.13", "M7.13", "Cuentas", "M7", { tab: "dinero" }],
    ["M7.M", "M7", "Más", "M7", { tab: "mas" }],
    ["M7.09", "M7.09", "Carritos y apartadas", "M7", {}],
    ["M7.10", "M7.10", "Reclamos y devoluciones", "M7", {}],
    ["M7.16", "M7.16", "Reseñas", "M7", {}],
    ["M7.17", "M7.17", "Ajustes de la tienda", "M7", {}],
    ["M7.14", "M7.14", "Cupones", "M7", {}],
    ["M7.15", "M7.15", "Envíos", "M7", {}],
    ["M7.18", "M7.18", "Documentos de verificación", "M7", {}],
    ["M7.19", "M7.19", "Cómo se ve mi tienda", "M7", {}],
    ["M7.20", "M7.20", "Importadora: mis fichas", "M7", {}],
    ["M7.21", "M7.21", "Importadora: ficha y compatibilidades", "M7", { type: "flow" }],
    // M8 · Modo Técnico
    ["M8.01", "M8.01", "Trabajos", "M8", { tab: "trabajos", start: true }],
    ["M8.02", "M8.02", "Solicitud entrante", "M8", {}],
    ["M8.03", "M8.03", "Trabajo en curso", "M8", {}],
    ["M8.04", "M8.04", "Cerrar el trabajo", "M8", {}],
    ["M8.05", "M8.05", "Firma del cliente", "M8", {}],
    ["M8.06", "M8.06", "Servicios", "M8", { tab: "servicios" }],
    ["M8.08", "M8.08", "Cobertura y horario", "M8", {}],
    ["M8.11", "M8.11", "Compras de trabajo", "M8", { tab: "compras" }],
    ["M8.12", "M8.12", "Membresía", "M8", {}],
    ["M8.12S", "M8.12 ▣", "Membresía · País sin membresía", "M8", {}],
    ["M8.07", "M8.07", "Mis oficios", "M8", {}],
    ["M8.09", "M8.09", "Mis documentos", "M8", {}],
    ["M8.10", "M8.10", "Mi perfil profesional", "M8", { tab: "perfil" }],
    // M9 · Modo Empresa
    ["M9.01", "M9.01", "Solicitudes", "M9", { tab: "solicitudes", start: true }],
    ["M9.02", "M9.02", "Solicitud", "M9", {}],
    ["M9.03", "M9.03", "Cotizar", "M9", {}],
    ["M9.04", "M9.04", "Cerrar con garantía", "M9", {}],
    ["M9.05", "M9.05", "Catálogo", "M9", { tab: "catalogo" }],
    ["M9.06", "M9.06", "Servicio", "M9", { type: "flow" }],
    ["M9.07", "M9.07", "Perfil público", "M9", { tab: "perfil" }],
    ["M9.08", "M9.08", "Membresía", "M9", {}],
    // Superposiciones (destinos de overlay)
    ["O.RES", "—", "Resumen de la compra", "OV", { type: "sheet", dup: true }],
    ["O.ACC", "—", "Acciones de la dirección", "OV", { type: "sheet", dup: true }],
    ["O.DET", "—", "Detalle del período", "OV", { type: "sheet", dup: true }],
    ["O.FIL", "—", "Filtros y orden", "OV", { type: "sheet", dup: true }],
    ["O.OTR", "—", "Otras tiendas que lo venden", "OV", { type: "sheet", dup: true }],
    ["O.MOD", "—", "Cambiar de modo", "OV", { type: "sheet", dup: true }],
    ["O.AVI", "—", "Avisos en vivo", "OV", { type: "sheet", dup: true }],
    ["O.CAR", "—", "Añadido al carrito", "OV", { type: "sheet", dup: true }],
    ["O.CON", "—", "Consentimiento de privacidad", "OV", { type: "dialog", dup: true }]
  ];
  var OVERLAY_TYPE = { "O.MOD": "sheet", "O.AVI": "sheet", "O.CAR": "sheet", "O.CON": "dialog", "O.FIL": "sheet", "O.OTR": "sheet", "O.RES": "sheet", "O.ACC": "sheet", "O.DET": "sheet" };
  var INDEX = ROWS.map(([id, label, title, mod, o], n) => ({
    n,
    id,
    label,
    title,
    mod,
    tab: o.tab || null,
    start: !!o.start,
    alias: !!o.alias,
    dup: !!o.dup,
    type: OVERLAY_TYPE[id] || o.type || "screen"
  }));
  var META = {};
  for (const r of INDEX) {
    if (META[r.id]) continue;
    const m = MODULES.find((x) => x.id === r.mod);
    META[r.id] = { ...r, mode: m.mode, phase: r.mod === "OV" ? 0 : m.phase };
  }
  Object.assign(META["O.MOD"], { phase: 0 });
  Object.assign(META["O.AVI"], { phase: 0 });
  Object.assign(META["O.CAR"], { phase: 0 });
  Object.assign(META["O.CON"], { phase: 0 });
  Object.assign(META["O.FIL"], { phase: 1 });
  Object.assign(META["O.OTR"], { phase: 1 });
  Object.assign(META["O.RES"], { phase: 1 });
  Object.assign(META["O.ACC"], { phase: 2 });
  Object.assign(META["O.DET"], { phase: 5 });
  META["M7.M"].label = "M7";
  var HOME = { comprador: "M2.01", tienda: "M7.01", tecnico: "M8.01", empresa: "M9.01" };
  var BARS = {
    comprador: [["inicio", "Inicio", "home", "M2.01"], ["explorar", "Explorar", "explore", "M2.05"], ["carrito", "Carrito", "cart", "M3.01"], ["pedidos", "Pedidos", "receipt", "M6.03"], ["cuenta", "Cuenta", "person", "M6.01"]],
    tecnico: [["trabajos", "Trabajos", "briefcase", "M8.01"], ["servicios", "Servicios", "sliders", "M8.06"], ["compras", "Compras", "bag", "M8.11"], ["perfil", "Perfil", "idcard", "M8.10"]],
    tienda: [["inicio", "Inicio", "store", "M7.01"], ["pedidos", "Pedidos", "box", "M7.03"], ["productos", "Productos", "tag", "M7.06"], ["dinero", "Dinero", "wallet", "M7.11"], ["mas", "Más", "more", "M7.M"]],
    empresa: [["solicitudes", "Solicitudes", "list", "M9.01"], ["catalogo", "Catálogo", "book", "M9.05"], ["perfil", "Perfil", "idcard", "M9.07"]]
  };
  var MODE_NAME = { comprador: "Comprador", tecnico: "Técnico", tienda: "Tienda", empresa: "Empresa de servicio" };

  // assets/js/store.js
  var PREF_KEY = "vx-proto-prefs";
  var listeners = /* @__PURE__ */ new Set();
  var fresh = () => ({
    mode: "comprador",
    // comprador | tecnico | tienda | empresa
    consent: null,
    // null | 'todo' | 'necesario' | {analisis, publicidad}
    sesion: false,
    // sesión de demo iniciada
    cart: carritoInicial.map((l) => ({ ...l })),
    orders: [],
    // pedidos creados en la demo
    flow: { demoPago: "aprobado", direccion: "casa", metodo: "debito", banco: "banesco", retiro: {}, filtros: { orden: "relevantes", marcas: [], nuevo: false, soloDisp: false, min: "", max: "" } },
    // paso actual de los flujos
    sonidoAvisos: true,
    // Cuenta y postventa (Fase 2): todo editable en la demo y se reinicia con «Reiniciar datos»
    dirs: direcciones.map((d) => ({ ...d })),
    pagos: pagosIni.map((x) => ({ ...x })),
    sesiones: sesionesIni.map((x) => ({ ...x })),
    reclamos: reclamosIni.map((x) => ({ ...x, mensajes: x.mensajes ? x.mensajes.map((m) => ({ ...m })) : void 0 })),
    devoluciones: devolucionesIni.map((x) => ({ ...x })),
    avisosCuenta: avisosCuenta.map((x) => ({ ...x })),
    dosPasos: false,
    // verificación en dos pasos activa
    empresaRegistrada: false,
    // «Registrar mi empresa» completado
    calificaciones: {}
    // pedido → { nota, texto }
  });
  var state = fresh();
  function set(patch) {
    Object.assign(state, patch);
    emit();
  }
  function subscribe(fn) {
    listeners.add(fn);
    return () => listeners.delete(fn);
  }
  function emit() {
    listeners.forEach((fn) => fn(state));
  }
  function reset() {
    const keepMode = state.mode;
    Object.assign(state, fresh(), { mode: keepMode });
    emit();
  }
  var lineKey = (l) => l.id + (l.oferta ? "@" + l.oferta : "");
  var cartCount = () => state.cart.length;
  var cartLines = () => state.cart.map((l) => ({ ...l, key: lineKey(l), p: producto(l.id), t: tiendaDe(l.id, l.oferta), precio: precioDe(l.id, l.oferta) }));
  var cartSubtotal = () => round2(state.cart.reduce((s, l) => s + precioDe(l.id, l.oferta) * l.qty, 0));
  function addToCart(id, qty = 1, oferta) {
    const line = state.cart.find((l) => l.id === id && l.oferta === oferta);
    if (line) {
      line.qty += qty;
      delete line.cambioPrecio;
    } else state.cart.push(oferta ? { id, qty, oferta } : { id, qty });
    emit();
  }
  function setQty(key, qty) {
    const line = state.cart.find((l) => lineKey(l) === key);
    if (!line) return;
    if (qty <= 0) state.cart = state.cart.filter((l) => lineKey(l) !== key);
    else line.qty = qty;
    emit();
  }
  function removeLine(key) {
    const i = state.cart.findIndex((l) => lineKey(l) === key);
    if (i < 0) return () => {
    };
    const [line] = state.cart.splice(i, 1);
    emit();
    return () => {
      state.cart.splice(Math.min(i, state.cart.length), 0, line);
      emit();
    };
  }
  function loadPrefs() {
    try {
      return JSON.parse(localStorage.getItem(PREF_KEY)) || {};
    } catch {
      return {};
    }
  }
  function savePrefs(patch) {
    try {
      localStorage.setItem(PREF_KEY, JSON.stringify({ ...loadPrefs(), ...patch }));
    } catch {
    }
  }

  // assets/js/motion.js
  var reduce = () => matchMedia("(prefers-reduced-motion: reduce)").matches || document.documentElement.hasAttribute("data-reduce-motion");
  var done = (el) => Promise.race([
    Promise.all(el.getAnimations({ subtree: false }).map((a) => a.finished)).catch(() => {
    }),
    new Promise((r) => setTimeout(r, 700))
  ]);
  async function enterScreen(el, kind) {
    const cls = { push: "is-enter", back: "is-back", swap: "is-swap", mode: "is-mode" }[kind];
    if (!cls) return;
    el.classList.add(cls);
    await done(el);
    el.classList.remove(cls);
  }
  function openSheet(sheet, scrim) {
    scrim.hidden = sheet.hidden = false;
    requestAnimationFrame(() => {
      scrim.classList.add("is-open");
      sheet.classList.add("is-open");
    });
  }
  async function closeSheet(sheet, scrim) {
    sheet.classList.remove("is-open");
    sheet.classList.add("is-closing");
    scrim.classList.remove("is-open");
    await done(sheet);
    sheet.classList.remove("is-closing");
    scrim.hidden = sheet.hidden = true;
  }
  function stagger(list) {
    [...list.children].forEach((c, i) => c.style.setProperty("--i", i));
    list.classList.add("vx-stagger");
  }
  function reveal(root3) {
    const io = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("is-in");
        io.unobserve(e.target);
      }
    }), { threshold: 0.12, root: root3.closest(".screen") || null });
    root3.querySelectorAll(".vx-reveal").forEach((n) => io.observe(n));
  }
  function play(el, cls) {
    if (!el) return;
    el.classList.remove(cls);
    void el.offsetWidth;
    el.classList.add(cls);
    el.addEventListener("animationend", () => el.classList.remove(cls), { once: true });
  }
  function countdown({ textEl, barEl, ms, onTick, onEnd }) {
    const end = Date.now() + ms;
    if (barEl) {
      barEl.style.setProperty("--vx-count", ms + "ms");
      barEl.classList.add("vx-countbar");
    }
    const fmt = (t) => {
      const s = Math.max(0, Math.ceil(t / 1e3));
      return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
    };
    const id = setInterval(() => {
      const left = end - Date.now();
      textEl.textContent = fmt(left);
      onTick && onTick(left);
      if (left <= 0) {
        clearInterval(id);
        onEnd && onEnd();
      }
    }, 250);
    textEl.textContent = fmt(ms);
    return () => clearInterval(id);
  }

  // assets/js/ui.js
  var I = {
    back: "M19 12H5M11 6l-6 6 6 6",
    close: "M6 6l12 12M18 6L6 18",
    check: "M5 12.5l4.5 4.5L19 7.5",
    home: "M4 11l8-7 8 7M6 10v9h12v-9M10 19v-5h4v5",
    explore: "M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z",
    search: '<circle cx="11" cy="11" r="6"/><path d="M21 21l-5-5"/>',
    cart: '<path d="M3 4h2l2.2 10.5a1 1 0 001 .8h8.6a1 1 0 001-.8L19 8H6"/><circle cx="9" cy="19" r="1.2"/><circle cx="17" cy="19" r="1.2"/>',
    receipt: "M6 3h12v18l-3-2-3 2-3-2-3 2zM9 8h6M9 12h6",
    person: '<circle cx="12" cy="8" r="3.5"/><path d="M5 20c0-4 3-6 7-6s7 2 7 6"/>',
    briefcase: "M4 8h16v11H4zM9 8V6h6v2M4 13h16",
    sliders: '<path d="M4 7h10M18 7h2M4 17h2M10 17h10"/><circle cx="16" cy="7" r="2"/><circle cx="8" cy="17" r="2"/>',
    bag: "M5 8h14l-1 12H6zM9 8a3 3 0 016 0",
    idcard: '<path d="M4 5h16v14H4zM13 10h4M13 14h4"/><circle cx="8.5" cy="10.5" r="1.8"/><path d="M6 16c0-1.6 1.2-2.5 2.5-2.5S11 14.4 11 16"/>',
    box: "M4 8l8-4 8 4v8l-8 4-8-4zM4 8l8 4 8-4M12 12v8",
    tag: '<path d="M3 12V4h8l10 10-8 8z"/><circle cx="7.5" cy="8.5" r="1"/>',
    wallet: "M4 7h14a2 2 0 012 2v9a2 2 0 01-2 2H4zM4 7V6a2 2 0 012-2h10M16 14h2",
    more: '<circle cx="6" cy="12" r="1.3"/><circle cx="12" cy="12" r="1.3"/><circle cx="18" cy="12" r="1.3"/>',
    list: "M8 6h12M8 12h12M8 18h12M4 6h.01M4 12h.01M4 18h.01",
    book: "M5 4h10a3 3 0 013 3v13H8a3 3 0 01-3-3zM5 17a3 3 0 013-3h10",
    store: "M4 9l1-5h14l1 5M4 9a2 2 0 004 0 2 2 0 004 0 2 2 0 004 0 2 2 0 004 0M5 11v9h14v-9M10 20v-5h4v5",
    swap: "M7 7h12l-3-3M17 17H5l3 3",
    bell: "M6 17V11a6 6 0 0112 0v6l2 2H4zM10 21h4",
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.01"/>',
    error: '<circle cx="12" cy="12" r="9"/><path d="M12 7v6M12 16.5v.01"/>',
    warning: "M12 4l9 16H3zM12 10v4M12 17v.01",
    wifioff: "M3 3l18 18M2 9a15 15 0 015-3M22 9a15 15 0 00-9-4.5M5.5 12.5a10 10 0 014-2.5M18.5 12.5a10 10 0 00-3-2M9 16a5 5 0 016 0M12 20v.01",
    searchoff: '<circle cx="11" cy="11" r="6"/><path d="M21 21l-5-5M4 4l16 16"/>',
    lock: "M6 11h12v9H6zM8 11V8a4 4 0 018 0v3",
    school: "M2 9l10-5 10 5-10 5zM6 11.5V16c0 1.5 3 3 6 3s6-1.5 6-3v-4.5",
    chevron: "M9 6l6 6-6 6",
    add: "M12 5v14M5 12h14",
    inbox: "M4 13l3-8h10l3 8v6H4zM4 13h5l1 2h4l1-2h5",
    sound: "M4 10v4h4l5 4V6L8 10zM16 9a4 4 0 010 6",
    shield: "M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z",
    wrench: "M14.5 6.5a4 4 0 005 5L10 21a2.1 2.1 0 01-3-3z",
    toolbox: "M4 9h16v10H4zM9 9V6h6v3M4 14h16",
    minus: "M6 12h12",
    heart: "M12 20s-7-4.6-7-10a4 4 0 017-2.6A4 4 0 0119 10c0 5.4-7 10-7 10z",
    share: '<circle cx="6" cy="12" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="18" cy="18" r="2"/><path d="M8 11l8-4M8 13l8 4"/>',
    copy: "M9 9h11v11H9zM5 15V5h10",
    upload: "M12 16V5M7 9l5-5 5 5M5 19h14",
    map: "M9 4l6 2 5-2v14l-5 2-6-2-5 2V6zM9 4v14M15 6v14",
    trash: "M5 7h14M10 7V5h4v2M7 7l1 13h8l1-13",
    edit: "M4 20h4L19 9l-4-4L4 16zM13 7l4 4",
    truck: "M3 7h11v9H3zM14 10h4l3 3v3h-7",
    eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    chat: "M4 5h16v11H9l-5 4zM8 10h8M8 13h5",
    phone: "M8 3h8v18H8zM11 18h2",
    desktop: "M3 5h18v11H3zM8 20h8M12 16v4",
    more2: '<circle cx="12" cy="5" r="1.4"/><circle cx="12" cy="12" r="1.4"/><circle cx="12" cy="19" r="1.4"/>',
    star: "M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z",
    logout: "M10 5H5v14h5M14 8l4 4-4 4M18 12H9",
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
    doc: "M7 3h7l4 4v14H7zM14 3v4h4M10 12h5M10 16h5",
    key: '<circle cx="8" cy="15" r="3.5"/><path d="M10.5 12.5L20 3M16 7l3 3"/>',
    gift: "M4 9h16v4H4zM6 13v7h12v-7M12 9v11M12 9c-2 0-4-1-4-3s3-2 4 3zM12 9c2 0 4-1 4-3s-3-2-4 3z",
    menu: "M4 6h16M4 12h16M4 18h16",
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>'
  };
  var icon = (name, size = 24) => {
    const d = I[name] || I.info;
    const inner = d.startsWith("<") ? d : `<path d="${d}"/>`;
    return `<svg viewBox="0 0 24 24" width="${size}" height="${size}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">${inner}</svg>`;
  };
  var h = (html) => {
    const t = document.createElement("template");
    t.innerHTML = html.trim();
    return t.content.firstElementChild;
  };
  var $ = (sel, root3 = document) => root3.querySelector(sel);
  var $$ = (sel, root3 = document) => [...root3.querySelectorAll(sel)];
  var topbar = (title, { back: back3 = true, trailing = "", close = false } = {}) => `
  <header class="md-topbar"><div class="md-topbar-row">
    ${back3 ? `<button type="button" class="md-iconbtn md-iconbtn--standard md-sl" ${close ? "data-close" : "data-back"} aria-label="${close ? "Cerrar" : "Volver"}">${icon(close ? "close" : "back")}</button>` : ""}
    <h1 class="md-topbar-title md-title-large" tabindex="-1">${esc(title)}</h1>${trailing}
  </div></header>`;
  var btn = (label, { kind = "filled", go: go2, kindNav, attrs = "", block = false, id } = {}) => `<button type="button" class="md-btn md-btn--${kind} md-sl vx-press${block ? " md-btn--block" : ""}"${id ? ` id="${id}"` : ""}${go2 ? ` data-go="${go2}"` : ""}${kindNav ? ` data-kind="${kindNav}"` : ""} ${attrs}>${label}</button>`;
  var iconBtn = (name, label, attrs = "") => `<button type="button" class="md-iconbtn md-iconbtn--standard md-sl" aria-label="${esc(label)}" ${attrs}>${icon(name)}</button>`;
  var stateBlock = ({ icon: ic = "info", title, text = "", action = "" }) => `
  <section class="vx-state-block" aria-label="${esc(title)}">
    <span class="vx-state-ico">${icon(ic, 32)}</span>
    <h2 class="md-title-medium">${esc(title)}</h2>${text ? `<p class="md-body-medium">${esc(text)}</p>` : ""}${action}
  </section>`;
  var skeleton = () => `
  <div class="vx-skeleton" aria-busy="true" aria-label="Cargando">
    <div class="vx-skel vx-skel-bar"></div>
    <div class="vx-skel vx-skel-hero"></div>
    <div class="vx-skel vx-skel-line"></div><div class="vx-skel vx-skel-line vx-skel-short"></div>
    <div class="vx-skel-grid"><div class="vx-skel vx-skel-card"></div><div class="vx-skel vx-skel-card"></div></div>
  </div>`;
  var toastTimer;
  function toast(text, { action, onAction, ms = 4e3 } = {}) {
    const host = $("#toast");
    clearTimeout(toastTimer);
    host.innerHTML = `<div class="md-snack vx-toast${action ? " md-snack--act" : ""}" role="status"><span class="md-snack-text md-body-medium">${esc(text)}</span>${action ? `<button type="button" class="md-snack-action md-sl md-label-large">${esc(action)}</button>` : ""}</div>`;
    const el = host.firstElementChild;
    requestAnimationFrame(() => el.classList.add("is-open"));
    if (action) $("button", el).addEventListener("click", () => {
      onAction && onAction();
      hide();
    });
    const hide = () => {
      el.classList.remove("is-open");
      el.classList.add("is-closing");
      el.addEventListener("animationend", () => {
        if (el.isConnected) el.remove();
      }, { once: true });
    };
    toastTimer = setTimeout(hide, ms);
  }
  var barMode = null;
  function setBar({ mode, tab, hidden }) {
    const bar = $("#bar");
    bar.hidden = hidden || !mode || !BARS[mode];
    if (bar.hidden) return;
    if (barMode !== mode) {
      barMode = mode;
      bar.innerHTML = `<nav class="md-navbar vx-bar" aria-label="Navegación · modo ${MODE_NAME[mode]}"><span class="vx-pill" aria-hidden="true"></span>${BARS[mode].map(([id, label, ic, to]) => `
        <a class="md-navitem" href="#/${to}" data-go="${to}" data-kind="swap" data-tab="${id}">
          <span class="md-navitem-ind md-sl">${icon(ic)}${id === "carrito" ? `<span class="md-badge md-badge--large md-navitem-badge" id="cartBadge" aria-label="artículos en el carrito"></span>` : ""}</span>
          <span class="md-navitem-label md-label-medium">${label}</span>
        </a>`).join("")}</nav>`;
      paintCart();
    }
    const items = $$(".md-navitem", bar);
    items.forEach((a) => {
      const on2 = a.dataset.tab === tab;
      a.classList.toggle("md-navitem--on", on2);
      on2 ? a.setAttribute("aria-current", "page") : a.removeAttribute("aria-current");
    });
    const on = items.find((a) => a.dataset.tab === tab);
    const pill = $(".vx-pill", bar);
    if (on) {
      const wasHidden = pill.hidden || !pill.style.transform;
      if (wasHidden) pill.style.transition = "none";
      pill.hidden = false;
      pill.style.transform = `translateX(${on.offsetLeft + on.offsetWidth / 2 - 32}px)`;
      if (wasHidden) {
        void pill.offsetWidth;
        pill.style.transition = "";
      }
    } else pill.hidden = true;
  }
  var lastCount = -1;
  function paintCart() {
    const b = $("#cartBadge");
    if (!b) return;
    const n = cartCount();
    b.hidden = n === 0;
    b.textContent = n;
    if (lastCount !== -1 && n !== lastCount) {
      play($('.md-navitem[data-tab="carrito"] .md-navitem-ind svg'), "vx-pop");
      play(b, "vx-tick");
    }
    lastCount = n;
  }
  subscribe(paintCart);

  // assets/js/router.js
  var ALIAS = Object.fromEntries(INDEX.filter((r) => r.alias && !r.label.includes("▣")).map((r) => [r.label, r.id]));
  var resolve = (code) => ALIAS[code] || code;
  var stack = [];
  var visited = /* @__PURE__ */ new Set();
  var current = null;
  var cleanup = null;
  var overlay = null;
  var internal = false;
  var navId = 0;
  var view = () => $("#view");
  var parse = (hash) => {
    const [path, qs2 = ""] = hash.replace(/^#\/?/, "").split("?");
    return { code: resolve(decodeURIComponent(path)), params: Object.fromEntries(new URLSearchParams(qs2)) };
  };
  var hashOf = (code, params = {}) => {
    const qs2 = new URLSearchParams(params).toString();
    return `#/${code}${qs2 ? "?" + qs2 : ""}`;
  };
  function setHash(code, params) {
    internal = true;
    location.hash = hashOf(code, params);
    setTimeout(() => {
      internal = false;
    }, 0);
  }
  var top = () => stack[stack.length - 1];
  var currentCode = () => overlay ? overlay.code : top()?.code;
  function pendingScreen(code) {
    const m = META[code] || { title: code, label: code, phase: "?" };
    return h(`<div class="vx-pending">
    <header class="md-topbar"><div class="md-topbar-row">${stack.length > 1 ? `<button type="button" class="md-iconbtn md-iconbtn--standard md-sl" data-back aria-label="Volver">${icon("back")}</button>` : ""}
    <h1 class="md-topbar-title md-title-large" tabindex="-1">${esc(m.title)}</h1></div></header>
    <section class="vx-state-block"><span class="vx-state-ico">${icon("clock", 32)}</span>
      <p class="md-label-large">${esc(m.label)} · pendiente</p>
      <p class="md-body-medium">Esta pantalla se construye en la Fase ${m.phase}. Mientras tanto, el Índice del panel la lista y esta ruta ya existe.</p></section>
  </div>`);
  }
  function build(code, params) {
    const def = defs.get(code);
    const el = h('<div class="screen" role="region"></div>');
    const meta = META[code];
    el.setAttribute("aria-label", meta.title);
    const ctx = { code, params, meta };
    const fill = () => {
      const node = def ? def.render(ctx) : pendingScreen(code);
      el.replaceChildren(node);
      ctx.root = node;
      return ctx;
    };
    return { el, ctx, fill, def };
  }
  async function show(entry, kind, id) {
    const meta = META[entry.code];
    const { el, ctx, fill, def } = build(entry.code, entry.params);
    const first = !visited.has(entry.code) && def?.skeleton !== false && kind !== "none" && kind !== "back";
    visited.add(entry.code);
    const old = current;
    ctx.kind = kind;
    ctx.first = first;
    if (cleanup) {
      cleanup();
      cleanup = null;
    }
    if (first) el.innerHTML = skeleton();
    else fill();
    setBar({ mode: meta.mode, tab: meta.tab, hidden: !meta.tab });
    view().append(el);
    current = el;
    const entering = enterScreen(el, kind);
    if (first) {
      await new Promise((r) => setTimeout(r, reduce() ? 150 : 520));
      if (id !== navId) return;
      fill();
      el.classList.add("vx-loaded");
      setTimeout(() => el.classList.remove("vx-loaded"), 220);
    }
    const m = def?.mount?.(ctx.root || el, ctx);
    cleanup = typeof m === "function" ? m : null;
    await entering;
    if (id !== navId) return;
    [...view().children].forEach((c) => {
      if (c !== el) c.remove();
    });
    if (kind === "back" && entry.scroll) el.scrollTop = entry.scroll;
    $("h1", el)?.focus({ preventScroll: true });
  }
  async function go(code, { kind = "push", params = {} } = {}) {
    code = resolve(code);
    const meta = META[code];
    if (!meta) {
      toast("Esa pantalla no existe");
      return;
    }
    if (meta.type === "sheet" || meta.type === "dialog" || meta.type === "flow") return openOverlay(code, params);
    const id = ++navId;
    {
      if (meta.mode && meta.mode !== state.mode) set({ mode: meta.mode });
      if (overlay) await closeOverlay({ silent: true });
      if (top() && current) top().scroll = current.scrollTop;
      const entry = { code, params, scroll: 0 };
      if (kind === "push" || kind === "fade" || kind === "smart") stack.push(entry);
      else {
        stack.length = 0;
        stack.push(entry);
      }
      setHash(code, params);
      await show(entry, { fade: "mode", smart: "swap" }[kind] || kind, id);
    }
  }
  async function back() {
    if (overlay) return closeOverlay();
    if (stack.length < 2) return;
    const id = ++navId;
    {
      stack.pop();
      const entry = top();
      setHash(entry.code, entry.params);
      await show(entry, "back", id);
    }
  }
  var goHome = (mode, kind = "mode") => go(HOME[mode], { kind });
  var layers = () => ({ sheet: $("#sheet"), scrim: $("#scrim"), dialog: $("#dialog") });
  async function openOverlay(code, params = {}) {
    code = resolve(code);
    const meta = META[code];
    if (overlay) await closeOverlay({ silent: true });
    if (!current) await goHome(state.mode, "none");
    const def = defs.get(code);
    const { sheet, scrim, dialog } = layers();
    const type = meta.type;
    const ctx = { code, params, meta };
    const content = def ? def.render(ctx) : h(`<div class="vx-pending-sheet"><h2 id="sheet-title" class="md-title-large">${esc(meta.title)}</h2><p class="md-body-medium">${esc(meta.label)} · pendiente · Fase ${meta.phase}.</p></div>`);
    const opener = document.activeElement;
    overlay = { code, type, opener, cleanup: null };
    setHash(code, params);
    if (type === "dialog") {
      dialog.replaceChildren(content);
      dialog.hidden = false;
      dialog.classList.add("vx-overlay", "is-open");
      dialog.setAttribute("aria-labelledby", "dlg-title");
    } else {
      sheet.classList.toggle("vx-sheet--full", type === "flow");
      sheet.replaceChildren(h('<span class="md-sheet-handle" aria-hidden="true"></span>'), content);
      sheet.setAttribute("aria-labelledby", "sheet-title");
      openSheet(sheet, scrim);
    }
    const m = def?.mount?.(content, ctx);
    overlay.cleanup = typeof m === "function" ? m : null;
    requestAnimationFrame(() => ($('[id="sheet-title"],[id="dlg-title"]', content.parentElement || content) || content).focus?.({ preventScroll: true }));
  }
  async function closeOverlay({ silent = false } = {}) {
    if (!overlay) return;
    const o = overlay;
    overlay = null;
    o.cleanup?.();
    const { sheet, scrim, dialog } = layers();
    if (o.type === "dialog") {
      dialog.classList.remove("is-open");
      dialog.classList.add("is-closing");
      await new Promise((r) => dialog.addEventListener("animationend", r, { once: true }));
      dialog.classList.remove("is-closing", "vx-overlay");
      dialog.hidden = true;
      dialog.replaceChildren();
    } else {
      await closeSheet(sheet, scrim);
      sheet.classList.remove("vx-sheet--full");
      sheet.replaceChildren();
    }
    if (!silent && top()) setHash(top().code, top().params);
    o.opener?.isConnected && o.opener.focus?.({ preventScroll: true });
  }
  function start() {
    const phone = $("#phone");
    phone.addEventListener("click", (e) => {
      const t = e.target.closest("[data-go],[data-back],[data-close],[data-toast]");
      if (e.target === $("#scrim")) {
        closeOverlay();
        return;
      }
      if (!t) return;
      if (t.matches("a")) e.preventDefault();
      if (t.dataset.toast) toast(t.dataset.toast);
      if (t.hasAttribute("data-close")) closeOverlay();
      else if (t.hasAttribute("data-back")) back();
      else if (t.dataset.go) {
        const { code, params } = parse("#/" + t.dataset.go);
        go(code, { kind: t.dataset.kind || "push", params });
      }
    });
    document.addEventListener("keydown", (e) => {
      if (!overlay) return;
      if (e.key === "Escape" && overlay.type !== "dialog") {
        e.preventDefault();
        closeOverlay();
      }
      if (e.key === "Tab") {
        const root3 = overlay.type === "dialog" ? $("#dialog") : $("#sheet");
        const f = [...root3.querySelectorAll('button,a[href],input,select,textarea,[tabindex]:not([tabindex="-1"])')].filter((n) => !n.disabled && n.offsetParent !== null);
        if (!f.length) return;
        const first2 = f[0], last = f[f.length - 1];
        if (e.shiftKey && document.activeElement === first2) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first2.focus();
        }
      }
    });
    window.addEventListener("hashchange", () => {
      if (internal) return;
      const { code, params } = parse(location.hash);
      if (!META[code]) return;
      const meta2 = META[code];
      if (meta2.type === "sheet" || meta2.type === "dialog" || meta2.type === "flow") {
        openOverlay(code, params);
        return;
      }
      if (stack.length > 1 && stack[stack.length - 2].code === code) {
        back();
        return;
      }
      go(code, { kind: "swap", params });
    });
    const first = location.hash ? parse(location.hash) : { code: "M1.01", params: {} };
    const meta = META[first.code] || META["M1.01"];
    if (meta.type === "sheet" || meta.type === "dialog" || meta.type === "flow") openOverlay(first.code, first.params);
    else go(META[first.code] ? first.code : "M1.01", { kind: "none", params: first.params });
  }

  // assets/js/screens/m0.js
  var sheetHead = (title, trailing = "") => `<div class="vx-sheet-head"><h2 id="sheet-title" class="md-title-large md-sheet-title" tabindex="-1">${esc(title)}</h2>${trailing}</div>`;
  var closeBtn = () => iconBtn("close", "Cerrar", "data-close");
  register("O.MOD", {
    render() {
      const row2 = (mode, ic, title, text) => `
      <li><button type="button" class="md-li md-li--2 md-sl vx-press vx-row" data-mode="${mode}"${state.mode === mode ? ' aria-current="true"' : ""}>
        <span class="md-li-icon">${icon(ic)}</span>
        <span class="md-li-text"><span class="md-li-title md-body-large">${title}</span><span class="md-li-sup md-body-medium">${text}</span></span>
        <span class="md-li-end">${state.mode === mode ? `${icon("check")}<span class="md-sr-only">Modo actual</span>` : ""}</span>
      </button></li>`;
      const el = h(`<div>${sheetHead("Cambiar de modo", closeBtn())}
      <ul class="vx-list" role="list">
        ${row2("comprador", "bag", "Comprador", "Compra productos y pide servicios.")}
        ${row2("tienda", "store", "Tienda", "Pedidos, productos y dinero de Frío Total.")}
        ${row2("tecnico", "wrench", "Técnico", "Tus trabajos, servicios y compras de trabajo.")}
        ${state.empresaRegistrada ? row2("empresa", "toolbox", "Empresa de servicio", "Solicitudes, catálogo y perfil de tu empresa.") : ""}
      </ul>
      ${state.empresaRegistrada ? "" : `<p class="md-label-large vx-sub">Haz más con VexBiz</p>
      <ul class="vx-list" role="list"><li><button type="button" class="md-li md-li--2 md-sl vx-press vx-row" data-empresa>
        <span class="md-li-icon">${icon("toolbox")}</span>
        <span class="md-li-text"><span class="md-li-title md-body-large">Registrar mi empresa de servicios</span></span>
        <span class="md-li-end">${icon("chevron")}</span></button></li></ul>`}</div>`);
      el.addEventListener("click", async (e) => {
        const m = e.target.closest("[data-mode]");
        if (m) {
          set({ mode: m.dataset.mode });
          await closeOverlay({ silent: true });
          goHome(m.dataset.mode, "mode");
        } else if (e.target.closest("[data-empresa]")) {
          await closeOverlay({ silent: true });
          go("M6.22", { kind: "push" });
        }
      });
      return el;
    }
  });
  register("O.AVI", {
    render() {
      const a = avisos;
      const el = h(`<div>${sheetHead("Avisos en vivo", closeBtn())}
      <article class="vx-aviso vx-aviso--hero">
        <p class="md-label-large"><span class="vx-live-dot vx-live" aria-hidden="true"></span> ${esc(a.compra.titulo)} <span class="vx-muted">· ahora</span></p>
        <p class="md-body-large">${esc(a.compra.detalle)}</p>
        <p class="md-body-medium vx-count-row"><span id="avCount" class="vx-tab-num md-title-medium">${clock(a.compra.ms)}</span><span id="avUrgent" class="vx-urgent" hidden>${icon("warning", 18)} Queda menos de un minuto</span></p>
        <span class="vx-bar-track" aria-hidden="true"><span id="avBar" class="vx-bar-fill"></span></span>
        <span class="md-sr-only" id="avLive" aria-live="polite"></span>
      </article>
      <p class="md-label-large vx-sub">Lo que acaba de pasar <span class="vx-live-tag"><span class="vx-live-dot vx-live" aria-hidden="true"></span>en vivo</span></p>
      <ul class="vx-list" role="list">${a.recientes.map((r) => `
        <li><button type="button" class="md-li md-li--2 md-sl vx-press vx-row" data-go="M6.17" data-kind="push">
          <span class="md-li-text"><span class="md-li-title md-body-large">${esc(r.titulo)}</span><span class="md-li-sup md-body-medium">${esc(r.detalle)}</span></span>
          <span class="md-li-end md-li-meta md-body-small">${esc(r.hora)}</span></button></li>`).join("")}</ul>
      <label class="md-switch vx-switch-row"><span class="md-body-large">Sonido de avisos</span>
        <input class="md-sr-only" type="checkbox" role="switch" id="avSound" ${state.sonidoAvisos ? "checked" : ""}>
        <span class="md-switch-track ${state.sonidoAvisos ? "md-switch-track--on" : ""}" aria-hidden="true"><span class="md-switch-handle vx-thumb"></span></span></label>
      <div class="md-sheet-foot">${btn("Ver avisos", { kind: "text", go: "M6.17", kindNav: "push" })}</div></div>`);
      el.addEventListener("click", (e) => {
        if (e.target.closest("[data-go]")) closeOverlay({ silent: true });
      });
      const sw = el.querySelector("#avSound");
      sw.addEventListener("change", () => {
        set({ sonidoAvisos: sw.checked });
        el.querySelector(".md-switch-track").classList.toggle("md-switch-track--on", sw.checked);
      });
      return el;
    },
    mount(el) {
      let said = false;
      return countdown({
        textEl: el.querySelector("#avCount"),
        barEl: el.querySelector("#avBar"),
        ms: avisos.compra.ms,
        onTick(left) {
          if (left < 6e4 && !said) {
            said = true;
            el.querySelector("#avUrgent").hidden = false;
            el.querySelector("#avCount").classList.add("vx-is-urgent");
            el.querySelector("#avLive").textContent = "Queda menos de un minuto para contestar la compra.";
          }
        }
      });
    }
  });
  register("O.CAR", {
    render() {
      const id = state.flow.lastAdded || "aa12";
      const p = producto(id), t = tienda(p.tienda);
      const line = state.cart.find((l) => l.id === id);
      const qty = line ? line.qty : 1;
      return h(`<div>${sheetHead("Añadido al carrito", closeBtn())}
      <div class="vx-added">
        <span class="vx-thumb-ph" aria-hidden="true">${icon("bag", 28)}</span>
        <div><p class="md-body-large">${esc(p.nombre)}</p><p class="md-body-medium vx-muted">${esc(t.nombre)}</p>
          <p class="md-title-medium vx-tab-num">${money(p.precio)} × ${qty}</p></div>
      </div>
      <p class="md-body-medium vx-sub vx-tab-num">${plural(cartCount(), "artículo", "artículos")} en tu carrito · <strong>${money(cartSubtotal())}</strong></p>
      <div class="md-sheet-foot">${btn("Seguir comprando", { kind: "text", attrs: "data-close" })}${btn("Ver carrito", { kind: "filled", go: "M3.01", kindNav: "push" })}</div></div>`);
    },
    mount(el) {
      el.addEventListener("click", (e) => {
        if (e.target.closest("[data-go]")) closeOverlay({ silent: true });
      });
    }
  });
  register("M0.06", {
    skeleton: false,
    render() {
      const el = h(`<div>${topbar("Estados comunes")}<div class="vx-states">
      <section><h2 class="md-label-large vx-sub">Cargando</h2>${skeleton()}</section>
      <section><h2 class="md-label-large vx-sub">Vacío</h2>${stateBlock({ icon: "inbox", title: "Todavía no tienes pedidos", text: "Cuando compres algo aparecerá aquí.", action: btn("Explorar", { kind: "outlined", go: "M2.05", kindNav: "swap" }) })}</section>
      <section><h2 class="md-label-large vx-sub">Error</h2>${stateBlock({ icon: "error", title: "No pudimos cargar tus pedidos", action: btn("Reintentar", { kind: "outlined", attrs: 'data-toast="Reintentando…"' }) })}</section>
      <section><h2 class="md-label-large vx-sub">Sin conexión</h2>${stateBlock({ icon: "wifioff", title: "Sin conexión", action: btn("Reintentar", { kind: "outlined", attrs: 'data-toast="Todavía sin señal"' }) })}</section>
      <section><h2 class="md-label-large vx-sub">No encontrado</h2>${stateBlock({ icon: "searchoff", title: "Esto ya no está disponible", action: btn("Ir al inicio", { kind: "tonal", go: "M2.01", kindNav: "swap" }) })}</section>
      <section><h2 class="md-label-large vx-sub">Hace falta entrar</h2>${stateBlock({ icon: "lock", title: "Entra para continuar", action: btn("Entrar", { kind: "filled", go: "M1.02", kindNav: "push" }) })}</section>
      <section><h2 class="md-label-large vx-sub">Sin acceso a un modo</h2>${stateBlock({ icon: "store", title: "Necesitas el modo Tienda", action: btn("Cambiar de modo", { kind: "tonal", go: "O.MOD" }) })}</section>
      <section><h2 class="md-label-large vx-sub">Fin de lista</h2><p class="vx-end md-body-medium">No hay más</p></section>
      <section><h2 class="md-label-large vx-sub">Aviso breve</h2><div class="vx-pad">${btn("Mostrar aviso", { kind: "outlined", attrs: 'data-toast="Guardado en tu cuenta"' })}</div></section>
    </div></div>`);
      return el;
    }
  });
  register("O.CON", {
    render() {
      const sw = (id, title, text) => `
      <label class="md-switch vx-switch-row vx-consent-opt"><span><span class="md-body-large">${title}</span><br><span class="md-body-medium vx-muted">${text}</span></span>
        <input class="md-sr-only" type="checkbox" role="switch" id="${id}">
        <span class="md-switch-track" aria-hidden="true"><span class="md-switch-handle vx-thumb"></span></span></label>`;
      const el = h(`<div class="vx-consent">
      <span class="vx-state-ico">${icon("shield", 32)}</span>
      <h2 id="dlg-title" class="md-headline-small" tabindex="-1">Tu privacidad</h2>
      <p class="md-body-large">Lo necesario para que la app funcione (sesión, carrito y país) no se pregunta. Te pedimos permiso para análisis y publicidad.</p>
      <div data-view="main" class="vx-consent-actions">
        ${btn("Aceptar todo", { kind: "filled", block: true, attrs: 'data-accept="todo"' })}
        ${btn("Solo lo necesario", { kind: "filled", block: true, attrs: 'data-accept="necesario"' })}
        ${btn("Personalizar", { kind: "text", block: true, attrs: "data-custom" })}
      </div>
      <div data-view="custom" hidden>
        <p class="md-label-large vx-sub">Personalizar</p>
        ${sw("cAnalisis", "Análisis", "Para saber qué se busca y qué no se encuentra.")}
        ${sw("cPublicidad", "Publicidad", "Para enseñarte anuncios de lo que miraste.")}
        <div class="vx-consent-actions">${btn("Guardar mi elección", { kind: "filled", block: true, attrs: "data-save" })}${btn("Volver", { kind: "text", block: true, attrs: "data-main" })}</div>
      </div></div>`);
      const view2 = (v) => {
        el.querySelector("[data-view=main]").hidden = v !== "main";
        el.querySelector("[data-view=custom]").hidden = v !== "custom";
      };
      const finish = async (value) => {
        set({ consent: value });
        await closeOverlay({ silent: true });
        go("M1.02", { kind: "mode" });
      };
      el.addEventListener("click", (e) => {
        const a = e.target.closest("[data-accept]");
        if (a) finish(a.dataset.accept);
        else if (e.target.closest("[data-custom]")) {
          view2("custom");
          el.querySelector("#cAnalisis").focus();
        } else if (e.target.closest("[data-main]")) view2("main");
        else if (e.target.closest("[data-save]")) finish({ analisis: el.querySelector("#cAnalisis").checked, publicidad: el.querySelector("#cPublicidad").checked });
      });
      el.addEventListener("change", (e) => {
        const t = e.target.closest("input[role=switch]");
        if (t) t.nextElementSibling.classList.toggle("md-switch-track--on", t.checked);
      });
      return el;
    }
  });

  // assets/js/market.js
  var stars = (r) => `★ ${num(r, 1)}`;
  var avatar = (txt, big = false) => `<span class="md-avatar md-avatar--initials vx-av${big ? " vx-av--l" : ""}" aria-hidden="true">${esc(txt)}</span>`;
  var pct2 = (p) => p.antes ? Math.round((1 - p.precio / p.antes) * 100) : 0;
  function stock(n) {
    if (n <= 0) return { label: "Agotado", level: "out", ic: "close" };
    if (n <= 3) return { label: `Últimas ${n} ${n === 1 ? "unidad" : "unidades"}`, level: "low", ic: "warning" };
    return { label: "Disponible", level: "ok", ic: "check" };
  }
  var stockHtml = (n, extra = "") => {
    const s = stock(n);
    return `<span class="vx-stock vx-stock--${s.level} md-body-small">${icon(s.ic, 14)}${s.label}${extra}</span>`;
  };
  function productCard(p, { i } = {}) {
    const t = tienda(p.tienda), off = pct2(p), out = p.stock <= 0;
    return `<article class="vx-pcard"${i != null ? ` style="--i:${i}"` : ""}>
    <a class="vx-pcard-link md-sl vx-press" href="#/M2.08?id=${p.id}" data-go="M2.08?id=${p.id}" aria-label="${esc(p.nombre)}, ${money(p.precio)}">
      <span class="vx-pimg" aria-hidden="true">${icon("box", 32)}</span>
      <span class="vx-pbody">
        ${p.marca ? `<span class="md-label-small vx-muted">${esc(p.marca)}</span>` : ""}
        <span class="md-body-medium vx-pname">${esc(p.corto || p.nombre)}</span>
        <span class="vx-pprice vx-tab-num"><b class="md-title-medium">${money(p.precio)}</b>${p.antes ? `<s class="md-body-small vx-muted">${money(p.antes)}</s><span class="vx-off md-label-small">−${off} %</span>` : ""}</span>
        <span class="md-body-small vx-muted">${esc(t.nombre)}</span>
        ${stockHtml(p.stock)}
      </span>
    </a>
    <button type="button" class="md-iconbtn md-iconbtn--tonal md-sl vx-padd" data-add="${p.id}" aria-label="Añadir al carrito: ${esc(p.corto || p.nombre)}"${out ? " disabled" : ""}>${icon("cart")}</button>
  </article>`;
  }
  var storeRow = (t) => `<li><button type="button" class="md-li md-li--2 md-sl vx-press vx-row" data-go="M2.12?id=${t.id}">
  ${avatar(t.sigla)}<span class="md-li-text"><span class="md-li-title md-body-large">${esc(t.nombre)}</span><span class="md-li-sup md-body-medium">${esc(t.nicho)} · ${esc(t.ciudad)}</span></span>
  <span class="md-li-end md-body-small vx-tab-num">${stars(t.rating)}${t.productos != null ? ` · ${t.productos} productos` : ""}</span></button></li>`;
  var nicheTile = (n) => {
    const off = !n.productos;
    return `<li><button type="button" class="vx-niche md-sl vx-press" ${off ? "disabled" : `data-go="M2.06?id=${n.id}"`}>
    <span class="vx-niche-ico">${icon(n.id === "clima" ? "sliders" : n.id === "elec" ? "bell" : "box", 28)}</span>
    <span class="vx-niche-text"><span class="md-title-small">${esc(n.nombre)}</span><span class="md-body-small vx-muted">${esc(n.texto)}</span>
      <span class="md-label-medium">${off ? "Todavía sin catálogo" : `${num(n.productos, 0)} productos`}</span>
      ${n.servicio ? `<span class="md-chip-wrap"><span class="vx-tag md-label-small">${icon("wrench", 14)}Con servicio técnico</span></span>` : ""}</span>
    ${off ? "" : `<span class="vx-muted">${icon("chevron")}</span>`}</button></li>`;
  };
  var field = ({ id, label, type = "text", value = "", help = "", error = "", autocomplete = "", inputmode = "", placeholder = "", trail = "", attrs = "" }) => `
  <div class="md-tf md-tf--outlined${error ? " md-tf--error" : ""}" data-field="${id}">
    <label class="md-tf-box"><span class="md-tf-content"><span class="md-tf-label md-body-small">${esc(label)}</span>
      <input class="md-tf-input md-body-large" id="${id}" name="${id}" type="${type}" value="${esc(value)}"${autocomplete ? ` autocomplete="${autocomplete}"` : ""}${inputmode ? ` inputmode="${inputmode}"` : ""}${placeholder ? ` placeholder="${esc(placeholder)}"` : ""} aria-describedby="${id}-help"${error ? ' aria-invalid="true"' : ""} ${attrs}></span>${trail}</label>
    <span class="md-tf-help md-body-small" id="${id}-help">${esc(error || help)}</span></div>`;
  function fieldError(root3, id, msg) {
    const wrap = $(`[data-field="${id}"]`, root3);
    if (!wrap) return;
    const help = $(`#${id}-help`, wrap), input = $("input,textarea,select", wrap);
    wrap.classList.toggle("md-tf--error", !!msg);
    msg ? input.setAttribute("aria-invalid", "true") : input.removeAttribute("aria-invalid");
    if (msg) {
      help.textContent = msg;
      play(wrap, "vx-shake");
    } else help.textContent = wrap.dataset.help || "";
  }
  var PWD_RULES = [["8 caracteres o más", (v) => v.length >= 8], ["Una letra mayúscula", (v) => /[A-ZÁÉÍÓÚÑ]/.test(v)], ["Un número", (v) => /\d/.test(v)]];
  var reqsHtml = () => `<ul class="vx-reqs" role="list" aria-label="Requisitos de la contraseña">${PWD_RULES.map(([t]) => `<li data-req>${icon("close", 18)}<span>${t}</span><span class="md-sr-only"> · falta</span></li>`).join("")}</ul>`;
  function paintReqs(ul, value) {
    let all = true;
    $$("[data-req]", ul).forEach((li, i) => {
      const ok = PWD_RULES[i][1](value);
      all = all && ok;
      li.classList.toggle("is-ok", ok);
      li.firstElementChild.outerHTML = icon(ok ? "check" : "close", 18);
      li.lastElementChild.textContent = ok ? " · cumplido" : " · falta";
    });
    return all;
  }
  var radioOpt = ({ name, value, title, text = "", checked = false, extra = "", end = "" }) => `
  <label class="vx-opt${checked ? " is-on" : ""}"><span class="md-radio-hit md-sl vx-opt-radio"><input class="md-radio-input" type="radio" name="${name}" value="${value}"${checked ? " checked" : ""}><span class="md-radio-ring"></span></span>
    <span class="vx-opt-text"><span class="md-body-large">${title}</span>${text ? `<span class="md-body-medium vx-muted">${text}</span>` : ""}${extra}</span>${end}</label>`;
  var switchHtml = (id, label, on = false) => `<label class="md-switch vx-switch-row"><span class="md-body-large">${label}</span>
  <input class="md-sr-only" type="checkbox" role="switch" id="${id}"${on ? " checked" : ""}><span class="md-switch-track${on ? " md-switch-track--on" : ""}" aria-hidden="true"><span class="md-switch-handle vx-thumb"></span></span></label>`;
  function wireControls(root3) {
    root3.addEventListener("change", (e) => {
      const t = e.target;
      if (t.matches("input[role=switch]")) t.nextElementSibling.classList.toggle("md-switch-track--on", t.checked);
      if (t.matches("input[type=radio]")) $$(`input[name="${t.name}"]`, root3).forEach((r) => r.closest(".vx-opt")?.classList.toggle("is-on", r.checked));
    });
  }
  var page = (top2, body, action = "") => `<div class="vx-page">${top2}<div class="vx-body">${body}</div>${action ? `<footer class="vx-actionbar">${action}</footer>` : ""}</div>`;
  var STEPS = ["Entrega", "Envío", "Forma de pago"];
  var checkoutSteps = (n) => `<ol class="vx-steps" aria-label="Paso ${n} de 3">${STEPS.map((s, i) => `
  <li class="vx-step${i + 1 < n ? " is-done" : ""}${i + 1 === n ? " is-on" : ""}"${i + 1 === n ? ' aria-current="step"' : ""}>
    <span class="vx-step-dot md-label-large">${i + 1 < n ? icon("check", 16) : i + 1}</span><span class="md-label-medium">${s}</span></li>
  ${i < 2 ? `<li class="vx-step-line" aria-hidden="true"><i data-full="${i + 1 < n ? 1 : 0}"></i></li>` : ""}`).join("")}</ol>`;
  function fillSteps(root3) {
    requestAnimationFrame(() => $$(".vx-step-line i", root3).forEach((i) => i.classList.toggle("is-full", i.dataset.full === "1")));
  }
  var banner = (kind, text, extra = "") => `<div class="vx-banner vx-banner--${kind}" role="${kind === "error" ? "alert" : "status"}">${icon({ info: "info", warning: "warning", error: "error", success: "check", neutral: "info" }[kind], 20)}<p class="md-body-medium">${text}</p>${extra}</div>`;
  var stepper = (key, qty, max = 99) => `<span class="vx-stepper" role="group" aria-label="Cantidad">
  <button type="button" class="md-iconbtn md-iconbtn--outlined md-sl" data-dec="${key}" aria-label="Quitar una unidad"${qty <= 1 ? " disabled" : ""}>${icon("minus", 18)}</button>
  <output class="md-title-medium vx-tab-num" data-qty="${key}" aria-live="polite">${qty}</output>
  <button type="button" class="md-iconbtn md-iconbtn--outlined md-sl" data-inc="${key}" aria-label="Añadir una unidad"${qty >= max ? " disabled" : ""}>${icon("add", 18)}</button></span>`;
  var wired = false;
  function wireAdd() {
    if (wired) return;
    wired = true;
    $("#phone").addEventListener("click", (e) => {
      const b = e.target.closest("[data-add]");
      if (!b || b.disabled) return;
      const id = b.dataset.add, qty = Number(b.dataset.qty || 1), oferta = b.dataset.oferta || void 0;
      state.flow.lastAdded = id;
      state.flow.lastQty = qty;
      addToCart(id, qty, oferta);
      const was = b.innerHTML;
      b.disabled = true;
      b.innerHTML = b.classList.contains("md-btn") ? `${icon("check", 20)}Añadido` : icon("check");
      b.classList.add("vx-tick");
      setTimeout(() => {
        if (b.isConnected) {
          b.innerHTML = was;
          b.disabled = false;
          b.classList.remove("vx-tick");
        }
      }, 1200);
      const head = $("#phone [data-cart-btn]");
      head && play(head.querySelector("svg"), "vx-pop");
      openOverlay("O.CAR");
    });
  }
  var closeOnGo = (el) => el.addEventListener("click", (e) => {
    if (e.target.closest("[data-go]")) closeOverlay({ silent: true });
  });
  var otpHtml = (id, n, prefill = "", label = "Código") => `<div class="vx-otp" id="${id}" role="group" aria-label="${label}" style="--n:${n}">${Array.from({ length: n }, (_, i) => `<input class="vx-otp-box md-title-large" inputmode="numeric" autocomplete="${i === 0 ? "one-time-code" : "off"}" maxlength="1" aria-label="Dígito ${i + 1} de ${n}" value="${prefill[i] || ""}">`).join("")}</div>`;
  function wireOtp(root3, id, onChange) {
    const boxes = $$("input", $(`#${id}`, root3));
    const value = () => boxes.map((b) => b.value).join("");
    boxes.forEach((b, i) => {
      b.addEventListener("input", () => {
        b.value = b.value.replace(/\D/g, "").slice(-1);
        if (b.value && boxes[i + 1]) boxes[i + 1].focus();
        onChange(value());
      });
      b.addEventListener("keydown", (e) => {
        if (e.key === "Backspace" && !b.value && boxes[i - 1]) boxes[i - 1].focus();
      });
      b.addEventListener("paste", (e) => {
        const d = (e.clipboardData?.getData("text") || "").replace(/\D/g, "").slice(0, boxes.length);
        if (!d) return;
        e.preventDefault();
        [...d].forEach((c, k) => {
          boxes[k].value = c;
        });
        boxes[Math.min(d.length, boxes.length - 1)].focus();
        onChange(value());
      });
    });
    return { value, focusFirstEmpty: () => (boxes.find((b) => !b.value) || boxes[boxes.length - 1]).focus() };
  }
  var area = ({ id, label, value = "", help = "", rows = 4, placeholder = "" }) => `
  <div class="md-tf md-tf--outlined" data-field="${id}" data-help="${esc(help)}">
    <label class="md-tf-box vx-area-box"><span class="md-tf-content"><span class="md-tf-label md-body-small">${esc(label)}</span>
      <textarea class="md-tf-input md-body-large vx-area" id="${id}" name="${id}" rows="${rows}"${placeholder ? ` placeholder="${esc(placeholder)}"` : ""} aria-describedby="${id}-help">${esc(value)}</textarea></span></label>
    <span class="md-tf-help md-body-small" id="${id}-help">${esc(help)}</span></div>`;
  var statusTag = (kind, text) => `<span class="vx-stag vx-stag--${kind} md-label-medium">${icon({ success: "check", warning: "warning", error: "error", info: "info", neutral: "clock" }[kind], 14)}${esc(text)}</span>`;
  var whatsappBtn = (label, attrs = "") => `<button type="button" class="md-btn vx-wa md-sl vx-press md-btn--block" ${attrs}>${icon("chat", 20)}${esc(label)}</button>`;
  var row = ({ ic, title, sup = "", end = "", go: go2, kind, attrs = "", danger = false, dot = false }) => `<li><button type="button" class="md-li ${sup ? "md-li--2 " : ""}md-sl vx-press vx-row${danger ? " vx-danger" : ""}"${go2 ? ` data-go="${go2}"` : ""}${kind ? ` data-kind="${kind}"` : ""} ${attrs}>
  ${ic ? `<span class="md-li-icon vx-relative">${icon(ic)}${dot ? '<span class="md-badge md-badge--small vx-dot-badge" aria-hidden="true"></span>' : ""}</span>` : ""}
  <span class="md-li-text"><span class="md-li-title md-body-large">${title}</span>${sup ? `<span class="md-li-sup md-body-medium">${sup}</span>` : ""}</span>
  <span class="md-li-end md-body-medium">${end || (go2 ? icon("chevron") : "")}</span></button></li>`;
  var select = ({ id, label, options, value }) => `<div class="md-tf md-tf--outlined" data-field="${id}"><label class="md-tf-box"><span class="md-tf-content"><span class="md-tf-label md-body-small">${esc(label)}</span>
  <select class="md-tf-input md-body-large" id="${id}">${options.map((o) => `<option${o === value ? " selected" : ""}>${esc(o)}</option>`).join("")}</select></span></label><span class="md-tf-help md-body-small"></span></div>`;

  // assets/js/screens/m1.js
  var wordmark = (cls = "") => `<div class="vx-logo ${cls}" role="img" aria-label="VexBiz">VE<span class="vx-logo-x">X</span>BIZ</div>`;
  var back2 = (close = false) => `<header class="vx-backbar">${iconBtn(close ? "close" : "back", close ? "Cerrar" : "Volver", close ? "data-close" : "data-back")}</header>`;
  var emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
  register("M1.01", {
    skeleton: false,
    render() {
      return h(`<div class="vx-splash">
      <h1 class="vx-logo vx-splash-logo" tabindex="-1" aria-label="VexBiz">VE<span class="vx-logo-x">X</span>BIZ</h1>
      <p class="md-title-medium vx-splash-tag">Productos, repuestos y servicios técnicos</p>
      <div class="md-progress md-progress--indet vx-splash-prog" role="progressbar" aria-label="Cargando VexBiz" style="--_pct:30%">
        <span class="md-progress-track"></span><span class="md-progress-active"></span></div>
    </div>`);
    },
    mount() {
      const t = setTimeout(() => openOverlay("O.CON"), reduce() ? 300 : 1600);
      return () => clearTimeout(t);
    }
  });
  register("M1.02", {
    render() {
      const el = h(page(
        `<header class="vx-authhead">${wordmark("vx-logo--ink")}</header>`,
        `
      <h1 class="md-headline-small" tabindex="-1">Inicia sesión</h1>
      <p class="md-body-large vx-muted vx-lede">Con tu cuenta de VexBiz en Venezuela</p>
      <form class="vx-form" novalidate id="fEntrar">
        ${field({ id: "correo", label: "Correo", type: "email", value: usuario.correo, autocomplete: "username", inputmode: "email" })}
        ${field({ id: "clave", label: "Contraseña", type: "password", value: "ClaveDemo1", autocomplete: "current-password" })}
        <div class="vx-row-end">${btn("¿Olvidaste tu contraseña?", { kind: "text", go: "M1.08" })}</div>
      </form>
      <div class="vx-center"><p class="md-body-medium vx-muted">¿Todavía no tienes cuenta en Venezuela?</p>${btn("Crear cuenta", { kind: "outlined", go: "M1.05" })}</div>`,
        btn("Entrar", { kind: "filled", block: true, id: "btnEntrar" })
      ));
      const submit = () => {
        const c = el.querySelector("#correo").value.trim(), k = el.querySelector("#clave").value;
        fieldError(el, "correo", !c ? "Escribe tu correo" : !emailOk(c) ? "Escribe un correo válido" : "");
        fieldError(el, "clave", !k ? "Escribe tu contraseña" : "");
        if (!c || !emailOk(c) || !k) return;
        set({ flow: { ...state.flow, correo: c } });
        go(c.includes("+sinconfirmar") ? "M1.04" : "M1.03", { kind: "push" });
      };
      el.querySelector("#btnEntrar").addEventListener("click", submit);
      el.querySelector("#fEntrar").addEventListener("submit", (e) => {
        e.preventDefault();
        submit();
      });
      el.querySelector("#fEntrar").addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          submit();
        }
      });
      return el;
    }
  });
  register("M1.05", {
    render() {
      const el = h(page(
        topbar("Crear cuenta", { close: true }),
        `
      <p class="md-body-large vx-lede">Regístrate gratis para comprar, vender o trabajar como técnico en Venezuela.</p>
      <form class="vx-form" novalidate id="fCrear">
        ${field({ id: "rNombre", label: "Nombre completo", autocomplete: "name" })}
        ${field({ id: "rCorreo", label: "Correo", type: "email", autocomplete: "email", inputmode: "email" })}
        <div class="md-tf md-tf--outlined"><label class="md-tf-box"><span class="md-tf-content"><span class="md-tf-label md-body-small">País</span>
          <select class="md-tf-input md-body-large" id="pais" aria-label="País"><option>Venezuela</option></select></span></label><span class="md-tf-help md-body-small"></span></div>
        ${field({ id: "rClave", label: "Contraseña", type: "password", autocomplete: "new-password" })}
        ${reqsHtml()}
        ${field({ id: "rClave2", label: "Repite la contraseña", type: "password", autocomplete: "new-password" })}
        ${field({ id: "rCodigo", label: "Código de invitación (opcional)" })}
      </form>
      <p class="md-body-small vx-muted vx-lede">Al crear tu cuenta aceptas los <a class="vx-link" href="#/M6.25?doc=terminos" data-go="M6.25?doc=terminos">Términos y condiciones</a> y la <a class="vx-link" href="#/M6.25?doc=privacidad" data-go="M6.25?doc=privacidad">Política de privacidad</a>.</p>
      <div class="vx-center"><p class="md-body-medium vx-muted">¿Ya tienes cuenta?</p>${btn("Entrar", { kind: "text", attrs: "data-close" })}</div>`,
        btn("Crear cuenta", { kind: "filled", block: true, id: "btnCrear" })
      ));
      closeOnGo(el);
      const reqs = el.querySelector(".vx-reqs");
      paintReqs(reqs, "");
      el.querySelector("#rClave").addEventListener("input", (e) => paintReqs(reqs, e.target.value));
      el.querySelector("#btnCrear").addEventListener("click", async () => {
        const v = (id) => el.querySelector("#" + id).value.trim();
        const bad = {
          rNombre: !v("rNombre") && "Escribe tu nombre",
          rCorreo: !v("rCorreo") ? "Escribe tu correo" : !emailOk(v("rCorreo")) ? "Escribe un correo válido" : "",
          rClave: !paintReqs(reqs, el.querySelector("#rClave").value) && "La contraseña no cumple los requisitos",
          rClave2: el.querySelector("#rClave2").value !== el.querySelector("#rClave").value && "Las contraseñas no coinciden"
        };
        Object.entries(bad).forEach(([k, m]) => fieldError(el, k, m || ""));
        if (Object.values(bad).some(Boolean)) return;
        set({ flow: { ...state.flow, correo: v("rCorreo"), codigo: v("rCodigo") } });
        await closeOverlay({ silent: true });
        go("M1.06", { kind: "push" });
      });
      return el;
    }
  });
  register("M1.03", {
    render() {
      const el = h(page(
        back2(),
        `
      <span class="vx-state-ico">${icon("shield", 32)}</span>
      <h1 class="md-headline-small" tabindex="-1">Verificación en dos pasos</h1>
      <p class="md-body-large vx-lede">Abre tu app de autenticación y escribe el código de 6 dígitos. Cambia cada 30 segundos.</p>
      ${otpHtml("otp", 6, "48291", "Código de 6 dígitos")}
      <p class="md-body-medium vx-otp-err" id="otpErr" role="alert" hidden>${icon("error", 18)} El código no es correcto</p>
      <div class="vx-stack">${btn("No me llega el código", { kind: "text", attrs: 'data-toast="El código cambia cada 30 segundos: revisa la hora de tu teléfono"' })}${btn("Usar otra cuenta", { kind: "text", go: "M1.02", kindNav: "swap" })}</div>`,
        btn("Verificar", { kind: "filled", block: true, id: "btnVerif", attrs: "disabled" })
      ));
      const ctl = wireOtp(el, "otp", (v) => {
        el.querySelector("#btnVerif").disabled = v.length < 6;
        el.querySelector("#otpErr").hidden = true;
      });
      el.querySelector("#btnVerif").addEventListener("click", () => {
        const v = ctl.value();
        if (v === "000000") {
          el.querySelector("#otpErr").hidden = false;
          return;
        }
        set({ sesion: true });
        go("M2.01", { kind: "mode" });
      });
      el.__ctl = ctl;
      el.__sync = () => {
        el.querySelector("#btnVerif").disabled = ctl.value().length < 6;
      };
      return el;
    },
    mount(el) {
      el.__sync();
      el.__ctl.focusFirstEmpty();
    }
  });
  register("M1.04", {
    render() {
      const correo = state.flow.correo || usuario.correo;
      const el = h(page(back2(), `
      <span class="vx-state-ico">${icon("info", 32)}</span>
      <h1 class="md-headline-small" tabindex="-1">Confirma tu correo</h1>
      <p class="md-title-medium">Aún no has confirmado tu correo</p>
      <p class="md-body-large vx-lede">Te enviamos el enlace hace un momento a ${esc(correo)}. Revisa también la carpeta de no deseados.</p>
      <div class="vx-stack">
        ${btn("Abrir mi app de correo", { kind: "tonal", block: true, attrs: 'data-toast="Abre tu correo y toca el enlace de VexBiz"' })}
        ${btn("Reenviar enlace", { kind: "outlined", block: true, id: "btnReenviar", attrs: "disabled" })}
        <p class="md-body-medium vx-muted vx-center" id="espera" aria-live="off"></p>
        ${btn("Usar otra cuenta", { kind: "text", block: true, go: "M1.02", kindNav: "swap" })}
      </div>`, btn("Ya lo confirmé", { kind: "filled", block: true, go: "M2.01", kindNav: "mode" })));
      return el;
    },
    mount(el) {
      let left = 4 * 60;
      const paint = () => {
        const m = Math.ceil(left / 60);
        el.querySelector("#espera").textContent = left > 0 ? `Podrás pedir otro en ${m} min` : "";
        el.querySelector("#btnReenviar").disabled = left > 0;
      };
      paint();
      const id = setInterval(() => {
        left -= 1;
        paint();
        if (left <= 0) clearInterval(id);
      }, 1e3);
      return () => clearInterval(id);
    }
  });
  register("M1.06", {
    render() {
      const step = (n, t) => `<li class="vx-step-item"><span class="vx-step-dot md-label-large">${n}</span><span class="md-body-large">${t}</span></li>`;
      return h(page(
        back2(),
        `
      <span class="vx-state-ico">${icon("inbox", 32)}</span>
      <h1 class="md-headline-small" tabindex="-1">Revisa tu correo</h1>
      <p class="md-title-medium vx-tab-num">${esc(state.flow.correo || "anibal.lejarazu@correo.com")}</p>
      <ol class="vx-steplist" role="list">
        ${step(1, "Abre el enlace que te enviamos.")}
        ${step(2, "Elige qué vienes a hacer: comprar, trabajar como técnico o registrar tu empresa.")}
        ${step(3, "Hasta que no confirmes tu correo no podrás entrar.")}</ol>
      ${state.flow.codigo ? '<p class="md-body-medium vx-muted">Tu código de invitación quedó asociado.</p>' : '<p class="md-body-medium vx-muted">Tu código de invitación quedó asociado.</p>'}
      <div class="vx-stack">${btn("Volver a entrar", { kind: "text", block: true, go: "M1.02", kindNav: "mode" })}</div>`,
        btn("Ya abrí el enlace", { kind: "filled", block: true, go: "M1.07", kindNav: "push" })
      ));
    }
  });
  register("M1.07", {
    render() {
      const sel = state.flow.uso || "comprar";
      const opt = (v, title, text, ic) => radioOpt({ name: "uso", value: v, title: `<span class="vx-opt-ico">${icon(ic)}</span>${title}`, text, checked: sel === v });
      const el = h(page(
        back2(),
        `
      <h1 class="md-headline-small" tabindex="-1">¿Qué vienes a hacer en VexBiz?</h1>
      <div class="vx-options" role="radiogroup" aria-label="¿Qué vienes a hacer en VexBiz?">
        ${opt("comprar", "Comprar", "Productos, repuestos y suministros de todo el catálogo.", "bag")}
        ${opt("tecnico", "Trabajar como técnico", "Recibe solicitudes de instalación y reparación en tu zona.", "wrench")}
        ${opt("empresa", "Registrar mi empresa", "Vende, ofrece servicios o da de alta a tu equipo.", "toolbox")}
      </div>
      <p class="md-body-medium vx-muted" id="eleg" aria-live="polite"></p>`,
        btn("Continuar", { kind: "filled", block: true, id: "btnCont" })
      ));
      wireControls(el);
      const txt = { comprar: "Elegiste comprar", tecnico: "Elegiste trabajar como técnico", empresa: "Elegiste registrar tu empresa" };
      const paint = () => {
        el.querySelector("#eleg").textContent = txt[el.querySelector("input[name=uso]:checked").value];
      };
      el.addEventListener("change", paint);
      paint();
      el.querySelector("#btnCont").addEventListener("click", () => {
        const v = el.querySelector("input[name=uso]:checked").value;
        set({ flow: { ...state.flow, uso: v } });
        if (v === "comprar") {
          set({ mode: "comprador" });
          go("M2.01", { kind: "mode" });
        } else if (v === "tecnico") {
          set({ mode: "tecnico" });
          go("M8.01", { kind: "mode" });
        } else go("M6.22", { kind: "push" });
      });
      return el;
    }
  });
  register("M1.08", {
    render() {
      const el = h(page(
        back2(),
        `
      <h1 class="md-headline-small" tabindex="-1">Recuperar contraseña</h1>
      <p class="md-title-medium">¿Olvidaste tu contraseña?</p>
      <p class="md-body-large vx-lede">Escribe tu correo y te enviamos un enlace para crear una nueva.</p>
      <form class="vx-form" novalidate>${field({ id: "correo", label: "Correo", type: "email", value: state.flow.correo || "", autocomplete: "email", inputmode: "email" })}</form>
      <div class="vx-stack">${btn("Volver a entrar", { kind: "text", block: true, go: "M1.02", kindNav: "swap" })}</div>`,
        btn("Enviar enlace", { kind: "filled", block: true, id: "btnEnviar" })
      ));
      el.querySelector("#btnEnviar").addEventListener("click", () => {
        const c = el.querySelector("#correo").value.trim();
        fieldError(el, "correo", !c ? "Escribe tu correo" : !emailOk(c) ? "Escribe un correo válido" : "");
        if (!c || !emailOk(c)) return;
        toast("Te enviamos el enlace. En esta demo lo abrimos por ti.");
        go("M1.09", { kind: "push" });
      });
      return el;
    }
  });
  register("M1.09", {
    render() {
      const el = h(page(
        back2(),
        `
      <h1 class="md-headline-small" tabindex="-1">Contraseña nueva</h1>
      <p class="md-title-medium">Crea tu contraseña nueva</p>
      <p class="md-body-large vx-lede">Al guardarla se cerrarán tus sesiones abiertas en otros dispositivos.</p>
      <form class="vx-form" novalidate>${field({ id: "clave", label: "Contraseña nueva", type: "password", autocomplete: "new-password" })}${reqsHtml()}</form>`,
        btn("Guardar contraseña", { kind: "filled", block: true, id: "btnGuardar", attrs: "disabled" })
      ));
      const reqs = el.querySelector(".vx-reqs");
      paintReqs(reqs, "");
      el.querySelector("#clave").addEventListener("input", (e) => {
        el.querySelector("#btnGuardar").disabled = !paintReqs(reqs, e.target.value);
      });
      el.querySelector("#btnGuardar").addEventListener("click", () => {
        toast("Contraseña actualizada");
        go("M1.02", { kind: "mode" });
      });
      return el;
    }
  });
  register("M1.10", {
    render() {
      const el = h(page(back2(), `
      <span class="vx-state-ico">${icon("check", 32)}</span>
      <h1 class="md-headline-small" tabindex="-1">Boletín</h1>
      <p class="md-title-medium">Ya estás suscrito al boletín</p>
      <p class="md-body-large vx-lede">Te escribiremos con ofertas y novedades una vez por semana.</p>
      ${btn("Ir al inicio", { kind: "filled", block: true, go: "M2.01", kindNav: "mode" })}
      <hr class="md-divider vx-hr">
      <p class="md-body-medium vx-muted">Si llegas desde Ayuda o el enlace falla:</p>
      <h2 class="md-title-large">Suscríbete al boletín</h2>
      <p class="md-body-large vx-lede">Ofertas, cupones y novedades. Una vez por semana, sin más.</p>
      <form class="vx-form" novalidate>${field({ id: "correo", label: "Correo", type: "email", value: state.flow.correo || usuario.correo, autocomplete: "email", inputmode: "email" })}</form>
      ${btn("Suscribirme", { kind: "filled", block: true, id: "btnSub" })}
      <p class="md-body-small vx-muted">Sin correo basura. Puedes darte de baja cuando quieras.</p>`));
      el.querySelector("#btnSub").addEventListener("click", () => {
        const c = el.querySelector("#correo").value.trim();
        fieldError(el, "correo", !c ? "Escribe tu correo" : !emailOk(c) ? "Escribe un correo válido" : "");
        if (c && emailOk(c)) toast("Listo: te suscribimos al boletín");
      });
      return el;
    }
  });

  // assets/js/screens/m2.js
  var norm = (s) => s.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/\./g, "");
  var grid = (items) => `<div class="vx-grid" data-stagger>${items.map((p, i) => productCard(p, { i })).join("")}</div>`;
  var scroller = (items, stag = false) => `<div class="vx-scroller"${stag ? " data-stagger" : ""}>${items.map((p, i) => productCard(p, { i })).join("")}</div>`;
  var sectionHead = (title, link = "") => `<div class="vx-sechead"><h2 class="md-title-large">${title}</h2>${link}</div>`;
  var AIRES = () => productos.filter((p) => p.categoria.endsWith("Aires split"));
  var COMPRESORES = () => productos.filter((p) => p.categoria.endsWith("Compresores"));
  function buscar(q) {
    const t = norm(q).split(/\s+/).filter(Boolean);
    if (!t.length) return productos.slice();
    return productos.filter((p) => {
      const hay = norm(`${p.nombre} ${p.marca || ""} ${p.categoria} ${p.ref || ""}`);
      return t.every((w) => hay.includes(w));
    });
  }
  function aplicar(list) {
    const f = state.flow.filtros;
    let r = list.filter((p) => (!f.marcas.length || f.marcas.includes(p.marca)) && (!f.nuevo || p.condicion === "Nuevo") && (!f.soloDisp || p.stock > 0) && (f.min === "" || p.precio >= Number(f.min)) && (f.max === "" || p.precio <= Number(f.max)));
    if (f.orden === "menor") r = r.sort((a, b) => a.precio - b.precio);
    else if (f.orden === "mayor") r = r.sort((a, b) => b.precio - a.precio);
    return r;
  }
  var hayFiltros = () => {
    const f = state.flow.filtros;
    return f.marcas.length || f.nuevo || f.soloDisp || f.min !== "" || f.max !== "" || f.orden !== "relevantes";
  };
  var chipsAplicados = () => {
    const f = state.flow.filtros;
    const c = [...f.marcas.map((m) => ["marca:" + m, m])];
    if (f.nuevo) c.push(["nuevo", "Nuevo"]);
    if (f.soloDisp) c.push(["disp", "Sólo disponibles"]);
    return c;
  };
  var filtroBar = () => `<div class="vx-filterbar"><div class="vx-chips" data-chips></div>${btn(`${icon("sliders", 18)}Filtros y orden`, { kind: "tonal", go: "O.FIL" })}</div>`;
  function paintChips(root3) {
    const host = $("[data-chips]", root3);
    if (!host) return;
    host.innerHTML = chipsAplicados().map(([k, t]) => `<span class="md-chip-wrap"><button type="button" class="md-chip md-chip--selected md-chip--trail md-sl md-label-large" data-unf="${k}" aria-label="Quitar filtro ${esc(t)}">${esc(t)}${icon("close", 18)}</button></span>`).join("");
  }
  function wireFiltros(root3, universe, paint) {
    state.flow.universe = universe;
    const sync = () => {
      paintChips(root3);
      paint(aplicar(universe()));
    };
    root3.addEventListener("click", (e) => {
      const b = e.target.closest("[data-unf]");
      if (!b) return;
      const f = state.flow.filtros, k = b.dataset.unf;
      if (k.startsWith("marca:")) f.marcas = f.marcas.filter((m) => m !== k.slice(6));
      else if (k === "nuevo") f.nuevo = false;
      else if (k === "disp") f.soloDisp = false;
      set({ flow: state.flow });
    });
    sync();
    return subscribe(sync);
  }
  var countText = (n) => plural(n, "publicación", "publicaciones");
  register("M2.01", {
    render() {
      const ofertas6 = ["aa12", "lg12", "mi12", "sa09", "comp", "da18"].map(producto);
      const vendidos = ["ctrl", "cap", "tal", "tarj"].map(producto);
      const serv = (eyebrow, title, ic, to) => `<li><button type="button" class="md-li md-li--2 md-sl vx-press vx-row" data-go="${to}"><span class="md-li-icon">${icon(ic)}</span>
      <span class="md-li-text"><span class="md-label-small vx-eyebrow">${eyebrow}</span><span class="md-li-title md-body-large">${title}</span></span><span class="md-li-end">${icon("chevron")}</span></button></li>`;
      return h(`<div>
      <header class="vx-homehead">
        <div class="vx-homehead-row"><div class="vx-logo vx-logo--ink vx-logo--sm" role="img" aria-label="VexBiz">VE<span class="vx-logo-x">X</span>BIZ</div>${iconBtn("bell", "Avisos", 'data-go="M6.17"')}</div>
        <button type="button" class="md-search md-sl vx-searchbtn" data-go="M2.02" data-kind="smart" aria-label="Buscar en VexBiz">${icon("search")}<span class="md-body-large vx-muted">Buscar en VexBiz</span></button>
        <h1 class="md-sr-only" tabindex="-1">Inicio</h1>
      </header>
      <section class="vx-hero" aria-label="Promociones"><div class="vx-carousel" tabindex="0" aria-label="Promociones, desliza para ver más">${[1, 2, 3].map((n) => `<div class="vx-slide" role="group" aria-label="Promoción ${n} de 3"><span aria-hidden="true">${icon("tag", 40)}</span></div>`).join("")}</div>
        <div class="vx-dots" aria-hidden="true">${[0, 1, 2].map((i) => `<i class="vx-dot${i === 0 ? " is-on" : ""}"></i>`).join("")}</div></section>
      <section class="vx-sec vx-reveal">${sectionHead("Nichos", btn("Ver todos", { kind: "text", go: "M2.05", kindNav: "swap" }))}
        <ul class="vx-nichesq" role="list">${nichos.slice(0, 5).map((n) => `<li><button type="button" class="vx-nsq md-sl vx-press" data-go="M2.06?id=${n.id}"><span>${icon(n.id === "clima" ? "sliders" : "box", 28)}</span><span class="md-label-medium">${esc(n.nombre)}</span></button></li>`).join("")}</ul></section>
      <section class="vx-sec vx-reveal">${sectionHead("Ofertas relámpago")}<p class="md-body-medium vx-count-row vx-tab-num" aria-live="off">${icon("clock", 18)} Termina en <b id="hRelo" class="md-title-small">02:14:36</b></p>
        ${scroller(ofertas6, true)}</section>
      <section class="vx-sec vx-reveal">${sectionHead("Más vendidos", btn("Ver todos", { kind: "text", go: "M2.03" }))}${grid(vendidos)}</section>
      <section class="vx-sec vx-reveal">${sectionHead("Servicios")}<ul class="vx-list" role="list">
        ${serv("TÉCNICOS CERTIFICADOS", "Instalación y reparación", "wrench", "M4.03")}${serv("AUXILIO VIAL 24/7", "Grúa, batería y cerrajería", "truck", "M4.08")}${serv("SEGUROS", "Protege tu vehículo", "shield", "M4.06")}</ul></section>
      <section class="vx-sec vx-reveal">${sectionHead("Tiendas destacadas", btn("Ver todas", { kind: "text", go: "M2.11" }))}
        <ul class="vx-list" role="list">${[tienda("ft"), tienda("ha"), tienda("re")].map((t) => `<li><button type="button" class="md-li md-li--2 md-sl vx-press vx-row" data-go="M2.12?id=${t.id}">${avatar(t.sigla, true)}
          <span class="md-li-text"><span class="md-li-title md-body-large">${esc(t.nombre)}</span></span><span class="md-li-end md-body-small vx-tab-num">${stars(t.rating)}</span></button></li>`).join("")}</ul></section>
      <section class="vx-sec vx-help vx-reveal"><h2 class="md-title-large">¿Te ayudamos?</h2>${btn("Escríbenos por WhatsApp", { kind: "filled", block: true, attrs: 'data-toast="Abre el WhatsApp de VexBiz: lunes a sábado, 8:00 a 18:00"' })}</section>
    </div>`);
    },
    mount(el, ctx) {
      if (ctx.first && ctx.kind !== "back") $$("[data-stagger]", el).forEach(stagger);
      reveal(el);
      const t0 = Date.now(), total = ((2 * 60 + 14) * 60 + 36) * 1e3, out = el.querySelector("#hRelo");
      const id = setInterval(() => {
        out.textContent = clock(total - (Date.now() - t0));
      }, 1e3);
      const car = el.querySelector(".vx-carousel"), dots = $$(".vx-dot", el);
      const onScroll = () => {
        const i = Math.round(car.scrollLeft / car.clientWidth);
        dots.forEach((d, k) => d.classList.toggle("is-on", k === i));
      };
      car.addEventListener("scroll", onScroll, { passive: true });
      return () => clearInterval(id);
    }
  });
  register("M2.02", {
    skeleton: false,
    render() {
      const el = h(`<div class="vx-page">
      <header class="vx-searchhead">${iconBtn("back", "Volver", "data-back")}
        <form class="md-search vx-searchform" role="search" id="fBuscar">${icon("search")}<input class="md-search-input md-body-large" id="q" type="search" enterkeyhint="search" autocomplete="off" placeholder="Buscar en VexBiz" aria-label="Buscar en VexBiz" value="">
        <button type="button" class="md-iconbtn md-iconbtn--standard md-sl md-search-trail" id="qClear" aria-label="Borrar búsqueda" hidden>${icon("close")}</button></form></header>
      <h1 class="md-sr-only" tabindex="-1">Buscar</h1>
      <div class="vx-body" id="sugg" aria-live="polite"></div></div>`);
      const q = el.querySelector("#q"), box = el.querySelector("#sugg");
      const paint = () => {
        const t = norm(q.value.trim());
        el.querySelector("#qClear").hidden = !t;
        if (!t) {
          box.innerHTML = `<h2 class="md-label-large vx-sub">Búsquedas recientes</h2><ul class="vx-list" role="list">${recientes.map((r) => `<li><button type="button" class="md-li md-sl vx-press vx-row" data-q="${esc(r)}"><span class="md-li-icon">${icon("clock")}</span><span class="md-li-text"><span class="md-li-title md-body-large">${esc(r)}</span></span></button></li>`).join("")}</ul>
          <div class="vx-chipwrap">${["Climatización", "Refrigeración", "Electricidad", "Automotriz", "Herramientas"].map((n) => `<span class="md-chip-wrap"><button type="button" class="md-chip md-sl md-label-large" data-go="${n === "Climatización" ? "M2.06?id=clima" : "M2.05"}">${n}</button></span>`).join("")}</div>`;
          return;
        }
        const hits = sugerencias.filter((s) => norm(s.t).includes(t));
        box.innerHTML = `${hits.length ? `<ul class="vx-list" role="list">${hits.map((s) => `<li><button type="button" class="md-li md-li--2 md-sl vx-press vx-row" data-q="${esc(s.t)}"><span class="md-li-icon">${icon("search")}</span>
        <span class="md-li-text"><span class="md-li-title md-body-large">${esc(s.t)}</span>${s.en ? `<span class="md-li-sup md-body-medium">${esc(s.en)}</span>` : ""}</span><span class="md-li-end md-body-small">${esc(s.n)}</span></button></li>`).join("")}</ul>` : ""}
        <ul class="vx-list" role="list"><li><button type="button" class="md-li md-sl vx-press vx-row" data-q="${esc(q.value.trim())}"><span class="md-li-icon">${icon("search")}</span><span class="md-li-text"><span class="md-li-title md-body-large">Buscar «${esc(q.value.trim())}»</span></span></button></li></ul>`;
      };
      const run = (term) => go("M2.03", { kind: "push", params: { q: term } });
      q.addEventListener("input", paint);
      el.querySelector("#fBuscar").addEventListener("submit", (e) => {
        e.preventDefault();
        if (q.value.trim()) run(q.value.trim());
      });
      el.querySelector("#qClear").addEventListener("click", () => {
        q.value = "";
        paint();
        q.focus();
      });
      box.addEventListener("click", (e) => {
        const b = e.target.closest("[data-q]");
        if (b) run(b.dataset.q);
      });
      paint();
      return el;
    },
    mount(el) {
      el.querySelector("#q").focus();
    }
  });
  register("M2.03", {
    render(ctx) {
      const q = ctx.params.q || "aire split";
      const el = h(page(`<header class="vx-searchhead">${iconBtn("back", "Volver", "data-back")}
      <button type="button" class="md-search md-sl vx-searchbtn" data-go="M2.02" data-kind="smart" aria-label="Cambiar la búsqueda: ${esc(q)}">${icon("search")}<span class="md-body-large">${esc(q)}</span></button></header>`, `
      <h1 class="md-title-large vx-pad-h" tabindex="-1">Resultados para «${esc(q)}»</h1>
      <p class="md-body-medium vx-muted vx-pad-h" id="rInfo" aria-live="polite"></p>
      ${filtroBar()}<div id="rList"></div>
      <section class="vx-sec">${sectionHead("Quienes buscaron esto compraron")}${scroller(["ctrl", "cap", "tarj"].map(producto))}</section>`));
      el.__q = q;
      return el;
    },
    mount(el, ctx) {
      const q = el.__q, base = () => buscar(q);
      return wireFiltros(el, base, (list) => {
        el.querySelector("#rInfo").textContent = `${list[0] ? list[0].categoria.split(" › ")[0] : "Climatización"} · ${countText(list.length)}`;
        const host = el.querySelector("#rList");
        host.innerHTML = list.length ? grid(list) : stateBlock({ icon: "searchoff", title: "No encontramos resultados", text: hayFiltros() ? "Prueba quitando algún filtro." : "Prueba con otras palabras." });
        if (ctx.first && !host.dataset.done) {
          host.dataset.done = 1;
          $$("[data-stagger]", host).forEach(stagger);
        }
      });
    }
  });
  register("O.FIL", {
    render() {
      const uni = state.flow.universe ? state.flow.universe() : AIRES();
      const marcas = [...new Set(uni.map((p) => p.marca).filter(Boolean))].map((m) => [m, uni.filter((p) => p.marca === m).length]);
      const f = JSON.parse(JSON.stringify(state.flow.filtros));
      const chk = (id, label, n, on) => `<label class="md-check vx-chk"><span class="md-check-hit md-sl"><input class="md-check-input" type="checkbox" id="${id}"${on ? " checked" : ""}><span class="md-check-box${on ? " md-check-box--on" : ""}">${on ? icon("check", 16) : ""}</span></span><span class="md-body-large">${label}</span>${n != null ? `<span class="md-body-small vx-muted vx-tab-num vx-chk-n">${n}</span>` : ""}</label>`;
      const ord = (v, t) => `<label class="md-radio vx-chk"><span class="md-radio-hit md-sl"><input class="md-radio-input" type="radio" name="ord" value="${v}"${f.orden === v ? " checked" : ""}><span class="md-radio-ring"></span></span><span class="md-body-large">${t}</span></label>`;
      const el = h(`<div class="vx-filters"><div class="vx-sheet-head"><h2 id="sheet-title" class="md-title-large md-sheet-title" tabindex="-1">Filtros y orden</h2>${iconBtn("close", "Cerrar", "data-close")}</div>
      <h3 class="md-label-large vx-sub">Ordenar por</h3><div role="radiogroup" aria-label="Ordenar por">${ord("relevantes", "Más relevantes")}${ord("menor", "Menor precio")}${ord("mayor", "Mayor precio")}</div>
      <h3 class="md-label-large vx-sub">Aplicados</h3><div class="vx-chips" id="fApl"></div>
      <h3 class="md-label-large vx-sub">Marca</h3>${marcas.map(([m, n]) => chk("m_" + m, esc(m), n, f.marcas.includes(m))).join("")}
      <h3 class="md-label-large vx-sub">Condición</h3>${chk("cNuevo", "Nuevo", uni.filter((p) => p.condicion === "Nuevo").length, f.nuevo)}
      <label class="md-switch vx-switch-row"><span class="md-body-large">Sólo disponibles</span><input class="md-sr-only" type="checkbox" role="switch" id="fDisp"${f.soloDisp ? " checked" : ""}><span class="md-switch-track${f.soloDisp ? " md-switch-track--on" : ""}" aria-hidden="true"><span class="md-switch-handle vx-thumb"></span></span></label>
      <h3 class="md-label-large vx-sub">Precio (USD)</h3><div class="vx-two">${field({ id: "fMin", label: "Mínimo", value: f.min, inputmode: "decimal" })}${field({ id: "fMax", label: "Máximo", value: f.max, inputmode: "decimal" })}</div>
      <div class="md-sheet-foot">${btn("Limpiar", { kind: "text", id: "fClear" })}${btn("Ver resultados", { kind: "filled", id: "fApply" })}</div></div>`);
      const read = () => ({ orden: el.querySelector("input[name=ord]:checked").value, marcas: marcas.map(([m]) => m).filter((m) => el.querySelector('[id="m_' + m + '"]').checked), nuevo: el.querySelector("#cNuevo").checked, soloDisp: el.querySelector("#fDisp").checked, min: el.querySelector("#fMin").value.trim(), max: el.querySelector("#fMax").value.trim() });
      const paint = () => {
        const d = read();
        const prev = state.flow.filtros;
        state.flow.filtros = d;
        const n = aplicar(uni).length;
        state.flow.filtros = prev;
        el.querySelector("#fApply").textContent = `Ver ${plural(n, "resultado", "resultados")}`;
        el.querySelector("#fApl").innerHTML = [...d.marcas, ...d.nuevo ? ["Nuevo"] : [], ...d.soloDisp ? ["Sólo disponibles"] : []].map((t) => `<span class="md-chip md-chip--selected md-label-large">${esc(t)}</span>`).join("") || '<span class="md-body-medium vx-muted">Ninguno</span>';
      };
      el.addEventListener("change", (e) => {
        const t = e.target;
        if (t.matches(".md-check-input")) {
          const b = t.nextElementSibling;
          b.classList.toggle("md-check-box--on", t.checked);
          b.innerHTML = t.checked ? icon("check", 16) : "";
        }
        if (t.matches("input[role=switch]")) t.nextElementSibling.classList.toggle("md-switch-track--on", t.checked);
        paint();
      });
      el.addEventListener("input", paint);
      el.querySelector("#fClear").addEventListener("click", () => {
        state.flow.filtros = { orden: "relevantes", marcas: [], nuevo: false, soloDisp: false, min: "", max: "" };
        set({ flow: state.flow });
        closeOverlay();
      });
      el.querySelector("#fApply").addEventListener("click", () => {
        state.flow.filtros = read();
        set({ flow: state.flow });
        closeOverlay();
      });
      paint();
      return el;
    }
  });
  register("M2.05", {
    render() {
      return h(`<div>${topbar("Explorar", { back: false, trailing: iconBtn("bell", "Avisos", 'data-go="M6.17"') })}
      <div class="vx-pad"><button type="button" class="md-search md-sl vx-searchbtn" data-go="M2.02" data-kind="smart" aria-label="Buscar en VexBiz">${icon("search")}<span class="md-body-large vx-muted">Buscar en VexBiz</span></button></div>
      <ul class="vx-niches" role="list" data-stagger>${nichos.map((n, i) => nicheTile(n).replace("<li>", `<li style="--i:${i}">`)).join("")}</ul>
      <div class="vx-pad">${btn("Ver todas las tiendas", { kind: "outlined", block: true, go: "M2.11" })}</div></div>`);
    },
    mount(el, ctx) {
      if (ctx.first) $$("[data-stagger]", el).forEach(stagger);
    }
  });
  register("M2.06", {
    render(ctx) {
      const n = nichos.find((x) => x.id === ctx.params.id) || nichos[0];
      const cats = [["Aires split", 312, "aires"], ["Compresores", 86, "compresores"], ["Tarjetas", 54, "tarjetas"], ["Controles", 41, "controles"]];
      const el = h(page(topbar(n.nombre, { trailing: iconBtn("search", "Buscar", 'data-go="M2.02" data-kind="smart"') }), `
      <p class="md-body-large vx-pad-h">${esc(n.id === "clima" ? "Aires acondicionados, repuestos y herramientas de refrigeración." : n.texto)}</p>
      ${n.servicio ? `<div class="vx-pad-h">${banner("info", "Requiere instalación técnica", btn("Ver técnicos", { kind: "text", go: "M4.03" }))}</div>` : ""}
      <div class="vx-cats">${cats.map(([t, c, id]) => `<button type="button" class="vx-cat md-sl vx-press" data-go="M2.07?cat=${id}"><span class="md-title-small">${t}</span><span class="md-body-small vx-muted vx-tab-num">${num(c, 0)}</span></button>`).join("")}</div>
      ${filtroBar()}
      <section class="vx-sec">${sectionHead("Destacados")}<p class="md-body-medium vx-muted vx-pad-h">${num(n.productos || 1284, 0)} productos</p><div id="nList"></div></section>`));
      return el;
    },
    mount(el, ctx) {
      const base = () => ["aa12", "lg12", "comp", "mi12", "ctrl"].map(producto);
      return wireFiltros(el, base, (list) => {
        el.querySelector("#nList").innerHTML = list.length ? grid(list) : stateBlock({ icon: "searchoff", title: "No encontramos resultados", text: "Prueba quitando algún filtro." });
      });
    }
  });
  register("M2.07", {
    render(ctx) {
      const subs = [["rotativo", "Rotativos", 86], ["scroll", "Scroll", 24], ["inverter", "Inverter", 41], ["nevera", "Para nevera", 57]];
      return h(page(topbar("Compresores", { trailing: iconBtn("search", "Buscar", 'data-go="M2.02" data-kind="smart"') }), `
      <p class="md-label-large vx-muted vx-pad-h">Climatización › Repuestos de A/A</p>
      <p class="md-body-large vx-pad-h">Compresores rotativos y scroll para equipos split y de ventana, con su refrigerante y capacidad. Elige el que coincide con la placa de tu equipo…</p>
      <div class="vx-chipwrap vx-pad-h" role="group" aria-label="Tipo de compresor">${subs.map(([id, t, n]) => `<span class="md-chip-wrap"><button type="button" class="md-chip md-sl md-label-large" data-sub="${id}" aria-pressed="false">${t} <span class="vx-tab-num">${n}</span></button></span>`).join("")}</div>
      ${filtroBar()}<div id="cList"></div>`));
    },
    mount(el) {
      let sub = null;
      const base = () => COMPRESORES().filter((p) => !sub || p.sub === sub);
      const un = wireFiltros(el, base, (list) => {
        el.querySelector("#cList").innerHTML = list.length ? grid(list) : stateBlock({ icon: "searchoff", title: "No encontramos resultados", text: "Prueba quitando algún filtro." });
      });
      const repaint = () => set({ flow: state.flow });
      el.addEventListener("click", (e) => {
        const c = e.target.closest("[data-sub]");
        if (!c) return;
        sub = sub === c.dataset.sub ? null : c.dataset.sub;
        $$("[data-sub]", el).forEach((b) => {
          const on = b.dataset.sub === sub;
          b.classList.toggle("md-chip--selected", on);
          b.setAttribute("aria-pressed", on);
        });
        repaint();
      });
      return un;
    }
  });
  register("M2.08", {
    render(ctx) {
      const p = producto(ctx.params.id) || producto("aa12"), t = tienda(p.tienda), off = pct2(p);
      state.flow.viewing = p.id;
      const otras = (ofertas[p.id] || []).filter((o) => !o.actual);
      const desde = otras.length ? Math.min(...otras.map((o) => o.precio)) : 0;
      const el = h(page(
        `<header class="vx-fichahead">${iconBtn("back", "Volver", "data-back")}<span class="vx-spacer"></span>
        ${iconBtn("share", "Compartir", 'data-toast="Enlace copiado"')}
        <button type="button" class="md-iconbtn md-iconbtn--standard md-sl" id="fav" aria-pressed="false" aria-label="Guardar en favoritos">${icon("heart")}</button>
        <button type="button" class="md-iconbtn md-iconbtn--standard md-sl vx-cartbtn" data-go="M3.01" data-kind="smart" data-cart-btn aria-label="Carrito, ${plural(cartCount(), "artículo", "artículos")}">${icon("cart")}<span class="md-badge md-badge--large vx-cartbadge" id="fCart"${cartCount() ? "" : " hidden"}>${cartCount()}</span></button></header>`,
        `
      <button type="button" class="vx-gallery md-sl" data-go="M2.09?id=${p.id}" data-kind="fade" aria-label="Abrir la galería, 5 fotos">${icon("box", 64)}<span class="vx-gcount md-label-medium">1 de 5</span></button>
      <div class="vx-pad-h vx-ficha">
        <p class="md-body-small vx-muted">${esc(p.categoria)}</p>
        <h1 class="md-headline-small" tabindex="-1">${esc(p.nombre)}${p.id === "aa12" ? " · 220V" : ""}</h1>
        <p class="md-body-medium vx-muted">${p.marca ? esc(p.marca) + " · " : ""}Ref. ${esc(p.ref || p.id.toUpperCase())}${p.gtin ? " · GTIN " + p.gtin : ""}</p>
        <div class="vx-badges">${off ? '<span class="vx-tag md-label-medium">La mejor oferta</span>' : ""}<span class="vx-tag md-label-medium">${esc(p.condicion)}</span></div>
        <div class="vx-price vx-tab-num">${p.antes ? `<p class="md-body-medium"><s class="vx-muted">${money(p.antes)}</s> <span class="vx-off md-label-medium">−${off} %</span> <span class="vx-muted">Oferta hasta el ${p.oferta}</span></p>` : ""}
          <p class="vx-price-now" id="fPrice">${money(p.precio)}</p><p class="md-body-medium vx-muted">${bsRef(p.precio, "15/10")}</p></div>
        <p class="vx-stockline">${stockHtml(p.stock, ` · ${plural(p.stock, "unidad", "unidades")}`)}</p>
        <p class="md-body-small vx-muted">Precio y existencias confirmados por la tienda</p>
        <div class="vx-qtyrow"><span class="md-title-small">Cantidad</span>${stepper("q", 1, Math.max(p.stock, 1))}</div>
        <ul class="vx-list" role="list">
          <li><button type="button" class="md-li md-li--2 md-sl vx-press vx-row" data-go="M2.12?id=${t.id}">${avatar(t.sigla)}<span class="md-li-text"><span class="md-li-title md-body-large">${esc(t.nombre)}</span><span class="md-li-sup md-body-medium">${esc(t.ciudad)} · <span class="vx-tab-num">${stars(t.rating)}</span></span></span><span class="md-li-end">${icon("chevron")}</span></button></li>
          ${otras.length ? `<li><button type="button" class="md-li md-sl vx-press vx-row" data-go="O.OTR"><span class="md-li-icon">${icon("store")}</span><span class="md-li-text"><span class="md-li-title md-body-large">Otras ${otras.length} tiendas, desde ${money(desde)}</span></span><span class="md-li-end">${icon("chevron")}</span></button></li>` : ""}</ul>
        <section class="vx-sec vx-reveal">${sectionHead("Quienes lo vieron también compraron")}${scroller(["ctrl", "cap", "lg12"].map(producto))}</section>
      </div>`,
        `<div class="vx-actionsum"><span class="md-body-small vx-muted">Total</span><span class="md-title-large vx-tab-num" id="fTotal">${money(p.precio)}</span></div>${btn(`${icon("cart", 20)}Añadir al carrito`, { kind: "filled", id: "fAdd", attrs: `data-add="${p.id}" data-qty="1"${p.stock <= 0 ? " disabled" : ""}` })}`
      ));
      el.__p = p;
      return el;
    },
    mount(el) {
      const p = el.__p;
      let qty = 1;
      const out = el.querySelector("[data-qty]"), dec = el.querySelector("[data-dec]"), inc = el.querySelector("[data-inc]"), add = el.querySelector("#fAdd");
      const paint = () => {
        out.textContent = qty;
        dec.disabled = qty <= 1;
        inc.disabled = qty >= p.stock;
        add.dataset.qty = qty;
        el.querySelector("#fTotal").textContent = money(p.precio * qty);
        play(el.querySelector("#fTotal"), "vx-tick");
        play(out, "vx-tick");
      };
      dec.addEventListener("click", () => {
        qty = Math.max(1, qty - 1);
        paint();
      });
      inc.addEventListener("click", () => {
        qty = Math.min(p.stock, qty + 1);
        paint();
      });
      el.querySelector("#fav").addEventListener("click", (e) => {
        const b = e.currentTarget, on = b.getAttribute("aria-pressed") !== "true";
        b.setAttribute("aria-pressed", on);
        b.classList.toggle("is-fav", on);
        toast(on ? "Guardado en favoritos" : "Quitado de favoritos");
      });
      const un = subscribe(() => {
        const b = el.querySelector("#fCart");
        b.hidden = !cartCount();
        b.textContent = cartCount();
      });
      reveal(el);
      return un;
    }
  });
  register("M2.09", {
    skeleton: false,
    render() {
      const el = h(`<div class="vx-gal"><header class="vx-galhead">${iconBtn("close", "Cerrar galería", "data-back")}<h1 class="md-title-medium vx-tab-num" id="gCount" aria-live="polite" tabindex="-1">1 de 5</h1><span class="vx-spacer"></span></header>
      <div class="vx-carousel vx-galcar" tabindex="0" aria-label="Fotos del producto">${[1, 2, 3, 4, 5].map((n) => `<div class="vx-slide vx-gslide" role="group" aria-label="Foto ${n} de 5">${icon("box", 72)}</div>`).join("")}</div>
      <div class="vx-dots vx-galdots" aria-hidden="true">${[0, 1, 2, 3, 4].map((i) => `<i class="vx-dot${i === 0 ? " is-on" : ""}"></i>`).join("")}</div></div>`);
      return el;
    },
    mount(el) {
      const car = el.querySelector(".vx-carousel"), dots = $$(".vx-dot", el), out = el.querySelector("#gCount");
      const on = () => {
        const i = Math.round(car.scrollLeft / car.clientWidth);
        dots.forEach((d, k) => d.classList.toggle("is-on", k === i));
        out.textContent = `${i + 1} de 5`;
      };
      car.addEventListener("scroll", on, { passive: true });
      car.scrollLeft = car.clientWidth;
      on();
    }
  });
  register("O.OTR", {
    render() {
      const id = state.flow.viewing || "aa12", p = producto(id), list = ofertas[id] || [];
      const disp = list.filter((o) => o.stock > 0), best = disp.length ? Math.min(...disp.map((o) => o.precio)) : null;
      const rows = list.map((o) => {
        const t = tienda(o.t), s = stock(o.stock);
        return `<li class="vx-offer"><div class="vx-offer-top">${avatar(t.sigla)}<div><p class="md-body-large">${esc(t.nombre)}</p><p class="md-body-small vx-muted vx-tab-num">${stars(t.rating)} · ${esc(t.ciudad)}</p></div>
        <div class="vx-offer-price vx-tab-num"><b class="md-title-medium">${money(o.precio)}</b>${o.antes ? `<s class="md-body-small vx-muted">${money(o.antes)}</s>` : ""}</div></div>
        <p class="vx-offer-tags md-body-small">${o.actual ? '<span class="vx-tag">La que estás viendo</span>' : ""}${o.precio === best ? '<span class="vx-tag">Mejor precio</span>' : ""}${o.nota && o.precio !== best ? `<span class="vx-tag">${esc(o.nota)}</span>` : ""}${o.stock > 0 ? `<span class="vx-tag">Nuevo</span>` : ""}
          ${stockHtml(o.stock, o.stock > 0 ? ` · ${o.stock} u.` : "")}</p>
        <div class="vx-offer-act">${btn("Ver tienda", { kind: "outlined", go: `M2.12?id=${t.id}` })}${btn("Añadir al carrito", { kind: "filled", attrs: `data-add="${id}" ${o.actual ? "" : `data-oferta="${o.t}"`}${o.stock <= 0 ? " disabled" : ""}` })}</div></li>`;
      }).join("");
      const el = h(`<div><div class="vx-sheet-head"><h2 id="sheet-title" class="md-title-large md-sheet-title" tabindex="-1">${list.length} tiendas lo venden</h2>${iconBtn("close", "Cerrar", "data-close")}</div>
      <p class="md-body-medium vx-muted vx-pad-h">${esc(p.nombre)}</p><ul class="vx-offers" role="list">${rows}</ul></div>`);
      closeOnGo(el);
      return el;
    }
  });
  register("M2.11", {
    render() {
      const el = h(`<div>${topbar("Tiendas")}
      <div class="vx-pad">${field({ id: "tq", label: "Buscar tienda", type: "search", autocomplete: "off" })}</div>
      <div class="vx-chipwrap vx-pad-h" role="group" aria-label="Filtrar por nicho">${["Todas", "Climatización", "Electrodomésticos", "Electricidad"].map((n2, i) => `<span class="md-chip-wrap"><button type="button" class="md-chip md-sl md-label-large${i === 0 ? " md-chip--selected" : ""}" data-n="${n2}" aria-pressed="${i === 0}">${n2}</button></span>`).join("")}</div>
      <ul class="vx-list" role="list" id="tList"></ul></div>`);
      let n = "Todas", q = "";
      const paint = () => {
        const l = directorio.filter((t) => (n === "Todas" || t.nicho === n) && norm(t.nombre).includes(norm(q)));
        el.querySelector("#tList").innerHTML = l.length ? l.map(storeRow).join("") : `<li>${stateBlock({ icon: "searchoff", title: "No hay tiendas con ese nombre", text: "Estas son todas las que hay hoy." })}</li>`;
      };
      el.addEventListener("click", (e) => {
        const c = e.target.closest("[data-n]");
        if (!c) return;
        n = c.dataset.n;
        $$("[data-n]", el).forEach((b) => {
          const on = b === c;
          b.classList.toggle("md-chip--selected", on);
          b.setAttribute("aria-pressed", on);
        });
        paint();
      });
      el.querySelector("#tq").addEventListener("input", (e) => {
        q = e.target.value;
        paint();
      });
      paint();
      return el;
    }
  });
  register("M2.12", {
    render(ctx) {
      const id = ctx.params.id || "ft";
      const t = directorio.find((x) => x.id === id) || tienda(id) || tienda("ft");
      const full = tienda(t.id) || {};
      const el = h(page(topbar(t.nombre, { trailing: iconBtn("search", "Buscar", 'data-go="M2.02" data-kind="smart"') }), `
      <section class="vx-storehead vx-pad-h">${avatar(t.sigla, true)}<div><p class="md-title-medium">${esc(t.nombre)}</p>
        ${full.verificada ? `<p class="md-label-medium vx-verified">${icon("check", 16)} Verificada por VexBiz</p>` : ""}
        <p class="md-body-medium vx-muted">${esc(t.nicho)} · ${esc(full.region ? `${t.ciudad}, ${full.region.replace("Distrito Capital", "D. Capital")}` : t.ciudad)}</p>
        <p class="md-body-medium vx-tab-num">${stars(t.rating)} · ${t.productos} productos publicados</p></div></section>
      ${filtroBar()}<div id="sList"></div>`));
      el.__id = t.id;
      return el;
    },
    mount(el) {
      const base = () => productos.filter((p) => p.tienda === el.__id);
      return wireFiltros(el, base, (list) => {
        el.querySelector("#sList").innerHTML = list.length ? grid(list) : stateBlock({ icon: "inbox", title: "Esta tienda todavía no tiene productos en la demo", text: "Prueba con Frío Total C.A." });
      });
    }
  });

  // assets/js/screens/m3.js
  var ENVIO = { ft: { costo: 8.4, km: 14, kg: 9, dias: "1–2 días" }, ha: { costo: 0, dias: "1–3 días", gratis: true } };
  var envioDe = (id) => ENVIO[id] || { costo: 6, km: 20, kg: 5, dias: "2–4 días" };
  var IMPUESTO = { debito: 3, binance: 0, transferencia: 0 };
  var METODO = { debito: "Débito bancario", binance: "Binance Pay", transferencia: "Transferencia a VexBiz" };
  var dirActual = () => state.dirs.find((d) => d.id === state.flow.direccion) || state.dirs[0];
  var dirCorta = (d) => `${d.linea.split(",")[0]}, ${d.ciudad.split(",")[0]}`;
  function compraActual() {
    const lines = cartLines();
    const grupos = [...new Set(lines.map((l) => l.t.id))].map((id) => {
      const ls = lines.filter((l) => l.t.id === id), env = envioDe(id), retiro = !!state.flow.retiro[id];
      return { t: tienda(id), ls, units: ls.reduce((n, l) => n + l.qty, 0), env, retiro, envio: retiro ? 0 : env.costo, subtotal: round2(ls.reduce((s, l) => s + l.precio * l.qty, 0)) };
    });
    const subtotal = cartSubtotal(), envio = round2(grupos.reduce((s, g) => s + g.envio, 0));
    const impPct = IMPUESTO[state.flow.metodo] ?? 0, impuesto = pct(subtotal + envio, impPct);
    return { lines, grupos, subtotal, envio, impPct, impuesto, total: round2(subtotal + envio + impuesto) };
  }
  var compraPasarela = () => {
    const sub = round2(compra.pedidos.reduce((s, p) => s + p.total, 0)), imp = pct(sub, compra.pasarela.impuestoPct);
    return { sub, imp, total: round2(sub + imp) };
  };
  var thumb = (n = 24) => `<span class="vx-thumb-ph vx-thumb-ph--sm" aria-hidden="true">${icon("box", n)}</span>`;
  register("M3.01", {
    render() {
      return h(page(
        topbar("Tu carrito", { back: false }),
        `<div id="cartBody"></div>`,
        `<div class="vx-actionsum"><span class="md-body-small vx-muted">Total</span><span class="md-title-large vx-tab-num" id="cTotal"></span></div>${btn("Continuar", { kind: "filled", id: "cGo", go: "M3.02" })}`
      ));
    },
    mount(el, ctx) {
      const body = el.querySelector("#cartBody");
      let first = true, lastTotal = null;
      const paint = () => {
        const act = document.activeElement, keep = act && (act.dataset.inc || act.dataset.dec || act.dataset.rm) ? ["inc", "dec", "rm"].map((k) => act.dataset[k] ? [k, act.dataset[k]] : null).find(Boolean) : null;
        const c = compraActual(), cambios = c.lines.filter((l) => l.cambioPrecio).length;
        if (!c.lines.length) {
          body.innerHTML = stateBlock({ icon: "cart", title: "Tu carrito está vacío", text: "Cuando añadas algo aparecerá aquí.", action: btn("Explorar", { kind: "outlined", go: "M2.05", kindNav: "swap" }) });
        } else {
          body.innerHTML = `
          <div class="vx-pad-h vx-stack">${banner("warning", `Compra #VX-20418 sin pagar · <b class="vx-tab-num">${money(129.9)}</b> · hasta hoy 18:30`, btn("Pagar", { kind: "text", go: "M3.09" }))}
            ${cambios ? banner("info", `El precio de ${plural(cambios, "artículo", "artículos")} cambió desde que lo añadiste.`) : ""}</div>
          <p class="md-body-medium vx-muted vx-pad-h">${plural(c.lines.length, "artículo", "artículos")} en ${plural(c.grupos.length, "tienda", "tiendas")}</p>
          ${c.grupos.map((g, gi) => `<section class="vx-cartgroup" aria-label="${esc(g.t.nombre)}"><h2 class="md-title-medium">${esc(g.t.nombre)}</h2>
            <ul class="vx-list" role="list">${g.ls.map((l) => `<li class="vx-cartline${l.cambioPrecio ? " vx-priced" : ""}" data-line="${l.key}">${thumb()}
              <div class="vx-cartline-main"><p class="md-body-large">${esc(l.p.corto || l.p.nombre)}</p><p class="md-body-medium vx-muted vx-tab-num">${money(l.precio)} c/u</p>
                ${l.cambioPrecio ? `<p class="vx-tag md-label-small">${icon("info", 14)}Cambió de precio</p>` : ""}
                <div class="vx-cartline-row">${stepper(l.key, l.qty, l.p.stock)}<b class="md-title-medium vx-tab-num">${money(l.precio * l.qty)}</b></div></div>
              <button type="button" class="md-iconbtn md-iconbtn--standard md-sl" data-rm="${l.key}" aria-label="Quitar del carrito: ${esc(l.p.corto || l.p.nombre)}">${icon("trash")}</button></li>`).join("")}</ul>
            <p class="md-body-small vx-muted">La tienda confirmó precio y existencias hace ${[4, 12, 8][gi % 3]} min</p>
            <p class="vx-sub-row md-body-large vx-tab-num"><span>Subtotal de la tienda</span><b>${money(g.subtotal)}</b></p></section>`).join("")}`;
        }
        el.querySelector("#cTotal").textContent = money(c.subtotal);
        el.querySelector("#cGo").disabled = !c.lines.length;
        if (lastTotal !== null && lastTotal !== c.subtotal) play(el.querySelector("#cTotal"), "vx-tick");
        lastTotal = c.subtotal;
        if (first) {
          first = false;
          $$(".vx-priced", body).forEach((n) => play(n, "vx-flash"));
        }
        if (keep) body.querySelector(`[data-${keep[0]}="${keep[1]}"]`)?.focus();
      };
      el.addEventListener("click", (e) => {
        const inc = e.target.closest("[data-inc]"), dec = e.target.closest("[data-dec]"), rm = e.target.closest("[data-rm]");
        const find = (k) => state.cart.find((l) => lineKey(l) === k);
        if (inc) setQty(inc.dataset.inc, find(inc.dataset.inc).qty + 1);
        if (dec) setQty(dec.dataset.dec, find(dec.dataset.dec).qty - 1);
        if (rm) {
          const undo = removeLine(rm.dataset.rm);
          toast("Quitado del carrito", { action: "Deshacer", onAction: undo });
        }
      });
      paint();
      return subscribe(paint);
    }
  });
  register("M3.02", {
    render() {
      const el = h(page(
        topbar("Pagar"),
        `${checkoutSteps(1)}<div id="dirCard"></div>
      <p class="md-title-small vx-pad-h">Aquí te llegará el pedido</p>
      <p class="md-body-medium vx-muted vx-pad-h">La dirección también va en la factura, aunque retires en la tienda.</p>`,
        btn("Continuar", { kind: "filled", block: true, go: "M3.04" })
      ));
      const paint = () => {
        const d = dirActual();
        el.querySelector("#dirCard").innerHTML = `<section class="vx-card vx-addr"><div class="vx-map" aria-hidden="true">${icon("map", 40)}</div>
        <div class="vx-addr-body"><p class="md-title-medium">${esc(d.nombre)}${d.predeterminada ? ' <span class="vx-tag md-label-small">Predeterminada</span>' : ""}</p>
        <p class="md-body-large">${esc(d.linea)}</p>${d.ref ? `<p class="md-body-medium vx-muted">${esc(d.ref)}</p>` : ""}
        <p class="md-body-medium vx-muted vx-tab-num">${esc(d.ciudad)} · CP ${d.cp}</p><p class="md-body-medium vx-muted vx-tab-num">${d.tel}</p>
        <div class="vx-row-end">${btn("Editar", { kind: "text", go: "M6.14" })}${btn("Cambiar", { kind: "text", go: "M3.03" })}</div></div></section>`;
      };
      paint();
      el.__un = subscribe(paint);
      return el;
    },
    mount(el) {
      fillSteps(el);
      return el.__un;
    }
  });
  register("M3.03", {
    render() {
      const sel = state.flow.direccion;
      const el = h(`<div class="vx-page"><header class="vx-sheet-head vx-flowhead"><h2 id="sheet-title" class="md-title-large md-sheet-title" tabindex="-1">¿Dónde lo recibes?</h2>${iconBtn("close", "Cerrar", "data-close")}</header>
      <div class="vx-body vx-pad-h"><div role="radiogroup" aria-label="Dirección de entrega" class="vx-options">${state.dirs.map((d) => radioOpt({
        name: "dir",
        value: d.id,
        checked: sel === d.id,
        title: `${esc(d.nombre)}${d.predeterminada ? ' <span class="vx-tag md-label-small">Predeterminada</span>' : ""}`,
        text: `${esc(d.linea)}<br>${esc(d.ciudad)} ${d.cp}<br><span class="vx-tab-num">${d.tel.replace("-", " ")}</span>`,
        extra: d.sinMapa ? `<span class="vx-tag md-label-small">${icon("warning", 14)}Sin punto en el mapa</span>` : "",
        end: iconBtn("edit", `Editar ${d.nombre}`, 'data-go="M6.14"')
      })).join("")}</div>
        ${btn(`${icon("add", 20)}Añadir otra dirección`, { kind: "outlined", block: true, go: "M6.14" })}</div>
      <footer class="vx-actionbar">${btn("Usar esta dirección", { kind: "filled", block: true, id: "dUsar" })}</footer></div>`);
      wireControls(el);
      closeOnGo(el);
      el.querySelector("#dUsar").addEventListener("click", () => {
        set({ flow: { ...state.flow, direccion: el.querySelector("input[name=dir]:checked").value } });
        closeOverlay();
      });
      return el;
    }
  });
  register("M3.04", {
    render() {
      const el = h(page(
        topbar("Pagar"),
        `${checkoutSteps(2)}<div id="envBody"></div>`,
        `<div class="vx-actionsum"><span class="md-body-small vx-muted">Subtotal y envío</span><span class="md-title-large vx-tab-num" id="eTotal"></span></div>${btn("Pagar", { kind: "filled", go: "M3.06" })}`
      ));
      const paint = () => {
        const c = compraActual(), d = dirActual();
        el.querySelector("#envBody").innerHTML = `<div class="vx-pad-h"><p class="md-title-small">${esc(d.nombre)}</p><p class="md-body-medium vx-muted">${esc(dirCorta(d))} ${btn("Cambiar", { kind: "text", go: "M3.03" })}</p>
        <p class="md-body-medium">Cada tienda despacha su paquete por separado.</p></div>
        ${c.grupos.map((g) => `<section class="vx-cartgroup" aria-label="${esc(g.t.nombre)}"><h2 class="md-title-medium">${esc(g.t.nombre)} <span class="md-body-medium vx-muted">· ${plural(g.units, "unidad", "unidades")}</span></h2>
          <ul class="vx-list" role="list">${g.ls.map((l) => `<li class="vx-envline">${thumb(20)}<span class="md-body-medium">${esc(l.p.corto || l.p.nombre)}<br><span class="vx-muted vx-tab-num">${l.qty} × ${money(l.precio)}</span></span><b class="md-body-large vx-tab-num">${money(l.precio * l.qty)}</b></li>`).join("")}</ul>
          ${g.env.gratis ? `<p class="md-body-medium vx-env">${icon("check", 18)} Esta tienda no te cobra el envío · ${g.env.dias}</p>` : `
            <p class="md-body-medium vx-env vx-tab-num">${icon("truck", 18)} ${g.retiro ? "Retiro en la tienda · $ 0,00" : `Envío ${money(g.env.costo)} · ${g.env.km} km · ${g.env.kg} kg · ${g.env.dias} · Aproximado`}</p>
            <div class="vx-row-end">${btn("Ver ruta", { kind: "text", go: "M3.05" })}</div>
            ${switchHtml("ret_" + g.t.id, "Prefiero retirarlo en la tienda", g.retiro)}`}</section>`).join("")}`;
        el.querySelector("#eTotal").textContent = money(c.subtotal + c.envio);
      };
      el.addEventListener("change", (e) => {
        const t = e.target.closest("input[role=switch]");
        if (!t) return;
        state.flow.retiro[t.id.slice(4)] = t.checked;
        set({ flow: state.flow });
        play(el.querySelector("#eTotal"), "vx-tick");
      });
      paint();
      el.__un = subscribe(paint);
      return el;
    },
    mount(el) {
      fillSteps(el);
      return el.__un;
    }
  });
  register("M3.05", {
    render() {
      const R = { km: 168, recta: 142, base: 8, porKm: 0.05, ivaPct: 16 };
      const kmImp = round2(R.porKm * R.km), imp = pct(R.base + kmImp, R.ivaPct);
      const row2 = (k, v) => `<div class="vx-kv"><dt class="md-body-medium vx-muted">${k}</dt><dd class="md-body-large vx-tab-num">${v}</dd></div>`;
      return h(`<div>${topbar("Ruta desde Frío Total")}
      <div class="vx-map vx-map--big" aria-hidden="true">${icon("map", 56)}</div>
      <div class="vx-pad-h vx-routestats vx-tab-num"><p><b class="md-title-large">${R.km} km</b><br><span class="md-body-small vx-muted">por carretera</span></p><p><b class="md-title-large">${R.recta} km</b><br><span class="md-body-small vx-muted">en línea recta</span></p><p><b class="md-title-large">2 h 10 min</b><br><span class="md-body-small vx-muted">estimados</span></p></div>
      <h2 class="md-title-medium vx-pad-h">Cómo se calculó</h2>
      <dl class="vx-pad-h vx-dl">${row2("Tramo", "Caracas → Valencia")}${row2("Vehículo", "Camioneta de carga")}${row2("Bultos · peso", "2 · 38 kg")}${row2("Importe base", money(R.base))}${row2("Por kilómetro", `${money(R.porKm)} × ${R.km} = ${money(kmImp)}`)}${row2("Impuesto", money(imp))}</dl>
      <p class="md-body-small vx-muted vx-pad-h">El mapa es orientativo. El importe del envío es el que ves en el paso anterior.</p></div>`);
    }
  });
  register("M3.06", {
    render() {
      const m = state.flow.metodo;
      const el = h(page(
        topbar("Pagar"),
        `${checkoutSteps(3)}
      <p class="md-body-large vx-pad-h">Un solo pago para toda la compra, aunque sean varias tiendas.</p>
      <div class="vx-options vx-pad-h" role="radiogroup" aria-label="Forma de pago">
        ${radioOpt({ name: "metodo", value: "debito", checked: m === "debito", title: "Débito bancario", text: "Pagas con la clave que te envía tu banco.", extra: `<span class="md-label-medium vx-tab-num">USD · Impuesto del pago: ${IMPUESTO.debito} %</span>` })}
        ${radioOpt({ name: "metodo", value: "binance", checked: m === "binance", title: "Binance Pay", text: "Pagas desde tu cuenta de Binance.", extra: '<span class="md-label-medium">USDT</span>' })}
        ${radioOpt({ name: "metodo", value: "transferencia", checked: m === "transferencia", title: "Transferencia a VexBiz", text: "Transfieres y reportas el pago.", extra: '<span class="md-label-medium">USD · Sin impuesto</span>' })}</div>
      <section id="bancos" class="vx-pad-h" ${m === "debito" ? "" : "hidden"}><h2 class="md-title-medium">Tus datos para el débito</h2>
        <div class="vx-options" role="radiogroup" aria-label="Cuenta para el débito">${compra.bancos.map((b) => radioOpt({
          name: "banco",
          value: b.id,
          checked: state.flow.banco === b.id,
          title: `${esc(b.nombre)}${b.tipo ? " · " + esc(b.tipo) : ""}`,
          text: `<span class="vx-tab-num">${esc(b.doc)} · ${esc(b.tel)}</span>`
        })).join("")}</div>
        <p class="md-body-medium vx-muted">Tu banco te enviará una clave de 8 dígitos por SMS al pagar.</p></section>
      <div class="vx-pad-h"><form class="vx-form" novalidate onsubmit="return false">${field({ id: "cupon", label: "Cupón (opcional)", value: state.flow.cupon ?? "VEXBIZ10" })}</form></div>`,
        `<div class="vx-actionsum"><span class="md-body-small vx-muted">Total a pagar</span><span class="md-title-large vx-tab-num" id="pTotal"></span></div>${btn("Pagar", { kind: "filled", go: "O.RES" })}`
      ));
      wireControls(el);
      const paint = () => {
        const c = compraActual();
        el.querySelector("#pTotal").textContent = money(c.total);
      };
      el.addEventListener("change", (e) => {
        if (e.target.name === "metodo") {
          state.flow.metodo = e.target.value;
          el.querySelector("#bancos").hidden = e.target.value !== "debito";
          paint();
          play(el.querySelector("#pTotal"), "vx-tick");
        }
        if (e.target.name === "banco") state.flow.banco = e.target.value;
      });
      el.querySelector("#cupon").addEventListener("input", (e) => {
        state.flow.cupon = e.target.value;
      });
      paint();
      return el;
    },
    mount(el) {
      fillSteps(el);
    }
  });
  register("O.RES", {
    render() {
      const c = compraActual(), d = dirActual(), b = compra.bancos.find((x) => x.id === state.flow.banco);
      const row2 = (k, v, strong = false) => `<div class="vx-sumrow${strong ? " is-strong" : ""}"><dt class="md-body-large">${k}</dt><dd class="md-body-large vx-tab-num">${v}</dd></div>`;
      const el = h(`<div><div class="vx-sheet-head"><h2 id="sheet-title" class="md-title-large md-sheet-title" tabindex="-1">Resumen de la compra</h2>${iconBtn("close", "Cerrar", "data-close")}</div>
      <p class="md-body-medium vx-muted vx-pad-h">${plural(c.lines.length, "artículo", "artículos")}</p>
      <ul class="vx-list vx-pad-h" role="list"><li class="md-body-large">${esc(d.nombre)}<br><span class="md-body-medium vx-muted">${esc(dirCorta(d))}</span></li>
        <li class="md-body-large">${METODO[state.flow.metodo]}${state.flow.metodo === "debito" && b ? `<br><span class="md-body-medium vx-muted">${esc(b.nombre)}${b.tipo ? " · " + esc(b.tipo) : ""}</span>` : ""}</li></ul>
      <dl class="vx-pad-h vx-dl">${row2("Subtotal", money(c.subtotal))}
        ${c.grupos.map((g) => row2(`Envío · ${esc(g.t.nombre)}`, g.retiro ? "Retiro en tienda" : g.env.gratis ? "No te lo cobran" : money(g.envio))).join("")}
        ${c.impPct ? row2(`Impuesto del pago (${c.impPct} %)`, money(c.impuesto)) : ""}
        ${state.flow.cupon ? row2(`Cupón: ${esc(state.flow.cupon)}`, '<span class="md-body-medium vx-muted">se aplica al confirmar</span>') : ""}
        ${row2("Total a pagar", money(c.total), true)}</dl>
      <p class="md-body-small vx-muted vx-pad-h vx-tab-num">Precios y envío con impuestos incluidos · ≈ ${bs(c.total)} referencial</p>
      <p class="md-body-medium vx-pad-h">Se crean ${plural(c.grupos.length, "pedido", "pedidos")}, uno por tienda, con un solo pago.</p>
      <div class="md-sheet-foot">${btn("Confirmar y pagar", { kind: "filled", go: "M3.08", kindNav: "push" })}</div></div>`);
      closeOnGo(el);
      return el;
    }
  });
  register("M3.08", {
    render() {
      const prod = (n, q, p, s, st) => `<li class="vx-wait-line" data-st="${st}">${thumb(20)}<div><p class="md-body-large">${n}</p><p class="md-body-medium vx-muted vx-tab-num">${q} × ${money(p)} · ${s}</p></div><span class="vx-status" data-status></span></li>`;
      return h(`<div class="vx-wait"><header class="vx-backbar">${iconBtn("close", "Salir de la sala de espera", 'data-go="M2.01" data-kind="mode"')}</header>
      <section class="vx-pad-h"><h1 class="md-headline-small" tabindex="-1">Confirmando tu compra</h1>
        <p class="vx-timer md-display-small vx-tab-num"><span class="md-title-large">Queda </span><span id="wLeft">3:42</span></p>
        <span class="vx-bar-track" aria-hidden="true"><span id="wBar" class="vx-bar-fill"></span></span>
        <p class="md-body-large" id="wWho">2 tiendas tienen que contestar</p>
        <p class="vx-urgent" id="wUrg" hidden>${icon("warning", 18)} Queda menos de un minuto</p><span class="md-sr-only" id="wLive" aria-live="polite"></span></section>
      <section class="vx-card vx-decide vx-pad-h" id="wDecide"><h2 class="md-title-medium">Hay algo que decidir</h2>
        <p class="md-body-large">Tarjeta electrónica condensadora split 12K</p><p class="md-body-medium vx-muted vx-tab-num">Pediste 2 × ${money(64)} a ClimaRepuestos</p>
        <p class="md-body-medium vx-tab-num">La tienda propone: 1 unidad a ${money(64)}</p><p class="md-body-medium vx-tab-num"><b>Pagarías ${money(64)} menos</b></p>
        <p class="md-body-medium vx-tab-num">Te quedan <b id="wLeft2">3:42</b></p><p class="md-body-small vx-muted">Si no contestas a tiempo, esa línea sale de la compra.</p>
        <div class="vx-stack">${btn("Aceptar la propuesta", { kind: "filled", block: true, attrs: "data-dec-ok" })}${btn("Quitar esa línea", { kind: "outlined", block: true, attrs: "data-dec-no" })}</div></section>
      <p class="md-body-medium vx-pad-h" id="wDone" hidden></p>
      <ul class="vx-list vx-pad-h" role="list">${prod("Aire split inverter 12.000 BTU", 1, 389, "Frío Total C.A.", "ok")}${prod("Capacitor de marcha 35+5 µF", 2, 9.5, "Frío Total C.A.", "wait")}${prod("Motor ventilador 18 W", 1, 32, "Refrigeración El Sol", "fail")}</ul>
      <p class="md-body-small vx-muted vx-pad-h" id="wAgo">Actualizado hace 8 s</p><p class="md-body-medium vx-pad-h">Te avisamos aquí en cuanto contesten. Puedes salir y volver.</p>
      <div class="vx-pad">${btn("Seguir sin esperar", { kind: "text", block: true, go: "M3.09", kindNav: "push" })}</div></div>`);
    },
    mount(el) {
      const ST = { ok: ["check", "Confirmada"], wait: ["clock", "Esperando a que la tienda confirme"], fail: ["close", "No se pudo conseguir"] };
      const paintSt = () => $$("[data-st]", el).forEach((li) => {
        const [ic, t] = ST[li.dataset.st];
        li.querySelector("[data-status]").innerHTML = `${icon(ic, 16)}<span class="md-label-medium">${t}</span>`;
      });
      paintSt();
      let ago = 8, decided = false, ended = false, timers = [];
      const finish = () => {
        if (ended) return;
        ended = true;
        go("M3.09", { kind: "mode" });
      };
      const check = () => {
        if (decided && !$$('[data-st="wait"]', el).length) {
          el.querySelector("#wDone").hidden = false;
          el.querySelector("#wDone").textContent = "Todas las tiendas contestaron. Pasamos al pago.";
          timers.push(setTimeout(finish, 1400));
        }
      };
      timers.push(setTimeout(() => {
        const li = el.querySelector('[data-st="wait"]');
        if (li) {
          li.dataset.st = "ok";
          paintSt();
          el.querySelector("#wWho").textContent = "1 tienda tiene que contestar";
          ago = 0;
          check();
        }
      }, 6e3));
      const ageId = setInterval(() => {
        ago += 1;
        el.querySelector("#wAgo").textContent = `Actualizado hace ${ago} s`;
      }, 1e3);
      el.querySelector("#wDecide").addEventListener("click", (e) => {
        const ok = e.target.closest("[data-dec-ok]"), no = e.target.closest("[data-dec-no]");
        if (!ok && !no) return;
        decided = true;
        el.querySelector("#wDecide").hidden = true;
        toast(ok ? "Aceptaste: 1 unidad a " + money(64) : "Quitaste esa línea de la compra");
        el.querySelector("#wWho").textContent = "1 tienda tiene que contestar";
        check();
      });
      let said = false;
      const stop = countdown({
        textEl: el.querySelector("#wLeft"),
        barEl: el.querySelector("#wBar"),
        ms: (3 * 60 + 42) * 1e3,
        // Patrón 15: lineal
        onTick(left) {
          el.querySelector("#wLeft2").textContent = el.querySelector("#wLeft").textContent;
          if (left < 6e4 && !said) {
            said = true;
            el.querySelector("#wUrg").hidden = false;
            el.querySelector(".vx-timer").classList.add("vx-is-urgent");
            el.querySelector("#wLive").textContent = "Queda menos de un minuto para contestar.";
          }
        },
        onEnd: finish
      });
      return () => {
        stop();
        clearInterval(ageId);
        timers.forEach(clearTimeout);
        ended = true;
      };
    }
  });
  register("M3.09", {
    render() {
      const t = compraPasarela(), met = state.flow.metodoPasarela || "debito";
      const el = h(page(
        `<header class="vx-backbar">${iconBtn("close", "Cerrar", 'data-go="M2.01" data-kind="mode"')}</header>`,
        `
      <h1 class="md-headline-small vx-pad-h" tabindex="-1">Finalizar pago</h1>
      <p class="vx-pad-h"><span class="vx-tag md-label-medium">${icon("clock", 14)}Falta pagar</span></p>
      <div class="vx-pad-h vx-stack">${banner("warning", "Paga antes de las 18:00. Después se liberan las existencias.")}
        ${state.flow.rechazado ? banner("error", "Tu banco rechazó el último intento: «Fondos insuficientes».", btn("Ver detalle", { kind: "text", attrs: 'data-toast="Tu banco informó fondos insuficientes en el intento anterior"' })) : ""}</div>
      <div class="vx-options vx-pad-h" role="radiogroup" aria-label="Forma de pago">
        ${radioOpt({ name: "mp", value: "debito", checked: met === "debito", title: "Débito bancario", text: "Clave de 8 dígitos por SMS de tu banco." })}
        ${radioOpt({ name: "mp", value: "binance", checked: met === "binance", title: "Binance Pay", text: "Paga con la app de Binance." })}</div>
      <section class="vx-pad-h"><h2 class="md-title-medium">Tu compra · ${plural(compra.pedidos.length, "pedido", "pedidos")}</h2>
        <ul class="vx-list" role="list">${compra.pedidos.map((p) => `<li class="vx-sumrow"><span class="md-body-large">${esc(p.tienda)}<br><span class="md-body-medium vx-muted vx-tab-num">${p.id} · ${plural(p.articulos, "artículo", "artículos")}</span></span><b class="md-body-large vx-tab-num">${money(p.total)}</b></li>`).join("")}</ul>
        <dl class="vx-dl"><div class="vx-sumrow"><dt class="md-body-large">Pedidos</dt><dd class="md-body-large vx-tab-num">${money(t.sub)}</dd></div>
          <div class="vx-sumrow"><dt class="md-body-large">Impuesto del pago (${compra.pasarela.impuestoPct} %)</dt><dd class="md-body-large vx-tab-num">${money(t.imp)}</dd></div>
          <div class="vx-sumrow is-strong"><dt class="md-body-large">Total</dt><dd class="md-body-large vx-tab-num">${money(t.total)}</dd></div></dl></section>
      <div class="vx-pad-h">${btn("Pagar con transferencia", { kind: "text", go: "M3.12" })}</div>`,
        `<div class="vx-actionsum"><span class="md-body-small vx-muted">Total</span><span class="md-title-large vx-tab-num">${money(t.total)}</span></div>${btn("Pagar", { kind: "filled", id: "mpGo" })}`
      ));
      wireControls(el);
      el.querySelector("#mpGo").addEventListener("click", () => {
        const m = el.querySelector("input[name=mp]:checked").value;
        state.flow.metodoPasarela = m;
        go("M3.10", { kind: "push", params: { metodo: m } });
      });
      return el;
    }
  });
  register("M3.10", {
    render(ctx) {
      const t = compraPasarela(), binance = ctx.params.metodo === "binance";
      const head = `<div class="vx-pad-h vx-payhead"><p class="md-display-small vx-tab-num">${money(t.total)}</p>
      <p class="md-body-medium vx-muted vx-tab-num">${binance ? `${num(t.total)} USDT` : bsRef(t.total, compra.pasarela.tasaDia, { decimals: 0 })} · ${plural(compra.pedidos.length, "pedido", "pedidos")}</p></div>`;
      const body = binance ? `${head}<div class="vx-pad-h"><div class="vx-qr" aria-hidden="true">${icon("map", 56)}</div>
        <p class="md-body-large">Abre Binance, entra a Binance Pay y paga <b class="vx-tab-num">${num(t.total)} USDT</b>.</p>
        <p class="md-body-medium vx-muted vx-tab-num">Intento #${compra.pasarela.intento} en Binance Pay</p></div>` : `${head}<div class="vx-pad-h"><div class="md-seg" role="tablist" aria-label="Pasos de la pasarela"><button type="button" role="tab" class="md-seg-item md-seg-item--on md-sl md-label-large" data-p="1" aria-selected="true">Paso 1 · Datos</button><button type="button" role="tab" class="md-seg-item md-sl md-label-large" data-p="2" aria-selected="false">Paso 2 · Clave</button></div>
        <section id="p1"><dl class="vx-dl"><div class="vx-kv"><dt class="md-body-medium vx-muted">Banco</dt><dd class="md-body-large">Banesco · Personal</dd></div><div class="vx-kv"><dt class="md-body-medium vx-muted">Teléfono</dt><dd class="md-body-large vx-tab-num">0414 ···1234</dd></div></dl>${btn("Continuar", { kind: "filled", block: true, attrs: 'data-p="2"' })}</section>
        <section id="p2" hidden><p class="md-body-large">Tu banco envió una clave de 8 dígitos al <span class="vx-tab-num">0414 ···1234</span></p>${otpHtml("clave", 8, "381072", "Clave de 8 dígitos")}
          <div class="vx-stack">${btn("Pagar " + money(t.total), { kind: "filled", block: true, id: "payGo" })}${btn("Reenviar la clave", { kind: "text", block: true, attrs: 'data-toast="Te enviamos otra clave por SMS"' })}</div></section>
        <p class="md-body-small vx-muted vx-tab-num">Intento #${compra.pasarela.intento} en SPIDI · Pago procesado por SPIDI</p></div>`;
      const el = h(`<div class="vx-page">${topbar(binance ? `Pagar con Binance Pay` : `Pagar ${money(t.total)}`)}<div class="vx-body">${body}</div>
      ${binance ? `<footer class="vx-actionbar">${btn("Ya pagué en Binance", { kind: "filled", block: true, id: "payGo" })}</footer>` : ""}</div>`);
      el.__binance = binance;
      return el;
    },
    mount(el) {
      const binance = el.__binance, goPay = el.querySelector("#payGo");
      const step = (n) => {
        if (binance) return;
        $$("[data-p].md-seg-item", el).forEach((b) => {
          const on = b.dataset.p === String(n);
          b.classList.toggle("md-seg-item--on", on);
          b.setAttribute("aria-selected", on);
        });
        el.querySelector("#p1").hidden = n !== 1;
        el.querySelector("#p2").hidden = n !== 2;
        if (n === 2) ctl.focusFirstEmpty();
      };
      let ctl = { focusFirstEmpty() {
      }, value: () => "12345678" };
      if (!binance) {
        ctl = wireOtp(el, "clave", (v) => {
          goPay.disabled = v.length < 8;
        });
        el.addEventListener("click", (e) => {
          const b = e.target.closest("[data-p]");
          if (b) step(Number(b.dataset.p));
        });
      }
      goPay.addEventListener("click", () => {
        goPay.classList.add("md-btn--busy");
        goPay.disabled = true;
        goPay.setAttribute("aria-busy", "true");
        setTimeout(() => go("M3.11", { kind: "mode", params: { estado: state.flow.demoPago, metodo: binance ? "binance" : "debito" } }), 900);
      });
    }
  });
  register("M3.11", {
    render(ctx) {
      const estado = ctx.params.estado || "aprobado", metodo = ctx.params.metodo || "debito", t = compraPasarela();
      const row2 = (k, v) => `<div class="vx-kv"><dt class="md-body-medium vx-muted">${k}</dt><dd class="md-body-large vx-tab-num">${v}</dd></div>`;
      const metTxt = { debito: "Débito · 0414 ···1234", binance: "Binance Pay · USDT", transferencia: "Transferencia bancaria" }[metodo];
      const ico = {
        aprobado: `<svg class="vx-ring vx-resico vx-resico--ok" viewBox="0 0 72 72" width="72" height="72" aria-hidden="true"><circle cx="36" cy="36" r="32" fill="none" stroke="currentColor" stroke-width="4"/><path class="vx-check" pathLength="1" d="M22 37l10 10 18-20" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
        rechazado: `<span class="vx-resico vx-resico--bad" id="resIco">${icon("error", 56)}</span>`,
        pendiente: `<span class="vx-resico vx-resico--wait">${icon("clock", 56)}</span>`,
        revision: `<span class="vx-resico vx-resico--wait">${icon("clock", 56)}</span>`
      }[estado];
      const title = { aprobado: "Pago aprobado", rechazado: "Pago rechazado", pendiente: "Pago pendiente", revision: "Transferencia reportada" }[estado];
      const pedidos2 = `<h2 class="md-title-medium">Pedidos</h2><ul class="vx-list" role="list">${compra.pedidos.map((p) => `<li class="vx-sumrow"><span class="md-body-large">${p.id}<br><span class="md-body-medium vx-muted">${esc(p.tienda)}</span></span></li>`).join("")}</ul>`;
      const acts = {
        aprobado: `${btn("Ver mis pedidos", { kind: "filled", block: true, go: "M6.03", kindNav: "swap" })}${btn("Seguir comprando", { kind: "outlined", block: true, go: "M2.01", kindNav: "swap" })}<div class="vx-twin">${btn("Descargar comprobante", { kind: "text", attrs: 'data-toast="Comprobante guardado en tu teléfono"' })}${btn("Compartir", { kind: "text", attrs: 'data-toast="Enlace al comprobante copiado"' })}</div>`,
        rechazado: `${btn("Reintentar el pago", { kind: "filled", block: true, go: "M3.09", kindNav: "mode" })}${btn("Cambiar forma de pago", { kind: "outlined", block: true, go: "M3.09", kindNav: "mode" })}${btn("Ver mis pedidos", { kind: "text", block: true, go: "M6.03", kindNav: "swap" })}`,
        pendiente: `${btn("Ver mis pedidos", { kind: "filled", block: true, go: "M6.03", kindNav: "swap" })}${btn("Ir al inicio", { kind: "text", block: true, go: "M2.01", kindNav: "swap" })}`,
        revision: `${btn("Ver mis pedidos", { kind: "filled", block: true, go: "M6.03", kindNav: "swap" })}${btn("Ir al inicio", { kind: "text", block: true, go: "M2.01", kindNav: "swap" })}`
      }[estado];
      const el = h(`<div class="vx-page"><div class="vx-body vx-result"><div class="vx-resbox">${ico}<h1 class="md-headline-small" tabindex="-1">${title}</h1>
      ${estado === "rechazado" ? `<p class="md-body-large vx-reason">${icon("error", 18)} Tu banco rechazó el pago: «Fondos insuficientes»</p>` : ""}
      ${estado === "pendiente" ? `<div class="md-progress md-progress--indet vx-resprog" role="progressbar" aria-label="Esperando a tu banco" style="--_pct:30%"><span class="md-progress-track"></span><span class="md-progress-active"></span></div><p class="md-body-large">Estamos esperando la confirmación de tu banco. Te avisamos aquí.</p>` : ""}
      ${estado === "revision" ? '<p class="md-body-large">Reportar no es pagar: la compra queda en revisión hasta que se confirme el dinero.</p>' : ""}</div>
      <dl class="vx-dl vx-pad-h">${row2("Importe", `${money(t.total)}<br><span class="md-body-small vx-muted">${bsRef(t.total, compra.pasarela.tasaDia, { decimals: 0 })}</span>`)}${row2("Método", metTxt)}${metodo !== "transferencia" ? row2("Transacción", compra.pasarela.intento) : ""}</dl>
      <div class="vx-pad-h">${pedidos2}</div><div class="vx-pad vx-stack">${acts}</div></div></div>`);
      return el;
    },
    mount(el, ctx) {
      const estado = ctx.params.estado || "aprobado";
      if (estado === "rechazado") {
        state.flow.rechazado = true;
        play(el.querySelector("#resIco"), "vx-shake");
      }
      if (estado === "aprobado") {
        state.flow.rechazado = false;
        if (!state.orders.some((o) => o.id === compra.pedidos[0].id)) {
          state.orders.unshift(...compra.pedidos.map((p) => ({ ...p, estado: "Pagado", fecha: "16/10" })));
          state.cart = [];
          set({ orders: state.orders });
        }
      }
      el.querySelector("h1").focus({ preventScroll: true });
    }
  });
  register("M3.12", {
    render() {
      const sel = state.flow.transfPedido || compra.pedidos[0].id;
      const copy = (txt) => iconBtn("copy", `Copiar ${txt}`, `data-copy="${esc(txt)}"`);
      const dato = (k, v) => `<div class="vx-kv vx-kv--copy"><dt class="md-body-medium vx-muted">${k}</dt><dd class="md-body-large vx-tab-num">${v}</dd>${copy(v)}</div>`;
      const el = h(page(
        topbar("Reportar una transferencia"),
        `
      <section class="vx-pad-h"><h2 class="md-title-medium">A quién se paga</h2>
        <div class="vx-options" role="radiogroup" aria-label="Pedido a pagar">${compra.pedidos.map((p) => radioOpt({ name: "ped", value: p.id, checked: sel === p.id, title: esc(p.tienda), text: `<span class="vx-tab-num">Pedido ${p.id} · ${money(p.total)}</span>` })).join("")}</div>
        <dl class="vx-dl" id="tDatos"></dl></section>
      <section class="vx-pad-h"><h2 class="md-title-medium">Ya transferí</h2>
        <form class="vx-form" novalidate onsubmit="return false">${field({ id: "tRef", label: "Número de referencia del banco", inputmode: "numeric" })}${field({ id: "tMonto", label: "Monto transferido (USD)", inputmode: "decimal" })}</form>
        <div class="vx-options" role="radiogroup" aria-label="Tipo de transferencia">${radioOpt({ name: "tipo", value: "banco", checked: true, title: "Transferencia bancaria" })}${radioOpt({ name: "tipo", value: "movil", title: "Pago móvil" })}</div>
        <p class="md-title-small">Foto del comprobante</p>
        <div class="vx-stack">${btn(`${icon("upload", 20)}Subir foto`, { kind: "tonal", block: true, id: "tFoto" })}<p class="md-body-medium vx-muted" id="tFotoOk" role="status"></p></div>
        <p class="md-body-medium vx-muted">Reportar no es pagar: la compra queda en revisión hasta que se confirme el dinero.</p></section>`,
        btn("Reportar la transferencia", { kind: "filled", block: true, id: "tGo" })
      ));
      wireControls(el);
      const paint = () => {
        const p = compra.pedidos.find((x) => x.id === el.querySelector("input[name=ped]:checked").value);
        el.querySelector("#tDatos").innerHTML = `${dato("Banco", "Banco de Venezuela")}${dato("Cuenta", "0102 0123 4500 0123 4567")}${dato("Titular", "Frío Total Servicios C.A.")}${dato("Documento", "J-41234567-8")}
        ${dato("Monto", money(p.total))}<p class="md-body-small vx-muted vx-tab-num vx-pad-h0">${bsRef(p.total, compra.pasarela.tasaDia, { decimals: 0 }).replace(" · tasa del " + compra.pasarela.tasaDia, "")}</p>${dato("Referencia", p.id.replace("#", ""))}`;
      };
      el.addEventListener("change", (e) => {
        if (e.target.name === "ped") {
          state.flow.transfPedido = e.target.value;
          paint();
        }
      });
      el.addEventListener("click", async (e) => {
        const c = e.target.closest("[data-copy]");
        if (!c) return;
        try {
          await navigator.clipboard.writeText(c.dataset.copy);
          toast("Copiado");
        } catch {
          toast("Selecciona el dato para copiarlo");
        }
      });
      let foto = false;
      el.querySelector("#tFoto").addEventListener("click", () => {
        foto = true;
        el.querySelector("#tFotoOk").textContent = "comprobante.jpg · listo para enviar";
      });
      el.querySelector("#tGo").addEventListener("click", () => {
        fieldError(el, "tRef", !el.querySelector("#tRef").value.trim() ? "Escribe la referencia" : "");
        fieldError(el, "tMonto", !el.querySelector("#tMonto").value.trim() ? "Escribe el monto" : "");
        if (!el.querySelector("#tRef").value.trim() || !el.querySelector("#tMonto").value.trim()) return;
        if (!foto) {
          toast("Añade la foto del comprobante");
          return;
        }
        go("M3.11", { kind: "mode", params: { estado: "revision", metodo: "transferencia" } });
      });
      paint();
      return el;
    }
  });

  // assets/js/screens/m6a.js
  var KIND = { "Falta pagar": "warning", "Pago reportado": "info", "En camino": "info", Entregado: "success", Pagado: "success", "En mediación": "info", Resuelto: "success", "En revisión": "info" };
  var tag = (estado, extra = "") => statusTag(KIND[estado] || "neutral", estado + extra);
  var thumb2 = (n = 24) => `<span class="vx-thumb-ph vx-thumb-ph--sm" aria-hidden="true">${icon("box", n)}</span>`;
  var sec = (title) => `<h2 class="md-label-large vx-sub vx-sub--list">${title}</h2>`;
  var listaPedidos = () => [...state.orders, ...pedidos.filter((c) => !state.orders.some((o) => o.id === c.id))];
  var buscarPedido = (id, t) => listaPedidos().find((o) => o.id === id && (!t || o.tienda === t)) || listaPedidos().find((o) => o.id === id) || pedidos.find((o) => o.id === "#VX-20211");
  var detalleDe = (o) => detallePedidos[`${o.id}|${o.tienda}`] || { emitido: o.fecha, lineas: [{ n: "Artículos del pedido", q: 1, p: o.total }] };
  var qs = (o) => `id=${encodeURIComponent(o.id)}&t=${encodeURIComponent(o.tienda)}`;
  register("M6.01", {
    render() {
      const u = usuario, canonPagado = state.orders.some((o) => o.id === "#VX-20431") ? 1 : 0;
      const resumen = { sinPagar: u.resumen.sinPagar - canonPagado, enCamino: u.resumen.enCamino + state.orders.length, entregados: u.resumen.entregados };
      const total = resumen.sinPagar + resumen.enCamino + resumen.entregados, max = Math.max(...u.gastoMensual.map(([, v]) => v));
      const tile = (n, l) => `<button type="button" class="vx-tile md-sl vx-press" data-go="M6.03" data-kind="swap"><b class="md-headline-small vx-tab-num">${n}</b><span class="md-body-small">${l}</span></button>`;
      const nuevos = state.avisosCuenta.some((a) => a.nuevo);
      return h(`<div>${topbar("Cuenta", { back: false })}
      <section class="vx-profile vx-pad-h">${avatar(u.iniciales, true)}<div><p class="md-title-medium">${esc(u.nombre)}</p><p class="md-body-medium vx-muted">${esc(u.correo)}</p>${u.verificado ? statusTag("success", "Verificado") : ""}</div></section>
      <div class="vx-pad-h vx-modebox"><p class="md-body-medium">Estás en modo ${MODE_NAME[state.mode]}</p>${btn("Cambiar", { kind: "text", go: "O.MOD" })}</div>
      <div class="vx-tiles vx-pad-h">${tile(resumen.sinPagar, "Sin pagar")}${tile(resumen.enCamino, "En camino")}${tile(resumen.entregados, "Entregados")}</div>
      <section class="vx-pad-h"><h2 class="md-title-medium">Gasto por mes (USD)</h2>
        <div class="vx-chart" role="img" aria-label="Gasto por mes en USD: ${u.gastoMensual.map(([m, v]) => `${m} ${v}`).join(", ")}">${u.gastoMensual.map(([m, v]) => `<div class="vx-bar-col"><span class="md-label-medium vx-tab-num">${v}</span><i style="height:${Math.round(v / max * 100)}%"></i><span class="md-label-medium vx-muted">${m}</span></div>`).join("")}</div>
        <p class="md-body-small vx-muted">Calculado sobre tus últimos ${total} pedidos.</p></section>
      ${sec("Mis compras")}<ul class="vx-list" role="list">${row({ ic: "receipt", title: "Pedidos", go: "M6.03", kind: "swap" })}${row({ ic: "error", title: "Reclamos y devoluciones", go: "M6.09" })}${row({ ic: "shield", title: "Garantías", go: "M6.11" })}${row({ ic: "wrench", title: "Servicios que pedí", go: "M6.12" })}</ul>
      ${sec("Mi cuenta")}<ul class="vx-list" role="list">${row({ ic: "person", title: "Datos personales", go: "M6.02" })}${row({ ic: "map", title: "Direcciones", go: "M6.13" })}${row({ ic: "wallet", title: "Formas de pago", go: "M6.15" })}${row({ ic: "bell", title: "Avisos", go: "M6.17", dot: nuevos })}${row({ ic: "lock", title: "Seguridad y contraseña", go: "M6.18" })}${row({ ic: "eye", title: "Cómo se ve VexBiz", go: "M6.23" })}</ul>
      ${sec("Aprender")}<ul class="vx-list" role="list">${row({ ic: "school", title: "Academia", go: "M5.01" })}</ul>
      ${sec("Ayuda")}<ul class="vx-list" role="list">${row({ ic: "info", title: "Ayuda e información", go: "M6.24" })}</ul>
      <div class="vx-pad">${btn(`${icon("logout", 20)}Cerrar sesión`, { kind: "text", block: true, id: "btnSalir" })}</div></div>`);
    },
    mount(el) {
      el.querySelector("#btnSalir").addEventListener("click", () => {
        set({ sesion: false });
        toast("Cerraste sesión");
        go("M1.02", { kind: "mode" });
      });
    }
  });
  register("M6.02", {
    render() {
      const u = usuario, kv = (k, v) => `<div class="vx-kv"><dt class="md-body-medium vx-muted">${k}</dt><dd class="md-body-large">${v}</dd></div>`;
      return h(`<div>${topbar("Datos personales")}<div class="vx-center vx-pad">${avatar(u.iniciales, true)}</div>
      <dl class="vx-pad-h vx-dl">${kv("Nombre", esc(u.nombre))}${kv("Correo", esc(u.correo))}${kv("País activo", "Venezuela")}${kv("Verificación en dos pasos", state.dosPasos ? statusTag("success", "Activa") : "Sin activar")}</dl>
      <div class="vx-pad-h vx-stack">${btn(state.dosPasos ? "Ver verificación en dos pasos" : "Activar verificación en dos pasos", { kind: "tonal", block: true, go: "M6.19" })}
        <p class="md-body-medium vx-muted">Un archivo con tu cuenta, compras y servicios.</p>
        ${btn(`${icon("upload", 20)}Descargar mis datos`, { kind: "outlined", block: true, attrs: 'data-toast="Preparando tu archivo. Te avisamos cuando esté listo."' })}</div></div>`);
    }
  });
  register("M6.03", {
    render() {
      const lista = listaPedidos();
      return h(`<div>${topbar("Pedidos", { back: false })}
      <ul class="vx-list" role="list">${row({ ic: "error", title: "Reclamos y devoluciones", go: "M6.09" })}${row({ ic: "shield", title: "Garantías", go: "M6.11" })}
        <li><button type="button" class="md-li md-sl vx-press vx-row" data-go="M6.12"><span class="md-li-icon">${icon("wrench")}</span><span class="md-li-text"><span class="md-li-title md-body-large">Servicios que pedí</span></span><span class="md-li-end"><span class="md-badge md-badge--large" aria-label="2 servicios">${serviciosPedidos.length}</span>${icon("chevron")}</span></button></li></ul>
      <ul class="vx-orders vx-pad-h" role="list" data-stagger>${lista.map((o, i) => `<li class="vx-order" style="--i:${i}">
        <button type="button" class="vx-order-main md-sl vx-press" data-go="M6.04?${qs(o)}" aria-label="Pedido ${o.id}, ${esc(o.tienda)}, ${o.estado}">${thumb2()}
          <span class="vx-order-text"><span class="md-title-small">${esc(o.tienda)}</span><span class="md-body-medium vx-muted vx-tab-num">${o.id} · ${o.fecha}</span>${tag(o.estado, o.estado === "Pago reportado" ? " · en comprobación" : "")}</span>
          <b class="md-title-medium vx-tab-num">${money(o.total)}</b></button>
        ${o.estado === "Falta pagar" ? `<div class="vx-order-act">${btn(`Pagar ${money(o.total)}`, { kind: "filled", go: "M3.09" })}</div>` : ""}</li>`).join("")}</ul></div>`);
    },
    mount(el, ctx) {
      if (ctx.first) $$("[data-stagger]", el).forEach(stagger);
    }
  });
  register("M6.04", {
    render(ctx) {
      const o = buscarPedido(ctx.params.id, ctx.params.t), d = detalleDe(o);
      const suma = round2(d.lineas.reduce((s, l) => s + l.q * l.p, 0)), envio = round2(Math.max(0, o.total - suma));
      const subtotal = round2(o.total / (1 + IMPUESTO_INCLUIDO / 100)), imp = round2(o.total - subtotal);
      const r = (k, v, strong) => `<div class="vx-sumrow${strong ? " is-strong" : ""}"><dt class="md-body-large">${k}</dt><dd class="md-body-large vx-tab-num">${v}</dd></div>`;
      return h(page(
        topbar(esc(o.tienda), { trailing: iconBtn("receipt", "Ayuda con el pedido", `data-go="M6.05?${qs(o)}"`) }),
        `
      <section class="vx-pad-h vx-stack"><p class="md-body-medium vx-muted">Emitido el ${d.emitido}</p><p>${tag(o.estado)}</p>
        ${d.envio ? `<p class="md-body-medium">${esc(d.envio.empresa)} · despachado el ${d.envio.despachado}<br><span class="vx-tab-num">Guía ${d.envio.guia}</span></p>` : ""}
        ${d.factura ? `<p class="md-body-medium vx-tab-num">Factura N.º ${d.factura.n} · ${d.factura.fecha}</p>` : ""}</section>
      <section class="vx-pad-h"><h2 class="md-title-medium">Artículos (${d.lineas.length})</h2><ul class="vx-list" role="list">${d.lineas.map((l) => `<li class="vx-detline"><button type="button" class="vx-detline-main md-sl vx-press" data-go="M2.08?id=aa12">${thumb2(20)}
        <span class="vx-order-text"><span class="md-body-large">${esc(l.n)}</span><span class="md-body-medium vx-muted vx-tab-num">${l.q} × ${money(l.p)}</span>${l.garantia ? `<span class="md-body-small vx-muted">Garantía hasta ${l.garantia}</span>` : ""}${l.devolucion ? `<span>${statusTag("info", l.devolucion + " · En revisión")}</span>` : ""}</span><b class="md-body-large vx-tab-num">${money(l.q * l.p)}</b></button></li>`).join("")}</ul></section>
      <dl class="vx-pad-h vx-dl">${r("Subtotal", money(subtotal))}${r("Envío", envio ? money(envio) : "Gratis")}${r("Impuestos (incluidos)", money(imp))}${r("Total", money(o.total), true)}</dl>
      <div class="vx-pad-h vx-stack">${d.factura ? btn("Ver factura", { kind: "text", attrs: 'data-toast="Abre la factura en tu visor de PDF"' }) : ""}${d.envio ? btn("Seguir el envío", { kind: "text", attrs: 'data-toast="Abre el seguimiento de la guía"' }) : ""}
        ${btn("Ayuda con el pedido", { kind: "text", go: `M6.05?${qs(o)}` })}${o.estado === "Entregado" ? btn("Pedir devolución", { kind: "outlined", block: true, go: `M6.07?${qs(o)}` }) : ""}</div>`,
        `<span class="md-body-medium vx-muted">Pedido ${o.id}</span>`
      ));
    }
  });
  register("M6.05", {
    render(ctx) {
      const o = buscarPedido(ctx.params.id, ctx.params.t), dev = state.devoluciones.some((x) => x.pedido === o.id);
      return h(`<div>${topbar("Ayuda con el pedido")}
      <section class="vx-card vx-pad-h"><div class="vx-order-main vx-static">${thumb2()}<span class="vx-order-text"><span class="md-title-small">${esc(o.tienda)}</span><span class="md-body-medium vx-muted vx-tab-num">${o.id}</span>${tag(o.estado)}</span></div></section>
      <div class="vx-pad-h vx-stack vx-helpstack">
        <p class="md-body-large">Cuenta cómo te fue con ${esc(o.tienda)}.</p>${btn("Calificar a la tienda", { kind: "tonal", block: true, go: `M6.06?${qs(o)}` })}
        ${dev ? `<button type="button" class="md-li md-sl vx-press vx-row vx-note" data-go="M6.09">${statusTag("info", "En revisión")}<span class="md-body-large">Ya hay una devolución en curso</span></button>` : ""}
        ${btn("Pedir devolución", { kind: "tonal", block: true, go: `M6.07?${qs(o)}` })}
        <p class="md-body-large">Si no llegas a un acuerdo con la tienda, VexBiz interviene como mediador.</p>${btn("Abrir reclamo", { kind: "outlined", block: true, go: `M6.08?${qs(o)}` })}</div></div>`);
    }
  });
  var LABEL = (n) => n <= 1 ? "Muy malo" : n <= 2 ? "Malo" : n <= 3 ? "Regular" : n <= 4 ? "Bueno" : "Muy bueno";
  var star = (fill) => `<svg viewBox="0 0 24 24" width="40" height="40" aria-hidden="true"><defs><clipPath id="cp${String(fill).replace(".", "")}"><rect width="${fill * 24}" height="24"/></clipPath></defs>
  <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/>
  <path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1L3.2 9.5l6.1-.9z" fill="currentColor" clip-path="url(#cp${String(fill).replace(".", "")})"/></svg>`;
  register("M6.06", {
    render(ctx) {
      const o = buscarPedido(ctx.params.id, ctx.params.t), prev = state.calificaciones[o.id];
      const el = h(page(
        topbar("Calificar a la tienda"),
        `
      <section class="vx-pad-h"><p class="md-title-medium">${esc(o.tienda)}</p><p class="md-body-medium vx-muted vx-tab-num">Pedido ${o.id}</p></section>
      <p class="md-body-large vx-pad-h">Calificas a la tienda, no al producto</p>
      <div class="vx-rate vx-pad-h"><div class="vx-stars" role="slider" tabindex="0" aria-label="Calificación de la tienda" aria-valuemin="0.5" aria-valuemax="5" aria-valuenow="${prev?.nota ?? 4.5}" aria-valuetext="" id="rate"></div>
        <p class="md-title-large vx-tab-num"><span id="rateN">4,5</span> · <span id="rateT">Muy bueno</span></p></div>
      <div class="vx-pad-h">${area({ id: "comentario", label: "Cuéntanos más (opcional)", value: prev?.texto || "", rows: 4 })}</div>`,
        btn(prev ? "Actualizar calificación" : "Enviar calificación", { kind: "filled", block: true, id: "btnCalif" })
      ));
      let nota = prev?.nota ?? 4.5;
      const paint = () => {
        const box = el.querySelector("#rate");
        box.innerHTML = [1, 2, 3, 4, 5].map((i) => `<span class="vx-star">${star(Math.max(0, Math.min(1, nota - (i - 1))))}</span>`).join("");
        box.setAttribute("aria-valuenow", nota);
        box.setAttribute("aria-valuetext", `${num(nota, 1)} de 5, ${LABEL(nota)}`);
        el.querySelector("#rateN").textContent = num(nota, 1);
        el.querySelector("#rateT").textContent = LABEL(nota);
      };
      const rect = () => el.querySelector("#rate").getBoundingClientRect();
      const fromX = (x) => {
        const r = rect(), p = Math.min(1, Math.max(0, (x - r.left) / r.width));
        return Math.max(0.5, Math.ceil(p * 10) / 2);
      };
      el.querySelector("#rate").addEventListener("click", (e) => {
        nota = fromX(e.clientX);
        paint();
      });
      el.querySelector("#rate").addEventListener("keydown", (e) => {
        const d = { ArrowRight: 0.5, ArrowUp: 0.5, ArrowLeft: -0.5, ArrowDown: -0.5 }[e.key];
        if (!d) return;
        e.preventDefault();
        nota = Math.min(5, Math.max(0.5, nota + d));
        paint();
      });
      el.querySelector("#btnCalif").addEventListener("click", () => {
        state.calificaciones[o.id] = { nota, texto: el.querySelector("#comentario").value.trim() };
        set({ calificaciones: state.calificaciones });
        toast(`Gracias: calificaste a ${o.tienda} con ${num(nota, 1)}`);
        back();
      });
      paint();
      return el;
    }
  });
  register("M6.07", {
    render(ctx) {
      const o = buscarPedido(ctx.params.id, ctx.params.t);
      const items = [{ k: "cap", n: "Capacitor de marcha 35+5 µF", max: 2 }, { k: "ctrl", n: "Control remoto universal A/A", max: 1 }, { k: "aa", n: "Aire split inverter 12.000 BTU", max: 0 }];
      const q = { cap: 1, ctrl: 0, aa: 0 };
      const el = h(page(
        topbar("Pedir devolución"),
        `
      <section class="vx-pad-h"><h2 class="md-title-medium">¿Qué devuelves?</h2><ul class="vx-list" role="list">${items.map((i) => `<li class="vx-detline vx-ret">${thumb2(20)}<span class="vx-order-text"><span class="md-body-large">${i.n}</span><span class="md-body-medium vx-muted">${i.max ? `Compraste ${i.max}` : "Ya devuelto"}</span></span>${i.max ? stepper(i.k, q[i.k], i.max) : ""}</li>`).join("")}</ul>
        <p class="md-title-small vx-tab-num" id="retTot" aria-live="polite"></p></section>
      <div class="vx-pad-h vx-form">${field({ id: "motivo", label: "Motivo" })}${area({ id: "detalle", label: "Describe el problema", help: "No se pueden adjuntar fotos. Describe el problema con detalle.", rows: 4 })}</div>`,
        btn("Pedir devolución", { kind: "filled", block: true, id: "btnDev" })
      ));
      const paint = () => {
        const n = Object.values(q).reduce((s, v) => s + v, 0);
        el.querySelector("#retTot").textContent = plural(n, "unidad", "unidades");
        items.forEach((i) => {
          if (!i.max) return;
          el.querySelector(`[data-qty="${i.k}"]`).textContent = q[i.k];
          el.querySelector(`[data-dec="${i.k}"]`).disabled = q[i.k] <= 0;
          el.querySelector(`[data-inc="${i.k}"]`).disabled = q[i.k] >= i.max;
        });
      };
      el.addEventListener("click", (e) => {
        const inc = e.target.closest("[data-inc]"), dec = e.target.closest("[data-dec]");
        if (inc) {
          q[inc.dataset.inc]++;
          paint();
          play(el.querySelector("#retTot"), "vx-tick");
        }
        if (dec) {
          q[dec.dataset.dec]--;
          paint();
          play(el.querySelector("#retTot"), "vx-tick");
        }
      });
      el.querySelector("#btnDev").addEventListener("click", () => {
        const n = Object.values(q).reduce((s, v) => s + v, 0), mot = el.querySelector("#motivo").value.trim(), det = el.querySelector("#detalle").value.trim();
        fieldError(el, "motivo", !mot ? "Escribe el motivo" : "");
        fieldError(el, "detalle", !det ? "Describe el problema" : "");
        if (!n) {
          toast("Elige al menos una unidad");
          return;
        }
        if (!mot || !det) return;
        const item = items.filter((i) => q[i.k] > 0).map((i) => i.n).join(", ");
        state.devoluciones.unshift({ id: `#D-00${31 + state.devoluciones.length}`, pedido: o.id, item, unidades: n, estado: "En revisión", fecha: date(HOY).slice(0, 5) });
        state.flow.segReclamos = "dev";
        set({ devoluciones: state.devoluciones });
        toast("Pedimos tu devolución");
        go("M6.09", { kind: "push" });
      });
      paint();
      return el;
    }
  });
  register("M6.08", {
    render(ctx) {
      const o = ctx.params.id ? buscarPedido(ctx.params.id, ctx.params.t) : { id: "#VX-20301", tienda: "Herramientas Andina", total: 24.9 };
      const kv = (k, v) => `<div class="vx-kv"><dt class="md-body-medium vx-muted">${k}</dt><dd class="md-body-large vx-tab-num">${v}</dd></div>`;
      const el = h(page(
        topbar("Abrir reclamo"),
        `
      <p class="md-body-large vx-pad-h">VexBiz revisa el caso y decide. La tienda verá lo que escribas.</p>
      <dl class="vx-pad-h vx-dl">${kv("Pedido", o.id)}${kv("Tienda", esc(o.tienda))}${kv("Total", money(o.total))}</dl>
      <div class="vx-pad-h vx-form">${field({ id: "motivo", label: "Motivo" })}${area({ id: "detalle", label: "Describe el problema", help: "No se pueden adjuntar fotos. Describe el problema con detalle.", rows: 4 })}</div>`,
        btn("Abrir reclamo", { kind: "filled", block: true, id: "btnRec" })
      ));
      el.querySelector("#btnRec").addEventListener("click", () => {
        const mot = el.querySelector("#motivo").value.trim(), det = el.querySelector("#detalle").value.trim();
        fieldError(el, "motivo", !mot ? "Escribe el motivo" : "");
        fieldError(el, "detalle", !det ? "Describe el problema" : "");
        if (!mot || !det) return;
        toast("Abrimos tu reclamo");
        go("M6.10?id=%23R-0091", { kind: "push" });
      });
      return el;
    }
  });
  register("M6.09", {
    render() {
      const dev = state.flow.segReclamos === "dev";
      const el = h(`<div>${topbar("Reclamos y devoluciones")}
      <div class="vx-pad-h"><div class="md-seg" role="tablist" aria-label="Ver">${[["rec", "Reclamos"], ["dev", "Devoluciones"]].map(([k, t]) => `<button type="button" role="tab" class="md-seg-item md-sl md-label-large${k === "dev" === dev ? " md-seg-item--on" : ""}" data-seg="${k}" aria-selected="${k === "dev" === dev}">${t}</button>`).join("")}</div></div>
      <ul class="vx-orders vx-pad-h" role="list" id="recList"></ul></div>`);
      const paint = () => {
        const isDev = state.flow.segReclamos === "dev";
        $$("[data-seg]", el).forEach((b) => {
          const on = b.dataset.seg === "dev" === isDev;
          b.classList.toggle("md-seg-item--on", on);
          b.setAttribute("aria-selected", on);
        });
        el.querySelector("#recList").innerHTML = isDev ? state.devoluciones.map((d) => `<li class="vx-order"><div class="vx-order-main vx-static"><span class="vx-order-text"><span class="md-title-small vx-tab-num">${d.id} · Pedido ${d.pedido}</span><span class="md-body-medium vx-muted">${d.fecha} · ${esc(d.item)}</span><span class="md-body-medium">${plural(d.unidades, "unidad", "unidades")}</span>${tag(d.estado)}</span></div></li>`).join("") || `<li>${stateBlock({ icon: "inbox", title: "No tienes devoluciones" })}</li>` : state.reclamos.map((r) => `<li class="vx-order"><button type="button" class="vx-order-main md-sl vx-press" ${r.mensajes ? `data-go="M6.10?id=${encodeURIComponent(r.id)}"` : 'data-toast="Este reclamo ya está resuelto"'}>
            <span class="vx-order-text"><span class="md-title-small vx-tab-num">${r.id} · Pedido ${r.pedido}</span><span class="md-body-medium vx-muted">${r.fecha}</span>${tag(r.estado)}<span class="md-body-medium">${esc(r.resumen)}</span>
            ${r.ultimo ? `<span class="md-body-small vx-muted">Último mensaje: ${esc(r.ultimo)}</span>` : ""}${r.resolucion ? `<span class="md-body-medium"><b>Resolución de VexBiz</b><br>${esc(r.resolucion)}</span>` : ""}</span></button></li>`).join("");
      };
      el.addEventListener("click", (e) => {
        const b = e.target.closest("[data-seg]");
        if (!b) return;
        state.flow.segReclamos = b.dataset.seg;
        paint();
      });
      paint();
      return el;
    }
  });
  register("M6.10", {
    render(ctx) {
      const r = state.reclamos.find((x) => x.id === decodeURIComponent(ctx.params.id || "#R-0091")) || state.reclamos[0];
      const el = h(`<div class="vx-page">${topbar(`Reclamo ${r.id}`, { trailing: btn("Ver pedido", { kind: "text", go: "M6.04?id=%23VX-20211&t=ElectroHogar" }) })}
      <div class="vx-body"><section class="vx-pad-h"><p>${tag(r.estado)}</p><p class="md-body-medium vx-muted">Abierto el ${r.abierto}</p>
        <h2 class="md-title-small vx-sub0">Motivo</h2><p class="md-body-large">${esc(r.motivo)}</p></section>
        <ul class="vx-thread vx-pad-h" role="list" aria-live="polite" id="hilo"></ul></div>
      <form class="vx-composer" id="fMsg"><label class="md-sr-only" for="msg">Escribe un mensaje</label><input class="md-body-large vx-msg" id="msg" autocomplete="off" placeholder="Escribe un mensaje…">
        <button type="submit" class="md-iconbtn md-iconbtn--filled md-sl" aria-label="Enviar mensaje">${icon("chat")}</button></form></div>`);
      const paint = () => {
        el.querySelector("#hilo").innerHTML = r.mensajes.map((m) => `<li class="vx-msgrow${m.de === "Tú" ? " is-me" : ""}"><p class="md-label-medium vx-muted">${m.de} · ${m.hora}</p><p class="md-body-large vx-bubble">${esc(m.t)}</p></li>`).join("");
      };
      el.querySelector("#fMsg").addEventListener("submit", (e) => {
        e.preventDefault();
        const i = el.querySelector("#msg"), t = i.value.trim();
        if (!t) return;
        const now = /* @__PURE__ */ new Date();
        r.mensajes.push({ de: "Tú", hora: `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`, t });
        i.value = "";
        paint();
        const last = el.querySelector("#hilo").lastElementChild;
        play(last, "vx-tick");
        last.scrollIntoView({ block: "nearest" });
      });
      paint();
      return el;
    }
  });
  register("M6.11", {
    render() {
      const dias = (d) => Math.round((d - HOY) / 864e5);
      return h(`<div>${topbar("Garantías")}<ul class="vx-orders vx-pad-h" role="list">${garantias.map((g) => {
        const n = dias(g.hasta), ok = n > 0;
        return `<li class="vx-order"><div class="vx-order-main vx-static"><span class="vx-order-text">${statusTag(ok ? "success" : "error", ok ? `Vigente · quedan ${n} días` : "Vencida")}
        <span class="md-title-small">${esc(g.producto)}</span><span class="md-body-medium">Responde: ${esc(g.responde)}</span><span class="md-body-medium vx-muted vx-tab-num">hasta ${date(g.hasta)}</span><span class="md-body-medium vx-muted vx-tab-num">${g.ref}</span></span></div>
        ${ok ? `<div class="vx-order-act">${btn("Condiciones", { kind: "text", go: "M6.25?doc=garantia" })}</div>` : ""}</li>`;
      }).join("")}</ul></div>`);
    }
  });
  register("M6.12", {
    render() {
      return h(`<div>${topbar("Servicios que pedí")}<ul class="vx-orders vx-pad-h" role="list">${serviciosPedidos.map((s) => `<li class="vx-order"><div class="vx-order-main vx-static"><span class="vx-order-text">
        <span class="md-label-medium vx-tab-num vx-muted">${s.id}</span>${statusTag(s.ok ? "success" : "info", s.estado)}<span class="md-title-small">${esc(s.servicio)}</span><span class="md-body-medium">${esc(s.quien)}${s.rating ? ` · <span class="vx-tab-num">${stars(s.rating)}</span>` : ""}</span>
        ${s.nota ? `<span class="md-body-medium vx-muted">${esc(s.nota)}</span>` : ""}<span class="md-body-medium vx-muted vx-tab-num">${s.cuando} · ${money(s.total)}</span>${s.donde ? `<span class="md-body-medium vx-muted">${esc(s.donde)}</span>` : ""}</span></div>
        <div class="vx-order-act">${s.ok ? btn("Calificar", { kind: "tonal", attrs: 'data-toast="Gracias: tu calificación llega al técnico"' }) : btn("Ver detalle", { kind: "text", attrs: 'data-toast="La empresa te avisa cuando asigne al técnico"' })}${btn("Contactar", { kind: "text", attrs: 'data-toast="Abre WhatsApp de VexBiz: lunes a sábado, 8:00 a 18:00"' })}</div></li>`).join("")}</ul></div>`);
    }
  });

  // assets/js/prefs.js
  var root = document.documentElement;
  var sys = (q) => {
    try {
      return matchMedia(q).matches;
    } catch {
      return false;
    }
  };
  var prefs = { scale: 100, contrast: false, reduce: false };
  function setScale(pct3) {
    prefs.scale = Math.min(150, Math.max(100, Math.round(pct3)));
    root.setAttribute("data-text-scale", String(prefs.scale));
    root.style.setProperty("--vx-ts", String(prefs.scale / 100));
    savePrefs({ scale: prefs.scale });
  }
  function setContrast(on) {
    prefs.contrast = !!on;
    on ? root.setAttribute("data-contrast", "more") : root.removeAttribute("data-contrast");
    savePrefs({ contrast: prefs.contrast });
  }
  function setReduce(on) {
    prefs.reduce = !!on;
    root.toggleAttribute("data-reduce-motion", prefs.reduce);
    savePrefs({ reduce: prefs.reduce });
    const sw = document.getElementById("swReduce");
    if (sw) {
      sw.checked = prefs.reduce;
      sw.nextElementSibling?.classList.toggle("md-switch-track--on", prefs.reduce);
    }
  }
  function initPrefs() {
    const p = loadPrefs();
    setScale(p.scale ?? 100);
    setContrast(p.contrast ?? sys("(prefers-contrast: more)"));
    setReduce(p.reduce ?? false);
    if (p.reduce === void 0) prefs.reduce = sys("(prefers-reduced-motion: reduce)");
    const sw = document.getElementById("swReduce");
    if (sw) {
      sw.checked = prefs.reduce;
      sw.nextElementSibling?.classList.toggle("md-switch-track--on", prefs.reduce);
    }
    return p;
  }

  // assets/js/screens/m6b.js
  var sec2 = (title) => `<h2 class="md-label-large vx-sub vx-sub--list">${title}</h2>`;
  var mask = (doc) => {
    const d = doc.replace(/\D/g, "");
    return d.length >= 5 ? `${d.slice(0, 2)}.***.${d.slice(-3)}` : doc;
  };
  var copiar = async (txt, ok = "Copiado") => {
    try {
      await navigator.clipboard.writeText(txt);
      toast(ok);
    } catch {
      toast("Selecciona el texto para copiarlo");
    }
  };
  register("M6.13", {
    render() {
      const el = h(`<div>${topbar("Direcciones", { trailing: iconBtn("add", "Añadir dirección", 'data-go="M6.14"') })}<ul class="vx-orders vx-pad-h" role="list" id="dirList"></ul></div>`);
      const paint = () => {
        el.querySelector("#dirList").innerHTML = state.dirs.map((d) => `<li class="vx-order"><div class="vx-order-main vx-static"><span class="vx-order-text">
      <span class="md-title-small">${esc(d.nombre)} ${d.predeterminada ? '<span class="vx-tag md-label-small">Predeterminada</span>' : ""}</span><span class="md-body-large">${esc(d.linea)}</span>${d.ref ? `<span class="md-body-medium vx-muted">${esc(d.ref)}</span>` : ""}
      <span class="md-body-medium vx-muted vx-tab-num">${esc(d.ciudad)} · CP ${esc(d.cp)}</span><span class="md-body-medium vx-muted vx-tab-num">${esc(d.tel)}</span>${d.sinMapa ? `<span>${statusTag("warning", "Falta el punto en el mapa")}</span>` : ""}</span>
      ${iconBtn("more2", `Acciones de ${d.nombre}`, `data-adir="${d.id}" data-go="O.ACC"`)}</div></li>`).join("");
      };
      el.addEventListener("click", (e) => {
        const b = e.target.closest("[data-adir]");
        if (b) state.flow.accDir = b.dataset.adir;
      });
      paint();
      el.__un = subscribe(paint);
      return el;
    },
    mount(el) {
      return el.__un;
    }
  });
  register("O.ACC", {
    render() {
      const d = state.dirs.find((x) => x.id === state.flow.accDir) || state.dirs[0];
      const el = h(`<div><div class="vx-sheet-head"><h2 id="sheet-title" class="md-title-large md-sheet-title" tabindex="-1">${esc(d.nombre)}</h2>${iconBtn("close", "Cerrar", "data-close")}</div>
      <ul class="vx-list" role="list">${row({ ic: "edit", title: "Editar", attrs: 'data-a="edit"' })}${d.predeterminada ? "" : row({ ic: "check", title: "Usar como predeterminada", attrs: 'data-a="def"' })}${row({ ic: "trash", title: "Quitar", attrs: 'data-a="del"', danger: true })}</ul></div>`);
      el.addEventListener("click", async (e) => {
        const a = e.target.closest("[data-a]");
        if (!a) return;
        const k = a.dataset.a;
        if (k === "edit") {
          await closeOverlay({ silent: true });
          go("M6.14", { kind: "push", params: { id: d.id } });
          return;
        }
        if (k === "def") {
          state.dirs.forEach((x) => {
            x.predeterminada = x.id === d.id;
          });
          state.flow.direccion = d.id;
          set({ dirs: state.dirs });
          toast(`${d.nombre} es tu dirección predeterminada`);
        }
        if (k === "del") {
          const i = state.dirs.findIndex((x) => x.id === d.id), [gone] = state.dirs.splice(i, 1);
          if (gone.predeterminada && state.dirs[0]) state.dirs[0].predeterminada = true;
          if (state.flow.direccion === gone.id) state.flow.direccion = state.dirs[0]?.id;
          set({ dirs: state.dirs });
          toast(`Quitaste ${gone.nombre}`, { action: "Deshacer", onAction: () => {
            state.dirs.splice(i, 0, gone);
            set({ dirs: state.dirs });
          } });
        }
        closeOverlay();
      });
      return el;
    }
  });
  register("M6.14", {
    render(ctx) {
      const d = state.dirs.find((x) => x.id === ctx.params.id), edit = !!d;
      const [est, ciu] = d ? [d.ciudad.split(", ")[1] || "Carabobo", d.ciudad.split(", ")[0]] : ["Carabobo", "Valencia"];
      const el = h(`<div class="vx-page"><header class="vx-sheet-head vx-flowhead"><h2 id="sheet-title" class="md-title-large md-sheet-title" tabindex="-1">${edit ? "Editar dirección" : "Nueva dirección"}</h2>${iconBtn("close", "Cerrar", "data-close")}</header>
      <div class="vx-body vx-pad-h"><form class="vx-form" novalidate onsubmit="return false">
        ${field({ id: "dNombre", label: "Nombre de la dirección", value: d?.nombre || "" })}${field({ id: "dLinea", label: "Calle y número", value: d?.linea || "", autocomplete: "street-address" })}${field({ id: "dRef", label: "Referencia (opcional)", value: d?.ref || "" })}
        ${select({ id: "dEstado", label: "Estado", options: Object.keys(estadosVE), value: est })}${select({ id: "dCiudad", label: "Ciudad", options: estadosVE[est] || [], value: ciu })}
        ${field({ id: "dCp", label: "Código postal", value: d?.cp || "", inputmode: "numeric" })}${field({ id: "dTel", label: "Teléfono", value: d?.tel || "", inputmode: "tel", autocomplete: "tel" })}</form>
        <div class="vx-map" aria-hidden="true">${icon("map", 40)}</div><div class="vx-row-end">${btn("Marcar en el mapa", { kind: "text", id: "dMapa" })}</div>
        ${switchHtml("dDef", "Usar como predeterminada", !!d?.predeterminada)}</div>
      <footer class="vx-actionbar">${btn("Guardar dirección", { kind: "filled", block: true, id: "dSave" })}</footer></div>`);
      wireControls(el);
      el.querySelector("#dEstado").addEventListener("change", (e) => {
        const c = el.querySelector("#dCiudad");
        c.innerHTML = estadosVE[e.target.value].map((x) => `<option>${x}</option>`).join("");
      });
      let mapa = d ? !d.sinMapa : false;
      el.querySelector("#dMapa").addEventListener("click", () => {
        mapa = true;
        toast("Punto marcado en el mapa");
      });
      el.querySelector("#dSave").addEventListener("click", async () => {
        const v = (id) => el.querySelector("#" + id).value.trim();
        const bad = { dNombre: !v("dNombre") && "Escribe un nombre", dLinea: !v("dLinea") && "Escribe la calle y el número", dTel: !/^[\d\s+-]{7,}$/.test(v("dTel")) && "Escribe un teléfono válido" };
        Object.entries(bad).forEach(([k, m]) => fieldError(el, k, m || ""));
        if (Object.values(bad).some(Boolean)) return;
        const def = el.querySelector("#dDef").checked, rec = { nombre: v("dNombre"), linea: v("dLinea"), ref: v("dRef"), ciudad: `${v("dCiudad")}, ${v("dEstado")}`, cp: v("dCp") || "—", tel: v("dTel"), sinMapa: !mapa };
        if (def) state.dirs.forEach((x) => {
          x.predeterminada = false;
        });
        if (edit) Object.assign(d, rec, { predeterminada: def || d.predeterminada });
        else state.dirs.push({ id: "d" + Date.now(), predeterminada: def || !state.dirs.length, ...rec });
        if (def) state.flow.direccion = (edit ? d : state.dirs[state.dirs.length - 1]).id;
        set({ dirs: state.dirs });
        toast("Dirección guardada");
        await closeOverlay();
      });
      return el;
    }
  });
  register("M6.15", {
    render() {
      const el = h(`<div>${topbar("Formas de pago", { trailing: iconBtn("add", "Añadir forma de pago", 'data-go="M6.16"') })}
      <p class="md-body-large vx-pad-h">Guarda tu cuenta para pagar más rápido. La clave del banco se pide siempre al pagar y no se guarda.</p>
      <ul class="vx-orders vx-pad-h" role="list" id="pagoList"></ul><div class="vx-pad-h">${btn("Añadir forma de pago", { kind: "filled", block: true, go: "M6.16" })}</div></div>`);
      const paint = () => {
        el.querySelector("#pagoList").innerHTML = state.pagos.map((p) => `<li class="vx-order"><div class="vx-order-main vx-static"><span class="vx-order-text">
      <span class="md-title-small">${esc(p.titulo)} ${p.preferida ? '<span class="vx-tag md-label-small">Preferida</span>' : ""}</span><span class="md-body-medium vx-muted">${esc(p.sub)}</span>
      <span class="md-body-medium vx-tab-num">${[p.doc, p.cuenta, p.tel, p.correo].filter(Boolean).map(esc).join(" · ")}</span>${p.ultimo ? `<span class="md-body-small vx-muted">Último uso: ${p.ultimo}</span>` : ""}
      ${p.falla ? `<span>${statusTag("warning", "Falló varias veces seguidas. Revisa los datos.")}</span>` : ""}</span>${iconBtn("trash", `Quitar ${p.titulo}`, `data-rmpago="${p.id}"`)}</div></li>`).join("") || `<li>${stateBlock({ icon: "wallet", title: "Todavía no guardas formas de pago" })}</li>`;
      };
      el.addEventListener("click", (e) => {
        const b = e.target.closest("[data-rmpago]");
        if (!b) return;
        const i = state.pagos.findIndex((x) => x.id === b.dataset.rmpago), [gone] = state.pagos.splice(i, 1);
        set({ pagos: state.pagos });
        toast(`Quitaste ${gone.titulo}`, { action: "Deshacer", onAction: () => {
          state.pagos.splice(i, 0, gone);
          set({ pagos: state.pagos });
        } });
      });
      paint();
      el.__un = subscribe(paint);
      return el;
    },
    mount(el) {
      return el.__un;
    }
  });
  register("M6.16", {
    render() {
      const el = h(`<div class="vx-page"><header class="vx-sheet-head vx-flowhead"><h2 id="sheet-title" class="md-title-large md-sheet-title" tabindex="-1">Nueva forma de pago</h2>${iconBtn("close", "Cerrar", "data-close")}</header>
      <div class="vx-body vx-pad-h"><form class="vx-form" novalidate onsubmit="return false">
        ${select({ id: "pTipoDoc", label: "Tipo de documento", options: ["V", "E", "J", "P"], value: "V" })}${field({ id: "pDoc", label: "Número de documento", inputmode: "numeric" })}
        ${select({ id: "pBanco", label: "Banco", options: ["Elige tu banco", ...bancosVE], value: "Elige tu banco" })}${field({ id: "pTel", label: "Teléfono", inputmode: "tel", autocomplete: "tel" })}
        ${field({ id: "pCuenta", label: "Número de cuenta (opcional)", inputmode: "numeric" })}${field({ id: "pAlias", label: "Alias (opcional)" })}</form>
        <p class="vx-ready md-body-large" id="pEstado" role="status"></p></div>
      <footer class="vx-actionbar">${btn("Guardar forma de pago", { kind: "filled", block: true, id: "pSave" })}</footer></div>`);
      const v = (id) => el.querySelector("#" + id).value.trim();
      const faltan = () => [!v("pDoc") && "documento", v("pBanco") === "Elige tu banco" && "banco", !/^[\d\s+-]{7,}$/.test(v("pTel")) && "teléfono"].filter(Boolean);
      const paint = () => {
        const f = faltan();
        el.querySelector("#pEstado").innerHTML = f.length ? `${icon("info", 18)} Falta: ${f.join(", ")}.` : `${icon("check", 18)} Todo listo: documento, banco y teléfono completos.`;
        el.querySelector("#pEstado").classList.toggle("is-ok", !f.length);
      };
      el.addEventListener("input", paint);
      el.addEventListener("change", paint);
      el.querySelector("#pSave").addEventListener("click", async () => {
        fieldError(el, "pDoc", !v("pDoc") ? "Escribe tu documento" : "");
        fieldError(el, "pTel", !/^[\d\s+-]{7,}$/.test(v("pTel")) ? "Escribe un teléfono válido" : "");
        if (faltan().length) {
          if (v("pBanco") === "Elige tu banco") toast("Elige tu banco");
          return;
        }
        const tel = v("pTel").replace(/\D/g, "");
        state.pagos.push({ id: "p" + Date.now(), titulo: `${v("pBanco")} ····${tel.slice(-4)}`, sub: v("pAlias") || "Teléfono y banco", doc: `${v("pTipoDoc")}-${mask(v("pDoc"))}`, tel: `${tel.slice(0, 4)} ···${tel.slice(-4)}` });
        set({ pagos: state.pagos });
        toast("Guardaste tu forma de pago");
        await closeOverlay();
      });
      paint();
      return el;
    }
  });
  register("M6.17", {
    render() {
      const el = h(`<div>${topbar("Avisos", { trailing: btn("Marcar como leídos", { kind: "text", id: "avLeer" }) })}
      <div class="vx-pad-h"><div class="md-seg" role="tablist" aria-label="Ver">${[["todos", "Todos"], ["nuevos", "Sin leer"]].map(([k, t], i) => `<button type="button" role="tab" class="md-seg-item md-sl md-label-large${i === 0 ? " md-seg-item--on" : ""}" data-seg="${k}" aria-selected="${i === 0}">${t}</button>`).join("")}</div></div>
      <ul class="vx-list" role="list" id="avList"></ul></div>`);
      let seg2 = "todos";
      const paint = () => {
        const l = state.avisosCuenta.filter((a) => seg2 === "todos" || a.nuevo);
        el.querySelector("#avList").innerHTML = l.map((a) => `<li><button type="button" class="md-li md-li--3 md-sl vx-press vx-row" data-go="${a.to}"><span class="md-li-icon">${icon(a.ic)}</span>
        <span class="md-li-text"><span class="md-li-title md-body-large">${esc(a.t)} ${a.nuevo ? '<span class="vx-tag md-label-small">Nuevo</span>' : ""}</span><span class="md-li-sup md-body-medium">${esc(a.d)}</span></span><span class="md-li-end md-body-small">${a.cuando}</span></button></li>`).join("") || `<li>${stateBlock({ icon: "bell", title: "No tienes avisos sin leer" })}</li>`;
        el.querySelector("#avLeer").disabled = !state.avisosCuenta.some((a) => a.nuevo);
      };
      el.addEventListener("click", (e) => {
        const b = e.target.closest("[data-seg]");
        if (b) {
          seg2 = b.dataset.seg;
          $$("[data-seg]", el).forEach((x) => {
            const on = x === b;
            x.classList.toggle("md-seg-item--on", on);
            x.setAttribute("aria-selected", on);
          });
          paint();
        }
      });
      el.querySelector("#avLeer").addEventListener("click", () => {
        state.avisosCuenta.forEach((a) => {
          a.nuevo = false;
        });
        set({ avisosCuenta: state.avisosCuenta });
        paint();
        toast("Marcaste todo como leído");
      });
      paint();
      return el;
    }
  });
  register("M6.18", {
    render() {
      const el = h(`<div>${topbar("Seguridad y contraseña")}
      <section class="vx-pad-h"><h2 class="md-title-medium">Cambiar contraseña</h2><form class="vx-form" novalidate onsubmit="return false">
        ${field({ id: "sActual", label: "Contraseña actual", type: "password", autocomplete: "current-password" })}${field({ id: "sNueva", label: "Contraseña nueva", type: "password", autocomplete: "new-password" })}${reqsHtml()}
        ${field({ id: "sRepite", label: "Repite la contraseña nueva", type: "password", autocomplete: "new-password" })}</form>
        <div class="vx-pad-v">${btn("Guardar contraseña", { kind: "filled", block: true, id: "sSave", attrs: "disabled" })}</div></section>
      <ul class="vx-list" role="list" id="segList"></ul></div>`);
      const reqs = el.querySelector(".vx-reqs");
      paintReqs(reqs, "");
      const check = () => {
        const n = el.querySelector("#sNueva").value, ok = paintReqs(reqs, n);
        el.querySelector("#sSave").disabled = !(el.querySelector("#sActual").value && ok && n === el.querySelector("#sRepite").value);
      };
      el.addEventListener("input", check);
      el.querySelector("#sSave").addEventListener("click", () => {
        toast("Contraseña actualizada. Cerramos tus otras sesiones.");
        state.sesiones = state.sesiones.filter((s) => s.actual);
        set({ sesiones: state.sesiones });
        ["sActual", "sNueva", "sRepite"].forEach((i) => {
          el.querySelector("#" + i).value = "";
        });
        check();
      });
      const paint = () => {
        el.querySelector("#segList").innerHTML = row({ ic: "shield", title: "Verificación en dos pasos", end: `${state.dosPasos ? "Activa" : "Sin activar"}${""}`, go: "M6.19" }) + row({ ic: "desktop", title: "Sesiones abiertas", end: `<b class="vx-tab-num">${state.sesiones.length}</b>`, go: "M6.20" }) + row({ ic: "trash", title: "Eliminar cuenta", go: "M6.21", danger: true });
      };
      paint();
      el.__un = subscribe(paint);
      return el;
    },
    mount(el) {
      return el.__un;
    }
  });
  var CLAVE = "JBSW Y3DP EHPK 3PXP";
  var RESPALDO = ["7F3K-92LD", "Q8MZ-4RTW", "2HNP-6VXA", "L9CE-1JQU", "W5BT-8KSN", "M3YG-0PDF"];
  register("M6.19", {
    render() {
      const el = h(`<div>${topbar("Verificación en dos pasos")}<div class="vx-pad-h vx-stack">
      <p id="dpEstado">${statusTag(state.dosPasos ? "success" : "neutral", state.dosPasos ? "Activa" : "Sin activar")}</p>
      <p class="md-body-large">Al entrar te pediremos además un código de tu app de autenticación.</p>
      <section id="dpPasos" ${state.dosPasos ? "hidden" : ""} class="vx-stack"><h2 class="md-title-medium">Paso 1 · Vincula tu app de autenticación</h2>
        <p class="vx-key md-title-medium vx-tab-num" aria-label="Clave de configuración">${CLAVE}</p>
        <div class="vx-twin">${btn(`${icon("copy", 18)}Copiar clave`, { kind: "outlined", id: "dpCopy" })}${btn("Mostrar código QR", { kind: "outlined", id: "dpQr", attrs: 'aria-expanded="false"' })}</div>
        <div class="vx-qr" id="dpQrBox" hidden aria-label="Código QR de ejemplo">${icon("map", 56)}</div>
        <h2 class="md-title-medium">Paso 2 · Escribe el código</h2>${field({ id: "dpCodigo", label: "Código de 6 dígitos", inputmode: "numeric", autocomplete: "one-time-code", attrs: 'maxlength="6"' })}
        ${btn("Activar", { kind: "filled", block: true, id: "dpActivar" })}</section>
      <section id="dpResp" hidden class="vx-stack"><h2 class="md-title-medium">Códigos de respaldo</h2><p class="md-body-large">Guárdalos ahora. No se volverán a mostrar.</p>
        <ul class="vx-codes vx-tab-num" role="list">${RESPALDO.map((c) => `<li class="md-body-large">${c}</li>`).join("")}</ul>
        <div class="vx-twin">${btn(`${icon("copy", 18)}Copiar códigos`, { kind: "tonal", id: "dpCopyR" })}${btn("Ya los guardé", { kind: "filled", id: "dpListo" })}</div></section>
      <section id="dpOff" ${state.dosPasos ? "" : "hidden"} class="vx-stack">${btn("Desactivar verificación en dos pasos", { kind: "text", block: true, id: "dpDes" })}</section></div></div>`);
      const q = (s) => el.querySelector(s);
      q("#dpCopy").addEventListener("click", () => copiar(CLAVE.replace(/\s/g, ""), "Copiaste la clave"));
      q("#dpQr").addEventListener("click", (e) => {
        const box = q("#dpQrBox"), on = box.hidden;
        box.hidden = !on;
        e.currentTarget.textContent = on ? "Ocultar código QR" : "Mostrar código QR";
        e.currentTarget.setAttribute("aria-expanded", on);
      });
      q("#dpActivar").addEventListener("click", () => {
        const c = q("#dpCodigo").value.trim();
        fieldError(el, "dpCodigo", !/^\d{6}$/.test(c) ? "Escribe los 6 dígitos" : c === "000000" ? "El código no es correcto" : "");
        if (!/^\d{6}$/.test(c) || c === "000000") return;
        state.dosPasos = true;
        set({ dosPasos: true });
        q("#dpPasos").hidden = true;
        q("#dpResp").hidden = false;
        q("#dpEstado").innerHTML = statusTag("success", "Activa");
        toast("Activaste la verificación en dos pasos");
      });
      q("#dpCopyR").addEventListener("click", () => copiar(RESPALDO.join("\n"), "Copiaste los códigos"));
      q("#dpListo").addEventListener("click", () => {
        q("#dpResp").hidden = true;
        q("#dpOff").hidden = false;
        toast("Guardaste tus códigos de respaldo");
      });
      q("#dpDes").addEventListener("click", () => {
        state.dosPasos = false;
        set({ dosPasos: false });
        q("#dpOff").hidden = true;
        q("#dpPasos").hidden = false;
        q("#dpEstado").innerHTML = statusTag("neutral", "Sin activar");
        toast("Desactivaste la verificación en dos pasos");
      });
      return el;
    }
  });
  register("M6.20", {
    render() {
      const el = h(`<div>${topbar("Sesiones abiertas")}<p class="md-body-large vx-pad-h">Aquí ves dónde está abierta tu cuenta.</p><ul class="vx-orders vx-pad-h" role="list" id="sesList"></ul>
      <div class="vx-pad-h">${btn("Cerrar las otras sesiones", { kind: "filled", block: true, id: "sesCerrar" })}</div></div>`);
      const paint = () => {
        el.querySelector("#sesList").innerHTML = state.sesiones.map((s) => `<li class="vx-order"><div class="vx-order-main vx-static"><span class="md-li-icon vx-sesico">${icon(s.ic, 28)}</span><span class="vx-order-text">
      <span class="md-title-small">${esc(s.equipo)} · ${esc(s.so)} ${s.actual ? '<span class="vx-tag md-label-small">Esta sesión</span>' : ""}</span><span class="md-body-medium vx-muted vx-tab-num">Venezuela · ${s.ip} · desde ${s.desde}</span></span></div></li>`).join("");
        el.querySelector("#sesCerrar").disabled = state.sesiones.length < 2;
      };
      el.querySelector("#sesCerrar").addEventListener("click", () => {
        const n = state.sesiones.filter((s) => !s.actual).length;
        state.sesiones = state.sesiones.filter((s) => s.actual);
        set({ sesiones: state.sesiones });
        paint();
        toast(`Cerraste ${plural(n, "sesión", "sesiones")}`);
      });
      paint();
      return el;
    }
  });
  register("M6.21", {
    render() {
      const bloqueos = [["2 compras en curso en Venezuela", "Ver mis compras", "M6.03"], ["1 trabajo técnico sin cerrar", "Ver trabajos", "M8.01"]];
      const el = h(`<div>${topbar("Eliminar cuenta")}<div class="vx-pad-h vx-stack"><p class="md-body-large">Se borra tu cuenta en todos los países donde la usas. No se puede deshacer.</p>
      <h2 class="md-title-medium">Antes tienes que terminar:</h2><ul class="vx-list" role="list">${bloqueos.map(([t, l, to]) => `<li class="vx-block">${statusTag("warning", t)}${btn(l, { kind: "text", go: to })}</li>`).join("")}</ul>
      <h2 class="md-title-medium">Antes de irte puedes</h2>${btn(`${icon("upload", 20)}Descargar mis datos`, { kind: "text", block: true, attrs: 'data-toast="Preparando tu archivo. Te avisamos cuando esté listo."' })}
      <h2 class="md-title-medium">Cuando no haya bloqueos:</h2>${field({ id: "delConf", label: "Escribe ELIMINAR para confirmar", autocomplete: "off" })}
      <p class="md-body-medium vx-muted" id="delWhy">Todavía tienes ${bloqueos.length} pendientes, por eso este botón sigue apagado.</p>
      ${btn("Eliminar mi cuenta", { kind: "filled", block: true, id: "delGo", attrs: 'disabled aria-describedby="delWhy"' })}</div></div>`);
      return el;
    }
  });
  register("M6.22", {
    render() {
      const chk = (id, t) => `<label class="md-check vx-chk"><span class="md-check-hit md-sl"><input class="md-check-input" type="checkbox" id="${id}"><span class="md-check-box"></span></span><span class="md-body-large">${t}</span></label>`;
      const el = h(page(
        topbar("Registrar mi empresa"),
        `
      <p class="md-body-large vx-pad-h">Lo justo para que tu empresa exista. La verificación tarda hasta 72 horas hábiles.</p><p class="vx-pad-h"><span class="vx-tag md-label-medium">${icon("globe", 14)}Venezuela</span> <span class="vx-tag md-label-medium">Sin cuota de entrada</span></p>
      <section class="vx-pad-h"><h2 class="md-title-medium">¿Cómo operas?</h2><div class="vx-options" role="radiogroup" aria-label="¿Cómo operas?">${radioOpt({ name: "opera", value: "natural", checked: true, title: "Persona natural con actividad económica" })}${radioOpt({ name: "opera", value: "juridica", title: "Persona jurídica" })}</div></section>
      <section class="vx-pad-h"><h2 class="md-title-medium">¿Qué hace tu empresa?</h2><div role="group" aria-label="¿Qué hace tu empresa?">${chk("aVender", "Vender productos")}${chk("aImportar", "Importar")}${chk("aServicios", "Prestar servicios técnicos")}</div>
        <p class="md-body-medium vx-muted" id="aErr" role="alert"></p>
        <p class="md-body-medium vx-muted">Aseguradoras y auxilio vial entran por acuerdo con VexBiz; escríbenos desde ${btn("Contacto", { kind: "text", go: "M6.26" })}.</p></section>
      <div class="vx-pad-h vx-form">${field({ id: "eNombre", label: "Nombre de la empresa" })}${field({ id: "eDoc", label: "RIF o documento" })}${field({ id: "eTel", label: "Teléfono de contacto", inputmode: "tel" })}</div>`,
        btn("Registrar mi empresa", { kind: "filled", block: true, id: "eGo" })
      ));
      wireControls(el);
      el.addEventListener("change", (e) => {
        const t = e.target.closest(".md-check-input");
        if (t) {
          const b = t.nextElementSibling;
          b.classList.toggle("md-check-box--on", t.checked);
          b.innerHTML = t.checked ? icon("check", 16) : "";
          el.querySelector("#aErr").textContent = "";
        }
      });
      el.querySelector("#eGo").addEventListener("click", () => {
        const v = (id) => el.querySelector("#" + id).value.trim(), act = $$(".md-check-input", el).some((c) => c.checked);
        fieldError(el, "eNombre", !v("eNombre") ? "Escribe el nombre de la empresa" : "");
        fieldError(el, "eDoc", !v("eDoc") ? "Escribe el RIF o documento" : "");
        fieldError(el, "eTel", !/^[\d\s+-]{7,}$/.test(v("eTel")) ? "Escribe un teléfono válido" : "");
        el.querySelector("#aErr").textContent = act ? "" : "Elige al menos una actividad";
        if (!act || !v("eNombre") || !v("eDoc") || !/^[\d\s+-]{7,}$/.test(v("eTel"))) return;
        state.empresaRegistrada = true;
        set({ empresaRegistrada: true, mode: "empresa" });
        toast("Registramos tu empresa. La verificación tarda hasta 72 horas hábiles.");
        go("M9.01", { kind: "mode" });
      });
      return el;
    }
  });
  register("M6.23", {
    render() {
      const el = h(`<div>${topbar("Cómo se ve VexBiz")}<div class="vx-pad-h vx-stack">
      <section><h2 class="md-title-medium">Tamaño del texto</h2><p class="md-headline-small vx-tab-num" id="tsVal">${prefs.scale} %</p>
        <input type="range" class="vx-range" id="tsRange" min="100" max="150" step="10" value="${prefs.scale}" aria-label="Tamaño del texto" aria-valuetext="${prefs.scale} %"><div class="vx-rangelbl md-body-small vx-muted"><span>100 %</span><span>150 %</span></div>
        <p class="md-body-large">Así se leerán los textos de la app.</p></section>
      ${switchHtml("prContraste", "Más contraste", prefs.contrast)}${switchHtml("prMov", "Menos movimiento", prefs.reduce)}
      <p class="md-body-medium vx-muted">Estas preferencias se guardan en este teléfono. Si no cambias nada, la app sigue los ajustes de accesibilidad del sistema.</p>
      ${btn("Volver a los valores del sistema", { kind: "outlined", block: true, id: "prReset" })}</div></div>`);
      wireControls(el);
      const rng = el.querySelector("#tsRange");
      rng.addEventListener("input", () => {
        setScale(Number(rng.value));
        el.querySelector("#tsVal").textContent = `${prefs.scale} %`;
        rng.setAttribute("aria-valuetext", `${prefs.scale} %`);
      });
      el.querySelector("#prContraste").addEventListener("change", (e) => setContrast(e.target.checked));
      el.querySelector("#prMov").addEventListener("change", (e) => setReduce(e.target.checked));
      el.querySelector("#prReset").addEventListener("click", () => {
        setScale(100);
        setContrast(matchMedia("(prefers-contrast: more)").matches);
        setReduce(matchMedia("(prefers-reduced-motion: reduce)").matches);
        rng.value = 100;
        el.querySelector("#tsVal").textContent = "100 %";
        [["prContraste", prefs.contrast], ["prMov", prefs.reduce]].forEach(([id, on]) => {
          const i = el.querySelector("#" + id);
          i.checked = on;
          i.nextElementSibling.classList.toggle("md-switch-track--on", on);
        });
        toast("Volviste a los valores del sistema");
      });
      return el;
    }
  });
  var SITIO = 'data-toast="Abre el sitio de VexBiz"';
  register("M6.24", {
    render() {
      const doc = (ic, t, d) => row({ ic, title: t, go: `M6.25?doc=${d}` });
      const ext = (ic, t) => row({ ic, title: t, attrs: SITIO, end: icon("globe", 20) });
      return h(`<div>${topbar("Ayuda e información")}<p class="md-body-medium vx-muted vx-pad-h">Lunes a sábado, 8:00 a 19:00</p>
      ${sec2("Ayuda")}<ul class="vx-list" role="list">${doc("info", "Cómo comprar", "comprar")}${doc("truck", "Envíos", "envios")}${doc("receipt", "Devoluciones", "devoluciones")}</ul>
      ${sec2("Legal y políticas")}<ul class="vx-list" role="list">${doc("doc", "Términos y condiciones", "terminos")}${doc("lock", "Política de privacidad", "privacidad")}${doc("doc", "Aviso legal", "aviso")}</ul>
      ${sec2("VexBiz")}<ul class="vx-list" role="list">${doc("store", "Quiénes somos", "quienes")}${doc("tag", "Vender en VexBiz", "vender")}${doc("wrench", "Trabaja como técnico", "tecnico")}${doc("gift", "Franquicias", "franquicias")}</ul>
      ${sec2("Más")}<ul class="vx-list" role="list">${row({ ic: "chat", title: "Contacto", go: "M6.26" })}${row({ ic: "eye", title: "Preferencias de accesibilidad", go: "M6.23" })}${row({ ic: "inbox", title: "Boletín", go: "M1.10" })}</ul>
      <section class="vx-pad-h vx-stack vx-pad-v"><h2 class="md-title-medium">¿Tienes dudas con un pedido?</h2>${btn("Ir a mis pedidos", { kind: "filled", block: true, go: "M6.03", kindNav: "swap" })}${whatsappBtn("Escríbenos por WhatsApp", 'data-toast="Abre el WhatsApp de VexBiz: lunes a sábado, 8:00 a 19:00"')}</section></div>`);
    }
  });
  var DOCS = { terminos: "Términos y condiciones", privacidad: "Política de privacidad", aviso: "Aviso legal", comprar: "Cómo comprar", envios: "Envíos", devoluciones: "Devoluciones", quienes: "Quiénes somos", vender: "Vender en VexBiz", franquicias: "Franquicias", garantia: "Condiciones de la garantía", tecnico: "Trabaja como técnico" };
  register("M6.25", {
    render(ctx) {
      const k = ctx.params.doc in DOCS ? ctx.params.doc : "tecnico", t = DOCS[k];
      const body = k === "tecnico" ? `<section><h2 class="md-title-medium">Qué ganas</h2><p class="md-body-large">Solicitudes de clientes de tu zona, con el precio que tú pones y pagos protegidos por VexBiz.</p></section>
         <section><h2 class="md-title-medium">Qué te pedimos</h2><p class="md-body-large">Tu cédula, tus oficios, la zona donde trabajas y los documentos que pida tu país.</p></section>
         <section><h2 class="md-title-medium">Cuánto tarda</h2><p class="md-body-large">Revisamos tu perfil en hasta 72 horas hábiles. Mientras tanto ya puedes comprar repuestos.</p></section>
         <h2 class="md-title-medium">¿No encontraste lo que buscabas?</h2>
         <div class="vx-stack">${btn("Crear mi cuenta", { kind: "filled", block: true, go: "M1.05" })}${btn("Escribirnos", { kind: "tonal", block: true, go: "M6.26" })}${btn("Contacto", { kind: "text", block: true, go: "M6.26" })}</div>` : `${banner("info", "Esta es una vista resumida. El texto completo está en el sitio de VexBiz.")}<div class="vx-stack">${btn("Abrir el sitio de VexBiz", { kind: "filled", block: true, attrs: SITIO })}${btn("Contacto", { kind: "text", block: true, go: "M6.26" })}</div>`;
      return h(`<div>${topbar(t)}<div class="vx-pad-h vx-stack"><p class="md-body-medium vx-muted">Versión 1.0 · actualizado el 15/08/2026</p>${body}</div></div>`);
    }
  });
  register("M6.26", {
    render() {
      const red = (ic, t, d) => row({ ic, title: t, sup: d, attrs: SITIO, end: icon("globe", 20) });
      return h(`<div>${topbar("Contacto")}<div class="vx-pad-h vx-stack"><p class="md-body-medium vx-muted">Lunes a sábado, 8:00 a 19:00</p>${whatsappBtn("Escríbenos por WhatsApp", 'data-toast="Abre el WhatsApp de VexBiz: lunes a sábado, 8:00 a 19:00"')}</div>
      ${sec2("Redes sociales")}<ul class="vx-list" role="list">${red("globe", "Instagram", "@vexbiz.ve")}${red("globe", "Facebook", "VexBiz Venezuela")}${red("globe", "YouTube", "VexBiz")}</ul>
      <section class="vx-pad-h vx-stack vx-pad-v"><h2 class="md-title-medium">¿Es por un pedido?</h2><p class="md-body-large">Desde el pedido puedes calificar, devolver o abrir un reclamo.</p>
        ${btn("Ir a mis pedidos", { kind: "filled", block: true, go: "M6.03", kindNav: "swap" })}${btn("Ver ayuda e información", { kind: "text", block: true, go: "M6.24" })}</section></div>`);
    }
  });

  // assets/js/main.js
  var root2 = document.documentElement;
  var prefs2 = loadPrefs();
  var setTheme = (t) => {
    root2.setAttribute("data-theme", t);
    savePrefs({ theme: t });
    paintSegs();
  };
  function seg(host, items, current2, onPick) {
    host.innerHTML = items.map(([v, l]) => `<button type="button" class="md-seg-item md-sl md-label-large${v === current2 ? " md-seg-item--on" : ""}" data-v="${v}" aria-pressed="${v === current2}">${l}</button>`).join("");
    host.onclick = (e) => {
      const b = e.target.closest("[data-v]");
      if (b) onPick(b.dataset.v);
    };
  }
  function paintSegs() {
    seg($("#segModo"), Object.entries(MODE_NAME).map(([k, v]) => [k, v === "Empresa de servicio" ? "Empresa" : v]), state.mode, (m) => {
      set({ mode: m });
      goHome(m, "mode");
    });
    seg($("#segPago"), [["aprobado", "Aprobado"], ["rechazado", "Rechazado"], ["pendiente", "Pendiente"]], state.flow.demoPago, (v) => {
      state.flow.demoPago = v;
      set({ flow: state.flow });
    });
    seg($("#segTema"), [["light", "Claro"], ["dark", "Oscuro"]], root2.getAttribute("data-theme"), setTheme);
  }
  function paintIndex() {
    const cur = currentCode();
    const built = (id) => defs.has(id);
    let done2 = 0;
    const html = MODULES.map((m) => {
      const rows = INDEX.filter((r) => r.mod === m.id);
      const n = rows.filter((r) => built(r.id)).length;
      done2 += n;
      return `<details${rows.some((r) => r.id === cur) || m.id === "M0" ? " open" : ""}><summary><span>${m.id === "OV" ? "Superposiciones" : m.id + " · " + m.name}</span><span class="panel-meta">${n}/${rows.length}</span></summary>
      <ul class="idx">${rows.map((r) => `<li><a href="#/${r.id}" data-idx="${r.id}"${r.id === cur ? ' aria-current="page"' : ""}>
        <span class="${built(r.id) ? "ok" : ""}">${esc(r.label)} · ${esc(r.title)}</span><span class="tag">${built(r.id) ? "hecha" : "pendiente"}</span></a></li>`).join("")}</ul></details>`;
    }).join("");
    $("#index").innerHTML = html;
    $("#idxCount").textContent = `· ${INDEX.length} pantallas, ${done2} hechas`;
  }
  function fit() {
    const wide = innerWidth > 520;
    const s = wide ? Math.min(1, (innerHeight - 32) / 892) : 1;
    $("#fit").style.setProperty("--fit", s.toFixed(3));
  }
  if (prefs2.theme) root2.setAttribute("data-theme", prefs2.theme);
  initPrefs();
  $("#swReduce").addEventListener("change", (e) => setReduce(e.target.checked));
  $("#btnReset").addEventListener("click", () => {
    reset();
    go("M1.01", { kind: "none" });
  });
  $("#index").addEventListener("click", (e) => {
    const a = e.target.closest("[data-idx]");
    if (!a) return;
    e.preventDefault();
    go(a.dataset.idx, { kind: "swap" });
  });
  subscribe(() => paintSegs());
  window.addEventListener("hashchange", () => setTimeout(paintIndex, 400));
  document.addEventListener("click", (e) => {
    if (e.target.closest("#phone,#index")) setTimeout(paintIndex, 450);
  });
  addEventListener("resize", fit);
  paintSegs();
  paintIndex();
  fit();
  wireAdd();
  start();
})();
