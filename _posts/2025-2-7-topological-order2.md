---
layout: post
title:  拓扑序的范畴论方法——二维拓扑序
categories: [physics, math]
tags: [cmt, math-ph]
---

上一篇主要是介绍了Kitaev模型并给出了拓扑序的定义，这一篇主要研究二维拓扑序范畴的各种性质，最终目的是说明二维拓扑序对应的范畴是一个UMTC（Unitary Modular Tensor Category）。在介绍时会比较多得联系上一篇所讲的模型。另外，从本篇开始由于大量涉及到范畴论，所以不可避免使用交换图，我实在懒得用tikz逐一重新绘制，所以直接选择插入图片的方式。

其次，我们此篇后面的讨论都以bosonic without symmetry这类最简单的拓扑序进行，最后我们会对fermionic以及with symmetry的情况进行简要讨论。

本篇主要内容如下：

- [一般性的介绍](#一般性的介绍)
  - [常见的几个范畴例子](#常见的几个范畴例子)
    - [G分次线性空间$\\mathsf{Vec\_{G}}$](#g分次线性空间mathsfvec_g)
  - [拓扑激发的范畴结构](#拓扑激发的范畴结构)
  - [$\\mathbb{C}$-linear 范畴](#mathbbc-linear-范畴)
- [2+1D拓扑序范畴的结构](#21d拓扑序范畴的结构)
  - [（半）单性](#半单性)
  - [幺半性](#幺半性)
  - [幺正性](#幺正性)
  - [刚性](#刚性)
  - [融合范畴](#融合范畴)
  - [辫结构](#辫结构)
  - [丝带结构](#丝带结构)
  - [UMTC](#umtc)
  - [构造新的拓扑序](#构造新的拓扑序)
    - [拓扑序的堆叠](#拓扑序的堆叠)
    - [拓扑序的时间反演和空间反演](#拓扑序的时间反演和空间反演)
  - [一些例子](#一些例子)
    - [Quantum Double Category](#quantum-double-category)
    - [Ising type category](#ising-type-category)
    - [Pointed范畴](#pointed范畴)
  - [$U(2)$ Chern-Simons理论的拓扑序](#u2-chern-simons理论的拓扑序)
- [二维拓扑序的分类](#二维拓扑序的分类)
    - [模扩张](#模扩张)
    - [手征中心荷](#手征中心荷)
    - [$\\boxtimes\_{\\mathcal{E}}$  vs  $\\boxtimes$](#boxtimes_mathcale--vs--boxtimes)
    - [二维GQL的分类](#二维gql的分类)
    - [SPT态的分类](#spt态的分类)
- [参考](#参考)


<!--more-->



# 一般性的介绍

现在我们正式开始使用范畴的语言来描述拓扑序理论，重点基于前面的$\mathbb{Z}_2$格点模型，这是我们能找到并且能说明很多问题的最简单的模型，关于范畴论的一些常识的介绍可以见本网站上的范畴论笔记，这里对于重复的内容不再重新叙述，重点介绍张量范畴的理论。后面进行数学上的讨论时常常借用下面的几个范畴，叙述在此，以便查阅。

## 常见的几个范畴例子

### G分次线性空间$\mathsf{Vec_{G}}$
- 对象是有限维的线性空间，而且这些线性空间可以分解为直和$V=\bigoplus_{g\in G} V_g$，$G$是指定的一个有限群。
- 对象之间的态射是保分次结构的线性映射，也就是$f=\bigoplus_{g\in G} f_g$，其中$f_g: V_g\to W_g$
- 态射的合成就是对每个$f_g$的通常的映射的合成（也就是$\circ$和$\oplus$可交换）
- 恒等态射就是通常线性空间的恒等态射（只是加了个群指标$g$）


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

在范畴内可以定义元素间余积和积的概念，分别可以看作是直和，直积，$\mathbb{C}$-linear 范畴的好处在于这俩的定义是等价的！这也就是为什么我们说在线性空间的意义下，线性空间之间的（外）直和和直积其实是等价的。抛去泛性质那些晦涩难懂的数学黑话我们给出直积的更加显然一些的定义：

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
&(a)\mathrm{~Hom}_\mathcal{C}(\mathbb{0},b) = \{0\} \text{ for all } b \in \mathcal{C} \\
&(b)\mathrm{~Hom}_\mathcal{C}(b,\mathbb{0}) = \{0\} \text{ for all } b \in \mathcal{C} \\
&(c)\mathrm{~Hom}_\mathcal{C}(\mathbb{0},\mathbb{0}) = \{0\} \\
&(d)\mathrm{~id}_{\mathbb{0}} = \{0\}
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

<p>常见的线性范畴，群表示范畴都是$\mathbb{C}$-linear 范畴。范畴可以定义线性，函子也是，函子线性要求$F:\mathcal{C}\to\mathcal{D}$对于任意$x,y$，有$F_{x,y}:\mathrm{~Hom}_\mathcal{C}(x,y)\to\mathrm{Hom}_\mathcal{D}(F(x),F(y))$是线性空间意义上的线性映射</p>

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

有限群表示范畴的单对象就是不可约表示，$\mathsf{Vec_{G}}$的单对象是下面这类对象：

$$
(\mathbb{C}_{(g)})_h = \mathbb{C}\delta_{g,h}
$$

后面我们会用到这个例子。

## 幺半性 
幺半的英文是Monoidal，单并不对应UMTC中的M，而是对应T。因为这是数学家更习惯的术语，物理学家更喜欢张量(**T**ensor)范畴这一说法。

想到幺半性，第一时间想到的肯定是幺半群，所谓幺半群就是群公理不要求有逆。也就是含幺元的半群，那么前面讲单性的时候我们给范畴间的对象引入了加法$\oplus$，幺半性就是要引入乘法$\otimes$。

还是先来看下物理意义，引入加法的时候，我们是把多种缺陷的行为并在一起合成一个缺陷，就像是缺陷的叠加态。这里我们也是要把缺陷并在一起，但是我们是把多个缺陷并在一起，注意这里和直和的细微差别。如果两个缺陷隔得非常近[^9]，我们就可以把他们打包看成一个缺陷，就像是多个粒子的希尔伯特空间看作是他们的张量积一样。对应的，世界线上的瞬子也会隔得很近，就打包成两个粒子的世界线融合，瞬子也融合在一起了：

![缺陷的张量积](\img\posts\topological_order\18.png)

显然这里$f\otimes g(x\otimes y)=f(x)\otimes g(y)$。而且经过这个操作之后显然还构成一个缺陷，也就是说还是$\mathcal{C}$中的元素，那么$\otimes$就可以看作是$\mathcal{C}\times\mathcal{C}\to\mathcal{C}$上的函子。

> 要说明函子性，其实就是要在物理上注意到这一点：
>
> $$
> (f'\otimes g')\circ (f\otimes g) = (f'\circ f)\otimes (g'\circ g)
> $$
> 

我们还是举toric model的粒子，根据$f$的定义，我们立即发现他可以看作是面上和一个角上有$e$,$m$缺陷：

$$
e\otimes m=f=m\otimes e.
$$

另外两个$m$放在一起可以用一个string operator湮灭，同理$f$也是，$e$更是：

$$
e\otimes e=m\otimes m = f\otimes f =\mathbb{1}
$$

所以在$\otimes$的作用下，这些simple object构成了$\mathbb{Z}_2\times \mathbb{Z}_2$群。

> 问题是，是不是知道了simple object之间的乘法我们也就知道了全部object的乘法呢？这在后面讨论融合规则的时候比较重要。其实这就是要求$\otimes$和$\oplus$之间满足分配律，对于后面的讨论，这一点是成立的。[^10]

另外，$\otimes$不一定满足交换律，非交换在物理现象中已经见怪不怪了，所以我们不需要额外要求这一点。但是结合律呢？你或许会认为$(x\otimes y)\otimes z=x\otimes(y\otimes z)$，毕竟物理上很少出现不满足结合律的。但是现在让我们用范畴的思维，在范畴层面上，相等是一个很不好用的东西，很多时候我们可以放宽条件到只要求等价，并不要求严格相等。这首先意味着这俩之间存在一个态射，后面我们会进一步要求这是对象之间的同构，也就是说存在瞬子（我们称之为associator）使得：

$$
\alpha_{x,y,z}:(x\otimes y)\otimes z\to x\otimes(y\otimes z)
$$

从物理上讲就是存在一条绝热路径连接这两个拓扑激发。所以结合律不一定满足，但是他们之间一定存在一个态射，为了后面描述的方便我们用下面的图片叙述这个态射：

![结合子](\img\posts\topological_order\19.png)

进一步，前面在描述瞬子时我们提到过他被local operator屏蔽了，所以瞬子在世界线上是可以任意移动的，从物理上讲就是**同伦等价的路径描述相同的物理**。这一点在后面物理的描述上还会经常用到，那么我们自然想到有下面的等式：

![associator的自然性](\img\posts\topological_order\20.png)

$$
\alpha_{x^\prime,y^\prime,z^\prime}\circ((f\otimes g)\otimes h)=(f\otimes(g\otimes h))\circ\alpha_{x,y,z}
$$

让我们来看看数学上这是在说什么。首先结合律涉及到三个对象，他们可以看作是$\mathcal{C}\times\mathcal{C}\times\mathcal{C}$中的对象，而两种不同的结合方式就相当于是$\mathcal{C}\times\mathcal{C}\times\mathcal{C}$到$\mathcal{C}$的函子，告诉你先做后面的乘法还是先做前面的乘法，而$\alpha$确定了两个函子之间的自然变换：

$$
\alpha:\otimes\circ(\otimes\times\mathrm{id}_{\mathbb{C}})\Rightarrow\otimes\circ(\mathrm{id}_{\mathbb{C}}\times\otimes)
$$

自然性则是根据前面物理上的论断看出的。那么回到前面说的，虽然不同的结合方式并不是严格相等，但是我们希望不同的结合方式是等价的， 自然变换的存在性说明了两个函子”同伦“，我们相当于想进一步要求两个函子是”同胚“的，也就是说在函子范畴的语境下，自然变换作为态射是同构的，也就是说我们期望$\alpha$是个自然同构。

所以我们在差一个同构的意义下定义了结合律，当然这是三个对象的，对于四个对象之间的结合，比如考虑$((x\otimes y)\otimes z)\otimes w\to x\otimes(y\otimes(z\otimes w))$的自然同构，我们不需要定义一个新的associator，这个同构可以用$\alpha$构造出来，比如下面的世界线构造：

![五边形等式](\img\posts\topological_order\21.png)

这构造了两个不同的瞬子，都可以看作是$((x\otimes y)\otimes z)\otimes w\to x\otimes(y\otimes(z\otimes w))$的自然同构，而这两种方式的世界线之间是同伦的，所以这两个瞬子我们应当看作是相等的，也就是说有下面的等式：

$$
(\mathrm{id}_x\otimes\alpha_{y,z,w})\circ\alpha_{x,y\otimes z,w}\circ(\alpha_{x,y,z}\otimes\mathrm{id}_w)=\alpha_{x,y,z\otimes w}\circ\alpha_{x\otimes y,z,w}
$$

在物理上，平凡缺陷和任何缺陷放在一起，都应当不改变原先的缺陷，按照我们前面处理结合律一样的方法，我们也定义到只差一个自然同构：

$$
\lambda_x:1\otimes x\to x,\quad\rho_x:x\otimes1\to x
$$

$\lambda$看作是$\mathbb{1}\otimes\bullet\to\bullet$的自然同构，$\rho$看作是$\bullet\otimes\mathbb{1}\to\bullet$的自然同构。[^11]

那么前面我们直和有加法单位元$\mathbb{0}$，也就是零对象，这里我们发现平凡缺陷对应的就是乘法单位元$\mathbb{1}$。

现在我们把前面得到的所有物理上的观察总结成下面的语言，也就是幺半范畴的定义：

> 一个幺半范畴包含下面几个资料：
> - 一个范畴$\mathcal{C}$
> - 一个函子$\otimes:\mathcal{C}\times\mathcal{C}\to\mathcal{C}$
> - 一个独一无二的幺元$\mathbb{1}\in\mathcal{C}$
> - <p>一个$\otimes\circ(\otimes\times\mathrm{id}_{\mathcal{C}})\Rightarrow\otimes\circ(\mathrm{id}_{\mathcal{C}}\times\otimes)$的自然同构$\{\alpha_{x,y,z}\}$，称为结合约束</p>
> - 一个$1\otimes \bullet\to \bullet$的自然同构$\{\lambda_x\}$，称为左幺约束
> - 一个$ \bullet\otimes 1\to \bullet$的自然同构$\{\rho_x\}$，称为右幺约束
>
> 别忘了前面对四个元素之间结合律的观察，还要求下面的五边形交换：
>
> ![五边形公理](\img\posts\topological_order\22.png)
>
> 在不少文献中下面的三角形公理也是定义的一部分：
>
> ![三角形公理](\img\posts\topological_order\23.png)
>
> 但是数学人常常做的一件事情就是把公理简化称最小。数学人的定义中不包含$\lambda,\rho$，而是只要求$\mathbb{1}\otimes\bullet$和$\bullet\otimes\mathbb{1}$这两个函子都是同构，而且存在对象之间的等价：$\iota:\mathbb{1}\otimes\mathbb{1}\to\mathbb{1}$。
>
> 有了这三点，自然同构$\lambda,\rho$可以唯一定义，满足下面的要求：
>
> $$
> \mathrm{id}_\mathbb{1} \otimes \lambda_x = \left[ \mathbb{1} \otimes (\mathbb{1} \otimes x) \xrightarrow{a_{\mathbb{1}, \mathbb{1}, x}^{-1}} (\mathbb{1} \otimes \mathbb{1}) \otimes x \xrightarrow{\iota \otimes \mathrm{id}_x} \mathbb{1} \otimes x \right]\\
> 
> \rho_x \otimes \mathrm{id}_{\mathbb{1}} = (\mathrm{id}_x \otimes \iota) \circ a_{x, \mathbb{1}, \mathbb{1}}
> $$
>
> 现在你便可以直接证明三角形公理，顺带还可以证明下面三个等式：
>
> $$
> \begin{aligned}
> \lambda_{\mathbb{1} \otimes x} &= \mathrm{id} \otimes \lambda_x : \mathbb{1} \otimes (\mathbb{1} \otimes x) \to \mathbb{1} \otimes x, \\
> \rho_{x \otimes \mathbb{1}} &= \rho_x \otimes \mathrm{id}_{\mathbb{1}} : (x \otimes \mathbb{1}) \otimes \mathbb{1} \to x \otimes \mathbb{1}, \\
> \lambda_{\mathbb{1}} &= \rho_{\mathbb{1}} = \iota : \mathbb{1} \otimes \mathbb{1} \overset{\sim}{\to} \mathbb{1}.
> \end{aligned}
> $$
>
> 只需要注意到下面两个图表的交换性：[^12]
>
> ![注意力1](\img\posts\topological_order\24.png)
>
> ![注意力2](\img\posts\topological_order\25.png)

也就是说拓扑序范畴是个幺半范畴，而且由于$\mathbb{C}$线性，进一步$\otimes$还是个双线性函子，也就是说$\forall x\in\mathcal{C}$，$x\otimes\bullet$和$ \bullet\otimes x$都是线性函子。

前面我们遗漏了一点，我们定义结合律的时候是考虑的三个对象之间的，那个时候只有两种情况，所以我们定义一个自然同构$\alpha$。对于四个的情况我们给了个五边形公理，但是任意多个对象的时候，这些定义足够要求所有的不同结合的方式都差不多吗？或者说他们（不同的结合函子）之间都只差一个唯一确定的自然同构，类似$\alpha$一样？幺半范畴中极为深刻的融贯（coherence）定理给出了**肯定**的答复：

>[S. MacLane] 任何的幺半范畴都幺半等价于一个严格幺半范畴

深刻定理自然很难证明，所以这里我们只是解释一下这个定理的几个名词。首先是严格幺半范畴，其实就是把等价换成严格等号，原先你的结合律和幺元都是结合约束和幺约束，是同构，直接换成下面的要求：

$$
(x\otimes y)\otimes z = x\otimes (y\otimes z)\\
x\otimes \mathbb{1}=\mathbb{1}\otimes x = x
$$

然后是幺半等价，范畴间的等价就是存在一对互为拟逆的函子，所以我们需要说明什么是幺半函子：

> （强）幺半函子包含两个资料：
> - 一个函子$F:\mathcal{C}\to\mathcal{D}$
> - 一个$F(\cdot)\otimes F(\cdot)\to F(\cdot\otimes\cdot)$自然同构$\{F^2_{x,y}\}$
> - <p>一个同构$F^0: \mathbb{1}_\mathcal{D}\to F(\mathbb{1}_\mathcal{C})$</p>
> 而且满足下面的图表交换性：
> ![F2](\img\posts\topological_order\26.png)
> ![F0](\img\posts\topological_order\27.png)

这个在后面讨论体边对应的时候还会用到。以及还要说明什么是幺半函子之间的自然变换用来定义拟逆：

> 考虑两个幺半范畴上的两个幺半函子$F,G:\mathcal{C}\to\mathcal{D}$，幺半自然变换$\alpha:F\Rightarrow G$是一个自然变换，且满足下面的交换图表：
>
> ![幺半自然变换1](\img\posts\topological_order\34.png)
>
> ![幺半自然变换2](\img\posts\topological_order\35.png)

<p>
一个比较深刻但是并不是太“亲民”的张量范畴的例子来源于公理化拓扑量子场论，可以定义下面的配边范畴。考虑$n-1$维实紧致闭可定向流形，且包括空集，一起作为$n$-$\mathsf{Cob}$中的对象，而对象$X$的定向倒转显然也是对象，记作$X^*$。两个对象$X,Y$之间的态射由配边操作的等价类给出，配边操作时髦点的说法就是$n$维带边定向流形$W$配上同构$\partial W\to X\sqcup Y^*$。比较土的说法就是把两个流形作为边，绘制出以他们为边的流形的不同方式，比如$n=2$，有下面的裤管图（从左往右画）：
</p>

![裤子](\img\posts\topological_order\28.png)

裤子就是$W$，给出了左边的$S^1$到右边的$S^1\sqcup S^1$的态射，从量子场论上看，配边的操作就是给定初末态的路径积分，得到对应的配分函数。态射的合成也不难想象，从物理上想，就是积分加起来而已，再积一段，也就是把裤管缝起来（保定向的缝合）：

![缝裤子](\img\posts\topological_order\29.png)

再用路径积分的想法，恒等态射就是世界面trivial，对应柱体$W=X\times[0,1]$。张量范畴结构由$\sqcup$给出，幺元是空集。

我一直在试图回避什么是local？只是简单的告诉你我们考虑的model在不同的尺度定义下会得到一样的数学结构，我们现在第一次直面这个问题。还是讨论幺半范畴，两个点缺陷隔得很近的时候被tensor product为一个点缺陷，这是幺半范畴的基石，而关键在于什么样才叫隔得很近？现在假设$x$在$\xi$附近，$y$在$\eta$附近，那么我们把这个看作是一种local，对应的幺半范畴由$\otimes_{(\xi,\eta)}$给出，前面我们相当于在说$\otimes$和$\xi,\eta$没关系，但是真实世界往往是有关系。也就是说local在不同点位上，会给出不同的幺半范畴结构。假设现在我们有绝热路径$\gamma$，可以把$x,y$这两种缺陷local的点位移动到$\xi',\eta'$。这个绝热操作就定义了一个$T^\gamma_{x,y}:x\otimes_{(\xi,\eta)}y\to x\otimes_{(\xi',\eta')}y$的可逆（因为绝热）映射。这其实是函子$\otimes_{(\xi,\eta)}\to\otimes_{(\xi',\eta')}$的自然同构（遍历所有的$x,y$）。每一个绝热路径都可以定义一个自然同构，从物理上看，如果两个绝热路径同伦，那么自然同构是相等的。虽然我们还是要对不同点位考虑不同的幺半结构，但是这一点还是大大减少了需要考虑的点位的幺半范畴的结构个数。需要高阶范畴的理论才能完整描述。不过现在先让我们局限为简单的情况。

总结一下，尽管微观来看，对幺半范畴结构的定义是依赖于很多人为的选择的，但是他们都是完全等价的定义，也就是说一个拓扑序上可以赋予不同的幺半范畴，但是他们彼此等价。拓扑序上称幺半结构不是gauge fixing的，也就是说还存在冗余。

一个范畴上可以赋予不同的幺半结构这一点在数学上也很常见，这里我们举一个例子，考虑$G$分次的向量空间范畴$\mathsf{Vec_G}$，上面定义$\otimes$：

$$
(V\otimes_\mathbb{C}W)_g:=\bigoplus_{h\in G}V_h\otimes_\mathbb{C}W_{h^{-1}g},\quad g\in G
$$

由于这是个半单范畴，所以我们只需要讨论单对象之间的乘法：

$$
\mathbb{C}_{(g)}\otimes_{\mathbb{C}}\mathbb{C}_{(h)}\simeq\mathbb{C}_{[gh]}
$$

但是上面可以有不等价的结合约束

$$\alpha_{g,h,k}:(\mathbb{C}_{(g)}\otimes_{\mathbb{C}}\mathbb{C}_{(h)})\otimes_{\mathbb{C}}\mathbb{C}_{(k)}\to\mathbb{C}_{(g)}\otimes_{\mathbb{C}}(\mathbb{C}_{(h)}\otimes_{\mathbb{C}}\mathbb{C}_{(k)})$$

这里我们直接断言任何一个这样的映射其实都由一个非零复数唯一确定，或者说由下面的元素之间的映射唯一确定：[^15]

$$
(1\otimes_{\mathbb{C}}1)\otimes_{\mathbb{C}}1\mapsto\omega(g,h,k)\cdot1\otimes_{\mathbb{C}}(1\otimes_{\mathbb{C}}1),\quad \omega(g,h,k)\in\mathbb{C}^\times
$$

由此可以直接写下五边形约束：

$$
\omega(h,k,l)\omega(g,hk,l)\omega(g,h,k)=\omega(gh,k,l)\omega(g,h,kl),\quad\forall g,h,k,l\in G
$$

满足这一条件的$\omega$称作是**3-cocycle**。所有取值集合记为$Z^3(G;\mathbb{C}^\times)$，三角形约束把$\rho,\lambda$和$\omega$联系起来：

$$
\lambda_g=\varepsilon\cdot\omega(e,e,g)^{-1},\quad\rho_g=\varepsilon\cdot\omega(g,e,e),\quad\epsilon\in\mathbb{C}^\times
$$

$\epsilon$只是个无关紧要的归一化常数。由此可见任何一个3-cocycle都对应一个幺半范畴结构$\mathsf{Vec_G^\omega}$。

最后我们再强调一下，搞物理的人更熟悉线性空间的张量积，我们统一记作$\otimes_{\mathbb{C}}$，或者说这是再考虑范畴中的余积，特别是我们拓扑序种考虑的很多问题又是线性空间语境，所以千万不要搞混余积和幺半结构$\otimes$。这个张量积唯一诱导了：

$$
\mathrm{Hom}_{\mathbb{C}}(x,x^{\prime})\otimes_{\mathbb{C}}\mathrm{Hom}_{\mathbb{C}}(y,y^{\prime})\to\mathrm{Hom}_{\mathbb{C}}(x\otimes y,x^{\prime}\otimes y^{\prime})
$$

上的双线性映射$\otimes'$，这是根据张量积的泛性质，下面的交换图表得到的：

![张量积泛性质](\img\posts\topological_order\31.png)

<p>
一般来说这个双线性映射不是同构，这也体现了这两个空间的差别，这时我们称体系存在**spatial fusion anomaly**，物理本质是$\mathrm{Hom}_{\mathbb{C}}(x\otimes y,x^{\prime}\otimes y^{\prime})$中存在非局域的瞬子，也就是$x,y$之间的距离拉的比较开导致的。这也加大了复杂度，不能将多个缺陷之间的瞬子由原先两个空间瞬子的张量积简单描述。否则我们可以建立$f\otimes g$和$f\otimes_{\mathbb{C}} g$之间的一一对应。
</p>

## 幺正性 

<p>
瞬子的实例毕竟还是希尔伯特空间中的算符，所以自然可以定义其厄米共轭，回忆通常的厄米共轭，$f:\mathcal{H}_1\to\mathcal{H}_2$，$f^\dagger:\mathcal{H}_2\to\mathcal{H}_1$。这说明作用的对象反过来了，物理直观上可以看作是世界线倒过来走了，所以<b>厄米共轭在拓扑序的语境下类似时间反演</b>。
</p>

>线性范畴上可以定义一个厄米结构，他是一个$\dagger:\mathcal{C}^{\mathrm{op}}\to\mathcal{C}$的**反线性**函子，满足：
>
> - $(f^{\dagger})^{\dagger}=f, \forall \mathrm{~Mor}(\mathcal{C})$
> - $(g\circ f)^\dagger = f^\dagger\circ g^\dagger$
> - $\mathrm{id}_x^\dagger = \mathrm{id}_x,\forall x\in\mathcal{C}$
> 
> 幺正结构还多要求一个正定性：
> -$f^\dagger \circ f =\mathcal{0}\iff f=0$
> 
> 满足这些特点的我们称之为幺正范畴，等价于$C^*$范畴，而且幺正结构自然诱导半单

类似量子力学，态射的幺正性定义为：$f^\dagger = f^{-1}$[^22]。显然任何的拓扑序都允许时间反演的存在，都应该自然带有一个幺正结构，而这一幺正结构应当和幺半结构是相容的，比如我们考虑下面的两幅图：

![相容性](\img\posts\topological_order\30.png)

他们互为时间反演，所以右边的应当看作是作用瞬子$\alpha_{x,y,z}^{\dagger}$。现在把这两幅图接起来，根据同伦性，我们立刻看出下面的等式：

$$
\alpha_{x,y,z}^{\dagger}\circ\alpha_{x,y,z}=\mathrm{id}_{(x\otimes y)\otimes z},\quad\alpha_{x,y,z}\circ\alpha_{x,y,z}^{\dagger}=\mathrm{id}_{x\otimes(y\otimes z)}
$$

这就在说结合约束是幺正的，类似地，幺约束也是幺正的。而且两条挨得很近的世界线一起反方向应当不影响瞬子的tensor product，也就是说：

$$
f^\dagger\otimes g^\dagger=(f\otimes g)^\dagger
$$

我们把满足这种条件的范畴称作**UTC(Unitary Tensor Category)**。这种相容性还有个更加数学的，更加自然的解释：

> $\dagger$是幺半函子

Hilbert空间范畴$\mathsf{Hilb}$就是个典型的UTC。

## 刚性
前面说的$\dagger$，是态射的对偶，而对对象而言是不变的，那么对象的对偶应当是什么？首先想到的肯定是对偶线性空间，$\ket{\psi}\leftrightarrow \bra{\psi}$。前面在讨论toric model时，提到string operator会产生一对点缺陷，这可以看作是产生了一个粒子和一个反粒子，同时也可以用string operator将他们湮灭，用图像表示如下：

![刚性产生湮灭算符](\img\posts\topological_order\32.png)

对于toric model，缺陷是自对偶的，也就是:

$$
\mathbb{1}^* = \mathbb{1},\quad e^*=e,\quad m^*=m,\quad f^*=f
$$

考虑下面的世界线同伦：

![zig-zag](\img\posts\topological_order\33.png)

不难读出下面的zig-zag关系：

$$
\begin{aligned}
\left(x\xrightarrow{\lambda_{x}^{-1}}\mathbb{1}\otimes x\xrightarrow{b_{x}\otimes\mathrm{id}_{x}}(x\otimes x^{*})\otimes x\xrightarrow{a_{x,x^{*},x}}x\otimes(x^{*}\otimes x)\xrightarrow{\mathrm{id}_{x}\otimes d_{x}}x\otimes\mathbb{1}\xrightarrow{\rho_{x}}x\right)=\mathrm{id}_{x},
\\
\left(x^{*}\xrightarrow{\rho_{x^{*}}^{-1}}x^{*}\otimes\mathbb{1}\xrightarrow{\mathrm{id}_{x^{*}}\otimes b_{x}}x^{*}\otimes(x\otimes x^{*})\xrightarrow{a_{x^{*},x,x^{*}}^{-1}}(x^{*}\otimes x)\otimes x^{*}\xrightarrow{d_{x}\otimes\mathrm{id}_{x^{*}}}\mathbb{1}\otimes x^{*}\xrightarrow{\lambda_{x^{*}}}x^{*}\right)=\mathrm{id}_{x^{*}}
\end{aligned}
$$

由此可以引入**dual**的概念：
>任意一个对象$x$的左对偶$x^L\in\mathcal{C}$包含以下资料：
>-两个态射$b_x:\mathbb{1}\to x\otimes x^L,d_x:x^L\otimes x\to\mathbb{1}$
>-满足zig-zag关系[^16]
>
>$$
>(\mathrm{id}_{x}\otimes d_{x})\circ(b_{x}\otimes\mathrm{id}_{x})=\mathrm{id}_{x},\quad(d_{x}\otimes\mathrm{id}_{x^{L}})\circ(\mathrm{id}_{x^{L}}\otimes b_{x})=\mathrm{id}_{x^{L}}
>$$
>
>前面通过toric model引入的对偶就是左对偶，同样也可以引入右对偶$x^R\in\mathcal{C}$：
>-两个态射$b_{x}^{\prime}:\mathbb{1}\to x^{R}\otimes x,d_{x}^{\prime}:x\otimes x^{R}\to \mathbb{1}$
>
>- 满足zig-zag关系
>
>$$
>(d_x^{\prime}\otimes\mathrm{id}_x)\circ(\mathrm{id}_x\otimes b_x^{\prime})=\mathrm{id}_x,\quad(\mathrm{id}_{x^R}\otimes d_x^{\prime})\circ(b_x^{\prime}\circ\mathrm{id}_{x^R})=\mathrm{id}_{x^R}
>$$
>
>注意上面的关系中，我们忽略了幺约束，比如第一个式子应当在LHS左边插入$\rho_x$，右边插入$\lambda^{-1}_x$。
>
>如果任意一个元素的左右对偶都存在，那么我们就称为**刚性范畴**。而且还和幺半结构有下面的相容性：
>
>$$
>(x\otimes y)^L\simeq y^L\otimes x^L,(x\otimes y)^R\simeq y^R\otimes x^R
>$$
>
>在刚性范畴中也可以定义态射的对偶，比如$f:x\to y$的左对偶$f^L:y^L\to x^L$：[^27]
>
>$$
>f^L:=(d_y\otimes\mathrm{id}_{x^L})\circ(\mathrm{id}_{y^L}\otimes f\otimes\mathrm{id}_{x^L})\circ(\mathrm{id}_{y^L}\otimes b_x)
>$$
>
>再联合zig-zag方程，左右对偶实际上定义了函子$\delta^L(\delta^R):\mathcal{C}^{\mathrm{op}}\to\mathcal{C}$。根据函子性可以立即发现对偶是保直和的（最多差个典范同构)，也就是说：
>
>$$
>(x_1\oplus\cdots\oplus x_n)^L\simeq x_1^L\oplus\cdots\oplus x_n^L
>$$
>
><p>注意，左右对偶类似零对象一样，都是定义到只差一个典范同构意义的。而且这里的函子性意味着$(f\circ g)^*=g^*\circ f^*$，这是因为$f\circ_{\mathrm{op}} g = g\circ f$。</p>
>作为练习，请读者从数学以及物理上说明下面的等式：
>
>$$
>(f\otimes\mathrm{id}_{x^L})\circ b_x=(\mathrm{id}_y\otimes f^L)\circ b_y,\quad d_y\circ(\mathrm{id}_{y^L}\otimes f)=d_x\circ(f^L\otimes\mathrm{id}_x)
>$$
>
>上面的定义还说明了**$x^L$是$x$的左对偶，则$x$是$x^L$的右对偶**，也就是说：
>
>$$(x^L)^R\simeq x$$

由上面的定义，**显然$\mathbb{1}$对于左右对偶都是自对偶的**，产生湮灭算符可以用$\iota$[^29]。前面toric model对于左对偶是自对偶的，而讨论toric model时对于生成的粒子哪个是反粒子哪个是正粒子完全是人为约定，所以不难想象$x^L=x^R=x$。自对偶这一点我们并不奢求在任何模型上都有，但是如果左右对偶不一样，问题会很复杂。这将导致一个对象有互不相同的多个对偶子对象$x^L,x^R,(x^L)^L,(x^R)^R,\ldots$。下面我们会首先利用幺半结构建立$x$与$(x^L)^L$之间的同构[^17]，然后利用幺正结构说明左右对偶同构，那么这些对偶都可以同构起来，那么一个对象的对偶可以再差一个典范同构的意义下唯一确定为$x^*$。

我们自然期望体系是存在这种结构，类似结合约束，幺约束，我们要求存在下面的约束（自然同构）：

$$
a_x:x\to x^{LL},\quad a_x\otimes a_y=a_{x\otimes y}
$$

后面这个条件其实要求这是个幺半自然同构，这个结构我们叫做pivatal结构。而幺正范畴会**唯一**诱导出一个pivotal结构：

$$
a_x:=(b_x^\dagger\otimes\mathrm{id}_{x^{LL}})\circ(\mathrm{id}_x\otimes b_{x^L})=(\mathrm{id}_{x^{LL}}\otimes d_x)\circ(d_{x^L}^\dagger\otimes\mathrm{id}_x)
$$

这个结果直接摆在这里有点难以接受，首先我们记<b>$(x^*,b_x,d_x)$</b>为左对偶，然后考虑<b>$(x^*,d^\dagger_x,b^\dagger_x)$</b>[^18]，不难发现下式成立：

$$
(b_x^\dagger\otimes\mathrm{id}_x)\circ(\mathrm{id}_x\otimes d_x^\dagger)=[(\mathrm{id}_x\otimes d_x)\circ(b_x\otimes\mathrm{id}_x)]^\dagger=\mathrm{id}_x^\dagger=\mathrm{id}_x\\(\mathrm{id}_{x^*}\otimes b_x^\dagger)\circ(d_x^\dagger\circ\mathrm{id}_{x^*})=[(d_x\circ\mathrm{id}_{x^*})\circ(\mathrm{id}_{x^*}\otimes b_x)]^\dagger=\mathrm{id}_{x^*}^\dagger=\mathrm{id}_{x^*}
$$

这说明$(x^*,d^\dagger_x,b^\dagger_x)$也是右对偶，所以左右对偶同构。

现在建立一下产生和湮灭算符的直观，产生算符可以看作是$1\to\sum_i\ket{\psi_i}\bra{\psi_i}$，而湮灭算符实际上可以看作是取trace，$\operatorname{Tr}(\ket{\psi}\bra{\psi})\sim 1$。现在我们把产生湮灭算符连起来用，可以得到：

$$
b_x^\dagger\circ b_x,d_x\circ d_x^\dagger:\mathbb{1}\to\mathbb{1}
$$

从世界线上看相当于考虑闭合世界线。现在考虑stable体系，$\mathbb{1}$是单的，回忆前面对单对象的要求，有一条是自同态$\mathrm{End}(x)=\mathbb{C}$。所以闭合世界线会得到一个数，这与求迹的直观想象是吻合的，由此可以定义**quantum dimension**：

$$
\dim(x):=\sqrt{(b_x^\dagger\circ b_x)\cdot(d_x\circ d_x^\dagger)}>0
$$

这是对于幺正的情形， 对于一般的非幺正刚性范畴，但是上面定义了pivotal结构，可以定义：

$$
\dim^L(x):=d_{x^L}\circ(a_x\otimes\mathrm{id}_{x^L})\circ b_x,\quad\dim^R(x):=d_x\circ(\mathrm{id}_{x^L}\otimes a_x^{-1})\circ b_{x^L}
$$

当这两个维数相等的时候我们就称pivotal结构是spherical的，对于幺正情形，其上的pivotal结构一定是spherical的，所以我们只需要谈论$\dim (x)$就够了。另外注意到我们总是可以对产生湮灭算符进行rescaling，从而使得：

$$
b_x^\dagger\circ b_x=d_x\circ d_x^\dagger=\dim(x)
$$

在这种正规化选取下，不光对象的左右对偶相等，态射的左右对偶也相等：

$$
f^*:=(d_y\otimes\mathrm{id}_{x^*})\circ(\mathrm{id}_{y^*}\otimes f\otimes\mathrm{id}_{x^*})\circ(\mathrm{id}_{y^*}\otimes b_x)=(\mathrm{id}_{x^*}\otimes b_y^\dagger)\circ(\mathrm{id}_{x^*}\otimes f\otimes\mathrm{id}_{y^*})\circ(d_x^\dagger\otimes\mathrm{id}_{y^*}).
$$

<p>
而且$(f^{*})^{\dagger}=(f^{\dagger})^{*}$，这其实意味着在这种情况下$\delta^L=\delta^R\equiv\delta^*$。<b>后面我们假设都做了这种正规化</b>。
</p>
> 我们来具体计算几个简单的瞬子的dual：[^28]
>
> 首先是证明$\mathrm{id}_x^* = \mathrm{id}_{x^*}$
> 
> to be continue

对于整个范畴，定义其quantum dimension为所有simple obeject的quantum dimension的平方和：[^19]

$$
\dim(\mathcal{C}):=\sum_{x\in\mathrm{Irr}(\mathcal{C})}\dim(x)^2
$$

quantum dimension在日常生活中接触到的$\mathsf{Vec},\mathsf{Rep(G)},\mathsf{Vec_{G}}$的语境下就是老百姓口中说的”维数“。[^20]

上面的求维数相当于对对象取迹，如果在闭合时间线内部插个瞬子，就可以看作是对瞬子取迹，有定义：

$$
\mathrm{tr}(f):=b_x^\dagger\circ(f\otimes\mathrm{id}_{x^*})\circ b_x=d_x\circ(\mathrm{id}_{x^*}\otimes f)\circ d_x^\dagger\in\mathrm{Hom}_\mathbb{C}(1,1)\simeq\mathbb{C}
$$

## 融合范畴

把前面的结构全部加在一起，也就是半单刚性幺半范畴，称为**multi-fusion范畴**，如果再加上一个stable，也就是要求张量积幺元$\mathbb{1}$是单的，称之为**fusion范畴**。幺正（与幺半结构相容）是定义的可选DLC。

如果读者比较熟悉共形场论，一定对fusion一次不陌生，共形场论中，OPE代数定义了conformal family之间的融合规则，再融合范畴中，类似的，在simple object等价类的意义下有下面的融合规则：

$$
x\otimes y\simeq\bigoplus_{z\in\mathrm{Irr}(\mathcal{C})}N_{xy}^z\cdot z,\quad N_{xy}^z\in\mathbb{N}
$$

也就是说在直和作为加法，张量积作为乘法的意义下，$\mathrm{Irr}(\mathcal{C})$构成了一个环，称为fusion ring或者说Grothendieck ring。

在融合规则的加持下，计算quantum dimension计算有下面的关系：

$$
\dim(x\oplus y)=\dim(x)+\dim(y),\quad\dim(x\otimes y)=\dim(x)\cdot\dim(y)=\sum_{z\in\mathrm{Irr}(\mathcal{C})}N_{xy}^z\cdot\dim(z)
$$

融合范畴下还可以定义一个维数，称为**Frobenius-Perron dimension**：

$$
\mathrm{FPdim(x)}:= \rho(N_x)
$$

<p>这里$\rho$代表矩阵的谱半径，也就是矩阵本征值的最大值，$N_x$由$(N_x)_{yz}:=N_{x,y}^z$定义，Frobenius-Perron定理说明了$\mathrm{FPdim(x)}$非负，对于范畴本身也可以定义：<p>

$$
\mathrm{FPdim}(\mathcal{C}):=\sum_{x\in\mathrm{Irr}(\mathcal{C})}\mathrm{FPdim}(x)^2
$$

如果范畴满足：$\dim(\mathcal{C})=\mathrm{FPdim}(\mathcal{C})$，就称为是**pseudo-unitary**，幺正范畴一定满足这一点。在物理上，考虑盘面上的拓扑序，在上面加$n$个$x$缺陷，体系基态简并数目可以由下式刻画：

$$
\mathrm{GSD}\sim\mathrm{constant}\cdot \mathrm{FPdim}(x)^n
$$


## 辫结构
前面我们介绍过对于实际的拓扑序，应该容许不同的点位上可以给出不同的tensor product。对于一维情况，可以证明确实就只有一种$\otimes$[^13]。对于二维情况，有两种$\otimes_{1},\otimes_{2}$，而且他们还满足下面的相容性条件：

$$
(x\otimes_2 x')\otimes_1 (y\otimes_2 y') \simeq (x\otimes_1 y) \otimes_2 (x'\otimes_2 y')
$$

上面我们取$y=x'=\mathbb{1}$得到：$x\otimes_1 y'\simeq x\otimes_2 y'$，然后取$y'=x=\mathbb{1}$，有$x'\otimes_1 y\simeq y\otimes_2 x'$，做一些变量替换后不难发现这说明“

$$
x\otimes y \simeq y\otimes x,\quad \otimes = \otimes_1
$$

所以我们把$\otimes_1$看作是给出幺半结构，而$\otimes_2$则是给出了这个幺半范畴内的某种交换性[^14]。因为对于一般的幺半范畴我们并不要求乘法可交换（在同构的意义下），而本节要讲的辫结构就是在幺半范畴的基础上加了个**交换约束**。从物理上看，辫结构是涌现出来的，是伴随幺半结构出来的！这是个非常有意思的现象，而且这个现象是二维才有的！

这种交换，可以看作是世界线的编织，也就是说存在一个瞬子：

$$
c_{x,y}{:}x\otimes y\to y\otimes x
$$

这种编织显然有下面两种情况：

![任意子的编织](\img\posts\topological_order\37.png)


我们把左边的叫braiding，由$c(x,y)$生成，右边的叫anti-braiding，不难看到由braiding的逆生成，这种可逆性说明了交换约束是同构。进一步由于瞬子可以在世界线上随便移动，所以下面的图说明了编织的自然性：

![编织的自然性](\img\posts\topological_order\38.png)

$$
c_{x^\prime,y^\prime}\circ(f\otimes g)=(g\otimes f)\circ c_{x,y}
$$

所以$c$是$\otimes\Rightarrow \otimes\circ\tau$函子间的同构，这里$\tau:\mathcal{C}\times\mathcal{C}\to\mathcal{C}\times\mathcal{C}, (x,y)\mapsto (y,x)$。在toric model中我们碰见过这种编织，不过那时候我们算的是double braiding，因为这里的braiding是转半圈（可以走上下半圆，对应编织和反编织），很多时候我们喜欢的是转一整圈：

![double braiding](\img\posts\topological_order\39.png)

任意子编织最有意思的地方在于这种转一整圈会带来一个相位因子。比如$c_{m,e}\circ c_{e,m}=-\mathrm{id}_{e\otimes m}$。带来了一个费米子相位，这种辫结构可以看作是在描述拓扑激发之间的**mutual statistical**。而且，就跟前面说幺半结构不是gauge fixing的，辫结构也不是，他也有很多人为选取的任意性，所以一个拓扑序上可以定义很多辫结构，转半圈你用不同的辨结构得到的结果或许不同，但是转一整圈你得到的结果肯定是一样的。比如：

$$
c_{m,e}\circ c_{e,m}=-\mathrm{id}_{e\otimes m} \Leftarrow\begin{cases}
c_{e,m}=+1,c_{e,m}=-1\\
c_{e,m}=-1,c_{e,m}=+1
\end{cases}
$$

现在我们给出幺半范畴上辫结构的公理：

> 幺半范畴上的辨结构也就是一个自然同构$c:\otimes\Rightarrow \otimes\circ\tau$，使得下面的图表交换：
>
> ![H1](\img\posts\topological_order\41.png)
>
> ![H2](\img\posts\topological_order\42.png)
>
> 以及下面的两个三角形：[^21]
>
> ![T](\img\posts\topological_order\43.png)
>
> 如果进一步辫幺半范畴还满足$c_{y,x}\circ c_{x,y}=\mathrm{id}_{x\otimes y}$，则称为对称幺半范畴

如果把unitary加进来，则要求$c_{x,y}$作为瞬子也要是幺正的这一相容性条件。前面幺正性和幺半性的相容性说明$\dagger$是幺半函子，到了这里实际上说明$\dagger$是辫幺半函子：

>辫幺半函子$F$是两个幺半范畴$\mathcal{C}\to\mathcal{D}$之间的幺半函子，额外要求下图可交换：
>
>![辫幺半函子](\img\posts\topological_order\45.png)
>
>有了前面幺半自然变换的定义，你或许会像有没有辫幺半自然变换，其实是有的，但是他和幺半自然变换等价，所以无需额外介绍。[^24]


上面的两个六边形公理对应三个任意子编织时的世界线同伦：

![三个任意子编织](\img\posts\topological_order\40.png)

还有一个十分容易验证但是又格外重要的交换图表：[^23]

![YBE](\img\posts\topological_order\44.png)

这个图如果略去所有的结合约束，或者说考虑严格幺半范畴，可以简并为下面的等式：

$$
(c_{y,z}\otimes\mathrm{id}_x)\circ(\mathrm{id}_y\otimes c_{x,z})\circ(c_{x,y}\otimes\mathrm{id}_z)=(\mathrm{id}_z\otimes c_{x,y})\circ(c_{x,z}\otimes\mathrm{id}_y)\circ(\mathrm{id}_x\otimes c_{y,z})
$$

这个等式似乎和最早你见到的YBE长得不太像，我们现在考虑$\mathsf{Vec}$范畴，$V\otimes V$上面的线性自同构记为$R$，可以看作是$c_{V,V}$，那么上面的方程变到特殊情况：

$$
\left(R\otimes\mathrm{id}_V\right)\left(\mathrm{id}_V\otimes R\right)\left(R\otimes\mathrm{id}_V\right)=\left(\mathrm{id}_V\otimes R\right)\left(R\otimes\mathrm{id}_V\right)\left(\mathrm{id}_V\otimes R\right)
$$

然后考虑在基底$\{e_i\}$下展开$R(e_i\otimes e_j)=\sum_{k,l}R_{i,j}^{k,l}e_k\otimes e_l$，上面的方程就变成了人畜无害的形式：

$$
\forall i,j,k,l,m,n,\quad\sum_{p,q,y}R_{i,j}^{p,q}R_{q,k}^{y,n}R_{p,y}^{l,m}=\sum_{y,q,r}R_{j,k}^{q,r}R_{i,q}^{l,y}R_{y,r}^{m,n}
$$


Yang-Baxter方程其实等价于下面的世界线同伦：

![YBE worldline](\img\posts\topological_order\46.png)

<p>
这种世界线同伦的看法并非物理学家的专利，在数学上也常常这么用，在数学上我们其实就是在考虑辫子的同痕类，构成辫范畴$\mathsf{Braid}$。$n$条线构成的辫子（的等价类）记作$\mathcal{B}_n$。这其实构成一个群，乘法是两个辫子首尾相接，幺元就是不打结的辫子，这成为<b>Artin辫群</b>。$\mathsf{Braid}$范畴是严格幺半辫范畴的一个具体实现，包含以下资料：
</p>

- 其中的对象是非零整数
- 两个对象之间的态射集在$n=m$时是辫群，在$n\neq m$时是空集，态射的合成就是辫群群乘法
- 幺半结构$\otimes$定义为两个辫子放在一起
- 辫结构由辫子之间交织给出，也就是前文的世界线交织

现在考虑$\mathsf{Rep(G)}$上的辫结构，定义如下：

$$
c_{V,W}:V\otimes W\to W\otimes V,\quad v\otimes w\mapsto w\otimes v
$$

显然这是个对称融合范畴（幺半已经囊括在融合里面了）。但是这是最常规最trivial的选取。考虑$z\in Z(G)$，这里$Z$表示群中心，而且考虑满足$z^2=e$。那么考虑表示$(V,\rho)$，$\rho(z)^2=1$，可以将表示空间看成$\mathbb{Z}_2$分次的：

$$
V=V_0\oplus V_1,\quad V_0:=\{v\in V\mid\rho(z)(v)=v\},\quad V_1:=\{v\in V\mid\rho(z)(v)=-v\}
$$

而且我们记$\|v\|=i \text{ for } v\in V_i$。所以这个时候$V$其实是个可约表示（假设$V_i$都不平凡）。然后我们就可以定义辫结构：

$$
\begin{aligned}c_{V,W}{:}V\otimes W&\to W\otimes V\\v\otimes w&\mapsto(-1)^{|v||w|}\cdot w\otimes v\end{aligned}
$$

从不那么亲民的角度来看，中心荷的存在使得表示空间升格成了超空间，超空间里面的向量就可以根据自身是玻色子$\in V_0$还是费米子$\in V_1$来决定交换时的符号。前面定义的naive的辫结构相当于是取$z=e$。而数学上证明**任何对称融合范畴都等价于某个群$G$以及某个满足$z^2=e$的群中心生成的辫结构**。另外数学上从群表示上看，这两种群$G$的表示构成的范畴其实是差不多的，我们记$G^f=(G,f)$，两种表示构成的范畴记作$\mathsf{Rep}(G)$，$\mathsf{sRep}(G^f)$。从群表示本身看这两个范畴一样，不一样的是上面有不同的braiding结构，$\mathsf{sRep}(G^f)$相当于多了一个$z$用于区分表示中的费米子和玻色子，从而给出不同的统计相位。

上面最后这句话还值得继续说道说道，对称融合范畴记作SFC，SFC在物理上其实描述的是所谓bosonic/fermionic product state with/without symmetry，说白了就是trivial的拓扑序的基态，里面的拓扑激发都可以用local operator联系到基态，但是基态可能有或者没有对称性。如果$z=e$是trivial的，那么就对应$\mathsf{Rep}$，也就是bosonic，反之对应$\mathsf{sRep}$，也就是fermionic，如果对称群是trivial的就称作without symmetry，反之就是with symmetry。

bosonic without symmetry其实就对应玻色平凡拓扑序[^32]，对应的SFC记作$\mathcal{B}_0\simeq \mathsf{Hilb}$。bosonic with symmetry对应$\mathsf{Rep}(G)$。fermionic without symmetry对应费米平凡拓扑序，对应的SFC记作$\mathcal{F}_0\simeq \mathsf{sRep}(\mathbb{Z}^f_2)$[^35]，fermionic with symmetry就叫做$ \mathsf{sRep}({G}^f)$。而数学上SFC就这几种，所以平凡gapped liquid就被SFC分类了。SFC文献上一般用$\mathcal{E}$表示上面这四类情况，暗示了体系的基态的对称性。[^51]

注意，虽然前面讨论基态，with symmetry时的那些product state，也就是基态激发，也都是能用local operator联系的，那看起来就是平凡激发，那看起来似乎就是平凡拓扑序本身。注意，我们用了不同的范畴来描述with symmetry和without symmetry情况，这说明with symmetry会出来崭新的物态，这就是前面在讲SPT时我们专门强调过，如果你忽视对称性，那确实就是个平凡物态，但是一旦你考虑对称性，这就是个崭新的非平凡拓扑物态。而上面提到的四种情况，without symmetry就是我们一直在考虑的拓扑序。后面在讲分类时，我们还会提到这一点。

任意子之间的编织结构（互统计）可以用下面定义的$S$矩阵来描述：

$$
S_{xy}:=\mathrm{tr}(c_{y,x^*}\circ c_{x^*,y})=\mathrm{tr}(c_{y^*,x}\circ c_{x,y^*}),\quad \forall x,y\in\mathrm{Irr}(\mathcal{C})
$$

这个的计算还是有点复杂的，即使对于toric model而言：

$$
S=\begin{pmatrix}1&1&1&1\\1&1&-1&-1\\1&-1&1&-1\\1&-1&-1&1\end{pmatrix}
$$

这里基底取的是$(\mathbb{1},e,m,f)$的顺序。

## 丝带结构

前面考虑的是两条世界线的交织，现在我们要考虑的就是一条世界线的自相交，对应粒子的自统计。这其实是比较反直觉的一件事情，首先从前面辫结构的三角形公理可以看出对象和幺元的编织是平凡的，另外从世界线上看下面的世界线似乎同伦于平凡态射：

![世界线自相交](\img\posts\topological_order\47.png)


这说明自统计要区别于辨结构对待，不能看作是于幺元的编织，实际上我们可以想象世界线不是一根细线，而是一个二维的丝带，这并不会对讨论对象之间的相互编织产生影响，但是显然当丝带自己缠绕的时候，就和平凡情况不等价了：

![丝带结构世界线](\img\posts\topological_order\48.png)

这从世界线的构造也可以看出来，上面的两条世界线对应算符：[^26]

$$
\begin{aligned}
x\xrightarrow{\mathrm{id}_{x}\otimes b_{x}}x\otimes x\otimes x^{*}\xrightarrow{c_{x,x}\otimes\mathrm{id}_{x^{*}}}x\otimes x\otimes x^{*}\xrightarrow{\mathrm{id}_{x}\otimes b_{x}^{\dagger}}x\\
x\xrightarrow{d_{x}^{\dagger}\otimes\mathrm{id}_{x}}x^{*}\otimes x\otimes x\xrightarrow{\mathrm{id}_{x^{*}}\otimes\mathrm{c}_{x,x}}x^{*}\otimes x\otimes x\xrightarrow{d_{x}\otimes\mathrm{id}_{x}}x.
\end{aligned}
$$

考虑simple object，不难发现上面两个算符有相同的trace，所以也就是相同的算符，这种$x\to x$的自转算符我们记作$\theta_x$。在数学上，每个对每个对象配上这样一个态射$\theta_x$，而且是同构，满足下面两个等式：

$$
\begin{aligned}&\theta_{x}^{*}=\theta_{x^{*}}.\\&\theta_{x\otimes y}=(\theta_x\otimes\theta_y)\circ c_{y,x}\circ c_{x,y}.\end{aligned}
$$

就称一个**丝带结构（Ribbon Structure）**。前面用世界线构造出来的$\theta_x$满足这两个等式：[^25]

$$
to be continue
$$

类似$S$矩阵，对于simple object，可以定义一个$T$矩阵：

$$T:=(T_x\delta_{xy})_{x,y\in\mathrm{Irr}(\mathcal{C})}$$

这里因为$\operatorname{Hom}_\mathcal{C}(x,x)\simeq\mathbb{C}$，$\theta_x=T_x\cdot\mathrm{id}_x$。这个矩阵就刻画了任意子的“自旋”。

回忆我们在kitaev模型中碰见的丝带算符，是两类string operator合起来，一个non-trivial的粒子是$f$：

![丝带算符](\img\posts\topological_order\49.png)

根据闭弦算符和内部的$A,B$算符填充的等价性不难发现这将导致相位${-1}$，得到$T$矩阵：

$$
T=\begin{pmatrix}1\\&1\\&&1\\&&&-1\end{pmatrix}
$$

这在物理上也不难想象，首先$f$是由$e,m$组合而成的，所以其与$\mathbb{1},e,m$最大的区别在于其可以看作是一个一维的物体（虽然从拓扑激发的意义上还是$0$维的点缺陷）。所以作用在他上面的算符可以是一个二维的丝带，而不仅仅是一个一维的弦。我们把$f$可以用顶点和面心之间的箭头在图中表示。如图所示，随着丝带算符的作用，箭头相当于旋转了360度，所以这正意味着$f$完成了一次自转，获得了相位。不少文献也定义下面的topological spin $s$：

$$
\theta_i=\mathrm{e}^{2\pi\mathrm{i}s_i}
$$

现在总结一下，在Kitaev模型中，闭弦算符对应$c_{x,y}$，开弦算符对应$b_x,d_x$[^30]，两类闭弦算符套在一起得到的丝带算符对应$\theta_x$。结合约束幺约束这些我们计算时也经常忽略，并不是最重要的。虽然这里讨论的是一个具体模型，但是拓扑序里面的local operator就有这样范畴论上的共性。再次强调，虽然看似这取决于我们如何选取尺度，如何选取绝热变换，但是请相信最终得到的范畴都是彼此等价的。

另外，前面我们手动用辫结构和刚性结构构造了丝带结构，似乎丝带结构是涌现的。在数学上可以证明，对于辫融合范畴，其上的丝带结构和spherical结构有一一对应，而unitary又会带来唯一的（或者用数学黑话：典范的）一个spherical结构，所以前面考虑的所有二维拓扑序范畴存在的性质确实唯一涌现了一个丝带结构。这正是前面那两个式子的构造。

## UMTC
数学上把带有丝带结构的辫融合范畴（不要求幺正性）叫做**预模张量范畴(pre-Modular Tensor  Category)**。为了把“预”这个字去掉，我们需要引入非退化的概念。这里的非退化指的是$S$矩阵的非退化，不过我们采取一种更加便于物理解释的等价定义：

> 范畴的Müger中心$\mathfrak{Z}_2(\mathcal{C})$是一个全子范畴，对象集为：
>
> $$\mathsf{Ob}(\mathfrak{Z}_2):=\{x\in\mathcal{C}\mid c_{y,x}\circ c_{x,y}=\mathrm{id}_{x\otimes y},\forall y\in\mathcal{C}\}$$
>
> 而且这还是一个对称融合范畴，非退化性可以体现在Müger中心只包含一个简单对象幺元$\mathbb{1}$，也就是说其同构于$\mathsf{Vec}$。
>
> 中心的概念还可以进一步推广，考虑$\mathcal{C}$的全子范畴$\mathcal{D}$，$\mathcal{D}$在$\mathcal{C}$中的中心定义为由下面对象集定义的$\mathcal{C}$的全子范畴：
>
> $$
> \mathsf{Ob}(\mathcal{D}_{\mathcal{C}}^\text{cen}) :=\{x\in\mathcal{C}\mid c_{y,x}\circ c_{x,y}=\mathrm{id}_{x\otimes y},\forall y\in\mathcal{D}\}
> $$
> 
> 显然
> 
> $$\mathfrak{Z}_2(\mathcal{C})=\mathcal{C}_{\mathcal{C}}^\text{cen}$$

物理上Müger中心有非常清晰的诠释，$x\in \mathsf{Ob}(\mathfrak{Z}_2)$，意味着我们拿任何其它拓扑激发绕着他转一整圈，都不会得到任何相位，这就像平凡缺陷一样。从宏观上来看，我们如果把某个拓扑激发绕着转一圈，得到一个相位，那么就说明路径中间的拓扑是非平凡的，也就是说存在缺陷，那么这种缺陷是可以探测的。而在Müger中心中的缺陷是没办法通过这样的方式探测到的。但是如果Müger中心中只有$\mathbb{1}$，这说明平凡缺陷是唯一不能通过这样的方式探测道德，这也意味着一种特殊性，其它的都得到非平凡相位，而平凡缺陷相位平凡，这也可以看作是探测到了$\mathbb{1}$。只是他的探测依赖于对其它所有缺陷的探测。

物理上我们愿意承认下面这一点的存在：

> 拓扑序anomaly-free当且仅当所有余维数大于等于2的拓扑缺陷都可以通过转一圈（double braiding）的方式探测到。

这其实可以看作是一种完备性的要求，要求体系里面的所有粒子我们都是可以探测到的。注意上面的原则我们是对所有维数拓扑序写的，二维拓扑序只要考虑任意子激发的braiding就好了。而上面的这句话翻译成数学语言就是：

> $$
> \text{anomaly-free }\iff \text{non-degenerate} 
> $$

而数学上，pMTC加上非退化这一条件就称作**张量范畴(MTC)**，如果加上幺正条件，就是**UMTC**。至此，我们终于说明了**稳定且无反常的二维拓扑序的点缺陷是一个UMTC**！

另外，虽然我们构造toric model时可以在任意亏格闭曲面上，而且物理学家经常对于平面和一点紧致化的球面不做区分，但是下图告诉你，球面由于去掉一点后基本群平凡，而平面去掉一点后不平凡，所以编织操作在球面上不是良定义的，否则所有球面上的braiding loop都同伦于trivial loop：

![不要在球面上编辫子](\img\posts\topological_order\50.png)

同理，其它亏格闭曲面也不行。

UMTC里面有很多性质，这里列举一二

$$
\begin{aligned}
S_{xy}=S_{yx}=S_{x^{*}y^{*}}=\overline{S_{xy^{*}}},\quad S_{\mathbb{1}x}=S_{x\mathbb{1}}=\dim(x)\\
S_{xy}S_{xz}=\dim(x)\sum_{w\in\mathrm{Irr}(\mathcal{C})}N_{yz}^wS_{xw}
\end{aligned}
$$

下面公式中<b>$C_{xy}:=\delta_{x^*y}$</b>称为荷共轭矩阵：

$$
S^2=\dim(\mathcal{C})\cdot\mathcal{C} \Rightarrow  (S^{-1})_{xy}=\dim(\mathcal{C})^{-1}\cdot S_{xy}
$$

还有重量级的Verlinde公式，如果读者熟悉环面共形场论，应当对此不陌生：

$$
\sum_{x\in\mathrm{Irr}(\mathcal{C})}\frac{S_{xy}S_{xz}S_{xw^*}}{S_{x\mathbb{1}}}=\dim(\mathcal{C})\cdot N_{yz}^w
$$

定义下面的Gauss求和：

$$
\tau^\pm(\mathcal{C}):=\sum_{x\in\mathrm{Irr}(\mathcal{C})}T_x^{\pm1}d_x^2
$$

则$\tau^+(\mathcal{C})\tau^-(\mathcal{C})=\dim(\mathcal{C})$，定义乘性中心荷：

$$
\xi(\mathcal{C}):=\frac{\tau^+(\mathcal{C})}{\sqrt{\dim(\mathcal{C})}}=\frac{\sqrt{\dim(\mathcal{C})}}{\tau^-(\mathcal{C})}
$$

可以证明：

$$
\xi(\mathcal{C})=\exp(2\pi\mathrm{i}c(\mathcal{C})/8),\quad c(\mathcal{C})\in\mathbb{Q}/8\mathbb{Z}
$$

这里$c(\mathcal{C})$被称作加性中心荷，后面的取值范围意味着$\xi(\mathcal{C})$是De Moivre数。

考虑$\mathrm{SL}(2,\mathbb{Z})$，有下面两个生成元：

$$
\mathfrak{s}:=\begin{pmatrix}0&-1\\1&0\end{pmatrix},\mathfrak{t}:=\begin{pmatrix}1&1\\0&1\end{pmatrix}
$$

如果我们做下面的替换：

$$
\mathfrak{s}\mapsto\frac{S}{\sqrt{\dim(\mathbb{C})}},\mathfrak{t}\mapsto T
$$

实际上得到了$\mathrm{SL}(2,\mathbb{Z})$的一个投影表示，中心荷是乘性中心荷。模范畴中的模一次也可以从其生成模群的表示来看出。而且可以证明，$\sqrt{\dim(\mathcal{C})^{-1}}\cdot S$是幺正的，$T_x$都是De Moivre数，所以$T$也是幺正的，所以任何一个MTC都对应了一个模群的幺正投影表示[^31]。但是反过来并不是每一个模群表示都有一个MTC，因为MTC并不是由$S,T$矩阵完全确定的。

如果读者熟悉弦论应当知道$\mathrm{SL}(2,\mathbb{Z})$是环面的mapping class group，如果把拓扑序安放在环面上（当然上面不好定义编织操作），考虑环面上的mapping class group，其实这诱导了拓扑序基态的变换，也确定了mapping class group的投影表示。而且这个表示是同构于在平面二维拓扑序上发展而来的UMTC确定的模群表示的。在拓扑序发展早期也用过这种环面上的方式描述过二维拓扑序。这种方法也可以推广到高维，但是高维mapping class group学过弦论的都知道非常复杂。

前面也提到过$S,T$矩阵算起来十分麻烦，这里推荐一个`Mathematica`程序包：https://github.com/gert-vercleyen/FusionRings，上面还自带上千种Fusion Ring结构。

## 构造新的拓扑序

### 拓扑序的堆叠
首先第一种方法就是把拓扑序叠起来，比如两层挨得很近的二维拓扑序看成是一个：

![二位拓扑序叠叠乐](\img\posts\topological_order\51.png)

可惜这一操作不是由范畴的直和操作完成的，而是由复杂不少的Deligne张量积完成：
>Deligne tensor product是一个双线性函子，由下面的泛性质描述：
>
>![DT泛性质](\img\posts\topological_order\52.png)
>
>对于咱老百姓而言这一定义不是太平民化，可以写成下面的形式：
>
>- 任意两个$\mathcal{C},\mathcal{D}$中对象$x,y$确定一个$x\boxtimes y\in\mathcal{C}\boxtimes\mathcal{D}$，剩下的对象是这些对象的直和
>
>- 态射是原先态射的张量积，这个张量积是线性空间意义下的：
>
> $$
>  \mathrm{Hom}_{\mathcal{C}\otimes\mathcal{D}}(x\otimes y,x^{\prime}\otimes y^{\prime})\simeq\mathrm{Hom}_\mathcal{C}(x,x^{\prime})\otimes_\mathcal{C}\mathrm{Hom}_\mathcal{D}(y,y^{\prime})
> $$
>  
> - $\mathrm{Irr}(\mathcal{C}\boxtimes\mathcal{D})\simeq\mathrm{Irr}(\mathcal{C})\times\mathrm{Irr}(\mathcal{D})$，也就是说单对象由单对象的$\boxtimes$得到
> 
>其上的pMTC结构由下式定义：
>
> - 首先是幺半结构：
> 
> $$
> (x\boxtimes y)\otimes(x^{\prime}\boxtimes y^{\prime}):=(x\otimes x^{\prime})\boxtimes(y\otimes y^{\prime}),\quad x,x^{\prime}\in\mathcal{C},y,y^{\prime}\in\mathcal{D}
> $$
> 
> <p>结合约束，幺约束都由原先的诱导，幺元是$\mathbb{1}_\mathcal{C}\boxtimes\mathbb{1}_\mathcal{D}$ </p>
> - 刚性结构由下式确定：
> 
> $$
> x\boxtimes y \xrightarrow{\text{dual}} x^{L/R}\boxtimes y^{L/R}
>$$
> 
> - Spherical 结构由下式确定
> 
> $$
> a_{x\boxtimes y}^{\mathcal{C}\boxtimes\mathcal{D}}:=a_x^\mathcal{C}\boxtimes a_y^\mathcal{D}
> $$
> 
> 在这样的刚性结构下，${\mathcal{C}\boxtimes\mathcal{D}}$中的所有维数（不管是对象还是范畴，不管是dim还是FPdim）都是两个因子范畴的乘积。
> 
> $$
> c^{\mathcal{C} \boxtimes \mathcal{D}}_{x \boxtimes y, x' \boxtimes y'} =
\left( (x \boxtimes y) \otimes (x' \boxtimes y') := (x \otimes x') \boxtimes (y \otimes y') 
\overset{c^{\mathcal{C}}_{x,x'} \boxtimes c^{\mathcal{D}}_{y,y'}}{\longrightarrow}
(x' \otimes x) \boxtimes (y' \otimes y) = (x' \boxtimes y') \otimes (x \boxtimes y) \right)
> $$
> 
> $S$矩阵可由下式计算
>
>$$
> S_{x\boxtimes y,x^{\prime}\boxtimes y^{\prime}}^{\mathcal{C}\boxtimes\mathcal{D}}=S_{x,x^{\prime}}^{\mathcal{C}}\cdot S_{y,y^{\prime}}^{\mathcal{D}}
> $$
> 
>-丝带结构则由下式给出：
>
>$$
> \theta_{x\boxtimes y}^{\mathcal{C}\boxtimes \mathcal{D}}:=\theta_x^{\mathcal{C}}\boxtimes\theta_y^{\mathcal{D}}
> $$
>
>$T$矩阵的对角元可以用下式计算：
>
>$$
>T_{x\boxtimes y}^{\mathcal{C}\boxtimes \mathcal{D}}:=T_x^{\mathcal{C}}\cdot T_y^{\mathcal{D}}
>$$
>
>$\mathfrak{Z}_2(\mathcal{C}\boxtimes\mathcal{D})\simeq\mathfrak{Z}_2(\mathcal{C})\boxtimes\mathfrak{Z}_2(\mathcal{D})$，所以UMTC结构由$\mathcal{C},\mathcal{D}$都是UMTC得到。

而且这种描述不仅仅看起来只适用于两层之间无相互作用，记住，对于拓扑序我们唯一感兴趣的是相变信息，如果我们在两层之间加个微扰，也就是说两层之间加个微小的“范德华力”，由于拓扑序本身对微扰的鲁棒性，这种微小的相互作用最终不会在相的层次产生任何影响。所以也可以用$\boxtimes$来描述。

### 拓扑序的时间反演和空间反演

时间反演对应世界线反过来走，对象态射，态射合成，幺半结构等等都不变，唯一变的是辫结构，braiding和anti-braiding角色互换：

$$
c_{x,y}^{\overline{\mathcal{C}}}:=(c_{y,x}^{\mathcal{C}})^{-1},\quad x,y\in\mathcal{C}
$$

这将导致：

$$
S_{xy}^{\overline{\mathcal{C}}}=S_{xy^*}^{\mathcal{C}},\quad \tau^\pm(\mathcal{\overline{C}})=\tau^\mp(\mathcal{C}),\quad \xi(\mathcal{\overline{C}})=\xi(\mathcal{C})^{-1},\quad c(\mathcal{\overline{C}})=-c(\mathcal{C})
$$

另外，上面涌现的丝带结构应当改为：

$$
\theta_x^{\overline{\mathcal{C}}}:=(\theta_x^{\mathcal{C}})^{-1}
$$

你也可以进行空间反演，这会导致左右定义反过来，导致幺正结构变化：

$$
x\otimes^\mathrm{rev}y:=y\otimes x,\quad x,y\in\mathcal{C}^\mathrm{rev}
$$

一维拓扑序只有左右，但是二维拓扑序还有上下，这就出来两种空间反演，如下图所示：

![拓扑序的时间和空间反演](\img\posts\topological_order\53.png)

一种改变braiding但是不改变幺半结构，另一种则相反，但是可以证明这两种方式如时间反演一样是等价的范畴：

$$
\mathcal{C}^\mathrm{op}\simeq \mathcal{C}^\mathrm{rev}\simeq \overline{\mathcal{C}}
$$

无论是时间反演还是空间反演，最终得到的拓扑序我们都记作$\mathsf{C}$，得到的范畴是等价的。如果$\mathsf{C}$对应的范畴还是对称的，那么$\mathcal{C}\simeq\overline{\mathcal{C}}$

## 一些例子

toric model对应的拓扑序可能有些平凡，这里列举其它一些例子，他们都比toric model复杂不少。

### Quantum Double Category

对于任意一个有限群，都可以定义其上的Quantum Double Category $\mathcal{D}_G$：

- <p>上面的对象是一个线性空间$V$配备一个群同态$\rho: G\to GL(V)$，看起来很像群表示，但是这个表示是$G$分层的，也就是说$V=\oplus_{g\in G}V_g$，而且$\rho(g):V_h\to V_{g h g^{-1}}$。所以这个范畴不仅带有$\mathsf{Rep(G)}$的结构，还带有$\mathsf{Vec}_G$的结构</p>
- 上面的态射是一个线性映射，不仅在$\mathsf{Rep(G)}$结构意义下构成态射，在$\mathsf{Vec}_G$的意义下也构成，也就是由这双层结构的态射共同诱导
- 上面的单对象由一对等价类诱导$([g],[\rho])$，$[g]$是$G$中的共轭类，$[\rho]$是$[g]$确定的群中心$Z(g)$的不可约表示的等价类。这个表示有个诱导表示$\mathrm{Ind}^G_{Z(g)}(\rho)$即构成所求单对象等价类
- 幺半结构由$\mathsf{Rep(G)}$上的幺半结构诱导，取群表示张量积的同时要保持表示空间的$G$分次，幺元为$\mathbb{C}_{(e)}$
- <p>刚性结构由$X^*_{(g,\rho)}=X_{(g^{-1}),\rho^*}$给出，$\rho^*$是$\rho$的共轭表示，给出下面的维数：</p>

$$
\dim(X_{(g,\rho)})=\mathrm{FPdim}(X_{(g,\rho)})=|[g]|\cdot\dim(\rho)
\dim(\mathcal{D}_G)=\mathrm{FPdim}(\mathcal{D}_G)=|G|^2
$$

- 辫结构和丝带结构给出下面的$S,T$矩阵：

$$
\begin{gathered}
S_{([g],[\pi]),([g^{\prime}],[\pi^{\prime}])}=\frac{|G|}{|Z(g)||Z(g^{\prime})|}\sum_{\{h\in G|hg^{\prime}h^{-1}\in Z(g)\}}\mathrm{tr}_{\pi}(h(g^{\prime})^{-1}h^{-1})\mathrm{tr}_{\pi^{\prime}}(h^{-1}g^{-1}h)\\
T_{([g],[\pi])}=\frac{\mathrm{tr}_\pi(g)}{\mathrm{tr}_\pi(e)}\\
\xi(\mathcal{D}_G)=1 ,\quad c(\mathcal{D}_G)=0 \mod 8
\end{gathered}
$$

$\mathcal{D}_G$对应第一篇讲的Kitaev模型，$G=\mathbb{Z}_2$时对应toric model，范畴结构也可以简化为$\mathcal{TC}$。

### Ising type category

这个粒子相对而言没那么抽象，亲民不少。这个范畴包含三个自对偶的simple object $\mathbb{1},\sigma,\psi$，满足下面的融合规则：

$$
\psi\otimes\psi=\mathbb{1},\psi\otimes\sigma=\sigma=\sigma\otimes\psi,\sigma\otimes\sigma=1\oplus\psi
$$

幺半结构由下面的结合约束给定：

$$
\begin{aligned}
    \alpha_{\psi,\sigma,\psi} & : (\psi \otimes \sigma) \otimes \sigma = \sigma \xrightarrow{-1} \sigma = \psi \otimes (\sigma \otimes \psi), \\
    \alpha_{\sigma,\psi,\sigma} & : (\sigma \otimes \psi) \otimes \sigma = \mathbb{1} \oplus \psi \xrightarrow{1\oplus -1}\mathbb{1} \oplus \psi = \sigma \otimes (\psi \otimes \sigma), \\
    \alpha_{\sigma,\sigma,\sigma} & : (\sigma \otimes \sigma) \otimes \sigma = (\mathbb{1} \otimes \sigma) \oplus (\psi \otimes \sigma) \xrightarrow{A_{\pm}} (\sigma \otimes \mathbb{1}) \oplus (\sigma \otimes \psi) = \sigma \otimes (\sigma \otimes \sigma)
\end{aligned}
$$

注意到上面可以定义两种结合约束：[^36]

$$
A_\pm=\frac{\pm1}{\sqrt{2}}\begin{pmatrix}1&1\\1&-1\end{pmatrix}
$$

辫结构由下面的交换约束给定：

$$
\begin{gathered}c_{\psi,\psi}{:}\psi\otimes\psi=\mathbb{1}\xrightarrow{-1}\mathbb{1}=\psi\otimes\psi,\\c_{\sigma,\sigma}{:}\sigma\otimes\sigma=\mathbb{1}\oplus\psi\xrightarrow{\zeta\oplus\zeta^{-3}}\mathbb{1}\oplus\psi=\sigma\otimes\sigma,\\c_{\psi,\sigma}{:}\psi\otimes\sigma=\sigma\xrightarrow{\zeta^{4}}\sigma=\sigma\otimes\psi,\\c_{\sigma,\psi}{:}\sigma\otimes\psi=\sigma\xrightarrow{\zeta^{4}}\sigma=\psi\otimes\sigma.
\end{gathered}
$$

上面由八种辫结构，由$\zeta^8=-1$的解给定，其中辫结构和幺正结构的相容性由下式的正负号确定（从而知晓$A_\pm$的正负号选取）

$$
\zeta^2+\zeta^{-2}=\pm\sqrt{2}
$$

所以总共还是有八种辫幺正结构，而且$\mathfrak{Z}_2$trivial，所以都是非退化的。

如果略去幺正性，那么spherical结构并非唯一由幺正性指定，可以有相容的两种选取，依赖于$\epsilon=\pm 1$，他们的区别在于三个单对象的维数：

$$
\dim(\mathbb{1})=\dim(\psi)=1,\dim(\sigma)=\epsilon(\zeta^2+\zeta^{-2})
$$

所以总共有16种Ising type category，$S,T$矩阵如下：

$$
S=\begin{pmatrix}1&1&\epsilon(\zeta^2+\zeta^{-2})\\1&1&-\epsilon(\zeta^2+\zeta^{-2})\\\epsilon(\zeta^2+\zeta^{-2})&-\epsilon(\zeta^2+\zeta^{-2})&0\end{pmatrix}
$$

$$
T=\begin{pmatrix}1&&\\&-1&\\&&\epsilon\zeta^{-1}\end{pmatrix}
$$

幺正的有八种，要求$\dim (\sigma)=\sqrt{2}$，乘性中心荷由$\epsilon\zeta^{-1}$给定，对应的加性中心荷$1/2,\ldots,15/2 \mod 8$，所以可以用中心荷完全分类这些范畴。

为什么要叫Ising type？熟悉共形场论的玩家一眼就能看出来这个融合规则就是极小模型种对应Ising相变点的OPE。而且CFT中Ising模型的中心荷是$1/2$，所以对应上面的16种中的其中一个。

### Pointed范畴

范畴中对象的可逆可以由下面等价的三个条件描述：

>- $b_x$和$d_x$都是同构
> - $ x\in\mathcal{C},\exists y\in\mathcal{C}$，满足$x\otimes y\simeq\mathbb{1}\simeq y\otimes x.$ 
> - $\mathrm{FPdim}(x)=1$

如果范畴中每个对象是可逆的，这样的范畴称之为pointed的范畴。[^38]在幺半结构下$\mathrm{Irr}(\mathcal{G})$构成了一个群$G$，而且如果存在辫结构，这还是个交换群，整个范畴一定等价于某个<b>$\mathsf{Vec}_G^{(\omega,c)}$</b>。这里$\omega$就是3-cocycle给出的幺半结构，而$c$是下面的方程给出的辫结构：

$$
\begin{gathered}
\omega(g,h,k)c(g,hk)\omega(h,k,g)=c(g,h)\\
\omega(h,g,k)c(g,k),\omega(g,h,k)^{-1}c(gh,k)\omega(k,g,h)^{-1}=c(h,k)\omega(g,k,h)^{-1}c(g,k).
\end{gathered}
$$

<p>
考虑一个交换群$G$上面可以定义一个二次型$q:G\to\mathbb{C}^\times$，满足$q(g)=q(g^{-1})$，和相关的函数$b{:}\overset{\cdot}{\operatorname*{\operatorname*{G}}}\times G\to\mathbb{C}^{\times}$：
</p>

$$
b(g,h):=\frac{q(gh)}{q(g)q(h)}
$$

当$b(g,h)=1,\forall h\in G \iff e\in G$时我们称二次型非退化。一个pre-matric群就是交换群配上一个二次型，如果二次型非退化就称为metric群。[^39]

每一个pointed范畴给出一个交换群从而给出一个二次型：

$$
q(g):=c(g,g),\quad g\in G,\quad b(g,h):=c(g,h)c(h,g),\quad g,h\in G.
$$

二次型由五边形和六边形公理要求。$(G,q)$便是范畴对应的associated pre-metric group。可以证明，两个pointed范畴等价当且仅当上面的associated pre-metric group同构。即使不要求Unitary，上面的spherical结构也是唯一给定的，$S,T$矩阵为：

$$
S_{g,h}=b(g,h^{-1}),\quad T_g = q(g)
$$

<p>
而非退化性直接从上式可以看出要求$(G,q)$进一步是metric。这对应阿贝尔拓扑序，这个命名是源于其统计性质，任意元素之间的编织$c_{x,y}$都会退化为一个$U(1)$的相位而不是一个一般的线性空间变换的矩阵。
</p>

$\mathcal{TC}$就是一个典型的abel拓扑序，对应metric group ：

$$
(\mathbb{Z}_2\times\mathbb{Z}_2,q),\quad q(a,b)=(-1)^{ab},a,b\in\{0,1\}=\mathbb{Z}_2
$$

而且任意的abel群的quantum double范畴都是一个pointed范畴，对应的metric群为：

$$
(A\times\hat{A},q),\quad \hat{A}:=\mathrm{Hom}(A,\mathbb{C}^\times)\quad q(a,\chi):=\chi(a)
$$

而任何的abel拓扑序都可以由下面的$U(1)$ chern-simons 场论进行实现：

$$
S=\frac{1}{4\pi}\int K_{IJ}a^I\wedge\mathrm{d}a^J
$$

这里的$K$矩阵满足：

- 所有的对角元都是偶数，其它元素都是整数
- 对称矩阵
- 非奇异

数学上，可以看作是一个格的Gram矩阵，也就是生成格的基底$e_i$点乘得到的矩阵<b>$K_{ij}=e_i\cdot e_j$</b>。Gram矩阵可以看作是$\mathbb{Z}^n\to\mathbb{Z]^n$格上的同构，定义：

$$
G:=\mathrm{coker}(K)=\mathbb{Z}^n/\mathrm{im}(K)
q([v]):=\exp(\pi\mathrm{i}\cdot v^\mathrm{T}K^{-1}v),\quad v\in\mathbb{Z}^n
$$

由此得到的便是对应的pointed范畴，比如$\mathcal{TC}$对应：

$$
K=\begin{pmatrix}0&2\\2&0\end{pmatrix}
$$

体系的加性中心荷可以由$K$的Morse指标计算，也就是正的特征值个数减去负的特征值个数。另外，$K$矩阵满足的性质的第一条其实是对bosonic附加的条件，如果是fermionic的abel拓扑序，把这个条件改成对角元是奇数就好了，同样可以用$K$矩阵完全分类。而且从更物理的视角来看，这个体系还可以看作是多层分数量子霍尔态的堆叠，Lauling波函数对应为：

$$
\prod_{I;i<j}\left(z_i^I-z_j^I\right)^{K_{II}}\prod_{I<J;i,j}\left(z_i^I-z_j^J\right)^{K_{IJ}}\mathrm{e}^{-\frac{1}{4}\sum_{i,I}|z_i^I|^2}
$$

fermionic和bosonic的拓扑序最早是从Lauling波函数的奇偶性看出来的，由上式可以很快看出对$K$矩阵矩阵元的奇偶性要求。

## $SU(2)$ Chern-Simons理论的拓扑序

进一步考虑由下面的拓扑场论作为低能有效场论生成的拓扑序：[^41]

$$
S=\frac{k}{4\pi}\int\mathrm{tr}\left(A\wedge\mathrm{d}A+\frac{2}{3}A\wedge A\wedge A\right)
$$

他上面的拓扑序范畴实际上对应$\mathcal{C}(\mathfrak{sl}_2,k)$[^40]。为此我们首先介绍$\mathcal{C}(\mathfrak{sl}_2,q,t)$范畴。

这个范畴实际上是对$\mathsf{Rep}(\mathfrak{sl}_2)$的截断。因为$\mathsf{Rep}(\mathfrak{sl}_2)$虽然在幺半性的性质上比较好，但是在半单性上差一点，因为这个范畴有无穷多个单对象等价类，你严格去讲这个渊源关系就要讲李代数的包络代数和形变这些老百姓听不懂的官方言论了，这里我直接给出单对象和张量积的定义，而且为了咱物理学家听懂，直接略去那些无聊的结合约束等等的定义，而是直接给出最为重要的，能算的$S,T$矩阵！：

- 单对象等价类有$k+1$个，$V_0,\ldots,V_k$
- 融合规则就是量子力学里面学的角动量的CG系数：

$$
V_n\otimes V_m=\bigoplus_{i=\max\{n+m-k,0\}}^{\min\{n,m\}}V_{n+m-2i}=\begin{cases}V_{|n-m|}\oplus V_{|n-m|+2}\oplus\cdots\oplus V_{n+m},&n+m\leq k;\\V_{|n-m|}\oplus V_{|n-m|+2}\oplus\cdots\oplus V_{2k-(n+m)},&n+m>k.&&\end{cases}
$$

- 刚性结构给出的维数是：

$$
\mathrm{FPdim}(V_n)=[n+1]_{q_1},\quad q_1:=\mathrm{e}^{\pi\mathrm{i}/(k+2)},\quad [n]_q:=\frac{q^n-q^{-n}}{q-q^{-1}}=q^{n-1}+q^{n-3}+\cdots+q^{-n+1}
$$

$$
\mathrm{FPdim}(\mathcal{C}(\mathfrak{sl}_2,q,t))=\frac{k+2}{2\sin^2(\frac{\pi}{k+2})}
$$

$$
\begin{gathered}
\dim(V_n)=[n+1]_q\\
\dim(\mathcal{C}(\mathfrak{sl}_2,q,t))=\frac{k+2}{2\sin^2(\frac{a\pi}{k+2})}
\end{gathered}
$$

- 辫结构和丝带结构给出的互统计和自旋为：

$$
\begin{gathered}
S_{nm}:=S_{V_n,V_m}=[(n+1)(m+1)]_q=\frac{\sin(\frac{a(n+1)(m+1)\pi}{k+2})}{\sin(\frac{a\pi}{k+2})}\\
T_n:=T_{V_n}=t^{n(n+2)}
\end{gathered}
$$

这里$q\mathrm{e}^{a\pi\mathrm{i}/(k+2)},t=\sqrt{q}$，$a$是整数，和$k+2$的最大公因子为$1$（互质）。BFC结构只和$q$有关，当$a$是奇数的时候构成MTC。

而$\mathcal{C}(\mathfrak{sl}_2,k)$对应上面情况的特殊情况，对应：

$$
q=\mathrm{e}^{\pi\mathrm{i}/(k+2)}\mathrm{~and~}t=\mathrm{e}^{\pi\mathrm{i}/2(k+2)}
$$

这种情况下是个UMTC且加性中心荷为：

$$
3k/(k+2)
$$

学过共形场论的同学一定知道，流代数$\hat{\mathfrak{g}}_k$对称性由Sugawara构造生成的共性场论的中心荷长下面这个样子;

$$
c=\frac{k\dim\mathfrak{g}}{k+C_{\mathfrak{g}}}
$$

而$(\hat{\mathfrak{sl}}_2)_k$正好就对应$\dim =3,C=2$。而拓扑序确实可以用流代数的方法进行研究。

# 二维拓扑序的分类

分类定理是非常美妙的存在，在数学上，对UTMC的分类已有不少研究，simple object等价类小于等于4的UMTC的分类可以查看这篇工作：https://arxiv.org/abs/0712.1377。 但是这是数学上的分类，物理上其实比这个要稍微复杂一些，而且会用物理学家更看得懂的方式进行描述，主要参考下面四篇文献：[^33]

http://link.aps.org/doi/10.1103/PhysRevB.95.235140

https://link.aps.org/doi/10.1103/PhysRevB.94.155113

https://academic.oup.com/nsr/article/3/1/68/2460241

https://link.aps.org/doi/10.1103/PhysRevB.91.125149

前面我们介绍的都是gapped liquid without symmetry，首先我们会推广到with symmetry的情况如何用范畴论描述，并且一并讨论bosonic和fermionic的情况。然后用范畴论的方法统一对这些情况的二维拓扑序进行分类。注意我们这里的描述是相当简短的，我会尽可能略去所有的技术性细节，快速描述一遍其中的主要结果。[^34]另外，上面这四篇文章虽然对于物理学家来说已经很数学了，但是对于数学家来说严谨性和数学性都不够，如果你对具体的数学证明以及严格的数学定义感兴趣你可以看下面这篇分类工作的数学文章：

https://doi.org/10.1007/s00220-016-2748-y

### 模扩张
前面讨论的所有结果，都是在bosonic without symmetry的意义下讨论的，但是不要慌张，推广到fermionic甚至是with symmetry非常简单。而且虽然任意一个拓扑序都决定了一个UMTC，但是反过来并不是UMTC就足够描述一个拓扑序。

我们首先来看如何用范畴论的语言描述费米体系以及带对称性的体系，注意到前面我们介绍过SFC$\mathcal{E}$，我们说这是带基态对称性的trivial拓扑序，其实任意的拓扑序我们都可以看作是在带基态对称性trivial拓扑序的背景下运作的，而这种对称性在Landau相变理论的语言就是群论，现在应该换成范畴论的语言，$\mathcal{E}$。这样我们就用SFC把四种（fermionic/bosonic，with/without symmetry）对称性统一描述了。

如何描述这种背景的存在性呢？显然这要求这种背景激发（或者说local激发，因为这种激发可以被local operator联系到基态）作为子范畴嵌入到bulk激发，也就是前面讨论的non-trivial的任意子激发，前面我们花了很大的力气是想说明拓扑序的bulk激发由UMTC描述，这里我们首先不把非退化条件加进去，也就是说我们考虑一个UBFC$\mathcal{C}$，他描述bulk内的拓扑激发，而体系的对称性作为SFC$\mathcal{E}$，由一个全忠实的辫幺半嵌入$\mathcal{E}\hookrightarrow\mathcal{C}$。为什么我们说要把非退化先去掉呢？在数学上非退化要求$\mathfrak{Z}(\mathcal{C})=\mathsf{Hilb}$。在物理上这要求只有local激发不能用转一圈的方式被探测到，那自然现在local激发构成的$\mathcal{C}$中的全子范畴从$\mathbb{1}$构成的$\mathsf{Hilb}$升级到了任意的一个SFC$\mathcal{E}$，非退化的概念也要由此升级成：

$$
\mathfrak{Z}_2(\mathcal{C})=\mathcal{E}
$$

满足这一点我们就称$\mathcal{C}$是$\mathcal{E}$上的一个UBFC，记作$\mathrm{UMTC}_{/\mathcal{E}}$。

显然，当<b>$\mathcal{E}=\mathcal{B}_0\simeq \mathsf{Hilb}$</b>时，就得到了前面bosonic拓扑序的情况，就是一般的UMTC。但是对于一般情况这并没有modular性质。但是modular可以通过模扩张加回来。

拓扑物态的分类最早要从对SPT态的分类说起，利用代数拓扑的方法发现$d$维有$G$对称群的bosonic SPT物态可以用下面的同调群分类：

$$
\mathcal{H}^{d+1}\left(G,U(1)\right)
$$

那个时候有一个想法就是on-site的对称性是local的对称性，就像我们在场论中干的活一样，可以通过引入一个在群空间中取值的规范场与体系耦合的方式来gauge掉这个对称性，既然对称性已经作为规范场存在了，那么这个对称性就不再是对称性了，那么得到的新的物态就应当是without symmetry的物态。而如果两个物态不同，gauge操作之后也应当是不同的物态。这种gauge的操作从场的角度看是和规范场耦合，从拓扑激发的角度看是引入一些新得simple object这些是不同于原先without symmetry情况下的topological defect的新缺陷，原始文献称为monodromy defect，也称作symmetry-twist defect，是由对称性带来的缺陷，引入这些缺陷就等价于gauge symmetry[^42]。

那么由于gauge symmetry之后体系变成without symmetry的体系了（fermionic相对bosonic本身也是一种对称性，所以这里我们说without symmetry意思就是bosonic without symmetry topological order这类前面讨论的最平凡的情况），自然就由一个真正的UMTC来描述，我们要做的就是把$\mathcal{C}$扩张成一个UMTC。这个扩张包含两个资料UMTC $\mathcal{M}$和全忠实辫幺半嵌入$\eta$，后面这个资料经常略去。而且嵌入是以一种最小的方式，也就是要求：

$$
{\mathfrak{Z}_2(\mathcal{C})}^\mathrm{cen}_{\mathcal{M}}={\mathcal{E}}^\mathrm{cen}_{\mathcal{M}}=\mathcal{C}
$$

从物理上看，这就是要求新引入的那些缺陷至少和$\mathcal{E}$中的一个对象用转一圈的方式获得相位。所以现在体系由一个模扩张之后的UMTC描述，也就是三个逐个嵌入的范畴$\mathcal{E}\hookrightarrow\mathcal{C}\hookrightarrow\mathcal{M}$，范畴的等价还要求嵌入是等价的，要求下面的交换图交换：

![模扩张等价](\img\posts\topological_order\54.png)

而且我们不单单用范畴论描述了fermionic拓扑序[^44]，更是把这种方法推广到了with symmetry的一般二维GQL（gapped quantum liquid）情况进行了一个描述。SPT序是with symmetry但是平凡拓扑激发，也就是$\mathcal{E}$中with symmetry的情况。拓扑序是without symmetry但是有非平凡拓扑激发的情况，也就是$\mathrm{UMTC}_{\mathcal{B_0}}/\mathrm{UMTC}_{\mathcal{F_0}}$。而一般的GQL是这两种的结合，在bulk内又有非平凡拓扑激发，又因为对称性还带来了更新奇的symmetry-twisted defect这种激发，所以这种一般的GQL也被称作**SET(Symmetry Enriched Topological)序**。

### 手征中心荷 

但是，上面的描述依然不够描述整个GQL，或者说存在两个GQL不等价但是有相同模扩张的UMTC！虽然在拓扑序的bulk里面是gapped的，但是其可以有non-trivial的边缘态，就像是IQH中的手征边缘激发。好在边缘激发由模扩张之后的UMTC已经描述了一部分，剩下只需要加上一个手征中心荷$c$来完全描述[^43]，而且这个中心荷的$\mod 8$还等于模扩张之后的UMTC$\mathcal{M}$的加性中心荷。

这种边缘的手征激发可以是gapless的，手征中心荷有一个物理对应就是thermal hall effect的系数：

$$
I=\frac{\pi}{12}cT^2
$$

这里$I$是手征激发带来的边缘态导电电流强度，$T$是体系温度。手征中心荷很大程度上标记着体系中存在多少**可逆拓扑序**的堆叠。下面首先介绍可逆拓扑序。

$\boxtimes$可以看作是拓扑序$\mathsf{TO}$上的幺半群结构，而且显然$\mathsf{C}\boxtimes\mathsf{D}=\mathsf{D}\boxtimes\mathsf{C}$，所以这个还是个交换幺半群。幺体现在$\mathbb{1}_2$平凡拓扑序作为幺元上，半体现在并不是所有的拓扑序都可逆，也就是说$\mathsf{C}\boxtimes\overline{\mathsf{C}}=\mathbb{1}_2$。注意我的符号已经明显的告诉你如果拓扑序可逆，那么逆就是时间反演。可逆拓扑序用$\mathsf{iTO}$表示。[^37]

可逆拓扑序很大程度上是trivial的，因为如果体系内有non-trivial的拓扑激发，很难想象在上面堆叠一层别的拓扑序之后可以把这个non-trivial的激发抹除从而得到一个trivial的拓扑序，也就是幺元。所以我们认为**一个拓扑序是可逆的当且仅当它只有trivial的拓扑激发**。那自然就会想，trivial的拓扑激发不自然就是trivial的拓扑序么？但是别忘了，edge上还存在激发，我们搞到现在研究的最多的都是bulk里面的激发，所以只要chiral center charge非平凡，最终的拓扑序也就应该是非平凡的。对于invertible bosonic topological order，$\mathsf{iTO}_{B}$由一个非平凡的拓扑序生成，$E_8$ Hall态，这个物态是abel拓扑序，可以用$U(1)$ chern-simoins场论来描述，对应的Gram矩阵如下：

$$
K_{E_8}=\begin{pmatrix}2&1&0&0&0&0&0&0\\1&2&1&0&0&0&0&0\\0&1&2&1&0&0&0&0\\0&0&1&2&1&0&0&0\\0&0&0&1&2&1&0&1\\0&0&0&0&1&2&1&0\\0&0&0&0&0&1&2&0\\0&0&0&0&1&0&0&2\end{pmatrix}
$$

其中心荷是$8$，这也就是说$\mathsf{TO}_B$由下式进行分类：

$$
\mathrm{UMTC}_{\mathcal{B}_0} \times\mathsf{iTO}_B
$$

也就是说如果两个$\mathsf{TO}_B$在模扩张的UMTC（这个时候模扩张是trivial的）下等价，那么他们最多差几个$E_8$态的堆叠，具体是几个就取决于中心荷的大小。

同理，可以推广到$\mathsf{TO}_F$情况：

$$
\mathrm{UMTC}_{\mathcal{B}_0} \times\mathsf{iTO}_F
$$

而且$\mathsf{iTO}_F$也只有一个元素生成，对应$p+\mathrm{i} p$超导体，其中心荷是$\frac12$。

### $\boxtimes_{\mathcal{E}}$  vs  $\boxtimes$

上一节我们讲了bosonic/fermionic without symmetry的分类，其中涉及到invertible以及拓扑序的stack，这就涉及到$\boxtimes$算子，这其实要小心处理。在做分类的时候，我们都是对给定体系的对称性$\mathcal{E}$，然后再在上面扩张不同的$\mathcal{C}\hookrightarrow\mathcal{M}$进行分类。这个时候涉及到两个$\mathcal{E}$为背景的GQL的堆叠的时候就要小心，因为背景也会叠加，也就是说我们得到的新的GQL是以$\mathcal{E}\boxtimes\mathcal{E}$为背景了，这自然就不在$\mathcal{E}$为背景的GQL下构成一个半群了，从物理上我们也不希望这种情况发生。[^45]

这个时候就需要定义$\boxtimes_\mathcal{E}$，满足：

$$
\mathcal{E}=(\mathcal{E}\boxtimes\mathcal{E})
$$

<p>
那么原先我们定义的$\boxtimes$其实是$\boxtimes_\mathcal{B_0}$的特殊情况，$\mathcal{B}_0\boxtimes \mathcal{B}_0=\mathcal{B}_0$。新的$\boxtimes\mathcal{E}$就生成了$\mathcal{E}$为背景（对称性）的GQL的幺半群，幺元为$\mathcal{E}$。
</p>

这个具体定义还是蛮复杂的，从物理上看这其实是在要求一个对称性自发破缺机制，让两个$\mathcal{E}$在堆叠时从$\mathcal{E}\boxtimes\mathcal{E}$破缺成$\mathcal{E}$，这种机制就是在两层之间加微扰，来破坏对称性[^46]。而$\boxtimes_\mathcal{E}$的引入就是这种对称性破缺的数学严格化，允许在UBFC中进行任意子凝聚。现在我们来大致描绘一下这个定义是如何给出的[^47]。

对于一个UBFC$\mathcal{C}$，我们可以定义上面的可凝聚代数$A$，其包含三个资料：

- $A\in\mathsf{Ob}(\mathcal{C})$
- $m:A\otimes A\to A$
- $\eta: \mathbb{1}\to A$

满足如下的要求：

$$
\begin{gathered}
m\circ(m\otimes\mathrm{id}_A)=m\circ(\mathrm{id}_A\otimes m),\quad m\circ(\eta\otimes\mathrm{id}_A)=\mathrm{id}_A=m\circ(\mathrm{id}_A\otimes\eta)\\

m m^\dagger =\mathrm{id}_A\\

\mathrm{Hom}(\mathbb{1}.A)=\mathbb{C}\\

m c_{A,A} = m

\end{gathered}
$$

在上面可以定义$\mathcal{C}$中的左模，包含下面两个资料：

- $X\in\mathsf{Ob}(\mathcal{C})$
- $\rho:A\otimes X\to X$

满足下面的要求：

$$
\begin{aligned}&\rho(\mathrm{id}_{A}\otimes\rho)=\rho(m\otimes\mathrm{id}_{M}),\\&\rho(\eta\otimes\mathrm{id}_{M})=\mathrm{id}_{M}.\end{aligned}
$$

再加下面这一条就称为local模：

$$
\rho c_{M,A}c_{A,M}=\rho
$$

$A$在$\mathcal{C}$上的所有local模构成了一个UBFC，记作<b>$\mathcal{C}_A^0$</b>。

对于SFC，可以定义下面的condensable algebra：[^48]

$$
L_{\mathcal{E}}\simeq \bigoplus_{i\in \mathrm{Irr}(\mathcal{C})} i\boxtimes i^*
$$

由此便可以定义$\boxtimes_\mathcal{E}$：

$$
\mathcal{C}\boxtimes_{\mathcal{E}}\mathcal{D}:=(\mathcal{C}\boxtimes\mathcal{D})_{L_{\varepsilon}}^{0}
$$

这个定义的好处是模扩张可以分开计算再相乘：

$$
\mathcal{M}_{\mathcal{C}}\boxtimes_{\mathcal{E}}\mathcal{M}_{\mathcal{D}}:=(\mathcal{M}_{\mathcal{C}}\boxtimes\mathcal{M}_{\mathcal{D}})_{L_{\mathcal{E}}}^{0}
$$

### 二维GQL的分类
有了前面的准备工作，我们可以完整叙述二维GQL的分类了：

> 二维anomaly-free对称性 GQL with symmetry $\mathcal{E}$ 由 $(\mathcal{C},\mathcal{M},c)$完全描述

<p>
问题在于如何计算UBFC$\mathcal{C}$以及上面的所有模扩张$\mathcal{M}\in\mathcal{M}_{\mathrm{ext]}}(\mathcal{C})$。首先$\mathcal{E}$决定辫幺半结构$\tilde{N}_c^{ab},\tilde{S}_a$，其嵌入（或者说是其子集）$\mathcal{C}$的资料$N_k^{ij},S_i$，其又可以嵌入到$\mathcal{N}_{K}^{IJ},\mathcal{S}_{I}$。中心荷是相对而言单独的东西，而且模扩张本身可以确定到$\mod 8$。
</p>

由UMTC的性质我们可以写出$N,s$满足的一系列方程，比如Verlinde公式之类的，然后解这一堆非线性方程就可以得到一系列不同的$N,s$，如果$\mathcal{C}$的data存在但是模扩张$\mathcal{M}$的data不存在就说明模扩张本身不存在，说明体系是有对称性反常的，或者说no-on-site symmetry。一组$N,s$的data就说明一类GQL，而范畴的等价也就是GQL等价相当于要求$N,s$这组data只相差上下标的permutation。这样我们便可以得到GQL的分类表。

但是这建立在$N,s$这两个data完全描述UMTC的基础上，特别是$\mathrm{UMTC}_{\mathcal{E}}$还只是个UBFC，没有modular。实际上，最先开始分类的工作是基于$N,s$两个data以及$F,R$矩阵，加上这两个额外的data确实描述了整个UMTC。直接用$N,s$进行分类相对而言计算上简单不少，但是确实会造成GQL态在UBFC的简并，但是神奇的是，这种简并在模扩张后的UMTC层面上消除了，所以有理由相信$\mathcal{N},\mathcal{S}$就完全描述了GQL，当然还有中心荷描述edge mode。

不过对于SFC的描述就没这么幸运了，完全可能存在两个SFC对应同样的融合规则，所以上面的唯一性就应当看作是对某个融合规则唯一，而不能看作是对具体的某个SFC唯一，也就是无法看作是对给定对称群的唯一性。只有当对称群对应的SFC可以完全对应某个融合规则时，这一论述才是正确的。Abel群满足这一点，有限群里面单群满足这一点[^49]。

### SPT态的分类
上面相当于是对最一般的SET态的描述，其中有一类非常重要的情况就是SPT物态。这类物态的特点就是可逆，但是和$\mathsf{iTO}$不同，他是with symmetry的可逆物态。也就是说我们需要考虑可逆的GQL的分类，而可逆关键一点在于只有local的激发，所以应当有$\mathcal{C}=\mathcal{E}$。也就是说，对于invertible bosonic GQL，对称性为$\mathsf{Rep(G)}$，所以我们需要考虑$\mathsf{Rep(G)}$的模扩张。剩下的就是中心荷，这个模扩张本身的加性中心荷始终是0，而可逆玻色GQL和SPT物态之间其实有下面的关系：

$$
\begin{aligned}&\{\text{invertible gapped quantum liquid phases}\}\\&=\{\text{invertible topological orders}\}\times\{\mathrm{SPT~phases}\}\end{aligned}
$$

而我们又知道$\mathsf{iTO}_B=\mathbb{Z}$，所以SPT物态和可逆玻色GQL之间应当存在一一对应的关系。或者说和$\mathsf{Rep(G)}$的模扩张存在一一对应的关系，而$c$就只是简单的用于告诉你有多少个$E_8$的堆叠。那么我们考虑$c=0$的情况也就对bosonic SPT序进行了分类，而数学上告诉你：

$$
\mathcal{M}_{\mathrm{ext}}(\mathsf{Rep}(G))=\mathcal{H}^3(G,U(1))
$$

所以你可以用代数拓扑的方式分类SPT，绝缘体更是一类特殊的SPT，所以也可以用于分类拓扑绝缘体！而历史上的顺序是反过来的，这部分可以更多的去看Kitaev的一系列工作。而这也间接说明了范畴论方法的正确性。

如果考虑without symmrty，也就是$\mathcal{E}=\mathsf{Hilb}$，这个时候可逆玻色GQL降级为$\mathsf{iTO}_B$，而模扩张给出的正是$\mathsf{iTO}_F$

fermionic的情况要稍微复杂一些，虽然可逆费米GQL也是类似由$\mathsf{sRep(G^f)}$的模扩张以及手征中心荷描述。这个手征中心荷对应的不是$E_8$的堆叠，也不是$p+\mathrm{i}p$的堆叠，而是$\nu =8$ IQH态（对应$K$矩阵为$8\times 8$单位矩阵）的堆叠，其中心荷为$8$。而$\mathsf{sRep(G^f)}$的模扩张本身具有非0中心荷，堆叠的IQH态的数目应当由下式确定：

$$
\frac{c-\mod(c,8)}{8}
$$

不过其实有下面关于GQL堆叠的等式：

$$
(p+\mathrm{i} p)^{\boxtimes_{\mathcal{F}_0}16} \simeq (\nu=8\mathrm{~IQH})\simeq E_8\boxtimes_{\mathcal{B}_0}\mathcal{F}_0
$$

从中心荷也能稍微看出这个等式的正确性。fermionic GQL稍微复杂的点就在于并不能类似玻色情况，其实下面的是不等式：

$$
\begin{aligned}&\{\text{invertible fermionic symmetric GQLs}\}\\&\neq\{\text{fermionic SPT states}\}\times\{\text{layers of }p+\mathrm{i}p\mathrm{~states}\}\end{aligned}
$$

也就是说不能简单看作是SPT态和$\mathsf{iTO}_F$的堆叠，但是**依旧可以认为$c=0$的时候对应fermionic SPT态的分类**，只不过不能对一般的可逆费米GQL认为是堆叠一些$\mathsf{iTO}_F$的argue。不过如果体系对称性可以把费米部分单独拎出来，或者说<b>$G^f=G_b\times\mathbb{Z}_2^f$</b>，那么就可以有：

$$
\begin{aligned}&\{\text{invertible fermionic symmetric GQLs}\}\\&=\{\text{fermionic SPT states}\}\times\{\text{layers of }p+\mathrm{i}p\mathrm{~states}\}\end{aligned}
$$

<p>
同$\mathsf{iTO}_B$的分类，$\mathsf{iTO}_F$的分类也可以由$\mathcal{E}=\mathcal{F}_0=\mathsf{sRep(\mathbb{Z}_2^f)}\simeq\mathsf{sVec}$给出，其有16个模扩张，中心荷从$0\sim 15/2$。而其中$c=0$也就是without symmetry fermionic SPT的分类，对应的就唯一一个，其实际上就是$\mathcal{F}_0$本身，所以fermionic SPT只有在with symmetry的时候才是non-trivial的，而这恰恰是SPT序的本质，只有当对称性完全考虑了，才是non-trivial的，同理，bosonic SPT也是在without symmetry时分类trivial。
</p>

<p>
但是上面又出来一个矛盾，看似根据范畴论的结果$\mathsf{iTO}_B=\mathbb{Z}_{16}$，而不是仅仅由$p+\mathrm{i}p$超导体生成$\mathbb{Z}$。愿意就在于$\mathcal{M}_{\mathrm{ext}}(\mathsf{sRep(\mathbb{Z}_2^f)})$其实分类的严格来说不是$\mathsf{iTO}_F$，而是$\mathsf{iTO}_F/E_8$。也就是说在模扩张范畴的意义下，两个相差$E_8$堆叠的$\mathsf{iTO}_F$被看作是同一个了。而这16种不同的扩张可以通过不同层数的$p+\mathrm{i}p$堆叠来构成，当叠到$16$层时，得到$\mathcal{F}_0\boxtimes_{\mathcal{F}_0}E_8$，但是根据前面的说法，这被模扩张看成了$\mathcal{F}_0$平凡iTO，就回到没有$p+\mathrm{i}p$堆叠的情况了。
</p>

这也就是为什么我们得到$\mathbb{Z}_{16}$的原因。这正好对应Kitaev 16-fold way。[^50]

另外，原始文献中有更多关于分类的细节，而且文老师的文章写的非常易懂，表格也非常多，特别是最后举了非常多分类对应的GQL具体实现的例子，感兴趣的可以去看原始文献。

# 参考

[^1]: 后面拓扑序用`mathsf`字体，上面的范畴用`mathcal`字体，还有一个花体`mathscr`也很常用
[^2]: 当然，只是对象的一部分
[^3]: 这一点不难验证，注意我又偷了个懒，这个0元素的下标我省略了，这三个0应当是不同态射空间的0。
[^4]: 范畴论里面同构一次的处理很暧昧，有的时候我们认为两个对象同构就当作完全没区别了，就跟群同构一样，后面还会遇到很多次。但是有的时候两个同构的对象又必须仔细区分。
[^5]: 这里第一次遇到一个黑话“典范”，其实意思就是说这个不光差一个同构，连差的是什么同构我们都是知道的，也就是说连对象之间的同构本身也是唯一确定的。
[^6]: 当然，有的也不是只在二维拓扑序中有，后面都会注明
[^7]: 排除掉$x\oplus\mathbb{0}$平凡情况
[^8]: 前面强调过拓扑激发是一堆具体缺陷的等价类，所以应该对应一堆等价的希尔伯特空间，这里我们看作是讨论等价类中的一个具体实例
[^9]: 当然，什么是“近”也依赖于逆把什么当作local
[^10]: 似乎物理论文一般默认这一点，我找到了[math stackexcange上的一个讨论](https://math.stackexchange.com/questions/805019/distributivity-of-tensor-products-over-direct-sums-for-group-representations)
[^11]: 这里有个小练习，读者试着画一下表示自然性的交换图表，并从物理上解释这一点。
[^12]: 我觉得这是一个非常好的追图联系（不会有人蛇年想追蛇引理吧），另外原谅我偷了李教主书上的图，我们的对象用的小写字母，他用的大写，其它约定都是一样的
[^13]: 用到了比较新的范畴论结果 https://arxiv.org/abs/1910.11353
[^14]: 当然你也可以反过来看，这都无所谓，范畴等价
[^15]: 这里的$1\in\mathbb{C}$是复数里面的$1$，不要理解为幺元了，虽然我喜欢偷懒，但是这种重要的懒不能偷
[^16]: 为了书写方便，我们略去了结合约束，这很容易补回来。后面有些式子完整写下结合约束之后会非常长，也会不加说明的用这一约定，反正最后计算很容易补回来。
[^17]: 相信你读到这里已经发现了，我经常混用元素的等价和同构，无所谓，范畴论最不喜欢用的就是严格相等。
[^18]: 这里注意顺序，求dagger物理上看是时间反演，标记左右对偶的箭头不仅要变，开口也要变，所以产生和湮灭算符角色互换
[^19]: 注意，刚性范畴上可以定义不同的spherical结构，最终会导致不同的quantum dimension of object，但是整个范畴的quantum dimension不随spherical结构改变。
[^20]: 到了这里你应当明白，范畴论中见过的英文单词，代入到熟知的代数结构中，就是一样的意思
[^21]: 我在https://q.uiver.app/ 上画交换图时似乎字体不支持$\mathbb{1}$，所以我改成了$\mathbf{1}$
[^22]: 注意，后面对幺正范畴的定义并不需要瞬子幺正，只需要与幺半结构相容，而比如辫结构，后面会提到其余幺正范畴的相容性条件就是编织瞬子幺正。注意这些定义subtle的地方。
[^23]: 请原谅我再次借用了李教主书里面的图，这交换图实在是画的太好看了，老规矩，我们的对象用的是小写字母，另外恒等态射和编织态射的下标没有写出来，肩头上空无一物表示结合约束，也没有画出来
[^24]: [见ncatlab上的解释](https://ncatlab.org/nlab/show/braided+monoidal+natural+transformation)
[^25]: 从物理上世界线同伦也可以看出来，不过没那么方便
[^26]: 严格来说还需要左右两边插入幺约束，中间插入结合约束，这里省略了
[^27]: 孔老师讲义这里的定义有笔误，推了半天都没推过去，多亏了deepseek和chatgpt
[^28]: 容我啰嗦一句，范畴论中不少东西的定义都是差一个同构的，特别是前面结合约束和幺约束都相当于是把结合律和幺元定义到差一个同构，除非我们考虑的是严格幺半范畴，才能直接划等号，但是我们忽略掉这些细节不会影响最终结果，而且还会为计算带来便利。
[^29]: zig-zag关系可以用三角形公理验证，验证时略去所有的结合约束和幺约束会容易不少
[^30]: 不难发现他们在物理上是相同的算符，只是作用于不同的对象有不同的数学诠释
[^31]: 量子力学天然会导致投影表示的发生，一般情况下不用考虑是因为中心扩张trivial，不熟悉的同学建议读一读Weinberg第一卷第二章。
[^32]: 上一篇开头我们构造的平凡拓扑序实际上是玻色平凡拓扑序，同样的你也可以构造费米平凡拓扑序，由于我们分类时是fermionic和bosonic分开处理的，所以平凡拓扑序也要分开看。
[^33]: 建议直接读前面两篇文献，第三篇文献是文老师的review，对bosonic的情况写的详细一些，最后一篇年代比较久，感觉参考意义不大，前面两篇文献把分类已经说的很清楚了
[^34]: 同时我们也不会给出分类表，因为实在是太复杂了，而且原始文献列的非常好，可以去看看，这些都是技术性的细节。
[^35]: 这对应拓扑超导体（似乎是）
[^36]: 未给出的结合约束说明时trivial的，也就是线性空间上的恒等映射，后面对于交换约束也是如此约定
[^37]: 注意这里是对bosonic拓扑序的描述，最后在介绍二维拓扑序的分类时会稍微有些变化
[^38]: 注意我们避免了使用invertible这一词语，因为在后面这会指代另外的性质，请注意别搞混
[^39]: 有点像李代数里面的Killing form
[^40]: 当然,TQFT上本身就有UMTC结构
[^41]: 或许对于我这种臭做高能的，更兴奋的结果来自于Witten用这玩意儿去推Jones多项式
[^42]: 这里把gauge看作是动词，而不是形容词
[^43]: 很不幸文献上手征中心荷和加性中心荷的字母重合了，他们之间也确实有很大的联系，后面字母$c$统一用于手征中心荷
[^44]: 值得停下来辨析一下名词，拓扑序我们都值without symmetry的情况，也就是<b>$\mathcal{E}=\mathcal{B}_0$</b>或者<b>$\mathcal{E}=\mathcal{F}_0$</b>
[^45]:至少在分类时我们对每个$\mathcal{E}$背景下的GQL分开考虑，当然你可以强行用$\boxtimes$去生成背景叠加的GQL。
[^46]: 我还没太搞懂里面的物理具体过程，但是似乎对于我们的数学上的描述无关紧要，而且物理图像还是比较清晰的
[^47]: 抱歉，本人对这些过于技术的东西也不太感冒，所以很多细节直接略过
[^48]: 说过这里的描述是相当sketch的，local模如何构成UBFC以及condensable algebra的构造都没细说
[^49]: 单群是个非常有意思的东西，任何有限群都可以用合成列进行分解，每一步的商群都是单群。而单群是可以完全分类的，分类工作直到2008年才完全结束。
[^50]: 我觉得这部分如果对凝聚态拓扑物相工作有更多了解读起来会更有感触，对于我来说，我属于半路出家，所以对Kitaev 16-fold way以及SPT的分类等重要工作都没多少了解。而且对凝聚态的一些经典拓扑物态具体实现也了解甚少。仅仅只是知道一些范畴论的相关内容，所以这部分虽然从数学上我比较好理解，但是对于真正和物理的联系我理解的还比较浅，所以建议在先阅读一些几本拓扑物态分类的review之后再来阅读，或许以后有时间我会加在这一篇里面说。
[^51]: 后面备课的时候才发现这里写的稍微有些不对劲，首先我犹豫混用了孔老师讲义和文献中的记号，这里$f$指的是前文中的$z$，也就是费米宇称算符。其次这里想说的是平凡拓扑序按理说应该由对称群$G$的表示生成，如果是费米体系就算是平凡拓扑序也应当自然拥有$\mathbb{Z}/2\mathbb{Z}$对称性。然后费米体系由超表示描述，因为要多个交换反对称，而这四类表示范畴正好就是所有的SFC，所以SFC描述平凡拓扑序。后面讲一般拓扑序的分类就是要在平凡拓扑序基础上加入非平凡拓扑缺陷的结构。