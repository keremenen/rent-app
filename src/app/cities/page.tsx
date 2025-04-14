import CityList from "@/components/city-list";
import { PageHeader } from "@/components/page-headers";
import prisma from "@/lib/db";

export default async function CitiesPage() {
  const cities = await prisma.city.findMany({
    select: {
      id: true,
      name: true,
      shortDescription: true,
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
      <main className="container flex flex-1 flex-col px-4 py-8">
        <CityList cities={cities} />
      </main>
    </div>
  );
}
