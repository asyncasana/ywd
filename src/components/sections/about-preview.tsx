"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { CTAButton } from "@/components/ui/cta-button";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

/**
 * About preview section component
 */
export function AboutPreview() {
  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <Section>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                About Us
              </h2>
              <div className="w-16 h-0.5 bg-primary"></div>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <p>
                Welcome to a practice that honours both ancient wisdom and
                modern life. Here, yoga is more than movement—it's a pathway to
                discovering your authentic self and cultivating presence in
                every moment.
              </p>

              <p>
                Whether you're stepping onto the mat for the first time or
                deepening years of practice, you'll find classes that meet you
                exactly where you are. Through breath-centred movement, mindful
                sequencing, and compassionate guidance, we create space for
                transformation that extends far beyond the studio.
              </p>
            </div>

            <CTAButton href="/about" variant="ghost">
              Read More
            </CTAButton>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src="/images/about-preview.svg"
                alt="About Yoga With Dash"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-secondary/10 rounded-full blur-xl"></div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
