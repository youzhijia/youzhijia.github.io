# react源码解析——setState

在调用 this.setState 之后，React 会自动重新调用 render 方法。但是如果我们多次调用 setState 方法呢？

```js
this.setState({val: this.state.val + 1});
this.setState({val: this.state.val + 1});
```

render方法调用几次？第二次依然是0？

这一切，都要归功于 React 的 batchUpdate 设计，但 batchUpdate（批量更新）如何实现？

```js
// 一次setstate方法的简化调用栈

this.setState // ReactComponent.js
...
this.updater.enqueueSetState  // ReactUpdateQueue.js
...
获取当前组件的 pendingStateQueue，并将新的 state push 进去 // ReactUpdateQueue.js
...
enqueueUpdate  // ReactUpdates.js
...
if(当前不在一次 batchUpdate 的过程中)  // ReactUpates.js
  执行 batchingStreategy.batchUpdates 方法
else
  将当前 component 存入 dirtyComponents 数组中
...
if (setState 方法存在 callback)  // ReactComponent.js
  调用 this.updater.enqueueCallback 将 callback 存入队列中
...
```

setState 只是把变化存入一个临时队列中，那么新的 state 究竟是如何生效的呢？

让我们从 DOM 事件触发开发对整个链路进行一下梳理：

当一次 DOM 事件触发后，ReactEventListener.dispatchEvent 方法会被调用。而这个方法并不是急着去调用我们在 JSX 中指定的各种回调，而是调用了 ReactUpdates.batchedUpdates，该方法会执行一个 [transaction](./transaction.md)，而要执行的内容被定义在 handleTopLevelImpl 中。再看 handleTopLevelImpl，其核心内容就是找到事件对应的所有节点并依次对这些节点 trigger 事件。

存入临时队列的 state 究竟是怎么被改变成真正的状态的呢？秘密就在 ReactUpdates.batchedUpdates 调用中（还记得它吗？DOM 事件的回调中被调用的方法）。这个方法实际上就是执行了一个 transaction，具体实现定义在 ReactDefaultBatchingStrategy.js 中。

![流程图](/img/react-1.jpg)

上面的流程图中只保留了部分核心的过程，看到这里大家应该明白了，所有的 batchUpdate 功能都是通过执行各种 transaction 实现的。this.setState 调用后，新的 state 并没有马上生效，而是通过 ReactUpdates.batchedUpdate 方法存入临时队列中。当一个 transaction 完成后，才通过 ReactUpdates.flushBatchedUpdates 方法将所有的临时 state merge 并计算出最新的 props 及 state。

值得一提的是，React 还将 batchUpdate 方法暴露了出来：

```js
var batchedUpdates = require('react-dom').unstable_batchedUpdates;
```

当你需要在一些非 DOM 事件回调的函数中多次调用 setState 等方法时，可以将你的逻辑封装后调用 batchedUpdates 执行，以此保证 render 方法不会被多次调用。




setState是同步的还是异步？

那什么场景下是异步的，可不可能是同步，什么场景下又是同步的？

为了方便理解和简化流程，我们默认react内部代码执行到performWork、performWorkOnRoot、performSyncWork、performAsyncWork这四个方法的时候，就是react去update更新并且作用到UI上。

### 1、合成事件中的setState

合成事件？

react为了解决跨平台，兼容性问题，自己封装了一套事件机制，代理了原生的事件，像在jsx中常见的onClick、onChange这些都是合成事件。

```js
class App extends Component {

  state = { val: 0 }

  increment = () => {
    this.setState({ val: this.state.val + 1 })
    console.log(this.state.val) // 输出的是更新前的val --> 0
  }
  render() {
    return (
      <div onClick={this.increment}>
        {`Counter is: ${this.state.val}`}
      </div>
    )
  }
}
```

合成事件中的setState写法比较常见，点击事件里去改变this.state.val的状态值，在increment事件中打个断点可以看到调用栈，这里我贴一张自己画的流程图：

![流程图](/img/react-2.jpg)

从 dispatchInteractiveEvent 到 callCallBack 为止，都是对合成事件的处理和执行，从 setState 到 requestWork 是调用 this.setState 的逻辑，这边主要看下 requestWork 这个函数（从 dispatchEvent 到 requestWork 的调用栈是属于 interactiveUpdates$1 的 try 代码块，下文会提到）。

