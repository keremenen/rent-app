import { ApartmentCard } from "@/components/apartment-card";
import { ApartmentFilters } from "@/components/apartments-filters";
import { ApartmentListHeader } from "@/components/apartments-list-header";
import ShowFiltersButton from "@/components/show-filters-button";
import prisma from "@/lib/db";
import { parseCommaSeparatedString } from "@/lib/utils";

type SearchParams = { [key: string]: string | undefined };

export default async function ApartmentsListPage(props: {
  searchParams: SearchParams;
}) {
  const { minPrice, maxPrice, bedrooms } = await props.searchParams;

  // Parse the bedrooms string into an array of numbers
  const parsedBedrooms = parseCommaSeparatedString(bedrooms);

  const apartments = await prisma.apartment.findMany({
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
    where: {
      monthlyRent: {
        gte: Number(minPrice) || undefined,
        lte: Number(maxPrice) || undefined,
      },
      OR: parsedBedrooms?.map((bedroomCount) => ({ bedrooms: bedroomCount })),
    },
  });

  // Convert Prisma Decimal fields to plain numbers
  const plainApartments = apartments.map((apartment) => ({
    ...apartment,
    squareFootage: apartment.squareFootage?.toNumber(),
    monthlyRent: apartment.monthlyRent?.toNumber(),
  }));

  if (!apartments) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <h1 className="text-2xl font-semibold">No apartments found</h1>
      </div>
    );
  }

  return (
    <div className="bg-background">
      <ApartmentListHeader totalCount={apartments.length} viewMode={"list"} />
      <main className="container px-4 py-8">
        <ShowFiltersButton length={apartments.length} />

        <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
          <div className={`space-y-6 lg:block`}>
            {/* <SortByOptions sortOption={"priceAsc"} /> */}
            <ApartmentFilters
              priceRange={[1000, 4000]}
              filters={{
                priceRangeValues: [1200, 3000],
                checkboxValues: [
                  { forSection: "amenities", values: ["1", "2"] },
                ],
                radioGroupValues: [
                  { forSection: "availability", value: "All" },
                ],
              }}
              checkboxSections={[
                { sectionName: "bedrooms", values: ["1", "2", "3"] },
                // { sectionName: "Kitchens", values: ["1", "2", "3"] },
                { sectionName: "amenities", values: ["1", "2", "3"] },
              ]}
              radioGroupSections={[
                {
                  sectionName: "availability",
                  values: ["All", "Available Now", "Comming Soon"],
                },
              ]}
            />
          </div>

          <div>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {plainApartments.map((apartment) => (
                <ApartmentCard key={apartment.id} apartment={apartment} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
