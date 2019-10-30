# css重点API 1~10

## （1）box-sizing

作用：box-sizing 定义了用户应该如何计算一个元素的总宽度和总高度。

| 属性值 | 描述 |
|:-----|:-----|
| content-box（默认） | 标准盒模型 <br><br> width = 内容的宽度 <br><br> height = 内容的高度 |
| border-box | IE盒模型 <br><br> width = 内容宽度 + border + padding <br><br> height = border + padding + 内容的高度 |

## （2）position

作用：position 属性用于指定一个元素在文档中的定位方式。top，right，bottom 和 left 属性则决定了该元素的最终位置。

| 属性值 | 描述 |
|:-----|:-----|
| static | 指定元素使用正常的布局行为，即元素在文档常规流中当前的布局位置。<br><br> *注意*：此时 top, right, bottom, left 和 z-index 属性无效。 |
| relative | 元素先放置在未添加定位时的位置（**相对于原文档流位置**），再在不改变页面布局的前提下调整元素位置（因此会在此元素未添加定位时所在位置留下空白），不影响其他元素的偏移。<br><br> *注意*：position:relative 对 table-*-group, table-row, table-column, table-cell, table-caption 元素无效。 |
| absolute | 不为元素预留空间，通过指定元素**相对于最近的非 static 定位祖先元素**的偏移，来确定元素位置。当这样的祖先元素不存在时，则**相对于ICB**（inital container block, **初始包含块**）。<br><br> *注意*：绝对定位的元素可以设置外边距（margins），且不会与其他边距合并。 |
| fixed | 不为元素预留空间，而是通过指定元素**相对于屏幕视口（viewport）的位置**来指定元素位置。元素的位置在屏幕滚动时不会改变。<br><br> 打印时，元素会出现在的每页的固定位置。fixed 属性会创建新的层叠上下文。<br><br> *注意*：当元素祖先的 transform  属性非 none 时，容器由视口改为该祖先。 |
| sticky | 盒位置根据正常流计算(这称为正常流动中的位置)，然后**相对于该元素在流中的 flow root（BFC）和 containing block（最近的块级祖先元素）定位**。<br><br> 在所有情况下（即便被定位元素为 table 时），该元素定位均不对后续元素造成影响。当元素 B 被粘性定位时，后续元素的位置仍按照 B 未定位时的位置来确定。<br><br> *注意*：position: sticky 对 table 元素的效果与 position: relative 相同。 |

### 粘性定位（sticky）

粘性定位可以被认为是**相对定位和固定定位的混合**。元素在跨越特定阈值前为相对定位，之后为固定定位。

*注意*：须指定 top, right, bottom 或 left 四个阈值其中之一，才可使粘性定位生效。否则其行为与相对定位相同。

```css
#one { position: sticky; top: 10px; }
```

在 viewport 视口滚动到元素 top 距离小于 10px 之前，元素为相对定位。之后，元素将固定在与顶部距离 10px 的位置，直到 viewport 视口回滚到阈值以下。

粘性定位常用于定位字母列表的头部元素。

## （3）display

作用：为显示CSS属性设置**是否将元素视为块或内联元素**以及用于**其子元素的布局**，例如grid或flex。

display 属性指定了元素的显示类型，它包含两类基础特征，用于指定元素怎样生成盒模型——**外部显示类型**定义了元素怎样参与流式布局的处理，**内部显示类型**定义了元素内子元素的布局方式。

### 外部显示类型（display-outside）

实际上就是其在流式布局中的角色

| 属性值 | 描述 |
|:-----|:-----|
| block | 若不指定宽高，默认会继承父元素的宽度，并且独占一行，高度一般以子元素撑开的高度为准，当然也可以自己设置宽度和高度 |
| inline | 设置了该属性之后设置高度、宽度都无效，同时text-align属性设置也无效，但是设置了line-height会让inline元素居中 |
| run-in |  |

### 内部显示类型（display-inside）

定义了布局元素内部内容的方式

| 属性值 | 描述 |
|:-----|:-----|
| flow |  |
| flow-root |  |
| table | table 此元素会作为块级表格来显示（类似table），表格前后带有换行符。CSS表格能够解决所有那些我们在使用绝对定位和浮动定位进行多列布局时所遇到的问题。使用基于表格的CSS布局，使我们能够轻松定义一个单元格的边界、背景等样式， 而不会产生因为使用了table那样的制表标签所导致的语义化问题。利用table的特性，我们能够轻易的实现三栏布局，并且能够兼容IE8 |
| flex | 弹性布局属性。<br><br> *注意*：子元素的float、clear和vertical-align属性将失效 |
| grid |  |
| ruby |  |

### （display-listitem）

将这个元素的外部显示类型变为 block 盒，并将内部显示类型变为多个 list-item inline 盒

| 属性值 | 描述 |
|:-----|:-----|
| list-item | 默认会把元素作为列表显示，要完全模仿列表的话还需要加上 list-style-position，list-style-type |

### （display-internal）

像 table 和 ruby 这样的布局模型有着复杂的内部结构，因此它们的子元素可能扮演着不同的角色。这一类关键字就是用来定义这些“内部”显示类型，并且只有在这些特定的布局模型中才有意义。

