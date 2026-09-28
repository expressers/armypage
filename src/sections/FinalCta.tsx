import { DownloadButtons } from "../components/DownloadButtons";
import { useT } from "../i18n/context";

export function FinalCta() {
  const t = useT();
  return (
    <section className="final" aria-labelledby="final-title">
      <div className="container final-inner">
        <div className="final-glow" aria-hidden="true" />
        <h2 id="final-title">
          {t.final.title[0]} <span className="gradient-text">{t.final.title[1]}</span>
        </h2>
        <p className="section-lead">{t.final.lead}</p>
        <DownloadButtons />
      </div>
    </section>
  );
}
