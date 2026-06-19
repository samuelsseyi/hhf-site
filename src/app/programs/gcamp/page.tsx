import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "GCAMP: Girl Child Advocacy & Mentorship Project",
  description:
    "GCAMP is a 9-month structured mentorship program reaching 250 girls across 5 schools in Ikorodu, Lagos. Launched January 2026, expanding to all 36 states by 2030.",
  openGraph: {
    title: "GCAMP | Haven for the Hopeless Foundation",
    description:
      "250 girls. 5 schools. 9 months. GCAMP is building the next generation of confident, purpose-driven Nigerian girls.",
  },
  twitter: {
    card: "summary_large_image",
    title: "GCAMP | Haven for the Hopeless Foundation",
    description: "250 girls. 5 schools. A 9-month mentorship cycle changing lives.",
  },
};
import Link from "next/link";
import {
  Star,
  Users,
  Eye,
  Heart,
  Leaf,
  CheckSquare,
  Sparkles,
  BookOpen,
  Package,
  Home,
  Building2,
  ArrowRight,
  Globe,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WaveArc } from "@/components/ui/WaveArc";
import { COLORS } from "@/lib/constants";

const STATS = [
  { number: "250", label: "Girls Enrolled" },
  { number: "5", label: "Schools" },
  { number: "9", label: "Month Cycle" },
  { number: "36", label: "State Vision" },
];

const PAIN_POINTS = [
  {
    icon: Users,
    title: "Limited access to safe and consistent mentorship",
    body: "Without a trusted adult to walk with them, girls often navigate critical years alone.",
  },
  {
    icon: Eye,
    title: "Low self-confidence and weak self-expression",
    body: "Many girls are told, directly or indirectly, that their voice doesn't matter.",
  },
  {
    icon: Star,
    title: "Little leadership exposure",
    body: "Girls rarely see themselves in leadership roles when no one puts them there.",
  },
  {
    icon: Heart,
    title: "Emotional neglect and unaddressed psychosocial needs",
    body: "Formal education is essential, but it is not enough without intentional emotional support.",
  },
];

const FEATURES = [
  {
    icon: BookOpen,
    overlayColor: COLORS.cobalt,
    title: "Structured Mentorship Sessions",
    body: "Age-appropriate learning materials delivered monthly across 5 schools.",
    photo: "/images/gcamp/WhatsApp Image 2026-06-11 at 09.26.54.jpeg",
  },
  {
    icon: Star,
    overlayColor: COLORS.ember,
    title: "Confidence & Leadership Training",
    body: "Activities designed to grow self-belief and develop emerging leaders.",
    photo: "/images/gcamp/WhatsApp Image 2026-06-11 at 09.30.29.jpeg",
  },
  {
    icon: Heart,
    overlayColor: COLORS.gold,
    title: "Emotional Intelligence",
    body: "Self-expression, emotional regulation, and social awareness skills.",
    photo: "/images/girlchild-advocate-mentorship/WhatsApp Image 2026-06-11 at 15.59.47.jpeg",
  },
  {
    icon: Users,
    overlayColor: COLORS.cobalt,
    title: "Advocacy & Peer Leadership",
    body: "Girls are trained to become voices for change in their schools and communities.",
    photo: "/images/girlchild-programs/WhatsApp Image 2026-06-11 at 15.58.17.jpeg",
  },
  {
    icon: Package,
    overlayColor: COLORS.ember,
    title: "Empowerment Kits",
    body: "Each participant receives a kit to support dignity, participation, and learning.",
    photo: "/images/girlchild-advocate-mentorship/WhatsApp Image 2026-06-11 at 15.59.50.jpeg",
  },
];

const INDIRECT = [
  {
    icon: Home,
    title: "Families of participants",
    body: "Parents and siblings influenced by the growth they see.",
  },
  {
    icon: Building2,
    title: "School Communities",
    body: "Teachers and peers benefit from improved culture and leadership.",
  },
  {
    icon: Users,
    title: "Peer Networks",
    body: "Each girl becomes an advocate in her wider circle.",
  },
];

const NIGERIA_ACTIVE = ["Lagos"];
const NIGERIA_EXPANSION = ["Rivers", "FCT Abuja", "Oyo", "Delta", "Enugu", "Kano"];
const NIGERIA_FUTURE = [
  "Abia", "Adamawa", "Akwa Ibom", "Anambra", "Bauchi", "Bayelsa",
  "Benue", "Borno", "Cross River", "Ebonyi", "Edo", "Ekiti",
  "Gombe", "Imo", "Jigawa", "Kaduna", "Kebbi", "Kogi",
  "Kwara", "Nasarawa", "Niger", "Ogun", "Ondo", "Osun",
  "Plateau", "Sokoto", "Taraba", "Yobe", "Zamfara",
];

