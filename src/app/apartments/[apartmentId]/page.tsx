"use client";
import { ApartmentSpecifications } from "@/components/apartment-specifications";
import { ApartmentGallery } from "@/components/apartment-gallery";
import { ApartmentHeader } from "@/components/apartment-header";
import ApartmentDescription from "@/components/apartment-description";
import { ApartmentLocation } from "@/components/apartment-location";
import { ApartmentContact } from "@/components/apartment-contact";
import { useApartmentContext } from "@/lib/hooks";
import { useEffect } from "react";

export default function ApartmentPage() {
  const { handleSetSelectedApartment } = useApartmentContext();

  useEffect(() => {
    handleSetSelectedApartment("apt-001");
  }, [handleSetSelectedApartment]);

  return (
    <div>
      <ApartmentHeader />
      <main className="container px-4 py-6 md:py-10">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-2">
            <ApartmentGallery />
            <ApartmentSpecifications />
            <ApartmentDescription />
            <ApartmentLocation />
          </div>
          <div className="lg-col-span-1">
            <ApartmentContact />
          </div>
        </div>
      </main>
    </div>
  );
}
