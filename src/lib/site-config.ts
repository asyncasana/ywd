export const siteConfig = {
  name: "YWD - Yoga With Dash",
  description:
    "Embody calm, strength & presence. Move, breathe, and grow – on your mat and beyond.",
  url:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://yogawithdash.com",
  ogImage: "/og.png",
  links: {
    twitter: "https://twitter.com/yogawithdash",
    instagram: "https://instagram.com/yogawithdash",
  },
  navigation: [
    {
      title: "About Us",
      href: "/about",
    },
    {
      title: "Video Library",
      href: "/videos",
    },
    {
      title: "Playlists",
      href: "/playlists",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Search",
      href: "/search",
    },
  ],
} as const;
