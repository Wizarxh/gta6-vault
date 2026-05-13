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
      className={`group relative flex flex-col overflow-hidden rounded-lg border border-vc-border bg-vc-bg-elev/60 transition-all hover:border-vc-border/80 hover:bg-vc-bg-elev ${
        featured ? "md:flex-row" : ""
      }`}
    >
      <div
        className={`relative shrink-0 overflow-hidden ${
          featured ? "md:w-1/2 aspect-[16/9] md:aspect-auto" : "aspect-[16/9]"
        }`}
        style={{ background: article.hero }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,0,0,0.5))]" />
        <div className="absolute left-3 top-3 flex items-center gap-2">
          <StatusBadge status={article.status} />
          {article.breaking && (
            <span className="inline-flex items-center gap-1.5 rounded-md border border-vc-border bg-vc-accent px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.15em] text-vc-pink">
              Breaking
            </span>
          )}
        </div>
        <div className="absolute bottom-3 left-3 font-mono text-[9px] uppercase tracking-[0.2em] text-vc-muted">
          {article.category}
        </div>
      </div>
      <div
        className={`flex flex-1 flex-col gap-2.5 p-4 sm:p-5 ${
          featured ? "md:p-6" : ""
        }`}
      >
        <h3
          className={`font-display font-semibold leading-tight tracking-tight text-vc-text group-hover:text-vc-cyan transition-colors ${
            featured ? "text-2xl md:text-3xl" : "text-base sm:text-lg"
          }`}
        >
          {article.title}
        </h3>
        <p className="text-sm leading-relaxed text-vc-muted line-clamp-2">
          {article.excerpt}
        </p>
        <div className="mt-auto flex items-center justify-between pt-2 text-[10px] font-mono tracking-[0.15em] text-vc-muted">
          <span>{formatDate(article.date)}</span>
          <span>{article.readingTime}m</span>
        </div>
      </div>
    </Link>
  );
}
