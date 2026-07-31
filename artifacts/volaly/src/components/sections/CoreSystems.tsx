import { Check, Eye, TrendingUp } from "lucide-react";
import { useReveal } from "@/hooks/use-reveal";
import { SectionHeading } from "./shared";

const systems = [
  {
    icon: Eye,
    name: "Visibility Tools",
    accent: "blue" as const,
    description: "Automatically create and publish content that attracts new customers.",
    features: ["Smart Images", "Smart Shorts", "Smart Google Business", "Smart Reviews"],
  },
  {
    icon: TrendingUp,
    name: "Revenue System",
    accent: "green" as const,
    description: "Convert enquiries into bookings automatically.",
    features: ["Smart Chat", "Smart Book", "Smart CRM", "Smart Follow-Up"],
  },
];

export function CoreSystems() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section ref={ref} className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Two Core Systems"
          title={<>Everything you need to <span className="text-gradient">get seen and get paid</span></>}
          subtitle="Two AI systems working together — one brings customers in, the other turns them into revenue."
        />
        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {systems.map((s) => {
            const isBlue = s.accent === "blue";
            const dot = isBlue ? "bg-brand-blue" : "bg-brand-green";
            const ring = isBlue ? "text-brand-blue" : "text-brand-green";
            const glow = isBlue
              ? "hover:shadow-[var(--shadow-glow-blue)]"
              : "hover:shadow-[0_20px_50px_-15px_oklch(0.72_0.19_152_/_0.4)]";
            return (
              <div
                key={s.name}
                className={`reveal group glass rounded-3xl p-8 shadow-soft transition-all duration-300 hover:-translate-y-1.5 ${glow}`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`grid h-14 w-14 place-items-center rounded-2xl bg-background shadow-soft ${ring}`}
                  >
                    <s.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">{s.name}</h3>
                </div>
                <p className="mt-5 text-muted-foreground">{s.description}</p>
                <ul className="mt-7 space-y-3">
                  {s.features.map((f) => (
                    <li key={f} className="flex items-center gap-3">
                      <span className={`grid h-6 w-6 place-items-center rounded-full ${dot} text-white`}>
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span className="font-medium text-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}