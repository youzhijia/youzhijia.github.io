# PHP与MySQL入门

## 1. 初识PHP

* PHP：超文本预处理器
* PHP执行的很快
* PHP是将程序嵌入到HTML执行
* PHP每行代码都要以分号结尾

```php
<!DOCTYPE html>
<html>
<meta charset="utl-8"/>
<body>

<?php
require_once('a.php');
include_once('a.php');
$a = "外面的";
function test(){
  global $a;
  echo $a;
}
$arrayTest = array('0' => '苹果','1' => '香蕉');
echo json_encode($arrayTest);
?>

</body>
</html>
```

## 2.PHP基础操作

```php
<?php
header("Content-type:text/html;charset=utf-8");
session_start();
$_SESSION['view'] = 1; //系统带的变量名都加下划线，且大写
echo $_GET['username'];
echo $_POST['username'];
echo $_REQUEST['username'];
?>
```

::: tip
* 声明变量，变量是块级作用域；global
* 2种引入文件方式的区别：include_once(文件)，无论文件是否存在，后面代码都会执行
* 创建数组，json_encode
* 会话session
* js与php连接的方式：1.form表单，2.ajax
:::

```html
<form>
  <label>用户</label>
  <input type="text" name="username" id="username"/>
  <label>密码</label>
  <input type="text" name="password"/>
  <input type="submit" id="btn" value="提交" />
</form>
<script type="text/javascript">
  $("btn).click(function (e){
    e.preventDefault();
    $.ajax({
      url: 'a.php',
      data:{
        username: $("#username).val()
      },
      success: function(data){
        console.log(data);
      },
      error: function(){
        console.log('error');
      },
    })
  })
</script>
```

## 3.初识phpMyAdmin

