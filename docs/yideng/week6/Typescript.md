# Typescript入门

## Typescript简介

Typescript是微软开发的JS的超集，TS兼容JS，可以载入JS代码然后运行。

### TS 与 JS比较

TS优于JS的地方：加入注释，让编译器理解所支持的对象和函数，编译器会移除注释，不会增加开销；增加一个完整的类结构，使之更新是传统的面向对象语言。

### TS语言特性：

* 类Classes
* 接口 Interfaces
* 模块 Modules

## Mac OS X环境搭建

1. 集成开发环境 WebStorm
2. 安装TS  npm install -g typescript
* 到相关目录下，tsc index.js

录播视频有操作演示！

## 基本数据类型

* Boolean
* Number
* String
* Array
* Enum
* Any
* Void

```ts
//声明变量
var isBoon:boolean = true;
var inum:number = 10;
var str:string = "zj";
//数组：两种声明方式
var list1:number[] = [1,2,3];
var list2:Array<string> = ["zhang","yi"];
//枚举
enum Color {Reg, Green, Blue};
enum Color {Reg = 3, Green = 5, Blue = 10}; //下标可任意更改
var colorName:string = Color[3]; //获取值
var colorFlag:Color = Color.Green; //获取下标
//不确定类型
var notSure:any = 10;
notSure = "hello";
notSure = false;
var list3:any[] = [1, "hello", false];
//函数声明
function say():string{
  return "hello";
}
function call(x:number, y:number):number{
  return 10;
}
function hi():void{ //viod，不需要返回值
  
}

function tell(){
  alert(isBoon);
  alert(inum);
  alert(str);
  alert(list1[0]);
  alert(list2[1]);
  alert(colorName);
  alert(colorFlag);
  alet(notSure);
  alert(list3[2);
}
tell()
```

## 函数

命名函数 & 匿名函数

```ts
//??
var myAddts:(name:string, age:number) => number = function(n:string, a:number):number{
  return a;
}

//可选和默认参数参数（限制参数数量）
function abc(a="ff":string, b?:string){
  return a + "" + b;
}
var r1 = abc("h","w");
var r2 = abc("h");//不会报错
var r3 = abc();//不会报错

//可变参数
function def(a:string, ...b:string[]){
  return a + "" + b.join(" ");
}
```
