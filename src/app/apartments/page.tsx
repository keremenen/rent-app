import { ApartmentCard } from "@/components/apartment-card";
import { ApartmentFilters } from "@/components/apartments-filters";
import { ApartmentListHeader } from "@/components/apartments-list-header";
import ShowFiltersButton from "@/components/show-filters-button";
import prisma from "@/lib/db";
import {
  parseStringsToStringArray,
  parseStringsToNumberArray,
} from "@/lib/utils";

type SearchParams = { [key: string]: string | undefined };

export default async function ApartmentsListPage(props: {
  searchParams: SearchParams;
}) {
  const { minprice, maxprice, bedrooms, amenities } = await props.searchParams;

  // Parse the bedrooms string into an array of numbers
  const parsedBedrooms = parseStringsToNumberArray(bedrooms);
  const parsedAnities = parseStringsToStringArray(amenities);

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
        gte: Number(minprice) || undefined,
        lte: Number(maxprice) || undefined,
      },
      OR: parsedBedrooms?.map((bedroomCount) => ({ bedrooms: bedroomCount })),
      AND: parsedAnities?.map((amenity) => ({
        amenities: {
          has: amenity,
        },
      })),
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

  const generateFiltersObject = () => {
    const currentFilters = {};

    if (minprice || maxprice) {
      Object.assign(currentFilters, {
        priceRangeValues: [
          minprice ? Number(minprice) : 0,
          maxprice ? Number(maxprice) : Infinity,
        ],
      });
    }

    if (bedrooms) {
      Object.assign(currentFilters, {
        checkboxValues: [
          {
            forSection: "bedrooms",
            values: parseStringsToStringArray(bedrooms),
          },
        ],
      });
    }

    if (amenities) {
      Object.assign(currentFilters, {
        checkboxValues: [
          {
            forSection: "amenities",
            values: parseStringsToStringArray(amenities),
          },
        ],
      });
    }

    return currentFilters;
  };

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
              filters={generateFiltersObject()}
              checkboxSections={[
                { sectionName: "bedrooms", values: ["1", "2", "3", "4"] },
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
