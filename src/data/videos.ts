export interface Video {
  id: string;
  title: string;
  duration: number; // in minutes
  difficulty: "beginner" | "intermediate" | "advanced";
  tags: string[];
  thumbnail: string;
  url: string;
  description: string;
  instructor: string;
  category: "flow" | "meditation" | "breathwork" | "restorative" | "strength";
}

export const videos: Video[] = [
  {
    id: "morning-gentle-flow",
    title: "Gentle Morning Flow",
    duration: 20,
    difficulty: "beginner",
    tags: ["morning", "gentle", "flow", "awakening"],
    thumbnail: "/videos/morning-gentle-flow.svg",
    url: "/videos/morning-gentle-flow.mp4",
    description:
      "Start your day with this gentle flowing sequence designed to awaken your body and mind. Perfect for beginners or anyone seeking a calm morning practice.",
    instructor: "Dash",
    category: "flow",
  },
  {
    id: "breath-awareness-meditation",
    title: "Breath Awareness Meditation",
    duration: 15,
    difficulty: "beginner",
    tags: ["meditation", "breathwork", "mindfulness", "calm"],
    thumbnail: "/videos/breath-meditation.svg",
    url: "/videos/breath-meditation.mp4",
    description:
      "A guided meditation focusing on breath awareness. Learn to cultivate presence and inner stillness through conscious breathing.",
    instructor: "Dash",
    category: "meditation",
  },
  {
    id: "power-vinyasa-flow",
    title: "Power Vinyasa Flow",
    duration: 45,
    difficulty: "intermediate",
    tags: ["vinyasa", "power", "strength", "dynamic"],
    thumbnail: "/videos/power-vinyasa.svg",
    url: "/videos/power-vinyasa.mp4",
    description:
      "A dynamic vinyasa sequence that builds heat and strength. Flow through challenging poses with breath-synchronized movement.",
    instructor: "Dash",
    category: "flow",
  },
  {
    id: "hip-opening-sequence",
    title: "Deep Hip Opening Sequence",
    duration: 30,
    difficulty: "intermediate",
    tags: ["hip opening", "flexibility", "seated", "therapeutic"],
    thumbnail: "/videos/hip-opening.jpg",
    url: "/videos/hip-opening.mp4",
    description:
      "A therapeutic sequence focused on opening tight hips. Includes seated poses, gentle backbends, and restorative stretches.",
    instructor: "Dash",
    category: "restorative",
  },
  {
    id: "advanced-arm-balances",
    title: "Advanced Arm Balances Workshop",
    duration: 60,
    difficulty: "advanced",
    tags: ["arm balance", "strength", "crow", "advanced"],
    thumbnail: "/videos/arm-balances.jpg",
    url: "/videos/arm-balances.mp4",
    description:
      "Master challenging arm balances including crow, side crow, and firefly. Detailed breakdown of technique and preparation poses.",
    instructor: "Dash",
    category: "strength",
  },
  {
    id: "evening-wind-down",
    title: "Evening Wind Down",
    duration: 25,
    difficulty: "beginner",
    tags: ["evening", "restorative", "relaxation", "sleep"],
    thumbnail: "/videos/evening-wind-down.jpg",
    url: "/videos/evening-wind-down.mp4",
    description:
      "A calming practice to help you unwind after a long day. Gentle stretches and breathing exercises to prepare for restful sleep.",
    instructor: "Dash",
    category: "restorative",
  },
  {
    id: "pranayama-fundamentals",
    title: "Pranayama Fundamentals",
    duration: 20,
    difficulty: "beginner",
    tags: ["pranayama", "breathwork", "technique", "energy"],
    thumbnail: "/videos/pranayama.jpg",
    url: "/videos/pranayama.mp4",
    description:
      "Learn essential breathing techniques including ujjayi, three-part breath, and alternate nostril breathing. Foundation for all yoga practice.",
    instructor: "Dash",
    category: "breathwork",
  },
  {
    id: "core-strength-flow",
    title: "Core Strength Flow",
    duration: 35,
    difficulty: "intermediate",
    tags: ["core", "strength", "abs", "stability"],
    thumbnail: "/videos/core-strength.jpg",
    url: "/videos/core-strength.mp4",
    description:
      "Build deep core strength with this targeted flow. Combines traditional yoga poses with core-focused variations and holds.",
    instructor: "Dash",
    category: "strength",
  },
];

/**
 * Get videos by category
 */
export function getVideosByCategory(category: Video["category"]): Video[] {
  return videos.filter((video) => video.category === category);
}

/**
 * Get videos by difficulty
 */
export function getVideosByDifficulty(
  difficulty: Video["difficulty"]
): Video[] {
  return videos.filter((video) => video.difficulty === difficulty);
}

/**
 * Get featured videos (first 3 videos)
 */
export function getFeaturedVideos(): Video[] {
  return videos.slice(0, 3);
}
