import {
  Heart,
  Users,
  HandHeart,
  Eye,
  Leaf,
  CheckSquare,
  Sparkles,
} from "lucide-react";
import { WaveArc } from "@/components/ui/WaveArc";
import { COLORS } from "@/lib/constants";

const VALUES = [
  { icon: Heart,       title: "Compassion",     body: "We lead with empathy in every interaction." },
  { icon: Users,       title: "Teamwork",        body: "We achieve more when we move together." },
  { icon: HandHeart,   title: "Service",         body: "We exist to serve, not to be seen." },
  { icon: Eye,         title: "Transparency",    body: "Every naira and every action is accountable." },
  { icon: Leaf,        title: "Humility",        body: "We learn from the communities we serve." },
  { icon: CheckSquare, title: "Responsibility",  body: "We own our outcomes, good and bad." },
  { icon: Sparkles,    title: "Excellence",      body: "We do the work well because the work matters." },
];

export function CoreValues() {
  return (
    <section className="arc-section relative py-28 bg-cream overflow-hidden" aria-label="Core values">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="gold-rule mx-auto" />
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-cobalt mb-3">
            What We Stand On.
          </h2>
        </div>

        {/* Values grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {VALUES.map(({ icon: Icon, title, body }, i) => {
            const isLast = i === VALUES.length - 1;
            return (
              <div
                key={title}
                className={`group relative rounded-2xl bg-white border border-cobalt/8 p-6 flex flex-col gap-3 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 ${
                  isLast ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                {/* Gold rule top accent */}
                <span className="block w-8 h-0.5 bg-gold mb-1" />
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-cobalt/6 text-cobalt group-hover:bg-cobalt group-hover:text-white transition-colors duration-300">
                  <Icon size={18} strokeWidth={2} />
                </span>
                <h3 className="font-display text-lg font-bold text-cobalt">{title}</h3>
                <p className="text-charcoal/60 text-sm leading-relaxed">{body}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Arc → ember */}
      <WaveArc fill={COLORS.ember} />
    </section>
  );
}
