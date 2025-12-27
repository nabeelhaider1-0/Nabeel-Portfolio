import { ArrowUpRight, Github, Minus, Plus } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { useState } from "react";
const projects = [
  {
    title: "Escapra B2C",
    description:
      "A Travwl booking platform that offers personalized itineraries, seamless booking experiences, and real-time updates for travelers.",
    image: "/projects/project1.png",
    tags: ["React", "PostgreSQL", "NodeJS", "Redis", "AWS", "Revolut"],
    link: "https://staging.escapra.com/",
    github: "#",
  },
  {
    title: "Escapra BackOffice",
    description:
      "A comprehensive back-office management system for travel agencies, featuring real-time booking tracking, customer management, and analytics.",
    image: "/projects/project2.png",
    tags: [
      "React",
      "PostgreSQL",
      "NodeJS",
      "Redis",
      "AWS",
      "Revolut",
      "TypeScript",
      "Docker",
      "Recharts",
      "Docker",
    ],
    link: "https://admin.stg.escapra.com/",
    github: "#",
  },
  {
    title: "Escapra Trips (DMC)",
    description:
      "A digital marketing campaign management tool for travel agencies, featuring automated content creation, performance tracking, and customer engagement analytics.",
    image: "/projects/project3.png",
    tags: ["React", "Tailwind"],
    link: "https://stage.escapratrips.com/",
    github: "#",
  },
  {
    title: "Infoetec Company Site",
    description:
      "A modern and responsive company website for Infoetec, showcasing their services, portfolio, and client testimonials with a sleek design and intuitive navigation.",
    image: "/projects/project4.png",
    tags: ["React", "Clandely", "Framer Motion", "GSAP", "AWS", "i18n"],
    link: "https://infoetec.com/",
    github: "#",
  },
  {
    title: "Bagh-e Website",
    description:
      "Bagh-e is a tech-based, Shariah-compliant platform that aims to empower farmers in agri-based developing countries. We provide innovative financing solutions, crop optimization guidance, and direct sales connections to enhance agricultural practices and economic growth.",
    image: "/projects/project5.png",
    tags: ["React", "Framer Motion", "GSAP", "AWS"],
    link: "https://www.bagh-e.com/",
    github: "#",
  },
  {
    title: "Taqwa Website",
    description:
      "Taqwa is an innovative Islamic app that combines modern technology with traditional values to provide users with a comprehensive platform for spiritual growth, community engagement, and access to Islamic resources.",
    image: "/projects/project6.png",
    tags: ["React", "Tailwind"],
    link: "https://taqwa.online/",
    github: "#",
  },
  {
    title: "AI Email Writer Website",
    description:
      "An AI-powered email writing assistant that helps users craft professional and effective emails quickly and easily, using advanced natural language processing techniques.",
    image: "/projects/project7.png",
    tags: ["HTML", "CSS", "JavaScript", "SwiperJS", "Lenis"],
    link: "https://www.aimailwriters.com/",
    github: "#",
  },
  {
    title: "Image To PDF Website",
    description:
      "A user-friendly web application that allows users to easily convert images to PDF format, with options for customization and batch processing.",
    image: "/projects/project8.png",
    tags: ["React", "Tailwind"],
    link: "https://pdfflows.space/",
    github: "#",
  },
  {
    title: "SpeedOn VPN Website",
    description:
      "A sleek and modern website for SpeedOn VPN, highlighting its features, pricing plans, and user testimonials, designed to attract and convert visitors into customers.",
    image: "/projects/project9.png",
    tags: ["React", "Tailwind"],
    link: "https://speedonvps.space/",
    github: "#",
  },
  {
    title: "AI Essay Writer Website",
    description:
      "An AI-powered essay writing tool that assists students and professionals in generating well-structured and coherent essays on various topics, enhancing their writing skills and productivity.",
    image: "/projects/project10.png",
    tags: ["HTML", "CSS", "JavaScript", "SwiperJS", "Lenis"],
    link: "https://nabeelhaider1-0.github.io/ai-writer/",
    github: "#",
  },
  {
    title: "Sound Wave Speaker Website",
    description:
      "A visually appealing website for Sound Wave Speakers, showcasing their innovative audio products, features, and customer reviews, designed to enhance user experience and drive sales.",
    image: "/projects/project11.png",
    tags: ["HTML", "CSS", "JavaScript", "Lenis"],
    link: "https://nabeelhaider1-0.github.io/speaker-cleaner/",
    github: "#",
  },
  {
    title: "Speech to Text Website",
    description:
      "A cutting-edge web application that converts spoken language into written text in real-time, utilizing advanced speech recognition technology for accuracy and efficiency.",
    image: "/projects/project12.png",
    tags: ["HTML", "CSS", "JavaScript", "SwiperJS", "Lenis"],
    link: "https://nabeelhaider1-0.github.io/speech-to-text/",
    github: "#",
  },
];

export const Projects = () => {
  const [showAll, setShowAll] = useState(false); // Tracks whether to show all projects or just 4
  const projectsToShow = showAll ? projects : projects.slice(0, 4); // Show all or just first 4 projects

  const handleToggleShow = () => {
    setShowAll(!showAll);
  };
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              make an impact.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my recent work, from complex web applications to
            innovative tools that solve real-world problems.
          </p>
        </div>

        {/* Projects Grid */}
        <div>
          <div className="grid md:grid-cols-2 gap-8">
            {projectsToShow.map((project, idx) => (
              <div
                key={idx}
                className="group glass rounded-2xl overflow-hidden animate-fade-in md:row-span-1"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                {/* Image */}
                <div className="relative overflow-hidden aspect-auto">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div
                    className="absolute inset-0 
                bg-gradient-to-t from-card via-card/50
                 to-transparent opacity-60"
                  />
                  {/* Overlay Links */}
                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.link}
                      target="_blank"
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <ArrowUpRight className="w-5 h-5" />
                    </a>
                    <a
                      href={project.github}
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight
                      className="w-5 h-5 
                  text-muted-foreground group-hover:text-primary
                   group-hover:translate-x-1 
                   group-hover:-translate-y-1 transition-all"
                    />
                  </div>
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Show More/Show Less Button */}
          <div className="text-center mt-12 animate-fade-in animation-delay-600">
            <AnimatedBorderButton
              onClick={handleToggleShow}
              className="p-3 rounded-full glass hover:bg-primary
              hover:text-primary-foreground transition-all"
            >
              {showAll ? (
                <>
                  View Less Projects <Minus className="w-5 h-5" />
                </>
              ) : (
                <>
                  View Less Projects <Plus className="w-5 h-5" />
                </>
              )}
            </AnimatedBorderButton>
          </div>
        </div>
      </div>
    </section>
  );
};
