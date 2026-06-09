import { useState, useEffect, useRef } from "react";
import "./ServiceSection.css";

function useInView(threshold = 0.12) {
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

export default function ServiceSection({ num, title, tags, desc, imgSrc, reverse = false }) {
  const [ref, visible] = useInView();

  return (
    <section className={`service ${reverse ? "service--reverse" : ""}`}>
      {/* Text */}
      <div ref={ref} className={`service__text ${visible ? "service__text--visible" : ""} ${reverse ? "service__text--order2" : ""}`}>
        <div className="service__label">
          <div className="service__label-line" />
          <span className="service__label-text">{num} / SERVICES</span>
        </div>

        <h2 className="service__title">{title}</h2>

        <div className="service__tags">
          {tags.map((col, ci) => (
            <div key={ci} className="service__tag-col">
              {col.map((tag, ti) => (
                <div key={ti} className="service__tag-item">
                  <div className="service__tag-dot" />
                  <span className="service__tag-text">{tag}</span>
                </div>
              ))}
            </div>
          ))}
        </div>

        <p className="service__desc">{desc}</p>
      </div>

      {/* Image */}
      <div className={`service__img-wrap ${reverse ? "service__img-wrap--order1" : ""}`}>
        <img
          src={imgSrc}
          alt={title}
          className={`service__img ${visible ? "service__img--visible" : ""}`}
        />
        <div className={`service__img-overlay ${visible ? "service__img-overlay--visible" : ""}`} />
      </div>
    </section>
  );
}
