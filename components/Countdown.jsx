"use client";

import { useState, useEffect } from "react";

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
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0, total: 1 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const interval = setInterval(() => {
      const target = new Date(targetISO).getTime();
      const total = Math.max(0, target - Date.now());
      const days = Math.floor(total / 86400000);
      const hours = Math.floor((total % 86400000) / 3600000);
      const minutes = Math.floor((total % 3600000) / 60000);
      const seconds = Math.floor((total % 60000) / 1000);

      setTime({ days, hours, minutes, seconds, total });
    }, 1000);

    return () => clearInterval(interval);
  }, [targetISO]);

  // Render placeholder on server, real countdown after mount
  if (!mounted) {
    return (
      <div suppressHydrationWarning className="flex items-center justify-center gap-2 sm:gap-5">
        <Cell label="Days" value={0} />
        <span className="text-vc-pink text-3xl sm:text-5xl font-bold vc-pulse">:</span>
        <Cell label="Hours" value={0} />
        <span className="text-vc-pink text-3xl sm:text-5xl font-bold vc-pulse">:</span>
        <Cell label="Minutes" value={0} />
        <span className="text-vc-pink text-3xl sm:text-5xl font-bold vc-pulse">:</span>
        <Cell label="Seconds" value={0} />
      </div>
    );
  }

  if (time.total === 0) {
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
      <Cell label="Days" value={time.days} />
      <span className="text-vc-pink text-3xl sm:text-5xl font-bold vc-pulse">:</span>
      <Cell label="Hours" value={time.hours} />
      <span className="text-vc-pink text-3xl sm:text-5xl font-bold vc-pulse">:</span>
      <Cell label="Minutes" value={time.minutes} />
      <span className="text-vc-pink text-3xl sm:text-5xl font-bold vc-pulse">:</span>
      <Cell label="Seconds" value={time.seconds} />
    </div>
  );
}
