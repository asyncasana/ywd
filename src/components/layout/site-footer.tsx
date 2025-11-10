import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { siteConfig } from "@/lib/site-config";

/**
 * Site footer with links and branding
 */
export function SiteFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 border-t">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  src="/logo-light.svg"
                  alt="YWD - Yoga With Dash"
                  width={120}
                  height={40}
                  className="dark:hidden"
                />
                <Image
                  src="/logo-dark.svg"
                  alt="YWD - Yoga With Dash"
                  width={120}
                  height={40}
                  className="hidden dark:block"
                />
              </Link>
              <p className="text-sm text-muted-foreground max-w-xs">
                Embody calm, strength & presence. Move, breathe, and grow – on
                your mat and beyond.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Navigate</h3>
              <ul className="space-y-2">
                {siteConfig.navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/terms"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faqs"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Connect</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href={siteConfig.links.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href={siteConfig.links.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t pt-8 mt-8">
            <p className="text-sm text-muted-foreground text-center">
              Yoga With Dash © {currentYear}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
