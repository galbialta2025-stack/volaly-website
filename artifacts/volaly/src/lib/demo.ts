export const DEMO_EVENT = "volaly:open-demo";

export function openDemo() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(DEMO_EVENT));
  }
}
