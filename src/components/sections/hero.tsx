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
    <Section className="min-h-[90vh] flex items-center bg-gradient-to-b from-muted/20 to-background">
      <Container>
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
