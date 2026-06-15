"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Heart, ChevronDown, Star } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 72);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
    setMobileExpanded(null);
  }, [pathname]);

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    const base = href.split("#")[0];
    return pathname === base || pathname.startsWith(base + "/");
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cobalt shadow-lg shadow-black/20"
          : "bg-linear-to-b from-black/50 to-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <Image
              src="/images/logo/havenforthehopelessfoundation Logo.png"
              alt="Haven for the Hopeless Foundation"
              width={160}
              height={52}
              className="h-12 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-5" aria-label="Main navigation">
            {NAV_LINKS.map((item) => {
              const active = isActive(item.href);

              if (item.children) {
                return (
                  <div key={item.href} className="relative group">
                    <Link
                      href={item.href}
                      className={`flex items-center gap-1 text-sm font-semibold tracking-wide transition-colors duration-200 pb-1 ${
                        active ? "text-gold" : "text-white/90 hover:text-gold"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        size={13}
                        strokeWidth={2.5}
                        className="transition-transform duration-200 group-hover:rotate-180"
                      />
                    </Link>
                    <span
                      className={`absolute bottom-0 left-0 h-0.5 bg-gold transition-all duration-200 ${
                        active ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                    {/* Dropdown panel */}
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                      <div className="bg-white rounded-2xl shadow-2xl shadow-cobalt/15 border border-cobalt/8 min-w-55 overflow-hidden py-1.5">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="flex items-center gap-2.5 px-5 py-3 text-sm text-cobalt hover:bg-cobalt/5 font-medium transition-colors"
                          >
                            {child.flag === "Flagship" && (
                              <Star
                                size={11}
                                className="text-gold fill-gold shrink-0"
                                strokeWidth={0}
                              />
                            )}
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-sm font-semibold tracking-wide transition-colors duration-200 group pb-1 ${
                    active ? "text-gold" : "text-white/90 hover:text-gold"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-gold transition-all duration-200 ${
                      active ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>

          {/* Right side — CTA + hamburger */}
          <div className="flex items-center gap-3">
            {/* Desktop Donate CTA */}
            <Link
              href="/donate"
              className="hidden lg:inline-flex items-center gap-2 bg-ember hover:bg-ember/90 text-white text-sm font-bold px-5 py-2.5 rounded-full transition-colors duration-200"
            >
              <Heart size={14} strokeWidth={2.5} />
              Donate Now
            </Link>

            {/* Mobile Donate pill — always visible, subtle pulse */}
            <Link
              href="/donate"
              className="lg:hidden inline-flex items-center gap-1.5 bg-ember text-white text-xs font-bold px-3.5 py-2 rounded-full animate-pulse"
              aria-label="Donate Now"
            >
              <Heart size={12} strokeWidth={2.5} />
              Donate
            </Link>

            {/* Mobile hamburger */}
            <button
              className="lg:hidden text-white p-2 rounded-md hover:bg-white/10 transition-colors"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 top-18 bg-cobalt z-40 flex flex-col overflow-y-auto">
          <nav className="flex flex-col px-6 py-6" aria-label="Mobile navigation">
            {NAV_LINKS.map((item) => {
              const active = isActive(item.href);

              if (item.children) {
                const expanded = mobileExpanded === item.href;
                return (
                  <div key={item.href} className="border-b border-white/10">
                    <button
                      onClick={() => setMobileExpanded(expanded ? null : item.href)}
                      className={`w-full flex items-center justify-between text-lg font-semibold py-4 transition-colors duration-200 ${
                        active ? "text-gold" : "text-white/90"
                      }`}
                      aria-expanded={expanded}
                    >
                      {item.label}
                      <ChevronDown
                        size={18}
                        strokeWidth={2}
                        className={`transition-transform duration-200 text-white/40 ${
                          expanded ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {expanded && (
                      <div className="pb-3 pl-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="flex items-center gap-2 text-white/65 hover:text-gold text-base font-medium py-3 border-b border-white/5 transition-colors"
                          >
                            {child.flag === "Flagship" && (
                              <Star
                                size={11}
                                className="text-gold fill-gold shrink-0"
                                strokeWidth={0}
                              />
                            )}
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`text-lg font-semibold py-4 border-b border-white/10 transition-colors duration-200 ${
                    active ? "text-gold" : "text-white/90 hover:text-gold"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              href="/donate"
              className="mt-8 inline-flex items-center justify-center gap-2 bg-ember text-white text-base font-bold px-6 py-4 rounded-full transition-colors duration-200"
            >
              <Heart size={16} strokeWidth={2.5} />
              Donate Now
            </Link>
          </nav>

          <div className="mt-auto px-6 py-6 border-t border-white/10">
            <p className="text-white/40 text-xs">
              Haven for the Hopeless Foundation · Ikorodu, Lagos · Est. 2024
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
