import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
  action,
  dark = false,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
  action?: ReactNode;
  dark?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "sm:flex-row sm:items-end sm:justify-between",
        className
      )}
    >
      <div className={cn("flex flex-col gap-3", align === "center" && "items-center")}>
        {eyebrow && (
          <span
            className={cn(
              "inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em]",
              dark ? "text-sand-300" : "text-forest-700"
            )}
          >
            <span className={cn("h-1.5 w-1.5 rounded-full", dark ? "bg-sand-300" : "bg-forest-600")} />
            {eyebrow}
          </span>
        )}
        <h2
          className={cn(
            "text-3xl sm:text-4xl lg:text-[2.75rem] font-medium leading-[1.1] text-balance",
            dark ? "text-white" : "text-charcoal-900"
          )}
        >
          {title}
        </h2>
        {description && (
          <p className={cn("max-w-xl text-base sm:text-lg leading-relaxed", dark ? "text-white/70" : "text-charcoal-500")}>
            {description}
          </p>
        )}
      </div>
      {action && <div className="shrink-0">{action}</div>}
    </div>
  );
}
