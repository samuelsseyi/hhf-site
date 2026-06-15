"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

const SLIDES = [
  {
    image: "/images/hero/WhatsApp Image 2026-06-11 at 15.58.16 (2).jpeg",
    alt: "Girls in HHF empowerment program — joyful, confident, energised",
    heading: "When a Girl Is Empowered,",
    subheading: "A Generation Shifts.",
  },
  {
    image: "/images/women-empowerment/WhatsApp Image 2026-06-11 at 16.03.51.jpeg",
    alt: "HHF women empowerment session — widow wellness programme",
    heading: "Hope Is a Verb.",
    subheading: "And We Live It Every Day.",
  },
  {
    image: "/images/gcamp/WhatsApp Image 2026-06-11 at 09.39.50.jpeg",
    alt: "Children engaged in HHF school outreach reading session",
    heading: "Education Opens Doors.",
    subheading: "We Make Sure They Stay Open.",
  },
  {
    image: "/images/gcamp/WhatsApp Image 2026-06-11 at 09.26.54.jpeg",
    alt: "GCAMP launch session — Ikorodu, January 21 2026",
    heading: "GCAMP Is Already Happening.",
    subheading: "250 Girls. 5 Schools. One Movement.",
  },
  {
    image: "/images/hero/WhatsApp Image 2026-06-11 at 15.57.39.jpeg",
    alt: "HHF community advocacy — Peace Ambassadors training 2025",
    heading: "Peace Is Taught.",
    subheading: "And We Teach It in Schools.",
  },
];

const TRUST_STRIP = [
  "1,000+ Children",
  "25+ Schools",
  "40 Peace Ambassadors",
  "Active in Lagos State",
];

export function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % SLIDES.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  const goTo = useCallback((index: number) => {
    setCurrent(index);
  }, []);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(next, 5000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, next]);

  return (
    <section
      className="relative w-full h-screen flex flex-col overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="HHF hero slideshow"
    >
      {/* Slides */}
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            i === current ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
          aria-hidden={i !== current}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            priority={i === 0}
            sizes="100vw"
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-linear-to-b from-black/70 via-black/10 to-black/85" />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-20 flex-1 flex flex-col justify-center px-4 sm:px-8 lg:px-16 pt-24 pb-32">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-gold/80 mb-5">
            Haven for the Hopeless Foundation &nbsp;·&nbsp; Ikorodu, Lagos
          </p>

          {/* Heading */}
          <h1
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-2"
            key={`h-${current}`}
          >
            {SLIDES[current].heading}
          </h1>

          {/* Subheading */}
          <p
            className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold italic text-gold leading-tight mb-8"
            key={`s-${current}`}
          >
            {SLIDES[current].subheading}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/get-involved"
              className="inline-flex items-center justify-center gap-2 bg-ember hover:bg-ember-light text-white font-bold text-sm px-8 py-4 rounded-full transition-all duration-200 shadow-lg shadow-ember/30"
            >
              Join the Movement
            </Link>
            <Link
              href="/programs"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/60 hover:border-white text-white font-bold text-sm px-8 py-4 rounded-full transition-all duration-200 hover:bg-white/10"
            >
              See Our Programs
              <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
          </div>
        </div>
      </div>

      {/* Slide Controls — arrows */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full border border-white/30 text-white hover:bg-white/20 hover:border-white transition-all duration-200 backdrop-blur-sm"
      >
        <ChevronLeft size={20} strokeWidth={2} />
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full border border-white/30 text-white hover:bg-white/20 hover:border-white transition-all duration-200 backdrop-blur-sm"
      >
        <ChevronRight size={20} strokeWidth={2} />
      </button>

      {/* Dot indicators */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30 flex gap-2.5" role="tablist" aria-label="Slide indicators">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => goTo(i)}
            className={`transition-all duration-300 rounded-full ${
              i === current
                ? "w-7 h-2 bg-gold"
                : "w-2 h-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>

      {/* Trust strip — anchored to bottom */}
      <div className="absolute bottom-0 left-0 right-0 z-30 bg-black/50 backdrop-blur-sm border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3 flex flex-wrap items-center justify-center gap-4 sm:gap-8">
          {TRUST_STRIP.map((item, i) => (
            <span key={i} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-white/90">
              <span className="w-1.5 h-1.5 rounded-full bg-gold inline-block" aria-hidden="true" />
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
