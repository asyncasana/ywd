"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { User } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./theme-toggle";
import { MobileNav } from "./mobile-nav";
import { siteConfig } from "@/lib/site-config";
import { useScrollPosition } from "@/hooks/use-scroll-position";
import { cn } from "@/lib/utils";

/**
 * Site header with navigation
 */
export function SiteHeader() {
  const { isScrolled } = useScrollPosition();

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-lg border-b shadow-sm"
          : "bg-transparent"
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/logo-light.svg"
              alt="YWD - Yoga With Dash"
              width={120}
              height={40}
              className="dark:hidden"
              priority
            />
            <Image
              src="/logo-dark.svg"
              alt="YWD - Yoga With Dash"
              width={120}
              height={40}
              className="hidden dark:block"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-10 w-10 hidden lg:flex"
              asChild
            >
              <Link href="/profile">
                <User className="h-4 w-4" />
                <span className="sr-only">Profile</span>
              </Link>
            </Button>
            <ThemeToggle />
            <MobileNav />
          </div>
        </div>
      </Container>
    </header>
  );
}
