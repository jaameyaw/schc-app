import Hero from "@/components/home/Hero";
import ImpactStats from "@/components/home/ImpactStats";
import ProgramsPreview from "@/components/home/ProgramsPreview";
import AboutPreview from "@/components/home/AboutPreview";
import Testimonials from "@/components/home/Testimonials";
import CTABanner from "@/components/home/CTABanner";
import Newsletter from "@/components/home/Newsletter";

export default function HomePage() {
  return (
    <>
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
