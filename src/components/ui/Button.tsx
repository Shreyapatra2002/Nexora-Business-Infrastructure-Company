import Link from "next/link";
import type { ReactNode } from "react";

type Props = {
  href?: string;
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
  disabled?: boolean;
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-medium tracking-wide transition-all duration-300";

const variants = {
  primary:
    "bg-gradient-gold text-nexora-black shadow-[0_0_24px_rgba(201,162,39,0.25)] hover:shadow-[0_0_36px_rgba(201,162,39,0.4)] hover:brightness-110",
  outline:
    "border border-nexora-gold/60 text-nexora-gold-light hover:border-nexora-gold hover:bg-nexora-gold/10",
  ghost: "text-nexora-gold-light hover:text-white hover:bg-white/5",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
  disabled,
}: Props) {
  const cls = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={cls}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={`${cls} disabled:pointer-events-none disabled:opacity-45`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
