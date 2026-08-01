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
import { industryFaqs, relatedIndustries } from "@/lib/industry-faqs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function IndustryPage({ data }: { data: IndustryPageData }) {
  const others = industryPages.filter((i) => i.slug !== data.slug).slice(0, 6);
  const faqs = industryFaqs[data.slug] ?? [];
  const related = (relatedIndustries[data.slug] ?? [])
    .map((slug) => industryPages.find((p) => p.slug === slug))
    .filter(Boolean) as IndustryPageData[];

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
                  View Demo <ArrowRight className="h-4 w-4" />
                </Button>
                <Button
                  size="xl"
                  className="rounded-full border border-border/70 bg-background/70 text-foreground backdrop-blur hover:bg-background"
                  onClick={openDemo}
                >
                  <Play className="h-4 w-4" /> Book Consultation
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
            <p className="mt-3 text-xs text-muted-foreground/60">* Individual results may vary and are not guaranteed.</p>
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

      {/* FAQ */}
      {faqs.length > 0 && (
        <section id="faq" className="relative overflow-hidden py-24">
          <div className="relative mx-auto max-w-4xl px-6">
            <Reveal>
              <SectionHeading
                eyebrow="FAQ"
                title={
                  <>
                    Common questions from{" "}
                    <span className="gradient-text-multi">{data.name}</span>
                  </>
                }
                subtitle="Everything you need to know about AI visibility and automation for your business."
              />
            </Reveal>

            <Reveal delay={0.1}>
              <Accordion type="single" collapsible className="mt-10 w-full">
                {faqs.map((faq, i) => (
                  <AccordionItem
                    key={i}
                    value={`faq-${i}`}
                    className="mb-3 overflow-hidden rounded-2xl border border-border/60 bg-background/70 px-5 shadow-soft backdrop-blur last:mb-0 [&:not(:last-child)]:border-b-0"
                  >
                    <AccordionTrigger className="py-5 text-base font-semibold text-foreground hover:no-underline">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                      <p className="pb-2">{faq.a}</p>
                      {i === faqs.length - 1 && (
                        <Button
                          size="sm"
                          variant="hero"
                          className="mt-3 rounded-full"
                          onClick={openDemo}
                        >
                          See Volaly in action <ArrowRight className="h-3.5 w-3.5" />
                        </Button>
                      )}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>

            {/* Internal links to related industries */}
            {related.length > 0 && (
              <Reveal delay={0.15}>
                <div className="mt-12 rounded-[24px] border border-border/60 bg-background/50 p-6 backdrop-blur">
                  <p className="text-sm font-semibold text-foreground">
                    Also relevant for your sector:
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    {related.map((r) => (
                      <Link
                        key={r.slug}
                        to={`/${r.slug}` as "/"}
                        className="group inline-flex items-center gap-2 rounded-full border border-border/70 bg-background px-4 py-2 text-sm font-medium text-muted-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:border-brand-orange/50 hover:text-foreground hover:shadow-[var(--shadow-glow-orange)]"
                      >
                        <r.icon className="h-4 w-4 text-brand-orange" />
                        {r.name}
                        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                      </Link>
                    ))}
                  </div>
                </div>
              </Reveal>
            )}
          </div>
        </section>
      )}

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
