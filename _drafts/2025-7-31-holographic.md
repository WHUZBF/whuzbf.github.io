---
layout: post
title:  所有我们能看见的光
categories: [physics,]
tags: [hep-th,gr-qc]
---

显然这个标题就是致敬前面时空大尺度结构的相关文章，前面的文章讨论的是经典黑洞，那么显然这篇文章我想讨论量子黑洞，加入量子效应之后最著名的那自然是Hawking辐射，Hawking我记得时间简史里面有个形象的但不那么正确的描述，那就是真空涨落产生正反粒子对，然后反粒子落入黑洞，体现为正粒子从黑洞跑出来作为辐射。而全息原理一个非常有趣的应用方向自然是黑洞熵黑洞信息悖论之类的，有点像是我们看得见的从黑洞中“蒸发”出来的光给我们的信息，所以我取了这么个标题。

讲完为什么叫这个标题，现在来说点背景。大四下学期听了刘洪老师关于全息原理和弦论的网课，刘洪老师其实面向的是高年级本科生，用非常简单的方式力图用最少的知识背景讲清楚里面的物理图像。这里我就勉强记录一下刘洪老师讲了什么，权当作一个日记，稍作个人评论，不打算涉及更多公式推导云云。

跟着课堂的时候虽然我没怎么做习题，不过手写了课堂笔记，用我潦草且充斥着错误的英文写的，因为用中文写有时候名词太多了不是太溜。这份课堂笔记显然不会多出刘洪老师课程的信息容量，所以没必要下载下来看，我只是出于归档需要上传到了本网站。

<!--more-->
刘洪老师网课地址（youtube）为：

<div style="width: 80%; margin: 0 auto; position: relative; padding-top: 45%;">
  <iframe 
    src="https://www.youtube.com/embed/EUnGZoBa3nc?si=1piYYI9Q_JoJHWiC"
    scrolling="no"
    frameborder="no"
    allowfullscreen="true"
    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
  </iframe>
</div>
下面我分几个部分来讲刘洪老师具体都谈了些什么。另外说一句，刘洪老师讲课非常细致，而且这是面对本科生的课，所以台下同学提问也非常积极，刘洪老师都在课堂上进行了细致解答。不过这一缺点便是一门五十课时的课讲的东西还是太少了一点，当然对于刚懂一些QFT本科生能讲到这个程度我觉得已经是非常足够了。

另外，这门课我觉得比较好的一个参考材料是https://ocw.mit.edu/courses/8-821-string-theory-fall-2008，这似乎是刘洪老师之前别的老师上课的内容，有些地方处理的比刘洪老师更加详细，比如刘洪老师对于高点关联函数的计算仅仅只是提了一嘴witten diagram以及bulk-bulk和bulk-boundary传播子，而没有具体计算，这个参考资料就详细计算了三点关联函数，我的笔记中也参考这个材料进行了补充。可惜这个材料没有配套的视频记录。不过非常适合刘洪老师的课程，因为符号约定都差不多。

# Weinberg-Witten 定理

这是一个学弦论都会学的一个很重要的no-go定理，是在说：

> - 如果存在Lorentz协变的非平凡的守恒流，那么将不会存在自旋大于$\frac12$的带有非平凡的守恒荷的无质量粒子。比如QED，感觉光子好像违背了这一定理，但是记住光子的$U(1)$对称性是规范对称性，守恒荷是trivial的。
> - 如果存在Lorentz协变的守恒的能动张量，那么不会存在自旋大于$1$的无质量粒子。给人感觉Einstein微扰量子引力似乎违背了这一点，存在自旋为2的引力子。但是别忘了经典广义相对论只告诉我们$\nabla^\mu T_{\mu\nu}=0$，而不能推出$\partial_0T^{\mu\nu}$守恒关系，所以能动张量在经典GR中不能说是守恒的，自然可以违背这个定理。

上面的定理是对一个local的场论来说的，所以这个no-go定理被解释为弦论作为量子引力理论的必然性。另一种想法是这个定理推导要求定义场论的时空和粒子存在的时空这两个时空需要是一样的。而AdS/CFT里面你可以认为引力子存在于bulk里面，而场论是在boundary上的，这两个时空不一样，bulk里面的引力子由boundary上的local的场论全息对偶描述，这样也便可以突破这一no-go定理的性质

