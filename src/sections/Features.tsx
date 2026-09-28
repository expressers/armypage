import type { ReactNode } from "react";
import { SectionHead } from "../components/SectionHead";
import { Spotlight } from "../components/Spotlight";
import { useT } from "../i18n/context";

const icon = (d: ReactNode) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    {d}
  </svg>
);

// Icons in the same order as t.features.items; the first and last cards are wide.
const ICONS: ReactNode[] = [
  icon(<><path d="M5 12.5a10 10 0 0 1 14 0" /><path d="M8.5 16a5 5 0 0 1 7 0" /><circle cx="12" cy="19.5" r="1" /><path d="M1.5 9a15 15 0 0 1 21 0" /></>),
  icon(<><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></>),
  icon(<path d="M13 2L4 14h7l-1 8 9-12h-7z" />),
  icon(<><path d="M4 8h14l-3-3" /><path d="M20 16H6l3 3" /></>),
  icon(<><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /><path d="M3 3l18 18" /></>),
  icon(<path d="M20 6L9 17l-5-5" />),
  icon(<><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="2.5" /></>),
];

export function Features() {
  const t = useT();
  const last = t.features.items.length - 1;
  return (
    <section className="section" id="funcionalidades" aria-labelledby="features-title">
      <div className="container">
        <SectionHead
          id="features-title"
          eyebrow={t.features.eyebrow}
          title={
            <>
              {t.features.title[0]} <span className="gradient-text">{t.features.title[1]}</span>
            </>
          }
          lead={t.features.lead}
        />
        <Spotlight className="bento">
          {t.features.items.map((f, i) => (
            <article key={f.title} className={i === 0 || i === last ? "glass card wide" : "glass card"}>
              <span className="card-icon" aria-hidden="true">
                {ICONS[i]}
              </span>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </article>
          ))}
        </Spotlight>
      </div>
    </section>
  );
}
