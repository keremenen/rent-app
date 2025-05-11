"use client";
import { useRef, useState } from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { uploadThumbnailImage } from "@/actions/actions";

export default function ImagesForm({
  imageUrl,
  cityId,
}: {
  imageUrl: string;
  cityId: string;
}) {
  const imageInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Thumbnail</CardTitle>
        <CardDescription>Upload a main image for this city.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="relative mx-auto aspect-video w-full max-w-[500px] overflow-hidden rounded-lg border">
            <Image
              src={imageUrl}
              alt="City cover image"
              sizes="(max-width: 768px) 100px, (max-width: 1200px) 500px, 700px"
              fill
            />
          </div>
          {file && <p>new file selected!, apply</p>}

          <input
            type="file"
            ref={imageInputRef}
            className="hidden"
            onChange={handleImageChange}
          />

          <div className="flex items-center justify-between">
            <Button onClick={() => imageInputRef.current?.click()}>
              Select new image
            </Button>
            <Button
              onClick={async () => await uploadThumbnailImage(file!, cityId)}
            >
              Apply
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
