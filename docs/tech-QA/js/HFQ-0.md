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

**实现原理**

```javascript

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