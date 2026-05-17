"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("idle"); // idle, loading, success, error
  const [message, setMessage] = useState("");

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email) {
      setStatus("error");
      setMessage("Please enter a valid email.");
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setStatus("success");
        setMessage("✅ Welcome to GTA6 Vault! Check your email to confirm.");
        setEmail("");
        // Reset after 5 seconds
        setTimeout(() => {
          setStatus("idle");
          setMessage("");
        }, 5000);
      } else {
        const error = await response.json();
        setStatus("error");
        setMessage(error.message || "Something went wrong. Try again.");
      }
    } catch (err) {
      setStatus("error");
      setMessage("Connection error. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubscribe} className="rounded-lg border border-vc-cyan/30 bg-black/50 p-8">
      <div className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-sm font-mono uppercase tracking-[0.25em] text-vc-cyan">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === "loading"}
            className="mt-2 w-full rounded-md border border-vc-border bg-black/50 px-4 py-3 font-mono text-sm text-white placeholder:text-vc-muted focus:border-vc-cyan focus:outline-none focus:ring-1 focus:ring-vc-cyan disabled:opacity-50"
            required
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading" || status === "success"}
          className="w-full rounded-full bg-vc-pink px-6 py-3 font-mono text-xs font-bold uppercase tracking-[0.25em] text-black transition-all hover:bg-vc-pink/90 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {status === "loading" ? "Subscribing..." : status === "success" ? "✅ Subscribed!" : "Subscribe Now"}
        </button>

        {message && (
          <p
            className={`text-center text-sm ${
              status === "success" ? "text-emerald-300" : "text-vc-pink"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </form>
  );
}
