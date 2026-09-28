import { useId } from "react";

export function Logo({ size = 28 }: { size?: number }) {
  const id = useId();
  return (
    <svg width={size} height={size} viewBox="0 0 1024 1024" aria-hidden="true">
      <defs>
        <linearGradient id={id} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3b82f6" />
          <stop offset="1" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
      <rect x="64" y="64" width="896" height="896" rx="220" fill={`url(#${id})`} />
      <circle cx="512" cy="512" r="250" fill="none" stroke="#fff" strokeWidth="72" />
      <circle cx="512" cy="512" r="88" fill="#fff" />
    </svg>
  );
}
