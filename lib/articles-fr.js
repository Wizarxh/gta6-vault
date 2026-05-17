export const STATUS = {
  VERIFIED: "VÉRIFIÉE",
  RUMOR: "RUMEUR",
  DEBUNKED: "DÉMENTIE",
};

export const articlesFr = [
  {
    slug: "trailer-2-breakdown-vice-city-skyline",
    title: "Décorticage du Trailer 2 : Tous les Easter Eggs de Vice City",
    excerpt:
      "Le deuxième trailer de Rockstar contient 47 images de nouvelle géographie. On les a analysées image par image comparées à l'original de 2002 et au build leaké de 2022.",
    status: STATUS.VERIFIED,
    category: "Analyse de Trailer",
    date: "2026-05-10",
    author: "Léa Marchetti",
    readingTime: 9,
    hero: "/article-images/hf_20260516_002131_03ef7b87-e3f7-428b-919a-a71f99ff2757.png",
    breaking: true,
    body: [
      "Rockstar a sorti le Trailer 2 mardi à 9h00 ET, et Internet a prévisiblement explosé. Au-delà de l'évident — Jason et Lucia qui se parlent sur une Declasse Vigero aux plaques Leonida — il y a 47 images individuelles montrant une géographie complètement nouvelle. On a ralenti chacune d'elles et on les a comparées au skyline de Vice City 2002, au build leaké de 2022, et aux rendus satellite partagés récemment par la communauté OpenIV.",
      "Trois localités sont maintenant confirmées. La bande art-déco d'Ocean View est de retour, mais étendue vers le sud d'environ quatre pâtés de maisons dans le jeu. Un nouveau quartier — appelé 'Port Gellhorn' dans les métadonnées du trailer — se trouve où se trouvait Prawn Island dans le jeu original. Et les collines style Vinewood familières du Trailer 1 s'étendent plus loin vers l'intérieur que prévu, suggérant que l'échelle verticale de la map est plus proche du Mont Chiliad de GTA V que du layout plat de 2002.",
      "L'image à 1:14 est celle à mettre en marque-page. Un plan aérien du centre-ville révèle une tour en verre avec un logo fictif 'MAZE BANK SOUTH', confirmant la spéculation de longue date que l'empreinte corporative de Maze Bank s'étend de Los Santos à Vice City. Le plan montre aussi une densité de piétons au niveau du sol qui suggère que le trailer a été capturé sur du matériel PS5 Pro, pas un rendu retouché.",
      "Ce qu'on ne sait toujours pas : si la chaîne d'îles style Keys entrevue à 0:52 est traversable dès le départ, ou verrouillée derrière la progression de l'histoire. Rockstar a refusé de commenter quand on a posé la question. Attendez une analyse plus approfondie de notre part une fois que l'embargo des mains-libres d'IGN est levé le mois prochain.",
    ],
    sources: [
      { label: "Rockstar Games — Trailer 2 (officiel)", url: "#" },
      { label: "Leonida Tourist Board (URL in-game teasée)", url: "#" },
    ],
  },
  {
    slug: "online-mode-character-transfer-leak",
    title: "Leak du Mode Online : Le Transfer de Personnage de GTA Online Serait Réel",
    excerpt:
      "Un document de 14 pages circulant sur un forum privé prétend que votre personnage GTA Online se transfère. On l'a montré à trois anciens ingénieurs de Rockstar.",
    status: STATUS.RUMOR,
    category: "GTA Online",
    date: "2026-05-08",
    author: "Marcus Quinn",
    readingTime: 7,
    hero: "/article-images/hf_20260516_002232_a9347cc8-b780-4768-b587-72566dedd2bb.png",
    breaking: false,
    body: [
      "Un document de 14 pages a commencé à circuler sur un Discord privé dimanche soir, prétendument leaké d'un partenaire QA de Take-Two Interactive. Il décrit une fonctionnalité 'Legacy Migration' qui permettrait aux joueurs de GTA Online de transférer leur personnage — incluant la réputation, les entreprises, et un sous-ensemble sélectionné de véhicules — dans le mode online de GTA 6.",
      "On ne peut pas vérifier l'origine du document, et le formatage est incohérent avec les documents internes de Rockstar confirmés précédemment. L'Helvetica Neue utilisée dans l'en-tête est une version décalée de celle qui est apparue dans le leak du build de septembre 2022. Cela dit, trois anciens ingénieurs de Rockstar qu'on a interviewés — aucun actuellement employé par l'entreprise — ont indépendamment dit que l'architecture décrite est 'plausible' et 'cohérente avec les conversations qui se déroulaient' avant le report du lancement à 2026.",
      "Le détail qui a fait hésiter tous les trois ingénieurs : le doc prétend que la garde-robe de votre personnage se transfère mais est 'visuellement dégradée pour correspondre au pipeline PBR de GTA 6'. C'est une revendication technique très spécifique — le GTA Online original utilise un système de matériaux forward-rendered, tandis que GTA 6 a été confirmé comme utilisant une rendu physiquement basée. Inventer ce niveau de détail nécessiterait soit une connaissance d'initié, soit un canular exceptionnellement bien documenté.",
      "Traitez ceci comme une rumeur jusqu'à ce que Rockstar se prononce. On a contacté leur bureau de presse et on mettra à jour ce post si on a des nouvelles.",
    ],
    sources: [
      { label: "Anonymous Discord drop (archivé, non lié)", url: "#" },
      { label: "Trois anciens ingénieurs Rockstar off-record", url: "#" },
    ],
  },
  {
    slug: "map-size-claim-debunked-six-times-gta5",
    title: "Démentie : 'La Map de GTA 6 Est 6 Fois Plus Grande que GTA 5' N'a Aucun Fondement",
    excerpt:
      "La revendication virale '6x plus grande' remonte à un seul tweet mal traduit. On a tracé la chaîne et on a eu le posteur original sur dossier.",
    status: STATUS.DEBUNKED,
    category: "Vérification des Faits",
    date: "2026-05-05",
    author: "Devon Ortiz",
    readingTime: 6,
    hero: "/article-images/hf_20260516_002515_53e4a8aa-1295-49e3-bd75-2400d180d322.png",
    breaking: false,
    body: [
      "Si vous avez été sur Twitter gaming cette semaine, vous avez vu la revendication : 'La map de GTA 6 est six fois plus grande que GTA 5'. Elle a été retweetée 180 000 fois. Ce n'est pas vrai, et on peut vous montrer exactement d'où ça vient.",
      "La chaîne commence par un site de jeux brésilien, GameVício, qui le 1er mai a posté une vidéo résumant le Trailer 2. Au marqueur 4:12, l'animateur dit — en portugais — que la map semble être 'seis vezes mais densa' que GTA 5. 'Densa' signifie dense, pas grande. Un compte Twitter anglophone a traduit le clip avec des sous-titres lisant '6x plus grande', et à partir de là, ça s'est répandu.",
      "On a contacté l'animateur original, Bruno Carvalho. Il a confirmé sur dossier qu'il parlait de la densité des piétons et du trafic visible dans le footage du trailer, pas de la superficie, et qu'il n'a jamais affirmé un multiplicateur spécifique. 'Je ne mettrai jamais un nombre comme ça sur quelque chose qu'on ne connaît pas,' a-t-il écrit en portugais.",
      "Qu'est-ce qu'on sait vraiment sur la taille de la map ? Rockstar n'a pas énoncé de dimensions. Le build leaké de 2022 avait une map partielle à peu près 1,4 fois la taille de GTA 5, mais c'était un build en développement et ne prouve rien sur la portée finale. Quiconque vous donne un multiplicateur spécifique devine.",
    ],
    sources: [
      { label: "GameVício — Vidéo de réaction du Trailer 2 (Portugais)", url: "#" },
      { label: "Bruno Carvalho, clarification sur dossier", url: "#" },
    ],
  },
  {
    slug: "release-date-stays-november-19-2026",
    title: "Date de Sortie Confirmée : Take-Two Réaffirme le 19 Novembre 2026",
    excerpt:
      "L'appel aux résultats Q1 de Take-Two a mis fin aux rumeurs. Strauss Zelnick a appelé le 19 novembre 'une date dans laquelle nous sommes très confiants'.",
    status: STATUS.VERIFIED,
    category: "Sortie",
    date: "2026-05-03",
    author: "Léa Marchetti",
    readingTime: 4,
    hero: "/article-images/hf_20260516_003146_bfaf6e13-b353-4f0d-9631-6fa598c44834.png",
    breaking: true,
    body: [
      "L'appel aux résultats Q1 2027 de Take-Two Interactive s'est déroulé mercredi après-midi, et le PDG Strauss Zelnick a consacré plus de temps à GTA 6 qu'à tous les autres titres réunis. Le titre : le 19 novembre 2026 est verrouillé.",
      "Les mots exacts de Zelnick, retranscrits : 'C'est une date dans laquelle nous sommes très confiants. L'équipe est en phase de certification finale. On n'annonce pas de report.' Il a répété la date trois fois séparées au cours de l'appel de 47 minutes, ce qui est en soi remarquable — Take-Two évite généralement de réitérer les fenêtres de sortie une fois qu'elles sont publiques.",
      "Derrière la réaffirmation se trouve un véritable engagement financier. Les prévisions de l'année complète de Take-Two ont été augmentées de 5,55–5,65 milliards de dollars en réservations nettes à 5,95–6,05 milliards, avec l'augmentation explicitement liée à la fenêtre vacances de GTA 6. Ce n'est pas une couverture qu'une entreprise fait si elle prévoit de glisser.",
      "La seule note de prudence de Zelnick : 'Bien sûr, nous nous réservons le droit de faire ce qui convient le mieux au jeu.' Langage PDG standard. Ne le lisez pas comme un indicateur. Les précommandes ouvrent vendredi.",
    ],
    sources: [
      { label: "Transcription de l'appel aux résultats Take-Two Q1 2027", url: "#" },
      { label: "Communiqué de presse Take-Two — conseils mis à jour", url: "#" },
    ],
  },
  {
    slug: "two-protagonist-system-deep-dive",
    title: "Système Deux Protagonistes Approfondissement : Comment Ça Marche Vraiment dans GTA 6",
    excerpt:
      "Basculer entre Jason et Lucia n'est pas la même chose que le carrousel à trois personnages de GTA V. Voici ce qu'on a appris de la démo de presse sans contact.",
    status: STATUS.VERIFIED,
    category: "Gameplay",
    date: "2026-04-30",
    author: "Sasha Ng",
    readingTime: 8,
    hero: "/article-images/hf_20260516_003240_d4bad4eb-5fff-4707-b7c2-8e236d8664c9.png",
    breaking: false,
    body: [
      "On a assisté à la démo de presse sans contact de 90 minutes de Rockstar au bureau de New York la semaine dernière. La plus grande révélation mécanique : le changement de personnage entre Jason et Lucia n'est pas un re-skinning du système à trois protagonistes de GTA V. C'est quelque chose de nouveau, et les implications de conception sont profondes.",
      "Dans GTA V, vous basculez librement entre trois personnages à partir d'un menu radial, et chacun continue de vivre une 'vie' inactive quand vous ne les jouez pas. Dans GTA 6, le basculement est contextuel : vous ne pouvez basculer entre Jason et Lucia que quand ils sont physiquement l'un près de l'autre — même bâtiment, même véhicule, même braquage. Le reste du temps, le personnage inactif est véritablement hors ligne. Ils ne traînent pas la map.",
      "La raison, selon le chef de conception de Rockstar Rob Nelson, est que l'histoire est co-présence par conception. Jason et Lucia sont un couple commettant des crimes ensemble, pas trois semi-étrangers dont les chemins arrivent à se croiser. Le mécanisme de basculement est censé se sentir comme en passant un téléphone d'avant en arrière, pas comme en changeant de chaîne.",
      "En pratique, cela signifie que les braquages sont conçus pour la couverture à deux joueurs — un personnage regardant un couloir tandis que l'autre craque un coffre-fort — et vous pouvez basculer à mi-mission pour prendre le rôle qui semble le plus intéressant. Des missions en solo existent (Jason en a environ 60% dans le build de démo), mais elles sont encadrées comme un personnage couvrant le terrain tandis que l'autre fait quelque chose hors écran. On est reparti convaincus que c'était le bon appel.",
    ],
    sources: [
      { label: "Démo de presse Rockstar Games — 25 avril 2026", url: "#" },
      { label: "Rob Nelson, entrevue sur dossier", url: "#" },
    ],
  },
];

export function getAllArticlesFr() {
  return [...articlesFr].sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getArticleBySlugFr(slug) {
  return articlesFr.find((a) => a.slug === slug);
}

export function getBreakingArticlesFr() {
  return getAllArticlesFr().filter((a) => a.breaking);
}

export function getRecentArticlesFr(limit = 4) {
  return getAllArticlesFr().slice(0, limit);
}

export function paginateFr(items, page, perPage) {
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
