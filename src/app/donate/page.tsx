"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import DonationCauseGrid from "./components/DonationCauseGrid";
import DonationMethodsSection from "./components/DonationMethodsSection";
import { sectionEyebrowHero } from "@/lib/sectionEyebrow";

export default function DonatePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-teal py-24 lg:py-28">
        <div className="absolute inset-0 opacity-[0.12]">
          <Image
            src="/images/IMG_8438.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/30 via-transparent to-primary-dark/40" />
        <div className="relative w-full px-6 text-center lg:px-12 xl:px-20">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className={sectionEyebrowHero}>Support Our Mission</span>
            <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]">
              Your Donation Changes Lives
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/85 sm:text-[1.12rem]">
              Every contribution — no matter the size — goes directly toward
              improving child health, education, and welfare across Ghana.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Donate + How to Give */}
      <section className="relative overflow-hidden bg-light-bg py-20 lg:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          aria-hidden
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 10%, rgba(52,199,89,0.08) 0%, transparent 45%), radial-gradient(circle at 80% 90%, rgba(39,194,199,0.08) 0%, transparent 45%)",
          }}
        />
        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12 xl:max-w-[1600px] xl:px-20">
          <div className="mb-14 lg:mb-16">
            <SectionHeader
              tag="Make an Impact"
              title="Choose Where Your Gift Goes"
              subtitle="Direct your generosity to the cause that matters most to you — each option funds real work on the ground."
            />
          </div>

          <DonationCauseGrid />

          <div className="mt-12 flex flex-col items-center gap-4 text-center sm:mt-14">
            <p className="text-base font-bold text-dark-text/70">
              Ready to send a gift?
            </p>
            <Button
              href="#donate-methods"
              variant="outline"
              size="lg"
              className="border-primary/70 text-primary bg-white/80 hover:bg-primary hover:text-white hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
            >
              Go to Donation Options
            </Button>
          </div>
        </div>

        <div className="relative mt-2 mb-1 sm:mt-3 sm:mb-2 lg:mt-4 lg:mb-3" aria-hidden="true">
          <svg
            className="block h-24 w-full sm:h-28 lg:h-32"
            viewBox="0 0 1440 200"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient
                id="donate-divider-gradient"
                x1="0"
                y1="0"
                x2="1440"
                y2="200"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0%" stopColor="rgba(39,194,199,0.24)" />
                <stop offset="50%" stopColor="rgba(52,199,89,0.22)" />
                <stop offset="100%" stopColor="rgba(39,194,199,0.2)" />
              </linearGradient>
            </defs>
            <path
              fill="url(#donate-divider-gradient)"
              d="M0 140C120 110 220 120 320 136C420 152 520 186 640 178C760 170 860 120 980 108C1100 96 1230 124 1440 150V200H0Z"
            />
            <path
              fill="rgba(255,255,255,0.7)"
              d="M0 160C180 130 300 154 420 168C540 182 660 176 780 150C900 124 1030 80 1160 86C1290 92 1380 128 1440 144V200H0Z"
            />
          </svg>
        </div>

        <div className="relative mx-auto max-w-[1400px] px-6 lg:px-12 xl:max-w-[1600px] xl:px-20">
          <DonationMethodsSection />
        </div>
      </section>
    </>
  );
}
