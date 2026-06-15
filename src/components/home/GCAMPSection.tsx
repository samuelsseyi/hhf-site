import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Handshake, Star } from "lucide-react";
import { WaveArc } from "@/components/ui/WaveArc";
import { COLORS, GCAMP_STATS } from "@/lib/constants";

const GALLERY_FEATURED = {
  src: "/images/gcamp/WhatsApp Image 2026-06-11 at 09.30.29.jpeg",
  alt: "GCAMP girls at mentorship session — Ikorodu 2026",
};

const GALLERY_SECONDARY = [
  {
    src: "/images/gcamp/WhatsApp Image 2026-06-11 at 09.27.42.jpeg",
    alt: "Girls engaged in GCAMP learning activity",
  },
  {
    src: "/images/gcamp/WhatsApp Image 2026-06-11 at 09.39.44.jpeg",
    alt: "School engagement session — Ikorodu",
  },
];

const GALLERY_STRIP = [
  {
    src: "/images/gcamp/WhatsApp Image 2026-06-11 at 09.28.01.jpeg",
    alt: "GCAMP session in progress — Ikorodu 2026",
  },
  {
    src: "/images/gcamp/WhatsApp Image 2026-06-11 at 09.30.27.jpeg",
    alt: "Empowerment kit distribution — GCAMP 2026",
  },
  {
    src: "/images/gcamp/WhatsApp Image 2026-06-11 at 09.39.51.jpeg",
    alt: "Girls engaged in GCAMP programme activity",
  },
];

export function GCAMPSection() {
  return (
    <section className="arc-section relative py-28 bg-savanna overflow-hidden" aria-label="GCAMP flagship programme">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.06)_0%,_transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — Text */}
          <div>
            {/* Eyebrow */}
            <span className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.15em] uppercase text-gold mb-3">
              <Star size={12} fill="currentColor" strokeWidth={0} />
              Flagship Programme &nbsp;·&nbsp; Currently Active
            </span>
            <span className="gold-rule" />
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight mb-3">
              The Girl Child Advocacy &amp; Mentorship Project
            </h2>
            <p className="text-white/60 text-sm font-semibold tracking-wide mb-8">
              GCAMP &nbsp;·&nbsp; 2026–2030 &nbsp;·&nbsp; National Initiative
            </p>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-4">
              Launched January 21, 2026, GCAMP is a structured, values-driven
              mentorship and leadership programme for adolescent girls.
            </p>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed mb-4">
              The pilot is currently running in 5 public primary schools in
              Ikorodu, Lagos — reaching 250 girls over a 9-month cycle.
            </p>
            <p className="text-gold font-bold text-base sm:text-lg mb-10">
              This is not a future plan. It is happening right now.
            </p>

            {/* Stat tiles 2×2 */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {GCAMP_STATS.map(({ value, label }) => (
                <div
                  key={label}
                  className="rounded-xl bg-white/10 border border-white/15 p-4 text-center"
                >
                  <p className="font-mono text-2xl font-medium text-gold mb-1">
                    {value}
                  </p>
                  <p className="text-white/60 text-xs leading-snug">{label}</p>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/programs/gcamp"
                className="inline-flex items-center justify-center gap-2 bg-gold hover:bg-gold-light text-charcoal font-bold text-sm px-7 py-3.5 rounded-full transition-colors duration-200"
              >
                Learn About GCAMP
                <ArrowRight size={15} strokeWidth={2.5} />
              </Link>
              <Link
                href="/get-involved"
                className="inline-flex items-center justify-center gap-2 border-2 border-white/40 hover:border-white text-white font-bold text-sm px-7 py-3.5 rounded-full transition-colors duration-200 hover:bg-white/10"
              >
                <Handshake size={15} strokeWidth={2} />
                Partner With Us
              </Link>
            </div>
          </div>

          {/* Right — Mini gallery */}
          <div className="flex flex-col gap-2.5">
            <p className="text-white/40 text-xs font-semibold uppercase tracking-widest mb-1">
              From the field
            </p>

            {/* Top grid: featured tall left + 2 stacked right */}
            <div className="grid grid-cols-2 gap-2.5" style={{ height: "320px" }}>
              <div className="relative rounded-xl overflow-hidden row-span-2">
                <Image
                  src={GALLERY_FEATURED.src}
                  alt={GALLERY_FEATURED.alt}
                  fill
                  sizes="(max-width: 1024px) 45vw, 22vw"
                  className="object-cover object-center hover:scale-105 transition-transform duration-500"
                />
              </div>
              {GALLERY_SECONDARY.map(({ src, alt }) => (
                <div key={src} className="relative rounded-xl overflow-hidden">
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(max-width: 1024px) 45vw, 22vw"
                    className="object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>

            {/* Bottom strip: 3 equal thumbnails */}
            <div className="grid grid-cols-3 gap-2.5">
              {GALLERY_STRIP.map(({ src, alt }) => (
                <div key={src} className="relative aspect-square rounded-xl overflow-hidden">
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(max-width: 1024px) 30vw, 14vw"
                    className="object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Arc → cream */}
      <WaveArc fill={COLORS.cream} />
    </section>
  );
}
