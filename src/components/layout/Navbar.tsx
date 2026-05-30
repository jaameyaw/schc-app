"use client";

import { useState, useEffect, useRef, type MouseEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { Heart as HeartPhosphor } from "@phosphor-icons/react";

type NavLink = { href: string; label: string };

const navLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/volunteer", label: "Volunteer" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

const spring = { type: "spring" as const, stiffness: 380, damping: 32 };

function DonateButton({ className = "" }: { className?: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const offsetX = useMotionValue(0);
  const offsetY = useMotionValue(0);
  const x = useSpring(offsetX, { stiffness: 280, damping: 22 });
  const y = useSpring(offsetY, { stiffness: 280, damping: 22 });

  const onMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    offsetX.set((e.clientX - rect.left - rect.width / 2) * 0.12);
    offsetY.set((e.clientY - rect.top - rect.height / 2) * 0.12);
  };

  const onLeave = () => {
    offsetX.set(0);
    offsetY.set(0);
  };

  return (
    <motion.div style={{ x, y }} className={className}>
      <Link
        ref={ref}
        href="/donate"
        onMouseMove={onMove}
        onMouseLeave={onLeave}
        className="group relative inline-flex items-center gap-1.5 overflow-hidden rounded-lg bg-primary px-3.5 py-1.5 text-[13px] font-semibold text-white shadow-[0_6px_20px_-8px_rgba(31,168,74,0.45)] transition-[box-shadow] duration-300 hover:shadow-[0_10px_24px_-6px_rgba(31,168,74,0.5)] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2 xl:px-4 xl:py-1.5 xl:text-sm"
      >
        <span
          aria-hidden
          className="pointer-events-none absolute inset-0 translate-y-full bg-primary-dark/90 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-y-0"
        />
        <HeartPhosphor
          weight="fill"
          className="relative z-10 size-3.5 shrink-0 xl:size-4"
          aria-hidden
        />
        <span className="relative z-10">Donate</span>
      </Link>
    </motion.div>
  );
}

function LaptopNavLinks() {
  const pathname = usePathname();

  return (
    <ul className="flex items-center gap-0.5 rounded-xl bg-slate-100/90 p-1 ring-1 ring-inset ring-slate-200/70">
      {navLinks.map(({ href, label }) => {
        const active = pathname === href;
        return (
          <li key={href} className="relative">
            {active && (
              <motion.span
                layoutId="nav-active-pill"
                className="absolute inset-0 rounded-lg bg-white shadow-[0_1px_3px_rgba(31,45,47,0.08),inset_0_1px_0_rgba(255,255,255,0.9)] ring-1 ring-slate-200/80"
                transition={spring}
              />
            )}
            <Link
              href={href}
              className={`relative z-10 block px-2.5 xl:px-3 py-1 text-[13px] xl:text-sm font-medium tracking-tight transition-colors duration-200 ${active ? "text-primary" : "text-slate-500 hover:text-dark-text"
                }`}
            >
              {label}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => {
      if (window.innerWidth < 1024) {
        setScrolled(window.scrollY > 20);
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  useEffect(() => {
    // Close the mobile menu when the route changes.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Classic navbar — tablet & mobile only (< lg / 1024px) */}
      <header
        className={`lg:hidden sticky top-0 z-50 w-full transition-all duration-300 ${scrolled
            ? "bg-white shadow-[0_2px_20px_rgba(0,0,0,0.08)]"
            : "bg-white/98 backdrop-blur-md"
          }`}
      >
        <div className="h-[3px] bg-gradient-to-r from-primary/40 via-primary to-teal/50" />

        <nav className="w-full px-6">
          <div className="flex h-[70px] items-center justify-between">
            <Link
              href="/"
              className="group flex shrink-0 items-center gap-1 sm:gap-1"
            >
              <Image
                src="/schc logo.jpeg"
                alt="SCHC Logo"
                width={56}
                height={56}
                quality={100}
                sizes="64px"
                className="h-16 w-16 object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="hidden leading-tight sm:block">
                <p className="text-[14px] font-bold tracking-tight text-dark-text">
                  Sylfi&apos;s Child Health Corner
                </p>
                <p className="mt-0.5 hidden text-[11px] font-semibold uppercase tracking-[0.18em] text-primary md:block">
                  SCHC · Ghana
                </p>
              </div>
            </Link>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="rounded-md p-2 text-dark-text transition-colors hover:bg-gray-100"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              <div className="flex w-5 flex-col gap-1.5">
                <span
                  className={`block h-0.5 bg-current transition-transform duration-300 ${isOpen ? "translate-y-2 rotate-45" : ""}`}
                />
                <span
                  className={`block h-0.5 bg-current transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}
                />
                <span
                  className={`block h-0.5 bg-current transition-transform duration-300 ${isOpen ? "-translate-y-2 -rotate-45" : ""}`}
                />
              </div>
            </button>
          </div>
        </nav>

        <div className="h-px bg-gradient-to-r from-transparent via-gray-200/80 to-transparent" />

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden border-t border-gray-100 bg-white"
            >
              <div className="flex w-full flex-col gap-1 px-6 py-4">
                {navLinks.map(({ href, label }) => (
                  <Link
                    key={href}
                    href={href}
                    className={`rounded-lg px-4 py-3 text-sm font-medium transition-colors duration-200 ${pathname === href
                        ? "bg-primary/[0.08] font-semibold text-primary"
                        : "text-dark-text hover:bg-gray-50 hover:text-primary"
                      }`}
                  >
                    {label}
                  </Link>
                ))}
                <Link
                  href="/donate"
                  className="mt-2 rounded-full bg-gradient-to-r from-primary to-primary-dark px-4 py-3 text-center text-sm font-semibold text-white transition-all duration-200 hover:shadow-md hover:shadow-primary/30"
                >
                  Donate Now
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Redesigned navbar — laptop (lg) & laptop L (xl): single floating pill only */}
      <header className="pointer-events-none fixed inset-x-0 top-0 z-50 hidden justify-center px-6 pt-2 lg:flex xl:px-8">
        <nav
          aria-label="Main navigation"
          className="pointer-events-auto flex h-11 w-full max-w-7xl items-center justify-between gap-3 rounded-xl border border-slate-200/80 bg-white px-3.5 py-0.5 shadow-[0_8px_32px_-14px_rgba(31,45,47,0.14)] xl:h-12 xl:gap-4 xl:px-4"
        >
          <Link
            href="/"
            className="group flex min-w-0 shrink items-center gap-2"
          >
            <div className="relative shrink-0">
              <div className="absolute inset-0 rounded-xl bg-primary/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <Image
                src="/logo-laptop.png"
                alt="Sylfi's Child Health Corner logo"
                width={40}
                height={40}
                quality={100}
                sizes="36px"
                className="relative h-8 w-8 object-contain transition-transform duration-300 group-hover:scale-[1.03] xl:h-9 xl:w-9"
              />
            </div>
            <div className="min-w-0 leading-none">
              <p className="truncate font-semibold tracking-tight text-dark-text text-[13px] xl:text-sm">
                Sylfi&apos;s Child Health Corner
              </p>
              <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.16em] text-primary/90 xl:text-[10px]">
                SCHC · Ghana
              </p>
            </div>
          </Link>

          <LaptopNavLinks />

          <DonateButton />
        </nav>
      </header>
    </>
  );
}
