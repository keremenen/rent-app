import ApartmentActionHeader from "@/components/admin/apartment-action-header";
import CitiesForm from "@/components/admin/cities-form";

export default function EditCityPage() {
  return (
    <section className="flex flex-col gap-6">
      <ApartmentActionHeader />

      <section className="mt-8 w-full max-w-7xl">
        <CitiesForm />
      </section>
    </section>
  );
}
