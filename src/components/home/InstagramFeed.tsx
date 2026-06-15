import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { WaveArc } from "@/components/ui/WaveArc";
import { BRAND, COLORS } from "@/lib/constants";

const FEED_PHOTOS = [
  {
    src: "/images/girlchild-advocate-mentorship/WhatsApp Image 2026-06-11 at 15.59.50.jpeg",
    alt: "HHF girl child advocacy programme — mentorship in action",
  },
  {
    src: "/images/women-empowerment/WhatsApp Image 2026-06-11 at 16.03.53.jpeg",
    alt: "Women empowerment session at HHF",
  },
  {
    src: "/images/gcamp/WhatsApp Image 2026-06-11 at 09.30.29.jpeg",
    alt: "GCAMP programme — girls in session",
  },
  {
    src: "/images/girlchild-programs/WhatsApp Image 2026-06-11 at 15.58.17.jpeg",
    alt: "HHF school outreach and girl child programme",
  },
  {
    src: "/images/team/Founder HHF -Amb Mercy Igwe (2).jpeg",
    alt: "Amb. Mercy Igwe — HHF Founder",
  },
  {
    src: "/images/girlchild-advocate-mentorship/WhatsApp Image 2026-06-11 at 15.59.47.jpeg",
    alt: "HHF girl child empowerment activity",
  },
];

export function InstagramFeed() {
  return (
    <section className="arc-section relative py-24 bg-cream overflow-hidden" aria-label="Instagram feed">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="flex items-end justify-between mb-10 gap-4">
          <div>
            <span className="gold-rule" />
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-cobalt mb-1">
              Follow Our Journey.
            </h2>
            <p className="text-charcoal/55 text-sm font-semibold flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="text-ember" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
              </svg>
              {BRAND.instagramHandle}
            </p>
          </div>
          <a
            href={BRAND.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 border-2 border-cobalt text-cobalt hover:bg-cobalt hover:text-white font-bold text-xs px-5 py-2.5 rounded-full transition-all duration-200 group shrink-0"
          >
            Follow on Instagram
            <ArrowUpRight size={14} strokeWidth={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />

          </a>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          {FEED_PHOTOS.map(({ src, alt }) => (
            <a
              key={src}
              href={BRAND.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group block aspect-square rounded-xl overflow-hidden shadow-sm"
              aria-label={`View on Instagram: ${alt}`}
            >
              <Image
                src={src}
                alt={alt}
                width={300}
                height={300}
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
              />
            </a>
          ))}
        </div>

        {/* Mobile CTA */}
        <div className="sm:hidden text-center">
          <a
            href={BRAND.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 border-2 border-cobalt text-cobalt font-bold text-sm px-6 py-3 rounded-full"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
            </svg>
            Follow Us on Instagram
          </a>
        </div>
      </div>

      {/* Arc → cobalt */}
      <WaveArc fill={COLORS.cobalt} />
    </section>
  );
}
