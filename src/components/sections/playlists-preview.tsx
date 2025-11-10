"use client";

import React from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { CTAButton } from "@/components/ui/cta-button";
import { MediaCard } from "@/components/ui/media-card";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { getFeaturedPlaylists } from "@/data/playlists";

/**
 * Playlists preview section component
 */
export function PlaylistsPreview() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const featuredPlaylists = getFeaturedPlaylists();

  return (
    <Section className="bg-muted/20">
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
              Playlists
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Curated collections of practices designed for specific goals and
              intentions. Whether you seek energy, calm, or strength, find the
              perfect sequence for your needs.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPlaylists.map((playlist, index) => (
              <motion.div
                key={playlist.id}
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <MediaCard
                  title={playlist.title}
                  description={playlist.description}
                  image={playlist.cover}
                  href={`/playlists/${playlist.id}`}
                  badge={`${playlist.totalDuration}min`}
                  imageAspect="square"
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
            <CTAButton href="/playlists">Explore More</CTAButton>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
