"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  aboutEyebrowHero,
  aboutH1,
  aboutHeroLead,
} from "../aboutTypography";

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-teal py-24 lg:py-32">
      <div className="absolute inset-0 opacity-[0.14]">
        <Image
          src="/images/IMG_8529.jpg"
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/40 via-primary-dark/10 to-primary-dark/50" />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />
      <div className="relative w-full px-6 text-center lg:px-12 xl:px-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className={aboutEyebrowHero}>About SCHC</span>
          <h1 className={aboutH1}>Our Story &amp; Mission</h1>
          <p className={aboutHeroLead}>
            Dedicated to improving child health through education, advocacy, and
            community engagement across Ghana.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
