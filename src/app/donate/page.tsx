import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Your gift changes a girl's life today — not eventually, today. Choose a donation amount, complete your details, and we'll send bank transfer instructions within minutes.",
  openGraph: {
    title: "Donate | Haven for the Hopeless Foundation",
    description:
      "Your gift changes a life today. Transparent, documented, impactful.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Donate | Haven for the Hopeless Foundation",
    description:
      "Every naira goes directly to girls, women, and communities in need.",
  },
};
import Link from "next/link";
import {
  Package,
  BookOpen,
  User,
  School,
  Star,
  Globe,
  ShieldCheck,
  Eye,
  CheckSquare,
  ArrowRight,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WaveArc } from "@/components/ui/WaveArc";
import { COLORS, DONATION_TIERS, PARTNERS } from "@/lib/constants";
import { DonationForm } from "@/components/donate/DonationForm";

const LIGHT_BLUE = "#EAF1FB";

const ICON_MAP: Record<string, React.ElementType> = {
  Backpack: Package,
  BookOpen,
  User,
  School,
  Star,
  Globe,
};

const BAR_WIDTHS = ["18%", "32%", "48%", "64%", "80%", "100%"];
const BAR_COLORS = [
  "#D4961E",
  "#C88A20",
  "#C84B1F",
  "#8B3B1A",
  "#163660",
  "#0C2447",
];

const TRUST_BADGES = [
  { icon: ShieldCheck, label: "Registered NGO" },
  { icon: Eye, label: "Transparent" },
  { icon: BookOpen, label: "Impact Documented" },
  { icon: CheckSquare, label: "Partners Verified" },
];

const STORIES = [
  {
    photo: "/images/gcamp/WhatsApp Image 2026-06-11 at 09.30.29.jpeg",
    alt: "GCAMP participant — girl who found her voice",
    title: "A girl who found her voice",
    body: "Before GCAMP, she rarely spoke up in class. Today, she leads her school's MEI Club and mentors younger girls.",
    tag: "Confidence Programme",
    tagColor: COLORS.cobalt,
  },
  {
    photo:
      "/images/women-empowerment/WhatsApp Image 2026-06-11 at 16.03.53.jpeg",
    alt: "Widow at HHF women empowerment session",
    title: "The first health check in years",
    body: "100 women received free medical screenings in 2025. For many, it was the first health check in years.",
    tag: "Women Empowerment 2025",
    tagColor: COLORS.ember,
  },
  {
    photo:
      "/images/girlchild-programs/WhatsApp Image 2026-06-11 at 15.58.17.jpeg",
    alt: "Peace Ambassador in training",
    title: "The culture is shifting",
    body: "40 Peace Ambassadors trained. Two schools now have active Peace Clubs. The culture is shifting.",
    tag: "Peacebuilding Programme",
    tagColor: "#163660",
  },
];

const ALLOCATION = [
  {
    label: "Direct Program Delivery",
    percent: 70,
    color: COLORS.gold,
    description:
      "Girls receive learning kits, mentorship sessions, and empowerment training.",
  },
  {
    label: "Operational Support",
    percent: 15,
    color: COLORS.ember,
    description: "Staff salaries, logistics, and field coordination.",
  },
  {
    label: "Monitoring & Evaluation",
    percent: 10,
    color: "#60A5FA",
    description: "Impact tracking, reporting, and accountability systems.",
  },
  {
    label: "Communications & Visibility",
    percent: 5,
    color: "#94A3B8",
    description: "Outreach, press coverage, and donor communications.",
  },
];

const donutGradient = `conic-gradient(${ALLOCATION.map((a, i) => {
  const start = ALLOCATION.slice(0, i).reduce((s, x) => s + x.percent, 0);
  return `${a.color} ${start}% ${start + a.percent}%`;
}).join(", ")})`;

