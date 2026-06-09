import { useState, useEffect, useRef, useCallback } from "react";
import { HERO_SLIDES } from "./constants";
import "./Hero.css";

export default function Hero({ id }) {
  const slides = Array.isArray(HERO_SLIDES) ? HERO_SLIDES : [];

  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);
  const timerRef = useRef(null);

  const advance = useCallback(
    (to) => {
      if (transitioning || slides.length === 0) return;

      setTransitioning(true);

      setTimeout(() => {
        setCurrent((prev) => {
          if (typeof to === "number") {
            return to;
          }
          return (prev + 1) % slides.length;
        });

        setTransitioning(false);
      }, 600);
    },
    [transitioning, slides.length]
  );

  useEffect(() => {
    if (slides.length === 0) return;

    timerRef.current = setInterval(() => {
      advance();
    }, 4000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [advance, slides.length]);

  if (slides.length === 0) {
    return (
      <section id={id} className="hero">
        <div className="hero__content">
          <p className="hero__label">No Data</p>
          <h1 className="hero__title">HERO_SLIDES Not Found</h1>
          <p className="hero__sub">
            Check your constants.js file and HERO_SLIDES export.
          </p>
        </div>
      </section>
    );
  }

  const slide = slides[current] || slides[0];

  return (
    <section id={id} className="hero">
      {/* Background Images */}
      {slides.map((s, i) => (
        <div
          key={i}
          className={`hero__slide ${
            i === current ? "hero__slide--active" : ""
          }`}
        >
          <img
            src={s?.img || ""}
            alt={s?.title || "Hero Slide"}
            className="hero__slide-img"
          />
        </div>
      ))}

      {/* Center Content */}
      <div className="hero__content">
        <p
          className={`hero__label ${
            transitioning ? "hero__label--hidden" : ""
          }`}
        >
          {slide?.label || ""}
        </p>

        <h1
          className={`hero__title ${
            transitioning ? "hero__title--hidden" : ""
          }`}
        >
          {slide?.title || ""}
        </h1>

        <p
          className={`hero__sub ${
            transitioning ? "hero__sub--hidden" : ""
          }`}
        >
          {slide?.sub || ""}
        </p>
      </div>

      {/* Indicators */}
      <div className="hero__indicators">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => advance(i)}
            data-cursor=""
            className={`hero__dot ${
              i === current ? "hero__dot--active" : ""
            }`}
          />
        ))}
      </div>

      {/* Progress Bar */}
      <div className="hero__progress-track">
        <div
          className="hero__progress-bar"
          style={{
            width: `${((current + 1) / slides.length) * 100}%`,
          }}
        />
      </div>
    </section>
  );
}