"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { CTAButton } from "@/components/ui/cta-button";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

/**
 * Hero section component with video background and fallback image
 */
export function Hero() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showFallback, setShowFallback] = useState(false);

  return (
    <Section className="relative min-h-[90vh] flex items-center p-0">
      {/* Fallback background - gradient when video can't play */}
      {showFallback && (
        <div
          className="absolute inset-0 w-full h-full z-0 bg-gradient-to-br from-zinc-100 via-zinc-50 to-zinc-200 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900"
          aria-hidden="true"
        />
      )}

      {/* Video background */}
      <video
        ref={videoRef}
        className={`absolute inset-0 w-full h-full object-cover z-0 ${showFallback ? "hidden" : ""}`}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback"
        style={{ pointerEvents: "none" }}
        aria-hidden="true"
      >
        <source
          src="https://res.cloudinary.com/dr0e02ntf/video/upload/v1762875783/hero-bg-small_b0tj3b.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay for light/dark mode */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <div className="block w-full h-full bg-white/60 dark:bg-black/60" />
      </div>
      <Container className="relative z-20">
        <div className="text-center space-y-8">
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="block text-muted-foreground">EMBODY CALM,</span>
              <span className="block text-foreground">STRENGTH & PRESENCE</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto">
              Move, breathe, and grow – on your mat and beyond.
            </p>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-4"
          >
            <p className="text-lg text-muted-foreground">
              PRACTICE ANYTIME, ANYWHERE
            </p>

            <CTAButton href="/videos" size="lg">
              Start Your Practice
            </CTAButton>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
