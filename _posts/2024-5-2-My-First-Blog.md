---
layout: post
title:  My First Blog
categories: [CS]
tags: [blog]
---

# This is my first Blog!

## 创建个人Blog的辛酸史

费尽千辛万苦终于初步建立了一个个人Blog，最麻烦的点其实是本地运行环境Jekyll的配置，由于我使用的是[zhujiajun (zjiajun.github.io)](http://zjiajun.github.io/)的模板，而这个博主已经很多年没有更新了，导致一些组件是比较低的版本，而且没有gemlock文件，所以需要降低Jekyll版本来维持基本组件`jekyll-sass-converter (= 1.5.2)`运行（我的版本是3.9.5，目前最新版本是4.x.x）。

<!--more-->

Jekyll的环境配置其实说起来并不是技术上有很大的困难，只要`jekyll server`不成功，把Error复制粘贴后搜索网上竟然都有答案，我是按照网上的方法一步步修改版本，更改gemfile文件然后运行下面的代码：

```cmd
bundle exc jekyll server
```

竟然就成功了！

## 测试

下面是公式显示测试：

行内公式显示$E=mc^2$​，这是一个公式

行间公式显示，这是一大块公式：

$$
\require{physics}
\require{cancel}
\require{unicode}
\require{newcommand}
{% raw %}
\def\oiint{{\bigcirc}\kern-11.5pt{\int}\kern-6.5pt{\int}}
{% endraw %}
$$

$$
f(a)=\frac{1}{2\pi i}\oint_\gamma\frac{f(z)}{z-a}dz
$$

$$
\begin{equation}
x = {-b \pm \sqrt{b^2-4ac} \over 2a}
\label{ref}
\end{equation}
$$

可以引用为\eqref{ref}

$$
\begin{aligned}
G_{\mu}^at^a& \begin{aligned}\to(1+\mathrm{i}\alpha^{a}t^{a})G_{\mu}^{b}t^{b}(1-\mathrm{i}\alpha^{c}t^{c})+\frac{\mathrm{l}}{g_{\mathrm{s}}}(1+\mathrm{i}\alpha^{a}t^{a})\partial_{\mu}(1-\mathrm{i}\alpha^{c}t^{c})\end{aligned}  \\
&=G_{\mu}^{b}t^{b}+\mathrm{i}\alpha^{a}G_{\mu}^{b}[t^{a},t^{b}]+\frac{1}{g_{\mathrm{s}}}(\partial_{\mu}\alpha^{c})t^{c}+\mathcal{O}(\alpha^{2})=G_{\mu}^{a}t^{a}-f^{abc}\alpha^{a}G_{\mu}^{b}t^{c}+\frac{1}{g_{\mathrm{s}}}(\partial_{\mu}\alpha^{a})t^{a}+\mathcal{O}(\alpha^{2}) \\
&=\cancelto{\text{测试}}{\left(G_{\mu}^{a}+f^{abc}G_{\mu}^{b}\alpha^{c}+\frac{1}{g_{\mathrm{s}}}\partial_{\mu}\alpha^{a}\right)t^{a}}+\mathcal{O}(\alpha^{2})
\end{aligned}
$$

这是physics宏包的测试

$$
\boxed{
\ket{\psi},\bra{\psi},\tr,\Im,\grad,\ket{\cancelto{\text{测试}}{\left(G_{\mu}^{a}+f^{abc}G_{\mu}^{b}\alpha^{c}+\frac{1}{g_{\mathrm{s}}}\partial_{\mu}\alpha^{a}\right)t^{a}}}
}
$$

这是oiint的测试

$$
{\Huge \unicode{8751}}\unicode{8752}\iiiint \oint\oiint
$$

$$
\begin{equation*}
\begin{aligned}&\oiint_{\partial\Omega}\mathbf{E}\cdot\mathrm{d}\mathbf{S}=\frac1{\varepsilon_0}\iiint_\Omega\rho\mathrm{d}V\\&\oint_{\partial\Omega}\mathbf{B}\cdot\mathrm{d}\mathbf{S}=0\\&\oint_{\partial\Sigma}\mathbf{E}\cdot\mathrm{d}\boldsymbol{\ell}=-\frac{\mathrm{d}}{\mathrm{d}t}\iint_{\Sigma}\mathbf{B}\cdot\mathrm{d}\mathbf{S}\\&\oint_{\partial\Sigma}\mathbf{B}\cdot\mathrm{d}\boldsymbol{\ell}=\mu_0\left(\iint_\Sigma\mathbf{J}\cdot\mathrm{d}\mathbf{S}+\varepsilon_0\frac{\mathrm{d}}{\mathrm{d}t}\iint_\Sigma\mathbf{E}\cdot\mathrm{d}\mathbf{S}\right)
\end{aligned}
\end{equation*}
$$

只有放在
```
\begin{equation}
----
\end{equation}
```
里面的才会被自动编号


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

但是实测感觉MathJax3更加快。而且无论怎么加都不成功，所以我还是改回了MathJax3。因为mathJax3支持不少宏包，可以实现很多额外命令，最重要的是对physics宏包的支持[The TeX/LaTeX Extension List — MathJax 3.2 documentation](https://docs.mathjax.org/en/latest/input/tex/extensions/index.html)。只需要在文档任意一个公式的地方插入下面的语句就好（最好就第一个行间公式的地方）

```latex
$$
\require{physics}
\require{cancel}
\require{unicode}
\require{newcommand}
{% raw %}
\def\oiint{{\bigcirc}\kern-11.5pt{\int}\kern-6.5pt{\int}}
{% endraw %}
%---the first equation---%
$$
```

美中不足的是为了定义`\\oiint`(定义方法参见[关于知乎LaTeX的\oiint的打出方法 - 知乎 (zhihu.com)](https://zhuanlan.zhihu.com/p/168766717))。需要额外插入 `{% raw %}{% endraw %}` ，这直接导致第一个公式无法正常在typora中渲染，但是在浏览器中是正常的，push到云端之后可以把`{% raw %}{% endraw %}`删掉。

公式正常显示的问题到这里基本就告一段落了，除了屏幕过窄无法在行间自动加入水平浮动体的问题，如果您知道答案请邮件告知。

## 亟待解决的问题

- [ ] 由于twitter变成了X，这使得原先的分享网址没法使用，还需要解决
- [x] 还需要添加pdf的下载页面
- [x] downloads页面已经添加，就差对layout进行建设，加上一些供下载的内容
- [ ] dounloads页面还要继续优化
- [x] 404页面自定义
- [ ] 图片点击放大还未解决
- [ ] 一些个人信息还需要完善
- [x] 显示最新修改日期
- [x] 置顶选项
- [x] 长公式显示的问题
- [ ] 优化置顶使得置顶文章更有优越感
- [ ] 琢磨如何改网页字体显示

## 解决方案

修改日期的显示在本地可以，但是到了云端就不行了，这可能需要将site push而不是整个项目文件push来达到，因为git-page支持的插件有限。

对于长公式显示，只需要在`post`文件中引入CSS格式定义：

```css
  <style>
    mjx-container
    {
      overflow-x: auto;
      overflow-y: hidden;
    }
  </style>
```

就好了，但是对于有标号场公式的显示，仍然会失效，这时可以手动在md文件前面加上:

```html
<style>
.formula{
  width: 100%;
  overflow-x: auto
}
</style>
```

然后在要修正的公式那里套上：

```html
<p class=formula>
</p>
```

还有一个公式显示的问题，比如下面的一段：

```markdown
$x_i$和$x_j$
```

markdown会把两边的公式里面的下划线也看成是斜体语法的一部分，导致在网页上无法正常渲染，解决方法就是用`<p>....</p>`包起来：

```html
<p>$x_i$和$x_j$</p>
```

downloads页面可以通过object标签内嵌pdf阅读器解决，但是还需要继续美化

404页面只需要在根目录加上自己写的404页面就好。

图片点击放大是个问题，按照网上的思路并未解决，可以先用一般的html试一下
