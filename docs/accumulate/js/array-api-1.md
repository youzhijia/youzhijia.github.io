# ES5 Array重点API

:heartpulse: 表示返回新数组，不改变老数组

:white_check_mark: 表示返回布尔值

:small_blue_diamond: 表示改变原数组

## Array对象方法

### Array.isArray :white_check_mark:

确定传递的值是否是一个 Array
```js
//参数1：需要检测的值
//返回值：如果值是 Array，则为true; 否则为false
Array.isArray(obj)

Array.isArray(Array.prototype) //Array.prototype 也是一个数组

//兼容
if (!Array.isArray) {
  Array.isArray = function(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
}
```
Array.isArray能检测iframes，所以优于 instanceof

### Array.from :heartpulse: 

从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例

* 伪数组对象（拥有一个 length 属性和若干索引属性的任意对象）
* 可迭代对象（可以获取对象中的元素,如 Map和 Set 等）

```js
//参数1：想要转换成数组的伪数组对象或可迭代对象
//参数2：如果指定了该参数，新数组中的每个元素会执行该回调函数
//参数3：执行回调函数 mapFn 时 this 对象
//返回值：一个新的数组实例
Array.from(arrayLike[, mapFn[, thisArg]])
//就相当于 Array.from(obj).map(mapFn, thisArg)
```

### Array.of :heartpulse: 

创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型

 Array.of() 和 Array 构造函数之间的区别在于处理整数参数：Array(7)（注意：这是指一个有7个空位(empty)的数组，而不是由7个undefined组成的数组）
```js
//参数1：任意个参数，将按顺序成为返回数组中的元素
//返回值：新的 Array 实例
Array.of(element0[, element1[, ...[, elementN]]])

Array.of(1, 2, 3);   // [1, 2, 3]

//兼容
if (!Array.of) {
  Array.of = function() {
    return Array.prototype.slice.call(arguments);
  };
}
```

#### Array.from和Array.of的异同

* 相同：都是将参数转换为新数组实例
* 不同：Array.from第一个参数是伪数组或可迭代对象，第二个可选参数是回调函数，而Array.of不考虑参数的数量或类型；

::: tip
Array原型上的方法，都可以在数组实例后以“.”方式直接调用
:::

## Array原型——常用方法

### Array.prototype.concat :heartpulse:

用于合并两个或多个数组。此方法不会更改现有数组，而是返回一个新数组。
```js
//参数1：将数组和/或值连接成新数组。如果省略了valueN参数参数，则concat会返回一个它所调用的已存在的数组的浅拷贝。
//返回值：新的 Array 实例
var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])
```

### Array.prototype.join

将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。如果数组只有一个项目，那么将返回该项目而不使用分隔符。
```js
//参数1：可选。指定一个字符串来分隔数组的每个元素。
//返回值：一个所有数组元素连接的字符串。如果 arr.length 为0，则返回空字符串
arr.join([separator])
```
参数：如果需要，将分隔符转换为字符串。如果缺省该值，数组元素用逗号（,）分隔。如果separator是空字符串("")，则所有元素之间都没有任何字符。

如果一个元素为 undefined 或 null，它会被转换为空字符串。

* 对象引用（而不是实际对象）：concat将对象引用复制到新数组中。 原始数组和新数组都引用相同的对象。 也就是说，如果引用的对象被修改，则更改对于新数组和原始数组都是可见的。 这包括也是数组的数组参数的元素。
* 数据类型如字符串，数字和布尔（不是String，Number 和 Boolean 对象）：concat将字符串和数字的值复制到新数组中。

### Array.prototype.flat :heartpulse:

按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。
```js
//参数1：指定要提取嵌套数组的结构深度，默认值为 1；
//接上！参数使用 Infinity，可展开任意深度的嵌套数组
//返回值：一个包含将数组与子数组中所有元素的新数组
var newArray = arr.flat([depth])
```
实例：扁平化嵌套数组

### Array.prototype.sort :small_blue_diamond:

