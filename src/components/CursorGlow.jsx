import { motion as Motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

const isPointerFineAndMotionOkay = () => {
  const finePointer = window.matchMedia("(pointer: fine)").matches;
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  return finePointer && !reducedMotion;
};

export const CursorGlow = () => {
  const [enabled] = useState(isPointerFineAndMotionOkay);

  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const springX = useSpring(x, { stiffness: 120, damping: 24, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 120, damping: 24, mass: 0.4 });

  useEffect(() => {
    if (!enabled) return;
    const handleMove = (e) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, [enabled, x, y]);

  if (!enabled) return null;

  return (
    <Motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 pointer-events-none z-40"
      style={{ x: springX, y: springY }}
    >
      <div className="cursor-glow w-125 h-125 -translate-x-1/2 -translate-y-1/2 rounded-full" />
    </Motion.div>
  );
};
