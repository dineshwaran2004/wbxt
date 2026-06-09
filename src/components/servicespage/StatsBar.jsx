import { useState, useEffect, useRef } from "react";
import "./StatsBar.css";

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

const stats = [
  { n: "-",  l: "Projects Delivered" },
  { n: "-", l: "Client Satisfaction" },
  { n: "-",   l: "Avg Traffic Growth" },
  { n: "-",  l: "Response Time" },
];

export default function StatsBar() {
  const [ref, visible] = useInView();
  return (
    <div ref={ref} className="stats">
      {stats.map((s, i) => (
        <div
          key={i}
          className={`stats__item ${visible ? "stats__item--visible" : ""}`}
          style={{ transitionDelay: `${i * 0.1}s` }}
        >
          <div className="stats__number">{s.n}</div>
          <div className="stats__label">{s.l}</div>
        </div>
      ))}
    </div>
  );
}
