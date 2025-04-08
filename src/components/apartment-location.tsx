import { MapPin, Train } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type ApartmentLocationProps = {
  address: string;
};

const nearbyTransit = [
  "2 blocks to A/C/E subway lines",
  "Bus stop on corner (M20, M104)",
  "15 min walk to Penn Station",
];

export function ApartmentLocation({ address }: ApartmentLocationProps) {
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
          <div className="flex h-full w-full items-center justify-center">
            <p className="text-muted-foreground text-center">
              Map showing location at Wrzeszcz
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
