import { Button } from "@/components/Button";
import { Magnetic } from "@/components/Magnetic";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "@/context/theme";
import { useEffect, useState } from "react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#testimonials", label: "Testimonials" },
];

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const { theme, toggleTheme } = useTheme();

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    window.lenis?.scrollTo(target, { duration: 1 });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = ["home", ...navLinks.map((link) => link.href.slice(1))]
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 transition-all duration-500 ${
        isScrolled ? "glass-strong py-3" : "bg-transparent py-5"
      }  z-50`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setIsMobileMenuOpen(false);
            window.lenis?.scrollTo(0, { duration: 1 });
          }}
          className="text-xl font-bold tracking-tight hover:text-primary"
        >
          NH<span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <div className="glass rounded-full px-2 py-1 flex items-center gap-1">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`px-4 py-2 text-sm rounded-full transition-all ${
                  activeSection === link.href.slice(1)
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-surface"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        {/* Right Cluster */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="p-2 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Magnetic strength={0.3}>
              <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>
                <Button size="sm">Contact Me</Button>
              </a>
            </Magnetic>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground cursor-pointer"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden glass-strong animate-fade-in">
          <div className="container mx-auto px-6 py-6 flex flex-col gap-4">
            {navLinks.map((link, index) => (
              <a
                href={link.href}
                key={index}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-lg py-2 transition-all ${
                  activeSection === link.href.slice(1)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.label}
              </a>
            ))}

            {/* Direct link to contact or trigger scroll */}
            <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>
              <Magnetic strength={0.3}>
                <Button>Contact Me</Button>
              </Magnetic>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
