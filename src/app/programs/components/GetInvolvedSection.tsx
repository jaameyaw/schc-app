import SectionHeader from "@/components/ui/SectionHeader";
import ProgramCTAGrid from "./ProgramCTAGrid";
import LoveBackdrop from "./LoveBackdrop";

export default function GetInvolvedSection() {
  return (
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
  );
}
