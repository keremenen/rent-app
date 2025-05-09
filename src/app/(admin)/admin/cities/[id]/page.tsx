"use client";
import ApartmentActionHeader from "@/components/admin/apartment-action-header";
import { use } from "react";
type Params = Promise<{ id: string }>;

export default function EditCityPage(props: { params: Params }) {
  const { id } = use(props.params);
  return (
    <section className="flex flex-col gap-6">
      <ApartmentActionHeader />

      <section className="mt-8 w-full max-w-7xl">citiesform</section>
    </section>
  );
}
