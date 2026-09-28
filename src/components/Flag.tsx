import { useId } from "react";
import type { Lang } from "../i18n/dict";

/** Inline SVG flags (emoji flags don't render on Windows). PT = Angola, EN = United Kingdom. */
export function Flag({ lang }: { lang: Lang }) {
  const clip = useId();
  if (lang === "pt") {
    return (
      <svg className="flag" viewBox="0 0 30 20" aria-hidden="true">
        <rect width="30" height="10" fill="#cc092f" />
        <rect y="10" width="30" height="10" fill="#000" />
        {/* Simplified emblem: half cog wheel, machete and star. */}
        <g fill="none" stroke="#ffcb00" strokeLinecap="round">
          <path d="M15.4 5.2a4.9 4.9 0 1 1-4.6 7.6" strokeWidth="1.4" strokeDasharray="1.1 0.5" />
          <path d="M11.6 13.6l6.2-6.4" strokeWidth="1.2" />
        </g>
        <path fill="#ffcb00" d="M13.1 7.1l.45 1.05 1.13.1-.86.74.26 1.1-.98-.58-.98.58.26-1.1-.86-.74 1.13-.1z" />
      </svg>
    );
  }
  return (
    <svg className="flag" viewBox="0 0 60 40" aria-hidden="true">
      <clipPath id={clip}>
        <path d="M30 20h30v20zv20H0zH0V0zV0h30z" />
      </clipPath>
      <rect width="60" height="40" fill="#012169" />
      <path d="M0 0l60 40m0-40L0 40" stroke="#fff" strokeWidth="8" />
      <path d="M0 0l60 40m0-40L0 40" clipPath={`url(#${clip})`} stroke="#c8102e" strokeWidth="4" />
      <path d="M30 0v40M0 20h60" stroke="#fff" strokeWidth="12" />
      <path d="M30 0v40M0 20h60" stroke="#c8102e" strokeWidth="7" />
    </svg>
  );
}
