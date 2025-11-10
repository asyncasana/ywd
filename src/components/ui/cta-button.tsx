import React from "react";
import Link from "next/link";
import { Button } from "./button";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "ghost";
  size?: "default" | "lg";
  className?: string;
  disabled?: boolean;
}

/**
 * Call-to-Action button component that can be used as a link or button
 */
export function CTAButton({
  href,
  onClick,
  children,
  variant = "primary",
  size = "default",
  className,
  disabled,
}: CTAButtonProps) {
  const buttonProps = {
    className: cn(className),
    variant: variant === "primary" ? ("default" as const) : ("ghost" as const),
    size,
    disabled,
  };

  if (href && !disabled) {
    return (
      <Button asChild {...buttonProps}>
        <Link href={href}>{children}</Link>
      </Button>
    );
  }

  return (
    <Button onClick={onClick} {...buttonProps}>
      {children}
    </Button>
  );
}
