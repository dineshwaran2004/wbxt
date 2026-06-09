import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './Hero.css';

const WORDS = [
  { text: 'We are a', cls: '' }, { text: 'creative', cls: '' }, { text: 'web', cls: '' },
  { text: 'agency', cls: '' }, { text: 'specializing', cls: '' }, { text: 'in', cls: '' },
  { text: 'innovative', cls: 'italic' }, { text: 'design', cls: '' }, { text: 'and', cls: '' },
  { text: 'cutting-edge', cls: '' }, { text: 'development.', cls: '' },
  { text: 'We help businesses stand out', cls: 'muted' },
  { text: 'and thrive in the modern landscape.', cls: 'muted' },
];

export default function Hero() {
  const imgRef  = useRef(null);
  const tagRef  = useRef(null);
  const headRef = useRef(null);

  useEffect(() => {
    const words = headRef.current.querySelectorAll('.word');
    const tl = gsap.timeline({ delay: 1.2 });
    tl.from(imgRef.current, { scale: 1.08, duration: 1.5, ease: 'power3.out' })
      .to(tagRef.current,   { opacity: 1, y: 0, duration: .7, ease: 'power3.out' }, '-=.9')
      .to(words,            { y: 0, opacity: 1, duration: .9, stagger: .055, ease: 'power4.out' }, '-=.5');
  }, []);

  return (
    <section id="hero">
      <div className="hero-img-strip">
        <img
          ref={imgRef}
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600&q=80"
          alt="Team"
        />
        <div className="hero-img-overlay" />
      </div>
      <div className="hero-body container">
        <p className="hero-tagline" ref={tagRef}>[ CREATIVE DIGITAL AGENCY ]</p>
        <h1 className="hero-title" ref={headRef}>
          {WORDS.map((w, i) => (
            <span key={i} className={`word ${w.cls}`}>{w.text} </span>
          ))}
        </h1>
      </div>
    </section>
  );
}
