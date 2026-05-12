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
        className="relative flex min-h-screen w-screen flex-col items-center justify-center overflow-hidden bg-black px-6 pt-32 pb-24 text-center"
      >
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 50% 45%, rgba(212,168,67,0.22) 0%, rgba(212,168,67,0.05) 38%, transparent 72%)",
          }}
        />
        <span
          aria-hidden
          className="pointer-events-none absolute top-[18%] left-[22%] h-1.5 w-1.5 rounded-full bg-gold"
          style={{ boxShadow: "0 0 14px 3px rgba(212,168,67,0.6)" }}
        />
        <span
          aria-hidden
          className="pointer-events-none absolute bottom-[28%] right-[24%] h-1.5 w-1.5 rounded-full bg-gold-light"
          style={{ boxShadow: "0 0 14px 3px rgba(232,201,106,0.55)" }}
        />

        <div className="relative z-10 max-w-4xl">
          <p className="text-gold text-[11px] font-semibold tracking-[0.4em] uppercase mb-8">
            ◆ Let&apos;s talk
          </p>
          <h2 className="text-6xl md:text-8xl font-black leading-[1.02] tracking-tight mb-10">
            Got <span className="text-gold gold-glow">20 minutes</span>?
          </h2>
          <p className="text-white/75 text-xl md:text-2xl mb-14 leading-relaxed max-w-2xl mx-auto">
            We&apos;ll walk you through the deck, the sponsorship tiers, the
            build floor, and who&apos;s in the room. Pick a slot that works
            for your team.
          </p>

          <a
            href="https://cal.com/tijs-lerai/megathon"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full bg-gold hover:bg-gold-light text-black font-bold text-base md:text-lg px-8 py-4 shadow-[0_10px_30px_-8px_rgba(212,168,67,0.65)] hover:shadow-[0_18px_40px_-10px_rgba(212,168,67,0.85)] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            <span className="text-lg leading-none">◆</span>
            Book a call
            <span aria-hidden>→</span>
          </a>

          <p className="text-text-muted text-[10px] uppercase tracking-[0.4em] mt-12">
            June 19–21, 2026 · Amsterdam · megathon.xyz
          </p>
        </div>
      </section>

      <StickyCta />
      <Analytics />
    </main>
  );
}
