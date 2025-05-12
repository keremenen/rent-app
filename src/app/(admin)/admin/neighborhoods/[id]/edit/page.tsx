import ApartmentActionHeader from "@/components/admin/apartment-action-header";
import ImagesForm from "@/components/admin/images-form";
import NeighborhoodForm from "@/components/admin/neighborhood-form";
import { getNeighborhood } from "@/lib/utils";
// import { getCity } from "@/lib/utils";

type Params = Promise<{ id: string }>;
export default async function EditNeighborhoodPage(props: { params: Params }) {
  const params = await props.params;
  const id = params.id;

  const neighborhood = await getNeighborhood(id);

  return (
    <section className="flex flex-col gap-6">
      <ApartmentActionHeader />

      <section className="w-full max-w-7xl space-y-6">
        <NeighborhoodForm actionType="edit" neighborhood={neighborhood} />

        <ImagesForm
          imageUrl={neighborhood.thumbnail}
          id={id}
          type={"neighborhood"}
        />
      </section>
    </section>
  );
}
