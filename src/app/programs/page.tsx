import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Star, ArrowRight, ChevronRight, HeartHandshake } from "lucide-react";

export const metadata: Metadata = {
  title: "Our Programs",
  description:
    "Explore HHF's structured programs — GCAMP, Women Empowerment, Drug Prevention, Back-to-School, and the Girl Child Leadership Conference. Built for lasting impact.",
  openGraph: {
    title: "Our Programs | Haven for the Hopeless Foundation",
    description:
      "GCAMP, Women Empowerment, Peacebuilding, and more. Programs built for lasting transformation.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Programs | Haven for the Hopeless Foundation",
    description: "Programs built to transform, not just help.",
  },
};
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WaveArc } from "@/components/ui/WaveArc";
import { COLORS } from "@/lib/constants";

const GCAMP_STATS = [
  { value: "250",      label: "Girls Enrolled" },
  { value: "5",        label: "Schools · Ikorodu" },
  { value: "9-Month",  label: "Program Cycle" },
  { value: "36-State", label: "National Vision" },
];

const PHASES = [
  {
    date: "January 2026",
    label: "PROGRAM LAUNCH",
    accentColor: COLORS.cobalt,
    items: ["GCAMP officially launched", "Pilot cohort begins", "5 schools, Ikorodu, Lagos"],
  },
  {
    date: "February – April 2026",
    label: "MENTORSHIP PHASE 1",
    accentColor: COLORS.ember,
    items: ["Monthly school sessions", "Confidence & leadership modules", "Empowerment kits distributed"],
  },
  {
    date: "May – July 2026",
    label: "MENTORSHIP PHASE 2",
    accentColor: COLORS.cobalt,
    items: ["Emotional intelligence training", "Peer leadership workshops", "Psychosocial support ongoing"],
  },
  {
    date: "August – September 2026",
    label: "LEADERSHIP DEVELOPMENT",
    accentColor: COLORS.ember,
    items: ["Peer leaders identified", "Girl Child Advocates selected", "MEI Clubs established in schools"],
  },
  {
    date: "October 2026",
    label: "CONFERENCE & GRADUATION",
    accentColor: COLORS.gold,
    items: ["Girl Child Leadership Conference", "Ambassador inauguration", "Partners, educators, media"],
  },
];

const EXPANSION_STATES = [
  "Lagos (Active)", "Abuja", "Rivers", "Kano", "Oyo", "Enugu",
  "Kaduna", "Delta", "Ogun", "Edo", "+ 26 more states",
];

const PROGRAMS_2026 = [
  {
    id: "women",
    tag: "March 2026",
    tagBg: COLORS.ember,
    title: "Women Empowerment & Wellness 2.0",
    body: "Supporting 50 widows and 50 market women through health screenings, emotional wellness, business guidance, and livelihood support.",
    stats: ["100 Women", "Health Screenings", "Livelihood Support"],
    photo: "/images/women-empowerment/WhatsApp Image 2026-06-11 at 16.03.51.jpeg",
    photoAlt: "HHF women and widow empowerment programme",
  },
  {
    tag: "May – July 2026",
    tagBg: COLORS.ember,
    id: "drug",
    title: "Drug & Substance Abuse Prevention Campaign",
    body: "School-centred sensitisation programs, peer education, and advocacy training — focused on prevention, awareness, and responsible decision-making among youth.",
    stats: ["Schools Targeted", "Peer Educators", "Youth Focused"],
    photo: "/images/girlchild-advocate-mentorship/WhatsApp Image 2026-06-11 at 15.59.49.jpeg",
    photoAlt: "HHF youth advocacy session",
  },
  {
    tag: "September 2026",
    tagBg: COLORS.ember,
    id: "school",
    title: "Back-to-School Project",
    body: "Distribution of 1,000+ educational materials targeting unregistered and underserved children. Emotional encouragement and affirmation for every learner.",
    stats: ["1,000+ Materials", "Underserved Children", "Emotional Support"],
    photo: "/images/girlchild-programs/WhatsApp Image 2026-06-11 at 15.58.15.jpeg",
    photoAlt: "Back-to-school distribution day, HHF",
  },
  {
    tag: "October 2026",
    tagBg: COLORS.gold,
    id: "conference",
    title: "Girl Child Leadership Conference",
    body: "Graduation ceremony for GCAMP participants. Inauguration of Girl Child Ambassadors. Celebration of leadership, confidence, and advocacy with educators, mentors, and partners.",
    stats: ["250 Graduates", "Girl Child Ambassadors", "Community Celebration"],
    photo: "/images/gcamp/WhatsApp Image 2026-06-11 at 09.30.32.jpeg",
    photoAlt: "HHF Girl Child Leadership Conference and graduation",
  },
];

