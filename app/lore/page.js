import Link from "next/link";
import Image from "next/image";
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
    image: "/images/people/Lucia Caminos/Lucia_Caminos_01.jpg",
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
    image: "/images/people/Jason Duval/Jason_Duval_01.jpg",
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
    id: "raul",
    name: "Raul Bautista",
    title: "Major Character",
    status: "IMPORTANT",
    image: "/images/people/Raul Bautista/Raul_Bautista_01.jpg",
    bio: "A seasoned bank robber with experience, confidence, and cunning. Raul is always hunting for talent ready to take the risks that bring the biggest rewards. His recklessness raises the stakes with every score.",
    role: "Career Criminal & Crew Leader",
    backstory: [
      "Experienced and seasoned bank robber",
      "Recruits talent for major heists",
      "Known for confidence and charm",
      "Raises stakes with every operation",
    ],
    introduced: "Trailer 2",
    significance: "Major player in Vice City criminal underworld",
  },
  {
    id: "brian",
    name: "Brian Heder",
    title: "Supporting Character",
    status: "IMPORTANT",
    image: "/images/people/Brian Heder/Brian_Heder_01.jpg",
    bio: "Appears as Jason's landlord in the trailers, but 'there's more to it than meets the eye' according to official descriptions. His role in the story expands beyond simple landlord interactions.",
    role: "Jason's landlord with hidden depths",
    backstory: [
      "Introduced as Jason's landlord",
      "More complex role than initially apparent",
      "Connected to Jason's criminal activities",
    ],
    introduced: "Trailer 1",
    significance: "Connected to Jason's criminal network",
  },
  {
    id: "cal",
    name: "Cal Hampton",
    title: "Supporting Character",
    status: "IMPORTANT",
    image: "/images/people/Cal Hampton/Cal_Hampton_01.jpg",
    bio: "An internet conspiracy theorist with a skeptical worldview. Cal is a close friend of Jason and fellow associate of Brian Heder. He prefers to stay home rather than venture into danger.",
    role: "Jason's Friend & Conspiracy Theorist",
    backstory: [
      "Childhood friend of Jason Duval",
      "Internet conspiracy theorist with skeptical worldview",
      "Associate of Brian Heder",
      "Prefers staying home over taking risks",
    ],
    introduced: "Trailer 2",
    significance: "Close confidant in Jason's network",
  },
  {
    id: "boobie",
    name: "Boobie Ike",
    title: "Supporting Character",
    status: "IMPORTANT",
    image: "/images/people/Boobie Ike/Boobie_Ike_01.jpg",
    bio: "A prominent strip club mogul and key figure in Vice City's nightlife and underground economy. Boobie Ike controls significant territory and influence in the criminal underworld.",
    role: "Strip Club Mogul",
    backstory: [
      "Runs multiple strip clubs in Vice City",
      "Significant power in Vice City underworld",
      "Connected to main characters through business dealings",
      "Controls valuable territory and assets",
    ],
    introduced: "Trailer 2",
    significance: "Key power broker in Vice City",
  },
  {
    id: "drequan",
    name: "DreQuan Priest",
    title: "Supporting Character",
    status: "IMPORTANT",
    image: "/images/people/DreQuan Priest/DreQuan_Priest_01.jpg",
    bio: "A notable figure in Vice City's criminal ecosystem. DreQuan plays a significant role in the power dynamics of the city, representing one of many players in Lucia and Jason's world.",
    role: "Vice City Operator",
    backstory: [
      "Established player in Vice City crime scene",
      "Connected to multiple criminal factions",
      "Part of Vice City power structure",
      "Plays pivotal role in storyline",
    ],
    introduced: "Trailer 2",
    significance: "Key figure in Vice City ecosystem",
  },
  {
    id: "real",
    name: "Real Dimez",
    title: "Supporting Character",
    status: "IMPORTANT",
    image: "/images/people/Real Dimez/Real_Dimez_01.jpg",
    bio: "A female rap duo and cultural influencers in Vice City. Real Dimez represents the modern, vibrant entertainment and music scene that defines contemporary Vice City.",
    role: "Rap Duo & Cultural Icons",
    backstory: [
      "Female rap duo in Vice City",
      "Cultural influencers and musicians",
      "Connected to Vice City's entertainment scene",
      "Part of contemporary Vice City culture",
    ],
    introduced: "Trailer 2",
    significance: "Represents modern Vice City culture",
  },
];

