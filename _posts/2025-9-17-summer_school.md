---
layout: post
title:  杭州高等研究院暑期学校
categories: [physics, math]
tags: [hep-th,math-ph,cmt,cs]
image:
  feature: summer_school.webp
---

8.5-8.16参加高能物理暑期学校，网址如下：
```
https://indico.itp.ac.cn/event/330/overview
```
这个帖子用来记录一下，简略写写。

<!--more-->

# 解析共形自举 [Agnese Bissi]

这个概念接触的比较早，最初看CFT学Blumenhagen的书的时候他的第二章最后面就讲了不少有关自举的东西，不过后面没怎么深入学习这个topic，唯一学过一点的就是数值自举算Ising model的临界指数那些，不过我对解析的自举更感兴趣一些，正好借这个机会学学。参考文献是：

```
Bissi A, Sinha A, Zhou X. Selected Topics in Analytic Conformal Bootstrap: A Guided Journey. Phys Rept 2022;991:2238. https://doi.org/10.1016/j.physrep.2022.09.004.
```

不过我应该没时间看这篇review，上课听听就好。

## 自举方程

首先是一些符号约定，后面我们主要考虑初级场的关联函数，初级场表达为$O_{\Delta,s}^i$，这里$s$表示其处于$SO(d)$子群^[1]的自旋$s$表示，$i$是表示所带的$SO(d)$指标，不过后面我们为了简便起见把指标略去。$\Delta$就是其共形维数。在共形场论中$D$可以类比为哈密顿量，根据下面的对易关系：

$$
[D,P_\mu] = P_\mu,\quad [D, K_\mu] = -K_\mu
$$

可以看出$P_\mu$可以用来降低$\Delta$一个单位得到次级场，比如：

$$
[P_\mu,O_{\Delta,r}^i(0)] = \partial_\mu O_{\Delta,r}^i(0)
$$

等式右边的偏导形式其实很一般，次级场和初级场之间的联系其实就是作用微分出来的，这个可以见Blumenhagen的书，书上面有个表格。

最简单的自举就是用共形对称性确定两点三点函数：

$$
\braket{O_{\Delta_1}(x_1),O_{\Delta_2}(x_2)} =C\frac{\delta_{\Delta_1,\Delta_2}}{x_{12}^{2\Delta_1}}
$$

由于我们总可以通过rescale算符把两点关联函数前面的系数设为1，所以两点关联函数的系数其实不算理论的有用信息。

$$
\braket{O_{\Delta_1}(x_1),O_{\Delta_2}(x_2)O_{\Delta_3}(x_3)} = \frac{C_{123}}{x_{12}^{\Delta_1+\Delta_2-\Delta_3}x_{13}^{\Delta_1+\Delta_3-\Delta_2}x_{23}^{\Delta_2+\Delta_3-\Delta_1}}
$$

三点关联函数系数以及初级场的共形维数就称为**CFT data**，这玩意儿是决定一个CFT的关键信息。可能不少人会觉得CFT里面你可以用OPE把多点函数约化为两点函数从而求解[^2]，所以OPE系数应该才是CFT data。这么说也对，但是注意到三点函数本身就可以用OPE约化为两点函数，所以OPE系数其实是可以用三点函数关联系数完全确定的，比如二维CFT：

>$$
>\begin{aligned}\phi_i(z)\phi_j(w)=\sum_{k,n\geq0}C_{ij}^k\frac{a_{ijk}^n}{n!}\frac{1}{(z-w)^{h_i+h_j-h_k-n}}\partial^n\phi_k(w)\end{aligned}
>$$
>
>其中：
>
>$$
>\begin{aligned}a_{ijk}^n&=\binom{2h_k+n-1}{n}^{-1}\binom{h_k+h_i-h_j+n-1}{n}\\C_{ijk}&=\sum_lC_{ij}^ld_{lk}\end{aligned}
>$$

不过我们这里对OPE的符号约定有点不同：[^3]

$$
O_i(x_1)O_j(x_2) = \sum_k\lambda_{ijk}(x_1,x_2,y,\partial_y) O_k(y)
$$

这里约化后的点在$y=\frac{x_1+x_2}{2}$，而且求和只对初级场求和，因为$\lambda$包含偏导就已经暗含次级场了。唯一需要知道的就是共形对称性可以把$\lambda$确定到差一个常数，这个常数就是三点关联函数里面的常数：

$$
\lambda_{ijk} = C_{ijk}\hat{\lambda}_{ijk}
$$

这里$\hat \lambda$的形式我们是知道的，注意上面没有求和约定。至于四点关联函数，虽然共形对称性无法确定到只差一个常数，但是可以确定到差一个函数：

$$
\braket{O_{\Delta_1}(x_1),O_{\Delta_2}(x_2)O_{\Delta_3}(x_3),O_{\Delta_4}(x_4)} = \frac{g(u,v)}{(x_{12}^2)^{\Delta_1+\Delta_2}(x_{34}^2)^{\Delta_3+\Delta_4}}\left(\frac{x^2_{24}}{x^2_{12}}\right)^\frac{\Delta_{12}}{2}\left(\frac{x^2_{14}}{x^2_{13}}\right)^\frac{\Delta_{34}}{2}
$$

这里交比定义为：

$$
u = \frac{x_{12}^2x_{34}^2}{x_{13}^2x_{24}^2},\quad v = \frac{x_{14}^2x_{23}^2}{x_{13}^2x_{24}^2}
$$

我们分析简便起见，我们考虑四个初级场都一样的情况：

$$
\braket{O^4(x_1,x_2,x_3,x_4)} = \frac{g(u,v)}{x_{12}^{2\Delta}x_{34}^{2\Delta}}
$$

除了上面直接从共形对称性去确定四点关联函数，你也可以用OPE替换前面两个和后面两个算符，从而化简为两点关联函数的和式：

