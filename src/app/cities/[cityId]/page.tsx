"use client";
import { use, useEffect } from "react";
import { CityHero } from "@/components/city-hero";
import CityDescription from "@/components/city-description";
import CityHeader from "@/components/city-header";
import CityGallery from "@/components/city-gallery";
import CityMinimap from "@/components/city-minimap";
import { useCityContext } from "@/lib/hooks";
import CityFeaturedNeighborhoods from "@/components/city-featured-neighborhoods";

type Params = Promise<{ cityId: string }>;

export default function CityPage(props: { params: Params }) {
  const { cityId } = use(props.params);

  const { handleSetSelectedCity, selectedCity } = useCityContext();

  useEffect(() => {
    handleSetSelectedCity(cityId);
  }, [handleSetSelectedCity, cityId]);

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
      <CityHero />

      <main className="container space-y-8 px-4 py-8">
        <CityHeader />

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-8 lg:col-span-2">
            <CityDescription />
            <CityFeaturedNeighborhoods />
          </div>

          <div>
            <CityMinimap />
          </div>
        </div>
        <CityGallery />
      </main>
    </div>
  );
}
