import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Separator } from "./ui/separator";
import { Ruler } from "lucide-react";

type ApartmentDescriptionProps = {
  apartment: {
    id: string;
    description: string;
    amenities: string[];
  };
};

export default function ApartmentDescription({
  apartment,
}: ApartmentDescriptionProps) {
  const { description, amenities } = apartment;

  return (
    <Card>
      <CardHeader>
        <CardTitle>About this apartment</CardTitle>
        <CardDescription className="mt-2">
          {" "}
          <p className="text-muted-foreground">{description}</p>
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <section>
          <h3 className="mb-2 font-semibold">Apartment amenities</h3>
          <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
            {amenities.map((amenity, index) => (
              <li key={index} className="flex items-center gap-2">
                <Ruler className="text-primary h-4 w-4" aria-hidden="true" />
                <span>{amenity}</span>
              </li>
            ))}
          </ul>
        </section>

        <Separator />

        <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <div>
            <h3 className="text-muted-foreground text-sm font-medium">
              Lease Terms
            </h3>
            <p>12-month minimum</p>
          </div>
          <div>
            <h3 className="text-muted-foreground text-sm font-medium">
              Pet Policy
            </h3>
            <p>Pets allowed with deposit</p>
          </div>
        </section>
      </CardContent>
    </Card>
  );
}