用原地算法对数组的元素进行排序，并返回数组。默认排序顺序是在将元素转换为字符串，然后比较它们的UTF-16代码单元值序列时构建的

由于它取决于具体实现，因此无法保证排序的时间和空间复杂性。
```js
//参数1：用来指定按某种顺序进行排列的函数。如果省略，元素按照转换为的字符串的各个字符的Unicode位点进行排序。
//firstEl：第一个用于比较的元素
//secondEl：第二个用于比较的元素
//返回值：排序后的数组。请注意，数组已原地排序，并且不进行复制。
arr.sort([compareFunction])
```

## 非遍历——查找（返回索引/-1）

### Array.prototype.indexOf

```js
//参数1：要查找的元素
//参数2：开始查找的位置
//返回值：首个被找到的元素在数组中的索引位置; 若没有找到则返回 -1
arr.indexOf(searchElement[, fromIndex])
```
如果该索引值大于或等于数组长度，意味着不会在数组里查找，返回-1。如果参数中提供的索引值是一个负值，则将其作为数组末尾的一个抵消，即-1表示从最后一个元素开始查找，-2表示从倒数第二个元素开始查找 ，以此类推。 注意：如果参数中提供的索引值是一个负值，并不改变其查找顺序，查找顺序仍然是从前向后查询数组。如果抵消后的索引值仍小于0，则整个数组都将会被查询。其默认值为0

### Array.prototype.lastIndexOf

```js
//参数1：被查找的元素
//参数2：从此位置开始逆向查找
//返回值：数组中该元素最后一次出现的索引，如未找到返回-1
arr.lastIndexOf(searchElement[, fromIndex])
```
默认为数组的长度减 1(arr.length - 1)，即整个数组都被查找。如果该值大于或等于数组的长度，则整个数组会被查找。如果为负值，将其视为从数组末尾向前的偏移。即使该值为负，数组仍然会被从后向前查找。如果该值为负时，其绝对值大于数组长度，则方法返回 -1，即数组不会被查找。

### Array.prototype.includes :white_check_mark:（返回布尔值）

```js
//参数1：需要查找的元素值，区分大小写
//参数2：从fromIndex 索引处开始查找 valueToFind。如果为负值，则按升序从 array.length + fromIndex 的索引开始搜 （即使从末尾开始往前跳 fromIndex 的绝对值个索引，然后往后搜寻）。默认为 0。
//返回值：用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false。
arr.includes(valueToFind[, fromIndex])
```

如果 fromIndex 大于等于数组的长度，则会返回 false，且该数组不会被搜索。

如果 fromIndex 为负值，计算出的索引将作为开始搜索searchElement的位置。如果计算出的索引小于 0，则整个数组都会被搜索。

includes() 方法有意设计为通用方法。它不要求this值是数组对象，所以它可以被用于其他类型的对象 (比如类数组对象)。下面的例子展示了 在函数的 arguments 对象上调用的 includes() 方法。

```js
(function() {
  console.log([].includes.call(arguments, 'a')); // true
  console.log([].includes.call(arguments, 'd')); // false
})('a','b','c');
```

## 遍历类——查找（返回元素或索引/-1）

### Array.prototype.find 

```js
//参数1：在数组每一项上执行的函数，接收 3 个参数：
//element：当前遍历到的元素
//index：当前遍历到的索引
//array：数组本身
//参数2：执行回调时用作this 的对象
//返回值：数组中第一个满足所提供测试函数的元素的值，否则返回 undefined
arr.find(callback[, thisArg])
```

find方法对数组中的每一项元素执行一次 callback 函数，直至有一个 callback 返回 true。当找到了这样一个元素后，该方法会立即返回这个元素的值，否则返回 undefined。注意 callback 函数会为数组中的每个索引调用即从 0 到 length - 1，而不仅仅是那些被赋值的索引，这意味着对于稀疏数组来说，该方法的效率要低于那些只遍历有值的索引的方法。

