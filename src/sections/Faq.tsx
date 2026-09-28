import { SectionHead } from "../components/SectionHead";

const FAQ: { q: string; a: string }[] = [
  {
    q: "Preciso de internet?",
    a: "Não. Basta que os dois computadores estejam ligados à mesma rede (Wi-Fi ou cabo). O vídeo nunca sai dessa rede.",
  },
  {
    q: "Funciona entre casas ou escritórios diferentes?",
    a: "Não, e é de propósito. O Army é para computadores próximos, na mesma rede local. Redes de convidados que isolam os dispositivos também impedem que se encontrem.",
  },
  {
    q: "Posso controlar o outro computador?",
    a: "Não. O Army só mostra o ecrã. Não há controlo remoto, transferência de ficheiros, chat, áudio nem gravação.",
  },
  {
    q: "O ecrã pode ser partilhado sem eu saber?",
    a: "Não. Quem recebe tem de aceitar cada pedido, e quem partilha vê sempre que está a partilhar e pode parar a qualquer momento.",
  },
  {
    q: "O outro computador não aparece. E agora?",
    a: "Confirma que o Army está aberto nos dois, que estão na mesma rede, e que permitiste o acesso à rede local (macOS) e à firewall em redes privadas (Windows).",
  },
  {
    q: "Porque é que o sistema mostra um aviso ao instalar?",
    a: "Esta primeira versão ainda não está assinada com certificados da Apple e da Microsoft. O código está público no GitHub e pode ser verificado.",
  },
  {
    q: "É grátis?",
    a: "Sim. Sem contas, sem subscrições e sem anúncios.",
  },
];

export function Faq() {
  return (
    <section className="section" id="faq" aria-labelledby="faq-title">
      <div className="container narrow">
        <SectionHead id="faq-title" eyebrow="FAQ" title="Perguntas frequentes" />
        <div className="faq">
          {FAQ.map((f) => (
            <details key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
