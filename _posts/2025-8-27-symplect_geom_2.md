---
layout: post
title:  辛几何入门——第二章 分析力学
category: 辛几何翻訳
tags: [math,physics]
comments: true
---
本文章是「数物系のためのシンプレクティック幾何学入門」一书翻译系列的第二篇，其余章节文章链接如下：

{% assign symp_articles = site.posts | where: "category", "辛几何翻訳" | sort: "date" %}
{% for post in symp_articles %}
[{{ post.title }}]({{ post.url | relative_url }})
{% endfor %}

<!--more-->

- [第二章 分析力学](#第二章-分析力学)
  - [2.1 牛顿运动定律](#21-牛顿运动定律)
    - [2.1.1 简谐振动](#211-简谐振动)
    - [2.1.2 单摆](#212-单摆)
    - [2.1.3 开普勒问题](#213-开普勒问题)
  - [2.2 分析力学的拉格朗日形式](#22-分析力学的拉格朗日形式)
    - [2.2.1 变分原理](#221-变分原理)
    - [2.2.2 欧拉-拉格朗日方程](#222-欧拉-拉格朗日方程)
    - [2.2.3 动量守恒律](#223-动量守恒律)
  - [2.3 Legendre 变换](#23-legendre-变换4)
  - [2.4 Legendre-Fenchel 变换](#24-legendre-fenchel-变换)
  - [2.5 分析力学的哈密顿形式](#25-分析力学的哈密顿形式)
  - [2.6 相对论性点粒子](#26-相对论性点粒子)
  - [2.7 泊松定理](#27-泊松定理)
  - [2.8 泊松流形](#28-泊松流形)
  - [2.9 诺特定理](#29-诺特定理)
  - [2.10 叶状结构](#210-叶状结构)
  - [2.11 辛流形](#211-辛流形)
  - [2.12 探测器轨道](#212-探测器轨道)
    - [2.12.1 平面圆型限制性三体问题](#2121-平面圆型限制性三体问题)
    - [2.12.2 时间依赖的正则变换](#2122-时间依赖的正则变换)
    - [2.12.3 雅可比积分与拉格朗日点](#2123-雅可比积分与拉格朗日点)
  - [译注](#译注)


# 第二章 分析力学

分析力学拥有超过200年的历史，是辛几何学的故乡。**此处并不打算**按照实际历史顺序来概述从分析力学到辛几何学的发展历程。另一方面，也可以将辛流形定义为具有非退化闭2次微分形式的流形，并从此开始讨论。这在数学中是标准的做法，但**本书亦不采用此法**。在本章中，我们将从分析力学开始谈起，先形式化地阐述**泊松流形**（其必要性被认为比辛流形更易于理解），随后将其作为特例引入辛流形。

## 2.1 牛顿运动定律

关于质点系的经典力学，牛顿运动定律（Newton’s laws of motion）由以下三部分构成：

- **第一定律** 
  未受外力作用的质点将进行匀速直线运动。

- **第二定律** 
  当质点受到力作用时，其加速度与作用在该质点上的合力成正比，与该质点的质量成反比。

- **第三定律** 
  当质点A对质点B施加力时，质点B也会对质点A施加大小相等、方向相反的力。

第一定律中虽提及“匀速直线运动”，但要确定其含义必须选定参考系。在牛顿力学中，将能使未受外力作用的质点作匀速直线运动的参考系称为**伽利略参考系**（Galilean reference frame）。第一定律即主张了伽利略参考系的存在。

第二定律是三个运动定律中最为重要的，常被称为**牛顿运动方程**（Newton’s equation of motion）：

$$
F = m \frac{d^2 x}{dt^2} \tag{2.1.1} 
$$

这里 $m$ 是质点的质量（mass），$F$ 是质点所受的力（force），而 $x$ 是伽利略坐标系中质点的位置（position）。为了描述第二定律，其前提是需要第一定律来保证伽利略坐标系的存在，这是不言而喻的。

第三定律阐述了作用与反作用定律，它与动量守恒定律等价。根据后文将要叙述的诺特定理，这与系统的平移不变性（或空间的均匀性）等价。

以这种方式来表述运动定律，无论在哲学上还是实用上都极不令人满意。哲学上最令人不满的最大理由是，在这种表述中，“力”究竟是什么并不明确。即使将在伽利略坐标系中观察到质点不做匀速直线运动时，其质量与加速度的乘积定义为“力”也未尝不可，但那样的话第二定律就什么也没阐述了。因此，除了牛顿的运动定律之外，还需要力的定律，例如关于弹簧的胡克定律、牛顿的万有引力定律、关于点电荷相互作用的库仑定律等。

另一方面，实用上最大的不满在于可用的坐标系被固定为伽利略坐标系。许多系统具有对称性，通过采用与该系统对称性相关的坐标，可以在理论上视野更清晰，计算也更简便。在牛顿形式的经典力学中，必须首先使用伽利略坐标写出运动方程，然后再将其转换到所需的坐标。

此外，关于对称性与守恒定律的诺特定理，只有运用分析力学才能自然地阐述。第三定律与动量守恒定律等价，但根据诺特定理，动量守恒定律等价于系统具有空间平移对称性（即“物理规律在平移变换下不变”）。这一事实几乎不可能从牛顿的运动定律中看出来。

总之，我们先就几个简单的例子来表述一下牛顿的运动方程吧。

### 2.1.1 简谐振动

![图2.1和2.2](\img\posts\symplect_geom\2.1-2.2.webp)

考虑如图 2.1 所示，一个由弹簧悬挂在空中的重物的上下运动。设时刻 $t$ 时重物的位置为 $x = x(t)$，则此时的运动方程为

$$
m \frac{d^2 x}{dt^2} = -k x - m g \tag{2.1.2}
$$

其中，$m$ 是重物的质量 (mass)，$k$ 是弹簧劲度系数 (stiffness)，$g$ 是重力加速度 (gravitational acceleration)。通过适当选取时间 $t$ 和位置 $x$ 的单位，此方程可化为

$$
\frac{d^2 x}{d t^2} = -x - 1 \tag{2.1.3}
$$

若进一步令 $y = x + 1$，则运动方程可写为

$$
\frac{d^2 y}{d t^2} = -y \tag{2.1.4}
$$

这是一个二阶线性微分方程，其解空间是由 $\sin t$ 和 $\cos t$ 张成的二维线性空间。此类运动称为简谐振动 (simple harmonic motion)。

### 2.1.2 单摆

如图 2.2 所示，一个在半径为 $R$ 的圆周上运动的重物称为单摆（simple gravity pendulum）。偏离竖直方向 $\theta$ 角的重物，在 $\theta$ 方向上所受的力为 $-m g \sin \theta$，其运动方程为

$$
m R \frac{d^2 \theta}{d t^2} = -m g \sin \theta \tag{2.1.5}
$$

通过适当选取单位制使得 $m = R = g = 1$，并在方程两边乘以 $\dot{\theta}$，得到

$$
\ddot{\theta} \dot{\theta} = -\sin \theta \, \dot{\theta} \tag{2.1.6}
$$

将等式两边对时间 $t$ 积分，可得

$$
\frac{1}{2} \dot{\theta}^2 = \cos \theta + E \tag{2.1.7}
$$

这里 $E$ 是积分常数。将其改写为

$$
E = \frac{1}{2} \dot{\theta}^2 - \cos \theta \tag{2.1.8}
$$

可以看出此式即为能量守恒定律。若将其写为

$$
\frac{d \theta}{d t} = \sqrt{2 (\cos \theta + E)} \tag{2.1.9}
$$

则方程变为可分离变量的形式。于是有

$$
\frac{d \theta}{\sqrt{2 (\cos \theta + E)}} = d t \tag{2.1.10}
$$

即

$$
\int \frac{d \theta}{\sqrt{2 (\cos \theta + E)}} = t \tag{2.1.11}
$$

由此可将时间 $t$ 表示为角度 $\theta$ 的函数，而 $\theta$ 作为时间 $t$ 的函数则由其反函数给出。积分 (2.1.11) 是一个椭圆积分，其反函数是椭圆函数。由于方程是非线性的，其解空间不是线性空间，但根据常微分方程初值问题解的存在唯一性定理，该解可由初始值（即时刻 $t = 0$ 时的 $\theta$ 和 $\dot{\theta}$ 的值）来参数化。也就是说，解空间是 $S^1 \times \mathbb{R}$。

### 2.1.3 开普勒问题

上面的两个问题是关于在一个一维空间中运动的一个质点的问题。运动方程是二阶常微分方程，因此解空间的维度是 2。这里我们考虑两个在三维空间中运动并发生引力相互作用的质点。这种情况下解空间的维度是 12，比之前的例子要大得多。然而，由于该系统具有很大的对称性（根据诺特定理，这等价于守恒律），最终可以归结为一个二维问题。

运动方程由下式给出：

$$
\begin{align}
&m_1 \frac{d^2 \boldsymbol{x}_1}{d t^2} = -m_1 m_2 \frac{\boldsymbol{x}_1 - \boldsymbol{x}_2}{|\boldsymbol{x}_1 - \boldsymbol{x}_2|^3}, \tag{2.1.12} \\
&m_2 \frac{d^2 \boldsymbol{x}_2}{d t^2} = -m_1 m_2 \frac{\boldsymbol{x}_2 - \boldsymbol{x}_1}{|\boldsymbol{x}_2 - \boldsymbol{x}_1|^3} \tag{2.1.13}
\end{align}
$$

这里，引入质心坐标 $\boldsymbol{x}'$ 和相对位置 $\boldsymbol{x}$：

$$
\begin{align}
\boldsymbol{x}' &= \frac{m_1 \boldsymbol{x}_1 + m_2 \boldsymbol{x}_2}{m_1 + m_2}, \tag{2.1.14} \\
\boldsymbol{x} &= \boldsymbol{x}_1 - \boldsymbol{x}_2 \tag{2.1.15}
\end{align}
$$

则运动方程可改写为：

$$
\begin{align}
\ddot{\boldsymbol{x}}' &= 0, \tag{2.1.16} \\
m \ddot{\boldsymbol{x}} &= -m_1 m_2 \frac{\boldsymbol{x}}{|\boldsymbol{x}|^3} \tag{2.1.17}
\end{align}
$$

这里

$$
m = \frac{m_1 m_2}{m_1 + m_2} \tag{2.1.18}
$$

是调和平均值的一半，称为约化质量 (reduced mass)。(2.1.16) 表明质心做匀速直线运动。另一方面，(2.1.17) 是描述一个质点在由另一个固定质点产生的引力场中运动的方程。

通过适当选取单位制，将其写为：

$$
\ddot{\boldsymbol{x}} = -\frac{\boldsymbol{x}}{|\boldsymbol{x}|^3} \tag{2.1.19}
$$

三维向量的叉积（cross product）定义为：对于向量

$$
\begin{align}
&\boldsymbol{a} = (a_1, a_2, a_3), \tag{2.1.20} \\
&\boldsymbol{b} = (b_1, b_2, b_3) \tag{2.1.21}
\end{align}
$$

有

$$
\boldsymbol{a} \times \boldsymbol{b} = (a_2 b_3 - a_3 b_2, a_3 b_1 - a_1 b_3, a_1 b_2 - a_2 b_1) \tag{2.1.22}
$$

利用此定义，角动量（angular momentum）定义为：

$$
\boldsymbol{M} = \boldsymbol{x} \times \dot{\boldsymbol{x}} \tag{2.1.23}
$$

则有

$$
\begin{align}
\dot{\boldsymbol{M}} &= \dot{\boldsymbol{x}} \times \dot{\boldsymbol{x}} + \boldsymbol{x} \times \ddot{\boldsymbol{x}} \tag{2.1.24} \\
&= \boldsymbol{0} + \boldsymbol{x} \times \left(-\frac{\boldsymbol{x}}{|\boldsymbol{x}|^3}\right) \tag{2.1.25} \\
&= \boldsymbol{0} \tag{2.1.26}
\end{align}
$$

由此可知角动量守恒。这里使用了莱布尼茨法则

$$
\frac{d}{d t}(\boldsymbol{a} \times \boldsymbol{b}) = \dot{\boldsymbol{a}} \times \boldsymbol{b} + \boldsymbol{a} \times \dot{\boldsymbol{b}} \tag{2.1.27}
$$

以及叉积的性质

$$
\boldsymbol{a} \times \boldsymbol{a} = \boldsymbol{0} \tag{2.1.28}
$$

关于对称性与守恒律关系的诺特定理指出，角动量守恒 $\dot{\boldsymbol{M}} = \boldsymbol{0}$ 等价于系统的旋转对称性。

由叉积的定义 (2.1.22) 可直接得出

$$
\boldsymbol{a} \cdot (\boldsymbol{a} \times \boldsymbol{b}) = 0 \tag{2.1.29}
$$

由此可知，角动量 $\boldsymbol{M} := \boldsymbol{x} \times \dot{\boldsymbol{x}}$ 与 $\boldsymbol{x}$ 和 $\dot{\boldsymbol{x}}$ 两者都正交。由于角动量守恒，可知 $\boldsymbol{x}$ 始终停留在与 $\boldsymbol{M}$ 正交的平面内。在此平面内引入极坐标，写作：

$$
\boldsymbol{x} = (r \cos \theta, r \sin \theta, 0) \tag{2.1.30}
$$

则角动量为

$$
\begin{align}
\boldsymbol{M} &:= \boldsymbol{x} \times \dot{\boldsymbol{x}} \\
&= (r \cos \theta, r \sin \theta, 0) \times (\dot{r} \cos \theta - r \sin \theta \, \dot{\theta}, \dot{r} \sin \theta + r \cos \theta \, \dot{\theta}, 0) \\
&= (0, 0, r \dot{r} \cos \theta \sin \theta + r^2 \cos^2 \theta \, \dot{\theta} - r \dot{r} \sin \theta \cos \theta + r^2 \sin^2 \theta \, \dot{\theta}) \\
&= (0, 0, r^2 \dot{\theta}) \tag{2.1.31}
\end{align}
$$

取运动方程 (2.1.19) 两边与 $\dot{\boldsymbol{x}}$ 的点积，得到：

$$
\dot{\boldsymbol{x}} \cdot \ddot{\boldsymbol{x}} = -\frac{\boldsymbol{x}}{|\boldsymbol{x}|^3} \cdot \dot{\boldsymbol{x}} \tag{2.1.32}
$$

此式很容易积分，得到：

$$
\frac{1}{2} (\dot{\boldsymbol{x}} \cdot \dot{\boldsymbol{x}}) = \frac{1}{|\boldsymbol{x}|} + E \tag{2.1.33}
$$

这里 $E$ 是积分常数。实际上，对 (2.1.33) 求导，并利用向量点积的莱布尼茨法则

$$
\frac{d}{d t} (\boldsymbol{a} \cdot \boldsymbol{b}) = \dot{\boldsymbol{a}} \cdot \boldsymbol{b} + \boldsymbol{a} \cdot \dot{\boldsymbol{b}} \tag{2.1.34}
$$

以及关于多变量微分的链式法则 (chain rule)

$$
\frac{d}{d t} (f(\boldsymbol{x})) = \frac{\partial f}{\partial x} \frac{d x}{d t} + \frac{\partial f}{\partial y} \frac{d y}{d t} + \frac{\partial f}{\partial z} \frac{d z}{d t} = \nabla f \cdot \dot{\boldsymbol{x}} \tag{2.1.35}
$$

即可立即得到 (2.1.32)。$E$ 是积分常数，因此是和时间无关的常数，称之为系统的能量 (energy)。将 (2.1.33) 写作

$$
E = \frac{1}{2} |\dot{\boldsymbol{x}}|^2 - \frac{1}{|\boldsymbol{x}|} \tag{2.1.36}
$$

并称之为能量守恒定律 (energy conservation law)。根据诺特定理，能量守恒定律等价于系统在时间平移下的不变性。

将 (2.1.30) 对 $t$ 求导得到：

$$
\begin{aligned}
\dot{\boldsymbol{x}} &= (\dot{r} \cos \theta - r \sin \theta \, \dot{\theta}, \dot{r} \sin \theta + r \cos \theta \, \dot{\theta}, 0), \\
|\dot{\boldsymbol{x}}|^2 &= \dot{r}^2 \cos^2 \theta - 2 r \dot{r} \sin \theta \cos \theta \, \dot{\theta} + r^2 \sin^2 \theta \, \dot{\theta}^2 \\
&\quad + \dot{r}^2 \sin^2 \theta + 2 r \dot{r} \sin \theta \cos \theta \, \dot{\theta} + r^2 \cos^2 \theta \, \dot{\theta}^2 \\
&= \dot{r}^2 + r^2 \dot{\theta}^2
\end{aligned}
$$

用此式将 (2.1.36) 用极坐标表示为：

$$
E = \frac{1}{2} (\dot{r}^2 + r^2 \dot{\theta}^2) - \frac{1}{r}
$$

将由式 (2.1.31) 得出的关系

$$
\dot{\theta} = \frac{M}{r^2} \tag{2.1.37}
$$

代入上式，得到：

$$
E = \frac{1}{2} \left(\dot{r}^2 + \frac{M^2}{r^2}\right) - \frac{1}{r} \tag{2.1.39}
$$

接着得到 $\dot{r}$：

$$
\dot{r} = \sqrt{2 \left( E + \frac{1}{r} \right) - \frac{M^2}{r^2}} \tag{2.1.40}
$$

对此式积分即可得到：

$$
t = \int \frac{d r}{\sqrt{2 \left( E + 1/r \right) - M^2 / r^2}} \tag{2.1.41}
$$

另外，

$$
d \theta = \frac{M}{r^2} d t = \frac{(M / r^2) \, d r}{\sqrt{2 \left( E + 1/r \right) - M^2 / r^2}} \tag{2.1.42}
$$

令 $r = 1/s$，则 $d r = -r^2 d s$，代入上式得：

$$
\begin{align}
d \theta &= \frac{M \, d s}{\sqrt{2 (E + s) - M^2 s^2}} \tag{2.1.43} \\
&= \frac{d s}{\sqrt{(2E / M^2 + 1 / M^4) - (s - 1 / M^2)^2}} \tag{2.1.44}
\end{align}
$$

这里，整体的符号被吸收到平方根的不确定性中。积分此式得到：

$$
\begin{align}
\theta &= \arccos \left( \frac{s - 1 / M^2}{\sqrt{2E / M^2 + 1 / M^4}} \right) + (\text{积分常数}) \tag{2.1.45} \\
&= \arccos \left( \frac{M^2 / r - 1}{\sqrt{2 E M^2 + 1}} \right) + (\text{积分常数}) \tag{2.1.46}
\end{align}
$$

通过适当选择 $\theta$ 的原点，可以将积分常数设为 0。令

$$
e = \sqrt{1 + 2 E M^2} \tag{2.1.47}
$$

则 (2.1.46) 变为：

$$
\cos \theta = \frac{M^2 / r - 1}{e} \tag{2.1.48}
$$

再令

$$
l = M^2 / e \tag{2.1.49}
$$

则有[^1]

$$
e \cos \theta = M^2 / r - 1 = e l / r - 1 \tag{2.1.50}
$$

整理得：[^2]

$$
e r \cos \theta = e l - r \tag{2.1.51}
$$

进一步整理得到：

$$
e = \frac{r}{l - r \cos \theta} \tag{2.1.52}
$$

如图 2.3 所示，这是一个圆锥曲线，其中 $e$ 是离心率 (eccentricity)，$l$ 是焦点参数 (focal parameter)，即从焦点 (focus) 到准线 (directrix) 的距离。

![图2.3 圆锥曲线](\img\posts\symplect_geom\2.3.webp)

## 2.2 分析力学的拉格朗日形式

直接使用牛顿运动定律来写下运动方程，由于必须使用伽利略坐标系，往往很麻烦。当系统具有复杂的约束条件时，这一点尤其显著。拉格朗日形式的分析力学通过使用变分原理（variational principle）来重写运动定律，为这个问题提供了一个优雅的解决方案。

### 2.2.1 变分原理

虽然可以通过微分法求函数的极值，但其在无限维空间中的推广就是变分法。变分原理的先驱是几何光学中的费马原理：

> **费马原理** 光沿着光程取极值的路径传播。

假设 $\mathbb{R}^3$ 空间充满非均匀介质，其折射率由位置的函数 $n(\boldsymbol{x})$ 给出。连接两点 $p, q \in \mathbb{R}^3$ 的所有路径的集合定义为

$$
P(p, q) = \{ \gamma : [0, 1] \rightarrow \mathbb{R}^3 \mid \gamma(0) = p, \gamma(1) = q \} \tag{2.2.1}
$$

这里，假设路径 $\gamma : [0, 1] \rightarrow \mathbb{R}^3$ 满足分段光滑等合理性条件。此时，路径 $\gamma$ 的（几何）长度由

$$
\ell[\gamma] = \int_{0}^{1} ds \tag{2.2.2}
$$

给出。其中，当将路径 $\gamma$ 用分量表示为 $\gamma(t) = (\gamma\_x(t), \gamma\_y(t), \gamma\_z(t))$ 时，无穷小线元 $ds$ 由

$$
ds = \sqrt{\left( \frac{d\gamma_x}{dt} \right)^2 + \left( \frac{d\gamma_y}{dt} \right)^2 + \left( \frac{d\gamma_z}{dt} \right)^2}  dt \tag{2.2.3}
$$

定义。将路径映射到其长度的映射

$$
\ell: P \rightarrow \mathbb{R} \tag{2.2.4}
$$

是路径空间上的函数。因为每条路径本身是一个函数 $\gamma:[0,1] \rightarrow \mathbb{R}^3$，所以 $\ell$ 是一个“函数的函数”（即，定义在函数空间上的函数）。通常，称“函数的函数”为**泛函** (functional)。长度 $\ell$ 是泛函的一个典型例子。众所周知，$\mathbb{R}^3$ 中连接两点最短的路径是由通过这两点的直线段给出的。

另一方面，光程由

$$
S[\gamma] = \int_0^1 n  ds \tag{2.2.5}
$$

定义。例如，考虑 $\mathbb{R}^3$ 内的上半空间 $\mathbb{R}^2 \times \mathbb{R}^{>0}$ 和下半空间 $\mathbb{R}^2 \times \mathbb{R}^{<0}$ 由不同介质填充，并且在边界 $\mathbb{R}^2 \times 0$ 处折射率发生不连续变化的情况。给定上半空间一点和下半空间一点时，在连接这两点的分段光滑路径中，使光程 (2.2.5)取极值的路径是由斯涅耳定律

$$
n_1 \sin \theta_1 = n_2 \sin \theta_2 \tag{2.2.6}
$$

所表征的两段直线段的合并集合。这里 $n\_1$ 和 $n\_2$ 分别是上半空间和下半空间的折射率，$\theta\_1$ 和 $\theta\_2$ 分别是上半空间和下半空间的入射角。后来，通过始于Foucault和Fizeau等人的实验，人们发现折射率与介质中的光速成反比。因此，费马原理也可以表述为：光沿着传播时间取极值的路径前进。

### 2.2.2 欧拉-拉格朗日方程

固定一个流形 $W$、初始时刻 $t\_0$、终止时刻 $t\_1$，以及初始位置 $q\_0 \in W$ 和终止位置 $q\_1 \in W$。考虑路径空间

$$
P = \{ \gamma : [t_0, t_1] \to W \mid \gamma(t_0) = q_0, \gamma(t_1) = q_1 \} \tag{2.2.7}
$$

上的一个泛函，该泛函由 $W$ 的切丛 $TW$ 上的一个函数 $L : TW \to \mathbb{R}$通过下式给出：

$$
S[\gamma] = \int_{t_0}^{t_1} L(\gamma, \dot{\gamma})  dt \tag{2.2.8}
$$

这里$W$称作**位形空间** (configuration space), $L$是**Lagrange函数** (Lagrangian),  $S$ 称为**作用量泛函** (action functional)。取 $W$ 的局部坐标 $\varphi : U \to \mathbb{R}^n$，并记

$$
\varphi \circ \gamma = \boldsymbol{q} = (q^1, \cdots, q^n) : [t_0, t_1] \rightarrow \mathbb{R}^n \tag{2.2.9}
$$

对于满足边界条件

$$
\delta \boldsymbol{q}(t_0) = \delta \boldsymbol{q}(t_1) = 0 \tag{2.2.10}
$$

的任意函数 $\delta \boldsymbol{q}: [t\_0, t\_1] \rightarrow \mathbb{R}^n$，泛函 $S$ 的**变分** (variation)

$$
\delta S := S[\boldsymbol{q} + \delta \boldsymbol{q}] - S[\boldsymbol{q}] \tag{2.2.11}
$$

中关于 $\delta \boldsymbol{q}$ 的一阶项为：

$$
\begin{align}
\delta S &= \int_{t_0}^{t_1} \left( \frac{\partial L}{\partial \boldsymbol{q}} \cdot \delta \boldsymbol{q} + \frac{\partial L}{\partial \dot{\boldsymbol{q}}} \cdot \delta \dot{\boldsymbol{q}} \right) dt \tag{2.2.12} \\
&= \left[ \frac{\partial L}{\partial \dot{\boldsymbol{q}}} \cdot \delta \boldsymbol{q} \right]_{t_0}^{t_1} + \int_{t_0}^{t_1} \left( \frac{\partial L}{\partial \boldsymbol{q}} \cdot \delta \boldsymbol{q} - \frac{d}{dt} \left( \frac{\partial L}{\partial \dot{\boldsymbol{q}}} \right) \cdot \delta \boldsymbol{q} \right) dt \tag{2.2.13} \\
&= \int_{t_0}^{t_1} \left( \frac{\partial L}{\partial \boldsymbol{q}} - \frac{d}{dt} \left( \frac{\partial L}{\partial \dot{\boldsymbol{q}}} \right) \right) \cdot \delta \boldsymbol{q}  dt \tag{2.2.14}
\end{align}
$$

这里用到了通过分部积分出现的边界项因边界条件 (2.2.10) 而消失的事实。根据**变分法基本引理** (fundamental lemma of calculus of variations)，

$$
\int_{t_0}^{t_1} \boldsymbol{f}(t) \cdot \boldsymbol{g}(t)  dt = 0 \tag{2.2.15}
$$

对任意函数 $\boldsymbol{g} : \mathbb{R} \rightarrow \mathbb{R}^n$ 成立的充要条件是 $\boldsymbol{f} : \mathbb{R} \rightarrow \mathbb{R}^n$ 恒等于 $\boldsymbol{0}$。因此，为了使 $S$ 的变分 $\delta S$ 对 $\boldsymbol{q}$ 的任意变分 $\delta \boldsymbol{q}$ 都为零，$\boldsymbol{q}$ 必须满足**欧拉-拉格朗日方程** (Euler-Lagrange equation)：

$$
\frac{\partial L}{\partial \boldsymbol{q}} - \frac{d}{dt} \left( \frac{\partial L}{\partial \dot{\boldsymbol{q}}} \right) = 0 \tag{2.2.16}
$$

在拉格朗日形式的分析力学中，物理系统通过指定位形空间 $W$ 和拉格朗日函数 $L : TW \rightarrow \mathbb{R}$ 来确定，而系统的运动则实现为作用量的驻点，即使变分 $\delta S$ 为零的路径。指定位形空间就确定了运动的舞台，而指定拉格朗日函数则同时确定了运动定律和力的定律。拉格朗日函数的确定应使得作用量的驻点（即欧拉-拉格朗日方程的解）与观测到的实际运动相符，但在简单情况下，它由系统的动能 $K$ 和势能 $V$ 给出：

$$
L = K - V \tag{2.2.17}
$$

> **注意 2.2.1** 也可以考虑拉格朗日函数不是定义在切丛 $TW$ 上，而是定义在某个$k$阶($k>2$)的射流丛 ($k$-th jet bundle) $J\_kW$ 上的理论（高阶导数理论）。然而，此类理论在此不予讨论。

这里，我们来看一下前面例子中的拉格朗日函数。

**例 2.2.2（简谐振动）** $W = \mathbb{R}$，取 $TW \cong \mathbb{R} \times \mathbb{R}$ 的坐标为 $(x, v)$ 时，拉格朗日函数由

$$
L(x, v) = \frac{1}{2} m v^2 - \frac{1}{2} k x^2 - m g x \tag{2.2.18}
$$

给出。

$$
\begin{align}
\frac{\partial L}{\partial x} &= -k x - m g, \tag{2.2.19} \\
\frac{\partial L}{\partial v} &= m v \tag{2.2.20}
\end{align}
$$

因此，欧拉-拉格朗日方程为

$$
(-k x - m g) - \frac{d}{d t}(m \dot{x}) = 0 \tag{2.2.21}
$$

**例 2.2.3（单摆）** $W = S^1$，取 $TW \cong S^1 \times \mathbb{R}$ 的坐标为 $(\theta, \omega)$ 时，拉格朗日函数由

$$
L(\theta, \omega) = \frac{1}{2} m (R \omega)^2 + m g R \cos \theta \tag{2.2.22}
$$

给出。

$$
\begin{align}
\frac{\partial L}{\partial \theta} &= -m g R \sin \theta, \tag{2.2.23} \\
\frac{\partial L}{\partial \omega} &= m R^2 \omega \tag{2.2.24}
\end{align}
$$

因此，欧拉-拉格朗日方程为

$$
-m g R \sin \theta + \frac{d}{d t}(m R^2 \dot{\theta}) = 0 \tag{2.2.25}
$$

**例 2.2.4（开普勒问题）** $\mathbb{R}^3 \times \mathbb{R}^3$，取 $TW$ 的坐标为 $(\boldsymbol{x}, \boldsymbol{v})$ 时，拉格朗日函数由

$$
L(x,v)=\frac{1}{2}m_1\left|\dot{\boldsymbol{x}}_1\right|^2+\frac{1}{2}m_2\left|\dot{\boldsymbol{x}}_2\right|^2+\frac{m_1m_2}{\left|\boldsymbol{x}_1-\boldsymbol{x}_2\right|} \tag{2.2.26}
$$

给出。利用质心位置

$$
\boldsymbol{x}' = \frac{m_1 \boldsymbol{x}_1 + m_2 \boldsymbol{x}_2}{m_1 + m_2} \tag{2.2.27}
$$

和相对坐标

$$
\boldsymbol{x} = \boldsymbol{x}_1 - \boldsymbol{x}_2 \tag{2.2.28}
$$

可将 $\boldsymbol{x}\_1$, $\boldsymbol{x}\_2$ 表示为

$$
\begin{align}
\boldsymbol{x}_1 &= \frac{m_2}{m_1 + m_2} \boldsymbol{x} + \boldsymbol{x}', \tag{2.2.29} \\
\boldsymbol{x}_2 &= -\frac{m_1}{m_1 + m_2} \boldsymbol{x} + \boldsymbol{x}' \tag{2.2.30}
\end{align}
$$

因此，拉格朗日函数 (2.2.26) 可写为

$$
L = \frac{1}{2} \frac{m_1 m_2}{m_1 + m_2} |\dot{\boldsymbol{x}}|^2 + \frac{1}{2} (m_1 + m_2) |\dot{\boldsymbol{x}}'|^2 + \frac{m_1 m_2}{|\boldsymbol{x}|} \tag{2.2.31}
$$

### 2.2.3 动量守恒律

与牛顿形式的力学相比，拉格朗日形式的分析力学的优点之一体现在动量守恒律的处理上。对于某个 $i \in \\{1, \ldots, n\\}$，如果拉格朗日函数 $L$ 不显含 $q^i$，即满足

$$
\frac{\partial L}{\partial q^i} = 0 \tag{2.2.32}
$$

则称 $q^i$ 为**循环坐标** (cyclic coordinate)。此时，由欧拉-拉格朗日方程立即得到

$$
\frac{d}{d t} \left( \frac{\partial L}{\partial \dot{q}^i} \right) = 0 \tag{2.2.33}
$$

量

$$
p_i := \frac{\partial L}{\partial \dot{q}^i} \tag{2.2.34}
$$

称为坐标 $q^i$ 的**共轭动量** (conjugate momentum)。(2.2.33) 表明，与循环坐标共轭的动量是守恒的。某个坐标是循环坐标，表明系统在该坐标的平移变换下具有不变性。如下文所述，动量 $p\_i$ 生成 (generate) 了平移变换

$$
\boldsymbol{q} = (q^1, \ldots, q^{i-1}, q^i, q^{i+1}, \ldots, q^n) \mapsto \boldsymbol{q}' = (q^1, \ldots, q^{i-1}, q^i + a, q^{i+1}, \ldots, q^n) \tag{2.2.35}
$$

系统在该变换下的不变性与该动量守恒是等价的。

## 2.3 Legendre 变换[^4]

称向量空间 $V$ 上的函数 $f: V \to \mathbb{R}$ 是**严格凸** (strictly convex) 的，如果对于任意的 $v, w \in V$ 和 $t \in (0,1)$，有

$$
f((1-t)v+tw) < (1-t)f(v)+tf(w) \tag{2.3.1}
$$

$\mathbb{R}^n$ 上的光滑函数 $f$ 是严格凸的充分必要条件是，其 Hessian 矩阵 $ \operatorname{Hess}(f) = (\partial\_i \partial\_j f)^n\_{i,j=1} $ 是正定的（即所有特征值均为正）。此时，映射

$$
df: V \to V^*, \quad v \mapsto (df)_v \in T_v^*V \cong V^* \tag{2.3.2}
$$

是单射。此映射用坐标表示为

$$
v \mapsto p = \frac{\partial f}{\partial v} \tag{2.3.3}
$$

将此映射的逆映射写为 $v = v(p)$，并定义 $f$ 的 **Legendre 变换** (Legendre transform) 为[^3]

$$
f^*: V^* \to \mathbb{R}, \quad p \mapsto p \cdot v(p) - f(v(p)) \tag{2.3.4}
$$

此时，有

$$
\frac{\partial f^*}{\partial p} = \frac{\partial (p \cdot v)}{\partial p} - \frac{\partial f}{\partial v} \cdot \frac{\partial v}{\partial p} = v + p \cdot \frac{\partial v}{\partial p} - \frac{\partial f}{\partial v} \cdot \frac{\partial v}{\partial p} = v \tag{2.3.5}
$$

并且

$$
\begin{aligned}
f^{**}(v) &= v \cdot p - f^*(p) \\
&= v \cdot p - (p \cdot v - f(v)) \\
&= f(v) 
\end{aligned}\tag{2.3.6}
$$

即，进行两次 Legendre 变换会恢复原函数。

## 2.4 Legendre-Fenchel 变换

Legendre 变换的一个更概念性的理解由 **Legendre-Fenchel 变换**（Legendre-Fenchel transform）提供。这是 Legendre 变换向不一定凸或不一定光滑的函数的一种推广。对于向量空间 $V$ 上的函数 $f: V \rightarrow \mathbb{R}$，其 Legendre-Fenchel 变换 $f^\*: V^\* \rightarrow \mathbb{R}$ 是将 $p \in V^*$ 映射为

$$
f^*(p) = \sup_{v \in V} (\langle p, v \rangle - f(v)) \tag{2.4.1}
$$

的映射。

对于函数 $f$，定义 $V \times \mathbb{R}$ 的子集 $S$ 为

$$
S := \{(v, x) \in V \times \mathbb{R} \mid f(v) \leq x\} \tag{2.4.2}
$$

集合 $S$ 的**支撑超平面** (supporting hyperplane) 指的是 $V \times \mathbb{R}$ 中的一个超平面 $H$，它与 $S$ 相交，并且 $V \times \mathbb{R} \setminus H$ 的两个连通分支中至少有一个与 $S$ 不相交。假设支撑超平面 $H$ 可以表示为某个仿射函数

$$
g: V \to \mathbb{R}, \quad v \mapsto p \cdot v + a \tag{2.4.3}
$$

的图像：

$$
H = \{(v, x) \in V \times \mathbb{R} \mid x = g(v)\}. \tag{2.4.4}
$$

其中，$p \in V^*$ 是 $g$ 的斜率，$a$ 是 $g$ 在原点的值。由支撑超平面的定义，存在某个 $v\_0 \in V$，使得

$$
f(v_0) = g(v_0) = p \cdot v_0 + a \tag{2.4.5}
$$

对于任意 $p \in V^*$，斜率为 $p$ 的支撑超平面如果存在则是唯一的。包含 $S$ 的最小凸集合称为 $S$ 的**凸包** (convex hull)，记作 $\operatorname{Conv}(S)$。具体来说，它是通过将 $S$ 中任意两点的连线添加到 $S$ 中而得到的：

$$
\operatorname{Conv}(S) = \{(1 - t)p + tq \mid p, q \in S,  t \in [0, 1]\}. \tag{2.4.6}
$$

由定义显然，$S$ 的所有支撑超曲面的集合只依赖于 $S$ 的凸包。此时，将 $-a$ 视为 $p$ 的函数，即为 $f$ 的 Legendre-Fenchel 变换。对于此 Legendre-Fenchel 变换，有：

- 光滑凸函数的 Legendre-Fenchel 变换与 Legendre 变换一致。

- $f^*$ 总是凸函数。

- 能从 Legendre-Fenchel 变换后的函数 $f^*$ 复原出原函数 $f$ 的充分必要条件是 $f$ 是凸函数。

- 对凸函数进行两次 Legendre-Fenchel 变换会回到原函数。

确认这些性质是很好的练习问题。

## 2.5 分析力学的哈密顿形式

当拉格朗日函数 $L: TW \rightarrow \mathbb{R}$ 满足以下两个性质时：
-   它是 $TW$ 上的函数（即，只依赖于路径的一阶导数）
-   它在 $TW$ 的每个纤维上的限制是严格凸的

则可以通过对拉格朗日函数 $L$ 在 $TW$ 的每个纤维上进行 Legendre 变换，得到一个新的函数 $H: T^\*W \rightarrow \mathbb{R}$。此时，称 $W$ 为**位形空间** (configuration space)，$T^\*W$ 为**相空间** (phase space)，$H$ 为**哈密顿函数** (Hamiltonian)。取 $W$ 的坐标为 $q$，并取 $q$ 对应的 $TW$ 和 $T^\*W$ 的纤维方向坐标分别为 $v$ 和 $p$，则 $L = L(q, v)$ 与 $H = H(q, p)$ 的关系由

$$
p = \frac{\partial L}{\partial v}, \quad
H(q, p) = p \cdot v(q, p) - L(q, v(q, p)) \tag{2.5.1}
$$

以及

$$
v = \frac{\partial H}{\partial p},\quad
L(q, v) = v \cdot p(q, v) - H(p(q, v), q) \tag{2.5.2}
$$

给出。由此可得，

$$
\begin{align}
\frac{\partial L}{\partial q} &= \frac{\partial}{\partial q} (v \cdot p(q, v) - H(p(q, v), q)) \tag{2.5.3} \\
&= v \cdot \frac{\partial p}{\partial q} - \frac{\partial H}{\partial p} \cdot \frac{\partial p}{\partial q} - \frac{\partial H}{\partial q} \tag{2.5.4} \\
&= v \cdot \frac{\partial p}{\partial q} - v \cdot \frac{\partial p}{\partial q} - \frac{\partial H}{\partial q} \tag{2.5.5} \\
&= -\frac{\partial H}{\partial q} \tag{2.5.6}
\end{align}
$$

并且 $p$ 和 $q$ 的时间演化满足

$$
\begin{align}
\frac{d p}{d t} &= \frac{d}{d t} \left( \frac{\partial L}{\partial v} \right) = \frac{\partial L}{\partial q} = -\frac{\partial H}{\partial q}, \tag{2.5.7} \\
\frac{d q}{d t} &= v = \frac{\partial H}{\partial p}, \tag{2.5.8}
\end{align}
$$

即可以写成如下

$$
\frac{d p}{d t} = -\frac{\partial H}{\partial q}, \quad
\frac{d q}{d t} = \frac{\partial H}{\partial p} \tag{2.5.9}
$$

对称的形式。 (2.5.9) 称为**哈密顿正则运动方程** (Hamilton’s canonical equation of motion)。

为了用变分原理重写运动方程，将作用量重新写为

$$
\begin{align}
S &= \int_{t_0}^{t_1} L(q, \dot{q})  d t \tag{2.5.10} \\
&= \int_{t_0}^{t_1} \left( p(q, \dot{q}) \cdot v  d t - H(p(q, \dot{q}), q)  d t \right) \tag{2.5.11} \\
&= \int_{t_0}^{t_1} \left( p(q, \dot{q}) \cdot d q - H(p(q, \dot{q}), q)  d t \right) \tag{2.5.12}
\end{align}
$$

此时 $p$ 仍然是 $q$ 和 $\dot{q}$ 的函数，$S$ 是定义在 $W$ 上路径空间

$$
\{q: [t_0, t_1] \to W \mid q(t_0) = q_0,  q(t_1) = q_1\} \tag{2.5.13}
$$

上的泛函。现在，我们“忘记” $p$ 是 $q$ 和 $\dot{q}$ 的函数，而考虑对其进行自由变分。也就是说，将 $S$ 视为定义在 $T^*W$ 上路径空间

$$
\{(q, p): [t_0, t_1] \to T^*W \mid (q(t_0), p(t_0)) = (q_0, p_0),  (q(t_1), p(t_1)) = (q_1, p_1)\} 
$$

上定义的函数

$$
(q, p) \mapsto \int_{t_0}^{t_1} \left( p \cdot d q - H(q, p)  d t \right) \tag{2.5.14}
$$

并对其取变分。于是有，

$$
\begin{align}
\delta S &= \int_{t_0}^{t_1} \left( \delta p \cdot d q + p \cdot d(\delta q) - \left( \frac{\partial H}{\partial p} \cdot \delta p + \frac{\partial H}{\partial q} \cdot \delta q \right)  d t \right) \tag{2.5.15} \\
&= \int_{t_0}^{t_1} \left( \delta p \cdot d q - d p \cdot \delta q - \left( \frac{\partial H}{\partial p} \cdot \delta p + \frac{\partial H}{\partial q} \cdot \delta q \right)  d t \right) \tag{2.5.16} \\
&= \int_{t_0}^{t_1} \left( \left( \frac{d q}{d t} - \frac{\partial H}{\partial p} \right) \cdot \delta p - \left( \frac{d p}{d t} + \frac{\partial H}{\partial q} \right) \cdot \delta q \right)  d t \tag{2.5.17}
\end{align}
$$

这里，从 (2.5.15) 到 (2.5.16) 的转换中，对第二项进行了分部积分并舍弃了边界项：

$$
\int_{t_0}^{t_1} p \cdot d(\delta q) = \left[ p \cdot \delta q \right]_{t_0}^{t_1} - \int_{t_0}^{t_1} d p \cdot \delta q = - \int_{t_0}^{t_1} d p \cdot \delta q \tag{2.5.18}
$$

根据变分法基本引理，对于任意变分 $\delta S = 0$ 的充要条件由哈密顿正则运动方程

$$
\frac{d q}{d t} = \frac{\partial H}{\partial p}, \quad \frac{d p}{d t} = -\frac{\partial H}{\partial q} \tag{2.5.19}
$$

给出。

在拉格朗日形式的分析力学中：
-   作用量是位形空间 $W$ 上路径的泛函，
-   存在一个称为拉格朗日函数的 $TW$ 上的函数 $L$，
-   作用量通过沿路径对拉格朗日函数积分来定义。

而在哈密顿形式的分析力学中：
-   存在一个称为哈密顿函数的相空间 $T^*W$ 上的函数 $H$，
-   $H$ 通过 Legendre 变换与 $L$ 相关联，
-   作用量是相空间 $T^*W$ 上路径的泛函，
-   作用量通过对 1 次微分形式 $p \cdot d q - H  d t$ 沿着路径积分来定义。

称 1 次微分形式 $p \cdot d q$ 为 **Liouville 形式** (Liouville 1-form)，称 1 次微分形式 $p \cdot d q - H  d t$ 为 **Poincaré-Cartan 积分不变量** (Poincaré-Cartan integral invariant)。

## 2.6 相对论性点粒子

在牛顿力学中，两个惯性系 $(x, t)$ 和 $(x', t')$ 之间的坐标变换由**伽利略变换** (Galilean transformation)

$$
\begin{cases}
x' = x - v t, \\
t' = t
\end{cases}
\tag{2.6.1}
$$

给出。而在狭义相对论中，与之对应的是**洛伦兹变换** (Lorentz transformation)[^5]

$$
\begin{cases}
x' = \dfrac{1}{\sqrt{1 - v^2 / c^2}} (x - v t), \\
t' = \dfrac{1}{\sqrt{1 - v^2 / c^2}} \left(t - \dfrac{v x}{c^2} \right)
\end{cases}
\tag{2.6.2}
$$

点粒子的作用量中，具有洛伦兹不变性的最简单泛函是

$$
S = -m c \int ds \tag{2.6.3}
$$

其中，

$$
ds^2 = c^2 dt^2 - dx^2 = c^2 dt^2 - dx^2 - dy^2 - dz^2 \tag{2.6.4}
$$

是**无穷小世界线元** (infinitesimal spacetime interval)。$m$ 和 $c$ 是为调整量纲而引入的常数，负号是为了确保 $S$ 在驻点处取最小值而非最大值。

将其重写为

$$
S = -m c^2 \int \sqrt{1 - \dot{\boldsymbol{x}}^2 / c^2}  dt \tag{2.6.5}
$$

可得到**拉格朗日函数**

$$
L = -m c^2 \sqrt{1 - \dot{\boldsymbol{x}}^2 / c^2} \tag{2.6.6}
$$

其**正则动量**为

$$
\boldsymbol{p} = \frac{\partial L}{\partial \dot{\boldsymbol{x}}} = \frac{m \dot{\boldsymbol{x}}}{\sqrt{1 - \dot{\boldsymbol{x}}^2 / c^2}} \tag{2.6.7}
$$

**哈密顿函数**为

$$
H = \boldsymbol{p} \cdot \dot{\boldsymbol{x}} - L 
= \frac{m c^2}{\sqrt{1 - \dot{\boldsymbol{x}}^2 / c^2}} \tag{2.6.8}
$$

令 $\dot{\boldsymbol{x}} = 0$，可得到点粒子的**静止能量**

$$
E = m c^2 \tag{2.6.9}
$$

## 2.7 泊松定理

对于相空间上的函数 $f(\boldsymbol{q}, \boldsymbol{p})$ 和 $g(\boldsymbol{q}, \boldsymbol{p})$，其**泊松括号** (Poisson bracket) 定义为

$$
\{f, g\} = \sum_{i=1}^{n} \left( \frac{\partial f}{\partial p_i} \frac{\partial g}{\partial q_i} - \frac{\partial g}{\partial p_i} \frac{\partial f}{\partial q_i} \right) \tag{2.7.1}
$$

利用泊松括号，哈密顿正则方程可以重写为

$$
\frac{d p_i}{d t} = \{H, p_i\}, \quad 
\frac{d q_i}{d t} = \{H, q_i\} \tag{2.7.2}
$$

从定义容易看出泊松括号具有以下三个性质：

-   **反对称性** (Antisymmetry): $\\{f, g\\} = -\\{g, f\\}$。
-   **莱布尼茨法则** (Leibniz rule): $\\{f, g h\\} = \\{f, g\\} h + g \\{f, h\\}$。
-   **雅可比恒等式** (Jacobi identity): $\\{f, \\{g, h\\}\\} + \\{g, \\{h, f\\}\\} + \\{h, \\{f, g\\}\\} = 0$。

相空间上函数 $f(\boldsymbol{p}, \boldsymbol{q})$ 的时间演化由下式给出

$$
\begin{align}
\frac{d f}{d t} &= \frac{\partial f}{\partial \boldsymbol{p}} \cdot \frac{d \boldsymbol{p}}{d t} + \frac{\partial f}{\partial \boldsymbol{q}} \cdot \frac{d \boldsymbol{q}}{d t}\tag{2.7.3} \\
&= -\frac{\partial f}{\partial \boldsymbol{p}} \cdot \frac{\partial H}{\partial \boldsymbol{q}} + \frac{\partial f}{\partial \boldsymbol{q}} \cdot \frac{\partial H}{\partial \boldsymbol{p}} \tag{2.7.4}\\
&= \{H, f\} \tag{2.7.5}
\end{align}
$$

在时间演化下保持不变的相空间上的函数称为系统的**守恒量** (conserved quantity)。这等价于该函数与哈密顿函数的泊松括号为零。由泊松括号的莱布尼茨法则可知，若 $f$ 和 $g$ 是系统的守恒量，则它们的乘积 $f g$ 也是系统的守恒量。这被称为**泊松定理** (Poisson's theorem)。

## 2.8 泊松流形

通过抽象相空间 $T^*W$ 上的泊松括号 (2.7.1) 所具有的性质，我们得到以下定义：

**定义 2.8.1.** **泊松流形** (Poisson manifold) 是指一个流形 $M$ 与一个映射 $\\{-,-\\} : C^\infty(M) \times C^\infty(M) \to C^\infty(M)$ 所组成的对 $(M, \\{-,-\\})$，它满足以下三个条件：

1.  反对称性: $\\{f, g\\} = -\\{g, f\\}$
2.  莱布尼茨法则: $\\{f, gh\\} = \\{f, g\\} h + g\\{f, h\\}$
3.  雅可比恒等式: $\\{f, \\{g, h\\}\\} + \\{g, \\{h, f\\}\\} + \\{h, \\{f, g\\}\\} = 0$

给定一个泊松流形 $(M, \\{-,-\\})$ 及其上的一个函数 $H \in C^\infty(M)$，则由 $H$ 生成的 $M$ 上的**哈密顿向量场** (Hamiltonian vector field) $X\_H$ 由

$$
X_H = \{H, -\} \tag{2.8.1}
$$

确定。该向量场生成的流

$$
\varphi_H : M \times \mathbb{R} \to M \tag{2.8.2}
$$

称为以 $H$ 为哈密顿函数的 $(M, \\{-,-\\})$ 上的**哈密顿流** (Hamiltonian flow)。

对于泊松流形 $(M, \\{-, -\\})$，将 $M$ 上的函数 $f$ 映射到向量场 $X\_f$ 的映射[^8]

$$
X_\bullet : C^\infty(M) \to \Gamma(TM) \tag{2.8.3}
$$

是一个李代数的同态：

**命题 2.8.2.** 对于任意的 $f, g \in C^\infty(M)$，有

$$
[X_f, X_g] = X_{\{f, g\}}. \tag{2.8.4}
$$

证明． 对于任意的 $h \in C^\infty(M)$，有

$$
\begin{align}
[X_f, X_g]h &= X_f X_g h - X_g X_f h \tag{2.8.5} \\
&= \{f, \{g, h\}\} - \{g, \{f, h\}\} \tag{2.8.6} \\
&= \{f, \{g, h\}\} + \{g, \{h, f\}\} \tag{2.8.7} \\
&= -\{h, \{f, g\}\} \tag{2.8.8} \\
&= \{\{f, g\}, h\} \tag{2.8.9} \\
&= X_{\{f, g\}} h \tag{2.8.10}
\end{align}
$$

由此得证，$[X\_f, X\_g] = X\_{\\{f, g\\}}$。

## 2.9 诺特定理

在哈密顿形式的分析力学中，作为运动舞台的相空间是预先给定的，通过选择其上的一个函数 $f$，就确定了以该函数为哈密顿函数的哈密顿流 $\varphi : M \times \mathbb{R} \to M$。当哈密顿函数 $H$ 沿此流保持不变时（即，对于任意的 $x \in M$，$H (\varphi (x, s))$ 不依赖于 $s \in \mathbb{R}$），则称 $f$ 生成的哈密顿流是以 $H$ 为哈密顿函数的哈密顿系统的**对称性**（symmetry）。$f$ 生成的哈密顿流是以 $H$ 为哈密顿函数的哈密顿系统的对称性的充分必要条件是[^6]

$$
\frac{dH}{ds} = \{f, H\} = 0 \tag{2.9.1}
$$

另一方面，$f$ 是以 $H$ 为哈密顿函数的哈密顿系统的**守恒量**的充分必要条件是

$$
\frac{df}{dt} = \{H, f\} = 0 \tag{2.9.2}
$$

由 Poisson 括号的反对称性可知，(2.9.1) 和 (2.9.2) 是等价的。也就是说，对称性和守恒律是同一回事。这一事实称为 **诺特定理**（Noether’s theorem）。这个定理具备真正伟大定理的两个特征：
-   论断深刻，且具有众多推论；
-   证明是平凡的。

下面列举几个该定理的典型应用实例：

**例 2.9.1.** 称以相空间上的函数为哈密顿函数的哈密顿系统为**自治系统** (autonomous system)。系统是自治系统等价于系统在时间平移下不变（即，哈密顿函数不显含时间[^7]）。哈密顿函数生成的流是时间平移（即，系统的时间演化），这种情况下的诺特定理断言：系统在时间平移下不变等价于能量守恒。（含时哈密顿函数的例子将在 2.12 节看到。）

**例 2.9.2.** 当存在某个 $i$，使得哈密顿函数 $H$ 不依赖于 $q\_i$ 时，称 $q\_i$ 为**循环坐标**。此时，与 $q\_i$ 正则共轭的动量 $p\_i$ 成为以 $H$ 为哈密顿函数的哈密顿系统的守恒量。注意到以 $p\_i$ 为哈密顿函数的哈密顿向量场是

$$
X_{p_i} = \frac{\partial}{\partial q_i} \tag{2.9.3}
$$

其生成的流是关于 $q\_i$ 的平移，因此这种情况下的诺特定理断言：系统在某个坐标下的空间平移不变性等价于与该坐标正则共轭的动量守恒定律。

**例 2.9.3.** 考虑球坐标 $(r, \theta, \phi)$，作为例 2.9.2 的特殊情况，系统具有球对称性，即势能 $V(r, \theta, \phi)$ 仅依赖于 $r$，而不依赖于 $\theta$ 和 $\phi$，等价于系统的角动量 $p\_\theta$ 和 $p\_\phi$ 守恒。当势能 $V$ 依赖于 $r$ 和 $\theta$ 但不依赖于 $\phi$ 时，在正则共轭的动量中，$p\_r$ 和 $p\_\theta$ 不守恒，但 $p\_\phi$ 守恒。

## 2.10 叶状结构

流形 $M$ 上的一个**叶状结构** (foliation) 是指将 $M$ 划分为一族互不相交的 $p$ 维连通子流形 $\mathcal{F} = \\{L\_\alpha\\}\_{\alpha \in A}$ 的分割：

$$
M = \bigcup_{\alpha \in A} L_\alpha, \quad \text{若 } \alpha \neq \beta \text{ 则 } L_\alpha \cap L_\beta = \emptyset \tag{2.10.1}
$$

使得对于 $M$ 的任意点 $p$，存在一个开邻域 $U \ni p$ 和一个微分同胚 $\varphi: U \to \mathbb{R}^n$，使得对于任意 $\alpha \in A$ 和 $U \cap L\_\alpha$ 的任意连通分支 $F$，$\varphi(F)$ 可由某个 $c \in \mathbb{R}^{n-p}$ 表示为：

$$
\varphi(F) = \{c\} \times \mathbb{R}^p \subset \mathbb{R}^n \tag{2.10.2}
$$

这里的子流形指的是单浸入 (immersion) 的像。此时的 $p$ 称为叶状结构的**维数** (dimension)，$\mathcal{F}$ 的元素称为叶状结构的**叶** (leaf)。

叶状结构的一个典型例子是，对于给定的无理数 $\theta \in \mathbb{R} \setminus \mathbb{Q}$，将环面 $T^2 = \mathbb{R}^2/\mathbb{Z}^2$ 按斜率为 $\theta$ 的直线进行分割的 **Kronecker 叶状结构** (Kronecker foliation)：

$$
T^2 = \bigcup_{[\alpha] \in \mathbb{R}/(\mathbb{Z}+\theta\mathbb{Z})} L_\alpha, \quad L_\alpha = \{[(x,y)] \in \mathbb{R}^2/\mathbb{Z}^2 \mid y = \theta x + \alpha\}.
$$

流形切丛的子丛称为**切分布** (distribution)。切分布 $E \subset TM$ 若满足

$$
X, Y \in \Gamma(E) \text{ 蕴含 } [X,Y] \in \Gamma(E) \tag{2.10.3}
$$

则称其为**对合的** (involutive)。

对于切分布 $E \subset TM$，考虑由

$$
\{ \omega \in \Gamma(T^*M) \mid \text{对于任意 } X \in \Gamma(M, E) \text{ 有 } \omega(X) = 0 \} \tag{2.10.4}
$$

生成的[^10]

$$
A^*(M) = \bigoplus_{p=0}^{\dim M} \Gamma \left( \bigwedge^p T^*M \right) \tag{2.10.5}
$$

的理想，记作 $\mathscr{I}(E)$。若 $A^*(M)$ 中的理想 $\mathscr{I}$ 满足 $d\mathscr{I} \subset \mathscr{I}$，则称 $\mathscr{I}$ 为**微分理想** (differential ideal)。

若子流形 $N$ 满足对于任意 $p \in N$ 都有 $T\_pN = E\_p \subset T\_pM$，则称 $N$ 为 $E$ 的**积分流形** (integral manifold)。在连通的积分流形中，关于包含关系极大的那些称为**极大积分流形** (maximal integral manifold)。若对于任意点 $p \in M$，都存在一个通过 $p$ 的 $E$ 的积分流形，则称 $E$ 是**可积的** (integrable)。对于流形 $M$ 上的可积切分布 $E \subset TM$，其极大积分流形的集合确定了 $M$ 的一个叶状结构。此叶状结构的维数等于 $E$ 的秩。

**定理 2.10.1 (Frobenius 定理 (Frobenius theorem)).** 对于切分布 $E \subset TM$，以下三个条件等价：

1.  $E$ 是对合的。
2.  $\mathscr{I}(E)$ 是微分理想。
3.  $E$ 是可积的。

此定理的证明可参见，例如 [^9]。

## 2.11 辛流形

对于 Poisson 流形 $(M, \\{-,-\\})$ 上的点 $p \in M$，由

$$
E_p = \{X_f(p) \in T_pM \mid f \in C^\infty(M)\} \tag{2.11.1}
$$

定义的子空间构成 $TM$ 的一个子丛，记作 $E$。由命题 2.8.2 知

$$
[X_f, X_g] = X_{\{f,g\}} \tag{2.11.2}
$$

因此 $E$ 是对合的，根据定理 2.10.1，$E$ 是可积的。取 $E$ 的一个极大积分流形，记作 $F$。

**命题 2.11.1.** 对于任意 $p \in F$，映射

$$
\gamma_p : T_pF \to T_p^*F, \quad X_f \mapsto d(f|_F) \tag{2.11.3}
$$

是一个双射。

证明：由 $F$ 的定义，对于任意 $g \in C^\infty(M)$ 有 $X\_g \in T\_pF$，因此对于任意 $f \in C^\infty(M)$ 有

$$
d(f|_F)(X_g) = df(X_g) \tag{2.11.4}
$$

此外，$T\_p F$ 的任意元都可表示为某个 $g \in C^\infty(M)$ 的 $X\_g$ 的形式。

$$
\begin{align}
df(X_g) &= X_g f \tag{2.11.5} \\
&= \{g, f\} \tag{2.11.6} \\
&= -\{f, g\} \tag{2.11.7} \\
&= -X_f g \tag{2.11.8}
\end{align}
$$

因此，$X\_f = 0$ 与 $d(f\|\_F) = 0$ 等价。这表明 $\gamma\_p$ 是良定义的且是单射。维数相等的向量空间之间的单射线性映射是同构映射，因此 $\gamma\_p$ 是同构映射。□

因此，对于 $M$ 的 Poisson 结构确定的 $M$ 上的叶状结构的叶，由 $M$ 的 Poisson 结构确定的映射 $\gamma: TF \rightarrow T^*F$ 是一个向量丛同构。利用此，定义 $\omega \in \Gamma(T^\*F \otimes T^\*F)$ 为：对于 $p \in F$ 和 $X, Y \in T\_p F$，

$$
\omega_p(X, Y) = -\gamma_p(X)(Y) \tag{2.11.9}
$$

这里，右边是 $-\gamma(X) \in T^*F\_p$ 作用于 $Y \in T\_p F$ 得到的像。

**命题 2.11.2.** $\omega$ 是反对称的；

$$
\omega \in \Gamma \left( \bigwedge^2 T^*F \right). \tag{2.11.10}
$$

证明．注意到对于任意 $p \in F$，$T\_pF$ 的任意两个元都可以用适当的 $f, g \in C^\infty(M)$ 表示为 $X\_f, X\_g$ 的形式，则有

$$
\begin{align}
\omega_p(X_f, X_g) &= -\gamma (X_f)(X_g) \tag{2.11.11} \\
&= -df(X_g) \tag{2.11.12} \\
&= -X_g f \tag{2.11.13} \\
&= -\{g, f\} \tag{2.11.14} \\
&= \{f, g\} \tag{2.11.15} \\
&= -\omega_p(X_g, X_f) \tag{2.11.16}
\end{align}
$$

由此可知 $\omega$ 是反对称的。□

**命题 2.11.3.** $\omega$ 是闭形式。

证明．根据外微分的与坐标无关的定义[^11]，有

> 可能有些读者已经忘了微分几何里面的这个公式，在此摘录提示：
> 
> $$
>\begin{aligned}
\mathrm{d}\omega(X_{1},\cdots,X_{r+1})=&\sum_{i=1}^{r+1}(-1)^{r+1}X_{i}(\langle X_{1}\wedge\cdots\wedge\hat{X}_{i}\wedge\cdots\wedge X_{r+1},\omega\rangle)\\&+\sum_{1\leq i<j\leq r+1}(-1)^{i+j}\langle[X_{i},X_{i}]\wedge\cdots\\&\wedge\hat{X}_{i}\wedge\cdots\wedge\hat{X}_{j}\wedge\cdots\wedge X_{r+1},\omega\rangle.
\end{aligned}
>$$

$$
\begin{aligned}
d\omega(X_f, X_g, X_h) &= X_f \omega(X_g, X_h) - X_g \omega(X_f, X_h) + X_h \omega(X_f, X_g) \\
&\quad - \omega([X_f, X_g], X_h) + \omega([X_f, X_h], X_g) - \omega([X_g, X_h], X_f) \\
&= X_f(\{g, h\}) - X_g(\{f, h\}) + X_h(\{f, g\}) \\
&\quad - \omega(X_{\{f, g\}}, X_h) + \omega(X_{\{f, h\}}, X_g) - \omega(X_{\{g, h\}}, X_f) \\
&= X_f(\{g, h\}) - X_g(\{f, h\}) + X_h(\{f, g\}) \\
&\quad + \omega(X_h, X_{\{f, g\}}) - \omega(X_g, X_{\{f, h\}}) + \omega(X_f, X_{\{g, h\}}) \\
&= \{f, \{g, h\}\} - \{g, \{f, h\}\} + \{h, \{f, g\}\} \\
&\quad + \{h, \{f, g\}\} - \{g, \{f, h\}\} + \{f, \{g, h\}\} \\
&= 2(\{f, \{g, h\}\} + \{g, \{h, f\}\} + \{h, \{f, g\}\})
\end{aligned}
$$

因此，可以看出 Poisson 括号的 Jacobi 恒等式与 $\omega$ 是闭形式是等价的。□

将 $\omega$ 所具有的性质抽象出来，得到以下定义：

**定义 2.11.4.** 称流形 $M$ 与其上的一个非退化闭的二次微分形式 $\omega$ 所组成的对 $(M, \omega)$ 为**辛流形** (symplectic manifold)，此时的 $\omega$ 称为**辛形式** (symplectic form)。

这里，流形 $M$ 上的二次微分形式 $\omega \in C^\infty(M, \bigwedge^2 T^*M)$ 是**非退化** (nondegenerate) 的是指，在任意点 $x \in M$ 处，$\omega$ 所确定的反对称二次形式

$$
\omega_x : T_xM \times T_xM \to \mathbb{R} \tag{2.11.17}
$$

是非退化的（即，对于任意 $v \in T\_xM$，若 $\omega(v, -) : T\_xM \to \mathbb{R}$ 是零映射，则 $v = 0$）。

一般地，对于向量丛的映射 $\alpha : E \to F$，$\alpha$ 的转置[^12]给出一个映射 $\alpha^* : F^* \to E^*$。给定一个二次微分形式 $\omega$ 等价于给出一个满足反对称性

$$
\gamma^* = -\gamma \tag{2.11.18}
$$

的映射

$$
\gamma : T_xM \to T_x^*M, \quad X \mapsto \iota_X\omega \tag{2.11.19}
$$

而 $\omega$ 的非退化性等价于 $\gamma$ 是同构映射。

正如辛形式 $\omega$ 是 $\Gamma \left( \bigwedge^2 T^\*M \right)$ 的元一样，Poisson 结构 $\\{-,-\\}$ 可以被视为一个由

$$
\{f, g\} = \beta(df, dg) \tag{2.11.20}
$$

刻画的 $\Gamma\left(\bigwedge^2 TM\right)$ 的元 $\beta$，这个 $\beta$ 称为 **Poisson 双向量** (Poisson bivector)。非退化的 Poisson 双向量诱导 $TM$ 与 $T^*M$ 的同构，通过此同构将 $\beta \in \Gamma\left(\bigwedge^2 TM\right)$ 映到 $\Gamma\left(\bigwedge^2 T^\*M\right)$ 中得到的元就是 $M$ 的辛形式。

另一方面，由定义，辛形式总是非退化的，因此任何辛流形都以下述方式具有 Poisson 流形结构：对于辛流形 $(M, \omega)$ 上的函数 $f: M \to \mathbb{R}$，$f$ 生成的 Hamilton 向量场 $X\_f$ 由[^15]

$$
X_f = -\gamma^{-1}(df) \tag{2.11.21}
$$

定义。由此定义，$X\_f$ 由

$$
\iota_{X_f} \omega = -df \tag{2.11.22}
$$

刻画。此时，任何辛流形都具有由

$$
\begin{align}
\{f, g\} &= \omega(X_f, X_g) \tag{2.11.23} \\
&= -X_f g \tag{2.11.24} \\
&= X_g f \tag{2.11.25}
\end{align}
$$

确定的自然 Poisson 结构。

因此，辛流形是 Poisson 流形的特殊情况，而 Poisson 流形是辛流形的不一定非退化的推广。

任何 Poisson 流形 $M$ 都具有自然的叶状结构，其每个叶都具有辛结构。这些叶称为该 Poisson 流形的**辛叶** (symplectic leaf)。特别地，当 $M$ 是辛流形时，其作为 Poisson 流形的辛叶就是整个 $M$[^13]。Poisson 流形上的 Hamilton 系统的时间演化停留在一个辛叶上[^14]，因此在考虑一个 Hamilton 系统时，将舞台限制在辛流形上而非 Poisson 流形并不会失去一般性。

对于辛流形 $(M\_1, \omega\_1)$ 和 $(M\_2, \omega\_2)$，若存在微分同胚$f: M\_1 \to M\_2$满足

$$
f^* \omega_2 = \omega_1 \tag{2.11.26}
$$

则称 $(M\_1, \omega\_1)$ 和 $(M\_2, \omega\_2)$ 是**辛同构** (symplectomorphic) 的，此时的 $f$ 称为**辛同构映射** (symplectomorphism)。

最基本的辛流形是以 $(p\_1, q\_1, \ldots, p\_n, q\_n)$ 为标准坐标的 $2n$ 维欧几里得空间 $\mathbb{R}^{2n}$，并赋予由

$$
\omega_{\mathbb{R}^{2n}} = \sum_{i=1}^n dp_i \wedge dq_i \tag{2.11.27}
$$

定义的辛形式。称辛流形 $(\mathbb{R}^{2n}, \omega\_{\mathbb{R}^{2n}})$（或其开子流形）到其自身的辛同构映射为**正则变换** (canonical transformation)。

## 2.12 探测器轨道

二体开普勒问题已被牛顿解决，但多体问题远比之困难，欧拉、拉格朗日、雅可比、庞加莱等众多数学家都曾致力于此。天体力学中的多体问题，不仅是分析力学和辛几何学的发源地，也是动力系统和混沌理论的源头，对数学的影响不可估量。此外，进入20世纪，随着人造卫星和探测器发射时代的到来，理论兴趣之外又增添了实用动机。宇宙开发中事故常有，在发生意外情况时，迅速找到尽可能耗时短的轨道，或反过来寻找燃料消耗尽可能少的轨道，是一项重要课题。

### 2.12.1 平面圆型限制性三体问题

三体问题是研究三个受引力相互作用的质点运动的问题，但可以假设前两个天体相比最后一个天体质质量极大，从而将前两个天体视为背景场，研究最后一个天体在其场中的运动。这个近似就是**限制性三体问题** (restricted 3-body problem)，例如研究太阳和木星形成的引力场中小行星或彗星的轨道，或地球和月球形成的引力场中火箭或人造卫星的轨道等问题。进一步，当两个天体的轨道是正圆时，称之为**圆型限制性三体问题** (circular restricted 3-body problem)。再进一步，当最后一个天体在前两个天体的轨道平面内运动时，称之为**平面圆型限制性三体问题** (planar circular restricted 3-body problem)。将两个天体的质量归一化，记为 $\mu$ 和 $1 - \mu$。再假设 $\mu \in (0,1/2]$，称重天体为太阳，轻天体为木星，并用 $S$ 和 $J$ 分别表示它们的轨道：

$$
\begin{align}
S&: \mathbb{R} \to \mathbb{R}^2, \quad t \mapsto (-\mu \cos t, -\mu \sin t), \tag{2.12.1} \\
J&: \mathbb{R} \to \mathbb{R}^2, \quad t \mapsto ((1 - \mu) \cos t, (1 - \mu) \sin t). \tag{2.12.2}
\end{align}
$$

取太阳和木星轨道补集

$$
W := \mathbb{R}^2 \setminus (\operatorname{Im}(S) \cup \operatorname{Im}(J)) \tag{2.12.3}
$$

作为探测器的位形空间，则哈密顿量

$$
H : T^*W \times \mathbb{R} \to \mathbb{R} \tag{2.12.4}
$$

由下式给出：

$$
H(\boldsymbol{p}, \boldsymbol{q}, t) = \frac{1}{2} |\boldsymbol{p}|^2 - \frac{\mu}{|\boldsymbol{q} - \boldsymbol{J}(t)|} - \frac{1 - \mu}{|\boldsymbol{q} - \boldsymbol{S}(t)|} \tag{2.12.5}
$$

由于哈密顿函数显含时间，系统在时间平移下并非不变，能量不守恒。这正是引力弹弓效应（gravity assist）可以在不消耗燃料的情况下加速探测器的原因。当然，如果考虑太阳和木星的能量，整个系统的能量是守恒的。

### 2.12.2 时间依赖的正则变换

若光滑映射 $\psi: T^\*W \times \mathbb{R} \to T^\*W$ 满足以下两个条件：
- 对任意 $t \in \mathbb{R}$，$\psi(-, t): T^\*W \to T^\*W$ 是微分同胚映射；
- 存在函数 $K: T^\*W \times \mathbb{R} \to \mathbb{R}$，使得满足

$$
\psi^*\eta = \eta - dK \tag{2.12.6}
$$

则称其为**时间依赖的正则变换** (time-dependent canonical transformation)。其中

$$
\eta = p dq - H dt \tag{2.12.7}
$$

是 Poincaré-Cartan 积分不变量。作用量泛函由 Poincaré-Cartan 积分不变量给出：

$$
S: \gamma \mapsto \int_{t_0}^{t_1} \gamma^* \eta \tag{2.12.8}
$$

因此，在正则变换前后，作用量仅相差一个边界项：

$$
\begin{align}
&\int_{t_0}^{t_1} \gamma^* \psi^* \eta - \int_{t_0}^{t_1} \gamma^* \eta = -\int_{t_0}^{t_1} \gamma^* dK \tag{2.12.9} \\
&= -\int_{t_0}^{t_1} d(\gamma^* K) \tag{2.12.10} \\
&= K(\gamma(t_0)) - K(\gamma(t_1)) \tag{2.12.11}
\end{align}
$$

特别地，通过计算固定端点的变分得到的哈密顿正则运动方程，在时间依赖的正则变换下保持不变。[^16]

令

$$
P = \psi^* p, \quad Q = \psi^* q, \quad H' = H + \frac{\partial K}{\partial t} \tag{2.12.12}
$$

则 (2.12.6) 可表为：

$$
dK = p dq - P dQ + (H' - H) dt \tag{2.12.13}
$$

### 2.12.3 雅可比积分与拉格朗日点

利用旋转矩阵

$$
R(t) = \begin{pmatrix} \cos t & \sin t \\ -\sin t & \cos t \end{pmatrix} \tag{2.12.14}
$$

定义时间依赖的坐标变换为：

$$
\boldsymbol{Q} = R(-t)\boldsymbol{q}, \quad \boldsymbol{Q} = \begin{pmatrix} Q_1 \\ Q_2 \end{pmatrix}, \quad \boldsymbol{q} = \begin{pmatrix} q_1 \\ q_2 \end{pmatrix} \tag{2.12.15}
$$

（这是将 $W \times \mathbb{R}$ 的坐标从 $(\boldsymbol{Q},t)$ 换为 $(\boldsymbol{q},t)$）[^17]。由于是线性变换，它在切空间 $T\_{\boldsymbol{Q}}W$ 上诱导出相同的映射。它在余切空间 $T\_{\boldsymbol{Q}}^*W$ 上诱导的映射由下式给出：

$$
\boldsymbol{p} = \boldsymbol{P} R(-t), \quad \boldsymbol{P} = \begin{pmatrix} P_1 & P_2 \end{pmatrix}, \quad \boldsymbol{p} = \begin{pmatrix} p_1 & p_2 \end{pmatrix}
$$

由

$$
\begin{align}
\frac{\partial R}{\partial t} &= \begin{pmatrix} -\sin t & \cos t \\ -\cos t & -\sin t \end{pmatrix} \tag{2.12.16} \\
&= \begin{pmatrix} \cos t & \sin t \\ -\sin t & \cos t \end{pmatrix} \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix} \tag{2.12.17} \\
&= R(t) \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix} \tag{2.12.18}
\end{align}
$$

可得

$$
\begin{align}
d\boldsymbol{Q} &= d(R(-t)\boldsymbol{q}) \\
&= R(-t)d\boldsymbol{q} - \frac{\partial R}{\partial t}(-t)\boldsymbol{q}  dt \tag{2.12.19} \\
&= R(-t) d\boldsymbol{q} - R(-t) \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix} \boldsymbol{q}  dt \tag{2.12.20} \\
&= R(-t) \left( d\boldsymbol{q} - \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix} \boldsymbol{q}  dt \right) \tag{2.12.21}
\end{align}
$$

因此，在此变换下，Liouville 形式变为：

$$
\begin{align}
\boldsymbol{P} d\boldsymbol{Q} &= \boldsymbol{P} R(-t) \left( d\boldsymbol{q} - \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix} \boldsymbol{q}  dt \right) \tag{2.12.22} \\
&= \boldsymbol{p} d\boldsymbol{q} - \boldsymbol{p} \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix} \boldsymbol{q}  dt \tag{2.12.23}
\end{align}
$$

其中

$$
\begin{align}
\mu &= \boldsymbol{p} \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix} \boldsymbol{q} \tag{2.12.24} \\
&= \begin{pmatrix} p_1 & p_2 \end{pmatrix} \begin{pmatrix} 0 & 1 \\ -1 & 0 \end{pmatrix} \begin{pmatrix} q_1 \\ q_2 \end{pmatrix} \tag{2.12.25} \\
&= p_1 q_2 - p_2 q_1 \tag{2.12.26}
\end{align}
$$

是生成旋转变换的哈密顿函数[^18]。由 (2.12.13) 知，Poincaré-Cartan 积分不变量变换为：

$$
\boldsymbol{P} d\boldsymbol{Q} - H dt = \boldsymbol{p} d\boldsymbol{q} - \mu dt - H dt = \boldsymbol{p} d\boldsymbol{q} - h dt \tag{2.12.27}
$$

因此，在旋转坐标系 $(\boldsymbol{p}, \boldsymbol{q})$ 中的哈密顿量为：[^19]

$$
\begin{align}
h &= H + \mu \\
&= \frac{1}{2} (p_1^2 + p_2^2) - \frac{\mu}{|\boldsymbol{q} - \boldsymbol{J}(0)|} - \frac{1 - \mu}{|\boldsymbol{q} - \boldsymbol{S}(0)|} + p_1 q_2 - p_2 q_1 \tag{2.12.28}
\end{align}
$$

注意变换后的哈密顿量 $h$ 不显含时间。因此 $h$ 是系统的一个守恒量，称之为**雅可比积分** (Jacobi integral)。

将 (2.12.28) 配方后得到：

$$
h = \frac{1}{2} ((p_1 + q_2)^2 + (p_2 - q_1)^2) - \frac{\mu}{|\boldsymbol{q} - \boldsymbol{J}(0)|} - \frac{1 - \mu}{|\boldsymbol{q} - \boldsymbol{S}(0)|} - \frac{1}{2} |\boldsymbol{q}|^2 \tag{2.12.29}
$$

哈密顿函数中不依赖于 $\boldsymbol{p}$ 的部分

$$
U: \mathbb{R}^2 \setminus \{\boldsymbol{J}(0), \boldsymbol{S}(0)\} \to \mathbb{R}, \quad \boldsymbol{q} \mapsto -\frac{\mu}{|\boldsymbol{q} - \boldsymbol{J}(0)|} - \frac{1 - \mu}{|\boldsymbol{q} - \boldsymbol{S}(0)|} - \frac{1}{2} |\boldsymbol{q}|^2 \tag{2.12.30}
$$

称为**有效势** (effective potential)。

该系统的平衡点是哈密顿函数 $h$ 的微分为零的点，称之为**拉格朗日点** (Lagrangian point)。关于 $\boldsymbol{p}$ 的微分为零的条件给出：

$$
p_1 = -q_2, \quad p_2 = q_1 \tag{2.12.31}
$$

在此条件下，关于 $\boldsymbol{q}$ 的微分为零的条件对应于有效势的临界点。通过直接计算可知，存在5个拉格朗日点，前3个位于太阳和木星的连线上，剩下的2个（**特洛伊点**，Trojan points）分别与太阳和木星构成正三角形。
对于给定的实数 $c$，称能量等位集 (level set) $h^{-1}(c)$ 为**能量超曲面** (energy hypersurface)，称其在 $W$ 上的投影的像为**希尔区域** (Hill’s region)。希尔区域是在给定能量下探测器在太阳系内可能到达的区域。由哈密顿函数 (2.12.29) 的第一项恒为正可知，希尔区域由下式给出：

$$
\{\boldsymbol{q} \in \mathbb{R}^2 \setminus \{\boldsymbol{S}(0), \boldsymbol{J}(0)\} \mid U(\boldsymbol{q}) \leq c\} \tag{2.12.32}
$$

## 译注

[^1]:原文 (2.1.50) 有笔误，$ e l / 4 - 1 $应为$e l / r - 1 $，翻译已修正
[^2]: 原文 (2.1.51) 有笔误，$el - 1$ 应为 $e l - r$，翻译已修正
[^3]: 这里的点积实际上应该理解为$V\times V^*$中的配对$\left\langle\cdot,\cdot\right\rangle$
[^4]: 后面的章节在翻译时为了公式输入的简便常常略去$q$、$v$和$p$等记号的表示向量的粗体符号，读者请自辨。（~~其实是因为公式识别的时候有时候黑体不好准确识别出来，我懒得改了~~）
[^5]:原文洛伦兹变换的时间变换公式有误，已修正为标准形式
[^6]: 书中这一段其实说的非常拗口，他这里说的哈密顿流并不是特指哈密顿函数生成的流，而是任意一个函数由$\\{f,\bullet\\}$​生成的向量场（书中也叫哈密顿向量场）对应的单参李群（也就是他这里说的哈密顿流）。他这里定义的$H$​的对称性对于数学人应该很好理解，就是流形上带有一个群作用生成的对称性。
[^7]: 其实前面那句话就已经暗含这一点了，因为$H$一般情况下是$(p,q,t)$的函数，而作为相空间上的函数应当只是$(p,q)$的函数。前面由于我们引入$H$是用$TW$上的$L$的Legendre变换引入的，而$L$定义在$TW$上就要求其不显含时间，对应$H$也就不显含时间。
[^8]: 后文都用$\Gamma$表示纤维丛上的光滑截面，用物理的话说就是“场”。
[^9]: 森田茂之, 『微分形式の幾何学』 ,岩波書店, 2005 年
[^10]: 回忆由$S$生成的理想就是包含$S$的最小理想，而代数的理想就是其中元素和任何其它元素乘起来都还在理想中。
[^11]: 见陈省身微分几何讲义中第三章式2.26，另外我还在下面给了个note说明外微分计算公式。
[^12]: 这是矩阵的叫法，算子上的叫法就是对偶映射。
[^13]: 换句话说，泊松流形自带的叶状结构可以自然地在每个叶上面带一个辛结构，但是此辛结构无法拼起来在全局上定义。而辛流形比较特殊，他作为泊松流形自己就是整个叶。
[^14]: 注意经典力学里面时间仅仅只是一个参数，并不作为维数的一部分加到流形定义里面。这里提到的演化只在一个叶中进行是注意到哈密顿正则运动方程就是用Poisson括号写的，自然不会演化跑到另一个叶的另一个Poisson结构里面去。所以可以干脆只考虑演化所在的那个分叶作为相空间，当作是一整个辛流形。
[^15]: 这里原文应该少了一个负号，应该遵循2.11.9的符号约定，后面公式也做了相关改动。这里我们遵循一般的符号约定$\iota\_X(\omega)(Y):=\omega(X,Y)$。
[^16]: 指形式上只要把原先方程的$p,q,H$换成下面三个就得到了新的广义坐标下的运动方程，也就是说正则变换下运动方程形式上具有不变性，后文用例子会看得更清楚。
[^17]: 注意这里书中符号有点滥用，原先用大写字母表示变换后的坐标，现在我们用大写字母表示变换前的坐标
[^18]: 前面的脚注提到过，不要把书中有些时候的“哈密顿函数”和决定系统演化的“哈密顿量”弄混。
[^19]: 从这里可以看到这个变换确实是一个时间相关的正则变换，$K=\mu dt$。变换之后我们只需要取新的哈密顿量是$H+\mu:=h$，这个时候就会发现运动方程形式上一模一样，所以就可以用有效势能去处理了。