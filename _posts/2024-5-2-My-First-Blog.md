---
layout: post
title:  My First Blog
categories: [physics]
tags: [physics]
---

# This is my first Blog!

## 创建个人Blog的辛酸史

行间公式问题还没有彻底解决

下面是公式显示测试：

行内公式显示$E=mc^2$​，这是一个公式

<!--more-->

行间公式显示，这是一大块公式：

$$
f(a)=\frac{1}{2\pi i}\oint_\gamma\frac{f(z)}{z-a}dz
$$

$$
x = {-b \pm \sqrt{b^2-4ac} \over 2a}
$$

$$
\begin{aligned}
G_{\mu}^at^a& \begin{aligned}\to(1+\mathrm{i}\alpha^{a}t^{a})G_{\mu}^{b}t^{b}(1-\mathrm{i}\alpha^{c}t^{c})+\frac{\mathrm{l}}{g_{\mathrm{s}}}(1+\mathrm{i}\alpha^{a}t^{a})\partial_{\mu}(1-\mathrm{i}\alpha^{c}t^{c})\end{aligned}  \\
&=G_{\mu}^{b}t^{b}+\mathrm{i}\alpha^{a}G_{\mu}^{b}[t^{a},t^{b}]+\frac{1}{g_{\mathrm{s}}}(\partial_{\mu}\alpha^{c})t^{c}+\mathcal{O}(\alpha^{2})=G_{\mu}^{a}t^{a}-f^{abc}\alpha^{a}G_{\mu}^{b}t^{c}+\frac{1}{g_{\mathrm{s}}}(\partial_{\mu}\alpha^{a})t^{a}+\mathcal{O}(\alpha^{2}) \\
&=\left(G_{\mu}^{a}+f^{abc}G_{\mu}^{b}\alpha^{c}+\frac{1}{g_{\mathrm{s}}}\partial_{\mu}\alpha^{a}\right)t^{a}+\mathcal{O}(\alpha^{2})
\end{aligned}
$$

公式太长显示不全还没有搞好

## 公式显示的苦与累

如果你想用MathJax3显示公式，那么需要在post.html文件里添加这个，如果全站使用公式需要在_includes/head.html里面添加

```html
<head>
  <script src="https://polyfill.io/v3/polyfill.min.js?features=es6"></script>
  <script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"></script>
  <script>
    MathJax = {
      tex: {
        inlineMath: [['$', '$']],
        processEscapes: true,
        tags: 'all'
      }
    };
  </script>
</head>
```

这样子还可以实现自动编号，但是，由于我不懂JS，所以只能跟着前人教程走，前人基本都是使用的MathJax2，所以只有如何使用MathJax2实现行间公式过长自动添加浮动体：

```html
<script>
  MathJax.Hub.Queue(function () {
    $('.MathJax_Display').wrap("<div class='official'></div>");
  });
  </script>
```

相应的代码要改成：

```html
<head>
  <script type="text/x-mathjax-config">
    MathJax.Hub.Config({
      tex2jax: {
        skipTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code'],
        inlineMath: [['$','$'], ['\\(','\\)']],
        processEscapes: true
      },
      TeX: {
        equationNumbers: {
          autoNumber: "all"
        }
      }
    });
  </script>

  <script type="text/javascript" async
          src="https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.5/latest.js?config=TeX-AMS_CHTML">
  </script>
</head>
```

但是实测感觉MathJax3更加快。而且无论怎么加都不成功，所以我还是改回了MathJax3。



