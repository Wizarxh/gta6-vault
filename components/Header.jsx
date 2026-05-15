import Link from "next/link";
import Image from "next/image";
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
          {/* Logo SVG */}
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 group-hover:opacity-80 transition-opacity">
            <svg
              viewBox="0 0 512 512"
              className="w-full h-full"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <style>
                  {`
                    @keyframes glow {
                      0%, 100% {
                        filter: drop-shadow(0 0 4px rgba(255, 107, 157, 0.6)) drop-shadow(0 0 8px rgba(0, 212, 255, 0.4));
                      }
                      50% {
                        filter: drop-shadow(0 0 8px rgba(255, 107, 157, 0.8)) drop-shadow(0 0 16px rgba(0, 212, 255, 0.6));
                      }
                    }
                    .logo-mark {
                      animation: glow 3s ease-in-out infinite;
                    }
                  `}
                </style>
                <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{ stopColor: "#ff6b9d", stopOpacity: 1 }} />
                  <stop offset="100%" style={{ stopColor: "#00d4ff", stopOpacity: 1 }} />
                </linearGradient>
              </defs>

              <rect width="512" height="512" fill="#0a0a0a" />

              <g className="logo-mark" transform="translate(256, 256)">
                <path
                  d="M -80 -100 L 0 80 L 0 0 Z"
                  fill="none"
                  stroke="url(#logoGradient)"
                  strokeWidth="24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M 80 -100 L 0 80 L 0 0 Z"
                  fill="none"
                  stroke="url(#logoGradient)"
                  strokeWidth="24"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="0" cy="40" r="12" fill="#ff6b9d" opacity="0.8" />
                <circle cx="0" cy="40" r="8" fill="#00d4ff" opacity="0.6" />
              </g>
            </svg>
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
