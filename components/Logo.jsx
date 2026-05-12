import Link from "next/link";

export default function Logo({ className = "" }) {
  return (
    <Link
      href="/"
      className={`group inline-flex items-center gap-2 ${className}`}
      aria-label="GTA6 Vault — home"
    >
      <span
        aria-hidden
        className="relative inline-flex size-9 items-center justify-center rounded-md bg-gradient-to-br from-vc-pink to-vc-cyan font-mono text-sm font-black text-black neon-border"
      >
        VI
      </span>
      <span className="font-mono text-base font-bold tracking-[0.25em] uppercase">
        <span className="text-vc-pink">GTA6</span>
        <span className="text-vc-cyan">Vault</span>
      </span>
    </Link>
  );
}
