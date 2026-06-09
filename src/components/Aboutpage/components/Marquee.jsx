import './Marquee.css';

const items = ['Brand Identity','Web Design','Motion Design','Digital Strategy','UI / UX Design','Development','Creative Direction'];

export default function Marquee() {
  const all = [...items, ...items];
  return (
    <div className="marquee-wrap">
      <div className="marquee-track">
        {all.map((item, i) => (
          <div className="marquee-item" key={i}>
            {item} <span className="marquee-dot" />
          </div>
        ))}
      </div>
    </div>
  );
}
