# ES5新增语法

## 严格模式

在js文件或函数的顶部添加“use strict”即可启用严格模式。

* 未声明的变量赋值抛出一个ReferenceError，而不是创建一个全局变量
* 不止一次对对象字面量分配相同的属性会抛出SyntaxError
* 使用with语句抛出SyntaxError

### 严格模式的限制

#### 