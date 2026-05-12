import Link from "next/link";

export const metadata = {
  title: "404 — Off the map",
};

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-2xl flex-col items-center justify-center px-4 py-16 text-center sm:px-6">
      <div className="font-mono text-xs uppercase tracking-[0.3em] text-vc-cyan">
        404 &middot; Off the map
      </div>
      <h1 className="mt-3 font-display text-5xl font-black uppercase tracking-tight sm:text-7xl">
        <span className="chrome-text">Wrong neighborhood.</span>
      </h1>
      <p className="mt-4 max-w-md text-vc-muted">
        This street doesn&apos;t exist in Leonida yet. Try one of the links
        below instead.
      </p>
      <div className="mt-8 flex gap-3">
        <Link
          href="/"
          className="inline-flex h-11 items-center justify-center rounded-full bg-vc-pink px-6 font-mono text-xs font-bold uppercase tracking-[0.25em] text-black"
        >
          Home
        </Link>
        <Link
          href="/news"
          className="inline-flex h-11 items-center justify-center rounded-full border border-vc-cyan/60 px-6 font-mono text-xs font-bold uppercase tracking-[0.25em] text-vc-cyan"
        >
          All news
        </Link>
      </div>
    </div>
  );
}
