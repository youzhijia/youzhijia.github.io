(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{114:function(a,e,r){"use strict";r.r(e);var s=r(0),t=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,e=a.$createElement,r=a._self._c||e;return r("div",{staticClass:"content"},[r("h1",{attrs:{id:"js-qa"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#js-qa","aria-hidden":"true"}},[a._v("#")]),a._v(" JS&QA ⭐️")]),a._v(" "),r("h2",{attrs:{id:"单元测试"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#单元测试","aria-hidden":"true"}},[a._v("#")]),a._v(" 单元测试")]),a._v(" "),r("p",[a._v("新建一个文件夹 cd进去")]),a._v(" "),r("p",[a._v("npm init 后出现一个package.json文件")]),a._v(" "),r("hr"),a._v(" "),r("h5",{attrs:{id:"安装karma："}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装karma：","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装karma：")]),a._v(" "),r("p",[a._v("npm install karma --save-dev 或全局：npm install karma -g")]),a._v(" "),r("p",[a._v("karma init (问你想使用哪个库，默认jasmine)")]),a._v(" "),r("p",[a._v("jasmine 回车")]),a._v(" "),r("p",[a._v("no（不需要Require.js）")]),a._v(" "),r("p",[a._v("PhantomJS（是否想自动捕获任何浏览器，默认chrome，PhantomJS是无头浏览器）")]),a._v(" "),r("p",[a._v("（您的源文件和测试文件的位置是什么）不需要管，直接回车")]),a._v(" "),r("p",[a._v("（是否应该排除前面模式中包含的任何文件）不需要管，直接回车")]),a._v(" "),r("p",[a._v("yes（您想让Karma监视所有的文件并在变更时运行测试吗）")]),a._v(" "),r("p",[a._v("生成了karma.conf.js配置文件")]),a._v(" "),r("hr"),a._v(" "),r("p",[a._v("新建unit文件夹，里面新建index.js和index.spec.js（测试代码，测试语法需要了解一下！！）")]),a._v(" "),r("p",[a._v("需要在karma.conf.js配置文件的files处，把两个文件关联起来（webpack需了解一下！！）")]),a._v(" "),r("p",[a._v("karma.conf.js配置文件的singleRun需改成true，为了让它独立运行")]),a._v(" "),r("p",[a._v('package.json里scripts处新增"unit":"karma start"')]),a._v(" "),r("p",[a._v("此时，直接运行karma run会报错，这就跟无头浏览器有关")]),a._v(" "),r("hr"),a._v(" "),r("h5",{attrs:{id:"安装karma-jasmine："}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装karma-jasmine：","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装karma-jasmine：")]),a._v(" "),r("p",[a._v("npm install karma-jasmine --save-dev")]),a._v(" "),r("h5",{attrs:{id:"安装jasmine："}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装jasmine：","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装jasmine：")]),a._v(" "),r("p",[a._v("npm install jasmine --save-dev")]),a._v(" "),r("h5",{attrs:{id:"安装jasmine-core："}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装jasmine-core：","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装jasmine-core：")]),a._v(" "),r("p",[a._v("npm install jasmine-core --save-dev")]),a._v(" "),r("h5",{attrs:{id:"安装phantomjs："}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装phantomjs：","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装PhantomJS：")]),a._v(" "),r("p",[a._v("npm install PhantomJS --save")]),a._v(" "),r("h5",{attrs:{id:"安装karma-phantomjs-launcher："}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装karma-phantomjs-launcher：","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装karma-phantomjs-launcher：")]),a._v(" "),r("p",[a._v("npm install karma-phantomjs-launcher --save-dev")]),a._v(" "),r("p",[a._v("运行 npm run unit 成功")]),a._v(" "),r("hr"),a._v(" "),r("h5",{attrs:{id:"安装karma-coverage：覆盖率检查"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装karma-coverage：覆盖率检查","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装karma-coverage：覆盖率检查")]),a._v(" "),r("p",[a._v("npm install karma-coverage --save-dev")]),a._v(" "),r("p",[a._v("karma.conf.js配置文件的reporters数组中加上coverage")]),a._v(" "),r("p",[a._v("karma.conf.js配置文件的preprocessors对象中加上'./unit/**/*.js':['coverage']")]),a._v(" "),r("p",[a._v("karma.conf.js配置文件中直接加上coverageReporter:{type:'html',dir:'coverage/'}")]),a._v(" "),r("p",[a._v("运行 npm run unit 成功")]),a._v(" "),r("p",[a._v("生成coverage文件夹，打开里面的index.html")]),a._v(" "),r("h2",{attrs:{id:"ui测试"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#ui测试","aria-hidden":"true"}},[a._v("#")]),a._v(" UI测试")]),a._v(" "),r("h5",{attrs:{id:"安装yarn："}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装yarn：","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装yarn：")]),a._v(" "),r("p",[a._v("npm install -g yarn")]),a._v(" "),r("h5",{attrs:{id:"安装backstop：测试ui的库"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装backstop：测试ui的库","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装backstop：测试UI的库")]),a._v(" "),r("p",[a._v("npm install -g backstopjs 或 yarn add backstopjs global")]),a._v(" "),r("p",[a._v('package.json里scripts处新增"uitest":"backstop init"  然后 npm run uitest')]),a._v(" "),r("p",[a._v("安装成功后 backstop init 生成backstop.json文件")]),a._v(" "),r("p",[a._v("改backstop.json文件：viewports的宽和高、scenarios的url（测试的项目地址）")]),a._v(" "),r("p",[a._v("backstop test")]),a._v(" "),r("h5",{attrs:{id:"安装chromium"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装chromium","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装chromium")]),a._v(" "),r("p",[a._v("npm install chromium --save-dev 或 yarn add chromium")]),a._v(" "),r("p",[a._v("出现permission denied报错：需要在npm前面加上sudo")]),a._v(" "),r("p",[a._v("提示puppeteer找不到错误，使用淘宝镜像：\nnpm install -g cnpm --registry=https://registry.npm.taobao.org")]),a._v(" "),r("h2",{attrs:{id:"接口测试"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#接口测试","aria-hidden":"true"}},[a._v("#")]),a._v(" 接口测试")]),a._v(" "),r("h5",{attrs:{id:"安装express"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装express","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装express")]),a._v(" "),r("p",[a._v("npm install express --save")]),a._v(" "),r("p",[a._v("首先搭一个简单的node框架——server文件夹下新建app.js文件")]),a._v(" "),r("p",[a._v("cd 到 server 文件夹下：node app.js")]),a._v(" "),r("p",[a._v("浏览器访问localhost:3000/test")]),a._v(" "),r("h5",{attrs:{id:"安装mocha"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装mocha","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装mocha")]),a._v(" "),r("p",[a._v("npm install mocha --save-dev")]),a._v(" "),r("h5",{attrs:{id:"安装mochawesome：测试报表"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装mochawesome：测试报表","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装mochawesome：测试报表")]),a._v(" "),r("p",[a._v("npm install mochawesome --save-dev")]),a._v(" "),r("p",[a._v('package.json里scripts处新增"service": "node ./mochaRunner.js"  然后 npm run service')]),a._v(" "),r("h5",{attrs:{id:"安装supertest"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装supertest","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装supertest")]),a._v(" "),r("p",[a._v("npm install supertest --save-dev")]),a._v(" "),r("p",[a._v("server文件夹下新建router.spec.js文件")]),a._v(" "),r("h2",{attrs:{id:"e2e测试：端对端测试"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#e2e测试：端对端测试","aria-hidden":"true"}},[a._v("#")]),a._v(" E2E测试：端对端测试")]),a._v(" "),r("h5",{attrs:{id:"安装selenium-webdriver"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#安装selenium-webdriver","aria-hidden":"true"}},[a._v("#")]),a._v(" 安装selenium-webdriver")]),a._v(" "),r("p",[a._v("npm install selenium-webdriver --save-dev")]),a._v(" "),r("p",[a._v("下载geckodriver（firefox）")]),a._v(" "),r("p",[a._v("新建e2e文件夹，新建index.js，复制粘贴selenium-webdriver中的代码，改成想测的地址，然后 npm run e2e")]),a._v(" "),r("p",[a._v("nightwatch\ngithub上搜索f2etest，录制功能，兼容多种浏览器\nnpmjs中搜索rize，很简单的库，只支持chrome内核")]),a._v(" "),r("h2",{attrs:{id:"性能测试"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#性能测试","aria-hidden":"true"}},[a._v("#")]),a._v(" 性能测试")]),a._v(" "),r("p",[a._v("安装Benchmark.js")])])}],!1,null,null,null);e.default=t.exports}}]);