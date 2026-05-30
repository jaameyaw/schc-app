import type { Metadata } from "next";
import AboutHero from "./components/AboutHero";
import OurStory from "./components/OurStory";
import MissionVision from "./components/MissionVision";
import AboutImpactVideo from "./components/AboutImpactVideo";
import Leadership from "./components/Leadership";
import CTABanner from "@/components/home/CTABanner";

export const metadata: Metadata = {
  title: "About Us | Sylfi's Child Health Corner",
  description:
    "Learn about SCHC's story, mission, vision, and the dedicated team working to improve child health in Ghana.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <OurStory />
      <MissionVision />
      <AboutImpactVideo />
      <Leadership />
      <CTABanner />
    </>
  );
}
