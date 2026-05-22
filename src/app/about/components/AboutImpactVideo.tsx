"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Play } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";

const VIDEO_URL = "https://youtu.be/CVoC3DHknhg?si=KuGSEN7w5-9AcuIw";

export default function AboutImpactVideo() {
  return (
    <section className="relative mt-6 sm:mt-8 lg:mt-10 pt-16 pb-24 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-32 bg-white overflow-hidden">
      {/* Soft atmospheric tints */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 -right-12 w-[420px] h-[420px] rounded-full bg-teal/[0.06] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-36 -left-14 w-[420px] h-[420px] rounded-full bg-primary/[0.05] blur-3xl"
      />

      <div className="relative max-w-[1400px] xl:max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-12 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="relative w-full max-w-md lg:max-w-none mx-auto">
              <div
                className="absolute -top-3 -left-1 z-20 bg-primary text-white rounded-xl px-3 py-2 shadow-lg flex items-center gap-2 -rotate-[4deg] origin-bottom-left"
                aria-hidden="true"
              >
                <span className="text-[10px] font-semibold tracking-[0.18em] uppercase opacity-80">
                  Impact
                </span>
                <span className="text-sm font-bold leading-none">
                  Story
                </span>
              </div>

              <div
                aria-hidden="true"
                className="hidden sm:block absolute inset-0 translate-x-3 translate-y-4 rounded-2xl bg-primary/15"
              />

              <div className="relative aspect-[4/5]">
                <motion.a
                  href={VIDEO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Watch From an Idea to Impact on YouTube (opens in new tab)"
                  initial={{ opacity: 0, y: 18, scale: 0.96 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="group/thumb absolute inset-0 block rounded-2xl overflow-hidden shadow-2xl bg-dark-text/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  <Image
                    src="/images/thumbnail/thumbnail-story.jpg"
                    alt="From an Idea to Impact video thumbnail"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-[900ms] ease-out group-hover/thumb:scale-[1.04]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/15 to-transparent" />

                  <span
                    aria-hidden="true"
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                  >
                    <span className="relative">
                      <span className="absolute inset-0 rounded-full bg-white/30 animate-ping" />
                      <span className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-all duration-300 group-hover/thumb:scale-110">
                        <Play className="w-6 h-6 sm:w-7 sm:h-7 text-primary fill-primary ml-1" />
                      </span>
                    </span>
                  </span>

                  <span className="absolute bottom-4 left-4 flex items-center gap-1.5 text-[11px] font-semibold tracking-wider uppercase text-white">
                    <span className="w-2 h-2 rounded-full bg-red-500" />
                    YouTube
                  </span>
                </motion.a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="lg:col-span-7"
          >
            <SectionHeader
              tag="How It All Started"
              title="From an Idea to Impact"
              subtitle="Exactly 2 years ago today, we had the crazy idea to start this organization."
              centered={false}
            />

            <div className="mt-6 rounded-2xl border border-primary/10 bg-gradient-to-br from-white via-white to-primary/5 p-5 sm:p-6 shadow-[0_16px_40px_-28px_rgba(31,168,74,0.35)]">
              <p className="mt-3 text-lg sm:text-xl font-semibold text-dark-text leading-relaxed">
                <span className="text-primary/60">&ldquo;</span>what if no Ghanaian child dies because their parent can't pay a hospital bill?<span className="text-primary/60">&rdquo;</span>
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button href={VIDEO_URL} external className="gap-2">
                Watch the video
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 w-full"
      >
        <svg
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          className="w-full h-16 sm:h-20 lg:h-24 text-light-bg"
          fill="currentColor"
        >
          <path d="M0,64 C240,0 480,120 720,64 C960,8 1200,120 1440,64 L1440,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
}
