import Link from "next/link";
import Logo from "./Logo";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/news", label: "News" },
  { href: "/about", label: "About" },
  { href: "/newsletter", label: "Newsletter" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-vc-border bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Logo />
        <nav aria-label="Primary" className="flex items-center gap-1 sm:gap-2">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-md px-3 py-1.5 font-mono text-xs uppercase tracking-[0.25em] text-vc-muted transition-colors hover:bg-white/5 hover:text-vc-cyan"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
