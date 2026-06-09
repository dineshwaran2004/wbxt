import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import './Footer.css';

gsap.registerPlugin(ScrollTrigger);

const ArrowIcon = () => (
  <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M2 14L14 2M14 2H6M14 2v8" />
  </svg>
);

const NAV_LINKS = [
  { label: 'Home',      to: '/' },
  { label: 'About',     to: '/about' },
  { label: 'Services',  to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Blog',      to: '/blog' },
  { label: 'Contact',   to: '/contact' },
];

export default function Footer() {
  const brandRef = useRef(null);
  const botRef   = useRef(null);

  useEffect(() => {
    gsap.from(brandRef.current, {
      clipPath: 'inset(0 100% 0 0)', duration: 1.4, ease: 'power4.inOut',
      scrollTrigger: { trigger: '#footer', start: 'top 90%' }
    });
    gsap.from(botRef.current.querySelectorAll('.footer-col'), {
      opacity: 0, y: 24, duration: .8, stagger: .1, ease: 'power3.out',
      scrollTrigger: { trigger: botRef.current, start: 'top 88%' }
    });
  }, []);

  return (
    <footer id="footer">
      <div className="footer-brand">
        <span ref={brandRef}>WEBXTANT</span>
      </div>
      <div className="footer-bottom container" ref={botRef}>
        <div className="footer-col">
          <p className="footer-col-label">/ NAV</p>
          <nav className="footer-nav">
            {NAV_LINKS.map(l => (
              <Link key={l.label} to={l.to}>{l.label}</Link>
            ))}
          </nav>
        </div>
        <div className="footer-col">
          <p className="footer-col-label">/ CONTACT</p>
          <a href="mailto:hello@webxtant.com">hello@webxtant.com</a>
          <a href="tel:+918754021440">+91 87540 21440</a>
          <p className="footer-col-label" style={{ marginTop: 22 }}>/ INFO</p>
          <Link to="/services">Services</Link>
          <Link to="/portfolio">Portfolio</Link>
        </div>
        <div className="footer-col">
          <p className="footer-col-label">/ SOCIAL</p>
          <ul className="footer-social">
            {[['01','Instagram','https://www.instagram.com/webxtant'],['02','Behance','https://behance.net'],['03','Github','https://github.com'],['04','LinkedIn','https://linkedin.com'],['05','Dribbble','https://dribbble.com']].map(([n, name, href]) => (
              <li key={name}>
                <span>[{n}]</span>
                <a href={href} target="_blank" rel="noreferrer">{name}</a>
                <ArrowIcon />
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-copy container">
        <span>© 2026 WEBXTANT. ALL RIGHTS RESERVED.</span>
        <a href="#hero" className="footer-back-top" onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          BACK TO TOP ↑
        </a>
        <span>CREATIVE DIGITAL AGENCY</span>
      </div>
    </footer>
  );
}
