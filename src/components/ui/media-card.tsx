import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card } from "./card";
import { cn } from "@/lib/utils";

interface MediaCardProps {
  title: string;
  description?: string;
  image: string;
  href?: string;
  badge?: string;
  className?: string;
  imageAspect?: "video" | "square";
}

/**
 * Card component for media content (videos, playlists, etc.)
 */
export function MediaCard({
  title,
  description,
  image,
  href,
  badge,
  className,
  imageAspect = "video",
}: MediaCardProps) {
  const content = (
    <Card className={cn("overflow-hidden", className)}>
      <div
        className={cn(
          "relative overflow-hidden rounded-xl",
          imageAspect === "video" ? "aspect-video" : "aspect-square"
        )}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform hover:scale-105"
        />
        {badge && (
          <div className="absolute top-3 left-3">
            <span className="inline-flex items-center rounded-full bg-black/70 px-2.5 py-1 text-xs font-medium text-white">
              {badge}
            </span>
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-foreground line-clamp-2">{title}</h3>
        {description && (
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
        )}
      </div>
    </Card>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    );
  }

  return content;
}
