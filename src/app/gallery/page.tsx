import type { Metadata } from "next";
import fs from "fs";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Real moments from the field. Browse photos and videos from HHF's GCAMP sessions, women empowerment programs, community outreach, and more.",
  openGraph: {
    title: "Gallery | Haven for the Hopeless Foundation",
    description: "Real moments. Real impact. Photos from the field.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gallery | Haven for the Hopeless Foundation",
    description: "Real moments from HHF's programmes — from the field.",
  },
};
import path from "path";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { GalleryGrid } from "@/components/gallery/GalleryGrid";
import { VideoSection } from "@/components/gallery/VideoSection";
import { InstagramFeed } from "@/components/home/InstagramFeed";
import { WaveArc } from "@/components/ui/WaveArc";
import { COLORS } from "@/lib/constants";

const IMAGE_CATEGORIES = [
  "hero",
  "gcamp",
  "girlchild-programs",
  "girlchild-advocate-mentorship",
  "women-empowerment",
  "team",
  "flyers",
];

const ALLOWED_EXTENSIONS = /\.(jpe?g|png|webp|gif)$/i;

function loadImages() {
  const publicDir = path.join(process.cwd(), "public", "images");

  return IMAGE_CATEGORIES.flatMap((category) => {
    const dir = path.join(publicDir, category);
    try {
      return fs
        .readdirSync(dir)
        .filter((file) => ALLOWED_EXTENSIONS.test(file))
        .map((file) => ({
          src: `/images/${category}/${file}`,
          alt: `Haven for the Hopeless Foundation — ${
            category.replace(/-/g, " ")
          } — programme photo`,
          category,
        }));
    } catch {
      return [];
    }
  });
}

const PRESS = [
  {
    publication: "Punch Nigeria",
    date: "February 2026",
    headline: "How HHF Is Transforming Girl Child Education in Lagos",
    excerpt:
      "Haven for the Hopeless Foundation's GCAMP initiative is reaching 250 girls across five Ikorodu schools in its first year.",
  },
  {
    publication: "The Cable",
    date: "January 2026",
    headline: "Meet the NGO Building Future Leaders in Ikorodu",
    excerpt:
      "Amb. Mercy Igwe founded HHF out of a personal burden — and now her organisation is a model for community-led change.",
  },
  {
    publication: "Channels TV",
    date: "January 2026",
    headline: "GCAMP Launch: 250 Girls Enrolled in 9-Month Mentorship Cycle",
    excerpt:
      "The Girl Child Advocacy & Mentorship Project launched on January 21, 2026, with support from Lagos State partners.",
  },
];

const DOWNLOADS = [
  {
    title: "HHF Organisation Profile",
    type: "PDF",
    description: "Our mission, programmes, and impact — in one document.",
    available: false,
  },
  {
    title: "2025 Impact Report",
    type: "PDF",
    description: "A full account of our 2025 activities and beneficiary reach.",
    available: false,
  },
  {
    title: "Brand & Media Kit",
    type: "ZIP",
    description: "Logos, photos, and approved copy for press and partners.",
    available: false,
  },
];

export default function GalleryPage() {
  const images = loadImages();

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* ── HERO ── */}
        <section className="relative pt-40 pb-24 bg-cobalt overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--color-cobalt-light)_0%,transparent_70%)] opacity-50 pointer-events-none" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <span className="block w-10 h-0.5 bg-gold mb-6" />
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-4 leading-tight">
              From the field.
            </h1>
            <p className="text-white/60 text-lg sm:text-xl max-w-xl leading-relaxed mb-2">
              Real moments. Real impact. This is what the work looks like.
            </p>
            <p className="text-white/30 text-sm font-mono">{images.length} photos</p>
          </div>

          <WaveArc fill={COLORS.cream} />
        </section>

        {/* ── GALLERY GRID ── */}
        <section className="py-16 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <GalleryGrid images={images} categories={IMAGE_CATEGORIES} />
          </div>

          <WaveArc fill="white" />
        </section>

        {/* ── VIDEO SECTION ── */}
        <VideoSection />

        {/* ── INSTAGRAM FEED ── */}
        <InstagramFeed />

        {/* ── PRESS & MEDIA ── */}
        <section className="relative py-24 bg-cobalt overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <span className="block w-10 h-0.5 bg-gold mb-6" />
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3">
                In the press.
              </h2>
              <p className="text-white/50 text-base">
                Media coverage and features.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              {PRESS.map((item) => (
                <div
                  key={item.headline}
                  className="bg-white/5 border border-white/10 rounded-2xl p-6 flex flex-col"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-bold text-gold text-sm">{item.publication}</span>
                    <span className="text-white/40 text-xs font-mono">{item.date}</span>
                  </div>
                  <h3 className="font-display text-white font-bold text-base leading-snug mb-3 flex-1">
                    {item.headline}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-5">
                    {item.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-white/30 text-xs font-semibold italic">
                    Article link coming soon
                  </span>
                </div>
              ))}
            </div>

            <p className="text-white/40 text-sm">
              For media enquiries and press materials,{" "}
              <Link href="/contact" className="text-gold hover:underline">
                contact us
              </Link>
              .
            </p>
          </div>

          <WaveArc fill={COLORS.cream} />
        </section>

        {/* ── DOWNLOADS ── */}
        <section className="py-24 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <span className="gold-rule" />
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-cobalt mb-3">
                Downloads &amp; resources.
              </h2>
              <p className="text-charcoal/50 text-sm">
                Files marked &lsquo;Coming Soon&rsquo; will be available shortly.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {DOWNLOADS.map((file) => (
                <div
                  key={file.title}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-cobalt/10"
                >
                  <div className="inline-flex items-center gap-1.5 bg-cobalt/10 text-cobalt text-[10px] font-bold px-2.5 py-1 rounded-full mb-4">
                    {file.type}
                  </div>
                  <h3 className="font-bold text-cobalt text-base mb-2">{file.title}</h3>
                  <p className="text-charcoal/55 text-sm leading-relaxed mb-5">
                    {file.description}
                  </p>
                  {file.available ? (
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 bg-cobalt text-white font-bold text-xs px-5 py-2.5 rounded-full hover:bg-cobalt-light transition-colors"
                    >
                      Download
                      <ArrowRight size={12} strokeWidth={2.5} />
                    </a>
                  ) : (
                    <span className="inline-flex items-center gap-2 bg-cobalt/10 text-cobalt/40 font-bold text-xs px-5 py-2.5 rounded-full cursor-default">
                      Coming Soon
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
