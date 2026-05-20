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
}

const ctas: CTA[] = [
  {
    icon: HandHeart,
    title: "Want to partner with us?",
    description: "Help provide uniforms and keep children in school.",
    href: "/volunteer#partner",
    color: "primary",
  },
  {
    icon: HeartHandshake,
    title: "Interested in volunteering?",
    description: "Join us in feeding and caring for vulnerable children.",
    href: "/volunteer",
    color: "teal",
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
    href: "/volunteer#partner",
    color: "teal",
  },
];

export default function ProgramCTAGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
      {ctas.map((cta, i) => {
        const isTeal = cta.color === "teal";
        const titleColor = isTeal ? "text-teal" : "text-primary";
        const iconBg = isTeal ? "bg-teal/10" : "bg-primary/10";
        const iconColor = isTeal ? "text-teal" : "text-primary";
        const arrowColor = isTeal ? "text-teal" : "text-primary";
        const ringHover = isTeal
          ? "group-hover:ring-teal/30"
          : "group-hover:ring-primary/30";
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
              className={`group block h-full bg-white rounded-2xl p-5 md:p-6 lg:p-5 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(31,45,47,0.06)] ring-1 ring-transparent ${ringHover} hover:-translate-y-1 hover:shadow-[0_20px_40px_-12px_rgba(31,45,47,0.12)] transition-all duration-300`}
            >
              <div className="flex items-start gap-4 lg:gap-3">
                <div
                  className={`shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-2xl ${iconBg} flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-6deg]`}
                >
                  <Icon className={`w-6 h-6 md:w-7 md:h-7 ${iconColor}`} strokeWidth={2} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1.5">
                    <h3
                      className={`font-bold text-base md:text-[1.05rem] lg:text-base leading-snug ${titleColor}`}
                    >
                      {cta.title}
                    </h3>
                    <ArrowRight
                      className={`w-5 h-5 ${arrowColor} shrink-0 mt-0.5 transition-transform duration-300 group-hover:translate-x-1`}
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
