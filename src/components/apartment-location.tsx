import { MapPin, Train } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ApartmentLocationProps = {
  address: string;
  latitude: number;
  longitude: number;
  nearbyTransit: string[];
};

export function ApartmentLocation({
  address,
  latitude,
  longitude,
  nearbyTransit,
}: ApartmentLocationProps) {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle>Location</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-start gap-2">
          <MapPin className="text-muted-foreground mt-0.5 h-5 w-5" />
          <span>{address}</span>
        </div>

        <div className="bg-muted aspect-[16/9] w-full overflow-hidden rounded-md border">
          {/* In a real app, you would integrate with Google Maps or similar */}
          <div className="flex h-full w-full items-center justify-center">
            <p className="text-muted-foreground text-center">
              Map showing location at
              <br />
              Latitude: {latitude.toFixed(4)}, Longitude: {longitude.toFixed(4)}
            </p>
          </div>
        </div>

        <div>
          <h3 className="mb-2 font-semibold">Nearby Transit</h3>
          <ul className="space-y-2">
            {nearbyTransit
              ? nearbyTransit.map((transit, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Train className="text-primary h-4 w-4" />
                    <span>{transit}</span>
                  </li>
                ))
              : null}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
}
