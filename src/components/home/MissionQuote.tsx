import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { WaveArc } from "@/components/ui/WaveArc";
import { COLORS } from "@/lib/constants";

export function MissionQuote() {
  return (
    <section className="arc-section relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-cobalt" aria-label="HHF mission statement">
      {/* Background photo */}
      <Image
        src="/images/hero/WhatsApp Image 2026-06-11 at 15.58.16 (2).jpeg"
        alt="HHF girls — empowered, joyful, unstoppable"
        fill
        sizes="100vw"
        className="object-cover object-center"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-cobalt/80" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 py-24 text-center">
        {/* Gold rule */}
        <span className="block w-16 h-0.5 bg-gold mx-auto mb-8" />

        <blockquote>
          <p className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold italic text-white leading-tight mb-6">
            &ldquo;When a girl is mentored, empowered, and inspired — an entire generation shifts.&rdquo;
          </p>
          <footer>
            <cite className="not-italic text-gold font-semibold text-sm tracking-widest uppercase">
              — Haven for the Hopeless Foundation
            </cite>
          </footer>
        </blockquote>

        <div className="mt-10">
          <Link
            href="/donate"
            className="inline-flex items-center gap-2 border-2 border-gold text-gold hover:bg-gold hover:text-charcoal font-bold text-sm px-8 py-4 rounded-full transition-all duration-200 group"
          >
            Be Part of the Shift
            <ArrowRight size={15} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Arc → cream */}
      <WaveArc fill={COLORS.cream} />
    </section>
  );
}
