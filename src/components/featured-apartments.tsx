import { ArrowRight, Bath, BedDouble, Maximize } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ApartmentCard } from "./apartment-card";
import { ConvertedApartment } from "@/lib/types";

type FeaturedApartmentsProps = {
  apartments: ConvertedApartment[];
};

export function FeaturedApartments({ apartments }: FeaturedApartmentsProps) {
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
          {apartments.map((apartment) => (
            <ApartmentCard key={apartment.id} apartment={apartment} />
            // <Card key={apartment.id} className="overflow-hidden p-0">
            //   <div className="relative aspect-[4/3] w-full">
            //     <Link href={`/apartments/${apartment.id}`}>
            //       <Image
            //         src={apartment.thumbnail}
            //         alt={apartment.title}
            //         fill
            //         className="object-cover transition-transform duration-500 hover:scale-105"
            //       />
            //     </Link>
            //   </div>
            //   <CardContent className="p-4 pb-0">
            //     <h3 className="mb-1 font-semibold">{apartment.title}</h3>
            //     <p className="text-muted-foreground mb-2 text-sm">
            //       {apartment.address}
            //     </p>
            //     <p className="mb-3 text-xl font-bold">
            //       ${apartment.monthlyRent}/mo
            //     </p>
            //     <div className="text-muted-foreground flex justify-between text-sm">
            //       <div className="flex items-center gap-1">
            //         <BedDouble className="h-4 w-4" />
            //         <span>{apartment.bedrooms}</span>
            //       </div>
            //       <div className="flex items-center gap-1">
            //         <Bath className="h-4 w-4" />
            //         <span>{apartment.bathrooms}</span>
            //       </div>
            //       <div className="flex items-center gap-1">
            //         <Maximize className="h-4 w-4" />
            //         <span>{apartment.squareFootage} sq ft</span>
            //       </div>
            //     </div>
            //   </CardContent>
            //   <CardFooter className="p-4 pt-0">
            //     <Button variant="outline" className="w-full" asChild>
            //       <Link href={`/apartments/${apartment.id}`}>View Details</Link>
            //     </Button>
            //   </CardFooter>
            // </Card>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button asChild>
            <Link href="/apartments">
              View All Apartments
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
