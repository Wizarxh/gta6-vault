"use client";

import { useEffect, useState } from "react";

function Cell({ label, value }) {
  const padded = String(value).padStart(2, "0");
  return (
    <div className="flex flex-col items-center min-w-[68px] sm:min-w-[88px]">
      <div className="font-mono text-3xl sm:text-5xl md:text-6xl font-bold chrome-text leading-none tabular-nums tracking-tight">
        {padded}
      </div>
      <div className="mt-2 text-[10px] sm:text-xs uppercase tracking-[0.3em] text-vc-muted">
        {label}
      </div>
    </div>
  );
}

export default function Countdown({ targetISO }) {
  const [t, setT] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0, total: 1 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const target = new Date(targetISO).getTime();

    const updateCountdown = () => {
      const total = Math.max(0, target - Date.now());
      const days = Math.floor(total / 86400000);
      const hours = Math.floor((total % 86400000) / 3600000);
      const minutes = Math.floor((total % 3600000) / 60000);
      const seconds = Math.floor((total % 60000) / 1000);
      setT({ days, hours, minutes, seconds, total });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetISO]);

  // Placeholder au SSR pour éviter hydration mismatch
  if (!mounted) {
    return (
      <div className="flex items-center justify-center gap-2 sm:gap-5">
        <Cell label="Days" value={0} />
        <span className="text-vc-pink text-3xl sm:text-5xl font-bold">:</span>
        <Cell label="Hours" value={0} />
        <span className="text-vc-pink text-3xl sm:text-5xl font-bold">:</span>
        <Cell label="Minutes" value={0} />
        <span className="text-vc-pink text-3xl sm:text-5xl font-bold">:</span>
        <Cell label="Seconds" value={0} />
      </div>
    );
  }

  if (t.total === 0) {
    return (
      <div className="text-center">
        <div className="font-mono text-3xl sm:text-5xl font-bold chrome-text">
          IT&apos;S LIVE.
        </div>
        <div className="mt-2 text-xs uppercase tracking-[0.3em] text-vc-muted">
          November 19, 2026 — Welcome back to Vice City.
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center gap-2 sm:gap-5">
      <Cell label="Days" value={t.days} />
      <span className="text-vc-pink text-3xl sm:text-5xl font-bold vc-pulse">
        :
      </span>
      <Cell label="Hours" value={t.hours} />
      <span className="text-vc-pink text-3xl sm:text-5xl font-bold vc-pulse">
        :
      </span>
      <Cell label="Minutes" value={t.minutes} />
      <span className="text-vc-pink text-3xl sm:text-5xl font-bold vc-pulse">
        :
      </span>
      <Cell label="Seconds" value={t.seconds} />
    </div>
  );
}
