'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "18acc3cae086e591269d6aee347c1fe5",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d789f7572a74acc55ad551aa3f7e2135",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "92a3ee42afd9272e206a0e7320e729cd",
".git/logs/refs/heads/main": "0759fa6c71e083586df150074666319a",
".git/logs/refs/remotes/origin/main": "441b7f54bc9f69549c70ac106796b69c",
".git/objects/00/bebbb2b3bec511d2b90b106a3925a6fe82c803": "a2d1a4ddef8f694f7aa5cefee5bcc7ce",
".git/objects/0c/6b7c3a6a63e5823ba7e899780b4fd91503aac9": "331cdb733572d66a0ec0ba9be392d9d6",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/1d/ff9814e361ef374fddb80e79c81fe54e6aaf5b": "79a96ee601993fbb5af702a9e371ce91",
".git/objects/20/5d7cf1cb30db25d3a2ee888beb938e9633f997": "eda6d56c6550a0e265b77994ebf074dd",
".git/objects/22/fdecaac2ed91b2e531bbb5079bdc89d6d6dbd4": "b0edf1da944efbed165c0b461a8446eb",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/26/4401eb82f00211b6ea782d6f497c2767cc917d": "40b45c673aa986697ae57e3977e4ede7",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2e/c13b32f8fe5d54b16e56acfd79b4c0cde2e84d": "e4e436bb072b8a66dc49b93aa1f81eb5",
".git/objects/2f/e796762ef6c23de4ccd17258bb76e14ae9a199": "e54e58564f06609a7cfb3383b180afcb",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4c/9b1526e1cc7279a18d8e213c25ee2dafb4eeca": "291d174113595b2ae75f777e2e391197",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4f/155359d0b71592701a83aab0d7b0f0c75837e6": "f55132e71101699cc4a5508a1988f8f7",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/52/aa2ac6f0811fce713ef258f7a52fecc6dca6a2": "6ebce09ad188dcbefe198de265873f78",
".git/objects/54/a85758322d6060ee3d6378a3cc74372f189ea5": "b801097c0dac5e76d72f709a9e968ea4",
".git/objects/5b/b4a7a135282fd57e3625759c1c6167f64defc2": "3170328b49b205faf7bfb4c5b59f7f5e",
".git/objects/64/bfdc7cca6b662eb13eb0baad5b765f7a38aea9": "76f7d9c7a4befa393132bec16d52811d",
".git/objects/64/de410042a216e688feec985a75141f5876ee8e": "c0f247fbadcfc4703c0a763a7779f0a5",
".git/objects/6d/86136d77dc96e7fa263b28b0a960e6b420fe87": "b676a4d01c47366af0f2aae10a8be7a8",
".git/objects/75/f4f26eb47a73293d016b3fe5ad5df651a87690": "ead1f8d4b81cef72a1a33097392ef0ba",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7e/b4c5193404a31dac00f31806f443856909d748": "fef834ea7f9d2102ba75407f2839a48e",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/96524886e205d00ac738c853cb1885efef7436": "6799d9c000f3f7afcf5f0b1077636f7d",
".git/objects/b5/e4552c18beb8f47d8195997fba893b194ab238": "3e58581a9532aee89f4b426f4202ff73",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/a7a1383c873bc588918e8fd79bf08cd6a0c574": "8ad56485a18492c0403d46cc837f03ae",
".git/objects/bc/3eb02f5d1f0a43d43bb19c2e67401b1e6bbbf5": "5b2fe17978a33d823abbdf41f4953bf4",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/d6/3a9c68b12378894b822f2ae3b7bea3722efd6c": "786cad8c2ef60807e0d9d5728a07aac6",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/80923f31a9785f0034859c7b7ff8779025fa28": "2b959182d092fbca08ada61f30437ac6",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/3304572c14e902d0e1c61898c5b6e0ba41e5a3": "696d10afcb7502c8e8f8361f39eac00b",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/37ad629523b7a020905048fc839aa6500a283d": "621e10882941d5a3997e3276d19e86d7",
".git/objects/ed/d154833bfe84af28d915afd35bf596a242cfac": "3daee664e5028cab6e8380ea6dbc22d4",
".git/objects/ee/6f90009ca3520cf4c6eec65e772c6147b26fa2": "c41566486b4b8c4b7a11b9afbb07b5c9",
".git/objects/ef/408057a1bf7892cffa38c882e987b11917e002": "bbbba2ecace0300785e65f02c042c0f0",
".git/refs/heads/main": "a71d4fb5b88f43325e252672351829d0",
".git/refs/remotes/origin/main": "a71d4fb5b88f43325e252672351829d0",
"assets/AssetManifest.json": "1666c95dfdffd1773b5624292d03d99f",
"assets/assets/images/ace.png": "4730c0abc80fdc12c9331c140686a339",
"assets/assets/images/azfen_logo.jpg": "aa8444d408fbb52dbfa9545c1ba3948a",
"assets/assets/images/azfen_logo.png": "395bcfd5f1acdb754ad2ec5c9a5e7b67",
"assets/assets/images/bp_logo.png": "356750acec54a4fbc215f61c6a5a3bde",
"assets/assets/images/burger.svg": "263da3d76835861ce2e9c99fe3ae4be3",
"assets/assets/images/dashboard.svg": "4178fd3cabc77fc26c64f87d741cb040",
"assets/assets/images/Elvin.jfif": "8e16aedfc61b1508b5b1393f2e17738b",
"assets/assets/images/ErkinMalikov.jpg": "51cbbf0de6be2ac1a97464932707a242",
"assets/assets/images/inbox.svg": "dcc53f0482d33017302612315c440c81",
"assets/assets/images/mask_human.svg": "1cbcfc485388523607a1ade324ba4e9c",
"assets/assets/images/mask_image.png": "fac5ad47bb044e1faeba590a84ac1a29",
"assets/assets/images/notification.svg": "4aa214e3ca3ccdb7db61a0a37f381d2a",
"assets/assets/images/process.svg": "0168fa0bb9f0242398363d1c18204638",
"assets/assets/images/report.svg": "d98081815bc2f98cb06505a14b98b00a",
"assets/assets/images/source.svg": "0c5e613320c82f1d2e9a9d19f67a2715",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "296734bc83b35ea3bb9671229aa2f7d0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "65e9f341fd384f68ee33c3d5c03490b9",
"/": "65e9f341fd384f68ee33c3d5c03490b9",
"main.dart.js": "62f327969026559053902a9c6d2e4af5",
"manifest.json": "09a5aaa9cdf3da6658514870db69c631",
"version.json": "680b2b9b027000e2d607cf960d101ca6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
