import { useState, useEffect, useRef } from "react";
import "./Process.css";

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

const steps = [
  { n: "01", t: "Discovery", d: "We understand your goals, audience & competitive landscape to build the right strategy." },
  { n: "02", t: "Design",    d: "Wireframes, prototypes & pixel-perfect visual concepts tailored to your brand." },
  { n: "03", t: "Develop",   d: "Clean, fast, responsive code built on modern standards and best practices." },
  { n: "04", t: "Launch",    d: "Deploy, optimise & monitor for maximum performance and sustainable growth." },
];

export default function Process() {
  const [ref, visible] = useInView();
  return (
    <section id="wx-process" className="process">
      <div ref={ref} className="process__inner">
        <div className={`process__header ${visible ? "process__header--visible" : ""}`}>
          <div className="process__label">
            <div className="process__label-line" />
            <span>[ OUR PROCESS ]</span>
          </div>
          <h2 className="process__title">
            How <span className="process__title-accent">WEBXTANT</span><br />Works
          </h2>
        </div>

        <div className="process__grid">
          {steps.map((s, i) => (
            <div
              key={i}
              className={`process__step ${visible ? "process__step--visible" : ""} ${i === 0 ? "process__step--first" : ""}`}
              style={{ transitionDelay: `${i * 0.13}s` }}
            >
              <div className="process__num">{s.n}</div>
              <h4 className="process__step-title">{s.t}</h4>
              <p className="process__step-desc">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
