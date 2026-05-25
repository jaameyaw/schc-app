"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  HandHeart,
  HeartHandshake,
  Heart,
  Users,
  type LucideIcon,
} from "lucide-react";

interface CTA {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  color: "primary" | "teal";
  external?: boolean;
}

const ctas: CTA[] = [
  {
    icon: HandHeart,
    title: "Want to partner with us?",
    description: "Help provide uniforms and keep children in school.",
    href: "https://forms.gle/DrKn2VzfK66XzzKJ6",
    color: "primary",
    external: true,
  },
  {
    icon: HeartHandshake,
    title: "Interested in volunteering?",
    description: "Join us in feeding and caring for vulnerable children.",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSc45-Vnum5Q_kGUqy-OCVWuyHjdT6YvE1YODu7FF39XATF62A/viewform?usp=header",
    color: "teal",
    external: true,
  },
  {
    icon: Heart,
    title: "Become a sponsor",
    description: "Your support can be a miracle in a child's life.",
    href: "/donate",
    color: "primary",
  },
  {
    icon: Users,
    title: "Let's build lasting change",
    description: "Partner with us to empower communities.",
    href: "https://forms.gle/DrKn2VzfK66XzzKJ6",
    color: "teal",
    external: true,
  },
];

const cardStyles = {
  primary: {
    title: "text-primary",
    iconBg:
      "bg-gradient-to-br from-primary/15 via-primary/8 to-transparent",
    iconColor: "text-primary",
    accent: "from-primary/60 via-primary/20 to-transparent",
    ring: "group-hover:ring-primary/25",
    glow: "group-hover:shadow-[0_24px_48px_-16px_rgba(52,199,89,0.22)]",
  },
  teal: {
    title: "text-teal",
    iconBg: "bg-gradient-to-br from-teal/15 via-teal/8 to-transparent",
    iconColor: "text-teal",
    accent: "from-teal/60 via-teal/20 to-transparent",
    ring: "group-hover:ring-teal/25",
    glow: "group-hover:shadow-[0_24px_48px_-16px_rgba(39,194,199,0.22)]",
  },
} as const;

export default function ProgramCTAGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
      {ctas.map((cta, i) => {
        const styles = cardStyles[cta.color];
        const Icon = cta.icon;

        return (
          <motion.div
            key={cta.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.45, delay: i * 0.08 }}
          >
            <Link
              href={cta.href}
              target={cta.external ? "_blank" : undefined}
              rel={cta.external ? "noopener noreferrer" : undefined}
              className={`group relative block h-full overflow-hidden rounded-2xl border border-gray-100 bg-white p-5 md:p-6 lg:p-5 shadow-[0_4px_20px_-4px_rgba(31,45,47,0.06)] ring-1 ring-transparent ${styles.ring} ${styles.glow} transition-all duration-300 hover:-translate-y-1`}
            >
              <span
                aria-hidden
                className={`absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r ${styles.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
              />

              <div className="flex items-start gap-4 lg:gap-3">
                <div
                  className={`shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-2xl ${styles.iconBg} ring-1 ring-black/[0.04] flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-6deg]`}
                >
                  <Icon
                    className={`w-6 h-6 md:w-7 md:h-7 ${styles.iconColor}`}
                    strokeWidth={2}
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h3
                      className={`font-bold text-base md:text-[1.05rem] lg:text-base leading-snug ${styles.title}`}
                    >
                      {cta.title}
                    </h3>
                    <ArrowRight
                      className={`w-5 h-5 ${styles.iconColor} shrink-0 mt-0.5 transition-transform duration-300 group-hover:translate-x-1`}
                    />
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {cta.description}
                  </p>
                </div>
              </div>
            </Link>
          </motion.div>
        );
      })}
    </div>
  );
}