# 黑洞热力学

首先是讲了点经典黑洞，这部分建议看看本篇文章的姊妹篇：所有我们看不见的光

## 黑洞温度

推导黑洞温度时首先使用的是一种很具有启发性的技巧，首先我们来看一下温度在量子场论中对应着什么。回忆一下在统计物理里面我们知道Boltzman系综力学量平均之由下式计算：

$$
\left\langle O\right\rangle=\mathrm{Tr}(e^{-\beta H} O),\quad Z = \mathrm{Tr(e^{-\beta H})}:=1
$$

但是通常的量子场论书前面几课就告诉你真空配分函数以及场的v.e.v由下式给出：[^ 1]

$$
\left\langle O\right\rangle={}_f\bra{\Omega}O\ket{\Omega}_i,\quad Z={}_f\braket{\Omega|\Omega}_i
$$

不难发现如果我们取$T=0$也就是$\beta=\infty$，前面统计力学的式子只有基态的贡献回到通常量子场论的式子。这也非常符合直观，那就是零温对应体系凝聚在基态，没有激发态的贡献。所以原先的量子场论可以看作是零温量子场论。考虑这样一个$\beta$之后会带来激发态的贡献，所以也被称为有限温度量子场论。不过注意温度本身不是一个Lorentz协变的量，后面会看到温度本身的计算是依赖于观察者的，或者说坐标的选取，后面我们对温度黑洞计算都是考虑无穷远处共形平坦观者看到的温度。所以有限温度量子场论实际上选取了一个特定的坐标系，会破坏Lorentz协变性，不过也正因如此，他在不需要Lorentz协变性的凝聚态理论上发挥着很大的作用。

为了计算$\mathrm{Tr}$，我们选定时间$t=0$对应的理论的谱，这个时间零点是任意的，因为任意类空曲面上的谱都应当是完备的：[^3]

$$
\begin{aligned}
\mathrm{Tr}\left(e^{-\beta H}\right)&=\int(\mathcal{D}\phi)_{t=0}\langle\phi|e^{-iH(-i\beta)}|\phi\rangle=\int(\mathcal{D}\phi)_{t=0}\braket{\phi,-i\beta|\phi,0}\\
&=\int(\mathcal{D}\phi)_{t=0}\int(\mathcal{D}\phi)_{\phi,t=0}^{\phi,t=-i\beta}\exp\left[i\int_{t=0}^{t=-i\beta}d^{4}x\mathcal{L}(\phi)\right]
\\&=\int(\mathcal{D}\phi)_{\phi(0)=\phi(-i\beta)}\operatorname{exp}\left[i\int_{t=0}^{t=-i\beta}d^{4}x\mathcal{L}(\phi)\right]
\end{aligned}
$$

所以推导的结果就是对所有在时间方向具有$-i\beta$周期性的$\phi$求和，注意在这一推导中我们把时间轴解析延拓到了虚轴。由于周期是纯虚的，所以我们考虑进行Wick转动$t_E=i t$，得到：

$$
\mathrm{Tr}\left(e^{-\beta H}\right)=\int(\mathcal{D}\phi)_{\phi(0)=\phi(\beta)}\exp\left[-\int_{\tau=0}^{\tau=\beta}d^4x_E\mathcal{L}_E(\phi)\right]
$$

这无非就是原先的场论对应的欧式场论，但是注意这个边界条件，这告诉我们这个场论的时间维数的拓扑不是$\mathbb{R}$而是$S$，而且周长为$\beta$。**所以有限温度场论无非就是原先场论的欧式场论，但是把时间方向紧致化而已，剩下的计算完全和欧式场论一致**。

现在回过头看Schwartzschild黑洞的温度，考虑其近视界几何，对于四维情形，为二维Rindler时空和二维球面的乘积，有如下欧式度规：

$$
ds_E^2 \rho^2\kappa^2 dt_E^2 +d\rho^2+r_s^2d\omega_2^2
$$

其中$\kappa$是表面引力，然后注意到这个度规可以通过定义$\theta = \kappa t_E$的方式改写为极坐标的形式。所以我们可以argue欧式场论良定告诉我们$t_E$得有一个$\beta=2\pi/\kappa$的周期，这就立刻得到温度：

