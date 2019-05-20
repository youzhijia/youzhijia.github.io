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
    "revision": "d2f22915c39bd5eaa2ea981681b2d553"
  },
  {
    "url": "about/index.html",
    "revision": "238791ea5c4d5216ed2bc407a49d2da7"
  },
  {
    "url": "about/info.html",
    "revision": "7c634bf2ae9f6bb9da7f49c21a26aa65"
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
    "url": "assets/js/app.b96e9b65.js",
    "revision": "677e308c90794c6de561b3de903a6752"
  },
  {
    "url": "essay/aaa.html",
    "revision": "9710b704909aebd6c8aa2d787b1692b7"
  },
  {
    "url": "essay/index.html",
    "revision": "0bb75fa11b70e97918a104ec024aa7e9"
  },
  {
    "url": "img/favicon.png",
    "revision": "f36ab4659b41498ef6952c945079501b"
  },
  {
    "url": "index.html",
    "revision": "9ea7327d858f4fdb9598b52ebfec6f89"
  },
  {
    "url": "study/index.html",
    "revision": "f72cca4b54cafc09140092f106235d12"
  },
  {
    "url": "working/index.html",
    "revision": "aafbc9b0e19dea2fe372c0c0209c2ab4"
  },
  {
    "url": "yideng/index.html",
    "revision": "39d32fdee0e7cdc16944867007290569"
  },
  {
    "url": "yideng/week0/fn.html",
    "revision": "e7b70453e0f1f3c606d1bfe49acade3b"
  },
  {
    "url": "yideng/week1/fn.html",
    "revision": "6e82b6a122f255a75033d37bf874e400"
  },
  {
    "url": "yideng/week2/fn.html",
    "revision": "49c9d3d458e7221db2c79e50a6090923"
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
