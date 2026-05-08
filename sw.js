// Psychiatry Case Sheet — Service Worker
// Caches all assets for full offline operation

const CACHE_NAME = 'psychcase-v1';
const ASSETS = [
  './',
  './index.html',
  './drugs.html',
  './ch01.html',
  './ch02.html',
  './ch03.html',
  './ch04.html',
  './ch05.html',
  './ch06.html',
  './ch07.html',
  './ch08.html',
  './ch09.html',
  './ch10.html',
  './ch11.html',
  './ch12.html',
  './ch13.html',
  './ch14.html',
  './dim15.html',
  './manifest.json'
];

self.addEventListener('install', function(e){
  self.skipWaiting();
  e.waitUntil(
    caches.open(CACHE_NAME).then(function(cache){
      return cache.addAll(ASSETS);
    }).catch(function(err){
      console.log('Cache install error:', err);
    })
  );
});

self.addEventListener('activate', function(e){
  e.waitUntil(
    caches.keys().then(function(names){
      return Promise.all(
        names.filter(function(n){return n!==CACHE_NAME}).map(function(n){return caches.delete(n)})
      );
    }).then(function(){return self.clients.claim()})
  );
});

self.addEventListener('fetch', function(e){
  e.respondWith(
    caches.match(e.request).then(function(response){
      if(response) return response;
      return fetch(e.request).then(function(networkResponse){
        // Cache new requests too
        if(e.request.method==='GET' && networkResponse && networkResponse.status===200){
          var cacheCopy = networkResponse.clone();
          caches.open(CACHE_NAME).then(function(cache){cache.put(e.request, cacheCopy)});
        }
        return networkResponse;
      }).catch(function(){
        // Offline fallback
        return new Response('<html><body style="background:#0a0a0a;color:#fff;font-family:sans-serif;text-align:center;padding:40px"><h2>Offline</h2><p>This chapter is not cached. Please connect to the internet once to cache all chapters.</p></body></html>', {
          headers:{'Content-Type':'text/html'}
        });
      });
    })
  );
});
