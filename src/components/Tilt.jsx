import { motion as Motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState } from "react";

const isPointerFineAndMotionOkay = () => {
  const finePointer = window.matchMedia("(pointer: fine)").matches;
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  return finePointer && !reducedMotion;
};

export const Tilt = ({
  children,
  maxTilt = 7,
  scale = 1.02,
  className = "",
  style = {},
  ...props
}) => {
  const [enabled] = useState(isPointerFineAndMotionOkay);
  const ref = useRef(null);

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 200, damping: 20, mass: 0.5 });
  const springY = useSpring(rotateY, { stiffness: 200, damping: 20, mass: 0.5 });

  const handleMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width; // 0..1
    const py = (e.clientY - rect.top) / rect.height; // 0..1
    rotateY.set((px - 0.5) * 2 * maxTilt);
    rotateX.set(-(py - 0.5) * 2 * maxTilt);
  };

  const reset = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  if (!enabled)
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );

  return (
    <Motion.div
      ref={ref}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{
        ...style,
        rotateX: springX,
        rotateY: springY,
        transformPerspective: 1000,
      }}
      whileHover={{ scale }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      {...props}
    >
      {children}
    </Motion.div>
  );
};