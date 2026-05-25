"use client";

import { motion } from "framer-motion";
import { GeistSans } from "geist/font/sans";
import Image from "next/image";
import CTABanner from "@/components/home/CTABanner";
import EngagementSection from "./components/EngagementSection";
import VolunteerPartnershipDivider from "./components/VolunteerPartnershipDivider";
import VolunteerBackdrop from "./components/VolunteerBackdrop";
import { Building2, Stethoscope, BookOpen, Users, Smartphone, Heart } from "lucide-react";
import {
  volunteerEyebrowHero,
  volunteerH1,
  volunteerHeroLead,
  volunteerCardLabel,
} from "./volunteerTypography";

export default function VolunteerPage() {
  return (
    <div className={`${GeistSans.variable} font-section`}>
      {/* Hero */}
      <section className="relative isolate overflow-hidden bg-gradient-to-br from-primary to-teal py-24">
        <div className="absolute inset-0 z-0 opacity-[0.14]">
          <Image
            src="/images/IMG_8748.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <VolunteerBackdrop variant="hero" />
        <div className="relative z-10 w-full px-6 text-center lg:px-12 xl:px-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={volunteerEyebrowHero}>Get Involved</span>
            <h1 className={`${volunteerH1} mb-5`}>Volunteer &amp; Partnership</h1>
            <p className={volunteerHeroLead}>
              Join our growing family of changemakers. Whether you volunteer
              your time or partner with us, you help create brighter futures for
              children.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Volunteer Section */}
      <EngagementSection
        backdrop="primary"
        sectionClassName="relative py-16 sm:py-20 overflow-hidden bg-white"
        badge="Volunteer With Us"
        title="Your Time Creates Real Impact"
        description="Volunteers are the heart of SCHC. They implement programs, participate in outreach campaigns, and directly touch the lives of children and families who need it most."
        listTitle="Volunteer Opportunities"
        items={[
          { label: "Program Implementers", icon: Users },
          { label: "Health Outreach", icon: Stethoscope },
          { label: "School & Literacy Support", icon: BookOpen },
          { label: "Community Engagement", icon: Heart },
          { label: "Media & Advocacy", icon: Smartphone },
          { label: "Operations Support", icon: Building2 },
        ]}
        cardClassName={`flex items-center gap-2.5 bg-primary/5 border border-primary/10 rounded-lg px-4 py-3 ${volunteerCardLabel}`}
        iconClassName="w-5 h-5 text-primary shrink-0"
        button={{
          href: "https://docs.google.com/forms/d/e/1FAIpQLSc45-Vnum5Q_kGUqy-OCVWuyHjdT6YvE1YODu7FF39XATF62A/viewform?usp=header",
          label: "Apply to Volunteer",
          variant: "primary",
          external: true,
        }}
        image={{
          src: "/images/IMG_8989.jpg",
          alt: "SCHC volunteers",
          shadowClassName: "shadow-[0_18px_35px_rgba(15,23,42,0.12)]",
        }}
      />

      <VolunteerPartnershipDivider />

      {/* Partnership Section */}
      <EngagementSection
        id="partner"
        backdrop="teal"
        sectionClassName="relative scroll-mt-20 overflow-hidden bg-light-bg py-20"
        badge="Partnerships"
        title="Partner With SCHC"
        description="Strategic partnerships amplify our impact. We welcome organizations, businesses, schools, and individuals who share our commitment to child health and welfare."
        listTitle="Partnership Opportunities"
        items={[
          { label: "Corporate Sponsors", icon: Building2 },
          { label: "Healthcare Providers", icon: Stethoscope },
          { label: "Schools & Universities", icon: BookOpen },
          { label: "Community Organizations", icon: Users },
          { label: "Media Partners", icon: Smartphone },
          { label: "Individual Donors", icon: Heart },
        ]}
        cardClassName={`flex items-center gap-2.5 bg-white rounded-lg px-4 py-3 ${volunteerCardLabel}`}
        iconClassName="w-5 h-5 text-teal shrink-0"
        button={{
          href: "https://forms.gle/DrKn2VzfK66XzzKJ6",
          label: "Become a Partner",
          variant: "teal",
          external: true,
        }}
        image={{
          src: "/images/IMG_9036.jpg",
          alt: "SCHC partnership",
          shadowClassName: "shadow-lg",
        }}
        reverse
      />

      <CTABanner />
    </div>
  );
}
