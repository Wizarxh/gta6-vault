import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "About",
  description: `How ${SITE.name} sources, verifies, and labels every GTA 6 story we publish.`,
  alternates: { canonical: "/about" },
  openGraph: {
    title: `About — ${SITE.name}`,
    description: `How ${SITE.name} sources, verifies, and labels every GTA 6 story we publish.`,
    url: "/about",
  },
};

const PRINCIPLES = [
  {
    color: "text-emerald-300",
    title: "Verified",
    body: "Two independent sources, named when possible, with original artifacts archived. We tell you when, who, and how we confirmed it.",
  },
  {
    color: "text-vc-yellow",
    title: "Rumor",
    body: "Credible enough to publish, not confirmed. We say exactly what we know, what we don't, and why we still think it's worth your attention.",
  },
  {
    color: "text-vc-pink",
    title: "Debunked",
    body: "Provably false. We trace the chain back to the original misstatement, reach out to whoever started it, and put the correction on record.",
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24">
      <div className="font-mono text-xs uppercase tracking-[0.3em] text-vc-cyan">
        About
      </div>
      <h1 className="mt-3 font-display text-4xl font-black uppercase tracking-tight sm:text-5xl">
        <span className="chrome-text">Verified. Curated. Daily.</span>
      </h1>

      <div className="mt-10 space-y-6 text-[17px] leading-relaxed text-vc-text/95">
        <p>
          {SITE.name} is a fan-run editorial outlet covering Grand Theft Auto
          6. We publish trailer breakdowns, leak verification, gameplay
          deep-dives, and release tracking — every day from now until launch
          on <strong className="text-vc-cyan">November 19, 2026</strong>.
        </p>
        <p>
          The GTA news cycle has a credibility problem. A blurry screenshot
          travels around the world in two hours, gets cited by major outlets
          by the third, and is rarely retracted when it turns out to be
          fake. We built the Vault to fix the smallest version of that
          problem we can: every story we run carries an explicit verdict.
        </p>
      </div>

      <section className="mt-14">
        <h2 className="font-display text-xl font-bold uppercase tracking-[0.2em]">
          <span className="text-vc-pink">{"//"}</span> Our three labels
        </h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          {PRINCIPLES.map((p) => (
            <div
              key={p.title}
              className="rounded-xl border border-vc-border bg-black/40 p-5"
            >
              <div
                className={`font-mono text-[11px] uppercase tracking-[0.3em] ${p.color}`}
              >
                {p.title}
              </div>
              <p className="mt-2 text-sm text-vc-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-xl font-bold uppercase tracking-[0.2em]">
          <span className="text-vc-cyan">{"//"}</span> How we verify
        </h2>
        <ol className="mt-6 space-y-4 text-vc-text/95">
          <li className="flex gap-3">
            <span className="font-mono text-vc-pink">01</span>
            <span>
              Every tip is logged with timestamp, channel, and origin. If a
              tip is unsigned, we say so in the article.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="font-mono text-vc-pink">02</span>
            <span>
              Visual evidence is run through a frame-by-frame check
              against the leaked 2022 build, public trailers, and the
              Rockstar press archive.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="font-mono text-vc-pink">03</span>
            <span>
              We contact the original source. If they decline to comment,
              we say so. If they confirm, we publish a quote.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="font-mono text-vc-pink">04</span>
            <span>
              The verdict label is locked at publication and only changed
              when we update the post — with a visible changelog at the
              bottom.
            </span>
          </li>
        </ol>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-xl font-bold uppercase tracking-[0.2em]">
          <span className="text-vc-cyan">{"//"}</span> Join the community
        </h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          <Link
            href="/newsletter"
            className="flex flex-col rounded-lg border border-vc-cyan/30 bg-black/40 p-4 hover:bg-black/60 transition-colors"
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-vc-cyan">Newsletter</span>
            <span className="mt-2 text-sm text-vc-muted">Daily digest delivered to your inbox at 9 AM</span>
          </Link>
          <a
            href="https://discord.gg/FGkBeR3hf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col rounded-lg border border-vc-pink/30 bg-black/40 p-4 hover:bg-black/60 transition-colors"
          >
            <span className="font-mono text-xs uppercase tracking-[0.3em] text-vc-pink">Discord</span>
            <span className="mt-2 text-sm text-vc-muted">Real-time updates and discussion with GTA6 fans</span>
          </a>
        </div>
      </section>

      <section className="mt-14 rounded-2xl border border-vc-border bg-black/40 p-6 sm:p-8">
        <h2 className="font-display text-xl font-bold uppercase tracking-[0.2em]">
          <span className="text-vc-yellow">{"//"}</span> Not affiliated
        </h2>
        <p className="mt-3 text-sm text-vc-muted">
          {SITE.name} is independent. We are not affiliated with Rockstar
          Games, Take-Two Interactive, or any subsidiary. All trademarks
          belong to their respective owners. Editorial decisions are made
          by the Vault team alone.
        </p>
      </section>

      <div className="mt-12">
        <Link
          href="/news"
          className="inline-flex h-11 items-center justify-center rounded-full bg-vc-pink px-6 font-mono text-xs font-bold uppercase tracking-[0.25em] text-black transition-transform hover:-translate-y-0.5"
        >
          Read the news
        </Link>
      </div>
    </div>
  );
}
