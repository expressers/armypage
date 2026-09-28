import { Fragment, type ReactNode } from "react";

/** Renders `**bold**` segments of a translated string. */
export function rich(text: string): ReactNode {
  return text.split(/\*\*(.+?)\*\*/g).map((part, i) => (i % 2 ? <b key={i}>{part}</b> : <Fragment key={i}>{part}</Fragment>));
}
