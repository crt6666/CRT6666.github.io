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
  },
  {
    id: 3,
    slug: "wo-le-ge-sao-gang",
    title: "我嘞个骚肛 一",
    date: "2026-06-17",
    excerpt: "Coke老师，火影手游顶流主播，人称骚肛之王。",
    tags: ["Coke", "火影忍者"],
    content: `
<div style="max-width:680px; margin:0 auto;">

  <h2>Coke老师是谁？</h2>

  <blockquote>
    本名蒋帅，2003年出生于湖南邵阳。抖音平台《火影忍者手游》头部主播，粉丝超200万，获赞2000万+。粉丝团名"兰团"。以精湛操作和幽默风格出名，口头禅"我嘞个骚肛"广为流传。
  </blockquote>

  <p style="font-size:16px; line-height:1.9; color:#555;">
    Coke老师，一个让火影玩家又爱又恨的名字。主打《火影忍者手游》高操作内容，代表作包括<strong>《喜欢吗？》《汗流浃背了？》《不好意思，有点帅到你们了》</strong>等系列。视频风格以极限操作、悬念标题和标志性的"骚话"为特色，粉丝亲切地称他为"骚肛"。
  </p>

  <img src="images/856bcc1ab8ecb67b7beb8101fb33918d.jpg" alt="Coke" loading="lazy" style="width:100%; height:auto; border-radius:8px; display:block; margin:20px 0;">

  <p style="font-size:16px; line-height:1.9; color:#555;">
    2022年5月开始在抖音更新，靠一手须佐佐助的"细如针"级别操作迅速出圈。2024年1月发布的《无恐惧之人》单条获赞21.8万。除了抖音，B站也有他的身影，以二次元融合三次元的角色模仿进一步扩大影响力。
  </p>

  <img src="images/cde5b8a9a8e1064860c6b22bb801043a.jpg" alt="Coke" loading="lazy" style="width:100%; height:auto; border-radius:8px; display:block; margin:20px 0;">

  <h2>经典名场面</h2>

  <div style="margin:24px 0; border-radius:8px; overflow:hidden; box-shadow:0 2px 12px rgba(0,0,0,0.1);">
    <video controls preload="none" poster="images/856bcc1ab8ecb67b7beb8101fb33918d.jpg" style="width:100%; height:auto; display:block; background:#000;">
      <source src="images/db8ed7cc2ecc33b5ed0b8b7d5af25376.mp4" type="video/mp4">
      你的浏览器不支持视频播放。
    </video>
  </div>

  <p style="font-size:18px; line-height:2; color:#444; text-align:center; margin-top:28px;">
    <strong>我嘞个骚肛！</strong><br>
    <span style="font-size:14px; color:#999;">—— Coke，2022-2026</span>
  </p>

</div>
    `
  }
];

// 根据 slug 获取文章
function getPostBySlug(slug) {
  return POSTS.find(p => p.slug === slug);
}

// 获取所有文章（按日期倒序，同日期按id倒序）
function getAllPosts() {
  return [...POSTS].sort((a, b) => {
    const dateCmp = b.date.localeCompare(a.date);
    if (dateCmp !== 0) return dateCmp;
    return b.id - a.id;
  });
}
