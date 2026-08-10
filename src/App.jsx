import { useEffect, useState } from 'react'
import { ArrowUpRight, Mail, Menu, Phone, X } from 'lucide-react'

const asset = (name) => `${import.meta.env.BASE_URL}assets/${name}`

const writingWorks = [
  {
    title: '他禁欲长寿，却晚节不保',
    type: '人物写作',
    description: '从人物经历与时代环境的张力中，呈现复杂历史人物的多重侧面。',
    image: asset('liang-wudi.webp'),
    imageAlt: '梁武帝画像局部',
    href: 'https://mp.weixin.qq.com/s/m9nPmP79JkNKaCRaMY5akw',
  },
  {
    title: '帝国顶级权斗',
    type: '事件分析',
    description: '从权力关系与制度背景入手，拆解帝国政治事件中的多方博弈。',
    image: asset('qing-politics.jpg'),
    imageAlt: '清末政治人物历史照片',
    href: 'https://mp.weixin.qq.com/s/A69jsi-oBhzPVIs_i-8vlg',
  },
  {
    title: '极度诡异的匈奴人',
    type: '历史脉络梳理',
    description: '梳理族群、制度与时代互动，让复杂的匈奴历史进入大众阅读。',
    image: asset('xiongnu-crown.jpg'),
    imageAlt: '战国时期匈奴金冠文物',
    href: 'https://mp.weixin.qq.com/s/SvF3wYZCDNr0Yh6f5zm2WA',
  },
]

const seriesWorks = [
  {
    title: '拨开历史的迷雾',
    label: '长期付费专题',
    description: '围绕历史疑案，展开深入分析，将复杂历史问题转化为大众化内容。',
    image: asset('lianpo-linxiangru.jpg'),
    imageAlt: '廉颇蔺相如列传历史画卷局部',
    href: 'https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU4NTA0NzMyOQ==&action=getalbum&album_id=2493333231346368514&scene=126#wechat_redirect',
  },
  {
    title: '大唐武功三十年：618—649',
    label: '系列历史专题',
    description: '以唐初军事与政治进程为线索，构建连续叙事体系，探索长篇历史内容开发。',
    image: asset('night-shining-white.jpg'),
    imageAlt: '唐代韩干照夜白图',
    href: 'https://mp.weixin.qq.com/mp/appmsgalbum?__biz=MzU4NTA0NzMyOQ==&action=getalbum&album_id=4313839678282973191&scene=126#wechat_redirect',
  },
]

const books = [
  {
    title: '激荡三百年',
    identity: '主笔',
    publisher: '时代文艺出版社',
    date: '2024年4月',
    result: '负责主要章节撰写',
    image: asset('book-jidang.jpg'),
  },
  {
    title: '王朝的崩溃',
    identity: '主笔',
    publisher: '湖南文艺出版社',
    date: '2025年1月',
    result: '主要章节撰写及结构设计',
    image: asset('book-collapse.jpg'),
  },
  {
    title: '狂卷：中国科举1300年',
    identity: '主笔',
    publisher: '上海远东出版社',
    date: '2026年3月',
    result: '主要章节撰写及结构设计',
    image: asset('book-keju.jpg'),
  },
]

const strengths = [
  {
    title: '资料研究',
    text: '历史专业训练｜文献整理｜事实核查',
  },
  {
    title: '深度写作',
    text: '人物叙事｜事件分析｜历史表达',
  },
  {
    title: '内容策划',
    text: '选题规划｜栏目建设｜专题开发',
  },
  {
    title: '出版经验',
    text: '10+出版参与｜长期项目经验',
  },
  {
    title: 'AI辅助',
    text: '资料整理｜结构设计｜内容优化',
  },
]

