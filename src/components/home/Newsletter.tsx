"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { sectionEyebrow } from "@/lib/sectionEyebrow";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-6 lg:px-12 xl:px-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className={sectionEyebrow}>Stay Connected</span>
          <h2 className="text-2xl sm:text-3xl font-bold text-dark-text mb-3">
            Stay Updated with Our Work
          </h2>
          <p className="text-gray-500 text-base mb-8">
            Get updates on our programs, outreach, and ways to support
            children&apos;s health.
          </p>

          {submitted ? (
            <div className="bg-green-50 border border-primary/20 rounded-xl px-8 py-6">
              <p className="text-primary font-semibold text-lg">
                Thank you for subscribing!
              </p>
              <p className="text-gray-500 text-sm mt-1">
                We&apos;ll keep you updated on our latest programs and impact.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                className="flex-1 px-5 py-3.5 rounded-full border border-gray-200 text-dark-text placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3.5 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary-dark transition-colors duration-200 shrink-0"
              >
                Subscribe
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
