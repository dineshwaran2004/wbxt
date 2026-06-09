import { useState } from "react";
import { POSTS } from "./constants";
import { useInView } from "./index.js";
import "./Insights.css";

/* ─── POST CARD ──────────────────────────────────────────────────────────── */
function PostCard({ post, index, parentVisible }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      data-cursor="READ"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`post-card${parentVisible ? " post-card--visible" : ""}`}
      style={{ transitionDelay: `${index * 0.12}s` }}
    >
      <div className="post-card__img-wrap">
        <img
          src={
            post?.img ||
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80"
          }
          alt={post?.title || "Post"}
          className="post-card__img"
          style={{
            transform: hovered ? "scale(1.05)" : "scale(1)",
          }}
        />
      </div>

      <p className="post-card__date">
        {post?.date || "2026"}
      </p>

      <h3 className="post-card__title">
        {post?.title || "Untitled Post"}
      </h3>

      <div className="post-card__tags">
        {(post?.tags || []).map((t, i) => (
          <span key={i} className="post-card__tag">
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

/* ─── INSIGHTS SECTION ──────────────────────────────────────────────────── */
export default function Insights({ id }) {
  const [ref, visible] = useInView(0.1);

  const postsData = Array.isArray(POSTS) ? POSTS : [];

  return (
    <section id={id} className="insights">
      <div className="insights__header">
        <span className="insights__eyebrow">N/05</span>

        <h2
          ref={ref}
          className={`insights__heading${
            visible ? " insights__heading--visible" : ""
          }`}
        >
          My newest
          <br />
          insights
        </h2>
      </div>

      <div className="insights__grid">
        {postsData.length > 0 ? (
          postsData.map((p, i) => (
            <PostCard
              key={i}
              post={p}
              index={i}
              parentVisible={visible}
            />
          ))
        ) : (
          <div
            style={{
              textAlign: "center",
              padding: "60px 20px",
              width: "100%",
            }}
          >
            <h3>No Posts Found</h3>
            <p>Add posts in constants.js</p>
          </div>
        )}
      </div>
    </section>
  );
}