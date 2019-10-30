# react源码解析——transaction事务

```js
// 详见 Transaction.js

/**
 *                       wrappers (injected at creation time)
 *                                      +        +
 *                                      |        |
 *                    +-------------------------------------+
 *                    |                 v        |              |
 *                    |      +---------------+   |              |
 *                    |   +--|    wrapper1   -----+         |
 *                    |   |  +---------------+   v    |         |
 *                    |   |          +-------------+  |         |
 *                    |   |     +----|   wrapper2  -------+   |
 *                    |   |     |    +-------------+  |     |   |
 *                    |   |     |                     |     |   |
 *                    |   v     v                     v     v   | wrapper
 *                    | +---+ +---+   +---------+   +---+ +---+ | invariants
 * perform(anyMethod) | |   | |   |   |         |   |   | |   | | maintained
 * +----------------->----->|anyMethod------------->
 *                    | |   | |   |   |         |   |   | |   | |
 *                    | |   | |   |   |         |   |   | |   | |
 *                    | |   | |   |   |         |   |   | |   | |
 *                    | +---+ +---+   +---------+   +---+ +---+ |
 *                    |  initialize                    close    |
 *                    +-----------------------------------------+
 **/
```

实际上，Transacation 就是给需要执行的函数封装了两个 wrapper，每个 wrapper 都有 initialize 和 close 方法。当一个 transaction 需要执行（perform）的时候，会先调用对应的 initialize 方法。同样的，当一个 transaction 执行完成后，会调用对应的 close 方法。

纵观 React 源码，使用 Transaction 之处非常之多，React 源码注释中也列举了很多可以使用 Transaction 的地方，比如

* 在一次 DOM reconciliation（调和，即 state 改变导致 Virtual DOM 改变，计算真实 DOM 该如何改变的过程）的前后，保证 input 中选中的文字范围（range）不发生变化
* 当 DOM 节点发生重新排列时禁用事件，以确保不会触发多余的 blur/focus 事件。同时可以确保 DOM 重拍完成后事件系统恢复启用状态。
* 当 worker thread 的 DOM reconciliation 计算完成后，由 main thread 来更新整个 UI
* 在渲染完新的内容后调用所有 componentDidUpdate 的回调
* 等等
