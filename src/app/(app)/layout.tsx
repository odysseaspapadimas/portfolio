import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Background from "@/components/Background";
import Header from "@/components/Header";
import Container from "@/components/ui/container";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Odysseas Papadimas",
  description: "Full-stack developer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <Background />
        <Container>
          <Header />
          {children}
        </Container>
      </body>
    </html>
  );
}
