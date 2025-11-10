"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Section } from "@/components/ui/section";
import { CTAButton } from "@/components/ui/cta-button";
import { usePrefersReducedMotion } from "@/hooks/use-prefers-reduced-motion";

/**
 * Newsletter CTA section component
 */
export function NewsletterCTA() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  const prefersReducedMotion = usePrefersReducedMotion();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, name }),
      });

      if (response.ok) {
        setMessage("Thank you for subscribing! Welcome to the community.");
        setEmail("");
        setName("");
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section className="bg-gradient-to-r from-primary/5 to-secondary/5">
      <Container>
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              JOIN THE COMMUNITY
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Stay connected with weekly inspiration, new class releases, and
              insights to deepen your practice both on and off the mat.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="flex-1 px-4 py-3 rounded-2xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-4 py-3 rounded-2xl border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-2xl text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 h-12 px-6 py-3 w-full sm:w-auto"
            >
              {isSubmitting ? "Signing Up..." : "Sign Up"}
            </button>

            {message && (
              <p
                className={`text-sm ${message.includes("Thank you") ? "text-green-600" : "text-red-600"}`}
              >
                {message}
              </p>
            )}
          </form>
        </motion.div>
      </Container>
    </Section>
  );
}
