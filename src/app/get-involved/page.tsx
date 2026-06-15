import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Get Involved",
  description:
    "Donate, partner, volunteer, or give in kind. There's a role here for you — and your contribution directly transforms lives in Ikorodu, Lagos.",
  openGraph: {
    title: "Get Involved | Haven for the Hopeless Foundation",
    description: "Donate, partner, or volunteer. Your contribution changes lives.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Involved | Haven for the Hopeless Foundation",
    description: "There's a role here for you. Donate, partner, or volunteer with HHF.",
  },
};
import {
  Package,
  Users,
  Star,
  Building2,
  HeartHandshake,
  Globe,
  CheckSquare,
  GraduationCap,
  BookOpen,
  Home,
  ArrowRight,
  Download,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WaveArc } from "@/components/ui/WaveArc";
import { COLORS, PARTNERS } from "@/lib/constants";
import { VolunteerForm } from "@/components/get-involved/VolunteerForm";

const DONATION_TIERS = [
  { icon: Package, amount: "₦5,000", label: "Learning kit for 1 girl" },
  { icon: Users, amount: "₦20,000", label: "Mentorship for 5 girls" },
  { icon: Star, amount: "₦50,000", label: "Full GCAMP cycle for 1 girl" },
  { icon: Building2, amount: "₦100,000", label: "School monthly session" },
  { icon: HeartHandshake, amount: "₦200,000", label: "Partners one full school" },
  { icon: Globe, amount: "Custom", label: "Program Sponsor" },
];

const PARTNERSHIP_BENEFITS = [
  "Program and impact reports",
  "Photo and video documentation",
  "Brand recognition and visibility",
  "Access to program events",
  "Co-branded program materials",
];

const VOLUNTEER_ROLES = [
  { icon: GraduationCap, label: "School Mentor" },
  { icon: Users, label: "Event Facilitator" },
  { icon: Globe, label: "Social Media Volunteer" },
  { icon: BookOpen, label: "Content & Documentation" },
  { icon: Home, label: "Logistics & Field Support" },
];

const IN_KIND_ITEMS = [
  "Exercise books & notebooks",
  "Pens, pencils, and crayons",
  "School bags",
  "Health & hygiene supplies",
  "First aid materials",
  "Non-perishable food items",
];

