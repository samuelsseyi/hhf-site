"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";

type GalleryImage = {
  src: string;
  alt: string;
  category: string;
};

type Props = {
  images: GalleryImage[];
  categories: string[];
};

const CATEGORY_LABELS: Record<string, string> = {
  all: "All Photos",
  hero: "Community",
  gcamp: "GCAMP Programme",
  "girlchild-programs": "Girl Child Programmes",
  "girlchild-advocate-mentorship": "Advocacy & Mentorship",
  "women-empowerment": "Women Empowerment",
  "back-to-school": "Back to School",
  "peace-clubs": "Peace Clubs",
  "girl-child": "Girl Child Initiative",
  milo: "Milo Partnership",
  mtn: "MTN Partnership",
  team: "Our Team",
  flyers: "Events & Flyers",
};

export function GalleryGrid({ images, categories }: Props) {
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered =
    activeCategory === "all"
      ? images
      : images.filter((img) => img.category === activeCategory);

  const openLightbox = useCallback((index: number) => {
    setLightbox(index);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setLightbox(null);
    document.body.style.overflow = "";
  }, []);

  const prevImage = useCallback(() => {
    setLightbox((i) => (i === null ? null : (i - 1 + filtered.length) % filtered.length));
  }, [filtered.length]);

  const nextImage = useCallback(() => {
    setLightbox((i) => (i === null ? null : (i + 1) % filtered.length));
  }, [filtered.length]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (lightbox === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "ArrowRight") nextImage();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, closeLightbox, prevImage, nextImage]);

  return (
    <>
      {/* Category filter tabs */}
      <div className="flex flex-wrap gap-2 mb-10">
        {["all", ...categories].map((cat) => (
          <button
            key={cat}
            onClick={() => { setActiveCategory(cat); setLightbox(null); }}
            className={`text-xs sm:text-sm font-semibold px-4 py-2 rounded-full transition-all duration-200 ${
              activeCategory === cat
                ? "bg-ember text-white shadow-sm"
                : "bg-white text-cobalt border border-cobalt/20 hover:border-cobalt/50"
            }`}
          >
            {CATEGORY_LABELS[cat] ?? cat}
          </button>
        ))}
      </div>

      {/* Photo count */}
      <p className="text-charcoal/50 text-sm mb-6">
        {filtered.length} photo{filtered.length !== 1 ? "s" : ""}
      </p>

      {/* Grid */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {filtered.map((img, i) => (
          <div
            key={img.src}
            className="group break-inside-avoid rounded-xl overflow-hidden cursor-pointer relative shadow-sm hover:shadow-md transition-shadow duration-300"
            onClick={() => openLightbox(i)}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={600}
              height={800}
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-ember/0 group-hover:bg-ember/65 transition-all duration-300">
              <div className="absolute top-3 right-3">
                <span className="bg-cobalt text-white text-[10px] font-bold px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {CATEGORY_LABELS[img.category] ?? img.category}
                </span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <ZoomIn
                  size={28}
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  strokeWidth={1.5}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          {/* Image */}
          <div
            className="relative max-w-5xl max-h-[90vh] w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={filtered[lightbox].src}
              alt={filtered[lightbox].alt}
              width={1200}
              height={900}
              sizes="90vw"
              className="object-contain max-h-[85vh] rounded-lg shadow-2xl w-auto h-auto"
              priority
            />

            {/* Caption */}
            <div className="absolute bottom-0 left-0 right-0 text-center p-4">
              <p className="text-white/70 text-sm">{filtered[lightbox].alt}</p>
              <span className="inline-block mt-2 bg-ember/80 text-white text-xs font-bold px-3 py-1 rounded-full">
                {CATEGORY_LABELS[filtered[lightbox].category] ?? filtered[lightbox].category}
              </span>
              <p className="text-white/40 text-xs mt-2">
                {lightbox + 1} / {filtered.length}
              </p>
            </div>
          </div>

          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close lightbox"
          >
            <X size={22} />
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft size={24} />
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Next image"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      )}
    </>
  );
}
