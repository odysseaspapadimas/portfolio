import {
  createRootRoute,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import type { ReactNode } from "react";
import Devtools from '@/components/Devtools'
import appCss from "../styles.css?url";
import Container from "@/components/ui/container";
import Header from "@/components/Header";
import { AnimatedOutlet, AnimatedOutletWrapper } from "@/components/AnimatedOutlet";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      { title: "Odysseas Papadimas - Full-stack Engineer" },
      {
        name: "description",
        content: "Full-stack developer",
      },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function NotFoundComponent() {
  return (
    <div className="flex min-h-app items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">404</h1>
        <p className="mt-2 text-muted-foreground">Page not found</p>
        <a href="/" className="mt-4 inline-block text-primary hover:underline">
          Go home
        </a>
      </div>
    </div>
  );
}

function RootComponent() {
  return (
    <RootDocument>
      <AnimatedOutletWrapper>
        <AnimatedOutlet from={Route.id} />
      </AnimatedOutletWrapper>
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body>
        <Container>
          <Header />
          {children}
        </Container>

        <Devtools />
      </body>
      <Scripts />
    </html>
  );
}
