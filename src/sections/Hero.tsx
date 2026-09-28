import { DownloadButtons } from "../components/DownloadButtons";
import { VERSION } from "../links";

export function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">Para Mac e Windows · Grátis</p>
          <h1>
            Mostra o teu ecrã ao computador ao lado. <span className="accent">Em segundos.</span>
          </h1>
          <p className="lead">
            O Army partilha o ecrã entre computadores na mesma rede — sem contas, sem nuvem, sem links de convite,
            sem reuniões. Abres, escolhes o dispositivo, o outro aceita, e pronto.
          </p>
          <DownloadButtons />
          <p className="fine">
            Versão {VERSION} · macOS 12.3+ (Intel e Apple Silicon) · Windows 10 e 11 · ~5 MB
          </p>
        </div>
        <HeroDemo />
      </div>
    </section>
  );
}

/** A faithful, static rendering of the two real app screens involved in a share. */
function HeroDemo() {
  return (
    <div className="demo" aria-label="Ilustração: um Mac pede para partilhar o ecrã com um PC Windows, que aceita">
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

      <div className="link" aria-hidden="true">
        <span className="link-line" />
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

      <p className="demo-caption">
        <span className="dot" /> Directo pela rede local · encriptado · sem servidores
      </p>
    </div>
  );
}
