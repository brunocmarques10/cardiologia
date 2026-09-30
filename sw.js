/* Desativa a versão antiga instalada no aparelho e mostra sempre o aviso. */
self.addEventListener('install',function(){self.skipWaiting();});
self.addEventListener('activate',function(e){
  e.waitUntil(caches.keys().then(function(k){return Promise.all(k.map(function(n){return caches.delete(n);}));})
    .then(function(){return self.registration.unregister();})
    .then(function(){return self.clients.matchAll({type:'window'});})
    .then(function(cs){cs.forEach(function(c){c.navigate(c.url);});}));
});
self.addEventListener('fetch',function(e){e.respondWith(fetch(e.request,{cache:'no-store'}));});
