import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Mail, MessageCircle, CheckCircle, Send, Clock, Globe } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { SEO } from "@/components/SEO";
import { JsonLd } from "@/components/JsonLd";
import { Button } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

const WEBHOOK_URL = import.meta.env.VITE_N8N_CHAT_WEBHOOK as string | undefined;

const infoCards = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@thaisolutions.ai",
    href: "mailto:hello@thaisolutions.ai",
    accent: "text-brand-orange",
  },
  {
    icon: Clock,
    title: "Response time",
    value: "Within 24 hours",
    href: null,
    accent: "text-brand-blue",
  },
  {
    icon: Globe,
    title: "Languages",
    value: "English · Deutsch · ภาษาไทย",
    href: null,
    accent: "text-brand-purple",
  },
  {
    icon: MessageCircle,
    title: "Live Chat",
    value: "Chat with Volaly AI now",
    href: null,
    accent: "text-brand-orange",
    action: true,
  },
];

const contactSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact — Volaly",
  url: "https://volaly.com/contact",
  description:
    "Contact the Volaly team. We respond within 24 hours in English, German or Thai.",
  publisher: { "@id": "https://volaly.com/#organization" },
};

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  function set(field: keyof typeof form) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
      setForm((f) => ({ ...f, [field]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setStatus("sending");

    try {
      if (WEBHOOK_URL) {
        const res = await fetch(WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            message: `Contact form from ${form.name} (${form.email}):\n\nSubject: ${form.subject}\n\n${form.message}`,
            sessionId: `contact-${Date.now()}`,
            source: "contact-form",
            name: form.name,
            email: form.email,
            subject: form.subject,
          }),
        });
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
      } else {
        // Fallback: small delay to simulate sending
        await new Promise((r) => setTimeout(r, 1000));
      }
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full rounded-xl border border-border/70 bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground backdrop-blur outline-none transition focus:border-brand-orange/60 focus:ring-2 focus:ring-brand-orange/20";

  return (
    <>
      <SEO
        title="Contact — Volaly"
        description="Get in touch with the Volaly team. Questions, demo requests or partnership enquiries — we respond within 24 hours in English, German or Thai."
        canonical="https://volaly.com/contact"
      />
      <JsonLd schema={contactSchema} />

      <PageHeader
        eyebrow="Contact"
        title="Get in touch"
        subtitle="Questions, demo requests or partnership enquiries — write to us and we'll get back to you within 24 hours."
      />

      <section className="pb-28 pt-4">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_380px]">

            {/* ── Contact form ── */}
            <Reveal>
              <div className="gradient-border rounded-[28px] p-8 shadow-soft">
                {status === "success" ? (
                  <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
                    <span className="grid h-16 w-16 place-items-center rounded-full bg-gradient-to-br from-brand-orange/20 to-brand-blue/20">
                      <CheckCircle className="h-8 w-8 text-brand-orange" />
                    </span>
                    <h2 className="text-xl font-bold text-foreground">Message sent!</h2>
                    <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                      Thanks for reaching out. We'll get back to you within 24 hours.
                    </p>
                    <Button
                      variant="hero"
                      className="mt-2 rounded-full"
                      onClick={() => {
                        setForm({ name: "", email: "", subject: "", message: "" });
                        setStatus("idle");
                      }}
                    >
                      Send another message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-foreground" htmlFor="name">
                          Name <span className="text-brand-orange">*</span>
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          placeholder="Jane Smith"
                          className={inputClass}
                          value={form.name}
                          onChange={set("name")}
                          disabled={status === "sending"}
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-foreground" htmlFor="email">
                          Email <span className="text-brand-orange">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          placeholder="jane@example.com"
                          className={inputClass}
                          value={form.email}
                          onChange={set("email")}
                          disabled={status === "sending"}
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground" htmlFor="subject">
                        Subject
                      </label>
                      <select
                        id="subject"
                        className={inputClass}
                        value={form.subject}
                        onChange={set("subject")}
                        disabled={status === "sending"}
                      >
                        <option value="">Please select…</option>
                        <option value="Book a demo">Book a demo</option>
                        <option value="Pricing & packages">Pricing & packages</option>
                        <option value="Technical support">Technical support</option>
                        <option value="Partnership">Partnership</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground" htmlFor="message">
                        Message <span className="text-brand-orange">*</span>
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        placeholder="Tell us about your business and how we can help…"
                        className={`${inputClass} resize-none`}
                        value={form.message}
                        onChange={set("message")}
                        disabled={status === "sending"}
                      />
                    </div>

                    {status === "error" && (
                      <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                        Something went wrong. Please try again or email us directly.
                      </p>
                    )}

                    <Button
                      type="submit"
                      variant="hero"
                      size="lg"
                      className="w-full rounded-full"
                      disabled={status === "sending" || !form.name || !form.email || !form.message}
                    >
                      {status === "sending" ? (
                        "Sending…"
                      ) : (
                        <>
                          Send message <Send className="h-4 w-4" />
                        </>
                      )}
                    </Button>
                    <p className="text-center text-xs text-muted-foreground/60">
                      By submitting you agree to our{" "}
                      <a href="/privacy" className="underline hover:text-foreground">Privacy Policy</a>.
                    </p>
                  </form>
                )}
              </div>
            </Reveal>

            {/* ── Info cards ── */}
            <Stagger className="flex flex-col gap-4" gap={0.07}>
              {infoCards.map((card) => (
                <StaggerItem key={card.title}>
                  {card.href ? (
                    <a
                      href={card.href}
                      className="gradient-border flex items-start gap-4 rounded-[22px] p-5 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow-orange)]"
                    >
                      <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-orange/15 to-brand-blue/15 ${card.accent}`}>
                        <card.icon className="h-5 w-5" />
                      </span>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          {card.title}
                        </div>
                        <div className="mt-1 text-sm font-medium text-foreground">{card.value}</div>
                      </div>
                    </a>
                  ) : card.action ? (
                    <button
                      type="button"
                      onClick={() => {
                        // Trigger the chat bubble in the navbar
                        const bubble = document.querySelector<HTMLButtonElement>(
                          'button[aria-label="Chat with Volaly AI"]',
                        );
                        bubble?.click();
                      }}
                      className="gradient-border flex w-full items-start gap-4 rounded-[22px] p-5 shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-glow-orange)]"
                    >
                      <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-orange/15 to-brand-blue/15 ${card.accent}`}>
                        <card.icon className="h-5 w-5" />
                      </span>
                      <div className="text-left">
                        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          {card.title}
                        </div>
                        <div className="mt-1 text-sm font-medium text-foreground">{card.value}</div>
                      </div>
                    </button>
                  ) : (
                    <div className="gradient-border flex items-start gap-4 rounded-[22px] p-5 shadow-soft">
                      <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-orange/15 to-brand-blue/15 ${card.accent}`}>
                        <card.icon className="h-5 w-5" />
                      </span>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          {card.title}
                        </div>
                        <div className="mt-1 text-sm font-medium text-foreground">{card.value}</div>
                      </div>
                    </div>
                  )}
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>
    </>
  );
}