$$
\begin{aligned}
\braket{O^4(x_1,x_2,x_3,x_4)} &= \sum_k C_{OOO_k}\hat\lambda(x_1,x_2,y,\partial_y)\hat\lambda(x_3,x_4,y',\partial_{y'})\braket{O_k(y)O_k(y')}\\
&:= \sum_{\Delta,s}\frac{C_{OOO_k}^2G_{\Delta,s}(u,v)}{x_{12}^{2\Delta}x_{34}^{2\Delta}}
\end{aligned}
$$

由于前面说过$\hat\lambda$是完全由CFT data完全定下来的，所以$G$也是完全由CFT data定下来的，比如对于$d=4$：[^4][^7]

$$
G_{\Delta,s}^{\Delta_{12},\Delta_{34}}(z,\bar z)= \frac{1}{(-2)^s}\frac{z\bar z}{z-\bar z}\left(K_{\Delta+s}(z)K_{\Delta-s-2}(\bar z)-(z\leftrightarrow \bar z)\right)
$$

其中交比被我们用复坐标写为$u=z\bar z$，$v=(1-z)(1-\bar z)$。[^6]且：

$$
K_\beta(x):=x^\frac{\beta}{2}{}_2F_1\left(\frac{\beta-\Delta_{12}}{2},\frac{\beta+\Delta_{34}}{2},\beta,x\right)
$$

另外注意到我们在讲OPE讲关联函数的时候其实都隐含了一个径向排序在里头，所以实际上OPE是有交换性的，所以我们在使用OPE的时候不一定要前两个后两个为一组，比如我们可以中间两个为一组，也就是说利用这种**交叉对称性**我们可以得到$g(u,v)$的限制：

$$
g(u,v) = \left(\frac{u}{v}\right)^\Delta g(v,u)
$$

当然你也可以第一个和第三个为一组，不过得到的关系式没有给出更多的信息。把这个关系式翻译成用**共形块**$G$表达的版本即得到自举方程：

$$
\boxed{
\sum_{\Delta,s}C_{OOO_{\Delta,s}}^2 G_{\Delta,s}(u,v)=\left(\frac{u}{v}\right)^\Delta
\sum_{\Delta,s}C_{OOO_{\Delta,s}}^2 G_{\Delta,s}(v,u)
}
$$

## 双光锥极限

## 洛伦兹反演公式
我们想问能否直接从$g(u,v)$中提取CFT data？被Nima誉为当代费曼的Caron-Huot Simon对这个问题给出了肯定的回复[^11]。

>  当时上课这方面还听懂了不少，回头看笔记发现当时竟然这部分一个字都没记，估计是当时忙着写朱伟老师课的笔记，给忘了😂😂😂

[^1]: 这里$d$是时空维数
[^2]: 当然这涉及到OPE放到关联函数里面之后的收敛半径
[^3]: 后面统一用一个下指标标记共形维数和自旋
[^4]: 这里有上标，我们写下的是对于一般的四个场共形维数不同时的情况
[^6]: 暗含我们已经使用共形对称性让$x_1=0,x_2=(z,\bar z),x_3=(1,1),x_4=\infty$
[^7]: 后面不加说明都假定我们在考虑$d=4$
[^11]: arXiv: 1703.00278

# 量子相变[朱伟]

这门课主要考虑连续相变，序参量在相变点（或者说临界点好一点）处是连续变化的，所以至少是二阶相变。1970年Polyakov证明了二维Ising模型相变点附近可以用共形场论来描述，后面人们便猜测对于一般的模型也能这么做，而且临界点附近的物理其实是有一些universal的性质的，可能有些理论他们在微观结构上可以很不一样，但是在临界点附近却由同一个CFT描述。

CFT在相变点处的应用最出名的就是用共形维数去给出临界指数，临界指数本身最开始只能从实验上测到，后面朗道用序参量可以确定一些但是有些地方不太准，CFT提供了一种新方法。另外，前面说的是CFT data里面的共形维数给出的预测，而OPE系数可以给出在不动点附近重整化群流的稳定性，也就是说重整化群流在临界点附近流动时$\frac{dg}{dt}$按照$g$泰勒展开前面的系数是和OPE的系数有关的。

本堂课最主要的目的其实并不是假定已经存在共形对称性然后去做各种事情，而是去探讨微观层面上为啥临界点附近会出现CFT，或者说我们反过来，希望用体系的微观结构去看其临界点附近的CFT（如果有）会是什么样子。这就涉及到态算符对应，这里我们所讲的态算符对应是在说取径向量子化，那么体系就从$\mathbb{R}^d$的拓扑转变为了$S^{d-1}\times\mathbb{R}$的拓扑。而原先的dilation算符$D$就可以解释为$\mathbb{R}$虚时方向的平移算符，也就是哈密顿量，我们实际上有：

$$
\boxed{
E_n-E_0\propto \Delta_n-\Delta_0
}
$$

这里的$\Delta_0$对应的就是任意的conventional shift，我们后面选取$\Delta_0=0$。这样我们就可以把CFT里面的共形维数计算（至少差值的计算）转化为一个$S^{d-1}$拓扑上定义的量子理论的本征值问题。那么现在就是要问，对于一个$\mathbb{R}^{d-1}$上定义的量子理论，比如说凝聚态里面常常考虑的格点体系，我们应当如何把他在$S^{d-1}$上重新定义？对于$S^1$问题是简单的，我们只需要选取周期性边界条件就好了，但是对于二维体系，如果你选取通常的周期性边界条件显然得到的是$T^2\ncong S^2$。这个技术细节是后面我们需要考虑的重点。

## Haldane (Fuzzy) Sphere

考虑一个球面上自由运动的带电粒子，但是我们在球面的中心上放一个磁单极子，带荷$2s_0\phi_0$[^9]，其中$\phi_0:=h/e$。球面上的矢势显然为：

$$
\mathbf{A} = -\frac{s_0\phi_0}{2\pi R}\cot\theta\mathbf{e}_\phi
$$

这里$R$是球面半径，其上运动的带电粒子哈密顿量为：

$$
H = \frac{\hbar^2}{2mR^2}|\mathbf{P}|^2,\quad \mathbf{P}:=R \mathbf{e}_r\times\left(-i\mathbf{\nabla}+e\mathbf{A}\right)
$$

经过计算可以得到机械动量分量之间的对易关系为：[^8]

$$
[P_i,P_j] = i\epsilon_{ijk}\left(P_k-s_0r_k\right)
$$

这启发我们定义一个算符：

$$
\mathbf{L}:=\mathbf{P}+s_0\mathbf{r}\Rightarrow [L_i,L_j]=i\epsilon_{ijk}L_k
$$

这里的$\mathbf{r}$是粒子的位置算符。不难看到上面的算符具有角动量的形式，其满足的是$\mathfrak{su}(2)$李代数，所以本征值为$s(s+1)$。利用这个算符重写哈密顿量：

$$
H = \frac{\hbar^2}{2mR^2}\left(L^2-s_0^2\right)\Rightarrow E_s=\frac{\hbar^2}{2mR^2}\left(s(s+1)-s_0^2\right)
$$

我们后面主要考虑最低的能级，对应$s=s_0$，其实际上是$2s_0+1$简并的。注意虽然$\mathbf{L}$的能级和角动量算符的一致，但是其本征函数并非角动量算符那里的球谐函数（当然在$s_0=0$的时候两者是一致的），吴大猷和杨振宁具体计算了这个本征函数，对于基态能级对应的$s_0=s$，有：

$$
Y^{(s_0=s)}_{s,m}(\theta,\phi) = \sqrt{\frac{(2s+1)!}{4\pi(s-m)!(s+m)!}}\left(\cos\frac\theta2 \mathrm{e}^{i\phi/2}\right)^{s+m}
\left(\sin\frac\theta2 \mathrm{e}^{-i\phi/2}\right)^{s-m}
$$

这个函数其实行为更像是高斯函数而不是球谐函数，其实际上是集中在纬圆附近的波包，纬度由$m$决定，现在我们考虑多个带电粒子并且考虑他们之间的相互作用，考虑两体相互作用，哈密顿量可以用二次量子化写成如下形式：

$$
H_2 = \frac12\int dr\int dr' \bar\psi(r)\bar\psi(r')V(r-r')\psi(r')\psi(r)
$$

其中我们对于本问题可以选取最低朗道能级（**L**owest **L**andau **L**evel）投影，场用基态波函数展开为：

$$
\bar\psi(r)\sim\sum_{m=-s}^s Y_{s,m}(\theta,\phi)^{(s_0)}c_m^\dagger
$$

代入得到：

$$
H_2 = \frac12 \sum_{m_1,m_2,m_3,m_4} c^\dagger_{m_1}c^\dagger_{m_2}c_{m_3}c_{m_4}\bra{m_1,m_2} V\ket{m_3,m_4}
$$

其中：

$$
\bra{m_1,m_2} V\ket{m_3,m_4} = \int d\Omega_1d\Omega_2 \bar{Y}^{(s_0)}_{s_0,m_1}(\Omega_1)\bar{Y}^{(s_0)}_{s_0,m_2}(\Omega_2)V(r_1-r_2){Y}^{(s_0)}_{s_0,m_3}(\Omega_2){Y}^{(s_0)}_{s_0,m_4}(\Omega_1)
$$

这里$\Omega$是$(\theta,\phi)$的缩写，比较震惊的事实是这个积分是可以解析做出来的，首先我们用勒让德多项式展开势能：

$$
V(r_1-r_2) = \sum_{k=0}^\infty u_k P_k(\cos\theta_{12}),\quad P_\ell(\cos\theta_{12}):=\sum_{m=-\ell}^{m=\ell}\bar{Y}_{\ell m}(\Omega_1)Y_{\ell m}(\Omega_2)
$$

这里不带上标的$Y$就是球谐函数，或者说$s_0=0$的情况。比如对于$V(r)=\delta(r)$，$u_k=1$，再比如$V(r) = \nabla^2\delta(r)$，$u_k=-k(k+1)$。而前面的相互作用势的积分可以用下面更加一般的积分公式完全积分出来：

$$
\int d\Omega Y_{(s_1,m_1)}^{(Q_1)}(\Omega) Y_{(s_2,m_2)}^{(Q_2)}(\Omega) Y_{(s_3,m_3)}^{(Q_3)}(\Omega)=(-1)^{s_1+s_2+s_3}\left[\frac{(2s_1+1)(2s_2+1)(2s_3+1)}{4\pi}\right]^{\frac12}
\begin{pmatrix}s_1&s_2&s_3\\m_1&m_2&m_3\end{pmatrix}
\begin{pmatrix}s_1&s_2&s_3\\Q_1&Q_2&Q_3\end{pmatrix}
$$

这里我们使用了Wigner 3j符号，用$SO(3)$群CG系数定义为：

$$
\left.\left(\begin{array}{ccc}j_1&j_2&j_3\\m_1&m_2&m_3\end{array}\right.\right)\equiv\frac{(-1)^{j_1-j_2-m_3}}{\sqrt{2j_3+1}}\langle j_1m_1j_2m_2|j_3-m_3\rangle
$$

所以我们只需要知道势能在球谐函数下展开前面的系数便能知道全部的相互作用细节，不过注意我们的推导都是在LLL投影下进行的。

## Fuzzy球面上的「Ising」模型

现在我们需要在$S^2$上构建理论去研究临界点的行为，从而把CFT data的计算转化为对这个模型哈密顿量本征值的计算。前面已经说了直接考虑一个平面上的模型然后选取边界条件是不行的，我们这里考虑在Fuzzy Sphere上定义的模型。也就是说我们考虑LLL投影下的Fuzzy Sphere，利用LLL波函数构建一个赝旋量：

$$
n^\alpha(\Omega) :=\bar\psi(\Omega)\sigma^\alpha\psi(\Omega)
$$

这里$\psi$就是前面用$Y^{(s_0)}_{s,m}$展开给出的LLL波函数，$\sigma^i$是泡利矩阵，$\sigma^0$是单位矩阵，显然$n^0$可以解释为电子数密度。进一步我们假设体系中有$2s_0+1$个电子，注意到LLL是$2s+1$简并的，包括自旋自由度后就是$2\times(2s+1)$简并，分成$2s+1$个$\ket{\uparrow}$和$2s+1$个$\ket{\downarrow}$能态，那么显然这说明这样的体系填充数$\nu = 1$，或者说有一般的朗道能级被电子填充，还有一半是空穴。在上面定义电子之间相互作用的哈密顿量为：

$$
\begin{aligned}
H &= \int d\Omega_a d\Omega_b\left(n^0(\Omega_a)n^0(\Omega_b)-n^z(\Omega_a)n^z(\Omega_b)\right)+h\int d\Omega n^x(\Omega)\\
&=\int d\Omega_a d\Omega_b\left(n^\uparrow(\Omega_a)n^\downarrow(\Omega_b)\right)+h\int d\Omega n^x(\Omega)
\end{aligned}
$$

这里我们选取了表象：

$$
n^0:=n^\uparrow+n^\downarrow,\quad n^z:=n^\uparrow-n^\downarrow
$$

注意到上面的哈密顿量和Ising模型的很相似：

$$
H=-\sum_{\braket{i,j}}\sigma_i^z\sigma_j^z+h\sum_i\sigma_i^x
$$

但是上面我们考虑的理论是连续的模型而不是离散的格点模型，可以看到最近邻求和也变成了整个球面上的积分[^12]。不过他们两者相变的细节非常类似。首先是我们知道在$h=0$的时候Ising模型处于逆磁（FM）项，对应的解是$\ket{\uparrow\cdots\uparrow}$或者$\ket{\downarrow\cdots\downarrow}$，到我们这里Fuzzy Sphere上的模型不难看出$h=0$的解依旧是这个形式，只不过根据$Y^{(s_0)}$函数的图像，每个$\ket{\uparrow}$或者$\ket{\downarrow}$不是在一个格点上，而是以波包的形式在北极到南极离散化的那$2s+1$个纬圆上。同样的，在$h\to\infty$，Ising模型的解为$\ket{\rightarrow\cdots\rightarrow}$，到了Fuzzy Sphere，上面同样如此，只是每个$\ket{\rightarrow}$局限定义在纬圆上罢了。所以我们知道现在这个模型有类似Ising模型的相变形式，而且最重要的是它是定义在$S^3$球面上的，所以它在临界点附近的性质应当是右某个3d CFT刻画的，而且我们可以用态算符对应来计算CFT data。

注意到上面写出的哈密顿量其实有前面计算过的二次量子化的形式，所以实际上我们前面已经发展出了如何计算哈密顿量的技术，剩下的就是要讨论其临界点，这个技术细节我们省略，在凝聚态领域有高效的计算方法计算临界点附近哈密顿量的本征值和本征态。CFT data就像我们在共形自举那里说的，应该是$(\Delta,\ell)$的形式，Delta我们知道对应的是$H$的本征值，这里的角动量量子数$\ell$其实就对应本征态的角动量量子数。因为理论是定义在$S^2$上的，所以我们知道这个体系肯定是有个$SO(3)$对称性的，这个对称性对应的力学量算符我们肯定能找到，假设是$\mathbf{M}$，那么我们只需要计算$M^2\ket{\phi} = \ell(\ell+1)\ket{\phi}$就能知道$\ket{\phi}$对应的CFT算符的角动量，计算其本征能量便能知道$\Delta$。由此我们便把CFT data的计算问题转换为了哈密顿量本征值的计算问题。

## OPE系数的计算
前面我们利用定义在Fuzzy Sphere上的模型成功利用态算符对应[^16]计算了三维Ising模型的CFT的共形维数。更进一步其实我们可以用这个方法计算OPE系数，或者说primary operator的三点关联函数的系数。首先我们必须承认直接计算三点关联函数是非常麻烦的，但是我们其实可以利用一些技巧把他转化为一点函数的计算，思想其实非常简单。

首先注意到态算符定义告诉我们BPZ共轭的左矢为：[^17]

$$
\ket{\phi} = \lim_{r\to 0}\phi(r)\ket{0},\quad\bra{\phi} = \lim_{r\to\infty} r^{2\Delta_\phi}\ket{0}\phi(r)
$$

然后利用共形对称性告诉我们两点关联函数：[^18]

$$
\bra{0}\phi(r)\phi(0)\ket{0}_{\mathbb{R}^d}=\frac{1}{r^{2\Delta_\phi}}
$$

不过我们关注的是$S^{d-1}\times\mathbb{R}$几何[^19]，所以做一个$\tau=R\ln r$的变换，这个$R$就是我们Fuzzy球面的半径，对应primary operator也要变换：

$$
\phi'(\tau,\Omega):=\Lambda^{\Delta_\phi/2}\phi(r,\Omega),\quad\Lambda = R^{-2}\mathrm{e}^{\frac{2\tau}{R}}
$$

选取$\tau=0,-\infty$这两个特殊点，对应$r=1,0$，注意到前面说过的态算符对应，给出：

$$
\bra{0}\phi'(\tau=0)\ket{\phi'}_{\mathrm{cyl}} = \bra{0}\phi'(0)\phi'(-\infty)\ket{0}_{\mathrm{cyl}}=R^{-\Delta}
$$

