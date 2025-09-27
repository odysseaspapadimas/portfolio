import { redirect } from "next/navigation";
import Link from "next/link";
import { headers } from "next/headers";

import { buttonVariants } from "@/components/ui/button";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

const webhookURL =
  "https://discord.com/api/webhooks/1421527740640919608/bZgU1SOovpTtFpbKzullrjLlsgAypPu1Cj7C_FpL71dzYrBaXPOajfEBtETuqXkGguMb";

async function sendContact(formData: FormData) {
  "use server";

  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;
  const source = formData.get("source") as string;

  if (!name || !email || !message) {
    throw new Error("Missing required fields");
  }

  const discordMessage = `**New Contact Form Submission**

**Name:** ${name}
**Email:** ${email}
**Source:** ${source || "Direct"}
**Message:**
${message}`;

  try {
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
  } catch (error) {
    console.error("Error sending to Discord:", error);
    throw new Error("Failed to send message");
  }

  redirect("/contact/success");
}

export default async function ContactPage() {
  const headersList = await headers();
  const referer = headersList.get("referer") || "";
  const source = referer.includes("/business")
    ? "business"
    : referer.includes("/founders")
    ? "founders"
    : "direct";

  return (
    <main className="mx-auto flex max-w-5xl flex-col gap-16 px-6 py-20">
      <section className="space-y-6 text-balance">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground">
            Get in touch
          </p>
          <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
            Let&apos;s discuss your project
          </h1>
          <p className="max-w-2xl text-lg text-muted-foreground">
            {source === "business"
              ? "Tell me about your business needs. I&apos;ll respond within 24 hours with a quick audit and next steps."
              : source === "founders"
              ? "Share your startup context. I&apos;ll reply with a technical assessment and partnership proposal."
              : "Send me a message and I&apos;ll get back to you soon."}
          </p>
        </div>
      </section>

      <section className="space-y-6">
        <form action={sendContact} className="space-y-6">
          <input type="hidden" name="source" value={source} />

          <div className="grid gap-4 md:grid-cols-2">
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
                placeholder="Your name"
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
                placeholder="your@email.com"
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
                  ? "Tell me about your current website, business goals, and what you'd like to improve..."
                  : source === "founders"
                  ? "Describe your product, current tech stack, and what you're looking to build..."
                  : "Your message here..."
              }
            />
          </div>

          <button
            type="submit"
            className={cn(buttonVariants({ size: "lg" }), "w-full md:w-auto")}
          >
            Send message
          </button>
        </form>
      </section>

      <section className="space-y-4 rounded-3xl border border-border/60 bg-card/20 p-8 backdrop-blur text-center">
        <h2 className="text-xl font-semibold">Prefer a call instead?</h2>
        <p className="text-sm text-muted-foreground">
          Book a 20-minute intro call to discuss your project in detail.
        </p>
        <Link
          href={site.calendly}
          target="_blank"
          rel="noreferrer"
          className={cn(buttonVariants({ size: "lg" }), "gap-2")}
        >
          Book intro call
        </Link>
      </section>
    </main>
  );
}
