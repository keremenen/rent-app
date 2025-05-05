"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { useMobile } from "@/lib/hooks";
import { cn } from "@/lib/utils";

import { Menu } from "lucide-react";
import { useState } from "react";

const DEFAULT_PRICE_STEP_VALUE = 200;

type ApartmentFiltersProps = {
  priceRange?: number[];
  filters?: {
    priceRangeValues?: number[];
    checkboxValues?: { forSection: string; values: string[] }[];
    radioGroupValues?: { forSection: string; value: string }[];
  };
  filterCheckboxSections?: { sectionName: string; values: string[] }[];
  radioGroupSections?: { sectionName: string; values: string[] }[];
};

export function ApartmentFilters({
  priceRange,
  filters,
  filterCheckboxSections,
  radioGroupSections,
}: ApartmentFiltersProps) {
  const [currentFilters, setCurrentFilters] = useState(() => ({
    priceRangeValues: filters?.priceRangeValues ?? [],
    checkboxValues: filters?.checkboxValues ?? [],
    radioGroupValues: filters?.radioGroupValues ?? [],
  }));

  const handleFilterChange = (value: {
    priceRangeValues?: number[];
    checkboxValues?: { forSection: string; values: string[] }[];
    radioGroupValues?: { forSection: string; value: string }[];
  }) => {
    setCurrentFilters((prev) => ({
      ...prev,
      ...value,
    }));
    console.log("currentFilters", currentFilters);
  };

  const isMobile = useMobile();
  const [isHidden, setIsHidden] = useState(false);

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle>Filters</CardTitle>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => {
              setIsHidden((prev) => !prev);
            }}
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle filters</span>
          </Button>
        </div>
      </CardHeader>
      <CardContent
        className={cn("space-y-6", isHidden && isMobile && "hidden")}
      >
        {priceRange && (
          <PriceRangeSection
            priceRange={priceRange}
            priceRangeValues={currentFilters.priceRangeValues}
            onValueChange={handleFilterChange}
          />
        )}
        <div className="space-y-4">
          {filterCheckboxSections &&
            filterCheckboxSections.map((section, i) => (
              <CheckboxSection
                onCheckboxChange={handleFilterChange}
                section={section}
                key={i}
                checkedBoxes={currentFilters.checkboxValues}
              />
            ))}

          <div className="space-y-4">
            {radioGroupSections &&
              radioGroupSections.map((section, i) => (
                <RadioGroupSection
                  key={i}
                  section={section}
                  selectedValue={currentFilters.radioGroupValues}
                  onRadioGroupChange={handleFilterChange}
                />
              ))}
          </div>
        </div>
        <FilterActions />
      </CardContent>
    </Card>
  );
}

type PriceRangeSectionProps = {
  priceRange: number[];
  priceRangeValues: number[];
  onValueChange: (value: { priceRangeValues: number[] }) => void;
};

function PriceRangeSection({
  priceRange,
  priceRangeValues,
  onValueChange,
}: PriceRangeSectionProps) {
  return (
    <div className="mb-6">
      <Label>Price Range</Label>
      <div className="mt-6 px-2">
        <Slider
          min={priceRange[0]}
          max={priceRange[1]}
          step={DEFAULT_PRICE_STEP_VALUE}
          value={priceRangeValues}
          onValueChange={(value) => onValueChange({ priceRangeValues: value })}
        />
      </div>
      <div className="mt-2 flex items-center justify-between text-sm">
        <span>{priceRangeValues[0]}</span>
        <span>{priceRangeValues[1]}</span>
      </div>
    </div>
  );
}

type CheckboxSectionProps = {
  section: {
    sectionName: string;
    values: string[];
  };
  checkedBoxes?: { forSection: string; values: string[] }[];
  onCheckboxChange: (value: {
    checkboxValues: { forSection: string; values: string[] }[];
  }) => void;
};

