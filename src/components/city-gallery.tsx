"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type CityGalleryProps = {
  cityName: string;
  gallery: {
    imageUrl: string;
  }[];
};

export default function CityGallery({ gallery, cityName }: CityGalleryProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Photo Gallery</CardTitle>
        <CardDescription>Explore {cityName} through photos</CardDescription>
      </CardHeader>
      <CardContent>
        <CityGalleryImageWrapper gallery={gallery} />
      </CardContent>
    </Card>
  );
}

type CityGalleryImageWrapperProps = {
  gallery: {
    imageUrl: string;
  }[];
};

function CityGalleryImageWrapper({ gallery }: CityGalleryImageWrapperProps) {
  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
      {gallery.slice(0, 6).map((galleryItem, index) => (
        <SingleCityGalleryImage imageUrl={galleryItem.imageUrl} key={index} />
      ))}
    </div>
  );
}

function SingleCityGalleryImage({ imageUrl }: { imageUrl: string }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="relative aspect-square">
          <Image
            src={imageUrl || "/placeholder.svg"}
            alt={`City image`}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        </div>
      </DialogTrigger>
      <DialogContent className="w-full">
        <DialogTitle>
          <FullscreenGallery imageUrl={imageUrl} />
        </DialogTitle>
      </DialogContent>
    </Dialog>
  );
}

function FullscreenGallery({ imageUrl }: { imageUrl: string }) {
  return (
    <div className="relative">
      <div className="relative aspect-[16/9] w-full">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={`City image`}
          fill
          className="object-contain"
        />

        <div className="bg-background/80 absolute bottom-2 left-1/2 -translate-x-1/2 px-2 py-1 text-sm"></div>
      </div>
    </div>
  );
}
