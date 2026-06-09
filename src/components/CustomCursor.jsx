import { useEffect, useRef } from 'react';
import './CustomCursor.css';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    /* Only on desktop */
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let cx = mx, cy = my;
    let raf;

    const onMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = mx + 'px';
        dotRef.current.style.top  = my + 'px';
      }
    };

    const loop = () => {
      cx += (mx - cx) * 0.13;
      cy += (my - cy) * 0.13;
      if (circleRef.current) {
        circleRef.current.style.left = cx + 'px';
        circleRef.current.style.top  = cy + 'px';
      }
      raf = requestAnimationFrame(loop);
    };

    document.addEventListener('mousemove', onMove);
    loop();

    /* Hover effects */
    const onEnterLink = () => document.body.classList.add('cursor-link');
    const onLeaveLink = () => document.body.classList.remove('cursor-link');

    const bindLinks = () => {
      document.querySelectorAll('a, button, [data-cursor-link]').forEach(el => {
        el.addEventListener('mouseenter', onEnterLink);
        el.addEventListener('mouseleave', onLeaveLink);
      });
    };

    bindLinks();
    /* Re-bind after route changes via MutationObserver */
    const mo = new MutationObserver(bindLinks);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
      mo.disconnect();
    };
  }, []);

  return (
    <>
      <div id="custom-cursor-dot"    ref={dotRef} />
      <div id="custom-cursor-circle" ref={circleRef} />
    </>
  );
}
