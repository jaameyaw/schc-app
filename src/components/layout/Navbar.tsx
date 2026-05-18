"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Heart } from "lucide-react";

type NavLink = { href: string; label: string; mobileLabel?: string };

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/volunteer", label: "Volunteer"},
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-[0_2px_20px_rgba(0,0,0,0.08)]"
          : "bg-white/98 backdrop-blur-md"
      }`}
    >
      {/* Top accent strip */}
      <div className="h-[3px] bg-gradient-to-r from-primary/40 via-primary to-teal/50" />

      <nav className="w-full px-6 lg:px-8 xl:px-20">
        <div className="flex items-center justify-between h-[70px] lg:h-[80px] xl:h-[88px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 shrink-0 group">
            <div className="relative">
              <Image
                src="/images/logo.jpeg"
                alt="SCHC Logo"
                width={56}
                height={56}
                className="rounded-full object-cover w-11 h-11 lg:w-12 lg:h-12 xl:w-14 xl:h-14 transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute inset-0 rounded-full ring-2 ring-primary/20 group-hover:ring-primary/40 transition-all duration-300" />
            </div>
            <div className="hidden sm:block leading-tight">
              <p className="font-bold text-dark-text text-[14px] lg:text-[15px] xl:text-[18px] tracking-tight">
                Sylfi&apos;s Child Health Corner
              </p>
              <p className="hidden xl:block text-primary text-[11px] font-semibold tracking-[0.18em] uppercase mt-0.5">
                SCHC · Ghana
              </p>
            </div>
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center gap-0">
            {navLinks.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`relative px-2.5 xl:px-5 py-2 text-[13px] xl:text-[17px] font-medium rounded-lg transition-all duration-200 block ${
                      active
                        ? "text-primary bg-primary/[0.08]"
                        : "text-gray-500 hover:text-dark-text hover:bg-gray-50"
                    }`}
                  >
                    {label}
                    {active && (
                      <motion.span
                        layoutId="nav-indicator"
                        className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full"
                      />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          {/* Donate CTA */}
          <Link
            href="/donate"
            className="hidden lg:flex items-center gap-1.5 px-4 xl:px-6 py-2 xl:py-2.5 bg-gradient-to-r from-primary to-primary-dark text-white text-[13px] xl:text-[15px] font-semibold rounded-full hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 shadow-md shadow-primary/20"
          >
            <Heart className="w-3.5 h-3.5 xl:w-4 xl:h-4 fill-white" />
            Donate
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-md text-dark-text hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-5 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-current transition-transform duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block h-0.5 bg-current transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 bg-current transition-transform duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </div>
          </button>
        </div>
      </nav>

      {/* Bottom separator */}
      <div className="h-px bg-gradient-to-r from-transparent via-gray-200/80 to-transparent" />

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden overflow-hidden bg-white border-t border-gray-100"
          >
            <div className="w-full px-6 py-4 flex flex-col gap-1">
              {navLinks.map(({ href, label, mobileLabel }) => (
                <Link
                  key={href}
                  href={href}
                  className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200 ${
                    pathname === href
                      ? "text-primary bg-primary/[0.08] font-semibold"
                      : "text-dark-text hover:text-primary hover:bg-gray-50"
                  }`}
                >
                  {mobileLabel ?? label}
                </Link>
              ))}
              <Link
                href="/donate"
                className="mt-2 px-4 py-3 bg-gradient-to-r from-primary to-primary-dark text-white text-sm font-semibold rounded-full text-center hover:shadow-md hover:shadow-primary/30 transition-all duration-200"
              >
                Donate Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
