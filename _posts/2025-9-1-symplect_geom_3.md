---
layout: post
title:  辛几何入门——第三章 G结构的几何学
categories: [辛几何翻訳]
tags: [math,physics]
comments: true
---
本文章是「数物系のためのシンプレクティック幾何学入門」一书翻译系列的第三篇，其余章节文章链接如下：

[辛几何入门——第五章 动量映射与辛商]({{ site.website }}/articles/2025-10/symplect_geom_5)


[辛几何入门——第四章 各种各样的辛流形]({{ site.website }}/articles/2025-09/symplect_geom_4)


[辛几何入门——第三章 G结构的几何学]({{ site.website }}/articles/2025-09/symplect_geom_3)


[辛几何入门——第二章分析力学]({{ site.website }}/articles/2025-08/symplect_geom_2)


[辛几何入门——第一章 序章]({{ site.website }}/articles/2025-08/symplect_geom_1)

<!--more-->

- [$G$结构的几何学](#g结构的几何学)
  - [3.1 辛向量空间](#31-辛向量空间)
    - [3.2 Darboux 定理](#32-darboux-定理)
  - [3.3 复流形](#33-复流形)
  - [3.4 驯顺性与相容性](#34-驯顺性与相容性)
  - [3.5 Kähler 流形](#35-kähler-流形)
  - [3.6 辛映射与泊松映射](#36-辛映射与泊松映射)
  - [3.7 拉格朗日子流形](#37-拉格朗日子流形)
  - [注记](#注记)


# $G$结构的几何学

在Erlangen大学的教授就职演说中，年轻的 Felix Klein 提出了这样一个观点：对于空间 $M$ 以及在其上可迁地作用[^1]的群 $G$ 所构成的组合 $(M, G)$，可以确定一门对应的几何学，并且只有在该群作用下保持不变的空间性质才是几何学的研究对象。例如，欧几里得几何对应于欧几里得空间和欧几里得合同群，仿射几何对应于仿射空间和仿射变换群，而射影几何则对应于射影空间和射影变换群的组合。仿射变换群是由保持无穷远超平面的元素构成的射影变换群的子群，而欧几里得变换群是由保持欧几里得距离的元素构成的仿射变换群的子群。被大群保持不变的性质自动地也能被其子群保持，但反之则不一定成立，因此，对应于更大群的几何学被认为是更基本的。由此，Klein 将当时已知的各种几何学置于一个以射影几何为顶点的层次结构中，并促进了李群和齐次空间的研究。

将这种 Klein 式的观点加以扩展，使其包含黎曼几何的，是 Élie Cartan 关于 $G$ 结构的几何学。对于欧几里得空间 $\mathbb{R}^n$ 和作用在其上的李群 $G$ 所构成的组合 $(G, \mathbb{R}^n)$，$n$ 维流形 $M$ 上的一个 $G$ 结构是指 $M$ 的切丛 $TM$ 的结构群从 $\mathrm{GL}(n, \mathbb{R})$ 到 $G$ 的一个约化。也就是说，在选取 $M$ 的一个开覆盖，将切丛 $TM$ 表示为平凡丛的粘贴时[^2]，其转移函数的值取在 $G$ 中，而不是 $\mathrm{GL}(n, \mathbb{R})$ 中。当 $G$ 像旋量群那样不是 $\mathrm{GL}(n, \mathbb{R})$ 的子群时，感觉上与其说是“约化”，不如说是“提升”[^3]。代表性的 $G$ 结构例子包括 $G = \mathrm{GL}^+(n, \mathbb{R})$, $\mathrm{O}(n)$, $\mathrm{GL}(n/2, \mathbb{C})$ 等情形，它们分别对应于可定向流形、黎曼流形、近复流形。此外，$G$ 结构常常由张量场来表征，上述三个例子中分别是体积形式（处处非零的最高次微分形式）、黎曼度量（处处正定的二阶对称张量）、近复结构（平方后等于负恒等映射的切丛自同构）。

关于 $G$ 结构的一个重要概念是可积性。流形是通过粘贴欧几里得空间的开集而得到的，这些粘贴映射的微分给出了切空间之间的线性映射，如果总能选取一个图册使得这些微分映射始终落在 $G$ 中，则称该流形具有可积的 $G$ 结构。换句话说，$\mathbb{R}^n$ 具有标准的 $G$ 结构，对于具有 $G$ 结构的流形，其每一点处的切空间连同 $G$ 结构可与 $\mathbb{R}^n$ 等同；而对于具有可积 $G$ 结构的流形，其每一点处的一个有限大小的邻域连同 $G$ 结构可与 $\mathbb{R}^n$ 的一个开集等同。例如，可积的黎曼流形是通过将 $\mathbb{R}^n$ 的开集用等距映射粘贴起来而得到的，这样的流形称为平坦流形。根据 Bieberbach 定理，紧致平坦流形必定是环面被有限群作用所得的商空间。另一方面，可积的近复流形称为复流形，是通过将 $\mathbb{C}^n$ 的开集用双全纯映射粘贴起来而得到的。双全纯映射相比于微分同胚映射更为“刚性”，但比等距映射更为“柔软”，因此复流形比平坦流形要多得多。$G$ 结构的可积性也可以用表征该 $G$ 结构的张量的语言来描述。例如，黎曼流形平坦的充分必要条件是黎曼曲率张量为零；而近复结构可积的充分必要条件是 Nijenhuis 张量为零。

本章将从 $G$ 结构几何学的观点概述辛几何以及与其相关的几何学。[^4]

## 3.1 辛向量空间

对于自然数 $n$，用 $I\_n$ 表示 $n$ 阶单位矩阵，并用下式定义 $2n \times 2n$ 矩阵 $J\_{2n}$：

$$
J_{2n} =
\begin{pmatrix}
0 & I_n \\
-I_n & 0
\end{pmatrix}
\tag{3.1.1}
$$

**命题 3.1.1.** 对于实向量空间 $V$ 上的任意反对称双线性形式 $\omega$，存在某个自然数 $r$ 和 $V$ 的一个适当基底，使得 $\omega$ 在此基底下可表示为如下块对角矩阵的形式：

$$
\begin{pmatrix}
J_{2r} \\
& 0
\end{pmatrix}
\tag{3.1.2}
$$

**证明.** 使用 Gram-Schmidt 正交化法。首先将 $\omega$ 视为映射 $V \rightarrow V^\*$，并取其核 $\ker \omega$ 的一个基底 $\\{g\_i\\}\_{i=1}^k$ 固定下来。接着，取 $\ker \omega$ 的一个补空间记为 $V\_1$，则 $\omega$ 在 $V\_1$ 上定义了一个反对称的非退化双线性形式。在 $V\_1$ 中取一个非零元 $e\_1$，由于 $\omega$ 在 $V\_1$ 上非退化，故存在 $f\_1 \in V\_1$ 使得 $\omega(e\_1, f\_1) = 1$。记由 $\\{e\_1, f\_1\\}$ 生成的 $V\_1$ 的子空间关于 $\omega$ 的正交补空间为 $V\_2$。从 $V\_1$ 到 $V\_2$ 的正交投影由下式给出：

$$
v \mapsto v - \omega(v, f_1)e_1 + \omega(v, e_1)f_1 \tag{3.1.3} 
$$

$\omega$ 在 $V\_2$ 上的限制再次是非退化的，因此如果 $V\_2 \neq 0$，则存在 $V\_2$ 中的一组向量 $\\{e\_2, f\_2\\}$ 使得 $\omega(e\_2, f\_2) = 1$。重复此过程，最终得到 $V$ 的一个基底 $\\{e\_1, \ldots, e\_l, f\_1, \ldots, f\_l, g\_1, \ldots, g\_k\\}$。由构造过程可知，$\omega$ 在此基底下的表示由 (3.1.2) 式给出。□

**系 3.1.2.** 向量空间上的反对称二次型的秩必为偶数。

实向量空间 $V$ 及其上的一个非退化反对称双线性形式 $\omega$ 所构成的组合 $(V, \omega)$ 称为**辛向量空间** (symplectic vector space)。$V$ 的维数必为偶数，且 $\omega$ 可由 $V$ 的某个适当基底 $\\{e\_1, \ldots, e\_n, f\_1, \ldots, f\_n\\}$ 通过矩阵 $J\_{2n}$ 表示：

$$
\omega(e_i, e_j) = \omega(f_i, f_j) = 0, \quad \omega(e_i, f_j) = \delta_{ij}, \quad i, j = 1, \ldots, n. \tag{3.1.4}
$$

这样的基底称为 $(V, \omega)$ 的**辛基底** (symplectic basis)。对于辛向量空间 $(V, \omega)$，由保持 $\omega$ 的 $V$ 的线性自同构构成的 $\mathrm{GL}(V)$ 的子群称为**辛群** (symplectic group)，记作 $\mathrm{Sp}(V, \omega)$。利用 $(V, \omega)$ 的辛基底，辛群可表示为：

$$
\mathrm{Sp}(V, \omega) = \{g \in \mathrm{GL}(2n, \mathbb{R}) \mid g^T J_{2n} g = J_{2n}\} \tag{3.1.5}
$$

**注 3.1.3.** 辛群 (symplectic group) 最初由 Weyl 命名为 “complex group”，但因容易与“定义在复数域上的群”混淆，故 Weyl 将拉丁语起源的单词 ‘complex’ 的构成要素 ‘com’ 和 ‘plexus’ 分别替换为对应的希腊语构成要素 ‘sym’ 和 ‘plectikos’，从而创造了**辛** (symplectic) 这个新词。

设 $(V, \omega)$ 为辛向量空间。对于 $V$ 的子空间 $W$，其**正交补空间** (orthogonal complement) 定义为：

$$
W^\perp = \{v \in V \mid \text{对任意} \; w \in W,\, \omega(v, w) = 0\} \tag{3.1.6}
$$

若 $W$ 满足：
- $W \subset W^\perp$，则称其为**迷向子空间** (isotropic subspace)；
- $W \supset W^\perp$，则称其为**对合子空间** (involutive subspace)；
- $W = W^\perp$，则称其为**拉格朗日子空间** (Lagrangian subspace)。

**命题 3.1.4.** 设 $(V, \omega)$ 为辛向量空间，$W \subset V$ 为迷向子空间，则下式成立：

$$
\dim W \leq \frac{1}{2} \dim V \tag{3.1.7}
$$

**证明.** 使用命题 3.1.1 的证明中所用的 Gram-Schmidt 正交化法[^5]，对于 $W$ 的任意基底 $\\{e\_1, \ldots, e\_k\\}$，可以取得包含它的 $V$ 的一个辛基底 $\\{e\_1, \ldots, e\_n, f\_1, \ldots, f\_n\\}$，因此有：

$$
2 \dim W = 2k \leq 2n = \dim V \tag{3.1.8}
$$

### 3.2 Darboux 定理

赋予一个 $2n$ 维微分流形 $M$ 一个 Cartan 意义上的 $\mathrm{Sp}(2n, \mathbb{R})$ 结构，等价于在 $M$ 上给出一个处处非退化的闭 $2$ 次微分形式 $\omega$。下面的定理是关于辛流形局部结构的基本定理：

**定理 3.2.1** (Darboux). 对于任意流形 $M$ 上的任意非退化 $2$ 次微分形式 $\omega$，$\omega$ 所确定的 $\mathrm{Sp}(2n, \mathbb{R})$ 结构是可积的，当且仅当 $\omega$ 是闭形式。

因此，辛几何是研究可积的 $\mathrm{Sp}(2n, \mathbb{R})$ 结构的学问。或者，用 Klein 的风格来说，也可以说是研究辛流形在辛同胚下不变的性质的学问。

Darboux 定理常常不以定理 3.2.1 的形式，而是以与之等价的如下形式来叙述：

**定理 3.2.2** (Darboux). 对于辛流形 $(M, \omega)$ 上的任意点 $p$，存在 $p$ 的一个邻域 $U$ 以及一个从 $\mathbb{R}^{2n}$ 的开集 $V$ 到 $U$ 的微分同胚 $\varphi: V \to U$，使得下式成立：

$$
\varphi^* \omega = \sum_{i=1}^n dp_i \wedge dq_i \tag{3.2.1}
$$

为证明 Darboux 定理，使用下面的定理：

**定理 3.2.3** (Moser). 设 $M$ 为紧致流形，$(\omega\_t)\_{t \in [0,1]}$ 为 $M$ 上的辛形式被闭区间 $[0,1]$ 参数化而成的光滑族。若 $\omega\_t$ 所属的 de Rham 上同调类不依赖于 $t$，则存在 $M$ 的微分自同胚的光滑族 $(\varphi\_t)\_{t \in [0,1]}$，满足 $\varphi\_0 = \mathrm{id}\_M$ 且对任意 $t \in [0,1]$ 有：

$$
\varphi_t^* \omega_t = \omega_0 \tag{3.2.2}
$$

**证明**. 给定 $M$ 的微分同胚族 $(\varphi\_t)\_{t \in [0,1]}$ 满足 $\varphi\_0 = \mathrm{id}\_M$，则对任意 $t \in [0,1]$ 成立 (3.2.2) 的充分必要条件是： (3.2.2) 左边对 $t$ 求导得到的表达式

$$
\begin{align}
\frac{d}{dt} (\varphi_t^* \omega_t) &= \lim_{h \to 0} \frac{\varphi_{t+h}^* \omega_{t+h} - \varphi_t^* \omega_t}{h} \tag{3.2.3}\\
&= \lim_{h \to 0} \frac{\varphi_{t+h}^* \omega_{t+h} - \varphi_t^* \omega_{t+h} + \varphi_t^* \omega_{t+h} - \varphi_t^* \omega_t}{h} \tag{3.2.4}\\
&= \lim_{h \to 0} \frac{\varphi_{t+h}^* \omega_{t+h} - \varphi_t^* \omega_{t+h}}{h} + \lim_{h \to 0} \frac{\varphi_t^* \omega_{t+h} - \varphi_t^* \omega_t}{h} \tag{3.2.5}\\
&= \lim_{h \to 0} \frac{\varphi_{t+h}^* \omega_{t+h} - \varphi_t^* \omega_{t+h}}{h} + \varphi_t^* \left( \lim_{h \to 0} \frac{\omega_{t+h} - \omega_t}{h} \right) \tag{3.2.6}\\
&= \varphi_t^* (\mathscr{L}_{X_t} \omega_t) + \varphi_t^* \left( \frac{d}{dt} \omega_t \right) \tag{3.2.7}\\
&= \varphi_t^* \left( \mathscr{L}_{X_t} \omega_t + \frac{d}{dt} \omega_t \right) \tag{3.2.8}
\end{align}
$$

对任意 $t \in [0,1]$ 为零，即

$$
\mathscr{L}_{X_t} \omega_t + \frac{d}{dt} \omega_t = 0 \tag{3.2.9}
$$

成立。这里 $\mathscr{L}\_{X\_t}$ 是 $\omega\_t$ 关于 $X\_t$ 的 Lie 导数，由于向量场 $X\_t$ 使得下式成立：

$$
\lim_{h \to 0} \frac{\varphi_{t+h}^* \omega_t - \varphi_t^* \omega_t}{h} = \varphi_t^* (\mathscr{L}_{X_t} \omega_t)\tag{3.2.10}
$$

故可以用下式定义：

$$
(X_t)_{\varphi_t(x)} = \left.\left( \frac{d}{ds} \varphi_{t+s}(x) \right)\right|_{s=0} \tag{3.2.11}
$$

利用 Cartan魔术公式：[^27]

$$
\mathscr{L}_X = \iota_X \circ d + d \circ \iota_X\tag{3.2.12}
$$

> Cartan公式有下面四种形式（上面这个似乎是最知名的），它们可以在陈省身微分几何的“李群和活动标架法”一章中找到：
> 
> $$
> \begin{aligned}
&\mathscr{L}_X = \iota_X \circ d + d \circ \iota_X\\
&\mathscr{L}_X\circ\iota_Y-\iota_Y\circ\mathscr{L}_X=\iota_{[X,Y]}\\
&\mathscr{L}_X\circ\mathscr{L}_Y-\mathscr{L}_Y\circ\mathscr{L}_X=\mathscr{L}_{[X,Y]}\\
&d\circ\mathscr{L}_X=\mathscr{L}_X\circ d
 \end{aligned}
> $$

以及 $\omega$ 是闭形式 ($d\omega\_t = 0$) 的事实，可得：

$$
\mathscr{L}_{X_t} \omega_t = \iota_{X_t} d\omega_t + d\iota_{X_t} \omega_t = d\iota_{X_t} \omega_t\tag{3.2.13}
$$

由 $\omega\_t$ 所属的 de Rham 上同调类不依赖于 $t$ 的假设，存在某个 $1$ 形式 $u\_t$ 使得：[^9]

$$
\frac{d}{dt} \omega_t = -d u_t \tag{3.2.14}
$$

关于这里的 $u\_t$ 和 $\omega\_t$，对偶的向量场 $X\_t$ 如下定义：

$$
u_t = \iota_{X_t} \omega_t \tag{3.2.15}
$$

由于 $M$ 是紧致的，可以对向量场族 $(X\_t)\_{t \in [0,1]}$ 进行积分[^10]，得到微分同胚族 $(\varphi\_t)\_{t \in [0,1]}$。此向量场满足 (3.2.9)，因此得到的微分同胚族满足 (3.2.2)。□

下面使用这个 Moser 定理来证明 Darboux 定理：

**定理 3.2.2 的证明**[^6]. 对于任意点 $p \in M$，取其足够小的邻域 $U$，则存在 $\mathbb{R}^n$ 中 $0$ 的一个邻域 $V$，以及一个微分同胚 $\psi: V \to U$ 将 $0$ 映到 $p$。$M$ 的辛形式 $\omega$ 在 $p$ 点的值 $\omega\|\_p \in \bigwedge^2 T\_p^\* M$ 通过 $\psi$ 拉回得到的 $\psi^\*\omega\_p$ 是 $\bigwedge^2 T\_0^\*\mathbb{R}^{2n}$ 中的元素。根据命题 3.1.1，可以适当选取 $\mathbb{R}^{2n}$ 的坐标 $(p\_1, \ldots, p\_n, q\_1, \ldots, q\_n)$，使得 $(\psi^\*\omega)\|\_p = (\omega\_{\mathbb{R}^{2n}})\|\_0$。这里 $(\omega\_{\mathbb{R}^{2n}})\|\_0$ 是由下式定义的 $\mathbb{R}^{2n}$ 的标准辛形式在 $0 \in \mathbb{R}^{2n}$ 处的值：

$$
\omega_{\mathbb{R}^{2n}} := \sum_{i=1}^{n} dp_i \wedge dq_i \tag{3.2.16}
$$

现在，考虑由 $t \in [0, 1]$ 参数化的 $V$ 上的 $2$ 次微分形式族：

$$
\omega_t = (1 - t)\omega_{\mathbb{R}^{2n}} + t\psi^*\omega \tag{3.2.17}
$$

显然，对任意 $t \in [0, 1]$，$\omega\_t$ 是闭形式。此外，非退化性是一个开条件[^13]，因此必要时可以重新取一个更小的 $V$，从而可以假设对任意 $t \in [0, 1]$，$\omega\_t$ 都是非退化的。于是，$\omega\_t$ 是一个由 $t \in [0, 1]$ 参数化的 $V$ 上的辛形式族。将 $V$ 取为可缩的，则可以假设对任意 $t \in [0, 1]$，$\omega\_t$ 都是恰当形式[^11]。通过 (3.2.14) 和 (3.2.15) 定义向量场族 $(X\_t)\_{t \in [0, 1]}$。取一个足够小的开子集 $V' \subset V$，则对于 $V'$ 的任意点 $x$，以 $x$ 为初值的 $X\_t$ 的积分曲线 $\varphi\_t(x)$ 在时刻 $1$ 的值 $\varphi\_1(x)$ 将停留在 $V$ 内。这样就得到了 $V'$ 与 $\varphi\_1(V')$ 的一个微分同胚，并且由构造方法以及定理3.2.2可知它满足：

$$
\varphi_1^*\omega_1 = \omega_0 \tag{3.2.18}
$$

因此，可以取映射[^12]

$$
\varphi = \psi \circ \varphi_1: V' \to \varphi(V')\subset U \tag{3.2.19}
$$

并重新将 $V'$ 记作 $V$，将 $\varphi(V')$ 记作 $U$，则定理 3.2.2 的结论成立。□

Darboux 定理断言，赋予 $\mathbb{R}^{2n}$ 标准辛结构的形式是辛流形任意点附近邻域（辛形式）的标准形式。但实际上，不仅对单点领域，已知任意 Lagrange 子流形[^7]的邻域也具有标准形式：

**定理 3.2.4 **(Weinstein). 设 $(M, \omega)$ 为辛流形，$L$ 是其 Lagrange 子流形。则存在 $L$ 在 $M$ 中的邻域 $U$ 以及零截面$L\_0$在余切丛 $T^\*L$ 中的邻域 $V$，使得 $U$ 与 $V$ 是辛同胚的，且$L$被同胚映射送到$L\_0$。[^14]

这里，在余切丛 $T^\*L$ 上赋予第 4.1 节中所述的标准辛结构。此外，$L$ 作为零截面的像，可标准地视为 $T^\*L$ 的 Lagrange 子流形。Weinstein 定理的证明使用 Moser 定理，与 Darboux 定理的证明类似，此处略去。

## 3.3 复流形

由于域的包含关系 $\mathbb{R} \subset \mathbb{C}$，$n$ 维复线性空间 $\mathbb{C}^n$ 可自然视为 $2n$ 维实线性空间 $\mathbb{R}^{2n}$，因此复一般线性群 $\mathrm{GL}(n, \mathbb{C})$ 自然成为实一般线性群 $\mathrm{GL}(2n, \mathbb{R})$ 的子群。对于 $2n$ 维流形 $M$，将 $TM$ 的结构群约化到 $\mathrm{GL}(n, \mathbb{C})$ 称为 $M$ 的**近复结构** (almost complex structure)。赋予 $M$ 概复结构等价于给出 $\Gamma(\mathrm{End}(TM))$ 中的一个元 $J$，满足 $J^2 = -\mathrm{id}$。给定近复流形 $(M, J\_M)$ 和 $(N, J\_N)$，满足下式的映射 $\varphi: M \to N$ 称为**近全纯映射** (pseudo-holomorphic map)：

$$
d\varphi \circ J_M = J_N \circ d\varphi \tag{3.3.1}
$$

如果存在近全纯映射 $\psi: M \to N$ 和 $\phi: N \to M$ 使得 $\psi \circ \phi = \mathrm{id}\_N$ 且 $\phi \circ \psi = \mathrm{id}\_M$，则称近复流形 $(M, J\_M)$ 和 $(N, J\_N)$ 是**同构的** (isomorphic)。

可积的近复结构称为**复结构** (complex structure)。换言之，近复流形 $(M, J\_M)$ 是复流形，当且仅当对任意 $p \in M$，存在 $p$ 在 $M$ 中的邻域 $U$ 和 $\mathbb{C}^n$ 的开集 $V$，使得 $(U, (J\_M)\|\_U)$ 和 $(V, (J\_{\mathbb{C}^n})\|\_V)$ 作为近复流形是同构的。这里 $J\_{\mathbb{C}^n}$ 表示 $\mathbb{C}^n$ 的标准近复结构。复流形之间的近全纯映射称为**全纯映射** (holomorphic map)。换言之，复流形是通过双全纯映射粘贴 $\mathbb{C}^n$ 的开集而得到的。

对于近复流形 $(M, J)$ 及其上的点 $p \in M$，$J\_p$ 在 $T\_pM$ 上的作用满足 $J\_p^2 = -\mathrm{id}\_{T\_pM}$，因此通过将 $T\_pM$ 复化，可以将其分解为特征值 $\sqrt{-1}$ 的特征空间 $T'\_pM$ 和特征值 $-\sqrt{-1}$ 的特征空间 $T''\_pM$ 的直和：

$$
\begin{align}
T'_pM &= \{X \in T_pM \otimes_{\mathbb{R}} \mathbb{C} \mid J_pX = \sqrt{-1}X\}\tag{3.3.2}\\
T''_pM &= \{X \in T_pM \otimes_{\mathbb{R}} \mathbb{C} \mid J_pX = -\sqrt{-1}X\}\tag{3.3.3}\\
T_pM \otimes_{\mathbb{R}} \mathbb{C} &= T'_pM \oplus T''_pM. \tag{3.3.4}
\end{align}
$$

各点处的这些直和分解在整个 $M$ 上粘合起来，给出向量丛的直和分解：

$$
TM \otimes_{\mathbb{R}} \mathbb{C} = T'M \oplus T''M \tag{3.3.5}
$$

$T'M$ 称为 $M$ 的**全纯切丛** (holomorphic tangent bundle)，$T''M$ 称为 $M$ 的**反全纯切丛** (anti-holomorphic tangent bundle)。此外，使用这些向量丛的对偶丛，定义：

$$
\Omega^{p,q}(M) = \Gamma \left( \bigwedge^p (T'M)^* \otimes \bigwedge^q (T''M)^* \right) \tag{3.3.6}
$$

则存在直和分解：

$$
\Omega^r(M) \otimes \mathbb{C} = \bigoplus_{p+q=r} \Omega^{p,q}(M) \tag{3.3.7}
$$

与此直和分解相关联的投影记为：

$$
\Pi^{p,q}: \Omega^r(M) \otimes \mathbb{C} \rightarrow \Omega^{p,q}(M) \tag{3.3.8}
$$

微分算子 $\partial$ 和 $\overline{\partial}$ 定义为：

$$
\begin{align}
\partial &:= \Pi^{p+1,q} \circ d: \Omega^{p,q}(M) \rightarrow \Omega^{p+1,q}(M) \tag{3.3.9}\\
\overline{\partial} &:= \Pi^{p,q+1} \circ d: \Omega^{p,q}(M) \rightarrow \Omega^{p,q+1}(M)\tag{3.3.10}
\end{align}
$$

对于 $X, Y \in \Gamma(TM)$，令：

$$
N(X, Y) = [JX, JY] - [X, Y] - J[X, JY] - J[JX, Y] \tag{3.3.11}
$$

则对任意 $f \in C^\infty(M)$，容易验证：

$$
N(fX, Y) = N(X, fY) = fN(X, Y) \tag{3.3.12}
$$

因此 $N$ 是 $(T^\*M)^\otimes 2 \otimes TM$ 的截面。这个 $N$ 称为 **Nijenhuis** 张量 (Nijenhuis tensor)。容易证明，对于近复流形 $(M, J)$，以下三个条件相互等价：

1. Nijenhuis 张量为零。
2. 对任意 $X, Y \in \Gamma(T'M)$，$[X, Y]$ 仍属于 $\Gamma(T'M)$。
3. $\overline{\partial}^2 = 0$。

下面的定理是 Darboux 定理在复几何中的对应物。由此定理可知，Nijenhuis 张量对应于辛几何中的 $dw$。

**定理 3.3.1** (Newlander-Nirenberg). 近复结构 $J$ 可积的充分必要条件是 Nijenhuis 张量为零。

设 $M$ 为复流形，取$M$ 的复坐标为 $\left( z\_i = x\_i + \sqrt{-1}y\_i \right)\_{i=1}^n$，则：

$$
J \left( \frac{\partial}{\partial x_i} \right) = \frac{\partial}{\partial y_i}, \quad J \left( \frac{\partial}{\partial y_i} \right) = -\frac{\partial}{\partial x_i} \tag{3.3.13}
$$

因此，$M$ 的全纯切丛和反全纯切丛分别由：

$$
\frac{\partial}{\partial z_i} = \frac{1}{2} \left( \frac{\partial}{\partial x_i} - \sqrt{-1} \frac{\partial}{\partial y_i} \right), \quad i = 1, \ldots, n \tag{3.3.14}
$$

和：

$$
\frac{\partial}{\partial \overline{z_i}} = \frac{1}{2} \left( \frac{\partial}{\partial x_i} + \sqrt{-1} \frac{\partial}{\partial y_i} \right), \quad i = 1, \ldots, n \tag{3.3.15}
$$

张成。它们的对偶基由：

$$
dz_i = dx_i + \sqrt{-1}dy_i, \quad d\overline{z_i} = dx_i - \sqrt{-1}dy_i \tag{3.3.16}
$$

给出。

## 3.4 驯顺性与相容性

辛流形 $(M, \omega)$ 上的近复结构 $J$ 如果满足对任意 $p \in M$ 和任意非零 $X \in T\_pM$ 有 $\omega\_p(X, J\_pX) > 0$，则称 $J$ 被 $\omega$ **驯顺** (tamed by $\omega$)。如果 $J$ 被 $\omega$ 驯顺，则由下式定义的 $g$ 给出 $M$ 的一个黎曼度量：

$$
g(X, Y) = \frac{1}{2} (\omega(X, JY) + \omega(Y, JX)) \tag{3.4.1}
$$

辛流形 $(M, \omega)$ 上的温和近复结构 $J$，如果关于 $g$ 是等距映射，即对任意 $X, Y \in \Gamma(TM)$ 有 $g(JX, JY) = g(X, Y)$，则称 $J$ 与 $\omega$ **相容** (compatible with $\omega$)。

## 3.5 Kähler 流形

复几何与辛几何初看似乎是完全不同种类的几何学，但在某些方面却非常相似。两者都是偶数维的[^15]，并且可以被认为是某种意义下将实流形“加倍”而成的。

给定一个实流形 $N$，其**余切丛** $M = T^\*N$ 是辛流形的典型例子，也是分析力学的发源地。其自然的辛结构在取 $N$ 的局部坐标为 $(q\_1, \ldots, q\_n)$，并取 $T^\*N$ 中相应的纤维方向坐标为 $(p\_1, \ldots, p\_n)$ 时，由下式定义：

$$
\omega = \sum_{i=1}^n dp_i \wedge dq_i \tag{3.5.1}
$$

使用坐标 $(p\_1, \ldots, p\_n, q\_1, \ldots, q\_n)$ 将此辛形式用反对称矩阵表示，则为：

$$
J_{2n} =
\begin{pmatrix}
0 & I_n \\
-I_n & 0
\end{pmatrix} \tag{3.5.2}
$$

另一方面，在**切丛** $W = TN$ 上，利用自然的直和分解 $T(TN) = TN \oplus TN$[^16]，通过类似于 (3.5.2) 的矩阵：

$$
J =
\begin{pmatrix}
0 & \mathrm{id}_{TN} \\
-\mathrm{id}_{TN} & 0
\end{pmatrix} \tag{3.5.3}
$$

来定义张量 $J \in C^\infty(W, \mathrm{End}(TW))$，则这定义了 $W$ 的一个复结构。

同时拥有辛几何和复几何这两种不同几何的对象就是 **Kähler 流形** (Kähler manifold)，其定义如下：

首先，注意正交群 $\mathrm{O}(2n)$、复一般线性群 $\mathrm{GL}(n, \mathbb{C})$ 以及辛群 $\mathrm{Sp}(2n, \mathbb{R})$ 的交集是酉群 $\mathrm{U}(n)$：

$$
\mathrm{U}(n) = \mathrm{O}(2n) \cap \mathrm{GL}(n, \mathbb{C}) \cap \mathrm{Sp}(2n, \mathbb{R}) \tag{3.5.4}
$$

这一点由这些群分别定义为：

$$
\begin{align}
\mathrm{U}(n) &= \{g \in \mathrm{GL}(n, \mathbb{C}) \mid g^{-1} = g^*\}, \tag{3.5.5} \\
\mathrm{O}(2n) &= \{g \in \mathrm{GL}(2n, \mathbb{R}) \mid g^{-1} = g^T\}, \tag{3.5.6} \\
\mathrm{GL}(n, \mathbb{C}) &= \{g \in \mathrm{GL}(2n, \mathbb{R}) \mid J_{2n}g = gJ_{2n}\}, \tag{3.5.7} \\
\mathrm{Sp}(2n, \mathbb{R}) &= \{g \in \mathrm{GL}(2n, \mathbb{R}) \mid g^T J_{2n}g = J_{2n}\} \tag{3.5.8}
\end{align}
$$

以及 $n$ 阶复方阵到 $2n$ 阶实方阵的对应关系中 Hermite 共轭对应于转置这一事实，可以直接得出。因此，具有 $\mathrm{U}(n)$ 结构的流形自动具有 $\mathrm{O}(2n)$ 结构、$\mathrm{GL}(n, \mathbb{C})$ 结构以及 $\mathrm{Sp}(2n, \mathbb{R})$ 结构。

**定义 3.5.1.** 具有 $\mathrm{U}(n)$ 结构的流形，且其关联的 $\mathrm{GL}(n, \mathbb{C})$ 结构和 $\mathrm{Sp}(2n, \mathbb{R})$ 结构都是可积的，称为 **Kähler 流形** (Kähler manifold)。

换言之，Kähler 流形是同时为复流形和辛流形，并且这两种结构相容的流形。

在 (3.5.4) 中，容易看出右边出现的三个群中任意两个的交集自动包含在剩下的一个群中。由此可知，给定辛结构、复结构和 Riemann 结构三者中的任意两个，剩下的一个便自动确定。

用表征它们的张量 $J$ 、$g$ 和 $\omega$ 来表述辛结构、近复结构和 Riemann 结构之间的关系，则有：

$$
\omega = g(-, J-) \tag{3.5.9}
$$

实际上，给定 $(J, g, \omega)$ 中的任意两个，剩下的一个便由 (3.5.9) 决定。

一般地，一个近复流形 $(M, J)$ 与其上的一个 Riemann 度量 $g$ 构成的组合，若 $g$ 是 $J$ 不变的，即满足：

$$
g(X, Y) = g(JX, JY) \tag{3.5.10}
$$

则称之为**近 Hermite 流形** (almost Hermitian manifold)。如果有一个近复流形 $(M, J)$ 及其上的一个 Riemann 度量 $g$，可以通过对 $g$ 关于 $J$ 作用取平均来得到一个近 Hermite 流形：

$$
\widetilde{g}(X,Y) := \frac{1}{2} (g(X,Y) + g(JX,JY)) \tag{3.5.11}
$$

近 Hermite 结构等价于不一定可积的 $\mathrm{U}(n)$ 结构。近复结构可积的近 Hermite 流形称为 **Hermite 流形** (Hermitian manifold)。

对于近 Hermite 流形 $(M, J, g)$，用 (3.5.9) 定义一个二阶张量 $\omega \in \Gamma \left( (T^\* M)^{\otimes 2} \right)$，则它是反对称的：

$$
\begin{align}
\omega(Y, X) &= g(Y, JX) \tag{3.5.12} \\
&= g(JY, J(JX)) \tag{3.5.13}  \\
&= g(JY, -X) \tag{3.5.14} \\
&= -g(JY, X) \tag{3.5.15} \\
&= -g(X, JY) \tag{3.5.16} \\
&= -\omega(X, Y). \tag{3.5.17}
\end{align}
$$

称此 $\omega$ 为近 Hermite 流形 $(M, J, g)$ 的**基本 2-形式** (fundamental 2-form)。由 Riemann 度量 $g$ 的非退化性可推出基本 2-形式 $\omega$ 的非退化性，因此可知近 Hermite 流形具有 $\mathrm{Sp}(2n, \mathbb{R})$ 结构。一般而言，此 $\mathrm{Sp}(2n, \mathbb{R})$ 结构不一定可积。由定理 3.2.1 可知，Hermite 流形 $(M, J, g)$ 成为 Kähler 流形的充分必要条件是，由 (3.5.9) 定义的 $(M, J, g)$ 的基本 2-形式是闭形式。此时称 $\omega$ 为 **Kähler 形式**。

**定理 3.5.2.** Kähler 流形的复子流形是 Kähler 流形。

**证明.** 设 $(M, J\_M, g\_M)$ 为 Kähler 流形，$(N, J\_N) \subset (M, J\_M)$ 为 $M$ 的复子流形。由定义立即可知，将 $M$ 的基本 2-形式限制到 $N$ 上即得到 $N$ 的基本 2-形式[^19]。由于限制与外微分可交换，故若 $M$ 的基本 2-形式是闭的，则 $N$ 的基本 2-形式也是闭的，定理 3.5.2 得证。

构造不具有 Kähler 结构的辛流形的问题至少可追溯至 Thurston [^17]。因该文Thurston将此问题归之于 Weinstein，故在 [^18] 中称此问题为 Thurston–Weinstein 问题。

## 3.6 辛映射与泊松映射

对于辛流形和泊松流形，可以自然地定义辛映射和泊松映射的概念：

**定义 3.6.1.** 对于辛流形 $(M, \omega\_M)$ 和 $(N, \omega\_N)$，满足下式的映射 $\varphi: M \to N$ 称为**辛映射** (symplectic map)：

$$
\varphi^* \omega_N = \omega_M \tag{3.6.1}
$$

特别地，当 $\varphi$ 是嵌入时，$(M, \omega\_M)$ 称为 $(N, \omega\_N)$ 的**辛子流形** (symplectic submanifold)。

**定义 3.6.2.** 泊松流形 $(M, \\{-, -\\}\_M)$ 和 $(N, \\{-, -\\}\_N)$ 之间的映射 $\varphi: M \to N$，如果对任意 $f, g \in C^\infty(N)$ 满足：

$$
\{\varphi^* f, \varphi^* g\}_M = \varphi^* \{f, g\}_N \tag{3.6.2}
$$

则称为**泊松映射** (Poisson map)。特别地，当 $\varphi$ 是嵌入时，$(M, \\{-, -\\}\_M)$ 称为 $(N, \\{-, -\\}\_N)$ 的**泊松子流形** (Poisson submanifold)。

这些定义虽然自然，但条件非常强。虽然还不至于强到毫无用处的程度，但如下面两个引理所表明，满足这些条件的情况相当受限，这提供了一个典型的例子，说明“自然的定义”未必是好的定义。

**引理 3.6.3.** 存在辛流形之间的辛映射 $\varphi : (M, \omega\_M) \rightarrow (N, \omega\_N)$ 的必要条件是 $\dim M \leq \dim N$。

**证明.** 对于任意映射 $\varphi : M \rightarrow N$、任意点 $p \in M$ 以及 $N$ 上的任意微分形式 $\omega$，下式成立：[^21]

$$
\text{rank}(\varphi^*\omega)_p \leq \text{rank}\omega_{\varphi(p)} \tag{3.6.3}
$$

另一方面，$M$ 上的 2 次微分形式 $\omega\_M$ 非退化的充分必要条件是，对任意 $p \in M$ 有：

$$
\text{rank}(\omega_M)_p = \dim M \tag{3.6.4}
$$

引理 3.6.3 由这两个事实显然可得。

**引理 3.6.4.** 设 $(M, \\{-, -\\}\_M)$ 为泊松流形，$N$ 为 $M$ 的子流形。则存在 $N$ 上的泊松结构 $\\{-, -\\}\_N$ 使得 $(N, \\{-, -\\}\_N)$ 成为 $(M, \\{-, -\\}\_M)$ 的泊松子流形的充分必要条件是：对于 $M$ 上的任意函数 $H$ 和 $N$ 上的任意点 $p$，由 $H$ 生成的哈密顿流[^20]

$$
\varphi : \mathbb{R} \to M, \quad \varphi_* \left( \frac{\partial}{\partial t} \right) = (X_H)_{\varphi(t)}, \quad \varphi(0) = p \tag{3.6.5}
$$

对任意 $t \in \mathbb{R}$ 均满足 $\varphi(t) \in N$。此外，这时使 $(N, \\{-, -\\}\_N)$ 成为 $(M, \\{-, -\\}\_M)$ 的泊松子流形的 $N$ 上的泊松结构 $\\{-, -\\}\_N$ 是唯一的。

**证明.** 当 $(N, \\{-, -\\}\_N)$ 是 $(M, \\{-, -\\}\_M)$ 的泊松子流形时，对任意 $f, g \in C^\infty(M)$，$\\{f, g\\}\_M$ 的值仅依赖于 $f\|\_N$ 和 $g\|\_N$[^22]。因此，$M$ 上的向量场 $X\_f = \\{f, -\\}$ 与 $N$ 相切[^23]。由此得出必要性。

另一方面，若 $X\_f$ 与 $N$ 相切，则 $\\{f, g\\}\_M$ 的值仅依赖于 $g\|\_N$。互换 $f$ 和 $g$ 的角色，可知 $\\{f, g\\}\_M$ 的值也仅依赖于 $f\|\_N$。由此得出充分性。

唯一性由以下事实显然可得：对任意 $f, g$ 和任意 $p \in N$，取$M$ 中点 $p$ 的邻域 $U$ 上定义的函数 $\tilde{f}, \tilde{g}$，使其限制在 $U \cap N$ 上与 $f, g$ 一致，则必须有：

$$
\{f, g\}_N = \left.\left\{ \tilde{f}, \tilde{g} \right\}_{M} \right|_N \tag{3.6.6}
$$

辛流形与泊松流形密切相关，但辛映射与泊松映射的概念却颇为不同。例如，$T^\*\mathbb{R}$ 作为 $T^\*\mathbb{R}^2$ 的子流形，是辛子流形，但不是泊松子流形。

## 3.7 拉格朗日子流形

相空间是通过给位形空间附加动量使其“加倍”而得到的，而动量恒为零的点构成的相空间的子空间可以自然地与位形空间等同（即，$M = T^\*N$ 的零截面的像可与 $N$ 等同）。这个子集具有一个显著性质：$M$ 的辛形式 $\omega$ 在其上的限制为零，并且它还是具有此性质的子流形中在包含关系下极大的那个。具有这两个性质的 $M$ 的子流形称为 $M$ 的拉格朗日子流形：

**定义 3.7.1.** 辛流形 $(M, \omega)$ 的子流形 $L$ 若满足

$$
\omega|_L = 0 \quad \text{且} \quad \dim L = \frac{1}{2} \dim M \tag{3.7.1}
$$

则称为**拉格朗日子流形** (Lagrangian submanifold)。

辛流形的子流形是辛子流形还是拉格朗日子流形，在某种意义上是两个对极的概念。前者要求辛形式的限制是非退化的，而后者要求其为零。前者是一个开条件，后者是一个闭条件，因此辛子流形在小扰动下仍保持是辛子流形，但拉格朗日子流形在小扰动下一般不再保持是拉格朗日子流形。在这个意义上，拉格朗日子流形是比辛子流形更加“硬”的对象。辛流形的一个中间维数子流形是拉格朗日子流形这一条件是一个一阶非线性偏微分方程，因此对于给定的辛流形，寻找其拉格朗日子流形通常是困难的。拉格朗日子流形的典型例子，除了上面提到的余切丛的截面的像之外，还有可积系统中的守恒量的等值面、Kähler 流形的实子流形等。

此外，辛同胚 $\varphi : (M\_1, \omega\_1) \rightarrow (M\_2, \omega\_2)$ 可以通过考虑其图像[^25]，视为直积 $(M\_1 \times M\_2, \pi\_1^\*\omega\_1 - \pi\_2^\*\omega\_2)$ 的拉格朗日子流形的一个特例。特别地，当辛流形 $M\_1$ 和 $M\_2$ 分别是 $\mathbb{R}^n$ 的开子流形 $N\_1$ 和 $N\_2$ 的余切丛，且此拉格朗日子流形由直积 $N\_1 \times N\_2$ 上的函数 $F$ 的微分 $dF$ 的图像给定时，称 $F$ 为正则变换 $\varphi$ 的**生成函数** (generating function)。

设 $M\_1$ 的坐标为 $(q, p)$，$M\_2$ 的坐标为 $(Q, P)$，则利用生成函数 $F(q, Q)$，变换前后变量的关系可写为：[^26]

$$
p_i = \frac{\partial F}{\partial q_i}, \quad P_i = -\frac{\partial F}{\partial Q_i} \tag{3.7.2}
$$

由于 $F$ 是 $q$ 和 $Q$ 的函数，首先通过解左边的方程可以将 $Q$ 表示为 $q$ 和 $p$ 的函数，接着通过解右边的方程可以确定 $P$ 为 $q$ 和 $p$ 的函数。右边方程的符号是为了符合分析力学中的标准惯例，可以通过将 $P\_i$ 乘以 $-1$ 等方式吸收掉，因此并非本质性的。

由于辛几何中的许多重要概念都可以用拉格朗日子流形的语言来描述，Weinstein 提出了“一切皆是拉格朗日子流形”的口号。这便是 Weinstein 的辛几何信条 (Weinstein’s symplectic creed) [^24]。即使说“一切”有些夸张，但研究拉格朗日子流形是辛几何的核心问题这一点是毋庸置疑的。

## 注记

[^1]: 即$M=G(M)$。
[^2]: 回忆纤维丛都是局部平凡化的。
[^3]: 因为$\operatorname{Spin}(n)$是$\operatorname{SO}(n)$的双覆盖群。
[^4]: 实际上并没涉及到多少纤维丛，陈省身完全够用，请放心食用。
[^5]: 注意只有在$k\leq n$的时候可以用前面证明命题3.1.1的方式构建辛基底。
[^6]: 对原文证明中易引起混淆的记号以及一些没说清楚的地方进行了适当改写。
[^7]: 这些概念将在本章或下一章提及。
[^8]: 其实就是$\phi\_t$这个积分曲线对应的向量场。
[^9]: 就是在说参数变化的时候最多只能差个恰当形式。
[^10]: 这样得到的向量场恰好就是前面Lie导数出来给出的$\phi$和$X$的关系，所以满足3.2.9。
[^11]: 来自于庞加莱引理，任何开单位球上的闭微分形式都恰当。
[^12]: 只需要注意到$(\psi\circ\varphi)^\*=\varphi^\*\circ\psi^\*$即可。
[^13]: 这个词也即“open condition”，是说如果某性质在某个点处成立，那一定也在这个点附近的某个开领域内成立。关于非退化性为什么有这个性质可以见[stack exchange上的讨论](https://math.stackexchange.com/questions/4187646/why-is-non-degeneracy-of-forms-an-open-condition)。
[^14]: 对这个定理原文表述的一些语焉不详的地方进行了补写。
[^15]: 复几何偶数维是因为要在切丛上定义一个$J^2=-\mathrm{id}$，而这只在偶数维向量空间或者说复化后的向量空间才能做到；辛几何偶数维是因为在局部上反对称的$\omega$非退化，这直接要求切丛偶数维，回忆任何反对称奇数维矩阵行列式都是$0$。
[^16]: 忘记了的读者（比如我自己）可能需要阅读一下陈省身的第四章第三小节的内容（不过那里只对标架丛进行了讨论），那里告诉我们任何一个$M$为底流形的纤维丛$P$，其切空间有分解$T\_x(P)=V(x)\oplus H(x)$，这里$H(x)$在投影$P\to M$下同构于$T\_p(M)$，在我们这里就是$TN$。另一方面这里$P=TN$，切丛某一根纤维本身就构成一个向量空间，$V(x)$的几何意义就是$x\in M$处的纤维的切空间，而对向量空间而言，把他送到切空间的微分算子是线性映射，显然这对应一个同构，所以$V \cong TN$。
[^17]: Thurston W P. Shorter notes: Some simple examples of symplectic manifolds[J]. Proceedings of the American Mathematical Society, 1976, 55(2): 467-468.
[^18]: Tralle A, Oprea J. Symplectic manifolds with no Kähler structure[M]. Springer, 2006.
[^19]: 关键在于只需要确定$J$和$g$，反对称且非退化的$\omega$自动得到，而子复流形的$J$和$g$自动通过限制得到。
[^20]: 用人话说就是$\varphi\_\*\left(\left.\frac{\partial}{\partial t}\right\|\_t\right)(f)=\left.\frac{\partial}{\partial t}\right\|\_t(f\circ\varphi)=\frac{d}{dt}f(\varphi(t))$，也就是屋里人常常看到的流形上参数曲线曲线的切向量定义。
[^21]: 注意到$(\varphi^\*\omega)\_p(v,w)$，$\omega\_q\left(d\varphi\_p(v),d\varphi\_p(w)\right)$和$d\varphi\_p^\*\circ{\omega\_q}\circ d\varphi\_p(v,w)$三者相等。然后注意到对于线性映射$\mathrm{rank}(AB)\leq \min\\{\mathrm{rank}(A),\mathrm{rank}(B)\\}$，也就是秩越乘越小。
[^22]: 这是因为根据泊松子流形的定义，嵌入映射保泊松结构，而嵌入映射体现在函数$f,g$上就是把他们限制在子流形$N$上。
[^23]: 这里相切是说$X\_p\in T\_p N$，也就是说对于无穷小的时间，$X\_p$诱导的“流动”不会跑出$N$，所以就得到下文所说的必要性。为什么相切是因为前面说的$X$由泊松括号定义，而在$N$上泊松括号的限制只依赖于$f\|\_N和g\|\_N$，所以本质上来说$X\_{p\in N}$其实可以看作是在$N$这个泊松子流形上定义的。和$M$无关，自然也就是$T\_pN$中的元。
[^24]: Weinstein A. Symplectic geometry[J]. Bulletin of the American mathematical society, 1981, 5(1): 1-13.
[^25]: 这一段文中的“图像”的意思就是$M\_1\times M\_2$的子流形，用$(x,\varphi(x))$定义。
[^26]: 本书对于具体而言系统性用辛流形描述哈密顿力学还是欠缺的，有兴趣的读者应当去读Anorld的GTM60。
[^27]: 由于后面会出现这个公示的其它形式，所以我索性在下面将其全部列出。