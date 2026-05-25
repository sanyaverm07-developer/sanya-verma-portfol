import { Brain, Code2, Layers, Wrench } from "lucide-react";
import { SectionLabel } from "./About";

const services = [
  {
    icon: Code2,
    title: "Software Development",
    text: "End-to-end development of robust, production-ready applications using modern stacks.",
  },
  {
    icon: Layers,
    title: "Scalable App Development",
    text: "Architectures designed to grow — from MVP to enterprise-grade systems.",
  },
  {
    icon: Brain,
    title: "AI & ML Solutions",
    text: "Intelligent applications powered by machine learning and federated learning techniques.",
  },
  {
    icon: Wrench,
    title: "Technical Problem Solving",
    text: "Translating complex business challenges into elegant engineering solutions.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <SectionLabel>Services</SectionLabel>
          <h2 className="mt-4 text-4xl font-bold md:text-5xl">
            What I <span className="text-gradient">Bring</span> to the Table
          </h2>
          <p className="mt-4 text-muted-foreground">
            Currently delivering value at Adroit Infoways — and open to collaborations.
          </p>
        </div>

        <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <div
              key={s.title}
              className="glass group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-glow"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-primary/0 blur-2xl transition-all duration-500 group-hover:bg-primary/20" />
              <div className="relative">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                  <s.icon className="h-6 w-6" />
                </div>
                <div className="mt-6 text-xs font-medium text-muted-foreground">0{i + 1}</div>
                <h3 className="mt-1 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
