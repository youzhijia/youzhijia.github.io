# React深入介绍 :four_leaf_clover:

老袁的话：
* React核心知识点：JXS，props，state，生命周期
* 直播课源码部分会讲vue和react在性能优化的渲染树上为什么快？
* js里写html，是为了DOM diff（最小化更新DOM），大量操作DOM非常影响性能，所以react专注于这一块。
* React是什么？是一款专注于UI层的库，让我能动态的感知每一个state的变化，对react来说state很重要，state一变，会牵扯到所有的UI层重新进行DOM diff，也会让整个virtual DOM进行比较。
* react不是一个双向绑定的库，而是单向数据流。react并没有某一个属性变而影响另一个属性，只有state变而影响全部
* 为什么react包含component？事实上html已经包含component，但做的不是很好。设计浏览器的支持问题
* react为什么不用MVC架构？为了集中管理state，react把所有state做成一个集中管理的库，我只需要纯粹的开发view就可以，为了回归react最原始的东西view，并且为了更好的管理state。

## Flux架构介绍

* React本身只涉及UI层，如果搭建大型应用，必须搭配一个前端框架。
* Flux是一种架构思想，专门解决软件的结构问题。它跟MVC架构是同一类东西，但是更加简单和清晰
* View：视图层（react所有component）
* Action（动作）：视图层发出的消息（比如onClick）
* Dispatcher（派发器）：用来接收actions、执行回调函数（改变store）
* store（数据层）：用来存放应用的状态，一旦发生变动，就提醒Views要更新页面

![流程图](/img/react-6.jpeg)

1. 用户访问 View
2. View 发出用户的 Action
3. Dispatcher 收到 Action，要求 Store 进行相应的更新 
4. Store 更新后，发出一个"change"事件
5. View 收到"change"事件后，更新页面

## React性能调优



## Redux介绍与实战



## GraphQL & Relay