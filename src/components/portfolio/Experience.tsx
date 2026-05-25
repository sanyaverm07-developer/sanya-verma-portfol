import { Briefcase, GraduationCap } from "lucide-react";
import { SectionLabel } from "./About";

const timeline = [
  {
    type: "work",
    icon: Briefcase,
    period: "Jan 2026 — Present",
    title: "Software Engineer",
    org: "Adroit Infoways, Chandigarh",
    points: [
      "Developing scalable software solutions across product teams",
      "Collaborating cross-functionally to deliver business-focused applications",
      "Applying modern software engineering best practices",
    ],
  },
  {
    type: "edu",
    icon: GraduationCap,
    period: "2021 — 2025",
    title: "B.Tech in Computer Science Engineering",
    org: "GLA University, Mathura",
    points: [
      "Specialization in Internet of Things (IoT)",
      "Focused on software systems, AI, and applied machine learning",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>Journey</SectionLabel>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            Experience & <span className="text-gradient">Education</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            A track record of building, learning, and shipping.
          </p>
        </div>

        <div className="relative mx-auto mt-16 max-w-3xl">
          <div className="absolute left-6 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-accent/40 to-transparent md:left-1/2" />

          <div className="space-y-12">
            {timeline.map((item, idx) => (
              <div
                key={item.title}
                className={`relative md:grid md:grid-cols-2 md:gap-12 ${
                  idx % 2 === 0 ? "" : "md:[&>div]:order-2"
                }`}
              >
                <div className="absolute left-6 top-6 grid h-3 w-3 -translate-x-1/2 place-items-center rounded-full bg-gradient-primary shadow-glow md:left-1/2" />

                <div className={`pl-16 md:pl-0 ${idx % 2 === 1 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <div className="glass group rounded-2xl p-6 transition-all hover:border-primary/40 hover:shadow-glow">
                    <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wider text-accent">
                      <item.icon className="h-4 w-4" />
                      {item.period}
                    </div>
                    <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                    <div className="mt-1 text-sm text-primary">{item.org}</div>
                    <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                      {item.points.map((p) => (
                        <li key={p} className="flex gap-2">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                          <span className="text-left">{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
