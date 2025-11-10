import React from "react";

interface VisuallyHiddenProps {
  children: React.ReactNode;
}

/**
 * Component to visually hide content while keeping it accessible to screen readers
 */
export function VisuallyHidden({ children }: VisuallyHiddenProps) {
  return <span className="sr-only">{children}</span>;
}
