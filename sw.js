const CACHE = 'mahabharata-v4';  // ⬅ bump version to force refresh
const ASSETS = [
  '/mahabharata-pwa/',
  '/mahabharata-pwa/index.html',
  '/mahabharata-pwa/manifest.json',
  '/mahabharata-pwa/icon-192.png',
  '/mahabharata-pwa/icon-512.png'
];

self.addEventListener('install', e => e.waitUntil(
  caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())
));

self.addEventListener('activate', e => e.waitUntil(
  caches.keys()
    .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim())
));

self.addEventListener('fetch', e => e.respondWith(
  caches.match(e.request).then(r => {
    if (r) return r;
    return fetch(e.request).then(res => {
      if (res.ok && e.request.method === 'GET') {
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(e.request, clone));
      }
      return res;
    }).catch(() => caches.match('/mahabharata-pwa/index.html'));  // ⬅ fallback fix
  })
));
