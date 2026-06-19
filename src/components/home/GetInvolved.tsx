import Link from "next/link";
import { HeartHandshake, Building2, HandHelping, Package, ArrowRight } from "lucide-react";
import { WaveArc } from "@/components/ui/WaveArc";
import { COLORS, PARTNERS } from "@/lib/constants";

const CARDS = [
  {
    icon: HeartHandshake,
    title: "Donate",
    body: "Fund a girl's journey, a widow's wellness, a child's learning materials.",
    cta: "Donate Now",
    href: "/donate",
  },
  {
    icon: Building2,
    title: "Corporate Partnership",
    body: "Align your CSR with documented impact. Join MTN and Nestlé in transforming Ikorodu.",
    cta: "Partner With Us",
    href: "/get-involved",
  },
  {
    icon: HandHelping,
    title: "Volunteer",
    body: "Become a mentor, facilitator, or supporter in our active school programmes.",
    cta: "Volunteer",
    href: "/get-involved",
  },
  {
    icon: Package,
    title: "In-Kind Support",
    body: "Educational materials, health supplies, equipment: we receive and distribute with care.",
    cta: "Learn More",
    href: "/get-involved",
  },
];

export function GetInvolved() {
  return (
    <section className="arc-section relative py-28 bg-ember overflow-hidden" aria-label="Get involved with HHF">
      {/* Subtle overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(0,0,0,0.15)_0%,_transparent_60%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-4">
          <span className="block w-12 h-0.5 bg-white/40 mx-auto mb-6" />
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            This transformation needs you.
          </h2>
          <p className="text-white/80 text-base sm:text-lg max-w-xl mx-auto">
            No contribution is too small, and no partnership is too big.
          </p>
        </div>

        {/* 4 Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-14">
          {CARDS.map(({ icon: Icon, title, body, cta, href }) => (
            <div
              key={title}
              className="group bg-white rounded-2xl p-6 flex flex-col gap-4 shadow-lg shadow-black/10 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-ember/10 text-ember group-hover:bg-ember group-hover:text-white transition-colors duration-300">
                <Icon size={20} strokeWidth={1.8} />
              </span>
              <h3 className="font-display text-lg font-bold text-cobalt">{title}</h3>
              <p className="text-charcoal/65 text-sm leading-relaxed flex-1">{body}</p>
              <Link
                href={href}
                className="inline-flex items-center gap-2 text-ember font-bold text-sm mt-auto hover:gap-3 transition-all duration-200 group/link"
              >
                {cta}
                <ArrowRight size={14} strokeWidth={2.5} className="group-hover/link:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          ))}
        </div>

        {/* Partner logos strip */}
        <div className="mt-14 pt-10 border-t border-white/20">
          <p className="text-white/50 text-xs uppercase tracking-widest text-center mb-5">
            Trusted by
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {PARTNERS.map((partner) => (
              <span
                key={partner}
                className="text-xs sm:text-sm font-semibold text-white bg-white/15 border border-white/20 rounded-full px-4 py-2"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Arc → cobalt */}
      <WaveArc fill={COLORS.cobalt} />
    </section>
  );
}