function ExternalLink({ href, label }) {
  return (
    <a className="icon-link" href={href} target="_blank" rel="noreferrer" aria-label={label} title={label}>
      <ArrowUpRight size={19} strokeWidth={1.6} />
    </a>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('is-visible')
        })
      },
      { threshold: 0.12 },
    )
    const nodes = document.querySelectorAll('.reveal')
    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="wordmark" href="#about" onClick={closeMenu} aria-label="返回个人介绍">
          <strong>李立廷</strong>
        </a>
        <nav className={menuOpen ? 'site-nav is-open' : 'site-nav'} aria-label="页面导航">
          <a href="#about" onClick={closeMenu}>关于我</a>
          <a href="#works" onClick={closeMenu}>作品</a>
          <a href="#strengths" onClick={closeMenu}>能力</a>
          <a href="#contact" onClick={closeMenu}>联系</a>
        </nav>
        <button
          className="menu-button"
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? '关闭导航' : '打开导航'}
          title={menuOpen ? '关闭导航' : '打开导航'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <main>
        <section className="hero" id="about">
          <div className="hero-copy reveal">
            <p className="hero-kicker">HISTORY · CULTURE · CONTENT</p>
            <h1 className="hero-name" aria-label="李立廷">
              <span data-char="李" aria-hidden="true">李</span>
              <span data-char="立" aria-hidden="true">立</span>
              <span data-char="廷" aria-hidden="true">廷</span>
            </h1>
            <p className="hero-role">
              <strong>历史文化内容创作者</strong>
              <span>内容策划｜深度写作｜出版创作</span>
            </p>
            <p className="hero-intro">
              长期参与历史文化内容生产，擅长将复杂知识转化为大众可读的内容。
            </p>
          </div>

          <div className="hero-ink reveal" aria-hidden="true">
            <img src={asset('hero-ink.png')} alt="" decoding="async" fetchPriority="high" />
          </div>

          <div className="hero-facts reveal" aria-label="核心经历">
            <div><strong>5+</strong><span>年深度内容生产</span></div>
            <div><strong>10+</strong><span>部出版作品</span></div>
          </div>
        </section>

        <section className="works-section" id="works">
          <div className="page-width">
            <div className="writing-block">
              <header className="showcase-heading reveal">
                <p className="eyebrow">SELECTED WORKS</p>
                <h2>精选作品</h2>
              </header>

              <div className="showcase-grid">
                {writingWorks.map((work) => (
                  <article className="portfolio-card showcase-card reveal" key={work.title}>
                    <a className="portfolio-visual showcase-image" href={work.href} target="_blank" rel="noreferrer">
                      <img src={work.image} alt={work.imageAlt} loading="lazy" decoding="async" />
                    </a>
                    <div className="portfolio-copy">
                      <p className="portfolio-tag">{work.type}</p>
                      <h3>{work.title}</h3>
                      <p>{work.description}</p>
                      <ExternalLink href={work.href} label={`阅读《${work.title}》`} />
                    </div>
                  </article>
                ))}
              </div>
            </div>

            <div className="series-block">
              <header className="collection-heading reveal">
                <p className="eyebrow">SERIES &amp; FEATURES</p>
                <h2>系列专题</h2>
              </header>
              <div className="series-grid">
                {seriesWorks.map((series) => (
                  <article className="portfolio-card series-item reveal" key={series.title}>
                    <a className="portfolio-visual series-image" href={series.href} target="_blank" rel="noreferrer">
                      <img src={series.image} alt={series.imageAlt} loading="lazy" decoding="async" />
                    </a>
                    <div className="portfolio-copy">
                      <p className="portfolio-tag">{series.label}</p>
                      <h3>{series.title}</h3>
                      <p>{series.description}</p>
                      <ExternalLink href={series.href} label={`查看专题《${series.title}》`} />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          <div className="books-band">
            <div className="page-width">
              <header className="collection-heading books-heading reveal">
                <div>
                  <p className="eyebrow">PUBLISHED WORKS</p>
                  <h2>出版作品</h2>
                </div>
                <p>参与撰写历史文化类出版物10余部，其中主笔出版作品3部。</p>
              </header>
              <div className="book-grid">
                {books.map((book) => (
                  <article className="portfolio-card book-item reveal" key={book.title}>
                    <a className="portfolio-visual book-cover" href={book.image} target="_blank" rel="noreferrer">
                      <img src={book.image} alt={`《${book.title}》书籍封面`} loading="lazy" decoding="async" />
                    </a>
                    <div className="portfolio-copy">
                      <p className="portfolio-tag">{book.identity} · 出版作品</p>
                      <h3>《{book.title}》</h3>
                      <p>{book.publisher}｜{book.date}</p>
                      <p>{book.result}</p>
                      <ExternalLink href={book.image} label={`查看《${book.title}》封面`} />
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="strengths-section" id="strengths">
          <div className="page-width">
            <header className="strengths-heading reveal">
              <p className="eyebrow">CAPABILITIES</p>
              <h2>个人能力</h2>
            </header>
            <div className="strength-portrait">
              {strengths.map((strength) => (
                <article className="strength-item reveal" key={strength.title}>
                  <h3>{strength.title}</h3>
                  <p>{strength.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="contact-section" id="contact">
        <div className="contact-inner reveal">
          <p className="contact-kicker">CONTACT</p>
          <div className="contact-heading">
            <h2>李立廷</h2>
            <p>历史文化内容创作者</p>
          </div>
          <div className="contact-links">
            <a href="mailto:hegel961118@gmail.com"><Mail size={19} strokeWidth={1.5} /><span>hegel961118@gmail.com</span></a>
            <a href="tel:17671751783"><Phone size={19} strokeWidth={1.5} /><span>17671751783</span></a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
