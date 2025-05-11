"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { Button } from "../ui/button";
import { X } from "lucide-react";
import { removeImageFromGallery } from "@/actions/actions";

type GalleryFormProps = {
  gallery: string[];
  cityId: string;
};

export default function GalleryForm({ gallery, cityId }: GalleryFormProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Gallery</CardTitle>
        <CardDescription>Upload a main image for this city.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="relative grid w-full grid-cols-4 gap-4">
            {gallery &&
              gallery.map((image) => (
                <div
                  key={image}
                  className="relative mx-auto aspect-video w-full max-w-[500px] overflow-hidden rounded-lg border"
                >
                  <div className="absolute top-0 right-0 z-5 p-2">
                    <Button
                      variant="destructive"
                      size={"icon"}
                      onClick={() => {
                        removeImageFromGallery(cityId, image);
                      }}
                    >
                      <X />
                    </Button>
                  </div>
                  <Image
                    src={image}
                    alt="City cover image"
                    sizes="(max-width: 768px) 100px, (max-width: 1200px) 500px, 700px"
                    fill
                  />
                </div>
              ))}
            {/* <Image
              src={imageUrl}
              alt="City cover image"
              sizes="(max-width: 768px) 100px, (max-width: 1200px) 500px, 700px"
              fill
            /> */}
          </div>
          {/* {file && <p>new file selected!, apply</p>} */}

          {/* <input
            type="file"
            ref={imageInputRef}
            className="hidden"
            onChange={handleImageChange}
          /> */}

          <div className="flex items-center justify-between">
            {/* <Button onClick={() => imageInputRef.current?.click()}>
              Select new image
            </Button>
            <Button
              onClick={async () => await uploadThumbnailImage(file!, cityId)}
            >
              Apply
            </Button> */}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
