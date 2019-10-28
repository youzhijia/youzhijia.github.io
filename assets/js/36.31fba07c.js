(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{89:function(t,a,e){"use strict";e.r(a);var s=e(0),r=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"content"},[e("h1",{attrs:{id:"vue源码分析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue源码分析","aria-hidden":"true"}},[t._v("#")]),t._v(" Vue源码分析")]),t._v(" "),e("p",[e("strong",[t._v("前言")])]),t._v(" "),e("p",[t._v("Vue源码分析直播课，前25分钟与技术无关")]),t._v(" "),e("p",[e("strong",[t._v("如何看一个项目的源码")])]),t._v(" "),e("ol",[e("li",[t._v("找类似的小项目看，对比源码")]),t._v(" "),e("li",[t._v("不要过分相信中文文档，可以结合中文文档去看国外各自相关文档，根据区别针对去看")])]),t._v(" "),e("h2",{attrs:{id:"vue架构概览"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue架构概览","aria-hidden":"true"}},[t._v("#")]),t._v(" Vue架构概览")]),t._v(" "),e("p",[e("img",{attrs:{src:"/img/vue-0.png",alt:"Image Title"}})]),t._v(" "),e("h2",{attrs:{id:"双向数据绑定-setstate原理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#双向数据绑定-setstate原理","aria-hidden":"true"}},[t._v("#")]),t._v(" 双向数据绑定 && setState原理")]),t._v(" "),e("h4",{attrs:{id:"双向数据绑定（响应式原理）的技术"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#双向数据绑定（响应式原理）的技术","aria-hidden":"true"}},[t._v("#")]),t._v(" 双向数据绑定（响应式原理）的技术")]),t._v(" "),e("ol",[e("li",[t._v("Object.defineProperty")]),t._v(" "),e("li",[t._v("Observer")]),t._v(" "),e("li",[t._v("Watcher")]),t._v(" "),e("li",[t._v("Dep")]),t._v(" "),e("li",[t._v("Directive")])]),t._v(" "),e("p",[e("strong",[t._v("目前大概有三种方式实现双向数据绑定")])]),t._v(" "),e("ul",[e("li",[t._v("发布订阅模式")]),t._v(" "),e("li",[t._v("Angular 的脏查机制")]),t._v(" "),e("li",[t._v("数据劫持")])]),t._v(" "),e("p",[t._v("Vue 则采用的是数据劫持与发布订阅（观察者）模式相结合的方式实现双向绑定，数据劫持主要通过 Object.defineProperty 来实现。")]),t._v(" "),e("div",{staticClass:"language-javascript extra-class"},[e("pre",{pre:!0,attrs:{class:"language-javascript"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" obj "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" a"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nObject"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("defineProperty")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("obj"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" a"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("get")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" a\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("set")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("val")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    a "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" val\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nobj"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a\nobj"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("a "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("11")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[e("strong",[t._v("流程图")])]),t._v(" "),e("p",[e("img",{attrs:{src:"/img/vue-2.jpg",alt:"Image Title"}})]),t._v(" "),e("ul",[e("li",[t._v("Observer 监听器：用来监听属性的变化通知订阅者")]),t._v(" "),e("li",[t._v("Watcher 订阅者：收到属性的变化，然后更新视图，DOM和Object.defineProperty连接的纽带")]),t._v(" "),e("li",[t._v("Compile 解析器：解析指令，初始化模版，绑定订阅者")]),t._v(" "),e("li",[t._v("Dep 数据中心：多个watcher时，统一管理，遍历收集，群发")])]),t._v(" "),e("p",[e("img",{attrs:{src:"/img/vue-1.jpeg",alt:"Image Title"}})]),t._v(" "),e("p",[t._v("setter触发消息到watcher，watcher告诉directive更新DOM，DOM修改数据通知watcher，watcher修改数据")]),t._v(" "),e("p",[t._v("每当写v-text的vue语法时，会创建一个watcher，watcher把依赖的值写给对象a，下次b被修改时，会通知watcher，修改值进行更新")]),t._v(" "),e("ul",[e("li",[t._v("Observer会观察两种类型的数据，Object 与 Array")]),t._v(" "),e("li",[t._v("对于Array类型的数据，由于 JavaScript 的限制，Vue 不能检测变化，会先"),e("strong",[t._v("重写操作数组的原型方法")]),t._v("，重写后能达到两个目的：当数组发生变化时，触发 notify，如果是 push、unshift、splice 这些添加新元素的操作，则会使用observer观察新添加的数据。重写完原型方法后，遍历拿到数组中的每个数据使用observer观察它")]),t._v(" "),e("li",[t._v("而对于Object类型的数据，则遍历它的每个key，使用 defineProperty 设置 getter 和 setter，当触发getter的时候，observer则开始收集依赖，而触发setter的时候，observe 则触发notify。")])]),t._v(" "),e("h2",{attrs:{id:"vue2-virtual-dom"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue2-virtual-dom","aria-hidden":"true"}},[t._v("#")]),t._v(" Vue2 Virtual-dom")]),t._v(" "),e("h2",{attrs:{id:"vue2-dom-diff算法解析"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue2-dom-diff算法解析","aria-hidden":"true"}},[t._v("#")]),t._v(" Vue2 DOM-diff算法解析")]),t._v(" "),e("h2",{attrs:{id:"vue2-整体解析流程"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue2-整体解析流程","aria-hidden":"true"}},[t._v("#")]),t._v(" Vue2 整体解析流程")]),t._v(" "),e("h2",{attrs:{id:"vue运行时优化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#vue运行时优化","aria-hidden":"true"}},[t._v("#")]),t._v(" Vue运行时优化")]),t._v(" "),e("h2",{attrs:{id:"再见vue-前端技术框架选型"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#再见vue-前端技术框架选型","aria-hidden":"true"}},[t._v("#")]),t._v(" 再见Vue 前端技术框架选型")])])}],!1,null,null,null);a.default=r.exports}}]);