如果提供了 thisArg参数，那么它将作为每次 callback函数执行时的this ，如果未提供，则使用 undefined。

另请参见  findIndex() 方法，它返回数组中找到的元素的索引，而不是其值。

如果你需要找到一个元素的位置或者一个元素是否存在于数组中，使用Array.prototype.indexOf() 或 Array.prototype.includes()。

### Array.prototype.findIndex

```js
//参数1：针对数组中的每个元素, 都会执行该回调函数, 执行时会自动传入下面三个参数:
//element：当前遍历到的元素
//index：当前遍历到的索引
//array：数组本身
//参数2：可选。执行callback时作为this对象的值
//返回值： 数组中通过提供测试函数的第一个元素的索引。否则，返回-1
arr.findIndex(callback[, thisArg])
```

#### find、findIndex的异同

* 相同：二者参数一样，都是查找数组元素
* 不同：返回值不同，find返回查找到的元素/undefined，findIndex返回查找到的元素索引/-1

#### findIndex、indexOf的异同

* 相同：二者返回值一样，都是返回查找到的元素索引/-1
* 不同：参数不同，findIndex参数是回调函数和this，indexOf参数是元素和开始索引

## 遍历类——遍历计算（返回新数组）

### Array.prototype.forEach （返回undefined）

```js
//参数1：为数组中每个元素执行的函数，该函数接收三个参数：
//currentValue：当前正在数组中处理的元素
//index：数组中正在处理的当前元素的索引
//array：被调用的 map 数组
//参数2：当执行回调函数 callback 时，用作 this 的值
//返回值：undefined
arr.forEach(callback(currentValue [, index [, array]])[, thisArg]);
```

forEach() 为每个数组元素执行一次 callback 函数；与 map() 或者 reduce() 不同的是，它总是返回 undefined 值，并且不可链式调用。其典型用例是在一个调用链的最后执行副作用（side effects，函数式编程上，指函数进行 返回结果值 以外的操作）。

**注意**： 除了抛出异常以外，没有办法中止或跳出 forEach() 循环。如果你需要中止或跳出循环，forEach() 方法不是应当使用的工具。

### Array.prototype.map :heartpulse:

```js
//参数1：生成新数组元素的函数，使用三个参数：
//currentValue：正在处理的当前元素
//index：当前元素的索引
//array：map 方法调用的数组
//参数2：执行 callback 函数时值被用作this
//返回值：回调函数的结果组成了新数组的每一个元素
var new_array = arr.map(function callback(currentValue[, index[, array]]) {
 // Return element for new_array 
}[, thisArg])
```

map 方法会给原数组中的每个元素都按顺序调用一次  callback 函数。callback 每次执行后的返回值（包括 undefined）组合起来形成一个新数组。 callback 函数只会在有值的索引上被调用；那些从来没被赋过值或者使用 delete 删除的索引则不会被调用。

因为map生成一个新数组，当你不打算使用返回的新数组却使用map是违背设计初衷的，请用forEach或者for-of替代。

如果被map调用的数组是离散的，新数组将也是离散的保持相同的索引为空。

### Array.prototype.flatMap :heartpulse:

首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。它与 map 连着深度值为1的 flat 几乎相同，但 flatMap 通常在合并成一种方法的效率稍微高一些。
```js
//参数1：可以生成一个新数组中的元素的函数，可以传入三个参数：
//currentValue：当前正在数组中处理的元素
//index：数组中正在处理的当前元素的索引
//array：被调用的 map 数组
//参数2：执行 callback 函数时 使用的this 值
//返回值：一个新的数组，其中每个元素都是回调函数的结果，并且结构深度 depth 值为1。
var new_array = arr.flatMap(function callback(currentValue[, index[, array]]) {
    // return element for new_array
}[, thisArg])
```

## 遍历类——过滤（返回新数组）

### Array.prototype.filter :heartpulse:

filter 不会改变原数组，它返回**过滤**后的新数组。

