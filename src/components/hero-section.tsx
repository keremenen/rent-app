"use client";

import Image from "next/image";
import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import Link from "next/link";
import { useFilterContext } from "@/lib/hooks";

export function HeroSection() {
  const {
    priceRangeValues,
    handleSetPriceRangeValues,
    handleSetBedroomValues,
  } = useFilterContext();

  return (
    <section className="relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/slider.jpg"
          alt="Modern apartment building"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
      </div>

      <section className="relative z-5 flex min-h-[600px] flex-col items-center justify-center px-4 py-20 text-center text-white">
        <h1 className="mb-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Find Your Perfect Home in the Tricity
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-white/90 md:text-xl">
          Discover thousands of apartments for rent in top neighborhoods with
          the amenities you need
        </p>

        <div className="w-full max-w-[350px] rounded-xl bg-white/10 p-4 backdrop-blur-md">
          <section className="grid gap-4 md:grid-cols-2">
            <Select onValueChange={handleSetBedroomValues}>
              <SelectTrigger className="w-full bg-white text-black">
                <SelectValue placeholder="Bedrooms" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1">1 Bedroom</SelectItem>
                <SelectItem value="2">2 Bedrooms</SelectItem>
                <SelectItem value="3">3 Bedrooms</SelectItem>
                <SelectItem value="4">4 Bedrooms</SelectItem>
              </SelectContent>
            </Select>
            <div>
              <Button className="w-full" type="submit">
                <Link href="/apartments" className="flex items-center gap-2">
                  <Search className="mr-2 h-4 w-4" />
                  Search
                </Link>
              </Button>
            </div>
          </section>

          <section className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm">Price Range</span>
              <span className="text-sm">
                ${priceRangeValues[0]} - ${priceRangeValues[1]}
              </span>
            </div>
            <Slider
              defaultValue={[1000, 5000]}
              min={0}
              max={5000}
              step={100}
              value={priceRangeValues}
              onValueChange={handleSetPriceRangeValues}
              className="py-4"
            />
          </section>
        </div>
      </section>
    </section>
  );
}
