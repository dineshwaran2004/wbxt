import { useState, useEffect, useRef } from "react";
import "./Contact.css";

function useInView(threshold = 0.12) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

const links = [
  { label: "WhatsApp",                  href: "https://wa.me/" },
  { label: "Email — hello@webxtant.com", href: "mailto:hello@webxtant.com" },
  { label: "Instagram",                 href: "https://www.instagram.com/webxtant" },
];

export default function Contact() {
  const [ref, visible] = useInView();
  return (
    <section id="wx-contact" className="contact">
      {/* Left */}
      <div ref={ref} className="contact__left">
        <div className={`contact__label ${visible ? "contact__label--visible" : ""}`}>
          <div className="contact__label-line" />
          <span>[ WRITE A LINE ]</span>
        </div>

        <h2 className={`contact__title ${visible ? "contact__title--visible" : ""}`}>
          Let's talk<br />
          <span className="contact__title-accent">about you</span>
        </h2>

        <div className={`contact__links ${visible ? "contact__links--visible" : ""}`}>
          {links.map((l) => (
            <a key={l.label} href={l.href} className="contact__link">
              {l.label}
              <span className="contact__arrow">↗</span>
            </a>
          ))}
        </div>
      </div>

      {/* Right */}
      <div className="contact__right">
        <img
          src="https://images.unsplash.com/photo-1516321165247-4aa89a48be28?w=1200&q=80"
          alt="contact"
          className="contact__img"
        />
        <div className="contact__img-overlay" />
        <div className="contact__watermark">WX</div>
      </div>
    </section>
  );
}
