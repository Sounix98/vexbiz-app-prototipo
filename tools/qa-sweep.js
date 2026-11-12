// Barrido de calidad del prototipo (se pega en la consola o se ejecuta con javascript_exec).
// qa({theme:'light'|'dark', only:[códigos]}) → resumen con fallos por pantalla.
window.qa = async function qa({ theme = 'light', only } = {}) {
  const { INDEX } = await import('/assets/js/screens/catalog.js');
  const root = document.documentElement; root.setAttribute('data-theme', theme);
  const errs = []; const onErr = (e) => errs.push(e.message || String(e.reason)); window.addEventListener('error', onErr); window.addEventListener('unhandledrejection', onErr);
  const w = (ms) => new Promise((r) => setTimeout(r, ms));
  const fails = []; let n = 0;
  const lum = (c) => { const m = c.match(/[\d.]+/g).map(Number); const [r, g, b] = m.slice(0, 3).map((v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; }); return 0.2126 * r + 0.7152 * g + 0.0722 * b; };
  for (const row of INDEX) {
    if (only && !only.includes(row.id)) continue;
    n++; errs.length = 0; const before = errs.length; const prob = [];
    location.hash = '#/' + row.id; await w(850);
    const scr = [...document.querySelectorAll('.screen')].pop(), over = document.querySelector('#sheet:not([hidden]) .vx-page, #sheet.open .vx-page, dialog[open]');
    const host = over || scr; if (!host) { fails.push(row.id + ': sin pantalla'); continue; }
    if (/pendiente/i.test(host.innerText.slice(0, 200)) && /Pantalla pendiente|todavía no/i.test(host.innerText)) prob.push('placeholder');
    if (document.documentElement.scrollWidth > document.documentElement.clientWidth + 1 || host.scrollWidth > host.clientWidth + 1) prob.push(`overflow-x ${host.scrollWidth}>${host.clientWidth}`);
    const small = [...host.querySelectorAll('*')].filter((e) => e.children.length === 0 && e.textContent.trim() && getComputedStyle(e).display !== 'none' && e.getBoundingClientRect().width > 0 && parseFloat(getComputedStyle(e).fontSize) < 13 && !e.closest('svg,[aria-hidden=true]'));
    if (small.length) prob.push('texto<13px: ' + small.slice(0, 2).map((e) => e.textContent.trim().slice(0, 20)).join('|'));
    const tiny = [...host.querySelectorAll('button,a[href],input:not([type=hidden]):not([type=checkbox]):not([type=radio]),select,[role=tab],[role=switch]')].filter((e) => { const r = e.getBoundingClientRect(); return r.width > 0 && r.height > 0 && (r.height < 43.5 || r.width < 43.5) && !e.closest('[hidden]') && getComputedStyle(e).visibility !== 'hidden'; });
    // El área táctil de 48 px de iconos y chips va en ::before (aquí se mide ya escalada si el panel reduce el marco).
    const hit = (e) => { const b = getComputedStyle(e, '::before'); return parseFloat(b.width) >= 42 && parseFloat(b.height) >= 42; };
    const tinyReal = tiny.filter((e) => !hit(e)).filter((e) => { const p = e.closest('label,li,.md-switch,.md-chip-wrap,.md-seg'); const rp = p && p.getBoundingClientRect(); return !(rp && rp.height >= 43.5 && rp.width >= 43.5); });
    if (tinyReal.length) prob.push('target<44: ' + tinyReal.slice(0, 2).map((e) => (e.getAttribute('aria-label') || e.textContent.trim() || e.id).slice(0, 22) + ` ${Math.round(e.getBoundingClientRect().width)}x${Math.round(e.getBoundingClientRect().height)}`).join('|'));
    const h1 = host.querySelectorAll('h1').length, h1s = over ? host.querySelectorAll('h1,#sheet-title').length : h1; if (h1s !== 1 && !over) prob.push('h1=' + h1);
    // contraste de los textos visibles (el fondo real más cercano con color opaco)
    const bgOf = (e) => { for (let x = e; x; x = x.parentElement) { const b = getComputedStyle(x).backgroundColor; const m = b.match(/[\d.]+/g); if (m && (m.length < 4 || Number(m[3]) > 0.98)) return b; } return getComputedStyle(document.body).backgroundColor; };
    const low = []; for (const e of [...host.querySelectorAll('*')].filter((e) => e.children.length === 0 && e.textContent.trim() && e.getBoundingClientRect().width > 0 && !e.closest('svg,[aria-hidden=true]')).slice(0, 80)) {
      const cs = getComputedStyle(e); if (Number(cs.opacity) < 1 || Number(cs.color.match(/[\d.]+/g)[3] ?? 1) < 1) continue; const a = lum(cs.color), b = lum(bgOf(e)), cr = (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05);
      const big = parseFloat(cs.fontSize) >= 24 || (parseFloat(cs.fontSize) >= 18.66 && Number(cs.fontWeight) >= 700); if (cr < (big ? 3 : 4.5)) low.push(`${cr.toFixed(2)} «${e.textContent.trim().slice(0, 18)}»`);
    }
    if (low.length) prob.push('contraste: ' + low.slice(0, 3).join(' | '));
    if (errs.length > before) prob.push('errores JS: ' + errs.join(' / '));
    if (prob.length) fails.push(row.id + ' → ' + prob.join(' ; '));
  }
  window.removeEventListener('error', onErr); window.removeEventListener('unhandledrejection', onErr);
  return { revisadas: n, fallos: fails.length, detalle: fails };
};
