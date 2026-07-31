import { ArrowUpRight, Minus, Plus } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { Reveal } from "@/components/Reveal";
import { useState } from "react";
const projects = [
  {
    title: "TDO B2B",
    description:
      "A B2B travel booking platform that offers a wide range of travel services, including flights, hotels, and car rentals, with a user-friendly interface and seamless booking experience.",
    image: "/projects/project13.png",
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
      "TailwindCSS",
      "PostgreSQL",
    ],
    link: "https://www.tdonlines.com/",
  },
  {
    title: "TDO B2B BackOffice",
    description:
      "A comprehensive back-office management system for travel agencies, featuring real-time booking tracking, customer management, and analytics.",
    image: "/projects/project14.png",
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
      "TailwindCSS",
      "PostgreSQL",
    ],
    link: "https://www.admin.tdonlines.com/",
  },
  {
    title: "Muqamat",
    description:
      "A Travel booking platform that offers personalized itineraries, seamless booking experiences, and real-time updates for travelers.",
    image: "/projects/project1.png",
    tags: ["React", "PostgreSQL", "NodeJS", "Redis", "AWS", "Revolut"],
    link: "https://muqamat.com/",
  },
  {
    title: "Muqamat BackOffice",
    description:
      "A comprehensive back-office management system for travel agencies, featuring real-time booking tracking, customer management, and analytics.",
    image: "/projects/project2.png",
    tags: [
      "React",
      "PostgreSQL",
      "NodeJS",
      "Redis",
      "Redux",
      "AWS",
      "Revolut",
      "TypeScript",
      "Docker",
      "Recharts",
      "Docker",
    ],
    link: "https://www.admin.muqamat.com/",
  },

  {
    title: "Infoetec Company Site",
    description:
      "A modern and responsive company website for Infoetec, showcasing their services, portfolio, and client testimonials with a sleek design and intuitive navigation.",
    image: "/projects/project4.png",
    tags: ["React", "Clandely", "Framer Motion", "GSAP", "AWS", "i18n"],
    link: "https://infoetec.com/",
  },
  {
    title: "Bagh-e Website",
    description:
      "Bagh-e is a tech-based, Shariah-compliant platform that aims to empower farmers in agri-based developing countries. We provide innovative financing solutions, crop optimization guidance, and direct sales connections to enhance agricultural practices and economic growth.",
    image: "/projects/project5.png",
    tags: ["React", "Framer Motion", "GSAP", "AWS"],
    link: "https://www.bagh-e.com/",
  },
  {
    title: "Taqwa Website",
    description:
      "Taqwa is an innovative Islamic app that combines modern technology with traditional values to provide users with a comprehensive platform for spiritual growth, community engagement, and access to Islamic resources.",
    image: "/projects/project6.png",
    tags: ["React", "Tailwind"],
    link: "https://taqwa.online/",
  },
  {
    title: "AI Email Writer Website",
    description:
      "An AI-powered email writing assistant that helps users craft professional and effective emails quickly and easily, using advanced natural language processing techniques.",
    image: "/projects/project7.png",
    tags: ["HTML", "CSS", "JavaScript", "SwiperJS", "Lenis"],
    link: "https://www.aimailwriters.com/",
  },
  {
    title: "Image To PDF Website",
    description:
      "A user-friendly web application that allows users to easily convert images to PDF format, with options for customization and batch processing.",
    image: "/projects/project8.png",
    tags: ["React", "Tailwind"],
    link: "https://pdfflows.space/",
  },
  {
    title: "SpeedOn VPN Website",
    description:
      "A sleek and modern website for SpeedOn VPN, highlighting its features, pricing plans, and user testimonials, designed to attract and convert visitors into customers.",
    image: "/projects/project9.png",
    tags: ["React", "Tailwind"],
    link: "https://speedonvps.space/",
  },
  {
    title: "Escapra Trips (DMC)",
    description:
      "A digital marketing campaign management tool for travel agencies, featuring automated content creation, performance tracking, and customer engagement analytics.",
    image: "/projects/project3.png",
    tags: ["React", "Tailwind"],
    link: "https://stage.escapratrips.com/",
  },
  {
    title: "AI Essay Writer Website",
    description:
      "An AI-powered essay writing tool that assists students and professionals in generating well-structured and coherent essays on various topics, enhancing their writing skills and productivity.",
    image: "/projects/project10.png",
    tags: ["HTML", "CSS", "JavaScript", "SwiperJS", "Lenis"],
    link: "https://nabeelhaider1-0.github.io/ai-writer/",
  },
  {
    title: "Sound Wave Speaker Website",
    description:
      "A visually appealing website for Sound Wave Speakers, showcasing their innovative audio products, features, and customer reviews, designed to enhance user experience and drive sales.",
    image: "/projects/project11.png",
    tags: ["HTML", "CSS", "JavaScript", "Lenis"],
    link: "https://nabeelhaider1-0.github.io/speaker-cleaner/",
  },
  {
    title: "Speech to Text Website",
    description:
      "A cutting-edge web application that converts spoken language into written text in real-time, utilizing advanced speech recognition technology for accuracy and efficiency.",
    image: "/projects/project12.png",
    tags: ["HTML", "CSS", "JavaScript", "SwiperJS", "Lenis"],
    link: "https://nabeelhaider1-0.github.io/speech-to-text/",
  },
];

export const Projects = () => {
  const [showAll, setShowAll] = useState(false); // Tracks whether to show all projects or just 4
  const projectsToShow = showAll ? projects : projects.slice(0, 4); // Show all or just first 4 projects

  const handleToggleShow = () => {
    const expanding = !showAll;
    setShowAll(expanding);

    if (expanding) return;

    const section = document.getElementById("projects");
    const lenis = window.lenis;
    if (lenis) {
      lenis.scrollTo(section, { offset: -24, duration: 0.8 });
    } else {
      section?.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <Reveal>
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
              Featured Work
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
              Projects that
              <span className="font-serif italic font-normal text-white">
                {" "}
                make an impact.
              </span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-muted-foreground">
              A selection of my recent work, from complex web applications to
              innovative tools that solve real-world problems.
            </p>
          </Reveal>
        </div>

        {/* Projects Grid */}
        <div>
          <div className="grid md:grid-cols-2 gap-8">
            {projectsToShow.map((project, idx) => (
              <Reveal key={idx} delay={0.05 * (idx % 2)}>
                <div className="group glass rounded-2xl overflow-hidden h-full">
                  {/* Image */}
                  <div className="relative overflow-hidden aspect-21/10">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div
                      className="absolute inset-0 
                  bg-linear-to-t from-card via-card/50
                   to-transparent opacity-60"
                    />
                    {/* Overlay Links */}
                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                      >
                        <ArrowUpRight className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noreferrer noopener"
                        className="text-muted-foreground group-hover:text-primary transition-all"
                      >
                        <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                      </a>
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
              </Reveal>
            ))}
          </div>
          {/* Show More/Show Less Button */}
          <Reveal className="text-center mt-12" delay={0.3}>
            <AnimatedBorderButton
              id="projects-toggle"
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
                  View More Projects <Plus className="w-5 h-5" />
                </>
              )}
            </AnimatedBorderButton>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
