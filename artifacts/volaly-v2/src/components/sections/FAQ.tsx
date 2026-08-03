import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "./shared";
import { Reveal } from "@/components/Motion";
import { faqs } from "@/lib/faq-data";

/** JSON-LD FAQ schema for Google rich results */
function FaqSchema() {
  const items = faqs.map((f) => ({
    "@type": "Question",
    name: typeof f.q === "string" ? f.q : "",
    acceptedAnswer: {
      "@type": "Answer",
      // Strip JSX to plain text for schema — use the question as a fallback
      text: typeof f.a === "string" ? f.a : String(f.q),
    },
  }));

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: items,
        }),
      }}
    />
  );
}

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-mesh-soft relative scroll-mt-24 overflow-hidden py-28">
      <FaqSchema />
      <div className="relative mx-auto max-w-3xl px-6">
        <SectionHeading
          eyebrow="FAQ"
          title={<>Frequently asked <span className="gradient-text-multi">questions</span></>}
          subtitle="Everything you need to know about how Volaly grows your business."
        />
        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={String(f.q)} delay={i * 0.04}>
                <div
                  className={`overflow-hidden rounded-[20px] border transition-colors ${
                    isOpen ? "gradient-border" : "border-border/70 bg-background/70"
                  } backdrop-blur shadow-soft`}
                >
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-base font-semibold text-foreground">{f.q}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-brand-orange transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
