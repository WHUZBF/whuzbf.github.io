---
layout: post
title:  拓扑序的范畴论方法——二维拓扑序
categories: [physics, math]
tags: [cmt, math-ph]
---

上一篇主要是介绍了Kitaev模型并给出了拓扑序的定义，这一篇主要研究二维拓扑序范畴的各种性质，最终目的是说明二维拓扑序对应的范畴是一个UMTC（Unitary Modular Tensor Category）。在介绍时会比较多得联系上一篇所讲的模型。本篇主要内容如下：



<!--more-->



# 一般性的介绍

现在我们正式开始使用范畴的语言来描述拓扑序理论，重点基于前面的$\mathbb{Z}_2$格点模型，这是我们能找到并且能说明很多问题的最简单的模型，关于范畴论的一些常识的介绍可以见本网站上的范畴论笔记，这里对于重复的内容不再重新叙述，重点介绍张量范畴的理论。后面进行数学上的讨论时常常借用下面的几个范畴，叙述在此，以便查阅。

## 常见的几个范畴例子

## 拓扑激发的范畴结构

显然，由于拓扑激发是拓扑序中的可观测量，所以我们肯定希望对应的范畴中的对象是这些拓扑激发，自然就会问态射是什么？也就是那些在拓扑激发的世界线上的某一点处加上一个算符$f\in \operatorname{Hom}(x,y)$，使得拓扑激发从$x$变到$y$。由于这个算符只在某一个时刻存在且作用于拓扑激发上面，所以我们称为**瞬子**。

另外这些算符并不是任意的，他和拓扑激发一样，作为可观测量应当被local operator屏蔽，也就是说宏观上我们真正看到的瞬子是被local operator屏蔽之后的，从物理上看，其可以在世界线上随便移动而不影响最终结果，也就是要求：

> $\forall f\in \operatorname{Hom}(x,y), A\in\text{local operator}, [f,A]=0$

这也是不难想到的，因为拓扑激发是local operator作用下的不变子空间，那么我们自然希望$f$作用于$\ket{\psi},A\ket{\psi}$得到的是同一个拓扑激发，这要求$[f,A]=0$即可做到。

显然，瞬子的作用自然诱导了上面的合成，而且满足结合律，可以用下面的图表示：

![态射的合成](\img\posts\topological_order\16.png)

啥也不做也是一个瞬子，也就是说存在单位态射$\mathrm{id}_x\in\operatorname{Hom}(x,x)$，$\operatorname{id}_y\circ f=f=f\circ\operatorname{id}_x$：

![单位态射](\img\posts\topological_order\17.png)

拓扑激发（点缺陷）作为对象，瞬子（与所有local operator交换的算符）作为态射，拓扑序$\mathsf{C}$确定了一个范畴，我们记作$\mathcal{C}$。[^1]前面说过拓扑骨架的概念，是所有拓扑缺陷的集合，我们这里只是考虑了点缺陷，他构成了一个范畴，实际上对于domain wall等等高维的拓扑缺陷我们也可以对应的定义范畴，而拓扑骨架是比范畴更高的结构。

比如前面的toric model，$\mathbb{1},e,m,f$是上面的对象[^2]，上面的态射就是和所有string operator对易的算符，我们并不需要知道这些算符的具体形式就可以得到很多信息。我们将这个范畴记作$\mathcal{JC}$。

## $\mathbb{C}$-linear 范畴
由于量子力学本身就是建立在线性空间的框架内，所以自然想到拓扑序对应的范畴应当也有线性结构：
>  $\mathbb{C}$-linear 范畴是通常的范畴且每个态射空间都是复数域上的有限维线性空间，而且态射的合成
>  
>  $$\mathrm{Hom}_{\mathrm{Vec}}(z,y)\times\mathrm{Hom}_{\mathrm{Vec}}(x,z)\to\mathrm{Hom}_{\mathrm{Vec}}(x,y)$$
>  
>  还是双线性的映射。这里下标$\mathrm{Vec}$是为了强调将态射集合看作是一个线性空间

