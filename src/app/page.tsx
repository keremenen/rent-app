import { FeaturedApartments } from "@/components/featured-apartments";
import { HeroSection } from "@/components/hero-section";
import { HowItWorks } from "@/components/how-it-works";
import { Newsletter } from "@/components/newsletter";
import { PopularNeighborhoods } from "@/components/popular-neighborhoods";
import { PropertyOwners } from "@/components/property-owners";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedApartments />
      <HowItWorks />
      <PopularNeighborhoods />
      <PropertyOwners />
      <Testimonials />
      <Newsletter />
    </main>
  );
}
