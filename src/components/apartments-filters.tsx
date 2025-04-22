"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Menu } from "lucide-react";

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

export function ApartmentFilters() {
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
                min={500}
                max={10000}
                step={100}
                value={[2000, 5000]}
                onValueChange={() => {}}
              />
            </div>
            <div className="mt-2 flex items-center justify-between text-sm">
              <span>${2000}</span>
              <span>${5000}</span>
            </div>
          </div>

          <FilterSection
            title="Guests"
            items={["1", "2", "3", "4", "5+"]}
            renderItem={(guest) => (
              <div key={guest} className="flex items-center space-x-2">
                <Checkbox id={`guest-${guest}`} onCheckedChange={() => {}} />
                <Label htmlFor={`guest-${guest}`} className="cursor-pointer">
                  {guest}
                </Label>
              </div>
            )}
          />

          <FilterSection
            title="Bedrooms"
            items={["Studio", "1", "2", "3", "4+"]}
            renderItem={(bedroom) => (
              <div key={bedroom} className="flex items-center space-x-2">
                <Checkbox
                  id={`bedroom-${bedroom}`}
                  onCheckedChange={() => {}}
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
                <Checkbox id={`amenity-${amenity}`} />
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
              value={"all"}
              onValueChange={() => {}}
              className="flex flex-col space-y-1"
            >
              {[
                { value: "all", label: "All" },
                { value: "available", label: "Available Now" },
                { value: "unavailable", label: "Coming Soon" },
              ].map(({ value, label }) => (
                <div key={value} className="flex items-center space-x-2">
                  <RadioGroupItem value={value} id={value} />
                  <Label htmlFor={value} className="cursor-pointer">
                    {label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        </div>

        <div className="space-y-4">
          <Button variant="default" className="w-full">
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
