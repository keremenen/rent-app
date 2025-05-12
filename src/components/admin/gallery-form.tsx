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
import { removeImageFromGallery, uploadGalleryImages } from "@/actions/actions";
import { useRef, useState, useTransition } from "react";
import { cn } from "@/lib/utils";

type GalleryFormProps = {
  gallery: string[];
  cityId: string;
};

export default function GalleryForm({ gallery, cityId }: GalleryFormProps) {
  const imageInputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<File[] | null>(null);
  const [isPending, startTransition] = useTransition();

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFiles(Array.from(event.target.files)); // Handle multiple files
    }
  };

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
              gallery.map((image, index) => (
                <div
                  key={index}
                  className={cn(
                    "relative mx-auto aspect-video w-full max-w-[500px] overflow-hidden rounded-lg border",
                    isPending && "opacity-50",
                  )}
                >
                  <div className="absolute top-0 right-0 z-5 p-2">
                    <Button
                      variant="destructive"
                      size={"icon"}
                      onClick={() => {
                        startTransition(async () => {
                          await removeImageFromGallery(cityId, image);
                        });
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
          </div>

          <div className="flex items-center justify-between">
            <input
              type="file"
              accept="image/*"
              multiple
              className="hidden"
              ref={imageInputRef}
              onChange={handleImageChange}
            />
            <Button
              variant={"outline"}
              onClick={() => imageInputRef.current?.click()}
            >
              {files && files.length > 0
                ? `${files.length} file${files.length > 1 ? "s" : ""} selected`
                : "Select new images"}
            </Button>
            <Button
              disabled={isPending}
              onClick={async () =>
                startTransition(async () => {
                  await uploadGalleryImages(files!, cityId);
                  setFiles(null); // Clear the selected files after upload
                })
              }
            >
              {isPending ? "Loading..." : "Add new images"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
