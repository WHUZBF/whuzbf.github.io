---
layout: post
title:  积分约化
categories: [physics]
tags: [hep-th, scattering amplitudes]
---

- [红外发散和紫外发散](#红外发散和紫外发散)
  - [发散](#发散)
  - [重要公式](#重要公式)
- [圈图积分](#圈图积分)
  - [标量积分](#标量积分)
- [参考](#参考)

由于最近忙着看CHY，这部分的证明以及其它技术细节没来得及补上

<!--more-->

# 红外发散和紫外发散

## 发散

首先并不是所有圈图都有发散，只是圈图一般会存在发散。发散分红外发散和紫外发散两种，紫外发散需要从bare拉氏量中提取出抵消项来抵消发散，这一步就是重整化。而红外发散一般都是由于我们的理论中含有无质量粒子，导致散射振幅的定义不是well-define的，还需要加入那些软粒子发射的图，根据软定理这些图也是发散的，可以证明他们可以精确地抵消掉红外发散。

所以红外发散一般来说我们不需要额外处理，真正需要注意的是紫外发散，QFT基本都是红外有限的，但是紫外有限必须要求这个理论是可重整化的。重整化最重要的一步就是对圈图积分进行正规化把无穷大表示出来。这一步在维数正规化中要注意。圈图可能有红外发散和紫外发散，对于红色发散取$D=4-2\epsilon,\epsilon<0$，对于紫外发散取$\epsilon>0$。重整化比较关注的是紫外发散，前面说过红外发散不需要引入重整化抵消。

还有一个比较重要的点，红外发散由于有软定理和共线极限两个的共线，所以都是$\epsilon^{-2}$形式发散的，而紫外发散是按照$\epsilon^{-1}$形式发散的。从积分正规化后的发散形式就能看出理论在IR和UV下的行为。

## 重要公式

下面是一些常用的公式。

首先是$D$维单位球表面积：

$$
\Omega_d=\frac{2\pi^{d/2}}{\Gamma(\frac12d)}
$$

然后是一堆伽马函数

$$
\begin{aligned}
\Gamma(n{+}1)& =n!,  \\
\Gamma(n+\frac12)& =\frac{(2n)!}{n!2^n}\sqrt{\pi},  \\
\Gamma(-n{+}x)& =\frac{(-1)^n}{n!}\left[\frac1x-\gamma+\sum_{k=1}^nk^{-1}+O(x)\right] 
\end{aligned}
$$

$$
\int\frac{d^d\bar{q}}{(2\pi)^d}\frac{(\bar{q}^2)^a}{(\bar{q}^2+D)^b}=\frac{\Gamma(b-a-\frac12d)\Gamma(a+\frac12d)}{(4\pi)^{d/2}\Gamma(b)\Gamma(\frac12d)}D^{-(b-a-d/2)}
$$

费曼参数化：

$$
\frac1{A_1\ldots A_n}=\int dF_n\left(x_1A_1+\ldots+x_nA_n\right)^{-n}
$$

$$
\int dF_n=(n-1)!\int_0^1dx_1\ldots dx_n\delta(x_1+\ldots+x_n-1)\Rightarrow \int dF_n1=1
$$

Schwinger参数化：

$$
\frac1{x^a}=\frac1{\Gamma(a)}\int_0^\infty d\alpha\alpha^{a-1}e^{-\alpha x}
$$

多对数函数：

$$
\mathrm{Li}_q(x)=\int_0^xdt\frac{\mathrm{Li}_{q-1}(t)}t
$$

> 比如下面的几个函数
> 
> $$\log(x)=\int_0^x\frac{dt}t,\quad\log(x)\log(y)=\left(\int_0^x\frac{dt}t\right)\biggl(\int_0^y\frac{ds}s\biggr),\quad\mathrm{Li}_2(x)=\int_0^x\frac{dt}t\int_0^t\frac{du}{1-u}$$

他们都是超越函数，有所谓超越度的概念，这里$q$就是超越度。因为$i\pi=\log(-1)$，所以$\pi$超越度是1.

# 圈图积分
任意圈图积分可以表达为下面抽象的形式：

$$
\mathcal{A}_n^{L\text{-loop}}=\sum_j\int\left(\prod_{l=1}^L\frac{d^D\ell_l}{(2\pi)^D}\right)\frac1{S_j}\frac{n_jc_j}{\prod_{\alpha_j}p_{\alpha_j}^2}
$$

本文处理最简单的一圈图，而且考虑的还是planar极限，因为平面图可以对外腿进行编号，这会导致分析极大的简化。比如纯YM理论一圈振幅有下面简单的形式：

$$
A_n^{1-\mathrm{loop}}[1^-2^-\ldots n^-]=\frac{\sum[i_1i_2]\langle i_2i_3\rangle[i_3i_4]\langle i_4i_1\rangle}{[12][23]\cdots[n1]}
$$

可以发现非$N^KMHV$振幅在树图不为0。
## 标量积分

一圈图积分基本上都有下面的抽象形式：

$$
\begin{aligned}&I_{N,\mathscr{N}(l)}\\&=\int\frac{d^Dl}{(2\pi)^D}\frac{\mathcal{N}(l^\mu)}{[(l+q_1)^2-m_1^2+i0]\cdots[(l+q_{N-1})^2-m_{N-1}^2+i0][l^2-m_N^2+i0]}\end{aligned}
$$

记上式中的分子的$r$次多项式为：

$$
\begin{aligned}
I_{N,r}& =\int\frac{d^Dl}{(2\pi)^D}  \\
&\times\frac{\prod_{j=1}^r(u_j\cdot l)}{[(l+q_1)^2-m_1^2+i0]\cdots[(l+q_{N-1})^2-m_{N-1}^2+i0][l^2-m_N^2+i0]}
\end{aligned}
$$

其中$I_{N,0}$就是所谓的**标量积分**，所有的一圈积分计算其实都可以转化为对$I_{N,0}$的计算，也即可以有展开：

$$
A^{1-\mathrm{loop}}=\sum_iC_D^{(i)}I_D^{(i)}+\sum_jC_{D-1}^{(j)}I_{D-1}^{(j)}+\cdots+\sum_kC_2^{(k)}I_2^{(k)}+\text{rational terms}
$$

这些$C^{(i)}$是和运动学有关的，而且可以从考虑树图求出，$D$是维数，$I_k$就是这些标量积分，上标是因为可能有不同的图。但这些图都是一些$k$边形，区别就是每个角的动量和，这也能看出标量积分随运动学的依赖是每个角上的动量和$K$，虽然我们考虑的是无质量粒子的散射，但是一般$K^2\neq 0$。比如一个四边形：

![1](\img\posts\integral_reduce\1.png)

泡泡，三角，盒子图是最常见的图，因为这是四维情况下要算的几个：[^1]

$$
\begin{aligned}
I_{4;4}(p_1,p_2,p_3,p_4)&=\int\frac{d^D\ell}{(2\pi)^D}\frac1{\ell^2\left(\ell-p_1\right)^2\left(\ell-p_1-p_2\right)^2\left(\ell+p_4\right)^2}, \\
I_{3;4}(p_1,p_2,p_3+p_4)&=\int\frac{d^D\ell}{(2\pi)^4}\frac{1}{\ell^2\left(\ell-p_1\right)^2\left(\ell-p_1-p_2\right)^2}, \\
I_{2;4}(p_1+p_2,p_3+p_4)&=\int\frac{d^D\ell}{(2\pi)^4}\frac1{\ell^2\big(\ell-p_1-p_2\big)^2}.
\end{aligned}
$$

积分结果为：

$$
\begin{aligned}
I_{4;4}(p_1,p_2,p_3,p_4)& =\frac{\gamma_{\Gamma}}{su}\biggl(\frac{2}{\epsilon^{2}}\biggl[\bigl(-\mu^{-2}s\bigr)^{-\epsilon}+\bigl(-\mu^{-2}u\bigr)^{-\epsilon}\biggr]-\ln^{2}\biggl(\frac{s}{u}\biggr)-\pi^{2}\biggr)+O(\epsilon)  \\
I_{3;4}(p_1,p_2,p_3+p_4)& =\frac{\gamma_\Gamma}{\epsilon^2}(-\mu^{-2}s)^{-1-\epsilon}+O(\epsilon),  \\
I_{2;4}(p_1+p_2,p_3+p_4)& =\gamma_\Gamma\left(\frac1\epsilon-\ln(-\mu^{-2}s)+2\right)+O(\epsilon). 
\end{aligned}
$$

其中$\gamma_\Gamma=\Gamma(1+\epsilon)\Gamma^2(1-\epsilon)/\Gamma(1-2\epsilon)$。从这个结果确实就能看出UV发散不一定总有。

## Van Neerven-Vermaseren 基底
要证明上一小节的分解是正确的，可以分两步走。只需要先证明下面的约化可以做到：[^2]

$$
\int\frac{d^Dl}{(2\pi)^D}\frac{l^{\mu_1}l^{\mu_2}\cdots l^{\mu_r}}{d_1\cdots d_N}\longrightarrow\sum_{N'\leq N}\int\frac{d^Dl}{(2\pi)^D}\frac{1}{d_1\cdots d_{N'}}
$$

然后再证明约化后的又可以拆成$N<4$的组合。

要证明第一件事情，第一步就是把$l^\mu$写成角上动量和$K^\mu$的线性叠加。对于N边形图，这些$K^\mu$只有N-1个独立的[^3]。而$D$维时空独立的矢量最多$D$个，这也就是为什么最终剩下的那些积分肯定是$N\leq D$的那些。




# 参考
[^1]: 还有tadpole，但是在LSZ散射框架下，都会引入重整化抵消项消去tadpole
[^2]: 本文主要考虑$D=4$
[^3]: 因为动量守恒







