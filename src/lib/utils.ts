import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function slugify(str: string) {
  return str
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
}

export async function initializeLocomotiveScroll(): Promise<void> {
  const LocomotiveScroll = (await import("locomotive-scroll")).default
  const locomotiveScroll = new LocomotiveScroll()
  if (!locomotiveScroll) {
    console.error("Failed to initialize LocomotiveScroll")
  }
}
