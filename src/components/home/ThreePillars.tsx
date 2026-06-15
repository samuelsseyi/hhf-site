import Image from "next/image";
import Link from "next/link";
import { GraduationCap, Users, Globe, ArrowRight } from "lucide-react";
import { WaveArc } from "@/components/ui/WaveArc";
import { COLORS } from "@/lib/constants";

const PILLARS = [
  {
    image: "/images/gcamp/WhatsApp Image 2026-06-11 at 09.39.50.jpeg",
    alt: "Children engaged in learning at an HHF school outreach session",
    icon: GraduationCap,
    overlayColor: "bg-cobalt/80",
    title: "Access to Quality Education",
    body: "We provide educational materials and build the mental capacity of children — equipping them for a productive, purpose-driven life.",
    href: "/programs",
  },
  {
    image: "/images/girlchild-programs/WhatsApp Image 2026-06-11 at 15.58.15.jpeg",
    alt: "Girls in an HHF mentorship and empowerment circle",
    icon: Users,
    overlayColor: "bg-ember/80",
    title: "Girl Child & Women Empowerment",
    body: "We equip girls and women with confidence, dignity, leadership capacity, and the right mindset to thrive — starting with who they are before addressing what they face.",
    href: "/programs",
  },
  {
    image: "/images/women-empowerment/WhatsApp Image 2026-06-11 at 16.03.51.jpeg",
    alt: "HHF community outreach and advocacy moment in Ikorodu",
    icon: Globe,
    overlayColor: "bg-savanna/80",
    title: "Community Development & Advocacy",
    body: "We promote sustainable development, equality, justice, civic responsibility, and community-driven solutions — because lasting change is built from within.",
    href: "/programs",
  },
];

export function ThreePillars() {
  return (
    <section className="arc-section relative py-28 bg-cobalt overflow-hidden" aria-label="Three pillars of change">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="gold-rule mx-auto" />
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Three Pillars of Change.
          </h2>
          <p className="text-white/60 text-base sm:text-lg max-w-xl mx-auto">
            Everything we do begins here.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PILLARS.map(({ image, alt, icon: Icon, overlayColor, title, body, href }) => (
            <div
              key={title}
              className="group relative rounded-2xl overflow-hidden aspect-[3/4] shadow-xl cursor-pointer"
            >
              {/* Photo */}
              <Image
                src={image}
                alt={alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />

              {/* Colour overlay */}
              <div className={`absolute inset-0 ${overlayColor} transition-opacity duration-300`} />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-7">
                <div className="mb-4">
                  <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/15 border border-white/30 mb-4">
                    <Icon size={22} strokeWidth={1.8} className="text-white" />
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-white mb-3 leading-snug">
                    {title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed mb-5">
                    {body}
                  </p>
                </div>
                <Link
                  href={href}
                  className="inline-flex items-center gap-2 text-white/90 hover:text-gold text-sm font-bold transition-colors duration-200 group/link"
                >
                  Learn More
                  <ArrowRight size={14} strokeWidth={2.5} className="group-hover/link:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arc → savanna */}
      <WaveArc fill={COLORS.savanna} />
    </section>
  );
}
