import type { Metadata } from "next";
import { Header } from "@/components/layout/Header";

export const metadata: Metadata = {
  title: "Haven for the Hopeless Foundation — Empowering Lives for a Better Tomorrow",
  description:
    "HHF is a Nigerian NGO based in Ikorodu, Lagos. We run GCAMP, women empowerment programs, peacebuilding, and back-to-school projects — transforming 1,000+ lives since 2024.",
  openGraph: {
    title: "Haven for the Hopeless Foundation",
    description: "Empowering Lives for a Better Tomorrow — Ikorodu, Lagos.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Haven for the Hopeless Foundation",
    description: "Empowering Lives for a Better Tomorrow — Ikorodu, Lagos.",
  },
};
import { Footer } from "@/components/layout/Footer";
import { HeroSlider } from "@/components/home/HeroSlider";
import { ImpactNumbers } from "@/components/home/ImpactNumbers";
import { WhoWeAre } from "@/components/home/WhoWeAre";
import { ThreePillars } from "@/components/home/ThreePillars";
import { GCAMPSection } from "@/components/home/GCAMPSection";
import { ImpactHighlights } from "@/components/home/ImpactHighlights";
import { DonationLadder } from "@/components/home/DonationLadder";
import { CoreValues } from "@/components/home/CoreValues";
import { GetInvolved } from "@/components/home/GetInvolved";
import { MissionQuote } from "@/components/home/MissionQuote";
import { InstagramFeed } from "@/components/home/InstagramFeed";
import { ContactStrip } from "@/components/home/ContactStrip";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSlider />
        <ImpactNumbers />
        <WhoWeAre />
        <ThreePillars />
        <GCAMPSection />
        <ImpactHighlights />
        <DonationLadder />
        <CoreValues />
        <GetInvolved />
        <MissionQuote />
        <InstagramFeed />
        <ContactStrip />
      </main>
      <Footer />
    </>
  );
}
