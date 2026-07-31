type OrbProps = { className?: string; color: string; delay?: string };

function Orb({ className = "", color, delay = "0s" }: OrbProps) {
  return (
    <div
      aria-hidden
      className={`animate-orb pointer-events-none absolute rounded-full blur-3xl ${className}`}
      style={{ background: color, animationDelay: delay }}
    />
  );
}

export function AuroraOrbs() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <Orb className="left-[-8%] top-[-10%] h-80 w-80 opacity-60" color="var(--brand-orange)" />
      <Orb className="right-[-6%] top-[6%] h-72 w-72 opacity-50" color="var(--brand-purple)" delay="4s" />
      <Orb className="bottom-[-12%] left-[35%] h-96 w-96 opacity-40" color="var(--brand-blue)" delay="8s" />
      <Orb className="right-[18%] bottom-[4%] h-64 w-64 opacity-40" color="var(--brand-pink)" delay="2s" />
    </div>
  );
}
