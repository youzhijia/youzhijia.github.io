# Object重点API

## Object.prototype

表示 Object 的原型对象。只读、不可枚举、不可配置。

几乎所有的 JavaScript 对象都是 Object 的实例；一个典型的对象继承了Object.prototype的属性（包括方法），尽管这些属性可能被遮蔽（亦称为覆盖）。但是有时候可能**故意创建不具有典型原型链继承的对象**，比如通过**Object.create(null)**创建的对象，或者通过**Object.setPrototypeOf方法改变原型链**。

改变Object原型，会通过原型链改变**所有**对象；除非在原型链中进一步覆盖受这些变化影响的属性和方法。这提供了一个非常强大的、但有潜在危险的机制来覆盖或扩展对象行为。

## Object.prototype.constructor

返回创建实例对象的 Object 构造函数的引用。**注意**：此属性的值是对函数本身的引用，而不是一个包含函数名称的字符串。对原始类型来说，如1，true和"test"，该值只可读。

所有对象都会从它的原型上继承一个 constructor 属性。

## Object原型方法

### Object.prototype.hasOwnProperty（判断自有属性是否包含指定属性）

会返回一个布尔值，指示对象自身属性中是否具有指定的属性（也就是，是否有指定的键）。

```js
//参数1：要检测的属性的 String 字符串形式表示的名称，或者 Symbol
//返回值：用来判断某个对象是否含有指定的属性的布尔值 Boolean
obj.hasOwnProperty(prop)
```

所有继承了 Object 的对象都会继承到 hasOwnProperty 方法。这个方法可以用来检测一个对象是否含有特定的自身属性；和 in 运算符不同，该方法会**忽略掉那些从原型链上继承到的属性**。

即使属性的值是 null 或 undefined，只要属性存在，hasOwnProperty 依旧会返回 true。

示例：
* 判断属性是否存在
* 区别自身属性与继承属性
* 遍历一个对象的所有自身属性

### Object.prototype.isPrototypeOf（判断对象是否在另一对象的原型链上）

用于测试一个对象是否存在于另一个对象的原型链上。

注意：isPrototypeOf() 与 instanceof 运算符不同。在表达式 "object instanceof AFunction"中，object 的原型链是针对 AFunction.prototype 进行检查的，而不是针对 AFunction 本身。

```js
//参数1：在该对象的原型链上搜寻
//返回值：Boolean，表示调用对象是否在另一个对象的原型链上
//如果 prototypeObj 为 undefined 或 null，会抛出 TypeError
prototypeObj.isPrototypeOf(object)
```

### Object.prototype.propertyIsEnumerable（判断单个属性是否可枚举）

返回一个布尔值，表示指定的属性是否可枚举
```js
//参数1：需要测试的属性名
//返回值：用来表示指定的属性名是否可枚举的布尔值
obj.propertyIsEnumerable(prop)
```
此方法可以确定对象中指定的属性是否可以被 for...in 循环枚举，但是通过原型链继承的属性除外。如果对象没有指定的属性，则此方法返回 false。

### Object.prototype.toLocaleString

返回一个该对象的字符串表示。此方法被用于派生对象为了特定语言环境的目的（locale-specific purposes）而重载使用。
```js
//返回值：表示对象的字符串
obj.toLocaleString()
```

### Object.prototype.toString

返回一个表示该对象的字符串
```js
//返回值：一个表示该对象的字符串
obj.toString()
```
如果此方法在自定义对象中未被覆盖，toString() 返回 "[object type]"，其中 type 是对象的类型。

示例：
* 检查对象类型：Object.prototype.toString.call(obj)

### Object.prototype.valueOf

返回指定对象的原始值
```js
//返回值：该对象的原始值
obj.valueOf()
```

## Object对象方法——常用

### Object.create（创建）

