"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import { sectionH2, sectionH3, bodyMuted } from "@/lib/typography";
import { siteConfig } from "@/lib/siteConfig";
import { MailIcon, PhoneIcon, LocationIcon } from "@/components/ui/icons";

type SubmitStatus = "idle" | "submitting" | "success" | "error";

type ContactFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialForm: ContactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function buildMailtoHref(form: ContactFormData) {
  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    form.subject || "Message from the SCHC website",
  )}&body=${encodeURIComponent(
    `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
  )}`;
}

export default function ContactPage() {
  const [form, setForm] = useState<ContactFormData>(initialForm);
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [showMailtoFallback, setShowMailtoFallback] = useState(false);

  const updateField = (field: keyof ContactFormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (status === "error") {
      setStatus("idle");
      setErrorMessage(null);
      setShowMailtoFallback(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage(null);
    setShowMailtoFallback(false);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setForm(initialForm);
        setStatus("success");
        return;
      }

      if (res.status === 501) {
        setShowMailtoFallback(true);
        setStatus("error");
        return;
      }

      let message = "Something went wrong. Please try again.";
      try {
        const data = (await res.json()) as { error?: string };
        if (data.error) message = data.error;
      } catch {
        // Non-JSON error body — keep the generic message.
      }

      setErrorMessage(message);
      setStatus("error");
    } catch {
      setErrorMessage(
        "Unable to reach the server. Check your connection and try again.",
      );
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
                  <div className="text-center py-10" aria-live="polite">
                    <div className="flex justify-center mb-4">
                      <CheckCircle className="w-16 h-16 text-primary" aria-hidden />
                    </div>
                    <h3 className={`${sectionH3} font-bold text-dark-text mb-2`}>Message Sent!</h3>
                    <p className="text-gray-500 mb-6">
                      Thank you for reaching out. We&apos;ll get back to you shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="text-sm font-semibold text-primary hover:text-primary-dark transition-colors"
                    >
                      Send another message
                    </button>
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
                          autoComplete="name"
                          value={form.name}
                          onChange={(e) => updateField("name", e.target.value)}
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
                          autoComplete="email"
                          value={form.email}
                          onChange={(e) => updateField("email", e.target.value)}
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
                        autoComplete="off"
                        value={form.subject}
                        onChange={(e) => updateField("subject", e.target.value)}
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
                        onChange={(e) => updateField("message", e.target.value)}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 text-dark-text text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary transition-colors resize-none"
                        placeholder="Tell us more..."
                      />
                    </div>
                    {status === "error" && (
                      <div
                        id="contact-form-error"
                        role="alert"
                        aria-live="assertive"
                        className="rounded-xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-800"
                      >
                        {showMailtoFallback ? (
                          <>
                            Online submission isn&apos;t available just yet. Please email us
                            directly at{" "}
                            <a
                              href={buildMailtoHref(form)}
                              className="font-semibold underline"
                            >
                              {siteConfig.email}
                            </a>
                            .
                          </>
                        ) : (
                          <>
                            {errorMessage}{" "}
                            You can also email us at{" "}
                            <a
                              href={`mailto:${siteConfig.email}`}
                              className="font-semibold underline"
                            >
                              {siteConfig.email}
                            </a>
                            .
                          </>
                        )}
                      </div>
                    )}
                    <button
                      type="submit"
                      disabled={status === "submitting"}
                      aria-describedby={status === "error" ? "contact-form-error" : undefined}
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
