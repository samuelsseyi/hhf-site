import type { Metadata } from "next";
import { Fragment } from "react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn the story behind Haven for the Hopeless Foundation — our mission, vision, core values, and the passionate team transforming lives in Ikorodu, Lagos since 2024.",
  openGraph: {
    title: "About Us | Haven for the Hopeless Foundation",
    description: "Our story, mission, vision, and the team behind the work.",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Haven for the Hopeless Foundation",
    description: "HHF was built from a burden to do more. Learn who we are.",
  },
};
import Image from "next/image";
import Link from "next/link";
import {
  ChevronRight,
  Heart,
  Users,
  HandHeart,
  Eye,
  Leaf,
  CheckSquare,
  Sparkles,
  Globe,
  ShieldCheck,
  Home,
  RefreshCw,
  ArrowRight,
  HeartHandshake,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WaveArc } from "@/components/ui/WaveArc";
import { BRAND, PARTNERS, COLORS } from "@/lib/constants";

const VALUES = [
  {
    icon: Heart,
    title: "Compassion",
    body: "We lead with empathy in every interaction.",
  },
  {
    icon: Users,
    title: "Teamwork",
    body: "We achieve more when we move together.",
  },
  {
    icon: HandHeart,
    title: "Service",
    body: "We exist to serve, not to be seen.",
  },
  {
    icon: Eye,
    title: "Transparency",
    body: "Every naira and every action is accountable.",
  },
  {
    icon: Leaf,
    title: "Humility",
    body: "We learn from the communities we serve.",
  },
  {
    icon: CheckSquare,
    title: "Responsibility",
    body: "We own our outcomes — good and bad.",
  },
  {
    icon: Sparkles,
    title: "Excellence",
    body: "We do the work well because the work matters.",
  },
];

const WHY_HHF = [
  {
    icon: RefreshCw,
    title: "Long-term, not one-off",
    body: "We walk with communities over months and years — not just once. Transformation takes time.",
  },
  {
    icon: CheckSquare,
    title: "Measurable & accountable",
    body: "Every program is documented, reported, and verified. Partners receive impact reports with photo evidence.",
  },
  {
    icon: Home,
    title: "Built from within",
    body: "Our facilitators, mentors, and volunteers come from and belong to the communities we serve. We're not outsiders — we're neighbours.",
  },
];

const TOC_STEPS = [
  {
    label: "INPUT",
    bg: COLORS.cobalt,
    darkText: false,
    items: [
      "Donors & Partners",
      "Volunteer Mentors",
      "Educational Materials",
      "Psychosocial Support",
    ],
  },
  {
    label: "ACTIVITY",
    bg: COLORS.ember,
    darkText: false,
    items: [
      "Mentorship Sessions",
      "Empowerment Programs",
      "Health Screenings",
      "Peacebuilding Training",
    ],
  },
  {
    label: "OUTPUT",
    bg: COLORS.gold,
    darkText: true,
    items: [
      "Girls Enrolled in GCAMP",
      "Women Supported",
      "Counselors Trained",
      "Materials Distributed",
    ],
  },
  {
    label: "OUTCOME",
    bg: "#163660",
    darkText: false,
    items: [
      "Improved Confidence",
      "Leadership Skills",
      "Emotional Resilience",
      "Non-Violence Culture",
    ],
  },
  {
    label: "IMPACT",
    bg: COLORS.charcoal,
    darkText: false,
    items: [
      "Empowered Generation",
      "Stronger Communities",
      "Gender Equality",
      "Sustainable Nigeria",
    ],
  },
];

const SDG_BADGES = [
  { num: "4", label: "Quality Education", color: "#C5192D" },
  { num: "5", label: "Gender Equality", color: "#FF3A21" },
  { num: "16", label: "Peace & Justice", color: "#00689D" },
  { num: "17", label: "Partnerships for the Goals", color: "#19486A" },
];

