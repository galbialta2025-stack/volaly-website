import { type LucideIcon } from "lucide-react";
import { AuroraOrbs } from "@/components/Backdrop";
import { Eyebrow } from "./shared";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";

type EngineProps = {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  subtitle: string;
  purpose: string;
  accent: "blue" | "orange";
  items: { icon: LucideIcon; name: string; desc: string }[];
  muted?: boolean;
};

export function Engine({ id, eyebrow, title, subtitle, purpose, accent, items }: EngineProps) {
  const isBlue = accent === "blue";
  const iconColor = isBlue ? "text-brand-blue" : "text-brand-orange";
  return (
    <section id={id} className={`bg-mesh-soft relative scroll-mt-24 overflow-hidden py-28 ${isBlue ? "" : ""}`}>
      <div className="relative mx-auto max-w-7xl px-6">
        <div className={`grid items-center gap-14 lg:grid-cols-2 ${isBlue ? "" : "lg:[&>*:first-child]:order-2"}`}>
          {/* Copy + feature bento */}
          <div>
            <Reveal><Eyebrow><span className={iconColor}>{purpose}</span> · {eyebrow}</Eyebrow></Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl">
                {title}
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-lg text-lg leading-relaxed text-muted-foreground">{subtitle}</p>
            </Reveal>
            <Stagger className="mt-10 grid gap-3 sm:grid-cols-2" gap={0.06}>
              {items.map((it) => (
                <StaggerItem
                  key={it.name}
                  className="gradient-border group rounded-2xl p-4 shadow-soft transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-start gap-3">
                    <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-orange/15 to-brand-blue/15 ${iconColor}`}>
                      <it.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-sm font-bold text-foreground">{it.name}</h3>
                      <p className="mt-0.5 text-xs leading-relaxed text-muted-foreground">{it.desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          {/* Visual mockup */}
          <Reveal delay={0.15} className="relative">
            <div className="relative">
              <AuroraOrbs />
              <div className="glass-card relative rounded-[28px] p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-brand-orange/70" />
                    <span className="h-3 w-3 rounded-full bg-brand-purple/60" />
                    <span className="h-3 w-3 rounded-full bg-brand-blue/60" />
                  </div>
                  <span className="text-xs font-semibold text-muted-foreground">{purpose} dashboard</span>
                </div>
                <div className={`mt-5 rounded-2xl bg-gradient-to-br ${isBlue ? "from-brand-blue/12 to-brand-purple/12" : "from-brand-orange/12 to-brand-pink/12"} p-5`}>
                  <div className="text-xs font-medium text-muted-foreground">{eyebrow}</div>
                  <div className="mt-1 text-3xl font-extrabold gradient-text-multi">
                    {isBlue ? "+124%" : "+38%"}
                  </div>
                  <div className="mt-4 flex h-24 items-end gap-2">
                    {[40, 55, 48, 70, 62, 85, 95].map((h, i) => (
                      <div
                        key={i}
                        className={`flex-1 rounded-t-md bg-gradient-to-t ${isBlue ? "from-brand-blue/30 to-brand-blue" : "from-brand-orange/30 to-brand-orange"}`}
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>
                <div className="mt-4 space-y-2.5">
                  {items.slice(0, 3).map((it) => (
                    <div key={it.name} className="flex items-center gap-3 rounded-xl border border-border/60 bg-background/60 px-4 py-2.5">
                      <span className={`grid h-8 w-8 place-items-center rounded-lg bg-background ${iconColor}`}>
                        <it.icon className="h-4 w-4" />
                      </span>
                      <span className="text-sm font-semibold text-foreground">{it.name}</span>
                      <span className="ml-auto text-xs font-medium text-brand-green">Active</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
