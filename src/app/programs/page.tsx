import type { Metadata } from "next";
import SectionHeader from "@/components/ui/SectionHeader";
import CTABanner from "@/components/home/CTABanner";
import ProgramsHero from "./components/ProgramsHero";
import ProgramCard from "./components/ProgramCard";
import ProgramCTAGrid from "./components/ProgramCTAGrid";
import LoveBackdrop from "./components/LoveBackdrop";

export const metadata: Metadata = {
  title: "Programs | Sylfi's Child Health Corner",
  description:
    "Explore SCHC's programs: Stitch-A-Uniform, Feed and Treat the Street, Monthly Miracle Fund, and Healthy Bridge Initiative.",
};

const programs = [
  {
    id: "stitch-a-uniform",
    title: "Stitch-A-Uniform Campaign",
    slogan: "One Stitch. One Uniform. One Child in School.",
    description:
      "The Stitch-A-Uniform Campaign supports children's education by ensuring no child misses school due to lack of a uniform. Through sponsorship, fabric donations, volunteer tailoring, and strategic partnerships, we clothe children so they can learn with dignity.",
    image: "/images/about-pg-imgs/stitch-a-uniform.jpeg",
    color: "primary" as const,
    features: [
      "Sponsorship programs for school uniforms",
      "Fabric donation drives",
      "Volunteer tailoring workshops",
      "School partnerships and distribution",
    ],
    category: "Education",
  },
  {
    id: "feed-and-treat",
    title: "Feed and Treat the Street",
    slogan: "Nourishment & Care for Every Child",
    description:
      "This program provides nutrition and medical care to street-connected children, breaking the cycle of neglect and disease. We organize feeding programs and basic healthcare support targeting communities where children face the greatest risk.",
    image: "/images/about-pg-imgs/feed-the-street.jpeg",
    color: "teal" as const,
    features: [
      "Organized feeding programs",
      "Basic healthcare support",
      "Breaking the cycle of neglected tropical diseases (NTDs)",
      "Community health education",
    ],
    category: "Health & Nutrition",
  },
  {
    id: "monthly-miracle",
    title: "Monthly Miracle Fund",
    slogan: "Hope and Support When It Matters Most",
    description:
      "The Monthly Miracle Fund provides financial and medical support for children in need — offering relief to families facing medical challenges and supporting pediatric patients who require urgent care but lack the resources to access it.",
    image: "/images/about-pg-imgs/monthly-miracle.jpeg",
    color: "primary" as const,
    features: [
      "Financial support for pediatric patients",
      "Medical care assistance",
      "Family relief programs",
      "Monthly outreach to beneficiaries",
    ],
    category: "Medical Support",
  },
  {
    id: "healthy-bridge",
    title: "Healthy Bridge Initiative",
    slogan: "Connecting Knowledge. Empowering Women. Protecting Children.",
    description:
      "The Healthy Bridge Initiative operates on three powerful pillars: connecting communities to health knowledge, empowering women as primary caregivers, and protecting children through education and advocacy.",
    image: "/images/about-pg-imgs/health-bridge.jpeg",
    color: "teal" as const,
    features: [
      "Connecting communities to health knowledge",
      "Empowering women as caregivers",
      "Protecting children through advocacy",
      "Educational workshops and seminars",
    ],
    category: "Community",
  },
];

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
            {programs.map((prog, i) => (
              <ProgramCard key={prog.id} index={i} {...prog} />
            ))}
          </div>
        </div>
      </section>

      {/* Get Involved CTA grid */}
      <section className="relative overflow-hidden py-20 lg:py-24 bg-white">
        <LoveBackdrop variant="subtle" />
        <div className="relative max-w-[1400px] xl:max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="mb-12 lg:mb-14">
            <SectionHeader
              tag="Get Involved"
              title="Be Part of the Change"
              subtitle="Every act of support — big or small — helps a child stay in school, get fed, and feel cared for."
            />
          </div>

          <ProgramCTAGrid />
        </div>
      </section>

      <CTABanner />
    </>
  );
}
