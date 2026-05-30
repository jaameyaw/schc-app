"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";
import { blurPlaceholders } from "@/data/blur-placeholders";
import { programs as programsData } from "@/data/programs";

const programs = programsData.map((program) => ({
  title: program.title,
  description: program.preview.description,
  image: program.preview.image,
  category: program.category,
  categoryColor: program.preview.categoryColor,
  accentClass: program.preview.accentClass,
}));

export default function ProgramsPreview() {
  return (
    <section className="py-24 bg-light-bg">
      <div className="max-w-[1600px] 2xl:max-w-[1800px] mx-auto px-4 lg:px-6 xl:px-8 2xl:px-16">
        <div className="mb-14">
          <SectionHeader
            tag="Our Programs"
            title="Initiatives That Change Lives"
            subtitle="Every program is designed to address a specific need in child health, education, and welfare."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 xl:gap-6">
          {programs.map((prog, i) => (
            <motion.div
              key={prog.title}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col border border-gray-100"
            >
              {/* Image */}
              <div className="relative h-60 lg:h-64 xl:h-[270px] overflow-hidden shrink-0">
                <Image
                  src={prog.image}
                  alt={prog.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  quality={60}
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  {...(blurPlaceholders[prog.image]
                    ? { placeholder: "blur" as const, blurDataURL: blurPlaceholders[prog.image] }
                    : {})}
                />
                {/* subtle bottom fade */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />
                <span
                  className={`absolute top-4 left-4 text-[11px] font-semibold tracking-wide px-3.5 py-1.5 rounded-full backdrop-blur-md ${prog.categoryColor}`}
                >
                  {prog.category}
                </span>
              </div>

              {/* Animated accent bar */}
              <div
                className={`h-[3px] w-0 group-hover:w-full transition-all duration-500 ease-out ${prog.accentClass}`}
              />

              {/* Body */}
              <div className="px-6 pt-5 pb-7 flex flex-col flex-1">
                <h3 className="text-base font-semibold tracking-tight text-dark-text leading-snug mb-3 sm:text-[1.05rem]">
                  {prog.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed flex-1 mb-5 sm:text-[0.9375rem]">
                  {prog.description}
                </p>
                <Link
                  href="/programs"
                  className="self-start inline-flex items-center gap-1.5 text-primary text-[0.95rem] font-semibold tracking-[0.02em] group/link hover:gap-2.5 transition-all duration-200"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/programs"
            className="inline-flex items-center gap-2 px-8 py-3 border-2 border-primary text-primary text-[0.95rem] font-semibold tracking-[0.02em] rounded-full hover:bg-primary hover:text-white transition-all duration-200 hover:shadow-lg hover:shadow-primary/20"
          >
            View All Programs
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
