import { useState } from "react";
import { useInView } from "./index.js";
import "./Contact.css";


export default function Contact({ id }) {
  const [ref, visible] = useInView(0.2);
  const [hovered, setHovered] = useState(false);

  return (
    <section
      id={id}
      ref={ref}
      className="contact"
    >
      {/* Background texture circles */}
      <div className="contact__circle contact__circle--sm" />
      <div className="contact__circle contact__circle--lg" />

      <p className={`contact__label${visible ? " contact__label--visible" : ""}`}>
        [ Write a line ]
      </p>

      <h2 className={`contact__heading${visible ? " contact__heading--visible" : ""}`}>
        Let's talk about
        <br />
        your project
      </h2>

      <button
        data-cursor="GO"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={`contact__btn${visible ? " contact__btn--visible" : ""}`}
        style={{
          background: hovered ? "#fff" : "transparent",
          color: hovered ? "#1616d8" : "#fff",
        }}
      >
        Get in touch →
      </button>

      <div className="contact__footer">
        <span>hello@portfolio.com</span>
        <span>+1 (555) 000 0000</span>
        <span>Available worldwide</span>
      </div>
    </section>
  );
}
