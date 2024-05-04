---
layout: post
title:  理论力学一
categories: [physics]
tags: [phys-yun]
author: Lingyun Wang
link: https://zhuanlan.zhihu.com/p/655892408
image:
    feature:https://pic4.zhimg.com/80/v2-bde9663492fb0c712b8db2363747f103.png
---


# 物理の交差点：理力记事本（1）

在我的文章中包含下列元素：{上下指标混用，抽象具体指标混用，ε$\epsilon$混用，胡乱求和约定，暴力求导，马后炮，由答案推过程}你懂的

- [物理の交差点：理力记事本（1）](#物理の交差点理力记事本1)
  - [省流版](#省流版)
  - [坐标、运动、そして力](#坐标运动そして力)
    - [柱坐标球坐标表示角动量直角分量（朗道p20）](#柱坐标球坐标表示角动量直角分量朗道p20)
    - [科里奥利力的几种坐标表示](#科里奥利力的几种坐标表示)
      - [球坐标转直角坐标](#球坐标转直角坐标)
      - [利用抽象指标对二维极坐标下的物体运动求导，以推导科里奥利力](#利用抽象指标对二维极坐标下的物体运动求导以推导科里奥利力)
  - [散乱的牛顿力学证明](#散乱的牛顿力学证明)
    - [证明：仅受保守力运动的质点机械能守恒](#证明仅受保守力运动的质点机械能守恒)
    - [位力定理证明](#位力定理证明)
    - [牛顿宇宙学](#牛顿宇宙学)
  - [拉格朗日力学](#拉格朗日力学)
    - [最小作用量原理\&拉格朗日方程](#最小作用量原理拉格朗日方程)
      - [利用变分法证明E-L方程（函数过定端点）](#利用变分法证明e-l方程函数过定端点)
      - [E-L方程的降阶](#e-l方程的降阶)
      - [向高维前进！多函数方程](#向高维前进多函数方程)
      - [能否适用？任意坐标变换下的拉格朗日方程](#能否适用任意坐标变换下的拉格朗日方程)
      - [多参量问题/场的拉格朗日方程](#多参量问题场的拉格朗日方程)
      - [非保守力？对拉格朗日方程的缝缝补补](#非保守力对拉格朗日方程的缝缝补补)
      - [相对论性拉格朗日力学初步](#相对论性拉格朗日力学初步)
      - [双曲相对论](#双曲相对论)
    - [变分/拉格朗日方程的应用](#变分拉格朗日方程的应用)
      - [最速降线](#最速降线)
      - [球面最短距离路径](#球面最短距离路径)
      - [转起来吧！感受科里奥利奥的美味](#转起来吧感受科里奥利奥的美味)
      - [加速！这就是相对论效应](#加速这就是相对论效应)
      - [向其他坐标推广！由拉氏量导出测地线方程](#向其他坐标推广由拉氏量导出测地线方程)
    - [对称与诺特定理](#对称与诺特定理)
      - [表述与证明](#表述与证明)
      - [应用与例子](#应用与例子)
  - [一些数学工具](#一些数学工具)
    - [勒让德变换](#勒让德变换)
  - [哈密顿力学](#哈密顿力学)
    - [哈密顿正则方程](#哈密顿正则方程)
    - [泊松括号](#泊松括号)
    - [相空间](#相空间)
      - [辛几何lite](#辛几何lite)
      - [泊松定理与撒谎代数](#泊松定理与撒谎代数)
    - [刘维尔定理](#刘维尔定理)
    - [正则变换=母函数](#正则变换母函数)
      - [辛辛更健康](#辛辛更健康)
    - [正则变换=旋转](#正则变换旋转)
    - [运动函数的统一，爱来自正则变换](#运动函数的统一爱来自正则变换)
      - [二维谐振子与平方反比向心力场之间的关系](#二维谐振子与平方反比向心力场之间的关系)
    - [角度-作用量变量坐标](#角度-作用量变量坐标)
      - [绝热不变量](#绝热不变量)
    - [哈密顿-雅可比方程](#哈密顿-雅可比方程)
    - [解哈密顿雅可比（偏微分方程）](#解哈密顿雅可比偏微分方程)
      - [例一：一维谐振子](#例一一维谐振子)
      - [例二：开普勒问题（二维）](#例二开普勒问题二维)

<!--more-->

## 省流版

我将把学过的所有描述物体运动的(在机械问题中)等价方程放在这里

1.牛二

$$\vec F=m\vec a$$

2.拉格朗日方程

$$\frac{\partial L}{\partial q^a}=\frac{d}{dt}\frac{\partial L}{\partial\dot q^a}$$

> 从最小作用量原理变分而来，在位形空间的切丛上研究运动规律

3.哈密顿正则方程

$$
\left\{\begin{align}
    \dot q^i=\frac{\partial H}{\partial p_i}\\
    \dot p_i=-\frac{\partial H}{\partial q^i}
\end{align}\right.
$$

辛矩阵表述(x是相空间坐标，J是辛矩阵)

$$\dot{\vec x}=J\frac{\partial H}{\partial\vec x}$$

泊松括号表示(x是相空间坐标)

$$\dot{\vec x}=[\vec x,H]$$

> 将拉格朗日方程进行勒让德变换得到，在相空间中研究运动

HJE

$$\frac{\partial S}{\partial t}+H(\frac{\partial S}{\partial q},q,t)=0$$

## 坐标、运动、そして力

> 只要导不死，就往死里导

### 柱坐标球坐标表示角动量直角分量（朗道p20）

> 伟大的吉他学家O尼·O手曾经说过：“暴力，暴力，还是甜蜜的暴力！”

![Image](https://pic4.zhimg.com/80/v2-41dbbd15ac7ff39f6f109a032e509312.png)

![Image](https://pic4.zhimg.com/80/v2-ef6a3198fca49e583a2d8ee7527ad82c.png)

![Image](https://pic4.zhimg.com/80/v2-8facdf77877e91414ae047add7be822c.png)

### 科里奥利力的几种坐标表示

#### 球坐标转直角坐标

![Image](https://pic4.zhimg.com/80/v2-43acba8f410216de767b88a0169341c0.png)

$$\left\{\begin{align}
    x=asin\varphi cos\theta \\
    y=asin\varphi sin\theta\\
    z=a cos\varphi
\end{align}\right.$$

$$\left\{\begin{align}
    \dot\varphi=\mu\\
    \dot\theta=\omega\\
    \dot a=\ddot\varphi=\ddot\theta=0
\end{align}\right.$$

> 最下面要求了很多东西是0，要不然式子就又臭又长了（弊端就是失去一般性）

$$\left\{\begin{align}
    \dot x=a\mu cos\varphi cos\theta-a\omega sin\varphi sin\theta \\
    \dot y=a\mu cos\varphi sin\theta+a\omega sin\varphi cos\theta\\
    \dot z=-a \mu sin\varphi
\end{align}\right.$$

$$\left\{\begin{align}
    \ddot x=-a(\mu^2+\omega^2) sin\varphi cos\theta-2a\mu\omega cos\varphi sin\theta \\
    \ddot y=-a(\mu^2+\omega^2) sin\varphi sin\theta+2a\mu\omega cos\varphi cos\theta\\
    \ddot z=-a \mu^2 cos\varphi
\end{align}\right.$$

现在把这一些东西放到球坐标系中

求一下(已经归一化的)

$$\left\{\begin{align}
    x=sin\varphi cos\theta \\
    y=sin\varphi sin\theta\\
    z=cos\varphi
\end{align}\right.$$

的雅可比矩阵（？）（类似物）偏直角坐标/偏球坐标，得出一个这个东东

$$ A=\begin{pmatrix}
    sin\varphi cos\theta&cos\varphi cos\theta&-sin\varphi sin\theta\\
    sin\varphi sin\theta&cos\varphi sin\theta&sin\varphi cos\theta\\
    cos\varphi&-sin\varphi&0
\end{pmatrix} $$

让每个列向量模长都为1，所以把最后一列丢掉sinφ

$$ A =\begin{pmatrix}
    sin\varphi cos\theta&cos\varphi cos\theta&-sin\theta\\
    sin\varphi sin\theta&cos\varphi sin\theta&cos\theta\\
    cos\varphi&-sin\varphi&0
\end{pmatrix} $$

容易验证每个列向量彼此垂直且归一，所以他的逆直接转置就好了

$$ A^{-1} =\begin{pmatrix}
    sin\varphi cos\theta&sin\varphi sin\theta&cos\varphi\\
    cos\varphi cos\theta&cos\varphi sin\theta&-sin\varphi\\
    -sin\theta&cos\theta&0
\end{pmatrix} $$

拿这个去乘上直角坐标的a，可得

$$\left\{\begin{align}
    a_r=-a\mu^2-aw^2sin^2\varphi \\
    a_\varphi=-aw^2sin\varphi cos\varphi\\
    a_\theta=2a\mu wcos\varphi
\end{align}\right.$$

把它乘上-m就有了惯性力

$$\left\{\begin{align}
    a_r=ma\mu^2+maw^2sin^2\varphi \\
    a_\varphi=maw^2sin\varphi cos\varphi\\
    a_\theta=-2ma\mu wcos\varphi
\end{align}\right.$$

其中，$ma\mu^2 \hat r$是质点沿经线运动的离心力，$maw^2sin^2\varphi\hat r+maw^2sin\varphi cos\varphi\hat\varphi$是由地球自转产生的离心力（见下图）

![地球自转产生的离心力](https://pic4.zhimg.com/80/v2-91923a9113bfc64e667783e259b3e741.png)

剩下的$-2ma\mu wcos\varphi$就是科氏力啦。验证一下，不妨设$\mu>0$质点从北极向南极运动，在北半球时cosφ>0，$a_\theta<0$向着θ反方向，也就是质点运动方向的右手边；而在南极时$a_\theta>0$向着θ正方向，也就是质点运动方向左侧，南左北右得到验证

#### 利用抽象指标对二维极坐标下的物体运动求导，以推导科里奥利力

> 本质是因为极坐标的基向量会随时间变化，所以整体求导一定也要对基求导；这个过程在我的普物力学文章开头极坐标那一节有初等语言的描述。这里为了体现物理品味，要狠狠炫技用更酷炫的抽象指标语言力

设位移$\vec A=x^\alpha\vec e_\alpha$,（省去了求和号的形式）

其中$x^\alpha$代表坐标函数，如直角坐标中的x(t)、y(t);极坐标中的$\rho(t)、\theta(t)$；$\vec e_\alpha$代表基矢，例如$\vec i、\vec j$（他们有始终是常数的美好性质）以及$\vec e_r、\vec e_\theta$（他们会随着物体的位置变化，不是常数）

现在对位移求导以得到v：

$$\vec V=\frac{\partial\vec{A}}{\partial x^\beta}·\frac{\partial x^\beta}{\partial t}$$

> 后一项坐标函数对时间求导有手就行，主要是前一项需要展开说说。不妨回归到具体问题中来，计算极坐标中的物体速度

极坐标中

$$\vec A=r\vec e_r$$

$$\left\{\begin{align}
    x=r cos\theta\\
    y=r sin\theta
\end{align}\right.$$

所以

$$\vec V=\frac{\partial\vec A}{\partial r}\frac{dr}{dt}+\frac{\partial\vec A}{\partial\theta}\frac{d\theta}{dt}=\dot r\frac{\partial\vec A}{\partial r}+\dot \theta\frac{\partial\vec A}{\partial\theta}$$

其中

$$\frac{\partial\vec A}{\partial r}=\vec e_r+r\frac{\partial\vec e_r}{\partial r}$$

$$\frac{\partial\vec A}{\partial \theta}=r\frac{\partial\vec e_r}{\partial\theta}$$

为了下面计算$\frac{\partial\vec e_\beta}{\partial x^\beta}$（基矢对坐标偏导）在数学上更直观，现在将$\vec e_r、\vec e_\theta$在直角坐标$\vec i、\vec j$下展开（利用ij是常数这样一个巧妙的性质）

> 注：在欧氏空间正交基坐标下，矢量和对偶矢量相同，所以下面那个偏导数$\frac{\partial x}{\partial r}=\frac{\partial r}{\partial x}$(θy同理)无需在意正反，怎么算方便怎么来

$$\vec e_r=\frac{\partial x}{\partial r}\vec i+\frac{\partial y}{\partial r}\vec j=cos\theta\vec i+sin\theta\vec j$$

$$\vec e_\theta=\frac{\partial x}{\partial\theta}\vec i+\frac{\partial y}{\partial\theta}\vec j=-r sin\theta\vec i+r cos\theta\vec j(=\rho\hat\theta) $$

> 注意直接导出来模长不是1，暂时不管，归一操作不急着做，先用着$\vec e_\theta$作为第二个坐标

> 二编：这里求基矢还有一种求法，将位矢对坐标函数求导（这在张量分析中被称为“协变基矢量”）【参考2】
>
> $$\vec e_i=\frac{\partial \vec x}{\partial x_i}$$
>
> 则
>
> $$\vec e_r=\frac{\partial}{\partial r}(rcos\theta \vec i+rsin\theta\vec j)=cos\theta\vec i+sin\theta\vec j$$
>
> $$\vec e_\theta=\frac{\partial}{\partial \theta}(rcos\theta \vec i+rsin\theta\vec j)=-r sin\theta\vec i+r cos\theta\vec j$$
>
> (协变基矢量本质不是一个“有向线段”，而更像是“坐标函数变化一份，对应发生多少位移”的变化率（对应大家都知道的速度，如果你把坐标函数看成时间）如果有了这个认识，就不难理解为什么$\vec e_\theta$的模长为r了（因为r越大，一份θ变化会导致更大的位移）)
>
> 题外：另一个更常见的对坐标函数求导是切向量$\frac{\partial}{\partial x_i}$

现在想要的是类似$\frac{\partial\vec e_\beta}{\partial x^\beta}$（基矢对坐标偏导）的式子，一共四个（虽然现在只要用两个但是为了理解克氏符你就忍一下吧）；为了方便起见设

$$\Gamma_{\alpha\beta}=\frac{\partial\vec e_\alpha}{\partial x^\beta}$$

动手求出来！就用先前er eθ在ij下的表示展开，求偏导

$$\Gamma_{rr}=\frac{\partial\vec e_r}{\partial r}=\frac{\partial}{\partial r }(cos\theta\vec i+sin\theta\vec j)=0$$

$$\Gamma_{θr}=\frac{\partial\vec e_\theta}{\partial r}=\frac{\partial}{\partial r}(-r sin\theta\vec i+r cos\theta\vec j)=-sin\theta\vec i+cos\theta\vec j=\frac{1}{r}\vec e_\theta$$

$$\Gamma_{θθ}=\frac{\partial\vec e_\theta}{\partial θ}=\frac{\partial}{\partial θ}(-r sin\theta\vec i+r cos\theta\vec j)=-rcos\theta\vec i-rsin\theta\vec j=-{r}\vec e_r$$

$$\Gamma_{rθ}=\frac{\partial\vec e_r}{\partial θ}=\frac{\partial}{\partial θ}(cos\theta\vec i+sin\theta\vec j)=-sin\theta\vec i+cos\theta\vec j=\frac{1}{r}\vec e_\theta$$

> 注：可以观察到$\Gamma_{θr}=\Gamma_{rθ}$，这是因为克氏符的无挠性，下面两个指标可以交换位置

注意最后都要写成在$\vec e_r、\vec e_\theta$下展开的形式！可以注意到$\Gamma_{\alpha\beta}$是一个向量。既然是向量那当然有坐标表示了。回顾一下最开始我们怎么坐标表示的？...$\vec A=x^\alpha\vec e_\alpha$，就是加个上标。以$\Gamma_{θρ}$为例：设

$$\Gamma_{θr}=\Gamma_{θr}^r\vec e_r+\Gamma_{θr}^\theta\vec e_\theta$$

对照可得

$$\Gamma_{θr}^r=0$$

$$\Gamma_{θr}^\theta=\frac{1}{r}$$

以此类推，现在我们可以写出所有的$\Gamma_{\alpha\beta}^\mu$了（克氏符，α代表偏导分子的基矢，β代表偏导分母的坐标函数，mu代表第几个分量）

把之前未解决的难点用抽象指标写作一般性公式

$$\frac{\partial\vec A}{\partial x^\beta}=\frac{\partial A^\alpha}{\partial x^\beta}\vec e_\alpha+A^\alpha \Gamma_{\alpha\beta}^\mu\vec e_\mu$$

注意矢量$\vec e_\alpha$和$\vec e_\mu$是同一套。所以调整抽象指标并将其提出

$$\frac{\partial\vec A}{\partial x^\beta}=(\frac{\partial A^\alpha}{\partial x^\beta}+A^\mu \Gamma_{\mu\beta}^\alpha)\vec e_\alpha$$

好了，对于实际的球坐标问题而言

$$\vec V=\dot r\frac{\partial\vec A}{\partial r}+\dot \theta\frac{\partial\vec A}{\partial\theta}=\dot r(\vec e_r+r\frac{\partial\vec e_r}{\partial r})+\dot \theta(r\frac{\partial\vec e_r}{\partial\theta})=\dot r\vec e_r+\dot\theta\vec e_\theta$$

> 和直观感觉相比较一下，前一项是径向速度r点，后一项的模长实际上是rw（w是角速度），也就是角向速度。

那么，为了我，对『$\vec V$』使用偏导吧！

$$
\begin{aligned}
\frac{\partial\vec V}{\partial t} & = \ddot r\frac{\partial}{\partial \dot r}(\dot r\vec e_r+\dot\theta\vec e_\theta)+\ddot \theta\frac{\partial}{\partial \dot\theta}(\dot r\vec e_r+\dot\theta\vec e_\theta)  \\
\end{aligned}
$$

其中

> 用到数学技巧$\frac{\partial f(x)}{\partial\dot x}=\frac{\partial f(x)}{\partial x}\frac{\partial x}{\partial t}\frac{\partial t}{\partial \dot x}=\frac{\dot x}{\ddot x}f'(x)$

$$\frac{\partial}{\partial \dot r}(\dot r\vec e_r+\dot\theta\vec e_\theta)=\vec e_r+\dot \theta\frac{\partial\vec e_\theta}{\partial r}=\vec e_r+\frac{\dot \theta\dot r}{r\ddot r}\vec e_\theta$$

$$\frac{\partial}{\partial \dot\theta}(\dot r\vec e_r+\dot\theta\vec e_\theta)=\dot r\frac{\dot \theta}{\ddot\theta}(\frac{\vec e_\theta}{r})+\vec e_\theta-\frac{r\dot \theta^2}{\ddot \theta}\vec e_r=\frac{\dot r\dot \theta}{\ddot\theta r}\vec e_\theta+\vec e_\theta-\frac{r\dot \theta^2}{\ddot \theta}\vec e_r$$

代回，得

$$\frac{\partial\vec V}{\partial t}=(\ddot r-r\dot\theta^2)\vec e_r+(2\frac{\dot\theta\dot r}{r}+\ddot\theta)\vec e_\theta$$

对基矢归一，

$$\frac{\partial\vec V}{\partial t}=(\ddot r-r\dot\theta^2)\hat r+(2\dot\theta\dot r+\ddot\theta r)\hat\theta$$

乘上-m即为惯性力，很明显可以看到科里奥利力在$-2\dot\theta\dot r m\hat\theta$这一项（其他项的解析在我上一篇力学里有写，就不多说了）

## 散乱的牛顿力学证明

### 证明：仅受保守力运动的质点机械能守恒

势能与力的关系$F=-\frac{dV}{dr}$

机械能$E=T+V=\frac{1}{2}mv^2+V(x)$

牛二$F=ma$

$$\dot E=mva+\frac{dV}{dr}·\frac{dr}{dt}=mva-Fv=Fv-Fv=0 \square$$

### 位力定理证明

物体在与r^k成正比的势场中，求证

$$<T>=\frac{k}{2}<V>$$

其中\<T>是平均动能，\<V>是平均势能(对时间平均)

> 注：更一般的非势场情况，\<T>=-$\frac{1}{2}<\sum\vec F_i·\vec r_i>$

令$G_i=\vec p_i·\vec r_i$,$G=\sum \vec p_i·\vec r_i$

$$\frac{d G}{dt}=\sum\vec F_i·\vec r_i+\sum \vec p_i·\vec v_i$$

由$\vec p=m\vec v$,

$$\frac{d G}{dt}=\sum\vec F_i·\vec r_i+2T$$

上式对时间求平均

$$\frac{1}{\tau}\int_0^\tau\frac{d G}{dt} dt=\frac{G(\tau)-G(0)}{\tau}=<\sum\vec F_i·\vec r_i>+2<T>$$

我们讨论的问题是一束缚态，有限范围内运动，所以G是有界的；此时令τ->∞，可得上式为0，也即

$$<\sum\vec F_i·\vec r_i>+2<T>=0$$

此时\<T>=-$\frac{1}{2}<\sum\vec F_i·\vec r_i>$得证。考虑势场情况，$-\nabla U(r)=\vec F,U(r)=\alpha r^k$

$$F=-\frac{\partial U}{\partial r}=-\frac{k}{r}U$$

代入上式，得

$$<T>=\frac{k}{2}<V>$$

### 牛顿宇宙学

在一个各向同性均匀介质（没有相对旋转）中充斥着物体，使其密度处处为ρ(t)，现有一质点m距质心为R，E为其总能量，求证：

$$\frac{1}{R^2}·\dot R^2=\frac{8\pi G\rho}{3}-\frac{(-2E/m)}{R^2}$$

证明：以质心为圆心，以r为半径做球，此球即为提供引力之球。

$$M=\rho V=\frac{4}{3}\pi r^3\rho$$

$$F=G\frac{Mm}{r^2}$$

由牛二，$F=m\ddot r$，可得运动学方程

$$\ddot r=-\frac{GM}{r^2}$$

> 因为本题中rho只和t有关，这里不能把M带进去消掉r，否则下式积不出来

左右两边配上$2\dot r$

$$2\dot r\ddot r=-\frac{2GM}{r^2}·\dot r$$

左右对t积分,积分上界为R下界为R_0

$$\dot R^2=\frac{2GM}{R}-\frac{2GM}{R_0}+\dot R_0^2$$

不妨设积分常数$K=\frac{2GM}{R_0}-R_0^2$,那么K一定是一个时间守恒量，和能量有关；现在考虑在R0点处，系统的能量

$$E_0=\frac{m}{2}\dot R_0^2-\frac{GMm}{R_0}=-\frac{1}{2}mK$$

由上式对初始点R0处能量的考察，我们得到了E_0与K的关系。并且E的表达式形式不会随R发生改变；现在代回含变量R的式子中

$$\dot R^2=\frac{2GM}{R}-K=\frac{2GM}{R}+\frac{2E}{m}$$

将$M=\frac{4}{3}\pi r^3\rho$代入，并且同除R^2，可得

$$\frac{1}{R^2}·\dot R^2=\frac{8\pi G\rho}{3}-\frac{(-2E/m)}{R^2}(*)$$

Friedmann equation：

现在设定一个新的位移矢量x，与先前r的关系是$\vec r=a(t)\vec x$(a的意义是宇宙的伸缩常数)

现在假定我们的系统在这个新坐标x下不发生移动，也即$\dot x=0$，那么$\dot r=\dot a x$,代入(*)中，得

$$(\frac{\dot a}{a})^2=\frac{8\pi G}{3}\rho-\frac{(-2E/mx^2)}{a^2}$$

令$kc^2=-2E/mx^2$,方程中其他几项都与x无关，显然kc^2也与x无关，所以得到一个完全和x无关的方程

$$(\frac{\dot a}{a})^2=\frac{8\pi G}{3}\rho-\frac{kc^2}{a^2}$$

## 拉格朗日力学

> 神说，我要偷懒！于是便有了最小作用量原理

### 最小作用量原理&拉格朗日方程

> ~~10min光速泛函省流我的大脑中在尖锐的爆鸣~~

#### 利用变分法证明E-L方程（函数过定端点）

下面的y'表示dy/dx

想要求一个y(x)，使得I[F(y,y',x)]=$\int_{x_0}^{x_1}Fdx$取得最小值。

思路还是和f（x）求最值差不多的，微分=0就是最值了，放到这里就是I[F(y+δy)]-I[F(y)]=0,x不用动

$$I[F(y+δy)]-I[F(y)]=\int_{x_0}^{x_1}F(y+\delta y,y'+\delta y',x)-F(y,y',x) dx=0$$

利用全微分公式把第一项F展开，得到其中的

$$F(y+\delta y,y'+\delta y',x)-F(y,y',x)=\frac{\partial F}{\partial y}\delta y+\frac{\partial F}{\partial y'}\delta y'+O(\delta)$$

用到$\delta\frac{dy}{dx}=\frac{d}{dx}\delta y$,并舍弃高阶小量

$$\int_{x_0}^{x_1}(\frac{\partial F}{\partial y}\delta y+\frac{\partial F}{\partial y'}\frac{d}{dx}\delta y)dx=0$$

对其中的第二项使用分部积分（为了把δy单独搞出来），把$\frac{d}{dx}\delta y$塞到dx里面

$$\int_{x_0}^{x_1}\frac{\partial F}{\partial y'}\frac{d}{dx}\delta ydx=\int_{x_0}^{x_1}\frac{\partial F}{\partial y'}d\delta y=\frac{\partial F}{\partial y'}\delta y|_{x_0}^{x_1}-\int_{x_0}^{x_1}\delta y\frac{d}{dx}\frac{\partial F}{\partial y'}dx$$

由于端点不变，所以δy在两端点处取值均为0，前面那一项定积分没有了；代到源氏中

$$\int_{x_0}^{x_1}(\frac{\partial F}{\partial y}\delta y+\frac{\partial F}{\partial y'}\frac{d}{dx}\delta y)dx=\int_{x_0}^{x_1}(\frac{\partial F}{\partial y}-\frac{d}{dx}\frac{\partial F}{\partial y'})\delta ydx=0$$

积分=0恒成立那么被积函数=0，也就是说

$$\frac{\partial F}{\partial y}-\frac{d}{dx}\frac{\partial F}{\partial y'}=0$$

> 我觉得
>
> $$\frac{\partial F}{\partial y}=\frac{d}{dx}\frac{\partial F}{\partial y'}$$
>
> 看的爽一些，当然这是私心了

#### E-L方程的降阶

上面证出来的方程只是一个一般性的，针对不全部显含三个变量的F，可以把方程降阶简化（参考1）

1.F不显含y':直接就是第二项=0了，所以$\frac{\partial F}{\partial y}=0$没什么好说的

2.F不显含y：$\frac{d}{dx}\frac{\partial F}{\partial y'}=0$=>$\frac{\partial F}{\partial y'}=C$

3.这是最常用的简化，F不显含x，注意到

$$\frac{d}{dx}[F-y'\frac{\partial F}{\partial y'}]=y'\frac{\partial F}{\partial y}+y''\frac{\partial F}{\partial y'}-y''\frac{\partial F}{\partial y'}-y'\frac{d}{dx}(\frac{\partial F}{\partial y'})$$

将$\frac{\partial F}{\partial y}-\frac{d}{dx}\frac{\partial F}{\partial y'}=0$代入，发现

$$\frac{d}{dx}[F-y'\frac{\partial F}{\partial y'}]=0$$

故

$$F-y'\frac{\partial F}{\partial y'}=C_1$$

#### 向高维前进！多函数方程

现在有很多yi(x)以及yi'(x),都仅和参变量x有关且不同的i不相互影响，再来推一遍变分（其他条件是一致的）

$$\delta I[F(y_1,y_2,...,y_1',y_2',...,x)]=\sum\int_{x_1}^{x_2}\frac{\partial F}{\partial y_i}\delta y_i+\frac{\partial F}{\partial y_i'}\delta y_i'+O(\delta)dx$$

$$\int_{x_1}^{x_2}\frac{\partial F}{\partial y_i'}\delta y_i'dx=\int_{x_1}^{x_2}\frac{\partial F}{\partial y_i'}d\delta y_i=-\int_{x_1}^{x_2}\delta y_i\frac{d}{dx}\frac{\partial F}{\partial y_i'}dx$$

$$\delta I[F(y_1,y_2,...,y_1',y_2',...,x)]=\sum\int_{x_1}^{x_2}\frac{\partial F}{\partial y_i}\delta y_i-\delta y_i\frac{d}{dx}\frac{\partial F}{\partial y_i'}+O(\delta)dx$$

$$\delta I[F(y_1,y_2,...,y_1',y_2',...,x)]=\sum\int_{x_1}^{x_2}[\frac{\partial F}{\partial y_i}-\frac{d}{dx}\frac{\partial F}{\partial y_i'}]\delta y_idx$$

所以得到

$$\frac{\partial F}{\partial y_i}-\frac{d}{dx}\frac{\partial F}{\partial y_i'}=0~~~i=1,2,...,n$$

#### 能否适用？任意坐标变换下的拉格朗日方程

牛顿第二定律在非惯性系下失去了原先的表达形式，那我们的拉格朗日宝能否扛过这一劫呢？

设原先的坐标为$\vec x=(x^1,x^2,...,x^N)$和拉格朗日函数L=(x,x·,t)经过函数$q^\mu=q^\mu(x^1,...,x^N,t)$变换后的坐标为$\vec q=(q^1,...,q^N)$

满足$det(\frac{\partial \vec q}{\partial \vec x})\neq 0$

则有

$$\dot q^\mu=\frac{\partial q^\mu}{\partial x^\sigma}\dot x^\sigma+\frac{\partial q^\mu}{\partial t}$$

$$\frac{\partial q^\mu}{\partial x^\sigma}=\frac{\partial\dot q^\mu}{\partial\dot q^\sigma}$$

逆变换

$$\dot x^\sigma=\frac{\partial x^\sigma}{\partial q^\mu}\dot q^\mu+\frac{\partial x^\sigma}{\partial t}$$

> 由此可见带点的变量和对面{带点的变量、原变量}有关，而不带点的变量只和对面原变量有关（不管怎么样都和时间有关）

原方程

$$\frac{d}{dt}\frac{\partial L}{\partial \dot x^\sigma}=\frac{\partial L}{\partial x^\sigma}~~(')$$

欲从中导出的是

$$\frac{d}{dt}\frac{\partial L}{\partial \dot q^\mu}=\frac{\partial L}{\partial q^\mu}~~(*)$$

将*式右侧用中间变量x展开

$$
\begin{aligned}
\frac{\partial L}{\partial q^\mu} & = \frac{\partial L}{\partial x^\sigma}\frac{\partial x^\sigma}{\partial q^\mu}+\frac{\partial L}{\partial \dot x^\sigma}\frac{\partial \dot x^\sigma}{\partial q^\mu}  \\
\end{aligned}
$$

*式左侧展开，x原变量不和q·相关

$$\frac{\partial L}{\partial\dot q^\mu}=\frac{\partial L}{\partial\dot x^\sigma}\frac{\partial\dot x^\sigma}{\partial\dot q^\mu}=\frac{\partial L}{\partial\dot x^\sigma}\frac{\partial x^\sigma}{\partial q^\mu}$$

对上式求导

$$
\begin{aligned}
\frac{d}{dt}\frac{\partial L}{\partial\dot q^\mu} & = \frac{d}{dt}[\frac{\partial L}{\partial\dot x^\sigma}]\frac{\partial x^\sigma}{\partial q^\mu}+\frac{\partial L}{\partial\dot x^\sigma}\frac{d}{dt}[\frac{\partial x^\sigma}{\partial q^\mu}]  \\
& = \frac{d}{dt}[\frac{\partial L}{\partial\dot x^\sigma}]\frac{\partial x^\sigma}{\partial q^\mu}+\frac{\partial L}{\partial\dot x^\sigma}\frac{\partial \dot x^\sigma}{\partial q^\mu}  \\
\end{aligned}
$$

已经可以看出两个拉格朗日方程之间的联系了，即'式同乘$\frac{\partial x^\sigma}{\partial q^\mu}$并加上$\frac{\partial L}{\partial\dot x^\sigma}\frac{\partial \dot x^\sigma}{\partial q^\mu}$就得到了*式。这两个方程的等价性得到验证。

#### 多参量问题/场的拉格朗日方程

现假设有标量场（多元函数）$\psi(x^i)$(xi是多元参数，为了统一写法，令x^0=t,x^1,x^2等等是广义坐标)

以及拉格朗日函数$L(\psi,\frac{\partial \psi}{\partial x^i},x^i)$,用下标表示求偏导，$\psi_i=\frac{\partial \psi}{\partial x^i}$,函数写作$L(\psi,\psi_i,x^i)$注：参数之间不相干，所以$\frac{\partial \psi}{\partial x^i}=\frac{d \psi}{d x^i}$

再用变分法导出拉格朗日方程

$$S=\int_{x^n_1}^{x^n_2}...\int_{t_1}^{t_2}L(\psi,\frac{\partial \psi}{\partial x^i},x^i)dtdx^1...dx^n$$

在单参数t情况下，对S的变分是等时端点不变的；在这里稍做推广，这个变分对所有的参数x^i都是不变的，端点也固定。

$$\delta S=\int_{x^n_1}^{x^n_2}...\int_{t_1}^{t_2}[\frac{\partial L}{\partial\psi}\delta\psi+\frac{\partial L}{\partial\psi_i}\delta\psi_i]dtdx^1...dx^n=0$$

和之前一个套路

$$\delta S=\int_{x^n_1}^{x^n_2}...\int_{t_1}^{t_2}[\frac{\partial L}{\partial\psi}\delta\psi+\frac{\partial L}{\partial\psi_i}\frac{d}{dx^i}\delta\psi]dtdx^1...dx^n=0$$

$$\delta S=\int_{x^n_1}^{x^n_2}...\int_{t_1}^{t_2}[(\frac{\partial L}{\partial\psi}-\frac{d}{dx^i}\frac{\partial L}{\partial\psi_i})\delta\psi]dtdx^1...dx^n=0$$

可得

$$\frac{\partial L}{\partial\psi}-\frac{d}{dx^i}\frac{\partial L}{\partial\psi_i}=0$$

后面那一坨是求和形式

应用举例：用绷紧的弦小振动模型导出波动方程

> 这个例子用特殊情况（小振动）推出了一般的波动方程，原则上来讲是不能直接得到所有振动（包括大振动）都满足波动方程的。这个例子有他的片面性。

把它想成一段伸长的弹簧，劲度系数为k，不振动时每单位长度伸长量为a（a=总伸长量$\Delta l$/原长），绷紧后线密度为σ长度为l

引入一个叫拉格朗日密度的东西L;这段弦的拉格朗日函数被写作

$$L_0=\int_0^l Ldx$$

动能密度T和势能密度V用类似的定义给出

设在垂直于绳方向偏离平衡位置的位移为u(x,t),则$L=L(u,u_x,u_t,x,t)=T-V$，x和t是两个独立的参量

则$T=\frac{1}{2}\sigma u_t^2$,下面计算V

(x,x+dx)一小段由振动带来的伸长量

$$d l=ds-dx=(\sqrt{1+u_x^2}-1)dx=\frac{1}{2}u_x^2dx$$

其中用到了小振动近似。下面接着用小振动近似，把张力看作不变量且等于初始量H0=kΔl；张力密度H=ka，那么势能密度

$$V=Hdl/dx=\frac{1}{2}Hu_x^2$$

拉格朗日密度

$$L=T-V=\frac{1}{2}\sigma u_t^2-\frac{1}{2}Hu_x^2$$

代入到场的拉格朗日方程，可得

$$u_{tt}=\frac{H}{\sigma}u_{xx}$$

满足波动方程形式。

再来一个好玩的，下面从电磁场作用量来推导四维形式麦克斯韦方程组等价表达以及电磁场波动方程

$$\left\{\begin{align}     \nabla \cdot \overrightarrow{E}=\frac{\rho}{\varepsilon_0} (1)\\     \nabla \times \overrightarrow{E}+\frac{\partial \overrightarrow{B}}{\partial t}=0(2)\\     \nabla \cdot \overrightarrow{B}=0 (3)\\      \nabla \times \overrightarrow{B}=\mu_0\vec J+\mu_0\varepsilon_0\frac{\partial \overrightarrow{E}}{\partial t} (4)   \end{align}\right.$$

在下一小节我从三维形式麦克斯韦方程组推导了怎么引入φ和A，这里就直接拿来用了

$$\vec B=\nabla\times\vec A$$

$$\vec E=-\nabla\phi-\frac{\partial \vec A}{\partial t}$$

引入洛伦兹规范

$$\nabla·\vec A+\frac{1}{c^2}\frac{\partial\phi}{\partial t}=0$$

把B和E代入4式，并用洛伦兹规范代换，可得

$$\nabla^2\vec A-\frac{1}{c^2}\frac{\partial^2\vec A}{\partial t^2}=-\mu_0\vec J$$

把B和E代入1式，并用洛伦兹规范代换，可得

$$\nabla^2\phi-\frac{1}{c^2}\frac{\partial^2\phi}{\partial t^2}=-\frac{\rho}{\varepsilon_0}$$

> 这里令J=0可以得到A的波动方程了

引入四维J矢：带电例子运动时，总电荷量保持不变，但是体元收缩，会导致电荷密度增大

$$\rho=\frac{\rho_0}{\sqrt{1-\frac{u^2}{c^2}}}=\gamma\rho_0$$

类似于$x_\mu=(x^1,x^2,x^3,ict)$,可以引入$J_\mu=(J^1,J^2,J^3,ic\rho)$

洛伦兹规范变化下的麦克斯韦方程组微分算符

$$\square\equiv\nabla^2-\frac{1}{c^2}\frac{\partial^2}{\partial t^2}$$

此时电磁场方程写作

$$\square\vec A=-\mu_0\vec J$$

$$\square\phi=-\mu_0 c^2\rho$$

上面我们把J和ρ用一个四维矢量捆绑了起来，纵向对比，A和φ也应该可以捆绑起来考虑。将下式同除c,再乘i得

$$\square\frac{i}{c}\phi=-\mu_0 ic\rho$$

两式合并，令$A_\mu=(\vec A,\frac{i}{c}\phi)$(这一个四维矢量就代表了电磁场所有EB之类的)

$$\square A_\mu=-\mu_0 J_\mu$$

下面引入电磁场张量，接着就可以有电磁场作用力了

将B用A表出（叉乘）

$$B^i=\varepsilon^{ijk}\partial_j A_k$$

比如说

$$B^1=\partial_2 A_3-\partial_3A_2$$

每个都是两项，类似于对易子的结构，所以引入张量，这个张量包含了电磁场的B和E

$$F_{\mu\nu}\equiv\partial_\mu A_\nu-\partial_\nu A_\mu$$

例如

$$B^1=F_{23}$$

$$F_{14}=\partial_1(\frac{i}{c}\phi)-\partial_4 A_1=-\frac{i}{c}E_1$$

F整体长这个样子

$$ F_{\mu\nu} =\begin{pmatrix}
    0&B_3&-B_2&-\frac{i}{c}E_1\\
    -B_3&0&B_1&-\frac{i}{c}E_2\\
    B_2&-B_1&0&-\frac{i}{c}E_3\\
    \frac{i}{c}E_1&\frac{i}{c}E_2&\frac{i}{c}E_3&0
\end{pmatrix} $$

$$F^{\mu\nu}\equiv\partial^\mu A^\nu-\partial^\nu A^\mu$$

而我们这一套ict用的度规是单位矩阵，所以$F^{\mu\nu}=F_{\mu\nu}$

电磁场作用量为(差不多是凑出来的，《classical field theory》P66有讲怎么推系数)

$$L=-\frac{1}{16\pi}F_{\mu\nu}F^{\mu\nu}-\frac{1}{c}J^\mu A_\mu$$

回到主线，利用最小作用量原理,假设前提：J是常量,(x^3,t)是参数；对A变分

$$\delta S=-\frac{1}{16\pi}\int_a^b\delta (F_{\mu\nu}F^{\mu\nu}d^4x)-\frac{1}{c}\int_a^bJ^\mu\delta A_\mu d^4x=0$$

和之前的套路不太一样，这次要将第一个积分凑出$\delta A_\mu d^4x$，和第二个积分合并;注意到$F^{\mu\nu}=F_{\mu\nu}$,所以有

$$\delta(F^{\mu\nu}F_{\mu\nu})=2F^{\mu\nu}(\delta F_{\mu\nu})=2F^{\mu\nu}(\partial_\mu\delta A_\nu-\partial_\nu\delta A_\mu)=2(F^{\mu\nu}\partial_\mu\delta A_\nu-F^{\mu\nu}\partial_\nu\delta A_\mu)$$

交换后一部分求和哑变量,可得

$$2(F^{\mu\nu}\partial_\mu\delta A_\nu-F^{\mu\nu}\partial_\nu\delta A_\mu)=2(F^{\mu\nu}\partial_\mu\delta A_\nu-F^{\nu\mu}\partial_\mu\delta A_\nu)$$

由于F的反对称性$F^{\mu\nu}=-F^{\nu\mu}$可得

$$2(F^{\mu\nu}\partial_\mu\delta A_\nu-F^{\nu\mu}\partial_\mu\delta A_\nu)=4F^{\mu\nu}\partial_\mu\delta A_\nu$$

$$\delta S=-\frac{1}{4\pi}\int_a^bF^{\mu\nu}\partial_\mu\delta A_\nu d^4x-\frac{1}{c}\int_a^bJ^\mu\delta A_\mu d^4x=0$$

$$\int_a^b(F^{\mu\nu}\partial_\mu+\frac{4\pi}{c}J^\nu)\delta A_\nu d^4x=0$$

$$\partial_\mu F^{\mu\nu}+\frac{4\pi}{c}J^\nu=0$$

可以看出，当$\nu=1,2,3$时，上式与运动电荷、感生电场产生磁场那个式子等价。比如我们算算v=1

$$\partial_\mu F^{\mu1}=-\frac{4\pi}{c}J^1$$

$$-\frac{\partial B_3}{\partial x_2}+\frac{\partial B_2}{\partial x_3}+\frac{\partial\frac{i}{c}E_i}{ict}=-\frac{4\pi}{c}J^1$$

$$(\nabla\times\vec B)^1=\frac{4\pi}{c}J^1+\frac{1}{c^2}\frac{\partial E_1}{\partial t}$$

3个分量合起来就成了真空时的

$$\nabla\times\vec B=\mu_0\vec J+\mu_0\varepsilon_0\frac{\partial\vec E}{\partial t}$$

同理$\nu=4$时，等价于$\nabla \cdot \overrightarrow{E}=\frac{\rho}{\varepsilon_0}$

这样，拉格朗日导出的运动方程可以代表两个麦克斯韦中的方程，还差两个方程

$$\nabla \times \overrightarrow{E}+\frac{\partial \overrightarrow{B}}{\partial t}=0\\     \nabla \cdot \overrightarrow{B}=0$$

展开，往电磁张量靠

$$\varepsilon^{ijk}\partial_jE_k+ic\frac{\partial B_i}{\partial ict}=0\\     \partial_iB_i=0$$

第一个式子展开并用F代换

$$\sum_{cyc}^{2,3,4}\partial_x F_{yz}=\sum_{cyc}^{3,1,4}\partial_x F_{yz}=\sum_{cyc}^{1,2,4}\partial_x F_{yz}=0$$

第二个式子用F代换

$$\sum_{cyc}^{1,2,3}\partial_x F_{yz}=0$$

四个式子完美合并为一个

$$\partial_\mu F_{\nu\sigma}+\partial_\sigma F_{\mu\nu}+\partial_\nu F_{\sigma\mu}=0$$

用循环求和表示

$$\partial_{(\mu} F_{\nu\sigma)}=0$$

#### 非保守力？对拉格朗日方程的缝缝补补

这是我们亲爱的拉格朗日方程

$$\frac{d}{dt}\frac{\partial L}{\partial\dot q_i}-\frac{\partial L}{\partial q_i}=0$$

> 一个邪门的理解方式（别较真）：dp/dt-F=0动量定理，拉格朗日方程全部在F这一层！有助于下面的理解

它可以干很多事情。这时候突然来了个非保守力Q,然后他就重伤倒地了！所以必须对拉格朗日方程缝缝补补，把它拉起来。。。

一个最直接粗暴的办法：直接添力

$$\frac{d}{dt}\frac{\partial L}{\partial\dot q_i}-\frac{\partial L}{\partial q_i}=Q_i$$

但是如果这个力Q性质较好的话，比如可以写作

$$Q_i=\frac{d}{dt}\frac{\partial U}{\partial\dot q_i}-\frac{\partial U}{\partial q_i}$$

> 其中第一项是比正牌保守力多出来的

那么只需要改写拉格朗日函数$L=T-U$(U把保守力也算上了)，可以维持拉格朗日方程形式不变。幸运的是，电磁场中的洛伦兹力恰好满足这种形式！

已知三维电磁场中带电量为e的粒子所受合力$F=e\vec E+e\dot{\vec x}\times\vec B$，$\vec x=(q_1,q_2,q_3)=(x,y,z)$求电磁场中的拉格朗日函数(承接上文，主要就是求那个U)

从麦克斯韦方程组开始，将E和B用标势和矢势表出(还好我上学期干过这个事)

$$\left\{\begin{align}     \nabla \cdot \overrightarrow{E}=\frac{\rho}{\varepsilon_0} (1)\\     \nabla \times \overrightarrow{E}+\frac{\partial \overrightarrow{B}}{\partial t}=0(2)\\     \nabla \cdot \overrightarrow{B}=0 (3)\\      \nabla \times \overrightarrow{B}=\mu_0\vec J+\mu_0\varepsilon_0\frac{\partial \overrightarrow{E}}{\partial t} (4)   \end{align}\right.$$

根据3式，旋度场的散度为0，所以可以写作

$$\vec B=\nabla\times\vec A(\vec x,t)$$

根据2式,并且梯度场的旋度为0，所以

$$\nabla\times\vec E=-\nabla\times\frac{\partial \vec A}{\partial t}$$

$$\nabla\times(\vec E+\frac{\partial \vec A}{\partial t})=0$$

$$\vec E+\frac{\partial \vec A}{\partial t}=-\nabla\phi(\vec x,t)$$

$$\vec E=-\nabla\phi-\frac{\partial \vec A}{\partial t}$$

将受力代入牛二并展开

$$m\ddot{\vec x}=e\vec E+e\dot{\vec x}\times\vec B=e(-\nabla\phi-\frac{\partial \vec A}{\partial t}+\dot{\vec x}\times\nabla\times\vec A)$$

> 下面是我算双叉乘指标求和表示的臭长过程
>
> 1.纯抽象指标(最标准好算，但不直观)
>
> $$\nabla\times \vec A=\varepsilon^{ijk}\partial_j A_k$$
>
> $$\begin{aligned}&\dot{\vec x}\times\nabla\times \vec A\\
&=\varepsilon^{ijk}\dot q_j(\varepsilon_{klm}\partial^lA^m)\\
&=\varepsilon^{ijk}\varepsilon_{klm}\dot q_j\partial^lA^m\\
&=\left | \begin{matrix}
\delta^i_k &\delta^i_l   &\delta^i_m \\
\delta^j_k &\delta^j_l &\delta^j_m  \\
\delta^k_k &\delta^k_l &\delta^k_m \\
\end{matrix} \right | \dot q_j\partial^lA^m\\
&=[3(\delta^i_l\delta^j_m-\delta^i_m\delta^j_l)-\delta^k_l(\delta^i_k\delta^j_m-\delta^i_m\delta^j_k)+\delta^k_m(\delta^i_k\delta^j_l-\delta^i_l\delta^j_k)]\dot q_j\partial^lA^m\\
&=[3\delta^i_l\delta^j_m-3\delta^i_m\delta^j_l-\delta^i_l\delta^j_m+\delta^i_m\delta^j_l+\delta^i_m\delta^j_l-\delta^i_l\delta^j_m]\dot q_j\partial^lA^m\\
&=(\delta^i_l\delta^j_m-\delta^i_m\delta^j_l)\dot q_j\partial^lA^m
\end{aligned}$$
>
> 2.拼（我流）（作为初学者直观一点
>
> 暴力叉乘
>
> $$\dot{\vec x}\times\nabla\times \vec A=
\left | \begin{matrix}
\hat i &\hat j   &\hat k \\
\dot q_1&\dot q_2&\dot q_3 \\
\partial^2A^3-\partial^3A^2 &\partial^3A^1-\partial^1A^3 &\partial^1A^2-\partial^2A^1
\end{matrix} \right | $$
>
> 比如说第一个分量就是$\dot q_3(\partial^1A^3-\partial^3A^1)+\dot q_2(\partial^1A^2-\partial^2A^1)$
>
> 其中那个1是和第一个分量对应的，不参与轮换；轮换一般是三项，所以补一项,这一项结果是0
>
> $$\dot q_3(\partial^1A^3-\partial^3A^1)+\dot q_2(\partial^1A^2-\partial^2A^1)+\dot q_1(\partial^1A^1-\partial^1A^1)$$
>
> 也即(i分量的)
>
> $$\dot q_k(\partial^iA^k-\partial^kA^i)$$

分量形式

$$m\ddot q_i=e(-\frac{\partial\phi}{\partial q_i}-\frac{\partial A_i}{\partial t}+\dot q_k(\partial^iA^k-\partial^kA^i))$$

其中，左侧来自于$\frac{d}{dt}\frac{\partial T}{\partial\dot q_i}$,右侧就是要凑的$\frac{\partial U}{\partial q_i}-\frac{d}{dt}\frac{\partial U}{\partial\dot q_i}$；现在看右边（去掉常数e、移项改符号）

$$\frac{\partial\phi}{\partial q_i}+\frac{\partial A_i}{\partial t}-\dot q_k(\partial^iA^k-\partial^kA^i)$$

第一项Φ正好放到U里面：不管；第二项必须把偏补成全（和诺特一个技巧）

$$
\begin{aligned}
&\frac{\partial\phi}{\partial q_i}+(\frac{\partial A_i}{\partial t}+\dot q_k\partial^kA^i)-\dot q_k\partial^iA^k\\
 & = \frac{\partial\phi}{\partial q_i}+\frac{dA_i}{dt}  \\
& = \frac{\partial}{\partial q_i}(\phi-\dot q_kA^k)+\frac{dA_i}{dt}  \\
\end{aligned}
$$

已经很接近需要的形式了；注意到$\frac{d}{dt}\frac{\partial U}{\partial\dot q_i}$;最后一项还差一个$\frac{\partial}{\partial{\dot q_i}}$结构,所以补上

$$\frac{\partial}{\partial q_i}(\phi-\dot q_kA^k)+\frac{d}{dt}\frac{\partial}{\partial{\dot q_i}}\dot q_iA_i$$

> 欧式坐标上下指标就不管了，乱移

别忘了之前去掉的常数e，目力出$U=e(\phi-\dot q_iA^i)=e(\phi-\dot{\vec x}·\vec{A})$(上面这式子就是$\frac{\partial U}{\partial q_i}-\frac{d}{dt}\frac{\partial U}{\partial\dot q_i}$除e),此时拉格朗日函数

$$L=T-U=\frac{1}{2}m\dot{\vec x}-e(\phi-\dot{\vec x}·\vec{A})$$

电磁场拉氏量的规范变换

$$\phi \rightarrow\phi-\frac{\partial\chi}{\partial t}~~~,~~~\vec A\rightarrow\vec A+\nabla\chi$$

代回L

$$L'=L+\frac{\partial\chi}{\partial t}+\dot{\vec x}·\nabla\chi=L+\frac{d}{dt}\chi$$

这对拉格朗日方程以及运动方程毫无影响

用四维矢量的观点来看规范变换（朗道《场论》,但是用的自己的约定）

$$A_\mu=(\vec A,\frac{i}{c}\phi)$$

$$x_\mu=(\vec x,ict)$$

令$A_\mu'=A_\mu+\partial_\mu\chi$，则

$$\phi \rightarrow\phi-\frac{i}{c}\frac{\partial\chi}{\partial t}~~~,~~~\vec A\rightarrow\vec A+\nabla\chi$$

> 注：这和上面（老师讲义）里的约定不一样。。老师的t直接放的ct。。不看i的话，推导L时Φ和A是同量纲的，而下面规范变换规定的四维A矢中Φ要÷c，这就是为什么差个c的大致描述。。

#### 相对论性拉格朗日力学初步

天降拉氏量

$$L=-mc^2\sqrt{1-\frac{v^2}{c^2}}$$

> 当v<<c时做泰勒展开，丢掉常数项，得到$L'=\frac{mv^2}{2}$回到了非相对论情况

利用动量定义$p=\frac{\partial L}{\partial v}$

得到

$$p=\frac{mv}{\sqrt{1-\frac{v^2}{c^2}}}$$

能量与动量的关系

$$\frac{E^2}{c^2}=p^2+m^2c^2$$

在自然单位制下

$$E^2=p^2+m^2$$

> 有种静能动能正交勾股定理那种微妙的感觉。。总之很好记

根据能量（哈密顿量）定义$E=pv-L$

$$E=\frac{mc^2}{\sqrt{1-\frac{v^2}{c^2}}}$$

替换成p表示

$$H=c\sqrt{p^2+m^2c^2}$$

静能$E=mc^2$,在一些物理过程中（比如正负电子对湮灭），可以将静能释放出来，在这种过程中不满足质量守恒，但是满足总能量守恒

速度很小时幂级数展开$E=mc^2+\frac{mv^2}2$

四维动量

$$p_i=-\frac{\partial S}{\partial x^i}$$

$$S=-mc\int_a^bds$$

按照-1111（跟朗道反着来）

$$p_i=(-E/c,p)$$

$$p^i=(E/c,p)$$

联系4速度

$$u^i=(\gamma,v\gamma/c)$$

可得

$$p^i=mcu^i=m\gamma v^i$$

$$p_ip^i=m^2c^2$$

#### 双曲相对论

更有几何的感觉

基础：

$$\frac{v}{c}=tanh(s)$$

$$\gamma=cosh(s)$$

$$E=mc^2cosh(s)$$

$$p=mcsinh(s)$$

洛伦兹变换：x是速度方向

$$ \begin{pmatrix}
    ct\\
    x
\end{pmatrix} =\begin{pmatrix}
    coshs&sinhs\\
    sinhs&coshs
\end{pmatrix} \begin{pmatrix}
    ct\\
    x
\end{pmatrix}$$

只要记住同分量带cosh，不同分量带sinh就好了

### 变分/拉格朗日方程的应用

现在，你已经是个成熟的E-L方程大师了，快快来试试最速降线问题吧

#### 最速降线

![Image](https://pic4.zhimg.com/80/v2-6ebf99491fdab7f9f2c16a7397abb94b.png)

题目就是从O到定点(x0,y0)找到一条曲线y(x)使得沿着这条线下落速度最快

由能量守恒，在y处的速度

$$v=\sqrt{2gy}$$

$$ds=\sqrt{1+y'^2}dx$$

$$dt=\frac{ds}{v}=\frac{\sqrt{1+y'^2}}{\sqrt{2gy}}dx$$

欲求极值

$$I[F(y,y')]=\int_0^{x_0}\frac{\sqrt{1+y'^2}}{\sqrt{2gy}}dx$$

去除常系数，将$F(y,y')=\frac{\sqrt{1+y'^2}}{\sqrt{y}}$代入E-L方程简化版的第三种形式

$$\frac{\partial F}{\partial y'}=\frac{y'}{\sqrt{y(1+y'^2)}}$$

$$1+y'^2=y'^2+C_1\sqrt{y(1+y'^2)}$$

$$y(1+y'^2)=C_2$$

令y=a(1-cosθ),(a=C_2/2)则dy/dθ=asinθ

> 不要问我怎么设的，不看答案我也设不出来

$$a(1-cosθ)(1-(\frac{asinθ}{dx/d\theta})^2)=2a$$

$$\frac{a^2sin^2\theta}{\frac{dx}{d\theta}^2}=\frac{-1-cos\theta}{1-cos\theta}$$

$$\frac{dx}{d\theta}^2=\frac{asin^2\theta(1-cos\theta)}{-1-cos\theta}=\frac{a(1-cos^2\theta)(1-cos\theta)}{-1-cos\theta}=a^2(1-cos\theta)^2$$

$$x=a(\theta-sin\theta)$$

> 不用加C因为过原点

得到了参数方程

$$\left\{\begin{align}
    y=a(1-cosθ) \\
    x=a(\theta-sin\theta)
\end{align}\right.$$

#### 球面最短距离路径

反正走不开球面，干脆设半径是1好了;两个点一个在φ=0的北极一个在φ=α

$$\left\{\begin{align}
    x=sin\varphi cos\theta \\
    y=sin\varphi sin\theta\\
    z=cos\varphi
\end{align}\right.$$

$$\left\{\begin{align}
    x=-sin\varphi sin\theta d\theta+cos\varphi cos\theta d\varphi\\
    y=cos\varphi sin\theta d\varphi+sin\varphi cos\theta d\theta\\
    z=-sin\varphi d\varphi
\end{align}\right.$$

$$ds^2=dx^2+dy^2+dz^2=d\varphi^2+sin^2\varphi d\theta^2$$

$$ds=\sqrt{1+sin^2\varphi\theta'^2}d\varphi$$

这里的$\theta'$表示$\frac{d\theta}{d\varphi}$（要求θ（φ））

欲求极值

$$I[F(\theta,\theta',\varphi)]=\int_0^\alpha\sqrt{1+sin^2\varphi\theta'^2}d\varphi$$

F中不显含θ，代入简化版方程：

$$\frac{\partial f}{\partial \theta'}=\frac{sin^2\varphi\theta'}{\sqrt{1+sin^2\varphi\theta'^2}}=C~(*)~$$

解出

$$\frac{d\theta}{d\varphi}=\frac{C}{sin\varphi\sqrt{sin^2\varphi-C^2}}$$

由边界条件，有

$$\int_0^\alpha\frac{d\theta}{d\varphi}d\varphi=0$$

$$C·\int_0^\alpha\frac{d\varphi}{sin\varphi\sqrt{sin^2\varphi-C^2}}=0$$

1°若C不等于0，则

$$\int_0^\alpha\frac{d\varphi}{sin^2\varphi}=0$$

而$sin^2φ>=0$仅在0处取等，故不成立

得出C=0，带回（*），还是因为sinφ不恒等于0的道理，得出

$$\theta'=0$$

也即θ不随φ变化而变化，最短路径是经线。

三维坐标下的费马

给出空间每一点的折射率n(x,y,z)，xyz均分别由参数a控制，求一条曲线（给出3个限制方程），来描述两定点间的光路

$$ds=\sqrt{x'^2+y'^2+z'^2}da$$

$$v(x,y,z)=c/n(x,y,z)$$

$$dt=(n\sqrt{x'^2+y'^2+z'^2}/c)da$$

去除常数，得到F=$n\sqrt{x'^2+y'^2+z'^2}$,代入两个E-L方程

$$\left\{\begin{align}
    \sqrt{x'^2+y'^2+z'^2}\frac{\partial n}{\partial x}=\frac{d}{da}(\frac{nx'}{\sqrt{x'^2+y'^2+z'^2}}) \\
    \sqrt{x'^2+y'^2+z'^2}\frac{\partial n}{\partial y}=\frac{d}{da}(\frac{ny'}{\sqrt{x'^2+y'^2+z'^2}}) \\
    \sqrt{x'^2+y'^2+z'^2}\frac{\partial n}{\partial z}=\frac{d}{da}(\frac{nz'}{\sqrt{x'^2+y'^2+z'^2}})
\end{align}\right.$$

#### 转起来吧！感受科里奥利奥的美味

> 这次利用拉格朗日方程和坐标旋转来推导旋转坐标系下的运动（注：这是我用第四种方法推科氏力了）

设原始坐标系函数为(x,y),同平面顺时针旋转wt后的坐标为(X,Y);无论你是SO(2)糕手还是线代新手，都会写出这样的线性关系

$$\begin{pmatrix}
    X\\
    Y
\end{pmatrix}=\begin{pmatrix}
    coswt&sinwt\\
    -sinwt&coswt\\
\end{pmatrix}\begin{pmatrix}
    x\\
    y
\end{pmatrix}$$

> 注：我也不知道为什么，黑板上给的顺时针的矩阵我就照着推了，虽然一般都会先给逆时针。反正是等效的。

把逆矩阵放过去，用XY表示xy

$$\begin{pmatrix}
    x\\
    y
\end{pmatrix}=\begin{pmatrix}
    coswt&-sinwt\\
    sinwt&coswt\\
\end{pmatrix}\begin{pmatrix}
    X\\
    Y
\end{pmatrix}$$

自由粒子在原坐标xoy中的拉氏量为

$$L=\frac{m}{2}(\dot x^2+\dot y^2)$$

要把xy用XY替换

$$x=Xcoswt-Ysinwt$$

$$y=Xsinwt+Ycoswt$$

$$\dot x=\dot Xcoswt-Xwsinwt-\dot Ysinwt-Ywcoswt$$

$$\dot y=\dot Xsinwt+Xwcoswt+\dot Ycoswt-Ywsinwt$$

$$\dot x^2+\dot y^2=\dot X^2+\dot Y^2+w^2(X^2+Y^2)-2(\dot XYw-X\dot Yw)$$

> 在这轻描淡写的一行之下经历了一通爆算
>
> ![建议好好分类拼凑，要不然太混乱了](https://pic4.zhimg.com/80/v2-5edf6216a4636bca99c5e4700f7c6fd5.png)

可得

$$L=\frac{m}{2}[(\dot X-wY)^2+(wX+\dot Y)^2]$$

$$\frac{\partial L}{\partial X}=mw(wX+\dot Y)$$

$$\frac{d}{dt}\frac{\partial L}{\partial\dot X}=m(\ddot X-w\dot Y)$$

$$\Rightarrow~~w^2X+w\dot Y=\ddot X-w\dot Y$$

$$\frac{\partial L}{\partial Y}=-mw(\dot X-wY)$$

$$\frac{d}{dt}\frac{\partial L}{\partial\dot Y}=m(w\dot X+\ddot Y)$$

$$\Rightarrow~~-w\dot X+w^2Y=w\dot X+\ddot Y$$

整理一下

$$\left\{\begin{align}
    \ddot X=w^2X+2w\dot Y \\
    \ddot Y=w^2Y-2w\dot X
\end{align}\right.$$

这就是离心力和科里奥利力在直角坐标下的表示

![Image](https://pic4.zhimg.com/80/v2-1326a303964f7db7d7029f3b669b7bd7.png)

#### 加速！这就是相对论效应

在相对论效应下，动能的表达形式有所变化，拉氏量改写为(一维)

为了防止又臭又长，把v/c记作γ

$$L=-mc^2\sqrt{1-\frac{\dot x^2}{c^2}}-U(x)$$

$$\frac{\partial L}{\partial x}=-\frac{dU}{dx}$$

$$\frac{d}{dt}\frac{\partial L}{\partial\dot x}=\frac{d}{dt}\frac{m\dot x}{\sqrt{1-\frac{\dot x^2}{c^2}}}=\frac{m\ddot x\sqrt{1-\gamma^2}+m\dot x(\frac{\dot x}{c^2}/\sqrt{1-\gamma^2})}{\sqrt{1-\gamma^2}}=m\ddot x+m\frac{\gamma^2}{1-\gamma^2}$$

由

$$\frac{\partial L}{\partial x}=\frac{d}{dt}\frac{\partial L}{\partial \dot x}$$

可得

$$m\ddot x+m\frac{\gamma^2}{1-\gamma^2}=-\frac{dU}{dx}$$

当$\dot x<<c$时，原方程化为

$$m\ddot x=-\frac{dU}{dx}$$

与牛顿第二定律相符合。

#### 向其他坐标推广！由拉氏量导出测地线方程

> 前置：一些关于度规在动能上的使用（只是一种记号，没有什么新东西）
>
> 关键在于把函数T(q_1,q_2,q_3)写成关于q123的二次型，中间夹的对称矩阵就是度规了
>
> 比如说直角坐标系，$T=\frac{m}{2}(\dot x^2+\dot y^2+\dot z^2)$,写成二次型就是
>
> $$ T =\frac{m}{2}\begin{pmatrix}
    \dot x&\dot y&\dot z
\end{pmatrix}
\begin{pmatrix}
    1& & \\
     &1& \\
     & &1
\end{pmatrix}
\begin{pmatrix}
    \dot x\\
    \dot y\\
    \dot z
\end{pmatrix}=\frac{m}{2}g_{\mu \nu}\dot x^\nu \dot x^\mu$$
>
> 其中$g_{\mu \nu}$表示中间矩阵$\mu$行$\nu$列的元素，这就是直角坐标的度规，$\sqrt g$表示面积元dS伸缩比（类似于做重积分由直角坐标换成其他坐标时要乘上的东西）
>
> 下面试试球坐标$T=\frac{m}{2}(\dot x^2+\dot y^2+\dot z^2)$
>
> $$ T =\frac{m}{2}\begin{pmatrix}
    \dot r&\dot \theta&\dot \varphi
\end{pmatrix}
\begin{pmatrix}
    1& & \\
     &r^2& \\
     & &r^2sin^2\theta
\end{pmatrix}
\begin{pmatrix}
    \dot r\\
    \dot \theta\\
    \dot \varphi
\end{pmatrix}=\frac{m}{2}g_{\mu \nu}\dot x^\nu \dot x^\mu$$
>
> 同样的，$\sqrt g=r^2sin\theta$,就是你积分换元的时候多出来的一项
>
> 前置2：克氏符
>
> 在之前“极坐标的旋转”问题中，由于基矢随着时间变化而改变，所以定义了
>
> $$\Gamma_{\alpha\beta}^c\vec e_c=\frac{\partial\vec e_\alpha}{\partial x^\beta}$$
>
> 简单解释一下，就是基矢随着坐标的变化率，被原先那一套基矢上表示的分量值。下面从协变导数那一套来推导一下，上面偏导定义是克氏符在平直空间中的特例。
>
> 方向协变导数$\nabla_X$是标量函数方向微分在流形上的推广，满足线性、莱布尼兹、可以与缩并交换。对于多元标量函数f，有
>
> $$\nabla_X f=X(f)=X^\mu\partial_\mu f$$
>
> 将任意方向X转化为基矢$e_\mu$方向导数方法
>
> $$\nabla_XT(...)=\nabla T(X,...)=X^\mu \nabla T(e_\mu,...)=X^\mu\nabla_\mu T(...)$$
>
> 不带下标的nabla是协变导数，这里就不展开说定义了。现在将$\partial_\rho$的方向协变导数作用在基矢$e_\mu=\partial_\mu$上
>
> $$\nabla_\rho e_\mu=\nabla e_\mu(e_\rho)=C_{\sigma\mu}^\nu\theta^\sigma\otimes e_\nu·e_\rho=C_{\rho\mu}^\nu e_\nu=\Gamma_{\rho\mu}^\nu e_\nu$$
>
> >其中，第一个等式运用了张量的两种表述形式，23个等号是协变导数那边的定义，联络系数C也是由协变导数作用在基矢上这种方法定义出来的；第4个等号是将$\nabla_X$作用在$\partial_\mu$上的C写作Γ
>
> $$\nabla_\rho e_\mu=\Gamma_{\rho\mu}^\nu e_\nu$$
>
> 又：无挠(角标可交换)+与度规适配的联络导数称作克氏符。现在将这个克氏符的联络定义式和先前的偏导展开定义联系一下。
>
> $$\frac{\partial}{\partial x_\mu}·\frac{\partial\vec x}{\partial x_\rho}=\frac{\partial e_\rho|_x}{\partial x_\mu}=\Gamma_{\rho\mu}^\nu e_\nu|_x=\Gamma_{\mu\rho}^\nu e_\nu|_x=\nabla_\mu e_\rho|_x=\nabla_\mu\frac{\partial \vec x}{\partial x_\rho}=\frac{\partial}{\partial x_\mu}·\frac{\partial\vec x}{\partial x_\rho}$$
>
> 以$\Gamma_{\rho\mu}^\nu e_\nu$为中心，向左是较初等的偏导定义，向右是联络定义，最后可以验证在矢量场X下等价。这个式子我在哪都找不到根据，请持批判性态度对待，欢迎指正。
>
> 下面利用特殊联络与度规适配的特性反表克氏符
>
> $$\nabla_\rho g_{\mu\nu}=0$$
>
> $$\left\{\begin{align}
    \nabla_\rho g_{\mu\nu}=\partial_\rho g_{\mu\nu}-\Gamma_{\rho\mu}^\lambda g_{\lambda\nu}-\Gamma_{\nu\rho}^\lambda g_{\mu\lambda}=0 \\
    \nabla_\mu g_{\nu\rho}=\partial_\mu g_{\nu\rho}-\Gamma_{\mu\nu}^\lambda g_{\lambda\rho}-\Gamma_{\rho\mu}^\lambda g_{\nu\lambda}=0 \\
    \nabla_\nu g_{\rho\mu}=\partial_\nu g_{\rho\mu}-\Gamma_{\nu\rho}^\lambda g_{\lambda\mu}-\Gamma_{\mu\nu}^\lambda g_{\rho\lambda}=0
\end{align}\right.$$
>
> 怎么展开的请去看联络在张量上的作用。总之这里把三个坐标轮换了一下得到三个等式，欲从中解出$\Gamma_{\rho\mu}^\lambda$，-(1)-(2)+(3)得
>
> $$-\partial_\rho g_{\mu\nu}-\partial_\mu g_{\nu\rho}+\partial_\nu g_{\rho\mu}+2\Gamma_{\rho\mu}^\lambda g_{\lambda\nu}=0$$
>
> $$\Gamma_{\rho\mu}^\lambda =\frac{g^{\lambda\nu}}{2}(\partial_\rho g_{\mu\nu}+\partial_\mu g_{\nu\rho}-\partial_\nu g_{\rho\mu})$$
>
> 其中$g^{\lambda\nu}g_{\lambda\mu}=\delta_\mu^\nu$

自由粒子拉格朗日函数在任意坐标系下的一般形式

$$L=\frac{1}{2}g_{\mu\nu}\dot q^\mu\dot q^\nu$$

代入到

$$\frac{\partial L}{\partial q_i}=\frac{d}{dt}\frac{\partial L}{\partial\dot q_i}~~(i=\lambda)$$

$$\frac{1}{2}\dot q^\mu\dot q^\nu\partial_\lambda g_{\mu\nu}=\frac{1}{2}\frac{d}{dt}(2g_{\lambda\mu}\dot q^\mu)$$

$$\dot q^\mu\dot q^\nu\partial_\lambda g_{\mu\nu}=2(\frac{d}{dt}(g_{\lambda\mu})\dot q^\mu+g_{\lambda\mu}\frac{d}{dt}\dot q^\mu)$$

> 利用求和指标的任意性，
>
> $$2\frac{d}{dt}(g_{\lambda\mu})\dot q^\mu=2\dot q^\nu\partial_\nu g_{\lambda\mu}\dot q^\mu=2\dot q^\mu\partial_\mu g_{\lambda\nu}\dot q^\nu=\dot q^\nu\partial_\nu g_{\lambda\mu}\dot q^\mu+\dot q^\mu\partial_\mu g_{\lambda\nu}\dot q^\nu=\partial_\nu g_{\lambda\mu}\dot q^\mu\dot q^\nu+\partial_\mu g_{\lambda\nu}\dot q^\mu\dot q^\nu=(\partial_\nu g_{\lambda\mu}+\partial_\mu g_{\lambda\nu})\dot q^\mu\dot q^\nu$$
>
> $$2g_{\lambda\mu}\ddot q^\mu=2g_{\lambda\rho}\ddot q^\rho$$

$$\partial_\lambda g_{\mu\nu}\dot q^\mu\dot q^\nu=(\partial_\nu g_{\lambda\mu}+\partial_\mu g_{\lambda\nu})\dot q^\mu\dot q^\nu+2g_{\lambda\rho}\ddot q^\rho$$

$$\frac{g^{\lambda\rho}}{2}(\partial_\nu g_{\lambda\mu}+\partial_\mu g_{\lambda\nu}-\partial_\lambda g_{\mu\nu})\dot q^\mu\dot q^\nu+\ddot q^\rho=0$$

$$\ddot q^\rho+\Gamma_{\mu\nu}^\rho\dot q^\mu \dot q^\nu=0$$

即为不受外力时运动的测地线方程

> 现在从联络平移角度再次导出测地线方程，设曲线为x(λ)，切向量基为$T=\partial_\lambda$,切向量始终沿自身方向平移。
>
> $$\nabla_TT|_{x^\mu}=0,T|_{x^\mu}=\frac{\partial x^\mu}{\partial\lambda}$$
>
> $$\nabla_\lambda\frac{dx^\mu}{d\lambda}=\frac{d x^\rho}{d\lambda}\nabla_\rho\frac{dx^\mu}{d\lambda}=\frac{d x^\rho}{d\lambda}(\partial_\rho\frac{dx^\mu}{d\lambda}+\Gamma_{\rho\sigma}^\mu \frac{dx^\sigma}{d\lambda})=0$$
>
> $$\frac{d^2x^\mu}{d\lambda^2}+\Gamma_{\rho\sigma}^\mu \frac{d x^\rho}{d\lambda}\frac{dx^\sigma}{d\lambda}=0$$
>
> 当λ=t时，与上一种方式吻合。

### 对称与诺特定理

> 们物理也有自己的李清照
>
> 不过诺神的定理居然没有环内容，可惜啊

#### 表述与证明

> 这东西查证明，有种各证各的美（）我直接假设了L形式不变（直观最好理解），不过S不变+微扰可以推出L的形式不变，有些证明指出对称的前提暗示了运动方程一样，进而变化后的一组L'满足拉格朗日方程（可以自己查
>
> 注：写这个证明的时候由于我的指标玩的还不够6，所以没在意指标的上下

每一个连续对称变换（对称：使得作用量S不变）都对应一个不变量（也即对时间的导数为0）

$$\left\{\begin{align}
    q_i'= q_i+\epsilon\Delta q_i(q,t) \\
    t'=t+\epsilon\Delta t(q,t)
\end{align}\right.$$

> 对于一般的坐标变换，Δqi是泰勒展开后的一阶小量系数（真的好像规划中的敏感性分析啊）虽然看上去像算子+变量但是他本身是个正儿八经的函数。。

其中，ε是极小的实数，Δqi是关于q和t的函数，Δt同理。计算出$\dot q_i'$（略去二阶小量）

$$\dot q_i'=\frac{dq_i'}{dt}\frac{dt}{dt'}=(\dot q_i+\epsilon\frac{d\Delta q_i}{dt})(1-\epsilon\frac{d\Delta t}{dt})=\dot q_i+\epsilon(\frac{d\Delta q_i}{dt}-\dot q_i\frac{d\Delta t}{dt})$$

该变换满足对称性，也就是保证了S'=S作用量不变。设$\tilde{\delta}$表示时间与坐标的复合变分

$$\tilde{\delta}S=\int_{t_1'}^{t_2'}L(q',\dot q',t')dt'-\int_{t_1}^{t_2}L(q,\dot q,t)dt=0~~(*)$$

原坐标q满足拉格朗日方程

$$\frac{d}{dt}\frac{\partial L}{\partial \dot q}=\frac{\partial L}{\partial q}$$

利用积分换元，*式化为(注：不是对着答案我可凑不出来这微分)

$$L(q',\dot q',t')\frac{dt'}{dt}=L(q,\dot q,t)$$

$$L(q',\dot q',t')+L(q',\dot q',t')\epsilon\frac{d\Delta t}{dt}=L(q,\dot q,t)$$

$$\frac{\partial L}{\partial q_i}\epsilon\Delta q_i(q,t)+\frac{\partial L}{\partial\dot q_i}\epsilon(\frac{d\Delta q_i}{dt}-\dot q_i\frac{d\Delta t}{dt})+\frac{\partial L}{\partial t}\epsilon\Delta t(q,t)=-L(q',\dot q',t')\epsilon\frac{d\Delta t}{dt}$$

$$\frac{\partial L}{\partial q_i}\Delta q_i(q,t)+\frac{\partial L}{\partial\dot q_i}(\frac{d\Delta q_i}{dt}-\dot q_i\frac{d\Delta t}{dt})+\frac{\partial L}{\partial t}\Delta t(q,t)=-L(q',\dot q',t')\frac{d\Delta t}{dt}$$

把dL/dt算出来方便把偏t换成dt

$$\frac{dL}{dt}=\frac{\partial L}{\partial q_i}\dot q_i+\frac{\partial L}{\partial \dot q_i}\ddot q_i+\frac{\partial L}{\partial t}$$

代回方程中的$\frac{\partial L}{\partial t}$，移项整理

$$\frac{\partial L}{\partial q_i}\Delta q_i+\frac{\partial L}{\partial\dot q_i}\frac{d\Delta q_i}{dt}-\frac{\partial L}{\partial\dot q_i}\dot q_i\frac{d\Delta t}{dt}-\frac{\partial L}{\partial q_i}\dot q_i\Delta t-\frac{\partial L}{\partial \dot q_i}\ddot q_i\Delta t=-L\frac{d\Delta t}{dt}-\frac{dL}{dt}\Delta t$$

把所有的$\frac{\partial L}{\partial q_i}$换为$\frac{d}{dt}\frac{\partial L}{\partial \dot q_i}$(原先的拉格朗日方程)

$$(\frac{d}{dt}\frac{\partial L}{\partial \dot q_i}\Delta q_i+\frac{\partial L}{\partial\dot q_i}\frac{d\Delta q_i}{dt})+(-\frac{\partial L}{\partial\dot q_i}\dot q_i\frac{d\Delta t}{dt}-\frac{d}{dt}\frac{\partial L}{\partial \dot q_i}\dot q_i\Delta t-\frac{\partial L}{\partial \dot q_i}\ddot q_i\Delta t)=-L\frac{d\Delta t}{dt}-\frac{dL}{dt}\Delta t$$

总共凑了三个微分

$$\frac{d}{dt}(\frac{\partial L}{\partial \dot q_i}\Delta q_i)-\frac{d}{dt}(\frac{\partial L}{\partial\dot q_i}\dot q_i\Delta t)=-\frac{d}{dt}(L\Delta t)$$

$$\frac{d}{dt}(\frac{\partial L}{\partial \dot q_i}\Delta q_i-\frac{\partial L}{\partial\dot q_i}\dot q_i\Delta t+L\Delta t)=0$$

得到的守恒量为

$$\frac{\partial L}{\partial \dot q_i}\Delta q_i-(\frac{\partial L}{\partial\dot q_i}\dot q_i-L)\Delta t$$

广义动量$p_i=\frac{\partial L}{\partial \dot q_i}$，广义能量$E=\frac{\partial L}{\partial\dot q_i}\dot q_i-L$,此时守恒量写作

$$p_i\Delta q_i-E\Delta t$$

#### 应用与例子

不平移时间，只平移坐标：L不显含qi：与循环坐标共轭的广义动量守恒

取$\Delta t=0,\Delta q_i=1$可得对应的pi守恒

不平移坐标，只平移时间：L不显含t：能量守恒

取$\forall\Delta q_i=0,\Delta t=1$可得E守恒

## 一些数学工具

> 上课没讲，这是哈密顿的前置数学补充，跳过也完全看得懂哈密顿

### 勒让德变换

我理解的勒让德：将一个函数的变量替换一下，函数本质不变

最基本的一种定义:将给定的函数f(x)打到另一个函数g(p)上

设f(x)是严格凸函数(f''>0)，给定参数p (in f'的值域中)，那么在定义域内一定可以求得和p相关的最大值Max{px-f(x)},记这个最大值为g(p),这样就造出g来了

px-f(x)取最大值<=>$\frac{d f}{d x}=p$,所以勒让德变换可以表示成一个方程组

$$\left\{\begin{align}
    g(p)=px-f(x) \\
    \frac{d f}{d x}=p
\end{align}\right.$$

把2代到1中得到的g(p)就是把f勒出来的结果

现在来举个例子，取f(x)=x^2，p=2，则在图中看出2x与x^2正距离最大值在x=1处取到，是1，就是说g(2)=1

![你就不会用其他软件了吗](https://pic4.zhimg.com/80/v2-35a2de6f090a6d82a4e61184cb604457.png)

现在将2x平移到切点处，直线整体向下平移了g(2)个单位，关注原点，同样向下移动g(2)单位，也就是说g(p)是斜率p包络线的y轴负截距(说起来绕，建议看图，自己多画几条包络线看y轴截距)

f和g用各自的映射关系描述了同一件事，f是给x坐标输出y坐标，而g是给斜率输出负截距；后者以包络线的方式给出了f的形状。

从几何角度考虑，勒让德将一个函数f中的切向量x打到余切向量p上，f改成g的同时描述的东西不变

用这种定义很容易将L(q,q·,t)变换到H(q,p,t)上去。现在只关注q·变化到p上去，q和t不管。那么对着L勒一下

$$\left\{\begin{align}
    H=p_i\dot q^i-L \\
    \frac{\partial L}{\partial\dot q^i}=p_i
\end{align}\right.$$

当黑塞矩阵$M_{ab}=\frac{\partial^2 L}{\partial\dot q^a\partial\dot q^b}$非退化时，将2代入1，即可得到哈密顿量！【from参考3】

从几何角度考虑，勒让德将L中位形空间的切向量dot q打到余切向量p上，给出L的"等价"表述H；拉格朗日力学研究位形空间的切丛，while哈密顿力学研究余切丛

如果黑塞矩阵退化，代表系统有类似约束一样的东西在进行降维那么H需要另一个定义方式，这我就不清楚了

另一种定义：

由d(xy)=xdy+ydx可以得出xdy=d(xy)-ydx,这也是一种勒让德变换，将y主变量移到x上去了

这种方法同样也可以把L变换到H上

$$dL=\frac{\partial L}{\partial q^i}dq^i+\frac{\partial L}{\partial\dot q^i}d\dot q^i+\frac{\partial L}{\partial t}dt=\frac{\partial L}{\partial q^i}dq^i+d(\frac{\partial L}{\partial\dot q^i}\dot q^i)-\dot q^id\frac{\partial L}{\partial\dot q^i}+\frac{\partial L}{\partial t}dt$$

限制在on shell上，代入运动方程$\frac{\partial L}{\partial q^i}=\frac{d}{dt}\frac{\partial L}{\partial\dot q^i}=\dot p_i$

$$dL=\dot p_idq^i+d(p_i\dot q^i)-\dot q^idp_i+\frac{\partial L}{\partial t}dt$$

$$d(p_i\dot q^i-L)=-\dot p_idq^i+\dot q^idp_i-\frac{\partial L}{\partial t}dt$$

定义$H=p_i\dot q^i-L$,联系dH的全微分展开，即可得哈密顿正则方程（在下一章有讲）

## 哈密顿力学

> 注：这一段引言是我在写“一些数学工具”之前写的，和上面的内容有重合，相当于是最低量数学的哈密顿理解

在诺特定理证明的最后一步，我们把广义能量定义为$E=p_i\dot q_i-L$,在这一章延续这个定义，不过取了个新名字叫哈密顿量，也就是说

$$H=p_i\dot q^i-L$$

其中广义动量$p_i=\frac{\partial L}{\partial \dot q_i}$；可以验证，在大多数经典机械问题中，哈密顿量就是能量，还可以写作H=T+V

上面的H看似是q,q·,p,t的函数，能不能将所有的q·都用p来表述，化成H(p,q,t)呢？事实上，当黑塞矩阵$M_{ab}=\frac{\partial^2 L}{\partial\dot q^a\partial\dot q^b}$非退化时，一定可以反解出dotq。

下面在一群自由粒子L=T-V(q,t)的框架下试试

$$T=\frac{1}{2}g_{ij}\dot q^i\dot q^j$$

$$p_i=\frac{\partial L}{\partial\dot q^i}=\frac{\partial T}{\partial\dot q^i}=\frac{1}{2}g_{ij}\dot q^j$$

可以看出这是一个线性方程组，在g非退化的情况下有唯一解，此时可以完美将H写作H(p,q,t)!本文所有的讨论若无特殊说明则默认H(p,q,t)

### 哈密顿正则方程

给出两种简便的推导方式（在上一章的勒让德变换中有更数学的阐述）

1.微分

回忆起最小作用量原理，当时我们把$\delta L(q,\dot q)$展开成了$\frac{\partial L}{\partial q}\delta q+\frac{\partial L}{\partial\dot q}\delta\dot q$，现在对着dH依葫芦画瓢，如果p和q是独立的变量的话，

$$dH=\frac{\partial H}{\partial p_i}dp_i+\frac{\partial H}{\partial q^i}dq^i+\frac{\partial H}{\partial t}dt(*)$$

下面换一种展开dH的方式，把定义代入

$$dH=d(p_i\dot q^i-L)=\dot q^idp_i+p_id\dot q^i-\frac{\partial L}{\partial q^i}d q^i-\frac{\partial L}{\partial\dot q^i}d\dot q^i+\frac{\partial H}{\partial t}dt$$

由拉格朗日方程，$\frac{\partial L}{\partial q^i}=\frac{d}{dt}\frac{\partial L}{\partial\dot{q^i}}=\dot p_i$

$$dH=d(p_i\dot q^i-L)=\dot q^idp_i+p_id\dot q^i-\dot p_id q^i-p_id\dot q^i+\frac{\partial H}{\partial t}dt=\dot q^idp_i-\dot p_id q^i+\frac{\partial H}{\partial t}dt$$

将其与*式相对比，可以找到系数之间的关系

$$\left\{\begin{align}
    \dot q^i=\frac{\partial H}{\partial p_i}\\
    \dot p_i=-\frac{\partial H}{\partial q^i}
\end{align}\right.$$

这就是哈密顿正则方程

2.最小作用量原理证明

将$L=p_iq^i-H$代入$\delta S=0$进行等时变分可得

$$\delta S=\int_{t_1}^{t_2}\delta(p_iq^i-H)dt=0$$

和上面的微分一样，展开δ可得

$$\int_{t_1}^{t_2}(\dot q^i\delta p_i+p_i\delta \dot q^i-\frac{\partial H}{\partial p_i}\delta p_i-\frac{\partial H}{\partial q^i}\delta q^i)dt=0$$

老套路，提出d/dt，然后分部积分

$$\int_{t_1}^{t_2}(\dot q^i\delta p_i-\dot p_i\delta q^i-\frac{\partial H}{\partial p_i}\delta p_i-\frac{\partial H}{\partial q^i}\delta q^i)dt=0$$

$$\int_{t_1}^{t_2}((\dot q^i-\frac{\partial H}{\partial p_i})\delta p_i-(\dot p_i+\frac{\partial H}{\partial q^i})\delta q^i)dt=0$$

假设p和q相互独立，则有

$$\left\{\begin{align}
    \dot q^i=\frac{\partial H}{\partial p_i}\\
    \dot p_i=-\frac{\partial H}{\partial q^i}
\end{align}\right.$$

> 虽然有人认为p和q并不独立，但是按照独立推导出的结论是和牛顿定律、拉格朗日方程完全等价的，是公认正确的

### 泊松括号

> 本节大量参考了【参考4】

定义泊松括号

$$[A,B]=\frac{\partial A}{\partial q^a}\frac{\partial B}{\partial p_a}-\frac{\partial B}{\partial q^a}\frac{\partial A}{\partial p_a}$$

> 一定要记住qp这个顺序啊。。要不然就从全导数+正则方程推一遍

则在哈密顿正则方程的约束下，对一个物理量F(q,p,t)求t的全导数

$$\frac{dF}{dt}=\frac{\partial F}{\partial q^a}\dot q^a+\frac{\partial F}{\partial p_a}\dot p_a+\frac{\partial F}{\partial t}$$

将哈密顿正则方程代入，得

$$\frac{dF}{dt}=\frac{\partial F}{\partial q^a}\frac{\partial H}{\partial p_a}-\frac{\partial F}{\partial p_a}\frac{\partial H}{\partial q^a}+\frac{\partial F}{\partial t}=[F,H]+\frac{\partial F}{\partial t}$$

特殊的，当F不显含t时，写作

$$\frac{dF}{dt}=[F,H]$$

试着对$\dot p,\dot q$作H的括号，可得哈密顿正则方程的泊松括号表示

$$\dot p=[p,H]$$

$$\dot q=[q,H]$$

### 相空间

定义相空间坐标$\vec x=(q^1,q^2,...,q^n,p^1,...,p^n)$(把p和q放一块)

承接上一小节，联系下一小节的辛形式坐标wij（对不起这个顺序我已经写乱了），先将相空间基坐标的泊松括号算出来

$$[x^i,x^j]=w^{ij}$$

利用这个符号，可以将一般的函数A，B写作

$$[A,B]=(\partial_i A)(\partial_jB) [x^i,x^j]$$

这种形式可以更方便理解泊松括号的运算规律

再将相空间可视化，就拿只有一个广义坐标的单摆为例，相空间是二维的

$$H=\frac{p^2}{2ml^2}+mgl(1-cos\theta)$$

给定一个H（能量），就可以画出一条q-p曲线

![MMA画的，好丑](https://pic4.zhimg.com/80/v2-9e2511698ac7e54712314d857ca0b7ca.png)

不同能量的运动轨迹永不相交（只在同一条等高线上运动）

#### 辛几何lite

在哈密顿正则方程中，注意到两式有一个负号的差异,有一种角度说是因为这个方程从辛势及其外微分中来。

辛势

$$\Theta=p_adq^a$$

辛势的外微分，辛形式

$$\omega=d\Theta=dp_a\wedge dq^a$$

外微分满足

$$dx\wedge dx=0$$

$$dx\wedge dy=-dy\wedge dx$$

则w在相空间坐标下写作

$$\omega=\frac{1}{2}w_{ij}dx^i\wedge dx^j$$

其中辛形式在相空间中的坐标

$$w_{ij}=\begin{pmatrix}
    0&-I_n\\
    I_n&0
\end{pmatrix} $$

其逆

$$w^{ij}=\begin{pmatrix}
    0&I_n\\
    -I_n&0
\end{pmatrix} $$

依据这个矩阵和相空间坐标，可以把哈密顿方程等价表述为

$$\dot x^i=w^{ij}\partial_j H$$

辛矩阵：满足A^2=-I的矩阵A都叫辛矩阵，上面的$w^{ij}$和$w_{ij}$都是辛矩阵

辛矩阵中最有代表性的一个当属

$$J=\begin{pmatrix}
    0&1\\
    -1&0
\end{pmatrix}$$

他与单位阵I一起，将复数（复平面上的点）与实反对称矩阵so(D)一一对应起来，对应关系为

$$a+bi <->aI+bJ$$

> 其中，右侧的矩阵是SO(D)旋转群的切空间（小旋转矩阵，麦克劳林展开）左右两侧用exp映射，左边代表扩大a旋转b，右侧代表旋转cosθ=a，simθ=-b(J的定义可能差个-1)

这暗示了哈密顿力学中的复流形结构，也即正则方程辛表示的等价表示（警告：讨论哈密顿复结构的我只见到一篇[参考5]，对我启发很大；并且我把看不懂的地方进行了魔改，但是思路一致。若想追求准确性请参见这个参考）

将位形空间的余切空间复化为C^n中的$\vec z=(q^1+ip_1,...,q^1+ip_1)$，则$z^a=q^a+ip_a$

$$\frac{\partial}{\partial z^a}=\frac{1}{2}(\frac{\partial}{\partial q^a}-i\frac{\partial}{\partial p_a})~~;~~\frac{\partial}{\partial \bar z^a}=\frac{1}{2}(\frac{\partial}{\partial q^a}+i\frac{\partial}{\partial p_a})$$

> 其中，1/2是复流形切向量自然基都要带的系数，来源于定义$\partial_a dz^a=1$,其中实部虚部都乘积为1且要求和，所以$\partial_a$就会有1/2系数，具体请看复流形书，我不是很懂

哈密顿正则方程的复表示

$$\dot z^a=-\frac{1}{2}i\frac{\partial H}{\partial\bar z^a}$$

> 符号的不对称性放在共轭中了

#### 泊松定理与撒谎代数

我们知道，相空间中的守恒量Q可以写作

$$\frac{dQ}{dt}=[Q,H]+\frac{\partial Q}{\partial t}=0(*)$$

特殊的，如果相空间中的物理量不显含时间且守恒，则有

$$[Q,H]=0$$

如果两个物理量的泊松括号为0，则称他们泊松对易；不显含时间的量是守恒量的充要条件是它与H对易

哈密顿力学中的诺特定理逆定理：给定守恒量Q，问是否能找到一个连续小变化使得作用量不变。

实际上书上已经给出来了，只需要我们回代验证作用量不改变就好.

$$\Delta q^i=\frac{\partial Q}{\partial p_i}$$

$${q^i}'=q^i+\epsilon \Delta q^i$$

$$\Delta p^i=-\frac{\partial Q}{\partial q^i}$$

$${p^i}'=p^i+\epsilon \Delta p^i$$

> 和正则方程具有很强的统一性

设守恒量Q满足(*)式，且H不显含时间，则由作用量改变的表达式（这里的Δ表示改变后与改变前的差，展开形式与微分算符d差不多的特性在诺特定理那一节专门有算）

$$\Delta S=\int dt\Delta(p_i\dot q^i-L)=\int \epsilon dt(p_i\Delta\dot q^i+\dot q^i\Delta p_i-\frac{\partial H}{\partial q^i}\Delta q^i-\frac{\partial H}{\partial p_i}\Delta p_i)$$

老套路，提出d/dt,利用分部积分，同时代入欲验证的微小变化式子

$$\Delta S=\int \epsilon dt(\frac{d}{dt}(p_i\Delta q^i)-\Delta q^i\dot p_i+\dot q^i\Delta p_i-\frac{\partial H}{\partial q^i}\frac{\partial Q}{\partial p_i}+\frac{\partial H}{\partial p_i}\frac{\partial Q}{\partial q^i})$$

$$\Delta S=\int \epsilon dt(\frac{d}{dt}(p_i\Delta q^i)-\frac{dQ}{dt}+\frac{\partial Q}{\partial t}+[Q,H])=\int \epsilon dt\frac{d}{dt}(p_i\Delta q^i)$$

当$p_i\dot q^i$定端点时，作用量不改变，对称性成立

> 实际上，这个过程可以看作一个无穷小正则变换（类似于无穷小旋转，是SO的切平面sl）；运动随着时间的演化也是一种正则变换（相流）；本节的讨论还暗示了一个运动常数同时也是对称变换的生成元

![Image](https://pic4.zhimg.com/80/v2-3e6f90f9a2025b5c7629de789e1bab51.png)

泊松定理：两个守恒量的泊松括号仍是守恒量。证明很简单，在雅可比恒等式中令一个轮换量为H。这条定理暗示了所有守恒量构成的李代数封闭，可以用一切李代数的工具去研究。

举个例子，当

$$I=\int(p\dot q-(\frac{p^2}{2m}+\frac{\alpha}{q^2}))$$

时，能找到三个守恒量

$$H=\frac{p^2}{2m}+\frac{\alpha}{q^2}$$

$$Q=-tH+\frac{1}{2}pq$$

$$K=-t^2H+2tQ-\frac{m}{2}q^2$$

其李括号计算得

$$[Q,H]=H$$

$$[Q,K]=-K$$

$$[H,K]=2Q$$

可见恰好与李代数sl(2,R)的三个基同构(GTM9,p5)

利用泊松括号定义算子$L_A=[·,A]$，在线性李代数中写作$ad_L=[·,L]$(参考6)

泊松括号具有的运算规律有：反对称性、线性、莱布尼茨、雅可比恒等式；其中满足反对称+线性+雅可比是构成李代数的充分条件，线性+莱布尼茨使得LA具有和导数一样的特性。

泊松括号/李括号的基表示（from参考3）

设$A^c$是线性结构中的一组基，其上定义的李括号可以展开为

$$[A^a,A^b]=f^{ab}_c A^c$$

这里的f/i在so(D)中被称为结构常数（好像克氏符）

例如泊松括号，固定A时，形成李导数算子(from参考4)

$$L_AB=[A,B]=(A^i\partial_i)B$$

其中A^i不是A的原始分量，而是LA在$\partial$基下的分量（坐标函数）；再作用到B上就有了这个结果（类似于切向量作用于某点得到速度）

### 刘维尔定理

相空间的密度恒定不变（朗道表述：相空间体微元随运动而变化（可视作正则），体积保持不变）

偷懒证明：想象相空间的流$\dot{\vec x}=(\dot q,\dot p)=J\frac{\partial H}{\partial\vec x}$原命题<=>$\nabla ·\dot{\vec x}=0$,那就来算算散度

$$\nabla ·\dot{\vec x}=\frac{\partial }{\partial x^i}w^{ij}\frac{\partial H}{\partial x^j}=w^{ij}\frac{\partial^2 H}{\partial x^i\partial x^j}$$

由wij的反对称性可得

$$\nabla·\dot{\vec x}=0$$

正则变换长证明（朗道p152）

相空间体元(x是相空间坐标)

$$\int d^{2n}x$$

将x通过这个方程正则变换到X：

$$\left\{\begin{align}
    p_i=\frac{\partial\Phi}{\partial q^i} \\
    Q^i=\frac{\partial\Phi}{\partial P_i} \\
    H'=H+\frac{\partial\Phi}{\partial t}
\end{align}\right.$$

变换后的体元

$$\int d^{2n}X=\int\frac{\partial(Q,P)}{\partial(q,p)}d^{2n}x$$

即证

$$J=\frac{\partial(Q,P)}{\partial(q,p)}=1$$

把这个雅可比行列式拆开（类似链式法则）

$$J=\frac{\partial(Q,P)}{\partial(q,P)}\frac{\partial(q,P)}{\partial(q,p)}$$

根据雅可比行列式另一个性质，如果分子分母有相同的量，那么这些量相当于在行列式中不出现，即

$$J=\frac{\partial(Q)}{\partial(q)}\frac{\partial(P)}{\partial(p)}=AB$$

将正则变换满足的方程组代入，可得

$$A_k^i=\frac{\partial Q^i}{\partial q^k}=\frac{\partial^2\Phi}{\partial q^k\partial P_i}$$

$$B_k^i=1/(\frac{\partial^2 \Phi}{\partial q^i\partial P_k})$$

A和1/B(把B中所有元素取倒数)是转置的关系，行列式相等，并且由雅可比行列式，每个元素取倒数就等于行列式取倒数（导数可以看作分数的性质）故有

$$J=AB=1~~~\square$$

一个例子：地表自由落体的质点，相空间是二维

$$H=\frac{p^2}{2m}-mgq$$

是一条抛物线。当H改变时，抛物线沿着其对称轴方向平移而形状不发生改变

![Image](https://pic4.zhimg.com/80/v2-fe09709e238702b87ee15726a756812f.png)

这种抛物线中，x轴代表p,y轴代表q，运动规律是随着q的增大p也不断变化（点向上跑）由动量定理，p正比于t，所以两曲线所夹面积元随着t变化时dx不变，dy恒等于2，也即ds不变

### 正则变换=母函数

在哈密顿力学中，正则变换是指用H*(P,Q,t)代替H(p,q,t)，使得运动方程（正则方程）不变<=>最小作用量原理同时取极值<=>（正则方程的）辛结构不变<=>泊松括号不变<=>正则变换母函数所满足的方程组。下面一点点来推等价

变换前后的最小作用量原理同时取极值：

$$\delta\int(p_i\dot q^i-H(p,q,t))dt=\delta\int(P_i\dot Q^i-H^*(P,Q,t))dt=0$$

被积函数之间只差一个函数对t的全微分，设它为G·（数学上，也可以差一个常系数c，不过这个系数可以通过同时放缩变量来抵消，过于trivial不考虑）：

$$p_i\dot q^i-H(p,q,t)=P_i\dot Q^i-H^*(P,Q,t)+\frac{dG}{dt}~~(*)$$

> 注意这个式子往下，谁被d了（谁头上有点），谁就是主元，在G里面出现（可以在勒让德的过程品味）

$$\frac{dG}{dt}=H^*-H+p_i\dot q^i-P_i\dot Q^i$$

$$dG=(H^*-H)dt+p_id q^i-P_id Q^i$$

得到正则变换第一类母函数G(q,Q,t)所满足的方程组

$$\left\{\begin{align}
    \frac{\partial G}{\partial t}=H^*-H \\
    \frac{\partial G}{\partial q^i}=p_i \\
    \frac{\partial G}{\partial Q^i}=-P_i \\
\end{align}\right.$$

> 这个方程组无论在哪都没有dot的啊，我老是和正则方程搞混然后加个点

此外，从(*)式出发，进行各种的勒让德变换(前提是顶端点的全微分为0，回味从变分推导拉格朗日方程)，变换各种被d的量，可以得到不同的生成函数G，例如

由$P_i\dot Q^i=-Q^i\dot P_i$可得

$$p_i\dot q^i-H(p,q,t)=-Q^i\dot P_i-H^*(P,Q,t)+\frac{dG}{dt}$$

$$dG=(H^*-H)dt+p_id q^i+Q^id P_i$$

这样就有了G(q,P,t)(第二类母函数)

类似的，还可以做勒让德$p_i\dot q^i=-q^i\dot p_i$,以及两个一起勒了，产生第三类和第四类母函数。（可以发现，勒一组的时候一定保持大小写，不会把小写勒到大写上去，反之亦然，这就是为什么母函数一定关于一个旧坐标和一个新坐标）

![from参考7](https://pic4.zhimg.com/80/v2-f2e632b04b81c78f6ead450958e68ab3.png)

$\frac{\partial G}{\partial t}=H^*-H$这个方程是一直不变的。

验证辛结构不变性（有相当一部分资料直接拿这一条当正则变换初始定义）

承接辛几何lite小节，相空间中正则方程的辛表示为

$$\dot x^i=w^{ij}\frac{\partial H}{\partial x^j}$$

现在要用这一条以及坐标变换关系导出变换后坐标$\dot y^i$的形式

$$\dot y^i=\frac{\partial y^i}{\partial x^j}\dot x^j=\frac{\partial y^i}{\partial x^j}w^{jk}\frac{\partial H}{\partial x^k}=\frac{\partial y^i}{\partial x^j}w^{jk}\frac{\partial H}{\partial y^l}\frac{\partial y^l}{\partial x^k}$$

> 整理该式，用到的数学准备：
>
> 1.y(x)的雅可比矩阵第i行第j列（指标要从上往下念）：$J^i_j=\frac{\partial y^i}{\partial x^j}$
>
> 2.矩阵连续积的指标表示$A^i_j=B^i_kC^k_l...D^m_nE^n_j$(把相同指标划掉，只留个头尾就好了)
>
> 3.矩阵转置就是把上下指标交换一下就行了
>
> 4.辛矩阵本来是写成J，但是让一让雅可比矩阵，所以写成A算了（~~你谁啊~~）

所以把上式写成J分量，并把相同指标凑在一起

$$\dot y^i=J^i_jw^{jk}(J^T)^k_l\frac{\partial H}{\partial y^l}=(JAJ^T)^i_l\frac{\partial H}{\partial y^l}$$

由于之前假设的正则变换条件中，运动方程保持不变=》泊松括号表示下的运动方程形式不变，也即

$$\dot y^i=w^{ij}\frac{\partial H}{\partial y^j}$$

结合上上式，可得

$$JAJ^T=A$$

这就是所谓的辛形式不变，下面写出分量形式

$$\frac{\partial y^i}{\partial x^l}w^{lk}\frac{\partial y^j}{\partial x^k}=[y^i,y^j]=w^{ij}$$

已经可以看出泊松括号的不变性了，用更熟悉的H写一下

$$[M,H]_y=(\partial_i M)(\partial_j H) [y^i,y^j]=(\partial_i M)(\partial_j H)w^{ij}=(\partial_i M)\dot y^i=\dot M-\frac{\partial M}{\partial t}$$

完美形式不变

#### 辛辛更健康

> 本节from参考4

设变换前的辛形式为dp^dq(楔积),变换后的为dp'^dq'，保辛相当于保辛形式，即

$$dp_a\wedge dq^a=dp_a'\wedge dq'^a=d\Theta=d\Theta'$$

大写Θ就是辛势,也就是说两个辛势之差是闭形式

$$d(\Theta'-\Theta)=0$$

根据庞加莱引理（这我完全不清楚），闭形式在局部上也是恰当形式，也就是

$$\Theta'-\Theta=dF$$

在理论力学研究中，如果假设庞加莱引理能延展为整个相空间中成立，那么有这样的说法：辛势之差是闭形式的两种哈密顿量，中间只差一个正则变换（例如下文中二维谐振子与平方反比向心力场）

更加实际的来说，差的这个F就是上文中讨论的母函数（不觉得对辛势的讨论和对最小作用量的讨论是平行的吗）

### 正则变换=旋转

> 参考来自高显

旋转是一类保“内积”的特殊坐标变换

在欧式空间中（度规为$\delta_{ab}$）,对于坐标q上的函数f，g，定义内积括号

$$<f,g>_q=\delta^{ab}\partial_a f\partial_b g$$

我们可以从对坐标的括号中看出内积括号与度规的关系

$$<q^a,q^b>=\delta^{ab}$$

考虑坐标变换q->Q,计算内积括号

$$<f,g>_q=\delta^{ab}\frac{\partial f}{\partial q^a}\frac{\partial g}{\partial q^b}=\delta ^{ab}\frac{\partial Q^c}{\partial q^a}\frac{\partial Q^d}{\partial q^b}\frac{\partial f}{\partial Q^c}\frac{\partial g}{\partial Q^d}$$

现在定义一类特殊坐标变换，使得$\delta ^{ab}\frac{\partial Q^c}{\partial q^a}\frac{\partial Q^d}{\partial q^b}=\delta^{cd}$,也就等价于内积括号形式不变，也就等价于坐标之间的括号仍是度规；并且要求逆变换也符合以上条件，即

$$\left\{\begin{align}
    \delta ^{ab}\frac{\partial Q^c}{\partial q^a}\frac{\partial Q^d}{\partial q^b}=\delta^{cd} \\
    \delta _{ab}\frac{\partial Q^a}{\partial q^c}\frac{\partial Q^b}{\partial q^d}=\delta_{cd}
\end{align}\right.$$

写成矩阵形式

$$\left\{\begin{align}
    R^TIR=I \\
    RIR^T=I
\end{align}\right.$$

转动的性质：转动与坐标无关，是线性变换（具体证明请看高显）

$$\frac{\partial^2 Q^c}{\partial q^a\partial q^e}=\frac{\partial}{\partial q^e}(R_a^c)=0$$

和欧氏空间差不多，现在讨论闵氏时空中的转动（狭相我跟你拼到底）

高显用的-1111，我要用ict搞x=(ict,x1,x2,x3)

考虑任意的坐标变换$x^\mu\rightarrow X^\mu$

$$<f,g>=(\delta^{\mu\nu}\frac{\partial X^\rho}{\partial x^\mu}\frac{\partial X^\xi}{\partial x^\nu})\frac{\partial f}{\partial X^\rho}\frac{\partial g}{\partial X^\xi}$$

这类特殊变化能保度规形式，叫做洛伦兹变换，也是闵氏时空中的转动

定义像雅可比行列式一样的东西

$$\Lambda_\nu^\mu=\frac{\partial X^\mu}{\partial x^\nu}$$

正反保度规形式

$$\delta^{\mu\nu}\Lambda^\rho_\mu\Lambda^\xi_\nu=\delta^{\rho\xi}$$

$$\delta_{\mu\nu}\Lambda_\rho^\mu\Lambda_\xi^\nu=\delta_{\rho\xi}$$

矩阵形式

$$\Lambda I\Lambda^T=I~~~~\Lambda^TI^{-1}\Lambda=I^{-1}$$

和欧式一样可以证明这个旋转也是线性的，举个例子

$$\Lambda_\nu^\mu(\beta)=\begin{pmatrix}
    cosh\beta&sinh\beta&&\\
    sinh\beta&cosh\beta&&\\
    &&1&\\
    &&&1\\
\end{pmatrix} $$

终于进入正题：相空间中的“转动”，仅需把上面的度规换成辛矩阵，内积括号换成泊松括号就行了

设相空间坐标从x变到y，这类特殊的坐标变换满足

$$w^{ij}\frac{\partial y^k}{\partial x^i}\frac{\partial y^l}{\partial x^j}=w^{kl}~~~~w_{ij}\frac{\partial y^i}{\partial x^k}\frac{\partial y^j}{\partial x^l}=w_{kl}$$

等价于保泊松括号

用J表示变换的雅可比矩阵$J^i_j=\frac{\partial y^i}{\partial x^j}$,那么矩阵形式

$$JAJ^T=A~~~~J^TA^{-1}J=A^{-1}$$

正则变换保“度规”（辛），所以保面积（刘维尔），但是正则变换一般不是线性变换

![爱来自高显](https://pic4.zhimg.com/80/v2-8fbf69ae2ea61f7e79b4e7590645290d.png)

### 运动函数的统一，爱来自正则变换

#### 二维谐振子与平方反比向心力场之间的关系

二维各向同性谐振子的哈密顿量

$$H=\frac{p_r^2}{2m}+\frac{p_\theta^2}{2mr^2}+\frac{1}{2}kr^2$$

现在天降一个变换$Q=\frac{r^2}{l}$,其中l是任意量纲的常数，借此对上式进行规范变换。我们的假设是变换不显含时间，所以H不加东西。

可以利用正则变换detJ=1的必要条件列方程：

$$\begin{vmatrix}
\frac{\partial Q}{\partial r} & \frac{\partial Q}{\partial p_r} \\
\frac{\partial P_Q}{\partial r} & \frac{\partial P_Q}{\partial p_r} \\
\end{vmatrix}=\begin{vmatrix}
\frac{2r}{l} & 0 \\
\frac{\partial P_Q}{\partial r} & \frac{\partial P_Q}{\partial p_r} \\
\end{vmatrix}=\frac{2r}{l}\frac{\partial P_Q}{\partial p_r}=1$$

$$\frac{\partial P_Q}{\partial p_r}=\frac{l}{2r}$$

$$P_Q=\frac{lp_r}{2r}+C(r)$$

并且经过我计算验证，这个C无论怎么取都不影响正则变换保辛的条件

这个解法直接将C写作0了，随后反解出r，pr，我认为严谨性有待商榷

下面是解法2，我认为也是很有局限性的，因为要自己写出原系统的拉格朗日，再基于此把变换往里面代(时刻牢记使命：用Q和PQ表示r和pr)

$$L=\frac{1}{2}m(\dot r^2+r^2\dot\theta^2)-\frac{1}{2}kr^2$$

$$p_r=m\dot r$$

由题干，$r^2=Ql,r=\sqrt{Ql},\dot r=\frac{\dot Q}{2}\sqrt\frac{l}{Q},\dot r^2=\frac{l\dot Q^2}{4Q}$

$$L(Q,\dot Q,\theta,\dot\theta)=\frac{1}{2}m(\frac{l\dot Q^2}{4Q}+Ql\dot\theta^2)-\frac{1}{2}kQl$$

$$P_Q=\frac{\partial L}{\partial\dot Q}=\frac{ml\dot Q}{4Q}$$

得到方程组

$$\left\{\begin{align}
    p_r=m\dot r \\
    P_Q=\frac{ml\dot Q}{4Q} \\
    r=\sqrt{Ql} \\
    \dot r=\frac{\dot Q}{2}\sqrt\frac{l}{Q}
\end{align}\right.$$

> 有几个方程不是独立的，求个导就可以相互转换；为了解方程方便就先假设导数和本身无关

其中r和pr是想解出来的未知量，r·和Q·是未知量（中间变量），Q和PQ视作已知量，这个方程肯定能解（r都已经喂嘴边了）

解得

$$\left\{\begin{align}
    r=\sqrt{Ql} \\
    p_r=2\sqrt\frac{Q}{l}P_Q
\end{align}\right.$$

> 检验一下，和方法一算出来的Pr当C=0时是等价的

代回到原哈密顿方程得(保守系统能量守恒，总之先设能量E1)

$$H=\frac{2Q}{ml}P_Q^2+\frac{p_\theta^2}{2mQl}+\frac{1}{2}kQl=E_1$$

下面就是往开普勒凑的过程了，总之先考虑平方反比向心力场，质点离力的中心距离Q，角度为φ，写出对应的哈密顿方程(同理设E2)

$$H(P_Q,p_\phi,Q,\phi)=\frac{P_Q^2}{2m}+\frac{p_\phi^2}{2mQ^2}-\frac{G}{Q}=E_2$$

观察一下谐振子H中Q的幂次，总之先同除个Q

$$H=\frac{2}{ml}P_Q^2+\frac{p_\theta^2}{2mQ^2l}-\frac{E_1}{Q}=-\frac{1}{2}kl$$

这样就很像了！可以看出变换关系是$l=4,p_\theta=2p_\phi,E_1=G,E_2=-\frac{1}{2}kl$

> ![Image](https://pic4.zhimg.com/80/v2-4885950c62ad265e4f0bff9606b7841d.png)
>
> 书上的变换，并没有写出l

这样就证明了谐振子和平方反比有心力场只差一个正则变换。更进一步：由于$p_\theta=2p_\phi$,可得$d\phi=2d\theta$,选择适当的初始条件，可以使得φ=2θ；也就是说在平方反比力场中转一圈相当于谐振子运动半周

### 角度-作用量变量坐标

这一节上课没讲，我只想粗略快速的在这过一遍

所谓运动积分就是运动中的守恒量，比如说常见的能量守恒，H是守恒量；角动量守恒，J是守恒量，把一个系统中的各个守恒量放在一起，看作一组正则动量J(无论是什么东西，都被称作作用量J)，对应的广义坐标看作θ的话（无论是什么东西，在这里都被称作角度），可以建立原哈密顿量H(p,q)到H*(I,θ)的正则变换

从相图上来看，由于变换后的J是守恒量，所以θ-J图表现为平行于θ轴的一堆水平线；这个正则变换的意义在于把相图拉直了

下面给个例子体会一下

![Image](https://pic4.zhimg.com/80/v2-630b6264bdeb9a3c4f6b9915b12b64bb.png)

![Image](https://pic4.zhimg.com/80/v2-95aeb503d292b9102993716a3d42624e.png)

![Image](https://pic4.zhimg.com/80/v2-dba891edd9f9f57deaaa3bc313d519e9.png)

可以看出，变换后的H*(θ，J)不显含θ，也即

$$\dot \theta=\frac{\partial H^*}{\partial I}=const~\xi(*)$$

$$\dot I=-\frac{\partial H^*}{\partial\theta}=0$$

其中的*式在解HJ方程（下一部分）中有重要作用，xi被称作基本频率

在s个p，s个q一共2s维的相空间，如果能找到s个运动积分，则称该系统是可积的

在周期封闭系统中作用量I的求法

$$I=\frac{1}{2\pi}\oint pdq$$

例如，在开普勒问题中寻找r对应的I

$$\frac{p_r^2}{2m}+\frac{J^2}{2mr^2}-\frac{k}{r}=E$$

$$\frac{1}{2\pi}\oint\sqrt{2mE-\frac{J^2}{r^2}+\frac{2mk}{r}}dr=\frac{1}{\pi}\int_{r_{min}}^{r^{max}}\sqrt{2mE-\frac{J^2}{r^2}+\frac{2mk}{r}}dr$$

#### 绝热不变量

> 抄的高显，有专门一节

在一个周期内，系统几乎感受不到哈密顿量的变化，这种缓慢的变化称作绝热。例如：频率缓慢变化的谐振子，臂长缓慢变化的单摆等

若系统的变化是绝热的，则相流在一个周期内所围面积近似不变，而这个面积正对应作用量。所以称绝热变化时的作用量J是绝热不变量

还是拿上一节中的谐振子做例子，不做正则变化前，可以算出相图所围的椭圆面积为$2\pi H/w$不变，作用量I不变，这就是个绝热不变量

J是绝热不变量是可以证明的，在新版高显p347

### 哈密顿-雅可比方程

> 恭喜你走到力学抽象之巅（但愿是极大值）

生成函数视角下的HJ（哈密顿雅可比）：

在众多正则变换中，有一类最特殊的正则变换，可以使得变换后的H*(P,Q,t)=0,此时P，Q都是常数；设这个正则变换对应的母函数为S(q,Q,t)=S(q,α,t)(这个特殊的S叫做哈密顿主函数)，则根据正则变换母函数所满足的方程，有

$$\frac{\partial S}{\partial t}=H^*-H~~\Rightarrow~~\frac{\partial S}{\partial t}+H=0$$

$$\frac{\partial S}{\partial q^i}=p_i~~\Rightarrow~~H(p,q,t)=H(\frac{\partial S}{\partial q},q,t)$$

$$\frac{\partial S}{\partial\alpha^i}=-\beta_i$$

将12式合并整理一下，就得到了HJE：

$$\frac{\partial S}{\partial t}+H(\frac{\partial S}{\partial q},q,t)=0$$

不觉得这个S和先前的作用量有点像吗？现在把S做个对t全导数

$$\frac{d S}{dt}=\frac{\partial S}{\partial q^i}\dot q^i+\frac{\partial S}{\partial t}$$

将母函数所满足的方程组代入上式

$$\frac{d S}{dt}=p_i\dot q^i-H=L$$

也即

$$S=\int Ldt$$

和作用量形式很像，只是改成不定积分了

下面从作用量角度引入HJE

传统的作用量变分是定死了开头和结尾求路径，但是这里是不定积分，也就是说给定了曲线的形状，可以任意平移，那么平移到哪里去才满足最小作用量原理呢

$$S=\int Ldt$$

不妨写出作用量变化量

$$dS=Ldt=p_idq^i+Ldt-p_idq^i=p_idq^i+Ldt-p_i\dot q^idt=p_idq^i+(L-p_i\dot q^i)dt$$

> 不这么凑也可以用L=pq-H去d出来

$$dS=p_idq^i-Hdt$$

可得方程

$$\frac{\partial S}{\partial t}+H=0$$

$$\frac{\partial S}{\partial q^i}=p_i$$

结合起来也就是上文的HJE了

### 解哈密顿雅可比（偏微分方程）

摘抄自高显：求解哈密顿正则方程，相当于寻找一个正则变换，把哈密顿量变为0.

![Image](https://pic4.zhimg.com/80/v2-63f389f8c4dd7c9b14ca6b6789ac4d43.png)

> HJ诱导出的正则变换把相流转化成静止不动的点，while作用量-角度是将相图拉直

在最好的情况下，给出系统的哈密顿量，就可以用HJE解出q(t)。（HJE把正则方程全部揉进去了）

那么什么叫好情况呢？在本节着重处理的问题是1.H不显含t（能量守恒）2.S可写作$S=\Sigma W_i(q^i)+f(t)$(主要看前面，每个q可以分离，不耦合)

由H不显含t，可设H=E(积分常数)，再代入HJ：

$$\frac{\partial S}{\partial t}=-E=\frac{\partial f}{\partial t}\Rightarrow f(t)=-Et$$

在对t积分的时候，实际上应该有个积分常数，但是这个有没有不影响啥，为了方便就把他扔了

S可以写作

$$S=\Sigma W_i(q^i)-Et$$

此时$p_i=\frac{dW_i}{dq^i}$,代回到H=E

$$H_i(q^i,\frac{dW_i}{dq^i})=\alpha_i$$

$$\sum \alpha_i=E$$

> 这里的α就是看个乐，感觉用不上，只是为了引出最终要用的积分常数之间的方程。更加实际的做法请看下面我的手写图

如果相空间的维度是2s，那么HJE是一个s+1元的一阶偏微分方程，最后结果中含有s+1个积分常数。现在各个积分常数之间不是独立的，还差一个方程，一般设为$\alpha_i=\frac{\partial S}{\partial E}$(我也不太懂，总之在解的时候，最后出来的方程就是偏S/偏你设出来的常数=常数就好了，视系统自由度，可能会有多个这样的方程)

![Image](https://pic4.zhimg.com/80/v2-13788b15108abe72f4457514ae20d3cf.png)

还有一个常数之间的关系来自母函数，$\frac{\partial S}{\partial Q^i}=-P_i$

#### 例一：一维谐振子

先写哈密顿量

$$H=\frac{p^2}{2m}+\frac{k}{2}q^2$$

设

$$S=W(q)-Et$$

则

$$p=\frac{dW}{dq}$$

代入H=E得

$$\frac{1}{2m}(\frac{dW}{dq})^2+\frac{k}{2}q^2=E$$

反解出dW/dq

$$\frac{dW}{dq}=\pm\sqrt{2mE-kmq^2}$$

积分得W

$$W(q)=\pm\int \sqrt{2mE-kmq^2}dq$$

代入S

$$S=\pm\int \sqrt{2mE-kmq^2}dq-Et$$

最后一步用到角度-作用量变量坐标下哈密顿正则方程$\frac{\partial S}{\partial E}=\xi$

$$\pm\int \frac{m}{\sqrt{2mE-kmq^2}}dq-t=\xi$$

左边那个积分可以往arcsinq那边靠

$$\pm\sqrt{\frac{m}{k}}arcsin(\sqrt{\frac{k}{2E}}q)-t=\xi$$

最后解得

$$q=\pm\sqrt{\frac{2E}{k}}sin\sqrt{\frac{k}{m}}(t+\xi)$$

#### 例二：开普勒问题（二维）

$$H=\frac{1}{2m}(p_r^2+\frac{p_\theta^2}{r^2})-\frac{\alpha}{r}$$

发现θ是循环指标，p守恒，直接设pθ=J，降维了

$$H=\frac{1}{2m}(p_r^2+\frac{J^2}{r^2})-\frac{\alpha}{r}$$

设

$$S=W(r)+J\theta-Et$$

$$p_r=\frac{dW}{dr}$$

$$(\frac{dW}{dr})^2+\frac{J^2}{r^2}=2mE+\frac{2m\alpha}{r}$$

$$W=\pm\int\sqrt{2mE+\frac{2m\alpha}{r}-\frac{J^2}{r^2}}dr$$

$$S=\pm\int\sqrt{2mE+\frac{2m\alpha}{r}-\frac{J^2}{r^2}}dr+J\theta-Et$$

用到两个角度-作用量变量坐标下哈密顿正则方程

$$\frac{\partial S}{\partial E}=\pm\int\frac{m}{\sqrt{2mE+\frac{2m\alpha}{r}-\frac{J^2}{r^2}}}dr-t=\xi_1$$

$$\frac{\partial S}{\partial J}=\mp\int\frac{J}{r^2\sqrt{2mE+\frac{2m\alpha}{r}-\frac{J^2}{r^2}}}dr+\theta=\xi_2$$

第二个方程可以积出来

$$\mp arccos\frac{r^2}{2mE+\frac{m^2}{J^2}}+\theta=\xi_2$$

---

参考：

1.东北师大《常微分方程》P52

2.黄克智《张量分析》1.2节(via<https://zhuanlan.zhihu.com/p/425000058>)

3.高显《经典力学》

4.陈童《经典力学新讲》

5.<https://zhuanlan.zhihu.com/p/46850650>

6.GTM9

7.你能不能别什么都百度百科<https://baike.baidu.com/item/%E6%AD%A3%E5%88%99%E5%8F%98%E6%8D%A2%E7%94%9F%E6%88%90%E5%87%BD%E6%95%B0/7278635?fr=ge_ala>其实高显书上也有
