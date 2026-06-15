"use client";

import { useState } from "react";
import { Package, BookOpen, User, School, Star, Globe, CheckSquare } from "lucide-react";
import { DONATION_TIERS } from "@/lib/constants";

const ICON_MAP: Record<string, React.ElementType> = {
  Backpack: Package,
  BookOpen,
  User,
  School,
  Star,
  Globe,
};

const BAR_COLORS = ["#D4961E", "#C88A20", "#C84B1F", "#8B3B1A", "#163660", "#0C2447"];

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  dedication: string;
};

const INITIAL: FormState = { fullName: "", email: "", phone: "", dedication: "" };

export function DonationForm() {
  const [selectedTier, setSelectedTier] = useState<string>("");
  const [customAmount, setCustomAmount] = useState("");
  const [isMonthly, setIsMonthly] = useState(false);
  const [form, setForm] = useState<FormState>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [amountError, setAmountError] = useState(false);

  function update(field: keyof FormState, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedTier) {
      setAmountError(true);
      return;
    }
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="bg-white/80 border border-cobalt/20 rounded-2xl p-10 text-center">
        <CheckSquare size={44} className="text-cobalt mx-auto mb-4" strokeWidth={1.5} />
        <h3 className="font-display text-2xl font-bold text-cobalt mb-2">
          Donation request received.
        </h3>
        <p className="text-charcoal/60 text-sm leading-relaxed max-w-sm mx-auto">
          Thank you, {form.fullName || "friend"}. Our bank transfer details have been sent to{" "}
          <strong className="text-cobalt">{form.email || "your email"}</strong>. Please complete
          your transfer within 24 hours to confirm your donation.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8" id="form">
      {/* One-Time / Monthly toggle */}
      <div className="flex items-center gap-1 bg-white/60 rounded-full p-1 w-fit border border-cobalt/15">
        {(["One-Time", "Monthly"] as const).map((opt) => {
          const active = isMonthly === (opt === "Monthly");
          return (
            <button
              key={opt}
              type="button"
              onClick={() => setIsMonthly(opt === "Monthly")}
              className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
                active ? "bg-cobalt text-white shadow-sm" : "text-cobalt/60 hover:text-cobalt"
              }`}
            >
              {opt}
            </button>
          );
        })}
      </div>
      {isMonthly && (
        <p className="text-cobalt text-xs font-semibold flex items-center gap-1.5 -mt-4">
          <Star size={12} strokeWidth={2} className="text-gold" />
          Monthly donors are recognised as{" "}
          <span className="text-gold font-bold">Impact Champions</span>
        </p>
      )}

      {/* Amount tiles */}
      <div>
        <label className="block text-xs font-bold text-cobalt uppercase tracking-widest mb-3">
          Select Amount
        </label>
        <div className="grid grid-cols-3 gap-3">
          {DONATION_TIERS.map((tier, i) => {
            const Icon = ICON_MAP[tier.icon];
            const active = selectedTier === tier.amount;
            const isCustom = tier.amount === "Custom";
            const barColor = BAR_COLORS[i] ?? BAR_COLORS[BAR_COLORS.length - 1];
            return (
              <button
                key={tier.amount}
                type="button"
                onClick={() => {
                  setSelectedTier(tier.amount);
                  setAmountError(false);
                }}
                className={`relative rounded-xl border-2 p-3 text-left transition-all duration-200 ${
                  active
                    ? "border-cobalt bg-cobalt text-white shadow-md"
                    : "border-cobalt/20 bg-white hover:border-cobalt/50 text-cobalt"
                }`}
              >
                {Icon && (
                  <Icon
                    size={16}
                    strokeWidth={1.5}
                    className="mb-1.5"
                    style={{ color: active ? "#D4961E" : barColor }}
                  />
                )}
                <div
                  className={`font-mono font-bold text-sm ${
                    active ? "text-white" : "text-cobalt"
                  }`}
                >
                  {tier.amount}
                </div>
                {isCustom && active && (
                  <input
                    type="number"
                    min="100"
                    placeholder="Enter amount (₦)"
                    value={customAmount}
                    onChange={(e) => {
                      e.stopPropagation();
                      setCustomAmount(e.target.value);
                    }}
                    onClick={(e) => e.stopPropagation()}
                    className="mt-2 w-full bg-white/20 border border-white/40 rounded-lg px-2 py-1 text-white placeholder:text-white/50 text-xs focus:outline-none"
                  />
                )}
              </button>
            );
          })}
        </div>
        {selectedTier && (
          <p className="mt-3 text-cobalt/70 text-xs leading-relaxed">
            {DONATION_TIERS.find((t) => t.amount === selectedTier)?.impact}
          </p>
        )}
        {amountError && (
          <p className="mt-2 text-ember text-xs font-semibold">
            Please select a donation amount above.
          </p>
        )}
      </div>

      {/* Form fields */}
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
            className="w-full rounded-xl border border-cobalt/20 bg-white px-4 py-3 text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-cobalt/40 placeholder:text-charcoal/30"
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
            className="w-full rounded-xl border border-cobalt/20 bg-white px-4 py-3 text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-cobalt/40 placeholder:text-charcoal/30"
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
          className="w-full rounded-xl border border-cobalt/20 bg-white px-4 py-3 text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-cobalt/40 placeholder:text-charcoal/30"
        />
      </div>

      <div>
        <label className="block text-xs font-bold text-cobalt uppercase tracking-widest mb-2">
          Dedication Message{" "}
          <span className="text-charcoal/40 normal-case font-normal tracking-normal text-xs">
            (optional)
          </span>
        </label>
        <input
          type="text"
          value={form.dedication}
          onChange={(e) => update("dedication", e.target.value)}
          placeholder="In honour of / In memory of..."
          className="w-full rounded-xl border border-cobalt/20 bg-white px-4 py-3 text-charcoal text-sm focus:outline-none focus:ring-2 focus:ring-cobalt/40 placeholder:text-charcoal/30"
        />
      </div>

      {/* Payment note */}
      <div className="rounded-xl bg-white/70 border border-cobalt/20 px-5 py-4 flex gap-3 items-start">
        <CheckSquare size={18} className="text-cobalt shrink-0 mt-0.5" strokeWidth={2} />
        <p className="text-cobalt/70 text-sm leading-relaxed">
          After submitting this form,{" "}
          <strong className="text-cobalt">bank transfer details</strong> will be sent to your
          email immediately. All donations receive a receipt and a follow-up impact update.
        </p>
      </div>

      <button
        type="submit"
        className="w-full bg-ember hover:bg-ember/90 text-white font-bold text-base py-4 rounded-full transition-all duration-200 shadow-lg shadow-ember/20"
      >
        {isMonthly ? "Become an Impact Champion" : "Donate Now"}
      </button>
    </form>
  );
}
