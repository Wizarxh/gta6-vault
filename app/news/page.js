import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import { getAllArticles, paginate } from "@/lib/articles";
import { SITE } from "@/lib/site";

const PER_PAGE = 6;

export const metadata = {
  title: "News",
  description: `Every GTA 6 dispatch — verified, rumor, or debunked. The full ${SITE.name} archive.`,
  alternates: { canonical: "/news" },
  openGraph: {
    title: `News — ${SITE.name}`,
    description: `Every GTA 6 dispatch — verified, rumor, or debunked.`,
    url: "/news",
    type: "website",
  },
};

export default async function NewsPage({ searchParams }) {
  const sp = await searchParams;
  const requested = Number.parseInt(sp?.page ?? "1", 10);
  const all = getAllArticles();
  const { items, page, totalPages } = paginate(
    all,
    Number.isFinite(requested) ? requested : 1,
    PER_PAGE,
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <header className="mb-10 border-b border-vc-border pb-8">
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-vc-cyan">
          The Vault &middot; Archive
        </div>
        <h1 className="mt-3 font-display text-4xl font-black uppercase tracking-tight sm:text-5xl">
          <span className="chrome-text">News &amp; Dispatches</span>
        </h1>
        <p className="mt-3 max-w-2xl text-vc-muted">
          {all.length} stories on record. Each one tagged{" "}
          <span className="text-emerald-300">Verified</span>,{" "}
          <span className="text-vc-yellow">Rumor</span>, or{" "}
          <span className="text-vc-pink">Debunked</span>.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((a) => (
          <ArticleCard key={a.slug} article={a} />
        ))}
      </div>

      {totalPages > 1 && (
        <nav
          aria-label="Pagination"
          className="mt-12 flex items-center justify-center gap-2"
        >
          {page > 1 ? (
            <Link
              href={page - 1 === 1 ? "/news" : `/news?page=${page - 1}`}
              className="inline-flex h-9 items-center rounded-md border border-vc-border px-3 font-mono text-xs uppercase tracking-[0.2em] text-vc-text hover:border-vc-cyan/60 hover:text-vc-cyan"
            >
              &larr; Prev
            </Link>
          ) : (
            <span className="inline-flex h-9 items-center rounded-md border border-vc-border/40 px-3 font-mono text-xs uppercase tracking-[0.2em] text-vc-muted opacity-50">
              &larr; Prev
            </span>
          )}

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => {
            const active = p === page;
            return (
              <Link
                key={p}
                href={p === 1 ? "/news" : `/news?page=${p}`}
                aria-current={active ? "page" : undefined}
                className={`inline-flex h-9 w-9 items-center justify-center rounded-md font-mono text-xs ${
                  active
                    ? "bg-vc-pink text-black"
                    : "border border-vc-border text-vc-muted hover:border-vc-cyan/60 hover:text-vc-cyan"
                }`}
              >
                {p}
              </Link>
            );
          })}

          {page < totalPages ? (
            <Link
              href={`/news?page=${page + 1}`}
              className="inline-flex h-9 items-center rounded-md border border-vc-border px-3 font-mono text-xs uppercase tracking-[0.2em] text-vc-text hover:border-vc-cyan/60 hover:text-vc-cyan"
            >
              Next &rarr;
            </Link>
          ) : (
            <span className="inline-flex h-9 items-center rounded-md border border-vc-border/40 px-3 font-mono text-xs uppercase tracking-[0.2em] text-vc-muted opacity-50">
              Next &rarr;
            </span>
          )}
        </nav>
      )}
    </div>
  );
}
