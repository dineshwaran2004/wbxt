import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Team.css';

gsap.registerPlugin(ScrollTrigger);

const MEMBERS = [
  { name: 'Helen Pineapple', role: 'CO-FOUNDER & HEAD OF DESIGN', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=600&q=80&fit=crop&crop=face' },
  { name: 'Alex Tomato',     role: 'SEO, BRAND MANAGER',          img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80&fit=crop&crop=face' },
  { name: 'Jenny Berry',     role: 'FRONTEND DEVELOPER',          img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80&fit=crop&crop=face' },
];

export default function Team() {
  const secRef = useRef(null);

  useEffect(() => {
    gsap.from(secRef.current.querySelector('.team-big-title'), {
      opacity: 0, y: 56, duration: 1, ease: 'power4.out',
      scrollTrigger: { trigger: secRef.current, start: 'top 80%' }
    });
    gsap.from(secRef.current.querySelector('.team-desc'), {
      opacity: 0, y: 20, duration: .8, delay: .2, ease: 'power3.out',
      scrollTrigger: { trigger: secRef.current, start: 'top 80%' }
    });
    gsap.from(secRef.current.querySelectorAll('.team-card'), {
      opacity: 0, y: 46, duration: .85, stagger: .12, ease: 'power3.out',
      scrollTrigger: { trigger: secRef.current.querySelector('.team-grid'), start: 'top 86%' }
    });
  }, []);

  return (
    <section id="team" className="s" ref={secRef}>
      <div className="container">
        <div className="team-header">
          <h2 className="team-big-title">Creative<br />leaders</h2>
          <div>
            <p className="team-label">[ OUR TEAM ]</p>
            <p className="team-desc">
              Technical experts dedicated to delivering<br />
              <strong>flawless, high-performing digital<br />experiences.</strong>
            </p>
          </div>
        </div>
        <div className="team-grid">
          {MEMBERS.map((m) => (
            <div className="team-card" key={m.name}>
              <div className="team-img-wrap">
                <img src={m.img} alt={m.name} />
                <div className="team-links">
                  <a href="#team">LINKEDIN</a>
                  <a href="#team">BEHANCE</a>
                </div>
              </div>
              <h4>{m.name}</h4>
              <p>{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
