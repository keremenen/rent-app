"use client";

import Image from "next/image";
import { Search } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

export function HeroSection() {
  const [location, setLocation] = useState("");
  const [bedrooms, setBedrooms] = useState("");
  const [priceRange, setPriceRange] = useState([1000, 5000]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();

    console.log(location, bedrooms, priceRange);
  };

  return (
    <section className="relative">
      <div className="absolute inset-0 z-0">
        <Image
          src="/placeholder-image.jpg"
          alt="Modern apartment building"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
      </div>

      <div className="relative z-10 flex min-h-[600px] flex-col items-center justify-center px-4 py-20 text-center text-white">
        <h1 className="mb-4 max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Find Your Perfect Home in the Tricity
        </h1>
        <p className="mb-8 max-w-2xl text-lg text-white/90 md:text-xl">
          Discover thousands of apartments for rent in top neighborhoods with
          the amenities you need
        </p>

        <div className="w-full max-w-4xl rounded-xl bg-white/10 p-4 backdrop-blur-md md:p-8">
          <form onSubmit={handleSearch} className="space-y-4">
            <div className="grid gap-4 md:grid-cols-4">
              <div className="md:col-span-2">
                <Input
                  placeholder="Enter neighborhood, city, or ZIP code"
                  className="h-12 bg-white text-black"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <div>
                <Select value={bedrooms} onValueChange={setBedrooms}>
                  <SelectTrigger className="!h-12 w-full bg-white text-black">
                    <SelectValue placeholder="Bedrooms" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="studio">Studio</SelectItem>
                    <SelectItem value="1">1 Bedroom</SelectItem>
                    <SelectItem value="2">2 Bedrooms</SelectItem>
                    <SelectItem value="3">3 Bedrooms</SelectItem>
                    <SelectItem value="4+">4+ Bedrooms</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Button className="h-12 w-full" type="submit">
                  <Search className="mr-2 h-4 w-4" />
                  Search
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm">Price Range</span>
                <span className="text-sm">
                  ${priceRange[0]} - ${priceRange[1]}
                </span>
              </div>
              <Slider
                defaultValue={[1000, 5000]}
                min={500}
                max={10000}
                step={100}
                value={priceRange}
                onValueChange={setPriceRange}
                className="py-4"
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
