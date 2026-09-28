import { DownloadButtons } from "../components/DownloadButtons";
import { DownloadCount } from "../components/DownloadCount";
import { useT } from "../i18n/context";
import { VERSION } from "../links";

export function Hero() {
  const t = useT();
  return (
    <section className="hero" id="top">
      <div className="container hero-inner">
        <a className="badge" href="#descarregar">
          <span className="badge-dot" />
          <span>{t.hero.badge.replace("{version}", VERSION)}</span>
          <span className="badge-arrow" aria-hidden="true">
            →
          </span>
        </a>
        <h1>
          {t.hero.title[0]}
          <br />
          <span className="gradient-text">{t.hero.title[1]}</span>
        </h1>
        <p className="lead">{t.hero.lead}</p>
        <DownloadButtons />
        <p className="fine hero-meta">
          <DownloadCount />
          <span>{t.hero.fine}</span>
        </p>
      </div>
      <Showcase />
    </section>
  );
}

/** Faithful rendering of the two real app screens involved in a share, on a glowing stage. */
function Showcase() {
  const t = useT();
  return (
    <div className="container">
      <div className="stage" role="img" aria-label={t.hero.demoLabel}>
        <div className="stage-glow" aria-hidden="true" />
        <div className="demo" aria-hidden="true">
          <div className="window window-mac">
            <div className="titlebar">
              <span className="lights">
                <i />
                <i />
                <i />
              </span>
              <span className="title">Army</span>
            </div>
            <div className="app">
              <p className="app-h">Nearby</p>
              <div className="app-row selected">
                <span className="dot" />
                <span className="app-row-text">
                  <b>Desktop-PC</b>
                  <small>Windows</small>
                </span>
                <span className="chev">›</span>
              </div>
              <div className="app-row">
                <span className="dot" />
                <span className="app-row-text">
                  <b>{t.hero.otherMac}</b>
                  <small>macOS</small>
                </span>
                <span className="chev">›</span>
              </div>
              <div className="app-status">
                <span className="pulse" />
                Waiting for acceptance…
              </div>
            </div>
          </div>

          <div className="beam">
            <span className="beam-line" />
            <span className="beam-packet" />
            <span className="beam-packet delay" />
          </div>

          <div className="window window-win">
            <div className="titlebar titlebar-win">
              <span className="title">Army</span>
              <span className="win-controls">─ ☐ ✕</span>
            </div>
            <div className="app app-center">
              <p className="app-title">Screen sharing request</p>
              <p className="app-desc">
                <b>{t.hero.macName}</b> wants to share its screen with you.
              </p>
              <p className="app-code">
                Code <b>418 305</b>
              </p>
              <div className="app-actions">
                <span className="app-btn">Decline</span>
                <span className="app-btn app-btn-primary">Accept</span>
              </div>
            </div>
          </div>
        </div>
        <div className="stage-tags" aria-hidden="true">
          <span>
            <i className="tag-dot" /> {t.hero.tags[0]}
          </span>
          <span>{t.hero.tags[1]}</span>
          <span>{t.hero.tags[2]}</span>
        </div>
      </div>
    </div>
  );
}
