---
layout: post
title:  利用resolvent优雅处理量子力学微扰论
categories: [physics, math]
tags: [quantum mechanics]
---

量子力学中的非简并和简并微扰可以利用算符的Resolvent进行统一的处理，如果你看过喀兴林老师的高等量子力学一书，你一定记得里面用无比复杂的手段处理简并微扰的情况，最近复习量子力学，本来是对绝热近似那一套我不太熟悉的微扰复习，意外找到了解微扰论的一套算符方法。原文latex版本放在我的量子力学笔记里面，这里稍作修改摘录如下。

<!--more-->

# 基本数学工具

对于任意一个线性算子$A$，定义其resolvent为：


$$
R(z) \equiv \frac{1}{A-z I},\quad z\in\mathbb{C}
$$

如果$A$有孤立的本征值，那么可以考虑留数算子：


$$
P_\lambda = \frac{1}{2\pi i}\oint_{C_\lambda} R(z) dz
$$

他会把任意一个态投影到本征子空间$\mathcal{E}_\lambda$之中。如果$A$在$[a,b]$上有连续谱，投影算子为：

$$
P_{[a,b]}=\frac{1}{2 \pi i}\int_{a}^{b}dz\left[R(z+i0^+)-R(z-i0^+)\right]
$$

从数学上问题一下清晰了，算符的离散本征值对应$R(z)$的孤立极点，连续谱对应割线。[^1]

# 量子力学微扰论

简并微扰论比较麻烦，究其原因是事先没办法知道零级近似波函数。一旦当我们通过计算本征值发现能级劈裂，进而说明零级波函数找到之后，简并微扰论就和非简并处理方法一样了，只是这个时候要用零级近似波函数做基底。但是当体系有多个简并子空间，特别是一阶近似没有消除简并，问题就很复杂了。

一般谈简并微扰论都只分析了一阶近似。喀兴林老师的书中详细分析了二阶情况，但是论述极为复杂，这里我们采用Kato给出的方法[^2]，通过求解算子格林函数的积分方程来逐级得到能量修正。不过得到的最终能量修正级数展开式其实只是个渐近展开，考虑到实际使用根本用不到高阶修正，所以已经算很好的结果了。

考虑$H=H_0+\lambda V$形式的哈密顿量，$H_0$的本征值用$E^{(0)}_a$表示，对应的子空间为$\mathscr{E}_a^{(0)}$，还定义投影算符：[^3]

$$
P^{(0)}_a\equiv\sum_{\mathscr{E}^{(0)}_a}\ket{\psi^{(0)}_a}\bra{\psi^{(0)}_a}
$$

和投影到相应补空间的算符：

$$
Q^{(0)}_a\equiv 1-P^{(0)}_a=\sum_{\mathscr{E}^{(0)}_{b\neq a}}\ket{\psi^{(0)}_b}\bra{\psi^{(0)}_b}
$$

这个定义是对自由部分，对全哈密顿量也可类似定义。显然对于投影算符有下面的公式成立：

$$
\begin{aligned}P_iP_j&=\delta_{ij}P_i\\\sum_iP_i&=1\end{aligned}
$$

现在类似散射理论那里定义全格林算符和自由格林算符：[^4]

$$
\begin{equation}
    G_0\equiv \frac{1}{z-H_0} =\sum_a \frac{P^{(0)}_a}{z-E^{(0)}_a},\quad G\equiv \frac{1}{z-H} =\sum_a \frac{P_a}{z-E_a}
\end{equation}
$$

这里的$z\in\mathbb{C}$。后面的等号只需要用到投影算符的完备性就可以很快地推出来，这里还引入一个后面会用到的简记，根据投影算符的完备性和正交性不难发现：

$$
\begin{equation}
    \frac{Q^{(0)}_a}{a^k}\equiv Q^{(0)}_a\frac{1}{(E^{(0)}_a-H_0)^k}Q^{(0)}_a = \sum_{b\neq a} \frac{P_b^{(0)}}{(E^{(0)}_a-E^{(0)}_b)^k}
\end{equation}
$$

利用留数定理以及$(z-H)G=G(z-H)=1$不难发现：

$$
\begin{equation}
    \label{eqP}
    P_{\Gamma}=\frac{1}{2\pi\mathrm{i}}\oint_{\Gamma}G(z)\mathrm{~d}z.
\end{equation}
$$

$$
\begin{equation}
    \label{eqHP}
    HP_\Gamma=\frac{1}{2\pi\mathrm{i}}\oint_FzG(z)\mathrm{~d}z=P_\Gamma H.
\end{equation}
$$

这里$H, P, G$对自由的或者微扰后的理论都适用，这里$\Gamma$表示绕过$\{z=E_{i\in\Gamma}\}$的围道，$P_\Gamma\equiv \sum_{i\in\Gamma}=P_i$。

