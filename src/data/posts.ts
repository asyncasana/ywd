export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  cover: string;
  category: "philosophy" | "anatomy" | "teaching" | "lifestyle";
  slug: string;
  author: string;
  publishedAt: string;
  readingTime: number; // in minutes
  content?: string; // Full content for individual post pages
}

export const posts: BlogPost[] = [
  {
    id: "philosophy-of-yoga",
    title: "The Philosophy Behind Modern Yoga Practice",
    excerpt:
      "Explore the ancient wisdom that forms the foundation of contemporary yoga, from the eight limbs of Patanjali to finding meaning in modern practice.",
    cover: "/blog/philosophy-of-yoga.jpg",
    category: "philosophy",
    slug: "philosophy-of-modern-yoga-practice",
    author: "Dash",
    publishedAt: "2024-11-01",
    readingTime: 8,
    content:
      "Yoga is more than physical postures—it's a comprehensive system for living with awareness and intention...",
  },
  {
    id: "breath-foundation",
    title: "The Breath: Foundation of All Yoga Practice",
    excerpt:
      "Discover why conscious breathing is considered the most important aspect of yoga and how to develop a deeper relationship with your breath.",
    cover: "/blog/breath-foundation.jpg",
    category: "philosophy",
    slug: "breath-foundation-of-yoga-practice",
    author: "Dash",
    publishedAt: "2024-10-28",
    readingTime: 6,
    content:
      "In yoga, the breath is our most intimate teacher, always present and ready to guide us back to the present moment...",
  },
  {
    id: "hip-anatomy-guide",
    title: "Understanding Hip Anatomy for Safer Practice",
    excerpt:
      "A practical guide to hip anatomy that every yoga practitioner should know. Learn how to protect your joints whilst finding freedom in movement.",
    cover: "/blog/hip-anatomy.jpg",
    category: "anatomy",
    slug: "understanding-hip-anatomy-for-yoga",
    author: "Dash",
    publishedAt: "2024-10-25",
    readingTime: 12,
    content:
      "The hip joint is one of the most complex structures in the human body, and understanding its anatomy is crucial for safe yoga practice...",
  },
  {
    id: "teaching-with-compassion",
    title: "Teaching Yoga with Compassion and Inclusivity",
    excerpt:
      "How to create a welcoming space for all bodies and abilities in your yoga classes. Practical tips for inclusive teaching and compassionate communication.",
    cover: "/blog/teaching-compassion.jpg",
    category: "teaching",
    slug: "teaching-yoga-with-compassion-inclusivity",
    author: "Dash",
    publishedAt: "2024-10-20",
    readingTime: 10,
    content:
      "Every body that enters our yoga space is worthy of respect, guidance, and encouragement. Here's how to create truly inclusive classes...",
  },
  {
    id: "morning-routine-yoga",
    title: "Creating a Sustainable Morning Yoga Routine",
    excerpt:
      "Transform your mornings with a realistic approach to daily practice. Simple strategies to maintain consistency without overwhelming your schedule.",
    cover: "/blog/morning-routine.jpg",
    category: "lifestyle",
    slug: "sustainable-morning-yoga-routine",
    author: "Dash",
    publishedAt: "2024-10-15",
    readingTime: 7,
    content:
      "A morning yoga practice doesn't need to be lengthy to be transformative. Here's how to create a routine that actually sticks...",
  },
  {
    id: "shoulder-anatomy-alignment",
    title: "Shoulder Safety: Anatomy and Alignment in Arm Balances",
    excerpt:
      "Protect your shoulders and build strength safely in challenging poses. Essential anatomy knowledge for arm balances and inversions.",
    cover: "/blog/shoulder-anatomy.jpg",
    category: "anatomy",
    slug: "shoulder-safety-anatomy-alignment",
    author: "Dash",
    publishedAt: "2024-10-10",
    readingTime: 15,
    content:
      "The shoulder complex is incredibly mobile but also vulnerable. Understanding its structure is key to safe practice in challenging poses...",
  },
  {
    id: "yoga-beyond-asana",
    title: "Yoga Beyond Asana: Integrating Practice into Daily Life",
    excerpt:
      "Discover how yoga philosophy and practices extend far beyond the mat. Simple ways to bring yogic principles into everyday moments.",
    cover: "/blog/yoga-beyond-asana.jpg",
    category: "philosophy",
    slug: "yoga-beyond-asana-daily-integration",
    author: "Dash",
    publishedAt: "2024-10-05",
    readingTime: 9,
    content:
      "The true practice of yoga happens not just on our mats, but in how we move through the world with greater awareness and compassion...",
  },
  {
    id: "sequencing-principles",
    title: "Intelligent Sequencing: The Art of Flowing Practice",
    excerpt:
      "Learn the principles behind safe and effective yoga sequencing. How to structure classes that prepare the body and calm the mind.",
    cover: "/blog/sequencing-principles.jpg",
    category: "teaching",
    slug: "intelligent-yoga-sequencing-principles",
    author: "Dash",
    publishedAt: "2024-09-30",
    readingTime: 11,
    content:
      "Good sequencing is like composing music—each pose should flow naturally into the next, creating a harmonious and safe practice...",
  },
];

/**
 * Get posts by category
 */
export function getPostsByCategory(category: BlogPost["category"]): BlogPost[] {
  return posts.filter((post) => post.category === category);
}

/**
 * Get post by slug
 */
export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

/**
 * Get recent posts (first 3 posts)
 */
export function getRecentPosts(): BlogPost[] {
  return posts.slice(0, 3);
}

/**
 * Get featured posts by category
 */
export function getFeaturedPostsByCategory(): {
  [key in BlogPost["category"]]: BlogPost[];
} {
  return {
    philosophy: getPostsByCategory("philosophy").slice(0, 2),
    anatomy: getPostsByCategory("anatomy").slice(0, 2),
    teaching: getPostsByCategory("teaching").slice(0, 2),
    lifestyle: getPostsByCategory("lifestyle").slice(0, 2),
  };
}
