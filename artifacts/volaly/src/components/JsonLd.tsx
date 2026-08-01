import { useEffect, useRef } from "react";

/**
 * Injects a JSON-LD <script> into <head> and removes it on unmount.
 * Safe to use multiple times on the same page — each instance is independent.
 */
export function JsonLd({ schema }: { schema: object | object[] }) {
  const ref = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.textContent = JSON.stringify(schema);
    document.head.appendChild(script);
    ref.current = script;

    return () => {
      ref.current?.remove();
      ref.current = null;
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return null;
}
