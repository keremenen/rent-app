import { CityHero } from "@/components/city-hero";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CityGallery } from "@/components/city-gallery";
import prisma from "@/lib/db";
import CityDescription from "@/components/city-description";
import CityHeader from "@/components/city-header";
import CityFeaturedNeighborhoods from "@/components/city-featured-neighborhoods";

export default async function CityPage({
  params,
}: {
  params: Promise<{ cityName: string }>;
}) {
  const { cityName } = await params;

  const city = await prisma.city.findUnique({
    where: { id: cityName },
    include: {
      gallery: true,
      statistics: true,
      neighborhoods: true,
    },
  });

  if (!city) {
    return (
      <div className="flex h-screen items-center justify-center">
        <h1 className="text-2xl font-bold">City not found</h1>
      </div>
    );
  }

  return (
    <div className="bg-background">
      <CityHero city={city} />

      <main className="container px-4 py-8">
        <CityHeader cityName={city.name} />

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <CityDescription city={city} className="mb-8" />

            <CityFeaturedNeighborhoods
              cityName={city.name}
              neighborhoods={city.neighborhoods}
            />

            {/* <CityAttractions attractions={city.attractions} className="mb-8" /> */}

            {city.gallery.length > 0 && (
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle>Photo Gallery</CardTitle>
                  <CardDescription>
                    Explore {city.name} through photos
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <CityGallery gallery={city.gallery} />
                </CardContent>
              </Card>
            )}
          </div>

          <div>
            <Card className="sticky top-20">
              <CardHeader>
                <CardTitle>Location</CardTitle>
                <CardDescription>{city.name} on the map</CardDescription>
              </CardHeader>
              <CardContent>
                {/* <CityMap city={city} neighborhoods={city.neighborhoods} /> */}

                <div className="mt-4 grid grid-cols-2 gap-2 text-center">
                  <div>
                    <div className="text-primary text-2xl font-bold">
                      {city.statistics.walkScore}
                    </div>
                    <div className="text-muted-foreground text-xs">
                      Walk Score
                    </div>
                  </div>
                  <div>
                    <div className="text-primary text-2xl font-bold">
                      {city.statistics.commuteTime} min
                    </div>
                    <div className="text-muted-foreground text-xs">
                      Avg Commute
                    </div>
                  </div>
                </div>

                <div className="mt-6 space-y-3">
                  <Button className="w-full" asChild>
                    <Link href={`/cities/gdansk/apartments`}>
                      Browse All Apartments
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/contact">Contact a Local Agent</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
