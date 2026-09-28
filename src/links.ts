export const VERSION = "0.1.1";
export const SITE = "https://army.expressers.ao";

// Static pages (public/download/*) that redirect to the latest installer in the
// public expressers/army-releases repository, which also counts downloads.
export const DOWNLOADS = {
  macos: "/download/mac",
  windows: "/download/windows",
} as const;

export const COUNTS_API = "https://api.github.com/repos/expressers/army-releases/releases?per_page=100";

export type Os = keyof typeof DOWNLOADS;

export function detectOs(): Os | null {
  const ua = navigator.userAgent;
  if (/Windows/i.test(ua)) return "windows";
  if (/Macintosh|Mac OS X/i.test(ua) && !/iPhone|iPad/i.test(ua)) return "macos";
  return null;
}