const SDG_BADGES = [
  { num: "4",  label: "Quality Education",          color: "#C5192D" },
  { num: "5",  label: "Gender Equality",            color: "#FF3A21" },
  { num: "16", label: "Peace & Justice",            color: "#00689D" },
  { num: "17", label: "Partnerships for the Goals", color: "#19486A" },
];

const TRUST_TAGS = ["All Ages", "Documented Impact", "Non-Profit", "Lagos-Based"];

export default function ProgramsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">

        {/* ── SECTION 1 — HERO ─────────────────────────── */}
        <section className="relative min-h-[65vh] flex items-end overflow-hidden">
          <Image
            src="/images/gcamp/WhatsApp Image 2026-06-11 at 09.39.50.jpeg"
            alt="HHF programme in action — multiple beneficiaries"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-ember/75" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/50" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-28 pt-36 w-full">
            <nav className="flex items-center gap-2 text-white/50 text-xs mb-6" aria-label="Breadcrumb">
              <Link href="/" className="hover:text-white/80 transition-colors">Home</Link>
              <ChevronRight size={12} />
              <span className="text-white">Programs</span>
            </nav>
            <span className="block w-12 h-0.5 bg-white/50 mb-6" />
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 max-w-3xl leading-tight">
              Programs built to transform, not just help.
            </h1>
            <p className="text-white/80 text-lg max-w-xl mb-8">
              Structured. Measurable. Designed for lasting impact.
            </p>
            <div className="flex flex-wrap gap-2">
              {TRUST_TAGS.map((tag) => (
                <span key={tag} className="bg-white/15 border border-white/30 text-white text-xs font-semibold px-4 py-1.5 rounded-full backdrop-blur-sm">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <WaveArc fill={COLORS.cobalt} />
        </section>

        {/* ── SECTION 2 — GCAMP FLAGSHIP ───────────────── */}
        <section className="relative py-24 bg-cobalt overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">

              {/* Text — 60% */}
              <div className="lg:col-span-3">
                <div className="inline-flex items-center gap-2 bg-gold/15 border border-gold/30 rounded-full px-4 py-1.5 mb-6">
                  <Star size={12} className="text-gold fill-gold" strokeWidth={0} />
                  <span className="text-gold text-xs font-semibold">
                    Ongoing · Launched January 21, 2026
                  </span>
                </div>

                <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-2 leading-tight">
                  Girl Child Advocacy &amp; Mentorship Project (GCAMP)
                </h2>
                <p className="text-ember font-semibold text-sm mb-6">
                  2026–2030 · National Initiative · Currently Active in Ikorodu, Lagos
                </p>

                <div className="space-y-4 text-white/70 leading-relaxed mb-8">
                  <p>
                    GCAMP is a structured, values-driven mentorship and leadership program designed to raise confident, emotionally intelligent, and purpose-driven girls.
                  </p>
                  <p>
                    Currently running in 5 public primary schools in Ikorodu, reaching 250 girls over a 9-month cycle. By 2030, GCAMP will operate across all 36 states.
                  </p>
                </div>

                {/* 2×2 stat grid */}
                <div className="grid grid-cols-2 gap-3 mb-8">
                  {GCAMP_STATS.map((stat) => (
                    <div key={stat.label} className="bg-ember/15 border border-ember/25 rounded-xl p-4">
                      <div className="font-mono text-xl font-bold text-ember">{stat.value}</div>
                      <div className="text-white/55 text-xs mt-0.5">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <Link
                  href="/programs/gcamp"
                  className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-cobalt font-bold text-sm px-7 py-3.5 rounded-full transition-colors duration-200"
                >
                  Full GCAMP Details
                  <ArrowRight size={15} strokeWidth={2.5} />
                </Link>
              </div>

              {/* Photo collage — 40% */}
              <div className="lg:col-span-2 flex flex-col gap-3 h-80 lg:h-[480px]">
                <div className="relative rounded-2xl overflow-hidden flex-[3]">
                  <Image
                    src="/images/gcamp/WhatsApp Image 2026-06-11 at 09.27.38.jpeg"
                    alt="GCAMP school session 2026"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex gap-3 flex-[2]">
                  <div className="relative rounded-2xl overflow-hidden flex-1">
                    <Image
                      src="/images/gcamp/WhatsApp Image 2026-06-11 at 09.30.29.jpeg"
                      alt="Girls with mentors — GCAMP"
                      fill
                      sizes="20vw"
                      className="object-cover"
                    />
                  </div>
                  <div className="relative rounded-2xl overflow-hidden flex-1">
                    <Image
                      src="/images/gcamp/WhatsApp Image 2026-06-11 at 09.30.31.jpeg"
                      alt="GCAMP empowerment activity"
                      fill
                      sizes="20vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <WaveArc fill={COLORS.cream} />
        </section>

        {/* ── SECTION 3 — GCAMP TIMELINE ───────────────── */}
        <section className="relative py-24 bg-cream overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="block w-12 h-0.5 bg-gold mx-auto mb-6" />
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-cobalt mb-3">
                GCAMP 2026 Roadmap.
              </h2>
              <p className="text-charcoal/60 text-base">
                Five phases. One movement. A generation transformed.
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Gold vertical line — desktop */}
              <div
                className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2"
                style={{ backgroundColor: `${COLORS.gold}50` }}
              />

              <div className="space-y-8">
                {PHASES.map((phase, i) => (
                  <div key={phase.label} className="relative">

                    {/* Mobile layout */}
                    <div className="lg:hidden flex gap-5">
                      <div className="flex flex-col items-center shrink-0">
                        <div
                          className="w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-sm shadow"
                          style={{ backgroundColor: phase.accentColor }}
                        >
                          {i + 1}
                        </div>
                        {i < PHASES.length - 1 && (
                          <div className="w-px flex-1 mt-2" style={{ backgroundColor: `${COLORS.gold}40` }} />
                        )}
                      </div>
                      <div className="pb-8 flex-1">
                        <p className="text-xs font-semibold text-charcoal/40 uppercase tracking-wide mb-1">
                          {phase.date}
                        </p>
                        <h3 className="font-display font-bold text-lg mb-3" style={{ color: phase.accentColor }}>
                          {phase.label}
                        </h3>
                        <ul className="space-y-1.5">
                          {phase.items.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-sm text-charcoal/65">
                              <span className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0" style={{ backgroundColor: phase.accentColor }} />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Desktop layout — alternating */}
                    <div className="hidden lg:flex items-center min-h-24">
                      {/* Left side */}
                      <div className="flex-1 pr-10 flex justify-end">
                        {i % 2 === 0 && (
                          <div
                            className="max-w-xs w-full bg-white rounded-2xl p-5 shadow-sm border-l-4"
                            style={{ borderLeftColor: phase.accentColor }}
                          >
                            <p className="text-xs text-charcoal/40 uppercase tracking-wide mb-1">{phase.date}</p>
                            <h3 className="font-display font-bold text-base mb-2" style={{ color: phase.accentColor }}>
                              {phase.label}
                            </h3>
                            <ul className="space-y-1">
                              {phase.items.map((item) => (
                                <li key={item} className="flex items-start gap-2 text-xs text-charcoal/65">
                                  <span className="w-1.5 h-1.5 rounded-full mt-1 shrink-0" style={{ backgroundColor: phase.accentColor }} />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>

                      {/* Center dot */}
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0 z-10 shadow-md"
                        style={{ backgroundColor: phase.accentColor }}
                      >
                        {i + 1}
                      </div>

                      {/* Right side */}
                      <div className="flex-1 pl-10 flex justify-start">
                        {i % 2 !== 0 && (
                          <div
                            className="max-w-xs w-full bg-white rounded-2xl p-5 shadow-sm border-l-4"
                            style={{ borderLeftColor: phase.accentColor }}
                          >
                            <p className="text-xs text-charcoal/40 uppercase tracking-wide mb-1">{phase.date}</p>
                            <h3 className="font-display font-bold text-base mb-2" style={{ color: phase.accentColor }}>
                              {phase.label}
                            </h3>
                            <ul className="space-y-1">
                              {phase.items.map((item) => (
                                <li key={item} className="flex items-start gap-2 text-xs text-charcoal/65">
                                  <span className="w-1.5 h-1.5 rounded-full mt-1 shrink-0" style={{ backgroundColor: phase.accentColor }} />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Phase 6 — National Expansion */}
              <div className="mt-10 bg-charcoal rounded-2xl p-8 text-center">
                <p className="text-white/40 text-xs uppercase tracking-widest mb-2">2027 – 2030</p>
                <h3 className="font-display text-2xl font-bold text-white mb-2">National Expansion</h3>
                <p className="text-white/60 text-sm mb-6 max-w-xl mx-auto">
                  GCAMP replicates across all 36 states of Nigeria — establishing a nationwide network of mentorship, leadership, and girl-child advocacy.
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {EXPANSION_STATES.map((state) => (
                    <span
                      key={state}
                      className="text-xs px-3 py-1 rounded-full font-medium"
                      style={{
                        backgroundColor: state === "Lagos (Active)" ? COLORS.ember : "rgba(255,255,255,0.08)",
                        color: state === "Lagos (Active)" ? "white" : "rgba(255,255,255,0.55)",
                      }}
                    >
                      {state}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <WaveArc fill={COLORS.cobalt} />
        </section>

        {/* ── SECTION 4 — OTHER 2026 PROGRAMS ──────────── */}
        <section className="relative py-24 bg-cobalt overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="block w-12 h-0.5 bg-gold mx-auto mb-6" />
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
                More programs this year.
              </h2>
            </div>

            <div className="space-y-8">
              {PROGRAMS_2026.map((prog, i) => {
                const photoLeft = i % 2 === 0;
                return (
                  <div key={prog.title} id={prog.id} className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl overflow-hidden shadow-xl">
                    {/* Photo */}
                    <div className={`relative h-72 lg:h-auto min-h-60 ${photoLeft ? "lg:order-first" : "lg:order-last"}`}>
                      <Image
                        src={prog.photo}
                        alt={prog.photoAlt}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-cobalt/25" />
                    </div>

                    {/* Text */}
                    <div className="bg-white p-8 lg:p-10 flex flex-col justify-center">
                      <span
                        className="inline-flex self-start items-center rounded-full px-3 py-1 text-xs font-bold text-white mb-5"
                        style={{ backgroundColor: prog.tagBg }}
                      >
                        {prog.tag}
                      </span>
                      <h3 className="font-display text-2xl font-bold text-cobalt mb-3">{prog.title}</h3>
                      <p className="text-charcoal/65 leading-relaxed mb-5 text-sm">{prog.body}</p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {prog.stats.map((stat) => (
                          <span key={stat} className="text-xs font-semibold px-3 py-1 rounded-full bg-cream text-cobalt border border-cobalt/10">
                            {stat}
                          </span>
                        ))}
                      </div>
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-1.5 text-ember font-bold text-sm group"
                      >
                        Learn More
                        <ArrowRight size={14} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <WaveArc fill={COLORS.cream} />
        </section>

        {/* ── SECTION 5 — SDG ALIGNMENT ────────────────── */}
        <section className="relative py-24 bg-cream overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="block w-12 h-0.5 bg-gold mx-auto mb-6" />
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-cobalt mb-3 max-w-2xl mx-auto leading-tight">
                Our programs align with the UN Sustainable Development Goals.
              </h2>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
              {SDG_BADGES.map((sdg) => (
                <div key={sdg.num} className="bg-white border border-cobalt/10 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-white font-bold text-xl mx-auto mb-4"
                    style={{ backgroundColor: sdg.color }}
                  >
                    {sdg.num}
                  </div>
                  <p className="text-cobalt font-bold text-sm">SDG {sdg.num}</p>
                  <p className="text-charcoal/55 text-xs mt-1">{sdg.label}</p>
                </div>
              ))}
            </div>
          </div>
          <WaveArc fill={COLORS.ember} />
        </section>

        {/* ── SECTION 6 — CLOSING CTA ──────────────────── */}
        <section className="relative py-24 bg-ember overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.12)_0%,_transparent_70%)] pointer-events-none" />
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="block w-12 h-0.5 bg-white/40 mx-auto mb-6" />
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-8">
              Want to sponsor a program?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-white text-ember font-bold text-sm px-8 py-4 rounded-full hover:bg-cream transition-colors duration-200 shadow-lg"
              >
                Partner With HHF
              </Link>
              <Link
                href="/donate"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold text-sm px-8 py-4 rounded-full hover:bg-white/10 transition-colors duration-200"
              >
                <HeartHandshake size={17} strokeWidth={2} />
                Donate Now
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
