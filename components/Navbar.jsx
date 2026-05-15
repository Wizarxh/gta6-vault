"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "./Logo";
import { useState } from "react";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/news", label: "News" },
  { href: "/about", label: "About" },
  { href: "/newsletter", label: "Newsletter" },
];

const LANGUAGES = [
  { code: "en", label: "English", path: "" },
  { code: "fr", label: "Français", path: "/fr" },
];

export default function Navbar() {
  const pathname = usePathname();
  const isFreench = pathname.startsWith("/fr");
  const currentLang = isFreench ? "fr" : "en";
  const [isOpen, setIsOpen] = useState(false);

  const switchLanguage = (code) => {
    const currentPath = pathname;
    let newPath = currentPath;

    if (code === "fr") {
      if (!currentPath.startsWith("/fr")) {
        newPath = "/fr" + (currentPath === "/" ? "" : currentPath);
      }
    } else {
      if (currentPath.startsWith("/fr")) {
        newPath = currentPath.replace(/^\/fr/, "") || "/";
      }
    }

    window.location.href = newPath;
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-vc-border bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Logo />
        <nav aria-label="Primary" className="flex items-center gap-1 sm:gap-2">
          {LINKS.map((l) => {
            let href = l.href;
            if (isFreench && l.href !== "/newsletter") {
              href = "/fr" + (l.href === "/" ? "" : l.href);
            } else if (!isFreench && l.href.startsWith("/fr")) {
              href = l.href.replace(/^\/fr/, "") || "/";
            }
            return (
              <Link
                key={l.href}
                href={href}
                className="rounded-md px-3 py-1.5 font-mono text-xs uppercase tracking-[0.25em] text-vc-muted transition-colors hover:bg-white/5 hover:text-vc-cyan"
              >
                {l.label}
              </Link>
            );
          })}
          {/* Language Selector */}
          <div className="ml-2 border-l border-vc-border pl-2 sm:ml-4 sm:pl-4 relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-1 rounded-md px-3 py-1.5 font-mono text-xs uppercase tracking-[0.25em] text-vc-muted transition-colors hover:bg-white/5 hover:text-vc-cyan"
              aria-label="Select language"
            >
              {currentLang.toUpperCase()}
              <svg
                className={`h-3 w-3 transition-transform ${
                  isOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </button>

            {isOpen && (
              <div className="absolute right-0 mt-2 w-40 rounded-md border border-vc-border bg-black/95 backdrop-blur-sm py-1 z-50">
                {LANGUAGES.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => switchLanguage(lang.code)}
                    className={`block w-full px-4 py-2 text-left font-mono text-xs uppercase tracking-[0.25em] transition-colors ${
                      currentLang === lang.code
                        ? "bg-vc-cyan/20 text-vc-cyan"
                        : "text-vc-muted hover:bg-white/5 hover:text-vc-cyan"
                    }`}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
