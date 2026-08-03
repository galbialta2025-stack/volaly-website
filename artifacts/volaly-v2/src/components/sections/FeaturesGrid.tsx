import {
  MessageCircle, Send, CalendarCheck, MapPin, MessagesSquare,
  Phone, Users, BarChart3, Languages,
} from "lucide-react";
import { SectionHeading } from "./shared";
import { Stagger, StaggerItem } from "@/components/Motion";

const features = [
  { icon: MessageCircle, name: "24/7 AI Chat" },
  { icon: Send, name: "Automatic Posting" },
  { icon: CalendarCheck, name: "Appointment Booking" },
  { icon: MapPin, name: "Google Business" },
  { icon: MessagesSquare, name: "LINE Automation" },
  { icon: Phone, name: "WhatsApp Automation" },
  { icon: Users, name: "CRM" },
  { icon: BarChart3, name: "Analytics" },
  { icon: Languages, name: "Multi-language" },
];

export function FeaturesGrid() {
  return (
    <section id="platform" className="relative scroll-mt-24 overflow-hidden bg-[oklch(0.16_0.03_265)] py-28 text-white noise">
      <div className="bg-mesh-soft pointer-events-none absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white/70">
            Platform
          </span>
          <h2 className="mt-6 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            One platform, <span className="gradient-text-multi">every capability</span>
          </h2>
          <p className="mt-5 text-lg text-white/60">
            A complete AI toolkit to run marketing, communication and sales on autopilot.
          </p>
        </div>
        <Stagger className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5" gap={0.04}>
          {features.map((f) => (
            <StaggerItem
              key={f.name}
              className="group flex flex-col items-center gap-3 rounded-[22px] border border-white/10 bg-white/[0.04] p-6 text-center backdrop-blur transition-all duration-300 hover:-translate-y-1.5 hover:border-white/25 hover:bg-white/[0.08]"
            >
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br from-brand-orange/25 to-brand-blue/25 text-white transition-transform group-hover:scale-110">
                <f.icon className="h-6 w-6" />
              </div>
              <span className="text-sm font-semibold">{f.name}</span>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
