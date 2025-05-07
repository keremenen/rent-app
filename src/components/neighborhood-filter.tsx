import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Label } from "./ui/label";
import { Slider } from "./ui/slider";

const PRICE_STEP = 100;
const PRICE_RANGE = [0, 5000];

export default function NeighborhoodFilter() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Filters</CardTitle>
      </CardHeader>
      <CardContent>
        <PriceRangeSection />
        <CheckboxSection />
      </CardContent>
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

function CheckboxSection() {
  return <p>helo</p>;
}
