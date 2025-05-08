import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

export default function ApartmentAmenitiesFields() {
  return (
    <section>
      <Card>
        <CardHeader>
          <CardTitle>Amenities</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            <div className="flex items-center space-x-2">
              <Checkbox id="airConditioning" />
              <Label htmlFor="airConditioning">Air Conditioning</Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="heating" />
              <Label htmlFor="heating">Heating</Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="washerDryer" />
              <Label htmlFor="washerDryer">Washer/Dryer</Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="dishwasher" />
              <Label htmlFor="dishwasher">Dishwasher</Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="parking" />
              <Label htmlFor="parking">Parking</Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="gym" />
              <Label htmlFor="gym">Gym</Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="pool" />
              <Label htmlFor="pool">Pool</Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="petFriendly" />
              <Label htmlFor="petFriendly">Pet Friendly</Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="balcony" />
              <Label htmlFor="balcony">Balcony</Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="furnished" />
              <Label htmlFor="furnished">Furnished</Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="wifi" />
              <Label htmlFor="wifi">WiFi Included</Label>
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="cableTv" />
              <Label htmlFor="cableTv">Cable TV</Label>
            </div>
          </div>
        </CardContent>
      </Card>
    </section>
  );
}
