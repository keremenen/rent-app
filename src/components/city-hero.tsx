import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type CityHeroProps = {
  backgroundImage: string;
  cityName: string;
  cityDescription: string;
  cityId: string;
};

export function CityHero({
  cityId,
  backgroundImage,
  cityName,
  cityDescription,
}: CityHeroProps) {
  return (
    <div className="relative">
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage || "/placeholder-image.jpg"}
          alt={`${cityName} background image`}
          fill
          className="object-cover brightness-[0.6]"
          priority
        />
      </div>

      <div className="relative z-10 container px-4 py-16 md:py-24">
        <div className="flex flex-col items-start text-white">
          <div className="mb-4 flex items-center gap-2 text-sm">
            <Link href="/cities" className="hover:underline">
              Cities
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span>{cityName}</span>
          </div>

          <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {cityName}
          </h1>

          <p className="mb-6 max-w-2xl text-white/90 md:text-lg">
            {cityDescription}
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href={`/cities/${cityId}/apartments`}
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-4 py-2 text-sm font-medium"
            >
              Browse Apartments
            </Link>
            <Link
              href="#neighborhoods"
              className="rounded-full bg-white/20 px-4 py-2 text-sm font-medium text-white hover:bg-white/30"
            >
              Explore Neighborhoods
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
