# ES6

## ES6简介与环境搭建

主要讲了**阮一峰ECMAScript6入门教程**简介的内容

## ES6编程风格【上】

### const、let

**const优于let的特点：**

* const不可修改
* const符合函数式编程
* 本质区别：编辑器内部对处理机制不同

### 对象解构

会了，暂无笔记

### 字符串模板

```js
const a = "hello";
const b = "world";
const c = `foor ${a} ${b} bar`;

console.log(c.startsWith("foo"));
console.log(c.endsWith("bar));
console.log(c.includes("hello"));

const d = test`foor ${a} ${b} bar`;
function test(strs,...values){
  console.log(strs);//["foor", " ", "bar"]
  console.log(values);//["hello", "world"]
}
```

### 对象和数组

**类数组 转 真数组**
* Array.from
* ...（扩展运算符）

```js
const a = "abcd";
const b = Array.from(a);
const c = [...a];

const s = {
  k:1,
  [k+1]:2,
  a,
  b,
  q(){
    console.log("111");
  }
}

//对象添加属性
Object.assign(s, {x:3});
```

### 函数

#### 箭头函数

绑定当前对象的顶级作用域，不用管this

函数参数可设置默认值，可使用扩展运算符

## ES6编程风格【中】

### Iterator

```js
let qq = function*(){
  yield "11";
  yield "22"
}
const ss = qq();
console.log(ss().next()); // {value: "11", done: false}
console.log(ss().next()); // {value: "22", done: false}
console.log(ss().next()); // {value: undefined, done: true}
```

### Generator

### Class

```js
class Person{
  constructor(age){
    this.age = age;
  }
  test(){
    console.log(`年龄：${this.age}`)
  }
}
class Man extends Person{
  constructor(age){
    super(age);
    this.arr = [];
  }
  set menu(data){
    this.arr.push(data);
  }
  get menu(){
    return this.arr;
  }
  tell(){
    super.tell();
    console.log("hello");
  }
  static init(){
    console.log("static);
  }
}
const xiaoming = new Person(30);
console.log(xiaoming.age); //年龄：30

const xiaow = new Man(30);
xiaow.menu = "pg";
console.log(xiaow.menu()); // ["pg"]

//get/set不需要直接调用，默认执行

Man.init();
```

### Set、Map

<!-- [Set、Map详细介绍](../../accumulate/js/SetMap-api-1.md) -->

#### 数组去重

```js
const arr = [2,2,4,5,2,4];
const result = [...new Set(arr)];
```

### Module

## ES6编程风格【下】

### Async、await

10min之后讲了几个冷门的知识点👇

### 修饰器

### Symbol