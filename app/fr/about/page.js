'use client';

import Link from 'next/link';

export default function FrenchAbout() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="border-b border-cyan-500/30 bg-black/50 backdrop-blur">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/fr" className="text-xl font-bold text-cyan-400">
            GTA 6 VAULT
          </Link>
          <div className="flex gap-4">
            <Link href="/about" className="text-sm hover:text-cyan-400">EN</Link>
            <Link href="/fr/about" className="text-sm font-bold text-cyan-400">FR</Link>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-5xl font-black text-cyan-400 mb-8">À Propos</h1>

        <div className="space-y-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">GTA 6 Vault</h2>
            <p className="mb-4">
              GTA 6 Vault est une source d'informations non-officielle dédiée à Grand Theft Auto 6.
            </p>
            <p>
              Nous couvrons les leaks, analyses, spéculations, et breakings news autour du lancement de GTA 6 en novembre 2026.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">Mission</h2>
            <p>
              Fournir une source d'informations rapide, vérifiée, et accessible sur GTA 6.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">Politique de Contenu</h2>
            <ul className="list-disc list-inside space-y-2">
              <li><strong>VERIFIED:</strong> Information confirmée par Rockstar ou sources officielles</li>
              <li><strong>RUMOR:</strong> Basé sur leaks, données non-confirmées, ou spéculations fondées</li>
              <li><strong>DEBUNKED:</strong> Information fausse ou correcte par clarification officielle</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">Données & Monitoring</h2>
            <p className="mb-2">
              Nous monitorons 24/7:
            </p>
            <ul className="list-disc list-inside space-y-1">
              <li>Rockstar Games official channels</li>
              <li>Take-Two investor relations</li>
              <li>Gaming news outlets (IGN, GameSpot, Polygon, etc.)</li>
              <li>Community discussion (Reddit, Twitter, Discord)</li>
              <li>Leaked content & industry rumors</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">Disclaimer</h2>
            <p className="text-sm text-gray-400">
              GTA 6 Vault n'est pas affiliée avec Rockstar Games ou Take-Two Interactive. Grand Theft Auto™ est une marque déposée de Rockstar Games. 
            </p>
            <p className="text-sm text-gray-400 mt-2">
              Tout contenu est fourni à titre informatif uniquement. Les opinions exprimées ne reflètent pas nécessairement la réalité officielle.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-cyan-400 mb-4">Contact</h2>
            <p className="mb-2">Questions ou suggestions?</p>
            <p className="text-cyan-400">
              <a href="mailto:hello@gta6-vault.com" className="hover:underline">hello@gta6-vault.com</a>
            </p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-cyan-500/30 mt-12 py-8">
        <div className="max-w-4xl mx-auto px-6 text-center text-sm text-gray-500">
          <p>© 2026 GTA 6 Vault. GTA™ is a trademark of Rockstar Games.</p>
        </div>
      </footer>
    </div>
  );
}
