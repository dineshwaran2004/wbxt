import { useState, useEffect } from "react";

export function useInView(threshold = 0.1) {
  const [visible, setVisible] = useState(false);
  const [element, setElement] = useState(null);

  useEffect(() => {
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [element, threshold]);

  return [setElement, visible];
}

export function useMousePosition() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const update = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", update);

    return () => {
      window.removeEventListener("mousemove", update);
    };
  }, []);

  return position;
}