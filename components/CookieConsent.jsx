"use client";

import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [consent, setConsent] = useState(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user already gave consent
    const savedConsent = localStorage.getItem("gta6vault-consent");
    if (savedConsent) {
      setConsent(JSON.parse(savedConsent));
    } else {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    const consentData = { accepted: true, timestamp: new Date().toISOString() };
    localStorage.setItem("gta6vault-consent", JSON.stringify(consentData));
    setConsent(consentData);
    setShowBanner(false);
    
    // Trigger GA4 tracking
    if (window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "granted",
      });
    }
  };

  const handleReject = () => {
    const consentData = { accepted: false, timestamp: new Date().toISOString() };
    localStorage.setItem("gta6vault-consent", JSON.stringify(consentData));
    setConsent(consentData);
    setShowBanner(false);
    
    // Disable GA4 tracking
    if (window.gtag) {
      window.gtag("consent", "update", {
        analytics_storage: "denied",
      });
    }
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-black/95 border-t border-vc-cyan/30 backdrop-blur-md p-4 sm:p-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex-1">
            <h3 className="font-mono text-sm font-bold uppercase tracking-[0.2em] text-vc-cyan mb-2">
              Privacy & Cookies
            </h3>
            <p className="text-xs sm:text-sm text-vc-muted leading-relaxed max-w-2xl">
              We use Google Analytics to understand how you use GTA6 Vault. This helps us improve the site. 
              By accepting, you allow us to track your visits anonymously. No personal data is sold.
            </p>
            <a
              href="#"
              className="text-xs text-vc-cyan hover:text-vc-cyan/80 transition-colors mt-2 inline-block underline"
            >
              Privacy Policy
            </a>
          </div>

          <div className="flex gap-3 flex-shrink-0">
            <button
              onClick={handleReject}
              className="px-4 py-2 rounded-lg font-mono text-xs font-bold uppercase tracking-[0.2em] border border-vc-muted/40 text-vc-muted hover:bg-vc-muted/10 transition-colors whitespace-nowrap"
            >
              Reject
            </button>
            <button
              onClick={handleAccept}
              className="px-4 py-2 rounded-lg font-mono text-xs font-bold uppercase tracking-[0.2em] bg-vc-cyan text-black hover:bg-vc-cyan/90 transition-colors whitespace-nowrap"
            >
              Accept
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
