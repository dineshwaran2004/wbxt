import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./BlogPage.css";

/* ─── DATA ─── */
const CATEGORIES = ["All", "Web Development", "Design", "SEO", "Branding", "Technology"];

const POSTS = [
  {
    id: 1, featured: true,
    category: "Web Development",
    date: "28 MAY 2026",
    readTime: "8 min read",
    title: "The Future of Web Development: What to Expect in 2026",
    excerpt: "From AI-driven design tools to edge computing and the rise of WebAssembly — we break down the most important trends shaping how modern websites are built and experienced.",
    img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&q=80",
    tags: ["Development", "Trends", "2026"],
  },
  {
    id: 2,
    category: "Design",
    date: "14 MAY 2026",
    readTime: "5 min read",
    title: "UI Design Principles Every Developer Should Know",
    excerpt: "Good design isn't just for designers. Learn the core visual principles — contrast, hierarchy, whitespace, and more — that make interfaces intuitive and beautiful.",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
    tags: ["UI", "Design"],
  },
  {
    id: 3,
    category: "SEO",
    date: "02 MAY 2026",
    readTime: "6 min read",
    title: "Core Web Vitals 2026: A Complete Optimization Guide",
    excerpt: "Google's ranking signals keep evolving. Here's everything you need to know about LCP, FID, CLS, and the new INP metric — with actionable fixes for each.",
    img: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80",
    tags: ["SEO", "Performance"],
  },
  {
    id: 4,
    category: "Branding",
    date: "18 APR 2026",
    readTime: "4 min read",
    title: "Building a Brand Identity That Resonates Online",
    excerpt: "Your brand is more than a logo. Discover how colour psychology, typography, tone of voice, and consistent visual language build trust and recognition in the digital space.",
    img: "https://images.unsplash.com/photo-1524234107056-1c1f48f64ab8?w=800&q=80",
    tags: ["Branding", "Strategy"],
  },
  {
    id: 5,
    category: "Technology",
    date: "05 APR 2026",
    readTime: "7 min read",
    title: "React Server Components: Practical Guide for Production",
    excerpt: "Server Components are changing how we think about React architecture. We walk through real-world patterns, caching strategies, and common pitfalls to avoid.",
    img: "https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&q=80",
    tags: ["React", "Technology"],
  },
  {
    id: 6,
    category: "Web Development",
    date: "22 MAR 2026",
    readTime: "5 min read",
    title: "E-Commerce UX Patterns That Actually Convert",
    excerpt: "Analysing 50+ high-performing online stores, we identify the UX patterns — from product pages to checkout flows — that consistently turn visitors into buyers.",
    img: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80",
    tags: ["E-Commerce", "UX"],
  },
  {
    id: 7,
    category: "Design",
    date: "08 MAR 2026",
    readTime: "4 min read",
    title: "Dark Mode Done Right: Design Best Practices",
    excerpt: "Dark mode isn't just about inverting colours. Learn how to design proper dark themes with adjusted contrast ratios, surface elevations, and semantic colour systems.",
    img: "https://images.unsplash.com/photo-1547652577-b8501a4027e3?w=800&q=80",
    tags: ["Design", "Dark Mode"],
  },
  {
    id: 8,
    category: "SEO",
    date: "19 FEB 2026",
    readTime: "6 min read",
    title: "Local SEO Strategy for Small Businesses in 2026",
    excerpt: "Dominate local search results with this step-by-step guide. Covers Google Business Profile optimisation, local citations, reviews, and geo-targeted content.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["SEO", "Local Business"],
  },
];

/* ─── HOOKS ─── */
function useInView(threshold = 0.1) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

/* ─── COMPONENTS ─── */
function BlogHero() {
  const [ref, vis] = useInView(0.1);
  return (
    <section className="blog-hero" ref={ref}>
      <div className={`blog-hero-badge ${vis ? "visible" : ""}`}>
        <span className="blog-hero-dot" />
        <span>WEBXTANT BLOG</span>
      </div>
      <h1 className={`blog-hero-title ${vis ? "visible" : ""}`}>
        Insights, Ideas<br />& <span>Expertise</span>
      </h1>
      <p className={`blog-hero-desc ${vis ? "visible" : ""}`}>
        Practical guides, design inspiration, and industry trends — from the team
        that builds the web every day.
      </p>
    </section>
  );
}

