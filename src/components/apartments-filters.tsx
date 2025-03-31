"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { Menu } from "lucide-react";

export function ApartmentFilters() {
  const [priceRange, setPriceRange] = useState([2000, 6000]);

  const handleSetPriceRange = (value: number[]) => {
    setPriceRange(value);
  };

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
                value={priceRange}
                onValueChange={(value) => handleSetPriceRange(value)}
              />
            </div>
            <div className="mt-2 flex items-center justify-between text-sm">
              <span>${priceRange[0]}</span>
              <span>${priceRange[1]}</span>
            </div>
          </div>

          <div className="mb-6 space-y-2">
            <Label>Guests</Label>
            <div className="grid grid-cols-2 gap-3">
              {["1", "2", "3", "4", "5+"].map((bathroom) => (
                <div key={bathroom} className="flex items-center space-x-2">
                  <Checkbox
                    id={`bathroom-${bathroom}`}
                    onCheckedChange={() => {}}
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

          <div className="mb-6 space-y-2">
            <Label>Bedrooms</Label>
            <div className="grid grid-cols-2 gap-3">
              {["Studio", "1", "2", "3", "4+"].map((bedroom) => (
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
              ))}
            </div>
          </div>

          <div className="mb-6 space-y-2">
            <Label>Amenities</Label>
            <div className="grid grid-cols-2 gap-3">
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
                  <Checkbox id={`amenity-${amenity}`} />
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
              value={"all"}
              onValueChange={() => {}}
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

        <Button variant="outline" className="w-full" onClick={() => {}}>
          Reset Filters
        </Button>
      </CardContent>
    </Card>
  );
}
