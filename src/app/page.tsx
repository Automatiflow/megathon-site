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
      <StickyCta />
      <Analytics />
    </main>
  );
}
