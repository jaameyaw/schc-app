"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { sectionEyebrowHero } from "@/lib/sectionEyebrow";
import { pageH1, pageHeroLead } from "@/lib/typography";

export interface PageHeroProps {
  tag: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  imageAlt?: string;
  imagePriority?: boolean;
}

export default function PageHero({
  tag,
  title,
  subtitle,
  imageSrc,
  imageAlt = "SCHC background",
  imagePriority = false,
}: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-teal to-primary-dark py-24">
      <div className="absolute inset-0 opacity-10">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          sizes="100vw"
          className="object-cover"
          priority={imagePriority}
        />
      </div>
      <div className="relative w-full px-6 text-center lg:px-12 xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className={sectionEyebrowHero}>{tag}</span>
          <h1 className={`${pageH1} mb-5 text-white`}>{title}</h1>
          <p
            className={`${pageHeroLead} mx-auto max-w-2xl text-white/80`}
          >
            {subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
