import { Reveal } from "@/components/Reveal";

const experiences = [
  {
    period: "2025 — Present",
    role: "Full Stack Developer",
    company: "Infoetec Company",
    description:
      "Leading the development of a cutting-edge fintech platform, responsible for both frontend and backend architecture. Implemented scalable microservices, optimized performance, and integrated advanced analytics features.",
    technologies: [
      "React",
      "Node.js",
      "Express",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "TypeScript",
      "Next.js",
      "Redux",
      "AWS",
      "Figma",
      " TailwindCSS",
      "Shadcn UI",
      "ReCharts",
      "Framer Motion",
      "GSAP",
      "Vite",
      "API integrations",
      "Vercel",
    ],
    current: true,
  },
  {
    period: "2025 — 2025",
    role: "Senior Frontend Developer",
    company: "Techfy Solutions",
    description:
      "Leading frontend architecture for a suite of fintech products. Implemented micro-frontend architecture, reduced bundle size by 40%, and mentored a team of 5 developers.",
    technologies: [
      "React",
      "TypeScript",
      "Next.js",
      "Redux",
      "AWS",
      "Figma",
      " TailwindCSS",
      "Shadcn UI",
      "ReCharts",
      "Framer Motion",
      "GSAP",
      "Vite",
      "API integrations",
      "Vercel",
    ],
    current: true,
  },
  {
    period: "2022 — 2025",
    role: "Frontend Web Developer",
    company: "Infoetec Company",
    description:
      "Developed and maintained multiple high-traffic web applications, collaborating closely with UX designers to enhance user experience. Played a key role in migrating legacy codebases to modern frameworks.",
    technologies: [
      "React",
      "Redux",
      "Node.js",
      "Redis",
      "AWS",
      "TypeScript",
      "Figma",
      "TailwindCSS",
      "Framer Motion",
      "i18n",
      "GSAP",
      "API integrations",
      "Express",
      "PostgreSQL",
      "MongoDB",
    ],
    current: false,
  },
  {
    period: "2021 — 2022",
    role: "Internship Frontend Web Developer",
    company: "Cydea Tec Labs",
    description:
      "Contributed to the development of a SaaS platform for project management. Worked closely with designers to implement responsive UI components and enhance user experience.",
    technologies: [
      "Angular",
      "React",
      "Bootstrap",
      "Figma",
      "MongoDB",
      "TypeScript",
    ],
    current: false,
  },
  {
    period: "2017 — 2021",
    role: "Software Engineer",
    company: "Student Freelance",
    description:
      "Developed websites and web applications for local businesses and non-profits, gaining hands-on experience in Web development and client communication.",
    technologies: ["JavaScript", "HTML", "CSS", "Bootstrap"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
         h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <Reveal>
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
              Career Journey
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
              Experience that{" "}
              <span className="font-serif italic font-normal text-foreground">
                {" "}
                speaks volumes.
              </span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-muted-foreground">
              A timeline of my professional growth, from curious beginner to
              senior engineer leading teams and building products at scale.
            </p>
          </Reveal>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-linear-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <Reveal key={idx} delay={0.05 * (idx % 2)}>
                <div className="relative grid md:grid-cols-2 gap-8">
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  </div>

                  {/* Content */}
                  <div
                    className={`pl-8 md:pl-0 ${
                      idx % 2 === 0
                        ? "md:pr-16 md:text-right"
                        : "md:col-start-2 md:pl-16"
                    }`}
                  >
                    <div
                      className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                    >
                      <span className="text-sm text-primary font-medium">
                        {exp.period}
                      </span>
                      <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                      <p className="text-muted-foreground">{exp.company}</p>
                      <p className="text-sm text-muted-foreground mt-4">
                        {exp.description}
                      </p>
                      <div
                        className={`flex flex-wrap gap-2 mt-4 ${
                          idx % 2 === 0 ? "md:justify-end" : ""
                        }`}
                      >
                        {exp.technologies.map((tech, techIdx) => (
                          <span
                            key={techIdx}
                            className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
