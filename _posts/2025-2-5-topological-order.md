---
layout: post
title:  拓扑序的范畴论方法——基础架构
categories: [physics, math]
tags: [cmt, math-ph]
---

寒假稍微学习了一下拓扑序理论，这一系列笔记既是对此次学习的总结备忘录，也作为下学期讨论班的讲义。本篇主要内容如下：

- [超越朗道范式](#超越朗道范式)
- [什么是拓扑序？](#什么是拓扑序)
  - [什么是其中的可观测量？](#什么是其中的可观测量)
- [Kitaev toric model](#kitaev-toric-model)
  - [$\\mathbb{Z}\_2$ 格点模型](#mathbbz_2-格点模型)
  - [点缺陷](#点缺陷)
  - [local operator algebras](#local-operator-algebras)
  - [任意子的出现](#任意子的出现)
  - [\[DLC\]推广到任意有限群](#dlc推广到任意有限群)
  - [其它模型](#其它模型)
- [参考](#参考)


<!--more-->

# 超越朗道范式

凝聚态物理需要回答的一个非常基本的问题是：什么是相？什么是相变？

一个非常粗糙的对相的描述便是一堆有共同特征的物质的集合。翻译成数学的话就是：哈密顿量的等价类。也就是说如果描述两个体系的哈密顿量在某种操作下等价，那么就称这两个体系在同一个物相。这里有个非常模糊的描述：**某种操作**。这个就比较人为规定的意思，我们一般把这种操作取做哈密顿量的绝热变换。当然你在同一个体系你可以定义不同的绝热路径，但是请相信一点：

> 在后面要讨论的拓扑序中，这些“人为”因素得到的不同范畴最终都是等价的

那么什么是相变？显然，就是等价类的边界，如果从一个等价类到另一个等价类的绝热路径需要穿过某个边界，那么我们就认为在这个边界上发生了相变，物质从一个相跨越到了另一个相。

上面的描述还是太抽象了，伟大的朗道发展了一套序参量理论，用于定量描述相变。这一套理论仅仅只基于下面简单的假设：[^1]

>1. 二级相变的两个相可以用一个局域序参量$m$来刻画。在高温相中序参量$m=0$，在低温相中$m\neq 0$。在临界点附近序参量连续地从零变为非零
>2. 在临界点附近，系统的自由能可以展开为序参量的幂级数
>3. 系统在平衡时序参量的取值对应系统自由能的极小值

朗道发现，物质相意味着某种有序性，这种有序性用序参量描述，而相变意味着这种有序性的自发性破缺。也就是说体系的对称群破缺到了某个子群。想一想不难发现下面的相变确实都对应某种新的物相的产生：

>- 空间平移:晶态固体(crystal solid)
>- 空间旋转:液晶(liquid crystal)
>- 自选旋转:磁体,铁磁(ferromagnetism),反铁磁(antiferromagnetism)
>- 规范对称:超导(superconductivity),超流(superfluid)
>- 时间反演:手型超导(chiral superconductivity),手性自旋液体(chiral spin liquid),圈电流(loop current)
>- 轨道对称:锰氧化物和铁基超导的轨道有序
>- 时间平移:时间晶体(time crystal)

这一度让人们认为凝聚态物理已经做完了，我们只需要关注对称性的破缺就行了。然而，对分数量子霍尔效应的研究发现其基态有非常多的简并。而且文小刚发现这种简并具有鲁棒性，也就是说在任何的微扰下都依然保持简并。这就非常奇怪了，这意味着这些很强的简并性并不是因为对称性造成的，不然微扰后对称性带来的简并早就破缺了。所以这个体系没有对称性，也就没有对称性哪来破缺，不能用局域序参量的语言来描述。而FQHE显然构成了一种新的物相，文小刚称之为**拓扑序**。这种物态有一个鲜明的特征：体系存在长程纠缠。另外，如果用重整化群方法描述相变，相变点对应重整化群变换的不动点，从某几个拉氏量（物态）出发，在重整化群变换下最终达到某个不动点，那么这几个拉氏量描述的就是相同的物态。但是对于拓扑序，不动点并不是一个孤立的点，就像是一条割线一样，尽管两个拉氏量描述同一个物态，重整化群变换后依然可能落入不同的不动点。这也是长程纠缠的重要后果之一。

故事到这里远远没有结束，直到今天，我们对拓扑序的完整理论相隔甚远，文小刚在arXiv: 0903.1069种提出了**对称保护拓扑物态(SPT)**。他利用改良后的张量网络重整化群方法研究了下面具有$\mathbb{Z}_2\times \mathbb{Z}_2$对称性的一维spin-1链：

$$
H=\sum_i\left(\mathbf{S}_i\cdot\mathbf{S}_{i+1}+U(S^z_i)^2+BS_i^x\right)
$$

> 张量网络重整化群方法其实就是利用对于格子模型，可以把场位形翻译成格点上的一堆张量取值，那么配分函数可以改写成张量迹：
> 
>$$
>\int\mathcal{D}\phi(\mathbf{x},t)\mathrm{e}^{-\int\mathcal{L}}=\sum_{\{\phi_i\}}\Pi T_{\phi_i\phi_j\phi_k\phi_l}\equiv \operatorname{tTr}\otimes_i T
>$$
>
> 那么不动点就会对应到一个张量，重整化群方法便可以做粗粒化来迭代计算这个不动点，从而分析相变

文小刚发现体系存在四个物态，大致有下面的图像描述：

![Haldane Phase](\img\posts\topological_order\1.png)

这里$Z_2^y$和$Z_2^x$可以用$\mathbb{Z}_2$对称性破缺来描述，有意思的是中间的Haldane态，这个态不能用对称性破缺来描述，所以有可能是一个拓扑序，但是如果你对他施加任意一个微扰，大部分情况下，他最终都会重整化群变换流动到Trivial Phase的不动点，所以看起来他又不是一个拓扑序，或者说是trivial的拓扑序。但是这个态的性质和trivial的拓扑序又有很大的不一样，所以他应当是一个新的物相。这里注意前面我说了是在**大部分情况微扰下**。事实证明，如果我们在微扰时，一直保持时间反演，空间反演和空间平移对称性，那么在这些微扰下，相是鲁棒的。所以这些对称性把这个物相保护了。如果我们忽略掉这些对称性，这个物相就是一个trivial的拓扑序。这也就是所谓SPT序，这个序有两个显著的特征，首先体系是短程纠缠，而且体系在bulk中的激发是trivial的，没有任意子这样一般拓扑序都有的激发态，但是在boundary上体系的行为非常不一样，体系有非平庸的边界态。而目前大热的拓扑绝缘/超导体实际上就是一个SPT序。

直到现在，拓扑序这种新奇量子物态以及是凝聚态物理研究的前沿问题，本讲义主要介绍最原始的拓扑序理论，并用张量范畴的语言进行处理。SPT序也有非常深奥的数学物理，比如利用代数拓扑的方式可以对其进行完全分类[^2]。文小刚老师论文中有一副图，很不要脸的对拓扑序理论的历史地位进行了总结：

![拓扑序的历史地位](\img\posts\topological_order\2.png)

# 什么是拓扑序？

> 拓扑序就是：gapped liquid without symmetry

这个without symmetry很好理解，按照前面一节的说法，就是要求体系相变不能用局域序参量的朗道相变对称性破缺理论描述。这个gapped liquid需要解释一下。

大部分时候我们都是在讨论格点模型，数学严格来说，格点模型就是一堆点的集合，每个点上赋予一个希尔伯特空间，总的希尔伯特空间是他们的直积。体系的演化由一个哈密顿量进行描述。如果这个哈密顿量只包含局域相互作用，那么这个体系就称为是anomaly-free的，否则就是anomalous的。

> 对于任意一个$n$d的拓扑序$A_n$，无论是否有反常，都可以看作是某个$n+1$d的拓扑序$C_{n+1}$上的边界理论，这个$C_{n+1}$的构造其实是唯一的，记为$\mathrm{Bulk}(A_n)$

既然是格点模型，那肯定就有个尺度，我们假设有一系列对应模型不同尺度的哈密顿量序列$\{\mathcal{H}^{(k)}\}$，在热力学极限下，体系趋于无限大，$k\to\infty$。倘若存在一个固定的$\Delta>0$，使得体系的能谱可以根据$\Delta$宽度的能量窗口划分为两类，一类是小于这个窗口的（称为基态），一类是大于这个窗口的（称为激发态），而窗口内部没有能谱取值。而且在热力学极限下，基态的能量个数是有限多个，而且与$k$无关，而且基态能量在热力学极限下都趋近于某个定值，也就是说热力学简并下基态完全简并。这样的体系就成为gapped liquid。看下面的图你大致就懂了：

![gapped liquid](\img\posts\topological_order\3.png)

下面格点定义的$n$d拓扑序称为平凡拓扑序，记为$1_n$：

1. 每个格点上的希尔伯特空间是一个有限维向量空间$V$，$P$是上面的厄米算符，且有唯一一个基态$\ket{\psi}$
2. 哈密顿量为：$H:=\sum_iP_i,\quad P_i=\cdots\otimes1\otimes P\otimes1\otimes\cdots$


## 什么是其中的可观测量？
后面我们不仅是在热力学极限下考虑问题，而且我们还是在绝对零度下考虑问题（这也是量子相变的发生处），也就是关注于体系的基态。那么通常凝聚态的一些关联函数等观测量其实就失效了，而且体系由于在绝对零度，也不会有基态，但是我们不是经常说拓扑激发么？这是哪来的激发？

其实，这是我们在考虑往原始的哈密顿量里面加一些微扰，而且考虑local的微扰，比如某个点上的，或者某个边上，数学上看就是把低维数的格点嵌入到高维数中，物理上看就是加一些缺陷。在长波极限（$T\to 0$）的粗粒化下这些缺陷是非常重要的可观测量，也称为**拓扑缺陷**。比如对于点缺陷，由于哈密顿量变了，那么这时的基态也就不是原先的基态了，而好像是在加入微扰的那个点上产生了波函数多了个波包，所以这时就可以看作是一个粒子的激发。同理，$1$d的缺陷对应domain wall（畴壁）。后面$2+1$D拓扑序我们主要考虑点缺陷。另外，类似于物相，我们并不是太关注某个缺陷本身，而是关注他的等价类，也就是说把一类缺陷进行统一打包处理。比如一个空间平移对称的格点，每个格点上的缺陷可以看作是同一类，后面的范畴论描述中把这一类看作是范畴中的一个对象。而不是每个格点上的缺陷看作一个对象。

拓扑序上所有的拓扑缺陷的集合称之为topological skeleton。是拓扑序上的附加结构，是拓扑序研究的重点。另外，前面说过缺陷是低维格点到高维格点的嵌入，所以我们也可以讨论缺陷本身是否构成一个拓扑序，是不是gapped。后面讨论中我们都认为我们考虑的拓扑序上的拓扑缺陷本身也是一个拓扑序。

拓扑缺陷是一种宏观上的可观测量，其微观上的实现依赖于**local operator**，字面意思就是在某个局域上定义的算符。这里就有个非常微妙的点：什么是local？到底多小才能算作是local？这一点其实是非常人为的，但是请**相信**，这些人为因素最终导致的范畴是等价的！下一节对于实际的模型，我们会给出一些local operator的示例。

把这些local operator作用于某个态上，宏观上相当于对其进行“屏蔽”，也就是粗粒化和长波极限操作。而我们说过，拓扑序上面的可观测量应该在这样的屏蔽操作下不变。所以如果$\ket{\psi}$是一个拓扑激发态（点缺陷）[^3]，那么对于局域算符$A\in\mathrm{Loc}(C_n)$ [^4] ，$A\ket{\psi}$应当也是这一类拓扑激发中的态，那么拓扑激发作为这一类态的集合，就可以定义为在local operator作用下不变的希尔伯特空间的子空间。所以如果我们找到了某个拓扑激发态$\ket{\psi}$，就可以用下面的方式生成一个包含$\ket{\psi}$的最小拓扑激发：

$$\{A\ket{\psi}|A\in\mathrm{Loc}(C_n)\}$$

显然，任何拓扑序都有一个平凡的拓扑激发$\mathbb{1}$，其对应没有任何缺陷的缺陷。用上面的语言就是基态生成的拓扑激发，所以所有基态构成一类拓扑激发，平凡缺陷。要想直到任何一个拓扑激发态是不是平凡的，只要看能不能用一个local operator把他湮灭（屏蔽），重新让其回到基态就够了。

鉴于历史背景，后面考虑的$2+1$D拓扑序中的点缺陷也被称为**任意子(anyon)**。

## With Symmetry

如果我们考虑gapped liquid本身，把后面without symmetry去掉，拓扑序的概念还可以向前进一步，这个时候还会包括对称性自发破缺的物态，SPT/SET物态，而且我们还可以考虑格子模型的构造本身是bosonic的还是fermionic的，对应bosonic和fermionic的拓扑序。比如如果构造格子模型时，不同格点上面的算符满足的时对易关系，也就是说：

$$
[A_i,A_j]_{i\neq j}=0
$$

那么就称为bosonic拓扑序，后面要讲的toric model就是这种，后面举例也主要举这一类例子，这两类例子在范畴论的处理上差不多，但是分类时有些差别。另外如果满足的时反对易关系：

$$
\{A_i,A_j\}_{i\neq j}=0
$$

就称为fermionic拓扑序，显然这会让体系本身多一个$\mathbb{Z}_2$对称性。

# Kitaev toric model

这个模型可以看作是格点上的规范场论（2+1D），只是规范群是个有限群而不是一般的李群。

## $\mathbb{Z}_2$ 格点模型

为了讨论的简单起见，这里考虑正方晶格，实际上由于此模型是重整化群变换的不动点，所以不同的晶格最终对应的拓扑序范畴是等价的。和一般的格点模型不一样，态是在格点上，这里我们在每个边上赋予希尔伯特空间，其实就是在用对偶晶格的观点看问题，这样对后面的描述更有利。假设每个边上放一个spin-$\frac12$，考虑顶点和面上的两类算符：

$$
A_v=\sigma_x^1\sigma_x^2\sigma_x^3\sigma_x^4,\quad B_p=\sigma_z^3\sigma_z^4\sigma_z^5\sigma_z^6,\quad \sigma_a^i\equiv\cdots\otimes1\otimes\sigma_a\otimes1\otimes\cdots
$$

这里是以下图所示情况为例：

![toric model](\img\posts\topological_order\4.png)

定义哈密顿量为：

$$
H:=\sum_v(1-A_v)+\sum_p(1-B_p)
$$

注意到$A_v,B_p,H$之间都是互相对易的，所以基态应当对应所有的$A_v=1,B_p=1$，而任意的激发态相当于对$A_v,B_p$做别的限制，或者说在格点上加入别的**边界条件**。现在我们来考虑这个模型的基态简并度，格点总共有$2^E$种状态，上面的约束总共有$V+F$个，每个约束会把允许的状态数减半，所以还剩下$2^{E-V-F}=2^{2g-2}$个状态。这里我们使用了Euler示性数公式，假设模型定义在一般的亏格为$g$的可定向闭曲面上面。然而上面的约束并不是互相独立的，实际上下面的式子恒成立：

$$
\prod_vA_v=\prod_pB_p=1
$$

注意这个式子成立的原因在于我们考虑的是闭曲面，全部乘上去每条边都考虑了两遍，最终得到的算符是$\prod \sigma^2\equiv 1$。最终得到的基态简并度为：

$$
\mathrm{GSD} = 2^{2g}
$$

这只和定义模型的世界面拓扑有关，拓扑序里面的拓扑，最早也有此意。同时这也意味着对于微扰，显然你把世界面挖个洞不算微扰，所以这个体系是有鲁棒性的，从此可以看到确实可以看作是一个拓扑序。

现在我们来看local operator如何定义，显然这些local operator应当由一串$\sigma_x$和$\sigma_z$构成，实际上，他们可以由下面的**string operator**生成：

$$
S^z(t)=\prod_{j\in t}\sigma_j^zS^x(t^{\prime})=\prod_{j\in t^{\prime}}\sigma_j^x
$$

这里$t$表示晶格中的边组成的一根弦，$S^z$就是所有弦上的边上作用$\sigma_z$，而$t^\prime$对应对偶晶格种的边组成的弦，$S^x$就是所有弦穿过的边上作用$\sigma_x$。这些弦可能是下图所示的闭弦：

![闭弦算符](\img\posts\topological_order\5.png)

这类算符实际上等价于在闭弦围成的区域内的$A_v$或$B_p$算符乘积。比如上图：

$$
S^z(c)=\prod_{p\in\mathrm{Bulk(c)}} B_p,\quad S^x(c')=\prod_{v\in\mathrm{Bulk(c')}} A_v
$$

显然这类闭弦算符作用于真空态上，或者闭弦围成的区域内不含任何缺陷，都不会改变原先的态，但是如果中间有缺陷，就会像AB效应一样得到一个相位，这个后面再说。

还有一类是开弦算符：

![开弦算符](\img\posts\topological_order\6.png)

这类算符有个特点是与所有的$A_v,B_p$都对易，**除了端点**，且和端点上对应的算符反对易。所以如图所示，把$S^z(t)$作用于真空态上会导致端点上的两个态变成$A_v=-1$，这意味着我们利用这个local operator生成了两个在端点上的点缺陷。但是之前说过，local operator作用在真空上的结果从物理上看还是平凡缺陷。所以应当看作是我们在一个端点上激发了例子，而另外一个端点上激发了一个反粒子！对于$S^x(t')$同理。

当然，你或许会想，我直接考虑下面的弦算符，不就只在一边产生粒子了吗？反粒子都跑到无穷远去了，这不就从真空态凭空产生一个非平凡的拓扑激发了吗？

![无穷长弦算符](\img\posts\topological_order\9.png)

问题就在于无限长的弦算符不是local operator！而且实际应用上，我们会把local operator长度进行一个更小的截断，比如限制在上图中的圆圈内部。当然，无论你怎么选截断，实际上就是在对local operator进行不同的人为定义，如前文所说，最终得到的拓扑序范畴都是等价的。比如，如果你选的截断很小，那么原先由一个很长的开弦生成的粒子和反粒子就可以看作是两个实粒子，而不是平凡拓扑激发，这就像是两个虚粒子隔得太远了，挣脱了纠缠，变成了两个实粒子。

我们甚至还能将此模型的基态显式构造出来，为此我们选取$\sigma^x$表象$\ket{\pm}$。而且把$\ket{-}$用红线在图中表示，那么任意一个态都可以在图上用一根开弦或者闭弦表示出来，他们构成一组基底[^5]：

![弦态](\img\posts\topological_order\7.png)

显然，任何闭弦态之间都可以用一串$B_p$算符联系起来：$\ket{\psi}=B_p\ket{\phi}$，那么当多个闭弦态叠加组成基态时，他们的叠加系数应当相等，因为基态满足$B_p=1,\forall p$：

$$
\begin{aligned}
&\ket{\psi_0}=c_1\ket{\psi}+c_2\ket{\phi}+\cdots=c_1 B_p\ket{\phi}+c_2\ket{\phi}+\cdots\\
\Rightarrow &\ket{\psi_0}=B_p\ket{\psi_0}=c_1\ket{\phi}+c_2B_p\ket{\phi}+\cdots=c_2\ket{\psi}+c_1\ket{\phi}+\cdots
\end{aligned}
$$

由此可以构造出基态的形式：

![基态](\img\posts\topological_order\8.png)

从拓扑上看，这正好对应环面的$\mathbb{Z}_2$一阶同调群：$H^1(\mathrm{torus;}\mathbb{Z}_2)\simeq \mathbb{Z}_2\oplus\mathbb{Z}_2$。这再次说明了基态时拓扑不变量！

## 点缺陷

前面构造local operator时其实已经明显地看出了两个点缺陷：

$$
\begin{cases}A_{v_0}|\psi_{v_0}\rangle=-|\psi_{v_0}\rangle,\\A_v|\psi_{v_0}\rangle=|\psi_{v_0}\rangle\text{ for all vertices }v\neq v_0,\\B_p|\psi_{v_0}\rangle=|\psi_{v_0}\rangle\text{ for all plaquettes }p.&\end{cases}
$$

这个点缺陷我们称之为$e$

$$
\begin{cases}B_{p_0}|\psi_{p_0}\rangle=-|\psi_{p_0}\rangle,\\B_p|\psi_{p_0}\rangle=|\psi_{p_0}\rangle\text{ for all plaquettes }p\neq p_0,\\A_v|\psi_{p_0}\rangle=|\psi_{p_0}\rangle\text{ for all vertices }v.&\end{cases}
$$

这个点缺陷我们称之为$m$。当然他们也可以用微扰后哈密顿量的基态表示，比如说$e$对应：

$$
H^{\prime}=H+2A_{v_0}=\sum_{v\neq v_0}(1-A_v)+\sum_p(1-B_p)+(1+A_{v_0}).
$$

这里有的人就要犯迷糊了，$e$我理解是在一个点上定义的，但是$m$这看起来好像是定义在一个面上的啊！这哪能看作是点缺陷？和local operator的解释类似，所谓“点”应当理解为在某个尺度上看，就像是我们对local operator的local的定义上也要先人为规定一个尺度，在这个尺度内的才成为local，我们不断强调，无论你如何选取这样的人为定义，最终得到的结果都是一样的，我们这里只是选取了一个非常合理且自然的尺度约定。

显然，不同点的$e$($m$)可以用$S^z$($S^x$)联系起来：

![拓扑激发等价类](\img\posts\topological_order\10.png)

所以，我们对$e$和$m$的定义不用纠结于具体在哪个点上，他们都是由local operator联系的等价类！在范畴论的语境下会打包一起研究。点缺陷显然不止这两种，我们还可以把$e$和$m$组合起来得到一个点缺陷叫做$f$，定义在$m$面和$e$格点上：

$$
\begin{cases}A_{v_0}|\psi_{v_0,p_0}\rangle=-|\psi_{v_0,p_0}\rangle,\\A_v|\psi_{v_0,p_0}\rangle=|\psi_{v_0,p_0}\rangle\text{ for all vertices }v\neq v_0,\\B_{p_0}|\psi_{v_0,p_0}\rangle=-|\psi_{v_0,p_0}\rangle,\\B_p|\psi_{v_0,p_0}\rangle=|\psi_{v_0,p_0}\rangle\text{ for all plaquettes }p\neq p_0.&\end{cases}
$$

如何判断$e$和$m$与$f$不等价呢？你可以试着画画，无论如何你怎么选取由string operator生成的local operator，你都无法把他们用local operator的作用联系起来。

由此我们便找到了$\mathbb{1},e,m,f$这四种互不等价的拓扑激发，实际上的拓扑激发远远不止这四种，后面我们会说明，这四种是最基本的！[^6]而且会进一步探究他们之间的代数结构。

## local operator algebras

所谓代数，就是线性空间加上一个乘法[^7]，对于任何一个代数，类似于环可以定义环上的模，我们也可以定义代数上的模：

> 代数$A$上的左模定义为一个向量空间$M$配备上一个双线性映射：
>
>$A\times M\to M, \quad (a,m)\mapsto a\cdot m$ 
>
>满足结合律，代数的幺元作为乘法单位元，其实说白了就是把线性空间的标量乘法的那个域，换成结构更丰富的代数。
>
>显然，要求的结合律$(a\cdot b)\cdot m = a\cdot(b\cdot m)$诱导了代数上的同态$\rho$。所以$(\rho,M)$，也就是代数上的左模结构构成了代数的一个表示。
>
> 如果存在$f:M\to N$使得$f(a\cdot m )=a\cdot f(m)$[^8]，那么就称两个左模是同态的！如果这个$f$还是一一映射，那么这两个左模（表示）等价。

比如共形场论中我们考虑Virasoro代数的表示，得到Virasoro模。而local operator显然构成了一个代数，而每一个拓扑激发可以看作是local operator algebra上的左模结构，也就是一个表示，因为按照前文的定义，拓扑激发在local operator作用下闭。找拓扑激发的过程其实就是在寻找local operator algebra的不等价表示！进一步，前面的$\mathbb{1},e,m,f$实际上是不等价且不可约表示！

> 比如对于$\mathbb{Z}_2$ toric model，$\xi=(v,p)$处[^9]的local operator algebra $\mathcal{L}(\xi)$由下面的元素生成：
> 
> $$
> A_v^2=B_p^2=1,\quad A_vB_p=B_pA_v
> $$
> 
> $\mathbb{1},e,m,f$对应的表示空间可以用下面的四个投影算符作用于整个希尔伯特空间得到：
> 
>$$
> P_{\pm\pm}:=\frac{1\pm A_v}{2}\frac{1\pm B_p}{2}
>$$
>
> 另外，这里$\mathcal{L}(\xi)$与$\xi$有关，这意味着我们把local一词限定在了下面的范围内：
> 
>![什么是local](\img\posts\topological_order\11.png)
>
> 这只是一个length scale的约定而已。或者说不同$\xi$处的代数结构也是完全一样的，我们完全可以只研究此处的代数结构即可。[^10]

对于任意维数拓扑序的点激发，我们都可以用local oprator algebra的不等价不可约表示的观点来看，但是，实际上二维拓扑序理论的代数结构比这丰富的多！

## 任意子的出现

![toric model 任意子编制](\img\posts\topological_order\14.png)

考虑$e$和$m$激发，利用闭弦算符将$e$粒子绕$m$一周，利用上图的闭弦算符于$B$算符的等价不难发现，由于$B_p$作用于$\ket{m}_p$上得到$-1$，所以饶了一圈之后体系并不是完全不变，而是会得到一个相位，而闭弦算符其实就是可以看作是绝热变换算符，而$-1$相位可以看作是Berry几何相位，类似于AB效应，来自于路径内部的非平凡缺陷。对于toric model，这个相位与boson,fermion子统计一样是$\pm 1$。但对于一般的模型，这个数可以是任意复数，这也是所谓任意子激发的来历。后面会更详细的探讨这个问题。

## [DLC]推广到任意有限群
这部分内容见[Kitaev03](https://arxiv.org/abs/quant-ph/9707021)，也是拓扑量子计算（用任意子做量子计算）的原型机。下面的内容于后面的主线内容联系不大，可以跳过。

考虑有限群$G$上定义的toric model。现在每条边上的希尔伯特空间是复数域上的群代数，也就是说以下面的群元素作为基底：

$$
\mathcal{H}_i = \operatorname{span}\left\{\ket{g}|g\in G\right\}
$$

定义下面四个算符：

$$
\begin{aligned}L_+^g|z\rangle&=\quad|gz\rangle&T_+^h|z\rangle&=\quad\delta_{h,z}|z\rangle\\L_-^g|z\rangle&=\quad|zg^{-1}\rangle&T_-^h|z\rangle&=\quad\delta_{h^{-1},z}|z\rangle\end{aligned}
$$

对于任意格点，我们还需要对其边上任意选取一个取向完成模型定义，比如下图：

![格点上的取向](\img\posts\topological_order\12.png)

不同的取向只会影响每个希尔伯特空间上基底的选取，另外上图右侧给出了由取向确定每个顶点和面上所作用的算符，其用于下面的$A_g,B_h$的定义：

$$
\begin{aligned}&A_g(s,p)=A_g(s)=\prod_{j\in\operatorname{star}(s)}L^g(j,s)\\&B_h(s,p)=\sum_{h_1\cdots h_k=h}\prod_{m=1}^kT^{h_m}(j_m,p)\end{aligned}
$$

这里我们假设local一词限定在$\xi=(s,p)$范围内，这样$\mathcal{L}(\xi)$上的local operator algebra由上面定义的算符生成：

$$
A_fA_g=A_{fg}B_hB_i=\delta_{h,i}B_hA_gB_h=B_{ghg^{-1}}A_g
$$

这里我们把$\xi$的依赖隐藏了[^11]。这个代数结构称为群$G$的quantum double，记为$\mathcal{D}(G)$，上面的算符实际上并不构成一组线性基底，线性基底为：

$$
D_{(h,g)}=B_{h}A_{g}
$$

乘法可以很简洁的写成下面的形式：

$$
D_{\boldsymbol{m}}D_{\boldsymbol{n}}=\Omega_{\boldsymbol{m}\boldsymbol{n}}^{\boldsymbol{k}}D_{\boldsymbol{k}}\Omega_{(h_1,g_1)(h_2,g_2)}^{(h,g)}=\delta_{h_1,g_1h_2g_1^{-1}}\delta_{h,h_1}\delta_{g,g_1g_2}
$$

利用下面的方式定义共轭：

$$
A_g^\dagger=A_{g^{-1}}B_h^\dagger=B_hD_{(h,g)}^\dagger=D_{(g^{-1}hg,g^{-1})}
$$

上面的代数成为了一个$\mathrm{C}^{\*}$代数。不过$\mathrm{C}^{\*}$代数结构是通常的量子力学体系都有的，真正的代数结构远比此丰富。在进一步研究之前我们还是先写下体系的哈密顿量：[^12]

$$
H=\sum_s(1-A(s))+\sum_p(1-B(p)),\quad A(s)=N^{-1}\sum_{g\in G}A_g(s,p)\quad B(p)=B_1(s,p)
$$

注意，在讨论$\mathbb{Z}_2$ toric model时，local operator是一堆弦算符，而上面定义的$A,B$都是在某个点上定义的[^13]，那么作用于真空态产生一对正反粒子激发的弦算符在这里的类比应该是什么？首先肯定不是前面定义的$D$，因为：

$$
D_{\boldsymbol{k}}\left|0\right\rangle=\varepsilon_{\boldsymbol{k}}\left|0\right\rangle\quad\varepsilon_{\left(h,g\right)}\equiv\delta_{h,1}
$$

实际上在这里弦会被加厚成一根**丝带（Ribbon）**：

![Ribbon Operator](\img\posts\topological_order\13.png)

对应的丝带算符可以由下面的方法定义。首先如果两个丝带$F^{m}(t_1),F^{n}(t_2)$首尾相接，那么总的丝带算符可以递归定义为：

$$
F^{\boldsymbol{k}}(t_1t_2)=\Omega_{\boldsymbol{mn}}^{\boldsymbol{k}}F^{\boldsymbol{m}}(t_1)F^{\boldsymbol{n}}(t_2)\Omega_{(h_1,g_1)(h_2,g_2)}^{(h,g)}=\delta_{g,g_1g_2}\delta_{h_1,h}\delta_{h_2,g_1^{-1}hg_1}
$$

所以我们只需要定义最小的丝带算符，显然，上面丝带的最小单元为两类三角形[^14]，一类以丝带上面那条实线为底（连接两个相邻的对偶晶格格点），一类以丝带下面那条虚线为底（连接两个响相邻的晶格格点），其它两条边都是剖分格点时产生的点画线。第一类的丝带算符定义为：

$$
F^{(h,g)}=\delta_{g,1}L^h
$$

这里，$L$作用于与虚线相交的实线边，显然这条边有一个端点作为三角形的顶点，以这个点来确定$L_\pm$。

第二类定义为：

$$
F^{(h,g)}=T^{g^{-1}}
$$

这里，$T$作用于实线三角形底边，显然这条边由两个单纯形交出来，其中一个单纯形就是三角形本身，以这个单纯形和边的取向关系来确定$T_{\pm}$。

代数的乘法为：

$$
F^{\boldsymbol{n}}(t)=\Lambda_{\boldsymbol{k}}^{\boldsymbol{m}\boldsymbol{n}}F^{\boldsymbol{k}}(t)\quad \Lambda_{(h,g)}^{(h_1,g_1)(h_2,g_2)}=\delta_{h_1h_2,h}\delta_{g_1,g}\delta_{g_2,g}
$$

所以在任意一个丝带$t$上我们都定义了一个代数$\mathcal{F}(t)$，这个代数和前面$\mathcal{D}(G)$一样是和位置没关系的，只在具体实现上需要一个具体的丝带，所以我们简记为$\mathcal{F}$。

这个代数除了乘法，前面定义的丝带连接其实定义了丝带算符的一个分解（余乘法），所以$\mathcal{F}$其实是一个**Hopf代数**。

进一步，不难发现$\mathcal{F}$的分解前面的系数$\Omega$正好是$\mathcal{D}(G)$的乘法，而任何一个$D$算符其实可以利用$\mathcal{F}$的乘法定义分解为：

$$
\Delta(D_{\boldsymbol{k}})=\Lambda_{\boldsymbol{k}}^{\boldsymbol{mn}}D_{\boldsymbol{m}}\otimes D_{\boldsymbol{n}}
$$

<p>
$\mathcal{D}$上的单位元是$1_\mathcal{D}=\mathrm{e}^{(h,g)}=\delta_{g,1}$，而这个$\mathrm{e}^*$定义了$\mathcal{F}$上的余单位元，也就是$\mathcal{F}\to\mathbb{C}$的映射，且$\mathrm{e}(\mathcal{F}^{\mathbf{k}})=\mathrm{e}^{\mathbf{k}}$。同理，$\mathcal{F}$的单位元，$\mathcal{D}$上的余单位元为${1}_{\mathcal{F}}={\epsilon}_{\mathbf{k}}F^{\mathbf{k}}$。除了乘法和余乘法，Hopf代数还要求一个对极映射(antipode)$S$，这里也有：
</p>

$$
S(F^\boldsymbol{m})=\mathrm{S}_\boldsymbol{k}^\boldsymbol{m}F^\boldsymbol{k}\quad S(D^\boldsymbol{m})=\mathrm{S}_\boldsymbol{k}^\boldsymbol{m}D^\boldsymbol{k}\\
S_{(h_{2},g_{2})}^{(h_{1},g_{1})}=\delta_{g_{1}^{-1}h_{1}g_{1},h_{2}^{-1}}\delta_{g_{1},g_{2}^{-1}}
$$

更进一步我们还能在$\mathcal{D}\otimes\mathcal{D}$中找到一个元素，记作$R=\mathbb{R}^{\boldsymbol{jl}}D_{\boldsymbol{j}}\otimes D_{\boldsymbol{l}}$：

$$
R^{(h,g)(v,u)}=\delta_{h,u}\delta_{g,1}\quad\bar{R}^{(h,g)(v,u)}=\delta_{h^{-1},u}\delta_{g,1}
$$

满足

$$
\bar{R}^{\boldsymbol{ik}}\Omega_{\boldsymbol{ij}}^{\boldsymbol{n}}\Omega_{\boldsymbol{kl}}^{\boldsymbol{m}}R^{\boldsymbol{jl}}=R^{\boldsymbol{ik}}\Omega_{\boldsymbol{ij}}^{\boldsymbol{n}}\Omega_{\boldsymbol{kl}}^{\boldsymbol{m}}\bar{R}^{\boldsymbol{jl}}=\mathrm{~e}^{\boldsymbol{n}}\mathrm{e}^{\boldsymbol{m}}
$$

这其实就是$R\bar{R}=1_{\mathcal{D}\otimes\mathcal{D}}=\bar{R}R$，且其满足下面的公理：

$$
\begin{aligned}\Lambda_{\boldsymbol{k}}^{\boldsymbol{ij}}\mathrm{~R}^{\boldsymbol{km}}&=\mathrm{~R}^{\boldsymbol{il}}\mathrm{~R}^{\boldsymbol{jn}}\Omega_{\boldsymbol{ln}}^{\boldsymbol{m}}&\mathrm{R}^{\boldsymbol{mk}}\Lambda_{\boldsymbol{k}}^{\boldsymbol{ji}}&=\mathrm{~\Omega}_{\boldsymbol{ln}}^{\boldsymbol{m}}\mathrm{~R}^{\boldsymbol{li}}\mathrm{~R}^{\boldsymbol{nj}}\\\Lambda_{\boldsymbol{k}}^{\boldsymbol{ji}}&=\mathrm{~\Omega}_{\boldsymbol{lmr}}^{\boldsymbol{i}}\Omega_{\boldsymbol{pns}}^{\boldsymbol{j}}\mathrm{~R}^{\boldsymbol{lp}}\mathrm{~\Lambda}_{\boldsymbol{k}}^{\boldsymbol{mn}}\mathrm{~\bar{R}}^{\boldsymbol{rs}}\end{aligned}
$$

这其实就对应$R$矩阵需要满足Yang-Bexter方程，而$R$的存在性说明了$\mathcal{D}$还构成一个拟三角Hopf代数。利用$R$矩阵可以描述从同一点处出发的两个丝带之间的对易关系：

$$
\begin{aligned}&F^{\boldsymbol{m}}(t_1)F^{\boldsymbol{n}}(q_1)\quad=\quad R^{\boldsymbol{ik}}\Omega_{\boldsymbol{ij}}^{\boldsymbol{n}}\Omega_{\boldsymbol{kl}}^{\boldsymbol{m}}F^{\boldsymbol{j}}(q_1)F^{\boldsymbol{l}}(t_1)\\&F^{\boldsymbol{m}}(t_2)F^{\boldsymbol{n}}(q_2)\quad=\quad F^{\boldsymbol{i}}(q_2)F^{\boldsymbol{k}}(t_2)\Omega_{\boldsymbol{ij}}^{\boldsymbol{n}}\Omega_{\boldsymbol{kl}}^{\boldsymbol{m}}\bar{R}^{\boldsymbol{jl}}\end{aligned}
$$

![同一点出发的两条丝带的两种情况](\img\posts\topological_order\15.png)

也可以描述丝带算符与端点算符之间的对易关系：

$$
\begin{aligned}&D_{\boldsymbol{j}}(a)F^{\boldsymbol{l}}(t)\quad=\quad\Lambda_{\boldsymbol{j}}^{\boldsymbol{ik}}\tilde{\mathrm{S}}_{\boldsymbol{k}}^{\boldsymbol{n}}\Omega_{\boldsymbol{nm}}^{\boldsymbol{l}}F^{\boldsymbol{m}}(t)D_{\boldsymbol{i}}(a)\\&F^{\boldsymbol{l}}(t)D_{\boldsymbol{j}}(b)\quad=\quad\Omega_{\boldsymbol{mm}}^{\boldsymbol{l}}\tilde{\mathrm{S}}_{\boldsymbol{k}}^{\boldsymbol{n}}\Lambda_{\boldsymbol{j}}^{\boldsymbol{ki}}D_{\boldsymbol{i}}(b)F^{\boldsymbol{m}}(t)\end{aligned}
$$

这里$a,b$是丝带$t$的两个端点。$\tilde{S}$是skew antipode $\tilde{S}_i^mS_n^i=S_j^m\tilde{S}_n^j=\delta_n^m$。

Kitaev在其论文中证明了，local operator algebra 其实完全由$\mathcal{D}(G)$生成[^15]，上面的论述说明了$\mathcal{D}$和$\mathcal{F}$构成对偶的Hopf代数，而且$\mathcal{D}$还构成一个拟三角Hopf代数。

Chern-Simons模型作用量长这样：

$$
S(A)=\frac{k}{8\pi^2}\intop_M\mathrm{Tr}(A\wedge dA+\frac{2}{3}A\wedge A\wedge A)
$$

而这个Kitaev格点模型的低能有效场论极限是2+1D Dijkgraaf-Witten模型，也就是Chern-Simons模型的有限群版本[^17]，具体定义比较复杂，详见[^16]。

## 其它模型

拓扑序研究的一大重点就是构造一些格点模型，除了这里介绍的toric model，还有比如Kitaev honeycomb模型，这部分我觉得大黄毛老师https://zhuanlan.zhihu.com/p/659329750 介绍的很好，但是更侧重于物理本身，更多数学相关见arXiv:cond-mat/0506438。另外还比如Levin-Wen弦网凝聚模型，doi:10.1103/PhysRevB.71.045110。


# 参考

[^1]: 对于这一套理论的详细介绍可以见 https://zhuanlan.zhihu.com/p/374627577
[^2]: https://arxiv.org/abs/0901.2686
[^3]: 也就是$H+\delta H$的基态，而且我们认为微扰对希尔伯特空间的影响不大，也就是说$\ket{\psi}$依旧是原先$H$描述体系的希尔伯特空间中的元素。
[^4]: 局域这个词虽然前面说过有人为的因素，但是常理来想，他肯定是某个拓扑激发附近定义的，意思就是$x$处的拓扑激发，应当对应作用$x$处定义的局域算符。但是按照前面说的，我们更关注于**类**而不是实例本身，所以到后面的范畴论语言，拓扑激发和局域算符都淡化了具体在哪个点上，而是抓住共性，把这一类进行打包研究。后面toric model的例子中会更多地看到这一点。定义拓扑激发和局域算符的时候是在具体某个点上的，但是最终得到的代数结构是和你具体哪个点没关系的。
[^5]: 这里我们假设在环面上讨论
[^6]: 就像是线性空间一样我们找到了一组基，后面只用研究清楚这组基底就好了
[^7]: 有点像环的定义，实际上代数是比环更丰富的结构，代数比环多要求构成一个线性空间，也就是说多了个来自域的标量乘法
[^8]: 这里偷了个懒，两个表示对应的乘法我都统一用$\cdot$表示了
[^9]: 这里$v,p$是相连的
[^10]:其实这是一个非常理想的近似，在实际的物理系统中，往往不同点处的代数结构不一样，这个时候范畴的描述也会变得十分复杂，后文研究的系统我们都假定不同点处的代数结构是一样的，但是在合适的地方我们会对实际的物理系统做一些argue
[^11]:毕竟和$\mathbb{Z}_2$的情况一样，代数结构与此无关。
[^12]: 尽管一直到现在哈密顿量都没有发挥出描绘演化的作用，毕竟我们只关注基态，重要的就是哈密顿量与$A,B$算符对易
[^13]: 或者说是一段非常短的弦
[^14]: 观察前面的图片，我们已经对格点进行了重心重分为一个二维曲面上的单纯剖分，所以诱导出了丝带上的单纯剖分
[^15]: 那篇论文中我还没有完全理解这一点
[^16]: 这也是我目前还未完全参透的东西，原始文献为： https://doi.org/10.1007/BF02096988
[^17]: 连续群版本（群流形上定义）对应WZW模型，可以在CFT的框架下进行研究