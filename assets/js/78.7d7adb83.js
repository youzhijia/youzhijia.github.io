(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{131:function(t,e,v){"use strict";v.r(e);var _=v(0),i=Object(_.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("div",{staticClass:"content"},[v("h1",{attrs:{id:"http协议那些事"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http协议那些事","aria-hidden":"true"}},[t._v("#")]),t._v(" HTTP协议那些事 ⭐️")]),t._v(" "),v("div",{staticClass:"warning custom-block"},[v("p",{staticClass:"custom-block-title"},[t._v("WARNING")]),t._v(" "),v("p",[v("strong",[t._v("课件")]),t._v("\nHTTP协议那些事[上]")])]),t._v(" "),v("blockquote",[v("p",[t._v("13min开讲")])]),t._v(" "),v("h3",{attrs:{id:"http请求模型"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http请求模型","aria-hidden":"true"}},[t._v("#")]),t._v(" HTTP请求模型")]),t._v(" "),v("ul",[v("li",[t._v("记住两个2")]),t._v(" "),v("li",[t._v("客户端、服务器端")]),t._v(" "),v("li",[t._v("请求、响应")])]),t._v(" "),v("div",{staticClass:"tip custom-block"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("ul",[v("li",[t._v("HTTP是无状态协议，状态指连接状态")]),t._v(" "),v("li",[v("strong",[t._v("为什么是无状态协议？")]),t._v(" 通过HTTP对网络进行请求时，一个请求必须有一个响应，响应后即通信结束")]),t._v(" "),v("li",[v("strong",[t._v("登录必须要状态，这时怎么维持状态呢？")]),t._v(" 通过cookie和session")]),t._v(" "),v("li",[t._v("websocket是有状态的，可理解成应用层连接")]),t._v(" "),v("li",[t._v("nodejs有2个对象：request、response对应请求、响应")]),t._v(" "),v("li",[v("strong",[t._v("计算机里的模型是什么？")]),t._v(" 用简单的方式描述真实的东西")])])]),t._v(" "),v("h3",{attrs:{id:"浏览器行为与http协议，粗略处理流程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#浏览器行为与http协议，粗略处理流程","aria-hidden":"true"}},[t._v("#")]),t._v(" 浏览器行为与HTTP协议，粗略处理流程")]),t._v(" "),v("ol",[v("li",[t._v("输入网址并回车")]),t._v(" "),v("li",[t._v("解析域名")]),t._v(" "),v("li",[t._v("浏览器发送HTTP请求")]),t._v(" "),v("li",[t._v("服务器处理请求")]),t._v(" "),v("li",[t._v("服务器返回HTTP响应")]),t._v(" "),v("li",[t._v("浏览器处理HTTP请求")]),t._v(" "),v("li",[t._v("继续请求其他资源")])]),t._v(" "),v("div",{staticClass:"tip custom-block"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("p",[v("img",{attrs:{src:"/img/HTTP1.png",alt:"浏览器行为与HTTP协议"}})]),t._v(" "),v("ul",[v("li",[t._v("图1：用户在浏览器输入网址回车，向浏览器发出指令，但请求不是马上发出去的")]),t._v(" "),v("li",[t._v("图2：浏览器网络协议底层先要判断网络，尝试跨过网关，看看是否连接了互联网。图中门即防火墙，是一种透流设备。大公司在内网和外围之间布置防火墙或网关或代理服务器，这些设备都是透流设备。家里的透流设备是路由器。不同网络环境下，透流设备不同。")]),t._v(" "),v("li",[t._v("图3："),v("strong",[t._v("怎么判断网络？")]),t._v(" 先发一个DNS解析包出去。"),v("strong",[t._v("为什么发DNS包？")]),t._v(" 因为输入的是网址，网址的表现形式是文本，计算机不认识，所以要转化为IP地址，这种转换需要DNS服务器， DNS相当于大数据库，数据库结构简单解释即域名对应IP，以键值对形式存在。当把域名转换为IP地址后才能找到远程服务器，即找到主机。")]),t._v(" "),v("li",[t._v("图4：请求。")]),t._v(" "),v("li",[t._v("图5：多个服务器(鸟)，一个IP地址，这么多服务器要怎么共用一个IP，使用反向代理。")]),t._v(" "),v("li",[t._v("图6：服务器收到请求正文(包)，给出响应正文。")]),t._v(" "),v("li",[t._v("图7：响应。请求和响应的链路不一定一致。")]),t._v(" "),v("li",[t._v("图8：浏览器接收响应，渲染页面，即将HTML、CSS、JS等可视化。")]),t._v(" "),v("li",[t._v("每一个步骤都会引出很多知识点，先大概了解")])]),t._v(" "),v("p",[v("strong",[t._v("答疑")])]),t._v(" "),v("ul",[v("li",[v("strong",[t._v("VPN")]),t._v(" ：是一个代理")]),t._v(" "),v("li",[v("strong",[t._v("CDN")]),t._v(" ：是快速访问资源的一个方案，和镜像差不多，比镜像复杂")]),t._v(" "),v("li",[v("strong",[t._v("防火墙")]),t._v(" ：是一个建筑设施，如商场防火灾阻隔；计算机中的防火墙，是为了防止网络攻击")]),t._v(" "),v("li",[v("strong",[t._v("网关和防火墙的区别？")]),t._v(" 网关不是限制而是审查，符合规则放行，记录违规行为等")])])]),t._v(" "),v("blockquote",[v("p",[t._v("40min讲HTTP协议")])]),t._v(" "),v("h3",{attrs:{id:"什么是http协议"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#什么是http协议","aria-hidden":"true"}},[t._v("#")]),t._v(" 什么是HTTP协议")]),t._v(" "),v("ul",[v("li",[t._v("协议：大家都要遵守的规则，计算机上很重要，HTTP协议讲该如何进行通信，怎么收、发、容错")]),t._v(" "),v("li",[t._v("HTTP是超文本传输协议，从www浏览器传输到本地浏览器的一种传输协议，网站是基于HTTP协议的，例如网站的图片、CSS、JS等都是基于HTTP协议进行传输的。")]),t._v(" "),v("li",[t._v("HTTP协议是由从客户机到服务器的请求(Request)和从服务器到客户机的响应(response)进行约束和规范。")]),t._v(" "),v("li",[v("strong",[t._v("怎么判断客户端、服务器端？")]),t._v(" 谁发起的谁是客户端")])]),t._v(" "),v("div",{staticClass:"tip custom-block"},[v("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),v("p",[v("strong",[t._v("了解TCP/IP协议栈")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}},[t._v("七层协议")]),t._v(" "),v("th",{staticStyle:{"text-align":"center"}}),t._v(" "),v("th",{staticStyle:{"text-align":"center"}},[t._v("五层协议")])])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("应用层")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("应用层")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("表示层")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("会话层")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("传输层")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("传输层")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("网络层")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("网络层")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("数据链路层")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("网络接口层")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("物理层")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}}),t._v(" "),v("td",{staticStyle:{"text-align":"center"}})])])]),t._v(" "),v("ul",[v("li",[t._v("应用层：为用户提供所需要的各种服务，例如:HTTP、FTP、DNS、SMTP等")]),t._v(" "),v("li",[t._v("传输层：为应用层实体提供端到端的通信功能，保证数据包的顺序传送及数据的完整性。该层定义了两个主要的协议：传输控制协议(TCP)和用户数据报协议(UDP)")]),t._v(" "),v("li",[t._v("网络层： 主要解决主机到主机的通信问题。IP协议是网际互联层最重要的协议")]),t._v(" "),v("li",[t._v("网络接口层：负责监视数据在主机和网络之间的交换")])]),t._v(" "),v("p",[v("strong",[t._v("在TCP/IP协议栈中的位置")])]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",{staticStyle:{"text-align":"center"}}),t._v(" "),v("th",{staticStyle:{"text-align":"center"}})])]),t._v(" "),v("tbody",[v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("HTTP")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}},[t._v("嵌入了TLS、SSL，成HTTPS")])]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("TCP")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("IP")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}})]),t._v(" "),v("tr",[v("td",{staticStyle:{"text-align":"center"}},[t._v("数据链路层")]),t._v(" "),v("td",{staticStyle:{"text-align":"center"}})])])]),t._v(" "),v("ul",[v("li",[t._v("目前普遍应用版本HTTP 1.1，正在逐步向HTTP 2迁移")]),t._v(" "),v("li",[t._v("HTTP默认端口号为80")]),t._v(" "),v("li",[t._v("HTTPS默认端口号为443")])])]),t._v(" "),v("h3",{attrs:{id:"http的工作过程"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http的工作过程","aria-hidden":"true"}},[t._v("#")]),t._v(" HTTP的工作过程")]),t._v(" "),v("ul",[v("li",[t._v("一次HTTP操作称为一个事务，其工作过程可分为四步:")])]),t._v(" "),v("ol",[v("li",[t._v("首先客户机与服务器需要建立连接。只要单击某个超级链接，HTTP的工作开始。")]),t._v(" "),v("li",[t._v("建立连接后，客户机发送一个请求给服务器，请求方式的格式为：统一资源标识符(URL)、协议版本号， 后边是MIME信息包括请求修饰符、客户机信息和可能的内容 。")]),t._v(" "),v("li",[t._v("服务器接到请求后，给予相应的响应信息，响应格式为一个状态行，包括信息的协议版本号、一个成功或错误的代码，后边是MIME信息包括服务器信息、实体信息和可能的内容。")]),t._v(" "),v("li",[t._v("客户端接收服务器所返回的信息通过浏览器显示在用户的显示屏上，然后客户机与服务器断开连接。")])]),t._v(" "),v("ul",[v("li",[t._v("如果在以上过程中的某一步出现错误，那么产生错误的信息将返回到客户端，有显示屏输出。对于用户来说，这些过程是由HTTP自己完成的，用户只要用鼠标点击，等待信息显示就可以了。")])]),t._v(" "),v("p",[v("strong",[t._v("什么是事务？")]),t._v(" 完成一项任务，需经历很多步骤，若其中一个步骤出问题，那整个任务失败。\n建立连接是在传输层上完成，2、3步在HTTP上完成，第4步不一定断开连接，有可能复用连接，因为断开连接需要IO开销，IO操作速度最慢，CPU最快")]),t._v(" "),v("blockquote",[v("p",[t._v("1h6min~1h16min休息")])])])}],!1,null,null,null);e.default=i.exports}}]);