* MySQL：关系型数据库
* [本地db地址](http://localhost/phpmyadmin)

> 6min 创建新闻数据库及增删改查操作

## 4.PHP与MySQL

php连接MySQL

```php
<?php
$con = mysqli_connect('localhost', 'root', '');
if(!$con){
  die('not connect' . mysqli_connect_error());
}else{
  echo "connect ok";
}
mysqli_close($con);  //提前关闭连接
?>
```

php 增删改查 MySQL 数据

```php
<?php
$con = mysqli_connect('localhost', 'root', '', 'PHPlesson');
if(!$con){
  die('not connect' . mysqli_connect_error());
}
$newstitle = $_REQUEST['newstitle'];
$newsimg = $_REQUEST['newsimg'];
$newscontent = $_REQUEST['newscontent'];
$addtime = $_REQUEST['addtime'];
$sql = "INSERT INTO news (newstitle, newsimg, newscontent, addtime) VALUES ('$newstitle', '$newsimg', '$newscontent', '$addtime')";
$sql = "DELETE FROM `news` WHERE newsid=3";
$sql = "UPDATE `news` SET `newscontent`='内容' WHERE newsid=4";
// mysqli_query("set names 'utf-8'");
if (mysqli_query($con, $sql)) {
  echo "insert ok";
} else {
  echo "Error: " . $sql . "<br>" . mysqli_error($con);
}
mysqli_close($con); 
?>
```

## 5.PHP与MySQL小实战

```html
  <form action="news.php">
    <p>
      <label for="newstitle">新闻标题</label>
      <input type="text" id="newstitle" name="newstitle"/>
    </p>
    <p>
      <label for="newsimg">新闻地址</label>
      <input type="text" id="newsimg" name="newsimg"/>
    </p>
    <p>
      <label for="newscontent">新闻内容</label>
      <textarea type="text" id="newscontent" name="newscontent"></textarea>
    </p>
    <p>
      <label for="addtime">新闻时间</label>
      <input type="date" id="addtime" name="addtime"/>
    </p>
    <p>
      <input type="submit" id="btn" value="提交" />
      <input type="reset" value="重置" />
    </p>
  </form>
```

查找读取数据

```php
<?php
header("Content-type: application/json; charset=utf-8");
$con = mysqli_connect('localhost', 'root', '', 'PHPlesson');
if(!$con){
  die('not connect' . mysqli_connect_error());
}
$sql = "SELECT newstitle, newsimg, newscontent, addtime FROM news";
$result = mysqli_query($con, $sql);
if (mysqli_num_rows($result) > 0) {
    // 输出数据
    $arr = array();
    while($row = mysqli_fetch_assoc($result)) {
      array_push($arr, array("newstitle")=>$row["newstitle"]);
      echo json_encode($arr);
      echo "newstitle: " . $row["newstitle"]. " - newsimg: " . $row["newsimg"]. " " . $row["newscontent"]. "<br>";
    }
} else {
    echo "0 结果";
}
mysqli_close($con);
```

## 6.PHP PDO



## 7.PHP面向对象的介绍

### 面向对象介绍

#### 面向对象的产生
* 软件危机：落后的生产方式无法满足迅速增长的计算机软件需求，导致开发与维护的一系列严重问题
* 软件工程学的诞生：软件工程学分为结构化方法（三个阶段：分析、设计、编程）和面向对象

#### 面向对象的概念(OOP)
* 编写的代码更简洁、更易于维护，且具有更强的可重用性
* OOP达到软件工程的三个目标：重用性、灵活性、扩展性
* <label style="color:red">OOP的特点：封装、继承、多态</label>

#### 类与对象之间的关系

* 面向对象的三个主要特性：对象的行为、对象的状态、对象的标识

### 如何抽象一个类

* 类包含什么：成员属性、成员方法
* 类的声明
    * 简单格式：[修饰符] class 类名{[成员属性] [成员方法]}
    * 完整格式：[修饰符] class 类名 [entends 父类] [implements 接口1[,接口2...]]{[成员属性] [成员方法]}
    * 成员属性：修饰符 $变量名[=默认值]，不能是带运算符的表达式、变量、方法或函数调用
    * 成员方法：[修饰符] function 方法名(参数..){[方法体] [return 返回值]}

### 通过类实例化对象

* 定义好类之后，使用new关键字生成一个对象：$对象名称=new 类名称([参数列表])
* 对象中成员的访问
    * 成员属性：$引用名->成员属性
    * 成员属性赋值：$引用名->成员属性 = 赋值
    * 调用对象方法：$引用名->成员方法(参数)
* 特殊对象的引用$this

```php
// 类的声明实例
<?php
class Person{
  public $age;
  public function say($word){
    echo "{$word}";
  }
  public function info(){
    $this -> say('hi');
    return $this -> age;
  }
}
$xiaoming = new Person;
$xiaoming -> age = 22;
$age = $xiaoming -> info();
echo $age;
?>
```

## 7-1.构造方法与析构方法

* 构造方法：[修饰符] function __construct([参数]){程序体}
* 析构方法：[修饰符] function __destruct([参数]){程序体}
    * 用途：可以进行资源的释放操作、数据库关闭操作
    * 对象被销毁时进行，即没有代码再去运行了

析构方法实例：再没有类调用时即执行

```php
// 测试构造方法和析构方法
class Person{
  public function __construct($name, $age){
    //当这个类new的时候自动执行
    echo('hello '.$name);
    $this -> name = $name;
    $this -> age = $age;
  }
  public function data(){
    return $this->age;
  }
  public function __destruct(){
    echo "bye {$this -> name}";
  }
}
new Person("first", 30);
new Person("second", 20);
```

## 7-2.PHP面向对象之封装性 :small_red_triangle:

设置私有成员与私有成员访问
魔术方法__set()
魔术方法__get()
魔术方法__isset()
魔术方法__unset()

封装的修饰符
设置私有成员
访问私有成员

* 封装：把对象中的成员属性和成员方法加上访问修饰符，使其尽可能隐藏对象的内部细节，达到对成员的访问控制（不是拒绝访问）
* PHP5支持3种修饰符：public(共有的、默认)、private(私有的)、protected(受保护的)
* 设置私有成员：声明属性/方法前加上private
* **访问私有成员**：封装后的成员在对象外部不能直接访问，只能在对象内部方法中**使用$this访问**

```php
class Person{
  public $name = 'zj';
  private $age = 27;
  protected $money = 10;
  private function getAge(){
    return $this->age;
  }
  protected function getMoney(){
    return $this->money;
  }
  public function userCard(){
    //在对象内部方法中使用$this可访问封装后的成员
    echo "name->".$this->name ."age->".$this->getAge() ."money->". $this->getMoney();
  }
  //魔术方法的set只针对protected private
  public function __set($key, $value){
    if($key == 'name' && $value == 'yl'){
      //public $name = 'zj' 打印yl，改为 private $name = 'zj' 打印cc
      $this->name = 'cc';
    }
  }
  public function __get($key){
    if($key == 'age' ){
      return 'not tell you';
    }
  }
  public function __isset($key){
    if($key == 'age' ){
      return true;
    }
  }
  public function __isset($key){
    if($key == 'age' ){
      return true;
    }
  }
  //拦截外部调用的isset、unset方法
  public function __unset($key){
    if($key == 'age' ){
      return;
    }
  }
}
$xw = new Person();
$xw->name = 'yl';
// echo $xw->$age;//封装后的成员在对象外部不能直接访问
// echo $xw->$money;
echo $xw->userCard();
echo $xw->age;//not tell you
var_dump(isset($xw->name));//bool(true)
var_dump(isset($xw->age));//bool(false) 封装后的变量，相当于没有
echo isset($xw->age);// 1 或 空  1表示告诉你这个东西能用
unset($xw->name);//销毁
```

## 7-3.PHP面向对象之继承和多态 :small_red_triangle:

### 类继承的应用

* php只支持单继承，不允许多继承。一个子类只允许有一个父类，不允许一个类继承多个类，但一个类可以被多个类继承
* 可以有多层继承，即一个类可以继承某一个类的子类，如类B继承类A，类C继承类B，那么类C也间接继承类A
* 子类可访问父类protected变量或函数

### 访问类型控制

|  | public默认 | private | protected |
|:-----|:-----|:-----|:-----|
| 在同一个类中 | 可以 | 可以 | 可以 |
| 在子类中 | 可以 | 不可以 | 可以 |
| 在类的外部 | 可以 | 不可以 | 不可以 |

### 子类中重载父类的方法

* 多态：父类方法a，子类可重写/重载方法a，a在执行时可表现不同的状态叫多态
    * 重载：方法名还是a，参数不同
    * 重写(覆盖)：方法名还是a，父类a没有了
* 子类中使用parent访问父类中被覆盖的属性和方法
    * parent::construct();
    * parent::fun();

```php
<?php
class Person{
  public $name;
  private $age;//私有的 无法继承
  protected $money;//受保护的 可以继承，但外部不能访问
  public function __construct($name, $age, $money){
    $this->name = $name;
    $this->age = $age;
    $this->money = $money;
  }
  public function cardInfo(){
    echo "name->".$this->name ."age->".$this->age ."money->". $this->money;
  }
}
class Yellow extends Person{
  public function __construct($name, $age, $money){
    parent::__construct($name, $age, $money);
  }
  //php重写
  public function cardInfo($pp){
    parent::cardInfo(); //使用父类被覆盖的方法，实现php重载；若注释这一行，则该方法被重写
    echo $pp;//11
  }
  public function test(){
    echo $this->age;//报错
    echo $this->money;//100
  }
}
// $s = new Person('yu', 22, 100);
$s = new Yellow('yu', 22, 100);
$s->cardInfo(11);
// echo ($s -> age);
// echo ($s -> money);
$s->test();
?>
```

## 7-4.PHP抽象类与接口 :small_red_triangle:

### 抽象方法和抽象类

* 抽象方法：当类中有一个方法，没有方法体，即没有花括号，直接分号结束；必须用关键字abstract定义，如public abstract function fun();
* 抽象类：方法抽象，方法所在的类必须也是抽象的
* 抽象类的特点
    * 不能实例化，即不能new成对象
    * 若想使用抽象类，必须定义一个类去继承这个抽象类，并定义覆盖父类的抽象方法

### 接口技术

* PHP不支持多重继承，即每个类只能继承一个父类。为了解决这个问题，PHP引入了接口
* 接口的思想是指定了一个实现了该接口的类必须实现的一系列函数？？？
* 接口定义格式：interface 接口名{//常量成员(const关键字定义) //抽象方法(不需要用abstract关键字)}
* 接口使用格式：class 类名 implements 接口1,接口2{...}
* **抽象类和接口的区别**
    * 当你关注一个事物的本质时，用抽象类；当你关注一个操作时，用接口
    * 接口是对动作的抽象，表示这个对象能做什么，对类的局部行为进行抽象
    * 抽象类是对根源的抽象，表示这个类是什么，对类的整体进行抽象，对一类事物的抽象描述
        比如：男人、女人是两个类，抽象类是人。人可以吃东西，狗可以吃东西，吃东西可定义成一个接口，然后让这些类去实现它
    * 一个类只能继承一个类(抽象类)，但可以实现多个接口
    * 接口是抽象类的变体，接口中所有方法都是抽象的，抽象类是声明方法的存在而不去实现它的类
    * 接口可以多继承，抽象类不行
    * 接口定义方法，不能实现，而抽象类可以实现部分方法
    * 接口中基本数据类型为static而抽象类不是
    * 接口中不能含有静态代码块以及静态方法，而抽象类可以含有静态方法和静态代码块

### 多态应用

* 对象的多态性：父类中定义的属性或行为被子类继承之后，可以具有不同的数据类型或表现出不同的行为。这使得同一个属性或行为在父类及其各个子类中具有不同的语义

**抽象类**
```php
<?php
//.1.含有抽象方法的类必须是抽象类
//2.抽象类不一定非得含有抽象方法
//3.抽象类可以存在普通方法
//4.抽象类不能被实例化，必须由一个子类去继承，并且把抽象方法都实现了
abstract class Person{
  //抽象方法 没有方法体
  public abstract function eat();//抽象方法，在子类必须实现，否则报错
}
class Man extends Person{
  public function eat(){
    echo 'eat';
  }
}
$man = new Man();
$man->eat();
?>
```

**接口**
```php
<?php
//1.接口声明的关键字是interface
//2.接口可以声明常量也可以抽象方法
//3.接口中的方法都是抽象方法，不用abstract去人肉定义
//4.接口不能被实例化，需要一个类去实现它
//5. 一个类不能继承多个类，一个类可以实现多个接口
//6. implements实现，类实现接口，是面向对象非常重要的概念
interface Person{
  const NAME = 'dd';
  public function run();
  public function eat();
}
interface study{
  public function study();
}
class Student implements Person,Study{
  const data = 3.14;
  public function run(){
    echo 'run';
  }
  public function eat(){
    echo 'eat';
  }
  public function study(){
    echo 'study';
  }
  public function test(){
    echo self::data;
  }
}
$xw = new Student;
$xw->eat();
echo $xw::NAME;
echo $xw->test();
echo Student::test();
?>
```

## 7-5.php常见关键字

#### final关键字

* 只能修饰类和方法，不能修饰成员属性
* 特性
    * final标识的类不能被继承
    * final标识的方法不能被子类重写(覆盖)
* 目的
    * 安全
    * 没必要被继承或重写

#### static关键字

* 修饰类的成员属性和成员方法(即静态属性和静态方法)
* 类中的静态属性和方法不用实例化(new)就可以直接使用类名访问
    * 格式：类::$静态属性  类::静态方法
* 在类的方法中，不能用$this来引用静态变量或静态方法，而需要用self来引用
    * 格式：self::$静态属性  self::静态方法
* 静态方法中不能使用非静态的内容，即不让使用$this
* 静态属性是共享的，即new很多对象也是公用一个属性

#### 单例设计模式

* 主要作用：保证在面向对象编程设计中，一个类只能有一个实例对象存在

#### const关键字

* php中定义常量使用define()这个函数，但在类里定义常量使用const
* 语法
    * const CONSTANT = 'xx';
    * echo self::CONSTANT;//类内部访问
    * echo className::CONSTANT;//类外部访问

#### instanceof关键字

* 作用：检测当前对象实例是否属于某一个类或这个类的子类

#### 自动加载类

* 当new实例化一个不存在的类时，则自动调用此函数__autoload()，并将类名作为参数传入此函数。可以使用这个实现类的自动加载

## 7-6.php错误处理类

#### 系统自带的异常处理

```php
<?php
//try分支 在这里进行代码检测，如果有问题就抛出一个异常，如果没有问题就继续执行
try{
  if($__GET['num'] == 5){
    throw new Exception('异常',123);
  }
//catch分支 就是捕捉异常对象
//参数：异常对象，使用的是类型约束，只能捕捉由Exception类实例化来的对象
}catch(Exception $e){
  echo $e->getFile();//得到异常文件
  echo $e->getLine();//得到异常行
  echo $e->getCode();//得到异常代码
  echo $e->getMessage();//得到异常信息
}
?>
```

#### 捕捉多个异常处理

* 在try代码之后，至少给出一个catch代码块，也可将多个catch代码块与一个try代码块关联使用，那么使用多个catch就可以捕获不同的类产生的异常。注意顺序

## 7-7.php和js的比较



## 8.mysql数据客户端基础

## 9.mysql创建表

## 10.mysql函数sql语句

## 11.mysql条件查询

## 12.mysql复杂条件查询
