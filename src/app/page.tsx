import { HeroSection } from "@/components/hero-section";
import { MainNavigation } from "@/components/main-navigation";

export default function Home() {
  return (
    <div>
      <MainNavigation />

      <main>
        <HeroSection />
      </main>
    </div>
  );
}
