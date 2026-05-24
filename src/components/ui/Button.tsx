import Link from "next/link";

interface ButtonProps {
  href?: string;
  variant?: "primary" | "teal" | "white" | "outline";
  size?: "sm" | "lg";
  external?: boolean;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const base = "inline-flex items-center justify-center font-semibold rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2";

const variants: Record<string, string> = {
  primary: "bg-primary text-white hover:bg-primary-dark focus:ring-primary",
  teal: "bg-teal text-white hover:bg-teal/90 focus:ring-teal",
  white: "bg-white text-primary hover:bg-white/90 focus:ring-white",
  outline: "bg-transparent border-2 border-current focus:ring-current",
};

const sizes: Record<string, string> = {
  sm: "px-5 py-2.5 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export default function Button({
  href,
  variant = "primary",
  size = "lg",
  external = false,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = [base, variants[variant], sizes[size], className].filter(Boolean).join(" ");

  if (href && external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {children}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
