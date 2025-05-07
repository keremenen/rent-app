"use client";

import { ApartmentCard } from "./apartment-card";
import { Button } from "@/components/ui/button";
import SectionHeader from "./section-header";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useApartmentContext } from "@/lib/hooks";

export function FeaturedApartments() {
  const { apartments } = useApartmentContext();

  // Get 4 apartments from the list
  const featuredApartments = apartments.slice(0, 4);

  return (
    <section className="bg-background py-16">
      <div className="container px-4">
        <SectionHeader
          title={"Featured Apartments"}
          description=" Discover our handpicked selection of premium apartments in the most
          desirable neighborhoods"
        />

        {featuredApartments && featuredApartments.length > 0 ? (
          <>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {featuredApartments.map((apartment) => (
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
          </>
        ) : (
          <EmtpyContainer />
        )}
      </div>
    </section>
  );
}

function EmtpyContainer() {
  return (
    <div className="mb-6 flex items-center justify-center">
      <h2>no apartments found</h2>
    </div>
  );
}
