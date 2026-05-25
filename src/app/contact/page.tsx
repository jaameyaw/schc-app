"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle } from "lucide-react";
import { sectionEyebrowHero } from "@/lib/sectionEyebrow";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-teal to-primary-dark py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src="/images/IMG_8561.jpg"
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
            <span className={sectionEyebrowHero}>Reach Out</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">Contact Us</h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Have questions, ideas, or want to get involved? We&apos;d love to
              hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 bg-light-bg overflow-hidden">
        <div className="max-w-[1400px] xl:max-w-[1600px] mx-auto px-6 lg:px-12 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-dark-text mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We&apos;re here to answer questions about our programs,
                volunteering, partnerships, and donations.
              </p>

              <div className="space-y-5 mb-10">
                <ContactInfo
                  icon={<MailIcon />}
                  label="Email"
                  value="childhealthcorner@gmail.com"
                  href="mailto:childhealthcorner@gmail.com"
                />
                <ContactInfo
                  icon={<LocationIcon />}
                  label="Location"
                  value="Kumasi, Ghana"
                  href="https://maps.google.com/?q=Kumasi%2C%20Ghana"
                />
                <ContactInfo
                  icon={<PhoneIcon />}
                  label="Phone"
                  value="+233 54 712 4909"
                  href="tel:+233547124909"
                />
              </div>

              {/* Social Links */}
              <div>
                <p className="font-semibold text-dark-text mb-4">Follow Us</p>
                <div className="flex flex-wrap gap-3">
                  {[
                    {
                      label: "Instagram",
                      color: "bg-[#E4405F]",
                      href: "https://www.instagram.com/chc_kidshealth?igsh=MW1hZDVpeDZmbmJheg==",
                    },
                    {
                      label: "YouTube",
                      color: "bg-[#FF0000]",
                      href: "https://youtube.com/@childhealthcorner?si=VgWVhuEE0T4ojxzK",
                    },
                    {
                      label: "TikTok",
                      color: "bg-dark-text",
                      href: "https://www.tiktok.com/@chc_kidshealth?_r=1&_t=ZS-96Dp9xARa1R",
                    },
                    {
                      label: "LinkedIn",
                      color: "bg-[#0A66C2]",
                      href: "https://www.linkedin.com/company/child-health-corner/",
                    },
                  ].map(({ label, color, href }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${color} text-white text-xs font-semibold px-4 py-2 rounded-full hover:opacity-90 transition-opacity`}
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h2 className="text-xl font-bold text-dark-text mb-6">Send a Message</h2>
                {submitted ? (
                  <div className="text-center py-10">
                    <div className="flex justify-center mb-4">
                      <CheckCircle className="w-16 h-16 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-dark-text mb-2">Message Sent!</h3>
                    <p className="text-gray-500">Thank you for reaching out. We&apos;ll get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-dark-text mb-1.5">
                          Full Name
                        </label>
                        <input
                          type="text"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-dark-text text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-dark-text mb-1.5">
                          Email Address
                        </label>
                        <input
                          type="email"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-dark-text text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark-text mb-1.5">
                        Subject
                      </label>
                      <input
                        type="text"
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-dark-text text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                        placeholder="How can we help?"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark-text mb-1.5">
                        Message
                      </label>
                      <textarea
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-dark-text text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors resize-none"
                        placeholder="Tell us more..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3.5 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-colors duration-200 text-sm"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactInfo({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
}) {
  return (
    <div className="flex items-center gap-4">
      <div className="w-11 h-11 bg-primary/10 rounded-xl flex items-center justify-center text-primary shrink-0">
        {icon}
      </div>
      <div>
        <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">{label}</p>
        <a href={href} className="text-dark-text text-sm font-semibold hover:text-primary transition-colors">
          {value}
        </a>
      </div>
    </div>
  );
}

function MailIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function LocationIcon() {
  return (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
      />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M19 11c0 5-7 10-7 10s-7-5-7-10a7 7 0 1 1 14 0z"
      />
    </svg>
  );
}
