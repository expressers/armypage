import { OsIcon } from "../components/DownloadButtons";
import { DOWNLOADS, RELEASES, VERSION } from "../links";

export function Download() {
  return (
    <section className="section section-alt" id="descarregar" aria-labelledby="dl-title">
      <div className="container">
        <h2 id="dl-title">Descarregar o Army</h2>
        <p className="section-lead">Instala nos dois computadores. Ambos têm de estar na mesma rede.</p>
        <div className="dl-grid">
          <article className="dl-card">
            <OsIcon os="macos" />
            <h3>macOS</h3>
            <p className="muted">macOS 12.3 ou mais recente · Intel e Apple Silicon</p>
            <a className="btn btn-primary" href={DOWNLOADS.macos}>
              Descarregar .dmg
            </a>
            <details>
              <summary>Primeira abertura</summary>
              <ol>
                <li>Abre o .dmg e arrasta o Army para Aplicações.</li>
                <li>
                  Na primeira vez, clica com o botão direito no Army e escolhe <b>Abrir</b> (a app ainda não está
                  assinada pela Apple).
                </li>
                <li>Permite o acesso à <b>Rede local</b> quando o macOS pedir.</li>
                <li>
                  Para partilhar o teu ecrã, activa o Army em Definições do Sistema › Privacidade e Segurança ›{" "}
                  <b>Gravação de ecrã</b> e reabre a app.
                </li>
              </ol>
            </details>
          </article>
          <article className="dl-card">
            <OsIcon os="windows" />
            <h3>Windows</h3>
            <p className="muted">Windows 10 (1903+) e Windows 11 · 64 bits</p>
            <a className="btn btn-primary" href={DOWNLOADS.windows}>
              Descarregar instalador
            </a>
            <details>
              <summary>Primeira abertura</summary>
              <ol>
                <li>Executa o instalador.</li>
                <li>
                  Se o SmartScreen avisar, clica em <b>Mais informações</b> › <b>Executar mesmo assim</b> (a app
                  ainda não está assinada).
                </li>
                <li>
                  Quando a Firewall perguntar, permite o Army em redes <b>privadas</b>.
                </li>
              </ol>
            </details>
          </article>
        </div>
        <p className="fine center">
          Versão {VERSION} · <a href={RELEASES}>Todas as versões e notas</a>
        </p>
      </div>
    </section>
  );
}
