"use client";

import { useState, useCallback } from "react";

/**
 * Hook to get a random item from an array
 * @param items Array of items to choose from
 * @returns Object with current random item and function to get new random item
 */
export function useRandom<T>(items: T[]) {
  const [currentItem, setCurrentItem] = useState<T>(() => {
    if (items.length === 0) return null as T;
    return items[Math.floor(Math.random() * items.length)];
  });

  const getRandomItem = useCallback(() => {
    if (items.length === 0) return;
    const randomIndex = Math.floor(Math.random() * items.length);
    setCurrentItem(items[randomIndex]);
  }, [items]);

  return {
    currentItem,
    getRandomItem,
  };
}
