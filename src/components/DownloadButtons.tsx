import { useEffect, useState } from "react";
import { useT } from "../i18n/context";
import { DOWNLOADS, detectOs, type Os } from "../links";

const LABEL: Record<Os, string> = { macos: "macOS", windows: "Windows" };

/**
 * Primary button for the visitor's OS, secondary for the other one. The OS is only
 * known in the browser, so the prerendered HTML starts with macOS first.
 */
export function DownloadButtons() {
  const t = useT();
  const [os, setOs] = useState<Os | null>(null);
  useEffect(() => setOs(detectOs()), []);
  const order: Os[] = os === "windows" ? ["windows", "macos"] : ["macos", "windows"];

  return (
    <div className="buttons">
      {order.map((o, i) => (
        <a key={o} className={i === 0 ? "btn btn-primary" : "btn btn-secondary"} href={DOWNLOADS[o]}>
          <OsIcon os={o} />
          {t.downloadFor} {LABEL[o]}
        </a>
      ))}
    </div>
  );
}

export function OsIcon({ os }: { os: Os }) {
  return os === "windows" ? (
    <svg className="os-icon" viewBox="0 0 16 16" aria-hidden="true">
      <path fill="currentColor" d="M1 2.5 6.5 1.8v5.4H1zm6.4-.8L15 .7v6.5H7.4zM1 8.1h5.5v5.4L1 12.8zm6.4 0H15v6.6l-7.6-1z" />
    </svg>
  ) : (
    <svg className="os-icon" viewBox="0 0 16 16" aria-hidden="true">
      <path
        fill="currentColor"
        d="M11.2 8.5c0-1.6 1.3-2.4 1.4-2.4-.8-1.1-2-1.3-2.4-1.3-1-.1-2 .6-2.5.6s-1.3-.6-2.2-.6C4.4 4.8 3.3 5.5 2.7 6.6c-1.2 2.1-.3 5.2.9 6.9.6.8 1.2 1.7 2.1 1.7.8 0 1.2-.5 2.2-.5s1.3.5 2.2.5c.9 0 1.5-.8 2-1.7.7-1 .9-1.9.9-2-.1 0-1.8-.7-1.8-3zM9.7 3.7c.4-.6.8-1.3.7-2.1-.7 0-1.5.5-2 1-.4.5-.8 1.2-.7 2 .8.1 1.5-.4 2-.9z"
      />
    </svg>
  );
}
