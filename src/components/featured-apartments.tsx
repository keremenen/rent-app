import { ArrowRight, Bath, BedDouble, Maximize } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

const featuredApartments = [
  {
    id: "01",
    title: "Luxury Studio in Downtown",
    address: "123 Main St, Downtown",
    price: 1800,
    bedrooms: "Studio",
    bathrooms: 1,
    squareFeet: 650,
    image: "/placeholder-image.jpg",
  },
  {
    id: "02",
    title: "Modern 1-Bedroom with Balcony",
    address: "456 Park Ave, Midtown",
    price: 2200,
    bedrooms: 1,
    bathrooms: 1,
    squareFeet: 750,
    image: "/placeholder-image.jpg",
  },
  {
    id: "03",
    title: "Spacious 2-Bedroom Corner Unit",
    address: "789 Broadway, Upper West Side",
    price: 3500,
    bedrooms: 2,
    bathrooms: 2,
    squareFeet: 1100,
    image: "/placeholder-image.jpg",
  },
  {
    id: "04",
    title: "Renovated 3-Bedroom with Views",
    address: "101 River Rd, Riverside",
    price: 4200,
    bedrooms: 3,
    bathrooms: 2,
    squareFeet: 1400,
    image: "/placeholder-image.jpg",
  },
];

export function FeaturedApartments() {
  return (
    <section className="bg-background py-16">
      <div className="container px-4">
        <div className="mb-10 flex flex-col items-center text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Featured Apartments
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Discover our handpicked selection of premium apartments in the most
            desirable neighborhoods
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredApartments.map((apartment) => (
            <Card key={apartment.id} className="overflow-hidden p-0">
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={apartment.image}
                  alt={apartment.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardContent className="p-4 pb-0">
                <h3 className="mb-1 font-semibold">{apartment.title}</h3>
                <p className="text-muted-foreground mb-2 text-sm">
                  {apartment.address}
                </p>
                <p className="mb-3 text-xl font-bold">${apartment.price}/mo</p>
                <div className="text-muted-foreground flex justify-between text-sm">
                  <div className="flex items-center gap-1">
                    <BedDouble className="h-4 w-4" />
                    <span>{apartment.bedrooms}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="h-4 w-4" />
                    <span>{apartment.bathrooms}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Maximize className="h-4 w-4" />
                    <span>{apartment.squareFeet} sq ft</span>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="p-4 pt-0">
                <Button variant="outline" className="w-full" asChild>
                  <Link href={`/apartments`}>View Details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button asChild>
            <Link href="/apartments/2">
              View All Apartments
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
