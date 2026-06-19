import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Heart } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-cream flex flex-col items-center justify-center px-4 text-center">
      <Link href="/" className="mb-10">
        <Image
          src="/images/logo/havenforthehopelessfoundation Logo.png"
          alt="Haven for the Hopeless Foundation"
          width={200}
          height={65}
          className="h-16 w-auto object-contain"
          priority
        />
      </Link>

      <span className="font-mono text-gold text-sm font-bold tracking-widest mb-4 uppercase">
        404: Page Not Found
      </span>

      <h1 className="font-display text-4xl sm:text-5xl font-bold text-cobalt mb-4 max-w-lg leading-tight">
        Oops, this page doesn&apos;t exist.
      </h1>

      <p className="text-charcoal/60 text-base max-w-sm mb-10 leading-relaxed">
        We couldn&apos;t find what you were looking for. Let&apos;s get you back to where the work
        is happening.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-cobalt hover:bg-cobalt/90 text-white font-bold text-sm px-8 py-4 rounded-full transition-all duration-200 shadow-md"
        >
          <ArrowLeft size={16} strokeWidth={2.5} />
          Go back home
        </Link>
        <Link
          href="/donate"
          className="inline-flex items-center gap-2 bg-ember hover:bg-ember/90 text-white font-bold text-sm px-8 py-4 rounded-full transition-all duration-200 shadow-md"
        >
          <Heart size={16} strokeWidth={2.5} />
          Donate anyway
        </Link>
      </div>

      <p className="text-charcoal/30 text-xs mt-16">
        Haven for the Hopeless Foundation · Ikorodu, Lagos
      </p>
    </main>
  );
}
