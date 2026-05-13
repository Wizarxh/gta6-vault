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

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": SITE.url
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "News",
        "item": `${SITE.url}/news`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": article.title,
        "item": `${SITE.url}/news/${article.slug}`
      }
    ]
  };

  return (
    <article>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <header className="border-b border-vc-border/50 bg-vc-bg-elev">
        <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16">
          <Link
            href="/news"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-vc-muted hover:text-vc-cyan"
          >
            &larr; Back to news
          </Link>

          <div className="mt-6 flex flex-wrap items-center gap-2">
            <StatusBadge status={article.status} size="lg" />
            <span className="inline-flex rounded-md border border-vc-border bg-vc-accent px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-vc-muted">
              {article.category}
            </span>
          </div>

          <h1 className="mt-6 font-display text-3xl font-bold leading-tight tracking-tight text-vc-text sm:text-4xl">
            {article.title}
          </h1>

          <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-vc-border/30 pt-6 font-mono text-xs text-vc-muted">
            <span>By {article.author}</span>
            <span>
              <time dateTime={article.date}>{formatDate(article.date)}</time>
            </span>
            <span>{article.readingTime} min read</span>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-2xl px-4 py-12 sm:px-6 sm:py-16">
        <div className="rounded-lg border border-vc-border bg-vc-accent p-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-vc-muted">
            Summary
          </div>
          <p className="mt-3 text-base leading-relaxed text-vc-text">
            {article.excerpt}
          </p>
        </div>

        <div className="article-content mt-10">
          {article.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        <div className="mt-12 rounded-lg border border-vc-border bg-vc-accent p-6">
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-vc-muted">
            Sources
          </div>
          <ul className="mt-4 space-y-2 text-sm text-vc-muted">
            {article.sources.map((s, i) => (
              <li key={i} className="flex gap-2">
                <span className="flex-shrink-0 text-vc-cyan">▸</span>
                <span>{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {related.length > 0 && (
        <section className="border-t border-vc-border/30 bg-vc-bg-elev py-12 sm:py-16">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <h2 className="mb-8 font-display text-2xl font-bold text-vc-text">
              Related Articles
            </h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((a) => (
                <ArticleCard key={a.slug} article={a} />
              ))}
            </div>
          </div>
        </section>
      )}
    </article>
  );
}
