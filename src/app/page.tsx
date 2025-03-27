import { FeaturedApartments } from "@/components/featured-apartments";
import { HeroSection } from "@/components/hero-section";
import { HowItWorks } from "@/components/how-it-works";
import { MainNavigation } from "@/components/main-navigation";

export default function Home() {
  return (
    <div>
      <MainNavigation />

      <main>
        <HeroSection />
        <FeaturedApartments />
        <HowItWorks />
      </main>
    </div>
  );
}
