"use client";
import ApartmentActionHeader from "@/components/admin/apartment-action-header";
import { use } from "react";
import ApartmentForm from "@/components/admin/apartment-form";

type Params = Promise<{ id: string }>;

export default function EditApartmentPage(props: { params: Params }) {
  const { id } = use(props.params);
  return (
    <section className="flex flex-col gap-6">
      <ApartmentActionHeader />

      <section className="mx-auto mt-8 w-full max-w-7xl">
        <ApartmentForm actionType={"edit"} apartmentId={id} />
      </section>
    </section>
  );
}
