import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Heart,
  Star,
  BookOpen,
  Package,
  School,
  ArrowRight,
  CheckSquare,
  HeartHandshake,
  Download,
  FileText,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WaveArc } from "@/components/ui/WaveArc";
import { COLORS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Our Impact",
  description:
    "Real numbers, real lives. HHF has reached 1,000+ children, supported 100 women, enrolled 250 girls in GCAMP, and trained 40 Peace Ambassadors — all documented.",
  openGraph: {
    title: "Our Impact | Haven for the Hopeless Foundation",
    description:
      "1,000+ children reached. 250 girls in GCAMP. 100 women supported. Every number is a life.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Impact | Haven for the Hopeless Foundation",
    description: "1,000+ children reached. 250 girls in GCAMP. Every number is a life.",
  },
};

const LIGHT_BLUE = "#EAF1FB";

const HEADLINE_STATS = [
  { number: "1,000+", label: "Children Reached",    icon: Users,          color: COLORS.cobalt },
  { number: "250",    label: "Girls in GCAMP",       icon: Star,           color: COLORS.ember  },
  { number: "100",    label: "Women Supported",      icon: Heart,          color: COLORS.gold   },
  { number: "40",     label: "Peace Ambassadors",    icon: HeartHandshake, color: COLORS.cobalt },
  { number: "600+",   label: "Learning Kits Given",  icon: Package,        color: COLORS.ember  },
  { number: "5",      label: "Partner Schools",      icon: School,         color: COLORS.gold   },
];

const PROGRAMS = [
  {
    title: "GCAMP",
    subtitle: "Girl Child Advocacy & Mentorship Project",
    stats: ["250 girls enrolled", "5 schools · Ikorodu", "9-month mentorship cycle", "National expansion by 2030"],
    photo: "/images/gcamp/WhatsApp Image 2026-06-11 at 09.39.47.jpeg",
    photoAlt: "GCAMP girls in mentorship session — Ikorodu 2026",
    bg: COLORS.cobalt,
    href: "/programs/gcamp",
  },
  {
    title: "Women Empowerment",
    subtitle: "Health, Wellness & Livelihood Support",
    stats: ["100 women supported", "Free medical screenings", "Livelihood training sessions", "2025 cohort complete"],
    photo: "/images/women-empowerment/WhatsApp Image 2026-06-11 at 16.03.51.jpeg",
    photoAlt: "HHF women empowerment and health programme",
    bg: COLORS.ember,
    href: "/programs#women",
  },
  {
    title: "Peacebuilding",
    subtitle: "Peace Ambassadors & Non-Violence Culture",
    stats: ["40 Ambassadors trained", "2 Peace Clubs established", "Community-wide advocacy", "Shifting school culture"],
    photo: "/images/girlchild-advocate-mentorship/WhatsApp Image 2026-06-11 at 15.59.50.jpeg",
    photoAlt: "HHF Peace Ambassadors at Ikorodu community session",
    bg: "#163660",
    href: "/programs",
  },
];

const TIMELINE = [
  {
    year: "2024",
    label: "Founded",
    items: [
      "HHF established in Ikorodu, Lagos",
      "Core leadership team assembled",
      "Community needs assessment completed",
    ],
    color: COLORS.cobalt,
  },
  {
    year: "2025",
    label: "First Programs",
    items: [
      "100 women supported (50 widows + 50 market women)",
      "40 Peace Ambassadors trained",
      "600+ learning materials distributed",
      "Community health outreach delivered",
    ],
    color: COLORS.ember,
  },
  {
    year: "2026",
    label: "GCAMP Launches",
    items: [
      "GCAMP launched January 21 — 250 girls enrolled",
      "5 public schools partnered in Ikorodu",
      "Back-to-School Project reaching 1,000+ children",
      "Girl Child Leadership Conference planned for October",
    ],
    color: COLORS.gold,
  },
];

const SDG_BADGES = [
  { num: "4",  label: "Quality Education", color: "#C5192D" },
  { num: "5",  label: "Gender Equality",   color: "#FF3A21" },
  { num: "16", label: "Peace & Justice",   color: "#00689D" },
  { num: "17", label: "Partnerships",      color: "#19486A" },
];

