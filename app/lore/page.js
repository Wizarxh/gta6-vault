import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata = {
  title: "GTA 6 Lore, Story & Characters",
  description:
    "Complete character profiles, story breakdowns, and lore for GTA 6. Learn about Lucia Caminos, Jason Duval, Vice City, and Leonida.",
  alternates: { canonical: "/lore" },
  openGraph: {
    title: "GTA 6 Lore, Story & Characters",
    description:
      "Lucia, Jason, Vice City, and the world of Leonida. GTA 6 story guide.",
    url: "/lore",
  },
};

const characters = [
  {
    id: "lucia",
    name: "Lucia Caminos",
    title: "Co-Protagonist",
    status: "MAJOR CHARACTER",
    bio: "The first major female protagonist in a mainline GTA single-player story. Fresh out of prison, Lucia is ready to take on Vice City with a desperate hunger for freedom and power. Her story is bound to Jason's by love, crime, and shared ambition to escape their origins.",
    role: "One of two playable protagonists",
    backstory: [
      "Recently released from prison",
      "First non-optional female lead in GTA mainline story",
      "Partners with Jason Duval in a romantic criminal partnership",
      "Key player in Vice City underworld",
    ],
    introduced: "Trailer 1",
    actress: "Faizon Love",
    significance: "Most significant female character in GTA history",
  },
  {
    id: "jason",
    name: "Jason Duval",
    title: "Co-Protagonist",
    status: "MAJOR CHARACTER",
    bio: "A small-time Leonida Keys criminal whose life expands dramatically after connecting with Lucia. Jason represents the grounded, cautious half of the duo, dealing with landlords, small crimes, and everyday survival until he meets his match in Lucia.",
    role: "One of two playable protagonists",
    backstory: [
      "Small-time criminal from Leonida Keys",
      "Ordinary life before meeting Lucia",
      "Landlord complications and petty crimes",
      "Romantic partner to Lucia in shared criminal enterprise",
    ],
    introduced: "Trailer 1",
    actor: "Damson Idris",
    significance: "Co-lead protagonist with complex emotional arc",
  },
  {
    id: "brian-heder",
    name: "Brian Heder",
    title: "Supporting Character",
    status: "IMPORTANT",
    bio: "Appears as Jason's landlord in the trailers, but 'there's more to it than meets the eye' according to official descriptions. His role in the story expands beyond simple landlord interactions.",
    role: "Jason's landlord with hidden depths",
    backstory: [
      "Introduced as Jason's landlord",
      "More complex role than initially apparent",
      "Connected to Jason's criminal activities",
    ],
    introduced: "Trailer 1",
    note: "Role details remain mysterious",
  },
];

const locations = [
  {
    id: "vice-city",
    name: "Vice City",
    type: "PRIMARY LOCATION",
    description:
      "The neon-soaked heart of Leonida. Vice City is the glamorous, dangerous epicenter of Vice City, filled with opportunities, danger, and the criminal underworld that Lucia and Jason must navigate.",
    features: [
      "Neon-soaked streets",
      "Vibrant nightlife and clubs",
      "Criminal underworld",
      "Diverse neighborhoods",
      "Atlantic beaches",
    ],
    era: "Modern (2026)",
  },
  {
    id: "leonida",
    name: "Leonida",
    type: "GAME WORLD",
    description:
      "The state housing Vice City and surrounding areas. Leonida is massive, promising to be 2-2.5x larger than GTA V's map. It features diverse biomes, from Vice City's urban sprawl to rural areas and beyond.",
    features: [
      "Vice City urban core",
      "Rural areas and outskirts",
      "Multiple distinct regions",
      "700+ named locations",
      "Diverse environments and biomes",
    ],
    mapSize: "2-2.5x larger than GTA V",
  },
  {
    id: "leonida-keys",
    name: "Leonida Keys",
    type: "REGION",
    description:
      "The keys region of Leonida where Jason originates. A smaller-scale criminal territory before his partnership with Lucia.",
    features: ["Jason's origin location", "Small-time criminal hub", "Island setting"],
    significance: "Jason's homeland and starting point",
  },
];

const worldElements = [
  {
    title: "Story Focus",
    description: "Dual-protagonist narrative centered on romantic criminal partnership",
    tags: ["Lucia & Jason", "Love & Crime", "Emotional Arc"],
  },
  {
    title: "Setting",
    description: "Modern Vice City within the state of Leonida",
    tags: ["Vice City", "Leonida", "2026"],
  },
  {
    title: "Map Scale",
    description: "2-2.5x larger than GTA V with 700+ named locations",
    tags: ["Massive Open World", "Detailed Locations", "Exploration"],
  },
  {
    title: "Themes",
    description: "Survival, ambition, betrayal, and the desperation to escape",
    tags: ["Crime Drama", "Relationships", "Redemption Arc"],
  },
];

