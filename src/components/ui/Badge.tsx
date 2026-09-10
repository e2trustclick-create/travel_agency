import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function Badge({
  children,
  className,
  variant = "light",
}: {
  children: ReactNode;
  className?: string;
  variant?: "light" | "dark" | "forest" | "sand";
}) {
  const variants: Record<string, string> = {
    light: "bg-white/90 text-charcoal-800",
    dark: "bg-charcoal-900/80 text-white",
    forest: "bg-forest-600 text-white",
    sand: "bg-sand-200 text-sand-800",
  };
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium backdrop-blur-sm",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
