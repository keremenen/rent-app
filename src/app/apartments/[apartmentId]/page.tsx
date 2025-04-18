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

// const apartment = {
//   id: "apt-304",
//   title: "Modern 2-Bedroom with City Views",
//   address: "123 Skyline Avenue, Downtown, New York, NY 10001",
//   price: 2500,
//   bedrooms: 2,
//   bathrooms: 2,
//   squareFeet: 1200,
//   description:
//     "Experience luxury living in this stunning 2-bedroom apartment with breathtaking city views. This recently renovated unit features hardwood floors, stainless steel appliances, and an open floor plan perfect for entertaining. The spacious primary bedroom includes an en-suite bathroom and walk-in closet, while the second bedroom is ideal for guests or a home office. Enjoy the convenience of in-unit laundry and a modern kitchen with granite countertops.",
//   features: [
//     "Hardwood floors throughout",
//     "Floor-to-ceiling windows",
//     "Stainless steel appliances",
//     "Granite countertops",
//     "In-unit washer and dryer",
//     "Central air conditioning",
//     "Walk-in closet in primary bedroom",
//     "En-suite bathroom",
//     "Open floor plan",
//     "Recently renovated",
//   ],
//   amenities: [
//     "24/7 Doorman",
//     "Fitness Center",
//     "Rooftop Terrace",
//     "Package Room",
//     "Bike Storage",
//     "Pet Friendly",
//     "On-site Parking",
//     "Storage Units",
//     "Resident Lounge",
//     "Business Center",
//   ],
//   images: [
//     "/placeholder-image.jpg",
//     "/placeholder-image.jpg",
//     "/placeholder-image.jpg",
//     "/placeholder-image.jpg",
//     "/placeholder-image.jpg",
//   ],
//   available: true,
//   availableFrom: "2025-05-01",
//   leaseTerms: "12-month minimum",
//   petPolicy: "Pets allowed with deposit",
//   latitude: 40.7128,
//   longitude: -74.006,
//   nearbyTransit: [
//     "2 blocks to A/C/E subway lines",
//     "Bus stop on corner (M20, M104)",
//     "15 min walk to Penn Station",
//   ],
// };

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
        monthlyRent={20.0}
      />
      <main className="container px-4 py-6 md:py-10">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-2">
            <ApartmentGallery images={apartment.gallery.split(", ")} />
            <ApartmentSpecifications
              bathrooms={apartment.bathrooms}
              bedrooms={apartment.bedrooms}
              squareFootage={apartment.squareFootage}
              availableFrom={apartment.availableFrom}
            />
            <ApartmentDescription
              description={apartment.description}
              features={apartment.amenities.split(", ")}
            />
            <ApartmentLocation address={apartment.address} />
          </div>
          <div className="lg-col-span-1">
            <ApartmentContact
              rent={apartment.monthlyRent}
              availableFrom={apartment.availableFrom}
            />
          </div>
        </div>
        {/* <SimilarApartments /> */}
      </main>
    </div>
  );
}
