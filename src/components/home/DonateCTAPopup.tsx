"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Heart, X } from "lucide-react";

const SESSION_KEY = "schc-donate-cta-shown";
const SCROLL_THRESHOLD = 0.35;

const springTransition = {
  type: "spring" as const,
  stiffness: 320,
  damping: 28,
};

export default function DonateCTAPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const hasShownRef = useRef(false);
  const dialogRef = useRef<HTMLDivElement>(null);
  const scrollLockRef = useRef(0);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    setMounted(true);
  }, []);

  const close = useCallback(() => {
    setIsOpen(false);
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      /* sessionStorage unavailable */
    }
  }, []);

  useEffect(() => {
    try {
      if (sessionStorage.getItem(SESSION_KEY)) {
        hasShownRef.current = true;
        return undefined;
      }
    } catch {
      /* sessionStorage unavailable */
    }

    const checkScroll = () => {
      if (hasShownRef.current) return;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) return;
      if (window.scrollY / maxScroll >= SCROLL_THRESHOLD) {
        hasShownRef.current = true;
        setIsOpen(true);
      }
    };

    window.addEventListener("scroll", checkScroll, { passive: true });
    checkScroll();

    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  useEffect(() => {
    if (!isOpen) return undefined;

    scrollLockRef.current = window.scrollY;
    const prevOverflow = document.body.style.overflow;
    const prevPosition = document.body.style.position;
    const prevTop = document.body.style.top;
    const prevLeft = document.body.style.left;
    const prevRight = document.body.style.right;
    const prevWidth = document.body.style.width;

    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollLockRef.current}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };

    window.addEventListener("keydown", onKeyDown);
    dialogRef.current?.focus();

    return () => {
      document.body.style.overflow = prevOverflow;
      document.body.style.position = prevPosition;
      document.body.style.top = prevTop;
      document.body.style.left = prevLeft;
      document.body.style.right = prevRight;
      document.body.style.width = prevWidth;
      window.scrollTo(0, scrollLockRef.current);
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen, close]);

  const backdropMotion = reduceMotion
    ? { duration: 0.15 }
    : { duration: 0.35, ease: [0.22, 1, 0.36, 1] as const };

  const panelMotion = reduceMotion
    ? { duration: 0.15 }
    : springTransition;

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          <motion.button
            type="button"
            aria-label="Close donation prompt"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={backdropMotion}
            className="absolute inset-0 cursor-pointer bg-dark-text/60 backdrop-blur-[6px]"
            onClick={close}
          />

          {!reduceMotion && (
            <>
              <motion.div
                aria-hidden
                animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.5, 0.35] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                className="pointer-events-none absolute left-[12%] top-[18%] h-48 w-48 rounded-full bg-primary/30 blur-3xl"
              />
              <motion.div
                aria-hidden
                animate={{ scale: [1, 1.12, 1], opacity: [0.25, 0.45, 0.25] }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.2,
                }}
                className="pointer-events-none absolute bottom-[14%] right-[10%] h-56 w-56 rounded-full bg-teal/35 blur-3xl"
              />
            </>
          )}

          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="donate-cta-title"
            aria-describedby="donate-cta-desc"
            tabIndex={-1}
            initial={
              reduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: 28, scale: 0.96 }
            }
            animate={
              reduceMotion
                ? { opacity: 1 }
                : { opacity: 1, y: 0, scale: 1 }
            }
            exit={
              reduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: 16, scale: 0.98 }
            }
            transition={panelMotion}
            className="relative w-full max-w-[min(100%,28rem)] overflow-hidden rounded-[1.35rem] bg-white shadow-[0_28px_80px_-24px_rgba(31,45,47,0.45)] sm:max-w-md"
          >
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -right-10 -top-10 h-36 w-36 rounded-full bg-primary/[0.07] blur-2xl"
              animate={
                reduceMotion
                  ? undefined
                  : { y: [0, -6, 0], opacity: [0.5, 0.75, 0.5] }
              }
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              aria-hidden
              className="pointer-events-none absolute -bottom-12 -left-8 h-32 w-32 rounded-full bg-teal/[0.08] blur-2xl"
              animate={
                reduceMotion
                  ? undefined
                  : { y: [0, 8, 0], opacity: [0.4, 0.65, 0.4] }
              }
              transition={{
                duration: 7,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.8,
              }}
            />

            <div className="relative px-5 pb-6 pt-5 sm:px-7 sm:pb-8 sm:pt-6">
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...springTransition, delay: 0.08 }}
                className="relative mb-5 flex items-start justify-between gap-4"
              >
                <motion.div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-primary/15 bg-gradient-to-br from-primary/[0.12] to-teal/[0.08] shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]">
                  <Heart
                    size={20}
                    strokeWidth={2}
                    className="fill-primary text-primary-dark"
                    aria-hidden
                  />
                </motion.div>

                <button
                  type="button"
                  onClick={close}
                  aria-label="Close"
                  className="flex h-11 w-11 shrink-0 cursor-pointer items-center justify-center rounded-xl border border-dark-text/10 bg-light-bg text-dark-text/70 transition-colors duration-200 hover:border-dark-text/20 hover:bg-white hover:text-dark-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 active:scale-[0.97]"
                >
                  <X size={20} strokeWidth={2.25} aria-hidden />
                </button>
              </motion.div>

              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...springTransition, delay: 0.12 }}
                className="relative space-y-3 sm:space-y-4"
              >
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-primary-dark/80">
                  Make an impact
                </p>

                <h2
                  id="donate-cta-title"
                  className="text-balance text-[1.45rem] font-bold leading-[1.15] tracking-tight text-dark-text sm:text-[1.65rem]"
                >
                  Help Us Save a Child&apos;s Life
                </h2>

                <p
                  id="donate-cta-desc"
                  className="max-w-[36ch] text-[0.95rem] leading-relaxed text-dark-text/70 sm:text-base sm:leading-[1.65]"
                >
                  Every gift funds healthcare, nutrition, and support for
                  children who need it most. Give today and help a child grow
                  up healthy and strong.
                </p>
              </motion.div>

              <motion.div
                initial={reduceMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ ...springTransition, delay: 0.18 }}
                className="relative mt-6 flex flex-col gap-3 sm:mt-7 sm:flex-row sm:gap-3"
              >
                <Link
                  href="/donate"
                  onClick={close}
                  className="inline-flex min-h-11 flex-1 cursor-pointer items-center justify-center rounded-xl bg-gradient-to-r from-primary to-primary-dark px-4 py-3 text-center text-sm font-semibold text-white transition-all duration-200 hover:shadow-md hover:shadow-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 active:scale-[0.98]"
                >
                  Donate Now
                </Link>

                <Link
                  href="/about"
                  onClick={close}
                  className="group inline-flex min-h-11 flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl border border-primary/20 bg-light-bg px-4 py-3 text-sm font-semibold text-dark-text shadow-[inset_0_1px_0_rgba(255,255,255,0.8)] transition-all duration-200 hover:border-primary/45 hover:bg-primary/[0.07] hover:text-primary-dark hover:shadow-md hover:shadow-primary/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 active:scale-[0.98]"
                >
                  Learn More
                  <ArrowRight
                    size={16}
                    strokeWidth={2.25}
                    className="text-primary/60 transition-all duration-200 group-hover:translate-x-0.5 group-hover:text-primary-dark"
                    aria-hidden
                  />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
