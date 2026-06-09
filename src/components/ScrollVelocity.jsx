import { useRef, useLayoutEffect, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";

import "./ScrollVelocity.css";

function useElementWidth(ref) {
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    const updateWidth = () => {
      if (ref.current) {
        setWidth(ref.current.offsetWidth);
      }
    };

    updateWidth();

    window.addEventListener("resize", updateWidth);

    return () =>
      window.removeEventListener("resize", updateWidth);
  }, [ref]);

  return width;
}

function ScrollVelocity({
  texts = [],
  velocity = 90,
  className = "",
  damping = 90,
  stiffness = 400,
  numCopies = 30,
}) {

  function VelocityText({
    children,
    baseVelocity,
  }) {

    const baseX = useMotionValue(0);

    const { scrollY } = useScroll();

    const scrollVelocity =
      useVelocity(scrollY);

    const smoothVelocity =
      useSpring(scrollVelocity,{
        damping,
        stiffness,
      });

    const velocityFactor =
      useTransform(
        smoothVelocity,
        [0,1000],
        [0,5]
      );

    const copyRef = useRef(null);

    const copyWidth =
      useElementWidth(copyRef);

    function wrap(min,max,v){
      const range = max-min;

      return (
        ((((v-min)%range)+range)%range)
        + min
      );
    }

    const x = useTransform(
      baseX,
      (v)=>{
        if(!copyWidth)
          return "0px";

        return `${wrap(
          -copyWidth,
          0,
          v
        )}px`;
      }
    );

    useAnimationFrame((t,delta)=>{

      let moveBy =
        baseVelocity *
        (delta/1000);

      moveBy +=
        moveBy *
        velocityFactor.get();

      baseX.set(
        baseX.get()+moveBy
      );

    });

    return(
      <div className="parallax">

        <motion.div
          className="scroller"
          style={{x}}
        >

          {Array.from({
            length:numCopies
          }).map((_,i)=>(

            <span
              key={i}
              ref={
                i===0
                ? copyRef
                : null
              }
              className={className}
            >
              {children}
            </span>

          ))}

        </motion.div>

      </div>
    );
  }

  return (
    <section>

      {texts.map(
        (text,index)=>(

        <VelocityText
          key={index}
          baseVelocity={
            index%2
            ? -velocity
            : velocity
          }
        >
          {text}
        </VelocityText>

      ))}

    </section>
  );
}

export default ScrollVelocity;