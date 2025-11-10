"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { CTAButton } from "@/components/ui/cta-button";
import { MediaCard } from "@/components/ui/media-card";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { getFeaturedVideos } from "@/data/videos";

/**
 * Video library preview section component
 */
export function VideoLibraryPreview() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const featuredVideos = getFeaturedVideos();

  return (
    <Section>
      <Container>
        <div className="space-y-12">
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Video Library
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore our comprehensive collection of yoga classes, from gentle
              flows to dynamic sequences. Each practice is designed to meet you
              where you are and guide you deeper into your journey.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredVideos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <MediaCard
                  title={video.title}
                  description={video.description}
                  image={video.thumbnail}
                  href={`/videos/${video.id}`}
                  badge={`${video.duration}min`}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <CTAButton href="/videos">Start Practice</CTAButton>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
