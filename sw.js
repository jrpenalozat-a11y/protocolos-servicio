// Service Worker — Protocolos de Servicio
const CACHE = 'protocolos-v3';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './img/protocolos.jpg',
  './img/bebestibles.jpg',
  './img/mar.jpg',
  './img/carnes.jpg',
  './img/vegetales.jpg',
  './img/local.jpg'
];

// Instala y precachea el shell de la app
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

// Limpia caches antiguas
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// Detecta si una petición es de navegación / documento HTML
function isHtmlRequest(req) {
  return req.mode === 'navigate' ||
    (req.method === 'GET' && req.headers.get('accept') && req.headers.get('accept').includes('text/html'));
}

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;

  // HTML: network-first (siempre intenta la última versión; offline -> caché)
  if (isHtmlRequest(e.request)) {
    e.respondWith(
      fetch(e.request).then((resp) => {
        const copy = resp.clone();
        caches.open(CACHE).then((c) => c.put('./index.html', copy)).catch(() => {});
        return resp;
      }).catch(() => caches.match(e.request).then((c) => c || caches.match('./index.html')))
    );
    return;
  }

  // Resto de assets: cache-first con respaldo de red y cacheo progresivo
  e.respondWith(
    caches.match(e.request).then((cached) => {
      if (cached) return cached;
      return fetch(e.request).then((resp) => {
        const copy = resp.clone();
        caches.open(CACHE).then((c) => c.put(e.request, copy)).catch(() => {});
        return resp;
      });
    })
  );
});