$$
T = \frac{\hbar\kappa}{2\pi}
$$

然后注意到这里的坐标里面的$t$是无穷远处观者的，所以这是无穷远处观者看到的温度[^7]。这一技巧也可以用于纯粹的Rindler时空，其度规为：

$$
ds_E^2 = d\rho^2+\rho^2 d\eta^2
$$

加速观者对应$\rho$为常数，加速度为$1/\rho$。加速观者自己看到的时空肯定和Minkowski是一样的，所以在他的共动坐标系下，其固有时应当是$\tau=\rho\eta$，那么按照前面的经验，$\eta$会有一个$2\pi$的周期，对应$\tau$有一个$2\pi\rho$的周期，这便得到了$\beta=2\pi\rho=2\pi/a$，这便是Unruh效应。

但是显然上面的推导过程不足以让大多数追求严谨的人满意。所以下面以Rindler时空为例进行严谨推导，Schwarzschild时空是一样的，毕竟近视界几何都长一样。[^6]

统计物理里面我们都学过有温度对应一个非平庸的密度矩阵对应系综可以看作一个混合态，如果你了解一点量子信息，实际上混合态可以看作是一个纯态体系的一部分，混合告诉我们我们看到的理论实际上只是系统与环境这个大整体的一部分，是一个有效理论。所以温度实际上告诉我们我们对环境有多无知。比如考虑对同一个体系复制两次：

$$
\mathscr{H}=\mathscr{H}_1\otimes\mathscr{H}_2
$$

考虑这个体系的一个纯态，是下面最一般的纠缠态：

$$
\ket{\Psi}=\frac{1}{\sqrt{Z}}e^{-\beta E_n/2}\ket{n_1}\otimes\ket{n_2}
$$

现在假设我们对$\mathscr{H}_2$一无所知，那么我们对其自由度取偏迹便得到$\mathscr{H}_1$下的有效理论因为对$\mathscr{H}_1$中的力学量$O_1$的平均值计算是不会涉及到$\mathscr{H}_2$的信息的：

$$
\bra{\Psi}O_1\ket{\Psi}=\frac 1Z\sum_n e^{-\beta E_n}\bra{n} O_1\ket{n} = \braket{O_1}
$$

根据密度矩阵的定义，原先的纯态会导出一个非平庸的密度矩阵：

$$
\rho_1 = \mathrm{Tr}\left(\ket{\Psi}\bra{\Psi}\right)=\frac 1Z\sum_{n}e^{-\beta E_n}\ket{n}_{1\, 1}\bra{n}
$$

这样我们就**用纯态刻画了一个混合态**。比如考虑谐振子系统的双复制，其中的squeeze state：

$$
\ket{\Psi}=\frac {1}{\sqrt{Z}}\exp\left(e^{-\frac{\omega\beta}2}a_1^\dagger a_2^\dagger\right)
$$

对体系做一个Bogoliubov变换：

$$
b_1=\cosh\theta a_1-\sinh\theta a_2^\dagger,\quad b_2 = \cosh\theta a_2-\sinh \theta a_1^\dagger 
$$

其中：

$$
\cosh\theta =\left(1-e^{-beta\omega}\right)^{-1/2},\quad \tanh\theta = e^{-\frac12\beta\omega}
$$

这样变换之后立刻发现原先谐振子的基态$\ket{0}\otimes\ket{0}$对应的是$a$作为产生湮灭算符的基态，而$\ket{\Psi}$是$b$作为产生湮灭算符的基态。这个变换的物理意义在后面用弯曲时空量子场论的语言会更加清晰，这里只需要知道，**弯曲时空中真空态是很难统一定义的，是依赖于观者的一个东西**。

量子场论教材上一般不会跟你说场论的波函数，不过这一概念并不复杂，量子化的第一步就是对时空切片，切成一堆类空超曲面，每一个超曲面对应一个完备的希尔伯特空间$\ket{\phi,t}$，态的演化对应连接两个超曲面或者说希尔伯特空间的路径积分。选取$t=0$处的希尔伯特空间的完备谱作为基底$\{\ket{\psi}\}$，那么场论的波函数作为一个泛函就可以表达为：

