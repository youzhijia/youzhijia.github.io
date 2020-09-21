# JS基础测试B卷[手写面试题讲解] :small_red_triangle: :star: 

## 1.手写new

```js
// new操作符做了这些事：

// 它创建了一个全新的对象。
// 它会被执行[[Prototype]]（也就是__proto__）链接。
// 它使this指向新创建的对象。。
// 通过new创建的每个对象将最终被[[Prototype]]链接到这个函数的prototype对象上。
// 如果函数没有返回对象类型Object(包含Functoin, Array, Date, RegExg, Error)，那么new表达式中的函数调用将返回该对象引用。
function myNew (fun) {
  return function () {
    // 创建一个新对象且将其隐式原型指向构造函数原型
    let obj = {
      __proto__ : fun.prototype
    }
    // 执行构造函数
    fun.call(obj, ...arguments)
    // 返回该对象
    return obj
  }
}

function person(name, age) {
  this.name = name
  this.age = age
}
let obj = myNew(person)('chen', 18) // {name: "chen", age: 18}

//版本二
function New(func) {
  var res = {};
  if (func.prototype !== null) {
    res.__proto__ = func.prototype;
  }
  var ret = func.apply(res, Array.prototype.slice.call(arguments, 1));
  if ((typeof ret === "object" || typeof ret === "function") && ret !== null) {
    return ret;
  }
  return res;
}
function A() {}
var obj = New(A, 1, 2);
// equals to
var obj = new A(1, 2);
```

## 2.1手写JSON.stringify

```js
// JSON.stringify(value[, replacer [, space]])：

//MDN https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON
// Boolean | Number| String 类型会自动转换成对应的原始值。
// undefined、任意函数以及symbol，会被忽略（出现在非数组对象的属性值中时），或者被转换成 null（出现在数组中时）。
// 不可枚举的属性会被忽略
// 如果一个对象的属性值通过某种间接的方式指回该对象本身，即循环引用，属性也会被忽略。
function jsonStringify(obj) {
    lettype = typeof obj;
    if (type !== "object" || type === null) {
        if (/string|undefined|function/.test(type)) {
            obj = '"' + obj + '"';
        }
        return String(obj);
    } else {
        let json = []
        arr = (obj && obj.constructor === Array);
        for (let k in obj) {
            let v = obj[k];
            lettype = typeof v;
            if (/string|undefined|function/.test(type)) {
                v = '"' + v + '"';
            } elseif (type === "object") {
                v = jsonStringify(v);
            }
            json.push((arr ? "" : '"' + k + '":') + String(v));
        }
        return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}")
    }
}
jsonStringify({x : 5}) // "{"x":5}"
jsonStringify([1, "false", false]) // "[1,"false",false]"
jsonStringify({b: undefined}) // "{"b":"undefined"}"
```

## 2.2手写JSON.parse

```js
function jsonParse(opt) {
    return eval('(' + opt + ')');
}
jsonParse(jsonStringify({x : 5}))
// Object { x: 5}
jsonParse(jsonStringify([1, "false", false]))
// [1, "false", falsr]
jsonParse(jsonStringify({b: undefined}))
// Object { b: "undefined"}

//对付xss
// var rx_one = /^[\],:{}\s]*$/;
// var rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
// var rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
// var rx_four = /(?:^|:|,)(?:\s*\[)+/g;
// if (
//     rx_one.test(
//         json
//             .replace(rx_two, "@")
//             .replace(rx_three, "]")
//             .replace(rx_four, "")
//     )
// ) {
//     var obj = eval("(" +json + ")");
// }
// Function版本
var jsonStr = '{ "age": 20, "name": "jack" }'
var json = (new Function('return ' + jsonStr))();
//状态机版见PDF
// https://github.com/youngwind/blog/issues/115
```

## 3.1⼿写call

```js
// 思路：将要改变this指向的方法挂到目标this上执行并返回
Function.prototype.mycall = function(context) {
  if (typeof this !== "function") {
    throw new TypeError("not funciton");
  }
  context = context || window;
  context.fn = this;
  let arg = [...arguments].slice(1);
  let result = context.fn(...arg);
  delete context.fn;
  return result;
};
```

## 3.2⼿写apply

```js
// 思路：将要改变this指向的方法挂到目标this上执行并返回
Function.prototype.myapply = function(context) {
  if (typeof this !== "function") {
    throw new TypeError("not funciton");
  }
  context = context || window;
  context.fn = this;
  let result;
  if (arguments[1]) {
    result = context.fn(...arguments[1]);
  } else {
    result = context.fn();
  }
  delete context.fn;
  return result;
};
```

## 4.⼿写Function.bind

```js
this.x = 9;    
var module = {
  x: 81,
  getX: function() { return this.x; }
};
var retrieveX = module.getX;
retrieveX();   
var boundGetX = retrieveX.bind(module);
boundGetX(); 
```

## 5.1⼿写防抖(Debouncing)

```js
// 思路:在规定时间内未触发第二次，则执行
function debounce(fn, delay) {
  // 利用闭包保存定时器
  let timer = null;
  return function() {
    let context = this;
    let arg = arguments;
    // 在规定时间内再次触发会先清除定时器后再重设定时器
    clearTimeout(timer);
    timer = setTimeout(function() {
      fn.apply(context, arg);
    }, delay);
  };
}

function fn() {
  console.log("防抖");
}
addEventListener("scroll", debounce(fn, 1000));
```

## 5.2⼿写节流(Throttling)

```js
// 思路：在规定时间内只触发一次
function throttle(fn, delay) {
  // 利用闭包保存时间
  let prev = Date.now();
  return function() {
    let context = this;
    let arg = arguments;
    let now = Date.now();
    if (now - prev >= delay) {
      fn.apply(context, arg);
      prev = Date.now();
    }
  };
}

function fn() {
  console.log("节流");
}
addEventListener("scroll", throttle(fn, 1000));
```

