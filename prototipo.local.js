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
  var money = (usd2) => `$ ${nf2.format(usd2)}`;
  var num = (n, decimals = 2) => (decimals === 0 ? nf0 : decimals === 1 ? nf1 : nf2).format(n);
  var bs = (usd2, { decimals = 2, tasa = TASA } = {}) => `Bs ${(decimals === 0 ? nf0 : nf2).format(usd2 * tasa)}`;
  var bsRef = (usd2, tasaDia = "15/10", opts) => `≈ ${bs(usd2, opts)} · tasa del ${tasaDia}`;
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

  // assets/js/data2.js
  var HORARIO = "Atendemos de lunes a sábado, 8:00 a 18:00.";
  var oficios = [
    { id: "aa", nombre: "Aire acondicionado", n: 14 },
    { id: "rc", nombre: "Refrigeración comercial", n: 6 },
    { id: "lav", nombre: "Lavadoras y secadoras", n: 9 },
    { id: "nev", nombre: "Neveras", n: 11 },
    { id: "ele", nombre: "Electricidad residencial", n: 22 },
    { id: "coc", nombre: "Cocinas y hornos" },
    { id: "plo", nombre: "Plomería" }
  ];
  var prestadores = [
    {
      id: "cp",
      sigla: "CP",
      nombre: "ClimaPro Servicios",
      tipo: "empresa",
      rol: "Empresa de servicio técnico",
      texto: "Instalación y mantenimiento con equipo propio y garantía.",
      donde: "Valencia, Carabobo",
      tags: ["Instalación", "Mantenimiento", "Carga de gas", "+2"],
      rating: 4.9,
      ok: true,
      servicios: ["Instalación de aire split", "Mantenimiento preventivo", "Carga de gas R410A", "Reparación de tarjetas", "Limpieza de ductos"],
      oficios: ["Climatización", "Refrigeración comercial"],
      provincia: "Carabobo",
      ciudad: "Valencia"
    },
    {
      id: "cm",
      sigla: "CM",
      nombre: "Carlos Mendoza",
      tipo: "tecnico",
      rol: "Técnico independiente",
      texto: "Técnico en refrigeración con 12 años en split e inverter.",
      donde: "25 km alrededor de Valencia",
      anios: 12,
      tags: ["Reparación", "Inverter"],
      rating: 4.8,
      ok: true,
      ahora: true,
      desde: 25,
      ciudad: "Valencia",
      oficios: ["Aire acondicionado", "Refrigeración comercial", "Neveras"],
      nivel: 4,
      fundador: true,
      resueltas: 18,
      sobre: "Trabajo con equipos split, inverter y de ventana desde 2014. Instalaciones limpias, con vacío y prueba."
    },
    {
      id: "jr",
      sigla: "JR",
      nombre: "José Rodríguez",
      tipo: "tecnico",
      rol: "Técnico independiente",
      texto: "Reparo tarjetas electrónicas y fugas.",
      donde: "15 km alrededor de Maracay",
      anios: 6,
      tags: ["Tarjetas"],
      rating: null,
      ok: true,
      ahora: false,
      desde: 20,
      ciudad: "Maracay",
      oficios: ["Aire acondicionado"],
      nivel: 1,
      fundador: false,
      resueltas: 0,
      // INVENTADO: nivel, resueltas
      sobre: "Reparo tarjetas electrónicas y fugas."
    }
  ];
  var aseguradoras = [
    { id: "ms", sigla: "MS", nombre: "Mercantil Seguros", ciudad: "Valencia", provincia: "Carabobo", rating: 4.6, polizas: 4, lista: [
      { t: "Vehículo", sub: "Cobertura amplia", p: 340, d: "Pérdida total y parcial, robo, responsabilidad civil y asistencia en carretera 24 h." },
      { t: "Salud individual", p: 410, d: "Hospitalización, cirugía y emergencias hasta $ 15.000." }
    ] },
    { id: "lp", sigla: "LP", nombre: "Seguros La Previsora", ciudad: "Caracas", provincia: "Distrito Capital", rating: 4.4, polizas: 2, lista: [
      // INVENTADO: sigla, provincia, rating, descripciones
      { t: "Vehículo", sub: "Responsabilidad civil", p: 85, d: "Cubre los daños que causes a terceros con tu vehículo." },
      { t: "Hogar básico", p: 120, d: "Incendio y robo de tu vivienda y de lo que hay dentro." }
    ] }
  ];
  var otrosSeguros = ["Local comercial", "Mercancía en tránsito", "Accidentes personales"];
  var auxilioTipos = ["Remolque", "Arranque de batería", "Cambio de neumático", "Combustible", "Cerrajería"];
  var auxilioEmpresas = [
    { id: "gr", empresa: "Grúas El Rápido", ciudad: "Caracas", servicio: "Remolque liviano", base: 30, km: 1.2, hasta: 80, tipo: "Remolque" },
    { id: "avc1", empresa: "Auxilio Vial Centro", ciudad: "Valencia", servicio: "Remolque liviano", base: 25, km: 1, hasta: 120, tipo: "Remolque", ver: "avc" },
    { id: "avc2", empresa: "Auxilio Vial Centro", ciudad: "Valencia", servicio: "Paso de corriente", base: 12, km: 0.6, hasta: 40, tipo: "Arranque de batería", ver: "avc" }
  ];
  var auxilioEmpresa = {
    id: "avc",
    sigla: "AV",
    nombre: "Auxilio Vial Centro",
    rating: 4.7,
    ciudad: "Valencia",
    provincia: "Carabobo",
    radio: 120,
    ofrece: [{ servicio: "Remolque liviano", base: 25, km: 1, hasta: 120, flota: 4 }, { servicio: "Paso de corriente", base: 12, km: 0.6, hasta: 40, flota: 2 }]
  };
  var cuentales = ["Dónde estás", "Qué le pasa al vehículo", "Marca y modelo"];
  var areas = [["Climatización", 7], ["Refrigeración", 4], ["Electricidad", 5]];
  var cursosAcademia = [
    { id: "split", area: "Climatización", nivel: "Básico", titulo: "Instalación de aires split paso a paso", texto: "Desde el sitio hasta el vacío y la prueba final.", clases: 12, min: 200, rating: 4.8, precio: 0 },
    {
      id: "inv",
      area: "Climatización",
      nivel: "Intermedio",
      titulo: "Diagnóstico de equipos inverter",
      texto: "Lee códigos de error y mide sensores.",
      clases: 9,
      min: 165,
      rating: 4.9,
      precio: 25,
      imparte: "Ramón Márquez",
      inscritos: 312,
      sobre: "Curso práctico grabado en taller con equipos reales de 9.000 a 24.000 BTU.",
      gratis: 2,
      resumen: "Lee códigos de error, mide sensores y encuentra la falla real antes de cambiar piezas.",
      temario: [
        { n: "Cómo piensa un inverter", l: [["Del on/off al inverter", 12], ["Partes de la placa", 18], ["Lectura de códigos de error", 15], ["Sensores de temperatura", 16]] },
        { n: "Medir sin adivinar", l: [["Probar el IPM", 22], ["Ventilador y válvula", 14], ["Comunicación interior-exterior", 20]] },
        // INVENTADO salvo «Probar el IPM» (22 min)
        { n: "Casos reales", l: [["Caso 1: no enfría", 28], ["Caso 2: apaga a los 30 segundos", 20]] }
      ]
    },
    { id: "gas", area: "Refrigeración", nivel: "Intermedio", titulo: "Carga de gas refrigerante sin riesgos", texto: "Presiones, temperaturas y seguridad al cargar.", clases: 8, min: 140, rating: 4.7, precio: 18 },
    // INVENTADO: texto, min, rating, precio
    { id: "tab", area: "Electricidad", nivel: "Básico", titulo: "Tableros residenciales", texto: "Breakers, protecciones y cuadro de cargas.", clases: 10, min: 180, rating: 4.6, precio: 0 }
    // INVENTADO
  ];
  var avanceIni = { inv: { hechas: 4, sigue: "Probar el IPM" }, gas: { hechas: 1, sigue: "Presiones y temperaturas" }, split: { hechas: 12, completado: true } };
  var materiales = ["Tabla de resistencias del IPM.pdf", "Esquema de la placa exterior.pdf"];
  var eventos = {
    vivo: { titulo: "Errores comunes al instalar inverter", por: "Ramón Márquez" },
    proximos: [
      { id: "solar", titulo: "Charla: energía solar para el hogar", cuando: "Jue 23/10", hora: "18:30", dur: "1 h", por: "SolarVen", donde: "En línea", cupo: 80, inscritos: 40 },
      { id: "tableros", titulo: "Taller: tableros residenciales", cuando: "Sáb 01/11", hora: "10:00", dur: "2 h", por: "Voltio Center", donde: "Caracas", cupo: 50, inscritos: 46 }
      // 46 más tú = «Quedan 3 de 50 plazas»,
    ],
    pasados: [{ titulo: "Refrigerantes inflamables", fecha: "02/10" }, { titulo: "Mantenimiento de cavas", fecha: "18/09" }]
  };
  var forosAcademia = [
    { id: "aa", nombre: "Foro de aire acondicionado", area: "Climatización", n: 214 },
    { id: "rc", nombre: "Refrigeración comercial", area: "Refrigeración", n: 96 },
    { id: "lb", nombre: "Línea blanca", area: "Electrodomésticos", n: 158 },
    { id: "er", nombre: "Electricidad residencial", area: "Electricidad", n: 301 }
  ];
  var preguntasIni = [
    {
      id: "q1",
      foro: "aa",
      t: "Split inverter LG da error CH05 al arrancar",
      estado: "resuelta",
      autor: "Carlos Mendoza",
      insignia: "Fundador",
      cuando: "hace 4 días",
      fotos: 3,
      cuerpo: "Enciende pero a los 30 segundos muestra CH05. Ya revisé el cable de comunicación y tiene continuidad.",
      respuestas: [
        { id: "r1", autor: "Ramón Márquez", insignia: "Verificado", resolvio: true, t: "CH05 en LG es error de comunicación. Mide entre N y señal en la exterior: debe oscilar entre 0 y 24 V DC. Si queda fijo, revisa el optoacoplador.", utiles: 6 },
        // INVENTADO: utiles
        { id: "r2", autor: "Ana L. Pérez", insignia: "Certificada", t: "Revisa también que el neutro llegue firme a la exterior.", utiles: 2 }
      ]
    },
    { id: "q2", foro: "aa", t: "Compresor rotativo hace ruido metálico al apagar", estado: "respuestas", nResp: 4, autor: "Ana L. Pérez", cuando: "hace 1 semana", fotos: 0, cuerpo: "Al apagar el equipo se escucha un golpe metálico en el compresor.", respuestas: [] },
    { id: "q3", foro: "aa", t: "¿Cómo medir el termistor de descarga sin tabla?", estado: "sin", autor: "José Rodríguez", cuando: "hace 2 h", fotos: 1, cuerpo: "No tengo la tabla de resistencias del fabricante. ¿Hay una forma de comprobarlo?", respuestas: [] }
  ];
  var niveles = [["Aprendiz", 0], ["Ayudante", 100], ["Técnico", 400], ["Técnico Avanzado", 1e3], ["Especialista", 1700]];
  var historialPuntos = [
    { t: "Lección completada", fecha: "16/10", p: 10 },
    { t: "Tu respuesta resolvió una pregunta", fecha: "12/10", p: 50 },
    { t: "Respuesta retirada por la moderación", fecha: "01/10", p: -20 }
  ];
  var PUNTOS_INI = 1240;

  // assets/js/data4.js
  var COMISION = 12;
  var MIN_TRANSFERENCIA = 50;
  var pedidosTiendaIni = [
    {
      id: "#VX-20412",
      cliente: "María González",
      tel: "+58 412 555 1234",
      dir: "Urb. El Viñedo, Calle 4, Casa 12",
      ciudad: "Caracas",
      estado: "Distrito Capital",
      fecha: "16/10",
      hora: "10:42",
      envio: 15,
      retiro: false,
      status: "pagado",
      lineas: [["Capacitor de marcha 35+5 µF", "FT-CAP-355", 2, 9.5], ["Control remoto universal A/A", "FT-CTR-UNI", 1, 14]]
    },
    {
      id: "#VX-20409",
      cliente: "José Rodríguez",
      tel: "+58 414 555 8801",
      dir: "Retiro en la tienda",
      ciudad: "Caracas",
      estado: "Distrito Capital",
      fecha: "16/10",
      hora: "09:15",
      envio: 0,
      retiro: true,
      status: "pagado",
      // INVENTADO: teléfono y hora
      lineas: [["Regleta con protector de voltaje 6 tomas", "FT-REG-06", 1, 19.6]]
    },
    {
      id: "#VX-20405",
      cliente: "Carmen Díaz",
      tel: "+58 424 555 3302",
      dir: "Calle Montes de Oca 18",
      ciudad: "Valencia",
      estado: "Carabobo",
      fecha: "15/10",
      hora: "16:20",
      envio: 18,
      retiro: false,
      status: "pagado",
      // INVENTADO: teléfono, hora, líneas
      lineas: [["Capacitor de marcha 35+5 µF", "FT-CAP-355", 2, 9.5], ["Control remoto universal A/A", "FT-CTR-UNI", 1, 14], ["Kit de soldadura", "FT-SOL-02", 1, 61.5]]
    },
    {
      id: "#VX-20398",
      cliente: "Luis Pérez",
      tel: "+58 416 555 7745",
      dir: "Av. 5 de Julio 120",
      ciudad: "Maracay",
      estado: "Aragua",
      fecha: "15/10",
      hora: "11:05",
      envio: 8,
      retiro: false,
      status: "pagado",
      // INVENTADO
      lineas: [["Control remoto universal A/A", "FT-CTR-UNI", 2, 14]]
    },
    {
      id: "#VX-20391",
      cliente: "Ana Torres",
      tel: "+58 412 555 2290",
      dir: "Calle Sucre 33",
      ciudad: "Caracas",
      estado: "Distrito Capital",
      fecha: "14/10",
      hora: "17:48",
      envio: 5,
      retiro: false,
      status: "pagado",
      // INVENTADO
      lineas: [["Capacitor de marcha 35+5 µF", "FT-CAP-355", 1, 9.5], ["Control remoto universal A/A", "FT-CTR-UNI", 1, 14]]
    },
    {
      id: "#VX-20377",
      cliente: "Pedro Silva",
      tel: "+58 414 555 6120",
      dir: "Calle Páez 45",
      ciudad: "San Diego",
      estado: "Carabobo",
      fecha: "12/10",
      hora: "12:30",
      envio: 8,
      retiro: false,
      status: "despachado",
      // INVENTADO
      lineas: [["Motor ventilador evaporador 18W", "FT-MOT-18W", 1, 32]]
    }
  ];
  var pedidosMasIni = [
    // INVENTADO
    { id: "#VX-20360", cliente: "Rosa Mejías", tel: "+58 412 555 9911", dir: "Av. Bolívar 77", ciudad: "Valencia", estado: "Carabobo", fecha: "10/10", hora: "15:10", envio: 8, retiro: false, status: "despachado", lineas: [["Capacitor de marcha 35+5 µF", "FT-CAP-355", 3, 9.5]] },
    { id: "#VX-20344", cliente: "Miguel Ortega", tel: "+58 414 555 1020", dir: "Calle 8, Los Ruices", ciudad: "Caracas", estado: "Distrito Capital", fecha: "08/10", hora: "10:00", envio: 5, retiro: false, status: "despachado", lineas: [["Control remoto universal A/A", "FT-CTR-UNI", 3, 14]] }
  ];
  var pendientesIni = [
    { id: "p1", producto: "Tarjeta electrónica condensadora split 12K", codigo: "FT-TAR-12K", qty: 2, precio: 64, comprador: "José Rodríguez", motivo: "otra tienda no pudo", stock: 1, venceEn: (4 * 60 + 32) * 1e3 },
    { id: "p2", producto: "Capacitor de marcha 35+5 µF", codigo: "FT-CAP-355", qty: 1, precio: 9.5, comprador: "Carmen Díaz", motivo: "el comprador te eligió", stock: 2, venceEn: (6 * 60 + 10) * 1e3 },
    // INVENTADO
    { id: "p3", producto: "Control remoto universal A/A", codigo: "FT-CTR-UNI", qty: 3, precio: 14, comprador: "Luis Pérez", motivo: "el comprador te eligió", stock: 24, venceEn: (8 * 60 + 45) * 1e3 }
    // INVENTADO
  ];
  var productosTiendaIni = [
    { id: "comp", nombre: "Compresor rotativo 12.000 BTU R410A", marca: "GMCC", codigo: "FT-CMP-12K", precio: 189, publicado: true, inicial: 8, mov: [], condicion: "Nuevo", tiendas: 7 },
    {
      id: "cap",
      nombre: "Capacitor de marcha 35+5 µF",
      marca: "Genérico",
      codigo: "FT-CAP-355",
      precio: 9.5,
      publicado: true,
      inicial: 1,
      condicion: "Nuevo",
      tiendas: 7,
      mov: [[-1, "Unidad dañada", "05/10/2026"], [4, "Compra a proveedor", "10/10/2026"], [-2, "Pedido #VX-20412", "16/10/2026"]]
    },
    { id: "ctr", nombre: "Control remoto universal A/A", marca: "Chunghop", codigo: "FT-CTR-UNI", precio: 14, publicado: true, inicial: 24, mov: [], condicion: "Nuevo", tiendas: 7 },
    { id: "mot", nombre: "Motor ventilador evaporador 18W", marca: "Welling", codigo: "FT-MOT-18W", precio: 32, publicado: false, inicial: 0, mov: [], condicion: "Nuevo", tiendas: 1 }
  ];
  var catalogoLibre = [
    // INVENTADO
    { id: "scr", nombre: "Compresor scroll 24.000 BTU", marca: "GMCC", codigo: "FT-CMP-24S", tiendas: 3 },
    { id: "tar", nombre: "Tarjeta electrónica condensadora split 12K", marca: "Midea", codigo: "FT-TAR-12K", tiendas: 1 },
    { id: "ter", nombre: "Termostato digital para nevera", marca: "Danfoss", codigo: "FT-TER-01", tiendas: 5 }
  ];
  var carritosIni = [
    { id: "c1", prod: "cap", nombre: "Capacitor de marcha 35+5 µF", qty: 3, sesion: true, hace: "hace 20 min", vistas: 4 },
    { id: "c2", prod: "comp", nombre: "Compresor rotativo 12.000 BTU R410A", qty: 1, sesion: false, hace: "hace 1 h", vistas: 2 },
    { id: "c3", prod: "ctr", nombre: "Control remoto universal A/A", qty: 2, sesion: true, hace: "hace 3 h", vistas: 1 }
  ];
  var apartadasIni = [
    // INVENTADO: lo que está apartado (2 unidades)
    { id: "a1", nombre: "Capacitor de marcha 35+5 µF", qty: 1, cliente: "Carmen Díaz", hasta: "hoy 18:00" },
    { id: "a2", nombre: "Control remoto universal A/A", qty: 1, cliente: "Luis Pérez", hasta: "mañana 10:00" }
  ];
  var reclamosTiendaIni = [
    { id: "#VX-20211", fecha: "16/10", estado: "Solicitada", reembolso: 19.6, motivo: "La regleta no enciende al conectarla.", producto: "Regleta con protector de voltaje 6 tomas", qty: 1 },
    { id: "#VX-20188", fecha: "05/10", estado: "Aprobada", reembolso: 64, motivo: "Me enviaron la tarjeta de un modelo distinto.", producto: "Tarjeta electrónica condensadora split 12K", qty: 1 }
  ];
  var resenas = { rating: 4.8, total: 37, dist: [[5, 31], [4, 3], [3, 1], [2, 2], [1, 0]], recientes: [
    { quien: "María G.", fecha: "14/10/2026", pedido: "#VX-20398", t: "Llegó al día siguiente, bien embalado. Me ayudaron a elegir el kit correcto." },
    { quien: "José R.", fecha: "09/10/2026", pedido: "#VX-20377", t: "Buen precio, pero tardaron un día más de lo que decía el envío." },
    { quien: "Carmen D.", fecha: "02/10/2026", pedido: "#VX-20301", t: "El control remoto no funcionaba con mi modelo." }
  ] };
  var cuponesIni = [
    { id: "k1", codigo: "VERANO10", estado: "activo", texto: "10% de descuento en compras desde $ 50", usos: 18, limite: 100, porPersona: 1 },
    { id: "k2", codigo: "BIENVENIDA5", estado: "pausado", texto: "$ 5 de descuento en tu primera compra", usos: 42, limite: 0 },
    { id: "k3", codigo: "BLACKFRIDAY", estado: "caducado", texto: "15% de descuento", usos: 200, limite: 200, agotado: true }
  ];
  var reglasEnvioIni = [
    { id: "e1", nombre: "Envío Caracas", monto: 5, comprador: 50, tienda: 50, activa: true, texto: "El comprador paga el 50% y tu tienda el 50%." },
    { id: "e2", nombre: "Envío nacional", monto: 12, comprador: 100, tienda: 0, activa: true, texto: "El comprador paga el 100% del envío." },
    { id: "e3", nombre: "Promo envío gratis", monto: 0, comprador: 0, tienda: 100, activa: false, texto: "Tu tienda paga el 100%; para el cliente es gratis." }
  ];
  var docsTiendaIni = [
    { id: "rif", nombre: "RIF de la empresa", estado: "verificado", obligatorio: true, valido: "02/10/2027" },
    { id: "rm", nombre: "Registro Mercantil", estado: "rechazado", obligatorio: true, motivo: "La imagen está cortada y no se lee el sello del registro.", formatos: "Formatos: JPG, PNG o PDF" },
    { id: "sol", nombre: "Solvencia SENIAT", estado: "pendiente", obligatorio: true, ayuda: "Constancia de solvencia del último ejercicio." }
  ];
  var fichasIni = [
    {
      id: "f1",
      nombre: "Compresor rotativo 12.000 BTU R410A",
      marca: "GMCC",
      ref: "PA108X1C",
      tiendas: 7,
      compat: 14,
      visible: true,
      desc: "Compresor rotativo para equipos split de 12.000 BTU con refrigerante R410A.",
      // INVENTADO
      lista: [{ marca: "LG", modelo: "S4-Q12JA3AA", tipo: "Split pared" }, { marca: "Samsung", modelo: "AR12TVHZDWK", tipo: "" }, { marca: "Daikin", modelo: "toda la marca", tipo: "" }]
    },
    { id: "f2", nombre: "Tarjeta electrónica condensadora split 12K", marca: "Midea", ref: "17122000A", tiendas: 1, compat: 6, visible: true, desc: "Tarjeta de control para la unidad condensadora de equipos split de 12.000 BTU.", lista: [{ marca: "Midea", modelo: "MSAGBU-12CRDN8", tipo: "Split pared" }] },
    // INVENTADO
    { id: "f3", nombre: "Motor ventilador evaporador 18W", marca: "Welling", ref: "YDK18-6G", tiendas: 0, compat: 0, visible: false, desc: "Motor de ventilador para evaporadora de 18 W.", lista: [] }
    // INVENTADO
  ];
  var ventas = { bruto: 18420.9, neto: 16210.4, pedidos: 312, meses: [["Octubre", 34, 1840], ["Septiembre", 41, 2360], ["Agosto", 36, 1910], ["Julio", 28, 1420], ["Junio", 22, 1150], ["Mayo", 19, 980]] };
  var liquidaciones = [
    { id: "l1", periodo: "01/10 — 15/10/2026", brutas: 3546, comision: 425.52, retenciones: 38.28, ajustes: [["Saldo arrastrado del período anterior", "Corte del 30/09 bajo el mínimo", 38.2], ["Reembolso pedido #VX-20188", "Devolución aprobada", -64]], estado: "transferida", cuando: "Transferido el 16/10 (Banco de Venezuela ••4567)" },
    { id: "l2", periodo: "16/09 — 30/09/2026", neto: 2870.15, estado: "transferida", cuando: "Transferido el 01/10 (Banco de Venezuela ••4567)" },
    { id: "l3", periodo: "01/09 — 15/09/2026", neto: 38.2, estado: "acumulada", cuando: "No llega al mínimo de transferencia" }
  ];
  var abonos = [
    { id: "#VX-20412", fecha: "16/10", estado: "abonado", nota: "Bs 9,00 de comisión", ref: "Ref. 778812", monto: "Bs 4.512,30" },
    { id: "#VX-20409", fecha: "16/10", estado: "espera", nota: "Esperando al banco", ref: "—" },
    { id: "#VX-20390", fecha: "14/10", estado: "error", nota: "No se pudo abonar", ref: "VexBiz lo está revisando" }
  ];
  var cuentasBanco = [
    { id: "b1", banco: "Banco de Venezuela", principal: true, cuenta: "0102 •••• •••• 4567", tipo: "Corriente", titular: "Frío Total Servicios C.A.", doc: "J-41234567-8" },
    { id: "b2", banco: "Banesco", cuenta: "0134 •••• •••• 8890", tipo: "Ahorros", titular: "Frío Total Servicios C.A.", doc: "J-41234567-8" }
    // INVENTADO: titular y documento
  ];
  var ajustesIni = { nombre: "Frío Total Caracas", email: "ventas@friototal.com", telefono: "0212 555 0101", fiscal: "J-41234567-8", horario: "3 tramos · America/Caracas", figuras: { vender: true, importar: false, servicios: false } };
  var tiendaPublica = { rating: 4.8, opiniones: 37, direccion: "Av. Principal de Boleíta Norte, Galpón 12, Caracas", productos: 46, agotados: 3, telefonoPublico: "" };

  // assets/js/data5.js
  var solicitudesEmpIni = [
    {
      id: "#S-2041",
      servicio: "Instalación de aire split 12.000 BTU",
      cliente: "María González",
      donde: "Urb. El Viñedo, Valencia",
      direccion: "Urb. El Viñedo, Calle 4, Casa 12, Valencia",
      pedida: "hace 2 h",
      pref: "Sáb 18/10 · mañana",
      venceEn: (20 * 60 + 14) * 6e4,
      /* INVENTADO: cuenta atrás de 20 h 14 min desde que se abre la demo */
      notas: "El equipo ya está comprado. La unidad exterior va en el balcón, 3er piso. Hay toma de 220 V cerca.",
      estado: "porResponder",
      total: 0
    },
    {
      id: "#S-2036",
      servicio: "Mantenimiento preventivo de 3 equipos",
      titulo: "Mantenimiento preventivo de 3 equipos",
      cliente: "Panadería La Espiga",
      donde: "Av. Bolívar Norte",
      direccion: "Av. Bolívar Norte, Valencia",
      para: new Date(2026, 9, 14, 9, 0),
      estado: "aceptada",
      total: 120,
      recibida: "10/10/2026 · 10:05",
      notas: "Tres equipos de ventana en la cocina y el salón; avisar al encargado al llegar.",
      tel: false
    },
    // INVENTADO: recibida, notas
    {
      id: "#S-2030",
      servicio: "Reparación de fuga en condensadora",
      titulo: "Reparación de fuga en unidad condensadora",
      cliente: "Luis Pérez",
      donde: "Res. Los Mangos, Naguanagua",
      direccion: "Res. Los Mangos, Torre B, Apto 7-2, Naguanagua",
      para: new Date(2026, 9, 16, 14, 0),
      estado: "enCurso",
      total: 85,
      recibida: "12/10/2026 · 19:20",
      notas: "La condensadora gotea aceite por la válvula de servicio. Edificio con estacionamiento de visitantes.",
      tel: false
    }
  ];
  var TERMINADAS_BASE = 48;
  var catalogoEmpIni = [
    { id: "cs1", titulo: "Instalación de aire split hasta 12.000 BTU", desde: 85, min: 120, texto: "Hasta 3 m de tubería, soporte exterior, vacío y prueba.", oficio: "Climatización", pedido: 23, de: 41, visible: true },
    // Figma: «Pedido 23/41 veces»
    { id: "cs2", titulo: "Mantenimiento preventivo", desde: 35, min: 60, texto: "Limpieza de filtros, serpentines y drenaje.", oficio: "Climatización", pedido: 41, visible: true },
    { id: "cs3", titulo: "Carga de gas refrigerante R410A", desde: 60, min: 90, texto: "Incluye detección de fugas básica.", oficio: "Climatización", pedido: 12, visible: true },
    // INVENTADO: pedido
    { id: "cs4", titulo: "Reparación de tarjeta electrónica", desde: 45, min: 90, texto: "Diagnóstico y reparación de la tarjeta de control.", oficio: "Climatización", pedido: 0, visible: false }
    // INVENTADO: precio, duración, texto
  ];
  var perfilEmpIni = {
    nombre: "ClimaPro Servicios",
    razon: "ClimaPro Servicios C.A.",
    email: "contacto@climapro.com",
    web: "www.climapro.com",
    telefono: "",
    direccion: "Zona industrial, Valencia",
    // INVENTADO: razón social, dirección; teléfono vacío (Figma: «Los clientes no pueden llamarte»)
    rating: 4.9,
    opiniones: 58,
    zonas: ["Valencia", "Naguanagua", "San Diego"],
    logo: true,
    docs: [{ id: "rif", nombre: "RIF de la empresa", estado: "verificado" }, { id: "rm", nombre: "Registro Mercantil", estado: "pendiente" }]
  };
  var membresiaEmp = { plan: "Empresa Pro", costo: 29, dias: 30, desde: new Date(2026, 8, 28), renueva: true };

  // assets/js/data3.js
  var H = 36e5;
  var solicitudesIni = [
    {
      id: "#S-1082",
      servicio: "Instalación de aire split 12.000 BTU",
      cliente: "María González",
      direccion: "Urb. El Viñedo, Calle 4, Casa 12",
      ciudad: "Valencia",
      cuando: "Sáb 18/10 · 9:00",
      cuandoLargo: "Sábado 18/10/2026 · 9:00",
      venceTxt: "hoy 18:00",
      venceEn: 5 * H + 12 * 6e4,
      total: 60,
      recibida: "16/10/2026 a las 12:48",
      notas: "El equipo ya está comprado, hace falta el kit de instalación. Hay estacionamiento frente a la casa.",
      estado: "pendiente"
    },
    {
      id: "#S-1091",
      servicio: "Mantenimiento preventivo",
      cliente: "José Ramírez",
      direccion: "Av. Cedeño, Edif. Torre Norte, Piso 3",
      ciudad: "Valencia",
      cuando: "Lun 20/10 · 14:00",
      cuandoLargo: "Lunes 20/10/2026 · 14:00",
      // INVENTADO: id, total, notas
      venceTxt: "el 17/10 10:00",
      venceEn: 21 * H + 5 * 6e4,
      total: 25,
      recibida: "16/10/2026 a las 13:05",
      notas: "Dos equipos en la oficina; hay que avisar en recepción.",
      estado: "pendiente"
    },
    {
      id: "#S-1066",
      servicio: "Carga de gas refrigerante",
      cliente: "Carmen Díaz",
      direccion: "Calle Montes de Oca 18",
      ciudad: "Valencia",
      cuando: "Mar 14/10 · 11:00",
      cuandoLargo: "Martes 14/10/2026 · 11:00",
      // INVENTADO: id, total
      venceTxt: "",
      venceEn: -1,
      total: 20,
      recibida: "12/10/2026 a las 09:20",
      notas: "",
      estado: "caducada"
    }
  ];
  var trabajoIni = {
    id: "#T-0412",
    titulo: "Instalación de una compra",
    cliente: "Pedro Silva",
    direccion: "Calle Páez 45, San Diego, Carabobo",
    corta: "Calle Páez 45, San Diego",
    empezo: "hoy a las 8:42",
    estado: "ejecucion",
    parte: { diagnostico: "Equipo split de 12.000 BTU instalado sin vacío previo", materiales: "Tuerca flare, 1 kg de gas R410A", horas: "3", hecho: "Cambié la tuerca flare de la condensadora, limpié el filtro y recargué 1 kg de gas R410A. El equipo enfría normal.", notas: "Dejar el control remoto en la mesa de la sala." },
    // INVENTADO: diagnóstico, materiales, horas, notas
    manoDeObra: 45,
    otros: 0,
    garantiaMeses: 3
  };
  var comprasTrabajo = [
    { donde: "Calle Páez 45, San Diego", trabajo: true, items: [{ id: "#VX-20501", tienda: "Repuestos Frío", estado: "Entregado", total: 21.5, fecha: "15/10" }, { id: "#VX-20512", tienda: "Ferretería El Tornillo", estado: "En camino", total: 6.5, fecha: "15/10" }] },
    // INVENTADO: fecha de #VX-20512
    { donde: "Urb. El Viñedo, Calle 4, Casa 12", items: [{ id: "#VX-20530", tienda: "Herramientas Andina", estado: "Pago reportado", total: 48, fecha: "16/10" }] }
  ];
  var serviciosIni = [
    { id: "sv1", titulo: "Instalación de aire split hasta 18.000 BTU", oficio: "Climatización", min: 180, texto: "Montaje de evaporadora y condensadora, vacío y prueba.", precio: 60, visible: true },
    { id: "sv2", titulo: "Mantenimiento preventivo", oficio: "Climatización", min: 90, texto: "Limpieza de filtros, serpentines y drenaje.", precio: 25, visible: true },
    { id: "sv3", titulo: "Carga de gas refrigerante", oficio: "Climatización", min: 60, texto: "Detección de fuga básica y recarga.", precio: 20, visible: false }
  ];
  var horarioIni = [
    { d: "Lunes", on: true, de: "08:00", a: "18:00" },
    { d: "Martes", on: true, de: "08:00", a: "18:00" },
    { d: "Miércoles", on: true, de: "08:00", a: "18:00" },
    { d: "Jueves", on: true, de: "08:00", a: "18:00" },
    { d: "Viernes", on: true, de: "08:00", a: "17:00" },
    { d: "Sábado", on: true, de: "09:00", a: "13:00" },
    { d: "Domingo", on: false, de: "", a: "" }
  ];
  var oficiosIni = [
    { id: "aa", nombre: "Aire acondicionado", estado: "certificado", fecha: "12/05/2026" },
    { id: "rc", nombre: "Refrigeración comercial", estado: "revision" }
  ];
  var oficiosDisponibles = ["Electrodomésticos", "Electricidad residencial", "Energía solar", "Plomería"];
  var docsIni = [
    { id: "ced", nombre: "Cédula de identidad", obligatorio: true, estado: "verificado", ayuda: "Foto legible por ambas caras.", subido: "02/10", valido: "02/10/2031" },
    { id: "ref", nombre: "Certificado de refrigeración", obligatorio: true, estado: "rechazado", ayuda: "Emitido por un instituto reconocido.", subido: "05/10", motivo: "La foto está borrosa; no se lee el número." },
    { id: "ant", nombre: "Antecedentes penales", obligatorio: true, estado: "falta", ayuda: "Con menos de 6 meses." },
    { id: "seg", nombre: "Seguro de responsabilidad", obligatorio: false, estado: "vencido", ayuda: "Recomendado para trabajos grandes.", vence: new Date(2026, 8, 30) }
  ];
  var perfilTecnico = {
    rating: 4.8,
    opiniones: 37,
    trabajos: 112,
    oficio: "Aire acondicionado",
    anios: 12,
    presentacion: "Trabajo con equipos split, inverter y de ventana desde 2014. Instalaciones limpias, con vacío y prueba."
  };
  var planes = [
    { id: "basico", nombre: "Técnico Básico", precio: 9.9, lista: ["Apareces en el directorio de tu zona", "Hasta 20 solicitudes al mes", "Perfil verificado"] },
    { id: "pro", nombre: "Técnico Pro", recomendado: true, precio: 24.9, lista: ["Solicitudes ilimitadas", "Prioridad en instalaciones de compras", "Insignia «Técnico Pro»", "Soporte por WhatsApp"] }
  ];

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
    calificaciones: {},
    // pedido → { nota, texto }
    // Servicios y Academia (Fase 3)
    ubicacion: null,
    // auxilio vial: null | 'lista' | 'error' (la ubicación solo se pide al activar el interruptor)
    academia: {
      puntos: PUNTOS_INI,
      historial: historialPuntos.map((h2) => ({ ...h2 })),
      avance: JSON.parse(JSON.stringify(avanceIni)),
      inscritos: ["inv", "gas", "split"],
      eventos: { solar: false, tableros: true },
      offline: {},
      preguntasHoy: 2
    },
    preguntas: preguntasIni.map((q) => ({ ...q, respuestas: q.respuestas.map((r) => ({ ...r })) })),
    // Modo Tienda (Fase 5)
    shop: {
      pedidos: pedidosTiendaIni.map((o) => ({ ...o, lineas: o.lineas.map((l) => [...l]) })),
      mas: pedidosMasIni.map((o) => ({ ...o, lineas: o.lineas.map((l) => [...l]) })),
      masCargado: false,
      pendientes: pendientesIni.map((p) => ({ ...p, venceAt: Date.now() + p.venceEn })),
      resueltas: 0,
      productos: productosTiendaIni.map((p) => ({ ...p, mov: p.mov.map((m) => [...m]) })),
      carritos: carritosIni.map((c) => ({ ...c })),
      apartadas: apartadasIni.map((a) => ({ ...a })),
      confirmados: {},
      reclamos: reclamosTiendaIni.map((r) => ({ ...r })),
      cupones: cuponesIni.map((c) => ({ ...c })),
      reglas: reglasEnvioIni.map((r) => ({ ...r })),
      docs: docsTiendaIni.map((d) => ({ ...d })),
      docsEnviados: false,
      fichas: fichasIni.map((f) => ({ ...f, lista: f.lista.map((x) => ({ ...x })) })),
      ajustes: JSON.parse(JSON.stringify(ajustesIni)),
      publica: { ...tiendaPublica },
      cobroInmediato: true,
      cuentas: cuentasBanco.map((c) => ({ ...c })),
      despacho: {}
    },
    // Modo Empresa de servicio (Fase 6)
    emp: {
      solicitudes: solicitudesEmpIni.map((s) => ({ ...s, venceAt: s.venceEn ? Date.now() + s.venceEn : 0 })),
      cerradas: 0,
      catalogo: catalogoEmpIni.map((c) => ({ ...c })),
      perfil: { ...perfilEmpIni, zonas: [...perfilEmpIni.zonas], docs: perfilEmpIni.docs.map((d) => ({ ...d })) },
      informe: ""
    },
    // Modo Técnico (Fase 4)
    tec: {
      offline: true,
      cambios: 2,
      enviando: false,
      // sin señal: los cambios quedan «guardados en el teléfono» y se envían solos al volver
      paisSinMembresia: false,
      // variante de M8.12 según el país (lo cambia el panel)
      solicitudes: solicitudesIni.map((s) => ({ ...s, venceAt: s.venceEn > 0 ? Date.now() + s.venceEn : 0 })),
      trabajo: JSON.parse(JSON.stringify(trabajoIni)),
      cerrados: [],
      servicios: serviciosIni.map((s) => ({ ...s })),
      horario: horarioIni.map((h2) => ({ ...h2 })),
      radio: 25,
      oficios: oficiosIni.map((o) => ({ ...o })),
      docs: docsIni.map((d) => ({ ...d })),
      presentacion: perfilTecnico.presentacion,
      plan: null
    }
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
  var syncTimer = null;
  function tecCambio(n = 1) {
    if (state.tec.offline) {
      state.tec.cambios += n;
      emit();
    }
  }
  function tecSenal(offline) {
    state.tec.offline = offline;
    clearTimeout(syncTimer);
    if (!offline && state.tec.cambios > 0) {
      state.tec.enviando = true;
      emit();
      syncTimer = setTimeout(() => {
        state.tec.cambios = 0;
        state.tec.enviando = false;
        emit();
      }, 1200);
    } else {
      state.tec.enviando = false;
      emit();
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
    camera: '<path d="M4 8h3l2-3h6l2 3h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>',
    play: "M8 5l11 7-11 7z",
    pause: "M8 5v14M16 5v14",
    thumb: "M7 11v9H4v-9zM7 11l4-7c2 0 3 1 3 3v3h5a2 2 0 012 2l-1 6a2 2 0 01-2 2H7",
    bookmark: "M6 4h12v17l-6-4-6 4z",
    flag: "M6 21V4M6 5h12l-2 4 2 4H6",
    calendar: "M4 6h16v14H4zM4 10h16M8 3v4M16 3v4",
    download: "M12 4v11M7 11l5 5 5-5M5 20h14",
    video: "M3 6h13v12H3zM16 10l5-3v10l-5-3",
    users: '<circle cx="9" cy="9" r="3"/><circle cx="17" cy="10" r="2.4"/><path d="M3 19c0-3 3-5 6-5s6 2 6 5M16 14c3 0 5 1.6 5 4"/>',
    pin: "M12 21s-6-5.5-6-10a6 6 0 0112 0c0 4.5-6 10-6 10zM12 8.5a2 2 0 100 .01",
    car: "M4 14l2-6h12l2 6v4H4zM4 14h16M7 18v2M17 18v2",
    umbrella: "M3 12a9 9 0 0118 0zM12 12v7a2 2 0 004 0",
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
    const meta2 = META[code];
    el.setAttribute("aria-label", meta2.title);
    const ctx = { code, params, meta: meta2 };
    const fill = () => {
      const node = def ? def.render(ctx) : pendingScreen(code);
      el.replaceChildren(node);
      ctx.root = node;
      return ctx;
    };
    return { el, ctx, fill, def };
  }
  async function show(entry, kind, id) {
    const meta2 = META[entry.code];
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
    setBar({ mode: meta2.mode, tab: meta2.tab, hidden: !meta2.tab });
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
    const meta2 = META[code];
    if (!meta2) {
      toast("Esa pantalla no existe");
      return;
    }
    if (meta2.type === "sheet" || meta2.type === "dialog" || meta2.type === "flow") return openOverlay(code, params);
    const id = ++navId;
    {
      if (meta2.mode && meta2.mode !== state.mode) set({ mode: meta2.mode });
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
    const meta2 = META[code];
    if (overlay) await closeOverlay({ silent: true });
    if (!current) await goHome(state.mode, "none");
    const def = defs.get(code);
    const { sheet, scrim, dialog } = layers();
    const type = meta2.type;
    const ctx = { code, params, meta: meta2 };
    const content = def ? def.render(ctx) : h(`<div class="vx-pending-sheet"><h2 id="sheet-title" class="md-title-large">${esc(meta2.title)}</h2><p class="md-body-medium">${esc(meta2.label)} · pendiente · Fase ${meta2.phase}.</p></div>`);
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
      const meta3 = META[code];
      if (meta3.type === "sheet" || meta3.type === "dialog" || meta3.type === "flow") {
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
    const meta2 = META[first.code] || META["M1.01"];
    if (meta2.type === "sheet" || meta2.type === "dialog" || meta2.type === "flow") openOverlay(first.code, first.params);
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

  // assets/js/art.js
  var G = (rx = 62) => `<ellipse class="art-g" cx="100" cy="158" rx="${rx}" ry="7"/>`;
  var DIBUJOS = {
    // Unidad interior de aire split (pared)
    split: () => `<ellipse class="art-g" cx="100" cy="124" rx="66" ry="4.5"/>
    <rect class="art-b" x="24" y="54" width="152" height="62" rx="16"/>
    <path class="art-s" d="M24 98h152v2a16 16 0 0 1-16 16H40a16 16 0 0 1-16-16z"/>
    <rect class="art-d" x="38" y="96" width="124" height="9" rx="4.5"/>
    <path class="art-s" d="M44 110h112l-6 12H50z"/>
    <rect class="art-d" x="40" y="72" width="34" height="5" rx="2.5"/>
    <circle class="art-a" cx="152" cy="76" r="3.4"/>`,
    // Control remoto
    remote: () => `${G(34)}
    <rect class="art-b" x="74" y="30" width="52" height="128" rx="18"/>
    <rect class="art-d" x="84" y="42" width="32" height="24" rx="6"/>
    <circle class="art-a" cx="100" cy="82" r="7.5"/>
    <circle class="art-s" cx="86" cy="104" r="6.5"/><circle class="art-s" cx="114" cy="104" r="6.5"/>
    <circle class="art-s" cx="86" cy="124" r="6.5"/><circle class="art-s" cx="114" cy="124" r="6.5"/>
    <rect class="art-s" x="84" y="138" width="32" height="9" rx="4.5"/>`,
    // Capacitor de marcha
    capacitor: () => `${G(46)}
    <rect class="art-d" x="80" y="30" width="10" height="20" rx="3"/><rect class="art-d" x="110" y="30" width="10" height="20" rx="3"/>
    <rect class="art-b" x="66" y="46" width="68" height="108" rx="14"/>
    <path class="art-s" d="M118 46h2a14 14 0 0 1 14 14v80a14 14 0 0 1-14 14h-2a14 14 0 0 0 14-14V60a14 14 0 0 0-14-14z"/>
    <rect class="art-d" x="66" y="78" width="68" height="40"/>
    <rect class="art-a" x="78" y="90" width="30" height="5" rx="2.5"/><rect class="art-s" x="78" y="101" width="44" height="4" rx="2"/>`,
    // Compresor (cápsula con tubos). `h` cambia la altura según el tipo.
    compressor: (v = {}) => {
      const h2 = v.h || 104, top2 = 154 - h2;
      return `${G(54)}
    <rect class="art-d" x="52" y="150" width="96" height="9" rx="4.5"/>
    <rect class="art-d" x="80" y="${top2 - 22}" width="9" height="30" rx="3"/><rect class="art-d" x="112" y="${top2 - 14}" width="9" height="22" rx="3"/>
    <rect class="art-b" x="58" y="${top2}" width="84" height="${h2}" rx="40"/>
    <path class="art-s" d="M112 ${top2 + 1}a40 40 0 0 1 30 39v${h2 - 80}a40 40 0 0 1-40 40a40 40 0 0 0 28-38V${top2 + 40}a40 40 0 0 0-18-41z"/>
    ${v.band ? `<rect class="art-a" x="58" y="${top2 + h2 * 0.46}" width="84" height="7"/>` : ""}
    <circle class="art-d" cx="100" cy="${top2 + h2 * 0.7}" r="9"/>`;
    },
    // Tarjeta electrónica
    board: () => `${G(66)}
    <rect class="art-b" x="32" y="52" width="136" height="96" rx="12"/>
    <rect class="art-s" x="32" y="136" width="136" height="12" rx="6"/>
    <rect class="art-d" x="50" y="68" width="38" height="38" rx="5"/>
    <path class="art-line" d="M58 68v-6M68 68v-6M78 68v-6M58 106v6M68 106v6M78 106v6" fill="none" stroke-width="3" stroke-linecap="round"/>
    <circle class="art-s" cx="108" cy="78" r="9"/><circle class="art-s" cx="132" cy="78" r="9"/>
    <rect class="art-d" x="132" y="96" width="26" height="30" rx="4"/>
    <circle class="art-a" cx="104" cy="112" r="3.4"/>
    <path class="art-line" d="M88 90h12M108 120h18M50 122h60" fill="none" stroke-width="2.5" stroke-linecap="round"/>`,
    // Taladro percutor inalámbrico
    drill: () => `${G(60)}
    <rect class="art-d" x="130" y="70" width="22" height="22" rx="5"/><rect class="art-s" x="150" y="78" width="30" height="7" rx="3.5"/>
    <rect class="art-b" x="40" y="58" width="96" height="42" rx="16"/>
    <rect class="art-a" x="52" y="70" width="44" height="7" rx="3.5"/>
    <path class="art-b" d="M84 92h34l6 52a8 8 0 0 1-8 9h-18a8 8 0 0 1-8-9z"/>
    <path class="art-s" d="M104 92h14l6 52a8 8 0 0 1-8 9h-10z"/>
    <rect class="art-d" x="74" y="146" width="56" height="16" rx="6"/>
    <rect class="art-d" x="92" y="100" width="12" height="18" rx="5"/>`,
    // Juego de llaves (tres llaves en abanico)
    wrenches: () => {
      const llave = (a, w) => `<g transform="translate(100 156) rotate(${a})"><rect class="art-b" x="-8" y="-104" width="16" height="104" rx="8"/><circle class="art-b" cx="0" cy="-108" r="${w}"/><circle class="art-d" cx="0" cy="-108" r="${w * 0.44}"/></g>`;
      return `${G(50)}${llave(-24, 19)}${llave(24, 19)}${llave(0, 21)}`;
    },
    // Caja genérica
    caja: () => `${G(52)}
    <path class="art-b" d="M100 40l58 28v62l-58 28-58-28V68z"/>
    <path class="art-s" d="M100 96l58-28v62l-58 28z"/>
    <path class="art-d" d="M100 40l58 28-58 28-58-28z" opacity=".35"/>
    <rect class="art-a" x="92" y="104" width="16" height="6" rx="3" transform="rotate(-24 100 107)"/>`
  };
  function tipoDe(p) {
    if (!p) return { k: "caja" };
    const cat = String(p.categoria || "");
    if (/Aires split/.test(cat)) return { k: "split" };
    if (p.id === "ctrl" || /Controles/.test(cat)) return { k: "remote" };
    if (p.id === "cap") return { k: "capacitor" };
    if (/Compresores/.test(cat)) return { k: "compressor", v: { rotativo: {}, scroll: { h: 118 }, inverter: { band: true }, nevera: { h: 88 } }[p.sub] || {} };
    if (/Tarjetas/.test(cat)) return { k: "board" };
    if (p.id === "tal") return { k: "drill" };
    if (p.id === "llav") return { k: "wrenches" };
    return { k: "caja" };
  }
  function productArt(p, { vista = 0, cls = "" } = {}) {
    const { k, v } = tipoDe(typeof p === "string" ? producto(p) : p);
    const T2 = ["", "translate(100 100) scale(1.45) translate(-100 -112)", "translate(200 0) scale(-1 1)", "rotate(-7 100 100)", "translate(100 100) scale(.78) translate(-100 -100)"][vista] || "";
    return `<svg class="art ${cls}" viewBox="16 22 168 146" aria-hidden="true" focusable="false"><g${T2 ? ` transform="${T2}"` : ""}>${DIBUJOS[k](v)}</g></svg>`;
  }

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
  var TONOS = {
    "Climatización": "var(--md-sys-color-tertiary-container)",
    "Herramientas": "var(--md-sys-color-surface-container-highest)",
    // gris cálido: se lee «taller», lejos del azul de clima
    "Eléctrico": "var(--md-sys-color-secondary-container)"
    // azul pizarra: sobrio, y distinto del hielo de Climatización
    // Sin ámbar (es de acción) ni colores de estado (un verde se leería como «disponible»). Un oficio nuevo sin tono cae en neutro.
  };
  var oficioDe = (p) => String(p.categoria || "").split(" › ")[0];
  var teselaAttrs = (p) => {
    const tono = TONOS[oficioDe(p)];
    return `data-oficio="${esc(oficioDe(p))}"${tono ? ` style="--tone:${tono}"` : ""}`;
  };
  function productCard(p, { i } = {}) {
    const t = tienda(p.tienda), off = pct2(p), out = p.stock <= 0;
    return `<article class="vx-pcard"${i != null ? ` style="--i:${i}"` : ""}>
    <a class="vx-pcard-link md-sl vx-press" href="#/M2.08?id=${p.id}" data-go="M2.08?id=${p.id}" aria-label="${esc(p.nombre)}, ${money(p.precio)}">
      <span class="vx-pimg vx-photo" ${teselaAttrs(p)} aria-hidden="true">${productArt(p)}</span>
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
  var heroSlides = () => {
    const o = producto("lg12");
    return [
      { tono: "ink", eyebrow: "Ofertas relámpago", titulo: `Aires split con ${pct2(o)}&nbsp;% menos`, sub: `Oferta hasta el ${o.oferta}`, cta: "Ver ofertas", go: "M2.03", art: "aa12" },
      { tono: "tertiary", eyebrow: "Técnicos certificados", titulo: "Técnicos en tu zona", sub: "Instalación y reparación con técnicos verificados.", cta: "Ver técnicos", go: "M4.03", art: "tal" },
      { tono: "secondary", eyebrow: "Repuestos", titulo: "Compresores, capacitores y tarjetas", sub: "De tiendas verificadas.", cta: "Explorar", go: "M2.06?id=clima", art: "comp" }
    ];
  };
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
      <section class="vx-hero" aria-label="Promociones"><div class="vx-carousel" tabindex="0" aria-label="Promociones, desliza para ver más">${heroSlides().map((c, i) => `<div class="vx-slide vx-hs vx-hs--${c.tono}" role="group" aria-label="Promoción ${i + 1} de 3"><div class="vx-hs-copy"><p class="vx-hs-eyebrow">${c.eyebrow}</p><h2 class="vx-hs-title">${c.titulo}</h2><p class="vx-hs-sub">${c.sub}</p>${btn(c.cta, { kind: "filled", go: c.go })}</div><div class="vx-hs-art" aria-hidden="true">${productArt(c.art)}</div></div>`).join("")}</div>
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
      <button type="button" class="vx-gallery vx-photo md-sl" ${teselaAttrs(p)} data-go="M2.09?id=${p.id}" data-kind="fade" aria-label="Abrir la galería, 5 fotos">${productArt(p)}<span class="vx-gcount md-label-medium">1 de 5</span></button>
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
      const pg = producto(state.flow.viewing) || producto("aa12");
      const el = h(`<div class="vx-gal"><header class="vx-galhead">${iconBtn("close", "Cerrar galería", "data-back")}<h1 class="md-title-medium vx-tab-num" id="gCount" aria-live="polite" tabindex="-1">1 de 5</h1><span class="vx-spacer"></span></header>
      <div class="vx-carousel vx-galcar" tabindex="0" aria-label="Fotos del producto">${[1, 2, 3, 4, 5].map((n) => `<div class="vx-slide vx-gslide vx-photo" ${teselaAttrs(pg)} role="group" aria-label="Foto ${n} de 5">${productArt(pg, { vista: n - 1 })}</div>`).join("")}</div>
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
  var thumb = (n = 24, p = null) => `<span class="vx-thumb-ph vx-thumb-ph--sm vx-photo" aria-hidden="true">${productArt(p)}</span>`;
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
            <ul class="vx-list" role="list">${g.ls.map((l) => `<li class="vx-cartline${l.cambioPrecio ? " vx-priced" : ""}" data-line="${l.key}">${thumb(24, l.p)}
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
          <ul class="vx-list" role="list">${g.ls.map((l) => `<li class="vx-envline">${thumb(20, l.p)}<span class="md-body-medium">${esc(l.p.corto || l.p.nombre)}<br><span class="vx-muted vx-tab-num">${l.qty} × ${money(l.precio)}</span></span><b class="md-body-large vx-tab-num">${money(l.precio * l.qty)}</b></li>`).join("")}</ul>
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
        aprobado: `<svg class="vx-ring vx-resico vx-resico--ok" viewBox="0 0 72 72" width="72" height="72" aria-hidden="true"><circle pathLength="1" cx="36" cy="36" r="32" fill="none" stroke="currentColor" stroke-width="4"/><path class="vx-check" pathLength="1" d="M22 37l10 10 18-20" fill="none" stroke="currentColor" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
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
      const win = estado === "aprobado";
      const el = h(`<div class="vx-page"><div class="vx-body vx-result"><div class="vx-resbox${win ? " vx-win" : ""}">${ico}<h1 class="md-headline-small" tabindex="-1">${title}</h1>
      ${win ? `<p class="vx-figure vx-figure--lg vx-win-amt" id="winAmt">${money(t.total)}</p><p class="md-body-medium vx-muted vx-win-bs">${bsRef(t.total, compra.pasarela.tasaDia, { decimals: 0 })}</p>` : ""}
      ${estado === "rechazado" ? `<p class="md-body-large vx-reason">${icon("error", 18)} Tu banco rechazó el pago: «Fondos insuficientes»</p>` : ""}
      ${estado === "pendiente" ? `<div class="md-progress md-progress--indet vx-resprog" role="progressbar" aria-label="Esperando a tu banco" style="--_pct:30%"><span class="md-progress-track"></span><span class="md-progress-active"></span></div><p class="md-body-large">Estamos esperando la confirmación de tu banco. Te avisamos aquí.</p>` : ""}
      ${estado === "revision" ? '<p class="md-body-large">Reportar no es pagar: la compra queda en revisión hasta que se confirme el dinero.</p>' : ""}</div>
      <dl class="vx-dl vx-pad-h">${win ? "" : row2("Importe", `${money(t.total)}<br><span class="md-body-small vx-muted">${bsRef(t.total, compra.pasarela.tasaDia, { decimals: 0 })}</span>`)}${row2("Método", metTxt)}${metodo !== "transferencia" ? row2("Transacción", compra.pasarela.intento) : ""}</dl>
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
      if (estado !== "aprobado") return;
      if (ctx.first && !reduce()) {
        stagger(el.querySelector(".vx-dl"));
        const ul = el.querySelector(".vx-list");
        if (ul) stagger(ul);
      }
      const amt = el.querySelector("#winAmt");
      if (!amt || reduce()) return;
      const total = compraPasarela().total;
      let raf = 0, t0 = 0;
      const step = (now) => {
        t0 || (t0 = now);
        const k = Math.min((now - t0) / 800, 1), e = 1 - (1 - k) ** 3;
        amt.textContent = money(total * e);
        if (k < 1) raf = requestAnimationFrame(step);
        else amt.textContent = money(total);
      };
      amt.textContent = money(0);
      const id = setTimeout(() => {
        raf = requestAnimationFrame(step);
      }, 520);
      return () => {
        clearTimeout(id);
        cancelAnimationFrame(raf);
      };
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

  // assets/js/screens/m4.js
  var WA = (txt) => `data-toast="Abre WhatsApp de VexBiz${txt ? ": " + esc(txt) : ""}"`;
  var horario = `<p class="md-body-medium vx-muted vx-pad-h vx-hours">${HORARIO}</p>`;
  var usd = (n) => `$ ${num(n, Number.isInteger(n) ? 0 : 2)} USD`;
  var tarifa = (base, km) => `${usd(base)} + $ ${num(km, 2)} USD/km`;
  register("M4.01", {
    render() {
      const card = (ic, title, line1, line2, to) => `<li><button type="button" class="vx-svc md-sl vx-press" data-go="${to}"><span class="vx-svc-ico">${icon(ic, 28)}</span>
      <span class="vx-svc-text"><span class="md-title-medium">${title}</span><span class="md-body-medium">${line1}</span><span class="md-body-medium vx-muted">${line2}</span></span><span class="vx-muted">${icon("chevron")}</span></button></li>`;
      return h(`<div>${topbar("Servicios", { back: false, trailing: iconBtn("bell", "Avisos", 'data-go="M6.17"') })}
      <ul class="vx-svclist vx-pad-h" role="list" data-stagger>
        ${card("car", "Auxilio vial", "¿Te quedaste en la vía?", "6 empresas · 24/7", "M4.08")}
        ${card("wrench", "Servicio técnico", "Reparación e instalación por oficio", "48 técnicos y empresas", "M4.02")}
        ${card("umbrella", "Seguros", "Pólizas y cotizaciones", "3 aseguradoras", "M4.06")}</ul>
      <ul class="vx-list" role="list">${row({ ic: "receipt", title: "Servicios que pedí", go: "M6.12" })}</ul>
      <p class="md-body-medium vx-muted vx-pad-h vx-hours">VexBiz atiende por WhatsApp de lunes a sábado, 8:00 a 18:00.</p></div>`);
    },
    mount(el, ctx) {
      if (ctx.first) $$("[data-stagger]", el).forEach(stagger);
    }
  });
  register("M4.02", {
    render() {
      return h(`<div>${topbar("Servicio técnico")}<p class="md-body-large vx-pad-h">Elige qué necesitas reparar o instalar.</p>
      <ul class="vx-list" role="list">${oficios.map((o) => o.n ? row({ ic: "wrench", title: o.nombre, sup: `${o.n} disponibles`, go: `M4.03?id=${o.id}` }) : row({ ic: "chat", title: o.nombre, sup: "Escríbenos por WhatsApp", attrs: WA(`necesito un técnico de ${o.nombre.toLowerCase()}`) })).join("")}</ul>
      ${horario}<div class="vx-pad-h">${whatsappBtn("Escríbenos por WhatsApp", WA())}</div></div>`);
    }
  });
  register("M4.03", {
    render(ctx) {
      const of = oficios.find((o) => o.id === ctx.params.id) || oficios[0];
      const el = h(`<div>${topbar(of.nombre)}<p class="md-body-medium vx-muted vx-pad-h">${of.n} disponibles</p>
      <p class="md-body-large vx-pad-h">Una empresa responde con su equipo. Un técnico trabaja por su cuenta.</p>
      <div class="vx-pad-h"><div class="md-seg" role="tablist" aria-label="Quién presta el servicio">${[["todos", "Todos"], ["empresa", "Empresas"], ["tecnico", "Técnicos"]].map(([k, t], i) => `<button type="button" role="tab" class="md-seg-item md-sl md-label-large${i === 0 ? " md-seg-item--on" : ""}" data-seg="${k}" aria-selected="${i === 0}">${t}</button>`).join("")}</div></div>
      <ul class="vx-provlist vx-pad-h" role="list" id="provList"></ul>
      <p class="md-body-medium vx-muted vx-pad-h">Estos son todos los que hay hoy.</p><div class="vx-pad-h">${whatsappBtn("Escríbenos por WhatsApp", WA())}</div></div>`);
      let seg2 = "todos";
      const card = (p) => `<li class="vx-prov"><button type="button" class="vx-prov-main md-sl vx-press" data-go="${p.tipo === "empresa" ? "M4.05" : "M4.04?id=" + p.id}" aria-label="${esc(p.nombre)}, ${p.rol}">
      ${avatar(p.sigla, true)}<span class="vx-prov-text"><span class="md-title-small">${esc(p.nombre)}</span><span class="md-label-medium vx-muted">${p.rol}</span><span class="md-body-medium">${esc(p.texto)}</span>
      <span class="md-body-medium vx-muted">${icon("pin", 14)} ${esc(p.donde)}${p.anios ? ` · ${p.anios} años` : ""}</span>
      <span class="vx-tagrow">${p.tags.map((t) => `<span class="vx-tag md-label-small">${esc(t)}</span>`).join("")}</span>
      <span class="vx-provmeta md-body-medium vx-tab-num">${p.rating ? `<b>${stars(p.rating)}</b>` : '<span class="vx-muted">Todavía sin valoraciones</span>'}${p.tipo === "tecnico" ? statusTag(p.ahora ? "success" : "neutral", p.ahora ? "Disponible ahora" : "No disponible ahora") : ""}${p.desde ? `<span>Desde $ ${p.desde}</span>` : ""}</span></span></button></li>`;
      const paint = () => {
        const l = prestadores.filter((p) => seg2 === "todos" || p.tipo === seg2);
        el.querySelector("#provList").innerHTML = l.map(card).join("") || `<li>${stateBlock({ icon: "users", title: "No hay nadie en esta lista hoy" })}</li>`;
      };
      el.addEventListener("click", (e) => {
        const b = e.target.closest("[data-seg]");
        if (!b) return;
        seg2 = b.dataset.seg;
        $$("[data-seg]", el).forEach((x) => {
          const on = x === b;
          x.classList.toggle("md-seg-item--on", on);
          x.setAttribute("aria-selected", on);
        });
        paint();
      });
      paint();
      return el;
    }
  });
  register("M4.04", {
    render(ctx) {
      const p = prestadores.find((x) => x.id === ctx.params.id && x.tipo === "tecnico") || prestadores[1];
      const kv2 = (k, v) => `<div class="vx-stat"><dt class="md-body-small vx-muted">${k}</dt><dd class="md-title-small vx-tab-num">${v}</dd></div>`;
      const primero = p.nombre.split(" ")[0];
      return h(page(
        topbar(p.nombre, { trailing: iconBtn("share", "Compartir", 'data-toast="Enlace copiado"') }),
        `
      <section class="vx-profile vx-pad-h">${avatar(p.sigla, true)}<div><p class="md-label-medium vx-verified">${icon("check", 16)} Verificado por VexBiz</p><p class="md-body-medium">${p.rol}</p>
        <p class="md-body-medium vx-tab-num">${p.rating ? stars(p.rating) : "Todavía sin valoraciones"} · ${esc(p.ciudad)}</p><p>${statusTag(p.ahora ? "success" : "neutral", p.ahora ? "Disponible ahora" : "No disponible ahora")}</p></div></section>
      <dl class="vx-stats vx-pad-h">${kv2("Experiencia", `${p.anios} años`)}${kv2("Cobertura", esc(p.donde))}${kv2("Oficios", p.oficios.length)}${kv2("Desde", `$ ${p.desde}`)}${kv2("Nivel de academia", p.nivel)}${kv2("Técnico fundador", p.fundador ? "Sí" : "No")}${kv2("Respuestas que resolvieron", p.resueltas)}</dl>
      <section class="vx-pad-h"><h2 class="md-title-medium">Qué hace</h2><ul class="vx-tagrow">${p.oficios.map((o) => `<li class="vx-tag md-label-medium">${esc(o)}</li>`).join("")}</ul></section>
      <section class="vx-pad-h"><h2 class="md-title-medium">Sobre ${primero}</h2><p class="md-body-large">${esc(p.sobre)}</p></section>
      <section class="vx-pad-h"><h2 class="md-title-medium">Cómo se contrata</h2><p class="md-body-large">VexBiz recibe tu mensaje y coordina con el técnico.</p><p class="md-body-medium vx-muted">${HORARIO}</p></section>`,
        whatsappBtn(`Escribir por WhatsApp sobre ${primero}`, WA(`quiero contratar a ${p.nombre}`))
      ));
    }
  });
  register("M4.05", {
    render() {
      const p = prestadores[0], kv2 = (k, v) => `<div class="vx-stat"><dt class="md-body-small vx-muted">${k}</dt><dd class="md-title-small vx-tab-num">${v}</dd></div>`;
      return h(page(
        topbar(p.nombre, { trailing: iconBtn("share", "Compartir", 'data-toast="Enlace copiado"') }),
        `
      <section class="vx-profile vx-pad-h">${avatar(p.sigla, true)}<div><p class="md-label-medium vx-verified">${icon("check", 16)} Verificado por VexBiz</p><p class="md-body-medium">${p.rol}</p>
        <p class="md-body-medium vx-tab-num">${stars(p.rating)} · ${esc(p.ciudad)}</p></div></section>
      <dl class="vx-stats vx-pad-h">${kv2("Provincia", p.provincia)}${kv2("Servicios", p.servicios.length)}${kv2("Oficios", p.oficios.length)}</dl>
      <section class="vx-pad-h"><h2 class="md-title-medium">Servicios que presta</h2><ul class="vx-checklist" role="list">${p.servicios.map((s) => `<li>${icon("check", 18)}<span class="md-body-large">${esc(s)}</span></li>`).join("")}</ul></section>
      <section class="vx-pad-h"><h2 class="md-title-medium">Oficios</h2><ul class="vx-tagrow">${p.oficios.map((o) => `<li class="vx-tag md-label-medium">${esc(o)}</li>`).join("")}</ul></section>
      <section class="vx-pad-h"><h2 class="md-title-medium">Cómo se contrata</h2><p class="md-body-large">VexBiz recibe tu mensaje y coordina con la empresa.</p><p class="md-body-medium vx-muted">${HORARIO}</p></section>`,
        whatsappBtn("Escribir por WhatsApp", WA(`quiero contratar a ${p.nombre}`))
      ));
    }
  });
  register("M4.06", {
    render() {
      const card = (a) => `<li class="vx-order"><div class="vx-order-main vx-static"><span class="vx-order-text"><span class="md-title-small">${esc(a.nombre)}</span><span class="md-body-medium vx-muted">${esc(a.ciudad)}</span>
      ${a.lista.map((p) => `<span class="vx-poliza"><span class="md-body-large">${esc(p.t)}${p.sub ? " · " + esc(p.sub) : ""}</span><b class="md-body-large vx-tab-num">${usd(p.p)} al año</b></span>`).join("")}</span></div>
      <div class="vx-order-act">${btn("Ver aseguradora", { kind: "outlined", go: `M4.07?id=${a.id}` })}${whatsappBtn("Cotizar", WA(`quiero cotizar con ${a.nombre}`)).replace("md-btn--block", "")}</div></li>`;
      return h(`<div>${topbar("Seguros")}<p class="md-body-large vx-pad-h">Estas aseguradoras cotizan directo contigo.</p><ul class="vx-orders vx-pad-h" role="list">${aseguradoras.map(card).join("")}</ul>
      <section class="vx-pad-h"><h2 class="md-title-medium">¿Necesitas otro seguro?</h2><div class="vx-chipwrap">${otrosSeguros.map((s) => `<span class="md-chip-wrap"><button type="button" class="md-chip md-sl md-label-large" ${WA(`necesito cotizar: ${s.toLowerCase()}`)}>${esc(s)}</button></span>`).join("")}</div>
        ${btn("Escríbenos si no está en la lista", { kind: "text", attrs: WA() })}</section>${horario}</div>`);
    }
  });
  register("M4.07", {
    render(ctx) {
      const a = aseguradoras.find((x) => x.id === ctx.params.id) || aseguradoras[0], kv2 = (k, v) => `<div class="vx-stat"><dt class="md-body-small vx-muted">${k}</dt><dd class="md-title-small vx-tab-num">${v}</dd></div>`;
      return h(page(
        topbar(a.nombre, { trailing: iconBtn("share", "Compartir", 'data-toast="Enlace copiado"') }),
        `
      <section class="vx-profile vx-pad-h">${avatar(a.sigla, true)}<div><p class="md-label-medium vx-verified">${icon("check", 16)} Verificado por VexBiz</p><p class="md-body-medium">Aseguradora</p>
        <p class="md-body-medium vx-tab-num">${stars(a.rating)} · ${esc(a.ciudad)}</p></div></section>
      <dl class="vx-stats vx-pad-h">${kv2("Provincia", esc(a.provincia))}${kv2("Pólizas", a.polizas)}</dl>
      <section class="vx-pad-h"><h2 class="md-title-medium">Pólizas que ofrece</h2><ul class="vx-orders vx-nopad" role="list">${a.lista.map((p) => `<li class="vx-order"><div class="vx-order-main vx-static"><span class="vx-order-text"><span class="md-title-small">${esc(p.t)}</span>${p.sub ? `<span class="md-body-medium vx-muted">${esc(p.sub)}</span>` : ""}
        <b class="md-body-large vx-tab-num">${usd(p.p)} al año</b><span class="md-body-medium">${esc(p.d)}</span></span></div><div class="vx-order-act">${btn("Cotizar esta póliza", { kind: "text", attrs: WA(`quiero cotizar ${p.t.toLowerCase()} con ${a.nombre}`) })}</div></li>`).join("")}</ul></section>`,
        whatsappBtn("Cotizar por WhatsApp", WA(`quiero cotizar con ${a.nombre}`))
      ));
    }
  });
  function pedirUbicacion(done2) {
    if (!navigator.geolocation) {
      done2("error");
      return;
    }
    try {
      navigator.geolocation.getCurrentPosition(() => done2("lista"), () => done2("error"), { timeout: 6e3, maximumAge: 6e4 });
    } catch {
      done2("error");
    }
  }
  var ubicHtml = () => `<div class="vx-ubic">${switchHtml("ubic", "Añadir mi ubicación al mensaje", state.ubicacion === "lista")}<p class="md-body-medium vx-muted">Envía un enlace al punto del mapa</p><p class="md-body-medium vx-ubic-st" id="ubicSt" role="status" aria-live="polite"></p></div>`;
  function wireUbic(el) {
    const sw = el.querySelector("#ubic"), st = el.querySelector("#ubicSt");
    const paint = () => {
      st.innerHTML = state.ubicacion === "lista" ? `${icon("check", 16)} Ubicación lista: se envía un enlace al mapa.` : state.ubicacion === "error" ? `${icon("warning", 16)} No pudimos obtener tu ubicación. Cuéntales dónde estás en el mensaje.` : "";
      st.className = `md-body-medium vx-ubic-st ${state.ubicacion === "lista" ? "is-ok" : state.ubicacion === "error" ? "is-warn" : ""}`;
    };
    sw.addEventListener("change", () => {
      if (!sw.checked) {
        set({ ubicacion: null });
        paint();
        return;
      }
      st.textContent = "Buscando tu ubicación…";
      pedirUbicacion((r) => {
        set({ ubicacion: r });
        sw.checked = r === "lista";
        sw.nextElementSibling.classList.toggle("md-switch-track--on", r === "lista");
        paint();
      });
    });
    paint();
  }
  register("M4.08", {
    render() {
      const el = h(`<div>${topbar("Auxilio vial")}<section class="vx-pad-h vx-stack"><h2 class="md-title-large">¿Necesitas ayuda ahora?</h2><p class="md-body-large">Atendemos todos los días, 24 horas.</p>
      ${ubicHtml()}
      <h2 class="md-title-medium">¿Qué necesitas?</h2><div class="vx-chipwrap" role="radiogroup" aria-label="¿Qué necesitas?">${auxilioTipos.map((t) => `<span class="md-chip-wrap"><button type="button" role="radio" aria-checked="false" class="md-chip md-sl md-label-large" data-tipo="${t}">${t}</button></span>`).join("")}</div></section>
      <ul class="vx-orders vx-pad-h" role="list" id="auxList"></ul>
      <section class="vx-pad-h"><h2 class="md-title-medium">Cuando escribas, cuéntales</h2><ul class="vx-checklist" role="list">${cuentales.map((c) => `<li>${icon("check", 18)}<span class="md-body-large">${c}</span></li>`).join("")}</ul></section></div>`);
      wireControls(el);
      wireUbic(el);
      let tipo = null;
      const paint = () => {
        const l = auxilioEmpresas.filter((e) => !tipo || e.tipo === tipo);
        el.querySelector("#auxList").innerHTML = l.map((e) => `<li class="vx-order"><div class="vx-order-main vx-static"><span class="vx-order-text"><span class="md-title-small">${esc(e.empresa)}</span><span class="md-body-medium vx-muted">${esc(e.ciudad)}</span>
        <span class="md-body-large">${e.servicio}</span><span class="md-body-medium vx-tab-num">${tarifa(e.base, e.km)} · hasta ${e.hasta} km</span></span></div>
        <div class="vx-order-act">${e.ver ? btn("Ver empresa", { kind: "outlined", go: "M4.09" }) : ""}${whatsappBtn("Pedir ayuda", WA(`necesito ${e.servicio.toLowerCase()}${state.ubicacion === "lista" ? " (con mi ubicación)" : ""}`)).replace("md-btn--block", "")}</div></li>`).join("") || `<li>${stateBlock({ icon: "car", title: "Hoy no hay empresas para eso en la lista", text: "Escríbenos por WhatsApp y te ayudamos a conseguir una.", action: whatsappBtn("Escríbenos por WhatsApp", WA(`necesito ${tipo?.toLowerCase()}`)) })}</li>`;
      };
      el.addEventListener("click", (e) => {
        const c = e.target.closest("[data-tipo]");
        if (!c) return;
        tipo = tipo === c.dataset.tipo ? null : c.dataset.tipo;
        $$("[data-tipo]", el).forEach((b) => {
          const on = b.dataset.tipo === tipo;
          b.classList.toggle("md-chip--selected", on);
          b.setAttribute("aria-checked", on);
        });
        paint();
      });
      paint();
      return el;
    }
  });
  register("M4.09", {
    render() {
      const a = auxilioEmpresa, flota = a.ofrece.reduce((s, o) => s + o.flota, 0), kv2 = (k, v) => `<div class="vx-stat"><dt class="md-body-small vx-muted">${k}</dt><dd class="md-title-small vx-tab-num">${v}</dd></div>`;
      const el = h(page(
        topbar(a.nombre, { trailing: iconBtn("share", "Compartir", 'data-toast="Enlace copiado"') }),
        `
      <section class="vx-profile vx-pad-h">${avatar(a.sigla, true)}<div><p class="md-label-medium vx-verified">${icon("check", 16)} Verificado por VexBiz</p><p class="md-body-medium">Empresa de auxilio vial</p>
        <p class="md-body-medium vx-tab-num">${stars(a.rating)} · ${esc(a.ciudad)}</p></div></section>
      <dl class="vx-stats vx-pad-h">${kv2("Provincia", a.provincia)}${kv2("Radio de cobertura", `hasta ${a.radio} km`)}${kv2("Flota", plural(flota, "vehículo", "vehículos"))}</dl>
      <section class="vx-pad-h"><h2 class="md-title-medium">Qué ofrece y cuánto cuesta</h2><ul class="vx-orders vx-nopad" role="list">${a.ofrece.map((o) => `<li class="vx-order"><div class="vx-order-main vx-static"><span class="vx-order-text"><span class="md-title-small">${o.servicio}</span>
        <span class="md-body-large vx-tab-num">${tarifa(o.base, o.km)}</span><span class="md-body-medium vx-muted vx-tab-num">Hasta ${o.hasta} km · flota de ${o.flota}</span></span></div></li>`).join("")}</ul></section>
      <section class="vx-pad-h"><h2 class="md-title-medium">Cuando escribas, cuéntales</h2><ul class="vx-checklist" role="list">${cuentales.map((c) => `<li>${icon("check", 18)}<span class="md-body-large">${c}</span></li>`).join("")}</ul>${ubicHtml()}</section>`,
        whatsappBtn("Pedir ayuda por WhatsApp", WA("necesito auxilio vial"))
      ));
      wireControls(el);
      wireUbic(el);
      return el;
    }
  });

  // assets/js/screens/m5.js
  var curso = (id) => cursosAcademia.find((c) => c.id === id) || cursosAcademia[1];
  var horas = (min) => `${Math.floor(min / 60)} h${min % 60 ? ` ${min % 60} min` : ""}`;
  var lecciones = (c) => c.temario ? c.temario.flatMap((t, ti) => t.l.map(([n, m], i) => ({ n, m, modulo: t.n, ti, i }))) : [];
  var avance = (id) => state.academia.avance[id] || { hechas: 0 };
  var pctCurso = (c) => Math.round(avance(c.id).hechas / c.clases * 100);
  function nivelDe(p) {
    let idx = 0;
    niveles.forEach(([, min2], i) => {
      if (p >= min2) idx = i;
    });
    const sig = niveles[idx + 1], min = niveles[idx][1];
    return { idx, nombre: niveles[idx][0], num: idx + 1, sig: sig?.[0], faltan: sig ? sig[1] - p : 0, pct: sig ? Math.round((p - min) / (sig[1] - min) * 100) : 100 };
  }
  var progress = (pct3, label) => `<div class="md-progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow="${pct3}" aria-label="${esc(label)}" style="--_pct:${pct3}%"><span class="md-progress-track"></span><span class="md-progress-active"></span><span class="md-progress-stop"></span></div>`;
  var precio = (c) => c.precio ? `$ ${c.precio}` : "Gratis";
  var mmss = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
  var meta = (c) => `${c.clases} clases · ${horas(c.min)} · <span class="vx-tab-num">${stars(c.rating)}</span>`;
  register("M5.01", {
    render() {
      const el = h(`<div>${topbar("Academia", { back: false, trailing: iconBtn("bell", "Avisos", 'data-go="M6.17"') })}
      <div class="vx-chipwrap vx-pad-h">${[["book", "Mis cursos", "M5.03"], ["calendar", "Eventos", "M5.05"], ["users", "Comunidad", "M5.06"], ["star", "Mi nivel", "M5.10"]].map(([ic, t, to]) => `<span class="md-chip-wrap"><button type="button" class="md-chip md-chip--lead md-sl md-label-large" data-go="${to}">${icon(ic, 18)}${t}</button></span>`).join("")}</div>
      <div class="vx-chipwrap vx-pad-h" role="group" aria-label="Filtrar cursos">${[["todos", "Todos"], ...areas.map(([a, n]) => [a, `${a} ${n}`]), ["gratis", "Sólo gratis"]].map(([k, t]) => `<span class="md-chip-wrap"><button type="button" class="md-chip md-sl md-label-large${k === "todos" ? " md-chip--selected" : ""}" data-f="${k}" aria-pressed="${k === "todos"}">${t}</button></span>`).join("")}</div>
      <ul class="vx-courses vx-pad-h" role="list" id="cList" data-stagger></ul><p class="md-body-medium vx-muted vx-pad-h vx-center-t">Estos son todos los cursos.</p></div>`);
      let area2 = "todos", gratis = false;
      const paint = () => {
        const l = cursosAcademia.filter((c) => (area2 === "todos" || c.area === area2) && (!gratis || !c.precio));
        el.querySelector("#cList").innerHTML = l.map((c, i) => `<li class="vx-course" style="--i:${i}"><button type="button" class="vx-course-main md-sl vx-press" data-go="M5.02?id=${c.id}"><span class="vx-pimg vx-course-img" aria-hidden="true">${icon("video", 32)}</span>
        <span class="vx-course-body"><span class="md-label-medium vx-muted">${c.area} · ${c.nivel}</span><span class="md-title-small">${esc(c.titulo)}</span><span class="md-body-medium">${esc(c.texto)}</span>
        <span class="md-body-medium vx-muted">${meta(c)}</span><b class="md-title-small vx-tab-num">${precio(c)}</b></span></button></li>`).join("") || `<li>${stateBlock({ icon: "book", title: "No hay cursos con ese filtro" })}</li>`;
      };
      el.addEventListener("click", (e) => {
        const c = e.target.closest("[data-f]");
        if (!c) return;
        const k = c.dataset.f;
        if (k === "gratis") gratis = !gratis;
        else area2 = k;
        $$("[data-f]", el).forEach((b) => {
          const on = b.dataset.f === "gratis" ? gratis : b.dataset.f === area2;
          b.classList.toggle("md-chip--selected", on);
          b.setAttribute("aria-pressed", on);
        });
        paint();
      });
      paint();
      return el;
    },
    mount(el, ctx) {
      if (ctx.first) $$("[data-stagger]", el).forEach(stagger);
    }
  });
  register("M5.02", {
    render(ctx) {
      const c = curso(ctx.params.id), ls = lecciones(c), hechas = avance(c.id).hechas, ins = state.academia.inscritos.includes(c.id);
      const min = c.temario ? ls.reduce((s, l) => s + l.m, 0) : c.min, clases = c.temario ? ls.length : c.clases;
      const stat = (n, l) => `<div class="vx-stat vx-stat--c"><b class="md-title-medium vx-tab-num">${n}</b><span class="md-body-small vx-muted">${l}</span></div>`;
      let g = 0;
      const temario = c.temario ? c.temario.map((t, ti) => `<section class="vx-module"><h3 class="md-title-small">${ti + 1} · ${esc(t.n)}</h3><ul class="vx-list" role="list">${t.l.map(([n, m]) => {
        const i = g++, libre = i < (c.gratis || 0), hecho = i < hechas;
        return `<li><button type="button" class="md-li md-li--2 md-sl vx-press vx-row" data-les="${i}"><span class="md-li-icon">${icon(hecho ? "check" : ins || libre ? "play" : "lock")}</span>
        <span class="md-li-text"><span class="md-li-title md-body-large">${esc(n)}</span><span class="md-li-sup md-body-medium vx-tab-num">${libre && !ins ? "Muestra gratis · " : hecho ? "Completada · " : ""}${m} min</span></span></button></li>`;
      }).join("")}</ul></section>`).join("") : stateBlock({ icon: "clock", title: "El temario llega pronto", text: "Todavía no está publicado en la demo." });
      const el = h(page(
        topbar("Curso", { trailing: iconBtn("share", "Compartir", 'data-toast="Enlace copiado"') }),
        `
      <section class="vx-pad-h"><p class="md-label-medium vx-muted">${c.area} · ${c.nivel}</p><h2 class="md-headline-small vx-h1c">${esc(c.titulo)}</h2><p class="md-body-large">${esc(c.resumen || c.texto)}</p></section>
      <div class="vx-stats3 vx-pad-h">${stat(clases, "clases")}${stat(min, "min de vídeo")}${stat(c.inscritos ?? "—", "inscritos")}${stat(num(c.rating, 1), "★")}</div>
      ${c.imparte ? `<p class="md-body-medium vx-pad-h">Imparte: <b>${esc(c.imparte)}</b></p>` : ""}
      ${c.sobre ? `<section class="vx-pad-h"><h2 class="md-title-medium">Sobre este curso</h2><p class="md-body-large">${esc(c.sobre)}</p>${c.gratis ? `<p>${statusTag("success", `${plural(c.gratis, "clase", "clases")} de muestra gratis`)}</p>` : ""}</section>` : ""}
      <section class="vx-pad-h"><h2 class="md-title-medium">Temario</h2>${temario}</section>`,
        `<div class="vx-actionsum"><span class="md-body-small vx-muted">${plural(clases, "clase", "clases")}</span><span class="md-title-large vx-tab-num">${precio(c)}</span></div>${btn(ins ? "Seguir el curso" : c.precio ? `Inscribirme por ${precio(c)}` : "Inscribirme gratis", { kind: "filled", id: "cGo" })}`
      ));
      el.querySelector("#cGo").addEventListener("click", () => {
        if (!state.academia.inscritos.includes(c.id)) {
          state.academia.inscritos.push(c.id);
          state.academia.avance[c.id] = { hechas: 0, sigue: ls[0]?.n || "" };
          set({ academia: state.academia });
          toast(`Te inscribiste en «${c.titulo}»`);
        }
        go(c.temario ? `M5.04` : "M5.03", { kind: "push", params: c.temario ? { c: c.id, l: String(Math.min(avance(c.id).hechas, ls.length - 1)) } : {} });
      });
      el.addEventListener("click", (e) => {
        const b = e.target.closest("[data-les]");
        if (!b) return;
        const i = Number(b.dataset.les), libre = i < (c.gratis || 0);
        if (state.academia.inscritos.includes(c.id) || libre) go("M5.04", { kind: "push", params: { c: c.id, l: String(i) } });
        else toast("Inscríbete para ver esta clase");
      });
      return el;
    }
  });
  register("M5.03", {
    render() {
      const ins = state.academia.inscritos.map(curso), enCurso = ins.filter((c) => !avance(c.id).completado && avance(c.id).hechas > 0), listos = ins.filter((c) => avance(c.id).completado);
      const lista = (c) => `<li class="vx-course"><button type="button" class="vx-course-main md-sl vx-press" data-go="${c.temario ? `M5.04?c=${c.id}&l=${Math.min(avance(c.id).hechas, lecciones(c).length - 1)}` : `M5.02?id=${c.id}`}">
      <span class="vx-pimg vx-course-img vx-course-img--s" aria-hidden="true">${icon("video", 24)}</span><span class="vx-course-body"><span class="md-title-small">${esc(c.titulo)}</span>
      ${avance(c.id).completado ? `<span>${statusTag("success", "Completado")}</span>` : `<span class="md-body-medium vx-muted vx-tab-num">${avance(c.id).hechas} de ${plural(c.clases, "lección", "lecciones")} · ${pctCurso(c)}%</span>${progress(pctCurso(c), `Avance de ${c.titulo}`)}<span class="md-body-small vx-muted">Sigue en: ${esc(avance(c.id).sigue || "")}</span>`}</span></button></li>`;
      const sigue = enCurso[0];
      return h(`<div>${topbar("Mis cursos", { back: false })}
      ${sigue ? `<section class="vx-pad-h"><h2 class="md-label-large vx-muted">Sigue donde lo dejaste</h2><div class="vx-card vx-resume"><p class="md-title-small">${esc(sigue.titulo)}</p><p class="md-title-medium vx-tab-num">${pctCurso(sigue)}%</p>${progress(pctCurso(sigue), `Avance de ${sigue.titulo}`)}
        <p class="md-body-medium vx-muted">Sigue en: ${esc(avance(sigue.id).sigue || "")}</p>${btn("Continuar", { kind: "filled", block: true, go: `M5.04?c=${sigue.id}&l=${Math.min(avance(sigue.id).hechas, lecciones(sigue).length - 1)}` })}</div></section>` : ""}
      ${enCurso.length ? `<h2 class="md-label-large vx-sub vx-sub--list">En curso</h2><ul class="vx-courses vx-pad-h" role="list">${enCurso.map(lista).join("")}</ul>` : ""}
      ${listos.length ? `<h2 class="md-label-large vx-sub vx-sub--list">Completados</h2><ul class="vx-courses vx-pad-h" role="list">${listos.map(lista).join("")}</ul>` : ""}
      ${ins.length ? "" : stateBlock({ icon: "book", title: "Todavía no sigues ningún curso" })}
      <ul class="vx-list" role="list">${row({ ic: "calendar", title: "Eventos", go: "M5.05" })}${row({ ic: "users", title: "Comunidad", go: "M5.06" })}${row({ ic: "star", title: "Mi nivel y mis puntos", go: "M5.10" })}</ul>
      <div class="vx-pad-h vx-pad-v">${btn("Ver la academia", { kind: "tonal", block: true, go: "M5.01" })}</div></div>`);
    }
  });
  register("M5.04", {
    render(ctx) {
      const c = curso(ctx.params.c || "inv"), ls = lecciones(c), i = Math.max(0, Math.min(ls.length - 1, Number(ctx.params.l ?? avance(c.id).hechas ?? 0)));
      const l = ls[i], hechas = avance(c.id).hechas, ins = state.academia.inscritos.includes(c.id), libre = i < (c.gratis || 0);
      if (!l || !ins && !libre) return h(`<div>${topbar(c.titulo)}${stateBlock({ icon: "lock", title: "Inscríbete para ver esta clase", action: btn("Ver el curso", { kind: "filled", go: `M5.02?id=${c.id}` }) })}</div>`);
      const corto = c.id === "inv" ? "Diagnóstico inverter" : c.titulo, dur = l.m * 60, ini = l.n === "Probar el IPM" && i >= hechas ? 9 * 60 : 0, hecho = i < hechas;
      const el = h(page(
        topbar(corto),
        `
      <section class="vx-pad-h"><p class="md-label-medium vx-muted">${esc(l.modulo)}</p><h2 class="md-headline-small vx-h1c">${esc(l.n)}</h2><p class="md-body-medium vx-muted vx-tab-num">${l.m} min</p></section>
      <div class="vx-player"><div class="vx-video" aria-hidden="true">${icon("video", 56)}</div>
        <div class="vx-pbar"><button type="button" class="md-iconbtn md-iconbtn--filled md-sl" id="pPlay" aria-label="Reproducir">${icon("play")}</button>
          <input type="range" class="vx-range vx-seek" id="pSeek" min="0" max="${dur}" step="1" value="${ini}" aria-label="Posición del vídeo"><span class="md-body-medium vx-tab-num" id="pTime"></span></div></div>
      ${ini ? '<p class="md-body-medium vx-pad-h">Retomamos donde lo dejaste, en el minuto 9</p>' : ""}
      <section class="vx-pad-h"><h2 class="md-title-medium">Materiales</h2><ul class="vx-orders vx-nopad" role="list">${materiales.map((m, k) => `<li class="vx-order"><div class="vx-order-main vx-static"><span class="md-li-icon">${icon("doc")}</span><span class="vx-order-text"><span class="md-body-large">${esc(m)}</span><span class="md-body-small vx-muted" id="matSt${k}"></span></span></div>
        <div class="vx-order-act">${btn("", { kind: "outlined", id: `mat${k}` })}</div></li>`).join("")}</ul><p class="md-body-medium vx-muted">Los materiales se pueden guardar para leerlos sin conexión.</p></section>
      <div class="vx-pad-h vx-twin">${i > 0 ? btn("Lección anterior", { kind: "text", id: "lPrev" }) : "<span></span>"}${i < ls.length - 1 ? btn("Lección siguiente", { kind: "text", id: "lNext" }) : "<span></span>"}</div>`,
        `<div class="vx-actionsum"><span class="md-body-small vx-muted">Suma puntos a tu nivel</span><span class="md-title-small vx-tab-num">+10 puntos</span></div>${btn(hecho ? "Completada" : "Marcar como completada", { kind: "filled", id: "lDone", attrs: hecho ? "disabled" : "" })}`
      ));
      const seek = el.querySelector("#pSeek"), t = el.querySelector("#pTime"), play2 = el.querySelector("#pPlay");
      const paintT = () => {
        t.textContent = `${mmss(Number(seek.value))} / ${mmss(dur)}`;
        seek.setAttribute("aria-valuetext", t.textContent);
      };
      const matKey = (k) => `${c.id}:${k}`;
      const paintMat = () => materiales.forEach((m, k) => {
        const on = !!state.academia.offline[matKey(k)];
        el.querySelector(`#mat${k}`).innerHTML = on ? `${icon("check", 18)}Guardado en el teléfono` : `${icon("download", 18)}Guardar para leer sin conexión`;
        el.querySelector(`#matSt${k}`).textContent = on ? "Disponible sin conexión" : "";
      });
      seek.addEventListener("input", paintT);
      let timer = null;
      const stop = () => {
        clearInterval(timer);
        timer = null;
        play2.innerHTML = icon("play");
        play2.setAttribute("aria-label", "Reproducir");
      };
      play2.addEventListener("click", () => {
        if (timer) {
          stop();
          return;
        }
        play2.innerHTML = icon("pause");
        play2.setAttribute("aria-label", "Pausar");
        timer = setInterval(() => {
          seek.value = Number(seek.value) + 1;
          paintT();
          if (Number(seek.value) >= dur) {
            stop();
            if (!hecho) toast("Terminaste la clase: márcala como completada");
          }
        }, 1e3);
      });
      el.addEventListener("click", (e) => {
        const b = e.target.closest("[id^=mat]");
        if (!b || !/^mat\d$/.test(b.id)) return;
        const k = Number(b.id.slice(3));
        state.academia.offline[matKey(k)] = !state.academia.offline[matKey(k)];
        paintMat();
        toast(state.academia.offline[matKey(k)] ? "Guardado en el teléfono" : "Quitaste el material del teléfono");
      });
      const nav = (n) => go("M5.04", { kind: "smart", params: { c: c.id, l: String(n) } });
      el.querySelector("#lPrev")?.addEventListener("click", () => nav(i - 1));
      el.querySelector("#lNext")?.addEventListener("click", () => nav(i + 1));
      el.querySelector("#lDone").addEventListener("click", (e) => {
        const a = state.academia, av = a.avance[c.id] || (a.avance[c.id] = { hechas: 0 });
        av.hechas = Math.max(av.hechas, i + 1);
        av.sigue = ls[i + 1]?.n || "";
        if (av.hechas >= c.clases) av.completado = true;
        a.puntos += 10;
        a.historial.unshift({ t: "Lección completada", fecha: date(HOY).slice(0, 5), p: 10 });
        set({ academia: a });
        e.currentTarget.disabled = true;
        e.currentTarget.textContent = "Completada";
        toast("+10 puntos para tu nivel");
      });
      paintT();
      paintMat();
      el.__stop = stop;
      return el;
    },
    mount(el) {
      return () => el.__stop && el.__stop();
    }
  });
  register("M5.05", {
    render() {
      const el = h(`<div>${topbar("Eventos")}
      <section class="vx-pad-h"><p class="md-label-large vx-live-tag"><span class="vx-live-dot vx-live" aria-hidden="true"></span> EN VIVO AHORA</p><div class="vx-card vx-livecard"><p class="md-title-small">${esc(eventos.vivo.titulo)}</p><p class="md-body-medium vx-muted">${esc(eventos.vivo.por)}</p>
        ${btn(`${icon("video", 20)}Unirme ahora`, { kind: "filled", block: true, attrs: 'data-toast="Abre la transmisión en vivo"' })}</div></section>
      <h2 class="md-label-large vx-sub vx-sub--list">Próximos</h2><ul class="vx-orders vx-pad-h" role="list" id="evList"></ul>
      <h2 class="md-label-large vx-sub vx-sub--list">Ya pasaron</h2><ul class="vx-list" role="list">${eventos.pasados.map((p) => row({ ic: "video", title: esc(p.titulo), end: `<span class="md-body-small vx-tab-num">${p.fecha}</span>`, attrs: 'data-toast="Abre el resumen del evento"' })).join("")}</ul></div>`);
      const paint = () => {
        el.querySelector("#evList").innerHTML = eventos.proximos.map((ev) => {
          const ap = state.academia.eventos[ev.id], quedan2 = ev.cupo - ev.inscritos - (ap ? 1 : 0), llenos = quedan2 <= 0 && !ap;
          return `<li class="vx-order"><div class="vx-order-main vx-static"><span class="vx-order-text"><span class="md-title-small">${esc(ev.titulo)}</span><span class="md-body-medium vx-tab-num">${ev.cuando} · ${ev.hora} (hora de tu teléfono) · ${ev.dur}</span>
        <span class="md-body-medium vx-muted">${esc(ev.por)} · ${esc(ev.donde)}</span><span class="md-body-medium vx-tab-num">Quedan ${quedan2} de ${ev.cupo} plazas</span>${ap ? `<span>${statusTag("success", "Apuntado")}</span>` : ""}</span></div>
        <div class="vx-order-act">${ap ? btn("Cancelar mi lugar", { kind: "text", attrs: `data-ev="${ev.id}"` }) : btn(llenos ? "Sin plazas" : "Apuntarme", { kind: "tonal", attrs: `data-ev="${ev.id}"${llenos ? " disabled" : ""}` })}</div></li>`;
        }).join("");
      };
      el.addEventListener("click", (e) => {
        const b = e.target.closest("[data-ev]");
        if (!b) return;
        const id = b.dataset.ev;
        state.academia.eventos[id] = !state.academia.eventos[id];
        set({ academia: state.academia });
        paint();
        toast(state.academia.eventos[id] ? "Te apuntaste. Te avisamos antes de que empiece." : "Cancelaste tu lugar");
      });
      paint();
      return el;
    }
  });
  register("M5.06", {
    render() {
      const el = h(`<div>${topbar("Comunidad técnica")}<div class="vx-pad">${field({ id: "fq", label: "Busca una avería en todos los foros", type: "search", autocomplete: "off" })}</div>
      <div id="fqRes" class="vx-pad-h" aria-live="polite" hidden></div>
      <ul class="vx-list" role="list" id="foroList">${forosAcademia.map((f) => row({ ic: "users", title: esc(f.nombre), sup: `${f.area} · ${f.n} preguntas`, go: `M5.07?id=${f.id}` })).join("")}</ul>
      <p class="md-body-medium vx-muted vx-pad-h">Puedes leer todo. Preguntar y responder es para técnicos.</p><div class="vx-pad-h">${btn("Trabaja como técnico", { kind: "filled", block: true, go: "M6.25?doc=tecnico" })}</div></div>`);
      el.querySelector("#fq").addEventListener("input", (e) => {
        const q = e.target.value.trim().toLowerCase(), box = el.querySelector("#fqRes"), lista = el.querySelector("#foroList");
        if (!q) {
          box.hidden = true;
          lista.hidden = false;
          return;
        }
        const r = state.preguntas.filter((p) => p.t.toLowerCase().includes(q) || p.cuerpo.toLowerCase().includes(q));
        box.hidden = false;
        lista.hidden = true;
        box.innerHTML = r.length ? `<ul class="vx-list" role="list">${r.map((p) => row({ ic: "chat", title: esc(p.t), sup: `${forosAcademia.find((f) => f.id === p.foro).nombre} · ${p.cuando}`, go: `M5.08?id=${p.id}` })).join("")}</ul>` : stateBlock({ icon: "searchoff", title: "No encontramos esa avería", text: "Prueba con el código de error o el síntoma." });
      });
      return el;
    }
  });
  register("M5.07", {
    render(ctx) {
      const f = forosAcademia.find((x) => x.id === ctx.params.id) || forosAcademia[0];
      const el = h(page(
        topbar(f.nombre),
        `
      <p class="md-body-medium vx-muted vx-pad-h">${f.area} · ${f.n} preguntas</p><div class="vx-pad-h">${field({ id: "foroQ", label: "Buscar en este foro", type: "search", autocomplete: "off" })}</div>
      <div class="vx-pad-h"><div class="md-seg" role="tablist" aria-label="Filtrar preguntas">${[["todas", "Todas"], ["sin", "Sin responder"], ["resuelta", "Resueltas"]].map(([k, t], i) => `<button type="button" role="tab" class="md-seg-item md-sl md-label-large${i === 0 ? " md-seg-item--on" : ""}" data-seg="${k}" aria-selected="${i === 0}">${t}</button>`).join("")}</div></div>
      <ul class="vx-orders vx-pad-h" role="list" id="qList"></ul>`,
        btn(`${icon("add", 20)}Preguntar`, { kind: "filled", block: true, go: `M5.09?foro=${f.id}` })
      ));
      let seg2 = "todas", q = "";
      const paint = () => {
        const l = state.preguntas.filter((p) => p.foro === f.id && (seg2 === "todas" || (seg2 === "sin" ? p.estado === "sin" : p.estado === "resuelta")) && p.t.toLowerCase().includes(q));
        el.querySelector("#qList").innerHTML = l.map((p) => {
          const n = p.respuestas.length || p.nResp || 0;
          return `<li class="vx-order"><button type="button" class="vx-order-main md-sl vx-press" data-go="M5.08?id=${p.id}"><span class="vx-order-text"><span>${p.estado === "resuelta" ? statusTag("success", "Resuelta") : p.estado === "sin" ? statusTag("neutral", "Sin respuesta") : statusTag("info", plural(n, "respuesta", "respuestas"))}</span>
          <span class="md-title-small">${esc(p.t)}</span><span class="md-body-medium vx-muted">${esc(p.autor)}${p.insignia ? ` · ${p.insignia}` : ""} · ${p.cuando}</span>${p.fotos ? `<span class="md-body-small vx-muted">${icon("camera", 14)} ${plural(p.fotos, "foto", "fotos")}</span>` : ""}</span></button></li>`;
        }).join("") || `<li>${stateBlock({ icon: "chat", title: "No hay preguntas con ese filtro" })}</li>`;
      };
      el.addEventListener("click", (e) => {
        const b = e.target.closest("[data-seg]");
        if (!b) return;
        seg2 = b.dataset.seg;
        $$("[data-seg]", el).forEach((x) => {
          const on = x === b;
          x.classList.toggle("md-seg-item--on", on);
          x.setAttribute("aria-selected", on);
        });
        paint();
      });
      el.querySelector("#foroQ").addEventListener("input", (e) => {
        q = e.target.value.trim().toLowerCase();
        paint();
      });
      paint();
      el.__un = subscribe(paint);
      return el;
    },
    mount(el) {
      return el.__un;
    }
  });
  register("M5.08", {
    render(ctx) {
      const p = state.preguntas.find((x) => x.id === ctx.params.id) || state.preguntas[0];
      const el = h(page(
        topbar("Pregunta", { trailing: `${iconBtn("bookmark", "Guardar pregunta", 'data-toast="Guardaste la pregunta"')}${iconBtn("share", "Compartir", 'data-toast="Enlace copiado"')}` }),
        `
      <section class="vx-pad-h"><p id="rEstado"></p>
        <h2 class="md-headline-small vx-h1c">${esc(p.t)}</h2><p class="md-body-medium vx-muted">${esc(p.autor)}${p.insignia ? ` · ${p.insignia}` : ""} · ${p.cuando}</p><p class="md-body-large">${esc(p.cuerpo)}</p></section>
      <h2 class="md-title-medium vx-pad-h" id="rTit"></h2><ul class="vx-thread vx-answers vx-pad-h" role="list" id="rList"></ul>
      <div class="vx-pad-h" id="rComp" hidden>${area({ id: "rTexto", label: "Tu respuesta", rows: 4 })}<div class="vx-row-end">${btn("Publicar respuesta", { kind: "filled", id: "rPub" })}</div></div>`,
        btn("Escribir una respuesta", { kind: "filled", block: true, id: "rAbrir" })
      ));
      const paint = () => {
        const l = [...p.respuestas].sort((a, b) => (b.resolvio ? 1 : 0) - (a.resolvio ? 1 : 0));
        el.querySelector("#rEstado").innerHTML = p.estado === "resuelta" ? statusTag("success", "Resuelta") : p.estado === "sin" ? statusTag("neutral", "Sin respuesta") : statusTag("info", "Con respuestas");
        el.querySelector("#rTit").textContent = p.respuestas.length ? plural(p.respuestas.length, "respuesta", "respuestas") : "Todavía sin respuestas";
        el.querySelector("#rList").innerHTML = l.map((r) => `<li class="vx-ans">${r.resolvio ? `<p>${statusTag("success", "Le resolvió a quien preguntó")}</p>` : ""}<p class="md-body-large">${esc(r.t)}</p>
        <p class="md-body-medium vx-muted">${esc(r.autor)}${r.insignia ? ` · ${r.insignia}` : ""}</p>${btn(`${icon("thumb", 18)}Útil · <span class="vx-tab-num">${r.utiles || 0}</span>`, { kind: "text", attrs: `data-util="${r.id}" aria-pressed="${!!r.miUtil}"` })}</li>`).join("");
      };
      el.addEventListener("click", (e) => {
        const u = e.target.closest("[data-util]");
        if (!u) return;
        const r = p.respuestas.find((x) => x.id === u.dataset.util);
        r.miUtil = !r.miUtil;
        r.utiles = (r.utiles || 0) + (r.miUtil ? 1 : -1);
        paint();
      });
      el.querySelector("#rAbrir").addEventListener("click", () => {
        const c = el.querySelector("#rComp");
        c.hidden = false;
        el.querySelector("#rTexto").focus();
      });
      el.querySelector("#rPub").addEventListener("click", () => {
        const t = el.querySelector("#rTexto").value.trim();
        fieldError(el, "rTexto", !t ? "Escribe tu respuesta" : "");
        if (!t) return;
        p.respuestas.push({ id: "r" + Date.now(), autor: "Aníbal Lejarazu", t, utiles: 0 });
        if (p.estado === "sin") p.estado = "respuestas";
        el.querySelector("#rTexto").value = "";
        el.querySelector("#rComp").hidden = true;
        paint();
        toast("Publicaste tu respuesta");
      });
      paint();
      return el;
    }
  });
  register("M5.09", {
    render(ctx) {
      const f = forosAcademia.find((x) => x.id === ctx.params.foro) || forosAcademia[0], a = state.academia;
      let fotos = 0;
      const el = h(`<div class="vx-page"><header class="vx-sheet-head vx-flowhead"><h2 id="sheet-title" class="md-title-large md-sheet-title" tabindex="-1">Nueva pregunta</h2>${iconBtn("close", "Cerrar", "data-close")}</header>
      <div class="vx-body vx-pad-h"><p class="md-body-large">En ${esc(f.nombre)}</p><p class="md-body-medium vx-tab-num" id="qLeft" role="status"></p><p class="md-body-medium vx-muted">Todavía no puedes poner enlaces. Este límite se quita el 23/10.</p>
        <form class="vx-form" novalidate onsubmit="return false">${field({ id: "qTitulo", label: "Título de tu pregunta" })}${area({ id: "qDetalle", label: "Cuéntanos qué pasa", rows: 5 })}</form>
        ${btn(`${icon("camera", 20)}Añadir foto`, { kind: "outlined", id: "qFoto" })}</div>
      <footer class="vx-actionbar">${btn("Publicar pregunta", { kind: "filled", block: true, id: "qPub" })}</footer></div>`);
      const left = () => {
        el.querySelector("#qLeft").textContent = a.preguntasHoy > 0 ? `Te quedan ${plural(a.preguntasHoy, "pregunta", "preguntas")} hoy.` : "Ya hiciste tus preguntas de hoy. Vuelve mañana.";
        el.querySelector("#qPub").disabled = a.preguntasHoy <= 0;
      };
      el.querySelector("#qFoto").addEventListener("click", (e) => {
        fotos = Math.min(3, fotos + 1);
        e.currentTarget.innerHTML = `${icon("camera", 20)}Añadir foto · ${plural(fotos, "foto", "fotos")}`;
      });
      el.querySelector("#qPub").addEventListener("click", async () => {
        const t = el.querySelector("#qTitulo").value.trim(), d = el.querySelector("#qDetalle").value.trim(), link = /(https?:\/\/|www\.)/i;
        fieldError(el, "qTitulo", !t ? "Escribe el título" : link.test(t) ? "Todavía no puedes poner enlaces" : "");
        fieldError(el, "qDetalle", !d ? "Cuéntanos qué pasa" : link.test(d) ? "Todavía no puedes poner enlaces" : "");
        if (!t || !d || link.test(t) || link.test(d)) return;
        state.preguntas.unshift({ id: "q" + Date.now(), foro: f.id, t, estado: "sin", autor: "Aníbal Lejarazu", cuando: "ahora", fotos, cuerpo: d, respuestas: [] });
        a.preguntasHoy -= 1;
        set({ preguntas: state.preguntas, academia: a });
        toast("Publicaste tu pregunta");
        await closeOverlay();
      });
      left();
      return el;
    }
  });
  register("M5.10", {
    render() {
      const a = state.academia, n = nivelDe(a.puntos), sg = (v) => (v < 0 ? "−" : "+") + Math.abs(v);
      return h(`<div>${topbar("Mi nivel")}<section class="vx-pad-h vx-levelbox"><p class="md-label-medium vx-muted">Nivel ${n.num} de 8</p><h2 class="md-headline-small vx-h1c">${n.nombre}</h2>
        <p class="md-title-large vx-tab-num">${num(a.puntos, 0)} puntos</p>${progress(n.pct, `Avance hacia ${n.sig}`)}<p class="md-body-medium vx-tab-num">${n.pct}%${n.sig ? ` · Te faltan ${num(n.faltan, 0)} para ${n.sig}` : ""}</p></section>
      <h2 class="md-label-large vx-sub vx-sub--list">Cómo sumar puntos</h2><ul class="vx-list" role="list">${row({ ic: "book", title: "Seguir un curso", go: "M5.03" })}${row({ ic: "chat", title: "Responder en la comunidad", go: "M5.06" })}${row({ ic: "calendar", title: "Ir a un evento", go: "M5.05" })}</ul>
      <h2 class="md-label-large vx-sub vx-sub--list">De dónde salieron</h2><ul class="vx-list" role="list">${a.historial.map((x) => `<li class="md-li md-li--2"><span class="md-li-text"><span class="md-li-title md-body-large">${esc(x.t)}</span><span class="md-li-sup md-body-medium vx-tab-num">${x.fecha}</span></span>
        <span class="md-li-end"><b class="md-title-small vx-tab-num ${x.p < 0 ? "vx-neg" : ""}">${sg(x.p)}</b></span></li>`).join("")}</ul>
      <h2 class="md-label-large vx-sub vx-sub--list">Los niveles</h2><ul class="vx-list" role="list">${niveles.map(([nm, p], i) => `<li class="md-li md-li--2${i === n.idx ? " vx-here" : ""}"><span class="md-li-text"><span class="md-li-title md-body-large">${nm}</span>${i === n.idx ? `<span class="md-li-sup md-body-medium">${statusTag("info", "estás aquí")}</span>` : ""}</span><span class="md-li-end md-body-medium vx-tab-num">${num(p, 0)} pts</span></li>`).join("")}</ul></div>`);
    }
  });

  // assets/js/screens/m6a.js
  var KIND = { "Falta pagar": "warning", "Pago reportado": "info", "En camino": "info", Entregado: "success", Pagado: "success", "En mediación": "info", Resuelto: "success", "En revisión": "info" };
  var tag = (estado, extra = "") => statusTag(KIND[estado] || "neutral", estado + extra);
  var thumb2 = (n = 24, p = null) => `<span class="vx-thumb-ph vx-thumb-ph--sm vx-photo" aria-hidden="true">${productArt(p)}</span>`;
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
      const u = usuario, kv2 = (k, v) => `<div class="vx-kv"><dt class="md-body-medium vx-muted">${k}</dt><dd class="md-body-large">${v}</dd></div>`;
      return h(`<div>${topbar("Datos personales")}<div class="vx-center vx-pad">${avatar(u.iniciales, true)}</div>
      <dl class="vx-pad-h vx-dl">${kv2("Nombre", esc(u.nombre))}${kv2("Correo", esc(u.correo))}${kv2("País activo", "Venezuela")}${kv2("Verificación en dos pasos", state.dosPasos ? statusTag("success", "Activa") : "Sin activar")}</dl>
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
      const kv2 = (k, v) => `<div class="vx-kv"><dt class="md-body-medium vx-muted">${k}</dt><dd class="md-body-large vx-tab-num">${v}</dd></div>`;
      const el = h(page(
        topbar("Abrir reclamo"),
        `
      <p class="md-body-large vx-pad-h">VexBiz revisa el caso y decide. La tienda verá lo que escribas.</p>
      <dl class="vx-pad-h vx-dl">${kv2("Pedido", o.id)}${kv2("Tienda", esc(o.tienda))}${kv2("Total", money(o.total))}</dl>
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
      const dias2 = (d) => Math.round((d - HOY) / 864e5);
      return h(`<div>${topbar("Garantías")}<ul class="vx-orders vx-pad-h" role="list">${garantias.map((g) => {
        const n = dias2(g.hasta), ok = n > 0;
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

  // assets/js/screens/m7a.js
  var S = () => state.shop;
  var subtotalPedido = (o) => round2(o.lineas.reduce((s, l) => s + l[2] * l[3], 0));
  var totalPedido = (o) => round2(subtotalPedido(o) + o.envio);
  var comisionDe = (t) => pct(t, COMISION);
  var netoPedido = (o) => round2(totalPedido(o) - comisionDe(totalPedido(o)));
  var unidades = (o) => o.lineas.reduce((s, l) => s + l[2], 0);
  var existencias = (p) => p.inicial + p.mov.reduce((s, m) => s + m[0], 0);
  var porDespachar = () => S().pedidos.filter((o) => o.status === "pagado");
  var buscarPedido2 = (id) => [...S().pedidos, ...S().mas].find((o) => o.id === id) || S().pedidos[0];
  var modoLbl = () => '<p class="md-label-medium vx-muted vx-pad-h vx-modolbl">Modo Tienda</p>';
  var avisosBtn = () => iconBtn("bell", "Avisos en vivo", 'data-go="O.AVI"');
  var thumb3 = (n = 24, p = null) => `<span class="vx-thumb-ph vx-thumb-ph--sm vx-photo" aria-hidden="true">${productArt(p)}</span>`;
  var retiroTag = () => `<span class="vx-tag md-label-small">${icon("store", 14)}Retiro en tienda</span>`;
  var cuenta = (ms) => clock(ms, { pad: true });
  register("M7.01", {
    render(ctx) {
      const tile = (k, v, sub, to) => `<button type="button" class="vx-kpi md-sl vx-press" data-go="${to}" data-kind="swap"><span class="md-body-medium vx-muted">${k}</span><b class="md-headline-small vx-tab-num">${v}</b><span class="md-body-small vx-muted">${sub}</span></button>`;
      const el = h(`<div>${topbar("Frío Total", { back: false, trailing: avisosBtn() })}${modoLbl()}
      <section class="vx-pad-h" id="ahora"></section>
      <section class="vx-sec vx-reveal"><div class="vx-sechead"><h2 class="md-title-large" id="pdTit"></h2>${btn("Ver todos", { kind: "text", go: "M7.03", kindNav: "swap" })}</div><ul class="vx-orders vx-pad-h" role="list" id="pdList" data-stagger></ul></section>
      <section class="vx-sec vx-reveal vx-pad-h"><div class="vx-kpis">${tile("Ventas brutas", `$ ${num(Math.floor(ventas.bruto), 0)}`, "USD · 12 meses", "M7.11")}${tile("Ingreso neto", `$ ${num(Math.floor(ventas.neto), 0)}`, "USD · 12 meses", "M7.11")}</div></section>
      <ul class="vx-list vx-reveal" role="list" id="inList"></ul>
      <div class="vx-pad-h vx-pad-v vx-reveal">${btn(`${icon("eye", 20)}Cómo se ve mi tienda`, { kind: "tonal", block: true, go: "M7.19" })}</div></div>`);
      const paint = () => {
        const s = S(), pend = s.pendientes, pd = porDespachar();
        el.querySelector("#ahora").innerHTML = pend.length ? `<h2 class="md-label-large vx-eyebrow">Contestar ahora</h2><div class="vx-card vx-nowcard"><p class="md-title-medium">${plural(pend.length, "cliente quiere", "clientes quieren")} comprarte</p>
           <p class="md-headline-small vx-tab-num" id="ahoraT" aria-live="off"></p><span class="vx-bar-track" aria-hidden="true"><span class="vx-bar-fill" id="ahoraB"></span></span><p class="vx-urgent" id="ahoraU" hidden>${icon("warning", 18)} Queda menos de un minuto</p>${btn("Contestar", { kind: "filled", block: true, go: "M7.02" })}</div>` : `<div class="vx-card vx-nowcard"><p class="md-title-medium">No hay ventas por contestar</p><p class="md-body-medium vx-muted">Cuando un cliente quiera comprarte, aparece aquí.</p></div>`;
        el.querySelector("#pdTit").textContent = `Por despachar · ${plural(pd.length, "pedido", "pedidos")}`;
        el.querySelector("#pdList").innerHTML = pd.slice(0, 3).map((o, i) => `<li class="vx-order" style="--i:${i}"><button type="button" class="vx-order-main md-sl vx-press" data-go="M7.04?id=${encodeURIComponent(o.id)}"><span class="vx-order-text"><span class="md-title-small vx-tab-num">${o.id}</span>
        <span class="md-body-medium">${esc(o.cliente)}</span>${o.retiro ? `<span>${retiroTag()}</span>` : ""}</span><b class="md-title-small vx-tab-num">${money(totalPedido(o))}</b></button></li>`).join("") || `<li>${stateBlock({ icon: "check", title: "No tienes pedidos por despachar" })}</li>`;
        const cart = s.carritos.length ? 7 : 0, apart = s.apartadas.reduce((n, a) => n + a.qty, 0);
        el.querySelector("#inList").innerHTML = row({ ic: "cart", title: "Carritos abiertos", end: `<b class="vx-tab-num">${cart}</b>`, go: "M7.09" }) + row({ ic: "box", title: "Unidades apartadas", end: `<b class="vx-tab-num">${apart}</b>`, go: "M7.09" });
      };
      paint();
      el.__un = subscribe(paint);
      el.__tick = setInterval(() => {
        const p = S().pendientes[0], t = el.querySelector("#ahoraT");
        if (!p || !t) return;
        const ms = p.venceAt - Date.now();
        t.textContent = cuenta(ms);
        const bar = el.querySelector("#ahoraB");
        if (bar && !bar.dataset.on) {
          bar.dataset.on = "1";
          bar.classList.add("vx-countbar");
          bar.style.setProperty("--vx-count", Math.max(ms, 0) + "ms");
        }
        const urg = ms < 6e4;
        t.classList.toggle("vx-is-urgent", urg);
        el.querySelector("#ahoraU").hidden = !urg;
        if (ms <= 0) {
          S().pendientes.shift();
          S().resueltas += 1;
          set({ shop: S() });
          toast("Una venta pasó a otra tienda porque no se contestó a tiempo");
        }
      }, 500);
      return el;
    },
    mount(el, ctx) {
      if (ctx.first) $$("[data-stagger]", el).forEach(stagger);
      reveal(el);
      return () => {
        el.__un();
        clearInterval(el.__tick);
      };
    }
  });
  register("M7.02", {
    render() {
      const el = h(`<div>${topbar("Confirmar venta")}<div id="cvBody" class="vx-pad-h vx-stack"></div></div>`);
      const paint = () => {
        const s = S(), p = s.pendientes[0], box = el.querySelector("#cvBody");
        if (!p) {
          box.innerHTML = stateBlock({ icon: "check", title: "No tienes ventas por contestar", action: btn("Volver al inicio", { kind: "filled", go: "M7.01", kindNav: "swap" }) });
          return;
        }
        const total = round2(p.qty * p.precio), pos = s.resueltas + 1, de = s.resueltas + s.pendientes.length, falta = p.stock < p.qty;
        box.innerHTML = `<p class="md-title-small vx-tab-num">${pos} de ${de}</p><p class="md-headline-small vx-tab-num" id="cvT"></p><p class="md-body-medium vx-muted">para contestar</p><span class="vx-bar-track" aria-hidden="true"><span class="vx-bar-fill vx-countbar" id="cvB"></span></span>
        <p class="vx-urgent" id="cvU" hidden>${icon("warning", 18)} Queda menos de un minuto</p><p class="md-body-medium">Si no contestas a tiempo, la venta pasa a otra tienda.</p>
        <p class="md-label-medium">Te la ofrecen: ${esc(p.motivo)}</p><div class="vx-card vx-card--p"><p class="md-title-small">${esc(p.producto)}</p><p class="md-body-medium vx-muted">Tu código: ${esc(p.codigo)}</p></div>
        <dl class="vx-dl"><div class="vx-kv"><dt class="md-body-medium vx-muted">Cantidad × precio</dt><dd class="md-body-large vx-tab-num">${p.qty} × ${money(p.precio)} USD</dd></div><div class="vx-kv"><dt class="md-body-medium vx-muted">Comprador</dt><dd class="md-body-large">${esc(p.comprador)}</dd></div>
          <div class="vx-kv"><dt class="md-body-medium vx-muted">Total</dt><dd class="md-title-medium vx-tab-num">${money(total)}</dd></div></dl>
        ${falta ? banner("warning", `Te quedan ${p.stock} y te piden ${p.qty}.`) : ""}
        <div class="vx-stack">${btn(falta ? `Confirmar las ${p.qty} unidades` : "Confirmar la venta", { kind: "filled", block: true, attrs: `data-ok${falta ? " disabled" : ""}` })}${falta ? btn(`Ofrecer ${plural(p.stock, "unidad", "unidades")}`, { kind: "outlined", block: true, attrs: "data-oferta" }) : ""}${btn("No puedo venderla", { kind: "text", block: true, attrs: "data-no" })}</div>`;
        const bar = box.querySelector("#cvB");
        bar.style.setProperty("--vx-count", Math.max(p.venceAt - Date.now(), 0) + "ms");
      };
      const resolver = (msg) => {
        const s = S();
        s.pendientes.shift();
        s.resueltas += 1;
        set({ shop: s });
        toast(msg);
        if (!s.pendientes.length) go("M7.01", { kind: "swap" });
        else paint();
      };
      el.addEventListener("click", (e) => {
        const p = S().pendientes[0];
        if (!p) return;
        if (e.target.closest("[data-ok]")) resolver(`Confirmaste la venta a ${p.comprador}`);
        if (e.target.closest("[data-oferta]")) resolver(`Ofreciste ${plural(p.stock, "unidad", "unidades")} a ${p.comprador} por ${money(round2(p.stock * p.precio))}`);
        if (e.target.closest("[data-no]")) resolver("La venta pasa a otra tienda");
      });
      paint();
      el.__tick = setInterval(() => {
        const p = S().pendientes[0], t = el.querySelector("#cvT");
        if (!p || !t) return;
        const ms = p.venceAt - Date.now();
        t.textContent = cuenta(ms);
        const urg = ms < 6e4;
        t.classList.toggle("vx-is-urgent", urg);
        el.querySelector("#cvU").hidden = !urg;
        if (ms <= 0) resolver("La venta pasó a otra tienda porque no se contestó a tiempo");
      }, 500);
      return el;
    },
    mount(el) {
      return () => clearInterval(el.__tick);
    }
  });
  register("M7.03", {
    render() {
      const el = h(`<div>${topbar("Pedidos", { back: false, trailing: avisosBtn() })}${modoLbl()}<div class="vx-pad-h vx-stack" id="pedAviso"></div>
      <div class="vx-pad-h"><div class="md-seg" role="tablist" aria-label="Ver pedidos">${[["pend", "Por despachar"], ["todos", "Todos"]].map(([k, t], i) => `<button type="button" role="tab" class="md-seg-item md-sl md-label-large${i === 0 ? " md-seg-item--on" : ""}" data-seg="${k}" aria-selected="${i === 0}">${t}</button>`).join("")}</div></div>
      <ul class="vx-orders vx-pad-h" role="list" id="pedList" data-stagger></ul><div id="pedMas" class="vx-pad-h" aria-live="polite"></div>
      <p class="md-body-small vx-muted vx-pad-h">«Te quedan» es el total menos la comisión de VexBiz fijada el día de la compra.</p></div>`);
      let seg2 = "pend", cargando = false;
      const card = (o, i) => `<li class="vx-order" style="--i:${i}"><button type="button" class="vx-order-main md-sl vx-press" data-go="M7.04?id=${encodeURIComponent(o.id)}"><span class="vx-order-text"><span class="md-title-small vx-tab-num">${o.id}</span>
      <span>${o.status === "pagado" ? statusTag("warning", "Pagado: hay que despacharlo") : statusTag("success", "Despachado")}</span><span class="md-body-medium">${esc(o.cliente)}</span><span class="md-body-medium vx-muted vx-tab-num">${esc(o.ciudad)} · ${o.fecha}</span>
      <span class="md-body-medium">${plural(unidades(o), "artículo", "artículos")}${o.retiro ? "" : ""}</span>${o.retiro ? `<span>${retiroTag()}</span>` : ""}</span>
      <span class="vx-order-end"><b class="md-title-small vx-tab-num">Total ${money(totalPedido(o))}</b><span class="md-body-small vx-muted vx-tab-num">Te quedan: ${money(netoPedido(o))}</span></span></button></li>`;
      const paint = () => {
        const s = S(), todos = [...s.pedidos, ...s.masCargado ? s.mas : []], l = seg2 === "pend" ? todos.filter((o) => o.status === "pagado") : todos, n = porDespachar().length;
        el.querySelector("#pedAviso").innerHTML = n ? banner("info", "Hay pedidos nuevos") : "";
        el.querySelector("#pedList").innerHTML = l.map(card).join("") || `<li>${stateBlock({ icon: "check", title: "No tienes pedidos por despachar" })}</li>`;
        el.querySelector("#pedMas").innerHTML = cargando ? `<div class="vx-skeleton" aria-busy="true"><div class="vx-skel vx-skel-line"></div><div class="vx-skel vx-skel-hero"></div></div><p class="md-body-medium vx-muted vx-center-t">Cargando más pedidos…</p>` : s.masCargado ? '<p class="md-body-medium vx-muted vx-center-t">No hay más</p>' : '<span id="sent" aria-hidden="true"></span>';
      };
      el.addEventListener("click", (e) => {
        const b = e.target.closest("[data-seg]");
        if (!b) return;
        seg2 = b.dataset.seg;
        $$("[data-seg]", el).forEach((x) => {
          const on = x === b;
          x.classList.toggle("md-seg-item--on", on);
          x.setAttribute("aria-selected", on);
        });
        paint();
        watch();
      });
      let io = null;
      const watch = () => {
        io?.disconnect();
        const sent = el.querySelector("#sent");
        if (!sent || S().masCargado) return;
        io = new IntersectionObserver((es) => {
          if (!es[0].isIntersecting || cargando) return;
          cargando = true;
          paint();
          setTimeout(() => {
            S().masCargado = true;
            cargando = false;
            paint();
          }, 700);
        }, { root: el.closest(".screen") || null });
        io.observe(sent);
      };
      paint();
      el.__un = subscribe(() => {
        paint();
      });
      el.__watch = watch;
      el.__io = () => io?.disconnect();
      return el;
    },
    mount(el, ctx) {
      if (ctx.first) $$("[data-stagger]", el).forEach(stagger);
      setTimeout(() => el.__watch(), 400);
      return () => {
        el.__un();
        el.__io();
      };
    }
  });
  register("M7.04", {
    render(ctx) {
      const o = buscarPedido2(decodeURIComponent(ctx.params.id || "#VX-20412")), st = S().despacho[o.id] || (S().despacho[o.id] = { emp: o.lineas.map(() => false) });
      const total = totalPedido(o), com = comisionDe(total), neto = round2(total - com), ya = o.status === "despachado";
      const r = (k, v, strong) => `<div class="vx-sumrow${strong ? " is-strong" : ""}"><dt class="md-body-large">${k}</dt><dd class="md-body-large vx-tab-num">${v}</dd></div>`;
      const el = h(page(
        topbar(esc(o.id), { trailing: iconBtn("phone", "Llamar al comprador", 'data-toast="Abre el teléfono con el número del comprador"') }),
        `
      <section class="vx-pad-h"><p>${ya ? statusTag("success", "Despachado") : statusTag("warning", "Pagado: hay que despacharlo")}</p><p class="md-body-medium vx-muted vx-tab-num">Recibido el ${o.fecha} · ${o.hora}</p></section>
      <section class="vx-pad-h"><h2 class="md-title-medium">Entrega y comprador</h2><div class="vx-buyer">${avatar(o.cliente.split(" ").map((w) => w[0]).join(""), true)}<div><p class="md-title-small">${esc(o.cliente)}</p><p class="md-body-medium vx-tab-num">${esc(o.tel)}</p><p class="md-body-medium">${esc(o.dir)}</p><p class="md-body-medium vx-muted">${esc(o.ciudad)} · ${esc(o.estado)}</p></div></div></section>
      <section class="vx-pad-h"><h2 class="md-title-medium">Artículos a empacar</h2><p class="md-body-medium vx-muted">${plural(unidades(o), "artículo", "artículos")} · <span class="vx-tab-num" id="empN"></span></p>
        <ul class="vx-list" role="list">${o.lineas.map((l, i) => `<li><label class="md-check vx-pack"><span class="md-check-hit md-sl"><input class="md-check-input" type="checkbox" data-emp="${i}"${st.emp[i] || ya ? " checked" : ""}${ya ? " disabled" : ""}><span class="md-check-box${st.emp[i] || ya ? " md-check-box--on" : ""}">${st.emp[i] || ya ? icon("check", 16) : ""}</span></span>
          <span class="vx-packtxt"><span class="md-body-large">${esc(l[0])}</span><span class="md-body-medium vx-muted vx-tab-num">${esc(l[1])} · ${l[2]} × ${money(l[3])}</span></span><b class="md-body-large vx-tab-num">${money(round2(l[2] * l[3]))}</b></label></li>`).join("")}</ul></section>
      <section class="vx-pad-h vx-leaves"><p class="md-body-medium vx-muted">Te deja</p><p class="md-display-small vx-tab-num">${money(neto)}</p></section>
      <dl class="vx-pad-h vx-dl">${r("Subtotal de artículos", money(subtotalPedido(o)))}${r("Envío", money(o.envio))}${r(`Comisión VexBiz (${COMISION}%)`, `− ${money(com)}`)}${r("Monto neto que ingresa a tu tienda", money(neto), true)}</dl>
      <div class="vx-pad-h vx-stack vx-pad-v">${ya ? "" : btn("Marcar todo empacado", { kind: "tonal", block: true, id: "empAll" })}${btn("Escribir al comprador", { kind: "outlined", block: true, attrs: 'data-toast="Abre WhatsApp con el comprador"' })}${btn(`${icon("box", 20)}Imprimir etiqueta`, { kind: "text", block: true, attrs: 'data-toast="Etiqueta enviada a tu impresora"' })}</div>`,
        btn(ya ? "Ya despachado" : "Despachar y facturar", { kind: "filled", block: true, id: "empGo", attrs: "disabled" })
      ));
      const paint = () => {
        const n = st.emp.filter(Boolean).length;
        el.querySelector("#empN").textContent = ya ? "todos empacados" : `${n} de ${st.emp.length} empacados`;
        el.querySelector("#empGo").disabled = ya || n < st.emp.length;
      };
      el.addEventListener("change", (e) => {
        const c = e.target.closest("[data-emp]");
        if (!c) return;
        st.emp[Number(c.dataset.emp)] = c.checked;
        const b = c.nextElementSibling;
        b.classList.toggle("md-check-box--on", c.checked);
        b.innerHTML = c.checked ? icon("check", 16) : "";
        paint();
      });
      el.querySelector("#empAll")?.addEventListener("click", () => {
        st.emp = st.emp.map(() => true);
        $$("[data-emp]", el).forEach((c) => {
          c.checked = true;
          const b = c.nextElementSibling;
          b.classList.add("md-check-box--on");
          b.innerHTML = icon("check", 16);
        });
        paint();
      });
      el.querySelector("#empGo").addEventListener("click", () => go("M7.05", { kind: "push", params: { id: o.id } }));
      paint();
      return el;
    }
  });
  var TIPOS = ["image/jpeg", "image/png", "image/webp", "application/pdf"];
  var mb = (b) => b < 1048576 ? `${num(Math.max(1, Math.round(b / 1024)), 0)} KB` : `${num(b / 1048576, 1)} MB`;
  register("M7.05", {
    render(ctx) {
      const o = buscarPedido2(decodeURIComponent(ctx.params.id || "#VX-20412")), total = totalPedido(o);
      const st = S().despacho[o.id] || (S().despacho[o.id] = { emp: o.lineas.map(() => true) });
      st.fact = st.fact || { archivo: { nombre: "factura-000842.jpg", size: 1.8 * 1048576 }, numero: "000842", fecha: "16/10/2026", total: "45,00", transporte: o.retiro ? "Retiro en tienda" : "MRW", guia: "" };
      const f = st.fact, trans = o.retiro ? ["Retiro en tienda"] : ["MRW", "Zoom", "Tealca", "Delivery propio"];
      const el = h(page(
        topbar("Despachar y facturar"),
        `
      <section class="vx-pad-h"><p class="md-label-medium vx-eyebrow">Comprador</p><p class="md-title-small">${esc(o.cliente)}</p><p class="md-body-medium vx-tab-num">Total del pedido · <b>${money(total)}</b></p></section>
      <div class="vx-pad-h vx-form"><h2 class="md-title-medium">Transporte</h2>${select({ id: "dTrans", label: "Transporte", options: trans, value: f.transporte })}<div id="dGuiaBox">${field({ id: "dGuia", label: "Número de guía", value: f.guia, inputmode: "numeric" })}</div></div>
      <section class="vx-pad-h"><h2 class="md-title-medium">Factura al cliente</h2><p>${statusTag("warning", "Obligatoria")}</p><div id="dArch"></div><p class="md-body-small vx-muted">PDF o imagen (JPG, PNG, WebP) · hasta 10 MB</p>
        <input type="file" class="md-sr-only" id="dFile" accept="image/jpeg,image/png,image/webp,application/pdf" tabindex="-1"><div class="vx-twin vx-pad-v">${btn(`${icon("upload", 18)}Subir factura`, { kind: "outlined", id: "dSubir" })}${btn("Quitar archivo", { kind: "outlined", id: "dQuitar" })}</div></section>
      <div class="vx-pad-h vx-form"><h2 class="md-title-medium">Datos de la factura</h2>${field({ id: "dNum", label: "Número de factura", value: f.numero, inputmode: "numeric" })}${field({ id: "dFecha", label: "Fecha (dd/mm/aaaa)", value: f.fecha, inputmode: "numeric" })}
        ${field({ id: "dTot", label: "Total facturado (USD)", value: f.total, inputmode: "decimal", help: "No modifica el inventario" })}</div>
      <section class="vx-pad-h"><p class="md-title-small">Falta para despachar</p><ul class="vx-checklist vx-checklist--w" role="list" id="dFalta"></ul></section>`,
        btn(`Despachar ${esc(o.id)}`, { kind: "filled", block: true, id: "dGo", attrs: "disabled" })
      ));
      const v = (id) => el.querySelector("#" + id).value.trim();
      const num02 = (t) => Number(String(t).replace(/\./g, "").replace(",", "."));
      const falta = () => {
        const m = [];
        if (!f.archivo) m.push("la factura (archivo)");
        if (!v("dNum")) m.push("el número de factura");
        if (!/^\d{2}\/\d{2}\/\d{4}$/.test(v("dFecha"))) m.push("la fecha de la factura");
        if (round2(num02(v("dTot"))) !== total) m.push("que el total facturado coincida con el del pedido");
        if (!o.retiro && !v("dGuia")) m.push("el número de guía");
        return m;
      };
      const paint = () => {
        el.querySelector("#dArch").innerHTML = f.archivo ? `<div class="vx-file">${icon("doc", 24)}<div><p class="md-body-large">${esc(f.archivo.nombre)}</p><p class="md-body-small vx-muted vx-tab-num">${mb(f.archivo.size)}</p></div></div>` : `<p class="md-body-medium vx-muted">Todavía no subiste la factura.</p>`;
        el.querySelector("#dQuitar").disabled = !f.archivo;
        el.querySelector("#dSubir").lastChild.textContent = f.archivo ? "Cambiar archivo" : "Subir factura";
        fieldError(el, "dTot", round2(num02(v("dTot"))) !== total ? "Corrige el total facturado" : "");
        const m = falta();
        el.querySelector("#dFalta").innerHTML = m.length ? m.map((x) => `<li>${icon("close", 16)}<span class="md-body-medium">${x}</span></li>`).join("") : `<li class="is-ok">${icon("check", 16)}<span class="md-body-medium">Todo listo para despachar</span></li>`;
        el.querySelector("#dGo").disabled = m.length > 0;
        el.querySelector("#dGuiaBox").hidden = o.retiro;
      };
      el.addEventListener("input", () => {
        f.numero = v("dNum");
        f.fecha = v("dFecha");
        f.total = v("dTot");
        f.guia = o.retiro ? "" : v("dGuia");
        paint();
      });
      el.addEventListener("change", () => {
        f.transporte = el.querySelector("#dTrans").value;
      });
      el.querySelector("#dSubir").addEventListener("click", () => el.querySelector("#dFile").click());
      el.querySelector("#dFile").addEventListener("change", (e) => {
        const a = e.target.files[0];
        if (!a) return;
        if (!TIPOS.includes(a.type)) {
          toast("Formato no válido: usa JPG, PNG, WebP o PDF");
          return;
        }
        if (a.size > 10 * 1048576) {
          toast("El archivo pesa más de 10 MB");
          return;
        }
        f.archivo = { nombre: a.name, size: a.size };
        paint();
        toast("Factura subida");
      });
      el.querySelector("#dQuitar").addEventListener("click", () => {
        f.archivo = null;
        paint();
      });
      el.querySelector("#dGo").addEventListener("click", () => {
        o.status = "despachado";
        set({ shop: S() });
        toast(`Despachaste ${o.id}`);
        go("M7.03", { kind: "mode" });
      });
      wireControls(el);
      paint();
      return el;
    }
  });
  register("M7.06", {
    render() {
      const el = h(page(
        topbar("Productos", { back: false, trailing: avisosBtn() }),
        `${modoLbl()}<div class="vx-pad-h"><div class="md-search vx-searchform">${icon("search")}<input class="md-search-input md-body-large" id="prQ" type="search" placeholder="Buscar en tus productos" aria-label="Buscar en tus productos" autocomplete="off"></div></div>
      <div class="vx-chipwrap vx-pad-h" role="group" aria-label="Filtrar productos">${[["todos", "Todos"], ["pub", "Publicados"], ["pau", "Pausados"], ["sin", "Sin existencias"]].map(([k, t], i) => `<span class="md-chip-wrap"><button type="button" class="md-chip md-sl md-label-large${i === 0 ? " md-chip--selected" : ""}" data-f="${k}" aria-pressed="${i === 0}">${t}</button></span>`).join("")}</div>
      <ul class="vx-orders vx-pad-h" role="list" id="prList"></ul>`,
        btn(`${icon("add", 20)}Poner a la venta`, { kind: "filled", block: true, go: "M7.07" })
      ));
      let f = "todos", q = "";
      const paint = () => {
        const l = S().productos.filter((p) => (f === "todos" || f === "pub" && p.publicado || f === "pau" && !p.publicado || f === "sin" && existencias(p) <= 0) && (p.nombre + p.marca + p.codigo).toLowerCase().includes(q));
        el.querySelector("#prList").innerHTML = l.map((p) => {
          const ex = existencias(p);
          return `<li class="vx-order"><button type="button" class="vx-order-main md-sl vx-press" data-go="M7.08?id=${p.id}">${thumb3()}<span class="vx-order-text"><span class="md-title-small">${esc(p.nombre)}</span>
          <span class="vx-tagrow">${statusTag(p.publicado ? "success" : "neutral", p.publicado ? "Publicado" : "Pausado")}${ex <= 0 ? statusTag("error", "Sin existencias") : ""}</span><span class="md-body-medium vx-muted">${esc(p.marca)} · ${esc(p.codigo)}</span><span class="md-body-medium vx-tab-num">Existencias: ${ex}</span></span><b class="md-title-small vx-tab-num">${money(p.precio)}</b></button></li>`;
        }).join("") || `<li>${stateBlock({ icon: "searchoff", title: "No hay productos con ese filtro" })}</li>`;
      };
      el.addEventListener("click", (e) => {
        const c = e.target.closest("[data-f]");
        if (!c) return;
        f = c.dataset.f;
        $$("[data-f]", el).forEach((b) => {
          const on = b === c;
          b.classList.toggle("md-chip--selected", on);
          b.setAttribute("aria-pressed", on);
        });
        paint();
      });
      el.querySelector("#prQ").addEventListener("input", (e) => {
        q = e.target.value.trim().toLowerCase();
        paint();
      });
      paint();
      el.__un = subscribe(paint);
      return el;
    },
    mount(el) {
      return el.__un;
    }
  });
  register("M7.07", {
    render() {
      const libres = catalogoLibre.filter((c) => !S().productos.some((p) => p.codigo === c.codigo));
      if (!libres.length) return h(`<div class="vx-page"><header class="vx-sheet-head vx-flowhead"><h2 id="sheet-title" class="md-title-large md-sheet-title" tabindex="-1">Ponle precio</h2>${iconBtn("close", "Cerrar", "data-close")}</header>${stateBlock({ icon: "check", title: "Ya publicaste todo lo del catálogo de la demo" })}</div>`);
      const el = h(`<div class="vx-page"><header class="vx-sheet-head vx-flowhead"><h2 id="sheet-title" class="md-title-large md-sheet-title" tabindex="-1">Ponle precio</h2>${iconBtn("close", "Cerrar", "data-close")}</header>
      <div class="vx-body vx-pad-h"><form class="vx-form" novalidate onsubmit="return false">${select({ id: "vFicha", label: "Artículo del catálogo", options: libres.map((c) => `${c.nombre} · ${c.marca}`), value: `${libres[0].nombre} · ${libres[0].marca}` })}
        <p class="md-body-medium vx-muted" id="vTiendas"></p>${field({ id: "vPrecio", label: "Precio (USD)", inputmode: "decimal" })}${field({ id: "vStock", label: "Existencias", inputmode: "numeric" })}${field({ id: "vCodigo", label: "Tu código", value: libres[0].codigo })}
        ${select({ id: "vCond", label: "Estado del artículo", options: ["Nuevo", "Caja abierta", "Usado"], value: "Nuevo" })}</form>
        ${btn("Ver la ficha del catálogo", { kind: "text", attrs: 'data-toast="La ficha es la misma para todas las tiendas"' })}</div>
      <footer class="vx-actionbar">${btn("Poner a la venta", { kind: "filled", block: true, id: "vGo" })}</footer></div>`);
      const ficha = () => libres.find((c) => `${c.nombre} · ${c.marca}` === el.querySelector("#vFicha").value);
      const paint = () => {
        const c = ficha();
        el.querySelector("#vTiendas").textContent = `Lo venden ${plural(c.tiendas, "tienda", "tiendas")}`;
        el.querySelector("#vCodigo").value = c.codigo;
      };
      el.querySelector("#vFicha").addEventListener("change", paint);
      el.querySelector("#vGo").addEventListener("click", async () => {
        const pr = Number(String(el.querySelector("#vPrecio").value).replace(",", ".")), st = Number(el.querySelector("#vStock").value);
        fieldError(el, "vPrecio", !(pr > 0) ? "Escribe un precio mayor que cero" : "");
        fieldError(el, "vStock", !Number.isInteger(st) || st < 0 || el.querySelector("#vStock").value === "" ? "Escribe las existencias (0 o más)" : "");
        if (!(pr > 0) || !Number.isInteger(st) || st < 0 || el.querySelector("#vStock").value === "") return;
        const c = ficha();
        S().productos.unshift({ id: "n" + Date.now(), nombre: c.nombre, marca: c.marca, codigo: el.querySelector("#vCodigo").value.trim() || c.codigo, precio: pr, publicado: true, inicial: st, mov: [], condicion: el.querySelector("#vCond").value, tiendas: c.tiendas + 1 });
        set({ shop: S() });
        toast(`Pusiste a la venta ${c.nombre}`);
        await closeOverlay();
      });
      paint();
      return el;
    }
  });
  register("M7.08", {
    render(ctx) {
      const p = S().productos.find((x) => x.id === ctx.params.id) || S().productos[1];
      const seg2 = (name, items, cur) => `<div class="md-seg" role="radiogroup" aria-label="${name}">${items.map(([k, t]) => `<button type="button" role="radio" aria-checked="${k === cur}" class="md-seg-item md-sl md-label-large${k === cur ? " md-seg-item--on" : ""}" data-${name}="${k}">${t}</button>`).join("")}</div>`;
      const el = h(page(
        topbar(esc(p.nombre)),
        `
      <p class="md-body-medium vx-muted vx-pad-h">${esc(p.marca)} · ${esc(p.codigo)}</p><p class="md-body-small vx-muted vx-pad-h">El nombre y la marca son de la ficha del catálogo, que comparten todas las tiendas.</p>
      <div class="vx-pad-h vx-form"><h2 class="md-title-medium">Tu oferta</h2>${seg2("pub", [["1", "Publicado"], ["0", "Pausado"]], p.publicado ? "1" : "0")}${seg2("cond", [["Nuevo", "Nuevo"], ["Caja abierta", "Caja abierta"], ["Usado", "Usado"]], p.condicion)}${field({ id: "oPrecio", label: "Precio (USD)", value: num(p.precio), inputmode: "decimal" })}</div>
      <section class="vx-pad-h"><h2 class="md-title-medium">Existencias</h2><p class="md-display-small vx-tab-num" id="oStock" aria-live="polite"></p><p class="md-body-medium vx-muted">Ya descuenta los pedidos pagados.</p></section>
      <div class="vx-pad-h vx-form"><h2 class="md-title-medium">Anotar un ajuste</h2>${field({ id: "oDelta", label: "Unidades (+ entran, − salen)", inputmode: "numeric" })}${seg2("mot", [["Compra a proveedor", "Compra"], ["Unidad dañada", "Dañada"], ["Otro", "Otro"]], "Otro")}
        <div class="vx-row-end">${btn("Anotar ajuste", { kind: "tonal", id: "oAnotar" })}</div><p class="md-body-small vx-muted">Un ajuste anotado no se edita ni se borra.</p></div>
      <section class="vx-pad-h"><h2 class="md-title-medium">Últimos movimientos</h2><ul class="vx-list" role="list" id="oMov"></ul></section>`,
        btn("Guardar oferta", { kind: "filled", block: true, id: "oGo" })
      ));
      let pub = p.publicado, cond = p.condicion, mot = "Otro";
      const paint = () => {
        el.querySelector("#oStock").textContent = plural(existencias(p), "unidad", "unidades");
        el.querySelector("#oMov").innerHTML = [...p.mov].reverse().map(([d, m, f]) => `<li class="md-li md-li--2"><span class="md-li-text"><span class="md-li-title md-body-large">${esc(m)}</span><span class="md-li-sup md-body-medium vx-tab-num">${f}</span></span><span class="md-li-end"><b class="md-title-small vx-tab-num">${d < 0 ? "−" : "+"} ${Math.abs(d)}</b></span></li>`).join("") || '<li class="md-body-medium vx-muted">Todavía no hay movimientos.</li>';
      };
      el.addEventListener("click", (e) => {
        const g = e.target.closest("[data-pub],[data-cond],[data-mot]");
        if (!g) return;
        const grp = g.parentElement;
        if (g.dataset.pub !== void 0) pub = g.dataset.pub === "1";
        if (g.dataset.cond !== void 0) cond = g.dataset.cond;
        if (g.dataset.mot !== void 0) mot = g.dataset.mot;
        $$(".md-seg-item", grp).forEach((b) => {
          const on = b === g;
          b.classList.toggle("md-seg-item--on", on);
          b.setAttribute("aria-checked", on);
        });
      });
      el.querySelector("#oAnotar").addEventListener("click", () => {
        const d = Number(el.querySelector("#oDelta").value);
        const msg = !Number.isInteger(d) || d === 0 ? "Escribe un número entero distinto de cero" : existencias(p) + d < 0 ? "No puedes dejar las existencias en negativo" : "";
        fieldError(el, "oDelta", msg);
        if (msg) return;
        p.mov.push([d, mot, date(HOY)]);
        el.querySelector("#oDelta").value = "";
        set({ shop: S() });
        paint();
        play(el.querySelector("#oStock"), "vx-tick");
        toast("Anotaste el ajuste");
      });
      el.querySelector("#oGo").addEventListener("click", () => {
        const pr = Number(String(el.querySelector("#oPrecio").value).replace(/\./g, "").replace(",", "."));
        fieldError(el, "oPrecio", !(pr > 0) ? "Escribe un precio mayor que cero" : "");
        if (!(pr > 0)) return;
        Object.assign(p, { precio: pr, publicado: pub, condicion: cond });
        set({ shop: S() });
        toast("Guardaste tu oferta");
        back();
      });
      paint();
      return el;
    }
  });

  // assets/js/screens/m7b.js
  var sec2 = (t) => `<h2 class="md-label-large vx-sub vx-sub--list">${t}</h2>`;
  var segHtml = (name, items, cur) => `<div class="md-seg" role="tablist" aria-label="${name}">${items.map(([k, t]) => `<button type="button" role="tab" class="md-seg-item md-sl md-label-large${k === cur ? " md-seg-item--on" : ""}" data-seg="${k}" aria-selected="${k === cur}">${t}</button>`).join("")}</div>`;
  var wireSeg = (el, cb) => el.addEventListener("click", (e) => {
    const b = e.target.closest("[data-seg]");
    if (!b) return;
    $$("[data-seg]", el).forEach((x) => {
      const on = x === b;
      x.classList.toggle("md-seg-item--on", on);
      x.setAttribute("aria-selected", on);
    });
    cb(b.dataset.seg);
  });
  var dineroSeg = (cur) => `<div class="vx-pad-h"><div class="md-seg" role="tablist" aria-label="Dinero">${[["M7.11", "Ventas"], ["M7.12", "Liquidaciones"], ["M7.13", "Cuentas"]].map(([to, t]) => `<button type="button" role="tab" class="md-seg-item md-sl md-label-large${to === cur ? " md-seg-item--on" : ""}" data-go="${to}" data-kind="swap" aria-selected="${to === cur}">${t}</button>`).join("")}</div></div>`;
  var kv = (k, v) => `<div class="vx-kv"><dt class="md-body-medium vx-muted">${k}</dt><dd class="md-body-large vx-tab-num">${v}</dd></div>`;
  var comisionLiq = (l) => pct(l.brutas, COMISION);
  var ajustesLiq = (l) => round2(l.ajustes.reduce((s, a) => s + a[2], 0));
  var netoLiq = (l) => l.brutas != null ? round2(l.brutas - comisionLiq(l) - l.retenciones + ajustesLiq(l)) : l.neto;
  register("M7.11", {
    render() {
      const max = Math.max(...ventas.meses.map((m) => m[2])), com = round2(ventas.bruto - ventas.neto), p = Math.round(com / ventas.bruto * 100);
      return h(`<div>${topbar("Dinero", { back: false, trailing: avisosBtn() })}${modoLbl()}${dineroSeg("M7.11")}
      <section class="vx-pad-h vx-levelbox"><p class="md-body-medium vx-muted">Ingreso neto acumulado</p><p class="md-display-small vx-tab-num">${money(ventas.neto)}</p><p class="md-body-medium vx-tab-num">USD · ${plural(ventas.pedidos, "pedido pagado", "pedidos pagados")}</p></section>
      <dl class="vx-pad-h vx-dl">${kv("Total bruto vendido", money(ventas.bruto))}${kv(`Comisión media de VexBiz (${p} %)`, `− ${money(com)}`)}</dl>
      <p class="md-body-small vx-muted vx-pad-h">Cuenta los últimos doce meses y sólo pedidos pagados. La comisión se fija el día de cada venta.</p>
      <section class="vx-pad-h"><h2 class="md-title-medium">Evolución mensual</h2><ul class="vx-months" role="list">${ventas.meses.map(([m, n, v]) => `<li class="vx-month"><div class="vx-month-h"><span class="md-body-large">${m}</span><span class="md-body-medium vx-muted vx-tab-num">${plural(n, "pedido", "pedidos")}</span><b class="md-body-large vx-tab-num">$ ${num(v, 0)}</b></div>
        <span class="vx-bar-track" aria-hidden="true"><span class="vx-bar-fill" style="transform: scaleX(${(v / max).toFixed(3)}); transform-origin: left"></span></span></li>`).join("")}</ul></section>
      <div class="vx-pad-h vx-pad-v">${btn("Ver liquidaciones", { kind: "text", block: true, go: "M7.12", kindNav: "swap" })}</div></div>`);
    }
  });
  register("M7.12", {
    render() {
      return h(`<div>${topbar("Dinero", { back: false, trailing: avisosBtn() })}${modoLbl()}${dineroSeg("M7.12")}
      <ul class="vx-orders vx-pad-h" role="list">${liquidaciones.map((l) => {
        const n = netoLiq(l);
        return `<li class="vx-order"><button type="button" class="vx-order-main md-sl vx-press" data-liq="${l.id}" data-go="O.DET" aria-label="Detalle del período ${l.periodo}"><span class="vx-order-text"><span class="md-body-medium vx-muted">Período: ${l.periodo}</span><b class="md-headline-small vx-tab-num">${money(n)}</b><span class="md-body-medium vx-muted">USD</span>
          <span>${l.estado === "transferida" ? statusTag("success", "Transferida") : statusTag("neutral", "Acumulada")}</span><span class="md-body-medium">${l.estado === "acumulada" ? `${l.cuando} (mínimo ${money(MIN_TRANSFERENCIA)})` : l.cuando}</span></span><span class="vx-muted">${icon("chevron")}</span></button></li>`;
      }).join("")}</ul></div>`);
    },
    mount(el) {
      el.addEventListener("click", (e) => {
        const b = e.target.closest("[data-liq]");
        if (b) state.flow.liq = b.dataset.liq;
      });
    }
  });
  register("O.DET", {
    render() {
      const l = liquidaciones.find((x) => x.id === state.flow.liq) || liquidaciones[0], r = (k, v, sub, strong) => `<div class="vx-sumrow${strong ? " is-strong" : ""}"><dt class="md-body-large">${k}${sub ? `<br><span class="md-body-medium vx-muted">${sub}</span>` : ""}</dt><dd class="md-body-large vx-tab-num">${v}</dd></div>`;
      const sg = (n) => `${n < 0 ? "−" : "+"} ${money(Math.abs(n))}`;
      return h(`<div><div class="vx-sheet-head"><h2 id="sheet-title" class="md-title-large md-sheet-title" tabindex="-1">Detalle del período</h2>${iconBtn("close", "Cerrar", "data-close")}</div><p class="md-body-medium vx-muted vx-pad-h vx-tab-num">${l.periodo}</p>
      ${l.brutas != null ? `<dl class="vx-pad-h vx-dl">${r("Total de ventas brutas", money(l.brutas))}${r("Comisión del marketplace", `− ${money(comisionLiq(l))}`)}${r("Retenciones tributarias", `− ${money(l.retenciones)}`)}
        <h3 class="md-title-small vx-sub0">Ajustes</h3>${l.ajustes.map(([t, s, n]) => r(t, sg(n), s)).join("")}${r("Total neto liquidado", money(netoLiq(l)), "", true)}</dl>` : `<dl class="vx-pad-h vx-dl">${r("Total neto liquidado", money(l.neto), "", true)}</dl><p class="md-body-medium vx-muted vx-pad-h">El desglose de este período no está en la demo.</p>`}</div>`);
    }
  });
  register("M7.13", {
    render() {
      const E2 = { abonado: "success", espera: "info", error: "error" };
      const el = h(`<div>${topbar("Dinero", { back: false, trailing: avisosBtn() })}${modoLbl()}${dineroSeg("M7.13")}
      <section class="vx-pad-h"><div class="vx-sechead vx-sechead--0"><h2 class="md-title-medium">Cobro inmediato</h2><span id="ciSt"></span></div>
        ${switchHtml("ci", "Recibes tu venta cuando el cliente paga", S().cobroInmediato)}<p class="md-body-medium vx-muted" id="ciTxt"></p></section>
      <h2 class="md-label-large vx-sub vx-sub--list">Últimos abonos</h2><ul class="vx-orders vx-pad-h" role="list">${abonos.map((a) => `<li class="vx-order"><div class="vx-order-main vx-static"><span class="vx-order-text"><span class="md-title-small vx-tab-num">Pedido ${a.id} · ${a.fecha}</span>
        <span>${statusTag(E2[a.estado], a.estado === "abonado" ? "Abonado" : a.estado === "espera" ? "Esperando al banco" : "No se pudo abonar")}</span><span class="md-body-medium vx-muted">${esc(a.nota)} · ${esc(a.ref)}</span></span>${a.monto ? `<b class="md-title-small vx-tab-num">${a.monto}</b>` : ""}</div></li>`).join("")}</ul>
      <h2 class="md-label-large vx-sub vx-sub--list">Cuentas bancarias</h2><ul class="vx-orders vx-pad-h" role="list" id="ctaList"></ul><p class="md-body-medium vx-muted vx-pad-h">1 cuenta retirada</p>
      <div class="vx-pad-h" id="ctaForm" hidden><div class="vx-form">${select({ id: "cBanco", label: "Banco", options: ["Banesco", "Mercantil", "BBVA Provincial", "Bancamiga"], value: "Banesco" })}${field({ id: "cNum", label: "Número de cuenta (20 dígitos)", inputmode: "numeric" })}${select({ id: "cTipo", label: "Tipo de cuenta", options: ["Corriente", "Ahorros"], value: "Corriente" })}</div>
        <div class="vx-twin vx-pad-v">${btn("Cancelar", { kind: "text", id: "cCan" })}${btn("Guardar cuenta", { kind: "filled", id: "cSave" })}</div></div>
      <div class="vx-pad-h vx-pad-v">${btn(`${icon("add", 20)}Añadir cuenta bancaria`, { kind: "filled", block: true, id: "cAdd" })}</div></div>`);
      wireControls(el);
      const paintCi = () => {
        el.querySelector("#ciSt").innerHTML = statusTag(S().cobroInmediato ? "success" : "neutral", S().cobroInmediato ? "Activo" : "Apagado");
        el.querySelector("#ciTxt").textContent = S().cobroInmediato ? "Cuando el cliente paga, recibes tu venta en ese momento." : "Recibes tus ventas en cada liquidación.";
      };
      const paint = () => {
        el.querySelector("#ctaList").innerHTML = S().cuentas.map((c) => `<li class="vx-order"><div class="vx-order-main vx-static"><span class="vx-order-text"><span class="md-title-small">${esc(c.banco)} ${c.principal ? '<span class="vx-tag md-label-small">Principal</span>' : ""}</span><span class="md-body-large vx-tab-num">${esc(c.cuenta)}</span><span class="md-body-medium vx-muted">${esc(c.tipo)} · ${esc(c.titular)} · ${esc(c.doc)}</span></span></div>
      <div class="vx-order-act">${c.principal ? "" : `${btn("Quitar", { kind: "text", attrs: `data-rq="${c.id}"` })}${btn("Hacer principal", { kind: "outlined", attrs: `data-pr="${c.id}"` })}`}</div></li>`).join("");
      };
      el.addEventListener("change", (e) => {
        if (e.target.id === "ci") {
          S().cobroInmediato = e.target.checked;
          set({ shop: S() });
          paintCi();
          toast(`Cobro inmediato ${S().cobroInmediato ? "activado" : "apagado"}`);
        }
      });
      el.addEventListener("click", (e) => {
        const pr = e.target.closest("[data-pr]"), rq = e.target.closest("[data-rq]");
        if (pr) {
          S().cuentas.forEach((c) => {
            c.principal = c.id === pr.dataset.pr;
          });
          set({ shop: S() });
          paint();
          toast("Cambiaste tu cuenta principal");
        }
        if (rq) {
          const i = S().cuentas.findIndex((c) => c.id === rq.dataset.rq), [gone] = S().cuentas.splice(i, 1);
          set({ shop: S() });
          paint();
          toast(`Quitaste ${gone.banco}`, { action: "Deshacer", onAction: () => {
            S().cuentas.splice(i, 0, gone);
            set({ shop: S() });
            paint();
          } });
        }
      });
      el.querySelector("#cAdd").addEventListener("click", () => {
        el.querySelector("#ctaForm").hidden = false;
        el.querySelector("#cAdd").hidden = true;
        el.querySelector("#cNum").focus();
      });
      el.querySelector("#cCan").addEventListener("click", () => {
        el.querySelector("#ctaForm").hidden = true;
        el.querySelector("#cAdd").hidden = false;
      });
      el.querySelector("#cSave").addEventListener("click", () => {
        const n = el.querySelector("#cNum").value.replace(/\D/g, "");
        fieldError(el, "cNum", n.length !== 20 ? "Escribe los 20 dígitos de la cuenta" : "");
        if (n.length !== 20) return;
        S().cuentas.push({ id: "b" + Date.now(), banco: el.querySelector("#cBanco").value, cuenta: `${n.slice(0, 4)} •••• •••• ${n.slice(-4)}`, tipo: el.querySelector("#cTipo").value, titular: "Frío Total Servicios C.A.", doc: "J-41234567-8" });
        set({ shop: S() });
        paint();
        el.querySelector("#ctaForm").hidden = true;
        el.querySelector("#cAdd").hidden = false;
        el.querySelector("#cNum").value = "";
        toast("Añadiste tu cuenta bancaria");
      });
      paintCi();
      paint();
      return el;
    }
  });
  var agotados = () => S().productos.filter((p) => existencias(p) <= 0).length;
  var reglasActivas = () => S().reglas.filter((r) => r.activa).length;
  var mejoras = () => {
    const l = [], s = S();
    if (agotados()) l.push({ t: `${plural(agotados(), "artículo agotado ya no sale", "artículos agotados ya no salen")} en las búsquedas.`, a: "Actualizar existencias", to: "M7.06", kind: "swap" });
    if (!reglasActivas()) l.push({ t: "Sin regla de envío sólo vendes con retiro en tienda.", a: "Configurar envíos", to: "M7.15" });
    if (!s.publica.telefonoPublico) l.push({ t: "Sin teléfono, los compradores no pueden llamarte.", a: "Añadir teléfono", tel: true });
    return l;
  };
  var docsFalta = () => S().docs.filter((d) => d.estado !== "verificado" && d.estado !== "revision").length;
  register("M7.M", {
    render() {
      const s = S(), recl = s.reclamos.filter((r) => r.estado === "Solicitada").length, cup = s.cupones.filter((c) => c.estado === "activo").length, apart = s.apartadas.reduce((n, a) => n + a.qty, 0), f = docsFalta();
      return h(`<div>${topbar("Más", { back: false, trailing: avisosBtn() })}${modoLbl()}
      ${sec2("Atender")}<ul class="vx-list" role="list">${row({ ic: "error", title: "Reclamos y devoluciones", sup: recl ? `${plural(recl, "pendiente", "pendientes")}` : "Nada pendiente", go: "M7.10" })}${row({ ic: "star", title: "Reseñas", sup: `${num(resenas.rating, 1)} · ${resenas.total} opiniones`, go: "M7.16" })}${row({ ic: "cart", title: "Carritos y apartadas", sup: `7 · ${apart}`, go: "M7.09" })}</ul>
      ${sec2("Vender")}<ul class="vx-list" role="list">${row({ ic: "gift", title: "Cupones", sup: `${plural(cup, "activo", "activos")}`, go: "M7.14" })}${row({ ic: "truck", title: "Envíos", sup: plural(reglasActivas(), "regla", "reglas"), go: "M7.15" })}${row({ ic: "eye", title: "Cómo se ve mi tienda", sup: plural(mejoras().length, "mejora", "mejoras"), go: "M7.19" })}</ul>
      ${sec2("Mi empresa")}<ul class="vx-list" role="list">${row({ ic: "sliders", title: "Ajustes de la tienda", go: "M7.17" })}${row({ ic: "doc", title: "Documentos de verificación", sup: f ? `Falta${f > 1 ? "n" : ""} ${f}` : "Al día", go: "M7.18" })}${row({ ic: "box", title: "Importadora: mis fichas", go: "M7.20" })}${row({ ic: "swap", title: "Cambiar de modo", sup: "Comprador · Tienda · Técnico", go: "O.MOD" })}</ul></div>`);
    }
  });
  register("M7.09", {
    render() {
      const el = h(`<div>${topbar("Carritos y apartadas")}<div class="vx-pad-h vx-stack"><p class="md-body-large">Aún no han pagado. Si confirmas precio y existencias ahora, al comprar no tendrás que contestar.</p><div id="caAviso"></div>${segHtml("Ver", [["car", "Carritos"], ["apa", "Apartadas"]], "car")}</div><ul class="vx-orders vx-pad-h" role="list" id="caList"></ul></div>`);
      let seg2 = "car";
      const paint = () => {
        const s = S(), prods = Object.fromEntries(s.productos.map((p) => [p.id, p]));
        const falla = s.carritos.filter((c) => c.qty > existencias(prods[c.prod])).length;
        el.querySelector("#caAviso").innerHTML = seg2 === "car" && falla ? banner("warning", `En ${falla} no te alcanzan las existencias: esa venta se caerá salvo que repongas.`) : "";
        el.querySelector("#caList").innerHTML = seg2 === "car" ? s.carritos.map((c) => {
          const p = prods[c.prod], ex = existencias(p), no = c.qty > ex, ok = s.confirmados[c.id];
          return `<li class="vx-order"><div class="vx-order-main vx-static"><span class="vx-order-text"><span class="md-title-small">${esc(c.nombre)}</span><span class="md-body-medium vx-tab-num">${c.qty} en el carrito · te quedan ${ex}${no ? " · " : ""}${no ? statusTag("error", "no alcanza") : ""}</span>
          <span class="md-body-medium vx-muted">${c.sesion ? "Cliente con sesión" : "Cliente sin sesión"} · ${c.hace} · lo ha mirado ${plural(c.vistas, "vez", "veces")}</span>${ok ? `<span>${statusTag("success", "Precio y existencias confirmados")}</span>` : ""}</span></div>
          <div class="vx-order-act">${no ? btn("Reponer existencias", { kind: "outlined", go: `M7.08?id=${c.prod}` }) : ""}${ok ? "" : btn("Confirmar precio y existencias", { kind: "tonal", attrs: `data-cf="${c.id}"${no ? " disabled" : ""}` })}</div></li>`;
        }).join("") || `<li>${stateBlock({ icon: "cart", title: "No hay carritos abiertos" })}</li>` : s.apartadas.map((a) => `<li class="vx-order"><div class="vx-order-main vx-static"><span class="vx-order-text"><span class="md-title-small">${esc(a.nombre)}</span><span class="md-body-medium vx-tab-num">${plural(a.qty, "unidad apartada", "unidades apartadas")} · ${esc(a.cliente)}</span><span class="md-body-medium vx-muted">Hasta ${a.hasta}</span></span></div></li>`).join("");
      };
      wireSeg(el, (k) => {
        seg2 = k;
        paint();
      });
      el.addEventListener("click", (e) => {
        const b = e.target.closest("[data-cf]");
        if (!b) return;
        S().confirmados[b.dataset.cf] = true;
        set({ shop: S() });
        toast("Confirmaste precio y existencias");
      });
      paint();
      el.__un = subscribe(paint);
      return el;
    },
    mount(el) {
      return el.__un;
    }
  });
  register("M7.10", {
    render() {
      const el = h(`<div>${topbar("Reclamos y devoluciones")}<div class="vx-pad-h">${segHtml("Ver", [["por", "Por resolver"], ["res", "Resueltos"]], "por")}</div><ul class="vx-orders vx-pad-h" role="list" id="rcList"></ul></div>`);
      let seg2 = "por";
      const paint = () => {
        const l = S().reclamos.filter((r) => seg2 === "por" === (r.estado === "Solicitada"));
        el.querySelector("#rcList").innerHTML = l.map((r) => `<li class="vx-order"><div class="vx-order-main vx-static"><span class="vx-order-text"><span class="md-title-small vx-tab-num">${r.id} · ${r.fecha}</span><span>${statusTag(r.estado === "Solicitada" ? "warning" : r.estado === "Aprobada" ? "success" : "info", r.estado)}</span>
        <b class="md-title-medium vx-tab-num">Reembolso ${money(r.reembolso)}</b><span class="md-label-medium vx-muted">Motivo del comprador</span><span class="md-body-large">${esc(r.motivo)}</span><span class="md-body-medium vx-muted">${esc(r.producto)} · × ${r.qty}</span></span></div>
        ${r.estado === "Solicitada" ? `<p class="md-body-small vx-muted vx-pad-h">Aceptar autoriza a VexBiz a procesar el reembolso.</p><div class="vx-order-act">${btn("Rechazar", { kind: "outlined", attrs: `data-rz="${r.id}"` })}${btn("Aceptar reembolso", { kind: "filled", attrs: `data-ac="${r.id}"` })}</div>` : ""}</li>`).join("") || `<li>${stateBlock({ icon: "check", title: seg2 === "por" ? "No tienes reclamos por resolver" : "Todavía no resolviste ninguno" })}</li>`;
      };
      wireSeg(el, (k) => {
        seg2 = k;
        paint();
      });
      el.addEventListener("click", (e) => {
        const a = e.target.closest("[data-ac]"), z = e.target.closest("[data-rz]");
        const r = S().reclamos.find((x) => x.id === (a || z)?.dataset[a ? "ac" : "rz"]);
        if (!r) return;
        if (a) {
          r.estado = "Aprobada";
          toast(`Autorizaste el reembolso de ${money(r.reembolso)}`);
        } else {
          r.estado = "En mediación";
          toast("VexBiz revisa el caso y decide");
        }
        set({ shop: S() });
      });
      paint();
      el.__un = subscribe(paint);
      return el;
    },
    mount(el) {
      return el.__un;
    }
  });
  register("M7.16", {
    render() {
      const max = Math.max(...resenas.dist.map((d) => d[1]));
      return h(`<div>${topbar("Reseñas")}<section class="vx-pad-h vx-levelbox"><p class="md-display-small vx-tab-num">${num(resenas.rating, 1)}</p><p class="md-body-large">${stars(resenas.rating).replace("★ ", "★ ")} · ${resenas.total} opiniones verificadas</p></section>
      <ul class="vx-dist vx-pad-h" role="list" aria-label="Opiniones por estrellas">${resenas.dist.map(([n, c]) => `<li class="vx-distrow"><span class="md-body-medium vx-tab-num">${n} ★</span><span class="vx-bar-track" aria-hidden="true"><span class="vx-bar-fill" style="transform: scaleX(${(c / max).toFixed(3)}); transform-origin: left"></span></span><span class="md-body-medium vx-tab-num">${c}</span></li>`).join("")}</ul>
      <section class="vx-pad-h"><h2 class="md-title-medium">Comentarios recientes</h2><ul class="vx-orders vx-nopad" role="list">${resenas.recientes.map((r) => `<li class="vx-order"><div class="vx-order-main vx-static"><span class="vx-order-text"><span class="md-title-small">${esc(r.quien)}</span><span class="md-body-medium vx-muted vx-tab-num">${r.fecha} · Pedido ${r.pedido}</span><span class="md-body-large">«${esc(r.t)}»</span></span></div></li>`).join("")}</ul></section></div>`);
    }
  });
  register("M7.17", {
    render() {
      const el = h(`<div>${topbar("Ajustes de la tienda")}
      <section class="vx-profile vx-pad-h">${avatar("FT", true)}<div><p class="md-body-large">Se ve en tu tienda pública y junto a tus ofertas. Tu foto personal es otra.</p>${btn("Cambiar logo", { kind: "text", attrs: 'data-toast="El logo nuevo lo revisa VexBiz antes de mostrarlo"' })}</div></section>
      <section class="vx-pad-h"><h2 class="md-title-medium">Identificador fiscal</h2><p class="md-body-large vx-tab-num">${S().ajustes.fiscal}</p><p>${statusTag("success", "Empresa verificada")}</p></section>
      <section class="vx-pad-h"><h2 class="md-title-medium">Figuras de la empresa</h2><ul class="vx-list" role="list" id="figList"></ul></section>
      <section class="vx-pad-h"><div class="vx-sechead vx-sechead--0"><h2 class="md-title-medium">Datos de contacto</h2>${btn("Editar", { kind: "text", id: "ajEd" })}</div><div id="ajVer"></div>
        <div id="ajForm" hidden><div class="vx-form">${field({ id: "ajNom", label: "Nombre de la tienda" })}${field({ id: "ajMail", label: "Correo", type: "email", inputmode: "email" })}${field({ id: "ajTel", label: "Teléfono", inputmode: "tel" })}</div><div class="vx-twin vx-pad-v">${btn("Cancelar", { kind: "text", id: "ajCan" })}${btn("Guardar", { kind: "filled", id: "ajSave" })}</div></div></section>
      <section class="vx-pad-h"><div class="vx-sechead vx-sechead--0"><h2 class="md-title-medium">Horario</h2>${btn("Editar horario", { kind: "text", attrs: 'data-toast="El horario de la tienda se edita igual que el del técnico"' })}</div><p class="md-body-large">${S().ajustes.horario}</p></section></div>`);
      const paint = () => {
        const a = S().ajustes;
        el.querySelector("#ajVer").innerHTML = `<p class="md-body-large">${esc(a.nombre)}</p><p class="md-body-medium vx-muted">${esc(a.email)}</p><p class="md-body-medium vx-tab-num vx-muted">${esc(a.telefono)}</p>`;
        el.querySelector("#figList").innerHTML = [["vender", "Vender productos", ""], ["importar", "Importar", "Carga fichas para que otras tiendas vendan."], ["servicios", "Prestar servicios", "Recibe solicitudes de instalación y reparación."]].map(([k, t, d]) => `<li class="vx-fig"><div><p class="md-body-large">${t}</p>${d ? `<p class="md-body-medium vx-muted">${d}</p>` : ""}</div>${a.figuras[k] ? statusTag("success", "Ya tienes") : btn("Activar", { kind: "text", attrs: `data-fig="${k}"` })}</li>`).join("");
      };
      el.addEventListener("click", (e) => {
        const f = e.target.closest("[data-fig]");
        if (f) {
          S().ajustes.figuras[f.dataset.fig] = true;
          set({ shop: S() });
          paint();
          toast("Activaste la figura. VexBiz la revisa con tus documentos.");
        }
      });
      el.querySelector("#ajEd").addEventListener("click", () => {
        const a = S().ajustes;
        el.querySelector("#ajNom").value = a.nombre;
        el.querySelector("#ajMail").value = a.email;
        el.querySelector("#ajTel").value = a.telefono;
        el.querySelector("#ajForm").hidden = false;
        el.querySelector("#ajVer").hidden = true;
      });
      el.querySelector("#ajCan").addEventListener("click", () => {
        el.querySelector("#ajForm").hidden = true;
        el.querySelector("#ajVer").hidden = false;
      });
      el.querySelector("#ajSave").addEventListener("click", () => {
        const n = el.querySelector("#ajNom").value.trim(), m = el.querySelector("#ajMail").value.trim(), t = el.querySelector("#ajTel").value.trim();
        fieldError(el, "ajNom", !n ? "Escribe el nombre de la tienda" : "");
        fieldError(el, "ajMail", !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m) ? "Escribe un correo válido" : "");
        fieldError(el, "ajTel", !/^[\d\s+-]{7,}$/.test(t) ? "Escribe un teléfono válido" : "");
        if (!n || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(m) || !/^[\d\s+-]{7,}$/.test(t)) return;
        Object.assign(S().ajustes, { nombre: n, email: m, telefono: t });
        set({ shop: S() });
        el.querySelector("#ajForm").hidden = true;
        el.querySelector("#ajVer").hidden = false;
        paint();
        toast("Guardaste los datos de contacto");
      });
      paint();
      return el;
    }
  });
  register("M7.14", {
    render() {
      const el = h(page(
        topbar("Cupones"),
        `<ul class="vx-orders vx-pad-h" role="list" id="cpList"></ul>
      <div class="vx-pad-h" id="cpForm" hidden><div class="vx-form"><h2 class="md-title-medium">Nuevo cupón</h2>${field({ id: "cpCod", label: "Código" })}${field({ id: "cpPct", label: "Descuento (%)", inputmode: "numeric" })}${field({ id: "cpMin", label: "Compra mínima (USD, opcional)", inputmode: "decimal" })}${field({ id: "cpLim", label: "Usos máximos (vacío = sin límite)", inputmode: "numeric" })}</div>
        <div class="vx-twin vx-pad-v">${btn("Cancelar", { kind: "text", id: "cpCan" })}${btn("Crear cupón", { kind: "filled", id: "cpSave" })}</div></div>`,
        btn("Crear cupón", { kind: "filled", block: true, id: "cpNuevo" })
      ));
      const paint = () => {
        el.querySelector("#cpList").innerHTML = S().cupones.map((c) => {
          const k = c.estado === "activo" ? "success" : c.estado === "pausado" ? "neutral" : "error";
          return `<li class="vx-order"><div class="vx-order-main vx-static"><span class="vx-order-text"><span class="md-title-small vx-tab-num">${esc(c.codigo)}</span><span class="vx-tagrow">${statusTag(k, c.estado === "activo" ? "Activo" : c.estado === "pausado" ? "Pausado" : "Caducado")}${c.agotado ? statusTag("error", "Usos agotados") : ""}</span>
        <span class="md-body-large">${esc(c.texto)}</span><span class="md-body-medium vx-muted vx-tab-num">${c.limite ? `Usado ${c.usos} de ${c.limite} veces` : `Usado ${c.usos} veces · sin límite`}${c.porPersona ? ` · ${c.porPersona} por persona` : ""}</span></span></div>
        ${c.estado !== "caducado" ? `<div class="vx-order-act">${btn(c.estado === "activo" ? "Pausar" : "Activar", { kind: "text", attrs: `data-tg="${c.id}"` })}</div>` : ""}</li>`;
        }).join("");
      };
      el.addEventListener("click", (e) => {
        const t = e.target.closest("[data-tg]");
        if (!t) return;
        const c = S().cupones.find((x) => x.id === t.dataset.tg);
        c.estado = c.estado === "activo" ? "pausado" : "activo";
        set({ shop: S() });
        toast(`${c.codigo}: ${c.estado}`);
      });
      el.querySelector("#cpNuevo").addEventListener("click", () => {
        el.querySelector("#cpForm").hidden = false;
        el.querySelector("#cpNuevo").hidden = true;
        el.querySelector("#cpCod").focus();
      });
      el.querySelector("#cpCan").addEventListener("click", () => {
        el.querySelector("#cpForm").hidden = true;
        el.querySelector("#cpNuevo").hidden = false;
      });
      el.querySelector("#cpSave").addEventListener("click", () => {
        const cod = el.querySelector("#cpCod").value.trim().toUpperCase(), p = Number(el.querySelector("#cpPct").value), mn = Number(String(el.querySelector("#cpMin").value).replace(",", ".")) || 0, lim = Number(el.querySelector("#cpLim").value) || 0;
        fieldError(el, "cpCod", !/^[A-Z0-9]{4,16}$/.test(cod) ? "Usa de 4 a 16 letras o números" : S().cupones.some((c) => c.codigo === cod) ? "Ese código ya existe" : "");
        fieldError(el, "cpPct", !(p >= 1 && p <= 90) ? "Escribe un descuento entre 1 y 90" : "");
        if (!/^[A-Z0-9]{4,16}$/.test(cod) || S().cupones.some((c) => c.codigo === cod) || !(p >= 1 && p <= 90)) return;
        S().cupones.unshift({ id: "k" + Date.now(), codigo: cod, estado: "activo", texto: `${p}% de descuento${mn ? ` en compras desde ${money(mn)}` : ""}`, usos: 0, limite: lim });
        set({ shop: S() });
        el.querySelector("#cpForm").hidden = true;
        el.querySelector("#cpNuevo").hidden = false;
        ["cpCod", "cpPct", "cpMin", "cpLim"].forEach((i) => {
          el.querySelector("#" + i).value = "";
        });
        toast(`Creaste ${cod}`);
      });
      paint();
      el.__un = subscribe(paint);
      return el;
    },
    mount(el) {
      return el.__un;
    }
  });
  register("M7.15", {
    render() {
      const el = h(page(
        topbar("Envíos"),
        `<p class="md-title-medium vx-pad-h">Tus reglas de envío</p><ul class="vx-orders vx-pad-h" role="list" id="rgList"></ul>
      <ul class="vx-legend vx-pad-h" role="list"><li><i class="vx-dot-c vx-dot-c--a"></i>Comprador</li><li><i class="vx-dot-c vx-dot-c--b"></i>Tu tienda</li><li><i class="vx-dot-c vx-dot-c--c"></i>VexBiz</li></ul>`,
        btn("Nueva regla", { kind: "filled", block: true, id: "rgNueva" })
      ));
      const paint = () => {
        el.querySelector("#rgList").innerHTML = S().reglas.map((r) => {
          const c = round2(r.monto * r.comprador / 100), t = round2(r.monto - c);
          return `<li class="vx-order"><div class="vx-order-main vx-static"><span class="vx-order-text"><span class="md-title-small">${esc(r.nombre)}</span><span class="vx-tagrow">${r.activa ? statusTag("success", "Activa") : statusTag("neutral", "Pausada")}</span>
        ${r.monto ? `<b class="md-title-medium vx-tab-num">${money(r.monto)}</b>` : ""}<span class="md-body-medium">${esc(r.texto)}</span>
        <span class="vx-split" role="img" aria-label="Comprador paga ${r.comprador}%, tu tienda ${r.tienda}%"><i class="vx-split-a" style="flex:${r.comprador}"></i><i class="vx-split-b" style="flex:${r.tienda}"></i></span>
        ${r.monto ? `<span class="md-body-small vx-muted vx-tab-num">Comprador ${money(c)} · Tu tienda ${money(t)}</span>` : '<span class="md-body-small vx-muted">Tu tienda paga el envío completo</span>'}</span>${switchHtml("rg_" + r.id, `<span class="md-sr-only">${esc(r.nombre)} activa</span>`, r.activa)}</div></li>`;
        }).join("");
      };
      wireControls(el);
      el.addEventListener("change", (e) => {
        const m = /^rg_(.+)$/.exec(e.target.id);
        if (!m) return;
        const r = S().reglas.find((x) => x.id === m[1]);
        r.activa = e.target.checked;
        set({ shop: S() });
        toast(`${r.nombre}: ${r.activa ? "activa" : "pausada"}`);
      });
      el.querySelector("#rgNueva").addEventListener("click", () => {
        S().reglas.push({ id: "e" + Date.now(), nombre: "Envío regional", monto: 8, comprador: 100, tienda: 0, activa: true, texto: "El comprador paga el 100% del envío." });
        set({ shop: S() });
        toast("Añadiste una regla: Envío regional $ 8,00");
      });
      paint();
      el.__un = subscribe(paint);
      return el;
    },
    mount(el) {
      return el.__un;
    }
  });
  register("M7.18", {
    render() {
      const el = h(page(topbar("Documentos"), `<div class="vx-pad-h" id="dvRes" role="status"></div><ul class="vx-orders vx-pad-h" role="list" id="dvList"></ul>`, btn("Enviar a verificación", { kind: "filled", block: true, id: "dvGo", attrs: "disabled" })));
      const T2 = { verificado: ["success", "Verificado"], rechazado: ["error", "Rechazado"], pendiente: ["warning", "Pendiente"], revision: ["info", "En revisión"] };
      const paint = () => {
        const d = S().docs, falt = d.filter((x) => x.estado === "rechazado" || x.estado === "pendiente").map((x) => x.nombre);
        el.querySelector("#dvRes").innerHTML = falt.length ? banner("warning", `<b>Verificación incompleta</b><br>Faltan: ${falt.join(" y ")}.`) : S().docsEnviados ? banner("success", "Enviaste tus documentos a verificación") : banner("info", "Tus documentos están listos para enviarse");
        el.querySelector("#dvList").innerHTML = d.map((x) => {
          const [k, l] = T2[x.estado], accion = x.estado === "rechazado" ? "Subir de nuevo" : x.estado === "pendiente" ? "Subir" : null;
          return `<li class="vx-order"><div class="vx-order-main vx-static"><span class="vx-order-text"><span class="md-title-small">${esc(x.nombre)}</span><span class="vx-tagrow">${statusTag(k, l)}<span class="vx-tag md-label-small">Obligatorio</span></span>
          ${x.valido ? `<span class="md-body-medium vx-muted vx-tab-num">Válido hasta: ${x.valido}</span>` : ""}${x.motivo ? `<span class="md-label-medium">Motivo del rechazo</span><span class="md-body-medium vx-reason">${icon("error", 16)} ${esc(x.motivo)}</span><span class="md-body-small vx-muted">${x.formatos}</span>` : ""}${x.ayuda ? `<span class="md-body-medium">${esc(x.ayuda)}</span>` : ""}</span></div>
          ${accion ? `<div class="vx-order-act"><input type="file" class="md-sr-only" id="df_${x.id}" data-doc="${x.id}" accept="image/jpeg,image/png,application/pdf" tabindex="-1">${btn(`${icon("upload", 18)}${accion}`, { kind: "tonal", attrs: `data-up="${x.id}"` })}</div>` : ""}</li>`;
        }).join("");
        el.querySelector("#dvGo").disabled = falt.length > 0 || S().docsEnviados;
      };
      el.addEventListener("click", (e) => {
        const b = e.target.closest("[data-up]");
        if (b) el.querySelector("#df_" + b.dataset.up).click();
      });
      el.addEventListener("change", (e) => {
        const f = e.target.closest("input[type=file]");
        if (!f || !f.files[0]) return;
        const d = S().docs.find((x) => x.id === f.dataset.doc);
        if (!["image/jpeg", "image/png", "application/pdf"].includes(f.files[0].type)) {
          toast("Formato no válido: usa JPG, PNG o PDF");
          return;
        }
        d.estado = "revision";
        d.motivo = "";
        set({ shop: S() });
        toast(`Subiste ${f.files[0].name}`);
      });
      el.querySelector("#dvGo").addEventListener("click", () => {
        S().docsEnviados = true;
        set({ shop: S() });
        toast("Enviaste tus documentos a verificación. Tarda hasta 72 horas hábiles.");
      });
      paint();
      el.__un = subscribe(paint);
      return el;
    },
    mount(el) {
      return el.__un;
    }
  });
  register("M7.19", {
    render() {
      const el = h(`<div>${topbar("Cómo se ve mi tienda")}<section class="vx-profile vx-pad-h">${avatar("FT", true)}<div><p class="md-title-medium" id="tvNom"></p><p class="md-body-medium vx-tab-num">${stars(resenas.rating)} · ${resenas.total} opiniones</p><p class="md-label-medium vx-verified">${icon("check", 16)} Verificada por VexBiz</p></div></section>
      <section class="vx-pad-h"><p class="md-body-large">${icon("pin", 16)} ${esc(S().publica.direccion)}</p><p class="md-body-large vx-tab-num" id="tvProd"></p></section>
      <section class="vx-pad-h"><h2 class="md-title-medium">Para verte completa</h2><ul class="vx-orders vx-nopad" role="list" id="tvMej"></ul><div id="tvTel" hidden class="vx-form">${field({ id: "tvTelF", label: "Teléfono para compradores", inputmode: "tel" })}${btn("Guardar teléfono", { kind: "filled", id: "tvTelOk" })}</div></section></div>`);
      const paint = () => {
        const s = S(), ag = agotados(), m = mejoras();
        el.querySelector("#tvNom").textContent = s.ajustes.nombre;
        el.querySelector("#tvProd").textContent = `${s.publica.productos} productos disponibles (${plural(ag, "agotado", "agotados")})`;
        el.querySelector("#tvMej").innerHTML = m.map((x, i) => `<li class="vx-order"><div class="vx-order-main vx-static"><span class="vx-order-text"><span class="md-body-large">${x.t}</span></span></div><div class="vx-order-act">${btn(x.a, { kind: "filled", attrs: x.tel ? "data-tel" : `data-go="${x.to}" data-kind="${x.kind || "push"}"` })}</div></li>`).join("") || `<li>${stateBlock({ icon: "check", title: "Tu tienda está completa" })}</li>`;
      };
      el.addEventListener("click", (e) => {
        if (e.target.closest("[data-tel]")) {
          el.querySelector("#tvTel").hidden = false;
          el.querySelector("#tvTelF").focus();
        }
      });
      el.querySelector("#tvTelOk").addEventListener("click", () => {
        const t = el.querySelector("#tvTelF").value.trim();
        fieldError(el, "tvTelF", !/^[\d\s+-]{7,}$/.test(t) ? "Escribe un teléfono válido" : "");
        if (!/^[\d\s+-]{7,}$/.test(t)) return;
        S().publica.telefonoPublico = t;
        set({ shop: S() });
        el.querySelector("#tvTel").hidden = true;
        toast("Los compradores ya pueden llamarte");
      });
      paint();
      el.__un = subscribe(paint);
      return el;
    },
    mount(el) {
      return el.__un;
    }
  });
  register("M7.20", {
    render() {
      const el = h(page(
        topbar("Mis fichas"),
        `<p class="md-body-large vx-pad-h">Las tiendas del país publican sus ofertas sobre estas fichas.</p><p class="md-title-small vx-pad-h" id="fiUso"></p><ul class="vx-orders vx-pad-h" role="list" id="fiList"></ul>
      <section class="vx-pad-h"><h2 class="md-title-medium">Quién publica sobre tus fichas</h2><ul class="vx-list" role="list">${[["Frío Total Caracas", 3], ["ClimaRepuestos Valencia", 2], ["Refrigeración El Sol", 1]].map(([n, c]) => `<li class="md-li md-li--2"><span class="md-li-text"><span class="md-li-title md-body-large">${n}</span><span class="md-li-sup md-body-medium vx-tab-num">${plural(c, "ficha tuya", "fichas tuyas")}</span></span></li>`).join("")}</ul></section>`,
        btn(`${icon("add", 20)}Nueva ficha`, { kind: "filled", block: true, go: "M7.21?id=nueva" })
      ));
      const paint = () => {
        const f = S().fichas, uso = f.filter((x) => x.tiendas > 0).length;
        el.querySelector("#fiUso").textContent = `${uso} de ${f.length} están en uso por alguna tienda`;
        el.querySelector("#fiList").innerHTML = f.map((x) => `<li class="vx-order"><button type="button" class="vx-order-main md-sl vx-press" data-go="M7.21?id=${x.id}"><span class="vx-order-text"><span class="md-title-small">${esc(x.nombre)}</span><span class="vx-tagrow">${!x.visible ? statusTag("neutral", "Oculta") : ""}</span>
        <span class="md-body-medium vx-muted">${esc(x.marca)} · ${esc(x.ref)}</span><span class="md-body-medium vx-tab-num">${x.tiendas ? `La ${x.tiendas > 1 ? "usan" : "usa"} ${plural(x.tiendas, "tienda", "tiendas")}` : "Ninguna tienda la usa"}${x.compat ? ` · ${plural(x.compat, "compatibilidad", "compatibilidades")}` : ""}</span></span><span class="vx-muted">${icon("chevron")}</span></button></li>`).join("");
      };
      paint();
      el.__un = subscribe(paint);
      return el;
    },
    mount(el) {
      return el.__un;
    }
  });
  register("M7.21", {
    render(ctx) {
      const nueva = ctx.params.id === "nueva", fi = nueva ? { id: "f" + Date.now(), nombre: "", marca: "", ref: "", tiendas: 0, compat: 0, visible: true, desc: "", lista: [] } : S().fichas.find((x) => x.id === ctx.params.id) || S().fichas[0];
      const g = JSON.parse(JSON.stringify(fi));
      const el = h(`<div class="vx-page"><header class="vx-sheet-head vx-flowhead"><h2 id="sheet-title" class="md-title-large md-sheet-title" tabindex="-1">${nueva ? "Nueva ficha" : esc(fi.nombre)}</h2>${iconBtn("close", "Cerrar", "data-close")}</header>
      <div class="vx-body vx-pad-h">${nueva ? "" : `<p class="md-body-large">${fi.tiendas ? `La ${fi.tiendas > 1 ? "usan" : "usa"} ${plural(fi.tiendas, "tienda", "tiendas")}. Lo que cambies aquí lo verán en su catálogo.` : "Ninguna tienda la usa todavía."}</p>`}
        ${switchHtml("fiVis", "Que las tiendas puedan publicar sobre ella", g.visible)}
        <h2 class="md-title-medium">Ficha</h2><div class="vx-form">${field({ id: "fiNom", label: "Nombre del artículo", value: g.nombre })}${field({ id: "fiMarca", label: "Marca", value: g.marca })}${field({ id: "fiRef", label: "Referencia del fabricante", value: g.ref })}</div>
        <h2 class="md-title-medium">Para qué sirve</h2>${area({ id: "fiDesc", label: "Descripción", value: g.desc, rows: 3 })}
        <h2 class="md-title-medium">Compatibilidades</h2><p class="md-body-medium vx-muted">Marcas, modelos y tipos de equipo con los que es compatible.</p><ul class="vx-list" role="list" id="fiCompat"></ul>
        <div class="vx-form vx-pad-v">${field({ id: "fcMarca", label: "Marca del equipo" })}${field({ id: "fcModelo", label: "Modelo (o «toda la marca»)" })}${field({ id: "fcTipo", label: "Tipo de equipo (opcional)" })}${btn(`${icon("add", 18)}Añadir compatibilidad`, { kind: "tonal", id: "fcAdd" })}</div></div>
      <footer class="vx-actionbar">${btn("Guardar ficha", { kind: "filled", block: true, id: "fiSave" })}</footer></div>`);
      wireControls(el);
      const paint = () => {
        const mas = Math.max(0, g.compat - g.lista.length);
        el.querySelector("#fiCompat").innerHTML = g.lista.map((c, i) => `<li class="md-li md-li--2"><span class="md-li-text"><span class="md-li-title md-body-large">${esc(c.marca)}</span><span class="md-li-sup md-body-medium">${esc(c.modelo)}${c.tipo ? " · " + esc(c.tipo) : ""}</span></span><span class="md-li-end">${iconBtn("trash", `Quitar ${c.marca} ${c.modelo}`, `data-rc="${i}"`)}</span></li>`).join("") + (mas ? `<li class="md-body-medium vx-muted">… y ${plural(mas, "compatibilidad más", "compatibilidades más")}</li>` : "");
      };
      el.addEventListener("click", (e) => {
        const r = e.target.closest("[data-rc]");
        if (r) {
          g.lista.splice(Number(r.dataset.rc), 1);
          if (g.compat > 0) g.compat -= 1;
          paint();
        }
      });
      el.querySelector("#fcAdd").addEventListener("click", () => {
        const m = el.querySelector("#fcMarca").value.trim(), mo = el.querySelector("#fcModelo").value.trim();
        fieldError(el, "fcMarca", !m ? "Escribe la marca" : "");
        fieldError(el, "fcModelo", !mo ? "Escribe el modelo" : "");
        if (!m || !mo) return;
        g.lista.push({ marca: m, modelo: mo, tipo: el.querySelector("#fcTipo").value.trim() });
        g.compat += 1;
        ["fcMarca", "fcModelo", "fcTipo"].forEach((i) => {
          el.querySelector("#" + i).value = "";
        });
        paint();
      });
      el.querySelector("#fiSave").addEventListener("click", async () => {
        const n = el.querySelector("#fiNom").value.trim(), mk = el.querySelector("#fiMarca").value.trim(), rf = el.querySelector("#fiRef").value.trim();
        fieldError(el, "fiNom", !n ? "Escribe el nombre" : "");
        fieldError(el, "fiMarca", !mk ? "Escribe la marca" : "");
        fieldError(el, "fiRef", !rf ? "Escribe la referencia" : "");
        if (!n || !mk || !rf) return;
        Object.assign(g, { nombre: n, marca: mk, ref: rf, desc: el.querySelector("#fiDesc").value.trim(), visible: el.querySelector("#fiVis").checked });
        if (nueva) S().fichas.push(g);
        else Object.assign(fi, g);
        set({ shop: S() });
        toast(nueva ? "Creaste la ficha" : "Guardaste la ficha");
        await closeOverlay();
      });
      paint();
      return el;
    }
  });

  // assets/js/screens/m8.js
  var T = () => state.tec;
  var thumb4 = (n = 24, p = null) => `<span class="vx-thumb-ph vx-thumb-ph--sm vx-photo" aria-hidden="true">${productArt(p)}</span>`;
  var sec3 = (title) => `<h2 class="md-label-large vx-sub vx-sub--list">${title}</h2>`;
  var avisosBtn2 = () => iconBtn("bell", "Avisos en vivo", 'data-go="O.AVI"');
  function quedan(ms, { min = false } = {}) {
    const m = Math.max(0, Math.floor(ms / 6e4)), hh = Math.floor(m / 60), mm = m % 60;
    if (hh === 0) return `${mm} min`;
    return min && mm ? `${hh} h ${mm} min` : `${hh} h`;
  }
  var restante = (s) => s.venceAt ? s.venceAt - Date.now() : -1;
  var urgente = (ms) => ms > 0 && ms < 36e5;
  var bandaHtml = () => `<div class="vx-offline vx-drop" id="banda" role="status" aria-live="polite"></div>`;
  function paintBanda(root3) {
    const b = $("#banda", root3);
    if (!b) return;
    const t = T(), n = t.cambios;
    let ic = "phone", main, sub = "", act = "", cls = "info";
    if (t.offline) {
      main = n ? `${plural(n, "cambio guardado", "cambios guardados")} en el teléfono` : "Sin señal";
      sub = n ? "Se envían solos cuando vuelva la señal" : "Lo que hagas queda guardado en el teléfono.";
      act = btn("Probar conexión", { kind: "text", attrs: "data-senal" });
    } else if (t.enviando) {
      main = `Enviando ${plural(n, "cambio", "cambios")}…`;
      ic = "upload";
    } else {
      main = "Todo está al día";
      ic = "check";
      cls = "success";
    }
    b.className = `vx-offline vx-offline--${cls}${b.dataset.in ? "" : " vx-drop"}`;
    b.dataset.in = "1";
    b.innerHTML = `${icon(ic, 20)}<div class="vx-offline-txt"><p class="md-body-large">${main}</p>${sub ? `<p class="md-body-medium">${sub}</p>` : ""}</div>${act}`;
  }
  function wireBanda(el) {
    paintBanda(el);
    el.addEventListener("click", (e) => {
      if (e.target.closest("[data-senal]")) {
        tecSenal(false);
        toast("Volvió la señal: enviando tus cambios");
      }
    });
    return subscribe(() => paintBanda(el));
  }
  register("M8.01", {
    render(ctx) {
      const el = h(`<div>${topbar("Trabajos", { back: false, trailing: avisosBtn2() })}
      <div class="vx-pad-h vx-stack"><p>${statusTag("success", "Habilitado para recibir trabajos")}</p>${bandaHtml()}
        <div class="md-seg" role="tablist" aria-label="Ver">${[["sol", "Solicitudes"], ["trab", "Mi trabajo"]].map(([k, t], i) => `<button type="button" role="tab" class="md-seg-item md-sl md-label-large${i === 0 ? " md-seg-item--on" : ""}" data-seg="${k}" aria-selected="${i === 0}">${t}</button>`).join("")}</div></div>
      <ul class="vx-orders vx-pad-h" role="list" id="trList" data-stagger></ul></div>`);
      let seg2 = "sol";
      const card = (s, i) => {
        const ms = restante(s), vivo = s.estado === "pendiente" && ms > 0, venc = vivo && urgente(ms);
        return `<li class="vx-order" style="--i:${i}" data-sid="${s.id}"><div class="vx-order-main vx-static"><span class="vx-order-text"><span class="md-title-small">${esc(s.servicio)}</span>
        <span class="md-body-medium">${esc(s.cliente)}</span><span class="md-body-medium vx-muted">${esc(s.direccion)}</span><span class="md-body-medium vx-tab-num">${s.cuando}</span>
        ${vivo ? `<span>${statusTag(venc ? "error" : "warning", `Caduca ${s.venceTxt} · quedan ${quedan(ms)}`)}</span>` : s.estado === "aceptada" ? `<span>${statusTag("success", "Aceptada")}</span>` : s.estado === "rechazada" ? `<span>${statusTag("neutral", "Rechazada")}</span>` : `<span>${statusTag("neutral", "Caducó sin responder")}</span>`}</span></div>
        <div class="vx-order-act">${vivo ? `${btn("Rechazar", { kind: "outlined", attrs: `data-rej="${s.id}"` })}${btn("Ver solicitud", { kind: "filled", go: `M8.02?id=${encodeURIComponent(s.id)}` })}` : btn("Quitar de la lista", { kind: "text", attrs: `data-quit="${s.id}"` })}</div></li>`;
      };
      const paint = () => {
        const t = T(), host = el.querySelector("#trList");
        if (seg2 === "sol") {
          const l = t.solicitudes.filter((s) => !s.oculta);
          host.innerHTML = l.map(card).join("") || `<li>${stateBlock({ icon: "inbox", title: "No tienes solicitudes" })}</li>`;
          return;
        }
        const tr = t.trabajo, enCurso = tr && tr.estado === "ejecucion";
        host.innerHTML = (enCurso ? `<li class="vx-order"><div class="vx-order-main vx-static"><span class="vx-order-text"><span class="md-title-small">${esc(tr.titulo)}</span><span class="md-body-medium">${esc(tr.cliente)}</span><span class="md-body-medium vx-muted">${esc(tr.direccion)}</span><span>${statusTag("info", `En ejecución · Empezó ${tr.empezo}`)}</span></span></div>
        <div class="vx-order-act">${btn("Continuar", { kind: "filled", go: "M8.03" })}</div></li>` : "") + t.cerrados.map((c) => `<li class="vx-order"><div class="vx-order-main vx-static"><span class="vx-order-text"><span class="md-title-small">${esc(c.titulo)}</span><span class="md-body-medium">${esc(c.cliente)}</span><span class="md-body-medium vx-tab-num">${money(c.total)} · garantía hasta ${c.garantiaHasta}</span><span>${statusTag("success", "Trabajo cerrado")}</span></span></div></li>`).join("") || (enCurso ? "" : `<li>${stateBlock({ icon: "briefcase", title: "No tienes un trabajo en curso" })}</li>`);
      };
      el.addEventListener("click", (e) => {
        const sg = e.target.closest("[data-seg]"), rej = e.target.closest("[data-rej]"), q = e.target.closest("[data-quit]");
        if (sg) {
          seg2 = sg.dataset.seg;
          $$("[data-seg]", el).forEach((x) => {
            const on = x === sg;
            x.classList.toggle("md-seg-item--on", on);
            x.setAttribute("aria-selected", on);
          });
          paint();
        }
        if (rej) {
          const s = T().solicitudes.find((x) => x.id === rej.dataset.rej), prev = s.estado;
          s.estado = "rechazada";
          tecCambio(1);
          set({ tec: T() });
          toast(`Rechazaste ${s.id}`, { action: "Deshacer", onAction: () => {
            s.estado = prev;
            set({ tec: T() });
          } });
        }
        if (q) {
          T().solicitudes.find((x) => x.id === q.dataset.quit).oculta = true;
          set({ tec: T() });
        }
      });
      paint();
      el.__un = [wireBanda(el), subscribe(paint)];
      el.__tick = setInterval(paint, 3e4);
      return el;
    },
    mount(el, ctx) {
      if (ctx.first) $$("[data-stagger]", el).forEach(stagger);
      return () => {
        el.__un.forEach((f) => f());
        clearInterval(el.__tick);
      };
    }
  });
  register("M8.02", {
    render(ctx) {
      const s = T().solicitudes.find((x) => x.id === decodeURIComponent(ctx.params.id || "#S-1082")) || T().solicitudes[0];
      const bloque = (k, v) => `<section class="vx-pad-h"><h2 class="md-label-medium vx-eyebrow">${k}</h2>${v}</section>`;
      const el = h(page(
        topbar(`Solicitud ${s.id}`),
        `
      <section class="vx-pad-h" id="venceBox"></section>
      ${bloque("SERVICIO PEDIDO", `<p class="md-title-small">${esc(s.servicio)}</p><p class="md-body-large vx-tab-num">Importe acordado: ${money(s.total)}</p>`)}
      ${bloque("CLIENTE Y LUGAR", `<p class="md-title-small">${esc(s.cliente)}</p><p class="md-body-large">${esc(s.direccion)}, ${esc(s.ciudad)}</p>`)}
      ${bloque("CUÁNDO", `<p class="md-body-large vx-tab-num">${s.cuandoLargo}</p><p class="md-body-medium vx-muted vx-tab-num">Recibida el ${s.recibida}</p>`)}
      ${s.notas ? bloque("NOTAS DEL CLIENTE", `<p class="md-body-large">«${esc(s.notas)}»</p>`) : ""}`,
        `${btn("Rechazar", { kind: "outlined", id: "sRej" })}${btn("Contactar", { kind: "outlined", attrs: 'data-toast="Abre WhatsApp con el cliente"' })}${btn("Aceptar", { kind: "filled", id: "sOk" })}`
      ));
      const paint = () => {
        const ms = restante(s), vivo = s.estado === "pendiente" && ms > 0, u = urgente(ms);
        el.querySelector("#venceBox").innerHTML = vivo ? `<p class="md-body-large">${statusTag(u ? "error" : "warning", `Caduca ${s.venceTxt}`)}</p><p class="md-title-medium vx-tab-num ${u ? "vx-is-urgent" : ""}">Quedan ${quedan(ms, { min: true })} para responder</p>
           <span class="vx-bar-track" aria-hidden="true"><span class="vx-bar-fill vx-countbar" id="sBar"></span></span>${u ? `<p class="vx-urgent">${icon("warning", 18)} Queda menos de una hora</p>` : ""}` : `<p>${statusTag(s.estado === "aceptada" ? "success" : "neutral", s.estado === "aceptada" ? "Aceptada" : s.estado === "rechazada" ? "Rechazada" : "Caducó sin responder")}</p>`;
        const bar = el.querySelector("#sBar");
        if (bar && !bar.dataset.on) {
          bar.dataset.on = "1";
          bar.style.setProperty("--vx-count", ms + "ms");
        }
        ["sRej", "sOk"].forEach((i) => {
          el.querySelector("#" + i).disabled = !vivo;
        });
      };
      el.querySelector("#sRej").addEventListener("click", () => {
        s.estado = "rechazada";
        tecCambio(1);
        set({ tec: T() });
        toast(`Rechazaste ${s.id}`);
        back();
      });
      el.querySelector("#sOk").addEventListener("click", () => {
        s.estado = "aceptada";
        tecCambio(1);
        set({ tec: T() });
        toast(`Aceptaste ${s.id}. Quedó en tu agenda.`);
        go("M8.03", { kind: "push" });
      });
      paint();
      el.__tick = setInterval(paint, 2e4);
      return el;
    },
    mount(el) {
      return () => clearInterval(el.__tick);
    }
  });
  register("M8.03", {
    render() {
      const tr = T().trabajo;
      if (!tr || tr.estado !== "ejecucion") return h(`<div>${topbar("Trabajo")}${stateBlock({ icon: "briefcase", title: "No tienes un trabajo en curso", action: btn("Ver solicitudes", { kind: "filled", go: "M8.01", kindNav: "swap" }) })}</div>`);
      const p = tr.parte;
      const el = h(page(
        topbar("Trabajo", { trailing: iconBtn("phone", "Llamar al cliente", 'data-toast="Abre el teléfono con el número del cliente"') }),
        `
      <section class="vx-pad-h"><h2 class="md-title-large">${esc(tr.titulo)}</h2><p class="md-title-small">${esc(tr.cliente)}</p><p class="md-body-medium vx-muted">${esc(tr.direccion)}</p><p>${statusTag("info", `En ejecución · Empezó ${tr.empezo}`)}</p></section>
      <div class="vx-pad-h">${bandaHtml()}</div>
      <ul class="vx-list" role="list">${row({ ic: "map", title: "Cómo llegar", sup: esc(tr.corta), attrs: 'data-toast="Abre el mapa con la dirección"' })}${row({ ic: "bag", title: "Compras de este trabajo", sup: "Repuestos que compraste para esta obra", go: "M8.11", kind: "swap" })}</ul>
      <section class="vx-pad-h"><div class="vx-sechead vx-sechead--0"><h2 class="md-title-medium">El parte</h2><span class="md-body-medium vx-save" id="saveSt" role="status" aria-live="polite"></span></div>
        <form class="vx-form" novalidate onsubmit="return false">${field({ id: "pDiag", label: "Diagnóstico", value: p.diagnostico })}${field({ id: "pMat", label: "Materiales usados", value: p.materiales })}${field({ id: "pHoras", label: "Horas trabajadas", value: p.horas, inputmode: "decimal" })}
          ${area({ id: "pHecho", label: "Lo que hiciste", value: p.hecho, rows: 4 })}${area({ id: "pNotas", label: "Notas para el cliente", value: p.notas, rows: 3 })}</form>
        <div class="vx-stack vx-pad-v">${btn(`${icon("camera", 20)}Añadir foto del trabajo`, { kind: "tonal", block: true, attrs: 'data-toast="Foto guardada en el parte"' })}${btn("Compras de trabajo", { kind: "tonal", block: true, go: "M8.11", kindNav: "swap" })}${btn("Llamar al cliente", { kind: "tonal", block: true, attrs: 'data-toast="Abre el teléfono con el número del cliente"' })}</div></section>`,
        btn("Cerrar el trabajo", { kind: "filled", block: true, go: "M8.04" })
      ));
      const st = el.querySelector("#saveSt");
      let t = null, saving = false;
      const lbl = () => T().offline ? "Guardado en el teléfono" : "Guardado";
      st.innerHTML = `${icon("check", 16)} ${lbl()}`;
      const map = { pDiag: "diagnostico", pMat: "materiales", pHoras: "horas", pHecho: "hecho", pNotas: "notas" };
      el.addEventListener("input", (e) => {
        const k = map[e.target.id];
        if (!k) return;
        p[k] = e.target.value;
        st.textContent = "Guardando…";
        saving = true;
        clearTimeout(t);
        t = setTimeout(() => {
          saving = false;
          st.innerHTML = `${icon("check", 16)} ${lbl()}`;
          tecCambio(1);
        }, 600);
      });
      const un = wireBanda(el), un2 = subscribe(() => {
        if (!saving) st.innerHTML = `${icon("check", 16)} ${lbl()}`;
      });
      el.__un = () => {
        un();
        un2();
      };
      return el;
    },
    mount(el) {
      return () => el.__un && el.__un();
    }
  });
  var sumaMeses = (d, n) => new Date(d.getFullYear(), d.getMonth() + n, d.getDate());
  var GAR = [["Sin garantía", 0], ["1 mes", 1], ["3 meses", 3], ["6 meses", 6]];
  var compraGastada = () => round2(comprasTrabajo[0].items.reduce((s, i) => s + i.total, 0));
  register("M8.04", {
    render() {
      const tr = T().trabajo;
      if (!tr || tr.estado !== "ejecucion") return h(`<div>${topbar("Cerrar el trabajo")}${stateBlock({ icon: "briefcase", title: "No tienes un trabajo en curso" })}</div>`);
      const c = tr.cierre || { mano: tr.manoDeObra, mat: compraGastada(), otros: tr.otros, hecho: tr.parte.hecho, meses: tr.garantiaMeses };
      const el = h(page(
        topbar("Cerrar el trabajo"),
        `
      <section class="vx-pad-h"><p class="md-title-small">${esc(tr.cliente)}</p><p class="md-body-medium vx-muted">${esc(tr.corta)}</p></section>
      <div class="vx-pad-h">${banner("info", "VexBiz no cobra este trabajo. Aquí sólo queda registrado lo que costó.")}</div>
      <div class="vx-pad-h vx-form">${field({ id: "cMano", label: "Mano de obra (USD)", value: num(c.mano), inputmode: "decimal" })}${field({ id: "cMat", label: "Materiales (USD)", value: num(c.mat), inputmode: "decimal", help: "Sale de las compras de este trabajo" })}${field({ id: "cOtros", label: "Otros gastos (USD)", value: num(c.otros), inputmode: "decimal" })}
        <p class="md-title-large vx-tab-num vx-totrow"><span>Total</span><b id="cTotal"></b></p>
        ${area({ id: "cHecho", label: "Lo que hiciste", value: c.hecho, rows: 4 })}${select({ id: "cGar", label: "Garantía", options: GAR.map(([t]) => t), value: GAR.find(([, m]) => m === c.meses)[0] })}
        <p class="md-body-large" id="cVig" role="status"></p></div>`,
        btn("Pedir la firma del cliente", { kind: "filled", block: true, id: "cGo" })
      ));
      const val = (id) => Number(String(el.querySelector("#" + id).value).replace(/\./g, "").replace(",", ".")) || 0;
      const meses = () => GAR.find(([t]) => t === el.querySelector("#cGar").value)[1];
      const paint = () => {
        el.querySelector("#cTotal").textContent = money(round2(val("cMano") + val("cMat") + val("cOtros")));
        const m = meses();
        el.querySelector("#cVig").textContent = m ? `Vigente hasta el ${date(sumaMeses(HOY, m))}` : "Sin garantía";
      };
      el.addEventListener("input", paint);
      el.addEventListener("change", paint);
      el.querySelector("#cGo").addEventListener("click", () => {
        const total = round2(val("cMano") + val("cMat") + val("cOtros")), hecho = el.querySelector("#cHecho").value.trim();
        fieldError(el, "cMano", total <= 0 ? "Escribe lo que costó el trabajo" : "");
        fieldError(el, "cHecho", !hecho ? "Cuenta qué hiciste" : "");
        if (total <= 0 || !hecho) return;
        tr.cierre = { mano: val("cMano"), mat: val("cMat"), otros: val("cOtros"), hecho, meses: meses() };
        tecCambio(1);
        set({ tec: T() });
        go("M8.05", { kind: "push" });
      });
      paint();
      return el;
    }
  });
  register("M8.05", {
    render() {
      const tr = T().trabajo, c = tr?.cierre;
      if (!tr || !c) return h(`<div>${topbar("Firma del cliente")}${stateBlock({ icon: "edit", title: "Primero cierra el trabajo", action: btn("Ir a cerrar el trabajo", { kind: "filled", go: "M8.04" }) })}</div>`);
      const total = round2(c.mano + c.mat + c.otros), vig = c.meses ? date(sumaMeses(HOY, c.meses)) : null;
      const el = h(page(
        topbar("Firma del cliente"),
        `
      <section class="vx-pad-h"><p class="md-body-large">${esc(c.hecho)}</p><p class="md-title-large vx-tab-num">Total ${money(total)}</p><p class="md-body-medium vx-tab-num">${c.meses ? `Garantía ${plural(c.meses, "mes", "meses")} · hasta ${vig}` : "Sin garantía"}</p></section>
      <div class="vx-pad-h"><div class="vx-sign"><canvas id="firma" class="vx-canvas" role="img" aria-label="Zona de firma: el cliente firma aquí con el dedo"></canvas><p class="vx-sign-hint md-body-medium vx-muted" id="fHint">Firma aquí con el dedo</p></div>
        <div class="vx-row-end">${btn("Borrar firma", { kind: "text", id: "fBorrar" })}</div>${field({ id: "fNombre", label: "Nombre del cliente", value: tr.cliente })}</div>`,
        `${btn("Volver", { kind: "text", attrs: "data-back" })}${btn("Cerrar el trabajo", { kind: "filled", id: "fOk", attrs: "disabled" })}`
      ));
      const cv = el.querySelector("#firma"), g = cv.getContext("2d");
      let dibujando = false, trazos = 0, last = null;
      const medir = () => {
        const r = cv.getBoundingClientRect(), d = window.devicePixelRatio || 1;
        cv.width = Math.round(r.width * d) || 600;
        cv.height = Math.round(r.height * d) || 240;
        g.lineWidth = 3 * d;
        g.lineCap = "round";
        g.lineJoin = "round";
        g.strokeStyle = getComputedStyle(cv).color;
      };
      const pos = (e) => {
        const r = cv.getBoundingClientRect();
        return [(e.clientX - r.left) * (cv.width / r.width), (e.clientY - r.top) * (cv.height / r.height)];
      };
      const estado = () => {
        el.querySelector("#fOk").disabled = !(trazos > 0 && el.querySelector("#fNombre").value.trim());
        el.querySelector("#fHint").hidden = trazos > 0;
      };
      cv.addEventListener("pointerdown", (e) => {
        try {
          cv.setPointerCapture(e.pointerId);
        } catch {
        }
        dibujando = true;
        last = pos(e);
        g.beginPath();
        g.moveTo(...last);
        g.lineTo(last[0] + 0.1, last[1] + 0.1);
        g.stroke();
        trazos++;
        estado();
      });
      cv.addEventListener("pointermove", (e) => {
        if (!dibujando) return;
        const p = pos(e);
        g.beginPath();
        g.moveTo(...last);
        g.lineTo(...p);
        g.stroke();
        last = p;
      });
      ["pointerup", "pointercancel"].forEach((ev) => cv.addEventListener(ev, () => {
        dibujando = false;
      }));
      el.querySelector("#fBorrar").addEventListener("click", () => {
        g.clearRect(0, 0, cv.width, cv.height);
        trazos = 0;
        estado();
      });
      el.querySelector("#fNombre").addEventListener("input", estado);
      el.querySelector("#fOk").addEventListener("click", () => {
        tr.estado = "cerrado";
        T().cerrados.unshift({ titulo: tr.titulo, cliente: tr.cliente, total, garantiaHasta: vig || "—" });
        tecCambio(1);
        set({ tec: T() });
        toast("Trabajo cerrado");
        go("M8.01", { kind: "swap" });
      });
      el.__medir = medir;
      return el;
    },
    mount(el) {
      el.__medir && el.__medir();
    }
  });
  register("M8.06", {
    render() {
      const el = h(`<div>${topbar("Servicios", { back: false })}<ul class="vx-orders vx-pad-h" role="list" id="svList"></ul>
      <div class="vx-pad-h">${btn("Añadir servicio", { kind: "tonal", block: true, attrs: 'data-toast="Los servicios nuevos los revisa VexBiz antes de mostrarlos"' })}</div>
      <ul class="vx-list" role="list">${row({ ic: "wrench", title: "Mis oficios", sup: "Lo que sabes hacer y su certificación", go: "M8.07" })}${row({ ic: "clock", title: "Cobertura y horario", sup: `${T().radio} km alrededor de Valencia · ${T().horario.filter((d) => d.on).length} días a la semana`, go: "M8.08" })}</ul></div>`);
      const paint = () => {
        el.querySelector("#svList").innerHTML = T().servicios.map((s) => `<li class="vx-order"><div class="vx-order-main vx-static"><span class="vx-order-text"><span class="md-title-small">${esc(s.titulo)}</span>
      <span>${statusTag(s.visible ? "success" : "neutral", s.visible ? "Visible" : "Pausado")}</span><span class="md-body-medium vx-muted vx-tab-num">${s.oficio} · ${s.min} min</span><span class="md-body-medium">${esc(s.texto)}</span><b class="md-title-small vx-tab-num">${money(s.precio)}</b></span>
      ${switchHtml("vis_" + s.id, '<span class="md-sr-only">Visible en tu perfil</span>', s.visible)}</div></li>`).join("");
      };
      wireControls(el);
      el.addEventListener("change", (e) => {
        const t = e.target.closest("input[role=switch]");
        if (!t || !t.id.startsWith("vis_")) return;
        const s = T().servicios.find((x) => "vis_" + x.id === t.id);
        s.visible = t.checked;
        tecCambio(1);
        set({ tec: T() });
        paint();
        toast(`${s.titulo}: ${s.visible ? "visible" : "pausado"}`);
      });
      paint();
      return el;
    }
  });
  register("M8.07", {
    render() {
      const el = h(`<div>${topbar("Mis oficios")}<p class="md-body-large vx-pad-h">Tú te apuntas; la certificación la da VexBiz al revisar tus documentos.</p>
      <ul class="vx-orders vx-pad-h" role="list" id="ofMios"></ul>${sec3("Oficios disponibles")}<div class="vx-pad-h">${field({ id: "ofQ", label: "Buscar oficios", type: "search", autocomplete: "off" })}</div><ul class="vx-orders vx-pad-h" role="list" id="ofDisp"></ul></div>`);
      let q = "";
      const paint = () => {
        const t = T(), mios = t.oficios, libres = oficiosDisponibles.filter((o) => !mios.some((m) => m.nombre === o) && o.toLowerCase().includes(q.toLowerCase()));
        el.querySelector("#ofMios").innerHTML = mios.map((o) => `<li class="vx-order"><div class="vx-order-main vx-static"><span class="vx-order-text"><span class="md-title-small">${esc(o.nombre)}</span><span>${o.estado === "certificado" ? statusTag("success", `Certificado · ${o.fecha}`) : statusTag("info", "Apuntado · en revisión")}</span></span>
        ${o.estado === "revision" ? btn("Quitar", { kind: "text", attrs: `data-qo="${o.id}"` }) : ""}</div></li>`).join("");
        el.querySelector("#ofDisp").innerHTML = libres.map((o) => `<li class="vx-order"><div class="vx-order-main vx-static"><span class="vx-order-text"><span class="md-title-small">${esc(o)}</span></span>${btn("Apuntarme", { kind: "tonal", attrs: `data-ao="${esc(o)}"` })}</div></li>`).join("") || `<li>${stateBlock({ icon: "searchoff", title: "No hay más oficios para apuntarte" })}</li>`;
      };
      el.addEventListener("click", (e) => {
        const a = e.target.closest("[data-ao]"), r = e.target.closest("[data-qo]");
        if (a) {
          T().oficios.push({ id: "o" + Date.now(), nombre: a.dataset.ao, estado: "revision" });
          tecCambio(1);
          set({ tec: T() });
          toast(`Te apuntaste en ${a.dataset.ao}. VexBiz lo revisa con tus documentos.`);
        }
        if (r) {
          const i = T().oficios.findIndex((o) => o.id === r.dataset.qo), [gone] = T().oficios.splice(i, 1);
          tecCambio(1);
          set({ tec: T() });
          toast(`Quitaste ${gone.nombre}`, { action: "Deshacer", onAction: () => {
            T().oficios.splice(i, 0, gone);
            set({ tec: T() });
          } });
        }
      });
      el.querySelector("#ofQ").addEventListener("input", (e) => {
        q = e.target.value.trim();
        paint();
      });
      paint();
      el.__un = subscribe(paint);
      return el;
    },
    mount(el) {
      return el.__un;
    }
  });
  register("M8.08", {
    render() {
      const t = T(), hr = t.horario.map((d) => ({ ...d }));
      const el = h(page(
        topbar("Cobertura y horario"),
        `
      <section class="vx-pad-h"><h2 class="md-title-medium">Zona de cobertura</h2><p class="md-body-large" id="zTxt"></p><p class="md-body-medium vx-muted">${icon("pin", 14)} Punto base fijado en Valencia</p>${field({ id: "zKm", label: "Radio de cobertura (km)", value: String(t.radio), inputmode: "numeric" })}</section>
      <section class="vx-pad-h"><h2 class="md-title-medium">Horario semanal</h2><ul class="vx-days" role="list">${hr.map((d, i) => `<li class="vx-day"><div class="vx-day-head"><span class="md-title-small">${d.d}</span>${switchHtml("dia" + i, `<span class="md-sr-only">${d.d} disponible</span>`, d.on)}</div>
        <div class="vx-day-body" id="db${i}"></div></li>`).join("")}</ul></section>`,
        btn("Guardar cambios", { kind: "filled", block: true, id: "hGo" })
      ));
      wireControls(el);
      const body = (i) => {
        const d = hr[i], b = el.querySelector("#db" + i);
        b.innerHTML = d.on ? `<label class="vx-time"><span class="md-body-small vx-muted">De</span><input type="time" class="vx-timein" id="de${i}" value="${d.de}"></label><span class="md-body-medium">a</span><label class="vx-time"><span class="md-body-small vx-muted">Hasta</span><input type="time" class="vx-timein" id="a${i}" value="${d.a}"></label><p class="md-body-small vx-error-t" id="er${i}" role="alert"></p>` : '<p class="md-body-large vx-muted">No disponible</p>';
      };
      hr.forEach((_, i) => body(i));
      el.addEventListener("change", (e) => {
        const t2 = e.target;
        const m = /^dia(\d)$/.exec(t2.id);
        if (m) {
          const i = Number(m[1]);
          hr[i].on = t2.checked;
          if (t2.checked && !hr[i].de) {
            hr[i].de = "08:00";
            hr[i].a = "17:00";
          }
          body(i);
          return;
        }
        const n = /^(de|a)(\d)$/.exec(t2.id);
        if (n) {
          hr[Number(n[2])][n[1]] = t2.value;
          el.querySelector("#er" + n[2]).textContent = "";
        }
      });
      const zona = () => {
        el.querySelector("#zTxt").textContent = `Recibes solicitudes a menos de ${el.querySelector("#zKm").value || "…"} km de Valencia.`;
      };
      el.querySelector("#zKm").addEventListener("input", zona);
      zona();
      el.querySelector("#hGo").addEventListener("click", () => {
        const km = Number(el.querySelector("#zKm").value);
        fieldError(el, "zKm", !(km >= 5 && km <= 100) ? "Escribe un radio entre 5 y 100 km" : "");
        let bad = !(km >= 5 && km <= 100);
        hr.forEach((d, i) => {
          if (d.on && (!d.de || !d.a || d.a <= d.de)) {
            bad = true;
            el.querySelector("#er" + i).textContent = "La hora final debe ser después de la inicial";
          }
        });
        if (bad) return;
        t.radio = km;
        t.horario = hr;
        tecCambio(1);
        set({ tec: t });
        toast("Guardaste tu cobertura y horario");
        back();
      });
      return el;
    }
  });
  var DOC_TAG = { verificado: ["success", "Verificado"], rechazado: ["error", "Rechazado"], falta: ["warning", "Falta subirlo"], vencido: ["error", "Vencido"], revision: ["info", "En revisión"] };
  var docsFaltan = () => T().docs.filter((d) => d.obligatorio && (d.estado === "rechazado" || d.estado === "falta")).length;
  register("M8.09", {
    render() {
      const el = h(`<div>${topbar("Mis documentos")}<div class="vx-pad-h" id="docRes" role="status"></div><ul class="vx-orders vx-pad-h" role="list" id="docList"></ul></div>`);
      const paint = () => {
        const n = docsFaltan();
        el.querySelector("#docRes").innerHTML = n ? banner("warning", `Te faltan ${plural(n, "documento obligatorio", "documentos obligatorios")}`) : banner("success", "Tus documentos obligatorios están al día");
        el.querySelector("#docList").innerHTML = T().docs.map((d) => {
          const vencido = d.vence && d.vence < HOY, est = vencido ? "vencido" : d.estado, [k, l] = DOC_TAG[est];
          const accion = est === "rechazado" ? "Subir de nuevo" : est === "falta" ? "Subir" : est === "vencido" ? "Renovar" : null;
          return `<li class="vx-order"><div class="vx-order-main vx-static"><span class="vx-order-text"><span class="md-title-small">${esc(d.nombre)}</span><span class="vx-tagrow">${statusTag(k, l)}<span class="vx-tag md-label-small">${d.obligatorio ? "Obligatorio" : "Opcional"}</span></span>
          <span class="md-body-medium">${esc(d.ayuda)}</span>${d.subido ? `<span class="md-body-medium vx-muted vx-tab-num">Subido el ${d.subido}${d.valido ? ` · Válido hasta ${d.valido}` : ""}</span>` : ""}
          ${est === "rechazado" ? `<span class="md-body-medium vx-reason">${icon("error", 16)} ${esc(d.motivo)}</span>` : ""}${vencido ? `<span class="md-body-medium vx-muted vx-tab-num">Venció el ${date(d.vence)}</span>` : ""}</span></div>
          ${accion ? `<div class="vx-order-act"><input type="file" class="md-sr-only" id="f_${d.id}" accept="image/jpeg,image/png,image/webp,application/pdf" data-doc="${d.id}" tabindex="-1">${btn(`${icon("upload", 18)}${accion}`, { kind: "tonal", attrs: `data-sub="${d.id}"` })}</div>` : ""}</li>`;
        }).join("");
      };
      el.addEventListener("click", (e) => {
        const b = e.target.closest("[data-sub]");
        if (b) el.querySelector("#f_" + b.dataset.sub).click();
      });
      el.addEventListener("change", (e) => {
        const f = e.target.closest("input[type=file]");
        if (!f || !f.files[0]) return;
        const file = f.files[0], d = T().docs.find((x) => x.id === f.dataset.doc);
        if (file.size > 10 * 1024 * 1024) {
          toast("El archivo pesa más de 10 MB");
          return;
        }
        d.estado = "revision";
        d.subido = date(HOY).slice(0, 5);
        d.vence = null;
        d.motivo = "";
        d.valido = "";
        tecCambio(1);
        set({ tec: T() });
        toast(`Subiste ${file.name}. VexBiz lo revisa en hasta 72 horas hábiles.`);
      });
      paint();
      el.__un = subscribe(paint);
      return el;
    },
    mount(el) {
      return el.__un;
    }
  });
  register("M8.10", {
    render() {
      const pf = perfilTecnico, el = h(`<div>${topbar("Perfil", { back: false, trailing: avisosBtn2() })}
      <section class="vx-profile vx-pad-h">${avatar("CM", true)}<div><p class="md-title-medium">Carlos Mendoza</p><p id="pfSello"></p></div></section>
      <dl class="vx-stats3 vx-pad-h vx-stats3--3">${[[num(pf.rating, 1), "calificación"], [pf.opiniones, "opiniones"], [pf.trabajos, "trabajos"]].map(([n, l]) => `<div class="vx-stat vx-stat--c"><dd class="md-title-medium vx-tab-num">${n}</dd><dt class="md-body-small vx-muted">${l}</dt></div>`).join("")}</dl>
      <section class="vx-pad-h"><p><span class="vx-tag md-label-medium">${pf.oficio}</span></p><div class="vx-sechead vx-sechead--0"><h2 class="md-title-medium">Presentación pública</h2>${btn("Editar", { kind: "text", id: "pfEd" })}</div>
        <p class="md-body-large" id="pfTxt"></p><div id="pfForm" hidden>${area({ id: "pfArea", label: "Presentación pública", rows: 4 })}<div class="vx-row-end">${btn("Guardar", { kind: "filled", id: "pfSave" })}</div></div><p class="md-body-medium">${plural(pf.anios, "año", "años")} de experiencia</p>
        ${btn("Ver mi perfil público", { kind: "text", go: "M4.04?id=cm" })}</section>
      <ul class="vx-list" role="list">${row({ ic: "doc", title: "Mis documentos", go: "M8.09" })}${row({ ic: "wrench", title: "Mis oficios", go: "M8.07" })}${row({ ic: "wallet", title: "Membresía", go: "M8.12" })}${row({ ic: "swap", title: "Cambiar de modo", go: "O.MOD" })}</ul></div>`);
      const paint = () => {
        const oblig = T().docs.filter((d) => d.obligatorio), faltan = docsFaltan(), ok = oblig.every((d) => d.estado === "verificado");
        el.querySelector("#pfSello").innerHTML = ok ? statusTag("success", "Verificado") : `${statusTag(faltan ? "warning" : "info", "Sin verificar")}<span class="md-body-medium vx-muted vx-block-t">${faltan ? "Sube tus documentos para obtener el sello" : "VexBiz está revisando tus documentos"}</span>${btn("Ir a mis documentos", { kind: "text", go: "M8.09" })}`;
        el.querySelector("#pfTxt").textContent = T().presentacion;
      };
      el.querySelector("#pfEd").addEventListener("click", () => {
        const f = el.querySelector("#pfForm");
        f.hidden = !f.hidden;
        if (!f.hidden) {
          el.querySelector("#pfArea").value = T().presentacion;
          el.querySelector("#pfArea").focus();
        }
      });
      el.querySelector("#pfSave").addEventListener("click", () => {
        const v = el.querySelector("#pfArea").value.trim();
        fieldError(el, "pfArea", !v ? "Escribe tu presentación" : "");
        if (!v) return;
        T().presentacion = v;
        tecCambio(1);
        set({ tec: T() });
        el.querySelector("#pfForm").hidden = true;
        paint();
        toast("Actualizaste tu presentación");
      });
      paint();
      el.__un = subscribe(paint);
      return el;
    },
    mount(el) {
      return el.__un;
    }
  });
  register("M8.11", {
    render() {
      const E2 = { Entregado: "success", "En camino": "info", "Pago reportado": "info" };
      return h(`<div>${topbar("Compras de trabajo", { back: false })}
      ${comprasTrabajo.map((g) => {
        const gastado = round2(g.items.reduce((s, i) => s + i.total, 0));
        return `<section class="vx-pad-h vx-cartgroup-t"><h2 class="md-title-medium">${esc(g.donde)}</h2><ul class="vx-orders vx-nopad" role="list">${g.items.map((i) => `<li class="vx-order"><button type="button" class="vx-order-main md-sl vx-press" data-go="M8.03">${thumb4()}
          <span class="vx-order-text"><span class="md-body-large vx-tab-num">${i.id}</span><span class="md-body-medium vx-muted">${esc(i.tienda)}</span><span>${statusTag(E2[i.estado] || "neutral", i.estado)}</span></span><span class="vx-order-end"><b class="md-title-small vx-tab-num">${money(i.total)}</b><span class="md-body-small vx-muted vx-tab-num">${i.fecha}</span></span></button></li>`).join("")}</ul>
          <p class="vx-sumrow md-title-small vx-tab-num"><span>Gastado en este trabajo</span><b>${money(gastado)} USD</b></p><div class="vx-row-end">${btn("Ver el trabajo", { kind: "text", go: "M8.03" })}</div></section>`;
      }).join("")}
      <div class="vx-pad-h vx-stack"><p class="md-body-medium vx-muted">Aquí sólo salen las compras que marcaste para un trabajo al comprar.</p>${btn("Comprar repuestos", { kind: "text", go: "M2.01", kindNav: "mode" })}</div></div>`);
    }
  });
  var membresia = (forzarSin) => ({
    render() {
      const sin = forzarSin ?? T().paisSinMembresia;
      if (sin) return h(`<div>${topbar("Membresía")}<div class="vx-pad-h vx-stack">${banner("info", "En este país no hace falta membresía para recibir trabajos")}<p class="md-body-large">Mantén tus documentos y oficios al día para seguir apareciendo en el directorio.</p></div>
      <ul class="vx-list" role="list">${row({ ic: "doc", title: "Mis documentos", go: "M8.09" })}${row({ ic: "wrench", title: "Mis oficios", go: "M8.07" })}</ul></div>`);
      const sel = T().plan || "pro";
      const el = h(page(
        topbar("Membresía"),
        `<p class="md-body-large vx-pad-h">Para recibir solicitudes hace falta una membresía activa.</p>
      <div class="vx-options vx-pad-h" role="radiogroup" aria-label="Plan de membresía">${planes.map((p) => radioOpt({
          name: "plan",
          value: p.id,
          checked: sel === p.id,
          title: `${p.nombre}${p.recomendado ? ' <span class="vx-tag md-label-small">Recomendado</span>' : ""}`,
          text: `<b class="md-title-medium vx-tab-num">${money(p.precio)}</b> USD · Se renueva cada 30 días`,
          extra: `<ul class="vx-checklist vx-checklist--s" role="list">${p.lista.map((l) => `<li>${icon("check", 16)}<span class="md-body-medium">${l}</span></li>`).join("")}</ul>`
        })).join("")}</div>
      <p class="md-body-medium vx-muted vx-pad-h">El pago de la membresía se coordina con soporte.</p>`,
        btn("Coordinar el pago con soporte", { kind: "filled", block: true, id: "mGo" })
      ));
      wireControls(el);
      el.querySelector("#mGo").addEventListener("click", () => {
        const id = el.querySelector("input[name=plan]:checked").value;
        T().plan = id;
        tecCambio(1);
        set({ tec: T() });
        toast(`Elegiste ${planes.find((p) => p.id === id).nombre}. Soporte te escribe por WhatsApp.`);
      });
      return el;
    }
  });
  register("M8.12", membresia(void 0));
  register("M8.12S", membresia(true));

  // assets/js/screens/m9.js
  var E = () => state.emp;
  var avisosBtn3 = () => iconBtn("bell", "Avisos en vivo", 'data-go="O.AVI"');
  var sec4 = (title) => `<h2 class="md-label-large vx-sub vx-sub--list">${title}</h2>`;
  var sumaMeses2 = (d, n) => new Date(d.getFullYear(), d.getMonth() + n, d.getDate());
  var GAR2 = [["Sin garantía", 0], ["1 mes", 1], ["3 meses", 3], ["6 meses", 6]];
  var num0 = (el, id) => Number(String(el.querySelector("#" + id).value).replace(/\./g, "").replace(",", ".")) || 0;
  var solId = (ctx) => decodeURIComponent(ctx.params.id || "#S-2041");
  var buscar2 = (id) => E().solicitudes.find((x) => x.id === id) || E().solicitudes[0];
  var pasada = (s) => (s.estado === "aceptada" || s.estado === "enCurso") && s.para && s.para < HOY;
  var grupo = {
    sin: (s) => s.estado === "porResponder",
    pasada,
    curso: (s) => ["cotizada", "aceptada", "enCurso"].includes(s.estado) && !pasada(s),
    term: (s) => s.estado === "terminada"
  };
  var terminadas = () => TERMINADAS_BASE + E().cerradas;
  var conteo = (k) => k === "term" ? terminadas() : E().solicitudes.filter(grupo[k]).length;
  var CHIPS = [["sin", "Sin responder"], ["pasada", "Fecha pasada"], ["curso", "En curso"], ["term", "Terminadas"]];
  register("M9.01", {
    render() {
      const el = h(`<div>${topbar("Solicitudes", { back: false, trailing: avisosBtn3() })}
      <div class="vx-chipwrap vx-pad-h" role="group" aria-label="Filtrar solicitudes" id="sChips"></div>
      <ul class="vx-orders vx-pad-h" role="list" id="sList" data-stagger></ul></div>`);
      let f = "sin";
      const tag2 = (s) => {
        if (s.estado === "porResponder") {
          const ms = s.venceAt - Date.now();
          return statusTag(ms < 36e5 ? "error" : "warning", ms > 0 ? `Caduca en ${quedan(ms)}` : "Caducó sin responder");
        }
        if (pasada(s)) return statusTag("error", `Fecha pasada · era el ${date(s.para)}`);
        return statusTag(s.estado === "cotizada" ? "info" : s.estado === "enCurso" ? "info" : "success", { cotizada: "Cotización enviada", aceptada: "Aceptada", enCurso: "En curso", terminada: "Terminado" }[s.estado]);
      };
      const card = (s, i) => `<li class="vx-order" style="--i:${i}"><button type="button" class="vx-order-main md-sl vx-press" data-go="M9.02?id=${encodeURIComponent(s.id)}"><span class="vx-order-text">
      <span class="md-body-medium vx-muted vx-tab-num">${s.id}</span><span class="md-title-small">${esc(s.servicio)}</span><span class="md-body-medium">${esc(s.cliente)} · ${esc(s.donde)}</span>
      <span class="md-body-medium vx-tab-num vx-muted">${s.estado === "porResponder" ? `Pedida ${s.pedida} · ${esc(s.pref)}` : s.para ? date(s.para) : ""}</span><span>${tag2(s)}</span></span></button>
      ${s.estado === "porResponder" ? `<div class="vx-order-act">${btn("Cotizar", { kind: "filled", go: `M9.03?id=${encodeURIComponent(s.id)}` })}</div>` : ""}</li>`;
      const paint = () => {
        $("#sChips", el).innerHTML = CHIPS.map(([k, t]) => `<span class="md-chip-wrap"><button type="button" class="md-chip md-sl md-label-large${f === k ? " md-chip--selected" : ""}" data-f="${k}" aria-pressed="${f === k}">${t} <span class="vx-tab-num">${conteo(k)}</span></button></span>`).join("");
        const l = E().solicitudes.filter(grupo[f]);
        $("#sList", el).innerHTML = l.map(card).join("") + (f === "term" ? `<li class="md-body-large vx-tab-num">${plural(terminadas(), "trabajo terminado", "trabajos terminados")} en los últimos meses.</li>` : "") || `<li>${stateBlock({ icon: "inbox", title: "Nada por aquí", text: "Cuando entre una solicitud nueva te avisamos." })}</li>`;
      };
      el.addEventListener("click", (e) => {
        const c = e.target.closest("[data-f]");
        if (c) {
          f = c.dataset.f;
          paint();
          const b = el.querySelector(`[data-f="${f}"]`);
          if (b) b.focus();
        }
      });
      paint();
      el.__un = subscribe(paint);
      el.__tick = setInterval(paint, 3e4);
      return el;
    },
    mount(el, ctx) {
      if (ctx.first) $$("[data-stagger]", el).forEach(stagger);
      return () => {
        el.__un();
        clearInterval(el.__tick);
      };
    }
  });
  register("M9.02", {
    render(ctx) {
      const s = buscar2(solId(ctx)), q = encodeURIComponent(s.id);
      const bloque = (k, v) => `<section class="vx-pad-h"><h2 class="md-label-medium vx-eyebrow">${k}</h2>${v}</section>`;
      const ms = s.venceAt - Date.now();
      const acc = s.estado === "porResponder" ? `${btn("Rechazar", { kind: "outlined", id: "sRej" })}${btn("Cotizar", { kind: "filled", go: `M9.03?id=${q}` })}` : s.estado === "terminada" ? btn("Volver a solicitudes", { kind: "filled", go: "M9.01", kindNav: "swap" }) : s.estado === "cotizada" ? btn("Contactar", { kind: "outlined", attrs: 'data-toast="Abre WhatsApp con el cliente"' }) : `${btn("Contactar", { kind: "outlined", attrs: 'data-toast="Abre WhatsApp con el cliente"' })}${btn("Cerrar con garantía", { kind: "filled", go: `M9.04?id=${q}` })}`;
      const estado = s.estado === "porResponder" ? ms > 0 ? statusTag(ms < 36e5 ? "error" : "warning", `Caduca en ${quedan(ms, { min: true })}`) : statusTag("neutral", "Caducó sin responder") : pasada(s) ? statusTag("error", `Fecha pasada · era el ${date(s.para)}`) : statusTag({ cotizada: "info", aceptada: "success", enCurso: "info", terminada: "success" }[s.estado], { cotizada: "Cotización enviada", aceptada: "Aceptada", enCurso: "En curso", terminada: "Terminado" }[s.estado]);
      const el = h(page(topbar(`Solicitud ${s.id}`), `
      <section class="vx-pad-h"><p>${estado}</p></section>
      ${bloque("SERVICIO PEDIDO", `<p class="md-title-small">${esc(s.servicio)}</p>${s.total ? `<p class="md-body-large vx-tab-num">Importe: ${money(s.total)}</p>` : ""}`)}
      ${bloque("CLIENTE Y LUGAR", `<p class="md-title-small">${esc(s.cliente)}</p><p class="md-body-large">${esc(s.direccion)}</p><p class="md-body-medium vx-muted">El cliente no ve tu teléfono; hablan por WhatsApp desde VexBiz.</p>`)}
      ${bloque("CUÁNDO", `<p class="md-body-large vx-tab-num">${s.para ? date(s.para) : esc(s.pref)}</p><p class="md-body-medium vx-muted vx-tab-num">${s.recibida ? `Recibida el ${s.recibida}` : `Pedida ${s.pedida}`}</p>`)}
      ${s.notas ? bloque("NOTAS DEL CLIENTE", `<p class="md-body-large">«${esc(s.notas)}»</p>`) : ""}`, acc));
      const rej = el.querySelector("#sRej");
      if (rej) {
        rej.disabled = ms <= 0;
        rej.addEventListener("click", () => {
          const prev = s.estado;
          s.estado = "rechazada";
          set({ emp: E() });
          toast(`Rechazaste ${s.id}`, { action: "Deshacer", onAction: () => {
            s.estado = prev;
            set({ emp: E() });
          } });
          back();
        });
      }
      return el;
    }
  });
  var VIGENCIA = ["24 horas", "48 horas", "7 días"];
  register("M9.03", {
    render(ctx) {
      const s = buscar2(solId(ctx));
      const el = h(page(
        topbar("Cotizar"),
        `
      <section class="vx-pad-h"><p class="md-title-small">${esc(s.servicio)}</p><p class="md-body-medium vx-muted">${esc(s.cliente)} · ${esc(s.donde)}</p></section>
      <div class="vx-pad-h">${banner("info", "El cliente verá el desglose. Si acepta, el trabajo queda en tu agenda.")}</div>
      <div class="vx-pad-h vx-form">${field({ id: "qMano", label: "Mano de obra (USD)", value: "", inputmode: "decimal" })}${field({ id: "qMat", label: "Materiales (USD)", value: "", inputmode: "decimal" })}${field({ id: "qDesp", label: "Desplazamiento (USD)", value: "", inputmode: "decimal", help: "Opcional" })}
        <p class="md-title-large vx-tab-num vx-totrow"><span>Total</span><b id="qTotal"></b></p>${select({ id: "qVig", label: "La cotización vale por", options: VIGENCIA, value: VIGENCIA[1] })}
        ${area({ id: "qMsg", label: "Mensaje para el cliente", rows: 3, help: "Opcional" })}</div>`,
        btn("Enviar cotización", { kind: "filled", block: true, id: "qGo" })
      ));
      const total = () => round2(num0(el, "qMano") + num0(el, "qMat") + num0(el, "qDesp"));
      const paint = () => {
        el.querySelector("#qTotal").textContent = money(total());
      };
      el.addEventListener("input", paint);
      el.querySelector("#qGo").addEventListener("click", () => {
        const t = total();
        fieldError(el, "qMano", num0(el, "qMano") <= 0 ? "Escribe lo que cobras por la mano de obra" : "");
        if (num0(el, "qMano") <= 0) return;
        s.estado = "cotizada";
        s.total = t;
        set({ emp: E() });
        toast(`Cotización enviada a ${s.cliente}`);
        go("M9.01", { kind: "swap" });
      });
      paint();
      return el;
    }
  });
  register("M9.04", {
    render(ctx) {
      const s = buscar2(solId(ctx));
      if (!["aceptada", "enCurso"].includes(s.estado)) return h(`<div>${topbar("Cerrar con garantía")}${stateBlock({ icon: "briefcase", title: "Este trabajo no está en curso", action: btn("Ver solicitudes", { kind: "filled", go: "M9.01", kindNav: "swap" }) })}</div>`);
      const el = h(page(topbar("Cerrar con garantía"), `
      <section class="vx-pad-h"><p class="md-title-small">${esc(s.cliente)}</p><p class="md-body-medium vx-muted">${esc(s.titulo || s.servicio)}</p></section>
      <div class="vx-pad-h">${banner("info", "VexBiz no cobra este trabajo. Aquí sólo queda registrado lo que costó y hasta cuándo lo garantizas.")}</div>
      <div class="vx-pad-h vx-form">${field({ id: "cMano", label: "Mano de obra (USD)", value: num(s.total), inputmode: "decimal" })}${field({ id: "cMat", label: "Materiales (USD)", value: num(0), inputmode: "decimal" })}${field({ id: "cOtros", label: "Otros gastos (USD)", value: num(0), inputmode: "decimal" })}
        <p class="md-title-large vx-tab-num vx-totrow"><span>Total</span><b id="cTotal"></b></p>${area({ id: "cHecho", label: "Lo que hiciste", rows: 4 })}${select({ id: "cGar", label: "Garantía", options: GAR2.map(([t]) => t), value: "3 meses" })}
        <p class="md-body-large" id="cVig" role="status"></p></div>`, btn("Cerrar el trabajo", { kind: "filled", block: true, id: "cGo" })));
      const meses = () => GAR2.find(([t]) => t === el.querySelector("#cGar").value)[1];
      const total = () => round2(num0(el, "cMano") + num0(el, "cMat") + num0(el, "cOtros"));
      const paint = () => {
        el.querySelector("#cTotal").textContent = money(total());
        const m = meses();
        el.querySelector("#cVig").textContent = m ? `Vigente hasta el ${date(sumaMeses2(HOY, m))}` : "Sin garantía";
      };
      el.addEventListener("input", paint);
      el.addEventListener("change", paint);
      el.querySelector("#cGo").addEventListener("click", () => {
        const hecho = el.querySelector("#cHecho").value.trim();
        fieldError(el, "cMano", total() <= 0 ? "Escribe lo que costó el trabajo" : "");
        fieldError(el, "cHecho", !hecho ? "Cuenta qué hiciste" : "");
        if (total() <= 0 || !hecho) return;
        const m = meses();
        s.estado = "terminada";
        s.total = total();
        s.garantiaHasta = m ? date(sumaMeses2(HOY, m)) : null;
        E().cerradas += 1;
        set({ emp: E() });
        toast("Trabajo cerrado");
        go("M9.01", { kind: "fade" });
      });
      paint();
      return el;
    }
  });
  register("M9.05", {
    render() {
      const el = h(`<div>${topbar("Catálogo", { back: false, trailing: avisosBtn3() })}<p class="md-body-large vx-pad-h" id="cSub"></p><ul class="vx-orders vx-pad-h" role="list" id="cList" data-stagger></ul>
      <div class="vx-pad-h">${btn(`${icon("add", 18)}Añadir servicio`, { kind: "tonal", block: true, go: "M9.06?id=nuevo" })}</div></div>`);
      const paint = () => {
        const l = E().catalogo, pau = l.filter((c) => !c.visible).length;
        $("#cSub", el).textContent = `${plural(l.length, "servicio", "servicios")}${pau ? ` · ${plural(pau, "servicio pausado", "servicios pausados")}` : ""}`;
        $("#cList", el).innerHTML = l.map((c, i) => `<li class="vx-order" style="--i:${i}"><div class="vx-order-main vx-static"><span class="vx-order-text"><span class="md-title-small">${esc(c.titulo)}</span>
        <span>${statusTag(c.visible ? "success" : "neutral", c.visible ? "Visible" : "Pausado")}</span><span class="md-body-medium vx-muted vx-tab-num">${c.oficio} · ${c.min} min · ${c.pedido ? `Pedido ${c.de ? `${c.pedido}/${c.de}` : c.pedido} ${c.pedido === 1 && !c.de ? "vez" : "veces"}` : "Aún sin pedidos"}</span><b class="md-title-small vx-tab-num">Desde ${money(c.desde)}</b></span>
        ${switchHtml("vis_" + c.id, `<span class="md-sr-only">${esc(c.titulo)} visible en tu perfil</span>`, c.visible)}</div>
        <div class="vx-order-act">${btn("Editar", { kind: "text", go: `M9.06?id=${c.id}` })}</div></li>`).join("") || `<li>${stateBlock({ icon: "book", title: "Aún no tienes servicios" })}</li>`;
      };
      wireControls(el);
      el.addEventListener("change", (e) => {
        const t = e.target.closest("input[role=switch]");
        if (!t || !t.id.startsWith("vis_")) return;
        const c = E().catalogo.find((x) => "vis_" + x.id === t.id);
        c.visible = t.checked;
        set({ emp: E() });
        toast(`${c.titulo}: ${c.visible ? "visible" : "pausado"}`);
      });
      paint();
      el.__un = subscribe(paint);
      return el;
    },
    mount(el, ctx) {
      if (ctx.first) $$("[data-stagger]", el).forEach(stagger);
      return el.__un;
    }
  });
  register("M9.06", {
    render(ctx) {
      const nuevo = ctx.params.id === "nuevo", c0 = nuevo ? { id: "cs" + Date.now(), titulo: "", desde: 0, min: 60, texto: "", oficio: "Climatización", pedido: 0, visible: true } : E().catalogo.find((x) => x.id === ctx.params.id) || E().catalogo[0];
      const el = h(`<div class="vx-page"><header class="vx-sheet-head vx-flowhead"><h2 id="sheet-title" class="md-title-large md-sheet-title" tabindex="-1">${nuevo ? "Nuevo servicio" : esc(c0.titulo)}</h2>${iconBtn("close", "Cerrar", "data-close")}</header>
      <div class="vx-body vx-pad-h">${nuevo ? "" : `<p class="md-body-large vx-tab-num">${c0.pedido ? `Lo han pedido ${plural(c0.pedido, "vez", "veces")}.` : "Todavía nadie lo ha pedido."}</p>`}${switchHtml("sVis", "Visible en tu perfil", c0.visible)}
        <div class="vx-form">${field({ id: "sTit", label: "Nombre del servicio", value: c0.titulo })}${select({ id: "sOfi", label: "Oficio", options: ["Climatización", "Electricidad", "Plomería", "Refrigeración"], value: c0.oficio })}
          ${field({ id: "sPre", label: "Precio desde (USD)", value: c0.desde ? num(c0.desde) : "", inputmode: "decimal" })}${field({ id: "sMin", label: "Duración (minutos)", value: c0.min, inputmode: "numeric" })}${area({ id: "sTxt", label: "Qué incluye", value: c0.texto, rows: 3 })}</div></div>
      <footer class="vx-actionbar">${btn("Guardar servicio", { kind: "filled", block: true, id: "sSave" })}</footer></div>`);
      wireControls(el);
      el.querySelector("#sSave").addEventListener("click", async () => {
        const t = el.querySelector("#sTit").value.trim(), pre = num0(el, "sPre"), min = Math.round(num0(el, "sMin")), txt = el.querySelector("#sTxt").value.trim();
        fieldError(el, "sTit", !t ? "Escribe el nombre del servicio" : "");
        fieldError(el, "sPre", pre <= 0 ? "Escribe el precio" : "");
        fieldError(el, "sMin", min <= 0 ? "Escribe cuántos minutos dura" : "");
        if (!t || pre <= 0 || min <= 0) return;
        Object.assign(c0, { titulo: t, desde: pre, min, texto: txt, oficio: el.querySelector("#sOfi").value, visible: el.querySelector("#sVis").checked });
        if (nuevo) E().catalogo.push(c0);
        set({ emp: E() });
        toast(nuevo ? "Añadiste el servicio" : "Guardaste el servicio");
        await closeOverlay();
      });
      return el;
    }
  });
  register("M9.07", {
    render() {
      const el = h(`<div>${topbar("Perfil", { back: false, trailing: avisosBtn3() })}
      <section class="vx-profile vx-pad-h">${avatar("CP", true)}<div><p class="md-title-medium">${esc(E().perfil.nombre)}</p><p id="pfSello"></p></div></section>
      <dl class="vx-stats3 vx-pad-h vx-stats3--3" id="pfStats"></dl>
      <section class="vx-pad-h"><h2 class="md-title-medium">Zonas de servicio</h2><p>${E().perfil.zonas.map((z) => `<span class="vx-tag md-label-medium">${esc(z)}</span> `).join("")}</p>
        <h2 class="md-title-medium vx-block-t">Teléfono público</h2><div id="pfTelBox"></div><div class="vx-form">${field({ id: "pfTel", label: "Teléfono de la empresa", type: "tel", inputmode: "tel", value: E().perfil.telefono })}${btn("Guardar teléfono", { kind: "tonal", id: "pfSave" })}</div>
        ${btn("Ver mi perfil público", { kind: "text", go: "M4.05" })}</section>
      ${sec4("Verificación")}<ul class="vx-list" role="list" id="pfDocs"></ul>
      <ul class="vx-list" role="list">${row({ ic: "wallet", title: "Membresía", go: "M9.08" })}${row({ ic: "bell", title: "Avisos en vivo", go: "O.AVI" })}${row({ ic: "swap", title: "Cambiar de modo", go: "O.MOD" })}</ul></div>`);
      const paint = () => {
        const p = E().perfil, ok = p.docs.every((d) => d.estado === "verificado");
        $("#pfSello", el).innerHTML = ok ? statusTag("success", "Verificado") : statusTag("info", "Verificación en curso");
        $("#pfStats", el).innerHTML = [[num(p.rating, 1), "calificación"], [p.opiniones, "opiniones"], [terminadas(), "trabajos"]].map(([n, l]) => `<div class="vx-stat vx-stat--c"><dd class="md-title-medium vx-tab-num">${n}</dd><dt class="md-body-small vx-muted">${l}</dt></div>`).join("");
        $("#pfTelBox", el).innerHTML = p.telefono ? `<p class="md-body-large vx-tab-num">Los clientes pueden llamarte al ${esc(p.telefono)}.</p>` : banner("info", "Los clientes no pueden llamarte. Hablan contigo por WhatsApp desde VexBiz.");
        $("#pfDocs", el).innerHTML = p.docs.map((d) => `<li class="md-li md-li--2"><span class="md-li-text"><span class="md-li-title md-body-large">${esc(d.nombre)}</span></span><span class="md-li-end">${statusTag(d.estado === "verificado" ? "success" : "info", d.estado === "verificado" ? "Verificado" : "Pendiente")}</span></li>`).join("");
      };
      el.querySelector("#pfSave").addEventListener("click", () => {
        const v = el.querySelector("#pfTel").value.trim();
        fieldError(el, "pfTel", v && !/^[+\d][\d\s-]{6,}$/.test(v) ? "Revisa el teléfono: sólo números, espacios y guiones" : "");
        if (v && !/^[+\d][\d\s-]{6,}$/.test(v)) return;
        E().perfil.telefono = v;
        set({ emp: E() });
        toast(v ? "Los clientes ya pueden llamarte" : "Quitaste el teléfono público");
      });
      paint();
      el.__un = subscribe(paint);
      return el;
    },
    mount(el) {
      return el.__un;
    }
  });
  register("M9.08", {
    render() {
      const m = membresiaEmp, hasta = new Date(m.desde.getFullYear(), m.desde.getMonth(), m.desde.getDate() + m.dias), dias2 = Math.round((hasta - HOY) / 864e5);
      const el = h(page(topbar("Membresía"), `
      <section class="vx-pad-h"><h2 class="md-title-large">${m.plan}</h2><p class="md-title-medium vx-tab-num">${money(m.costo)} USD · cada ${m.dias} días</p>
        <p>${statusTag(dias2 <= 14 ? "warning" : "success", `Vence en ${plural(dias2, "día", "días")}`)}</p><p class="md-body-large vx-tab-num">Del ${date(m.desde)} al ${date(hasta)}</p></section>
      <div class="vx-pad-h">${switchHtml("mRen", "Renovar sola al vencer", m.renueva)}</div>
      <ul class="vx-checklist vx-pad-h" role="list">${["Recibir solicitudes de clientes", "Catálogo de servicios en tu perfil", "Sello de empresa verificada"].map((l) => `<li>${icon("check", 18)}<span class="md-body-large">${l}</span></li>`).join("")}</ul>
      <p class="md-body-medium vx-muted vx-pad-h">El pago de la membresía se coordina con soporte.</p>`, btn("Coordinar la renovación con soporte", { kind: "filled", block: true, id: "mGo" })));
      wireControls(el);
      el.addEventListener("change", (e) => {
        if (e.target.id === "mRen") {
          m.renueva = e.target.checked;
          toast(m.renueva ? "Se renovará sola" : "No se renovará sola");
        }
      });
      el.querySelector("#mGo").addEventListener("click", () => toast("Soporte te escribe por WhatsApp para coordinar el pago"));
      return el;
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
  var sec5 = (title) => `<h2 class="md-label-large vx-sub vx-sub--list">${title}</h2>`;
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
      ${sec5("Ayuda")}<ul class="vx-list" role="list">${doc("info", "Cómo comprar", "comprar")}${doc("truck", "Envíos", "envios")}${doc("receipt", "Devoluciones", "devoluciones")}</ul>
      ${sec5("Legal y políticas")}<ul class="vx-list" role="list">${doc("doc", "Términos y condiciones", "terminos")}${doc("lock", "Política de privacidad", "privacidad")}${doc("doc", "Aviso legal", "aviso")}</ul>
      ${sec5("VexBiz")}<ul class="vx-list" role="list">${doc("store", "Quiénes somos", "quienes")}${doc("tag", "Vender en VexBiz", "vender")}${doc("wrench", "Trabaja como técnico", "tecnico")}${doc("gift", "Franquicias", "franquicias")}</ul>
      ${sec5("Más")}<ul class="vx-list" role="list">${row({ ic: "chat", title: "Contacto", go: "M6.26" })}${row({ ic: "eye", title: "Preferencias de accesibilidad", go: "M6.23" })}${row({ ic: "inbox", title: "Boletín", go: "M1.10" })}</ul>
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
      ${sec5("Redes sociales")}<ul class="vx-list" role="list">${red("globe", "Instagram", "@vexbiz.ve")}${red("globe", "Facebook", "VexBiz Venezuela")}${red("globe", "YouTube", "VexBiz")}</ul>
      <section class="vx-pad-h vx-stack vx-pad-v"><h2 class="md-title-medium">¿Es por un pedido?</h2><p class="md-body-large">Desde el pedido puedes calificar, devolver o abrir un reclamo.</p>
        ${btn("Ir a mis pedidos", { kind: "filled", block: true, go: "M6.03", kindNav: "swap" })}${btn("Ver ayuda e información", { kind: "text", block: true, go: "M6.24" })}</section></div>`);
    }
  });

  // assets/js/main.js
  var root2 = document.documentElement;
  var prefs2 = loadPrefs();
  if (new URLSearchParams(location.search).get("piel") !== "0") root2.setAttribute("data-piel", "");
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
  function paintTec() {
    [["swOffline", state.tec.offline], ["swPais", state.tec.paisSinMembresia]].forEach(([id, on]) => {
      const i = $("#" + id);
      i.checked = on;
      i.nextElementSibling.classList.toggle("md-switch-track--on", on);
    });
  }
  $("#swOffline").addEventListener("change", (e) => tecSenal(e.target.checked));
  $("#swPais").addEventListener("change", (e) => {
    state.tec.paisSinMembresia = e.target.checked;
    set({ tec: state.tec });
  });
  subscribe(() => {
    paintSegs();
    paintTec();
  });
  paintTec();
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
