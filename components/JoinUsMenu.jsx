"use client";

import { useState } from "react";

const SOCIAL_LINKS = [
  {
    icon: "🎮",
    label: "Discord",
    url: "https://discord.gg/FGkBeR3hf",
    color: "hover:text-[#5865F2]",
  },
  {
    icon: "𝕏",
    label: "Twitter/X",
    url: "#",
    color: "hover:text-white",
  },
  {
    icon: "📷",
    label: "Instagram",
    url: "#",
    color: "hover:text-[#E4405F]",
  },
  {
    icon: "🎥",
    label: "YouTube",
    url: "#",
    color: "hover:text-[#FF0000]",
  },
  {
    icon: "f",
    label: "Facebook",
    url: "#",
    color: "hover:text-[#1877F2]",
  },
];

export default function JoinUsMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-3 py-2 rounded-md font-mono text-xs uppercase tracking-[0.25em] text-vc-muted transition-all duration-200 hover:text-vc-cyan hover:bg-vc-cyan/5"
      >
        Join Us
      </button>

      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-30"
            onClick={() => setIsOpen(false)}
          />

          {/* Dropdown */}
          <div className="absolute top-full right-0 mt-2 bg-black border border-vc-border rounded-lg shadow-xl z-40 overflow-hidden min-w-[200px]">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`block px-4 py-3 text-sm font-mono uppercase tracking-[0.2em] text-vc-muted transition-colors border-b border-vc-border/50 last:border-0 ${link.color}`}
              >
                <span className="mr-2">{link.icon}</span>
                {link.label}
              </a>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