## 6.⼿写JS深拷⻉(由浅⼊深多种解法)

```js
// 考点：
// 基本实现

// 递归能力


// 循环引用

// 考虑问题的全面性
// 理解weakmap的真正意义


// 多种类型

// 考虑问题的严谨性
// 创建各种引用类型的方法，JS API的熟练程度
// 准确的判断数据类型，对数据类型的理解程度


// 通用遍历：

// 写代码可以考虑性能优化
// 了解集中遍历的效率
// 代码抽象能力


// 拷贝函数：

// 箭头函数和普通函数的区别
// 正则表达式熟练程度


//乞丐版
// const obj2 = JSON.parse(JSON.stringify(obj));
// const obj = {
//   test: {
//     a: 2
//   },
//   arr: function(){}
// };
// const obj2 = JSON.parse(JSON.stringify(obj));
// console.log(obj.arr);
// console.log(obj2.arr);
//基础版本1
// function clone(target) {
//     let cloneTarget = {};
//     for (const key in target) {
//         cloneTarget[key] = target[key];
//     }
//     return cloneTarget;
// };
//基础版本2 => 对象的引用
// function clone(target) {
//     if (typeof target === 'object') {
//         let cloneTarget = {};
//         for (const key in target) {
//             cloneTarget[key] = clone(target[key]);
//         }
//         return cloneTarget;
//     } else {
//         return target;
//     }
// };
//基础版本3 =》考虑数组
// function clone(target) {
//     if (typeof target === 'object') {
//         let cloneTarget = Array.isArray(target) ? [] : {};
//         for (const key in target) {
//             cloneTarget[key] = clone(target[key]);
//         }
//         return cloneTarget;
//     } else {
//         return target;
//     }
// }
//循环引用
//解决循环引用问题，我们可以额外开辟一个存储空间，
//来存储当前对象和拷贝对象的对应关系，当需要拷贝当前对象时，
//先去存储空间中找，有没有拷贝过这个对象，如果有的话直接返回，
//如果没有的话继续拷贝，这样就巧妙化解的循环引用的问题
// function clone(target, map = new Map()) {
//     if (typeof target === 'object') {
//         let cloneTarget = Array.isArray(target) ? [] : {};
//         if (map.get(target)) {
//             return map.get(target);
//         }
//         map.set(target, cloneTarget);
//         for (const key in target) {
//             cloneTarget[key] = clone(target[key], map);
//         }
//         return cloneTarget;
//     } else {
//         return target;
//     }
// };
const obj = {
  test: {
    a: 2
  },
  arr: [],
  fn: function() {
    console.log("clone function");
  }
};
//故意设置循环引用造成Maximum call stack size
// obj.obj = obj;
// console.log(obj);
// { test: { a: 2 }, arr: [], obj: [Circular] }
// Circular 循环引用
const obj2 = clone(obj);
obj2.test.a = "修改";
obj2.arr.push("修改数组");
console.log(obj2.test.a);
console.log(obj.test.a);
console.log(obj.arr);
console.log(obj2.arr);

//性能优化 1.弱引用

// let obj = { name : 'ConardLi'}
// const target = new Map();
// target.set(obj,'laoyuan');
// obj = null;

// let obj = { name : 'ConardLi'}
// const target = new WeakMap();
// target.set(obj,'laoyuan');
// obj = null;
// function clone(target, map = new WeakMap()) {
//     // WeakMap为弱引用
// };

//性能优化2 去掉for in
// function forEach(array, iteratee) {
//   let index = -1;
//   const length = array.length;
//   while (++index < length) {
//     iteratee(array[index], index);
//   }
//   return array;
// }

// function clone(target, map = new WeakMap()) {
//   if (typeof target === "object") {
//     const isArray = Array.isArray(target);
//     let cloneTarget = isArray ? [] : {};

//     if (map.get(target)) {
//       return target;
//     }
//     map.set(target, cloneTarget);

//     const keys = isArray ? undefined : Object.keys(target);
//     forEach(keys || target, (value, key) => {
//       if (keys) {
//         key = value;
//       }
//       cloneTarget[key] = clone(target[key], map);
//     });

//     return cloneTarget;
//   } else {
//     return target;
//   }
// }

//其他类型 函数和buffer
// function cloneFunction(func) {
//     const bodyReg = /(?<={)(.|\n)+(?=})/m;
//     const paramReg = /(?<=\().+(?=\)\s+{)/;
//     const funcString = func.toString();
//     if (func.prototype) {
//         console.log('普通函数');
//         const param = paramReg.exec(funcString);
//         const body = bodyReg.exec(funcString);
//         if (body) {
//             console.log('匹配到函数体：', body[0]);
//             if (param) {
//                 const paramArr = param[0].split(',');
//                 console.log('匹配到参数：', paramArr);
//                 return new Function(...paramArr, body[0]);
//             } else {
//                 return new Function(body[0]);
//             }
//         } else {
//             return null;
//         }
//     } else {
//         return eval(funcString);
//     }
// }
```