const locations = [
  {
    id: "vice-city",
    name: "Vice City",
    type: "PRIMARY LOCATION",
    image: "/images/places/Vice City/Vice_City_01.jpg",
    description:
      "The neon-soaked heart of Leonida. Vice City is the glamorous, dangerous epicenter of the game, filled with opportunities, danger, and the criminal underworld that Lucia and Jason must navigate.",
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
    id: "leonida-keys",
    name: "Leonida Keys",
    type: "REGION",
    image: "/images/places/Leonida Keys/Leonida_Keys_01.jpg",
    description:
      "The keys region of Leonida where Jason originates. A smaller-scale criminal territory before his partnership with Lucia.",
    features: ["Jason's origin location", "Small-time criminal hub", "Island setting"],
    significance: "Jason's homeland and starting point",
  },
  {
    id: "ambrosia",
    name: "Ambrosia",
    type: "REGION",
    image: "/images/places/Ambrosia/Ambrosia_01.jpg",
    description: "A distinct region within Leonida offering its own unique flavor and opportunities.",
    features: ["Distinct location", "Opportunities and danger", "Part of Leonida"],
    significance: "Important location in game world",
  },
  {
    id: "port-gellhorn",
    name: "Port Gellhorn",
    type: "LOCATION",
    image: "/images/places/Port Gellhorn/Port_Gellhorn_01.jpg",
    description: "A port region in Leonida. Strategic location with connections to the wider criminal ecosystem.",
    features: ["Port access", "Trade and smuggling hub", "Coastal location"],
    significance: "Strategic location for operations",
  },
  {
    id: "mount-kalaga",
    name: "Mount Kalaga National Park",
    type: "NATURAL AREA",
    image: "/images/places/Mount Kalaga National Park/Mount_Kalaga_01.jpg",
    description:
      "A natural area within Leonida. Provides contrast to the urban environments of Vice City.",
    features: [
      "Natural environment",
      "National park",
      "Exploration opportunities",
    ],
    significance: "Exploration and variety in map",
  },
  {
    id: "grassrivers",
    name: "Grassrivers",
    type: "REGION",
    image: "/images/places/Grassrivers/Grassrivers_01.jpg",
    description:
      "Another distinct region of Leonida with its own character and opportunities.",
    features: ["Distinct region", "Unique environments", "Exploration zones"],
    significance: "Part of larger Leonida map",
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

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {characters.map((char) => (
              <div
                key={char.id}
                className="rounded-xl border border-vc-border bg-black/30 overflow-hidden hover:border-vc-cyan/50 transition-colors"
              >
                {/* Character Image */}
                {char.image && (
                  <div className="relative w-full h-64 bg-black/60">
                    <Image
                      src={char.image}
                      alt={char.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                {/* Character Info */}
                <div className="p-6">
                  <span className="inline-flex rounded-full bg-vc-cyan/20 px-3 py-1 text-xs font-mono font-bold uppercase text-vc-cyan">
                    {char.status}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-bold text-white">
                    {char.name}
                  </h3>
                  <p className="text-vc-text/70">{char.title}</p>

                  <p className="mt-4 leading-relaxed text-vc-text/90">
                    {char.bio}
                  </p>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div>
                      <h4 className="font-mono text-sm font-bold uppercase text-vc-cyan">
                        Role
                      </h4>
                      <p className="mt-2 text-sm text-vc-text/80">
                        {char.role}
                      </p>
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
                          <li
                            key={i}
                            className="flex gap-2 text-sm text-vc-text/80"
                          >
                            <span className="text-vc-pink">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-4 flex flex-wrap gap-2 text-xs text-vc-muted">
                    {char.actress && <span>🎭 {char.actress}</span>}
                    {char.actor && <span>🎭 {char.actor}</span>}
                    {char.introduced && (
                      <span>📺 {char.introduced}</span>
                    )}
                  </div>
                </div>
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

          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {locations.map((loc) => (
              <div
                key={loc.id}
                className="rounded-xl border border-vc-border bg-black/30 overflow-hidden hover:border-vc-cyan/50 transition-colors"
              >
                {/* Location Image */}
                {loc.image && (
                  <div className="relative w-full h-64 bg-black/60">
                    <Image
                      src={loc.image}
                      alt={loc.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}

                {/* Location Info */}
                <div className="p-6">
                  <span className="inline-flex rounded-full bg-vc-cyan/20 px-3 py-1 text-xs font-mono font-bold uppercase text-vc-cyan">
                    {loc.type}
                  </span>
                  <h3 className="mt-3 font-display text-2xl font-bold text-white">
                    {loc.name}
                  </h3>
                  <p className="mt-2 leading-relaxed text-vc-text/90">
                    {loc.description}
                  </p>

                  {loc.features && (
                    <div className="mt-6">
                      <h4 className="font-mono text-sm font-bold uppercase text-vc-cyan">
                        Key Features
                      </h4>
                      <ul className="mt-3 space-y-2">
                        {loc.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex gap-2 text-sm text-vc-text/80"
                          >
                            <span className="text-vc-pink">▸</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {loc.significance && (
                    <p className="mt-4 text-sm text-vc-cyan font-mono">
                      {loc.significance}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="border-t border-vc-border py-16 sm:py-20 bg-black/30">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-display text-3xl font-bold uppercase tracking-[0.2em]">
            <span className="text-vc-cyan">{"//"}</span> Gallery
          </h2>

          {/* Character Gallery */}
          <div className="mt-10">
            <h3 className="font-mono text-sm uppercase tracking-[0.3em] text-vc-cyan mb-6">
              Character Shots
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {[
                { src: "/images/people/Lucia Caminos/Lucia_Caminos_02.jpg", alt: "Lucia" },
                { src: "/images/people/Jason Duval/Jason_Duval_02.jpg", alt: "Jason" },
                { src: "/images/people/Raul Bautista/Raul_Bautista_02.jpg", alt: "Raul" },
                { src: "/images/people/Brian Heder/Brian_Heder_02.jpg", alt: "Brian" },
                { src: "/images/people/Cal Hampton/Cal_Hampton_02.jpg", alt: "Cal" },
                { src: "/images/people/Boobie Ike/Boobie_Ike_02.jpg", alt: "Boobie" },
                { src: "/images/people/DreQuan Priest/DreQuan_Priest_02.jpg", alt: "DreQuan" },
                { src: "/images/people/Real Dimez/Real_Dimez_02.jpg", alt: "Real" },
              ].map((img, idx) => (
                <div
                  key={idx}
                  className="rounded-lg overflow-hidden border border-vc-border/50 hover:border-vc-cyan/50 transition-colors group cursor-pointer"
                >
                  <div className="relative w-full h-56 bg-black/60 overflow-hidden">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Location Gallery */}
          <div className="mt-12">
            <h3 className="font-mono text-sm uppercase tracking-[0.3em] text-vc-cyan mb-6">
              Location Shots
            </h3>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                { src: "/images/places/Vice City/Vice_City_02.jpg", alt: "Vice City" },
                { src: "/images/places/Vice City/Vice_City_04.jpg", alt: "Vice City" },
                { src: "/images/places/Leonida Keys/Leonida_Keys_02.jpg", alt: "Leonida Keys" },
                { src: "/images/places/Mount Kalaga National Park/Mount_Kalaga_National_Park_02.jpg", alt: "Mount Kalaga" },
                { src: "/images/places/Port Gellhorn/Port_Gellhorn_02.jpg", alt: "Port Gellhorn" },
                { src: "/images/places/Ambrosia/Ambrosia_02.jpg", alt: "Ambrosia" },
              ].map((img, idx) => (
                <div
                  key={idx}
                  className="rounded-lg overflow-hidden border border-vc-border/50 hover:border-vc-cyan/50 transition-colors group cursor-pointer"
                >
                  <div className="relative w-full h-48 bg-black/60 overflow-hidden">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                </div>
              ))}
            </div>
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
