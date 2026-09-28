import type { PointerEvent, ReactNode } from "react";

/** Container whose cards get a soft glow that follows the pointer (CSS vars --x/--y). */
export function Spotlight({ className, children }: { className: string; children: ReactNode }) {
  const onMove = (e: PointerEvent<HTMLDivElement>) => {
    for (const card of e.currentTarget.querySelectorAll<HTMLElement>(".glass")) {
      const r = card.getBoundingClientRect();
      card.style.setProperty("--x", `${e.clientX - r.left}px`);
      card.style.setProperty("--y", `${e.clientY - r.top}px`);
    }
  };
  return (
    <div className={className} onPointerMove={onMove}>
      {children}
    </div>
  );
}
