"use client";

import { useEffect, useState } from "react";

export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      const doc = document.documentElement;
      const total = doc.scrollHeight - window.innerHeight;
      if (total <= 0) return;
      const ratio = window.scrollY / total;
      setVisible(ratio > 0.6 && ratio < 0.96);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <a
      href="https://cal.com/tijs-lerai/megathon"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Book a call with Tijs"
      className={
        "fixed bottom-6 right-6 z-40 inline-flex items-center gap-2 rounded-full bg-gold text-black font-bold text-sm px-5 py-3 shadow-[0_10px_30px_-8px_rgba(212,168,67,0.6)] hover:bg-gold-light hover:shadow-[0_18px_40px_-10px_rgba(212,168,67,0.8)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-bg " +
        (visible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-3 pointer-events-none")
      }
      style={{
        transition:
          "opacity 300ms ease, transform 300ms ease, background-color 200ms ease, box-shadow 200ms ease",
      }}
    >
      <span className="text-base leading-none">◆</span>
      Book a call
      <span aria-hidden>→</span>
    </a>
  );
}
