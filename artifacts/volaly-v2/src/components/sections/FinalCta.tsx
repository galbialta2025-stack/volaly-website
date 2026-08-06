import { Play, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AuroraOrbs } from "@/components/Backdrop";
import { Reveal } from "@/components/Motion";
import { openDemo } from "@/lib/demo";

export function FinalCta() {
  return (
    <section className="px-4 py-28 sm:px-6">
      <Reveal>
        <div className="noise relative mx-auto max-w-6xl overflow-hidden rounded-[36px] bg-[oklch(0.16_0.03_265)] px-8 py-24 text-center">
          <AuroraOrbs />
          <div className="bg-grid pointer-events-none absolute inset-0 opacity-20 [mask-image:radial-gradient(60%_60%_at_50%_50%,black,transparent)]" />
          <div className="relative">
            <h2 className="text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
              Turn visibility into <span className="gradient-text-multi">revenue.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">
              Book a demo and see how Volaly grows your business on autopilot.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              <Button size="xl" variant="hero" className="rounded-full" onClick={openDemo}>
                View Demo <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
