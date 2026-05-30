"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import { sectionH2, sectionH3, bodyMuted } from "@/lib/typography";
import { siteConfig } from "@/lib/siteConfig";
import { MailIcon, PhoneIcon, LocationIcon } from "@/components/ui/icons";

type SubmitStatus = "idle" | "submitting" | "success" | "error";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const mailtoHref = `mailto:childhealthcorner@gmail.com?subject=${encodeURIComponent(
    form.subject || "Message from the SCHC website",
  )}&body=${encodeURIComponent(
    `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
  )}`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      // Only show a success state on a real 200 from the API route.
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      <PageHero
        tag="Reach Out"
        title="Contact Us"
        subtitle="Have questions, ideas, or want to get involved? We'd love to hear from you."
        imageSrc="/images/IMG_8561.jpg"
      />

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
              <h2 className={`${sectionH2} font-bold text-dark-text mb-6`}>
                Get in Touch
              </h2>
              <p className={`${bodyMuted} mb-8`}>
                We&apos;re here to answer questions about our programs,
                volunteering, partnerships, and donations.
              </p>

              <div className="space-y-5 mb-10">
                <ContactInfo
                  icon={<MailIcon />}
                  label="Email"
                  value={siteConfig.email}
                  href={`mailto:${siteConfig.email}`}
                />
                <ContactInfo
                  icon={<LocationIcon />}
                  label="Location"
                  value={siteConfig.location.full}
                  href="https://maps.google.com/?q=Kumasi%2C%20Ghana"
                />
                <ContactInfo
                  icon={<PhoneIcon />}
                  label="Phone"
                  value={siteConfig.phone.display}
                  href={`tel:${siteConfig.phone.tel}`}
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
                      href: siteConfig.social.instagram,
                    },
                    {
                      label: "YouTube",
                      color: "bg-[#FF0000]",
                      href: siteConfig.social.youtube,
                    },
                    {
                      label: "TikTok",
                      color: "bg-dark-text",
                      href: siteConfig.social.tiktok,
                    },
                    {
                      label: "LinkedIn",
                      color: "bg-[#0A66C2]",
                      href: siteConfig.social.linkedin,
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
                <h2 className={`${sectionH3} font-bold text-dark-text mb-6`}>Send a Message</h2>
                {status === "success" ? (
                  <div className="text-center py-10">
                    <div className="flex justify-center mb-4">
                      <CheckCircle className="w-16 h-16 text-primary" />
                    </div>
                    <h3 className={`${sectionH3} font-bold text-dark-text mb-2`}>Message Sent!</h3>
                    <p className="text-gray-500">Thank you for reaching out. We&apos;ll get back to you shortly.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label
                          htmlFor="contact-name"
                          className="block text-sm font-medium text-dark-text mb-1.5"
                        >
                          Full Name
                        </label>
                        <input
                          id="contact-name"
                          name="name"
                          type="text"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 text-dark-text text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-sm font-medium text-dark-text mb-1.5"
                        >
                          Email Address
                        </label>
                        <input
                          id="contact-email"
                          name="email"
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
                      <label
                        htmlFor="contact-subject"
                        className="block text-sm font-medium text-dark-text mb-1.5"
                      >
                        Subject
                      </label>
                      <input
                        id="contact-subject"
                        name="subject"
                        type="text"
                        value={form.subject}
                        onChange={(e) => setForm({ ...form, subject: e.target.value })}
                        required
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-dark-text text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors"
                        placeholder="How can we help?"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-sm font-medium text-dark-text mb-1.5"
                      >
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        name="message"
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-dark-text text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors resize-none"
                        placeholder="Tell us more..."
                      />
                    </div>
                    {status === "error" && (
                      <div
                        role="alert"
                        className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800"
                      >
                        Online submission isn&apos;t available just yet. Please email us
                        directly at{" "}
                        <a href={mailtoHref} className="font-semibold underline">
                          childhealthcorner@gmail.com
                        </a>
                        .
                      </div>
                    )}
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      className="w-full py-3.5 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-colors duration-200 text-sm disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {status === "submitting" ? "Sending..." : "Send Message"}
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
