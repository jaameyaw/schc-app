"use client";

import { motion, useReducedMotion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";
import {
  Bank,
  DeviceMobile,
  MapPin,
  Package,
  Phone,
  ArrowSquareOut,
} from "@phosphor-icons/react";
import DonationCopyField from "./DonationCopyField";

const ACCOUNT_NAME = "SYLFIS CHILD HEALTH CORNER LBG";
const PHONE = "+233 54 712 4909";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=KNUST+Kumasi+Ghana";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 20 },
  },
};

function DonationStepsTimeline({ steps }: { steps: string[] }) {
  return (
    <ol className="relative space-y-0" aria-label="Steps">
      {steps.map((step, i) => {
        const isLast = i === steps.length - 1;
        return (
          <li key={step} className="relative flex gap-3">
            <div className="flex w-5 shrink-0 flex-col items-center">
              <span
                className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/12 text-[0.65rem] font-bold tabular-nums text-primary"
                aria-hidden
              >
                {i + 1}
              </span>
              {!isLast ? (
                <span
                  className="my-1 w-px flex-1 min-h-[0.65rem] bg-primary/25"
                  aria-hidden
                />
              ) : null}
            </div>
            <p
              className={[
                "min-w-0 flex-1 text-[0.8rem] leading-snug text-gray-600",
                isLast ? "pb-0" : "pb-3",
              ].join(" ")}
            >
              {step}
            </p>
          </li>
        );
      })}
    </ol>
  );
}

function PatternOverlay() {
  return (
    <svg
      className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.4]"
      aria-hidden
    >
      <defs>
        <pattern
          id="donate-dots"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="2" cy="2" r="1" fill="currentColor" className="text-primary/8" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#donate-dots)" />
    </svg>
  );
}

interface MethodCardProps {
  accent: string;
  accentBg: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  steps: string[];
  children: React.ReactNode;
  className?: string;
}

type MethodActionVariant = "maps" | "call";

const methodActionStyles: Record<
  MethodActionVariant,
  { shell: string; hover: string; focus: string; iconChip: string }
> = {
  maps: {
    shell:
      "bg-gradient-to-br from-teal via-[#24b8bd] to-[#1a9ba0] text-white shadow-[0_12px_32px_-14px_rgba(39,194,199,0.65)] ring-1 ring-inset ring-white/25",
    hover:
      "hover:shadow-[0_16px_40px_-12px_rgba(39,194,199,0.72)] hover:brightness-[1.04]",
    focus: "focus-visible:ring-teal/80",
    iconChip: "bg-white/14 text-white",
  },
  call: {
    shell:
      "bg-gradient-to-br from-[#178f3d] via-primary to-[#3dd068] text-white shadow-[0_12px_32px_-14px_rgba(31,168,74,0.55)] ring-1 ring-inset ring-white/25",
    hover:
      "hover:shadow-[0_16px_40px_-12px_rgba(31,168,74,0.62)] hover:brightness-[1.04]",
    focus: "focus-visible:ring-primary/80",
    iconChip: "bg-white/14 text-white",
  },
};

