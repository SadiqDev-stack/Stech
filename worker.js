
const cacheName = 'SADIQ TECH APP';
const appAssets = {
  './showcase/profile.png',
  './showcase/pump.png',
  './showcase/ac_motor.png',
  './showcase/all.png',
  './showcase/career.png',
  './showcase/coding.png',
  './showcase/escavator.png',
  './showcase/game.png',
  './showcase/image.png',
  './showcase/lamp.png',
  './showcase/level_indicator.png',
  './showcase/quiz.png',
  './showcase/snet.png',
  './showcase/weather.png',
  'weather.json',
  'index.html',
  'worker.js',
  'manifest.json',
];


self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(appAssets);
    })
  );
})


self.addEventListener('fetch',e => {
  e.respondWith(
     caches.match(e.request).then(response => {
       return response ? response : fetch(e.request)
     })
    )
})
