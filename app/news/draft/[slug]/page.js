import Link from "next/link";
import StatusBadge from "@/components/StatusBadge";
import { SITE } from "@/lib/site";

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return {
    title: `Draft: ${slug}`,
    description: "This is a draft article and not indexed",
    robots: { index: false, follow: false },
  };
}

export default async function DraftArticlePage({ params }) {
  const { slug } = await params;

  const mockArticle = {
    title: `Draft Article: ${slug}`,
    excerpt: "This is a draft article being tested before publication.",
    status: "VERIFIED",
    category: "Draft",
    date: new Date().toISOString(),
    author: "GTA6 Vault",
    readingTime: 5,
    hero: "linear-gradient(135deg, #FF6B9D 0%, #00D4FF 100%)",
    breaking: false,
    body: ["This is a draft article preview. The content will be displayed here once the article is published from the draft endpoint."],
    sources: [{ label: "Draft preview", url: "#" }],
  };

  return (
    <article>
      <meta name="robots" content="noindex, nofollow" />

      <header
        className="relative isolate overflow-hidden border-b border-vc-border"
        style={{ background: mockArticle.hero }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_55%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(10,10,10,0.92))]" />
        <div className="relative mx-auto max-w-3xl px-4 pt-16 pb-12 sm:px-6 sm:pt-24 sm:pb-16">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-white/80 hover:text-white"
          >
            &larr; Back to all news
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <StatusBadge status={mockArticle.status} size="lg" />
            <span className="inline-flex rounded-full border border-white/30 bg-black/30 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-white">
              {mockArticle.category}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-vc-cyan/60 bg-vc-cyan/30 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-white">
              <span className="size-1.5 rounded-full bg-vc-cyan" />
              Draft
            </span>
          </div>

          <h1 className="mt-6 font-display text-3xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl">
            {mockArticle.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs uppercase tracking-[0.25em] text-white/85">
            <span>By {mockArticle.author}</span>
            <span aria-hidden>&middot;</span>
            <span>
              <time dateTime={mockArticle.date}>{formatDate(mockArticle.date)}</time>
            </span>
            <span aria-hidden>&middot;</span>
            <span>{mockArticle.readingTime} min read</span>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="rounded-xl border border-vc-border bg-vc-cyan/10 p-5 sm:p-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-vc-cyan">
            ⚠️ Draft Preview
          </div>
          <p className="mt-2 text-lg leading-snug text-vc-text">
            This is a draft article. It is not indexed by search engines and is only accessible via direct link. Use the staging API endpoint to test articles before publication.
          </p>
        </div>

        <div className="prose-vault mt-10 space-y-6 text-[17px] leading-relaxed text-vc-text/95">
          {mockArticle.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-vc-border bg-black/40 p-5 sm:p-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-vc-cyan">
            Sources &amp; verification trail
          </div>
          <ul className="mt-3 space-y-2 text-sm text-vc-muted">
            {mockArticle.sources.map((s, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-vc-pink">&rarr;</span>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
