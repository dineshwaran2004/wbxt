import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const NAV_LINKS = [
  { label: 'About',     to: '/about' },
  { label: 'Services',  to: '/services' },
  { label: 'Portfolio', to: '/portfolio' },
  { label: 'Blog',      to: '/blog' },
  { label: 'Contact',   to: '/contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    gsap.from(navRef.current, { y: -28, opacity: 0, duration: .9, ease: 'power3.out', delay: 1.4 });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleMenu = () => {
    const next = !menuOpen;
    setMenuOpen(next);
    document.body.style.overflow = next ? 'hidden' : '';
  };

  const closeMenu = () => {
    setMenuOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <>
      <header className={`site-header${scrolled ? ' scrolled' : ''}`}>
        <nav className="nav container" ref={navRef}>
          <Link to="/" className="nav-logo">WEBXTANT</Link>
          <ul className="nav-links">
            {NAV_LINKS.map(l => (
              <li key={l.label}><Link to={l.to}>{l.label}</Link></li>
            ))}
          </ul>
          <button className="nav-cta" onClick={() => navigate('/contact')}>Get in touch</button>
          <button className={`nav-burger${menuOpen ? ' open' : ''}`} onClick={toggleMenu} aria-label="Menu">
            <span /><span />
          </button>
        </nav>
      </header>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        <ul>
          {[...NAV_LINKS, { label: 'Home', to: '/' }].map(l => (
            <li key={l.label}>
              <Link to={l.to} onClick={closeMenu}>{l.label}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
