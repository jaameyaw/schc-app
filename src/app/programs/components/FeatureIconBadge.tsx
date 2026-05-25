"use client";

import { motion } from "framer-motion";
import type { Icon as PhosphorIcon } from "@phosphor-icons/react";

interface FeatureIconBadgeProps {
  icon: PhosphorIcon;
  index: number;
  accentText: string;
  accentBg: string;
  iconRingGradient: string;
  iconGlow: string;
}

export default function FeatureIconBadge({
  icon: Icon,
  index,
  accentText,
  accentBg,
  iconRingGradient,
  iconGlow,
}: FeatureIconBadgeProps) {
  const step = String(index + 1).padStart(2, "0");

  return (
    <div className="relative shrink-0" aria-hidden>
      <div
        className={`pointer-events-none absolute -inset-1.5 rounded-[20px] bg-gradient-to-br ${iconRingGradient} opacity-0 blur-md transition-opacity duration-500 group-hover/feature:opacity-75`}
      />
      <motion.div
        className={`relative rounded-2xl bg-gradient-to-br ${iconRingGradient} p-[2px] shadow-sm transition-shadow duration-300 ${iconGlow}`}
        whileHover={{ scale: 1.07, rotate: -4 }}
        transition={{ type: "spring", stiffness: 380, damping: 20 }}
      >
        <div className="relative flex h-12 w-12 items-center justify-center rounded-[14px] bg-white shadow-[inset_0_1px_0_rgba(255,255,255,0.95)] sm:h-11 sm:w-11">
          <span
            className={`absolute -right-1 -top-1 flex h-[19px] min-w-[19px] items-center justify-center rounded-md px-1 text-[9px] font-bold tabular-nums leading-none text-white ${accentBg} shadow-[0_4px_12px_-4px_rgba(31,45,47,0.35)]`}
          >
            {step}
          </span>
          <Icon
            size={26}
            className={`${accentText} transition-transform duration-300 group-hover/feature:scale-110 sm:hidden`}
            weight="duotone"
          />
          <Icon
            size={24}
            className={`${accentText} hidden transition-transform duration-300 group-hover/feature:scale-110 sm:block`}
            weight="duotone"
          />
          <Icon
            size={24}
            className={`absolute inset-0 m-auto ${accentText} opacity-0 transition-opacity duration-300 group-hover/feature:opacity-100`}
            weight="fill"
          />
        </div>
      </motion.div>
    </div>
  );
}
