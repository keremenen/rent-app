import { ApartmentCard } from "@/components/apartment-card";
import { ApartmentFilters } from "@/components/apartments-filters";
import { NeighborhoodHeader } from "@/components/neighborhood-header";
import { NeighborhoodStats } from "@/components/neighborhood-stats";
import SortByOptions from "@/components/sort-by-options";
import prisma from "@/lib/db";

type NeighborhoodParams = {
  params: Promise<{ neighborhoodId: string }>;
};

export default async function NeighborhoodPage({ params }: NeighborhoodParams) {
  const { neighborhoodId } = await params;

  const neighborhood = await prisma.neighborhood.findUnique({
    where: { id: neighborhoodId },
  });

  const apartments = await prisma.apartment.findMany({
    where: { neighborhoodId: neighborhoodId },
    select: {
      id: true,
      title: true,
      address: true,
      bathrooms: true,
      bedrooms: true,
      squareFootage: true,
      thumbnail: true,
      availableFrom: true,
      amenities: true,
      monthlyRent: true,
    },
  });

  if (!neighborhood) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <h1 className="text-2xl font-semibold">Neighborhood not found</h1>
      </div>
    );
  }

  return (
    <div className="bg-background">
      <NeighborhoodHeader
        backgroundImage={neighborhood.thumbnail}
        name={neighborhood.name}
        description={neighborhood?.description}
        apartmentCount={apartments.length}
      />
      <main className="container px-4 py-8">
        <div className="mb-6 space-y-6">
          <NeighborhoodStats
            averageRent={2000}
            commuteTime={neighborhood.commuteTime}
            population={2}
            walkScore={neighborhood.walkScore}
            features={neighborhood.features}
          />
          <div className="text-muted-foreground text-sm">
            {apartments.length === 1 ? "apartment" : "apartments"} available
          </div>
        </div>
        <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
          <div className={`space-y-6 lg:block`}>
            <SortByOptions sortOption={"priceAsc"} />
            <ApartmentFilters />
          </div>

          <div>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
              {apartments.map((apartment) => (
                <ApartmentCard
                  key={apartment.id}
                  address={apartment.address}
                  amenities={apartment.amenities}
                  id={apartment.id}
                  thumbnail={apartment.thumbnail}
                  monthlyRent={Number(apartment.monthlyRent)}
                  title={apartment.title}
                  bedrooms={apartment.bedrooms}
                  bathrooms={apartment.bathrooms}
                  squareFootage={Number(apartment.squareFootage)}
                  availableFrom={apartment.availableFrom}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