function CheckboxSection({
  section,
  checkedBoxes,
  onCheckboxChange,
}: CheckboxSectionProps) {
  const handleCheckboxChange = (value: string) => {
    onCheckboxChange({
      checkboxValues: (checkedBoxes ?? []).map((checkbox) => {
        if (checkbox.forSection === section.sectionName) {
          return {
            ...checkbox,
            values: checkbox.values.includes(value)
              ? checkbox.values.filter((v) => v !== value)
              : [...checkbox.values, value],
          };
        }
        return checkbox;
      }),
    });
  };

  return (
    <div className="mb-6 space-y-2">
      <Label className="mb-2">{section.sectionName}</Label>
      <div className="grid grid-cols-2 gap-2">
        {section.values.map((value, i) => (
          <div key={i} className="flex items-center">
            <Checkbox
              checked={checkedBoxes?.some(
                (checkbox) =>
                  checkbox.forSection === section.sectionName &&
                  checkbox.values.includes(value),
              )}
              onCheckedChange={() => {
                handleCheckboxChange(value);
              }}
              className="cursor-pointer"
              id={`checkbox-${section.sectionName}-${value}`}
            />
            <Label
              htmlFor={`checkbox-${section.sectionName}-${value}`}
              className="cursor-pointer pl-2"
            >
              {value}
            </Label>
          </div>
        ))}
      </div>
    </div>
  );
}

type RadioGroupSectionProps = {
  section: {
    sectionName: string;
    values: string[];
  };
  selectedValue?: { forSection: string; value: string }[];
  onRadioGroupChange: (value: {
    radioGroupValues: { forSection: string; value: string }[];
  }) => void;
};

function RadioGroupSection({
  section,
  selectedValue,
  onRadioGroupChange,
}: RadioGroupSectionProps) {
  const getDefaultValue = () => {
    const selected = selectedValue?.find(
      (radio) => radio.forSection === section.sectionName,
    );
    return selected
      ? selected.value.toLowerCase()
      : section.values[0].toLowerCase();
  };

  const handleRadioGroupChange = (value: string) => {
    onRadioGroupChange({
      radioGroupValues: (selectedValue ?? []).map((radio) => {
        if (radio.forSection === section.sectionName) {
          return { ...radio, value };
        }
        return radio;
      }),
    });
  };

  return (
    <section>
      <Label className="mb-2">{section.sectionName}</Label>
      <RadioGroup
        defaultValue={getDefaultValue()}
        onValueChange={handleRadioGroupChange}
        className="flex flex-col space-y-1"
      >
        {section.values.map((value, i) => (
          <div key={i} className="flex items-center">
            <RadioGroupItem
              className="cursor-pointer"
              value={value.toLowerCase()}
              id={value.toLowerCase()}
            />
            <Label
              htmlFor={value.toLowerCase()}
              className="cursor-pointer pl-2"
            >
              {value}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </section>
  );
}

function FilterActions() {
  return (
    <div className="space-y-4">
      <Button
        variant="default"
        className="w-full"
        // onClick={() => {
        //   const buildSearchParams = () => {
        //     const params = new URLSearchParams();

        //     const { priceRange, bedrooms, amenities, availability } =
        //       filterOptions;

        //     if (priceRange) {
        //       params.set("minPrice", priceRange[0].toString());
        //       params.set("maxPrice", priceRange[1].toString());
        //     }

        //     if (bedrooms.length > 0) {
        //       params.set("bedrooms", bedrooms.join(","));
        //     }

        //     if (amenities.length > 0) {
        //       params.set("amenities", amenities.join(","));
        //     }

        //     if (availability) {
        //       params.set("availability", availability);
        //     }

        //     return params;
        //   };

        //   // Redirect to the same page with search params
        //   window.location.search = buildSearchParams().toString();
        // }}
      >
        Apply Filters
      </Button>
      <Button variant="outline" className="w-full" onClick={() => {}}>
        Reset Filters
      </Button>
    </div>
  );
}
