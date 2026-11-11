/* VEXBIZ · prototipo empaquetado para file://. Generado por tools/build_local.py: no editar a mano. */
(() => {
  // assets/js/screens/registry.js
  var defs = /* @__PURE__ */ new Map();
  var register = (id, def) => {
    defs.set(id, def);
    return def;
  };

  // assets/js/data.js
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
    { id: "llav", nombre: "Juego de llaves 12 piezas", corto: "Juego de llaves 12 piezas", categoria: "Herramientas", tienda: "ha", precio: 24.9, stock: 30 }
  ];
  var producto = (id) => productos.find((p) => p.id === id);
  var tienda = (id) => tiendas.find((t) => t.id === id);
  var carritoInicial = [
    { id: "aa12", qty: 1 },
    { id: "ctrl", qty: 2, cambioPrecio: true },
    { id: "tal", qty: 1 },
    { id: "llav", qty: 1 }
  ];
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

  // assets/js/format.js
  var nf = (min, max) => new Intl.NumberFormat("es-VE", { minimumFractionDigits: min, maximumFractionDigits: max, useGrouping: "always" });
  var nf2 = nf(2, 2);
  var nf0 = nf(0, 0);
  var round2 = (n) => Math.round((n + Number.EPSILON) * 100) / 100;
  var money = (usd) => `$ ${nf2.format(usd)}`;
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
    flow: {},
    // paso actual de los flujos (checkout, pago…)
    sonidoAvisos: true
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
  var cartCount = () => state.cart.length;
  var cartSubtotal = () => round2(state.cart.reduce((s, l) => s + producto(l.id).precio * l.qty, 0));
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
  var done = (el) => Promise.all(el.getAnimations({ subtree: false }).map((a) => a.finished)).catch(() => {
  });
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
  var $ = (sel, root2 = document) => root2.querySelector(sel);
  var $$ = (sel, root2 = document) => [...root2.querySelectorAll(sel)];
  var topbar = (title, { back: back2 = true, trailing = "", close = false } = {}) => `
  <header class="md-topbar"><div class="md-topbar-row">
    ${back2 ? `<button type="button" class="md-iconbtn md-iconbtn--standard md-sl" ${close ? "data-close" : "data-back"} aria-label="${close ? "Cerrar" : "Volver"}">${icon(close ? "close" : "back")}</button>` : ""}
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
  var ALIAS = Object.fromEntries(INDEX.filter((r) => r.alias).map((r) => [r.label.replace(" ▣", ""), r.id]));
  var resolve = (code) => ALIAS[code] || code;
  var stack = [];
  var visited = /* @__PURE__ */ new Set();
  var current = null;
  var cleanup = null;
  var overlay = null;
  var internal = false;
  var busy = false;
  var view = () => $("#view");
  var parse = (hash) => {
    const [path, qs = ""] = hash.replace(/^#\/?/, "").split("?");
    return { code: resolve(decodeURIComponent(path)), params: Object.fromEntries(new URLSearchParams(qs)) };
  };
  var hashOf = (code, params = {}) => {
    const qs = new URLSearchParams(params).toString();
    return `#/${code}${qs ? "?" + qs : ""}`;
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
      el.replaceChildren(def ? def.render(ctx) : pendingScreen(code));
      return ctx;
    };
    return { el, ctx, fill, def };
  }
  async function show(entry, kind) {
    const meta = META[entry.code];
    const { el, ctx, fill, def } = build(entry.code, entry.params);
    const first = !visited.has(entry.code) && def?.skeleton !== false && kind !== "none" && kind !== "back";
    visited.add(entry.code);
    const old = current;
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
      if (current !== el) return;
      fill();
      el.classList.add("vx-loaded");
      setTimeout(() => el.classList.remove("vx-loaded"), 220);
    }
    const m = def?.mount?.(el, ctx);
    cleanup = typeof m === "function" ? m : null;
    await entering;
    if (old && old !== el) old.remove();
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
    if (busy) return;
    busy = true;
    try {
      if (meta.mode && meta.mode !== state.mode) set({ mode: meta.mode });
      if (overlay) await closeOverlay({ silent: true });
      if (top() && current) top().scroll = current.scrollTop;
      const entry = { code, params, scroll: 0 };
      if (kind === "push") stack.push(entry);
      else {
        stack.length = 0;
        stack.push(entry);
      }
      setHash(code, params);
      await show(entry, kind);
    } finally {
      busy = false;
    }
  }
  async function back() {
    if (overlay) return closeOverlay();
    if (stack.length < 2 || busy) return;
    busy = true;
    try {
      stack.pop();
      const entry = top();
      setHash(entry.code, entry.params);
      await show(entry, "back");
    } finally {
      busy = false;
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
        const root2 = overlay.type === "dialog" ? $("#dialog") : $("#sheet");
        const f = [...root2.querySelectorAll('button,a[href],input,select,textarea,[tabindex]:not([tabindex="-1"])')].filter((n) => !n.disabled && n.offsetParent !== null);
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
      const row = (mode, ic, title, text) => `
      <li><button type="button" class="md-li md-li--2 md-sl vx-press vx-row" data-mode="${mode}"${state.mode === mode ? ' aria-current="true"' : ""}>
        <span class="md-li-icon">${icon(ic)}</span>
        <span class="md-li-text"><span class="md-li-title md-body-large">${title}</span><span class="md-li-sup md-body-medium">${text}</span></span>
        <span class="md-li-end">${state.mode === mode ? `${icon("check")}<span class="md-sr-only">Modo actual</span>` : ""}</span>
      </button></li>`;
      const el = h(`<div>${sheetHead("Cambiar de modo", closeBtn())}
      <ul class="vx-list" role="list">
        ${row("comprador", "bag", "Comprador", "Compra productos y pide servicios.")}
        ${row("tienda", "store", "Tienda", "Pedidos, productos y dinero de Frío Total.")}
        ${row("tecnico", "wrench", "Técnico", "Tus trabajos, servicios y compras de trabajo.")}
      </ul>
      <p class="md-label-large vx-sub">Haz más con VexBiz</p>
      <ul class="vx-list" role="list"><li><button type="button" class="md-li md-li--2 md-sl vx-press vx-row" data-empresa>
        <span class="md-li-icon">${icon("toolbox")}</span>
        <span class="md-li-text"><span class="md-li-title md-body-large">Registrar mi empresa de servicios</span></span>
        <span class="md-li-end">${icon("chevron")}</span></button></li></ul></div>`);
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

  // assets/js/screens/m1.js
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

  // assets/js/main.js
  var root = document.documentElement;
  var prefs = loadPrefs();
  var setTheme = (t) => {
    root.setAttribute("data-theme", t);
    savePrefs({ theme: t });
    paintSegs();
  };
  var setReduce = (on) => {
    root.toggleAttribute("data-reduce-motion", on);
    savePrefs({ reduce: on });
    $("#swReduce").checked = on;
    $("#swReduce").nextElementSibling.classList.toggle("md-switch-track--on", on);
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
    seg($("#segTema"), [["light", "Claro"], ["dark", "Oscuro"]], root.getAttribute("data-theme"), setTheme);
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
  if (prefs.theme) root.setAttribute("data-theme", prefs.theme);
  if (prefs.reduce) root.setAttribute("data-reduce-motion", "");
  $("#swReduce").checked = !!prefs.reduce;
  $("#swReduce").nextElementSibling.classList.toggle("md-switch-track--on", !!prefs.reduce);
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
  start();
})();
