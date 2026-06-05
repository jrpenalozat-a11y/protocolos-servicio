# CLAUDE.md — Protocolos de Servicio

## Descripción
App web PWA educativa para **garzones y personal de restaurante** en Chile.
Herramienta de consulta rápida y capacitación, instalable en el celular y funciona offline.

## URLs
- **App en línea:** https://protocolos-servicio.vercel.app/
- **GitHub:** https://github.com/jrpenalozat-a11y/protocolos-servicio
- **Local:** http://localhost:5177/ (servidor Vite en el proyecto chef-english)

## Dueño
- **Jaime Ricardo Peñaloza**, Santiago Chile
- Perfil: profesional gastronómico/hotelero

## Stack
- HTML + CSS + JavaScript puro (un solo `index.html`)
- Sin frameworks ni dependencias
- PWA (manifest + service worker v5, offline funcional)
- Deploy: Vercel conectado a GitHub (auto-deploy en cada push)
- Servidor local: Vite (desde chef-english/.claude/launch.json → protocolos-servicio-dev, puerto 5177)

## Diseño
- Paleta: **gris slate** (día `#2b323d`) + **carbón profundo** (noche `#0c0f13`) + acento **turquesa** `#2dd4bf`
- Modo oscuro/claro con toggle 🌙/☀️
- Tipografía: system-ui (pendiente cambio a Poppins o Inter)
- Tarjetas con ⭐ favoritos (guardados en localStorage)
- Banner motivacional turquesa con 5 frases por apartado

## Secciones (10 pestañas)
1. 📋 **Protocolos** — 8 estilos con checklist + ilustraciones Canva chilenizadas
2. 🤝 **Atención en Mesa** — secuencia, gestos, venta sugestiva, presencia atenta
3. 🚨 **Alérgenos** — 14 alérgenos + protocolo + checklist
4. 🍷 **Bebestibles** — protocolo vinos + 20 cócteles internacionales + 7 chilenos
5. 🍷🍽️ **Maridajes** — guía + explicación de qué es el maridaje
6. 🥩 **Carnes** — vacuno (parrilla/olla), cerdo, venado, jabalí, otras, al palo, puntos de cocción. Cada corte con descripción + punto (escala chilena) + maridaje
7. 🌊 **Productos del Mar** — 18 pescados, 12 mariscos, 7 crustáceos. Todos con descripción + maridaje
8. 🌽 **Vegetales Chilenos** — papas chilotas, tubérculos, frutos nativos, hierbas, cultivos ancestrales
9. 🛎️ **Servicio por Local** — 15 tipos de restaurant chileno con protocolo recomendado
10. 📖 **Diccionario** — Barra (+ fundamentos), Destilados, Comedor, Cocina, Códigos y jerga chilena
11. 🧮 **Cuenta** — calculadora de propina (10%) + división por personas
12. ⭐ **Favoritos** — tarjetas guardadas

## Imágenes (img/)
- `frances.jpg`, `ingles.jpg`, `americano.jpg`, `ruso.jpg`, `directo.jpg`, `bandeja.jpg` → ilustraciones Canva chilenizadas para Protocolos
- `bebestibles.jpg`, `mar.jpg`, `carnes.jpg`, `vegetales.jpg`, `local.jpg` → fotos sección
- `icon-192.png`, `icon-512.png` → íconos PWA (turquesa + "GM")
- Créditos de licencias en `CREDITS.md` y `img/credits.json`

## Pendiente (próximos pasos)
1. **Reemplazar `img/carnes.jpg`** con foto nueva (T-bone en parrilla, IA, sin derechos). Guardar como `img/carnes-nueva.jpg`, luego renombrar/reemplazar.
2. **Modo Quiz / Entrenamiento** — flash cards tipo pregunta/respuesta para capacitación (ej. "¿Qué significa 86?", "¿Con qué vino va el cordero?")
3. **Tipografía moderna** — cambiar system-ui por Poppins o Inter
4. **Encabezado con nombre/logo** — agregar nombre de la app visible arriba
5. **Ícono PWA** — cambiar "GM" a algo más representativo (ej. "PS" o 🛎️)
6. **Tema claro real** ☀️ — hoy ambos modos son oscuros; un modo claro verdadero
7. **Fotos propias** — reemplazar 2 fotos de origen colombiano (asado y feria de verduras) por fotos chilenas

## Notas importantes
- **Escala de puntos de cocción chilena:** Inglesa · A punto · Medio · 3/4 · Bien cocido
- **Garzón** (no "camarero" ni "mesero") — toda la app usa términos chilenos
- Service worker v5 → cachea HTML, imágenes y assets para offline
- `_canvatest/` está en `.gitignore` (carpeta temporal de descarga de Canva)
- El archivo `CREDITS.md` tiene la atribución de imágenes con licencia CC

## Cómo trabajamos
- Cambios siempre en **local primero**, verificados en vista local (localhost:5177) antes de subir
- Push a GitHub → Vercel auto-despliega en ~30 segundos
- Todo el código en un solo `index.html` (datos JS + CSS + HTML + lógica)
