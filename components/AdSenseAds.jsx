"use client";

import { useEffect, useState } from "react";

export default function AdSenseAds() {
  const [isConsented, setIsConsented] = useState(false);

  useEffect(() => {
    // Check if user consented to ads
    const consent = localStorage.getItem("gta6vault-consent");
    if (consent) {
      const consentData = JSON.parse(consent);
      setIsConsented(consentData.accepted);
    }
  }, []);

  // Only load ads if user consented
  if (!isConsented) {
    return null;
  }

  return (
    <>
      {/* Google AdSense Script - Add your publisher ID */}
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-xxxxxxxxxxxxxxxx"
        crossOrigin="anonymous"
      />
      
      {/* Display ads in appropriate places - will add via AdBanner component */}
    </>
  );
}

/**
 * AdBanner Component - Place this in your articles/news pages
 * Usage: <AdBanner slot="1234567890" format="horizontal" />
 */
export function AdBanner({ slot = "1234567890", format = "auto" }) {
  const [isConsented, setIsConsented] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("gta6vault-consent");
    if (consent) {
      const consentData = JSON.parse(consent);
      setIsConsented(consentData.accepted);
    }

    // Push ads if AdSense is loaded
    if (window.adsbygoogle && isConsented) {
      try {
        window.adsbygoogle.push({});
      } catch (e) {
        console.log("AdSense not ready yet");
      }
    }
  }, [isConsented]);

  if (!isConsented) {
    return null;
  }

  return (
    <div className="my-6">
      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-xxxxxxxxxxxxxxxx"
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </div>
  );
}
