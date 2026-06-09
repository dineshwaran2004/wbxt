import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Awards.css';

gsap.registerPlugin(ScrollTrigger);

const AWARDS = [
  { name: 'Some article on Medium',  tags: ['UI/UX DESIGN','DEVELOPMENT'], year: '2026', img: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500&q=80' },
  { name: 'Awwwards nomination',      tags: ['UI/UX','FRONTEND'],           year: '2026', img: 'https://images.unsplash.com/photo-1614850715649-1d0106293bd1?w=500&q=80' },
  { name: 'Behance curated work',     tags: ['ILLUSTRATIONS','GRAPHIC DESIGN'], year: '2025', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&q=80' },
  { name: 'Article on Medium',        tags: ['UI/UX','FRONTEND'],           year: '2026', img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=500&q=80' },
  { name: 'Awwwards nomination',      tags: ['UI/UX DESIGN','DEVELOPMENT'], year: '2025', img: 'https://images.unsplash.com/photo-1604079628040-94301bb21b91?w=500&q=80' },
  { name: 'CSS Design Awards',        tags: ['ILLUSTRATIONS','WEB DESIGN'], year: '2025', img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&q=80' },
];

export default function Awards() {
  const secRef    = useRef(null);
  const hoverRef  = useRef(null);
  const hoverImgRef = useRef(null);

  useEffect(() => {
    gsap.from(secRef.current.querySelectorAll('.award-row'), {
      opacity: 0, x: -28, duration: .7, stagger: .07, ease: 'power3.out',
      scrollTrigger: { trigger: secRef.current, start: 'top 80%' }
    });
    gsap.from(secRef.current.querySelector('.awards-title'), {
      opacity: 0, y: 28, duration: .9, ease: 'power3.out',
      scrollTrigger: { trigger: secRef.current, start: 'top 85%' }
    });
  }, []);

  const onEnter = (img) => {
    hoverImgRef.current.src = img;
    hoverRef.current.classList.add('visible');
  };
  const onMove = (e) => {
    gsap.to(hoverRef.current, { left: e.clientX + 'px', top: (e.clientY - 44) + 'px', duration: .38, ease: 'power2.out' });
  };
  const onLeave = () => hoverRef.current.classList.remove('visible');

  return (
    <section id="awards" className="s" ref={secRef}>
      <div className="container">
        <div className="awards-header">
          <h2 className="awards-title section-title">Awards &amp;<br />publications</h2>
          <a href="#works" className="bracket-link">[ CASE STUDIES ]</a>
        </div>
        <ul className="awards-list">
          {AWARDS.map((a, i) => (
            <li
              key={i} className="award-row"
              onMouseEnter={() => onEnter(a.img)}
              onMouseMove={onMove}
              onMouseLeave={onLeave}
            >
              <span className="award-name">{a.name}</span>
              <span className="award-tags">{a.tags.map(t => <em key={t}>{t}</em>)}</span>
              <span className="award-year">{a.year}</span>
              <button className="award-btn">SEE PAGE</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="award-hover-img" ref={hoverRef}>
        <img ref={hoverImgRef} src="" alt="" />
      </div>
    </section>
  );
}
