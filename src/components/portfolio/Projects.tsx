import { ArrowUpRight, Github } from "lucide-react";
import heart from "@/assets/project-heart.jpg";
import { SectionLabel } from "./About";

const projects = [
  {
    title: "Heart Disease Prediction Using Federated Learning",
    description:
      "An intelligent system that predicts heart disease while preserving patient data privacy. Combines Machine Learning with Federated Learning for distributed, healthcare-focused predictive analysis.",
    image: heart,
    tags: ["Machine Learning", "Federated Learning", "Python", "Healthcare AI"],
    featured: true,
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <SectionLabel>Selected Work</SectionLabel>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl">
              Featured <span className="text-gradient">Projects</span>
            </h2>
          </div>
          <p className="max-w-sm text-muted-foreground">
            Real-world applications of AI, ML, and modern software engineering.
          </p>
        </div>

        <div className="mt-16 space-y-8">
          {projects.map((p) => (
            <article
              key={p.title}
              className="glass group grid overflow-hidden rounded-3xl transition-all hover:border-primary/40 hover:shadow-glow lg:grid-cols-[1.1fr_0.9fr]"
            >
              <div className="relative overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1280}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-background/80 via-transparent to-transparent" />
                {p.featured && (
                  <div className="glass-strong absolute left-5 top-5 rounded-full px-3 py-1 text-xs font-medium text-primary">
                    Featured
                  </div>
                )}
              </div>

              <div className="flex flex-col justify-between p-8 md:p-10">
                <div>
                  <h3 className="text-2xl font-bold md:text-3xl">{p.title}</h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{p.description}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-muted-foreground"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-105"
                  >
                    View Case Study <ArrowUpRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#"
                    className="glass inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium hover:bg-white/10"
                  >
                    <Github className="h-4 w-4" /> Source
                  </a>
                </div>
              </div>
            </article>
          ))}

          <div className="glass rounded-3xl border-dashed p-10 text-center text-muted-foreground">
            <p className="text-sm">More projects coming soon — currently in development.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
