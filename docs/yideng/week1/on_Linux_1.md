# 讲给前端的Linux必备知识① :star:

::: warning
**课件**
Linux开发环境初准备讲义
:::

> 9min30s开讲

::: warning
****纪律**
1. 坚持学习
2. 每天打卡，总结当天学习内容
3. 直播不可旷课，旷课要请假，及时响应班主任消息
4. 到课率85%以上，免费发一份小册子
:::

> 22min30s以前强调纪律

::: tip
**王老师讲环境**
* 预读周为了补齐同学之间差距，看录播查漏补缺
* 操作系统是什么？mac
* 课程过程中要配很多环境，性能优化周要配服务器，服务器要配到Linux上
* 有mac可不装Linux，但建议装，因为开发中容易乱，不易排查问题，很多课都需要Linux环境
* 配环境有问题找老王[疯狂的技术宅]

*虚拟机*
* windows推荐装VMware
* mac推荐装Parallels Desktop，统一的话装VMware Fusion
* 不熟悉linux的同学，装带图形界面的，但推荐装不带图形界面的，因为占用内容小；统一装[centos](http://www.centosproject.com)

*centos*
* [centos镜像](http://www.centos.org)有很多版本
* 不需要图形界面的话，装mini版足够，先装vension7
* 录播视频有详细安装教程

*VMware*
* [VMware官网](http://www.vmvare.com/cn.html)下载，然后百度搜vmware sn找序列号
* VMware分mac版和windows版，mac装Fusion版，windows装workstation版
* VMware最坑的是网络

*终端*
* mac终端自带item2
* windows推荐安装cmder
* 连接虚拟机、vps等都可用终端命令

*终端命令*
* 登录虚拟机：ssh 用户名@ip（ssh root@192.168.8.10）[root是超级用户]
    * 第一次登录有一行提示yes/no
    * 输入密码口令（防止忘记，口令可设成123456，vps的话把口令记在笔记里，后期可学无口令登录）
* 登出：exit
* 切换目录：cd 目录名[文件名区分大小写]；cd后不加目录名，进入用户默认目录“/home/用户名”
* 查看所有目录/文件名称：ls
* 查看所有目录/文件详细信息：ll
* 查看所有隐藏目录/文件：ls -a
* 创建目录：mkdir 目录名[文件名不能重复]
* 复制文件：cp 要复制文件 某新文件 
* 切换用户：su 用户名
* 查看自己当前在哪个路径下：pwd
* 查看文件内容：cat 文件/目录
* 查看ip及网卡：ifconfig 或 ip addr 或 ip add
* 编辑：i
* 退出编辑：esc
* 不保存编辑并进入命令模式：:q!
* 保存编辑并进入命令模式：:wq
* 退出正在进行的进程到命令模式：control+c
    
:::

> 42min30s以前讲环境，接下来讲Linux PDF 讲义

> 其中48min40s开始讲两分钟windows系统装vmware的坑，网络中的虚拟网络这部分

> 其中58min40s~1h5min40s讲windows系统终端

**Linux是什么**
* Linux本意是指其内核kernel，centos是Linux发行版，发行版之间运作机一样，指令不同

**Linux目录**
* /home：最重要，当前登录的普通用户默认目录
* /root：超级管理员专用目录，根目录
* /bin：软连接，放系统的程序
* /boot：不能改，独立的分区，引导cpu执行操作系统的代码；里边有很多img，这些img是内核的程序
* /dev：设备
* /lib：存放一些库、二进制文件
* /media：接UP自动识别
* /mnt：接外置存储器，把外置存储器配置进系统，该项比较老
* /opt：自己安装的一些软件
* /proc：虚拟目录，硬盘上找不到，关闭系统就没了；存放操作系统的实时数据，还是很重要的
    * 文件内包含一些信息，其中前面几列的数据表示pid，即给进程分配的id，其中后面几列有名字的，如meminfo里边是内存相关信息
* /var：里边东西比较杂
    * /log：日志
* /usr：大部分用户信息
* /etc：非常重要，所有系统的配置文件，重要服务的配置文件，相当于windows的注册表
    * 下面是一些重要的配置文件
    * init.d：存放一些启动服务的脚本
    * rc0.d、rc1.d、rc2.d……rc.d是个目录、rc.local：初始化
    * shadow：加密的口令
    * passwd：当前操作系统下所有的用户
    * nginx：网络服务
    * sysconfig/network-scripts/：跟网络相关，配静态ip的话，在此路径下找网卡（看前缀是否是ifcfg-），其中127.0.0.1地址归ifcfg-lo文件管；
        * 下面是/ifcfg-ens32/目录下网卡相关信息
        * **默认ip地址是浮动的，如何设置固定ip？**设置IPADDDR=自己想要的ip
        * ONBOOT=yes：启动时激活网卡
        * IPADDR=ip地址
        * PREFIX=24：子网掩码
        * GATEWAY=路由器地址
        * BOOTPROTO=none：默认none，静态地址static，自动获取dhcp[后面设置的固定ip失效]

::: tip
**王老师讲查看ip和网卡涉及的网络知识**
* lo：local的意思，本地回环地址127.0.0.1
* **本地回环地址127.0.0.1和0.0.0.0的区别？**
    * 0.0.0.0是一种标记，不是ip。网络服务必须通过 IP:port[端口]访问；
    * <i>谁有权利访问这个IP？</i>若服务面向全网，任何人都可以访问；若出于安全性考虑，允许某些机器访问，就需要侦听地址；侦听到0.0.0.0，则全网访问，侦听到127.0.01，则自己访问，侦听到192.168.0.*，则该网段内用户可访问；
    * localhost相当于本地域名[本机名]，
* inet4/inet6，其中::1对应inet6的127.0.0.1，其中::1/128中的/128是子网掩码，/8代表255.0.0.0，/128代表FF::，/24代表255.255.255.0
* 类似ens32：网卡名，可看到网卡后对应的地址
* 子网掩码：和二进制相关，和内存结构相关，用于划分子网
* **子网掩码为什么都是255开头？**
    * 255转化成二进制是11111111，即8个1，所以/后边的数除以8的余数就是几个255
* 计算机存储数据的最小单位是字节byte，比字节更小的单位是bit，1byte=8bit（即8个二进制位）
* ipv4占了4个字节，32个位，在计算机里是整型int的，127.0.0.1以.间隔4个字节
:::

> 2h10min30s开始开发环境

**Linux环境**
* 安装Node.js，LTS版

**sublime**

**XAMPP**
* mac不装vm版，装cvm版

::: warning
**总结**
* mac装 XAMPP、centos mini 
* windows装 XAMPP、cmder、centos GUI
* NodeJS在所有环境都要装，开发机和虚拟机
:::

[VMware Fusion安装教程](https://www.jianshu.com/p/99b707163683)

[centos安装教程](https://blog.csdn.net/nmtcttn/article/details/86305570)

[XAMPP安装教程](https://www.jianshu.com/p/613a51aae849)  [XAMPP配置教程](https://blog.csdn.net/it_cgq/article/details/79430511) 

::: danger
**不懂的名词**
* 软连接
* windows的注册表：统一保存配置文件、配置项，键值对和分支，配置路径
* 子网掩码
:::