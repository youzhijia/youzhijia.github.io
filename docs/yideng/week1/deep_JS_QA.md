# JS&QA :four_leaf_clover:

## 单元测试

* 目的：单元测试能让开发中明确知道代码结果
* 原则：单一职责、接口抽象、层次分离
* 断言库：保证最小单元是否正常运行监测方法
* **测试风格:small_red_triangle:：测试驱动开发（Test-Driven Development 即TDD）、行为驱动开发（Behavior Driven Development 即BDD）均是敏捷开发方法论。**
    * **TDD:small_red_triangle:关注所有的功能是否被实现（每一个功能都必须有对应的测试用例），suite配合test利用assert('tobi' == user.name)**
    * **BDD:small_red_triangle:关注整体行为是否符合整体预期，编写的每一行代码都有目的提供一个全面的测试用例集。expect/should,describe配合it利用自然语 言expect(1).toEqual(fn())执行结果**

### 单元测试框架

* better-assert（TDD断言库）
* should.js（BDD断言库）
* expect.js（BDD断言库）
* chai.js（TDD BDD双模）
* Jasmine.js（BDD）
* Node.js本身集成

### 单元测试运行流程

before -> beforeEach -> it -> after -> afterEach

每一个测试用例组通过describe进行设置

1. before单个测试用例(it)开始前
2. beforeEach每一个测试用例开始前
3. it定义测试用例，并利用断言库进行，设置chai如：expect(x).to.equal(true);异步mocha
4. 以上专业术语叫mock

###  自动化单元测试

* karma 自动化runner集成PhantomJS无刷新
* npm install -g karma
* npm install karma-cli —save-dev
* npm install karma-chrome-launcher —save-dev npm install karma-phantomjs-launcher —save-dev npm * install karma-mocha —save-dev
* npm install karma-chai —save-dev

###  报告和单测覆盖率检查

* npm install karma-coverage —save-dev
* coverageReporter: { type: 'html',dir: 'coverage/' } //配制代码覆盖测试率生成结果

## 性能测试

### 基准测试

* 面向切面编程AOP无侵入式统计
* Benchmark基准测试方法，它并不是简单地统计 执行多少次测试代码后对比时间，它对测试有着严密的抽样过程。执行多少次取决于采样到的数据能否完成统计。根据统计次数计算方差。

### 压力测试

* 对网络接口做压力测试需要检查的几个常用指标有吞吐率、响应时间和并发数，这些指标反映了服务器并发处理能力。
* **PV:small_red_triangle:网站当日访问人数**；**UV:small_red_triangle:独立访问人数**。PV每天几十万甚至上百万就需要考虑压力测试。换算公式**QPS:small_red_triangle:=PV/t**。ps:1000000/ 10\*60*60=27.7(100万请求集中在10个小时，服务器每秒处理27.7个业务请求)
* 常用的压力测试工具是ab、siege、http_load。
* ab -c 100 -n 100 http://localhost:8001 每秒持续发出28个请求。Request per second 表示服务器每秒处理请求数，即为QPS。Failed requests 表示此次请求失败的请求数，理论上压测值越大增加。Connection Times 连接时间，它包括客户端向服务器端建立连接、服务器端处理请求、等待报文响应的过程。

## 安全测试

###  安全漏洞检查

* XSS
* SQL
* CSRF

## 功能测试

### 用户真实性检查

* selenium-webdriver（自动化测试）
* protractor selenium-standalone（AngularJS）
* http://webdriver.io/ WEBDRIVERI/O
* 冒烟测试：SmokeTest 自由测试的一种，找到一个BUG开发修复，然后专门针对此BUG，优点节省时间、防止build失败；缺点是覆盖率极低。
* 回归测试：修改一处对整体功能全部测试，一般配合自动化 测试。

### JsLint&JsHint

* 目的:检测JavaScript代码标准 
* 原因:JavaScript代码诡异，保证团队代码规范 
* lint:http://www.jslint.com/
* hint: http://www.jshint.com/
* 搭配自动化任务管理工具完善自动化测试grunt- jshint、grunt-jslint