```js
//参数1：用来测试数组的每个元素的函数。返回 true 表示该元素通过测试，保留该元素，false 则不保留。它接受以下三个参数：
//element：数组中当前正在处理的元素
//index：正在处理的元素在数组中的索引
//array：调用了 filter 的数组本身
//参数2：执行 callback 时，用于 this 的值
//返回值：一个新的、由通过测试的元素组成的数组，如果没有任何数组元素通过测试，则返回空数组
var newArray = arr.filter(callback(element[, index[, array]])[, thisArg])
```

如果为 filter 提供一个 thisArg 参数，则它会被作为 callback 被调用时的 this 值。否则，callback 的 this 值在非严格模式下将是全局对象，严格模式下为 undefined。callback 函数最终观察到的 this 值是根据通常函数所看到的 "this"的规则确定的。

## 遍历类——验证（返回布尔值）

### Array.prototype.every :white_check_mark:

测试一个数组内的**所有**元素是否都能通过某个指定函数的测试。它返回一个布尔值。

```js
//参数1：用来测试每个元素的函数。包括三个参数：
//element：用于测试的当前值
//index：用于测试的当前值的索引
//array：调用 every 的当前数组
//参数2：执行 callback 时使用的 this 值
//返回值：如果回调函数的每一次返回都为 truthy 值，返回 true ，否则返回 false。
arr.every(callback[, thisArg])
```

every 方法为数组中的每个元素执行一次 callback 函数，直到它找到一个会使 callback 返回 falsy 的元素。如果发现了一个这样的元素，every 方法将会立即返回 false。否则，callback 为每一个元素返回 true，every 就会返回 true。callback 只会为那些已经被赋值的索引调用。不会为那些被删除或从未被赋值的索引调用。

如果为 every 提供一个 thisArg 参数，则该参数为调用 callback 时的 this 值。如果省略该参数，则 callback 被调用时的 this 值，在非严格模式下为全局对象，在严格模式下传入 undefined。

every 遍历的元素范围在第一次调用 callback 之前就已确定了。在调用 every 之后添加到数组中的元素不会被 callback 访问到。如果数组中存在的元素被更改，则他们传入 callback 的值是 every 访问到他们那一刻的值。那些被删除的元素或从来未被赋值的元素将不会被访问到。

every 和数学中的"所有"类似，当所有的元素都符合条件才会返回true。正因如此，若传入一个空数组，无论如何都会返回 true。（这种情况属于无条件正确：正因为一个空集合没有元素，所以它其中的所有元素都符合给定的条件。)

### Array.prototype.some :white_check_mark:

测试数组中是不是至少有1个元素通过了被提供的函数测试。它返回的是一个Boolean类型的值。

注意：如果用一个空数组进行测试，在任何情况下它返回的都是false。

```js
//参数1：用来测试每个元素的函数，接受三个参数：
//element：用于测试的当前值
//index：用于测试的当前值的索引
//array：调用 every 的当前数组
//参数2：执行 callback 时使用的 this 值
//返回值：数组中有至少一个元素通过回调函数的测试就会返回true；所有元素都没有通过回调函数的测试返回值才会为false。
arr.some(callback(element[, index[, array]])[, thisArg])
```

some() 为数组中的每一个元素执行一次 callback 函数，直到找到一个使得 callback 返回一个“真值”（即可转换为布尔值 true 的值）。如果找到了这样一个值，some() 将会立即返回 true。否则，some() 返回 false。callback 只会在那些”有值“的索引上被调用，不会在那些被删除或从来未被赋值的索引上调用。

## 遍历类——累计（返回累计值）

### Array.prototype.reduce

对数组中的每个元素执行一个由您提供的reducer函数(升序执行)，将其结果汇总为单个返回值。
```js
//参数1：执行数组中每个值 (如果没有提供 initialValue则第一个值除外)的函数，包含四个参数：
//Accumulator：累计器累计回调的返回值; 它是上一次调用回调时返回的累积值，或initialValue
//Current Value：当前值
//Current Index：当前索引。 如果提供了initialValue，则起始索引号为0，否则从索引1起始。
//Source Array：原数组
//参数2：作为第一次调用 callback函数时的第一个参数的值。 如果没有提供初始值，则将使用数组中的第一个元素。 
//接上！在没有初始值的空数组上调用 reduce 将报错。
//返回值：函数累计处理的结果
arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])
```

