import { useState, useEffect, useRef } from "react";
import "./App.css";

function useScrollAnimation(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, visible];
}

function Nav() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    document.body.setAttribute("data-theme", dark ? "dark" : "light");
  }, [dark]);
  return (
    <nav className="nav">
      <div className="nav-logo">
        <span className="logo-icon">⬡</span>
        <span className="logo-text">AZURIO<br />TEMPLATE</span>
      </div>
      <div className="nav-actions">
        <a href="#contact" className="nav-link">SAY HELLO ↗</a>
        <button className="nav-toggle" onClick={() => setDark(d => !d)}>
          NIGHT / {dark ? "☀" : "☽"}
        </button>
        <button className="nav-menu">
          <span /><span />
        </button>
      </div>
    </nav>
  );
}

function Breadcrumb() {
  return <div className="breadcrumb">HOME / <span>CONTACT</span></div>;
}

function HeroSection() {
  const [ref, vis] = useScrollAnimation(0.1);
  return (
    <section className="hero" ref={ref}>
      <div className={`hero-title ${vis ? "fade-up" : ""}`}>
        <h1>Let's make it<br />happen</h1>
      </div>
      <div className={`hero-right ${vis ? "fade-up delay-1" : ""}`}>
        <p className="hero-desc">
          <strong>Have questions? We've got the answers! Here, you'll find clear and
          concise information</strong> about our services, process, and what to expect
          when working with us. If you need more details, feel free to reach out!
        </p>
        <ContactForm />
      </div>
    </section>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", project: "" });
  const [sent, setSent] = useState(false);

  const handle = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));
  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <div className="form-wrap" onSubmit={submit}>
      <div className="form-row">
        <div className="field">
          <input name="name" placeholder="Your name*" value={form.name} onChange={handle} required />
          <span className="underline" />
        </div>
        <div className="field">
          <input name="company" placeholder="Company name" value={form.company} onChange={handle} />
          <span className="underline" />
        </div>
      </div>
      <div className="form-row">
        <div className="field">
          <input name="email" type="email" placeholder="Email*" value={form.email} onChange={handle} required />
          <span className="underline" />
        </div>
        <div className="field">
          <input name="phone" placeholder="Phone" value={form.phone} onChange={handle} />
          <span className="underline" />
        </div>
      </div>
      <div className="field full">
        <textarea name="project" placeholder="A few words about your project*" value={form.project} onChange={handle} rows={3} required />
        <span className="underline" />
      </div>
      <button className={`submit-btn ${sent ? "sent" : ""}`} onClick={submit} type="button">
        {sent ? "SENT ✓" : "SEND MESSAGE ↗"}
      </button>
    </div>
  );
}

function EmailBanner() {
  const [ref, vis] = useScrollAnimation(0.2);
  return (
    <section className="email-banner" ref={ref}>
      <div className={`email-top ${vis ? "slide-in" : ""}`}>
        <span className="email-text">HELLO@AZURIO.COM</span>
      </div>
      <div className="email-bottom">
        <div className={`connect-label ${vis ? "fade-up delay-2" : ""}`}>Connect</div>
        <div className="social-list">
          {[
            ["01", "Dribbble"],
            ["02", "Behance"],
            ["03", "Github"],
            ["04", "Codepen"],
            ["05", "Figma Community"],
          ].map(([num, name], i) => (
            <SocialLink key={name} num={num} name={name} delay={i * 80} visible={vis} />
          ))}
        </div>
      </div>
    </section>
  );
}

function SocialLink({ num, name, delay, visible }) {
  const [hover, setHover] = useState(false);
  return (
    <a
      href="#"
      className={`social-item ${visible ? "fade-up" : ""}`}
      style={{ animationDelay: `${0.3 + delay / 1000}s` }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <span className="social-num">[{num}]</span>
      <span className={`social-name ${hover ? "hovered" : ""}`}>{name}</span>
      <span className={`social-arrow ${hover ? "hovered" : ""}`}>↗</span>
    </a>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <span>© 2025 AZURIO TEMPLATE</span>
        <span>PRIVACY POLICY</span>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="app">
      <Nav />
      <Breadcrumb />
      <HeroSection />
      <EmailBanner />
      <Footer />
    </div>
  );
}
