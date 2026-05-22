"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";
import Particles from "@/components/ui/Particles";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/volunteer", label: "Volunteer & Partnership" },
  { href: "/donate", label: "Donate" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  {
    href: "https://www.instagram.com/chc_kidshealth?igsh=MW1hZDVpeDZmbmJheg==",
    label: "Instagram",
    icon: InstagramIcon,
  },
  {
    href: "https://youtube.com/@childhealthcorner?si=VgWVhuEE0T4ojxzK",
    label: "YouTube",
    icon: YouTubeIcon,
  },
  {
    href: "https://www.tiktok.com/@chc_kidshealth?_r=1&_t=ZS-96Dp9xARa1R",
    label: "TikTok",
    icon: TikTokIcon,
  },
  {
    href: "https://www.linkedin.com/company/child-health-corner/",
    label: "LinkedIn",
    icon: LinkedInIcon,
  },
];

const programLinks = [
  { href: "/programs", label: "Our Programs" },
  { href: "/gallery", label: "Gallery" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/donate", label: "Donate" },
];

const johnsonGithubUrl = "https://github.com/jaameyaw";

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden text-white"
      style={{ background: "linear-gradient(135deg, #071510 0%, #0d2018 55%, #0a1c16 100%)" }}
    >
      {/* Ambient glow */}
      <div className="absolute -left-32 top-0 w-[420px] h-[420px] rounded-full bg-primary/8 blur-[120px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-[280px] h-[280px] rounded-full bg-teal/8 blur-[90px] pointer-events-none translate-y-1/3" />

      {/* Decorative concentric rings — anchored to the left */}
      <div
        className="absolute -left-48 top-1/2 -translate-y-1/2 w-[720px] h-[720px] rounded-full pointer-events-none"
        style={{ border: "72px solid rgba(52,199,89,0.045)" }}
      />
      <div
        className="absolute -left-28 top-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full pointer-events-none"
        style={{ border: "1.5px solid rgba(39,194,199,0.18)" }}
      />
      <div
        className="absolute -left-10 top-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full pointer-events-none"
        style={{ border: "1px solid rgba(39,194,199,0.09)" }}
      />

      <Particles count={14} />

      <div className="relative w-full px-6 sm:px-8 lg:px-8 xl:px-12 2xl:px-20 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-10 lg:gap-x-10 lg:gap-y-12 xl:gap-12">

          {/* Brand — row 1 left on lg (with Quick Links); col 1 on xl+ */}
          <div className="sm:col-span-2 lg:col-span-1 xl:col-span-1 min-w-0">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <Image
                src="/images/logo.jpeg"
                alt="SCHC Logo"
                width={56}
                height={56}
                className="rounded-full object-cover w-14 h-14"
              />
              <div className="leading-tight">
                <p className="font-bold text-lg tracking-tight">Sylfi&apos;s Child Health Corner</p>
                <p className="text-primary text-xs font-semibold tracking-[0.28em] uppercase mt-1">
                  SCHC · Ghana
                </p>
              </div>
            </Link>

            <p className="text-gray-300 text-base leading-relaxed mb-5 max-w-sm lg:max-w-none">
              Empowering families and caregivers to prioritize children&apos;s health
              through education, advocacy, and community engagement.
            </p>

            <p className="text-primary font-semibold text-base mb-6 leading-relaxed">
              Healthy Habits. Happy Kids. Brighter Tomorrow.
            </p>

            <div className="flex gap-3 mb-7">
              {socialLinks.map(({ href, label, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-200"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            <Link
              href="/donate"
              className="inline-block px-6 py-3 bg-primary text-white text-base font-semibold rounded-full hover:bg-primary-dark transition-colors duration-200"
            >
              Support Us
            </Link>
          </div>

          {/* Quick Links — row 1 right on lg */}
          <div className="min-w-0 lg:pl-4 xl:pl-6">
            <h3 className="font-semibold text-sm uppercase tracking-[0.3em] text-gray-300 mb-6">
              Quick Links
            </h3>
            <ul className="space-y-3.5">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gray-300 text-base hover:text-primary transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Programs */}
          <div className="min-w-0">
            <h3 className="font-semibold text-sm uppercase tracking-[0.3em] text-gray-300 mb-6">
              Programs
            </h3>
            <ul className="space-y-3.5">
              {programLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-gray-300 text-base hover:text-primary transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="min-w-0">
            <h3 className="font-semibold text-sm uppercase tracking-[0.3em] text-gray-300 mb-6">
              Contact Us
            </h3>
            <ul className="space-y-4 text-gray-300 text-base">
              <li className="flex items-start gap-2.5">
                <MapPinIcon className="w-5 h-5 mt-0.5 shrink-0 text-primary" />
                <span>Kumasi, Ghana</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MailIcon className="w-5 h-5 mt-0.5 shrink-0 text-primary" />
                <a
                  href="mailto:childhealthcorner@gmail.com"
                  className="hover:text-primary transition-colors break-all"
                >
                  childhealthcorner@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <PhoneIcon className="w-5 h-5 mt-0.5 shrink-0 text-primary" />
                <div className="space-y-1.5">
                  <a href="tel:+233547124909" className="block hover:text-primary transition-colors">
                    +233 54 712 4909
                  </a>
                </div>
              </li>
              <li>
                <Link
                  href="/donate"
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-gradient-to-r from-primary to-primary-dark text-white text-sm font-semibold rounded-full hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 shadow-md shadow-primary/20"
                >
                  <Heart className="w-4 h-4 fill-white" />
                  Donate
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="relative border-t border-white/10">
        <div className="w-full px-6 sm:px-8 lg:px-8 xl:px-12 2xl:px-20 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-white/40 text-sm">
          <p>&copy; {new Date().getFullYear()} Sylfi&apos;s Child Health Corner (SCHC). All rights reserved.</p>
          <p className="text-white/30">
            Made with &#9829; by{" "}
            <a
              href={johnsonGithubUrl}
              target="_blank"
              rel="noreferrer"
              className="text-white/70 hover:text-primary transition-colors underline underline-offset-4 decoration-white/20 hover:decoration-primary"
            >
              Johnson Ameyaw
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

function YouTubeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
    </svg>
  );
}

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.948V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function MapPinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}