$$
\braket{\phi(\vec{x})|\Psi,t}=\Psi[\phi(\vec x)]
$$

我们比较关心基态对应的波函数，注意到在$H\to(1-i\epsilon)H$的trick后：

$$
\ket{\phi^\prime(\vec x),t\to-\infty}\to\braket{0|\phi^\prime(\vec x)}\ket{0}\Rightarrow \ket{0} = \int d\phi(\vec x)\ket{\phi(\vec x),-\infty}
$$

上面这无非就是在告诉我们量子场论LSZ框架下的性质，往时间无穷远处推，得到的一定是真空态。[^4]由此可以得到基态波函数：

$$
\begin{aligned}
\Psi_0[\phi(\vec x)] &= \braket{\phi(\vec x)|0}_i = \int d\phi^\prime(\vec x)\braket{\phi(\vec x,t=0)|\phi^\prime(\vec x),-\infty}\\
&=\int d\phi'\int_{\phi(\vec x,t=-\infty)=\phi'}^{\phi(\vec x,t=0)=\phi(\vec x)} \mathcal{D}\phi e^{iS(\phi)}\\
&=\int^{\phi(\vec{x},t=0)=\phi(\vec x)} \mathcal{D}\phi e^{iS(\phi)}
\end{aligned}
$$

注意这里的作用量是积完所有的$t<0$。闵氏和欧式在一些地方还是很不同的，比如Rindler时空我们知道他是有事件视界的，只相当于Minkowski时空的$\frac14$，但是一旦我们把其Wick转动到欧式理论，就相当于对他进行了一个Kaluza延拓，到了$\mathbb{R}^4$。把Rindler时空看作是Minkowski时空的一个子系统Rindler只占了右半部分，想象左半部分是对Rindler时空的复制，不过需要时间反演一下。我们没有理由认为Minkowski时空和Rindler时空的基态是一样的，事实上：

$$
\begin{aligned}
\Psi_0^M[\phi(\vec x)]&=\int_{t_E<0}^{\phi(\vec x,t_E=0)=\phi(\vec x)}\mathcal{D}\phi(\vec x,t_E)e^{-S_E}=\int_{\phi(\rho,\theta=-\pi)=\phi_L(x)}^{\phi(\rho,\theta=-\pi)=\phi_R(x)}\mathcal{D}\phi(\rho,\theta)e^{-S_E}\\
&=\braket{\phi_R(\vec x),\theta=-\pi|\phi_L(\vec x),\theta=0}=\braket{\phi_R|e^{-i(-i\pi)}H_{\text{Rind}}|\phi_L}\\
&=\sum_n e^{-\pi E_n}\chi_n[\phi_R]\chi_n^*[\phi_L],\quad \chi_n[\phi]:=\braket{\phi|n}_\text{Rind}
\end{aligned}
$$

第一步我们是将其在Minkowski坐标系下写出来，然后换到$(\rho,\theta)$ Rindler时空坐标，这里$\phi_{L/R}$表示左右两个Rindler patch，在$t_E=0$时候的初值。因为$\phi(\vec x)$处于$t_E=0$上，显然可以分为左右两边，而这显然可以解释为两边的Rindler patch。第二步其实就是在Rindler坐标下对路径积分的重新解释，因为在新的坐标下，应当把$\theta$，也就是角向坐标看作是时间演化，从物理上就很容易写下这个路径积分到海森堡表象下的等式。由此不难发现Minkowski的真空和Rindler时空真空是互为squeeze state：

$$
\ket{0}_M = \sum_n e^{-\pi E_n}\ket{n}_{\text{Rind}}\otimes \ket{n}_{\widetilde{\text{Rind}}}
$$

所以两者的产生湮灭算符之间也会有Bogoliubov变换关系，这在后面的弯曲时空量子场论里面的讨论中继续。从上的关系直接读出$\beta=2\pi$，但是要注意这里我们使用的坐标是$(\rho,\theta)$，前面说过共动参考系应该是$(\rho=\text{const},\tau=\rho\theta)$，所以对于Rindler时空匀加速观者，其自己看到的温度应当是$\beta = 2\pi\rho$。从这个推导我们可以给出温度的一个非常fancy的解释：**Rindler时空观者和其时间反演量子纠缠的结果**。

