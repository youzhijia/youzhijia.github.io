# 被喷的代码风格，你有吗？

### 一、变量相关

#### 1. 变量数量及定义

NO：滥用变量
```
let kpi = 4;  // 定义好了之后再也没用过
 
function example() {
    var a = 1;
    var b = 2;
    var c = a+b;
    var d = c+1;
    var e = d+a;
    return e;
}
```
YES：数据只使用一次或不使用就无需装到变量中

```
let kpi = 4;  // 没用的就删除掉，不然过三个月自己都不敢删，怕是不是那用到了
function example() {
    var a = 1;
    var b = 2;
    return 2a+b+1;
}
```

#### 2.变量命名

NO：自我感觉良好的缩写
```
let fName = 'jackie'; // 看起来命名挺规范，缩写，驼峰法都用上，ESlint各种检测规范的工具都通过，But，fName是啥？这时候，你是不是想说What are you 弄啥呢？
let lName = 'willen'; // 这个问题和上面的一样
```
YES：无需对每个变量都写注释，从名字上就看懂；同时，变量不要过于啰嗦；

```
let firstName = 'jackie'; // 怎么样，是不是一目了然。少被喷了一次
let lastName = 'willen';
```

#### 3.特定的变量

NO：无说明的参数
```
if (value.length < 8) { // 为什么要小于8，8表示啥？长度，还是位移，还是高度？Oh,my God!!
    ....
}
```
YES：添加变量
```
const MAX_INPUT_LENGTH = 8;
if (value.length < MAX_INPUT_LENGTH) { // 一目了然，不能超过最大输入长度
    ....
}
```

#### 4. 使用说明性的变量(即有意义的变量名)

NO：长代码不知道啥意思

```
const address = 'One Infinite Loop, Cupertino 95014';
const cityZipCodeRegex = /^[^,\]+[,\s]+(.+?)s*(d{5})?$/;
saveCityZipCode(
  address.match(cityZipCodeRegex)[1], // 这个公式到底要干嘛，对不起，原作者已经离职了。自己看代码
  address.match(cityZipCodeRegex)[2], // 这个公式到底要干嘛，对不起，原作者已经离职了。自己看代码
);
```
YES：用变量名来解释长代码的含义

```
const address = 'One Infinite Loop, Cupertino 95014';
const cityZipCodeRegex = /^[^,\]+[,\s]+(.+?)s*(d{5})?$/;
const [, city, zipCode] = address.match(cityZipCodeRegex) || [];
saveCityZipCode(city, zipCode);
```

#### 5. 避免使用太多的全局变量

NO：在不同的文件不停的定义全局变量

```
name.js
window.name = 'a';
hello.js
window.name = 'b';
time.js
window.name = 'c';
```
YES：少用或使用替代方案 你可以选择只用局部变量。通过(){}的方法。

```
如果你确实用很多的全局变量需要共享，你可以使用vuex,redu，mobx或者参考flux模式写一个也行。
如果不使用数据流，可以自己维护一个大Object，来维护这些全局变量
(function(w){
  function GlobleName() {
    this.name = ''
  }
  GlobleName.prototype.setName = function(name) {
    this.name = name
  }
  window['GlobleName'] = new GlobleName()
})(window)
//
name.js
GlobleName.setName('a');
hello.js
GlobleName.setName('b');
```

#### 6. 变量的赋值

NO：对于求值获取的变量，没有兜底

```
const MIN_NAME_LENGTH = 8;
let lastName = fullName[1];
if(lastName.length > MIN_NAME_LENGTH) { // 这样你就给你的代码成功的埋了一个坑，你有考虑过如果fullName = ['jackie']这样的情况吗？这样程序一跑起来就爆炸。要不你试试。
    ....
}
```
YES：对于求值变量，做好兜底

