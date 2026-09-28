export const VERSION = "0.1.0";
// Redirects in vercel.json to the latest installers (public army-releases repo,
// which also counts downloads: see /api/downloads).
export const DOWNLOADS = {
  macos: "/download/mac",
  windows: "/download/windows",
} as const;

export type Os = keyof typeof DOWNLOADS;

export function detectOs(): Os | null {
  const ua = navigator.userAgent;
  if (/Windows/i.test(ua)) return "windows";
  if (/Macintosh|Mac OS X/i.test(ua) && !/iPhone|iPad/i.test(ua)) return "macos";
  return null;
}