上面的方法推导物理味非常非常浓，但是可能让很多信奉场论的人不以为然，所以下面我们再来简要说一下纯粹从弯曲时空量子场论出发如何推导。[^2]不过从下面的推导中读者便能看到实际上很多数学技巧和想法都是相通的。

## 黑洞熵

历史上对这部分内容其实是起源于完全经典的讨论，人们在研究黑洞时发现经典黑洞有无毛定理，质量角动量和电荷就完全描述了这个黑洞，然后出于完全经典广义相对论上的讨论可以证明：

$$
dM = \frac{\kappa}{8\pi G}dA+\Omega dJ+\Phi dQ
$$

这里$A$是事件视界面积，$\Phi$是电荷对应的规范势。人们发现这非常像热力学第二定律，你只需要把$M$解释为能量，把温度看作是$T=\frac{\kappa}{2\pi}=\frac{1}{8\pi G M}$，根据$\frac{dS}{dE}=\frac{1}{T}$积分便能得到熵：[^5]

$$
S_{\text{BH}} = \frac{A}{4G}
$$

这个公式看起来是从Schwarzschild推导出来的，但大家惊奇的发现对于任何黑洞，甚至不必是四维，这个公式都是普适的。做这样的等效替换后，上面的方程就完全与热力学第一定律等价了。剩下的三条热力学定律也是完全能从经典广义相对论来描述的：

> - 0th：表面引力在事件视界上是常数
> - 2nd: 事件视界面积不减
> - 3rd: 表面引力不可能通过有限的步骤（比如扔进去不会塌缩成黑洞的物体）降为0

起初这四条定律大家觉得只是一个巧合，毕竟没人相信黑洞真的能作为一个热力学物理，如果真的是这样，这说明黑洞肯定有很多内部自由度，但是黑洞无毛定理否认了这一点。Hawking之前也是这么想的，后来Bekinstein觉得不对，猜测黑洞是一个热力学物体而且有熵，其正比于事件视界面积，因为如果这样的话刚好会使得热力学第二定律成立。直到Hawking发现黑洞会自发辐射，这才真正确立了黑洞是一个热力学物体，而其热力学必须要考虑量子效应才能显现。

不过理解到了这一点之后大家更困惑了，按照统计力学的经验，熵应当正比于体积而不是表面积。而这一问题正关系全息原理！这说明引力理论bulk里面的信息完全编码至boundary上，所以可以用全息原理的方式去计算黑洞微观态数目。

# 大$N$展开与弦论
课程进行到这里的时候刘洪老师做了一个统计，大家更想听up-to-bottom的讲法，正合我意！然后刘洪老师就开始讲一些弦论了。
## 规范-弦对偶
我不打算在这里介绍最基本的大$N$展开的内容，满大街都是关于这个的讨论，比较喜欢自己思考的读者建议做一下Srednicki习题80.4。所谓大$N$展开就是考虑下面的$SU(N)$规范理论：

$$
L=\frac{1}{4g_{\text{YM}}^{2}}\operatorname{Tr}F_{\mu\nu}F^{\mu\nu}
$$

在$N\to\infty$但是$\lambda = g^2 N$不变的极限。利用Double Line方法很容易分析得到真空配分函数有下面的展开形式：

$$
\left<1\right> = \sum \mathcal{O}(\lambda^{L-1}N^\chi)
$$

这里$L$是圈数，$\chi$是欧拉数，这很有意思，告诉我们这个场论的微扰展开并非一般的场论一样按照圈的数目展开，而是按照拓扑展开。而弦论振幅的特点恰恰就是按照拓扑展开的，所以这暗示我们或许这个规范理论和弦论在某种意义下是对偶的。

一般的书讨论大$N$展开就到此为止了，这里我们再进一步讨论非真空的关联函数。首先我们要知道关联函数里面能装什么算符？显然无非就是一些可观测量，而可观测这个事情在规范理论中不是一个平凡的事情，可观测量一定是那些规范不变量，就对应那些single-trace、double-trace算符：[^9]

