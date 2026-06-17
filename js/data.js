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
  <img src="images/5cdaef3d8190f49528c15cdbee22ff31.jpg" alt="" loading="lazy" style="width:100%; height:auto; border-radius:8px; display:block;">
  <p style="font-size:24px; font-weight:700; margin-top:24px; color:#e8546a;">你看你妈呢</p>
</div>
    `
  },
  {
    id: 2,
    slug: "mao-die-shi-hao-mao",
    title: "耄耋是好猫",
    date: "2026-06-17",
    excerpt: "年纪大的猫，更有味道。",
    tags: ["猫咪", "生活"],
    content: `
<div style="max-width:680px; margin:0 auto;">

  <img src="images/75fb397604c989902d9da0efc52f1c5d.jpg" alt="" loading="lazy" style="width:100%; height:auto; border-radius:8px; display:block; margin-bottom:20px;">

  <p style="font-size:18px; line-height:2; color:#444;">
    它叫耄耋，是一只上了年纪的猫。
  </p>

  <p style="font-size:16px; line-height:1.9; color:#555;">
    很多人问我为什么养一只老猫。小猫多好啊，活泼、粘人、充满好奇心。<br>
    老猫呢？它大部分时间都在睡觉，偶尔醒来也只是换个地方继续睡。
  </p>

  <img src="images/cat2.jpg" alt="" loading="lazy" style="width:100%; height:auto; border-radius:8px; display:block; margin:20px 0;">

  <p style="font-size:16px; line-height:1.9; color:#555;">
    但老猫有老猫的好。<br>
    它不拆家，不乱跑，不半夜蹦迪。<br>
    它懂得什么时候该安静，什么时候可以蹭蹭你的手。<br>
    它用一辈子的经验，学会了怎么和人相处。
  </p>

  <img src="images/cat3.jpg" alt="" loading="lazy" style="width:100%; height:auto; border-radius:8px; display:block; margin:20px 0;">

  <p style="font-size:16px; line-height:1.9; color:#555;">
    耄耋的毛已经不如年轻时那么亮了，眼睛也有一点浑浊。<br>
    但它看我的眼神，还是和以前一样——<br>
    "铲屎的，该开罐头了。"
  </p>

  <img src="images/cat4.jpg" alt="" loading="lazy" style="width:100%; height:auto; border-radius:8px; display:block; margin:20px 0;">

  <p style="font-size:18px; line-height:2; color:#444; text-align:center;">
    <strong>耄耋之年，亦是好猫。</strong><br>
    <span style="font-size:14px; color:#999;">养猫十年，它教我的比任何书都多。</span>
  </p>

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
