import { Brain, Code2, Lightbulb, Rocket } from "lucide-react";

const highlights = [
  { icon: Code2, title: "Software Engineering", text: "Building reliable, maintainable systems with modern practices." },
  { icon: Brain, title: "AI & ML", text: "Designing intelligent, data-driven applications and models." },
  { icon: Rocket, title: "Scalable Apps", text: "Architecting solutions that grow with business needs." },
  { icon: Lightbulb, title: "Continuous Learner", text: "Always exploring new technologies and methodologies." },
];

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionLabel>About Me</SectionLabel>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Motivated engineer with a <span className="text-gradient">curious mind</span>.
            </h2>
            <div className="mt-6 space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a detail-oriented Software Developer with a strong academic background in
                Computer Science Engineering and a specialization in Internet of Things (IoT)
                from <span className="text-foreground font-medium">GLA University, Mathura</span>.
              </p>
              <p>
                Currently working as a Software Engineer at{" "}
                <span className="text-foreground font-medium">Adroit Infoways, Chandigarh</span>,
                I focus on software engineering, AI-driven applications, machine learning, and
                modern software technologies.
              </p>
              <p>
                Adaptability, problem-solving, and a passion for impactful digital solutions
                guide everything I build.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((h, i) => (
              <div
                key={h.title}
                className="glass group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-glow"
                style={{ animationDelay: `${i * 80}ms` }}
              >
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                  <h.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{h.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{h.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-primary">
      <span className="h-1 w-1 rounded-full bg-primary" />
      {children}
    </div>
  );
}
