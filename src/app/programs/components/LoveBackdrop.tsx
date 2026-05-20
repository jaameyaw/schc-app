interface LoveBackdropProps {
  variant?: "default" | "subtle";
}

function Heart({
  className = "",
  size = 48,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 21s-7.5-4.6-9.6-9.2C1 8.3 3 5 6.3 5c2 0 3.6 1 4.7 2.6.4.5 1.2.5 1.6 0C13.7 6 15.3 5 17.3 5c3.3 0 5.3 3.3 3.9 6.8C19.5 16.4 12 21 12 21z" />
    </svg>
  );
}

export default function LoveBackdrop({
  variant = "default",
}: LoveBackdropProps) {
  const isSubtle = variant === "subtle";

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Gradient blob top-left (primary) */}
      <div
        className={`absolute -top-32 -left-32 w-72 h-72 md:w-[28rem] md:h-[28rem] rounded-full bg-primary blur-3xl ${
          isSubtle ? "opacity-[0.06]" : "opacity-[0.1]"
        }`}
      />

      {/* Scattered hearts */}
      <Heart
        size={56}
        className="hidden md:block absolute top-[8%] right-[12%] text-primary/[0.1] rotate-[-12deg]"
      />
      <Heart
        size={36}
        className="absolute top-[28%] left-[6%] md:left-[8%] text-teal/[0.12] rotate-[18deg]"
      />
      <Heart
        size={72}
        className="hidden lg:block absolute bottom-[20%] right-[8%] text-primary/[0.09] rotate-[8deg]"
      />
      <Heart
        size={40}
        className="absolute bottom-[12%] left-[14%] text-teal/[0.11] rotate-[-6deg]"
      />
    </div>
  );
}