$$
\operatorname{Tr_c}(\Phi^2),\quad\operatorname{Tr_c}(F^{\mu\nu}F_{\mu\nu}),\cdots
$$

上面给的是single-trace，multi-trace就是这些基本单元乘起来罢了，这些算符是AdS/CFT里面的谱。求解off-shell的关联函数就是写下带source的配分函数然后求变分：[^8]

$$
Z[J_1,\cdots,J_n]=\int\mathcal{D}A\mathcal{D}\Phi\exp\left[iS + i\int dx J_i(x)\mathcal{O}_i(x) \right]
$$

$$
\braket{\mathcal{O}_1\cdots\mathcal{O}_n}_c=\frac{1}{i^n}\frac{\delta^n\log Z}{\delta J_1(x_1)\cdots \delta J_n(x_n)}
$$

为了更好的看出$N\to\infty$下的行为我们可以将上式改写为：

$$
Z[J_1,\cdots,J_n]=\int\mathcal{D}A\mathcal{D}\Phi\exp\left[iS + i{\color\red N}\int dx J_i(x)\mathcal{O}_i(x) \right]
$$

$$
\braket{\mathcal{O}_1\cdots\mathcal{O}_n}_c=\frac{1}{i^n}\frac{\delta^n\log Z}{\delta J_1(x_1)\cdots \delta J_n(x_n)}\cdot{\color\red \frac1N}
$$

然后注意到作用量在large N极限下行为是$S\sim N \operatorname{Tr}[\cdots]$，经过上面的改写后最大的好处就是加了源之后$S[J]$依旧有$\mathcal{O}(N)$的形式。也就是说加不加源得到的作用量配分函数形式上一样，那么理应得到的配分函数也有一样的展开形式。也就是说经过上面的改写，带源配分函数和真空配分函数都应该是一样的按照拓扑展开：

$$
\begin{aligned}
&\log Z[J_{1}\cdots J_{n}]=\sum_{g=0}^{\infty}N^{2-2g}f_{g}(\lambda)\\\Rightarrow&\left<\mathcal{O}_1,\cdots\mathcal{O}_{n}\right>_{c}\sim\sum_{g=0}^{\infty}N^{2-2g-n}f_{n}^{(g)}\sim N^{2-n}\left(1+O(\frac{1}{N^{2}})\right)
\end{aligned}
$$

熟悉弦论的朋友以下就看出来这就相当于插入算符给原先的拓扑带来了$n$个边界，从而欧拉示性数也要变！由此我们可以计算量子涨落在大N极限下的行为：

$$
\braket{\mathcal{O}_1\mathcal{O}_2}=\braket{\mathcal{O_1}}_c\braket{\mathcal{O_2}}_c+\braket{\mathcal{O}_1\mathcal{O}_2}_c\sim\braket{\mathcal{O_1}}_c\braket{\mathcal{O_2}}_c+\cdots
$$

这里第一项是$\mathcal{O}(N^2)$，第二项是$\mathcal{O}(1)$，所以大N极限下只剩下前面这一项，而这也恰恰说明了在大N极限下量子涨落为0，或者说我们得到的是一个**经典场论**。

再来看和弦论的对偶，大N展开除了$N^\chi$还有一个关于圈数的因子$\lambda^{L-1}$。不难想象我们在固定某个$\chi$的曲面上画费曼图其实就是在对这个曲面进行不同的剖分，而圈数就是告诉我们对这个曲面剖分的有多么细致。回忆弦论里面我们路径积分实际上是要对所有的世界面求和，那么显然这是一个连续的理论而不是离散剖分的理论，合适的解释就是当我们进一步取强耦合极限$\lambda\to\infty$，这个时候只有那些圈数大的剖分留了下来，也就可以近似为对所有曲面求和了。这告诉我们或许**强耦合大N规范理论和弦论对偶**，而弦论是一个有引力的理论。后面我们会看到这种规范/弦对偶的想法在AdS/CFT中确有体现，不过如何真正从t'Hooft极限出发严格说明规范理论和弦论之间的关系而不是仅仅停留在graphic上面的想象至今仍是一个未解之谜。

## 弦与$D$膜

