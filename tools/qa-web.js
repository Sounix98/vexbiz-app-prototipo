// Barrido de calidad de la web (se pega en la consola o se ejecuta con javascript_exec en web/index.html).
// qaWeb({ theme: 'light' | 'dark' }) → { revisadas, fallos, detalle } para todas las páginas que ya tienen ruta.
window.qaWeb = async function qaWeb({ theme = 'light' } = {}) {
  const { PAGINAS } = await import('/web/js/paginas.js');
  document.documentElement.setAttribute('data-theme', theme);
  const w = (ms) => new Promise((r) => setTimeout(r, ms));
  const errs = []; const onErr = (e) => errs.push(e.message || String(e.reason)); window.addEventListener('error', onErr); window.addEventListener('unhandledrejection', onErr);
  const lum = (c) => { const m = c.match(/[\d.]+/g).map(Number); const [r, g, b] = m.slice(0, 3).map((v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; }); return 0.2126 * r + 0.7152 * g + 0.0722 * b; };
  const bgOf = (e) => { for (let x = e; x; x = x.parentElement) { const b = getComputedStyle(x).backgroundColor; const m = b.match(/[\d.]+/g); if (m && (m.length < 4 || Number(m[3]) > 0.98)) return b; } return getComputedStyle(document.body).backgroundColor; };
  const fails = []; let n = 0;
  for (const [code, nombre, ruta] of PAGINAS) {
    if (!ruta) continue;
    n++; errs.length = 0; const prob = [];
    location.hash = ruta.slice(1); await w(900);
    const host = document.getElementById('page');
    if (document.documentElement.scrollWidth > innerWidth + 1) prob.push(`overflow-x ${document.documentElement.scrollWidth}>${innerWidth}`);
    const vis = (e) => e.getBoundingClientRect().width > 0 && getComputedStyle(e).visibility !== 'hidden' && !e.closest('[hidden],[aria-hidden=true],svg');
    const leaves = [...host.querySelectorAll('*')].filter((e) => e.children.length === 0 && e.textContent.trim() && vis(e));
    const small = leaves.filter((e) => parseFloat(getComputedStyle(e).fontSize) < 13);
    if (small.length) prob.push('texto<13px: ' + small.slice(0, 2).map((e) => e.textContent.trim().slice(0, 20)).join('|'));
    const tiny = [...host.querySelectorAll('button,a[href],input:not([type=hidden]):not([type=checkbox]):not([type=radio]),select,summary')].filter((e) => { const r = e.getBoundingClientRect(); return vis(e) && (r.height < 39.5) && !e.closest('.w-crumbs,label'); });
    if (tiny.length) prob.push('target<40: ' + tiny.slice(0, 3).map((e) => `${(e.getAttribute('aria-label') || e.textContent.trim()).slice(0, 22)} ${Math.round(e.getBoundingClientRect().width)}x${Math.round(e.getBoundingClientRect().height)}`).join('|'));
    if (host.querySelectorAll('h1').length !== 1) prob.push('h1=' + host.querySelectorAll('h1').length);
    const low = [];
    for (const e of leaves.slice(0, 160)) {
      const cs = getComputedStyle(e); if (Number(cs.opacity) < 1) continue;
      const a = lum(cs.color), b = lum(bgOf(e)), cr = (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
      const big = parseFloat(cs.fontSize) >= 24 || (parseFloat(cs.fontSize) >= 18.66 && Number(cs.fontWeight) >= 700);
      if (cr < (big ? 3 : 4.5)) low.push(`${cr.toFixed(2)} «${e.textContent.trim().slice(0, 18)}»`);
    }
    if (low.length) prob.push('contraste: ' + [...new Set(low)].slice(0, 3).join(' | '));
    if (errs.length) prob.push('errores JS: ' + errs.join(' / '));
    if (prob.length) fails.push(`${code} ${nombre} → ${prob.join(' ; ')}`);
  }
  window.removeEventListener('error', onErr); window.removeEventListener('unhandledrejection', onErr);
  return { revisadas: n, fallos: fails.length, detalle: fails };
};
