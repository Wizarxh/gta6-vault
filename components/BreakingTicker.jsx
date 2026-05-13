"use client";

import Link from "next/link";

export default function BreakingTicker({ items }) {
  if (!items?.length) return null;
  const loop = [...items, ...items];
  return (
    <div className="relative overflow-hidden border-y border-vc-pink/30 bg-vc-pink/5">
      <div className="absolute left-0 top-0 z-10 flex h-full items-center gap-2 bg-vc-pink px-3 font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-black">
        <span className="size-1.5 rounded-full bg-black vc-pulse" />
        Breaking
      </div>
      <div className="pl-28 py-2 sm:py-3">
        <div className="flex w-max gap-12 vc-marquee whitespace-nowrap">
          {loop.map((a, i) => (
            <Link
              key={`${a.slug}-${i}`}
              href={`/news/${a.slug}`}
              className="font-mono text-xs uppercase tracking-[0.2em] text-vc-text hover:text-vc-cyan"
            >
              <span className="text-vc-pink">&rarr;</span> {a.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
