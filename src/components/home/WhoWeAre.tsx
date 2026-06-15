import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { WaveArc } from "@/components/ui/WaveArc";
import { COLORS } from "@/lib/constants";

export function WhoWeAre() {
  return (
    <section className="arc-section relative py-28 bg-cream overflow-hidden" aria-label="Who we are">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Photo Collage */}
          <div className="relative">
            {/* Large photo */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl shadow-cobalt/20">
              <Image
                src="/images/girlchild-programs/WhatsApp Image 2026-06-11 at 15.58.15.jpeg"
                alt="HHF girls empowerment programme — confident and energised"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cobalt/30 to-transparent" />
            </div>

            {/* Small photo 1 — founder */}
            <div className="absolute -bottom-6 -right-4 sm:-right-8 w-36 sm:w-44 rounded-xl overflow-hidden shadow-xl border-4 border-cream aspect-square">
              <Image
                src="/images/team/Founder HHF -Amb Mercy Igwe.jpeg"
                alt="Amb. Mercy Igwe — Founder, Haven for the Hopeless Foundation"
                fill
                sizes="176px"
                className="object-cover object-top"
              />
            </div>

            {/* Small photo 2 — classroom */}
            <div className="absolute -top-6 -right-4 sm:-right-8 w-32 sm:w-40 rounded-xl overflow-hidden shadow-xl border-4 border-cream aspect-square">
              <Image
                src="/images/girlchild-advocate-mentorship/WhatsApp Image 2026-06-11 at 15.59.49.jpeg"
                alt="Girls receiving empowerment materials at HHF school programme"
                fill
                sizes="160px"
                className="object-cover object-center"
              />
            </div>

            {/* Gold accent block */}
            <div className="absolute -bottom-2 -left-4 w-24 h-24 bg-gold/20 rounded-2xl -z-10" />
          </div>

          {/* Right — Text */}
          <div>
            <span className="eyebrow">Our Purpose</span>
            <span className="gold-rule" />
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-cobalt leading-tight mb-7">
              Collective action creates lasting change.
            </h2>
            <p className="text-charcoal/80 text-base sm:text-lg leading-relaxed mb-5">
              Haven for the Hopeless Foundation is a purpose-driven Nigerian
              non-governmental organisation committed to empowering lives and
              improving communities — especially women, children, and the less
              privileged — through advocacy, education, mentorship, and
              development-focused initiatives.
            </p>
            <p className="text-charcoal/70 text-base sm:text-lg leading-relaxed mb-10">
              We don&apos;t do one-off charity. We build long-term transformation —
              in individuals, families, schools, and communities.
            </p>

            {/* Meta pills */}
            <div className="flex flex-wrap gap-3 mb-10">
              {[
                "Founded: 2024",
                "HQ: Lagos, Nigeria",
                "Focus: Girls, Women, Community",
              ].map((pill) => (
                <span
                  key={pill}
                  className="text-xs font-semibold text-cobalt border border-cobalt/30 rounded-full px-4 py-1.5 bg-cobalt/5"
                >
                  {pill}
                </span>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-ember font-bold text-sm hover:gap-3 transition-all duration-200 group"
            >
              Read Our Full Story
              <ArrowRight size={16} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </div>

      {/* Arc → cobalt */}
      <WaveArc fill={COLORS.cobalt} />
    </section>
  );
}
