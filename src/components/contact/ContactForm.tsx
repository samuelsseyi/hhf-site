"use client";

import { useState } from "react";
import { CheckSquare } from "lucide-react";

const ENQUIRY_TYPES = [
  "Donate to HHF",
  "Partner with HHF (Corporate/NGO)",
  "Volunteer my time",
  "Send a general enquiry",
  "Media / press enquiry",
  "Make an in-kind donation",
];

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  enquiryType: string;
  message: string;
};

const INITIAL: FormState = {
  fullName: "",
  email: "",
  phone: "",
  enquiryType: "",
  message: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [submitted, setSubmitted] = useState(false);

  function update(field: keyof FormState, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-cobalt/5 border border-cobalt/20 rounded-2xl p-10 text-center">
        <CheckSquare size={44} className="text-cobalt mx-auto mb-4" strokeWidth={1.5} />
        <h3 className="font-display text-2xl font-bold text-cobalt mb-2">Message received!</h3>
        <p className="text-charcoal/60 text-sm leading-relaxed max-w-sm mx-auto">
          We&apos;ll get back to you within 2 business days. Thank you for supporting HHF.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-bold text-cobalt uppercase tracking-widest mb-2">
            Full Name <span className="text-ember">*</span>
          </label>
          <input
            type="text"
            required
            value={form.fullName}
            onChange={(e) => update("fullName", e.target.value)}
            placeholder="Your full name"
            className="w-full rounded-xl border border-cobalt/20 px-4 py-3 text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-cobalt/40 placeholder:text-charcoal/30"
          />
        </div>
        <div>
          <label className="block text-xs font-bold text-cobalt uppercase tracking-widest mb-2">
            Email Address <span className="text-ember">*</span>
          </label>
          <input
            type="email"
            required
            value={form.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="you@example.com"
            className="w-full rounded-xl border border-cobalt/20 px-4 py-3 text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-cobalt/40 placeholder:text-charcoal/30"
          />
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-cobalt uppercase tracking-widest mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          value={form.phone}
          onChange={(e) => update("phone", e.target.value)}
          placeholder="+234 000 000 0000"
          className="w-full rounded-xl border border-cobalt/20 px-4 py-3 text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-cobalt/40 placeholder:text-charcoal/30"
        />
      </div>

      <div>
        <label className="block text-xs font-bold text-cobalt uppercase tracking-widest mb-2">
          I want to <span className="text-ember">*</span>
        </label>
        <select
          required
          value={form.enquiryType}
          onChange={(e) => update("enquiryType", e.target.value)}
          className="w-full rounded-xl border border-cobalt/20 px-4 py-3 text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-cobalt/40 bg-white"
        >
          <option value="" disabled>
            Select an option...
          </option>
          {ENQUIRY_TYPES.map((t) => (
            <option key={t} value={t}>
              {t}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label className="block text-xs font-bold text-cobalt uppercase tracking-widest mb-2">
          Message
        </label>
        <textarea
          rows={5}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Tell us about your interest or enquiry..."
          className="w-full rounded-xl border border-cobalt/20 px-4 py-3 text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-cobalt/40 placeholder:text-charcoal/30 resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-ember hover:bg-ember/90 text-white font-bold text-sm py-4 rounded-full transition-all duration-200 shadow-md shadow-ember/20"
      >
        Send Message
      </button>

      <p className="text-charcoal/40 text-xs text-center">
        Your details are private. We never share your information with third parties.
      </p>
    </form>
  );
}
