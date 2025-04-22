// import { ApartmentContact } from "@/components/apartment-contact";
import { ApartmentSpecifications } from "@/components/apartment-specifications";
import { ApartmentGallery } from "@/components/apartment-gallery";
import { ApartmentHeader } from "@/components/apartment-header";
// import { ApartmentLocation } from "@/components/apartment-location";
// import { SimilarApartments } from "@/components/similar-apartments";
import prisma from "@/lib/db";
import React from "react";
import ApartmentDescription from "@/components/apartment-description";
import { ApartmentLocation } from "@/components/apartment-location";
import { ApartmentContact } from "@/components/apartment-contact";

type ApartmentPageParams = {
  params: Promise<{ apartmentId: string }>;
};

export default async function ApartmentPage({ params }: ApartmentPageParams) {
  const { apartmentId } = await params;

  const apartment = await prisma.apartment.findUnique({
    where: { id: apartmentId },
  });

  if (!apartment) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <h1 className="text-2xl font-semibold">Apartment not found</h1>
      </div>
    );
  }

  return (
    <div>
      <ApartmentHeader
        title={apartment.title}
        address={apartment.address}
        monthlyRent={Number(apartment.monthlyRent)}
      />
      <main className="container px-4 py-6 md:py-10">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-2">
            <ApartmentGallery images={apartment.gallery.split(", ")} />
            {/* <ApartmentSpecifications
              bathrooms={apartment.bathrooms}
              bedrooms={apartment.bedrooms}
              squareFootage={apartment.squareFootage}
              availableFrom={apartment.availableFrom}
            /> */}
            {/* <ApartmentDescription
              description={apartment.description}
              features={apartment.amenities.split(", ")}
            /> */}
            {/* <ApartmentLocation address={apartment.address} /> */}
          </div>
          <div className="lg-col-span-1">
            {/* <ApartmentContact
              rent={apartment.monthlyRent}
              availableFrom={apartment.availableFrom}
            /> */}
          </div>
        </div>
        {/* <SimilarApartments /> */}
      </main>
    </div>
  );
}
