import { buttonVariants } from "@/components/ui/button";
import Page from "@/components/ui/Page";
import { site } from "@/content/site";
import { contactContent } from "@/content/contact";
import { cn } from "@/lib/utils";
import { useMutation } from "@tanstack/react-query";
import { createFileRoute, redirect } from "@tanstack/react-router";
import { createServerFn, useServerFn } from "@tanstack/react-start";
import React from "react";

type ContactPayload = {
  name: string;
  email: string;
  message: string;
  source: string;
};

const webhookURL =
  "https://discord.com/api/webhooks/1421527740640919608/bZgU1SOovpTtFpbKzullrjLlsgAypPu1Cj7C_FpL71dzYrBaXPOajfEBtETuqXkGguMb";

export const sendContactFn = createServerFn({ method: "POST" })
  .inputValidator((data: ContactPayload) => data)
  .handler(async ({ data }) => {
    const { name, email, message, source } = data;

    if (!name || !email || !message) {
      throw new Error("Missing required fields");
    }

    const discordMessage = `**New Contact Form Submission**\n\n**Name:** ${name}\n**Email:** ${email}\n**Source:** ${
      source || "Direct"
    }\n**Message:**\n${message}`;

    const response = await fetch(webhookURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ content: discordMessage }),
    });

    if (!response.ok) {
      throw new Error("Failed to send message");
    }
    throw redirect({ to: "/contact/success" });
  });

export const Route = createFileRoute("/contact/")({
  head: () => ({
    meta: [
      { title: contactContent.meta.title },
      { name: "description", content: contactContent.meta.description },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const sendContact = useServerFn(sendContactFn);

  const mutation = useMutation({
    mutationKey: ["contactForm"],
    mutationFn: (data: ContactPayload) => sendContact({ data }),
  });
  const referer = typeof window !== "undefined" ? document.referrer : "";
  const source = referer.includes("/business")
    ? "business"
    : referer.includes("/founders")
    ? "founders"
    : "direct";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const message = formData.get("message") as string;

    try {
      await mutation.mutateAsync({ name, email, message, source });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send message. Please try again.");
    } finally {
    }
  };

  return (
    <Page className="flex flex-col gap-12 sm:gap-16">
      <section className="space-y-4 sm:space-y-6 text-balance">
        <div className="space-y-3 sm:space-y-4">
          <p className="text-xs sm:text-sm uppercase tracking-[0.3em] text-muted-foreground">
            {contactContent.hero.eyebrow}
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
            {contactContent.hero.heading}
          </h1>
          <p className="max-w-2xl text-base sm:text-lg text-muted-foreground">
            {source === "business"
              ? contactContent.hero.messages.business
              : source === "founders"
              ? contactContent.hero.messages.founders
              : contactContent.hero.messages.direct}
          </p>
        </div>
      </section>

      <section className="space-y-6 sm:space-y-8">
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <input type="hidden" name="source" value={source} />

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name *
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder={contactContent.placeholders.name}
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email *
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder={contactContent.placeholders.email}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={6}
              className="w-full rounded-lg border border-border bg-background px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
              placeholder={
                source === "business"
                  ? contactContent.placeholders.message.business
                  : source === "founders"
                  ? contactContent.placeholders.message.founders
                  : contactContent.placeholders.message.direct
              }
            />
          </div>

          <button
            type="submit"
            disabled={mutation.isPending}
            className={cn(
              buttonVariants({ size: "lg" }),
              "w-full sm:w-auto",
              mutation.isPending ? "opacity-60 pointer-events-none" : ""
            )}
          >
            {mutation.isPending ? (
              <span className="inline-flex items-center gap-2">
                <svg
                  className="animate-spin h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                  ></path>
                </svg>
                {contactContent.cta.submitting}
              </span>
            ) : (
              contactContent.cta.submit
            )}
          </button>
        </form>
      </section>

      <section className="space-y-4 rounded-3xl border border-border/60 bg-card/20 p-6 sm:p-8 backdrop-blur text-center">
        <h2 className="text-lg sm:text-xl font-semibold">
          {contactContent.sidebar.heading}
        </h2>
        <p className="text-sm text-muted-foreground">{contactContent.sidebar.paragraph}</p>
        <a
          href={site.calendly}
          target="_blank"
          rel="noreferrer"
          className={cn(
            buttonVariants({ size: "lg" }),
            "gap-2 w-full sm:w-auto"
          )}
        >
          {contactContent.cta.bookIntro}
        </a>
      </section>
    </Page>
  );
}