```js
const mapTag = '[object Map]';
const setTag = '[object Set]';
const arrayTag = '[object Array]';
const objectTag = '[object Object]';
const argsTag = '[object Arguments]';

const boolTag = '[object Boolean]';
const dateTag = '[object Date]';
const numberTag = '[object Number]';
const stringTag = '[object String]';
const symbolTag = '[object Symbol]';
const errorTag = '[object Error]';
const regexpTag = '[object RegExp]';
const funcTag = '[object Function]';

const deepTag = [mapTag, setTag, arrayTag, objectTag, argsTag];


function forEach(array, iteratee) {
    let index = -1;
    const length = array.length;
    while (++index < length) {
        iteratee(array[index], index);
    }
    return array;
}

function isObject(target) {
    const type = typeof target;
    return target !== null && (type === 'object' || type === 'function');
}

function getType(target) {
    return Object.prototype.toString.call(target);
}

function getInit(target) {
    const Ctor = target.constructor;
    return new Ctor();
}

function cloneSymbol(targe) {
    return Object(Symbol.prototype.valueOf.call(targe));
}

function cloneReg(targe) {
    const reFlags = /\w*$/;
    const result = new targe.constructor(targe.source, reFlags.exec(targe));
    result.lastIndex = targe.lastIndex;
    return result;
}

function cloneFunction(func) {
    const bodyReg = /(?<={)(.|\n)+(?=})/m;
    const paramReg = /(?<=\().+(?=\)\s+{)/;
    const funcString = func.toString();
    if (func.prototype) {
        const param = paramReg.exec(funcString);
        const body = bodyReg.exec(funcString);
        if (body) {
            if (param) {
                const paramArr = param[0].split(',');
                return new Function(...paramArr, body[0]);
            } else {
                return new Function(body[0]);
            }
        } else {
            return null;
        }
    } else {
        return eval(funcString);
    }
}

function cloneOtherType(targe, type) {
    const Ctor = targe.constructor;
    switch (type) {
        case boolTag:
        case numberTag:
        case stringTag:
        case errorTag:
        case dateTag:
            return new Ctor(targe);
        case regexpTag:
            return cloneReg(targe);
        case symbolTag:
            return cloneSymbol(targe);
        case funcTag:
            return cloneFunction(targe);
        default:
            return null;
    }
}

function clone(target, map = new WeakMap()) {

    // 克隆原始类型
    if (!isObject(target)) {
        return target;
    }

    // 初始化
    const type = getType(target);
    let cloneTarget;
    if (deepTag.includes(type)) {
        cloneTarget = getInit(target, type);
    } else {
        return cloneOtherType(target, type);
    }

    // 防止循环引用
    if (map.get(target)) {
        return map.get(target);
    }
    map.set(target, cloneTarget);

    // 克隆set
    if (type === setTag) {
        target.forEach(value => {
            cloneTarget.add(clone(value, map));
        });
        return cloneTarget;
    }

    // 克隆map
    if (type === mapTag) {
        target.forEach((value, key) => {
            cloneTarget.set(key, clone(value, map));
        });
        return cloneTarget;
    }

    // 克隆对象和数组
    const keys = type === arrayTag ? undefined : Object.keys(target);
    forEach(keys || target, (value, key) => {
        if (keys) {
            key = value;
        }
        cloneTarget[key] = clone(target[key], map);
    });

    return cloneTarget;
}

module.exports = {
    clone
};
```

## 6.1克隆Buffer

```js
// const Readable = require("stream").Readable;
// const rs = new Readable();
// rs.push("学习");
// rs.push(null);
// const rs2 = rs;
// rs2.push("node");
// rs2.push(null);
// rs.pipe(process.stdout);
// rs2.pipe(process.stdout)

const allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
    result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

// const buf2 = cloneBuffer(buf,true);

const buf = Buffer.from('laoyuan');
const buf2 = buf;
buf2.write("nodejs");
buf2.write("22");
console.log("buf",buf.toString("utf-8"))
console.log("buf2",buf2.toString("utf-8"))
```

## 7.手写instanceOf原理

```js
function instanceOf(left,right) {
    let proto = left.__proto__;
    let prototype = right.prototype
    while(true) {
        if(proto === null) return false
        if(proto === prototype) return true
        proto = proto.__proto__;
    }
}
```

## 8.1手写map

```js

```

## 8.2手写reduce

```js

```

## 9.⼿写实现拖拽

```js
window.onload = function() {
  // drag处于绝对定位状态
  let drag = document.getElementById("box");
  drag.onmousedown = function(e) {
    var e = e || window.event;
    // 鼠标与拖拽元素边界的距离 = 鼠标与可视区边界的距离 - 拖拽元素与边界的距离
    let diffX = e.clientX - drag.offsetLeft;
    let diffY = e.clientY - drag.offsetTop;
    drag.onmousemove = function(e) {
      // 拖拽元素移动的距离 = 鼠标与可视区边界的距离 - 鼠标与拖拽元素边界的距离
      let left = e.clientX - diffX;
      let top = e.clientY - diffY;
      // 避免拖拽出可视区
      if (left < 0) {
        left = 0;
      } else if (left > window.innerWidth - drag.offsetWidth) {
        left = window.innerWidth - drag.offsetWidth;
      }
      if (top < 0) {
        top = 0;
      } else if (top > window.innerHeight - drag.offsetHeight) {
        top = window.innerHeight - drag.offsetHeight;
      }
      drag.style.left = left + "px";
      drag.style.top = top + "px";
    };
    drag.onmouseup = function(e) {
      this.onmousemove = null;
      this.onmouseup = null;
    };
  };
};
```

## 10.使⽤setTimeout模拟setInterval

```js
// 可避免setInterval因执行时间导致的间隔执行时间不一致
setTimeout(function() {
  // do something
  setTimeout(arguments.callee, 500);
}, 500);
```

## 11.手写实现Object.create的基本原理

```js
// 思路：将传入的对象作为原型
function create(obj) {
    function F() {}
    F.prototype = obj
    return new F()
  }
```

## 12.手写实现函数科里化

