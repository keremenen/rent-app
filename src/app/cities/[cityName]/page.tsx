import { CityHero } from "@/components/city-hero";
import prisma from "@/lib/db";
import CityDescription from "@/components/city-description";
import CityHeader from "@/components/city-header";
import CityFeaturedNeighborhoods from "@/components/city-featured-neighborhoods";
import CityGallery from "@/components/city-gallery";
import CityMinimap from "@/components/city-minimap";

export default async function CityPage({
  params,
}: {
  params: Promise<{ cityName: string }>;
}) {
  const { cityName } = await params;

  const city = await prisma.city.findUnique({
    where: { id: cityName },
  });

  if (!city) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <h1 className="text-2xl font-semibold">City not found</h1>
      </div>
    );
  }

  return (
    <div className="bg-background">
      <CityHero
        cityId={city.id}
        backgroundImage={city.coverImage!}
        cityName={city.name}
        cityDescription={city.shortDescription!}
      />

      <main className="container space-y-8 px-4 py-8">
        <CityHeader cityName={city.name} cityId={city.id} />

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            {/* <CityDescription
              cityName={city.name}
              cityDescription={city.longDescription}
              population={city.statistics!.population}
              area={city.statistics!.area}
            /> */}
            <CityFeaturedNeighborhoods
              cityName={city.name}
              neighborhoods={city.neighborhoods}
            />
            <CityGallery gallery={city.gallery} cityName={city.name} />
          </div>

          <div>
            <CityMinimap />
          </div>
        </div>
      </main>
    </div>
  );
}