弦论大致就讲了polchinski第一章的内容，光锥量子化导出了一下玻色弦的谱，然后argue了一下RNS超弦也同样可以类似导出来。由于后面关注的是D-brane所以关注的比较多的是II型超弦，因为这里头才有RR荷能提供D-brane的荷。由于我是在看这个讲座之前就学过弦论，所以这部分内容倍速看的，笔记上写了一些课堂上讲的东西并结合自己学过的弦论进行了稍稍的补充，所以这里我就不再详细写一遍了，仅仅对一些后面会用到的重要公式概念进行描述。

# AdS/CFT 对偶

前面黑洞热力学和大N规范理论给了AdS/CFT对偶的一些线索，而上一节铺垫了得到AdS/CFT的工具，现在我们来具体讨论AdS/CFT对偶。

## 弦论起源

## 关联函数计算

## Wilson loop计算

## [DLC] 线性响应理论与Hydrodynamics

## [DLC] Mellin振幅



# 全息纠缠熵

这应该算是这门课最吸引我的地方，可惜只是作为最后一节课草草收尾，我在读了`0905.0932`后写一点自己的看法，这部分毕竟我比较感兴趣，所以写细致一点。

# 名声远扬（臭名昭著）的$\eta/s$

这是刘洪老师课程中没有提到的应用，我最早接触到的全息的文献是从bottom up讲的`Applied Holography: A Practical Mini-Course`，里面非常重要的一个章节就是用全息去计算$\eta/s$，被那些搞全息烧炉子的认作是炫耀的资本，我现在立刻马上带大家来品尝一下这坨shit。



# AdS/CFT中的可积性

这是刘洪老师的lecture中完全没有涉及的领域，但是确实检验AdS/CFT猜想正确性的极其重要的手段。无奈此领域过于庞杂，内容分支众多，或许会在将来我对可积性有更深入的了解后再针对某一具体的我很感兴趣的小分支写一个个人理解，这里先挖个坑搁置。或许后来会单独分出成一篇独立文章。





[^1]: 希望读者还记得量子场论教科书在算这个对应的路径积分时告诉过你为啥只有真空态的贡献，用了所谓$i\epsilon$-trick，其实根本原因上面计算中in态到final态之间要插入个$e^{-iH(t_f-t_i)}$，就是wick转动之后对应的时间方向欧式周期无穷大带来的$H\neq 0$的激发态会被压低。
[^2]: 这里的处理是相当相当简略的，因为我在写这篇文章的时候对这部分还比较熟，就懒得写，不过不排除后面我忘了，所以我给自己留了一个ref：`Mukhanov V, Winitzki S. Introduction to Quantum Effects in Gravity. Cambridge: Cambridge University Press; 2007. `
[^3]: 这里用海森堡绘景$\ket{\phi,t}$，后文讨论中不带$t$的均视为$t=0$处的。
[^4]: 有一个subtle的地方前面忘了说，就是这里考虑的场论真空都是时间无穷远处的自由真空，而不是相互作用真空
[^5]: 这里的BH实际上是Bekinstein-Hawking的意思，不过两者连起来刚好也是Black Hole。
[^6]: 这也能看出等效原理，Rindler时空是Minkowski时空中的加速观者，而爱因斯坦等效原理恰恰说了加速度等效于感受到了引力，所以完全就可以看作是Schwarzschild黑洞事件视界上的观者，加速度等于表面引力。另一方面熟悉AdS几何的读者应该知道AdS的poincare patch是有事件视界的，但是这个事件视界对应的是AdS里面的极端RN黑洞解的事件视界，所以虽然有事件视界但是温度是$0$。
[^7]: 这一点很重要，这其实说明温度这个东西是非常依赖于观察者的，选定了温度就相当于选定了一个坐标系丢失了协变性。比如如果你在固有时下讨论温度，类似红移，应该有$T_\tau = \frac{T_t}{\sqrt{||g_{00}||}}$。后面我们讨论温度都是在坐标时下讨论，或者说无穷远处渐近平坦观者看到的温度，这是因为后面坐标时会被解释为边界上CFT的能标，在AdS/CFT中有特殊意义。
[^8]: 这里关联函数的下标c的意思是连通图贡献。
[^9]:后面的讨论中我把标量场也加进来了，你可以认为是在讨论SYM，或者去掉费米子之后的YMS理论。