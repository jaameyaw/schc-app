"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { sectionEyebrow } from "@/lib/sectionEyebrow";
import { sectionH2, bodyMuted } from "@/lib/typography";
import { newsletterSchema } from "@/lib/newsletterSchema";

type SubmitStatus = "idle" | "submitting" | "success" | "error" | "unavailable";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = newsletterSchema.safeParse({ email });
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Enter a valid email");
      return;
    }
    setError(null);
    setStatus("submitting");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: parsed.data.email }),
      });
      // Only show a success state on a real 200 from the API route.
      // 501 means signup isn't configured yet (missing API key); everything
      // else is a temporary failure the user can retry.
      if (res.ok) {
        setStatus("success");
      } else if (res.status === 501) {
        setStatus("unavailable");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
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
          <h2 className={`${sectionH2} font-bold text-dark-text mb-3`}>
            Stay Updated with Our Work
          </h2>
          <p className={`${bodyMuted} text-gray-500 mb-8`}>
            Get updates on our programs, outreach, and ways to support
            children&apos;s health.
          </p>

          {status === "success" ? (
            <div className="bg-green-50 border border-primary/20 rounded-xl px-8 py-6">
              <p className="text-primary font-semibold text-base sm:text-[0.9375rem]">
                Thank you for subscribing!
              </p>
              <p className="text-gray-500 text-sm mt-1">
                We&apos;ll keep you updated on our latest programs and impact.
              </p>
            </div>
          ) : (
            <>
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              >
                <label htmlFor="newsletter-email" className="sr-only">
                  Email address
                </label>
                <input
                  id="newsletter-email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    if (error) setError(null);
                  }}
                  placeholder="Enter your email address"
                  required
                  aria-invalid={error ? true : undefined}
                  aria-describedby={error ? "newsletter-email-error" : undefined}
                  className="flex-1 px-5 py-3.5 rounded-full border border-gray-200 text-dark-text placeholder:text-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                />
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="px-6 py-3.5 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary-dark transition-colors duration-200 shrink-0 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {status === "submitting" ? "Subscribing..." : "Subscribe"}
                </button>
              </form>
              {status === "error" && (
                <p role="alert" className="text-gray-500 text-sm mt-4">
                  Online sign-up isn&apos;t available just yet. Email us at{" "}
                  <a
                    href="mailto:childhealthcorner@gmail.com"
                    className="font-semibold text-primary underline"
                  >
                    childhealthcorner@gmail.com
                  </a>{" "}
                  to stay updated.
                </p>
              )}
            </>
          )}
        </motion.div>
      </div>
    </section>
  );
}
