"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";

import { siteConfig } from "@/lib/siteConfig";
import {
  InstagramIcon,
  YouTubeIcon,
  TikTokIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
  MapPinIcon,
} from "@/components/ui/icons";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/volunteer", label: "Volunteer & Partnership" },
  { href: "/donate", label: "Donate" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: siteConfig.social.instagram, label: "Instagram", icon: InstagramIcon },
  { href: siteConfig.social.youtube, label: "YouTube", icon: YouTubeIcon },
  { href: siteConfig.social.tiktok, label: "TikTok", icon: TikTokIcon },
  { href: siteConfig.social.linkedin, label: "LinkedIn", icon: LinkedInIcon },
];

const programLinks = [
  { href: "/programs", label: "Our Programs" },
  { href: "/gallery", label: "Gallery" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/donate", label: "Donate" },
];

const johnsonGithubUrl = "https://github.com/jaameyaw";

const footerSectionHeading =
  "relative font-semibold text-xs uppercase tracking-[0.3em] text-white mb-7 pb-3 after:absolute after:left-0 after:bottom-0 after:block after:h-[2px] after:w-12 after:rounded-full after:bg-gradient-to-r after:from-primary after:to-teal/80 after:content-['']";

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden text-white"
      style={{ background: "linear-gradient(135deg, #071510 0%, #0d2018 55%, #0a1c16 100%)" }}
    >
      {/* Ambient glow */}
      <div className="absolute -left-32 top-0 w-[420px] h-[420px] rounded-full bg-primary/8 blur-[120px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-[280px] h-[280px] rounded-full bg-teal/8 blur-[90px] pointer-events-none translate-y-1/3" />



      <div className="relative w-full px-6 sm:px-8 lg:px-8 xl:px-12 2xl:px-20 pt-16 pb-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-10 lg:gap-x-10 lg:gap-y-12 xl:gap-12">

          {/* Brand — row 1 left on lg (with Quick Links); col 1 on xl+ */}
          <div className="sm:col-span-2 lg:col-span-1 xl:col-span-1 min-w-0">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <Image
                src="/logo-laptop.png"
                alt="SCHC Logo"
                width={56}
                height={56}
                className="rounded-full object-contain w-14 h-14 bg-white p-1"
              />
              <div className="leading-tight">
                <p className="font-bold text-base tracking-tight">Sylfi&apos;s Child Health Corner</p>
                <p className="text-primary text-xs font-semibold tracking-[0.28em] uppercase mt-1">
                  SCHC · Ghana
                </p>
              </div>
            </Link>

            <p className="text-gray-300 text-sm leading-relaxed mb-5 max-w-sm sm:text-[0.9375rem] lg:max-w-none">
              Empowering families and caregivers to prioritize children&apos;s health
              through education, advocacy, and community engagement.
            </p>

            <p className="text-primary font-semibold text-sm mb-6 leading-relaxed sm:text-[0.9375rem]">
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
              className="inline-flex items-center px-4 py-2 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary-dark transition-colors duration-200"
            >
              Support Us
            </Link>
          </div>

          {/* Quick Links — row 1 right on lg */}
          <div className="min-w-0 lg:pl-4 xl:pl-6">
            <h3 className={footerSectionHeading}>Quick Links</h3>
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
            <h3 className={footerSectionHeading}>Programs</h3>
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
            <h3 className={footerSectionHeading}>Contact Us</h3>
            <ul className="space-y-4 text-gray-300 text-sm sm:text-[0.9375rem]">
              <li className="flex items-start gap-2.5">
                <MapPinIcon className="w-5 h-5 mt-0.5 shrink-0 text-primary" />
                <span>{siteConfig.location.full}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MailIcon className="w-5 h-5 mt-0.5 shrink-0 text-primary" />
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-primary transition-colors break-all"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <PhoneIcon className="w-5 h-5 mt-0.5 shrink-0 text-primary" />
                <div className="space-y-1.5">
                  <a href={`tel:${siteConfig.phone.tel}`} className="block hover:text-primary transition-colors">
                    {siteConfig.phone.display}
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
        <div className="w-full px-6 sm:px-8 lg:px-8 xl:px-12 2xl:px-20 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-white/70 text-sm">
          <p>&copy; {new Date().getFullYear()} Sylfi&apos;s Child Health Corner (SCHC). All rights reserved.</p>
          <p className="text-white/60">
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
