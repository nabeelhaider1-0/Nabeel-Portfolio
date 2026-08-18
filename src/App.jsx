import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Testimonials } from "@/sections/Testimonials";
import { Contact } from "@/sections/Contact";
import { Footer } from "./layout/Footer";
import { ScrollToTop } from "./components/ScrollToTop";
import { ScrollProgress } from "./components/ScrollProgress";
import { CursorGlow } from "./components/CursorGlow";
import { MotionConfig } from "framer-motion";
import Lenis from "lenis";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      smoothWheel: true,
    });

    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    window.lenis = lenis;

    return () => {
      delete window.lenis;
      lenis.destroy();
    };
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Projects />
          <Experience />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
        <ScrollToTop />
        <ScrollProgress />
        <CursorGlow />
      </div>
    </MotionConfig>
  );
}

export default App;
