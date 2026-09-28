import { SectionHead } from "../components/SectionHead";
import { Spotlight } from "../components/Spotlight";
import { useT } from "../i18n/context";

export function HowItWorks() {
  const t = useT();
  return (
    <section className="section" id="como-funciona" aria-labelledby="how-title">
      <div className="container">
        <SectionHead
          id="how-title"
          eyebrow={t.how.eyebrow}
          title={
            <>
              {t.how.title[0]} <span className="gradient-text">{t.how.title[1]}</span>
            </>
          }
          lead={t.how.lead}
        />
        <Spotlight className="steps">
          {t.how.steps.map((s, i) => (
            <article key={s.title} className="glass step">
              <span className="step-n">{String(i + 1).padStart(2, "0")}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </Spotlight>
      </div>
    </section>
  );
}