### 2、生命周期函数中的setState

![流程图](/img/react-3.jpg)

其实还是和合成事件一样，当componentDidmount执行的时候，react内部并没有更新，执行完componentDidmount后才去commitUpdateQueue更新。这就导致你在componentDidmount中setState完去console.log拿的结果还是更新前的值。

### 3、原生事件中的setState

原生事件是指非react合成事件，原生自带的事件监听 addEventListener ，或者也可以用原生js、jq直接 document.querySelector().onclick 这种绑定事件的形式都属于原生事件。

![流程图](/img/react-5.jpg)

原生事件的调用栈就比较简单了，因为没有走合成事件的那一大堆，直接触发click事件，到requestWork ,在 requestWork 里由于 expirationTime === Sync 的原因，直接走了 performSyncWork 去更新，并不像合成事件或钩子函数中被return，所以当你在原生事件中setState后，能同步拿到更新后的state值。

### 4、setTimeout中的setState

在 setTimeout 中去 setState 并不算是一个单独的场景，它是随着你外层去决定的，因为你可以在合成事件中 setTimeout，可以在钩子函数中 setTimeout，也可以在原生事件setTimeout，但是不管是哪个场景下，基于event loop的模型下，setTimeout 中里去 setState 总能拿到最新的state值。

举个栗子，比如之前的合成事件，由于 setTimeout(_ => { this.setState()}, 0)是在 try 代码块中,当你 try 代码块执行到setTimeout的时候，把它丢到列队里，并没有去执行，而是先执行的 finally 代码块，等 finally 执行完了，isBatchingUpdates又变为了 false，导致最后去执行队列里的 setState 时候， requestWork 走的是和原生事件一样的 expirationTime === Sync if分支，所以表现就会和原生事件一样，可以同步拿到最新的state值。

### 5、setState中的批量更新

在setState的时候react内部会创建一个updateQueue，通过firstUpdate、lastUpdate、lastUpdate.next去维护一个更新的队列，在最终的performWork中，相同的key会被覆盖，只会对最后一次的setState进行更新。

```js
class App extends React.Component {
  state = { val: 0 }

  componentDidMount() {
    this.setState({ val: this.state.val + 1 })
    console.log(this.state.val)

    this.setState({ val: this.state.val + 1 })
    console.log(this.state.val)

    setTimeout(_ => {
      this.setState({ val: this.state.val + 1 })
      console.log(this.state.val);

      this.setState({ val: this.state.val + 1 })
      console.log(this.state.val)
    }, 0)
  }

  render() {
    return <div>{this.state.val}</div>
  }
}
```

结合上面分析的，钩子函数中的 setState 无法立马拿到更新后的值，所以前两次都是输出0，当执行到setTimeout里的时候，前面两个state的值已经被更新，由于 setState 批量更新的策略， this.state.val 只对最后一次的生效，为1，而在 setTimmout 中setState 是可以同步拿到更新结果，所以 setTimeout 中的两次输出2，3，最终结果就为0, 0, 2, 3。

### 总结

* setState 只在合成事件和钩子函数中是“异步”的，在原生事件和setTimeout 中都是同步的。
* setState 的“异步”并不是说内部由异步代码实现，其实本身执行的过程和代码都是同步的，只是合成事件和钩子函数的调用顺序在更新之前，导致在合成事件和钩子函数中没法立马拿到更新后的值，形成了所谓的“异步”，当然可以通过第二个参数 setState(partialState, callback) 中的callback拿到更新后的结果。
* setState 的批量更新优化也是建立在“异步”（合成事件、钩子函数）之上的，在原生事件和setTimeout 中不会批量更新，在“异步”中如果对同一个值进行多次setState，setState的批量更新策略会对其进行覆盖，取最后一次的执行，如果是同时setState多个不同的值，在更新时会对其进行合并批量更新。

[setState 之后发生了什么 —— 浅谈 React 中的 Transaction](https://undefinedblog.com/what-happened-after-set-state/)

[你真的理解setState吗？](https://zhuanlan.zhihu.com/p/39512941)