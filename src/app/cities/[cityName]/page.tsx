"use client";
import { use, useEffect } from "react";
import { CityHero } from "@/components/city-hero";
import CityDescription from "@/components/city-description";
import CityHeader from "@/components/city-header";
import CityGallery from "@/components/city-gallery";
import CityMinimap from "@/components/city-minimap";
import { useCityContext } from "@/lib/hooks";

export default function CityPage() {
  const { getCityById, selectedCity } = useCityContext();

  console.log("CityPage", selectedCity?.name);

  useEffect(() => {
    getCityById("gdanskdawdawdaw");
  }, [getCityById]);

  if (!selectedCity) {
    return (
      <main className="container flex flex-1 flex-col justify-center px-4 py-8">
        <div className="flex flex-col items-center justify-center rounded-lg border border-dashed p-8 text-center">
          <h3 className="mb-2 text-lg font-medium">No cities found</h3>
        </div>
      </main>
    );
  }

  return (
    <div className="bg-background">
      {/* <CityHero
        cityId={city.id}
        backgroundImage={city.coverImage!}
        cityName={city.name}
        cityDescription={city.shortDescription!}
      /> */}

      <main className="container space-y-8 px-4 py-8">
        {/* <CityHeader cityName={city.name} cityId={city.id} /> */}

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            {/* <CityDescription
              cityName={city.name}
              cityDescription={city.longDescription}
              population={city.population}
              area={city.area}
            /> */}
            {/* <CityFeaturedNeighborhoods
              cityName={city.name}
              neighborhoods={neighborhoods}
            /> */}
          </div>

          <div>
            <CityMinimap />
          </div>
        </div>
        {/* <CityGallery gallery={city.gallery} cityName={city.name} /> */}
      </main>
    </div>
  );
}
