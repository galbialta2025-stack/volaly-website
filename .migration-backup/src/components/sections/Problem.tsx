import { EyeOff, Clock, TrendingDown } from "lucide-react";
import { SectionHeading } from "./shared";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";

const problems = [
  { icon: EyeOff, title: "You're invisible online", desc: "Customers can't find you on Google, social media or maps — so they choose a competitor instead.", stat: "70%", label: "search before they buy" },
  { icon: Clock, title: "Enquiries go unanswered", desc: "Messages on LINE, WhatsApp and Instagram pile up. Slow replies mean lost bookings.", stat: "5 min", label: "and the lead is gone" },
  { icon: TrendingDown, title: "Marketing eats your time", desc: "Posting content, chasing leads and managing reviews is manual, inconsistent and exhausting.", stat: "15h", label: "wasted every week" },
];

export function Problem() {
  return (
    <section className="relative overflow-hidden bg-[oklch(0.16_0.03_265)] py-28 text-white noise">
      <div className="bg-mesh-soft pointer-events-none absolute inset-0 opacity-70" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
            The Problem
          </span>
          <Reveal delay={0.05}>
            <h2 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Great businesses lose customers <span className="gradient-text-multi">they never even see.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 max-w-xl text-lg text-white/60">
              Being good isn't enough if people can't find you and you can't reply fast enough.
            </p>
          </Reveal>
        </div>
        <Stagger className="mt-16 grid gap-6 md:grid-cols-3">
          {problems.map((p) => (
            <StaggerItem
              key={p.title}
              className="group relative overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.04] p-8 backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:bg-white/[0.07]"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-pink/15 text-brand-pink">
                <p.icon className="h-6 w-6" />
              </div>
              <div className="mt-6 text-4xl font-extrabold gradient-text-multi">{p.stat}</div>
              <div className="text-xs uppercase tracking-wider text-white/40">{p.label}</div>
              <h3 className="mt-5 text-lg font-bold">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/55">{p.desc}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
