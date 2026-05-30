import { Metadata } from "next";
import Hero from "@/components/home/Hero";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};
import ImpactStats from "@/components/home/ImpactStats";
import ProgramsPreview from "@/components/home/ProgramsPreview";
import AboutPreview from "@/components/home/AboutPreview";
import Testimonials from "@/components/home/Testimonials";
import CTABanner from "@/components/home/CTABanner";
import Newsletter from "@/components/home/Newsletter";
import DonateCTAPopup from "@/components/home/DonateCTAPopup";

export default function HomePage() {
  return (
    <>
      <DonateCTAPopup />
      <Hero />
      <ImpactStats />
      <ProgramsPreview />
      <AboutPreview />
      <Testimonials />
      <CTABanner />
      <Newsletter />
    </>
  );
}
