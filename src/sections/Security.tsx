import { SectionHead } from "../components/SectionHead";
import { useT } from "../i18n/context";

export function Security() {
  const t = useT();
  const s = t.security;
  return (
    <section className="section" id="seguranca" aria-labelledby="sec-title">
      <div className="container">
        <SectionHead
          id="sec-title"
          eyebrow={s.eyebrow}
          title={
            <>
              {s.title[0]} <span className="gradient-text">{s.title[1]}</span>
            </>
          }
          lead={s.lead}
        />
        <div className="code-card glass" role="img" aria-label={s.codeLabel}>
          <div className="code-side">
            <small>{s.yourMac}</small>
            <span>418 305</span>
          </div>
          <span className="code-eq" aria-hidden="true">
            =
          </span>
          <div className="code-side">
            <small>{s.colleaguePc}</small>
            <span>418 305</span>
          </div>
          <p>{s.codeNote}</p>
        </div>
        <div className="points">
          {s.points.map(([title, text]) => (
            <div key={title} className="point">
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