作为线性空间，应当存在且唯一存在零元素$0:x\to y$，作为加法单位元，而且在态射的合成上，零元素还满足$f\circ0=0=0\circ g$[^3]。我们称之为**zero morphism**。

在范畴内可以定义元素间余积和积的概念，分别可以看作是直和，直积，$\mathbb{C}$-linear 范畴的好处在于这俩的定义是等价的！这也就是为什么我们说在线性空间的意义下，线性空间之间的（外）直和和直积其实是等价的。抛去泛性质那些晦涩难懂的数学黑化我们给出直积的更加显然一些的定义：

> 范畴中对象$x_{1},\ldots,x_{n}\in\mathcal{C}$的直积还是$\mathcal{C}$中的对象$x$，而且存在一系列态射$\iota_i:x_i\to x\mathrm,\pi_i:x\to x_i,1\leq i\leq n$，且满足下面的方程：
> 
>$$
>\pi_i\circ\iota_j=\delta_{ij}\cdot\mathrm{id}_{x_j}(\forall1\leq i,j\leq n),\quad\sum_{j=1}^n\iota_j\circ\pi_j=\mathrm{id}_x
>$$
>
> 那么我们就称$(x,\iota_i,\pi_i)$是$\{x_1,\ldots,x_n\}$的直和，记作$\oplus_i x_i$。但是注意，一堆对象的直和不一定存在，但是如果他存在，必定只差一个同构。所以在差一个同构的意义上我们可以定义直和。[^4]

函子不光保态射，还是保直和的，也就是说对于函子$F:\mathcal{C}\to\mathcal{D}$，$(F(x),\{F(\iota_i)\},\{F(\pi_i)\})$是$\{F(x_1),\ldots,F(x_n)\}$的直和。

既然有了直和，那么我们整个范畴又有那么点线性空间的味道，直和当作加法。但是这个线性空间有没有一组基底还不知道，这个后面再说。我们先说这个直和的单位元，也就是**零对象zero obeject**，这个对象是直和的单位元$\mathbb{0}$，满足对于任意对象$x\in\mathcal{C}$有$x\oplus\mathbb{0}\simeq x\simeq\mathbb{0}\oplus x$。不难证明这个定义和下面的四条任意一个都等价：

$$
\begin{aligned}
&(\mathfrak{a})\mathrm{~Hom}_\mathcal{C}(\mathbb{0},b) = \{0\} \text{ for all } b \in \mathcal{C} \\
&(\mathfrak{b})\mathrm{~Hom}_\mathcal{C}(b,\mathbb{0}) = \{0\} \text{ for all } b \in \mathcal{C} \\
&(\mathfrak{c})\mathrm{~Hom}_\mathcal{C}(\mathbb{0},\mathbb{0}) = \{0\} \\
&(\mathrm{d})\mathrm{~id}_{\mathbb{0}} = \{0\}
\end{aligned}
$$

而且零对象是在差一个（典范）同构[^5]的意义下唯一确定的。

不光对范畴中的元素可以做直和，任意两个范畴之间也可以做直和，做完之后仍旧是一个$\mathbb{C}$-linear 范畴。

> $\mathcal{C}\oplus\mathcal{D}$中的对象和态射都按照$\mathcal{C}\times\mathcal{D}$来定义，我们只需要对每个态射集给个线性结构：
> 
> $$
> \mathrm{Hom}_{\mathcal{C}\oplus\mathcal{D}}((x,y),(x^{\prime},y^{\prime}))=\mathrm{Hom}_\mathcal{C}(x,x^{\prime})\oplus_{\mathbb{C}}\mathrm{Hom}_\mathcal{D}(y,y^{\prime})
> $$
> 
> 注意$\oplus_{\mathbb{C}}$的意思是强调在线性范畴$\mathrm{Vec}$的意义下做直和。

常见的线性范畴，群表示范畴都是$\mathbb{C}$-linear 范畴。

