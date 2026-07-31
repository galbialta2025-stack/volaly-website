import { Link } from "@tanstack/react-router";

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
        src={withTagline ? "/volaly-logo-full.svg" : "/volaly-wordmark.svg"}
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
