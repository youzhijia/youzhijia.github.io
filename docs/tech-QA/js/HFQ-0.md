# js手写代码实现1~10

## （1）new

**实现原理**

1. 创建一个新对象
2. 这个新对象会被执行 [[原型]] 连接
3. 属性和方法被加入到 this 引用的对象中，并执行了构造函数中的方法
4. 如果函数没有返回其他对象，那么 this 指向这个新对象，否则 this 指向构造函数中返回的对象

```javascript
function new(func){
  let obj = {};
  obj.__proto__ = func.protptype;
  let res = func.call(obj);
  if(res && typeof(res) === 'function' || typeof(res) === 'object'){ 
    return res;
  }
  return obj;
}
```

## （2）JSON.stringify && JSON.parse

**实现原理**

```javascript

```

## （3）call && apply

**实现原理**

```javascript

```

## （4）bind

**实现原理**

```javascript

```

## （5）继承

**实现原理**

```javascript

```

## （6）JS函数科里化 && 反科里化

**实现原理**

```javascript

```

## （7）Promise

**实现原理**

```javascript

```

## （8）防抖 && 节流

### 防抖

**作用**

控制函数在一定时间内的执行次数。防抖意味着N秒内函数只会被执行一次，如果N秒内再次被触发，则重新计算延迟时间

**举例**

10天不吃零食，就可以购买一件衣服；如果中间吃了一次零食，那么就要重新计算时间

**应用场景**

* 搜索框输入查询（SUG），如果用户一直在输入中，没有必要不停地调用去请求服务端接口，等用户停止输入的时候，再调用，设置一个合适的时间间隔，有效减轻服务端压力。
* 表单验证
* 按钮提交事件
* 浏览器窗口缩放，resize事件等


**实现原理**

* 事件第一次触发时，timer 是 null，调用 later()，若 immediate 为true，那么立即调用 func.apply(this, params)；如果 immediate 为 false，那么过 wait 之后，调用 func.apply(this, params)
* 事件第二次触发时，如果 timer 已经重置为 null(即 setTimeout 的倒计时结束)，那么流程与第一次触发时一样，若 timer 不为 null(即 setTimeout 的倒计时未结束)，那么清空定时器，重新开始计时。

```javascript
//func：需要防抖的函数
//wait：防抖时长
//immediate：是否立即执行一次
function debounce(func, wait, immediate = true) {
    let timer; //定时器变量
    // 延迟执行函数
    const later = (context, args) => setTimeout(() => {
        timer = null;// 倒计时结束！
        if (!immediate) {
            func.apply(context, args);
            //执行回调
            context = args = null;
        }
    }, wait);
    let debounced = function (...params) {
        let context = this;
        let args = params; //func所需的参数，有可能是空数组
        if (!timer) {//第一次触发，timer是null
            timer = later(context, args); //开始计时
            if (immediate) {
                //立即执行
                func.apply(context, args);
            }
        } else {//第n次触发，timer不是null，即在防抖时长内再次触发，则清空计时器，重新开始计时
            clearTimeout(timer); //timer=null不能清除计时器
            //函数在每个等待时延的结束被调用
            timer = later(context, args); //重新开始计时
        }
    }
    debounced.cancel = function () {
        clearTimeout(timer);
        timer = null;
    };
    return debounced;
}
function fn(val){
  console.log(val)
}
debounce(fn,'2000',false)('北京')
```

### 节流

**作用**

规定一个单位时间，在这个单位时间内最多只能触发一次函数执行，如果这个单位时间内多次触发函数，只能有一次生效

**举例**

如果小明在周考中取得满分，那么当月可以带他去游乐场玩，不管小明取得几次满分，一个月最多只能去一次

**应用场景**

* 按钮点击事件
* 拖拽事件
* onScoll
* 计算鼠标移动的距离(mousemove)

**实现原理**

```javascript
//时间戳实现
function throttle (func, delay) {
    var lastTime = 0;
    function throttled() {
        var context = this;
        var args = arguments;
        var nowTime = Date.now();
        if(nowTime > lastTime + delay) {
            func.apply(context, args);
            lastTime = nowTime;
        }
    }
    //节流函数最终返回的是一个函数
    return throttled; 
}
```

```javascript
//定时器实现
function throttle(func, delay) {
    var timer = null;
    function throttled() {
        var context = this;
        var args = arguments;
        if(!timer) {
            timer = setTimeout(()=>{
                func.apply(context, args);
                clearTimeout(timer);
                timer=null
            }, delay);
        }
    }
    return throttled;
}
```

时间戳和定时器的方式都没有考虑最后一次执行的问题，比如有个按钮点击事件，设置的间隔时间是1S，在第0.5S，1.8S，2.2S点击，那么只有0.5S和1.8S的两次点击能够触发函数执行，而最后一次的2.2S会被忽略。

```javascript
//组合实现，允许设置第一次或者最后一次是否触发函数执行
//func：需要节流的函数
//wait：节流时长
//options：选项对象
//options.leading：第一次是否触发函数执行
//options.trailing：最后一次是否触发函数执行
function throttle (func, wait, options) {
    //timer：定时器变量
    //previous：记录上一次触发的时间
    var timer, context, args;
    var previous = 0;
    if (!options) options = {};
    //延迟执行函数
    var later = function () {
        //Date.now()与new Date().getTime()都是时间戳，Date.now()能快点
        //options.leading === false表示第一次不触发函数执行，所以上一次触发的时间为0
        //options.leading === true，触发时间为当前时间（毫秒）
        previous = options.leading === false ? 0 : Date.now() || new Date().getTime();
        timer = null;//倒计时结束
        func.apply(context, args);
        context = args = null;
    };

    var throttled = function () {
        var now = Date.now() || new Date().getTime(); //设置当前时间
        //第一次不触发函数时，previous设置为当前时间
        if (!previous && options.leading === false) previous = now;
        //now - previous：本次触发与上一次触发的间隔时间；
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        //remaining <= 0的情况：间隔触发时间大于等于节流时长
        //remaining > wait的情况：previous大于now（理论上不存在）
        if (remaining <= 0 || remaining > wait) {//相当于第一次触发
            //第n次触发，timer不是null，即在节流时长内再次触发，则清空计时器
            if (timer) {
                clearTimeout(timer);
                timer = null;
            }
            previous = now;
            func.apply(context, args);
            if (!timer) context = args = null;
        } 
        //在节流时长内再次触发
        //若timer不是null，表示已经设置了定时器，不需要再次设置定时器
        //若timer是null，表示上一次的倒计时结束，需要再次设置定时器
        //options.trailing为true表示最后一次触发函数执行
        else if (!timer && options.trailing !== false) {
            // 判断是否设置了定时器和 trailing
            timer = setTimeout(later, remaining);
        }
    };

    throttled.cancel = function () {
        clearTimeout(timer);
        previous = 0;
        timer = context = args = null;
    };

    return throttled;
}
function fn(val){
  console.log(val)
}
throttle(fn, 1000, {leading:true, trailing: true})('123');
```

## （9）JS深拷贝

**实现原理**

```javascript

```

## （10）instanceOf

**实现原理**

```javascript

```

## （11）map && reduce

**实现原理**

```javascript

```

## （12）拖拽

**实现原理**

```javascript

```

## （13）使用setTimeout模拟setInterval

**实现原理**

```javascript

```

## （14）Object.create

**实现原理**

```javascript

```

## （15）Event Bus

**实现原理**

```javascript

```