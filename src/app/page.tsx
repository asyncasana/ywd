import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Hero } from "@/components/sections/hero";
import { AboutPreview } from "@/components/sections/about-preview";
import { VideoLibraryPreview } from "@/components/sections/video-library-preview";
import { PlaylistsPreview } from "@/components/sections/playlists-preview";
import { BlogPreview } from "@/components/sections/blog-preview";
import { NewsletterCTA } from "@/components/sections/newsletter-cta";
import { RandomPose } from "@/components/sections/random-pose";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <AboutPreview />
        <VideoLibraryPreview />
        <PlaylistsPreview />
        <BlogPreview />
        <RandomPose />
        <NewsletterCTA />
      </main>
      <SiteFooter />
    </div>
  );
}
