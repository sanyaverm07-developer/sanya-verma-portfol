import { ArrowRight, Brain, Code2, Download, Mail, Sparkles, Star } from "lucide-react";

const techMarquee = [
  "Python", "Java", "Machine Learning", "Federated Learning", "AI", "GitHub",
  "Software Engineering", "IoT", "Data Science", "Cloud",
];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      {/* Animated grid + glow backdrop */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, oklch(1 0 0 / 0.5) 1px, transparent 1px), linear-gradient(to bottom, oklch(1 0 0 / 0.5) 1px, transparent 1px)",
            backgroundSize: "56px 56px",
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 30%, black 40%, transparent 100%)",
          }}
        />
        <div className="absolute -top-32 left-1/4 h-96 w-96 rounded-full bg-primary/25 blur-[120px] animate-glow-pulse" />
        <div
          className="absolute top-40 right-1/4 h-96 w-96 rounded-full bg-accent/25 blur-[120px] animate-glow-pulse"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      <div className="container mx-auto grid items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
        {/* LEFT: Copy */}
        <div className="animate-fade-up">
          <div className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>
            Available for new opportunities
            <span className="mx-1 h-3 w-px bg-white/15" />
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span>Open to remote</span>
          </div>

          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.02] tracking-tight md:text-6xl lg:text-[5.25rem]">
            Building <span className="text-gradient">Scalable</span>
            <br />
            Software &{" "}
            <span className="relative inline-block">
              <span className="text-gradient">Intelligent</span>
              <svg
                className="absolute -bottom-2 left-0 h-3 w-full text-primary/60"
                viewBox="0 0 200 12"
                preserveAspectRatio="none"
                fill="none"
              >
                <path d="M2 8 Q 50 2, 100 6 T 198 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </span>
            <br />
            Digital Solutions.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            I'm <span className="font-medium text-foreground">Sanya Verma</span> — a Software Engineer at
            Adroit Infoways crafting AI-driven, scalable systems with a passion for clean engineering and
            meaningful innovation.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl bg-gradient-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.03]"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
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
              href="/Sanya_Verma_Resume.pdf"
              download="Sanya_Verma_Resume.pdf"
              className="group inline-flex items-center gap-2 rounded-xl px-5 py-3.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <Download className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
              Download Resume
            </a>
          </div>

          {/* Stat bento */}
          <div className="mt-10 grid max-w-lg grid-cols-3 gap-3">
            {[
              { v: "1+", l: "Years Exp." },
              { v: "10+", l: "Projects" },
              { v: "15+", l: "Tech Stack" },
            ].map((s) => (
              <div
                key={s.l}
                className="glass rounded-2xl px-4 py-4 transition-all hover:border-primary/40 hover:shadow-glow"
              >
                <div className="font-display text-2xl font-bold text-gradient md:text-3xl">{s.v}</div>
                <div className="mt-1 text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Portrait + floating chips */}
        <div className="relative mx-auto w-full max-w-md animate-fade-up" style={{ animationDelay: "200ms" }}>
          {/* Glow ring */}
          <div className="absolute -inset-6 rounded-[2.75rem] bg-gradient-primary opacity-30 blur-3xl" />

          {/* Decorative orbiting dot */}
          <div className="pointer-events-none absolute -inset-8 hidden md:block">
            <div className="absolute inset-0 animate-[spin_18s_linear_infinite]">
              <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-primary shadow-glow" />
            </div>
          </div>

          <div className="relative animate-float">
            {/* Frame */}
            <div className="glass-strong relative overflow-hidden rounded-[2rem] p-3 shadow-elevated">
              {/* Corner brackets */}
              <CornerBrackets />
              <img
                src="https://i.postimg.cc/x8q3H5Pr/photo.jpg"
                alt="Sanya Verma, Software Engineer"
                width={896}
                height={1152}
                className="h-full w-full rounded-[1.5rem] object-cover"
              />
              {/* Subtle scanline overlay */}
              <div
                className="pointer-events-none absolute inset-3 rounded-[1.5rem]"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 0%, transparent 95%, oklch(0.72 0.18 285 / 0.15) 100%)",
                }}
              />
            </div>

            {/* Floating chip — Currently */}
            <div
              className="glass-strong absolute -left-4 top-10 rounded-2xl p-3.5 shadow-card animate-float md:-left-8"
              style={{ animationDelay: "1s" }}
            >
              <div className="flex items-center gap-2.5">
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-primary text-primary-foreground">
                  <Code2 className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Currently</div>
                  <div className="text-sm font-semibold leading-tight">Software Engineer</div>
                  <div className="text-[11px] text-primary">@ Adroit Infoways</div>
                </div>
              </div>
            </div>

            {/* Floating chip — AI focus */}
            <div
              className="glass-strong absolute -right-4 top-1/2 rounded-2xl p-3 shadow-card animate-float md:-right-8"
              style={{ animationDelay: "2.4s" }}
            >
              <div className="flex items-center gap-2.5">
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-accent/20 text-accent ring-1 ring-accent/30">
                  <Brain className="h-4 w-4" />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">Focus</div>
                  <div className="text-sm font-semibold leading-tight">AI & ML</div>
                </div>
              </div>
            </div>

            {/* Floating chip — Open to collab (bottom pill) */}
            <div
              className="glass-strong absolute -bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full px-4 py-2.5 shadow-card animate-float"
              style={{ animationDelay: "1.6s" }}
            >
              <Star className="h-3.5 w-3.5 fill-accent text-accent" />
              <div className="text-xs font-medium">Open to collaborate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Tech marquee */}
      <div className="relative mt-16 md:mt-20">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
        <div className="flex overflow-hidden">
          <div className="flex shrink-0 animate-[marquee_30s_linear_infinite] gap-3 pr-3">
            {[...techMarquee, ...techMarquee].map((t, i) => (
              <span
                key={i}
                className="glass whitespace-nowrap rounded-full px-5 py-2 text-sm text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
          <div className="flex shrink-0 animate-[marquee_30s_linear_infinite] gap-3 pr-3" aria-hidden>
            {[...techMarquee, ...techMarquee].map((t, i) => (
              <span
                key={i}
                className="glass whitespace-nowrap rounded-full px-5 py-2 text-sm text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CornerBrackets() {
  const base = "absolute h-5 w-5 border-primary/70";
  return (
    <>
      <div className={`${base} left-1 top-1 border-l-2 border-t-2 rounded-tl-xl`} />
      <div className={`${base} right-1 top-1 border-r-2 border-t-2 rounded-tr-xl`} />
      <div className={`${base} left-1 bottom-1 border-l-2 border-b-2 rounded-bl-xl`} />
      <div className={`${base} right-1 bottom-1 border-r-2 border-b-2 rounded-br-xl`} />
    </>
  );
}
