import Link from "next/link";
import ArticleCard from "@/components/ArticleCard";
import { getAllArticlesFr, paginateFr } from "@/lib/articles-fr";
import { SITE } from "@/lib/site";

const PER_PAGE = 6;

export const metadata = {
  title: "Actualités",
  description: `Chaque dépêche GTA 6 — vérifiée, rumeur ou démentie. L'archive complète de ${SITE.name}.`,
  alternates: { canonical: "/fr/articles" },
  openGraph: {
    title: `Actualités — ${SITE.name}`,
    description: `Chaque dépêche GTA 6 — vérifiée, rumeur ou démentie.`,
    url: "/fr/articles",
    type: "website",
  },
};

export default async function FrenchNewsPage({ searchParams }) {
  const sp = await searchParams;
  const requested = Number.parseInt(sp?.page ?? "1", 10);
  const all = getAllArticlesFr();
  const { items, page, totalPages } = paginateFr(
    all,
    Number.isFinite(requested) ? requested : 1,
    PER_PAGE,
  );

  return (
    <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
      <header className="mb-10 border-b border-vc-border pb-8">
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-vc-cyan">
          Le Coffre-fort &middot; Archive
        </div>
        <h1 className="mt-3 font-display text-4xl font-black uppercase tracking-tight sm:text-5xl">
          <span className="chrome-text">Actualités &amp; Dépêches</span>
        </h1>
        <p className="mt-3 max-w-2xl text-vc-muted">
          {all.length} articles en dossier. Chacun étiqueté{" "}
          <span className="text-emerald-300">Vérifiée</span>,{" "}
          <span className="text-vc-yellow">Rumeur</span>, ou{" "}
          <span className="text-vc-pink">Démentie</span>.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((a) => (
          <ArticleCard key={a.slug} article={a} basePath="/fr/articles" />
        ))}
      </div>

      {totalPages > 1 && (
        <nav
          aria-label="Pagination"
          className="mt-12 flex items-center justify-center gap-2"
        >
          {page > 1 ? (
            <Link
              href={page - 1 === 1 ? "/fr/articles" : `/fr/articles?page=${page - 1}`}
              className="inline-flex h-9 items-center rounded-md border border-vc-border px-3 font-mono text-xs uppercase tracking-[0.2em] text-vc-text hover:border-vc-cyan/60 hover:text-vc-cyan"
            >
              &larr; Préc.
            </Link>
          ) : (
            <span className="inline-flex h-9 items-center rounded-md border border-vc-border/40 px-3 font-mono text-xs uppercase tracking-[0.2em] text-vc-muted opacity-50">
              &larr; Préc.
            </span>
          )}

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => {
            const active = p === page;
            return (
              <Link
                key={p}
                href={p === 1 ? "/fr/articles" : `/fr/articles?page=${p}`}
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
              href={`/fr/articles?page=${page + 1}`}
              className="inline-flex h-9 items-center rounded-md border border-vc-border px-3 font-mono text-xs uppercase tracking-[0.2em] text-vc-text hover:border-vc-cyan/60 hover:text-vc-cyan"
            >
              Suiv. &rarr;
            </Link>
          ) : (
            <span className="inline-flex h-9 items-center rounded-md border border-vc-border/40 px-3 font-mono text-xs uppercase tracking-[0.2em] text-vc-muted opacity-50">
              Suiv. &rarr;
            </span>
          )}
        </nav>
      )}
    </div>
  );
}
