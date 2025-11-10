"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { CTAButton } from "@/components/ui/cta-button";
import { Card } from "@/components/ui/card";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";
import { getRecentPosts } from "@/data/posts";

/**
 * Blog preview section component
 */
export function BlogPreview() {
  const prefersReducedMotion = usePrefersReducedMotion();
  const recentPosts = getRecentPosts();

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
              Blog
            </h2>
            <div className="w-16 h-0.5 bg-primary mx-auto"></div>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Deepen your understanding with insights on philosophy, anatomy,
              and the art of teaching. Explore the wisdom that transforms
              practice into a way of life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <Card className="h-full">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span className="capitalize bg-primary/10 text-primary px-2 py-1 rounded-full">
                            {post.category}
                          </span>
                          <span>•</span>
                          <span>{post.readingTime} min read</span>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground line-clamp-2">
                          {post.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="text-sm text-muted-foreground">
                        By {post.author} •{" "}
                        {new Date(post.publishedAt).toLocaleDateString(
                          "en-GB",
                          {
                            day: "numeric",
                            month: "long",
                            year: "numeric",
                          }
                        )}
                      </div>
                    </div>
                  </Card>
                </Link>
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
            <CTAButton href="/blog">Read More</CTAButton>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
}