export default function LorePage() {
  return (
    <main>
      {/* Header */}
      <header className="border-b border-vc-border py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-vc-cyan">
            Story & World Building
          </div>
          <h1 className="mt-3 font-display text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl">
            GTA 6 Lore & Characters
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-vc-text/90">
            Dive into the characters, locations, and lore shaping Grand Theft Auto VI. From Lucia Caminos to the neon-soaked streets of Vice City.
          </p>
        </div>
      </header>

      {/* World Elements */}
      <section className="border-b border-vc-border py-12 sm:py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-6 sm:grid-cols-2">
            {worldElements.map((el, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-vc-border bg-black/30 p-6"
              >
                <h3 className="font-display text-lg font-bold text-vc-cyan">
                  {el.title}
                </h3>
                <p className="mt-2 text-vc-text/90">{el.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {el.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-vc-cyan/10 px-3 py-1 text-xs font-mono text-vc-cyan"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Characters */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-3xl font-bold uppercase tracking-[0.2em]">
            <span className="text-vc-cyan">{"//"}</span> Characters
          </h2>

          <div className="mt-10 space-y-8">
            {characters.map((char) => (
              <div
                key={char.id}
                className="rounded-xl border border-vc-border bg-black/30 p-8"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <span className="inline-flex rounded-full bg-vc-cyan/20 px-3 py-1 text-xs font-mono font-bold uppercase text-vc-cyan">
                      {char.status}
                    </span>
                    <h3 className="mt-3 font-display text-2xl font-bold text-white">
                      {char.name}
                    </h3>
                    <p className="text-vc-text/70">{char.title}</p>
                  </div>
                  <div className="text-right text-sm text-vc-muted">
                    <p>
                      <strong>Introduced:</strong> {char.introduced}
                    </p>
                    {char.actress && <p>Voice/Actor: {char.actress}</p>}
                    {char.actor && <p>Voice/Actor: {char.actor}</p>}
                  </div>
                </div>

                <p className="mt-4 leading-relaxed text-vc-text">{char.bio}</p>

                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  <div>
                    <h4 className="font-mono text-sm font-bold uppercase text-vc-cyan">
                      Role
                    </h4>
                    <p className="mt-2 text-sm text-vc-text/80">{char.role}</p>
                  </div>
                  {char.significance && (
                    <div>
                      <h4 className="font-mono text-sm font-bold uppercase text-vc-cyan">
                        Significance
                      </h4>
                      <p className="mt-2 text-sm text-vc-text/80">
                        {char.significance}
                      </p>
                    </div>
                  )}
                </div>

                {char.backstory && (
                  <div className="mt-6 border-t border-vc-border/50 pt-6">
                    <h4 className="font-mono text-sm font-bold uppercase text-vc-cyan">
                      Backstory
                    </h4>
                    <ul className="mt-3 space-y-2">
                      {char.backstory.map((point, i) => (
                        <li key={i} className="flex gap-2 text-sm text-vc-text/80">
                          <span className="text-vc-pink">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="border-t border-vc-border py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-3xl font-bold uppercase tracking-[0.2em]">
            <span className="text-vc-cyan">{"//"}</span> Locations
          </h2>

          <div className="mt-10 space-y-8">
            {locations.map((loc) => (
              <div
                key={loc.id}
                className="rounded-xl border border-vc-border bg-black/30 p-8"
              >
                <span className="inline-flex rounded-full bg-vc-cyan/20 px-3 py-1 text-xs font-mono font-bold uppercase text-vc-cyan">
                  {loc.type}
                </span>
                <h3 className="mt-3 font-display text-2xl font-bold text-white">
                  {loc.name}
                </h3>
                <p className="mt-2 leading-relaxed text-vc-text">{loc.description}</p>

                {loc.features && (
                  <div className="mt-6">
                    <h4 className="font-mono text-sm font-bold uppercase text-vc-cyan">
                      Key Features
                    </h4>
                    <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                      {loc.features.map((feature, i) => (
                        <li key={i} className="flex gap-2 text-sm text-vc-text/80">
                          <span className="text-vc-pink">▸</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {loc.mapSize && (
                  <p className="mt-4 text-sm text-vc-cyan font-mono">
                    {loc.mapSize}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-vc-border bg-black/40 py-12 sm:py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
          <h2 className="font-display text-2xl font-bold text-white">
            More Story Details Coming
          </h2>
          <p className="mt-2 text-vc-text/80">
            Trailer 3 will reveal additional characters, locations, and story elements.
          </p>
          <Link
            href="/news"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-vc-cyan px-6 py-3 font-mono text-sm font-bold uppercase tracking-[0.2em] text-black hover:bg-vc-cyan/90 transition-colors"
          >
            Follow Latest News
          </Link>
        </div>
      </section>
    </main>
  );
}
