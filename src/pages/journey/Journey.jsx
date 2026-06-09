import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Journey.css";

const chapters = [
  {
    index: "01",
    tag: "WEB DESIGN",
    title: "BLOG PAGES",
    subtitle: "Creative · Full Screen · Ads · Archive",
    body: "We craft visually stunning blog pages that captivate readers and drive engagement. From editorial layouts to full-screen immersive experiences.",
    tags: ["Editorial", "CMS", "SEO"],
    image: "/images/BLOG PAGE.png",
    theme: "blue",
  },
  {
    index: "02",
    tag: "PORTFOLIO",
    title: "PORTFOLIO SITES",
    subtitle: "Projects · Archive · Case Studies",
    body: "Showcase your work with elegance. Our portfolio layouts are designed to make your projects shine and leave lasting impressions on potential clients.",
    tags: ["Gallery", "Filterable", "Animated"],
    image: "/images/PORTFOLIO SITE.png",
    theme: "light",
  },
  {
    index: "03",
    tag: "BRANDING",
    title: "BRAND IDENTITY",
    subtitle: "Logo · Colors · Typography · Guidelines",
    body: "Build a brand that resonates. We create comprehensive brand identities that communicate your values and connect deeply with your audience.",
    tags: ["Logo Design", "Brand Guide", "Visual Identity"],
    image: "/images/BRAND IDENTITY.png",
    theme: "blue",
  },
];

function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
}

function JourneyCard({ item, index }) {
  const navigate = useNavigate();
  const [cardRef, visible] = useReveal(0.2);

  // Even index (0, 2, ...) = normal: number | content | image
  // Odd index  (1, 3, ...) = reversed: image | content | number
  const isReversed = index % 2 !== 0;

  return (
    <div
      ref={cardRef}
      className={`journey-card ${item.theme} ${isReversed ? "reversed" : ""} ${
        visible ? "card-visible" : ""
      }`}
      style={{ transitionDelay: `${index * 0.15}s` }}
    >
      {/* Number Section */}
      <div className={`journey-number ${isReversed ? "num-right" : "num-left"}`}>
        <h3>{item.index}</h3>
        <div className="journey-line">
          <span className="journey-dot"></span>
        </div>
      </div>

      {/* Content */}
      <div className="journey-content">
        <span className="journey-tag">{item.tag}</span>
        <h2>{item.title}</h2>
        <p className="journey-subtitle">{item.subtitle}</p>
        <p className="journey-body">{item.body}</p>
        <div className="journey-tags">
          {item.tags.map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
        </div>
        <button className="journey-btn" onClick={() => navigate("/services")}>
          Explore Service →
        </button>
      </div>

      {/* Image */}
      <div className="journey-image">
        <div className="journey-glow"></div>
        <img src={item.image} alt={item.title} />
      </div>
    </div>
  );
}

export default function Journey() {
  const [headerRef, headerVisible] = useReveal(0.2);

  return (
    <section className="journey-section">
      <div
        ref={headerRef}
        className={`journey-header ${headerVisible ? "header-visible" : ""}`}
      >
        <div>
          <span className="journey-label">WHAT WE DELIVER</span>
          <h2 className="journey-title">
            OUR SERVICES,
            <br />
            UP CLOSE
          </h2>
        </div>
        <p className="journey-description">
          Powerful digital solutions designed to elevate your brand and drive
          real results.
        </p>
      </div>

      <div className="journey-cards">
        {chapters.map((item, index) => (
          <JourneyCard key={item.index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
}