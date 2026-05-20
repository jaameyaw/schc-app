"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FileText, Users, Video, BookOpen } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export default function OurStory() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-[1400px] xl:max-w-[1600px] mx-auto px-6 lg:px-8 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-10 xl:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest text-primary bg-green-50 rounded-full mb-4">
              Our Story
            </span>
            <h2 className="text-3xl lg:text-[1.75rem] xl:text-4xl font-bold text-dark-text leading-tight mb-5">
              Building a Healthier Future for Children
            </h2>
            <div className="space-y-3 text-gray-600 text-sm lg:text-[0.85rem] xl:text-base leading-relaxed">
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
            <div className="mt-6 grid grid-cols-2 gap-3">
              {(
                [
                  { label: "Educational Blogs", icon: FileText },
                  { label: "Community Outreach", icon: Users },
                  { label: "Health Videos", icon: Video },
                  { label: "Resource Development", icon: BookOpen },
                ] as { label: string; icon: LucideIcon }[]
              ).map((item) => (
                <div key={item.label} className="flex items-center gap-2 bg-light-bg rounded-lg px-3 py-2.5 lg:px-2.5 xl:px-4 xl:py-3">
                  <item.icon className="w-4 h-4 xl:w-5 xl:h-5 text-primary shrink-0" />
                  <span className="text-xs lg:text-[0.75rem] xl:text-sm font-medium text-dark-text">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="grid grid-cols-2 gap-3 xl:gap-4">
              {[
                { src: "/images/IMG_7537.jpg", alt: "SCHC activity" },
                { src: "/images/IMG_8557.jpg", alt: "SCHC outreach" },
                { src: "/images/IMG_8592.jpg", alt: "SCHC children" },
                { src: "/images/IMG_7590.jpg", alt: "SCHC community" },
              ].map((img) => (
                <div key={img.src} className="relative aspect-square rounded-2xl overflow-hidden shadow-sm">
                  <Image src={img.src} alt={img.alt} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover hover:scale-105 transition-transform duration-500" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
