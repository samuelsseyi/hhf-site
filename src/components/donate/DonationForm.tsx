"use client";

import { useState } from "react";
import {
  Package, BookOpen, User, School, Star, Globe,
  CheckSquare, X, Copy, Check, Banknote,
} from "lucide-react";
import { DONATION_TIERS } from "@/lib/constants";

// ── HHF BANK DETAILS ─────────────────────────────────────────────────────────
const BANK_DETAILS = {
  bankName: "GTBank (Guaranty Trust Bank)",
  accountName: "Haven for the Hopeless Foundation",
  accountNumber: "0837360068",
};
// ─────────────────────────────────────────────────────────────────────────────

// Formspree endpoint — sign up free at formspree.io, create a form, paste the
// action URL here so donor details are emailed to you for follow-up.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xpqevjyk";

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

function CopyRow({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);

  function copy() {
    navigator.clipboard.writeText(value).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  return (
    <div className="flex items-center justify-between py-3.5 border-b border-cobalt/10 last:border-0">
      <div>
        <p className="text-charcoal/45 text-[10px] font-bold uppercase tracking-widest mb-0.5">
          {label}
        </p>
        <p className="text-cobalt font-bold text-[15px] leading-snug">{value}</p>
      </div>
      <button
        type="button"
        onClick={copy}
        aria-label={`Copy ${label}`}
        className="ml-4 p-2 rounded-lg hover:bg-cobalt/10 transition-colors shrink-0"
      >
        {copied ? (
          <Check size={14} className="text-green-600" strokeWidth={2.5} />
        ) : (
          <Copy size={14} className="text-cobalt/40" strokeWidth={2} />
        )}
      </button>
    </div>
  );
}

function BankModal({
  donorName,
  amount,
  isMonthly,
  onClose,
}: {
  donorName: string;
  amount: string;
  isMonthly: boolean;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-cobalt/70 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative bg-white rounded-2xl shadow-2xl max-w-sm w-full p-8 z-10">
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-cobalt/8 transition-colors"
        >
          <X size={17} className="text-cobalt/40" strokeWidth={2} />
        </button>

        {/* Icon + heading */}
        <div className="flex items-center gap-3 mb-5">
          <div className="w-11 h-11 rounded-full bg-cobalt/10 flex items-center justify-center shrink-0">
            <Banknote size={20} className="text-cobalt" strokeWidth={1.5} />
          </div>
          <div>
            <h3 className="font-display text-lg font-bold text-cobalt leading-tight">
              Thank you, {donorName || "friend"}!
            </h3>
            <p className="text-charcoal/45 text-xs mt-0.5">
              {isMonthly ? "Monthly" : "One-time"} gift of{" "}
              <span className="font-bold text-gold">{amount}</span>
            </p>
          </div>
        </div>

        <p className="text-charcoal/60 text-sm leading-relaxed mb-5">
          Transfer your donation to the account below. Once received, we will
          send a receipt and impact update to your email.
        </p>

        {/* Bank details */}
        <div className="bg-cream rounded-xl px-5 py-1 mb-5">
          <CopyRow label="Bank" value={BANK_DETAILS.bankName} />
          <CopyRow label="Account Name" value={BANK_DETAILS.accountName} />
          <CopyRow label="Account Number" value={BANK_DETAILS.accountNumber} />
        </div>

        <p className="text-charcoal/35 text-[11px] text-center leading-relaxed mb-5">
          Use your name as the transfer narration so we can identify your donation.
        </p>

        <button
          type="button"
          onClick={onClose}
          className="w-full bg-cobalt hover:bg-cobalt-light text-white font-bold text-sm py-3.5 rounded-full transition-colors duration-200"
        >
          Done
        </button>
      </div>
    </div>
  );
}

export function DonationForm() {
  const [selectedTier, setSelectedTier] = useState<string>("");
  const [customAmount, setCustomAmount] = useState("");
  const [isMonthly, setIsMonthly] = useState(false);
  const [form, setForm] = useState<FormState>(INITIAL);
  const [showModal, setShowModal] = useState(false);
  const [amountError, setAmountError] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  function update(field: keyof FormState, value: string) {
    setForm((f) => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!selectedTier) {
      setAmountError(true);
      return;
    }

    setSubmitting(true);

    const amount =
      selectedTier === "Custom" && customAmount
        ? `₦${customAmount}`
        : selectedTier;

    // Capture donor details for follow-up — non-blocking
    try {
      await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.fullName,
          email: form.email,
          phone: form.phone,
          dedication: form.dedication,
          amount,
          frequency: isMonthly ? "Monthly" : "One-Time",
        }),
      });
    } catch {
      // Submission failure is silent — bank details still shown to donor
    }

    setSubmitting(false);
    setShowModal(true);
  }

  const displayAmount =
    selectedTier === "Custom" && customAmount
      ? `₦${customAmount}`
      : selectedTier;

  return (
    <>
      {showModal && (
        <BankModal
          donorName={form.fullName}
          amount={displayAmount}
          isMonthly={isMonthly}
          onClose={() => setShowModal(false)}
        />
      )}

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
            Submit this form and{" "}
            <strong className="text-cobalt">bank transfer details appear instantly</strong> on
            your screen. No waiting, no email delay.
          </p>
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-ember hover:bg-ember/90 disabled:opacity-60 text-white font-bold text-base py-4 rounded-full transition-all duration-200 shadow-lg shadow-ember/20"
        >
          {submitting ? "Processing..." : isMonthly ? "Become an Impact Champion" : "Donate Now"}
        </button>
      </form>
    </>
  );
}
