import ApartmentContact from "@/components/apartment-contact";
import ApartmentDescription from "@/components/apartment-description";
import ApartmentGallery from "@/components/apartment-gallery";
import ApartmentHeader from "@/components/apartment-header";
import ApartmentSpecifications from "@/components/apartment-specifications";
import { getAparment } from "@/lib/utils";

type Params = Promise<{ id: string }>;
export default async function ApartmentPage(props: { params: Params }) {
  const params = await props.params;
  const id = params.id;

  const apartment = await getAparment(id);

  return (
    <div>
      <ApartmentHeader apartment={apartment} />
      <main className="container px-4 py-6 md:py-10">
        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-4 lg:col-span-2">
            <ApartmentGallery apartment={apartment} />
            <ApartmentSpecifications apartment={apartment} />
            <ApartmentDescription apartment={apartment} />
          </div>
          <div className="lg-col-span-1">
            <ApartmentContact apartment={apartment} />
          </div>
        </div>
      </main>
    </div>
  );
}
