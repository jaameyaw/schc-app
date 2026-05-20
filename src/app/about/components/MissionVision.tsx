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
    <section className="py-20 bg-light-bg">
      <div className="max-w-[1400px] xl:max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-20">
        <div className="text-center mb-14">
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary bg-green-50 rounded-full mb-3">
            Our Purpose
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-dark-text">
            Mission &amp; Vision
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="group relative overflow-hidden bg-white rounded-2xl px-8 pt-10 pb-10 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_20px_-8px_rgba(31,168,74,0.12)] border-t-4 border-primary hover:-translate-y-1 hover:shadow-[0_2px_4px_rgba(0,0,0,0.04),0_12px_32px_-8px_rgba(31,168,74,0.2)] transition-all duration-500"
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
              <h3 className="text-xl font-bold text-dark-text mb-2.5 tracking-tight">
                Our Mission
              </h3>
              <span className="block h-[3px] w-10 bg-primary rounded-full mb-5" />
              <p className="text-gray-600 leading-relaxed max-w-prose">
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
            className="group relative overflow-hidden bg-white rounded-2xl px-8 pt-10 pb-10 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_20px_-8px_rgba(39,194,199,0.14)] border-t-4 border-teal hover:-translate-y-1 hover:shadow-[0_2px_4px_rgba(0,0,0,0.04),0_12px_32px_-8px_rgba(39,194,199,0.24)] transition-all duration-500"
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
              <h3 className="text-xl font-bold text-dark-text mb-2.5 tracking-tight">
                Our Vision
              </h3>
              <span className="block h-[3px] w-10 bg-teal rounded-full mb-5" />
              <p className="text-gray-600 leading-relaxed mb-5 max-w-prose">
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
                      className="group relative overflow-hidden rounded-xl border border-teal/10 bg-white/85 px-4 py-3 text-sm text-gray-700 shadow-[0_6px_16px_-12px_rgba(39,194,199,0.35)] transition-transform duration-300 hover:-translate-y-0.5 active:translate-y-[1px]"
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
          <h3 className="text-2xl font-bold text-dark-text text-center mb-2.5 tracking-tight">
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
                className="group relative overflow-hidden bg-white rounded-2xl px-6 pt-9 pb-20 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_16px_-8px_rgba(31,168,74,0.08)] text-center hover:-translate-y-1.5 hover:shadow-[0_2px_4px_rgba(0,0,0,0.04),0_16px_36px_-12px_rgba(31,168,74,0.22)] transition-all duration-500"
              >
                <div className="relative z-10">
                  <div className="relative w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-5 bg-gradient-to-br from-primary/15 to-primary/5 ring-1 ring-primary/10 transition-transform duration-500 group-hover:scale-105">
                    <obj.icon className="w-7 h-7 text-primary" strokeWidth={2} />
                  </div>
                  <h4 className="font-semibold text-dark-text mb-2 tracking-tight">
                    {obj.title}
                  </h4>
                  <span className="block h-[3px] w-8 bg-primary rounded-full mx-auto mb-4" />
                  <p className="text-sm text-gray-500 leading-relaxed px-1">
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
