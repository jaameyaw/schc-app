"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import CTABanner from "@/components/home/CTABanner";
import EngagementSection from "./components/EngagementSection";
import { Building2, Stethoscope, BookOpen, Users, Smartphone, Heart } from "lucide-react";

export default function VolunteerPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary to-teal py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/IMG_8748.jpg"
            alt="SCHC background"
            fill
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="relative w-full px-6 lg:px-12 xl:px-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white/70 border border-white/30 rounded-full mb-4">
              Get Involved
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
              Volunteer &amp; Partnership
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
              Join our growing family of changemakers. Whether you volunteer
              your time or partner with us, you help create brighter futures for
              children.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Volunteer Section */}
      <EngagementSection
        sectionClassName="py-16 sm:py-20 bg-white overflow-hidden"
        badge={{
          text: "Volunteer With Us",
          className:
            "inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary bg-primary/10 rounded-full mb-4",
        }}
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
        cardClassName="flex items-center gap-2.5 bg-primary/5 border border-primary/10 rounded-lg px-4 py-3 text-sm text-dark-text font-medium"
        iconClassName="w-5 h-5 text-primary shrink-0"
        button={{
          href: "https://docs.google.com/forms/u/0/",
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

      {/* Partnership Section */}
      <EngagementSection
        id="partner"
        sectionClassName="py-20 bg-light-bg scroll-mt-20 overflow-hidden"
        badge={{
          text: "Partnerships",
          className:
            "inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest text-teal bg-teal/10 rounded-full mb-4",
        }}
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
        cardClassName="flex items-center gap-2.5 bg-white rounded-lg px-4 py-3 text-sm text-dark-text font-medium"
        iconClassName="w-5 h-5 text-teal shrink-0"
        button={{
          href: "https://forms.google.com",
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
    </>
  );
}
