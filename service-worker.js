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
    "revision": "cbe1fd720dcfac2a2ad1273653869e77"
  },
  {
    "url": "accumulate/index.html",
    "revision": "dc7466d3be9093841291f944e9fc6caf"
  },
  {
    "url": "accumulate/正则表达式.html",
    "revision": "5089863980498f4c270d94aec47186d9"
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
    "url": "assets/js/app.1d964ad8.js",
    "revision": "98934d608101ada47ce09fe3c52b7915"
  },
  {
    "url": "education/index.html",
    "revision": "ae708f914e1838cd724b1d8efb5fcfeb"
  },
  {
    "url": "fitness/index.html",
    "revision": "96e1b0672e92016bec6ca44d512e2a42"
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
    "revision": "657318c15df7db12f0a3ec00ca4beff1"
  },
  {
    "url": "lianjia/basic/gitBase.html",
    "revision": "4416f4c1bb43ee258e648da1e7296440"
  },
  {
    "url": "lianjia/basic/standard.html",
    "revision": "e92b520e2df5f49c2025bc941c0679db"
  },
  {
    "url": "lianjia/index.html",
    "revision": "d209995dc0e73a00a5636aec757ce45f"
  },
  {
    "url": "lianjia/team/standard.html",
    "revision": "c7d656c5f10f97bca5d602e2a399e2f9"
  },
  {
    "url": "muke/index.html",
    "revision": "02388de762b798f2d46fcf6d3dd2e61e"
  },
  {
    "url": "open-QA/index.html",
    "revision": "2b1c00eaa97cf016f818e2da5a0828b8"
  },
  {
    "url": "others-QA/index.html",
    "revision": "bb1f5c805715c900994fa304508fd9fa"
  },
  {
    "url": "project-QA/index.html",
    "revision": "5cd85c66ca8c04420e56c332067bef24"
  },
  {
    "url": "reading/index.html",
    "revision": "9d42887e93fcb937e5cd3f4cd92509f4"
  },
  {
    "url": "studying/index.html",
    "revision": "b446e20a11b00c69a5f581b2ad771042"
  },
  {
    "url": "tech-QA/css/49-1.html",
    "revision": "31aef9c966182c482b3a2494af6f0e95"
  },
  {
    "url": "tech-QA/index.html",
    "revision": "c239d11254c91d80851b8a4f0e2ac76a"
  },
  {
    "url": "tech-QA/js/HFQ-0.html",
    "revision": "cf647f31f4de05d4784691206d20e1ac"
  },
  {
    "url": "tech-QA/js/HFQ-1.html",
    "revision": "b47500f5641c17402a90bfdecc5d60b7"
  },
  {
    "url": "tech-QA/react/setState.html",
    "revision": "811e733cb6bf871b79dc0fe8c694e66d"
  },
  {
    "url": "tech-QA/react/transaction.html",
    "revision": "3deb6fa7764b2fafd3ecf8df5fe09aa2"
  },
  {
    "url": "yideng/index.html",
    "revision": "1e60c4ed519cf09600bc5d7abb6e3804"
  },
  {
    "url": "yideng/week0/ES5.html",
    "revision": "8e7d78c65dfb301af9f372fde8b07f6b"
  },
  {
    "url": "yideng/week0/HTML.html",
    "revision": "fc2bb3608d2930cd726ef37d948bb4d7"
  },
  {
    "url": "yideng/week1/JS_QA.html",
    "revision": "022caa0a9c1ccc3bde4570600e3cc2bf"
  },
  {
    "url": "yideng/week10/designMode.html",
    "revision": "b14dec1d5dac3588962056ae8cbcdad3"
  },
  {
    "url": "yideng/week2/NodeJS.html",
    "revision": "d97396cd6a449ca3e890faf8706d75cc"
  },
  {
    "url": "yideng/week3/webpack.html",
    "revision": "12e74222aad9adb8f5b03c1a23e240d0"
  },
  {
    "url": "yideng/week4/server.html",
    "revision": "21d6259e591c5f28db9f2064a3e80fc4"
  },
  {
    "url": "yideng/week5/CSS.html",
    "revision": "f6f5f40e4a698e1549b201ee85c88b9a"
  },
  {
    "url": "yideng/week6/React.html",
    "revision": "96207c87745066f69aef589bf309522c"
  },
  {
    "url": "yideng/week6/Typescript.html",
    "revision": "8417bb0195d7243caab4ced8523678bc"
  },
  {
    "url": "yideng/week6/Vue.html",
    "revision": "376d5809768dab3b9298d2e79a699ca5"
  },
  {
    "url": "yideng/week6/Vue深入.html",
    "revision": "1ca88d9b281d209cef73c66a22f74353"
  },
  {
    "url": "yideng/week7/Android.html",
    "revision": "c5b37f4174f4319a7b52eb8ef3c4d9b4"
  },
  {
    "url": "yideng/week8/algorithms.html",
    "revision": "c4e61c7508bd01114862c4024846e386"
  },
  {
    "url": "yideng/week9/Canvas.html",
    "revision": "9e1ace055e91656f8e33da3f842db48b"
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
