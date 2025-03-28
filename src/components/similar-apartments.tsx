import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function SimilarApartments() {
  const similarApartments = [
    {
      id: "apt-305",
      title: "Spacious 2-Bedroom Corner Unit",
      price: 2600,
      bedrooms: 2,
      bathrooms: 2,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: "apt-201",
      title: "Cozy 1-Bedroom with Balcony",
      price: 1800,
      bedrooms: 1,
      bathrooms: 1,
      image: "/placeholder.svg?height=200&width=300",
    },
  ];

  return (
    <Card>
      <CardHeader>
        <CardTitle>Similar Apartments</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {similarApartments.map((apartment) => (
          <div key={apartment.id} className="overflow-hidden rounded-lg border">
            <div className="relative aspect-[3/2] w-full">
              <Image
                src={apartment.image || "/placeholder.svg"}
                alt={apartment.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-3">
              <h3 className="font-medium">{apartment.title}</h3>
              <div className="flex items-center justify-between">
                <p className="text-muted-foreground text-sm">
                  {apartment.bedrooms} bd | {apartment.bathrooms} ba
                </p>
                <p className="font-bold">${apartment.price}</p>
              </div>
            </div>
          </div>
        ))}
      </CardContent>
      <CardFooter>
        <Button variant="ghost" size="sm" className="ml-auto" asChild>
          <Link href="/apartments">
            View All Apartments
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
