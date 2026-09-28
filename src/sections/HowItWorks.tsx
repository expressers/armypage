import { SectionHead } from "../components/SectionHead";
import { Spotlight } from "../components/Spotlight";

const STEPS = [
  {
    title: "Abre o Army",
    text: "Os computadores próximos com o Army aberto aparecem sozinhos. Nada para configurar, nenhum código para trocar.",
  },
  {
    title: "Escolhe o dispositivo",
    text: "Clica no computador com quem queres partilhar e depois em Share Screen. Um só botão.",
  },
  {
    title: "O outro aceita",
    text: "A pessoa do outro lado aceita e o teu ecrã aparece. Qualquer um pode terminar quando quiser.",
  },
];

export function HowItWorks() {
  return (
    <section className="section" id="como-funciona" aria-labelledby="how-title">
      <div className="container">
        <SectionHead
          id="how-title"
          eyebrow="Como funciona"
          title={
            <>
              Três passos. <span className="gradient-text">Zero explicações.</span>
            </>
          }
          lead="A experiência de um AirDrop, mas para o ecrã inteiro."
        />
        <Spotlight className="steps">
          {STEPS.map((s, i) => (
            <article key={s.title} className="glass step">
              <span className="step-n">{String(i + 1).padStart(2, "0")}</span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </article>
          ))}
        </Spotlight>
      </div>
    </section>
  );
}
