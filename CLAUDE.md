# CLAUDE.md — Servicio a la Mano

## Descripción
**"Servicio a la Mano"** — *Academia de bolsillo del garzón*. App web PWA educativa para **garzones y personal de restaurante** en Chile.
Academia/curso de bolsillo + herramienta de consulta rápida, instalable en el celular y funciona offline.
> Nota: el repo y la URL siguen llamándose `protocolos-servicio` (no se migraron); solo cambió el **nombre visible** de la app. "Protocolos de Servicio" pasó a ser una **sección** dentro del hub Servicio.

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
- PWA (manifest + service worker v14, offline funcional)
- Deploy: Vercel conectado a GitHub (auto-deploy en cada push)
- Servidor local: config `protocolos` en `.claude/launch.json` (`npx serve`, puerto 4321)

## Diseño
- Paleta: acento **turquesa** `#2dd4bf` · **modo claro real** ☀️ (fondo `#e7edf3`, tarjetas blancas, texto oscuro) · **modo noche** 🌙 (carbón `#0c0f13`). Toggle 🌙/☀️, **arranca en modo noche** por defecto (variables CSS en `:root` = claro, `body.dark` = noche)
- Tipografía: **Inter** (texto) + **Poppins** (títulos), vía Google Fonts (cacheado por el SW para offline)
- Tarjetas con ⭐ favoritos (guardados en localStorage)
- Banner motivacional turquesa con 5 frases por apartado
- **Encabezado/banner** con emblema SVG vectorial (montaña + llama + ola) + nombre **"Servicio a la Mano"** + bajada **"Academia de bolsillo del garzón"**, junto a los botones 🔊/🔇 y 🌙/☀️
- **Sonido (Web Audio, sin archivos):** campanita al abrir la puerta + "tic" sutil en cada botón. Botón 🔊/🔇 para silenciar (preferencia guardada en localStorage, key `sonido`)
- **Pantalla de bienvenida (splash):** título "Servicio a la Mano" + las 3 palabras **Altura · Imparidad · Movimiento** apareciendo una a una (animación escalonada `filoAparece`), y dos puertas que se abren al tocar "Entrar 🚪". Aparece **solo la primera vez por sesión** (`sessionStorage` key `splashVisto`)
- **Filosofía gastronómica de la marca:** Altura · Imparidad · Movimiento (principios del emplatado); va destacada en el splash
- La app **arranca siempre en Protocolos** (sub-pestaña del hub Servicio)
- **Navegación en 2 niveles (hubs + sub-pestañas):** 9 botones arriba. 3 son hubs con una fila de sub-botones (chips) que se muestra solo dentro del hub:
  - 📋 **Servicio** → Protocolos · Atención en Mesa · Servicio por Local
  - 🍽️ **La Carta** → Platos Típicos · Carnes · Mar · Vegetales · Quesos · Sin Carne
  - 🥂 **Bebestibles** → Vinos · Cócteles · Cervezas · Cafés · Sin Alcohol
  - Sueltos: 🍷🍽️ Maridajes · 🚨 Alérgenos · 📖 Diccionario · 🧠 Quiz · 📊 Mi Avance · ⭐ Favoritos
  - JS: objeto `hubs`, `subMeta`, `renderers`, función `goTo(seccion)` y `renderSubNav()`. Cada hub recuerda su última sub-pestaña (`lastSub`). El `<div id="subNav">` se oculta (`:empty`) en pestañas sueltas
- **Sistema de aprendizaje (curso con seguimiento):**
  - Cada tarjeta de las secciones de contenido tiene un **check ✅ "aprendido"** (esquina) que se guarda en localStorage (key `aprendidoCards`, id `seccion::titulo`)
  - **Barra de % por sección** arriba (decorador central `decorateLearned`). Protocolos y Vinos usan barra basada en sus **checklists** (función `progresoDe` unifica tarjetas y checklists)
  - **📊 Mi Avance:** panel con anillo de % total del curso (conic-gradient) + cada una de las **18 secciones** con su mini-barra y % (color rojo/ámbar/verde según avance). Lista en `avanceSecciones`
  - **🎉 Celebración:** al completar el 100% de una sección, overlay "¡Felicidades!" con confeti + fanfarria + frase motivadora **acorde al % global** (Gran comienzo / Buen ritmo / Ya pasaste la mitad / Ya casi lo dominas / Completaste TODO) + el avance real del curso. Tiene botón **"Continuar"** y fondo tenue: **no se cierra sola** (da tiempo de leer; red de seguridad a los 15 s)
- **Pronunciación (Web Speech API):** botón 🔊 junto a cada término del Diccionario y en cada pregunta del Quiz; lee con la voz del dispositivo (offline). **Por idioma:** los términos del Diccionario están clasificados (en `idiomaDe`) para sonar en inglés (en-US, ~25), francés (fr-FR, ~14) o portugués (pt-BR, Cachaça), no con fonética española; lee solo la palabra principal (antes de "/" o "("). Independiente del botón silenciar

