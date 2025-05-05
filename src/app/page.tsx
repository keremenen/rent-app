import { FeaturedApartments } from "@/components/featured-apartments";
import { HeroSection } from "@/components/hero-section";
import { HowItWorks } from "@/components/how-it-works";
import { Newsletter } from "@/components/newsletter";
import { PopularNeighborhoods } from "@/components/popular-neighborhoods";
import { PropertyOwners } from "@/components/property-owners";
import { Testimonials } from "@/components/testimonials";
import { getApartments } from "@/lib/utils";

export default async function Home() {
  const featuredApartments = await getApartments({
    take: 4,
  });

  return (
    <main>
      <HeroSection />
      {featuredApartments && (
        <FeaturedApartments apartments={featuredApartments} />
      )}
      <HowItWorks />
      <PopularNeighborhoods />
      <PropertyOwners />
      <Testimonials />
      <Newsletter />
    </main>
  );
}
