import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Play, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AuroraOrbs } from "@/components/Backdrop";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { VideoEmbed } from "@/components/VideoEmbed";
import { Eyebrow, SectionHeading } from "./shared";
import { FinalCta } from "./FinalCta";
import { openDemo } from "@/lib/demo";
import { industryPages, type IndustryPageData } from "@/lib/industries-data";

export function IndustryPage({ data }: { data: IndustryPageData }) {
  const others = industryPages.filter((i) => i.slug !== data.slug).slice(0, 6);

  return (
    <>
      {/* Hero */}
      <section className="bg-hero-glow relative overflow-hidden pt-32">
        <AuroraOrbs />
        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 pb-20 pt-10 lg:grid-cols-2">
          <div>
            <Reveal>
              <Eyebrow>
                <data.icon className="h-3.5 w-3.5 text-brand-orange" /> {data.eyebrow}
              </Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl">
                {data.headline} <span className="gradient-text-multi">{data.highlight}</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
                {data.subtitle}
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="mt-9 flex flex-wrap gap-4">
                <Button size="xl" variant="hero" className="rounded-full" onClick={openDemo}>
                  Book Demo <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  size="xl"
                  className="rounded-full border border-border/70 bg-background/70 text-foreground backdrop-blur hover:bg-background"
                  onClick={openDemo}
                >
                  <Play className="h-4 w-4" /> Talk to us
                </Button>
              </div>
            </Reveal>
            <Stagger className="mt-12 grid gap-4 sm:grid-cols-3" gap={0.06}>
              {data.stats.map((s) => (
                <StaggerItem key={s.label} className="gradient-border rounded-2xl px-5 py-4 shadow-soft">
                  <div className="text-2xl font-extrabold gradient-text-multi">{s.value}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          {/* Embedded video player */}
          <Reveal delay={0.2}>
            <VideoEmbed url={data.videoUrl} title={data.videoTitle} />
          </Reveal>
        </div>
      </section>

      {/* Pains */}
      <section className="bg-mesh-soft relative overflow-hidden py-24">
        <div className="relative mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="The problem"
            title={<>What slows <span className="gradient-text-multi">{data.name}</span> down</>}
          />
          <Stagger className="mt-12 grid gap-4 md:grid-cols-3" gap={0.06}>
            {data.pains.map((p) => (
              <StaggerItem
                key={p}
                className="rounded-[24px] border border-border/70 bg-background/70 p-6 shadow-soft backdrop-blur"
              >
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-brand-red/10 text-brand-red">
                  <X className="h-5 w-5" />
                </span>
                <p className="mt-4 text-base font-medium leading-relaxed text-foreground">{p}</p>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Solutions */}
      <section className="bg-dots relative overflow-hidden py-24">
        <div className="relative mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="The Volaly system"
            title={<>How Volaly <span className="gradient-text-multi">grows your business</span></>}
            subtitle="Visibility, communication and revenue — automated end to end."
          />
          <Stagger className="mt-12 grid gap-4 sm:grid-cols-2" gap={0.06}>
            {data.solutions.map((s) => (
              <StaggerItem
                key={s.title}
                className="gradient-border rounded-[24px] p-6 shadow-soft transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-orange/15 to-brand-blue/15 text-brand-blue">
                    <Check className="h-5 w-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-foreground">{s.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Other industries */}
      <section className="bg-mesh-soft relative overflow-hidden py-24">
        <div className="relative mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="More industries" title={<>Also built for <span className="gradient-text-multi">your world</span></>} />
          <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" gap={0.05}>
            {others.map((o) => (
              <StaggerItem key={o.slug}>
                <Link
                  to={`/${o.slug}` as "/"}
                  className="group flex items-center gap-4 rounded-[22px] border border-border/70 bg-background/70 p-5 shadow-soft backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-glow-orange)]"
                >
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-orange/15 to-brand-purple/15 text-brand-orange">
                    <o.icon className="h-5 w-5" />
                  </span>
                  <span className="text-sm font-semibold text-foreground">{o.name}</span>
                  <ArrowRight className="ml-auto h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1" />
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