创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。
```js
//参数1：新创建对象的原型对象
//参数2：要添加到新创建对象的不可枚举（默认）属性（即其自身定义的属性，而不是其原型链上的枚举属性）对象的属性描述符以及相应的属性名称。
//接上！这些属性对应Object.defineProperties()的第二个参数。
//接上！如果propertiesObject参数是 null 或非原始包装对象，则抛出一个 TypeError 异常。
//返回值：一个新对象，带着指定的原型对象和属性
Object.create(proto[, propertiesObject])
```
**应用**：用 Object.create实现类式继承

### Object.assign（浅拷贝）

用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。
```js
//参数1：目标对象
//参数2：源对象
//返回值：目标对象
Object.assign(target, ...sources)
```

如果目标对象中的属性具有**相同的键**，则属性将被源对象中的属性**覆盖**。后面的源对象的属性将类似地覆盖前面的源对象的属性。

Object.assign 方法**只会拷贝源对象自身的并且可枚举的属性**到目标对象。该方法使用源对象的[[Get]]和目标对象的[[Set]]，所以它会调用相关 getter 和 setter。因此，它分配属性，而不仅仅是复制或定义新的属性。如果合并源包含getter，这可能使其不适合将新属性合并到原型中。为了将属性定义（包括其可枚举性）复制到原型，应使用Object.getOwnPropertyDescriptor()和Object.defineProperty() 。

String类型和 Symbol 类型的属性都会被拷贝。

在出现错误的情况下，例如，如果属性不可写，会引发TypeError，如果在引发错误之前添加了任何属性，则可以更改target对象。

注意，Object.assign 不会在那些source对象值为 null 或 undefined 的时候抛出错误。

**实例和注意事项：**
* 复制对象
* 合并对象
* 浅拷贝：Object.assign()拷贝的是属性值。假如源对象的属性值是一个对象的引用，那么它也只指向那个引用。
* 拷贝 symbol 类型的属性
* 继承属性和不可枚举属性是不能拷贝的
* 原始类型会被包装，null 和 undefined 会被忽略。注意，只有字符串的包装对象才可能有自身可枚举属性。
* 异常会打断后续拷贝任务

### Object.is（判断两个值是否是相同值）

判断两个值是否是相同的值
```js
//参数1：第一个需要比较的值
//参数2：第二个需要比较的值
//返回值：表示两个参数是否相同的布尔值
Object.is(value1, value2)
```

Object.is() 判断两个值是否相同。如果下列任何一项成立，则两个值相同：

* 两个值都是 undefined
* 两个值都是 null
* 两个值都是 true 或者都是 false
* 两个值是由相同个数的字符按照相同的顺序组成的字符串
* 两个值指向同一个对象
* 两个值都是数字并且
    * 都是正零 +0
    * 都是负零 -0
    * 都是 NaN
    * 都是除零和 NaN 外的其它同一个数字

这种相等性判断逻辑和传统的 == 运算不同，== 运算符会对它两边的操作数做隐式类型转换（如果它们类型不同），然后才进行相等性比较，（所以才会有类似 "" == false 等于 true 的现象），但 Object.is 不会做这种类型转换。

这与 === 运算符的判定方式也不一样。=== 运算符（和== 运算符）将数字值 -0 和 +0 视为相等，并认为 Number.NaN 不等于 NaN。

## 属性描述符

两种主要形式：**数据描述符**和**存取描述符**。

**数据描述符**是一个具有值的属性，该值可能是可写的，也可能不是可写的。**存取描述符**是由getter-setter函数对描述的属性。描述符必须是这两种形式之一；不能同时是两者。

数据描述符和存取描述符均具有以下可选键值(默认值是在使用Object.defineProperty()定义属性的情况下)：

### configurable

当且仅当该属性的 configurable 为 true 时，该属性描述符才能够被改变，同时该属性也能从对应的对象上被删除。**默认为 false**。

### enumerable

当且仅当该属性的enumerable为true时，该属性才能够出现在对象的枚举属性中。**默认为 false**。

#### 数据描述符同时具有以下可选键值：

### value

该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）。**默认为 undefined**。

### writable

