"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative bg-gradient-to-br from-primary-dark to-teal py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/images/IMG_8529.jpg"
          alt="SCHC background"
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="relative w-full px-6 lg:px-12 xl:px-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-widest text-white/70 border border-white/30 rounded-full mb-4">
            About SCHC
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
            Our Story &amp; Mission
          </h1>
          <p className="text-white/80 text-lg max-w-2xl mx-auto leading-relaxed">
            Dedicated to improving child health through education, advocacy, and
            community engagement across Ghana.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
