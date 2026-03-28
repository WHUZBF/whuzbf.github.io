---
layout: post
title:  非平衡物理课堂纪实
categories: [physics]
tags: [stat-phy]
comments: true
---

这个课堂笔记也就随便写写，不过我对这方面不太熟悉，所以可能会参照讲义内容补充一些。可惜讲义是日文的[^16]，我也没有把这个笔记当作讲义的大概翻译的打算。但是这学期下来看讲义确实感觉日文也精进了不少。另外这学期我还上了Yuji的课，给物理学家的代数拓扑，显然对于高能人这个课更重要一些，所以我笔记也写的认真一些，不过有很多地方我不太满意，比如纤维丛部分我就额外看了一些东西但是觉得写笔记又很费劲我又不会真的看，忘的时候问下chatgpt显然快得多。所以原计划一起发到网站上的笔记现在就有生之年了，而且Yuji的讲义是英文的非常好的讲义，直接读那个要好太多。

- [课堂纪实](#课堂纪实)
  - [Lecture 1](#lecture-1)
  - [Lecture 2](#lecture-2)
  - [Lecture 3](#lecture-3)
  - [Lecture 4](#lecture-4)
  - [Lecture 5](#lecture-5)
  - [Lecture 6](#lecture-6)
  - [Lecture 7](#lecture-7)
  - [Lecture 8](#lecture-8)
  - [Lecture 9](#lecture-9)
  - [Lecture 10](#lecture-10)
  - [Lecture 11](#lecture-11)
  - [Lecture 12](#lecture-12)
  - [Lecture 13](#lecture-13)
- [DLC](#dlc)
- [脚注](#脚注)



<!--more-->
# 课堂纪实
## Lecture 1
>这节课主要目的是介绍什么是非平衡态，用是否定常是否平衡来分类热力学状态，并引入了量子主方程的概念。

考虑一个统计系综，用$p\_X(x;t)$表示热力学量$X$的概率分布，所谓**定常**和**非定常**，就是根据概率分布是否随时间变化区分的：

$$
\partial_t p_X(x;t)\overset{?}{=}0
$$

这个定义很好理解，概率分布不变，相应的热力学量的系综平均自然也就不变，也就是定常。但是定常并不等于平衡态，只是宏观上看不变，微观上是动态平衡，这个后面会说。后面我们用`st`以及`eq`两个不同的标记区分两者。而且注意定常只是一个平衡点，系统定常意思是系统在这个时间点处时间偏导数为0，并不意味着后面一直会保持这个状态，因为热库或许会发生改变，导致平衡点发生偏移，后面会再提到这一点。

后面我们考虑由下面的线性方程描述系统的概率分布演化的模型，也就是所谓**主方程**：

$$
\partial_t p_X(x;t)=\sum_{x'=1}^NW(x|x';t)p_X(x';t)\tag{1.1}
$$

这里的$W$就是跃迁矩阵，注意我们假设了这个方程是线性的，也就是说后面我们考虑的都是线性演化的系统，所以$W$是和$p\_X$无关的。根据概率分布的正性以及归一性，立刻得到跃迁矩阵需要满足的条件：

$$
W(x|x;t)\geq 0, \quad W(x|x;t)=-\sum_{x^{\prime}|x^{\prime}\neq x}W(x^{\prime}|x;t)\leq0
$$

定义下面的概率流，

$$
\begin{aligned}
J(x|x^{\prime};t):=&W(x|x^{\prime};t)p_X(x^{\prime};t)-W(x^{\prime}|x;t)p_X(x;t)\\
:=&J_+(x|x^{\prime};t)-J_-(x|x^{\prime};t)
\end{aligned}
$$

可以把主方程写成下面的形式：

$$
\partial_tp_X(x;t)=\sum_{x^{\prime}=1}^NJ(x|x^{\prime};t)=\sum_{x^{\prime}=1}^N[J_+(x|x^{\prime};t)-J_-(x|x^{\prime};t)]\tag{1.2}
$$

类比流体力学，其实主方程就类似于连续性方程。$J$就像是概率分布梯度。

在概率流的观点下看，定常和非定常就可以看作是概率流是否平衡抵消，也就是说：

$$
\sum_{x^{\prime}=1}^NJ(x|x^{\prime};t)\overset{?}{=}0
$$

这个方程给出了定常状态概率分布和跃迁矩阵之间的关系，显然只要跃迁矩阵和时间相关，那么定常状态也就和实践相关。这里可能有不少人疑惑，前面不都说了定常状态是时间偏导数为0吗？这里就要注意主方程给的是系综真实概率分布的演化，而上面的概率流方程告诉我们的是定常的点在那里，而其随时间变化就是说定常点随着时间移动，而其移动并不由主方程描述，所以完全可能随着主方程系统演化到定常状态，然后由于定常状态便宜，系统不再定常。

注意，定常只需要概率流合起来抵消，而并不要求每一个概率流都是0。倘若现在我们考虑概率流恒为0的特殊情况[^10]，可以预料到这一情况应该对应平衡态。可以得到跃迁矩阵需要满足下面的**细致平衡方程**[^18]：

$$
\begin{gathered}
W(x|x^{\prime})p_{X}^{\mathrm{eq}}(x^{\prime})=W(x^{\prime}|x)p_{X}^{\mathrm{eq}}(x)\\
\ln\frac{W(x^{\prime}|x)}{W(x|x^{\prime})}=\ln p_X^{\mathrm{eq}}(x^{\prime})-\ln p_X^{\mathrm{eq}}(x)
\end{gathered}
$$

如果进一步要求如下的**局域细致平衡方程**：

$$
\ln\frac{W(x^{\prime}|x)}{W(x|x^{\prime})}=\beta(E_X(x)-E_X(x^{\prime}))
$$

物理上看这实际上是在要求能量最低原理，尽可能往能量低的态跃迁。在这一要求下平衡分布变为熟悉的玻尔兹曼分布：

$$
p_X(x)=\frac{\operatorname{exp}\left(-\beta E_{X}(x)\right)}{\sum_{x}\operatorname{exp}\left(-\beta E_{X}(x)\right)}
$$

注意这里的细微差别**平衡态并不一定就是Gibbs态**，平衡态我们只要求各个概率流为0给出的细致平衡方程，而Gibbs态进一步要求把能量加进去的局域细致平衡方程。

另外**局域细致平衡和细致平衡之间没有包含关系**。前面我们写的局域细致平衡方程可以推广为由热库的熵变给出的形式：

$$
\frac{W(x^{\prime}|x)}{W(x|x^{\prime})}=\exp(\Delta s^{\mathrm{bath}}(x^{\prime}|x))\tag{1.3}
$$

现在我们考虑多个热库接触的情况，也就是说和两个能级跃迁相接触的热库可能不同，热库温度比如要用$\beta\_{x\|y}=\beta\_{y\|x}$来标记，而这个时候下面的方程是**不一定成立的**：

$$
\Delta s^\text{bath}(x'|x) =\beta_{x^{\prime}|x}(E_X(x)-E_X(x^{\prime}))\overset{?}{=}\ln p_X^{\mathrm{eq}}(x^{\prime})-\ln p_X^{\mathrm{eq}}(x)
$$

而这意味着跃迁函数的比值不能写成两个态的分布概率的差值，而这正是细致平衡的关键要求！局部细致平衡只是告诉我们这个时候概率分布是玻尔兹曼分布！而细致平衡才告诉你系统整体处于平衡态！但并不一定对应玻尔兹曼分布！

进一步还可以考虑不仅不同能级跃迁和不同的热库接触，而且两个能级跃迁还可以和多个热库接触的情况，这个时候上面的方程就要考虑多个热库的贡献，局域细致平衡方程成为：

$$
W(x^{\prime}|x)=\sum_\nu W^{(\nu)}(x^{\prime}|x),\quad\frac{W^{(\nu)}(x^{\prime}|x)}{W^{(\nu)}(x|x^{\prime})}=\exp(\Delta s^{\mathrm{bath}(\nu)}(x^{\prime}|x))
$$

显然这依旧在一般情况下没有细致平衡的形式。

现在我们就明白了，是否定常根据概率流之和是否为0判断，而是否平衡根据每一个概率流是否为0判断。平衡意味着满足细致平衡方程，但不一定是Gibbs态。反过来系统处于Gibbs态意味着满足局部细致平衡方程，但并不一定满足细致平衡方程从而是平衡态。当然上面是对有多个热库的情况下说明的，对于单一热库，两者还是一致的。
## Lecture 2
>这节课的目的主要是介绍Markov过程，为后面将其与量子主方程联系做准备。另外本节考虑的是离散马尔可夫过程，我之后问老师既然系统随时间演化总是连续的，为什么我们考虑的对应的马尔可夫过程是离散的，伊藤桑说对于连续的演化系统总是可以选取时间间隔很短考虑为离散马尔可夫过程。

所谓一个**Markov链**就是指我们有一堆随机变量，他们之间满足：

$$
X_k\perp\{X_{k-2},\cdots,X_1\}|X_{k-1},\quad \forall k\in\{3,\cdots,n\}
$$

这个记号的意思是在$X\_{k-1}$的条件下，前面两组随机变量相互独立。翻译成人话就是：

$$
p_{X_k|X_1,...,X_{k-1}}(x_k|x_1,...,x_{k-1})=p_{X_k|X_{k-1}}(x_k|x_{k-1})
$$

再翻译一下就是说Markov链的传播只依赖于当前这个态的信息，至于这个态怎么传播到他这里的，也就是过去的信息他记不住。那么从最初的概率分布出发我们就能跟着Markov链传播写下传播后的概率分布：

$$
p_{\boldsymbol{X}}(\boldsymbol{x})=\prod_{k=2}^np_{X_k|X_{k-1}}(x_k|x_{k-1})p_{X_1}(x_1)\tag{2.1}
$$

我们用下面的记号表明这些随机变量构成一个Markov链：

$$
X_1\to X_2\to X_3\to\cdots X_n
$$

有个很重要的定理是说，任意挑三个变量构成的子链也是一个Markov链：

$$
X_i\to X_j\to X_k,\quad \forall i<j<k
$$

翻译成人话就是要证明：

$$
p_{X_i,X_j,X_k}(x_i,x_j,x_k)=p_{X_k|X_j}(x_k|x_j)p_{X_j|X_i}(x_j|x_i)p_{X_i}(x_i)\tag{2.2}
$$

这个直接硬算就行了。和Markov链相应的概念就是**Markov过程**，这是说我们考虑一个随机过程，也就是考虑一个随机变量$X$，其概率分布和时间有关，也就是$p\_X(x;t)$，那么随着时间演化，这里先假设时间演化是离散的，我们可以看作是每个时间$t\_k$处有一个相应的变量$X\_k$，这里时间的依赖我放进下标里面去了。那么Markov随机过程就是说这些随机变量构成一个Markov链。

现在用前面说的定理，选取任意三个时间$t\_i<t\_j<t\_k$，我们可以得到上面的2.2式。然后两边同时除去$X\_k$的概率分布，根据条件概率公式得到下面的**Chapman-Kolmogorov方程**：

$$
p_{X_k|X_i}(x_k|x_i)=\sum_{x_j}p_{X_k|X_j}(x_k|x_j)p_{X_j|X_i}(x_j|x_i)
$$

现在把时间变量明显地写出来，得到：

$$
\boxed{
p(x_3;t_3|x_1;t_1)=\sum_{x_2}p(x_3;t_3|x_2;t_2)p(x_2;t_2|x_1;t_1)
}
$$

眼尖的你肯定发现了，对于物理学家来说这太他妈自然了，把中间那个条件概率看作是传播子，这不就是在说：

$$
\braket{x_3;t_3|x_1;t_1} = \braket{x_3;t_3|\mathbb{1}|x_1;t_1}=\sum_{x_2}\braket{x_3;t_3|x_2;t_2}\braket{x_2;t_2|x_1;t_1}
$$

更常用的是把条件🐔掉的边缘概率分布，根据上面的方程满足：[^1]

$$
p_X(x;t)=\sum_y p(x;t|y;s)p_X(y;s)
$$

另外，Markov过程随机变量$X$不管是离散还是连续的，式子都是一样的，只是要把求和变成积分，类似下面这个样子，是一个积分方程：

$$
P(x_3;t_3|x_1;t_1)=\int dx_2P(x_3;t_3|x_2;t_2)P(x_2;t_2|x_1;t_1)
$$

## Lecture 3
>这节课的目的就是把前面离散的情况推广到时间连续的情况，然后发现Chapman-Kolmogorov方程会很自然地给出主方程以及扩散过程相关的Fokker-Planck方程。[^2]

首先考虑离散变量情况，考虑关于$t\_1<t\_2<t\_2+dt$时的Chapman-Kolmogorov方程，显然我们可以把$p(x\_3;t\_3\|x\_2;t\_2)$展开为下面的形式：

$$
p(x_{3};t_{2}+dt|x_{2};t_{2})=\delta_{x_{3}x_{2}}+W(x_{3}|x_{2};t_{2})dt+O(dt^{2})
$$

根据$p(x\_{3};t\_{2}+dt\|x\_{2};t\_{2})$的非负性以及归一性可以立刻得到下面的方程：

$$
\begin{aligned}&\sum_{x_{3}}W(x_{3}|x_{2};t_{2})=0,\\&W(x_{2}|x_{2};t_{2})=-\sum_{x_{3}|x_{3}\neq x_{2}}W(x_{3}|x_{2};t_{2})\leq0,\end{aligned}
$$

然后把$p(x\_{3};t\_{2}+dt\|x\_{2};t\_{2})$的小量展开式代入Chapman-Kolmogorov方程并且注意到上面$W$的性质可以得到：

$$
\begin{aligned}&\frac{p(x_3;t_2+dt|x_1;t_1)-p(x_3;t_2|x_1;t_1)}{dt}\\&=\sum_{x_2}W(x_3|x_2;t_2)p(x_2;t_2|x_1;t_1)\\&=\sum_{x_2|x_2\neq x_3}[W(x_3|x_2;t_2)p(x_2;t_2|x_1;t_1)-W(x_2|x_3;t_2)p(x_3;t_2|x_1;t_1)]\\&=\sum_{x_2}[W(x_3|x_2;t_2)p(x_2;t_2|x_1;t_1)-W(x_2|x_3;t_2)p(x_3;t_2|x_1;t_1)]\end{aligned}
$$

取一下$dt\to 0$极限，而且把$x\_1$求和掉把条件概率边缘化一下，这玩意儿不就是在说：

$$
\begin{aligned}
\frac{\partial}{\partial t}p_X(x;t)&=\sum_{x^{\prime}}W(x|x^{\prime};t)p_X(x^{\prime};t)\\&=\sum_{x^{\prime}}[W(x|x^{\prime};t)p_X(x^{\prime};t)-W(x^{\prime}|x;t)p_X(x;t)]\\
&=\sum_{x'}J(x|x';t)
\end{aligned}\tag{3.1}
$$

显然这正是主方程，而$W$可以自然解释为跃迁矩阵。这意味着前面我们对演化方程只是线性依赖于概率从而得到主方程的条件其实是在说我们考虑的是Markov过程。而Markov过程其实就是要求概率演化之和前面的时间点的概率有关，也就是说不会记住历史的信息。这个条件在体系与大热库接触的时候往往是一个自然的条件，因为跃迁矩阵和系统本身不会有太大的依赖。如果考虑小热库，这个时候热库和系统之间就会有很大的依赖关系，这会导致Chapman-Kolmogorov方程失效。当然你还是可以用一般的chain rule去写概率之间的关系，然后得到一个类似的推广后的Chapman-Kolmogorov方程然后类似的做连续时间极限得到类似的主方程，但是这个方程研究起来就复杂不少，因为并不是如Markov过程这样线性的。

同样的我们可以考虑连续变量推广，最后的结果就是：

$$
\begin{aligned}
\partial_tP_X(x;t)&=\int dx^{\prime}\left[W(x|x^{\prime};t)P_X(x^{\prime};t)-W(x^{\prime}|x;t)P_X(x;t)\right]\\
&=\int{d x'} J(x|x';t)
\end{aligned}\tag{3.2}
$$

就是把求和变成积分号，不过其实在推导的时候有一些微妙的地方，比如你在展开概率分布的时候应该是这样：

$$
P(x_3;t_2+dt|x_2;t_2)=[1+\mathbb{W}(x_2;t_2)dt]\delta(x_3-x_2)+W(x_3|x_2;t_2)dt
$$

注意这个$\mathbb{W}$，其实这是因为$P$这个时候是有delta函数奇异性的，那么展开的系数$W$就应该也有这样的奇异性，这里我们用一个trick把奇异性提取出来，放到前面去成为$\mathbb{W}\delta(\cdot)$这样的项。

另外，如果你不做最后的边缘化，会得到条件概率分布对应的主方程，后面也会用到，长下面这个样子：

$$
\begin{aligned}
\frac{\partial}{\partial t}p_X(x;t)&=\sum_{x^{\prime}}W(x|x^{\prime};t)p_X(x^{\prime};t)=\sum_{x^{\prime}}[W(x|x^{\prime};t)p_X(x^{\prime};t)-W(x^{\prime}|x;t)p_X(x;t)]\\
\partial_tP(x;t|y;s)&=\int dx^{\prime}\left[W(x|x^{\prime};t)P(x;t|y;s)-W(x^{\prime}|x;t)P(x;t|y;s)\right]
\end{aligned}\tag{3.3}
$$

考虑(3.2)，我们尝试做变量替换$r=x-x'$，令$W(x\|x^{\prime};t)=w(r\|x^{\prime};t)$，那么先把$r$换成$-r$，再把$x$换成$x-r$，就有$W(x'\|x;t)=W(x-r\|x;t)=w(-r\|x;t)$，主方程变为：

$$
\begin{aligned}\partial_{t}P_{X}(x;t)&=\int dr\left[W(x|x-r;t)P_X(x-r;t)-W(x-r|x;t)P_X(x;t)\right]\\&=\int dr\left[w(r|x-r;t)P_X(x-r;t)-w(-r|x;t)P_X(x;t)\right],\end{aligned}
$$

然后我们注意到第一项有下面的Taylor展开：

$$
w(r|x-r;t)P_X(x-r;t)=\sum_{k=0}^\infty\frac{(-r)^k}{k!}(\partial_x)^k[w(r|x;t)P_X(x;t)].
$$

然后带进去得到：

$$
\begin{aligned}\partial_{t}P_{X}(x,t)&=\sum_{k=1}^\infty\frac{(-1)^k}{k!}(\partial_x)^k\left[\left[\int drr^kw(r|x;t)\right]P_X(x;t)\right]\\&+\int dr\left[w(r|x;t)P_X(x;t)-w(-r|x;t)P_X(x;t)\right]\\&=\sum_{k=1}^\infty\frac{(-1)^k}{k!}(\partial_x)^k\left[\left[\int drr^kw(r|x;t)\right]P_X(x;t)\right]\end{aligned}
$$

改写一下得到所谓的Kramers-Moyal展开[^3]：

$$
\begin{aligned}\partial_{t}P_{X}(x;t)&=\sum_{k=1}^\infty\frac{(-1)^k}{k!}(\partial_x)^k[A^{(k)}(x;t)P_X(x;t)],\\A^{(k)}(x;t)&=\int drr^kw(r|x;t).\end{aligned}
$$

不过作为数学严格化来说，我们还需要给出这个级数收敛的条件，否则只能看作是一个形式幂级数。

不难想象到，如果这个$w$只局域在很小的$\|r\|$范围内的话，我们可以对上面的技术展开进行截断，一般来说截断到二阶就够了，这会出来一个扩散项：

$$
\boxed{
\partial_tP_X(x;t)=-\partial_x[A^{(1)}(x;t)P_X(x;t)]+\frac{1}{2}(\partial_x)^2[A^{(2)}(x;t)P_X(x;t)]
}
$$

这个方程就是**Fokker-Plank**方程，在研究布朗运动的时候十分有用。然后我们还可以把这个方程如主方程(1.2)一样写成一个连续性方程的形式：

$$
\begin{aligned}
\partial_{t}P_{X}(x;t)&=-\partial_{x}[\nu_{X}(x;t)P_{X}(x;t)]=-\partial_{x}[j_{X}(x;t)]\\
j_{X}(x;t)&=A^{(1)}(x;t)P_{X}(x;t)-\frac{1}{2}\partial_{x}[A^{(2)}(x;t)P_{X}(x;t)]
\end{aligned}\tag{3.4}
$$

参考我们在主方程的那里的讨论，现在从Fokker-Plank方程的角度可以说定常条件等价于$\partial\_{x}[j\_{X}(x;t)]=0$，也就是说流在各点事常数，而平衡条件等价于更强的$j\_{X}(x;t)=0$。

总结一下，Markov过程最核心的方程就是Chapman-Kolmogorov方程，他告诉了我们随机过程概率分布如何演化，不过其时间变量是离散的，我们如果考虑其无穷小时间演化极限，就会发现其演化方程就是主方程，而Markov过程重要且简单的原因，恰恰是因为其描述了一个热库很大，跃迁矩阵与系统所处状态无关从而概率方程线性的系统。然后我们在一些情况下可以对这个主方程进行近似，取前面两阶就得到了Fokker-Planck方程。

## Lecture 4
>这一节课的目的就是进一步研究上节课推导的Fokker-Planck方程，不过感觉这节课讲的内容相比之前少不少。而且上课的时候我特别困，好在ito纯板书，而且趁他讲日语的时候我可以自己补觉或者搞清楚前面讲的内容。

我们前面说Fokker-Planck方程可以用来描述布朗运动，不过前面我们如果把$x$看作是颗粒的位置的话，这只是一个一维的布朗运动，原则上来说我们可以假设这是一个Markov过程，然后根据跃迁概率来建模，用Kramer公式算出来Fokker-Planck方程。不过显然这很困难，我们很难从微观上来argue这个$W$长啥样，不过我们可以根据假定宏观地认为最后的方程一定有Fokker-Planck方程的形式，然后从物理上看Fokker-Planck方程第一项应当是漂移项，是由外力驱动的，如果考虑保守力的话写作：

$$
A^{(1)}(x;t)=-\mu\partial_xU_X(x)
$$

第二项是扩散项，我们假设扩散系数是$D$：

$$
A^{(2)}(x;t)=2D
$$

目前这都只是一种建模猜测，代入后得到：[^4]

$$
\partial_tP_X(x;t)=\mu\partial_x[(\partial_xU_X(x))P_X(x;t)]+D(\partial_x)^2[P_X(x;t)]
$$

我们假设液体是均匀的，那么应该有$D$和$x$无关，那么考虑平衡态应该有：

$$
\mu U_X(x)+D\ln P_X^{\mathrm{eq}}(x)=\mathrm{const}.
\Rightarrow P_X^\mathrm{eq}(x)\propto\exp\left(-\frac{\mu U_X(x)}{D}\right)
$$

也就是说平衡态的时候满足的是正则系综的Boltzman分布，这和统计物理告诉我们的一致，而且和$P\propto e^{-\beta U}$比对告诉我们：

$$
D=\mu k_BT
$$

这与1905年爱因斯坦导出来的结果一致！利用上面的关系式以及平衡态概率分布和势能的关系，我们可以得到下面的Fokker-Planck方程：

$$
\partial_tP_X(x;t)=\partial_x\left[\mu\beta^{-1}P_X(x;t)\partial_x\left(\ln\frac{P_X(x;t)}{P_X^{\mathrm{eq}}(x)}\right)\right]
$$

我们来用信息熵的观点分析一下这个动力学，定义所谓Kullback-Leibler散度：

$$
D_{KT}\left(P(t))||P^{eq}(s)\right):=\int dx P(x;t)\ln\frac{P(x;t)}{P^{eq}(x;s)}
$$

其描述的是真实概率分布和平衡态分布之间的差异，越小则系统越接近平衡。对$t$求导并取$s=t$我们得到：

$$
\left.\frac{\partial}{\partial t}D_{KT}(P(x;t)\|P^{\mathrm{eq}}(x;s))\right|_{s=t}=-\mu\beta^{-1}\int dxP(x;t)\left[\partial_x\ln\frac{P(x;t)}{P^{\mathrm{eq}}(x;t)}\right]^2\leq0
$$

这说明随着时间推移系统会慢慢趋近于平衡态，而且这个$D\_{KT}$单调递减其实和热力学第二定义是吻合的，这里暂且按下不表。[^5]

如果我们考虑多维随机变量，用多维Taylor展开重新推导前面的这一系列事情，我们会得到Fokker-Plank方程：

$$
\begin{aligned}\partial_tP_{\boldsymbol{Y}}(\boldsymbol{y};t)&=-\sum_i\partial_{y_i}[j_{Y_i}(\boldsymbol{y};t)]=-\nabla\cdot[\boldsymbol{j}_\boldsymbol{Y}(\boldsymbol{y};t)],\\
j_{Y_i}(\boldsymbol{y};t)&=A_i^{(1)}(\boldsymbol{y};t)P_{\boldsymbol{Y}}(\boldsymbol{y};t)-\sum_j\frac{1}{2}\partial_{y_j}[A_{ij}^{(2)}(\boldsymbol{y};t)P_{\boldsymbol{Y}}(\boldsymbol{y};t)]\end{aligned}\tag{4.1}
$$

但是注意在一维的时候平衡就意味着流是常数，而高维则不然，典型的就是根据$\nabla\cdot(\nabla\times \mathbf{A})=0$，我们可以取$\boldsymbol{j}\_\boldsymbol{Y}=\nabla\times \mathbf{A}$。

然后就是对应的布朗运动方程：

$$
\begin{aligned}\partial_tP_{\boldsymbol{Y}}(\boldsymbol{y};t)&=-\nabla\cdot[\boldsymbol{j}_\boldsymbol{Y}(\boldsymbol{y};t)],\\\nu_{\boldsymbol{Y}}(\boldsymbol{y};t)&:=\frac{\boldsymbol{j}_\boldsymbol{Y}(\boldsymbol{y};t)}{P_\boldsymbol{Y}(\boldsymbol{y};t)}=-\mu\nabla(U_\boldsymbol{Y}(\boldsymbol{y})+\beta^{-1}\ln P_\boldsymbol{Y}(\boldsymbol{y};t))\end{aligned}\tag{4.2}
$$

如果是非保守力的话上面的方程要改为：

$$
\boldsymbol{\nu_{Y}}(\boldsymbol{y};t)=\mu\boldsymbol{F_{Y}^{\mathrm{nc}}}(\boldsymbol{y})-\mu\beta^{-1}\nabla\ln P_{\boldsymbol{Y}}(\boldsymbol{y};t)
$$

不过一般来说由于有耗散，所以平衡条件永远得不到满足。系统始终处于非平衡状态。

回忆一下我们在推导主方程的时候是根据条件概率表述的Chapman-Kolmogorov方程连续化，最后取一个边缘化得到非条件概率表述的主方程，最后取近似得到Fokker-Planck方程，算符形式如下：

$$
\begin{aligned}\partial_tP_X(x;t)&=\mathcal{L}_{\mathrm{FP}}P_X(x;t),\\\mathcal{L}_{\mathrm{FP}}&=-\partial_xA^{(1)}(x;t)+\frac{1}{2}\partial_x^2A^{(2)}(x;t).\end{aligned}
$$

显然我们也完全可以不做边缘化，就去用条件概率分布的主方程(3.3)，一样得进行展开近似，得到条件概率分布对应的Fokker-Planck方程。显然由于这个$\mathcal{L}\_{FP}$只和跃迁矩阵$W$有关，而这个跃迁矩阵对于两种形式的主方程都是一样的，所以我们可以预料到最后的Fokker-Planck方程依旧为：

$$
\partial_tP(x;t|y;s)=\mathcal{L}_\mathrm{FP}P(x;t|y;s)
$$

现在我们考虑无穷小时间变化，也就是$s=t-dt$，可以得到：

$$
\begin{aligned}
P(x;t+dt|y;t)&=(1+dt\mathcal{L}_{\mathrm{FP}})\lim_{dt\to0}P(x;t+dt|y;t)\\
&=\left[1+dt\mathcal{L}_{\mathrm{FP}}\right]\delta(x-y)\\
&=\left[1+dt\left[-\partial_xA^{(1)}(y;t)+\frac{1}{2}(\partial_x)^2A^{(2)}(y;t)\right]\right]\delta(x-y)\\
&=\left[1+dt\left[-\partial_xA^{(1)}(y;t)+\frac{1}{2}(\partial_x)^2A^{(2)}(y;t)\right]\right]\int\frac{ds}{2\pi}\exp\left[is(x-y)\right]\\
&=\int\frac{ds}{2\pi}\left[1+dt\left[-isA^{(1)}(y;t)-\frac{1}{2}s^2A^{(2)}(y;t)\right]\right]\exp\left[is(x-y)\right]\\
&=\int\frac{ds}{2\pi}\exp\left[\left[-isA^{(1)}(y;t)-\frac{1}{2}s^2A^{(2)}(y;t)\right]dt+is(x-y)\right]\\
&=\int\frac{ds}{2\pi}\exp\left[-\frac{dt}{2}A^{(2)}(y;t)\left[s+i\frac{A^{(1)}(y;t)-\frac{x-y}{dt}}{A^{(2)}(y;t)}\right]^2-\frac{\left[\frac{x-y}{dt}-A^{(1)}(y;t)\right]^2}{2A^{(2)}(y;t)}dt\right]\\
&=\frac{1}{\sqrt{2\pi A^{(2)}(y;t)dt}}\exp\left[-\frac{\left[\frac{x-y}{dt}-A^{(1)}(y;t)\right]^2}{2A^{(2)}(y;t)}dt\right]
\end{aligned}
$$

这里第三个等号我们利用delta函数的性质把$A$的自变量换掉了[^6]；第五个等号我们利用$\mathcal{O}(dt^2)$可以忽略然后把中括号里面的东西e上去了；最后两步就是常规的高斯积分计算[^7]。

我们现在假设时间是离散的，但是观察时间非常小，也就是说$i dt$时刻我们记录一个数据点$x\_i$，上面的方程为：

$$
\begin{aligned}L_{\mathrm{OM}}(x_i,\dot{x}_i;t)&=\frac{\left[\dot{x}_i-A^{(1)}(x_i;t)\right]^2}{2A^{(2)}(x_i;t)},\\P(x_{i+1};t+dt|x_i;t)&=\frac{1}{\sqrt{2\pi A^{(2)}(x_i;t)dt}}\exp\left[-L_{\mathrm{OM}}\left(x_i,\dot{x}_i;t\right)dt\right]\end{aligned}
$$

这里定义的$L\_{OM}$是**Onsager-Machlup函数**。注意到我们如果想知道$\boldsymbol{x}=\\{x\_1,\ldots,x\_n\\}$的联合概率分布，类似在布朗运动里面我们想知道$ndt$时间演化之后，系统走的路径的概率是什么。对于Markov过程，前面说过只需要把条件概率一个个乘起来就好了(2.1)，那么我们就得到粒子走$\mathbf{x}$这个路径的概率为：

$$
\begin{aligned}P_{\boldsymbol{X}}(\boldsymbol{x})&=\prod_{i=1}^{n-1}P(x_{i+1};(i+1)dt|x_i;idt)P_{X_1}(x_1)\\&=\frac{P_{X_1}(x_1)\exp\left[-\sum_{i=1}^{n-1}L_{\mathrm{OM}}(x_i,\dot{x}_i;idt)dt\right]}{(2\pi dt)^{\frac{n-1}{2}}\prod_{i=1}^{n-1}\sqrt{A^{(2)}(x_i;idt)}}\end{aligned}
$$

不过注意写这个式子的前提是我们离散化的时候是均匀的离散化，所以我并没有把求和干脆写成积分号，是为了提醒这里还有个离散化选取方法的问题需要注意。

## Lecture 5
> 今天睡过了，没去听课，只能按照讲义上写一点东西了。这节课的目标大概就是从前面导出来的FP方程出发推导出对应的随机偏微分方程。

现在我们定义Wiener过程，对离散时间定义，满足下面几个要求：

- $\mathcal{B}\_{0}=0$
- $\mathcal{B}\_{t}=0$连续
- $\mathcal{B}\_{t+\Delta t}-\mathcal{B}\_{t}$是平均值为0，方差为$\Delta t$的高斯分布
- $\mathcal{B}\_{t+\Delta t}-\mathcal{B}\_{t}$对不重叠的时间区域相互之间独立

记$d\mathcal{B}\_{t}=\mathcal{B}\_{t+dt}-\mathcal{B}\_{t}$，上面的条件可以翻译成：

$$
\begin{gathered}
\mathrm{Prob}(d\mathcal{B}_t)=\frac{1}{\sqrt{2\pi dt}}\exp\left(-\frac{(d\mathcal{B}_t)^2}{2dt}\right)\\
\mathrm{Prob}(d\mathcal{B}_{dt},\ldots,d\mathcal{B}_{(n-1)dt})=\prod_{i=1}^{n-1}\mathrm{Prob}(d\mathcal{B}_{idt})
\end{gathered}
$$

倘若我们进行如下的变量替换：

$$
d\mathcal{B}_{idt}=\frac{1}{\sqrt{A^{(2)}(x_i;idt)}}\left[x_{i+1}-x_i-A^{(1)}(x_i;idt)dt\right]\tag{5.1}
$$

立刻得到$X$的概率分布：

$$
\begin{aligned}\mathrm{Prob}(x_{i+1})&=\left|\frac{\partial[d\mathcal{B}_{idt}]}{\partial[x_{i+1}]}\right|\mathrm{Prob}(d\mathcal{B}_{idt})\\&=\frac{1}{\sqrt{2\pi A^{(2)}(x_i;idt)dt}}\exp\left[-\frac{\left[\frac{x_{i+1}-x_i}{dt}-A^{(1)}(x_i;idt)\right]^2}{2A^{(2)}(x_i;idt)}dt\right]\end{aligned}
$$

显而易见，这就是前面的跃迁概率$P(x\_{i+1};(i+1)dt\|x\_i;idt)$。从这个意义上看，我们引入的Wiener过程其实就是Markov过程的一个变体。这个坐标变换确定了两个随机过程$X$和$\mathcal{B}$之间的关系，前面的(5.1)可以改写为：

$$
\begin{aligned}
\frac{x_{i+1}-x_i}{dt}&=A^{(1)}(x_i;idt)+\sqrt{A^{(2)}(x_i;idt)}\frac{d\mathcal{B}_{idt}}{dt}\\
\frac{x(t+dt)-x(t)}{dt}&=A^{(1)}(x(t);t)+\sqrt{A^{(2)}(x(t);t)}\frac{d\mathcal{B}_t}{dt}
\end{aligned}
$$

这很像一个微分方程，注意我说很像是因为右边的Wiener过程其实是不可微的[^8]。其实这就是前面我们所提到过的“离散化的问题”，比如这里从FP方程得到的变量替换告诉我们：

$$
\lim_{dt\to0}\sqrt{A^{(2)}(x_i;idt)}\frac{d\mathcal{B}_{idt}}{dt}=\lim_{dt\to0}\sqrt{A^{(2)}(x_{i+1};idt)}\frac{d\mathcal{B}_{idt}}{dt}=\sqrt{A^{(2)}(x(t);idt)}\cdot\xi(t)
$$

这里后面的$\xi$是一个随机变量，最终我们得到的微分方程就是下面的形式：

$$
\boxed{\dot{x}(t)=A^{(1)}(x(t);t)+\sqrt{A^{(2)}(x(t);t)}\cdot\xi(t)}\tag{5.2}
$$

和一般的微分方程不一样的是后面有个随机项，对每一个随机过程的具体实现，在知道初始分布的情况下，我们能解这个方程得到随机变量$x(t)$的一个实现。从而我们其实解得的是一个随机过程$X(t)$，而这个随机过程的概率演化就由其对应的FP方程给出。从整个意义上看，FP方程是在关心粒子集群轨道的演化的统计规律，而对应的随机微分方程侧重于描述单个轨道演化。倘若去掉后面的随机项，那么这个微分方程就退化到一般的情况，这个时候体系是决定论的，也就是给定初始值，我们完全知道轨迹如何演化，而前面的方程就算你知道了初始条件，因为有随机项，所以不同的模拟会给出完全概率随机的噪声实现，从而看起来我们就无法精确得知粒子后面怎么演化。在决定论的情况下我们仍然可以有对应的FP方程（下一节会讨论一个例子），如果我们初始的$x$就是一个确定的条件，也就是说$P(x;0)\propto \delta(x-x\_0)$，那么得到的解就是$P(x;t)\propto \delta(x-x(t))$。$x(t)$就根据不带随机项的一般的微分方程给出。当然，我们也可以让初始条件依旧是一个概率分布，那么FP方程的解就也是一个概率分布。相比于带噪声的情况，后者即便你的初始概率分布是delta函数，最后演化得到的随机变量概率分布也不是决定论的delta函数，会因为随机项而开始概率演化。

现在让我们回到对方程(5.2)的讨论。这个方程我们称之为**Ito形Langevin方程**，后面的随机项是从$\mathcal{B}$得来的，所以应该也是一个高斯分布，而且还是一个平均值为0的高斯分布。这相当于告诉我们一点关联函数是0，重点是关注两点关联函数，或者说概率分布方差是多少？我们首先需要一个Wiener过程的重要推论：

$$
\begin{aligned}\langle\mathcal{B}_a\mathcal{B}_b\rangle&\overset{a\leq b}{=}\langle\mathcal{B}_a\left(\mathcal{B}_a+(\mathcal{B}_b-\mathcal{B}_a)\right)\rangle\\&=\langle(\mathcal{B}_a-\mathcal{B}_0)^2\rangle+\langle(\mathcal{B}_a-\mathcal{B}_0)\left(\mathcal{B}_b-\mathcal{B}_a\right)\rangle\\
&=\langle(\mathcal{B}_a-\mathcal{B}_0)^2\rangle+\langle\mathcal{B}_a-\mathcal{B}_0\rangle\langle\mathcal{B}_b-\mathcal{B}_a\rangle\\
&=a
\end{aligned}
$$

第二个等号利用了$\mathcal{B}\_0=0$，第三个等号我们利用了独立性，最后一个等号利用了$\mathcal{B}\_a-B\_0$高斯性。从而我们有：

$$
\langle\mathcal{B}_a\mathcal{B}_b\rangle=\mathrm{min}(a,b)
$$

注意到$d\mathcal{B}\_t:=\mathcal{B}\_{t+dt}-\mathcal{B}\_t$，不难用上面的引理得到：

$$
\left.\left\langle\frac{d\mathcal{B}_t}{dt}\frac{d\mathcal{B}_{t^{\prime}}}{dt}\right\rangle=\frac{\langle d\mathcal{B}_td\mathcal{B}_{t^{\prime}}\rangle}{dt^2}=\left\{\begin{array}{ll}0&(t\geq t^{\prime}+dt,t\leq t^{\prime}-dt),\\\frac{dt-(t-t^{\prime})}{dt^2}&(t^{\prime}\leq t\leq t^{\prime}+dt),\\\frac{dt-(t^{\prime}-t)}{dt^2}&(t^{\prime}-dt\leq t\leq t^{\prime}),\end{array}\right.\right.\tag{5.3}
$$

从而有：

$$
\langle\xi(t)\xi(t^{\prime})\rangle=\lim_{dt\to0}\left\langle\frac{d\mathcal{B}_t}{dt}\frac{d\mathcal{B}_{t^{\prime}}}{dt}\right\rangle=\delta(t-t^{\prime})
$$

这种不同时间点完全不相关的性质叫“白”，前面又说了随机项满足高斯分布，所以合起来叫**白高斯噪声**。

再回过头来继续讨论(5.2)subtle的地方。前面Ito型朗之万方程成立的关键在于我们对布朗运动建模得到的FP方程所对应的自然离散化处理所定义的Wiener过程的微分为（「$\cdot$」称作**Ito积分**[^9]）：

$$
\lim_{dt\to0}f(x_i)\frac{d\mathcal{B}_{idt}}{dt}:=f(x(t))\cdot\xi(t)
$$

但是在实际应用中有时候还会碰到比如下面的中点离散化（「$\circ$」称作**Stratonovich积分**[^9]）：

$$
\lim_{dt\to0}\frac{f(x_i)+f(x_{i+1})}{2}\frac{d\mathcal{B}_{idt}}{dt}:=f(x(t))\circ\xi(t).
$$

甚至是更一般的：

$$
\lim_{dt\to0}\frac{\alpha f(x_i)+(1-\alpha)f(x_{i+1})}{2}\frac{d\mathcal{B}_{idt}}{dt}:=f(x(t))\circ_\alpha\xi(t).
$$

让我们来算一下中点离散化在$dt\to 0$的行为，注意到$A^{(1)}\sim A^{(2)}\sim\mathcal{O}(dt^0)$。而(5.3)告诉我们$d\mathcal{B}\_{t}\sim\mathcal{O}(dt^{1/2})$。在计算中过渡到微分方程时我们需要除去$dt$并且取$dt\to 0$，所以分子上任何的$\mathcal{O}(dt^{3/2})$的项都需要扔掉，也就是下面的**Ito规则**：

$$
dt^2=0,\quad dtd\mathcal{B}_t=0,\quad(d\mathcal{B}_t)^2=dt
$$

进行如下的计算：

$$
\begin{aligned}
f(x(t)) \circ \xi(t)
&= \lim_{dt \to 0} \frac{f(x_i) + f(x_{i+1})}{2} \frac{d\mathcal{B}_{idt}}{dt} \\
&= \lim_{dt \to 0} \frac{f(x_i) + f\bigl(x_i + (x_{i+1} - x_i)\bigr)}{2} \frac{d\mathcal{B}_{idt}}{dt} \\
&= \lim_{dt \to 0} f(x_i)\frac{d\mathcal{B}_{idt}}{dt}
+ \lim_{dt \to 0} \frac{1}{2}\, \partial_x f(x_i)\frac{x_{i+1}-x_i}{dt}dt \cdot \frac{d\mathcal{B}_{idt}}{dt} \\
&= f(x(t)) \cdot \xi(t)
+ \frac{1}{2} \lim_{dt \to 0} A^{(1)}(x_i; i, dt)\partial_x f(x_i)d\mathcal{B}_{idt} \\
&\quad + \frac{1}{2} \lim_{dt \to 0} \sqrt{A^{(2)}(x_i; i, dt)}\partial_x f(x_i)\frac{(d\mathcal{B}_{idt})^2}{dt} \\
&= f(x(t)) \cdot \xi(t)
+ \frac{1}{2}\sqrt{A^{(2)}(x(t); t)}\, \partial_x f(x(t))
\end{aligned}
$$

最后一步用了Ito规则。这告诉我们这两种对随机项的解释是完全不同的！除非$\partial\_{x(t)}\sqrt{A^{(2)}(x(t);t)}=0$！那么我们就得到了Langevin方程的两种不等价的形式：[^31]

$$
\dot{x}(t)=A^{(1)}(x(t);t)+\sqrt{A^{(2)}(x(t);t)}\cdot\xi(t)
$$

$$
\dot{x}(t)=A^{(1)}(x(t);t)+\sqrt{A^{(2)}(x(t);t)}\circ\xi(t)
$$

前者是后面我们描述Brown运动的**Ito解释**，后者被称为**Stratonovich解释**。对于具体问题用哪一种解释，需要依赖于理论的建模，是case by case的问题。

## Lecture 6
> 这一节的目的就是用上一章得到的朗之万方程对布朗运动进行建模，得到布朗运动所对应的随机微分方程，而且我们会说明前面FP方程的建模其实只是布朗运动的overdamped情况，我们会从朗之万方程出发扩展到所谓underdamped情况，并且讨论其对应的FP方程的形式。最后我们会讨论关于underdamped情况下比较subtle的平衡态的概念定义。

选取布朗运动里面对应的$A$，也就是说

$$
A^{(1)}(x(t);t)=-\mu\partial_xU_X(x(t)),\quad A^{(2)}(x(t);t)=2\mu\beta^{-1}
$$

前面有说过了，布朗运动对应的FP方程自然出来的就是Ito解释，所以我们套在Ito随机偏方程上面得到下面的朗之万方程：

$$
\begin{aligned}\dot{x}(t)&=-\mu\partial_xU_X(x(t))+\sqrt{2\mu\beta^{-1}}\cdot\xi(t),\\\langle\xi(t)\rangle&=0,\\\langle\xi(t)\xi(t^{\prime})\rangle&=\delta(t-t^{\prime}),\end{aligned}
$$

这个方程描述的物理是什么？首先后面有一个随机项，这当然就是我们在普通物理里面就知道的布朗运动是由于周围水分子的随机碰撞造成的，让我们取平均把这项抛弃掉，注意到这并非牛顿运动方程，因为这是一个一阶方程，其实这意味着：

$$
\mu^{-1}\dot{x}(t)=-\partial_xU_X(x(t))
$$

右边是宏观的力，比如我们考虑布朗粒子被一个风吹着走，但是左边也是力，学过流体力学的马上看出这其实就是液体粘性带来的阻力，正比于速度的，所以上面的方程就是在说粒子其实平均上看处于二力平衡状态，所以我们的牛顿运动方程才退化成了一个一阶方程。而随机项描述了在这个平衡附近的涨落，这样得到的朗之万方程我们叫**过阻尼朗之万方程**（overdamped）。

显然一个非常明显的从物理角度上出发的推广就是考虑现在非平衡，或者说我们把外力给撤掉，现在没有力可以和阻力抗衡了，那么我们就需要用二阶的牛顿运动方程以及其附近的涨落来描述：

$$
\begin{aligned}m\mu\dot{v}(t)&=-v(t)+\sqrt{2\mu\beta^{-1}}\cdot\xi(t)\\
v&=\dot{x},\\
\langle\xi(t)\rangle&=0,\\\langle\xi(t)\xi(t^{\prime})\rangle&=\delta(t-t^{\prime}),\end{aligned}
$$

注意现在$v$是随机变量，而$x$则完全由$v$确定。所以我们在讨论随机方程本身的时候不需要考虑$x$，显然这依旧具有前面过阻尼朗之万方程的形式，所以其依旧可以用一维随机变量的FP方程来描述，只是我们需要取不同的$A$：

$$
\begin{aligned}\partial_{t}P_{V}(v;t)&=\partial_v\left[\frac{v}{m\mu}P_V(v;t)\right]+\partial_v^2\left[\frac{1}{m^2\mu\beta}P_V(v;t)\right]\\&=-\partial_v[j_V(v;t)],\\j_{V}(v;t)&=-\frac{v}{m\mu}P_V(v;t)-\frac{1}{m^2\mu\beta}\partial_vP_V(v;t),\end{aligned}
$$

这个建模的合理性可以从平衡态对应的$j\_V(v;t)=0$的解看出：

$$
P_V^{\mathrm{eq}}(v)=\frac{\exp\left(-\beta\frac{mv^2}{2}\right)}{\int dv\exp\left(-\beta\frac{mv^2}{2}\right)}
$$

这个就叫做**欠阻尼朗之万方程**（underdamped）。但是真正有意思的推广是有宏观外力的情况，也就是：

$$
\begin{aligned}m\mu\dot{v}(t)&=-v(t)-\mu\partial_xU_X(x(t))+\sqrt{2\mu\beta^{-1}}\cdot\xi(t)\\\dot{x}(t)&=v(t)\\\langle\xi(t)\rangle&=0,\\\langle\xi(t)\xi(t^{\prime})\rangle&=\delta(t-t^{\prime}),\end{aligned}
$$

注意现在$v,x$得看作是单独两个随机变量，前面我们随机微分方程是在一半的相空间里面描述的。但是由于现在$v$和$x$的方程耦合在一起，所以我们必须借助全部的相空间来写，也就是说我们现在必须要考虑二维随机变量，对应地我们必须尝试去考虑$P\_{X,V}(x,v;t)$来写对应的FP方程，上面的朗之万方程显然不可能对应单变量下的FP方程。

前面(4.1)给出了多维随机变量的FP方程以及对应的布朗运动矩阵，我们写成下面的形式：

$$
\begin{aligned}\partial_tP_{\boldsymbol{Y}}(\boldsymbol{y};t)&=-\mathbf{\nabla}\cdot[\boldsymbol{\nu}_{\boldsymbol{Y}}(\boldsymbol{y};t)P_{\boldsymbol{Y}}(\boldsymbol{y};t)],\\\boldsymbol{\nu}_{\boldsymbol{Y}}(\boldsymbol{y};t)&=\mu\boldsymbol{F}_{\boldsymbol{Y}}(\boldsymbol{y})-\mathbf{D}\cdot\mathbf{\nabla}\ln P_{\boldsymbol{Y}}(\boldsymbol{y};t)\end{aligned}
$$

其对应的朗之万方程实际上是下面形式：

$$
\begin{aligned}\dot{\boldsymbol{y}}(t)&=\mu\boldsymbol{F}_{\boldsymbol{Y}}+\mathbf{D}\cdot \overleftarrow{\displaystyle{\nabla}}+\mathbf{B}\cdot\mathbf{\xi}(t),\quad \mathbf{B}\mathbf{B}^{\mathrm{T}}=2\mathbf{D},\\\langle\xi_i(t)\rangle&=0,\\\langle\xi_i(t)\xi_j(t')\rangle&=\delta_{ij}\delta(t-t'),\end{aligned}
$$

前面(4.2)就对应这个矩阵$D$取$\mu\beta^{-1}$单位阵的情形。注意前面我们写下多变量的FP方程是为了描述多维布朗运动，现在我们本节还是在考虑一维布朗运动，只是我们发现在underdamped的情况下朗之万方程如果想写出其对应的FP方程，也就是概率演化方程，必须要用二维的随机变量来描述。也就是说前面我们写下的FP方程变量全部是坐标的情况，也就是完全不考虑动量的情况是限制在overdamped的语境下。不难发现我们只要取：

$$
\boldsymbol{y}=\begin{pmatrix} v  \\ x \end{pmatrix} ,\quad
\boldsymbol{F_Y}=\begin{pmatrix} -\frac{v}{\mu m}-\frac{\partial_x U}{m} \\ \frac{v}{\mu} \end{pmatrix} ,\quad
\boldsymbol{D}=\begin{pmatrix} \frac{1}{\mu m^2\beta} & 0  \\ 0 & 0 \end{pmatrix} 
$$

上面的朗之万方程就回到了underdamped朗之万方程的形式，对应的FP方程也自然就是二维FP方程的一种特殊形式了（或者说建模参数的选取）。显式写出来为：

$$
\begin{aligned}\partial_{t}P_{X,V}(x,v;t)=&\partial_v\left[\left[\frac{v}{m\mu}+\frac{\partial_xU_X(x)}{m}\right]P_{X,V}(x,v;t)\right]\\&+\partial_v^2\left[\frac{1}{m^2\mu\beta}P_{X,V}(x,v;t)\right]-\partial_x\left[vP_{X,V}(x,v;t)\right]\end{aligned}
$$

这个方程我们称之为Kramers方程，其描述欠阻尼布朗运动的概率演化，无非就是一个特殊的FP方程。

为了说明这个方程建模的有效性，同样的我们来分析他的平衡状态，但是这个时候又个很棘手的问题：

$$
\begin{aligned}
j_X(x,v;t)=0\iff &0=vP_{X,V}^\mathrm{eq}(x,v)\\
j_V(x,v;t)=0\iff &0=\left[\frac{v}{m\mu}+\frac{\partial_xU_X(x)}{m}\right]P_{X,V}^\mathrm{eq}(x,v)-\frac{1}{m^2\mu\beta}\partial_vP_{X,V}^\mathrm{eq}(x,v)\\
\iff&\ln P_{X,V}^\mathrm{st}(x,v)=C(x)+m\mu\beta v\partial_xU_X(x)
\end{aligned}
$$

显然两个条件互斥，概率流不可能恒为0！这意味着我们对平衡态的定义在这里完全失效了。单单就这个例子而言，我们可以修改平衡态的定义为定常分布的定义：

$$
0=-\partial_v\left[j_V(x,v;t)\right]-\partial_x[j_X(x,v;t)]
$$

因为平衡态需要的分布：

$$
P_{X,V}^{\mathrm{eq}}(x,v)=\frac{\exp\left(-\beta\left[\frac{mv^2}{2}+U_X(x)\right]\right)}{\int dv\int dx\exp\left(-\beta\left[\frac{mv^2}{2}+U_X(x)\right]\right)}
$$

正好满足这个条件。对于一般的体系，其实也要进行修正，问题其实在于平衡态对应的精细结构方程在含有时间反演奇宇称的物理量的时候应该修改为：

$$
W(x^\prime,v^\prime|x,v)P_{X,V}^\mathrm{eq}(x,v)=W(x,-v|x^\prime,-v^\prime)P_{X,V}^\mathrm{eq}(x^\prime,-v^\prime)\tag{6.1}
$$

而前面我们的概率流恒为0的条件是针对左右两边$v$没有符号差别定义的概率流来说的。那为什么要这么定义？物理上很好理解，你粒子从$x$出去，速度是$v$，那平衡的时候显然你也希望是有逆着出去的粒子归来的粒子，平衡出去的粒子的贡献，而这个逆流而动就是时间反演，自然就需要归来的粒子的速度是反过来的。

## Lecture 7
> 感觉Ito-san收到流感😷的影响不但没有拖慢进度，反而一节课讲的东西还变多了。这节课主要就是导入了随机熵的定义，并且和传统的热力学第二定律比较说明了一个惊人的事实：系统那边的熵变可以纯粹来自于概率统计的信息学意义上的熵，而热库的熵变则来自于物理量，比如能级间距，温度之类的。而热力学第二定律要求这两个不同来源的东东满足一个不等式。

下面正式进入随机热力学的介绍，前面我们重点谈论了主方程以及其对应的随机过程理论，可以认为是在微观上讨论概率分布的动力学问题，现在我们转而使用热力学的观点，或者说我们希望去研究熵之类的宏观的量，为前面的讨论建立一套宏观的有效理论，首先让我们回顾前面介绍的主方程：

$$
\begin{aligned}\partial_tp_X(x;t)&=\sum_{\nu=1}^M\sum_{x^{\prime}=1}^NJ^{(\nu)}(x|x^{\prime};t)\\&=\sum_{\nu=1}^M\sum_{x^\prime=1}^N[J^{+(\nu)}(x|x^\prime;t)-J^{-(\nu)}(x|x^\prime;t)],\\J^{(\nu)}(x|x^{\prime};t)&=W^{(\nu)}(x|x^{\prime};t)p_X(x^{\prime};t)-W^{(\nu)}(x^{\prime}|x;t)p_X(x;t),\\J^{+(\nu)}(x|x^{\prime};t)&=W^{(\nu)}(x|x^{\prime};t)p_X(x^{\prime};t),\\J^{-(\nu)}(x|x^{\prime};t)&=W^{(\nu)}(x^{\prime}|x;t)p_X(x;t),\end{aligned}
$$

这里我们相比于第一节的讨论写下了多个热库的版本，每个热库贡献一个$W^{(\nu)}$，彼此之间又线性叠加：

$$
\sum_{\nu=1}^MW^{(\nu)}(x|x^{\prime};t)=W(x|x^{\prime};t),
$$

另外要注意的是，上面的讨论我们为了简单，没有加入时间反演变号的比如速度这种量，也就是说我们考虑的系统只以位置这种量作为随机变量，或者说状态本身依赖于速度只是平方依赖关系。不过后面的讨论都很一般，如果你要加入速度相关的这种随机变量，按照前面讨论Kramer方程提过的细致平衡条件的修正$(6.1)$，注意到细致平衡条件等价于流守恒$J^+=J^-$，所以我们只需要用下面的方程重新定义流：

$$
\begin{aligned}
J^{+\mathrm{st}}(x^{\prime}|x)&=W(x^{\prime},v^{\prime}|x,v)P_{X,V}^{\mathrm{eq}}(x,v)\\
J^{-\mathrm{st}}(x^{\prime}|x)&=W(x,-v|x^{\prime},-v^{\prime})P_{X,V}^{\mathrm{eq}}(x^{\prime},-v^{\prime})
\end{aligned}
$$

然后一样可以写下对应的主方程。而且我们从概率的归一性和正性能得到一个对$W$的限制：

$$
W^{(v)}(x|x'\neq 0;t)\geq 0,\quad W^{(v)}(x|x;t)\leq 0
$$

我们这里从物理上加一个新的约束：

$$
W^{(v)}(x|x';t)\neq 0\iff W^{(v)}(x'|x;t)\neq 0\tag{7.1}
$$

这个很自然，如果体系能从某个能级跳到另一个能级，他一定也能跳回来，注意我们没有说这两个跃迁对称，我们只是施加了一个同时非零的弱约束。这个约束让我们可以用图论以及邻接矩阵的思想来简化一些等式的描述，我们把$x$这些状态的集合定义为顶点集合$\mathcal{V}$，而且我们对这些顶点进行编号[^11]，构成一个偏序集，定义边为：

$$
\mathcal{E}=\{(x,x^{\prime},\nu)|x>x^{\prime},W^{(\nu)}(x|x^{\prime};t)\neq0\}
$$

也就是对$x'<x$这两个态，如果$W^{(\nu)}(x\|x^{\prime};t)\neq0$我们就用一根线$\nu$连接两个态，有几个热库的跃迁矩阵不为0，这两个态之间就有几条线连接，而且我们考虑的是有向图，也就是说这些线从$x'$指向$x$，例如下面的图：

![邻接矩阵](\img\posts\nonequilibrium\邻接矩阵.webp)

然后我们定义邻接矩阵：

$$
\mathsf{B}_{x\rho}=\delta_{xy}-\delta_{xy^{\prime}},\quad \rho=(y,y',\nu)\in\mathcal{E}
$$

比如上面对应的图的邻接矩阵就是：

$$
B=\begin{pmatrix} -1 & -1 & -1 \\ 1 & 1 & 1 \end{pmatrix} 
$$

临界矩阵的第一个行指标对应的是状态$\\{1,2\\}$，而第二个列指标对应的是边，注意对于有向图，边包含其标号，在这里就是热库的标号以及起点和终点状态。比如第一行第一列就是$B\_{x=1,(x=2,x'=1,\nu=1)}$。所以写下对应图的邻接矩阵就是把边作为列，顶点作为行，然后对于每一列，起点写$+1$，终点写$-1$，其他地方写$0$就好了。那么我们可以把$\rho$整个作为三个指标$(x,x'>x;\nu)$的记号，那么比如流就可以表达为：

$$
J(x|x';\nu):=J_\rho
$$

当然这个$\rho$也可以$\notin\mathcal{E}$，也就是说不要求$x'>x$，不过注意到：

$$
J_{\rho^\dagger}:=-J_\rho,\quad\mathsf{B}_{x\rho}=-\mathsf{B}_{x\rho^\dagger},\quad \rho^\dagger:=(x',x;t)
$$

我们就可以利用$\mathcal{E}$把主方程写为：

$$
\partial_tp_X(x;t)=\sum_{\rho\in\mathcal{E}}\mathsf{B}_{x\rho}J_\rho(t)=\sum_{\rho\in\mathcal{E}}\mathsf{B}_{x\rho}[J_\rho^+(t)-J_\rho^-(t)]
$$

我们可以定义下面的热力学力：

$$
F_\rho(t)=\ln\frac{J_\rho^+(t)}{J_\rho^-(t)}=\ln\frac{W^{(\nu)}(x|x';t)p(x';t)}{W^{(\nu)}(x'|x;t)p(x;t)}
$$

注意到，这个定义well-define正是因为前面我们给出的物理上的约束(7.1)。我们继续定义熵产生率的概念：

$$
\sigma(t):=\sum_{\rho\in\mathcal{E}}\sigma_{\rho}:=\sum_{\rho\in\mathcal{E}}J_\rho(t)F_\rho(t)
$$

注意到根据热力学力的定义有：

$$
\operatorname{sgn}F_\rho=\operatorname{sgn}J_\rho
$$

所以我们得到不等式：

$$
\sigma_\rho\geq 0,\quad \sigma\geq 0
$$

而且当且仅当体系处于平衡态也就是满足细致平衡条件$J\_\rho=0$的时候取等号。我们下面来看一下后面这个不等式和物理上的热力学第二定律之间的联系[^13]，为此首先我们来仔细看一下热力学力和熵之间的关系。根据前面局域细致平衡关系[^12](1.3)，我们知道$x\to x'$跃迁带来的热库熵变可以表示为：

$$
\ln\frac{W^{(\nu)}(x|x^{\prime};t)}{W^{(\nu)}(x^{\prime}|x;t)}=\Delta s^{\mathrm{bath}(\nu)}(x|x^{\prime};t)
$$

至于系统的熵，我们使用随机香农熵来描述：

$$
s^\mathrm{sys}(x;t)=-\ln p_X(x;t),\quad\Delta s^\mathrm{sys}(x|x^{\prime};t)=s^\mathrm{sys}(x;t)-s^\mathrm{sys}(x^{\prime};t)
$$

从而我们知道热力学的力其实就是告诉你两个微观态之间的跃迁带来的总的熵变：

$$
F_\rho(t)=\Delta s_\rho^\mathrm{sys}(t)+\Delta s_\rho^\mathrm{bath}(t)
$$

由此可以看出熵产生率定义的合理性，热力学力对应的是两个状态跃迁带来的熵变，而概率流给出某一个跃迁发生的概率，所以求和后就得到宏观的熵变，而我们这里写的等式都是在考虑$t\sim t+dt$时间内的变化，所以我们可以积分后考虑在有限时间内的熵变：

$$
\Sigma(\tau)=\int_{t=0}^{t=\tau}\sigma(t)dt\geq0
$$

接下来考虑$x',t\to x,t+dt$的跃迁，主方程可以写为下面的形式：

$$
\begin{aligned}p_X(x;t+dt)&\begin{aligned}=\sum_{x^{\prime}=1}^N\left(\delta_{xx^{\prime}}+\sum_{\nu=1}^MW^{(\nu)}(x|x^{\prime};t)dt\right)p_X(x^{\prime};t)\end{aligned}\\&=\sum_{x^{\prime}=1}^N\sum_{\nu=1}^M\left(\delta_{\nu1}\delta_{xx^{\prime}}+W^{(\nu)}(x|x^{\prime};t)dt\right)p_X(x^{\prime};t)\end{aligned}
$$

注意到：

$$
p_X(x;t+dt)=\sum_{x^{\prime}=1}^N\sum_{\nu=1}^Mp(x;t+dt,x^{\prime};t,\nu)
$$

根据上面的方程立刻得知：

$$
p(x;t+dt,x^{\prime};t,\nu)=J^{+(\nu)}(x|x^{\prime};t)dt,\quad x\neq x'
$$

由此可知：

$$
\begin{aligned}\sigma(t)&=\sum_{x,x^{\prime},\nu|x>x^{\prime}}[J^{+(\nu)}(x|x^{\prime};t)-J^{-(\nu)}(x|x^{\prime};t)]F^{(\nu)}(x|x^{\prime};t)\\&=\sum_{x,x^{\prime},\nu|x\neq x^{\prime}}J^{+(\nu)}(x|x^{\prime};t)F^{(\nu)}(x|x^{\prime};t)\\
&=\sum_{x,x^{\prime},\nu|x\neq x^{\prime}}p(x;t+dt,x^{\prime};t,\nu)F^{(\nu)}(x|x^{\prime};t):=\langle F(t)\rangle\\&=\sum_{x,x^{\prime},\nu}p(x;t+dt,x^{\prime};t,\nu)F^{(\nu)}(x|x^{\prime};t)\\&=\sum_{x,x^{\prime},\nu}p(x;t+dt,x^{\prime};t,\nu)[\Delta s^{\mathrm{bath}(\nu)}(x|x^{\prime};t)+\Delta s^{\mathrm{sys}}(x|x^{\prime};t)]\\
&:=\langle\Delta s^{\mathrm{bath}}(t)\rangle+\langle\Delta s^{\mathrm{sys}}(t)\rangle
\end{aligned}
$$

由此我们便知道$\sigma\geq 0$就是在说：

$$
\langle\Delta s^{\mathrm{bath}}(t)\rangle+\langle\Delta s^{\mathrm{sys}}(t)\rangle\geq0
$$

这便和我们幼儿园就知道的热力学第二定律吻合了。注意上面的熵变都是理解为$t\to t+dt$时间内微观态跃迁得到的微观小量，对应的宏观有限时间内熵变为：

$$
\begin{aligned}\Sigma(\tau)&=\int_{t=0}^{t=\tau}dt\frac{\langle F(t)\rangle}{dt}\\&=\int_{t=0}^{t=\tau}dt\frac{\langle\Delta s^\mathrm{bath}(t)\rangle}{dt}+\int_{t=0}^{t=\tau}dt\frac{\langle\Delta s^\mathrm{sys}(t)\rangle}{dt}\\&\geq0\end{aligned}
$$

考虑于热库接触的热机，假设热机循环吸收热量$\delta Q\_\nu$，那么热库放出热量$\delta Q\_\nu$，或者说吸收热量$-\delta Q\_\nu$。热库不做工，只负责给予热量，所以根据热力学第一定律，其总的熵变就是$-\oint\sum\_\nu[\delta Q\_\nu/T\_\nu]$，所以第一项其实对应这么个东东。

而第二项对应热机熵变，由于热机循环之后恢复原态，所以第二项其实在一个循环之后是0，也就是说系统的熵是不依赖于路径的状态量[^14]。所以这个不等式其实就是在告诉我们当你考虑一个与热库接触的热机的时候，有：

$$
\Delta S^{\mathrm{sys}}\geq \int_0^t\sum_\nu \frac{\delta Q_\nu}{T_\nu}
$$

当且仅当处于平衡态，或者说准静态过程，每一步都是平衡态的时候，取等号，这就是克劳修斯定理。回到系统的熵变，既然我们说了这是个状态量，那么我们就应当可以写出对应的“势能”，前面我们定义的系统的熵是纯粹信息学意义上用随机香农熵定义的，从名字就能看出他应当和下面的香农熵有联系：

$$
H(X;t)=-\sum_{x=1}^Np_X(x;t)\ln p_X(x;t)
$$

注意到下面的计算：

$$
\begin{aligned}&\sum_{x=1}^Np_X(x;t+dt)\ln p_X(x;t+dt)\\&=\sum_{x=1}^Np_X(x;t+dt)\ln p_X(x;t)+\sum_{x=1}^Np_X(x;t)dt\frac{\partial_tp_X(x;t)}{p_X(x;t)}+O(dt^2)\\&=\sum_{x=1}^Np_X(x;t+dt)\ln p_X(x;t)+dt\partial_t\left[\sum_{x=1}^Np_X(x;t)\right]+O(dt^2)\\&=\sum_{x=1}^Np_X(x;t+dt)\ln p_X(x;t)+O(dt^2),\end{aligned}
$$

由此我们得到：

$$
\begin{aligned}\langle\Delta s^{\mathrm{sys}}(t)\rangle&=\sum_{x,x^{\prime},\nu}p(x;t+dt,x^{\prime};t,\nu)[\ln p_X(x^{\prime};t)-\ln p_X(x;t)]\\&=\sum_{x^{\prime}=1}^Np_X(x^{\prime};t)\ln p_X(x^{\prime};t)-\sum_{x=1}^Np_X(x;t+dt)\ln p_X(x;t)\\
&=\sum_{x=1}^Np_X(x;t)\ln p_X(x;t)-\sum_{x=1}^Np_X(x;t+dt)\ln p_X(x;t+dt)\\&=H(X;t+dt)-H(X;t)\\&=\frac{dH(X;t)}{dt}dt
\end{aligned}
$$

这告诉我们$\braket{\Delta S^{\mathrm{sys}}}$其实就是香农熵的变化！前面用$\Sigma$给出的热力学第二定律可以重新写为：

$$
H(X;\tau)-H(X;0)\geq-\int_{t=0}^{t=\tau}\langle\Delta s^{\mathrm{bath}}(t)\rangle
$$

从这个式子可以清楚的看到，这其实告诉我们“信息是物理的”这个观点，因为左边完全是信息学意义上的量，而右边热库的熵是完全用热量等等这种物理的量求出来的。

## Lecture 8
> 这节课接着上一课，进一步讨论了熵的生成率，皆由此概念详细对单热库体系推导了热力学定律在信息学角度上的解读。

上一讲讨论完了热力学第二定律，现在来重新用上面的那一套理论讨论热力学第一定律。这里的讨论是一般的，不过为了推导简单，我们只考虑单一热库情况，注意到下面的讨论我们会加上满足局部细致平衡条件这个物理条件：

$$
\ln\frac{W^{(1)}(x|x^{\prime};t)}{W^{(1)}(x^{\prime}|x;t)}=-\beta(U_X(x;t)-U_X(x^{\prime};t))
$$

考虑内能，不过这里由于我们是微观上考虑的，所以就应该理解成势能$U\_X$，对时间的微分：

$$
\begin{aligned}
\frac{d\langle U_X(t)\rangle}{dt}=&\frac{d}{dt}\left(\sum_{x=1}^NU_X(x;t)p_X(x;t)\right)\\
=&\sum_{x=1}^N(\partial_tU_X(x;t))p_X(x;t)+\sum_{x=1}^NU_X(x;t)\partial_tp_X(x;t)
\end{aligned}
$$

第一项实际上就是$\left\langle \partial\_t U\_X\right\rangle$，所以我们可以理解为纯粹是外部的力影响的事情，所以我们吧这玩意儿当成外部做功：

$$
\sum_{x=1}^N(\partial_tU_X(x;t))p_X(x;t)=\frac{\delta\mathcal{W}}{\delta t}(t)
$$

重点是第二项是什么，我们暂且记为：

$$
\begin{aligned}\frac{\delta\mathcal{Q}}{\delta t}(t)&=\frac{d\langle U_X(t)\rangle}{dt}-\frac{\delta\mathcal{W}}{\delta t}(t)\\&=\sum_{x=1}^NU_X(x;t)\partial_tp_X(x;t)\end{aligned}
$$

注意到下面的推导：

$$
\begin{aligned}&\frac{dH(X;t)}{dt}-\beta\frac{\delta\mathcal{Q}}{\delta t}(t)\\&=-\sum_{x=1}^N\ln p_X(x;t)\partial_tp_X(x;t)-\sum_{x=1}^N\beta U_X(x;t)\partial_tp_X(x;t)\\&=-\sum_{x=1}^N[\ln p_X(x;t)+\beta U_X(x;t)]\sum_{x^{\prime}=1}^NJ^{(1)}(x|x^{\prime};t)\\&=-\frac{1}{2}\sum_{x=1}^N\sum_{x^{\prime}=1}^N[\ln p_X(x;t)+\beta U_X(x;t)]J^{(1)}(x|x^{\prime};t)\\&-\frac{1}{2}\sum_{x=1}^N\sum_{x^{\prime}=1}^N[\ln p_X(x^{\prime};t)+\beta U_X(x^{\prime};t)]J^{(1)}(x^{\prime}|x;t)\\&=\frac{1}{2}\sum_{x=1}^N\sum_{x^{\prime}=1}^N\left[\ln\frac{p_X(x;t)}{p_X(x^{\prime};t)}-\beta(U_X(x^{\prime};t)-U_X(x;t))\right]J^{(1)}(x^{\prime}|x;t)\\&=\frac{1}{2}\sum_{x=1}^N\sum_{x^{\prime}=1}^N\ln\frac{W^{(1)}(x^{\prime}|x;t)p_X(x;t)}{W^{(1)}(x|x^{\prime};t)p_X(x^{\prime};t)}J^{(1)}(x^{\prime}|x;t)\\&=\sum_{x,x^{\prime}|x>x^{\prime}}F^{(1)}(x^{\prime}|x;t)J^{(1)}(x^{\prime}|x;t)\\&=\sigma(t)\end{aligned}
$$

所以我们有：

$$
\sigma(t):=\frac {d}{dt}\left(\braket{\Delta s^{\text{sys}}}+\braket{\Delta s^{\text{bath}}}\right)=\frac{dH(X;t)}{dt}-\beta\frac{\delta\mathcal{Q}}{\delta t}(t)
$$

这其实就是在说:

$$
\frac{\langle\Delta s_\mathrm{bath}\rangle}{dt}=-\beta\frac{\delta\mathcal{Q}}{\delta t}(t),
$$

根据热力学的知识，或者说克劳修斯熵的定义，所以这个$Q$确实就是系统的吸热，所以我们给出了热力学第一定律在随机热力学体系下的重新表述：

$$
\frac{d\langle U_X(t)\rangle}{dt}=\frac{\delta\mathcal{Q}}{\delta t}(t)+\frac{\delta\mathcal{W}}{\delta t}(t),
$$

现在进一步假设细致平衡得以满足，也就是体系处于吉布斯态，满足正则分布。回顾亥姆霍兹自由能定义：

$$
\mathrm{F}_X(t)=-\beta^{-1}\ln\left[\sum_{x=1}^N\exp(-\beta U_X(x;t))\right]
$$

从而正则分布可以写为：

$$
p^\mathrm{eq}(x;t)=\exp[-\beta(U_X(x;t)-\mathrm{F}_X(t))]
$$

也就是：

$$
\begin{aligned}
TS^{\mathrm{sys}}\sim&\left.H(x;t)\right|_{p=p^{\text{eq}}}:=-\beta^{-1}\sum_{x=1}^Np^{\mathrm{eq}}(x;t)\ln p^{\mathrm{eq}}(x;t)=\sum_{x=1}^Np^\mathrm{eq}(x;t)(U_X(x;t)-\mathrm{F}_X(t))\\
\sim& U^\mathrm{th}-F^\mathrm{th}
\end{aligned}
$$

读者牢记，我们一直想做的是对平衡态热力学的一些结果试图推广到非平衡热力学，想必读者阅读到这里心中必定种种困惑”为什么这个地方要这么定义“。有这种困惑是自然的，因为我们并非试图从第一性原理去说明，而是希望通过一些类似平衡态的结构给出一些看似合理的定义，并且如上文一样不断在平衡态下检验是否退化到我们熟知的热力学关系。如果是，那么我们就可以在接受这些定义的前提下进行推导，试图给出非平衡物理学的一些热力学意义上的结果，然后再通过实验检验验证我们这里的建模一整套是否合理。

继续考虑下面的推导：[^15]

$$
\begin{aligned}\frac{\delta\mathcal{Q}}{\delta t}(t)&=-\sum_{x=1}^N[\beta^{-1}\ln p^{\mathrm{eq}}(x;t)+\mathrm{F}_X(t)]\partial_tp_X(x;t)\\&=-\sum_{x=1}^N[\beta^{-1}\ln p^{\mathrm{eq}}(x;t)]\partial_tp_X(x;t)-\mathrm{F}_X(t)\partial_t\left[\sum_{x=1}^Np_X(x;t)\right]\\&=-\sum_{x=1}^N[\beta^{-1}\ln p^{\mathrm{eq}}(x;t)]\partial_tp_X(x;t),\end{aligned}
$$

然后再根据$H$的定义，熵生成率可以写为：

$$
\begin{aligned}\sigma(t)&=\frac{dH(X;t)}{dt}-\beta\frac{\delta\mathcal{Q}}{\delta t}(t)\\&=-\sum_{x=1}^N\ln\frac{p_X(x;t)}{p_X^\mathrm{eq}(x;t)}\partial_tp_X(x;t)\end{aligned}
$$

注意上面的推导我们只是借由平衡态正则分布去重写一遍公式，并不是说这些公式只对平衡态适用，他们的适用范围依旧是满足局部细致平衡的任意态。现在注意到Lecture 4里面我们最后提到的KL散度，我们发现这个熵生成率其实完全是信息上的东西：

$$
\sigma(t)=-\left.\partial_t D_{KL}\left(P(t))||P^{eq}(s)\right)\right|_{s=t}
$$

数学上告诉我们这个KL散度随着时间单调递减，但是始终是正的，而且仅在两个分布完全相同的时候是0，前面我们说过这个性质和热力学第二定律以及时间箭头趋向平衡有关，现在世界线收束，我们知道之前的这个论断的依据了。

本讲最后来看一下overdamped的FP方程的熵产生率的计算。假设状态是连续取值的，用$\boldsymbol{y}\in\mathbb{R}^d$表示，摘抄一遍overdamped的朗之万方程的FP方程：

$$
\begin{aligned}\partial_tP_{\boldsymbol{Y}}(\boldsymbol{y};t)&=-\nabla\cdot(\boldsymbol{\nu}_{\boldsymbol{Y}}(\boldsymbol{y};t)P_{\boldsymbol{Y}}(\boldsymbol{y};t)),\\\boldsymbol{\nu}_{\boldsymbol{Y}}(\boldsymbol{y};t)&=-\mu\nabla[U_{\boldsymbol{Y}}(\boldsymbol{y};t)+\beta^{-1}\ln P_{\boldsymbol{Y}}(\boldsymbol{y};t)]\end{aligned}
$$

overdamped这里的y就是位置，即位形空间，也就是一半的相空间，如果是underdamped，y是全部的相空间。总之我们现在就是考虑可以用上面的FP方程建模的体系，和前面其实差不多，唯一的区别是之前相当于是在用主方程描述，因为我们到现在都是在考虑Markov的体系，而Markov体系在连续时间变量的时候Chapman-Kolmogorov方程就会变成主方程，而对连续变量建模的时候近似得到的FP方程更好用，因为我们不需要知道微观的那些跃迁矩阵，只需要有限个参数就可以近似作为主方程描述，所以现在我们相当于在用FP方程讨论连续变量的主方程描述的体系。总之就是从离散到连续的转变。

仿照前面的讨论，我们直接给出下面的定义：

$$
\begin{gathered}
\langle U_{\boldsymbol{Y}}(t)\rangle=\int d\boldsymbol{y}U_{\boldsymbol{Y}}(\boldsymbol{y};t)P_{\boldsymbol{Y}}(\boldsymbol{y};t)\\
\frac{\delta\mathcal{W}}{\delta t}(t)=\int d\boldsymbol{y}(\partial_tU_\boldsymbol{Y}(\boldsymbol{y};t))P_\boldsymbol{Y}(\boldsymbol{y};t)\\
\frac{\delta\mathcal{Q}}{\delta t}(t)=\int d\boldsymbol{y}U_\boldsymbol{Y}(\boldsymbol{y};t)(\partial_tP_\boldsymbol{Y}(\boldsymbol{y};t))\\
\mathcal{H}(\boldsymbol{Y};t)=-\int d\boldsymbol{y}P_\boldsymbol{Y}(\boldsymbol{y};t)\ln P_\boldsymbol{Y}(\boldsymbol{y};t)\\
\sigma(t)=\frac{d\mathcal{H}(\boldsymbol{Y};t)}{dt}-\beta\frac{\delta\mathcal{Q}}{\delta t}
\end{gathered}
$$

热力学第一定律是直接的：

$$
\partial_t\langle U_\boldsymbol{Y}(t)\rangle=\frac{\delta\mathcal{W}}{\delta t}(t)+\frac{\delta\mathcal{Q}}{\delta t}(t)
$$

热力学第二定律根据下面的计算可知：

$$
\begin{aligned}\sigma(t)&=-\int d\boldsymbol{y}\ln P_{\boldsymbol{Y}}(\boldsymbol{y};t)\partial_tP_{\boldsymbol{Y}}(\boldsymbol{y};t)-\int d\boldsymbol{y}\partial_tP_{\boldsymbol{Y}}(\boldsymbol{y};t)-\beta\frac{\delta\mathcal{Q}}{\delta t}\\&=-\beta\int d\boldsymbol{y}[U_\boldsymbol{Y}(\boldsymbol{y};t)+\beta^{-1}\ln P_\boldsymbol{Y}(\boldsymbol{y};t)]\partial_tP_\boldsymbol{Y}(\boldsymbol{y};t)\\&=\beta\int d\boldsymbol{y}[U_{\boldsymbol{Y}}(\boldsymbol{y};t)+\beta^{-1}\ln P_{\boldsymbol{Y}}(\boldsymbol{y};t)]\nabla\cdot(\boldsymbol{\nu}_{\boldsymbol{Y}}(\boldsymbol{y};t)P_{\boldsymbol{Y}}(\boldsymbol{y};t))\\&=\beta\int d\boldsymbol{y}[-\nabla[U_\boldsymbol{Y}(\boldsymbol{y};t)+\beta^{-1}\ln P_\boldsymbol{Y}(\boldsymbol{y};t)]]\cdot(\boldsymbol{\nu}_\boldsymbol{Y}(\boldsymbol{y};t)P_\boldsymbol{Y}(\boldsymbol{y};t))\\&=\frac\beta\mu\int d\boldsymbol{y}\|\boldsymbol{\nu_Y}(\boldsymbol{y};t)\|^2P_\boldsymbol{Y}(\boldsymbol{y};t)\geq 0\end{aligned}
$$

$\boldsymbol{\nu}\_{\boldsymbol{Y}}(\boldsymbol{y};t)=\boldsymbol{0}$对任意$\boldsymbol{y}$成立的时候上式取等号，显然这对应平衡分布，所以平衡的时候熵产生率是0。至此，我们已经弄清楚了单一热源下外力为保守力的时候如何定义熵产生率并且给出热力学第一第二定律，现在我们试图推广到多热源并且非保守力，也就是说FP方程是下面的更一般的情况：[^17]

$$
\begin{aligned}
\partial_tP_{\boldsymbol{Y}}(\boldsymbol{y};t)&=-\nabla\cdot\boldsymbol{j}_{\boldsymbol{Y}}(\boldsymbol{y};t)=-\nabla\cdot\left(\sum_{i}{(\boldsymbol{\nu}_{\boldsymbol{Y}}(\boldsymbol{y};t))}_iP_{\boldsymbol{Y}}(\boldsymbol{y};t)\right)\\(\boldsymbol{\nu}_{\boldsymbol{Y}}(\boldsymbol{y};t))_i&=-\mu(\boldsymbol{F}_{\boldsymbol{Y}}(\boldsymbol{y};t))_i-\mu\beta_i^{-1}\nabla\ln P_{\boldsymbol{Y}}(\boldsymbol{y};t)
\end{aligned}
$$

不难看出熵生成率的定义可以扩充为：

$$
\begin{gathered}\sigma(t)=\sum_{i=1}^d\int d\boldsymbol{y}\left(\frac{\beta_i}\mu(\boldsymbol{\nu}_\boldsymbol{Y}(\boldsymbol{y};t))_i\right)(\boldsymbol{j}_\boldsymbol{Y}(\boldsymbol{y};t))_i\\=\sum_{i=1}^d\frac{\beta_i}\mu\int d\boldsymbol{y}\left((\boldsymbol{\nu}_\boldsymbol{Y}(\boldsymbol{y};t))_i\right)^2P_\boldsymbol{Y}(\boldsymbol{y};t)\end{gathered}
$$

同样的，连续变量情形下熵生成率也可以用KL散度来写，考虑单一热源保守力情况，注意到如下推导即可：

$$
\begin{aligned}
&-\partial_tD_\mathrm{KL}(P_X(t)||P_X^\mathrm{eq})\\&\begin{aligned}&=-\int dx(\partial_tP_X(x;t))\ln\frac{P_X(x;t)}{P_X^{\mathrm{eq}}(x)}-\int dx\partial_tP_X(x;t)\end{aligned}\\&=\int dx[\partial_x(\nu_X(x;t)P_X(x;t))]\left[\ln P_X(x;t)+\beta U_X(x)+\ln\int dx^{\prime}\exp[-\beta U_X(x^{\prime})]\right]\\&=-\int dx(\nu_X(x;t)P_X(x;t))\partial_x\left[\ln P_X(x;t)+\beta U_X(x)\right]\\&=\frac{\beta}{\mu}\int dx[\nu_X(x;t)]^2P_X(x;t)\\&=\sigma(t)
\end{aligned}
$$

这里我们利用了正则分布以及连续变量的KL散度定义：

$$
\begin{gathered}
P_X^\mathrm{eq}(x)=\frac{\exp[-\beta U_X(x)]}{\int dx^{\prime}\exp[-\beta U_X(x^{\prime})]}\\
D_{\mathrm{KL}}(p_X(t)||p_X^{\mathrm{eq}})=\int dxP_X(x;t)\left[\ln\frac{P_X(x;t)}{P_X^{\mathrm{eq}}(x)}-P_X(x;t)+P_X^{\mathrm{eq}}(x)\right]
\end{gathered}
$$

由于我们使用了上面两个条件，那么自然会觉得是不是只有满足局部细致平衡条件的时候，才能使用细致平衡时的平衡态用KL散度把熵产生率写成如此漂亮的形式呢？实则不然，各位可以看下面的推导：

$$
\begin{aligned}&-\partial_tD_{\mathrm{KL}}(p_X(t)||p_X^{\mathrm{eq}})\\&=-\sum_x(\partial_tp_X(x;t))\ln\frac{p_X(x;t)}{p_X^{\mathrm{eq}}(x)}+\sum_x\partial_tp_X(x;t)\\&=-\sum_{x,x^{\prime},\nu}[W^{(\nu)}(x|x^{\prime})p_X(x^{\prime};t)-W^{(\nu)}(x^{\prime}|x)p_X(x;t)]\ln\frac{p_X(x;t)}{p_X^{\mathrm{eq}}(x)}\\&=\sum_{x,x^{\prime},\nu|x>x^{\prime}}[W^{(\nu)}(x|x^{\prime})p_X(x^{\prime};t)-W^{(\nu)}(x^{\prime}|x)p_X(x;t)]\left[\ln\frac{p_X(x^{\prime};t)}{p_X^{\mathrm{eq}}(x^{\prime})}-\ln\frac{p_X(x;t)}{p_X^{\mathrm{eq}}(x)}\right]\\&=\sum_{x,x^{\prime},\nu|x>x^{\prime}}[W^{(\nu)}(x|x^{\prime})p_X(x^{\prime};t)-W^{(\nu)}(x^{\prime}|x)p_X(x;t)]\ln\frac{W^{(\nu)}(x|x^{\prime})p_X(x^{\prime};t)}{W^{(\nu)}(x^{\prime}|x)p_X(x;t)}\\&=\sigma(t).\end{aligned}
$$

回忆前面的讨论，我们首先是直接定义了一个熵产生率，他也有正性类似热力学第二定律的东东。但是重点其实是我们在讨论热力学第一定律那里，我们发现**只有在满足局部细致平衡的时候这里定义的熵生成率才能和传统热力学里面的熵生成率等同起来**，而这一节前面我们在定义熵生成率的时候是已经用了局部细致平衡条件的。[^25]

## Lecture 9
> 这节课继续扩充图论上的想法，得到了类似Kirchhoff定律的东西。这部分理论的构建似乎是Ito自己的研究兴趣之一。不过讲义上基本上没画什么图来解释，这里我按照课堂上的讲法，补充一些图片，能更清晰的理解一些定理和定义。

本节的目的是讨论**定常状态**，特别是如何用图论以及对应的基尔霍夫定律的角度来进行类比说明。另外本节我们会使用主方程来讨论，也就是说我们考虑的是离散Markov过程，利用之前在Lec. 7引入的记号，主方程可以写成矩阵形式：

$$
\partial_t\boldsymbol{p}_X(t)=\mathsf{B}\boldsymbol{J}(t)
$$

定常意味着$\mathsf{B}\boldsymbol{J}=0$，也就给流施加了一个很强的限制，要求其必须在$\ker B$里面，可见要描述定常体系，关键是找邻接矩阵的kernal，而这玩意儿和图论有很大的关系，对此我们直接使用一个具体例子来说明，考虑下面的图(a)描述的系统：

![电路类比](\img\posts\nonequilibrium\电路类比.webp)

注意这个图里面每两个态最多一个箭头连接，所以我们假设考虑的体系就和一个热库连接，也就是说$\nu\in\\{1\\}$，不过后面的讨论是对任意图都成立的。其邻接矩阵为：[^22]

$$
B=
\begin{pmatrix} 
-1 & 0 & -1 & -1& -1 \\ 1 & -1 & 0 & 0 & 0 \\ 0 & 1 & -1 & 0 & 1\\ 0 & 0 & 1 & 1 & 0 
\end{pmatrix} 
$$

回忆这个矩阵的行指标标记图的节点，列指标标记图的边。不难发现有下面的两个本征态张成$\ker B$：

$$
\mathcal{S}(\mathcal{C}_1)^\mathrm{T}=\begin{pmatrix}1&1&0&0&-1\end{pmatrix},
\quad
\mathcal{S}(\mathcal{C}_2)^\mathrm{T}=\begin{pmatrix}0&0&0&-1&1\end{pmatrix}
$$

不难看出这对应上面图(B)的两个循环，只需要我们规定对于一个循环，沿着循环箭头同向去正，反向取负，如果边压根不在循环里面则为0，也即下面的约定：

$$
\mathcal{S}_\rho(\mathcal{C})=\left\{\begin{array}{ll}1&(\rho\in\mathcal{C})\\-1&(\rho^\dagger\in\mathcal{C})\\0&(\mathrm{otherwise})\end{array}\right.
$$

受这个具体例子的启发，我们可以证明图的任何一个循环按照上面的方式定义的向量都在$\ker B$里面：

$$
\begin{aligned}\sum_{\rho\in\mathcal{E}}\mathsf{B}_{x\rho}\mathcal{S}_\rho(\mathcal{C})&=\sum_{\rho\in\mathcal{E},\rho\in\mathcal{C}}(\delta_{x\iota(\rho)}-\delta_{x\iota^{\prime}(\rho)})\mathcal{S}_\rho(\mathcal{C})+\sum_{\rho\in\mathcal{E},\rho^{\dagger}\in\mathcal{C}}(\delta_{x\iota(\rho)}-\delta_{x\iota^{\prime}(\rho)})\mathcal{S}_\rho(\mathcal{C})\\&=\sum_{\rho\in\mathcal{E},\rho\in\mathcal{C}}(\delta_{x\iota(\rho)}-\delta_{x\iota^{\prime}(\rho)})\mathcal{S}_\rho(\mathcal{C})+\sum_{\rho^{\dagger}\in\mathcal{E},\rho\in\mathcal{C}}(\delta_{x\iota(\rho^{\dagger})}-\delta_{x\iota^{\prime}(\rho^{\dagger})})\mathcal{S}_{\rho^{\dagger}}(\mathcal{C})\\&=\sum_{\rho\in\mathcal{E},\rho\in\mathcal{C}}(\delta_{x\iota(\rho)}-\delta_{x\iota^{\prime}(\rho)})\mathcal{S}_\rho(\mathcal{C})+\sum_{\rho^{\dagger}\in\mathcal{E},\rho\in\mathcal{C}}(\delta_{x\iota^{\prime}(\rho)}-\delta_{x\iota(\rho)})(-\mathcal{S}_\rho(\mathcal{C}))\\&=\sum_{\rho\in\mathcal{C}}\left[\delta_{x\iota(\rho)}-\delta_{x\iota^{\prime}(\rho)}\right]\mathcal{S}_\rho(\mathcal{C})\\&=\sum_{i=1}^n\begin{bmatrix}\delta_{x\iota(\rho_i)}-\delta_{x\iota^{\prime}(\rho_i)}\end{bmatrix}\\&=\sum_{i=1}^n\left[\delta_{x\iota^{\prime}(\rho_i+1)}-\delta_{x\iota^{\prime}(\rho_i)}\right]\\&=0\end{aligned}
$$

但是反过来，显然循环的选取不是唯一的，而且循环之间还有线性关系，比如我们把前面的$\mathcal{S}(\mathcal{C}\_1)$和$\mathcal{S}(\mathcal{C}\_2)$加起来就能得到上图中(c)给出的循环对应的向量。所以我们期望的是在图中能选取一组独立的循环，这种选取不是唯一的，但是我们希望他能完全张成$\ker B$。幸运的是图论上这一点肯定是能做到的，简单的比如上面的图我们能从直觉上找到这一组独立的循环，对于更一般的图也有算法来帮我们找这样的循环。这里的参考文献是[这篇review](https://doi.org/10.1103/RevModPhys.48.571)[^19]。不妨我们把这个网络想成一张电路图，每个边上面有电流$J\_\rho$，正方向已经在图中标出。那么稳态就是说整个电路图的每个边上的电流一定可以分解为这些fundamental cycle的电流的和，也就是说:

$$
\boldsymbol{J}^\mathrm{st}=\sum_{\mu=1}^{n_\mathrm{C}}\mathcal{J}_\mu^\mathrm{st}\mathcal{S}(\mathcal{C}_\mu)
$$

这个说法其实是等价于每个节点的电流加起来是0，也就是熟知的基尔霍夫电流定律[^20]。平衡态就是进一步要求每个$\mathbf{J}$都精确为0，也就是每条边上的电流精确为0，对应的循环上的分量也就是0了。再来看定常状态下的力：

$$
F_\rho^\mathrm{st}=\ln\frac{J_\rho^\mathrm{+st}}{J_\rho^\mathrm{-st}}=\ln\frac{W^{(\nu)}(x|x')p^{\mathrm{st}}(x')}{W^{(\nu)}(x'|x)p^{\mathrm{st}}(x)}
$$

相应的，我们把$F\_\rho$看成是沿着箭头方向走，电压的变化[^21]，同样的我们可以定义回路电压：

$$
\mathcal{F}_\mu^\mathrm{st}=\sum_{\rho\in\mathcal{E}}\mathcal{S}_\rho(\mathcal{C}_\mu)F_\rho^\mathrm{st}
$$

比如对于上面的图构成的体系，回路电压矩阵就是：

$$
\begin{aligned}
\mathcal{F}^\mathrm{st}&=(\mathcal{F}_1^\mathrm{st},\cdots,\mathcal{F}_{n_\mathrm{C}}^\mathrm{st})^\mathrm{T}:=\mathcal{S}^\mathrm{T}\boldsymbol{F}^\mathrm{st}\\
&=\begin{pmatrix}F^\mathrm{st}_{\rho_1}+F^\mathrm{st}_{\rho_2}-F^\mathrm{st}_{\rho_5}\\F^\mathrm{st}_{\rho_3}-F^\mathrm{st}_{\rho_4}+F^\mathrm{st}_{\rho_5}\end{pmatrix}
\end{aligned}
$$

这里$\mathcal{S}\_{\rho\mu}:=\mathcal{S}\_\rho(\mathcal{C}\_\mu)$。然后你或许会觉得左边应该是0，也就是基尔霍夫电压定律告诉我们的回路电压降是0。但是显然我们用稳态条件只能得到回路电流为0，而回路电压是任意的。这其实告诉我们上面式子的右边，也就是整个回路的电压加起来，实际上算的是用电器带来的电压升高或者下降，别忘了回路中可能有电动势，或者说有电源，而基尔霍夫电压定律是要把电源的贡献也考虑进来才是0，而电源的贡献正可以类比为等式左边的回路电压！平衡态要求的是每条边上的电流是0，这可以推出每条边上的电压也是0，而每条边上的电流是0自动就意味着回路电流是0，反过来也成立。而每条边上的电压为0虽然也能得到回路电压为0，但是反过来并不是显然的。为了证明这一点，我们需要用动力学系统是Markov的，用迁移矩阵写下回路电流，比如：

$$
\begin{aligned}
\mathcal{F}^{\mathrm{st}}(\mathcal{C}_1)&=F^\mathrm{st}_{\rho_1}+F^\mathrm{st}_{\rho_2}-F^\mathrm{st}_{\rho_5}\\
&=\ln\frac{W^{(1)}(1|2)p^{\mathrm{st}}(2)}{W^{(1)}(2|1)p^{\mathrm{st}}(1)}+\ln\frac{W^{(1)}(2|3)p^{\mathrm{st}}(3)}{W^{(1)}(3|2)p^{\mathrm{st}}(2)}-\ln\frac{W^{(1)}(1|3)p^{\mathrm{st}}(3)}{W^{(1)}(3|1)p^{\mathrm{st}}(1)}\\
&=\ln\frac{W^{(1)}(1|2)\,W^{(1)}(2|3)\,W^{(1)}(3|1)}
{W^{(1)}(2|1)\,W^{(1)}(3|2)\,W^{(1)}(1|3)}
\end{aligned}
$$

观察这个式子，最后结果无非是顺着cycle走一圈得到$1\to 2\to 3\to 1$，然后除去反着来一圈$1\to 3\to 2\to 1$最后取对数。回路电压始终是0就意味着对于任意的循环都有正着来一圈等于反着来一圈得到的跃迁矩阵元的乘积。在数学上这对应Markov链可逆，物理上说就是满足细致平衡条件，体系处于平衡态。所以我们就说明了平衡态给的每条边上电压为0其实也等价于每个回路电压都是0，也就是没有电源。所以**平衡态就是回路电压回路电流都为0的体系，而且两个条件可以互推**。

前面的一系列讨论告诉我们对于稳态，我们可以把每条边上的流以及力的信息，简化为每个循环上的信息，这一来就相当于用稳态减少了自由度，而且熵生成率也可以用循环上的信息来表述：

$$
\sigma^\mathrm{st}=\sum_{\rho\in\mathcal{E}}J_\rho^\mathrm{st}F_\rho^\mathrm{st}={\boldsymbol{J}^\mathrm{st}}^\mathrm{T}\boldsymbol{F}^\mathrm{st}=\mathcal{J}^{\mathrm{st}^{\mathrm{T}}}\mathcal{S}^{\mathrm{T}}\boldsymbol{F}^{\mathrm{st}}=\sum_{\mu=1}^{n_\mathrm{C}}\mathcal{J}_\mu^\mathrm{st}\mathcal{F}_\mu^\mathrm{st},
$$

然后你再把回路电压回路电流的类比带进去，你会发现其实熵生成率就是相当于在算功率。电路肯定是一直在耗功率的，除非平衡态情况回路电压回路电流为0所以总功率为0，其他时候功率或者说熵产生率都是正的，这正好对应热力学第二定律！
## Lecture 10
> 这节课的目的是讲非平衡里面的Onsager倒易关系，不过我听课的时候完完全全觉得是trivial的一件事情。看了讲义之后才明白原来是想依赖于热力学第二定律对平衡态附近的响应作出限制。从这个意义上这件事情不是trivial的，虽然从数学推导上看非常trivial。但是Ito的讲义其实具体的应用实例比较少，所以单单看这些理论推导我还不能明白具体这个概念上很简单的玩意儿能给出多少non-trivial的结果。

根据上节课的类比我们已经清楚一直到现在我们接触的非平衡热力学两个非常重要的量，流和力完全可以类比为电流和电压。平衡的时候就是完全没有电流和电压，也就是说$\mathcal{F}^{\mathrm{eq}}=0\iff\mathcal{J}^{\mathrm{eq}}=0$。那从电路的视角来看我们都知道施加一些电压，电路图就会根据电阻之类的给一个电流的响应，反过来亦然。我们本节的目标其实就是研究热力学流和力之间的**近平衡定常状态**下的线性响应关系，也就是说我们只考虑一次响应，在平衡态的时候我们有：

$$
\begin{aligned}J_{\rho}^{+\mathrm{eq}}&:=W^{\mathrm{eq}(\nu)}(x|x^{\prime})p_X^{\mathrm{eq}}(x^{\prime})\\&=W^{\mathrm{eq}(\nu)}(x^{\prime}|x)p_X^{\mathrm{eq}}(x):=J_\rho^{-\mathrm{eq}}\end{aligned}
$$

现在我们就是要考虑平衡态附近的扰动：

$$
W^{(\nu)}(x|x^{\prime})=W^{\mathrm{eq}(\nu)}(x|x^{\prime})+O(\epsilon),\quad p_X^{\mathrm{st}}(x)=p_X^{\mathrm{eq}}+O(\epsilon)
$$

在这样的设定下的理论就叫做**线性不可逆热力学**。显然对应的流的扰动也是线性的：

$$
\begin{aligned}J_{\rho}^{\mathrm{st}}&=O(\epsilon),\\J_\rho^{+\mathrm{st}}&=J_\rho^{+\mathrm{eq}}+O(\epsilon),\\J_\rho^{-\mathrm{st}}&=J_\rho^{-\mathrm{eq}}+O(\epsilon),\end{aligned}
$$

力的扰动计算稍微复杂一些，代入定义即可得到：

$$
\begin{aligned}
F_\rho^\mathrm{st}&=\ln\frac{J_\rho^\mathrm{+st}}{J_\rho^\mathrm{-st}}=\ln\left(1+\frac{J_\rho^\mathrm{st}}{J_\rho^\mathrm{-st}}\right)\\
&=\frac{J_\rho^\mathrm{st}}{J_\rho^\mathrm{-st}}+\mathcal{O}(\epsilon^2)=\frac{J_\rho^\mathrm{st}}{J_\rho^\mathrm{-eq}}+\mathcal{O}(\epsilon^2)
\end{aligned}
$$

注意第一项分母是$0(1)$的，我们定义为：

$$
\alpha_\rho=\frac{1}{J_\rho^{-\mathrm{eq}}}=\frac{1}{J_\rho^{+\mathrm{eq}}}
$$

分子是$O(\epsilon)$的，所以我们得到在近平衡附近定常状态下流和力之间有线性响应关系：

$$
F_\rho^{\mathrm{st}}=\alpha_\rho J_\rho^{\mathrm{st}}+\mathcal{O}(\epsilon^2)
$$

而且和一般的线性响应理论一样，就线性关系而言，所有的系数都是只依赖于平衡态的。我们可以利用上一讲得到的fundamental cycle给出的$\mathcal{S}$矩阵把上面的边-基底下得到的关系转换为回路-基底下的关系，也就是：

$$
\begin{aligned}
&\boldsymbol{F^\mathrm{st}}=\mathsf{A}\boldsymbol{J^\mathrm{st}}\Rightarrow\mathcal{F}^\mathrm{st}=\mathcal{S}^\mathrm{T}\boldsymbol{F}^\mathrm{st}=\mathcal{S}^{\mathrm{T}}\mathsf{A}\boldsymbol{J}^{\mathrm{st}}=\mathcal{S}^\mathrm{T}\mathrm{A}\mathcal{S}\mathcal{J}^\mathrm{st}\\
\Rightarrow&\mathcal{F}^\mathrm{st}=\mathsf{L}\mathcal{J}^\mathrm{st},\quad\mathsf{L}=\mathcal{S}^\mathrm{T}\mathsf{A}\mathcal{S}
\end{aligned}
$$

这里我们定义了对角矩阵$\mathsf{A}\_{\rho\rho^{\prime}}=\alpha\_\rho\delta\_{\rho\rho^{\prime}}$。上一节我们说明了[^24]$\mathcal{F}^{\mathrm{eq}}=0\iff\mathcal{J}^{\mathrm{eq}}=0$，这意味着$\mathsf{L}$是非奇异的，所以我们可以定义其逆矩阵$\mathsf{M}$，也就是所谓Onsager系数矩阵把上面的流-力响应写成下面的力-流响应：

$$
\mathcal{J}^\mathrm{st}=\mathsf{М}\mathcal{F}^\mathrm{st}
$$

一直到这里的推导确实都比较trivial且boring，不过我们还没有用力和流的性质来约束Onsager系数矩阵，其实就是利用$\mathsf{A}$是对角矩阵而且根据Onsager矩阵的定义我们可以清楚知道其是对称矩阵：

$$
\mathsf{M}^{\mathrm{T}}=\mathsf{M}\iff \mathsf{L}^{\mathrm{T}}=\mathsf{L}
$$

再根据这个矩阵本质上是在描述线性响应，随意我们有：

$$
\begin{gathered}
\mathsf{M}_{\mu\nu}=\left.\frac{\delta\mathcal{J}_\mu^{\mathrm{st}}}{\delta\mathcal{F}_\nu^{\mathrm{st}}}\right|_{p^{\mathrm{st}}=p^{\mathrm{eq}}}=\left.\frac{\delta\mathcal{J}_\nu^{\mathrm{st}}}{\delta\mathcal{F}_\mu^{\mathrm{st}}}\right|_{p^{\mathrm{st}}=p^{\mathrm{eq}}}=\mathsf{M}_{\nu\mu}\\
\mathsf{L}_{\mu\nu}=\left.\frac{\delta\mathcal{F}_\mu^{\mathrm{st}}}{\delta\mathcal{J}_\nu^{\mathrm{st}}}\right|_{p^{\mathrm{st}}=p^{\mathrm{eq}}}=\left.\frac{\delta\mathcal{F}_\nu^{\mathrm{st}}}{\delta\mathcal{J}_\mu^{\mathrm{st}}}\right|_{p^{\mathrm{st}}=p^{\mathrm{eq}}}=\mathsf{L}_{\nu\mu}
\end{gathered}
$$

这玩意儿就被称作**Onsager倒易关系**。Well，可以承认这个结果并非显而易见的，但是从推导上看又是无比的trivial的，由于ito并没有讲多少例子，所以课堂上我确实觉得是trivial的。或许我们应当不去从数学的角度理解这个式子，而是去理解这个式子背后的物理蕴含，Ito举了一个例子。也还是去讲电流的类比，我们知道Seeback效应和Peltier效应本质上都是热流和电流相互驱动的线性响应理论。Seeback是说两端的温差会导致电动势的产生，线性近似下就是$\Delta V=S\Delta T$，可以看作是热流在驱动电流。Peltier效应就是反过来，他是说考虑两种材料，分别有Peltier系数$\Pi$，那么如果俩材料不同这个系数一般不同，把他们接在一起，那么电流通过时接口便会吸放热，吸放热功率取决于两种材料之间的系数差别$\dot{Q}=\Delta\Pi I$￼。显然这两个线性从描述上看就很接近全面说的『倒易』的想法，事实也确实是，材料的两种线性响应系数之间存在关系：

$$
\Pi=S T
$$

所以你从物理上去看似乎这个关系不是trivial的，当然我说了，我觉得还是要在具体的物理情景建模下去理解这个关系式，因为在具体的物理情景下热力学力和流都会赋予真正清晰的物理量含义。

再来看下熵生成率，可以用前面的系数矩阵写成二次型的形式：

$$
\sigma^{\mathrm{st}}=\mathcal{F}^{\mathrm{stT}}\mathcal{J}^{\mathrm{st}}=\mathcal{F}^{\mathrm{stT}}\mathsf{M}\mathcal{F}^{\mathrm{st}}=\mathcal{J}^{\mathrm{stT}}\mathsf{L}\mathcal{J}^{\mathrm{st}}\geq 0
$$

而且当且仅当平衡态$\mathcal{F}^{\mathrm{eq}}=0\iff\mathcal{J}^{\mathrm{eq}}=0$的时候等号成立。也就是说热力学第二定律给系数矩阵一个很强的限制，告诉我们他是正定矩阵。而正定矩阵意味着顺序主子式都要大于0，比如说有两个基本回路的系统，对于Onsager系数矩阵的矩阵元其实有下面的要求：

$$
\left.
\begin{aligned}
\begin{vmatrix}
M_{11} & M_{12}\\
M_{21} & M_{22}
\end{vmatrix}
= M_{11}M_{22}-M_{12}M_{21} &\ge 0,\\
M_{11} &\ge 0
\end{aligned}
\right\}\Rightarrow M_{22}\geq 0
$$

前面的是正定性给的约束，后面是利用Onsager关系给出对称的约束从而$M\_{12}=M\_{21}$从而推得的约束。

这节课最后给下节课要详细展开的动力学稳定性开了个头讲了个定义。想法就是因为主方程到头来其实还是常微分方程系统，而常微分方程组成的系统在数学上也就是动力系统[^23]，然后我们就可以把稳态看作是动力系统的平衡点分析其稳定性。这些内容我直接并到下一讲里面写了。
## Lecture 11
> 本以为这节课终于要进入信息热力学的部分了，也是我很想听的地方，毕竟前面绕来绕去其实都是在根据Markov过程做事情，我想看看从信息论的角度能做多少事情。结果这节课开始讲讲义的最后一部分，也就是讨论主方程作为动力系统的稳定性问题了。那么看来本学期应该是要留下不少信息热力学的窟窿讲不了了。

想法在前面已经说了，就是把主方程（或者连续变量情况下的FP方程）看作是动力系统进行研究。稳态刚好对应的就是时间导数为0的点，对应平衡系统里面的不动点。在我们现在的语境下考虑两种不动点，首先我们只考虑稳定的不动点，也就是说在施加微扰的条件下，最终都会回到不动点，而且我们考虑的是渐进稳态，也就是说这个最终指的是$t\to \infty$极限下与不动点之间的距离$\epsilon\to 0$。[^26]如果不关你的初始微扰多大，最后都会回到不动点，那么我们就叫这个不动点是全局渐进稳态，如果初始微扰得足够小，那就叫局域渐进的稳态。

平衡态是特殊的稳态，那自然就是一种特殊的不动点，特殊在哪？首先对于不动点是否是全局渐进稳态我们有如下的Lyapunov判据，如果存在一个函数$\mathcal{L}(\boldsymbol{y}\|\|\boldsymbol{y}^\*)$满足：
- $\mathcal{L}(\boldsymbol{y}\|\|\boldsymbol{y}^\*)\geq0$
- $\partial\_t\mathcal{L}(\boldsymbol{y}\|\|\boldsymbol{y}^\*)\leq0$
而且当且仅当$y=y^\*$，也就是处于不动点时，上面两个等号才成立。这样的函数叫Lyapunov函数，如果你能找到这样的函数，那说明这是一个全局渐进稳定不动点。显然KL散度就是这样的例子！而第二个性质就是热力学第二定律！[^27]所以世界线闭合，前面很早我们就从KL散度说过热力学第二定律可以看作是非平衡态像平衡态弛豫的描述，现在我们终于从动力系统稳定性上说明了这一点。

但是显然细心的读者很快就会发现，上面是选取Lyapunov函数为$\mathcal{L}(\boldsymbol{p}\|\|\boldsymbol{p}^\mathrm{eq})=D\_\mathrm{KL}(p\_X(t)\|\|p\_X^\mathrm{eq})$，对于一般的稳态我不一样可以选$\mathcal{L}(\boldsymbol{p}\|\|\boldsymbol{p}^\mathrm{st})=D\_\mathrm{KL}(p\_X(t)\|\|p\_X^\mathrm{st})$么？一样满足上面的性质啊。这是因为稳态不是唯一的，可能从一个稳态出发最后稳定到了另一个稳态。这同样适用于对破平衡态的讨论，我们前面对平衡态是全局渐进稳态的说明依赖于平衡态只有一个的假定。所以我们应当给前面的讨论加上平衡态由动力系统唯一给定这个限制条件。[^28]

接下来我们来讨论实际对动力系统的求解，我们考虑作为微分方程的FP方程。首先解析解肯定不要想了，但是即便是数值解，FP方程的求解也是非常之困难的，但是我们有一个系统性的方法把FP方程化简为等价的微分方程组。想法就是如果你想描述一个分布，其实我不需要知道分布函数，或者说分布函数是可以转化成一堆参数来描述的，比如Gauss分布，你写一个高斯分布就等价于在说考虑一个除了平均值和方差可以不为0，其他高阶矩都是0的分布。为了把这个讨论系统化，我们考虑分布函数对应的谱函数，也就是其傅立叶变换：

$$
\Phi_X(k)=\int dxP_X(x)\exp(ikx)
$$

解析延拓到虚轴变成拉普拉斯变换：

$$
\Phi_X(-is)=1+\sum_{n=1}^\infty\frac{m_n}{n!}(s)^n
$$

这里我们用到了矩的生成函数：

$$
\langle e^{sx}\rangle_{P_X}=1+\sum_{n=1}^\infty\frac{m_n}{n!}s^n
$$

所以看起来我们只需要知道所有的矩，那么我们就知道了解析延拓后的谱函数，然后再逆变换一下就得到了分布函数。物理学家的讨论到此为止，物理学家剩下要做的事情就是把分布函数的信息，也就是FP微分方程，转化为关于矩的微分方程，然后用矩去代替分布函数进行讨论。另一个比较常用的是方差的高阶推广：

$$
c_n=\left.(\partial_s)^n\ln\langle e^{sx}\rangle_{P_X}\right|_{s=0}
$$

但是数学家对这里的讨论显然是完全不满意的，即便是我作为学物理的也不可能相信矩的信息就能完全回到分布的信息。道理很简单，上面的函数我们直接写的形式幂级数，但很多情况下不收敛，或者说函数性质没那么好，这个时候显然你肯定不会期望矩的信息能回到分布，甚至可能的分布之间差别还很大。当然矩本身也是一个很重要的量了，所以不妨我们现在假设我们没有能力得到分布函数的全部信息，所以退而求其次去找矩的信息。

这里举一个最简单的例子，FP方程里面的势能宣称谐振子势能：

$$
U_X(x;t)=\frac{k_U(t)}{2}(x-\mu_U(t))^2
$$

FP方程形式为：

$$
\begin{aligned}\partial_{t}P_{X}(x;t)&=\partial_x[[\mu\partial_xU_X(x;t)]P_X(x;t)]+\mu\beta^{-1}(\partial_x)^2P_X(x;t)\\&=\partial_x[\mu k_U(t)(x-\mu_U(t))P_X(x;t)]+\mu\beta^{-1}(\partial_x)^2P_X(x;t)\end{aligned}
$$

重写成如下的形式：

$$
\partial_tP_X(x;t)=-\partial_x[A^{(1)}(x;t)P_X(x;t)]+\frac{1}{2}(\partial_x)^2[A^{(2)}(x;t)P_X(x;t)]
$$

$$
\begin{aligned}
&A^{(1)}(x;t)=A_0^{(1)}(t)+xA_1^{(1)}(t),\\
&A^{(2)}(x;t)=A_0^{(2)}(t),
\end{aligned}
\quad\Rightarrow\quad
\begin{aligned}
&A_0^{(1)}(t)=\mu k_U(t)\mu_U(t),\\
&A_1^{(1)}(t)=-\mu k_U(t),\\
&A_0^{(2)}(t)=2\mu\beta^{-1}
\end{aligned}
$$

直接一通计算猛如虎：

$$
\begin{aligned}\partial_tc_n(t)&=\left.(\partial_s)^n\frac{\int dxe^{sx}\partial_tP_X(x;t)}{\left\langle e^{sx}\right\rangle_{P_X(t)}}\right|_{s=0}\\&=\left.(\partial_s)^n\frac{\int dxe^{sx}\left[-\partial_x[A^{(1)}(x;t)P_X(x;t)]+\frac{1}{2}(\partial_x)^2[A^{(2)}(x;t)P_X(x;t)]\right]}{\left\langle e^{sx}\right\rangle_{P_X(t)}}\right|_{s=0}\\&=(\partial_s)^n\frac{\int dxe^{sx}\left[s[A_0^{(1)}(t)+xA_1^{(1)}(t)]P_X(x;t)+\frac{1}{2}s^2A_0^{(2)}(t)P_X(x;t)\right]}{\langle e^{sx}\rangle_{P_X(t)}}|_{s=0}\\&=\left.(\partial_s)^n\frac{\left[sA_0^{(1)}(t)\langle e^{sx}\rangle_{P_X(t)}+sA_1^{(1)}(t)\partial_s\langle e^{sx}\rangle_{P_X(t)}+\frac{1}{2}s^2A_0^{(2)}(t)\langle e^{sx}\rangle_{P_X(t)}\right]}{\langle e^{sx}\rangle_{P_X(t)}}\right|_{s=0}\\&=\left.(\partial_s)^n\left[sA_0^{(1)}(t)+\frac{1}{2}s^2A_0^{(2)}(t)\right]\right|_{s=0}+\left.(\partial_s)^n\left[sA_1^{(1)}(t)\partial_s\ln\langle e^{sx}\rangle_{P_X(t)}\right]\right|_{s=0}\\&=A_0^{(1)}(t)\delta_{n1}+A_0^{(2)}(t)\delta_{n2}+nA_1^{(1)}(t)c_n,\end{aligned}
$$

显然这个微分方程要比之前的FP方程简单不少，因为我们已经积了一次分。从上面的微分方程可以看到，在$n\geq 3$的时候是没有常数项的，所以如果初始分布是$c\_{n\geq 3}(0)=0$的高斯分布，那么他们会继续保持0，也就是Gauss分布不会被色散掉。
## Lecture 12
> 这节课因为早上睡过了所以没去🥹，托友人告知，这节课内容是继续上一节推导谐振子外力形式的FP方程对应的体系的概率分布对应的parameter力学系，这一部分我已经直接并入上一讲了，所以这一节只写下课上所讲的关于化学反应速率中的应用。

这一节内容是相当有意义的，因为前面我们讲了那么大一堆，基本就是在换着法子研究主方程，除了布朗运动，我们没有举任何其他例子，现在我们就把前面讲的这些玩意儿用到化学反应的研究中。我们考虑的体系假设可以看成是理想稀薄溶液，总体积是$\Omega$，在溶液中溶质可能发生很多不同的化学反应，我们可以统一写成下面的样子：[^34]

$$
\require{mathtools}
\sum_{i=1}^{N} \nu_{i\rho} X_i \;\xrightleftharpoons[k_\rho^-]{k_\rho^+}\; \sum_{i=1}^{N} \kappa_{i\rho} X_i
$$

$i$用来标记不同的溶质分子，$\rho$用来标记不同的反应，比如我们可以考虑下面的反应：

$$
\begin{aligned}
2\mathrm{H}_2 + \mathrm{O}_2 &\xrightleftharpoons[k_1^-]{k_1^+} 2\mathrm{H}_2\mathrm{O}\\
\mathrm{C} + \mathrm{O}_2 &\xrightleftharpoons[k_2^-]{k_2^+} \mathrm{CO}_2
\end{aligned}
$$

对应：

$$
\mathbf X=
\begin{pmatrix}
X_1\\X_2\\X_3\\X_4\\X_5
\end{pmatrix}
=
\begin{pmatrix}
\mathrm H_2\\ \mathrm O_2\\ \mathrm H_2\mathrm O\\ \mathrm C\\ \mathrm {CO}_2
\end{pmatrix},
\qquad
\nu=
\begin{pmatrix}
2&0\\
1&1\\
0&0\\
0&1\\
0&0
\end{pmatrix},
\qquad
\kappa=
\begin{pmatrix}
0&0\\
0&0\\
2&0\\
0&0\\
0&1
\end{pmatrix}.
$$

这个化学反应体系可以用主方程描述[^29]，我们考虑的是每种分子的个数的分布函数，也就是自变量为$\boldsymbol{x}=(n\_1,\cdots,n\_N)^\mathrm{T}$，那么显然当反应正向进行的时候，分子个数就会根据配平系数改变$:\mathsf{S}\_{i\rho}=\kappa\_{i\rho}-\nu\_{i\rho}$，反向就减去。由此我们就可以写下主方程：

$$
\begin{aligned}&\frac{\partial}{\partial t}p_{\boldsymbol{X}}(\boldsymbol{x};t)\\&=\sum_\rho[W^{+(\rho)}(\boldsymbol{x}|\boldsymbol{x}-\mathbf{S}_\rho)p_{\boldsymbol{X}}(\boldsymbol{x}-\mathbf{S}_\rho;t)+W^{-(\rho)}(\boldsymbol{x}|\boldsymbol{x}+\mathbf{S}_\rho)p_{\boldsymbol{X}}(\boldsymbol{x}+\mathbf{S}_\rho;t)]\\&-\sum_\rho[W^{+(\rho)}(\boldsymbol{x}+\mathbf{S}_\rho|\boldsymbol{x})+W^{-(\rho)}(\boldsymbol{x}-\mathbf{S}_\rho|\boldsymbol{x})]p_{\boldsymbol{X}}(\boldsymbol{x};t),\end{aligned}
$$

跃迁矩阵元可以用下面的等式描述：[^30]


$$
\begin{aligned}&W^{+(\rho)}(\boldsymbol{x}|\boldsymbol{x}-\mathbf{S}_\rho)=k_\rho^+\Omega\prod_{i=1}^N\left(\frac{n_i-\mathsf{S}_{i\rho}}{\Omega}\right)^{\nu_{i\rho}},\\&W^{+(\rho)}(\boldsymbol{x}+\mathbf{S}_\rho|\boldsymbol{x})=k_\rho^+\Omega\prod_{i=1}^N\left(\frac{n_i}{\Omega}\right)^{\nu_{i,\rho}},\\&W^{-(\rho)}(\boldsymbol{x}|\boldsymbol{x}+\boldsymbol{S}_\rho)=k_\rho^-\Omega\prod_{i=1}^N\left(\frac{n_i+\mathsf{S}_{i\rho}}{\Omega}\right)^{\kappa_{i\rho}},\\&W^{-(\rho)}(\boldsymbol{x}-\mathbf{S}_\rho|\boldsymbol{x})=k_\rho^-\Omega\prod_{i=1}^N\left(\frac{n_i}{\Omega}\right)^{\kappa_{i\rho}}.\end{aligned}
$$

但是我们一般不是直接考虑分子个数，而是考虑浓度：$\tilde{x}\_i=n\_i/\Omega$，而且显然我们可以近似看作是一个连续变化的量，只要$\Omega$很大，那么间隔就很小，利用这个浓度，我们也可以吧前面的跃迁矩阵元重新写成下面的样子：

$$
\begin{aligned}&W^{+(\rho)}(\boldsymbol{x}|\boldsymbol{x}-\mathbf{S}_\rho)=\tilde{w}^{+(\rho)}(\tilde{\boldsymbol{x}}-\mathbf{S}_\rho/\Omega),\\&W^{+(\rho)}(\boldsymbol{x}+\mathbf{S}_\rho|\boldsymbol{x})=\tilde{w}^{+(\rho)}(\tilde{\boldsymbol{x}}),\\&W^{-(\rho)}(\boldsymbol{x}|\boldsymbol{x}+\boldsymbol{S}_\rho)=\tilde{w}^{-(\rho)}(\tilde{\boldsymbol{x}}+\mathbf{S}_\rho/\Omega),\\&W^{-(\rho)}(\boldsymbol{x}-\mathbf{S}_\rho|\boldsymbol{x})=\tilde{w}^{-(\rho)}(\boldsymbol{\tilde{x}}),\end{aligned}
$$

概率分布也重新归一化为：

$$
p_{\boldsymbol{X}}(\boldsymbol{x};t)=\frac{1}{\Omega^N}P_{\tilde{\boldsymbol{X}}}(\tilde{\boldsymbol{x}};t),\quad \sum_{\boldsymbol{x}}P_{\tilde{\boldsymbol{X}}}(\tilde{\boldsymbol{x}};t)\Omega^{-N}\approx \int d\boldsymbol{\tilde{x}}P_{\tilde{\boldsymbol{X}}}(\tilde{\boldsymbol{x}};t)=1
$$

主方程就可以重新写为：

$$
\begin{aligned}\frac{\partial}{\partial t}P_{\tilde{\boldsymbol{X}}}(\tilde{\boldsymbol{x}};t)=&\sum_\rho[\tilde{w}^{+(\rho)}(\tilde{\boldsymbol{x}}-\mathbf{S}_\rho/\Omega)P_{\tilde{\boldsymbol{X}}}(\tilde{\boldsymbol{x}}-\mathbf{S}_\rho/\Omega;t)+\tilde{w}^{-(\rho)}(\tilde{\boldsymbol{x}}+\mathbf{S}_\rho/\Omega)P_{\tilde{\boldsymbol{X}}}(\tilde{\boldsymbol{x}}+\mathbf{S}_\rho/\Omega;t)]\\&-\sum_\rho[\tilde{w}^{+(\rho)}(\tilde{\boldsymbol{x}})+\tilde{w}^{-(\rho)}(\boldsymbol{\tilde{x}})]P_{\tilde{\boldsymbol{X}}}(\tilde{\boldsymbol{x}};t)
\end{aligned}
$$

进行Taylor展开：

$$
\begin{aligned}&\tilde{w}^{+(\rho)}(\boldsymbol{\tilde{x}}-\mathbf{S}_\rho/\Omega)P_{\tilde{\boldsymbol{X}}}(\tilde{\boldsymbol{x}}-\mathbf{S}_\rho/\Omega;t)-\tilde{w}^{+(\rho)}(\boldsymbol{\tilde{x}})P_{\tilde{\boldsymbol{X}}}(\tilde{\boldsymbol{x}};t)\\&=\sum_{k=1}^\infty\sum_{m_1,\cdots,m_N|\sum_im_i=k}\left[\prod_{i=1}^N\frac{1}{m_i!}\left(-\frac{\mathsf{S}_{i\rho}}{\Omega}\right)^{m_i}(\partial_{\tilde{x}_i})^{m_i}\right][\tilde{w}^{+(\rho)}(\tilde{\boldsymbol{x}})P_{\tilde{\boldsymbol{X}}}(\tilde{\boldsymbol{x}};t)]\\&\tilde{w}^{-(\rho)}(\tilde{\boldsymbol{x}}+\mathbf{S}_\rho/\Omega)P_{\tilde{\boldsymbol{X}}}(\tilde{\boldsymbol{x}}+\mathbf{S}_\rho/\Omega;t)-\tilde{w}^{-(\rho)}(\tilde{\boldsymbol{x}})P_{\tilde{\boldsymbol{X}}}(\tilde{\boldsymbol{x}};t)\\&=\sum_{k=1}^\infty\sum_{m_1,\cdots,m_N|\sum_im_i=k}\left[\prod_{i=1}^N\frac{1}{m_i!}\left(\frac{\mathsf{S}_{i\rho}}{\Omega}\right)^{m_i}(\partial_{\tilde{x}_i})^{m_i}\right][\tilde{w}^{-(\rho)}(\boldsymbol{\tilde{x}})P_{\tilde{\boldsymbol{X}}}(\tilde{\boldsymbol{x}};t)]\end{aligned}
$$

代回到之前的主方程并且取最低阶近似得到：

$$
\begin{aligned}\frac{\partial}{\partial t}P_{\tilde{\boldsymbol{X}}}(\tilde{\boldsymbol{x}};t)&=\sum_\rho\sum_i\left[\left(-\frac{\mathsf{S}_{i\rho}}{\Omega}\right)(\partial_{\tilde{x}_i})\right][\tilde{w}^{+(\rho)}(\tilde{\boldsymbol{x}})P_{\tilde{\boldsymbol{X}}}(\tilde{\boldsymbol{x}};t)]\\&+\sum_\rho\sum_i\left[\left(\frac{\mathsf{S}_{i\rho}}{\Omega}\right)(\partial_{\tilde{x}_i})\right][\tilde{w}^{-(\rho)}(\boldsymbol{\tilde{x}})P_{\tilde{\boldsymbol{X}}}(\tilde{\boldsymbol{x}};t)]+\mathcal{O}(\Omega^{-2})\\&=-\sum_\rho\sum_i\partial_{\tilde{x}_i}\left[\mathsf{S}_{i\rho}\frac{\tilde{w}^{+(\rho)}(\tilde{\boldsymbol{x}})-\tilde{w}^{-(\rho)}(\tilde{\boldsymbol{x}})}{\Omega}P_{\tilde{\boldsymbol{X}}}(\tilde{\boldsymbol{x}};t)\right]+\mathcal{O}(\Omega^{-2})\end{aligned}
$$

我们上面做的事情其实就是把离散变量的随机过程转换成连续变量的随机过程，在大体积极限下进行Kramer-Moyal展开然后得到了对应的FP方程。用前面(4.1)的记号，有：

$$
j_{\tilde X_i}(\tilde x;t):=\nu_{\tilde X_i}(\tilde x;t)P_{\tilde X}(\tilde x;t),\quad \nu_{\tilde X_i}(\tilde x;t)=\sum_\rho\left[\mathsf{S}_{i\rho}\frac{\tilde{w}^{+(\rho)}(\tilde{\boldsymbol{x}})-\tilde{w}^{-(\rho)}(\tilde{\boldsymbol{x}})}{\Omega}\right]
$$

进一步把上面推导的FP方程的形式改写，把求和项分成两部分得到：

$$
\frac{\partial}{\partial t}P_{\tilde{\boldsymbol{X}}}(\tilde{\boldsymbol{x}};t)=-\sum_\rho\sum_i\partial_{\tilde{x}_i}\left[\mathsf{S}_{i\rho}\frac{\tilde{w}^{+(\rho)}(\tilde{\boldsymbol{x}})-\tilde{w}^{-(\rho)}(\tilde{\boldsymbol{x}})}{\Omega}P_{\tilde{\boldsymbol{X}}}(\tilde{\boldsymbol{x}};t)\right]+\frac{1}{2}\sum_{\rho}\sum_{i.j}(\partial_{\tilde{x}_i})(\partial_{\tilde{x}_j})\left[\mathsf{S}_{i\rho}\mathsf{S}_{j\rho}\frac{\tilde{w}^{+(\rho)}(\tilde{\boldsymbol{x}})+\tilde{w}^{-(\rho)}(\tilde{\boldsymbol{x}})}{\Omega^2}P_{\tilde{\boldsymbol{X}}}(\tilde{\boldsymbol{x}};t)\right]
$$

也就是Kramers-Moyal展开的两个系数是：

$$
A^{(1)}_i(\tilde{\boldsymbol{x}};t)=\sum_\rho\left[\mathsf{S}_{i\rho}\frac{\tilde{w}^{+(\rho)}(\tilde{\boldsymbol{x}})-\tilde{w}^{-(\rho)}(\tilde{\boldsymbol{x}})}{\Omega}\right],\quad A^{(2)}_{ij}(\tilde{\boldsymbol{x}};t)=\sum_{\rho}\left[\mathsf{S}_{i\rho}\mathsf{S}_{j\rho}\frac{\tilde{w}^{+(\rho)}(\tilde{\boldsymbol{x}})+\tilde{w}^{-(\rho)}(\tilde{\boldsymbol{x}})}{\Omega^2}\right]
$$

既然这是一个FP方程，我们自然可以（在Ito诠释下）写下对应的朗之万方程：

$$
\frac{d\tilde{x}_i}{dt}=\sum_\rho\mathsf{S}_{i\rho}\frac{\tilde{w}^{+(\rho)}(\tilde{\boldsymbol{x}})-\tilde{w}^{-(\rho)}(\boldsymbol{\tilde{x}})}{\Omega}+O(1/\Omega^2)\cdot\xi_i,
$$

这里$\xi$是白噪声，注意上面的方程推导我们利用了第六节讲到的对于任意FP方程写下对应朗之万方程的方法，这里无非就是把D矩阵和$F$外力换成$A^{(1)}$和$A^{(2)}$罢了，推导甚易，而且由于$A^{(2)}$是$\mathcal{O}(\Omega^{-2})$的，其分解太麻烦，所以我们只显式写下了$A^{(1)}$的贡献。不过我们真正关心的是大体积极限，这个时候原先的随机微分方程随即想就会被丢掉，变成一个完全决定论的力学体系！代入跃迁矩阵元的具体表达式我们得到：

$$
\frac{d\tilde{x}_i}{dt}=\sum_\rho\mathsf{S}_{i\rho}\left[k_\rho^+\prod_{i=1}^N(\tilde{x}_i)^{\nu_{i\rho}}-k_\rho^-\prod_{i=1}^N(\tilde{x}_i)^{\kappa_{i\rho}}\right]
$$

这玩意儿就叫速率方程，是本节的主要结论。不过可以看到我们为了导出这个方程最重要的就是大体积近似，那么这么近似的代价是什么？代价就是原先的主方程完全是个线性偏微分方程，现在变成非线性的常微分方程了。如果读者熟悉线形偏微分方程求解，其实可以发现上面我们得到的常微分方程就是用特征线方法求FP方程给出的特征线对应的常微分方程。

这个方程还可以进一步解释为平均场近似，也就是：

$$
\langle\prod_{i=1}^N\tilde{x}_i^{k_i}\rangle_{P_{\tilde{\boldsymbol{X}}}}\simeq\prod_{i=1}^N(\langle\tilde{x}_i\rangle_{P_{\tilde{\boldsymbol{X}}}})^{k_i}
$$

因为我们可以看作大体积极限下我们关注的其实是浓度系综平均，取平均之后后面的噪声项就没了，我们得到：

$$
\begin{aligned}\frac{d\langle\tilde{x}_i\rangle_{P_{\tilde{\boldsymbol{X}}}}}{dt}&=\int d\tilde{\boldsymbol{x}}\tilde{x}_i\frac{\partial}{\partial t}P_{\tilde{\boldsymbol{X}}}(\tilde{\boldsymbol{x}};t)\\&=\sum_\rho\int d\tilde{\boldsymbol{x}}(\partial_{\tilde{x}_i}\tilde{x}_i)\left[\mathsf{S}_{i\rho}\frac{\tilde{w}^{+(\rho)}(\boldsymbol{\tilde{x}})-\tilde{w}^{-(\rho)}(\boldsymbol{\tilde{x}})}{\Omega}P_{\tilde{\boldsymbol{X}}}(\tilde{\boldsymbol{x}};t)\right]\\&=\sum_\rho\mathsf{S}_{i\rho}\left[k_\rho^+\langle\prod_{i=1}^N\tilde{x}_i^{\nu_{i\rho}}\rangle_{P_{\tilde{\boldsymbol{X}}}}-k_\rho^-\langle\prod_{i=1}^N\tilde{x}_i^{\kappa_{i\rho}}\rangle_{P_{\tilde{\boldsymbol{X}}}}\right]\end{aligned}
$$

显然在平均场近似下回到了速率方程。Ito-san的讲义上进一步分析了这个化学反应体系作为动力系统的稳定性，我就懒得写这部分了。

## Lecture 13
> 最后一节课讲了点非线性动力学里面会出现的分支的现象，并非完整的讨论而是通过有名的例子来讲。好像伊藤不打算给bonus lecture，所以这就是真正的最后一节课了。

这一节课讲的分析方法其实特别简单，就是大一学的微分方程那些，而物理人对微分方程稳定性的分析可以尽量随意一些，如果想学数学人用几何方法的分析那肯定是看Anorld的ode的书了。课上的例子图片很多，我懒得一个个画图，所以我就挑几个有意思的例子argue一下，全部的例子可以在Ito的讲义中找到，可惜的是Ito也懒得在讲义里面画图，所以只在上课的时候在黑板上画了一下。

其实我们要考虑的就是带参数的动力系统，我们要研究的就是fixed point随参数的变化，而在动力系统中很典型的就是两个不动点在某个参数汇合的现象，从而出现分枝，而且stable的不动点也可能变成unstable的。比如pitchfork bifurcation：

$$
\frac{dx}{dt}=\lambda x+x^3-x^5
$$

不难轻松得到五个不动点：

$$
x^{(1)}_*=0,\quad x^{(2)}_*=\sqrt{\frac{1-\sqrt{1+4\lambda}}{2}},\quad x^{(3)}_*=-\sqrt{\frac{1-\sqrt{1+4\lambda}}{2}},\quad x^{(4)}_*=\sqrt{\frac{1+\sqrt{1+4\lambda}}{2}},\quad x^{(5)}_*=-\sqrt{\frac{1+\sqrt{1+4\lambda}}{2}} 
$$

分析稳定性很简单，就是物理上的想法把右边积分，那么左边就变成了加速度，右边就是对应的势能函数：

$$
U(x;\lambda)=-\frac12 \lambda x^2-\frac14 x^4+\frac16 x^5
$$

然后看稳定点是这个势能函数的极小（stable），极大（unstable）还是鞍点（half-stabel）就好了。至于bifurcation图就自己画或者网上找吧。有意思的是当我们把$\lambda$看成温度把$x\_\*$看作对应的磁化率，然后我们把bifurcation图按照温度升高或者降低的方向画出stable的点对应磁化率的变化（stable的点在stabel和unstabel的交界处发生jump）。然后惊人发现这个之后会出现磁滞回线（$\lambda$从小到大以及从大到小走发生jump的点不同）！而Ito-san说物理上确实可以建立这两者的关系，我觉得这部分才是最精彩的，可惜Ito只在数学上讨论了没有讲多少物理，顿时写的兴趣少了几分。

最后课上讲的一个有名有姓的bifurcation就是Hopf bifurcation，动力系统的定义是：

$$
\frac{dz}{dt}=(\lambda+i)z-z|z|^2,\quad z\in\mathbb{C},\lambda\in\mathbb{R}
$$

用极坐标可以写为：

$$
\begin{cases}
\frac{dr}{dt}=\lambda r-r^3\\
\frac{d\theta}{dt}=1
\end{cases}
$$

分支图分成$\lambda<0$的时候$r\_\*=0$的stable的固定点以及$\lambda>0$时候$r\_\*=0$的unstable的固定点。而$\lambda>0$时候还有一个$r=\sqrt{\lambda}$的cycle，但是这不是固定点，是动力系统随着时间只在这个limit cycle上演化，因为上面角速度始终不是0，但是这个cycle是稳定的。

写到这里不禁想起我在大二的时候看Goldstein的经典力学，当时对天体运动稳定性之类的分析也是很痴迷的，力学上面这部分的分析还是很有意思的。

# DLC
> 显然Ito基本没怎么讲信息热力学的内容让我不是太舒适，所以我看了他的讲义上面的一些零散的介绍，写一个note出来。

信息几何学算是近年来新兴发展的学科，我们这里就只介绍1+1=2的知识。信息几何作为流形，上面的点就是概率分布$p\_{\boldsymbol{X}}(\boldsymbol{x}\|\boldsymbol{\theta})$，这里$\boldsymbol{\theta}=\\{\theta\_{1},\ldots,\theta\_{n\_{\Theta}}\\}$，是确定概率模型的参数，可以就当作是流形上的坐标。信息几何上面有一个很自然的度量，叫做Fisher信息度量，我们这里就打算介绍下这个。考虑两个很近的概率分布之间的KL散度：

$$
\begin{aligned}&D_{\mathrm{KL}}(p_\boldsymbol{X}||p_\boldsymbol{X}+dp_\boldsymbol{X})\\&=D_{\mathrm{KL}}(q_{\boldsymbol{X}}-dp_{\boldsymbol{X}}||q_{\boldsymbol{X}})\\&=-\sum_{\boldsymbol{x}}p_{\boldsymbol{X}}(\boldsymbol{x})\ln\frac{p_{\boldsymbol{X}}(\boldsymbol{x})+dp_{\boldsymbol{X}}(\boldsymbol{x})}{p_{\boldsymbol{X}}(\boldsymbol{x})}\\&=-\sum_{\boldsymbol{x}}p_{\boldsymbol{X}}(\boldsymbol{x})\left(\ln1+\frac{dp_{\boldsymbol{X}}(\boldsymbol{x})}{p_{\boldsymbol{X}}(\boldsymbol{x})}-\frac12\frac{(dp_{\boldsymbol{X}}(\boldsymbol{x}))^2}{(p_{\boldsymbol{X}}(\boldsymbol{x}))^2}\right)+\mathcal{O}(dp_{\boldsymbol{X}}^3)\\&=\frac12\sum_{\boldsymbol{x}}\frac{(dp_{\boldsymbol{X}}(\boldsymbol{x}))^2}{p_{\boldsymbol{X}}(\boldsymbol{x})}+\mathcal{O}(dp_{\boldsymbol{X}}^3)\\&=\frac12\sum_\boldsymbol{x}\frac{(dp_\boldsymbol{X}(\boldsymbol{x}))^2}{q_\boldsymbol{X}(\boldsymbol{x})}+\mathcal{O}(dp_\boldsymbol{X}^3).\end{aligned}
$$

这意味着KL散度相对流形两个很相近的点是对称的，也就是说：

$$
D_{\mathrm{KL}}(p_{\boldsymbol{X}}||p_{\boldsymbol{X}}+dp_{\boldsymbol{X}})=D_{\mathrm{KL}}(p_{\boldsymbol{X}}+dp_{\boldsymbol{X}}||p_{\boldsymbol{X}})+\mathcal{O}(dp_{\boldsymbol{X}}^3)
$$

而且我们知道KL散度是正定的，所以自然我们可以把它当作是度量的定义：[^32]

$$
\begin{aligned}ds^{2}&=\sum_{\boldsymbol{x}}\frac{(dp_{\boldsymbol{X}}(\boldsymbol{x}))^2}{p_{\boldsymbol{X}}(\boldsymbol{x})}\\&=\langle(d\ln p_{\boldsymbol{X}})^2\rangle_{p_{\boldsymbol{X}}}\\&=2D_{\mathrm{KL}}(p_{\boldsymbol{X}}||p_{\boldsymbol{X}}+dp_{\boldsymbol{X}})+\mathcal{O}(dp_{\boldsymbol{X}}^3)\\&=2D_{\mathrm{KL}}(p_{\boldsymbol{X}}+dp_{\boldsymbol{X}}||p_{\boldsymbol{X}})+\mathcal{O}(dp_{\boldsymbol{X}}^3)\end{aligned}
$$

现在我们用坐标$\boldsymbol{\theta}$来写，利用：

$$
d\ln p_{\boldsymbol{X}}(\boldsymbol{x})=\sum_i[\partial_{\theta_i}\ln p_{\boldsymbol{X}}(\boldsymbol{x})]d\theta_i+O(d\boldsymbol{\theta}^2),
$$

不难得到：

$$
ds^2=\sum_{i,j}g_{ij}d\theta_id\theta_j,\quad \boxed{g_{ij}=\langle[\partial_{\theta_i}\ln p_{\boldsymbol{X}}][\partial_{\theta_j}\ln p_{\boldsymbol{X}}]\rangle_{p_{\boldsymbol{X}}}}
$$

这便是Fisher信息矩阵。虽然我们前面说过KL散度衡量两个分布之间的相似度，下面我们从Cramér–Rao不等式来重新理解。考虑只有一个自由度的情况：

$$
ds^2=g_{11}d\theta^2=\langle[\partial_\theta\ln p_{\boldsymbol{X}}]^2\rangle_{p_{\boldsymbol{X}}}d\theta^2
$$

考虑任意一个函数，定义其平方差：

$$
\mathrm{Var}_{p_{\boldsymbol{X}}}[R]=\langle[R-\langle R\rangle_{p_{\boldsymbol{X}}}]^2\rangle_{p_{\boldsymbol{X}}}
$$

Cramér–Rao不等式其实就是Cauchy-Schwartz不等式：

$$
\langle f^2\rangle_{p_{\boldsymbol{X}}}\langle g^2\rangle_{p_{\boldsymbol{X}}}\geq(\langle fg\rangle_{p_{\boldsymbol{X}}})^2
$$

利用上面的不等式有：

$$
\begin{aligned}\left(\frac{ds}{d\theta}\right)^2\mathrm{Var}_{p_{\boldsymbol{X}}}[R]&\geq(\langle[\partial_\theta\ln p_{\boldsymbol{X}}(\boldsymbol{x})][R-\langle R\rangle_{p_{\boldsymbol{X}}}]\rangle_{p_{\boldsymbol{X}}})^2\\&=\left(\sum_{\boldsymbol{x}}\frac{\partial p_{\boldsymbol{X}}(\boldsymbol{x})}{\partial\theta}[R(\boldsymbol{x})-\langle R\rangle_{p_{\boldsymbol{X}}}]\right)^2\\&=\left(\frac{d}{d\theta}\langle R\rangle_{p_{\boldsymbol{X}}}\right)^2\end{aligned}
$$

最终得到Cramér–Rao不等式：

$$
\boxed{
\left(\frac{ds}{d\theta}\right)^{2}\mathrm{Var}_{p_{\boldsymbol{X}}}[R]\geq\left(\frac{d}{d\theta}\langle R\rangle_{p_{\boldsymbol{X}}}\right)^{2}
}
$$

取等号的条件就是CS不等式要求的成正比：

$$
\exists\,\alpha(\theta),\quad \partial_\theta\ln p_{\boldsymbol{X}}(\boldsymbol{x})=\alpha(\theta)[R(\boldsymbol{x})-\langle R\rangle_{p_{\boldsymbol{X}}}]
$$

现在考虑一个特殊情况，取$R(\boldsymbol{x})=\Theta(\boldsymbol{x})$使得$\langle\Theta\rangle\_{P\_{\boldsymbol{X}}}=\theta$，这个时候$\Theta(\boldsymbol{x})$叫做$\theta$的无偏估计。上面的不等式变为下面的形式：

$$
\mathrm{Var}_{p_X}[\Theta]\geq\frac{1}{\left(\frac{ds}{d\theta}\right)^2}\Rightarrow \frac{ds}{d\theta}\geq\frac{|\frac{d}{d\theta}\langle R\rangle_{P_{\boldsymbol{X}}}|}{\sqrt{\mathrm{Var}_{P_{\boldsymbol{X}}}[R]}}:=v_{R}
$$

从第一个公式可以看到我们可以从分析几何来得到无偏估计精度的下界，第二个公式给了我们FIsher信息矩阵在概率学上的意义，他告诉我们对于任意的函数$R$，在测量的意义上，我们一般认为平均值变化一个标准差才算大变化，所以等式右边normalized之后得到的可以当作是$R$的变化快慢的衡量，而这个速度有一个最大的普适的上界，这个上界就是由Fisher信息矩阵给出来的度量。

上面或许是数学上的发展，现在我们来介绍非平衡中非常重要的涨落定理，数学推导上相当trivial，但是重在物理上很重要。我们首先定义概率分布的“时间反演”：

$$
p_{X,X^{\prime},N}(x,x^{\prime},\nu)=p(x;t+dt,x^{\prime};t,\nu)\Rightarrow p^\dagger{}_{X,X^{\prime},N}(x,x^{\prime},\nu)=p(x^{\prime};t+dt,x;t,\nu)
$$

这里$\nu$是bath的label，在Lecture 7中我们定义过每个bath单独贡献的迁移概率，注意到下面的计算：

$$
\begin{aligned}&D_{\mathrm{KL}}(p_{X,X^{\prime},N}||p_{X,X^{\prime},N}^{\dagger})\\&=\sum_{x,x^{\prime},\nu}p_{X,X^{\prime},N}(x,x^{\prime},\nu)\ln\frac{p_{X,X^{\prime},N}(x,x^{\prime},\nu)}{p^{\dagger}{}_{X,X^{\prime},N}(x,x^{\prime},\nu)}\\&=\sum_{x,x^{\prime},\nu|x\neq x^{\prime}}W^{(\nu)}(x|x^{\prime};t)p_X(x^{\prime};t)dt\ln\frac{W^{(\nu)}(x|x^{\prime};t)p_X(x^{\prime};t)}{W^{(\nu)}(x^{\prime}|x;t)p_X(x;t)}\\&=\sum_{x,x^{\prime},\nu|x>x^{\prime}}dt[W^{(\nu)}(x|x^{\prime};t)p_X(x^{\prime};t)-W^{(\nu)}(x^{\prime}|x;t)p_X(x;t)]\ln\frac{W^{(\nu)}(x|x^{\prime};t)p_X(x^{\prime};t)}{W^{(\nu)}(x^{\prime}|x;t)p_X(x;t)}\\&=dt\sum_{\rho\in\mathcal{E}}(J_\rho^+-J_\rho^-)\ln\frac{J_\rho^+}{J_\rho^-}\\&=\sigma(t)dt&\left(4.83\right)\end{aligned}
$$

注意之前我们在细致平衡下把熵产生率用概率分布和平衡概率分布之间的KL散度表示出来，这里我们则不需要任何的假定，用概率分布和其时间反演即可。注意到KL散度的定义，对熵产生率积分我们得到熵的产生量：

$$
\Sigma(\tau;0)=\langle\ln p_{\boldsymbol{X},\boldsymbol{N}}-\ln p^\dagger{}_{\boldsymbol{X},\boldsymbol{N}}\rangle_{p_{\boldsymbol{X},\boldsymbol{N}}}
$$

定义概率熵产生量为：

$$
\hat{\Sigma}(\boldsymbol{x},\boldsymbol{\nu};\tau;0)=\ln p_{\boldsymbol{X},\boldsymbol{N}}(\boldsymbol{x},\boldsymbol{\nu})-\ln p_{\boldsymbol{X},\boldsymbol{N}}^\dagger(\boldsymbol{x},\boldsymbol{\nu})
$$

由此得到细致涨落定理：

$$
\frac{p_{\boldsymbol{X},\boldsymbol{N}}(\boldsymbol{x},\boldsymbol{\nu})}{p_{\boldsymbol{X},\boldsymbol{N}}^\dagger(\boldsymbol{x},\boldsymbol{\nu})}=\exp[\hat{\Sigma}(\boldsymbol{x},\boldsymbol{\nu};\tau;0)]
$$

对两边取平均得到积分涨落定理：

$$
\left\langle\exp[-\hat{\Sigma}(\tau;0)]\right\rangle_{p_{\boldsymbol{X},\boldsymbol{N}}}=1
$$

根据琼斯不等式我们有：

$$
\exp\left[-\left\langle\hat{\Sigma}(\tau;0)\right\rangle_{p_{\boldsymbol{X},\boldsymbol{N}}}\right]\leq\left\langle\exp[-\hat{\Sigma}(\tau;0)]\right\rangle_{p_{\boldsymbol{X},\boldsymbol{N}}}=1=\exp[0]
$$

这正是热力学第二定律：

$$
\Sigma(\tau;0)\geq0
$$

最后来介绍一下Jarzynski等式，仿照很久以前对熵产生率的分析，把熵变分成系统的和bath的，系统的熵变就是用香农熵给出的，不过我们这里考虑没有平均的概率的熵变：

$$
\begin{gathered}
\hat{\Sigma}(\boldsymbol{x},\boldsymbol{\nu};\tau;0)=\Delta S^\mathrm{sys}(\boldsymbol{x};\tau;0)+\Delta S^\mathrm{bath}(\boldsymbol{x};\tau;0),\\
\Delta S^\mathrm{sys}(\boldsymbol{x};\tau;0)=\ln p_X(x_1;0)-\ln p_X(x_N;\tau),
\end{gathered}
$$

bath的熵变可以一样的用概率表示，这里我们直接写下细致平衡下前面讨论随机热力学第一定律时用克劳修斯熵，也就是传热给出的熵变：

$$
\Delta S^\mathrm{bath}(\boldsymbol{x};\tau;0)=-\beta\int_0^\tau dt\frac{\delta Q}{\delta t}:=-\beta\delta Q(\boldsymbol{x})
$$

注意吸热是过程量，所以和路径$\boldsymbol{x}$有关，而且注意我们这里写的式子都是在对路径平均前的。假设$t=0$初态以及$t=\tau$末态的时候系统处于平衡分布，用势能和亥姆霍兹自由能可以写得初末时刻的概率正则分布：

$$
p_X(x_1;0)=\exp[-\beta(U(x_1;0)-F(0))],\quad p_X(x_N;\tau)=\exp[-\beta(U(x_N;\tau)-F(\tau))]
$$

由此我们得到初末的系统的熵变：

$$
\Delta S^\mathrm{sys}(\boldsymbol{x};\tau;0)=\beta\Delta U(\boldsymbol{x})-\beta\Delta F
$$

注意到热力学第一定律：

$$
\delta W(\boldsymbol{x})=\Delta U(\boldsymbol{x})-\delta Q(\boldsymbol{x}),
$$

利用积分涨落定理得到：

$$
\left\langle\exp[-\beta(\delta W-\Delta F)]\right\rangle_{p_{\boldsymbol{X},\boldsymbol{N}}}=1
$$

自由能是状态量，和路径无关，所以得到Jarzynski等式：

$$
\exp[-\beta\Delta F]=\langle\exp[-\beta\delta W]\rangle_{p_{\boldsymbol{X},\boldsymbol{N}}}
$$

这告诉我们什么？首先对于一个过程，功是相对容易测量的，但是自由能比较难弄，这个式子告诉了我们功和自由能之间的关系，在这个等式出现之前，热力学第二定律给了功和自由能之间的不等式：

$$
\langle\delta W(\boldsymbol{x})\rangle_{p_{\boldsymbol{X},\boldsymbol{N}}}\geq\Delta F,
$$

而取等号的条件就是准静态路径，处处平衡才能用功得到自由能。而Jarzynski等式告诉我们不需要管路径是否是准静态，我们可以通过大量实验测出很多不同路径的功，然后平均一下就能得到自由能的变化了。[^33]

# 脚注
[^1]: 注意只需要对中间态求和，时间不需要求和，时间是任选的一个中间时间，从Chapman-Kolmogorov方程可以很快得知结果与选取的中间态时间无关。

[^2]: 听到这个名字我莫名熟悉，总感觉在高量里听过这个方程。后来发现我把二次量子化里面单电子近似得到的Hartree–Fock方程搞混了，而且名字也对不上，这个是Fokker。

[^3]: 和形变量子化里面的那个Moyal乘积是一个人。

[^4]: 势能也可以和时间有关，不过由于没有涉及到时间导数，所以下面就略去了。

[^5]: 其实是我问了Ito-san他说下个月再讲这个

[^6]: 你也可以不换硬推，然后会发现得到的形式长得和我们这个不一样，但是在变量替换的时候其实是等价的。因为你要记得在做变量替换的时候，概率空间积分测度其实也是要变的，因为要保持总的概率积分后还是归一化。

[^7]: https://zhuanlan.zhihu.com/p/375569215

[^8]: 但是他处处连续，现在大伙知道为啥高数上面说连续不一定可导了吧。金融市场里面基本都是这种。

[^9]: 不过我并不懂为啥这要叫做“积分”

[^10]: 实际上，在某些情况下如果强行要求这一点会得到非物理的结果，这意味着我们平衡态的定义失效了。这通常是因为所讨论的物理量$x$关于时间是奇宇称的情况。比如后面我们会讨论的Kramer方程就属于自变量是速度，在时间反演下奇宇称，此讨论失效。

[^11]: 这个编号是任意的，其目的只是让我们后面计算的时候不会重复计数。

[^12]: 注意这里我们没有假设平衡态，尤其是对于多热库，细致平衡和局部细致平衡之间没有包含关系

[^13]: 前面的更加强的不等式称之为信息热力学第二定律

[^14]: 当然，严格来说熵本身就是个状态量，bath的熵也是状态量，我这里只是想说，相对于热机而言，热机恢复原态但是bath没有，所以bath的状态是依赖于热机过程的，所以我想说相当于热机本身的状态，bath的熵变计算是依赖于热机过程的。

[^15]: btw，这些大段的公式推导显然不是我自己一行一行敲的，都是直接从ito的讲义里面截图之后识别的，我没有仔细再看一遍，所以可能有错。但是读者大致上也能自己推导一遍还原出来。

[^16]: https://sosuke110.com/noneq-phys.pdf

[^17]: 这里我用下标i标记不同热源的贡献并且假设不同热源对体系的耦合强度都是一样的$\mu$，ito讲义里面感觉第一个式子写的有那么一丢丢问题，我按照我的理解更正了。

[^18]: 在数学上满足这样细致平衡方程的平衡态分布的存在叫Markov过程可逆。

[^19]: 我没时间看，所以不保真，Ito的讲义里面引用的这篇。

[^20]: 我不太清楚教学中会不会强调这一点，至少我最早关于这个的印象还是竞赛题里面学到的。另外关于电路网络其实有一套网络拓扑学，和这里说的是一样的，读者不妨找来相关书籍看看。

[^21]: 这个对应建立起来之后，所有的热力学流和力的术语就全部按照电流电压来写了，请注意自行翻译。

[^22]: 回忆对于Markov过程画这种图就是对所有状态编号，然后如果$x\to x'$的过程跃迁矩阵元不是0，那么就画一个箭头，而且箭头始终是从编号小的到编号大的。如果有多个热库，那就每个热库的跃迁矩阵元贡献单独看，这也就意味着这个时候两个状态之间可能有多个箭头。

[^23]: 具体严格定义当然是一如既往的数学上抽象的多，不过常微分方程无论是数学上还是物理上都是动力系统的一个很经典的实现方式。

[^24]: 严格来说我们没有证明这一点，因为我并没有详细论述如何利用Kolmogrov条件完成证明。

[^25]: 我本来以为这部分内容是Ito在课上讲授但是讲义上没有的，后来发现原来是他把信息热力学那一章的内容提前讲了，熵产生率这是第三章的内容，而KL散度这些是第四章的内容。

[^26]: 你可能会问，那中间呢？有没有可能中间相差特别大，只是在很远的时候会回来呢？我问了Ito san，他说讨论稳态确实分不同的语境，在我们现在的语境下确实就包含这种离谱的情况。

[^27]: 严格来说还需要局部细致平衡使得熵生成率可以用KL散度写。

[^28]: 整理后才发现原来稳定性就讲了这么点东西。。。原来只用到了数学上的一个定义罢了。。。

[^29]: 当然前提是确实是Markov体系，我们考虑的稀薄溶液就是如此，转移矩阵满足Markov性质。

[^30]: 这些的讨论可以在化学课本中找到，后面我们推导的一系列方程其实也是化学书中常见的经典讨论。

[^31]: 这个形式可以直接推广到高维随机变量情况，只需要把对$A^{(2)}$求平方根改成找一个矩阵满足$BB^T=A^{(2)}$。

[^32]: 这里我们按照离散概率分布来介绍，连续概率分布的公式差不多，只要积分改成求和就好了

[^33]: 但是讲义说实验上很多时候会碰到$\delta W(\boldsymbol{x})\ll0$而且概率很低的情况，这种情况虽然概率低，但是其对自由能的贡献被$\exp$放大了，所以我们必须考虑这种情况的贡献，但是问题在这种情况往往概率又是很低的，所以可能我们模拟了一大堆路径之后还是没出现这种路径，这就会导致最终的结果不准确。

[^34]: 这里化学反应双箭头似乎html上面的mathjax无法正常显示，不过我这里使用`\require{mathtools}`加载宏包实现了，不过mathjax支持的宏包有限。
