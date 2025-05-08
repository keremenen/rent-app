import React from "react";
import { Button } from "../ui/button";
import { ImagePlus, Trash2, Upload } from "lucide-react";
import { Separator } from "../ui/separator";

export default function ApartmentImagesFields() {
  return (
    <section className="space-y-4">
      <div>
        <h3 className="text-lg font-medium">Thumbnail Image</h3>
        <p className="text-muted-foreground text-sm">
          This image will be used as the main image for the apartment listing.
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
    </section>
  );
}
