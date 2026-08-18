import { ArrowUp } from "lucide-react";
import { AnimatePresence, motion as Motion } from "framer-motion";
import { useEffect, useState } from "react";

const SCROLL_THRESHOLD = 400;

export const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > SCROLL_THRESHOLD);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.lenis?.scrollTo(0, { duration: 1 });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <Motion.button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/40 hover:bg-primary/90 hover:shadow-primary/60 transition-colors"
        >
          <ArrowUp className="w-5 h-5" />
        </Motion.button>
      )}
    </AnimatePresence>
  );
};
