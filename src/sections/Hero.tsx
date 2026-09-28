import { DownloadButtons } from "../components/DownloadButtons";
import { VERSION } from "../links";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-inner">
        <a className="badge" href="#descarregar">
          <span className="badge-dot" />
          <span>Versão {VERSION} disponível para Mac e Windows</span>
          <span className="badge-arrow" aria-hidden="true">
            →
          </span>
        </a>
        <h1>
          Partilha o teu ecrã.
          <br />
          <span className="gradient-text">Em segundos.</span>
        </h1>
        <p className="lead">
          O Army liga o teu computador ao que está ao lado, Mac ou Windows, e mostra o teu ecrã directamente pela
          rede local. Sem contas. Sem nuvem. Sem links de convite.
        </p>
        <DownloadButtons />
        <p className="fine">Grátis · macOS 12.3+ · Windows 10 e 11 · ~5 MB</p>
      </div>
      <Showcase />
    </section>
  );
}

/** Faithful rendering of the two real app screens involved in a share, on a glowing stage. */
function Showcase() {
  return (
    <div className="container">
      <div className="stage" aria-label="Ilustração: um Mac pede para partilhar o ecrã com um PC Windows, que aceita">
        <div className="stage-glow" aria-hidden="true" />
        <div className="demo">
          <div className="window window-mac">
            <div className="titlebar">
              <span className="lights" aria-hidden="true">
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
                  <b>MacBook da Ana</b>
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

          <div className="beam" aria-hidden="true">
            <span className="beam-line" />
            <span className="beam-packet" />
            <span className="beam-packet delay" />
          </div>

          <div className="window window-win">
            <div className="titlebar titlebar-win">
              <span className="title">Army</span>
              <span className="win-controls" aria-hidden="true">
                ─ ☐ ✕
              </span>
            </div>
            <div className="app app-center">
              <p className="app-title">Screen sharing request</p>
              <p className="app-desc">
                <b>iMac do Eládio</b> wants to share its screen with you.
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
            <i className="tag-dot" /> Rede local
          </span>
          <span>Noise · ChaCha20-Poly1305</span>
          <span>H.264 · até 1080p30</span>
        </div>
      </div>
    </div>
  );
}
