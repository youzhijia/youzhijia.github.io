## 浏览器高频面试题1~10

## （1）cookies、sessionStorage、localStorage 的区别

|  | 含义 | 与服务器通讯 | 存储大小 | 生命周期 |
|:-----|:-----|:-----|:-----|:-----|:-----|
| cookie | 网站为了标示用户身份而储存在用户本地终端上的数据（通常经过加密） | 始终参与<br>始终在同源的http请求（header）中携带（即使不需要），影响性能 | 4k | 除非cookie过期时间到（浏览器或浏览器窗口关闭不丢失） |
| sessionStorage |  | 不参与 | 5M | 当前浏览器窗口关闭后，自动删除 |
| localStorage |  | 不参与 | 5M | 除非主动删除（浏览器关闭不丢失） |
| indexDB |  | 不参与 | 无限 | 除非被清理（浏览器关闭不丢失） |

## （2）跨域

#### 什么是跨域？

浏览器出于安全考虑，有同源策略。若协议、域名、端口有一个不同，即跨域。Ajax 请求会失败。

#### 为什么浏览器要使用同源策略？

主要是用来防止 CSRF 攻击。CSRF 攻击是利用用户登录态发起恶意请求。

没有同源策略的情况下，A 网站可以被任意其他来源的 Ajax 访问到内容。当然跨域并不能完全阻止 CSRF。

#### 请求跨域了，那么请求到底发出去没有？

发出去了，但是浏览器拦截了响应。

#### 明明通过表单的方式可以发起跨域请求，为什么 Ajax就不会？

跨域是为了阻止用户读取到另一个域名下的内容，Ajax 可以获取响应，浏览器认为这不安全，所以拦截了响应。但是表单并不会获取新的内容，所以可以发起跨域请求。同时也说明了跨域并不能完全阻止 CSRF，因为请求毕竟是发出去了。

### JSONP

**原理**：利用script标签没有跨域限制的漏洞，通过script标签指向一个需要访问的地址并提供一个回调函数来接收数据。

**适用范围**：jsonp使用简单且兼容性好，但只限于get请求。

```html
<script src="http://www.xxx.com?param1=a&param2=b&callback=jsonp"></script>
<script>
  function jsonp(data){
    console.log(data)
  }
</script>
```

开发中可能会遇到多个 JSONP 请求的回调函数名是相同的，这时候就需要自己封装一个 JSONP👇

```js
function jsonp(src, callback, success){
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  // 传参并指定回调执行函数为onBack
  script.src = src;

  window[callback] = function(data){
    success && success(data);
  }

  document.body.appendChild(script);
}

jsonp('http://www.xxx.com?param=a&callback=onBack', 'onBack', function(data){console.log(data)})
```

### CORS

CORS需要浏览器和后端同时支持。浏览器会自动进行CORS通信，关键在后端。后端设置了CORS，即实现跨域。

服务端设置Access-Control-Allow-Origin即可开启CORS，该属性表示哪些域名可访问资源。设置通配符则表示所有网站都可以访问资源。

虽然设置 CORS和前端没什么关系，但是通过这种方式解决跨域问题的话，会在发送请求时出现两种情况，分别为简单请求和复杂请求。

#### 复杂请求

对于复杂请求来说，首先会发起一个预检请求，该请求是 option 方法的，通过该请求来知道服务端是否允许跨域请求。

### document.domain

**适用范围**：适用于二级域名相同的情况，比如 a.test.com 和 b.test.com 适用于该方式。

只需要给页面添加 document.domain = 'test.com' 表示主域名都相同就可以实现跨域。

### postMessage

**适用范围**：适用于获取嵌入页面的第三方页面数据。一个页面发送消息，另一个页面判断来源并接收消息。

```js
//发送消息端
window.parent.postMessage('message','http://www.xxx.com');

//接收消息端
var mc = new MessageChannel();
mc.addEventListener('messge',(enent)=>{
  var origin = event.origin || event.originnalEvent.origin;
  if(origin === 'http://www.xxx.com'){
    console.log('验证通过')
  }
})
```

## （3）

## （4）

## （5）

## （6）

## （7）

## （8）

## （9）

## （10）