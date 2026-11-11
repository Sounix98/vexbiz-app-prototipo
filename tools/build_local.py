#!/usr/bin/env python3
"""Genera prototipo.local.js: todos los módulos en un solo script clásico para abrir index.local.html con doble clic.

Chrome y Edge bloquean los módulos ES en file://. esbuild es solo herramienta de compilación (npx la descarga);
el prototipo entregado sigue siendo vanilla, sin librerías. Correr después de cambiar cualquier .js:
    python tools/build_local.py
"""
import pathlib, re, shutil, subprocess
R = pathlib.Path(__file__).resolve().parent.parent
npx = shutil.which('npx') or shutil.which('npx.cmd') or 'npx'
subprocess.run([npx, '--yes', 'esbuild@0.28.2', str(R / 'assets/js/main.js'), '--bundle', '--format=iife',
                '--target=es2020', '--charset=utf8', '--legal-comments=none',
                '--banner:js=/* VEXBIZ · prototipo empaquetado para file://. Generado por tools/build_local.py: no editar a mano. */',
                '--outfile=' + str(R / 'prototipo.local.js')], check=True)
html = (R / 'index.html').read_text(encoding='utf-8')
html = html.replace('<script type="module" src="assets/js/main.js"></script>', '<script src="prototipo.local.js" defer></script>')
(R / 'index.local.html').write_text(html, encoding='utf-8')
print('ok: prototipo.local.js, index.local.html')