当且仅当该属性的writable为true时，value才能被赋值运算符改变。**默认为 false**。

#### 存取描述符同时具有以下可选键值：

### get

一个给属性提供 getter 的方法，如果没有 getter 则为 undefined。当访问该属性时，该方法会被执行，方法执行时没有参数传入，但是会传入this对象（由于继承关系，这里的this并不一定是定义该属性的对象）。

默认为 undefined。

### set

一个给属性提供 setter 的方法，如果没有 setter 则为 undefined。当属性值修改时，触发执行该方法。该方法将接受唯一参数，即该属性新的参数值。

默认为 undefined。

**如果一个描述符不具有value,writable,get 和 set 任意一个关键字，那么它将被认为是一个数据描述符。如果一个描述符同时有(value或writable)和(get或set)关键字，将会产生一个异常。**

**注意**：这些选项不一定是自身属性，如果是继承来的也要考虑。为了确认保留这些默认值，你可能要在这之前冻结 Object.prototype，明确指定所有的选项，或者通过 Object.create(null)将__proto__属性指向null。

## Object对象方法——原型

### Object.getPrototypeOf（获取对象原型）

```js
//参数1：返回其原型的对象
//返回值：指定对象的原型（内部[[Prototype]]属性的值）；若没有继承属性，返回null
Object.getPrototypeOf(object)

var reg = /a/;
Object.getPrototypeOf(reg) === RegExp.prototype; // true
```

在 ES5 中，如果参数不是一个对象类型，将抛出一个TypeError异常。在 ES2015 中，参数会被强制转换为一个 Object。

### Object.setPrototypeOf（设置对象原型）

