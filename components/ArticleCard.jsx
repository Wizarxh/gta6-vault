"use client";

import Link from "next/link";
import StatusBadge from "./StatusBadge";

function formatDate(iso) {
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

export default function ArticleCard({ article, featured = false }) {
  return (
    <Link
      href={`/news/${article.slug}`}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-vc-border bg-black/40 transition-all hover:border-vc-pink/50 hover:shadow-[0_0_40px_-10px_rgba(255,107,157,0.4)] ${
        featured ? "md:flex-row" : ""
      }`}
    >
      <div
        className={`relative shrink-0 overflow-hidden ${
          featured ? "md:w-1/2 aspect-[16/9] md:aspect-auto" : "aspect-[16/9]"
        }`}
        style={{ background: article.hero }}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.18),transparent_50%)]" />
        <div className="absolute inset-0 mix-blend-overlay bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.6))]" />
        <div className="absolute left-3 top-3 flex items-center gap-2">
          <StatusBadge status={article.status} />
          {article.breaking && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-vc-pink/60 bg-vc-pink/20 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-vc-pink">
              <span className="size-1.5 rounded-full bg-vc-pink vc-pulse" />
              Breaking
            </span>
          )}
        </div>
        <div className="absolute bottom-3 left-3 font-mono text-[10px] uppercase tracking-[0.3em] text-white/80">
          {article.category}
        </div>
      </div>
      <div
        className={`flex flex-1 flex-col gap-3 p-5 sm:p-6 ${
          featured ? "md:p-8" : ""
        }`}
      >
        <h3
          className={`font-bold leading-tight tracking-tight text-vc-text group-hover:text-vc-cyan transition-colors ${
            featured ? "text-2xl md:text-3xl" : "text-lg sm:text-xl"
          }`}
        >
          {article.title}
        </h3>
        <p className="text-sm leading-relaxed text-vc-muted line-clamp-3">
          {article.excerpt}
        </p>
        <div className="mt-auto flex items-center justify-between pt-3 text-[11px] font-mono uppercase tracking-[0.25em] text-vc-muted">
          <span>{formatDate(article.date)}</span>
          <span>{article.readingTime} min read</span>
        </div>
      </div>
    </Link>
  );
}
