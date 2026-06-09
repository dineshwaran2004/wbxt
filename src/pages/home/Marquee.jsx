import "./Marquee.css";

const items = [
  "Website Development","UI / UX Design","SEO Optimization",
  "E-Commerce","Site Maintenance","Website Redesign",
];

export default function Marquee() {
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="marquee-item">
            {item} <span className="marquee-divider">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