设置一个指定的对象的原型 ( 即内部[[Prototype]]属性）到另一个对象或  null。

如果你关心性能，你应该**避免设置一个对象的 [[Prototype]]**。相反，你**应该使用 Object.create()**来创建带有你想要的[[Prototype]]的新对象。

```js
//参数1：要设置其原型的对象
//参数2：该对象的新原型(一个对象 或 null)
//返回值：指定对象的原型（内部[[Prototype]]属性的值）；若没有继承属性，返回null
Object.setPrototypeOf(obj, prototype)
```

如果对象的[[Prototype]]被修改成不可扩展(通过 Object.isExtensible()查看)，就会抛出 TypeError异常。如果prototype参数不是一个对象或者null(例如，数字，字符串，boolean，或者 undefined)，则什么都不做。否则，该方法将obj的[[Prototype]]修改为新的值。

## Object对象方法——属性/属性描述符

### Object.defineProperty（定义对象单个属性，参数2为属性名，参数3为属性描述符对象）

直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象。

在ES6中，由于 Symbol类型的特殊性，用Symbol类型的值来做对象的key与常规的定义或修改不同，而Object.defineProperty 是定义key为Symbol的属性的方法之一。

```js
//参数1：要在其上定义属性的对象
//参数2：要定义或修改的属性的名称
//参数3：将被定义或修改的属性描述符
//返回值：被传递给函数的对象
Object.defineProperty(obj, prop, descriptor)
```
**与通过赋值操作添加的普通属性的区别：**
* 普通属性是可枚举的（即for...in 或 Object.keys 方法），可改变，可删除
* Object.defineProperty方法允许修改默认的额外选项（或配置）。默认情况下，使用 Object.defineProperty() 添加的属性值是不可修改的。

#### 创建属性

如果对象中不存在指定的属性，Object.defineProperty()就创建这个属性。当描述符中省略某些字段时，这些字段将使用它们的默认值。拥有布尔值的字段的默认值都是false。value，get和set字段的默认值为undefined。一个没有get/set/value/writable定义的属性被称为“通用的”，并被“键入”为一个数据描述符。

```js
// 在对象中添加一个属性与数据描述符的示例
Object.defineProperty(o, "a", {
  value : 37,
  writable : true,
  enumerable : true,
  configurable : true
});

// 在对象中添加一个属性与存取描述符的示例
var bValue;
Object.defineProperty(o, "b", {
  get : function(){
    return bValue;
  },
  set : function(newValue){
    bValue = newValue;
  },
  enumerable : true,
  configurable : true
});
```

#### 修改属性

如果属性已经存在，Object.defineProperty()将尝试根据描述符中的值以及对象当前的配置来修改这个属性。如果旧描述符将其configurable 属性设置为false，则该属性被认为是“不可配置的”，并且没有属性可以被改变（除了单向改变 writable 为 false）。当属性不可配置时，不能在数据和访问器属性类型之间切换。

当试图改变不可配置属性（除了value和writable 属性之外）的值时会抛出TypeError，除非当前值和新值相同。

* 当writable属性设置为false时，该属性被称为“不可写”。它不能被重新分配。
* enumerable定义了对象的属性是否可以在 for...in 循环和 Object.keys() 中被枚举。
* configurable特性表示对象的属性是否可以被删除，以及除value和writable特性外的其他特性是否可以被修改。

### Object.defineProperties（批量定义对象属性，参数2为多个属性操作符对象）

直接在一个对象上定义新的属性或修改现有属性，并返回该对象。
```js
//参数1：在其上定义或修改属性的对象
//参数2：要定义其可枚举属性或修改的属性描述符的对象。
//返回值：传递给函数的对象
Object.defineProperties(obj, props)

var obj = {};
Object.defineProperties(obj, {
  'property1': {
    value: true,
    writable: true
  }
});
```
Object.defineProperties本质上定义了obj 对象上props的可枚举属性相对应的所有属性。

### Object.getOwnPropertyDescriptor（获取单个自有属性的属性描述符，参数2为属性名）

**自有属性**指的是直接赋予该对象的属性，不需要从原型链上进行查找的属性
```js
//参数1：需要查找的目标对象
//参数2：目标对象内属性名称
//返回值：返回指定对象上一个自有属性对应的属性描述符。否则返回 undefined。
Object.getOwnPropertyDescriptor(obj, prop)

var o = { bar: 42 };
var d = Object.getOwnPropertyDescriptor(o, "bar");
// d {
//   configurable: true,
//   enumerable: true,
//   value: 42,
//   writable: true
// }
```

**注意**：在 ES5 中，如果该方法的第一个参数不是对象（而是原始类型），那么就会产生出现 TypeError。而在 ES2015，第一个的参数不是对象的话就会被强制转换为对象。

### Object.getOwnPropertyDescriptors（获取所有自有属性描述符）

用来获取一个对象的所有自身属性的描述符。
```js
//参数：任意对象
//返回值：所指定对象的所有自身属性的描述符，如果没有任何自身属性，则返回空对象
Object.getOwnPropertyDescriptors(obj)
```

示例：
* 浅拷贝一个对象

Object.assign() 方法只能拷贝源对象的可枚举的自身属性，同时拷贝时无法拷贝属性的特性们，而且访问器属性会被转换成数据属性，也无法拷贝源对象的原型。

Object.getOwnPropertyDescriptors方法配合 Object.create() 方法可以实现上面说的这些。

```js
Object.create(
  Object.getPrototypeOf(obj), 
  Object.getOwnPropertyDescriptors(obj) 
);
```
* 创建子类

### Object.getOwnPropertyNames（获取自有属性名数组）

返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性但不包括Symbol值作为名称的属性）组成的数组。
```js
//参数1：一个对象，其自身的可枚举和不可枚举属性的名称被返回。
//返回值：在给定对象上找到的自身属性对应的字符串数组
Object.getOwnPropertyNames(obj)
```

在 ES5 中，如果参数不是一个原始对象类型，将抛出一个 TypeError  异常。在 ES2015 中，非对象参数被强制转换为对象 。

## 对象密封/冻结/不可扩展

#### Object.seal、Object.freeze、Object.preventExtensions区别

| 方法 | 禁止增加属性 | 禁止删除属性 | 禁止修改属性 |
|:-----|:-----|:-----|:-----|
| Object.seal | 是 | 是 | 否 |
| Object.freeze | 是 | 是 | 是 |
| Object.preventExtensions | 是 | 否 | 否 |

### Object.seal（密封）

```js
//参数1：将要被密封的对象
//返回值：封闭一个对象，阻止添加新属性并将所有现有属性标记为不可配置。当前属性的值只要可写就可以改变。返回被密封对象的引用。
//接上！不可配置即不可删除，且数据属性不能被重新定义成访问器属性，反之亦然。但属性的值仍然可以修改
Object.seal(obj)
```
不会影响从原型链上继承的属性。但 __proto__ (  ) 属性的值也会不能修改。

### Object.freeze（冻结）

```js
//参数1：要被冻结的对象
//返回值：一个被冻结的对象再也不能被修改；
//接上！冻结了一个对象则不能向这个对象添加新的属性，不能删除已有属性，不能修改该对象已有属性的可枚举性、可配置性、可写性，以及不能修改已有属性的值。
//接上！此外，冻结一个对象后该对象的原型也不能被修改。freeze() 返回和传入的参数相同的对象。
Object.freeze(obj)
```

### Object.preventExtensions（不可扩展）

```js
//参数1：将要变得不可扩展的对象
//返回值：已经不可扩展的对象。也就是永远不能再添加新的属性。
Object.preventExtensions(obj)
```
**注意**：一般来说，不可扩展对象的属性可能仍然可被删除。

Object.preventExtensions()仅阻止添加自身的属性。但属性仍然可以添加到对象原型。

### Object.isSealed（判断是否密封）

```js
//参数1：被检查的对象
//返回值：给定对象是否被密封的一个Boolean
Object.isSealed(obj)
```

### Object.isFrozen（判断是否冻结）

```js
//参数1：被检测的对象
//返回值：给定对象是否被冻结的Boolean
Object.isFrozen(obj)
```

### Object.isExtensible（判断是否不可扩展）

```js
//参数1：需要检测的对象
//返回值：给定对象是否可扩展的一个Boolean
Object.isExtensible(obj)
```
Object.preventExtensions，Object.seal 或 Object.freeze 方法都可以标记一个对象为不可扩展。

## 获取对象键/值组成的数组（参数是对象）

### Object.keys

```js
//参数1：要返回其枚举自身属性的对象
//返回值：返回一个由一个给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和使用 for...in 循环遍历该对象时返回的顺序一致
Object.keys(obj)
```
**注意**：在ES5里，如果此方法的参数不是对象（而是一个原始值），那么它会抛出 TypeError。在ES2015中，非对象的参数将被强制转换为一个对象。

### Object.values

返回一个给定对象自身的所有可枚举属性值的数组，值的顺序与使用for...in循环的顺序相同 ( 区别在于 for-in 循环枚举原型链中的属性 )。
```js
//参数1：被返回可枚举属性值的对象
//返回值：一个包含对象自身的所有可枚举属性值的数组
Object.values(obj)
```

### Object.entries

返回一个给定对象自身可枚举属性的键值对数组，其排列与使用 for...in 循环遍历该对象时返回的顺序一致（区别在于 for-in 循环还会枚举原型链中的属性）。
```js
//参数1：可以返回其可枚举属性的键值对的对象
//返回值：给定对象自身可枚举属性的键值对数组
Object.entries(obj)
```

实例：new Map() 构造函数接受一个可迭代的entries。借助Object.entries方法你可以很容易的将Object转换为Map。

### Object.fromEntries（entries 的反转）

把键值对列表转换为一个对象
```js
//参数1：可迭代对象，类似 Array 、 Map 或者其它实现了可迭代协议的对象
//返回值：一个由该迭代对象条目提供对应属性的新对象
Object.fromEntries(iterable)
```

Object.fromEntries() 是 Object.entries 的反转。

示例：
*  Map 转化为 Object
* Array 转化为 Object
* 对象转换