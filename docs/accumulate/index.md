# Markdown语法


| 标记 | 语法 |
|:-----|:-----|
| 标题1 | # Heading 1 |
| 标题2 | ## Heading 2 |
| 标题3 | ### Heading 3 |
| 标题4 | #### Heading 4 |
| 斜体 | \*italic\* |
| 粗体 | \*\*bold\*\* |
| 删除线 | \~\~line\~\~ |
| 图片 | \!\[Image Title\](http://xxx.png) |
| 链接 | \[Link Text\](http://xxx.com) |
| 引用 | \> Here is a quote block |
| 内联代码 | \`code\` |
| 块级代码 | \`\`\`code block\`\`\` 或 \`\`\`javascript code block\`\`\` |
| 块级代码高亮行 | \`\`\`js {3} code block\`\`\` |
| 导入代码片段 可高亮 | <<< @/docs/yideng/week0/ES5.md{11} |
| 分隔符 | ---- 或 ***** |
| 生成目录 | \[\[toc\]\] |
| 锚点 | \[公式标题锚点\](#标题) |
| 表情 | :white_check_mark:  :negative_squared_cross_mark:  :100:  [emojis列表](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json) |

## 语义标签

| 语义标签 | 语法 |
|:-----|:-----|
| 内联样式 | \<p style="color: red;font-size: 30px; font-family: '宋体';"\>内联样式\</p\> |
| 斜体 | \<i\>斜体\</i\> |
| 加粗 | \<b\>加粗\</b\> |
| 强调 | \<em\>强调\</em\> |
| 上标 | Z\<sup\>a\</sup\> |
| 下标 | Z\<sub\>a\</sub\> |
| 键盘文本 | \<kbd\>Ctrl\</kbd\> |

### 无序

```
* one
* two
* three
```

### 有序

```
1. one
2. two
3. three
```

### 序表嵌套

```
1. one
    1. one-1
    2. two-2
2. two 
    * two-1
    * two-2
```

### 序表嵌套代码块

```
* one

    var a = 10;     // 与上行保持空行并 递进缩进
```

### 选项（不支持）

```
-  [x] 选项一 
-  [ ] 选项二
```

### 表格

```
| a | b | c |
|:-----:|:-----|-----:|
| 居中 | 左对齐 | 右对齐 |
```

### 自定义容器

```
::: tip
This is a tip
:::

::: warning
This is a warning
:::

::: danger
This is a dangerous warning
:::
```






