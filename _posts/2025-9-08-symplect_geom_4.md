---
layout: post
title:  辛几何入门——第四章 各种各样的辛流形
categories: [辛几何翻訳]
tags: [math,physics]
comments: true
---
本文章是「数物系のためのシンプレクティック幾何学入門」一书翻译系列的第四篇，其余章节文章链接如下：

[辛几何入门——第五章 动量映射与辛商]({{ site.website }}/articles/2025-10/symplect_geom_5)


[辛几何入门——第四章 各种各样的辛流形]({{ site.website }}/articles/2025-09/symplect_geom_4)


[辛几何入门——第三章 G结构的几何学]({{ site.website }}/articles/2025-09/symplect_geom_3)


[辛几何入门——第二章分析力学]({{ site.website }}/articles/2025-08/symplect_geom_2)


[辛几何入门——第一章 序章]({{ site.website }}/articles/2025-08/symplect_geom_1)

<!--more-->

- [各种各样的辛流形](#各种各样的辛流形)
  - [4.1 余切丛](#41-余切丛)
  - [4.2 Stein 流形](#42-stein-流形)
  - [4.3 射影流形](#43-射影流形)
  - [4.4 余伴随轨道](#44-余伴随轨道)
  - [4.5 Liouville 区域](#45-liouville-区域)
  - [4.6 切触流形](#46-切触流形)
  - [注记](#注记)


# 各种各样的辛流形

辛流形大致可分为恰当辛流形和紧辛流形两类，它们各有优缺点。虽然也存在既不恰当也不紧的辛流形，但它们的处理更为困难。作为恰当辛流形的例子，可以举出余切丛和 Stein 流形；作为紧辛流形的例子，可以举出射影流形。此外，作为与表示论等诸多领域相关的重要辛流形，我们将引入余伴随轨道。之后，在介绍结合了恰当辛流形和紧辛流形“优点”的 Liouville 区域后，我们将提及在其边界上出现的切触流形的概念。

## 4.1 余切丛

辛流形 $(M, \omega)$ 被称为**恰当** (exact) 的，是指存在某个 1 次微分形式 $\theta$ 使得 $\omega = d\theta$ 成立。这个 $\theta$ 被称为 **Liouville 形式** (Liouville 1-form)。关于辛形式，将与 Liouville 形式对偶的向量场 $Z$ 称为 **Liouville 向量场** (Liouville vector field)；

$$
\iota_Z\omega=\theta
$$

恰当辛流形最重要且经典的例子是微分流形 $N$ 的**余切丛** $T^\*N$。在 $T^\*N$ 上，对于 $X \in T\_{(q,p)}(T^\*N)$，按下式定义 1 次微分形式 $\theta$：

$$
\theta(X) = \langle p, \pi_*X \rangle \tag{4.1.2}
$$

这里 $\pi: T^\*N \to N$ 是自然投影，且 $q \in N$, $p \in \pi^{-1}(q) = T\_q^\*N$，(4.1.2) 的右边是 $p \in T\_q^\*N$ 与 $\pi\_\*X \in T\_pN$ 的配对。取 $N$ 的局部坐标为 $(q\_1, \ldots, q\_n)$，并设该坐标在纤维 $T\_q^\*N$ 上诱导的坐标为 $(p\_1, \ldots, p\_n)$[^25]，则有

$$
\theta = \sum_{i=1}^n p_i dq_i \tag{4.1.3}
$$

因此，

$$
d\theta = \sum_{i=1}^n dp_i \wedge dq_i \tag{4.1.4}
$$

从这个表达式可知 $d\theta$ 是非退化的。此外，由于 $d\theta$ 是恰当形式，所以它特别是闭形式。

## 4.2 Stein 流形

作为不限于余切丛的恰当辛流形的重要例子，比如 Stein 流形。

**定义 4.2.1.** 复流形 $X$ 上的光滑函数 $S: X \to \mathbb{R}$，当其 **Levi 形式** (Levi form) $\lambda = \sqrt{-1}\partial\overline{\partial}S$ 正定时，称为**多重次调和的** (plurisubharmonic)。

注意：若令 $d^cS := dS \circ J$，则有 $\sqrt{-1}\partial\overline{\partial}S = -\frac12 dd^cS$。[^1]

> 注意到
> 
> $$
> \begin{gathered}
\frac{\partial}{\partial z_j}=\frac{1}{2}{\left(\frac{\partial}{\partial x_j}-i\frac{\partial}{\partial y_j}\right)},\quad\frac{\partial}{\partial\bar{z_j}}=\frac{1}{2}{\left(\frac{\partial}{\partial x_j}+i\frac{\partial}{\partial y_j}\right)}\\
J{\left(\frac{\partial}{\partial x_j}\right)}=\frac{\partial}{\partial y_j},\quad J{\left(\frac{\partial}{\partial y_j}\right)}=-\frac{\partial}{\partial x_j}
\end{gathered}
> $$
> 
> 所以有:
>
> $$
> \begin{aligned}
&J(\frac{\partial}{\partial z})=i\frac{\partial}{\partial z},\quad J(\frac{\partial}{\partial \bar z})=-i\frac{\partial}{\partial \bar z}\\
\Rightarrow & dz\circ J = i dz,\quad d\bar z\circ J= -id\bar z
\end{aligned}
> $$
> 
> 这也就意味着:
>
> $$
> d^c = d\circ J = (\partial+\bar\partial)\circ J = i (\partial-\bar\partial)
> $$
> 
> 进行如下推导，注意到$\partial^2={\bar\partial}^2=0$，而且$\partial\bar\partial = \bar\partial \partial$：
>
> $$
> \begin{aligned}
dd^c &= i(\partial+\bar\partial) (\partial-\bar\partial)\\
&=i(-\partial\bar\partial+\bar\partial\partial)=-2i\partial\bar\partial
\end{aligned}
> $$

**定义 4.2.2.** 连续函数 $S: X \to \mathbb{R}$，若对于任意 $K \in \mathbb{R}$，其原像 $S^{-1}((-\infty, K])$ 是紧的，则称为**穷竭的** (exhaustive)。

根据 Levi 问题的肯定解决[^2]，复流形拥有穷竭的多重次调和函数是其成为 Stein 流形 (Stein manifold) 的充要条件。Stein 流形的其他特征包括它是仿射空间 $\mathbb{C}^m$ 的闭复子流形。

根据 Nash-Tognoli 定理（例如参见 [^3]），对于任意 $n$ 维微分流形 $N$，存在某个自然数 $l$ 和 $l$ 个具有 $2n+1$ 个变量的实系数多项式 $f\_1, \ldots, f\_l \in \mathbb{R}[x\_1, \ldots, x\_{2n+1}]$，使得由这些多项式定义的 $\mathbb{R}^{2n+1}$ 的代数子集

$$
U_{\mathbb{R}} := \{x \in \mathbb{R}^{2n+1} | f_1(x) = \cdots = f_l(x) = 0\} \tag{4.2.1}
$$

与 $N$ 微分同胚。这些定义多项式所定义的 $\mathbb{C}^{2n+1}$ 的子流形 (subvariety)

$$
U := \{x \in \mathbb{C}^{2n+1} | f_1(x) = \cdots = f_l(x) = 0\} \tag{4.2.2}
$$

通常在 $\mathbb{C}^{2n+1} \setminus \mathbb{R}^{2n+1}$ 中具有奇点，但奇异集合 $U^{\text{sing}} \subset U$ 可以作为由适当的实多项式 $g\_1, \ldots, g\_m$ 定义的 $\mathbb{C}^{2n+1}$ 的子流形。此时，

$$
M=\{(\boldsymbol{x},y)\in U\times\mathbb{C}\mid(g_1(\boldsymbol{x})^2+\cdots+g_m(\boldsymbol{x})^2)y=1\}\tag{4.2.3}
$$

与 $U \setminus U^{\text{sing}}$ 同构，且 $M\_{\mathbb{R}} \cong U\_{\mathbb{R}} \cong N$[^4]。由于 $M$ 是 $\mathbb{C}^{2n+1}$ 的闭子流形，所以它是 Stein 流形[^5]，并且包含 $N$ 作为其 Lagrange 子流形。因此，根据定理 3.2.4，可知 $M$ 包含 $T^\*N$ 作为其开子流形。[^6]

## 4.3 射影流形

在复仿射空间 $\mathbb{C}^{n+1}$ 上，代数环面 $\mathbb{C}^{\times}$ 自然地作用如下：

$$
\mathbb{C}^{\times} \ni \alpha : x = (x_1, \ldots, x_{n+1}) \mapsto \alpha \cdot x = (\alpha x_1, \ldots, \alpha x_{n+1}). \tag{4.3.1}
$$

该作用在原点 $0 \in \mathbb{C}^{n+1}$ 之外是自由的[^7]，并且商空间 $(\mathbb{C}^{n+1} \setminus 0)/\mathbb{C}^{\times}$ 上自然地具有复流形结构。这被称为**射影空间** (projective space)，用 $\mathbb{P}^n$ 表示。能作为闭子流形全纯嵌入到射影空间中的复流形称为**射影流形** (projective manifold)。射影流形是 Stein 流形的紧致类似物。根据 Chow 定理[^8]，射影空间的任何复子流形都是代数簇[^9]，并且已知可以表示为有限个齐次多项式 $f\_1, \ldots, f\_k \in \mathbb{C}[x\_1, \ldots, x\_{n+1}]$ 的公共零点集。

射影空间至少有三种表示，分别反映了射影空间的三个不同侧面。第一种表示是上面列举的仿射空间通过环面作用的商：

$$
\mathbb{P}^n = (\mathbb{C}^{n+1} \setminus \{0\})/\mathbb{C}^{\times} \tag{4.3.2}
$$

它强调了射影空间作为环簇的侧面。关于环簇将在第 8 章更详细地讨论。

第二种表示是复李群（或代数群）的抛物子群[^10]的商：

$$
\mathbb{P}^n = G_{\mathbb{C}}/P \tag{4.3.3}
$$

这里 $G\_{\mathbb{C}}$ 是 $GL\_{n+1}(\mathbb{C})$ （或者说$G=SL\_{n+1}(\mathbb{C})$[^16]），而 $P \subset G\_{\mathbb{C}}$ 是由形如[^15]

$$
P =
\left\{
\begin{pmatrix}
A & B \\
0 & D
\end{pmatrix}
\in G_\mathbb{C}
\middle|
A \in GL_1(\mathbb{C}),  B \in \text{Mat}_{1 \times n}(\mathbb{C}),  D \in GL_n(\mathbb{C})
\right\} \tag{4.3.4}
$$

的分块上三角矩阵组成的子群。这强调了射影空间作为复流形（或代数簇）的侧面。

第三种表示是 4.4 节将要叙述的余伴随轨道：

$$
\mathbb{P}^n = \mathcal{O}_\lambda \tag{4.3.5}
$$

它强调了射影空间作为辛流形的侧面。这里，$G = U(n+1)$ 是酉群，$\mathfrak{g} = \\{\xi \in \text{Mat}\_{\mathbb{C}}(n+1) \| \xi^\* = -\xi\\}$ 是其李代数，且 $\lambda = \text{diag}(\lambda, 0, \ldots, 0) \in \mathfrak{g}^\*$。这里我们通过内积

$$
\mathfrak{g} \times \mathfrak{g} \to \mathbb{R}, \quad (X, Y) \mapsto \operatorname{tr}(XY) \tag{4.3.6}
$$

将 $\mathfrak{g}$ 与 $\mathfrak{g}^\*$ 等同。此内积在伴随作用下是不变的：

$$
\begin{align}
\operatorname{tr}(\operatorname{ad}_Z(X)Y) &= \operatorname{tr}([Z, X]Y) \tag{4.3.7} \\
&= \operatorname{tr}(ZXY) - \operatorname{tr}(XZY) \tag{4.3.8} \\
&= \operatorname{tr}(XYZ) - \operatorname{tr}(XZY) \tag{4.3.9} \\
&= -\operatorname{tr}(X[Z, Y]) \tag{4.3.10} \\
&= -\operatorname{tr}(X \operatorname{ad}_Z(Y)) \tag{4.3.11}
\end{align}
$$

因此，通过这个等同，余伴随作用变为伴随作用（参见 (4.4.7)）。由于斜 Hermite 矩阵乘以 $\sqrt{-1}$ 后变为 Hermite 矩阵，故斜 Hermite 矩阵可以被酉矩阵对角化，因此 $\mathcal{O}\_\lambda$ 是由所有特征值为 $(\lambda, 0, \ldots, 0)$ 的斜 Hermite 矩阵组成的空间。$(\lambda, 0, \ldots, 0)$ 的稳定子群是对角矩阵群，我们得到表示：[^17]

$$
\mathcal{O}_\lambda \cong G/T. \tag{4.3.12}
$$

如符号所暗示的，复李群 $G\_{\mathbb{C}}$ 是实李群 $G$ 的复化（即，$G\_{\mathbb{C}}$ 的李代数 $\mathfrak{g}\_\mathbb{C}$ 是 $G$ 的李代数 $\mathfrak{g}$ 的复化）。由于 $G$ 在 $G\_{\mathbb{C}}/P$ 上的作用是传递的[^13]，故有：[^18]

$$
G_{\mathbb C}/P \cong G/(P \cap G). \tag{4.3.13}
$$

因为

$$
P \cap G = \left\{ \begin{pmatrix} A & 0 \\ 0 & D \end{pmatrix} \in G \middle| A \in U(1),  D \in U(n) \right\}, \tag{4.3.14}
$$

所以[^14]

$$
\mathbb{P}^n \cong U(n+1)/(U(1) \times U(n)). \tag{4.3.15}
$$

射影空间具有以[^11]

$$
\begin{align}
\omega_{\text{FS}} &= \sqrt{-1} \partial \bar{\partial} \log (|z_1|^2 + \cdots + |z_{n+1}|^2) \tag{4.3.16} \\
&= \sqrt{-1} \partial \left( \frac{\sum_{i=1}^{n+1} \bar{z}_i dz_i}{|z_1|^2 + \cdots + |z_{n+1}|^2} \right) \tag{4.3.17} \\
&= \sqrt{-1} \frac{ \left( \sum_{i=1}^{n+1} dz_i \wedge d\bar{z}_i \right) \left( \sum_{j=1}^{n+1} |z_j|^2 \right) - \left( \sum_{i=1}^{n+1} \bar{z}_i dz_i \right) \wedge \left( \sum_{j=1}^{n+1} z_j d\bar{z}_j \right) }{ \left( |z_1|^2 + \cdots + |z_{n+1}|^2 \right)^2 } \tag{4.3.18}
\end{align}
$$

为 Kähler 形式的 Kähler 度量[^12]。这被称为 **Fubini–Study 度量** (Fubini–Study metric)，称 $\omega\_{\text{FS}}$ 为 **Fubini–Study 形式** (Fubini–Study form)。根据定理 3.5.2，任何射影流形都是 Kähler 流形，特别是辛流形。


## 4.4 余伴随轨道

设 $G$ 为一个李群，其李代数为 $\mathfrak{g}$。$G$ 在自身上的**伴随作用** (adjoint action)

$$
\text{Ad}: G \times G \rightarrow G, \quad (g, h) \mapsto g h g^{-1} \tag{4.4.1}
$$

通过微分[^21]得到的 $G$ 在 $\mathfrak{g}$ 上的作用，称为 $G$ 在 $\mathfrak{g}$ 上的**伴随作用** (adjoint action)，并用相同的记号

$$
\text{Ad}: G \times \mathfrak{g} \rightarrow \mathfrak{g} \tag{4.4.2}
$$

表示。此外，将其视为 $G$ 在向量空间 $\mathfrak{g}$ 上的线性表示时，称为**伴随表示** (adjoint representation)。此表示的对偶表示

$$
\text{Ad}^*: G \times \mathfrak{g}^* \rightarrow \mathfrak{g}^* \tag{4.4.3}
$$

由下式定义

$$
\langle \text{Ad}_g^* \xi, X \rangle = \langle \xi, \text{Ad}_{g^{-1}} X \rangle, \quad \xi \in \mathfrak{g}^*, X \in \mathfrak{g} \tag{4.4.4}
$$

并称为 $G$ 的**余伴随表示** (coadjoint representation)。当将此表示视为 $G$ 的作用时，称为 $G$ 在 $\mathfrak{g}^\*$ 上的**余伴随作用** (coadjoint action)。取定 $\mathfrak{g}$ 的基并用矩阵表示伴随表示时，$\text{Ad}\_g^\*$ 关于 $\mathfrak{g}^\*$ 的对偶基的表示矩阵，是 $\text{Ad}\_g$ 的表示矩阵的逆的转置。

对 $G$ 的伴随表示进行微分，可定义 $\mathfrak{g}$ 的伴随表示

$$
\text{ad}: \mathfrak{g} \times \mathfrak{g} \rightarrow \mathfrak{g}, \quad (X, Y) \mapsto \text{ad}_X(Y) = [X, Y] \tag{4.4.5}
$$

对 $G$ 的余伴随表示进行微分得到的 $\mathfrak{g}$ 的余伴随表示

$$
\text{ad}^*: \mathfrak{g} \times \mathfrak{g}^* \rightarrow \mathfrak{g}^* \tag{4.4.6}
$$

可与 $\mathfrak{g}$ 的伴随表示通过下式相关联：

$$
\langle \text{ad}_Y^*(\xi), X \rangle = \langle \xi, -\text{ad}_Y X \rangle, \quad X, Y \in \mathfrak{g},  \xi \in \mathfrak{g}^* \tag{4.4.7}
$$

对于李代数 $\mathfrak{g}$，其对偶空间 $\mathfrak{g}^\*$ 自然具有 Poisson 结构。对于 $f, g \in C^\infty(\mathfrak{g}^\*)$ 和 $\xi \in \mathfrak{g}^\*$，有

$$
T_\xi \mathfrak{g}^* \cong (T_\xi \mathfrak{g}^*)^{**} \cong (\mathfrak{g}^*)^* \cong \mathfrak{g} \tag{4.4.8}
$$

且 $\mathfrak{g}$ 上存在自然的李括号，因此可用它取 $(df)\_\xi, (dg)\_\xi \in \mathfrak{g}$ 的李括号，将得到的 $\mathfrak{g}$ 中的元用 $\xi \in \mathfrak{g}^\*$ 来求值，并将此值定义为 $\\{f, g\\}$ 在 $\xi$ 处的值：

$$
\{f, g\}(\xi) := \langle \xi, [(df)_\xi, (dg)_\xi] \rangle\tag{4.4.9}
$$

$[-,-]$ 的 Jacobi 恒等式导出 $\\{-,-\\}$ 的 Jacobi 恒等式，$\mathfrak{g}^\*$ 成为一个 Poisson 流形。称 $\\{-,-\\}$ 称为 $\mathfrak{g}^\*$ 的 **Lie-Poisson 括号** (Lie-Poisson bracket)，称 $\\{-,-\\}$ 所确定的 $\mathfrak{g}^\*$ 的 Poisson 结构为 $\mathfrak{g}^\*$ 的 **Lie-Poisson 结构** (Lie-Poisson structure)。

**注 4.4.1.** 当李群具有 Poisson 结构且李群的乘法成为 Poisson 流形的态射时，称其为 Poisson-Lie 群，这是一个与 Lie-Poisson 结构完全不同的概念。

下面的论断是至此所述内容的显然推论[^24]，但鉴于其重要性，我们将其作为定理陈述如下：

**定理 4.4.2.** 李群 $G$ 的余伴随轨道 $\mathcal{O} \subset \mathfrak{g}^\*$ [^19]是 $\mathfrak{g}^\*$ 的 Lie-Poisson 结构的辛叶。

因此，余伴随轨道具有自然的辛结构，此时的辛形式称为 **Kostant-Kirillov 形式** (Kostant-Kirillov form)。[^23]

> 其实不少书籍都是直接从辛流形这边来讲，而不是先定义Poisson结构，然后再把辛结构看作Poisson结构的特例。Kostant-Kirullov形式可以直接描述为：
>
>$$
>\left.\omega_{\text{KS}}\right|_{\xi}\left(-\mathrm{ad}^*_{X}(\xi),-\mathrm{ad}^*_{Y}(\xi)\right) := \left\langle\xi,[X,Y]\right\rangle
>$$

## 4.5 Liouville 区域

带边紧流形 $X$ 与其上的 1-形式 $\theta$ 的对 $(X, \theta)$，若满足以下两个条件，则被称为 **Liouville 区域** (Liouville domain)：

- $\omega = d\theta$ 是辛形式。
- 由条件 $\iota\_Z\omega = \theta$ 唯一确定的 **Liouville 向量场** (Liouville vector field) $Z$ 沿着 $X$ 的边界指向外部（处处与边界不相切）。

对于任意 $K \in \mathbb{R}$，用 Stein 流形 $X$ 的穷竭的多重次调和函数 $S: X \to \mathbb{R}$ 截取得到的带边流形 $S^{-1}((-\infty, K])$ 称为 **Stein 区域** (Stein domain)。对 $(S^{-1}((-\infty, K]), \theta = d^cS)$ 是 Liouville 区域的一个重要例子。Liouville 向量场 $Z$ 由 $S$ 关于 $X$ 的 Kähler 度量的梯度向量场 $\nabla S$ 给出[^20]。

> 首先对于黎曼流形$X$，上面的光滑函数$S\in C^\infty(X)$的梯度向量场定义为（参见任何一本黎曼几何教材，比如do carmo的）：
> 
> $$
> g(\nabla S,v)=\left.dS\right|_p(v),\quad \forall p\in X, v\in T_pX
> $$
> 
> 然后注意到：
> 
> $$
> \begin{aligned}
  \iota_Z\omega(v) &= \omega(Z,v) = \theta(v) = d^cS(v) \\ 
  &= dS(Jv) = g(\nabla S, Jv) = -g(JS,v)
  \end{aligned}
> $$
> 
> 这里最后一个等号是利用了$g$的厄米性。对比上面两个式子立刻得到$Z=-\nabla S$。


## 4.6 切触流形

当 $n$ 为自然数时，$2n+1$ 维流形 $N$ 上的**切触形式** (contact form) 指的是一个处处满足下式

$$
\theta \wedge (d\theta)^n  \tag{4.6.1}
$$

不为$0$的微分 1-形式 $\theta$。$N$ 上的**切触结构** (contact structure) 指的是切丛 $TN$ 的一个子丛 $\xi$，它能被某个切触形式 $\theta$ 写成 $\xi = \ker \theta$ 的形式。两个切触形式 $\theta$ 和 $\theta'$ 定义相同的切触结构的充要条件是，存在某个函数 $\phi: N \rightarrow \mathbb{R}$ 使得 $\theta' = e^{\phi} \theta$。

切触流形是辛流形在奇数维的类似物。构造切触流形的一种方法是对余切丛 $T^\*W$ 及其上一个时间相关的 Hamilton 函数 $H: T^\*W \times \mathbb{R} \rightarrow \mathbb{R}$，考虑 $T^\*W \times \mathbb{R}$ 上的 **Poincaré-Cartan 积分不变量** (Poincaré-Cartan integral invariant)：

$$
\eta = p  dq - H  dt. \tag{4.6.2}
$$

另一种方法是对余切丛 $T^\*W$ 及其上一个时间无关的 Hamilton 函数 $H: T^\*W \rightarrow \mathbb{R}$，考虑其能量超曲面 $H^{-1}(c) \subset T^\*W$。在两种构造方法中，要使得到的流形成为切触流形，都需要对 Hamilton 函数施加非平凡的条件。第一种情形的典型例子是 $H = 1$ 的情况，此时的切触形式由 $\eta = p  dq - dt$ 给出。第二种情形典型且重要的例子是多重次调和函数的等位集，这给出了 Liouville 区域的边界。

对于切触流形 $(N, \theta)$，$(N \times \mathbb{R}, e^t(d\theta + dt \wedge \theta))$ 构成一个辛流形。这被称为 $N$ 的**辛化** (symplectization)。

保持切触结构的微分同胚称为**切触同胚** (contactomorphism)。微分同胚 $\psi: N \rightarrow N$ 是切触同胚的充要条件是，存在某个函数 $\phi: N \rightarrow \mathbb{R}$，使得 $N$ 的切触形式 $\theta$ (或 $\xi$) 满足 $\psi^\* \theta = e^{\phi} \theta$。[^22]

## 注记

[^1]: 原文没有这个$\frac12$，但是我经过下面的计算觉得应该有，所以就先添上去了。
[^2]: 告诉我们任何拟凸域都是全纯域
[^3]: Ivanov N V. Approximation of smooth manifolds by real algebraic sets[J]. Russian Mathematical Surveys, 1982, 37(1): 1.
[^4]: 这里$M\_\mathbb{R}$就是$M$中由$\mathbf{x}\in U\_\mathbb{R}$给出的子流形。
[^5]: 可以看比如Hormander'的An Introduction to Complex Analysis in Several Variables: Third Edition，里面就讲了$\mathbb{C}^n$的全纯域是stein流形，stein流形的子流形也是stein流形。不过注意那本书中用的是更为常见更为标准的stein流形的等价定义，本书中采用的是最便于讲述，不必过度依赖于复分析中概念的定义。
[^6]: 有一说一，我有点懵，似乎Weinstein邻域定理无法得到这一点。
[^7]: 所谓自由就是非平凡群元作用上去都没有不动点。
[^8]: 在陈省身微分几何书关于复流形那一章有叙述
[^9]: 据我观察，日语里面翻译的时候似乎不会特意区分manifold和variety的区别，都翻译成「多様体」，比如「代数多様体」，但是中文社区更喜欢「代数簇」的翻译，所以我稍加留意了这一点，但是难免会有疏漏之处。
[^10]: 这个的定义比较复杂，书上也没说，我也就不写了，wikipeida上都能查到。
[^11]: 下面的公式原文有误，我做了更改。另外注意到这里第一个式子有$\partial\bar \partial K$的形式，这其实是非常一般的，对于Kähler流形都可以写成这样的形式，$K$称为Kähler势，比如你可以看BBS弦论书里面做CY紧致化很大一部分就在研究这个玩意儿从而研究模空间。
[^12]: 就是前面用$\omega=g(-,J-)$给出来的$g$，简单点就是$\omega=h\_{i\bar j}dz\_{i}d\bar{z}\_{\bar j}$里面的$h$。
[^13]: 英文是transitive，就是说$G$作用在整个$X$上只会有一个群轨道。
[^14]: 这里讲的都是复射影空间，如果是实射影空间，不难猜到，你只需要把下面式子的所有的幺正群$U$全部换成正交群$O$就行了。
[^15]: 这下面的$GL\_1(\mathbb{C})$也就是一维的可逆复矩阵其实就是$\mathbb{C}^\times$。
[^16]: 我看了之后百思不得其解，因为按照这个符号的想法，我似乎应当把$G\_\mathbb{C}$如下文的$G=U(n)$一样看作是$G$的复化。但是据我所知$\mathfrak{sl}(n,\mathbb{C})\otimes\_\mathbb{R}\mathbb{C}\cong\mathfrak{sl}(n,\mathbb{C})\oplus\mathfrak{sl}(n,\mathbb{C})$，这意味着$SL(n,\mathbb{C})$复化之后是$SL(n,\mathbb{C})\times SL(n,\mathbb{C})$不是这里写的$GL(n,\mathbb{C})$。所以我怀疑这里是个符号滥用，作者想说明的应该是$\mathbb{P}^n$可以表示成某个群$G$模掉其某个parabolic subgroup的形式，而$G$一般取$GL$，但是也可以取$SL$，不过书中没有写取$SL$的时候那个子群$P$的形式。根据资料显示，似乎$P$的形式和下面$GL$的一样都是上三角分块矩阵，块的来源也一样，只是要多加个限制条件$A\cdot \det D=1$。我这里翻译的时候保留了原文的记号$G$，不过我觉得读者应当忽略这个记号，或者心中换成比如$F$等别的记号表示这个群。当然这里也有可能是少标了一个下标$\mathbb{C}$，想说$G=U(n)$的复化不严格也可以看作$SL(n,\mathbb{C})$，毕竟关注投影的话$GL$和$SL$没太大区别。
[^17]: 看到这里你可能一头雾水，不要慌，我来给你解释一下大致的逻辑。首先前面花了一段去讲我们可以用不变内积把$\mathfrak{g}$以及其对偶的$\mathfrak{g}^\*$对应起来，所以就把余伴随和伴随作用联系起来。前者不熟没关系，后面一节才介绍。但是后者我们大致是知道怎么回事的。$\mathrm{Ad}\_g(h)=ghg^{-1}$，然后联系群作用的轨道，那么我们就知道伴随轨道定义就是$\mathcal{O}\_\lambda=\\{g\lambda g^{-1}\|g\in G\\}$。然后前面又说了余伴随轨道在这里和伴随轨道等价。不难发现这个表示可以和下面用稳定子群的表示等价，也就是$\mathcal{O}\_\lambda = G/G\_\lambda$，这里$G\_{\lambda}=\\{g\in G\|g\lambda g^{-1}=\lambda\\}$，也就是上文里面的$T$，轻松计算可以得到$T\cong U(1)\times U(n)$。那后面大费周章的再写这么一大段是为了干啥？其实就是为了跟你说可以直接从前面$G\_\mathbb{C}/P$的表示直接等价看出确实有$G/T$这个另外的用余伴随轨道的表示。
[^18]: 注意到$G\_\mathbb{C}/P$里面的元素是陪集$gP$的形式，这里传递性需要观察到对任意$g\_1,g\_2\in G\_\mathbb{C}$，总是存在$g\in G$，使得$g\circ g\_1P=g\_2P$。而如果$G$在$X$上作用有传递性，那么$X$可以写成群流形$G/G\_{x\_0}$的形式，这里$\forall x\_0\in X$，$G\_{x\_0}$是相应的保$x\_0$不变的稳定子群。不难发现我们可以选取最trivial的一个$G\_{\mathbb{C}}/P$里面的元素$eP$，那么$g\circ(eP)=eP$就是要求$gP=eP$，根据陪集不相交原则，这直接意味着$g\in P$，也就得到了下文写的$G\cap P$。
[^19]:是的，你被骗了，我们都被骗了，直到这里作者都没有完整写下过余伴随轨道的定义，不过作者可能默认你学过点集拓扑，既然群作用都告诉你了自然知道轨道定义，我还是在这里帮作者写一下定义：$\mathcal{O}\_{\xi}:=\\{Ad\_g^\*\xi\in\mathfrak{g}^\*\mid g\in G\\}$。不过我觉得用词还是不太准确，直接说$G$的轨道感觉不好，应该说在$G$的作用下$\mathfrak{g}^\*$的轨道。
[^20]:我在下面写了一个note阐述为什么$Z\propto\nabla S$。
[^21]: 这里“微分”的意思是：$Ad\_g\mathrm{:}\mathfrak{g}\to\mathfrak{g},X\mapsto\left.\frac{d}{dt}\right\|\_{t=0}(g\exp(tX)g^{-1})$。
[^22]: 切触几何据我所知可以和热力学联系起来，具体可以看比如卓里奇写的《自然科学问题的数学分析》，里面有一节有很基础的介绍，这里也有个比较新的[review](https://doi.org/10.1142/S0219887819400036)。
[^23]: 由于第五章会稍微用到这个形式的另一种不通过Poisson结构的直接定义，但是本书中引用时没有事先说明，所以我这里在下面补了一个note。这个直接定义应该是能用Lie-Poisson构造直接写过来的，不过我目前看到的证明还不太能说服我，所以我先不加证明。
[^24]: 显然在哪？第二章我们说过Poisson流形可以看作是辛流形包含退化情况的推广，所以我们需要说明前面的Lie-Poisson构造在余伴随轨道上一定非退化，我没看出这玩意儿trivial。
[^25]: 这个的意思是$T^\*N$上的坐标可以用$N$上的坐标$q$，以及纤维上的一个1-形式$p$来表示余切丛上的一个点$(q,p)$，因为$N$是一个流形，所以在局部可以选一个欧式局部坐标$q\_i$，这个坐标对应一个$T^\*N$上的坐标$dq\_i$。那么任何一个$p$就可以表示为$\sum\_i p\_i dq^i$，这里的$p\_i$坐标就是这个意思。因为$\theta$的定义就是和$p$的配对，所以这里也不然想到其坐标表示天然就是$\sum\_i p\_i dq^i$。
