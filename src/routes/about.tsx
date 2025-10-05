import { createFileRoute, Link } from "@tanstack/react-router";
import { Github, Linkedin, Mail } from "lucide-react";

import {
  Timeline,
  TimelineContent,
  TimelineDot,
  TimelineHeading,
  TimelineItem as TimelineEntry,
  TimelineLine,
} from "@/components/ui/timeline";
import { buttonVariants } from "@/components/ui/button";
import { about } from "@/content/about";
import { experience } from "@/content/experience";
import { home } from "@/content/home";
import { contactContent } from "@/content/contact";
import type { TimelineItem as ExperienceItem } from "@/content/experience";
import { cn } from "@/lib/utils";
import Page from "@/components/ui/Page";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      {
        title: `About — ${about.name}`,
      },
      {
        name: "description",
        content: about.intro[0],
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
  <Page className="flex flex-col gap-16">
      {/* Hero */}
      <section className="space-y-6">
        <div className="space-y-3">
          <h1 className="text-4xl font-semibold md:text-5xl">
            Hi, I&apos;m {about.name} 👋
          </h1>
          <p className="text-lg text-muted-foreground">{about.title}</p>
          {about.intro.map((paragraph) => (
            <p key={paragraph} className="max-w-2xl text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={about.calendly}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ size: "lg" }), "gap-2")}
          >
            {home.flagship.ctas.bookIntro}
          </a>
          <Link
            to="/contact"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "gap-2"
            )}
          >
            <Mail className="size-4" />
            {contactContent.cta.contact}
          </Link>
        </div>
        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          <a
            href={about.socials.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 hover:text-foreground"
          >
            <Github className="size-4" /> GitHub
          </a>
          <a
            href={about.socials.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 hover:text-foreground"
          >
            <Linkedin className="size-4" /> LinkedIn
          </a>
        </div>
      </section>

      {/* Quick facts */}
      <section>
        <h2 className="text-2xl font-semibold">Quick facts</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-3">
          {about.quickFacts.map((fact) => (
            <div
              key={fact.label}
              className="rounded-2xl border border-border/70 bg-card/30 p-4"
            >
              <div className="text-xs uppercase tracking-[0.28em] text-muted-foreground">
                {fact.label}
              </div>
              <div className="mt-2 text-base text-foreground">{fact.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Experience</h2>
          <p className="text-sm text-muted-foreground">
            Roles where I owned delivery across product, engineering, and
            operations.
          </p>
        </div>
        <Timeline className="gap-y-4">
          {experience.map((item: ExperienceItem, index) => {
            const isLast = index === experience.length - 1;
            const isCurrent = index === 0;

            return (
              <TimelineEntry
                key={`${item.org}-${item.role}`}
                status={isCurrent ? "default" : "done"}
              >
                <TimelineHeading>
                  <span className="text-lg font-semibold text-foreground">
                    {item.org}
                  </span>{" "}
                  <span className="text-sm text-muted-foreground">
                    — {item.role}
                  </span>{" "}
                  <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground/70">
                    [ {item.start} – {item.end} ]
                  </span>
                </TimelineHeading>
                <TimelineDot status={isCurrent ? "current" : "done"} />
                {!isLast && <TimelineLine done />}
                <TimelineContent className="space-y-3 text-sm text-muted-foreground">
                  <ul className="space-y-2">
                    {item.bullets.map((bullet) => (
                      <li key={bullet} className="leading-tight">
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  {item.stack && (
                    <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground/80">
                      Stack: {item.stack.join(", ")}
                    </p>
                  )}
                  {item.link && (
                    <Link
                      to={item.link}
                      className="text-sm font-medium text-primary underline underline-offset-4"
                    >
                      Case study
                    </Link>
                  )}
                </TimelineContent>
              </TimelineEntry>
            );
          })}
        </Timeline>
      </section>

      {/* Skills */}
      <section className="space-y-4 rounded-3xl border border-border/60 bg-card/20 p-8 backdrop-blur">
        <h2 className="text-2xl font-semibold">Skills</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {about.skills.map((group) => (
            <div key={group.label} className="space-y-2">
              <h3 className="text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground">
                {group.label}
              </h3>
              <ul className="flex flex-wrap gap-2 text-sm text-muted-foreground">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border/60 px-3 py-1"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Case study highlight */}
      <section className="space-y-4 rounded-3xl border border-primary/40 bg-primary/10 p-8">
        <div className="space-y-2">
          <h2 className="text-xl font-semibold text-foreground">BrainrotAI</h2>
          <p className="text-sm text-muted-foreground">
            AI video generator used by 2,200+ creators and #11 Product of the
            Day on Product Hunt. Built end-to-end: auth, billing, rendering
            pipeline, admin, analytics.
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            to="/case-studies/brainrot"
            className={cn(buttonVariants({ size: "sm" }), "gap-1")}
          >
            {home.flagship.ctas.caseStudy}
          </Link>
          <a
            href={about.calendly}
            target="_blank"
            rel="noreferrer"
            className={cn(
              buttonVariants({ variant: "outline", size: "sm" }),
              "gap-1"
            )}
          >
            {home.flagship.ctas.bookIntro}
          </a>
        </div>
      </section>

      {/* Contact */}
      <section className="space-y-4 rounded-3xl border border-border/60 bg-card/20 p-8 backdrop-blur">
        <h2 className="text-2xl font-semibold">
          Let&apos;s build your next release
        </h2>
        <p className="text-sm text-muted-foreground">
          Share context and I&apos;ll reply with a short audit, starter plan,
          and a time to connect.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href={about.calendly}
            target="_blank"
            rel="noreferrer"
            className={cn(buttonVariants({ size: "lg" }), "gap-2")}
          >
            {home.flagship.ctas.bookIntro}
          </a>
          <Link
            to="/contact"
            className={cn(
              buttonVariants({ variant: "outline", size: "lg" }),
              "gap-2"
            )}
          >
            <Mail className="size-4" />
            {contactContent.cta.contact}
          </Link>
        </div>
      </section>
    </Page>
  );
}

