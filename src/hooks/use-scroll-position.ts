"use client";

import { useState, useEffect } from "react";

/**
 * Hook to track scroll position
 * @returns Object with scroll position and helper boolean values
 */
export function useScrollPosition() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("down");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const updateScrollPosition = () => {
      const currentScrollY = window.scrollY;

      setScrollY(currentScrollY);
      setScrollDirection(currentScrollY > lastScrollY ? "down" : "up");

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", updateScrollPosition, { passive: true });

    return () => window.removeEventListener("scroll", updateScrollPosition);
  }, []);

  return {
    scrollY,
    scrollDirection,
    isScrolled: scrollY > 0,
    isScrolledPast: (threshold: number) => scrollY > threshold,
  };
}