```js
// 函数柯里化，是固定部分参数，返回一个接受剩余参数的函数，也称为部分计算函数，目的是为了缩小适用范围，创建一个针对性更强的函数。
// 那么反柯里化函数，从字面讲，意义和用法跟函数柯里化相比正好相反，扩大适用范围，创建一个应用范围更广的函数。使本来只有特定对象才适用的方法，扩展到更多的对象。
function curry(fn, args) {
  var length = fn.length;
  var args = args || [];
  return function() {
    newArgs = args.concat(Array.prototype.slice.call(arguments));
    if (newArgs.length < length) {
      return curry.call(this, fn, newArgs);
    } else {
      return fn.apply(this, newArgs);
    }
  };
}

function multiFn(a, b, c) {
  return a * b * c;
}

var multi = curry(multiFn);

multi(2)(3)(4);
multi(2, 3, 4);
multi(2)(3, 4);
multi(2, 3)(4);

//ES6
const curry = (fn, arr = []) => (...args) =>
  (arg => (arg.length === fn.length ? fn(...arg) : curry(fn, arg)))([
    ...arr,
    ...args
  ]);

let curryTest = curry((a, b, c, d) => a + b + c + d);
curryTest(1, 2, 3)(4); //返回10
curryTest(1, 2)(4)(3); //返回10
curryTest(1, 2)(3, 4); //返回10

//经典写法
Function.prototype.currying = function() {
  var that = this;
  return function() {
    return Function.prototype.call.apply(that, arguments);
  };
};
var uncurrying = function(fn) {
  return function() {
    var args = [].slice.call(arguments, 1);
    return fn.apply(arguments[0], args);
  };
};
Function.prototype.uncurring = function() {
  var self = this;
  return function() {
    var obj = Array.prototype.shift.call(arguments);
    return self.apply(obj, arguments);
  };
};
// Function.prototype.unCurrying = function() {
//   var f = this;
//   return function() {
//     var a = arguments;
//     return f.apply(a[0], [].slice.call(a, 1));
//   };
// };
Function.prototype.unCurrying = function() {
  return this.call.bind(this);
};
var push = Array.prototype.push.unCurrying(),
  obj = {};
push(obj, "first", "two");
console.log(obj);
```

## 13.手写实现事件触发监听

```js
// 组件通信，一个触发与监听的过程
class EventEmitter {
    constructor () {
      // 存储事件
      this.events = this.events || new Map()
    }
    // 监听事件
    addListener (type, fn) {
      if (!this.events.get(type)) {
        this.events.set(type, fn)
      }
    }
    // 触发事件
    emit (type) {
      let handle = this.events.get(type)
      handle.apply(this, [...arguments].slice(1))
    }
  }
  
  // 测试
  let emitter = new EventEmitter()
  // 监听事件
  emitter.addListener('ages', age => {
    console.log(age)
  })
  // 触发事件
  emitter.emit('ages', 18)  // 18
```

