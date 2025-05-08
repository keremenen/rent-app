"use client";
import ApartmentsList from "@/components/apartments-list";
import { ApartmentListHeader } from "@/components/apartments-list-header";
import ApartmentsFilters from "@/components/apartments-filters";
import { useApartmentContext } from "@/lib/hooks";

export default function ApartmentsListPage() {
  const { apartments } = useApartmentContext();

  return (
    <div className="bg-background">
      <ApartmentListHeader totalCount={apartments.length} />
      <main className="container px-4 py-8">
        <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
          <div className={`space-y-6 lg:block`}>
            <ApartmentsFilters />
          </div>
          <ApartmentsList />
        </div>
      </main>
    </div>
  );
}
