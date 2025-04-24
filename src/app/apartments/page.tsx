import { ApartmentCard } from "@/components/apartment-card";
import { ApartmentFilters } from "@/components/apartments-filters";
import { ApartmentListHeader } from "@/components/apartments-list-header";
import ShowFiltersButton from "@/components/show-filters-button";
// import SortByOptions from "@/components/sort-by-options";
import prisma from "@/lib/db";

type SearchParams = { [key: string]: string | undefined };

export default async function ApartmentsListPage(props: {
  searchParams: SearchParams;
}) {
  const { minPrice, maxPrice, bedrooms, amenities, availability } =
    await props.searchParams;

  const parseCommaSeparatedString = (value?: string) =>
    value
      ?.split(",")
      .map((item) => Number(item.trim()))
      .filter((num) => !isNaN(num));

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
              minPrice={Number(minPrice)}
              maxPrice={Number(maxPrice)}
              bedrooms={bedrooms}
              amenities={amenities}
              availability={availability}
            />
          </div>

          <div>
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
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
