import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { BRAND } from "@/lib/constants";

const CARDS = [
  {
    icon: Phone,
    title: "Call Us",
    lines: [BRAND.phone1, BRAND.phone2],
    href: `tel:${BRAND.phone1.replace(/\s/g, "")}`,
    cta: "Call Now",
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: [BRAND.email],
    href: `mailto:${BRAND.email}`,
    cta: "Send Email",
  },
  {
    icon: MapPin,
    title: "Find Us",
    lines: ["Ikorodu, Lagos State", "Nigeria"],
    href: "/contact",
    cta: "Get Directions",
  },
];

export function ContactStrip() {
  return (
    <section className="relative py-20 bg-cobalt" aria-label="Contact information">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="gold-rule mx-auto" />
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
            We&apos;d Love to Hear from You.
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {CARDS.map(({ icon: Icon, title, lines, href, cta }) => (
            <div
              key={title}
              className="flex flex-col items-center text-center gap-4 bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors duration-300"
            >
              <span className="flex items-center justify-center w-14 h-14 rounded-full bg-gold/15 text-gold">
                <Icon size={24} strokeWidth={1.8} />
              </span>
              <h3 className="font-display text-lg font-bold text-white">{title}</h3>
              <div className="flex flex-col gap-1">
                {lines.map((line) => (
                  <p key={line} className="text-white/60 text-sm">{line}</p>
                ))}
              </div>
              <a
                href={href}
                className="mt-2 inline-flex items-center text-gold font-bold text-sm hover:text-gold-light transition-colors duration-200"
              >
                {cta} →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
