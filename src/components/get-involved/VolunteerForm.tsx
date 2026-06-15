"use client";

import { useState } from "react";
import { GraduationCap, Users, Globe, BookOpen, Home, CheckSquare } from "lucide-react";

const ROLES = [
  { icon: GraduationCap, label: "School Mentor" },
  { icon: Users, label: "Event Facilitator" },
  { icon: Globe, label: "Social Media Volunteer" },
  { icon: BookOpen, label: "Content & Documentation" },
  { icon: Home, label: "Logistics & Field Support" },
];

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  skills: string;
  availability: "weekdays" | "weekends" | "both" | "";
  interest: string;
};

const INITIAL: FormState = {
  fullName: "",
  email: "",
  phone: "",
  skills: "",
  availability: "",
  interest: "",
};

export function VolunteerForm() {
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
        <CheckSquare size={40} className="text-cobalt mx-auto mb-4" strokeWidth={1.5} />
        <h3 className="font-display text-2xl font-bold text-cobalt mb-2">Application received.</h3>
        <p className="text-charcoal/60 text-sm leading-relaxed">
          Thank you, {form.fullName || "friend"}. A member of the HHF team will be in touch shortly.
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
            Email <span className="text-ember">*</span>
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
          Skills / Experience
        </label>
        <textarea
          rows={3}
          value={form.skills}
          onChange={(e) => update("skills", e.target.value)}
          placeholder="Tell us about your skills, background, and what you bring..."
          className="w-full rounded-xl border border-cobalt/20 px-4 py-3 text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-cobalt/40 placeholder:text-charcoal/30 resize-none"
        />
      </div>

      <div>
        <label className="block text-xs font-bold text-cobalt uppercase tracking-widest mb-3">
          Availability
        </label>
        <div className="flex flex-wrap gap-3">
          {(["weekdays", "weekends", "both"] as const).map((opt) => (
            <label key={opt} className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="availability"
                value={opt}
                checked={form.availability === opt}
                onChange={() => update("availability", opt)}
                className="accent-cobalt"
              />
              <span className="text-sm font-semibold text-charcoal capitalize">{opt}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label className="block text-xs font-bold text-cobalt uppercase tracking-widest mb-2">
          Area of Interest <span className="text-ember">*</span>
        </label>
        <select
          required
          value={form.interest}
          onChange={(e) => update("interest", e.target.value)}
          className="w-full rounded-xl border border-cobalt/20 px-4 py-3 text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-cobalt/40 bg-white"
        >
          <option value="" disabled>Select a role...</option>
          {ROLES.map((r) => (
            <option key={r.label} value={r.label}>{r.label}</option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-ember hover:bg-ember/90 text-white font-bold text-sm py-4 rounded-full transition-all duration-200 shadow-md shadow-ember/20"
      >
        Apply to Volunteer
      </button>
    </form>
  );
}
