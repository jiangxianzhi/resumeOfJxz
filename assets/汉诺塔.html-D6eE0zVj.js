import{_ as a,r as t,o as e,c as p,b as n,d as o,e as c,a as l}from"./app-CrKXQHLj.js";const i={},u=l(`<h1 id="汉诺塔" tabindex="-1"><a class="header-anchor" href="#汉诺塔"><span>汉诺塔</span></a></h1><h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述"><span>描述</span></a></h2><p>我们有由底至上为从大到小放置的 n 个圆盘，和三个柱子（分别为左/中/右即left/mid/right），开始时所有圆盘都放在左边的柱子上，按照汉诺塔游戏的要求我们要把所有的圆盘都移到右边的柱子上，要求一次只能移动一个圆盘，而且大的圆盘不可以放到小的上面 请实现一个函数打印最优移动轨迹</p><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路"><span>思路</span></a></h2><p>递归，第n个移动left——&gt;right = 第n-1个移动left——&gt;mid + 最下面一个移动left-&gt;right+第n-1个移动mid——&gt;right; 出口，可以判断第0个的时候如何移动，也可以判断第1个。</p><h2 id="答案s" tabindex="-1"><a class="header-anchor" href="#答案s"><span>答案s</span></a></h2><div class="language-java line-numbers-mode" data-ext="java" data-title="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>


<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Solution</span> <span class="token punctuation">{</span>
    <span class="token doc-comment comment">/**
     * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
     *
     *
     * <span class="token keyword">@param</span> <span class="token parameter">n</span> int整型
     * <span class="token keyword">@return</span> string字符串ArrayList
     */</span>
       <span class="token keyword">static</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> list<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">public</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">&gt;</span></span> getSolution <span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// write code here</span>
        <span class="token function">hano</span><span class="token punctuation">(</span>n<span class="token punctuation">,</span><span class="token string">&quot;left&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;mid&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;right&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> list<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">hano</span><span class="token punctuation">(</span><span class="token keyword">int</span> n<span class="token punctuation">,</span> <span class="token class-name">String</span> left<span class="token punctuation">,</span> <span class="token class-name">String</span> mid<span class="token punctuation">,</span> <span class="token class-name">String</span> right<span class="token punctuation">)</span><span class="token punctuation">{</span>
           <span class="token keyword">if</span><span class="token punctuation">(</span>n<span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token keyword">return</span><span class="token punctuation">;</span><span class="token punctuation">}</span>
           <span class="token function">hano</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>left<span class="token punctuation">,</span>right<span class="token punctuation">,</span>mid<span class="token punctuation">)</span><span class="token punctuation">;</span>
           list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token string">&quot;move from &quot;</span><span class="token operator">+</span>left<span class="token operator">+</span><span class="token string">&quot; to &quot;</span><span class="token operator">+</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
           <span class="token function">hano</span><span class="token punctuation">(</span>n<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span>mid<span class="token punctuation">,</span>left<span class="token punctuation">,</span>right<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),r={id:"题目网站",tabindex:"-1"},k={class:"header-anchor",href:"#题目网站"},d={href:"https://www.nowcoder.com/practice/7d6cab7d435048c4b05251bf44e9f185?tpId=308&tqId=24976&ru=/exam/oj&qru=/ta/algorithm-start/question-ranking&sourceUrl=%2Fexam%2Foj",target:"_blank",rel:"noopener noreferrer"};function m(v,h){const s=t("ExternalLinkIcon");return e(),p("div",null,[u,n("h2",r,[n("a",k,[n("span",null,[n("a",d,[o("题目网站"),c(s)])])])])])}const b=a(i,[["render",m],["__file","汉诺塔.html.vue"]]),f=JSON.parse('{"path":"/algorithm/queue/%E6%B1%89%E8%AF%BA%E5%A1%94.html","title":"汉诺塔","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"描述","slug":"描述","link":"#描述","children":[]},{"level":2,"title":"思路","slug":"思路","link":"#思路","children":[]},{"level":2,"title":"答案s","slug":"答案s","link":"#答案s","children":[]},{"level":2,"title":"题目网站","slug":"题目网站","link":"#题目网站","children":[]}],"git":{},"filePathRelative":"algorithm/queue/汉诺塔.md"}');export{b as comp,f as data};
