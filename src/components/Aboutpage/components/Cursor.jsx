import { useEffect, useRef } from 'react';
import './Cursor.css';

export default function Cursor() {
  const dotRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    let mx = 0, my = 0, cx = 0, cy = 0, raf;

    const onMove = (e) => {
      mx = e.clientX; my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.left = mx + 'px';
        dotRef.current.style.top = my + 'px';
      }
    };

    const loop = () => {
      cx += (mx - cx) * 0.12;
      cy += (my - cy) * 0.12;
      if (circleRef.current) {
        circleRef.current.style.left = cx + 'px';
        circleRef.current.style.top = cy + 'px';
      }
      raf = requestAnimationFrame(loop);
    };

    document.addEventListener('mousemove', onMove);
    loop();

    const addView = () => document.body.classList.add('cursor-view');
    const remView = () => document.body.classList.remove('cursor-view');
    const addLink = () => document.body.classList.add('cursor-link');
    const remLink = () => document.body.classList.remove('cursor-link');

    const viewEls = document.querySelectorAll('[data-cursor-view]');
    const linkEls = document.querySelectorAll('a, button, [data-cursor-link]');

    viewEls.forEach(el => { el.addEventListener('mouseenter', addView); el.addEventListener('mouseleave', remView); });
    linkEls.forEach(el => { el.addEventListener('mouseenter', addLink); el.addEventListener('mouseleave', remLink); });

    return () => {
      document.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div id="cursor-dot" ref={dotRef} />
      <div id="cursor-circle" ref={circleRef}>
        <span id="cursor-text">VIEW</span>
      </div>
    </>
  );
}
