import ImagesForm from "@/components/admin/images-form";
import NeighborhoodForm from "@/components/admin/neighborhood-form";
import { Button } from "@/components/ui/button";
import { getNeighborhood } from "@/lib/utils";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
// import { getCity } from "@/lib/utils";

type Params = Promise<{ id: string }>;
export default async function EditNeighborhoodPage(props: { params: Params }) {
  const params = await props.params;
  const id = params.id;

  const neighborhood = await getNeighborhood(id);

  return (
    <section className="flex flex-col gap-6">
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="icon">
          <Link href={`/admin/neighborhoods`}>
            <ChevronLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-2xl font-bold tracking-tight">
          Edit city <span className="ml-2 text-sm font-light">(ID: {id})</span>
        </h1>
      </div>

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
