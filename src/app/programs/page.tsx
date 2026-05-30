import type { Metadata } from "next";
import SectionHeader from "@/components/ui/SectionHeader";
import CTABanner from "@/components/home/CTABanner";
import ProgramsHero from "./components/ProgramsHero";
import ProgramCard from "./components/ProgramCard";
import GetInvolvedSection from "./components/GetInvolvedSection";
import LoveBackdrop from "./components/LoveBackdrop";
import { programs } from "@/data/programs";

export const metadata: Metadata = {
  title: "Programs | Sylfi's Child Health Corner",
  description:
    "Explore SCHC's programs: Stitch-A-Uniform, Feed and Treat the Street, Monthly Miracle Fund, and Healthy Bridge Initiative.",
  alternates: {
    canonical: "/programs",
  },
};

export default function ProgramsPage() {
  return (
    <>
      <ProgramsHero />

      {/* Programs section */}
      <section className="relative overflow-hidden py-20 lg:py-28 bg-light-bg">
        <LoveBackdrop />
        <div className="relative max-w-[1400px] xl:max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="mb-16 lg:mb-20">
            <SectionHeader
              tag="What We Do"
              title="Our Programs & Initiatives"
              subtitle="Each program addresses a specific dimension of child health, education, and community welfare."
            />
          </div>

          <div className="flex flex-col gap-20 md:gap-24 lg:gap-28">
            {programs.map(({ preview: _preview, ...prog }, i) => (
              <ProgramCard key={prog.id} index={i} {...prog} />
            ))}
          </div>
        </div>
      </section>

      <GetInvolvedSection />

      <CTABanner />
    </>
  );
}
