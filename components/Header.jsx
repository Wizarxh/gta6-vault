import Link from "next/link";
import { SITE } from "@/lib/site";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/news", label: "News" },
  { href: "/about", label: "About" },
  { href: "/newsletter", label: "Newsletter" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-vc-border bg-gradient-to-r from-black via-black to-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        {/* Logo + Brand Name */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* Logo */}
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 group-hover:opacity-80 transition-opacity">
            <div className="absolute inset-0 bg-gradient-to-br from-vc-pink/20 to-vc-cyan/20 rounded-lg blur-lg group-hover:blur-xl transition-all" />
            <div className="relative w-full h-full bg-gradient-to-br from-vc-pink to-vc-cyan rounded-lg flex items-center justify-center font-display font-black text-white text-lg sm:text-xl">
              V
            </div>
          </div>

          {/* Brand Name */}
          <div className="hidden sm:block">
            <div className="font-display font-black text-lg sm:text-xl uppercase tracking-[0.1em]">
              <span className="text-vc-pink">GTA</span>
              <span className="text-vc-cyan">6</span>
            </div>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-vc-muted -mt-1">
              Vault
            </div>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 rounded-md font-mono text-xs uppercase tracking-[0.25em] text-vc-muted transition-all duration-200 hover:text-vc-cyan hover:bg-vc-cyan/5"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 rounded-md text-vc-muted hover:text-vc-cyan hover:bg-vc-cyan/5 transition-all">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav className="md:hidden border-t border-vc-border/50 bg-black/50 backdrop-blur px-4 py-2">
        <div className="flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 rounded-md font-mono text-xs uppercase tracking-[0.25em] text-vc-muted hover:text-vc-cyan hover:bg-vc-cyan/5 transition-all"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
