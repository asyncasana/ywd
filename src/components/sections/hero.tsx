"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { CTAButton } from "@/components/ui/cta-button";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

/**
 * Hero section component
 */
export function Hero() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <Section className="relative min-h-[90vh] flex items-center p-0">
      {/* Video background with fallback */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        aria-hidden="true"
      >
        <source
          src="https://res.cloudinary.com/dr0e02ntf/video/upload/v1762875783/hero-bg-small_b0tj3b.mp4"
          type="video/mp4"
        />
        {/* If video is not supported, fallback to plain background via CSS */}
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
