# CSS高级实用技巧【上】

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