回调函数第一次执行时，accumulator 和currentValue的取值有两种情况：如果调用reduce()时提供了initialValue，accumulator取值为initialValue，currentValue取数组中的第一个值；如果没有提供 initialValue，那么accumulator取数组中的第一个值，currentValue取数组中的第二个值。

**注意**：如果没有提供initialValue，reduce 会从索引1的地方开始执行 callback 方法，跳过第一个索引。如果提供initialValue，从索引0开始。

如果数组为空且没有提供initialValue，会抛出TypeError 。如果数组仅有一个元素（无论位置如何）并且没有提供initialValue， 或者有提供initialValue但是数组为空，那么此唯一值将被返回并且callback不会被执行。

提供初始值通常更安全。

### Array.prototype.reduceRight

```js
//参数1：一个回调函数，用来操作数组中的每个元素，包含四个参数：
//Accumulator：累计器累计回调的返回值; 它是上一次调用回调时返回的累积值，或initialValue
//Current Value：当前值
//Current Index：当前索引。 
//Source Array：原数组
//参数2：值用作回调的第一次调用的累加器。如果未提供初始值，则将使用并跳过数组中的最后一个元素。
//接上！在没有初始值的空数组上调用reduce或reduceRight就会创建一个TypeError。 
//返回值：函数累计处理的结果
arr.reduceRight(callback(accumulator, currentValue[, index[, array]])[, initialValue])
```

首次调用回调函数时，accumulator 和 currentValue 可以是两个值之一。如果调用 reduceRight 时提供了 initialValue 参数，则 accumulator等于 initialValue，currentValue 等于数组中的最后一个值。如果没有提供 initialValue 参数，则 accumulator 等于数组最后一个值， currentValue 等于数组中倒数第二个值。

## 获取数组键/值组成的数组（无参数）

### Array.prototype.keys :heartpulse:

返回一个包含数组中每个索引键的Array Iterator对象
```js
//无参数
//返回值：一个新的 Array 迭代器对象
arr.keys()
```

### Array.prototype.values :heartpulse:

返回一个新的 Array Iterator 对象，该对象包含数组每个索引的值
```js
//无参数
//返回值：一个新的 Array 迭代对象
arr.values()
```

### Array.prototype.entries :heartpulse:

返回一个新的Array Iterator对象，该对象包含数组中每个索引的键/值对。
```js
//无参数
//返回值：一个新的 Array 迭代器对象。Array Iterator是对象，它的原型（__proto__:Array Iterator）上有一个next方法，可用用于遍历迭代器取得原数组的[key,value]。
arr.entries()

const array1 = ['a', 'b', 'c'];
const iterator1 = array1.entries();
console.log(iterator1.next().value);
// expected output: Array [0, "a"]
console.log(iterator1.next().value);
// expected output: Array [1, "b"]
```

## 改变原数组----------------

### Array.prototype.splice :small_blue_diamond: 任意位置添加删除（返回删除的元素/空数组）

通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。

```js
//参数1：指定修改的开始位置（从0计数）
//参数2：整数，表示要移除的数组元素的个数
//参数3：要添加进数组的元素,从start 位置开始。如果不指定，则 splice() 将只删除数组元素。
//返回值：由被删除的元素组成的一个数组。如果只删除了一个元素，则返回只包含一个元素的数组。如果没有删除元素，则返回空数组。
array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
```

start参数：如果超出了数组的长度，则从数组末尾开始添加内容；如果是负值，则表示从数组末位开始的第几位（从-1计数，这意味着-n是倒数第n个元素并且等价于array.length-n）；如果负数的绝对值大于数组的长度，则表示开始位置为第0位。

