import { Analytics } from "@vercel/analytics/next";
import { SiteNav } from "@/components/site-nav";
import { StickyCta } from "@/components/sticky-cta";

const SLIDES = [
  { n: "01", id: "top", title: "Hero" },
  { n: "02", id: "about", title: "Thesis" },
  { n: "03", id: "expect", title: "What to expect" },
  { n: "04", id: "venue", title: "Venue" },
  { n: "05", id: "vision", title: "Vision" },
  { n: "06", id: "reach", title: "Reach" },
  { n: "07", id: "partners", title: "Partners" },
  { n: "08", id: "team", title: "Team" },
  { n: "09", id: "join", title: "Join in" },
  { n: "10", id: "closer", title: "Closer" },
];

export default function Home() {
  return (
    <main id="top" className="bg-black text-white">
      <SiteNav />
      {SLIDES.map((s, i) => (
        <section
          key={s.n}
          id={s.id}
          className="relative flex h-screen w-screen items-center justify-center overflow-hidden bg-black pt-20"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`/deck/slide-${s.n}-1920.webp`}
            srcSet={`/deck/slide-${s.n}-768.webp 768w, /deck/slide-${s.n}-1280.webp 1280w, /deck/slide-${s.n}-1920.webp 1920w`}
            sizes="100vw"
            alt={`MEGATHON ${s.title}`}
            width={1920}
            height={1080}
            loading={i === 0 ? "eager" : "lazy"}
            fetchPriority={i === 0 ? "high" : "low"}
            decoding={i === 0 ? "sync" : "async"}
            className="h-full w-full object-contain"
          />
        </section>
      ))}

      <section
        id="book"
        className="relative w-screen overflow-hidden bg-black px-6 py-20 md:py-28 text-center"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 65% 55% at 50% 50%, rgba(212,168,67,0.18) 0%, rgba(212,168,67,0.04) 38%, transparent 72%)",
          }}
        />
        <span
          aria-hidden
          className="pointer-events-none absolute top-[22%] left-[20%] h-1 w-1 rounded-full bg-gold"
          style={{ boxShadow: "0 0 10px 2px rgba(212,168,67,0.55)" }}
        />
        <span
          aria-hidden
          className="pointer-events-none absolute bottom-[24%] right-[22%] h-1 w-1 rounded-full bg-gold-light"
          style={{ boxShadow: "0 0 10px 2px rgba(232,201,106,0.5)" }}
        />

        <div className="relative z-10 mx-auto max-w-2xl">
          <p className="text-gold text-[10px] md:text-[11px] font-semibold tracking-[0.4em] uppercase mb-5">
            ◆ Let&apos;s talk
          </p>
          <h2 className="text-[2.5rem] md:text-6xl font-black leading-[1.05] tracking-tight mb-5">
            Got <span className="text-gold">20 minutes</span>?
          </h2>
          <p className="text-white/70 text-base md:text-lg mb-10 leading-relaxed">
            We&apos;ll walk you through the deck, the sponsorship tiers, the
            build floor, and who&apos;s in the room. Pick a slot that works
            for your team.
          </p>

          <a
            href="https://cal.com/tijs-lerai/megathon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-gold hover:bg-gold-light text-black font-bold text-sm md:text-base px-7 py-3.5 shadow-[0_8px_24px_-8px_rgba(212,168,67,0.6)] hover:shadow-[0_14px_32px_-10px_rgba(212,168,67,0.8)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            <span className="text-base leading-none">◆</span>
            Book a call
            <span aria-hidden>→</span>
          </a>

          <p className="text-text-muted text-[10px] uppercase tracking-[0.4em] mt-8">
            June 19–21, 2026 · Amsterdam · megathon.xyz
          </p>
        </div>
      </section>

      <StickyCta />
      <Analytics />
    </main>
  );
}
