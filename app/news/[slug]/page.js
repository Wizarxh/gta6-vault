import Link from "next/link";
import { notFound } from "next/navigation";
import StatusBadge from "@/components/StatusBadge";
import ArticleCard from "@/components/ArticleCard";
import { getAllArticles, getArticleBySlug } from "@/lib/articles";
import { SITE } from "@/lib/site";

export async function generateStaticParams() {
  return getAllArticles().map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) {
    return { title: "Not found" };
  }
  const url = `/news/${article.slug}`;
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: article.title,
      description: article.excerpt,
      url,
      publishedTime: article.date,
      authors: [article.author],
      tags: [article.category, article.status],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
    },
  };
}

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function ArticlePage({ params }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) {
    notFound();
  }

  const related = getAllArticles()
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.date,
    author: { "@type": "Person", name: article.author },
    publisher: {
      "@type": "Organization",
      name: SITE.name,
    },
    mainEntityOfPage: `${SITE.url}/news/${article.slug}`,
    articleSection: article.category,
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <header
        className="relative isolate overflow-hidden border-b border-vc-border"
        style={{ background: article.hero }}
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
            <StatusBadge status={article.status} size="lg" />
            <span className="inline-flex rounded-full border border-white/30 bg-black/30 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-white">
              {article.category}
            </span>
            {article.breaking && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-vc-pink/60 bg-vc-pink/30 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.25em] text-white">
                <span className="size-1.5 rounded-full bg-white vc-pulse" />
                Breaking
              </span>
            )}
          </div>

          <h1 className="mt-6 font-display text-3xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl">
            {article.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs uppercase tracking-[0.25em] text-white/85">
            <span>By {article.author}</span>
            <span aria-hidden>&middot;</span>
            <span>
              <time dateTime={article.date}>{formatDate(article.date)}</time>
            </span>
            <span aria-hidden>&middot;</span>
            <span>{article.readingTime} min read</span>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="rounded-xl border border-vc-border bg-black/40 p-5 sm:p-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-vc-muted">
            Editorial verdict
          </div>
          <p className="mt-2 text-lg leading-snug text-vc-text">
            {article.excerpt}
          </p>
        </div>

        <div className="prose-vault mt-10 space-y-6 text-[17px] leading-relaxed text-vc-text/95">
          {article.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-vc-border bg-black/40 p-5 sm:p-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.3em] text-vc-cyan">
            Sources &amp; verification trail
          </div>
          <ul className="mt-3 space-y-2 text-sm text-vc-muted">
            {article.sources.map((s, i) => (
              <li key={i} className="flex gap-2">
                <span className="text-vc-pink">&rarr;</span>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-vc-muted">
            We re-check this verdict whenever new evidence surfaces. If you
            have a tip, write to tips@gta6vault.example.
          </p>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mx-auto max-w-6xl px-4 pb-16 sm:px-6">
          <h2 className="mb-6 font-display text-2xl font-bold uppercase tracking-[0.2em]">
            <span className="text-vc-cyan">{"//"}</span> Related
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((a) => (
              <ArticleCard key={a.slug} article={a} />
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
