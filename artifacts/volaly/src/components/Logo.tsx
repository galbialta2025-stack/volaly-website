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
        src={withTagline ? "/volaly-logo.png" : "/volaly-logo.png"}
        alt="Volaly — More customers. Less work."
        className={
          withTagline
            ? "h-20 w-auto max-w-full object-contain sm:h-24"
            : "h-[52px] w-auto object-contain"
        }
        loading="eager"
      />
    </Link>
  );
}
