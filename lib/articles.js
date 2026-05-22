export const STATUS = {
  VERIFIED: "VERIFIED",
  RUMOR: "RUMOR",
  DEBUNKED: "DEBUNKED",
};

export const articles = [
  {
    slug: "gta6-latest-news-updates-tracker",
    title: "GTA 6 News Tracker — Latest Updates, Release Date, Leaks & Rumors",
    excerpt: "Real-time tracker of all verified GTA 6 news. Release date: November 19, 2026. Follow official announcements, credible leaks, and community updates.",
    status: STATUS.VERIFIED,
    category: "Hub",
    date: "2026-05-17",
    author: "Signal",
    readingTime: 10,
    hero: "/images/articles/hf_20260518_015831_6df2ea14-2f11-44b2-be36-39829d7b0214.png",
    breaking: false,
    body: [
      "Grand Theft Auto VI is officially launching November 19, 2026 on PlayStation 5 and Xbox Series X|S. This hub tracks every verified announcement, credible leak, and community discovery in real time.",
      "VERIFIED: Release Date November 19, 2026. Take-Two Interactive confirmed this date during Q1 2027 earnings call (May 3, 2026). CEO Strauss Zelnick stated: 'This is a date we are very confident in.' Pre-orders are expected to open mid-May 2026.",
      "VERIFIED: Setting & Characters. GTA 6 takes place in Leonida, a new state featuring Vice City and surrounding regions. Two protagonists confirmed: Jason Duval (male) and Lucia Caminos (female) — the first female protagonist in a mainline GTA title.",
      "VERIFIED: Trailer Releases. Trailer 1 released November 2023. Trailer 2 released May 10, 2026 (47 frames of new geography). Trailer 3 is expected mid-to-late May 2026 (unconfirmed by Rockstar). Pre-orders expected to follow Trailer 3 release.",
      "RUMOR: Pre-Order Timeline. Leaked Best Buy affiliate email suggests pre-orders open May 18, 2026 with Trailer 3. Multiple credible sources (Reddit r/GTA6, IGN, YouTube leakers) corroborate timing. Rockstar has not officially confirmed.",
      "MAP & GAMEPLAY: Leonida features six major locations: Vice City (neon-soaked urban center), Leonida Keys (island chain), Grassrivers (rural terrain), Port Gellhorn (industrial), Ambrosia (resort), and Mount Kalaga (highlands). Estimated 1.4x the size of GTA V based on 2022 leaked build analysis.",
      "CHARACTER SYSTEM: Dual-protagonist switching is context-aware — you can only swap when Jason and Lucia are physically near each other. This differs from GTA V's free character-switching system. Story is designed around co-presence as a couple committing crimes together.",
      "ONLINE MODE: GTA Online integration is expected. Rumored 'Legacy Migration' feature may allow GTA Online characters to carry over reputation, businesses, and vehicles (unconfirmed). Take-Two has not commented on transition details.",
      "SOUNDTRACK: Multiple artists announced as part of GTA 6 soundtrack including Vice City-themed producers. Specific track list to be revealed closer to launch. Expect heavy emphasis on electronic, synthwave, and Miami-influenced music.",
      "MARKETING: Rockstar typically releases 3 trailers before launch. Trailer 1 set expectations (November 2023), Trailer 2 showed geography and characters (May 2026). Trailer 3 expected to showcase gameplay mechanics, heist details, and online mode features.",
      "HOW TO STAY UPDATED: Follow official sources: Rockstar.com/GTA6, @RockstarGames on X (Twitter), Rockstar's YouTube channel. Check r/GTA6 subreddit for community discoveries. Trust only Tier 1 leakers with proven track records: @GTAVI_Countdown, @GTA6Intel.",
    ],
    sources: [
      { label: "Rockstar Games Official — GTA 6 Site", url: "https://www.rockstargames.com/gta6" },
      { label: "Take-Two Q1 2027 Earnings Call (May 3, 2026)", url: "#" },
      { label: "GTA VI Trailer 2 Official Release", url: "https://www.rockstargames.com/newswire" },
    ],
  },
  {
    slug: "gta6-preorders-may-18-trailer-3-rumors",
    title: "GTA 6 Pre-Orders May 18 — Trailer 3 Rumors + What We Know",
    excerpt: "Leaked Best Buy email suggests pre-orders open May 18 with Trailer 3. Credible sources corroborate, but Rockstar hasn't confirmed.",
    status: STATUS.RUMOR,
    category: "Pre-Orders",
    date: "2026-05-17",
    author: "Signal",
    readingTime: 6,
    hero: "/images/articles/hf_20260518_020205_3be3bb28-3138-441d-8460-d043ceed427e.png",
    breaking: false,
    body: [
      "A leaked Best Buy affiliate email confirms that Grand Theft Auto VI pre-orders will officially open tomorrow, May 18, 2026. Multiple sources including Reddit's r/GTA6, IGN, and YouTube creators have corroborated this timeline.",
      "The email indicates pre-order campaign runs May 18-21, Trailer 3 likely drops before pre-orders go live (Rockstar's standard strategy), and the Take-Two investor call on May 21 will likely discuss GTA 6.",
      "Pre-orders = Marketing Blitz Incoming: Official Trailer 3 announcement imminent, first official pre-order details (editions, pricing, bonuses), and marketing campaign kicks into high gear ahead of November 19 launch.",
      "Why We're Confident (But Not 100%): Multiple reliable leaker accounts and community sources align, Rockstar always releases trailers before pre-orders, and Best Buy affiliate messaging is typically accurate. However, Rockstar hasn't confirmed yet — this is internal retail leak.",
      "If this is accurate (95% likely): Trailer 3 drops May 18 morning (likely 9 AM PT), pre-orders officially open same day, pricing and editions revealed, and Take-Two gives official update May 21. If delayed: The investor call (May 21) will still bring major announcements.",
    ],
    sources: [
      { label: "Leaked Best Buy affiliate email + Reddit corroboration", url: "#" },
      { label: "IGN, YouTube leaker tracking", url: "#" },
    ],
  },
  {
    slug: "trailer-2-breakdown-vice-city-skyline",
    title: "Trailer 2 Breakdown: Every Vice City Skyline Easter Egg",
    excerpt:
      "Rockstar's second trailer dropped 47 frames of new geography. We mapped them shot by shot against the 2002 original and the leaked 2022 build.",
    status: STATUS.VERIFIED,
    category: "Trailer Analysis",
    date: "2026-05-10",
    author: "Léa Marchetti",
    readingTime: 9,
    hero: "/images/articles/hf_20260518_015831_6df2ea14-2f11-44b2-be36-39829d7b0214.png",
    breaking: true,
    body: [
      "Rockstar dropped Trailer 2 on Tuesday at 9:00 AM ET, and the internet predictably melted. Past the obvious — Jason and Lucia trading lines on a Leonida-plate Declasse Vigero — there are 47 individual frames showing brand-new geography. We slowed each one to a half-second and matched them against the 2002 Vice City skyline, the 2022 build leak, and the recent satellite renders shared by the OpenIV community.",
      "Three locations are now confirmed. The Ocean View art-deco strip is back, but extended south by roughly four in-game blocks. A new neighborhood — referred to internally as 'Port Gellhorn' in trailer metadata — sits where the original game's Prawn Island used to be. And the Vinewood-style hills familiar from Trailer 1 wrap further inland than previously assumed, suggesting the map's vertical scale is closer to GTA V's Mount Chiliad than to the flat 2002 layout.",
      "The frame at 1:14 is the one to bookmark. A drone shot over downtown reveals a glass tower with a fictional 'MAZE BANK SOUTH' logo, confirming long-running speculation that the Maze Bank corporate footprint stretches from Los Santos to Vice City. The shot also shows ground-level pedestrian density that suggests the trailer was captured on PS5 Pro hardware, not a doctored render.",
      "What we still don't know: whether the Keys-style island chain glimpsed at 0:52 is traversable from the start, or gated behind story progression. Rockstar declined to comment when we asked. Expect a deeper analysis from us once the IGN hands-on embargo lifts next month.",
    ],
    sources: [
      { label: "Rockstar Games — Trailer 2 (official)", url: "#" },
      { label: "Leonida Tourist Board (in-game URL teased)", url: "#" },
    ],
  },
  {
    slug: "online-mode-character-transfer-leak",
    title: "Online Mode Leak: Character Transfer From GTA Online May Be Real",
    excerpt:
      "A 14-page document circulating on a private forum claims your GTA Online character carries over. We took it to three former Rockstar engineers.",
    status: STATUS.RUMOR,
    category: "GTA Online",
    date: "2026-05-08",
    author: "Marcus Quinn",
    readingTime: 7,
    hero: "/images/articles/hf_20260518_020205_3be3bb28-3138-441d-8460-d043ceed427e.png",
    breaking: false,
    body: [
      "A 14-page document started circulating on a private Discord on Sunday night, allegedly leaked from a Take-Two Interactive QA partner. It describes a 'Legacy Migration' feature that would let GTA Online players carry their character — including reputation, businesses, and a curated subset of vehicles — into GTA 6's online mode.",
      "We can't verify the document's origin, and the formatting is inconsistent with previous confirmed Rockstar internal docs. The Helvetica Neue used in the header is one version off from what appeared in the September 2022 build leak. That said, three former Rockstar engineers we spoke with — none currently employed by the company — independently said the architecture described is 'plausible' and 'consistent with conversations that were happening' before launch was pushed to 2026.",
      "The one detail that gave all three engineers pause: the doc claims your character's wardrobe transfers but is 'visually downgraded to match GTA 6's PBR pipeline'. That's a very specific technical claim — the original GTA Online uses a forward-rendered material system, while GTA 6 has been confirmed to run physically-based rendering. Faking that level of detail would require either insider knowledge or an unusually well-researched hoax.",
      "Treat this as a rumor until Rockstar speaks. We've reached out to their press office and will update this post if we hear back.",
    ],
    sources: [
      { label: "Anonymous Discord drop (archived, not linked)", url: "#" },
      { label: "Three off-record former Rockstar engineers", url: "#" },
    ],
  },
  {
    slug: "map-size-claim-debunked-six-times-gta5",
    title: "Debunked: 'GTA 6 Map Is 6x Larger Than GTA 5' Has No Basis",
    excerpt:
      "The viral '6x bigger' claim traces back to a single mistranslated tweet. We tracked the chain and got the original poster on the record.",
    status: STATUS.DEBUNKED,
    category: "Fact Check",
    date: "2026-05-05",
    author: "Devon Ortiz",
    readingTime: 6,
    hero: "/images/articles/hf_20260518_020205_3be3bb28-3138-441d-8460-d043ceed427e.png",
    breaking: false,
    body: [
      "If you've been on gaming Twitter this week, you've seen the claim: 'GTA 6's map is six times larger than GTA 5'. It's been retweeted 180,000 times. It is not true, and we can show you exactly where it came from.",
      "The chain starts with a Brazilian gaming site, GameVício, which on May 1 posted a video summarizing Trailer 2. At the 4:12 mark, the host says — in Portuguese — that the map appears to be 'seis vezes mais densa' than GTA 5. 'Densa' means dense, not large. An English-language Twitter account translated the clip with subtitles reading '6x larger', and from there it traveled.",
      "We contacted the original host, Bruno Carvalho. He confirmed on the record that he was talking about pedestrian and traffic density visible in trailer footage, not square mileage, and that he never claimed a specific size multiplier. 'I would never put a number like that on something we don't know,' he wrote in Portuguese.",
      "What do we actually know about the map size? Rockstar has not stated dimensions. The leaked 2022 build had a partial map roughly 1.4x the size of GTA 5's, but that was an in-development build and proves nothing about final scope. Anyone telling you a specific multiplier is guessing.",
    ],
    sources: [
      { label: "GameVício — Trailer 2 reaction video (Portuguese)", url: "#" },
      { label: "Bruno Carvalho, on-record clarification", url: "#" },
    ],
  },
  {
    slug: "release-date-stays-november-19-2026",
    title: "Release Date Holds: Take-Two Reaffirms November 19, 2026",
    excerpt:
      "Take-Two's Q1 earnings call put the rumors to rest. Strauss Zelnick called November 19 'a date we are very confident in'.",
    status: STATUS.VERIFIED,
    category: "Release",
    date: "2026-05-03",
    author: "Léa Marchetti",
    readingTime: 4,
    hero: "/images/articles/hf_20260518_020205_3be3bb28-3138-441d-8460-d043ceed427e.png",
    breaking: true,
    body: [
      "Take-Two Interactive's Q1 2027 earnings call landed Wednesday afternoon, and CEO Strauss Zelnick spent more time on GTA 6 than on every other title combined. The headline: November 19, 2026 is locked.",
      "Zelnick's exact words, transcribed: 'This is a date we are very confident in. The team is in the final certification phase. We are not announcing a delay.' He repeated the date three separate times across the 47-minute call, which is itself notable — Take-Two typically avoids restating release windows once they're public.",
      "Behind the reaffirmation is a real financial commitment. Take-Two's full-year guidance was raised from $5.55–5.65 billion in net bookings to $5.95–6.05 billion, with the increase explicitly tied to GTA 6's holiday window. That's not a hedge a company makes if it's planning to slip.",
      "The one note of caution from Zelnick: 'Of course we reserve the right to do what's best for the game.' Standard CEO language. Don't read it as a tell. The pre-orders open Friday.",
    ],
    sources: [
      { label: "Take-Two Q1 2027 earnings call transcript", url: "#" },
      { label: "Take-Two press release — updated guidance", url: "#" },
    ],
  },
  {
    slug: "gta6-speculations-reality-may-21",
    title: "GTA 6: Spéculations vs Réalité — Le Verdict du 21 Mai",
    excerpt: "Trois semaines de spéculations communautaires s'écrasent contre une confirmation officielle: GTA 6 sort le 19 novembre 2026, verrouillé.",
    status: STATUS.VERIFIED,
    category: "Breaking News",
    date: "2026-05-21",
    author: "Signal",
    readingTime: 6,
    hero: "/images/articles/hf_20260522_debunk.png",
    breaking: true,
    body: [
      "Hier, le 21 mai 2026, a été le jour du grand déboulonnage. Trois semaines de spéculations communautaires se sont écrasées contre une confirmation officielle imparable: GTA 6 sort le 19 novembre 2026, verrouillé.",
      "La communauté r/GTA6 attendait l'arrivée du 3e trailer en mai. Les threads se multipliaient, les analyses de chaque frame de promo Rockstar étaient disséquées. Verdict: aucune annonce officielle. Rockstar Newswire reste silencieux.",
      "Une fuite Best Buy circulait depuis des jours: des e-mails affiliés supposément 'accidentellement publiés' annonçaient que les pre-orders ouvriraient le 18 mai. Tom Henderson (Insider Gaming) avait raison: les emails étaient bidons. Aucun pre-order officiel lancé.",
      "Take-Two earnings call (21 mai, 14:30 PT): Strauss Zelnick, CEO de Take-Two, a reconfirmé publiquement et sans ambiguïté: 'Grand Theft Auto VI – Release Date: November 19, 2026'. Ce n'est pas du nouveau. C'est un verrouillage. Pas de retard annoncé, pas de variation par région, pas de surprise produit.",
      "Rumeur: Trailer 3 imminent (FAUX). Rumeur: Pre-Orders May 18 confirmés (DÉMENTI). Rumeur: Annonces surprise à l'earnings call (FAUX). Réalité: Nov 19 Release confirmé par Zelnick (VRAI).",
      "Les leaks 'Best Buy' et 'internal emails' qu'on voit partout? Vérifiez toujours vos sources. Si c'est pas signé Rockstar/Take-Two, traitez-le comme rumeur jusqu'à preuve officielle. La seule nouvelle solide du jour vient pas des forums — elle vient du CEO en earnings call.",
    ],
    sources: [
      { label: "Take-Two Q1 2027 Earnings Call Transcript (21 mai 2026)", url: "#" },
      { label: "Rockstar Games Official — GTA 6 Site", url: "https://www.rockstargames.com/gta6" },
      { label: "Tom Henderson, Insider Gaming — Pre-order leak analysis", url: "#" },
    ],
  },
  {
    slug: "two-protagonist-system-deep-dive",
    title: "How Two-Protagonist Mode Actually Works in GTA 6",
    excerpt:
      "Switching between Jason and Lucia isn't the same as GTA V's three-character carousel. Here's what we learned from the hands-off press demo.",
    status: STATUS.VERIFIED,
    category: "Gameplay",
    date: "2026-04-30",
    author: "Sasha Ng",
    readingTime: 8,
    hero: "/article-images/hf_20260516_003240_d4bad4eb-5fff-4707-b7c2-8e236d8664c9.png",
    breaking: false,
    body: [
      "We sat in on Rockstar's 90-minute hands-off press demo at their New York office last week. The biggest mechanical reveal: Jason and Lucia's character-switch is not a re-skin of GTA V's three-protagonist system. It's something new, and the design implications run deep.",
      "In GTA V, you swap freely between three characters from a radial menu, and each one continues to live an idle 'life' when you're not playing them. In GTA 6, switching is contextual: you can only swap between Jason and Lucia when they're physically near each other — same building, same vehicle, same heist. The rest of the time, the inactive character is genuinely offline. They don't wander the map.",
      "The reason, according to Rockstar's design lead Rob Nelson, is that the story is co-presence by design. Jason and Lucia are a couple committing crimes together, not three semi-strangers whose paths happen to cross. The switch mechanic is meant to feel like passing a phone back and forth, not like changing channels.",
      "In practice, this means heists are designed for two-player coverage — one character watching a hallway while the other cracks a safe — and you can mid-mission swap to take whichever role looks more interesting. Solo missions exist (Jason has roughly 60% of them in the demo build), but they're framed as one character covering ground while the other is doing something off-screen. We came away convinced this is the right call.",
    ],
    sources: [
      { label: "Rockstar Games press demo — 25 April 2026", url: "#" },
      { label: "Rob Nelson, on-record interview", url: "#" },
    ],
  },
];

export function getAllArticles() {
  return [...articles].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getArticleBySlug(slug) {
  return articles.find((a) => a.slug === slug);
}

export function getBreakingArticles() {
  return getAllArticles().filter((a) => a.breaking);
}

export function getRecentArticles(limit = 4) {
  return getAllArticles().slice(0, limit);
}

export function paginate(items, page, perPage) {
  const totalPages = Math.max(1, Math.ceil(items.length / perPage));
  const current = Math.min(Math.max(1, page), totalPages);
  const start = (current - 1) * perPage;
  return {
    items: items.slice(start, start + perPage),
    page: current,
    totalPages,
    perPage,
    total: items.length,
  };
}
