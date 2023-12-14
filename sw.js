// service-worker.js

// Nombre del caché
const cacheName = 'mi-cache-v1';

// Recursos a ser almacenados en caché
const cacheAssets = [
  '/assets',
  '/index.html',
  // ...agrega aquí otros recursos que desees cachear
];

// Instalación del service worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(cacheAssets);
    })
  );
});

// Activación del service worker y limpieza de cachés antiguos
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== cacheName) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// Estrategia de caché para responder a las solicitudes
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
