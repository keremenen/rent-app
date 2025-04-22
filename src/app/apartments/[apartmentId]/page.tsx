import React from "react";
import prisma from "@/lib/db";

import { ApartmentSpecifications } from "@/components/apartment-specifications";
import { ApartmentGallery } from "@/components/apartment-gallery";
import { ApartmentHeader } from "@/components/apartment-header";
import ApartmentDescription from "@/components/apartment-description";
import { ApartmentLocation } from "@/components/apartment-location";
import { ApartmentContact } from "@/components/apartment-contact";

type ApartmentPageParams = {
  params: Promise<{ apartmentId: string }>;
};

async function fetchApartment(apartmentId: string) {
  return prisma.apartment.findUnique({
    where: { id: apartmentId },
  });
}

function ApartmentNotFound() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <h1 className="text-2xl font-semibold">Apartment not found</h1>
    </div>
  );
}

export default async function ApartmentPage({ params }: ApartmentPageParams) {
  const { apartmentId } = await params;
  const apartment = await fetchApartment(apartmentId);

  if (!apartment) {
    return <ApartmentNotFound />;
  }

  const {
    title,
    address,
    monthlyRent,
    gallery,
    bathrooms,
    bedrooms,
    squareFootage,
    availableFrom,
    description,
    amenities,
  } = apartment;

  return (
    <div>
      <ApartmentHeader
        title={title}
        address={address}
        monthlyRent={Number(monthlyRent)}
      />
      <main className="container px-4 py-6 md:py-10">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-2">
            <ApartmentGallery images={gallery} />
            <ApartmentSpecifications
              bathrooms={bathrooms}
              bedrooms={bedrooms}
              squareFootage={Number(squareFootage)}
              availableFrom={availableFrom}
            />
            <ApartmentDescription
              description={description}
              features={amenities}
            />
            <ApartmentLocation address={address} />
          </div>
          <div className="lg-col-span-1">
            <ApartmentContact
              rent={Number(monthlyRent)}
              availableFrom={availableFrom}
            />
          </div>
        </div>
        {/* <SimilarApartments /> */}
      </main>
    </div>
  );
}
