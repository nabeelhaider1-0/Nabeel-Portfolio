import { motion as Motion, useScroll, useSpring } from "framer-motion";

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  return (
    <Motion.div
      aria-hidden="true"
      className="fixed top-0 left-0 right-0 h-0.5 origin-left z-60 bg-primary"
      style={{
        scaleX,
        boxShadow:
          "0 0 8px color-mix(in srgb, var(--color-primary) 60%, transparent)",
      }}
    />
  );
};
