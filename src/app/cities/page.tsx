import CityList, { CitiesEmptyState } from "@/components/city-list";
import { PageHeader } from "@/components/page-headers";
import prisma from "@/lib/db";

export default async function CitiesPage() {
  const cities = await prisma.city.findMany({
    select: {
      id: true,
      name: true,
      shortDescription: true,
      longDescription: true,
      coverImage: true,
      population: true,
      area: true,
    },
  });

  return (
    <div className="bg-background pb-8">
      <PageHeader
        title="Explore Cities"
        description="Discover the perfect city for your next home"
      />
      <main className="container px-4 py-8">
        {cities.length === 0 ? (
          <CitiesEmptyState />
        ) : (
          <CityList cities={cities} />
        )}
      </main>
    </div>
  );
}
