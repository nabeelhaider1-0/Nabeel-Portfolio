import { useEffect, useState, useCallback, useRef } from "react";
import { ThemeContext } from "./theme";

const getInitialTheme = () => {
  if (typeof window === "undefined") return "dark";
  const saved = localStorage.getItem("theme");
  if (saved === "light" || saved === "dark") return saved;
  return window.matchMedia("(prefers-color-scheme: light)").matches
    ? "light"
    : "dark";
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme);
  const [isAnimating, setIsAnimating] = useState(false);
  const [displayTheme, setDisplayTheme] = useState(theme);
  const pendingThemeRef = useRef(null);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle("dark", displayTheme === "dark");
    root.classList.toggle("light", displayTheme === "light");
    localStorage.setItem("theme", displayTheme);
  }, [displayTheme]);

  const toggleTheme = useCallback(() => {
    if (isAnimating) return;
    const newTheme = theme === "dark" ? "light" : "dark";
    pendingThemeRef.current = newTheme;
    setIsAnimating(true);
  }, [theme, isAnimating]);

  const handleAnimationEnd = useCallback(() => {
    const newTheme = pendingThemeRef.current;
    if (newTheme) {
      setDisplayTheme(newTheme);
      setTheme(newTheme);
      pendingThemeRef.current = null;
    }
    setIsAnimating(false);
  }, []);

  const overlayColor = isAnimating
    ? theme === "dark"
      ? "#f6f8fb"
      : "#0f1418"
    : undefined;

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
      {isAnimating && (
        <div
          className="fixed inset-0 z-[9999] pointer-events-none theme-transition-overlay"
          onAnimationEnd={handleAnimationEnd}
          style={{ backgroundColor: overlayColor }}
        />
      )}
    </ThemeContext.Provider>
  );
};
