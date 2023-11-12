import { type Project } from "@/types"

export const projects = [
  {
    title: "SaaSy Land",
    description: "Modern full-stack templates",
    categories: ["web dev", "all"],
    image: "/images/projects/saasy-land.png",
    stack: ["TypeScript", "Next", "NextAuth", "Tailwind", "Postgres", "Prisma"],
    links: {
      source_code:
        "https://github.com/pjborowiecki/SAASY-LAND-Next-14-Starters-With-Authentication-And-Database-Implemented",
      live_demo: "https://saasyland.com",
      details: "saasy-land",
    },
    priority: 1,
  },
  {
    title: "ARKA",
    description: "Appointment booking system",
    categories: ["web dev", "all"],
    image: "/images/projects/arka.png",
    stack: ["TypeScript", "Next", "Clerk", "MySQL", "Drizzle", "Tailwind"],
    links: {
      source_code:
        "https://github.com/pjborowiecki/ARKA-Veterinary-Clinic-Page-and-Appointment-Booking-System",
      details: "arka",
    },
    priority: 2,
  },
  {
    title: "N-Body Simulator",
    description: "Scientific Computing assignment",
    image: "/images/projects/n-body-simulator.png",
    categories: ["other", "all"],
    stack: ["C++", "Make", "Parallelization"],
    links: {
      source_code:
        "https://github.com/pjborowiecki/COMP3577-Parallel-Scientific-Computing-I",
      details: "n-body-simulator",
    },
    priority: 4,
  },
  {
    title: "Bi-Pedal Walker",
    description: "Reinforcement Learning assignment",
    image: "/images/projects/bipedal-walker.png",
    categories: ["deep learning", "all"],
    stack: ["Python", "PyTorch", "Numpy", "Jupyter", "OpenAI Gym", "REDQ"],
    links: {
      source_code:
        "https://github.com/pjborowiecki/COMP3667-Reinforcement-Learning",
      details: "bipedal-walker",
    },
    priority: 5,
  },
  {
    title: "New Images Synthesizer",
    description: "Deep Learning assignment solution",
    image: "/images/projects/new-images.png",
    categories: ["deep learning", "all"],
    stack: ["Python", "PyTorch", "NumPy", "OpenCV", "Matplotlib", "Jupyter"],
    links: {
      source_code:
        "https://github.com/pjborowiecki/COMP3547-Deep-Learning/tree/main",
      details: "synthesizing-new-images",
    },
    priority: 6,
  },
  {
    title: "3D Graphics Engine",
    description: "Virtual Reality assignment",
    image: "/images/projects/3d-engine.png",
    categories: ["other", "all"],
    stack: ["Python", "NumPy", "Linear Algebra"],
    links: {
      source_code:
        "https://github.com/pjborowiecki/COMP3671-Virtual-and-Augmented-Reality",
      details: "3d-graphics-engine",
    },
    priority: 7,
  },
  {
    title: "AI Overflow",
    description: "Stack Overflow alternative",
    image: "/images/projects/ai-overflow.png",
    categories: ["web dev", "all"],
    stack: ["TypeScript", "Next", "NextAuth", "Prisma", "Postgres", "Tailwind"],
    links: {
      source_code:
        "https://github.com/pjborowiecki/AI-OVERFLOW-Modern-Stack-Overflow-Alternative",
      live_demo: "",
      details: "ai-overflow",
    },
    priority: 8,
  },
  {
    title: "SEAT FRENZY",
    description: "Restaurant table booking system",
    image: "/images/projects/seat-frenzy.png",
    categories: ["web dev", "all"],
    stack: ["TypeScript", "Next", "Drizzle", "MySQL", "Tailwind", "Zod"],
    links: {
      source_code:
        "https://github.com/pjborowiecki/SEAT-FRENZY-Restaurant-Table-Booking-System",
      details: "seat-frenzy",
    },
    priority: 9,
  },
] satisfies Project[]
