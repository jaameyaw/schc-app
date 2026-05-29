"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Play, ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { pullQuote } from "@/lib/typography";
import { blurPlaceholders } from "@/data/blur-placeholders";

const AUTOPLAY_MS = 5000;

const testimonials = [
  {
    id: 1,
    name: "Mother of an Ill Child Patient",
    role: "Beneficiary Parent",
    quote:
      "God richly bless you for this cash donation from your Monthly Miracle Fund initiative. It will really go a long way to help us in terms of hospital bills and many more.",
    videoUrl: "https://youtu.be/MbfpgI_Z3ck?si=fskV_oJe8_fj9xUw",
    platform: "YouTube" as const,
    thumbnail: "/images/thumbnail/thumbnail-mother.jpg",
  },
  {
    id: 2,
    name: "Headmaster, Swedru D/A JHS",
    role: "School Partner",
    quote:
      "We have received a number of NGOs, but what you have done today exceeds all. We are really surprised by the kind of donations you delivered. This school outreach has been educative as well.",
    videoUrl: "https://vt.tiktok.com/ZS97Ss9U1/",
    platform: "TikTok" as const,
    thumbnail: "/images/thumbnail/thumbnail-headmaster.jpg",
  },
  {
    id: 3,
    name: "Victoria Adarkwaa",
    role: "Program Beneficiary",
    quote:
      "Thank you for the education, food, dewormers, and the mosquito nets you shared with us during this outreach.",
    videoUrl: "https://vt.tiktok.com/ZS97SBsk6/",
    platform: "TikTok" as const,
    thumbnail: "/images/thumbnail/thumbnail-victoria.jpg",
  },
  {
    id: 4,
    name: "Afriye Gladys",
    role: "Student Beneficiary",
    quote:
      "I learned from this outreach that we should deworm every three months because it makes our immune system strong. God richly bless you.",
    videoUrl: "https://vt.tiktok.com/ZS97BwtvB/",
    platform: "TikTok" as const,
    thumbnail: "/images/thumbnail/thumbnail-afriyie.jpg",
  },
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, AUTOPLAY_MS);
  };

  useEffect(() => {
    startTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const goTo = (next: number) => {
    const len = testimonials.length;
    setIndex(((next % len) + len) % len);
    startTimer();
  };

  const prev = () => goTo(index - 1);
  const next = () => goTo(index + 1);

  const active = testimonials[index];
  const quoteWords = active.quote.split(" ");
  const quoteContainer = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.035, delayChildren: 0.06 },
    },
  };
  const quoteWord = {
    hidden: { opacity: 0, y: 8, filter: "blur(6px)" },
    show: { opacity: 1, y: 0, filter: "blur(0px)" },
  };

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 xl:py-28 bg-light-bg overflow-hidden">
      {/* Atmospheric tints */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 -right-20 w-[520px] h-[520px] rounded-full bg-teal/[0.06] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-20 w-[420px] h-[420px] rounded-full bg-primary/[0.05] blur-3xl"
      />

      <div className="relative max-w-[1400px] xl:max-w-[1600px] mx-auto px-6 sm:px-8 lg:px-8 xl:px-12 2xl:px-20">
        <div className="mb-12 sm:mb-14 lg:mb-20">
          <SectionHeader
            tag="Testimonials"
            title="Voices from Our Community"
            subtitle="Real stories from the families, students, and partners we serve across Ghana."
          />
        </div>

        <div
          className="relative"
          role="region"
          aria-roledescription="carousel"
          aria-label="Community testimonials"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 xl:gap-12 2xl:gap-16 items-center">
            {/* THUMBNAIL COLUMN */}
            <div className="lg:col-span-4 min-w-0">
              <div className="relative w-full max-w-md lg:max-w-none mx-auto lg:pl-0 xl:pl-4 lg:pt-4 xl:pt-6">
                {/* Rotated story-tag badge */}
                <div
                  className="absolute -top-3 -left-1 lg:-top-3 lg:-left-3 z-20 bg-primary text-white rounded-xl px-3 py-2 lg:px-4 lg:py-2.5 shadow-lg flex items-center gap-2 -rotate-[4deg] origin-bottom-left"
                  aria-hidden="true"
                >
                  <span className="text-[10px] font-semibold tracking-[0.18em] uppercase opacity-80">
                    Story
                  </span>
                  <span className="text-sm font-bold leading-none tabular-nums">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Decorative offset plate */}
                <div
                  aria-hidden="true"
                  className="hidden sm:block absolute inset-0 translate-x-3 translate-y-4 rounded-2xl bg-primary/15"
                />

                <div className="relative aspect-[4/5]">
                  <AnimatePresence mode="sync" initial={false}>
                    <motion.a
                      key={active.id}
                      href={active.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Watch ${active.name}'s story on ${active.platform} (opens in new tab)`}
                      initial={{ opacity: 0, y: 18, scale: 0.94 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -12, scale: 1.02 }}
                      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                      className="group/thumb absolute inset-0 block rounded-2xl overflow-hidden shadow-2xl bg-dark-text/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-light-bg"
                    >
                      <Image
                        src={active.thumbnail}
                        alt={`${active.name} — ${active.role}`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        quality={65}
                        className="object-cover transition-transform duration-[900ms] ease-out group-hover/thumb:scale-[1.04]"
                        priority={index === 0}
                        {...(blurPlaceholders[active.thumbnail]
                          ? { placeholder: "blur" as const, blurDataURL: blurPlaceholders[active.thumbnail] }
                          : {})}
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />

                      {/* Play overlay */}
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

                      {/* Platform chip */}
                      <span className="absolute bottom-4 left-4 flex items-center gap-1.5 text-[11px] font-semibold tracking-wider uppercase text-white">
                        <span
                          className={`w-2 h-2 rounded-full ${
                            active.platform === "YouTube"
                              ? "bg-red-500"
                              : "bg-white"
                          }`}
                        />
                        {active.platform}
                      </span>
                    </motion.a>
                  </AnimatePresence>
                </div>
              </div>
            </div>

            {/* CONTENT COLUMN */}
            <div className="lg:col-span-8 min-w-0 relative">
              {/* Ghost quote glyph */}
              <span
                aria-hidden="true"
                className="absolute -top-10 -left-2 sm:-top-12 sm:-left-4 lg:-top-16 lg:-left-8 text-primary/[0.08] font-serif leading-none select-none pointer-events-none"
                style={{ fontSize: "clamp(140px, 26vw, 320px)" }}
              >
                &ldquo;
              </span>

                {/* Slide counter — top-right on lg, below quote on mobile */}
              <div className="lg:absolute lg:top-0 lg:right-0 hidden lg:flex items-center gap-2 text-xs tracking-[0.2em] font-semibold text-dark-text/50 tabular-nums">
                <span className="text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="w-8 h-px bg-dark-text/20" />
                <span>
                  {String(testimonials.length).padStart(2, "0")}
                </span>
              </div>

                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={`copy-${active.id}`}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -14 }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {/* Quote */}
                    <blockquote className="relative pt-8 lg:pt-6">
                      <motion.p
                        className={`${pullQuote} text-dark-text break-words`}
                        variants={quoteContainer}
                        initial="hidden"
                        animate="show"
                      >
                        <span className="inline-block mr-2">&ldquo;</span>
                        {quoteWords.map((word, wordIndex) => (
                          <motion.span
                            key={`${active.id}-word-${wordIndex}`}
                            variants={quoteWord}
                            className={`inline-block break-words ${
                              wordIndex < quoteWords.length - 1 ? "mr-1" : ""
                            }`}
                          >
                            {word}
                          </motion.span>
                        ))}
                        <span className="inline-block ml-2">&rdquo;</span>
                      </motion.p>
                    </blockquote>

                    {/* Mobile slide counter — under quote */}
                    <div className="lg:hidden mt-6 flex items-center gap-2 text-xs tracking-[0.2em] font-semibold text-dark-text/50 tabular-nums">
                      <span className="text-primary">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="w-6 h-px bg-dark-text/20" />
                      <span>
                        {String(testimonials.length).padStart(2, "0")}
                      </span>
                    </div>

                    {/* Attribution */}
                    <div className="mt-6 lg:mt-10 flex items-start gap-4">
                      <span
                        className="mt-2.5 w-6 sm:w-10 h-px bg-primary shrink-0"
                        aria-hidden="true"
                      />
                      <div>
                        <p className="font-bold text-dark-text text-sm sm:text-base leading-tight">
                          {active.name}
                        </p>
                        <p className="text-gray-500 text-sm mt-1 tracking-wide">
                          {active.role}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* CTA + controls row */}
              <div className="mt-10 lg:mt-12 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-5 sm:gap-6 lg:gap-8">
                <a
                  href={active.videoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Watch ${active.name}'s story on ${active.platform} (opens in new tab)`}
                  className="group/cta self-start sm:self-auto inline-flex items-center gap-2 px-6 py-3 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary-dark transition-all duration-200 hover:shadow-lg hover:shadow-primary/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-light-bg"
                >
                  Watch Story
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/cta:translate-x-0.5" />
                </a>

                <div className="hidden lg:block flex-1" />

                <div className="flex items-center gap-3 sm:gap-4">
                  <button
                    type="button"
                    onClick={prev}
                    aria-label="Previous testimonial"
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-dark-text/15 text-dark-text flex items-center justify-center hover:border-primary hover:text-primary transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-light-bg"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <div
                    className="flex items-center gap-1.5 sm:gap-2"
                    role="tablist"
                    aria-label="Select testimonial"
                  >
                    {testimonials.map((t, i) => (
                      <button
                        key={t.id}
                        type="button"
                        role="tab"
                        aria-selected={i === index}
                        aria-label={`Go to testimonial ${i + 1}: ${t.name}`}
                        onClick={() => goTo(i)}
                        className="p-2 -m-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-light-bg rounded-full"
                      >
                        <span
                          className={`block h-1.5 rounded-full transition-all duration-300 ${
                            i === index
                              ? "w-8 sm:w-10 bg-primary"
                              : "w-1.5 bg-dark-text/20 hover:bg-dark-text/40"
                          }`}
                        />
                      </button>
                    ))}
                  </div>

                  <div className="relative w-10 h-10 sm:w-11 sm:h-11">
                    <svg
                      className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none"
                      viewBox="0 0 44 44"
                      aria-hidden="true"
                    >
                      <motion.circle
                        key={`ring-${index}`}
                        cx="22"
                        cy="22"
                        r="21"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        className="text-primary"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{
                          duration: AUTOPLAY_MS / 1000,
                          ease: "linear",
                        }}
                      />
                    </svg>
                    <button
                      type="button"
                      onClick={next}
                      aria-label="Next testimonial"
                      className="relative w-full h-full rounded-full bg-primary text-white flex items-center justify-center cursor-pointer hover:bg-primary-dark transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-light-bg"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
