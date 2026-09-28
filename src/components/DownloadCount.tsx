import { useEffect, useState } from "react";
import { useLang, useT } from "../i18n/context";
import { COUNTS_API } from "../links";

interface Asset {
  name: string;
  download_count: number;
}

const REFRESH_MS = 60_000;

async function fetchTotal(): Promise<number> {
  const res = await fetch(COUNTS_API, { headers: { Accept: "application/vnd.github+json" } });
  if (!res.ok) throw new Error(String(res.status));
  const releases = (await res.json()) as { assets: Asset[] }[];
  return releases
    .flatMap((r) => r.assets)
    .filter((a) => a.name.endsWith(".dmg") || a.name.endsWith(".exe"))
    .reduce((n, a) => n + a.download_count, 0);
}

/**
 * Total installer downloads (GitHub counts, a few minutes behind), refreshed every
 * minute while the page is visible. Renders nothing until the first count arrives.
 */
export function DownloadCount({ className = "" }: { className?: string }) {
  const lang = useLang();
  const t = useT();
  const [total, setTotal] = useState<number | null>(null);

  useEffect(() => {
    let alive = true;
    const load = () =>
      fetchTotal()
        .then((n) => alive && setTotal(n))
        .catch(() => {});
    // Refresh only while the page is visible (GitHub allows 60 requests/hour per visitor).
    const refresh = () => document.visibilityState === "visible" && load();
    load();
    const timer = setInterval(refresh, REFRESH_MS);
    document.addEventListener("visibilitychange", refresh);
    return () => {
      alive = false;
      clearInterval(timer);
      document.removeEventListener("visibilitychange", refresh);
    };
  }, []);

  if (total === null) return <span className={`count count-empty ${className}`} aria-hidden="true" />;
  const locale = lang === "pt" ? "pt-PT" : "en-US";
  return (
    <span className={`count ${className}`} aria-live="polite">
      <span className="count-dot" aria-hidden="true" />
      <b>{total.toLocaleString(locale)}</b> {total === 1 ? t.downloads.one : t.downloads.many}
    </span>
  );
}
