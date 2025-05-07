"use client";

import Image from "next/image";
import Link from "next/link";

import { ChevronRight } from "lucide-react";
import { useApartmentContext, useNeighborhoodContext } from "@/lib/hooks";

export function NeighborhoodHero() {
  const { selectedNeighborhood } = useNeighborhoodContext();
  const { getTotalAparmentsInNeighborhood } = useApartmentContext();

  const { thumbnail, name, description } = selectedNeighborhood!;
  const apartmentCount = getTotalAparmentsInNeighborhood("wrzeszcz");

  return (
    <section className="relative">
      <div className="absolute inset-0 z-0">
        <Image
          src={thumbnail}
          alt={`${name} neighborhood`}
          fill
          className="object-cover brightness-[0.5]"
          priority
        />
      </div>

      <section className="relative z-10 container px-4 py-16 md:py-24">
        <div className="flex flex-col items-start text-white">
          <div className="mb-4 flex items-center gap-2 text-sm">
            <Link href="/neighborhoods" className="hover:underline">
              Neighborhoods
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span>{name}</span>
          </div>

          <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            {name}
          </h1>

          <p className="mb-6 max-w-2xl text-white/90 md:text-lg">
            {description}
          </p>

          <div className="flex items-center gap-4">
            <div className="text-lg">
              <span className="font-bold">{apartmentCount}</span>{" "}
              {apartmentCount === 1 ? "apartment" : "apartments"} available
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}