export default function ImpactPage() {
  return (
    <>
      <Header />
      <main>
        {/* ── HERO ── */}
        <section className="relative pt-40 pb-28 bg-cobalt overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,#163660_0%,transparent_65%)] pointer-events-none" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-white/40 text-xs font-semibold mb-8">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-gold">Impact</span>
            </nav>

            <span className="block w-10 h-0.5 bg-gold mb-6" />
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 max-w-3xl">
              Numbers that tell the story.
            </h1>
            <p className="text-white/60 text-lg sm:text-xl max-w-xl leading-relaxed mb-14">
              Every figure below represents a life touched, a community changed, and a promise kept.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-w-2xl">
              {HEADLINE_STATS.map(({ number, label, icon: Icon, color }) => (
                <div
                  key={label}
                  className="bg-white/8 border border-white/12 rounded-2xl p-5 backdrop-blur-sm"
                >
                  <Icon size={16} strokeWidth={1.5} style={{ color }} className="mb-3" />
                  <p className="font-mono font-bold text-2xl sm:text-3xl text-white leading-none mb-1">
                    {number}
                  </p>
                  <p className="text-white/50 text-xs font-semibold">{label}</p>
                </div>
              ))}
            </div>
          </div>

          <WaveArc fill={LIGHT_BLUE} />
        </section>

        {/* ── PROGRAM IMPACT ── */}
        <section className="relative py-24 overflow-hidden" style={{ backgroundColor: LIGHT_BLUE }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <span className="gold-rule" />
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-cobalt mb-3">
                Where the impact lives.
              </h2>
              <p className="text-charcoal/60 text-base">
                Three programs. One mission. Thousands of lives.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {PROGRAMS.map((prog) => (
                <div
                  key={prog.title}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm border border-cobalt/8 flex flex-col"
                >
                  <div className="relative h-52">
                    <Image
                      src={prog.photo}
                      alt={prog.photoAlt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 33vw"
                      className="object-cover object-center"
                    />
                    <div className="absolute inset-0" style={{ backgroundColor: `${prog.bg}D0` }} />
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <h3 className="font-display text-xl font-bold text-white mb-0.5">
                        {prog.title}
                      </h3>
                      <p className="text-white/65 text-xs">{prog.subtitle}</p>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col">
                    <ul className="space-y-2.5 mb-6 flex-1">
                      {prog.stats.map((stat) => (
                        <li key={stat} className="flex items-center gap-2.5">
                          <CheckSquare
                            size={14}
                            className="text-cobalt shrink-0"
                            strokeWidth={2}
                          />
                          <span className="text-charcoal/70 text-sm">{stat}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      href={prog.href}
                      className="inline-flex items-center gap-1.5 text-sm font-bold text-cobalt hover:text-ember group transition-colors"
                    >
                      Learn more
                      <ArrowRight
                        size={14}
                        strokeWidth={2.5}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <WaveArc fill="white" />
        </section>

        {/* ── TIMELINE ── */}
        <section className="relative py-24 bg-white overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-14">
              <span className="gold-rule" />
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-cobalt mb-3">
                A movement in motion.
              </h2>
              <p className="text-charcoal/60 text-base">
                From founding to national impact — two years of real work.
              </p>
            </div>

            <div>
              {TIMELINE.map((entry, i) => (
                <div key={entry.year} className="grid grid-cols-[56px_1fr] gap-6 items-start">
                  <div className="flex flex-col items-center">
                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center font-mono font-bold text-white text-sm shrink-0 shadow-sm"
                      style={{ backgroundColor: entry.color }}
                    >
                      {entry.year}
                    </div>
                    {i < TIMELINE.length - 1 && (
                      <div
                        className="w-px flex-1 mt-3"
                        style={{ backgroundColor: `${COLORS.gold}35`, minHeight: "48px" }}
                      />
                    )}
                  </div>

                  <div className={i < TIMELINE.length - 1 ? "pb-10" : ""}>
                    <span
                      className="text-xs font-bold uppercase tracking-widest mb-4 block"
                      style={{ color: entry.color }}
                    >
                      {entry.label}
                    </span>
                    <ul className="space-y-2">
                      {entry.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5 text-sm text-charcoal/65">
                          <span
                            className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                            style={{ backgroundColor: entry.color }}
                          />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <WaveArc fill={COLORS.cobalt} />
        </section>

        {/* ── SDG ALIGNMENT ── */}
        <section className="relative py-24 bg-cobalt overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="block w-10 h-0.5 bg-gold mx-auto mb-6" />
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3">
                Aligned with global goals.
              </h2>
              <p className="text-white/50 text-base max-w-lg mx-auto">
                HHF&apos;s programs directly contribute to four UN Sustainable Development Goals.
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {SDG_BADGES.map((sdg) => (
                <div
                  key={sdg.num}
                  className="rounded-2xl p-6 text-center"
                  style={{ backgroundColor: sdg.color }}
                >
                  <p className="font-mono font-bold text-3xl text-white mb-1">SDG {sdg.num}</p>
                  <p className="text-white/80 text-sm font-semibold">{sdg.label}</p>
                </div>
              ))}
            </div>
          </div>

          <WaveArc fill={COLORS.ember} />
        </section>

        {/* ── IMPACT REPORT DOWNLOAD ── */}
        <section className="py-20 bg-cream">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-3xl shadow-sm border border-cobalt/8 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5">
                {/* Left — accent block */}
                <div
                  className="lg:col-span-2 flex flex-col items-center justify-center gap-4 p-10"
                  style={{ backgroundColor: COLORS.cobalt }}
                >
                  <div className="w-16 h-16 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center">
                    <FileText size={30} className="text-gold" strokeWidth={1.5} />
                  </div>
                  <p className="text-white/50 text-xs font-bold uppercase tracking-widest text-center">
                    Official Document
                  </p>
                  <p className="font-display text-xl font-bold text-white text-center leading-snug">
                    2025 Impact Report
                  </p>
                  <p className="text-gold text-xs font-semibold text-center">
                    Haven for the Hopeless Foundation
                  </p>
                </div>

                {/* Right — content */}
                <div className="lg:col-span-3 p-8 lg:p-10 flex flex-col justify-center">
                  <span className="gold-rule" />
                  <h2 className="font-display text-2xl sm:text-3xl font-bold text-cobalt mb-3">
                    Read the full story of 2025.
                  </h2>
                  <p className="text-charcoal/60 text-base leading-relaxed mb-6">
                    Our 2025 Impact Report documents every programme, every number, and every life — widows empowered, children reached, Peace Ambassadors trained, and the launch of GCAMP. Transparent, photographed, and verified.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a
                      href="/HHF-Impact-Report-2025.pdf"
                      download="HHF-Impact-Report-2025.pdf"
                      className="inline-flex items-center justify-center gap-2 bg-cobalt hover:bg-cobalt/90 text-white font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-200 shadow-md"
                    >
                      <Download size={16} strokeWidth={2.5} />
                      Download Report (PDF)
                    </a>
                    <a
                      href="/HHF-Impact-Report-2025.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 border-2 border-cobalt/30 hover:border-cobalt text-cobalt font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-200"
                    >
                      View in Browser
                      <ArrowRight size={15} strokeWidth={2.5} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── DONATE CTA ── */}
        <section className="py-20 bg-ember">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3">
              Be part of the next chapter.
            </h2>
            <p className="text-white/70 text-base mb-8">
              Every donation adds another number to this page — and another life to the story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/donate"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-cream text-cobalt font-bold text-sm px-10 py-4 rounded-full transition-all duration-200 shadow-lg"
              >
                <Heart size={16} strokeWidth={2.5} />
                Donate Now
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/50 hover:border-white text-white font-bold text-sm px-10 py-4 rounded-full transition-all duration-200 hover:bg-white/10"
              >
                Partner With Us
                <ArrowRight size={16} strokeWidth={2.5} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
