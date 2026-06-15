"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { WaveArc } from "@/components/ui/WaveArc";
import { COLORS } from "@/lib/constants";

type Video = {
  src: string;
  thumbnail: string;
  title: string;
};

const VIDEOS: Video[] = [
  {
    src: "/images/gcamp/WhatsApp Video 2026-06-11 at 09.27.38.mp4",
    thumbnail: "/images/gcamp/WhatsApp Image 2026-06-11 at 09.26.54.jpeg",
    title: "GCAMP — Launch Day Highlights",
  },
  {
    src: "/images/gcamp/WhatsApp Video 2026-06-11 at 09.30.30.mp4",
    thumbnail: "/images/gcamp/WhatsApp Image 2026-06-11 at 09.30.29.jpeg",
    title: "Girls Share Their Stories",
  },
  {
    src: "/images/gcamp/WhatsApp Video 2026-06-11 at 09.39.45.mp4",
    thumbnail: "/images/gcamp/WhatsApp Image 2026-06-11 at 09.39.50.jpeg",
    title: "Women Empowerment Program 2025",
  },
  {
    src: "/images/gcamp/WhatsApp Video 2026-06-11 at 09.39.47.mp4",
    thumbnail: "/images/gcamp/WhatsApp Image 2026-06-11 at 09.39.50.jpeg",
    title: "Peace Ambassadors — Training Day",
  },
];

export function VideoSection() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  function openVideo(i: number) {
    setActiveVideo(i);
    document.body.style.overflow = "hidden";
  }

  function closeVideo() {
    setActiveVideo(null);
    document.body.style.overflow = "";
  }

  return (
    <section className="relative py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <span className="gold-rule" />
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-cobalt mb-3">
            Watch the work.
          </h2>
          <p className="text-charcoal/60 text-lg">
            Because some moments are better seen than read.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {VIDEOS.map((video, i) => (
            <button
              key={video.src}
              onClick={() => openVideo(i)}
              className="group relative aspect-video rounded-2xl overflow-hidden shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-gold text-left"
              aria-label={`Play video: ${video.title}`}
            >
              <Image
                src={video.thumbnail}
                alt={video.title}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-cobalt/50 group-hover:bg-cobalt/40 transition-colors duration-300" />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/20 border-2 border-white/60 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 backdrop-blur-sm">
                  <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6 ml-1" aria-hidden="true">
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </div>
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white font-bold text-sm">{video.title}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Video modal */}
      {activeVideo !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={closeVideo}
          role="dialog"
          aria-modal="true"
          aria-label="Video player"
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
            <video
              src={VIDEOS[activeVideo].src}
              className="w-full rounded-xl shadow-2xl"
              controls
              autoPlay
              playsInline
            />
            <p className="text-white/60 text-sm mt-3 text-center">
              {VIDEOS[activeVideo].title}
            </p>
          </div>

          <button
            onClick={closeVideo}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            aria-label="Close video"
          >
            <X size={22} />
          </button>
        </div>
      )}

      <WaveArc fill={COLORS.cream} />
    </section>
  );
}
