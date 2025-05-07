import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
import { Checkbox } from "./ui/checkbox";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Button } from "./ui/button";

const PRICE_STEP = 100;
const PRICE_RANGE = [0, 5000];

const bedroomOptions = [1, 2, 3, 4, 5];
const amenitiesOptions = ["Wi-Fi", "Parking", "Pool", "Gym"];
const availabilityOptions = ["Available", "Comming Soon", "Not Available"];

export default function NeighborhoodFilter() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        <PriceRangeSection />
        {bedroomOptions && (
          <CheckboxSection label={"Bedrooms"} values={bedroomOptions} />
        )}
        {amenitiesOptions && (
          <CheckboxSection label={"Amenities"} values={amenitiesOptions} />
        )}
        {availabilityOptions && (
          <RadioGroupSection
            label={"Availability"}
            values={availabilityOptions}
          />
        )}
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          Apply Filters
        </Button>
      </CardFooter>
    </Card>
  );
}

function PriceRangeSection() {
  return (
    <section>
      <Label>Price Range</Label>
      <div className="mt-6 px-2">
        <Slider
          min={PRICE_RANGE[0]}
          max={PRICE_RANGE[1]}
          step={PRICE_STEP}
          value={[2000, 4000]}
          // onValueChange={}
        />
      </div>
      <div className="mt-1 flex items-center justify-between text-sm">
        <span>2000</span>
        <span>4000</span>
      </div>
    </section>
  );
}

type CheckboxSectionProps = {
  label: string;
  values: number[] | string[];
};

function CheckboxSection({ label, values }: CheckboxSectionProps) {
  return (
    <section>
      <Label className="mb-2">{label}</Label>

      <div className="grid grid-cols-2 gap-2">
        {values.map((value) => (
          <div className="flex items-center space-x-2" key={value}>
            <Checkbox id={`checkbox-${value}`} />
            <Label htmlFor={`checkbox-${value}`}>{value}</Label>
          </div>
        ))}
      </div>
    </section>
  );
}

type RadioGroupSectionProps = {
  label: string;
  values: number[] | string[];
};

function RadioGroupSection({ label, values }: RadioGroupSectionProps) {
  return (
    <section>
      <Label className="mb-2">{label}</Label>
      <RadioGroup>
        {values.map((value) => (
          <div className="flex items-center space-x-2" key={value}>
            <RadioGroupItem
              value={value}
              id={`radio-${value}`}
              className="h-4 w-4"
            />
            <Label htmlFor={`radio-${value}`}>{value}</Label>
          </div>
        ))}
      </RadioGroup>
    </section>
  );
}
