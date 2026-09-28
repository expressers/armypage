import { OsIcon } from "../components/DownloadButtons";
import { SectionHead } from "../components/SectionHead";
import { Spotlight } from "../components/Spotlight";
import { DOWNLOADS, VERSION } from "../links";

export function Download() {
  return (
    <section className="section" id="descarregar" aria-labelledby="dl-title">
      <div className="container">
        <SectionHead
          id="dl-title"
          eyebrow="Descarregar"
          title="Instala nos dois computadores."
          lead="Ambos têm de estar na mesma rede. É só isso."
        />
        <Spotlight className="dl-grid">
          <article className="glass dl-card">
            <OsIcon os="macos" />
            <h3>macOS</h3>
            <p className="muted">macOS 12.3+ · Intel e Apple Silicon</p>
            <a className="btn btn-primary" href={DOWNLOADS.macos}>
              Descarregar .dmg
            </a>
            <details>
              <summary>Primeira abertura</summary>
              <ol>
                <li>Abre o .dmg e arrasta o Army para Aplicações.</li>
                <li>
                  Na primeira vez, clica com o botão direito no Army › <b>Abrir</b> (ainda não está assinado pela
                  Apple).
                </li>
                <li>
                  Permite o acesso à <b>Rede local</b> quando o macOS pedir.
                </li>
                <li>
                  Para partilhar, activa o Army em Privacidade e Segurança › <b>Gravação de ecrã</b> e reabre a app.
                </li>
              </ol>
            </details>
          </article>
          <article className="glass dl-card">
            <OsIcon os="windows" />
            <h3>Windows</h3>
            <p className="muted">Windows 10 (1903+) e 11 · 64 bits</p>
            <a className="btn btn-primary" href={DOWNLOADS.windows}>
              Descarregar instalador
            </a>
            <details>
              <summary>Primeira abertura</summary>
              <ol>
                <li>Executa o instalador.</li>
                <li>
                  Se o SmartScreen avisar: <b>Mais informações</b> › <b>Executar mesmo assim</b> (ainda não está
                  assinado).
                </li>
                <li>
                  Permite o Army na Firewall em redes <b>privadas</b>.
                </li>
              </ol>
            </details>
          </article>
        </Spotlight>
        <p className="fine center">
          Versão {VERSION} · Grátis, sem contas nem anúncios
        </p>
      </div>
    </section>
  );
}
