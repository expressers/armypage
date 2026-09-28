import { useT } from "../i18n/context";

export function Principles() {
  const t = useT();
  return (
    <section className="principles" aria-label={t.principles.label}>
      <div className="container">
        <ul className="pills">
          {t.principles.items.map((i) => (
            <li key={i}>{i}</li>
          ))}
        </ul>
        <dl className="stats">
          {t.principles.stats.map((s) => (
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
