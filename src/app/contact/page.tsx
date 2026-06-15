import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Reach out to HHF to donate, partner, volunteer, or learn more. We respond within 2 business days. Based in Ikorodu, Lagos — available to connect nationwide.",
  openGraph: {
    title: "Contact Us | Haven for the Hopeless Foundation",
    description: "Let's build something together. Reach out — we respond within 2 business days.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Haven for the Hopeless Foundation",
    description: "Let's build something together. Reach out to HHF today.",
  },
};
import {
  MapPin,
  Phone,
  Mail,
  Globe,
  CheckSquare,
  HeartHandshake,
  ArrowRight,
} from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { WaveArc } from "@/components/ui/WaveArc";
import { COLORS, BRAND } from "@/lib/constants";
import { ContactForm } from "@/components/contact/ContactForm";
import { FaqAccordion } from "@/components/contact/FaqAccordion";

const LIGHT_BLUE = "#EAF1FB";

const NEXT_STEPS = [
  {
    icon: CheckSquare,
    step: "01",
    title: "We respond within 2 business days",
    body: "No automated reply — a real person from the HHF team reads your message.",
  },
  {
    icon: Phone,
    step: "02",
    title: "We have a quick call",
    body: "A short conversation to understand your interest and how you can best contribute.",
  },
  {
    icon: HeartHandshake,
    step: "03",
    title: "We figure it out together",
    body: "Together we design how your time, money, or network becomes real impact.",
  },
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main>
        {/* ── HERO ── */}
        <section className="relative pt-40 pb-24 bg-cream overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center gap-2 text-cobalt/40 text-xs font-semibold mb-8">
              <Link href="/" className="hover:text-cobalt transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-cobalt">Contact</span>
            </nav>

            <span className="block w-10 h-0.5 bg-gold mb-6" />
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-cobalt leading-tight mb-4 max-w-3xl">
              Let&apos;s build something together.
            </h1>
            <p className="text-charcoal/60 text-lg sm:text-xl max-w-2xl leading-relaxed">
              Whether you want to donate, partner, volunteer, or just learn more — we&apos;d love to
              hear from you.
            </p>
          </div>

          <WaveArc fill="white" />
        </section>

        {/* ── TWO-COLUMN MAIN ── */}
        <section className="relative py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
              {/* LEFT: Contact Form (60%) */}
              <div className="lg:col-span-3">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-cobalt mb-8">
                  Send us a message.
                </h2>
                <ContactForm />
              </div>

              {/* RIGHT: Contact Card (40%) */}
              <div className="lg:col-span-2">
                <div className="bg-white border-2 border-cobalt/15 rounded-2xl p-7 shadow-xl shadow-cobalt/5 sticky top-28">
                  <h3 className="font-display text-xl font-bold text-cobalt mb-6">
                    Reach us directly.
                  </h3>

                  <ul className="space-y-5 mb-6">
                    <li className="flex items-start gap-3">
                      <MapPin size={16} className="text-cobalt/50 mt-0.5 shrink-0" strokeWidth={2} />
                      <span className="text-charcoal/70 text-sm leading-snug">
                        {BRAND.location}
                      </span>
                    </li>

                    <li className="flex items-center gap-3">
                      <Phone size={16} className="text-cobalt/50 shrink-0" strokeWidth={2} />
                      <a
                        href={`tel:${BRAND.phone1.replace(/\s/g, "")}`}
                        className="text-cobalt text-sm font-semibold hover:text-ember transition-colors"
                      >
                        {BRAND.phone1}
                      </a>
                    </li>

                    <li className="flex items-center gap-3">
                      <Phone size={16} className="text-cobalt/50 shrink-0" strokeWidth={2} />
                      <a
                        href={`tel:${BRAND.phone2.replace(/\s/g, "")}`}
                        className="text-cobalt text-sm font-semibold hover:text-ember transition-colors"
                      >
                        {BRAND.phone2}
                      </a>
                    </li>

                    <li className="flex items-center gap-3">
                      <Mail size={16} className="text-cobalt/50 shrink-0" strokeWidth={2} />
                      <a
                        href={`mailto:${BRAND.email}`}
                        className="text-cobalt text-sm font-semibold hover:text-ember transition-colors break-all"
                      >
                        {BRAND.email}
                      </a>
                    </li>

                    <li className="flex items-center gap-3">
                      <Globe size={16} className="text-cobalt/50 shrink-0" strokeWidth={2} />
                      <a
                        href={BRAND.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-cobalt text-sm font-semibold hover:text-ember transition-colors"
                      >
                        {BRAND.instagramHandle}
                      </a>
                    </li>

                    <li className="flex items-center gap-3">
                      <CheckSquare
                        size={16}
                        className="text-cobalt/50 shrink-0"
                        strokeWidth={2}
                      />
                      <span className="text-charcoal/60 text-sm">
                        Response time:{" "}
                        <span className="font-semibold text-cobalt">within 2 business days</span>
                      </span>
                    </li>
                  </ul>

                  <div className="border-t border-cobalt/10 pt-6">
                    <p className="text-cobalt font-bold text-sm mb-1">
                      Prefer a direct conversation?
                    </p>
                    <p className="text-charcoal/55 text-sm leading-relaxed mb-5">
                      Reach out by phone — no gatekeepers, no forms. Just a real conversation
                      about how you can be part of this work.
                    </p>
                    <Link
                      href="/donate"
                      className="inline-flex items-center gap-2 bg-ember hover:bg-ember/90 text-white font-bold text-sm px-6 py-3 rounded-full transition-all duration-200 w-full justify-center"
                    >
                      Donate Now
                      <ArrowRight size={15} strokeWidth={2.5} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <WaveArc fill={LIGHT_BLUE} />
        </section>

        {/* ── WHAT HAPPENS NEXT ── */}
        <section
          className="relative py-24 overflow-hidden"
          style={{ backgroundColor: LIGHT_BLUE }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mb-12">
              <span className="gold-rule" />
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-cobalt mb-3">
                After you reach out&hellip;
              </h2>
              <p className="text-charcoal/55 text-base">
                No pressure. No obligation. Just a conversation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {NEXT_STEPS.map(({ icon: Icon, step, title, body }) => (
                <div key={step} className="flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-cobalt flex items-center justify-center shrink-0">
                      <Icon size={20} className="text-gold" strokeWidth={1.5} />
                    </div>
                    <span className="font-mono text-cobalt/30 font-bold text-2xl leading-none">
                      {step}
                    </span>
                  </div>
                  <h3 className="font-bold text-cobalt text-base mb-2 leading-snug">{title}</h3>
                  <p className="text-charcoal/60 text-sm leading-relaxed">{body}</p>
                </div>
              ))}
            </div>
          </div>

          <WaveArc fill="white" />
        </section>

        {/* ── FAQ ── */}
        <section className="relative py-24 bg-white overflow-hidden">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10">
              <span className="gold-rule" />
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-cobalt mb-3">
                Common questions.
              </h2>
            </div>

            <FaqAccordion />
          </div>

          <WaveArc fill={COLORS.ember} />
        </section>

        {/* ── DONATION STRIP ── */}
        <section className="py-20 bg-ember">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-white mb-3">
              Ready to make an impact today?
            </h2>
            <p className="text-white/70 text-base mb-8">
              A girl somewhere is waiting for a reason to keep showing up.
            </p>
            <Link
              href="/donate"
              className="inline-flex items-center gap-2 bg-white hover:bg-cream text-cobalt font-bold text-base px-10 py-4 rounded-full transition-all duration-200 shadow-lg"
            >
              Donate Now
              <ArrowRight size={18} strokeWidth={2.5} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
