import Link from "next/link";
import { Backpack, BookOpen, User, School, Star, Globe } from "lucide-react";
import { WaveArc } from "@/components/ui/WaveArc";
import { COLORS } from "@/lib/constants";

const ICON_MAP: Record<string, React.ElementType> = {
  Backpack, BookOpen, User, School, Star, Globe,
};

const TIERS = [
  { amount: "₦5,000",    icon: "Backpack",  impact: "A complete learning kit for one girl",                         href: "/donate" },
  { amount: "₦20,000",   icon: "BookOpen",  impact: "One month of mentorship for 5 girls",                         href: "/donate" },
  { amount: "₦50,000",   icon: "User",      impact: "Sponsors one girl through the full 9-month GCAMP cycle",       href: "/donate" },
  { amount: "₦100,000",  icon: "School",    impact: "Funds an entire school's monthly mentorship session",          href: "/donate" },
  { amount: "₦200,000",  icon: "Star",      impact: "Partners one full school into the GCAMP programme",            href: "/donate" },
  { amount: "Custom",    icon: "Globe",     impact: "Become a Programme Sponsor — let's design your impact",        href: "/donate" },
];

export function DonationLadder() {
  return (
    <section className="arc-section relative py-28 bg-cobalt overflow-hidden" aria-label="Donation impact ladder">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--color-cobalt-light)_0%,_transparent_65%)] opacity-50 pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="gold-rule mx-auto" />
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            See What Your Gift Does.
          </h2>
          <p className="text-white/60 text-base sm:text-lg max-w-xl mx-auto">
            Every naira is documented, tracked, and reported.
          </p>
        </div>

        {/* Staircase — each bar steps right on desktop */}
        <div className="flex flex-col gap-3">
          {TIERS.map(({ amount, icon, impact, href }, i) => {
            const Icon = ICON_MAP[icon];
            const isCustom = amount === "Custom";
            const indent = `${i * 24}px`;
            const progress = (i + 1) / TIERS.length;
            const bg = `hsl(${38 + (205 - 38) * (1 - progress)}, ${80 - i * 5}%, ${30 + i * 5}%)`;

            return (
              <div
                key={amount}
                className="group flex items-center gap-4 sm:gap-6 rounded-2xl p-4 sm:p-5 transition-all duration-300 hover:scale-[1.01] hover:shadow-xl"
                style={{
                  marginLeft: `min(${indent}, 5vw)`,
                  background: bg,
                }}
              >
                {/* Icon */}
                <span className="shrink-0 flex items-center justify-center w-12 h-12 rounded-xl bg-white/15 border border-white/20">
                  <Icon size={20} strokeWidth={1.8} className="text-white" />
                </span>

                {/* Amount */}
                <span className="font-mono text-lg sm:text-xl font-medium text-gold shrink-0 w-28 sm:w-36">
                  {amount}
                </span>

                {/* Impact */}
                <p className="text-white/85 text-sm sm:text-base leading-snug flex-1">
                  {impact}
                </p>

                {/* CTA */}
                <Link
                  href={href}
                  className={`shrink-0 text-xs sm:text-sm font-bold px-4 py-2 rounded-full transition-all duration-200 ${
                    isCustom
                      ? "bg-gold text-charcoal hover:bg-gold-light"
                      : "bg-white/15 border border-white/30 text-white hover:bg-white/25"
                  }`}
                >
                  {isCustom ? "Talk to Us" : "Donate"}
                </Link>
              </div>
            );
          })}
        </div>

        {/* Footnote */}
        <p className="text-center text-white/40 text-xs mt-10">
          All donations receive a receipt and impact update. We are fully transparent.
        </p>
      </div>

      {/* Arc → cream */}
      <WaveArc fill={COLORS.cream} />
    </section>
  );
}
