export type TimelineItem = {
  org: string;
  role: string;
  start: string;
  end: string;
  bullets: string[];
  stack?: string[];
  link?: string;
};

export const experience: TimelineItem[] = [
  {
    org: "Luca Health",
    role: "Full-stack Developer",
    start: "Dec 2024",
    end: "Present",
    bullets: [
      "Ship concussion management software used by schools with thousands of student athletes.",
      "Delivered symptom-tracking mobile apps to Android and iOS stores for students and staff.",
    ],
    stack: ["React", "Laravel", "AWS"],
  },
  {
    org: "Evline",
    role: "Front-end Developer",
    start: "Dec 2023",
    end: "Dec 2024",
    bullets: [
      "Owned web and mobile feature deliveries end-to-end within a small cross-functional team.",
      "Took over live projects from previous developers and shipped updates without downtime.",
    ],
    stack: ["React", "Next.js", "TypeScript", "Tailwind"],
  },
  {
    org: "Pop2See",
    role: "Full-stack Developer (Intern → Volunteer)",
    start: "Jun 2023",
    end: "Present",
    bullets: [
      "Built an AI web app that assists blind and visually impaired users with navigation tasks.",
      "Continue to volunteer and maintain core features alongside the founding team.",
    ],
    stack: ["React", "Next.js", "AI APIs"],
  },
  {
    org: "BrainrotAI",
    role: "Founder & Engineer",
    start: "2024",
    end: "Present",
    bullets: [
      "AI video generator used by 2,200+ creators; #11 Product of the Day on Product Hunt.",
      "Complete SaaS surface: auth, billing, rendering pipeline, admin, analytics.",
    ],
    stack: ["Next.js", "Drizzle", "Postgres", "Stripe", "Remotion", "Vercel"],
    link: "/case-studies/brainrot",
  },
];

