"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Particles from "@/components/ui/Particles";

export default function CTABanner() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-primary-dark via-primary to-teal py-20">
      <Particles count={15} />

      <div className="relative max-w-[1400px] xl:max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-white/70 text-sm font-semibold uppercase tracking-widest mb-3">
            Join the Movement
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-5 leading-tight">
            Be the Reason a Child
            <br className="hidden sm:block" /> Smiles Today
          </h2>
          <p className="text-white/85 text-lg max-w-2xl mx-auto mb-8 leading-relaxed">
            Together, we can prioritize child health and create a brighter future
            for every child. Your support makes it possible.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              href="https://docs.google.com/forms/d/e/1FAIpQLSc45-Vnum5Q_kGUqy-OCVWuyHjdT6YvE1YODu7FF39XATF62A/viewform?usp=header"
              variant="white"
              size="lg"
              external
            >
              Volunteer With Us
            </Button>
            <Button href="/donate" variant="outline" size="lg"
              className="border-white text-white hover:bg-white hover:!text-primary">
              Donate Now
            </Button>
            <Button
              href="https://forms.gle/DrKn2VzfK66XzzKJ6"
              variant="outline"
              size="lg"
              external
              className="border-white/60 text-white hover:bg-white/10"
            >
              Become a Partner
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
