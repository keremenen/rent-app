"use client";
import { useCityContext } from "@/lib/hooks";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";

export function CityHero() {
  const { selectedCity } = useCityContext();
  const { coverImage, name, shortDescription, id } = selectedCity!;

  return (
    <section className="relative">
      <div className="absolute inset-0 z-0">
        <Image
          src={coverImage}
          alt={`${name} background image`}
          fill
          className="object-cover brightness-[0.6]"
          priority
        />
      </div>

      <section className="relative z-10 container flex flex-col items-start px-4 py-16 text-white md:py-24">
        <div className="mb-4 flex items-center gap-2 text-sm">
          <Link href="/cities" className="hover:underline">
            Cities
          </Link>
          <ChevronRight className="h-4 w-4" />
          <span>{name}</span>
        </div>

        <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          {name}
        </h1>

        <p className="mb-6 max-w-2xl text-white/90 md:text-lg">
          {shortDescription}
        </p>

        <div className="flex flex-wrap gap-3">
          <Button asChild variant={"secondary"}>
            <Link href={`/cities/${id}/apartments`}>
              Browse all apartments in {name}
            </Link>
          </Button>
        </div>
      </section>
    </section>
  );
}
