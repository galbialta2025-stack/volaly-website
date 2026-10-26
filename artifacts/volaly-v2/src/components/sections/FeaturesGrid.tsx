import {
  Send, MapPin, MessagesSquare,
  Phone, BarChart3, Languages,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import { Stagger, StaggerItem } from "@/components/Motion";

const featureMeta = [
  { key: "posting", icon: Send },
  { key: "googleBusiness", icon: MapPin },
  { key: "line", icon: MessagesSquare },
  { key: "whatsapp", icon: Phone },
  { key: "analytics", icon: BarChart3 },
  { key: "multilang", icon: Languages },
];

export function FeaturesGrid() {
  const { t } = useTranslation("home");
  const items = t("features.items", { returnObjects: true }) as Record<string, string>;

  return (
    <section id="platform" className="relative scroll-mt-24 overflow-hidden bg-[oklch(0.16_0.03_265)] py-28 text-white noise">
      <div className="bg-mesh-soft pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
            {t("features.eyebrow")}
          </span>
          <h2 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            {t("features.titlePre")}<span className="gradient-text-multi">{t("features.titleHighlight")}</span>
          </h2>
          <p className="mt-5 text-lg text-white/60">
            {t("features.subtitle")}
          </p>
        </div>
        <Stagger className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5" gap={0.04}>
          {featureMeta.map((f) => (
            <StaggerItem
              key={f.key}
              className="group flex flex-col items-center gap-3 rounded-[22px] border border-white/10 bg-white/[0.04] p-6 text-center backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-white/25 hover:bg-white/[0.08]"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-orange/25 to-brand-blue/25 text-white transition-transform group-hover:scale-110">
                <f.icon className="h-6 w-6" />
              </div>
              <span className="text-sm font-semibold">{items[f.key]}</span>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
