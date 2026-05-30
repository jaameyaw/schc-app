"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";
import ProgramFeaturesPanel from "./ProgramFeaturesPanel";
import { accentText as accentTextMap, accentBg as accentBgMap } from "@/lib/accent";

export interface ProgramCardProps {
  id: string;
  title: string;
  slogan: string;
  description: string;
  image: string;
  color: "primary" | "teal";
  features: string[];
  category: string;
  index?: number;
}

export default function ProgramCard({
  id,
  title,
  slogan,
  description,
  image,
  color,
  features,
  category,
  index = 0,
}: ProgramCardProps) {
  const isTeal = color === "teal";
  const ringGradient = isTeal
    ? "from-teal/60 via-aqua/40 to-primary/30"
    : "from-primary/60 via-primary/30 to-teal/30";
  const accentText = accentTextMap[color];
  const accentBg = accentBgMap[color];
  const accentBorder = isTeal ? "border-teal/20" : "border-primary/20";
  const iconRingGradient = isTeal
    ? "from-teal via-aqua/80 to-teal/50"
    : "from-primary via-primary/70 to-teal/40";
  const iconGlow = isTeal
    ? "group-hover/feature:shadow-[0_0_28px_-4px_rgba(39,194,199,0.45)]"
    : "group-hover/feature:shadow-[0_0_28px_-4px_rgba(52,199,89,0.4)]";
  const accentCardHover = isTeal
    ? "hover:border-teal/20"
    : "hover:border-primary/20";
  const featureShadow = isTeal
    ? "hover:shadow-[0_14px_40px_-16px_rgba(39,194,199,0.28)]"
    : "hover:shadow-[0_14px_40px_-16px_rgba(52,199,89,0.28)]";
  const ctaBg = isTeal
    ? "bg-teal hover:bg-teal/90 shadow-[0_12px_32px_-12px_rgba(39,194,199,0.45)]"
    : "bg-primary hover:bg-primary-dark shadow-[0_12px_32px_-12px_rgba(52,199,89,0.4)]";
  const SloganIcon = isTeal ? Heart : null;
  const reverseOnDesktop = index % 2 === 1;

  return (
    <motion.article
      id={id}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`scroll-mt-24 group relative flex flex-col ${
        reverseOnDesktop ? "xl:flex-row-reverse" : "xl:flex-row"
      } items-stretch gap-8 md:gap-10 xl:gap-16 2xl:gap-24`}
    >
      {/* Image panel */}
      <div
        className={`relative w-full flex-shrink-0 xl:w-[54%] ${
          reverseOnDesktop ? "xl:pl-2" : "xl:pr-2"
        }`}
      >
        <div
          className={`relative rounded-[1.65rem] bg-gradient-to-br ${ringGradient} p-[2px] shadow-[0_24px_64px_-24px_rgba(31,45,47,0.28)] transition-shadow duration-500 group-hover:shadow-[0_32px_80px_-24px_rgba(31,45,47,0.34)] xl:rounded-[1.85rem]`}
        >
          <div className="relative overflow-hidden rounded-[1.45rem] aspect-[4/3] bg-light-bg md:aspect-[5/4] xl:aspect-[4/3] xl:rounded-[1.7rem]">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(min-width: 1280px) 54vw, 100vw"
              className="object-cover object-[center_30%] transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.05]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-text/45 via-dark-text/5 to-transparent" />
          </div>

          <div
            className={`absolute -bottom-4 z-10 ${
              reverseOnDesktop ? "right-5 md:right-7" : "left-5 md:left-7"
            }`}
          >
            <span
              className={`inline-flex items-center gap-1.5 rounded-xl border bg-white/95 px-3.5 py-2 text-xs font-semibold backdrop-blur-sm ${accentText} ${accentBorder} shadow-[0_8px_24px_-8px_rgba(31,45,47,0.2)]`}
            >
              {category}
            </span>
          </div>
        </div>

        <span
          className={`pointer-events-none absolute -bottom-6 hidden font-section text-[5.5rem] font-bold leading-none tracking-tighter opacity-[0.04] xl:block ${
            reverseOnDesktop ? "left-4" : "right-4"
          } ${accentText}`}
          aria-hidden
        >
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      {/* Content panel */}
      <div className="flex w-full flex-col justify-center pt-2 xl:w-[46%] xl:pt-0">
        <p
          className={`mb-2 font-section text-[0.68rem] font-semibold tracking-[0.14em] ${accentText}`}
        >
          Program {String(index + 1).padStart(2, "0")}
        </p>

        <h2 className="font-section text-[1.5rem] font-semibold leading-[1.08] tracking-tight text-balance text-dark-text sm:text-[1.65rem] lg:text-[1.75rem] xl:text-[1.85rem]">
          {title}
        </h2>

        <blockquote
          className={`relative mt-4 mb-6 border-l-[3px] pl-4 sm:pl-5 ${
            isTeal ? "border-teal/45" : "border-primary/45"
          }`}
        >
          <p
            className={`inline-flex items-start gap-2 text-sm font-medium leading-snug sm:text-[0.9375rem] ${accentText} text-pretty`}
          >
            {SloganIcon ? (
              <SloganIcon className="mt-1 h-4 w-4 shrink-0" strokeWidth={2} />
            ) : null}
            <span>&ldquo;{slogan}&rdquo;</span>
          </p>
        </blockquote>

        <p className="mb-2 max-w-[65ch] text-sm leading-[1.8] text-gray-600 text-pretty sm:text-[0.9375rem]">
          {description}
        </p>

        <ProgramFeaturesPanel
          programId={id}
          features={features}
          isTeal={isTeal}
          accentText={accentText}
          accentBg={accentBg}
          accentBorder={accentBorder}
          iconRingGradient={iconRingGradient}
          iconGlow={iconGlow}
          featureShadow={featureShadow}
          accentCardHover={accentCardHover}
        />

        <Link
          href="/volunteer"
          className={`inline-flex w-fit items-center gap-2 rounded-full px-5 py-2.5 text-[0.9rem] font-semibold text-white transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] hover:gap-3 hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${ctaBg} ${
            isTeal
              ? "focus-visible:ring-teal"
              : "focus-visible:ring-primary"
          }`}
        >
          Get involved
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </Link>
      </div>
    </motion.article>
  );
}
