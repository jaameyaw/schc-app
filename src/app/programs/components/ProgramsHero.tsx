"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { sectionEyebrowHero } from "@/lib/sectionEyebrow";
import { pageH1, pageHeroLead } from "@/lib/typography";

export default function ProgramsHero() {
  return (
    <section className="relative bg-gradient-to-br from-teal to-primary-dark py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/images/IMG_8547.jpg"
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
          <span className={sectionEyebrowHero}>Programs &amp; Initiatives</span>
          <h1 className={`${pageH1} text-white mb-5`}>
            Initiatives That Change Lives
          </h1>
          <p className={`${pageHeroLead} text-white/80 max-w-2xl mx-auto`}>
            From school uniforms to street feeding programs — every initiative
            is designed to protect, empower, and uplift children and their
            families.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
