"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Play } from "lucide-react";
import Button from "@/components/ui/Button";
import Particles from "@/components/ui/Particles";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] as const },
  },
};

const gridImageVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: 0.08 * i, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const heroImageColumns: {
  images: { src: string; alt: string; flex: string }[];
}[] = [
  {
    images: [
      {
        src: "/images/IMG_7521.jpg",
        alt: "School outreach with children and caregivers",
        flex: "flex-[1.42]",
      },
      {
        src: "/images/IMG_8557.jpg",
        alt: "Children at a community health event",
        flex: "flex-[0.92]",
      },
    ],
  },
  {
    images: [
      {
        src: "/images/IMG_8989.jpg",
        alt: "SCHC volunteers preparing meals for families",
        flex: "flex-[0.92]",
      },
      {
        src: "/images/IMG_8638.jpg",
        alt: "Hands-on care during a child health screening",
        flex: "flex-[1.42]",
      },
    ],
  },
];

const IMPACT_STORY_VIDEO_URL =
  "https://youtu.be/CVoC3DHknhg?si=KuGSEN7w5-9AcuIw";

const supporterAvatars = [
  { src: "/images/volunteer1.jpg", alt: "SCHC volunteer" },
  { src: "/images/volunteer2.jpg", alt: "SCHC volunteer" },
  { src: "/images/thumbnail/thumbnail-mother.jpg", alt: "Community mother supported by SCHC" },
  { src: "/images/thumbnail/thumbnail-afriyie.jpg", alt: "Community member at an outreach" },
];

