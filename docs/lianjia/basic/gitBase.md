# git使用过程可能遇到的问题

最全的场景分析：[git flight rules](https://github.com/k88hudson/git-flight-rules/blob/master/README_zh-CN.md#%E7%BC%96%E8%BE%91%E6%8F%90%E4%BA%A4editting-commits)

1.常规开发

```
// 首先确保自己在 master 且代码是最新的
git checkout master
git pull
 
// 在最新的代码上建一个分支
git checkout -b xxx
 
// 在本地进行开发
do something
git commit -m "zzz"
 
do something
git commit -m "yyy"
 
do something
git commit -m "www"

// 刚才提交了什么
git show
 
// 开发完成，push开发分支
git push -u origin xxx
 
// 在代码审核工具上创建 pull request
 
// 根据别人的审核意见，修改代码
do something
git commit -m "yyy"
 
do something
git commit -m "bbb"
 
// 将修改后的代码push
git push
 
// 审核通过，按按钮合并 pr
```

2.审核过了之后有冲突

```
// 首先把master上的代码更新一下
git checkout mastera
git pull

// 然后把开发分支的代码rebase到最新的代码之上
git checkout xxx
git rebase master
 
// 这时，会出现冲突，打开文件，手动把文件修改正确
 
// 然后执行这个：
git add .
git rebase --continue
 
// 这时，开发分支 xxx 已经和master没有冲突了，push上去
git push
 
// 在代码审核工具上，按按钮合并
```

3.开发了一半的功能，不想commit也不想丢掉

```
// 把修改暂存起来
git add .
git stash
 
// 可以查看刚刚暂存的信息
git stash list
 
// 现在需要继续开发，把暂存的东西 pop 出来
git stash pop
 
// 现在再看暂存列表，已经清空了
git stash list
```

4.只提交某几个文件，其他几个文件暂存起来

```
// 只提交这几个文件
git add 1.js 2.js 3.js
git commit -m "zzz"

// 看一下，剩下的文件确实未提交
git status

// 暂存
git add .
git stash
```

5.已经git add 的文件，想变回未add的状态

```
git reset HEAD 1.js
 
// 如果想把所有文件都未 add 的状态
git reset HEAD .
```

6.已经修改，但未add的文件，想变回未修改的状态

```
git checkout -- 1.js
 
// 如果想把所有文件都变回未修改的状态
git checkout -- .
```

7.已经commit了，但是不想要了，想回到上一个commit重新写

```
// 回到上一个 commit，把这个 commit 的修改变成 unstaged changes
git reset HEAD^

// 把 unstaged changes 变回未修改的状态
git checkout -- .
 
// 重新写
```

8.已经commit了，并且push了，但是不想要了，想回到上一个commit重新写

```
// 同上，但是最后再push的时候需要加 -f
 
git push -f
```

9.上个方法太暴力了

```
// 创建一个和上个提交完全相反的提交
git revert HEAD
git push
```

10.如果master被回滚了，你需要将本地master强制与远程同步

```
git reset --hard origin/master
```

### 你可能需要的工具

[可视化工具 Source Tree](https://www.sourcetreeapp.com/) + 命令行 = 效率、准确率提升

### 神奇的git rebase

==学会使用rebase 替代 merge！==

官方文档：https://git-scm.com/docs/git-rebase

### 编码质量与能力衡量标准

统计某仓库下自己代码贡献量的脚本（需要装: gawk）
```
git log --author="$(git config --get user.name)" --pretty=tformat: --numstat | gawk '{ add += $1 ; subs += $2 ; loc += $1 - $2 } END { printf "added lines: %s removed lines : %s total lines: %s\n",add,subs,loc }'
```
