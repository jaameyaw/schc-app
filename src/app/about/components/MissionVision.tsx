"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  Megaphone,
  GraduationCap,
  Scale,
  Target,
  Eye,
  HeartHandshake,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  aboutCardBody,
  aboutEyebrow,
  aboutH2,
  aboutH3,
  aboutH3Section,
  aboutSectionLead,
  aboutSectionPad,
  aboutSurfaceElevated,
} from "../aboutTypography";

const visionItems = [
  "Quality healthcare for every child",
  "Proper nutrition and safe environments",
  "Inclusive support systems to thrive",
];

const visionListVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const visionItemVariants: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 120, damping: 18 },
  },
};

export default function MissionVision() {
  return (
    <section className={`relative overflow-hidden bg-light-bg ${aboutSectionPad}`}>
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-teal/[0.05] blur-3xl"
      />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12 xl:max-w-[1600px] xl:px-20">
        <div className="mb-14 text-center sm:mb-16">
          <span className={`${aboutEyebrow} mb-3`}>Our Purpose</span>
          <h2 className={aboutH2}>Mission &amp; Vision</h2>
          <p className={`${aboutSectionLead} mt-2`}>
            Clear direction for every program, partnership, and community we serve.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`group relative overflow-hidden border-t-4 border-primary px-8 pb-10 pt-10 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_48px_-20px_rgba(31,168,74,0.22)] ${aboutSurfaceElevated}`}
          >
            {/* Subtle dot pattern, top-right */}
            <svg
              aria-hidden="true"
              viewBox="0 0 80 80"
              className="absolute top-5 right-5 w-20 h-20 text-primary opacity-[0.08] pointer-events-none"
              fill="currentColor"
            >
              {Array.from({ length: 5 }).flatMap((_, row) =>
                Array.from({ length: 5 }).map((_, col) => (
                  <circle
                    key={`${row}-${col}`}
                    cx={8 + col * 14}
                    cy={8 + row * 14}
                    r={1.6}
                  />
                ))
              )}
            </svg>

            <div className="relative z-10">
              <div className="relative w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br from-primary/15 to-primary/5 ring-1 ring-primary/10">
                <Target className="w-6 h-6 text-primary" strokeWidth={2.2} />
                <span className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-primary/30" />
              </div>
              <h3 className={`${aboutH3} mb-2.5`}>Our Mission</h3>
              <span className="block h-[3px] w-10 bg-primary rounded-full mb-5" />
              <p className={`${aboutCardBody} max-w-[65ch]`}>
                Empowering families and caregivers to prioritize children&apos;s
                health and well-being, fostering a supportive community that
                promotes education, advocacy, and access to quality healthcare
                for all children, regardless of background or ability.
              </p>
            </div>

            {/* Decorative sapling */}
            <svg
              aria-hidden="true"
              viewBox="0 0 240 240"
              className="absolute -bottom-4 -right-4 w-64 h-64 text-primary opacity-[0.09] pointer-events-none transition-transform duration-700 group-hover:scale-105"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Main stem */}
              <path d="M120 230 C 120 200, 120 160, 120 110" />
              {/* Soil */}
              <path d="M90 230 Q 120 222, 150 230" />
              {/* Left leaf, lower */}
              <path
                d="M120 175 C 95 168, 75 175, 65 195 C 85 200, 108 195, 120 175 Z"
                fill="currentColor"
                fillOpacity="0.45"
              />
              {/* Right leaf, lower */}
              <path
                d="M120 155 C 145 148, 168 155, 178 175 C 158 182, 134 178, 120 155 Z"
                fill="currentColor"
                fillOpacity="0.45"
              />
              {/* Left leaf, upper */}
              <path
                d="M120 135 C 98 128, 80 132, 72 150 C 92 156, 112 152, 120 135 Z"
                fill="currentColor"
                fillOpacity="0.55"
              />
              {/* Top sprout */}
              <path
                d="M120 110 C 110 95, 110 80, 120 65 C 130 80, 130 95, 120 110 Z"
                fill="currentColor"
                fillOpacity="0.65"
              />
              {/* Side veins */}
              <path d="M120 175 L 90 188" />
              <path d="M120 155 L 155 168" />
              <path d="M120 135 L 92 148" />
            </svg>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`group relative overflow-hidden border-t-4 border-teal px-8 pb-10 pt-10 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_24px_48px_-20px_rgba(39,194,199,0.24)] ${aboutSurfaceElevated}`}
          >
            {/* Concentric ring decoration, top-right */}
            <svg
              aria-hidden="true"
              viewBox="0 0 100 100"
              className="absolute top-5 right-5 w-24 h-24 text-teal opacity-[0.1] pointer-events-none"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <circle cx="50" cy="50" r="16" />
              <circle cx="50" cy="50" r="28" strokeDasharray="2 4" />
              <circle cx="50" cy="50" r="40" strokeDasharray="2 8" />
            </svg>

            <div className="relative z-10">
              <div className="relative w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br from-teal/15 to-teal/5 ring-1 ring-teal/10">
                <Eye className="w-6 h-6 text-teal" strokeWidth={2.2} />
                <span className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-teal/30" />
              </div>
              <h3 className={`${aboutH3} mb-2.5`}>Our Vision</h3>
              <span className="block h-[3px] w-10 bg-teal rounded-full mb-5" />
              <p className={`${aboutCardBody} mb-5 max-w-[65ch]`}>
                Transforming the lives of children and their families through
                innovative education, compassionate support, and inclusive
                advocacy — ensuring a world where every child thrives.
              </p>
              <div className="rounded-2xl border border-teal/10 bg-gradient-to-br from-white via-white to-teal/5 p-4 shadow-[0_12px_30px_-24px_rgba(39,194,199,0.45)]">
                <motion.ul
                  variants={visionListVariants}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true }}
                  className="space-y-3"
                >
                  {visionItems.map((item) => (
                    <motion.li
                      key={item}
                      variants={visionItemVariants}
                      className="group relative overflow-hidden rounded-xl border border-teal/10 bg-white/85 px-4 py-3 text-sm leading-snug text-pretty text-gray-600 shadow-[0_6px_16px_-12px_rgba(39,194,199,0.35)] transition-transform duration-300 hover:-translate-y-0.5 active:translate-y-[1px] sm:text-[0.9375rem]"
                    >
                      <span className="absolute left-0 top-0 h-full w-1 bg-teal/30" />
                      <span className="relative block leading-snug">
                        {item}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Objectives */}
        <div>
          <h3 className={`${aboutH3Section} text-center mb-2.5`}>
            Core Objectives
          </h3>
          <span className="block h-[3px] w-12 bg-primary rounded-full mx-auto mb-10" />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {(
              [
                {
                  title: "Raise Awareness",
                  desc: "Raise awareness about common child health issues and prevention strategies.",
                  icon: Megaphone,
                },
                {
                  title: "Educate Communities",
                  desc: "Educate parents, caregivers, and children on healthy habits and best practices.",
                  icon: GraduationCap,
                },
                {
                  title: "Advocate for Change",
                  desc: "Advocate for policies that support child health and wellbeing at all levels.",
                  icon: Scale,
                },
              ] as { title: string; desc: string; icon: LucideIcon }[]
            ).map((obj, i) => (
              <motion.div
                key={obj.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group relative overflow-hidden px-6 pb-20 pt-9 text-center transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_24px_48px_-16px_rgba(31,168,74,0.2)] ${aboutSurfaceElevated}`}
              >
                <div className="relative z-10">
                  <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 bg-gradient-to-br from-primary/15 to-primary/5 ring-1 ring-primary/10 transition-transform duration-500 group-hover:scale-105">
                    <obj.icon className="w-7 h-7 text-primary" strokeWidth={2} />
                  </div>
                  <h4 className="text-base font-semibold leading-tight tracking-tight text-dark-text mb-2 sm:text-[1.05rem]">
                    {obj.title}
                  </h4>
                  <span className="block h-[3px] w-8 bg-primary rounded-full mx-auto mb-4" />
                  <p className={`${aboutCardBody} px-1`}>
                    {obj.desc}
                  </p>
                </div>

                {/* Layered wave decoration */}
                <svg
                  aria-hidden="true"
                  viewBox="0 0 400 100"
                  preserveAspectRatio="none"
                  className="absolute bottom-0 left-0 right-0 w-full h-16 pointer-events-none"
                  fill="none"
                >
                  <path
                    d="M0 70 C 80 30, 160 95, 240 55 C 320 20, 360 70, 400 50 L 400 100 L 0 100 Z"
                    className="text-primary"
                    fill="currentColor"
                    fillOpacity="0.08"
                  />
                  <path
                    d="M0 82 C 90 50, 170 100, 260 72 C 330 50, 370 82, 400 70 L 400 100 L 0 100 Z"
                    className="text-primary"
                    fill="currentColor"
                    fillOpacity="0.12"
                  />
                </svg>

                {/* Action chip with glow */}
                <span
                  className="absolute bottom-5 left-1/2 -translate-x-1/2 z-10 w-11 h-11 rounded-full flex items-center justify-center bg-gradient-to-br from-primary to-primary-dark ring-4 ring-white shadow-[0_8px_20px_-6px_rgba(31,168,74,0.55)] transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1"
                  style={{ transformOrigin: "center" }}
                >
                  <span className="absolute inset-0 rounded-full bg-white/10" />
                  <HeartHandshake
                    className="relative w-[18px] h-[18px] text-white"
                    strokeWidth={2.2}
                  />
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
