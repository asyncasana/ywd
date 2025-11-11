import React from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

/**
 * Basic card component with consistent styling
 */
export function Card({ children, className, hover = true }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl bg-card p-6 shadow-sm dark:bg-zinc-800/50",
        hover && "transition-all hover:shadow-lg hover:-translate-y-1",
        className
      )}
    >
      {children}
    </div>
  );
}
