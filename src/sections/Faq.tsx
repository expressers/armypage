import { SectionHead } from "../components/SectionHead";
import { useT } from "../i18n/context";

export function Faq() {
  const t = useT();
  return (
    <section className="section" id="faq" aria-labelledby="faq-title">
      <div className="container narrow">
        <SectionHead id="faq-title" eyebrow={t.faq.eyebrow} title={t.faq.title} />
        <div className="faq">
          {t.faq.items.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
