import { SectionLabel } from "./About";

const skills = [
  { name: "Java", level: 88, cat: "Language" },
  { name: "Python", level: 90, cat: "Language" },
  { name: "Machine Learning", level: 85, cat: "AI/ML" },
  { name: "Artificial Intelligence", level: 82, cat: "AI/ML" },
  { name: "Software Engineering", level: 90, cat: "Practice" },
  { name: "GitHub", level: 88, cat: "Tools" },
  { name: "Excel", level: 80, cat: "Tools" },
  { name: "Federated Learning", level: 75, cat: "AI/ML" },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>Toolkit</SectionLabel>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            The languages, frameworks, and disciplines I work with every day.
          </p>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-2">
          {skills.map((s, i) => (
            <div
              key={s.name}
              className="glass group rounded-2xl p-6 transition-all hover:border-primary/40 hover:shadow-glow"
            >
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.cat}</div>
                  <div className="mt-1 font-display text-lg font-semibold">{s.name}</div>
                </div>
                <div className="font-display text-2xl font-bold text-gradient">{s.level}%</div>
              </div>
              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-white/5">
                <div
                  className="h-full rounded-full bg-gradient-primary transition-all duration-1000 ease-out"
                  style={{ width: `${s.level}%`, animationDelay: `${i * 80}ms` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
