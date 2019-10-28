(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{61:function(t,e,s){"use strict";s.r(e);var a=s(0),n=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("最全的场景分析："),s("a",{attrs:{href:"https://github.com/k88hudson/git-flight-rules/blob/master/README_zh-CN.md#%E7%BC%96%E8%BE%91%E6%8F%90%E4%BA%A4editting-commits",target:"_blank",rel:"noopener noreferrer"}},[t._v("git flight rules"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("1.常规开发")]),t._v(" "),t._m(1),s("p",[t._v("2.审核过了之后有冲突")]),t._v(" "),t._m(2),s("p",[t._v("3.开发了一半的功能，不想commit也不想丢掉")]),t._v(" "),t._m(3),s("p",[t._v("4.只提交某几个文件，其他几个文件暂存起来")]),t._v(" "),t._m(4),s("p",[t._v("5.已经git add 的文件，想变回未add的状态")]),t._v(" "),t._m(5),s("p",[t._v("6.已经修改，但未add的文件，想变回未修改的状态")]),t._v(" "),t._m(6),s("p",[t._v("7.已经commit了，但是不想要了，想回到上一个commit重新写")]),t._v(" "),t._m(7),s("p",[t._v("8.已经commit了，并且push了，但是不想要了，想回到上一个commit重新写")]),t._v(" "),t._m(8),s("p",[t._v("9.上个方法太暴力了")]),t._v(" "),t._m(9),s("p",[t._v("10.如果master被回滚了，你需要将本地master强制与远程同步")]),t._v(" "),t._m(10),t._m(11),t._v(" "),s("p",[s("a",{attrs:{href:"https://www.sourcetreeapp.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("可视化工具 Source Tree"),s("OutboundLink")],1),t._v(" + 命令行 = 效率、准确率提升")]),t._v(" "),t._m(12),t._v(" "),s("p",[t._v("==学会使用rebase 替代 merge！==")]),t._v(" "),s("p",[t._v("官方文档：https://git-scm.com/docs/git-rebase")]),t._v(" "),t._m(13),t._v(" "),s("p",[t._v("统计某仓库下自己代码贡献量的脚本（需要装: gawk）")]),t._v(" "),t._m(14)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"git使用过程可能遇到的问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git使用过程可能遇到的问题","aria-hidden":"true"}},[this._v("#")]),this._v(" git使用过程可能遇到的问题")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('// 首先确保自己在 master 且代码是最新的\ngit checkout master\ngit pull\n \n// 在最新的代码上建一个分支\ngit checkout -b xxx\n \n// 在本地进行开发\ndo something\ngit commit -m "zzz"\n \ndo something\ngit commit -m "yyy"\n \ndo something\ngit commit -m "www"\n\n// 刚才提交了什么\ngit show\n \n// 开发完成，push开发分支\ngit push -u origin xxx\n \n// 在代码审核工具上创建 pull request\n \n// 根据别人的审核意见，修改代码\ndo something\ngit commit -m "yyy"\n \ndo something\ngit commit -m "bbb"\n \n// 将修改后的代码push\ngit push\n \n// 审核通过，按按钮合并 pr\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("// 首先把master上的代码更新一下\ngit checkout mastera\ngit pull\n\n// 然后把开发分支的代码rebase到最新的代码之上\ngit checkout xxx\ngit rebase master\n \n// 这时，会出现冲突，打开文件，手动把文件修改正确\n \n// 然后执行这个：\ngit add .\ngit rebase --continue\n \n// 这时，开发分支 xxx 已经和master没有冲突了，push上去\ngit push\n \n// 在代码审核工具上，按按钮合并\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("// 把修改暂存起来\ngit add .\ngit stash\n \n// 可以查看刚刚暂存的信息\ngit stash list\n \n// 现在需要继续开发，把暂存的东西 pop 出来\ngit stash pop\n \n// 现在再看暂存列表，已经清空了\ngit stash list\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('// 只提交这几个文件\ngit add 1.js 2.js 3.js\ngit commit -m "zzz"\n\n// 看一下，剩下的文件确实未提交\ngit status\n\n// 暂存\ngit add .\ngit stash\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("git reset HEAD 1.js\n \n// 如果想把所有文件都未 add 的状态\ngit reset HEAD .\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("git checkout -- 1.js\n \n// 如果想把所有文件都变回未修改的状态\ngit checkout -- .\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("// 回到上一个 commit，把这个 commit 的修改变成 unstaged changes\ngit reset HEAD^\n\n// 把 unstaged changes 变回未修改的状态\ngit checkout -- .\n \n// 重新写\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("// 同上，但是最后再push的时候需要加 -f\n \ngit push -f\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("// 创建一个和上个提交完全相反的提交\ngit revert HEAD\ngit push\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v("git reset --hard origin/master\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"你可能需要的工具"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#你可能需要的工具","aria-hidden":"true"}},[this._v("#")]),this._v(" 你可能需要的工具")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"神奇的git-rebase"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#神奇的git-rebase","aria-hidden":"true"}},[this._v("#")]),this._v(" 神奇的git rebase")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"编码质量与能力衡量标准"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#编码质量与能力衡量标准","aria-hidden":"true"}},[this._v("#")]),this._v(" 编码质量与能力衡量标准")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('git log --author="$(git config --get user.name)" --pretty=tformat: --numstat | gawk \'{ add += $1 ; subs += $2 ; loc += $1 - $2 } END { printf "added lines: %s removed lines : %s total lines: %s\\n",add,subs,loc }\'\n')])])])}],!1,null,null,null);e.default=n.exports}}]);