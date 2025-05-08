"use client";
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
import { Button } from "./ui/button";
import { useFilterContext } from "@/lib/hooks";

const PRICE_STEP = 100;
const PRICE_RANGE = [0, 5000];

const bedroomOptions = ["1", "2", "3", "4", "5"];
const amenitiesOptions = ["Wi-Fi", "TV", "Pralka", "Gym"];

export default function ApartmentsFilters() {
  const { priceRangeValues, handleSetPriceRangeValues } = useFilterContext();
  const {
    bedroomValues,
    handleSetBedroomValues,
    amenitiesValues,
    handleSetAmenitiesValues,
  } = useFilterContext();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Filters</CardTitle>
      </CardHeader>
      <CardContent className="space-y-8">
        <PriceRangeSection
          currentValues={priceRangeValues}
          onValueChange={handleSetPriceRangeValues}
        />
        <CheckboxSection
          label="Bedrooms"
          options={bedroomOptions}
          values={bedroomValues}
          onChange={handleSetBedroomValues}
        />
        <CheckboxSection
          label="Amenities"
          options={amenitiesOptions}
          values={amenitiesValues}
          onChange={handleSetAmenitiesValues}
        />
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full">
          Apply Filters
        </Button>
      </CardFooter>
    </Card>
  );
}

type PriceRangeSectionProps = {
  currentValues: number[];
  onValueChange: (value: number[]) => void;
};

function PriceRangeSection({
  currentValues,
  onValueChange,
}: PriceRangeSectionProps) {
  return (
    <section>
      <Label>
        Price Range{" "}
        <span className="text-muted-foreground text-xs font-medium">
          ($/month)
        </span>
      </Label>
      <div className="mt-6 px-2">
        <Slider
          min={PRICE_RANGE[0]}
          max={PRICE_RANGE[1]}
          step={PRICE_STEP}
          value={currentValues}
          onValueChange={onValueChange}
        />
      </div>
      <div className="mt-1 flex items-center justify-between text-sm">
        <span>{currentValues[0]}$</span>
        <span>{currentValues[1]}$</span>
      </div>
    </section>
  );
}

type CheckboxSectionProps = {
  label: string;
  options: string[];
  values: string[] | null;
  onChange: (value: string) => void;
};

function CheckboxSection({
  label,
  options,
  values,
  onChange: handleToggleCheckbox,
}: CheckboxSectionProps) {
  return (
    <section>
      <Label className="mb-2">{label}</Label>

      <div className="grid grid-cols-2 gap-2">
        {options.map((option) => {
          // Check if the current option is checked
          const isChecked = values ? values.includes(option) : false;
          return (
            <div className="flex items-center space-x-2" key={option}>
              <Checkbox
                id={`checkbox-${option}`}
                checked={isChecked}
                onCheckedChange={() => {
                  handleToggleCheckbox(option);
                }}
              />
              <Label htmlFor={`checkbox-${option}`}>{option}</Label>
            </div>
          );
        })}
      </div>
    </section>
  );
}
