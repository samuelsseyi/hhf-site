import type { Metadata } from "next";
import { Fraunces, Plus_Jakarta_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import { BackToTop } from "@/components/ui/BackToTop";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["SOFT", "WONK"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const dmMono = DM_Mono({
  variable: "--font-dm-mono",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  // Set this to your production domain before deploying, e.g.:
  // metadataBase: new URL("https://havenforthehopelessfoundation.org"),
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  title: {
    default: "Haven for the Hopeless Foundation: Empowering Lives for a Better Tomorrow",
    template: "%s | Haven for the Hopeless Foundation",
  },
  description:
    "Haven for the Hopeless Foundation is a Nigerian NGO based in Ikorodu, Lagos, transforming lives through girl-child education, women empowerment, and community development.",
  keywords: [
    "HHF",
    "Haven for the Hopeless Foundation",
    "Nigerian NGO",
    "Ikorodu",
    "Lagos",
    "girl child empowerment",
    "GCAMP",
    "education",
    "community development",
    "donate Nigeria",
    "women empowerment Nigeria",
  ],
  icons: {
    icon: [
      {
        url: "/images/logo/havenforthehopelessfoundation favicon.png",
        type: "image/png",
      },
    ],
    shortcut: "/images/logo/havenforthehopelessfoundation favicon.png",
    apple: "/images/logo/havenforthehopelessfoundation favicon.png",
  },
  openGraph: {
    title: "Haven for the Hopeless Foundation",
    description: "Empowering Lives for a Better Tomorrow. Ikorodu, Lagos.",
    images: [
      {
        url: "/images/logo/havenforthehopelessfoundation Logo.png",
        width: 1200,
        height: 630,
        alt: "Haven for the Hopeless Foundation",
      },
    ],
    type: "website",
    locale: "en_NG",
  },
  twitter: {
    card: "summary_large_image",
    title: "Haven for the Hopeless Foundation",
    description: "Empowering Lives for a Better Tomorrow. Ikorodu, Lagos.",
    images: ["/images/logo/havenforthehopelessfoundation Logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${jakarta.variable} ${dmMono.variable}`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