## 14.手写实现Promise

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>手写 Promise</title>
  </head>
  <body>
    <script>
      // promise 的三种状态
      const PENDING = "PENDING";
      const FULFILLED = "FULFILLED";
      const REJECTED = "REJECTED";

      //   promise 处理过程
      function promiseResolutionProcedure(promise2, x, resolve, reject) {
        if (promise2 === x) {
          throw new Error("循环引用 promise");
        }
        //   处理 prmomise 对象
        if (x instanceof MyPromise) {
          if (x.state === PENDING) {
            x.then(y => {
              promiseResolutionProcedure(promise2, y, resolve, reject);
            }, reject);
          } else {
            x.state === FULFILLED && resolve(x.value);
            x.state === REJECTED && reject(x.value);
          }
        }

        //   判断 thenable 对象
        if ((typeof x === "object" || typeof x === "function") && x !== null) {
          if (typeof x.then === "function") {
            x.then(y => {
              promiseResolutionProcedure(promise2, y, resolve, reject);
            }, reject);
          } else {
            resolve(x);
          }
        } else {
          resolve(x);
        }
      }

      class MyPromise {
        static all(promiseArray) {
          return new MyPromise((resolve, reject) => {
            const resultArray = [];
            let successTimes = 0;

            function processResult(index, data) {
              resultArray[index] = data;
              successTimes++;
              if (successTimes === promiseArray.length) {
                // 处理成功
                resolve(resultArray);
              }
            }

            for (let i = 0; i < promiseArray.length; i++) {
              promiseArray[i].then(
                data => {
                  processResult(i, data);
                },
                err => {
                  // 处理失败
                  reject(err);
                }
              );
            }
          });
        }
        constructor(fn) {
          this.state = PENDING;
          this.value = undefined;
          this.resolvedCallbacks = [];
          this.rejectedCallbacks = [];

          const resolve = val => {
            if (
              (typeof val === "object" || typeof val === "function") &&
              val.then
            ) {
              promiseResolutionProcedure(this, val, resolve, reject);
              return;
            }
            setTimeout(() => {
              if (this.state === PENDING) {
                this.state = FULFILLED;
                this.value = val;
                // 执行所有的 then 方法
                this.resolvedCallbacks.map(fn => fn());
              }
            });
          };
          const reject = val => {
            if (
              (typeof val === "object" || typeof val === "function") &&
              val.then
            ) {
              promiseResolutionProcedure(this, val, resolve, reject);
              return;
            }
            setTimeout(() => {
              if (this.state === PENDING) {
                this.value = val;
                this.state = REJECTED;
                // 执行所有的 then 方法
                this.rejectedCallbacks.map(fn => fn());
              }
            });
          };
          fn(resolve, reject);
        }
        then(
          onFulfilled = val => val,
          onRejected = err => {
            throw new Error(err);
          }
        ) {
          let promise2 = null;
          // 处理已经完成的promise
          if (this.state === FULFILLED) {
            promise2 = new MyPromise((resolve, reject) => {
              const x = onFulfilled(this.value);
              promiseResolutionProcedure(promise2, x, resolve, reject);
            });
          }

          // 处理已经完成的promise
          if (this.state === REJECTED) {
            promise2 = new MyPromise((resolve, reject) => {
              const x = onRejected(this.value);
              promiseResolutionProcedure(promise2, x, resolve, reject);
            });
          }

          // 处理尚未完成的promise
          if (this.state === PENDING) {
            promise2 = new MyPromise((resolve, reject) => {
              this.resolvedCallbacks.push(() => {
                const x = onFulfilled(this.value);
                promiseResolutionProcedure(promise2, x, resolve, reject);
              });

              this.rejectedCallbacks.push(() => {
                const x = onRejected(this.value);
                promiseResolutionProcedure(promise2, x, resolve, reject);
              });
            });
          }
          return promise2;
        }
      }
    </script>
    <script>
      // 步骤1
      //   const promise = new MyPromise((resolve, reject) => {
      //     setTimeout(() => {
      //       // ajax 获取数据
      //       resolve("step1");
      //     }, 1000);
      //   }).then(data => {
      //     console.log("获取到数据：", data);
      //   });

      // 步骤2
      //   const promise = new MyPromise((resolve, reject) => {
      //     resolve("step2");
      //   }).then(data => {
      //     console.log("获取到数据：", data);
      //   });

      // 步骤3
      //   const promise = new MyPromise((resolve, reject) => {
      //     resolve("step3");
      //     resolve("step3.1");
      //   }).then(data => {
      //     console.log("获取到数据：", data);
      //   });

      // 步骤4
      //   const promise = new MyPromise((resolve, reject) => {
      //     resolve("step4");
      //   })
      //     .then(data => {
      //       console.log("获取到数据：", data);
      //       return "step4.1";
      //     })
      //     .then(data => {
      //       console.log("获取到数据：", data);
      //     });

      // 步骤5
      //   const promise = new MyPromise((resolve, reject) => {
      //     resolve("step5");
      //   })
      //     .then(data => {
      //       console.log("获取到数据：", data);
      //       return "step5.1";
      //     })
      //     .then()
      //     .then(data => {
      //       console.log("获取到数据：", data);
      //     });

      // 步骤6
      //   const promise = new MyPromise((resolve, reject) => {
      //     resolve("step6");
      //   })
      //     .then(data => {
      //       console.log("获取到数据：", data);
      //       return {
      //         then(r, j) {
      //           r("step6.1");
      //         }
      //       };
      //     })
      //     .then(data => {
      //       console.log("获取到数据：", data);
      //     });

      // 步骤7
      //   const promise = new MyPromise((resolve, reject) => {
      //     resolve("step7");
      //   })
      //     .then(data => {
      //       console.log("获取到数据：", data);
      //       return new MyPromise(resolve => {
      //         resolve("7.1");
      //       });
      //     })
      //     .then(data => {
      //       console.log("获取到数据：", data);
      //     });

      // 步骤8
      //   const promise = new MyPromise((resolve, reject) => {
      //     resolve(
      //       new Promise(resolve => {
      //         resolve("step8");
      //       })
      //     );
      //   }).then(data => {
      //     console.log("获取到数据：", data);
      //   });

      // step9
      //   const promise = new MyPromise((resolve, reject) => {
      //     resolve("step9");
      //   });
      //   const promise1 = promise.then(data => {
      //     return promise1;
      //   });

      // step10
      //   MyPromise.all([
      //     new MyPromise(resolve => {
      //       resolve(1);
      //     }),
      //     new MyPromise(resolve => {
      //       resolve(2);
      //     })
      //   ]).then(dataList => {
      //     console.log(dataList);
      //   });

      // step11
      //   const promise = new MyPromise((resolve, reject) => {
      //     reject("step11");
      //   }).then(
      //     data => {
      //       console.log("resolve 值：", data);
      //     },
      //     rej => {
      //       console.log("reject 值：", rej);
      //     }
      //   );

      // step12
      const promise = new MyPromise((resolve, reject) => {
        resolve("step12");
      });

      setTimeout(() => {
        promise.then(data => {
          console.log("step12:", data);
        });

        promise.then(data => {
          console.log("step12:", data);
        });
      }, 1000);
    </script>
  </body>
