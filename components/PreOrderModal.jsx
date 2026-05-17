"use client";

import { useState, useEffect } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";

export default function PreOrderModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [hasSeenModal, setHasSeenModal] = useState(false);

  useEffect(() => {
    // Check if user already closed/submitted
    const hasVisited = sessionStorage.getItem("preorder-modal-visited");
    if (!hasVisited && !hasSeenModal) {
      // Show modal after 3 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsOpen(false);
    sessionStorage.setItem("preorder-modal-visited", "true");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Log email to console (replace with actual API call)
    console.log("Pre-order notification signup:", email);
    
    try {
      // TODO: Replace with your actual newsletter API endpoint
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, source: "preorder-modal" }),
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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
      <div className="relative w-full max-w-lg rounded-xl border border-vc-border bg-black/95 p-8 shadow-2xl">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute right-4 top-4 p-2 text-vc-muted hover:text-white transition-colors"
        >
          <XMarkIcon className="w-5 h-5" />
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

            {/* Platform Icons */}
            <div className="mt-8 flex justify-center gap-8">
              <div className="flex flex-col items-center gap-2">
                <div className="rounded-lg bg-black/60 border border-vc-border p-4">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white">
                    <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 22.5C6.2 22.5 1.5 17.8 1.5 12S6.2 1.5 12 1.5 22.5 6.2 22.5 12 17.8 22.5 12 22.5z" />
                  </svg>
                </div>
                <span className="text-xs font-mono text-vc-muted">PlayStation 5</span>
              </div>

              <div className="flex flex-col items-center gap-2">
                <div className="rounded-lg bg-black/60 border border-vc-border p-4">
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="white">
                    <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm0 22.5C6.2 22.5 1.5 17.8 1.5 12S6.2 1.5 12 1.5 22.5 6.2 22.5 12 17.8 22.5 12 22.5z" />
                  </svg>
                </div>
                <span className="text-xs font-mono text-vc-muted">Xbox Series X|S</span>
              </div>
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
  );
}
