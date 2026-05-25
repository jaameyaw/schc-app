"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Button from "@/components/ui/Button";
import { sectionEyebrow } from "@/lib/sectionEyebrow";

export default function AboutPreview() {
  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-[1400px] xl:max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* Images collage */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative lg:pb-10 lg:pr-10"
          >
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-lg">
              <Image
                src="/images/IMG_8529.jpg"
                alt="SCHC community outreach"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-700 group-hover:bg-black/[0.08]" />
            </div>

            {/* Secondary image — overlapping bottom-right */}
            <div className="hidden sm:block absolute bottom-0 right-0 w-[42%] aspect-[4/3] rounded-xl overflow-hidden shadow-xl border-[3px] border-white">
              <Image
                src="/images/IMG_8592.jpg"
                alt="SCHC children"
                fill
                sizes="25vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              />
              <div className="absolute inset-0 bg-black/0 transition-colors duration-700 group-hover:bg-black/[0.08]" />
            </div>

            {/* SCHC badge — top-left */}
            <div className="absolute -top-4 -left-4 bg-primary text-white rounded-xl px-4 py-3 shadow-lg hidden sm:flex flex-col items-center">
              <p className="text-2xl font-bold leading-none">SCHC</p>
              <p className="text-[10px] font-medium opacity-80 mt-0.5 tracking-wide uppercase">Ghana</p>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <span className={sectionEyebrow}>About SCHC</span>
            <h2 className="text-[1.85rem] sm:text-[2.1rem] lg:text-[2.35rem] font-semibold tracking-tight text-dark-text leading-[1.12] mb-4">
              Dedicated to Every Child&apos;s Health and Well-being
            </h2>
            <p className="text-slate-600 text-[0.98rem] leading-relaxed mb-6 max-w-[60ch]">
              Sylfi&apos;s Child Health Corner is a Ghanaian non-governmental
              organization empowering families, caregivers, and communities with
              the knowledge to champion children&apos;s health — regardless of
              background or ability.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Education & health awareness campaigns",
                "Community outreach and advocacy",
                "Volunteer-driven programs across Ghana",
              ].map((item) => (
                <li
                  key={item}
                  className="inline-flex w-fit rounded-xl bg-light-bg px-4 py-2.5 text-[0.95rem] font-semibold text-slate-700"
                >
                  {item}
                </li>
              ))}
            </ul>

            <Button href="/about" variant="primary">
              Learn Our Story
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
