import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
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
