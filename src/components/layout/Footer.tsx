import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";
import { BRAND, NAV_LINKS, PARTNERS } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white/80">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1 — Brand */}
          <div className="lg:col-span-1">
            <Link href="/">
              <Image
                src="/images/logo/havenforthehopelessfoundation Logo.png"
                alt="Haven for the Hopeless Foundation"
                width={160}
                height={52}
                className="h-12 w-auto object-contain brightness-0 invert mb-4"
              />
            </Link>
            <p className="text-sm leading-relaxed text-white/60 mb-5">
              {BRAND.tagline}. A purpose-driven Nigerian NGO transforming lives
              in Ikorodu, Lagos and beyond.
            </p>
            <div className="flex items-center gap-3">
              <a
                href={BRAND.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2 rounded-full border border-white/20 hover:border-gold hover:text-gold transition-colors duration-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              {/* TikTok SVG icon (lucide doesn't have TikTok) */}
              <a
                href={BRAND.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="p-2 rounded-full border border-white/20 hover:border-gold hover:text-gold transition-colors duration-200"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.73a4.85 4.85 0 0 1-1.01-.04Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 — Navigation */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Navigate
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/60 hover:text-gold transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Programs */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Our Work
            </h3>
            <ul className="space-y-3">
              {[
                ["GCAMP", "/programs/gcamp"],
                ["Education", "/programs"],
                ["Girl Child Empowerment", "/programs"],
                ["Women's Wellness", "/programs"],
                ["Peacebuilding", "/programs"],
                ["Community Advocacy", "/programs"],
              ].map(([label, href]) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-white/60 hover:text-gold transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-widest mb-5">
              Get in Touch
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone size={15} className="text-gold shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <a
                    href={`tel:${BRAND.phone1.replace(/\s/g, "")}`}
                    className="text-sm text-white/60 hover:text-gold transition-colors"
                  >
                    {BRAND.phone1}
                  </a>
                  <a
                    href={`tel:${BRAND.phone2.replace(/\s/g, "")}`}
                    className="text-sm text-white/60 hover:text-gold transition-colors"
                  >
                    {BRAND.phone2}
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={15} className="text-gold shrink-0 mt-0.5" />
                <a
                  href={`mailto:${BRAND.email}`}
                  className="text-sm text-white/60 hover:text-gold transition-colors break-all"
                >
                  {BRAND.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-gold shrink-0 mt-0.5" />
                <span className="text-sm text-white/60">{BRAND.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Partners Strip */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-xs text-white/40 uppercase tracking-widest mb-4">
            In partnership with
          </p>
          <div className="flex flex-wrap gap-3">
            {PARTNERS.map((partner) => (
              <span
                key={partner}
                className="text-xs text-white/50 border border-white/15 rounded-full px-3 py-1"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/40">
            © {year} Haven for the Hopeless Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
