import { motion as Motion } from "framer-motion";

export const SocialLink = ({ href, icon: Icon, name, className = "" }) => {
  return (
    <Motion.a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      initial="rest"
      animate="rest"
      whileHover="hover"
      className={`relative p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300 ${className}`}
    >
      <Icon className="w-5 h-5" />
      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 pointer-events-none">
        <Motion.span
          variants={{
            rest: {
              opacity: 0,
              y: 6,
              scale: 0.9,
              transition: {
                type: "spring",
                stiffness: 500,
                damping: 30,
              },
            },
            hover: {
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                type: "spring",
                stiffness: 400,
                damping: 10,
              },
            },
          }}
          className="relative block whitespace-nowrap px-3 py-1 rounded-lg bg-primary text-primary-foreground text-xs font-medium shadow-lg"
        >
          {name}
          <span className="absolute -bottom-1 left-1/2 w-2.5 h-2.5 -translate-x-1/2 rotate-45 bg-primary" />
        </Motion.span>
      </span>
    </Motion.a>
  );
};
