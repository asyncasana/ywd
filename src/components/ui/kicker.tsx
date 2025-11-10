import React from "react";
import { cn } from "@/lib/utils";

interface KickerProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Small text component typically used above headings
 */
export function Kicker({ children, className }: KickerProps) {
  return (
    <p
      className={cn(
        "text-sm font-medium tracking-wide text-primary uppercase",
        className
      )}
    >
      {children}
    </p>
  );
}
