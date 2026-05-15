'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Countdown from '@/components/Countdown';
import BreakingTicker from '@/components/BreakingTicker';

const FrenchHome = () => {
  const [articles, setArticles] = useState([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Fetch French articles
    const frenchArticles = [
      {
        id: 1,
        title: 'Chronologie de développement GTA 6 — 12 ans pour créer Vice City 2026',
        slug: 'chronologie-developpement-gta-6-2014-2026',
        description: 'La chronologie complète des 12 ans de développement de GTA 6, de la greenlight 2014 au lancement novembre 2026.',
        tag: 'VERIFIED',
        date: '2026-05-15',
        image: 'https://images.unsplash.com/photo-1600080869823-f30f7835481c?w=1200&h=630&fit=crop'
      },
      {
        id: 2,
        title: 'Vice City 1986 vs 2026 — La Transformation de Leonida',
        slug: 'vice-city-1986-vs-2026-transformation',
        description: 'Comparaison district par district. Comment Vice City a changé en 40 ans (1986 → 2026).',
        tag: 'VERIFIED',
        date: '2026-05-15',
        image: 'https://images.unsplash.com/photo-1579546927361-f2499b0acc70?w=1200&h=630&fit=crop'
      },
      {
        id: 3,
        title: 'Mécaniques de Gameplay Leakées — Physique, Conduite & Combat',
        slug: 'gta-6-mecaniques-gameplay-physique-conduite-combat',
        description: 'Analyse des systèmes leakés (2022). Destruction, physique véhicules, combat. Ce qu\'on sait.',
        tag: 'RUMOR',
        date: '2026-05-15',
        image: 'https://images.unsplash.com/photo-1614613535308-eb5fbd8a2c17?w=1200&h=630&fit=crop'
      },
      {
        id: 4,
        title: 'Migration GTA Online: Votre Progression Transfère-t-elle?',
        slug: 'gta-6-migration-gta-online-progression',
        description: 'Transfer de compte, richesse, progression. Ce qu\'on sait sur GTA 6 Online.',
        tag: 'VERIFIED',
        date: '2026-05-15',
        image: 'https://images.unsplash.com/photo-1623977306292-28cdfffe76ca?w=1200&h=630&fit=crop'
      },
      {
        id: 5,
        title: 'Casting Voix Rumeurs: Lucia & Jason (Avant Reveal Officiel)',
        slug: 'gta-6-casting-voix-speculation-lucia-jason',
        description: 'Spéculations casting basées sur leaks, interviews, indices industrie. Qui voice Lucia & Jason?',
        tag: 'RUMOR',
        date: '2026-05-15',
        image: 'https://images.unsplash.com/photo-1526374965328-7f5ae4e8b08f?w=1200&h=630&fit=crop'
      },
      {
        id: 6,
        title: 'PC vs Console: Analyse Technique GTA 6',
        slug: 'gta-6-pc-vs-console-performance-attentes',
        description: 'Targets graphiques, FPS, résolution. Performance PS5, Xbox Series X, PC (quand launch).',
        tag: 'VERIFIED',
        date: '2026-05-15',
        image: 'https://images.unsplash.com/photo-1559163499-642a73c48e3d?w=1200&h=630&fit=crop'
      }
    ];
    setArticles(frenchArticles);
  }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="border-b border-cyan-500/30 bg-black/50 backdrop-blur">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/fr" className="text-2xl font-bold text-cyan-400">
            GTA 6 VAULT 🇫🇷
          </Link>
          <div className="flex gap-6">
            <Link href="/" className="text-sm hover:text-cyan-400 transition">EN</Link>
            <Link href="/fr" className="text-sm font-bold text-cyan-400">FR</Link>
          </div>
        </div>
      </nav>

      {/* Countdown */}
      {mounted && <Countdown />}

      {/* Breaking Ticker */}
      <BreakingTicker />

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl font-black text-cyan-400 mb-4">
          GTA 6 VAULT 🔓
        </h1>
        <p className="text-xl text-gray-300 mb-2">
          Tous les news, analyses, et leaks de GTA 6 en un seul endroit
        </p>
        <p className="text-gray-400">
          ⏰ Lancement: 19 novembre 2026 | 📍 Vice City (Leonida) | 🎮 PS5 / Xbox Series X
        </p>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-black text-cyan-400 mb-8">
          📰 ARTICLES PILIERS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Link href={`/fr/articles/${article.slug}`} key={article.id}>
              <div className="bg-gray-900/50 border border-cyan-500/30 hover:border-cyan-500 transition overflow-hidden rounded-lg cursor-pointer h-full">
                <div className="relative h-40 bg-gray-800 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover hover:scale-105 transition"
                  />
                  <div className="absolute top-3 right-3 bg-cyan-600 text-black px-3 py-1 text-xs font-bold rounded">
                    {article.tag}
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-black text-cyan-400 mb-2 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4 line-clamp-2">
                    {article.description}
                  </p>
                  <div className="text-xs text-gray-500">
                    {new Date(article.date).toLocaleDateString('fr-FR')}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Info Section */}
      <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-900/50 border border-cyan-500/30 p-6 rounded-lg">
          <h3 className="text-cyan-400 font-black mb-2">📊 VERIFIED</h3>
          <p className="text-gray-300 text-sm">
            Information confirmée par Rockstar ou sources officielles.
          </p>
        </div>
        <div className="bg-gray-900/50 border border-cyan-500/30 p-6 rounded-lg">
          <h3 className="text-yellow-500 font-black mb-2">🟡 RUMOR</h3>
          <p className="text-gray-300 text-sm">
            Basé sur leaks, spéculations, ou données partiellement confirmées.
          </p>
        </div>
        <div className="bg-gray-900/50 border border-cyan-500/30 p-6 rounded-lg">
          <h3 className="text-cyan-400 font-black mb-2">📡 24/7</h3>
          <p className="text-gray-300 text-sm">
            Monitoring Rockstar/Take-Two pour breakings news en temps réel.
          </p>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-cyan-600/10 border-y border-cyan-500/30 py-12">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-black text-cyan-400 mb-4">
            🔔 NEWSLETTER
          </h2>
          <p className="text-gray-300 mb-6">
            Recevez breakings news & analyses exclusives dans votre inbox
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Votre email..."
              className="flex-1 bg-gray-900 border border-cyan-500/30 rounded px-4 py-3 text-white placeholder-gray-500"
            />
            <button className="bg-cyan-600 hover:bg-cyan-700 text-black font-black px-6 py-3 rounded transition">
              S'inscrire
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-cyan-500/30 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
            <div>
              <h4 className="text-cyan-400 font-black mb-3">Navigation</h4>
              <ul className="text-sm text-gray-400 space-y-1">
                <li><Link href="/fr" className="hover:text-cyan-400">Accueil</Link></li>
                <li><Link href="/fr/about" className="hover:text-cyan-400">À Propos</Link></li>
                <li><Link href="/fr/contact" className="hover:text-cyan-400">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-cyan-400 font-black mb-3">Ressources</h4>
              <ul className="text-sm text-gray-400 space-y-1">
                <li><a href="https://rockstargames.com" className="hover:text-cyan-400" target="_blank" rel="noopener noreferrer">Rockstar Officiel</a></li>
                <li><a href="https://ir.take2games.com" className="hover:text-cyan-400" target="_blank" rel="noopener noreferrer">Take-Two IR</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-cyan-400 font-black mb-3">Légal</h4>
              <ul className="text-sm text-gray-400 space-y-1">
                <li><Link href="/fr/terms" className="hover:text-cyan-400">Conditions</Link></li>
                <li><Link href="/fr/privacy" className="hover:text-cyan-400">Confidentialité</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-cyan-400 font-black mb-3">Langues</h4>
              <ul className="text-sm text-gray-400 space-y-1">
                <li><Link href="/" className="hover:text-cyan-400">English</Link></li>
                <li><Link href="/fr" className="text-cyan-400 font-bold">Français</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-cyan-500/30 pt-6 text-center text-sm text-gray-500">
            <p>© 2026 GTA 6 Vault. GTA™ is a trademark of Rockstar Games.</p>
            <p className="mt-2 text-xs">Une source d'informations non-officielle | Not affiliated with Rockstar Games</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FrenchHome;