<p>
现在回忆一下点缺陷是local operator operator的表示，或者说左模，把表示间的同态作为态射，那么就得到了一个$\mathbb{C}$-linear 范畴：$\mathrm{LMod}_{\mathcal{A}_{\text{loc}}}(\mathrm{Vec})$。而左模之间的同态要求$\forall a \in \mathcal{A}_{\text{loc}}, f(a\cdot m)=a\cdot f(m)$。这不就是在说和所有的local operator对易吗？不就是瞬子的定义吗？所以<b>拓扑序的点缺陷对应的范畴就是$\mathrm{LMod}_{\mathcal{A}_{\text{loc}}}(\mathrm{Vec})$</b>。
</p>

<p>
另外，我们一直在不断强调，在定义拓扑序时你需要人为地对待什么是local，也就是取一个尺度，不同尺度可能导致不同的local operator algebra，选取不同尺度的过程其实就是随着重整化群流动的过程。对于toric model可以证明他们的左模是一样的，也即是说对于不同尺度下的local operator algebra：$\mathcal{A}_{\text{loc}}$和$\mathcal{B}_{\text{loc}}$，$\mathrm{LMod}_{\mathcal{A}_{\text{loc}}}(\mathrm{Vec})$与$\mathrm{LMod}_{\mathcal{B}_{\text{loc}}}(\mathrm{Vec})$等价，这称为<b>Morita等价</b>。因为torci model是重整化群变化的不动点，所以在不同尺度下我们看到相同的拓扑激发，对于一般的格点模型，这一点不能保证，不过让我们先关注不动点这一比较简单的情形。
</p>

# 2+1D拓扑序范畴的结构
前面我们指出任意维数拓扑序的范畴都等价于local operator algebra的左模范畴，但是这是一个非常粗糙的结构刻画，下面我们来一步步探索二维拓扑序中的新结构[^6]。后面我们不做特殊解释的情况下都假设范畴是$\mathbb{C}$线性范畴。

## （半）单性

考虑下面的微扰定义的拓扑激发：

$$
H+B_{p_0}=\sum_v(1-A_v)+\sum_{p\neq p_0}(1-B_p)+1
$$

显然基态是双重简并的，一个对应$B_{p_0}=+1$，也就是$\mathbb{1}$，还一个对应$B_{p_0}=-1$，也就是$m$。从物理上想，这个拓扑激发的希尔伯特空间应当是这两个空间的直和（并起来），联想前面建立的范畴论，对应的拓扑激发就应当是$\mathbb{1}\oplus m$。

当一个对象可以分解成两个对象的直和[^7]，这其实意味着一种不稳定性，也就是说现在加了个微扰，使得拓扑激发是简并的，如果微扰变那么一点点，这种简并会立马消失，拓扑激发会坍缩到某个子对象里面。比如上面的例子，如果我们把$\delta H$改为$(1+\epsilon)B_p$，那么在$\epsilon=0$是是$\mathbb{1}\oplus m$，一旦$\epsilon>0$，拓扑激发变成平凡的$\mathbb{1}$。而$\epsilon<0$会坍缩为$m$。这种不稳定的缺陷称为**复合缺陷**，而稳定的，也就是不可分解的缺陷称为**简单缺陷**。如果平凡缺陷是简单的，那么我们就称这个拓扑序是**稳定的**。

自然，我们会希望拓扑序范畴中的任意一个对象都可以分解为一系列简单缺陷的直和，这样我们就只用研究那几个简单缺陷，我们称这样的范畴是**半单的**，具体定义如下：

><p>一个对象$x\in\mathcal{C}$如果$\mathrm{Hom}_{\mathcal{C}}(x,x)\simeq\mathbb{C}$那么就称为<b>单的</b>。两个对象$x,y\in\mathcal{C}$如果$\mathrm{Hom}_{\mathcal{C}}(x,y)=0=\mathrm{Hom}_{\mathcal{C}}(y,x)$就称为disjoint的。一个半单范畴指满足下面条件的范畴</p>
>
>1. 有限多个对象的直和始终存在
>2. 存在一组互相disjoint的单对象$\{x_i\}_{i\in I}$，使得$\mathcal{C}$中的任意对象（在差一个同构的意义下）都可以写成他们的直和
>
>进一步如果$I$是有限集，就称$\mathcal{C}$为**有限半单范畴**。

