# JS&QA

## 单元测试

新建一个文件夹 cd进去

npm init 后出现一个package.json文件

***

##### 安装karma：

npm install karma --save-dev 或全局：npm install karma -g

karma init (问你想使用哪个库，默认jasmine)

jasmine 回车

no（不需要Require.js）

PhantomJS（是否想自动捕获任何浏览器，默认chrome，PhantomJS是无头浏览器）

（您的源文件和测试文件的位置是什么）不需要管，直接回车

（是否应该排除前面模式中包含的任何文件）不需要管，直接回车

yes（您想让Karma监视所有的文件并在变更时运行测试吗）

生成了karma.conf.js配置文件

***

新建unit文件夹，里面新建index.js和index.spec.js（测试代码，测试语法需要了解一下！！）

需要在karma.conf.js配置文件的files处，把两个文件关联起来（webpack需了解一下！！）

karma.conf.js配置文件的singleRun需改成true，为了让它独立运行

package.json里scripts处新增"unit":"karma start"

此时，直接运行karma run会报错，这就跟无头浏览器有关

***

##### 安装karma-jasmine：
npm install karma-jasmine --save-dev

##### 安装jasmine：
npm install jasmine --save-dev

##### 安装jasmine-core：
npm install jasmine-core --save-dev

##### 安装PhantomJS：
npm install PhantomJS --save

##### 安装karma-phantomjs-launcher：
npm install karma-phantomjs-launcher --save-dev

运行 npm run unit 成功

***

##### 安装karma-coverage：覆盖率检查

npm install karma-coverage --save-dev

karma.conf.js配置文件的reporters数组中加上coverage

karma.conf.js配置文件的preprocessors对象中加上'./unit/**/*.js':['coverage']

karma.conf.js配置文件中直接加上coverageReporter:{type:'html',dir:'coverage/'}

运行 npm run unit 成功

生成coverage文件夹，打开里面的index.html


## UI测试

##### 安装yarn：

npm install -g yarn

##### 安装backstop：测试UI的库

npm install -g backstopjs 或 yarn add backstopjs global

package.json里scripts处新增"uitest":"backstop init"  然后 npm run uitest

安装成功后 backstop init 生成backstop.json文件

改backstop.json文件：viewports的宽和高、scenarios的url（测试的项目地址）

backstop test

##### 安装chromium

npm install chromium --save-dev 或 yarn add chromium

出现permission denied报错：需要在npm前面加上sudo

提示puppeteer找不到错误，使用淘宝镜像：
npm install -g cnpm --registry=https://registry.npm.taobao.org

## 接口测试

##### 安装express

npm install express --save

首先搭一个简单的node框架——server文件夹下新建app.js文件

cd 到 server 文件夹下：node app.js

浏览器访问localhost:3000/test 

##### 安装mocha

npm install mocha --save-dev

##### 安装mochawesome：测试报表

npm install mochawesome --save-dev

package.json里scripts处新增"service": "node ./mochaRunner.js"  然后 npm run service

##### 安装supertest

npm install supertest --save-dev

server文件夹下新建router.spec.js文件

## E2E测试：端对端测试

##### 安装selenium-webdriver

npm install selenium-webdriver --save-dev

下载geckodriver（firefox）

新建e2e文件夹，新建index.js，复制粘贴selenium-webdriver中的代码，改成想测的地址，然后 npm run e2e

nightwatch
github上搜索f2etest，录制功能，兼容多种浏览器
npmjs中搜索rize，很简单的库，只支持chrome内核

## 性能测试

安装Benchmark.js