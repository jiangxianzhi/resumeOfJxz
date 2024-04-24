import{_ as a,r as p,o as t,c as e,b as n,d as o,e as c,a as l}from"./app-CrKXQHLj.js";const i={},u=l(`<h1 id="拓扑排序" tabindex="-1"><a class="header-anchor" href="#拓扑排序"><span>拓扑排序</span></a></h1><h2 id="描述" tabindex="-1"><a class="header-anchor" href="#描述"><span>描述</span></a></h2><p>请你实现一个堆(大根堆)。 操作： push x：将 x加入堆。保证 x为int型整数。不输出任何内容。 top：输出堆顶元素。若堆为空，输出&quot;empty&quot;(不含引号)。 pop：输出堆顶元素，且弹出堆顶。若堆为空，输出&quot;empty&quot;(不含引号)。</p><h2 id="思路" tabindex="-1"><a class="header-anchor" href="#思路"><span>思路</span></a></h2><p>关键：大根堆插入，插入的数字进行上升排序一次 <br> 大根堆弹出最顶上数字，那么把最后一个数字放入顶上，对其进行一次下降排序</p><h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案"><span>答案</span></a></h2><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><pre class="language-c"><code><span class="token macro property"><span class="token directive-hash">#</span><span class="token directive keyword">include</span> <span class="token string">&lt;stdio.h&gt;</span></span>

<span class="token keyword">void</span> <span class="token function">Heapfiy</span><span class="token punctuation">(</span><span class="token keyword">int</span> <span class="token operator">*</span>array<span class="token punctuation">,</span> <span class="token keyword">int</span> size<span class="token punctuation">,</span> <span class="token keyword">int</span> index<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">int</span> left <span class="token operator">=</span> <span class="token number">2</span><span class="token operator">*</span>index<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>left<span class="token operator">&lt;</span>size<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>left<span class="token operator">+</span><span class="token number">1</span><span class="token operator">&lt;</span>size<span class="token operator">&amp;&amp;</span>array<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token operator">&lt;</span>array<span class="token punctuation">[</span>left<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            left <span class="token operator">=</span> left<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>array<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token operator">&gt;</span>array<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">int</span> tmp <span class="token operator">=</span> array<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>
        array<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> array<span class="token punctuation">[</span>left<span class="token punctuation">]</span><span class="token punctuation">;</span>
        array<span class="token punctuation">[</span>left<span class="token punctuation">]</span> <span class="token operator">=</span> tmp<span class="token punctuation">;</span>
        index <span class="token operator">=</span> left<span class="token punctuation">;</span>
        left <span class="token operator">=</span> <span class="token number">2</span><span class="token operator">*</span>left<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token keyword">void</span> <span class="token function">HeapInsert</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token operator">*</span>array<span class="token punctuation">,</span><span class="token keyword">int</span> size<span class="token punctuation">,</span> <span class="token keyword">int</span> index<span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>array<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token operator">&gt;</span>array<span class="token punctuation">[</span><span class="token punctuation">(</span>index<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">int</span> tmp <span class="token operator">=</span> array<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">;</span>
        array<span class="token punctuation">[</span>index<span class="token punctuation">]</span> <span class="token operator">=</span> array<span class="token punctuation">[</span><span class="token punctuation">(</span>index<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
        array<span class="token punctuation">[</span><span class="token punctuation">(</span>index<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> tmp<span class="token punctuation">;</span>
        index <span class="token operator">=</span> <span class="token punctuation">(</span>index<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">int</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token keyword">int</span> times<span class="token punctuation">;</span>
<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span><span class="token operator">&amp;</span>times<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> array<span class="token punctuation">[</span><span class="token number">1024</span><span class="token operator">*</span><span class="token number">100</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">;</span>
  <span class="token keyword">int</span> size <span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span>
<span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>i<span class="token operator">&lt;</span>times<span class="token punctuation">;</span>i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">char</span> operation<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> tmp<span class="token punctuation">;</span>
<span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%s &quot;</span><span class="token punctuation">,</span> operation<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">strcmp</span><span class="token punctuation">(</span>operation<span class="token punctuation">,</span><span class="token string">&quot;push&quot;</span><span class="token punctuation">)</span><span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
      <span class="token function">scanf</span><span class="token punctuation">(</span><span class="token string">&quot;%d&quot;</span><span class="token punctuation">,</span> <span class="token operator">&amp;</span>tmp<span class="token punctuation">)</span><span class="token punctuation">;</span>
          array<span class="token punctuation">[</span>size<span class="token operator">++</span><span class="token punctuation">]</span> <span class="token operator">=</span> tmp<span class="token punctuation">;</span>
          <span class="token function">HeapInsert</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span>size<span class="token punctuation">,</span>size<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token function">strcmp</span><span class="token punctuation">(</span>operation<span class="token punctuation">,</span><span class="token string">&quot;top&quot;</span><span class="token punctuation">)</span><span class="token operator">==</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>size<span class="token operator">&gt;</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span>array<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;empty\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span><span class="token punctuation">(</span>size<span class="token operator">&gt;</span><span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
   <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d\\n&quot;</span><span class="token punctuation">,</span>array<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   array<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> array<span class="token punctuation">[</span>size<span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">;</span>
   <span class="token function">Heapfiy</span><span class="token punctuation">(</span>array<span class="token punctuation">,</span>  size<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
   size<span class="token operator">--</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span><span class="token keyword">else</span><span class="token punctuation">{</span>
        <span class="token function">printf</span><span class="token punctuation">(</span><span class="token string">&quot;empty\\n&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),r={id:"题目网站",tabindex:"-1"},k={class:"header-anchor",href:"#题目网站"},d={href:"https://www.nowcoder.com/practice/13f61c8c92404f5ea5d6fa4c692869fb?tpId=308&tqId=2373261&ru=/exam/oj&qru=/ta/algorithm-start/question-ranking&sourceUrl=%2Fexam%2Foj%3Fpage%3D1%26tab%3D%25E7%25AE%2597%25E6%25B3%2595%25E7%25AF%2587%26topicId%3D308",target:"_blank",rel:"noopener noreferrer"};function v(m,b){const s=p("ExternalLinkIcon");return t(),e("div",null,[u,n("h2",r,[n("a",k,[n("span",null,[n("a",d,[o("题目网站"),c(s)])])])])])}const f=a(i,[["render",v],["__file","Heap.html.vue"]]),h=JSON.parse('{"path":"/algorithm/tree/Heap.html","title":"拓扑排序","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"描述","slug":"描述","link":"#描述","children":[]},{"level":2,"title":"思路","slug":"思路","link":"#思路","children":[]},{"level":2,"title":"答案","slug":"答案","link":"#答案","children":[]},{"level":2,"title":"题目网站","slug":"题目网站","link":"#题目网站","children":[]}],"git":{},"filePathRelative":"algorithm/tree/Heap.md"}');export{f as comp,h as data};
