import { Link, NavLink, Outlet } from "react-router";
import { useState, useEffect } from "react";
import { Sun, Moon, Terminal, Mail } from "lucide-react";

const Github = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ size = 24, className = "" }: { size?: number; className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export const START = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Default to dark mode for that premium developer aesthetic
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col transition-colors duration-300 relative bg-grid-pattern">
      
      {/* Decorative top gradient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[300px] bg-gradient-to-b from-white/[0.02] to-transparent blur-3xl pointer-events-none" />

      {/* Sticky Premium Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/30 backdrop-blur-md bg-background/80 transition-all">
        <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 font-medium text-sm tracking-widest uppercase hover:opacity-80 transition-opacity">
            <Terminal size={14} className="text-foreground/80" />
            <span className="font-bold text-foreground">
              luis.dev
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `text-xs uppercase tracking-wider font-semibold transition-all ${
                  isActive 
                    ? "text-foreground border-b border-foreground/80 pb-0.5" 
                    : "text-muted-foreground hover:text-foreground"
                }`
              }
            >
              Inicio
            </NavLink>
            <NavLink 
              to="/sobre-mi" 
              className={({ isActive }) => 
                `text-xs uppercase tracking-wider font-semibold transition-all ${
                  isActive 
                    ? "text-foreground border-b border-foreground/80 pb-0.5" 
                    : "text-muted-foreground hover:text-foreground"
                }`
              }
            >
              Sobre Mí
            </NavLink>
            <NavLink 
              to="/contacto" 
              className={({ isActive }) => 
                `text-xs uppercase tracking-wider font-semibold transition-all ${
                  isActive 
                    ? "text-foreground border-b border-foreground/80 pb-0.5" 
                    : "text-muted-foreground hover:text-foreground"
                }`
              }
            >
              Contacto
            </NavLink>
          </nav>

          <div className="flex items-center gap-4">
            {/* Theme Toggle Button */}
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-1.5 rounded-md border border-border/50 bg-transparent hover:bg-white/5 text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={15} /> : <Moon size={15} />}
            </button>
            
            {/* CTA button in Navbar */}
            <Link 
              to="/contacto" 
              className="hidden sm:inline-flex items-center justify-center px-4 py-1.5 rounded-md text-xs font-semibold uppercase tracking-wider border border-border/80 bg-transparent hover:bg-white hover:text-black transition-all duration-300"
            >
              Contacto
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile navigation bar fixed at bottom */}
      <nav className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 bg-black/60 backdrop-blur-xl border border-white/[0.08] px-6 py-2.5 rounded-full flex gap-6 shadow-2xl">
        <NavLink to="/" className={({ isActive }) => `text-xs uppercase tracking-wider ${isActive ? "text-foreground font-bold" : "text-muted-foreground font-medium"}`}>
          Inicio
        </NavLink>
        <NavLink to="/sobre-mi" className={({ isActive }) => `text-xs uppercase tracking-wider ${isActive ? "text-foreground font-bold" : "text-muted-foreground font-medium"}`}>
          Sobre Mí
        </NavLink>
        <NavLink to="/contacto" className={({ isActive }) => `text-xs uppercase tracking-wider ${isActive ? "text-foreground font-bold" : "text-muted-foreground font-medium"}`}>
          Contacto
        </NavLink>
      </nav>

      {/* Main Content Area */}
      <main className="flex-1 max-w-5xl w-full mx-auto py-12 px-4 md:px-6 relative z-10">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-border/30 bg-background/50 py-8 relative z-10 transition-colors">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground tracking-wide">
            © {new Date().getFullYear()} LUIS.DEV. TODOS LOS DERECHOS RESERVADOS.
          </p>
          <div className="flex items-center gap-4">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Github size={16} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
              <Linkedin size={16} />
            </a>
            <a href="mailto:luis@example.com" className="text-muted-foreground hover:text-foreground transition-colors">
              <Mail size={16} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};