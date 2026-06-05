# CLAUDE.md — Protocolos de Servicio

## Descripción
App web PWA educativa para **garzones y personal de restaurante** en Chile.
Herramienta de consulta rápida y capacitación, instalable en el celular y funciona offline.

## URLs
- **App en línea:** https://protocolos-servicio.vercel.app/
- **GitHub:** https://github.com/jrpenalozat-a11y/protocolos-servicio
- **Local:** http://localhost:4321/ (servidor del propio proyecto: `.claude/launch.json` → config `protocolos`, `npx serve` puerto 4321)

## Dueño
- **Jaime Ricardo Peñaloza**, Santiago Chile
- Perfil: profesional gastronómico/hotelero

## Stack
- HTML + CSS + JavaScript puro (un solo `index.html`)
- Sin frameworks ni dependencias
- PWA (manifest + service worker v8, offline funcional)
- Deploy: Vercel conectado a GitHub (auto-deploy en cada push)
- Servidor local: config `protocolos` en `.claude/launch.json` (`npx serve`, puerto 4321)

## Diseño
- Paleta: **gris slate** (día `#2b323d`) + **carbón profundo** (noche `#0c0f13`) + acento **turquesa** `#2dd4bf`
- Modo oscuro/claro con toggle 🌙/☀️ (ambos modos siguen siendo oscuros)
- Tipografía: system-ui (pendiente cambio a Poppins o Inter)
- Tarjetas con ⭐ favoritos (guardados en localStorage)
- Banner motivacional turquesa con 5 frases por apartado
- **Encabezado/banner** con emblema SVG vectorial (montaña + llama + ola = **Altura · Imparidad · Movimiento**) + nombre "Protocolos de Servicio" + lema, junto al toggle 🌙/☀️
- **Pantalla de bienvenida (splash):** dos puertas que se abren al tocar "Entrar 🚪" y revelan la app (CSS+JS puro). Hoy aparece **siempre** (pendiente: opción solo-primera-vez con sessionStorage)
- **Filosofía gastronómica de la marca:** Altura · Imparidad · Movimiento (principios del emplatado)
- La app **arranca siempre en la pestaña Protocolos**

## Secciones (12 pestañas)
1. 📋 **Protocolos** — 8 estilos con checklist + fotos chilenizadas. Servicio Americano aclarado (servir por la derecha = norma clásica, puede variar según el local)
2. 🤝 **Atención en Mesa** — secuencia, gestos, venta sugestiva, presencia atenta (con foto)
3. 🚨 **Alérgenos** — 14 alérgenos + protocolo + checklist
4. 🍷 **Bebestibles** — protocolo vinos + 20 cócteles internacionales + 7 chilenos
5. 🍷🍽️ **Maridajes** — guía + explicación de qué es el maridaje (con foto)
6. 🥩 **Carnes** — vacuno (parrilla/olla), cerdo, venado, jabalí, otras, al palo, puntos de cocción. Cada corte con descripción + punto (escala chilena) + maridaje
7. 🌊 **Productos del Mar** — 18 pescados, 12 mariscos, 7 crustáceos. Todos con descripción + maridaje
8. 🌽 **Vegetales Chilenos** — papas chilotas, tubérculos, frutos nativos, hierbas, cultivos ancestrales
9. 🧀 **Quesos** — 15 quesos del mundo usados en Chile + 5 chilenos. Cada uno con familia (fresco/blando/semiduro/duro/azul) + descripción entusiasta + maridaje. Intro con claves para servir/describir
10. 🛎️ **Servicio por Local** — 15 tipos de restaurant chileno con protocolo recomendado
11. 📖 **Diccionario** — Barra (+ fundamentos), Destilados, Comedor, Cocina, Códigos y jerga chilena
12. ⭐ **Favoritos** — tarjetas guardadas

> Nota: en cada sección con foto, la imagen va **al inicio** (bajo el título). La sección 🧮 Cuenta (calculadora de propina) fue **eliminada**.

## Imágenes (img/)
- **Protocolos:** `frances.jpg`, `ingles.jpg`, `americano.jpg`, `ruso.jpg`, `directo.jpg`, `bandeja.jpg`, `montaje.jpg`, `quejas.jpg` (montaje y quejas pasaron de dibujo SVG a foto; agregados a `conFoto` en el JS)
- **Secciones:** `bebestibles.jpg`, `mar.jpg`, `carnes.jpg`, `vegetales.jpg`, `local.jpg`, `maridajes.jpg`, `atencion-mesa.jpg`, `quesos.jpg`
- `LOGO.jpg` → diseño de logo del dueño (montaña/llama/ola, maqueta enmarcada). El encabezado usa un **emblema SVG inline** (no este archivo)
- `icon-192.png`, `icon-512.png` → íconos PWA (aún dicen "GM", pendiente cambiar)
- Todas las fotos de secciones/protocolos fueron renovadas (chilenizadas) en jun-2026
- Créditos de licencias en `CREDITS.md` y `img/credits.json`
- ⚠️ Ojo al pegar fotos: cuidado con dobles extensiones (`.jpg.jpg`) o nombre/extensión equivocados (ej. un JPEG guardado como `.SVG`) — la app busca el nombre exacto en minúsculas

## Hecho recientemente (jun-2026)
- ✅ Encabezado con nombre/logo (banner + emblema SVG + lema)
- ✅ Pantalla de bienvenida con animación de puerta
- ✅ Arranca siempre en Protocolos
- ✅ Nueva sección 🧀 Quesos
- ✅ Eliminada la calculadora de Cuenta
- ✅ Renovadas todas las fotos (sin las de origen colombiano) y movidas al inicio de cada sección
- ✅ Servicio Americano aclarado

## Pendiente (próximos pasos)
1. **Modo Quiz / Entrenamiento** — flash cards tipo pregunta/respuesta para capacitación (ej. "¿Qué significa 86?", "¿Con qué vino va el cordero?")
2. **Tipografía moderna** — cambiar system-ui por Poppins o Inter
3. **Ícono PWA** — cambiar "GM" a algo más representativo (ej. el emblema montaña/llama/ola). Generar `icon-192.png` / `icon-512.png` nuevos
4. **Tema claro real** ☀️ — hoy ambos modos son oscuros; un modo claro verdadero
5. **Splash solo la primera vez** — usar `sessionStorage` para no mostrar la puerta en cada carga (hoy aparece siempre)
6. **Foto para `img/quesos.jpg`** ya está; revisar que todas las secciones tengan su foto definitiva

## Notas importantes
- **Escala de puntos de cocción chilena:** Inglesa · A punto · Medio · 3/4 · Bien cocido
- **Garzón** (no "camarero" ni "mesero") — toda la app usa términos chilenos
- Service worker **v8** → cachea HTML, imágenes y assets para offline (subir la versión `v8 → v9...` cada vez que se agreguen/cambien imágenes en la lista `ASSETS` de `sw.js`)
- `_canvatest/` está en `.gitignore` (carpeta temporal de descarga de Canva)
- El archivo `CREDITS.md` tiene la atribución de imágenes con licencia CC

## Cómo trabajamos
- Cambios siempre en **local primero**, verificados en vista local (localhost:4321) antes de subir
- Push a GitHub → Vercel auto-despliega en ~30 segundos
- Todo el código en un solo `index.html` (datos JS + CSS + HTML + lógica)
