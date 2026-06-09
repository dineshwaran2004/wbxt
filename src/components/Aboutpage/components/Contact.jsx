import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './Contact.css';

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const secRef   = useRef(null);
  const emailRef = useRef(null);

  useEffect(() => {
    gsap.from(secRef.current.querySelector('.contact-title'), {
      opacity: 0, y: 60, duration: 1.1, ease: 'power4.out',
      scrollTrigger: { trigger: secRef.current, start: 'top 78%' }
    });
    gsap.from(emailRef.current, {
      opacity: 0, y: 20, duration: .8, delay: .3, ease: 'power3.out',
      scrollTrigger: { trigger: secRef.current, start: 'top 78%' }
    });

    // Magnetic
    const el = emailRef.current;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      gsap.to(el, { x: (e.clientX - r.left - r.width / 2) * .28, y: (e.clientY - r.top - r.height / 2) * .28, duration: .32, ease: 'power2.out' });
    };
    const onLeave = () => gsap.to(el, { x: 0, y: 0, duration: .6, ease: 'elastic.out(1,.5)' });
    el.addEventListener('mousemove', onMove);
    el.addEventListener('mouseleave', onLeave);
    return () => { el.removeEventListener('mousemove', onMove); el.removeEventListener('mouseleave', onLeave); };
  }, []);

  return (
    <section id="contact">
      <div className="contact-inner" ref={secRef}>
        <p className="contact-label">[ WRITE A LINE ]</p>
        <h2 className="contact-title">Let's talk about<br /><span>you</span></h2>
        <a href="mailto:contact@webxtant.com" className="contact-email" ref={emailRef}>contact@webxtant.com</a>
      </div>
    </section>
  );
}
