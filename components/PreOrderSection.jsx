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

        <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
          {/* PS5 */}
          <div
            onClick={() => setIsModalOpen(true)}
            className="rounded-lg border border-vc-border bg-black/60 p-8 text-center hover:border-vc-cyan/60 transition-colors cursor-pointer group"
          >
            <div className="mb-6 flex justify-center">
              <Image
                src="/logos/PS5-Logo-PNG-Image.png"
                alt="PlayStation 5"
                width={60}
                height={60}
                className="h-12 w-auto brightness-0 invert drop-shadow-lg group-hover:drop-shadow-[0_0_12px_rgba(0,212,255,0.4)] transition-all"
              />
            </div>
            <PreOrderButton />
          </div>

          {/* Xbox */}
          <div
            onClick={() => setIsModalOpen(true)}
            className="rounded-lg border border-vc-border bg-black/60 p-8 text-center hover:border-vc-cyan/60 transition-colors cursor-pointer group"
          >
            <div className="mb-6 flex justify-center">
              <Image
                src="/logos/X_Xbox_Series_X_S_black.png"
                alt="Xbox Series X|S"
                width={60}
                height={60}
                className="h-12 w-auto brightness-0 invert drop-shadow-lg group-hover:drop-shadow-[0_0_12px_rgba(0,212,255,0.4)] transition-all"
              />
            </div>
            <PreOrderButton />
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
