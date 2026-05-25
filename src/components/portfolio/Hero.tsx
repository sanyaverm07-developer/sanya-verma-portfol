import portrait from "@/assets/sanya-portrait.jpg";
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-primary/20 blur-[120px] animate-glow-pulse" />
        <div className="absolute top-40 right-1/4 h-96 w-96 rounded-full bg-accent/20 blur-[120px] animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="container mx-auto grid items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="animate-fade-up">
          <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            Available for new opportunities
          </div>

          <h1 className="mt-6 text-5xl font-bold leading-[1.05] md:text-6xl lg:text-7xl">
            Building <span className="text-gradient">Scalable Software</span>
            <br />& Intelligent
            <br /> Digital Solutions.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            I'm <span className="text-foreground font-medium">Sanya Verma</span> — a Software Engineer at Adroit Infoways
            crafting AI-driven, scalable software with a passion for clean engineering and meaningful innovation.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-105"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="glass inline-flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-medium transition-colors hover:bg-white/10"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
          </div>

          <div className="mt-12 grid max-w-md grid-cols-3 gap-6">
            {[
              { v: "1+", l: "Years Exp." },
              { v: "10+", l: "Projects" },
              { v: "15+", l: "Technologies" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl font-bold text-gradient">{s.v}</div>
                <div className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md animate-fade-up" style={{ animationDelay: "200ms" }}>
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-primary opacity-30 blur-2xl" />
          <div className="relative animate-float">
            <div className="glass-strong overflow-hidden rounded-[2rem] p-3 shadow-elevated">
              <img
                src={portrait}
                alt="Sanya Verma, Software Engineer"
                width={896}
                height={1152}
                className="h-full w-full rounded-[1.5rem] object-cover"
              />
            </div>

            <div className="glass-strong absolute -left-6 top-12 rounded-2xl p-4 shadow-card animate-float" style={{ animationDelay: "1s" }}>
              <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Currently</div>
              <div className="mt-1 text-sm font-semibold">Software Engineer</div>
              <div className="text-xs text-primary">@ Adroit Infoways</div>
            </div>

            <div className="glass-strong absolute -right-4 bottom-16 flex items-center gap-3 rounded-2xl p-3 shadow-card animate-float" style={{ animationDelay: "2s" }}>
              <div className="h-2.5 w-2.5 rounded-full bg-green-400 shadow-[0_0_12px] shadow-green-400" />
              <div className="text-xs font-medium">Open to collaborate</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
