"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ApartmentActionHeader from "@/components/admin/apartment-action-header";
import ApartmentDetailsFields from "@/components/admin/apartment-details-fields";
import ApartmentAmenitiesFields from "@/components/admin/apartment-amenities-fields";
import ApartmentImagesFields from "@/components/admin/apartment-images-fields";
import { use } from "react";

type Params = Promise<{ id: string }>;

export default function EditApartmentPage(props: { params: Params }) {
  const { id } = use(props.params);
  return (
    <div className="flex flex-col gap-6">
      <ApartmentActionHeader />

      <Tabs defaultValue="details">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="details">Details</TabsTrigger>
          <TabsTrigger value="amenities">Amenities</TabsTrigger>
          <TabsTrigger value="images">Images</TabsTrigger>
        </TabsList>

        <TabsContent value="details">
          <ApartmentDetailsFields apartmentId={id} />
        </TabsContent>

        <TabsContent value="amenities" className="space-y-6 pt-4">
          <ApartmentAmenitiesFields />
        </TabsContent>

        <TabsContent value="images" className="space-y-4 pt-4">
          <ApartmentImagesFields />
        </TabsContent>
      </Tabs>
    </div>
  );
}
