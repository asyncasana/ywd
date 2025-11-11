"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";
import { useScrollPosition } from "@/hooks/use-scroll-position";

/**
 * Mobile navigation component
 */
export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldRender, setShouldRender] = useState(false);
  const [isAnimatingIn, setIsAnimatingIn] = useState(false);
  const { scrollY } = useScrollPosition();
  const lastScrollY = useRef(0);
  const openedAt = useRef(0);

  // Handle opening: mount, then trigger animation after a frame
  useEffect(() => {
    if (isOpen) {
      setShouldRender(true);
      openedAt.current = Date.now();
      // Trigger animation after mount
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsAnimatingIn(true);
        });
      });
    } else if (shouldRender) {
      // When closing, trigger close animation immediately
      setIsAnimatingIn(false);
      // Delay unmounting to allow close animation
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 400);
      return () => clearTimeout(timer);
    }
  }, [isOpen, shouldRender]);

  // Close on ANY scroll down after initial open delay
  useEffect(() => {
    const timeSinceOpened = Date.now() - openedAt.current;
    const scrollingDown = scrollY > lastScrollY.current;

    if (isOpen && scrollingDown && timeSinceOpened > 500) {
      setIsOpen(false);
    }

    lastScrollY.current = scrollY;
  }, [scrollY, isOpen]);

  return (
    <div className="lg:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen((prev) => !prev)}
        className="h-10 w-10"
      >
        {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        <span className="sr-only">Toggle menu</span>
      </Button>

      {shouldRender && (
        <div
          className={cn(
            "absolute inset-x-0 top-full mt-2 bg-white/95 dark:bg-zinc-900/90 rounded-2xl mx-4 shadow-lg transition-all duration-[400ms] ease-in-out",
            isAnimatingIn
              ? "translate-y-0 opacity-100 pointer-events-auto"
              : "-translate-y-4 opacity-0 pointer-events-none"
          )}
        >
          <nav className="p-6">
            <div className="space-y-4">
              {siteConfig.navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block text-lg font-medium text-foreground hover:text-primary transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </div>
  );
}
