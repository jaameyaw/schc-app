"use client";

import { motion } from "framer-motion";
import { sectionEyebrow } from "@/lib/sectionEyebrow";

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
        className={`text-3xl sm:text-4xl font-semibold tracking-tight leading-[1.1] mb-4 ${
          light ? "text-white" : "text-dark-text"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-[0.98rem] sm:text-lg leading-relaxed max-w-[60ch] ${
            centered ? "mx-auto" : ""
          } ${light ? "text-white/80" : "text-gray-600"}`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
