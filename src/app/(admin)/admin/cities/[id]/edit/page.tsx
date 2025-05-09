import ApartmentActionHeader from "@/components/admin/apartment-action-header";
import CityForm from "@/components/admin/city-form";

export default function EditCityPage() {
  return (
    <section className="flex flex-col gap-6">
      <ApartmentActionHeader />

      <section className="w-full max-w-7xl">
        <CityForm actionType="edit" id="gdansk" />
      </section>
    </section>
  );
}