</html>
```

## 15.手写实现扩展extends

```js
function Rectangle(length, width){
  this.i = length;
  this.w = width;
}
Rectangle.prototype.getArea =  function(){
  return this.i*this.w;
}
function Square(length){
  Rectangle.call(this, length, length)
}
Square.prototype = Object.create(Rectangle.prototype, {
  constructor:{
    value: Square
  }
})
let square = new Square(3);
console.log(square.getArea());
square instanceof Square;
square instanceof Rectangle;
```

## 【附】讲透bind

**特点**

* bind() 方法会创建一个新函数。当这个新函数被调用时，bind() 的第一个参数将作为它运行时的 this，之后的一序列参数将会在传递的实参前传入作为它的参数。
* 一个绑定函数也能使用new操作符创建对象：这种行为就像把原函数当成构造器。提供的 this 值被略，同时调用时的参数被提供给模拟函数。

**MDN的Polyfill**

```js
if (!Function.prototype.bind) {
  //防止Function.prototype.bind.call(obj,param)这种调用改变this
  Function.prototype.bind = function(oThis) {
    if (typeof this !== 'function') {
      throw new TypeError('Function.prototype.bind - what is trying to be bound is not callable');
    }
    var aArgs = Array.prototype.slice.call(arguments, 1), fToBind = this, fNOP=function(){},
    fBound  = function() {
      // this instanceof fBound === true时,说明返回的fBound被当做new的构造函数调用
      return fToBind.apply(this instanceof fBound ? this : oThis,
          // 获取调用时(fBound)的传参.bind 返回的函数入参往往是这么传递的
           aArgs.concat(Array.prototype.slice.call(arguments)));
    };
    // 维护原型关系
    if (this.prototype) {
      // 当执行Function.prototype.bind()时, this为Function.prototype 
      // this.prototype(即Function.prototype.prototype)为undefined
      fNOP.prototype = this.prototype; 
    }
    // 下行的代码使fBound.prototype是fNOP的实例,因此
    // 返回的fBound若作为new的构造函数,new生成的新对象作为this传入fBound,新对象的__proto__就是fNOP的实例
    fBound.prototype = new fNOP();
    return fBound;
  };
}
```

**词法作用域**

* JavaScript 采用的是词法作用域，函数的作用域在函数定义的时候就决定了
* 而与词法作用域相对的是动态作用域，函数的作用域是在函数调用的时候才决定的

```js
var value = 1;
function foo() {
  console.log(value);
}
function bar() {
  var value = 2;
  foo();
}
bar();
```

* 假设JavaScript采用静态作用域，让我们分析下执行过程：
    * 执行 foo 函数，先从 foo 函数内部查找是否有局部变量 value，如果没有，就根据书写的位置，查找上面一层的代码，也就是 value 等于 1，所以结果会打印 1。
* 假设JavaScript采用动态作用域，让我们分析下执行过程：
    * 执行 foo 函数，依然是从 foo 函数内部查找是否有局部变量 value。如果没有，就从调用函数的作用域，也就是 bar 函数内部查找 value 变量，所以结果会打印 2。
* 前面我们已经说了，JavaScript采用的是静态作用域，所以这个例子的结果是 1。

**执行顺序**

```js
var foo = function () {
  console.log('foo1');
}
foo();  // foo1
var foo = function () {
  console.log('foo2');
}
foo(); // foo2
```

然而去看这段代码

```js
function foo() {
  console.log('foo1');
}
foo();  // foo2
function foo() {
  console.log('foo2');
}
foo(); // foo2
```

* 可执行代码(executable code)的类型：全局代码、函数代码、eval代码。
* 举个例子，当执行到一个函数的时候，就会进行准备工作，这里的“准备工作”，让我们用个更专业一点的说法，就叫做"执行上下文(execution context)"。

**执行上下文栈**

```js
function fun3() {
  console.log('fun3')
}
function fun2() {
  fun3();
}
function fun1() {
  fun2();
}
fun1();
// 伪代码
// fun1()ECStack.push(<fun1> functionContext);
// fun1中竟然调用了fun2，还要创建fun2的执行上下文ECStack.push(<fun2> functionContext);
// 擦，fun2还调用了fun3！ECStack.push(<fun3> functionContext);
// fun3执行完毕ECStack.pop();
// fun2执行完毕ECStack.pop();
// fun1执行完毕ECStack.pop();
// javascript接着执行下面的代码，但是ECStack底层永远有个globalContext
```

**变量对象**

* 对于每个执行上下文，都有三个重要属性：
    * 变量对象(Variable object，VO)
    * 作用域链(Scope chain)
    * this
* 变量对象是与执行上下文相关的数据作用域，存储了在上下文中定义的变量和函数声明。

**全局上下文**

全局上下文中的变量对象就是全局对象！

**函数上下文**

* 在函数上下文中，我们用活动对象(activation object, AO)来表示变量对象。
* 活动对象和变量对象其实是一个东西，只是变量对象是规范上的或者说是引擎实现上的，不可在 JavaScript 环境中访问，只有到当进入一个执行上下文中，这个执行上下文的变量对象才会被激活，所以才叫 activation object 呐，而只有被激活的变量对象，也就是活动对象上的各种属性才能被访问。
* 活动对象是在进入函数上下文时刻被创建的，它通过函数的 arguments 属性初始化。arguments 属性值是 Arguments 对象。

**执行过程**

* 进入执行上下文
* 代码执行

**进入执行上下文**

当进入执行上下文时，这时候还没有执行代码，变量对象会包括：

1. 函数的所有形参 (如果是函数上下文)
    * 由名称和对应值组成的一个变量对象的属性被创建
    * 没有实参，属性值设为 undefined
2. 函数声明
    * 由名称和对应值（函数对象(function-object)）组成一个变量对象的属性被创建
    * 如果变量对象已经存在相同名称的属性，则完全替换这个属性
3. 变量声明
    * 由名称和对应值（undefined）组成一个变量对象的属性被创建；
    * 如果变量名称跟已经声明的形式参数或函数相同，则变量声明不会干扰已经存在的这类属性

```js
function foo(a) {
  var b = 2;
  function c() {}
  var d = function() {};
  b = 3;
}
foo(1);
```

在进入执行上下文后，这时候的 AO 是

```js
AO = {
  arguments: {
    0: 1,
    length: 1
  },
  a: 1,
  b: undefined,
  c: reference to function c(){},
  d: undefined
}
```

**代码执行**

在代码执行阶段，会顺序执行代码，根据代码，修改变量对象的值

还是上面的例子，当代码执行完后，这时候的 AO 是：

```js
AO = {
  arguments: {
      0: 1,
      length: 1
  },
  a: 1,
  b: 3,
  c: reference to function c(){},
  d: reference to FunctionExpression "d"
}
```

**作用域链**

* 查找变量的时候，会先从当前上下文的变量对象中查找，如果没有找到，就会从父级(词法层面上的父级)执行上下文的变量对象中查找，一直找到全局上下文的变量对象，也就是全局对象。这样由多个执行上下文的变量对象构成的链表就叫做作用域链。
* 函数的作用域在函数定义的时候就决定了!!!!!!。
* 这是因为函数有一个内部属性 [[scope]]，当函数创建的时候，就会保存所有父变量对象到其中，你可以理解 [[scope]] 就是所有父变量对象的层级链，但是注意：[[scope]] 并不代表完整的作用域链！

```js
function foo() {
  function bar() {
      ...
  }
}
//函数创建时，各自的[[scope]]为：
foo.[[scope]] = [
  globalContext.VO
];
bar.[[scope]] = [
  fooContext.AO,
  globalContext.VO
];
```

**函数激活**

* 当函数激活时，进入函数上下文，创建 VO/AO 后，就会将活动对象添加到作用链的前端。
* 这时候执行上下文的作用域链，我们命名为 ScopeChain
* ScopeChain = [AO].concat([[Scope]]);
* 至此，作用域链创建完毕。

**this**

其实很复杂，简单来说是谁调用指向谁

**具体执行分析**

```js
var scope = "global scope";
function checkscope(){
  var scope = "local scope";
  function f(){
    return scope;
  }
  return f();
}
checkscope();

