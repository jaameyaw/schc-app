import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className} data-scroll-behavior="smooth">
      <body className="min-h-full flex flex-col bg-light-bg text-dark-text antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