同样的方法我们用到三点关联函数上面去，最终我们得到：

$$
\bra{\phi'_i}\phi'_j(\tau=0)\ket{\phi'_k}_{\mathrm{cyl}}=C_{ijk}R^{-\Delta_j}
$$

综合两个式子我们得到：

$$
\boxed{
C_{ijk}=\frac{\bra{\phi'_i}\phi'_j(\tau=0)\ket{\phi'_k}_{\mathrm{cyl}}}{\bra{0}\phi'_j(\tau=0)\ket{\phi'_j}_{\mathrm{cyl}}}
}
$$

注意现在实际上涉及到的都是圆柱几何上面的算符之间的关联函数，而且这个关联函数都是一个operator夹在两个state之间，而不是一个三个 operato夹在两个state（真空基态）之间，所以实际上现在的计算转换成一点关联函数的计算。态我们根据Fuzzy Sphere上面哈密顿量的本征态计算是可以得到的，需要点技术的是如何用Fuzzy Sphere模型这边的量子微观的算符去构造CFT这边的算符，这个细节就不深入讨论，总之是可以用对称性去用$n^\alpha$这些微观的算符构造CFT这边的算符的，所以整个计算都可以用数值模拟完全进行。至此我们便可以完全用Fuzzy Sphere上的模型的到CFT上面的信息，令人吃惊的事实是，用Fuzzy Sphere给出的CFT的信息甚至要比传统的CFT自举方法得到的更好，很多传统CFT自举得不到的CFT data在Fuzzy Sphere这边都能得到。

## 其它应用

既然描述Ising CFT这个方法是成功的，那么就告诉我们态算符对应需要的高维球面几何并非通过$S^1$这样的周期性边界条件实现，而是可以通过Fuzzy Sphere上构造模型实现。比如我们可以构造Lee-Yang相变CFT模型的Fuzzy Sphere版本，Lee-Yang理论的拉格朗日量长这样：

$$
L = (\nabla \phi)^2+(h-h_c)\phi+ig\phi^3
$$

这是一个非幺正的CFT，对应的Fuzzy Sphere上的哈密顿量为：

$$
H_{\text{Fuzzy}} = H_{\text{Ising}}+ig\int d\Omega n^z(\Omega)
$$

可以得到其中有个标量场共形维数是$0.21$小于三维模型幺正条件给的bound $\frac{d-2}{2}=0.5$，所以确实是非幺正的。再就是最近defect CFT很火，我们也可以用这个模型去分析，比如考虑原始的Ising模型里面加个线缺陷，比如哈密顿量变成：

$$
H = H_{\text{Ising}}+h\sum_{i\in\text{line}}s_i^z
$$

注意在径向量子化然后变换到圆柱坐标上，我们把每一个球形切片变换成某个$\tau$时刻的一个球，所以现在这个线缺陷应该变成Fuzzy Sphere上的南北极两个点缺陷，对应的Fuzzy Sphere上的哈密顿量为：

$$
H_{\text{Fuzzy}} = H_{\text{Ising}}+h n^z(\text{north pole})+h n^z(\text{south pole})
$$

剩下的就和前面一样了，数值模拟找临界点然后分析临界点附近的哈密顿量的谱便能找到体系对应的CFT的data。



[^8]: 注意前面在定义$H$的时候我们已经把$\hbar$给提取出来了而且前面乘了一个系数$R$，所以这里动量其实是没有量纲的。
[^9]: 根据狄拉克量子化，$s_0$可以是整数或者半整数。
[^12]: 当然你可以选取一个截断函数来刻画短程相互作用细节。
[^16]: 强调一下我们必须要用Fuzzy Sphere原因是我们想利用态算符对应，而这玩意儿是建立在$\mathbb{R}^d\to S^{d-1}\times\mathbb{R}$的共性变换上的所以我们需要一个几何上在$S^{d-1}$上定义的东东，然后期待他的谱会给我们$\mathbb{R}^d$上CFT的信息
[^17]: 如果你是从弦论背景学的CFT，那么你应该看过polchinski的教材，他那里表示BPZ共轭的左矢是用$\left\langle\left\langle\phi\right\|\right.$
[^18]: 这里假设我们已经对场做了rescaling使得两点关联函数系数始终是$1$。
[^19]: 叫圆柱几何，下面简写为cyl.。

# 圈图费曼积分[Roman Lee]

这老师英语咖喱味有点重[^10]，而且字迹太潦草了，所以一些细节就没记清楚，第一节课前面一直在讲QFT里面怎么计算量子反常磁矩，后面开始费曼积分正戏。费曼积分的数学理论似乎还能学的下去，不过这个老师主要关注的是一些非常细节的技术，所以听不太下去，我就挑一些技术写一下。
## Symanzik 多项式
首先我们知道圈图计算最重要的就是费曼积分参数化：

$$
\frac{1}{\prod_k A_k^{n_k}}=\frac{\Gamma\left(\sum_k n_k\right)}{\prod_k\Gamma(n_k)}\int\prod_k dx_k \delta\left(1-\sum_k x_k\right)\frac{\prod_kx_k^{n_k-1}}{\left(\sum_k A_k x_k\right)^{\sum_k{n_k}}}
$$

那么我们在圈图计算中碰到的一般的积分就可以表达为：[^5]

$$
\int\prod_j^L\left(\frac{d^d\ell_j}{i\pi^{d/2}}\right)\frac{1}{\prod_k D_k^{n_k}}=\frac{\Gamma\left(\sum_k n_k\right)}{\prod_k\Gamma(n_k)}\int\prod_k dx_k \delta\left(1-\sum_k x_k\right)\frac{\prod_kx_k^{n_k-1}}{\left(\sum_k D_k x_k\right)^{\sum_k{n_k}}}
$$

这里传播子显然有下面的二次型形式：

$$
\sum_{k}^P D_k x_k = A_{ij}(\ell_i\cdot \ell_j)+2B_i\ell_i + C,\quad A_{ij}=S^\mathrm{T}_{ik}S_{kj}
$$

显然我们可以通过线性变换$\ell$把上面的二次型换成标准型：

$$
\ell_i\mapsto \ell_i - A^{-1}_{ij}B_j\mapsto S^{-1}_{ij}\ell_j,\quad \sum_k D_k x_k = \sum_i\ell^2_i - B_iA_{ij}^{-1}B_j + C
$$

注意这个时候分母只和$\ell^2$有关，所以圈的积分其实是可以做出来的，因为角向可以先积分掉，最终得到：

$$
\boxed{
\mathcal{I} = \Gamma\left(\sum_k^P n_k-L\frac d2\right)\int\delta\left(1-\sum_k^Px_k\right)\left(\prod_k^P\frac{dx_k x_k^{n_k-1}}{\Gamma(n_k)}\right)\frac{F^{L\frac d2-\sum_k^P n_k}}{U^{(L+1)\frac d2-\sum_k^P n_k}}
}
$$

这里：

$$
U:=\det A,\quad F:=\left[C-B_i(A^{-1})_{ij}B_j\right]U
$$

他们分别是关于$\{x_k\}$的齐次$L$阶和$L+1$多项式，称为**Symanzik多项式**。

## IBP和主积分的微分方程

然后后面他就花了大约一节半课的时间来讲如何求解这个微分方程组，没听太懂捏，好像说这玩意儿涉及到希尔伯特第21问题之类的云云。幸运的是振幅这些人不但会技术，代码能力也很强，所以我们已经有自动处理这类方程的Mathematica代码了。有关这个微分方程组的细节不妨看看`1412.2296`，我来不及看这种技术文档了，所以后面这些略过。

另外，既然聊到这里了，近年来马滟青老师用辅助质量流方法构建微分方程计算费曼积分的技术非常值得关注，可以高效**数值**计算费曼积分，可以看`2201.11669`。我曾经试过去看这个方法的技术文档，不过都放弃了，最好的当然是本人报告我去听听，可惜马老师来武大做过两次报告我都因为一些原因错过了，希望后面有机会找个懂的人跟我讲讲大致思路是什么。

## Expansion by Regions

这是一种计算积分的渐进展开行为的方法，Vladimir A. Smirnov写成了[Mathematica程序](https://arxiv.org/pdf/1206.0546)。显然具体的证明和算法细节（这个方法的数学细节可以看`1111.2589`）一般人不会感兴趣，所以这里举一个例子来说明这个方法是怎么work的。这节课让我知道了这个程序包可以算一些复杂积分的渐近展开感觉也是很有意义，也算是学到了。这一部分上课最后一点没听太懂我自己看了下`2406.11475`来补充这一部分内容。

[^5]: 下面用$L$表示圈的个数，用$P$表示传播子个数，$d$是时空维数为了后面维数正规化方便。
[^10]: 但是好像是俄罗斯人，但是却又是亚洲脸。

# 大语言模型[谢丹]

谢老师顶替张潘老师上课，谢老师讲点$\mathcal{W}$代数多好，偏偏要来讲机器学习，前面两节课讲的感觉都是一些最基本的常识罢了。无非就是贝叶斯统计、反向传播算法以及梯度下降算符这些最基本的东东，我还以为会数学一些去讲万有近似定理，可惜知识提了一嘴甚至没说精确的表达形式。总之有些失望，不过写都写了还是在这里留一个公式比较好，就留一个机器学习中很重要的**Kullback-Leibler散度**的定义：

$$
KL(q|p):=-\int dx p(x)\ln\frac{q(x)}{p(x)}
$$

有下面两个性质：

> - $KL(q\|p)\geq 0$
> -   $KL(q\|p)=0\iff p(x)=q(x)$

听完后两节发现也没有任何其他信息量，这个讲座的定位根本不是告诉大家怎么做机器学习，或者说ai4s，纯粹只是一个当代LLM发展现状科普导论。。。。没啥意思，所以啥也不想记录。

# 量子混沌与虫洞 [陈一鸣]

涉及到全息原理量子引力之类的总是听起来非常fancy，我之前自己也看过一些全息原理黑洞热力学，不过没有继续深入看ER=EPR，火墙理论，黑洞信息丢失等topic，陈一鸣老师作为Maldacen的优秀学生，我对这一lecture还是非常期待的，希望自己能跟得上了解一些东西。不过我之后大概率不会做这方面的科研，这些fancy的东西对于我来说如果有时间学学我是愿意的，不过似乎自己对argue和conjecture少一些，严谨一些的偏数学的理论更加感兴趣（当然这部分感觉数学太难了不一定学得会，哈哈哈）

## 高温场论=黑洞

这一讲的大部分内容在我之前写的笔记中都有，虽然涉及到的例子不一样但是和刘洪的全息原理讲课的核心精神内核是一致的，所以这里只做一些简单的记录，具体去翻我之前的全息原理讲义。

谈到AdS/CFT有两个非常令人遗憾的事实：

- 虽然大概率AdS弦论和$\mathcal{N}=4$ SYM理论是完全对偶的，但是我们根本不知道如何完好定义AdS时空中的II B弦理论，所以我们只能在场论那边的强耦合极限下退化到AdS bulk里面的引力理论，然后用微扰的方法研究，不过依旧很遗憾这个微扰的引力理论处理起来也逼近我们人类的极限，所以人类目前能处理的也就是鞍点近似附近的行为
- 另外我们的宇宙目前来看应该是dS的，dS和AdS很相近，但是在全息上他们非常不一样，Polchinski曾经指出如果你硬像AdS/CFT里面我们去算bulk里面的引力的配分函数，你会发现那玩意儿不是一个正的实数，是有个虚数相位的，所以这个时候我们算出来的东西完全是make no sense的，或者说这玩意儿你必须得解释成别的，反正不是人类目前所理解的那个配分函数。

后面那一个问题我们不多谈，主要谈前面这个。这玩意而反正就告诉我们要对一些鞍点求和，但是问题来了，我们应该包括哪些鞍点？这是一个非常非常不平凡的问题，对于我们这里讨论的AdS时空而言它至少有三个鞍点：TAdS，big BH和small BH：[^15]

> Thermal AdS
> 
> $$
> ds^2 = \frac{dr^2}{1+r^2}+(1+r^2)d\tau^2+r^2d\Omega_{d-1}^2
> $$

> Euclidean AdS Schwarzschild BH
>
> $$
> ds^2 = \frac{dr^2}{f(r)}+f(r)d\tau^2+r^2d\Omega^2,\quad f(r):=1+r^2-\frac{\mu}{r^{D-3}}
> $$
>
> $D=5$时事件视界半径为：
>
> $$
> r_H = \frac12\left(\sqrt{1+4\mu}-1\right)
> $$
>
> 注意到这个时空是有雪茄（cigar）几何的，用一张图片表达如下：[^14]
>
> ![Euclidean BH](\img\posts\summer_school\Euclidean_BH.png)
>
> 为了让事件视界对应的那个雪茄的尖点圆滑，用惯用的wick转动方法分析近视界几何我们发现必须有：$\frac{f'(r_H)}{2}\beta=2\pi$。这告诉我们为了满足这个自洽方程$\mu$必须和$\beta$有关，最终得到$r_H$和$\beta$之间的关系式：
>
> $$
> r_H=\frac{\beta}{2\pi}\left(1\pm\sqrt{1-\frac{2\beta^2}{\pi}}\right)
> $$
>
> 这对应一大一小两个黑洞。

注意上面我们考虑的都是Euclidean的时空，$\tau\sim\tau+\beta$[^13]。根据$Z\sim e^{-S}$，或者我们需要从作用量来看，我们只取对$Z$贡献最大的，或者从热力学的角度讲我们需要看谁的自由能最小。那么自然这就会涉及到三个相之间的热力学相变。结论就是**低温时体系处于TAdS相。高温时处于big BH相**，后面我们考虑高温情况，也就是$\beta\to0$，所以我们说高温的CFT对应bulk AdS时空中存在一个黑洞，而且鞍点近似可以算出来配分函数形式为：

$$
\mathrm{e}^{-\beta F}:=Z_{\text{grav}}\sim \exp\left(\beta\frac{\pi^6}{8\pi G_N\beta^3}\right),\quad\beta\to 0
$$

最后陈一鸣老师讲了点最fancy的ER=EPR，核心思想和Rindler时空那里的是一样的。我们这里考虑的黑洞是在欧式几何下考虑的回到wick转动后的lorentz几何，回忆在Rindler时空那里Lorentz几何下Rindler只覆盖了整个时空的1/4，所以观察者由于对整个环境的无知会看到温度，在那里欧式情况下会回归到$R^4$，相当于做了个KK延拓。然后我们关注Minkowski时空基态和Rindler时空态之间的关系，计算Minkowski整个时空纯态的波函数可以用Euclidean Rindler时空下半部分（$t<0$）的路径积分做到，而在Rindler坐标系啊这表现为左边的虚拟的CPT反演的态和右边的态这两个态的边界条件下做路径积分，出来的结果就是下面这个样子：

$$
\ket{0}_M = \sum_n e^{-\pi E_n}\ket{n}_{\text{Rind}}\otimes \ket{n}_{\widetilde{\text{Rind}}}
$$

所以Rindler观者仅仅只是右边的部分，所以偏迹之后他看到了温度。同样的，我们在计算的时候也是把用Euclidean的cigar几何的下半部分去做，最后得到的同样是一个纠缠态，我们叫做Thermal Field Double State：

$$
\ket{\text{TFD}} = \sum \mathrm{e}^{-\frac{\beta}{2}E_n}\ket{n^*}\otimes\ket{n}
$$

这里的星号类似Rindler时空那里的，表示CPT反演的态。更妙的是，我们可以argue这两个态之间纠缠产生TFD是源自于原先Lorentzian的时空中的虫洞几何，见下图：

![ER=EPR](\img\posts\summer_school\ER=EPR.png)

中间的蓝线表达Einstein-Rosen桥，是一种Spatial的虫洞，所以ER=EPR。

## Maldacena's Information Puzzle

本节主要讲一个非常重要的Thermalization的问题，由此引申出Maldacena的信息疑难。我们先来看一下经典引力对两点关联函数的预言，回顾一下两点关联函数是说我们在边界上在$t=0$处加个source微扰$O(0)$，然后再在$t>0$时测量这俩玩意的关联，从引力的角度来看，$O(0)$的信息在AdS bulk里面传播，显然有些信息会传到horizon里面去，这一点从前面的Penrose图就能看出来，显然随着时间的越来越长，应该会有越来越多的信息传到horizon里面去，而一旦信息传到horizon里面去就无法再出来了，所以**关联函数应该随着时间衰减**，这是一个从引力这边我们能看到的基本事实。从全息字典上看就是bondary上的算符加进去对应bulk里面BH时空的微扰产生的一个基本事实。让我们更细致的看这件事情，假设$O$对应bulk里面的标量场$\phi$，对于两点函数我们只需要讨论到bulk里面的自由标量场就好了，高阶的修正项没贡献。

这个标量场在Bulk里面的运动方程是弯曲时空KG方程$\nabla^2\phi-m^2\phi = 0$，然后注意到我们可以用$SO(5)$对称性以及时间方向的傅里叶变换展开成下面这种基本模式的叠加：

$$
\hat\phi(r,\Omega)=\phi_\omega(r)Y(\Omega)
$$

然后带入我们就能得到关于$\phi_\omega$的本征值问题，何种模式可以在bulk里面传播呢？是任意的吗？显然不是，首先注意到我们的解肯定是随着时间衰减的，这告诉我们**$\omega$肯定要在复平面的下方**。

其次这个$\phi_\omega$方程是有两个线性独立的解的，我们考虑horizon附近的几何的解，大概张下面这个样子：

$$
\phi \sim A(\omega)\rho^{i\omega} \rho^{i\omega}e^{-i\omega t}+ B(\omega)\rho^{-i\omega}e^{-i\omega t}
$$

这里的$\rho$是黑洞附近的rindler时空坐标$ds^2=d\rho^2-\rho^2dt^2+r_H^2d\Omega^2$。然后我们来考虑本征值问题的边界条件，AdS/CFT对偶中当我们在考虑bulk内的场的经典解时，为了ADM能量守恒，我们还需要在无穷远处加上边界条件[^20]，这对应需要给定$B/A$的值。

另外我们考虑horizon附近的行为，因为bulk中的解常常涉及到horizon里面的边界条件。使用光锥坐标$X^\pm = \pm\rho e^{\pm t}$，这个坐标的好处是更好的分析事件视界附近的情况，上面的解改写为：

$$
\phi \sim A(\omega)(-X^-)^{i\omega} \rho^{i\omega}e^{-i\omega t}+ B(\omega)(X^+)e^{-i\omega t}
$$

这里的关键点在于我们现在考虑的AdS bulk里面是有黑洞的，所以除了和一般的零温情况无穷远处要加边界条件以外，我们还需要在事件视界这个地方加个边界条件，原因就是上面的方程由于存在虚数指数，所以在$X^-=0$的地方是会非解析的，那么注意$X^-=0$对应的是$t\to+\infty$，也就是对应到未来事件视界的地方，这个非解析性很危险，说明我们的信息在越过事件视界的时候不是光滑地越过的，所以我们需要：

$$
\boxed{
A(\omega) = 0
}
$$

至于$B(x)$，他那一项涉及到的$X^+=0$是过去事件视界，我们的信息肯定是往未来光锥里面走的，所以这一项无所谓，我们不用对其施加任何限制。

把前面所有这些考虑全部加起来，我们得到bulk内传播的那些频率，我们叫做**Quasi Normal Modes**。对于我们考虑的黑洞解大概长下面这个样子：

![QNM](\img\posts\summer_school\QNM.png)

然后关联函数就长这个样子：

$$
\braket{O(t)O(0)}_{\beta}\sim \sum_{\omega_{\text{QNM}}}d_{\omega_{\text{QNM}}}\mathrm{e}^{-i\omega_{\text{QNM}}t}
$$

看起来很完美对吧，随着时间一直衰减，和引力这边直观的解释也很对的上。但是别忘了关联函数这玩意儿是量子涨落，我们从CFT这边可以这样看：

$$
\begin{aligned}
\braket{O(t)O(0)}_{\beta} &= \frac1Z\operatorname{Tr}\left[e^{-\beta H}e^{iHt}O_He^{-iHt}O_H\right]\\
&=\frac1Z \sum_{n,m}e^{-\beta E_n} e^{i(E_n-E_m)t}|\bra{n}O\ket{m}|^2
\end{aligned}
$$

下标$H$表示海森堡绘景，下一行我们省略了这个下标。上面是从正则系综的角度考虑的，让我们从微正则系综的角度来重新审视这个关联函数。在为正则系综这边我们把$e^{iE_nt}$看作是一个随机变量$r_n$而且我们认为不同$n$的$r_n$之间是互相独立的随机变量，所以后面我们求和去求关联函数的时候都只需要考虑对角相的贡献，非对角项的贡献因为随机变量取值独立在求和平均的意义下会相互抵消。这个随机变量由于是一个相位，所以显然有$\overline{\|r_n\|^2}$，这里$\overline{\bullet}$表示求随机变量的时间平均值。

另外我们把矩阵元$O_{nm}:=\bra{n}O\ket{m}$也看作是一个随机变量，然后注意到关联函数$\braket{O(t)O(0)}_{\beta}$应该是$\mathcal{O}(1)$，然后注意到$Z$在微正则系综里面$\mathcal{O}(e^S)$，$S$是体系的熵，然后注意到求和号会对总共$e^S$个态求和，而且注意到这里是两个指标求和所以应该贡献$\mathcal{O}(e^{2S})$，所以我们发现应该有：

$$
\braket{|O_{nm}|^2}\sim e^{-S}
$$

现在来用上面从场论视角下直接计算关联函数得到的等式关注一下$t\to +\infty$关联函数的行为。首先用随机变量表达上面的关联函数为：

$$
\braket{O(t)O(0)}_{\beta} = \frac{1}{e^S}\sum_{n,m}r_n\bar r_m |O_{nm}|^2
$$

在时间平均的意义下上面随机变量的求和应当是$0$，也就是说：

$$
\overline{\braket{O(\infty)O(0)}_{\beta}}=0
$$

但是注意模方的平均值：[^21]

$$
|\braket{O(\infty)O(0)}_{\beta}|^2\sim\frac{1}{e^{2S}}\sum_{n,m}|r_n|^2|r_m|^2|O_{n,m}|^4\sim\frac{1}{e^{2S}}\cdot e^{2S}\cdot e^{-2S}
$$

也就是说并非和引力那边预言的关联函数应当是在无穷远处衰减，而是前面一段确实衰减，到了后面某个时候涨落效应非常显著，虽然均值是$0$，但是有个非常快速的震荡，震荡的幅度非零，大概是$e^{-S}$。

这出现了一个疑难，我们完全不知道如何从引力这边解释关联函数在无穷远时间处反而开始震荡这一行为，而不是单纯的衰减，这就称之为**Maldacena's Information Puzzle**。当然根本原因是我们人类不知道如何完全计算这个两点函数，我们只会算一些近似的不能再近似的行为。所以看来解释这一点需要迂回地去做。

最后注意到似乎这个行为由$e^{iE_nt}$和$O_{nm}$这两个随机变量造成，那我单纯如果只有一个随机变量$e^{iE_nt}$或者单纯只有一个随机变量$O_{nm}$，这种开头衰减后面震荡的行为还存不存在呢？答案是肯定的，我们来看单纯只需要$e^{iE_nt}$就能产生的行为，我们叫做**Spectral Form Factor**，定义是对配分函数做解析延拓：

$$
\text{SFF}:=|Z(\beta+it)|^2=\left|\sum_n e^{-(\beta+i t)E_n}\right|^2
$$

或者在微正则系综的语境下去考虑：[^22]

$$
Y_{E,\Delta}(t) := \sum_{E_n\in\left[E-\frac\Delta2,E+\frac\Delta2\right]} e^{-iE_nt}
$$

结论是我们仍可以看到单纯由$\{E_n\}$驱动而不涉及到边界CFT上算符插入而导致的前期衰减后期震荡的行为：

![SFF](\img\posts\summer_school\SFF1.png)

这个更简单的模型能帮我们一窥这种行为是如何在boundary两点关联函数上发生的。

## 随机矩阵模型

我们argue得到相位相消热化导致两点关联函数随时间衰减的一个非常重要的前提是我们假设那些相位$e^{-iEt}$是相互独立的随机变量，也就是说我们没有考虑到$\{E_1,\ldots,E_n\}$之间相互关联的效应，而这种相互关联的效应，至少在系综平均的意义下可以由某个矩阵模型去描述，所以这里我们介绍一些有关的矩阵模型的重要的picture。

矩阵模型其实就是一个量子力学，考虑一个$L\times L$的厄米矩阵模型系综，配分函数可以表示如下：

$$
Z=\int\prod_{i,j}^LdM_{ij}e^{-L\operatorname{Tr}V(M)}
$$

对$M$进行对角化为$M=U\Lambda U^\dagger$，可以证明测度之间有下面的关系：

$$
\prod_{i,j}^LdM_{ij}\propto\mathcal{D}U\prod_{i}^Nd\lambda_i\prod_{i<j}|\lambda_i-\lambda_j|^2
$$

重点是测度变换的Jacobian和$U$无关，所以我们完全可以把$U$的自由度先积分掉[^23]，反正得到的是一个无关的比例系数罢了，归一化的时候就没了，所以我们得到：

$$
Z\propto\int\prod_{i=1}^Ld\lambda_ie^{-L\sum_i V(\lambda_i)+2\sum_{i<j}\log|\lambda_i-\lambda_j|}
$$

重点是接下来我们需要去考虑$L\to\infty$的行为，这个时候我们最好把积分测度变成连续的，也就是说我们考虑连续的随机变量$\lambda$，其分布由谱函数$\rho_0(\lambda)$给出，也就是说$\rho_0(\lambda)d\lambda$表示有多少个本征值取值在$\lambda\sim\lambda+d\lambda$。后面我们考虑归一化之后的$\rho:=\rho_0/L$。那么我们现在分析的重点就是这个谱函数的行为，作用量是$\rho(\lambda)$的泛函，用连续性随机变量上面的配分函数就可以用路径积分重新写为：

$$
Z\propto\int\mathcal{D}\rho[\lambda]\exp\left(L^2\int d\lambda\rho(\lambda)V(\lambda)-L^2\int d\lambda_1 d\lambda_2\rho(\lambda_1)\rho(\lambda_2)\log|\lambda_1-\lambda_2|\right)
$$

显然这个式子是可以做鞍点近似的形式，假设鞍点在$\rho_s(\lambda)$处，我们考虑鞍点附近的行为，考虑$\delta\rho = \rho-\rho_s$，那么鞍点到最低的第二阶的作用量形式为：

$$
I_{\text{quadratic}} = -L^2\int d\lambda_1 d\lambda_2\delta\rho(\lambda_1)\delta\rho(\lambda_2)\log|\lambda_1-\lambda_2|
$$

进行傅里叶变换：

$$
\delta\rho(\lambda)=\int\frac{ds}{2\pi}\delta\rho(s)e^{is\lambda}
$$

我们得到$\delta\rho$理论的真空配分函数函数：

$$
\begin{aligned}
Z &= \int \mathcal{D}\delta\rho[s]\exp\left(-\left(\frac{L}{2\pi}\right)^2\int d\lambda_1 d\lambda_2\int ds_1ds_2\delta\rho(s_1)\delta\rho(s_2)e^{is_1\lambda_1+is_2\lambda_2}\log|\lambda_1-\lambda_2|\right)\\
&=\int \mathcal{D}\delta\rho[s]\exp\left(-\left(\frac{L}{2\pi}\right)^2\int \frac12d\lambda_+ d\lambda_-\int \frac12 ds_+ds_-\delta\rho(\frac{s_++s_-}{2})\delta\rho(\frac{s_+-s_-}{2})e^{i\frac{s_+\lambda_++s_-\lambda_-}{2}}\log|\lambda_-|\right)\\
&=\int \mathcal{D}\delta\rho[s]\exp\left(-\left(\frac{L}{2\pi}\right)^2\int  d\lambda_-\int d\hat s\delta\rho(\hat s)\delta\rho(-\hat s)e^{i\hat s\lambda_-}\log|\lambda_-|\right)\\
&=\int \mathcal{D}\delta\rho[s]\exp\left(\left(\frac{L}{2\pi}\right)^2\int d\hat s\delta\rho(\hat s)\left(\frac{\pi}{|\hat s|}+2\pi\gamma\delta{(\hat s)}\right)\delta\rho(-\hat s)\right),\quad\gamma\approx 0.577216\\
&=\int \mathcal{D}\delta\rho[s]\exp\left(\left(\frac{L}{2\pi}\right)^2\int d\hat s\delta\rho(\hat s)\left(\frac{\pi}{|\hat s|}\right)\delta\rho(-\hat s)\right)
\end{aligned}
$$

第二个等号我们定义了$x_\pm = x_1\pm x_2$，然后把$\lambda_+$先积分掉得到$\delta(s_+)$，第三个等号我们把$s_+$再积分掉，第五个等号注意到$\delta\rho(s=0)=\int d\lambda\delta\rho(\lambda)=0$。注意到最后我们得到的理论实际上是一个gauss的二次的理论，所以是个自由的理论，两点关联函数就是传播子，就是：

$$
\braket{\delta\rho(s_1)\delta\rho(s_2)}=\left(\frac{2\pi}{L}\right)^2\frac{|s_1-s_2|}{2\pi}
$$

注意到当$\lambda_1=\lambda_2$的时候这个两点关联函数发散，意味着能级之间的排斥效应，就是越是相同的本征值越是不可能同时出现。这种能级排斥效应可以universal的用Wigner Surmise去描述，他告诉我们对于随机矩阵模型，得到任意两个本征值之间的差值$s=\|\lambda_i-\lambda_j\|$的概率分布$p(s)$大致上可以用下面的函数近似：

$$
p_\beta(s)=a_\beta s^\beta e^{-b_\beta s^2},\quad a_{\beta}=2\frac{\left(\Gamma(\frac{\beta+2}{2})\right)^{\beta+1}}{\left(\Gamma(\frac{\beta+1}{2})\right)^{\beta+2}},b_{\beta}=\frac{\left(\Gamma(\frac{\beta+2}{2})\right)^{2}}{\left(\Gamma(\frac{\beta+1}{2})\right)^{2}}
$$

图像大概长下面这个样子：

![p_beta](\img\posts\summer_school\p_beta.svg)

别忘了上面我们是在large L的条件下在鞍点展开附近分析，所以实际上$\lambda_1-\lambda_2\sim\frac 1 L$的时候只取最低阶分析就完全不够了，不过神奇的是其实高阶项的行为我们也是可以分析出来的，回到我们的问题，我们想计算SFF，这里我们考虑计算$Y$，如果我们考虑$\{E_1,\ldots,E_n\}$之间的关联由某个随机矩阵模型描述，那么我们可以写下：[^24]

$$
\begin{aligned}
\braket{|Y|^2} &\sim \left\langle{\left|\sum_i e^{-i\lambda_i t}\right|^2}\right\rangle \sim \left\langle\int d\lambda_1 \rho(\lambda_1)e^{-i\lambda_1 t} \int d\lambda_2\rho(\lambda_2)e^{+i\lambda_2 t}\right\rangle\\
&=\left|\int d\lambda\rho_s(\lambda)e^{-i\lambda t}\right|+\int d\lambda_1\lambda_2\braket{\delta\rho(\lambda_1)\delta\rho(\lambda_2)}e^{-i(\lambda_1-\lambda_2)t} + \text{higher order}\\
&\sim \text{decay by time} + |t| + \text{higher order}
\end{aligned}
$$

第二行我们利用了$\rho=\rho+\rho_s$进行展开，最后一行就带入了$\delta\rho$的两点关联函数前面得到的形式。这里的平均是对矩阵系综进行平均，注意到在时间不大的时候第一项主导，所以相位相消是我们预测的一个递减的图像，然后时间增大慢慢的第二项主导，所以会有一个线性增加的效应，最后到某个时候我们说了低阶微扰不适用了，后面的高阶修正实际上会给出一个平台解，也就是大$t$的时候变得平缓，图像长下面的样子：

![矩阵模型分析的SFF系综平均值](\img\posts\summer_school\SFF2.png)

不要忘了我们上面考虑的是对系综进行平均了的图像，所以真实的情况应当是在上面的曲线附近进行震荡，这就是右边的图像。有意思的是，我们上面的分析完全不依赖于具体的矩阵理论是任何矩阵系综都具有的universal的性质，然而最终得到的结论是如果我们考虑的谱之间关联是用一个矩阵系综描述的，那么至少在系综平均的意义下我们能够解释SFF随时间变化的行为。

最后，提一下，上面分析中第一项我们叫做disconnected项，如果我们把他去掉，也就是把衰减的项去掉，再去分析，叫做SFF的connected项，得到的系综平均的图像长下面这个样子：

![SFF系综平均值的connected部分](\img\posts\summer_school\SFF3.png)

这里前面波浪线这一段是和具体的理论有关的，取决于你用的是什么矩阵系综，而后面的线性项完全主导的那一部分是universal的和你具体理论无关的，是矩阵模型固有的东西。所以我们可以用矩阵模型去部分解释SFF的这一行为。

## Double Cone Wormhole

原谅我比较愚钝，这部分实在是没有跟上，所以我只能记一些自己觉得还算听明白的一小部分内容，放一些图片水一水得了，具体的涉及到的哪怕一点点的计算细节确实都没有跟上，希望后面真正学学量子引力了再去了解。参考文献是[1806.06840](https://arxiv.org/pdf/1806.06840)。

[^13]: 后面我们选取$\Lambda = -\frac{(D-1)(D-2)}{2}$的约定使得$\ell_{\text{AdS}}=1$，这里$D=d+1$是时空维数。另外我们把$S^5$这个internal space后面也扔掉。
[^14]: 虽然我感觉更像是condom。
[^15]: 这里我们考虑的渐近AdS时空具有$S^{D-1}$边界，而不是一般的具有$\mathbb{R}^{D-1}$边界的时空，后者不需要考虑TAdS解。
[^20]: 回忆求解标量场在bulk里面传播的时候standard、alternate quantization那些玩意儿。
[^21]: 注意我们已经用了由于随机变量独立求和只需要求对角项从而把四个求和号约化为两个求和号。
[^22]: 我问了一鸣老师，显然$Z$的计算要比$Y$简单不少，不过在AdS5的情况下后者要更well-define一些，不过其它情况下一般大家不去区分这个subtle的地方。
[^23]: 还有一个好处是由于考虑的是厄米矩阵所以本征值都是实数，现在积分只需要考虑实数积分。
[^24]: 这里其实有一步简化，在求$Y$微正则系综配分函数的时候我们需要在一个很窄的本征值的window里面去求和，但是这里我们忽略了这一点。



# 广义对称性 [郑云钦]

郑老师一直在讨论一些非常具体的例子，而前面关于系统性理论的介绍非常简略，导致我到后面完全不知道他在干啥，所以这部分我还是不要把我一些零零散散记的东西放上来比较好，不然误导自己也误导可能的看客。

# AdS3/CFT2 对应 [Matthias Gaberdiel]

这个讲义的目标就是最终去证明AdS/CFT对偶，但是显然我们离这一点就很远，这一讲主要是关注低维的AdS3/CFT2的版本，因为在这个版本下实际上Maldacena和Ooguri指出这个版本的AdS3里面的某些弦理论[^25]可以用一个WZW模型去描述，而对偶的边界上的CFT是$\text{sym}_N(T^4)$ Orbifold上面定义的一个CFT，所以有希望从纯粹CFT上的分析来说明这两边确实是对偶的。不过本讲座只讲更简单的Bosonic的版本，不过思路是差不多的。

## WZW模型
让我们首先来介绍一下WZW模型，这部分建议看这篇[ Lorenz Eberhardt的很棒的讲义](https://www.conferences.itp.phys.ethz.ch/esi-school/Lecture_notes/WZW%20models.pdf)。WZW模型就是世界面在$S^2$上，靶空间在某个群流形$G$上的sigma model，sigma model的作用量为：

$$
S_0 = \frac{1}{4\lambda^2}\int dzd\bar z \operatorname{Tr}\left(g^{-1}\partial_\mu g g^{-1}\partial^\mu g\right)
$$

对这个玩意儿求变分我们得到运动方程：

$$
\partial_\mu J^\mu = 0,\quad J^\mu := g^{-1}\partial^\mu g
$$

用复平面坐标写成：

$$
\partial\bar J + \bar\partial J =0
$$

也就是说我们找到了一个守恒流，但是我们从共形场论这边知道，对于二维共形场论左右手解耦，这个守恒流应当是全纯和反全纯，但是现在这个流的形式显然无法拆分成全纯和反全纯的两个，这两个方程是耦合在一起的，这其实意味着这样的一个sigma model是没有一个共形对称性的，我们需要添加一项WZ项使得其成为一个CFT，最终的作用量为：

$$
S = S_0+k\Gamma[g],\quad \Gamma[g]:=-\frac{i}{12\pi}\int_{B} d^3 y \epsilon_{\alpha\beta\gamma}\operatorname{Tr}\left({\tilde g}^{-1}\partial^\alpha\tilde g {\tilde g}^{-1}\partial^\beta\tilde g {\tilde g}^{-1}\partial^\gamma\tilde g \right)
$$

这里$k\in\mathbb{Z}$注意最后面一项是纯粹的拓扑项，这里$\partial B=S^2$，而$\tilde g$是$g$在$B$上的延拓，其值与选取的$\tilde g$或者$B$没有关系，最终得到的结果只差一个$2\pi\mathbb{Z}$，这体现在配分函数里面没有效应。

这样的理论的运动方程是下面这个样子：

$$
\left(1+\frac{\lambda^2 k}{\pi}\right)\partial \bar J + \left(1-\frac{\lambda^2 k}{\pi}\right)\bar\partial J = 0
$$

显然你只需要选取$\lambda^2 = \frac{\pi}{k}$，那么最终就有$\partial \bar J = 0$，而这自然也蕴含$\bar \partial J =0$。定义如下的模式展开：

$$
J(z):=\sum_a J^a(z)t^a,\quad J^a(z):=\sum_n J_n^a z^{-n-1},\quad t^a\in\mathfrak{g}
$$

然后计算可以发现这个玩意儿满足Kac-Moody代数：

$$
[J^a_m,J^b_n] = if^{ab}_c J^c_{m+n}+km\delta^{ab}\delta_{m,-n}
$$

然后你就可以用Sugawana构造构造出理论的能动张量，或者说Virasora代数的生成元：

$$
L_n = \frac{1}{2(k+h^\vee)}\sum_m :J^a_{m}J^a_{n-m}:
$$

这里$h^\vee$是$\mathfrak{g}$的dual Coxeter数，可以证明这玩意儿确实满足Virasoro代数，中心荷是：

$$
c=\frac{k\dim\mathfrak{g}}{k+h^\vee}
$$

所以最终构造的理论有这些virasoro代数生成元，所以有local的共形对称性，是一个共形场论。

## AdS3弦论世界面对应的WZW模型的粒子谱
这部分的参考文献是下面三篇：

```
[1] Maldacena J, Ooguri H. Strings in AdS3 and the SL(2,R) WZW model. I: The spectrum. Journal of Mathematical Physics 2001;42:2929–60. https://doi.org/10.1063/1.1377273.
[2] Maldacena J, Ooguri H. Strings in AdS 3 and the SL ( 2 , R ) WZW model. III. Correlation functions. Phys Rev D 2002;65:106006. https://doi.org/10.1103/PhysRevD.65.106006.
[3] Maldacena J, Ooguri H, Son J. Strings in AdS3 and the SL(2,R) WZW model. II: Euclidean black hole. Journal of Mathematical Physics 2001;42:2961–77. https://doi.org/10.1063/1.1377039.
```

这里主要提及的是第一篇前半部分的内容。从几何的角度来看，AdS3其实可以看作是$SL(2,R)$的群流形，可以用圆柱的形式直观的表示，上面的度规是：

$$
ds^2=-\cosh^2\rho dt^2+d\rho^2+\sinh^2\rho d\phi^2
$$

作为群流形，群元素有个很简单的用坐标的表示：

$$
\begin{aligned}g&=e^{iu\sigma_2}e^{\rho\sigma_3}e^{iv\sigma_2}\\&=\begin{pmatrix}\cos t\cosh\rho+\cos\phi\sinh\rho&\sin t\cosh\rho-\sin\phi\sinh\rho\\-\sin t\cosh\rho-\sin\phi\sinh\rho&\cos t\cosh\rho-\cos\phi\sinh\rho\end{pmatrix}\end{aligned}
$$

这里：

$$
u=\frac{1}{2}(t+\phi),\quad v=\frac{1}{2}(t-\phi)
$$

不难看到这里关于$t$是三角函数的依赖，所以实际上时间轴方向是compact的，有一个$2\pi$的周期，后面我们会看到我们将会在$SL(2,R)$的万有覆叠群$\widetilde{SL(2,R)}$里面工作，万有覆叠之后时间轴就不是compact的了。首先注意我们这一节重点描述AdS3里面的弦论世界面CFT也就是WZW模型的谱，不过实际上其应该还会有一个internal space上的CFT也会有个谱的贡献，最终两者张量积一下才是最终的弦论的谱。

注意到WZW模型对应的群$SL(2,R)_k$有一个$m=0$对应的$SL(2,R)$子群，可以通过对$J^a_m$进行线性组合得三个生成元，Kac-Moody代数重新写成：

$$
[J_m^3,J^\pm,n]=\pm J^\pm_{m+n},\quad [J_m^3,J_n^3]=-\frac{k}{2}m\delta_{m,-n},\quad [J_m^+,J_n^-]=-2J^3_{m+n}+km\delta_{m,-n}
$$

显然在$m=0$的时候这构成一个$SL(2,R)$子代数。这个子代数的生成元和$L_0$是对易的，所以他们，也就是$SL(2,R)$的表示生成最高权表示的最高权，也就是$J^a\ket{j,m}=0$对于任意$n>0$，然后我们再利用Kac-Moody代数的那些更高level的生成元去生成更高权的次级态，也就是说Fock空间长下面这个样子：

$$
J^{a_1}_{-n_1}\cdots J^{a_\ell}_{-n_{\ell}}\ket{j,m}
$$

假设$C$是SL(2,R)的Casimir算符，那么有：

$$
C\ket{j,m} = -j(j-1)\ket{j,m},\quad J^3_0\ket{j,m} = m\ket{j,m}
$$

回忆玻色弦的Fock空间是下面这个形式：

$$
\alpha_{-n_1}^{i_1}\cdots\alpha_{-n_\ell}^{i_\ell}\ket{p}
$$

这里$\ket{p}$是$X_0$零模生成的子空间，是连续的，我们自然期望WZW模型这边也应该用连续的表示而不是离散的$\ket{j,m}$表示从而和这里的玻色弦的Fock空间能对上。这里我们考虑的实际上是叫做主值连续的表示，用连续的$s$和$\alpha$变量去标记表示：

$$
\ket{j,\alpha},\quad j=\frac12+is,\quad m\in\mathbb{Z}+\alpha,s\in\mathbb{R},\alpha\in(0,1)
$$

这里出现了虚数，这很可能意味着我们的表示并不是一个幺正的表示，意味着会出现负模的态，这似乎很危险，但是别忘了我们对于弦论来说还需要进行一个协变量子化的操作，所以实际上还需要筛选出满足下面的约束的态：

$$
L_n-\delta_{n,0}\ket{\text{phys}} = 0,\quad n>0
$$

这是世界面上$T=0$给我们的约束。这个约束实际上会把负模的态全部砍掉。回过头来看一下WZW模型的解，其运动方程告诉我们：

$$
\bar\partial(\partial g g^{-1}) = 0,\quad \partial(g^{-1}\bar\partial g)=0
$$

这意味着我们可以把$g(z,\bar z)$写成下面的形式：

$$
g(z,\bar z) = g_+(z)g_-(\bar z)
$$

$g(z,\bar z)$的单值性意味着$g_\pm$具有非平凡的Monodromy关系：

$$
g_+(e^{2\pi i} z) = g_+(z) M,\quad g_-(e^{-2\pi i}\bar z)=M^{-1}g_-(z)
$$

这其实也意味着当我们得到一组解${g^0_\pm}$，我们总可以通过下面的变换生成另一组解：

$$
\begin{aligned}
g^{w_R}_+(x^+) = e^{\frac i2w_Rx^+\sigma_2}g^0_+(x^+)\\
g_-^{w_L}(x^-) = g^0_-(x^-)e^{\frac i2w_L x^-\sigma_2}
\end{aligned}
$$

上面我们换用光锥坐标再lorentz号差下考虑问题，$x^\pm:=\tau\pm\sigma$。代入前面我们给出的$g$用AdS坐标表示的形式，我们发现这个变换相当于是在做：

$$
u\mapsto u+\frac{w_L}{2}(\tau+\sigma),\quad v\mapsto v+\frac{w_R}{2}(\tau-\sigma)
$$

也就是说：

$$
\begin{aligned}
t\mapsto t +\frac12(w_L+w_R)\tau+\frac12(w_L-w_R)\sigma\\
\phi\mapsto\phi+\frac12(w_L-w_R)\tau+\frac12(w_L+w_R)\sigma
\end{aligned}
$$

显然在柱坐标下$\phi$的定义天然要求$\phi\sim\phi+2\pi$，所以这个变换应该不破坏这一点，这要求：

$$
w_L=w_R=w
$$

但是这也意味着$t$不再是周期性的compact的坐标，也就是说我们实际上换到了$\widetilde{SL(2,R)}$去考虑问题。

在这个变换下Kac-Moody流代数也会相应地发生变换：

$$
\hat{J}^3_n=J^3_n+\frac R2 w\delta_{n,0},\quad \hat{J}^\pm_n=J^\pm_{n\mp w}
$$

所以这个变换实际上是对$SL(2,R)_k$的Kac-Moody代数做个自同态，那么自然也就会想到从一个表示出发我们可以通过这个自同态得到一个新的表示：

$$
J^a_n\circ\sigma^w[\ket{\psi}] := \hat J^a_n \ket{\psi}
$$

这里很简单看出这个表示并非bound form below的：

$$
J^+_n\circ\sigma^w[\ket{j,\alpha}] = J^+_{n-w}\ket{j,\alpha} = 0 ,\quad n>w
$$

对于$w>0$，在经过$\sigma^w$之后$\ket{j,\alpha}$现在可以作用$J^+_{n>0}$上去，注意到这是理论中降低$L_0$的算子，这意味着我们可以一直不断作用得到越来越低共形权的态。一般看来这非物理，但是别忘了弦论我们总是会用Virasoro Constrian限制到物理的谱，所以不用担心。我们可以用下面的公式非常“意识流”写下WZW模型的谱：[^26]

$$
\mathcal{H}=\bigoplus_{w=1}^\infty \int dsd\alpha\sigma^w(\mathcal{H}_{s,\alpha})\otimes\overline{\sigma^w(\mathcal{H}_{s,\alpha}})
$$

注意前面讨论我们都只讨论了左模，这里把右模也加上了，另外$L_n$在Kac-Moody代数自同态变换下的公式后面也会用到一些：

$$
\sigma^w(L_n)= L_n-wJ_n^3-\frac k4w^2\delta_{n,0}
$$

## $\operatorname{Sym}_N(X)$ 共形场论

在我们考虑的bosonic的AdS3/CFT2对偶中[^27]，bulk里面的是一个$SL(2,R)_3$WZW模型，对应的中心荷是9，不过bulk里面不只有AdS3作为CFT的靶空间，实际上还应该有Internal Space，我们记作$X$，这个作为靶空间弦论世界面上的CFT是一个$c=16$的CFT，总的才满足共形反常消去要求的$c=26$。上面我们初步从spectral的角度考虑了bulk里面的AdS弦理论，现在我们来考虑边界上的CFT，其边界上的CFT是所谓$\operatorname{Sym}_N(X)$模型[^28]，其靶空间是Orbifold，定义为$X^{\otimes N}/S_N$。现在我们来详细讨论一下这个共形场论。

首先我们来看一下Orbifold CFT的一般的构造。考虑靶空间在$M$上的CFT，在$M$上有个群$G$作用，从而生成一个轨形$M/G$。这个理论的Fock Space包含两个部分，一个部分就是所谓untwisted states，这对应原先$M$上的CFT的states，但是要求在$G$的作用下不变，也就是：

$$
\mathcal{H}^G:=\left\{\ket{\psi}\in\mathcal{H}|g\ket{\psi}=\ket{\psi},\forall g\in G\right\}
$$

但是还有一个非常特殊的叫twisted states，从弦论的角度来看type I是唯一构造就有开弦的理论，是因为由于其靶空间是一个orbifold，是type II弦orbifold投影来的，那么我们type II弦中的闭弦可以看作是有一个$M$上的开弦，但是他们两个端点可以在群$G$的作用下联系起来，这样两个端点其实在orbifold $M/G$的意义下依旧是同一个点，所以这个开弦实际上是一个闭弦，这样就会带来一个新的谱，我们叫做twisted states。

这些twisted states从前面弦论的视角来看应该是和$G$中的元素相关的，我们考虑$g$相关的那个twisted states构成的Fock空间$\mathcal{H}_g\ni\sigma_g$，如果我们CFT这边有一个算符$A$，其作用在$\sigma_g$上实际上应该有下面的monodromy关系：

$$
A[e^{2\pi i}z]\sigma_g=(gA)[z]\sigma_g
$$

考虑$h\in G$作用在$\sigma_g$上，对应$A\mapsto hA$，我们有新的monodromy关系：

$$
hA[e^{2\pi i}z]h\sigma_g=h_gA[z]h\sigma_g = (hgh^{-1})(hA)[z]h\sigma_g
$$

可以看到这其实意味着$h\sigma\_g\in\mathcal{H}\_{hgh^{-1}}$，所以我们应当把$\mathcal{H}\_g$看作是$\mathcal{H}\_{[g]}$，也就是说用共轭类去标记这些Fock Space，注意到$S\_N$群元都可以分成一堆循环，而共轭类则由这些循环的shape决定，也就是说对应$N$的拆分，比如说$(1234)(56)$和$(1564)(32)$他们都是$4+2$形式的循环的乘积，所以处于同一个共轭类。后面我们关注的是那些形如$(\cdots)$的对应的态，也就是说群元素就是一个单独的cycle，这实际上会对应AdS里面的single-trace算符。显然这样的态可以用cycle的长度标记，我们记作$\sigma\_w$，$w=1,\cdots,N$。

这里$\sigma_w$是一个初级场，我们希望在上面作用一些算符得到次级态从而得到全部的Fock Space，注意到$\operatorname{Sym}_N(X)$首先是一堆$X$叠起来构成的CFT，我们把每一层上面的场用$X^n(z)$标记。但是单看某一层的场并不好，因为从monodromy上我们知道这个场在转一圈之后直接变成了另一层的场，虽然我们不要求单值性，但是至少我们希望它绕着$\sigma_w$一圈之后只会pick一个相位，我们需要定义下面的场：

$$
\partial X^{[j]}(z):=\sum_{\ell=1}^w e^{2\pi i j\ell/w}\partial X^\ell(z), \quad j=0,1,\ldots ,w-1
$$

不难发现下面的单值关系：[^29]

$$
\partial X^{[j]}(e^{2\pi i}z)=e^{-2\pi i j/w}\partial X^{[j]}(z)
$$

反过来我们再直接从其洛朗展开来看：

$$
\partial X^{[j]}(z) = \sum_r \alpha_r^{[j]}z^{-r-1}
$$

上面两个式子在monodromy上对应显然必须要求上面模展开的求和必须是：

$$
r\in\frac{j}{w}+\mathbb{Z}
$$

这其实就像是NS sector和R sector，只是这里更加复杂。把所有的这些$j$都考虑起来，这意味着理论的产生湮灭算符应该是$\alpha_{n/w}$，其中$n\in Z$，所以$\mathcal{H}_w$上的态一般形式应当如下：

$$
\alpha_{-\frac{n_1}{w}}\cdots\alpha_{-\frac{n_\ell}{w}}\sigma_w\otimes
\tilde\alpha_{-\frac{m_1}{w}}\cdots\tilde\alpha_{-\frac{m_p}{w}}\bar\sigma_w
$$

当然我们还需要在上面的这些states里面挑选出那些在$G$的作用下不变的state作为真正的理论的twisted states。注意到每一个$\alpha_r$会pick一个$e^{-2\pi r}$的相位，所以我们应当期望有下面的level matching条件：

$$
\sum_{i}\frac{n_i}{w}-sum_{j}\frac{m_j}{w}\in\mathbb{Z}
$$

下面我们主要关注初级态$\sigma_w$，那显然最重要的问题就是怎么计算他们之间的关联函数，比如通过计算两点关联函数就能知道这个初级态的共形权为：

$$
h_w = \frac{c_X}{24}\frac{w^2-1}{w}
$$

这里$c_X$是$X$上CFT的中心荷。下面我们以两点关联函数计算为例来说明如何计算这个Orbifold CFT的关联函数，参考文献是`hep-th/0006196`。

>  一个月后更新：好吧我承认我破防了，这部分太技术细节了，我看了一周明白了一些，不过真的懒得写了，所以我放弃了，不过好在参考文献上面讲的很仔细，大家可以看看那个。

AdS/CFT一个非常重要的clue就是CFT那一侧的大N极限下的展开是按照拓扑展开的，在这里也能很清晰的看到这一点，$n$点算符大概增长速度是这样的：

$$
\left\langle\cdots\right\rangle\sim\sum_{\Gamma_g}C^L_N\sim\sum N^L\sim\sum N^{1-g-\frac n2}
$$

重点是这个微扰展开里面的$N^{-g}$行为，注意到$g_s\sim\frac {1}{\sqrt{N}}$，也就是说微扰展开是按照$g_s^{2g}$展开的，而这恰恰就是弦论的微扰展开形式$g$就可以解释为弦论是界面的亏格。


[^25]: 这里AdS3的internal space是$S^3\times T^4$，这里说的某些弦理论也就是弦论模空间的某个子流形
[^26]: 这里有个subtle的问题是我们为什么要求$w>0$，这个上课的时候也有很多同学问，老师给出的解释是要求dual的CFT上的谱是bounded from below的。
[^27]: AdS3/CFT2分几种不同的实现，由于大家还不知道如何处理R-R flux和弦的耦合（至少在RNS框架下无法处理）所以我们考虑的版本是没有R-R flux只有NS-NS flux。
[^28]: 更详细的说，我们这里考虑$N\to\infty$，这对应弦论这边tensionless，也就是$\ell_s\to 0$，这样的弦论的世界面理论才是对偶于WZW模型的。
[^29]: 后面的讨论中我们假设选取$[w]$中代表元为$(123\cdots w)$，这样的话$X^{w+1},\ldots X^{N}$在monodromy下不变，而前面$w$个场循环变换。


# 超对称场论中的局域化 [张欣宇]

这是我来之前唯一做了些功课的lecture，或许我之后能做一些这方面的研究，所以这算是我最为期待的一个lecture。所以我打算先不写这里的内容，等到自己了解更多后写一个基于这个的专题