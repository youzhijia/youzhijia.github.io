# CSS高级使用技巧【下】

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