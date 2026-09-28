import { DownloadButtons } from "../components/DownloadButtons";

export function FinalCta() {
  return (
    <section className="final" aria-labelledby="final-title">
      <div className="container final-inner">
        <div className="final-glow" aria-hidden="true" />
        <h2 id="final-title">
          O ecrã ao lado está <span className="gradient-text">a um clique.</span>
        </h2>
        <p className="section-lead">Descarrega o Army, abre nos dois computadores e experimenta.</p>
        <DownloadButtons />
      </div>
    </section>
  );
}
