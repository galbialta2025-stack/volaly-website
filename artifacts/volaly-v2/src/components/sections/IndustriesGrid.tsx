import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { industryPages } from "@/lib/industries-data";
import { SectionHeading } from "./shared";
import { Stagger, StaggerItem } from "@/components/Motion";

export function IndustriesGrid() {
  return (
    <section id="industries" className="bg-mesh-soft relative scroll-mt-24 overflow-hidden py-28">
      <div className="relative mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Industries"
          title={<>Built for <span className="gradient-text-multi">your business</span></>}
          subtitle="Tailored AI systems for the industries that rely on visibility and bookings."
        />
        <Stagger className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2" gap={0.05}>
          {industryPages.map((ind) => (
            <StaggerItem key={ind.slug}>
              <Link
                to={`/${ind.slug}` as "/"}
                className="group relative flex h-full min-h-44 flex-col justify-between overflow-hidden rounded-[24px] border border-border/70 bg-background/70 p-6 shadow-soft backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-glow-orange)]"
              >
              <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br from-brand-orange/20 to-brand-blue/20 blur-2xl transition-opacity duration-300 group-hover:opacity-100 opacity-60" />
              <div className="relative grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-orange/15 to-brand-purple/15 text-brand-orange">
                <ind.icon className="h-6 w-6" />
              </div>
              <div className="relative mt-6">
                <h3 className="text-lg font-bold text-foreground">{ind.name}</h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{ind.subtitle}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-orange">
                  Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
