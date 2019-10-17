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
    "revision": "b38184de9e99764d26e1ea922613e645"
  },
  {
    "url": "accumulate/index.html",
    "revision": "b2cfc88456eb63d0dfef56b5e42fb28c"
  },
  {
    "url": "assets/css/0.styles.0fe57943.css",
    "revision": "9a07c34b7a8e3651488db6f42a90ea23"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3fa1cfa6.js",
    "revision": "b9f1df9e9b3a4ed00e401afcca90fc21"
  },
  {
    "url": "assets/js/11.6cfd2ac4.js",
    "revision": "ed0467088728ebd34eaf510233467da2"
  },
  {
    "url": "assets/js/12.46bf5e30.js",
    "revision": "f497dbd639dbba9876e9035ab5622118"
  },
  {
    "url": "assets/js/13.b9004b37.js",
    "revision": "65c845732f00749eb36f669c4d43ebe1"
  },
  {
    "url": "assets/js/14.60f6fc35.js",
    "revision": "c05e51020ac8dda0649409d7b00c03c7"
  },
  {
    "url": "assets/js/15.a44dfed4.js",
    "revision": "e1b1aab2884b5d5ceca136151ceb31b2"
  },
  {
    "url": "assets/js/16.4194c6c3.js",
    "revision": "0e02f8525f0940de5f49c16ac5b174e9"
  },
  {
    "url": "assets/js/17.8b56715e.js",
    "revision": "fadb0c74ad3f34d468ab3124d0f48e8f"
  },
  {
    "url": "assets/js/18.3797afbe.js",
    "revision": "a9cb9d3a25c2b27e858c6f4c4ee92122"
  },
  {
    "url": "assets/js/19.e2569aa7.js",
    "revision": "93eb55b5f0a1210341a0a4a767bebaee"
  },
  {
    "url": "assets/js/2.b8e2b7d4.js",
    "revision": "defbfa7cf9150ec463a065700a922cc1"
  },
  {
    "url": "assets/js/20.175059f7.js",
    "revision": "4339675d8ae170bf41980246c20de1bd"
  },
  {
    "url": "assets/js/21.80af98ed.js",
    "revision": "aa3ad49ba69a244c96d0b28f008fe05b"
  },
  {
    "url": "assets/js/22.72377cd5.js",
    "revision": "c0b334cbf387fdb8bdb18a9290e1272b"
  },
  {
    "url": "assets/js/23.4a9c7e03.js",
    "revision": "d9cd111c6adeb946439ab8db36ae6480"
  },
  {
    "url": "assets/js/24.7c314f62.js",
    "revision": "ea06b2351c08a967b2c463b07fc145eb"
  },
  {
    "url": "assets/js/25.02a2c520.js",
    "revision": "90b2b6ff4a72fb748b5fab7c1eb944c5"
  },
  {
    "url": "assets/js/26.cbdece2b.js",
    "revision": "f6628067bf7ac35c9a5775fe3cd9c2ef"
  },
  {
    "url": "assets/js/27.03294d5c.js",
    "revision": "098ddc31f613e10fd0c48e5f6df5c810"
  },
  {
    "url": "assets/js/28.fd368228.js",
    "revision": "026f215e3d89e286da5ed85a102ff8c2"
  },
  {
    "url": "assets/js/29.7e223b31.js",
    "revision": "d7a36f39d1bbd19f675ab3e3de235440"
  },
  {
    "url": "assets/js/3.a84671e8.js",
    "revision": "8749b530103406635f53ecb285e0a9a3"
  },
  {
    "url": "assets/js/30.32882ac5.js",
    "revision": "e3a4cf6d3a018c06dcc8ae0f61944863"
  },
  {
    "url": "assets/js/31.2b1c7dff.js",
    "revision": "349229b6e1717affb37fd52426b48f7d"
  },
  {
    "url": "assets/js/32.728a731a.js",
    "revision": "b2e752d471a3f8469bc35a8a2249ecb2"
  },
  {
    "url": "assets/js/33.1a66d1dc.js",
    "revision": "82f4239ec8d9bb97f9e9c73d04f4b220"
  },
  {
    "url": "assets/js/4.72d3f8ab.js",
    "revision": "a65bd5f36c241fbe66e49a353b05ac78"
  },
  {
    "url": "assets/js/5.e9ff9215.js",
    "revision": "4d0135aaba598785f9895f73930c1ba1"
  },
  {
    "url": "assets/js/6.62e7c573.js",
    "revision": "abd643aa64c63149ac7d81e8b429c910"
  },
  {
    "url": "assets/js/7.6b96f209.js",
    "revision": "5e237f9a895899ab7e8c839ac75ff49a"
  },
  {
    "url": "assets/js/8.0a1d9558.js",
    "revision": "6d2ffbd375ba9a84210fe67c2d4e4568"
  },
  {
    "url": "assets/js/9.041b71ad.js",
    "revision": "805776fad04a28707e54805c047e3024"
  },
  {
    "url": "assets/js/app.4790c765.js",
    "revision": "144b11f14282319601d6f3666fb764d8"
  },
  {
    "url": "education/index.html",
    "revision": "1f62eca832c8dd149e1755c9a8c24909"
  },
  {
    "url": "fitness/index.html",
    "revision": "1d79e1c9c3485f5f6c880ceffc5b112c"
  },
  {
    "url": "img/favicon.png",
    "revision": "f36ab4659b41498ef6952c945079501b"
  },
  {
    "url": "index.html",
    "revision": "f27f62aa71fe36e9a1c2971ac263b0e6"
  },
  {
    "url": "lianjia/basic/gitBase.html",
    "revision": "0536f02d6305309c802642b6b16f94b5"
  },
  {
    "url": "lianjia/basic/standard.html",
    "revision": "573b944dca72020d33071ceef0ddbf21"
  },
  {
    "url": "lianjia/index.html",
    "revision": "9c26858973569d00bb9b7f3bd672061e"
  },
  {
    "url": "lianjia/team/standard.html",
    "revision": "1855382fdbd80ff5ca196a9176de6bf3"
  },
  {
    "url": "muke/index.html",
    "revision": "8a9978a97eacfa4ab1481bb6bc3a8487"
  },
  {
    "url": "open-QA/index.html",
    "revision": "66ca6e56e7fc5300690344b292cd1c07"
  },
  {
    "url": "others-QA/index.html",
    "revision": "fb7d175d17c862403ef0ec28eddd1e03"
  },
  {
    "url": "project-QA/index.html",
    "revision": "d9023f58f3c58b02f9d15c60444d2f13"
  },
  {
    "url": "reading/index.html",
    "revision": "78789c95f10adbbcfa268902abc7a6aa"
  },
  {
    "url": "studying/index.html",
    "revision": "3a199a769c77dcfb7d6e11431f732ea4"
  },
  {
    "url": "tech-QA/index.html",
    "revision": "3df76e41c65b0bb38330848bbdc48372"
  },
  {
    "url": "yideng/index.html",
    "revision": "a103346ff04795f5532de8ed4381eea3"
  },
  {
    "url": "yideng/week0/ES5.html",
    "revision": "769d635ac21d932075562323d45ebb08"
  },
  {
    "url": "yideng/week0/HTML.html",
    "revision": "40bac3223fc94e4eeec7352fc999d315"
  },
  {
    "url": "yideng/week1/JS_QA.html",
    "revision": "3a4b71bac517baa7000145b969a0efc1"
  },
  {
    "url": "yideng/week10/designMode.html",
    "revision": "b7ede8f4e90c0c8fda37349869a85b58"
  },
  {
    "url": "yideng/week2/NodeJS.html",
    "revision": "094e0e2e865c7cf75869d2c9283770ec"
  },
  {
    "url": "yideng/week3/webpack.html",
    "revision": "18d68fc870fa5ff490279fbf3632efaf"
  },
  {
    "url": "yideng/week4/server.html",
    "revision": "d279c8da50593deb0ed89b43d2a540cb"
  },
  {
    "url": "yideng/week5/CSS.html",
    "revision": "4c87eebee602250b41c76cc0e4a6026e"
  },
  {
    "url": "yideng/week6/React.html",
    "revision": "16294de0d07ed2aa53aeeb6479b78203"
  },
  {
    "url": "yideng/week6/Typescript.html",
    "revision": "4e016c5ae207da7377b15fa5be23485e"
  },
  {
    "url": "yideng/week6/Vue.html",
    "revision": "87d75b1fbad855b8d4d0ba0d69a89da0"
  },
  {
    "url": "yideng/week7/Android.html",
    "revision": "1812f01481bcbeeb570cb34395ed9abd"
  },
  {
    "url": "yideng/week8/algorithms.html",
    "revision": "35662f8e198446927fc73afa619de9e2"
  },
  {
    "url": "yideng/week9/Canvas.html",
    "revision": "d85010d3b6f501c5d71103642c7a6325"
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
