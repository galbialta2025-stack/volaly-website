import { Database, Cpu, Megaphone, MessageSquare, CalendarCheck, LineChart } from "lucide-react";
import { SectionHeading } from "./shared";
import { Stagger, StaggerItem } from "@/components/Motion";

const steps = [
  { icon: Database, title: "Business Information", desc: "We connect your business details, brand and channels." },
  { icon: Cpu, title: "AI Setup", desc: "Your AI systems are trained and configured for you." },
  { icon: Megaphone, title: "Automatic Marketing", desc: "Content is created and published across platforms." },
  { icon: MessageSquare, title: "Customer Enquiry", desc: "AI replies instantly on LINE, WhatsApp and more." },
  { icon: CalendarCheck, title: "Booking", desc: "Enquiries convert into confirmed bookings automatically." },
  { icon: LineChart, title: "Revenue Growth", desc: "More visibility and conversions grow your revenue." },
];

export function Workflow() {
  return (
    <section id="how-it-works" className="bg-dots relative scroll-mt-24 overflow-hidden py-28">
      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="How It Works"
          title={<>From setup to revenue, <span className="gradient-text-multi">fully automated</span></>}
          subtitle="A simple, hands-off workflow that runs around the clock."
        />
        <div className="relative mt-20">
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-brand-orange via-brand-purple to-brand-blue md:block" />
          <Stagger className="space-y-6 md:space-y-2">
            {steps.map((s, i) => (
              <StaggerItem
                key={s.title}
                className={`relative flex items-center gap-6 md:w-1/2 ${
                  i % 2 === 0 ? "md:pr-14" : "md:ml-auto md:flex-row-reverse md:pl-14"
                }`}
              >
                <div className="relative z-10 grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-brand-orange to-brand-blue text-white shadow-[var(--shadow-glow-blue)]">
                  <s.icon className="h-6 w-6" />
                </div>
                <div className={`glass-card flex-1 rounded-2xl p-5 ${i % 2 === 0 ? "" : "md:text-right"}`}>
                  <div className="text-xs font-semibold uppercase tracking-wider text-brand-orange">Step {i + 1}</div>
                  <h3 className="mt-1 text-lg font-bold text-foreground">{s.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </div>
    </section>
  );
}
