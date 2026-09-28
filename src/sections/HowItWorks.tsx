const STEPS = [
  {
    title: "Abre o Army",
    text: "Os computadores próximos com o Army aberto aparecem sozinhos. Não há nada para configurar nem códigos para trocar.",
  },
  {
    title: "Escolhe o dispositivo",
    text: "Clica no computador com quem queres partilhar e depois em Share Screen. Um só botão.",
  },
  {
    title: "O outro aceita",
    text: "A pessoa do outro lado vê o pedido e aceita. O teu ecrã aparece numa janela. Qualquer um pode terminar quando quiser.",
  },
];

export function HowItWorks() {
  return (
    <section className="section" id="como-funciona" aria-labelledby="how-title">
      <div className="container">
        <h2 id="how-title">Três passos. Nenhuma explicação necessária.</h2>
        <ol className="steps">
          {STEPS.map((s, i) => (
            <li key={s.title} className="step">
              <span className="step-n" aria-hidden="true">
                {i + 1}
              </span>
              <h3>{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
