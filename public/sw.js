// ============= events
const cacheName = "coffee";
const FILES = [
    "index.html",
    "about.html",
    "contact.html",
    "style.css",
    "script.js",
    "manifest.json",
    "images/coffee1.jpg",
    "images/coffee2.jpg",
    "images/coffee3.jpg",
    "images/coffee4.jpg",
    "images/coffee5.jpg",
    "images/coffee6.jpg",
    "images/coffee7.jpg",
    "images/coffee8.jpg",
    "images/coffee9.jpg",
    "images/icon-48.jpg",
    "images/icon-72.jpg",
    "images/icon-96.jpg",
    "images/icon-120.jpg",
    "images/icon-128.jpg",
    "images/icon-144.jpg",
    "images/icon-152.jpg",
    "images/icon-180.jpg",
    "images/icon-192.jpg",
    "images/icon-384.jpg",
    "images/icon-512.jpg",
];

try {
    self.addEventListener("install", (e) => {
        e.waitUntil(caches.open(cacheName)
            .then((cache) => cache.addAll(FILES)))
    })

    self.addEventListener("activate", () => {
        console.log('activate');
    })   

    // self.addEventListener("fetch", (e) => {
    //     e.respondWith(caches.match(e.request.url))
    // })

} catch (err) {
    console.error("haklsdfjklasdjf")
}    