自由的理论我们是会解的，我们关注的是微扰性质，所以也就是关注全格林算符，根据下面的算符恒等式：

$$
\begin{equation}
    \frac{1}{A-B}=\frac{1}{A}+\frac{1}{A}B\frac{1}{A-B}=\frac{1}{A}+\frac{1}{A-B}B\frac{1}{A}
\end{equation}
$$

得知下面积分方程和迭代解：

$$
\begin{equation}
    G=G_0(1+\lambda VG) = G=\sum_{n=0}^\infty\lambda^nG_0(VG_0)^n
\end{equation}
$$

然后按照留数定理就可以计算出每个子空间微扰后对应的全投影算符，注意这里的$\Gamma_a$是包括$E^{(0)}_a$和$E_a$的围道，可以想象由于$E_a$和$E^{(0)}_a$之间相差很小，所以我们总是可以找到一个围道同时包围他们两个，这么做是有原因的：

$$
\begin{equation}
    P_a=P^{(0)}_a+\sum_{n=1}^\infty\lambda^nA^{(n)}_a,\quad A^{(n)}_a=\frac{1}{2\pi\mathrm{i}}\oint_{\Gamma_a}G_0(VG_0)^n\mathrm{~d}z
\end{equation}
$$

现在聚焦于$\mathscr{E}_a^{(0)}$这个子空间，自由格林函数在$E^{(0)}_a$附近进行展开，因为围道包含$E^{(0)}_a$，所以我们想通过这样做把$E_a$极点的信息转化为$E^{(0)}_a$极点的信息提取。验算并不复杂，这里直接给出展开结果：

$$
\begin{equation}
    G_0=\frac{P^{(0)}_a}{z-E_a^0}+\sum_{k=1}^\infty(-1)^{k-1}(z-E_a^0)^{k-1}\frac{Q^{(0)}_a}{a^k}=\sum_{k=0}^\infty(-1)^{k-1}(z-E_a^{(0)})^{k-1}S^k
\end{equation}
$$

这里：

$$
\begin{equation}
    S^k_a=\frac{Q^{(0)}_a}{a^k}-\delta_{k0}
\end{equation}
$$

代回$A_a$的表达式得到：

$$
\begin{equation}
    A^{(n)}_a=-\sum_{(n)}S^{k_1}VS^{k_2}V\ldots VS^{k_{n+1}}
\end{equation}
$$

这里$(n)$表示对所有$k_1+\cdots +k_{n+1}=n,k_i\geq 0$的分拆数求和。比如下面给出直到二阶的结果：[^5]

$$
\begin{equation}
    \begin{aligned} 
        P = P^{(0)} &+ \lambda \left( P^{(0)} V \frac{Q^{(0)}}{a} + \frac{Q^{(0)}}{a} V P^{(0)} \right) \\
        &+ \lambda^2 \left( P^{(0)} V \frac{Q^{(0)}}{a} V \frac{Q^{(0)}}{a} + \frac{Q^{(0)}}{a} V P^{(0)} V \frac{Q^{(0)}}{a} + \frac{Q^{(0)}}{a} V \frac{Q^{(0)}}{a} V P^{(0)} \right. \\
        &- P^{(0)} V P^{(0)} V \left. \frac{Q^{(0)}}{a^2} - P^{(0)} V \frac{Q^{(0)}}{a^2} V P^{(0)} - \frac{Q^{(0)}}{a^2} V P^{(0)} V P^{(0)} \right) + \dots
    \end{aligned}
\end{equation}
$$

上面是利用\ref{eqP}计算，现在使用\ref{eqHP}计算一遍，同样的计算思路，得到：

$$
\begin{equation}
    \left(H-E_a^{0}\right)P_a=\sum_{n=1}^\infty\lambda^nB^{(n)}
\end{equation}
$$

其中

$$
\begin{equation}
    B^{(n)}=\sum_{(n-1)}S^{k_1}VS^{k_2}V\ldots VS^{k_{n+1}}
\end{equation}
$$

比如前两项：

$$
\begin{equation}
\begin{aligned}(H-E_a^{(0)})P&=\lambda P_0VP_0\\&+\lambda^2\left(P_0VP_0V\frac{Q_0}{a}+P_0V\frac{Q_0}{a}VP_0+\frac{Q_0}{a}VP_0VP_0\right)+\ldots\end{aligned}
\end{equation}
$$

现在重头戏来了，我们虽然还是不知道$H$是什么，但是我们微扰地构造了所有的$HP_a$，而这其实就是$H$限制在每一个本征子空间里面，现在我们只要把每一个$HP_a$都对角化，那么$H$其实也就被分块对角化了，而$HP$我们是能够一级一级微扰求解的，所以我们也就知道了怎么$H$的本征值本征矢。这个方法更重要的是他其实对简并和非简并都是统一的框架。