function MethodActionLink({
  variant,
  href,
  external,
  icon,
  eyebrow,
  title,
  trailing,
}: {
  variant: MethodActionVariant;
  href: string;
  external?: boolean;
  icon: React.ReactNode;
  eyebrow: string;
  title: string;
  trailing?: React.ReactNode;
}) {
  const styles = methodActionStyles[variant];

  return (
    <a
      href={href}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : undefined)}
      className={[
        "group relative flex min-h-[3.25rem] w-full items-center gap-3 overflow-hidden rounded-2xl px-3.5 py-3 transition-[box-shadow,filter,transform] duration-300 active:scale-[0.99]",
        styles.shell,
        styles.hover,
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        styles.focus,
      ].join(" ")}
    >
      <span
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl shadow-[inset_0_1px_0_rgba(255,255,255,0.22)] ${styles.iconChip}`}
        aria-hidden
      >
        {icon}
      </span>
      <span className="min-w-0 flex-1 text-left">
        <span className="block text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-white/70">
          {eyebrow}
        </span>
        <span className="mt-0.5 block truncate text-[0.95rem] font-semibold leading-tight tracking-tight">
          {title}
        </span>
      </span>
      {trailing ? (
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-black/10 text-white/90 transition-colors duration-300 group-hover:bg-black/15 group-hover:text-white">
          {trailing}
        </span>
      ) : null}
    </a>
  );
}

function MethodCard({
  accent,
  accentBg,
  icon,
  title,
  description,
  steps,
  children,
  className = "",
}: MethodCardProps) {
  return (
    <motion.article
      variants={itemVariants}
      className={`group relative flex h-full flex-col overflow-hidden rounded-[1.35rem] border border-gray-100/80 bg-transparent shadow-[0_16px_48px_-20px_rgba(31,45,47,0.14)] transition-shadow duration-300 hover:shadow-[0_24px_56px_-18px_rgba(31,45,47,0.18)] ${className}`}
    >
      <div className={`h-1 w-full ${accent}`} aria-hidden />
      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="mb-4 flex items-start gap-3.5">
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${accentBg} shadow-[inset_0_1px_0_rgba(255,255,255,0.25)]`}
          >
            {icon}
          </div>
          <div className="min-w-0 pt-0.5">
            <h3 className="font-section text-[1.05rem] font-semibold leading-tight tracking-tight text-dark-text text-balance sm:text-[1.12rem]">
              {title}
            </h3>
            <p className="mt-1.5 text-[0.88rem] leading-[1.65] text-gray-600 text-pretty">
              {description}
            </p>
          </div>
        </div>

        <div className="mb-5 rounded-lg border border-gray-100/80 bg-light-bg/50 px-3 py-2.5">
          <DonationStepsTimeline steps={steps} />
        </div>

        <div className="mt-auto flex flex-col gap-3">{children}</div>
      </div>
    </motion.article>
  );
}

