"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

import { Slider } from "@/components/ui/slider";
import SortBy from "./sort-by";

type ApartmentFiltersProps = {
  filters: {
    priceRange: number[];
    bedrooms: string[];
    bathrooms: string[];
    amenities: string[];
    availability: string;
  };
  onFilterChange: (filters: any) => void;
  sortOption: string;
  onSortChange: (option: string) => void;
  showFilters?: boolean;
  onToggleFilters?: () => void;
};

export function ApartmentFilters({
  filters,
  onFilterChange,
}: ApartmentFiltersProps) {
  const [localFilters, setLocalFilters] = useState(filters);

  const handlePriceChange = (value: number[]) => {
    const newFilters = { ...localFilters, priceRange: value };
    setLocalFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleBedroomChange = (value: string, checked: boolean) => {
    const newBedrooms = checked
      ? [...localFilters.bedrooms, value]
      : localFilters.bedrooms.filter((b) => b !== value);

    const newFilters = { ...localFilters, bedrooms: newBedrooms };
    setLocalFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleBathroomChange = (value: string, checked: boolean) => {
    const newBathrooms = checked
      ? [...localFilters.bathrooms, value]
      : localFilters.bathrooms.filter((b) => b !== value);

    const newFilters = { ...localFilters, bathrooms: newBathrooms };
    setLocalFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleAmenityChange = (value: string, checked: boolean) => {
    const newAmenities = checked
      ? [...localFilters.amenities, value]
      : localFilters.amenities.filter((a) => a !== value);

    const newFilters = { ...localFilters, amenities: newAmenities };
    setLocalFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleAvailabilityChange = (value: string) => {
    const newFilters = { ...localFilters, availability: value };
    setLocalFilters(newFilters);
    onFilterChange(newFilters);
  };

  const handleReset = () => {
    const resetFilters = {
      priceRange: [1000, 6000],
      bedrooms: [],
      bathrooms: [],
      amenities: [],
      availability: "all",
    };
    setLocalFilters(resetFilters);
    onFilterChange(resetFilters);
  };

  return (
    <div className="space-y-6">
      <SortBy
        sortOption={"priceAsc"}
        onSortChange={() => {}}
        onToggleFilters={() => {}}
      />
      <Card>
        <CardHeader>
          <CardTitle>Filters</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label>Price Range</Label>
              <div className="mt-6 px-2">
                <Slider
                  min={500}
                  max={10000}
                  step={100}
                  value={localFilters.priceRange}
                  onValueChange={handlePriceChange}
                />
              </div>
              <div className="mt-2 flex items-center justify-between text-sm">
                <span>${localFilters.priceRange[0]}</span>
                <span>${localFilters.priceRange[1]}</span>
              </div>
            </div>

            <div className="space-y-2">
              <Label>Bedrooms</Label>
              <div className="grid grid-cols-2 gap-2">
                {["Studio", "1", "2", "3", "4+"].map((bedroom) => (
                  <div key={bedroom} className="flex items-center space-x-2">
                    <Checkbox
                      id={`bedroom-${bedroom}`}
                      checked={localFilters.bedrooms.includes(bedroom)}
                      onCheckedChange={(checked) =>
                        handleBedroomChange(bedroom, checked as boolean)
                      }
                    />
                    <Label
                      htmlFor={`bedroom-${bedroom}`}
                      className="cursor-pointer"
                    >
                      {bedroom}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label>Bathrooms</Label>
              <div className="grid grid-cols-2 gap-2">
                {["1", "1.5", "2", "2.5", "3+"].map((bathroom) => (
                  <div key={bathroom} className="flex items-center space-x-2">
                    <Checkbox
                      id={`bathroom-${bathroom}`}
                      checked={localFilters.bathrooms.includes(bathroom)}
                      onCheckedChange={(checked) =>
                        handleBathroomChange(bathroom, checked as boolean)
                      }
                    />
                    <Label
                      htmlFor={`bathroom-${bathroom}`}
                      className="cursor-pointer"
                    >
                      {bathroom}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label>Amenities</Label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Washer/Dryer",
                  "Dishwasher",
                  "Gym",
                  "Pool",
                  "Balcony",
                  "Doorman",
                  "Elevator",
                  "Parking",
                ].map((amenity) => (
                  <div key={amenity} className="flex items-center space-x-2">
                    <Checkbox
                      id={`amenity-${amenity}`}
                      checked={localFilters.amenities.includes(amenity)}
                      onCheckedChange={(checked) =>
                        handleAmenityChange(amenity, checked as boolean)
                      }
                    />
                    <Label
                      htmlFor={`amenity-${amenity}`}
                      className="cursor-pointer"
                    >
                      {amenity}
                    </Label>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <Label>Availability</Label>
              <RadioGroup
                value={localFilters.availability}
                onValueChange={handleAvailabilityChange}
                className="flex flex-col space-y-1"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="all" id="all" />
                  <Label htmlFor="all" className="cursor-pointer">
                    All
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="available" id="available" />
                  <Label htmlFor="available" className="cursor-pointer">
                    Available Now
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="unavailable" id="unavailable" />
                  <Label htmlFor="unavailable" className="cursor-pointer">
                    Coming Soon
                  </Label>
                </div>
              </RadioGroup>
            </div>
          </div>

          <Button variant="outline" className="w-full" onClick={handleReset}>
            Reset Filters
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
