const staticCacheName = "site-static-v1";
const cacheAssets = [
    "/",
    "index.html",
    "assest/css/local.css",
    "assest/css/master.css",
    "assest/css/normalize.css",
    "assest/img/512.png"
];
self.addEventListener("install", evt => {
    evt.waitUntil(
        caches
            .open(staticCacheName)
            .then(cache => {
                console.log("caching assets...");
                cache.addAll(cacheAssets);
            })
            .catch(err => { })
    );
});
self.addEventListener("fetch", evt => {
    evt.respondWith(
        caches
            .match(evt.request)
            .then(res => {
                return res || fetch(evt.request);
            })
            .catch(err => {
                if (evt.request.url.indexOf(".html") > -1) {
                    return caches.match("./index.html");
                }
            })
    );
});
