import { useEffect, useRef } from "react";
import { EXPERTISE } from "./constants";
import { useInView, useMousePosition } from "./index.js";
import "./Expertise.css";

/* ─── EXPERTISE ROW ─────────────────────────────────────────────────────── */
function ExpertiseRow({ item }) {
  const [ref, visible] = useInView(0.1);

  const highlight = (text = "", hl = "") => {
    if (!hl || !text) return text;

    const i = text.indexOf(hl);

    if (i === -1) return text;

    return (
      <>
        {text.slice(0, i)}
        <span className="expertise-row__highlight">{hl}</span>
        {text.slice(i + hl.length)}
      </>
    );
  };

  return (
    <div
      ref={ref}
      className={`expertise-row ${
        visible ? "expertise-row--visible" : ""
      }`}
    >
      {/* Number */}
      <div className="expertise-row__num">
        {item?.num || "01"}
      </div>

      {/* Title + tags */}
      <div className="expertise-row__title-wrap">
        <h3 className="expertise-row__title">
          {item?.title || "Service"}
        </h3>

        <div className="expertise-row__tags">
          {(item?.tags || []).map((col, ci) => (
            <div key={ci} className="expertise-row__tag-col">
              {(col || []).map((t, ti) => (
                <span key={ti} className="expertise-row__tag">
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Image */}
      <div className="expertise-row__img-wrap">
        <img
          src={
            item?.img ||
            "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
          }
          alt={item?.title || "Expertise"}
          className="expertise-row__img"
        />
      </div>

      {/* Description */}
      <p className="expertise-row__desc">
        {highlight(item?.desc || "", item?.highlight || "")}
      </p>
    </div>
  );
}

/* ─── EXPERTISE SECTION ─────────────────────────────────────────────────── */
export default function Expertise({ id }) {
  const [ref, visible] = useInView(0.1);

  const idobadge = useRef(null);

  const pos = useMousePosition();

  useEffect(() => {
    if (!idobadge.current || !pos) return;

    const rect = idobadge.current.getBoundingClientRect();

    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    const dx = (pos.x - cx) * 0.15;
    const dy = (pos.y - cy) * 0.15;

    idobadge.current.style.transform = `translate(${dx}px, ${dy}px)`;
  }, [pos]);

  const expertiseData = Array.isArray(EXPERTISE)
    ? EXPERTISE
    : [];

  return (
    <section id={id} className="expertise">
      {/* Header */}
      <div ref={ref} className="expertise__header">
        <span className="expertise__eyebrow">E/03</span>

        <h2
          className={`expertise__heading ${
            visible ? "expertise__heading--visible" : ""
          }`}
        >
          My Expertise

          <span
            ref={idobadge}
            className="expertise__badge"
          >
            I DO
            <br />
            BEST
          </span>
        </h2>
      </div>

      {/* Rows */}
      <div>
        {expertiseData.length > 0 ? (
          expertiseData.map((item, i) => (
            <ExpertiseRow
              key={i}
              item={item}
            />
          ))
        ) : (
          <p
            style={{
              textAlign: "center",
              padding: "40px",
            }}
          >
            No expertise data found.
          </p>
        )}
      </div>
    </section>
  );
}