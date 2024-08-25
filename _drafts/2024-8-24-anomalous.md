# 量子反常

众所周知，回忆一下推导Ward恒等式，玩对称性的时候，我们是玩下面的配分函数：
$$
Z(J)=\int\mathcal{D}\varphi e^{i[S+\int d^4y J_a\varphi_a]}
$$
然后当时我们假设$\phi\to\phi+\delta\phi$是对称性，那么就有：
$$
\begin{aligned}&0=\delta Z(J)\\&=i\int\mathcal{D}\varphi e^{i[S+\int d^4y J_b\varphi_b]}\int d^4x\left(\frac{\delta S}{\delta\varphi_a(x)}+J_a(x)\right)\delta\varphi_a(x)\end{aligned}
$$
注意这一步没有用任何的$\delta\phi$是对称变换这个要求，这只是数学上$\phi\to\phi'$的积分换元变量替换。然后我们对辅助流$J$求变分导数，就得到了所谓Schwinger-Dyson方程：
$$
\begin{aligned}0=i\langle0|\text{T}&\frac{\delta S}{\delta\varphi_a(x)} \varphi_{a_1}(x_1)\ldots\varphi_{a_n}(x_n)|0\rangle\\&+\sum_{j=1}^n\langle0|\text{T}\varphi_{a_1}(x_1)\ldots\delta_{aa_j}\delta^4(x-x_j)\ldots\varphi_{a_n}(x_n)|0\rangle\end{aligned}
$$
到这一步，我们也没有用到$\delta\phi$是对称变换这个要求，考虑纯用经典力学就能推导出来的Noether流和作用量变分之间的关系，有：
$$
\partial_\mu j^\mu(x)=\delta\mathcal{L}(x)-\frac{\delta S}{\delta\varphi_a(x)}\delta\varphi_a(x)
$$
在经典力学的意义上，我们说流守恒，是在on-shell的语境下说的，也就是说场要满足经典运动方程，这个时候：
$$
\partial_\mu j^\mu(x)=\delta\mathcal{L}(x)-\cancelto{0}{\frac{\delta S}{\delta\varphi_a(x)}}\delta\varphi_a(x)
$$
然后如果进一步$\delta\phi$使得$\delta\mathcal{L}=0$，也就是通常所说的“对称性”，那么有：
$$
\partial_\mu j^\mu=0
$$
也就是说我们得到了一个守恒流！我去，然后你急匆匆地想去看量子版本，这个时候$\phi$由于是要所有位形求和，所以on-shell条件不一定满足了，也就是说不再有
$$
\cancelto{0}{\frac{\delta S}{\delta\varphi_a(x)}}
$$
但是，对称性依旧告诉我们下面的式子不管on-shell 还是 off-shell，任何位形下都成立：
$$
\partial_\mu j^\mu(x)=-\frac{\delta S}{\delta\varphi_a(x)}\delta\varphi_a(x)
$$
然后你代入一个仅仅是数学上变量替换得到的Schiwinger-Dyson方程，你就得到了量子版本：
$$
\begin{aligned}0=\partial_\mu\langle0|\text{T}&j^\mu(x)\varphi_{a_1}(x_1)\ldots\varphi_{a_n}(x_n)|0\rangle\\&+i\sum_{j=1}^n\langle0|\text{T}\varphi_{a_1}(x_1)\ldots\delta\varphi_{a_j}(x)\delta^4(x-x_j)\ldots\varphi_{a_n}(x_n)|0\rangle\end{aligned}
$$
也就是老百姓口中说的Ward恒等式！后面的contact term是反常？[^1]那不是原先是$\partial_\mu j^\mu=0$，现在你右边加了一些诡异的$\delta$函数，这一定就是老子圈图算了半天的反常吧！

很抱歉，不是，这些contact term没有鸡毛跟反常相关的联系，这些contact term是量子场论“场”的性质必然带来的，你还记得OPE吧，两个场的插入点隔得很近的时候的展开式，如果插入点相同，那必然会量子涨落非常大从而出现发散，这是场本身带来的，是场自身的性质，和反不反常没关系。就想你量子力学里面说守恒，说的就是在平均意义下守恒，到了QFT你说守恒，除了说平均，还要说在contact term的意义下守恒。理论本身的性质让你必须对守恒是什么做出新的定义。

那反常是什么？那就是除了contact term还有别的项呗。因为上面的推导看起来人畜无害，其实有很多需要注意的点，这里最致命的就是我那里推导schwinger方程的时候说只是变量替换，但是积分变量替换之后相等的条件是雅可比行列式为1啊！也就是说必须要有测度相等啊！
$$
\mathcal{D}\phi'=\mathcal{D}\phi
$$
这个条件其实很强，如果你经典力学下的对称变换，不满足这个，那么到了量子场论这边，前面的推导全部作废，自然会出现：
$$
\braket{\partial_\mu j^\mu}\neq 0
$$
也就是出现了**反常**，也就是说本来经典力学下有的对称性，到了量子力学这边，焯！没了！这有点不好，我们想做的就是，你能不能通过在拉氏量中加上一些项，刚好把这个反常抵消掉，那这个对称性不就继续保持了么？值得注意的是，我之前CFT的时候说过QCD你经典的看，是尺度无关的，毕竟能动张量无迹，也就是说是个共形场论？那当然不是，你beta函数算出来不是0，就说明了这个理论是尺度相关的，他有一个明显的尺度也就是能标！这恰恰说明了QCD会出现共形对称性的量子反常，那自然在量子层面上不能说是一个CFT了。[^2]

当然，虽说是没有，但也不是完全没有。就是我们说他是个量子反常，也就是说只存在量子修正，量子修正是啥？圈图啊！你会发现你算反常的时候，最后都是圈图才会对$\braket{\partial_\mu j^\mu}=0$有修正。树图还是对的。

这又牵扯到QFT一个很重要的知识点，圈图是引入了量子修正，但是树图，从费曼规则是可以看出实际上是写出经典的场运动方程之后，找到格林函数（自由传播子）微扰解场运动方程。我敲！这是啥，这是纯纯的OED，这是纯纯的数理方法解场方程，没有任何量子的东西加进来，是经典的解运动方程而已。关于这部分细致的研究，我想学点Perturbiner方法是不错的，他的目的就是发扬上面的想法，反过来我不用费曼图，我直接去用ODE的方法解微分方程，得到树图振幅，这部分我看过一点文献1809.02096，我看过introduction学过一点，后面没咋看了（本来还想写个note的，你要是学了了你写吧😀），这篇文献review的很好，也引用了很多原始文献。而且这个是可以和mafra搞的自由李代数那一套联系起来的，mafra也做了不少这些工作。

[^1]: 这里是contact term，聂俊雄老以为是counter term
[^2]: 不过我昨天和师兄聊了聊，浙大有个巨强的做唯象的学长（现在在MIT），就跟朱华星一起做了不少有关CFT方法引入QCD计算的东西。说明共形对称性还是或多或少可以帮助QCD的研究的。

