import { type NavItem } from "@/types"

import { siteConfig } from "@/config/site"

export const internalNavItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "About",
    href: "#abount",
  },
  {
    title: "Projects",
    href: "#projects",
  },
  // {
  //   title: "Blog",
  //   href: "/blog",
  // },
  {
    title: "Contact",
    href: "#contact",
  },
] satisfies NavItem[]

export const externalNavItems = [
  {
    title: "GitHub",
    href: siteConfig.links.github,
    icon: "gitHub",
  },
  {
    title: "LinkedIn",
    href: siteConfig.links.linkedin,
    icon: "linkedIn",
  },
  {
    title: "YouTube",
    href: siteConfig.links.youtube,
    icon: "youTube",
  },
] satisfies NavItem[]
