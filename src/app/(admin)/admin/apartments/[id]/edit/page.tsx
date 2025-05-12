import ApartmentForm from "@/components/admin/apartment-form";
import GalleryForm from "@/components/admin/gallery-form";
import ImagesForm from "@/components/admin/images-form";
import { Button } from "@/components/ui/button";
import { getAparment } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";

type Params = Promise<{ id: string }>;

export default async function EditApartmentPage(props: { params: Params }) {
  const params = await props.params;
  const id = params.id;

  const apartment = await getAparment(id);

  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon">
          <Link href={`/admin/apartments`}>
            <ChevronLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-2xl font-bold tracking-tight">
          Edit apartment{" "}
          <span className="ml-2 text-sm font-light">(ID: {id})</span>
        </h1>
      </div>

      <section className="w-full max-w-7xl space-y-6">
        <ApartmentForm apartment={apartment} actionType="edit" />
        <ImagesForm imageUrl={apartment.thumbnail} id={id} type={"apartment"} />
        <GalleryForm gallery={apartment.gallery} id={id} type={"apartment"} />
      </section>
    </section>
  );
}
