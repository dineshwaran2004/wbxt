import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./FooterStrip.css";

const servicesList = [
  "Business Portfolio Website",
  "Personal Portfolio Website",
  "E-Commerce Website",
  "Website Design",
  "Website Redesign",
  "SEO Optimization",
];

const navLinks = [
  { label: "Home",      to: "/" },
  { label: "About",     to: "/about" },
  { label: "Services",  to: "/services" },
  { label: "Portfolio", to: "/portfolio" },
  { label: "Blog",      to: "/blog" },
  { label: "Contact",   to: "/contact" },
];

export default function FooterStrip() {
  const navigate = useNavigate();
  return (
    <footer className="footer">
      <div className="footer__grid">
        {/* Services */}
        <div>
          <div className="footer__section-label">/ SERVICES</div>
          {servicesList.map((s, i) => (
            <div key={i} className="footer__service-item" onClick={() => navigate("/services")} style={{ cursor: "pointer" }}>
              <span>[{String(i + 1).padStart(2, "0")}] {s}</span>
              <span className="footer__arrow">↗</span>
            </div>
          ))}
        </div>

        {/* Contact */}
        <div>
          <div className="footer__section-label">/ CONTACT</div>
          <div className="footer__contact-text"><a href="mailto:hello@webxtant.com">hello@webxtant.com</a></div>
          <div className="footer__contact-text"><a href="tel:+918754021440">+91 87540 21440</a></div>
          <div className="footer__section-label" style={{ marginTop: 28 }}>/ SOCIAL</div>
          {[
            { name: "WhatsApp",  href: "https://wa.me/" },
            { name: "Instagram", href: "https://www.instagram.com/webxtant" },
            { name: "Behance",   href: "https://behance.net/" },
            { name: "LinkedIn",  href: "https://linkedin.com/" },
          ].map(l => (
            <a key={l.name} href={l.href} target="_blank" rel="noreferrer" className="footer__social-item">{l.name}</a>
          ))}
        </div>

        {/* Discover */}
        <div>
          <div className="footer__section-label">/ DISCOVER</div>
          {navLinks.map(l => (
            <Link key={l.label} to={l.to} className="footer__nav-item">{l.label}</Link>
          ))}
        </div>
      </div>

      {/* Giant brand */}
      <div className="footer__brand">WEBXTANT</div>

      <div className="footer__bottom">
        <span>© 2026 WEBXTANT. All rights reserved.</span>
        <span
          className="footer__back-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          BACK TO TOP ↑
        </span>
      </div>
    </footer>
  );
}