deleteCount参数：如果 deleteCount 大于 start 之后的元素的总数，则从 start 后面的元素都将被删除（含第 start 位）。如果 deleteCount 被省略了，或者它的值大于等于array.length - start(也就是说，如果它大于或者等于start之后的所有元素的数量)，那么start之后数组的所有元素都会被删除。如果 deleteCount 是 0 或者负数，则不移除元素。这种情况下，至少应添加一个新元素。

### Array.prototype.unshift :small_blue_diamond: 头部-添加（返回length）

将一个或多个元素添加到数组的开头，并返回该数组的新长度(该方法修改原有数组)。

```js
//参数1：要添加到数组开头的元素或多个元素
//返回值：当一个对象调用该方法时，返回其 length 属性值。
arr.unshift(element1, ..., elementN)
```

**注意**：如果传入多个参数，它们会被以块的形式插入到对象的开始位置，它们的顺序和被作为参数传入时的顺序一致。 于是，传入多个参数调用一次 unshift ，和传入一个参数调用多次 unshift (例如，循环调用)，它们将得到不同的结果。

### Array.prototype.shift :small_blue_diamond:  头部-删除（返回删的元素值）

从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。
```js
//无参数
//返回值：从数组中删除的元素; 如果数组为空则返回undefined 。
arr.shift()
```
shift 方法移除索引为 0 的元素(即第一个元素)，并返回被移除的元素，其他元素的索引值随之减 1。如果 length 属性的值为 0 (长度为 0)，则返回 undefined。

shift 方法并不局限于数组：这个方法能够通过 call 或 apply 方法作用于类似数组的对象上。但是对于没有 length 属性（从0开始的一系列连续的数字属性的最后一个）的对象，调用该方法可能没有任何意义。

### Array.prototype.push :small_blue_diamond: 尾部-添加（返回length）

将一个或多个元素**添加**到数组的**末尾**，并返回该数组的新长度
```js
//参数1：被添加到数组末尾的元素
//返回值：当调用该方法时，新的 length 属性值将被返回
arr.push(element1, ..., elementN)
```

push 方法具有通用性。该方法和 call() 或 apply() 一起使用时，可应用在类似数组的对象上。push 方法根据 length 属性来决定从哪里开始插入给定的值。如果 length 不能被转成一个数值，则插入的元素索引为 0，包括 length 不存在时。当 length 不存在时，将会创建它。

### Array.prototype.pop :small_blue_diamond: 尾部-删除（返回删的元素值）

从数组中**删除最后一个元素**，并返回该元素的值。此方法更改数组的长度。
```js
//无参数
//返回值：从数组中删除的元素(当数组为空时返回undefined)
arr.pop()
```
pop 方法有意具有通用性。该方法和 call() 或 apply() 一起使用时，可应用在类似数组的对象上。pop方法根据 length属性来确定最后一个元素的位置。如果不包含length属性或length属性不能被转成一个数值，会将length置为0，并返回undefined。

### Array.prototype.copyWithin :small_blue_diamond: 复制替换

```js
//参数1：0 为基底的索引，复制序列到该位置。如果是负数，target 将从末尾开始计算。
//接上！如果 target 大于等于 arr.length，将会不发生拷贝。
//接上！如果 target 在 start 之后，复制的序列将被修改以符合 arr.length。
//参数2：0 为基底的索引，开始复制元素的起始位置。如果是负数，start 将从末尾开始计算。
//接上！如果 start 被忽略，copyWithin 将会从0开始复制。
//参数3：0 为基底的索引，开始复制元素的结束位置。copyWithin 将会拷贝到该位置，但不包括 end 这个位置的元素。如果是负数， end 将从末尾开始计算。
//接上！如果 end 被忽略，copyWithin 方法将会一直复制至数组结尾（默认为 arr.length）
//返回值：改变后的数组。
arr.copyWithin(target[, start[, end]])
```
 
### Array.prototype.fill :small_blue_diamond: 填充

用一个固定值**填充**一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。

