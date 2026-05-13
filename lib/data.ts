export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  year: string;
  href?: string;
  featured: boolean;
};

export const projects: Project[] = [
  {
    id: "1",
    title: "Bloom — E-commerce Redesign",
    description:
      "A full redesign of a lifestyle brand's online store, focused on improving conversion rates through intuitive navigation, refined product pages, and a streamlined checkout experience.",
    tags: ["Next.js", "TypeScript", "TailwindCSS", "Stripe"],
    year: "2024",
    href: "#",
    featured: true,
  },
  {
    id: "2",
    title: "Kaze Dashboard",
    description:
      "An internal analytics dashboard for a SaaS product. Built with a focus on data clarity — complex metrics visualised simply, with a calm, distraction-free interface.",
    tags: ["React", "Recharts", "Zustand", "REST API"],
    year: "2024",
    href: "#",
    featured: true,
  },
  {
    id: "3",
    title: "Noto — Reading App",
    description:
      "A minimal reading and annotation tool for long-form content. Features offline support, customisable typography, and a distraction-free reading mode.",
    tags: ["Next.js", "IndexedDB", "Framer Motion", "MDX"],
    year: "2023",
    href: "#",
    featured: true,
  },
  {
    id: "4",
    title: "Haru Design System",
    description:
      "A component library built for a Japanese fintech startup. Documented in Storybook with WCAG 2.1 AA compliance, supporting both light and dark themes.",
    tags: ["React", "Storybook", "Radix UI", "CSS Variables"],
    year: "2023",
    href: "#",
    featured: false,
  },
  {
    id: "5",
    title: "Yuki — Portfolio Template",
    description:
      "An open-source portfolio template for creatives and developers. Focused on fast load times, accessible markup, and a warm, editorial aesthetic.",
    tags: ["Next.js", "TailwindCSS", "Vercel", "Open Source"],
    year: "2023",
    href: "#",
    featured: false,
  },
];

export const skills = [
  "TypeScript",
  "React",
  "Next.js",
  "TailwindCSS",
  "Framer Motion",
  "Node.js",
  "Figma",
  "GraphQL",
  "Storybook",
  "Accessibility",
];

export const experiences = [
  {
    company: "Studio Ren",
    role: "Frontend Engineer",
    period: "2023 — Present",
    description:
      "Leading frontend development for a boutique digital product studio. Collaborating closely with designers to deliver polished, performant web experiences.",
  },
  {
    company: "Lumen SaaS",
    role: "Frontend Developer",
    period: "2021 — 2023",
    description:
      "Rebuilt the core dashboard UI using React and TypeScript. Reduced bundle size by 40% and improved Lighthouse scores across all key metrics.",
  },
  {
    company: "Freelance",
    role: "Web Designer & Developer",
    period: "2019 — 2021",
    description:
      "Worked with small businesses and independent creators to build their online presence. Handled everything from design to deployment.",
  },
];
