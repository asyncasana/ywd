export interface Pose {
  id: string;
  name: string;
  sanskrit: string;
  difficulty: "easy" | "intermediate" | "advanced";
  alignment: string[];
  benefits: string[];
  image: string;
  description: string;
}

export const poses: Pose[] = [
  {
    id: "sukhasana",
    name: "Easy Pose",
    sanskrit: "Sukhasana",
    difficulty: "easy",
    alignment: [
      "Sit cross-legged on your mat with your hands resting on your knees.",
      "Keep your spine tall and shoulders relaxed.",
      "Close your eyes and focus on your breath.",
      "Hold for 1-5 minutes, breathing deeply.",
    ],
    benefits: [
      "Calms the mind and reduces stress",
      "Improves posture and spinal alignment",
      "Enhances concentration and focus",
      "Stretches the hips and ankles gently",
    ],
    image: "/poses/sukhasana.jpg",
    description:
      "A foundational seated pose that promotes inner calm and mindfulness. Perfect for meditation and breathwork practice.",
  },
  {
    id: "child-pose",
    name: "Child's Pose",
    sanskrit: "Balasana",
    difficulty: "easy",
    alignment: [
      "Kneel on the floor with your big toes touching.",
      "Sit back on your heels, then fold forward.",
      "Extend your arms in front of you or alongside your body.",
      "Rest your forehead on the mat and breathe deeply.",
    ],
    benefits: [
      "Relieves stress and anxiety",
      "Gently stretches the hips and thighs",
      "Helps with digestion",
      "Calms the nervous system",
    ],
    image: "/poses/balasana.jpg",
    description:
      "A restorative pose that provides a sense of security and grounding. Use this pose whenever you need to rest during practice.",
  },
  {
    id: "downward-dog",
    name: "Downward-Facing Dog",
    sanskrit: "Adho Mukha Svanasana",
    difficulty: "intermediate",
    alignment: [
      "Start in tabletop position with hands and knees on the ground.",
      "Tuck your toes under and lift your hips up and back.",
      "Straighten your legs and create an inverted V shape.",
      "Ground through your hands and reach your sitting bones toward the ceiling.",
    ],
    benefits: [
      "Strengthens arms and shoulders",
      "Stretches the hamstrings and calves",
      "Improves circulation",
      "Energises the entire body",
    ],
    image: "/poses/downward-dog.jpg",
    description:
      "A foundational pose that builds strength whilst providing a full-body stretch. Often used as a resting pose in flowing sequences.",
  },
  {
    id: "warrior1",
    name: "Warrior I",
    sanskrit: "Virabhadrasana I",
    difficulty: "intermediate",
    alignment: [
      "Step your left foot back 3-4 feet from downward dog.",
      "Turn your left foot out 45 degrees, keeping your right foot forward.",
      "Bend your right knee over your ankle.",
      "Lift your arms overhead and square your hips forward.",
    ],
    benefits: [
      "Builds strength in legs and core",
      "Opens the hip flexors",
      "Improves balance and stability",
      "Cultivates focus and determination",
    ],
    image: "/poses/warrior1.jpg",
    description:
      "A powerful standing pose that embodies the strength and grace of a spiritual warrior. Builds both physical and mental resilience.",
  },
  {
    id: "tree-pose",
    name: "Tree Pose",
    sanskrit: "Vrksasana",
    difficulty: "intermediate",
    alignment: [
      "Stand in mountain pose with feet hip-width apart.",
      "Shift weight to your left foot and place right foot on inner left thigh.",
      "Avoid placing foot on the side of the knee.",
      "Bring hands to prayer position at heart centre or overhead.",
    ],
    benefits: [
      "Improves balance and proprioception",
      "Strengthens the standing leg",
      "Opens the hips",
      "Cultivates focus and mental clarity",
    ],
    image: "/poses/tree-pose.jpg",
    description:
      "A balancing pose that teaches us to find stability whilst remaining flexible, just like a tree swaying in the wind.",
  },
  {
    id: "crow-pose",
    name: "Crow Pose",
    sanskrit: "Bakasana",
    difficulty: "advanced",
    alignment: [
      "Squat with feet close together and hands on the floor.",
      "Place your knees on your upper arms, close to the armpits.",
      "Shift weight forward and lift one toe, then the other.",
      "Engage your core and look forward, not down.",
    ],
    benefits: [
      "Builds significant arm and core strength",
      "Improves balance and coordination",
      "Boosts confidence",
      "Enhances concentration",
    ],
    image: "/poses/crow-pose.jpg",
    description:
      "An arm balance that requires strength, balance, and courage. Represents transformation and the ability to rise above challenges.",
  },
];

/**
 * Get a random pose from the collection
 */
export function getRandomPose(): Pose {
  return poses[Math.floor(Math.random() * poses.length)];
}

/**
 * Get poses by difficulty level
 */
export function getPosesByDifficulty(difficulty: Pose["difficulty"]): Pose[] {
  return poses.filter((pose) => pose.difficulty === difficulty);
}
