import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './News.css';

gsap.registerPlugin(ScrollTrigger);

const ARTICLES = [
  { date: '03 JANUARY, 2026',  title: 'Frontend innovations and user journeys',               img: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=500&q=80' },
  { date: '15 JANUARY, 2026',  title: 'Branding in creating digital experiences',             img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&q=80' },
  { date: '28 JANUARY, 2026',  title: 'The future of motion in digital products',             img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=500&q=80' },
  { date: '02 FEBRUARY, 2026', title: 'Designing for the future of interactive digital spaces', img: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=500&q=80' },
];

export default function News() {
  const secRef = useRef(null);
  useEffect(() => {
    gsap.from(secRef.current.querySelectorAll('.news-card'), {
      opacity: 0, y: 36, duration: .8, stagger: .1, ease: 'power3.out',
      scrollTrigger: { trigger: secRef.current.querySelector('.news-grid'), start: 'top 86%' }
    });
    gsap.from(secRef.current.querySelector('.news-header'), {
      opacity: 0, y: 24, duration: .9, ease: 'power3.out',
      scrollTrigger: { trigger: secRef.current, start: 'top 88%' }
    });
  }, []);

  return (
    <section id="news" className="s" ref={secRef}>
      <div className="container">
        <div className="news-header">
          <h2 className="section-title">Featured news</h2>
          <a href="#news" className="bracket-link">[ NEWS OVERVIEW ]</a>
        </div>
        <div className="news-grid">
          {ARTICLES.map((a, i) => (
            <article className="news-card" key={i}>
              <span className="news-date">{a.date}</span>
              <div className="news-img">
                <img src={a.img} alt={a.title} />
              </div>
              <h4>{a.title}</h4>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
