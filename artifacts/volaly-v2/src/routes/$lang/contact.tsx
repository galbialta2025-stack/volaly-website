import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Mail, MessageCircle, CheckCircle, Send, Clock, Globe } from "lucide-react";
import { PageHeader } from "@/components/sections/PageHeader";
import { SEO } from "@/components/SEO";
import { JsonLd } from "@/components/JsonLd";
import { Button } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/Motion";

export const Route = createFileRoute("/$lang/contact")({
  component: ContactPage,
});

const WEBHOOK_URL = import.meta.env.VITE_N8N_CHAT_WEBHOOK as string | undefined;

type InfoCardMeta = {
  key: string;
  icon: typeof Mail;
  href: string | null;
  accent: string;
  action?: boolean;
};

const infoCardMeta: InfoCardMeta[] = [
  { key: "email", icon: Mail, href: "mailto:info@volaly.com", accent: "text-brand-orange" },
  { key: "responseTime", icon: Clock, href: null, accent: "text-brand-blue" },
  { key: "languages", icon: Globe, href: null, accent: "text-brand-purple" },
  { key: "liveChat", icon: MessageCircle, href: null, accent: "text-brand-orange", action: true },
];

function ContactPage() {
  const { lang } = Route.useParams();
  const { t } = useTranslation("contact");
  const info = t("info", { returnObjects: true }) as Record<string, { title: string; value: string }>;
  const subjectOptions = t("form.subjectOptions", { returnObjects: true }) as Record<string, string>;

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: t("seo.title"),
    url: `https://volaly.com/${lang}/contact`,
    description: t("seo.description"),
    publisher: { "@id": "https://volaly.com/#organization" },
  };
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
            replyTo: form.email,
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
        title={t("seo.title")}
        description={t("seo.description")}
        canonical={`https://volaly.com/${lang}/contact`}
      />
      <JsonLd schema={contactSchema} />

      <PageHeader
        eyebrow={t("header.eyebrow")}
        title={t("header.title")}
        subtitle={t("header.subtitle")}
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
                    <h2 className="text-xl font-bold text-foreground">{t("form.successTitle")}</h2>
                    <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
                      {t("form.successBody")}
                    </p>
                    <Button
                      variant="hero"
                      className="mt-2 rounded-full"
                      onClick={() => {
                        setForm({ name: "", email: "", subject: "", message: "" });
                        setStatus("idle");
                      }}
                    >
                      {t("form.sendAnother")}
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-foreground" htmlFor="name">
                          {t("form.nameLabel")} <span className="text-brand-orange">*</span>
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          placeholder={t("form.namePlaceholder")}
                          className={inputClass}
                          value={form.name}
                          onChange={set("name")}
                          disabled={status === "sending"}
                        />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-xs font-semibold text-foreground" htmlFor="email">
                          {t("form.emailLabel")} <span className="text-brand-orange">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          placeholder={t("form.emailPlaceholder")}
                          className={inputClass}
                          value={form.email}
                          onChange={set("email")}
                          disabled={status === "sending"}
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground" htmlFor="subject">
                        {t("form.subjectLabel")}
                      </label>
                      <select
                        id="subject"
                        className={inputClass}
                        value={form.subject}
                        onChange={set("subject")}
                        disabled={status === "sending"}
                      >
                        <option value="">{t("form.subjectPlaceholder")}</option>
                        {Object.entries(subjectOptions).map(([key, label]) => (
                          <option key={key} value={label}>{label}</option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-foreground" htmlFor="message">
                        {t("form.messageLabel")} <span className="text-brand-orange">*</span>
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        placeholder={t("form.messagePlaceholder")}
                        className={`${inputClass} resize-none`}
                        value={form.message}
                        onChange={set("message")}
                        disabled={status === "sending"}
                      />
                    </div>

                    {status === "error" && (
                      <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
                        {t("form.errorMessage")}
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
                        t("form.sending")
                      ) : (
                        <>
                          {t("form.send")} <Send className="h-4 w-4" />
                        </>
                      )}
                    </Button>
                    <p className="text-center text-xs text-muted-foreground/60">
                      {t("form.agreementPre")}
                      <Link to="/$lang/privacy" params={{ lang }} className="underline hover:text-foreground">{t("form.privacyLink")}</Link>.
                    </p>
                  </form>
                )}
              </div>
            </Reveal>

            {/* ── Info cards ── */}
            <Stagger className="flex flex-col gap-4" gap={0.07}>
              {infoCardMeta.map((card) => {
                const content = info[card.key];
                return (
                  <StaggerItem key={card.key}>
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
                            {content.title}
                          </div>
                          <div className="mt-1 text-sm font-medium text-foreground">{content.value}</div>
                        </div>
                      </a>
                    ) : card.action ? (
                      <button
                        type="button"
                        onClick={() => {
                          // Trigger the chat bubble in the navbar
                          const bubble = document.querySelector<HTMLButtonElement>(
                            "button[data-chat-toggle]",
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
                            {content.title}
                          </div>
                          <div className="mt-1 text-sm font-medium text-foreground">{content.value}</div>
                        </div>
                      </button>
                    ) : (
                      <div className="gradient-border flex items-start gap-4 rounded-[22px] p-5 shadow-soft">
                        <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-orange/15 to-brand-blue/15 ${card.accent}`}>
                          <card.icon className="h-5 w-5" />
                        </span>
                        <div>
                          <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                            {content.title}
                          </div>
                          <div className="mt-1 text-sm font-medium text-foreground">{content.value}</div>
                        </div>
                      </div>
                    )}
                  </StaggerItem>
                );
              })}
            </Stagger>
          </div>
        </div>
      </section>
    </>
  );
}
