"use client";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useApartmentContext, useNeighborhoodContext } from "@/lib/hooks";

export function NeighborhoodHero({ id }: { id: string }) {
  const { selectedNeighborhood } = useNeighborhoodContext();
  const { getTotalApartmentsInNeighborhood } = useApartmentContext();

  const { thumbnail, name, description } = selectedNeighborhood!;
  const apartmentCount = getTotalApartmentsInNeighborhood(id);

  return (
    <section className="relative">
      <div className="absolute inset-0 z-0">
        <Image
          src={thumbnail}
          alt={`A scenic view of the ${name} neighborhood`}
          fill
          className="object-cover brightness-[0.5]"
          priority
        />
      </div>

      <section className="relative z-10 container flex flex-col items-start px-4 py-16 text-white md:py-16">
        <div className="mb-4 flex items-center gap-2 text-sm">
          <Link href="/neighborhoods" className="hover:underline">
            Neighborhoods
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span>{name}</span>
        </div>

        <h1 className="mb-4 text-2xl font-bold tracking-tight sm:text-4xl md:text-4xl">
          {name}
        </h1>

        <p className="mb-6 max-w-2xl text-white/90 md:text-base">
          {description}
        </p>

        <div className="flex items-center gap-4">
          <div className="text-sm">
            <span className="font-bold">{apartmentCount}</span>{" "}
            {apartmentCount === 1 ? "apartment" : "apartments"} available
          </div>
        </div>
      </section>
    </section>
  );
}