function HeroImageCell({
  src,
  alt,
  index,
  className = "",
}: {
  src: string;
  alt: string;
  index: number;
  className?: string;
}) {
  return (
    <motion.div
      custom={index}
      variants={gridImageVariants}
      initial="hidden"
      animate="visible"
      className={`relative min-h-0 overflow-hidden rounded-xl shadow-xl lg:rounded-2xl min-[1440px]:rounded-[1.25rem] min-[1440px]:shadow-2xl ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(min-width: 1440px) 26vw, (min-width: 1024px) 28vw, 90vw"
        className="object-cover transition-transform duration-500 ease-out hover:scale-[1.03]"
        priority={index === 0}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent"
      />
    </motion.div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1FA84A] via-[#27C2C7] to-[#34C759] min-h-[88vh] flex items-center lg:-mt-12 lg:min-h-[84vh] lg:pt-12 lg:items-start xl:min-h-[88vh] min-[1440px]:min-h-[90vh]">
      <Particles count={50} />

      {/* Floating decorative shapes */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="hidden sm:block absolute top-12 right-[12%] h-14 w-14 rounded-full bg-white/10 pointer-events-none"
      />
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="hidden sm:block absolute bottom-28 right-[32%] h-10 w-10 rounded-lg bg-white/10 pointer-events-none rotate-12"
      />
      <motion.div
        animate={{ y: [0, -6, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="hidden sm:block absolute top-1/3 left-[6%] h-6 w-6 rounded-full bg-white/10 pointer-events-none"
      />

      <div className="hidden sm:block absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/3 translate-x-1/3 pointer-events-none" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-20 sm:py-24 lg:px-8 lg:pb-12 lg:pt-20 xl:px-16 xl:pb-14 xl:pt-24 min-[1440px]:max-w-[90rem] min-[1440px]:px-20 min-[1440px]:py-28">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-6 xl:gap-8 min-[1440px]:gap-x-6 min-[1440px]:gap-y-10">
          {/* Left — copy */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex min-w-0 flex-col items-center text-center lg:items-start lg:text-left"
          >
            <motion.p
              variants={itemVariants}
              className="mb-3 max-w-md text-xs font-medium tracking-wide text-white/70 sm:text-[0.8rem] lg:mb-3 lg:text-[0.75rem] xl:text-[0.85rem] min-[1440px]:mb-4 min-[1440px]:text-[0.8rem] min-[1440px]:tracking-[0.02em]"
            >
              Sylfi&apos;s Child Health Corner
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="mb-4 max-w-xl text-balance text-[1.75rem] font-bold leading-[1.12] tracking-tight text-white sm:text-[2rem] lg:mb-4 lg:text-[1.75rem] lg:leading-[1.12] xl:text-[2rem] min-[1440px]:mb-5 min-[1440px]:max-w-xl min-[1440px]:text-[2.35rem] min-[1440px]:leading-[1.1] min-[1440px]:tracking-[-0.02em] 2xl:mb-6 2xl:text-[2.5rem]"
            >
              Every Child Deserves a{" "}
              <span className="underline decoration-white/50 decoration-4 underline-offset-4">
                Healthy Start
              </span>{" "}
              in Life
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mb-6 max-w-[36ch] text-sm font-normal leading-relaxed text-white/85 lg:mb-5 lg:text-[0.9rem] lg:leading-[1.65] xl:mb-6 xl:max-w-[38ch] xl:text-base min-[1440px]:mb-8 min-[1440px]:max-w-[40ch] min-[1440px]:text-[0.9375rem] min-[1440px]:leading-[1.7]"
            >
              We empower families and caregivers to prioritize children&apos;s
              health through education, advocacy, and community engagement.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mb-6 flex w-full max-w-sm flex-col items-center gap-3 md:max-w-none md:flex-row md:justify-center md:gap-2.5 lg:mb-6 lg:flex-col lg:items-start lg:gap-3 xl:mb-8 min-[1440px]:mb-12 min-[1440px]:gap-4"
            >
              <div className="flex flex-col items-center gap-3 md:flex-row md:gap-2.5 lg:justify-start min-[1440px]:gap-4">
                <Button
                  href="/programs"
                  variant="white"
                  size="sm"
                  className="!rounded-xl !px-4 !py-2 !text-xs !font-semibold sm:!px-5 sm:!py-2 sm:!text-sm lg:!px-5 lg:!text-[0.875rem] xl:!px-6 xl:!py-2.5 xl:!text-sm min-[1440px]:!px-6 min-[1440px]:!py-2.5 min-[1440px]:!text-[0.9rem] transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Get Involved
                </Button>
                <Link
                  href={IMPACT_STORY_VIDEO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Watch our impact story video on YouTube (opens in new tab)"
                  className="group inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white text-primary shadow-lg transition-all duration-200 hover:scale-[1.04] active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white sm:h-9 sm:w-9 xl:h-10 xl:w-10 min-[1440px]:h-9 min-[1440px]:w-9"
                >
                  <Play
                    size={14}
                    className="ml-0.5 fill-primary stroke-primary sm:size-[15px] xl:size-4 min-[1440px]:size-4"
                    aria-hidden
                  />
                </Link>
              </div>
              <Button
                href="/about"
                variant="outline"
                size="sm"
                className="!rounded-xl border-white/35 !px-4 !py-1.5 !text-xs !font-medium !text-white hover:!bg-white/10 hover:!text-white sm:!px-5 sm:!py-2 sm:!text-sm lg:!px-5 xl:!px-6 xl:!py-2.5 xl:!text-sm min-[1440px]:!px-6 min-[1440px]:!py-2.5 min-[1440px]:!text-[0.9rem] focus-visible:ring-white"
              >
                Learn More
              </Button>
            </motion.div>

            {/* Supporter strip */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center gap-2 sm:gap-3 lg:flex-row lg:items-center lg:justify-start xl:gap-4 min-[1440px]:mt-1 min-[1440px]:gap-6"
            >
              <div className="flex shrink-0 items-center">
                {supporterAvatars.map((avatar, i) => (
                  <div
                    key={avatar.src}
                    className="relative -ml-2 first:ml-0 h-9 w-9 overflow-hidden rounded-full border-2 border-primary-dark ring-1 ring-white/20 lg:h-10 lg:w-10 min-[1440px]:-ml-2 min-[1440px]:h-10 min-[1440px]:w-10"
                    style={{ zIndex: supporterAvatars.length - i }}
                  >
                    <Image
                      src={avatar.src}
                      alt={avatar.alt}
                      fill
                      sizes="(min-width: 1440px) 48px, 40px"
                      className="object-cover"
                    />
                  </div>
                ))}
                <div className="relative z-10 -ml-2 flex h-9 w-9 items-center justify-center rounded-full border-2 border-primary-dark bg-white text-xs font-bold tabular-nums text-primary lg:h-10 lg:w-10 lg:text-sm min-[1440px]:-ml-2 min-[1440px]:h-10 min-[1440px]:w-10 min-[1440px]:text-xs">
                  400+
                </div>
              </div>
              <p className="text-center text-xs leading-snug text-white/85 sm:text-sm lg:text-left min-[1440px]:text-sm min-[1440px]:leading-snug">
                <span className="font-medium text-white">Join our community</span>{" "}
                <Link
                  href="/volunteer"
                  className="font-semibold text-white underline decoration-white/40 underline-offset-2 transition-colors hover:text-white/90 hover:decoration-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-transparent rounded-sm"
                >
                  of supporters
                </Link>
              </p>
            </motion.div>
          </motion.div>

          {/* Right — staggered two-column image grid */}
          <div className="w-full min-w-0 lg:max-w-none">
            <div className="flex h-[min(22rem,52vw)] gap-2.5 sm:h-[min(24rem,48vw)] sm:gap-3 lg:h-[18rem] lg:gap-2.5 xl:h-[22rem] xl:gap-3 min-[1440px]:h-[32rem] min-[1440px]:gap-5 2xl:h-[34rem] 2xl:gap-6">
              {heroImageColumns.map((column, colIndex) => (
                <div
                  key={colIndex}
                  className="flex min-w-0 flex-1 flex-col gap-2.5 sm:gap-3 lg:gap-2.5 xl:gap-3.5 min-[1440px]:gap-5 2xl:gap-6"
                >
                  {column.images.map((img, rowIndex) => {
                    const index = colIndex * 2 + rowIndex;
                    return (
                      <HeroImageCell
                        key={img.src}
                        src={img.src}
                        alt={img.alt}
                        index={index}
                        className={img.flex}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Wave — overlaps next section by 1px to avoid teal gradient hairline */}
      <div className="absolute bottom-0 left-0 right-0 z-10 leading-none translate-y-px">
        <svg
          viewBox="0 0 1440 60"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block h-12 w-full sm:h-14 lg:h-16"
        >
          <path
            d="M0 60V30C240 0 480 60 720 30C960 0 1200 60 1440 30V60H0Z"
            fill="var(--color-light-bg)"
          />
        </svg>
      </div>
    </section>
  );
}
