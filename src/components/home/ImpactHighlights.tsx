import Image from "next/image";
import Link from "next/link";
import { GraduationCap, HeartHandshake, ShieldCheck, Globe, ArrowRight } from "lucide-react";
import { WaveArc } from "@/components/ui/WaveArc";
import { COLORS } from "@/lib/constants";

const CARDS = [
  {
    accent: COLORS.cobalt,
    icon: GraduationCap,
    title: "Girl Child & Education",
    thumb: "/images/girlchild-programs/WhatsApp Image 2026-06-11 at 15.58.16.jpeg",
    thumbAlt: "Girls studying at HHF school outreach",
    stats: [
      "1,000+ children reached through education, affirmation & mentorship",
      "500+ girls empowered across 5 public primary schools",
      "600+ learning materials distributed",
      "31 students at MTN Spelling Bee Grand Finale",
    ],
  },
  {
    accent: COLORS.ember,
    icon: HeartHandshake,
    title: "Women & Widow Empowerment",
    thumb: "/images/women-empowerment/WhatsApp Image 2026-06-11 at 16.03.45.jpeg",
    thumbAlt: "Widow empowerment and wellness session",
    stats: [
      "100 women supported with free medical screenings",
      "Relief materials distributed to all participants",
      "Emotional wellness sessions for dignity & hope",
    ],
  },
  {
    accent: COLORS.gold,
    icon: ShieldCheck,
    title: "Peacebuilding",
    thumb: "/images/girlchild-advocate-mentorship/WhatsApp Image 2026-06-11 at 15.59.48.jpeg",
    thumbAlt: "Peace Ambassadors training session",
    stats: [
      "50 school counselors trained from 25+ schools",
      "40 Peace Ambassadors deployed as peer mediators",
      "Peace Clubs established in 2 secondary schools",
    ],
  },
  {
    accent: COLORS.savanna,
    icon: Globe,
    title: "Community & Partnerships",
    thumb: "/images/hero/WhatsApp Image 2026-06-11 at 15.57.39.jpeg",
    thumbAlt: "HHF community outreach and advocacy event",
    stats: [
      "100 teens empowered through community outreach",
      "GivingTuesday Nigeria participation",
      "Partners: MTN Nigeria, Milo Nestlé, Lagos State Safety Corps, Ministry of Education",
    ],
  },
];

const PHOTO_WALL = [
  { src: "/images/girlchild-programs/WhatsApp Image 2026-06-11 at 15.58.14.jpeg", alt: "HHF school programme 2025" },
  { src: "/images/women-empowerment/WhatsApp Image 2026-06-11 at 16.03.55 (1).jpeg", alt: "Women empowerment session 2025" },
  { src: "/images/women-empowerment/WhatsApp Image 2026-06-11 at 16.03.53 (4).jpeg", alt: "HHF women health and wellness programme 2025" },
  { src: "/images/girlchild-advocate-mentorship/WhatsApp Image 2026-06-11 at 15.59.50 (3).jpeg", alt: "Girl child advocate programme" },
  { src: "/images/women-empowerment/WhatsApp Image 2026-06-11 at 16.03.48.jpeg", alt: "Women supported at HHF community outreach 2025" },
  { src: "/images/team/Founder HHF -Amb Mercy Igwe (2).jpeg", alt: "Amb. Mercy Igwe, HHF Founder" },
];

export function ImpactHighlights() {
  return (
    <section className="arc-section relative py-28 bg-cream overflow-hidden" aria-label="2025 impact highlights">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mb-16">
          <span className="gold-rule" />
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-cobalt mb-3">
            What 2025 Looked Like.
          </h2>
          <p className="text-charcoal/60 text-base sm:text-lg max-w-xl">
            A year of showing up — even when it was hard.
          </p>
        </div>

        {/* Cards 2×2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
          {CARDS.map(({ accent, icon: Icon, title, thumb, thumbAlt, stats }) => (
            <div
              key={title}
              className="relative bg-white rounded-2xl shadow-sm shadow-cobalt/10 overflow-hidden border border-cobalt/5 p-6 flex flex-col gap-4"
              style={{ borderLeftColor: accent, borderLeftWidth: "4px" }}
            >
              {/* Header row */}
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span
                    className="p-2.5 rounded-xl"
                    style={{ backgroundColor: `${accent}15`, color: accent }}
                  >
                    <Icon size={20} strokeWidth={2} />
                  </span>
                  <h3 className="font-display text-lg font-bold text-cobalt leading-snug">
                    {title}
                  </h3>
                </div>
                {/* Thumbnail */}
                <div className="shrink-0 w-16 h-16 rounded-xl overflow-hidden shadow-sm">
                  <Image
                    src={thumb}
                    alt={thumbAlt}
                    width={64}
                    height={64}
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              {/* Stats list */}
              <ul className="flex flex-col gap-2.5">
                {stats.map((stat) => (
                  <li key={stat} className="flex items-start gap-2.5 text-sm text-charcoal/70 leading-snug">
                    <span
                      className="mt-1.5 w-1.5 h-1.5 rounded-full shrink-0"
                      style={{ backgroundColor: accent }}
                      aria-hidden="true"
                    />
                    {stat}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Photo wall — 6-tile grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-12">
          {PHOTO_WALL.map(({ src, alt }) => (
            <div key={src} className="aspect-square rounded-xl overflow-hidden shadow-sm">
              <Image
                src={src}
                alt={alt}
                width={400}
                height={400}
                sizes="(max-width: 640px) 50vw, 33vw"
                className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
              />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/impact"
            className="inline-flex items-center gap-2 border-2 border-cobalt text-cobalt hover:bg-cobalt hover:text-white font-bold text-sm px-8 py-4 rounded-full transition-all duration-200 group"
          >
            See the Full 2025 Impact Story
            <ArrowRight size={16} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Arc → cobalt */}
      <WaveArc fill={COLORS.cobalt} />
    </section>
  );
}
