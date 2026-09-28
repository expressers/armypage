export const VERSION = "0.1.0";
const RELEASES = "https://github.com/tchiinhemba/army/releases";

// Version-less asset names attached to every release, so these never go stale.
export const DOWNLOADS = {
  macos: `${RELEASES}/latest/download/Army-macOS.dmg`,
  windows: `${RELEASES}/latest/download/Army-Windows-Setup.exe`,
} as const;

export type Os = keyof typeof DOWNLOADS;

export function detectOs(): Os | null {
  const ua = navigator.userAgent;
  if (/Windows/i.test(ua)) return "windows";
  if (/Macintosh|Mac OS X/i.test(ua) && !/iPhone|iPad/i.test(ua)) return "macos";
  return null;
}
