import { Hero } from "@/components/sections/hero";
import { AboutPreview } from "@/components/sections/about-preview";
import { RandomPose } from "@/components/sections/random-pose";
import { VideoLibraryPreview } from "@/components/sections/video-library-preview";
import { PlaylistsPreview } from "@/components/sections/playlists-preview";
import { BlogPreview } from "@/components/sections/blog-preview";
import { NewsletterCTA } from "@/components/sections/newsletter-cta";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <RandomPose />
      <VideoLibraryPreview />
      <PlaylistsPreview />
      <BlogPreview />
      <NewsletterCTA />
    </>
  );
}
