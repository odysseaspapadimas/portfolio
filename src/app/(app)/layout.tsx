import Header from "@/components/Header";
import Container from "@/components/ui/container";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-background via-background/95 to-background">
      <Container>
        <Header />
        {children}
      </Container>
    </div>
  );
}
