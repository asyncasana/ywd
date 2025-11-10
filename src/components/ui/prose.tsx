import React from "react";
import { cn } from "@/lib/utils";

interface ProseProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Prose wrapper for styled typography content
 */
export function Prose({ children, className }: ProseProps) {
  return (
    <div
      className={cn(
        "prose prose-lg max-w-none",
        "prose-headings:text-foreground prose-p:text-muted-foreground",
        "prose-a:text-primary prose-a:no-underline hover:prose-a:underline",
        "prose-strong:text-foreground prose-code:text-foreground",
        "prose-blockquote:border-l-primary prose-blockquote:text-muted-foreground",
        className
      )}
    >
      {children}
    </div>
  );
}