//1.执行全局代码，创建全局执行上下文，全局上下文被压入执行上下文栈

ECStack = [
      globalContext
];

//2.全局上下文初始化

globalContext = {
  VO: [global],
  Scope: [globalContext.VO],
  this: globalContext.VO
}

//3.初始化的同时，checkscope 函数被创建，保存作用域链到函数的内部属性[[scope]]

checkscope.[[scope]] = [
  globalContext.VO
];

//4.执行 checkscope 函数，创建 checkscope 函数执行上下文，checkscope 函数执行上下文被压入执行上下文栈

ECStack = [
  checkscopeContext,
  globalContext
];

//5.checkscope 函数执行上下文初始化：

//复制函数 [[scope]] 属性创建作用域链，
//用 arguments 创建活动对象，
//初始化活动对象，即加入形参、函数声明、变量声明，
//将活动对象压入 checkscope 作用域链顶端。
//同时 f 函数被创建，保存作用域链到 f 函数的内部属性[[scope]]

checkscopeContext = {
  AO: {
    arguments: {
        length: 0
    },
    scope: undefined,
    f: reference to function f(){}
  },
  Scope: [AO, globalContext.VO],
  this: undefined
}

//6.执行 f 函数，创建 f 函数执行上下文，f 函数执行上下文被压入执行上下文栈

ECStack = [
  fContext,
  checkscopeContext,
  globalContext
];

//7.f 函数执行上下文初始化, 以下跟第 4 步相同：

//复制函数 [[scope]] 属性创建作用域链
//用 arguments 创建活动对象
//初始化活动对象，即加入形参、函数声明、变量声明
//将活动对象压入 f 作用域链顶端

fContext = {
  AO: {
      arguments: {
          length: 0
      }
  },
  Scope: [AO, checkscopeContext.AO, globalContext.VO],
  this: undefined
}

//8.f 函数执行，沿着作用域链查找 scope 值，返回 scope 值

//9.f 函数执行完毕，f 函数上下文从执行上下文栈中弹出

//9.checkscope 函数执行完毕，checkscope 执行上下文从执行上下文栈中弹出

ECStack = [
  globalContext
];
```

**闭包**
* 定义：闭包是指那些能够访问自由变量的函数（MDN）、闭包是指有权访问另外一个函数作用域中的变量的函数（红宝书p178）、《JavaScript权威指南》中就讲到：从技术的角度讲，所有的JavaScript函数都是闭包。从实践角度：以下函数才算是闭包：
    * 即使创建它的上下文已经销毁，它仍然存在（比如，内部函数从父函数中返回）
    * 在代码中引用了自由变量

**例子**
```js
var scope = "global scope";
function checkscope(){
    var scope = "local scope";
    function f(){
        return scope;
    }
    return f;
}
var foo = checkscope();
foo();
```

这里直接给出简要的执行过程：
1. 进入全局代码，创建全局执行上下文，全局执行上下文压入执行上下文栈
2. 全局执行上下文初始化
3. 执行 checkscope 函数，创建 checkscope 函数执行上下文，checkscope 执行上下文被压入执行上下文栈
4. checkscope 执行上下文初始化，创建变量对象、作用域链、this等
5. checkscope 函数执行完毕，checkscope 执行上下文从执行上下文栈中弹出
6. 执行 f 函数，创建 f 函数执行上下文，f 执行上下文被压入执行上下文栈
7. f 执行上下文初始化，创建变量对象、作用域链、this等
8. f 函数执行完毕，f 函数上下文从执行上下文栈中弹出

了解到这个过程，我们应该思考一个问题，那就是：
* 当 f 函数执行的时候，checkscope 函数上下文已经被销毁了啊(即从执行上下文栈中被弹出)，怎么还会读取到 checkscope 作用域下的 scope 值呢？

我们知道 f 执行上下文维护了一个作用域链：
```js
fContext = {
    Scope: [AO, checkscopeContext.AO, globalContext.VO],
}
```

**call和apply的模拟实现**

call() 方法在使用一个指定的 this 值和若干个指定的参数值的前提下调用某个函数或方法。

```js
Function.prototype.call2 = function (context) {
    var context = context || window;
    context.fn = this;
    var args = [];
    for(var i = 1, len = arguments.length; i < len; i++) {
        args.push('arguments[' + i + ']');
    }
    var result = eval('context.fn(' + args +')');
    delete context.fn
    return result;
}

Function.prototype.apply = function (context, arr) {
    var context = Object(context) || window;
    context.fn = this;
    var result;
    if (!arr) {
        result = context.fn();
    }
    else {
        var args = [];
        for (var i = 0, len = arr.length; i < len; i++) {
            args.push('arr[' + i + ']');
        }
        result = eval('context.fn(' + args + ')')
    }
    delete context.fn
    return result;
}
```

**New**

new 运算符创建一个用户定义的对象类型的实例或具有构造函数的内置对象类型之一
```js
function objectFactory() {
    var obj = new Object(),
    Constructor = [].shift.call(arguments);
    obj.__proto__ = Constructor.prototype;
    var ret = Constructor.apply(obj, arguments);
    return typeof ret === 'object' ? ret : obj;
};

function Otaku (name, age) {
    this.name = name;
    this.age = age;
    this.habit = 'Games';
}

Otaku.prototype.strength = 60;
Otaku.prototype.sayYourName = function () {
    console.log('I am ' + this.name);
}

