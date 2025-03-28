import { Check } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ApartmentAmenitiesProps {
  amenities: string[];
}

export function ApartmentAmenities({ amenities }: ApartmentAmenitiesProps) {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Building Amenities</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3">
          {amenities.map((amenity, index) => (
            <div key={index} className="flex items-center gap-2">
              <div className="bg-primary/10 flex h-6 w-6 items-center justify-center rounded-full">
                <Check className="text-primary h-3.5 w-3.5" />
              </div>
              <span>{amenity}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
