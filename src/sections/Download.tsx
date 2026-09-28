import { DownloadCount } from "../components/DownloadCount";
import { OsIcon } from "../components/DownloadButtons";
import { SectionHead } from "../components/SectionHead";
import { Spotlight } from "../components/Spotlight";
import { useT } from "../i18n/context";
import { rich } from "../i18n/rich";
import { DOWNLOADS, VERSION } from "../links";

export function Download() {
  const t = useT();
  const d = t.download;
  return (
    <section className="section" id="descarregar" aria-labelledby="dl-title">
      <div className="container">
        <SectionHead id="dl-title" eyebrow={d.eyebrow} title={d.title} lead={d.lead} />
        <Spotlight className="dl-grid">
          <article className="glass dl-card">
            <OsIcon os="macos" />
            <h3>macOS</h3>
            <p className="muted">{d.macReq}</p>
            <a className="btn btn-primary" href={DOWNLOADS.macos}>
              {d.macButton}
            </a>
            <details>
              <summary>{d.firstLaunch}</summary>
              <ol>
                {d.macSteps.map((step) => (
                  <li key={step}>{rich(step)}</li>
                ))}
              </ol>
            </details>
          </article>
          <article className="glass dl-card">
            <OsIcon os="windows" />
            <h3>Windows</h3>
            <p className="muted">{d.winReq}</p>
            <a className="btn btn-primary" href={DOWNLOADS.windows}>
              {d.winButton}
            </a>
            <details>
              <summary>{d.firstLaunch}</summary>
              <ol>
                {d.winSteps.map((step) => (
                  <li key={step}>{rich(step)}</li>
                ))}
              </ol>
            </details>
          </article>
        </Spotlight>
        <p className="fine center dl-meta">
          <DownloadCount />
          <span>{d.fine.replace("{version}", VERSION)}</span>
        </p>
      </div>
    </section>
  );
}
