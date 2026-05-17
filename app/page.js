import Link from "next/link";
import Countdown from "@/components/Countdown";
import ArticleCard from "@/components/ArticleCard";
import BreakingTicker from "@/components/BreakingTicker";
import {
  getAllArticles,
  getBreakingArticles,
  getRecentArticles,
} from "@/lib/articles";
import { SITE } from "@/lib/site";

export const metadata = {
  title: `${SITE.name} — ${SITE.tagline}`,
  description: SITE.description,
  alternates: { canonical: "/" },
  openGraph: {
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
    url: "/",
  },
};

export default function HomePage() {
  const recent = getRecentArticles(4);
  const breaking = getBreakingArticles();
  const featured = getAllArticles()[0];

  return (
    <div>
      <BreakingTicker items={breaking} />

      <section className="relative isolate overflow-hidden scanline">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 bottom-0 h-72 outrun-grid"
        />
        <div className="mx-auto max-w-6xl px-4 pt-16 pb-20 sm:px-6 sm:pt-20 sm:pb-28 md:pt-28">
          <div className="flex flex-col items-center text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-vc-cyan/40 bg-vc-cyan/10 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.3em] text-vc-cyan">
              <span className="size-1.5 rounded-full bg-vc-cyan vc-pulse" />
              Premium GTA 6 newsroom
            </span>
            <h1 className="mt-6 font-display text-4xl font-black uppercase leading-[0.95] tracking-tight sm:text-6xl md:text-7xl">
              <span className="block chrome-text neon-text">Welcome back</span>
              <span className="block chrome-text neon-text">to Vice City.</span>
            </h1>
            <p className="mt-6 max-w-2xl text-sm sm:text-base text-vc-muted sm:text-lg">
              {SITE.tagline} Every leak, trailer frame, and rumor — tagged{" "}
              <span className="text-emerald-300">Verified</span>
              {" "}, <span className="text-vc-yellow">Rumor</span>
              {" "}, or <span className="text-vc-pink">Debunked</span>
              {" "}so you always know what&apos;s real.
            </p>

            <div className="mt-10 w-full">
              <div className="text-center">
                <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.4em] text-vc-muted">
                  Launch Countdown &middot; 19 November 2026
                </div>
                <Countdown />
              </div>
            </div>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
              <Link
                href="/news"
                className="inline-flex h-12 sm:h-11 items-center justify-center rounded-full bg-vc-pink px-6 sm:px-6 py-3 sm:py-0 font-mono text-xs sm:text-xs font-bold uppercase tracking-[0.25em] text-black transition-transform hover:-translate-y-0.5 active:translate-y-0"
              >
                Read the news
              </Link>
              <Link
                href="/about"
                className="inline-flex h-12 sm:h-11 items-center justify-center rounded-full border border-vc-cyan/60 bg-transparent px-6 sm:px-6 py-3 sm:py-0 font-mono text-xs sm:text-xs font-bold uppercase tracking-[0.25em] text-vc-cyan transition-colors hover:bg-vc-cyan/10 active:bg-vc-cyan/5"
              >
                About the Vault
              </Link>
            </div>
          </div>
        </div>
      </section>

      {featured && (
        <section className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mb-6 flex items-end justify-between">
            <h2 className="font-display text-2xl font-bold uppercase tracking-[0.2em] text-vc-text sm:text-3xl">
              <span className="text-vc-pink">{"//"}</span> Featured
            </h2>
            <Link
              href="/news"
              className="font-mono text-xs uppercase tracking-[0.25em] text-vc-muted hover:text-vc-cyan"
            >
              View all &rarr;
            </Link>
          </div>
          <ArticleCard article={featured} featured />
        </section>
      )}

      <section className="mx-auto mt-20 max-w-6xl px-4 sm:px-6">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="font-display text-2xl font-bold uppercase tracking-[0.2em] text-vc-text sm:text-3xl">
            <span className="text-vc-cyan">{"//"}</span> Latest dispatches
          </h2>
          <Link
            href="/news"
            className="font-mono text-xs uppercase tracking-[0.25em] text-vc-muted hover:text-vc-cyan"
          >
            All news &rarr;
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {recent.slice(1).map((a) => (
            <ArticleCard key={a.slug} article={a} />
          ))}
        </div>
      </section>

      <section className="mx-auto mt-24 max-w-6xl px-4 sm:px-6">
        <div className="grid gap-4 rounded-2xl border border-vc-border bg-black/40 p-6 sm:grid-cols-3 sm:p-8">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-emerald-300">
              Verified
            </div>
            <p className="mt-2 text-sm text-vc-muted">
              Sourced and corroborated by at least two independent
              channels. We name who and when.
            </p>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-vc-yellow">
              Rumor
            </div>
            <p className="mt-2 text-sm text-vc-muted">
              Credible enough to publish, not confirmed. We tell you what
              we know and what is still gap.
            </p>
          </div>
          <div>
            <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-vc-pink">
              Debunked
            </div>
            <p className="mt-2 text-sm text-vc-muted">
              False on record. We trace the chain, contact the source, and
              show you the receipts.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
