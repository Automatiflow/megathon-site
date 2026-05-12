"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#expect", label: "What to expect" },
  { href: "#venue", label: "Venue" },
  { href: "#reach", label: "Reach" },
  { href: "#partners", label: "Partners" },
  { href: "#team", label: "Team" },
];

export function SiteNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <a
            href="#top"
            className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold rounded"
          >
            <span className="text-gold text-lg">◆</span>
            <span className="font-bold tracking-widest text-sm uppercase">
              Megathon
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8 text-sm text-text-muted">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="hover:text-white transition-colors focus-visible:outline-none focus-visible:text-white"
              >
                {l.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href="https://cal.com/tijs-lerai/megathon"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold hover:bg-gold-light text-black font-semibold text-sm px-5 py-2.5 rounded transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
            >
              Book a call
            </a>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav-drawer"
              onClick={() => setOpen((v) => !v)}
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded ring-1 ring-white/10 text-white/80 hover:text-white hover:ring-gold/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                {open ? (
                  <path
                    d="M6 6 L18 18 M18 6 L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                ) : (
                  <>
                    <path d="M4 7 H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M4 12 H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M4 17 H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <div
        id="mobile-nav-drawer"
        className={
          "fixed inset-0 z-40 md:hidden transition-opacity " +
          (open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none")
        }
        aria-hidden={!open}
      >
        <button
          type="button"
          aria-label="Close menu overlay"
          onClick={() => setOpen(false)}
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        />
        <div
          className={
            "absolute right-0 top-0 h-full w-[78%] max-w-sm bg-bg-card border-l border-gold/15 px-6 pt-24 pb-10 flex flex-col gap-6 transition-transform " +
            (open ? "translate-x-0" : "translate-x-full")
          }
        >
          <p className="text-gold text-xs font-semibold tracking-[0.3em] uppercase">
            ◆ Menu
          </p>
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-xl font-bold py-3 border-b border-white/5 hover:text-gold transition-colors"
              >
                {l.label}
              </a>
            ))}
          </div>
          <a
            href="https://cal.com/tijs-lerai/megathon"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="mt-auto bg-gold hover:bg-gold-light text-black font-bold text-base px-6 py-3 rounded text-center transition-colors"
          >
            Book a call →
          </a>
          <p className="text-text-muted text-[10px] uppercase tracking-[0.25em] text-center">
            June 19–21, 2026 · Amsterdam
          </p>
        </div>
      </div>
    </>
  );
}
