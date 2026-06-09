import { useState, useEffect } from "react";
import "./Navbar.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import GhostCursor from "./GhostCursor";
import { useTheme } from "../../context/ThemeContext";
import { Sun, Moon } from "lucide-react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const { theme, toggleTheme } = useTheme();

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (path) =>
    path === "/"
      ? location.pathname === "/"
      : location.pathname.startsWith(path);

  const handleStartProject = () => {
    setMenuOpen(false);
    navigate("/start-project");
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">

        {/* LOGO */}
        <div className="logo">
          <Link to="/">
            <img src="/images/logo.png" alt="Webxtant Logo" />
          </Link>
        </div>

        {/* DESKTOP NAV LINKS */}
        <ul className="nav-links">
          <li>
            <Link to="/" className={isActive("/") ? "active" : ""}>
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className={isActive("/about") ? "active" : ""}
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/services"
              className={isActive("/services") ? "active" : ""}
            >
              Services
            </Link>
          </li>

          <li>
            <Link
              to="/portfolio"
              className={isActive("/portfolio") ? "active" : ""}
            >
              Portfolio
            </Link>
          </li>

          <li>
            <Link
              to="/blog"
              className={isActive("/blog") ? "active" : ""}
            >
              Blog
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className={isActive("/contact") ? "active" : ""}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* RIGHT SIDE */}
        <div className="nav-right">

          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label="Toggle Theme"
          >
            {theme === "light" ? (
              <Moon size={20} />
            ) : (
              <Sun size={20} />
            )}
          </button>

          {/* Desktop Button */}
          <button
            className="nav-btn"
            onClick={handleStartProject}
          >
            Start Project
          </button>

          {/* Hamburger */}
          <div
            className={`hamburger ${menuOpen ? "active" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            <span></span>
            <span></span>
          </div>

        </div>

      </nav>

      {/* FULLSCREEN MENU */}
      <div className={`fullscreen-menu ${menuOpen ? "show" : ""}`}>

        {/* LEFT */}
        <div className="menu-left">

          <GhostCursor
            color="#B497CF"
            brightness={2}
            edgeIntensity={0}
            trailLength={50}
            inertia={0.5}
            grainIntensity={0.05}
            bloomStrength={0.1}
            bloomRadius={1}
            bloomThreshold={0.025}
            fadeDelayMs={1000}
            fadeDurationMs={1500}
          />

          <div className="webxtant-text">
            WEBXTANT
          </div>

        </div>

        {/* RIGHT */}
        <div className="menu-right">

          <button
            className="close-btn"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>

          <div className="menu-links">

            <Link
              to="/"
              onClick={() => setMenuOpen(false)}
              data-number="01"
              className={isActive("/") ? "menu-active" : ""}
            >
              <span>Home</span>
            </Link>

            <Link
              to="/about"
              onClick={() => setMenuOpen(false)}
              data-number="02"
              className={isActive("/about") ? "menu-active" : ""}
            >
              <span>About</span>
            </Link>

            <Link
              to="/services"
              onClick={() => setMenuOpen(false)}
              data-number="03"
              className={isActive("/services") ? "menu-active" : ""}
            >
              <span>Services</span>
            </Link>

            <Link
              to="/portfolio"
              onClick={() => setMenuOpen(false)}
              data-number="04"
              className={isActive("/portfolio") ? "menu-active" : ""}
            >
              <span>Portfolio</span>
            </Link>

            <Link
              to="/blog"
              onClick={() => setMenuOpen(false)}
              data-number="05"
              className={isActive("/blog") ? "menu-active" : ""}
            >
              <span>Blog</span>
            </Link>

            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              data-number="06"
              className={isActive("/contact") ? "menu-active" : ""}
            >
              <span>Contact</span>
            </Link>

          </div>

          <div className="menu-footer">

            <p>READY TO BUILD?</p>

            <h2>
              Let's create <span>something great</span>
            </h2>

            <button
              className="menu-start-btn"
              onClick={handleStartProject}
            >
              Start Project →
            </button>

          </div>

        </div>

      </div>
    </>
  );
}

export default Navbar;