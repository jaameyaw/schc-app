"use client";

import { motion } from "framer-motion";
import { sectionEyebrow } from "@/lib/sectionEyebrow";
import { sectionH2, sectionLead } from "@/lib/typography";

interface SectionHeaderProps {
  tag?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  headingId?: string;
}

export default function SectionHeader({
  tag,
  title,
  subtitle,
  centered = true,
  light = false,
  headingId,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={centered ? "text-center" : ""}
    >
      {tag && (
        <span className={sectionEyebrow}>{tag}</span>
      )}
      <h2
        id={headingId}
        className={`${sectionH2} mb-4 ${
          light ? "text-white" : "text-dark-text"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`${sectionLead} max-w-[60ch] ${
            centered ? "mx-auto" : ""
          } ${light ? "text-white/80" : "text-gray-600"}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