var person = objectFactory(Otaku, 'Kevin', '18')
console.log(person.name) // Kevin
console.log(person.habit) // Games
console.log(person.strength) // 60
console.log(person.age) // 18
console.log(person.sayYourName())//I am Kevin
```

**柯里化**

在数学和计算机科学中，柯里化是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术。

乞丐版：完整版很深
```js
var curry = function (fn) {
    var args = [].slice.call(arguments, 1);
    return function() {
        var newArgs = args.concat([].slice.call(arguments));
        return fn.apply(this, newArgs);
    };
};
function add(a, b) {
    return a + b;
}
var addCurry = curry(add, 1, 2);
addCurry() // 3//或者var addCurry = curry(add, 1);addCurry(2) // 3//或者var addCurry = curry(add);addCurry(1, 2) // 3
```

**继承**

其他都是浮云，一招搞定
```js
function Rectangle(length,width){
    this.l = length
    this.w = width
}
Rectangle.prototype.getArea = function(){
    return this.l*this.w
}
function Square(length){
    Rectangle.call(this,length,length)
}
Square.prototype = Object.create(Rectangle.prototype,{
    constructor:{
      value:Square
    }
})
var square = new Square(3)
console.log(square.getArea())
console.log(square instanceof Square)
console.log(square instanceof Rectangle)
```

**原型链**
![原型链](../img/原型链.jpeg)

## 【附】讲透深克隆

**定义**
* **浅拷贝**：创建一个新对象，这个对象有着原始对象属性值的一份精确拷贝。如果属性是基本类型，拷贝的就是基本类型的值，如果属性是引用类型，拷贝的就是内存地址 ，所以如果其中一个对象改变了这个地址，就会影响到另一个对象。
* **深拷贝**：将一个对象从内存中完整的拷贝一份出来,从堆内存中开辟一个新的区域存放新对象,且修改新对象不会影响原对象

```js
// 浅克隆
Object.assign(target, ...sources)
let target = {};
let source = { a: { b: 2 } };
Object.assign(target, source);
target.a===source.a   //true
```

**判断类型**

**typeof**

bigint、undefined、function、object、number、boolean、symbol、string

**instanceof**

原理就是只要右边变量的 prototype 在左边变量的原型链上即可。

**Object.prototype.toString**

ES5 规范地址：https://es5.github.io/#x15.2.4.2。

**丐中丐：业务最实用**

`let co = JSON.parse(JSON.stringify(o));`

**正则、拷贝函数、循环引用等-测试用例**
```JS
function Obj() {
    this.func = function () {
        alert(1) 
    };
    this.obj = {a:1};
    this.arr = [1,2,3];
    this.und = undefined;
    this.reg = /123/;
    this.date = new Date(0);
    this.NaN = NaN
    this.infinity = Infinity
    this.sym = Symbol(1)
    this.set = new Set([1,2,3])
    this.map = new Map([['a',1],['b',9]])
}
let obj1 = new Obj();
Object.defineProperty(obj1,'innumerable',{
    enumerable:false,
    value:'innumerable'
})
console.log({obj1});
let str = JSON.stringify(obj1);
let obj2 = JSON.parse(str);
console.log({obj2});
```

**基础版本**
```JS
function deepCopy(obj) {
  if(typeof obj === "object") {
      if(obj.constructor === Array) {
          var newArr = []
          for(var i = 0; i < obj.length; i++) newArr.push(obj[i])
          return newArr
      } else {
          var newObj = {}
          for(var key in obj) {
              newObj[key] = this.deepCopy(obj[key])
          }
          return newObj
      }
  } else {
      return obj
  }
}
```

**复杂版本**
正确但无面试意义版本

https://github.com/lodash/lodash/blob/master/.internal/baseClone.js

一个图

**面试终极武器**
```js
const isComplexDataType = obj => (typeof obj === 'object' || typeof obj === 'function') && (obj !== null)

const deepClone = function (obj, hash = new WeakMap()) {
    if (hash.has(obj)) return hash.get(obj)
    let type = [Date,RegExp,Set,Map,WeakMap,WeakSet]
    if (type.includes(obj.constructor)) return new obj.constructor(obj);      

    //如果成环了,参数obj = obj.loop = 最初的obj 会在WeakMap中找到第一次放入的obj提前返回第一次放入WeakMap的cloneObj
    let allDesc = Object.getOwnPropertyDescriptors(obj);  //遍历传入参数所有键的特性
    let cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc); //继承原型
    hash.set(obj, cloneObj)
    for (let key of Reflect.ownKeys(obj)) {   //Reflect.ownKeys(obj)可以拷贝不可枚举属性和符号类型
        // 如果值是引用类型(非函数)则递归调用deepClone
        cloneObj[key] =
            (isComplexDataType(obj[key]) && typeof obj[key] !== 'function') ?
                deepClone(obj[key], hash) : obj[key];
    }
    return cloneObj;
};

let obj = {
    bigInt: BigInt(12312),
    set:new Set([2]),
    map:new Map([['a',22],['b',33]]),
    num: 0,
    str: '',
    boolean: true,
    unf: undefined,
    nul: null,
    obj: {
        name: '我是一个对象',
        id: 1
    },
    arr: [0, 1, 2],
    func: function () {
        console.log('我是一个函数')
    },
    date: new Date(0),
    reg: new RegExp('/我是一个正则/ig'),
    [Symbol('1')]: 1,
};

Object.defineProperty(obj, 'innumerable', {
    enumerable: false,
    value: '不可枚举属性'
});

obj = Object.create(obj, Object.getOwnPropertyDescriptors(obj))
obj.loop = obj
let cloneObj = deepClone(obj);
console.log('obj', obj);
console.log('cloneObj', cloneObj);

for (let key of Object.keys(cloneObj)) {
    if (typeof cloneObj[key] === 'object' || typeof cloneObj[key] === 'function') {
        console.log(`${key}相同吗？ `, cloneObj[key] === obj[key])
    }
}
```