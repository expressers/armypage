const ITEMS = ["Sem contas", "Sem nuvem", "Sem servidores", "Sem links de convite", "Sem telemetria", "Sem anúncios"];

const STATS = [
  { value: "~5 MB", label: "app nativa, sem Electron" },
  { value: "0", label: "servidores pelo meio" },
  { value: "1080p", label: "a 30 fps, H.264" },
  { value: "E2E", label: "encriptação Noise" },
];

export function Principles() {
  return (
    <section className="principles" aria-label="Princípios">
      <div className="container">
        <ul className="pills">
          {ITEMS.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
        <dl className="stats">
          {STATS.map((s) => (
            <div key={s.label} className="stat">
              <dt className="gradient-text">{s.value}</dt>
              <dd>{s.label}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
