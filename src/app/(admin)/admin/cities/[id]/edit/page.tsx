import ApartmentActionHeader from "@/components/admin/apartment-action-header";
import CityForm from "@/components/admin/city-form";
import { getCity } from "@/lib/utils";

type Params = Promise<{ id: string }>;
export default async function EditCityPage(props: { params: Params }) {
  const params = await props.params;
  const id = params.id;

  const city = await getCity(id);

  return (
    <section className="flex flex-col gap-6">
      <ApartmentActionHeader />

      <section className="w-full max-w-7xl">
        <CityForm actionType="edit" city={city} />
      </section>
    </section>
  );
}
