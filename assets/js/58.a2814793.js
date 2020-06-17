(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{111:function(a,t,e){"use strict";e.r(t);var r=e(0),v=Object(r.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,t=a.$createElement,e=a._self._c||t;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"js-qa"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#js-qa","aria-hidden":"true"}},[a._v("#")]),a._v(" JS&QA 🍀")]),a._v(" "),e("h2",{attrs:{id:"单元测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#单元测试","aria-hidden":"true"}},[a._v("#")]),a._v(" 单元测试")]),a._v(" "),e("ul",[e("li",[a._v("目的：单元测试能让开发中明确知道代码结果")]),a._v(" "),e("li",[a._v("原则：单一职责、接口抽象、层次分离")]),a._v(" "),e("li",[a._v("断言库：保证最小单元是否正常运行监测方法")]),a._v(" "),e("li",[e("strong",[a._v("测试风格🔺：测试驱动开发（Test-Driven Development 即TDD）、行为驱动开发（Behavior Driven Development 即BDD）均是敏捷开发方法论。")]),a._v(" "),e("ul",[e("li",[e("strong",[a._v("TDD🔺关注所有的功能是否被实现（每一个功能都必须有对应的测试用例），suite配合test利用assert('tobi' == user.name)")])]),a._v(" "),e("li",[e("strong",[a._v("BDD🔺关注整体行为是否符合整体预期，编写的每一行代码都有目的提供一个全面的测试用例集。expect/should,describe配合it利用自然语 言expect(1).toEqual(fn())执行结果")])])])])]),a._v(" "),e("h3",{attrs:{id:"单元测试框架"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#单元测试框架","aria-hidden":"true"}},[a._v("#")]),a._v(" 单元测试框架")]),a._v(" "),e("ul",[e("li",[a._v("better-assert（TDD断言库）")]),a._v(" "),e("li",[a._v("should.js（BDD断言库）")]),a._v(" "),e("li",[a._v("expect.js（BDD断言库）")]),a._v(" "),e("li",[a._v("chai.js（TDD BDD双模）")]),a._v(" "),e("li",[a._v("Jasmine.js（BDD）")]),a._v(" "),e("li",[a._v("Node.js本身集成")])]),a._v(" "),e("h3",{attrs:{id:"单元测试运行流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#单元测试运行流程","aria-hidden":"true"}},[a._v("#")]),a._v(" 单元测试运行流程")]),a._v(" "),e("p",[a._v("before -> beforeEach -> it -> after -> afterEach")]),a._v(" "),e("p",[a._v("每一个测试用例组通过describe进行设置")]),a._v(" "),e("ol",[e("li",[a._v("before单个测试用例(it)开始前")]),a._v(" "),e("li",[a._v("beforeEach每一个测试用例开始前")]),a._v(" "),e("li",[a._v("it定义测试用例，并利用断言库进行，设置chai如：expect(x).to.equal(true);异步mocha")]),a._v(" "),e("li",[a._v("以上专业术语叫mock")])]),a._v(" "),e("h3",{attrs:{id:"自动化单元测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#自动化单元测试","aria-hidden":"true"}},[a._v("#")]),a._v(" 自动化单元测试")]),a._v(" "),e("ul",[e("li",[a._v("karma 自动化runner集成PhantomJS无刷新")]),a._v(" "),e("li",[a._v("npm install -g karma")]),a._v(" "),e("li",[a._v("npm install karma-cli —save-dev")]),a._v(" "),e("li",[a._v("npm install karma-chrome-launcher —save-dev npm install karma-phantomjs-launcher —save-dev npm * install karma-mocha —save-dev")]),a._v(" "),e("li",[a._v("npm install karma-chai —save-dev")])]),a._v(" "),e("h3",{attrs:{id:"报告和单测覆盖率检查"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#报告和单测覆盖率检查","aria-hidden":"true"}},[a._v("#")]),a._v(" 报告和单测覆盖率检查")]),a._v(" "),e("ul",[e("li",[a._v("npm install karma-coverage —save-dev")]),a._v(" "),e("li",[a._v("coverageReporter: { type: 'html',dir: 'coverage/' } //配制代码覆盖测试率生成结果")])]),a._v(" "),e("h2",{attrs:{id:"性能测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#性能测试","aria-hidden":"true"}},[a._v("#")]),a._v(" 性能测试")]),a._v(" "),e("h3",{attrs:{id:"基准测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基准测试","aria-hidden":"true"}},[a._v("#")]),a._v(" 基准测试")]),a._v(" "),e("ul",[e("li",[a._v("面向切面编程AOP无侵入式统计")]),a._v(" "),e("li",[a._v("Benchmark基准测试方法，它并不是简单地统计 执行多少次测试代码后对比时间，它对测试有着严密的抽样过程。执行多少次取决于采样到的数据能否完成统计。根据统计次数计算方差。")])]),a._v(" "),e("h3",{attrs:{id:"压力测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#压力测试","aria-hidden":"true"}},[a._v("#")]),a._v(" 压力测试")]),a._v(" "),e("ul",[e("li",[a._v("对网络接口做压力测试需要检查的几个常用指标有吞吐率、响应时间和并发数，这些指标反映了服务器并发处理能力。")]),a._v(" "),e("li",[e("strong",[a._v("PV🔺网站当日访问人数")]),a._v("；"),e("strong",[a._v("UV🔺独立访问人数")]),a._v("。PV每天几十万甚至上百万就需要考虑压力测试。换算公式"),e("strong",[a._v("QPS🔺=PV/t")]),a._v("。ps:1000000/ 10*60*60=27.7(100万请求集中在10个小时，服务器每秒处理27.7个业务请求)")]),a._v(" "),e("li",[a._v("常用的压力测试工具是ab、siege、http_load。")]),a._v(" "),e("li",[a._v("ab -c 100 -n 100 http://localhost:8001 每秒持续发出28个请求。Request per second 表示服务器每秒处理请求数，即为QPS。Failed requests 表示此次请求失败的请求数，理论上压测值越大增加。Connection Times 连接时间，它包括客户端向服务器端建立连接、服务器端处理请求、等待报文响应的过程。")])]),a._v(" "),e("h2",{attrs:{id:"安全测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安全测试","aria-hidden":"true"}},[a._v("#")]),a._v(" 安全测试")]),a._v(" "),e("h3",{attrs:{id:"安全漏洞检查"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安全漏洞检查","aria-hidden":"true"}},[a._v("#")]),a._v(" 安全漏洞检查")]),a._v(" "),e("ul",[e("li",[a._v("XSS")]),a._v(" "),e("li",[a._v("SQL")]),a._v(" "),e("li",[a._v("CSRF")])]),a._v(" "),e("h2",{attrs:{id:"功能测试"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#功能测试","aria-hidden":"true"}},[a._v("#")]),a._v(" 功能测试")]),a._v(" "),e("h3",{attrs:{id:"用户真实性检查"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#用户真实性检查","aria-hidden":"true"}},[a._v("#")]),a._v(" 用户真实性检查")]),a._v(" "),e("ul",[e("li",[a._v("selenium-webdriver（自动化测试）")]),a._v(" "),e("li",[a._v("protractor selenium-standalone（AngularJS）")]),a._v(" "),e("li",[a._v("http://webdriver.io/ WEBDRIVERI/O")]),a._v(" "),e("li",[a._v("冒烟测试：SmokeTest 自由测试的一种，找到一个BUG开发修复，然后专门针对此BUG，优点节省时间、防止build失败；缺点是覆盖率极低。")]),a._v(" "),e("li",[a._v("回归测试：修改一处对整体功能全部测试，一般配合自动化 测试。")])]),a._v(" "),e("h3",{attrs:{id:"jslint-jshint"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#jslint-jshint","aria-hidden":"true"}},[a._v("#")]),a._v(" JsLint&JsHint")]),a._v(" "),e("ul",[e("li",[a._v("目的:检测JavaScript代码标准")]),a._v(" "),e("li",[a._v("原因:JavaScript代码诡异，保证团队代码规范")]),a._v(" "),e("li",[a._v("lint:http://www.jslint.com/")]),a._v(" "),e("li",[a._v("hint: http://www.jshint.com/")]),a._v(" "),e("li",[a._v("搭配自动化任务管理工具完善自动化测试grunt- jshint、grunt-jslint")])])])}],!1,null,null,null);t.default=v.exports}}]);