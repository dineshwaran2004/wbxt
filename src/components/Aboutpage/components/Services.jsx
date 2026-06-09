import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Services.css';

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  {
    icon: (
      <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="14" cy="14" r="10"/><circle cx="14" cy="14" r="4"/>
        <line x1="14" y1="4" x2="14" y2="0"/><line x1="14" y1="28" x2="14" y2="24"/>
        <line x1="4" y1="14" x2="0" y2="14"/><line x1="28" y1="14" x2="24" y2="14"/>
      </svg>
    ),
    title: 'Strategy',
    desc: 'Discover how artificial intelligence is transforming artistic processes, pushing boundaries, and inspiring new possibilities in digital design.',
    time: '1-2 WEEKS TIMELINE',
  },
  {
    icon: (
      <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="3" y="3" width="22" height="22" rx="2"/><path d="M3 10h22M10 10v15"/>
      </svg>
    ),
    title: 'Design',
    desc: 'Discover how artificial intelligence is transforming artistic processes, pushing boundaries, and inspiring new possibilities in digital design.',
    time: '~2 WEEKS TIMELINE',
  },
  {
    icon: (
      <svg viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="2" y="2" width="24" height="24" rx="3"/><path d="M8 10l4 4-4 4M15 18h5"/>
      </svg>
    ),
    title: 'Development',
    desc: 'Discover how artificial intelligence is transforming artistic processes, pushing boundaries, and inspiring new possibilities in digital design.',
    time: '3-4 WEEKS TIMELINE',
  },
];

export default function Services() {
  const sRef = useRef(null);
  useEffect(() => {
    gsap.from(sRef.current.querySelectorAll('.service-card'), {
      opacity: 0, y: 40, duration: .85, stagger: .12, ease: 'power3.out',
      scrollTrigger: { trigger: sRef.current, start: 'top 82%' }
    });
  }, []);

  return (
    <section id="services" className="s" ref={sRef}>
      <div className="container">
        <div className="services-grid">
          {SERVICES.map((sv) => (
            <div className="service-card" key={sv.title}>
              <div className="service-head">
                <span className="service-icon">{sv.icon}</span>
                <h3>{sv.title}</h3>
              </div>
              <p>{sv.desc}</p>
              <span className="service-time">{sv.time}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
