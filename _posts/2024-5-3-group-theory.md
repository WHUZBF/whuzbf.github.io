---
layout: post
title:  知乎抓取文章试运行
categories: [CS]
tags: [math-yun]
author: Lingyun Wang
link: https://zhuanlan.zhihu.com/p/692020167
---

# 知乎抓取文章试运行

这是一篇知乎文章[【同步更新】物理向群论2：随手记 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/692020167)
使用知乎文章[同步知乎文章到基于Jekyll的个人网站 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/143140821)的思路进行抓取

运行结果是由于知乎网站的限制，图片的抓取完全失败，但是其它内容的抓取以外的好。但是由于知乎的公式编辑器比较垃圾，所以行间公式虽然支持的不错，行内公式就完全抓虾了。

<!--more-->

```
 artisync https://zhuanlan.zhihu.com/p/692020167 
```

这个思路基本失败了，因为push到github上会出很大的问题，当然也可以搞，只需要仅仅push` _site`目录就好了，那样做代价太大。