"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { Baby, HeartHandshake, Megaphone, Building2 } from "lucide-react";

const stats = [
  {
    target: 400,
    suffix: "+",
    label: "Children Reached",
    icon: <Baby size={36} strokeWidth={1.6} />,
    bg: "bg-primary/10",
    color: "text-primary",
    border: "border-primary/20",
  },
  {
    target: 50,
    suffix: "+",
    label: "Active Volunteers",
    icon: <HeartHandshake size={36} strokeWidth={1.6} />,
    bg: "bg-teal/10",
    color: "text-teal",
    border: "border-teal/20",
  },
  {
    target: 6,
    suffix: "+",
    label: "Outreach Programs",
    icon: <Megaphone size={36} strokeWidth={1.6} />,
    bg: "bg-primary/10",
    color: "text-primary",
    border: "border-primary/20",
  },
  {
    target: 10,
    suffix: "+",
    label: "Communities Supported",
    icon: <Building2 size={36} strokeWidth={1.6} />,
    bg: "bg-teal/10",
    color: "text-teal",
    border: "border-teal/20",
  },
];

function CountUp({
  target,
  suffix = "",
  duration = 2,
  delay = 0,
}: {
  target: number;
  suffix?: string;
  duration?: number;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const count = useMotionValue(0);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  useEffect(() => {
    if (!inView) return;
    const controls = animate(count, target, {
      duration,
      delay,
      ease: "easeOut",
      onUpdate(v) {
        if (ref.current) {
          ref.current.textContent = Math.round(v).toLocaleString() + suffix;
        }
      },
    });
    return controls.stop;
  }, [inView, target, suffix, duration, delay, count]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function ImpactStats() {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-white to-gray-50/60">
      <div className="max-w-[1400px] xl:max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-20">

        {/* Section heading — consistent pill style */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-14"
        >
          <span className="inline-block px-3.5 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.2em] text-primary bg-green-50 rounded-full mb-4">
            Our Impact
          </span>
          <h2 className="text-[1.6rem] sm:text-[2rem] font-semibold tracking-tight leading-[1.1] text-dark-text">
            Making a Difference
          </h2>
        </motion.div>

        {/* Stats grid — 2-col on mobile, 4-col on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`flex flex-col items-center text-center rounded-2xl border ${stat.border} bg-white px-4 py-6 sm:px-5 sm:py-7 shadow-sm hover:shadow-md transition-shadow duration-300`}
            >
              {/* Icon box */}
              <div
                className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl ${stat.bg} flex items-center justify-center mb-3 sm:mb-4 ${stat.color} shrink-0`}
              >
                {stat.icon}
              </div>

              {/* Number */}
              <p className="text-[1.9rem] sm:text-[2.25rem] font-semibold tracking-tight leading-none text-dark-text tabular-nums">
                <CountUp
                  target={stat.target}
                  suffix={stat.suffix}
                  duration={2}
                  delay={i * 0.15}
                />
              </p>

              {/* Label */}
              <p className="mt-2 text-[0.72rem] sm:text-[0.78rem] font-semibold uppercase tracking-[0.16em] text-slate-500">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
