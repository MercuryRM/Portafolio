import { useState } from "react";
import { Link } from "react-router";
import { ArrowRight, ExternalLink, Cpu, Database, Smartphone, Globe } from "lucide-react";

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

// Mock Projects Data
const projects = [
  {
    id: 1,
    title: "DevFlow SaaS",
    description: "Plataforma colaborativa para desarrolladores que integra chats en tiempo real, gestión de tareas y compilación en la nube.",
    category: "web",
    tech: ["React", "TypeScript", "Node.js", "Socket.io"],
    github: "https://github.com",
    demo: "https://example.com"
  },
  {
    id: 2,
    title: "AeroTrack App",
    description: "Aplicación móvil nativa para seguimiento de vuelos comerciales en tiempo real con notificaciones push inteligentes.",
    category: "movil",
    tech: ["React Native", "Expo", "Redux Toolkit", "Firebase"],
    github: "https://github.com",
    demo: "https://example.com"
  },
  {
    id: 3,
    title: "FinanceLens AI",
    description: "Plataforma de análisis financiero que utiliza modelos de lenguaje para clasificar transacciones y sugerir presupuestos.",
    category: "ia",
    tech: ["Next.js", "Python", "FastAPI", "OpenAI API"],
    github: "https://github.com",
    demo: "https://example.com"
  },
  {
    id: 4,
    title: "PixelForge Editor",
    description: "Editor de imágenes en la web basado en canvas con filtros GPU en tiempo real y soporte para múltiples capas.",
    category: "web",
    tech: ["TypeScript", "WebGL", "Tailwind CSS", "Vite"],
    github: "https://github.com",
    demo: "https://example.com"
  }
];

const skills = [
  { name: "Frontend", icon: <Globe className="text-muted-foreground" size={20} />, items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { name: "Backend", icon: <Database className="text-muted-foreground" size={20} />, items: ["Node.js", "Express", "PostgreSQL", "MongoDB"] },
  { name: "Mobile", icon: <Smartphone className="text-muted-foreground" size={20} />, items: ["React Native", "iOS/Android", "Expo"] },
  { name: "DevOps & AI", icon: <Cpu className="text-muted-foreground" size={20} />, items: ["Docker", "AWS", "Git/GitHub", "OpenAI APIs"] }
];

export default function Inicio() {
  const [filter, setFilter] = useState("todos");

  const filteredProjects = filter === "todos" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="space-y-24 md:space-y-32">
      {/* 1. Hero Section */}
      <section className="flex flex-col items-center text-center justify-center min-h-[50vh] max-w-3xl mx-auto space-y-6 pt-6 md:pt-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border/50 bg-white/[0.01] text-[11px] font-medium tracking-wider uppercase text-muted-foreground">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Disponible para proyectos
        </div>

        <h1 className="text-4xl sm:text-6xl md:text-7xl font-semibold tracking-tight text-white leading-[1.1]">
          Diseño y desarrollo de <br />
          <span className="text-muted-foreground font-light">experiencias digitales</span>
        </h1>

        <p className="text-sm md:text-base text-muted-foreground max-w-xl mx-auto leading-relaxed">
          Hola, soy Luis, desarrollador full-stack especializado en construir aplicaciones web y móviles minimalistas, rápidas y de alto rendimiento.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-4">
          <Link 
            to="/contacto" 
            className="px-5 py-2.5 rounded-md text-xs font-semibold uppercase tracking-wider bg-white hover:bg-zinc-200 text-black transition-all duration-300 flex items-center gap-1.5"
          >
            Trabajemos juntos <ArrowRight size={14} />
          </Link>
          <a 
            href="#proyectos" 
            className="px-5 py-2.5 rounded-md text-xs font-semibold uppercase tracking-wider border border-border/80 bg-transparent hover:bg-white/5 text-foreground transition-all duration-300"
          >
            Ver Proyectos
          </a>
        </div>
      </section>

      {/* 2. Projects Section */}
      <section id="proyectos" className="space-y-8 scroll-mt-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-border/30 pb-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-semibold tracking-tight">Proyectos Destacados</h2>
            <p className="text-xs text-muted-foreground">
              Una selección de mis aplicaciones y desarrollos más recientes.
            </p>
          </div>

          {/* Filtering buttons */}
          <div className="flex flex-wrap gap-2">
            {["todos", "web", "movil", "ia"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-3 py-1 rounded-md text-[11px] font-semibold uppercase tracking-wider transition-all cursor-pointer border ${
                  filter === cat
                    ? "bg-white text-black border-white"
                    : "bg-transparent text-muted-foreground border-border/50 hover:text-foreground hover:border-border"
                }`}
              >
                {cat === "movil" ? "Móvil" : cat === "ia" ? "IA" : cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="group relative flex flex-col justify-between rounded-lg border border-border/30 bg-card/20 p-6 md:p-8 overflow-hidden transition-all duration-300 glow-effect"
            >
              {/* Card visual subtle accent glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.01] group-hover:bg-white/[0.03] blur-2xl transition-all duration-300 pointer-events-none rounded-full" />

              <div className="space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/80">
                  {project.category === "movil" ? "Móvil" : project.category === "ia" ? "IA" : project.category}
                </span>

                <h3 className="text-lg font-bold group-hover:text-white transition-colors">
                  {project.title}
                </h3>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div className="space-y-6 pt-6">
                {/* Tech tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-[10px] font-medium text-muted-foreground/60">
                      #{t.toLowerCase()}
                    </span>
                  ))}
                </div>

                {/* Footer action links */}
                <div className="flex items-center gap-4 pt-3 border-t border-border/20">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github size={12} /> Código
                  </a>
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-muted-foreground hover:text-foreground transition-colors ml-auto"
                  >
                    Demo <ExternalLink size={12} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Skills Section */}
      <section className="space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <h2 className="text-2xl font-semibold tracking-tight">Habilidades y Tecnologías</h2>
          <p className="text-xs text-muted-foreground">
            Herramientas y frameworks que utilizo para dar vida a mis proyectos.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, idx) => (
            <div 
              key={idx} 
              className="p-6 rounded-lg border border-border/30 bg-card/15 space-y-4 hover:border-border transition-all duration-300"
            >
              <div className="p-2 w-8 h-8 rounded bg-border/20 flex items-center justify-center text-muted-foreground">
                {skill.icon}
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider">{skill.name}</h3>
              <ul className="space-y-2">
                {skill.items.map((item, i) => (
                  <li key={i} className="text-xs text-muted-foreground flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-muted-foreground/45" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
