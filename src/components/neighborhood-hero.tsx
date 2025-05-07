"use client";

import { List, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useState } from "react";

export function NeighborhoodHero({
  name,
  description,
  apartmentCount,
  backgroundImage,
}: {
  name: string;
  description: string;
  apartmentCount: number;
  backgroundImage?: string;
}) {
  const [viewMode, setViewMode] = useState("list");

  return (
    <div className="relative">
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage || "/placeholder.svg"}
          alt={`${name} neighborhood`}
          fill
          className="object-cover brightness-[0.5]"
          priority
        />
      </div>

      <div className="relative z-10 container px-4 py-16 md:py-24">
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

            <div className="flex rounded-md border border-white/30">
              <Button
                variant={viewMode === "list" ? "secondary" : "ghost"}
                size="sm"
                className="rounded-r-none border-r border-white/30 text-white hover:bg-white/20 hover:text-white"
                onClick={() => {
                  setViewMode("list");
                }}
              >
                <List className="mr-2 h-4 w-4" />
                List
              </Button>
              <Button
                variant={viewMode === "map" ? "secondary" : "ghost"}
                size="sm"
                className="rounded-l-none text-white hover:bg-white/20 hover:text-white"
                onClick={() => {
                  setViewMode("map");
                }}
              >
                <MapPin className="mr-2 h-4 w-4" />
                Map
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
