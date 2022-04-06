const cacheName = "coffee-shop";
const appShellFiles = [
 './index.html',
 './script.js',
 './style.css',
 './images/',
 './images/144.png',
 './images/192.png',
 './images/252.png',
 './images/coffee1.jpg',
 './images/coffee2.jpg',
 './images/coffee3.jpg',
 './images/coffee4.jpg',
 './images/coffee5.jpg',
 './images/coffee6.jpg',
 './images/coffee7.jpg',
 './images/coffee8.jpg',
 './images/coffee9.jpg',
 './images/icon-48.png',
 './images/pic-144.png',
 './images/something.png'
];
self.addEventListener('install', (event) => {
    event.waitUntil(caches
        .open(cacheName)
        .then(cache => {
            console.log("cache is running"); 
            cache.addAll(appShellFiles) })
        .then(() => self.skipWaiting())
)})

self.addEventListener('activate', (event) => {
    
})

self.addEventListener("fetch", (event) => {
    event.respondWith(fetch(event.request).catch(() => caches.match(event.request)))
})
