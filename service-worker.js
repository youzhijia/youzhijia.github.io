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
    "revision": "adfa6c9ef44e4f0b02b2c749abdeeef3"
  },
  {
    "url": "accumulate/index.html",
    "revision": "2558bce5435b2c62d4c1d4c756d8c6d5"
  },
  {
    "url": "accumulate/正则表达式.html",
    "revision": "9a4d12e5e156ca30a6e341f0810d92f2"
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
    "url": "assets/js/10.64eb2afc.js",
    "revision": "b9f1df9e9b3a4ed00e401afcca90fc21"
  },
  {
    "url": "assets/js/11.cd756451.js",
    "revision": "ed0467088728ebd34eaf510233467da2"
  },
  {
    "url": "assets/js/12.29942354.js",
    "revision": "f497dbd639dbba9876e9035ab5622118"
  },
  {
    "url": "assets/js/13.dd1193f8.js",
    "revision": "65c845732f00749eb36f669c4d43ebe1"
  },
  {
    "url": "assets/js/14.84728cdc.js",
    "revision": "c05e51020ac8dda0649409d7b00c03c7"
  },
  {
    "url": "assets/js/15.1374a4e5.js",
    "revision": "e1b1aab2884b5d5ceca136151ceb31b2"
  },
  {
    "url": "assets/js/16.15301414.js",
    "revision": "0e02f8525f0940de5f49c16ac5b174e9"
  },
  {
    "url": "assets/js/17.44b9b544.js",
    "revision": "fadb0c74ad3f34d468ab3124d0f48e8f"
  },
  {
    "url": "assets/js/18.0364fa3a.js",
    "revision": "1660c5a96866cac1e3d06d7be8ce1de8"
  },
  {
    "url": "assets/js/19.99a13de4.js",
    "revision": "c32dc06f2c868ecf404ad3b26ff93a32"
  },
  {
    "url": "assets/js/2.b8e2b7d4.js",
    "revision": "defbfa7cf9150ec463a065700a922cc1"
  },
  {
    "url": "assets/js/20.9431aa76.js",
    "revision": "5bb17945cecb214a8403b88b16a1933e"
  },
  {
    "url": "assets/js/21.31bd1eba.js",
    "revision": "563c18475a8d538ef185ccac6232b553"
  },
  {
    "url": "assets/js/22.50c81f48.js",
    "revision": "f40a881492b02f04d62f77b620233b0f"
  },
  {
    "url": "assets/js/23.927765d5.js",
    "revision": "28e8eb3143b64a32552889b32c51ee54"
  },
  {
    "url": "assets/js/24.4ae1f614.js",
    "revision": "38021ce4cd5250e82ab41027159a5f40"
  },
  {
    "url": "assets/js/25.425b0bb8.js",
    "revision": "398a46ea0dd7e30c95ac619fe0223c03"
  },
  {
    "url": "assets/js/26.bd881bc4.js",
    "revision": "a57b3900fb90b9be0f4f6ff40a112b39"
  },
  {
    "url": "assets/js/27.9f3b32ee.js",
    "revision": "f216014e866b389dcb98c543988de173"
  },
  {
    "url": "assets/js/28.88ca676e.js",
    "revision": "a3a724db3423d752fe7073aca60c9048"
  },
  {
    "url": "assets/js/29.4449a810.js",
    "revision": "384e322bbf05e6f5a5acf920246c4a05"
  },
  {
    "url": "assets/js/3.496a6e09.js",
    "revision": "2b4e2b916736b94d208acfb952269c72"
  },
  {
    "url": "assets/js/30.217d44b9.js",
    "revision": "c152d753b19e58fde0b79afa55fc1281"
  },
  {
    "url": "assets/js/31.9754534f.js",
    "revision": "e266a1200df86eb459703327912c6128"
  },
  {
    "url": "assets/js/32.99c8809d.js",
    "revision": "462c3944cedb424f47b2631da4b3b3a7"
  },
  {
    "url": "assets/js/33.f0ebde8f.js",
    "revision": "ed712eab6c9a2c86942d60016887f311"
  },
  {
    "url": "assets/js/34.bba0ce15.js",
    "revision": "d9c68317245669ff8371c3ab760c3713"
  },
  {
    "url": "assets/js/35.94aa08ac.js",
    "revision": "0969212bec2c57cbff59d3a3100741a9"
  },
  {
    "url": "assets/js/36.31fba07c.js",
    "revision": "d4a2d347516cf16e231d00590db323e0"
  },
  {
    "url": "assets/js/37.01b34bbb.js",
    "revision": "02266eef0485ca65e5a029fdc8d30198"
  },
  {
    "url": "assets/js/38.404d82b5.js",
    "revision": "bb7e9580b6fe5335e2a79912cb0b6275"
  },
  {
    "url": "assets/js/39.ddfb5cc3.js",
    "revision": "0abc869e171fc68d14602847148882b2"
  },
  {
    "url": "assets/js/4.a3d0a938.js",
    "revision": "d8997e713a89f8516dd8f42f98370702"
  },
  {
    "url": "assets/js/40.0c0be544.js",
    "revision": "32772194f54478a8c9c5bc6d68b4c04d"
  },
  {
    "url": "assets/js/5.426f8225.js",
    "revision": "4d0135aaba598785f9895f73930c1ba1"
  },
  {
    "url": "assets/js/6.ab53aa62.js",
    "revision": "abd643aa64c63149ac7d81e8b429c910"
  },
  {
    "url": "assets/js/7.d68df735.js",
    "revision": "6b0ffebedb9ce7b89e62dbdaf42da542"
  },
  {
    "url": "assets/js/8.28133af1.js",
    "revision": "02182163b7ff5c5e0261eb209c1fa823"
  },
  {
    "url": "assets/js/9.a1615c29.js",
    "revision": "706cc4db0aa5be0769d3ca630350ef49"
  },
  {
    "url": "assets/js/app.f4ae4a96.js",
    "revision": "320f80efe8f1b3868ffd9845abfd182a"
  },
  {
    "url": "education/index.html",
    "revision": "9720f74db4d92ff6f6e6b21b59c63b91"
  },
  {
    "url": "fitness/index.html",
    "revision": "2aa1f793f4ba3e875359a180eebb5da1"
  },
  {
    "url": "img/favicon.png",
    "revision": "f36ab4659b41498ef6952c945079501b"
  },
  {
    "url": "img/vue-0.png",
    "revision": "1c3d1decf59e3df820e012b62fefb477"
  },
  {
    "url": "img/vue-1.jpeg",
    "revision": "ee74b34c99148c13dd4d4d90b255eb1a"
  },
  {
    "url": "img/vue-2.jpg",
    "revision": "07dc84019d98f54dd9d73d0fd5dff00a"
  },
  {
    "url": "index.html",
    "revision": "f24b35e8e295dedcb4667fd7bc942418"
  },
  {
    "url": "lianjia/basic/gitBase.html",
    "revision": "29bbc42aec743c0b694c6abede5f8e18"
  },
  {
    "url": "lianjia/basic/standard.html",
    "revision": "b5872734baf9e931b0b15ec383d9af16"
  },
  {
    "url": "lianjia/index.html",
    "revision": "9bc8bc8cdab7052fd5df7091e90fcebb"
  },
  {
    "url": "lianjia/team/standard.html",
    "revision": "83e121769240a99fe4fc531cc2122689"
  },
  {
    "url": "muke/index.html",
    "revision": "92d07fc48234f9d5a4271871f8c37aed"
  },
  {
    "url": "open-QA/index.html",
    "revision": "5d1ab0108decaa474abb1de9b2e2d207"
  },
  {
    "url": "others-QA/index.html",
    "revision": "398b9b91cd4bdb45964c99d9ba0a9506"
  },
  {
    "url": "project-QA/index.html",
    "revision": "58bc76dfa060a7b18a6488dac4445b0d"
  },
  {
    "url": "reading/index.html",
    "revision": "3bb60cb663f179ceb5654be97d0db36f"
  },
  {
    "url": "studying/index.html",
    "revision": "62ef9b206a9a436bc93d711383c14619"
  },
  {
    "url": "tech-QA/css/49-1.html",
    "revision": "d8e1ddd6bb7688245babc13c97725e41"
  },
  {
    "url": "tech-QA/index.html",
    "revision": "20db015bdf4366ad1b73ade9eace9059"
  },
  {
    "url": "tech-QA/js/HFQ-0.html",
    "revision": "8f4736ded6fcfc20e1d987e5ca396af4"
  },
  {
    "url": "tech-QA/js/HFQ-1.html",
    "revision": "184bacd895282d10a2d49c848f870ef8"
  },
  {
    "url": "tech-QA/react/setState.html",
    "revision": "46da43cbe5f63624412551b6c99cee7b"
  },
  {
    "url": "tech-QA/react/transaction.html",
    "revision": "e78d9ec7f952f41efebd6af5a156baf3"
  },
  {
    "url": "yideng/index.html",
    "revision": "52bc8ed7c168544c458c1afd44102afa"
  },
  {
    "url": "yideng/week0/ES5.html",
    "revision": "fb8c5626a2c2bbe928482d4e80f7379d"
  },
  {
    "url": "yideng/week0/HTML.html",
    "revision": "d7bce7a1a098e55ee122d6699cffcc92"
  },
  {
    "url": "yideng/week1/JS_QA.html",
    "revision": "389ab845a18644fd8acb95948e430e57"
  },
  {
    "url": "yideng/week10/designMode.html",
    "revision": "36d758c9e143a15f0ec9b0e35cd410b5"
  },
  {
    "url": "yideng/week2/NodeJS.html",
    "revision": "2f843284660df763d088b0d6c09fe62b"
  },
  {
    "url": "yideng/week3/webpack.html",
    "revision": "d3b8e97255b215a00d65e7164bf2d797"
  },
  {
    "url": "yideng/week4/server.html",
    "revision": "a75809cef9c5d29a830655a11685a8a8"
  },
  {
    "url": "yideng/week5/CSS.html",
    "revision": "3e56d7d63d73f654abae4ed165312f7b"
  },
  {
    "url": "yideng/week6/React.html",
    "revision": "2568e3cb3d3d125e22ee9f40e5f228ca"
  },
  {
    "url": "yideng/week6/Typescript.html",
    "revision": "feefc5af067491df5fec22342dca9ccf"
  },
  {
    "url": "yideng/week6/Vue.html",
    "revision": "71856a7ee13c42e4fb36a5743684af54"
  },
  {
    "url": "yideng/week6/Vue深入.html",
    "revision": "2cb5beffb8da2f0ffb9b5dacd81d87a8"
  },
  {
    "url": "yideng/week7/Android.html",
    "revision": "6ea7167190384e3ba53ff5e18504b9a8"
  },
  {
    "url": "yideng/week8/algorithms.html",
    "revision": "c40c687b50a3f0333862f3e941a2ebc4"
  },
  {
    "url": "yideng/week9/Canvas.html",
    "revision": "a74b3f71c2b9653bd7bc0f1e4958a07a"
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
