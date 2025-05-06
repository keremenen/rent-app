import { ApartmentCard } from "@/components/apartment-card";
import { ApartmentFilters } from "@/components/apartments-filters";
import { ApartmentListHeader } from "@/components/apartments-list-header";
import ShowFiltersButton from "@/components/show-filters-button";
import prisma from "@/lib/db";
import { generatePrismaFilters, parseStringsToStringArray } from "@/lib/utils";

type SearchParams = { [key: string]: string | undefined };

export default async function ApartmentsListPage(props: {
  searchParams: SearchParams;
}) {
  const { minprice, maxprice, bedrooms, amenities, availability } =
    await props.searchParams;

  const prismaFilters = generatePrismaFilters({
    minprice,
    maxprice,
    bedrooms,
    amenities,
  });

  const generateFilterObject = ({
    minprice,
    maxprice,
    bedrooms,
    amenities,
    availability,
  }: {
    minprice: string | undefined;
    maxprice: string | undefined;
    bedrooms: string | undefined;
    amenities: string | undefined;
    availability: string | undefined;
  }) => {
    type FilterObject = {
      priceRangeValues: number[] | undefined;
      checkboxValues?: { forSection: string; values: string[] }[] | undefined;
      radioGroupValues?: { forSection: string; value: string }[] | undefined;
    };

    const filters: FilterObject = {
      priceRangeValues: [],
    };

    if (minprice && maxprice) {
      filters.priceRangeValues = [Number(minprice), Number(maxprice)];
    }

    if (bedrooms) {
      const parsedBedrooms = parseStringsToStringArray(bedrooms);
      filters.checkboxValues = [
        {
          forSection: "bedrooms",
          values: parsedBedrooms!,
        },
      ];
    }

    if (amenities) {
      const parsedAmenities = parseStringsToStringArray(amenities);
      filters.checkboxValues = [
        {
          forSection: "amenities",
          values: parsedAmenities!,
        },
      ];
    }

    if (availability) {
      filters.radioGroupValues = [
        {
          forSection: "availability",
          value: availability,
        },
      ];
    }

    return filters;
  };

  const filterObject = generateFilterObject({
    minprice,
    maxprice,
    bedrooms,
    amenities,
    availability,
  });

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
      AND: prismaFilters,
    },
  });

  if (!apartments || apartments.length === 0) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <h1 className="text-2xl font-semibold">No apartments found</h1>
      </div>
    );
  }

  // const temporaryFilterObject = {
  //   priceRangeValues: [1000, 4000],
  //   checkboxValues: [
  //     { forSection: "bedrooms", values: ["1", "2"] },
  //     { forSection: "amenities", values: ["Wi-Fi", "TV"] },
  //   ],
  //   radioGroupValues: [{ forSection: "availability", value: "Available Now" }],
  // };

  const plainApartments = apartments.map((apartment) => ({
    ...apartment,
    squareFootage: apartment.squareFootage?.toNumber(),
    monthlyRent: apartment.monthlyRent?.toNumber(),
  }));

  console.log("Filter Object:", filterObject);
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
