import { Button } from "@/components/Button";
import {
  ArrowRight,
  ChevronDown,
  Download,
  Facebook,
  Github,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import { AnimatedBorderButton } from "../components/AnimatedBorderButton";
import { motion as Motion } from "framer-motion";
import { useEffect, useState } from "react";

const skills = [
  "React",
  "Next.js",
  "Redux",
  "TypeScript",
  "Node.js",
  "GraphQL",
  "PostgreSQL",
  "MongoDB",
  "Redis",
  "AWS",
  "Vercel",
  "Tailwind CSS",
  "Figma",
  "Git",
  "GitHub Actions",
];

export const Hero = () => {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    const generateRandomDots = () => {
      const randomDots = [...Array(30)].map(() => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 5}s`,
        animationDuration: `${15 + Math.random() * 20}s`,
      }));
      setDots(randomDots);
    };

    generateRandomDots();
  }, []); // Empty array means this effect runs once when the component mounts
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Bg */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt="Hero image"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/20 via-background/80 to-background" />
      </div>

      {/* Green Dots */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {dots.map((dot, i) => (
          <div
            key={i}
            className="absolute w-1.5 h-1.5 rounded-full opacity-60"
            style={{
              backgroundColor: "#20B2A6",
              left: dot.left,
              top: dot.top,
              animation: `slow-drift ${dot.animationDuration} ease-in-out infinite`,
              animationDelay: dot.animationDelay,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 pt-32 pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <Motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-primary">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                Full-Stack-Developer • React Specialist
              </span>
            </Motion.div>

            {/* Headline */}
            <div className="space-y-4">
              <Motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                className="text-[2.5rem] md:text-6xl lg:text-7xl font-bold leading-tight"
              >
                Crafting <span className="text-primary glow-text">digital</span>
                <br />
                experiences with
                <br />
                <span className="font-serif italic font-normal text-white">
                  precision.
                </span>
              </Motion.h1>
              <Motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="text-lg text-muted-foreground max-w-lg"
              >
                Hi, I'm Nabeel Haider — a Full-Stack Developer specializing in
                both front-end and back-end technologies. I design and build
                end-to-end scalable, performant web applications that provide
                seamless experiences for users.
              </Motion.p>
            </div>

            {/* CTAs */}
            <Motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="flex flex-wrap gap-4"
            >
              <a href="#contact">
                <Button size="lg">
                  Contact Me <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
              <a href="/Nabeel CV.pdf" download>
                <AnimatedBorderButton>
                  <Download className="w-5 h-5" />
                  Download CV
                </AnimatedBorderButton>
              </a>
            </Motion.div>

            {/* Social Links */}
            <Motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="flex items-center sm:gap-4 gap-1"
            >
              <span className="sm:text-sm text-xs text-muted-foreground">
                Follow me:{" "}
              </span>
              {[
                {
                  icon: Github,
                  name: "GitHub",
                  href: "https://github.com/nabeelhaider1-0",
                },
                {
                  icon: Linkedin,
                  name: "LinkedIn",
                  href: "https://www.linkedin.com/in/nabeel-haider-76416818b/",
                },
                {
                  icon: Instagram,
                  name: "Instagram",
                  href: "https://www.instagram.com/nabeelhaider1.0/",
                },
                {
                  icon: Facebook,
                  name: "Facebook",
                  href: "https://www.facebook.com/nabeelhaider1.o?mibextid=ZbWKwL",
                },
                {
                  icon: Twitter,
                  name: "X (Twitter)",
                  href: "https://x.com/nabeelhaider1_0?s=09",
                },
                {
                  icon: Youtube,
                  name: "YouTube",
                  href: "https://www.youtube.com/@nabeelhaider1.0",
                },
              ].map((social, idx) => (
                <Motion.a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  initial="rest"
                  animate="rest"
                  whileHover="hover"
                  className="relative p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all duration-300"
                >
                  {<social.icon className="w-5 h-5" />}
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
                      {social.name}
                      <span className="absolute -bottom-1 left-1/2 w-2.5 h-2.5 -translate-x-1/2 rotate-45 bg-primary" />
                    </Motion.span>
                  </span>
                </Motion.a>
              ))}
            </Motion.div>
          </div>
          {/* Right Column - Profile Image */}
          <Motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            {/* Profile Image */}
            <div className="relative max-w-md mx-auto">
              <div
                className="absolute inset-0 
              rounded-3xl bg-linear-to-br 
              from-primary/30 via-transparent 
              to-primary/10 blur-2xl animate-pulse"
              />
              <div className="relative glass rounded-3xl p-2 glow-border">
                <img
                  src="/profile-photo.jpg"
                  alt="Pedro Machado"
                  className="w-full aspect-4/5 object-cover rounded-2xl"
                />

                {/* Floating Badge */}
                <div className="absolute -bottom-4 -right-4 glass rounded-xl px-4 py-3 animate-float">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
                {/* Stats Badge */}
                <div className="absolute -top-4 -left-4 glass rounded-xl px-4 py-3 animate-float animation-delay-500">
                  <div className="text-2xl font-bold text-primary">3+</div>
                  <div className="text-xs text-muted-foreground">
                    Years Exp.
                  </div>
                </div>
              </div>
            </div>
          </Motion.div>
        </div>

        {/* Skills Section */}
        <Motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="mt-20"
        >
          <p className="text-sm text-muted-foreground mb-6 text-center">
            Technologies I work with
          </p>
          <div className="relative overflow-hidden">
            <div
              className="absolute left-0 top-0 bottom-0 w-32
             bg-linear-to-r from-background to-transparent z-10"
            />
            <div
              className="absolute right-0 top-0 bottom-0 w-32
             bg-linear-to-l from-background to-transparent z-10"
            />
            <div className="flex animate-marquee">
              {[...skills, ...skills].map((skill, idx) => (
                <div key={idx} className="shrink-0 px-8 py-4">
                  <span className="text-xl font-semibold text-muted-foreground/50 hover:text-muted-foreground transition-colors">
                    {skill}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Motion.div>
      </div>

      <Motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8, ease: "easeOut" }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <a
          href="#about"
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors group"
        >
          <span className="text-xs uppercase tracking-wider">Scroll</span>
          <ChevronDown className="w-6 h-6 animate-bounce" />
        </a>
      </Motion.div>
    </section>
  );
};
