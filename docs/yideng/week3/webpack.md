# webpack入门

AMD && CMD

```
//requireJS => CMD
require(['math'], function(math){
    math.add(2,3)
})
```

模块化：高内聚、低耦合

webpack：万物皆模块

webpack目标：
- 拆分依赖到代码块按需加载
- 快速初始化加载
- 所有静态资源都可以当做模块
- 第三方库模块化
- 自定义模块化打包
- 适合大项目

webpack安装：

- npm install webpack -g
- npm install --save-dev webpack

webpack配置：

- entry：配置入口资源
- output：配置编译后的资源
- moudle：资源处理
- resolve：配置资源别名/扩展名等
- plugins：插件，比loader更强大

```
var webpack = require('webpack')
console.log(webpack) //iTerm当前目录node 文件名+扩展名，可输出结果
module.export
```

