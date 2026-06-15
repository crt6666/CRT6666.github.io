// 博客文章数据
const POSTS = [
  {
    id: 1,
    slug: "2026-06-15",
    title: "丑橘不丑",
    date: "2026-06-15",
    excerpt: "",
    tags: [],
    content: `
<div style="text-align:center; max-width:680px; margin:0 auto;">
  <img src="images/bc1a5d343334631fdcd2a7bb13c02ed1.jpg" alt="" style="width:100%; height:auto; border-radius:8px; display:block;">
  <p style="font-size:24px; font-weight:700; margin-top:24px; color:#e8546a;">你看你妈呢</p>
</div>
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