| 属性值 | 描述 |
|:-----|:-----|
| table-row-group |  |
| table-header-group |  |
| table-footer-group |  |
| table-row |  |
| table-cell |  |
| table-column-group |  |
| table-column |  |
| table-caption |  |
| ruby-base |  |
| ruby-text |  |
| ruby-base-container |  |
| ruby-text-container |  |

### （display-box）

决定元素是否使用盒模型

| 属性值 | 描述 |
|:-----|:-----|
| contents |  |
| none | 不会占据空间，也无法显示，相当于该元素不存在 |

### （display-legacy）

允许使用单个关键字达到相同效果

| 属性值 | 描述 |
|:-----|:-----|
| inline-block | 既具有block的宽高特性又具有inline的同行元素特性。 通过inline-block结合text-align: justify 还可以实现固定宽高的列表两端对齐布局 |
| inline-table |  |
| inline-flex |  |
| inline-grid |  |

### （Global）

| 属性值 | 描述 |
|:-----|:-----|
| inherit |  |
| initial |  |
| unset |  |

## （4）flex布局

Flex 意为"弹性布局"，用来为盒状模型提供最大的灵活性。

任何一个容器（包括行内元素）都可以指定为 Flex 布局。Webkit 内核的浏览器，必须加上-webkit前缀。

**注意**：设为 Flex 布局以后，子元素的float、clear和vertical-align属性将失效。

Flex 容器默认存在两根轴：水平的主轴（main axis）和垂直的交叉轴（cross axis）。项目（子元素/容器成员）默认沿主轴排列。

### 容器属性

| 属性值 | 描述 |
|:-----|:-----|
| flex-direction | 决定**主轴的方向**（即项目的排列方向）<br><br> row（默认值）：主轴为水平方向，起点在左端➡️ <br> row-reverse：主轴为水平方向，起点在右端⬅️ <br> column：主轴为垂直方向，起点在上沿⬇️ <br> column-reverse：主轴为垂直方向，起点在下沿⬆️ |
| flex-wrap | 默认情况下，项目都排在一条线（又称”轴线”）上。flex-wrap属性定义，如果**一条轴线排不下，如何换行**。<br><br> nowrap（默认）：不换行 <br> wrap：换行，第一行在上方 <br> wrap-reverse：换行，第一行在下方  |
| flex-flow | 属性是**flex-direction属性和flex-wrap属性的简写**，默认值为row nowrap |
| justify-content | **项目在主轴上的对齐方式** <br><br> flex-start（默认值）：左对齐 <br>  flex-end：右对齐<br> center： 居中 <br> space-between：两端对齐，项目之间的间隔都相等 <br> space-around：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍 |
| align-items | **项目在交叉轴上的对齐方式** <br><br> flex-start：交叉轴的起点对齐 <br> flex-end：交叉轴的终点对齐 <br> center：交叉轴的中点对齐 <br> baseline: 项目的第一行文字的基线对齐 <br> stretch（默认值）：如果项目未设置高度或设为auto，将占满整个容器的高度 |
| align-content | **多根轴线的对齐方式**。如果项目只有一根轴线，该属性不起作用 <br><br> flex-start：与交叉轴的起点对齐 <br> flex-end：与交叉轴的终点对齐 <br> center：与交叉轴的中点对齐 <br> space-between：与交叉轴两端对齐，轴线之间的间隔平均分布 <br> space-around：每根轴线两侧的间隔都相等。所以，轴线之间的间隔比轴线与边框的间隔大一倍 <br> stretch（默认值）：轴线占满整个交叉轴 |

### 项目属性

| 属性值 | 描述 |
|:-----|:-----|
| order | **项目的排列顺序**。数值越小，排列越靠前，默认为0 <br><br> 值是整数 |
| flex-grow | **项目的放大比例**，默认为0，即如果存在剩余空间，也不放大 <br><br> 如果所有项目的flex-grow属性都为1，则它们将等分剩余空间（如果有的话）。如果一个项目的flex-grow属性为2，其他项目都为1，则前者占据的剩余空间将比其他项多一倍 |
| flex-shrink | **项目的缩小比例**，默认为1，即如果空间不足，该项目将缩小 <br><br> 如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。 |
| flex-basis | **在分配多余空间之前，项目占据的主轴空间**（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小 <br><br> 它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间 |
| flex | 属性是**flex-grow, flex-shrink 和 flex-basis的简写**，默认值为0 1 auto。后两个属性可选 <br><br>  该属性有两个快捷值：auto (1 1 auto) 和 none (0 0 auto)。<br> 建议优先使用这个属性，而不是单独写三个分离的属性，因为浏览器会推算相关值。 |
| align-self | 属性**允许单个项目有与其他项目不一样的对齐方式**，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch <br><br> 该属性可能取6个值，除了auto，其他都与align-items属性完全一致 auto/flex-start/flex-end/center/baseline/stretch |

[Flex 语法](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

[Flex 实例](http://www.ruanyifeng.com/blog/2015/07/flex-examples.html)

## （5）float

## （6）text-align

## （7）vertical-align

## （8）

## （9）

## （10）