export default function GetInvolvedPage() {
  return (
    <>
      <Header />
      <main>
        {/* ── HERO ── */}
        <section className="relative min-h-[70vh] flex flex-col justify-center overflow-hidden">
          <Image
            src="/images/hero/WhatsApp Image 2026-06-11 at 15.58.16 (2).jpeg"
            alt="HHF community volunteers and supporters in action"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-cobalt/70" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
            <nav className="flex items-center gap-2 text-white/50 text-xs font-semibold mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <span className="text-gold">Get Involved</span>
            </nav>

            <span className="block w-10 h-0.5 bg-gold mb-6" />
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 max-w-3xl">
              There&apos;s a role here for you.
            </h1>
            <p className="text-white/70 text-lg sm:text-xl max-w-2xl leading-relaxed">
              Whether you give money, time, skills, or a platform — your contribution changes lives.
            </p>
          </div>

          <WaveArc fill={COLORS.cream} />
        </section>

        {/* ── DONATE ── */}
        <section className="relative py-24 bg-cream overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text + ladder */}
              <div>
                <div className="inline-flex items-center gap-2 bg-gold/20 text-gold text-xs font-bold px-3 py-1.5 rounded-full mb-6">
                  <HeartHandshake size={14} strokeWidth={2} />
                  Donate
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-cobalt mb-4">
                  Every naira goes directly to the work.
                </h2>
                <p className="text-charcoal/60 text-base leading-relaxed mb-8">
                  Every naira you give goes directly to girls, women, and communities in need.
                  Documented. Transparent. Impactful.
                </p>

                {/* Donation ladder */}
                <div className="space-y-3 mb-8">
                  {DONATION_TIERS.map((tier) => {
                    const Icon = tier.icon;
                    return (
                      <div
                        key={tier.amount}
                        className="flex items-center gap-4 bg-white rounded-xl px-5 py-3.5 shadow-sm border border-cobalt/10"
                      >
                        <div className="w-8 h-8 rounded-lg bg-cobalt/10 flex items-center justify-center shrink-0">
                          <Icon size={16} className="text-cobalt" strokeWidth={1.5} />
                        </div>
                        <span className="font-mono font-bold text-cobalt text-sm w-28 shrink-0">
                          {tier.amount}
                        </span>
                        <span className="text-charcoal/70 text-sm">{tier.label}</span>
                      </div>
                    );
                  })}
                </div>

                <Link
                  href="/donate"
                  className="inline-flex items-center gap-2 bg-ember hover:bg-ember/90 text-white font-bold text-sm px-8 py-4 rounded-full transition-all duration-200 shadow-md shadow-ember/20"
                >
                  Donate Now
                  <ArrowRight size={16} strokeWidth={2.5} />
                </Link>
              </div>

              {/* Photo */}
              <div className="relative h-96 lg:h-140 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/gcamp/WhatsApp Image 2026-06-11 at 09.26.54.jpeg"
                  alt="Beneficiary receiving support from HHF"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>

          <WaveArc fill={COLORS.cobalt} />
        </section>

        {/* ── CORPORATE PARTNERSHIP ── */}
        <section className="relative py-24 bg-cobalt overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Photo */}
              <div className="relative h-80 lg:h-[480px] rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
                <Image
                  src="/images/women-empowerment/WhatsApp Image 2026-06-11 at 16.03.51.jpeg"
                  alt="Corporate community event — HHF partners"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Text */}
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 bg-white/10 text-white text-xs font-bold px-3 py-1.5 rounded-full mb-6">
                  <Building2 size={14} strokeWidth={2} />
                  Corporate Partnership
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-4">
                  Align your CSR with measurable impact.
                </h2>
                <p className="text-white/60 text-base leading-relaxed mb-6">
                  Join MTN, Nestlé, and others already partnering with HHF to create documented,
                  transparent impact in Nigerian communities.
                </p>

                <h3 className="text-white/50 text-xs font-bold uppercase tracking-widest mb-4">
                  What partners receive
                </h3>
                <ul className="space-y-3 mb-8">
                  {PARTNERSHIP_BENEFITS.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3">
                      <CheckSquare size={16} className="text-gold shrink-0" strokeWidth={2} />
                      <span className="text-white/80 text-sm">{benefit}</span>
                    </li>
                  ))}
                </ul>

                {/* Partner logos strip */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {PARTNERS.map((p) => (
                    <span
                      key={p}
                      className="text-white/50 text-xs font-semibold border border-white/20 px-3 py-1.5 rounded-full"
                    >
                      {p}
                    </span>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-cobalt font-bold text-sm px-8 py-4 rounded-full transition-all duration-200 shadow-lg"
                >
                  Discuss a Partnership
                  <ArrowRight size={16} strokeWidth={2.5} />
                </Link>
              </div>
            </div>
          </div>

          <WaveArc fill="white" />
        </section>

        {/* ── VOLUNTEER ── */}
        <section id="volunteer" className="relative py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Text + form */}
              <div>
                <div className="inline-flex items-center gap-2 bg-cobalt/10 text-cobalt text-xs font-bold px-3 py-1.5 rounded-full mb-6">
                  <Users size={14} strokeWidth={2} />
                  Volunteer
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-cobalt mb-4">
                  Your skill and time directly changes a life.
                </h2>
                <p className="text-charcoal/60 text-base leading-relaxed mb-8">
                  Become a mentor, facilitator, event supporter, or social media advocate.
                </p>

                {/* Roles */}
                <div className="flex flex-wrap gap-2 mb-10">
                  {VOLUNTEER_ROLES.map((role) => {
                    const Icon = role.icon;
                    return (
                      <span
                        key={role.label}
                        className="inline-flex items-center gap-2 bg-cobalt/5 border border-cobalt/15 text-cobalt text-xs font-semibold px-3.5 py-2 rounded-full"
                      >
                        <Icon size={13} strokeWidth={2} />
                        {role.label}
                      </span>
                    );
                  })}
                </div>

                <VolunteerForm />
              </div>

              {/* Photo */}
              <div className="relative h-80 lg:h-full min-h-96 rounded-2xl overflow-hidden shadow-xl lg:sticky lg:top-24">
                <Image
                  src="/images/girlchild-advocate-mentorship/WhatsApp Image 2026-06-11 at 15.59.50.jpeg"
                  alt="HHF volunteer with programme participants"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>

          <WaveArc fill={COLORS.cream} />
        </section>

        {/* ── IN-KIND SUPPORT ── */}
        <section className="relative py-24 bg-cream overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Photo */}
              <div className="relative h-80 lg:h-[460px] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/girlchild-programs/WhatsApp Image 2026-06-11 at 15.58.17.jpeg"
                  alt="School supplies and in-kind donation for HHF"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center"
                />
              </div>

              {/* Text */}
              <div>
                <div className="inline-flex items-center gap-2 bg-gold/20 text-gold text-xs font-bold px-3 py-1.5 rounded-full mb-6">
                  <Package size={14} strokeWidth={2} />
                  In-Kind Support
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-cobalt mb-4">
                  We welcome physical donations.
                </h2>
                <p className="text-charcoal/60 text-base leading-relaxed mb-8">
                  We welcome donations of educational materials, health supplies, food items, and
                  equipment for our programs.
                </p>

                <h3 className="text-cobalt/50 text-xs font-bold uppercase tracking-widest mb-4">
                  Most needed items
                </h3>
                <ul className="space-y-3 mb-8">
                  {IN_KIND_ITEMS.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckSquare size={16} className="text-cobalt shrink-0" strokeWidth={2} />
                      <span className="text-charcoal/70 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-cobalt hover:bg-cobalt-light text-white font-bold text-sm px-8 py-4 rounded-full transition-all duration-200 shadow-md"
                >
                  Contact Us to Arrange
                  <ArrowRight size={16} strokeWidth={2.5} />
                </Link>
              </div>
            </div>
          </div>

          <WaveArc fill={COLORS.ember} />
        </section>

        {/* ── IMPACT REPORT DOWNLOAD ── */}
        <section className="py-14 bg-cobalt">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-white/8 border border-white/15 rounded-2xl px-8 py-6">
              <div className="flex items-center gap-5">
                <div className="w-12 h-12 rounded-xl bg-gold/15 border border-gold/25 flex items-center justify-center shrink-0">
                  <Download size={20} className="text-gold" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="text-white font-bold text-base">2025 Impact Report</p>
                  <p className="text-white/50 text-sm">See exactly where every programme goes — documented and verified.</p>
                </div>
              </div>
              <a
                href="/HHF-Impact-Report-2025.pdf"
                download="HHF-Impact-Report-2025.pdf"
                className="shrink-0 inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-cobalt font-bold text-sm px-6 py-3 rounded-full transition-all duration-200 shadow-md"
              >
                <Download size={15} strokeWidth={2.5} />
                Download PDF
              </a>
            </div>
          </div>
        </section>

        {/* ── CLOSING CTA ── */}
        <section className="relative py-24 bg-ember overflow-hidden">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-4">
              Whatever you bring — bring it.
            </h2>
            <p className="text-white/70 text-lg mb-10">
              The work needs all of us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/donate"
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-cream text-cobalt font-bold text-sm px-8 py-4 rounded-full transition-all duration-200 shadow-lg"
              >
                Donate Now
                <ArrowRight size={16} strokeWidth={2.5} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/50 hover:border-white text-white font-bold text-sm px-8 py-4 rounded-full transition-all duration-200 hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
