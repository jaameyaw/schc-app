"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";
import Particles from "@/components/ui/Particles";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
};

const stats = [
  { value: "400+", label: "Children Reached" },
  { value: "10+", label: "Communities" },
  { value: "6+", label: "Programs Active" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1FA84A] via-[#27C2C7] to-[#34C759] min-h-[88vh] flex items-center">
      <Particles count={40} />

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

      <div className="relative w-full px-6 lg:px-8 xl:px-20 py-16 lg:py-12 xl:py-14 2xl:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 xl:gap-16 2xl:gap-24 items-center">

          {/* LEFT — Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            <motion.p variants={itemVariants} className="text-white/80 text-xs font-semibold uppercase tracking-widest mb-4">
              Sylfi&apos;s Child Health Corner
            </motion.p>

            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-[2.5rem] xl:text-5xl 2xl:text-6xl font-bold text-white leading-tight mb-5"
            >
              Every Child Deserves a{" "}
              <span className="underline decoration-white/50 decoration-4 underline-offset-4">
                Healthy Start
              </span>{" "}
              in Life
            </motion.h1>

            <motion.p variants={itemVariants} className="text-white/85 text-sm xl:text-[0.95rem] leading-relaxed mb-8 max-w-md">
              We empower families and caregivers to prioritize children&apos;s
              health through education, advocacy, and community engagement.
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-wrap justify-center lg:justify-start gap-3 mb-10">
              <Button href="/volunteer" variant="white" size="sm" className="sm:!px-8 sm:!py-4 sm:!text-base">
                Volunteer With Us
              </Button>
              <Button
                href="/about"
                variant="outline"
                size="sm"
                className="border-white text-white hover:bg-white hover:!text-primary sm:!px-8 sm:!py-4 sm:!text-base"
              >
                Learn More
              </Button>
            </motion.div>

            {/* Inline stats — only visible alongside the collage (below lg) */}
            <motion.div variants={itemVariants} className="lg:hidden flex flex-wrap justify-center gap-4 sm:gap-8">
              {stats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex flex-col items-center ${i !== 0 ? "border-l border-white/20 pl-4 sm:pl-8" : ""}`}
                >
                  <p className="text-white text-lg sm:text-2xl font-bold leading-none">{stat.value}</p>
                  <p className="text-white/65 text-[10px] sm:text-xs mt-1">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT — Image panel */}
          <div className="relative">

            {/* ── Collage layout: mobile → tablet (hidden at lg+) ── */}
            <div className="lg:hidden relative h-[420px] sm:h-[500px] w-full">
              {/* Top-center */}
              <motion.div
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                className="absolute left-1/2 top-0 -translate-x-1/2 h-56 w-56 sm:h-64 sm:w-64 rounded-2xl p-1.5 shadow-2xl bg-white/15 backdrop-blur-sm"
              >
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image src="/images/IMG_7521.jpg" alt="School outreach program" fill sizes="256px" className="object-cover" priority />
                </div>
              </motion.div>

              {/* Right-middle */}
              <motion.div
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.1 }}
                className="absolute right-0 top-[30%] h-48 w-48 sm:h-60 sm:w-60 rounded-2xl p-1.5 shadow-2xl bg-white/15 backdrop-blur-sm"
              >
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image src="/images/IMG_8989.jpg" alt="SCHC volunteers" fill sizes="240px" className="object-cover" />
                </div>
              </motion.div>

              {/* Bottom-left */}
              <motion.div
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.2 }}
                className="absolute left-0 bottom-0 h-44 w-44 sm:h-56 sm:w-56 rounded-2xl p-1.5 shadow-2xl bg-white/15 backdrop-blur-sm"
              >
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image src="/images/IMG_8557.jpg" alt="Community children" fill sizes="224px" className="object-cover" />
                </div>
              </motion.div>
            </div>

            {/* ── Previous layout: 1024px and above (lg+) ── */}
            <div className="hidden lg:flex gap-3 items-stretch h-[360px] xl:h-[440px] 2xl:h-[500px]">
              {/* Main tall image */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="relative flex-[3] rounded-2xl overflow-hidden shadow-2xl"
              >
                <Image src="/images/IMG_7521.jpg" alt="Children receiving healthcare support" fill sizes="35vw" className="object-cover" priority />
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-2.5 shadow">
                  <p className="text-xs text-gray-500 font-medium">Communities</p>
                  <p className="text-xl font-bold text-teal leading-none mt-0.5">10+</p>
                </div>
              </motion.div>

              {/* Right column */}
              <div className="flex-[2] flex flex-col gap-3">
                <motion.div
                  initial={{ opacity: 0, y: -12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="bg-white/15 backdrop-blur-md border border-white/25 rounded-xl px-5 py-4"
                >
                  <p className="text-white/70 text-[10px] uppercase tracking-widest font-semibold">Children Reached</p>
                  <p className="text-white text-2xl xl:text-3xl font-bold leading-none mt-1.5">400+</p>
                  <p className="text-white/55 text-xs mt-1">across Ghana</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.45 }}
                  className="relative flex-1 rounded-xl overflow-hidden shadow-xl"
                >
                  <Image src="/images/IMG_8989.jpg" alt="SCHC volunteers at work" fill sizes="25vw" className="object-cover" />
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="bg-white/15 backdrop-blur-md border border-white/25 rounded-xl px-5 py-3"
                >
                  <p className="text-white/70 text-[10px] uppercase tracking-widest font-semibold">Programs Active</p>
                  <p className="text-white text-2xl font-bold leading-none mt-1">6+</p>
                </motion.div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Wave */}
      <div className="hidden sm:block absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60V30C240 0 480 60 720 30C960 0 1200 60 1440 30V60H0Z" fill="#F5F7F7" />
        </svg>
      </div>
    </section>
  );
}
