'use client";';
import { useApartmentContext } from "@/lib/hooks";
import { Bath, BedDouble, Calendar, Maximize } from "lucide-react";

export function ApartmentSpecifications() {
  const { selectedApartment } = useApartmentContext();
  if (!selectedApartment) return null;

  const { bedrooms, bathrooms, squareFootage, availableFrom } =
    selectedApartment!;

  const specifications = [
    {
      icon: <BedDouble className="text-muted-foreground mb-2 h-6 w-6" />,
      label: "Bedrooms",
      value: bedrooms,
    },
    {
      icon: <Bath className="text-muted-foreground mb-2 h-6 w-6" />,
      label: "Bathrooms",
      value: bathrooms,
    },
    {
      icon: <Maximize className="text-muted-foreground mb-2 h-6 w-6" />,
      label: "Square Feet",
      value: squareFootage,
    },
    {
      icon: <Calendar className="text-muted-foreground mb-2 h-6 w-6" />,
      label: "Available",
      value: new Date(availableFrom).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      }),
    },
  ];

  return (
    <section className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {specifications.map((spec, index) => (
        <div
          key={index}
          className="flex flex-col items-center rounded-lg border p-2"
        >
          {spec.icon}
          <p className="text-muted-foreground text-sm">{spec.label}</p>
          <p className="text-lg font-bold">{spec.value}</p>
        </div>
      ))}
    </section>
  );
}
