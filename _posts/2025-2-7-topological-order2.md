---
layout: post
title:  拓扑序的范畴论方法——二维拓扑序
categories: [physics, math]
tags: [cmt, math-ph]
---

上一篇主要是介绍了Kitaev模型并给出了拓扑序的定义，这一篇主要研究二维拓扑序范畴的各种性质，最终目的是说明二维拓扑序对应的范畴是一个UMTC（Unitary Modular Tensor Category）。在介绍时会比较多得联系上一篇所讲的模型。另外，从本篇开始由于大量涉及到范畴论，所以不可避免使用交换图，我实在懒得用tikz逐一重新绘制，所以直接选择插入图片的方式。

本篇主要内容如下：



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
> - 一个函子$\otimes:\mathbb{C}\times\mathbb{C}\to\mathbb{C}$
> - 一个独一无二的幺元$\mathbb{1}\in\mathcal{C}$
> - <p>一个$\otimes\circ(\otimes\times\mathrm{id}_{\mathbb{C}})\Rightarrow\otimes\circ(\mathrm{id}_{\mathbb{C}}\times\otimes)$的自然同构$\{\alpha_{x,y,z}\}$，称为结合约束</p>
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

然后是幺半等价，范畴间的等价就是存在一对互为拟逆的函子，所以我们只需要说明什么是幺半函子：

> 幺半函子包含两个资料：
> - 一个函子$F:\mathcal{C}\to\mathcal{D}$
> - 一个$F(\cdot)\otimes F(\cdot)\to F(\cdot\otimes\cdot)$自然同构$\{F^2_{x,y}\}$
> - <p>一个同构$F^0: \mathbb{1}_\mathcal{D}\to F(\mathbb{1}_\mathcal{C})$</p>
> 而且满足下面的图表交换性：
> ![F2](\img\posts\topological_order\26.png)
> ![F0](\img\posts\topological_order\27.png)

这个在后面讨论体边对应的时候还会用到。

<p>
一个比较深刻但是并不是太“亲民”的张量范畴的例子来源于公理化拓扑量子场论，可以定义下面的配边范畴。考虑$n-1$维实紧致闭可定向流形，且包括空集，一起作为$n$-$\mathsf{Cob}$中的对象，而对象$X$的定向倒转显然也是对象，记作$X^*$。两个对象$X,Y$之间的态射由配边操作的等价类给出，配边操作时髦点的说法就是$n$维带边定向流形$W$配上同构$\partial W\to X\sqcup Y^*$。比较土的说法就是把两个流形作为边，绘制出以他们为边的流形的不同方式，比如$n=2$，有下面的裤管图（从左往右画）：
</p>

![裤子](\img\posts\topological_order\28.png)

裤子就是$W$，给出了左边的$S^1$到右边的$S^1\sqcup S^1$的态射，从量子场论上看，配边的操作就是给定初末态的路径积分，得到对应的配分函数。态射的合成也不难想象，从物理上想，就是积分加起来而已，再积一段，也就是把裤管缝起来（保定向的缝合）：

![缝裤子](\img\posts\topological_order\29.png)

再用路径积分的想法，恒等态射就是世界面trivial，对应柱体$W=X\times[0,1]$。张量范畴结构由$\sqcup$给出，幺元是空集。

我一直在试图回避什么是local？只是简单的告诉你我们考虑的model在不同的尺度定义下会得到一样的数学结构，我们现在第一次直面这个问题。还是讨论幺半范畴，两个点缺陷隔得很近的时候被tensor product为一个点缺陷，这是幺半范畴的基石，而关键在于什么样才叫隔得很近？现在假设$x$在$\xi$附近，$y$在$\eta$附近，那么我们把这个看作是一种local，对应的幺半范畴由$\otimes_{(\xi,\eta)}$给出，前面我们相当于在说$\otimes$和$\xi,\eta$没关系，但是真实世界往往是有关系。也就是说local在不同点位上，会给出不同的幺半范畴结构。假设现在我们有绝热路径$\gamma$，可以把$x,y$这两种缺陷local的点位移动到$x',y'$。这个绝热操作就定义了一个$T^\gamma_{x,y}:x\otimes_{(\xi,\eta)}y\to x\otimes_{(\xi',\eta')}y$的可逆（因为绝热）映射。这其实是函子$\otimes_{(\xi,\eta)}\to\otimes_{(\xi',\eta')}$的自然同构（遍历所有的$x,y$）。每一个绝热路径都可以定义一个自然同构，从物理上看，如果两个绝热路径同伦，那么自然同构是相等的。虽然我们还是要对不同点位考虑不同的幺半结构，但是这一点还是大大减少了需要考虑的点位的幺半范畴的结构个数。需要高阶范畴的理论才能完整描述。不过现在先让我们局限为简单的情况。

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

$\epsilon$只是个无关紧要的归一化常数。由此可见任何一个3-cocycle都对应一个幺半范畴结构。

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
> -$f^\dagger \circ f =\mathcal{0}\iff f=\mathbb{0}$
> 
> 满足这些特点的我们称之为幺正范畴，等价于$C^*$范畴，而且幺正结构自然诱导半单

类似量子力学，态射的幺正性定义为：$f^\dagger = f^{-1}$。显然任何的拓扑序都允许时间反演的存在，都应该自然带有一个幺正结构，而这一幺正结构应当和幺半结构是相容的，比如我们考虑下面的两幅图：

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

## 融合范畴

## 辫结构
前面我们介绍过对于实际的拓扑序，应该容许不同的点位上可以给出不同的tensor product。对于一维情况，可以证明确实就只有一种$\otimes$[^13]。对于二维情况，有两种$\otimes_{1},\otimes_{2}$，而且他们还满足下面的相容性条件：

$$
(x\otimes_2 x')\otimes_1 (y\otimes_2) \simeq (x\otimes_1 y) \otimes_2 (x'\otimes_2 y')
$$

上面我们取$y=x'=\mathbb{1}$得到：$x\otimes_1 y'\simeq x\otimes_2 y'$，然后取$y'=x=\mathbb{1}$，有$x'\otimes_1 y\simeq y\otimes_2 x'$，做一些变量替换后不难发现这说明“

$$
x\otimes y \simeq y\otimes x,\quad \otimes = \otimes_1
$$

所以我们把$\otimes_1$看作是给出幺半结构，而$\otimes_2$则是给出了这个幺半范畴内的某种交换性[^14]。因为对于一般的幺半范畴我们并不要求乘法可交换（在同构的意义下），而本节要讲的辫结构就是在幺半范畴的基础上加了个**交换约束**。从物理上看，辫结构是涌现出来的，是伴随幺半结构出来的！这是个非常有意思的现象，而且这个现象是二维才有的！



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
[^9]: 当然，什么是“近”也依赖于逆把什么当作local
[^10]: 似乎物理论文一般默认这一点，我找到了[math stackexcange上的一个讨论](https://math.stackexchange.com/questions/805019/distributivity-of-tensor-products-over-direct-sums-for-group-representations)
[^11]: 这里有个小练习，读者试着画一下表示自然性的交换图表，并从物理上解释这一点。
[^12]: 我觉得这是一个非常好的追图联系（不会有人蛇年想追蛇引理吧），另外原谅我偷了李教主书上的图，我们的对象用的小写字母，他用的大写，其它约定都是一样的
[^13]: 用到了比较新的范畴论结果
[^14]: 当然你也可以反过来看，这都无所谓，范畴等价
[^15]: 这里的$1\in\mathbb{C}$是复数里面的$1$，不要理解为幺元了，虽然我喜欢偷懒，但是这种重要的懒不能偷