# 讲给前端的Linux必备知识① :star:

> 9min30s开讲

::: warning
<b>纪律</b>
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
* 进入某目录：cd
:::

> 42min30s以前讲环境，接下来讲Linux PDF 讲义

> 其中48min40s开始讲两分钟windows系统装vmware的坑，网络中的虚拟网络这部分

> 其中58min40s~1h5min40s讲windows系统终端

**Linux是什么**
* Linux本意是指其内核kernel，centos是Linux发行版，发行版之间运作机一样，指令不同

**Linux目录**
* /bin






