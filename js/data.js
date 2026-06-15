// 博客文章数据
const POSTS = [
  {
    id: 1,
    slug: "hello-world",
    title: "你好，世界 👋",
    date: "2026-06-10",
    excerpt: "这是我的第一篇博客文章。记录一下搭建这个博客的心路历程，以及对未来的期许。",
    tags: ["随笔", "建站"],
    content: `
<p>终于有了一个属于自己的小角落。</p>

<p>一直以来都想有一个地方，可以不紧不慢地写点东西。不需要迎合算法，不需要考虑流量，只是安安静静地记录。</p>

<h2>为什么叫"哈吉米"？</h2>

<p>哈吉米（はちみ）在日语里是"蜂蜜"的意思。希望这个博客像蜂蜜一样，甜甜的、暖暖的，偶尔也能黏住一些路过的人。</p>

<p>也有人说"哈吉米"听起来像小猫叫，嗯……这个解释也不错 🐱。</p>

<h2>技术选型</h2>

<p>这个博客是用纯静态方式搭建的：</p>
<ul>
  <li>HTML + CSS + 原生 JavaScript</li>
  <li>不需要后端服务器</li>
  <li>部署在 CloudStudio Pages 上</li>
  <li>域名挂在阿里云，通过 DNS 解析指向</li>
</ul>

<p>简单、稳定、零成本，非常适合个人博客。</p>

<h2>接下来</h2>

<p>初步计划在这里写：</p>
<ul>
  <li>技术学习的笔记和踩坑记录</li>
  <li>读书观影的碎碎念</li>
  <li>生活中那些值得被记住的小事</li>
</ul>

<p>好了，第一篇就到这儿。算是立个 flag 🚩，希望自己能坚持写下去。</p>
    `
  },
  {
    id: 2,
    slug: "static-site-guide",
    title: "零成本搭建个人网站完全指南",
    date: "2026-06-12",
    excerpt: "只有域名没有服务器？这份指南教你如何零成本把网站跑起来，手把手从零到上线。",
    tags: ["技术", "教程"],
    content: `
<p>很多人以为建网站一定需要买服务器，其实不然。今天分享一套零成本的方案。</p>

<h2>你需要准备什么</h2>

<p>实际上只需要三样东西：</p>
<ul>
  <li><strong>一个域名</strong> — 在阿里云、腾讯云等平台购买，几十块一年</li>
  <li><strong>一个 GitHub 账号</strong> — 免费</li>
  <li><strong>一点点 HTML 基础</strong> — 不懂也没关系，这篇教程会覆盖</li>
</ul>

<h2>第一步：写一个网站</h2>

<p>最简单的网站只需要一个 <code>index.html</code> 文件。比如：</p>

<pre><code>&lt;!DOCTYPE html&gt;
&lt;html lang="zh-CN"&gt;
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;title&gt;我的网站&lt;/title&gt;
&lt;/head&gt;
&lt;body&gt;
  &lt;h1&gt;Hello World!&lt;/h1&gt;
  &lt;p&gt;这是我的第一个网站。&lt;/p&gt;
&lt;/body&gt;
&lt;/html&gt;</code></pre>

<h2>第二步：部署到 CloudStudio / GitHub Pages</h2>

<p>有几种免费托管方式可选：</p>
<ul>
  <li><strong>CloudStudio</strong> — 腾讯出品，WorkBuddy 一键部署</li>
  <li><strong>GitHub Pages</strong> — 最经典，稳定可靠</li>
  <li><strong>Vercel / Netlify</strong> — 功能更强大，同样免费</li>
</ul>

<p>不管选哪个，最终都会给你一个类似 <code>xxx.cloudstudio.net</code> 或 <code>xxx.github.io</code> 的地址。</p>

<h2>第三步：绑定域名</h2>

<p>去到你的域名服务商（比如阿里云DNS控制台），添加一条 CNAME 记录：</p>

<table style="width:100%; border-collapse: collapse; margin: 16px 0;">
<tr style="background:#f9f6f1"><th style="padding:8px 12px; text-align:left; border:1px solid #ebe5dd">记录类型</th><td style="padding:8px 12px; border:1px solid #ebe5dd">CNAME</td></tr>
<tr><th style="padding:8px 12px; text-align:left; border:1px solid #ebe5dd">主机记录</th><td style="padding:8px 12px; border:1px solid #ebe5dd">@ 或 www</td></tr>
<tr style="background:#f9f6f1"><th style="padding:8px 12px; text-align:left; border:1px solid #ebe5dd">记录值</th><td style="padding:8px 12px; border:1px solid #ebe5dd">你的托管平台给的域名</td></tr>
</table>

<p>等待 DNS 生效（通常几分钟到几小时），你的域名就能访问了！</p>

<blockquote>
  小提示：如果用的是 CloudStudio，别忘了在平台后台也配置一下自定义域名。
</blockquote>

<h2>总结</h2>

<p>整个流程下来，除了域名的年费（几十块），其他全部免费。这就是我搭建这个博客的完整方案。</p>

<p>有问题欢迎交流！</p>
    `
  },
  {
    id: 3,
    slug: "why-blogging",
    title: "为什么2026年还值得写博客",
    date: "2026-06-15",
    excerpt: "在短视频和AI泛滥的时代，为什么还要坚持写文字？聊聊我的一些想法。",
    tags: ["随笔", "思考"],
    content: `
<p>现在问这个问题的背景很有意思——2026年，AI 已经能几秒钟生成一篇"还不错的"文章，短视频把大家的注意力切成碎片，朋友圈和微博早已取代了大部分人的表达需求。</p>

<p>那为什么还要写博客？</p>

<h2>写作是思考的工具</h2>

<p>Paul Graham 说过：写作不只是记录思考，写作就是思考本身。</p>

<p>很多时候你觉得自己"懂了"，拿起键盘才发现其实还没想清楚。把想法写下来这个过程，会迫使你去组织、去梳理、去发现逻辑上的漏洞。</p>

<p>AI 可以帮你生成文字，但不能替你思考。至少现在还不能。</p>

<h2>建立自己的数字花园</h2>

<p>社交媒体上的内容就像沙滩写字，潮水一来就没了。而博客是你的数字花园：</p>

<ul>
  <li>你拥有的域名</li>
  <li>你掌控的内容</li>
  <li>不会被算法决定谁能看到</li>
  <li>十年后还在那里</li>
</ul>

<h2>对抗碎片化</h2>

<p>140字能表达一个观点，但表达不了一个论证过程。一篇博客文章可以让你慢慢展开、深入探讨、配图举例。</p>

<p>这不是在否定短视频和社交媒体的价值——它们各有各的场景。但如果你有真正想好好说的事情，博客仍然是最好的选择。</p>

<h2>写给自己看</h2>

<p>最后一点可能最重要：博客首先是写给自己看的。</p>

<p>它是一份成长的记录。回头看一年前的文章，你能清晰地看到自己的变化——那时候关心什么、用什么样的语言、犯了哪些现在看来很幼稚的错误。</p>

<p>这才是博客最珍贵的部分。</p>

<p>所以，2026年了，我依然选择写博客。你呢？</p>
    `
  }
];

// 根据 slug 获取文章
function getPostBySlug(slug) {
  return POSTS.find(p => p.slug === slug);
}

// 获取所有文章（按日期倒序）
function getAllPosts() {
  return [...POSTS].sort((a, b) => b.date.localeCompare(a.date));
}