const OUTCOMES = [
  {
    icon: Sparkles,
    title: "Improved Confidence",
    body: "Girls will demonstrate measurable improvements in self-identity, confidence, and self-expression.",
    borderColor: COLORS.gold,
  },
  {
    icon: Star,
    title: "Peer Leaders Groomed",
    body: "Emerging peer leaders identified and trained within each school.",
    borderColor: COLORS.ember,
  },
  {
    icon: Users,
    title: "Girl Child Advocates",
    body: "Selected participants inaugurated as official Girl Child Advocates.",
    borderColor: COLORS.cobalt,
  },
  {
    icon: Leaf,
    title: "MEI Clubs Established",
    body: "Mentorship, Empowerment & Impact Clubs in every pilot school.",
    borderColor: COLORS.gold,
  },
];

const WHY_PARTNER = [
  "Long-term transformation, not one-off charity",
  "Directly impacts girls, families, and school systems",
  "Builds leadership, advocacy, and emotional resilience",
  "Aligns with SDG 4 and SDG 5",
  "Structured, measurable, accountable, and replicable nationwide",
];

const SDG_BADGES = [
  { num: "4", label: "Quality Education", color: "#C5192D" },
  { num: "5", label: "Gender Equality", color: "#FF3A21" },
];

const LIGHT_BLUE = "#EAF1FB";