const TEAM = [
  {
    photo: "/images/team/Founder HHF -Amb Mercy Igwe.jpeg",
    name: "Amb. Mercy Igwe",
    role: "Founder & Executive Director",
    bio: "A passionate advocate for girl-child empowerment and community development, Amb. Mercy Igwe founded HHF in 2024 with a vision to create safe spaces for the less privileged in Ikorodu, Lagos.",
  },
  {
    photo: "/images/team/WhatsApp Image 2026-06-15 at 05.20.34 (1).jpeg",
    name: "Programs Director",
    role: "Director of Programs",
    bio: "Oversees the design and delivery of all HHF programs, ensuring structured, measurable impact across every initiative — from GCAMP to community wellness.",
  },
  {
    photo: "/images/team/WhatsApp Image 2026-06-15 at 05.20.35 (1).jpeg",
    name: "Outreach Coordinator",
    role: "Volunteer & Outreach Coordinator",
    bio: "Builds and manages HHF's growing network of volunteers and community partners, connecting passionate individuals to meaningful service opportunities.",
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* ── SECTION 1 — HERO ─────────────────────────── */}
        <section className="relative min-h-[70vh] flex items-end overflow-hidden bg-cobalt">
          <Image
            src="/images/team/WhatsApp Image 2026-06-15 at 05.20.35 (3).jpeg"
            alt="HHF founder and leadership team at a programme event"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-cobalt/80" />
          <div className="absolute inset-0 bg-linear-to-b from-black/30 via-transparent to-black/55" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-28 pt-36 w-full">
            <nav
              className="flex items-center gap-2 text-white/50 text-xs mb-6"
              aria-label="Breadcrumb"
            >
              <Link href="/" className="hover:text-gold transition-colors">
                Home
              </Link>
              <ChevronRight size={12} />
              <span className="text-gold">About</span>
            </nav>
            <span className="block w-12 h-0.5 bg-gold mb-6" />
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 max-w-3xl leading-tight">
              We Are Haven for the Hopeless.
            </h1>
            <p className="font-display text-xl sm:text-2xl font-bold italic text-gold">
              A home. A movement. A promise.
            </p>
          </div>

          <WaveArc fill={COLORS.cream} />
        </section>

        {/* ── SECTION 2 — OUR STORY ────────────────────── */}
        <section className="relative py-24 bg-cream overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Photo collage */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-4/3">
                  <Image
                    src="/images/team/Founder HHF -Amb Mercy Igwe (2).jpeg"
                    alt="Amb. Mercy Igwe at HHF event"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3 mt-3">
                  <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
                    <Image
                      src="/images/team/WhatsApp Image 2026-06-15 at 05.20.33 (1).jpeg"
                      alt="HHF team at community outreach"
                      fill
                      sizes="25vw"
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="relative rounded-xl overflow-hidden shadow-md aspect-square">
                    <Image
                      src="/images/gcamp/WhatsApp Image 2026-06-11 at 09.26.54.jpeg"
                      alt="First GCAMP programme session, Ikorodu 2024"
                      fill
                      sizes="25vw"
                      className="object-cover object-center"
                    />
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-gold rounded-2xl -z-10" />
              </div>

              {/* Text */}
              <div>
                <span className="eyebrow">Our Story</span>
                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-cobalt mb-6 leading-tight">
                  Built from a burden to do more.
                </h2>
                <div className="space-y-4 text-charcoal/70 leading-relaxed">
                  <p>
                    Haven for the Hopeless Foundation was founded on the
                    conviction that every person — no matter their background,
                    circumstance, or social standing — deserves access to a
                    community of support, opportunity, and hope.
                  </p>
                  <p>
                    HHF was established in 2024 in Ikorodu, Lagos, with a clear
                    focus: girls, women, and the less privileged. Not as charity
                    cases — but as people of enormous, often untapped potential.
                  </p>
                  <p>
                    In our first year alone, we reached 1,000+ children,
                    supported 50 widows, trained 40 Peace Ambassadors, and
                    launched GCAMP — a national mentorship initiative already
                    transforming lives across 5 schools in Lagos.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <WaveArc fill={COLORS.cobalt} />
        </section>

        {/* ── SECTION 3 — MISSION & VISION ─────────────── */}
        <section className="relative py-24 bg-cobalt overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="block w-12 h-0.5 bg-gold mx-auto mb-6" />
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
                What We Stand For.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Mission */}
              <div
                className="bg-white/5 border border-white/10 rounded-2xl p-8"
                style={{ borderTop: `4px solid ${COLORS.gold}` }}
              >
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gold/15 text-gold mb-5">
                  <ShieldCheck size={24} strokeWidth={1.75} />
                </span>
                <h3 className="font-display text-xl font-bold text-white mb-3">
                  Our Mission
                </h3>
                <p className="text-white/70 leading-relaxed">
                  To build a safe space for the hopeless and the less privileged
                  through development, empowerment, and advocacy.
                </p>
              </div>

              {/* Vision */}
              <div
                className="bg-white/5 border border-white/10 rounded-2xl p-8"
                style={{ borderTop: `4px solid ${COLORS.ember}` }}
              >
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-ember/15 text-ember mb-5">
                  <Globe size={24} strokeWidth={1.75} />
                </span>
                <h3 className="font-display text-xl font-bold text-white mb-3">
                  Our Vision
                </h3>
                <p className="text-white/70 leading-relaxed">
                  A Nigeria where every girl, woman, and underserved child has
                  access to the support, tools, and community they need to
                  thrive.
                </p>
              </div>
            </div>
          </div>
          <WaveArc fill={COLORS.cream} />
        </section>

        {/* ── SECTION 4 — CORE VALUES ──────────────────── */}
        <section className="relative py-24 bg-cream overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="block w-12 h-0.5 bg-gold mx-auto mb-6" />
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-cobalt">
                What We Stand On.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {VALUES.map(({ icon: Icon, title, body }, i) => (
                <div
                  key={title}
                  className={`group rounded-2xl bg-white border border-cobalt/8 p-6 flex flex-col gap-3 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ${
                    i === VALUES.length - 1 ? "sm:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <span className="block w-8 h-0.5 bg-gold mb-1" />
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-cobalt/6 text-cobalt group-hover:bg-cobalt group-hover:text-white transition-colors duration-300">
                    <Icon size={18} strokeWidth={2} />
                  </span>
                  <h3 className="font-display text-lg font-bold text-cobalt">
                    {title}
                  </h3>
                  <p className="text-charcoal/60 text-sm leading-relaxed">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <WaveArc fill={COLORS.cobalt} />
        </section>

        {/* ── SECTION 5 — WHY HHF ──────────────────────── */}
        <section className="relative py-24 bg-cobalt overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="block w-12 h-0.5 bg-gold mx-auto mb-6" />
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
                Why HHF. Why Now.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {WHY_HHF.map(({ icon: Icon, title, body }) => (
                <div
                  key={title}
                  className="flex flex-col items-center text-center"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gold/15 flex items-center justify-center mb-5">
                    <Icon size={28} strokeWidth={1.5} className="text-gold" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white mb-3">
                    {title}
                  </h3>
                  <p className="text-white/65 leading-relaxed text-sm">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <WaveArc fill={COLORS.cream} />
        </section>

        {/* ── SECTION 6 — THEORY OF CHANGE ─────────────── */}
        <section className="relative py-24 bg-cream overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="block w-12 h-0.5 bg-gold mx-auto mb-6" />
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-cobalt mb-3">
                How Change Happens.
              </h2>
              <p className="text-charcoal/60 text-base max-w-xl mx-auto">
                Our theory of change in five steps.
              </p>
            </div>

            {/* Flow — horizontal desktop, vertical mobile */}
            <div className="flex flex-col lg:flex-row items-stretch gap-3">
              {TOC_STEPS.map((step, i) => (
                <Fragment key={step.label}>
                  <div className="flex-1 rounded-2xl overflow-hidden shadow-sm">
                    <div
                      className="px-4 py-3 text-center"
                      style={{ backgroundColor: step.bg }}
                    >
                      <span
                        className={`text-xs font-bold tracking-widest uppercase ${step.darkText ? "text-charcoal" : "text-white"}`}
                      >
                        {step.label}
                      </span>
                    </div>
                    <div className="bg-white p-4">
                      <ul className="space-y-2">
                        {step.items.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2 text-xs text-charcoal/70 leading-relaxed"
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                              style={{ backgroundColor: step.bg }}
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  {i < TOC_STEPS.length - 1 && (
                    <div className="flex items-center justify-center text-cobalt/30">
                      <ChevronRight size={20} className="hidden lg:block" />
                      <div className="lg:hidden h-4 w-px bg-cobalt/20" />
                    </div>
                  )}
                </Fragment>
              ))}
            </div>

            {/* SDG Badges */}
            <div className="mt-14 pt-10 border-t border-cobalt/10">
              <p className="text-center text-cobalt/40 text-xs uppercase tracking-widest mb-6">
                Aligned with the UN Sustainable Development Goals
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                {SDG_BADGES.map((sdg) => (
                  <div
                    key={sdg.num}
                    className="flex items-center gap-3 bg-white border border-cobalt/10 rounded-xl px-4 py-3 shadow-sm"
                  >
                    <div
                      className="w-9 h-9 rounded-lg flex items-center justify-center text-white font-bold text-sm shrink-0"
                      style={{ backgroundColor: sdg.color }}
                    >
                      {sdg.num}
                    </div>
                    <span className="text-xs text-cobalt font-medium">
                      SDG {sdg.num} — {sdg.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <WaveArc fill={COLORS.cobalt} />
        </section>

        {/* ── SECTION 7 — PARTNERSHIPS ─────────────────── */}
        <section className="relative py-24 bg-cobalt overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <span className="block w-12 h-0.5 bg-gold mx-auto mb-6" />
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3 max-w-2xl mx-auto">
                Trusted by partners who believe in the work.
              </h2>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {PARTNERS.map((partner) => (
                <div
                  key={partner}
                  className="bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white font-semibold text-sm hover:bg-white/15 transition-colors duration-200"
                >
                  {partner}
                </div>
              ))}
            </div>

            <div className="text-center">
              <p className="text-white/55 text-sm mb-5">
                Interested in partnering? Let&apos;s talk.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border-2 border-gold text-gold hover:bg-gold hover:text-cobalt font-bold text-sm px-7 py-3 rounded-full transition-all duration-200"
              >
                Get in Touch
                <ArrowRight size={15} strokeWidth={2.5} />
              </Link>
            </div>
          </div>
          <WaveArc fill={COLORS.cream} />
        </section>

        {/* ── SECTION 8 — TEAM ─────────────────────────── */}
        <section className="relative py-24 bg-cream overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="block w-12 h-0.5 bg-gold mx-auto mb-6" />
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-cobalt mb-3">
                The people behind the mission.
              </h2>
              <p className="text-charcoal/60 text-base">
                Passionate. Trained. Committed.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {TEAM.map(({ photo, name, role, bio }) => (
                <div
                  key={name}
                  className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 group"
                >
                  <div className="relative aspect-4/3 overflow-hidden">
                    <Image
                      src={photo}
                      alt={`${name} — ${role}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-cobalt/40 to-transparent" />
                  </div>
                  <div className="p-6">
                    <span className="block w-8 h-0.5 bg-gold mb-3" />
                    <h3 className="font-display text-lg font-bold text-cobalt mb-1">
                      {name}
                    </h3>
                    <p className="text-ember text-xs font-semibold uppercase tracking-wide mb-3">
                      {role}
                    </p>
                    <p className="text-charcoal/65 text-sm leading-relaxed">
                      {bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <WaveArc fill={COLORS.ember} />
        </section>

        {/* ── SECTION 9 — CLOSING CTA ──────────────────── */}
        <section className="relative py-24 bg-ember overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.12)_0%,_transparent_70%)] pointer-events-none" />
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="block w-12 h-0.5 bg-white/40 mx-auto mb-6" />
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-8">
              Ready to support the work?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/donate"
                className="inline-flex items-center justify-center gap-2 bg-white text-ember font-bold text-sm px-8 py-4 rounded-full hover:bg-cream transition-colors duration-200 shadow-lg"
              >
                <HeartHandshake size={17} strokeWidth={2} />
                Donate Now
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-bold text-sm px-8 py-4 rounded-full hover:bg-white/10 transition-colors duration-200"
              >
                Get in Touch
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
