import { motion as Motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState } from "react";

const isPointerFineAndMotionOkay = () => {
  const finePointer = window.matchMedia("(pointer: fine)").matches;
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  return finePointer && !reducedMotion;
};

export const Magnetic = ({
  children,
  strength = 0.35,
  maxDistance = 14,
  className = "",
  ...props
}) => {
  const [enabled] = useState(isPointerFineAndMotionOkay);
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 16, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 220, damping: 16, mass: 0.4 });

  const handleMove = (e) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    const dist = Math.hypot(relX, relY);
    const clamp = (v) => Math.max(-maxDistance, Math.min(maxDistance, v));
    x.set(dist < maxDistance * 4 ? clamp(relX * strength) : 0);
    y.set(dist < maxDistance * 4 ? clamp(relY * strength) : 0);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  if (!enabled) return <div className={className}>{children}</div>;

  return (
    <Motion.div
      ref={ref}
      className={className}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      {...props}
    >
      {children}
    </Motion.div>
  );
};