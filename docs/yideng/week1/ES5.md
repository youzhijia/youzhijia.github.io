# ES5新增语法

## 严格模式

在js文件或函数的顶部添加“use strict”即可启用严格模式。

* 未声明的变量赋值抛出一个ReferenceError，而不是创建一个全局变量
* 不止一次对对象字面量分配相同的属性会抛出SyntaxError
* 使用with语句抛出SyntaxError

### 严格模式的限制/报错

* 未定义变量
* 不允许分配到只读属性
* 无法为不可扩展的对象创建属性
* 不允许对<表达式>调用Delete
* 不允许一个属性有多个定义
* 不允许正式参数命名重复
* 无法使用标志符的未来保留字
* 不允许使用八进制数字参数和转义字符
* 当this的值为null或undefined时，值不会转换为全局对象
* 函数声明不能嵌套在语句或块中
* 字符串‘eval’不能用作标志符（变量或函数名、参数名）
* eval用法失效
* arguments用法失效
* 函数内的arguments，无法更改本地arguments对象的成员值
* 不允许arguments.callee
* 不允许使用with语句

## JSON

### 序列化（JSON.stringify）

```js
//参数1：对象
//参数2：回调函数（过滤）
//参数3：数字，缩进空格数，可读性好
//返回值：JSON格式文本
JSON.stringify(text [, function(key,value){} [, space]])
```

### 反序列化（JSON.parse）

```js
//参数1：JSON格式文本
//参数2：回调函数（过滤）
//返回值：对象
JSON.parse(text [, function(key,value){}])
```

## 添加对象

### Object上的构造器：

* Object.getPrototypeOf
* Object.getOwnPropertyDescriptor
* Object.getOwnPropertyNames
* Object.create 
* Object.defineProperty
* Object.defineProperties
* Object.seal
* Object.freeze
* Object.preventExtensions
* Object.isSealed
* Object.isFrozen
* Object.isExtensible
* Object.keys 

[以上API详细介绍](../../accumulate/js/object-api-1.md)

## 额外的数组

* Array.prototype.indexOf
* Array.prototype.lastIndexOf
* Array.prototype.every
* Array.prototype.some
* Array.prototype.forEach
* Array.prototype.map
* Array.prototype.filter
* Array.prototype.reduce
* Array.prototype.reduceRight

* Array.isArray

[以上API详细介绍](../../accumulate/js/array-api-1.md)

### 如何判断数组

1. ES3：Object.prototype.toString.apply(value) === '[object Array]'
2. ES5：Array.isArray(value)

## Function.prototype.bind

bind返回一个新的函数对象，该函数对象的this绑定到了thisArg参数上。

### call、apply、bind区别

* 相同：作用都是改变this指向
* 不同：①除了第一个参数之外，call、bind接收的是参数列表，apply接收的是参数数组；②call、apply返回值是“以指定this和参数调用函数的返回值，若无返回值则是undefined”（即会立即执行函数），bind返回值是函数的拷贝（即不会立即执行函数）

