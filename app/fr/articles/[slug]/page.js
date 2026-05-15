'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const FrenchArticle = ({ params }) => {
  const [article, setArticle] = useState(null);
  const [mounted, setMounted] = useState(false);

  const frenchArticles = {
    'chronologie-developpement-gta-6-2014-2026': {
      title: 'Chronologie de développement GTA 6 — 12 ans pour créer Vice City 2026',
      slug: 'chronologie-developpement-gta-6-2014-2026',
      description: 'La chronologie complète des 12 ans de développement de GTA 6, de la greenlight 2014 au lancement novembre 2026.',
      tag: 'VERIFIED',
      date: '2026-05-15',
      image: 'https://images.unsplash.com/photo-1600080869823-f30f7835481c?w=1200&h=630&fit=crop',
      content: `# Chronologie de développement GTA 6 — 12 ans pour créer Vice City 2026

GTA 6 n'a pas été créé en quelques années. C'est un projet qui dure **depuis 12 ans**.

Depuis le greenlight en 2014 jusqu'à aujourd'hui, voici tout ce qui s'est passé.

## Préhistoire: GTA V Online (2013-2014)

### Septembre 2013: GTA V Launch
Rockstar lance GTA V. 15 ans après GTA III, le jeu révolutionne l'industrie.

**Impact sur GTA 6:**
- Démontre la faisabilité des mondes ultra-détaillés
- Établit le modèle de business (GTA Online = goldmine)
- Crée l'équipe de base qui travaillera sur GTA 6

### 2014: Greenlight GTA 6
**Moment crucial:** Rockstar Games greenlight officiellement GTA 6.

## Phase 1: Concept & Pre-Production (2014-2017)

La création d'un jeu de cette ampleur demande une planification minutieuse.

## Verdict

12 ans c'est long. Mais regardez:
- GTA V = 13 ans de contenu (2013 → 2026)
- GTA V Online = toujours vivant
- GTA 6 = prêt pour 13+ ans aussi

**La patience de Rockstar paie.**`
    },
    'vice-city-1986-vs-2026-transformation': {
      title: 'Vice City 1986 vs 2026 — La Transformation de Leonida',
      slug: 'vice-city-1986-vs-2026-transformation',
      description: 'Comparaison district par district. Comment Vice City a changé en 40 ans (1986 → 2026).',
      tag: 'VERIFIED',
      date: '2026-05-15',
      image: 'https://images.unsplash.com/photo-1579546927361-f2499b0acc70?w=1200&h=630&fit=crop',
      content: `# Vice City 1986 vs 2026 — La Transformation de Leonida

1986: Vice City était royaume des gangs, neon, cocaine.

2026: Vice City est métropole ultra-moderne, inégalités extrêmes, crypto-wealth.

Même ville. Deux univers différents. Voici la transformation.`
    },
    'gta-6-mecaniques-gameplay-physique-conduite-combat': {
      title: 'Mécaniques de Gameplay Leakées — Physique, Conduite & Combat',
      slug: 'gta-6-mecaniques-gameplay-physique-conduite-combat',
      description: 'Analyse des systèmes leakés (2022). Destruction, physique véhicules, combat. Ce qu\'on sait.',
      tag: 'RUMOR',
      date: '2026-05-15',
      image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd8a2c17?w=1200&h=630&fit=crop',
      content: `# Mécaniques de Gameplay Leakées

La leak de 2022? C'était pas juste des cinématiques. 90 minutes de gameplay revelaiert les **mécaniques fondamentales** de GTA 6.`
    },
    'gta-6-migration-gta-online-progression': {
      title: 'Migration GTA Online: Votre Progression Transfère-t-elle?',
      slug: 'gta-6-migration-gta-online-progression',
      description: 'Transfer de compte, richesse, progression. Ce qu\'on sait sur GTA 6 Online.',
      tag: 'VERIFIED',
      date: '2026-05-15',
      image: 'https://images.unsplash.com/photo-1623977306292-28cdfffe76ca?w=1200&h=630&fit=crop',
      content: `# Migration GTA Online

13 ans de GTA Online. Milliards en devises virtuelles. Véhicules collectés. Hacks complétés.

Puis 19 novembre 2026: GTA 6 lance avec son mode Online.

**La question:** Vous perdez tout?`
    },
    'gta-6-casting-voix-speculation-lucia-jason': {
      title: 'Casting Voix Rumeurs: Lucia & Jason (Avant Reveal Officiel)',
      slug: 'gta-6-casting-voix-speculation-lucia-jason',
      description: 'Spéculations casting basées sur leaks, interviews, indices industrie. Qui voice Lucia & Jason?',
      tag: 'RUMOR',
      date: '2026-05-15',
      image: 'https://images.unsplash.com/photo-1526374965328-7f5ae4e8b08f?w=1200&h=630&fit=crop',
      content: `# Casting Voix Rumeurs

Rockstar **n'a jamais confirmé** le casting voix de Lucia ou Jason.

Mais il y a indices. Audio samples leakés. Hints sociaux. Patterns industrie.`
    },
    'gta-6-pc-vs-console-performance-attentes': {
      title: 'PC vs Console: Analyse Technique GTA 6',
      slug: 'gta-6-pc-vs-console-performance-attentes',
      description: 'Targets graphiques, FPS, résolution. Performance PS5, Xbox Series X, PC (quand launch).',
      tag: 'VERIFIED',
      date: '2026-05-15',
      image: 'https://images.unsplash.com/photo-1559163499-642a73c48e3d?w=1200&h=630&fit=crop',
      content: `# PC vs Console: Analyse Technique GTA 6

19 novembre 2026: GTA 6 lance sur PS5 & Xbox Series X.

Une semaine après: **Où version PC?**`
    }
  };

  useEffect(() => {
    setMounted(true);
    const article = frenchArticles[params.slug];
    if (article) {
      setArticle(article);
    }
  }, [params.slug]);

  if (!mounted) return null;

  if (!article) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-black text-cyan-400 mb-4">404</h1>
          <p className="text-gray-300 mb-6">Article non trouvé</p>
          <Link href="/fr" className="text-cyan-400 hover:underline">
            Retour à l'accueil
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="border-b border-cyan-500/30 bg-black/50 backdrop-blur">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/fr" className="text-xl font-bold text-cyan-400">
            GTA 6 VAULT
          </Link>
          <div className="flex gap-4">
            <Link href="/" className="text-sm hover:text-cyan-400">EN</Link>
            <Link href="/fr" className="text-sm font-bold text-cyan-400">FR</Link>
          </div>
        </div>
      </nav>

      {/* Hero Image */}
      <div className="relative h-80 bg-gray-900 overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Article Content */}
      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-cyan-600 text-black px-3 py-1 text-xs font-bold rounded">
              {article.tag}
            </div>
            <span className="text-gray-400 text-sm">
              {new Date(article.date).toLocaleDateString('fr-FR', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-cyan-400 mb-4">
            {article.title}
          </h1>
          <p className="text-xl text-gray-300">
            {article.description}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-invert max-w-none mb-12">
          <div className="text-gray-300 leading-relaxed whitespace-pre-wrap">
            {article.content}
          </div>
        </div>

        {/* Article Footer */}
        <div className="border-t border-cyan-500/30 pt-8 flex justify-between items-center">
          <Link href="/fr" className="text-cyan-400 hover:underline">
            ← Retour aux articles
          </Link>
          <div className="text-sm text-gray-500">
            Partager cet article
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="bg-black border-t border-cyan-500/30 mt-12 py-8">
        <div className="max-w-4xl mx-auto px-6 text-center text-sm text-gray-500">
          <p>© 2026 GTA 6 Vault. GTA™ is a trademark of Rockstar Games.</p>
        </div>
      </footer>
    </div>
  );
};

export default FrenchArticle;
