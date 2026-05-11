import Image from "next/image";

function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-gold text-lg">◆</span>
          <span className="font-bold tracking-widest text-sm uppercase">
            Megathon
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-text-muted">
          <a href="#about" className="hover:text-white transition-colors">
            About
          </a>
          <a href="#expect" className="hover:text-white transition-colors">
            What to expect
          </a>
          <a href="#venue" className="hover:text-white transition-colors">
            Venue
          </a>
          <a href="#reach" className="hover:text-white transition-colors">
            Reach
          </a>
          <a href="#partners" className="hover:text-white transition-colors">
            Partners
          </a>
          <a href="#team" className="hover:text-white transition-colors">
            Team
          </a>
        </div>
        <a
          href="#join"
          className="bg-gold hover:bg-gold-light text-black font-semibold text-sm px-5 py-2.5 rounded transition-colors"
        >
          Get Involved
        </a>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-bg">
      <div className="absolute right-0 top-0 bottom-0 w-1/2 hidden lg:block">
        <Image
          src="/images/trophy-hero.png"
          alt="MEGATHON trophy"
          fill
          className="object-contain object-right"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg via-bg/60 to-transparent" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
        <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-4">
          ◆ June 19–21, 2026 · Amsterdam
        </p>
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tight mb-6">
          MEGATHON
        </h1>
        <p className="text-xl md:text-2xl text-white/80 max-w-lg mb-12 leading-relaxed">
          Europe&apos;s biggest Launchpad.
          <br />
          48 hours to prove Europe builds different.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl">
          {[
            { value: "500+", label: "Founders & Builders" },
            { value: "€100K+", label: "Prize Pool" },
            { value: "50K+", label: "Community Reach" },
            { value: "5+", label: "Countries" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-gold text-2xl md:text-3xl font-black">
                {stat.value}
              </p>
              <p className="text-white/50 text-xs uppercase tracking-wider mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Thesis() {
  return (
    <section id="about" className="py-32 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <p className="text-gold text-sm font-semibold tracking-widest uppercase mb-8">
          ◆ The Thesis
        </p>
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-8">
          Europe has the builders.
          <br />
          <span className="text-gold">MEGATHON</span> has the stage.
        </h2>
        <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          One weekend. 500 founders from across the continent. Bring your own
          startup. Build it for real. In front of everyone who matters.
        </p>
      </div>
    </section>
  );
}

function WhatToExpect() {
  const pillars = [
    {
      num: "01",
      title: "Build",
      subtitle: "BYOS",
      heading: "Bring Your Own Startup.",
      text: "Not toy projects. Founders ship real products they'll keep running on Monday morning.",
      tags: ["BYOS"],
    },
    {
      num: "02",
      title: "Stakes",
      subtitle: "Cash · Credits · Intros",
      heading: "€100K prize pool.",
      text: "Real money. Real founders. Challenge tracks from sponsors with dedicated prizes on their stack.",
      tags: ["Cash", "Credits", "Intros"],
    },
    {
      num: "03",
      title: "Stage",
      subtitle: "Live · Broadcast",
      heading: "Main-stage finals.",
      text: "LED wall, multi-cam livestream, VCs in the front row. Pitch in front of the people who write checks.",
      tags: ["Live", "Broadcast"],
    },
    {
      num: "04",
      title: "Network",
      subtitle: "Pre-vetted Entry",
      heading: "The room is the prize.",
      text: "500 pre-vetted builders, sponsors, operators, and investors from five countries. One weekend together.",
      tags: ["Pre-vetted Entry"],
    },
  ];

  return (
    <section id="expect" className="py-32 px-6 bg-bg-card">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black mb-2">
          What to expect.
        </h2>
        <p className="text-gold text-3xl md:text-5xl font-black mb-4">
          Not your usual hackathon.
        </p>
        <p className="text-text-muted text-sm uppercase tracking-widest mb-16">
          48 hours · June 19–21
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((p) => (
            <div
              key={p.num}
              className="card-border rounded-lg p-8 bg-bg hover:bg-bg-card-hover transition-all"
            >
              <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-4">
                {p.num} / {p.title}
              </p>
              <h3 className="text-xl font-bold mb-3">{p.heading}</h3>
              <p className="text-white/50 text-sm leading-relaxed mb-6">
                {p.text}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-gold/70 text-xs uppercase tracking-wider"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Vision() {
  return (
    <section className="relative py-48 px-6 overflow-hidden">
      <Image
        src="/images/slide-5.jpg"
        alt="MEGATHON crowd"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <p className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight">
          Europe&apos;s best builders are invisible.
          <br />
          <span className="text-gold">Not this weekend.</span>
        </p>
      </div>
    </section>
  );
}

function Venue() {
  const schedule = [
    {
      day: "FRI",
      date: "19 JUN",
      title: "Doors Open.",
      desc: "Kick-off, team formation, community night.",
    },
    {
      day: "SAT",
      date: "20 JUN",
      title: "Build Weekend.",
      desc: "24 hours of shipping. Mentors, workshops, the long dark build-night.",
    },
    {
      day: "SUN",
      date: "21 JUN",
      title: "Main Stage.",
      desc: "Submissions 15:00. Finals under the lights. Trophy lifted.",
    },
  ];

  return (
    <section id="venue" className="relative py-32 px-6 overflow-hidden">
      <Image
        src="/images/venue-building.jpg"
        alt="The Hubb Amsterdam"
        fill
        className="object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-bg/90 via-bg/70 to-bg/90" />
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        <div>
          <p className="text-text-muted text-xs uppercase tracking-widest mb-4">
            The Venue
          </p>
          <h2 className="text-4xl md:text-5xl font-black mb-2">
            The Hubb. <span className="text-gold">Amsterdam.</span>
          </h2>
          <p className="text-white/60 text-lg mb-8">
            Main stage, build floor, workshop rooms, and crew in one building.
          </p>
          <p className="text-white/40 text-sm mb-2">
            The whole building, hundreds of people building. The building that is
            built to become the national AI Hub. This is its celebration.
          </p>
        </div>
        <div>
          <div className="mb-12">
            <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-2">
              ◆ Capacity
            </p>
            <p className="text-5xl font-black mb-2">
              1,000 <span className="text-2xl text-white/50">max.</span>
            </p>
            <p className="text-white/50 text-sm">
              Room for <span className="text-white">500+ builders</span> plus
              sponsors, mentors, press, and crew.
            </p>
            <p className="text-text-muted text-xs uppercase tracking-widest mt-2">
              Pre-vetted entry badge access
            </p>
          </div>
          <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-6">
            ◆ The Weekend
          </p>
          <div className="space-y-6">
            {schedule.map((item) => (
              <div key={item.day} className="flex gap-6">
                <div className="text-right w-16 shrink-0">
                  <p className="text-gold font-bold text-sm">{item.day}</p>
                  <p className="text-text-muted text-xs">{item.date}</p>
                </div>
                <div>
                  <p className="font-bold text-lg">{item.title}</p>
                  <p className="text-white/50 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Reach() {
  const countries = [
    {
      name: "Netherlands",
      detail: "Home · Amsterdam",
      cities: "Whole of NL",
    },
    {
      name: "Germany",
      detail: "Community Partner · AI Beavers",
      cities: "Berlin · Hamburg · Munich",
    },
    {
      name: "Belgium",
      detail: "Community Partner · Tectonic",
      cities: "Ghent · Brussels",
    },
    {
      name: "Sweden",
      detail: "Community Partner · European Builders",
      cities: "Stockholm",
    },
    {
      name: "France",
      detail: "Community Partner · TAG (Paris Chapter)",
      cities: "Paris",
    },
  ];

  return (
    <section id="reach" className="relative py-32 px-6 overflow-hidden">
      <Image
        src="/images/slide-6.jpg"
        alt="European reach map"
        fill
        className="object-cover opacity-30"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-bg via-transparent to-bg" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black mb-16">
          500+ builders from{" "}
          <span className="text-gold">Continental Europe</span>
        </h2>
        <div className="space-y-6 max-w-3xl">
          {countries.map((c) => (
            <div
              key={c.name}
              className="flex items-center justify-between border-b border-white/10 pb-4"
            >
              <div>
                <h3 className="text-gold text-2xl font-bold">{c.name}</h3>
                <p className="text-text-muted text-xs uppercase tracking-widest">
                  {c.detail}
                </p>
              </div>
              <p className="text-white/40 text-sm">{c.cities}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Partners() {
  const inBuilding = ["Mollie", "techleap", "ai.am", "TAG", "PEAK"];
  const inConversation = [
    "Anthropic",
    "OpenAI",
    "Apify",
    "VEED",
    "Clay",
    "Visa",
    "Flow",
  ];
  const communities = [
    { name: "Young Creators", tag: "30K · NL" },
    { name: "AI Builders", tag: "3K · EU" },
    { name: "AI Beavers", tag: "DE" },
    { name: "EUROTECH", tag: "INT" },
    { name: "BabyVC", tag: "INT" },
    { name: "TAG · Codam · Tulip", tag: "AMS" },
  ];

  return (
    <section id="partners" className="py-32 px-6 bg-bg-card">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black mb-4">
          Backed by Europe&apos;s builder communities.
        </h2>
        <p className="text-white/50 text-lg mb-16">
          Named sponsors, platform partners, and communities already in motion.
        </p>
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-6">
              ◆ In the building
            </p>
            <div className="space-y-4">
              {inBuilding.map((name) => (
                <p key={name} className="text-2xl font-bold">
                  {name}
                </p>
              ))}
            </div>
          </div>
          <div>
            <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-6">
              ◆ In conversation
            </p>
            <div className="space-y-4">
              {inConversation.map((name) => (
                <p key={name} className="text-2xl font-bold text-white/70">
                  {name}
                </p>
              ))}
              <p className="text-gold text-lg">&amp; more</p>
            </div>
          </div>
          <div>
            <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-6">
              ◆ Community
            </p>
            <div className="space-y-4">
              {communities.map((c) => (
                <div key={c.name} className="flex items-center justify-between">
                  <p className="text-lg font-semibold">{c.name}</p>
                  <p className="text-text-muted text-xs uppercase tracking-wider">
                    {c.tag}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Team() {
  const members = [
    { name: "Tijs Nieueboer", role: "Founder & Lead" },
    { name: "Thomas Zwart", role: "Design & Media" },
    { name: "Roger Muller", role: "Global & Sponsors" },
    { name: "Tea Elezi", role: "MC & Events" },
    { name: "Miguel Castillo", role: "Operations" },
    { name: "Boris de Wit", role: "AI & Tech" },
    { name: "Philipp Greiner", role: "Network" },
    { name: "Thomas Termaat", role: "Venue & Production" },
  ];

  return (
    <section id="team" className="relative py-32 px-6 overflow-hidden">
      <Image
        src="/images/slide-8.jpg"
        alt="The MEGATHON team"
        fill
        className="object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/80 to-bg/60" />
      <div className="relative z-10 max-w-7xl mx-auto">
        <p className="text-gold text-xs font-semibold tracking-widest uppercase mb-4">
          ◆ The Operators
        </p>
        <h2 className="text-4xl md:text-6xl font-black mb-4">The team.</h2>
        <p className="text-white/50 text-lg mb-16 max-w-2xl">
          Founders, organizers, and operators who have run 20+ hackathons across
          four countries.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {members.map((m) => (
            <div key={m.name}>
              <p className="font-bold text-lg">{m.name}</p>
              <p className="text-gold/70 text-xs uppercase tracking-widest">
                {m.role}
              </p>
            </div>
          ))}
          <div>
            <p className="font-bold text-lg text-white/50">+ 12 more</p>
            <p className="text-text-muted text-xs uppercase tracking-widest">
              Content · Tech · Ops
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function GetInvolved() {
  const lanes = [
    {
      num: "01",
      title: "Sponsor",
      text: "€2K–€25K tiers. Product in front of 500+ builders.",
    },
    {
      num: "02",
      title: "Partner",
      text: "Co-promos, qualifiers. Fill the room with your people.",
    },
    {
      num: "03",
      title: "Judge / Mentor",
      text: "Panels and office hours. Meet the next founders first.",
    },
    {
      num: "04",
      title: "Speaker",
      text: "Main stage & breakouts. AI, tools, product, craft.",
    },
    {
      num: "05",
      title: "Builder",
      text: "€100K in prizes. Ship something real in one weekend.",
    },
    {
      num: "06",
      title: "Volunteer",
      text: "Reg, stage, tech, content. Run the machine with us.",
    },
  ];

  return (
    <section id="join" className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-black mb-2">
          Everyone&apos;s invited.
        </h2>
        <p className="text-gold text-3xl md:text-5xl font-black mb-4">
          Not everyone&apos;s ready.
        </p>
        <p className="text-white/50 text-lg mb-16">
          Pick a lane. Europe-scale reach, Amsterdam energy.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {lanes.map((l) => (
            <div
              key={l.num}
              className="card-border rounded-lg p-8 bg-bg-card hover:bg-bg-card-hover transition-all group"
            >
              <p className="text-text-muted text-xs tracking-widest mb-3">
                {l.num}
              </p>
              <h3 className="text-2xl font-bold mb-3 group-hover:text-gold transition-colors">
                {l.title}
              </h3>
              <p className="text-white/50 text-sm leading-relaxed">{l.text}</p>
            </div>
          ))}
        </div>
        <div className="bg-bg-card card-border rounded-xl p-12 text-center">
          <p className="text-2xl md:text-3xl font-black mb-2">
            Live in 5+ countries. Amsterdam locked in.
          </p>
          <p className="text-gold text-2xl md:text-3xl font-black mb-8">
            Want in? Let&apos;s talk.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://megathon.xyz"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold hover:bg-gold-light text-black font-bold text-lg px-8 py-4 rounded transition-colors"
            >
              Book a call →
            </a>
            <p className="text-text-muted text-sm">megathon.xyz</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function Closer() {
  return (
    <section className="relative py-48 px-6 overflow-hidden">
      <Image
        src="/images/slide-10.jpg"
        alt="See you in Amsterdam"
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 text-center">
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black">
          See you in <span className="text-gold">Amsterdam.</span>
        </h2>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span className="text-gold">◆</span>
          <span className="font-bold tracking-widest text-sm uppercase">
            Megathon
          </span>
        </div>
        <p className="text-text-muted text-sm">
          June 19–21, 2026 · Amsterdam · megathon.xyz
        </p>
        <p className="text-text-muted text-xs">
          Tijs Nieueboer · Amsterdam
        </p>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Thesis />
      <WhatToExpect />
      <Vision />
      <Venue />
      <Reach />
      <Partners />
      <Team />
      <GetInvolved />
      <Closer />
      <Footer />
    </main>
  );
}
