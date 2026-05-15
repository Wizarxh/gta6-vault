import Link from "next/link";
import Image from "next/image";
import { SITE } from "@/lib/site";
import logo from "@/public/logo.png";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-vc-border bg-black/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-4">
        <div>
          {/* Logo + Brand */}
          <div className="flex items-center gap-3 mb-4">
            <div className="relative w-10 h-10 flex-shrink-0">
              <Image
                src={logo}
                alt="GTA6 Vault Logo"
                width={40}
                height={40}
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="font-display font-black text-sm uppercase tracking-[0.1em]">
                <span className="text-vc-pink">GTA</span>
                <span className="text-vc-cyan">6</span>
              </div>
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-vc-muted -mt-0.5">
                Vault
              </div>
            </div>
          </div>
          <p className="mt-4 max-w-xs text-sm text-vc-muted">
            {SITE.tagline} A premium hub for everything GTA 6 — every leak,
            every trailer frame, every rumor put on the record.
          </p>
        </div>
        <div>
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-vc-muted">
            Explore
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-vc-cyan">
                Home
              </Link>
            </li>
            <li>
              <Link href="/news" className="hover:text-vc-cyan">
                News archive
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-vc-cyan">
                About the Vault
              </Link>
            </li>
            <li>
              <Link href="/newsletter" className="hover:text-vc-cyan">
                Newsletter
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-vc-muted">
            Editorial
          </div>
          <ul className="mt-4 space-y-2 text-sm text-vc-muted">
            <li>
              <span className="text-emerald-300">VERIFIED</span> — sourced and
              corroborated
            </li>
            <li>
              <span className="text-vc-yellow">RUMOR</span> — credible, not
              confirmed
            </li>
            <li>
              <span className="text-vc-pink">DEBUNKED</span> — proven false on
              record
            </li>
          </ul>
        </div>
        <div>
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-vc-muted">
            Contact
          </div>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={`mailto:${SITE.email}`}
                className="text-vc-muted hover:text-vc-cyan transition-colors"
              >
                📧 {SITE.email}
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/gta6vault"
                target="_blank"
                rel="noopener noreferrer"
                className="text-vc-muted hover:text-vc-cyan transition-colors"
              >
                𝕏 @gta6vault
              </a>
            </li>
            <li>
              <a
                href="https://discord.gg/gta6vault"
                target="_blank"
                rel="noopener noreferrer"
                className="text-vc-muted hover:text-vc-cyan transition-colors"
              >
                🎮 Discord Server
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-vc-border px-4 py-5 sm:px-6">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 text-xs text-vc-muted sm:flex-row sm:items-center">
          <p>
            &copy; {year} {SITE.name}. Fan-curated. Not affiliated with
            Rockstar Games or Take-Two Interactive.
          </p>
          <p className="font-mono uppercase tracking-[0.3em]">
            {SITE.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
}