function FeaturedPost({ post, onReadMore }) {
  const [ref, vis] = useInView(0.1);
  return (
    <article className={`blog-featured ${vis ? "visible" : ""}`} ref={ref}>
      <div className="blog-featured-img-wrap">
        <img src={post.img} alt={post.title} className="blog-featured-img" />
        <div className="blog-featured-overlay" />
        <span className="blog-featured-badge">Featured Article</span>
      </div>
      <div className="blog-featured-content">
        <div className="blog-card-meta">
          <span className="blog-cat-tag">{post.category}</span>
          <span className="blog-dot">·</span>
          <span className="blog-date">{post.date}</span>
          <span className="blog-dot">·</span>
          <span className="blog-read">{post.readTime}</span>
        </div>
        <h2 className="blog-featured-title">{post.title}</h2>
        <p className="blog-featured-excerpt">{post.excerpt}</p>
        <div className="blog-card-tags">
          {post.tags.map(t => <span key={t} className="blog-tag">#{t}</span>)}
        </div>
        <button className="blog-read-btn" onClick={() => onReadMore(post)}>
          Read Article ↗
        </button>
      </div>
    </article>
  );
}

function BlogCard({ post, delay, onReadMore }) {
  const [ref, vis] = useInView(0.08);
  return (
    <article
      ref={ref}
      className={`blog-card ${vis ? "visible" : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="blog-card-img-wrap">
        <img src={post.img} alt={post.title} className="blog-card-img" />
        <div className="blog-card-img-overlay" />
      </div>
      <div className="blog-card-body">
        <div className="blog-card-meta">
          <span className="blog-cat-tag">{post.category}</span>
          <span className="blog-dot">·</span>
          <span className="blog-date">{post.date}</span>
          <span className="blog-dot">·</span>
          <span className="blog-read">{post.readTime}</span>
        </div>
        <h3 className="blog-card-title">{post.title}</h3>
        <p className="blog-card-excerpt">{post.excerpt}</p>
        <div className="blog-card-footer">
          <div className="blog-card-tags">
            {post.tags.map(t => <span key={t} className="blog-tag">#{t}</span>)}
          </div>
          <button className="blog-read-more" onClick={() => onReadMore(post)}>
            Read More →
          </button>
        </div>
      </div>
    </article>
  );
}

function BlogCTA() {
  const [ref, vis] = useInView(0.1);
  const navigate = useNavigate();
  return (
    <section className={`blog-cta ${vis ? "visible" : ""}`} ref={ref}>
      <div className="blog-cta-inner">
        <div className="blog-cta-badge">START A PROJECT</div>
        <h2 className="blog-cta-title">Ready to build something<br /><span>extraordinary?</span></h2>
        <p className="blog-cta-desc">
          Turn your ideas into a high-performance digital experience.
          Let's create something great together.
        </p>
        <div className="blog-cta-btns">
          <button className="blog-cta-primary" onClick={() => navigate("/start-project")}>
            Start a Project →
          </button>
          <button className="blog-cta-secondary" onClick={() => navigate("/contact")}>
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}

/* ─── MAIN BLOG PAGE ─── */
export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? POSTS
    : POSTS.filter(p => p.category === activeCategory);

  const featured = POSTS.find(p => p.featured);
  const rest = filtered.filter(p => !p.featured || activeCategory !== "All");

  const handleReadMore = (post) => {
    /* In production this would navigate to a post detail page */
    alert(`Opening: "${post.title}"\n\nThis would navigate to the full article page.`);
  };

  return (
    <div className="blog-page">

      <BlogHero />

      {/* CATEGORIES */}
      <section className="blog-categories">
        <div className="blog-cats-scroll">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              className={`blog-cat-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* FEATURED (only when showing All) */}
      {activeCategory === "All" && featured && (
        <div className="blog-featured-section">
          <FeaturedPost post={featured} onReadMore={handleReadMore} />
        </div>
      )}

      {/* GRID */}
      <section className="blog-grid-section">
        <div className="blog-grid">
          {rest.map((post, i) => (
            <BlogCard key={post.id} post={post} delay={i * 80} onReadMore={handleReadMore} />
          ))}
        </div>
      </section>

      <BlogCTA />

    </div>
  );
}
