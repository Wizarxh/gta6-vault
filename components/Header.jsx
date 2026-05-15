"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { SITE } from "@/lib/site";
import logo from "@/public/logo.png";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/news", label: "News" },
  { href: "/about", label: "About" },
  { href: "/newsletter", label: "Newsletter" },
];

const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
];

export default function Header() {
  const [currentLang, setCurrentLang] = useState("en");
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const isFreench = window.location.pathname.startsWith("/fr");
    setCurrentLang(isFreench ? "fr" : "en");
  }, []);

  const switchLanguage = (code) => {
    const currentPath = window.location.pathname;
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

  if (!mounted) {
    return (
      <header className="sticky top-0 z-40 border-b border-vc-border bg-gradient-to-r from-black via-black to-black/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0">
              <Image
                src={logo}
                alt="GTA6 Vault Logo"
                width={56}
                height={56}
                className="w-full h-full object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <div className="font-display font-black text-lg sm:text-xl uppercase tracking-[0.1em]">
                <span className="text-vc-pink">GTA</span>
                <span className="text-vc-cyan">6</span>
              </div>
              <div className="font-mono text-xs uppercase tracking-[0.3em] text-vc-muted -mt-1">
                Vault
              </div>
            </div>
          </Link>
          <nav aria-label="Primary" className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="px-3 py-2 rounded-md font-mono text-xs uppercase tracking-[0.25em] text-vc-muted transition-all duration-200 hover:text-vc-cyan hover:bg-vc-cyan/5"
              >
                {l.label}
              </Link>
            ))}
            <div className="ml-2 border-l border-vc-border pl-2 relative">
              <div className="flex items-center gap-1 px-3 py-2 rounded-md font-mono text-xs uppercase tracking-[0.25em] text-vc-muted">
                EN
              </div>
            </div>
          </nav>
        </div>
      </header>
    );
  }

  return (
    <header className="sticky top-0 z-40 border-b border-vc-border bg-gradient-to-r from-black via-black to-black/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
        {/* Logo + Brand Name */}
        <Link href="/" className="flex items-center gap-3 group">
          {/* Logo Image with Glow Effect on Hover */}
          <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex-shrink-0 transition-all duration-200 group-hover:drop-shadow-[0_0_12px_rgba(255,107,157,0.8)] group-hover:drop-shadow-[0_0_16px_rgba(0,212,255,0.6)]">
            <Image
              src={logo}
              alt="GTA6 Vault Logo"
              width={56}
              height={56}
              className="w-full h-full object-contain"
              priority
            />
          </div>

          {/* Brand Name */}
          <div className="hidden sm:block">
            <div className="font-display font-black text-lg sm:text-xl uppercase tracking-[0.1em]">
              <span className="text-vc-pink">GTA</span>
              <span className="text-vc-cyan">6</span>
            </div>
            <div className="font-mono text-xs uppercase tracking-[0.3em] text-vc-muted -mt-1">
              Vault
            </div>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 rounded-md font-mono text-xs uppercase tracking-[0.25em] text-vc-muted transition-all duration-200 hover:text-vc-cyan hover:bg-vc-cyan/5"
            >
              {link.label}
            </Link>
          ))}

          {/* Language Selector */}
          <div className="ml-2 border-l border-vc-border pl-2 relative">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-1 px-3 py-2 rounded-md font-mono text-xs uppercase tracking-[0.25em] text-vc-muted transition-all duration-200 hover:text-vc-cyan hover:bg-vc-cyan/5"
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
              <div className="absolute right-0 mt-1 w-40 rounded-md border border-vc-border bg-black/95 backdrop-blur-sm py-1 z-50">
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

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 rounded-md text-vc-muted hover:text-vc-cyan hover:bg-vc-cyan/5 transition-all">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      <nav className="md:hidden border-t border-vc-border/50 bg-black/50 backdrop-blur px-4 py-2">
        <div className="flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3 py-2 rounded-md font-mono text-xs uppercase tracking-[0.25em] text-vc-muted hover:text-vc-cyan hover:bg-vc-cyan/5 transition-all"
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="px-3 py-2 rounded-md font-mono text-xs uppercase tracking-[0.25em] text-vc-muted hover:text-vc-cyan hover:bg-vc-cyan/5 transition-all text-left"
          >
            Language: {currentLang.toUpperCase()}
          </button>
          {isOpen && (
            <div className="border border-vc-border rounded-md bg-black/50 backdrop-blur p-1 mt-1">
              {LANGUAGES.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => switchLanguage(lang.code)}
                  className={`block w-full px-3 py-2 text-left font-mono text-xs uppercase tracking-[0.25em] transition-colors ${
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
    </header>
  );
}