```js
//参数1：用来填充数组元素的值
//参数2：起始索引，默认值为0
//参数3：终止索引，默认值为 this.length
//返回值：修改后的数组
arr.fill(value[, start[, end]])
```

如果 start 是个负数, 则开始索引会被自动计算成为 length+start, 其中 length 是 this 对象的 length 属性值。如果 end 是个负数, 则结束索引会被自动计算成为 length+end。

fill 方法故意被设计成通用方法, 该方法不要求 this 是数组对象。

fill 方法是个可变方法, 它会改变调用它的 this 对象本身, 然后返回它, 而并不是返回一个副本。

当一个对象被传递给 fill方法的时候, 填充数组的是这个对象的引用。

### Array.prototype.reverse :small_blue_diamond: 颠倒

将数组中元素的位置颠倒，并返回该数组。数组的第一个元素会变成最后一个，数组的最后一个元素变成第一个。该方法会改变原数组。
```js
//无参数
//返回值：颠倒后的数组
arr.reverse()
```

## 提取子元素

### Array.prototype.slice :heartpulse:

返回一个新的数组对象，这一对象是一个由 begin 和 end 决定的原数组的浅拷贝（包括 begin，不包括end）。原始数组不会被改变。
```js
//参数1：提取起始处的索引（从 0 开始），从该索引开始提取原数组元素。
//参数2：提取终止处的索引（从 0 开始），在该索引处结束提取原数组元素。
//返回值：一个含有被提取元素的新数组。
arr.slice([begin[, end]])
```
begin参数：如果该参数为负数，则表示从原数组中的倒数第几个元素开始提取，slice(-2) 表示提取原数组中的倒数第二个元素到最后一个元素（包含最后一个元素）。如果省略 begin，则 slice 从索引 0 开始。如果 begin 大于原数组的长度，则会返回空数组。

end参数：如果该参数为负数， 则它表示在原数组中的倒数第几个元素结束抽取。 slice(-2,-1) 表示抽取了原数组中的倒数第二个元素到最后一个元素（不包含最后一个元素，也就是只有倒数第二个元素）。如果 end 被省略，则 slice 会一直提取到原数组末尾。如果 end 大于数组的长度，slice 也会一直提取到原数组末尾。

slice 会提取原数组中索引从 begin 到 end 的所有元素（包含 begin，但不包含 end）。

slice 不会修改原数组，只会返回一个浅复制了原数组中的元素的一个新数组。原数组的元素会按照下述规则拷贝：

* 如果该元素是个对象引用 （不是实际的对象），slice 会拷贝这个对象引用到新的数组里。两个对象引用都引用了同一个对象。如果被引用的对象发生改变，则新的和原来的数组中的这个元素也会发生改变。
* 对于字符串、数字及布尔值来说（不是 String、Number 或者 Boolean 对象），slice 会拷贝这些值到新的数组里。在别的数组里修改这些字符串或数字或是布尔值，将不会影响另一个数组。

如果向两个数组任一中添加了新元素，则另一个不会受到影响。

## 数组 转 字符串（返回字符串）

### Array.prototype.toLocaleString

返回一个字符串表示数组中的元素。数组中的元素将使用各自的 toLocaleString 方法转成字符串，这些字符串将使用一个特定语言环境的字符串（例如一个逗号 ","）隔开。
```js
//参数1：带有BCP 47语言标记的字符串或字符串数组
//参数2：一个可配置属性的对象，对于数字 Number.prototype.toLocaleString()，对于日期Date.prototype.toLocaleString().
//返回值：表示数组元素的字符串
arr.toLocaleString([locales[,options]]);
```

### Array.prototype.toString

```js
//无参数
//返回值：一个表示指定的数组及其元素的字符串
arr.toString()
```
Array对象覆盖了Object的 toString 方法。对于数组对象，toString 方法连接数组并返回一个字符串，其中包含用逗号分隔的每个数组元素。

当一个数组被作为文本值或者进行字符串连接操作时，将会自动调用其 toString 方法。