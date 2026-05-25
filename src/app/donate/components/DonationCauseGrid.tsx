"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type CauseColor = "primary" | "teal";

interface DonationCause {
  title: string;
  desc: string;
  image: string;
  imageAlt: string;
  color: CauseColor;
}

const causes: DonationCause[] = [
  {
    title: "Stitch-A-Uniform",
    desc: "Fund a school uniform for a child who can't afford one.",
    image: "/images/about-pg-imgs/stitch-a-uniform.jpeg",
    imageAlt: "Stitch-A-Uniform campaign — children receiving school uniforms",
    color: "primary",
  },
  {
    title: "Feed & Treat",
    desc: "Support meals and medical care for street-connected children.",
    image: "/images/about-pg-imgs/feed-the-street.jpeg",
    imageAlt: "Feed and Treat the Street — nutrition and medical outreach",
    color: "teal",
  },
  {
    title: "Monthly Miracle Fund",
    desc: "Help cover medical costs for children in urgent need.",
    image: "/images/about-pg-imgs/monthly-miracle.jpeg",
    imageAlt: "Monthly Miracle Fund — medical support for families",
    color: "primary",
  },
  {
    title: "Healthy Bridge",
    desc: "Fund workshops that connect families to health knowledge.",
    image: "/images/about-pg-imgs/health-bridge.jpeg",
    imageAlt: "Healthy Bridge Initiative — community health education",
    color: "teal",
  },
  {
    title: "General Operations",
    desc: "Support the day-to-day running of our programs.",
    image: "/images/volunteer1.jpg",
    imageAlt: "SCHC volunteers supporting daily program operations",
    color: "primary",
  },
  {
    title: "Any Amount",
    desc: "Every cedi counts — give what you can, when you can.",
    image: "/images/IMG_8989.jpg",
    imageAlt: "Community outreach — every donation makes a difference",
    color: "teal",
  },
];

const cardStyles = {
  primary: {
    title: "text-primary",
    accent: "bg-primary",
    ring: "group-hover:ring-primary/20",
    glow: "group-hover:shadow-[0_28px_56px_-20px_rgba(52,199,89,0.28)]",
    gradient: "from-primary/50 via-transparent to-transparent",
  },
  teal: {
    title: "text-teal",
    accent: "bg-teal",
    ring: "group-hover:ring-teal/20",
    glow: "group-hover:shadow-[0_28px_56px_-20px_rgba(39,194,199,0.28)]",
    gradient: "from-teal/50 via-transparent to-transparent",
  },
} as const;

export default function DonationCauseGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 xl:gap-8">
      {causes.map((cause, i) => {
        const styles = cardStyles[cause.color];

        return (
          <motion.article
            key={cause.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className={`group flex h-full flex-col overflow-hidden rounded-[1.35rem] border border-gray-100/90 bg-white shadow-[0_8px_32px_-12px_rgba(31,45,47,0.1)] ring-1 ring-transparent ${styles.ring} ${styles.glow} transition-all duration-300 hover:-translate-y-1.5`}
          >
            <div className="relative aspect-[5/3] shrink-0 overflow-hidden bg-light-bg">
              <Image
                src={cause.image}
                alt={cause.imageAlt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.06]"
              />
              <div
                className={`absolute inset-0 bg-gradient-to-t ${styles.gradient} via-dark-text/10 to-dark-text/25`}
                aria-hidden
              />
              <div
                className={`absolute bottom-0 left-0 right-0 h-[3px] ${styles.accent} scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100`}
                aria-hidden
              />
            </div>

            <div className="flex flex-1 flex-col px-6 py-6 text-center sm:px-7 sm:py-7">
              <h3
                className={`font-section text-[1.12rem] font-semibold leading-snug tracking-tight sm:text-[1.18rem] ${styles.title}`}
              >
                {cause.title}
              </h3>
              <p className="mt-2.5 text-[0.9rem] leading-[1.65] text-gray-600 sm:text-[0.94rem]">
                {cause.desc}
              </p>
            </div>
          </motion.article>
        );
      })}
    </div>
  );
}
