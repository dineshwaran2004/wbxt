import { useState, useEffect } from "react";
import { useMousePosition } from "./index.js";
import "./Cursor.css";

export default function Cursor() {
  const pos = useMousePosition();
  const [hovered, setHovered] = useState(false);
  const [label, setLabel] = useState("");

  useEffect(() => {
    const onEnter = (e) => {
      const target = e.target.closest("[data-cursor]");
      if (target) {
        setHovered(true);
        setLabel(target.dataset.cursor || "");
      }
    };
    const onLeave = (e) => {
      if (e.target.closest("[data-cursor]")) {
        setHovered(false);
        setLabel("");
      }
    };

    document.addEventListener("mouseenter", onEnter, true);
    document.addEventListener("mouseleave", onLeave, true);
    return () => {
      document.removeEventListener("mouseenter", onEnter, true);
      document.removeEventListener("mouseleave", onLeave, true);
    };
  }, []);

  return (
    <>
      <div
        className="cursor__dot"
        style={{ left: pos.x, top: pos.y }}
      />
      <div
        className={`cursor__ring${hovered ? " cursor__ring--hovered" : ""}`}
        style={{ left: pos.x, top: pos.y }}
      >
        {label}
      </div>
    </>
  );
}
