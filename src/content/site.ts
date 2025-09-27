export const site = {
  name: "Odysseas Papadimas",
  title: "Full-stack Engineer",
  availability: "Next start: Oct 14",
  email: "odysseas.papadimas9@gmail.com",
  calendly: "https://calendly.com/odysseas-papadimas9/intro",
  socials: {
    github: "https://github.com/odysseaspapadimas",
    linkedin: "https://linkedin.com/in/odysseas-papadimas",
  },
  offers: [
    {
      name: "Audit & Roadmap",
      duration: "5 days",
      fromPriceEUR: 1800,
      bullets: [
        "Architecture map, risks, priorities",
        "Estimates & delivery plan",
        "Loom walkthrough + handoff",
      ],
      cta: "Book an intro",
      href: "https://calendly.com/odysseas-papadimas9/intro",
    },
    {
      name: "Sprint Build",
      duration: "2 weeks",
      fromPriceEUR: 6000,
      bullets: [
        "Auth, DB, CRUD admin",
        "Payments, deploy, metrics",
        "Weekly demo, async comms",
      ],
      cta: "Check availability",
      href: "https://calendly.com/odysseas-papadimas9/intro",
    },
  ],
  stat: "Built BrainrotAI from zero to 2,200+ users in production",
  stack: ["Next.js", "TypeScript", "Drizzle", "Postgres", "Vercel", "Stripe"],
} as const;
