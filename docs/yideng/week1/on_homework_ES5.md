# ES5核心知识精髓[预读js测试题讲解] :star:

::: danger
* callable、constructorable
::: 

> 15min开讲

### 1. 写出弹出值，解释为什么
```js
alert(a);
a();
var a =3;
function a(){
  alert(10);
}
alert(a);
a=6;
a();

// function a(){alert(a)}
// 10
// 3
// Uncaught TypeError: a is not a function
```

::: tip
* js运行分为编译+执行阶段，变量提升在编译阶段
* 变量和函数重名，声明时函数优先
* v8引擎不支持变量赋值时更换类型
* 含有callable的函数，可被调用
::: 

> 30min

```js
var x = 1, y = 0, z = 0;
function add(x){
  return (x = x + 1);
}
y = add(x);
console.log(y);
function add(x){
  return (x = x + 3);
}
z = add(x);
console.log(z);
// 4
// 4
```

::: tip
* 函数的作用域范围：函数内部x是局部变量
* function add(q){return (x = q + 3);} 如果这样改，x就会找到全局的x赋值
::: 

### 2. 写出弹出值，解释为什么

```js
this.a = 20;
function go() {
  console.log(this.a);
  this.a = 30;
 }
go.prototype.a = 40;
var test = {
  a: 50,
  init: function(fn) {
    fn();
    console.log(this.a);
    return fn;
  }
};
console.log((new go()).a);
test.init(go);
var p = test.init(go);
p();
// 40 30
// 20 50 
// 30 50 30
```

::: tip
* this谁调用指谁
* new go() 时，js引擎会默认执行 this = Object.create(go.prototype) 和 return this，这跟new的作用有关；
* test.init(go)，go执行在windows中，所以this是全局，先打印20，后修改全局a为30
* p()，此时全局a=30
::: 

::: tip
**new**
* 生成一个新的空对象
* 执行[[prototype]]
* this绑定到新对象
* 若没有返回对象（或返回值类型），则返回这个新创建的对象
::: 

> 1h

```js
var num = 1;
function yideng() {
  "use strict"; 
  console.log(this.num++);
}
function yideng2() {
  console.log(++this.num); 
}
(function() { 
  "use strict"; 
  yideng2();
})(); 
yideng();
```

::: tip
* 
::: 

```js
function C1(name) {
  if (name) this.name = name;
  console.log(this)
}
function C2(name) { 
  this.name = name;
  console.log(this)
}
function C3(name) { 
  this.name = name || 'fe';
  console.log(this)
}
C1.prototype.name = "yideng";
C2.prototype.name = "lao";
C3.prototype.name = "yuan";
console.log(new C1())
console.log(new C2())
console.log(new C3())
console.log((new C1().name) + (new C2().name) + (new C3().name));
```

::: tip
* 
::: 

### 3. 请写出如下点击li的输出值，并用三种办法正确输出li里的数字

```html
<ul>
  <li>1</li>
  <li>2</li>
  <li>3</li>
  <li>4</li>
  <li>5</li>
  <li>6</li>
</ul>
<script type="text/javascript">
  var list_li = document.getElementsByTagName("li");
  for (var i = 0; i < list_li.length; i++) {
    list_li[i].onclick = function() {
      console.log(i);
    }
  } 
</script>
```

::: tip
* 
::: 

### 4. 写出弹出值，解释为什么

```js
function test(m) {
  m = {v:5}
}
var m = {k: 30};
test(m);
alert(m.v);
```

::: tip
* 
::: 

### 5. 写出弹出值，解释为什么

```js
function yideng() {
  console.log(1);
}
(function () {
  if (false) {
    function yideng() {
      console.log(2);
    } 
  }
  yideng();
})();
```

::: tip
* 
::: 

### 6. 请用一句话算出0-100之间学生的学生等级，如90-100输出为1等生、80-90为2等 生以此类推。不允许使用if switch等。

```js

```

::: tip
* 
::: 

### 7. 请用一句话遍历变量a。(禁止用for 已知var a = “abc”)

```js

```

::: tip
* 
::: 

### 8. 请在下面写出JavaScript面向对象编程的混合式继承。并写出ES6版本的继承。  要求:汽车是父类，Cruze是子类。父类有颜色、价格属性，有售卖的方法。Cruze子 类实现父类颜色是红色，价格是140000,售卖方法实现输出如下语句:将 红色的 Cruze买给了小王价格是14万。

```js

```

::: tip
* 
::: 

### 9. 请你写出如何利用EcmaScript6/7(小Demo)优化多步异步嵌套的代码?

```js

```

::: tip
* 
::: 

### 10. 考基础

```js
var regex = /yideng/g;
console.log(regex.test('yideng'));
console.log(regex.test('yideng'));
console.log(regex.test('yideng'));
console.log(regex.test('yideng'));
```

::: tip
* 
::: 

### 11. 考基础

```js
var yideng = function yideng(){
  yideng = 1;
  console.log(typeof yideng);
}
yideng();
yideng = 1;
console.log(typeof yideng);
```

::: tip
* 
::: 

### 仔细思考

```js
var length = 10;
function fn() { 
  console.log(this.length);
}
var yideng = {
  length: 5,
  method: function(fn) {
    fn();
    arguments[0](); 
  }
};
yideng.method(fn, 1);
```

::: tip
* 
::: 