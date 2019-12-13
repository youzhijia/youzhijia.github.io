# Vue源码分析 :star:

**前言**

Vue源码分析直播课，前25分钟与技术无关

**如何看一个项目的源码**
1. 找类似的小项目看，对比源码
2. 不要过分相信中文文档，可以结合中文文档去看国外各自相关文档，根据区别针对去看

## Vue架构概览

![Image Title](/img/vue-0.png)

## 双向数据绑定 && setState原理

#### 双向数据绑定（响应式原理）的技术

1. Object.defineProperty
2. Observer
3. Watcher
4. Dep
5. Directive

**目前大概有三种方式实现双向数据绑定**
* 发布订阅模式
* Angular 的脏查机制
* 数据劫持

Vue 则采用的是数据劫持与发布订阅（观察者）模式相结合的方式实现双向绑定，数据劫持主要通过 Object.defineProperty 来实现。

```javascript 
var obj = {};
var a;
Object.defineProperty(obj, a, {
  get:function(){
    return a
  },
  set:function(val){
    a = val
  }
})
obj.a
obj.a = 11;
```

**流程图**

![Image Title](/img/vue-2.jpg)

* Observer 监听器：用来监听属性的变化通知订阅者
* Watcher 订阅者：收到属性的变化，然后更新视图，DOM和Object.defineProperty连接的纽带
* Compile 解析器：解析指令，初始化模版，绑定订阅者
* Dep 数据中心：多个watcher时，统一管理，遍历收集，群发

![Image Title](/img/vue-1.jpeg)

setter触发消息到watcher，watcher告诉directive更新DOM，DOM修改数据通知watcher，watcher修改数据

每当写v-text的vue语法时，会创建一个watcher，watcher把依赖的值写给对象a，下次b被修改时，会通知watcher，修改值进行更新

* Observer会观察两种类型的数据，Object 与 Array
* 对于Array类型的数据，由于 JavaScript 的限制，Vue 不能检测变化，会先**重写操作数组的原型方法**，重写后能达到两个目的：当数组发生变化时，触发 notify，如果是 push、unshift、splice 这些添加新元素的操作，则会使用observer观察新添加的数据。重写完原型方法后，遍历拿到数组中的每个数据使用observer观察它
* 而对于Object类型的数据，则遍历它的每个key，使用 defineProperty 设置 getter 和 setter，当触发getter的时候，observer则开始收集依赖，而触发setter的时候，observe 则触发notify。


## Vue2 Virtual-dom


## Vue2 DOM-diff算法解析


## Vue2 整体解析流程


## Vue运行时优化


## 再见Vue 前端技术框架选型