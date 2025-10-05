export const contactContent = {
  meta: {
    title: "Contact — Odysseas Papadimas",
    description: "Get in touch to discuss projects, bookings, and consultancy.",
  },
  hero: {
    eyebrow: "Get in touch",
    heading: "Let's discuss your project",
    messages: {
      business:
        "Tell me about your business needs. I'll respond within 24 hours with a quick audit and next steps.",
      founders:
        "Share your startup context. I'll reply with a technical assessment and partnership proposal.",
      direct: "Send me a message and I'll get back to you soon.",
    },
  },
  placeholders: {
    name: "Your name",
    email: "your@email.com",
    message: {
      business:
        "Tell me about your current website, business goals, and what you'd like to improve...",
      founders:
        "Describe your product, current tech stack, and what you're looking to build...",
      direct: "Your message here...",
    },
  },
  cta: {
    submit: "Send message",
    submitting: "Sending...",
    bookIntro: "Book intro call",
    contact: "Contact me",
  },
  sidebar: {
    heading: "Prefer a call instead?",
    paragraph: "Book a 20-minute intro call to discuss your project in detail.",
  },
  success: {
    title: "Thanks — I got your message",
    description:
      "I’ll reply within 24 hours. If it’s urgent, you can book an intro call instead.",
    cta: "Book an intro call",
  },
} as const;
