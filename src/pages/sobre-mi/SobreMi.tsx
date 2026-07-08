import { Briefcase, GraduationCap, Heart, Rocket, ShieldCheck, Trophy } from "lucide-react";

const experience = [
  {
    role: "Desarrollador Web Front End",
    company: "Proyectos Personales & Freelance",
    period: "2024 - Presente",
    description: "Construcción de aplicaciones web con React, TypeScript y Firebase. Enfocado en crear interfaces limpias, funcionales y con buena experiencia de usuario."
  },
  {
    role: "Estudiante de Desarrollo de Software",
    company: "Universidad San Marcos",
    period: "2022 - Presente",
    description: "Formación en fundamentos de programación, estructuras de datos, bases de datos y desarrollo de software. Aplicando lo aprendido en proyectos reales desde el primer año."
  }
];

const education = [
  {
    degree: "Ingeniería en Sistemas Computacionales",
    school: "Universidad San Marcos",
    period: "2022 - Presente",
  }
];

const values = [
  {
    title: "Calidad de Código",
    desc: "Escribo código limpio, mantenible y testeable siguiendo principios SOLID y patrones modernos.",
    icon: <ShieldCheck className="text-muted-foreground" size={20} />
  },
  {
    title: "Innovación Constante",
    desc: "Investigo y adopto las últimas tecnologías para ofrecer soluciones eficientes y competitivas.",
    icon: <Rocket className="text-muted-foreground" size={20} />
  },
  {
    title: "Enfoque en el Usuario",
    desc: "Diseño con empatía, asegurando interfaces intuitivas, rápidas y agradables de usar.",
    icon: <Heart className="text-muted-foreground" size={20} />
  },
  {
    title: "Compromiso y Entrega",
    desc: "Orientado a resultados y puntualidad en los plazos, aportando valor real al negocio.",
    icon: <Trophy className="text-muted-foreground" size={20} />
  }
];

export default function SobreMi() {
  return (
    <div className="space-y-16 py-8 animate-fade-in">
      {/* 1. Header Section */}
      <div className="space-y-4 max-w-2xl">
        <h1 className="text-3xl font-semibold tracking-tight">Sobre Mí</h1>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Soy estudiante de Ingeniería en Sistemas Computacionales en la Universidad San Marcos, con una fuerte pasión por el desarrollo web. Estoy comenzando mi camino profesional construyendo proyectos reales que me permiten aplicar lo que aprendo cada día. Me enfoco en escribir código limpio y crear experiencias de usuario que marquen la diferencia.
        </p>
      </div>

      {/* 2. Experience & Education (Two Columns) */}
      <div className="grid md:grid-cols-2 gap-12">
        {/* Experience Column */}
        <div className="space-y-8">
          <div className="flex items-center gap-2 border-b border-border/30 pb-3">
            <Briefcase className="text-muted-foreground" size={18} />
            <h2 className="text-lg font-semibold uppercase tracking-wider">Trayectoria Profesional</h2>
          </div>

          <div className="relative border-l border-border/30 pl-6 space-y-8 ml-3">
            {experience.map((item, idx) => (
              <div key={idx} className="relative">
                {/* Timeline Dot */}
                <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-muted-foreground/30 border-4 border-background" />
                <span className="text-[10px] font-bold tracking-wider text-muted-foreground uppercase">{item.period}</span>
                <h3 className="text-base font-bold mt-1">{item.role}</h3>
                <h4 className="text-xs text-muted-foreground/80 mb-2">{item.company}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Education Column */}
        <div className="space-y-8">
          <div className="flex items-center gap-2 border-b border-border/30 pb-3">
            <GraduationCap className="text-muted-foreground" size={18} />
            <h2 className="text-lg font-semibold uppercase tracking-wider">Educación</h2>
          </div>

          <div className="relative border-l border-border/30 pl-6 space-y-8 ml-3">
            {education.map((item, idx) => (
              <div key={idx} className="relative">
                {/* Timeline Dot */}
                <span className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-muted-foreground/30 border-4 border-background" />
                <span className="text-[10px] font-bold tracking-wider text-muted-foreground uppercase">{item.period}</span>
                <h3 className="text-base font-bold mt-1">{item.degree}</h3>
                <h4 className="text-xs text-muted-foreground/80">{item.school}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 3. Bento Grid of Values */}
      <div className="space-y-8 pt-8">
        <div className="border-b border-border/30 pb-3">
          <h2 className="text-lg font-semibold uppercase tracking-wider">Mis Valores & Filosofía</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((val, idx) => (
            <div 
              key={idx} 
              className="p-6 rounded-lg border border-border/30 bg-card/15 hover:border-border transition-all duration-300 space-y-3"
            >
              <div className="p-2 w-8 h-8 rounded bg-border/25 flex items-center justify-center text-muted-foreground">
                {val.icon}
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider">{val.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
