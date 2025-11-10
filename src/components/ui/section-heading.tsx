import React from "react";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  kicker?: string;
  align?: "left" | "center";
  className?: string;
}

/**
 * Consistent section heading component
 */
export function SectionHeading({
  title,
  subtitle,
  kicker,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "space-y-4",
        align === "center" && "text-center",
        className
      )}
    >
      {kicker && (
        <p className="text-sm font-medium tracking-wide text-primary uppercase">
          {kicker}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
