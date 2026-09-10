import Link from "next/link";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "dark";
type Size = "sm" | "md" | "lg";

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-ocean-700 text-white hover:bg-ocean-800 shadow-soft hover:shadow-card",
  secondary:
    "bg-sand-400 text-charcoal-900 hover:bg-sand-500 shadow-soft hover:shadow-card",
  outline:
    "bg-white/90 text-charcoal-900 border border-charcoal-200 hover:border-charcoal-400 hover:bg-white",
  ghost: "bg-transparent text-charcoal-900 hover:bg-charcoal-100",
  dark: "bg-charcoal-900 text-white hover:bg-charcoal-800 shadow-soft",
};

const sizeClasses: Record<Size, string> = {
  sm: "h-9 px-4 text-sm gap-1.5",
  md: "h-11 px-5 text-[0.95rem] gap-2",
  lg: "h-14 px-7 text-base gap-2",
};

const base =
  "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 ease-out active:scale-[0.97] disabled:opacity-50 disabled:pointer-events-none whitespace-nowrap";

interface CommonProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: ReactNode;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(base, variantClasses[variant], sizeClasses[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
}: CommonProps & { href: string }) {
  return (
    <Link
      href={href}
      className={cn(base, variantClasses[variant], sizeClasses[size], className)}
    >
      {children}
    </Link>
  );
}
