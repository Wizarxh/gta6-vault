"use client";

import { AdBanner } from "./AdSenseAds";

/**
 * Rich content block types:
 * - paragraph: text content
 * - image: full-width image with caption
 * - quote: blockquote/callout
 * - ad: ad placement
 * - heading: section heading
 * - list: bullet/ordered list
 */

export default function ArticleContent({ blocks }) {
  return (
    <div className="prose-vault space-y-8">
      {blocks.map((block, idx) => {
        switch (block.type) {
          case "paragraph":
            return (
              <p key={idx} className="text-[17px] leading-relaxed text-vc-text/95">
                {block.content}
              </p>
            );

          case "heading":
            return (
              <h2
                key={idx}
                className="pt-4 font-display text-2xl font-bold uppercase tracking-[0.15em] text-white"
              >
                <span className="text-vc-cyan">{"//"}</span> {block.content}
              </h2>
            );

          case "image":
            return (
              <figure key={idx} className="rounded-xl border border-vc-border overflow-hidden">
                <img
                  src={block.src}
                  alt={block.alt || "Article image"}
                  className="w-full h-auto bg-vc-border/20"
                />
                {block.caption && (
                  <figcaption className="bg-black/60 border-t border-vc-border px-4 py-3 text-sm text-vc-muted italic">
                    {block.caption}
                  </figcaption>
                )}
              </figure>
            );

          case "quote":
            return (
              <blockquote
                key={idx}
                className="rounded-xl border-l-4 border-vc-cyan bg-vc-cyan/10 px-6 py-4"
              >
                <p className="text-lg font-semibold text-vc-text italic">
                  "{block.content}"
                </p>
                {block.source && (
                  <p className="mt-2 text-sm text-vc-muted">— {block.source}</p>
                )}
              </blockquote>
            );

          case "list":
            return (
              <div key={idx} className="space-y-2">
                {block.ordered ? (
                  <ol className="list-decimal list-inside space-y-2 text-vc-text/95">
                    {block.items.map((item, i) => (
                      <li key={i} className="ml-2">
                        {item}
                      </li>
                    ))}
                  </ol>
                ) : (
                  <ul className="list-disc list-inside space-y-2 text-vc-text/95">
                    {block.items.map((item, i) => (
                      <li key={i} className="ml-2">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );

          case "ad":
            return (
              <div key={idx} className="my-8 py-6 border-y border-vc-border/50">
                <AdBanner slot={block.slot || "1234567890"} format={block.format || "horizontal"} />
              </div>
            );

          case "embed":
            return (
              <div
                key={idx}
                className="rounded-xl border border-vc-border overflow-hidden"
                dangerouslySetInnerHTML={{ __html: block.html }}
              />
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