```
const MIN_NAME_LENGTH = 8;
let lastName = fullName[1] || ''; // 做好兜底，fullName[1]中取不到的时候，不至于赋值个undefined,至少还有个空字符，从根本上讲，lastName的变量类型还是String，String原型链上的特性都能使用，不会报错。不会变成undefined。
if(lastName.length > MIN_NAME_LENGTH) {
    ....
}
其实在项目中有很多求值变量，对于每个求值变量都需要做好兜底。
let propertyValue = Object.attr || 0; // 因为Object.attr有可能为空，所以需要兜底。
```

### 二、变量相关

#### 1. 函数命名

NO：从命名无法知道返回值类型

```
function showFriendsList() {....} // 现在问，你知道这个返回的是一个数组，还是一个对象，还是true or false。你能答的上来否？你能答得上来我请你吃松鹤楼的满汉全席还请你不要当真。
```
Yes: 对于返回true or false的函数，最好以should/is/can/has开头

```
function shouldShowFriendsList() {...}
function isEmpty() {...}
function canCreateDocuments() {...}
function hasLicense() {...}
```

#### 2. 功能函数最好为纯函数

NO: 不要让功能函数的输出变化无常

```
function plusAbc(a, b, c) {  // 这个函数的输出将变化无常，因为api返回的值一旦改变，同样输入函数的a，b,c的值，但函数返回的结果却不一定相同。
   var c = fetch('../api');
   return a+b+c;
}
```
YES：功能函数使用纯函数，输入一致，输出结果永远唯一
```
function plusAbc(a, b, c) {  // 同样输入函数的a，b,c的值，但函数返回的结果永远相同。
  return a+b+c;
}
```

#### 3. 函数传参

NO：传参无说明
```
page.getSVG(api, true, false); // true和false啥意思，一目不了然
```
YES: 传参有说明
```
page.getSVG({
    imageApi: api,
    includePageBackground: true, // 一目了然，知道这些true和false是啥意思
    compress: false,
})
```

#### 4. 动作函数要以动词开头

NO: 无法辨别函数意图
```
function emlU(user) {
    ....
}
```
YES：动词开头，函数意图就很明显
```
function sendEmailToUser(user) {
    ....
}
```

#### 5. 一个函数完成一个独立的功能，不要一个函数混杂多个功能

==这是软件工程中最重要的一条规则，当函数需要做更多的事情时，它们将会更难进行编写、测试、理解和组合。当你能将一个函数抽离出只完成一个动作，他们将能够很容易的进行重构并且你的代码将会更容易阅读。==

NO：函数功能混乱，一个函数包含多个功能

```
function sendEmailToClients(clients) {
  clients.forEach(client => {
    const clientRecord = database.lookup(client)
    if (clientRecord.isActive()) {
      email(client)
    }
  })
}
```
YES： 功能拆解

```
function sendEmailToActiveClients(clients) {  //各个击破，易于维护和复用
  clients.filter(isActiveClient).forEach(email)
}
 
function isActiveClient(client) {
  const clientRecord = database.lookup(client)
  return clientRecord.isActive()
}
```

#### 6. 优先使用函数式编程

NO: 使用for循环编程

```
for(i = 1; i <= 10; i++) { // 一看到for循环让人顿生不想看的情愫
   a[i] = a[i] +1;
}
```
YES：使用函数式编程

```
let b = a.map(item => ++item)
```

#### 7. 函数中过多的采用if else ..

No： if else过多

```
if (a === 1) {
    ...
} else if (a ===2) {
    ...
} else if (a === 3) {
    ...
} else {
   ...
}
```
YES: 可以使用switch替代或用数组替代

```
switch(a) {
   case 1:
           ....
   case 2:
           ....
   case 3:
           ....
  default:
       ....
}
 
Or
 
let handler = {
    1: () => {....},
    2: () => {....}.
    3: () => {....},
    default: () => {....}
}
handler[a]() || handler['default']()
```

### 三、尽量使用ES6，有可以能的话ES7中新语法

1. 尽量使用箭头函数
2. 连接字符串，使用模版字符串
3. 使用解构赋值













