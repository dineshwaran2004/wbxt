import { useState, useEffect, useRef } from "react";
import "./Hero.css";

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

export default function Hero() {
  const [leftRef, leftVisible] = useInView(0.1);
  const [rightRef, rightVisible] = useInView(0.1);

  return (
    <section className="hero">
      {/* Blobs */}
      <div className="hero__blob hero__blob--top" />
      <div className="hero__blob hero__blob--bottom" />

      {/* Left */}
      <div ref={leftRef} className="hero__left">
        <div className={`hero__badge ${leftVisible ? "hero__badge--visible" : ""}`}>
          <span className="hero__badge-dot" />
          <span className="hero__badge-text">Our Services</span>
        </div>

        <h1 className={`hero__title ${leftVisible ? "hero__title--visible" : ""}`}>
          What We<br />
          <span className="hero__title-gradient">Do Best</span>
        </h1>

        <p className={`hero__desc ${leftVisible ? "hero__desc--visible" : ""}`}>
          From stunning websites to powerful digital strategies — we deliver
          end-to-end web solutions that grow your business and elevate your brand.
        </p>

        <div className={`hero__cta ${leftVisible ? "hero__cta--visible" : ""}`}>
          <button
            className="btn btn--primary"
            onClick={() => document.getElementById("wx-services")?.scrollIntoView({ behavior: "smooth" })}
          >
            Explore Services
          </button>
          <button
            className="btn btn--outline"
            onClick={() => document.getElementById("wx-contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get in Touch
          </button>
        </div>
      </div>

      {/* Right */}
      <div ref={rightRef} className={`hero__right ${rightVisible ? "hero__right--visible" : ""}`}>
        <img
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=80"
          alt="Services Hero"
          className="hero__img"
        />
        <div className="hero__overlay" />
        <div className="hero__tag">WEBXTANT / SERVICES</div>
      </div>
    </section>
  );
}
