"use client";

import { useEffect, useState } from "react";

export default function VideoBackground() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Optionnel: hide video on low-bandwidth or mobile
    const isMobile = window.matchMedia("(max-width: 768px)").matches;
    const isLowBandwidth = 
      navigator.connection?.saveData === true ||
      navigator.connection?.effectiveType === "slow-2g" ||
      navigator.connection?.effectiveType === "2g";

    if (isMobile || isLowBandwidth) {
      setIsVisible(false);
    }
  }, []);

  if (!isVisible) {
    return (
      <div
        className="fixed inset-0 -z-10"
        style={{
          background: "linear-gradient(180deg, #0a0a0a 0%, #1a0a2e 50%, #0a0a0a 100%)",
        }}
      />
    );
  }

  return (
    <div className="fixed inset-0 z-0 overflow-hidden">
      {/* Hero Video Background - 10s loop */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-10"
        style={{ objectPosition: "center 30%" }}
      >
        {/* Primary: Modern codec with fallbacks */}
        <source src="/videos/hero.mp4" type="video/mp4; codecs='hvc1'" />
        <source src="/videos/hero.mp4" type="video/mp4" />

        {/* Fallback gradient if video fails */}
        Your browser doesn't support HTML5 video.
      </video>

      {/* Dark Overlay - Premium look + text readability */}
      <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

      {/* Alternate overlay: Radial gradient for cinematic effect */}
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.8))",
        }}
      />

      {/* Scan lines effect - Vice City aesthetic */}
      <div
        className="absolute inset-0 z-20 pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.15) 0px, rgba(0, 0, 0, 0.15) 1px, transparent 1px, transparent 3px)",
          backgroundSize: "100% 3px",
          animation: "scanlines 8s linear infinite",
        }}
      />

      {/* Subtle grid - Neon cyan accent */}
      <div
        className="absolute inset-0 z-20 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(0deg, rgba(0, 212, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 212, 255, 0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Edge glow effect - adds premium polish */}
      <div
        className="absolute inset-0 z-20 pointer-events-none"
        style={{
          boxShadow: "inset 0 0 120px rgba(0, 212, 255, 0.1)",
        }}
      />

      <style jsx>{`
        @keyframes scanlines {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(10px);
          }
        }
      `}</style>
    </div>
  );
}
