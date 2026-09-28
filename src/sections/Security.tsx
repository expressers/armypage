import { SectionHead } from "../components/SectionHead";

const POINTS = [
  ["Aceitação explícita", "O ecrã nunca é partilhado em silêncio. Nada é capturado antes de o outro lado aceitar."],
  ["Encriptação moderna", "Protocolo Noise (Curve25519, ChaCha20-Poly1305), com chaves novas em cada sessão."],
  ["Identidade verificada", "Cada dispositivo tem a sua chave; o Army confirma que falas com quem escolheste."],
  ["Zero dados", "Sem servidores, contas, analytics ou rastreio. O que acontece na tua rede fica na tua rede."],
];

export function Security() {
  return (
    <section className="section" id="seguranca" aria-labelledby="sec-title">
      <div className="container">
        <SectionHead
          id="sec-title"
          eyebrow="Segurança"
          title={
            <>
              Rede local <span className="gradient-text">não é rede de confiança.</span>
            </>
          }
          lead="Por isso o Army trata cada ligação como se estivesse numa rede pública."
        />
        <div className="code-card glass" aria-label="Exemplo: o mesmo código nos dois computadores">
          <div className="code-side">
            <small>No teu Mac</small>
            <span>418 305</span>
          </div>
          <span className="code-eq" aria-hidden="true">
            =
          </span>
          <div className="code-side">
            <small>No PC do colega</small>
            <span>418 305</span>
          </div>
          <p>Os dois ecrãs mostram o mesmo código de verificação. Se coincidem, ninguém está no meio.</p>
        </div>
        <div className="points">
          {POINTS.map(([t, d]) => (
            <div key={t} className="point">
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