export default function GCAMPPage() {
  return (
    <>
      <Header />
      <main>
        {/* ── HERO ── */}
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
          <Image
            src="/images/gcamp/WhatsApp Image 2026-06-11 at 09.39.50.jpeg"
            alt="GCAMP girls and mentors at school — Ikorodu 2026"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-cobalt/75" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 lg:py-40">
            <nav className="flex items-center gap-2 text-white/50 text-xs font-semibold mb-8">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <span>/</span>
              <Link href="/programs" className="hover:text-white transition-colors">Programs</Link>
              <span>/</span>
              <span className="text-gold">GCAMP</span>
            </nav>

            <div className="inline-flex items-center gap-2 bg-gold/20 border border-gold/40 text-gold text-xs font-bold px-4 py-2 rounded-full mb-6">
              <Star size={12} strokeWidth={2.5} />
              Active Program · Launched January 21, 2026
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 max-w-4xl">
              The Girl Child Advocacy &amp; Mentorship Project
            </h1>
            <p className="font-display text-xl sm:text-2xl font-bold italic text-ember mb-10">
              GCAMP · 2026–2030 · National Initiative
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 max-w-3xl">
              {STATS.map((s) => (
                <div key={s.label} className="bg-white/10 border border-white/20 rounded-xl p-4 text-center backdrop-blur-sm">
                  <p className="font-mono text-3xl font-bold text-gold leading-none mb-1">{s.number}</p>
                  <p className="text-white/70 text-xs font-semibold">{s.label}</p>
                </div>
              ))}
            </div>

            <Link
              href="/donate"
              className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-cobalt font-bold text-sm px-8 py-4 rounded-full transition-all duration-200 shadow-lg"
            >
              Support GCAMP
              <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
          </div>

          <WaveArc fill="white" />
        </section>

        {/* ── WHY GCAMP EXISTS ── */}
        <section className="relative py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <span className="gold-rule" />
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-cobalt mb-4">
                Why GCAMP was created.
              </h2>
              <p className="text-charcoal/60 text-lg leading-relaxed">
                Many adolescent girls face challenges that school alone cannot solve.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {PAIN_POINTS.map((point) => {
                const Icon = point.icon;
                return (
                  <div
                    key={point.title}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-cobalt/10"
                    style={{ borderLeft: `4px solid ${COLORS.cobalt}` }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-cobalt/10 flex items-center justify-center shrink-0">
                        <Icon size={20} className="text-cobalt" strokeWidth={1.5} />
                      </div>
                      <div>
                        <h3 className="font-bold text-cobalt mb-2 leading-snug">{point.title}</h3>
                        <p className="text-charcoal/60 text-sm leading-relaxed">{point.body}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-cobalt rounded-2xl p-8 max-w-3xl">
              <p className="text-white text-lg font-semibold leading-relaxed">
                GCAMP fills this gap by walking consistently with girls over a{" "}
                <span className="text-gold font-bold">9-month mentorship cycle</span>.
              </p>
            </div>
          </div>

          <WaveArc fill={COLORS.cream} />
        </section>

        {/* ── WHAT GIRLS RECEIVE ── */}
        <section className="relative py-24 bg-cream overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <span className="gold-rule" />
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-cobalt">
                What every girl gets.
              </h2>
            </div>

            <div className="flex sm:grid sm:grid-cols-3 lg:grid-cols-5 gap-4 overflow-x-auto sm:overflow-visible pb-4 sm:pb-0">
              {FEATURES.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="shrink-0 w-64 sm:w-auto relative rounded-2xl overflow-hidden h-80 shadow-md"
                  >
                    <Image
                      src={feature.photo}
                      alt={feature.title}
                      fill
                      sizes="(max-width: 640px) 256px, (max-width: 1024px) 33vw, 20vw"
                      className="object-cover object-center"
                    />
                    <div
                      className="absolute inset-0"
                      style={{ backgroundColor: `${feature.overlayColor}CC` }}
                    />
                    <div className="relative z-10 h-full flex flex-col justify-end p-5">
                      <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center mb-3">
                        <Icon size={20} className="text-white" strokeWidth={1.5} />
                      </div>
                      <h3 className="font-bold text-white text-sm leading-snug mb-2">{feature.title}</h3>
                      <p className="text-white/80 text-xs leading-relaxed">{feature.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <WaveArc fill={LIGHT_BLUE} />
        </section>

        {/* ── WHO GCAMP REACHES ── */}
        <section
          className="relative py-24 overflow-hidden"
          style={{ backgroundColor: LIGHT_BLUE }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <span className="gold-rule" />
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-cobalt">
                Who we&apos;re reaching.
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Direct beneficiaries */}
              <div>
                <div className="flex items-end gap-2 mb-2">
                  <span className="font-mono text-8xl font-bold leading-none text-gold">250</span>
                </div>
                <p className="text-cobalt font-bold text-lg mb-6">Adolescent girls directly enrolled</p>
                <ul className="space-y-2 mb-8">
                  {[
                    "5 public primary schools",
                    "Ikorodu, Lagos State",
                    "~50 girls per school",
                    "Ages 8–16",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-charcoal/70 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="relative h-56 rounded-2xl overflow-hidden shadow-md">
                  <Image
                    src="/images/gcamp/WhatsApp Image 2026-06-11 at 09.26.54.jpeg"
                    alt="Girls group photo at pilot school — GCAMP 2026"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* Indirect beneficiaries */}
              <div>
                <h3 className="text-cobalt/60 text-xs font-bold tracking-widest uppercase mb-6">
                  Indirect Beneficiaries
                </h3>
                <div className="space-y-4">
                  {INDIRECT.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div key={item.title} className="bg-white rounded-2xl p-6 shadow-sm">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-xl bg-cobalt/10 flex items-center justify-center shrink-0">
                            <Icon size={20} className="text-cobalt" strokeWidth={1.5} />
                          </div>
                          <div>
                            <h4 className="font-bold text-cobalt mb-1">{item.title}</h4>
                            <p className="text-charcoal/60 text-sm leading-relaxed">{item.body}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <WaveArc fill={COLORS.cobalt} />
        </section>

        {/* ── NIGERIA REACH MAP ── */}
        <section className="relative py-24 bg-cobalt overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-14">
              <span className="block w-10 h-0.5 bg-gold mx-auto mb-6" />
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
                A national vision starting in Lagos.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
              {/* Active */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-3 h-3 rounded-full bg-ember shrink-0" />
                  <span className="text-white/60 text-xs font-bold uppercase tracking-widest">Currently Active</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-3">
                  {NIGERIA_ACTIVE.map((state) => (
                    <span
                      key={state}
                      className="inline-flex items-center gap-2 bg-ember text-white text-sm font-bold px-5 py-2.5 rounded-full shadow-md"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
                      {state}
                    </span>
                  ))}
                </div>
                <p className="text-white/40 text-xs">Pilot 2026 · 5 Schools · 250 Girls</p>
              </div>

              {/* Expansion 2027 */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: "#4A7FBD" }} />
                  <span className="text-white/60 text-xs font-bold uppercase tracking-widest">2027 Expansion Targets</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {NIGERIA_EXPANSION.map((state) => (
                    <span
                      key={state}
                      className="inline-flex items-center text-white text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20"
                      style={{ backgroundColor: "#1C3E6E" }}
                    >
                      {state}
                    </span>
                  ))}
                </div>
              </div>

              {/* Future 2028–2030 */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-3 h-3 rounded-full bg-white/20 shrink-0" />
                  <span className="text-white/60 text-xs font-bold uppercase tracking-widest">Future Rollout 2028–2030</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {NIGERIA_FUTURE.map((state) => (
                    <span
                      key={state}
                      className="inline-flex items-center text-white/40 text-xs font-medium px-2.5 py-1 rounded-full border border-white/10 bg-white/5"
                    >
                      {state}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Legend */}
            <div className="flex flex-wrap gap-6 justify-center mb-8">
              <span className="flex items-center gap-2 text-white/60 text-xs">
                <span className="w-3 h-3 rounded-full bg-ember" />
                Currently Active (Lagos)
              </span>
              <span className="flex items-center gap-2 text-white/60 text-xs">
                <span className="w-3 h-3 rounded-full" style={{ backgroundColor: "#4A7FBD" }} />
                Planned Expansion (2027)
              </span>
              <span className="flex items-center gap-2 text-white/60 text-xs">
                <span className="w-3 h-3 rounded-full bg-white/20" />
                Future Rollout (2028–2030)
              </span>
            </div>

            <div className="text-center">
              <p className="text-white/50 text-sm mb-8">
                By 2030, GCAMP will be active in all 36 states of Nigeria.
              </p>
              <Link
                href="/donate"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-cobalt font-bold text-sm px-8 py-4 rounded-full transition-all duration-200 shadow-lg"
              >
                Help Us Expand
                <ArrowRight size={16} strokeWidth={2.5} />
              </Link>
            </div>
          </div>

          <WaveArc fill="white" />
        </section>

        {/* ── 2026 EXPECTED OUTCOMES ── */}
        <section className="relative py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <span className="gold-rule" />
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-cobalt">
                What 2026 will achieve.
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {OUTCOMES.map((outcome) => {
                const Icon = outcome.icon;
                return (
                  <div
                    key={outcome.title}
                    className="bg-white rounded-2xl p-8 shadow-sm border border-cobalt/10"
                    style={{ borderTop: `4px solid ${outcome.borderColor}` }}
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${outcome.borderColor}20` }}
                    >
                      <Icon size={22} strokeWidth={1.5} style={{ color: outcome.borderColor }} />
                    </div>
                    <h3 className="font-bold text-cobalt text-lg mb-3">{outcome.title}</h3>
                    <p className="text-charcoal/60 text-sm leading-relaxed">{outcome.body}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <WaveArc fill={COLORS.ember} />
        </section>

        {/* ── WHY PARTNER WITH GCAMP ── */}
        <section className="relative py-24 bg-ember overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <span className="block w-10 h-0.5 bg-white/40 mb-6" />
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white">
                Why be part of GCAMP.
              </h2>
            </div>

            <div className="space-y-4 max-w-2xl mb-12">
              {WHY_PARTNER.map((item) => (
                <div key={item} className="flex items-start gap-4 bg-white/10 rounded-2xl p-5">
                  <CheckSquare size={20} className="text-white shrink-0 mt-0.5" strokeWidth={2} />
                  <p className="text-white font-semibold leading-relaxed">{item}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {SDG_BADGES.map((badge) => (
                <div
                  key={badge.num}
                  className="flex items-center gap-3 rounded-xl px-5 py-3"
                  style={{ backgroundColor: badge.color }}
                >
                  <span className="font-mono text-xl font-bold text-white leading-none">SDG {badge.num}</span>
                  <span className="text-white/80 text-xs font-semibold">{badge.label}</span>
                </div>
              ))}
            </div>
          </div>

          <WaveArc fill={COLORS.cobalt} />
        </section>

        {/* ── CLOSING QUOTE ── */}
        <section className="relative py-24 bg-cobalt overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Globe size={40} className="text-gold/40 mx-auto mb-8" strokeWidth={1} />
            <blockquote className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold italic text-white leading-relaxed mb-6">
              &ldquo;GCAMP is not a future idea. It is already happening, and partners are joining mid-journey to expand its reach.&rdquo;
            </blockquote>
            <p className="text-gold font-semibold mb-12">HHF Programs Team</p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/donate"
                className="inline-flex items-center justify-center gap-2 bg-ember hover:bg-ember/90 text-white font-bold text-sm px-8 py-4 rounded-full transition-all duration-200 shadow-lg shadow-ember/30"
              >
                Donate to GCAMP
                <ArrowRight size={16} strokeWidth={2.5} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-bold text-sm px-8 py-4 rounded-full transition-all duration-200 hover:bg-white/10"
              >
                Become a Program Partner
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
