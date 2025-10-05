export const about = {
  name: "Odysseas Papadimas",
  title: "Full-stack Engineer",
  intro: [
    "I design, build, and ship production web apps and SaaS.",
    "I partner with founders and local businesses to launch features that move real metrics.",
  ],
  quickFacts: [
    { label: "Based in", value: "Athens, Greece (remote-friendly)" },
    { label: "Experience", value: "4+ years" },
    { label: "Work mode", value: "Product sprints, clear handovers" },
  ],
  skills: [
    {
      label: "Product & Frontend",
      items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    },
    {
      label: "Backend & Data",
      items: [
        "Node.js",
        "Laravel",
        "Drizzle ORM",
        "Postgres",
        "Stripe integrations",
      ],
    },
    {
      label: "Infrastructure & Ops",
      items: [
        "Cloudflare",
        "AWS",
        "CI/CD pipelines",
        "Observability dashboards",
        "Auth reviews",
      ],
    },
    {
      label: "Collaboration",
      items: ["Linear", "Notion", "Async Loom updates", "User interviews"],
    },
  ],
  calendly: "https://calendly.com/odysseas-papadimas9/intro",
  socials: {
    github: "https://github.com/odysseaspapadimas",
    linkedin: "https://www.linkedin.com/in/odysseas-papadimas/",
  },
} as const;

