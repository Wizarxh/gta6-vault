import { SITE } from "@/lib/site";

export const metadata = {
  title: "Newsletter — GTA6 Vault",
  description: "Subscribe to the GTA6 Vault Daily Brief for the latest verified news, rumors, and leaks about Grand Theft Auto 6.",
  alternates: { canonical: "/newsletter" },
  openGraph: {
    title: "Subscribe to GTA6 Vault Newsletter",
    description: "Get daily updates on Grand Theft Auto 6 delivered to your inbox.",
    url: "/newsletter",
  },
};

export default function NewsletterPage() {
  const newsletterSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    "headline": "GTA6 Vault Daily Brief Newsletter",
    "description": "Subscribe to curated GTA6 news and updates",
    "publisher": {
      "@type": "Organization",
      "name": "GTA6 Vault",
      "logo": {
        "@type": "ImageObject",
        "url": "https://gta6-vault.com/favicon.ico"
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(newsletterSchema) }}
      />
      <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <div className="text-center">
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-vc-cyan">
            Stay Updated
          </div>
          <h1 className="mt-3 font-display text-5xl font-black uppercase tracking-tight sm:text-6xl">
            <span className="chrome-text">GTA6 Vault Daily Brief</span>
          </h1>
          <p className="mt-4 text-lg text-vc-muted">
            Get the latest verified news, rumors, and leaks about Grand Theft Auto 6 delivered to your inbox every morning.
          </p>
        </div>

        <div className="mt-12 rounded-lg border border-vc-cyan/30 bg-black/50 p-8">
          <div className="space-y-4 text-center">
            <h2 className="text-2xl font-bold text-white">What You'll Get</h2>
            <ul className="space-y-2 text-vc-muted">
              <li>✓ Top 3 verified articles each morning</li>
              <li>✓ Breaking news alerts (as they happen)</li>
              <li>✓ Credible rumors and leaks</li>
              <li>✓ Community insights and analysis</li>
              <li>✓ Never any spam — just pure GTA6 content</li>
            </ul>
          </div>
        </div>

        <div className="mt-12">
          <h2 className="mb-8 text-center text-2xl font-bold text-white">Join Our Community</h2>

          {/* Beehiiv Embed Form - Replace this with actual embed code */}
          <div className="rounded-lg border border-vc-cyan/30 bg-black/50 p-8">
            <div id="beehiiv-embed-container">
              {/* Beehiiv signup form embed code will be inserted here */}
              <p className="text-center text-vc-muted">
                Loading signup form...
              </p>
            </div>
          </div>

          <p className="mt-6 text-center text-sm text-vc-muted">
            We respect your privacy. Unsubscribe at any time.{" "}
            <a href="/privacy" className="text-vc-cyan hover:underline">
              Privacy Policy
            </a>
            {" "}·{" "}
            <a href="/tos" className="text-vc-cyan hover:underline">
              Terms of Service
            </a>
          </p>
        </div>

        <div className="mt-12 rounded-lg border border-vc-pink/30 bg-black/50 p-8">
          <h3 className="mb-4 font-bold text-vc-pink">About GTA6 Vault</h3>
          <p className="text-sm text-vc-muted">
            GTA6 Vault is an independent news platform dedicated to Grand Theft Auto 6. We aggregate and verify the latest news, rumors, and leaks. All content is tagged as VERIFIED (sourced and corroborated), RUMOR (credible but unconfirmed), or DEBUNKED (proven false). We are not affiliated with Rockstar Games or Take-Two Interactive.
          </p>
        </div>
      </div>
    </>
  );
}
