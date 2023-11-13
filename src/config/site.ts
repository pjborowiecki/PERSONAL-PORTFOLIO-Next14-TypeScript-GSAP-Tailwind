import { type NavItem, type NavItemFooter } from "@/types"

const links = {
  github:
    "https://github.com/pjborowiecki/PERSONAL-PORTFOLIO-Next14-TypeScript-GSAP-Tailwind",
  twitter: "https://twitter.com/pjborowiecki",
  linkedin: "https://www.linkedin.com/in/pjborowiecki",
  discord: "",
  authorsWebsite: "https://pjborowiecki.com",
  authorsGitHub: "https://github.com/pjborowiecki",
  openGraphImage: "https://pjborowiecki.com/opengraph-image.png",
  manifestFile: "https://pjborowiecki.com/site.webmanifest",
}

export const siteConfig = {
  name: "P J Borowiecki",
  nameLong: "Piotr J Borowiecki - Full-Stack Developer",
  description:
    "A personal portfolio website of Piotr J Borowiecki, a recent Computer Science graduate from Durham University and an aspiring software developer.",
  links,
  url: "https://pjborowiecki.com",
  ogImage: links.openGraphImage,
  author: "@pjborowiecki",
  hostingRegion: "fra1",
  keywords: [
    "Software developer",
    "Programmer",
    "Web developer",
    "Full stack developer",
    "Frontend developer",
    "Backend developer",
    "React developer",
    "AI engineer",
    "Machine learning engineer",
    "Data scientist",
    "Data engineer",
    "Python developer",
    "JavaScript developer",
    "TypeScript developer",
    "Node.js developer",
    "Blockchain developer",
  ],
  navItems: [
    // {
    //   title: "about",
    //   href: "#about",
    // },
    // {
    //   title: "services",
    //   href: "#services",
    // },
    {
      title: "projects",
      href: "/#projects",
    },
    // {
    //   title: "blog",
    //   href: "/blog",
    // },
  ] satisfies NavItem[],
  navItemsMobile: [],
  navItemsFooter: [] satisfies NavItemFooter[],
}
