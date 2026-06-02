"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Play } from "lucide-react";
import Button from "@/components/ui/Button";
import {
  aboutEyebrow,
  aboutH2,
  aboutQuote,
  aboutQuoteMark,
  aboutSectionLeadLeft,
  aboutSurfaceCard,
} from "../aboutTypography";

const VIDEO_URL = "https://youtu.be/CVoC3DHknhg?si=KuGSEN7w5-9AcuIw";

export default function AboutImpactVideo() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-12 -top-28 h-[420px] w-[420px] rounded-full bg-teal/[0.06] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-36 -left-14 h-[420px] w-[420px] rounded-full bg-primary/[0.05] blur-3xl"
      />

      <div className="relative mx-auto max-w-[1400px] px-6 pb-24 pt-16 sm:px-8 sm:pb-28 sm:pt-20 lg:px-12 lg:pb-32 lg:pt-24 xl:max-w-[1600px] xl:px-20">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              <div
                className="absolute -left-1 -top-3 z-20 flex items-center gap-2 rounded-xl border border-white/20 bg-primary px-3 py-2 shadow-[0_12px_32px_-8px_rgba(31,168,74,0.45)] backdrop-blur-sm"
                aria-hidden="true"
              >
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80">
                  Impact
                </span>
                <span className="font-section text-sm font-semibold leading-none text-white">
                  Story
                </span>
              </div>

              <div
                aria-hidden="true"
                className="absolute inset-0 hidden translate-x-3 translate-y-4 rounded-2xl bg-primary/12 sm:block"
              />

              <div className="relative aspect-[4/5]">
                <motion.a
                  href={VIDEO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Watch From an Idea to Impact on YouTube (opens in new tab)"
                  initial={{ opacity: 0, y: 18, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="group/thumb absolute inset-0 block cursor-pointer overflow-hidden rounded-2xl bg-dark-text/10 shadow-[0_24px_56px_-20px_rgba(31,45,47,0.35)] ring-1 ring-black/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                >
                  <Image
                    src="/images/thumbnail/thumbnail-story.jpg"
                    alt="From an Idea to Impact video thumbnail"
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover transition-transform duration-[900ms] ease-out group-hover/thumb:scale-[1.04]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />

                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-0 flex items-center justify-center"
                  >
                    <span className="relative">
                      <span className="absolute inset-0 rounded-full bg-white/25 motion-safe:animate-ping" />
                      <span className="relative flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-transform duration-300 group-hover/thumb:scale-110 sm:h-20 sm:w-20">
                        <Play className="ml-1 h-6 w-6 fill-primary text-primary sm:h-7 sm:w-7" />
                      </span>
                    </span>
                  </span>

                  <span className="absolute bottom-4 left-4 flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.14em] text-white">
                    <span className="h-2 w-2 rounded-full bg-red-500" />
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
            transition={{ duration: 0.5, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            <span className={aboutEyebrow}>How It All Started</span>
            <h2 className={`${aboutH2} mb-4`}>From an Idea to Impact</h2>
            <p className={aboutSectionLeadLeft}>
              Exactly 2 years ago today, we had the crazy idea to start this
              organization.
            </p>

            <div
              className={`relative mt-8 overflow-hidden p-6 sm:p-8 ${aboutSurfaceCard} border-l-4 border-l-primary`}
            >
              <span
                aria-hidden
                className={`absolute left-4 top-3 ${aboutQuoteMark}`}
              >
                &ldquo;
              </span>
              <p className={`relative z-10 pl-8 sm:pl-10 ${aboutQuote}`}>
                What if no Ghanaian child dies because their parent can&apos;t
                pay a hospital bill?
              </p>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button href={VIDEO_URL} external className="gap-2">
                Watch the video
              </Button>
              <Button
                href="/donate"
                variant="outline"
                className="border-primary text-primary hover:bg-primary/5"
              >
                Donate
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
          className="h-16 w-full text-light-bg sm:h-20 lg:h-24"
          fill="currentColor"
        >
          <path d="M0,64 C240,0 480,120 720,64 C960,8 1200,120 1440,64 L1440,120 L0,120 Z" />
        </svg>
      </div>
    </section>
  );
}
