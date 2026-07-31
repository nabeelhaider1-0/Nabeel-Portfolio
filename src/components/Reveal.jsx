import { motion as Motion } from "framer-motion";

export const Reveal = ({
  children,
  delay = 0,
  y = 24,
  className = "",
  direction = "up",
}) => {
  const offset = direction === "left" ? -40 : direction === "right" ? 40 : y;

  return (
    <Motion.div
      className={className}
      initial={{ opacity: 0, y: direction === "up" || direction === "down" ? offset : 0, x: direction === "left" || direction === "right" ? offset : 0 }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "0px 0px -20% 0px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </Motion.div>
  );
};
