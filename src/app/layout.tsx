import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "react-hot-toast";
import AnnouncementBar from "@/components/nav/AnnouncementBar";
import Navbar from "@/components/nav/Navbar";
import Footer from "@/components/nav/Footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vela Reward — The RepeatMD Alternative for Medical Aesthetics Clinics",
  description:
    "The loyalty and commerce platform built for medical aesthetics clinics. No revenue sharing. Flat monthly pricing. Flash sales, QR checkout, GHL integration, memberships, and more. Start free for 30 days.",
  metadataBase: new URL("https://velareward.com"),
  openGraph: {
    title: "Vela Reward — The RepeatMD Alternative for Medical Aesthetics Clinics",
    description:
      "No revenue sharing. Flat monthly pricing. Flash sales, QR checkout, GHL integration, memberships, and more.",
    url: "https://velareward.com",
    siteName: "Vela Reward",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vela Reward — The RepeatMD Alternative",
    description: "The loyalty platform medical aesthetics clinics actually want to use.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "https://velareward.com" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Vela Reward",
              description: "The loyalty and commerce platform for medical aesthetics clinics",
              applicationCategory: "BusinessApplication",
              operatingSystem: "iOS, Android, Web",
              offers: {
                "@type": "AggregateOffer",
                lowPrice: "149",
                highPrice: "499",
                priceCurrency: "USD",
                offerCount: "3",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Vela Reward",
              url: "https://velareward.com",
              description: "Loyalty and commerce platform for medical aesthetics clinics",
              contactPoint: {
                "@type": "ContactPoint",
                email: "hello@velareward.com",
                contactType: "sales",
              },
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-surface text-dark font-[family-name:var(--font-inter)]">
        <Toaster position="top-center" />
        <AnnouncementBar />
        <Navbar />
        <div className="flex-1">{children}</div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
