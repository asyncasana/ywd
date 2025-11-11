import type { Metadata } from "next";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Coming Soon | Yoga With Dash",
  description: "Practice anytime, anywhere. Coming soon.",
  robots: {
    index: false,
    follow: false,
  },
};

/**
 * Public Coming Soon page shown during maintenance mode
 * This page is accessible to all visitors while the site is under construction
 */
export default function ComingSoonPage() {
  const features = [
    "On-Demand Video Library",
    "Curated Playlists for Every Practice",
    "Beginner to Advanced Classes",
    "Mindfulness & Meditation Sessions",
    "New Content Added Weekly",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary/20 flex items-center justify-center p-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Image
            src="/logo-light.svg"
            alt="Yoga With Dash"
            width={200}
            height={60}
            className="dark:hidden"
            priority
          />
          <Image
            src="/logo-dark.svg"
            alt="Yoga With Dash"
            width={200}
            height={60}
            className="hidden dark:block"
            priority
          />
        </div>

        {/* Main Content */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-foreground">
            Coming Soon
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground">
            Practice anytime, anywhere.
          </p>
        </div>

        {/* Features List */}
        <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-8 space-y-4 shadow-lg">
          <h2 className="text-2xl font-semibold text-foreground mb-6">
            What to Expect
          </h2>
          <ul className="space-y-3">
            {features.map((feature) => (
              <li
                key={feature}
                className="flex items-center justify-center gap-3 text-lg text-muted-foreground"
              >
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tagline */}
        <div className="pt-8">
          <p className="text-sm text-muted-foreground">
            Embody calm, strength & presence
          </p>
        </div>
      </div>
    </div>
  );
}