比如考虑非简并情况，我们想求$\mathscr{E}_a^{(0)}$的微扰，由于一维子空间，所以本征值可以用迹表示，另外注意到$\mathrm{Tr~}P=\mathrm{Tr~}P^{(0)}=1$，我们得到：

$$
\begin{equation}
E_a=\mathrm{Tr~}HP=E_a^{(0)}+\sum_{n=1}^\infty\lambda^n(\mathrm{Tr~}B^{(n)})
\end{equation}
$$

注意到：

$$
\begin{equation}
\mathrm{Tr~}MP^{(0)}N=\mathrm{Tr~}P^{(0)}NM=\langle\psi^{(0)}|NM|\psi^{(0)}\rangle
\end{equation}
$$

这里$\psi^{(0)}_a$是零级波函数。很快我们便可以得到能级修正公式：

$$
\begin{equation}
    \begin{aligned}
        \boldsymbol{E}_{\boldsymbol{a}} &= \boldsymbol{E}_a^{(0)} + \lambda \bra{ \psi_a^{(0)} }V\ket{ \psi_a^{(0)}} \\
        &+ \lambda^2 \bra{ \psi_a^{(0)}}  V \frac{Q_a^{(0)}}{a} V\ket{\psi_a^{(0)}} \\
        &+ \lambda^3 \left(\bra{ \psi_a^{(0)}}  V \frac{Q_a^{(0)}}{a} V \frac{Q_a^{(0)}}{a} V\ket{\psi_a^{(0)}}  -\bra{ \psi_a^{(0)}}  V \frac{Q_a^{(0)}}{a^2} V\ket{\psi_a^{(0)}}  \bra{\psi_a^{(0)}}V\ket{\psi_a^{(0)}} \right) + \dots
    \end{aligned}
\end{equation}
$$

显然和前面得到的公式一致。现在考虑简并情况，由于只是微扰所以我们预计不仅仅只是能级，$\mathscr{E}^{(0)}_a$和$\mathscr{E}_a$之间相差也不大，也就是说微扰后的本征矢还是可以用$\mathscr{E}_a^{(0)}$里面的本征矢线性组合得到。也就是说，$H$的$\mathscr{E}_a$空间中的本征矢都可以写成$P_a\ket{\psi^{(0)}_a}$的形式。由此得到本征方程：

$$
\begin{equation}
    HP_a\ket{\psi^{(0)}_a}=E_a\ket{\psi^{(0)}_a}
\end{equation}
$$

再根据$P^{(0)}_a\ket{\psi^{(0)}_a}=\ket{\psi^{(0)}_a}$，上面的方程等价于：

$$
\begin{equation}
    H_a\ket{\psi^{(0)}_a}=E_a\ket{\psi^{(0)}_a}
\end{equation}
$$

其中：

$$
\begin{equation}
    H_a = P_a^{(0)} H P_a P_a^{(0)}, \quad K_a = P_a^{(0)} P_a P_a^{(0)}
\end{equation}
$$

现在这个方程完全是在$\mathscr{E}^{(0)}_a$里面计算了，而这个空间我们是完全清楚的，而且$H_a$和$K_a$也可以逐级微扰计算：

$$
\begin{equation}
    \begin{aligned}
        &K_a = P_a^{(0)} - \lambda^2 P_a^{(0)} V \frac{Q_a^{(0)}}{a^2} V P_a^{(0)} + \dots \\
        &H_a = E_a^{(0)} K_a + \lambda P_a^{(0)} V P_a^{(0)} + \lambda^2 P_a^{(0)} V \frac{Q_a^{(0)}}{a} V P_a^{(0)} + \dots
    \end{aligned}
\end{equation}
$$

然后把$E_a=\sum_k \lambda^k E^{(k)}_a$代入，考察两边$\lambda$的次数就可以得到每一阶对应的本征方程。我们想计算到多少精度都可以，因为上面的这些算符我们是完全清楚的。不难发现和前面得到的结果是吻合的。这样我们便得到了一种一般的方法计算任意阶微扰，不过再次强调，这只是个渐近展开。

# 参考

[^1]: 读者估计敏锐的察觉到他的无穷维希尔伯特空间下的产物就是微分算子的格林函数

[^2]: 本节分析方法来自于Messiah的量子力学教科书

[^3]: 注意为了简便，我们使用一个下标表示所有简并子空间下标，应该理解为对子空间求和，不同下标代表的是不同子空间

[^4]: 这里有必要再详细解释一下我们的记号，对于自由量，也就是带上标0的，下标$a$就表示简并的子空间，而对于微扰后的量，下标$a$代表的是所有在$\lambda\to 0$时趋于对应自由量的集合，所以$E_a$并不像$E^{(0)}_a$一样包含的是本征值相同的子空间，而是可以有能级劈裂的空间，但是在$\lambda\to 0$的极限下他们都趋于$E_a^{(0)}$

[^5]: 下标$a$实在是懒得打了