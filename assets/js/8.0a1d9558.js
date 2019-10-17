(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{61:function(a,e,t){"use strict";t.r(e);var s=t(0),n=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"content"},[t("h1",{attrs:{id:"被喷的代码风格，你有吗？"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#被喷的代码风格，你有吗？","aria-hidden":"true"}},[a._v("#")]),a._v(" 被喷的代码风格，你有吗？")]),a._v(" "),t("h3",{attrs:{id:"一、变量相关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#一、变量相关","aria-hidden":"true"}},[a._v("#")]),a._v(" 一、变量相关")]),a._v(" "),t("h4",{attrs:{id:"_1-变量数量及定义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-变量数量及定义","aria-hidden":"true"}},[a._v("#")]),a._v(" 1. 变量数量及定义")]),a._v(" "),t("p",[a._v("NO：滥用变量")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("let kpi = 4;  // 定义好了之后再也没用过\n \nfunction example() {\n    var a = 1;\n    var b = 2;\n    var c = a+b;\n    var d = c+1;\n    var e = d+a;\n    return e;\n}\n")])])]),t("p",[a._v("YES：数据只使用一次或不使用就无需装到变量中")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("let kpi = 4;  // 没用的就删除掉，不然过三个月自己都不敢删，怕是不是那用到了\nfunction example() {\n    var a = 1;\n    var b = 2;\n    return 2a+b+1;\n}\n")])])]),t("h4",{attrs:{id:"_2-变量命名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-变量命名","aria-hidden":"true"}},[a._v("#")]),a._v(" 2.变量命名")]),a._v(" "),t("p",[a._v("NO：自我感觉良好的缩写")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("let fName = 'jackie'; // 看起来命名挺规范，缩写，驼峰法都用上，ESlint各种检测规范的工具都通过，But，fName是啥？这时候，你是不是想说What are you 弄啥呢？\nlet lName = 'willen'; // 这个问题和上面的一样\n")])])]),t("p",[a._v("YES：无需对每个变量都写注释，从名字上就看懂；同时，变量不要过于啰嗦；")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("let firstName = 'jackie'; // 怎么样，是不是一目了然。少被喷了一次\nlet lastName = 'willen';\n")])])]),t("h4",{attrs:{id:"_3-特定的变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-特定的变量","aria-hidden":"true"}},[a._v("#")]),a._v(" 3.特定的变量")]),a._v(" "),t("p",[a._v("NO：无说明的参数")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("if (value.length < 8) { // 为什么要小于8，8表示啥？长度，还是位移，还是高度？Oh,my God!!\n    ....\n}\n")])])]),t("p",[a._v("YES：添加变量")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("const MAX_INPUT_LENGTH = 8;\nif (value.length < MAX_INPUT_LENGTH) { // 一目了然，不能超过最大输入长度\n    ....\n}\n")])])]),t("h4",{attrs:{id:"_4-使用说明性的变量-即有意义的变量名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-使用说明性的变量-即有意义的变量名","aria-hidden":"true"}},[a._v("#")]),a._v(" 4. 使用说明性的变量(即有意义的变量名)")]),a._v(" "),t("p",[a._v("NO：长代码不知道啥意思")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("const address = 'One Infinite Loop, Cupertino 95014';\nconst cityZipCodeRegex = /^[^,\\]+[,\\s]+(.+?)s*(d{5})?$/;\nsaveCityZipCode(\n  address.match(cityZipCodeRegex)[1], // 这个公式到底要干嘛，对不起，原作者已经离职了。自己看代码\n  address.match(cityZipCodeRegex)[2], // 这个公式到底要干嘛，对不起，原作者已经离职了。自己看代码\n);\n")])])]),t("p",[a._v("YES：用变量名来解释长代码的含义")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("const address = 'One Infinite Loop, Cupertino 95014';\nconst cityZipCodeRegex = /^[^,\\]+[,\\s]+(.+?)s*(d{5})?$/;\nconst [, city, zipCode] = address.match(cityZipCodeRegex) || [];\nsaveCityZipCode(city, zipCode);\n")])])]),t("h4",{attrs:{id:"_5-避免使用太多的全局变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-避免使用太多的全局变量","aria-hidden":"true"}},[a._v("#")]),a._v(" 5. 避免使用太多的全局变量")]),a._v(" "),t("p",[a._v("NO：在不同的文件不停的定义全局变量")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("name.js\nwindow.name = 'a';\nhello.js\nwindow.name = 'b';\ntime.js\nwindow.name = 'c';\n")])])]),t("p",[a._v("YES：少用或使用替代方案 你可以选择只用局部变量。通过(){}的方法。")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("如果你确实用很多的全局变量需要共享，你可以使用vuex,redu，mobx或者参考flux模式写一个也行。\n如果不使用数据流，可以自己维护一个大Object，来维护这些全局变量\n(function(w){\n  function GlobleName() {\n    this.name = ''\n  }\n  GlobleName.prototype.setName = function(name) {\n    this.name = name\n  }\n  window['GlobleName'] = new GlobleName()\n})(window)\n//\nname.js\nGlobleName.setName('a');\nhello.js\nGlobleName.setName('b');\n")])])]),t("h4",{attrs:{id:"_6-变量的赋值"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-变量的赋值","aria-hidden":"true"}},[a._v("#")]),a._v(" 6. 变量的赋值")]),a._v(" "),t("p",[a._v("NO：对于求值获取的变量，没有兜底")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("const MIN_NAME_LENGTH = 8;\nlet lastName = fullName[1];\nif(lastName.length > MIN_NAME_LENGTH) { // 这样你就给你的代码成功的埋了一个坑，你有考虑过如果fullName = ['jackie']这样的情况吗？这样程序一跑起来就爆炸。要不你试试。\n    ....\n}\n")])])]),t("p",[a._v("YES：对于求值变量，做好兜底")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("const MIN_NAME_LENGTH = 8;\nlet lastName = fullName[1] || ''; // 做好兜底，fullName[1]中取不到的时候，不至于赋值个undefined,至少还有个空字符，从根本上讲，lastName的变量类型还是String，String原型链上的特性都能使用，不会报错。不会变成undefined。\nif(lastName.length > MIN_NAME_LENGTH) {\n    ....\n}\n其实在项目中有很多求值变量，对于每个求值变量都需要做好兜底。\nlet propertyValue = Object.attr || 0; // 因为Object.attr有可能为空，所以需要兜底。\n")])])]),t("h3",{attrs:{id:"二、变量相关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二、变量相关","aria-hidden":"true"}},[a._v("#")]),a._v(" 二、变量相关")]),a._v(" "),t("h4",{attrs:{id:"_1-函数命名"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-函数命名","aria-hidden":"true"}},[a._v("#")]),a._v(" 1. 函数命名")]),a._v(" "),t("p",[a._v("NO：从命名无法知道返回值类型")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("function showFriendsList() {....} // 现在问，你知道这个返回的是一个数组，还是一个对象，还是true or false。你能答的上来否？你能答得上来我请你吃松鹤楼的满汉全席还请你不要当真。\n")])])]),t("p",[a._v("Yes: 对于返回true or false的函数，最好以should/is/can/has开头")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("function shouldShowFriendsList() {...}\nfunction isEmpty() {...}\nfunction canCreateDocuments() {...}\nfunction hasLicense() {...}\n")])])]),t("h4",{attrs:{id:"_2-功能函数最好为纯函数"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-功能函数最好为纯函数","aria-hidden":"true"}},[a._v("#")]),a._v(" 2. 功能函数最好为纯函数")]),a._v(" "),t("p",[a._v("NO: 不要让功能函数的输出变化无常")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("function plusAbc(a, b, c) {  // 这个函数的输出将变化无常，因为api返回的值一旦改变，同样输入函数的a，b,c的值，但函数返回的结果却不一定相同。\n   var c = fetch('../api');\n   return a+b+c;\n}\n")])])]),t("p",[a._v("YES：功能函数使用纯函数，输入一致，输出结果永远唯一")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("function plusAbc(a, b, c) {  // 同样输入函数的a，b,c的值，但函数返回的结果永远相同。\n  return a+b+c;\n}\n")])])]),t("h4",{attrs:{id:"_3-函数传参"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-函数传参","aria-hidden":"true"}},[a._v("#")]),a._v(" 3. 函数传参")]),a._v(" "),t("p",[a._v("NO：传参无说明")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("page.getSVG(api, true, false); // true和false啥意思，一目不了然\n")])])]),t("p",[a._v("YES: 传参有说明")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("page.getSVG({\n    imageApi: api,\n    includePageBackground: true, // 一目了然，知道这些true和false是啥意思\n    compress: false,\n})\n")])])]),t("h4",{attrs:{id:"_4-动作函数要以动词开头"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-动作函数要以动词开头","aria-hidden":"true"}},[a._v("#")]),a._v(" 4. 动作函数要以动词开头")]),a._v(" "),t("p",[a._v("NO: 无法辨别函数意图")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("function emlU(user) {\n    ....\n}\n")])])]),t("p",[a._v("YES：动词开头，函数意图就很明显")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("function sendEmailToUser(user) {\n    ....\n}\n")])])]),t("h4",{attrs:{id:"_5-一个函数完成一个独立的功能，不要一个函数混杂多个功能"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-一个函数完成一个独立的功能，不要一个函数混杂多个功能","aria-hidden":"true"}},[a._v("#")]),a._v(" 5. 一个函数完成一个独立的功能，不要一个函数混杂多个功能")]),a._v(" "),t("p",[a._v("==这是软件工程中最重要的一条规则，当函数需要做更多的事情时，它们将会更难进行编写、测试、理解和组合。当你能将一个函数抽离出只完成一个动作，他们将能够很容易的进行重构并且你的代码将会更容易阅读。==")]),a._v(" "),t("p",[a._v("NO：函数功能混乱，一个函数包含多个功能")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("function sendEmailToClients(clients) {\n  clients.forEach(client => {\n    const clientRecord = database.lookup(client)\n    if (clientRecord.isActive()) {\n      email(client)\n    }\n  })\n}\n")])])]),t("p",[a._v("YES： 功能拆解")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("function sendEmailToActiveClients(clients) {  //各个击破，易于维护和复用\n  clients.filter(isActiveClient).forEach(email)\n}\n \nfunction isActiveClient(client) {\n  const clientRecord = database.lookup(client)\n  return clientRecord.isActive()\n}\n")])])]),t("h4",{attrs:{id:"_6-优先使用函数式编程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-优先使用函数式编程","aria-hidden":"true"}},[a._v("#")]),a._v(" 6. 优先使用函数式编程")]),a._v(" "),t("p",[a._v("NO: 使用for循环编程")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("for(i = 1; i <= 10; i++) { // 一看到for循环让人顿生不想看的情愫\n   a[i] = a[i] +1;\n}\n")])])]),t("p",[a._v("YES：使用函数式编程")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("let b = a.map(item => ++item)\n")])])]),t("h4",{attrs:{id:"_7-函数中过多的采用if-else"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-函数中过多的采用if-else","aria-hidden":"true"}},[a._v("#")]),a._v(" 7. 函数中过多的采用if else ..")]),a._v(" "),t("p",[a._v("No： if else过多")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("if (a === 1) {\n    ...\n} else if (a ===2) {\n    ...\n} else if (a === 3) {\n    ...\n} else {\n   ...\n}\n")])])]),t("p",[a._v("YES: 可以使用switch替代或用数组替代")]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("switch(a) {\n   case 1:\n           ....\n   case 2:\n           ....\n   case 3:\n           ....\n  default:\n       ....\n}\n \nOr\n \nlet handler = {\n    1: () => {....},\n    2: () => {....}.\n    3: () => {....},\n    default: () => {....}\n}\nhandler[a]() || handler['default']()\n")])])]),t("h3",{attrs:{id:"三、尽量使用es6，有可以能的话es7中新语法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#三、尽量使用es6，有可以能的话es7中新语法","aria-hidden":"true"}},[a._v("#")]),a._v(" 三、尽量使用ES6，有可以能的话ES7中新语法")]),a._v(" "),t("ol",[t("li",[a._v("尽量使用箭头函数")]),a._v(" "),t("li",[a._v("连接字符串，使用模版字符串")]),a._v(" "),t("li",[a._v("使用解构赋值")])])])}],!1,null,null,null);e.default=n.exports}}]);