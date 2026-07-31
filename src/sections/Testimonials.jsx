import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";
import { Reveal } from "@/components/Reveal";

const testimonials = [
  {
    quote:
      "Nabeel is one of the most talented engineers I've worked with. His attention to detail and ability to translate complex requirements into elegant solutions is remarkable.",
    author: "Ehtisham Hameed",
    role: "Group Chairman of TDO And Founder Infotech Pioneers.",
    avatar:
      "https://infoetec-images.s3.eu-west-1.amazonaws.com/infoetec-website-data/images/ceopic.png",
  },
  {
    quote:
      "Working with Nabeel was a game-changer for our project. He delivered ahead of schedule with code quality that set a new standard for our team.",
    author: "Feeha Rashid",
    role: "Product Manager at Infotech Pioneers",
    avatar:
      "https://infoetec-images.s3.eu-west-1.amazonaws.com/infoetec-website-data/images/feeha.png",
  },
  {
    quote:
      "Nabeel's expertise in React and TypeScript helped us rebuild our entire frontend in record time. His architectural decisions continue to pay dividends.",
    author: "Usman Khalid",
    role: "CTO at Infotech Pioneers",
    avatar:
      "https://infoetec-images.s3.eu-west-1.amazonaws.com/infoetec-website-data/images/usman.png",
  },
  {
    quote:
      "Not only is Nabeel technically brilliant, but he's also a fantastic communicator and team player. He elevated everyone around him.",
    author: "Syed Mubashir Bukhari",
    role: "CEO at Infotech Pioneers",
    avatar:
      "https://media.licdn.com/dms/image/v2/C4E03AQF4K8lPUPp_5g/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1561230779425?e=1787184000&v=beta&t=iWgQ0MSNumZHYp-IThnYTM5UrC-L9AvGj-iCtPNQblM",
  },
];

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % testimonials.length);
  };

  const previous = () => {
    setActiveIdx(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
  };
  return (
    <section id="testimonials" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2
       w-200 h-200 bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />
      <div
        className="container mx-auto 
      px-6 relative z-10"
      >
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Reveal>
            <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
              What People Say
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 text-secondary-foreground">
              Kind words from{" "}
              <span className="font-serif italic font-normal text-foreground">
                amazing people.
              </span>
            </h2>
          </Reveal>
        </div>

        {/* Testimonial Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Main Testimonial */}
            <Reveal delay={0.15}>
              <div className="glass p-8 rounded-3xl md:p-12 glow-border">
                <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                  <Quote className="w-6 h-6 text-primary-foreground" />
                </div>

                <blockquote className="text-xl md:text-2xl font-medium leading-relaxed mb-8 pt-4">
                  "{testimonials[activeIdx].quote}"
                </blockquote>

                <div className="flex items-center gap-4">
                  <img
                    src={testimonials[activeIdx].avatar}
                    alt={testimonials[activeIdx].author}
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-primary/20"
                  />
                  <div>
                    <div className="font-semibold">
                      {testimonials[activeIdx].author}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonials[activeIdx].role}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Testimonials Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
                onClick={previous}
              >
                <ChevronLeft />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    onClick={() => setActiveIdx(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      idx === activeIdx
                        ? "w-8 bg-primary"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
