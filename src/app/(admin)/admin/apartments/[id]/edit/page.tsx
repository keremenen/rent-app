"use client";
import { ImagePlus, Plus, Trash2, Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import ApartmentActionHeader from "@/components/admin/apartment-action-header";
import ApartmentDetailsFields from "@/components/admin/apartment-details-fields";
import ApartmentAmenitiesFields from "@/components/admin/apartment-amenities-fields";

export default function EditApartmentPage() {
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
          <ApartmentDetailsFields />
        </TabsContent>

        <TabsContent value="amenities" className="space-y-6 pt-4">
          <ApartmentAmenitiesFields />
        </TabsContent>

        <TabsContent value="images" className="space-y-4 pt-4">
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-medium">Thumbnail Image</h3>
              <p className="text-muted-foreground text-sm">
                This image will be used as the main image for the apartment
                listing.
              </p>

              <div className="mt-4">
                <div className="relative">
                  <div className="absolute right-2 bottom-2 flex gap-2">
                    <Button variant="secondary" size="sm">
                      <Upload className="mr-2 h-4 w-4" />
                      Change
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <Separator />

            <div>
              <h3 className="text-lg font-medium">Gallery Images</h3>
              <p className="text-muted-foreground text-sm">
                Add multiple images to showcase the apartment.
              </p>

              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
                {Array(8).map((image, index) => (
                  <div key={index} className="relative">
                    <Button
                      variant="destructive"
                      size="icon"
                      className="absolute top-2 right-2"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}

                <div className="flex h-[150px] w-full items-center justify-center rounded-md border border-dashed">
                  <Button variant="outline">
                    <ImagePlus className="mr-2 h-4 w-4" />
                    Add Image
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
