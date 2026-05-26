import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { SectionLabel } from "./About";

const SERVICE_ID = "service_ixas1nb";
const TEMPLATE_ID = "template_d6t0bie";
const PUBLIC_KEY = "itmdpQSjCRsdhWfgs";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");
    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, { publicKey: PUBLIC_KEY });
      setStatus("sent");
      formRef.current.reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const buttonLabel =
    status === "sending" ? "Sending..." :
    status === "sent" ? "Message Sent ✓" :
    status === "error" ? "Failed — try again" : null;

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="glass-strong relative overflow-hidden rounded-3xl p-8 shadow-elevated md:p-14">
          <div className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full bg-primary/20 blur-[120px]" />
          <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-accent/15 blur-[120px]" />

          <div className="relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionLabel>Contact</SectionLabel>
              <h2 className="mt-4 text-4xl font-bold md:text-5xl">
                Let's build something <span className="text-gradient">meaningful</span>.
              </h2>
              <p className="mt-4 text-muted-foreground">
                Whether it's a project, role, or collaboration — I'd love to hear from you.
              </p>

              <div className="mt-10 space-y-4">
                <ContactRow icon={Mail} label="Email" value="sanya.verm07@gmail.com" href="mailto:sanya.verm07@gmail.com" />
                <ContactRow icon={Phone} label="Phone" value="+91 89570 19854" href="tel:+918957019854" />
                <ContactRow icon={Linkedin} label="LinkedIn" value="linkedin.com/in/sanya-verma" href="https://www.linkedin.com/in/sanya-verma-b76380221" />
                <ContactRow icon={MapPin} label="Location" value="Chandigarh, India" />
              </div>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="glass rounded-2xl p-6 md:p-8">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" id="name" name="from_name" />
                <Field label="Email" id="email" name="from_email" type="email" />
              </div>
              <div className="mt-4">
                <Field label="Subject" id="subject" name="subject" />
              </div>
              <div className="mt-4">
                <label htmlFor="message" className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary/60 focus:bg-white/10 focus:ring-2 focus:ring-primary/30"
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                disabled={status === "sending"}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-glow transition-transform hover:scale-[1.02] disabled:opacity-70"
              >
                {buttonLabel ?? (<>Send Message <Send className="h-4 w-4" /></>)}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon, label, value, href,
}: { icon: React.ComponentType<{ className?: string }>; label: string; value: string; href?: string }) {
  const content = (
    <div className="glass group flex items-center gap-4 rounded-xl p-4 transition-all hover:border-primary/40">
      <div className="grid h-11 w-11 place-items-center rounded-lg bg-gradient-primary text-primary-foreground shadow-glow">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0">
        <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="truncate text-sm font-medium">{value}</div>
      </div>
    </div>
  );
  return href ? (<a href={href} target="_blank" rel="noreferrer">{content}</a>) : content;
}

function Field({ label, id, name, type = "text" }: { label: string; id: string; name: string; type?: string }) {
  return (
    <div>
      <label htmlFor={id} className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required
        className="mt-2 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/60 focus:border-primary/60 focus:bg-white/10 focus:ring-2 focus:ring-primary/30"
        placeholder={label}
      />
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 text-sm text-muted-foreground md:flex-row">
        <div>© {new Date().getFullYear()} Sanya Verma. Crafted with care.</div>
        <div className="flex items-center gap-3">
          <a href="https://www.linkedin.com/in/sanya-verma-b76380221" target="_blank" rel="noreferrer" className="glass grid h-9 w-9 place-items-center rounded-lg transition-colors hover:text-primary">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="mailto:sanya.verm07@gmail.com" className="glass grid h-9 w-9 place-items-center rounded-lg transition-colors hover:text-primary">
            <Mail className="h-4 w-4" />
          </a>
          <a href="#" className="glass grid h-9 w-9 place-items-center rounded-lg transition-colors hover:text-primary">
            <Github className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
