import type { ReactNode } from "react";

/** Centered eyebrow + title + lead used by every section. */
export function SectionHead({ eyebrow, title, lead, id }: { eyebrow: string; title: ReactNode; lead?: ReactNode; id: string }) {
  return (
    <div className="section-head">
      <span className="eyebrow">{eyebrow}</span>
      <h2 id={id}>{title}</h2>
      {lead && <p className="section-lead">{lead}</p>}
    </div>
  );
}
