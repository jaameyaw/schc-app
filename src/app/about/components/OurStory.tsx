"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FileText, Users, Video, BookOpen } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import {
  aboutBodyStack,
  aboutEyebrow,
  aboutFeatureLabel,
  aboutFeaturePill,
  aboutH2,
  aboutIconWrap,
  aboutImageFrame,
  aboutSectionPad,
} from "../aboutTypography";
import { blurPlaceholders } from "@/data/blur-placeholders";

const storyImages = [
  { src: "/images/IMG_7537.jpg", alt: "SCHC activity", offset: false },
  { src: "/images/IMG_8557.jpg", alt: "SCHC outreach", offset: true },
  { src: "/images/IMG_8592.jpg", alt: "SCHC children", offset: false },
  { src: "/images/IMG_7590.jpg", alt: "SCHC community", offset: true },
];

export default function OurStory() {
  return (
    <section className={`relative overflow-hidden bg-white ${aboutSectionPad}`}>
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 top-0 h-80 w-80 rounded-full bg-primary/[0.04] blur-3xl"
      />
      <div className="relative mx-auto max-w-[1400px] px-6 lg:px-8 xl:max-w-[1600px] xl:px-20">
        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16 xl:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className={aboutEyebrow}>Our Story</span>
            <h2
              className={`${aboutH2} mb-6 text-wrap leading-[1.15] sm:leading-[1.2]`}
            >
              <span className="block">Building a Healthier Future</span>
              <span className="block">for Children</span>
            </h2>
            <div className={aboutBodyStack}>
              <p>
                Sylfi&apos;s Child Health Corner (SCHC) is a non-governmental
                organization dedicated to improving child health through
                education, advocacy, and community engagement.
              </p>
              <p>
                SCHC focuses on empowering families, caregivers, and communities
                with the knowledge and resources needed to support
                children&apos;s health and well-being.
              </p>
              <p>
                The organization operates through blogs and educational articles,
                content videos on child health topics, community outreach and
                engagement, and development of educational resources.
              </p>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3">
              {(
                [
                  { label: "Educational Blogs", icon: FileText },
                  { label: "Community Outreach", icon: Users },
                  { label: "Health Videos", icon: Video },
                  { label: "Resource Development", icon: BookOpen },
                ] as { label: string; icon: LucideIcon }[]
              ).map((item) => (
                <div key={item.label} className={aboutFeaturePill}>
                  <span className={aboutIconWrap}>
                    <item.icon className="h-4 w-4 text-primary" strokeWidth={2} />
                  </span>
                  <span className={aboutFeatureLabel}>{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div
              aria-hidden
              className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/[0.06] via-transparent to-teal/[0.08]"
            />
            <div className="relative grid grid-cols-2 gap-3 sm:gap-4">
              {storyImages.map((img, i) => (
                <motion.div
                  key={img.src}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className={`${aboutImageFrame} aspect-square ${
                    img.offset ? "mt-6 sm:mt-8" : ""
                  }`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 ease-out hover:scale-[1.03]"
                    {...(blurPlaceholders[img.src]
                      ? { placeholder: "blur" as const, blurDataURL: blurPlaceholders[img.src] }
                      : {})}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
