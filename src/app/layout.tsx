import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import Preloader from "@/components/ui/Preloader";
import { siteConfig } from "@/lib/siteConfig";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.childhealthcorner.org'),
  title: "Sylfi's Child Health Corner (SCHC)",
  description:
    "Empowering families and caregivers to prioritize children's health and well-being through education, advocacy, and community engagement.",
  keywords: [
    "child health",
    "nonprofit",
    "Ghana",
    "SCHC",
    "Sylfi",
    "child welfare",
  ],
  icons: {
    icon: "/favicon-schc.png",
  },
  openGraph: {
    title: "Sylfi's Child Health Corner (SCHC)",
    description: "Empowering families and caregivers to prioritize children's health and well-being through education, advocacy, and community engagement.",
    url: 'https://www.childhealthcorner.org',
    siteName: "Sylfi's Child Health Corner",
    images: [
      {
        url: '/images/IMG_8748.jpg',
        width: 1200,
        height: 630,
        alt: "SCHC Community and Volunteers",
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Sylfi's Child Health Corner (SCHC)",
    description: "Empowering families and caregivers to prioritize children's health and well-being through education, advocacy, and community engagement.",
    images: ['/images/IMG_8748.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const ngoSchema = {
    "@context": "https://schema.org",
    "@type": "NGO",
    "name": "Sylfi's Child Health Corner",
    "alternateName": "SCHC",
    "url": "https://www.childhealthcorner.org",
    "logo": "https://www.childhealthcorner.org/favicon-schc.png",
    "description": "Empowering families and caregivers to prioritize children's health and well-being through education, advocacy, and community engagement.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": siteConfig.location.city,
      "addressCountry": siteConfig.location.country
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": siteConfig.email,
      "telephone": siteConfig.phone.intl,
      "contactType": "customer support"
    },
    "sameAs": [
      siteConfig.social.instagram,
      siteConfig.social.youtube,
      siteConfig.social.tiktok,
      siteConfig.social.linkedin
    ]
  };

  return (
    <html
      lang="en"
      className={`${poppins.variable} ${GeistSans.variable}`}
      data-scroll-behavior="smooth"
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ngoSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-light-bg text-dark-text antialiased">
        <Preloader />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
