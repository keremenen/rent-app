import { Bath, BedDouble, Calendar, Maximize } from "lucide-react";

type ApartmentSpecificationsProps = {
  bedrooms: number;
  bathrooms: number;
  squareFootage: number;
  availableFrom: Date;
};

export function ApartmentSpecifications({
  bedrooms,
  bathrooms,
  squareFootage,
  availableFrom,
}: ApartmentSpecificationsProps) {
  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      <div className="flex flex-col items-center rounded-lg border p-4">
        <BedDouble className="text-muted-foreground mb-2 h-6 w-6" />
        <p className="text-muted-foreground text-sm">Bedrooms</p>
        <p className="text-lg font-bold">{bedrooms}</p>
      </div>
      <div className="flex flex-col items-center rounded-lg border p-4">
        <Bath className="text-muted-foreground mb-2 h-6 w-6" />
        <p className="text-muted-foreground text-sm">Bathrooms</p>
        <p className="text-lg font-bold">{bathrooms}</p>
      </div>
      <div className="flex flex-col items-center rounded-lg border p-4">
        <Maximize className="text-muted-foreground mb-2 h-6 w-6" />
        <p className="text-muted-foreground text-sm">Square Feet</p>
        <p className="text-lg font-bold">{squareFootage}</p>
      </div>
      <div className="flex flex-col items-center rounded-lg border p-4">
        <Calendar className="text-muted-foreground mb-2 h-6 w-6" />
        <p className="text-muted-foreground text-sm">Available</p>
        <p className="text-lg font-bold">
          {new Date(availableFrom).toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          })}
        </p>
      </div>
    </div>
  );
}
