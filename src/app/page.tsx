import { FeaturedApartments } from "@/components/featured-apartments";
import { HeroSection } from "@/components/hero-section";
import { HowItWorks } from "@/components/how-it-works";
import { PopularNeighborhoods } from "@/components/popular-neighborhoods";
import { PropertyOwners } from "@/components/property-owners";
import { Testimonials } from "@/components/testimonials";
import { getRandomApartments } from "@/lib/utils";

export default async function Home() {
  const randomApartments = await getRandomApartments({
    take: 4,
  });

  return (
    <main>
      <HeroSection />
      <FeaturedApartments apartments={randomApartments} />
      <HowItWorks />
      <PopularNeighborhoods display={["Wrzeszcz", "Oliwa", "Przymorze"]} />
      <PropertyOwners />
      <Testimonials />
    </main>
  );
}