## Secciones (9 botones top-level; ~18 secciones de contenido)

### 📋 Servicio (hub)
- **Protocolos** — 8 estilos con checklist + fotos chilenizadas. Americano aclarado (servir por la derecha = norma clásica, puede variar según el local). Barra de avance según los pasos de los 8 checklists
- **Atención en Mesa** — secuencia, gestos, venta sugestiva, presencia atenta (con foto)
- **Servicio por Local** — 15 tipos de restaurant chileno con protocolo recomendado
- **🍔 Comida Rápida** — 8 claves del servicio rápido: toma de pedido en caja, venta sugestiva, drive-thru/para llevar, manejo de fila y peak, higiene, autoservicio/limpieza, trabajo por estaciones, reclamos rápidos

### 🍽️ La Carta (hub)
- **🍲 Platos Típicos Chilenos** — 15 platos (cazuela, valdiviano, charquicán, porotos granados, ajiaco, pastel de choclo/papas, empanada, humitas, sopaipillas, caldillo de congrio, paila marina, curanto, lomo a lo pobre, chorrillana) con descripción + maridaje
- **🥩 Carnes** — vacuno (parrilla/olla), cerdo, venado, jabalí, otras, al palo, puntos de cocción. Cada corte con descripción + punto (escala chilena) + maridaje
- **🌊 Productos del Mar** — 18 pescados, 12 mariscos, 7 crustáceos, con descripción + maridaje
- **🌽 Vegetales Chilenos** — papas chilotas, tubérculos, frutos nativos, hierbas, cultivos ancestrales
- **🧀 Quesos** — 15 del mundo + 5 chilenos, con familia (fresco/blando/semiduro/duro/azul) + descripción + maridaje
- **🌱 Sin Carne** — dietas (vegetariano, vegano, pescetariano, ovolacto, flexitariano) + productos sustitutos (tofu, tempeh, seitán, legumbres, etc.) + tip de atención (contaminación cruzada)

### 🥂 Bebestibles (hub)
- **🍷 Vinos** — protocolo de servicio (checklist con barra de avance)
- **🍸 Cócteles** — 20 internacionales + 7 chilenos
- **🍺 Cervezas** — 20 estilos (lagers, ales, trigo/ácidas) con tipo + descripción + maridaje
- **☕ Cafés (Barismo)** — 15 cafés (base, con leche, especiales) con tipo + descripción + composición ("Lleva")
- **🧃 Sin Alcohol** — 13 fichas: jugos, batidos y mocktails

### Sueltas (botón directo)
- **🍷🍽️ Maridajes** — guía + explicación de qué es el maridaje (con foto)
- **🚨 Alérgenos** — 14 alérgenos + protocolo (checklist) + foto del cartel de alérgenos
- **📖 Diccionario** — Barra, Destilados, Comedor, Cocina, Códigos y jerga chilena. 143 términos con 🔊 pronunciación + check aprendido
- **🧠 Quiz / Entrenamiento** — **opción múltiple A/B/C/D**, ~**381 preguntas** auto-generadas de casi todas las secciones (diccionario, quesos, cervezas, cócteles, vegetales, mar, cafés, platos, sin carne, sin alcohol, carnes, maridajes). Cada pregunta lleva un **grupo** (`g`) y los distractores salen del mismo tipo de respuesta para que no se delate la correcta. Al **acertar**, la pregunta se marca como aprendida (key `quizAprendidas`) y suma al avance; con 🔊 y botón reiniciar
- **📊 Mi Avance** — panel dashboard del progreso (ver Diseño)
- **⭐ Favoritos** — tarjetas guardadas (key `favoritos`)

> Nota: en cada sección con foto, la imagen va **al inicio** (bajo el título). La sección 🧮 Cuenta (calculadora de propina) fue **eliminada**.

## Imágenes (img/)
- **Protocolos:** `frances.jpg`, `ingles.jpg`, `americano.jpg`, `ruso.jpg`, `directo.jpg`, `bandeja.jpg`, `montaje.jpg`, `quejas.jpg` (montaje y quejas pasaron de dibujo SVG a foto; agregados a `conFoto` en el JS)
- **Secciones:** `bebestibles.jpg` (vinos), `mar.jpg`, `carnes.jpg`, `vegetales.jpg`, `local.jpg`, `maridajes.jpg`, `atencion-mesa.jpg`, `quesos.jpg`, `platos.jpg`, `cervezas.jpg`, `barismo.jpg`, `sinalcohol.jpg`, `sincarne.jpg`, `alergenos.jpg`, `quiz.jpg`, `mi-avance.jpg`, `favoritos.jpg` (todas las secciones ya tienen foto)
- Patrón: el `image-place` de cada sección usa `onerror` para ocultarse si el archivo no existe todavía
- `LOGO.jpg` → diseño de logo del dueño (montaña/llama/ola, maqueta enmarcada). El encabezado usa un **emblema SVG inline** (no este archivo)
- `icon-192.png`, `icon-512.png` → íconos PWA con el **emblema montaña/llama/ola** sobre carbón (generados con PowerShell + System.Drawing, mismas curvas que el SVG del encabezado)
- Todas las fotos de secciones/protocolos fueron renovadas (chilenizadas) en jun-2026
- Créditos de licencias en `CREDITS.md` y `img/credits.json`
- ⚠️ Ojo al pegar fotos: cuidado con dobles extensiones (`.jpg.jpg`) o nombre/extensión equivocados (ej. un JPEG guardado como `.SVG`) — la app busca el nombre exacto en minúsculas

