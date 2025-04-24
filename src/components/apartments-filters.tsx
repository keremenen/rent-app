"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Menu } from "lucide-react";
import { useState } from "react";

const DEFAULT_PRICE_RANGE = [500, 10000];
const DEFAULT_PRICE_RANGE_VALUE = [1000, 5000];
const PRICE_STEPS = 100;

const FilterSection = ({
  title,
  items,
  renderItem,
}: {
  title: string;
  items: string[];
  renderItem: (item: string) => React.JSX.Element;
}) => (
  <div className="mb-6 space-y-2">
    <Label>{title}</Label>
    <div className="grid grid-cols-2 gap-3">{items.map(renderItem)}</div>
  </div>
);

type ApartmentFiltersProps = {
  minPrice?: number;
  maxPrice?: number;
  bedrooms?: string;
  amenities?: string;
  availability?: string;
};

export function ApartmentFilters({
  minPrice,
  maxPrice,
  bedrooms,
  amenities,
  availability,
}: ApartmentFiltersProps) {
  console.log("minPrice", minPrice);
  const [filterOptions, setFilterOptions] = useState(() => ({
    priceRange: [
      minPrice ?? DEFAULT_PRICE_RANGE_VALUE[0],
      maxPrice ?? DEFAULT_PRICE_RANGE_VALUE[1],
    ],
    bedrooms: bedrooms?.split(",") || [],
    amenities: amenities?.split(",") || [],
    availability: availability || "all",
  }));

  console.log("priceRange", filterOptions.priceRange);
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Filters</CardTitle>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => {}}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle filters</span>
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-4">
          <div className="mb-6">
            <Label>Price Range</Label>
            <div className="mt-6 px-2">
              <Slider
                min={DEFAULT_PRICE_RANGE[0]}
                max={DEFAULT_PRICE_RANGE[1]}
                step={PRICE_STEPS}
                defaultValue={[
                  minPrice || DEFAULT_PRICE_RANGE_VALUE[0],
                  maxPrice || DEFAULT_PRICE_RANGE_VALUE[1],
                ]}
                onValueChange={(value) =>
                  setFilterOptions((prev) => ({ ...prev, priceRange: value }))
                }
              />
            </div>
            <div className="mt-2 flex items-center justify-between text-sm">
              <span>${filterOptions.priceRange[0]}</span>
              <span>${filterOptions.priceRange[1]}</span>
            </div>
          </div>

          <FilterSection
            title="Bedrooms"
            items={["Studio", "1", "2", "3", "4+"]}
            renderItem={(bedroom) => (
              <div key={bedroom} className="flex items-center space-x-2">
                <Checkbox
                  id={`bedroom-${bedroom}`}
                  checked={filterOptions.bedrooms.includes(bedroom)}
                  onCheckedChange={() => {
                    setFilterOptions((prev) => ({
                      ...prev,
                      bedrooms: prev.bedrooms.includes(bedroom)
                        ? Array.isArray(prev.bedrooms)
                          ? prev.bedrooms.filter((b: string) => b !== bedroom)
                          : []
                        : [...prev.bedrooms, bedroom],
                    }));
                  }}
                />
                <Label
                  htmlFor={`bedroom-${bedroom}`}
                  className="cursor-pointer"
                >
                  {bedroom}
                </Label>
              </div>
            )}
          />

          <FilterSection
            title="Amenities"
            items={[
              "Washer/Dryer",
              "Dishwasher",
              "Gym",
              "Pool",
              "Balcony",
              "Doorman",
              "Elevator",
              "Parking",
            ]}
            renderItem={(amenity) => (
              <div key={amenity} className="flex items-center space-x-2">
                <Checkbox
                  id={`amenity-${amenity}`}
                  checked={filterOptions.amenities.includes(amenity)}
                  onCheckedChange={() => {
                    setFilterOptions((prev) => ({
                      ...prev,
                      amenities: prev.amenities.includes(amenity)
                        ? prev.amenities.filter((a) => a !== amenity)
                        : [...prev.amenities, amenity],
                    }));
                  }}
                />
                <Label
                  htmlFor={`amenity-${amenity}`}
                  className="cursor-pointer"
                >
                  {amenity}
                </Label>
              </div>
            )}
          />

          <div className="space-y-2">
            <Label>Availability</Label>
            <RadioGroup
              value={filterOptions.availability}
              onValueChange={(value) =>
                setFilterOptions((prev) => ({ ...prev, availability: value }))
              }
              className="flex flex-col space-y-1"
            >
              {[
                { value: "all", label: "All" },
                { value: "available", label: "Available Now" },
                { value: "unavailable", label: "Coming Soon" },
              ].map(({ value, label }) => (
                <div key={value} className="flex items-center space-x-2">
                  <RadioGroupItem
                    value={value}
                    id={value}
                    checked={filterOptions.availability === value}
                  />
                  <Label htmlFor={value} className="cursor-pointer">
                    {label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </div>

        <div className="space-y-4">
          <Button
            variant="default"
            className="w-full"
            onClick={() => {
              const buildSearchParams = () => {
                const params = new URLSearchParams();

                const { priceRange, bedrooms, amenities, availability } =
                  filterOptions;

                if (priceRange) {
                  params.set("minPrice", priceRange[0].toString());
                  params.set("maxPrice", priceRange[1].toString());
                }

                if (bedrooms.length > 0) {
                  params.set("bedrooms", bedrooms.join(","));
                }

                if (amenities.length > 0) {
                  params.set("amenities", amenities.join(","));
                }

                if (availability) {
                  params.set("availability", availability);
                }

                return params;
              };

              // Redirect to the same page with search params
              window.location.search = buildSearchParams().toString();
            }}
          >
            Apply Filters
          </Button>
          <Button variant="outline" className="w-full" onClick={() => {}}>
            Reset Filters
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
