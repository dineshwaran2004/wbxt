import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import './PageOverlay.css';

export default function PageOverlay() {
  const ref = useRef(null);
  useEffect(() => {
    gsap.to(ref.current, {
      scaleY: 0,
      duration: 1.3,
      ease: 'power4.inOut',
      delay: 0.1,
      transformOrigin: 'top',
      onComplete: () => { if (ref.current) ref.current.style.display = 'none'; }
    });
  }, []);
  return <div className="page-overlay" ref={ref} />;
}