## Hecho recientemente (jun-2026)
- ✅ Encabezado con nombre/logo (banner + emblema SVG + lema)
- ✅ Pantalla de bienvenida con animación de puerta (ahora **solo la primera vez por sesión**)
- ✅ Arranca siempre en Protocolos
- ✅ Nueva sección 🧀 Quesos
- ✅ Eliminada la calculadora de Cuenta
- ✅ Renovadas todas las fotos (sin las de origen colombiano) y movidas al inicio de cada sección
- ✅ Servicio Americano aclarado
- ✅ **Modo Quiz / Entrenamiento** con avance del curso (% + barra + aprendidas guardadas)
- ✅ **Tema claro real** ☀️ (modo día con fondo claro/tarjetas blancas)
- ✅ **Tipografía moderna** (Inter + Poppins)
- ✅ **Sonidos** (campanita puerta + tic botones) con botón 🔊/🔇 para silenciar
- ✅ **Ícono PWA** nuevo con el emblema (reemplazado el "GM")
- ✅ **Navegación en hubs** (Servicio / La Carta / Bebestibles con sub-pestañas) — de 16 botones a 9
- ✅ **Secciones nuevas:** 🍲 Platos Típicos Chilenos · 🍺 Cervezas · ☕ Cafés (Barismo) · 🧃 Sin Alcohol · 🌱 Sin Carne
- ✅ Bebestibles dividido en 🍷 Vinos y 🍸 Cócteles
- ✅ **Sistema de aprendizaje:** check ✅ por tarjeta + barra de % por sección, en TODAS las secciones (incluido Diccionario, Protocolos y Vinos)
- ✅ **📊 Mi Avance** — panel con anillo de % total + 17 secciones con su progreso
- ✅ **🎉 Celebración** al completar una sección (confeti + frase motivadora según avance)
- ✅ **🔊 Pronunciación** (TTS) en Diccionario y Quiz, ahora **por idioma** (inglés/francés/portugués, no fonética española)
- ✅ Fotos en TODAS las secciones (incluye `comidarapida.jpg` pendiente de subir)
- ✅ **🍔 Comida Rápida** (nueva sub-pestaña del hub Servicio, 8 claves)
- ✅ **Quiz de opción múltiple A/B/C/D** (351 preguntas, distractores por tipo, acertar marca aprendida)
- ✅ **Rebranding a "Servicio a la Mano"** + bajada "Academia de bolsillo del garzón" (encabezado, splash con filosofía animada, title, manifest)
- ✅ **Celebración con botón "Continuar"** (no se cierra sola; muestra avance real)

## Pendiente (próximos pasos / ideas)
1. **Subir `img/comidarapida.jpg`** — única sección sin foto
2. **Afinar tema claro** — revisar contraste en alguna sección puntual si hace falta
3. **¿URL propia?** — si se quiere `servicio-a-la-mano.vercel.app` hay que reconfigurar el deploy (hoy sigue `protocolos-servicio`)
4. Cualquier idea nueva del dueño 🙌

## Notas importantes
- **Escala de puntos de cocción chilena:** Inglesa · A punto · Medio · 3/4 · Bien cocido
- **Garzón** (no "camarero" ni "mesero") — toda la app usa términos chilenos
- Service worker **v14** → cachea HTML, imágenes, fuentes y assets para offline (subir la versión cada vez que se cambien imágenes/íconos/manifest en la lista `ASSETS` de `sw.js`). ⚠️ No agregar a `ASSETS` un archivo que aún no existe: `addAll` falla entero y rompe el offline
- Datos en localStorage: `aprendidoCards` (checks de tarjetas), `quizAprendidas` (quiz), `favoritos`, `darkMode`, `sonido`, `proto_*` y `checklist_vino`/`checklist_alergenos` (checklists). sessionStorage: `splashVisto`
- **Íconos PWA instalados no se actualizan solos:** tras cambiar `icon-*.png` hay que desinstalar/reinstalar la PWA en el celular para ver el ícono nuevo
- `_canvatest/` está en `.gitignore` (carpeta temporal de descarga de Canva)
- El archivo `CREDITS.md` tiene la atribución de imágenes con licencia CC

## Cómo trabajamos
- Cambios siempre en **local primero**, verificados en vista local (localhost:4321) antes de subir
- Push a GitHub → Vercel auto-despliega en ~30 segundos
- Todo el código en un solo `index.html` (datos JS + CSS + HTML + lógica)
