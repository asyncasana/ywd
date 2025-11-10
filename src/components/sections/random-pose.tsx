"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { RefreshCw } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { CTAButton } from "@/components/ui/cta-button";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useRandom } from "@/hooks/use-random";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { poses } from "@/data/poses";

/**
 * Random pose section component
 */
export function RandomPose() {
  const { currentItem: randomPose, getRandomItem } = useRandom(poses);
  const prefersReducedMotion = usePrefersReducedMotion();

  if (!randomPose) return null;

  return (
    <Section className="bg-muted/20">
      <Container>
        <div className="text-center space-y-12">
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Start where ever you are.
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Not sure where to begin? Let the practice choose you. Discover a
              randomly selected pose to explore today.
            </p>
          </motion.div>

          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="p-8">
              <div className="text-center space-y-6">
                <div className="space-y-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground italic">
                    {randomPose.sanskrit}
                  </h3>
                  <p className="text-lg text-primary font-medium">
                    {randomPose.difficulty.charAt(0).toUpperCase() +
                      randomPose.difficulty.slice(1)}{" "}
                    Pose
                  </p>
                </div>

                {/* Pose illustration placeholder */}
                <div className="relative w-48 h-48 mx-auto">
                  <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 rounded-full flex items-center justify-center">
                    <svg
                      width="120"
                      height="120"
                      viewBox="0 0 120 120"
                      className="text-primary/30"
                      fill="currentColor"
                    >
                      {/* Simple yoga pose illustration */}
                      <path d="M60 20c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm-15 25c-2 0-4 1-5 3l-8 15c-1 2 0 5 2 6l12 7v25c0 3 2 5 5 5s5-2 5-5V75l12-7c2-1 3-4 2-6l-8-15c-1-2-3-3-5-3H45z" />
                    </svg>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
                  <div>
                    <h4 className="font-semibold text-foreground mb-3">
                      Alignment
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {randomPose.alignment.slice(0, 3).map((point, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">
                      Benefits
                    </h4>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {randomPose.benefits.slice(0, 3).map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                  <Button
                    onClick={getRandomItem}
                    variant="outline"
                    className="gap-2"
                  >
                    <RefreshCw className="w-4 h-4" />
                    New Pose
                  </Button>
                  <CTAButton href="/poses" variant="ghost">
                    Browse All Poses
                  </CTAButton>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
