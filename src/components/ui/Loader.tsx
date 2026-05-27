"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useClientMounted } from "@/hooks/useClientMounted";

const DEFAULT_MIN_MS = 900;

const overlayEase = [0.22, 1, 0.36, 1] as const;

type LoaderProps = {
  active: boolean;
  /** Minimum time the overlay stays visible once shown (ms). */
  minDuration?: number;
};

export default function Loader({
  active,
  minDuration = DEFAULT_MIN_MS,
}: LoaderProps) {
  const mounted = useClientMounted();
  const reduceMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const shownAtRef = useRef<number | null>(null);
  const hideTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const clearHideTimer = useCallback(() => {
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }
  }, []);

  useEffect(() => {
    clearHideTimer();

    if (active) {
      shownAtRef.current = Date.now();
      setVisible(true);
      return clearHideTimer;
    }

    if (shownAtRef.current === null) {
      setVisible(false);
      return clearHideTimer;
    }

    const elapsed = Date.now() - shownAtRef.current;
    const delay = Math.max(0, minDuration - elapsed);

    hideTimerRef.current = setTimeout(() => {
      setVisible(false);
      shownAtRef.current = null;
    }, delay);

    return clearHideTimer;
  }, [active, minDuration, clearHideTimer]);

  const overlayTransition = reduceMotion
    ? { duration: 0.12 }
    : { duration: 0.35, ease: overlayEase };

  const spinnerTransition = reduceMotion
    ? { duration: 0.12 }
    : { duration: 0.4, ease: overlayEase };

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {visible && (
        <motion.div
          role="status"
          aria-live="polite"
          aria-busy="true"
          aria-label="Loading"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={overlayTransition}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-dark-text/55 backdrop-blur-[4px]"
        >
          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.88 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, scale: 1 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.94 }}
            transition={spinnerTransition}
            className="relative flex h-16 w-16 items-center justify-center"
          >
            {!reduceMotion && (
              <motion.span
                aria-hidden
                className="absolute inset-0 rounded-full border-2 border-primary/25"
                animate={{ scale: [0.92, 1.1, 0.92], opacity: [0.45, 0.2, 0.45] }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            )}

            <span
              aria-hidden
              className={`loader-spinner absolute h-14 w-14 rounded-full border-[3px] border-primary/20 border-t-primary ${
                reduceMotion ? "" : "loader-spinner--animate"
              }`}
            />

            <span
              aria-hidden
              className="absolute h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_rgba(52,199,89,0.65)]"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
}
