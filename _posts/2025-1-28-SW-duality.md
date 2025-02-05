---
layout: post
title:  Seiberg-Witten 对偶
categories: [physics]
tags: [supersymmetry, hep-th, math-ph]
---
超对称这个东东我看过很多遍，但是感觉东西太多太杂了，而我又不常用，所以每次都是看了就忘，要用的时候再学一遍。借着看Seiberg-Witten 对偶，我写一个超对称非常基本的东东的备忘录，不打算写太多推导，只是希望今后要再用的时候能再回忆起来。参考的是Bilal的讲义，我没看过超对称的textbook。感觉太厚了，时间成本太大，细枝末节的东西对我而言并不那么重要。

<!--more-->
# 超对称代数

## Poincare代数
老生常谈的Poincare代数可看作是$\mathfrak{so}(3,1)\ltimes \mathfrak{e}^{3,1}$，长下面这个样子：

$$
\begin{aligned}
[P_\mu,P_\nu]&=\quad0 ,\\
[M_{\mu\nu},M_{\rho\sigma}]&=\quad ig_{\nu\rho}M_{\mu\sigma}-ig_{\mu\rho}M_{\nu\sigma}-ig_{\nu\sigma}M_{\mu\rho}+ig_{\mu\sigma}M_{\nu\rho},\\
[M_{\mu\nu},P_\rho]&=\quad-ig_{\rho\mu}P_\nu+ig_{\rho\nu}P_\mu .\end{aligned}
$$

然后大家就想着把这个对称性扩张，但是有个著名的no-go theorem：

> [Coleman-Mandula] 满足下面三个条件的对称性唯一可能是Poincare群：
>
> - 对于任意$M$，只有有限种粒子的质量小于$M$
> - 任何二粒子态在几乎所有能量（除了测度为0的离散集之外的能量）处都能发生某个反应
> - 弹性两体散射的振幅在几乎所有能量和角度处都是散射角的解析函数

这个定理第一个明显的破坏时无质量谱的情形，这个时候Poincare群可以加上$D$和$K$两个生成元扩张成共形群。如果我们考虑$\mathbb{Z}_2$分次的李代数，也就是不仅只考虑生成元的对易关系，还允许反对易关系的存在，Poincare代数有所谓的超对称扩张，也就是超对称代数。

## 超对称

Poincare群原先的生成元看作是bosonic的，现在我们需要对应的加入grassmannian的生成元$Q^I_{\alpha}$及其共轭$\bar{Q}_{\dot{\alpha}}^I$。本文主要考虑$3+1$维空间中的超对称，所以他们都是二分量旋量。这里$I=1,\ldots,\mathcal{N}$。如果$\mathcal{N}\neq 1$，就称之为扩张超对称，原因是这个时候代数有中心荷：

$$
\begin{aligned}
[P_{\mu},Q_{\alpha}^{I}]&=0 ,\\
[P_{\mu},\overline{Q}_{\dot{\alpha}}^{I}]&=0 ,\\
[M_{\mu\nu},Q_{\alpha}^{I}]&=i(\sigma_{\mu\nu})_{\alpha}{}^{\beta}Q_{\beta}^{I},\\
[M_{\mu\nu},\overline{Q}^{I\dot{\alpha}}]&=i(\overline{\sigma}_{\mu\nu})^{\dot{\alpha}}{}_{\dot{\beta}}\overline{Q}^{I\dot{\beta}}\\
\{Q_{\alpha}^{I},\overline{Q}_{\dot{\beta}}^{J}\}&=2\sigma_{\alpha\dot{\beta}}^{\mu}P_{\mu}\delta^{IJ}\\
\{Q_\alpha^I,Q_\beta^J\}&=\epsilon_{\alpha\beta}Z^{IJ}\\
\{\overline{Q}_{\dot{\alpha}}^I,\overline{Q}_{\dot{\beta}}^J\}&=\epsilon_{\dot{\alpha}\dot{\beta}}(Z^{IJ})^*
\end{aligned}
$$

对于扩张超对称，$Q$因为带有指标$I$，所以其实还暗含R-symmetry，对于$\mathcal{N}=4$ SYM理论，这会讲理论的对称性扩张到无穷维的Yangian代数。[^1]

## 超对称代数的表示

和Poincare代数一样，如果我们找到了超对称代数的不可约表示，称为超多重态，满足CPT不变性。其中包含许多单粒子态以及它们对应的超伙伴，所以只要找到了超对称代数的表示就找到了理论的谱。这部分虽然对于理解超对称本身是很有帮助的，但是在计算和应用层面上帮助有限，所以我懒得记了，找表示的过程大致来说就是把$Q,\bar Q$当产生湮灭算符用。这里只给一个非常重要的定义：

> **BPS态**
>
> 考虑$Z^{AB}\neq0$的扩张超对称，其中的有质量态满足：
> 
> $$
> m\quad\geq\quad\frac{1}{2\mathcal{N}}\operatorname{Tr}\left\{\sqrt{Z^\dagger Z}\right\}
> $$
> 
> 这称为**BPS边界**，取等号的那些态就是**BPS态**。[^2]

# $(\mathcal{N}=1)$超空间和超场

## 超对称规范理论

## 例子：超对称NLSM

# $\mathcal{N}=2$超对称

# Seiberg-Witten 对偶


# 参考

[^1]: 这部分我建议直接看Yu-tin Huang的散射振幅教材
[^2]: 当然，如果你看过类似David Tong的超对称量子力学之类的书，有些地方对BPS态的定义就是超对称部分破缺的态（有些$Q$作用上去不是0 ）