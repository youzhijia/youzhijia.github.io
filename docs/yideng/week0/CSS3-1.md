# CSS高级实用技巧【上】

> 9min开讲

## 双飞翼布局（圣杯布局）

position float 负边距 等高 盒子模型 清除浮动

### 大容器

~~大容器设置内边距，把左区和右区位置空出来。剩下三个区都被压缩在中间了。~~

* ④
* ~~padding-left:300px~~
* ~~padding-right:200px~~

为了等高

* ⑤
* overflow:hidden

### 中

* ①
* background:yellow

若中间是banner滚屏广告，需优先加载，所以放最上边；但会导致中和左右分行！！因为中是块级元素。

怎么解决👆？想让中部自适应满屏

* ②
* float:left
* width:100%

中区被覆盖，怎么解决？

尝试设置中区左侧内边距=左区的宽度，但会导致盒子被撑大！！因为padding占据盒子模型，margin不占据盒子模型；

所以要在中区内部增加一个div，设置内div的margin。

* ③
* ~~padding-left:300px~~

#### 中-子div（很重要）

* ③
* **margin-left:300px**（很重要）

### 左

* ①
* float:left
* background:orange
* width:300px（设置成浮动元素，若不设宽度，宽度为内容宽度）

把左区放到中区左边，左移距离=中区的宽度；但这样设置，会把中区覆盖一部分！！

* ②
* margin-left:-100%

~~把大容器空出来的区域补全！相对于自己，左移自己的宽度。~~

~~这样已经解决问题了，但是还是写的有点蠢。~~

* ④
* ~~position:relative~~
* ~~left:-300px~~

### 右

* ①
* ~~float:right~~
* background:blue
* width:200px

把右区浮动也改为left，左移距离=右区的距离。

* ②
* float:left
* margin-left:-200px

~~把大容器空出来的区域补全！相对于自己，右移自己的宽度。~~

* ④
* ~~position:relative~~
* ~~right:-200px~~

### 如何设置等高？

若左区高度很高，padding-bottom:9999px，那么盒子模型被拉高，怎么办？

中、左、右都设置假的等高！！然后在大容器设置overflow:hidden。

* ⑤
* padding-bottom:9999px
* margin-bottom:-9999px

## flex布局

[flex布局](../../accumulate/css/css-api-1.md#（4）flex布局)

## BFC（块级格式化上下文）

#### box

box是css布局基本单位，一个页面由很多box组成。元素的类型和display属性，决定了box的类型。不同类型的box，会参与不同的Formatting Context（一个决定如何渲染文档的容器），因此box内的元素会以不同的方式渲染。

#### block-level box

display属性为block，list-item，table的元素。参与Block Formatting Context。

#### inline-level box

display属性为inline，inline-block，inine-table的元素。参与Inline Formatting Context。

#### Formatting Context

是页面中的一块渲染区域，有一套渲染规则，决定了其子元素将如何定位，以及和其他元素的关系和相互作用。常见的是BFC，IFC。

### 哪些元素会生成BFC？

* 根元素
* float属性不为none
* position为absolute或fixed
* display为inline-block，table-cell，table-caption，flex，inline-flex
* overflow不为visible

### BFC布局规则

* 每个元素的margin box的左边，与包含块boder box的左边相接触（从左往右格式化的如此，否则相反），即使存在浮动也如此
* BFC的区域不会与float box重叠
* 计算BFC高度时，浮动元素也参与计算
* box垂直方向的距离由margin决定。属于同一个BFC的两个相邻box的margin会发生重叠

### BFC的应用场景（很多时候加overflow:hidden能解决问题）

* 自适应两栏布局
* 清除内部浮动（触发高度丢失的父元素生成BFC）
* 防止垂直margin重叠（其中一个生成新BFC）

### 总结

* BFC是页面上一个容器，容器里边的子元素不会影响到外面的元素

## IFC（内联格式化上下文）

### IFC布局规则

* line box（线框）高度由其包含行内元素中最高的实际高度计算而来，不受竖直方向的padding/margin影响

## GFC（网络布Gridlayout局格式化上下文）

## FFC（自适应格式flex化上下文）
