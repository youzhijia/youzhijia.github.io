/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "65a14acd87215dc27d04d5a54fe6a4d7"
  },
  {
    "url": "about/index.html",
    "revision": "da83956ecdbdff324e2e865339fd845e"
  },
  {
    "url": "about/info.html",
    "revision": "7eb0d3381a2aa1e5372845df17c4fc85"
  },
  {
    "url": "assets/css/0.styles.1ac3af9e.css",
    "revision": "36e11705f1bd8c27c1cad724c0777f63"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.26ad5500.js",
    "revision": "b9f1df9e9b3a4ed00e401afcca90fc21"
  },
  {
    "url": "assets/js/11.a0172fba.js",
    "revision": "faab3b8425bb46f313b8cfe0abbc5cc1"
  },
  {
    "url": "assets/js/12.444efd7b.js",
    "revision": "63a9dd7137834bcd7163fbf32c5ee749"
  },
  {
    "url": "assets/js/13.16fd8e90.js",
    "revision": "ca2af7720a23ef7be6c2d610c1b63c8b"
  },
  {
    "url": "assets/js/14.e0b0fac9.js",
    "revision": "d712bd31028832c4411e8931ff293216"
  },
  {
    "url": "assets/js/2.b8e2b7d4.js",
    "revision": "defbfa7cf9150ec463a065700a922cc1"
  },
  {
    "url": "assets/js/3.ee92b406.js",
    "revision": "57eeb17f8f3e342015dba8647520d428"
  },
  {
    "url": "assets/js/4.0e41f776.js",
    "revision": "efa164562324ff3aa2a1d594fd02ed7d"
  },
  {
    "url": "assets/js/5.59892038.js",
    "revision": "858de4d3fd2603f4307261929436aee5"
  },
  {
    "url": "assets/js/6.13d84026.js",
    "revision": "9a502fad47e55e8cd90297c5677ed135"
  },
  {
    "url": "assets/js/7.d68df735.js",
    "revision": "6b0ffebedb9ce7b89e62dbdaf42da542"
  },
  {
    "url": "assets/js/8.fd33e74f.js",
    "revision": "4b1db9e2d45e97f1315a1fef26a850fd"
  },
  {
    "url": "assets/js/9.75cc21f3.js",
    "revision": "805776fad04a28707e54805c047e3024"
  },
  {
    "url": "assets/js/app.a661bbc4.js",
    "revision": "af958358c4556e051ed5619571e4b27d"
  },
  {
    "url": "essay/aaa.html",
    "revision": "af41e75e7038d96835490968d965a761"
  },
  {
    "url": "essay/index.html",
    "revision": "740ca2894d9b26e21e250a5c23a866c7"
  },
  {
    "url": "img/favicon.png",
    "revision": "f36ab4659b41498ef6952c945079501b"
  },
  {
    "url": "index.html",
    "revision": "c61497181d2a35168df7170a74d59e15"
  },
  {
    "url": "study/index.html",
    "revision": "ff73d7b387f138cd0dd3efc9c004d310"
  },
  {
    "url": "working/index.html",
    "revision": "b4dc07498120c8c79483a07262cdfef6"
  },
  {
    "url": "yideng/index.html",
    "revision": "91c2b837f95f8bfb32d806968fe84cd5"
  },
  {
    "url": "yideng/week0/fn.html",
    "revision": "23ae6744f69682e2e80fe93d3d0bc145"
  },
  {
    "url": "yideng/week1/fn.html",
    "revision": "1dcf29ec9aa343db434061a0e38a32ac"
  },
  {
    "url": "yideng/week2/fn.html",
    "revision": "f5db84ff6b71163159f8f18dccdee170"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
