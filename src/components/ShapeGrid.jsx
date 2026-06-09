import { useRef, useEffect } from 'react';
import './ShapeGrid.css';

const ShapeGrid = ({
  direction = 'right',
  speed = 1,
  borderColor = '#999',
  squareSize = 40,
  hoverFillColor = '#222',
  shape = 'square',
  hoverTrailAmount = 0,
  className = ''
}) => {

  const canvasRef = useRef(null);
  const requestRef = useRef(null);

  useEffect(() => {

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    let animationFrame;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let offset = 0;

    const draw = () => {

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = borderColor;
      ctx.lineWidth = 1;

      const size = squareSize;

      for (let x = -size; x < canvas.width + size; x += size) {

        for (let y = -size; y < canvas.height + size; y += size) {

          const moveX =
            direction === "diagonal"
              ? offset
              : 0;

          const moveY =
            direction === "diagonal"
              ? offset
              : 0;

          ctx.strokeRect(
            x + moveX,
            y + moveY,
            size,
            size
          );

        }

      }

      offset -= speed * 0.15;

      if (offset <= -size) {
        offset = 0;
      }

      animationFrame =
        requestAnimationFrame(draw);

    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener(
        'resize',
        resizeCanvas
      );
    };

  }, [
    direction,
    speed,
    borderColor,
    squareSize
  ]);

  return (
    <canvas
      ref={canvasRef}
      className={`shapegrid-canvas ${className}`}
    />
  );
};

export default ShapeGrid;