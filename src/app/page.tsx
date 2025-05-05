import { FeaturedApartments } from "@/components/featured-apartments";
import { HeroSection } from "@/components/hero-section";
import { HowItWorks } from "@/components/how-it-works";
import { Newsletter } from "@/components/newsletter";
import { PopularNeighborhoods } from "@/components/popular-neighborhoods";
import { PropertyOwners } from "@/components/property-owners";
import { Testimonials } from "@/components/testimonials";
import prisma from "@/lib/db";
import { getRandomApartments } from "@/lib/utils";

export default async function Home() {
  const randomApartments = await getRandomApartments({
    take: 4,
  });

  const popularNeighborhoods = await prisma.neighborhood.findMany({
    where: {
      name: {
        in: ["Wrzeszcz", "Oliwa", "Przymorze"],
      },
    },
  });

  return (
    <main>
      <HeroSection />
      {randomApartments && <FeaturedApartments apartments={randomApartments} />}
      <HowItWorks />
      {popularNeighborhoods && (
        <PopularNeighborhoods neighborhoods={popularNeighborhoods} />
      )}
      <PropertyOwners />
      <Testimonials />
      <Newsletter />
    </main>
  );
}
