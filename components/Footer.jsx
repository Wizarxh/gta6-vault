import Link from "next/link";
import { SITE } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-24 border-t border-vc-border bg-black/40">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <div className="font-mono text-sm uppercase tracking-[0.3em]">
            <span className="text-vc-pink">GTA6</span>
            <span className="text-vc-cyan">Vault</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-vc-muted">
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
