import { EXPERIENCE, EDUCATION, TOOLS, ABOUT_IMG } from "./constants";
import { useInView } from "./index.js";
import "./About.css";

export default function About({ id }) {
  const [ref, visible] = useInView(0.1);

  return (
    <section id={id} className="about">
      {/* Full-bleed image */}
      <div className="about__image-wrap">
        <img
          src={ABOUT_IMG}
          alt="About"
          className="about__image"
        />
        <div className="about__image-fade" />
      </div>

      <div className="about__content">
        <div ref={ref}>
          {/* Big statement */}
          <p
            className={`about__statement${visible ? " about__statement--visible" : ""}`}
          >
            Web design is evolving rapidly, and I strive to stay ahead.{" "}
            <span className="about__statement-highlight">
              Emerging tools and technologies enable me to create visually
              stunning and seamlessly functional websites.
            </span>
          </p>

          {/* ── Experience ── */}
          <div className="about__section">
            <p className="about__section-label">[01] Experience</p>
            {EXPERIENCE.map((e, i) => (
              <div
                key={i}
                className={`about__row${visible ? " about__row--visible" : ""}`}
                style={{ transitionDelay: `${i * 0.07 + 0.3}s` }}
              >
                <h4 className="about__row-title">{e.role}</h4>
                <div className="about__row-meta">
                  <span className="about__row-company">
                    <strong>{e.company}</strong> {e.type}
                  </span>
                  <span className="about__row-period">{e.period}</span>
                </div>
              </div>
            ))}
          </div>

          {/* ── Education ── */}
          <div className="about__section">
            <p className="about__section-label">[02] Education</p>
            {EDUCATION.map((e, i) => (
              <div
                key={i}
                className={`about__row${visible ? " about__row--visible" : ""}`}
                style={{ transitionDelay: `${i * 0.07 + 0.3}s` }}
              >
                <h4
                  className={`about__row-title${e.muted ? " about__row-title--muted" : ""}`}
                >
                  {e.degree}
                </h4>
                <div className="about__row-meta">
                  <span
                    className={`about__row-company${e.muted ? " about__row-company--muted" : ""}`}
                  >
                    {e.school}
                  </span>
                  <span
                    className={`about__row-period${e.muted ? " about__row-period--muted" : ""}`}
                  >
                    {e.period}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* ── Toolbox ── */}
          <div className="about__section">
            <p className="about__section-label">[03] Everyday's Toolbox</p>
            <div className="about__tools">
              {TOOLS.map((t, i) => (
                <div
                  key={i}
                  className={`about__tool${visible ? " about__tool--visible" : ""}`}
                  style={{ transitionDelay: `${i * 0.06 + 0.5}s` }}
                >
                  <span className="about__tool-icon">{t.icon}</span>
                  <span className="about__tool-name">{t.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
