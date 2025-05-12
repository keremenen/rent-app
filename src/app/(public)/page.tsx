import { FeaturedApartments } from "@/components/featured-apartments";
import { HeroSection } from "@/components/hero-section";
import { HowItWorks } from "@/components/how-it-works";
import { PopularNeighborhoods } from "@/components/popular-neighborhoods";
import { PropertyOwners } from "@/components/property-owners";
import { Testimonials } from "@/components/testimonials";

export default async function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedApartments />
      <HowItWorks />
      <PopularNeighborhoods display={["wrzeszcz", "oliwa", "nowy-port"]} />
      <PropertyOwners />
      <Testimonials />
    </main>
  );
}
