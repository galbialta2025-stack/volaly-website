import { Link } from "@tanstack/react-router";
import { useCurrentLocale } from "@/hooks/use-locale";

export function Logo({
  className = "",
  withTagline = false,
}: {
  className?: string;
  withTagline?: boolean;
}) {
  const locale = useCurrentLocale();
  return (
    <Link
      to="/$lang"
      params={{ lang: locale }}
      aria-label="Volaly home"
      className={`inline-flex items-center ${className}`}
    >
      <img
        src="/volaly-logo-v2.png"
        alt="Volaly AI"
        className={
          withTagline
            ? "h-[72px] w-auto max-w-full object-contain sm:h-[86px]"
            : "h-[47px] w-auto object-contain"
        }
        loading="eager"
      />
    </Link>
  );
}
