# ES5核心技术

### 立即执行函数

``` javascript
(function (){
	
})()
```

### 变量提升

``` javascript
var a = 20;
(function (){
  console.log(a);//undefined
  var a = 30;
})();
```

## this

### 一道关于this的面试题

::: tip
整篇围绕这道面试题所涉及的知识点展开
:::

```javascript
this.a = 20;
var test = {
  a:40,
  init:()=>{
    console.log(this.a);
    function go(){
      this.a = 60;
      console.log(this.a)
    }
    go.prototype.a = 50;
    return go;
  }
}
var p = test.init();
p();
new(test.init())();
// 20 60 60 60
```

this值随运行时变化，谁调用的指向谁

```js {16,31}
//（1）
this.age = 10;
var user = {
  age:20,
  init:function(){
    console.log(this.age);//20，this指向user
  }
}
user.init();


//（2）在（1）的基础上改写箭头函数
this.age = 10;
var user = {
  age:20,
  init:()=>{//箭头函数，相当于bind改变this
    console.log(this.age);//10
  }
}
user.init();


//（3）在（1）的基础上改写调用方式
this.age = 10;
var user = {
  age:20,
  init:function(){
    console.log(this.age);//10，this指向window
  }
}
var s = user.init;//s指向window
s();
```

```js {23,40}
//（4）
this.age = 10;
var user = {
  age:20,
  init:function(){
    function test(){
      console.log(this.age);//10
    }
    return test;
  }
}
(user.init())(); //也可写成var s = user.init(); s();
//执行user.init()，相当于把function test(){console.log(this.age)}这段代码拿出来
//替换user.init()所在位置，所以所在作用域是window，跟user没关系


//（5）在（4）的基础上
this.age = 10;
var user = {
  age:20,
  init:function(){
    function test(){
      this.a = 30;
      console.log(this.age);//30
    }
    return test;
  }
}
(user.init())();


//（6）在（4）的基础上，同（4）
this.age = 10;
var user = {
  age:20,
  init:function(){
    function test(){
      console.log(this.age);//10
    }
    test();
  }
}
user.init();
```

### 改变this

1. call
2. apply
3. bind **返回一个新对象**

```javascript
var user = {
  age:20,
  init:function(){
    console.log(this.age);//20 undefined 40
  }
}
var data = {
  age:40
}
user.init();
var s1 = user.init;
s1();
var s2 = user.init.bind(data);
s2();
```

## 闭包

老袁的话：拿到你本该拿不到的东西

* 内部函数可以访问外部函数的变量，把函数返回出去
* 闭包可以保护内部的变量
* 闭包造成内存泄漏，使用后要==null

```javascript
function f1(){
  var n = 1;
  function f2(){
    n++;
    console.log(n);//2 3
  }
  return f2;
}
var result = f1();
result();
result();

result = null;//避免内存泄漏
```

```js
function Product(){
  var name;
  this.setName = function(value){
    name=value
  }
}
var s= new Product();
s.setName('haha')
```

```javascript
function test(){
  var a = 1;
  return function(){
    eval('');//此时a不会被回收，因为不确定a是否被使用，with、try catch同理
    windows.eval('');//此时a会被回收
  }
}
test();
```

## 面向对象编程（重点！背下来！）

* 面向对象编程时，JS没有类的概念，可以用函数替代
* constructor 就是对应的函数
* prototype 按引用传递 Object.create创建原型链的副本

#### 先看一些不提倡的写法
```js
var Car = function(color){
  this.color = color;
  //这样写，每new一次，或每继承一次，都会被实例化一遍；可以放在原型链上
  this.sail = function(){
    console.log(this.color+'色车卖了20W');
  }
}

// 错误写法（1）
var BWM = function(color){
  //......
}
BWM.prototype = Car.prototype;//按引用传递
//这样会改写父类的构造函数，原因是js赋值有按引用传递和按值传递的特性
BWM.prototype.test = function(){
  //......
}

// 错误写法（2）
var BWM = function(color){
  Car.call(this,color);
}
BWM.prototype = new Car();//new 拿到Car类的原型链，所以Car类中的方法可以被继承。
//但是构造函数会被执行两遍！

var m = new BWM('red');
console.log(m);
```

