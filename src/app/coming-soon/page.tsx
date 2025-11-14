"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { Container } from "@/components/ui/container";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { siteConfig } from "@/lib/site-config";

/**
 * Public Coming Soon page shown during maintenance mode
 * This page is accessible to all visitors while the site is under construction
 * Includes hidden admin login (press Ctrl+Shift+A or Cmd+Shift+A, or triple-tap logo on mobile)
 */
export default function ComingSoonPage() {
  const router = useRouter();
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [logoTaps, setLogoTaps] = useState(0);
  const [showFallback, setShowFallback] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const currentYear = new Date().getFullYear();

  // Listen for admin shortcut (Ctrl/Cmd + Shift + A)
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === "A") {
        e.preventDefault();
        setShowLogin(true);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  // Triple-tap logo to show login (mobile friendly)
  useEffect(() => {
    if (logoTaps >= 3) {
      setShowLogin(true);
      setLogoTaps(0);
    }

    const timer = setTimeout(() => setLogoTaps(0), 1000);
    return () => clearTimeout(timer);
  }, [logoTaps]);

  // Handle video autoplay detection
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setShowFallback(false);
        })
        .catch((error) => {
          console.log("Video autoplay prevented:", error);
          setShowFallback(true);
        });
    }

    const handleSuspend = () => setShowFallback(true);
    const handleError = () => setShowFallback(true);

    video.addEventListener("suspend", handleSuspend);
    video.addEventListener("error", handleError);

    return () => {
      video.removeEventListener("suspend", handleSuspend);
      video.removeEventListener("error", handleError);
    };
  }, []);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch("/api/admin-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (data.success) {
        router.push("/");
        router.refresh();
      } else {
        setError("Invalid credentials");
      }
    } catch (err) {
      setError("Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col">
      {/* Fallback background - gradient when video can't play */}
      {showFallback && (
        <div
          className="absolute inset-0 w-full h-full bg-gradient-to-br from-zinc-100 via-zinc-50 to-zinc-200 dark:from-zinc-900 dark:via-zinc-800 dark:to-zinc-900"
          aria-hidden="true"
        />
      )}

      {/* Video Background */}
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        disablePictureInPicture
        controlsList="nodownload nofullscreen noremoteplayback"
        style={{ pointerEvents: "none" }}
        className={`absolute inset-0 h-full w-full object-cover ${showFallback ? "hidden" : ""}`}
      >
        <source
          src="https://res.cloudinary.com/dr0e02ntf/video/upload/v1762875783/hero-bg-small_b0tj3b.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-white/60 dark:bg-black/60" />

      {/* Header - styled like main site header */}
      <header className="relative z-10 w-full bg-white/60 dark:bg-zinc-900/60 backdrop-blur-lg">
        <Container>
          <div className="flex h-16 items-center justify-between">
            {/* Logo - Triple tap to access admin login */}
            <div
              className="cursor-pointer"
              onClick={() => setLogoTaps((prev) => prev + 1)}
            >
              <Image
                src="/logo-light.svg"
                alt="YWD - Yoga With Dash"
                width={100}
                height={20}
                className="dark:hidden"
                priority
              />
              <Image
                src="/logo-dark.svg"
                alt="YWD - Yoga With Dash"
                width={100}
                height={20}
                className="hidden dark:block"
                priority
              />
            </div>

            {/* Theme Toggle */}
            <ThemeToggle />
          </div>
        </Container>
      </header>

      {/* Main content */}
      <div className="relative z-10 flex flex-1 items-center justify-center px-4">
        <div className="max-w-2xl text-center">
          <h1 className="mb-4 text-5xl font-bold tracking-tight sm:text-6xl">
            Coming Soon
          </h1>
          <p className="text-xl text-foreground/80 sm:text-2xl">
            Practice anytime, anywhere.
          </p>
        </div>
      </div>

      {/* Footer - styled like main site footer */}
      <footer className="relative z-10 bg-background">
        <Container>
          <div className="border-t py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Logo & Tagline */}
              <div className="flex flex-col items-center md:items-start gap-2">
                <Link href="/" className="flex items-center">
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
                <p className="text-sm text-muted-foreground">
                  Embody calm, strength & presence
                </p>
              </div>

              {/* Connect */}
              <div className="flex items-center gap-2">
                <p className="text-sm text-muted-foreground">Follow us on</p>
                <a
                  href="https://www.instagram.com/yoga_with_dash/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-accent underline decoration-accent/50 underline-offset-2 hover:decoration-accent transition-colors"
                >
                  Instagram
                </a>
                <p className="text-sm text-muted-foreground">for updates</p>
              </div>

              {/* Copyright */}
              <p className="text-sm text-muted-foreground">
                Yoga With Dash © {currentYear}
              </p>
            </div>
          </div>
        </Container>
      </footer>

      {/* Hidden Admin Login */}
      {showLogin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
          <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-xl dark:bg-zinc-900">
            <h2 className="mb-4 text-xl font-semibold">Admin Login</h2>
            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label
                  htmlFor="username"
                  className="mb-1 block text-sm font-medium"
                >
                  Username
                </label>
                <input
                  id="username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full rounded-md border border-zinc-300 px-3 py-2 dark:border-zinc-700 dark:bg-zinc-800"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="mb-1 block text-sm font-medium"
                >
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-md border border-zinc-300 px-3 py-2 dark:border-zinc-700 dark:bg-zinc-800"
                  required
                />
              </div>
              {error && (
                <p className="text-sm text-red-600 dark:text-red-400">
                  {error}
                </p>
              )}
              <div className="flex gap-2">
                <button
                  type="submit"
                  disabled={loading}
                  className="flex-1 rounded-md bg-accent px-4 py-2 text-white hover:bg-accent/90 disabled:opacity-50"
                >
                  {loading ? "Logging in..." : "Login"}
                </button>
                <button
                  type="button"
                  onClick={() => setShowLogin(false)}
                  className="rounded-md border border-zinc-300 px-4 py-2 hover:bg-zinc-100 dark:border-zinc-700 dark:hover:bg-zinc-800"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
