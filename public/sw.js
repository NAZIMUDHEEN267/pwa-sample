
self.addEventListener("install", (e) => {
    console.log('install');
})

self.addEventListener("activate", (e)=>{
    console.log('activate');
    e.waitUntil(caches.open("escape")
    .then(cache => cache.addAll([
        "index.html",
        "style.css",
        "about.html",
        "contact.html",
        "manifest.json",
        "script.js",
        "images/",
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
        "images/icon-152.jpg",
        "images/icon-180.jpg",
        "images/icon-192.jpg",
        "images/icon-384.jpg",
        "images/icon-512.jpg",
    ])
    .catch(err => console.log(err))))
})

self.addEventListener("fetch", (e)=> {
    
})