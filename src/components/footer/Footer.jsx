import { Link, useNavigate } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const navigate = useNavigate();

  const handleStartProject = () => navigate("/start-project");

  return (
    <footer className="footer">

      {/* TOP MENU */}
      <div className="footer-top">
        <Link to="/">HOME</Link>
        <Link to="/about">ABOUT</Link>
        <Link to="/services">SERVICES</Link>
        <Link to="/portfolio">PORTFOLIO</Link>
        <Link to="/blog">BLOG</Link>
        <Link to="/contact">CONTACT</Link>
      </div>

      {/* CTA STRIP */}
      <div className="footer-cta-strip">
        <h2>
          Ready to build<br />
          something <span>great?</span>
        </h2>
        <button className="footer-cta-btn" onClick={handleStartProject}>Start a Project →</button>
      </div>

      {/* INFO */}
      <div className="footer-info">
        <div className="footer-left">
          <p><a href="mailto:contact@webxtant.com">contact@webxtant.com</a></p>
          <p><a href="tel:+918754021440">+91 87540 21440</a></p>
          <p>Tiruppur, Tamil Nadu, India</p>
        </div>
        <div className="footer-right">
          <p>©2026</p>
          <p>WEBXTANT. ALL RIGHTS RESERVED</p>
          <p>Creative Team of WEBXTANT</p>
        </div>
      </div>

      {/* HUGE LOGO */}
      <div className="footer-logo">
        <h1>WEBXTANT</h1>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <div className="footer-socials">
          <a href="https://www.instagram.com/webxtant" target="_blank" rel="noreferrer">INSTAGRAM</a>
    
          <a href="https://github.com" target="_blank" rel="noreferrer">GITHUB</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">LINKEDIN</a>
        </div>
        <button
          className="back-top"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          BACK TO TOP ↑
        </button>
      </div>

    </footer>
  );
}

export default Footer;
