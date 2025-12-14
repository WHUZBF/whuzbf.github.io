---
layout: post
title:  辛几何入门——第五章 动量映射与辛商
category: 辛几何翻訳
tags: [math,physics]
comments: true
---
本文章是「数物系のためのシンプレクティック幾何学入門」一书翻译系列的第五篇，其余章节文章链接如下：

{% assign symp_articles = site.posts | where: "category", "辛几何翻訳" | sort: "date" %}
{% for post in symp_articles %}
[{{ post.title }}]({{ post.url | relative_url }})
{% endfor %}

<!--more-->

- [动量映射与辛商](#动量映射与辛商)
  - [5.1 Hamilton 作用](#51-hamilton-作用)
  - [5.2 辛商](#52-辛商)
  - [译注](#译注)


# 动量映射与辛商

若辛流形 $(M, \omega)$ 及其上的 Hamilton 函数 $H$ 具有李群 $G$ 作用下的对称性，那么很自然地会考虑将 $M$ 替换为商空间 $M/G$ 来减少系统的自由度。然而，一般情况下 $M/G$ 不是辛流形。如果 $G$ 是奇数维的，那么 $M/G$ 也是奇数维，因此根本不可能具有辛结构。

辛几何中正确的商概念是通过注意到若 Hamilton 系统具有对称性，则根据 Noether 定理，相应的动量会守恒而得到的。即，首先取与对称性相关的动量为定值的子空间，然后对这个子空间用群的作用分割。这样得到的商称为辛商。

为了精确地表述这一点，需要李群在辛流形上的 Hamilton 作用及其动量映射的概念。在此过程中，4.4 节中见过的李代数对偶空间的 Poisson 结构会自然出现。

辛商与代数几何中的几何不变量理论商 (geometric invariant theory quotient) 密切相关。要定义辛商，不仅需要辛流形 $(M, \omega)$ 及其上李群 $G$ 的 Hamilton 作用，还必须选择 $\mathfrak{g}^\*$ 中的一个元素 $\xi$。这对应于 GIT 商中线丛的 $G$ 线性化 (G-linearization) 的选择。通过改变 $\xi$ 引起的辛商的变化在代数几何中称为 GIT 商的变分 (variation of GIT quotient)，这在理论和应用上都很重要。VGIT 的典型例子可以在第 8 章讨论的环面几何 (toric geometry) 中看到。

## 5.1 Hamilton 作用

设李群 $G$ 作用在辛流形 $(M, \omega)$ 上：

$$
a: G \times M \rightarrow M, \quad (g, x) \mapsto g \cdot x\tag{5.1.1}
$$

通过对 $a$微分可以得到映射 $\mathfrak{g} \rightarrow \Gamma(TM)$， $Y \in \mathfrak{g}$ 的像记为 $\underline{Y} \in \Gamma(TM)$，并称为 $Y$ 的**基本向量场** (fundamental vector field)[^1]。假设对任意 $Y \in \mathfrak{g}$，存在某个函数 $\mu\_Y : M \rightarrow \mathbb{R}$，使得 $Y$ 的基本向量场 $\underline{Y}$ 成为与 $\mu\_Y$ 相关联的 Hamilton 向量场：

$$
X_{\mu_Y} = \underline{Y} \tag{5.1.2}
$$

根据 Hamilton 向量场的定义[^2]，(5.1.2) 可以改写为：

$$
d\mu_Y = \iota_{\underline{Y}} \omega \tag{5.1.3}
$$

对于给定的向量场，以其为 Hamilton 向量场的函数在相差一个常数意义下是唯一确定的[^3]。通过对 $\mathfrak{g}$ 中的每个元素 $Y \in \mathfrak{g}$ 选择并固定这个常数，可以得到一个映射：

$$
\mathfrak{g} \rightarrow C^\infty(M), \quad Y \mapsto \mu_Y \tag{5.1.4}
$$

进一步，通过适当地选取常数，可以使 (5.1.4) 成为一个线性映射。此时，存在 $M$ 上的 $\mathfrak{g}^\*$ 值 $C^\infty$ 函数

$$
\mu : M \rightarrow \mathfrak{g}^* \tag{5.1.5}
$$

使得对任意 $Y \in \mathfrak{g}$ 都有

$$
\mu_Y = \langle \mu, Y \rangle \tag{5.1.6}
$$

成立[^4]。这个映射由命题 2.8.2, 满足[^5]

$$
\begin{align}
X_{\{\mu_Y, \mu_Z\}} &= [X_{\mu_Y}, X_{\mu_Z}] \tag{5.1.7} \\
&= [\underline{Y}, \underline{Z}] \tag{5.1.8} \\
&= X_{\mu_{[Y, Z]}} \tag{5.1.9}
\end{align}
$$

但由于给定 Hamilton 向量场所对应的 Hamilton 函数有添加常数的自由度，故不一定对任意 $Y, Z \in \mathfrak{g}$ 都满足

$$
\mu_{[Y, Z]} = \{\mu_Y, \mu_Z\}, \quad \forall Y, Z \in \mathfrak{g} \tag{5.1.10}
$$

**定义 5.1.1.** 辛流形 $(M, \omega)$ 上的连通李群 $G$ 的 **Hamilton 作用** (Hamiltonian action) 是指 $G$ 在 $M$ 上的一个作用与一个 $M$ 上的 $C^\infty$ 函数

$$
\mu: M \to \mathfrak{g}^* \tag{5.1.11}
$$

构成的组，满足以下性质：

1.  $G$ 在 $M$ 上的作用保持辛形式 $\omega$，即对任意 $g \in G$ 有 $g^\* \omega = \omega$。
2.  对任意 $Y \in \mathfrak{g}$，由 $Y$ 生成的 $M$ 上的向量场 $\underline{Y}$ 是以 $\langle \mu, Y \rangle : M \to \mathbb{R}$ 为 Hamilton 函数的 Hamilton 向量场；

    $$
    \iota_{\underline{Y}} \omega = d \langle \mu, Y \rangle \tag{5.1.12}
    $$

3.  映射 $\mu: M \to \mathfrak{g}^\*$ 是一个 Poisson 映射，即对任意 $Y, Z \in \mathfrak{g}$ 有

    $$
    \mu_{[Y,Z]} = \{\mu_Y, \mu_Z\} \tag{5.1.13}
    $$

此时，称 $\mu$ 为**动量映射** (moment map)。

**命题 5.1.2.** 动量映射的条件 (5.1.13) 等价于 $\mu$ 的等变性[^6]：

$$
\mu(g \cdot x) = \operatorname{Ad}_g^*(\mu(x)), \quad \forall g \in G,  x \in M \tag{5.1.14}
$$

**证明.** 对 $Y \in \mathfrak{g}$，令 $g = \exp(tY)$，在 $t = 0$ 处对 (5.1.14) 左边与 $Z \in \mathfrak{g}$ 的配对求微分，根据基本向量场的定义、(5.1.2) 以及 Poisson 括号的定义，有：

$$
\begin{align}
\left.\frac{d}{dt} \mu_Z(e^{tY} \cdot x)\right|_{t=0} &= \underline{Y} \mu_Z(x) \tag{5.1.15} \\
&= X_{\mu_Y} \mu_Z(x) \tag{5.1.16} \\
&= \{\mu_Y, \mu_Z\}(x) \tag{5.1.17}
\end{align}
$$

另一方面，在 $t = 0$ 处对 (5.1.14) 的右边求微分得到：

$$
\begin{align}
\left.\frac{d}{dt} \langle \operatorname{Ad}_{e^{tY}}^* \mu, Z \rangle\right|_{t=0} &= \langle \operatorname{ad}_Y^* \mu, Z \rangle \tag{5.1.18} \\
&= \langle \mu, \operatorname{ad}_Y Z \rangle \tag{5.1.19} \\
&= \langle \mu, [Y, Z] \rangle \tag{5.1.20} \\
&= \mu_{[Y, Z]}(x) \tag{5.1.21}
\end{align}
$$

由于 $G$ 是连通的，且 (5.1.14) 在单位元 $g = e$ 处平凡地成立，再根据常微分方程解的唯一性，(5.1.14) 对任意 $g \in G$ 成立当且仅当其微分后得到的式子 (5.1.13) 成立。

下面两个命题由定义直接得出：[^7]

**命题 5.1.3.** 设给定了李群 $G$ 在 $(M, \omega)$ 上的一个 Hamilton 作用，其动量映射为 $\mu: M \to \mathfrak{g}^\*$。那么，将 $G$ 的 Hamilton 作用限制到 $G$ 的任意闭子群 $H$ 上，则给出 $H$ 的一个 Hamilton 作用，其动量映射为 $\iota^\* \circ \mu: M \to \mathfrak{h}^\*$。此处 $\iota^\* : \mathfrak{g}^\* \twoheadrightarrow \mathfrak{h}^\*$ [^8]是由李群的嵌入 $H \hookrightarrow G$ 所诱导的李代数的嵌入 $\iota\_\*: \mathfrak{h} \hookrightarrow \mathfrak{g}$ 的对偶满射线性映射。

> 第一个性质是自明的，我们主要看第二个和第三个条件的证明。第二个性质注意到$\forall Z\in\mathfrak{h}$：
> 
> $$
> \begin{aligned}
d\left\langle \iota^*\circ\mu,Z\right\rangle = d\left\langle\mu,\iota_* Z\right\rangle = \iota_{\underline{\iota_* Z}}\omega = \iota_{\underline{ Z}}\omega
\end{aligned}
> $$
>
> 再来看第三个性质，注意到：
> 
> $$
> \begin{aligned}
\left(\iota^*\circ\mu\right)_{[Y,Z]}&=\left\langle\iota^*\circ\mu,[Y,Z]\right\rangle=\left\langle\mu,\iota_*[Y,Z]\right\rangle\\
&=\left\langle\mu,[\iota_*Y,\iota_*Z]\right\rangle=\mu_{[\iota_*Y,\iota_*Z]}\\
&=\left\{\mu_{\iota_* Y},\mu_{\iota_* Z}\right\}=\left\{(\iota^*\mu)_Y,(\iota^*\mu)_Z\right\}
\end{aligned}
> $$

**命题 5.1.4.** 设李群 $G\_1$ 和 $G\_2$ 分别在辛流形 $(M\_1, \omega\_1)$ 和 $(M\_2, \omega\_2)$ 上具有 Hamilton 作用，其动量映射分别由 $\mu\_1: M\_1 \to \mathfrak{g}\_1^\*$ 和 $\mu\_2: M\_2 \to \mathfrak{g}\_2^\*$ 给出。那么，$G\_1 \times G\_2$ 在 $(M\_1 \times M\_2, \pi\_1^\* \omega\_1 + \pi\_2^\* \omega\_2)$ 上有一个自然的 Hamilton 作用，其动量映射由

$$
\mu_1 \oplus \mu_2 : M_1 \times M_2 \to \mathfrak{g}_1^* \oplus \mathfrak{g}_2^* \tag{5.1.22}
$$

给出。

> 第一个性质自明，第二个性质只需要注意到配对的线性，然后利用$\mu\_1$（$\mu\_2$）只有在和$\mathfrak{g\_1}$（$\mathfrak{g}\_2$）配对的时候才不为$0$。我们重点来看第三个性质，这个性质可以利用式5.1.14来得到。只需要注意到下面的等式：
>
> $$
> \begin{aligned}
> \left\langle \mathrm{Ad}^*_{g_1\otimes g_2}(\xi_1\oplus\xi_2),X_1\oplus X_2\right\rangle&=\left\langle \xi_1\oplus\xi_2,\mathrm{Ad}_{g_1^{-1}\otimes g_2^{-1}}(X_1\oplus X_2)\right\rangle=\left\langle \xi_1\oplus\xi_2,\mathrm{Ad}_{g_1^{-1}}(X_1)\oplus \mathrm{Ad}_{g_2^{-1}}(X_2)\right\rangle\\
> &=\left\langle \xi_1, \mathrm{Ad}_{g_1^{-1}}(X_1)\right\rangle+\left\langle \xi_2, \mathrm{Ad}_{g_2^{-1}}(X_2)\right\rangle=\left\langle \mathrm{Ad}_{g_1}^*\xi_1, X_1\right\rangle+\left\langle \mathrm{Ad}_{g_2}^*\xi_2, X_2\right\rangle
> \end{aligned}
> $$
> 
> 这里$g\_i\in G\_i$，$X\_i\in\mathfrak{g}\_i$，$\xi\_i\in\mathfrak{g}\_i^\*$。也就是说：
> 
> $$
> \mathrm{Ad}^*{g_1\otimes g_2} = \mathrm{Ad}^*{g_1}+\mathrm{Ad}^*{g_2}
> $$
> 
> 这个是真的不难“注意到”，其实就是乘法在求微分之后由于莱布尼茨法则变成线性关系。

另外，下面这个命题的证明也是很简单的：

**命题 5.1.5.** 在余伴随轨道 $\mathcal{O} \subset \mathfrak{g}^\*$ 上的余伴随作用 $G \curvearrowright \mathcal{O}$ 是一个 Hamilton 作用，其动量映射由嵌入映射

$$
\iota: \mathcal{O} \hookrightarrow \mathfrak{g}^* \tag{5.1.23}
$$

给出。

**证明.** 只需对任意 $Y \in \mathfrak{g}$，证明在 $\mathcal{O} \subset \mathfrak{g}^\*$ 上成立如下 1-形式的等式：

$$
d\langle \iota, Y \rangle = \iota_{\underline{Y}} \omega \tag{5.1.24}
$$

对任意 $\xi \in \mathcal{O}$，$Y$ 的基本向量场 $\underline{Y}$ 在 $\xi$ 处的值由

$$
\underline{Y}_{\xi} = \operatorname{ad}_Y^*(\xi) \in \mathfrak{g}^* \tag{5.1.25}
$$

给出。此外，任意 $\eta \in T\_\xi \mathcal{O}$ 用某个合适的$Z \in \mathfrak{g}$表示为[^10]

$$
\eta = \operatorname{ad}_Z^*(\xi) \tag{5.1.26}
$$

取 (5.1.24) 右边与 $\eta$ 的配对，有[^9]

$$
\begin{align}
\omega(\underline{Y}_{\xi}, \eta) &= \omega(\operatorname{ad}_Y^*(\xi), \operatorname{ad}_Z^*(\xi)) \tag{5.1.27} \\
&= \langle \xi, [Y, Z] \rangle \tag{5.1.28} \\
&= \langle \xi, -\operatorname{ad}_Z Y \rangle \tag{5.1.29} \\
&= \langle \operatorname{ad}_Z^* \xi, Y \rangle \tag{5.1.30} \\
&= \langle \eta, Y \rangle \tag{5.1.31}
\end{align}
$$

而这显然等于 (5.1.24) 左边与 $\eta$ 的配对。

下列命题在构造 Hamilton 作用的例子上非常重要：

**命题 5.1.6.** 保恰当辛流形 $(M, \omega = d\theta)$ 上的$\theta$ 的李群作用是 Hamilton 作用。

**证明.** 当李群 $G$ 在 $M$ 上作用并保 $\theta$ 时，对任意 $Y \in \mathfrak{g}$ 有

$$
\mathscr{L}_{\underline{Y}} \theta = 0 \tag{5.1.32}
$$

成立。令

$$
\mu_Y = -\iota_{\underline{Y}} \theta \tag{5.1.33}
$$

由于它关于 $Y$ 是线性的，故存在某个 $\mu: M \to \mathfrak{g}^\*$，使得任取 $Y \in \mathfrak{g}$ 有 $\mu\_Y = \langle \mu, Y \rangle$。对任意 $Y, Z \in \mathfrak{g}$，有

$$
\begin{align}
d\mu_Y &= -d\iota_{\underline{Y}} \theta \tag{5.1.34} \\
&= -(d\iota_{\underline{Y}} + \iota_{\underline{Y}} d)\theta + \iota_{\underline{Y}} d\theta \tag{5.1.35} \\
&= -\mathscr{L}_{\underline{Y}} \theta + \iota_{\underline{Y}} d\theta \tag{5.1.36} \\
&= \iota_{\underline{Y}} d\theta \tag{5.1.37}
\end{align}
$$

且[^11]

$$
\begin{align}
\mu_{[Y, Z]} &= -\iota_{\underline{[Y, Z]}} \theta \tag{5.1.38} \\
&= -\iota_{[\underline{Y}, \underline{Z}]} \theta \tag{5.1.39} \\
&= -(\mathscr{L}_{\underline{Y}} \iota_{\underline{Z}} - \iota_{\underline{Z}} \mathscr{L}_{\underline{Y}}) \theta \tag{5.1.40} \\
&= -\mathscr{L}_{\underline{Y}} (\iota_{\underline{Z}} \theta) \tag{5.1.41} \\
&= \mathscr{L}_{\underline{Y}} (\mu_Z) \tag{5.1.42} \\
&= \underline{Y}(\mu_Z) \tag{5.1.43} \\
&= X_{\mu_Y} (\mu_Z) \tag{5.1.44} \\
&= \{\mu_Y, \mu_Z\} \tag{5.1.45}
\end{align}
$$

因此，$\mu$ 是该 $G$ 作用的动量映射。

在余切丛上的群作用是命题 5.1.6 的一个典型应用实例。

**命题 5.1.7.** 李群 $G$ 在流形 $N$ 上的作用，可以自然提升为在余切丛 $(M, \omega) = (T^\*N, d\theta)$ 上的一个 Hamilton 作用。

**证明.** 根据余切丛上 Liouville 形式 $\theta$ 的定义 (4.1.2)，$\theta$ 在 $G$ 作用下是不变是显然的[^12]，即对任意 $g \in G$ 有

$$
g^* \theta = \theta \tag{5.1.46}
$$

成立。

命题 5.1.6 的另一个典型应用例子是辛向量空间上的线性群作用。

**命题 5.1.8.** 酉群 $U(n)$ 在辛向量空间 $(\mathbb{C}^n, \frac{\sqrt{-1}}{2} \sum\_{i=1}^n dz\_i \wedge d\overline{z}\_i)$ 上的自然作用是 Hamilton 作用，其动量映射由

$$
\mu: \mathbb{C}^n \rightarrow \mathfrak{u}(n)^*, \quad (z_i)_{i=1}^n \mapsto \left( \frac{\sqrt{-1}}{2} \overline{z}_i z_j \right)_{i,j=1}^n \tag{5.1.47}
$$

给出。

**证明.** $\mathbb{C}^n$ 上的标准辛形式

$$
\omega = \frac{\sqrt{-1}}{2} \sum_{i=1}^n dz_i \wedge d\overline{z}_i \tag{5.1.48}
$$

可以通过 $\mathbb{C}^n$ 上的 1-形式[^20]

$$
\theta = \frac{\sqrt{-1}}{4} \sum_{i=1}^n (z_i d\overline{z}_i - \overline{z}_i dz_i) \tag{5.1.49}
$$

表示为

$$
\omega = d\theta \tag{5.1.50}
$$

酉群 $U(n)$ 的元素 $g = (g\_{ij})\_{i,j=1}^n$ 在 $\mathbb{C}^n$ 上的作用由

$$
z = (z_i)_{i=1}^n \mapsto g \cdot z = \left( \sum_{j=1}^n g_{ij} z_j \right)_{i=1}^n \tag{5.1.51}
$$

给出，因此对于 $Y = (Y\_{ij})\_{i,j=1}^n \in \mathfrak{u}(n)$，令 $g(t) = \exp(tY)$，其基本向量场为

$$
\begin{align}
\underline{Y} &= \sum_{i=1}^n \left. \frac{d(g(t) \cdot z)_i}{dt} \right|_{t=0} \frac{\partial}{\partial z_i} + \text{(c.c.)} \tag{5.1.52} \\
&= \sum_{i=1}^n \left. \frac{d(e^{tY} \cdot z)_i}{dt} \right|_{t=0} \frac{\partial}{\partial z_i} + \text{(c.c.)} \tag{5.1.53} \\
&= \sum_{i=1}^n \left. (Y e^{tY} \cdot z)_i \right|_{t=0} \frac{\partial}{\partial z_i} + \text{(c.c.)} \tag{5.1.54} \\
&= \sum_{i=1}^n \left( \sum_{j=1}^n Y_{ij} z_j \right) \frac{\partial}{\partial z_i} + \text{(c.c.)} \tag{5.1.55} \\
&= \sum_{i,j=1}^n Y_{ij} z_j \frac{\partial}{\partial z_i} + \sum_{i,j=1}^n \overline{Y}_{ij} \overline{z}_j \frac{\partial}{\partial \overline{z}_i} \tag{5.1.56}
\end{align}
$$

其中 (c.c.) 表示复共轭 (complex conjugate)。因此，

$$
\begin{align}
\mu_Y &= -\iota_{\underline{Y}} \theta \tag{5.1.57} \\
&= -\frac{\sqrt{-1}}{4} \sum_{i,j=1}^n (Y_{ij} z_j \overline{z}_i - \overline{Y}_{ij} \overline{z}_j z_i) \tag{5.1.58} \\
&= -\frac{\sqrt{-1}}{2} \sum_{i,j=1}^n Y_{ij} z_j \overline{z}_i \tag{5.1.59}
\end{align}
$$

其中，最后一个等号使用了由

$$
\mathfrak{u}(n) = \{ Y \in \text{Mat}_{n \times n}(\mathbb{C}) \mid Y^* = -Y \} \tag{5.1.60}
$$

导出的

$$
\overline{Y}_{ij} \overline{z}_j z_i = -Y_{ji} z_i \overline{z}_j \tag{5.1.61}
$$

以及

$$
\sum_{i,j=1}^n Y_{ji} z_i \overline{z}_j = \sum_{i,j=1}^n Y_{ij} z_j \overline{z}_i \tag{5.1.62}
$$

现在，使用内积

$$
\begin{align}
(Y, Z) &:= -\operatorname{tr}(YZ) \tag{5.1.63} \\
&= -\sum_{i,j=1}^n Y_{ij} Z_{ji} \tag{5.1.64} \\
&= \sum_{i,j=1}^n Y_{ij} \overline{Z}_{ij} \tag{5.1.65}
\end{align}
$$

将 $\mathfrak{u}(n)$ 与 $\mathfrak{u}(n)^\*$ 等同，则由

$$
\mu_Y = -\operatorname{tr}(Y \mu) \tag{5.1.66}
$$

可得

$$
\mu(z) = \left( \frac{\sqrt{-1}}{2} \overline{z}_i z_j \right)_{i,j=1}^n \tag{5.1.67}
$$

关于动量映射，有下面的基本定理：[^16]

**定理 5.1.9** [^13][^14][^15]. 设环面 $T^n = (S^1)^n$ [^17]在紧辛流形 $(M, \omega)$ 上具有 Hamilton 作用，其动量映射由

$$
\mu: M \to \mathfrak{t}^* \cong \mathbb{R}^n \tag{5.1.68}
$$

给出。那么，动量映射的任意纤维[^18]都是连通的，并且其像是一个凸多面体，由 $T^n$ 作用的不动点的凸包给出[^19]。

证明需要使用 Morse 理论，此处省略。

## 5.2 辛商

给定紧李群在辛流形上的 Hamilton 作用，可以如下定义与之相关的商：

**定理 5.2.1.** 设紧李群 $G$ 在辛流形 $(M, \omega)$ 上具有 Hamilton 作用，其动量映射由 $\mu: M \rightarrow \mathfrak{g}^\*$ 给出。进一步假设 $0 \in \mathfrak{g}^\*$ 是 $\mu$ 的正则值[^21]，且 $G$ 在 $\mu^{-1}(0)$ 上的作用是自由的[^22]：

$$
\begin{array}{ccc}
\mu^{-1}(0) & \stackrel{\iota}{\hookrightarrow} & M \\
\pi \downarrow & & \\
\mu^{-1}(0)/G & &
\end{array} \tag{5.2.1}
$$

那么，在 $M/\\!/G := \mu^{-1}(0)/G$ 上存在唯一的辛形式 $\omega\_{\text{red}}$，满足

$$
\pi^*\omega_{\text{red}} = \iota^*\omega_M \tag{5.2.2}
$$

**证明.** 由于 $0 \in \mathfrak{g}^\*$ 是 $\mu$ 的正则值，$\mu^{-1}(0)$ 是 $M$ 的子流形[^23]。由于 $G$ 在 $\mu^{-1}(0)$ 上的作用是自由的，$M/\\!/G := \mu^{-1}(0)/G$ 构成一个流形。 (5.2.2)换句话说就是对任意 $p \in \mu^{-1}(0)$ 和任意 $X, Y \in T\_p\mu^{-1}(0)$ 有[^24]

$$
(\omega_{\text{red}})_{\pi(p)}(\pi_*X, \pi_*Y) = (\omega_M)_{\iota(p)}(\iota_*X, \iota_*Y) \tag{5.2.3}
$$

由于 $\pi$ 是满射，满足此条件的 $M/\\!/G$ 上的 2-形式若存在则唯一。为证明存在性，需说明对任意 $q \in M/\\!/G$ 和 $\overline{X}, \overline{Y} \in T\_q(M/\\!/G)$，选取满足 $\pi(p) = q$ 的 $p \in \mu^{-1}(0)$ 以及满足 $\pi\_\*X = \overline{X}, \pi\_\*Y = \overline{Y}$ 的 $X, Y$，并按下式定义

$$
(\omega_{\text{red}})_q(\overline{X}, \overline{Y}) = (\omega_M)_p(\iota_*X, \iota_*Y) \tag{5.2.4}
$$

时，该定义是良定义的（即不依赖于 $q \in \pi^{-1}(p)$ 和 $X, Y \in T\_p(\mu^{-1}(0))$ 的选取）。换言之，需证明对任意 $p, p' \in \mu^{-1}(0)$ 和 $X, Y \in T\_p(\mu^{-1}(0))$，$X', Y' \in T\_{p'}(\mu^{-1}(0))$，若 $\pi(p) = \pi(p'), \pi\_\*X = \pi\_\*X'$ 且 $\pi\_\*Y = \pi\_\*Y'$，则有 $(\omega\_M)\_p(X, Y) = (\omega\_M)\_{p'}(X', Y')$。首先，由 $\pi(p) = \pi(p')$ ，存在 $g \in G$ 使得 $p = g \cdot p'$。令 $X'' = g\_\*X', Y'' = g\_\*Y'$，则有[^25]

$$
\pi_*X' = (\pi \circ g)_*X' = \pi_*(g_*X') = \pi_*X'', \quad \pi_*Y' = \pi_*Y'' \tag{5.2.5}
$$

又因为 $\omega$ 在 $G$ 作用下不变，所以[^26]

$$
(\omega_M)_{p'}(X', Y') = (\omega_M)_p(X'', Y'') \tag{5.2.6}
$$

$X, Y$ 和 $X'', Y''$ 都是 $p$ 点处 $\mu^{-1}(0)$ 上的切向量[^27]，且由 $\pi\_\*X = \pi\_\*X''$ 知 $X - X'' \in \ker \pi\_\*$。由于 $\pi: \mu^{-1}(0) \rightarrow \mu^{-1}(0)/G$ 是由自由的 $G$ 作用得到的商，这意味着存在某个 $Z \in \mathfrak{g}$ 使得[^28]

$$
X - X'' = \underline{Z}_p \tag{5.2.7}
$$

此时，对任意 $W \in T\_p(\mu^{-1}(0))$ 有

$$
\begin{align}
\omega(\underline{Z}_p, W) &= d\mu_Z(W) \tag{5.2.8} \\
&= (d\langle \mu, Z\rangle)(W) \tag{5.2.9} \\
&= \langle d\mu(W), Z \rangle \tag{5.2.10} \\
&= 0 \tag{5.2.11}
\end{align}
$$

其中最后一个等号使用了由 $W \in T\_p(\mu^{-1}(0))$ 导出的关系[^29]

$$
d\mu(W) = 0 \tag{5.2.12}
$$

因此，

$$
(\omega_M)_p(X'', Y'') = (\omega_M)_p(X, Y'') \tag{5.2.13}
$$

同样可得

$$
(\omega_M)_p(X, Y'') = (\omega_M)_p(X, Y) \tag{5.2.14}
$$

故 $\omega\_{\text{red}}$ 是良定义的。

由 $\omega\_M$ 的非退化性和[^34]

$$
\dim \mu^{-1}(0) = \dim M - \dim G \tag{5.2.15}
$$

可知，$\omega\|\_{\mu^{-1}(0)}$ [^35]的核的维数至多为 $\dim G$[^30]。另一方面，由 $G$ 作用的基本向量场张成的 $T(\mu^{-1}(0))$ 的子丛的维数为 $\dim G$，且该子丛包含于 $\omega\|\_{\mu^{-1}(0)}$ 的核中。因此，$\omega\|\_{\mu^{-1}(0)}$ 的核恰好由 $G$ 作用的基本向量场张成，从而 $\omega\_{\text{red}}$ 是非退化的。[^31]

更一般地，对于余伴随轨道 $\mathcal{O} \subset \mathfrak{g}^\*$，若考虑将其上的 Kostant-Kirillov 形式取反号后得到的辛结构，则动量映射变为包含映射带上负号。此时，其[^32]与辛流形 $(M, \omega)$的直积 $(M \times \mathcal{O}, \omega\_M - \omega\_\mathcal{O})$ 具有对角型的 Hamilton 作用

$$
G \circlearrowright M \times \mathcal{O}, \quad g \cdot (m, \xi) = (g \cdot m, \operatorname{Ad}_g^* \xi) \tag{5.2.16}
$$

其动量映射由[^33]

$$
\mu - \iota: (m, \xi) \mapsto \mu(m) - \xi \tag{5.2.17}
$$

给出。此时，记

$$
\begin{align}
M/\!/_\mathcal{O} G &:= (M \times \mathcal{O})/\!/G \tag{5.2.18} \\
&= \{ (m, \xi) \in M \times \mathfrak{g}^* \mid \mu(m) - \xi = 0 \} / G \tag{5.2.19} \\
&= \mu^{-1}(\mathcal{O}) / G \tag{5.2.20}
\end{align}
$$

并称之为 $M$ 在 $\mathcal{O} \subset \mathfrak{g}^\*$ 处关于 $G$ 的**辛商** (symplectic quotient) 或 **Marsden-Weinstein 约化** (Marsden-Weinstein reduction)。通过改变 $\mathcal{O}$，可以对同一个 Hamilton 作用考虑各种不同的商。理解这些商之间的关系，无论在理论上还是应用上都是一个有趣且重要的问题。

## 译注

[^1]: 这里取微分的意思是$\left.\frac{d}{dt}f(e^{tY}\cdot x)\right\|\_{t=0}:=\underline{Y}f(x)$，对于$\forall x\in M$成立。后面对命题5.1.2的证明也会涉及到这个定义。
[^2]: 复习一下式2.11.22。
[^3]: 回忆一下微分几何里面可以用Stokes定理说明两个exact的1-形式相等，他们对应的函数只会差个常函数。在我印象中这也和微分形式作为流形上的层存在有关。
[^4]: 感觉你可以理解为用了Riesz表示定理。
[^5]: 注意这里第二行原文$Y$和$Z$没有下划线，这里根据上下文应当有。
[^6]: 英文是"equivariance"，我根据“等变上同调”译为“等变性”。
[^7]: 虽说确实可以从定义大致看出来，我还是擅自在每个定理后面加了一个个人的附注。
[^8]: 这个双箭头符号“$\twoheadrightarrow$”一般表示满射，对于单射，比如常常见到的嵌入，是用弯曲箭头“$\hookrightarrow$”。
[^9]: 第二个等号其实可以看作是前面余伴随轨道上的Kostant-Kirillov辛形式（有的书还会加个Souriau）的定义，其与Lie-Poisson括弧的等价性源自4.4.9以及2.11.23给出的辛形式和Poisson括号之间的关系，证明我就懒得看了。另外，倒数第二个等号来自式4.4.7。
[^10]: 这是因为$T\_\xi\mathcal{O}$完全由$\mathrm{ad}^\*\_X\xi$张成，这一点有个很图像上的解释，可以想象轨道本身是$\mathrm{Ad}^\*$在$\mathfrak{g}^\*$上某一点作用形成的，那么某点处的切空间也就用$\mathrm{Ad}^\*$的求导得到，而其导数恰好就是$\mathrm{ad}^\*$。
[^11]: 这里我改写了一下中间步骤5.1.40，感觉这样写更好懂一些，我使用了Cartan公式：$\iota\_{[X,Y]}\omega=\mathscr{L}\_X\iota\_Y\omega-\iota\_Y\mathscr{L}\_X\omega$。可以见第三章公式3.2.12后面我的批注。
[^12]: 这个“显然”可以在局部坐标系下用$\theta=\sum\_ip\_idq^i$看出，首先我们要知道群作用$f:N\to N$在$T^\*N$上的提升是什么，记切映射$f\_\*:TN\to TN$，有对偶余切映射$f^\*:T^\*N\to T^\*N$，其实就是拉回和推前映射的特例，详情可见陈省身第一章最后几节的论述。那么$(q,p)\mapsto(f(q),f^\*(p))$。取$f(q):=\tilde{q}$，那么$d\tilde q^i =dq^j\frac{\partial \tilde{q}^i}{\partial q^j} $，余切映射诱导对偶基底的变换$p\_i\mapsto\tilde{p}\_i=\sum\_jp\_j\frac{\partial q^j}{\partial\tilde{q}^i}$。所以$\theta$在$f$作用下不变。
[^13]: Atiyah M F. Convexity and commuting Hamiltonians[J]. Bulletin of the London Mathematical Society, 1982, 14(1): 1-15.
[^14]: Guillemin V, Sternberg S. Convexity properties of the moment mapping[J]. Inventiones mathematicae, 1982, 67(3): 491-513.
[^15]: Guillemin V, Sternberg S. Convexity properties of the moment mapping. II[J]. Inventiones mathematicae, 1984, 77(3): 533-546.
[^16]: 这个定理也被称作：Atiyah-Guillemin-Sternberg Convexity Theorem.
[^17]: 这里$S^1$看作紧李群$U(1)$，那么$T^n$对应的李代数其实就是Abelian的$\mathfrak{t}\cong\oplus\_{i=1}^n\mathfrak{u}(1)$。
[^18]: 这里纤维的意思就是$\mu(\alpha)\subset M$，$\alpha\in\mathfrak{t}^\*$。
[^19]: 意思就是$\mu(M)$是$\mathbb{R}^n$里面的凸多面体，其顶点就是$T^n$在$M$上群作用的不动点。
[^20]: 这书似乎很喜欢把$fdz$写成$f\wedge dz$（下式也是如此），这里我全部改写成$fdz$的形式了。
[^21]: $f:M\to N$，若对于$x\in M$，切映射$f\_\*:TM\_x\to TN\_{f(x)}$在$x$处非退化，那么$x$就成为$f$的正则点，若$f^{-1}(y)\subset M$只包含正则点，那就称$y$是$f$的正则值。这个概念如果忘了建议你去看下《从微分观点看拓扑》的第一章。另外这里$0$可能会被误解为一定要是李代数里面的$0$向量，但是据我查阅资料，应该只要求是动量映射正则值。
[^22]: 这是为了把$G$商掉之后依然是个光滑流形，见后文描述。
[^23]: 这是一个定理，正则值原像定理，证明可以找本微分拓扑的书查查。
[^24]: 原文这个式子右边少了下标$\iota{(p)}$。
[^25]: 第一个等号无非是因为我们把$G$商去了所以$\pi\circ g = \pi$。
[^26]: 因为下式的右边其实就是$g^\*\omega\_M$，然后等式两边同时在$p'$处取值作用在$(X',Y')$上。
[^27]: 这里原文有误，原文是“$\pi^{-1}(0)$上的切向量”。
[^28]: 直观想象流形$M$把群$G$商掉之后$\mathfrak{g}$里面的元素对应的基本向量场自然就是$0$了，所以$\ker\pi\_\*$就由这些基本向量场生成。
[^29]: 这是因为$\mu$在$\mu^{-1}(0)$上是常映射，全部映射到$0$。那么自然其微分也就是$0$，也就是说作用到$T\_p(\mu^{-1}(0))$上是$0$。
[^30]: 这里或许需要重提一下，我们说$X\in\ker\omega$其实是在说$\omega(X,\bullet)$是一个零映射。**但是这里我很疑惑为什么这说明$\dim\ker\omega\|\_{\mu^{-1}(0)}\leq \dim G$**。
[^31]: 这段话就是在说根据前面5.28的计算，所有的$\mathfrak{g}$对应的基本向量场都在$\ker\omega$里面（我这里省略了下标，虽然这很重要）。然后根据前面说的$\ker \omega$维数最大就是$\dim G$便可以立即得到其实$\ker\omega$无非就是这些基本向量场，没有别的。**但是我并没有理解为什么这说明$\omega\_{\text{red}}$非退化。**
[^32]: 按照文中的记号是指辛流形 $(\mathcal{O}, -\omega\_\mathcal{O})$。
[^33]: 注意这里$\mu$是G作用在$M$上的那个动量映射，$-\iota$才是$\mathcal{O}$上的动量映射，他们加起来之后得到$M\times \mathcal{O}$上的动量映射。至于为什么是这样加起来的结构，从前面的5.1.22式可以一窥其原因。
[^34]: 下面的这个维数公式也是正则值原像定理的一部分。
[^35]: 这个限制在$\mu^{-1}(0)$上就是$\iota^\*\omega\_M$的意思。