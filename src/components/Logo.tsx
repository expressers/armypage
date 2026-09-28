export function Logo({ size = 28 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 1024 1024" aria-hidden="true">
      <rect x="64" y="64" width="896" height="896" rx="200" fill="var(--accent)" />
      <circle cx="512" cy="512" r="250" fill="none" stroke="#fff" strokeWidth="72" />
      <circle cx="512" cy="512" r="88" fill="#fff" />
    </svg>
  );
}
