export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Piotr J Borowiecki - Full-Stack Developer",
  description:
    "A personal portfolio website of Piotr J Borowiecki, a recent Computer Science graduate from Durham University and an aspiring software developer.",
  navItems: [
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Services",
      href: "#services",
    },
    {
      label: "Projects",
      href: "#projects",
    },
    {
      label: "Blog",
      href: "/blog",
    },
  ],
  links: {
    github: "https://github.com",
    twitter: "https://twitter.com",
  },
}
