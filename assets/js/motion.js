// API de movimiento. Es la única forma en que las pantallas disparan movimiento.
// Reglas: solo transform y opacity; movimiento y opacidad por separado; todo lo que entra parte oculto.
export const reduce = () =>
  matchMedia('(prefers-reduced-motion: reduce)').matches ||
  document.documentElement.hasAttribute('data-reduce-motion');

const done = (el) =>
  Promise.all(el.getAnimations({ subtree: false }).map((a) => a.finished)).catch(() => {});

// kind: 'push' | 'back' | 'swap' | 'mode' | 'none'
export async function enterScreen(el, kind) {
  const cls = { push: 'is-enter', back: 'is-back', swap: 'is-swap', mode: 'is-mode' }[kind];
  if (!cls) return;
  el.classList.add(cls);
  await done(el);
  el.classList.remove(cls);
}

// Hojas: el velo y la hoja existen en index.html con atributo hidden.
export function openSheet(sheet, scrim) {
  scrim.hidden = sheet.hidden = false;
  requestAnimationFrame(() => { scrim.classList.add('is-open'); sheet.classList.add('is-open'); });
}
export async function closeSheet(sheet, scrim) {
  sheet.classList.remove('is-open'); sheet.classList.add('is-closing');
  scrim.classList.remove('is-open');
  await done(sheet);
  sheet.classList.remove('is-closing'); scrim.hidden = sheet.hidden = true;
}

// Entrada escalonada: solo en la primera carga de una lista, nunca al volver atrás.
export function stagger(list) {
  [...list.children].forEach((c, i) => c.style.setProperty('--i', i));
  list.classList.add('vx-stagger');
}

// Revelar al hacer scroll, una sola vez por bloque.
export function reveal(root) {
  const io = new IntersectionObserver((es) => es.forEach((e) => {
    if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); }
  }), { threshold: 0.12, root: root.closest('.screen') || null });
  root.querySelectorAll('.vx-reveal').forEach((n) => io.observe(n));
}

// Reinicia una animación de una sola vez (pop, tick, flash, shake).
export function play(el, cls) {
  if (!el) return;
  el.classList.remove(cls); void el.offsetWidth; el.classList.add(cls);
  el.addEventListener('animationend', () => el.classList.remove(cls), { once: true });
}

// Cuenta regresiva: texto tabular + barra lineal. onTick(msRestantes) para umbrales.
export function countdown({ textEl, barEl, ms, onTick, onEnd }) {
  const end = Date.now() + ms;
  if (barEl) { barEl.style.setProperty('--vx-count', ms + 'ms'); barEl.classList.add('vx-countbar'); }
  const fmt = (t) => { const s = Math.max(0, Math.ceil(t / 1000)); return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`; };
  const id = setInterval(() => {
    const left = end - Date.now();
    textEl.textContent = fmt(left); onTick && onTick(left);
    if (left <= 0) { clearInterval(id); onEnd && onEnd(); }
  }, 250);
  textEl.textContent = fmt(ms);
  return () => clearInterval(id);
}
