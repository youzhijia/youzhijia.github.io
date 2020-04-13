# 预读班总结课 :star:

> 1h13min 前闲聊

**面向对象小知识**

```js
function Car(){}
function BWM(){}
//静态属性和函数 子类
BWM[属性] = Car[属性]
BWM.x = Car[x]//可以这样写，是因为js有句话：万物皆对象
//适应上面的写法，函数式编程都这样
```

**有人说ES6是ES5的语法糖，你怎么看？**
是这样

```js
class A{
  //相当于定义A.prototype.testa
  testa(){
    console.log(123);
  }
}
A.prototype.testa = function(){
  console.log(456);
}
const result = new A();
result.testa(); //456
```

## 克隆一个Buffer

```js
const allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;//？？？
function cloneBuffer(buffer, isDeep){
  if(!isDeep){
    return buffer.slice();//？？？
  }
  const length = buffer.length;
  //Buffer.allocUnsafe(size)分配多长的内存片段
  const result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);//难点？？？
  buffer.copy(result);
  return result;
}
const buf = Buffer.from('laoyuan');
// const buf2 = buf;
const buf2 = cloneBuffer(buf, true);
buf2.write('nodejs');
buf2.write('22');
console.log('buf', buf.toString('utf-8'));//输出22dejsn，buf2会覆盖buf，实现深拷贝后，输出laoyuan
console.log('buf2', buf2.toString('utf-8'));//输出22dejsn，实现深拷贝后，还输出22dejsn
```

Buffer是一段内存空间，打印出是内存地址，支持切块

* 如果安装了node，直接在终端到目录下node 文件即可运行，本机可运行！
* 老师讲过克隆Buffer和正则，自己要搞明白克隆对象
* 深克隆要再创建一个新地址
* 创建或使用完再冻结的方法：writeable:false
* const s='yideng'本质上和allocUnsafe一样
* 看MDN的polyfill，背10遍，推敲每一行代码

**Car.prototype.constructor=Car与Object.create({value:Car,writeable:false})的区别？**
是一样的

**new buffer.constructor(length)可以直接创建空间，为什么还要判断alloc方法？**
一个是创建对象，一个是操作内存，alloc更快；new buffer.constructor之后还会调用alloc，所以不如直接alloc

## 克隆一个正则
关键点：修正lastIndex

```js
function cloneRegExp(regexp){
  // /^67/.constructor = RegExp
  let result = new regexp.constructor(regexp.source, /|w*$/g.exec(regexp));
  // result.lastIndex = regexp.lastIndex;
  result.lastIndex = 0;
  return result;
}
let x = /foo/g;
let y = cloneRegExp(x);
console.log('x', x);
console.log('y', y);
y = /yideng/g;
console.log('y', y);
// regex.test('foo');
// regex.test('foo');
```

::: danger
**不懂的名词**
* Buffer，查API，node的知识
* ArrayBuffer、WebAssembly、Atomics以后都会讲
* exec
* lodash
:::