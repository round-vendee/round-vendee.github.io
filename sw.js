// @roundMe — service worker minimal (DEC-40) : rend la page installable sur l'écran d'accueil.
// Il ne met rien en cache : l'application reste toujours à jour (pas de mode hors ligne, hors périmètre v1).
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () { /* passage direct au réseau */ });
