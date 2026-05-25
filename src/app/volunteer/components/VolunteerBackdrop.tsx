import type { ReactNode } from "react";

type VolunteerBackdropVariant = "hero" | "primary" | "teal";

const dotGridConfigs = {
  primary: {
    id: "volunteer-primary-dots",
    fill: "rgba(52, 199, 89, 0.22)",
    spacing: 22,
    radius: 1.5,
  },
  teal: {
    id: "volunteer-teal-dots",
    fill: "rgba(39, 194, 199, 0.08)",
    spacing: 26,
    radius: 1.2,
  },
} as const;

function BackdropLayer({ children }: { children: ReactNode }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-[1] overflow-hidden"
    >
      {children}
    </div>
  );
}

function DotGrid({
  id,
  fill,
  spacing = 24,
  radius = 1.4,
}: {
  id: string;
  fill: string;
  spacing?: number;
  radius?: number;
}) {
  return (
    <svg className="absolute inset-0 h-full w-full">
      <defs>
        <pattern
          id={id}
          width={spacing}
          height={spacing}
          patternUnits="userSpaceOnUse"
        >
          <circle cx={spacing / 2} cy={spacing / 2} r={radius} fill={fill} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

function HeroBackdrop() {
  return (
    <BackdropLayer>
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/40 via-primary/20 to-teal/50" />
      <div className="absolute -right-10 -top-16 h-80 w-80 rounded-full bg-white/25 blur-3xl" />
      <div className="absolute -bottom-20 -left-12 h-96 w-96 rounded-full bg-teal/35 blur-3xl" />
      <div className="absolute right-[12%] top-[18%] h-40 w-40 rounded-full bg-white/10 blur-2xl" />
    </BackdropLayer>
  );
}

function DotGridSectionBackdrop({ variant }: { variant: "primary" | "teal" }) {
  const { id, fill, spacing, radius } = dotGridConfigs[variant];
  return (
    <BackdropLayer>
      <DotGrid id={id} fill={fill} spacing={spacing} radius={radius} />
    </BackdropLayer>
  );
}

export default function VolunteerBackdrop({
  variant,
}: {
  variant: VolunteerBackdropVariant;
}) {
  if (variant === "hero") return <HeroBackdrop />;
  return <DotGridSectionBackdrop variant={variant} />;
}
