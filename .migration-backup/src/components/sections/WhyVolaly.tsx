import { Zap, Globe, ShieldCheck, LineChart } from "lucide-react";
import { SectionHeading } from "./shared";
import { Stagger, StaggerItem, Reveal } from "@/components/Motion";

const reasons = [
  { icon: Zap, title: "Live in days, not months", desc: "We set up and train your AI systems for you. No technical work required." },
  { icon: Globe, title: "Global & multilingual", desc: "Serve customers in any language across every channel they use." },
  { icon: ShieldCheck, title: "Enterprise-grade & secure", desc: "Reliable automation you can trust, built to scale with your business." },
  { icon: LineChart, title: "Measurable growth", desc: "Track visibility, enquiries and revenue in one clear dashboard." },
];

const stats = [
  { value: "10+", label: "AI systems working for you" },
  { value: "24/7", label: "Instant customer replies" },
  { value: "6+", label: "Channels automated" },
  { value: "38%", label: "Average revenue lift" },
];

export function WhyVolaly() {
  return (
    <section id="why" className="bg-dots relative scroll-mt-24 overflow-hidden py-28">
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Why Volaly"
          title={<>One platform built to <span className="gradient-text-multi">grow revenue</span></>}
          subtitle="Everything works together, so visibility turns into customers and customers turn into revenue."
        />

        <Reveal delay={0.1} className="mt-14">
          <div className="grid gap-4 rounded-[28px] gradient-border p-6 shadow-soft sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="rounded-2xl bg-gradient-to-br from-brand-orange/8 to-brand-blue/8 px-6 py-7 text-center">
                <div className="text-4xl font-extrabold gradient-text-multi">{s.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>

        <Stagger className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4" gap={0.06}>
          {reasons.map((r) => (
            <StaggerItem
              key={r.title}
              className="glass-card rounded-[24px] p-7 transition-all duration-300 hover:-translate-y-1.5"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-orange to-brand-blue text-white shadow-soft">
                <r.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-foreground">{r.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{r.desc}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
