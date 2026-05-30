import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
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
      "addressLocality": "Kumasi",
      "addressCountry": "Ghana"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "email": "childhealthcorner@gmail.com",
      "telephone": "+233-54-712-4909",
      "contactType": "customer support"
    },
    "sameAs": [
      "https://www.instagram.com/chc_kidshealth?igsh=MW1hZDVpeDZmbmJheg==",
      "https://youtube.com/@childhealthcorner?si=VgWVhuEE0T4ojxzK",
      "https://www.tiktok.com/@chc_kidshealth?_r=1&_t=ZS-96Dp9xARa1R",
      "https://www.linkedin.com/company/child-health-corner/"
    ]
  };

  return (
    <html lang="en" className={poppins.className} data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ngoSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-light-bg text-dark-text antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
