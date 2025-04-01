import { MapPin } from "lucide-react";

type CityMapProps = {
  city: {
    name: string;
    latitude: number;
    longitude: number;
  };
  neighborhoods: Array<{
    id: string;
    name: string;
    popular: boolean;
  }>;
};

export function CityMap({ city, neighborhoods }: CityMapProps) {
  return (
    <div className="relative h-[300px] w-full overflow-hidden rounded-lg border">
      <div className="bg-muted absolute inset-0">
        <div className="flex h-full w-full items-center justify-center">
          <p className="text-muted-foreground text-center">
            Map showing {city.name} and its neighborhoods
          </p>
        </div>

        {/* City center marker */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="bg-primary text-primary-foreground flex h-10 w-10 items-center justify-center rounded-full">
            <MapPin className="h-5 w-5" />
          </div>
        </div>

        {/* Neighborhood markers - in a real app these would be positioned based on lat/long */}
        {neighborhoods.map((neighborhood, index) => {
          // Calculate position based on index (just for demo)
          const angle = (index / neighborhoods.length) * Math.PI * 2;
          const radius = 80; // pixels from center
          const left = `calc(50% + ${Math.cos(angle) * radius}px)`;
          const top = `calc(50% + ${Math.sin(angle) * radius}px)`;

          return (
            <div
              key={neighborhood.id}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left, top }}
            >
              <div
                className={`flex h-6 w-6 items-center justify-center rounded-full ${
                  neighborhood.popular ? "bg-primary" : "bg-muted-foreground"
                } text-xs font-medium text-white`}
              >
                {neighborhood.name.charAt(0)}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
