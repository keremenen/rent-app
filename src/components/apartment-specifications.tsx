import { Bath, BedDouble, Maximize } from "lucide-react";

type ApartmentSpecificationsProps = {
  apartment: {
    bedrooms: number;
    bathrooms: number;
    squareFootage: number;
  };
};

export default function ApartmentSpecifications({
  apartment,
}: ApartmentSpecificationsProps) {
  const { bedrooms, bathrooms, squareFootage } = apartment!;

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
  ];

  return (
    <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
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
