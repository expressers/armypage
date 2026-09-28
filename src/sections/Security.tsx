export function Security() {
  return (
    <section className="section" id="seguranca" aria-labelledby="sec-title">
      <div className="container split">
        <div>
          <h2 id="sec-title">Rede local não quer dizer rede de confiança.</h2>
          <p className="section-lead">Por isso o Army trata cada ligação como se estivesse numa rede pública.</p>
          <ul className="checks">
            <li>
              <b>Aceitação explícita.</b> O ecrã nunca é partilhado em silêncio — o outro lado tem de aceitar, e
              qualquer um pode parar a qualquer momento.
            </li>
            <li>
              <b>Encriptação moderna.</b> Protocolo Noise (Curve25519, ChaCha20-Poly1305) com chaves novas em cada
              sessão.
            </li>
            <li>
              <b>Identidade verificada.</b> Cada dispositivo tem uma chave própria; o Army confirma que está a falar
              com o computador que escolheste.
            </li>
            <li>
              <b>Código de verificação.</b> Os dois ecrãs mostram o mesmo código de 6 dígitos. Se coincidem, ninguém
              está no meio.
            </li>
            <li>
              <b>Sem nuvem, sem dados.</b> Não há servidores, contas, análise de uso nem rastreio.
            </li>
          </ul>
        </div>
        <div className="code-card" aria-label="Exemplo: o mesmo código nos dois computadores">
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
          <p>Códigos iguais: ligação directa e segura.</p>
        </div>
      </div>
    </section>
  );
}
