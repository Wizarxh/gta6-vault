"use client";

import { useState } from "react";
import Image from "next/image";
import { PreOrderButton } from "./PreOrderModal";
import PreOrderModalDirect from "./PreOrderModal";

export default function PreOrderSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleClose = () => {
    setIsModalOpen(false);
    setEmail("");
    setSubmitted(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "preorder-logo" }),
      });

      if (response.ok) {
        setSubmitted(true);
        setTimeout(() => {
          handleClose();
        }, 2000);
      }
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <>
      <div className="mt-16 rounded-xl border border-vc-border bg-black/40 p-8 sm:p-12">
        <h3 className="font-mono text-xs uppercase tracking-[0.3em] text-vc-cyan">
          Coming Soon
        </h3>
        <h2 className="mt-3 font-display text-2xl font-bold text-white">
          Pre-Order Now
        </h2>
        <p className="mt-2 text-sm text-vc-text/80">
          Get GTA 6 on your platform of choice. Pre-orders opening soon.
        </p>

        <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:justify-center">
          {/* PS5 */}
          <div
            onClick={() => setIsModalOpen(true)}
            className="group relative flex flex-col items-center justify-center rounded-lg border border-vc-cyan/40 bg-gradient-to-br from-black/60 to-black/40 p-8 sm:p-10 transition-all duration-300 hover:border-vc-cyan/80 hover:shadow-[0_0_30px_rgba(0,212,255,0.3)] cursor-pointer"
          >
            <div className="relative w-20 h-20 mb-6 flex items-center justify-center">
              <svg
                className="w-full h-full filter drop-shadow-[0_0_12px_rgba(0,212,255,0.6)] transition-all duration-300 group-hover:drop-shadow-[0_0_24px_rgba(0,212,255,0.8)]"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="ps5-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#00D4FF", stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: "#00A8CC", stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <text
                  x="100"
                  y="130"
                  fontSize="90"
                  fontWeight="900"
                  textAnchor="middle"
                  fill="url(#ps5-gradient)"
                  fontFamily="'Arial Black', sans-serif"
                  letterSpacing="-3"
                >
                  PS5
                </text>
              </svg>
            </div>
            <h3 className="font-display text-lg sm:text-xl font-bold uppercase tracking-[0.15em] text-vc-cyan group-hover:text-vc-cyan/100 transition-colors">
              PlayStation 5
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-vc-muted text-center">
              Next-gen adventure
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-4 px-6 py-2 font-mono text-xs uppercase tracking-[0.2em] border border-vc-cyan/60 text-vc-cyan hover:bg-vc-cyan/10 rounded transition-colors"
            >
              Notify Me
            </button>
          </div>

          {/* Xbox */}
          <div
            onClick={() => setIsModalOpen(true)}
            className="group relative flex flex-col items-center justify-center rounded-lg border border-vc-pink/40 bg-gradient-to-br from-black/60 to-black/40 p-8 sm:p-10 transition-all duration-300 hover:border-vc-pink/80 hover:shadow-[0_0_30px_rgba(255,107,157,0.3)] cursor-pointer"
          >
            <div className="relative w-20 h-20 mb-6 flex items-center justify-center">
              <svg
                className="w-full h-full filter drop-shadow-[0_0_12px_rgba(255,107,157,0.6)] transition-all duration-300 group-hover:drop-shadow-[0_0_24px_rgba(255,107,157,0.8)]"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="xbox-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#FF6B9D", stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: "#FF4081", stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <text
                  x="100"
                  y="130"
                  fontSize="80"
                  fontWeight="900"
                  textAnchor="middle"
                  fill="url(#xbox-gradient)"
                  fontFamily="'Arial Black', sans-serif"
                  letterSpacing="-2"
                >
                  XS|X
                </text>
              </svg>
            </div>
            <h3 className="font-display text-lg sm:text-xl font-bold uppercase tracking-[0.15em] text-vc-pink group-hover:text-vc-pink/100 transition-colors">
              Xbox Series X|S
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-vc-muted text-center">
              Ultimate performance
            </p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="mt-4 px-6 py-2 font-mono text-xs uppercase tracking-[0.2em] border border-vc-pink/60 text-vc-pink hover:bg-vc-pink/10 rounded transition-colors"
            >
              Notify Me
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
          <div className="relative w-full max-w-lg rounded-xl border border-vc-border bg-black/95 p-8 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute right-4 top-4 p-2 text-vc-muted hover:text-white transition-colors text-2xl font-bold"
              title="Close"
            >
              ×
            </button>

            {!submitted ? (
              <>
                {/* Header */}
                <div className="text-center">
                  <h2 className="font-display text-3xl font-black text-white">
                    Pre-Order GTA 6
                  </h2>
                  <p className="mt-2 text-vc-muted">
                    Get notified the moment pre-orders go live
                  </p>
                </div>

                {/* Email Form */}
                <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-[0.2em] text-vc-muted mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="jason@example.com"
                      className="w-full rounded-lg border border-vc-border bg-black/60 px-4 py-3 text-white placeholder-vc-muted/50 focus:border-vc-cyan focus:outline-none transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-lg bg-vc-cyan px-6 py-3 font-mono font-bold uppercase tracking-[0.2em] text-black hover:bg-vc-cyan/90 transition-colors"
                  >
                    Notify Me When Live
                  </button>
                </form>

                {/* Subtext */}
                <p className="mt-4 text-center text-xs text-vc-muted/70">
                  We'll email you instantly when GTA 6 pre-orders open.
                </p>
              </>
            ) : (
              <div className="text-center py-8">
                <div className="text-4xl mb-4">✓</div>
                <h3 className="font-display text-xl font-bold text-white">
                  You're on the list!
                </h3>
                <p className="mt-2 text-vc-muted">
                  We'll notify you the moment pre-orders go live.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
