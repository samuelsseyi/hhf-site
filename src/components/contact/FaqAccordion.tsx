"use client";

import { useState } from "react";
import { ChevronRight } from "lucide-react";

const FAQS = [
  {
    q: "How do I donate?",
    a: "Submit the donation form on our Donate page or contact us directly. Bank transfer details will be sent to your email. All donations receive a receipt and a follow-up impact update.",
  },
  {
    q: "Can I donate from outside Nigeria?",
    a: "Yes. Contact us directly and we will provide international transfer details tailored to your location.",
  },
  {
    q: "How do I become a corporate partner?",
    a: 'Select "Partner with HHF" in the form above. We\'ll schedule a call to discuss your CSR goals and how they align with our programs.',
  },
  {
    q: "Can I volunteer if I'm not in Lagos?",
    a: "Yes. We welcome remote volunteers for social media, content creation, documentation, and online mentoring. Reach out through the contact form above.",
  },
  {
    q: "How do I know my donation is being used well?",
    a: "All donors receive impact reports with photo and video documentation. We are fully transparent and accountable to every partner and donor.",
  },
  {
    q: "Is HHF a registered organisation?",
    a: "Yes. Haven for the Hopeless Foundation is a registered Nigerian NGO. Full registration details will be published here shortly.",
  },
];

export function FaqAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div className="divide-y divide-cobalt/10 border border-cobalt/10 rounded-2xl overflow-hidden">
      {FAQS.map((faq, i) => (
        <div key={i}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-cobalt/3 transition-colors"
            aria-expanded={open === i}
          >
            <span className="font-bold text-cobalt text-sm sm:text-base pr-2">{faq.q}</span>
            <ChevronRight
              size={18}
              strokeWidth={2}
              className={`text-cobalt/40 shrink-0 transition-transform duration-300 ${
                open === i ? "rotate-90" : ""
              }`}
            />
          </button>
          {open === i && (
            <div className="px-6 pb-5">
              <p className="text-charcoal/65 text-sm leading-relaxed">{faq.a}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