#### 正确写法+解析
```javascript
var Car = function(color){
  this.color = color;
}
//创建父类，在其原型链上写入sail方法，其子类必然会继承sail方法
Car.prototype.sail = function(){
  console.log(this.color+'色车卖了20W');
}
//创建子类
var BWM = function(color){
  Car.call(this,color);//call方法可以改变Car里的this
}
//面向对象是按引用传递的，直接赋值会改变原对象
//1、拿到父类原型链上的方法
//2、不能让构造函数执行2次
//3、引用的原型链不能是按址引用
//4、修正子类的constructor

//下面👇三句是重点！！！
var __pro = Object.create(Car.prototype);
__pro.constructor = BWM;
BWM.prototype = __pro;

//解析：以Car的原型链，创建一个新对象，将它的constructor指向子类，然后将它复制给子类的原型。
//双下划线命名的对象是私有变量。

var m = new BWM('red');//new是把原型链上的东西拿过来
console.log(m);//BWM { color: "red" }
```

#### 去掉注释完整版
```javascript
var Car = function(color){
  this.color = color;
}
Car.prototype.sail = function(){
  console.log(this.color+'色车卖了20w');
}
var BWM = function(color){
  Car.call(this,color);
}
var __pro = Object.create(Car.prototype);
__pro.constructor = BWM;
BWM.prototype = __pro;

var m = new BWM('red');
console.log(m);
```

## 函数提升

函数提升级别比变量高

```javascript
(function (){
  var a;
  function a(){};
  console.log(a);//ƒ a(){}
})()
```

* 按值传递：数值、字符串、布尔类型
* 按引用传递：数组、对象

```javascript
(function (){
  var a = 20;
  function a(){};
  var b = c = a;
  console.log(b);//20
  console.log(c);//20
  var x,y = a;
  console.log(x);//undefined
  console.log(y);//20
})()
```

函数的变量是按值传递的，但是值的内容的指向与值本身有关，若值是对象，则是按引用传递的

```javascript
function test(m){
  m = {v:5};
  //m.v = 5;
}
var m = {k:10};
test(m);
console.log(m);//undefined
```

## ES5只有函数级作用域

* VO：全局的对象
* AO：函数执行时存储的参数
* VO会激活AO

``` javascript
if(false){
  var a = 1;
  let c = 2;
}
console.log(a);//undefined
//console.log(c);//报错 c is not defined
function test(){
  if(false){
    var b = 1;
  }
  console.log('inner:'+b);//undefined
}
test();
console.log('out:'+b);//报错 b is not defined
```

## ES5里如何实现let

```javascript
if(true){
  try{
    throw 1;
  }catch(a){
	console.log(a);//1
  }
}
console.log(a);//undefined
```

try catch 是块级作用域, with 也是块级作用域，但是with会延长作用域链，因为with只对对象上已有的值进行赋值

```javascript
var obj = {a:1};
with(obj){
  b = 2;
}
console.log(obj.b);//undefined
console.log(b);//2
```

## 原型链

构造函数的属性比原型链的优先级高

```javascript
function test(){
  this.a = 20;
}
test.prototype.a = 30;
var q = new test;
console.log(q.a);//20
```

整个类是基于js原型链实现的，class实际就是function

```javascript
class test{
  a(){
    console.log(1);
  }
}
test.prototype.a = function(){
  console.log(2);
}
(new test).a();//2
```

## 如何正确输出li里的内容

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
  <li>6</li>
</ul>
```

```javascript
var list_li = document.getElementsByTagName('li');
for(var i=0;i<list_li.length;i++){
  list_li[i].onclick = function(){
    console.log(i);
  }
}
```

点击任何li元素，结果都是6，因为js要操作DOM是单线程，onclick在异步队列里

三种解决办法：

1. 闭包，因为闭包有保存变量的能力
2. var改成let
3. this，直接输出this.innerHTML

```js
//（1）
for(var i=0;i<list_li.length;i++){
  (function(i){
    list_li[i].onclick = function(){
      console.log(i);
    }
  })(i)
}
//（2）
for(let i=0;i<list_li.length;i++){
  list_li[i].onclick = function(){
    console.log(i);
  }
}
//（3）
for(var i=0;i<list_li.length;i++){
  list_li[i].onclick = function(){
    console.log(this.innerHTML);
  }
}
```

## 0~100分之间的学生等级，以10分分段

if else && switch 能解决问题 但是性能差

```javascript
10 - Math.floot(n/10)
```

## var s = 'abc' 怎么变成数组

```javascript
var s = 'abc';
[...s]
Array.prototype.slice.call(s);
Array.from(s);
```

编程思维很重要，写代码请聪明一点