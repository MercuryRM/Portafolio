import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle } from "lucide-react";
import { sendContactEmail } from "../../services/contactService";

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

export default function Contacto() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    
    const success = await sendContactEmail(formData);
    
    if (success) {
      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 5000);
    } else {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <div className="space-y-12 py-8 max-w-4xl mx-auto">
      {/* 1. Header */}
      <div className="space-y-4 text-center max-w-xl mx-auto">
        <h1 className="text-3xl font-semibold tracking-tight">Contacto</h1>
        <p className="text-sm text-muted-foreground">
          ¿Tienes un proyecto en mente, una oportunidad de trabajo, o simplemente quieres decir hola? Escríbeme y responderé lo antes posible.
        </p>
      </div>

      <div className="grid md:grid-cols-5 gap-8 items-start">
        {/* Info Column */}
        <div className="md:col-span-2 space-y-6">
          <div className="p-6 rounded-lg border border-border/30 bg-card/15 space-y-6">
            <h3 className="text-sm font-bold uppercase tracking-wider">Información de Contacto</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="p-2 rounded bg-border/25 text-muted-foreground">
                  <Mail size={16} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground/60">Enviar correo</p>
                  <a href="mailto:luisrramirez165@gmail.com" className="text-xs font-semibold hover:underline text-foreground">luisrramirez165@gmail.com</a>
                </div>
              </div>

              <div className="flex items-center gap-3 text-muted-foreground">
                <div className="p-2 rounded bg-border/25 text-muted-foreground">
                  <MapPin size={16} />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-muted-foreground/60">Ubicación</p>
                  <p className="text-xs font-semibold text-foreground">San Cristóbal de las Casas, Chiapas, México</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-border/20">
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground/60 mb-3">Redes Sociales</p>
              <div className="flex items-center gap-2">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-2 rounded border border-border/50 hover:bg-white/5 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github size={15} />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="p-2 rounded border border-border/50 hover:bg-white/5 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin size={15} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="md:col-span-3">
          <form onSubmit={handleSubmit} className="p-6 md:p-8 rounded-lg border border-border/30 bg-card/20 space-y-4">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Nombre</label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Tu nombre"
                  className="w-full px-4 py-2.5 rounded-md border border-border/60 bg-transparent text-xs focus:outline-none focus:border-white transition-all text-white placeholder-muted-foreground/40"
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Email</label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="tu@email.com"
                  className="w-full px-4 py-2.5 rounded-md border border-border/60 bg-transparent text-xs focus:outline-none focus:border-white transition-all text-white placeholder-muted-foreground/40"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="subject" className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Asunto</label>
              <input
                type="text"
                id="subject"
                required
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="¿De qué trata tu mensaje?"
                className="w-full px-4 py-2.5 rounded-md border border-border/60 bg-transparent text-xs focus:outline-none focus:border-white transition-all text-white placeholder-muted-foreground/40"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="message" className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Mensaje</label>
              <textarea
                id="message"
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Escribe tu mensaje aquí..."
                className="w-full px-4 py-2.5 rounded-md border border-border/60 bg-transparent text-xs focus:outline-none focus:border-white transition-all text-white placeholder-muted-foreground/40 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status !== "idle"}
              className="w-full py-2.5 px-4 rounded-md bg-white hover:bg-zinc-200 text-black font-semibold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {status === "idle" && (
                <>
                  Enviar Mensaje <Send size={12} />
                </>
              )}
              {status === "sending" && "Enviando..."}
              {status === "success" && (
                <>
                  Mensaje Enviado <CheckCircle size={12} />
                </>
              )}
            </button>

            {status === "success" && (
              <div className="p-3 rounded-md bg-white/[0.02] border border-green-500/30 text-green-400 text-xs text-center animate-fade-in">
                ¡Gracias! Tu mensaje ha sido enviado exitosamente. Me pondré en contacto contigo pronto.
              </div>
            )}

            {status === "error" && (
              <div className="p-3 rounded-md bg-white/[0.02] border border-red-500/30 text-red-400 text-xs text-center animate-fade-in">
                Hubo un problema al enviar tu mensaje. Por favor, verifica tu clave de acceso o inténtalo de nuevo más tarde.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
