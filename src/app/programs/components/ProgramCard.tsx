"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Heart } from "lucide-react";

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
  const accentText = isTeal ? "text-teal" : "text-primary";
  const accentBg = isTeal ? "bg-teal" : "bg-primary";
  const accentTint = isTeal ? "bg-teal/10" : "bg-primary/10";
  const accentTintHover = isTeal ? "hover:bg-teal/20" : "hover:bg-primary/20";
  const accentBorder = isTeal ? "border-teal/20" : "border-primary/20";
  const accentBorderHover = isTeal
    ? "hover:border-teal/40"
    : "hover:border-primary/40";
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
      } items-stretch gap-6 md:gap-10 xl:gap-14`}
    >
      {/* Image panel */}
      <div className="relative w-full xl:w-[55%] flex-shrink-0">
        <div
          className={`relative rounded-3xl bg-gradient-to-br ${ringGradient} p-[2px] shadow-[0_20px_60px_-20px_rgba(31,45,47,0.25)] transition-all duration-500 group-hover:shadow-[0_30px_80px_-20px_rgba(31,45,47,0.35)]`}
        >
          <div className="relative overflow-hidden rounded-[22px] aspect-[4/3] md:aspect-[5/4] xl:aspect-[4/3] bg-light-bg">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(min-width: 1280px) 55vw, 100vw"
              className="object-cover object-[center_30%] transition-transform duration-700 ease-out group-hover:scale-[1.06]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-dark-text/40 via-transparent to-transparent" />
          </div>

          {/* Floating category pill */}
          <div
            className={`absolute -bottom-4 ${
              reverseOnDesktop ? "right-6 md:right-8" : "left-6 md:left-8"
            } z-10`}
          >
            <span
              className={`inline-flex items-center gap-1.5 bg-white px-4 py-2 rounded-full text-xs font-semibold ${accentText} shadow-lg shadow-black/5 border ${accentBorder}`}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${accentBg}`} />
              {category}
            </span>
          </div>
        </div>
      </div>

      {/* Content panel */}
      <div className="w-full xl:w-[45%] flex flex-col justify-center pt-6 xl:pt-0">
        <h2 className="text-[1.65rem] sm:text-3xl lg:text-[2.1rem] font-semibold text-dark-text leading-[1.12] tracking-tight mb-3">
          {title}
        </h2>

        <p
          className={`inline-flex items-start gap-2 text-[0.95rem] sm:text-base font-semibold ${accentText} mb-4 tracking-tight`}
        >
          {SloganIcon ? (
            <SloganIcon className="w-4 h-4 mt-1 shrink-0" />
          ) : null}
          <span>&ldquo;{slogan}&rdquo;</span>
        </p>

        <p className="text-gray-600 text-[0.95rem] sm:text-base leading-[1.7] mb-6">
          {description}
        </p>

        {/* Feature chips */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 sm:gap-2 mb-6">
          {features.map((f) => (
            <li
              key={f}
              className={`text-[0.8rem] sm:text-sm font-semibold text-dark-text/80 ${accentTint} ${accentTintHover} border ${accentBorder} ${accentBorderHover} rounded-xl px-3 py-2 leading-snug transition-all duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_12px_24px_-18px_rgba(15,23,42,0.45)]`}
            >
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <Link
          href="/volunteer"
          className={`inline-flex items-center gap-2 text-[0.95rem] font-semibold ${accentText} hover:gap-3 transition-all duration-300 w-fit`}
        >
          Get Involved
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.article>
  );
}
