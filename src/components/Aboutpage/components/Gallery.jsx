import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Gallery.css";

gsap.registerPlugin(ScrollTrigger);

const ROW1 = [
  { src: "https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=420&q=80", label: "ILLUSTRATIONS", spd: .8 },
  { src: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?w=340&q=80", label: "VIDEO PRODUCTION", spd: 1.1 },
  { src: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=360&q=80", label: "PHOTOGRAPHY", spd: .9 },
  { src: "https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?w=360&q=80", label: "3D MODELS", spd: 1.2 },
  { src: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=380&q=80", label: "DEVELOPMENT", spd: .85 },
  { src: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=320&q=80", label: "BRAND", spd: 1.05 },
  { src: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=300&q=80", label: "FASHION", spd: .95 },
];

const ROW2 = [
  { src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=280&q=80", label: "MINIMAL", spd: 1.1 },
  { src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=360&q=80", label: "PRODUCT", spd: .8 },
  { src: "https://images.unsplash.com/photo-1614850715649-1d0106293bd1?w=380&q=80", label: "3D RENDER", spd: 1.15 },
  { src: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=300&q=80", label: "ART", spd: 1.0 },
  { src: "https://images.unsplash.com/photo-1614854262340-ab1ca7d079c7?w=320&q=80", label: "BRANDING", spd: 1.2 },
  { src: "https://images.unsplash.com/photo-1561336313-0bd5e0b27ec8?w=280&q=80", label: "3D MODELS", spd: .85 },
];

export default function Gallery() {
  const secRef = useRef(null);
  const row2Ref = useRef(null);

  useEffect(() => {
    const items = secRef.current.querySelectorAll(".gallery-item");

    items.forEach((el) => {
      const spd = parseFloat(el.dataset.spd) || 1;

      gsap.to(el, {
        y: (spd - 1) * -80,
        ease: "none",
        scrollTrigger: {
          trigger: secRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    });

    gsap.to(row2Ref.current, {
      x: -30,
      ease: "none",
      scrollTrigger: {
        trigger: secRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 2,
      },
    });

    gsap.from(items, {
      opacity: 0,
      y: 30,
      scale: 0.95,
      stagger: 0.04,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: secRef.current,
        start: "top 85%",
      },
    });
  }, []);

  return (
    <section id="gallery" ref={secRef}>
      <div className="gallery-wrapper">

        <div className="gallery-row">
          {ROW1.map((it, i) => (
            <div
              key={i}
              className="gallery-item"
              data-spd={it.spd}
            >
              <img src={it.src} alt={it.label} />
              <span className="gallery-label">{it.label}</span>
            </div>
          ))}
        </div>

        <div className="gallery-row row2" ref={row2Ref}>
          {ROW2.map((it, i) => (
            <div
              key={i}
              className="gallery-item"
              data-spd={it.spd}
            >
              <img src={it.src} alt={it.label} />
              <span className="gallery-label">{it.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}