export default function DonationMethodsSection() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="donate-methods"
      aria-label="How to give"
      className="relative mt-3 sm:mt-4 lg:mt-6"
    >
      <div
        className="pointer-events-none absolute -left-8 top-0 h-64 w-64 rounded-full bg-primary/[0.06] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -right-4 bottom-0 h-72 w-72 rounded-full bg-teal/[0.07] blur-3xl"
        aria-hidden
      />

      {/* Cards — 2×2 grid (not 4 equal strip) */}
      <div className="relative overflow-hidden rounded-[1.35rem] border border-gray-100/60 py-4 sm:py-5 lg:rounded-[1.75rem] lg:p-6">
        <PatternOverlay />
        <motion.div
          variants={containerVariants}
          initial={reduceMotion ? false : "hidden"}
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="relative grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-7 xl:gap-8"
        >
          <MethodCard
            accent="bg-[#FFCC00]"
            accentBg="bg-[#FFCC00]"
            icon={
              <span className="text-lg font-black tracking-tight text-[#1a1a1a]">
                M
              </span>
            }
            title="MTN Mobile Money"
            description="Fastest way to give from your phone. Open MoMo, send to our merchant, add your reference."
            steps={[
              "Open MoMo",
              "Send payment",
              "Add program name + your name",
            ]}
          >
            <DonationCopyField label="Account name" value={ACCOUNT_NAME} />
            <DonationCopyField label="Phone number" value="0248376721" mono />
            <DonationCopyField label="Merchant ID" value="083750" mono />
          </MethodCard>

          <MethodCard
            accent="bg-primary"
            accentBg="bg-primary/12 text-primary"
            icon={<Bank className="h-6 w-6" weight="duotone" aria-hidden />}
            title="Bank transfer"
            description="Ideal for larger gifts and formal transfers through GCB Bank."
            steps={[
              "Log into banking app",
              "Transfer to account below",
              "Use reference",
            ]}
          >
            <DonationCopyField label="Bank" value="GCB BANK PLC" />
            <DonationCopyField
              label="Account number"
              value="6281180003338"
              mono
            />
            <DonationCopyField label="Account name" value={ACCOUNT_NAME} />
          </MethodCard>

          <MethodCard
            accent="bg-teal"
            accentBg="bg-teal/12 text-teal"
            icon={<MapPin className="h-6 w-6" weight="duotone" aria-hidden />}
            title="Visit us"
            description="We are based at KNUST, Kumasi. Please call before bringing items in person."
            steps={["Call our team", "Confirm drop-off", "Visit KNUST, Kumasi"]}
          >
            <div className="rounded-xl border border-gray-100/90 bg-light-bg/80 p-3.5">
              <p className="text-[0.72rem] font-medium uppercase tracking-[0.12em] text-gray-500">
                Location
              </p>
              <p className="mt-1 text-[0.95rem] font-semibold text-dark-text">
                KNUST, Kumasi, Ghana
              </p>
            </div>
            <MethodActionLink
              variant="maps"
              href={MAPS_URL}
              external
              eyebrow="KNUST, Kumasi"
              title="Open in Google Maps"
              icon={<MapPin className="h-5 w-5" weight="fill" aria-hidden />}
              trailing={
                <ArrowSquareOut className="h-4 w-4" weight="bold" aria-hidden />
              }
            />
            <p className="text-center text-[0.85rem] text-gray-600">
              Call before you visit:{" "}
              <a
                href={`tel:${PHONE.replace(/\s/g, "")}`}
                className="font-semibold text-primary hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
              >
                {PHONE}
              </a>
            </p>
          </MethodCard>

          <MethodCard
            accent="bg-primary-dark"
            accentBg="bg-primary-dark/12 text-primary-dark"
            icon={<Package className="h-6 w-6" weight="duotone" aria-hidden />}
            title="Donate items or call"
            description="Have uniforms, books, supplies, or questions? Speak with our team directly."
            steps={[
              "Call foundation line",
              "Describe your gift",
              "Arrange handover",
            ]}
          >
            <ul className="space-y-2 rounded-xl border border-gray-100/90 bg-light-bg/80 p-3.5">
              {[
                "School uniforms and clothing",
                "Books and learning materials",
                "Medical and hygiene supplies",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2 text-[0.88rem] leading-snug text-gray-700"
                >
                  <span
                    className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
            <MethodActionLink
              variant="call"
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              eyebrow="Speak with our team"
              title={PHONE}
              icon={<Phone className="h-5 w-5" weight="fill" aria-hidden />}
            />
          </MethodCard>
        </motion.div>
      </div>

      {/* Reference + contact */}
      <motion.aside
        initial={reduceMotion ? false : { opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.45, delay: 0.1 }}
        className="mx-auto mt-10 max-w-3xl"
      >
        <div className="rounded-2xl border border-amber-200/80 bg-amber-50/90 p-5 sm:p-6">
          <div className="mb-3 flex items-center gap-2">
            <DeviceMobile
              className="h-5 w-5 text-amber-700"
              weight="duotone"
              aria-hidden
            />
            <p className="text-[0.95rem] font-semibold text-amber-900">
              Payment reference guide
            </p>
          </div>
          <ul className="space-y-2 text-[0.88rem] leading-relaxed text-amber-800/95">
            <li>
              Use <strong className="font-semibold">&quot;Dues&quot;</strong> for
              membership payments
            </li>
            <li>Use the campaign name for program-specific donations</li>
            <li>Include your name for receipt and acknowledgment</li>
          </ul>
        </div>

        <p className="mt-6 text-center text-[0.9rem] leading-relaxed text-gray-500">
          Questions about donations?{" "}
          <a
            href="mailto:childhealthcorner@gmail.com"
            className="font-medium text-primary transition-colors hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 rounded"
          >
            childhealthcorner@gmail.com
          </a>
        </p>
      </motion.aside>
    </section>
  );
}