<p>
对于半单范畴，$\{x_i\}_{i\in I}$的选取其实是不唯一的，但是他们之间只差一个同构，或者说假设范畴中所有的单对象构成一堆等价类$\{[x_1],[x_2],\ldots,[x_n]\}$（一般将单对象的等价类构成的集合记为$\operatorname{Irr}(\mathcal{C})$），那么我们只需要在每个等价类中挑一个代表对象出来就构成了一组$\{x_i\}_{i\in I}$。这其实就相当于选了一组基底。比如$\mathcal{JC}$范畴，也就是toric model的范畴中的基底就是：
</p>

$$
\mathbb{1},e,m,f
$$

可以证明，任意其它拓扑激发都同构于下面的形式：

$$
\mathbb{1}^{\oplus k_0}\oplus e^{\oplus k_1}\oplus m^{\oplus k_2}\oplus f^{\oplus k_3}
$$

从local operator algebra的表示的观点来看，就是这四个simple object构成了左模的一组不等价不可约表示，自然其它一般的表示就是他们的直和了。

让我们再回到物理直观，$\mathbb{1},e,m,f$中每一个拓扑激发都对应一个希尔伯特空间[^8]，而直和就对应希尔伯特空间的直和。而$\mathcal{JC}$作为有限半单范畴是这四类希尔伯特空间的直和，而希尔伯特空间属于线性范畴。那给我们一种非常naive的想法：

$$
\mathcal{JC}\simeq \operatorname{Vec}^{\oplus 4}
$$

其实这一点对于任意有限半单范畴都正确，也就是说：

$$
\mathcal{C}\simeq  \operatorname{Vec}^{\oplus|\operatorname{Irr}(\mathcal{C})|},\quad \mathcal{C}\text{ is a finit simple category}
$$

幸运的是对于二维拓扑序我们只需要考虑如此简单的一类范畴：

> 任意的二维拓扑序的拓扑激发范畴都是有限半单范畴，其中的单对象对应简单缺陷，拓扑序稳定当且仅当$\mathbb{1}$是单的

## 幺半性 
幺半的英文是Monoidal，单并不对应UMTC中的M，而是对应T。因为这是数学家更习惯的术语，物理学家更喜欢张量(**T**ensor)范畴这一说法。

## 幺正性 

## 刚性

## 融合范畴

## 辫结构

## 丝带结构

## UMTC

## 构造新的拓扑序

## 一些例子

# 二维拓扑序的分类


# 参考

[^1]: 后面拓扑序用`mathsf`字体，上面的范畴用`mathcal`字体，还有一个花体`mathscr`也很常用
[^2]: 当然，只是对象的一部分
[^3]: 这一点不难验证，注意我又偷了个懒，这个0元素的下标我省略了，这三个0应当是不同态射空间的0。
[^4]: 范畴论里面同构一次的处理很暧昧，有的时候我们认为两个对象同构就当作完全没区别了，就跟群同构一样，后面还会遇到很多次。但是有的时候两个同构的对象又必须仔细区分。
[^5]: 这里第一次遇到一个黑话“典范”，其实意思就是说这个不光差一个同构，连差的是什么同构我们都是知道的，也就是说连对象之间的同构本身也是唯一确定的。
[^6]: 当然，有的也不是只在二维拓扑序中有，后面都会注明
[^7]: 排除掉$x\oplus\mathbb{0}$平凡情况
[^8]: 前面强调过拓扑激发是一堆具体缺陷的等价类，所以应该对应一堆等价的希尔伯特空间，这里我们看作是讨论等价类中的一个具体实例