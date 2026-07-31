import { Link } from "@tanstack/react-router";
import wordmark from "@/assets/volaly-wordmark.png.asset.json";
import logoFull from "@/assets/volaly-logo-full.png.asset.json";

export function Logo({
  className = "",
  withTagline = false,
}: {
  className?: string;
  withTagline?: boolean;
}) {
  return (
    <Link
      to="/"
      aria-label="Volaly home"
      className={`inline-flex items-center ${className}`}
    >
      <img
        src={withTagline ? logoFull.url : wordmark.url}
        alt="Volaly — More customers. Less work."
        className={
          withTagline
            ? "h-16 w-auto max-w-full object-contain sm:h-20"
            : "h-8 w-auto object-contain sm:h-9"
        }
        loading="eager"
      />
    </Link>
  );
}
