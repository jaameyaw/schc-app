"use client";

import { motion } from "framer-motion";
import type { Icon as PhosphorIcon } from "@phosphor-icons/react";
import { getProgramFeatureIcon } from "./programFeatureIcons";
import FeatureIconBadge from "./FeatureIconBadge";

const listVariants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.09, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
  },
};

interface ProgramFeaturesPanelProps {
  programId: string;
  features: string[];
  isTeal: boolean;
  accentText: string;
  accentBg: string;
  accentBorder: string;
  iconRingGradient: string;
  iconGlow: string;
  featureShadow: string;
  accentCardHover: string;
}

export default function ProgramFeaturesPanel({
  programId,
  features,
  isTeal,
  accentText,
  accentBg,
  accentBorder,
  iconRingGradient,
  iconGlow,
  featureShadow,
  accentCardHover,
}: ProgramFeaturesPanelProps) {
  const accentRail = isTeal
    ? "border-teal/30 group-hover/feature:border-teal/55"
    : "border-primary/30 group-hover/feature:border-primary/55";

  return (
    <div
      className={`relative mb-8 overflow-hidden rounded-[1.35rem] border ${accentBorder} bg-white/75 p-4 shadow-[0_20px_50px_-28px_rgba(31,45,47,0.22)] backdrop-blur-sm sm:p-5 lg:mb-9 lg:rounded-[1.65rem] lg:p-6`}
    >
      <div
        className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${
          isTeal
            ? "from-teal/[0.07] via-transparent to-aqua/[0.05]"
            : "from-primary/[0.07] via-transparent to-teal/[0.04]"
        }`}
        aria-hidden
      />
      <div
        className={`pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full blur-3xl ${
          isTeal ? "bg-teal/12" : "bg-primary/12"
        }`}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]"
        aria-hidden
      />

      <div className="relative mb-4 sm:mb-5">
        <p
          className={`font-section text-[0.7rem] font-semibold tracking-[0.12em] sm:text-xs ${accentText}`}
        >
          What this program includes
        </p>
        <span
          className={`mt-2 block h-0.5 w-10 rounded-full ${accentBg}`}
          aria-hidden
        />
      </div>

      <motion.ul
        variants={listVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-48px" }}
        className="relative grid grid-cols-1 auto-rows-fr gap-3.5 sm:grid-cols-2 sm:gap-4"
      >
        {features.map((f, i) => {
          const FeatureIcon: PhosphorIcon = getProgramFeatureIcon(programId, i);
          const zigZag =
            i % 2 === 1 ? "sm:translate-y-1.5 lg:translate-y-2" : "";

          return (
            <motion.li
              key={f}
              variants={itemVariants}
              className={`group/feature flex h-full min-h-[7.5rem] flex-col items-center justify-center gap-3.5 rounded-2xl border border-dark-text/[0.05] border-l-[3px] ${accentRail} bg-white/90 px-4 py-4 text-center shadow-[0_10px_36px_-18px_rgba(31,45,47,0.14)] transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-1 active:translate-y-0 active:scale-[0.99] sm:min-h-[5.5rem] sm:flex-row sm:items-center sm:justify-start sm:gap-3.5 sm:px-3.5 sm:py-3.5 sm:text-left lg:min-h-[6rem] lg:px-4 lg:py-4 ${zigZag} ${featureShadow} ${accentCardHover} focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 ${
                isTeal
                  ? "focus-within:ring-teal/40"
                  : "focus-within:ring-primary/40"
              }`}
            >
              <FeatureIconBadge
                icon={FeatureIcon}
                index={i}
                accentText={accentText}
                accentBg={accentBg}
                iconRingGradient={iconRingGradient}
                iconGlow={iconGlow}
              />
              <span className="max-w-[26ch] text-[0.82rem] font-medium leading-[1.5] text-dark-text/88 text-pretty text-center sm:max-w-none sm:flex-1 sm:text-sm sm:text-left">
                {f}
              </span>
            </motion.li>
          );
        })}
      </motion.ul>
    </div>
  );
}
