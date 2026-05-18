import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "GTA 6 Tips, Cheats & Guides",
  description:
    "GTA 6 cheats codes, mission guides, easter eggs, and walkthroughs. Updated as the game releases.",
  alternates: { canonical: "/tips" },
  openGraph: {
    title: "GTA 6 Tips, Cheats & Guides",
    description: "Complete GTA 6 cheats, walkthroughs, and strategy guides.",
    url: "/tips",
  },
};

const categories = [
  {
    id: "cheats",
    name: "Cheat Codes",
    description: "Unlock gameplay modifiers, weapons, and vehicles",
    icon: "⌨️",
    items: [
      {
        title: "Weapons & Ammo",
        status: "coming-soon",
        chapters: ["All chapters"],
      },
      {
        title: "Vehicles",
        status: "coming-soon",
        chapters: ["All chapters"],
      },
      {
        title: "Gameplay Modifiers",
        status: "coming-soon",
        chapters: ["All chapters"],
      },
    ],
  },
  {
    id: "guides",
    name: "Mission Walkthroughs",
    description: "Step-by-step guides for every mission and objective",
    icon: "🎮",
    items: [
      {
        title: "Campaign Progress Guide",
        status: "coming-soon",
        chapters: ["Chapter 1", "Chapter 2", "Chapter 3"],
      },
      {
        title: "Side Missions & Activities",
        status: "coming-soon",
        chapters: ["Vice City", "Leonida"],
      },
    ],
  },
  {
    id: "easter-eggs",
    name: "Easter Eggs & Secrets",
    description: "Hidden content, references, and developer secrets",
    icon: "🥚",
    items: [
      {
        title: "Easter Eggs Database",
        status: "coming-soon",
        chapters: ["All chapters"],
      },
      {
        title: "Hidden Locations",
        status: "coming-soon",
        chapters: ["Vice City", "Leonida"],
      },
    ],
  },
  {
    id: "collectibles",
    name: "Collectibles & Achievements",
    description: "Find all collectibles and earn 100% completion",
    icon: "⭐",
    items: [
      {
        title: "100% Completion Checklist",
        status: "coming-soon",
        chapters: ["All chapters"],
      },
      {
        title: "Trophy/Achievement Guide",
        status: "coming-soon",
        chapters: ["All achievements"],
      },
    ],
  },
];

export default function TipsPage() {
  return (
    <main>
      {/* Header */}
      <header className="border-b border-vc-border py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-vc-cyan">
            Gameplay Resources
          </div>
          <h1 className="mt-3 font-display text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl">
            Tips, Cheats & Guides
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-vc-text/90">
            Master GTA 6 with our comprehensive guides, cheat codes, and easter egg database. Updated daily as the game releases.
          </p>
        </div>
      </header>

      {/* Categories Grid */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-2">
          {categories.map((category) => (
            <div
              key={category.id}
              className="rounded-xl border border-vc-border bg-black/30 p-6 hover:bg-black/40 transition-colors"
            >
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-3xl">{category.icon}</span>
                  <h2 className="mt-3 font-display text-xl font-bold text-white">
                    {category.name}
                  </h2>
                  <p className="mt-2 text-sm text-vc-text/80">{category.description}</p>
                </div>
              </div>

              {/* Items in this category */}
              <div className="mt-6 space-y-3 border-t border-vc-border/50 pt-4">
                {category.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between rounded-lg bg-black/40 p-3"
                  >
                    <div>
                      <h3 className="font-mono text-sm font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="text-xs text-vc-muted">
                        {item.chapters.join(", ")}
                      </p>
                    </div>
                    <span className="rounded-full bg-vc-cyan/20 px-2 py-1 text-xs font-mono text-vc-cyan">
                      {item.status === "coming-soon" ? "Coming" : "Available"}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-vc-border bg-black/40 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h2 className="font-display text-2xl font-bold text-white">
            Contribute a Guide
          </h2>
          <p className="mt-2 text-vc-text/80">
            Found an easter egg or have a great strategy? Submit your guide and help the community.
          </p>
          <button className="mt-6 inline-flex items-center gap-2 rounded-lg bg-vc-cyan px-6 py-3 font-mono text-sm font-bold uppercase tracking-[0.2em] text-black hover:bg-vc-cyan/90 transition-colors">
            Submit a Guide
          </button>
        </div>
      </section>
    </main>
  );
}