export default function DonatePage() {
  return (
    <>
      <Header />
      <main>
        {/* ── HERO ── */}
        <section className="relative min-h-[72vh] flex flex-col justify-center overflow-hidden">
          <Image
            src="/images/hero/WhatsApp Image 2026-06-11 at 15.59.49 (1).jpeg"
            alt="Girl receiving support from HHF programme — hopeful moment"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-cobalt/75" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <nav className="flex items-center gap-2 text-white/50 text-xs font-semibold mb-8">
              <Link href="/" className="hover:text-white transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-gold">Donate</span>
            </nav>

            <span className="block w-10 h-0.5 bg-gold mb-6" />
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 max-w-3xl">
              Your gift changes a life today.
            </h1>
            <p className="text-white/70 text-lg sm:text-xl max-w-2xl leading-relaxed mb-10">
              Not eventually. Today. GCAMP is running. Girls are showing up.
              Your donation keeps them coming back.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3">
              {TRUST_BADGES.map(({ icon: Icon, label }) => (
                <div
                  key={label}
                  className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm text-white text-xs font-semibold px-4 py-2 rounded-full"
                >
                  <Icon size={13} strokeWidth={2} className="text-gold" />
                  {label}
                </div>
              ))}
            </div>
          </div>

          <WaveArc fill="white" />
        </section>

        {/* ── IMPACT LADDER ── */}
        <section className="relative py-24 bg-white overflow-hidden">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <span className="gold-rule" />
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-cobalt mb-3">
                What your gift does.
              </h2>
              <p className="text-charcoal/60 text-base leading-relaxed">
                Every amount is specific. Every amount matters.
              </p>
            </div>

            <div className="space-y-3">
              {DONATION_TIERS.map((tier, i) => {
                const Icon = ICON_MAP[tier.icon];
                const barColor =
                  BAR_COLORS[i] ?? BAR_COLORS[BAR_COLORS.length - 1];
                const barWidth = BAR_WIDTHS[i] ?? "100%";
                return (
                  <div
                    key={tier.amount}
                    className="relative bg-cobalt/5 rounded-xl overflow-hidden"
                  >
                    {/* Stepped color bar */}
                    <div
                      className="absolute left-0 top-0 bottom-0 rounded-l-xl"
                      style={{
                        width: barWidth,
                        backgroundColor: barColor,
                        opacity: 0.18,
                      }}
                    />
                    <div
                      className="absolute left-0 top-0 bottom-0 w-1 rounded-l-xl"
                      style={{ backgroundColor: barColor }}
                    />
                    <div className="relative z-10 flex items-center gap-4 p-4">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ backgroundColor: `${barColor}20` }}
                      >
                        {Icon && (
                          <Icon
                            size={18}
                            strokeWidth={1.5}
                            style={{ color: barColor }}
                          />
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <span
                          className="font-mono font-bold text-sm"
                          style={{ color: barColor }}
                        >
                          {tier.amount}
                        </span>
                        <p className="text-charcoal/60 text-xs leading-snug mt-0.5">
                          {tier.impact}
                        </p>
                      </div>
                      <Link
                        href="/donate#form"
                        className="shrink-0 text-xs font-bold border border-cobalt/25 text-cobalt hover:bg-cobalt hover:text-white hover:border-cobalt px-3.5 py-1.5 rounded-full transition-all duration-200"
                      >
                        Give this
                      </Link>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <WaveArc fill={LIGHT_BLUE} />
        </section>

        {/* ── DONATION FORM ── */}
        <section
          className="relative py-24 overflow-hidden"
          style={{ backgroundColor: LIGHT_BLUE }}
        >
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <span className="gold-rule" />
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-cobalt mb-2">
                Make your donation.
              </h2>
              <p className="text-charcoal/60 text-base">
                Fill in your details and we will send you bank transfer
                instructions within minutes.
              </p>
            </div>

            <DonationForm />
          </div>

          <WaveArc fill="white" />
        </section>

        {/* ── REAL STORIES ── */}
        <section className="relative py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <span className="gold-rule" />
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-cobalt mb-3">
                Who your gift reaches.
              </h2>
              <p className="text-charcoal/60 text-base leading-relaxed">
                These are the lives on the other side of your decision.
              </p>
            </div>

            <div className="space-y-10">
              {STORIES.map((story, i) => (
                <div
                  key={story.title}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
                    i % 2 !== 0 ? "lg:[direction:rtl]" : ""
                  }`}
                >
                  <div
                    className={`relative h-72 lg:h-90 rounded-2xl overflow-hidden shadow-xl ${
                      i % 2 !== 0 ? "lg:[direction:ltr]" : ""
                    }`}
                  >
                    <Image
                      src={story.photo}
                      alt={story.alt}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover object-center"
                    />
                  </div>
                  <div className={i % 2 !== 0 ? "lg:[direction:ltr]" : ""}>
                    <span
                      className="inline-flex items-center text-white text-[10px] font-bold px-3 py-1 rounded-full mb-4"
                      style={{ backgroundColor: story.tagColor }}
                    >
                      {story.tag}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-cobalt mb-3 leading-snug">
                      {story.title}
                    </h3>
                    <p className="text-charcoal/65 text-base leading-relaxed">
                      {story.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-charcoal/35 text-xs mt-12">
              *Stories representative of real participants. Names changed to
              protect privacy.
            </p>
          </div>

          <WaveArc fill={COLORS.cobalt} />
        </section>

        {/* ── TRANSPARENCY ── */}
        <section className="relative py-24 bg-cobalt overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <span className="block w-10 h-0.5 bg-gold mb-6" />
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3">
                Where your money goes.
              </h2>
              <p className="text-white/50 text-base leading-relaxed">
                We are committed to full transparency. All partners receive
                documented impact reports with photo evidence.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Donut chart */}
              <div className="flex flex-col items-center">
                <div className="relative w-56 h-56">
                  <div
                    className="w-full h-full rounded-full"
                    style={{ background: donutGradient }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-36 h-36 rounded-full bg-cobalt flex flex-col items-center justify-center border-4 border-cobalt">
                      <span className="font-mono font-bold text-gold text-2xl leading-none">
                        100%
                      </span>
                      <span className="text-white/40 text-xs mt-1">
                        Accounted
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Legend */}
              <div className="space-y-5">
                {ALLOCATION.map((item) => (
                  <div key={item.label} className="flex gap-4 items-start">
                    <div
                      className="w-3 h-3 rounded-sm shrink-0 mt-1"
                      style={{ backgroundColor: item.color }}
                    />
                    <div>
                      <div className="flex items-baseline gap-2 mb-0.5">
                        <span
                          className="font-mono font-bold text-lg leading-none"
                          style={{ color: item.color }}
                        >
                          {item.percent}%
                        </span>
                        <span className="text-white font-bold text-sm">
                          {item.label}
                        </span>
                      </div>
                      <p className="text-white/50 text-xs leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <WaveArc fill="white" />
        </section>

        {/* ── PARTNER VALIDATION ── */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <span className="gold-rule mx-auto" />
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-cobalt mb-3">
              Trusted by organisations that have seen the work firsthand.
            </h2>
            <p className="text-charcoal/55 text-base mb-8">
              These organisations have partnered with, observed, and validated
              our programs.
            </p>

            <div className="flex flex-wrap gap-3 justify-center mb-10">
              {PARTNERS.map((p) => (
                <span
                  key={p}
                  className="text-cobalt/70 text-sm font-semibold border border-cobalt/20 px-5 py-2.5 rounded-full bg-cobalt/5"
                >
                  {p}
                </span>
              ))}
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-ember hover:bg-ember/90 text-white font-bold text-sm px-8 py-4 rounded-full transition-all duration-200 shadow-md shadow-ember/20"
            >
              Join them — contact us
              <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
