import { ApartmentCard } from "@/components/apartment-card";
import { ApartmentFilters } from "@/components/apartments-filters";
import { ApartmentListHeader } from "@/components/apartments-list-header";
import ShowFiltersButton from "@/components/show-filters-button";
import {
  convertApartmentsToPlain,
  generateFilterObject,
  generatePrismaFilters,
  getApartmentsByFilters,
} from "@/lib/utils";

type SearchParams = { [key: string]: string | undefined };

export default async function ApartmentsListPage(props: {
  searchParams: SearchParams;
}) {
  const { minprice, maxprice, bedrooms, amenities, availability } =
    await props.searchParams;

  // Generate Prisma filters based on the search parameters
  const prismaFilters = generatePrismaFilters({
    minprice,
    maxprice,
    bedrooms,
    amenities,
  });

  // Generate filter object for the UI based on the search parameters
  const filterObject = generateFilterObject({
    minprice,
    maxprice,
    bedrooms,
    amenities,
    availability,
  });

  // Fetch apartments based on the generated Prisma filters
  const apartments = await getApartmentsByFilters(prismaFilters);

  // Convert apartments to a plain format for easier rendering
  const plainApartments = convertApartmentsToPlain(apartments);

  return (
    <div className="bg-background">
      <ApartmentListHeader totalCount={plainApartments.length} />
      <main className="container px-4 py-8">
        <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
          <div className={`space-y-6 lg:block`}>
            <ApartmentFilters
              priceRange={[1000, 4000]}
              priceRangeInitialValues={[1800, 2000]}
              filters={filterObject}
              checkboxSections={[
                {
                  sectionName: "bedrooms",
                  values: ["1", "2", "3", "4", "Studio"],
                },
                { sectionName: "amenities", values: ["Wi-Fi", "TV", "Ogród"] },
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
              {plainApartments.length > 0 ? (
                plainApartments.map((apartment) => (
                  <ApartmentCard key={apartment.id} apartment={apartment} />
                ))
              ) : (
                <div className="flex flex-1 items-center justify-center">
                  <h1 className="text-2xl font-semibold">
                    No apartments found
                  </h1>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
