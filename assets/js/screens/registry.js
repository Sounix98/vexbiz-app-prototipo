// Cada pantalla se registra con su id de ruta:  register('M2.08', { title, render(ctx), mount(el, ctx) })
//   render(ctx) → HTMLElement (debe incluir un <h1>; las hojas llevan un <h2 id="sheet-title">)
//   mount(el, ctx) → opcional, se llama con el elemento ya en el documento; puede devolver una función de limpieza.
//   skeleton: false → no simula carga en la primera visita.
export const defs = new Map();
export const register = (id, def) => { defs.set(id, def); return def; };
