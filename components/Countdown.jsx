"use client";

import { useState, useEffect } from "react";
import { SITE } from "@/lib/site";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isReady: false,
  });

  useEffect(() => {
    // Calculate time left
    const calculateTimeLeft = () => {
      const releaseDate = new Date(SITE.releaseDate);
      const now = new Date();
      const difference = releaseDate.getTime() - now.getTime();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
          isReady: true,
        });
      } else {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isReady: true,
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  if (!timeLeft.isReady) return null;

  return (
    <div className="mx-auto inline-block rounded-2xl border border-vc-border bg-black/60 px-4 py-5 sm:px-8 sm:py-7 neon-border">
      <div className="space-y-2 text-center">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-vc-cyan">
          Launch in
        </p>
        <div className="grid grid-cols-4 gap-2 sm:gap-4">
          <div className="flex flex-col items-center">
            <div className="font-display text-3xl sm:text-4xl font-black text-vc-pink">
              {String(timeLeft.days).padStart(2, "0")}
            </div>
            <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-vc-muted">
              Days
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-display text-3xl sm:text-4xl font-black text-vc-cyan">
              {String(timeLeft.hours).padStart(2, "0")}
            </div>
            <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-vc-muted">
              Hours
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-display text-3xl sm:text-4xl font-black text-vc-pink">
              {String(timeLeft.minutes).padStart(2, "0")}
            </div>
            <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-vc-muted">
              Mins
            </p>
          </div>
          <div className="flex flex-col items-center">
            <div className="font-display text-3xl sm:text-4xl font-black text-vc-cyan">
              {String(timeLeft.seconds).padStart(2, "0")}
            </div>
            <p className="mt-1 font-mono text-xs uppercase tracking-[0.2em] text-vc-muted">
              Secs
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
