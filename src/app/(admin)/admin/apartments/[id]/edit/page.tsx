import ApartmentActionHeader from "@/components/admin/apartment-action-header";
import ApartmentForm from "@/components/admin/apartment-form";
import GalleryForm from "@/components/admin/gallery-form";
import ImagesForm from "@/components/admin/images-form";
import { getAparment } from "@/lib/utils";

type Params = Promise<{ id: string }>;

export default async function EditApartmentPage(props: { params: Params }) {
  const params = await props.params;
  const id = params.id;

  const apartment = await getAparment(id);

  return (
    <section className="flex flex-col gap-6">
      <ApartmentActionHeader />

      <section className="w-full max-w-7xl space-y-6">
        <ApartmentForm apartment={apartment} actionType="edit" />
        <ImagesForm imageUrl={apartment.thumbnail} id={id} type={"apartment"} />
        <GalleryForm gallery={apartment.gallery} id={id} type={"apartment"} />
      </section>
    </section>
  );
}
