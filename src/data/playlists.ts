import { Video } from "./videos";

export interface Playlist {
  id: string;
  title: string;
  description: string;
  cover: string;
  videoIds: string[];
  totalDuration: number; // in minutes
  difficulty: "beginner" | "intermediate" | "advanced" | "mixed";
  category:
    | "flow"
    | "meditation"
    | "strength"
    | "flexibility"
    | "beginner-series";
}

export const playlists: Playlist[] = [
  {
    id: "energetic-flow",
    title: "Energetic Flow",
    description:
      "Dynamic sequences to build heat and energy. Perfect for when you need an invigorating practice to boost your vitality.",
    cover: "/playlists/energetic-flow.svg",
    videoIds: [
      "morning-gentle-flow",
      "power-vinyasa-flow",
      "core-strength-flow",
    ],
    totalDuration: 100,
    difficulty: "intermediate",
    category: "flow",
  },
  {
    id: "slow-flow",
    title: "Slow Flow",
    description:
      "Mindful, slower-paced practices that emphasise breath awareness and gentle movement. Ideal for restoration and stress relief.",
    cover: "/playlists/slow-flow.svg",
    videoIds: [
      "morning-gentle-flow",
      "hip-opening-sequence",
      "evening-wind-down",
    ],
    totalDuration: 75,
    difficulty: "beginner",
    category: "flow",
  },
  {
    id: "meditation",
    title: "Meditation",
    description:
      "Guided meditations and breathwork practices to cultivate inner peace, clarity, and mindfulness in daily life.",
    cover: "/playlists/meditation.svg",
    videoIds: ["breath-awareness-meditation", "pranayama-fundamentals"],
    totalDuration: 35,
    difficulty: "beginner",
    category: "meditation",
  },
  {
    id: "beginner-foundations",
    title: "Beginner Foundations",
    description:
      "Essential practices for yoga beginners. Learn fundamental poses, breathing techniques, and build confidence in your practice.",
    cover: "/playlists/beginner-foundations.jpg",
    videoIds: [
      "morning-gentle-flow",
      "breath-awareness-meditation",
      "pranayama-fundamentals",
      "evening-wind-down",
    ],
    totalDuration: 80,
    difficulty: "beginner",
    category: "beginner-series",
  },
  {
    id: "strength-building",
    title: "Strength Building",
    description:
      "Build physical strength and mental resilience with these challenging sequences. Progress from basic strengthening to advanced arm balances.",
    cover: "/playlists/strength-building.jpg",
    videoIds: [
      "power-vinyasa-flow",
      "core-strength-flow",
      "advanced-arm-balances",
    ],
    totalDuration: 140,
    difficulty: "advanced",
    category: "strength",
  },
  {
    id: "flexibility-mobility",
    title: "Flexibility & Mobility",
    description:
      "Deep stretches and mobility work to increase flexibility and release tension. Perfect for athletes or anyone with tight muscles.",
    cover: "/playlists/flexibility-mobility.jpg",
    videoIds: ["hip-opening-sequence", "evening-wind-down"],
    totalDuration: 55,
    difficulty: "mixed",
    category: "flexibility",
  },
];

/**
 * Get playlist by ID
 */
export function getPlaylistById(id: string): Playlist | undefined {
  return playlists.find((playlist) => playlist.id === id);
}

/**
 * Get playlists by category
 */
export function getPlaylistsByCategory(
  category: Playlist["category"]
): Playlist[] {
  return playlists.filter((playlist) => playlist.category === category);
}

/**
 * Get playlists by difficulty
 */
export function getPlaylistsByDifficulty(
  difficulty: Playlist["difficulty"]
): Playlist[] {
  return playlists.filter((playlist) => playlist.difficulty === difficulty);
}

/**
 * Get featured playlists (first 3 playlists)
 */
export function getFeaturedPlaylists(): Playlist[] {
  return playlists.slice(0, 3);
}
