# ES5 Object重点API

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

## Object.getPrototypeOf

```js
//参数1：返回其原型的对象
//返回值：指定对象的原型（内部[[Prototype]]属性的值）；若没有继承属性，返回null
Object.getPrototypeOf(object)
```

## Object.defineProperty

```js
//参数1：要在其上定义属性的对象
//参数2：要定义或修改的属性的名称
//参数3：将被定义或修改的属性描述符
//返回值：直接在一个对象上定义一个新属性，或者修改一个对象的现有属性， 并返回这个对象
Object.defineProperty(obj, prop, descriptor)
```
**与通过赋值操作添加的普通属性的区别：**
* 普通属性是可枚举的（即for...in 或 Object.keys 方法），可改变，可删除
* Object.defineProperty方法允许修改默认的额外选项（或配置）。默认情况下，使用 Object.defineProperty() 添加的属性值是不可修改的。

### 创建属性

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

### 修改属性

如果属性已经存在，Object.defineProperty()将尝试根据描述符中的值以及对象当前的配置来修改这个属性。如果旧描述符将其configurable 属性设置为false，则该属性被认为是“不可配置的”，并且没有属性可以被改变（除了单向改变 writable 为 false）。当属性不可配置时，不能在数据和访问器属性类型之间切换。

当试图改变不可配置属性（除了value和writable 属性之外）的值时会抛出TypeError，除非当前值和新值相同。

* 当writable属性设置为false时，该属性被称为“不可写”。它不能被重新分配。
* enumerable定义了对象的属性是否可以在 for...in 循环和 Object.keys() 中被枚举。
* configurable特性表示对象的属性是否可以被删除，以及除value和writable特性外的其他特性是否可以被修改。

## Object.defineProperties

```js
//参数1：在其上定义或修改属性的对象
//参数2：要定义其可枚举属性或修改的属性描述符的对象。
//返回值：直接在一个对象上定义新的属性或修改现有属性，并返回该对象。
Object.defineProperties(obj, props)

var obj = {};
Object.defineProperties(obj, {
  'property1': {
    value: true,
    writable: true
  }
});
```

## Object.getOwnPropertyDescriptor

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

## Object.getOwnPropertyNames

```js
//参数1：一个对象，其自身的可枚举和不可枚举属性的名称被返回。
//返回值：返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性但不包括Symbol值作为名称的属性）组成的数组。
Object.getOwnPropertyNames(obj)
```

## Object.create

```js
//参数1：新创建对象的原型对象
//参数2：要添加到新创建对象的不可枚举（默认）属性（即其自身定义的属性，而不是其原型链上的枚举属性）对象的属性描述符以及相应的属性名称。
//接上！这些属性对应Object.defineProperties()的第二个参数。
//接上！如果propertiesObject参数是 null 或非原始包装对象，则抛出一个 TypeError 异常。
//返回值：创建一个新对象，使用现有的对象来提供新创建的对象的__proto__。
Object.create(proto[, propertiesObject])
```
应用：用 Object.create实现类式继承

## Object.seal

```js
//参数1：将要被密封的对象
//返回值：封闭一个对象，阻止添加新属性并将所有现有属性标记为不可配置。当前属性的值只要可写就可以改变。返回被密封对象的引用。
//接上！不可配置即不可删除，且数据属性不能被重新定义成访问器属性，反之亦然。但属性的值仍然可以修改
Object.seal(obj)
```
不会影响从原型链上继承的属性。但 __proto__ (  ) 属性的值也会不能修改。

## Object.freeze

```js
//参数1：要被冻结的对象
//返回值：一个被冻结的对象再也不能被修改；
//接上！冻结了一个对象则不能向这个对象添加新的属性，不能删除已有属性，不能修改该对象已有属性的可枚举性、可配置性、可写性，以及不能修改已有属性的值。
//接上！此外，冻结一个对象后该对象的原型也不能被修改。freeze() 返回和传入的参数相同的对象。
Object.freeze(obj)
```

## Object.preventExtensions

```js
//参数1：将要变得不可扩展的对象
//返回值：已经不可扩展的对象。也就是永远不能再添加新的属性。
Object.preventExtensions(obj)
```
**注意**：一般来说，不可扩展对象的属性可能仍然可被删除。

Object.preventExtensions()仅阻止添加自身的属性。但属性仍然可以添加到对象原型。

## Object.isSealed

```js
//参数1：被检查的对象
//返回值：给定对象是否被密封的一个Boolean
Object.isSealed(obj)
```

## Object.isFrozen

```js
//参数1：被检测的对象
//返回值：给定对象是否被冻结的Boolean
Object.isFrozen(obj)
```

## Object.isExtensible

```js
//参数1：需要检测的对象
//返回值：给定对象是否可扩展的一个Boolean
Object.isExtensible(obj)
```
Object.preventExtensions，Object.seal 或 Object.freeze 方法都可以标记一个对象为不可扩展。

## Object.keys

```js
//参数1：要返回其枚举自身属性的对象
//返回值：返回一个由一个给定对象的自身可枚举属性组成的数组，数组中属性名的排列顺序和使用 for...in 循环遍历该对象时返回的顺序一致
Object.keys(obj)
```
**注意**：在ES5里，如果此方法的参数不是对象（而是一个原始值），那么它会抛出 TypeError。在ES2015中，非对象的参数将被强制转换为一个对象。