import { createFileRoute } from "@tanstack/react-router";
import { Sparkles, Mail, Instagram, Globe, ChevronRight } from "lucide-react";
import { FaWhatsapp, FaLine } from "react-icons/fa";
import { SEO } from "@/components/SEO";
import { Eyebrow } from "@/components/sections/shared";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";
import { useIndustryPages } from "@/lib/industries-data";

export const Route = createFileRoute("/connect")({
  component: ConnectPage,
});

/**
 * Volaly NFC business-card landing page.
 * Standalone contact hub, fixed to English (not under /$lang/), formerly
 * hosted at charming-cendol-242337.netlify.app. Still renders inside the
 * global Navbar/Footer via __root.
 */

type ContactLink = {
  key: string;
  label: string;
  sub: string;
  href: string;
  icon: React.ElementType;
  iconClassName: string;
  external: boolean;
};

const contactLinks: ContactLink[] = [
  {
    key: "view-demo",
    label: "View Demo",
    sub: "volaly.com",
    href: "/en",
    icon: Globe,
    iconClassName: "bg-foreground",
    external: false,
  },
  {
    key: "line",
    label: "LINE",
    sub: "Fast reply, TH-friendly",
    href: "https://line.me/ti/p/qhgN9UvgS5",
    icon: FaLine,
    iconClassName: "bg-[#06C755]",
    external: true,
  },
  {
    key: "whatsapp",
    label: "WhatsApp",
    sub: "Chat with us directly",
    href: "https://wa.me/qr/5HGK2VJQHAUGD1",
    icon: FaWhatsapp,
    iconClassName: "bg-[#25D366]",
    external: true,
  },
  {
    key: "email",
    label: "Email",
    sub: "info@volaly.com",
    href: "mailto:info@volaly.com",
    icon: Mail,
    iconClassName: "bg-brand-blue",
    external: false,
  },
  {
    key: "instagram",
    label: "Instagram",
    sub: "Follow along",
    href: "https://www.instagram.com/volal.y",
    icon: Instagram,
    iconClassName: "bg-gradient-to-br from-brand-orange via-brand-pink to-brand-purple",
    external: true,
  },
];

const CONNECT_INDUSTRY_SLUGS = ["bar", "restaurant"];

function ConnectPage() {
  const industryPages = useIndustryPages().filter((p) =>
    CONNECT_INDUSTRY_SLUGS.includes(p.slug),
  );

  return (
    <>
      <SEO
        title="Volaly — Connect"
        description="Reach Volaly on LINE, WhatsApp, Email or explore our industry solutions."
        canonical="https://volaly.com/connect"
      />

      <section className="bg-hero-glow pt-32 pb-28">
        <div className="mx-auto max-w-xl px-6">
          <div className="text-center">
            <Reveal>
              <Eyebrow>
                <Sparkles className="h-3.5 w-3.5 text-brand-orange" />
                Your Digital Business Card
              </Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-5xl">
                Turn One Tap
                <span className="block gradient-text-multi">into a Connection.</span>
              </h1>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mx-auto mt-5 max-w-sm text-base leading-relaxed text-muted-foreground">
                Message us on your favorite app, check out the demo, or jump straight to what Volaly builds for your industry.
              </p>
            </Reveal>
          </div>

          {/* Contact list */}
          <div className="mt-14">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Reach Us
            </p>
            <Stagger className="mt-4 flex flex-col gap-3" gap={0.06}>
              {contactLinks.map((c) => (
                <StaggerItem key={c.key}>
                  <a
                    href={c.href}
                    target={c.external ? "_blank" : undefined}
                    rel={c.external ? "noopener noreferrer" : undefined}
                    className="gradient-border flex items-center gap-4 rounded-[22px] p-4 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow-orange)]"
                  >
                    <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl text-white ${c.iconClassName}`}>
                      <c.icon className="h-5 w-5" />
                    </span>
                    <div className="min-w-0 flex-1">
                      <div className="text-sm font-bold text-foreground">{c.label}</div>
                      <div className="truncate text-xs text-muted-foreground">{c.sub}</div>
                    </div>
                    <ChevronRight className="h-4 w-4 shrink-0 text-muted-foreground/50" />
                  </a>
                </StaggerItem>
              ))}
            </Stagger>
          </div>

          {/* Industries */}
          <div className="mt-12">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Explore by Industry
            </p>
            <Stagger className="mt-4 grid grid-cols-2 gap-3" gap={0.08}>
              {industryPages.map((ind) => (
                <StaggerItem key={ind.slug}>
                  <a
                    href={`/en/${ind.slug}`}
                    className="gradient-border flex flex-col items-center gap-2.5 rounded-[20px] p-5 text-center shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow-orange)]"
                  >
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br from-brand-orange/15 to-brand-blue/15 text-brand-orange">
                      <ind.icon className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-bold text-foreground">{ind.name}</span>
                  </a>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>
    </>
  );
}
